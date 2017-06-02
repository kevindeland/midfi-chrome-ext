# Midfi prototyping chrome extension
This is a chrome extension for performing midfi prototyping.

## Instructions
1. Download or clone this folder into a local directory of your choice.
2. Open your Google Chrome browser and navigate to "chrome://extensions/".
3. Click on "Load unpacked extension".
4. Navigate to your location of this project and press "Select".
5. Make sure that the "Vittore Midfi Prototyping" extension is Enabled. You should see the Vittore icon has been added to your Chrome toolbar.
6. Use Chrome to navigate to your renaissance demo page, and go to the goal setting page. When you hover over the "Calculate Goal" button, you should notice you have a new friend!


## Developer notes and process work
### Fun With z-index
this guy makes a little badge that overlays the entire page!
https://css-tricks.com/video-screencasts/40-how-z-index-works/
1. pick an Image: url(https://www.iconfinder.com/data/icons/black-logistics-icons/256/Robot_head.png)
2. add a div
3. give it a css with proper dimensions, absolute position, top: 0px and right: 0px, with background or url(images/badge.png);

### Other resources used
https://stackoverflow.com/questions/8926378/how-to-select-an-input-element-by-value-using-javascript
https://www.w3schools.com/jquery/jquery_slide.asp

Adding as chrome plugin:
https://stackoverflow.com/questions/43029072/run-js-script-in-chrome-extension-on-page-load
https://stackoverflow.com/questions/21317476/how-to-use-jquery-in-chrome-extension

Testing with jquery in the console
https://stackoverflow.com/questions/7474354/include-jquery-in-the-javascript-console
