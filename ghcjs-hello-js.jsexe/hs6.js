//$$Main_hello
var $$DataziTextziFusionziSizze_Unknown=$D(3,function(){
 $r([]);
},"at Data/Text/Fusion/Size.hs:35:13");

var $$DataziTextziLazzy_unpackCStringzh=$f(1,function(v68){
 var w68=$F(2,function(x68,y68){
  var z68=$f(1,function(A68){
   var B68=$hs_newByteArrayzh(8,A68);
   var C68=B68[0],D68=B68[1];
   var w6q=$hs_ordzh(x68);
   var E68=$f(2,function(F68,G68){
    $M($$DataziTextziLazzyziInternal_defaultChunkSizze,function(H68){
     var I68=H68.v[0];
     var h6q=G68+1|0;
     var J68=h6q>=I68?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(J68.g){
     case 1:
      var b6q=G68+1|0;
      var K68=b6q>=4?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(K68.g){
      case 1:
       var y6k=$hs_indexCharOffAddrzh(v68,y68);
       var L68=$hs_ordzh(y6k);
       switch(L68){
       case 0:
	var z6k=$d(1,[G68],"sat");
	var A6k=$d(1,[y68],"sat");
	var B6k=$d(1,[A6k,z6k],"sat");
	var C6k=$d(1,[D68],"sat");
	var D6k=$d(1,[C6k,B6k],"sat");
	$r([F68,D6k]);break;
       default:
	var M68=$f(3,function(N68,O68,P68){
	 var S6d=$hs_ordzh(N68);
	 var Q68=S6d<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Q68.g){
	 case 1:
	  var N6d=S6d-65536|0;
	  var R6d=N6d>>10;
	  var Q6d=R6d+55296|0;
	  var P6d=Q6d>>>0;
	  var O6d=P6d&65535;
	  var H6d=$hs_writeWord16Arrayzh(D68,G68,O6d,P68);
	  var M6d=N6d>>>0;
	  var L6d=M6d&1023;
	  var K6d=L6d|0;
	  var J6d=K6d+56320|0;
	  var I6d=J6d>>>0;
	  var G6d=I6d&65535;
	  var F6d=G68+1|0;
	  var E6d=$hs_writeWord16Arrayzh(D68,F6d,G6d,H6d);
	  var R68=$F(5,function(S68,T68,U68,V68,W68){
	   var h6b=V68+1|0;
	   var X68=h6b>=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(X68.g){
	   case 1:
	    var c6b=V68+1|0;
	    var Y68=c6b>=T68?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Y68.g){
	    case 1:
	     $M(U68,function(Z68){
	      var a69=Z68.v[0];
	      var C6a=$hs_indexCharOffAddrzh(v68,a69);
	      var b69=$hs_ordzh(C6a);
	      switch(b69){
	      case 0:
	       var D6a=$d(1,[V68],"sat");
	       var E6a=$d(1,[Z68,D6a],"sat");
	       var F6a=$d(1,[S68],"sat");
	       var G6a=$d(1,[F6a,E6a],"sat");
	       $r([W68,G6a]);break;
	      default:
	       var c69=$f(3,function(d69,e69,f69){
		var w69=$hs_ordzh(d69);
		var g69=w69<65536?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(g69.g){
		case 1:
		 var r69=w69-65536|0;
		 var v69=r69>>10;
		 var u69=v69+55296|0;
		 var t69=u69>>>0;
		 var s69=t69&65535;
		 var l69=$hs_writeWord16Arrayzh(S68,V68,s69,f69);
		 var q69=r69>>>0;
		 var p69=q69&1023;
		 var o69=p69|0;
		 var n69=o69+56320|0;
		 var m69=n69>>>0;
		 var k69=m69&65535;
		 var j69=V68+1|0;
		 var i69=$hs_writeWord16Arrayzh(S68,j69,k69,l69);
		 var h69=V68+2|0;
		 R68.J(S68,T68,e69,h69,i69);break;
		case 2:
		 var A69=w69>>>0;
		 var z69=A69&65535;
		 var y69=$hs_writeWord16Arrayzh(S68,V68,z69,f69);
		 var x69=V68+1|0;
		 R68.J(S68,T68,e69,x69,y69);break;
		}
	       },[V68,T68,S68,R68],"$wa5");
	       var B69=b69<=127?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(B69.g){
	       case 1:
		var C69=b69<=223?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(C69.g){
		case 1:
		 var D69=b69<=239?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(D69.g){
		 case 1:
		  var Z69=a69+1|0;
		  var R69=$hs_indexCharOffAddrzh(v68,Z69);
		  var Y69=a69+2|0;
		  var U69=$hs_indexCharOffAddrzh(v68,Y69);
		  var X69=a69+3|0;
		  var W69=$hs_indexCharOffAddrzh(v68,X69);
		  var F69=a69+4|0;
		  var E69=$d(1,[F69],"sat");
		  var V69=$hs_ordzh(W69);
		  var J69=V69-128|0;
		  var T69=$hs_ordzh(U69);
		  var S69=T69-128|0;
		  var L69=S69<<6;
		  var Q69=$hs_ordzh(R69);
		  var P69=Q69-128|0;
		  var N69=P69<<12;
		  var O69=b69-240|0;
		  var M69=O69<<18;
		  var K69=M69+N69|0;
		  var I69=K69+L69|0;
		  var H69=I69+J69|0;
		  var G69=$hs_chrzh(H69);
		  c69.J(G69,E69,W68);break;
		 case 2:
		  var p6a=a69+1|0;
		  var l6a=$hs_indexCharOffAddrzh(v68,p6a);
		  var o6a=a69+2|0;
		  var n6a=$hs_indexCharOffAddrzh(v68,o6a);
		  var b6a=a69+3|0;
		  var a6a=$d(1,[b6a],"sat");
		  var m6a=$hs_ordzh(n6a);
		  var f6a=m6a-128|0;
		  var k6a=$hs_ordzh(l6a);
		  var j6a=k6a-128|0;
		  var h6a=j6a<<6;
		  var i6a=b69-224|0;
		  var g6a=i6a<<12;
		  var e6a=g6a+h6a|0;
		  var d6a=e6a+f6a|0;
		  var c6a=$hs_chrzh(d6a);
		  c69.J(c6a,a6a,W68);break;
		 }break;
		case 2:
		 var z6a=a69+1|0;
		 var y6a=$hs_indexCharOffAddrzh(v68,z6a);
		 var r6a=a69+2|0;
		 var q6a=$d(1,[r6a],"sat");
		 var x6a=$hs_ordzh(y6a);
		 var v6a=x6a-128|0;
		 var w6a=b69-192|0;
		 var u6a=w6a<<6;
		 var t6a=u6a+v6a|0;
		 var s6a=$hs_chrzh(t6a);
		 c69.J(s6a,q6a,W68);break;
		}break;
	       case 2:
		var B6a=a69+1|0;
		var A6a=$d(1,[B6a],"sat");
		c69.J(C6a,A6a,W68);break;
	       }
	      }
	     },[I68,v68,V68,T68,S68,R68,W68,H68]);break;
	    case 2:
	     var b6b=T68<<1;
	     var H6a=$f(2,function(J6a,K6a){
	      var L6a=J6a<0?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(L6a.g){
	      case 1:
	       var Y6a=J6a>>>0;
	       var X6a=Y6a&1073741824;
	       var M6a=X6a|0;
	       switch(M6a){
	       case 0:
		var W6a=J6a<<1;
		var N6a=$hs_newByteArrayzh(W6a,W68);
		var O6a=N6a[0],P6a=N6a[1];
		var Q6a=T68<=0?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Q6a.g){
		case 1:
		 var U6a=T68>>>0;
		 var $ff=_hs_text_memcpy(P6a,0,S68,0,U6a);
		 var R6a=[O6a,$ff];
		 var S6a=R6a[0];
		 var T6a=$d(1,[P6a],"sat");
		 I6a.J(T6a,K6a,U68,V68,S6a);break;
		case 2:
		 var V6a=$d(1,[P6a],"sat");
		 I6a.J(V6a,K6a,U68,V68,O6a);break;
		}break;
	       default:
		$A($$DataziTextziLazzy$J3);
	       }break;
	      case 2:
	       $A($$DataziTextziLazzy$J3);break;
	      }
	     },[V68,T68,U68,S68,W68,I6a],"$j5");
	     var Z6a=b6b<=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Z6a.g){
	     case 1:
	      H6a.J(I68,H68);break;
	     case 2:
	      var a6b=$d(1,[b6b],"sat");
	      H6a.J(b6b,a6b);break;
	     }break;
	    }break;
	   case 2:
	    var d6b=$d(1,[V68],"sat");
	    var e6b=$d(1,[U68,d6b],"sat");
	    var f6b=$d(1,[S68],"sat");
	    var g6b=$d(1,[f6b,e6b],"sat");
	    $r([W68,g6b]);break;
	   }
	  },"$s$wa2"),I6a=$f(5,function(i6b,j6b,k6b,l6b,m6b){
	   var C6d=l6b+1|0;
	   var n6b=C6d>=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(n6b.g){
	   case 1:
	    $M(j6b,function(o6b){
	     var p6b=o6b.v[0];
	     var y6d=l6b+1|0;
	     var q6b=y6d>=p6b?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(q6b.g){
	     case 1:
	      $M(k6b,function(r6b){
	       var s6b=r6b.v[0];
	       var Y6c=$hs_indexCharOffAddrzh(v68,s6b);
	       var t6b=$hs_ordzh(Y6c);
	       switch(t6b){
	       case 0:
		var Z6c=$d(1,[l6b],"sat");
		var a6d=$d(1,[r6b,Z6c],"sat");
		var b6d=$d(1,[i6b,a6d],"sat");
		$r([m6b,b6d]);break;
	       default:
		var u6b=$f(3,function(v6b,w6b,x6b){
		 var Q6b=$hs_ordzh(v6b);
		 var y6b=Q6b<65536?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(y6b.g){
		 case 1:
		  $M(i6b,function(z6b){
		   var A6b=z6b.v[0];
		   var L6b=Q6b-65536|0;
		   var P6b=L6b>>10;
		   var O6b=P6b+55296|0;
		   var N6b=O6b>>>0;
		   var M6b=N6b&65535;
		   var F6b=$hs_writeWord16Arrayzh(A6b,l6b,M6b,x6b);
		   var K6b=L6b>>>0;
		   var J6b=K6b&1023;
		   var I6b=J6b|0;
		   var H6b=I6b+56320|0;
		   var G6b=H6b>>>0;
		   var E6b=G6b&65535;
		   var D6b=l6b+1|0;
		   var C6b=$hs_writeWord16Arrayzh(A6b,D6b,E6b,F6b);
		   var B6b=l6b+2|0;
		   I6a.J(z6b,o6b,w6b,B6b,C6b);
		  },[I68,v68,I6a,H68,l6b,Q6b,x6b,o6b,w6b]);break;
		 case 2:
		  $M(i6b,function(R6b){
		   var S6b=R6b.v[0];
		   var W6b=Q6b>>>0;
		   var V6b=W6b&65535;
		   var U6b=$hs_writeWord16Arrayzh(S6b,l6b,V6b,x6b);
		   var T6b=l6b+1|0;
		   I6a.J(R6b,o6b,w6b,T6b,U6b);
		  },[I68,v68,I6a,H68,l6b,Q6b,x6b,o6b,w6b]);break;
		 }
		},[I6a,l6b,i6b,o6b],"$wa5");
		var X6b=t6b<=127?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(X6b.g){
		case 1:
		 var Y6b=t6b<=223?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Y6b.g){
		 case 1:
		  var Z6b=t6b<=239?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Z6b.g){
		  case 1:
		   var v6c=s6b+1|0;
		   var n6c=$hs_indexCharOffAddrzh(v68,v6c);
		   var u6c=s6b+2|0;
		   var q6c=$hs_indexCharOffAddrzh(v68,u6c);
		   var t6c=s6b+3|0;
		   var s6c=$hs_indexCharOffAddrzh(v68,t6c);
		   var b6c=s6b+4|0;
		   var a6c=$d(1,[b6c],"sat");
		   var r6c=$hs_ordzh(s6c);
		   var f6c=r6c-128|0;
		   var p6c=$hs_ordzh(q6c);
		   var o6c=p6c-128|0;
		   var h6c=o6c<<6;
		   var m6c=$hs_ordzh(n6c);
		   var l6c=m6c-128|0;
		   var j6c=l6c<<12;
		   var k6c=t6b-240|0;
		   var i6c=k6c<<18;
		   var g6c=i6c+j6c|0;
		   var e6c=g6c+h6c|0;
		   var d6c=e6c+f6c|0;
		   var c6c=$hs_chrzh(d6c);
		   u6b.J(c6c,a6c,m6b);break;
		  case 2:
		   var L6c=s6b+1|0;
		   var H6c=$hs_indexCharOffAddrzh(v68,L6c);
		   var K6c=s6b+2|0;
		   var J6c=$hs_indexCharOffAddrzh(v68,K6c);
		   var x6c=s6b+3|0;
		   var w6c=$d(1,[x6c],"sat");
		   var I6c=$hs_ordzh(J6c);
		   var B6c=I6c-128|0;
		   var G6c=$hs_ordzh(H6c);
		   var F6c=G6c-128|0;
		   var D6c=F6c<<6;
		   var E6c=t6b-224|0;
		   var C6c=E6c<<12;
		   var A6c=C6c+D6c|0;
		   var z6c=A6c+B6c|0;
		   var y6c=$hs_chrzh(z6c);
		   u6b.J(y6c,w6c,m6b);break;
		  }break;
		 case 2:
		  var V6c=s6b+1|0;
		  var U6c=$hs_indexCharOffAddrzh(v68,V6c);
		  var N6c=s6b+2|0;
		  var M6c=$d(1,[N6c],"sat");
		  var T6c=$hs_ordzh(U6c);
		  var R6c=T6c-128|0;
		  var S6c=t6b-192|0;
		  var Q6c=S6c<<6;
		  var P6c=Q6c+R6c|0;
		  var O6c=$hs_chrzh(P6c);
		  u6b.J(O6c,M6c,m6b);break;
		 }break;
		case 2:
		 var X6c=s6b+1|0;
		 var W6c=$d(1,[X6c],"sat");
		 u6b.J(Y6c,W6c,m6b);break;
		}
	       }
	      },[I68,v68,I6a,H68,l6b,i6b,o6b,m6b]);break;
	     case 2:
	      var x6d=p6b<<1;
	      var c6d=$f(2,function(d6d,e6d){
	       var f6d=d6d<0?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(f6d.g){
	       case 1:
		var u6d=d6d>>>0;
		var t6d=u6d&1073741824;
		var g6d=t6d|0;
		switch(g6d){
		case 0:
		 var s6d=d6d<<1;
		 var h6d=$hs_newByteArrayzh(s6d,m6b);
		 var i6d=h6d[0],j6d=h6d[1];
		 var k6d=p6b<=0?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(k6d.g){
		 case 1:
		  $M(i6b,function(l6d){
		   var m6d=l6d.v[0];
		   var q6d=p6b>>>0;
		   var $ff=_hs_text_memcpy(j6d,0,m6d,0,q6d);
		   var n6d=[i6d,$ff];
		   var o6d=n6d[0];
		   var p6d=$d(1,[j6d],"sat");
		   I6a.J(p6d,e6d,k6b,l6b,o6d);
		  },[I68,v68,I6a,H68,l6b,p6b,k6b,j6d,i6d,e6d]);break;
		 case 2:
		  var r6d=$d(1,[j6d],"sat");
		  I6a.J(r6d,e6d,k6b,l6b,i6d);break;
		 }break;
		default:
		 $A($$DataziTextziLazzy$J3);
		}break;
	       case 2:
		$A($$DataziTextziLazzy$J3);break;
	       }
	      },[I6a,l6b,p6b,k6b,i6b,m6b],"$j5");
	      var v6d=x6d<=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(v6d.g){
	      case 1:
	       c6d.J(I68,H68);break;
	      case 2:
	       var w6d=$d(1,[x6d],"sat");
	       c6d.J(x6d,w6d);break;
	      }break;
	     }
	    },[I68,v68,I6a,H68,l6b,k6b,i6b,m6b]);break;
	   case 2:
	    var z6d=$d(1,[l6b],"sat");
	    var A6d=$d(1,[k6b,z6d],"sat");
	    var B6d=$d(1,[i6b,A6d],"sat");
	    $r([m6b,B6d]);break;
	   }
	  },[I68,v68,H68],"$wa4");
	  $S(R68,[I68,v68,I6a,H68]);
	  var D6d=G68+2|0;
	  R68.J(D68,4,O68,D6d,E6d);break;
	 case 2:
	  var I6i=S6d>>>0;
	  var H6i=I6i&65535;
	  var G6i=$hs_writeWord16Arrayzh(D68,G68,H6i,P68);
	  var T6d=$F(5,function(U6d,V6d,W6d,X6d,Y6d){
	   var j6g=X6d+1|0;
	   var Z6d=j6g>=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Z6d.g){
	   case 1:
	    var e6g=X6d+1|0;
	    var a6e=e6g>=V6d?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(a6e.g){
	    case 1:
	     $M(W6d,function(b6e){
	      var c6e=b6e.v[0];
	      var E6f=$hs_indexCharOffAddrzh(v68,c6e);
	      var d6e=$hs_ordzh(E6f);
	      switch(d6e){
	      case 0:
	       var F6f=$d(1,[X6d],"sat");
	       var G6f=$d(1,[b6e,F6f],"sat");
	       var H6f=$d(1,[U6d],"sat");
	       var I6f=$d(1,[H6f,G6f],"sat");
	       $r([Y6d,I6f]);break;
	      default:
	       var e6e=$f(3,function(f6e,g6e,h6e){
		var y6e=$hs_ordzh(f6e);
		var i6e=y6e<65536?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(i6e.g){
		case 1:
		 var t6e=y6e-65536|0;
		 var x6e=t6e>>10;
		 var w6e=x6e+55296|0;
		 var v6e=w6e>>>0;
		 var u6e=v6e&65535;
		 var n6e=$hs_writeWord16Arrayzh(U6d,X6d,u6e,h6e);
		 var s6e=t6e>>>0;
		 var r6e=s6e&1023;
		 var q6e=r6e|0;
		 var p6e=q6e+56320|0;
		 var o6e=p6e>>>0;
		 var m6e=o6e&65535;
		 var l6e=X6d+1|0;
		 var k6e=$hs_writeWord16Arrayzh(U6d,l6e,m6e,n6e);
		 var j6e=X6d+2|0;
		 T6d.J(U6d,V6d,g6e,j6e,k6e);break;
		case 2:
		 var C6e=y6e>>>0;
		 var B6e=C6e&65535;
		 var A6e=$hs_writeWord16Arrayzh(U6d,X6d,B6e,h6e);
		 var z6e=X6d+1|0;
		 T6d.J(U6d,V6d,g6e,z6e,A6e);break;
		}
	       },[X6d,V6d,U6d,T6d],"$wa5");
	       var D6e=d6e<=127?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(D6e.g){
	       case 1:
		var E6e=d6e<=223?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(E6e.g){
		case 1:
		 var F6e=d6e<=239?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(F6e.g){
		 case 1:
		  var b6f=c6e+1|0;
		  var T6e=$hs_indexCharOffAddrzh(v68,b6f);
		  var a6f=c6e+2|0;
		  var W6e=$hs_indexCharOffAddrzh(v68,a6f);
		  var Z6e=c6e+3|0;
		  var Y6e=$hs_indexCharOffAddrzh(v68,Z6e);
		  var H6e=c6e+4|0;
		  var G6e=$d(1,[H6e],"sat");
		  var X6e=$hs_ordzh(Y6e);
		  var L6e=X6e-128|0;
		  var V6e=$hs_ordzh(W6e);
		  var U6e=V6e-128|0;
		  var N6e=U6e<<6;
		  var S6e=$hs_ordzh(T6e);
		  var R6e=S6e-128|0;
		  var P6e=R6e<<12;
		  var Q6e=d6e-240|0;
		  var O6e=Q6e<<18;
		  var M6e=O6e+P6e|0;
		  var K6e=M6e+N6e|0;
		  var J6e=K6e+L6e|0;
		  var I6e=$hs_chrzh(J6e);
		  e6e.J(I6e,G6e,Y6d);break;
		 case 2:
		  var r6f=c6e+1|0;
		  var n6f=$hs_indexCharOffAddrzh(v68,r6f);
		  var q6f=c6e+2|0;
		  var p6f=$hs_indexCharOffAddrzh(v68,q6f);
		  var d6f=c6e+3|0;
		  var c6f=$d(1,[d6f],"sat");
		  var o6f=$hs_ordzh(p6f);
		  var h6f=o6f-128|0;
		  var m6f=$hs_ordzh(n6f);
		  var l6f=m6f-128|0;
		  var j6f=l6f<<6;
		  var k6f=d6e-224|0;
		  var i6f=k6f<<12;
		  var g6f=i6f+j6f|0;
		  var f6f=g6f+h6f|0;
		  var e6f=$hs_chrzh(f6f);
		  e6e.J(e6f,c6f,Y6d);break;
		 }break;
		case 2:
		 var B6f=c6e+1|0;
		 var A6f=$hs_indexCharOffAddrzh(v68,B6f);
		 var t6f=c6e+2|0;
		 var s6f=$d(1,[t6f],"sat");
		 var z6f=$hs_ordzh(A6f);
		 var x6f=z6f-128|0;
		 var y6f=d6e-192|0;
		 var w6f=y6f<<6;
		 var v6f=w6f+x6f|0;
		 var u6f=$hs_chrzh(v6f);
		 e6e.J(u6f,s6f,Y6d);break;
		}break;
	       case 2:
		var D6f=c6e+1|0;
		var C6f=$d(1,[D6f],"sat");
		e6e.J(E6f,C6f,Y6d);break;
	       }
	      }
	     },[I68,v68,H68,X6d,V6d,U6d,T6d,Y6d]);break;
	    case 2:
	     var d6g=V6d<<1;
	     var J6f=$f(2,function(L6f,M6f){
	      var N6f=L6f<0?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(N6f.g){
	      case 1:
	       var a6g=L6f>>>0;
	       var Z6f=a6g&1073741824;
	       var O6f=Z6f|0;
	       switch(O6f){
	       case 0:
		var Y6f=L6f<<1;
		var P6f=$hs_newByteArrayzh(Y6f,Y6d);
		var Q6f=P6f[0],R6f=P6f[1];
		var S6f=V6d<=0?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(S6f.g){
		case 1:
		 var W6f=V6d>>>0;
		 var $ff=_hs_text_memcpy(R6f,0,U6d,0,W6f);
		 var T6f=[Q6f,$ff];
		 var U6f=T6f[0];
		 var V6f=$d(1,[R6f],"sat");
		 K6f.J(V6f,M6f,W6d,X6d,U6f);break;
		case 2:
		 var X6f=$d(1,[R6f],"sat");
		 K6f.J(X6f,M6f,W6d,X6d,Q6f);break;
		}break;
	       default:
		$A($$DataziTextziLazzy$J3);
	       }break;
	      case 2:
	       $A($$DataziTextziLazzy$J3);break;
	      }
	     },[X6d,V6d,W6d,U6d,Y6d,K6f],"$j5");
	     var b6g=d6g<=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(b6g.g){
	     case 1:
	      J6f.J(I68,H68);break;
	     case 2:
	      var c6g=$d(1,[d6g],"sat");
	      J6f.J(d6g,c6g);break;
	     }break;
	    }break;
	   case 2:
	    var f6g=$d(1,[X6d],"sat");
	    var g6g=$d(1,[W6d,f6g],"sat");
	    var h6g=$d(1,[U6d],"sat");
	    var i6g=$d(1,[h6g,g6g],"sat");
	    $r([Y6d,i6g]);break;
	   }
	  },"$s$wa2"),K6f=$f(5,function(k6g,l6g,m6g,n6g,o6g){
	   var E6i=n6g+1|0;
	   var p6g=E6i>=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(p6g.g){
	   case 1:
	    $M(l6g,function(q6g){
	     var r6g=q6g.v[0];
	     var A6i=n6g+1|0;
	     var s6g=A6i>=r6g?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(s6g.g){
	     case 1:
	      $M(m6g,function(t6g){
	       var u6g=t6g.v[0];
	       var a6i=$hs_indexCharOffAddrzh(v68,u6g);
	       var v6g=$hs_ordzh(a6i);
	       switch(v6g){
	       case 0:
		var b6i=$d(1,[n6g],"sat");
		var c6i=$d(1,[t6g,b6i],"sat");
		var d6i=$d(1,[k6g,c6i],"sat");
		$r([o6g,d6i]);break;
	       default:
		var w6g=$f(3,function(x6g,y6g,z6g){
		 var S6g=$hs_ordzh(x6g);
		 var A6g=S6g<65536?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(A6g.g){
		 case 1:
		  $M(k6g,function(B6g){
		   var C6g=B6g.v[0];
		   var N6g=S6g-65536|0;
		   var R6g=N6g>>10;
		   var Q6g=R6g+55296|0;
		   var P6g=Q6g>>>0;
		   var O6g=P6g&65535;
		   var H6g=$hs_writeWord16Arrayzh(C6g,n6g,O6g,z6g);
		   var M6g=N6g>>>0;
		   var L6g=M6g&1023;
		   var K6g=L6g|0;
		   var J6g=K6g+56320|0;
		   var I6g=J6g>>>0;
		   var G6g=I6g&65535;
		   var F6g=n6g+1|0;
		   var E6g=$hs_writeWord16Arrayzh(C6g,F6g,G6g,H6g);
		   var D6g=n6g+2|0;
		   K6f.J(B6g,q6g,y6g,D6g,E6g);
		  },[I68,v68,H68,K6f,n6g,S6g,z6g,q6g,y6g]);break;
		 case 2:
		  $M(k6g,function(T6g){
		   var U6g=T6g.v[0];
		   var Y6g=S6g>>>0;
		   var X6g=Y6g&65535;
		   var W6g=$hs_writeWord16Arrayzh(U6g,n6g,X6g,z6g);
		   var V6g=n6g+1|0;
		   K6f.J(T6g,q6g,y6g,V6g,W6g);
		  },[I68,v68,H68,K6f,n6g,S6g,z6g,q6g,y6g]);break;
		 }
		},[K6f,n6g,k6g,q6g],"$wa5");
		var Z6g=v6g<=127?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Z6g.g){
		case 1:
		 var a6h=v6g<=223?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(a6h.g){
		 case 1:
		  var b6h=v6g<=239?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(b6h.g){
		  case 1:
		   var x6h=u6g+1|0;
		   var p6h=$hs_indexCharOffAddrzh(v68,x6h);
		   var w6h=u6g+2|0;
		   var s6h=$hs_indexCharOffAddrzh(v68,w6h);
		   var v6h=u6g+3|0;
		   var u6h=$hs_indexCharOffAddrzh(v68,v6h);
		   var d6h=u6g+4|0;
		   var c6h=$d(1,[d6h],"sat");
		   var t6h=$hs_ordzh(u6h);
		   var h6h=t6h-128|0;
		   var r6h=$hs_ordzh(s6h);
		   var q6h=r6h-128|0;
		   var j6h=q6h<<6;
		   var o6h=$hs_ordzh(p6h);
		   var n6h=o6h-128|0;
		   var l6h=n6h<<12;
		   var m6h=v6g-240|0;
		   var k6h=m6h<<18;
		   var i6h=k6h+l6h|0;
		   var g6h=i6h+j6h|0;
		   var f6h=g6h+h6h|0;
		   var e6h=$hs_chrzh(f6h);
		   w6g.J(e6h,c6h,o6g);break;
		  case 2:
		   var N6h=u6g+1|0;
		   var J6h=$hs_indexCharOffAddrzh(v68,N6h);
		   var M6h=u6g+2|0;
		   var L6h=$hs_indexCharOffAddrzh(v68,M6h);
		   var z6h=u6g+3|0;
		   var y6h=$d(1,[z6h],"sat");
		   var K6h=$hs_ordzh(L6h);
		   var D6h=K6h-128|0;
		   var I6h=$hs_ordzh(J6h);
		   var H6h=I6h-128|0;
		   var F6h=H6h<<6;
		   var G6h=v6g-224|0;
		   var E6h=G6h<<12;
		   var C6h=E6h+F6h|0;
		   var B6h=C6h+D6h|0;
		   var A6h=$hs_chrzh(B6h);
		   w6g.J(A6h,y6h,o6g);break;
		  }break;
		 case 2:
		  var X6h=u6g+1|0;
		  var W6h=$hs_indexCharOffAddrzh(v68,X6h);
		  var P6h=u6g+2|0;
		  var O6h=$d(1,[P6h],"sat");
		  var V6h=$hs_ordzh(W6h);
		  var T6h=V6h-128|0;
		  var U6h=v6g-192|0;
		  var S6h=U6h<<6;
		  var R6h=S6h+T6h|0;
		  var Q6h=$hs_chrzh(R6h);
		  w6g.J(Q6h,O6h,o6g);break;
		 }break;
		case 2:
		 var Z6h=u6g+1|0;
		 var Y6h=$d(1,[Z6h],"sat");
		 w6g.J(a6i,Y6h,o6g);break;
		}
	       }
	      },[I68,v68,H68,K6f,n6g,k6g,q6g,o6g]);break;
	     case 2:
	      var z6i=r6g<<1;
	      var e6i=$f(2,function(f6i,g6i){
	       var h6i=f6i<0?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(h6i.g){
	       case 1:
		var w6i=f6i>>>0;
		var v6i=w6i&1073741824;
		var i6i=v6i|0;
		switch(i6i){
		case 0:
		 var u6i=f6i<<1;
		 var j6i=$hs_newByteArrayzh(u6i,o6g);
		 var k6i=j6i[0],l6i=j6i[1];
		 var m6i=r6g<=0?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(m6i.g){
		 case 1:
		  $M(k6g,function(n6i){
		   var o6i=n6i.v[0];
		   var s6i=r6g>>>0;
		   var $ff=_hs_text_memcpy(l6i,0,o6i,0,s6i);
		   var p6i=[k6i,$ff];
		   var q6i=p6i[0];
		   var r6i=$d(1,[l6i],"sat");
		   K6f.J(r6i,g6i,m6g,n6g,q6i);
		  },[I68,v68,H68,K6f,n6g,r6g,m6g,l6i,k6i,g6i]);break;
		 case 2:
		  var t6i=$d(1,[l6i],"sat");
		  K6f.J(t6i,g6i,m6g,n6g,k6i);break;
		 }break;
		default:
		 $A($$DataziTextziLazzy$J3);
		}break;
	       case 2:
		$A($$DataziTextziLazzy$J3);break;
	       }
	      },[K6f,n6g,r6g,m6g,k6g,o6g],"$j5");
	      var x6i=z6i<=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(x6i.g){
	      case 1:
	       e6i.J(I68,H68);break;
	      case 2:
	       var y6i=$d(1,[z6i],"sat");
	       e6i.J(z6i,y6i);break;
	      }break;
	     }
	    },[I68,v68,H68,K6f,n6g,m6g,k6g,o6g]);break;
	   case 2:
	    var B6i=$d(1,[n6g],"sat");
	    var C6i=$d(1,[m6g,B6i],"sat");
	    var D6i=$d(1,[k6g,C6i],"sat");
	    $r([o6g,D6i]);break;
	   }
	  },[I68,v68,H68],"$wa4");
	  $S(T6d,[I68,v68,H68,K6f]);
	  var F6i=G68+1|0;
	  T6d.J(D68,4,O68,F6i,G6i);break;
	 }
	},[G68,I68,v68,D68,H68],"$wa3");
	var J6i=L68<=127?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(J6i.g){
	case 1:
	 var K6i=L68<=223?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(K6i.g){
	 case 1:
	  var L6i=L68<=239?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(L6i.g){
	  case 1:
	   var r6j=y68+1|0;
	   var j6j=$hs_indexCharOffAddrzh(v68,r6j);
	   var q6j=y68+2|0;
	   var m6j=$hs_indexCharOffAddrzh(v68,q6j);
	   var p6j=y68+3|0;
	   var o6j=$hs_indexCharOffAddrzh(v68,p6j);
	   var N6i=y68+4|0;
	   var M6i=$d(1,[N6i],"sat");
	   var n6j=$hs_ordzh(o6j);
	   var b6j=n6j-128|0;
	   var l6j=$hs_ordzh(m6j);
	   var k6j=l6j-128|0;
	   var d6j=k6j<<6;
	   var i6j=$hs_ordzh(j6j);
	   var h6j=i6j-128|0;
	   var f6j=h6j<<12;
	   var g6j=L68-240|0;
	   var e6j=g6j<<18;
	   var c6j=e6j+f6j|0;
	   var a6j=c6j+d6j|0;
	   var Z6i=a6j+b6j|0;
	   var Y6i=$hs_chrzh(Z6i);
	   M68.C([Y6i,M6i,F68],function(O6i){
	    var P6i=O6i[0],Q6i=O6i[1];
	    $M(Q6i,function(R6i){
	     var S6i=R6i.v[0],T6i=R6i.v[1];
	     $M(S6i,function(U6i){
	      var V6i=U6i.v[0];
	      var W6i=$d(1,[V6i],"sat");
	      var X6i=$d(1,[W6i,T6i],"sat");
	      $r([P6i,X6i]);
	     },[P6i,T6i]);
	    },[P6i]);
	   },[]);break;
	  case 2:
	   var R6j=y68+1|0;
	   var N6j=$hs_indexCharOffAddrzh(v68,R6j);
	   var Q6j=y68+2|0;
	   var P6j=$hs_indexCharOffAddrzh(v68,Q6j);
	   var t6j=y68+3|0;
	   var s6j=$d(1,[t6j],"sat");
	   var O6j=$hs_ordzh(P6j);
	   var H6j=O6j-128|0;
	   var M6j=$hs_ordzh(N6j);
	   var L6j=M6j-128|0;
	   var J6j=L6j<<6;
	   var K6j=L68-224|0;
	   var I6j=K6j<<12;
	   var G6j=I6j+J6j|0;
	   var F6j=G6j+H6j|0;
	   var E6j=$hs_chrzh(F6j);
	   M68.C([E6j,s6j,F68],function(u6j){
	    var v6j=u6j[0],w6j=u6j[1];
	    $M(w6j,function(x6j){
	     var y6j=x6j.v[0],z6j=x6j.v[1];
	     $M(y6j,function(A6j){
	      var B6j=A6j.v[0];
	      var C6j=$d(1,[B6j],"sat");
	      var D6j=$d(1,[C6j,z6j],"sat");
	      $r([v6j,D6j]);
	     },[v6j,z6j]);
	    },[v6j]);
	   },[]);break;
	  }break;
	 case 2:
	  var l6k=y68+1|0;
	  var k6k=$hs_indexCharOffAddrzh(v68,l6k);
	  var T6j=y68+2|0;
	  var S6j=$d(1,[T6j],"sat");
	  var j6k=$hs_ordzh(k6k);
	  var h6k=j6k-128|0;
	  var i6k=L68-192|0;
	  var g6k=i6k<<6;
	  var f6k=g6k+h6k|0;
	  var e6k=$hs_chrzh(f6k);
	  M68.C([e6k,S6j,F68],function(U6j){
	   var V6j=U6j[0],W6j=U6j[1];
	   $M(W6j,function(X6j){
	    var Y6j=X6j.v[0],Z6j=X6j.v[1];
	    $M(Y6j,function(a6k){
	     var b6k=a6k.v[0];
	     var c6k=$d(1,[b6k],"sat");
	     var d6k=$d(1,[c6k,Z6j],"sat");
	     $r([V6j,d6k]);
	    },[V6j,Z6j]);
	   },[V6j]);
	  },[]);break;
	 }break;
	case 2:
	 var n6k=y68+1|0;
	 var m6k=$d(1,[n6k],"sat");
	 M68.C([y6k,m6k,F68],function(o6k){
	  var p6k=o6k[0],q6k=o6k[1];
	  $M(q6k,function(r6k){
	   var s6k=r6k.v[0],t6k=r6k.v[1];
	   $M(s6k,function(u6k){
	    var v6k=u6k.v[0];
	    var w6k=$d(1,[v6k],"sat");
	    var x6k=$d(1,[w6k,t6k],"sat");
	    $r([p6k,x6k]);
	   },[p6k,t6k]);
	  },[p6k]);
	 },[]);break;
	}
       }break;
      case 2:
       var E6k=$f(2,function(F6k,G6k){
	var H6k=F6k<0?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(H6k.g){
	case 1:
	 var E6p=F6k>>>0;
	 var D6p=E6p&1073741824;
	 var I6k=D6p|0;
	 switch(I6k){
	 case 0:
	  var C6p=F6k<<1;
	  var J6k=$hs_newByteArrayzh(C6p,F68);
	  var K6k=J6k[0],L6k=J6k[1];
	  var $ff=_hs_text_memcpy(L6k,0,D68,0,4);
	  var M6k=[K6k,$ff];
	  var N6k=M6k[0];
	  var O6k=$F(5,function(P6k,Q6k,R6k,S6k,T6k){
	   var g6n=S6k+1|0;
	   var U6k=g6n>=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(U6k.g){
	   case 1:
	    $M(Q6k,function(V6k){
	     var W6k=V6k.v[0];
	     var a6n=S6k+1|0;
	     var X6k=a6n>=W6k?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(X6k.g){
	     case 1:
	      var C6m=$hs_indexCharOffAddrzh(v68,R6k);
	      var Y6k=$hs_ordzh(C6m);
	      switch(Y6k){
	      case 0:
	       var D6m=$d(1,[S6k],"sat");
	       var E6m=$d(1,[R6k],"sat");
	       var F6m=$d(1,[E6m,D6m],"sat");
	       var G6m=$d(1,[P6k],"sat");
	       var H6m=$d(1,[G6m,F6m],"sat");
	       $r([T6k,H6m]);break;
	      default:
	       var Z6k=$f(3,function(b6l,c6l,d6l){
		var v6l=$hs_ordzh(b6l);
		var e6l=v6l<65536?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(e6l.g){
		case 1:
		 var q6l=v6l-65536|0;
		 var u6l=q6l>>10;
		 var t6l=u6l+55296|0;
		 var s6l=t6l>>>0;
		 var r6l=s6l&65535;
		 var k6l=$hs_writeWord16Arrayzh(P6k,S6k,r6l,d6l);
		 var p6l=q6l>>>0;
		 var o6l=p6l&1023;
		 var n6l=o6l|0;
		 var m6l=n6l+56320|0;
		 var l6l=m6l>>>0;
		 var j6l=l6l&65535;
		 var i6l=S6k+1|0;
		 var h6l=$hs_writeWord16Arrayzh(P6k,i6l,j6l,k6l);
		 var g6l=S6k+2|0;
		 var f6l=$d(1,[P6k],"sat");
		 a6l.J(f6l,V6k,c6l,g6l,h6l);break;
		case 2:
		 var A6l=v6l>>>0;
		 var z6l=A6l&65535;
		 var y6l=$hs_writeWord16Arrayzh(P6k,S6k,z6l,d6l);
		 var x6l=S6k+1|0;
		 var w6l=$d(1,[P6k],"sat");
		 a6l.J(w6l,V6k,c6l,x6l,y6l);break;
		}
	       },[S6k,P6k,a6l,V6k],"$wa4");
	       var B6l=Y6k<=127?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(B6l.g){
	       case 1:
		var C6l=Y6k<=223?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(C6l.g){
		case 1:
		 var D6l=Y6k<=239?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(D6l.g){
		 case 1:
		  var Z6l=R6k+1|0;
		  var R6l=$hs_indexCharOffAddrzh(v68,Z6l);
		  var Y6l=R6k+2|0;
		  var U6l=$hs_indexCharOffAddrzh(v68,Y6l);
		  var X6l=R6k+3|0;
		  var W6l=$hs_indexCharOffAddrzh(v68,X6l);
		  var F6l=R6k+4|0;
		  var E6l=$d(1,[F6l],"sat");
		  var V6l=$hs_ordzh(W6l);
		  var J6l=V6l-128|0;
		  var T6l=$hs_ordzh(U6l);
		  var S6l=T6l-128|0;
		  var L6l=S6l<<6;
		  var Q6l=$hs_ordzh(R6l);
		  var P6l=Q6l-128|0;
		  var N6l=P6l<<12;
		  var O6l=Y6k-240|0;
		  var M6l=O6l<<18;
		  var K6l=M6l+N6l|0;
		  var I6l=K6l+L6l|0;
		  var H6l=I6l+J6l|0;
		  var G6l=$hs_chrzh(H6l);
		  Z6k.J(G6l,E6l,T6k);break;
		 case 2:
		  var p6m=R6k+1|0;
		  var l6m=$hs_indexCharOffAddrzh(v68,p6m);
		  var o6m=R6k+2|0;
		  var n6m=$hs_indexCharOffAddrzh(v68,o6m);
		  var b6m=R6k+3|0;
		  var a6m=$d(1,[b6m],"sat");
		  var m6m=$hs_ordzh(n6m);
		  var f6m=m6m-128|0;
		  var k6m=$hs_ordzh(l6m);
		  var j6m=k6m-128|0;
		  var h6m=j6m<<6;
		  var i6m=Y6k-224|0;
		  var g6m=i6m<<12;
		  var e6m=g6m+h6m|0;
		  var d6m=e6m+f6m|0;
		  var c6m=$hs_chrzh(d6m);
		  Z6k.J(c6m,a6m,T6k);break;
		 }break;
		case 2:
		 var z6m=R6k+1|0;
		 var y6m=$hs_indexCharOffAddrzh(v68,z6m);
		 var r6m=R6k+2|0;
		 var q6m=$d(1,[r6m],"sat");
		 var x6m=$hs_ordzh(y6m);
		 var v6m=x6m-128|0;
		 var w6m=Y6k-192|0;
		 var u6m=w6m<<6;
		 var t6m=u6m+v6m|0;
		 var s6m=$hs_chrzh(t6m);
		 Z6k.J(s6m,q6m,T6k);break;
		}break;
	       case 2:
		var B6m=R6k+1|0;
		var A6m=$d(1,[B6m],"sat");
		Z6k.J(C6m,A6m,T6k);break;
	       }
	      }break;
	     case 2:
	      var Z6m=W6k<<1;
	      var I6m=$f(2,function(J6m,K6m){
	       var L6m=J6m<0?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(L6m.g){
	       case 1:
		var W6m=J6m>>>0;
		var V6m=W6m&1073741824;
		var M6m=V6m|0;
		switch(M6m){
		case 0:
		 var U6m=J6m<<1;
		 var N6m=$hs_newByteArrayzh(U6m,T6k);
		 var O6m=N6m[0],P6m=N6m[1];
		 var Q6m=W6k<=0?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Q6m.g){
		 case 1:
		  var T6m=W6k>>>0;
		  var $ff=_hs_text_memcpy(P6m,0,P6k,0,T6m);
		  var R6m=[O6m,$ff];
		  var S6m=R6m[0];
		  O6k.J(P6m,K6m,R6k,S6k,S6m);break;
		 case 2:
		  O6k.J(P6m,K6m,R6k,S6k,O6m);break;
		 }break;
		default:
		 $A($$DataziTextziLazzy$J3);
		}break;
	       case 2:
		$A($$DataziTextziLazzy$J3);break;
	       }
	      },[S6k,W6k,R6k,P6k,T6k,O6k],"$j6");
	      var X6m=Z6m<=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(X6m.g){
	      case 1:
	       I6m.J(I68,H68);break;
	      case 2:
	       var Y6m=$d(1,[Z6m],"sat");
	       I6m.J(Z6m,Y6m);break;
	      }break;
	     }
	    },[I68,v68,H68,S6k,R6k,P6k,a6l,T6k,O6k]);break;
	   case 2:
	    var b6n=$d(1,[S6k],"sat");
	    var c6n=$d(1,[R6k],"sat");
	    var d6n=$d(1,[c6n,b6n],"sat");
	    var e6n=$d(1,[P6k],"sat");
	    var f6n=$d(1,[e6n,d6n],"sat");
	    $r([T6k,f6n]);break;
	   }
	  },"$s$wa2"),a6l=$f(5,function(h6n,i6n,j6n,k6n,l6n){
	   var B6p=k6n+1|0;
	   var m6n=B6p>=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(m6n.g){
	   case 1:
	    $M(i6n,function(n6n){
	     var o6n=n6n.v[0];
	     var x6p=k6n+1|0;
	     var p6n=x6p>=o6n?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(p6n.g){
	     case 1:
	      $M(j6n,function(q6n){
	       var r6n=q6n.v[0];
	       var X6o=$hs_indexCharOffAddrzh(v68,r6n);
	       var s6n=$hs_ordzh(X6o);
	       switch(s6n){
	       case 0:
		var Y6o=$d(1,[k6n],"sat");
		var Z6o=$d(1,[q6n,Y6o],"sat");
		var a6p=$d(1,[h6n,Z6o],"sat");
		$r([l6n,a6p]);break;
	       default:
		var t6n=$f(3,function(u6n,v6n,w6n){
		 var P6n=$hs_ordzh(u6n);
		 var x6n=P6n<65536?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(x6n.g){
		 case 1:
		  $M(h6n,function(y6n){
		   var z6n=y6n.v[0];
		   var K6n=P6n-65536|0;
		   var O6n=K6n>>10;
		   var N6n=O6n+55296|0;
		   var M6n=N6n>>>0;
		   var L6n=M6n&65535;
		   var E6n=$hs_writeWord16Arrayzh(z6n,k6n,L6n,w6n);
		   var J6n=K6n>>>0;
		   var I6n=J6n&1023;
		   var H6n=I6n|0;
		   var G6n=H6n+56320|0;
		   var F6n=G6n>>>0;
		   var D6n=F6n&65535;
		   var C6n=k6n+1|0;
		   var B6n=$hs_writeWord16Arrayzh(z6n,C6n,D6n,E6n);
		   var A6n=k6n+2|0;
		   a6l.J(y6n,n6n,v6n,A6n,B6n);
		  },[I68,v68,H68,a6l,k6n,P6n,w6n,n6n,v6n]);break;
		 case 2:
		  $M(h6n,function(Q6n){
		   var R6n=Q6n.v[0];
		   var V6n=P6n>>>0;
		   var U6n=V6n&65535;
		   var T6n=$hs_writeWord16Arrayzh(R6n,k6n,U6n,w6n);
		   var S6n=k6n+1|0;
		   a6l.J(Q6n,n6n,v6n,S6n,T6n);
		  },[I68,v68,H68,a6l,k6n,P6n,w6n,n6n,v6n]);break;
		 }
		},[a6l,k6n,h6n,n6n],"$wa4");
		var W6n=s6n<=127?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(W6n.g){
		case 1:
		 var X6n=s6n<=223?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(X6n.g){
		 case 1:
		  var Y6n=s6n<=239?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Y6n.g){
		  case 1:
		   var u6o=r6n+1|0;
		   var m6o=$hs_indexCharOffAddrzh(v68,u6o);
		   var t6o=r6n+2|0;
		   var p6o=$hs_indexCharOffAddrzh(v68,t6o);
		   var s6o=r6n+3|0;
		   var r6o=$hs_indexCharOffAddrzh(v68,s6o);
		   var a6o=r6n+4|0;
		   var Z6n=$d(1,[a6o],"sat");
		   var q6o=$hs_ordzh(r6o);
		   var e6o=q6o-128|0;
		   var o6o=$hs_ordzh(p6o);
		   var n6o=o6o-128|0;
		   var g6o=n6o<<6;
		   var l6o=$hs_ordzh(m6o);
		   var k6o=l6o-128|0;
		   var i6o=k6o<<12;
		   var j6o=s6n-240|0;
		   var h6o=j6o<<18;
		   var f6o=h6o+i6o|0;
		   var d6o=f6o+g6o|0;
		   var c6o=d6o+e6o|0;
		   var b6o=$hs_chrzh(c6o);
		   t6n.J(b6o,Z6n,l6n);break;
		  case 2:
		   var K6o=r6n+1|0;
		   var G6o=$hs_indexCharOffAddrzh(v68,K6o);
		   var J6o=r6n+2|0;
		   var I6o=$hs_indexCharOffAddrzh(v68,J6o);
		   var w6o=r6n+3|0;
		   var v6o=$d(1,[w6o],"sat");
		   var H6o=$hs_ordzh(I6o);
		   var A6o=H6o-128|0;
		   var F6o=$hs_ordzh(G6o);
		   var E6o=F6o-128|0;
		   var C6o=E6o<<6;
		   var D6o=s6n-224|0;
		   var B6o=D6o<<12;
		   var z6o=B6o+C6o|0;
		   var y6o=z6o+A6o|0;
		   var x6o=$hs_chrzh(y6o);
		   t6n.J(x6o,v6o,l6n);break;
		  }break;
		 case 2:
		  var U6o=r6n+1|0;
		  var T6o=$hs_indexCharOffAddrzh(v68,U6o);
		  var M6o=r6n+2|0;
		  var L6o=$d(1,[M6o],"sat");
		  var S6o=$hs_ordzh(T6o);
		  var Q6o=S6o-128|0;
		  var R6o=s6n-192|0;
		  var P6o=R6o<<6;
		  var O6o=P6o+Q6o|0;
		  var N6o=$hs_chrzh(O6o);
		  t6n.J(N6o,L6o,l6n);break;
		 }break;
		case 2:
		 var W6o=r6n+1|0;
		 var V6o=$d(1,[W6o],"sat");
		 t6n.J(X6o,V6o,l6n);break;
		}
	       }
	      },[I68,v68,H68,a6l,k6n,h6n,n6n,l6n]);break;
	     case 2:
	      var w6p=o6n<<1;
	      var b6p=$f(2,function(c6p,d6p){
	       var e6p=c6p<0?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(e6p.g){
	       case 1:
		var t6p=c6p>>>0;
		var s6p=t6p&1073741824;
		var f6p=s6p|0;
		switch(f6p){
		case 0:
		 var r6p=c6p<<1;
		 var g6p=$hs_newByteArrayzh(r6p,l6n);
		 var h6p=g6p[0],i6p=g6p[1];
		 var j6p=o6n<=0?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(j6p.g){
		 case 1:
		  $M(h6n,function(k6p){
		   var l6p=k6p.v[0];
		   var p6p=o6n>>>0;
		   var $ff=_hs_text_memcpy(i6p,0,l6p,0,p6p);
		   var m6p=[h6p,$ff];
		   var n6p=m6p[0];
		   var o6p=$d(1,[i6p],"sat");
		   a6l.J(o6p,d6p,j6n,k6n,n6p);
		  },[I68,v68,H68,a6l,k6n,o6n,j6n,i6p,h6p,d6p]);break;
		 case 2:
		  var q6p=$d(1,[i6p],"sat");
		  a6l.J(q6p,d6p,j6n,k6n,h6p);break;
		 }break;
		default:
		 $A($$DataziTextziLazzy$J3);
		}break;
	       case 2:
		$A($$DataziTextziLazzy$J3);break;
	       }
	      },[a6l,k6n,o6n,j6n,h6n,l6n],"$j6");
	      var u6p=w6p<=I68?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(u6p.g){
	      case 1:
	       b6p.J(I68,H68);break;
	      case 2:
	       var v6p=$d(1,[w6p],"sat");
	       b6p.J(w6p,v6p);break;
	      }break;
	     }
	    },[I68,v68,H68,a6l,k6n,j6n,h6n,l6n]);break;
	   case 2:
	    var y6p=$d(1,[k6n],"sat");
	    var z6p=$d(1,[j6n,y6p],"sat");
	    var A6p=$d(1,[h6n,z6p],"sat");
	    $r([l6n,A6p]);break;
	   }
	  },[I68,v68,H68],"$wa3");
	  $S(O6k,[I68,v68,H68,a6l]);
	  O6k.J(L6k,G6k,y68,G68,N6k);break;
	 default:
	  $A($$DataziTextziLazzy$J3);
	 }break;
	case 2:
	 $A($$DataziTextziLazzy$J3);break;
	}
       },[G68,I68,v68,y68,D68,H68,F68],"$j5");
       var F6p=8<=I68?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(F6p.g){
       case 1:
	E6k.C([I68,H68],function(G6p){
	 var H6p=G6p[0],I6p=G6p[1];
	 $M(I6p,function(J6p){
	  var K6p=J6p.v[0],L6p=J6p.v[1];
	  $M(K6p,function(M6p){
	   var N6p=M6p.v[0];
	   var O6p=$d(1,[N6p],"sat");
	   var P6p=$d(1,[O6p,L6p],"sat");
	   $r([H6p,P6p]);
	  },[H6p,L6p]);
	 },[H6p]);
	},[]);break;
       case 2:
	var Q6p=$d(1,[8],"sat");
	E6k.C([8,Q6p],function(R6p){
	 var S6p=R6p[0],T6p=R6p[1];
	 $M(T6p,function(U6p){
	  var V6p=U6p.v[0],W6p=U6p.v[1];
	  $M(V6p,function(X6p){
	   var Y6p=X6p.v[0];
	   var Z6p=$d(1,[Y6p],"sat");
	   var a6q=$d(1,[Z6p,W6p],"sat");
	   $r([S6p,a6q]);
	  },[S6p,W6p]);
	 },[S6p]);
	},[]);break;
       }break;
      }break;
     case 2:
      var c6q=$d(1,[G68],"sat");
      var d6q=$d(1,[y68],"sat");
      var e6q=$d(1,[d6q,c6q],"sat");
      var f6q=$d(1,[D68],"sat");
      var g6q=$d(1,[f6q,e6q],"sat");
      $r([F68,g6q]);break;
     }
    },[G68,v68,y68,D68,F68]);
   },[v68,y68,D68],"$w$j4");
   var i6q=w6q<65536?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(i6q.g){
   case 1:
    var r6q=w6q-65536|0;
    var v6q=r6q>>10;
    var u6q=v6q+55296|0;
    var t6q=u6q>>>0;
    var s6q=t6q&65535;
    var l6q=$hs_writeWord16Arrayzh(D68,0,s6q,C68);
    var q6q=r6q>>>0;
    var p6q=q6q&1023;
    var o6q=p6q|0;
    var n6q=o6q+56320|0;
    var m6q=n6q>>>0;
    var k6q=m6q&65535;
    var j6q=$hs_writeWord16Arrayzh(D68,1,k6q,l6q);
    E68.J(j6q,2);break;
   case 2:
    var z6q=w6q>>>0;
    var y6q=z6q&65535;
    var x6q=$hs_writeWord16Arrayzh(D68,0,y6q,C68);
    E68.J(x6q,1);break;
   }
  },[x68,v68,y68],"sat");
  $$GHCziST_runSTRep.C([z68],function(A6q){
   var B6q=A6q.v[0],C6q=A6q.v[1];
   $M(C6q,function(D6q){
    var E6q=D6q.v[0],F6q=D6q.v[1];
    $M(B6q,function(G6q){
     var H6q=G6q.v[0];
     $M(F6q,function(I6q){
      var J6q=I6q.v[0];
      $M(J6q,function(K6q){
       switch(K6q){
       case 0:
	$M(E6q,function(P6q){
	 var Q6q=P6q.v[0];
	 M6q.J(Q6q);
	},[M6q]);break;
       default:
	var L6q=$t(function(){
	 $M(E6q,function(N6q){
	  var O6q=N6q.v[0];
	  M6q.J(O6q);
	 },[M6q]);
	},[E6q,M6q],"sat");
	$R(2,[H6q,0,K6q,L6q],"Chunk");
       }
      },[H6q,E6q,M6q]);
     },[H6q,E6q,M6q]);
    },[F6q,E6q,M6q]);
   },[B6q,M6q]);
  },[M6q]);
 },"$s$w$j"),M6q=$f(1,function(R6q){
  var P6r=$hs_indexCharOffAddrzh(v68,R6q);
  var S6q=$hs_ordzh(P6r);
  switch(S6q){
  case 0:
   $R(1,[],"Empty");break;
  default:
   var T6q=S6q<=127?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(T6q.g){
   case 1:
    var U6q=S6q<=223?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(U6q.g){
    case 1:
     var V6q=S6q<=239?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(V6q.g){
     case 1:
      var q6r=R6q+1|0;
      var i6r=$hs_indexCharOffAddrzh(v68,q6r);
      var p6r=R6q+2|0;
      var l6r=$hs_indexCharOffAddrzh(v68,p6r);
      var o6r=R6q+3|0;
      var n6r=$hs_indexCharOffAddrzh(v68,o6r);
      var X6q=R6q+4|0;
      var m6r=$hs_ordzh(n6r);
      var a6r=m6r-128|0;
      var k6r=$hs_ordzh(l6r);
      var j6r=k6r-128|0;
      var c6r=j6r<<6;
      var h6r=$hs_ordzh(i6r);
      var g6r=h6r-128|0;
      var e6r=g6r<<12;
      var f6r=S6q-240|0;
      var d6r=f6r<<18;
      var b6r=d6r+e6r|0;
      var Z6q=b6r+c6r|0;
      var Y6q=Z6q+a6r|0;
      var W6q=$hs_chrzh(Y6q);
      w68.J(W6q,X6q);break;
     case 2:
      var F6r=R6q+1|0;
      var B6r=$hs_indexCharOffAddrzh(v68,F6r);
      var E6r=R6q+2|0;
      var D6r=$hs_indexCharOffAddrzh(v68,E6r);
      var s6r=R6q+3|0;
      var C6r=$hs_ordzh(D6r);
      var v6r=C6r-128|0;
      var A6r=$hs_ordzh(B6r);
      var z6r=A6r-128|0;
      var x6r=z6r<<6;
      var y6r=S6q-224|0;
      var w6r=y6r<<12;
      var u6r=w6r+x6r|0;
      var t6r=u6r+v6r|0;
      var r6r=$hs_chrzh(t6r);
      w68.J(r6r,s6r);break;
     }break;
    case 2:
     var O6r=R6q+1|0;
     var N6r=$hs_indexCharOffAddrzh(v68,O6r);
     var H6r=R6q+2|0;
     var M6r=$hs_ordzh(N6r);
     var K6r=M6r-128|0;
     var L6r=S6q-192|0;
     var J6r=L6r<<6;
     var I6r=J6r+K6r|0;
     var G6r=$hs_chrzh(I6r);
     w68.J(G6r,H6r);break;
    }break;
   case 2:
    var Q6r=R6q+1|0;
    w68.J(P6r,Q6r);break;
   }
  }
 },[v68,w68],"$wouter3");
 $S(w68,[v68,M6q]);
 M6q.J(0);
},[],"at Data/Text/Lazy.hs:363:1");
var $$DataziTextziLazzy$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow\x00");
},"lvl2");
var $$DataziTextziLazzy$J3=$T(function(){
 $$GHCziErr_error.J($$DataziTextziLazzy$e);
},"poly_a25");

var $$DataziTextziLazzyziInternal_defaultChunkSizze=$D(1,function(){
 $r([16376]);
},"at Data/Text/Lazy/Internal.hs:107:1");

var $$Main_hello=$f(1,function(a){
 $M($$Main$d,function(b){
  var c=b.v[0],d=b.v[1],e=b.v[2];
  $M(a,function(f){
   $b(function(){
    $M(e,function(I3){
     switch(I3.g){
     case 1:
      $R(3,[],"Unknown");break;
     case 2:
      $R(3,[],"Unknown");break;
     case 3:
      $R(3,[],"Unknown");break;
     }
    },[f,c,d]);
   },[],function(g){
    var h=$t(function(){
     var i=$d(1,[f,$$Main$c],"s02");
     var j=$d(2,[i],"lvl12");
     var k=$T(function(){
      l.J(j);
     },"lvl13"),m=$F(2,function(n,o){
      var p=$f(5,function(q,r,s,t,u){
       $M($$DataziTextziLazzyziInternal_defaultChunkSizze,function(v){
	var w=v.v[0];
	var f2=t+1|0;
	var x=f2>=w?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(x.g){
	case 1:
	 $M(r,function(y){
	  var z=y.v[0];
	  var b2=t+1|0;
	  var A=b2>=z?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(A.g){
	  case 1:
	   var B=$f(3,function(C,D,E){
	    var X=$hs_ordzh(C);
	    var F=X<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(F.g){
	    case 1:
	     $M(q,function(G){
	      var H=G.v[0];
	      var S=X-65536|0;
	      var W=S>>10;
	      var V=W+55296|0;
	      var U=V>>>0;
	      var T=U&65535;
	      var M=$hs_writeWord16Arrayzh(H,t,T,E);
	      var R=S>>>0;
	      var Q=R&1023;
	      var P=Q|0;
	      var O=P+56320|0;
	      var N=O>>>0;
	      var L=N&65535;
	      var K=t+1|0;
	      var J=$hs_writeWord16Arrayzh(H,K,L,M);
	      var I=t+2|0;
	      p.J(G,y,D,I,J);
	     },[t,X,E,y,D,p]);break;
	    case 2:
	     $M(q,function(Y){
	      var Z=Y.v[0];
	      var d1=X>>>0;
	      var c1=d1&65535;
	      var b1=$hs_writeWord16Arrayzh(Z,t,c1,E);
	      var a1=t+1|0;
	      p.J(Y,y,D,a1,b1);
	     },[t,X,E,y,D,p]);break;
	    }
	   },[t,q,y,p],"$wa2");
	   $M(s,function(e1){
	    switch(e1.g){
	    case 1:
	     var f1=e1.v[0];
	     c.C([f1],function(g1){
	      switch(g1.g){
	      case 1:
	       p.J(q,y,j,t,u);break;
	      case 2:
	       var h1=g1.v[0];
	       var i1=$d(1,[h1],"sat");
	       p.J(q,y,i1,t,u);break;
	      case 3:
	       var j1=g1.v[0],k1=g1.v[1];
	       $M(j1,function(l1){
		var m1=l1.v[0];
		var n1=$d(1,[k1],"sat");
		B.J(m1,n1,u);
	       },[t,q,y,p,B,u,k1]);break;
	      }
	     },[j,t,q,y,p,B,u]);break;
	    case 2:
	     var o1=e1.v[0];
	     $M(o1,function(p1){
	      var q1=p1.v[0],r1=p1.v[1];
	      $M(r1,function(s1){
	       var t1=s1.v[0];
	       $$Main$e.C([q1,t1],function(u1){
		switch(u1.g){
		case 1:
		 var v1=$d(1,[t],"sat");
		 var w1=$d(1,[e1,v1],"sat");
		 var x1=$d(1,[q,w1],"sat");
		 $r([u,x1]);break;
		case 2:
		 var y1=u1.v[0];
		 var z1=$d(2,[y1],"sat");
		 p.J(q,y,z1,t,u);break;
		case 3:
		 var A1=u1.v[0],B1=u1.v[1];
		 $M(A1,function(C1){
		  var D1=C1.v[0];
		  var E1=$d(2,[B1],"sat");
		  B.J(D1,E1,u);
		 },[t,q,y,p,B,u,B1]);break;
		}
	       },[t,q,y,p,B,u,e1]);
	      },[t,q,y,p,B,u,q1,e1]);
	     },[t,q,y,p,B,u,e1]);break;
	    }
	   },[j,t,q,y,p,B,c,u]);break;
	  case 2:
	   var a2=z<<1;
	   var F1=$f(2,function(G1,H1){
	    var I1=G1<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(I1.g){
	    case 1:
	     var X1=G1>>>0;
	     var W1=X1&1073741824;
	     var J1=W1|0;
	     switch(J1){
	     case 0:
	      var V1=G1<<1;
	      var K1=$hs_newByteArrayzh(V1,u);
	      var L1=K1[0],M1=K1[1];
	      var N1=z<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(N1.g){
	      case 1:
	       $M(q,function(O1){
		var P1=O1.v[0];
		var T1=z>>>0;
		var $ff=_hs_text_memcpy(M1,0,P1,0,T1);
		var Q1=[L1,$ff];
		var R1=Q1[0];
		var S1=$d(1,[M1],"sat");
		p.J(S1,H1,s,t,R1);
	       },[t,z,p,s,M1,L1,H1]);break;
	      case 2:
	       var U1=$d(1,[M1],"sat");
	       p.J(U1,H1,s,t,L1);break;
	      }break;
	     default:
	      $A($$Main$g);
	     }break;
	    case 2:
	     $A($$Main$g);break;
	    }
	   },[t,z,q,p,s,u],"$j");
	   var Y1=a2<=w?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Y1.g){
	   case 1:
	    F1.J(w,v);break;
	   case 2:
	    var Z1=$d(1,[a2],"sat");
	    F1.J(a2,Z1);break;
	   }break;
	  }
	 },[j,t,w,q,p,s,c,u,v]);break;
	case 2:
	 var c2=$d(1,[t],"sat");
	 var d2=$d(1,[s,c2],"sat");
	 var e2=$d(1,[q,d2],"sat");
	 $r([u,e2]);break;
	}
       },[j,t,r,q,p,s,c,u]);
      },[j,c],"$wa1");
      var g2=$f(1,function(h2){
       var i2=$hs_newByteArrayzh(8,h2);
       var j2=i2[0],k2=i2[1];
       var N2=$hs_ordzh(n);
       var l2=$d(1,[k2],"lvl14");
       var m2=$f(2,function(n2,o2){
	p.C([l2,$$Main_tryHamlet4,o,o2,n2],function(p2){
	 var q2=p2[0],r2=p2[1];
	 $M(r2,function(s2){
	  var t2=s2.v[0],u2=s2.v[1];
	  $M(t2,function(v2){
	   var w2=v2.v[0];
	   var x2=$d(1,[w2],"sat");
	   var y2=$d(1,[x2,u2],"sat");
	   $r([q2,y2]);
	  },[q2,u2]);
	 },[q2]);
	},[]);
       },[p,l2,o],"$w$j2");
       var z2=N2<65536?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(z2.g){
       case 1:
	var I2=N2-65536|0;
	var M2=I2>>10;
	var L2=M2+55296|0;
	var K2=L2>>>0;
	var J2=K2&65535;
	var C2=$hs_writeWord16Arrayzh(k2,0,J2,j2);
	var H2=I2>>>0;
	var G2=H2&1023;
	var F2=G2|0;
	var E2=F2+56320|0;
	var D2=E2>>>0;
	var B2=D2&65535;
	var A2=$hs_writeWord16Arrayzh(k2,1,B2,C2);
	m2.J(A2,2);break;
       case 2:
	var Q2=N2>>>0;
	var P2=Q2&65535;
	var O2=$hs_writeWord16Arrayzh(k2,0,P2,j2);
	m2.J(O2,1);break;
       }
      },[p,n,o],"sat");
      $$GHCziST_runSTRep.C([g2],function(R2){
       var S2=R2.v[0],T2=R2.v[1];
       $M(T2,function(U2){
	var V2=U2.v[0],W2=U2.v[1];
	$M(S2,function(X2){
	 var Y2=X2.v[0];
	 $M(W2,function(Z2){
	  var a3=Z2.v[0];
	  $M(a3,function(b3){
	   switch(b3){
	   case 0:
	    l.J(V2);break;
	   default:
	    var c3=$t(function(){
	     l.J(V2);
	    },[l,V2],"sat");
	    $R(2,[Y2,0,b3,c3],"Chunk");
	   }
	  },[l,Y2,V2]);
	 },[l,Y2,V2]);
	},[l,W2,V2]);
       },[l,S2]);
      },[l]);
     },"$w$j1"),l=$f(1,function(d3){
      $M(d3,function(e3){
       switch(e3.g){
       case 1:
	var f3=e3.v[0];
	c.C([f3],function(g3){
	 switch(g3.g){
	 case 1:
	  $A(k);break;
	 case 2:
	  var h3=g3.v[0];
	  var i3=$d(1,[h3],"sat");
	  l.J(i3);break;
	 case 3:
	  var j3=g3.v[0],k3=g3.v[1];
	  $M(j3,function(l3){
	   var m3=l3.v[0];
	   var n3=$d(1,[k3],"sat");
	   m.J(m3,n3);
	  },[m,k3]);break;
	 }
	},[l,k,m]);break;
       case 2:
	var o3=e3.v[0];
	$M(o3,function(p3){
	 var q3=p3.v[0],r3=p3.v[1];
	 $M(r3,function(s3){
	  var t3=s3.v[0];
	  $$Main$e.C([q3,t3],function(u3){
	   switch(u3.g){
	   case 1:
	    $R(1,[],"Empty");break;
	   case 2:
	    var v3=u3.v[0];
	    var w3=$d(2,[v3],"sat");
	    l.J(w3);break;
	   case 3:
	    var x3=u3.v[0],y3=u3.v[1];
	    $M(x3,function(z3){
	     var A3=z3.v[0];
	     var B3=$d(2,[y3],"sat");
	     m.J(A3,B3);
	    },[m,y3]);break;
	   }
	  },[l,m]);
	 },[l,m,q3]);
	},[l,m]);break;
       }
      },[l,k,c,m]);
     },[k,c,m],"outer");
     $S(k,[j,l]);
     $S(m,[j,l,c]);
     var C3=$d(1,[d],"sat");
     l.J(C3);
    },[f,c,d],"$w$j");
    $M(g,function(D3){
     switch(D3.g){
     case 1:
      var E3=D3.v[0];
      var F3=E3<=0?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(F3.g){
      case 1:
       $A(h);break;
      case 2:
       $R(1,[],"Empty");break;
      }break;
     case 2:
      var G3=D3.v[0];
      var H3=G3<=0?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(H3.g){
      case 1:
       $A(h);break;
      case 2:
       $R(1,[],"Empty");break;
      }break;
     case 3:
      $A(h);break;
     }
    },[f,c,d,h]);
   },[f,c,d]);
  },[e,c,d]);
 },[a]);
},[],"at Main.hs:26:1");
var $$Main$a=$F(2,function(B6,C6){
 $M(B6,function(D6){
  switch(D6.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var E6=D6.v[0],F6=D6.v[1],G6=D6.v[2],H6=D6.v[3];
   var I6=C6>=G6?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(I6.g){
   case 1:
    var a7=F6+C6|0;
    var W6=$hs_indexWord16Arrayzh(E6,a7);
    var J6=W6<55296?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(J6.g){
    case 1:
     var K6=W6>56319?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(K6.g){
     case 1:
      var Z6=a7+1|0;
      var Y6=$hs_indexWord16Arrayzh(E6,Z6);
      var M6=C6+2|0;
      var L6=$d(1,[M6],"sat");
      var N6=$d(1,[D6,L6],"sat");
      var X6=Y6|0;
      var T6=X6-56320|0;
      var V6=W6|0;
      var U6=V6-55296|0;
      var S6=U6<<10;
      var R6=S6+T6|0;
      var Q6=R6+65536|0;
      var P6=$hs_chrzh(Q6);
      var O6=$d(1,[P6],"sat");
      $R(3,[O6,N6],"Yield");break;
     case 2:
      var c7=C6+1|0;
      var b7=$d(1,[c7],"sat");
      var d7=$d(1,[D6,b7],"sat");
      var g7=W6|0;
      var f7=$hs_chrzh(g7);
      var e7=$d(1,[f7],"sat");
      $R(3,[e7,d7],"Yield");break;
     }break;
    case 2:
     var i7=C6+1|0;
     var h7=$d(1,[i7],"sat");
     var j7=$d(1,[D6,h7],"sat");
     var m7=W6|0;
     var l7=$hs_chrzh(m7);
     var k7=$d(1,[l7],"sat");
     $R(3,[k7,j7],"Yield");break;
    }break;
   case 2:
    $$Main$a.J(H6,0);break;
   }break;
  }
 },[C6]);
},"$wnext1");
var $$Main$b=$F(1,function(n7){
 $M(n7,function(o7){
  var p7=o7.v[0],q7=o7.v[1];
  $M(q7,function(r7){
   var s7=r7.v[0];
   $$Main$a.J(p7,s7);
  },[p7]);
 },[]);
},"next1");
var $$Main$c=$D(1,function(){
 $r([0]);
},"lvl");
var $$Main$d=$T(function(){
 $$DataziTextziLazzy_unpackCStringzh.C(["Hello \x00"],function(t7){
  var u7=$d(1,[t7,$$Main$c],"sat");
  $R(1,[$$Main$b,u7,$$DataziTextziFusionziSizze_Unknown],"Stream");
 },[]);
},"lvl1");
var $$Main$e=$F(2,function(v7,w7){
 $M(v7,function(x7){
  switch(x7.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var y7=x7.v[0],z7=x7.v[1],A7=x7.v[2],B7=x7.v[3];
   var C7=w7>=A7?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(C7.g){
   case 1:
    var U7=z7+w7|0;
    var Q7=$hs_indexWord16Arrayzh(y7,U7);
    var D7=Q7<55296?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(D7.g){
    case 1:
     var E7=Q7>56319?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(E7.g){
     case 1:
      var T7=U7+1|0;
      var S7=$hs_indexWord16Arrayzh(y7,T7);
      var G7=w7+2|0;
      var F7=$d(1,[G7],"sat");
      var H7=$d(1,[x7,F7],"sat");
      var R7=S7|0;
      var N7=R7-56320|0;
      var P7=Q7|0;
      var O7=P7-55296|0;
      var M7=O7<<10;
      var L7=M7+N7|0;
      var K7=L7+65536|0;
      var J7=$hs_chrzh(K7);
      var I7=$d(1,[J7],"sat");
      $R(3,[I7,H7],"Yield");break;
     case 2:
      var W7=w7+1|0;
      var V7=$d(1,[W7],"sat");
      var X7=$d(1,[x7,V7],"sat");
      var a8=Q7|0;
      var Z7=$hs_chrzh(a8);
      var Y7=$d(1,[Z7],"sat");
      $R(3,[Y7,X7],"Yield");break;
     }break;
    case 2:
     var c8=w7+1|0;
     var b8=$d(1,[c8],"sat");
     var d8=$d(1,[x7,b8],"sat");
     var g8=Q7|0;
     var f8=$hs_chrzh(g8);
     var e8=$d(1,[f8],"sat");
     $R(3,[e8,d8],"Yield");break;
    }break;
   case 2:
    $$Main$e.J(B7,0);break;
   }break;
  }
 },[w7]);
},"$wnext2");
var $$Main$g=$T(function(){
 $$GHCziErr_error.J($$Main$f);
},"poly_a");

//@ sourceURL=hs6.js
