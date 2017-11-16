// querySelector selects a single element
// the textContent is being added to the #header, its not replacing it
var header = document.querySelector('#header');
header.textContent += " Hello World";

//querySelectorAll returns a array like data structure which contains all elements passed inside ()
var pStyles = document.querySelectorAll(".p-styles");
console.log(pStyles);

for (var i = 0; i < pStyles.length; i++) {
  pStyles[i].textContent = "I'm p-styles " + (i + 1); //the parenthesis is there to prevent concatenation
}

var lis = document.querySelectorAll("li");
console.log(lis);

for (var i = 0; i < lis.length; i++) {
  lis[i].textContent = i + 1;
}

var headerStyle = document.getElementById('second-header');
headerStyle.textContent = "this is it";
headerStyle.style.color = "blue";

var awesomes = document.getElementsByClassName('awesome');
awesomes.textContent = "once it is"; // this doesnt work cuz awesome is an array in console, so we had to loop
for (var i = 0; i < awesomes.length; i++) {
  awesomes[i].textContent = "once it is";
}

var h3s = document.getElementsByTagName('h3');

for (var i = 0; i < h3s.length; i++) {
  h3s[i].textContent = "Kurt is mean";
}
