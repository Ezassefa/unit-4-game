$(document).ready(function(){
    let Random=Math.floor(Math.random()*101+19)
   
    $('#randomNumber').text(Random);
   

    let score= 0; 
    let wins= 0;
    let losses = 0;
    let blue= Math.floor(Math.random()*11+1)
    let green= Math.floor(Math.random()*11+1)
    let red= Math.floor(Math.random()*11+1)
    let yellow= Math.floor(Math.random()*11+1)
   
    
    
   
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);


  //reset the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        blue= Math.floor(Math.random()*11+1);
        green= Math.floor(Math.random()*11+1);
        red= Math.floor(Math.random()*11+1);
        yellow= Math.floor(Math.random()*11+1);
        score= 0;
        $('#score').text(score);
        } 
  

  function win(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  


  function lose(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
  }
  

    $('#blue').on ('click', function(){
      score = score + blue;
      $('#score').text(score);      
          if (score == Random){
            win();
          }
          else if ( score > Random){
            lose();
          }   
    })  
    $('#green').on ('click', function(){
      score = score + green;
      
      $('#score').text(score); 
          if (score == Random){
            win();
          }
          else if ( score > Random){
            lose();
          } 
    })  
    $('#red').on ('click', function(){
      score = score + red;
      
      $('#score').text(score);
 

            if (score == Random){
            win();
          }
          else if ( score > Random){
            lose();
          } 
    })  
    $('#yellow').on ('click', function(){
      score = score + yellow;
     
      $('#score').text(score); 
        
            if (score == Random){
            win();
          }
          else if ( score > Random){
            lose();
          }
    });   
  }); 
  
