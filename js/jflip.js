(function(b){var a=function(p,d,g,k,H){H=b.extend({background:"green",cornersTop:true,scale:"noresize"},H);var h=this,R=p.prev(),L=0,Q=false,O=H.background,e=H.cornersTop,W=H.gradientColors||["#4F2727","#FF8F8F","#F00"],x=H.curlSize||0.1,M=H.scale,t=[],y=p.clone(),G=b.browser.msie?null:y[0].getContext("2d"),p=b.browser.msie?b(G_vmlCanvasManager.initElement(p[0])):p,A=p[0].getContext("2d"),I=0;var k=k.each(function(X){if(t[X]){return}var c=this;c.onload=function(){var Y=1;if(M!="noresize"){var aa=d/this.width,Z=g/this.height;if(M=="fit"){Y=(aa<1||Z<1)?Math.min(aa,Z):1}if(M=="fill"){Y=Math.min(aa,Z)}}b(c).data("flip.scale",Y);t[X]=A.createPattern(c,"no-repeat");I++;if(I==k.length&&!Q){Q=true;U()}};if(c.complete){window.setTimeout(function(){c.onload()},10)}}).get();var d=d,g=g,F=d,D=g,i=F*(1-x),f=D*x,s=false,P=b.browser.msie?p.offset():null,j=false,l=400,N=false,r,q,J=700,K=false,v,u,C,B,o=false,w=false,m=false;b(window).scroll(function(){});var V=b.browser.msie?(function(){var X=b("<div>").width(d).height(g).css({position:"absolute",cursor:"default",zIndex:1}).appendTo("body");if(parseInt(b.browser.version)==7){X.css({opacity:0.000001,background:"#FFF"})}var c=function(){P=p.offset();return X.css({left:P.left+"px",top:P.top+"px"})};b(window).resize(c);return c()})():p;V.mousemove(function(c){if(!P){P=p.offset()}if(w&&j){if(!m){m=true;window.clearInterval(r)}F=!s?c.pageX-P.left:d-(c.pageX-P.left);D=e?c.pageY-P.top:g-(c.pageY-P.top);window.setTimeout(U,0);return false}C=c.pageX||C,B=c.pageY||B;if(!K){s=(C-P.left)<d/2}if(!K&&((C-P.left)>i||(C-P.left)<(d-i))&&((e&&(B-P.top)<f)||(!e&&(B-P.top)>(g-f)))){if(!j){j=true;V.css("cursor","pointer")}}else{if(j){j=false;V.css("cursor","default")}}return false}).bind("mouseenter",function(c){o=true;if(K){return}window.clearInterval(r);q=new Date().getTime();r=window.setInterval(z,10);return false}).bind("mouseleave",function(c){o=false;m=false;w=false;if(K){return}window.clearInterval(r);q=new Date().getTime();r=window.setInterval(S,10);return false}).click(function(){if(j&&!K){K=true;V.triggerHandler("mousemove");window.clearInterval(r);q=new Date().getTime();v=F;u=D;r=window.setInterval(T,10);L+=s?-1:1;if(L<0){L=k.length-1}if(L==k.length){L=0}R.trigger("flip.jflip",[L,k.length])}return false}).mousedown(function(){m=false;w=true;return false}).mouseup(function(){w=false;return false});var T=function(){var c=new Date(),X=c.getTime()-q;if(X>=J){window.clearInterval(r);if(s){k.unshift(k.pop());t.unshift(t.pop())}else{k.push(k.shift());t.push(t.shift())}F=d;D=g;U();K=false;if(o){q=new Date().getTime();r=window.setInterval(z,10);V.triggerHandler("mousemove")}return}F=v-2*(d)*X/J;D=u+2*(g)*X/J;U()},n=function(){var c=new Date(),X=c.getTime()-q;F=i+Math.sin(Math.PI*2*X/1000);D=f+Math.cos(Math.PI*2*X/1000);drawing=true;window.setTimeout(U,0)},z=function(){var c=new Date(),X=c.getTime()-q;if(X>=l){window.clearInterval(r);q=new Date().getTime();r=window.setInterval(n,10)}F=d-(d-i)*X/l;D=f*X/l;U()},S=function(){var c=new Date(),X=c.getTime()-q;if(X>=l){window.clearInterval(r)}F=i+(d-i)*X/l;D=f-f*X/l;U()},E=function(c,Z){var X=c*d+Z,Y=-Z/c;if(b.browser.msie){X=Math.round(X);Y=Math.round(Y)}A.beginPath();A.moveTo(d,Math.min(X,g));A.lineTo(d,0);A.lineTo(Math.max(Y,0),0);if(Y<0){A.lineTo(0,Math.min(Z,g));if(Z<g){A.lineTo((g-Z)/c,g)}A.lineTo(d,g)}else{if(X<g){A.lineTo(d,X)}else{A.lineTo((g-Z)/c,g);A.lineTo(d,g)}}},U=function(){if(!Q){return}if(b.browser.msie){A.clearRect(0,0,d,g)}A.fillStyle=O;A.fillRect(0,0,d,g);var ab=k[0],X=b(ab).data("flip.scale");if(b.browser.msie){A.fillStyle=t[0];A.fillStyle.width2=A.fillStyle.width*X;A.fillStyle.height2=A.fillStyle.height*X;A.fillRect(0,0,d,g)}else{A.drawImage(ab,(d-ab.width*X)/2,(g-ab.height*X)/2,ab.width*X,ab.height*X)}if(D&&F!=d){var Z=2,Y=(D-Z*(F+d))/2;m2=D/(d-F),q2=F*m2;if(Z==m2){return}var aj=1,ag=1,ac=0,aa=0;A.save();if(s){ac=d;aj=-1}if(!e){aa=g;ag=-1}A.translate(ac,aa);A.scale(aj,ag);var am=(q2-Y)/(Z-m2);var ak=Z*am+Y;var ai=(2*ak+am+2*Z*F-2*D)/(2*Z+1);var af=-ai/Z+ak+am/Z;var ad=Math.sqrt(Math.pow(am-ai,2)+Math.pow(ak-af,2));var al=Math.min(ad*0.5,30);var ae;if(!(b.browser.mozilla&&parseFloat(b.browser.version)<1.9)){ae=A}else{ae=G;ae.clearRect(0,0,d,g);ae.save();ae.translate(1,0)}var ah=ae.createLinearGradient(am,ak,ai,af);ah.addColorStop(0,W[0]);ah.addColorStop(al/ad,W[1]);ah.addColorStop(1,W[2]);ae.fillStyle=ah;ae.beginPath();ae.moveTo(-Y/Z,0);ae.quadraticCurveTo((-Y/Z+F)/2+0.02*F,D/2,F,D);ae.quadraticCurveTo((d+F)/2,(Z*d+Y+D)/2-0.02*(g-D),d,Z*d+Y);if(!(b.browser.mozilla&&parseFloat(b.browser.version)<1.9)){ae.fill()}else{ae.save();ae.clip();ae.fillRect(0,0,d,g);ae.restore();A.drawImage(y[0],0,0);ae.restore()}ah=null;A.fillStyle=O;E(Z,Y);A.fill();E(Z,Y);if(!b.browser.safari&&!b.browser.opera){A.restore()}var ab=s?k[k.length-1]:k[1];X=b(ab).data("flip.scale");if(b.browser.msie){A.fillStyle=s?t[t.length-1]:t[1];A.fillStyle.width2=A.fillStyle.width*X;A.fillStyle.height2=A.fillStyle.height*X;A.fill()}else{A.save();A.clip();if(b.browser.safari||b.browser.opera){A.scale(1/aj,1/ag);A.translate(-ac,-aa)}A.drawImage(ab,(d-ab.width*X)/2,(g-ab.height*X)/2,ab.width*X,ab.height*X);A.restore();if(b.browser.safari||b.browser.opera){A.restore()}}}}};b.fn.jFlip=function(d,c,e){return this.each(function(){b(this).wrap("<div class='flip_gallery'>");var f=b(this).find("img");var g=b(document.createElement("canvas")).attr({width:d,height:c}).css({margin:0,width:d+"px",height:c+"px"});b(this).css({position:"absolute",left:"-9000px",top:"-9000px"}).after(g);new a(b(this).next(),d||300,c||300,f,e)})}})(jQuery);