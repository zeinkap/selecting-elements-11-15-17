// plan is to target the button and have it change colors of background when clicked
// - not allowed in naming variables
var changeBg = document.querySelector('#change-bg');
var colors = ['pink', 'green', 'blue', 'purple', 'red'];
// we need to track the number of clicks
var clicks = 0;
//onclick is old school we will add event listener which takes 2 arguments: 1st argument is what event it is listening for, and 2nd argument is what the event is triggering
changeBg.addEventListener('click', function() {
  changeBg.style.backgroundColor = colors[clicks];
  clicks++;
  // our click stops at red color so lets reset it
  if (clicks === colors.length) {
    clicks = 0;
  }
});


// 2nd way by definining a function and calling it back
function changeBtnColors() {
  changeBg.style.backgroundColor = colors[clicks];
  clicks++;
  // our click stops at red color so lets reset it
  if (clicks === colors.length) {
    clicks = 0;
  }
}

changeBg.addEventListener('click', changeBtnColors);
// the function changeBtnColors doesnt take () because we dont want it to run right away

// to change background color of page just do document.body.style
