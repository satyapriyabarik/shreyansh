// Import stylesheets
import './style.css';
import './css/news.css';
import './css/custom.css';
import './css/spacegallery.css';
import './css/bootstrap.min.css';
import './css/jquerysctipttop.css';
import './js/jquerylib.js';
import './js/jquery-1.7.1.min.js'
import './js/eye.js';
import './js/spacegallery.js';
import './js/jflip.js';
import './js/jquery.blockUI.js';
import './js/layout.js';
import './js/prefixfree.min.js';
import './js/hammer.min.js'
import './js/jquery.hammer.min.js';
import './js/custom.js';
//import './js/rain.js';
// Write Javascript code!
const appDiv = document.getElementById('page');
appDiv.innerHTML = "<div id='myGallery' class='spacegallery'></div>";
var sdata='';
var apidata='https://my-json-server.typicode.com/satyapriyabarik/shreyansh/shreyanshdata'
$.getJSON(apidata,function(data){
   let sdataObj = data ;
for(var i=0;i< sdataObj.length;i++){
   sdata+="<figure>"+
   "<img src="+ data[i].imgurl +">"+
   "<figcaption>"+ data[i].texture +"</figcaption>"+
   "</figure>"
}
document.getElementById('myGallery').innerHTML=sdata;
})

