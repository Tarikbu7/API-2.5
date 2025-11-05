let button=document.getElementById("second")
let input=document.getElementById("first")

const area=document.getElementById("city")
const st=document.getElementById("stat")
const tp=document.getElementById("temp")

button.addEventListener('click' , function(){


fetch("https://api.openweathermap.org/data/2.5/weather?q="+ input.value + "&appid=048ccd1104d3c6d11b601ac7c6971d08&units=metric")

.then(response=>response.json())
.then(data=>{


console.log(data)

area.textContent=data.name
st.textContent=data.weather[0].description
tp.textContent=" tempurature " + data.main.temp + "C"



})
.catch(error=>{

console.error("wrong code" , error)

alert("there no city with that code")



})




})