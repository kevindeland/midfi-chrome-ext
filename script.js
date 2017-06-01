
window.onload = function () {
  console.log("page loaded, adding script to page");
  // copy and paste all of these into the console
  var elemDiv = document.createElement('div');
  elemDiv.setAttribute("id", "bot");
  elemDiv.style.cssText= 'position:absolute;width:256px;height:256px;top:0px;right:0px;background: url(https://www.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png); display:none;';
  document.body.appendChild(elemDiv);

  function hiRobot() {
    $("#bot").slideDown();
  }

  function byeRobot() {
    $("#bot").slideUp();
  }

  var calculateGoal = document.querySelectorAll("input[value=\"Calculate Goal\"]")[0];
  calculateGoal.addEventListener('mouseover', hiRobot);

  calculateGoal.addEventListener('mouseleave', byeRobot);
}();



// unused code
/*
function getInputsByValue(value)
{
    var allInputs = document.getElementsByTagName("input");
    var results = [];
    for(var x=0;x<allInputs.length;x++)
        if(allInputs[x].value == value)
            results.push(allInputs[x]);
    return results;
}

var google = getInputsByValue("Google Search")[0];

// alternatively
document.querySelectorAll("input[value=\"Google Search\"]")[0];

google.addEventListener('mouseover', addRobot;
*/
