/**
 * Created by puman on 07.04.2017.
 */

function Greetr(){
    this.greeting = "Hay from fourth greets!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;
