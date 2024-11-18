// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it


const balloon = document.getElementById('ballon')
balloon.style.fontsize = "100px"; // Initial size of the balloon emoji

// keydown events to control the balloon size
window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp"){
        let CurrentSize = parseInt(balloon.style.fontsize);//get current font size
        balloon.style.fontsize = CurrentSize * 1.1 + "px"//inflates the balloon 
    }
    else if (event.key === "ArrowDown"){
        let currentSize = parseInt(balloon.style.fontSize); //get current font size
        balloon.style.fontsize = currentSize * 0.9 + "px"//deflates the balloon
    }
});

//tabbed layout
const tabLinks = document.querySelectorAll('#tabbed-layout ul li a');//all the tab links
const tabContents = document.querySelectorAll('#tabbed-contents > div');// all the tab content

// Function to hide all tabs
function hideTabs() {
    tabContents.forEach(tab => { // Loop through each tab content
      tab.style.display = "none"; // Set each tab content's display to none
    });

  }

  //function to show specific tab
  function showId(tabId){
    document.getElementById(tabId).style.display = "block";// Set the display style of the specified tab content to "block" to make it visible
  }

  hideTabs();//hides all the tabs
  showTab('tab1');//shows the content of the first tab

