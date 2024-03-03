let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp") ;
let wind = document.getElementById("wind") ;
let huminity = document.getElementById("humi") ;

let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

const data = async function(search){
   let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
   console.log(getData);
   let jsonData =await getData.json();
   console.log(jsonData);
   console.log(jsonData.name);

   if(jsonData.cod == 400){
       alert("Please Enter Location")
       image.src="error1.png";
       city.innerHTML="";
       temp.innerHTML="";
       type.innerHTML="";
   }
   if(jsonData.cod == 404){
       alert("Please Enter Write Location")
       image.src="error2.png";
       city.innerHTML=search.toUpperCase();
       temp.innerHTML="";
       type.innerHTML="";
   }
   city.innerHTML=search.toUpperCase();
   city.style.color="white"
   temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
   temp.style.color="white"
   type.innerHTML=jsonData.weather[0].main;
   type.style.color="white"
   wind.innerHTML=`<img class="img" src="wind.png" /><span style="position:absolute;top:89%; color:white;">${jsonData.wind.speed}km/h</span><br>
   <p style="margin-left:60px;margin-top=-80px;position:absolute;top:90%;color:white;">Wind Speed</p>`
   huminity.innerHTML=`<img  class="img" src="humidity.png" /><span style="position:absolute;top:89%; color:white;">${jsonData.main.humidity}%</span>
   <br>
   <p style="margin-left:60px;margin-top=-80px;position:absolute;top:90%;color:white;">Humidity</p>`
   let img=document.getElementsByClassName("img");
   for(let i=0;i<img.length;i++){
    img[i].style.cssText="height:25px;width:40px;margin-right:15px;margin-top:40px;"
   }

   if(type.innerHTML == "Clouds"){
       image.src="clouds.png"
   }else if(type.innerHTML == "Clear"){
       image.src="clears.png"
   }else if(type.innerHTML == "Rain"){
       image.src="rain.png"
   }else if(type.innerHTML == "Snow"){
       image.src="rain.png"
   }else if(type.innerHTML == "Haze"){
       image.src="haze.png"
   }else if(type.innerHTML == "Strom"){
       image.src="strom.png"
   }
   input.value=""
}

function myFun(){
   search=input.value;
   data(search)
}