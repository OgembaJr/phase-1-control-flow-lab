function scuberGreetingForFeet(value){
  if(value <= 400){
    return 'This one is on me!';

  }else if(value >2000 && value <=2500){
    return 'I will gladly take your thirty bucks.';

  }else {
    return 'No can do.';
  }
     
  // Write your code here!
}
function ternaryCheckCity(city){
  // Write your code here!
   return city === "NYC" ? "Ok, sounds good." : 'No go.';

}

function switchOnCharmFromTip(key){
  // Write your code here!
  switch (key) {
    case 'generous': 
    return "Thank you so much.";
      
      break;
    case 'not as generous': 
        return "Thank you.";
      break;
    default: 
         return "Bye.";
  }

}
 
