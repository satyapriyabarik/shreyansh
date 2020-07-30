// Import stylesheets
import './style.css';
import './css/news.css';
import './css/custom.css';
import './css/spacegallery.css';
import './css/bootstrap.min.css';
import './css/bookblock.css';
import './css/demo4.css';
import './js/jquerylib.js';
import './js/jquery-1.7.1.min.js'
import './js/eye.js';
import './js/spacegallery.js';
import './js/jflip.js';
import './js/jquery.blockUI.js';
import './js/layout.js';
import './js/jquery.bookblock.js';
import './js/jquerypp.custom.js';
//import './js/modernizr.custom.js';
//import './js/moving_slider.js';
//import './js/rain.js';
// Write Javascript code!
const appDiv = document.getElementById('page');
appDiv.innerHTML = "<div id='myGallery' class='spacegallery'></div>";
var sdata='';
var apidata='https://my-json-server.typicode.com/satyapriyabarik/shreyansh/shreyanshdata'
$.getJSON(apidata,function(data){
   let sdataObj = data ;
for(var i=0;i< sdataObj.length;i++){
   sdata+="<img src="+ data[i].imgurl +">"
}
document.getElementById('myGallery').innerHTML=sdata;
})

