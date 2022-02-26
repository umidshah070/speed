

var elForm = document.querySelector(".site__form");
var elInput = document.querySelector(".site__input");
var elMan = document.querySelector(".item__span-man");
var elVelo = document.querySelector(".item__span-velo");
var elCar = document.querySelector(".item__span-car");
var elAir = document.querySelector(".item__span-air");


elForm.addEventListener("submit", function(e){
  e.preventDefault();

  var elInputValue = elInput.value;
   var manSpeed = 3.6;
   var veloSpeed= 20.1;
   var carSpeed = 70;
   var airSpeed = 800;

   function man(){
     return elInputValue / manSpeed
   }

   function velo(){
    return elInputValue / veloSpeed
  }

  function car (){
    return elInputValue / carSpeed
  }

  function air(){
    return elInputValue / airSpeed
  }

  elMan.textContent = Math.floor(man());
  elVelo.textContent = Math.floor(velo());
  elCar.textContent = Math.floor(car());
  elAir.textContent = Math.floor(air());


});
