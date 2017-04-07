/**
 * Created by puman on 07.04.2017.
 */

function Greetr(){
    this.greeting = "Hay!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();