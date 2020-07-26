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
var sdata='';
var apidata='https://my-json-server.typicode.com/satyapriyabarik/shreyansh/shreyanshdata'
$.getJSON(apidata,function(data){
   let sdataObj = data ;
   console.log(sdataObj.length)
for(var i=0;i< sdataObj.length;i++){
   sdata+="<img src=\"+ data[i].imgurl +\">"
   sdata+="damini";
   console.log("nothing",sdata)
}
appDiv.innerHTML = "<div id='myGallery' class='spacegallery>"
+sdata+
"</div>";
})

