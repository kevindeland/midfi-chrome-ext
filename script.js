
window.onload = function () {
  console.log("page loaded, adding script to page");
  // copy and paste all of these into the console
  var botDiv = document.createElement('div');
  botDiv.setAttribute("id", "bot");
  botCssText = 'position:absolute;'
  botCssText += 'width:256px;'
  botCssText += 'height:256px;'
  botCssText += 'top:0px;'
  botCssText += 'right:0px;'
  botCssText += 'background: url(https://www.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png);'
  botCssText += ' display:none;'
  botDiv.style.cssText = botCssText;
  document.body.appendChild(botDiv);

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
