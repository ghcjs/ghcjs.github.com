function DX(a){return 10>a?"0"+a:""+a}function EX(a,b){var c=(a.Oc-b)/1E3,d=c.toFixed(3),e=0;if(1>c)e=2;else for(;100>c;)e++,c*=10;for(;0<e--;)d=" "+d;return d}function FX(a){this.Ia=a||"";this.Fd=jb}ka=FX.prototype;ka.Kc=da;ka.Dd=da;ka.Cd=da;ka.Lc=ea;ka.Ed=ea;
function GX(a,b,c){a||aa(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function HX(a,b,c){return a.call.apply(a.bind,arguments)}function IX(a,b){if(Pb[a])Pb[a](b);else Pb.log(b)}function JX(a){FX.call(this,a)}sa(JX,FX);
function KX(a,b,c){KX=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?HX:GX;return KX.apply(i,arguments)}function LX(a,b){this.hc=a;this.get=b}LX.prototype={ua:function(){var a=this,b=arguments;return ie(this.hc,function(){var c=a.get();return c.ua.apply(c,b)})},Wa:da,evaluate:function(){var a=this;return ie(this.hc,function(){return a.get().evaluate()})},U:function(){Od=new Pd(this.ua,this,arguments)},ba:function(a,b){Od=new Qd(this.ua,this,a,b)}};
function MX(){this.wc=da}MX.prototype.Yb=function(){return 0};MX.prototype.write=function(a,b){var c=qc(new pc,zd(a,b.la()));console.log(c.replace("\n","\r\n"));return b};MX.prototype.Zb=function(){return 0!=Fd};var NX=i;function OX(){this.yd=KX(this.Rc,this);this.Ob=new JX;this.Ob.Kc=ea;this.uc=this.Ob.Lc=ea;this.xc="";this.bd={}}
OX.prototype.Rc=function(a){if(!this.bd[a.yc]){var b;b=this.Ob;var c=[];c.push(b.Ia," ");if(b.Kc){var d=new Date(a.Oc);c.push("[",DX(d.getFullYear()-2E3)+DX(d.getMonth()+1)+DX(d.getDate())+" "+DX(d.getHours())+":"+DX(d.getMinutes())+":"+DX(d.getSeconds())+"."+DX(Math.floor(d.getMilliseconds()/10)),"] ")}b.Dd&&c.push("[",EX(a,b.Fd.get()),"s] ");b.Cd&&c.push("[",a.yc,"] ");b.Ed&&c.push("[",a.ab.name,"] ");c.push(a.Vb,"\n");b.Lc&&a.Mb&&c.push(a.Lb,"\n");b=c.join("");if(Pb)switch(a.ab){case Fb:IX("info",
b);break;case Gb:IX("error",b);break;case Hb:IX("warn",b);break;default:IX("debug",b)}else window.opera?window.opera.postError(b):this.xc+=b}};var Vk=new LX([5,4,3,1],function(){return sX}),Wk=new LX([4,3,1],function(){return Le}),PX=new LX([3,2,1],function(){return bl});window.onload=function(){NX||(NX=new OX);if(-1!=window.location.href.indexOf("Debug=true")){var a=NX;if(da!=a.uc){var b;Nb();b=Lb;var c=a.yd;b.qb||(b.qb=[]);b.qb.push(c);a.uc=da}}Hd="../../bin/multiple-pages.trampoline.jsexe/";q=Q(1,[]);p=Q(2,[]);a=[PX];Ed[1]=new MX;Ed[2]=new MX;Ld(a,ca,ca)};

//@ sourceMappingURL=main.js.map