
window.onload = function () {
  console.log("page loaded, adding script to page");

  // copy and paste all of these into the console
  var USE_FRAME = false;


  function addFrameDiv() {
    var frameDiv = document.createElement('div');
    frameDiv.setAttribute("id", "botFrame")
    frameCssText = 'position:absolute;'
    frameCssText += 'height:256px;'
    frameCssText += 'width:512px;'
    frameCssText += 'top:0px;'
    frameCssText += 'right:0px;'
    //frameCssText += 'background-color:rgb(220, 220, 220);'
    //frameCssText += 'background: url(https://www.onedollarcdduplication.com/new/wp-content/uploads/2014/10/Gray-Box.jpg);'
    frameCssText += 'background: url(https://www.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png);'
    frameCssText += 'display:none;'
    frameDiv.style.cssText = frameCssText;
    document.body.appendChild(frameDiv);
  }
  //addFrameDiv();

  function addDiv(name, params) {

    var parent = params.parent;
    var bindTo = params.bindTo;

    var myDiv = document.createElement('div');
    myDiv.setAttribute("id", name);
    var cssText = '';
    cssText += params.css;

    myDiv.style.cssText = cssText;

    parent.appendChild(myDiv);

    if(params.actions && params.actions.length > 0) {
      console.log('adding ' + params.actions.length + ' actions for ' + name);

      function byeRobot() {
        $("#" + name).slideUp();
      }


        params.actions[0].bindTo.addEventListener('mouseover', function () {
          console.log('hi ' + name)
          $("#" + name).slideDown();
        });
        params.actions[0].bindTo.addEventListener('mouseleave', byeRobot);


    } else console.log("no actions found for " + name);

    if(params.innerHTML) {
      console.log("setting innerHTML for " + name);
      myDiv.innerHTML = params.innerHTML;
    }

    return myDiv;
  };




  var calculateGoal = document.querySelectorAll("input[value=\"Calculate Goal\"]")[0];

  var frameDiv = addDiv("frame", {
    parent: document.body,
    actions: [
      {
        bindTo: calculateGoal
      }
    ],
    css: 'position:absolute;' + 'width:512px;' + 'height:256px;' +'top:0px;'+  'right:0px;'
    + 'background: url(https://www.onedollarcdduplication.com/new/wp-content/uploads/2014/10/Gray-Box.jpg);display:none;'
  });

  addDiv("bot", {
    parent: frameDiv,
    actions: [],
    css: 'position:absolute;' + 'width:256px;' + 'height:256px;' +'top:0px;'+  'left:0px;'
    + 'background: url(https://www.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png);',
  });

  addDiv("text", {
    parent: frameDiv,
    css: 'position:absolute;' + 'width:128px;' + 'height:128px;' +'top:0px;'+  'right:0px;'
    + 'background-color: rgb(250, 150, 250)',
    innerHTML: "Hey it's me your buddy."
  })




  return;
  //
  //if (USE_FRAME)
  calculateGoal.addEventListener('mouseover', hiFrame); // HACK frame
  //else
  calculateGoal.addEventListener('mouseover', hiRobot); // HACK solo

  //
  //if (USE_FRAME)
  calculateGoal.addEventListener('mouseleave', byeFrame); // HACK solo
  //else
  calculateGoal.addEventListener('mouseleave', byeRobot); // HACK solo
};



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
