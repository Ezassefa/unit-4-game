# unit-4-game
Most everything is self explanitory but the one thing had trouble with was having the diamonds random value sometimes be 0. That is why the code below is written like that.

let blue= Math.floor(Math.random()*11+1)
let green= Math.floor(Math.random()*11+1)
let red= Math.floor(Math.random()*11+1)
let yellow= Math.floor(Math.random()*11+1)
   
The +1 allowed the random number to be zero but then it would always just add 1 preventing the value of the diamond to be nothing. 

I also ran out of time so the CSS is non-existant but at least the code works. 
