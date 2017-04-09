/**
 * Created by puman on 09.04.2017.
 */

function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    //Make sure type is an array :
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);

};

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
};

module.exports = Emitter;