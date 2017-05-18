//mouse <:3 )~~~~ 
//cat (=^o.o^=)__ 
//fish <`)))><

var pet = { 
  name : "Spike", 
  hungry : true, 
  weight : 10, 
  age : 1, 
  photo: "(=^o.o^=)__", 
  };

function feed(pet) { 
  if (pet.hungry === true) 
  { console.log("I'm full. Thank you so much!"); 
  pet.weight = pet.weight + 1; return 
  pet.hungry = false; } 
  else { console.log("I'm full. I already ate!"); 
  } 
 }

function exercise(pet) { 
  console.log( "Pre-weight", pet.weight); 
  pet.weight = pet.weight - 1;
  console.log("Post-weight", pet.weight); 
  return pet.hungry === true; 
  }

function bio(pet) { 
  console.log(pet); 
  }
