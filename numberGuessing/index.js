const min=1 ;
const max=100 ;
let answer=Math.floor(Math.random() * (max - min + 1)) + min  ;
let attempts= 0 ;
let guess ;
let condition=true ;
while(condition)
{
    guess=window.prompt(`GUESS A NUMBER BETWEEN ${min} and ${max}`) ;
   guess=Number(guess) ;
   console.log(guess) ;
    if(isNaN(guess)||guess<min ||guess>max)
   {window.alert(`enter a valid number`) ; }
    else
   {attempts++ ;
    if(guess==answer)
     {  condition=false ;
        window.alert(`CORRECT ANSWER. THE NUMBER OF ATTEMPTS YOU TOOK WERE ${attempts}`) ;}
    else if(guess<answer)
        {window.alert(`too low guess again`) ;}
    else
    {window.alert(`too high guess again`) ;}
   }
}
