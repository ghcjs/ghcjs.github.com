tb.prototype.get=ka(0,fa("ua"));function hQ(a){return 10>a?"0"+a:""+a}function iQ(a,b){var c=(a.Aa-b)/1E3,d=c.toFixed(3),e=0;if(1>c)e=2;else for(;100>c;)e++,c*=10;for(;0<e--;)d=" "+d;return d}function jQ(a){this.La=a||"";this.Sa=vb}ga=jQ.prototype;ga.ya=ca;ga.Qa=ca;ga.Pa=ca;ga.za=ea;ga.Ra=ea;
function kQ(a,b,c){a||aa(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function lQ(a,b,c){return a.call.apply(a.bind,arguments)}function mQ(a,b){if(hc[a])hc[a](b);else hc.log(b)}function nQ(a){jQ.call(this,a)}qa(nQ,jQ);
function oQ(a,b,c){oQ=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?lQ:kQ;return oQ.apply(da,arguments)}function pQ(a,b){this.ja=a;this.get=b}pQ.prototype={i:function(){var a=this,b=arguments;return ad(this.ja,function(){var c=a.get();return c.i.apply(c,b)})},z:ca,evaluate:function(){var a=this;return ad(this.ja,function(){return a.get().evaluate()})},b:function(){Gc=new Hc(this.i,this,arguments)},d:function(a,b){Gc=new Kc(this.i,this,a,b)}};
function qQ(a,b){var c=a[0],d=Array.prototype.slice.call(a,1,a.length);Pc.start(new Hc(c.i,c,d),b,ba);Pc.ga||Pc.Oa()}var rQ=da;function sQ(){this.Ma=oQ(this.Da,this);this.aa=new nQ;this.aa.ya=ea;this.na=this.aa.za=ea;this.pa="";this.Ga={}}
sQ.prototype.Da=function(a){if(!this.Ga[a.qa]){var b;b=this.aa;var c=[];c.push(b.La," ");if(b.ya){var d=new Date(a.Aa);c.push("[",hQ(d.getFullYear()-2E3)+hQ(d.getMonth()+1)+hQ(d.getDate())+" "+hQ(d.getHours())+":"+hQ(d.getMinutes())+":"+hQ(d.getSeconds())+"."+hQ(Math.floor(d.getMilliseconds()/10)),"] ")}b.Qa&&c.push("[",iQ(a,b.Sa.get()),"s] ");b.Pa&&c.push("[",a.qa,"] ");b.Ra&&c.push("[",a.B.name,"] ");c.push(a.sa,"\n");b.za&&a.$&&c.push(a.Z,"\n");b=c.join("");if(hc)switch(a.B){case Vb:mQ("info",
b);break;case Wb:mQ("error",b);break;case Yb:mQ("warn",b);break;default:mQ("debug",b)}else window.opera?window.opera.postError(b):this.pa+=b}};function tQ(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d];c[a.length]=0;qQ(c,function(a){b(a[1])})}function uQ(a){for(var b=jc((a.length<<1)+2)[1],c=new Uint16Array(b[0]),d=0;d!=a.length;d++)c[d]=a.charCodeAt(d);c[d]=0;return M(2,[b,0,a.length,M(1,[])])}
function vQ(a,b){function c(a,e){qQ(e,function(e){switch(e.c){case 1:b(a);break;case 2:for(var g=e.a[1],l=g+e.a[2],k=new Uint16Array(e.a[0][0]);g!==l;g++)a+=String.fromCharCode(k[g]);c(a,[e.a[3]]);break;default:aa("undefined")}})}c("",a)}var wQ=new pQ([6,5,1],function(){return Qh}),xQ=new pQ([10,8,7,5,4,2,1],function(){return yd}),yQ=new pQ([8,5,4,3,1],function(){return Nf});function zQ(a,b,c){function d(){function b(){vQ([a,uQ(e.value)],function(a){document.getElementById(c).innerHTML=a})}e.onkeydown=b;e.onkeyup=b;e.onchange=b;b()}var e=document.getElementById(b);e.onkeydown=d;e.onkeyup=d;e.onchange=d}function AQ(){function a(){function a(){tQ([xQ,b.value],function(a){vQ([a],function(a){document.getElementById("hamletOut").innerHTML=a})})}b.onkeydown=a;b.onkeyup=a;b.onchange=a;a()}var b=document.getElementById("hamletIn");b.onkeydown=a;b.onkeyup=a;b.onchange=a}
window.onload=function(){rQ||(rQ=new sQ);if(-1!=window.location.href.indexOf("Debug=true")){var a=rQ;if(ca!=a.na){var b;cc();b=bc;var c=a.Ma;b.L||(b.L=[]);b.L.push(c);a.na=ca}}Ec="./";zQ(wQ,"name","hello");zQ(yQ,"num","prime");AQ()};

//@ sourceMappingURL=main.js.map