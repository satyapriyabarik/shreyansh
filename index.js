// Import stylesheets
import './style.css';
import './css/news.css';
import './css/custom.css';
import './css/spacegallery.css';
import './js/jquerylib.js';
import './js/eye.js';
import './js/spacegallery.js';
import './js/jflip.js';
import './js/jquery.blockUI.js';
import './js/layout.js';
//import './js/moving_slider.js';
//import './js/rain.js';
// Write Javascript code!
const appDiv = document.getElementById('page');
appDiv.innerHTML = "<div id='myGallery' class='spacegallery>"
+"<img src=\"https://raw.githubusercontent.com/satyapriyabarik/shreyansh/master/pics/shreyansh-1.jpg\">"+
"<img src=\"https://raw.githubusercontent.com/satyapriyabarik/shreyansh/master/pics/shreyansh-2.jpg\">"+

"</div>";