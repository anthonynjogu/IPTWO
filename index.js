function submitFunction(event) {
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame',];
var femaleNames = [ 'Awusi', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama',];

const date = document.getElementById("date").value
const cc = parseInt(document.getElementById("century").value)
console.log(
    date
)
const dayOfTheWeek = Math.round(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7);

console.log(dayOfTheWeek);

let akanName = gender;
 
if (gender == "male"){
   akanName = maleNames [dayOfTheWeek]
 }
 else if (gender == "female"){
  akanName = femaleNames [dayOfTheWeek] 
 }
 else {
    akanName = "invalid gender";
}
 document.getElementById("test").innerHTML = "your Akan name is" + akanName
event.preventDefaut()
};


//var getAkanName = function(e){
   // e.preventDefaut()
   // const date = document.getElementById("date").value
    //console.log(date)

}


