

var elForm = document.querySelector(".site__form");
var elInput = document.querySelector(".site__input");
var elMan = document.querySelector(".item__span-man");
var elVelo = document.querySelector(".item__span-velo");
var elCar = document.querySelector(".item__span-car");
var elAir = document.querySelector(".item__span-air");
var elResult = document.querySelector(".site__result");



elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  var elInputValue = Number(elInput.value.trim());
   var manSpeed = 3.6;
   var veloSpeed= 20.1;
   var carSpeed = 70;
   var airSpeed = 800;


   if(elInputValue <= 0 || isNaN(elInputValue)){
    elResult.textContent = "0 dan katta raqam yoki son kiriting!!!";
    elResult.classList.add("site__eror");
    return

   }else{
    elResult.textContent = "";
    elResult.classList.remove("site__eror");
   }

   function man(){
     var hour = Math.floor(elInputValue / manSpeed);
     var minut = Math.floor((elInputValue / manSpeed - hour) * 60);
     return hour + " hour " + minut + " minut";
   }

   function velo(){
    var hour = Math.floor(elInputValue / veloSpeed);
    var minut = Math.floor((elInputValue / veloSpeed - hour) * 60);
    return hour + " hour " + minut + " minut";
  }

  function car (){
    var hour = Math.floor(elInputValue / carSpeed);
    var minut = Math.floor((elInputValue / carSpeed - hour) * 60);
    return hour + " hour " + minut + " minut";
  }

  function air(){
    var hour = Math.floor(elInputValue / airSpeed);
    var minut = Math.floor((elInputValue / airSpeed - hour) * 60);
    return hour + " hour " + minut + " minut";

  }

  elMan.textContent = man();
  elVelo.textContent = velo();
  elCar.textContent = car();
  elAir.textContent = air();


});
