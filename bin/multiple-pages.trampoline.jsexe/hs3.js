//$$Main_lazzyLoadzuwireHamlet
//$$Main_lazzyLoadzuwirePrime
//$$ZCMain_main

var $$SystemziGlibziFFI_zdwa=$f(3,function(R,S,T){
 var U=$t(function(){
  $M(S,function(V){
   var W=V.v[0];
   var X=$f(1,function(Y){
    var $ff=$hs_dynamicCall(W,R);
    var Z=[Y,$ff];
    var a1=Z[0];
    $r([a1,$$GHCziTuple_Z0T]);
   },[R,W],"sat");
   $A(X);
  },[R]);
 },[R,S],"sat");
 $$GHCziForeignPtr_zdwa7.J(R,U,T);
},[],"in `glib-0.12.3.1:System.Glib.FFI'");
var $$SystemziGlibziGError_failOnGError2=$f(1,function(W2){
 $M(W2,function(X2){
  var Y2=X2.v[0],Z2=X2.v[1];
  $$GHCziException_zdp1Exception.C([Y2,Z2],function(a3){
   var b3=a3.v[0],c3=a3.v[1];
   var d3=$hs_eqWordzh(b3,goog.math.Long.fromBits(3582374661,870224196));
   switch(d3.g){
   case 1:
    var e3=$f(1,function(b1){
     $r($hs_raiseIOzh(X2,b1));
    },[X2],"sat");
    $A(e3);break;
   case 2:
    var f3=$hs_eqWordzh(c3,goog.math.Long.fromBits(3787932476,2058929238));
    switch(f3.g){
    case 1:
     var g3=$f(1,function(b1){
      $r($hs_raiseIOzh(X2,b1));
     },[X2],"sat");
     $A(g3);break;
    case 2:
     $M(Z2,function(h3){
      var i3=h3.v[2];
      $$GHCziIO_failIO.J(i3);
     },[]);break;
    }break;
   }
  },[Z2,X2]);
 },[]);
},[],"in `glib-0.12.3.1:System.Glib.GError'");
var $$SystemziGlibziGObject_makeNewGObject2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("makeNewGObject: object is NULL");
},[],"in `glib-0.12.3.1:System.Glib.GObject'");
var $$SystemziGlibziGObject_zdwa1=$f(4,function(d1,e1,f1,g1){
 f1.C([g1],function(h1){
  var i1=h1[0],j1=h1[1];
  $M(j1,function(k1){
   var l1=k1.v[0];
   var m1=$f(1,function(n1){
    var $ff=g_object_ref(l1);
    var o1=[n1,$ff];
    var p1=o1[0];
    $$SystemziGlibziFFI_zdwa.C([l1,e1,p1],function(q1){
     var r1=q1[0],s1=q1[1];
     d1.C([s1],function(t1){
      $r([r1,t1]);
     },[r1]);
    },[d1]);
   },[l1,e1,d1],"a2");
   var u1=$hs_eqAddrzh(l1,null);
   switch(u1.g){
   case 1:
    m1.J(i1);break;
   case 2:
    $$GHCziIO_failIO.C([$$SystemziGlibziGObject_makeNewGObject2,i1],function(v1){
     var w1=v1[0];
     m1.J(w1);
    },[l1,e1,d1,m1]);break;
   }
  },[e1,d1,i1]);
 },[e1,d1]);
},[],"in `glib-0.12.3.1:System.Glib.GObject'");
var $$SystemziGlibziTypes_toGObject=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at System/Glib/Types.chs:51:3");
var $$SystemziGlibziUTFString_fromUTF=$f(1,function(B){
 $M(B,function(C){
  switch(C.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var D=C.v[0],E=C.v[1];
   $M(D,function(F){
    var G=F.v[0];
    var b2=$hs_ordzh(G);
    var H=b2.lessThanOrEqual(goog.math.Long.fromBits(127,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(H.g){
    case 1:
     var Z1=$hs_ordzh(G);
     var I=Z1.lessThanOrEqual(goog.math.Long.fromBits(191,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(I.g){
     case 1:
      var Y1=$hs_ordzh(G);
      var J=Y1.lessThanOrEqual(goog.math.Long.fromBits(223,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(J.g){
      case 1:
       var y1=$hs_ordzh(G);
       var K=y1.lessThanOrEqual(goog.math.Long.fromBits(239,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(K.g){
       case 1:
	$A($$SystemziGlibziUTFString$f);break;
       case 2:
	$M(E,function(L){
	 switch(L.g){
	 case 1:
	  $A($$SystemziGlibziUTFString$d);break;
	 case 2:
	  var M=L.v[0],N=L.v[1];
	  $M(N,function(O){
	   switch(O.g){
	   case 1:
	    $A($$SystemziGlibziUTFString$d);break;
	   case 2:
	    var P=O.v[0],Q=O.v[1];
	    var R=$t(function(){
	     $$SystemziGlibziUTFString_fromUTF.J(Q);
	    },[Q],"sat");
	    var S=$t(function(){
	     $M(M,function(T){
	      var U=T.v[0];
	      $M(P,function(V){
	       var W=V.v[0];
	       var x1=$hs_ordzh(U);
	       var w1=$hs_int2Wordzh(x1);
	       var v1=w1.and(goog.math.Long.fromBits(63,0));
	       var u1=$hs_word2Intzh(v1);
	       var Y=$hs_uncheckedIShiftLzh(u1,goog.math.Long.fromBits(6,0));
	       var t1=$hs_ordzh(G);
	       var s1=$hs_int2Wordzh(t1);
	       var r1=s1.and(goog.math.Long.fromBits(15,0));
	       var q1=$hs_word2Intzh(r1);
	       var Z=$hs_uncheckedIShiftLzh(q1,goog.math.Long.fromBits(12,0));
	       var p1=$hs_ordzh(W);
	       var o1=$hs_int2Wordzh(p1);
	       var l1=o1.and(goog.math.Long.fromBits(63,0));
	       var n1=$hs_int2Wordzh(Y);
	       var m1=$hs_int2Wordzh(Z);
	       var k1=m1.or(n1);
	       var j1=k1.or(l1);
	       var X=$hs_leWordzh(j1,goog.math.Long.fromBits(1114111,0));
	       switch(X.g){
	       case 1:
		$$SystemziGlibziUTFString$h.J(W,Y,Z);break;
	       case 2:
		var i1=$hs_ordzh(W);
		var h1=$hs_int2Wordzh(i1);
		var e1=h1.and(goog.math.Long.fromBits(63,0));
		var g1=$hs_int2Wordzh(Y);
		var f1=$hs_int2Wordzh(Z);
		var d1=f1.or(g1);
		var c1=d1.or(e1);
		var b1=$hs_word2Intzh(c1);
		var a1=$hs_chrzh(b1);
		$R(1,[a1],"C#");break;
	       }
	      },[G,U]);
	     },[G,P]);
	    },[G,M,P],"sat");
	    $R(2,[S,R],":");break;
	   }
	  },[G,M]);break;
	 }
	},[G]);break;
       }break;
      case 2:
       $M(E,function(z1){
	switch(z1.g){
	case 1:
	 $A($$SystemziGlibziUTFString$b);break;
	case 2:
	 var A1=z1.v[0],B1=z1.v[1];
	 var C1=$t(function(){
	  $$SystemziGlibziUTFString_fromUTF.J(B1);
	 },[B1],"sat");
	 var D1=$t(function(){
	  $M(A1,function(E1){
	   var F1=E1.v[0];
	   var X1=$hs_ordzh(G);
	   var W1=$hs_int2Wordzh(X1);
	   var V1=W1.and(goog.math.Long.fromBits(31,0));
	   var U1=$hs_word2Intzh(V1);
	   var H1=$hs_uncheckedIShiftLzh(U1,goog.math.Long.fromBits(6,0));
	   var T1=$hs_ordzh(F1);
	   var S1=$hs_int2Wordzh(T1);
	   var R1=S1.and(goog.math.Long.fromBits(63,0));
	   var Q1=$hs_int2Wordzh(H1);
	   var P1=Q1.or(R1);
	   var G1=$hs_leWordzh(P1,goog.math.Long.fromBits(1114111,0));
	   switch(G1.g){
	   case 1:
	    $$SystemziGlibziUTFString$g.J(F1,H1);break;
	   case 2:
	    var O1=$hs_ordzh(F1);
	    var N1=$hs_int2Wordzh(O1);
	    var M1=N1.and(goog.math.Long.fromBits(63,0));
	    var L1=$hs_int2Wordzh(H1);
	    var K1=L1.or(M1);
	    var J1=$hs_word2Intzh(K1);
	    var I1=$hs_chrzh(J1);
	    $R(1,[I1],"C#");break;
	   }
	  },[G]);
	 },[G,A1],"sat");
	 $R(2,[D1,C1],":");break;
	}
       },[G]);break;
      }break;
     case 2:
      $A($$SystemziGlibziUTFString$f);break;
     }break;
    case 2:
     var a2=$t(function(){
      $$SystemziGlibziUTFString_fromUTF.J(E);
     },[E],"sat");
     $R(2,[F,a2],":");break;
    }
   },[E]);break;
  }
 },[]);
},[],"at System/Glib/UTFString.hs:186:1");
var $$SystemziGlibziUTFString_toUTF=$f(1,function(R5){
 $M(R5,function(S5){
  switch(S5.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var T5=S5.v[0],U5=S5.v[1];
   $M(T5,function(V5){
    var W5=V5.v[0];
    var o7=$hs_ordzh(W5);
    var X5=o7.lessThanOrEqual(goog.math.Long.fromBits(127,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(X5.g){
    case 1:
     var m7=$hs_ordzh(W5);
     var Y5=m7.lessThanOrEqual(goog.math.Long.fromBits(2047,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Y5.g){
     case 1:
      var Z5=$t(function(){
       $$SystemziGlibziUTFString_toUTF.J(U5);
      },[U5],"sat");
      var a6=$t(function(){
       var l6=$hs_ordzh(W5);
       var k6=$hs_int2Wordzh(l6);
       var j6=k6.and(goog.math.Long.fromBits(63,0));
       var i6=goog.math.Long.fromBits(128,0).or(j6);
       var b6=$hs_leWordzh(i6,goog.math.Long.fromBits(1114111,0));
       switch(b6.g){
       case 1:
	$$SystemziGlibziUTFString$j.J(W5);break;
       case 2:
	var h6=$hs_ordzh(W5);
	var g6=$hs_int2Wordzh(h6);
	var f6=g6.and(goog.math.Long.fromBits(63,0));
	var e6=goog.math.Long.fromBits(128,0).or(f6);
	var d6=$hs_word2Intzh(e6);
	var c6=$hs_chrzh(d6);
	$R(1,[c6],"C#");break;
       }
      },[W5],"sat");
      var m6=$d(2,[a6,Z5],"sat");
      var n6=$t(function(){
       var y6=$hs_ordzh(W5);
       var p6=$hs_uncheckedIShiftRAzh(y6,goog.math.Long.fromBits(6,0));
       var x6=$hs_int2Wordzh(p6);
       var w6=x6.and(goog.math.Long.fromBits(63,0));
       var v6=goog.math.Long.fromBits(128,0).or(w6);
       var o6=$hs_leWordzh(v6,goog.math.Long.fromBits(1114111,0));
       switch(o6.g){
       case 1:
	$$SystemziGlibziUTFString$i.J(p6);break;
       case 2:
	var u6=$hs_int2Wordzh(p6);
	var t6=u6.and(goog.math.Long.fromBits(63,0));
	var s6=goog.math.Long.fromBits(128,0).or(t6);
	var r6=$hs_word2Intzh(s6);
	var q6=$hs_chrzh(r6);
	$R(1,[q6],"C#");break;
       }
      },[W5],"sat");
      var z6=$d(2,[n6,m6],"sat");
      var A6=$t(function(){
       var L6=$hs_ordzh(W5);
       var C6=$hs_uncheckedIShiftRAzh(L6,goog.math.Long.fromBits(12,0));
       var K6=$hs_int2Wordzh(C6);
       var J6=K6.and(goog.math.Long.fromBits(15,0));
       var I6=goog.math.Long.fromBits(224,0).or(J6);
       var B6=$hs_leWordzh(I6,goog.math.Long.fromBits(1114111,0));
       switch(B6.g){
       case 1:
	$$SystemziGlibziUTFString$l.J(C6);break;
       case 2:
	var H6=$hs_int2Wordzh(C6);
	var G6=H6.and(goog.math.Long.fromBits(15,0));
	var F6=goog.math.Long.fromBits(224,0).or(G6);
	var E6=$hs_word2Intzh(F6);
	var D6=$hs_chrzh(E6);
	$R(1,[D6],"C#");break;
       }
      },[W5],"sat");
      $R(2,[A6,z6],":");break;
     case 2:
      var M6=$t(function(){
       $$SystemziGlibziUTFString_toUTF.J(U5);
      },[U5],"sat");
      var N6=$t(function(){
       var Y6=$hs_ordzh(W5);
       var X6=$hs_int2Wordzh(Y6);
       var W6=X6.and(goog.math.Long.fromBits(63,0));
       var V6=goog.math.Long.fromBits(128,0).or(W6);
       var O6=$hs_leWordzh(V6,goog.math.Long.fromBits(1114111,0));
       switch(O6.g){
       case 1:
	$$SystemziGlibziUTFString$j.J(W5);break;
       case 2:
	var U6=$hs_ordzh(W5);
	var T6=$hs_int2Wordzh(U6);
	var S6=T6.and(goog.math.Long.fromBits(63,0));
	var R6=goog.math.Long.fromBits(128,0).or(S6);
	var Q6=$hs_word2Intzh(R6);
	var P6=$hs_chrzh(Q6);
	$R(1,[P6],"C#");break;
       }
      },[W5],"sat");
      var Z6=$d(2,[N6,M6],"sat");
      var a7=$t(function(){
       var l7=$hs_ordzh(W5);
       var c7=$hs_uncheckedIShiftRAzh(l7,goog.math.Long.fromBits(6,0));
       var k7=$hs_int2Wordzh(c7);
       var j7=k7.and(goog.math.Long.fromBits(31,0));
       var i7=goog.math.Long.fromBits(192,0).or(j7);
       var b7=$hs_leWordzh(i7,goog.math.Long.fromBits(1114111,0));
       switch(b7.g){
       case 1:
	$$SystemziGlibziUTFString$k.J(c7);break;
       case 2:
	var h7=$hs_int2Wordzh(c7);
	var g7=h7.and(goog.math.Long.fromBits(31,0));
	var f7=goog.math.Long.fromBits(192,0).or(g7);
	var e7=$hs_word2Intzh(f7);
	var d7=$hs_chrzh(e7);
	$R(1,[d7],"C#");break;
       }
      },[W5],"sat");
      $R(2,[a7,Z6],":");break;
     }break;
    case 2:
     var n7=$t(function(){
      $$SystemziGlibziUTFString_toUTF.J(U5);
     },[U5],"sat");
     $R(2,[V5,n7],":");break;
    }
   },[U5]);break;
  }
 },[]);
},[],"at System/Glib/UTFString.hs:171:1");
var $$SystemziGlibziUTFString$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("fromUTF: illegal two byte sequence");
},"lvl");
var $$SystemziGlibziUTFString$b=$T(function(){
 $$GHCziErr_error.J($$SystemziGlibziUTFString$a);
},"lvl1");
var $$SystemziGlibziUTFString$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("fromUTF: illegal three byte sequence");
},"lvl2");
var $$SystemziGlibziUTFString$d=$T(function(){
 $$GHCziErr_error.J($$SystemziGlibziUTFString$c);
},"lvl3");
var $$SystemziGlibziUTFString$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("fromUTF: illegal UTF-8 character");
},"lvl4");
var $$SystemziGlibziUTFString$f=$T(function(){
 $$GHCziErr_error.J($$SystemziGlibziUTFString$e);
},"at System/Glib/UTFString.hs:202:5");
var $$SystemziGlibziUTFString$g=$F(2,function(l8,m8){
 var s8=$hs_ordzh(l8);
 var r8=$hs_int2Wordzh(s8);
 var q8=r8.and(goog.math.Long.fromBits(63,0));
 var p8=$hs_int2Wordzh(m8);
 var o8=p8.or(q8);
 var n8=$hs_word2Intzh(o8);
 $$GHCziChar_chr2.J(n8);
},"lvl5");
var $$SystemziGlibziUTFString$h=$F(3,function(t8,u8,v8){
 var D8=$hs_ordzh(t8);
 var C8=$hs_int2Wordzh(D8);
 var z8=C8.and(goog.math.Long.fromBits(63,0));
 var B8=$hs_int2Wordzh(u8);
 var A8=$hs_int2Wordzh(v8);
 var y8=A8.or(B8);
 var x8=y8.or(z8);
 var w8=$hs_word2Intzh(x8);
 $$GHCziChar_chr2.J(w8);
},"lvl6");
var $$SystemziGlibziUTFString$i=$F(1,function(E8){
 var I8=$hs_int2Wordzh(E8);
 var H8=I8.and(goog.math.Long.fromBits(63,0));
 var G8=goog.math.Long.fromBits(128,0).or(H8);
 var F8=$hs_word2Intzh(G8);
 $$GHCziChar_chr2.J(F8);
},"lvl7");
var $$SystemziGlibziUTFString$j=$F(1,function(J8){
 var O8=$hs_ordzh(J8);
 var N8=$hs_int2Wordzh(O8);
 var M8=N8.and(goog.math.Long.fromBits(63,0));
 var L8=goog.math.Long.fromBits(128,0).or(M8);
 var K8=$hs_word2Intzh(L8);
 $$GHCziChar_chr2.J(K8);
},"lvl8");
var $$SystemziGlibziUTFString$k=$F(1,function(P8){
 var T8=$hs_int2Wordzh(P8);
 var S8=T8.and(goog.math.Long.fromBits(31,0));
 var R8=goog.math.Long.fromBits(192,0).or(S8);
 var Q8=$hs_word2Intzh(R8);
 $$GHCziChar_chr2.J(Q8);
},"lvl9");
var $$SystemziGlibziUTFString$l=$F(1,function(U8){
 var Y8=$hs_int2Wordzh(U8);
 var X8=Y8.and(goog.math.Long.fromBits(15,0));
 var W8=goog.math.Long.fromBits(224,0).or(X8);
 var V8=$hs_word2Intzh(W8);
 $$GHCziChar_chr2.J(V8);
},"lvl10");
var $$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop=$D(1,function(){
 $r([$hs_labelFunction("gtk2hs_g_object_unref_from_mainloop",null)]);
},"at Graphics/UI/Gtk/General/Threading.hs:37:3");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1=$f(1,function(J8){
 $A(J8);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$ControlziExceptionziBase_bracket2=$f(3,function(I1,J1,K1){
 I1.C([K1],function(L1){
  var M1=L1[0];
  $r($hs_raiseIOzh(J1,M1));
 },[J1]);
},[],"in `base:Control.Exception.Base'");
var $$DataziList_isPrefixOf=$f(3,function(Lk,Mk,Nk){
 $M(Mk,function(Ok){
  switch(Ok.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   var Pk=Ok.v[0],Qk=Ok.v[1];
   $M(Nk,function(Rk){
    switch(Rk.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var Sk=Rk.v[0],Tk=Rk.v[1];
     $$GHCziClasses_zeze.C([Lk,Pk,Sk],function(Uk){
      switch(Uk.g){
      case 1:
       $R(1,[],"False");break;
      case 2:
       $$DataziList_isPrefixOf.J(Lk,Qk,Tk);break;
      }
     },[Lk,Qk,Tk]);break;
    }
   },[Lk,Pk,Qk]);break;
  }
 },[Nk,Lk]);
},[],"at libraries/base/Data/List.hs:297:1");
var $$DataziMaybe_fromJust1=$t(function(){
 $$GHCziErr_error.J($$DataziMaybe$a);
},[],"in `base:Data.Maybe'");
var $$DataziMaybe_Nothing=$D(1,function(){
 $r([]);
},"at libraries/base/Data/Maybe.hs:68:19");
var $$DataziMaybe$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Maybe.fromJust: Nothing");
},"lvl");
var $$DataziTypeable_cast=$f(3,function(L,M,N){
 var O=$t(function(){
  L.C([N],function(P){
   var Q=P.v[0],R=P.v[1];
   var S=$t(function(){
    $M(O,function(T){
     switch(T.g){
     case 1:
      $A($$DataziMaybe_fromJust1);break;
     case 2:
      var U=T.v[0];
      $A(U);break;
     }
    },[]);
   },[O],"sat");
   M.C([S],function(V){
    var W=V.v[0],X=V.v[1];
    var Y=$hs_eqWordzh(Q,W);
    switch(Y.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     var Z=$hs_eqWordzh(R,X);
     switch(Z.g){
     case 1:
      $R(1,[],"Nothing");break;
     case 2:
      $R(2,[N],"Just");break;
     }break;
    }
   },[N,Q,R]);
  },[N,O,M]);
 },[N,L,M],"r");
 $A(O);
},[],"at libraries/base/Data/Typeable.hs:176:1");
var $$DataziTypeableziInternal_mkTyCon=$f(5,function(N,O,P,Q,R){
 $R(1,[N,O,P,Q,R],"TyCon");
},[],"at libraries/base/Data/Typeable/Internal.hs:126:1");
var $$DataziTypeableziInternal_mkTyConApp=$f(2,function(S,T){
 $M(S,function(U){
  var V=U.v[0],W=U.v[1];
  $M(T,function(X){
   switch(X.g){
   case 1:
    $R(1,[V,W,U,$$GHCziTypes_ZMZN],"TypeRep");break;
   case 2:
    var Y=$t(function(){
     $$DataziTypeableziInternal$j.J(X);
    },[X],"sat");
    var Z=$d(1,[V,W],"sat");
    var a1=$d(2,[Z,Y],"sat");
    $$GHCziFingerprint_fingerprintFingerprints.C([a1],function(b1){
     var c1=b1.v[0],d1=b1.v[1];
     $R(1,[c1,d1,U,X],"TypeRep");
    },[U,X]);break;
   }
  },[V,W,U]);
 },[T]);
},[],"at libraries/base/Data/Typeable/Internal.hs:131:1");
var $$DataziTypeableziInternal$j=$F(1,function(pl){
 $M(pl,function(ql){
  switch(ql.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var rl=ql.v[0],sl=ql.v[1];
   $M(rl,function(tl){
    var ul=tl.v[0],vl=tl.v[1];
    var wl=$t(function(){
     $$DataziTypeableziInternal$j.J(sl);
    },[sl],"sat");
    var xl=$d(1,[ul,vl],"sat");
    $R(2,[xl,wl],":");
   },[sl]);break;
  }
 },[]);
},"go");
var $$ForeignziCziError_eBADF1=$D(1,function(){
 $r([goog.math.Long.fromBits(9,0)]);
},"in `base:Foreign.C.Error'");
var $$ForeignziCziError_errnoToIOError=$f(4,function(C,D,E,F){
 var G=$f(1,function(H){
  var X=$hs_noDuplicatezh(H);
  $M(D,function(I){
   var J=I.v[0];
   var $ff=strerror(J);
   var K=[X,$ff];
   var L=K[0],M=K[1];
   $$GHCziIOziEncoding_getForeignEncoding.C([L],function(N){
    var O=N[0],P=N[1];
    $$GHCziForeign_zdwa.C([P,M,O],function(Q){
     var R=Q[0],S=Q[1];
     var T=$d(2,[I],"sat");
     var U=$t(function(){
      $M(J,function(V){
       switch(V.toString()){
       case "1":
	$R(7,[],"PermissionDenied");break;
       case "2":
	$R(2,[],"NoSuchThing");break;
       case "3":
	$R(2,[],"NoSuchThing");break;
       case "4":
	$R(19,[],"Interrupted");break;
       case "5":
	$R(15,[],"HardwareFault");break;
       case "6":
	$R(2,[],"NoSuchThing");break;
       case "7":
	$R(4,[],"ResourceExhausted");break;
       case "8":
	$R(13,[],"InvalidArgument");break;
       case "9":
	$R(13,[],"InvalidArgument");break;
       case "10":
	$R(2,[],"NoSuchThing");break;
       case "11":
	$R(4,[],"ResourceExhausted");break;
       case "12":
	$R(4,[],"ResourceExhausted");break;
       case "13":
	$R(7,[],"PermissionDenied");break;
       case "15":
	$R(13,[],"InvalidArgument");break;
       case "16":
	$R(3,[],"ResourceBusy");break;
       case "17":
	$R(1,[],"AlreadyExists");break;
       case "18":
	$R(16,[],"UnsupportedOperation");break;
       case "19":
	$R(16,[],"UnsupportedOperation");break;
       case "20":
	$R(14,[],"InappropriateType");break;
       case "21":
	$R(14,[],"InappropriateType");break;
       case "22":
	$R(13,[],"InvalidArgument");break;
       case "23":
	$R(4,[],"ResourceExhausted");break;
       case "24":
	$R(4,[],"ResourceExhausted");break;
       case "25":
	$R(6,[],"IllegalOperation");break;
       case "26":
	$R(3,[],"ResourceBusy");break;
       case "27":
	$R(7,[],"PermissionDenied");break;
       case "28":
	$R(4,[],"ResourceExhausted");break;
       case "29":
	$R(16,[],"UnsupportedOperation");break;
       case "30":
	$R(7,[],"PermissionDenied");break;
       case "31":
	$R(4,[],"ResourceExhausted");break;
       case "32":
	$R(18,[],"ResourceVanished");break;
       case "33":
	$R(13,[],"InvalidArgument");break;
       case "34":
	$R(16,[],"UnsupportedOperation");break;
       case "35":
	$R(3,[],"ResourceBusy");break;
       case "36":
	$R(13,[],"InvalidArgument");break;
       case "37":
	$R(4,[],"ResourceExhausted");break;
       case "38":
	$R(16,[],"UnsupportedOperation");break;
       case "39":
	$R(9,[],"UnsatisfiedConstraints");break;
       case "40":
	$R(13,[],"InvalidArgument");break;
       case "42":
	$R(2,[],"NoSuchThing");break;
       case "43":
	$R(18,[],"ResourceVanished");break;
       case "60":
	$R(13,[],"InvalidArgument");break;
       case "61":
	$R(2,[],"NoSuchThing");break;
       case "62":
	$R(17,[],"TimeExpired");break;
       case "63":
	$R(4,[],"ResourceExhausted");break;
       case "64":
	$R(2,[],"NoSuchThing");break;
       case "66":
	$R(6,[],"IllegalOperation");break;
       case "67":
	$R(18,[],"ResourceVanished");break;
       case "69":
	$R(9,[],"UnsatisfiedConstraints");break;
       case "70":
	$R(18,[],"ResourceVanished");break;
       case "71":
	$R(11,[],"ProtocolError");break;
       case "72":
	$R(16,[],"UnsupportedOperation");break;
       case "74":
	$R(14,[],"InappropriateType");break;
       case "78":
	$R(18,[],"ResourceVanished");break;
       case "84":
	$R(13,[],"InvalidArgument");break;
       case "87":
	$R(4,[],"ResourceExhausted");break;
       case "88":
	$R(13,[],"InvalidArgument");break;
       case "89":
	$R(13,[],"InvalidArgument");break;
       case "90":
	$R(4,[],"ResourceExhausted");break;
       case "91":
	$R(11,[],"ProtocolError");break;
       case "92":
	$R(16,[],"UnsupportedOperation");break;
       case "93":
	$R(11,[],"ProtocolError");break;
       case "94":
	$R(16,[],"UnsupportedOperation");break;
       case "95":
	$R(16,[],"UnsupportedOperation");break;
       case "96":
	$R(16,[],"UnsupportedOperation");break;
       case "97":
	$R(16,[],"UnsupportedOperation");break;
       case "98":
	$R(3,[],"ResourceBusy");break;
       case "99":
	$R(16,[],"UnsupportedOperation");break;
       case "100":
	$R(18,[],"ResourceVanished");break;
       case "101":
	$R(2,[],"NoSuchThing");break;
       case "102":
	$R(18,[],"ResourceVanished");break;
       case "104":
	$R(18,[],"ResourceVanished");break;
       case "105":
	$R(4,[],"ResourceExhausted");break;
       case "106":
	$R(1,[],"AlreadyExists");break;
       case "107":
	$R(13,[],"InvalidArgument");break;
       case "108":
	$R(6,[],"IllegalOperation");break;
       case "109":
	$R(4,[],"ResourceExhausted");break;
       case "110":
	$R(17,[],"TimeExpired");break;
       case "111":
	$R(2,[],"NoSuchThing");break;
       case "112":
	$R(2,[],"NoSuchThing");break;
       case "113":
	$R(2,[],"NoSuchThing");break;
       case "114":
	$R(1,[],"AlreadyExists");break;
       case "115":
	$R(1,[],"AlreadyExists");break;
       case "116":
	$R(18,[],"ResourceVanished");break;
       case "122":
	$R(7,[],"PermissionDenied");break;
       default:
	$R(12,[],"OtherError");
       }
      },[]);
     },[J],"sat");
     var W=$d(1,[E,U,C,S,T,F],"sat");
     $r([R,W]);
    },[J,E,C,I,F]);
   },[J,M,E,C,I,F]);
  },[X,E,C,F]);
 },[D,E,C,F],"sat");
 $$GHCziIO_unsafeDupablePerformIO.J(G);
},[],"at libraries/base/Foreign/C/Error.hs:507:1");
var $$ForeignziCziError_throwErrno1=$f(2,function(Y,Z){
 var $ff=__hscore_get_errno();
 var a1=[Z,$ff];
 var b1=a1[0],c1=a1[1];
 var e1=$hs_narrow32Intzh(c1);
 var d1=$d(1,[e1],"sat");
 $$ForeignziCziError_errnoToIOError.C([Y,d1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(f1){
  $$GHCziIOziException_ioError.J(f1,b1);
 },[b1]);
},[],"in `base:Foreign.C.Error'");
var $$ForeignziCziError_throwErrnoIfMinus2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:Foreign.C.Error'");
var $$ForeignziCziError_throwErrnoIfMinus1zu=$f(2,function(H1,I1){
 var J1=$t(function(){
  var K1=$t(function(){
   $$GHCziNum_fromInteger.J(I1,$$ForeignziCziError_throwErrnoIfMinus2);
  },[I1],"sat");
  $$GHCziNum_negate.J(I1,K1);
 },[I1],"ds");
 var L1=$t(function(){
  $$GHCziClasses_zeze.J(H1);
 },[H1],"lvl");
 var M1=$f(3,function(N1,O1,P1){
  O1.C([P1],function(Q1){
   var R1=Q1[0],S1=Q1[1];
   L1.C([S1,J1],function(T1){
    switch(T1.g){
    case 1:
     $r([R1,$$GHCziTuple_Z0T]);break;
    case 2:
     var $ff=__hscore_get_errno();
     var U1=[R1,$ff];
     var V1=U1[0],W1=U1[1];
     var Y1=$hs_narrow32Intzh(W1);
     var X1=$d(1,[Y1],"sat");
     $$ForeignziCziError_errnoToIOError.C([N1,X1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(Z1){
      $$GHCziIOziException_ioError.C([Z1,V1],function(a2){
       var b2=a2[0];
       $r([b2,$$GHCziTuple_Z0T]);
      },[]);
     },[V1]);break;
    }
   },[R1,N1]);
  },[J1,L1,N1]);
 },[J1,L1],"sat");
 $A(M1);
},[],"at libraries/base/Foreign/C/Error.hs:410:1");
var $$ForeignziCziError_throwErrnoIfMinus1Retry2=$f(4,function(y2,z2,A2,B2){
 A2.C([B2],function(C2){
  var D2=C2[0],E2=C2[1];
  y2.C([E2],function(F2){
   switch(F2.g){
   case 1:
    $r([D2,E2]);break;
   case 2:
    var $ff=__hscore_get_errno();
    var G2=[D2,$ff];
    var H2=G2[0],I2=G2[1];
    var J2=$hs_narrow32Intzh(I2);
    switch(J2.toString()){
    case "4":
     $$ForeignziCziError_throwErrnoIfMinus1Retry2.J(y2,z2,A2,H2);break;
    default:
     $$ForeignziCziError_throwErrno1.J(z2,H2);
    }break;
   }
  },[A2,E2,y2,D2,z2]);
 },[A2,y2,z2]);
},[],"in `base:Foreign.C.Error'");
var $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2=$f(5,function(n3,o3,p3,q3,r3){
 p3.C([r3],function(s3){
  var t3=s3[0],u3=s3[1];
  n3.C([u3],function(v3){
   switch(v3.g){
   case 1:
    $r([t3,u3]);break;
   case 2:
    var $ff=__hscore_get_errno();
    var w3=[t3,$ff];
    var x3=w3[0],y3=w3[1];
    var z3=$hs_narrow32Intzh(y3);
    switch(z3.toString()){
    case "4":
     $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.J(n3,o3,p3,q3,x3);break;
    case "11":
     q3.C([x3],function(A3){
      var B3=A3[0];
      $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.J(n3,o3,p3,q3,B3);
     },[p3,n3,o3,q3]);break;
    default:
     $$ForeignziCziError_throwErrno1.J(o3,x3);
    }break;
   }
  },[p3,u3,n3,t3,o3,q3]);
 },[p3,n3,o3,q3]);
},[],"in `base:Foreign.C.Error'");
var $$ForeignziCziString_zdwa=$f(2,function(J4,K4){
 var L4=$f(2,function(M4,N4){
  var O4=$hs_readInt8OffAddrzh(J4,N4,M4);
  var P4=O4[0],Q4=O4[1];
  $M(Q4,function(R4){
   switch(R4.toString()){
   case "0":
    var T4=$d(1,[N4],"sat");
    $r([P4,T4]);break;
   default:
    var S4=N4.add(goog.math.Long.fromBits(1,0));
    L4.J(P4,S4);
   }
  },[N4,P4,L4]);
 },[J4],"$sa");
 L4.C([K4,goog.math.Long.fromBits(0,0)],function(U4){
  var V4=U4[0],W4=U4[1];
  $M(W4,function(X4){
   var Y4=X4.v[0];
   var Z4=Y4.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Z4.g){
   case 1:
    var a5=$f(3,function(b5,c5,d5){
     var e5=$hs_readInt8OffAddrzh(J4,c5,d5);
     var f5=e5[0],g5=e5[1];
     var h5=c5.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(h5.g){
     case 1:
      var l5=c5.subtract(goog.math.Long.fromBits(1,0));
      var o5=$hs_int2Wordzh(g5);
      var n5=$hs_narrow8Wordzh(o5);
      var m5=$hs_word2Intzh(n5);
      var j5=$hs_chrzh(m5);
      var i5=$d(1,[j5],"sat");
      var k5=$d(2,[i5,b5],"sat");
      a5.J(k5,l5,f5);break;
     case 2:
      var u5=$hs_int2Wordzh(g5);
      var t5=$hs_narrow8Wordzh(u5);
      var s5=$hs_word2Intzh(t5);
      var q5=$hs_chrzh(s5);
      var p5=$d(1,[q5],"sat");
      var r5=$d(2,[p5,b5],"sat");
      $r([f5,r5]);break;
     }
    },[J4],"$wa4");
    var v5=Y4.subtract(goog.math.Long.fromBits(1,0));
    a5.J($$GHCziTypes_ZMZN,v5,V4);break;
   case 2:
    $r([V4,$$GHCziTypes_ZMZN]);break;
   }
  },[J4,V4]);
 },[J4]);
},[],"in `base:Foreign.C.String'");
var $$ForeignziCziString_withCAString=$f(2,function(S9,T9){
 var U9=$f(2,function(V9,W9){
  $M(S9,function(X9){
   switch(X9.g){
   case 1:
    $M(V9,function(Y9){
     var Z9=Y9.v[0];
     var aa=$hs_writeInt8OffAddrzh(Z9,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),W9);
     T9.J(Y9,aa);
    },[W9,T9]);break;
   case 2:
    var ba=X9.v[0],ca=X9.v[1];
    $M(V9,function(da){
     var ea=da.v[0];
     $M(ba,function(fa){
      var ga=fa.v[0];
      var za=$hs_ordzh(ga);
      var ya=$hs_narrow8Intzh(za);
      var xa=$hs_writeInt8OffAddrzh(ea,goog.math.Long.fromBits(0,0),ya,W9);
      var ha=$f(3,function(ia,ja,ka){
       $M(ia,function(la){
	switch(la.g){
	case 1:
	 var ma=$hs_writeInt8OffAddrzh(ea,ja,goog.math.Long.fromBits(0,0),ka);
	 $r([ma,$$GHCziTuple_Z0T]);break;
	case 2:
	 var na=la.v[0],oa=la.v[1];
	 $M(na,function(pa){
	  var qa=pa.v[0];
	  var ua=$hs_ordzh(qa);
	  var ta=$hs_narrow8Intzh(ua);
	  var sa=$hs_writeInt8OffAddrzh(ea,ja,ta,ka);
	  var ra=ja.add(goog.math.Long.fromBits(1,0));
	  ha.J(oa,ra,sa);
	 },[ea,ja,ka,oa,ha]);break;
	}
       },[ea,ja,ka,ha]);
      },[ea],"$wa4");
      ha.C([ca,goog.math.Long.fromBits(1,0),xa],function(va){
       var wa=va[0];
       T9.J(da,wa);
      },[T9,da]);
     },[W9,T9,ea,ca,da]);
    },[W9,T9,ba,ca]);break;
   }
  },[V9,W9,T9]);
 },[S9,T9],"sat");
 var Aa=$t(function(){
  $$GHCziList_zdwlen.C([S9,goog.math.Long.fromBits(0,0)],function(Ca){
   var Ba=Ca.add(goog.math.Long.fromBits(1,0));
   $R(1,[Ba],"I#");
  },[]);
 },[S9],"sat");
 $$ForeignziMarshalziArray_allocaArray.J($$ForeignziCziTypes_zdfStorableCChar,Aa,U9);
},[],"at libraries/base/Foreign/C/String.hs:367:1");
var $$ForeignziCziTypes_zdfNumCInt=$D(1,function(){
 $r([$$GHCziInt_zdfNumInt32zuzdczp,$$GHCziInt_zdfNumInt32zuzdczt,$$GHCziInt_zdfNumInt32zuzdczm,$$GHCziInt_zdfNumInt32zuzdcnegate,$$GHCziInt_zdfNumInt32zuzdcabs,$$GHCziInt_zdfNumInt32zuzdcsignum,$$GHCziInt_zdfNumInt32zuzdcfromInteger]);
},"at libraries/base/Foreign/C/Types.hs:121:44");
var $$ForeignziCziTypes_zdfEqCInt=$D(1,function(){
 $r([$$GHCziInt_zdfEqInt32zuzdczeze,$$GHCziInt_zdfEqInt32zuzdczsze]);
},"at libraries/base/Foreign/C/Types.hs:121:37");
var $$ForeignziCziTypes_zdfStorableCChar=$D(1,function(){
 $r([$$ForeignziStorable_zdfStorableInt8zuzdcsizzeOf,$$ForeignziStorable_zdfStorableInt8zuzdcalignment,$$GHCziStorable_readInt8OffPtr1,$$GHCziStorable_writeInt8OffPtr1,$$ForeignziStorable_zdfStorableInt28,$$ForeignziStorable_zdfStorableInt27,$$ForeignziStorable_zdfStorableInt26,$$ForeignziStorable_zdfStorableInt25]);
},"at libraries/base/Foreign/C/Types.hs:109:54");
var $$ForeignziMarshalziAlloc_mallocBytes3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("out of memory");
},[],"in `base:Foreign.Marshal.Alloc'");
var $$ForeignziMarshalziAlloc_mallocBytes4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("malloc");
},[],"in `base:Foreign.Marshal.Alloc'");
var $$ForeignziMarshalziAlloc_mallocBytes2=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_ResourceExhausted,$$ForeignziMarshalziAlloc_mallocBytes4,$$ForeignziMarshalziAlloc_mallocBytes3,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:Foreign.Marshal.Alloc'");
var $$ForeignziMarshalziArray_peekArray2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:Foreign.Marshal.Array'");
var $$ForeignziMarshalziArray_newArray2=$f(4,function(h2,i2,j2,k2){
 var l2=$t(function(){
  $$ForeignziStorable_pokeElemOff.J(h2);
 },[h2],"lvl");
 var m2=$f(3,function(n2,o2,p2){
  $M(n2,function(q2){
   switch(q2.g){
   case 1:
    $r([p2,$$GHCziTuple_Z0T]);break;
   case 2:
    var r2=q2.v[0],s2=q2.v[1];
    var t2=$d(1,[o2],"sat");
    l2.C([i2,t2,r2,p2],function(u2){
     var v2=u2[0];
     var w2=o2.add(goog.math.Long.fromBits(1,0));
     m2.J(s2,w2,v2);
    },[l2,i2,o2,s2,m2]);break;
   }
  },[l2,p2,i2,o2,m2]);
 },[l2,i2],"a");
 m2.J(j2,goog.math.Long.fromBits(0,0),k2);
},[],"in `base:Foreign.Marshal.Array'");
var $$ForeignziMarshalziArray_zdwa8=$f(4,function(x2,y2,z2,A2){
 var B2=y2.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(B2.g){
 case 1:
  var C2=$t(function(){
   $$ForeignziStorable_peekElemOff.J(x2,z2,$$ForeignziMarshalziArray_peekArray2);
  },[x2,z2],"lvl");
  var D2=$t(function(){
   $$ForeignziStorable_peekElemOff.J(x2);
  },[x2],"lvl1");
  var E2=$f(3,function(F2,G2,H2){
   $M(F2,function(I2){
    switch(I2.toString()){
    case "0":
     C2.C([H2],function(P2){
      var Q2=P2[0],R2=P2[1];
      var S2=$d(2,[R2,G2],"sat");
      $r([Q2,S2]);
     },[G2]);break;
    default:
     var J2=$d(1,[I2],"sat");
     D2.C([z2,J2,H2],function(K2){
      var L2=K2[0],M2=K2[1];
      var N2=$d(2,[M2,G2],"sat");
      var O2=I2.subtract(goog.math.Long.fromBits(1,0));
      E2.J(O2,N2,L2);
     },[z2,C2,D2,I2,E2,G2]);
    }
   },[z2,C2,D2,H2,E2,G2]);
  },[z2,C2,D2],"$wa9");
  var T2=y2.subtract(goog.math.Long.fromBits(1,0));
  E2.J(T2,$$GHCziTypes_ZMZN,A2);break;
 case 2:
  $r([A2,$$GHCziTypes_ZMZN]);break;
 }
},[],"in `base:Foreign.Marshal.Array'");
var $$ForeignziMarshalziArray_allocaArray=$f(2,function(J3,K3){
 var L3=$t(function(){
  $$ForeignziStorable_alignment.J(J3,$$GHCziErr_undefined);
 },[J3],"ds1");
 var M3=$t(function(){
  $M(K3,function(N3){
   var O3=N3.v[0];
   $$ForeignziStorable_sizzeOf.C([J3,$$GHCziErr_undefined],function(P3){
    var Q3=P3.v[0];
    var R3=O3.multiply(Q3);
    $R(1,[R3],"I#");
   },[O3]);
  },[J3]);
 },[J3,K3],"ds");
 var S3=$f(2,function(T3,U3){
  $M(M3,function(V3){
   var W3=V3.v[0];
   $M(L3,function(X3){
    var Y3=X3.v[0];
    var Z3=$hs_newAlignedPinnedByteArrayzh(W3,Y3,U3);
    var a4=Z3[0],b4=Z3[1];
    var c4=$hs_unsafeFreezzeByteArrayzh(b4,a4);
    var d4=c4[0],e4=c4[1];
    var g4=$hs_byteArrayContentszh(e4);
    var f4=$d(1,[g4],"sat");
    T3.C([f4,d4],function(h4){
     var i4=h4[0],j4=h4[1];
     var k4=$hs_touchzh(e4,i4);
     $r([k4,j4]);
    },[e4]);
   },[W3,U3,T3]);
  },[L3,U3,T3]);
 },[L3,M3],"sat");
 $A(S3);
},[],"at libraries/base/Foreign/Marshal/Array.hs:103:1");
var $$ForeignziMarshalziArray_withArrayLen=$f(3,function(O4,P4,Q4){
 var R4=$t(function(){
  $$GHCziList_zdwlen.C([P4,goog.math.Long.fromBits(0,0)],function(S4){
   $R(1,[S4],"I#");
  },[]);
 },[P4],"len");
 var T4=$f(2,function(U4,V4){
  $$ForeignziMarshalziArray_newArray2.C([O4,U4,P4,V4],function(W4){
   var X4=W4[0];
   Q4.J(R4,U4,X4);
  },[R4,U4,Q4]);
 },[P4,R4,O4,Q4],"sat");
 $$ForeignziMarshalziArray_allocaArray.J(O4,R4,T4);
},[],"at libraries/base/Foreign/Marshal/Array.hs:210:1");
var $$ForeignziStorable_sizzeOf=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:104:4");
var $$ForeignziStorable_alignment=$f(1,function(d){
 $M(d,function(e){
  var f=e.v[1];
  $A(f);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:108:4");
var $$ForeignziStorable_peekElemOff=$f(1,function(g){
 $M(g,function(h){
  var i=h.v[2];
  $A(i);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:113:4");
var $$ForeignziStorable_pokeElemOff=$f(1,function(j){
 $M(j,function(k){
  var l=k.v[3];
  $A(l);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:127:4");
var $$ForeignziStorable_zdfStorableBool8=$D(1,function(){
 $r([goog.math.Long.fromBits(4,0)]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableCharzuzdcalignment=$f(1,function(U){
 $A($$ForeignziStorable_zdfStorableBool8);
},[],"at libraries/base/Foreign/Storable.hs:108:4");
var $$ForeignziStorable_zdfStorableCharzuzdcsizzeOf=$f(1,function(V){
 $A($$ForeignziStorable_zdfStorableBool8);
},[],"at libraries/base/Foreign/Storable.hs:104:4");
var $$ForeignziStorable_zdfStorableChar1=$f(3,function(W,X,Y){
 $M(W,function(Z){
  var a1=Z.v[0];
  $M(X,function(b1){
   var c1=b1.v[0];
   var d1=$hs_writeWideCharOffAddrzh(a1,goog.math.Long.fromBits(0,0),c1,Y);
   $r([d1,$$GHCziTuple_Z0T]);
  },[a1,Y]);
 },[X,Y]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableChar2=$f(2,function(h1,i1){
 $M(h1,function(j1){
  var k1=j1.v[0];
  var l1=$hs_readWideCharOffAddrzh(k1,goog.math.Long.fromBits(0,0),i1);
  var m1=l1[0],n1=l1[1];
  var o1=$d(1,[n1],"sat");
  $r([m1,o1]);
 },[i1]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableChar3=$f(4,function(p1,q1,r1,s1){
 $M(p1,function(t1){
  var u1=t1.v[0];
  $M(q1,function(v1){
   var w1=v1.v[0];
   $M(r1,function(x1){
    var y1=x1.v[0];
    var A1=$hs_plusAddrzh(u1,w1);
    var z1=$hs_writeWideCharOffAddrzh(A1,goog.math.Long.fromBits(0,0),y1,s1);
    $r([z1,$$GHCziTuple_Z0T]);
   },[u1,w1,s1]);
  },[r1,u1,s1]);
 },[q1,r1,s1]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableChar4=$f(3,function(C1,D1,E1){
 $M(C1,function(F1){
  var G1=F1.v[0];
  $M(D1,function(H1){
   var I1=H1.v[0];
   var N1=$hs_plusAddrzh(G1,I1);
   var J1=$hs_readWideCharOffAddrzh(N1,goog.math.Long.fromBits(0,0),E1);
   var K1=J1[0],L1=J1[1];
   var M1=$d(1,[L1],"sat");
   $r([K1,M1]);
  },[G1,E1]);
 },[D1,E1]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableChar=$D(1,function(){
 $r([$$ForeignziStorable_zdfStorableCharzuzdcsizzeOf,$$ForeignziStorable_zdfStorableCharzuzdcalignment,$$GHCziStorable_readWideCharOffPtr1,$$GHCziStorable_writeWideCharOffPtr1,$$ForeignziStorable_zdfStorableChar4,$$ForeignziStorable_zdfStorableChar3,$$ForeignziStorable_zdfStorableChar2,$$ForeignziStorable_zdfStorableChar1]);
},"at libraries/base/Foreign/Storable.hs:197:10");
var $$ForeignziStorable_zdfStorableDouble6=$D(1,function(){
 $r([goog.math.Long.fromBits(8,0)]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt30=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt8zuzdcalignment=$f(1,function(Ia){
 $A($$ForeignziStorable_zdfStorableInt30);
},[],"at libraries/base/Foreign/Storable.hs:108:4");
var $$ForeignziStorable_zdfStorableInt8zuzdcsizzeOf=$f(1,function(Ja){
 $A($$ForeignziStorable_zdfStorableInt30);
},[],"at libraries/base/Foreign/Storable.hs:104:4");
var $$ForeignziStorable_zdfStorableInt25=$f(3,function(Ka,La,Ma){
 $M(Ka,function(Na){
  var Oa=Na.v[0];
  $M(La,function(Pa){
   var Qa=Pa.v[0];
   var Ra=$hs_writeInt8OffAddrzh(Oa,goog.math.Long.fromBits(0,0),Qa,Ma);
   $r([Ra,$$GHCziTuple_Z0T]);
  },[Oa,Ma]);
 },[La,Ma]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt26=$f(2,function(Sa,Ta){
 $M(Sa,function(Ua){
  var Va=Ua.v[0];
  var Wa=$hs_readInt8OffAddrzh(Va,goog.math.Long.fromBits(0,0),Ta);
  var Xa=Wa[0],Ya=Wa[1];
  var Za=$d(1,[Ya],"sat");
  $r([Xa,Za]);
 },[Ta]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt27=$f(4,function(ab,bb,cb,db){
 $M(ab,function(eb){
  var fb=eb.v[0];
  $M(bb,function(gb){
   var hb=gb.v[0];
   $M(cb,function(ib){
    var jb=ib.v[0];
    var lb=$hs_plusAddrzh(fb,hb);
    var kb=$hs_writeInt8OffAddrzh(lb,goog.math.Long.fromBits(0,0),jb,db);
    $r([kb,$$GHCziTuple_Z0T]);
   },[fb,hb,db]);
  },[cb,fb,db]);
 },[bb,cb,db]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt28=$f(3,function(mb,nb,ob){
 $M(mb,function(pb){
  var qb=pb.v[0];
  $M(nb,function(rb){
   var sb=rb.v[0];
   var xb=$hs_plusAddrzh(qb,sb);
   var tb=$hs_readInt8OffAddrzh(xb,goog.math.Long.fromBits(0,0),ob);
   var ub=tb[0],vb=tb[1];
   var wb=$d(1,[vb],"sat");
   $r([ub,wb]);
  },[qb,ob]);
 },[nb,ob]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprintzuzdcalignment=$f(1,function(he){
 $A($$ForeignziStorable_zdfStorableDouble6);
},[],"at libraries/base/Foreign/Storable.hs:108:4");
var $$ForeignziStorable_zdfStorableFingerprint8=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprintzuzdcsizzeOf=$f(1,function(ie){
 $A($$ForeignziStorable_zdfStorableFingerprint8);
},[],"at libraries/base/Foreign/Storable.hs:104:4");
var $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa1=$f(4,function(Ce,De,Ee,Fe){
 $M(Ce,function(Ge){
  switch(Ge.toString()){
  case "0":
   var Oe=$d(1,[De],"sat");
   $r([Ee,Oe]);break;
  default:
   var He=$hs_readWord8OffAddrzh(Fe,goog.math.Long.fromBits(0,0),Ee);
   var Ie=He[0],Je=He[1];
   var Me=$hs_plusAddrzh(Fe,goog.math.Long.fromBits(1,0));
   var Ne=$hs_uncheckedShiftLzh(De,goog.math.Long.fromBits(8,0));
   var Le=Ne.or(Je);
   var Ke=Ge.subtract(goog.math.Long.fromBits(1,0));
   $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa1.J(Ke,Le,Ie,Me);
  }
 },[Fe,Ee,De]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprint2=$f(2,function(Pe,Qe){
 $M(Pe,function(Re){
  var Se=Re.v[0];
  var Te=$hs_readWord8OffAddrzh(Se,goog.math.Long.fromBits(0,0),Qe);
  var Ue=Te[0],Ve=Te[1];
  var lf=$hs_plusAddrzh(Se,goog.math.Long.fromBits(1,0));
  var kf=goog.math.Long.fromBits(0,0).or(Ve);
  $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa1.C([goog.math.Long.fromBits(7,0),kf,Ue,lf],function(We){
   var Xe=We[0],Ye=We[1];
   var jf=$hs_plusAddrzh(Se,goog.math.Long.fromBits(8,0));
   var Ze=$hs_readWord8OffAddrzh(jf,goog.math.Long.fromBits(0,0),Xe);
   var af=Ze[0],bf=Ze[1];
   var hf=$hs_plusAddrzh(jf,goog.math.Long.fromBits(1,0));
   var gf=goog.math.Long.fromBits(0,0).or(bf);
   $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa1.C([goog.math.Long.fromBits(7,0),gf,af,hf],function(cf){
    var df=cf[0],ef=cf[1];
    var ff=$t(function(){
     $$GHCziFingerprintziType_zdWFingerprint.J(Ye,ef);
    },[Ye,ef],"sat");
    $r([df,ff]);
   },[Ye]);
  },[Se]);
 },[Qe]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa=$f(4,function(pg,qg,rg,sg){
 $M(pg,function(tg){
  switch(tg.toString()){
  case "0":
   $r([qg,$$GHCziTuple_Z0T]);break;
  default:
   var yg=$hs_narrow8Wordzh(sg);
   var xg=tg.subtract(goog.math.Long.fromBits(1,0));
   var vg=$hs_writeWord8OffAddrzh(rg,xg,yg,qg);
   var wg=$hs_uncheckedShiftRLzh(sg,goog.math.Long.fromBits(8,0));
   var ug=tg.subtract(goog.math.Long.fromBits(1,0));
   $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa.J(ug,vg,rg,wg);
  }
 },[rg,sg,qg]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdwa=$f(4,function(zg,Ag,Bg,Cg){
 $M(zg,function(Dg){
  var Eg=Dg.v[0];
  var Ng=$hs_narrow8Wordzh(Ag);
  var Lg=$hs_writeWord8OffAddrzh(Eg,goog.math.Long.fromBits(7,0),Ng,Cg);
  var Mg=$hs_uncheckedShiftRLzh(Ag,goog.math.Long.fromBits(8,0));
  $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa.C([goog.math.Long.fromBits(7,0),Lg,Eg,Mg],function(Fg){
   var Gg=Fg[0];
   var Ig=$hs_plusAddrzh(Eg,goog.math.Long.fromBits(8,0));
   var Kg=$hs_narrow8Wordzh(Bg);
   var Hg=$hs_writeWord8OffAddrzh(Ig,goog.math.Long.fromBits(7,0),Kg,Gg);
   var Jg=$hs_uncheckedShiftRLzh(Bg,goog.math.Long.fromBits(8,0));
   $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa.J(goog.math.Long.fromBits(7,0),Hg,Ig,Jg);
  },[Eg,Bg]);
 },[Ag,Cg,Bg]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprint1=$f(3,function(Og,Pg,Qg){
 $M(Pg,function(Rg){
  var Sg=Rg.v[0],Tg=Rg.v[1];
  $$ForeignziStorable_zdwa.J(Og,Sg,Tg,Qg);
 },[Og,Qg]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprint3=$f(4,function(Ug,Vg,Wg,Xg){
 $M(Wg,function(Yg){
  var Zg=Yg.v[0],ah=Yg.v[1];
  var bh=$t(function(){
   $M(Ug,function(ch){
    var dh=ch.v[0];
    $M(Vg,function(eh){
     var fh=eh.v[0];
     var gh=$hs_plusAddrzh(dh,fh);
     $R(1,[gh],"Ptr");
    },[dh]);
   },[Vg]);
  },[Ug,Vg],"sat");
  $$ForeignziStorable_zdwa.J(bh,Zg,ah,Xg);
 },[Ug,Vg,Xg]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprint4=$f(3,function(hh,ih,jh){
 var kh=$t(function(){
  $M(hh,function(lh){
   var mh=lh.v[0];
   $M(ih,function(nh){
    var oh=nh.v[0];
    var ph=$hs_plusAddrzh(mh,oh);
    $R(1,[ph],"Ptr");
   },[mh]);
  },[ih]);
 },[hh,ih],"sat");
 $$ForeignziStorable_zdfStorableFingerprint2.J(kh,jh);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprint5=$f(4,function(qh,rh,sh,th){
 $M(sh,function(uh){
  var vh=uh.v[0],wh=uh.v[1];
  var xh=$t(function(){
   $M(qh,function(yh){
    var zh=yh.v[0];
    $M(rh,function(Ah){
     var Bh=Ah.v[0];
     var Dh=Bh.multiply(goog.math.Long.fromBits(16,0));
     var Ch=$hs_plusAddrzh(zh,Dh);
     $R(1,[Ch],"Ptr");
    },[zh]);
   },[rh]);
  },[qh,rh],"sat");
  $$ForeignziStorable_zdwa.J(xh,vh,wh,th);
 },[qh,rh,th]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprint6=$f(3,function(Eh,Fh,Gh){
 var Hh=$t(function(){
  $M(Eh,function(Ih){
   var Jh=Ih.v[0];
   $M(Fh,function(Kh){
    var Lh=Kh.v[0];
    var Nh=Lh.multiply(goog.math.Long.fromBits(16,0));
    var Mh=$hs_plusAddrzh(Jh,Nh);
    $R(1,[Mh],"Ptr");
   },[Jh]);
  },[Fh]);
 },[Eh,Fh],"sat");
 $$ForeignziStorable_zdfStorableFingerprint2.J(Hh,Gh);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprint=$D(1,function(){
 $r([$$ForeignziStorable_zdfStorableFingerprintzuzdcsizzeOf,$$ForeignziStorable_zdfStorableFingerprintzuzdcalignment,$$ForeignziStorable_zdfStorableFingerprint6,$$ForeignziStorable_zdfStorableFingerprint5,$$ForeignziStorable_zdfStorableFingerprint4,$$ForeignziStorable_zdfStorableFingerprint3,$$ForeignziStorable_zdfStorableFingerprint2,$$ForeignziStorable_zdfStorableFingerprint1]);
},"at libraries/base/Foreign/Storable.hs:255:10");
var $$GHCziBase_id=$f(1,function(I3){
 $A(I3);
},[],"at libraries/base/GHC/Base.lhs:514:1");
var $$GHCziBase_eqString=$f(2,function(X4,Y4){
 $M(X4,function(Z4){
  switch(Z4.g){
  case 1:
   $M(Y4,function(a5){
    switch(a5.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   var b5=Z4.v[0],c5=Z4.v[1];
   $M(Y4,function(d5){
    switch(d5.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var e5=d5.v[0],f5=d5.v[1];
     $M(b5,function(g5){
      var h5=g5.v[0];
      $M(e5,function(i5){
       var j5=i5.v[0];
       var k5=h5==j5?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(k5.g){
       case 1:
	$R(1,[],"False");break;
       case 2:
	$$GHCziBase_eqString.J(c5,f5);break;
       }
      },[h5,c5,f5]);
     },[e5,c5,f5]);break;
    }
   },[b5,c5]);break;
  }
 },[Y4]);
},[],"at libraries/base/GHC/Base.lhs:472:1");
var $$GHCziBase_map=$f(2,function(o5,p5){
 $M(p5,function(q5){
  switch(q5.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var r5=q5.v[0],s5=q5.v[1];
   var t5=$t(function(){
    $$GHCziBase_map.J(o5,s5);
   },[o5,s5],"sat");
   var u5=$t(function(){
    o5.J(r5);
   },[r5,o5],"sat");
   $R(2,[u5,t5],":");break;
  }
 },[o5]);
},[],"at libraries/base/GHC/Base.lhs:367:1");
var $$GHCziBase_zpzp=$f(2,function(E5,F5){
 $M(E5,function(G5){
  switch(G5.g){
  case 1:
   $A(F5);break;
  case 2:
   var H5=G5.v[0],I5=G5.v[1];
   var J5=$t(function(){
    $$GHCziBase_zpzp.J(I5,F5);
   },[F5,I5],"sat");
   $R(2,[H5,J5],":");break;
  }
 },[F5]);
},[],"at libraries/base/GHC/Base.lhs:413:1");
var $$GHCziChar_chr2=$f(1,function(a){
 var b=$t(function(){
  $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(9,0),a,$$GHCziTypes_ZMZN);
 },[a],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Prelude.chr: bad argument: ",b],function(c){
  $$GHCziErr_error.J(c);
 },[]);
},[],"in `base:GHC.Char'");
var $$GHCziConcziSync_zdfShowThreadStatus2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync_sharedCAF1=$f(3,function(Sc,Tc,Uc){
 var Vc=$hs_getMaskingStatezh(Uc);
 var Wc=Vc[0],Xc=Vc[1];
 var Yc=$f(1,function(Zc){
  var ad=[Zc,Sc];
  var bd=ad[0],cd=ad[1];
  var dd=$d(1,[cd],"sat");
  Tc.C([dd,bd],function(ed){
   var fd=ed[0],gd=ed[1];
   $M(gd,function(hd){
    var id=hd.v[0];
    var jd=$hs_eqAddrzh(cd,id);
    switch(jd.g){
    case 1:
     var $ff=hs_free_stable_ptr(cd);
     var kd=[fd,$ff];
     var ld=kd[0];
     $r([ld,id]);break;
    case 2:
     $r([fd,Sc]);break;
    }
   },[Sc,cd,fd]);
  },[Sc,cd]);
 },[Sc,Tc],"a5");
 $M(Xc,function(md){
  switch(md.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[Yc,Wc]);break;
  default:
   Yc.J(Wc);
  }
 },[Yc,Wc]);
},[],"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync_uncaughtExceptionHandler=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziConcziSync$n);
},[],"at libraries/base/GHC/Conc/Sync.lhs:802:1");
var $$GHCziConcziSync$c=$F(3,function(xf,yf,zf){
 $M(xf,function(Af){
  var Bf=Af.v[0];
  $M(yf,function(Cf){
   var Df=Cf.v[0];
   var $ff=errorBelch2(Bf,Df);
   var Ef=[zf,$ff];
   var Ff=Ef[0];
   $r([Ff,$$GHCziTuple_Z0T]);
  },[Bf,zf]);
 },[yf,zf]);
},"a2");
var $$GHCziConcziSync$d=$F(3,function(g,h,i){
 $$GHCziConcziSync$c.J(g,h,i);
},"at libraries/base/GHC/Conc/Sync.lhs:819:4");
var $$GHCziConcziSync$i=$T(function(){
 $$GHCziIOziHandle_hFlush.J($$GHCziIOziHandleziFD_stdout);
},"lvl2");
var $$GHCziConcziSync$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no threads to run:  infinite loop or deadlock?");
},"lvl3");
var $$GHCziConcziSync$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("%s");
},"lvl4");
var $$GHCziConcziSync$l=$F(2,function(Gf,Hf){
 $M(Gf,function(If){
  $r([Hf,$$GHCziTuple_Z0T]);
 },[Hf]);
},"lvl5");
var $$GHCziConcziSync$m=$F(2,function(Jf,Kf){
 $M(Jf,function(Lf){
  var Mf=Lf.v[0],Nf=Lf.v[1];
  $b($hs_catchzh,[$$GHCziConcziSync$i,$$GHCziConcziSync$l,Kf],function(Of){
   var Pf=Of[0];
   $$GHCziIOziEncoding_getForeignEncoding.C([Pf],function(Qf){
    var Rf=Qf[0],Sf=Qf[1];
    var Tf=$f(2,function(Uf,Vf){
     $$GHCziIOziEncoding_getForeignEncoding.C([Vf],function(Wf){
      var Xf=Wf[0],Yf=Wf[1];
      var Zf=$f(2,function(ag,i){
       $$GHCziConcziSync$d.J(Uf,ag,i);
      },[Uf],"sat");
      var bg=$t(function(){
       $$GHCziException_zdp1Exception.C([Mf],function(ig){
	$$DataziTypeable_cast.C([ig,$$GHCziIOziException_zdfTypeableDeadlockzuzdctypeOf,Nf],function(cg){
	 switch(cg.g){
	 case 1:
	  $$DataziTypeable_cast.C([ig,$$GHCziException_zdfExceptionErrorCallzuzdctypeOf,Nf],function(dg){
	   switch(dg.g){
	   case 1:
	    $$GHCziException_zdp2Exception.C([Mf],function(eg){
	     $$GHCziShow_showsPrec.J(eg,$$GHCziConcziSync_zdfShowThreadStatus2,Nf,$$GHCziTypes_ZMZN);
	    },[Nf]);break;
	   case 2:
	    var fg=dg.v[0];
	    $M(fg,function(gg){
	     var hg=gg.v[0];
	     $A(hg);
	    },[]);break;
	   }
	  },[Mf,Nf]);break;
	 case 2:
	  var jg=cg.v[0];
	  $M(jg,function(kg){
	   $A($$GHCziConcziSync$j);
	  },[]);break;
	 }
	},[Mf,ig,Nf]);
       },[Mf,Nf]);
      },[Mf,Nf],"sat");
      $$GHCziForeign_charIsRepresentable3.J(Yf,bg,Zf,Xf);
     },[Mf,Nf,Uf]);
    },[Mf,Nf],"sat");
    $$GHCziForeign_charIsRepresentable3.J(Sf,$$GHCziConcziSync$k,Tf,Rf);
   },[Mf,Nf]);
  },[Mf,Nf]);
 },[Kf]);
},"a3");
var $$GHCziConcziSync$n=$F(1,function(lg){
 var qg=$hs_noDuplicatezh(lg);
 var mg=$hs_newMutVarzh($$GHCziConcziSync$m,qg);
 var ng=mg[0],og=mg[1];
 var pg=$d(1,[og],"sat");
 $r([ng,pg]);
},"lvl6");
var $$GHCziEnum_zdfEnumBool1=$t(function(){
 $$GHCziErr_error.J($$GHCziEnum$x);
},[],"in `base:GHC.Enum'");
var $$GHCziEnum$x=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.Enum.Bool.toEnum: bad argument");
},"lvl23");
var $$GHCziErr_error=$f(1,function(a){
 var b=$d(1,[a],"sat");
 $$GHCziException_throw2.J(b,$$GHCziException_zdfExceptionErrorCallzuzdctoException);
},[],"in `base:GHC.Err'");
var $$GHCziErr_undefined=$t(function(){
 $$GHCziErr_error.J($$GHCziErr$a);
},[],"at libraries/base/GHC/Err.lhs:59:1");
var $$GHCziErr$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.undefined");
},"lvl");
var $$GHCziEventziControl_readControlMessage4=$t(function(){
 $$ForeignziCziError_throwErrnoIfMinus1zu.J($$SystemziPosixziTypes_zdfEqCSsizze,$$SystemziPosixziTypes_zdfNumCSsizze);
},[],"in `base:GHC.Event.Control'");
var $$GHCziEventziControl_sendWakeup3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("sendWakeup");
},[],"in `base:GHC.Event.Control'");
var $$GHCziEventziControl_sendWakeup2=$t(function(){
 $$GHCziEventziControl_readControlMessage4.J($$GHCziEventziControl_sendWakeup3);
},[],"in `base:GHC.Event.Control'");
var $$GHCziEventziIntMap_deletezuzdszdwdelete=$f(2,function(H2,I2){
 $M(I2,function(J2){
  switch(J2.g){
  case 1:
   $r([$$DataziMaybe_Nothing,$$GHCziEventziIntMap_Nil]);break;
  case 2:
   var K2=J2.v[0],L2=J2.v[1];
   var M2=H2.equals(K2)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(M2.g){
   case 1:
    $r([$$DataziMaybe_Nothing,J2]);break;
   case 2:
    var N2=$d(2,[L2],"sat");
    $r([N2,$$GHCziEventziIntMap_Nil]);break;
   }break;
  case 3:
   var O2=J2.v[0],P2=J2.v[1],Q2=J2.v[2],R2=J2.v[3];
   var w3=$hs_int2Wordzh(P2);
   var C3=w3.subtract(goog.math.Long.fromBits(1,0));
   var B3=C3.xor(goog.math.Long.fromBits(4294967295,4294967295));
   var A3=B3.xor(w3);
   var z3=$hs_int2Wordzh(H2);
   var y3=z3.and(A3);
   var x3=$hs_word2Intzh(y3);
   var S2=x3.notEquals(O2)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(S2.g){
   case 1:
    var v3=$hs_int2Wordzh(H2);
    var u3=v3.and(w3);
    var T2=$hs_eqWordzh(u3,goog.math.Long.fromBits(0,0));
    switch(T2.g){
    case 1:
     var U2=$t(function(){
      $$GHCziEventziIntMap_deletezuzdszdwdelete.C([H2,R2],function(V2){
       var W2=V2[0],X2=V2[1];
       $R(1,[W2,X2],"(,)");
      },[]);
     },[H2,R2],"ds");
     var Y2=$t(function(){
      $M(U2,function(Z2){
       var a3=Z2.v[1];
       $M(a3,function(b3){
	switch(b3.g){
	case 1:
	 $A(Q2);break;
	default:
	 $M(Q2,function(c3){
	  switch(c3.g){
	  case 1:
	   $A(b3);break;
	  default:
	   $R(3,[O2,P2,c3,b3],"Bin");
	  }
	 },[P2,O2,b3]);
	}
       },[P2,O2,Q2]);
      },[P2,O2,Q2]);
     },[P2,O2,U2,Q2],"sat");
     var d3=$t(function(){
      $M(U2,function(e3){
       var f3=e3.v[0];
       $A(f3);
      },[]);
     },[U2],"sat");
     $r([d3,Y2]);break;
    case 2:
     var g3=$t(function(){
      $$GHCziEventziIntMap_deletezuzdszdwdelete.C([H2,Q2],function(h3){
       var i3=h3[0],j3=h3[1];
       $R(1,[i3,j3],"(,)");
      },[]);
     },[H2,Q2],"ds");
     var k3=$t(function(){
      $M(R2,function(l3){
       switch(l3.g){
       case 1:
	$M(g3,function(p3){
	 var q3=p3.v[1];
	 $A(q3);
	},[]);break;
       default:
	$M(g3,function(m3){
	 var n3=m3.v[1];
	 $M(n3,function(o3){
	  switch(o3.g){
	  case 1:
	   $A(l3);break;
	  default:
	   $R(3,[O2,P2,o3,l3],"Bin");
	  }
	 },[P2,O2,l3]);
	},[P2,O2,l3]);
       }
      },[P2,O2,g3]);
     },[P2,O2,R2,g3],"sat");
     var r3=$t(function(){
      $M(g3,function(s3){
       var t3=s3.v[0];
       $A(t3);
      },[]);
     },[g3],"sat");
     $r([r3,k3]);break;
    }break;
   case 2:
    $r([$$DataziMaybe_Nothing,J2]);break;
   }break;
  }
 },[H2]);
},[],"at libraries/base/GHC/Event/IntMap.hs:189:1");
var $$GHCziEventziIntMap_zdwdelete=$f(2,function(D3,E3){
 $M(E3,function(F3){
  switch(F3.g){
  case 1:
   $r([$$DataziMaybe_Nothing,$$GHCziEventziIntMap_Nil]);break;
  case 2:
   var G3=F3.v[0],H3=F3.v[1];
   $M(D3,function(I3){
    var J3=I3.v[0];
    var K3=J3.equals(G3)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(K3.g){
    case 1:
     $r([$$DataziMaybe_Nothing,F3]);break;
    case 2:
     var L3=$d(2,[H3],"sat");
     $r([L3,$$GHCziEventziIntMap_Nil]);break;
    }
   },[G3,F3,H3]);break;
  case 3:
   var M3=F3.v[0],N3=F3.v[1],O3=F3.v[2],P3=F3.v[3];
   $M(D3,function(Q3){
    var R3=Q3.v[0];
    var w4=$hs_int2Wordzh(N3);
    var C4=w4.subtract(goog.math.Long.fromBits(1,0));
    var B4=C4.xor(goog.math.Long.fromBits(4294967295,4294967295));
    var A4=B4.xor(w4);
    var z4=$hs_int2Wordzh(R3);
    var y4=z4.and(A4);
    var x4=$hs_word2Intzh(y4);
    var S3=x4.notEquals(M3)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(S3.g){
    case 1:
     var v4=$hs_int2Wordzh(R3);
     var u4=v4.and(w4);
     var T3=$hs_eqWordzh(u4,goog.math.Long.fromBits(0,0));
     switch(T3.g){
     case 1:
      var U3=$t(function(){
       $$GHCziEventziIntMap_deletezuzdszdwdelete.C([R3,P3],function(V3){
	var W3=V3[0],X3=V3[1];
	$R(1,[W3,X3],"(,)");
       },[]);
      },[R3,P3],"ds");
      var Y3=$t(function(){
       $M(U3,function(Z3){
	var a4=Z3.v[1];
	$M(a4,function(b4){
	 switch(b4.g){
	 case 1:
	  $A(O3);break;
	 default:
	  $M(O3,function(c4){
	   switch(c4.g){
	   case 1:
	    $A(b4);break;
	   default:
	    $R(3,[M3,N3,c4,b4],"Bin");
	   }
	  },[N3,M3,b4]);
	 }
	},[N3,M3,O3]);
       },[N3,M3,O3]);
      },[N3,M3,U3,O3],"sat");
      var d4=$t(function(){
       $M(U3,function(e4){
	var f4=e4.v[0];
	$A(f4);
       },[]);
      },[U3],"sat");
      $r([d4,Y3]);break;
     case 2:
      var g4=$t(function(){
       $$GHCziEventziIntMap_deletezuzdszdwdelete.C([R3,O3],function(h4){
	var i4=h4[0],j4=h4[1];
	$R(1,[i4,j4],"(,)");
       },[]);
      },[R3,O3],"ds");
      var k4=$t(function(){
       $M(P3,function(l4){
	switch(l4.g){
	case 1:
	 $M(g4,function(p4){
	  var q4=p4.v[1];
	  $A(q4);
	 },[]);break;
	default:
	 $M(g4,function(m4){
	  var n4=m4.v[1];
	  $M(n4,function(o4){
	   switch(o4.g){
	   case 1:
	    $A(l4);break;
	   default:
	    $R(3,[M3,N3,o4,l4],"Bin");
	   }
	  },[N3,M3,l4]);
	 },[N3,M3,l4]);
	}
       },[N3,M3,g4]);
      },[N3,M3,P3,g4],"sat");
      var r4=$t(function(){
       $M(g4,function(s4){
	var t4=s4.v[0];
	$A(t4);
       },[]);
      },[g4],"sat");
      $r([r4,k4]);break;
     }break;
    case 2:
     $r([$$DataziMaybe_Nothing,F3]);break;
    }
   },[F3,N3,M3,P3,O3]);break;
  }
 },[D3]);
},[],"at libraries/base/GHC/Event/IntMap.hs:189:1");
var $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith=$f(3,function(I4,J4,K4){
 $M(K4,function(L4){
  switch(L4.g){
  case 1:
   $r([$$DataziMaybe_Nothing,$$GHCziEventziIntMap_Nil]);break;
  case 2:
   var M4=L4.v[0],N4=L4.v[1];
   var O4=J4.equals(M4)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(O4.g){
   case 1:
    $r([$$DataziMaybe_Nothing,L4]);break;
   case 2:
    I4.C([N4],function(P4){
     switch(P4.g){
     case 1:
      var Q4=$d(2,[N4],"sat");
      $r([Q4,$$GHCziEventziIntMap_Nil]);break;
     case 2:
      var R4=P4.v[0];
      var S4=$t(function(){
       $M(R4,function(T4){
	$R(2,[M4,T4],"Tip");
       },[M4]);
      },[M4,R4],"sat");
      var U4=$d(2,[N4],"sat");
      $r([U4,S4]);break;
     }
    },[M4,N4]);break;
   }break;
  case 3:
   var V4=L4.v[0],W4=L4.v[1],X4=L4.v[2],Y4=L4.v[3];
   var D5=$hs_int2Wordzh(W4);
   var J5=D5.subtract(goog.math.Long.fromBits(1,0));
   var I5=J5.xor(goog.math.Long.fromBits(4294967295,4294967295));
   var H5=I5.xor(D5);
   var G5=$hs_int2Wordzh(J4);
   var F5=G5.and(H5);
   var E5=$hs_word2Intzh(F5);
   var Z4=E5.notEquals(V4)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Z4.g){
   case 1:
    var C5=$hs_int2Wordzh(J4);
    var B5=C5.and(D5);
    var a5=$hs_eqWordzh(B5,goog.math.Long.fromBits(0,0));
    switch(a5.g){
    case 1:
     var b5=$t(function(){
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([I4,J4,Y4],function(c5){
       var d5=c5[0],e5=c5[1];
       $R(1,[d5,e5],"(,)");
      },[]);
     },[J4,I4,Y4],"ds");
     var f5=$t(function(){
      $M(b5,function(g5){
       var h5=g5.v[1];
       $M(h5,function(i5){
	switch(i5.g){
	case 1:
	 $A(X4);break;
	default:
	 $M(X4,function(j5){
	  switch(j5.g){
	  case 1:
	   $A(i5);break;
	  default:
	   $R(3,[V4,W4,j5,i5],"Bin");
	  }
	 },[W4,V4,i5]);
	}
       },[W4,V4,X4]);
      },[W4,V4,X4]);
     },[W4,V4,b5,X4],"sat");
     var k5=$t(function(){
      $M(b5,function(l5){
       var m5=l5.v[0];
       $A(m5);
      },[]);
     },[b5],"sat");
     $r([k5,f5]);break;
    case 2:
     var n5=$t(function(){
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([I4,J4,X4],function(o5){
       var p5=o5[0],q5=o5[1];
       $R(1,[p5,q5],"(,)");
      },[]);
     },[J4,I4,X4],"ds");
     var r5=$t(function(){
      $M(Y4,function(s5){
       switch(s5.g){
       case 1:
	$M(n5,function(w5){
	 var x5=w5.v[1];
	 $A(x5);
	},[]);break;
       default:
	$M(n5,function(t5){
	 var u5=t5.v[1];
	 $M(u5,function(v5){
	  switch(v5.g){
	  case 1:
	   $A(s5);break;
	  default:
	   $R(3,[V4,W4,v5,s5],"Bin");
	  }
	 },[W4,V4,s5]);
	},[W4,V4,s5]);
       }
      },[W4,V4,n5]);
     },[W4,V4,Y4,n5],"sat");
     var y5=$t(function(){
      $M(n5,function(z5){
       var A5=z5.v[0];
       $A(A5);
      },[]);
     },[n5],"sat");
     $r([y5,r5]);break;
    }break;
   case 2:
    $r([$$DataziMaybe_Nothing,L4]);break;
   }break;
  }
 },[J4,I4]);
},[],"at libraries/base/GHC/Event/IntMap.hs:202:1");
var $$GHCziEventziIntMap_insertWithzuzdszdwinsertWith=$f(4,function(W6,X6,Y6,Z6){
 $M(Z6,function(a7){
  switch(a7.g){
  case 1:
   var b7=$t(function(){
    $M(Y6,function(c7){
     $R(2,[X6,c7],"Tip");
    },[X6]);
   },[Y6,X6],"sat");
   $r([$$DataziMaybe_Nothing,b7]);break;
  case 2:
   var d7=a7.v[0],e7=a7.v[1];
   var f7=X6.equals(d7)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(f7.g){
   case 1:
    var g7=$t(function(){
     var W7=$hs_int2Wordzh(d7);
     var V7=$hs_int2Wordzh(X6);
     var T7=V7.xor(W7);
     var U7=$hs_uncheckedShiftRLzh(T7,goog.math.Long.fromBits(1,0));
     var R7=T7.or(U7);
     var S7=$hs_uncheckedShiftRLzh(R7,goog.math.Long.fromBits(2,0));
     var P7=R7.or(S7);
     var Q7=$hs_uncheckedShiftRLzh(P7,goog.math.Long.fromBits(4,0));
     var N7=P7.or(Q7);
     var O7=$hs_uncheckedShiftRLzh(N7,goog.math.Long.fromBits(8,0));
     var L7=N7.or(O7);
     var M7=$hs_uncheckedShiftRLzh(L7,goog.math.Long.fromBits(16,0));
     var J7=L7.or(M7);
     var K7=$hs_uncheckedShiftRLzh(J7,goog.math.Long.fromBits(32,0));
     var s7=J7.or(K7);
     var I7=$hs_uncheckedShiftRLzh(s7,goog.math.Long.fromBits(1,0));
     var H7=s7.xor(I7);
     var G7=$hs_int2Wordzh(X6);
     var F7=G7.and(H7);
     var h7=$hs_eqWordzh(F7,goog.math.Long.fromBits(0,0));
     switch(h7.g){
     case 1:
      $M(Y6,function(j7){
       var t7=$hs_uncheckedShiftRLzh(s7,goog.math.Long.fromBits(1,0));
       var q7=s7.xor(t7);
       var i7=$d(2,[X6,j7],"sat");
       var l7=$hs_word2Intzh(q7);
       var r7=q7.subtract(goog.math.Long.fromBits(1,0));
       var p7=r7.xor(goog.math.Long.fromBits(4294967295,4294967295));
       var o7=p7.xor(q7);
       var n7=$hs_int2Wordzh(X6);
       var m7=n7.and(o7);
       var k7=$hs_word2Intzh(m7);
       $R(3,[k7,l7,a7,i7],"Bin");
      },[X6,s7,a7]);break;
     case 2:
      $M(Y6,function(v7){
       var E7=$hs_uncheckedShiftRLzh(s7,goog.math.Long.fromBits(1,0));
       var C7=s7.xor(E7);
       var u7=$d(2,[X6,v7],"sat");
       var x7=$hs_word2Intzh(C7);
       var D7=C7.subtract(goog.math.Long.fromBits(1,0));
       var B7=D7.xor(goog.math.Long.fromBits(4294967295,4294967295));
       var A7=B7.xor(C7);
       var z7=$hs_int2Wordzh(X6);
       var y7=z7.and(A7);
       var w7=$hs_word2Intzh(y7);
       $R(3,[w7,x7,u7,a7],"Bin");
      },[X6,s7,a7]);break;
     }
    },[Y6,X6,d7,a7],"sat");
    $r([$$DataziMaybe_Nothing,g7]);break;
   case 2:
    var X7=$t(function(){
     W6.C([Y6,e7],function(Y7){
      $R(2,[X6,Y7],"Tip");
     },[X6]);
    },[Y6,X6,e7,W6],"sat");
    var Z7=$d(2,[e7],"sat");
    $r([Z7,X7]);break;
   }break;
  case 3:
   var a8=a7.v[0],b8=a7.v[1],c8=a7.v[2],d8=a7.v[3];
   var E8=$hs_int2Wordzh(b8);
   var B9=E8.subtract(goog.math.Long.fromBits(1,0));
   var A9=B9.xor(goog.math.Long.fromBits(4294967295,4294967295));
   var z9=A9.xor(E8);
   var y9=$hs_int2Wordzh(X6);
   var x9=y9.and(z9);
   var w9=$hs_word2Intzh(x9);
   var e8=w9.notEquals(a8)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(e8.g){
   case 1:
    var D8=$hs_int2Wordzh(X6);
    var C8=D8.and(E8);
    var f8=$hs_eqWordzh(C8,goog.math.Long.fromBits(0,0));
    switch(f8.g){
    case 1:
     var g8=$t(function(){
      $$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([W6,X6,Y6,d8],function(h8){
       var i8=h8[0],j8=h8[1];
       $R(1,[i8,j8],"(,)");
      },[]);
     },[Y6,X6,W6,d8],"ds");
     var k8=$t(function(){
      $M(g8,function(l8){
       var m8=l8.v[1];
       $M(m8,function(n8){
	$R(3,[a8,b8,c8,n8],"Bin");
       },[b8,a8,c8]);
      },[b8,a8,c8]);
     },[b8,a8,g8,c8],"sat");
     var o8=$t(function(){
      $M(g8,function(p8){
       var q8=p8.v[0];
       $A(q8);
      },[]);
     },[g8],"sat");
     $r([o8,k8]);break;
    case 2:
     var r8=$t(function(){
      $$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([W6,X6,Y6,c8],function(s8){
       var t8=s8[0],u8=s8[1];
       $R(1,[t8,u8],"(,)");
      },[]);
     },[Y6,X6,W6,c8],"ds");
     var v8=$t(function(){
      $M(r8,function(w8){
       var x8=w8.v[1];
       $M(x8,function(y8){
	$R(3,[a8,b8,y8,d8],"Bin");
       },[b8,a8,d8]);
      },[b8,a8,d8]);
     },[b8,a8,d8,r8],"sat");
     var z8=$t(function(){
      $M(r8,function(A8){
       var B8=A8.v[0];
       $A(B8);
      },[]);
     },[r8],"sat");
     $r([z8,v8]);break;
    }break;
   case 2:
    var F8=$t(function(){
     var v9=$hs_int2Wordzh(a8);
     var u9=$hs_int2Wordzh(X6);
     var s9=u9.xor(v9);
     var t9=$hs_uncheckedShiftRLzh(s9,goog.math.Long.fromBits(1,0));
     var q9=s9.or(t9);
     var r9=$hs_uncheckedShiftRLzh(q9,goog.math.Long.fromBits(2,0));
     var o9=q9.or(r9);
     var p9=$hs_uncheckedShiftRLzh(o9,goog.math.Long.fromBits(4,0));
     var m9=o9.or(p9);
     var n9=$hs_uncheckedShiftRLzh(m9,goog.math.Long.fromBits(8,0));
     var k9=m9.or(n9);
     var l9=$hs_uncheckedShiftRLzh(k9,goog.math.Long.fromBits(16,0));
     var i9=k9.or(l9);
     var j9=$hs_uncheckedShiftRLzh(i9,goog.math.Long.fromBits(32,0));
     var R8=i9.or(j9);
     var h9=$hs_uncheckedShiftRLzh(R8,goog.math.Long.fromBits(1,0));
     var g9=R8.xor(h9);
     var f9=$hs_int2Wordzh(X6);
     var e9=f9.and(g9);
     var G8=$hs_eqWordzh(e9,goog.math.Long.fromBits(0,0));
     switch(G8.g){
     case 1:
      $M(Y6,function(I8){
       var S8=$hs_uncheckedShiftRLzh(R8,goog.math.Long.fromBits(1,0));
       var P8=R8.xor(S8);
       var H8=$d(2,[X6,I8],"sat");
       var K8=$hs_word2Intzh(P8);
       var Q8=P8.subtract(goog.math.Long.fromBits(1,0));
       var O8=Q8.xor(goog.math.Long.fromBits(4294967295,4294967295));
       var N8=O8.xor(P8);
       var M8=$hs_int2Wordzh(X6);
       var L8=M8.and(N8);
       var J8=$hs_word2Intzh(L8);
       $R(3,[J8,K8,a7,H8],"Bin");
      },[X6,a7,R8]);break;
     case 2:
      $M(Y6,function(U8){
       var d9=$hs_uncheckedShiftRLzh(R8,goog.math.Long.fromBits(1,0));
       var b9=R8.xor(d9);
       var T8=$d(2,[X6,U8],"sat");
       var W8=$hs_word2Intzh(b9);
       var c9=b9.subtract(goog.math.Long.fromBits(1,0));
       var a9=c9.xor(goog.math.Long.fromBits(4294967295,4294967295));
       var Z8=a9.xor(b9);
       var Y8=$hs_int2Wordzh(X6);
       var X8=Y8.and(Z8);
       var V8=$hs_word2Intzh(X8);
       $R(3,[V8,W8,T8,a7],"Bin");
      },[X6,a7,R8]);break;
     }
    },[Y6,X6,a7,a8],"sat");
    $r([$$DataziMaybe_Nothing,F8]);break;
   }break;
  }
 },[Y6,X6,W6]);
},[],"at libraries/base/GHC/Event/IntMap.hs:167:1");
var $$GHCziEventziIntMap_lookupzuzdslookupN=$f(2,function(sc,tc){
 $M(tc,function(uc){
  switch(uc.g){
  case 1:
   $R(1,[],"Nothing");break;
  case 2:
   var vc=uc.v[0],wc=uc.v[1];
   var yc=$hs_int2Wordzh(vc);
   var xc=$hs_eqWordzh(sc,yc);
   switch(xc.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    $R(2,[wc],"Just");break;
   }break;
  case 3:
   var zc=uc.v[1],Ac=uc.v[2],Bc=uc.v[3];
   var Ec=$hs_int2Wordzh(zc);
   var Dc=sc.and(Ec);
   var Cc=$hs_eqWordzh(Dc,goog.math.Long.fromBits(0,0));
   switch(Cc.g){
   case 1:
    $$GHCziEventziIntMap_lookupzuzdslookupN.J(sc,Bc);break;
   case 2:
    $$GHCziEventziIntMap_lookupzuzdslookupN.J(sc,Ac);break;
   }break;
  }
 },[sc]);
},[],"at libraries/base/GHC/Event/IntMap.hs:126:1");
var $$GHCziEventziIntMap_Nil=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/Event/IntMap.hs:106:17");
var $$GHCziEventziInternal_evtWrite=$t(function(){
 $A($$GHCziEventziInternal$b);
},[],"at libraries/base/GHC/Event/Internal.hs:49:1");
var $$GHCziEventziInternal_evtRead=$t(function(){
 $A($$GHCziEventziInternal$c);
},[],"at libraries/base/GHC/Event/Internal.hs:44:1");
var $$GHCziEventziInternal_zdfShowTimeout2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Event.Internal'");
var $$GHCziEventziInternal_evtNothing=$t(function(){
 $A($$GHCziEventziInternal_zdfShowTimeout2);
},[],"at libraries/base/GHC/Event/Internal.hs:39:1");
var $$GHCziEventziInternal$b=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"a1");
var $$GHCziEventziInternal$c=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"a2");
var $$GHCziEventziManager_fdEvents=$f(1,function(M){
 $M(M,function(N){
  var O=N.v[2];
  $R(1,[O],"I#");
 },[]);
},[],"at libraries/base/GHC/Event/Manager.hs:92:7");
var $$GHCziEventziManager_zdwlgo=$f(2,function(W2,X2){
 $M(X2,function(Y2){
  switch(Y2.g){
  case 1:
   $A(W2);break;
  case 2:
   var Z2=Y2.v[0],a3=Y2.v[1];
   $M(Z2,function(b3){
    var c3=b3.v[0];
    var g3=$hs_int2Wordzh(c3);
    var f3=$hs_int2Wordzh(W2);
    var e3=f3.or(g3);
    var d3=$hs_word2Intzh(e3);
    $$GHCziEventziManager_zdwlgo.J(d3,a3);
   },[W2,a3]);break;
  }
 },[W2]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_eventsOf=$f(1,function(h3){
 $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,h3],function(i3){
  $$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),i3],function(j3){
   $R(1,[j3],"I#");
  },[]);
 },[]);
},[],"at libraries/base/GHC/Event/Manager.hs:309:1");
var $$GHCziEventziManager_zdwa2=$f(8,function(u3,v3,w3,x3,y3,z3,A3,B3){
 var C3=$hs_getMaskingStatezh(B3);
 var D3=C3[0],E3=C3[1];
 var F3=$d(1,[z3],"a3");
 var G3=$f(1,function(H3){
  $M(H3,function(I3){
   var J3=I3.v[1];
   var K3=J3.equals(A3)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(K3.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[A3]);
 },[A3],"lvl5");
 var L3=$f(1,function(M3){
  $$GHCziList_filter.C([G3,M3],function(N3){
   switch(N3.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    $R(2,[N3],"Just");break;
   }
  },[]);
 },[G3],"lvl6");
 var O3=$f(2,function(P3,Q3){
  var R3=$f(2,function(S3,T3){
   var U3=$f(3,function(V3,W3,X3){
    var Y3=W3.notEquals(X3)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Y3.g){
    case 1:
     var Z3=$d(1,[V3,$$GHCziTypes_False],"sat");
     $r([Q3,Z3]);break;
    case 2:
     $M(u3,function(a4){
      var b4=a4.v[0],c4=a4.v[2];
      var d4=$d(1,[X3],"sat");
      var e4=$d(1,[W3],"sat");
      c4.C([b4,F3,e4,d4,Q3],function(f4){
       var g4=f4[0];
       var h4=$d(1,[V3,$$GHCziTypes_True],"sat");
       $r([g4,h4]);
      },[V3]);
     },[F3,Q3,W3,X3,V3]);break;
    }
   },[F3,Q3,u3],"$w$j");
   $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,S3],function(i4){
    $$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),i4],function(k4){
     var o4=$hs_int2Wordzh(z3);
     $$GHCziEventziIntMap_lookupzuzdslookupN.C([o4,T3],function(j4){
      switch(j4.g){
      case 1:
       U3.J(T3,k4,goog.math.Long.fromBits(0,0));break;
      case 2:
       var l4=j4.v[0];
       $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,l4],function(m4){
	$$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),m4],function(n4){
	 U3.J(T3,k4,n4);
	},[F3,Q3,u3,U3,T3,k4]);
       },[F3,Q3,u3,U3,T3,k4]);break;
      }
     },[F3,Q3,u3,U3,T3,k4]);
    },[z3,F3,Q3,u3,U3,T3]);
   },[z3,F3,Q3,u3,U3,T3]);
  },[z3,F3,Q3,u3],"$s$j1");
  var p4=$f(2,function(q4,r4){
   var s4=$f(3,function(t4,u4,v4){
    var w4=u4.notEquals(v4)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(w4.g){
    case 1:
     var x4=$d(1,[t4,$$GHCziTypes_False],"sat");
     $r([Q3,x4]);break;
    case 2:
     $M(u3,function(y4){
      var z4=y4.v[0],A4=y4.v[2];
      var B4=$d(1,[v4],"sat");
      var C4=$d(1,[u4],"sat");
      A4.C([z4,F3,C4,B4,Q3],function(D4){
       var E4=D4[0];
       var F4=$d(1,[t4,$$GHCziTypes_True],"sat");
       $r([E4,F4]);
      },[t4]);
     },[F3,Q3,u4,v4,t4]);break;
    }
   },[F3,Q3,u3],"$w$j");
   $M(q4,function(G4){
    switch(G4.g){
    case 1:
     $M(P3,function(H4){
      s4.J(H4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
     },[F3,Q3,u3,s4]);break;
    case 2:
     var I4=G4.v[0];
     $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,I4],function(J4){
      $$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),J4],function(L4){
       var P4=$hs_int2Wordzh(z3);
       $$GHCziEventziIntMap_lookupzuzdslookupN.C([P4,r4],function(K4){
	switch(K4.g){
	case 1:
	 s4.J(r4,L4,goog.math.Long.fromBits(0,0));break;
	case 2:
	 var M4=K4.v[0];
	 $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,M4],function(N4){
	  $$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),N4],function(O4){
	   s4.J(r4,L4,O4);
	  },[F3,Q3,u3,s4,r4,L4]);
	 },[F3,Q3,u3,s4,r4,L4]);break;
	}
       },[F3,Q3,u3,s4,r4,L4]);
      },[z3,F3,Q3,u3,s4,r4]);
     },[z3,F3,Q3,u3,s4,r4]);break;
    }
   },[z3,F3,P3,Q3,u3,s4,r4]);
  },[z3,F3,P3,Q3,u3],"$j");
  $M(P3,function(Q4){
   switch(Q4.g){
   case 1:
    var R4=$d(1,[$$GHCziEventziIntMap_Nil,$$GHCziTypes_False],"sat");
    $r([Q3,R4]);break;
   case 2:
    var S4=Q4.v[0],T4=Q4.v[1];
    var U4=z3.equals(S4)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(U4.g){
    case 1:
     var V4=$d(1,[Q4,$$GHCziTypes_False],"sat");
     $r([Q3,V4]);break;
    case 2:
     $$GHCziList_filter.C([G3,T4],function(W4){
      switch(W4.g){
      case 1:
       R3.J(T4,$$GHCziEventziIntMap_Nil);break;
      case 2:
       var X4=$d(2,[S4,W4],"sat");
       R3.J(T4,X4);break;
      }
     },[z3,F3,Q3,u3,R3,S4,T4]);break;
    }break;
   case 3:
    var Y4=Q4.v[0],Z4=Q4.v[1],a5=Q4.v[2],b5=Q4.v[3];
    var s5=$hs_int2Wordzh(Z4);
    var z5=s5.subtract(goog.math.Long.fromBits(1,0));
    var y5=z5.xor(goog.math.Long.fromBits(4294967295,4294967295));
    var x5=y5.xor(s5);
    var w5=$hs_int2Wordzh(z3);
    var v5=w5.and(x5);
    var u5=$hs_word2Intzh(v5);
    var c5=u5.notEquals(Y4)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(c5.g){
    case 1:
     var r5=$hs_int2Wordzh(z3);
     var q5=r5.and(s5);
     var d5=$hs_eqWordzh(q5,goog.math.Long.fromBits(0,0));
     switch(d5.g){
     case 1:
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([L3,z3,b5],function(e5){
       var f5=e5[0],g5=e5[1];
       var h5=$t(function(){
	$M(g5,function(i5){
	 switch(i5.g){
	 case 1:
	  $A(a5);break;
	 default:
	  $M(a5,function(j5){
	   switch(j5.g){
	   case 1:
	    $A(i5);break;
	   default:
	    $R(3,[Y4,Z4,j5,i5],"Bin");
	   }
	  },[Z4,Y4,i5]);
	 }
	},[Z4,Y4,a5]);
       },[Z4,Y4,g5,a5],"sat");
       p4.J(f5,h5);
      },[z3,F3,P3,Q3,u3,p4,Z4,Y4,a5]);break;
     case 2:
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([L3,z3,a5],function(k5){
       var l5=k5[0],m5=k5[1];
       var n5=$t(function(){
	$M(b5,function(o5){
	 switch(o5.g){
	 case 1:
	  $A(m5);break;
	 default:
	  $M(m5,function(p5){
	   switch(p5.g){
	   case 1:
	    $A(o5);break;
	   default:
	    $R(3,[Y4,Z4,p5,o5],"Bin");
	   }
	  },[Z4,Y4,o5]);
	 }
	},[Z4,Y4,m5]);
       },[Z4,Y4,b5,m5],"sat");
       p4.J(l5,n5);
      },[z3,F3,P3,Q3,u3,p4,Z4,Y4,b5]);break;
     }break;
    case 2:
     var t5=$d(1,[Q4,$$GHCziTypes_False],"sat");
     $r([Q3,t5]);break;
    }break;
   }
  },[z3,F3,G3,L3,P3,Q3,u3,R3,p4]);
 },[z3,F3,G3,L3,u3],"a4");
 $M(E3,function(A5){
  switch(A5.toString()){
  case "0":
   var N5=$f(1,function(O5){
    $b($hs_takeMVarzh,[v3,O5],function(P5){
     var Q5=P5[0],R5=P5[1];
     var S5=$f(2,function(l1,I){
      $$GHCziEventziManager$a.J(R5,v3,l1,I);
     },[v3,R5],"sat");
     var T5=$f(1,function(I){
      O3.J(R5,I);
     },[O3,R5],"sat");
     var U5=$f(1,function(I){
      $k($hs_unmaskAsyncExceptionszh,[T5,I]);
     },[T5],"sat");
     $b($hs_catchzh,[U5,S5,Q5],function(V5){
      var W5=V5[0],X5=V5[1];
      $M(X5,function(Y5){
       var Z5=Y5.v[0],a6=Y5.v[1];
       $b($hs_putMVarzh,[v3,Z5,W5],function(b6){
	$r([b6,a6]);
       },[a6]);
      },[v3,W5]);
     },[v3]);
    },[O3,v3]);
   },[O3,v3],"sat");
   $k($hs_maskAsyncExceptionszh,[N5,D3]);break;
  default:
   $b($hs_takeMVarzh,[v3,D3],function(B5){
    var C5=B5[0],D5=B5[1];
    var E5=$f(2,function(l1,I){
     $$GHCziEventziManager$a.J(D5,v3,l1,I);
    },[v3,D5],"sat");
    var F5=$f(1,function(I){
     O3.J(D5,I);
    },[O3,D5],"sat");
    $b($hs_catchzh,[F5,E5,C5],function(G5){
     var H5=G5[0],I5=G5[1];
     $M(I5,function(J5){
      var K5=J5.v[0],L5=J5.v[1];
      $b($hs_putMVarzh,[v3,K5,H5],function(M5){
       $r([M5,L5]);
      },[L5]);
     },[v3,H5]);
    },[v3]);
   },[O3,v3]);
  }
 },[O3,v3,D3]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd3=$f(2,function(J6,K6){
 $M(J6,function(L6){
  switch(L6.g){
  case 1:
   $r([K6,$$GHCziTuple_Z0T]);break;
  case 2:
   var M6=L6.v[0],N6=L6.v[1];
   $M(M6,function(O6){
    var P6=O6.v[0],Q6=O6.v[1],R6=O6.v[2],S6=O6.v[3];
    var Z6=$hs_int2Wordzh(R6);
    var Y6=Z6.or(goog.math.Long.fromBits(4,0));
    var U6=$hs_word2Intzh(Y6);
    var T6=$d(1,[U6],"sat");
    var V6=$d(1,[P6,Q6],"sat");
    S6.C([V6,T6,K6],function(W6){
     var X6=W6[0];
     $$GHCziEventziManager_closeFd3.J(N6,X6);
    },[N6]);
   },[K6,N6]);break;
  }
 },[K6]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd4=$f(4,function(a7,b7,c7,d7){
 var e7=$f(1,function(f7){
  $b($hs_putMVarzh,[b7,a7,f7],function(g7){
   $r([g7,$$GHCziTuple_Z0T]);
  },[]);
 },[b7,a7],"sat");
 $$ControlziExceptionziBase_bracket2.J(e7,c7,d7);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd2=$f(2,function(h7,i7){
 $M(h7,function(j7){
  switch(j7.g){
  case 1:
   $r([i7,$$GHCziTuple_Z0T]);break;
  case 2:
   var k7=j7.v[0],l7=j7.v[1];
   $M(k7,function(m7){
    var n7=m7.v[0],o7=m7.v[1],p7=m7.v[2],q7=m7.v[3];
    var x7=$hs_int2Wordzh(p7);
    var w7=x7.or(goog.math.Long.fromBits(4,0));
    var s7=$hs_word2Intzh(w7);
    var r7=$d(1,[s7],"sat");
    var t7=$d(1,[n7,o7],"sat");
    q7.C([t7,r7,i7],function(u7){
     var v7=u7[0];
     $$GHCziEventziManager_closeFd2.J(l7,v7);
    },[l7]);
   },[i7,l7]);break;
  }
 },[i7]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd1=$f(4,function(y7,z7,A7,B7){
 var C7=$hs_getMaskingStatezh(B7);
 var D7=C7[0],E7=C7[1];
 var F7=$t(function(){
  z7.J(A7);
 },[A7,z7],"lvl5");
 var G7=$t(function(){
  $M(A7,function(H7){
   var I7=H7.v[0];
   $R(1,[I7],"I#");
  },[]);
 },[A7],"lvl6");
 var J7=$f(2,function(K7,L7){
  F7.C([L7],function(M7){
   var N7=M7[0];
   $$GHCziEventziIntMap_zdwdelete.C([G7,K7],function(O7){
    var P7=O7[0],Q7=O7[1];
    $M(P7,function(R7){
     switch(R7.g){
     case 1:
      var S7=$d(1,[K7,$$GHCziTypes_ZMZN],"sat");
      $r([N7,S7]);break;
     case 2:
      var T7=R7.v[0];
      $M(Q7,function(U7){
       $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,T7],function(V7){
	$$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),V7],function(W7){
	 switch(W7.toString()){
	 case "0":
	  var t8=$d(1,[U7,T7],"sat");
	  $r([N7,t8]);break;
	 default:
	  var X7=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),N7);
	  var Y7=X7[0],Z7=X7[1];
	  var a8=$hs_unsafeFreezzeByteArrayzh(Z7,Y7);
	  var b8=a8[0],c8=a8[1];
	  var e8=$hs_byteArrayContentszh(c8);
	  var s8=$hs_writeWord64OffAddrzh(e8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),b8);
	  var d8=$t(function(){
	   $M(y7,function(f8){
	    var g8=f8.v[7];
	    var h8=$f(1,function(i8){
	     var n8=$hs_narrow32Intzh(g8);
	     var $ff=ghc_wrapper_d2dl_write(n8,e8,goog.math.Long.fromBits(8,0));
	     var j8=[i8,$ff];
	     var k8=j8[0],l8=j8[1];
	     var m8=$d(1,[l8],"sat");
	     $r([k8,m8]);
	    },[e8,g8],"sat");
	    $A(h8);
	   },[e8]);
	  },[e8,y7],"sat");
	  $$GHCziEventziControl_sendWakeup2.C([d8,s8],function(o8){
	   var p8=o8[0];
	   var r8=$hs_touchzh(c8,p8);
	   var q8=$d(1,[U7,T7],"sat");
	   $r([r8,q8]);
	  },[T7,c8,U7]);
	 }
	},[N7,T7,y7,U7]);
       },[N7,T7,y7,U7]);
      },[N7,T7,y7]);break;
     }
    },[K7,N7,Q7,y7]);
   },[K7,N7,y7]);
  },[G7,K7,y7]);
 },[F7,G7,y7],"a3");
 $M(E7,function(u8){
  switch(u8.toString()){
  case "0":
   var J8=$f(1,function(K8){
    $M(y7,function(L8){
     var M8=L8.v[1];
     $b($hs_takeMVarzh,[M8,K8],function(N8){
      var O8=N8[0],P8=N8[1];
      var Q8=$f(2,function(l1,I){
       $$GHCziEventziManager_closeFd4.J(P8,M8,l1,I);
      },[M8,P8],"sat");
      var R8=$f(1,function(I){
       J7.J(P8,I);
      },[J7,P8],"sat");
      var S8=$f(1,function(I){
       $k($hs_unmaskAsyncExceptionszh,[R8,I]);
      },[R8],"sat");
      $b($hs_catchzh,[S8,Q8,O8],function(T8){
       var U8=T8[0],V8=T8[1];
       $M(V8,function(W8){
	var X8=W8.v[0],Y8=W8.v[1];
	$b($hs_putMVarzh,[M8,X8,U8],function(Z8){
	 $r([Z8,Y8]);
	},[Y8]);
       },[M8,U8]);
      },[M8]);
     },[J7,M8]);
    },[J7,K8]);
   },[y7,J7],"sat");
   $b($hs_maskAsyncExceptionszh,[J8,D7],function(a9){
    var b9=a9[0],c9=a9[1];
    $$GHCziEventziManager_closeFd2.J(c9,b9);
   },[]);break;
  default:
   $M(y7,function(v8){
    var w8=v8.v[1];
    $b($hs_takeMVarzh,[w8,D7],function(x8){
     var y8=x8[0],z8=x8[1];
     var A8=$f(2,function(l1,I){
      $$GHCziEventziManager_closeFd4.J(z8,w8,l1,I);
     },[w8,z8],"sat");
     var B8=$f(1,function(I){
      J7.J(z8,I);
     },[J7,z8],"sat");
     $b($hs_catchzh,[B8,A8,y8],function(C8){
      var D8=C8[0],E8=C8[1];
      $M(E8,function(F8){
       var G8=F8.v[0],H8=F8.v[1];
       $b($hs_putMVarzh,[w8,G8,D8],function(I8){
	$$GHCziEventziManager_closeFd3.J(H8,I8);
       },[H8]);
      },[w8,D8]);
     },[w8]);
    },[J7,w8]);
   },[J7,D7]);
  }
 },[y7,J7,D7]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager$a=$F(4,function(tI,uI,vI,wI){
 var xI=$f(1,function(yI){
  $b($hs_putMVarzh,[uI,tI,yI],function(zI){
   $r([zI,$$GHCziTuple_Z0T]);
  },[]);
 },[uI,tI],"sat");
 $$ControlziExceptionziBase_bracket2.J(xI,vI,wI);
},"lvl");
var $$GHCziEventziThread_eventManager=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziEventziThread$g);
},[],"at libraries/base/GHC/Event/Thread.hs:109:1");
var $$GHCziEventziThread_threadWaitRead1=$f(3,function(c,d,e){
 var f=$hs_getMaskingStatezh(e);
 var g=f[0],h=f[1];
 var i=$f(1,function(j){
  var k=$hs_newMVarzh(j);
  var l=k[0],m=k[1];
  $M($$GHCziEventziThread_eventManager,function(n){
   var o=n.v[0];
   var p=$hs_readMutVarzh(o,l);
   var q=p[0],r=p[1];
   $M(r,function(s){
    switch(s.g){
    case 1:
     $$GHCziIO_failIO.J($$GHCziEventziThread$h,q);break;
    case 2:
     var t=s.v[0];
     $M(t,function(u){
      var v=u.v[0],w=u.v[1],x=u.v[2],y=u.v[3],z=u.v[4],A=u.v[7];
      $M(v,function(B){
       var C=B.v[0],D=B.v[2];
       var E=$f(1,function(F){
	var G=$hs_readTVarzh(z,F);
	var H=G[0],I=G[1];
	$M(I,function(J){
	 var K=J.v[0];
	 var M=K.add(goog.math.Long.fromBits(1,0));
	 var L=$d(1,[M],"u'");
	 var N=$hs_writeTVarzh(z,L,H);
	 $r([N,L]);
	},[z,H]);
       },[z],"sat");
       var O=$hs_atomicallyzh(E,q);
       var P=O[0],Q=O[1];
       var R=$hs_getMaskingStatezh(P);
       var S=R[0],T=R[1];
       var U=$f(3,function(V,W,X){
	var Y=$f(1,function(Z){
	 var a1=$f(2,function(b1,b){
	  $$GHCziEventziThread$l.J(B,w,x,y,z,W,b1,b);
	 },[z,B,w,x,y,W],"sat");
	 var c1=$f(1,function(d1){
	  $k($hs_takeMVarzh,[m,d1]);
	 },[m],"sat");
	 $b($hs_catchzh,[c1,a1,Z],function(e1){
	  var f1=e1[0],g1=e1[1];
	  $M(g1,function(h1){
	   var i1=h1.v[0];
	   var l1=$hs_int2Wordzh(i1);
	   var k1=l1.and(goog.math.Long.fromBits(4,0));
	   var j1=$hs_word2Intzh(k1);
	   switch(j1.toString()){
	   case "0":
	    $r([f1,$$GHCziTuple_Z0T]);break;
	   default:
	    $$GHCziIOziException_ioError.J($$GHCziEventziThread$j,f1);
	   }
	  },[f1]);
	 },[]);
	},[z,m,B,w,x,y,W],"$w$j1");
	$M(X,function(m1){
	 switch(m1.g){
	 case 1:
	  Y.J(V);break;
	 case 2:
	  var n1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),V);
	  var o1=n1[0],p1=n1[1];
	  var q1=$hs_unsafeFreezzeByteArrayzh(p1,o1);
	  var r1=q1[0],s1=q1[1];
	  var u1=$hs_byteArrayContentszh(s1);
	  var E1=$hs_writeWord64OffAddrzh(u1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),r1);
	  var t1=$f(1,function(v1){
	   var A1=$hs_narrow32Intzh(A);
	   var $ff=ghc_wrapper_d2dl_write(A1,u1,goog.math.Long.fromBits(8,0));
	   var w1=[v1,$ff];
	   var x1=w1[0],y1=w1[1];
	   var z1=$d(1,[y1],"sat");
	   $r([x1,z1]);
	  },[u1,A],"sat");
	  $$GHCziEventziControl_sendWakeup2.C([t1,E1],function(B1){
	   var C1=B1[0];
	   var D1=$hs_touchzh(s1,C1);
	   Y.J(D1);
	  },[z,m,B,w,x,y,W,Y,s1]);break;
	 }
	},[z,m,B,w,x,y,W,Y,V,A]);
       },[z,m,B,w,x,y,A],"$w$j");
       var F1=$f(4,function(G1,H1,I1,J1){
	$$GHCziEventziManager_zdwa2.C([B,w,x,y,z,G1,H1,J1],function(K1){
	 var L1=K1[0];
	 $b($hs_putMVarzh,[m,I1,L1],function(M1){
	  $r([M1,$$GHCziTuple_Z0T]);
	 },[]);
	},[m,I1]);
       },[z,m,B,w,x,y],"$wa");
       var N1=$f(3,function(O1,P1,Q1){
	$M(O1,function(R1){
	 var S1=R1.v[0],T1=R1.v[1];
	 F1.J(S1,T1,P1,Q1);
	},[F1,P1,Q1]);
       },[F1],"a7");
       var U1=$f(2,function(V1,W1){
	$b($hs_takeMVarzh,[w,W1],function(X1){
	 var Y1=X1[0],Z1=X1[1];
	 var a2=$f(2,function(b1,b){
	  $$GHCziEventziThread$k.J(Z1,w,b1,b);
	 },[w,Z1],"sat");
	 var b2=$t(function(){
	  var c2=$t(function(){
	   $M(d,function(d2){
	    var e2=d2.v[0];
	    $M(Q,function(f2){
	     var g2=f2.v[0];
	     $M(c,function(h2){
	      var i2=h2.v[0];
	      var j2=$f(1,function(k2){
	       var l2=$T(function(){
		$M(o2,function(m2){
		 var n2=m2.v[0];
		 $A(n2);
		},[]);
	       },"newMap"),o2=$t(function(){
		var p2=$d(1,[e2,g2,i2,N1],"sat");
		var q2=$d(2,[p2,$$GHCziTypes_ZMZN],"sat");
		$$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([$$GHCziBase_zpzp,e2,q2,Z1],function(r2){
		 var s2=r2[0],t2=r2[1];
		 $M(s2,function(u2){
		  switch(u2.g){
		  case 1:
		   $M(t2,function(v2){
		    $R(1,[v2,$$GHCziEventziInternal_evtNothing,h2],"(,,)");
		   },[h2]);break;
		  case 2:
		   var w2=u2.v[0];
		   $M(t2,function(x2){
		    var y2=$t(function(){
		     var B2=$hs_int2Wordzh(e2);
		     $$GHCziEventziIntMap_lookupzuzdslookupN.C([B2,l2],function(z2){
		      switch(z2.g){
		      case 1:
		       $A($$GHCziEventziInternal_evtNothing);break;
		      case 2:
		       var A2=z2.v[0];
		       $$GHCziEventziManager_eventsOf.J(A2);break;
		      }
		     },[]);
		    },[l2,e2],"sat");
		    var C2=$t(function(){
		     $$GHCziEventziManager_eventsOf.J(w2);
		    },[w2],"sat");
		    $R(1,[x2,C2,y2],"(,,)");
		   },[l2,e2,w2]);break;
		  }
		 },[l2,e2,t2,h2]);
		},[l2,e2,h2]);
	       },[N1,l2,e2,g2,i2,Z1,h2],"ds9");
	       $S(l2,[o2]);
	       $M(o2,function(D2){
		var E2=D2.v[1],F2=D2.v[2];
		$M(E2,function(G2){
		 var H2=G2.v[0];
		 $M(F2,function(I2){
		  var J2=I2.v[0];
		  var K2=H2.notEquals(J2)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(K2.g){
		  case 1:
		   var L2=$d(1,[e2,g2],"sat");
		   var M2=$d(1,[L2,$$GHCziTypes_False],"sat");
		   var N2=$d(1,[l2,M2],"sat");
		   $r([k2,N2]);break;
		  case 2:
		   D.C([C,d2,G2,I2,k2],function(O2){
		    var P2=O2[0];
		    var Q2=$d(1,[e2,g2],"sat");
		    var R2=$d(1,[Q2,$$GHCziTypes_True],"sat");
		    var S2=$d(1,[l2,R2],"sat");
		    $r([P2,S2]);
		   },[l2,e2,g2]);break;
		  }
		 },[l2,e2,g2,H2,k2,C,d2,G2,D]);
		},[l2,e2,g2,F2,k2,C,d2,D]);
	       },[l2,e2,g2,k2,C,d2,D]);
	      },[N1,e2,g2,i2,Z1,h2,C,d2,D],"sat");
	      $A(j2);
	     },[N1,e2,g2,Z1,C,d2,D]);
	    },[N1,c,e2,Z1,C,d2,D]);
	   },[N1,Q,c,Z1,C,D]);
	  },[N1,d,Q,c,Z1,C,D],"sat");
	  V1.J(c2);
	 },[N1,d,Q,c,Z1,C,D,V1],"sat");
	 $b($hs_catchzh,[b2,a2,Y1],function(T2){
	  var U2=T2[0],V2=T2[1];
	  $M(V2,function(W2){
	   var X2=W2.v[0],Y2=W2.v[1];
	   $b($hs_putMVarzh,[w,X2,U2],function(Z2){
	    $r([Z2,Y2]);
	   },[Y2]);
	  },[w,U2]);
	 },[w]);
	},[w,N1,d,Q,c,C,D,V1]);
       },[w,N1,d,Q,c,C,D],"a8");
       $M(T,function(a3){
	switch(a3.toString()){
	case "0":
	 var h3=$f(2,function(b1,b){
	  $k($hs_unmaskAsyncExceptionszh,[b1,b]);
	 },[],"sat");
	 var i3=$f(1,function(b){
	  U1.J(h3,b);
	 },[U1,h3],"sat");
	 $b($hs_maskAsyncExceptionszh,[i3,S],function(j3){
	  var k3=j3[0],l3=j3[1];
	  $M(l3,function(m3){
	   var n3=m3.v[0],o3=m3.v[1];
	   U.J(k3,n3,o3);
	  },[z,m,B,w,x,y,A,U,k3]);
	 },[z,m,B,w,x,y,A,U]);break;
	default:
	 U1.C([$$GHCziBase_id,S],function(b3){
	  var c3=b3[0],d3=b3[1];
	  $M(d3,function(e3){
	   var f3=e3.v[0],g3=e3.v[1];
	   U.J(c3,f3,g3);
	  },[z,m,B,w,x,y,A,U,c3]);
	 },[z,m,B,w,x,y,A,U]);
	}
       },[z,m,B,w,x,y,A,U,U1,S]);
      },[q,z,m,w,x,y,A,d,c]);
     },[q,m,d,c]);break;
    }
   },[q,m,d,c]);
  },[l,m,d,c]);
 },[d,c],"a6");
 $M(h,function(p3){
  switch(p3.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[i,g]);break;
  default:
   i.J(g);
  }
 },[i,g]);
},[],"in `base:GHC.Event.Thread'");
var $$GHCziEventziThread_closeFdWith2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at libraries/base/GHC/Event/Thread.hs:85:3-10");
},[],"in `base:GHC.Event.Thread'");
var $$GHCziEventziThread$b=$F(2,function(k6,l6){
 $M(k6,function(m6){
  var n6=m6.v[0];
  var $ff=getOrSetSystemEventThreadEventManagerStore(n6);
  var o6=[l6,$ff];
  var p6=o6[0],q6=o6[1];
  var r6=$d(1,[q6],"sat");
  $r([p6,r6]);
 },[l6]);
},"a");
var $$GHCziEventziThread$c=$F(2,function(b1,b){
 $$GHCziEventziThread$b.J(b1,b);
},"at libraries/base/GHC/Event/Thread.hs:106:5");
var $$GHCziEventziThread$g=$F(1,function(C6){
 var H6=$hs_noDuplicatezh(C6);
 var D6=$hs_newMutVarzh($$DataziMaybe_Nothing,H6);
 var E6=D6[0],F6=D6[1];
 var G6=$d(1,[F6],"sat");
 $$GHCziConcziSync_sharedCAF1.J(G6,$$GHCziEventziThread$c,E6);
},"lvl");
var $$GHCziEventziThread$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at libraries/base/GHC/Event/Thread.hs:91:3-10");
},"a2");
var $$GHCziEventziThread$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("threadWait");
},"lvl1");
var $$GHCziEventziThread$j=$T(function(){
 $$ForeignziCziError_errnoToIOError.J($$GHCziEventziThread$i,$$ForeignziCziError_eBADF1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing);
},"a3");
var $$GHCziEventziThread$k=$F(4,function(I6,J6,K6,L6){
 var M6=$f(1,function(N6){
  $b($hs_putMVarzh,[J6,I6,N6],function(O6){
   $r([O6,$$GHCziTuple_Z0T]);
  },[]);
 },[J6,I6],"sat");
 $$ControlziExceptionziBase_bracket2.J(M6,K6,L6);
},"lvl2");
var $$GHCziEventziThread$l=$F(8,function(P6,Q6,R6,S6,T6,U6,V6,W6){
 var X6=$f(1,function(Y6){
  $M(U6,function(Z6){
   var a7=Z6.v[0],b7=Z6.v[1];
   $$GHCziEventziManager_zdwa2.J(P6,Q6,R6,S6,T6,a7,b7,Y6);
  },[P6,Q6,R6,S6,T6,Y6]);
 },[U6,P6,Q6,R6,S6,T6],"sat");
 $$GHCziIO_finally2.J(X6,V6,W6);
},"lvl3");
var $$GHCziException_zdp1Exception=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:140:31");
var $$GHCziException_zdp2Exception=$f(1,function(d){
 $M(d,function(e){
  var f=e.v[1];
  $A(f);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:140:31");
var $$GHCziException_toException=$f(1,function(g){
 $M(g,function(h){
  var i=h.v[2];
  $A(i);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:141:5");
var $$GHCziException_throw2=$f(2,function(v,w){
 var x=$t(function(){
  w.J(v);
 },[v,w],"sat");
 $r($hs_raisezh(x));
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowErrorCallzuzdcshowsPrec=$f(3,function(X,Y,Z){
 $M(Y,function(a1){
  var b1=a1.v[0];
  $$GHCziBase_zpzp.J(b1,Z);
 },[Z]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowErrorCall1=$f(2,function(c1,d1){
 $M(c1,function(e1){
  var f1=e1.v[0];
  $$GHCziBase_zpzp.J(f1,d1);
 },[d1]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowErrorCallzuzdcshowList=$f(2,function(g1,h1){
 $$GHCziShow_showListzuzu.J($$GHCziException_zdfShowErrorCall1,g1,h1);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowErrorCallzuzdcshow=$f(1,function(i1){
 $M(i1,function(j1){
  var k1=j1.v[0];
  $A(k1);
 },[]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowErrorCall=$D(1,function(){
 $r([$$GHCziException_zdfShowErrorCallzuzdcshowsPrec,$$GHCziException_zdfShowErrorCallzuzdcshow,$$GHCziException_zdfShowErrorCallzuzdcshowList]);
},"at libraries/base/GHC/Exception.lhs:173:10");
var $$GHCziException_zdfExceptionArithException5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("base");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithException4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Exception");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionErrorCall3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ErrorCall");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionErrorCall2=$t(function(){
 $$DataziTypeableziInternal_mkTyCon.J(goog.math.Long.fromBits(1788961336,3296224518),goog.math.Long.fromBits(3513572579,2419091565),$$GHCziException_zdfExceptionArithException5,$$GHCziException_zdfExceptionArithException4,$$GHCziException_zdfExceptionErrorCall3);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionErrorCall1=$t(function(){
 $$DataziTypeableziInternal_mkTyConApp.J($$GHCziException_zdfExceptionErrorCall2,$$GHCziTypes_ZMZN);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionErrorCallzuzdctypeOf=$f(1,function(b3){
 $A($$GHCziException_zdfExceptionErrorCall1);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionErrorCallzuzdcfromException=$f(1,function(c3){
 $M(c3,function(d3){
  var e3=d3.v[0],f3=d3.v[1];
  var g3=$t(function(){
   $$GHCziException_zdp1Exception.J(e3);
  },[e3],"sat");
  $$DataziTypeable_cast.J(g3,$$GHCziException_zdfExceptionErrorCallzuzdctypeOf,f3);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:142:5");
var $$GHCziException_zdfExceptionErrorCall=$D(1,function(){
 $r([$$GHCziException_zdfExceptionErrorCallzuzdctypeOf,$$GHCziException_zdfShowErrorCall,$$GHCziException_zdfExceptionErrorCallzuzdctoException,$$GHCziException_zdfExceptionErrorCallzuzdcfromException]);
},"at libraries/base/GHC/Exception.lhs:171:10");
var $$GHCziException_zdfExceptionErrorCallzuzdctoException=$f(1,function(u){
 $R(1,[$$GHCziException_zdfExceptionErrorCall,u],"SomeException");
},[],"at libraries/base/GHC/Exception.lhs:141:5");
var $$GHCziFingerprint_fingerprintData1=$f(3,function(a,b,c){
 var d=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(88,0),c);
 var e=d[0],f=d[1];
 var g=$hs_unsafeFreezzeByteArrayzh(f,e);
 var h=g[0],i=g[1];
 var G=$hs_byteArrayContentszh(i);
 var $ff=MD5Init(G);
 var j=[h,$ff];
 var k=j[0];
 $M(a,function(l){
  var m=l.v[0];
  $M(b,function(n){
   var o=n.v[0];
   var H=$hs_narrow32Intzh(o);
   var $ff=MD5Update(G,m,H);
   var p=[k,$ff];
   var q=p[0];
   var r=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(16,0),q);
   var s=r[0],t=r[1];
   var u=$hs_unsafeFreezzeByteArrayzh(t,s);
   var v=u[0],w=u[1];
   var A=$hs_byteArrayContentszh(w);
   var $ff=MD5Final(A,G);
   var x=[v,$ff];
   var y=x[0];
   var z=$d(1,[A],"sat");
   $$ForeignziStorable_zdfStorableFingerprint2.C([z,y],function(B){
    var C=B[0],D=B[1];
    var F=$hs_touchzh(w,C);
    var E=$hs_touchzh(i,F);
    $r([E,D]);
   },[i,w]);
  },[i,G,m,k]);
 },[i,G,b,k]);
},[],"in `base:GHC.Fingerprint'");
var $$GHCziFingerprint_fingerprintFingerprints1=$f(2,function(y1,z1){
 var A1=$t(function(){
  $M(y1,function(B1){
   var C1=B1.v[0];
   var D1=C1.multiply(goog.math.Long.fromBits(16,0));
   $R(1,[D1],"I#");
  },[]);
 },[y1],"sat");
 var E1=$t(function(){
  $$GHCziPtr_castPtr.J(z1);
 },[z1],"sat");
 $$GHCziFingerprint_fingerprintData1.J(E1,A1);
},[],"in `base:GHC.Fingerprint'");
var $$GHCziFingerprint_fingerprintFingerprints=$f(1,function(F1){
 var G1=$t(function(){
  $$ForeignziMarshalziArray_withArrayLen.J($$ForeignziStorable_zdfStorableFingerprint,F1,$$GHCziFingerprint_fingerprintFingerprints1);
 },[F1],"sat");
 $$GHCziIO_unsafeDupablePerformIO.J(G1);
},[],"at libraries/base/GHC/Fingerprint.hs:44:1");
var $$GHCziFingerprintziType_zdWFingerprint=$f(2,function(a,b){
 $M(a,function(c){
  var d=c.v[0];
  $M(b,function(e){
   var f=e.v[0];
   $R(1,[d,f],"Fingerprint");
  },[d]);
 },[b]);
},[],"at libraries/base/GHC/Fingerprint/Type.hs:19:20");
var $$GHCziForeign_zdwa1=$f(7,function(f,g,h,i,j,k,l){
 var m=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,l);
 var n=m[0],o=m[1];
 $M(f,function(p){
  var q=p.v[0],r=p.v[1];
  var s=$t(function(){
   $M(j,function(t){
    var u=t.v[0];
    var v=$d(1,[o],"sat");
    var w=$d(1,[v],"sat");
    $R(1,[i,w,$$GHCziIOziBuffer_WriteBuffer,u,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
   },[i,o]);
  },[j,i,o],"sat");
  q.C([h,s,n],function(x){
   var y=x[0],z=x[1];
   $M(z,function(A){
    var B=A.v[0],C=A.v[1],D=A.v[2];
    $M(C,function(E){
     var F=E.v[4],G=E.v[5];
     var H=F.equals(G)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(H.g){
     case 1:
      $M(B,function(I){
       switch(I.g){
       case 2:
	$r([y,$$DataziMaybe_Nothing]);break;
       default:
	r.C([E,D,y],function(J){
	 var K=J[0],L=J[1];
	 $M(L,function(M){
	  var N=M.v[0],O=M.v[1];
	  var P=$f(4,function(Q,R,S,T){
	   q.C([Q,R,S],function(U){
	    var V=U[0],W=U[1];
	    $M(W,function(X){
	     var Y=X.v[0],Z=X.v[1],a1=X.v[2];
	     $M(Z,function(b1){
	      var c1=b1.v[4],d1=b1.v[5];
	      var e1=c1.equals(d1)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(e1.g){
	      case 1:
	       $M(Y,function(f1){
		switch(f1.g){
		case 2:
		 $r([V,$$DataziMaybe_Nothing]);break;
		default:
		 r.C([b1,a1,V],function(g1){
		  var h1=g1[0],i1=g1[1];
		  $M(i1,function(j1){
		   var k1=j1.v[0],l1=j1.v[1];
		   var m1=T.add(goog.math.Long.fromBits(1,0));
		   P.J(k1,l1,h1,m1);
		  },[q,r,h1,T,P,g,k]);
		 },[q,r,T,P,g,k]);
		}
	       },[q,r,b1,a1,V,T,P,g,k]);break;
	      case 2:
	       var n1=$f(1,function(o1){
		$M(a1,function(p1){
		 var q1=p1.v[0],r1=p1.v[1],s1=p1.v[4],t1=p1.v[5];
		 $M(g,function(u1){
		  switch(u1.g){
		  case 1:
		   var w1=t1.subtract(s1);
		   var v1=$d(1,[w1],"sat");
		   var x1=$d(1,[q1],"sat");
		   var y1=$d(1,[x1,v1],"sat");
		   k.C([y1,o1],function(z1){
		    var A1=z1[0],B1=z1[1];
		    var D1=$hs_touchzh(r1,A1);
		    var C1=$d(2,[B1],"sat");
		    $r([D1,C1]);
		   },[r1]);break;
		  case 2:
		   var N1=$hs_writeWord8OffAddrzh(q1,t1,goog.math.Long.fromBits(0,0),o1);
		   var F1=t1.subtract(s1);
		   var E1=$d(1,[F1],"sat");
		   var G1=$d(1,[q1],"sat");
		   var H1=$d(1,[G1,E1],"sat");
		   k.C([H1,N1],function(I1){
		    var J1=I1[0],K1=I1[1];
		    var M1=$hs_touchzh(r1,J1);
		    var L1=$d(2,[K1],"sat");
		    $r([M1,L1]);
		   },[r1]);break;
		  }
		 },[q1,t1,s1,k,o1,r1]);
		},[g,k,o1]);
	       },[a1,g,k],"$wa3");
	       $M(g,function(O1){
		switch(O1.g){
		case 1:
		 n1.J(V);break;
		case 2:
		 $M(a1,function(P1){
		  var Q1=P1.v[3],R1=P1.v[5];
		  var S1=Q1.subtract(R1);
		  switch(S1.toString()){
		  case "0":
		   $r([V,$$DataziMaybe_Nothing]);break;
		  default:
		   n1.J(V);
		  }
		 },[a1,V,g,k,n1]);break;
		}
	       },[a1,V,g,k,n1]);break;
	      }
	     },[q,r,Y,a1,V,T,P,g,k]);
	    },[q,r,V,T,P,g,k]);
	   },[q,r,T,P,g,k]);
	  },[q,r,g,k],"$s$wa");
	  P.J(N,O,K,goog.math.Long.fromBits(1,0));
	 },[q,r,g,k,K]);
	},[q,r,g,k]);
       }
      },[q,E,D,y,r,g,k]);break;
     case 2:
      var T1=$f(1,function(U1){
       $M(D,function(V1){
	var W1=V1.v[0],X1=V1.v[1],Y1=V1.v[4],Z1=V1.v[5];
	$M(g,function(a2){
	 switch(a2.g){
	 case 1:
	  var c2=Z1.subtract(Y1);
	  var b2=$d(1,[c2],"sat");
	  var d2=$d(1,[W1],"sat");
	  var e2=$d(1,[d2,b2],"sat");
	  k.C([e2,U1],function(f2){
	   var g2=f2[0],h2=f2[1];
	   var j2=$hs_touchzh(X1,g2);
	   var i2=$d(2,[h2],"sat");
	   $r([j2,i2]);
	  },[X1]);break;
	 case 2:
	  var t2=$hs_writeWord8OffAddrzh(W1,Z1,goog.math.Long.fromBits(0,0),U1);
	  var l2=Z1.subtract(Y1);
	  var k2=$d(1,[l2],"sat");
	  var m2=$d(1,[W1],"sat");
	  var n2=$d(1,[m2,k2],"sat");
	  k.C([n2,t2],function(o2){
	   var p2=o2[0],q2=o2[1];
	   var s2=$hs_touchzh(X1,p2);
	   var r2=$d(2,[q2],"sat");
	   $r([s2,r2]);
	  },[X1]);break;
	 }
	},[k,W1,Z1,Y1,U1,X1]);
       },[g,k,U1]);
      },[D,g,k],"$wa3");
      $M(g,function(u2){
       switch(u2.g){
       case 1:
	T1.J(y);break;
       case 2:
	$M(D,function(v2){
	 var w2=v2.v[3],x2=v2.v[5];
	 var y2=w2.subtract(x2);
	 switch(y2.toString()){
	 case "0":
	  $r([y,$$DataziMaybe_Nothing]);break;
	 default:
	  T1.J(y);
	 }
	},[D,y,g,k,T1]);break;
       }
      },[D,y,g,k,T1]);break;
     }
    },[q,B,D,y,r,g,k]);
   },[q,y,r,g,k]);
  },[q,r,g,k]);
 },[h,j,i,o,n,g,k]);
},[],"in `base:GHC.Foreign'");
var $$GHCziForeign_zdwa=$f(3,function(z2,A2,B2){
 var C2=$f(2,function(D2,E2){
  var F2=$hs_readInt8OffAddrzh(A2,E2,D2);
  var G2=F2[0],H2=F2[1];
  $M(H2,function(I2){
   switch(I2.toString()){
   case "0":
    var K2=$d(1,[E2],"sat");
    $r([G2,K2]);break;
   default:
    var J2=E2.add(goog.math.Long.fromBits(1,0));
    C2.J(G2,J2);
   }
  },[E2,G2,C2]);
 },[A2],"$sa");
 C2.C([B2,goog.math.Long.fromBits(0,0)],function(L2){
  var M2=L2[0],N2=L2[1];
  $M(z2,function(O2){
   var P2=O2.v[1];
   var Q2=$hs_getMaskingStatezh(M2);
   var R2=Q2[0],S2=Q2[1];
   var T2=$f(2,function(U2,V2){
    var W2=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,V2);
    var X2=W2[0],Y2=W2[1];
    $M(N2,function(Z2){
     var a3=Z2.v[0];
     var b3=$f(1,function(c3){
      var H5=c3.multiply(goog.math.Long.fromBits(4,0));
      var d3=H5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(d3.g){
      case 1:
       var e3=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,X2);
       var f3=e3[0],g3=e3[1];
       var h3=$hs_newPinnedByteArrayzh(H5,f3);
       var i3=h3[0],j3=h3[1];
       var k3=$d(1,[g3],"a2");
       var l3=$d(2,[j3,k3],"a3");
       var n3=$hs_byteArrayContentszh(j3);
       var m3=$d(1,[n3,l3,$$GHCziIOziBuffer_WriteBuffer,c3,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"ipv10");
       $M(U2,function(o3){
	var p3=o3.v[0],q3=o3.v[1];
	var r3=$d(1,[Y2],"sat");
	var s3=$d(1,[r3],"sat");
	var t3=$d(1,[A2,s3,$$GHCziIOziBuffer_ReadBuffer,a3,goog.math.Long.fromBits(0,0),a3],"sat");
	p3.C([t3,m3,i3],function(u3){
	 var v3=u3[0],w3=u3[1];
	 $M(w3,function(x3){
	  var y3=x3.v[0],z3=x3.v[1],A3=x3.v[2];
	  $M(z3,function(B3){
	   var C3=B3.v[4],D3=B3.v[5];
	   var E3=C3.equals(D3)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(E3.g){
	   case 1:
	    var F3=$f(6,function(G3,H3,I3,J3,K3,L3){
	     var M3=$d(1,[H3],"sat");
	     var e5=K3.subtract(J3);
	     $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,e5,M3,L3],function(N3){
	      var O3=N3[0],P3=N3[1];
	      var d5=$hs_touchzh(I3,O3);
	      var Q3=$f(3,function(R3,S3,T3){
	       p3.C([R3,m3,S3],function(U3){
		var V3=U3[0],W3=U3[1];
		$M(W3,function(X3){
		 var Y3=X3.v[0],Z3=X3.v[1],a4=X3.v[2];
		 $M(Z3,function(b4){
		  var c4=b4.v[4],d4=b4.v[5];
		  var e4=c4.equals(d4)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(e4.g){
		  case 1:
		   var g4=T3.add(goog.math.Long.fromBits(1,0));
		   var f4=$f(6,function(h4,i4,j4,k4,l4,m4){
		    var n4=$d(1,[i4],"sat");
		    var w4=l4.subtract(k4);
		    $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,w4,n4,m4],function(o4){
		     var p4=o4[0],q4=o4[1];
		     var v4=$hs_touchzh(j4,p4);
		     Q3.C([h4,v4,g4],function(r4){
		      var s4=r4[0],t4=r4[1];
		      var u4=$t(function(){
		       $$GHCziBase_zpzp.J(q4,t4);
		      },[q4,t4],"sat");
		      $r([s4,u4]);
		     },[q4]);
		    },[g4,j4,h4,Q3]);
		   },[g4,Q3],"$wa4");
		   $M(Y3,function(x4){
		    switch(x4.g){
		    case 2:
		     $M(a4,function(J4){
		      var K4=J4.v[0],L4=J4.v[1],M4=J4.v[4],N4=J4.v[5];
		      f4.J(b4,K4,L4,M4,N4,V3);
		     },[g4,Q3,f4,b4,V3]);break;
		    default:
		     q3.C([b4,a4,V3],function(y4){
		      var z4=y4[0],A4=y4[1];
		      $M(A4,function(B4){
		       var C4=B4.v[0],D4=B4.v[1];
		       $M(D4,function(E4){
			var F4=E4.v[0],G4=E4.v[1],H4=E4.v[4],I4=E4.v[5];
			f4.J(C4,F4,G4,H4,I4,z4);
		       },[g4,Q3,f4,C4,z4]);
		      },[g4,Q3,f4,z4]);
		     },[g4,Q3,f4]);
		    }
		   },[g4,Q3,f4,b4,a4,V3,q3]);break;
		  case 2:
		   $M(a4,function(O4){
		    var P4=O4.v[0],Q4=O4.v[1],R4=O4.v[4],S4=O4.v[5];
		    var T4=$d(1,[P4],"sat");
		    var Y4=S4.subtract(R4);
		    $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,Y4,T4,V3],function(U4){
		     var V4=U4[0],W4=U4[1];
		     var X4=$hs_touchzh(Q4,V4);
		     $r([X4,W4]);
		    },[Q4]);
		   },[V3]);break;
		  }
		 },[T3,Q3,Y3,a4,V3,q3]);
		},[T3,Q3,V3,q3]);
	       },[T3,Q3,q3]);
	      },[m3,p3,q3],"$sa1");
	      Q3.C([G3,d5,goog.math.Long.fromBits(1,0)],function(Z4){
	       var a5=Z4[0],b5=Z4[1];
	       var c5=$t(function(){
		$$GHCziBase_zpzp.J(P3,b5);
	       },[P3,b5],"sat");
	       $r([a5,c5]);
	      },[P3]);
	     },[m3,p3,I3,q3,G3]);
	    },[m3,p3,q3],"$wa3");
	    $M(y3,function(f5){
	     switch(f5.g){
	     case 2:
	      $M(A3,function(r5){
	       var s5=r5.v[0],t5=r5.v[1],u5=r5.v[4],v5=r5.v[5];
	       F3.J(B3,s5,t5,u5,v5,v3);
	      },[m3,p3,q3,F3,B3,v3]);break;
	     default:
	      q3.C([B3,A3,v3],function(g5){
	       var h5=g5[0],i5=g5[1];
	       $M(i5,function(j5){
		var k5=j5.v[0],l5=j5.v[1];
		$M(l5,function(m5){
		 var n5=m5.v[0],o5=m5.v[1],p5=m5.v[4],q5=m5.v[5];
		 F3.J(k5,n5,o5,p5,q5,h5);
		},[m3,p3,q3,F3,k5,h5]);
	       },[m3,p3,q3,F3,h5]);
	      },[m3,p3,q3,F3]);
	     }
	    },[m3,p3,q3,F3,B3,A3,v3]);break;
	   case 2:
	    $M(A3,function(w5){
	     var x5=w5.v[0],y5=w5.v[1],z5=w5.v[4],A5=w5.v[5];
	     var B5=$d(1,[x5],"sat");
	     var G5=A5.subtract(z5);
	     $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,G5,B5,v3],function(C5){
	      var D5=C5[0],E5=C5[1];
	      var F5=$hs_touchzh(y5,D5);
	      $r([F5,E5]);
	     },[y5]);
	    },[v3]);break;
	   }
	  },[m3,p3,q3,y3,A3,v3]);
	 },[m3,p3,q3,v3]);
	},[m3,p3,q3]);
       },[A2,m3,Y2,a3,i3]);break;
      case 2:
       $A($$GHCziForeignPtr_mallocForeignPtrBytes2);break;
      }
     },[A2,X2,U2,Y2,a3],"$j");
     var I5=a3.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(I5.g){
     case 1:
      b3.J(a3);break;
     case 2:
      b3.J(goog.math.Long.fromBits(1,0));break;
     }
    },[A2,X2,U2,Y2]);
   },[A2,N2],"a1");
   $M(S2,function(J5){
    switch(J5.toString()){
    case "0":
     var W5=$f(1,function(X5){
      P2.C([X5],function(Y5){
       var Z5=Y5[0],a6=Y5[1];
       var b6=$f(2,function(c,d){
	$$GHCziForeign$b.J(a6,c,d);
       },[a6],"sat");
       var c6=$f(1,function(d){
	T2.J(a6,d);
       },[T2,a6],"sat");
       var d6=$f(1,function(d){
	$k($hs_unmaskAsyncExceptionszh,[c6,d]);
       },[c6],"sat");
       $b($hs_catchzh,[d6,b6,Z5],function(e6){
	var f6=e6[0],g6=e6[1];
	$M(a6,function(h6){
	 var i6=h6.v[2];
	 i6.C([f6],function(j6){
	  var k6=j6[0];
	  $r([k6,g6]);
	 },[g6]);
	},[f6,g6]);
       },[a6]);
      },[T2]);
     },[T2,P2],"sat");
     $k($hs_maskAsyncExceptionszh,[W5,R2]);break;
    default:
     P2.C([R2],function(K5){
      var L5=K5[0],M5=K5[1];
      var N5=$f(2,function(c,d){
       $$GHCziForeign$b.J(M5,c,d);
      },[M5],"sat");
      var O5=$f(1,function(d){
       T2.J(M5,d);
      },[T2,M5],"sat");
      $b($hs_catchzh,[O5,N5,L5],function(P5){
       var Q5=P5[0],R5=P5[1];
       $M(M5,function(S5){
	var T5=S5.v[2];
	T5.C([Q5],function(U5){
	 var V5=U5[0];
	 $r([V5,R5]);
	},[R5]);
       },[Q5,R5]);
      },[M5]);
     },[T2]);
    }
   },[T2,R2,P2]);
  },[A2,M2,N2]);
 },[A2,z2]);
},[],"in `base:GHC.Foreign'");
var $$GHCziForeign_charIsRepresentable4=$f(3,function(q6,r6,s6){
 var t6=$t(function(){
  $$GHCziIOziEncodingziTypes_close.J(q6);
 },[q6],"sat");
 $$GHCziIO_bracket2.J(t6,r6,s6);
},[],"in `base:GHC.Foreign'");
var $$GHCziForeign_charIsRepresentable3=$f(4,function(u6,v6,w6,x6){
 $M(u6,function(y6){
  var z6=y6.v[2];
  var A6=$hs_getMaskingStatezh(x6);
  var B6=A6[0],C6=A6[1];
  var D6=$f(1,function(E6){
   $M(E6,function(F6){
    var G6=F6.v[0];
    w6.J(G6);
   },[w6]);
  },[w6],"act1");
  var H6=$f(1,function(I6){
   var J6=$f(3,function(K6,L6,M6){
    $M(L6,function(N6){
     var O6=N6.v[0];
     var P6=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,M6);
     var Q6=P6[0],R6=P6[1];
     $M(K6,function(S6){
      var T6=S6.v[0];
      var U6=$d(1,[R6],"a1");
      var V6=$d(1,[U6],"a2");
      var W6=$d(1,[O6,V6,$$GHCziIOziBuffer_ReadBuffer,T6,goog.math.Long.fromBits(0,0),T6],"from");
      var X6=$f(3,function(Y6,Z6,a7){
       var b7=$hs_newPinnedByteArrayzh(Y6,Z6);
       var c7=b7[0],d7=b7[1];
       var e7=$hs_unsafeFreezzeByteArrayzh(d7,c7);
       var f7=e7[0],g7=e7[1];
       var h7=$d(1,[Y6],"sat");
       var u7=$hs_byteArrayContentszh(g7);
       $$GHCziForeign_zdwa1.C([I6,$$GHCziTypes_True,W6,u7,h7,D6,f7],function(i7){
	var j7=i7[0],k7=i7[1];
	$M(k7,function(l7){
	 switch(l7.g){
	 case 1:
	  var r7=a7.add(goog.math.Long.fromBits(1,0));
	  var q7=Y6.multiply(goog.math.Long.fromBits(2,0));
	  X6.C([q7,j7,r7],function(m7){
	   var n7=m7[0],o7=m7[1];
	   var p7=$hs_touchzh(g7,n7);
	   $r([p7,o7]);
	  },[g7]);break;
	 case 2:
	  var s7=l7.v[0];
	  var t7=$hs_touchzh(g7,j7);
	  $r([t7,s7]);break;
	 }
	},[Y6,g7,X6,j7,a7]);
       },[Y6,g7,X6,a7]);
      },[D6,W6,I6],"$s$wa");
      var v7=T6.add(goog.math.Long.fromBits(1,0));
      X6.J(v7,Q6,goog.math.Long.fromBits(0,0));
     },[D6,R6,O6,I6,Q6]);
    },[D6,M6,K6,I6]);
   },[D6,I6],"sat");
   $$ForeignziMarshalziArray_withArrayLen.J($$ForeignziStorable_zdfStorableChar,v6,J6);
  },[D6,v6],"thing");
  $M(C6,function(w7){
   switch(w7.toString()){
   case "0":
    var J7=$f(1,function(K7){
     z6.C([K7],function(L7){
      var M7=L7[0],N7=L7[1];
      var O7=$f(2,function(c,d){
       $$GHCziForeign_charIsRepresentable4.J(N7,c,d);
      },[N7],"sat");
      var P7=$t(function(){
       H6.J(N7);
      },[H6,N7],"sat");
      var Q7=$f(1,function(d){
       $k($hs_unmaskAsyncExceptionszh,[P7,d]);
      },[P7],"sat");
      $b($hs_catchzh,[Q7,O7,M7],function(R7){
       var S7=R7[0],T7=R7[1];
       $M(N7,function(U7){
	var V7=U7.v[2];
	V7.C([S7],function(W7){
	 var X7=W7[0];
	 $r([X7,T7]);
	},[T7]);
       },[S7,T7]);
      },[N7]);
     },[H6]);
    },[H6,z6],"sat");
    $k($hs_maskAsyncExceptionszh,[J7,B6]);break;
   default:
    z6.C([B6],function(x7){
     var y7=x7[0],z7=x7[1];
     var A7=$f(2,function(c,d){
      $$GHCziForeign_charIsRepresentable4.J(z7,c,d);
     },[z7],"sat");
     var B7=$t(function(){
      H6.J(z7);
     },[H6,z7],"sat");
     $b($hs_catchzh,[B7,A7,y7],function(C7){
      var D7=C7[0],E7=C7[1];
      $M(z7,function(F7){
       var G7=F7.v[2];
       G7.C([D7],function(H7){
	var I7=H7[0];
	$r([I7,E7]);
       },[E7]);
      },[D7,E7]);
     },[z7]);
    },[H6]);
   }
  },[H6,B6,z6]);
 },[x6,w6,v6]);
},[],"in `base:GHC.Foreign'");
var $$GHCziForeign$b=$F(3,function(He,Ie,Je){
 var Ke=$t(function(){
  $$GHCziIOziEncodingziTypes_close.J(He);
 },[He],"sat");
 $$GHCziIO_bracket2.J(Ke,Ie,Je);
},"lvl1");
var $$GHCziForeignPtr_addForeignPtrConcFinalizzer4=$t(function(){
 $$GHCziErr_error.J($$GHCziForeignPtr$e);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_mallocForeignPtr3=$D(1,function(){
 $r([$$GHCziForeignPtr_NoFinalizzers,$$GHCziTypes_ZMZN]);
},"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_mallocForeignPtrBytes2=$t(function(){
 $$GHCziErr_error.J($$GHCziForeignPtr$f);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_addForeignPtrConcFinalizzer6=$f(1,function(y6){
 $M(y6,function(z6){
  var A6=z6.v[0],B6=z6.v[1];
  var C6=$d(1,[A6,$$GHCziTypes_ZMZN],"sat");
  $R(1,[C6,B6],"(,)");
 },[]);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_addForeignPtrConcFinalizzer5=$f(2,function(D6,E6){
 $M(D6,function(F6){
  switch(F6.g){
  case 1:
   $r([E6,$$GHCziTuple_Z0T]);break;
  case 2:
   var G6=F6.v[0],H6=F6.v[1];
   G6.C([E6],function(I6){
    var J6=I6[0];
    $$GHCziForeignPtr_addForeignPtrConcFinalizzer5.J(H6,J6);
   },[H6]);break;
  }
 },[E6]);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_zdwa7=$f(3,function(D8,E8,F8){
 var G8=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,F8);
 var H8=G8[0],I8=G8[1];
 var J8=$hs_readMutVarzh(I8,H8);
 var K8=J8[0],L8=J8[1];
 $M(L8,function(M8){
  var N8=M8.v[0],O8=M8.v[1];
  $M(N8,function(P8){
   switch(P8.g){
   case 1:
    var Q8=$d(2,[E8,O8],"sat");
    var R8=$d(1,[$$GHCziForeignPtr_HaskellFinalizzers,Q8],"sat");
    var d9=$hs_writeMutVarzh(I8,R8,K8);
    $M(O8,function(S8){
     switch(S8.g){
     case 1:
      var T8=$f(1,function(U8){
       $b($hs_atomicModifyMutVarzh,[I8,$$GHCziForeignPtr_addForeignPtrConcFinalizzer6,U8],function(V8){
	var W8=V8[0],X8=V8[1];
	$$GHCziForeignPtr_addForeignPtrConcFinalizzer5.J(X8,W8);
       },[]);
      },[I8],"sat");
      var Y8=$hs_mkWeakzh(I8,$$GHCziTuple_Z0T,T8,d9);
      var Z8=Y8[0];
      var a9=$d(1,[I8],"sat");
      var b9=$d(1,[a9],"sat");
      var c9=$d(1,[D8,b9],"sat");
      $r([Z8,c9]);break;
     case 2:
      var e9=$d(1,[I8],"sat");
      var f9=$d(1,[e9],"sat");
      var g9=$d(1,[D8,f9],"sat");
      $r([d9,g9]);break;
     }
    },[I8,d9,D8]);break;
   case 2:
    $A($$GHCziForeignPtr_addForeignPtrConcFinalizzer4);break;
   case 3:
    var h9=$d(2,[E8,O8],"sat");
    var i9=$d(1,[$$GHCziForeignPtr_HaskellFinalizzers,h9],"sat");
    var u9=$hs_writeMutVarzh(I8,i9,K8);
    $M(O8,function(j9){
     switch(j9.g){
     case 1:
      var k9=$f(1,function(l9){
       $b($hs_atomicModifyMutVarzh,[I8,$$GHCziForeignPtr_addForeignPtrConcFinalizzer6,l9],function(m9){
	var n9=m9[0],o9=m9[1];
	$$GHCziForeignPtr_addForeignPtrConcFinalizzer5.J(o9,n9);
       },[]);
      },[I8],"sat");
      var p9=$hs_mkWeakzh(I8,$$GHCziTuple_Z0T,k9,u9);
      var q9=p9[0];
      var r9=$d(1,[I8],"sat");
      var s9=$d(1,[r9],"sat");
      var t9=$d(1,[D8,s9],"sat");
      $r([q9,t9]);break;
     case 2:
      var v9=$d(1,[I8],"sat");
      var w9=$d(1,[v9],"sat");
      var x9=$d(1,[D8,w9],"sat");
      $r([u9,x9]);break;
     }
    },[I8,D8,u9]);break;
   }
  },[I8,E8,O8,K8,D8]);
 },[I8,E8,K8,D8]);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_NoFinalizzers=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/ForeignPtr.hs:93:5");
var $$GHCziForeignPtr_HaskellFinalizzers=$D(3,function(){
 $r([]);
},"at libraries/base/GHC/ForeignPtr.hs:95:5");
var $$GHCziForeignPtr$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.ForeignPtr: attempt to mix Haskell and C finalizers in the same ForeignPtr");
},"lvl4");
var $$GHCziForeignPtr$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("mallocForeignPtrBytes: size must be >= 0");
},"lvl5");
var $$GHCziIO_finally2=$f(3,function(r1,s1,t1){
 r1.C([t1],function(u1){
  var v1=u1[0];
  $r($hs_raiseIOzh(s1,v1));
 },[s1]);
},[],"in `base:GHC.IO'");
var $$GHCziIO_bracket2=$f(3,function(A1,B1,C1){
 A1.C([C1],function(D1){
  var E1=D1[0];
  $r($hs_raiseIOzh(B1,E1));
 },[B1]);
},[],"in `base:GHC.IO'");
var $$GHCziIO_finally1=$f(3,function(m2,n2,o2){
 var p2=$hs_getMaskingStatezh(o2);
 var q2=p2[0],r2=p2[1];
 $M(r2,function(s2){
  switch(s2.toString()){
  case "0":
   var z2=$f(1,function(A2){
    var B2=$f(2,function(c,d){
     $$GHCziIO_finally2.J(n2,c,d);
    },[n2],"sat");
    var C2=$f(1,function(d){
     $k($hs_unmaskAsyncExceptionszh,[m2,d]);
    },[m2],"sat");
    $b($hs_catchzh,[C2,B2,A2],function(D2){
     var E2=D2[0],F2=D2[1];
     n2.C([E2],function(G2){
      var H2=G2[0];
      $r([H2,F2]);
     },[F2]);
    },[n2]);
   },[m2,n2],"sat");
   $k($hs_maskAsyncExceptionszh,[z2,q2]);break;
  default:
   var t2=$f(2,function(c,d){
    $$GHCziIO_finally2.J(n2,c,d);
   },[n2],"sat");
   $b($hs_catchzh,[m2,t2,q2],function(u2){
    var v2=u2[0],w2=u2[1];
    n2.C([v2],function(x2){
     var y2=x2[0];
     $r([y2,w2]);
    },[w2]);
   },[n2]);
  }
 },[m2,n2,q2]);
},[],"in `base:GHC.IO'");
var $$GHCziIO_unsafeDupablePerformIO=$f(1,function(K2){
 K2.C([$$GHCziPrim_realWorldzh],function(L2){
  var M2=L2[1];
  $A(M2);
 },[]);
},[],"at libraries/base/GHC/IO.hs:178:1");
var $$GHCziIO_failIO=$f(2,function(c,d){
 $$GHCziIO$d.J(c,d);
},[],"at libraries/base/GHC/IO.hs:82:1");
var $$GHCziIO$c=$T(function(){
 $$GHCziException_toException.J($$GHCziIOziException_zdfxExceptionIOException);
},"lvl");
var $$GHCziIO$d=$F(2,function(J3,K3){
 var L3=$t(function(){
  var M3=$t(function(){
   $$GHCziIOziException_userError.J(J3);
  },[J3],"sat");
  $$GHCziIO$c.J(M3);
 },[J3],"sat");
 $r($hs_raiseIOzh(L3,K3));
},"a2");
var $$GHCziIOziBuffer_ReadBuffer=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Buffer.hs:195:20");
var $$GHCziIOziBuffer_WriteBuffer=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/IO/Buffer.hs:195:33");
var $$GHCziIOziBufferedIO_newBuffer=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at libraries/base/GHC/IO/BufferedIO.hs:43:3");
var $$GHCziIOziBufferedIO_emptyWriteBuffer=$f(1,function(j){
 $M(j,function(k){
  var l=k.v[3];
  $A(l);
 },[]);
},[],"at libraries/base/GHC/IO/BufferedIO.hs:63:3");
var $$GHCziIOziBufferedIO_flushWriteBuffer=$f(1,function(m){
 $M(m,function(n){
  var o=n.v[4];
  $A(o);
 },[]);
},[],"at libraries/base/GHC/IO/BufferedIO.hs:69:3");
var $$GHCziIOziDevice_isTerminal=$f(1,function(g){
 $M(g,function(h){
  var i=h.v[2];
  $A(i);
 },[]);
},[],"at libraries/base/GHC/IO/Device.hs:82:3");
var $$GHCziIOziDevice_isSeekable=$f(1,function(j){
 $M(j,function(k){
  var l=k.v[3];
  $A(l);
 },[]);
},[],"at libraries/base/GHC/IO/Device.hs:86:3");
var $$GHCziIOziDevice_seek=$f(1,function(m){
 $M(m,function(n){
  var o=n.v[4];
  $A(o);
 },[]);
},[],"at libraries/base/GHC/IO/Device.hs:90:3");
var $$GHCziIOziDevice_RelativeSeek=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/IO/Device.hs:174:5");
var $$GHCziIOziDevice_Directory=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Device.hs:148:5");
var $$GHCziIOziDevice_Stream=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/IO/Device.hs:156:5");
var $$GHCziIOziDevice_RegularFile=$D(3,function(){
 $r([]);
},"at libraries/base/GHC/IO/Device.hs:160:5");
var $$GHCziIOziDevice_RawDevice=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Device.hs:162:5");
var $$GHCziIOziEncoding_mkGlobal=$f(1,function(a){
 var b=$f(1,function(c){
  var n=$hs_noDuplicatezh(c);
  var d=$hs_newMutVarzh(a,n);
  var e=d[0],f=d[1];
  var g=$f(2,function(h,i){
   var j=$hs_writeMutVarzh(f,h,i);
   $r([j,$$GHCziTuple_Z0T]);
  },[f],"sat");
  var k=$f(1,function(l){
   $r($hs_readMutVarzh(f,l));
  },[f],"sat");
  var m=$d(1,[k,g],"sat");
  $r([e,m]);
 },[a],"sat");
 $$GHCziIO_unsafeDupablePerformIO.J(b);
},[],"at libraries/base/GHC/IO/Encoding.hs:130:1");
var $$GHCziIOziEncoding_getFileSystemEncoding5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF8");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding6=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF32LE");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding7=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF32BE");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding8=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF32");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding9=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF16LE");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding10=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF16BE");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding11=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF16");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncodingzugo=$f(1,function(o){
 $M(o,function(p){
  switch(p.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var q=p.v[0],r=p.v[1];
   $M(q,function(s){
    var t=s.v[0];
    $M(t,function(u){
     switch(u.toString()){
     case "-":
      $$GHCziIOziEncoding_getFileSystemEncodingzugo.J(r);break;
     default:
      var v=$t(function(){
       $$GHCziIOziEncoding_getFileSystemEncodingzugo.J(r);
      },[r],"sat");
      var w=$t(function(){
       $$GHCziUnicode_zdwtoUpper.J(u);
      },[u],"sat");
      $R(2,[w,v],":");
     }
    },[r]);
   },[r]);break;
  }
 },[]);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding4=$f(3,function(x,y,z){
 $$GHCziIOziEncoding_getFileSystemEncodingzugo.C([y],function(A){
  $$GHCziBase_eqString.C([A,$$GHCziIOziEncoding_getFileSystemEncoding11],function(B){
   switch(B.g){
   case 1:
    $$GHCziBase_eqString.C([A,$$GHCziIOziEncoding_getFileSystemEncoding10],function(C){
     switch(C.g){
     case 1:
      $$GHCziBase_eqString.C([A,$$GHCziIOziEncoding_getFileSystemEncoding9],function(D){
       switch(D.g){
       case 1:
	$$GHCziBase_eqString.C([A,$$GHCziIOziEncoding_getFileSystemEncoding8],function(E){
	 switch(E.g){
	 case 1:
	  $$GHCziBase_eqString.C([A,$$GHCziIOziEncoding_getFileSystemEncoding7],function(F){
	   switch(F.g){
	   case 1:
	    $$GHCziBase_eqString.C([A,$$GHCziIOziEncoding_getFileSystemEncoding6],function(G){
	     switch(G.g){
	     case 1:
	      $$GHCziBase_eqString.C([A,$$GHCziIOziEncoding_getFileSystemEncoding5],function(H){
	       switch(H.g){
	       case 1:
		$$GHCziIOziEncodingziIconv_iconvEncoding2.J(x,y,z);break;
	       case 2:
		var I=$t(function(){
		 $$GHCziIOziEncodingziUTF8_mkUTF8.J(x);
		},[x],"sat");
		$r([z,I]);break;
	       }
	      },[y,x,z]);break;
	     case 2:
	      var J=$t(function(){
	       $$GHCziIOziEncodingziUTF32_mkUTF32le.J(x);
	      },[x],"sat");
	      $r([z,J]);break;
	     }
	    },[y,A,x,z]);break;
	   case 2:
	    var K=$t(function(){
	     $$GHCziIOziEncodingziUTF32_mkUTF32be.J(x);
	    },[x],"sat");
	    $r([z,K]);break;
	   }
	  },[y,A,x,z]);break;
	 case 2:
	  var L=$t(function(){
	   $$GHCziIOziEncodingziUTF32_mkUTF32.J(x);
	  },[x],"sat");
	  $r([z,L]);break;
	 }
	},[y,A,x,z]);break;
       case 2:
	var M=$t(function(){
	 $$GHCziIOziEncodingziUTF16_mkUTF16le.J(x);
	},[x],"sat");
	$r([z,M]);break;
       }
      },[y,A,x,z]);break;
     case 2:
      var N=$t(function(){
       $$GHCziIOziEncodingziUTF16_mkUTF16be.J(x);
      },[x],"sat");
      $r([z,N]);break;
     }
    },[y,A,x,z]);break;
   case 2:
    var O=$t(function(){
     $$GHCziIOziEncodingziUTF16_mkUTF16.J(x);
    },[x],"sat");
    $r([z,O]);break;
   }
  },[y,A,x,z]);
 },[y,x,z]);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_initLocaleEncoding1=$f(1,function(P){
 var Q=$hs_noDuplicatezh(P);
 $$GHCziIOziEncoding_getFileSystemEncoding4.J($$GHCziIOziEncodingziFailure_ErrorOnCodingFailure,$$GHCziIOziEncodingziIconv_localeEncodingName,Q);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_initLocaleEncoding=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziEncoding_initLocaleEncoding1);
},[],"at libraries/base/GHC/IO/Encoding.hs:147:1");
var $$GHCziIOziEncoding_getLocaleEncoding1=$t(function(){
 $$GHCziIOziEncoding_mkGlobal.J($$GHCziIOziEncoding_initLocaleEncoding);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getForeignEncoding3=$f(1,function(b1){
 var c1=$hs_noDuplicatezh(b1);
 $$GHCziIOziEncoding_getFileSystemEncoding4.J($$GHCziIOziEncodingziFailure_IgnoreCodingFailure,$$GHCziIOziEncodingziIconv_localeEncodingName,c1);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getForeignEncoding2=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziEncoding_getForeignEncoding3);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getForeignEncoding1=$t(function(){
 $$GHCziIOziEncoding_mkGlobal.J($$GHCziIOziEncoding_getForeignEncoding2);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getForeignEncoding=$t(function(){
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(f1){
  var g1=f1.v[0];
  $A(g1);
 },[]);
},[],"at libraries/base/GHC/IO/Encoding.hs:127:2");
var $$GHCziIOziEncodingziFailure_recoverDecode5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("recoverDecode");
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("invalid byte sequence");
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode3=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_InvalidArgument,$$GHCziIOziEncodingziFailure_recoverDecode5,$$GHCziIOziEncodingziFailure_recoverDecode4,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode2=$f(1,function(l){
 var m=$hs_word2Intzh(l);
 $$GHCziChar_chr2.J(m);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_zdwa=$f(9,function(n,o,p,q,r,s,t,u,v){
 $M(u,function(w){
  var x=w.v[0],y=w.v[1],z=w.v[2],A=w.v[3],B=w.v[4],C=w.v[5];
  $M(n,function(D){
   switch(D.g){
   case 1:
    $$GHCziIOziException_ioException.J($$GHCziIOziEncodingziFailure_recoverDecode3,v);break;
   case 2:
    var F=s.add(goog.math.Long.fromBits(1,0));
    var E=$d(1,[o,p,q,r,F,t],"sat");
    var G=$d(1,[E,w],"sat");
    $r([v,G]);break;
   case 3:
    var N=$hs_writeWideCharOffAddrzh(x,C,"\ufffd",v);
    var M=$hs_touchzh(y,N);
    var I=C.add(goog.math.Long.fromBits(1,0));
    var H=$d(1,[x,y,z,A,B,I],"sat");
    var K=s.add(goog.math.Long.fromBits(1,0));
    var J=$d(1,[o,p,q,r,K,t],"sat");
    var L=$d(1,[J,H],"sat");
    $r([M,L]);break;
   case 4:
    var p1=$hs_plusAddrzh(o,s);
    var O=$hs_readWord8OffAddrzh(p1,goog.math.Long.fromBits(0,0),v);
    var P=O[0],Q=O[1];
    var c1=$hs_touchzh(p,P);
    var R=$hs_ltWordzh(Q,goog.math.Long.fromBits(128,0));
    switch(R.g){
    case 1:
     var e1=$hs_word2Intzh(Q);
     var T=goog.math.Long.fromBits(56320,0).add(e1);
     var d1=$hs_int2Wordzh(T);
     var S=$hs_leWordzh(d1,goog.math.Long.fromBits(1114111,0));
     switch(S.g){
     case 1:
      $$GHCziChar_chr2.J(T);break;
     case 2:
      var b1=$hs_chrzh(T);
      var a1=$hs_writeWideCharOffAddrzh(x,C,b1,c1);
      var Z=$hs_touchzh(y,a1);
      var V=C.add(goog.math.Long.fromBits(1,0));
      var U=$d(1,[x,y,z,A,B,V],"sat");
      var X=s.add(goog.math.Long.fromBits(1,0));
      var W=$d(1,[o,p,q,r,X,t],"sat");
      var Y=$d(1,[W,U],"sat");
      $r([Z,Y]);break;
     }break;
    case 2:
     var f1=$hs_leWordzh(Q,goog.math.Long.fromBits(1114111,0));
     switch(f1.g){
     case 1:
      $$GHCziIOziEncodingziFailure_recoverDecode2.J(Q);break;
     case 2:
      var o1=$hs_word2Intzh(Q);
      var n1=$hs_chrzh(o1);
      var m1=$hs_writeWideCharOffAddrzh(x,C,n1,c1);
      var l1=$hs_touchzh(y,m1);
      var h1=C.add(goog.math.Long.fromBits(1,0));
      var g1=$d(1,[x,y,z,A,B,h1],"sat");
      var j1=s.add(goog.math.Long.fromBits(1,0));
      var i1=$d(1,[o,p,q,r,j1,t],"sat");
      var k1=$d(1,[i1,g1],"sat");
      $r([l1,k1]);break;
     }break;
    }break;
   }
  },[v,o,p,q,r,s,t,w,x,C,y,z,A,B]);
 },[n,v,o,p,q,r,s,t]);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode1=$f(4,function(q1,r1,s1,t1){
 $M(r1,function(u1){
  var v1=u1.v[0],w1=u1.v[1],x1=u1.v[2],y1=u1.v[3],z1=u1.v[4],A1=u1.v[5];
  $$GHCziIOziEncodingziFailure_zdwa.J(q1,v1,w1,x1,y1,z1,A1,s1,t1);
 },[q1,s1,t1]);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_zdwa2=$f(1,function(L1){
 $$GHCziIOziException_ioException.J($$GHCziIOziEncodingziFailure$c,L1);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_zdwa1=$f(9,function(M1,N1,O1,P1,Q1,R1,S1,T1,U1){
 $M(T1,function(V1){
  var W1=V1.v[0],X1=V1.v[1],Y1=V1.v[2],Z1=V1.v[3],a2=V1.v[4],b2=V1.v[5];
  var c2=$hs_readWideCharOffAddrzh(N1,R1,U1);
  var d2=c2[0],e2=c2[1];
  var g2=$hs_touchzh(O1,d2);
  $M(M1,function(f2){
   switch(f2.g){
   case 1:
    $$GHCziIOziEncodingziFailure_zdwa2.J(g2);break;
   case 2:
    var i2=R1.add(goog.math.Long.fromBits(1,0));
    var h2=$d(1,[N1,O1,P1,Q1,i2,S1],"sat");
    var j2=$d(1,[h2,V1],"sat");
    $r([g2,j2]);break;
   case 3:
    $M(e2,function(k2){
     switch(k2.toString()){
     case "?":
      var q2=R1.add(goog.math.Long.fromBits(1,0));
      var p2=$d(1,[N1,O1,P1,Q1,q2,S1],"sat");
      var r2=$d(1,[p2,V1],"sat");
      $r([g2,r2]);break;
     default:
      var o2=$hs_writeWideCharOffAddrzh(N1,R1,"?",g2);
      var n2=$hs_touchzh(O1,o2);
      var l2=$d(1,[N1,O1,P1,Q1,R1,S1],"sat");
      var m2=$d(1,[l2,V1],"sat");
      $r([n2,m2]);
     }
    },[N1,R1,O1,g2,P1,Q1,S1,V1]);break;
   case 4:
    var E2=$hs_ordzh(e2);
    var s2=goog.math.Long.fromBits(56448,0).lessThanOrEqual(E2)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(s2.g){
    case 1:
     $$GHCziIOziEncodingziFailure_zdwa2.J(g2);break;
    case 2:
     var t2=E2.lessThan(goog.math.Long.fromBits(56576,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(t2.g){
     case 1:
      $$GHCziIOziEncodingziFailure_zdwa2.J(g2);break;
     case 2:
      var D2=$hs_int2Wordzh(E2);
      var C2=$hs_narrow8Wordzh(D2);
      var B2=$hs_plusAddrzh(W1,b2);
      var A2=$hs_writeWord8OffAddrzh(B2,goog.math.Long.fromBits(0,0),C2,g2);
      var z2=$hs_touchzh(X1,A2);
      var v2=b2.add(goog.math.Long.fromBits(1,0));
      var u2=$d(1,[W1,X1,Y1,Z1,a2,v2],"sat");
      var x2=R1.add(goog.math.Long.fromBits(1,0));
      var w2=$d(1,[N1,O1,P1,Q1,x2,S1],"sat");
      var y2=$d(1,[w2,u2],"sat");
      $r([z2,y2]);break;
     }break;
    }break;
   }
  },[N1,R1,O1,g2,P1,Q1,S1,V1,e2,W1,b2,X1,Y1,Z1,a2]);
 },[N1,R1,U1,O1,M1,P1,Q1,S1]);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverEncode1=$f(4,function(F2,G2,H2,I2){
 $M(G2,function(J2){
  var K2=J2.v[0],L2=J2.v[1],M2=J2.v[2],N2=J2.v[3],O2=J2.v[4],P2=J2.v[5];
  $$GHCziIOziEncodingziFailure_zdwa1.J(F2,K2,L2,M2,N2,O2,P2,H2,I2);
 },[F2,H2,I2]);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_ErrorOnCodingFailure=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Failure.hs:43:5");
var $$GHCziIOziEncodingziFailure_IgnoreCodingFailure=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Failure.hs:45:5");
var $$GHCziIOziEncodingziFailure$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("recoverEncode");
},"lvl");
var $$GHCziIOziEncodingziFailure$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("invalid character");
},"lvl1");
var $$GHCziIOziEncodingziFailure$c=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_InvalidArgument,$$GHCziIOziEncodingziFailure$a,$$GHCziIOziEncodingziFailure$b,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl2");
var $$GHCziIOziEncodingziIconv_hszuiconvzuclose=$f(2,function(a,b){
 $$GHCziIOziEncodingziIconv$a.J(a,b);
},[],"at libraries/base/GHC/IO/Encoding/Iconv.hs:76:5");
var $$GHCziIOziEncodingziIconv_localeEncodingName=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziEncodingziIconv$b);
},[],"at libraries/base/GHC/IO/Encoding/Iconv.hs:62:1");
var $$GHCziIOziEncodingziIconv_iconvEncodingzuloc=$t(function(){
 $$GHCziCString_unpackCStringzh.J("mkTextEncoding");
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding11=$t(function(){
 $$ForeignziCziError_throwErrnoIfMinus1zu.J($$ForeignziCziTypes_zdfEqCInt,$$ForeignziCziTypes_zdfNumCInt);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding10=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Iconv.close");
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding9=$t(function(){
 $$GHCziIOziEncodingziIconv_iconvEncoding11.J($$GHCziIOziEncodingziIconv_iconvEncoding10);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding8=$f(1,function(c){
 $r([c,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding7=$f(2,function(d,e){
 $r([e,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_newIConv=$f(4,function(f,g,h,i){
 var j=$f(1,function(k){
  var l=$f(2,function(m,n){
   $M(m,function(o){
    var p=o.v[0];
    $M(k,function(q){
     var r=q.v[0];
     var $ff=hs_iconv_open(p,r);
     var s=[n,$ff];
     var t=s[0],u=s[1];
     $M(u,function(v){
      switch(v.toString()){
      case "-1":
       var $ff=__hscore_get_errno();
       var H=[t,$ff];
       var I=H[0],J=H[1];
       var L=$hs_narrow32Intzh(J);
       var K=$d(1,[L],"sat");
       $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv_iconvEncodingzuloc,K,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(M){
	$$GHCziIOziException_ioError.C([M,I],function(N){
	 var O=N[0],P=N[1];
	 var Q=$t(function(){
	  var R=$f(1,function(b){
	   $$GHCziIOziEncodingziIconv_hszuiconvzuclose.J(P,b);
	  },[P],"sat");
	  $$GHCziIOziEncodingziIconv_iconvEncoding9.J(R);
	 },[P],"sat");
	 var S=$t(function(){
	  i.J(P);
	 },[i,P],"sat");
	 var T=$d(1,[S,h,Q,$$GHCziIOziEncodingziIconv_iconvEncoding8,$$GHCziIOziEncodingziIconv_iconvEncoding7],"sat");
	 $r([O,T]);
	},[i,h]);
       },[i,h,I]);break;
      default:
       var w=$t(function(){
	var x=$f(1,function(y){
	 var $ff=hs_iconv_close(v);
	 var z=[y,$ff];
	 var A=z[0],B=z[1];
	 var D=$hs_narrow32Intzh(B);
	 var C=$d(1,[D],"sat");
	 $r([A,C]);
	},[v],"sat");
	$$GHCziIOziEncodingziIconv_iconvEncoding9.J(x);
       },[v],"sat");
       var E=$t(function(){
	var F=$d(1,[v],"sat");
	i.J(F);
       },[v,i],"sat");
       var G=$d(1,[E,h,w,$$GHCziIOziEncodingziIconv_iconvEncoding8,$$GHCziIOziEncodingziIconv_iconvEncoding7],"sat");
       $r([t,G]);
      }
     },[t,i,h]);
    },[p,n,i,h]);
   },[k,n,i,h]);
  },[k,i,h],"sat");
  $$ForeignziCziString_withCAString.J(g,l);
 },[g,i,h],"sat");
 $$ForeignziCziString_withCAString.J(f,j);
},[],"at libraries/base/GHC/IO/Encoding/Iconv.hs:116:1");
var $$GHCziIOziEncodingziIconv_haskellChar=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF-32LE");
},[],"at libraries/base/GHC/IO/Encoding/Iconv.hs:90:1");
var $$GHCziIOziEncodingziIconv_charzushift=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"at libraries/base/GHC/IO/Encoding/Iconv.hs:95:1");
var $$GHCziIOziEncodingziIconv_iconvEncoding4=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding5=$f(6,function(U,V,W,X,Y,Z){
 $M(V,function(a1){
  var b1=a1.v[0],c1=a1.v[1],d1=a1.v[2],e1=a1.v[3],f1=a1.v[4],g1=a1.v[5];
  $M(X,function(h1){
   var i1=h1.v[0],j1=h1.v[1],k1=h1.v[2],l1=h1.v[3],m1=h1.v[4],n1=h1.v[5];
   var o1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),Z);
   var p1=o1[0],q1=o1[1];
   var r1=$hs_unsafeFreezzeByteArrayzh(q1,p1);
   var s1=r1[0],t1=r1[1];
   $M(W,function(u1){
    var v1=u1.v[0];
    var w1=$f(1,function(x1){
     var H1=$hs_byteArrayContentszh(t1);
     var h4=$hs_writeAddrOffAddrzh(H1,goog.math.Long.fromBits(0,0),x1,s1);
     var y1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),h4);
     var z1=y1[0],A1=y1[1];
     var B1=$hs_unsafeFreezzeByteArrayzh(A1,z1);
     var C1=B1[0],D1=B1[1];
     $M(Y,function(E1){
      var F1=E1.v[0];
      var G1=$f(1,function(I1){
       var Q1=$hs_byteArrayContentszh(D1);
       var c4=$hs_writeAddrOffAddrzh(Q1,goog.math.Long.fromBits(0,0),I1,C1);
       var J1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),c4);
       var K1=J1[0],L1=J1[1];
       var M1=$hs_unsafeFreezzeByteArrayzh(L1,K1);
       var N1=M1[0],O1=M1[1];
       var P1=$f(1,function(R1){
	var Z1=$hs_byteArrayContentszh(O1);
	var X3=$hs_writeWord64OffAddrzh(Z1,goog.math.Long.fromBits(0,0),R1,N1);
	var S1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),X3);
	var T1=S1[0],U1=S1[1];
	var V1=$hs_unsafeFreezzeByteArrayzh(U1,T1);
	var W1=V1[0],X1=V1[1];
	var Y1=$f(1,function(a2){
	 var R3=$hs_byteArrayContentszh(X1);
	 var S3=$hs_writeWord64OffAddrzh(R3,goog.math.Long.fromBits(0,0),a2,W1);
	 $M(U,function(b2){
	  var c2=b2.v[0];
	  var $ff=hs_iconv(c2,H1,Z1,Q1,R3);
	  var d2=[S3,$ff];
	  var e2=d2[0],f2=d2[1];
	  var g2=$hs_readWord64OffAddrzh(Z1,goog.math.Long.fromBits(0,0),e2);
	  var h2=g2[0],i2=g2[1];
	  var j2=$hs_readWord64OffAddrzh(R3,goog.math.Long.fromBits(0,0),h2);
	  var k2=j2[0],l2=j2[1];
	  var m2=$t(function(){
	   var n2=F1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(n2.g){
	   case 1:
	    var p2=$hs_word2Intzh(l2);
	    var o2=$hs_uncheckedIShiftRAzh(p2,F1);
	    $R(1,[o2],"I#");break;
	   case 2:
	    var r2=$hs_word2Intzh(l2);
	    var q2=r2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(q2.g){
	    case 1:
	     $A($$GHCziIOziEncodingziIconv_iconvEncoding4);break;
	    case 2:
	     $A($$GHCziIOziEncodingziIconv$c);break;
	    }break;
	   }
	  },[F1,l2],"new_outleft'");
	  var s2=$t(function(){
	   var t2=$hs_eqWordzh(i2,goog.math.Long.fromBits(0,0));
	   switch(t2.g){
	   case 1:
	    var u2=v1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(u2.g){
	    case 1:
	     var x2=$hs_word2Intzh(i2);
	     var w2=$hs_uncheckedIShiftRAzh(x2,v1);
	     var v2=g1.subtract(w2);
	     $R(1,[b1,c1,d1,e1,v2,g1],"Buffer");break;
	    case 2:
	     var A2=$hs_word2Intzh(i2);
	     var y2=A2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(y2.g){
	     case 1:
	      $R(1,[b1,c1,d1,e1,g1,g1],"Buffer");break;
	     case 2:
	      var z2=g1.subtract(goog.math.Long.fromBits(4294967295,4294967295));
	      $R(1,[b1,c1,d1,e1,z2,g1],"Buffer");break;
	     }break;
	    }break;
	   case 2:
	    $R(1,[b1,c1,d1,e1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	   }
	  },[i2,v1,b1,c1,d1,e1,g1],"new_input");
	  var B2=$hs_eqWordzh(f2,goog.math.Long.fromBits(4294967295,4294967295));
	  switch(B2.g){
	  case 1:
	   var M2=$hs_touchzh(X1,k2);
	   var L2=$hs_touchzh(O1,M2);
	   var K2=$hs_touchzh(D1,L2);
	   var J2=$hs_touchzh(t1,K2);
	   var I2=$hs_touchzh(j1,J2);
	   var H2=$hs_touchzh(c1,I2);
	   var C2=$t(function(){
	    $M(m2,function(D2){
	     var E2=D2.v[0];
	     var F2=l1.subtract(E2);
	     $R(1,[i1,j1,k1,l1,m1,F2],"Buffer");
	    },[j1,i1,k1,l1,m1]);
	   },[m2,j1,i1,k1,l1,m1],"sat");
	   var G2=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,s2,C2],"sat");
	   $r([H2,G2]);break;
	  case 2:
	   var $ff=__hscore_get_errno();
	   var N2=[k2,$ff];
	   var O2=N2[0],P2=N2[1];
	   var Q2=$hs_narrow32Intzh(P2);
	   switch(Q2.toString()){
	   case "7":
	    var q3=$hs_touchzh(X1,O2);
	    var p3=$hs_touchzh(O1,q3);
	    var o3=$hs_touchzh(D1,p3);
	    var n3=$hs_touchzh(t1,o3);
	    var m3=$hs_touchzh(j1,n3);
	    var l3=$hs_touchzh(c1,m3);
	    var g3=$t(function(){
	     $M(m2,function(h3){
	      var i3=h3.v[0];
	      var j3=l1.subtract(i3);
	      $R(1,[i1,j1,k1,l1,m1,j3],"Buffer");
	     },[j1,i1,k1,l1,m1]);
	    },[m2,j1,i1,k1,l1,m1],"sat");
	    var k3=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,s2,g3],"sat");
	    $r([l3,k3]);break;
	   case "22":
	    var B3=$hs_touchzh(X1,O2);
	    var A3=$hs_touchzh(O1,B3);
	    var z3=$hs_touchzh(D1,A3);
	    var y3=$hs_touchzh(t1,z3);
	    var x3=$hs_touchzh(j1,y3);
	    var w3=$hs_touchzh(c1,x3);
	    var r3=$t(function(){
	     $M(m2,function(s3){
	      var t3=s3.v[0];
	      var u3=l1.subtract(t3);
	      $R(1,[i1,j1,k1,l1,m1,u3],"Buffer");
	     },[j1,i1,k1,l1,m1]);
	    },[m2,j1,i1,k1,l1,m1],"sat");
	    var v3=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,s2,r3],"sat");
	    $r([w3,v3]);break;
	   case "84":
	    var Q3=$hs_touchzh(X1,O2);
	    var P3=$hs_touchzh(O1,Q3);
	    var O3=$hs_touchzh(D1,P3);
	    var N3=$hs_touchzh(t1,O3);
	    var M3=$hs_touchzh(j1,N3);
	    var L3=$hs_touchzh(c1,M3);
	    var C3=$t(function(){
	     $M(m2,function(D3){
	      var E3=D3.v[0];
	      var F3=l1.subtract(E3);
	      $R(1,[i1,j1,k1,l1,m1,F3],"Buffer");
	     },[j1,i1,k1,l1,m1]);
	    },[m2,j1,i1,k1,l1,m1],"sat");
	    var G3=$t(function(){
	     $M(m2,function(H3){
	      var I3=H3.v[0];
	      $M(I3,function(J3){
	       switch(J3.toString()){
	       case "0":
		$R(2,[],"OutputUnderflow");break;
	       default:
		$R(3,[],"InvalidSequence");
	       }
	      },[]);
	     },[]);
	    },[m2],"sat");
	    var K3=$d(1,[G3,s2,C3],"sat");
	    $r([L3,K3]);break;
	   default:
	    var $ff=__hscore_get_errno();
	    var R2=[O2,$ff];
	    var S2=R2[0],T2=R2[1];
	    var V2=$hs_narrow32Intzh(T2);
	    var U2=$d(1,[V2],"sat");
	    $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv$d,U2,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(W2){
	     $$GHCziIOziException_ioError.C([W2,S2],function(X2){
	      var Y2=X2[0],Z2=X2[1];
	      var f3=$hs_touchzh(X1,Y2);
	      var e3=$hs_touchzh(O1,f3);
	      var d3=$hs_touchzh(D1,e3);
	      var c3=$hs_touchzh(t1,d3);
	      var b3=$hs_touchzh(j1,c3);
	      var a3=$hs_touchzh(c1,b3);
	      $r([a3,Z2]);
	     },[t1,D1,O1,X1,c1,j1]);
	    },[t1,D1,O1,X1,c1,j1,S2]);
	   }break;
	  }
	 },[t1,H1,D1,Q1,O1,Z1,X1,R3,S3,F1,v1,b1,c1,d1,e1,g1,j1,i1,k1,l1,m1]);
	},[t1,H1,D1,Q1,O1,Z1,X1,W1,U,F1,v1,b1,c1,d1,e1,g1,j1,i1,k1,l1,m1],"$j3");
	var T3=F1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(T3.g){
	case 1:
	 var W3=l1.subtract(n1);
	 var V3=$hs_uncheckedIShiftLzh(W3,F1);
	 var U3=$hs_int2Wordzh(V3);
	 Y1.J(U3);break;
	case 2:
	 Y1.J(goog.math.Long.fromBits(0,0));break;
	}
       },[t1,H1,D1,Q1,O1,N1,U,F1,v1,b1,c1,d1,e1,g1,j1,i1,k1,l1,m1,n1],"$j2");
       var Y3=v1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Y3.g){
       case 1:
	var b4=g1.subtract(f1);
	var a4=$hs_uncheckedIShiftLzh(b4,v1);
	var Z3=$hs_int2Wordzh(a4);
	P1.J(Z3);break;
       case 2:
	P1.J(goog.math.Long.fromBits(0,0));break;
       }
      },[t1,H1,D1,C1,U,F1,v1,b1,c1,d1,e1,g1,j1,i1,k1,l1,m1,n1,f1],"$j1");
      var d4=F1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(d4.g){
      case 1:
       var f4=$hs_uncheckedIShiftLzh(n1,F1);
       var e4=$hs_plusAddrzh(i1,f4);
       G1.J(e4);break;
      case 2:
       var g4=$hs_plusAddrzh(i1,goog.math.Long.fromBits(0,0));
       G1.J(g4);break;
      }
     },[t1,H1,D1,C1,U,v1,b1,c1,d1,e1,g1,j1,i1,k1,l1,m1,n1,f1]);
    },[t1,s1,Y,U,v1,b1,c1,d1,e1,g1,j1,i1,k1,l1,m1,n1,f1],"$j");
    var i4=v1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(i4.g){
    case 1:
     var k4=$hs_uncheckedIShiftLzh(f1,v1);
     var j4=$hs_plusAddrzh(b1,k4);
     w1.J(j4);break;
    case 2:
     var l4=$hs_plusAddrzh(b1,goog.math.Long.fromBits(0,0));
     w1.J(l4);break;
    }
   },[t1,s1,Y,U,b1,c1,d1,e1,g1,j1,i1,k1,l1,m1,n1,f1]);
  },[Z,W,Y,U,b1,c1,d1,e1,g1,f1]);
 },[X,Z,W,Y,U]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding6=$f(4,function(m4,n4,o4,p4){
 $$GHCziIOziEncodingziIconv_iconvEncoding5.J(m4,n4,$$GHCziIOziEncodingziIconv_iconvEncoding4,o4,$$GHCziIOziEncodingziIconv_charzushift,p4);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding3=$f(4,function(q4,r4,s4,t4){
 $$GHCziIOziEncodingziIconv_iconvEncoding5.J(q4,r4,$$GHCziIOziEncodingziIconv_charzushift,s4,$$GHCziIOziEncodingziIconv_iconvEncoding4,t4);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding12=$f(1,function(u4){
 $M(u4,function(v4){
  var w4=v4.v[0];
  $M(w4,function(x4){
   switch(x4.toString()){
   case "/":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding2=$f(3,function(y4,z4,A4){
 var B4=$t(function(){
  var C4=$f(3,function(D4,a,b){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(y4,D4,a,b);
  },[y4],"sat");
  $$GHCziIOziEncodingziIconv_newIConv.J($$GHCziIOziEncodingziIconv_haskellChar,z4,C4,$$GHCziIOziEncodingziIconv_iconvEncoding3);
 },[z4,y4],"sat");
 var E4=$t(function(){
  var F4=$t(function(){
   $$GHCziList_zdwspan.C([$$GHCziIOziEncodingziIconv_iconvEncoding12,z4],function(G4){
    var H4=G4[0],I4=G4[1];
    $R(1,[H4,I4],"(,)");
   },[]);
  },[z4],"ds");
  var J4=$f(3,function(D4,a,b){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(y4,D4,a,b);
  },[y4],"sat");
  var K4=$t(function(){
   var L4=$t(function(){
    $M(F4,function(M4){
     var N4=M4.v[1];
     $A(N4);
    },[]);
   },[F4],"sat");
   $$GHCziBase_zpzp.J($$GHCziIOziEncodingziIconv_haskellChar,L4);
  },[F4],"sat");
  var O4=$t(function(){
   $M(F4,function(P4){
    var Q4=P4.v[0];
    $A(Q4);
   },[]);
  },[F4],"sat");
  $$GHCziIOziEncodingziIconv_newIConv.J(O4,K4,J4,$$GHCziIOziEncodingziIconv_iconvEncoding6);
 },[z4,y4],"sat");
 var R4=$d(1,[z4,E4,B4],"sat");
 $r([A4,R4]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv$a=$F(2,function(S4,T4){
 $M(S4,function(U4){
  var V4=U4.v[0];
  var $ff=hs_iconv_close(V4);
  var W4=[T4,$ff];
  var X4=W4[0],Y4=W4[1];
  var a5=$hs_narrow32Intzh(Y4);
  var Z4=$d(1,[a5],"sat");
  $r([X4,Z4]);
 },[T4]);
},"a");
var $$GHCziIOziEncodingziIconv$b=$F(1,function(b5){
 var f5=$hs_noDuplicatezh(b5);
 var $ff=localeEncoding();
 var c5=[f5,$ff];
 var d5=c5[0],e5=c5[1];
 $$ForeignziCziString_zdwa.J(e5,d5);
},"lvl");
var $$GHCziIOziEncodingziIconv$c=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"lvl1");
var $$GHCziIOziEncodingziIconv$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("iconvRecoder");
},"lvl2");
var $$GHCziIOziEncodingziTypes_close=$f(1,function(g){
 $M(g,function(h){
  var i=h.v[2];
  $A(i);
 },[]);
},[],"at libraries/base/GHC/IO/Encoding/Types.hs:73:3");
var $$GHCziIOziEncodingziTypes_InputUnderflow=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Types.hs:127:23");
var $$GHCziIOziEncodingziTypes_OutputUnderflow=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Types.hs:129:23");
var $$GHCziIOziEncodingziTypes_InvalidSequence=$D(3,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Types.hs:130:23");
var $$GHCziIOziEncodingziUTF16_zdwa5=$f(8,function(a,b,c,d,e,f,g,h){
 $M(g,function(i){
  var j=i.v[0],k=i.v[1],l=i.v[2],m=i.v[3],n=i.v[4],o=i.v[5];
  var p=$d(1,[a,b,c,d,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var q=$f(3,function(r,s,t){
   var u=r.greaterThanOrEqual(f)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u.g){
   case 1:
    var h2=m.subtract(s);
    var v=h2.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v.g){
    case 1:
     var w=$hs_readWideCharOffAddrzh(a,r,t);
     var x=w[0],y=w[1];
     var i1=$hs_touchzh(b,x);
     var l1=$hs_ordzh(y);
     var z=l1.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(z.g){
     case 1:
      var q1=m.subtract(s);
      var A=q1.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       var P=l1.subtract(goog.math.Long.fromBits(65536,0));
       var k1=$hs_uncheckedIShiftRAzh(P,goog.math.Long.fromBits(10,0));
       var j1=$hs_int2Wordzh(k1);
       var h1=$hs_narrow8Wordzh(j1);
       var g1=$hs_plusAddrzh(j,s);
       var f1=$hs_writeWord8OffAddrzh(g1,goog.math.Long.fromBits(0,0),h1,i1);
       var a1=$hs_touchzh(k,f1);
       var e1=$hs_uncheckedIShiftRAzh(P,goog.math.Long.fromBits(18,0));
       var d1=e1.add(goog.math.Long.fromBits(216,0));
       var c1=$hs_int2Wordzh(d1);
       var Z=$hs_narrow8Wordzh(c1);
       var b1=s.add(goog.math.Long.fromBits(1,0));
       var Y=$hs_plusAddrzh(j,b1);
       var X=$hs_writeWord8OffAddrzh(Y,goog.math.Long.fromBits(0,0),Z,a1);
       var T=$hs_touchzh(k,X);
       var W=$hs_int2Wordzh(P);
       var V=W.and(goog.math.Long.fromBits(1023,0));
       var S=$hs_narrow8Wordzh(V);
       var U=s.add(goog.math.Long.fromBits(2,0));
       var R=$hs_plusAddrzh(j,U);
       var Q=$hs_writeWord8OffAddrzh(R,goog.math.Long.fromBits(0,0),S,T);
       var H=$hs_touchzh(k,Q);
       var O=$hs_int2Wordzh(P);
       var N=O.and(goog.math.Long.fromBits(1023,0));
       var M=$hs_word2Intzh(N);
       var L=$hs_uncheckedIShiftRAzh(M,goog.math.Long.fromBits(8,0));
       var K=L.add(goog.math.Long.fromBits(220,0));
       var J=$hs_int2Wordzh(K);
       var G=$hs_narrow8Wordzh(J);
       var I=s.add(goog.math.Long.fromBits(3,0));
       var F=$hs_plusAddrzh(j,I);
       var E=$hs_writeWord8OffAddrzh(F,goog.math.Long.fromBits(0,0),G,H);
       var D=$hs_touchzh(k,E);
       var C=s.add(goog.math.Long.fromBits(4,0));
       var B=r.add(goog.math.Long.fromBits(1,0));
       q.J(B,C,D);break;
      case 2:
       var m1=$d(1,[j,k,l,m,n,s],"sat");
       var n1=$t(function(){
	var o1=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(o1.g){
	case 1:
	 $R(1,[a,b,c,d,r,f],"Buffer");break;
	case 2:
	 $A(p);break;
	}
       },[a,b,c,d,p,r,f],"sat");
       var p1=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,n1,m1],"sat");
       $r([i1,p1]);break;
      }break;
     case 2:
      var r1=$t(function(){
       var s1=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(s1.g){
       case 1:
	$R(1,[a,b,c,d,r,f],"Buffer");break;
       case 2:
	$A(p);break;
       }
      },[a,b,c,d,p,r,f],"a1");
      var t1=$d(1,[j,k,l,m,n,s],"a2");
      var u1=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,r1,t1],"lvl1");
      var v1=$f(1,function(w1){
       var x1=goog.math.Long.fromBits(56320,0).lessThanOrEqual(l1)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(x1.g){
       case 1:
	var L1=$hs_int2Wordzh(l1);
	var K1=$hs_narrow8Wordzh(L1);
	var J1=$hs_plusAddrzh(j,s);
	var I1=$hs_writeWord8OffAddrzh(J1,goog.math.Long.fromBits(0,0),K1,i1);
	var E1=$hs_touchzh(k,I1);
	var H1=$hs_uncheckedIShiftRAzh(l1,goog.math.Long.fromBits(8,0));
	var G1=$hs_int2Wordzh(H1);
	var D1=$hs_narrow8Wordzh(G1);
	var F1=s.add(goog.math.Long.fromBits(1,0));
	var C1=$hs_plusAddrzh(j,F1);
	var B1=$hs_writeWord8OffAddrzh(C1,goog.math.Long.fromBits(0,0),D1,E1);
	var A1=$hs_touchzh(k,B1);
	var z1=s.add(goog.math.Long.fromBits(2,0));
	var y1=r.add(goog.math.Long.fromBits(1,0));
	q.J(y1,z1,A1);break;
       case 2:
	var M1=l1.lessThanOrEqual(goog.math.Long.fromBits(57343,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(M1.g){
	case 1:
	 var a2=$hs_int2Wordzh(l1);
	 var Z1=$hs_narrow8Wordzh(a2);
	 var Y1=$hs_plusAddrzh(j,s);
	 var X1=$hs_writeWord8OffAddrzh(Y1,goog.math.Long.fromBits(0,0),Z1,i1);
	 var T1=$hs_touchzh(k,X1);
	 var W1=$hs_uncheckedIShiftRAzh(l1,goog.math.Long.fromBits(8,0));
	 var V1=$hs_int2Wordzh(W1);
	 var S1=$hs_narrow8Wordzh(V1);
	 var U1=s.add(goog.math.Long.fromBits(1,0));
	 var R1=$hs_plusAddrzh(j,U1);
	 var Q1=$hs_writeWord8OffAddrzh(R1,goog.math.Long.fromBits(0,0),S1,T1);
	 var P1=$hs_touchzh(k,Q1);
	 var O1=s.add(goog.math.Long.fromBits(2,0));
	 var N1=r.add(goog.math.Long.fromBits(1,0));
	 q.J(N1,O1,P1);break;
	case 2:
	 $r([i1,u1]);break;
	}break;
       }
      },[r,s,l1,j,i1,k,q,u1],"$w$j");
      var b2=goog.math.Long.fromBits(55296,0).lessThanOrEqual(l1)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(b2.g){
      case 1:
       v1.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var c2=l1.lessThanOrEqual(goog.math.Long.fromBits(56319,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(c2.g){
       case 1:
	v1.J($$GHCziPrim_realWorldzh);break;
       case 2:
	$r([i1,u1]);break;
       }break;
      }break;
     }break;
    case 2:
     var d2=$d(1,[j,k,l,m,n,s],"sat");
     var e2=$t(function(){
      var f2=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(f2.g){
      case 1:
       $R(1,[a,b,c,d,r,f],"Buffer");break;
      case 2:
       $A(p);break;
      }
     },[a,b,c,d,p,r,f],"sat");
     var g2=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,e2,d2],"sat");
     $r([t,g2]);break;
    }break;
   case 2:
    var i2=$d(1,[j,k,l,m,n,s],"sat");
    var j2=$t(function(){
     var k2=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(k2.g){
     case 1:
      $R(1,[a,b,c,d,r,f],"Buffer");break;
     case 2:
      $A(p);break;
     }
    },[a,b,c,d,p,r,f],"sat");
    var l2=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,j2,i2],"sat");
    $r([t,l2]);break;
   }
  },[a,b,c,d,p,f,m,j,k,l,n],"$wa6");
  q.J(e,o,h);
 },[a,b,c,d,f,e,h]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16le2=$f(3,function(m2,n2,o2){
 $M(m2,function(p2){
  var q2=p2.v[0],r2=p2.v[1],s2=p2.v[2],t2=p2.v[3],u2=p2.v[4],v2=p2.v[5];
  $$GHCziIOziEncodingziUTF16_zdwa5.J(q2,r2,s2,t2,u2,v2,n2,o2);
 },[n2,o2]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_zdwa1=$f(8,function(z2,A2,B2,C2,D2,E2,F2,G2){
 $M(F2,function(H2){
  var I2=H2.v[0],J2=H2.v[1],K2=H2.v[2],L2=H2.v[3],M2=H2.v[4],N2=H2.v[5];
  var O2=$d(1,[z2,A2,B2,C2,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var P2=$f(3,function(Q2,R2,S2){
   var T2=Q2.greaterThanOrEqual(E2)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(T2.g){
   case 1:
    var G4=L2.subtract(R2);
    var U2=G4.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(U2.g){
    case 1:
     var V2=$hs_readWideCharOffAddrzh(z2,Q2,S2);
     var W2=V2[0],X2=V2[1];
     var G3=$hs_touchzh(A2,W2);
     var K3=$hs_ordzh(X2);
     var Y2=K3.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Y2.g){
     case 1:
      var P3=L2.subtract(R2);
      var Z2=P3.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Z2.g){
      case 1:
       var k3=K3.subtract(goog.math.Long.fromBits(65536,0));
       var J3=$hs_uncheckedIShiftRAzh(k3,goog.math.Long.fromBits(18,0));
       var I3=J3.add(goog.math.Long.fromBits(216,0));
       var H3=$hs_int2Wordzh(I3);
       var F3=$hs_narrow8Wordzh(H3);
       var E3=$hs_plusAddrzh(I2,R2);
       var D3=$hs_writeWord8OffAddrzh(E3,goog.math.Long.fromBits(0,0),F3,G3);
       var z3=$hs_touchzh(J2,D3);
       var C3=$hs_uncheckedIShiftRAzh(k3,goog.math.Long.fromBits(10,0));
       var B3=$hs_int2Wordzh(C3);
       var y3=$hs_narrow8Wordzh(B3);
       var A3=R2.add(goog.math.Long.fromBits(1,0));
       var x3=$hs_plusAddrzh(I2,A3);
       var w3=$hs_writeWord8OffAddrzh(x3,goog.math.Long.fromBits(0,0),y3,z3);
       var o3=$hs_touchzh(J2,w3);
       var v3=$hs_int2Wordzh(k3);
       var u3=v3.and(goog.math.Long.fromBits(1023,0));
       var t3=$hs_word2Intzh(u3);
       var s3=$hs_uncheckedIShiftRAzh(t3,goog.math.Long.fromBits(8,0));
       var r3=s3.add(goog.math.Long.fromBits(220,0));
       var q3=$hs_int2Wordzh(r3);
       var n3=$hs_narrow8Wordzh(q3);
       var p3=R2.add(goog.math.Long.fromBits(2,0));
       var m3=$hs_plusAddrzh(I2,p3);
       var l3=$hs_writeWord8OffAddrzh(m3,goog.math.Long.fromBits(0,0),n3,o3);
       var g3=$hs_touchzh(J2,l3);
       var j3=$hs_int2Wordzh(k3);
       var i3=j3.and(goog.math.Long.fromBits(1023,0));
       var f3=$hs_narrow8Wordzh(i3);
       var h3=R2.add(goog.math.Long.fromBits(3,0));
       var e3=$hs_plusAddrzh(I2,h3);
       var d3=$hs_writeWord8OffAddrzh(e3,goog.math.Long.fromBits(0,0),f3,g3);
       var c3=$hs_touchzh(J2,d3);
       var b3=R2.add(goog.math.Long.fromBits(4,0));
       var a3=Q2.add(goog.math.Long.fromBits(1,0));
       P2.J(a3,b3,c3);break;
      case 2:
       var L3=$d(1,[I2,J2,K2,L2,M2,R2],"sat");
       var M3=$t(function(){
	var N3=Q2.equals(E2)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(N3.g){
	case 1:
	 $R(1,[z2,A2,B2,C2,Q2,E2],"Buffer");break;
	case 2:
	 $A(O2);break;
	}
       },[z2,A2,B2,C2,O2,Q2,E2],"sat");
       var O3=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,M3,L3],"sat");
       $r([G3,O3]);break;
      }break;
     case 2:
      var Q3=$t(function(){
       var R3=Q2.equals(E2)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(R3.g){
       case 1:
	$R(1,[z2,A2,B2,C2,Q2,E2],"Buffer");break;
       case 2:
	$A(O2);break;
       }
      },[z2,A2,B2,C2,O2,Q2,E2],"a1");
      var S3=$d(1,[I2,J2,K2,L2,M2,R2],"a2");
      var T3=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,Q3,S3],"lvl1");
      var U3=$f(1,function(V3){
       var W3=goog.math.Long.fromBits(56320,0).lessThanOrEqual(K3)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(W3.g){
       case 1:
	var k4=$hs_uncheckedIShiftRAzh(K3,goog.math.Long.fromBits(8,0));
	var j4=$hs_int2Wordzh(k4);
	var i4=$hs_narrow8Wordzh(j4);
	var h4=$hs_plusAddrzh(I2,R2);
	var g4=$hs_writeWord8OffAddrzh(h4,goog.math.Long.fromBits(0,0),i4,G3);
	var d4=$hs_touchzh(J2,g4);
	var f4=$hs_int2Wordzh(K3);
	var c4=$hs_narrow8Wordzh(f4);
	var e4=R2.add(goog.math.Long.fromBits(1,0));
	var b4=$hs_plusAddrzh(I2,e4);
	var a4=$hs_writeWord8OffAddrzh(b4,goog.math.Long.fromBits(0,0),c4,d4);
	var Z3=$hs_touchzh(J2,a4);
	var Y3=R2.add(goog.math.Long.fromBits(2,0));
	var X3=Q2.add(goog.math.Long.fromBits(1,0));
	P2.J(X3,Y3,Z3);break;
       case 2:
	var l4=K3.lessThanOrEqual(goog.math.Long.fromBits(57343,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(l4.g){
	case 1:
	 var z4=$hs_uncheckedIShiftRAzh(K3,goog.math.Long.fromBits(8,0));
	 var y4=$hs_int2Wordzh(z4);
	 var x4=$hs_narrow8Wordzh(y4);
	 var w4=$hs_plusAddrzh(I2,R2);
	 var v4=$hs_writeWord8OffAddrzh(w4,goog.math.Long.fromBits(0,0),x4,G3);
	 var s4=$hs_touchzh(J2,v4);
	 var u4=$hs_int2Wordzh(K3);
	 var r4=$hs_narrow8Wordzh(u4);
	 var t4=R2.add(goog.math.Long.fromBits(1,0));
	 var q4=$hs_plusAddrzh(I2,t4);
	 var p4=$hs_writeWord8OffAddrzh(q4,goog.math.Long.fromBits(0,0),r4,s4);
	 var o4=$hs_touchzh(J2,p4);
	 var n4=R2.add(goog.math.Long.fromBits(2,0));
	 var m4=Q2.add(goog.math.Long.fromBits(1,0));
	 P2.J(m4,n4,o4);break;
	case 2:
	 $r([G3,T3]);break;
	}break;
       }
      },[Q2,R2,K3,I2,G3,J2,P2,T3],"$w$j");
      var A4=goog.math.Long.fromBits(55296,0).lessThanOrEqual(K3)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A4.g){
      case 1:
       U3.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var B4=K3.lessThanOrEqual(goog.math.Long.fromBits(56319,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(B4.g){
       case 1:
	U3.J($$GHCziPrim_realWorldzh);break;
       case 2:
	$r([G3,T3]);break;
       }break;
      }break;
     }break;
    case 2:
     var C4=$d(1,[I2,J2,K2,L2,M2,R2],"sat");
     var D4=$t(function(){
      var E4=Q2.equals(E2)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(E4.g){
      case 1:
       $R(1,[z2,A2,B2,C2,Q2,E2],"Buffer");break;
      case 2:
       $A(O2);break;
      }
     },[z2,A2,B2,C2,O2,Q2,E2],"sat");
     var F4=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,D4,C4],"sat");
     $r([S2,F4]);break;
    }break;
   case 2:
    var H4=$d(1,[I2,J2,K2,L2,M2,R2],"sat");
    var I4=$t(function(){
     var J4=Q2.equals(E2)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(J4.g){
     case 1:
      $R(1,[z2,A2,B2,C2,Q2,E2],"Buffer");break;
     case 2:
      $A(O2);break;
     }
    },[z2,A2,B2,C2,O2,Q2,E2],"sat");
    var K4=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,I4,H4],"sat");
    $r([S2,K4]);break;
   }
  },[z2,A2,B2,C2,O2,E2,L2,I2,J2,K2,M2],"$wa6");
  P2.J(D2,N2,G2);
 },[z2,A2,B2,C2,E2,D2,G2]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16be2=$f(3,function(L4,M4,N4){
 $M(L4,function(O4){
  var P4=O4.v[0],Q4=O4.v[1],R4=O4.v[2],S4=O4.v[3],T4=O4.v[4],U4=O4.v[5];
  $$GHCziIOziEncodingziUTF16_zdwa1.J(P4,Q4,R4,S4,T4,U4,M4,N4);
 },[M4,N4]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_zdwa=$f(9,function(V4,W4,X4,Y4,Z4,a5,b5,c5,d5){
 var e5=$hs_readMutVarzh(V4,d5);
 var f5=e5[0],g5=e5[1];
 $M(g5,function(h5){
  switch(h5.g){
  case 1:
   var C5=a5.subtract(c5);
   var i5=C5.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(i5.g){
   case 1:
    var z5=$hs_writeMutVarzh(V4,$$GHCziTypes_True,f5);
    var y5=$hs_plusAddrzh(X4,c5);
    var x5=$hs_writeWord8OffAddrzh(y5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(254,0),z5);
    var v5=$hs_touchzh(Y4,x5);
    var w5=c5.add(goog.math.Long.fromBits(1,0));
    var u5=$hs_plusAddrzh(X4,w5);
    var t5=$hs_writeWord8OffAddrzh(u5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(255,0),v5);
    var s5=$hs_touchzh(Y4,t5);
    $M(W4,function(j5){
     var k5=j5.v[0],l5=j5.v[1],m5=j5.v[2],n5=j5.v[3],o5=j5.v[4],p5=j5.v[5];
     var r5=c5.add(goog.math.Long.fromBits(2,0));
     var q5=$d(1,[X4,Y4,Z4,a5,b5,r5],"sat");
     $$GHCziIOziEncodingziUTF16_zdwa1.J(k5,l5,m5,n5,o5,p5,q5,s5);
    },[a5,c5,X4,Y4,Z4,b5,s5]);break;
   case 2:
    var A5=$d(1,[X4,Y4,Z4,a5,b5,c5],"sat");
    var B5=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,W4,A5],"sat");
    $r([f5,B5]);break;
   }break;
  case 2:
   $M(W4,function(D5){
    var E5=D5.v[0],F5=D5.v[1],G5=D5.v[2],H5=D5.v[3],I5=D5.v[4],J5=D5.v[5];
    var K5=$d(1,[X4,Y4,Z4,a5,b5,c5],"sat");
    $$GHCziIOziEncodingziUTF16_zdwa1.J(E5,F5,G5,H5,I5,J5,K5,f5);
   },[a5,c5,f5,X4,Y4,Z4,b5]);break;
  }
 },[V4,a5,c5,f5,X4,Y4,W4,Z4,b5]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_zdwa4=$f(8,function(Z5,a6,b6,c6,d6,e6,f6,g6){
 $M(f6,function(h6){
  var i6=h6.v[0],j6=h6.v[1],k6=h6.v[2],l6=h6.v[3],m6=h6.v[4],n6=h6.v[5];
  var o6=$d(1,[Z5,a6,b6,c6,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var p6=$f(3,function(q6,r6,s6){
   var t6=r6.greaterThanOrEqual(l6)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(t6.g){
   case 1:
    var u6=q6.greaterThanOrEqual(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(u6.g){
    case 1:
     var f8=q6.add(goog.math.Long.fromBits(1,0));
     var v6=f8.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(v6.g){
     case 1:
      var a8=$hs_plusAddrzh(Z5,q6);
      var w6=$hs_readWord8OffAddrzh(a8,goog.math.Long.fromBits(0,0),s6);
      var x6=w6[0],y6=w6[1];
      var Y7=$hs_touchzh(a6,x6);
      var Z7=q6.add(goog.math.Long.fromBits(1,0));
      var X7=$hs_plusAddrzh(Z5,Z7);
      var z6=$hs_readWord8OffAddrzh(X7,goog.math.Long.fromBits(0,0),Y7);
      var A6=z6[0],B6=z6[1];
      var B7=$hs_touchzh(a6,A6);
      var W7=$hs_uncheckedShiftLzh(y6,goog.math.Long.fromBits(8,0));
      var V7=$hs_narrow16Wordzh(W7);
      var U7=V7.add(B6);
      var r7=$hs_narrow16Wordzh(U7);
      var C6=$hs_ltWordzh(r7,goog.math.Long.fromBits(55296,0));
      switch(C6.g){
      case 1:
       var D6=$hs_gtWordzh(r7,goog.math.Long.fromBits(57343,0));
       switch(D6.g){
       case 1:
	var H7=e6.subtract(q6);
	var E6=H7.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(E6.g){
	case 1:
	 var C7=q6.add(goog.math.Long.fromBits(2,0));
	 var A7=$hs_plusAddrzh(Z5,C7);
	 var F6=$hs_readWord8OffAddrzh(A7,goog.math.Long.fromBits(0,0),B7);
	 var G6=F6[0],H6=F6[1];
	 var y7=$hs_touchzh(a6,G6);
	 var z7=q6.add(goog.math.Long.fromBits(3,0));
	 var x7=$hs_plusAddrzh(Z5,z7);
	 var I6=$hs_readWord8OffAddrzh(x7,goog.math.Long.fromBits(0,0),y7);
	 var J6=I6[0],K6=I6[1];
	 var Q6=$hs_touchzh(a6,J6);
	 var L6=$hs_geWordzh(r7,goog.math.Long.fromBits(55296,0));
	 switch(L6.g){
	 case 1:
	  var M6=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	  var N6=$t(function(){
	   var O6=q6.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(O6.g){
	   case 1:
	    $R(1,[Z5,a6,b6,c6,q6,e6],"Buffer");break;
	   case 2:
	    $A(o6);break;
	   }
	  },[Z5,a6,b6,c6,o6,q6,e6],"sat");
	  var P6=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,N6,M6],"sat");
	  $r([Q6,P6]);break;
	 case 2:
	  var R6=$hs_leWordzh(r7,goog.math.Long.fromBits(56319,0));
	  switch(R6.g){
	  case 1:
	   var S6=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	   var T6=$t(function(){
	    var U6=q6.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(U6.g){
	    case 1:
	     $R(1,[Z5,a6,b6,c6,q6,e6],"Buffer");break;
	    case 2:
	     $A(o6);break;
	    }
	   },[Z5,a6,b6,c6,o6,q6,e6],"sat");
	   var V6=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,T6,S6],"sat");
	   $r([Q6,V6]);break;
	  case 2:
	   var w7=$hs_uncheckedShiftLzh(H6,goog.math.Long.fromBits(8,0));
	   var v7=$hs_narrow16Wordzh(w7);
	   var u7=v7.add(K6);
	   var t7=$hs_narrow16Wordzh(u7);
	   var W6=$hs_geWordzh(t7,goog.math.Long.fromBits(56320,0));
	   switch(W6.g){
	   case 1:
	    var X6=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	    var Y6=$t(function(){
	     var Z6=q6.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Z6.g){
	     case 1:
	      $R(1,[Z5,a6,b6,c6,q6,e6],"Buffer");break;
	     case 2:
	      $A(o6);break;
	     }
	    },[Z5,a6,b6,c6,o6,q6,e6],"sat");
	    var a7=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,Y6,X6],"sat");
	    $r([Q6,a7]);break;
	   case 2:
	    var b7=$hs_leWordzh(t7,goog.math.Long.fromBits(57343,0));
	    switch(b7.g){
	    case 1:
	     var c7=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	     var d7=$t(function(){
	      var e7=q6.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(e7.g){
	      case 1:
	       $R(1,[Z5,a6,b6,c6,q6,e6],"Buffer");break;
	      case 2:
	       $A(o6);break;
	      }
	     },[Z5,a6,b6,c6,o6,q6,e6],"sat");
	     var f7=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,d7,c7],"sat");
	     $r([Q6,f7]);break;
	    case 2:
	     var s7=$hs_word2Intzh(t7);
	     var o7=s7.subtract(goog.math.Long.fromBits(56320,0));
	     var q7=$hs_word2Intzh(r7);
	     var p7=q7.subtract(goog.math.Long.fromBits(55296,0));
	     var n7=$hs_uncheckedIShiftLzh(p7,goog.math.Long.fromBits(10,0));
	     var m7=n7.add(o7);
	     var l7=m7.add(goog.math.Long.fromBits(65536,0));
	     var k7=$hs_chrzh(l7);
	     var j7=$hs_writeWideCharOffAddrzh(i6,r6,k7,Q6);
	     var i7=$hs_touchzh(j6,j7);
	     var h7=r6.add(goog.math.Long.fromBits(1,0));
	     var g7=q6.add(goog.math.Long.fromBits(4,0));
	     p6.J(g7,h7,i7);break;
	    }break;
	   }break;
	  }break;
	 }break;
	case 2:
	 var D7=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	 var E7=$t(function(){
	  var F7=q6.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(F7.g){
	  case 1:
	   $R(1,[Z5,a6,b6,c6,q6,e6],"Buffer");break;
	  case 2:
	   $A(o6);break;
	  }
	 },[Z5,a6,b6,c6,o6,q6,e6],"sat");
	 var G7=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,E7,D7],"sat");
	 $r([B7,G7]);break;
	}break;
       case 2:
	var N7=$hs_word2Intzh(r7);
	var M7=$hs_chrzh(N7);
	var L7=$hs_writeWideCharOffAddrzh(i6,r6,M7,B7);
	var K7=$hs_touchzh(j6,L7);
	var J7=r6.add(goog.math.Long.fromBits(1,0));
	var I7=q6.add(goog.math.Long.fromBits(2,0));
	p6.J(I7,J7,K7);break;
       }break;
      case 2:
       var T7=$hs_word2Intzh(r7);
       var S7=$hs_chrzh(T7);
       var R7=$hs_writeWideCharOffAddrzh(i6,r6,S7,B7);
       var Q7=$hs_touchzh(j6,R7);
       var P7=r6.add(goog.math.Long.fromBits(1,0));
       var O7=q6.add(goog.math.Long.fromBits(2,0));
       p6.J(O7,P7,Q7);break;
      }break;
     case 2:
      var b8=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
      var c8=$t(function(){
       var d8=q6.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(d8.g){
       case 1:
	$R(1,[Z5,a6,b6,c6,q6,e6],"Buffer");break;
       case 2:
	$A(o6);break;
       }
      },[Z5,a6,b6,c6,o6,q6,e6],"sat");
      var e8=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,c8,b8],"sat");
      $r([s6,e8]);break;
     }break;
    case 2:
     var g8=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
     var h8=$t(function(){
      var i8=q6.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(i8.g){
      case 1:
       $R(1,[Z5,a6,b6,c6,q6,e6],"Buffer");break;
      case 2:
       $A(o6);break;
      }
     },[Z5,a6,b6,c6,o6,q6,e6],"sat");
     var j8=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,h8,g8],"sat");
     $r([s6,j8]);break;
    }break;
   case 2:
    var k8=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
    var l8=$t(function(){
     var m8=q6.equals(e6)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(m8.g){
     case 1:
      $R(1,[Z5,a6,b6,c6,q6,e6],"Buffer");break;
     case 2:
      $A(o6);break;
     }
    },[Z5,a6,b6,c6,o6,q6,e6],"sat");
    var n8=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,l8,k8],"sat");
    $r([s6,n8]);break;
   }
  },[Z5,a6,b6,c6,o6,l6,e6,i6,j6,k6,m6],"$wa6");
  p6.J(d6,n6,g6);
 },[Z5,a6,b6,c6,e6,d6,g6]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF5=$f(3,function(o8,p8,q8){
 $M(o8,function(r8){
  var s8=r8.v[0],t8=r8.v[1],u8=r8.v[2],v8=r8.v[3],w8=r8.v[4],x8=r8.v[5];
  $$GHCziIOziEncodingziUTF16_zdwa4.J(s8,t8,u8,v8,w8,x8,p8,q8);
 },[p8,q8]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16be4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF-16BE");
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF1=$f(1,function(y8){
 $r([y8,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16be3=$f(2,function(z8,A8){
 $r([A8,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16be1=$f(2,function(x2,y2){
 $$GHCziIOziEncodingziUTF16_mkUTF16be3.J(x2,y2);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16be=$f(1,function(B8){
 var C8=$f(1,function(D8){
  var E8=$f(3,function(w2,x2,y2){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(B8,w2,x2,y2);
  },[B8],"sat");
  var F8=$d(1,[$$GHCziIOziEncodingziUTF16_mkUTF16be2,E8,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF16be1],"sat");
  $r([D8,F8]);
 },[B8],"sat");
 var G8=$f(1,function(H8){
  var I8=$f(3,function(w2,x2,y2){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(B8,w2,x2,y2);
  },[B8],"sat");
  var J8=$d(1,[$$GHCziIOziEncodingziUTF16_mkUTF5,I8,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF16be3],"sat");
  $r([H8,J8]);
 },[B8],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF16_mkUTF16be4,G8,C8],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF16.hs:146:1");
var $$GHCziIOziEncodingziUTF16_zdwa3=$f(8,function(a9,b9,c9,d9,e9,f9,g9,h9){
 $M(g9,function(i9){
  var j9=i9.v[0],k9=i9.v[1],l9=i9.v[2],m9=i9.v[3],n9=i9.v[4],o9=i9.v[5];
  var p9=$d(1,[a9,b9,c9,d9,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var q9=$f(3,function(r9,s9,t9){
   var u9=s9.greaterThanOrEqual(m9)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u9.g){
   case 1:
    var v9=r9.greaterThanOrEqual(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v9.g){
    case 1:
     var gb=r9.add(goog.math.Long.fromBits(1,0));
     var w9=gb.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(w9.g){
     case 1:
      var bb=$hs_plusAddrzh(a9,r9);
      var x9=$hs_readWord8OffAddrzh(bb,goog.math.Long.fromBits(0,0),t9);
      var y9=x9[0],z9=x9[1];
      var Za=$hs_touchzh(b9,y9);
      var ab=r9.add(goog.math.Long.fromBits(1,0));
      var Ya=$hs_plusAddrzh(a9,ab);
      var A9=$hs_readWord8OffAddrzh(Ya,goog.math.Long.fromBits(0,0),Za);
      var B9=A9[0],C9=A9[1];
      var Ca=$hs_touchzh(b9,B9);
      var Xa=$hs_uncheckedShiftLzh(C9,goog.math.Long.fromBits(8,0));
      var Wa=$hs_narrow16Wordzh(Xa);
      var Va=Wa.add(z9);
      var sa=$hs_narrow16Wordzh(Va);
      var D9=$hs_ltWordzh(sa,goog.math.Long.fromBits(55296,0));
      switch(D9.g){
      case 1:
       var E9=$hs_gtWordzh(sa,goog.math.Long.fromBits(57343,0));
       switch(E9.g){
       case 1:
	var Ia=f9.subtract(r9);
	var F9=Ia.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(F9.g){
	case 1:
	 var Da=r9.add(goog.math.Long.fromBits(2,0));
	 var Ba=$hs_plusAddrzh(a9,Da);
	 var G9=$hs_readWord8OffAddrzh(Ba,goog.math.Long.fromBits(0,0),Ca);
	 var H9=G9[0],I9=G9[1];
	 var za=$hs_touchzh(b9,H9);
	 var Aa=r9.add(goog.math.Long.fromBits(3,0));
	 var ya=$hs_plusAddrzh(a9,Aa);
	 var J9=$hs_readWord8OffAddrzh(ya,goog.math.Long.fromBits(0,0),za);
	 var K9=J9[0],L9=J9[1];
	 var R9=$hs_touchzh(b9,K9);
	 var M9=$hs_geWordzh(sa,goog.math.Long.fromBits(55296,0));
	 switch(M9.g){
	 case 1:
	  var N9=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	  var O9=$t(function(){
	   var P9=r9.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(P9.g){
	   case 1:
	    $R(1,[a9,b9,c9,d9,r9,f9],"Buffer");break;
	   case 2:
	    $A(p9);break;
	   }
	  },[a9,b9,c9,d9,p9,r9,f9],"sat");
	  var Q9=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,O9,N9],"sat");
	  $r([R9,Q9]);break;
	 case 2:
	  var S9=$hs_leWordzh(sa,goog.math.Long.fromBits(56319,0));
	  switch(S9.g){
	  case 1:
	   var T9=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	   var U9=$t(function(){
	    var V9=r9.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(V9.g){
	    case 1:
	     $R(1,[a9,b9,c9,d9,r9,f9],"Buffer");break;
	    case 2:
	     $A(p9);break;
	    }
	   },[a9,b9,c9,d9,p9,r9,f9],"sat");
	   var W9=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,U9,T9],"sat");
	   $r([R9,W9]);break;
	  case 2:
	   var xa=$hs_uncheckedShiftLzh(L9,goog.math.Long.fromBits(8,0));
	   var wa=$hs_narrow16Wordzh(xa);
	   var va=wa.add(I9);
	   var ua=$hs_narrow16Wordzh(va);
	   var X9=$hs_geWordzh(ua,goog.math.Long.fromBits(56320,0));
	   switch(X9.g){
	   case 1:
	    var Y9=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	    var Z9=$t(function(){
	     var aa=r9.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(aa.g){
	     case 1:
	      $R(1,[a9,b9,c9,d9,r9,f9],"Buffer");break;
	     case 2:
	      $A(p9);break;
	     }
	    },[a9,b9,c9,d9,p9,r9,f9],"sat");
	    var ba=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,Z9,Y9],"sat");
	    $r([R9,ba]);break;
	   case 2:
	    var ca=$hs_leWordzh(ua,goog.math.Long.fromBits(57343,0));
	    switch(ca.g){
	    case 1:
	     var da=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	     var ea=$t(function(){
	      var fa=r9.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(fa.g){
	      case 1:
	       $R(1,[a9,b9,c9,d9,r9,f9],"Buffer");break;
	      case 2:
	       $A(p9);break;
	      }
	     },[a9,b9,c9,d9,p9,r9,f9],"sat");
	     var ga=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,ea,da],"sat");
	     $r([R9,ga]);break;
	    case 2:
	     var ta=$hs_word2Intzh(ua);
	     var pa=ta.subtract(goog.math.Long.fromBits(56320,0));
	     var ra=$hs_word2Intzh(sa);
	     var qa=ra.subtract(goog.math.Long.fromBits(55296,0));
	     var oa=$hs_uncheckedIShiftLzh(qa,goog.math.Long.fromBits(10,0));
	     var na=oa.add(pa);
	     var ma=na.add(goog.math.Long.fromBits(65536,0));
	     var la=$hs_chrzh(ma);
	     var ka=$hs_writeWideCharOffAddrzh(j9,s9,la,R9);
	     var ja=$hs_touchzh(k9,ka);
	     var ia=s9.add(goog.math.Long.fromBits(1,0));
	     var ha=r9.add(goog.math.Long.fromBits(4,0));
	     q9.J(ha,ia,ja);break;
	    }break;
	   }break;
	  }break;
	 }break;
	case 2:
	 var Ea=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	 var Fa=$t(function(){
	  var Ga=r9.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Ga.g){
	  case 1:
	   $R(1,[a9,b9,c9,d9,r9,f9],"Buffer");break;
	  case 2:
	   $A(p9);break;
	  }
	 },[a9,b9,c9,d9,p9,r9,f9],"sat");
	 var Ha=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,Fa,Ea],"sat");
	 $r([Ca,Ha]);break;
	}break;
       case 2:
	var Oa=$hs_word2Intzh(sa);
	var Na=$hs_chrzh(Oa);
	var Ma=$hs_writeWideCharOffAddrzh(j9,s9,Na,Ca);
	var La=$hs_touchzh(k9,Ma);
	var Ka=s9.add(goog.math.Long.fromBits(1,0));
	var Ja=r9.add(goog.math.Long.fromBits(2,0));
	q9.J(Ja,Ka,La);break;
       }break;
      case 2:
       var Ua=$hs_word2Intzh(sa);
       var Ta=$hs_chrzh(Ua);
       var Sa=$hs_writeWideCharOffAddrzh(j9,s9,Ta,Ca);
       var Ra=$hs_touchzh(k9,Sa);
       var Qa=s9.add(goog.math.Long.fromBits(1,0));
       var Pa=r9.add(goog.math.Long.fromBits(2,0));
       q9.J(Pa,Qa,Ra);break;
      }break;
     case 2:
      var cb=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
      var db=$t(function(){
       var eb=r9.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(eb.g){
       case 1:
	$R(1,[a9,b9,c9,d9,r9,f9],"Buffer");break;
       case 2:
	$A(p9);break;
       }
      },[a9,b9,c9,d9,p9,r9,f9],"sat");
      var fb=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,db,cb],"sat");
      $r([t9,fb]);break;
     }break;
    case 2:
     var hb=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
     var ib=$t(function(){
      var jb=r9.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(jb.g){
      case 1:
       $R(1,[a9,b9,c9,d9,r9,f9],"Buffer");break;
      case 2:
       $A(p9);break;
      }
     },[a9,b9,c9,d9,p9,r9,f9],"sat");
     var kb=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,ib,hb],"sat");
     $r([t9,kb]);break;
    }break;
   case 2:
    var lb=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
    var mb=$t(function(){
     var nb=r9.equals(f9)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(nb.g){
     case 1:
      $R(1,[a9,b9,c9,d9,r9,f9],"Buffer");break;
     case 2:
      $A(p9);break;
     }
    },[a9,b9,c9,d9,p9,r9,f9],"sat");
    var ob=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,mb,lb],"sat");
    $r([t9,ob]);break;
   }
  },[a9,b9,c9,d9,p9,m9,f9,j9,k9,l9,n9],"$wa6");
  q9.J(e9,o9,h9);
 },[a9,b9,c9,d9,f9,e9,h9]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF3=$f(3,function(pb,qb,rb){
 $M(pb,function(sb){
  var tb=sb.v[0],ub=sb.v[1],vb=sb.v[2],wb=sb.v[3],xb=sb.v[4],yb=sb.v[5];
  $$GHCziIOziEncodingziUTF16_zdwa3.J(tb,ub,vb,wb,xb,yb,qb,rb);
 },[qb,rb]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF4=$D(2,function(){
 $r([$$GHCziIOziEncodingziUTF16_mkUTF5]);
},"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF2=$D(2,function(){
 $r([$$GHCziIOziEncodingziUTF16_mkUTF3]);
},"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_zdwa2=$f(9,function(zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb){
 var Ib=$hs_readMutVarzh(zb,Hb);
 var Jb=Ib[0],Kb=Ib[1];
 $M(Kb,function(Lb){
  switch(Lb.g){
  case 1:
   var mc=Fb.subtract(Eb);
   var Mb=mc.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Mb.g){
   case 1:
    var jc=$hs_plusAddrzh(Ab,Eb);
    var Nb=$hs_readWord8OffAddrzh(jc,goog.math.Long.fromBits(0,0),Jb);
    var Ob=Nb[0],Pb=Nb[1];
    var hc=$hs_touchzh(Bb,Ob);
    var ic=Eb.add(goog.math.Long.fromBits(1,0));
    var gc=$hs_plusAddrzh(Ab,ic);
    var Qb=$hs_readWord8OffAddrzh(gc,goog.math.Long.fromBits(0,0),hc);
    var Rb=Qb[0],Sb=Qb[1];
    var Ub=$hs_touchzh(Bb,Rb);
    var Tb=$f(1,function(Vb){
     var Wb=$hs_eqWordzh(Pb,goog.math.Long.fromBits(255,0));
     switch(Wb.g){
     case 1:
      var Xb=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16_mkUTF4,Ub);
      $$GHCziIOziEncodingziUTF16_zdwa4.J(Ab,Bb,Cb,Db,Eb,Fb,Gb,Xb);break;
     case 2:
      var Yb=$hs_eqWordzh(Sb,goog.math.Long.fromBits(254,0));
      switch(Yb.g){
      case 1:
       var Zb=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16_mkUTF4,Ub);
       $$GHCziIOziEncodingziUTF16_zdwa4.J(Ab,Bb,Cb,Db,Eb,Fb,Gb,Zb);break;
      case 2:
       var bc=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16_mkUTF2,Ub);
       var ac=Eb.add(goog.math.Long.fromBits(2,0));
       $$GHCziIOziEncodingziUTF16_zdwa3.J(Ab,Bb,Cb,Db,ac,Fb,Gb,bc);break;
      }break;
     }
    },[zb,Fb,Eb,Ab,Bb,Pb,Ub,Cb,Db,Gb,Sb],"$w$j");
    var cc=$hs_eqWordzh(Pb,goog.math.Long.fromBits(254,0));
    switch(cc.g){
    case 1:
     Tb.J($$GHCziPrim_realWorldzh);break;
    case 2:
     var dc=$hs_eqWordzh(Sb,goog.math.Long.fromBits(255,0));
     switch(dc.g){
     case 1:
      Tb.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var fc=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16_mkUTF4,Ub);
      var ec=Eb.add(goog.math.Long.fromBits(2,0));
      $$GHCziIOziEncodingziUTF16_zdwa4.J(Ab,Bb,Cb,Db,ec,Fb,Gb,fc);break;
     }break;
    }break;
   case 2:
    var kc=$d(1,[Ab,Bb,Cb,Db,Eb,Fb],"sat");
    var lc=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,kc,Gb],"sat");
    $r([Jb,lc]);break;
   }break;
  case 2:
   var nc=Lb.v[0];
   var oc=$d(1,[Ab,Bb,Cb,Db,Eb,Fb],"sat");
   nc.J(oc,Gb,Jb);break;
  }
 },[zb,Fb,Eb,Ab,Jb,Bb,Cb,Db,Gb]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF6=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF-16");
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16=$f(1,function(Cc){
 var Dc=$f(1,function(Ec){
  var Fc=$hs_newMutVarzh($$GHCziTypes_False,Ec);
  var Gc=Fc[0],Hc=Fc[1];
  var Ic=$f(2,function(Jc,Kc){
   var Lc=$hs_writeMutVarzh(Hc,Jc,Kc);
   $r([Lc,$$GHCziTuple_Z0T]);
  },[Hc],"sat");
  var Mc=$f(1,function(Nc){
   $r($hs_readMutVarzh(Hc,Nc));
  },[Hc],"sat");
  var Oc=$f(3,function(w2,x2,y2){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(Cc,w2,x2,y2);
  },[Cc],"sat");
  var Pc=$f(3,function(Qc,Rc,Sc){
   $M(Rc,function(Tc){
    var Uc=Tc.v[0],Vc=Tc.v[1],Wc=Tc.v[2],Xc=Tc.v[3],Yc=Tc.v[4],Zc=Tc.v[5];
    $$GHCziIOziEncodingziUTF16_zdwa.J(Hc,Qc,Uc,Vc,Wc,Xc,Yc,Zc,Sc);
   },[Hc,Qc,Sc]);
  },[Hc],"sat");
  var ad=$d(1,[Pc,Oc,$$GHCziIOziEncodingziUTF16_mkUTF1,Mc,Ic],"sat");
  $r([Gc,ad]);
 },[Cc],"sat");
 var bd=$f(1,function(cd){
  var dd=$hs_newMutVarzh($$DataziMaybe_Nothing,cd);
  var ed=dd[0],fd=dd[1];
  var gd=$f(2,function(hd,id){
   var jd=$hs_writeMutVarzh(fd,hd,id);
   $r([jd,$$GHCziTuple_Z0T]);
  },[fd],"sat");
  var kd=$f(1,function(ld){
   $r($hs_readMutVarzh(fd,ld));
  },[fd],"sat");
  var md=$f(3,function(w2,x2,y2){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(Cc,w2,x2,y2);
  },[Cc],"sat");
  var nd=$f(3,function(od,pd,qd){
   $M(od,function(rd){
    var sd=rd.v[0],td=rd.v[1],ud=rd.v[2],vd=rd.v[3],wd=rd.v[4],xd=rd.v[5];
    $$GHCziIOziEncodingziUTF16_zdwa2.J(fd,sd,td,ud,vd,wd,xd,pd,qd);
   },[fd,pd,qd]);
  },[fd],"sat");
  var yd=$d(1,[nd,md,$$GHCziIOziEncodingziUTF16_mkUTF1,kd,gd],"sat");
  $r([ed,yd]);
 },[Cc],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF16_mkUTF6,bd,Dc],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF16.hs:61:1");
var $$GHCziIOziEncodingziUTF16_mkUTF16le4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF16-LE");
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16le3=$f(2,function(x2,y2){
 $$GHCziIOziEncodingziUTF16_mkUTF16be3.J(x2,y2);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16le1=$f(2,function(x2,y2){
 $$GHCziIOziEncodingziUTF16_mkUTF16be3.J(x2,y2);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16le=$f(1,function(zd){
 var Ad=$f(1,function(Bd){
  var Cd=$f(3,function(w2,x2,y2){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(zd,w2,x2,y2);
  },[zd],"sat");
  var Dd=$d(1,[$$GHCziIOziEncodingziUTF16_mkUTF16le2,Cd,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF16le1],"sat");
  $r([Bd,Dd]);
 },[zd],"sat");
 var Ed=$f(1,function(Fd){
  var Gd=$f(3,function(w2,x2,y2){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(zd,w2,x2,y2);
  },[zd],"sat");
  var Hd=$d(1,[$$GHCziIOziEncodingziUTF16_mkUTF3,Gd,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF16le3],"sat");
  $r([Fd,Hd]);
 },[zd],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF16_mkUTF16le4,Ed,Ad],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF16.hs:174:1");
var $$GHCziIOziEncodingziUTF32_zdwa1=$f(8,function(a,b,c,d,e,f,g,h){
 $M(g,function(i){
  var j=i.v[0],k=i.v[1],l=i.v[2],m=i.v[3],n=i.v[4],o=i.v[5];
  var p=$d(1,[a,b,c,d,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl2");
  var q=$f(3,function(r,s,t){
   var u=r.greaterThanOrEqual(f)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u.g){
   case 1:
    var T1=m.subtract(s);
    var v=T1.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v.g){
    case 1:
     var w=$hs_readWideCharOffAddrzh(a,r,t);
     var x=w[0],y=w[1];
     var F=$hs_touchzh(b,x);
     var E=$hs_ordzh(y);
     var z=$t(function(){
      var A=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       $R(1,[a,b,c,d,r,f],"Buffer");break;
      case 2:
       $A(p);break;
      }
     },[a,b,c,d,p,r,f],"a1");
     var B=$d(1,[j,k,l,m,n,s],"a2");
     var C=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,z,B],"lvl3");
     var D=$f(1,function(G){
      var H=goog.math.Long.fromBits(56320,0).lessThanOrEqual(E)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(H.g){
      case 1:
       var j1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(24,0));
       var i1=$hs_int2Wordzh(j1);
       var h1=$hs_narrow8Wordzh(i1);
       var g1=$hs_plusAddrzh(j,s);
       var f1=$hs_writeWord8OffAddrzh(g1,goog.math.Long.fromBits(0,0),h1,F);
       var b1=$hs_touchzh(k,f1);
       var e1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(16,0));
       var d1=$hs_int2Wordzh(e1);
       var a1=$hs_narrow8Wordzh(d1);
       var c1=s.add(goog.math.Long.fromBits(1,0));
       var Z=$hs_plusAddrzh(j,c1);
       var Y=$hs_writeWord8OffAddrzh(Z,goog.math.Long.fromBits(0,0),a1,b1);
       var U=$hs_touchzh(k,Y);
       var X=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(8,0));
       var W=$hs_int2Wordzh(X);
       var T=$hs_narrow8Wordzh(W);
       var V=s.add(goog.math.Long.fromBits(2,0));
       var S=$hs_plusAddrzh(j,V);
       var R=$hs_writeWord8OffAddrzh(S,goog.math.Long.fromBits(0,0),T,U);
       var O=$hs_touchzh(k,R);
       var Q=$hs_int2Wordzh(E);
       var N=$hs_narrow8Wordzh(Q);
       var P=s.add(goog.math.Long.fromBits(3,0));
       var M=$hs_plusAddrzh(j,P);
       var L=$hs_writeWord8OffAddrzh(M,goog.math.Long.fromBits(0,0),N,O);
       var K=$hs_touchzh(k,L);
       var J=s.add(goog.math.Long.fromBits(4,0));
       var I=r.add(goog.math.Long.fromBits(1,0));
       q.J(I,J,K);break;
      case 2:
       var k1=E.lessThanOrEqual(goog.math.Long.fromBits(57343,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(k1.g){
       case 1:
	var M1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(24,0));
	var L1=$hs_int2Wordzh(M1);
	var K1=$hs_narrow8Wordzh(L1);
	var J1=$hs_plusAddrzh(j,s);
	var I1=$hs_writeWord8OffAddrzh(J1,goog.math.Long.fromBits(0,0),K1,F);
	var E1=$hs_touchzh(k,I1);
	var H1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(16,0));
	var G1=$hs_int2Wordzh(H1);
	var D1=$hs_narrow8Wordzh(G1);
	var F1=s.add(goog.math.Long.fromBits(1,0));
	var C1=$hs_plusAddrzh(j,F1);
	var B1=$hs_writeWord8OffAddrzh(C1,goog.math.Long.fromBits(0,0),D1,E1);
	var x1=$hs_touchzh(k,B1);
	var A1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(8,0));
	var z1=$hs_int2Wordzh(A1);
	var w1=$hs_narrow8Wordzh(z1);
	var y1=s.add(goog.math.Long.fromBits(2,0));
	var v1=$hs_plusAddrzh(j,y1);
	var u1=$hs_writeWord8OffAddrzh(v1,goog.math.Long.fromBits(0,0),w1,x1);
	var r1=$hs_touchzh(k,u1);
	var t1=$hs_int2Wordzh(E);
	var q1=$hs_narrow8Wordzh(t1);
	var s1=s.add(goog.math.Long.fromBits(3,0));
	var p1=$hs_plusAddrzh(j,s1);
	var o1=$hs_writeWord8OffAddrzh(p1,goog.math.Long.fromBits(0,0),q1,r1);
	var n1=$hs_touchzh(k,o1);
	var m1=s.add(goog.math.Long.fromBits(4,0));
	var l1=r.add(goog.math.Long.fromBits(1,0));
	q.J(l1,m1,n1);break;
       case 2:
	$r([F,C]);break;
       }break;
      }
     },[r,s,E,j,k,C,F,q],"$w$j");
     var N1=goog.math.Long.fromBits(55296,0).lessThanOrEqual(E)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(N1.g){
     case 1:
      D.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var O1=E.lessThanOrEqual(goog.math.Long.fromBits(56319,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(O1.g){
      case 1:
       D.J($$GHCziPrim_realWorldzh);break;
      case 2:
       $r([F,C]);break;
      }break;
     }break;
    case 2:
     var P1=$d(1,[j,k,l,m,n,s],"sat");
     var Q1=$t(function(){
      var R1=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(R1.g){
      case 1:
       $R(1,[a,b,c,d,r,f],"Buffer");break;
      case 2:
       $A(p);break;
      }
     },[a,b,c,d,p,r,f],"sat");
     var S1=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,Q1,P1],"sat");
     $r([t,S1]);break;
    }break;
   case 2:
    var U1=$d(1,[j,k,l,m,n,s],"sat");
    var V1=$t(function(){
     var W1=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(W1.g){
     case 1:
      $R(1,[a,b,c,d,r,f],"Buffer");break;
     case 2:
      $A(p);break;
     }
    },[a,b,c,d,p,r,f],"sat");
    var X1=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,V1,U1],"sat");
    $r([t,X1]);break;
   }
  },[a,b,c,d,p,f,m,j,k,l,n],"$wa6");
  q.J(e,o,h);
 },[a,b,c,d,f,e,h]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32be2=$f(3,function(Y1,Z1,a2){
 $M(Y1,function(b2){
  var c2=b2.v[0],d2=b2.v[1],e2=b2.v[2],f2=b2.v[3],g2=b2.v[4],h2=b2.v[5];
  $$GHCziIOziEncodingziUTF32_zdwa1.J(c2,d2,e2,f2,g2,h2,Z1,a2);
 },[Z1,a2]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_zdwa4=$f(8,function(l2,m2,n2,o2,p2,q2,r2,s2){
 $M(r2,function(t2){
  var u2=t2.v[0],v2=t2.v[1],w2=t2.v[2],x2=t2.v[3],y2=t2.v[4],z2=t2.v[5];
  var A2=$d(1,[l2,m2,n2,o2,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl2");
  var B2=$f(3,function(C2,D2,E2){
   var F2=C2.greaterThanOrEqual(q2)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(F2.g){
   case 1:
    var e4=x2.subtract(D2);
    var G2=e4.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(G2.g){
    case 1:
     var H2=$hs_readWideCharOffAddrzh(l2,C2,E2);
     var I2=H2[0],J2=H2[1];
     var Q2=$hs_touchzh(m2,I2);
     var P2=$hs_ordzh(J2);
     var K2=$t(function(){
      var L2=C2.equals(q2)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(L2.g){
      case 1:
       $R(1,[l2,m2,n2,o2,C2,q2],"Buffer");break;
      case 2:
       $A(A2);break;
      }
     },[l2,m2,n2,o2,A2,C2,q2],"a1");
     var M2=$d(1,[u2,v2,w2,x2,y2,D2],"a2");
     var N2=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,K2,M2],"lvl3");
     var O2=$f(1,function(R2){
      var S2=goog.math.Long.fromBits(56320,0).lessThanOrEqual(P2)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(S2.g){
      case 1:
       var u3=$hs_int2Wordzh(P2);
       var t3=$hs_narrow8Wordzh(u3);
       var s3=$hs_plusAddrzh(u2,D2);
       var r3=$hs_writeWord8OffAddrzh(s3,goog.math.Long.fromBits(0,0),t3,Q2);
       var n3=$hs_touchzh(v2,r3);
       var q3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(8,0));
       var p3=$hs_int2Wordzh(q3);
       var m3=$hs_narrow8Wordzh(p3);
       var o3=D2.add(goog.math.Long.fromBits(1,0));
       var l3=$hs_plusAddrzh(u2,o3);
       var k3=$hs_writeWord8OffAddrzh(l3,goog.math.Long.fromBits(0,0),m3,n3);
       var g3=$hs_touchzh(v2,k3);
       var j3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(16,0));
       var i3=$hs_int2Wordzh(j3);
       var f3=$hs_narrow8Wordzh(i3);
       var h3=D2.add(goog.math.Long.fromBits(2,0));
       var e3=$hs_plusAddrzh(u2,h3);
       var d3=$hs_writeWord8OffAddrzh(e3,goog.math.Long.fromBits(0,0),f3,g3);
       var Z2=$hs_touchzh(v2,d3);
       var c3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(24,0));
       var b3=$hs_int2Wordzh(c3);
       var Y2=$hs_narrow8Wordzh(b3);
       var a3=D2.add(goog.math.Long.fromBits(3,0));
       var X2=$hs_plusAddrzh(u2,a3);
       var W2=$hs_writeWord8OffAddrzh(X2,goog.math.Long.fromBits(0,0),Y2,Z2);
       var V2=$hs_touchzh(v2,W2);
       var U2=D2.add(goog.math.Long.fromBits(4,0));
       var T2=C2.add(goog.math.Long.fromBits(1,0));
       B2.J(T2,U2,V2);break;
      case 2:
       var v3=P2.lessThanOrEqual(goog.math.Long.fromBits(57343,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(v3.g){
       case 1:
	var X3=$hs_int2Wordzh(P2);
	var W3=$hs_narrow8Wordzh(X3);
	var V3=$hs_plusAddrzh(u2,D2);
	var U3=$hs_writeWord8OffAddrzh(V3,goog.math.Long.fromBits(0,0),W3,Q2);
	var Q3=$hs_touchzh(v2,U3);
	var T3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(8,0));
	var S3=$hs_int2Wordzh(T3);
	var P3=$hs_narrow8Wordzh(S3);
	var R3=D2.add(goog.math.Long.fromBits(1,0));
	var O3=$hs_plusAddrzh(u2,R3);
	var N3=$hs_writeWord8OffAddrzh(O3,goog.math.Long.fromBits(0,0),P3,Q3);
	var J3=$hs_touchzh(v2,N3);
	var M3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(16,0));
	var L3=$hs_int2Wordzh(M3);
	var I3=$hs_narrow8Wordzh(L3);
	var K3=D2.add(goog.math.Long.fromBits(2,0));
	var H3=$hs_plusAddrzh(u2,K3);
	var G3=$hs_writeWord8OffAddrzh(H3,goog.math.Long.fromBits(0,0),I3,J3);
	var C3=$hs_touchzh(v2,G3);
	var F3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(24,0));
	var E3=$hs_int2Wordzh(F3);
	var B3=$hs_narrow8Wordzh(E3);
	var D3=D2.add(goog.math.Long.fromBits(3,0));
	var A3=$hs_plusAddrzh(u2,D3);
	var z3=$hs_writeWord8OffAddrzh(A3,goog.math.Long.fromBits(0,0),B3,C3);
	var y3=$hs_touchzh(v2,z3);
	var x3=D2.add(goog.math.Long.fromBits(4,0));
	var w3=C2.add(goog.math.Long.fromBits(1,0));
	B2.J(w3,x3,y3);break;
       case 2:
	$r([Q2,N2]);break;
       }break;
      }
     },[C2,D2,P2,u2,v2,N2,Q2,B2],"$w$j");
     var Y3=goog.math.Long.fromBits(55296,0).lessThanOrEqual(P2)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Y3.g){
     case 1:
      O2.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var Z3=P2.lessThanOrEqual(goog.math.Long.fromBits(56319,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Z3.g){
      case 1:
       O2.J($$GHCziPrim_realWorldzh);break;
      case 2:
       $r([Q2,N2]);break;
      }break;
     }break;
    case 2:
     var a4=$d(1,[u2,v2,w2,x2,y2,D2],"sat");
     var b4=$t(function(){
      var c4=C2.equals(q2)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(c4.g){
      case 1:
       $R(1,[l2,m2,n2,o2,C2,q2],"Buffer");break;
      case 2:
       $A(A2);break;
      }
     },[l2,m2,n2,o2,A2,C2,q2],"sat");
     var d4=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,b4,a4],"sat");
     $r([E2,d4]);break;
    }break;
   case 2:
    var f4=$d(1,[u2,v2,w2,x2,y2,D2],"sat");
    var g4=$t(function(){
     var h4=C2.equals(q2)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(h4.g){
     case 1:
      $R(1,[l2,m2,n2,o2,C2,q2],"Buffer");break;
     case 2:
      $A(A2);break;
     }
    },[l2,m2,n2,o2,A2,C2,q2],"sat");
    var i4=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,g4,f4],"sat");
    $r([E2,i4]);break;
   }
  },[l2,m2,n2,o2,A2,q2,x2,u2,v2,w2,y2],"$wa6");
  B2.J(p2,z2,s2);
 },[l2,m2,n2,o2,q2,p2,s2]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32le2=$f(3,function(j4,k4,l4){
 $M(j4,function(m4){
  var n4=m4.v[0],o4=m4.v[1],p4=m4.v[2],q4=m4.v[3],r4=m4.v[4],s4=m4.v[5];
  $$GHCziIOziEncodingziUTF32_zdwa4.J(n4,o4,p4,q4,r4,s4,k4,l4);
 },[k4,l4]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_zdwa=$f(9,function(t4,u4,v4,w4,x4,y4,z4,A4,B4){
 var C4=$hs_readMutVarzh(t4,B4);
 var D4=C4[0],E4=C4[1];
 $M(E4,function(F4){
  switch(F4.g){
  case 1:
   var i5=y4.subtract(A4);
   var G4=i5.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(G4.g){
   case 1:
    var f5=$hs_writeMutVarzh(t4,$$GHCziTypes_True,D4);
    var e5=$hs_plusAddrzh(v4,A4);
    var d5=$hs_writeWord8OffAddrzh(e5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),f5);
    var b5=$hs_touchzh(w4,d5);
    var c5=A4.add(goog.math.Long.fromBits(1,0));
    var a5=$hs_plusAddrzh(v4,c5);
    var Z4=$hs_writeWord8OffAddrzh(a5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),b5);
    var X4=$hs_touchzh(w4,Z4);
    var Y4=A4.add(goog.math.Long.fromBits(2,0));
    var W4=$hs_plusAddrzh(v4,Y4);
    var V4=$hs_writeWord8OffAddrzh(W4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(254,0),X4);
    var T4=$hs_touchzh(w4,V4);
    var U4=A4.add(goog.math.Long.fromBits(3,0));
    var S4=$hs_plusAddrzh(v4,U4);
    var R4=$hs_writeWord8OffAddrzh(S4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(255,0),T4);
    var Q4=$hs_touchzh(w4,R4);
    $M(u4,function(H4){
     var I4=H4.v[0],J4=H4.v[1],K4=H4.v[2],L4=H4.v[3],M4=H4.v[4],N4=H4.v[5];
     var P4=A4.add(goog.math.Long.fromBits(4,0));
     var O4=$d(1,[v4,w4,x4,y4,z4,P4],"sat");
     $$GHCziIOziEncodingziUTF32_zdwa1.J(I4,J4,K4,L4,M4,N4,O4,Q4);
    },[y4,A4,v4,w4,x4,z4,Q4]);break;
   case 2:
    var g5=$d(1,[v4,w4,x4,y4,z4,A4],"sat");
    var h5=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,u4,g5],"sat");
    $r([D4,h5]);break;
   }break;
  case 2:
   $M(u4,function(j5){
    var k5=j5.v[0],l5=j5.v[1],m5=j5.v[2],n5=j5.v[3],o5=j5.v[4],p5=j5.v[5];
    var q5=$d(1,[v4,w4,x4,y4,z4,A4],"sat");
    $$GHCziIOziEncodingziUTF32_zdwa1.J(k5,l5,m5,n5,o5,p5,q5,D4);
   },[y4,A4,D4,v4,w4,x4,z4]);break;
  }
 },[t4,y4,A4,D4,v4,w4,u4,x4,z4]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_zdwa3=$f(8,function(F5,G5,H5,I5,J5,K5,L5,M5){
 $M(L5,function(N5){
  var O5=N5.v[0],P5=N5.v[1],Q5=N5.v[2],R5=N5.v[3],S5=N5.v[4],T5=N5.v[5];
  var U5=$d(1,[F5,G5,H5,I5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl2");
  var V5=$f(3,function(W5,X5,Y5){
   var Z5=X5.greaterThanOrEqual(R5)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Z5.g){
   case 1:
    var k7=K5.subtract(W5);
    var a6=k7.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(a6.g){
    case 1:
     var f7=$hs_plusAddrzh(F5,W5);
     var b6=$hs_readWord8OffAddrzh(f7,goog.math.Long.fromBits(0,0),Y5);
     var c6=b6[0],d6=b6[1];
     var d7=$hs_touchzh(G5,c6);
     var e7=W5.add(goog.math.Long.fromBits(1,0));
     var c7=$hs_plusAddrzh(F5,e7);
     var e6=$hs_readWord8OffAddrzh(c7,goog.math.Long.fromBits(0,0),d7);
     var f6=e6[0],g6=e6[1];
     var a7=$hs_touchzh(G5,f6);
     var b7=W5.add(goog.math.Long.fromBits(2,0));
     var Z6=$hs_plusAddrzh(F5,b7);
     var h6=$hs_readWord8OffAddrzh(Z6,goog.math.Long.fromBits(0,0),a7);
     var i6=h6[0],j6=h6[1];
     var X6=$hs_touchzh(G5,i6);
     var Y6=W5.add(goog.math.Long.fromBits(3,0));
     var W6=$hs_plusAddrzh(F5,Y6);
     var k6=$hs_readWord8OffAddrzh(W6,goog.math.Long.fromBits(0,0),X6);
     var l6=k6[0],m6=k6[1];
     var q6=$hs_touchzh(G5,l6);
     var O6=$hs_word2Intzh(m6);
     var V6=$hs_word2Intzh(j6);
     var Q6=$hs_uncheckedIShiftLzh(V6,goog.math.Long.fromBits(8,0));
     var U6=$hs_word2Intzh(g6);
     var S6=$hs_uncheckedIShiftLzh(U6,goog.math.Long.fromBits(16,0));
     var T6=$hs_word2Intzh(d6);
     var R6=$hs_uncheckedIShiftLzh(T6,goog.math.Long.fromBits(24,0));
     var P6=R6.add(S6);
     var N6=P6.add(Q6);
     var M6=N6.add(O6);
     var o6=$hs_chrzh(M6);
     var p6=$hs_ordzh(o6);
     var n6=$f(1,function(r6){
      var s6=p6.greaterThan(goog.math.Long.fromBits(57343,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(s6.g){
      case 1:
       var t6=$d(1,[O5,P5,Q5,R5,S5,X5],"sat");
       var u6=$t(function(){
	var v6=W5.equals(K5)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(v6.g){
	case 1:
	 $R(1,[F5,G5,H5,I5,W5,K5],"Buffer");break;
	case 2:
	 $A(U5);break;
	}
       },[F5,G5,H5,I5,U5,K5,W5],"sat");
       var w6=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,u6,t6],"sat");
       $r([q6,w6]);break;
      case 2:
       var x6=p6.lessThanOrEqual(goog.math.Long.fromBits(1114111,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(x6.g){
       case 1:
	var y6=$d(1,[O5,P5,Q5,R5,S5,X5],"sat");
	var z6=$t(function(){
	 var A6=W5.equals(K5)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(A6.g){
	 case 1:
	  $R(1,[F5,G5,H5,I5,W5,K5],"Buffer");break;
	 case 2:
	  $A(U5);break;
	 }
	},[F5,G5,H5,I5,U5,K5,W5],"sat");
	var B6=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,z6,y6],"sat");
	$r([q6,B6]);break;
       case 2:
	var F6=$hs_writeWideCharOffAddrzh(O5,X5,o6,q6);
	var E6=$hs_touchzh(P5,F6);
	var D6=X5.add(goog.math.Long.fromBits(1,0));
	var C6=W5.add(goog.math.Long.fromBits(4,0));
	V5.J(C6,D6,E6);break;
       }break;
      }
     },[F5,G5,H5,I5,U5,X5,R5,K5,W5,o6,p6,q6,O5,P5,Q5,S5,V5],"$w$j");
     var G6=p6.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(G6.g){
     case 1:
      n6.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var H6=p6.lessThan(goog.math.Long.fromBits(55296,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(H6.g){
      case 1:
       n6.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var L6=$hs_writeWideCharOffAddrzh(O5,X5,o6,q6);
       var K6=$hs_touchzh(P5,L6);
       var J6=X5.add(goog.math.Long.fromBits(1,0));
       var I6=W5.add(goog.math.Long.fromBits(4,0));
       V5.J(I6,J6,K6);break;
      }break;
     }break;
    case 2:
     var g7=$d(1,[O5,P5,Q5,R5,S5,X5],"sat");
     var h7=$t(function(){
      var i7=W5.equals(K5)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(i7.g){
      case 1:
       $R(1,[F5,G5,H5,I5,W5,K5],"Buffer");break;
      case 2:
       $A(U5);break;
      }
     },[F5,G5,H5,I5,U5,K5,W5],"sat");
     var j7=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,h7,g7],"sat");
     $r([Y5,j7]);break;
    }break;
   case 2:
    var l7=$d(1,[O5,P5,Q5,R5,S5,X5],"sat");
    var m7=$t(function(){
     var n7=W5.equals(K5)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(n7.g){
     case 1:
      $R(1,[F5,G5,H5,I5,W5,K5],"Buffer");break;
     case 2:
      $A(U5);break;
     }
    },[F5,G5,H5,I5,U5,K5,W5],"sat");
    var o7=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,m7,l7],"sat");
    $r([Y5,o7]);break;
   }
  },[F5,G5,H5,I5,U5,R5,K5,O5,P5,Q5,S5],"$wa6");
  V5.J(J5,T5,M5);
 },[F5,G5,H5,I5,K5,J5,M5]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32be4=$f(3,function(p7,q7,r7){
 $M(p7,function(s7){
  var t7=s7.v[0],u7=s7.v[1],v7=s7.v[2],w7=s7.v[3],x7=s7.v[4],y7=s7.v[5];
  $$GHCziIOziEncodingziUTF32_zdwa3.J(t7,u7,v7,w7,x7,y7,q7,r7);
 },[q7,r7]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32be5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF-32BE");
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF1=$f(1,function(z7){
 $r([z7,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32be3=$f(2,function(A7,B7){
 $r([B7,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32be1=$f(2,function(j2,k2){
 $$GHCziIOziEncodingziUTF32_mkUTF32be3.J(j2,k2);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32be=$f(1,function(C7){
 var D7=$f(1,function(E7){
  var F7=$f(3,function(i2,j2,k2){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(C7,i2,j2,k2);
  },[C7],"sat");
  var G7=$d(1,[$$GHCziIOziEncodingziUTF32_mkUTF32be2,F7,$$GHCziIOziEncodingziUTF32_mkUTF1,$$GHCziIOziEncodingziUTF32_mkUTF1,$$GHCziIOziEncodingziUTF32_mkUTF32be1],"sat");
  $r([E7,G7]);
 },[C7],"sat");
 var H7=$f(1,function(I7){
  var J7=$f(3,function(i2,j2,k2){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(C7,i2,j2,k2);
  },[C7],"sat");
  var K7=$d(1,[$$GHCziIOziEncodingziUTF32_mkUTF32be4,J7,$$GHCziIOziEncodingziUTF32_mkUTF1,$$GHCziIOziEncodingziUTF32_mkUTF1,$$GHCziIOziEncodingziUTF32_mkUTF32be3],"sat");
  $r([I7,K7]);
 },[C7],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF32_mkUTF32be5,H7,D7],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF32.hs:148:1");
var $$GHCziIOziEncodingziUTF32_zdwa5=$f(8,function(b8,c8,d8,e8,f8,g8,h8,i8){
 $M(h8,function(j8){
  var k8=j8.v[0],l8=j8.v[1],m8=j8.v[2],n8=j8.v[3],o8=j8.v[4],p8=j8.v[5];
  var q8=$d(1,[b8,c8,d8,e8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl2");
  var r8=$f(3,function(s8,t8,u8){
   var v8=t8.greaterThanOrEqual(n8)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(v8.g){
   case 1:
    var G9=g8.subtract(s8);
    var w8=G9.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(w8.g){
    case 1:
     var B9=$hs_plusAddrzh(b8,s8);
     var x8=$hs_readWord8OffAddrzh(B9,goog.math.Long.fromBits(0,0),u8);
     var y8=x8[0],z8=x8[1];
     var z9=$hs_touchzh(c8,y8);
     var A9=s8.add(goog.math.Long.fromBits(1,0));
     var y9=$hs_plusAddrzh(b8,A9);
     var A8=$hs_readWord8OffAddrzh(y9,goog.math.Long.fromBits(0,0),z9);
     var B8=A8[0],C8=A8[1];
     var w9=$hs_touchzh(c8,B8);
     var x9=s8.add(goog.math.Long.fromBits(2,0));
     var v9=$hs_plusAddrzh(b8,x9);
     var D8=$hs_readWord8OffAddrzh(v9,goog.math.Long.fromBits(0,0),w9);
     var E8=D8[0],F8=D8[1];
     var t9=$hs_touchzh(c8,E8);
     var u9=s8.add(goog.math.Long.fromBits(3,0));
     var s9=$hs_plusAddrzh(b8,u9);
     var G8=$hs_readWord8OffAddrzh(s9,goog.math.Long.fromBits(0,0),t9);
     var H8=G8[0],I8=G8[1];
     var M8=$hs_touchzh(c8,H8);
     var k9=$hs_word2Intzh(z8);
     var r9=$hs_word2Intzh(C8);
     var m9=$hs_uncheckedIShiftLzh(r9,goog.math.Long.fromBits(8,0));
     var q9=$hs_word2Intzh(F8);
     var o9=$hs_uncheckedIShiftLzh(q9,goog.math.Long.fromBits(16,0));
     var p9=$hs_word2Intzh(I8);
     var n9=$hs_uncheckedIShiftLzh(p9,goog.math.Long.fromBits(24,0));
     var l9=n9.add(o9);
     var j9=l9.add(m9);
     var i9=j9.add(k9);
     var K8=$hs_chrzh(i9);
     var L8=$hs_ordzh(K8);
     var J8=$f(1,function(N8){
      var O8=L8.greaterThan(goog.math.Long.fromBits(57343,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(O8.g){
      case 1:
       var P8=$d(1,[k8,l8,m8,n8,o8,t8],"sat");
       var Q8=$t(function(){
	var R8=s8.equals(g8)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(R8.g){
	case 1:
	 $R(1,[b8,c8,d8,e8,s8,g8],"Buffer");break;
	case 2:
	 $A(q8);break;
	}
       },[b8,c8,d8,e8,q8,g8,s8],"sat");
       var S8=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,Q8,P8],"sat");
       $r([M8,S8]);break;
      case 2:
       var T8=L8.lessThanOrEqual(goog.math.Long.fromBits(1114111,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(T8.g){
       case 1:
	var U8=$d(1,[k8,l8,m8,n8,o8,t8],"sat");
	var V8=$t(function(){
	 var W8=s8.equals(g8)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(W8.g){
	 case 1:
	  $R(1,[b8,c8,d8,e8,s8,g8],"Buffer");break;
	 case 2:
	  $A(q8);break;
	 }
	},[b8,c8,d8,e8,q8,g8,s8],"sat");
	var X8=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,V8,U8],"sat");
	$r([M8,X8]);break;
       case 2:
	var b9=$hs_writeWideCharOffAddrzh(k8,t8,K8,M8);
	var a9=$hs_touchzh(l8,b9);
	var Z8=t8.add(goog.math.Long.fromBits(1,0));
	var Y8=s8.add(goog.math.Long.fromBits(4,0));
	r8.J(Y8,Z8,a9);break;
       }break;
      }
     },[b8,c8,d8,e8,q8,t8,n8,g8,s8,K8,L8,M8,k8,l8,m8,o8,r8],"$w$j");
     var c9=L8.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(c9.g){
     case 1:
      J8.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var d9=L8.lessThan(goog.math.Long.fromBits(55296,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(d9.g){
      case 1:
       J8.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var h9=$hs_writeWideCharOffAddrzh(k8,t8,K8,M8);
       var g9=$hs_touchzh(l8,h9);
       var f9=t8.add(goog.math.Long.fromBits(1,0));
       var e9=s8.add(goog.math.Long.fromBits(4,0));
       r8.J(e9,f9,g9);break;
      }break;
     }break;
    case 2:
     var C9=$d(1,[k8,l8,m8,n8,o8,t8],"sat");
     var D9=$t(function(){
      var E9=s8.equals(g8)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(E9.g){
      case 1:
       $R(1,[b8,c8,d8,e8,s8,g8],"Buffer");break;
      case 2:
       $A(q8);break;
      }
     },[b8,c8,d8,e8,q8,g8,s8],"sat");
     var F9=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,D9,C9],"sat");
     $r([u8,F9]);break;
    }break;
   case 2:
    var H9=$d(1,[k8,l8,m8,n8,o8,t8],"sat");
    var I9=$t(function(){
     var J9=s8.equals(g8)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(J9.g){
     case 1:
      $R(1,[b8,c8,d8,e8,s8,g8],"Buffer");break;
     case 2:
      $A(q8);break;
     }
    },[b8,c8,d8,e8,q8,g8,s8],"sat");
    var K9=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,I9,H9],"sat");
    $r([u8,K9]);break;
   }
  },[b8,c8,d8,e8,q8,n8,g8,k8,l8,m8,o8],"$wa6");
  r8.J(f8,p8,i8);
 },[b8,c8,d8,e8,g8,f8,i8]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32le4=$f(3,function(L9,M9,N9){
 $M(L9,function(O9){
  var P9=O9.v[0],Q9=O9.v[1],R9=O9.v[2],S9=O9.v[3],T9=O9.v[4],U9=O9.v[5];
  $$GHCziIOziEncodingziUTF32_zdwa5.J(P9,Q9,R9,S9,T9,U9,M9,N9);
 },[M9,N9]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_zdwa2=$f(9,function(V9,W9,X9,Y9,Z9,aa,ba,ca,da){
 var ea=$hs_readMutVarzh(V9,da);
 var fa=ea[0],ga=ea[1];
 $M(ga,function(ha){
  switch(ha.g){
  case 1:
   var ab=ba.subtract(aa);
   var ia=ab.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(ia.g){
   case 1:
    var Xa=$hs_plusAddrzh(W9,aa);
    var ja=$hs_readWord8OffAddrzh(Xa,goog.math.Long.fromBits(0,0),fa);
    var ka=ja[0],la=ja[1];
    var Va=$hs_touchzh(X9,ka);
    var Wa=aa.add(goog.math.Long.fromBits(1,0));
    var Ua=$hs_plusAddrzh(W9,Wa);
    var ma=$hs_readWord8OffAddrzh(Ua,goog.math.Long.fromBits(0,0),Va);
    var na=ma[0],oa=ma[1];
    var Sa=$hs_touchzh(X9,na);
    var Ta=aa.add(goog.math.Long.fromBits(2,0));
    var Ra=$hs_plusAddrzh(W9,Ta);
    var pa=$hs_readWord8OffAddrzh(Ra,goog.math.Long.fromBits(0,0),Sa);
    var qa=pa[0],ra=pa[1];
    var Pa=$hs_touchzh(X9,qa);
    var Qa=aa.add(goog.math.Long.fromBits(3,0));
    var Oa=$hs_plusAddrzh(W9,Qa);
    var sa=$hs_readWord8OffAddrzh(Oa,goog.math.Long.fromBits(0,0),Pa);
    var ta=sa[0],ua=sa[1];
    var wa=$hs_touchzh(X9,ta);
    var va=$f(1,function(xa){
     var ya=$hs_eqWordzh(la,goog.math.Long.fromBits(255,0));
     switch(ya.g){
     case 1:
      var za=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
      $$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,aa,ba,ca,za);break;
     case 2:
      var Aa=$hs_eqWordzh(oa,goog.math.Long.fromBits(254,0));
      switch(Aa.g){
      case 1:
       var Ba=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
       $$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,aa,ba,ca,Ba);break;
      case 2:
       var Ca=$hs_eqWordzh(ra,goog.math.Long.fromBits(0,0));
       switch(Ca.g){
       case 1:
	var Da=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
	$$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,aa,ba,ca,Da);break;
       case 2:
	var Ea=$hs_eqWordzh(ua,goog.math.Long.fromBits(0,0));
	switch(Ea.g){
	case 1:
	 var Fa=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
	 $$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,aa,ba,ca,Fa);break;
	case 2:
	 var Ha=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$b,wa);
	 var Ga=aa.add(goog.math.Long.fromBits(4,0));
	 $$GHCziIOziEncodingziUTF32_zdwa5.J(W9,X9,Y9,Z9,Ga,ba,ca,Ha);break;
	}break;
       }break;
      }break;
     }
    },[V9,ba,aa,W9,X9,la,wa,Y9,Z9,ca,oa,ra,ua],"$w$j");
    var Ia=$hs_eqWordzh(la,goog.math.Long.fromBits(0,0));
    switch(Ia.g){
    case 1:
     va.J($$GHCziPrim_realWorldzh);break;
    case 2:
     var Ja=$hs_eqWordzh(oa,goog.math.Long.fromBits(0,0));
     switch(Ja.g){
     case 1:
      va.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var Ka=$hs_eqWordzh(ra,goog.math.Long.fromBits(254,0));
      switch(Ka.g){
      case 1:
       va.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var La=$hs_eqWordzh(ua,goog.math.Long.fromBits(255,0));
       switch(La.g){
       case 1:
	va.J($$GHCziPrim_realWorldzh);break;
       case 2:
	var Na=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
	var Ma=aa.add(goog.math.Long.fromBits(4,0));
	$$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,Ma,ba,ca,Na);break;
       }break;
      }break;
     }break;
    }break;
   case 2:
    var Ya=$d(1,[W9,X9,Y9,Z9,aa,ba],"sat");
    var Za=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,Ya,ca],"sat");
    $r([fa,Za]);break;
   }break;
  case 2:
   var bb=ha.v[0];
   var cb=$d(1,[W9,X9,Y9,Z9,aa,ba],"sat");
   bb.J(cb,ca,fa);break;
  }
 },[V9,ba,aa,W9,fa,X9,Y9,Z9,ca]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF-32");
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32=$f(1,function(qb){
 var rb=$f(1,function(sb){
  var tb=$hs_newMutVarzh($$GHCziTypes_False,sb);
  var ub=tb[0],vb=tb[1];
  var wb=$f(2,function(xb,yb){
   var zb=$hs_writeMutVarzh(vb,xb,yb);
   $r([zb,$$GHCziTuple_Z0T]);
  },[vb],"sat");
  var Ab=$f(1,function(Bb){
   $r($hs_readMutVarzh(vb,Bb));
  },[vb],"sat");
  var Cb=$f(3,function(i2,j2,k2){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(qb,i2,j2,k2);
  },[qb],"sat");
  var Db=$f(3,function(Eb,Fb,Gb){
   $M(Fb,function(Hb){
    var Ib=Hb.v[0],Jb=Hb.v[1],Kb=Hb.v[2],Lb=Hb.v[3],Mb=Hb.v[4],Nb=Hb.v[5];
    $$GHCziIOziEncodingziUTF32_zdwa.J(vb,Eb,Ib,Jb,Kb,Lb,Mb,Nb,Gb);
   },[vb,Eb,Gb]);
  },[vb],"sat");
  var Ob=$d(1,[Db,Cb,$$GHCziIOziEncodingziUTF32_mkUTF1,Ab,wb],"sat");
  $r([ub,Ob]);
 },[qb],"sat");
 var Pb=$f(1,function(Qb){
  var Rb=$hs_newMutVarzh($$DataziMaybe_Nothing,Qb);
  var Sb=Rb[0],Tb=Rb[1];
  var Ub=$f(2,function(Vb,Wb){
   var Xb=$hs_writeMutVarzh(Tb,Vb,Wb);
   $r([Xb,$$GHCziTuple_Z0T]);
  },[Tb],"sat");
  var Yb=$f(1,function(Zb){
   $r($hs_readMutVarzh(Tb,Zb));
  },[Tb],"sat");
  var ac=$f(3,function(i2,j2,k2){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(qb,i2,j2,k2);
  },[qb],"sat");
  var bc=$f(3,function(cc,dc,ec){
   $M(cc,function(fc){
    var gc=fc.v[0],hc=fc.v[1],ic=fc.v[2],jc=fc.v[3],kc=fc.v[4],lc=fc.v[5];
    $$GHCziIOziEncodingziUTF32_zdwa2.J(Tb,gc,hc,ic,jc,kc,lc,dc,ec);
   },[Tb,dc,ec]);
  },[Tb],"sat");
  var mc=$d(1,[bc,ac,$$GHCziIOziEncodingziUTF32_mkUTF1,Yb,Ub],"sat");
  $r([Sb,mc]);
 },[qb],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF32_mkUTF2,Pb,rb],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF32.hs:60:1");
var $$GHCziIOziEncodingziUTF32_mkUTF32le5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF-32LE");
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32le3=$f(2,function(j2,k2){
 $$GHCziIOziEncodingziUTF32_mkUTF32be3.J(j2,k2);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32le1=$f(2,function(j2,k2){
 $$GHCziIOziEncodingziUTF32_mkUTF32be3.J(j2,k2);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_mkUTF32le=$f(1,function(nc){
 var oc=$f(1,function(pc){
  var qc=$f(3,function(i2,j2,k2){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(nc,i2,j2,k2);
  },[nc],"sat");
  var rc=$d(1,[$$GHCziIOziEncodingziUTF32_mkUTF32le2,qc,$$GHCziIOziEncodingziUTF32_mkUTF1,$$GHCziIOziEncodingziUTF32_mkUTF1,$$GHCziIOziEncodingziUTF32_mkUTF32le1],"sat");
  $r([pc,rc]);
 },[nc],"sat");
 var sc=$f(1,function(tc){
  var uc=$f(3,function(i2,j2,k2){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(nc,i2,j2,k2);
  },[nc],"sat");
  var vc=$d(1,[$$GHCziIOziEncodingziUTF32_mkUTF32le4,uc,$$GHCziIOziEncodingziUTF32_mkUTF1,$$GHCziIOziEncodingziUTF32_mkUTF1,$$GHCziIOziEncodingziUTF32_mkUTF32le3],"sat");
  $r([tc,vc]);
 },[nc],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF32_mkUTF32le5,sc,oc],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF32.hs:177:1");
var $$GHCziIOziEncodingziUTF32$a=$D(2,function(){
 $r([$$GHCziIOziEncodingziUTF32_mkUTF32be4]);
},"lvl");
var $$GHCziIOziEncodingziUTF32$b=$D(2,function(){
 $r([$$GHCziIOziEncodingziUTF32_mkUTF32le4]);
},"lvl1");
var $$GHCziIOziEncodingziUTF8_zdwa=$f(8,function(a,b,c,d,e,f,g,h){
 $M(g,function(i){
  var j=i.v[0],k=i.v[1],l=i.v[2],m=i.v[3],n=i.v[4],o=i.v[5];
  var p=$d(1,[a,b,c,d,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl1");
  var q=$f(3,function(r,s,t){
   var u=s.greaterThanOrEqual(m)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u.g){
   case 1:
    var v=r.greaterThanOrEqual(f)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v.g){
    case 1:
     var w=$hs_readWideCharOffAddrzh(a,r,t);
     var x=w[0],y=w[1];
     var q1=$hs_touchzh(b,x);
     var Q=$hs_ordzh(y);
     var z=Q.lessThanOrEqual(goog.math.Long.fromBits(127,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(z.g){
     case 1:
      var A=Q.lessThanOrEqual(goog.math.Long.fromBits(2047,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       var B=Q.lessThanOrEqual(goog.math.Long.fromBits(65535,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(B.g){
       case 1:
	var y1=m.subtract(s);
	var C=y1.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(C.g){
	case 1:
	 var t1=$hs_uncheckedIShiftRAzh(Q,goog.math.Long.fromBits(18,0));
	 var s1=t1.add(goog.math.Long.fromBits(240,0));
	 var r1=$hs_int2Wordzh(s1);
	 var p1=$hs_narrow8Wordzh(r1);
	 var o1=$hs_plusAddrzh(j,s);
	 var n1=$hs_writeWord8OffAddrzh(o1,goog.math.Long.fromBits(0,0),p1,q1);
	 var f1=$hs_touchzh(k,n1);
	 var m1=$hs_uncheckedIShiftRAzh(Q,goog.math.Long.fromBits(12,0));
	 var l1=$hs_int2Wordzh(m1);
	 var k1=l1.and(goog.math.Long.fromBits(63,0));
	 var j1=$hs_word2Intzh(k1);
	 var i1=j1.add(goog.math.Long.fromBits(128,0));
	 var h1=$hs_int2Wordzh(i1);
	 var e1=$hs_narrow8Wordzh(h1);
	 var g1=s.add(goog.math.Long.fromBits(1,0));
	 var d1=$hs_plusAddrzh(j,g1);
	 var c1=$hs_writeWord8OffAddrzh(d1,goog.math.Long.fromBits(0,0),e1,f1);
	 var U=$hs_touchzh(k,c1);
	 var b1=$hs_uncheckedIShiftRAzh(Q,goog.math.Long.fromBits(6,0));
	 var a1=$hs_int2Wordzh(b1);
	 var Z=a1.and(goog.math.Long.fromBits(63,0));
	 var Y=$hs_word2Intzh(Z);
	 var X=Y.add(goog.math.Long.fromBits(128,0));
	 var W=$hs_int2Wordzh(X);
	 var T=$hs_narrow8Wordzh(W);
	 var V=s.add(goog.math.Long.fromBits(2,0));
	 var S=$hs_plusAddrzh(j,V);
	 var R=$hs_writeWord8OffAddrzh(S,goog.math.Long.fromBits(0,0),T,U);
	 var J=$hs_touchzh(k,R);
	 var P=$hs_int2Wordzh(Q);
	 var O=P.and(goog.math.Long.fromBits(63,0));
	 var N=$hs_word2Intzh(O);
	 var M=N.add(goog.math.Long.fromBits(128,0));
	 var L=$hs_int2Wordzh(M);
	 var I=$hs_narrow8Wordzh(L);
	 var K=s.add(goog.math.Long.fromBits(3,0));
	 var H=$hs_plusAddrzh(j,K);
	 var G=$hs_writeWord8OffAddrzh(H,goog.math.Long.fromBits(0,0),I,J);
	 var F=$hs_touchzh(k,G);
	 var E=s.add(goog.math.Long.fromBits(4,0));
	 var D=r.add(goog.math.Long.fromBits(1,0));
	 q.J(D,E,F);break;
	case 2:
	 var u1=$d(1,[j,k,l,m,n,s],"sat");
	 var v1=$t(function(){
	  var w1=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(w1.g){
	  case 1:
	   $R(1,[a,b,c,d,r,f],"Buffer");break;
	  case 2:
	   $A(p);break;
	  }
	 },[a,b,c,d,p,r,f],"sat");
	 var x1=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,v1,u1],"sat");
	 $r([q1,x1]);break;
	}break;
       case 2:
	var z1=$t(function(){
	 var A1=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(A1.g){
	 case 1:
	  $R(1,[a,b,c,d,r,f],"Buffer");break;
	 case 2:
	  $A(p);break;
	 }
	},[a,b,c,d,p,r,f],"a1");
	var B1=$d(1,[j,k,l,m,n,s],"a2");
	var C1=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,z1,B1],"lvl2");
	var D1=$f(1,function(E1){
	 var F1=$f(1,function(G1){
	  var q2=m.subtract(s);
	  var H1=q2.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(H1.g){
	  case 1:
	   var l2=$hs_uncheckedIShiftRAzh(Q,goog.math.Long.fromBits(12,0));
	   var k2=l2.add(goog.math.Long.fromBits(224,0));
	   var j2=$hs_int2Wordzh(k2);
	   var i2=$hs_narrow8Wordzh(j2);
	   var h2=$hs_plusAddrzh(j,s);
	   var g2=$hs_writeWord8OffAddrzh(h2,goog.math.Long.fromBits(0,0),i2,q1);
	   var Y1=$hs_touchzh(k,g2);
	   var f2=$hs_uncheckedIShiftRAzh(Q,goog.math.Long.fromBits(6,0));
	   var e2=$hs_int2Wordzh(f2);
	   var d2=e2.and(goog.math.Long.fromBits(63,0));
	   var c2=$hs_word2Intzh(d2);
	   var b2=c2.add(goog.math.Long.fromBits(128,0));
	   var a2=$hs_int2Wordzh(b2);
	   var X1=$hs_narrow8Wordzh(a2);
	   var Z1=s.add(goog.math.Long.fromBits(1,0));
	   var W1=$hs_plusAddrzh(j,Z1);
	   var V1=$hs_writeWord8OffAddrzh(W1,goog.math.Long.fromBits(0,0),X1,Y1);
	   var O1=$hs_touchzh(k,V1);
	   var U1=$hs_int2Wordzh(Q);
	   var T1=U1.and(goog.math.Long.fromBits(63,0));
	   var S1=$hs_word2Intzh(T1);
	   var R1=S1.add(goog.math.Long.fromBits(128,0));
	   var Q1=$hs_int2Wordzh(R1);
	   var N1=$hs_narrow8Wordzh(Q1);
	   var P1=s.add(goog.math.Long.fromBits(2,0));
	   var M1=$hs_plusAddrzh(j,P1);
	   var L1=$hs_writeWord8OffAddrzh(M1,goog.math.Long.fromBits(0,0),N1,O1);
	   var K1=$hs_touchzh(k,L1);
	   var J1=s.add(goog.math.Long.fromBits(3,0));
	   var I1=r.add(goog.math.Long.fromBits(1,0));
	   q.J(I1,J1,K1);break;
	  case 2:
	   var m2=$d(1,[j,k,l,m,n,s],"sat");
	   var n2=$t(function(){
	    var o2=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(o2.g){
	    case 1:
	     $R(1,[a,b,c,d,r,f],"Buffer");break;
	    case 2:
	     $A(p);break;
	    }
	   },[a,b,c,d,p,r,f],"sat");
	   var p2=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,n2,m2],"sat");
	   $r([q1,p2]);break;
	  }
	 },[a,b,c,d,p,s,m,r,f,Q,j,q1,k,q,l,n],"$w$j1");
	 var r2=goog.math.Long.fromBits(56320,0).lessThanOrEqual(Q)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(r2.g){
	 case 1:
	  F1.J($$GHCziPrim_realWorldzh);break;
	 case 2:
	  var s2=Q.lessThanOrEqual(goog.math.Long.fromBits(57343,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(s2.g){
	  case 1:
	   F1.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   $r([q1,C1]);break;
	  }break;
	 }
	},[a,b,c,d,p,s,m,r,f,Q,j,q1,k,q,l,n,C1],"$w$j");
	var t2=goog.math.Long.fromBits(55296,0).lessThanOrEqual(Q)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(t2.g){
	case 1:
	 D1.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var u2=Q.lessThanOrEqual(goog.math.Long.fromBits(56319,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(u2.g){
	 case 1:
	  D1.J($$GHCziPrim_realWorldzh);break;
	 case 2:
	  $r([q1,C1]);break;
	 }break;
	}break;
       }break;
      case 2:
       var T2=m.subtract(s);
       var v2=T2.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(v2.g){
       case 1:
	var O2=$hs_uncheckedIShiftRAzh(Q,goog.math.Long.fromBits(6,0));
	var N2=O2.add(goog.math.Long.fromBits(192,0));
	var M2=$hs_int2Wordzh(N2);
	var L2=$hs_narrow8Wordzh(M2);
	var K2=$hs_plusAddrzh(j,s);
	var J2=$hs_writeWord8OffAddrzh(K2,goog.math.Long.fromBits(0,0),L2,q1);
	var C2=$hs_touchzh(k,J2);
	var I2=$hs_int2Wordzh(Q);
	var H2=I2.and(goog.math.Long.fromBits(63,0));
	var G2=$hs_word2Intzh(H2);
	var F2=G2.add(goog.math.Long.fromBits(128,0));
	var E2=$hs_int2Wordzh(F2);
	var B2=$hs_narrow8Wordzh(E2);
	var D2=s.add(goog.math.Long.fromBits(1,0));
	var A2=$hs_plusAddrzh(j,D2);
	var z2=$hs_writeWord8OffAddrzh(A2,goog.math.Long.fromBits(0,0),B2,C2);
	var y2=$hs_touchzh(k,z2);
	var x2=s.add(goog.math.Long.fromBits(2,0));
	var w2=r.add(goog.math.Long.fromBits(1,0));
	q.J(w2,x2,y2);break;
       case 2:
	var P2=$d(1,[j,k,l,m,n,s],"sat");
	var Q2=$t(function(){
	 var R2=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(R2.g){
	 case 1:
	  $R(1,[a,b,c,d,r,f],"Buffer");break;
	 case 2:
	  $A(p);break;
	 }
	},[a,b,c,d,p,r,f],"sat");
	var S2=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,Q2,P2],"sat");
	$r([q1,S2]);break;
       }break;
      }break;
     case 2:
      var a3=$hs_int2Wordzh(Q);
      var Z2=$hs_narrow8Wordzh(a3);
      var Y2=$hs_plusAddrzh(j,s);
      var X2=$hs_writeWord8OffAddrzh(Y2,goog.math.Long.fromBits(0,0),Z2,q1);
      var W2=$hs_touchzh(k,X2);
      var V2=s.add(goog.math.Long.fromBits(1,0));
      var U2=r.add(goog.math.Long.fromBits(1,0));
      q.J(U2,V2,W2);break;
     }break;
    case 2:
     var b3=$d(1,[j,k,l,m,n,s],"sat");
     var c3=$t(function(){
      var d3=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(d3.g){
      case 1:
       $R(1,[a,b,c,d,r,f],"Buffer");break;
      case 2:
       $A(p);break;
      }
     },[a,b,c,d,p,r,f],"sat");
     var e3=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,c3,b3],"sat");
     $r([t,e3]);break;
    }break;
   case 2:
    var f3=$d(1,[j,k,l,m,n,s],"sat");
    var g3=$t(function(){
     var h3=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(h3.g){
     case 1:
      $R(1,[a,b,c,d,r,f],"Buffer");break;
     case 2:
      $A(p);break;
     }
    },[a,b,c,d,p,r,f],"sat");
    var i3=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,g3,f3],"sat");
    $r([t,i3]);break;
   }
  },[a,b,c,d,p,m,f,j,k,l,n],"$wa2");
  q.J(e,o,h);
 },[a,b,c,d,f,e,h]);
},[],"in `base:GHC.IO.Encoding.UTF8'");
var $$GHCziIOziEncodingziUTF8_mkUTF2=$f(3,function(j3,k3,l3){
 $M(j3,function(m3){
  var n3=m3.v[0],o3=m3.v[1],p3=m3.v[2],q3=m3.v[3],r3=m3.v[4],s3=m3.v[5];
  $$GHCziIOziEncodingziUTF8_zdwa.J(n3,o3,p3,q3,r3,s3,k3,l3);
 },[k3,l3]);
},[],"in `base:GHC.IO.Encoding.UTF8'");
var $$GHCziIOziEncodingziUTF8_zdwa1=$f(8,function(t3,u3,v3,w3,x3,y3,z3,A3){
 $M(z3,function(B3){
  var C3=B3.v[0],D3=B3.v[1],E3=B3.v[2],F3=B3.v[3],G3=B3.v[4],H3=B3.v[5];
  var I3=$d(1,[t3,u3,v3,w3,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl1");
  var J3=$f(3,function(K3,L3,M3){
   var N3=L3.greaterThanOrEqual(F3)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(N3.g){
   case 1:
    var O3=$t(function(){
     var P3=K3.equals(y3)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(P3.g){
     case 1:
      $R(1,[t3,u3,v3,w3,K3,y3],"Buffer");break;
     case 2:
      $A(I3);break;
     }
    },[t3,u3,v3,w3,I3,K3,y3],"a");
    var Q3=$d(1,[C3,D3,E3,F3,G3,L3],"a1");
    var R3=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,O3,Q3],"lvl2");
    var S3=K3.greaterThanOrEqual(y3)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(S3.g){
    case 1:
     var za=$hs_plusAddrzh(t3,K3);
     var T3=$hs_readWord8OffAddrzh(za,goog.math.Long.fromBits(0,0),M3);
     var U3=T3[0],V3=T3[1];
     var c4=$hs_touchzh(u3,U3);
     var W3=$hs_leWordzh(V3,goog.math.Long.fromBits(127,0));
     switch(W3.g){
     case 1:
      var X3=$t(function(){
       var Y3=K3.equals(y3)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Y3.g){
       case 1:
	$R(1,[t3,u3,v3,w3,K3,y3],"Buffer");break;
       case 2:
	$A(I3);break;
       }
      },[t3,u3,v3,w3,I3,K3,y3],"a2");
      var Z3=$d(1,[C3,D3,E3,F3,G3,L3],"a3");
      var a4=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,X3,Z3],"lvl3");
      var b4=$f(1,function(d4){
       var e4=$f(1,function(f4){
	var g4=$hs_geWordzh(V3,goog.math.Long.fromBits(240,0));
	switch(g4.g){
	case 1:
	 $r([c4,a4]);break;
	case 2:
	 var h4=y3.subtract(K3);
	 switch(h4.toString()){
	 case "1":
	  $r([c4,R3]);break;
	 case "2":
	  var I6=K3.add(goog.math.Long.fromBits(1,0));
	  var H6=$hs_plusAddrzh(t3,I6);
	  var l6=$hs_readWord8OffAddrzh(H6,goog.math.Long.fromBits(0,0),c4);
	  var m6=l6[0],n6=l6[1];
	  var q6=$hs_touchzh(u3,m6);
	  var o6=$t(function(){
	   $r($hs_leWordzh(n6,goog.math.Long.fromBits(191,0)));
	  },[n6],"lvl4");
	  var p6=$f(1,function(r6){
	   var s6=$hs_geWordzh(V3,goog.math.Long.fromBits(241,0));
	   switch(s6.g){
	   case 1:
	    var t6=$hs_eqWordzh(V3,goog.math.Long.fromBits(244,0));
	    switch(t6.g){
	    case 1:
	     $r([q6,a4]);break;
	    case 2:
	     var u6=$hs_geWordzh(n6,goog.math.Long.fromBits(128,0));
	     switch(u6.g){
	     case 1:
	      $r([q6,a4]);break;
	     case 2:
	      var v6=$hs_leWordzh(n6,goog.math.Long.fromBits(143,0));
	      switch(v6.g){
	      case 1:
	       $r([q6,a4]);break;
	      case 2:
	       $r([q6,R3]);break;
	      }break;
	     }break;
	    }break;
	   case 2:
	    var w6=$hs_leWordzh(V3,goog.math.Long.fromBits(243,0));
	    switch(w6.g){
	    case 1:
	     var x6=$hs_eqWordzh(V3,goog.math.Long.fromBits(244,0));
	     switch(x6.g){
	     case 1:
	      $r([q6,a4]);break;
	     case 2:
	      var y6=$hs_geWordzh(n6,goog.math.Long.fromBits(128,0));
	      switch(y6.g){
	      case 1:
	       $r([q6,a4]);break;
	      case 2:
	       var z6=$hs_leWordzh(n6,goog.math.Long.fromBits(143,0));
	       switch(z6.g){
	       case 1:
		$r([q6,a4]);break;
	       case 2:
		$r([q6,R3]);break;
	       }break;
	      }break;
	     }break;
	    case 2:
	     var A6=$hs_geWordzh(n6,goog.math.Long.fromBits(128,0));
	     switch(A6.g){
	     case 1:
	      $r([q6,a4]);break;
	     case 2:
	      $M(o6,function(B6){
	       switch(B6.g){
	       case 1:
		var C6=$hs_eqWordzh(V3,goog.math.Long.fromBits(244,0));
		switch(C6.g){
		case 1:
		 $r([q6,a4]);break;
		case 2:
		 var D6=$hs_leWordzh(n6,goog.math.Long.fromBits(143,0));
		 switch(D6.g){
		 case 1:
		  $r([q6,a4]);break;
		 case 2:
		  $r([q6,R3]);break;
		 }break;
		}break;
	       case 2:
		$r([q6,R3]);break;
	       }
	      },[R3,V3,a4,n6,q6]);break;
	     }break;
	    }break;
	   }
	  },[R3,V3,a4,n6,o6,q6],"$w$j2");
	  var E6=$hs_eqWordzh(V3,goog.math.Long.fromBits(240,0));
	  switch(E6.g){
	  case 1:
	   p6.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var F6=$hs_geWordzh(n6,goog.math.Long.fromBits(144,0));
	   switch(F6.g){
	   case 1:
	    p6.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    $M(o6,function(G6){
	     switch(G6.g){
	     case 1:
	      p6.J($$GHCziPrim_realWorldzh);break;
	     case 2:
	      $r([q6,R3]);break;
	     }
	    },[R3,V3,a4,n6,o6,q6,p6]);break;
	   }break;
	  }break;
	 case "3":
	  var s7=K3.add(goog.math.Long.fromBits(1,0));
	  var r7=$hs_plusAddrzh(t3,s7);
	  var J6=$hs_readWord8OffAddrzh(r7,goog.math.Long.fromBits(0,0),c4);
	  var K6=J6[0],L6=J6[1];
	  var p7=$hs_touchzh(u3,K6);
	  var q7=K3.add(goog.math.Long.fromBits(2,0));
	  var o7=$hs_plusAddrzh(t3,q7);
	  var M6=$hs_readWord8OffAddrzh(o7,goog.math.Long.fromBits(0,0),p7);
	  var N6=M6[0],O6=M6[1];
	  var T6=$hs_touchzh(u3,N6);
	  var P6=$t(function(){
	   $r($hs_geWordzh(O6,goog.math.Long.fromBits(128,0)));
	  },[O6],"lvl4");
	  var Q6=$t(function(){
	   $r($hs_leWordzh(O6,goog.math.Long.fromBits(191,0)));
	  },[O6],"lvl5");
	  var R6=$t(function(){
	   $r($hs_leWordzh(L6,goog.math.Long.fromBits(191,0)));
	  },[L6],"lvl6");
	  var S6=$f(1,function(U6){
	   var V6=$t(function(){
	    $r($hs_geWordzh(L6,goog.math.Long.fromBits(128,0)));
	   },[L6],"lvl7");
	   var W6=$f(1,function(X6){
	    var Y6=$hs_eqWordzh(V3,goog.math.Long.fromBits(244,0));
	    switch(Y6.g){
	    case 1:
	     $r([T6,a4]);break;
	    case 2:
	     $M(V6,function(Z6){
	      switch(Z6.g){
	      case 1:
	       $r([T6,a4]);break;
	      case 2:
	       var a7=$hs_leWordzh(L6,goog.math.Long.fromBits(143,0));
	       switch(a7.g){
	       case 1:
		$r([T6,a4]);break;
	       case 2:
		$M(P6,function(b7){
		 switch(b7.g){
		 case 1:
		  $r([T6,a4]);break;
		 case 2:
		  $M(Q6,function(c7){
		   switch(c7.g){
		   case 1:
		    $r([T6,a4]);break;
		   case 2:
		    $r([T6,R3]);break;
		   }
		  },[R3,a4,T6]);break;
		 }
		},[R3,a4,Q6,T6]);break;
	       }break;
	      }
	     },[R3,a4,P6,Q6,L6,T6]);break;
	    }
	   },[R3,V3,a4,P6,Q6,L6,V6,T6],"$w$j3");
	   var d7=$hs_geWordzh(V3,goog.math.Long.fromBits(241,0));
	   switch(d7.g){
	   case 1:
	    W6.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    var e7=$hs_leWordzh(V3,goog.math.Long.fromBits(243,0));
	    switch(e7.g){
	    case 1:
	     W6.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $M(V6,function(f7){
	      switch(f7.g){
	      case 1:
	       W6.J($$GHCziPrim_realWorldzh);break;
	      case 2:
	       $M(R6,function(g7){
		switch(g7.g){
		case 1:
		 W6.J($$GHCziPrim_realWorldzh);break;
		case 2:
		 $M(P6,function(h7){
		  switch(h7.g){
		  case 1:
		   W6.J($$GHCziPrim_realWorldzh);break;
		  case 2:
		   $M(Q6,function(i7){
		    switch(i7.g){
		    case 1:
		     W6.J($$GHCziPrim_realWorldzh);break;
		    case 2:
		     $r([T6,R3]);break;
		    }
		   },[R3,V3,a4,P6,Q6,L6,V6,T6,W6]);break;
		  }
		 },[R3,V3,a4,P6,Q6,L6,V6,T6,W6]);break;
		}
	       },[R3,V3,a4,P6,Q6,L6,V6,T6,W6]);break;
	      }
	     },[R3,V3,a4,P6,Q6,L6,R6,V6,T6,W6]);break;
	    }break;
	   }
	  },[R3,V3,a4,P6,Q6,L6,R6,T6],"$w$j2");
	  var j7=$hs_eqWordzh(V3,goog.math.Long.fromBits(240,0));
	  switch(j7.g){
	  case 1:
	   S6.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var k7=$hs_geWordzh(L6,goog.math.Long.fromBits(144,0));
	   switch(k7.g){
	   case 1:
	    S6.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    $M(R6,function(l7){
	     switch(l7.g){
	     case 1:
	      S6.J($$GHCziPrim_realWorldzh);break;
	     case 2:
	      $M(P6,function(m7){
	       switch(m7.g){
	       case 1:
		S6.J($$GHCziPrim_realWorldzh);break;
	       case 2:
		$M(Q6,function(n7){
		 switch(n7.g){
		 case 1:
		  S6.J($$GHCziPrim_realWorldzh);break;
		 case 2:
		  $r([T6,R3]);break;
		 }
		},[R3,V3,a4,P6,Q6,L6,R6,T6,S6]);break;
	       }
	      },[R3,V3,a4,P6,Q6,L6,R6,T6,S6]);break;
	     }
	    },[R3,V3,a4,P6,Q6,L6,R6,T6,S6]);break;
	   }break;
	  }break;
	 default:
	  var k6=K3.add(goog.math.Long.fromBits(1,0));
	  var j6=$hs_plusAddrzh(t3,k6);
	  var i4=$hs_readWord8OffAddrzh(j6,goog.math.Long.fromBits(0,0),c4);
	  var j4=i4[0],k4=i4[1];
	  var h6=$hs_touchzh(u3,j4);
	  var i6=K3.add(goog.math.Long.fromBits(2,0));
	  var g6=$hs_plusAddrzh(t3,i6);
	  var l4=$hs_readWord8OffAddrzh(g6,goog.math.Long.fromBits(0,0),h6);
	  var m4=l4[0],n4=l4[1];
	  var e6=$hs_touchzh(u3,m4);
	  var f6=K3.add(goog.math.Long.fromBits(3,0));
	  var d6=$hs_plusAddrzh(t3,f6);
	  var o4=$hs_readWord8OffAddrzh(d6,goog.math.Long.fromBits(0,0),e6);
	  var p4=o4[0],q4=o4[1];
	  var x4=$hs_touchzh(u3,p4);
	  var r4=$t(function(){
	   $r($hs_geWordzh(q4,goog.math.Long.fromBits(128,0)));
	  },[q4],"lvl4");
	  var s4=$t(function(){
	   $r($hs_leWordzh(q4,goog.math.Long.fromBits(191,0)));
	  },[q4],"lvl5");
	  var t4=$t(function(){
	   $r($hs_geWordzh(n4,goog.math.Long.fromBits(128,0)));
	  },[n4],"lvl6");
	  var u4=$t(function(){
	   $r($hs_leWordzh(n4,goog.math.Long.fromBits(191,0)));
	  },[n4],"lvl7");
	  var v4=$t(function(){
	   $r($hs_leWordzh(k4,goog.math.Long.fromBits(191,0)));
	  },[k4],"lvl8");
	  var w4=$f(1,function(y4){
	   var z4=$t(function(){
	    $r($hs_geWordzh(k4,goog.math.Long.fromBits(128,0)));
	   },[k4],"lvl9");
	   var A4=$f(1,function(B4){
	    var C4=$hs_eqWordzh(V3,goog.math.Long.fromBits(244,0));
	    switch(C4.g){
	    case 1:
	     $r([x4,a4]);break;
	    case 2:
	     $M(z4,function(D4){
	      switch(D4.g){
	      case 1:
	       $r([x4,a4]);break;
	      case 2:
	       var E4=$hs_leWordzh(k4,goog.math.Long.fromBits(143,0));
	       switch(E4.g){
	       case 1:
		$r([x4,a4]);break;
	       case 2:
		$M(t4,function(F4){
		 switch(F4.g){
		 case 1:
		  $r([x4,a4]);break;
		 case 2:
		  $M(u4,function(G4){
		   switch(G4.g){
		   case 1:
		    $r([x4,a4]);break;
		   case 2:
		    $M(r4,function(H4){
		     switch(H4.g){
		     case 1:
		      $r([x4,a4]);break;
		     case 2:
		      $M(s4,function(I4){
		       switch(I4.g){
		       case 1:
			$r([x4,a4]);break;
		       case 2:
			var b5=$hs_word2Intzh(q4);
			var Q4=b5.subtract(goog.math.Long.fromBits(128,0));
			var a5=$hs_word2Intzh(n4);
			var Z4=a5.subtract(goog.math.Long.fromBits(128,0));
			var S4=$hs_uncheckedIShiftLzh(Z4,goog.math.Long.fromBits(6,0));
			var Y4=$hs_word2Intzh(k4);
			var X4=Y4.subtract(goog.math.Long.fromBits(128,0));
			var U4=$hs_uncheckedIShiftLzh(X4,goog.math.Long.fromBits(12,0));
			var W4=$hs_word2Intzh(V3);
			var V4=W4.subtract(goog.math.Long.fromBits(240,0));
			var T4=$hs_uncheckedIShiftLzh(V4,goog.math.Long.fromBits(18,0));
			var R4=T4.add(U4);
			var P4=R4.add(S4);
			var O4=P4.add(Q4);
			var N4=$hs_chrzh(O4);
			var M4=$hs_writeWideCharOffAddrzh(C3,L3,N4,x4);
			var L4=$hs_touchzh(D3,M4);
			var K4=L3.add(goog.math.Long.fromBits(1,0));
			var J4=K3.add(goog.math.Long.fromBits(4,0));
			J3.J(J4,K4,L4);break;
		       }
		      },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,n4,k4,x4,J3]);break;
		     }
		    },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,s4,n4,k4,x4,J3]);break;
		   }
		  },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,k4,x4,J3]);break;
		 }
		},[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,u4,k4,x4,J3]);break;
	       }break;
	      }
	     },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,x4,J3]);break;
	    }
	   },[L3,K3,C3,D3,V3,a4,q4,r4,s4,n4,t4,u4,k4,z4,x4,J3],"$w$j3");
	   var c5=$hs_geWordzh(V3,goog.math.Long.fromBits(241,0));
	   switch(c5.g){
	   case 1:
	    A4.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    var d5=$hs_leWordzh(V3,goog.math.Long.fromBits(243,0));
	    switch(d5.g){
	    case 1:
	     A4.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $M(z4,function(e5){
	      switch(e5.g){
	      case 1:
	       A4.J($$GHCziPrim_realWorldzh);break;
	      case 2:
	       $M(v4,function(f5){
		switch(f5.g){
		case 1:
		 A4.J($$GHCziPrim_realWorldzh);break;
		case 2:
		 $M(t4,function(g5){
		  switch(g5.g){
		  case 1:
		   A4.J($$GHCziPrim_realWorldzh);break;
		  case 2:
		   $M(u4,function(h5){
		    switch(h5.g){
		    case 1:
		     A4.J($$GHCziPrim_realWorldzh);break;
		    case 2:
		     $M(r4,function(i5){
		      switch(i5.g){
		      case 1:
		       A4.J($$GHCziPrim_realWorldzh);break;
		      case 2:
		       $M(s4,function(j5){
			switch(j5.g){
			case 1:
			 A4.J($$GHCziPrim_realWorldzh);break;
			case 2:
			 var C5=$hs_word2Intzh(q4);
			 var r5=C5.subtract(goog.math.Long.fromBits(128,0));
			 var B5=$hs_word2Intzh(n4);
			 var A5=B5.subtract(goog.math.Long.fromBits(128,0));
			 var t5=$hs_uncheckedIShiftLzh(A5,goog.math.Long.fromBits(6,0));
			 var z5=$hs_word2Intzh(k4);
			 var y5=z5.subtract(goog.math.Long.fromBits(128,0));
			 var v5=$hs_uncheckedIShiftLzh(y5,goog.math.Long.fromBits(12,0));
			 var x5=$hs_word2Intzh(V3);
			 var w5=x5.subtract(goog.math.Long.fromBits(240,0));
			 var u5=$hs_uncheckedIShiftLzh(w5,goog.math.Long.fromBits(18,0));
			 var s5=u5.add(v5);
			 var q5=s5.add(t5);
			 var p5=q5.add(r5);
			 var o5=$hs_chrzh(p5);
			 var n5=$hs_writeWideCharOffAddrzh(C3,L3,o5,x4);
			 var m5=$hs_touchzh(D3,n5);
			 var l5=L3.add(goog.math.Long.fromBits(1,0));
			 var k5=K3.add(goog.math.Long.fromBits(4,0));
			 J3.J(k5,l5,m5);break;
			}
		       },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,z4,x4,J3,A4]);break;
		      }
		     },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,z4,x4,J3,A4]);break;
		    }
		   },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,z4,x4,J3,A4]);break;
		  }
		 },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,z4,x4,J3,A4]);break;
		}
	       },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,z4,x4,J3,A4]);break;
	      }
	     },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,v4,z4,x4,J3,A4]);break;
	    }break;
	   }
	  },[L3,K3,C3,D3,V3,a4,q4,r4,s4,n4,t4,u4,k4,v4,x4,J3],"$w$j2");
	  var D5=$hs_eqWordzh(V3,goog.math.Long.fromBits(240,0));
	  switch(D5.g){
	  case 1:
	   w4.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var E5=$hs_geWordzh(k4,goog.math.Long.fromBits(144,0));
	   switch(E5.g){
	   case 1:
	    w4.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    $M(v4,function(F5){
	     switch(F5.g){
	     case 1:
	      w4.J($$GHCziPrim_realWorldzh);break;
	     case 2:
	      $M(t4,function(G5){
	       switch(G5.g){
	       case 1:
		w4.J($$GHCziPrim_realWorldzh);break;
	       case 2:
		$M(u4,function(H5){
		 switch(H5.g){
		 case 1:
		  w4.J($$GHCziPrim_realWorldzh);break;
		 case 2:
		  $M(r4,function(I5){
		   switch(I5.g){
		   case 1:
		    w4.J($$GHCziPrim_realWorldzh);break;
		   case 2:
		    $M(s4,function(J5){
		     switch(J5.g){
		     case 1:
		      w4.J($$GHCziPrim_realWorldzh);break;
		     case 2:
		      var c6=$hs_word2Intzh(q4);
		      var R5=c6.subtract(goog.math.Long.fromBits(128,0));
		      var b6=$hs_word2Intzh(n4);
		      var a6=b6.subtract(goog.math.Long.fromBits(128,0));
		      var T5=$hs_uncheckedIShiftLzh(a6,goog.math.Long.fromBits(6,0));
		      var Z5=$hs_word2Intzh(k4);
		      var Y5=Z5.subtract(goog.math.Long.fromBits(128,0));
		      var V5=$hs_uncheckedIShiftLzh(Y5,goog.math.Long.fromBits(12,0));
		      var X5=$hs_word2Intzh(V3);
		      var W5=X5.subtract(goog.math.Long.fromBits(240,0));
		      var U5=$hs_uncheckedIShiftLzh(W5,goog.math.Long.fromBits(18,0));
		      var S5=U5.add(V5);
		      var Q5=S5.add(T5);
		      var P5=Q5.add(R5);
		      var O5=$hs_chrzh(P5);
		      var N5=$hs_writeWideCharOffAddrzh(C3,L3,O5,x4);
		      var M5=$hs_touchzh(D3,N5);
		      var L5=L3.add(goog.math.Long.fromBits(1,0));
		      var K5=K3.add(goog.math.Long.fromBits(4,0));
		      J3.J(K5,L5,M5);break;
		     }
		    },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,v4,x4,J3,w4]);break;
		   }
		  },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,v4,x4,J3,w4]);break;
		 }
		},[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,v4,x4,J3,w4]);break;
	       }
	      },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,v4,x4,J3,w4]);break;
	     }
	    },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,q4,r4,s4,n4,t4,u4,k4,v4,x4,J3,w4]);break;
	   }break;
	  }
	 }break;
	}
       },[t3,u3,L3,K3,y3,C3,D3,R3,V3,a4,c4,J3],"$w$j1");
       var t7=$hs_geWordzh(V3,goog.math.Long.fromBits(224,0));
       switch(t7.g){
       case 1:
	e4.J($$GHCziPrim_realWorldzh);break;
       case 2:
	var u7=$hs_leWordzh(V3,goog.math.Long.fromBits(239,0));
	switch(u7.g){
	case 1:
	 e4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var v7=y3.subtract(K3);
	 switch(v7.toString()){
	 case "1":
	  $r([c4,R3]);break;
	 case "2":
	  var V9=K3.add(goog.math.Long.fromBits(1,0));
	  var U9=$hs_plusAddrzh(t3,V9);
	  var v9=$hs_readWord8OffAddrzh(U9,goog.math.Long.fromBits(0,0),c4);
	  var w9=v9[0],x9=v9[1];
	  var A9=$hs_touchzh(u3,w9);
	  var y9=$t(function(){
	   $r($hs_leWordzh(x9,goog.math.Long.fromBits(191,0)));
	  },[x9],"lvl4");
	  var z9=$f(1,function(B9){
	   var C9=$t(function(){
	    $r($hs_geWordzh(x9,goog.math.Long.fromBits(128,0)));
	   },[x9],"lvl5");
	   var D9=$f(1,function(E9){
	    var F9=$hs_eqWordzh(V3,goog.math.Long.fromBits(237,0));
	    switch(F9.g){
	    case 1:
	     var G9=$hs_geWordzh(V3,goog.math.Long.fromBits(238,0));
	     switch(G9.g){
	     case 1:
	      $r([A9,a4]);break;
	     case 2:
	      $M(C9,function(H9){
	       switch(H9.g){
	       case 1:
		$r([A9,a4]);break;
	       case 2:
		$M(y9,function(I9){
		 switch(I9.g){
		 case 1:
		  $r([A9,a4]);break;
		 case 2:
		  $r([A9,R3]);break;
		 }
		},[R3,a4,A9]);break;
	       }
	      },[R3,a4,y9,A9]);break;
	     }break;
	    case 2:
	     $M(C9,function(J9){
	      switch(J9.g){
	      case 1:
	       $r([A9,a4]);break;
	      case 2:
	       var K9=$hs_leWordzh(x9,goog.math.Long.fromBits(159,0));
	       switch(K9.g){
	       case 1:
		var L9=$hs_geWordzh(V3,goog.math.Long.fromBits(238,0));
		switch(L9.g){
		case 1:
		 $r([A9,a4]);break;
		case 2:
		 $M(y9,function(M9){
		  switch(M9.g){
		  case 1:
		   $r([A9,a4]);break;
		  case 2:
		   $r([A9,R3]);break;
		  }
		 },[R3,a4,A9]);break;
		}break;
	       case 2:
		$r([A9,R3]);break;
	       }break;
	      }
	     },[R3,V3,a4,x9,y9,A9]);break;
	    }
	   },[R3,V3,a4,x9,y9,C9,A9],"$w$j3");
	   var N9=$hs_geWordzh(V3,goog.math.Long.fromBits(225,0));
	   switch(N9.g){
	   case 1:
	    D9.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    var O9=$hs_leWordzh(V3,goog.math.Long.fromBits(236,0));
	    switch(O9.g){
	    case 1:
	     D9.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $M(C9,function(P9){
	      switch(P9.g){
	      case 1:
	       D9.J($$GHCziPrim_realWorldzh);break;
	      case 2:
	       $M(y9,function(Q9){
		switch(Q9.g){
		case 1:
		 D9.J($$GHCziPrim_realWorldzh);break;
		case 2:
		 $r([A9,R3]);break;
		}
	       },[R3,V3,a4,x9,y9,C9,A9,D9]);break;
	      }
	     },[R3,V3,a4,x9,y9,C9,A9,D9]);break;
	    }break;
	   }
	  },[R3,V3,a4,x9,y9,A9],"$w$j2");
	  var R9=$hs_eqWordzh(V3,goog.math.Long.fromBits(224,0));
	  switch(R9.g){
	  case 1:
	   z9.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var S9=$hs_geWordzh(x9,goog.math.Long.fromBits(160,0));
	   switch(S9.g){
	   case 1:
	    z9.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    $M(y9,function(T9){
	     switch(T9.g){
	     case 1:
	      z9.J($$GHCziPrim_realWorldzh);break;
	     case 2:
	      $r([A9,R3]);break;
	     }
	    },[R3,V3,a4,x9,y9,A9,z9]);break;
	   }break;
	  }break;
	 default:
	  var u9=K3.add(goog.math.Long.fromBits(1,0));
	  var t9=$hs_plusAddrzh(t3,u9);
	  var w7=$hs_readWord8OffAddrzh(t9,goog.math.Long.fromBits(0,0),c4);
	  var x7=w7[0],y7=w7[1];
	  var r9=$hs_touchzh(u3,x7);
	  var s9=K3.add(goog.math.Long.fromBits(2,0));
	  var q9=$hs_plusAddrzh(t3,s9);
	  var z7=$hs_readWord8OffAddrzh(q9,goog.math.Long.fromBits(0,0),r9);
	  var A7=z7[0],B7=z7[1];
	  var G7=$hs_touchzh(u3,A7);
	  var C7=$t(function(){
	   $r($hs_geWordzh(B7,goog.math.Long.fromBits(128,0)));
	  },[B7],"lvl4");
	  var D7=$t(function(){
	   $r($hs_leWordzh(B7,goog.math.Long.fromBits(191,0)));
	  },[B7],"lvl5");
	  var E7=$t(function(){
	   $r($hs_leWordzh(y7,goog.math.Long.fromBits(191,0)));
	  },[y7],"lvl6");
	  var F7=$f(1,function(H7){
	   var I7=$t(function(){
	    $r($hs_geWordzh(y7,goog.math.Long.fromBits(128,0)));
	   },[y7],"lvl7");
	   var J7=$f(1,function(K7){
	    var L7=$f(1,function(M7){
	     var N7=$hs_geWordzh(V3,goog.math.Long.fromBits(238,0));
	     switch(N7.g){
	     case 1:
	      $r([G7,a4]);break;
	     case 2:
	      $M(I7,function(O7){
	       switch(O7.g){
	       case 1:
		$r([G7,a4]);break;
	       case 2:
		$M(E7,function(P7){
		 switch(P7.g){
		 case 1:
		  $r([G7,a4]);break;
		 case 2:
		  $M(C7,function(Q7){
		   switch(Q7.g){
		   case 1:
		    $r([G7,a4]);break;
		   case 2:
		    $M(D7,function(R7){
		     switch(R7.g){
		     case 1:
		      $r([G7,a4]);break;
		     case 2:
		      var g8=$hs_word2Intzh(B7);
		      var Z7=g8.subtract(goog.math.Long.fromBits(128,0));
		      var f8=$hs_word2Intzh(y7);
		      var e8=f8.subtract(goog.math.Long.fromBits(128,0));
		      var b8=$hs_uncheckedIShiftLzh(e8,goog.math.Long.fromBits(6,0));
		      var d8=$hs_word2Intzh(V3);
		      var c8=d8.subtract(goog.math.Long.fromBits(224,0));
		      var a8=$hs_uncheckedIShiftLzh(c8,goog.math.Long.fromBits(12,0));
		      var Y7=a8.add(b8);
		      var X7=Y7.add(Z7);
		      var W7=$hs_chrzh(X7);
		      var V7=$hs_writeWideCharOffAddrzh(C3,L3,W7,G7);
		      var U7=$hs_touchzh(D3,V7);
		      var T7=L3.add(goog.math.Long.fromBits(1,0));
		      var S7=K3.add(goog.math.Long.fromBits(3,0));
		      J3.J(S7,T7,U7);break;
		     }
		    },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,y7,G7]);break;
		   }
		  },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,D7,y7,G7]);break;
		 }
		},[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,G7]);break;
	       }
	      },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,G7]);break;
	     }
	    },[L3,K3,C3,D3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7],"$w$j4");
	    var h8=$hs_eqWordzh(V3,goog.math.Long.fromBits(237,0));
	    switch(h8.g){
	    case 1:
	     L7.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $M(I7,function(i8){
	      switch(i8.g){
	      case 1:
	       L7.J($$GHCziPrim_realWorldzh);break;
	      case 2:
	       var j8=$hs_leWordzh(y7,goog.math.Long.fromBits(159,0));
	       switch(j8.g){
	       case 1:
		L7.J($$GHCziPrim_realWorldzh);break;
	       case 2:
		$M(C7,function(k8){
		 switch(k8.g){
		 case 1:
		  L7.J($$GHCziPrim_realWorldzh);break;
		 case 2:
		  $M(D7,function(l8){
		   switch(l8.g){
		   case 1:
		    L7.J($$GHCziPrim_realWorldzh);break;
		   case 2:
		    var A8=$hs_word2Intzh(B7);
		    var t8=A8.subtract(goog.math.Long.fromBits(128,0));
		    var z8=$hs_word2Intzh(y7);
		    var y8=z8.subtract(goog.math.Long.fromBits(128,0));
		    var v8=$hs_uncheckedIShiftLzh(y8,goog.math.Long.fromBits(6,0));
		    var x8=$hs_word2Intzh(V3);
		    var w8=x8.subtract(goog.math.Long.fromBits(224,0));
		    var u8=$hs_uncheckedIShiftLzh(w8,goog.math.Long.fromBits(12,0));
		    var s8=u8.add(v8);
		    var r8=s8.add(t8);
		    var q8=$hs_chrzh(r8);
		    var p8=$hs_writeWideCharOffAddrzh(C3,L3,q8,G7);
		    var o8=$hs_touchzh(D3,p8);
		    var n8=L3.add(goog.math.Long.fromBits(1,0));
		    var m8=K3.add(goog.math.Long.fromBits(3,0));
		    J3.J(m8,n8,o8);break;
		   }
		  },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7,L7]);break;
		 }
		},[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7,L7]);break;
	       }break;
	      }
	     },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7,L7]);break;
	    }
	   },[L3,K3,C3,D3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7],"$w$j3");
	   var B8=$hs_geWordzh(V3,goog.math.Long.fromBits(225,0));
	   switch(B8.g){
	   case 1:
	    J7.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    var C8=$hs_leWordzh(V3,goog.math.Long.fromBits(236,0));
	    switch(C8.g){
	    case 1:
	     J7.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $M(I7,function(D8){
	      switch(D8.g){
	      case 1:
	       J7.J($$GHCziPrim_realWorldzh);break;
	      case 2:
	       $M(E7,function(E8){
		switch(E8.g){
		case 1:
		 J7.J($$GHCziPrim_realWorldzh);break;
		case 2:
		 $M(C7,function(F8){
		  switch(F8.g){
		  case 1:
		   J7.J($$GHCziPrim_realWorldzh);break;
		  case 2:
		   $M(D7,function(G8){
		    switch(G8.g){
		    case 1:
		     J7.J($$GHCziPrim_realWorldzh);break;
		    case 2:
		     var V8=$hs_word2Intzh(B7);
		     var O8=V8.subtract(goog.math.Long.fromBits(128,0));
		     var U8=$hs_word2Intzh(y7);
		     var T8=U8.subtract(goog.math.Long.fromBits(128,0));
		     var Q8=$hs_uncheckedIShiftLzh(T8,goog.math.Long.fromBits(6,0));
		     var S8=$hs_word2Intzh(V3);
		     var R8=S8.subtract(goog.math.Long.fromBits(224,0));
		     var P8=$hs_uncheckedIShiftLzh(R8,goog.math.Long.fromBits(12,0));
		     var N8=P8.add(Q8);
		     var M8=N8.add(O8);
		     var L8=$hs_chrzh(M8);
		     var K8=$hs_writeWideCharOffAddrzh(C3,L3,L8,G7);
		     var J8=$hs_touchzh(D3,K8);
		     var I8=L3.add(goog.math.Long.fromBits(1,0));
		     var H8=K3.add(goog.math.Long.fromBits(3,0));
		     J3.J(H8,I8,J8);break;
		    }
		   },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7,J7]);break;
		  }
		 },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7,J7]);break;
		}
	       },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7,J7]);break;
	      }
	     },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,I7,G7,J7]);break;
	    }break;
	   }
	  },[L3,K3,C3,D3,V3,a4,J3,B7,C7,D7,y7,E7,G7],"$w$j2");
	  var W8=$hs_eqWordzh(V3,goog.math.Long.fromBits(224,0));
	  switch(W8.g){
	  case 1:
	   F7.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var X8=$hs_geWordzh(y7,goog.math.Long.fromBits(160,0));
	   switch(X8.g){
	   case 1:
	    F7.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    $M(E7,function(Y8){
	     switch(Y8.g){
	     case 1:
	      F7.J($$GHCziPrim_realWorldzh);break;
	     case 2:
	      $M(C7,function(Z8){
	       switch(Z8.g){
	       case 1:
		F7.J($$GHCziPrim_realWorldzh);break;
	       case 2:
		$M(D7,function(a9){
		 switch(a9.g){
		 case 1:
		  F7.J($$GHCziPrim_realWorldzh);break;
		 case 2:
		  var p9=$hs_word2Intzh(B7);
		  var i9=p9.subtract(goog.math.Long.fromBits(128,0));
		  var o9=$hs_word2Intzh(y7);
		  var n9=o9.subtract(goog.math.Long.fromBits(128,0));
		  var k9=$hs_uncheckedIShiftLzh(n9,goog.math.Long.fromBits(6,0));
		  var m9=$hs_word2Intzh(V3);
		  var l9=m9.subtract(goog.math.Long.fromBits(224,0));
		  var j9=$hs_uncheckedIShiftLzh(l9,goog.math.Long.fromBits(12,0));
		  var h9=j9.add(k9);
		  var g9=h9.add(i9);
		  var f9=$hs_chrzh(g9);
		  var e9=$hs_writeWideCharOffAddrzh(C3,L3,f9,G7);
		  var d9=$hs_touchzh(D3,e9);
		  var c9=L3.add(goog.math.Long.fromBits(1,0));
		  var b9=K3.add(goog.math.Long.fromBits(3,0));
		  J3.J(b9,c9,d9);break;
		 }
		},[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,G7,F7]);break;
	       }
	      },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,G7,F7]);break;
	     }
	    },[t3,u3,v3,w3,I3,L3,F3,K3,y3,C3,D3,E3,G3,V3,a4,J3,B7,C7,D7,y7,E7,G7,F7]);break;
	   }break;
	  }
	 }break;
	}break;
       }
      },[t3,u3,L3,K3,y3,C3,D3,R3,V3,a4,c4,J3],"$w$j");
      var W9=$hs_geWordzh(V3,goog.math.Long.fromBits(192,0));
      switch(W9.g){
      case 1:
       b4.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var X9=$hs_leWordzh(V3,goog.math.Long.fromBits(223,0));
       switch(X9.g){
       case 1:
	b4.J($$GHCziPrim_realWorldzh);break;
       case 2:
	var sa=y3.subtract(K3);
	var Y9=sa.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Y9.g){
	case 1:
	 var ra=K3.add(goog.math.Long.fromBits(1,0));
	 var qa=$hs_plusAddrzh(t3,ra);
	 var Z9=$hs_readWord8OffAddrzh(qa,goog.math.Long.fromBits(0,0),c4);
	 var aa=Z9[0],ba=Z9[1];
	 var ja=$hs_touchzh(u3,aa);
	 var ca=$hs_ltWordzh(ba,goog.math.Long.fromBits(128,0));
	 switch(ca.g){
	 case 1:
	  var da=$hs_geWordzh(ba,goog.math.Long.fromBits(192,0));
	  switch(da.g){
	  case 1:
	   var pa=$hs_word2Intzh(ba);
	   var ma=pa.subtract(goog.math.Long.fromBits(128,0));
	   var oa=$hs_word2Intzh(V3);
	   var na=oa.subtract(goog.math.Long.fromBits(192,0));
	   var la=$hs_uncheckedIShiftLzh(na,goog.math.Long.fromBits(6,0));
	   var ka=la.add(ma);
	   var ia=$hs_chrzh(ka);
	   var ha=$hs_writeWideCharOffAddrzh(C3,L3,ia,ja);
	   var ga=$hs_touchzh(D3,ha);
	   var fa=L3.add(goog.math.Long.fromBits(1,0));
	   var ea=K3.add(goog.math.Long.fromBits(2,0));
	   J3.J(ea,fa,ga);break;
	  case 2:
	   $r([ja,a4]);break;
	  }break;
	 case 2:
	  $r([ja,a4]);break;
	 }break;
	case 2:
	 $r([c4,R3]);break;
	}break;
       }break;
      }break;
     case 2:
      var ya=$hs_word2Intzh(V3);
      var xa=$hs_chrzh(ya);
      var wa=$hs_writeWideCharOffAddrzh(C3,L3,xa,c4);
      var va=$hs_touchzh(D3,wa);
      var ua=L3.add(goog.math.Long.fromBits(1,0));
      var ta=K3.add(goog.math.Long.fromBits(1,0));
      J3.J(ta,ua,va);break;
     }break;
    case 2:
     $r([M3,R3]);break;
    }break;
   case 2:
    var Aa=$d(1,[C3,D3,E3,F3,G3,L3],"sat");
    var Ba=$t(function(){
     var Ca=K3.equals(y3)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Ca.g){
     case 1:
      $R(1,[t3,u3,v3,w3,K3,y3],"Buffer");break;
     case 2:
      $A(I3);break;
     }
    },[t3,u3,v3,w3,I3,K3,y3],"sat");
    var Da=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,Ba,Aa],"sat");
    $r([M3,Da]);break;
   }
  },[t3,u3,v3,w3,I3,F3,y3,C3,D3,E3,G3],"$wa2");
  J3.J(x3,H3,A3);
 },[t3,u3,v3,w3,y3,x3,A3]);
},[],"in `base:GHC.IO.Encoding.UTF8'");
var $$GHCziIOziEncodingziUTF8_mkUTF5=$f(3,function(Ea,Fa,Ga){
 $M(Ea,function(Ha){
  var Ia=Ha.v[0],Ja=Ha.v[1],Ka=Ha.v[2],La=Ha.v[3],Ma=Ha.v[4],Na=Ha.v[5];
  $$GHCziIOziEncodingziUTF8_zdwa1.J(Ia,Ja,Ka,La,Ma,Na,Fa,Ga);
 },[Fa,Ga]);
},[],"in `base:GHC.IO.Encoding.UTF8'");
var $$GHCziIOziEncodingziUTF8_mkUTF6=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF-8");
},[],"in `base:GHC.IO.Encoding.UTF8'");
var $$GHCziIOziEncodingziUTF8_mkUTF4=$f(1,function(Oa){
 $r([Oa,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.UTF8'");
var $$GHCziIOziEncodingziUTF8_mkUTF3=$f(2,function(Pa,Qa){
 $r([Qa,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.UTF8'");
var $$GHCziIOziEncodingziUTF8_mkUTF1=$f(2,function(Ra,Sa){
 $$GHCziIOziEncodingziUTF8_mkUTF3.J(Ra,Sa);
},[],"in `base:GHC.IO.Encoding.UTF8'");
var $$GHCziIOziEncodingziUTF8_mkUTF8=$f(1,function(Ta){
 var Ua=$f(1,function(Va){
  var Wa=$f(3,function(Xa,Ra,Sa){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(Ta,Xa,Ra,Sa);
  },[Ta],"sat");
  var Ya=$d(1,[$$GHCziIOziEncodingziUTF8_mkUTF2,Wa,$$GHCziIOziEncodingziUTF8_mkUTF4,$$GHCziIOziEncodingziUTF8_mkUTF4,$$GHCziIOziEncodingziUTF8_mkUTF1],"sat");
  $r([Va,Ya]);
 },[Ta],"sat");
 var Za=$f(1,function(ab){
  var bb=$f(3,function(Xa,Ra,Sa){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(Ta,Xa,Ra,Sa);
  },[Ta],"sat");
  var cb=$d(1,[$$GHCziIOziEncodingziUTF8_mkUTF5,bb,$$GHCziIOziEncodingziUTF8_mkUTF4,$$GHCziIOziEncodingziUTF8_mkUTF4,$$GHCziIOziEncodingziUTF8_mkUTF3],"sat");
  $r([ab,cb]);
 },[Ta],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF8_mkUTF6,Za,Ua],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF8.hs:47:1");
var $$GHCziIOziException_userError=$f(1,function(P){
 $R(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_UserError,$$GHCziTypes_ZMZN,P,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],"IOError");
},[],"at libraries/base/GHC/IO/Exception.hs:287:1");
var $$GHCziIOziException_zdfShowArrayException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J(": ");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdwzdcshowsPrec2=$f(2,function(x2,y2){
 $M(x2,function(z2){
  switch(z2.g){
  case 1:
   $$GHCziBase_zpzp.J($$GHCziIOziException$a,y2);break;
  case 2:
   $$GHCziBase_zpzp.J($$GHCziIOziException$b,y2);break;
  case 3:
   $$GHCziBase_zpzp.J($$GHCziIOziException$c,y2);break;
  case 4:
   $$GHCziBase_zpzp.J($$GHCziIOziException$d,y2);break;
  case 5:
   $$GHCziBase_zpzp.J($$GHCziIOziException$e,y2);break;
  case 6:
   $$GHCziBase_zpzp.J($$GHCziIOziException$f,y2);break;
  case 7:
   $$GHCziBase_zpzp.J($$GHCziIOziException$g,y2);break;
  case 8:
   $$GHCziBase_zpzp.J($$GHCziIOziException$h,y2);break;
  case 9:
   $$GHCziBase_zpzp.J($$GHCziIOziException$i,y2);break;
  case 10:
   $$GHCziBase_zpzp.J($$GHCziIOziException$j,y2);break;
  case 11:
   $$GHCziBase_zpzp.J($$GHCziIOziException$k,y2);break;
  case 12:
   $$GHCziBase_zpzp.J($$GHCziIOziException$l,y2);break;
  case 13:
   $$GHCziBase_zpzp.J($$GHCziIOziException$m,y2);break;
  case 14:
   $$GHCziBase_zpzp.J($$GHCziIOziException$n,y2);break;
  case 15:
   $$GHCziBase_zpzp.J($$GHCziIOziException$o,y2);break;
  case 16:
   $$GHCziBase_zpzp.J($$GHCziIOziException$p,y2);break;
  case 17:
   $$GHCziBase_zpzp.J($$GHCziIOziException$q,y2);break;
  case 18:
   $$GHCziBase_zpzp.J($$GHCziIOziException$r,y2);break;
  case 19:
   $$GHCziBase_zpzp.J($$GHCziIOziException$s,y2);break;
  }
 },[y2]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J(" (");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOException1=$D(1,function(){
 $r([")"]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdwzdcshowsPrec1=$f(2,function(G2,H2){
 $M(G2,function(I2){
  var J2=I2.v[0],K2=I2.v[1],L2=I2.v[2],M2=I2.v[3],N2=I2.v[5];
  var O2=$t(function(){
   var P2=$t(function(){
    var Q2=$t(function(){
     $M(M2,function(R2){
      switch(R2.g){
      case 1:
       $A(H2);break;
      case 2:
       var S2=$t(function(){
	var T2=$d(2,[$$GHCziIOziException_zdfShowIOException1,H2],"sat");
	$$GHCziBase_zpzp.J(R2,T2);
       },[H2,R2],"sat");
       $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowIOException2,S2);break;
      }
     },[H2]);
    },[M2,H2],"sat");
    $$GHCziIOziException_zdwzdcshowsPrec2.J(K2,Q2);
   },[K2,M2,H2],"a2");
   $M(L2,function(U2){
    switch(U2.g){
    case 1:
     $A(P2);break;
    case 2:
     var V2=$t(function(){
      $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowArrayException2,P2);
     },[P2],"sat");
     $$GHCziBase_zpzp.J(U2,V2);break;
    }
   },[P2]);
  },[K2,M2,H2,L2],"a1");
  $M(N2,function(W2){
   switch(W2.g){
   case 1:
    $M(J2,function(X2){
     switch(X2.g){
     case 1:
      $A(O2);break;
     case 2:
      var Y2=X2.v[0];
      $M(Y2,function(Z2){
       switch(Z2.g){
       case 1:
	var a3=Z2.v[0];
	var b3=$t(function(){
	 var c3=$t(function(){
	  $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowArrayException2,O2);
	 },[O2],"sat");
	 var d3=$d(2,[$$GHCziIOziHandleziTypes_showHandle1,c3],"sat");
	 $$GHCziBase_zpzp.J(a3,d3);
	},[O2,a3],"sat");
	$$GHCziBase_zpzp.J($$GHCziIOziHandleziTypes_showHandle2,b3);break;
       case 2:
	var e3=Z2.v[0];
	var f3=$t(function(){
	 var g3=$t(function(){
	  $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowArrayException2,O2);
	 },[O2],"sat");
	 var h3=$d(2,[$$GHCziIOziHandleziTypes_showHandle1,g3],"sat");
	 $$GHCziBase_zpzp.J(e3,h3);
	},[O2,e3],"sat");
	$$GHCziBase_zpzp.J($$GHCziIOziHandleziTypes_showHandle2,f3);break;
       }
      },[O2]);break;
     }
    },[O2]);break;
   case 2:
    var i3=W2.v[0];
    var j3=$t(function(){
     $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowArrayException2,O2);
    },[O2],"sat");
    $$GHCziBase_zpzp.J(i3,j3);break;
   }
  },[O2,J2]);
 },[H2]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOExceptionzuzdcshowsPrec=$f(3,function(k3,l3,m3){
 $$GHCziIOziException_zdwzdcshowsPrec1.J(l3,m3);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOExceptionzuzdcshowList=$f(2,function(n3,o3){
 $$GHCziShow_showListzuzu.J($$GHCziIOziException_zdwzdcshowsPrec1,n3,o3);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOExceptionzuzdcshow=$f(1,function(p3){
 $$GHCziIOziException_zdwzdcshowsPrec1.J(p3,$$GHCziTypes_ZMZN);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOException=$D(1,function(){
 $r([$$GHCziIOziException_zdfShowIOExceptionzuzdcshowsPrec,$$GHCziIOziException_zdfShowIOExceptionzuzdcshow,$$GHCziIOziException_zdfShowIOExceptionzuzdcshowList]);
},"at libraries/base/GHC/IO/Exception.hs:292:10");
var $$GHCziIOziException_zdfTypeableArrayExceptionzuds=$t(function(){
 $$GHCziCString_unpackCStringzh.J("base");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableArrayExceptionzuds1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.Exception");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableDeadlockzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Deadlock");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableDeadlockzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(51525854,1528534511),goog.math.Long.fromBits(2498035378,3076107346),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableDeadlockzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableDeadlock1=$D(1,function(){
 $r([goog.math.Long.fromBits(51525854,1528534511),goog.math.Long.fromBits(2498035378,3076107346),$$GHCziIOziException_zdfTypeableDeadlockzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableDeadlockzuzdctypeOf=$f(1,function(na){
 $A($$GHCziIOziException_zdfTypeableDeadlock1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableAsyncExceptionzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("AsyncException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableAsyncExceptionzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(2363394409,315339024),goog.math.Long.fromBits(2156861182,4256135785),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableAsyncExceptionzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableAsyncException1=$D(1,function(){
 $r([goog.math.Long.fromBits(2363394409,315339024),goog.math.Long.fromBits(2156861182,4256135785),$$GHCziIOziException_zdfTypeableAsyncExceptionzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableAsyncExceptionzuzdctypeOf=$f(1,function(Ha){
 $A($$GHCziIOziException_zdfTypeableAsyncException1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableIOExceptionzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("IOException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableIOExceptionzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(4053623282,1685460941),goog.math.Long.fromBits(3693590983,2507416641),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableIOExceptionzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableIOException1=$D(1,function(){
 $r([goog.math.Long.fromBits(4053623282,1685460941),goog.math.Long.fromBits(3693590983,2507416641),$$GHCziIOziException_zdfTypeableIOExceptionzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableIOExceptionzuzdctypeOf=$f(1,function(lb){
 $A($$GHCziIOziException_zdfTypeableIOException1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOExceptionzuzdcfromException=$f(1,function(mb){
 $M(mb,function(nb){
  var ob=nb.v[0],pb=nb.v[1];
  $$GHCziException_zdp1Exception.C([ob,pb],function(qb){
   var rb=qb.v[0],sb=qb.v[1];
   var tb=$hs_eqWordzh(rb,goog.math.Long.fromBits(4053623282,1685460941));
   switch(tb.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var ub=$hs_eqWordzh(sb,goog.math.Long.fromBits(3693590983,2507416641));
    switch(ub.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[pb],"Just");break;
    }break;
   }
  },[pb]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOException=$D(1,function(){
 $r([$$GHCziIOziException_zdfTypeableIOExceptionzuzdctypeOf,$$GHCziIOziException_zdfShowIOException,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException,$$GHCziIOziException_zdfExceptionIOExceptionzuzdcfromException]);
},"at libraries/base/GHC/IO/Exception.hs:221:10");
var $$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException=$f(1,function(Q){
 $R(1,[$$GHCziIOziException_zdfExceptionIOException,Q],"SomeException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfxExceptionIOException=$t(function(){
 $A($$GHCziIOziException_zdfExceptionIOException);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_ioException=$f(2,function(Z7,Q){
 $$GHCziIOziException$t.J(Z7,Q);
},[],"at libraries/base/GHC/IO/Exception.hs:188:1");
var $$GHCziIOziException_ioError=$f(2,function(Z7,Q){
 $$GHCziIOziException$t.J(Z7,Q);
},[],"at libraries/base/GHC/IO/Exception.hs:192:1");
var $$GHCziIOziException_ResourceExhausted=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:233:5");
var $$GHCziIOziException_IllegalOperation=$D(6,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:235:5");
var $$GHCziIOziException_UserError=$D(8,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:237:5");
var $$GHCziIOziException_InvalidArgument=$D(13,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:243:5");
var $$GHCziIOziException_UnsupportedOperation=$D(16,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:246:5");
var $$GHCziIOziException$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("already exists");
},"lvl");
var $$GHCziIOziException$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("does not exist");
},"lvl1");
var $$GHCziIOziException$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("resource busy");
},"lvl2");
var $$GHCziIOziException$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("resource exhausted");
},"lvl3");
var $$GHCziIOziException$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("end of file");
},"lvl4");
var $$GHCziIOziException$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("illegal operation");
},"lvl5");
var $$GHCziIOziException$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("permission denied");
},"lvl6");
var $$GHCziIOziException$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("user error");
},"lvl7");
var $$GHCziIOziException$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("unsatisified constraints");
},"lvl8");
var $$GHCziIOziException$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("system error");
},"lvl9");
var $$GHCziIOziException$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("protocol error");
},"lvl10");
var $$GHCziIOziException$l=$T(function(){
 $$GHCziCString_unpackCStringzh.J("failed");
},"lvl11");
var $$GHCziIOziException$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("invalid argument");
},"lvl12");
var $$GHCziIOziException$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("inappropriate type");
},"lvl13");
var $$GHCziIOziException$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("hardware fault");
},"lvl14");
var $$GHCziIOziException$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("unsupported operation");
},"lvl15");
var $$GHCziIOziException$q=$T(function(){
 $$GHCziCString_unpackCStringzh.J("timeout");
},"lvl16");
var $$GHCziIOziException$r=$T(function(){
 $$GHCziCString_unpackCStringzh.J("resource vanished");
},"lvl17");
var $$GHCziIOziException$s=$T(function(){
 $$GHCziCString_unpackCStringzh.J("interrupted");
},"lvl18");
var $$GHCziIOziException$t=$F(2,function(Gb,Hb){
 var Ib=$t(function(){
  $$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException.J(Gb);
 },[Gb],"sat");
 $r($hs_raiseIOzh(Ib,Hb));
},"a");
var $$GHCziIOziFD_zdfIODeviceFD7=$f(3,function(C,D,E){
 var F=$t(function(){
  $M(D,function(G){
   switch(G.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[]);
 },[D],"sat");
 var H=$t(function(){
  $M(C,function(I){
   var J=I.v[0];
   $R(1,[J],"I32#");
  },[]);
 },[C],"sat");
 $$SystemziPosixziInternals_setCooked1.J(H,F,E);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD8=$f(2,function(N,O){
 var P=$t(function(){
  $M(N,function(Q){
   var R=Q.v[0];
   $R(1,[R],"I32#");
  },[]);
 },[N],"sat");
 $$SystemziPosixziInternals_getEcho5.J(P,$$SystemziPosixziInternals_getEcho2,O);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD9=$f(3,function(S,T,U){
 var V=$t(function(){
  $M(S,function(W){
   var X=W.v[0];
   $R(1,[X],"I32#");
  },[]);
 },[S],"sat");
 $$SystemziPosixziInternals_setEcho1.J(V,T,U);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD12=$f(2,function(Y,Z){
 var a1=$t(function(){
  $M(Y,function(b1){
   var c1=b1.v[0];
   $R(1,[c1],"I32#");
  },[]);
 },[Y],"sat");
 $$SystemziPosixziInternals_fdFileSizze1.J(a1,Z);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD17=$f(3,function(d1,e1,f1){
 var g1=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,f1);
 var h1=g1[0],i1=g1[1];
 var j1=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(8096,0),h1);
 var k1=j1[0],l1=j1[1];
 var m1=$d(1,[i1],"sat");
 var n1=$d(2,[l1,m1],"sat");
 var p1=$hs_byteArrayContentszh(l1);
 var o1=$d(1,[p1,n1,e1,goog.math.Long.fromBits(8096,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
 $r([k1,o1]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFDzuds=$t(function(){
 $$GHCziCString_unpackCStringzh.J("base");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFDzuds1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFDzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("FD");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFDzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(2302221327,4000630249),goog.math.Long.fromBits(2077833458,4112603226),$$GHCziIOziFD_zdfTypeableFDzuds,$$GHCziIOziFD_zdfTypeableFDzuds1,$$GHCziIOziFD_zdfTypeableFDzuds2]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFD1=$D(1,function(){
 $r([goog.math.Long.fromBits(2302221327,4000630249),goog.math.Long.fromBits(2077833458,4112603226),$$GHCziIOziFD_zdfTypeableFDzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFDzuzdctypeOf=$f(1,function(q1){
 $A($$GHCziIOziFD_zdfTypeableFD1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD15=$f(1,function(r1){
 $M(r1,function(s1){
  var t1=s1.v[0];
  $M(t1,function(u1){
   switch(u1.toString()){
   case "-1":
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD14=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hGetPosn");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa7=$f(2,function(v1,w1){
 var $ff=ghc_wrapper_d26j_SEEK_CUR();
 var x1=[$$GHCziPrim_realWorldzh,$ff];
 var y1=x1[1];
 var z1=$f(1,function(A1){
  var F1=$hs_narrow32Intzh(y1);
  var $ff=ghc_wrapper_d2f0_lseek(v1,goog.math.Long.fromBits(0,0),F1);
  var B1=[A1,$ff];
  var C1=B1[0],D1=B1[1];
  var E1=$d(1,[D1],"sat");
  $r([C1,E1]);
 },[v1,y1],"sat");
 $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFD15,$$GHCziIOziFD_zdfIODeviceFD14,z1,w1],function(G1){
  var H1=G1[0],I1=G1[1];
  var J1=$t(function(){
   $M(I1,function(K1){
    var L1=K1.v[0];
    $$GHCziIntegerziType_smallInteger.J(L1);
   },[]);
  },[I1],"sat");
  $r([H1,J1]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD13=$f(2,function(M1,N1){
 $M(M1,function(O1){
  var P1=O1.v[0];
  $$GHCziIOziFD_zdwa7.J(P1,N1);
 },[N1]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzupred=$f(1,function(M){
 $$GHCziIOziFD_zdfIODeviceFD15.J(M);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("seek");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa8=$f(4,function(Q1,R1,S1,T1){
 $$GHCziIntegerziType_integerToInt.C([S1],function(V1){
  var U1=$f(1,function(W1){
   var X1=$f(1,function(Y1){
    var $ff=ghc_wrapper_d2f0_lseek(Q1,V1,W1);
    var Z1=[Y1,$ff];
    var a2=Z1[0],b2=Z1[1];
    var c2=$d(1,[b2],"sat");
    $r([a2,c2]);
   },[Q1,V1,W1],"sat");
   $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFDzupred,$$GHCziIOziFD_zdfIODeviceFDzuloc1,X1,T1],function(d2){
    var e2=d2[0];
    $r([e2,$$GHCziTuple_Z0T]);
   },[]);
  },[Q1,V1,T1],"$j");
  $M(R1,function(f2){
   switch(f2.g){
   case 1:
    var $ff=ghc_wrapper_d26e_SEEK_SET();
    var g2=[$$GHCziPrim_realWorldzh,$ff];
    var h2=g2[1];
    var i2=$hs_narrow32Intzh(h2);
    U1.J(i2);break;
   case 2:
    var $ff=ghc_wrapper_d26j_SEEK_CUR();
    var j2=[$$GHCziPrim_realWorldzh,$ff];
    var k2=j2[1];
    var l2=$hs_narrow32Intzh(k2);
    U1.J(l2);break;
   case 3:
    var $ff=ghc_wrapper_d269_SEEK_END();
    var m2=[$$GHCziPrim_realWorldzh,$ff];
    var n2=m2[1];
    var o2=$hs_narrow32Intzh(n2);
    U1.J(o2);break;
   }
  },[Q1,V1,T1,U1]);
 },[Q1,T1,R1]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD16=$f(4,function(p2,q2,r2,s2){
 $M(p2,function(t2){
  var u2=t2.v[0];
  $$GHCziIOziFD_zdwa8.J(u2,q2,r2,s2);
 },[q2,r2,s2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD11=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.setSize");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa6=$f(3,function(w2,x2,y2){
 $$GHCziIntegerziType_integerToInt.C([x2],function(L2){
  var $ff=__hscore_ftruncate(w2,L2);
  var z2=[y2,$ff];
  var A2=z2[0],B2=z2[1];
  var C2=$hs_narrow32Intzh(B2);
  switch(C2.toString()){
  case "0":
   $r([A2,$$GHCziTuple_Z0T]);break;
  default:
   var $ff=__hscore_get_errno();
   var D2=[A2,$ff];
   var E2=D2[0],F2=D2[1];
   var H2=$hs_narrow32Intzh(F2);
   var G2=$d(1,[H2],"sat");
   $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziFD_zdfIODeviceFD11,G2,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(I2){
    $$GHCziIOziException_ioError.C([I2,E2],function(J2){
     var K2=J2[0];
     $r([K2,$$GHCziTuple_Z0T]);
    },[]);
   },[E2]);
  }
 },[w2,y2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD10=$f(3,function(M2,N2,O2){
 $M(M2,function(P2){
  var Q2=P2.v[0];
  $$GHCziIOziFD_zdwa6.J(Q2,N2,O2);
 },[N2,O2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_stdout=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:310:1");
var $$GHCziIOziFD_zdwa12=$f(7,function(R2,S2,T2,U2,V2,W2,X2){
 var Y2=$f(1,function(Z2){
  var $ff=rtsSupportsBoundThreads();
  var a3=[$$GHCziPrim_realWorldzh,$ff];
  var b3=a3[1];
  $M(b3,function(c3){
   switch(c3.toString()){
   case "0":
    var g3=$hs_narrow32Intzh(S2);
    $b($hs_waitWritezh,[g3,Z2],function(f3){
     $r([f3,$$GHCziTuple_Z0T]);
    },[]);break;
   default:
    var e3=$hs_narrow32Intzh(S2);
    var d3=$d(1,[e3],"sat");
    $$GHCziEventziThread_threadWaitRead1.J($$GHCziEventziInternal_evtWrite,d3,Z2);
   }
  },[S2,Z2]);
 },[S2],"a");
 var h3=$f(2,function(i3,j3){
  $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,R2,i3,Y2,j3],function(k3){
   var l3=k3[0],m3=k3[1];
   var n3=$t(function(){
    $M(m3,function(o3){
     var p3=o3.v[0];
     var q3=$hs_narrow32Intzh(p3);
     $R(1,[q3],"I32#");
    },[]);
   },[m3],"sat");
   $r([l3,n3]);
  },[]);
 },[Y2,R2],"$sa");
 var r3=$f(1,function(s3){
  var t3=$f(1,function(u3){
   $M(U2,function(v3){
    var w3=v3.v[0];
    $M(V2,function(x3){
     var y3=x3.v[0];
     $M(W2,function(z3){
      var A3=z3.v[0];
      var F3=$hs_plusAddrzh(w3,y3);
      var $ff=ghc_wrapper_d2dl_write(S2,F3,A3);
      var B3=[u3,$ff];
      var C3=B3[0],D3=B3[1];
      var E3=$d(1,[D3],"sat");
      $r([C3,E3]);
     },[S2,w3,y3,u3]);
    },[S2,W2,w3,u3]);
   },[S2,V2,W2,u3]);
  },[S2,U2,V2,W2],"sat");
  h3.J(t3,s3);
 },[S2,h3,U2,V2,W2],"a1");
 $M(T2,function(G3){
  switch(G3.toString()){
  case "0":
   var $ff=fdReady(S2,goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var H3=[X2,$ff];
   var I3=H3[0],J3=H3[1];
   var K3=$f(1,function(L3){
    var $ff=rtsSupportsBoundThreads();
    var M3=[$$GHCziPrim_realWorldzh,$ff];
    var N3=M3[1];
    $M(N3,function(O3){
     switch(O3.toString()){
     case "0":
      r3.J(L3);break;
     default:
      $M(U2,function(P3){
       var Q3=P3.v[0];
       $M(V2,function(R3){
	var S3=R3.v[0];
	$M(W2,function(T3){
	 var U3=T3.v[0];
	 var V3=$f(1,function(W3){
	  var b4=$hs_plusAddrzh(Q3,S3);
	  var $ff=ghc_wrapper_d2d6_write(S2,b4,U3);
	  var X3=[W3,$ff];
	  var Y3=X3[0],Z3=X3[1];
	  var a4=$d(1,[Z3],"sat");
	  $r([Y3,a4]);
	 },[S2,Q3,S3,U3],"sat");
	 h3.J(V3,L3);
	},[S2,Y2,R2,h3,Q3,S3,L3]);
       },[S2,Y2,R2,h3,W2,Q3,L3]);
      },[S2,Y2,R2,h3,V2,W2,L3]);
     }
    },[S2,Y2,R2,h3,U2,V2,W2,r3,L3]);
   },[S2,h3,U2,V2,W2,r3],"a2");
   var c4=$hs_narrow32Intzh(J3);
   switch(c4.toString()){
   case "0":
    var $ff=rtsSupportsBoundThreads();
    var d4=[$$GHCziPrim_realWorldzh,$ff];
    var e4=d4[1];
    $M(e4,function(f4){
     switch(f4.toString()){
     case "0":
      var l4=$hs_narrow32Intzh(S2);
      $b($hs_waitWritezh,[l4,I3],function(k4){
       K3.J(k4);
      },[S2,Y2,R2,h3,U2,V2,W2,r3,K3]);break;
     default:
      var h4=$hs_narrow32Intzh(S2);
      var g4=$d(1,[h4],"sat");
      $$GHCziEventziThread_threadWaitRead1.C([$$GHCziEventziInternal_evtWrite,g4,I3],function(i4){
       var j4=i4[0];
       K3.J(j4);
      },[S2,Y2,R2,h3,U2,V2,W2,r3,K3]);
     }
    },[S2,Y2,R2,h3,U2,V2,W2,r3,K3,I3]);break;
   default:
    K3.J(I3);
   }break;
  default:
   r3.J(X2);
  }
 },[S2,Y2,R2,h3,U2,V2,W2,r3,X2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa4=$f(7,function(x4,y4,z4,A4,B4,C4,D4){
 var F4=$hs_narrow32Intzh(y4);
 var E4=$d(1,[F4],"lvl3");
 var G4=$f(1,function(H4){
  var $ff=rtsSupportsBoundThreads();
  var I4=[$$GHCziPrim_realWorldzh,$ff];
  var J4=I4[1];
  $M(J4,function(K4){
   switch(K4.toString()){
   case "0":
    var M4=$hs_narrow32Intzh(y4);
    $b($hs_waitReadzh,[M4,H4],function(L4){
     $r([L4,$$GHCziTuple_Z0T]);
    },[]);break;
   default:
    $$GHCziEventziThread_threadWaitRead1.J($$GHCziEventziInternal_evtRead,E4,H4);
   }
  },[y4,E4,H4]);
 },[y4,E4],"a1");
 var N4=$f(1,function(O4){
  var P4=$f(1,function(Q4){
   $M(A4,function(R4){
    var S4=R4.v[0];
    $M(B4,function(T4){
     var U4=T4.v[0];
     $M(C4,function(V4){
      var W4=V4.v[0];
      var b5=$hs_plusAddrzh(S4,U4);
      var $ff=ghc_wrapper_d2e8_read(y4,b5,W4);
      var X4=[Q4,$ff];
      var Y4=X4[0],Z4=X4[1];
      var a5=$d(1,[Z4],"sat");
      $r([Y4,a5]);
     },[y4,S4,U4,Q4]);
    },[y4,C4,S4,Q4]);
   },[y4,B4,C4,Q4]);
  },[y4,A4,B4,C4],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,x4,P4,G4,O4],function(c5){
   var d5=c5[0],e5=c5[1];
   var f5=$t(function(){
    $M(e5,function(g5){
     var h5=g5.v[0];
     $R(1,[h5],"I#");
    },[]);
   },[e5],"sat");
   $r([d5,f5]);
  },[]);
 },[y4,G4,x4,A4,B4,C4],"a2");
 $M(z4,function(i5){
  switch(i5.toString()){
  case "0":
   var $ff=fdReady(y4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var j5=[D4,$ff];
   var k5=j5[0],l5=j5[1];
   var m5=$f(1,function(n5){
    var $ff=rtsSupportsBoundThreads();
    var o5=[$$GHCziPrim_realWorldzh,$ff];
    var p5=o5[1];
    $M(p5,function(q5){
     switch(q5.toString()){
     case "0":
      N4.J(n5);break;
     default:
      $M(A4,function(r5){
       var s5=r5.v[0];
       $M(B4,function(t5){
	var u5=t5.v[0];
	$M(C4,function(v5){
	 var w5=v5.v[0];
	 var x5=$f(1,function(y5){
	  var D5=$hs_plusAddrzh(s5,u5);
	  var $ff=ghc_wrapper_d2dT_read(y4,D5,w5);
	  var z5=[y5,$ff];
	  var A5=z5[0],B5=z5[1];
	  var C5=$d(1,[B5],"sat");
	  $r([A5,C5]);
	 },[y4,s5,u5,w5],"sat");
	 $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,x4,x5,G4,n5],function(E5){
	  var F5=E5[0],G5=E5[1];
	  var H5=$t(function(){
	   $M(G5,function(I5){
	    var J5=I5.v[0];
	    $R(1,[J5],"I#");
	   },[]);
	  },[G5],"sat");
	  $r([F5,H5]);
	 },[]);
	},[y4,G4,x4,s5,u5,n5]);
       },[y4,G4,x4,C4,s5,n5]);
      },[y4,G4,x4,B4,C4,n5]);
     }
    },[y4,G4,x4,A4,B4,C4,N4,n5]);
   },[y4,G4,x4,A4,B4,C4,N4],"a3");
   var K5=$f(1,function(L5){
    var $ff=rtsSupportsBoundThreads();
    var M5=[$$GHCziPrim_realWorldzh,$ff];
    var N5=M5[1];
    $M(N5,function(O5){
     switch(O5.toString()){
     case "0":
      var S5=$hs_narrow32Intzh(y4);
      $b($hs_waitReadzh,[S5,L5],function(R5){
       m5.J(R5);
      },[y4,G4,x4,A4,B4,C4,N4,m5]);break;
     default:
      $$GHCziEventziThread_threadWaitRead1.C([$$GHCziEventziInternal_evtRead,E4,L5],function(P5){
       var Q5=P5[0];
       m5.J(Q5);
      },[y4,G4,x4,A4,B4,C4,N4,m5]);
     }
    },[y4,E4,G4,x4,A4,B4,C4,N4,m5,L5]);
   },[y4,E4,m5],"a4");
   var T5=$hs_narrow32Intzh(l5);
   switch(T5.toString()){
   case "-1":
    var $ff=__hscore_get_errno();
    var U5=[k5,$ff];
    var V5=U5[0],W5=U5[1];
    var Y5=$hs_narrow32Intzh(W5);
    var X5=$d(1,[Y5],"sat");
    $$ForeignziCziError_errnoToIOError.C([x4,X5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(Z5){
     $$GHCziIOziException_ioError.C([Z5,V5],function(a6){
      var b6=a6[0],c6=a6[1];
      $M(c6,function(d6){
       var e6=d6.v[0];
       $M(e6,function(f6){
	switch(f6.toString()){
	case "0":
	 K5.J(b6);break;
	default:
	 m5.J(b6);
	}
       },[y4,E4,G4,x4,A4,B4,C4,N4,m5,K5,b6]);
      },[y4,E4,G4,x4,A4,B4,C4,N4,m5,K5,b6]);
     },[y4,E4,G4,x4,A4,B4,C4,N4,m5,K5]);
    },[y4,E4,G4,x4,A4,B4,C4,N4,m5,K5,V5]);break;
   case "0":
    K5.J(k5);break;
   default:
    m5.J(k5);
   }break;
  default:
   N4.J(D4);
  }
 },[y4,E4,G4,x4,A4,B4,C4,N4,D4]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfRawIOFD3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdWrite");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa=$f(5,function(p6,q6,r6,s6,t6){
 var v6=$hs_int2Wordzh(t6);
 var u6=$d(1,[v6],"sat");
 $$GHCziIOziFD_zdwa12.C([$$GHCziIOziFD_zdfRawIOFD3,p6,q6,r6,$$GHCziIOziFD_zdfBufferedIOFD2,u6,s6],function(w6){
  var x6=w6[0],y6=w6[1];
  $M(y6,function(z6){
   var A6=z6.v[0];
   var B6=A6.lessThan(t6)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(B6.g){
   case 1:
    $r([x6,$$GHCziTuple_Z0T]);break;
   case 2:
    var G6=t6.subtract(A6);
    var C6=$t(function(){
     $M(r6,function(D6){
      var E6=D6.v[0];
      var F6=$hs_plusAddrzh(E6,A6);
      $R(1,[F6],"Ptr");
     },[A6]);
    },[r6,A6],"sat");
    $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa.J(p6,q6,C6,x6,G6);break;
   }
  },[p6,q6,r6,t6,x6]);
 },[p6,q6,r6,t6]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD16=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdRead");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD18=$f(2,function(v7,w7){
 $M(v7,function(x7){
  var y7=x7.v[0];
  var $ff=isatty(y7);
  var z7=[w7,$ff];
  var A7=z7[0],B7=z7[1];
  var C7=$t(function(){
   var D7=$hs_narrow32Intzh(B7);
   switch(D7.toString()){
   case "0":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[B7],"sat");
  $r([A7,C7]);
 },[w7]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD24=$f(1,function(E7){
 $M(E7,function(F7){
  var G7=F7.v[0];
  $M(G7,function(H7){
   switch(H7.toString()){
   case "-1":
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD23=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.ready");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa10=$f(4,function(I7,J7,K7,L7){
 var M7=$f(1,function(N7){
  var O7=$f(1,function(P7){
   var W7=$hs_narrow32Intzh(K7);
   var V7=$hs_narrow32Intzh(N7);
   var $ff=fdReady(I7,V7,W7,goog.math.Long.fromBits(0,0));
   var Q7=[P7,$ff];
   var R7=Q7[0],S7=Q7[1];
   var U7=$hs_narrow32Intzh(S7);
   var T7=$d(1,[U7],"sat");
   $r([R7,T7]);
  },[I7,N7,K7],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFD24,$$GHCziIOziFD_zdfIODeviceFD23,O7,L7],function(X7){
   var Y7=X7[0],Z7=X7[1];
   var a8=$t(function(){
    $M(Z7,function(b8){
     var c8=b8.v[0];
     $M(c8,function(d8){
      switch(d8.toString()){
      case "0":
       $R(1,[],"False");break;
      case "1":
       $R(2,[],"True");break;
      default:
       $A($$GHCziEnum_zdfEnumBool1);
      }
     },[]);
    },[]);
   },[Z7],"sat");
   $r([Y7,a8]);
  },[]);
 },[I7,K7,L7],"$j");
 $M(J7,function(e8){
  switch(e8.g){
  case 1:
   M7.J(goog.math.Long.fromBits(0,0));break;
  case 2:
   M7.J(goog.math.Long.fromBits(1,0));break;
  }
 },[I7,K7,L7,M7]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD22=$f(4,function(f8,g8,h8,i8){
 $M(f8,function(j8){
  var k8=j8.v[0];
  $M(h8,function(l8){
   var m8=l8.v[0];
   $$GHCziIOziFD_zdwa10.J(k8,g8,m8,i8);
  },[k8,g8,i8]);
 },[h8,g8,i8]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD4=$t(function(){
 $$ForeignziCziError_throwErrnoIfMinus1zu.J($$ForeignziCziTypes_zdfEqCInt,$$ForeignziCziTypes_zdfNumCInt);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.dup2");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD2=$t(function(){
 $$GHCziIOziFD_zdfIODeviceFD4.J($$GHCziIOziFD_zdfIODeviceFD3);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD1=$f(3,function(w8,x8,y8){
 var z8=$t(function(){
  $M(w8,function(A8){
   var B8=A8.v[0];
   $M(x8,function(C8){
    var D8=C8.v[0];
    var E8=$f(1,function(F8){
     var $ff=dup2(B8,D8);
     var G8=[F8,$ff];
     var H8=G8[0],I8=G8[1];
     var K8=$hs_narrow32Intzh(I8);
     var J8=$d(1,[K8],"sat");
     $r([H8,J8]);
    },[B8,D8],"sat");
    $A(E8);
   },[B8]);
  },[x8]);
 },[w8,x8],"sat");
 $$GHCziIOziFD_zdfIODeviceFD2.C([z8,y8],function(L8){
  var M8=L8[0];
  var N8=$t(function(){
   $M(w8,function(O8){
    var P8=O8.v[1];
    $M(x8,function(Q8){
     var R8=Q8.v[0];
     $R(1,[R8,P8],"FD");
    },[P8]);
   },[x8]);
  },[w8,x8],"sat");
  $r([M8,N8]);
 },[w8,x8]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.dup");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa5=$f(3,function(S8,T8,U8){
 var $ff=dup(S8);
 var V8=[U8,$ff];
 var W8=V8[0],X8=V8[1];
 var Y8=$hs_narrow32Intzh(X8);
 switch(Y8.toString()){
 case "-1":
  var $ff=__hscore_get_errno();
  var a9=[W8,$ff];
  var b9=a9[0],c9=a9[1];
  var e9=$hs_narrow32Intzh(c9);
  var d9=$d(1,[e9],"sat");
  $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziFD_zdfIODeviceFDzuloc,d9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(f9){
   $$GHCziIOziException_ioError.C([f9,b9],function(g9){
    var h9=g9[0],i9=g9[1];
    var j9=$t(function(){
     $M(i9,function(k9){
      var l9=k9.v[0];
      $R(1,[l9,T8],"FD");
     },[T8]);
    },[T8,i9],"sat");
    $r([h9,j9]);
   },[T8]);
  },[T8,b9]);break;
 default:
  var Z8=$d(1,[Y8,T8],"sat");
  $r([W8,Z8]);
 }
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD5=$f(2,function(m9,n9){
 $M(m9,function(o9){
  var p9=o9.v[0],q9=o9.v[1];
  $$GHCziIOziFD_zdwa5.J(p9,q9,n9);
 },[n9]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD6=$f(2,function(r9,s9){
 var t9=$t(function(){
  $M(r9,function(u9){
   var v9=u9.v[0];
   $R(1,[v9],"I32#");
  },[]);
 },[r9],"sat");
 $$SystemziPosixziInternals_fdStat1.C([t9,s9],function(w9){
  var x9=w9[0],y9=w9[1];
  $M(y9,function(z9){
   var A9=z9.v[0];
   $r([x9,A9]);
  },[x9]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD17=$f(2,function(B9,C9){
 var D9=$t(function(){
  $M(B9,function(E9){
   var F9=E9.v[0];
   $R(1,[F9],"I32#");
  },[]);
 },[B9],"sat");
 $$SystemziPosixziInternals_fdStat1.C([D9,C9],function(G9){
  var H9=G9[0],I9=G9[1];
  $M(I9,function(J9){
   var K9=J9.v[0];
   var L9=$t(function(){
    $M(K9,function(M9){
     switch(M9.g){
     case 3:
      $R(2,[],"True");break;
     case 4:
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }
    },[]);
   },[K9],"sat");
   $r([H9,L9]);
  },[H9]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD20=$f(2,function(N9,O9){
 $M(N9,function(P9){
  var Q9=P9.v[0];
  var $ff=unlockFile(Q9);
  var R9=[O9,$ff];
  var S9=R9[0];
  $r([S9,$$GHCziTuple_Z0T]);
 },[O9]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzupred1=$f(1,function(M){
 $$GHCziIOziFD_zdfIODeviceFD24.J(M);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.close");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa9=$f(2,function(T9,U9){
 var V9=$f(1,function(W9){
  var ca=$hs_narrow32Intzh(T9);
  var $ff=close(ca);
  var X9=[W9,$ff];
  var Y9=X9[0],Z9=X9[1];
  var ba=$hs_narrow32Intzh(Z9);
  var aa=$d(1,[ba],"sat");
  $r([Y9,aa]);
 },[T9],"sat");
 $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFDzupred1,$$GHCziIOziFD_zdfIODeviceFDzuloc2,V9,U9],function(da){
  var ea=da[0];
  $r([ea,$$GHCziTuple_Z0T]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD21=$f(2,function(fa,ga){
 $M(fa,function(ha){
  var ia=ha.v[0];
  $$GHCziIOziFD_zdwa9.J(ia,ga);
 },[ga]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD19=$f(2,function(ja,ka){
 var la=$f(1,function(M){
  $$GHCziIOziFD_zdfIODeviceFD20.J(ja,M);
 },[ja],"sat");
 var ma=$f(1,function(na){
  var $ff=rtsSupportsBoundThreads();
  var oa=[$$GHCziPrim_realWorldzh,$ff];
  var pa=oa[1];
  $M(pa,function(qa){
   switch(qa.toString()){
   case "0":
    $M(ja,function(Ca){
     var Da=Ca.v[0];
     var Ea=$hs_narrow32Intzh(Da);
     $$GHCziIOziFD_zdwa9.J(Ea,na);
    },[na]);break;
   default:
    $M($$GHCziEventziThread_eventManager,function(ra){
     var sa=ra.v[0];
     var ta=$hs_readMutVarzh(sa,na);
     var ua=ta[0],va=ta[1];
     $M(va,function(wa){
      switch(wa.g){
      case 1:
       $$GHCziIO_failIO.J($$GHCziEventziThread_closeFdWith2,ua);break;
      case 2:
       var xa=wa.v[0];
       var ya=$t(function(){
	$M(ja,function(za){
	 var Aa=za.v[0];
	 var Ba=$hs_narrow32Intzh(Aa);
	 $R(1,[Ba],"I32#");
	},[]);
       },[ja],"sat");
       $$GHCziEventziManager_closeFd1.J(xa,$$GHCziIOziFD_zdfIODeviceFD21,ya,ua);break;
      }
     },[ua,ja]);
    },[na,ja]);
   }
  },[na,ja]);
 },[ja],"sat");
 $$GHCziIO_finally1.J(ma,la,ka);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD=$D(1,function(){
 $r([$$GHCziIOziFD_zdfIODeviceFD22,$$GHCziIOziFD_zdfIODeviceFD19,$$GHCziIOziFD_zdfIODeviceFD18,$$GHCziIOziFD_zdfIODeviceFD17,$$GHCziIOziFD_zdfIODeviceFD16,$$GHCziIOziFD_zdfIODeviceFD13,$$GHCziIOziFD_zdfIODeviceFD12,$$GHCziIOziFD_zdfIODeviceFD10,$$GHCziIOziFD_zdfIODeviceFD9,$$GHCziIOziFD_zdfIODeviceFD8,$$GHCziIOziFD_zdfIODeviceFD7,$$GHCziIOziFD_zdfIODeviceFD6,$$GHCziIOziFD_zdfIODeviceFD5,$$GHCziIOziFD_zdfIODeviceFD1]);
},"at libraries/base/GHC/IO/FD.hs:106:10");
var $$GHCziIOziFD_zdfBufferedIOFD6=$f(4,function(Jd,Kd,Ld,Md){
 Kd.C([Md],function(Nd){
  var Od=Nd[0],Pd=Nd[1];
  $M(Pd,function(Qd){
   var Rd=Qd.v[0];
   $M(Rd,function(Sd){
    switch(Sd.toString()){
    case "-1":
     var $ff=__hscore_get_errno();
     var Td=[Od,$ff];
     var Ud=Td[0],Vd=Td[1];
     var Wd=$hs_narrow32Intzh(Vd);
     switch(Wd.toString()){
     case "4":
      $$GHCziIOziFD_zdfBufferedIOFD6.J(Jd,Kd,Ld,Ud);break;
     case "11":
      Ld.J(Ud);break;
     default:
      $$ForeignziCziError_throwErrno1.J(Jd,Ud);
     }break;
    default:
     $r([Od,Qd]);
    }
   },[Kd,Od,Qd,Jd,Ld]);
  },[Kd,Od,Jd,Ld]);
 },[Kd,Jd,Ld]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD5=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD13=$f(1,function(Xd){
 $r([Xd,$$GHCziIOziFD_zdfBufferedIOFD5]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD14=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdReadNonBlocking");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFDzuloc=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdWriteNonBlocking");
},[],"at libraries/base/GHC/IO/FD.hs:547:26");
var $$GHCziIOziFD_zdfBufferedIOFD4=$f(1,function(Ff){
 $r([Ff,$$GHCziIOziFD_zdfBufferedIOFD5]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD3=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa1=$f(5,function(Gf,Hf,If,Jf,Kf){
 var Lf=$t(function(){
  $M(Jf,function(Mf){
   var Nf=Mf.v[0];
   var Of=$hs_int2Wordzh(Nf);
   $R(1,[Of],"W64#");
  },[]);
 },[Jf],"a");
 var Pf=$f(1,function(Qf){
  $M(If,function(Rf){
   var Sf=Rf.v[0];
   $M(Lf,function(Tf){
    var Uf=Tf.v[0];
    var Vf=$f(1,function(Wf){
     var bg=$hs_plusAddrzh(Sf,goog.math.Long.fromBits(0,0));
     var $ff=ghc_wrapper_d2dl_write(Gf,bg,Uf);
     var Xf=[Wf,$ff];
     var Yf=Xf[0],Zf=Xf[1];
     var ag=$d(1,[Zf],"sat");
     $r([Yf,ag]);
    },[Gf,Sf,Uf],"sat");
    $$GHCziIOziFD_zdfBufferedIOFD6.C([$$GHCziIOziFD_zdfBufferedIOFDzuloc,Vf,$$GHCziIOziFD_zdfBufferedIOFD4,Qf],function(cg){
     var dg=cg[0],eg=cg[1];
     $M(eg,function(fg){
      var gg=fg.v[0];
      $M(gg,function(hg){
       switch(hg.toString()){
       case "-1":
	$r([dg,$$GHCziIOziFD_zdfBufferedIOFD3]);break;
       default:
	var jg=$hs_narrow32Intzh(hg);
	var ig=$d(1,[jg],"sat");
	$r([dg,ig]);
       }
      },[dg]);
     },[dg]);
    },[]);
   },[Gf,Sf,Qf]);
  },[Lf,Gf,Qf]);
 },[Lf,If,Gf],"a1");
 $M(Hf,function(kg){
  switch(kg.toString()){
  case "0":
   var $ff=fdReady(Gf,goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var rg=[Kf,$ff];
   var sg=rg[0],tg=rg[1];
   var ug=$hs_narrow32Intzh(tg);
   switch(ug.toString()){
   case "0":
    $r([sg,$$GHCziIOziFD_zdfBufferedIOFD2]);break;
   default:
    var $ff=rtsSupportsBoundThreads();
    var vg=[$$GHCziPrim_realWorldzh,$ff];
    var wg=vg[1];
    $M(wg,function(xg){
     switch(xg.toString()){
     case "0":
      Pf.C([sg],function(Rg){
       var Sg=Rg[0],Tg=Rg[1];
       var Ug=$t(function(){
	$M(Tg,function(Vg){
	 var Wg=Vg.v[0];
	 $R(1,[Wg],"I#");
	},[]);
       },[Tg],"sat");
       $r([Sg,Ug]);
      },[]);break;
     default:
      $M(If,function(yg){
       var zg=yg.v[0];
       $M(Lf,function(Ag){
	var Bg=Ag.v[0];
	var Cg=$f(1,function(Dg){
	 var Ig=$hs_plusAddrzh(zg,goog.math.Long.fromBits(0,0));
	 var $ff=ghc_wrapper_d2d6_write(Gf,Ig,Bg);
	 var Eg=[Dg,$ff];
	 var Fg=Eg[0],Gg=Eg[1];
	 var Hg=$d(1,[Gg],"sat");
	 $r([Fg,Hg]);
	},[Gf,zg,Bg],"sat");
	$$GHCziIOziFD_zdfBufferedIOFD6.C([$$GHCziIOziFD_zdfBufferedIOFDzuloc,Cg,$$GHCziIOziFD_zdfBufferedIOFD4,sg],function(Jg){
	 var Kg=Jg[0],Lg=Jg[1];
	 $M(Lg,function(Mg){
	  var Ng=Mg.v[0];
	  $M(Ng,function(Og){
	   switch(Og.toString()){
	   case "-1":
	    $r([Kg,$$GHCziIOziFD_zdfBufferedIOFD2]);break;
	   default:
	    var Qg=$hs_narrow32Intzh(Og);
	    var Pg=$d(1,[Qg],"sat");
	    $r([Kg,Pg]);
	   }
	  },[Kg]);
	 },[Kg]);
	},[]);
       },[Gf,zg,sg]);
      },[Lf,Gf,sg]);
     }
    },[Lf,If,Gf,Pf,sg]);
   }break;
  default:
   Pf.C([Kf],function(lg){
    var mg=lg[0],ng=lg[1];
    var og=$t(function(){
     $M(ng,function(pg){
      var qg=pg.v[0];
      $R(1,[qg],"I#");
     },[]);
    },[ng],"sat");
    $r([mg,og]);
   },[]);
  }
 },[Lf,If,Gf,Pf,Kf]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD7=$f(3,function(eh,fh,gh){
 $M(eh,function(hh){
  var ih=hh.v[0],jh=hh.v[1];
  $M(fh,function(kh){
   var lh=kh.v[0],mh=kh.v[1],nh=kh.v[2],oh=kh.v[3],ph=kh.v[4],qh=kh.v[5];
   var xh=qh.subtract(ph);
   var sh=$hs_plusAddrzh(lh,ph);
   var rh=$d(1,[sh],"sat");
   $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa.C([ih,jh,rh,gh,xh],function(th){
    var uh=th[0];
    var wh=$hs_touchzh(mh,uh);
    var vh=$d(1,[lh,mh,nh,oh,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
    $r([wh,vh]);
   },[lh,mh,nh,oh]);
  },[ih,jh,gh]);
 },[fh,gh]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD12=$D(2,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD2]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD11=$D(2,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD2]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD10=$D(2,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD2]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa2=$f(9,function(yh,zh,Ah,Bh,Ch,Dh,Eh,Fh,Gh){
 $M(zh,function(Hh){
  switch(Hh.toString()){
  case "0":
   var $ff=fdReady(yh,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var ki=[Gh,$ff];
   var li=ki[0],mi=ki[1];
   var ni=$hs_narrow32Intzh(mi);
   switch(ni.toString()){
   case "0":
    var Si=$hs_touchzh(Bh,li);
    var Qi=$d(1,[Ah,Bh,Ch,Dh,Eh,Fh],"sat");
    var Ri=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD10,Qi],"sat");
    $r([Si,Ri]);break;
   default:
    var oi=$f(1,function(pi){
     var xi=Dh.subtract(Fh);
     var vi=$hs_int2Wordzh(xi);
     var wi=$hs_plusAddrzh(Ah,Fh);
     var ui=$hs_plusAddrzh(wi,goog.math.Long.fromBits(0,0));
     var $ff=ghc_wrapper_d2dT_read(yh,ui,vi);
     var qi=[pi,$ff];
     var ri=qi[0],si=qi[1];
     var ti=$d(1,[si],"sat");
     $r([ri,ti]);
    },[yh,Ah,Fh,Dh],"sat");
    $$GHCziIOziFD_zdfBufferedIOFD6.C([$$GHCziIOziFD_zdfBufferedIOFD14,oi,$$GHCziIOziFD_zdfBufferedIOFD13,li],function(yi){
     var zi=yi[0],Ai=yi[1];
     $M(Ai,function(Bi){
      var Ci=Bi.v[0];
      $M(Ci,function(Di){
       switch(Di.toString()){
       case "-1":
	var Mi=$hs_touchzh(Bh,zi);
	var Ki=$d(1,[Ah,Bh,Ch,Dh,Eh,Fh],"sat");
	var Li=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD11,Ki],"sat");
	$r([Mi,Li]);break;
       case "0":
	var Pi=$hs_touchzh(Bh,zi);
	var Ni=$d(1,[Ah,Bh,Ch,Dh,Eh,Fh],"sat");
	var Oi=$d(1,[$$DataziMaybe_Nothing,Ni],"sat");
	$r([Pi,Oi]);break;
       default:
	var Ji=$hs_touchzh(Bh,zi);
	var Fi=Fh.add(Di);
	var Ei=$d(1,[Ah,Bh,Ch,Dh,Eh,Fi],"sat");
	var Gi=$d(1,[Di],"sat");
	var Hi=$d(2,[Gi],"sat");
	var Ii=$d(1,[Hi,Ei],"sat");
	$r([Ji,Ii]);
       }
      },[Ah,Fh,Dh,Bh,Ch,Eh,zi]);
     },[Ah,Fh,Dh,Bh,Ch,Eh,zi]);
    },[Ah,Fh,Dh,Bh,Ch,Eh]);
   }break;
  default:
   var Ih=$f(1,function(Jh){
    var Rh=Dh.subtract(Fh);
    var Ph=$hs_int2Wordzh(Rh);
    var Qh=$hs_plusAddrzh(Ah,Fh);
    var Oh=$hs_plusAddrzh(Qh,goog.math.Long.fromBits(0,0));
    var $ff=ghc_wrapper_d2e8_read(yh,Oh,Ph);
    var Kh=[Jh,$ff];
    var Lh=Kh[0],Mh=Kh[1];
    var Nh=$d(1,[Mh],"sat");
    $r([Lh,Nh]);
   },[yh,Ah,Fh,Dh],"sat");
   $$GHCziIOziFD_zdfBufferedIOFD6.C([$$GHCziIOziFD_zdfBufferedIOFD14,Ih,$$GHCziIOziFD_zdfBufferedIOFD13,Gh],function(Sh){
    var Th=Sh[0],Uh=Sh[1];
    $M(Uh,function(Vh){
     var Wh=Vh.v[0];
     $M(Wh,function(Xh){
      switch(Xh.toString()){
      case "-1":
       var gi=$hs_touchzh(Bh,Th);
       var ei=$d(1,[Ah,Bh,Ch,Dh,Eh,Fh],"sat");
       var fi=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD12,ei],"sat");
       $r([gi,fi]);break;
      case "0":
       var ji=$hs_touchzh(Bh,Th);
       var hi=$d(1,[Ah,Bh,Ch,Dh,Eh,Fh],"sat");
       var ii=$d(1,[$$DataziMaybe_Nothing,hi],"sat");
       $r([ji,ii]);break;
      default:
       var di=$hs_touchzh(Bh,Th);
       var Zh=Fh.add(Xh);
       var Yh=$d(1,[Ah,Bh,Ch,Dh,Eh,Zh],"sat");
       var ai=$d(1,[Xh],"sat");
       var bi=$d(2,[ai],"sat");
       var ci=$d(1,[bi,Yh],"sat");
       $r([di,ci]);
      }
     },[Ah,Fh,Dh,Bh,Th,Ch,Eh]);
    },[Ah,Fh,Dh,Bh,Th,Ch,Eh]);
   },[Ah,Fh,Dh,Bh,Ch,Eh]);
  }
 },[yh,Ah,Fh,Dh,Gh,Bh,Ch,Eh]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD9=$f(3,function(Ti,Ui,Vi){
 $M(Ti,function(Wi){
  var Xi=Wi.v[0],Yi=Wi.v[1];
  $M(Ui,function(Zi){
   var aj=Zi.v[0],bj=Zi.v[1],cj=Zi.v[2],dj=Zi.v[3],ej=Zi.v[4],fj=Zi.v[5];
   $$GHCziIOziFD_zdwa2.J(Xi,Yi,aj,bj,cj,dj,ej,fj,Vi);
  },[Xi,Yi,Vi]);
 },[Ui,Vi]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa=$f(9,function(gj,hj,ij,jj,kj,lj,mj,nj,oj){
 var qj=nj.subtract(mj);
 var pj=$d(1,[qj],"sat");
 var sj=$hs_plusAddrzh(ij,mj);
 var rj=$d(1,[sj],"sat");
 $$GHCziIOziFD_zdwa1.C([gj,hj,rj,pj,oj],function(tj){
  var uj=tj[0],vj=tj[1];
  var Bj=$hs_touchzh(jj,uj);
  var wj=$t(function(){
   $M(vj,function(xj){
    var yj=xj.v[0];
    var zj=yj.equals(nj)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(zj.g){
    case 1:
     $R(1,[ij,jj,kj,lj,yj,nj],"Buffer");break;
    case 2:
     $R(1,[ij,jj,kj,lj,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
    }
   },[ij,nj,jj,kj,lj]);
  },[ij,nj,jj,vj,kj,lj],"sat");
  var Aj=$d(1,[vj,wj],"sat");
  $r([Bj,Aj]);
 },[ij,nj,jj,kj,lj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD1=$f(3,function(Cj,Dj,Ej){
 $M(Cj,function(Fj){
  var Gj=Fj.v[0],Hj=Fj.v[1];
  $M(Dj,function(Ij){
   var Jj=Ij.v[0],Kj=Ij.v[1],Lj=Ij.v[2],Mj=Ij.v[3],Nj=Ij.v[4],Oj=Ij.v[5];
   $$GHCziIOziFD_zdwa.J(Gj,Hj,Jj,Kj,Lj,Mj,Nj,Oj,Ej);
  },[Gj,Hj,Ej]);
 },[Dj,Ej]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa3=$f(9,function(Pj,Qj,Rj,Sj,Tj,Uj,Vj,Wj,Xj){
 var lk=Uj.subtract(Wj);
 var Zj=$hs_int2Wordzh(lk);
 var Yj=$d(1,[Zj],"sat");
 var bk=$hs_plusAddrzh(Rj,Wj);
 var ak=$d(1,[bk],"sat");
 $$GHCziIOziFD_zdwa4.C([$$GHCziIOziFD_zdfBufferedIOFD16,Pj,Qj,ak,$$GHCziIOziFD_zdfBufferedIOFD2,Yj,Xj],function(ck){
  var dk=ck[0],ek=ck[1];
  var kk=$hs_touchzh(Sj,dk);
  var fk=$t(function(){
   $M(ek,function(gk){
    var hk=gk.v[0];
    var ik=Wj.add(hk);
    $R(1,[Rj,Sj,Tj,Uj,Vj,ik],"Buffer");
   },[Rj,Wj,Uj,Sj,Tj,Vj]);
  },[Rj,Wj,Uj,Sj,ek,Tj,Vj],"sat");
  var jk=$d(1,[ek,fk],"sat");
  $r([kk,jk]);
 },[Rj,Wj,Uj,Sj,Tj,Vj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD15=$f(3,function(mk,nk,ok){
 $M(mk,function(pk){
  var qk=pk.v[0],rk=pk.v[1];
  $M(nk,function(sk){
   var tk=sk.v[0],uk=sk.v[1],vk=sk.v[2],wk=sk.v[3],xk=sk.v[4],yk=sk.v[5];
   $$GHCziIOziFD_zdwa3.J(qk,rk,tk,uk,vk,wk,xk,yk,ok);
  },[qk,rk,ok]);
 },[nk,ok]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD8=$f(3,function(zk,Ak,Bk){
 var Ck=$t(function(){
  $M(Ak,function(Dk){
   var Ek=Dk.v[0],Fk=Dk.v[1],Gk=Dk.v[3];
   $R(1,[Ek,Fk,$$GHCziIOziBuffer_WriteBuffer,Gk,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
  },[]);
 },[Ak],"sat");
 $r([Bk,Ck]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD=$D(1,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD17,$$GHCziIOziFD_zdfBufferedIOFD15,$$GHCziIOziFD_zdfBufferedIOFD9,$$GHCziIOziFD_zdfBufferedIOFD8,$$GHCziIOziFD_zdfBufferedIOFD7,$$GHCziIOziFD_zdfBufferedIOFD1]);
},"at libraries/base/GHC/IO/FD.hs:129:10");
var $$GHCziIOziFD$f=$F(1,function(Cl){
 $M(Cl,function(Dl){
  var El=Dl.v[0];
  $M(El,function(Fl){
   switch(Fl.toString()){
   case "-1":
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},"lvl");
var $$GHCziIOziHandle_hFlush2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hFlush");
},[],"in `base:GHC.IO.Handle'");
var $$GHCziIOziHandle_hFlush1=$f(2,function(N,O){
 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandle_hFlush2,N,$$GHCziIOziHandleziInternals_flushWriteBuffer1,O);
},[],"in `base:GHC.IO.Handle'");
var $$GHCziIOziHandle_hFlush=$f(2,function(w,x){
 $$GHCziIOziHandle_hFlush1.J(w,x);
},[],"at libraries/base/GHC/IO/Handle.hs:293:1");
var $$GHCziIOziHandleziFD_stdout=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziHandleziFD$g);
},[],"at libraries/base/GHC/IO/Handle/FD.hs:63:1");
var $$GHCziIOziHandleziFD$a=$F(3,function(W3,X3,Y3){
 $b($hs_takeMVarzh,[X3,Y3],function(Z3){
  var a4=Z3[0],b4=Z3[1];
  $M(b4,function(c4){
   var d4=c4.v[1],e4=c4.v[3],f4=c4.v[4],g4=c4.v[5],h4=c4.v[10],i4=c4.v[11];
   var j4=$hs_readMutVarzh(g4,a4);
   var k4=j4[0],l4=j4[1];
   $M(l4,function(m4){
    var n4=m4.v[2];
    var o4=$f(1,function(p4){
     $M(f4,function(q4){
      switch(q4.g){
      case 1:
       var R4=$t(function(){
	$$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(W3);
       },[W3],"sat");
       $b($hs_putMVarzh,[X3,R4,p4],function(S4){
	$r([S4,$$GHCziTuple_Z0T]);
       },[]);break;
      default:
       $M(i4,function(r4){
	switch(r4.g){
	case 1:
	 $M(h4,function(s4){
	  switch(s4.g){
	  case 1:
	   var t4=$t(function(){
	    $$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(W3);
	   },[W3],"sat");
	   $b($hs_putMVarzh,[X3,t4,p4],function(u4){
	    $r([u4,$$GHCziTuple_Z0T]);
	   },[]);break;
	  case 2:
	   var v4=s4.v[0];
	   $M(v4,function(w4){
	    var x4=w4.v[2];
	    x4.C([p4],function(y4){
	     var z4=y4[0];
	     var A4=$t(function(){
	      $$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(W3);
	     },[W3],"sat");
	     $b($hs_putMVarzh,[X3,A4,z4],function(B4){
	      $r([B4,$$GHCziTuple_Z0T]);
	     },[]);
	    },[X3,W3]);
	   },[X3,W3,p4]);break;
	  }
	 },[X3,W3,p4]);break;
	case 2:
	 var C4=r4.v[0];
	 $M(C4,function(D4){
	  var E4=D4.v[2];
	  E4.C([p4],function(F4){
	   var G4=F4[0];
	   $M(h4,function(H4){
	    switch(H4.g){
	    case 1:
	     var I4=$t(function(){
	      $$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(W3);
	     },[W3],"sat");
	     $b($hs_putMVarzh,[X3,I4,G4],function(J4){
	      $r([J4,$$GHCziTuple_Z0T]);
	     },[]);break;
	    case 2:
	     var K4=H4.v[0];
	     $M(K4,function(L4){
	      var M4=L4.v[2];
	      M4.C([G4],function(N4){
	       var O4=N4[0];
	       var P4=$t(function(){
		$$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(W3);
	       },[W3],"sat");
	       $b($hs_putMVarzh,[X3,P4,O4],function(Q4){
		$r([Q4,$$GHCziTuple_Z0T]);
	       },[]);
	      },[X3,W3]);
	     },[X3,W3,G4]);break;
	    }
	   },[X3,W3,G4]);
	  },[X3,h4,W3]);
	 },[X3,h4,W3,p4]);break;
	}
       },[X3,h4,W3,p4]);
      }
     },[X3,i4,h4,W3,p4]);
    },[X3,f4,i4,h4,W3],"a4");
    $M(n4,function(T4){
     switch(T4.g){
     case 1:
      o4.J(k4);break;
     case 2:
      var U4=$hs_readMutVarzh(g4,k4);
      var V4=U4[0],W4=U4[1];
      $M(W4,function(X4){
       var Y4=X4.v[4],Z4=X4.v[5];
       var a5=Y4.equals(Z4)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(a5.g){
       case 1:
	$$GHCziIOziBufferedIO_flushWriteBuffer.C([d4,e4,X4,V4],function(b5){
	 var c5=b5[0],d5=b5[1];
	 var e5=$hs_writeMutVarzh(g4,d5,c5);
	 o4.J(e5);
	},[X3,g4,f4,i4,h4,W3,o4]);break;
       case 2:
	o4.J(V4);break;
       }
      },[X3,g4,f4,i4,h4,W3,o4,d4,e4,V4]);break;
     }
    },[X3,g4,f4,i4,h4,W3,o4,k4,d4,e4]);
   },[X3,g4,f4,i4,h4,W3,k4,d4,e4]);
  },[X3,a4,W3]);
 },[X3,W3]);
},"$wa1");
var $$GHCziIOziHandleziFD$b=$F(3,function(f5,g5,h5){
 $M(g5,function(i5){
  var j5=i5.v[0];
  $$GHCziIOziHandleziFD$a.J(f5,j5,h5);
 },[f5,h5]);
},"a");
var $$GHCziIOziHandleziFD$d=$D(2,function(){
 $r([$$GHCziIOziHandleziFD$b]);
},"lvl1");
var $$GHCziIOziHandleziFD$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<stdout>");
},"lvl3");
var $$GHCziIOziHandleziFD$g=$F(1,function(s5){
 var z5=$hs_noDuplicatezh(s5);
 $M($$GHCziIOziEncoding_getLocaleEncoding1,function(t5){
  var u5=t5.v[0];
  u5.C([z5],function(v5){
   var w5=v5[0],x5=v5[1];
   var y5=$d(2,[x5],"sat");
   $$GHCziIOziHandleziInternals_mkDuplexHandle5.J($$GHCziIOziFD_zdfIODeviceFD,$$GHCziIOziFD_zdfBufferedIOFD,$$GHCziIOziFD_zdfTypeableFDzuzdctypeOf,$$GHCziIOziFD_stdout,$$GHCziIOziHandleziFD$f,$$GHCziIOziHandleziTypes_WriteHandle,$$GHCziTypes_True,y5,$$GHCziIOziHandleziTypes_noNewlineTranslation,$$GHCziIOziHandleziFD$d,$$DataziMaybe_Nothing,w5);
  },[]);
 },[z5]);
},"lvl4");
var $$GHCziIOziHandleziInternals_zdwa=$f(5,function(c,d,e,f,g){
 var h=$f(3,function(i,j,k){
  c.C([i,j,k],function(l){
   var m=l[0],n=l[1];
   $M(n,function(o){
    var p=o.v[0],q=o.v[1],r=o.v[2];
    $M(p,function(s){
     switch(s.g){
     case 3:
      $M(i,function(u){
       var v=u.v[4];
       $M(q,function(w){
	var x=w.v[4];
	var y=v.equals(x)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(y.g){
	case 1:
	 var z=$d(1,[w,r],"sat");
	 $r([m,z]);break;
	case 2:
	 d.C([w,r,m],function(A){
	  var B=A[0],C=A[1];
	  $M(C,function(D){
	   var E=D.v[0],F=D.v[1];
	   h.J(E,F,B);
	  },[c,d,B,h]);
	 },[c,d,h]);break;
	}
       },[c,m,r,v,d,h]);
      },[c,m,q,r,d,h]);break;
     default:
      var t=$d(1,[q,r],"sat");
      $r([m,t]);
     }
    },[i,c,m,q,r,d,h]);
   },[i,c,m,d,h]);
  },[i,c,d,h]);
 },[c,d],"$wa4");
 h.J(e,f,g);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantSeekableHandle5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("handle is closed");
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_augmentIOError=$f(3,function(T,U,V){
 $M(T,function(W){
  var X=W.v[1],Y=W.v[3],Z=W.v[4],a1=W.v[5];
  var b1=$t(function(){
   $M(a1,function(c1){
    switch(c1.g){
    case 1:
     $M(V,function(d1){
      switch(d1.g){
      case 1:
       var e1=d1.v[0];
       $R(2,[e1],"Just");break;
      case 2:
       var f1=d1.v[0];
       $R(2,[f1],"Just");break;
      }
     },[]);break;
    case 2:
     $A(c1);break;
    }
   },[V]);
  },[V,a1],"sat");
  var g1=$d(2,[V],"sat");
  $R(1,[g1,X,U,Y,Z,b1],"IOError");
 },[V,U]);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:214:1");
var $$GHCziIOziHandleziInternals_ioezufinalizzedHandle=$f(1,function(h1){
 var i1=$d(2,[h1],"sat");
 var j1=$d(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$k,$$DataziMaybe_Nothing,i1],"sat");
 $$GHCziException_throw2.J(j1,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:345:1");
var $$GHCziIOziHandleziInternals_flushWriteBuffer1=$f(2,function(v3,w3){
 $M(v3,function(x3){
  var y3=x3.v[1],z3=x3.v[3],A3=x3.v[5];
  var B3=$hs_readMutVarzh(A3,w3);
  var C3=B3[0],D3=B3[1];
  $M(D3,function(E3){
   var F3=E3.v[2];
   $M(F3,function(G3){
    switch(G3.g){
    case 1:
     $r([C3,$$GHCziTuple_Z0T]);break;
    case 2:
     var H3=$hs_readMutVarzh(A3,C3);
     var I3=H3[0],J3=H3[1];
     $M(J3,function(K3){
      var L3=K3.v[4],M3=K3.v[5];
      var N3=L3.equals(M3)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(N3.g){
      case 1:
       $$GHCziIOziBufferedIO_flushWriteBuffer.C([y3,z3,K3,I3],function(O3){
	var P3=O3[0],Q3=O3[1];
	var R3=$hs_writeMutVarzh(A3,Q3,P3);
	$r([R3,$$GHCziTuple_Z0T]);
       },[A3]);break;
      case 2:
       $r([I3,$$GHCziTuple_Z0T]);break;
      }
     },[A3,y3,z3,I3]);break;
    }
   },[A3,C3,y3,z3]);
  },[A3,C3,y3,z3]);
 },[w3]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushBuffer4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("cannot flush the read buffer: underlying device is not seekable");
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushBuffer3=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_flushBuffer4,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushBuffer2=$f(2,function(j7,k7){
 $M(j7,function(l7){
  var m7=l7.v[0],n7=l7.v[3],o7=l7.v[5];
  var p7=$hs_readMutVarzh(o7,k7);
  var q7=p7[0],r7=p7[1];
  $M(r7,function(s7){
   var t7=s7.v[0],u7=s7.v[1],v7=s7.v[2],w7=s7.v[3],x7=s7.v[4],y7=s7.v[5];
   var z7=x7.equals(y7)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(z7.g){
   case 1:
    $$GHCziIOziDevice_isSeekable.C([m7,n7,q7],function(A7){
     var B7=A7[0],C7=A7[1];
     var D7=$f(1,function(E7){
      var F7=$t(function(){
       var H7=y7.subtract(x7);
       var G7=H7.negate();
       $$GHCziIntegerziType_smallInteger.J(G7);
      },[x7,y7],"sat");
      $$GHCziIOziDevice_seek.C([m7,n7,$$GHCziIOziDevice_RelativeSeek,F7,E7],function(I7){
       var J7=I7[0];
       var K7=$d(1,[t7,u7,v7,w7,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
       var L7=$hs_writeMutVarzh(o7,K7,J7);
       $r([L7,$$GHCziTuple_Z0T]);
      },[o7,t7,u7,v7,w7]);
     },[o7,x7,y7,m7,n7,t7,u7,v7,w7],"a5");
     $M(C7,function(M7){
      switch(M7.g){
      case 1:
       $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_flushBuffer3,B7],function(N7){
	var O7=N7[0];
	D7.J(O7);
       },[o7,x7,y7,m7,n7,t7,u7,v7,w7,D7]);break;
      case 2:
       D7.J(B7);break;
      }
     },[o7,x7,y7,m7,n7,t7,u7,v7,w7,D7,B7]);
    },[o7,x7,y7,m7,n7,t7,u7,v7,w7]);break;
   case 2:
    $r([q7,$$GHCziTuple_Z0T]);break;
   }
  },[o7,m7,n7,q7]);
 },[k7]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_mkDuplexHandle5=$f(12,function(Z9,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka){
 var la=$t(function(){
  $M(ea,function(ma){
   switch(ma.g){
   case 3:
    $R(1,[],"ReadBuffer");break;
   default:
    $R(2,[],"WriteBuffer");
   }
  },[]);
 },[ea],"buf_state");
 var na=$t(function(){
  $$GHCziIOziBufferedIO_newBuffer.J(aa,ca,la);
 },[la,aa,ca],"lvl18");
 var oa=$t(function(){
  $M(ha,function(pa){
   var qa=pa.v[0];
   $A(qa);
  },[]);
 },[ha],"lvl19");
 var ra=$t(function(){
  $M(ha,function(sa){
   var ta=sa.v[1];
   $A(ta);
  },[]);
 },[ha],"lvl20");
 var ua=$t(function(){
  $$GHCziIOziDevice_isTerminal.J(Z9);
 },[Z9],"lvl21");
 var va=$f(3,function(wa,xa,ya){
  na.C([ya],function(za){
   var Aa=za[0],Ba=za[1];
   var Ca=$hs_newMutVarzh(Ba,Aa);
   var Da=Ca[0],Ea=Ca[1];
   var Fa=$d(1,[$$GHCziIOziHandleziInternals$n,Ba],"sat");
   var Ga=$hs_newMutVarzh(Fa,Da);
   var Ha=Ga[0],Ia=Ga[1];
   var Ja=$f(4,function(Ka,La,Ma,Na){
    var Oa=$hs_newMutVarzh($$GHCziIOziHandleziTypes_BufferListNil,Ka);
    var Pa=Oa[0],Qa=Oa[1];
    var Ra=$hs_newMVarzh(Pa);
    var Sa=Ra[0],Ta=Ra[1];
    var Ua=$t(function(){
     $M(ca,function(Va){
      $R(1,[Z9,aa,ba,Va,ea,Ea,Na,Ia,La,Qa,wa,xa,ga,oa,ra,ja],"Handle__");
     },[ea,aa,oa,ra,Z9,ba,Ea,Na,Ia,La,Qa,wa,xa,ga,ja]);
    },[ea,aa,ca,oa,ra,Z9,ba,Ea,Na,Ia,La,Qa,wa,xa,ga,ja],"sat");
    $b($hs_putMVarzh,[Ta,Ua,Sa],function(Ya){
     $M(ia,function(Wa){
      switch(Wa.g){
      case 1:
       var Xa=$d(1,[da,Ta],"sat");
       $r([Ya,Xa]);break;
      case 2:
       var Za=Wa.v[0];
       var ab=$t(function(){
	var bb=$d(1,[Ta],"sat");
	Za.J(da,bb);
       },[Ta,da,Za],"sat");
       var cb=$hs_mkWeakzh(Ta,$$GHCziTuple_Z0T,ab,Ya);
       var db=cb[0];
       var eb=$d(1,[da,Ta],"sat");
       $r([db,eb]);break;
      }
     },[Ta,Ya,da]);
    },[Ta,ia,da]);
   },[ea,aa,ca,oa,ra,Z9,ba,Ea,Ia,wa,xa,ga,ja,ia,da],"$s$w$j");
   $M(fa,function(fb){
    switch(fb.g){
    case 1:
     var gb=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Ha);
     var hb=gb[0],ib=gb[1];
     var jb=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(8192,0),hb);
     var kb=jb[0],lb=jb[1];
     var mb=$d(1,[ib],"sat");
     var nb=$d(2,[lb,mb],"sat");
     var pb=$hs_byteArrayContentszh(lb);
     var ob=$d(1,[pb,nb,la,goog.math.Long.fromBits(2048,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
     var qb=$hs_newMutVarzh(ob,kb);
     var rb=qb[0],sb=qb[1];
     Ja.J(rb,sb,$$GHCziPrim_coercionTokenzh,$$GHCziIOziHandleziTypes_NoBuffering);break;
    case 2:
     var tb=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Ha);
     var ub=tb[0],vb=tb[1];
     var wb=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(8192,0),ub);
     var xb=wb[0],yb=wb[1];
     var zb=$d(1,[vb],"sat");
     var Ab=$d(2,[yb,zb],"sat");
     var Cb=$hs_byteArrayContentszh(yb);
     var Bb=$d(1,[Cb,Ab,la,goog.math.Long.fromBits(2048,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
     var Db=$hs_newMutVarzh(Bb,xb);
     var Eb=Db[0],Fb=Db[1];
     ua.C([ca,Eb],function(Gb){
      var Hb=Gb[0],Ib=Gb[1];
      var Jb=$t(function(){
       $M(Ib,function(Kb){
	switch(Kb.g){
	case 1:
	 $A($$GHCziIOziHandleziInternals$o);break;
	case 2:
	 $R(2,[],"LineBuffering");break;
	}
       },[]);
      },[Ib],"sat");
      Ja.J(Hb,Fb,$$GHCziPrim_coercionTokenzh,Jb);
     },[ea,aa,ca,oa,ra,Z9,ba,Ea,Ia,wa,xa,ga,ja,ia,da,Ja,Fb]);break;
    }
   },[ea,la,aa,ca,oa,ra,Z9,ua,ba,Ea,Ia,wa,xa,ga,ja,ia,da,Ja,Ha]);
  },[ea,la,aa,ca,oa,ra,Z9,ua,ba,wa,xa,ga,ja,ia,da,fa]);
 },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa],"a5");
 $M(ga,function(Lb){
  switch(Lb.g){
  case 1:
   va.J($$DataziMaybe_Nothing,$$DataziMaybe_Nothing,ka);break;
  case 2:
   var Mb=Lb.v[0];
   $M(Mb,function(Nb){
    var Ob=Nb.v[1],Pb=Nb.v[2];
    $M(ea,function(Qb){
     switch(Qb.g){
     case 3:
      Ob.C([ka],function(Rb){
       var Sb=Rb[0],Tb=Rb[1];
       var Ub=$d(2,[Tb],"sat");
       va.J($$DataziMaybe_Nothing,Ub,Sb);
      },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa,va]);break;
     case 4:
      Pb.C([ka],function(Vb){
       var Wb=Vb[0],Xb=Vb[1];
       var Yb=$d(2,[Xb],"sat");
       va.J(Yb,$$DataziMaybe_Nothing,Wb);
      },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa,va]);break;
     case 5:
      Pb.C([ka],function(Zb){
       var ac=Zb[0],bc=Zb[1];
       var cc=$d(2,[bc],"sat");
       va.J(cc,$$DataziMaybe_Nothing,ac);
      },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa,va]);break;
     case 6:
      Ob.C([ka],function(dc){
       var ec=dc[0],fc=dc[1];
       Pb.C([ec],function(gc){
	var hc=gc[0],ic=gc[1];
	var jc=$d(2,[fc],"sat");
	var kc=$d(2,[ic],"sat");
	va.J(kc,jc,hc);
       },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa,va,fc]);
      },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa,va,Pb]);break;
     default:
      va.J($$DataziMaybe_Nothing,$$DataziMaybe_Nothing,ka);
     }
    },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa,va,ka,Ob,Pb]);
   },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa,va,ka]);break;
  }
 },[ea,la,aa,ca,na,oa,ra,Z9,ua,ba,ga,ja,ia,da,fa,va,ka]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_zdwa2=$f(5,function(Sj,Tj,Uj,Vj,Wj){
 $b($hs_takeMVarzh,[Vj,Wj],function(Xj){
  var Yj=Xj[0],Zj=Xj[1];
  var ak=$f(2,function(bk,ck){
   $b($hs_putMVarzh,[Vj,Zj,ck],function(sk){
    $M(bk,function(dk){
     var ek=dk.v[0],fk=dk.v[1];
     $$GHCziException_zdp1Exception.C([ek,fk],function(gk){
      var hk=gk.v[0],ik=gk.v[1];
      var jk=$f(1,function(kk){
       var lk=$hs_eqWordzh(hk,goog.math.Long.fromBits(2363394409,315339024));
       switch(lk.g){
       case 1:
	$r($hs_raiseIOzh(dk,kk));break;
       case 2:
	var mk=$hs_eqWordzh(ik,goog.math.Long.fromBits(2156861182,4256135785));
	switch(mk.g){
	case 1:
	 $r($hs_raiseIOzh(dk,kk));break;
	case 2:
	 var nk=$hs_myThreadIdzh(kk);
	 var ok=nk[0],pk=nk[1];
	 var qk=$hs_killThreadzh(pk,dk,ok);
	 $$GHCziIOziHandleziInternals_zdwa2.J(Sj,Tj,Uj,Vj,qk);break;
	}break;
       }
      },[Vj,Uj,hk,dk,ik,Sj,Tj],"$wa4");
      var rk=$hs_eqWordzh(hk,goog.math.Long.fromBits(4053623282,1685460941));
      switch(rk.g){
      case 1:
       jk.J(sk);break;
      case 2:
       var tk=$hs_eqWordzh(ik,goog.math.Long.fromBits(3693590983,2507416641));
       switch(tk.g){
       case 1:
	jk.J(sk);break;
       case 2:
	$$GHCziIOziHandleziInternals$t.J(Sj,Tj,fk,sk);break;
       }break;
      }
     },[Vj,Uj,fk,dk,Sj,Tj,sk]);
    },[Vj,Uj,Sj,Tj,sk]);
   },[Vj,Uj,bk,Sj,Tj]);
  },[Vj,Zj,Uj,Sj,Tj],"sat");
  var uk=$t(function(){
   Uj.J(Zj);
  },[Zj,Uj],"sat");
  $k($hs_catchzh,[uk,ak,Yj]);
 },[Vj,Uj,Sj,Tj]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandle5=$f(5,function(vk,wk,xk,yk,zk){
 var Ak=$hs_getMaskingStatezh(zk);
 var Bk=Ak[0],Ck=Ak[1];
 var Dk=$f(1,function(Ek){
  $M(xk,function(Fk){
   var Gk=Fk.v[0];
   $$GHCziIOziHandleziInternals_zdwa2.C([vk,wk,yk,Gk,Ek],function(Hk){
    var Ik=Hk[0],Jk=Hk[1];
    $M(Jk,function(Kk){
     var Lk=Kk.v[0],Mk=Kk.v[1];
     $b($hs_putMVarzh,[Gk,Lk,Ik],function(Nk){
      $r([Nk,Mk]);
     },[Mk]);
    },[Gk,Ik]);
   },[Gk]);
  },[vk,wk,yk,Ek]);
 },[xk,vk,wk,yk],"a5");
 $M(Ck,function(Ok){
  switch(Ok.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[Dk,Bk]);break;
  default:
   Dk.J(Bk);
  }
 },[Dk,Bk]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle2=$f(5,function(ml,nl,ol,pl,ql){
 var rl=$f(2,function(sl,tl){
  $M(sl,function(ul){
   var vl=ul.v[1],wl=ul.v[3],xl=ul.v[4],yl=ul.v[5],zl=ul.v[7],Al=ul.v[8],Bl=ul.v[11];
   $M(xl,function(Cl){
    switch(Cl.g){
    case 1:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$w,tl],function(Hl){
      var Il=Hl[0],Jl=Hl[1];
      var Kl=$d(1,[ul,Jl],"sat");
      $r([Il,Kl]);
     },[ul]);break;
    case 2:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$x,tl],function(Ll){
      var Ml=Ll[0],Nl=Ll[1];
      var Ol=$d(1,[ul,Nl],"sat");
      $r([Ml,Ol]);
     },[ul]);break;
    case 3:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$y,tl],function(Pl){
      var Ql=Pl[0],Rl=Pl[1];
      var Sl=$d(1,[ul,Rl],"sat");
      $r([Ql,Sl]);
     },[ul]);break;
    case 6:
     var Tl=$hs_readMutVarzh(Al,tl);
     var Ul=Tl[0],Vl=Tl[1];
     $M(Vl,function(Wl){
      var Xl=Wl.v[2];
      $M(Xl,function(Yl){
       switch(Yl.g){
       case 1:
	var Zl=$hs_readMutVarzh(Al,Ul);
	var am=Zl[0],bm=Zl[1];
	$M(bm,function(cm){
	 var dm=cm.v[2],em=cm.v[4],fm=cm.v[5];
	 var gm=$f(1,function(hm){
	  $$GHCziIOziHandleziInternals_flushBuffer2.C([ul,hm],function(im){
	   var jm=im[0];
	   var km=$hs_readMutVarzh(Al,jm);
	   var lm=km[0],mm=km[1];
	   var nm=$t(function(){
	    $M(mm,function(om){
	     var pm=om.v[0],qm=om.v[1],rm=om.v[3],sm=om.v[4],tm=om.v[5];
	     $R(1,[pm,qm,$$GHCziIOziBuffer_WriteBuffer,rm,sm,tm],"Buffer");
	    },[]);
	   },[mm],"sat");
	   var Fm=$hs_writeMutVarzh(Al,nm,lm);
	   var um=$hs_readMutVarzh(yl,Fm);
	   var vm=um[0],wm=um[1];
	   $$GHCziIOziBufferedIO_emptyWriteBuffer.C([vl,wl,wm,vm],function(xm){
	    var ym=xm[0],zm=xm[1];
	    var Em=$hs_writeMutVarzh(yl,zm,ym);
	    pl.C([ul,Em],function(Am){
	     var Bm=Am[0],Cm=Am[1];
	     var Dm=$d(1,[ul,Cm],"sat");
	     $r([Bm,Dm]);
	    },[ul]);
	   },[ul,pl,yl]);
	  },[ul,pl,Al,yl,vl,wl]);
	 },[ul,pl,Al,yl,vl,wl],"$j");
	 $M(dm,function(Gm){
	  switch(Gm.g){
	  case 1:
	   var Hm=em.equals(fm)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Hm.g){
	   case 1:
	    var Im=$hs_readMutVarzh(zl,am);
	    var Jm=Im[0],Km=Im[1];
	    $M(Km,function(Lm){
	     var Mm=Lm.v[0],Nm=Lm.v[1];
	     var Om=$hs_readMutVarzh(Al,Jm);
	     var Pm=Om[0],Qm=Om[1];
	     var Rm=$t(function(){
	      $M(Qm,function(Sm){
	       var Tm=Sm.v[0],Um=Sm.v[1],Vm=Sm.v[2],Wm=Sm.v[3];
	       $R(1,[Tm,Um,Vm,Wm,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	      },[]);
	     },[Qm],"sat");
	     var pn=$hs_writeMutVarzh(Al,Rm,Pm);
	     $M(Qm,function(Xm){
	      var Ym=Xm.v[0],Zm=Xm.v[1],an=Xm.v[2],bn=Xm.v[4];
	      $M(bn,function(cn){
	       switch(cn.toString()){
	       case "0":
		var En=$hs_writeMutVarzh(yl,Nm,pn);
		gm.J(En);break;
	       default:
		$M(Bl,function(dn){
		 switch(dn.g){
		 case 1:
		  var en=$t(function(){
		   $M(Nm,function(fn){
		    var gn=fn.v[0],hn=fn.v[1],jn=fn.v[2],kn=fn.v[3],ln=fn.v[4],mn=fn.v[5];
		    var nn=ln.add(cn);
		    $R(1,[gn,hn,jn,kn,nn,mn],"Buffer");
		   },[cn]);
		  },[Nm,cn],"sat");
		  var on=$hs_writeMutVarzh(yl,en,pn);
		  gm.J(on);break;
		 case 2:
		  var qn=dn.v[0];
		  $M(qn,function(rn){
		   var sn=rn.v[0],tn=rn.v[1],un=rn.v[4];
		   un.C([Mm,pn],function(vn){
		    var wn=vn[0];
		    var xn=$d(1,[Ym,Zm,an,cn,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
		    $$GHCziIOziHandleziInternals_zdwa.C([sn,tn,Nm,xn,wn],function(yn){
		     var zn=yn[0],An=yn[1];
		     $M(An,function(Bn){
		      var Cn=Bn.v[0];
		      var Dn=$hs_writeMutVarzh(yl,Cn,zn);
		      gm.J(Dn);
		     },[ul,pl,Al,yl,vl,wl,gm,zn]);
		    },[ul,pl,Al,yl,vl,wl,gm]);
		   },[ul,pl,Al,yl,vl,wl,gm,Nm,cn,sn,tn,Ym,Zm,an]);
		  },[ul,pl,Al,yl,vl,wl,gm,Nm,cn,pn,Mm,Ym,Zm,an]);break;
		 }
		},[ul,pl,Al,yl,vl,wl,gm,Nm,cn,pn,Mm,Ym,Zm,an]);
	       }
	      },[ul,pl,Al,yl,vl,wl,gm,Bl,Nm,pn,Mm,Ym,Zm,an]);
	     },[ul,pl,Al,yl,vl,wl,gm,Bl,Nm,pn,Mm]);
	    },[ul,pl,Al,yl,vl,wl,gm,Jm,Bl]);break;
	   case 2:
	    gm.J(am);break;
	   }break;
	  case 2:
	   gm.J(am);break;
	  }
	 },[ul,pl,Al,yl,vl,wl,gm,em,fm,zl,am,Bl]);
	},[ul,pl,Al,yl,vl,wl,zl,am,Bl]);break;
       case 2:
	pl.C([ul,Ul],function(Fn){
	 var Gn=Fn[0],Hn=Fn[1];
	 var In=$d(1,[ul,Hn],"sat");
	 $r([Gn,In]);
	},[ul]);break;
       }
      },[ul,pl,Al,Ul,yl,vl,wl,zl,Bl]);
     },[ul,pl,Al,Ul,yl,vl,wl,zl,Bl]);break;
    default:
     pl.C([ul,tl],function(Dl){
      var El=Dl[0],Fl=Dl[1];
      var Gl=$d(1,[ul,Fl],"sat");
      $r([El,Gl]);
     },[ul]);
    }
   },[ul,tl,pl,Al,yl,vl,wl,zl,Bl]);
  },[tl,pl]);
 },[pl],"sat");
 $$GHCziIOziHandleziInternals_wantReadableHandle5.J(ml,nl,ol,rl,ql);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle1=$f(4,function(Jn,Kn,Ln,Mn){
 $M(Kn,function(Nn){
  switch(Nn.g){
  case 1:
   var On=Nn.v[1];
   var Pn=$d(1,[On],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(Jn,Nn,Pn,Ln,Mn);break;
  case 2:
   var Qn=Nn.v[2];
   var Rn=$d(1,[Qn],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(Jn,Nn,Rn,Ln,Mn);break;
  }
 },[Jn,Ln,Mn]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is not open for writing");
},"lvl3");
var $$GHCziIOziHandleziInternals$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is finalized");
},"lvl8");
var $$GHCziIOziHandleziInternals$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("codec_state");
},"lvl10");
var $$GHCziIOziHandleziInternals$n=$T(function(){
 $$GHCziErr_error.J($$GHCziIOziHandleziInternals$m);
},"lvl11");
var $$GHCziIOziHandleziInternals$o=$D(3,function(){
 $r([$$DataziMaybe_Nothing]);
},"lvl12");
var $$GHCziIOziHandleziInternals$t=$F(4,function(Sw,Tw,Uw,Vw){
 $$GHCziIOziHandleziInternals_augmentIOError.C([Uw,Sw,Tw],function(Ww){
  $$GHCziIOziException_ioError.J(Ww,Vw);
 },[Vw]);
},"a2");
var $$GHCziIOziHandleziInternals$w=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl15");
var $$GHCziIOziHandleziInternals$x=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl16");
var $$GHCziIOziHandleziInternals$y=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$d,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl17");
var $$GHCziIOziHandleziTypes_showHandle2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("{handle: ");
},[],"in `base:GHC.IO.Handle.Types'");
var $$GHCziIOziHandleziTypes_showHandle1=$D(1,function(){
 $r(["}"]);
},"in `base:GHC.IO.Handle.Types'");
var $$GHCziIOziHandleziTypes_noNewlineTranslation=$D(1,function(){
 $r([$$GHCziIOziHandleziTypes_LF,$$GHCziIOziHandleziTypes_LF]);
},"at libraries/base/GHC/IO/Handle/Types.hs:406:1");
var $$GHCziIOziHandleziTypes_LF=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:354:16");
var $$GHCziIOziHandleziTypes_NoBuffering=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:247:4");
var $$GHCziIOziHandleziTypes_WriteHandle=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:158:4");
var $$GHCziIOziHandleziTypes_BufferListNil=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:148:5");
var $$GHCziInt_zdfNumInt32zuzdcfromInteger=$f(1,function(I5){
 $$GHCziIntegerziType_integerToInt.C([I5],function(K5){
  var J5=$hs_narrow32Intzh(K5);
  $R(1,[J5],"I32#");
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt32zuzdcnegate=$f(1,function(L5){
 $M(L5,function(M5){
  var N5=M5.v[0];
  var P5=N5.negate();
  var O5=$hs_narrow32Intzh(P5);
  $R(1,[O5],"I32#");
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt32zuzdczm=$f(2,function(Q5,R5){
 $M(Q5,function(S5){
  var T5=S5.v[0];
  $M(R5,function(U5){
   var V5=U5.v[0];
   var X5=T5.subtract(V5);
   var W5=$hs_narrow32Intzh(X5);
   $R(1,[W5],"I32#");
  },[T5]);
 },[R5]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt32zuzdczt=$f(2,function(Y5,Z5){
 $M(Y5,function(a6){
  var b6=a6.v[0];
  $M(Z5,function(c6){
   var d6=c6.v[0];
   var f6=b6.multiply(d6);
   var e6=$hs_narrow32Intzh(f6);
   $R(1,[e6],"I32#");
  },[b6]);
 },[Z5]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt32zuzdczp=$f(2,function(g6,h6){
 $M(g6,function(i6){
  var j6=i6.v[0];
  $M(h6,function(k6){
   var l6=k6.v[0];
   var n6=j6.add(l6);
   var m6=$hs_narrow32Intzh(n6);
   $R(1,[m6],"I32#");
  },[j6]);
 },[h6]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt9=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt11=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt64zuzdcfromInteger=$f(1,function(y8){
 $$GHCziIntegerziType_integerToInt.C([y8],function(z8){
  $R(1,[z8],"I64#");
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt64zuzdcnegate=$f(1,function(A8){
 $M(A8,function(B8){
  var C8=B8.v[0];
  var D8=C8.negate();
  $R(1,[D8],"I64#");
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt64zuzdczm=$f(2,function(E8,F8){
 $M(E8,function(G8){
  var H8=G8.v[0];
  $M(F8,function(I8){
   var J8=I8.v[0];
   var K8=H8.subtract(J8);
   $R(1,[K8],"I64#");
  },[H8]);
 },[F8]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt64zuzdczt=$f(2,function(L8,M8){
 $M(L8,function(N8){
  var O8=N8.v[0];
  $M(M8,function(P8){
   var Q8=P8.v[0];
   var R8=O8.multiply(Q8);
   $R(1,[R8],"I64#");
  },[O8]);
 },[M8]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt64zuzdczp=$f(2,function(S8,T8){
 $M(S8,function(U8){
  var V8=U8.v[0];
  $M(T8,function(W8){
   var X8=W8.v[0];
   var Y8=V8.add(X8);
   $R(1,[Y8],"I64#");
  },[V8]);
 },[T8]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt14=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt17=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"in `base:GHC.Int'");
var $$GHCziInt_zdfEqInt32zuzdczeze=$f(2,function(Os,Ps){
 $M(Os,function(Qs){
  var Rs=Qs.v[0];
  $M(Ps,function(Ss){
   var Ts=Ss.v[0];
   $r(Rs.equals(Ts)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[Rs]);
 },[Ps]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfEqInt32zuzdczsze=$f(2,function(Us,Vs){
 $M(Us,function(Ws){
  var Xs=Ws.v[0];
  $M(Vs,function(Ys){
   var Zs=Ys.v[0];
   var at=Xs.equals(Zs)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(at.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[Xs]);
 },[Vs]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt6=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt32zuzdcsignum=$f(1,function(Bt){
 $M(Bt,function(Ct){
  var Dt=Ct.v[0];
  var Et=Dt.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Et.g){
  case 1:
   $M(Dt,function(Ft){
    switch(Ft.toString()){
    case "0":
     $A($$GHCziInt_zdfNumInt9);break;
    default:
     $A($$GHCziInt_zdfNumInt11);
    }
   },[]);break;
  case 2:
   $A($$GHCziInt_zdfNumInt6);break;
  }
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt32zuzdcabs=$f(1,function(Gt){
 $M(Gt,function(Ht){
  var It=Ht.v[0];
  var Jt=It.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Jt.g){
  case 1:
   var Lt=It.negate();
   var Kt=$hs_narrow32Intzh(Lt);
   $R(1,[Kt],"I32#");break;
  case 2:
   $A(Ht);break;
  }
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfEqInt64zuzdczeze=$f(2,function(nB,oB){
 $M(nB,function(pB){
  var qB=pB.v[0];
  $M(oB,function(rB){
   var sB=rB.v[0];
   $r(qB.equals(sB)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[qB]);
 },[oB]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfEqInt64zuzdczsze=$f(2,function(tB,uB){
 $M(tB,function(vB){
  var wB=vB.v[0];
  $M(uB,function(xB){
   var yB=xB.v[0];
   var zB=wB.equals(yB)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(zB.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[wB]);
 },[uB]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt12=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt64zuzdcsignum=$f(1,function(aC){
 $M(aC,function(bC){
  var cC=bC.v[0];
  var dC=cC.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(dC.g){
  case 1:
   $M(cC,function(eC){
    switch(eC.toString()){
    case "0":
     $A($$GHCziInt_zdfNumInt14);break;
    default:
     $A($$GHCziInt_zdfNumInt17);
    }
   },[]);break;
  case 2:
   $A($$GHCziInt_zdfNumInt12);break;
  }
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfNumInt64zuzdcabs=$f(1,function(fC){
 $M(fC,function(gC){
  var hC=gC.v[0];
  var iC=hC.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(iC.g){
  case 1:
   var jC=hC.negate();
   $R(1,[jC],"I64#");break;
  case 2:
   $A(gC);break;
  }
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziList_zdwspan=$f(2,function(c3,d3){
 $M(d3,function(e3){
  switch(e3.g){
  case 1:
   $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
  case 2:
   var f3=e3.v[0],g3=e3.v[1];
   c3.C([f3],function(h3){
    switch(h3.g){
    case 1:
     $r([$$GHCziTypes_ZMZN,e3]);break;
    case 2:
     var i3=$t(function(){
      $$GHCziList_zdwspan.C([c3,g3],function(j3){
       var k3=j3[0],l3=j3[1];
       $R(1,[k3,l3],"(,)");
      },[]);
     },[c3,g3],"ds");
     var m3=$t(function(){
      $M(i3,function(n3){
       var o3=n3.v[1];
       $A(o3);
      },[]);
     },[i3],"sat");
     var p3=$t(function(){
      $M(i3,function(q3){
       var r3=q3.v[0];
       $A(r3);
      },[]);
     },[i3],"sat");
     var s3=$d(2,[f3,p3],"sat");
     $r([s3,m3]);break;
    }
   },[f3,c3,e3,g3]);break;
  }
 },[c3]);
},[],"at libraries/base/GHC/List.lhs:444:1");
var $$GHCziList_zdwlen=$f(2,function(C7,D7){
 $M(C7,function(E7){
  switch(E7.g){
  case 1:
   $A(D7);break;
  case 2:
   var F7=E7.v[1];
   var G7=D7.add(goog.math.Long.fromBits(1,0));
   $$GHCziList_zdwlen.J(F7,G7);break;
  }
 },[D7]);
},[],"at libraries/base/GHC/List.lhs:120:5");
var $$GHCziList_filter=$f(2,function(Y8,Z8){
 $M(Z8,function(a9){
  switch(a9.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var b9=a9.v[0],c9=a9.v[1];
   Y8.C([b9],function(d9){
    switch(d9.g){
    case 1:
     $$GHCziList_filter.J(Y8,c9);break;
    case 2:
     var e9=$t(function(){
      $$GHCziList_filter.J(Y8,c9);
     },[Y8,c9],"sat");
     $R(2,[b9,e9],":");break;
    }
   },[b9,Y8,c9]);break;
  }
 },[Y8]);
},[],"at libraries/base/GHC/List.lhs:129:1");
var $$GHCziNum_negate=$f(1,function(j){
 $M(j,function(k){
  var l=k.v[3];
  $A(l);
 },[]);
},[],"at libraries/base/GHC/Num.lhs:45:5");
var $$GHCziNum_fromInteger=$f(1,function(s){
 $M(s,function(t){
  var u=t.v[6];
  $A(u);
 },[]);
},[],"at libraries/base/GHC/Num.lhs:60:5");
var $$GHCziPtr_castPtr=$f(1,function(G){
 $M(G,function(H){
  var I=H.v[0];
  $R(1,[I],"Ptr");
 },[]);
},[],"at libraries/base/GHC/Ptr.lhs:59:1");
var $$GHCziShow_showsPrec=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at libraries/base/GHC/Show.lhs:140:5");
var $$GHCziShow_showszuitoszq=$f(2,function(o,p){
 var q=o.lessThan(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(q.g){
 case 1:
  var r=$hs_quotRemIntzh(o,goog.math.Long.fromBits(10,0));
  var s=r[0],t=r[1];
  var x=goog.math.Long.fromBits(48,0).add(t);
  var v=$hs_chrzh(x);
  var u=$d(1,[v],"sat");
  var w=$d(2,[u,p],"sat");
  $$GHCziShow_showszuitoszq.J(s,w);break;
 case 2:
  var A=goog.math.Long.fromBits(48,0).add(o);
  var z=$hs_chrzh(A);
  var y=$d(1,[z],"sat");
  $R(2,[y,p],":");break;
 }
},[],"at libraries/base/GHC/Show.lhs:449:5");
var $$GHCziShow_shows13=$D(1,function(){
 $r(["-"]);
},"in `base:GHC.Show'");
var $$GHCziShow_itos=$f(2,function(B,C){
 var D=B.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(D.g){
 case 1:
  $$GHCziShow_showszuitoszq.J(B,C);break;
 case 2:
  $M(B,function(E){
   switch(E.toString()){
   case "-9223372036854775808":
    var H=$t(function(){
     var I=$hs_quotRemIntzh(goog.math.Long.fromBits(0,2147483648),goog.math.Long.fromBits(10,0));
     var J=I[0],K=I[1];
     var L=$t(function(){
      var M=K.negate();
      $$GHCziShow_showszuitoszq.J(M,C);
     },[C,K],"sat");
     var N=J.negate();
     $$GHCziShow_showszuitoszq.J(N,L);
    },[C],"sat");
    $R(2,[$$GHCziShow_shows13,H],":");break;
   default:
    var F=$t(function(){
     var G=E.negate();
     $$GHCziShow_showszuitoszq.J(G,C);
    },[C,E],"sat");
    $R(2,[$$GHCziShow_shows13,F],":");
   }
  },[C]);break;
 }
},[],"at libraries/base/GHC/Show.lhs:437:1");
var $$GHCziShow_shows11=$D(1,function(){
 $r(["("]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows10=$D(1,function(){
 $r([")"]);
},"in `base:GHC.Show'");
var $$GHCziShow_zdwshowSignedInt=$f(3,function(O,P,Q){
 var R=P.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(R.g){
 case 1:
  $$GHCziShow_itos.J(P,Q);break;
 case 2:
  var S=O.greaterThan(goog.math.Long.fromBits(6,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(S.g){
  case 1:
   $$GHCziShow_itos.J(P,Q);break;
  case 2:
   var T=$t(function(){
    var U=$d(2,[$$GHCziShow_shows10,Q],"sat");
    $$GHCziShow_itos.J(P,U);
   },[P,Q],"sat");
   $R(2,[$$GHCziShow_shows11,T],":");break;
  }break;
 }
},[],"at libraries/base/GHC/Show.lhs:432:1");
var $$GHCziShow_showListzuzu1=$D(1,function(){
 $r([","]);
},"in `base:GHC.Show'");
var $$GHCziShow_showListzuzu2=$D(1,function(){
 $r(["]"]);
},"in `base:GHC.Show'");
var $$GHCziShow_showListzuzu3=$D(1,function(){
 $r(["["]);
},"in `base:GHC.Show'");
var $$GHCziShow_showListzuzu=$f(3,function(f3,g3,h3){
 $M(g3,function(i3){
  switch(i3.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",h3);break;
  case 2:
   var j3=i3.v[0],k3=i3.v[1];
   var l3=$t(function(){
    var m3=$t(function(){
     var n3=$d(2,[$$GHCziShow_showListzuzu2,h3],"lvl19");
     var o3=$f(1,function(p3){
      $M(p3,function(q3){
       switch(q3.g){
       case 1:
	$A(n3);break;
       case 2:
	var r3=q3.v[0],s3=q3.v[1];
	var t3=$t(function(){
	 var u3=$t(function(){
	  o3.J(s3);
	 },[s3,o3],"sat");
	 f3.J(r3,u3);
	},[r3,s3,o3,f3],"sat");
	$R(2,[$$GHCziShow_showListzuzu1,t3],":");break;
       }
      },[n3,o3,f3]);
     },[n3,f3],"showl");
     o3.J(k3);
    },[h3,f3,k3],"sat");
    f3.J(j3,m3);
   },[h3,j3,f3,k3],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,l3],":");break;
  }
 },[h3,f3]);
},[],"at libraries/base/GHC/Show.lhs:162:1");
var $$GHCziStorable_writeInt8OffPtr1=$f(4,function(D1,E1,F1,G1){
 $M(D1,function(H1){
  var I1=H1.v[0];
  $M(E1,function(J1){
   var K1=J1.v[0];
   $M(F1,function(L1){
    var M1=L1.v[0];
    var N1=$hs_writeInt8OffAddrzh(I1,K1,M1,G1);
    $r([N1,$$GHCziTuple_Z0T]);
   },[I1,K1,G1]);
  },[F1,I1,G1]);
 },[E1,F1,G1]);
},[],"in `base:GHC.Storable'");
var $$GHCziStorable_writeWideCharOffPtr1=$f(4,function(n3,o3,p3,q3){
 $M(n3,function(r3){
  var s3=r3.v[0];
  $M(o3,function(t3){
   var u3=t3.v[0];
   $M(p3,function(v3){
    var w3=v3.v[0];
    var x3=$hs_writeWideCharOffAddrzh(s3,u3,w3,q3);
    $r([x3,$$GHCziTuple_Z0T]);
   },[s3,u3,q3]);
  },[p3,s3,q3]);
 },[o3,p3,q3]);
},[],"in `base:GHC.Storable'");
var $$GHCziStorable_readInt8OffPtr1=$f(3,function(X4,Y4,Z4){
 $M(X4,function(a5){
  var b5=a5.v[0];
  $M(Y4,function(c5){
   var d5=c5.v[0];
   var e5=$hs_readInt8OffAddrzh(b5,d5,Z4);
   var f5=e5[0],g5=e5[1];
   var h5=$d(1,[g5],"sat");
   $r([f5,h5]);
  },[b5,Z4]);
 },[Y4,Z4]);
},[],"in `base:GHC.Storable'");
var $$GHCziStorable_readWideCharOffPtr1=$f(3,function(H6,I6,J6){
 $M(H6,function(K6){
  var L6=K6.v[0];
  $M(I6,function(M6){
   var N6=M6.v[0];
   var O6=$hs_readWideCharOffAddrzh(L6,N6,J6);
   var P6=O6[0],Q6=O6[1];
   var R6=$d(1,[Q6],"sat");
   $r([P6,R6]);
  },[L6,J6]);
 },[I6,J6]);
},[],"in `base:GHC.Storable'");
var $$GHCziUnicode_zdwtoUpper=$f(1,function(O1){
 var W1=$hs_ordzh(O1);
 var V1=$hs_narrow32Intzh(W1);
 var $ff=u_towupper(V1);
 var P1=[$$GHCziPrim_realWorldzh,$ff];
 var Q1=P1[1];
 var S1=$hs_narrow32Intzh(Q1);
 var U1=$hs_int2Wordzh(S1);
 var R1=$hs_leWordzh(U1,goog.math.Long.fromBits(1114111,0));
 switch(R1.g){
 case 1:
  $$GHCziChar_chr2.J(S1);break;
 case 2:
  var T1=$hs_chrzh(S1);
  $R(1,[T1],"C#");break;
 }
},[],"at libraries/base/GHC/Unicode.hs:146:1");
var $$SystemziPosixziInternals_ioezuunknownfiletype2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("fdType");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_ioezuunknownfiletype1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("unknown file type");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_ioezuunknownfiletype=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_UnsupportedOperation,$$SystemziPosixziInternals_ioezuunknownfiletype2,$$SystemziPosixziInternals_ioezuunknownfiletype1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"at libraries/base/System/Posix/Internals.hs:156:1");
var $$SystemziPosixziInternals_setCloseOnExec3=$t(function(){
 $$ForeignziCziError_throwErrnoIfMinus1zu.J($$ForeignziCziTypes_zdfEqCInt,$$ForeignziCziTypes_zdfNumCInt);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdGetMode3=$f(1,function(e5){
 $M(e5,function(f5){
  var g5=f5.v[0];
  $M(g5,function(h5){
   switch(h5.toString()){
   case "-1":
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdFileSizzezupred=$f(1,function(b){
 $$SystemziPosixziInternals_fdGetMode3.J(b);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdFileSizzezuloc=$t(function(){
 $$GHCziCString_unpackCStringzh.J("fileSize");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdFileSizze2=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdFileSizze1=$f(2,function(W6,X6){
 var $ff=__hscore_sizeof_stat();
 var Y6=[$$GHCziPrim_realWorldzh,$ff];
 var Z6=Y6[1];
 var a7=$hs_newPinnedByteArrayzh(Z6,X6);
 var b7=a7[0],c7=a7[1];
 var d7=$hs_unsafeFreezzeByteArrayzh(c7,b7);
 var e7=d7[0],f7=d7[1];
 $M(W6,function(g7){
  var h7=g7.v[0];
  var j7=$hs_byteArrayContentszh(f7);
  var i7=$f(1,function(k7){
   var $ff=__hscore_fstat(h7,j7);
   var l7=[k7,$ff];
   var m7=l7[0],n7=l7[1];
   var p7=$hs_narrow32Intzh(n7);
   var o7=$d(1,[p7],"sat");
   $r([m7,o7]);
  },[j7,h7],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals_fdFileSizzezupred,$$SystemziPosixziInternals_fdFileSizzezuloc,i7,e7],function(q7){
   var r7=q7[0];
   var $ff=__hscore_st_mode(j7);
   var s7=[r7,$ff];
   var t7=s7[0],u7=s7[1];
   var E7=$hs_narrow32Wordzh(u7);
   var $ff=ghc_wrapper_d29b_S_ISREG(E7);
   var v7=[$$GHCziPrim_realWorldzh,$ff];
   var w7=v7[1];
   var x7=$hs_narrow32Intzh(w7);
   switch(x7.toString()){
   case "0":
    var D7=$hs_touchzh(f7,t7);
    $r([D7,$$SystemziPosixziInternals_fdFileSizze2]);break;
   default:
    var $ff=__hscore_st_size(j7);
    var y7=[t7,$ff];
    var z7=y7[0],A7=y7[1];
    var C7=$hs_touchzh(f7,z7);
    var B7=$t(function(){
     $$GHCziIntegerziType_smallInteger.J(A7);
    },[A7],"sat");
    $r([C7,B7]);
   }
  },[f7,j7]);
 },[f7,e7]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho5=$f(3,function(F7,G7,H7){
 var $ff=__hscore_sizeof_termios();
 var I7=[$$GHCziPrim_realWorldzh,$ff];
 var J7=I7[1];
 var K7=$hs_newPinnedByteArrayzh(J7,H7);
 var L7=K7[0],M7=K7[1];
 var N7=$hs_unsafeFreezzeByteArrayzh(M7,L7);
 var O7=N7[0],P7=N7[1];
 $M(F7,function(Q7){
  var R7=Q7.v[0];
  var T7=$hs_byteArrayContentszh(P7);
  var S7=$f(1,function(U7){
   var $ff=tcgetattr(R7,T7);
   var V7=[U7,$ff];
   var W7=V7[0],X7=V7[1];
   var Z7=$hs_narrow32Intzh(X7);
   var Y7=$d(1,[Z7],"sat");
   $r([W7,Y7]);
  },[T7,R7],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals_fdGetMode3,$$SystemziPosixziInternals$z1,S7,O7],function(a8){
   var b8=a8[0];
   var c8=$f(1,function(d8){
    var $ff=__hscore_sizeof_sigset_t();
    var e8=[$$GHCziPrim_realWorldzh,$ff];
    var f8=e8[1];
    var g8=$hs_newPinnedByteArrayzh(f8,d8);
    var h8=g8[0],i8=g8[1];
    var j8=$hs_unsafeFreezzeByteArrayzh(i8,h8);
    var k8=j8[0],l8=j8[1];
    var m8=$hs_newPinnedByteArrayzh(f8,k8);
    var n8=m8[0],o8=m8[1];
    var p8=$hs_unsafeFreezzeByteArrayzh(o8,n8);
    var q8=p8[0],r8=p8[1];
    var t8=$hs_byteArrayContentszh(l8);
    var s8=$f(1,function(u8){
     var $ff=ghc_wrapper_d2be_sigemptyset(t8);
     var v8=[u8,$ff];
     var w8=v8[0],x8=v8[1];
     var z8=$hs_narrow32Intzh(x8);
     var y8=$d(1,[z8],"sat");
     $r([w8,y8]);
    },[t8],"sat");
    $$SystemziPosixziInternals$B1.C([s8,q8],function(A8){
     var B8=A8[0];
     var C8=$t(function(){
      var $ff=__hscore_sigttou();
      var D8=[$$GHCziPrim_realWorldzh,$ff];
      var E8=D8[1];
      var F8=$f(1,function(G8){
       var M8=$hs_narrow32Intzh(E8);
       var $ff=ghc_wrapper_d2b5_sigaddset(t8,M8);
       var H8=[G8,$ff];
       var I8=H8[0],J8=H8[1];
       var L8=$hs_narrow32Intzh(J8);
       var K8=$d(1,[L8],"sat");
       $r([I8,K8]);
      },[t8,E8],"sat");
      $A(F8);
     },[t8],"sat");
     $$SystemziPosixziInternals$D1.C([C8,B8],function(N8){
      var O8=N8[0];
      var Q8=$hs_byteArrayContentszh(r8);
      var P8=$t(function(){
       var $ff=__hscore_sig_block();
       var R8=[$$GHCziPrim_realWorldzh,$ff];
       var S8=R8[1];
       var T8=$f(1,function(U8){
	var a9=$hs_narrow32Intzh(S8);
	var $ff=ghc_wrapper_d2aT_sigprocmask(a9,t8,Q8);
	var V8=[U8,$ff];
	var W8=V8[0],X8=V8[1];
	var Z8=$hs_narrow32Intzh(X8);
	var Y8=$d(1,[Z8],"sat");
	$r([W8,Y8]);
       },[t8,Q8,S8],"sat");
       $A(T8);
      },[t8,Q8],"sat");
      $$SystemziPosixziInternals$F1.C([P8,O8],function(b9){
       var c9=b9[0];
       var d9=$d(1,[T7],"sat");
       G7.C([d9,c9],function(e9){
	var f9=e9[0],g9=e9[1];
	var $ff=__hscore_tcsanow();
	var h9=[$$GHCziPrim_realWorldzh,$ff];
	var i9=h9[1];
	var j9=$f(1,function(k9){
	 var q9=$hs_narrow32Intzh(i9);
	 var $ff=tcsetattr(R7,q9,T7);
	 var l9=[k9,$ff];
	 var m9=l9[0],n9=l9[1];
	 var p9=$hs_narrow32Intzh(n9);
	 var o9=$d(1,[p9],"sat");
	 $r([m9,o9]);
	},[T7,R7,i9],"sat");
	$$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals$G1,$$SystemziPosixziInternals$z1,j9,f9],function(r9){
	 var s9=r9[0];
	 var t9=$t(function(){
	  var $ff=__hscore_sig_setmask();
	  var u9=[$$GHCziPrim_realWorldzh,$ff];
	  var v9=u9[1];
	  var w9=$f(1,function(x9){
	   var D9=$hs_narrow32Intzh(v9);
	   var $ff=ghc_wrapper_d2aT_sigprocmask(D9,Q8,null);
	   var y9=[x9,$ff];
	   var z9=y9[0],A9=y9[1];
	   var C9=$hs_narrow32Intzh(A9);
	   var B9=$d(1,[C9],"sat");
	   $r([z9,B9]);
	  },[Q8,v9],"sat");
	  $A(w9);
	 },[Q8],"sat");
	 $$SystemziPosixziInternals$H1.C([t9,s9],function(E9){
	  var F9=E9[0];
	  var H9=$hs_touchzh(r8,F9);
	  var G9=$hs_touchzh(l8,H9);
	  $r([G9,g9]);
	 },[l8,r8,g9]);
	},[l8,r8,Q8,g9]);
       },[T7,R7,l8,r8,Q8]);
      },[T7,R7,l8,r8,Q8,G7]);
     },[T7,R7,l8,t8,r8,G7]);
    },[T7,R7,l8,t8,r8,G7]);
   },[T7,R7,G7],"a77");
   var I9=R7.lessThanOrEqual(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(I9.g){
   case 1:
    c8.C([b8],function(J9){
     var K9=J9[0],L9=J9[1];
     var M9=$hs_touchzh(P7,K9);
     $r([M9,L9]);
    },[P7]);break;
   case 2:
    var $ff=__hscore_get_saved_termios(R7);
    var N9=[b8,$ff];
    var O9=N9[0],P9=N9[1];
    var Q9=$hs_eqAddrzh(P9,null);
    switch(Q9.g){
    case 1:
     c8.C([O9],function(R9){
      var S9=R9[0],T9=R9[1];
      var U9=$hs_touchzh(P7,S9);
      $r([U9,T9]);
     },[P7]);break;
    case 2:
     var wa=$hs_int2Wordzh(J7);
     var $ff=malloc(wa);
     var V9=[O9,$ff];
     var W9=V9[0],X9=V9[1];
     var Y9=$hs_eqAddrzh(X9,null);
     switch(Y9.g){
     case 1:
      var ha=$hs_int2Wordzh(J7);
      var $ff=memcpy(X9,T7,ha);
      var Z9=[W9,$ff];
      var aa=Z9[0];
      var $ff=__hscore_set_saved_termios(R7,X9);
      var ba=[aa,$ff];
      var ca=ba[0];
      c8.C([ca],function(da){
       var ea=da[0],fa=da[1];
       var ga=$hs_touchzh(P7,ea);
       $r([ga,fa]);
      },[P7]);break;
     case 2:
      $$GHCziIOziException_ioError.C([$$ForeignziMarshalziAlloc_mallocBytes2,W9],function(ia){
       var ja=ia[0],ka=ia[1];
       $M(ka,function(la){
	var ma=la.v[0];
	var va=$hs_int2Wordzh(J7);
	var $ff=memcpy(ma,T7,va);
	var na=[ja,$ff];
	var oa=na[0];
	var $ff=__hscore_set_saved_termios(R7,ma);
	var pa=[oa,$ff];
	var qa=pa[0];
	c8.C([qa],function(ra){
	 var sa=ra[0],ta=ra[1];
	 var ua=$hs_touchzh(P7,sa);
	 $r([ua,ta]);
	},[P7]);
       },[J7,P7,T7,R7,c8,ja]);
      },[J7,P7,T7,R7,c8]);break;
     }break;
    }break;
   }
  },[J7,P7,T7,R7,G7]);
 },[J7,P7,O7,G7]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setEcho2=$t(function(){
 var $ff=__hscore_echo();
 var xa=[$$GHCziPrim_realWorldzh,$ff];
 var ya=xa[1];
 var Ca=$hs_narrow32Intzh(ya);
 var Ba=$hs_int2Wordzh(Ca);
 var Aa=$hs_narrow32Wordzh(Ba);
 var za=Aa.xor(goog.math.Long.fromBits(4294967295,0));
 $R(1,[za],"W32#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho4=$t(function(){
 var $ff=__hscore_echo();
 var Da=[$$GHCziPrim_realWorldzh,$ff];
 var Ea=Da[1];
 var Ha=$hs_narrow32Intzh(Ea);
 var Ga=$hs_int2Wordzh(Ha);
 var Fa=$hs_narrow32Wordzh(Ga);
 $R(1,[Fa],"W32#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setEcho1=$f(3,function(Ia,Ja,Ka){
 var La=$f(2,function(Ma,Na){
  $M(Ma,function(Oa){
   var Pa=Oa.v[0];
   var $ff=__hscore_lflag(Pa);
   var Qa=[Na,$ff];
   var Ra=Qa[0],Sa=Qa[1];
   $M(Ja,function(Ta){
    switch(Ta.g){
    case 1:
     $M($$SystemziPosixziInternals_setEcho2,function(Ua){
      var Va=Ua.v[0];
      var Za=$hs_narrow32Wordzh(Sa);
      var Ya=Za.and(Va);
      var $ff=__hscore_poke_lflag(Pa,Ya);
      var Wa=[Ra,$ff];
      var Xa=Wa[0];
      $r([Xa,$$GHCziTuple_Z0T]);
     },[Pa,Sa,Ra]);break;
    case 2:
     $M($$SystemziPosixziInternals_getEcho4,function(ab){
      var bb=ab.v[0];
      var fb=$hs_narrow32Wordzh(Sa);
      var eb=fb.or(bb);
      var $ff=__hscore_poke_lflag(Pa,eb);
      var cb=[Ra,$ff];
      var db=cb[0];
      $r([db,$$GHCziTuple_Z0T]);
     },[Pa,Sa,Ra]);break;
    }
   },[Pa,Sa,Ra]);
  },[Na,Ja]);
 },[Ja],"sat");
 $$SystemziPosixziInternals_getEcho5.J(Ia,La,Ka);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho2=$f(2,function(gb,hb){
 $M(gb,function(ib){
  var jb=ib.v[0];
  var $ff=__hscore_lflag(jb);
  var kb=[hb,$ff];
  var lb=kb[0],mb=kb[1];
  var nb=$t(function(){
   $M($$SystemziPosixziInternals_getEcho4,function(ob){
    var pb=ob.v[0];
    var sb=$hs_narrow32Wordzh(mb);
    var rb=sb.and(pb);
    var qb=$hs_eqWordzh(rb,goog.math.Long.fromBits(0,0));
    switch(qb.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[mb]);
  },[mb],"sat");
  $r([lb,nb]);
 },[hb]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked5=$t(function(){
 var $ff=__hscore_icanon();
 var vb=[$$GHCziPrim_realWorldzh,$ff];
 var wb=vb[1];
 var Ab=$hs_narrow32Intzh(wb);
 var zb=$hs_int2Wordzh(Ab);
 var yb=$hs_narrow32Wordzh(zb);
 var xb=yb.xor(goog.math.Long.fromBits(4294967295,0));
 $R(1,[xb],"W32#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked2=$t(function(){
 var $ff=__hscore_icanon();
 var Bb=[$$GHCziPrim_realWorldzh,$ff];
 var Cb=Bb[1];
 var Fb=$hs_narrow32Intzh(Cb);
 var Eb=$hs_int2Wordzh(Fb);
 var Db=$hs_narrow32Wordzh(Eb);
 $R(1,[Db],"W32#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked4=$t(function(){
 var $ff=__hscore_vmin();
 var Gb=[$$GHCziPrim_realWorldzh,$ff];
 var Hb=Gb[1];
 var Ib=$hs_narrow32Intzh(Hb);
 $R(1,[Ib],"I#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked3=$t(function(){
 var $ff=__hscore_vtime();
 var Jb=[$$GHCziPrim_realWorldzh,$ff];
 var Kb=Jb[1];
 var Lb=$hs_narrow32Intzh(Kb);
 $R(1,[Lb],"I#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked1=$f(3,function(Mb,Nb,Ob){
 var Pb=$f(2,function(Qb,Rb){
  $M(Qb,function(Sb){
   var Tb=Sb.v[0];
   var $ff=__hscore_lflag(Tb);
   var Ub=[Rb,$ff];
   var Vb=Ub[0],Wb=Ub[1];
   $M(Nb,function(Xb){
    switch(Xb.g){
    case 1:
     $M($$SystemziPosixziInternals_setCooked5,function(Yb){
      var Zb=Yb.v[0];
      var oc=$hs_narrow32Wordzh(Wb);
      var nc=oc.and(Zb);
      var $ff=__hscore_poke_lflag(Tb,nc);
      var ac=[Vb,$ff];
      var bc=ac[0];
      var $ff=__hscore_ptr_c_cc(Tb);
      var cc=[bc,$ff];
      var dc=cc[0],ec=cc[1];
      $M($$SystemziPosixziInternals_setCooked4,function(fc){
       var gc=fc.v[0];
       var mc=$hs_plusAddrzh(ec,gc);
       var lc=$hs_writeWord8OffAddrzh(mc,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),dc);
       $M($$SystemziPosixziInternals_setCooked3,function(hc){
	var ic=hc.v[0];
	var kc=$hs_plusAddrzh(ec,ic);
	var jc=$hs_writeWord8OffAddrzh(kc,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),lc);
	$r([jc,$$GHCziTuple_Z0T]);
       },[ec,lc]);
      },[ec,dc]);
     },[Tb,Wb,Vb]);break;
    case 2:
     $M($$SystemziPosixziInternals_setCooked2,function(pc){
      var qc=pc.v[0];
      var uc=$hs_narrow32Wordzh(Wb);
      var tc=uc.or(qc);
      var $ff=__hscore_poke_lflag(Tb,tc);
      var rc=[Vb,$ff];
      var sc=rc[0];
      $r([sc,$$GHCziTuple_Z0T]);
     },[Tb,Wb,Vb]);break;
    }
   },[Tb,Wb,Vb]);
  },[Rb,Nb]);
 },[Nb],"sat");
 $$SystemziPosixziInternals_getEcho5.J(Mb,Pb,Ob);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fileType2=$f(1,function(Bc){
 $$GHCziIOziException_ioError.J($$SystemziPosixziInternals_ioezuunknownfiletype,Bc);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdStat1=$f(2,function(Sd,Td){
 var $ff=__hscore_sizeof_stat();
 var Ud=[$$GHCziPrim_realWorldzh,$ff];
 var Vd=Ud[1];
 var Wd=$hs_newPinnedByteArrayzh(Vd,Td);
 var Xd=Wd[0],Yd=Wd[1];
 var Zd=$hs_unsafeFreezzeByteArrayzh(Yd,Xd);
 var ae=Zd[0],be=Zd[1];
 $M(Sd,function(ce){
  var de=ce.v[0];
  var fe=$hs_byteArrayContentszh(be);
  var ee=$f(1,function(ge){
   var $ff=__hscore_fstat(de,fe);
   var he=[ge,$ff];
   var ie=he[0],je=he[1];
   var le=$hs_narrow32Intzh(je);
   var ke=$d(1,[le],"sat");
   $r([ie,ke]);
  },[fe,de],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals$I1,$$SystemziPosixziInternals_ioezuunknownfiletype2,ee,ae],function(me){
   var ne=me[0];
   var $ff=__hscore_st_mode(fe);
   var oe=[ne,$ff];
   var pe=oe[0],qe=oe[1];
   var Sf=$hs_narrow32Wordzh(qe);
   var $ff=ghc_wrapper_d28N_S_ISDIR(Sf);
   var re=[$$GHCziPrim_realWorldzh,$ff];
   var se=re[1];
   var te=$hs_narrow32Intzh(se);
   switch(te.toString()){
   case "0":
    var $ff=ghc_wrapper_d28F_S_ISFIFO(Sf);
    var Ee=[$$GHCziPrim_realWorldzh,$ff];
    var Fe=Ee[1];
    var Ge=$hs_narrow32Intzh(Fe);
    switch(Ge.toString()){
    case "0":
     var $ff=ghc_wrapper_d26v_S_ISSOCK(Sf);
     var Re=[$$GHCziPrim_realWorldzh,$ff];
     var Se=Re[1];
     var Te=$hs_narrow32Intzh(Se);
     switch(Te.toString()){
     case "0":
      var $ff=ghc_wrapper_d293_S_ISCHR(Sf);
      var ef=[$$GHCziPrim_realWorldzh,$ff];
      var ff=ef[1];
      var gf=$hs_narrow32Intzh(ff);
      switch(gf.toString()){
      case "0":
       var $ff=ghc_wrapper_d29b_S_ISREG(Sf);
       var sf=[$$GHCziPrim_realWorldzh,$ff];
       var tf=sf[1];
       var uf=$hs_narrow32Intzh(tf);
       switch(uf.toString()){
       case "0":
	var $ff=ghc_wrapper_d28V_S_ISBLK(Sf);
	var Ff=[$$GHCziPrim_realWorldzh,$ff];
	var Gf=Ff[1];
	var Hf=$hs_narrow32Intzh(Gf);
	switch(Hf.toString()){
	case "0":
	 $$SystemziPosixziInternals_fileType2.J(pe);break;
	default:
	 var $ff=__hscore_st_dev(fe);
	 var If=[pe,$ff];
	 var Jf=If[0],Kf=If[1];
	 var $ff=__hscore_st_ino(fe);
	 var Lf=[Jf,$ff];
	 var Mf=Lf[0],Nf=Lf[1];
	 var Rf=$hs_touchzh(be,Mf);
	 var Of=$d(1,[Nf],"sat");
	 var Pf=$d(1,[Kf],"sat");
	 var Qf=$d(1,[$$GHCziIOziDevice_RawDevice,Pf,Of],"sat");
	 $r([Rf,Qf]);
	}break;
       default:
	var $ff=__hscore_st_dev(fe);
	var vf=[pe,$ff];
	var wf=vf[0],xf=vf[1];
	var $ff=__hscore_st_ino(fe);
	var yf=[wf,$ff];
	var zf=yf[0],Af=yf[1];
	var Ef=$hs_touchzh(be,zf);
	var Bf=$d(1,[Af],"sat");
	var Cf=$d(1,[xf],"sat");
	var Df=$d(1,[$$GHCziIOziDevice_RegularFile,Cf,Bf],"sat");
	$r([Ef,Df]);
       }break;
      default:
       var $ff=__hscore_st_dev(fe);
       var hf=[pe,$ff];
       var jf=hf[0],kf=hf[1];
       var $ff=__hscore_st_ino(fe);
       var lf=[jf,$ff];
       var mf=lf[0],nf=lf[1];
       var rf=$hs_touchzh(be,mf);
       var of=$d(1,[nf],"sat");
       var pf=$d(1,[kf],"sat");
       var qf=$d(1,[$$GHCziIOziDevice_Stream,pf,of],"sat");
       $r([rf,qf]);
      }break;
     default:
      var $ff=__hscore_st_dev(fe);
      var Ue=[pe,$ff];
      var Ve=Ue[0],We=Ue[1];
      var $ff=__hscore_st_ino(fe);
      var Xe=[Ve,$ff];
      var Ye=Xe[0],Ze=Xe[1];
      var df=$hs_touchzh(be,Ye);
      var af=$d(1,[Ze],"sat");
      var bf=$d(1,[We],"sat");
      var cf=$d(1,[$$GHCziIOziDevice_Stream,bf,af],"sat");
      $r([df,cf]);
     }break;
    default:
     var $ff=__hscore_st_dev(fe);
     var He=[pe,$ff];
     var Ie=He[0],Je=He[1];
     var $ff=__hscore_st_ino(fe);
     var Ke=[Ie,$ff];
     var Le=Ke[0],Me=Ke[1];
     var Qe=$hs_touchzh(be,Le);
     var Ne=$d(1,[Me],"sat");
     var Oe=$d(1,[Je],"sat");
     var Pe=$d(1,[$$GHCziIOziDevice_Stream,Oe,Ne],"sat");
     $r([Qe,Pe]);
    }break;
   default:
    var $ff=__hscore_st_dev(fe);
    var ue=[pe,$ff];
    var ve=ue[0],we=ue[1];
    var $ff=__hscore_st_ino(fe);
    var xe=[ve,$ff];
    var ye=xe[0],ze=xe[1];
    var De=$hs_touchzh(be,ye);
    var Ae=$d(1,[ze],"sat");
    var Be=$d(1,[we],"sat");
    var Ce=$d(1,[$$GHCziIOziDevice_Directory,Be,Ae],"sat");
    $r([De,Ce]);
   }
  },[be,fe]);
 },[be,ae]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals$z1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("tcSetAttr");
},"lvl1");
var $$SystemziPosixziInternals$A1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigemptyset");
},"lvl2");
var $$SystemziPosixziInternals$B1=$T(function(){
 $$SystemziPosixziInternals_setCloseOnExec3.J($$SystemziPosixziInternals$A1);
},"lvl3");
var $$SystemziPosixziInternals$C1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigaddset");
},"lvl4");
var $$SystemziPosixziInternals$D1=$T(function(){
 $$SystemziPosixziInternals_setCloseOnExec3.J($$SystemziPosixziInternals$C1);
},"lvl5");
var $$SystemziPosixziInternals$E1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigprocmask");
},"lvl6");
var $$SystemziPosixziInternals$F1=$T(function(){
 $$SystemziPosixziInternals_setCloseOnExec3.J($$SystemziPosixziInternals$E1);
},"lvl7");
var $$SystemziPosixziInternals$G1=$F(1,function(b){
 $$SystemziPosixziInternals_fdGetMode3.J(b);
},"pred");
var $$SystemziPosixziInternals$H1=$T(function(){
 $$SystemziPosixziInternals_setCloseOnExec3.J($$SystemziPosixziInternals$E1);
},"lvl8");
var $$SystemziPosixziInternals$I1=$F(1,function(b){
 $$SystemziPosixziInternals_fdGetMode3.J(b);
},"pred1");
var $$SystemziPosixziTypes_zdfNumCSsizze=$D(1,function(){
 $r([$$GHCziInt_zdfNumInt64zuzdczp,$$GHCziInt_zdfNumInt64zuzdczt,$$GHCziInt_zdfNumInt64zuzdczm,$$GHCziInt_zdfNumInt64zuzdcnegate,$$GHCziInt_zdfNumInt64zuzdcabs,$$GHCziInt_zdfNumInt64zuzdcsignum,$$GHCziInt_zdfNumInt64zuzdcfromInteger]);
},"at libraries/base/System/Posix/Types.hs:155:48");
var $$SystemziPosixziTypes_zdfEqCSsizze=$D(1,function(){
 $r([$$GHCziInt_zdfEqInt64zuzdczeze,$$GHCziInt_zdfEqInt64zuzdczsze]);
},"at libraries/base/System/Posix/Types.hs:155:41");
var $$GHCziCString_unpackAppendCStringzh=$f(2,function(m,n){
 var o=$f(1,function(p){
  var q=$hs_indexCharOffAddrzh(m,p);
  switch(q.toString()){
  case "\x00":
   $A(n);break;
  default:
   var r=$t(function(){
    var s=p.add(goog.math.Long.fromBits(1,0));
    o.J(s);
   },[p,o],"sat");
   var t=$d(1,[q],"sat");
   $R(2,[t,r],":");
  }
 },[m,n],"unpack");
 o.J(goog.math.Long.fromBits(0,0));
},[],"at libraries/ghc-prim/GHC/CString.hs:54:1");
var $$GHCziCString_unpackCStringzh=$f(1,function(u){
 var v=$f(1,function(w){
  var x=$hs_indexCharOffAddrzh(u,w);
  switch(x.toString()){
  case "\x00":
   $R(1,[],"[]");break;
  default:
   var y=$t(function(){
    var z=w.add(goog.math.Long.fromBits(1,0));
    v.J(z);
   },[w,v],"sat");
   var A=$d(1,[x],"sat");
   $R(2,[A,y],":");
  }
 },[u],"unpack");
 v.J(goog.math.Long.fromBits(0,0));
},[],"at libraries/ghc-prim/GHC/CString.hs:42:1");
var $$GHCziClasses_zeze=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:44:5");
var $$GHCziClasses_zdfEqCharzuzdczsze=$f(2,function(S2,T2){
 $M(S2,function(U2){
  var V2=U2.v[0];
  $M(T2,function(W2){
   var X2=W2.v[0];
   $r(V2!=X2?$$GHCziTypes_True:$$GHCziTypes_False);
  },[V2]);
 },[T2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:44:11");
var $$GHCziClasses_zdfEqCharzuzdczeze=$f(2,function(Y2,Z2){
 $M(Y2,function(a3){
  var b3=a3.v[0];
  $M(Z2,function(c3){
   var d3=c3.v[0];
   $r(b3==d3?$$GHCziTypes_True:$$GHCziTypes_False);
  },[b3]);
 },[Z2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:44:5");
var $$GHCziClasses_zdfEqChar=$D(1,function(){
 $r([$$GHCziClasses_zdfEqCharzuzdczeze,$$GHCziClasses_zdfEqCharzuzdczsze]);
},"at libraries/ghc-prim/GHC/Classes.hs:95:10");
var $$GHCziTuple_Z0T=$D(1,function(){
 $r([]);
},"in `ghc-prim:GHC.Tuple'");
var $$GHCziTypes_False=$D(1,function(){
 $r([]);
},"in `ghc-prim:GHC.Types'");
var $$GHCziTypes_True=$D(2,function(){
 $r([]);
},"in `ghc-prim:GHC.Types'");
var $$GHCziTypes_ZMZN=$D(1,function(){
 $r([]);
},"in `ghc-prim:GHC.Types'");
var $$GHCziIntegerziGMPziPrim_integer2Intzh=$f(2,function(a,b){
 $M(a,function(c){
  switch(c.toString()){
  case "0":
   $r(goog.math.Long.fromBits(0,0));break;
  default:
   var e=$hs_indexIntArrayzh(b,goog.math.Long.fromBits(0,0));
   var d=c.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(d.g){
   case 1:
    $A(e);break;
   case 2:
    $r(e.negate());break;
   }
  }
 },[b]);
},[],"at libraries/integer-gmp/GHC/Integer/GMP/Prim.hs:194:1");
var $$GHCziIntegerziType_smallInteger=$f(1,function(Od){
 $R(1,[Od],"S#");
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:88:1");
var $$GHCziIntegerziType_integerToInt=$f(1,function(Je){
 $M(Je,function(Ke){
  switch(Ke.g){
  case 1:
   var Le=Ke.v[0];
   $A(Le);break;
  case 2:
   var Me=Ke.v[0],Ne=Ke.v[1];
   $$GHCziIntegerziGMPziPrim_integer2Intzh.J(Me,Ne);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:138:1");
//@ sourceURL=hs3.js
