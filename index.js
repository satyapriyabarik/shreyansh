// Import stylesheets
import './style.css';
import './css/news.css';
import './css/custom.css';
import './css/spacegallery.css';
import './css/bootstrap.min.css';
import './css/jquerysctipttop.css';
//import './js/jquerylib.js';
import 'require.js'
var $ = require( "jquery" );
//import './js/prefixfree.min.js';
//import './js/hammer.min.js'
//mport './js/jquery.hammer.min.js';
import './js/custom.js';
// Write Javascript code!
const appDiv = document.getElementById('scene');
appDiv.innerHTML = "<article id='book' class='book'></article>";
var sdata='';
var ddata='';
var apidata='https://my-json-server.typicode.com/satyapriyabarik/shreyansh/shreyanshdata'
$.getJSON(apidata,function(data){
   let sdataObj = data ;
for(var i=0;i< sdataObj.length;i++){
   /*sdata+="<figure>"+
   "<img src="+ data[i].imgurl +">"+
   "<figcaption>"+ data[i].texture +"</figcaption>"+
   "</figure>"*/
   ddata+="<section class='page'>"+
            "<div class='front'>"+
            "<p>"+
            "<img src="+ data[i].imgurl +">"+
            "</p>"+
            "</div>"+
            "<div class='back'>"+
            "<p>"+ data[i].texture +"</p>"+
            "</div>"+
            "</section>"

}
//document.getElementById('myGallery').innerHTML=sdata;
document.getElementById('book').innerHTML=ddata;
//document.getElementsByClassName('page')[0].classList.add('active');
})

