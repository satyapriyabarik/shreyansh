// Import stylesheets
import './style.css';
import './css/news.css';
import './css/custom.css';
import './css/spacegallery.css';
import './js/jquerylib.js';
import './js/jquery-1.7.1.min.js'
import './js/eye.js';
import './js/spacegallery.js';
import './js/jflip.js';
import './js/jquery.blockUI.js';
import './js/layout.js';
//import './js/moving_slider.js';
//import './js/rain.js';
// Write Javascript code!
const appDiv = document.getElementById('page');
var sdata={};
var apidata='http://my-json-server.typicode.com/satyapriyabarik/shreyansh/shreyanshdata'
$.getJSON(apidata,function(data){
    console.log(data)
for(var i=0;i<data.length;i++){
    sdata+="<img src=\"+ data[i].imgurl +\">"
}
})
appDiv.innerHTML = "<div id='myGallery' class='spacegallery>"
+sdata+
"</div>";