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
var $$SystemziGlibziGError_failOnGError2=$f(1,function(j3){
 $M(j3,function(k3){
  var l3=k3.v[0],m3=k3.v[1];
  $$GHCziException_zdp1Exception.C([l3,m3],function(n3){
   var o3=n3.v[0],p3=n3.v[1];
   var q3=$hs_eqWordzh(o3,goog.math.Long.fromBits(3582374661,870224196));
   switch(q3.g){
   case 1:
    var r3=$f(1,function(o1){
     $r($hs_raiseIOzh(k3,o1));
    },[k3],"sat");
    $A(r3);break;
   case 2:
    var s3=$hs_eqWordzh(p3,goog.math.Long.fromBits(3787932476,2058929238));
    switch(s3.g){
    case 1:
     var t3=$f(1,function(o1){
      $r($hs_raiseIOzh(k3,o1));
     },[k3],"sat");
     $A(t3);break;
    case 2:
     $M(m3,function(u3){
      var v3=u3.v[2];
      $$GHCziIO_failIO.J(v3);
     },[]);break;
    }break;
   }
  },[m3,k3]);
 },[]);
},[],"in `glib-0.12.3.1:System.Glib.GError'");
var $$SystemziGlibziGObject_makeNewGObject2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("makeNewGObject: object is NULL");
},[],"in `glib-0.12.3.1:System.Glib.GObject'");
var $$SystemziGlibziGObject_zdwa1=$f(4,function(a1,b1,c1,d1){
 c1.C([d1],function(e1){
  var f1=e1[0],g1=e1[1];
  $M(g1,function(h1){
   var i1=h1.v[0];
   var j1=$f(1,function(k1){
    var $ff=g_object_ref(i1);
    var l1=[k1,$ff];
    var m1=l1[0];
    $$SystemziGlibziFFI_zdwa.C([i1,b1,m1],function(n1){
     var o1=n1[0],p1=n1[1];
     a1.C([p1],function(q1){
      $r([o1,q1]);
     },[o1]);
    },[a1]);
   },[i1,b1,a1],"a3");
   var r1=$hs_eqAddrzh(i1,null);
   switch(r1.g){
   case 1:
    j1.J(f1);break;
   case 2:
    $$GHCziIO_failIO.C([$$SystemziGlibziGObject_makeNewGObject2,f1],function(s1){
     var t1=s1[0];
     j1.J(t1);
    },[i1,b1,a1,j1]);break;
   }
  },[b1,a1,f1]);
 },[b1,a1]);
},[],"in `glib-0.12.3.1:System.Glib.GObject'");
var $$SystemziGlibziTypes_toGObject=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at System/Glib/Types.chs:51:3");
var $$SystemziGlibziUTFString_fromUTF=$f(1,function(l){
 $M(l,function(m){
  switch(m.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var n=m.v[0],o=m.v[1];
   $M(n,function(p){
    var q=p.v[0];
    var L1=$hs_ordzh(q);
    var r=L1.lessThanOrEqual(goog.math.Long.fromBits(127,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(r.g){
    case 1:
     var J1=$hs_ordzh(q);
     var s=J1.lessThanOrEqual(goog.math.Long.fromBits(191,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(s.g){
     case 1:
      var I1=$hs_ordzh(q);
      var t=I1.lessThanOrEqual(goog.math.Long.fromBits(223,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(t.g){
      case 1:
       var i1=$hs_ordzh(q);
       var u=i1.lessThanOrEqual(goog.math.Long.fromBits(239,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(u.g){
       case 1:
	$A($$SystemziGlibziUTFString$f);break;
       case 2:
	$M(o,function(v){
	 switch(v.g){
	 case 1:
	  $A($$SystemziGlibziUTFString$d);break;
	 case 2:
	  var w=v.v[0],x=v.v[1];
	  $M(x,function(y){
	   switch(y.g){
	   case 1:
	    $A($$SystemziGlibziUTFString$d);break;
	   case 2:
	    var z=y.v[0],A=y.v[1];
	    var B=$t(function(){
	     $$SystemziGlibziUTFString_fromUTF.J(A);
	    },[A],"sat");
	    var C=$t(function(){
	     $M(w,function(D){
	      var E=D.v[0];
	      $M(z,function(F){
	       var G=F.v[0];
	       var h1=$hs_ordzh(E);
	       var g1=$hs_int2Wordzh(h1);
	       var f1=g1.and(goog.math.Long.fromBits(63,0));
	       var e1=$hs_word2Intzh(f1);
	       var I=$hs_uncheckedIShiftLzh(e1,goog.math.Long.fromBits(6,0));
	       var d1=$hs_ordzh(q);
	       var c1=$hs_int2Wordzh(d1);
	       var b1=c1.and(goog.math.Long.fromBits(15,0));
	       var a1=$hs_word2Intzh(b1);
	       var J=$hs_uncheckedIShiftLzh(a1,goog.math.Long.fromBits(12,0));
	       var Z=$hs_ordzh(G);
	       var Y=$hs_int2Wordzh(Z);
	       var V=Y.and(goog.math.Long.fromBits(63,0));
	       var X=$hs_int2Wordzh(I);
	       var W=$hs_int2Wordzh(J);
	       var U=W.or(X);
	       var T=U.or(V);
	       var H=$hs_leWordzh(T,goog.math.Long.fromBits(1114111,0));
	       switch(H.g){
	       case 1:
		$$SystemziGlibziUTFString$h.J(G,I,J);break;
	       case 2:
		var S=$hs_ordzh(G);
		var R=$hs_int2Wordzh(S);
		var O=R.and(goog.math.Long.fromBits(63,0));
		var Q=$hs_int2Wordzh(I);
		var P=$hs_int2Wordzh(J);
		var N=P.or(Q);
		var M=N.or(O);
		var L=$hs_word2Intzh(M);
		var K=$hs_chrzh(L);
		$R(1,[K],"C#");break;
	       }
	      },[q,E]);
	     },[q,z]);
	    },[q,w,z],"sat");
	    $R(2,[C,B],":");break;
	   }
	  },[q,w]);break;
	 }
	},[q]);break;
       }break;
      case 2:
       $M(o,function(j1){
	switch(j1.g){
	case 1:
	 $A($$SystemziGlibziUTFString$b);break;
	case 2:
	 var k1=j1.v[0],l1=j1.v[1];
	 var m1=$t(function(){
	  $$SystemziGlibziUTFString_fromUTF.J(l1);
	 },[l1],"sat");
	 var n1=$t(function(){
	  $M(k1,function(o1){
	   var p1=o1.v[0];
	   var H1=$hs_ordzh(q);
	   var G1=$hs_int2Wordzh(H1);
	   var F1=G1.and(goog.math.Long.fromBits(31,0));
	   var E1=$hs_word2Intzh(F1);
	   var r1=$hs_uncheckedIShiftLzh(E1,goog.math.Long.fromBits(6,0));
	   var D1=$hs_ordzh(p1);
	   var C1=$hs_int2Wordzh(D1);
	   var B1=C1.and(goog.math.Long.fromBits(63,0));
	   var A1=$hs_int2Wordzh(r1);
	   var z1=A1.or(B1);
	   var q1=$hs_leWordzh(z1,goog.math.Long.fromBits(1114111,0));
	   switch(q1.g){
	   case 1:
	    $$SystemziGlibziUTFString$g.J(p1,r1);break;
	   case 2:
	    var y1=$hs_ordzh(p1);
	    var x1=$hs_int2Wordzh(y1);
	    var w1=x1.and(goog.math.Long.fromBits(63,0));
	    var v1=$hs_int2Wordzh(r1);
	    var u1=v1.or(w1);
	    var t1=$hs_word2Intzh(u1);
	    var s1=$hs_chrzh(t1);
	    $R(1,[s1],"C#");break;
	   }
	  },[q]);
	 },[q,k1],"sat");
	 $R(2,[n1,m1],":");break;
	}
       },[q]);break;
      }break;
     case 2:
      $A($$SystemziGlibziUTFString$f);break;
     }break;
    case 2:
     var K1=$t(function(){
      $$SystemziGlibziUTFString_fromUTF.J(o);
     },[o],"sat");
     $R(2,[p,K1],":");break;
    }
   },[o]);break;
  }
 },[]);
},[],"at System/Glib/UTFString.hs:186:1");
var $$SystemziGlibziUTFString_toUTF=$f(1,function(e6){
 $M(e6,function(f6){
  switch(f6.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var g6=f6.v[0],h6=f6.v[1];
   $M(g6,function(i6){
    var j6=i6.v[0];
    var B7=$hs_ordzh(j6);
    var k6=B7.lessThanOrEqual(goog.math.Long.fromBits(127,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(k6.g){
    case 1:
     var z7=$hs_ordzh(j6);
     var l6=z7.lessThanOrEqual(goog.math.Long.fromBits(2047,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(l6.g){
     case 1:
      var m6=$t(function(){
       $$SystemziGlibziUTFString_toUTF.J(h6);
      },[h6],"sat");
      var n6=$t(function(){
       var y6=$hs_ordzh(j6);
       var x6=$hs_int2Wordzh(y6);
       var w6=x6.and(goog.math.Long.fromBits(63,0));
       var v6=goog.math.Long.fromBits(128,0).or(w6);
       var o6=$hs_leWordzh(v6,goog.math.Long.fromBits(1114111,0));
       switch(o6.g){
       case 1:
	$$SystemziGlibziUTFString$j.J(j6);break;
       case 2:
	var u6=$hs_ordzh(j6);
	var t6=$hs_int2Wordzh(u6);
	var s6=t6.and(goog.math.Long.fromBits(63,0));
	var r6=goog.math.Long.fromBits(128,0).or(s6);
	var q6=$hs_word2Intzh(r6);
	var p6=$hs_chrzh(q6);
	$R(1,[p6],"C#");break;
       }
      },[j6],"sat");
      var z6=$d(2,[n6,m6],"sat");
      var A6=$t(function(){
       var L6=$hs_ordzh(j6);
       var C6=$hs_uncheckedIShiftRAzh(L6,goog.math.Long.fromBits(6,0));
       var K6=$hs_int2Wordzh(C6);
       var J6=K6.and(goog.math.Long.fromBits(63,0));
       var I6=goog.math.Long.fromBits(128,0).or(J6);
       var B6=$hs_leWordzh(I6,goog.math.Long.fromBits(1114111,0));
       switch(B6.g){
       case 1:
	$$SystemziGlibziUTFString$i.J(C6);break;
       case 2:
	var H6=$hs_int2Wordzh(C6);
	var G6=H6.and(goog.math.Long.fromBits(63,0));
	var F6=goog.math.Long.fromBits(128,0).or(G6);
	var E6=$hs_word2Intzh(F6);
	var D6=$hs_chrzh(E6);
	$R(1,[D6],"C#");break;
       }
      },[j6],"sat");
      var M6=$d(2,[A6,z6],"sat");
      var N6=$t(function(){
       var Y6=$hs_ordzh(j6);
       var P6=$hs_uncheckedIShiftRAzh(Y6,goog.math.Long.fromBits(12,0));
       var X6=$hs_int2Wordzh(P6);
       var W6=X6.and(goog.math.Long.fromBits(15,0));
       var V6=goog.math.Long.fromBits(224,0).or(W6);
       var O6=$hs_leWordzh(V6,goog.math.Long.fromBits(1114111,0));
       switch(O6.g){
       case 1:
	$$SystemziGlibziUTFString$l.J(P6);break;
       case 2:
	var U6=$hs_int2Wordzh(P6);
	var T6=U6.and(goog.math.Long.fromBits(15,0));
	var S6=goog.math.Long.fromBits(224,0).or(T6);
	var R6=$hs_word2Intzh(S6);
	var Q6=$hs_chrzh(R6);
	$R(1,[Q6],"C#");break;
       }
      },[j6],"sat");
      $R(2,[N6,M6],":");break;
     case 2:
      var Z6=$t(function(){
       $$SystemziGlibziUTFString_toUTF.J(h6);
      },[h6],"sat");
      var a7=$t(function(){
       var l7=$hs_ordzh(j6);
       var k7=$hs_int2Wordzh(l7);
       var j7=k7.and(goog.math.Long.fromBits(63,0));
       var i7=goog.math.Long.fromBits(128,0).or(j7);
       var b7=$hs_leWordzh(i7,goog.math.Long.fromBits(1114111,0));
       switch(b7.g){
       case 1:
	$$SystemziGlibziUTFString$j.J(j6);break;
       case 2:
	var h7=$hs_ordzh(j6);
	var g7=$hs_int2Wordzh(h7);
	var f7=g7.and(goog.math.Long.fromBits(63,0));
	var e7=goog.math.Long.fromBits(128,0).or(f7);
	var d7=$hs_word2Intzh(e7);
	var c7=$hs_chrzh(d7);
	$R(1,[c7],"C#");break;
       }
      },[j6],"sat");
      var m7=$d(2,[a7,Z6],"sat");
      var n7=$t(function(){
       var y7=$hs_ordzh(j6);
       var p7=$hs_uncheckedIShiftRAzh(y7,goog.math.Long.fromBits(6,0));
       var x7=$hs_int2Wordzh(p7);
       var w7=x7.and(goog.math.Long.fromBits(31,0));
       var v7=goog.math.Long.fromBits(192,0).or(w7);
       var o7=$hs_leWordzh(v7,goog.math.Long.fromBits(1114111,0));
       switch(o7.g){
       case 1:
	$$SystemziGlibziUTFString$k.J(p7);break;
       case 2:
	var u7=$hs_int2Wordzh(p7);
	var t7=u7.and(goog.math.Long.fromBits(31,0));
	var s7=goog.math.Long.fromBits(192,0).or(t7);
	var r7=$hs_word2Intzh(s7);
	var q7=$hs_chrzh(r7);
	$R(1,[q7],"C#");break;
       }
      },[j6],"sat");
      $R(2,[n7,m7],":");break;
     }break;
    case 2:
     var A7=$t(function(){
      $$SystemziGlibziUTFString_toUTF.J(h6);
     },[h6],"sat");
     $R(2,[i6,A7],":");break;
    }
   },[h6]);break;
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
var $$SystemziGlibziUTFString$g=$F(2,function(u8,v8){
 var C8=$hs_ordzh(u8);
 var B8=$hs_int2Wordzh(C8);
 var A8=B8.and(goog.math.Long.fromBits(63,0));
 var z8=$hs_int2Wordzh(v8);
 var y8=z8.or(A8);
 var x8=$hs_word2Intzh(y8);
 var w8=$d(1,[x8],"sat");
 $$GHCziBase_chr1.J(w8);
},"lvl5");
var $$SystemziGlibziUTFString$h=$F(3,function(D8,E8,F8){
 var O8=$hs_ordzh(D8);
 var N8=$hs_int2Wordzh(O8);
 var K8=N8.and(goog.math.Long.fromBits(63,0));
 var M8=$hs_int2Wordzh(E8);
 var L8=$hs_int2Wordzh(F8);
 var J8=L8.or(M8);
 var I8=J8.or(K8);
 var H8=$hs_word2Intzh(I8);
 var G8=$d(1,[H8],"sat");
 $$GHCziBase_chr1.J(G8);
},"lvl6");
var $$SystemziGlibziUTFString$i=$F(1,function(P8){
 var U8=$hs_int2Wordzh(P8);
 var T8=U8.and(goog.math.Long.fromBits(63,0));
 var S8=goog.math.Long.fromBits(128,0).or(T8);
 var R8=$hs_word2Intzh(S8);
 var Q8=$d(1,[R8],"sat");
 $$GHCziBase_chr1.J(Q8);
},"lvl7");
var $$SystemziGlibziUTFString$j=$F(1,function(V8){
 var b9=$hs_ordzh(V8);
 var a9=$hs_int2Wordzh(b9);
 var Z8=a9.and(goog.math.Long.fromBits(63,0));
 var Y8=goog.math.Long.fromBits(128,0).or(Z8);
 var X8=$hs_word2Intzh(Y8);
 var W8=$d(1,[X8],"sat");
 $$GHCziBase_chr1.J(W8);
},"lvl8");
var $$SystemziGlibziUTFString$k=$F(1,function(c9){
 var h9=$hs_int2Wordzh(c9);
 var g9=h9.and(goog.math.Long.fromBits(31,0));
 var f9=goog.math.Long.fromBits(192,0).or(g9);
 var e9=$hs_word2Intzh(f9);
 var d9=$d(1,[e9],"sat");
 $$GHCziBase_chr1.J(d9);
},"lvl9");
var $$SystemziGlibziUTFString$l=$F(1,function(i9){
 var n9=$hs_int2Wordzh(i9);
 var m9=n9.and(goog.math.Long.fromBits(15,0));
 var l9=goog.math.Long.fromBits(224,0).or(m9);
 var k9=$hs_word2Intzh(l9);
 var j9=$d(1,[k9],"sat");
 $$GHCziBase_chr1.J(j9);
},"lvl10");
var $$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop=$D(1,function(){
 $r([$hs_labelFunction("gtk2hs_g_object_unref_from_mainloop",null)]);
},"at Graphics/UI/Gtk/General/Threading.hs:37:3");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1=$f(1,function(K7){
 $A(K7);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$ControlziExceptionziBase_finally2=$f(3,function(x1,y1,z1){
 x1.C([z1],function(A1){
  var B1=A1[0];
  $r($hs_raiseIOzh(y1,B1));
 },[y1]);
},[],"in `base:Control.Exception.Base'");
var $$DataziList_isPrefixOf=$f(3,function(Wk,Xk,Yk){
 $M(Xk,function(Zk){
  switch(Zk.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   var al=Zk.v[0],bl=Zk.v[1];
   $M(Yk,function(cl){
    switch(cl.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var dl=cl.v[0],el=cl.v[1];
     $$GHCziClasses_zeze.C([Wk,al,dl],function(fl){
      switch(fl.g){
      case 1:
       $R(1,[],"False");break;
      case 2:
       $$DataziList_isPrefixOf.J(Wk,bl,el);break;
      }
     },[Wk,bl,el]);break;
    }
   },[Wk,al,bl]);break;
  }
 },[Yk,Wk]);
},[],"at libraries/base/Data/List.hs:297:1");
var $$DataziMaybe_fromJust1=$t(function(){
 $$GHCziErr_error.J($$DataziMaybe$a);
},[],"in `base:Data.Maybe'");
var $$DataziMaybe_Nothing=$D(1,function(){
 $r([]);
},"at libraries/base/Data/Maybe.hs:69:19");
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
},[],"at libraries/base/Data/Typeable.hs:177:1");
var $$DataziTypeableziInternal_mkTyCon=$f(5,function(N,O,P,Q,R){
 $R(1,[N,O,P,Q,R],"TyCon");
},[],"at libraries/base/Data/Typeable/Internal.hs:125:1");
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
},[],"at libraries/base/Data/Typeable/Internal.hs:130:1");
var $$DataziTypeableziInternal$j=$F(1,function(mk){
 $M(mk,function(nk){
  switch(nk.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var ok=nk.v[0],pk=nk.v[1];
   $M(ok,function(qk){
    var rk=qk.v[0],sk=qk.v[1];
    var tk=$t(function(){
     $$DataziTypeableziInternal$j.J(pk);
    },[pk],"sat");
    var uk=$d(1,[rk,sk],"sat");
    $R(2,[uk,tk],":");
   },[pk]);break;
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
var $$ForeignziCziError_throwErrnoIfMinus1Retry2=$f(4,function(w2,x2,y2,z2){
 y2.C([z2],function(A2){
  var B2=A2[0],C2=A2[1];
  w2.C([C2],function(D2){
   switch(D2.g){
   case 1:
    $r([B2,C2]);break;
   case 2:
    var $ff=__hscore_get_errno();
    var E2=[B2,$ff];
    var F2=E2[0],G2=E2[1];
    var H2=$hs_narrow32Intzh(G2);
    switch(H2.toString()){
    case "4":
     $$ForeignziCziError_throwErrnoIfMinus1Retry2.J(w2,x2,y2,F2);break;
    default:
     $$ForeignziCziError_throwErrno1.J(x2,F2);
    }break;
   }
  },[y2,C2,w2,B2,x2]);
 },[y2,w2,x2]);
},[],"in `base:Foreign.C.Error'");
var $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2=$f(5,function(j3,k3,l3,m3,n3){
 l3.C([n3],function(o3){
  var p3=o3[0],q3=o3[1];
  j3.C([q3],function(r3){
   switch(r3.g){
   case 1:
    $r([p3,q3]);break;
   case 2:
    var $ff=__hscore_get_errno();
    var s3=[p3,$ff];
    var t3=s3[0],u3=s3[1];
    var v3=$hs_narrow32Intzh(u3);
    switch(v3.toString()){
    case "4":
     $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.J(j3,k3,l3,m3,t3);break;
    case "11":
     m3.C([t3],function(w3){
      var x3=w3[0];
      $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.J(j3,k3,l3,m3,x3);
     },[l3,j3,k3,m3]);break;
    default:
     $$ForeignziCziError_throwErrno1.J(k3,t3);
    }break;
   }
  },[l3,q3,j3,p3,k3,m3]);
 },[l3,j3,k3,m3]);
},[],"in `base:Foreign.C.Error'");
var $$ForeignziCziString_zdwa=$f(2,function(J4,K4){
 var L4=$f(2,function(M4,N4){
  var O4=$hs_readInt8OffAddrzh(J4,M4,N4);
  var P4=O4[0],Q4=O4[1];
  $M(Q4,function(R4){
   switch(R4.toString()){
   case "0":
    var T4=$d(1,[M4],"sat");
    $r([P4,T4]);break;
   default:
    var S4=M4.add(goog.math.Long.fromBits(1,0));
    L4.J(S4,P4);
   }
  },[M4,L4,P4]);
 },[J4],"$sa");
 L4.C([goog.math.Long.fromBits(0,0),K4],function(U4){
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
},[],"at libraries/base/Foreign/C/String.hs:366:1");
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
var $$ForeignziMarshalziArray_newArray2=$f(4,function(g2,h2,i2,j2){
 var k2=$f(3,function(l2,m2,n2){
  $M(l2,function(o2){
   switch(o2.g){
   case 1:
    $r([n2,$$GHCziTuple_Z0T]);break;
   case 2:
    var p2=o2.v[0],q2=o2.v[1];
    var r2=$d(1,[m2],"sat");
    $$ForeignziStorable_pokeElemOff.C([g2,h2,r2,p2,n2],function(s2){
     var t2=s2[0];
     var u2=m2.add(goog.math.Long.fromBits(1,0));
     k2.J(q2,u2,t2);
    },[g2,h2,m2,q2,k2]);break;
   }
  },[n2,g2,h2,m2,k2]);
 },[g2,h2],"a");
 k2.J(i2,goog.math.Long.fromBits(0,0),j2);
},[],"in `base:Foreign.Marshal.Array'");
var $$ForeignziMarshalziArray_zdwa8=$f(4,function(v2,w2,x2,y2){
 var z2=w2.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(z2.g){
 case 1:
  var A2=$t(function(){
   $$ForeignziStorable_peekElemOff.J(v2,x2,$$ForeignziMarshalziArray_peekArray2);
  },[v2,x2],"lvl");
  var B2=$f(3,function(C2,D2,E2){
   $M(C2,function(F2){
    switch(F2.toString()){
    case "0":
     A2.C([E2],function(M2){
      var N2=M2[0],O2=M2[1];
      var P2=$d(2,[O2,D2],"sat");
      $r([N2,P2]);
     },[D2]);break;
    default:
     var G2=$d(1,[F2],"sat");
     $$ForeignziStorable_peekElemOff.C([v2,x2,G2,E2],function(H2){
      var I2=H2[0],J2=H2[1];
      var K2=$d(2,[J2,D2],"sat");
      var L2=F2.subtract(goog.math.Long.fromBits(1,0));
      B2.J(L2,K2,I2);
     },[v2,x2,A2,F2,B2,D2]);
    }
   },[v2,x2,A2,E2,B2,D2]);
  },[v2,x2,A2],"$wa9");
  var Q2=w2.subtract(goog.math.Long.fromBits(1,0));
  B2.J(Q2,$$GHCziTypes_ZMZN,y2);break;
 case 2:
  $r([y2,$$GHCziTypes_ZMZN]);break;
 }
},[],"in `base:Foreign.Marshal.Array'");
var $$ForeignziMarshalziArray_allocaArray=$f(2,function(G3,H3){
 var I3=$t(function(){
  $$ForeignziStorable_alignment.J(G3,$$GHCziErr_undefined);
 },[G3],"ds1");
 var J3=$t(function(){
  $M(H3,function(K3){
   var L3=K3.v[0];
   $$ForeignziStorable_sizzeOf.C([G3,$$GHCziErr_undefined],function(M3){
    var N3=M3.v[0];
    var O3=L3.multiply(N3);
    $R(1,[O3],"I#");
   },[L3]);
  },[G3]);
 },[G3,H3],"ds");
 var P3=$f(2,function(Q3,R3){
  $M(J3,function(S3){
   var T3=S3.v[0];
   $M(I3,function(U3){
    var V3=U3.v[0];
    var W3=$hs_newAlignedPinnedByteArrayzh(T3,V3,R3);
    var X3=W3[0],Y3=W3[1];
    var Z3=$hs_unsafeFreezzeByteArrayzh(Y3,X3);
    var a4=Z3[0],b4=Z3[1];
    var d4=$hs_byteArrayContentszh(b4);
    var c4=$d(1,[d4],"sat");
    Q3.C([c4,a4],function(e4){
     var f4=e4[0],g4=e4[1];
     var h4=$hs_touchzh(b4,f4);
     $r([h4,g4]);
    },[b4]);
   },[T3,R3,Q3]);
  },[I3,R3,Q3]);
 },[I3,J3],"sat");
 $A(P3);
},[],"at libraries/base/Foreign/Marshal/Array.hs:103:1");
var $$ForeignziMarshalziArray_withArrayLen=$f(3,function(T4,U4,V4){
 var W4=$t(function(){
  $$GHCziList_zdwlen.C([U4,goog.math.Long.fromBits(0,0)],function(X4){
   $R(1,[X4],"I#");
  },[]);
 },[U4],"len");
 var Y4=$f(2,function(Z4,a5){
  $$ForeignziMarshalziArray_newArray2.C([T4,Z4,U4,a5],function(b5){
   var c5=b5[0];
   V4.J(W4,Z4,c5);
  },[W4,Z4,V4]);
 },[U4,W4,T4,V4],"sat");
 $$ForeignziMarshalziArray_allocaArray.J(T4,W4,Y4);
},[],"at libraries/base/Foreign/Marshal/Array.hs:210:1");
var $$ForeignziStorable_sizzeOf=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:105:4");
var $$ForeignziStorable_alignment=$f(1,function(d){
 $M(d,function(e){
  var f=e.v[1];
  $A(f);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:109:4");
var $$ForeignziStorable_peekElemOff=$f(1,function(g){
 $M(g,function(h){
  var i=h.v[2];
  $A(i);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:114:4");
var $$ForeignziStorable_pokeElemOff=$f(1,function(j){
 $M(j,function(k){
  var l=k.v[3];
  $A(l);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:128:4");
var $$ForeignziStorable_zdfStorableBool8=$D(1,function(){
 $r([goog.math.Long.fromBits(4,0)]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableCharzuzdcalignment=$f(1,function(U){
 $A($$ForeignziStorable_zdfStorableBool8);
},[],"at libraries/base/Foreign/Storable.hs:109:4");
var $$ForeignziStorable_zdfStorableCharzuzdcsizzeOf=$f(1,function(V){
 $A($$ForeignziStorable_zdfStorableBool8);
},[],"at libraries/base/Foreign/Storable.hs:105:4");
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
},"at libraries/base/Foreign/Storable.hs:198:10");
var $$ForeignziStorable_zdfStorableDouble6=$D(1,function(){
 $r([goog.math.Long.fromBits(8,0)]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt30=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt8zuzdcalignment=$f(1,function(Ia){
 $A($$ForeignziStorable_zdfStorableInt30);
},[],"at libraries/base/Foreign/Storable.hs:109:4");
var $$ForeignziStorable_zdfStorableInt8zuzdcsizzeOf=$f(1,function(Ja){
 $A($$ForeignziStorable_zdfStorableInt30);
},[],"at libraries/base/Foreign/Storable.hs:105:4");
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
},[],"at libraries/base/Foreign/Storable.hs:109:4");
var $$ForeignziStorable_zdfStorableFingerprint8=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprintzuzdcsizzeOf=$f(1,function(ie){
 $A($$ForeignziStorable_zdfStorableFingerprint8);
},[],"at libraries/base/Foreign/Storable.hs:105:4");
var $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa1=$f(4,function(Ce,De,Ee,Fe){
 $M(De,function(Ge){
  switch(Ge.toString()){
  case "0":
   var Oe=$d(1,[Ee],"sat");
   $r([Fe,Oe]);break;
  default:
   var He=$hs_readWord8OffAddrzh(Ce,goog.math.Long.fromBits(0,0),Fe);
   var Ie=He[0],Je=He[1];
   var Ne=$hs_uncheckedShiftLzh(Ee,goog.math.Long.fromBits(8,0));
   var Me=Ne.or(Je);
   var Le=Ge.subtract(goog.math.Long.fromBits(1,0));
   var Ke=$hs_plusAddrzh(Ce,goog.math.Long.fromBits(1,0));
   $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa1.J(Ke,Le,Me,Ie);
  }
 },[Ce,Fe,Ee]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableFingerprint2=$f(2,function(Pe,Qe){
 $M(Pe,function(Re){
  var Se=Re.v[0];
  var Te=$hs_readWord8OffAddrzh(Se,goog.math.Long.fromBits(0,0),Qe);
  var Ue=Te[0],Ve=Te[1];
  var lf=goog.math.Long.fromBits(0,0).or(Ve);
  var kf=$hs_plusAddrzh(Se,goog.math.Long.fromBits(1,0));
  $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa1.C([kf,goog.math.Long.fromBits(7,0),lf,Ue],function(We){
   var Xe=We[0],Ye=We[1];
   var jf=$hs_plusAddrzh(Se,goog.math.Long.fromBits(8,0));
   var Ze=$hs_readWord8OffAddrzh(jf,goog.math.Long.fromBits(0,0),Xe);
   var af=Ze[0],bf=Ze[1];
   var hf=goog.math.Long.fromBits(0,0).or(bf);
   var gf=$hs_plusAddrzh(jf,goog.math.Long.fromBits(1,0));
   $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa1.C([gf,goog.math.Long.fromBits(7,0),hf,af],function(cf){
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
 $M(qg,function(tg){
  switch(tg.toString()){
  case "0":
   $r([sg,$$GHCziTuple_Z0T]);break;
  default:
   var yg=$hs_narrow8Wordzh(rg);
   var xg=tg.subtract(goog.math.Long.fromBits(1,0));
   var wg=$hs_writeWord8OffAddrzh(pg,xg,yg,sg);
   var vg=$hs_uncheckedShiftRLzh(rg,goog.math.Long.fromBits(8,0));
   var ug=tg.subtract(goog.math.Long.fromBits(1,0));
   $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa.J(pg,ug,vg,wg);
  }
 },[pg,rg,sg]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdwa=$f(4,function(zg,Ag,Bg,Cg){
 $M(zg,function(Dg){
  var Eg=Dg.v[0];
  var Ng=$hs_narrow8Wordzh(Ag);
  var Mg=$hs_writeWord8OffAddrzh(Eg,goog.math.Long.fromBits(7,0),Ng,Cg);
  var Lg=$hs_uncheckedShiftRLzh(Ag,goog.math.Long.fromBits(8,0));
  $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa.C([Eg,goog.math.Long.fromBits(7,0),Lg,Mg],function(Fg){
   var Gg=Fg[0];
   var Hg=$hs_plusAddrzh(Eg,goog.math.Long.fromBits(8,0));
   var Kg=$hs_narrow8Wordzh(Bg);
   var Jg=$hs_writeWord8OffAddrzh(Hg,goog.math.Long.fromBits(7,0),Kg,Gg);
   var Ig=$hs_uncheckedShiftRLzh(Bg,goog.math.Long.fromBits(8,0));
   $$ForeignziStorable_zdfStorableFingerprintzuzdszdwa.J(Hg,goog.math.Long.fromBits(7,0),Ig,Jg);
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
},"at libraries/base/Foreign/Storable.hs:256:10");
var $$GHCziBase_id=$f(1,function(M2){
 $A(M2);
},[],"at libraries/base/GHC/Base.lhs:515:1");
var $$GHCziBase_eqString=$f(2,function(G3,H3){
 $M(G3,function(I3){
  switch(I3.g){
  case 1:
   $M(H3,function(J3){
    switch(J3.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   var K3=I3.v[0],L3=I3.v[1];
   $M(H3,function(M3){
    switch(M3.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var N3=M3.v[0],O3=M3.v[1];
     $M(K3,function(P3){
      var Q3=P3.v[0];
      $M(N3,function(R3){
       var S3=R3.v[0];
       var T3=Q3==S3?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(T3.g){
       case 1:
	$R(1,[],"False");break;
       case 2:
	$$GHCziBase_eqString.J(L3,O3);break;
       }
      },[Q3,L3,O3]);
     },[N3,L3,O3]);break;
    }
   },[K3,L3]);break;
  }
 },[H3]);
},[],"at libraries/base/GHC/Base.lhs:470:1");
var $$GHCziBase_map=$f(2,function(X3,Y3){
 $M(Y3,function(Z3){
  switch(Z3.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var a4=Z3.v[0],b4=Z3.v[1];
   var c4=$t(function(){
    $$GHCziBase_map.J(X3,b4);
   },[X3,b4],"sat");
   var d4=$t(function(){
    X3.J(a4);
   },[a4,X3],"sat");
   $R(2,[d4,c4],":");break;
  }
 },[X3]);
},[],"at libraries/base/GHC/Base.lhs:358:1");
var $$GHCziBase_zpzp=$f(2,function(n4,o4){
 $M(n4,function(p4){
  switch(p4.g){
  case 1:
   $A(o4);break;
  case 2:
   var q4=p4.v[0],r4=p4.v[1];
   var s4=$t(function(){
    $$GHCziBase_zpzp.J(r4,o4);
   },[o4,r4],"sat");
   $R(2,[q4,s4],":");break;
  }
 },[o4]);
},[],"at libraries/base/GHC/Base.lhs:404:1");
var $$GHCziBase_chr1=$f(1,function(q2){
 $$GHCziBase$b.J(q2);
},[],"in `base:GHC.Base'");
var $$GHCziBase$a=$D(1,function(){
 $r([goog.math.Long.fromBits(9,0)]);
},"lvl");
var $$GHCziBase$b=$F(1,function(Y4){
 var Z4=$t(function(){
  $$GHCziShow_showSignedInt.J($$GHCziBase$a,Y4,$$GHCziTypes_ZMZN);
 },[Y4],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Prelude.chr: bad argument: ",Z4],function(a5){
  $$GHCziErr_error.J(a5);
 },[]);
},"lvl1");
var $$GHCziConcziSync_zdfShowThreadStatus1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync_sharedCAF1=$f(3,function(id,jd,kd){
 var ld=$hs_getMaskingStatezh(kd);
 var md=ld[0],nd=ld[1];
 var od=$f(1,function(pd){
  var qd=[pd,id];
  var rd=qd[0],sd=qd[1];
  var td=$d(1,[sd],"sat");
  jd.C([td,rd],function(ud){
   var vd=ud[0],wd=ud[1];
   $M(wd,function(xd){
    var yd=xd.v[0];
    var zd=$hs_eqAddrzh(sd,yd);
    switch(zd.g){
    case 1:
     var $ff=hs_free_stable_ptr(sd);
     var Ad=[vd,$ff];
     var Bd=Ad[0];
     $r([Bd,yd]);break;
    case 2:
     $r([vd,id]);break;
    }
   },[id,sd,vd]);
  },[id,sd]);
 },[id,jd],"a5");
 $M(nd,function(Cd){
  switch(Cd.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[od,md]);break;
  default:
   od.J(md);
  }
 },[od,md]);
},[],"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync_uncaughtExceptionHandler=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziConcziSync$n);
},[],"at libraries/base/GHC/Conc/Sync.lhs:791:1");
var $$GHCziConcziSync$c=$F(3,function(Nf,Of,Pf){
 $M(Nf,function(Qf){
  var Rf=Qf.v[0];
  $M(Of,function(Sf){
   var Tf=Sf.v[0];
   var $ff=errorBelch2(Rf,Tf);
   var Uf=[Pf,$ff];
   var Vf=Uf[0];
   $r([Vf,$$GHCziTuple_Z0T]);
  },[Rf,Pf]);
 },[Of,Pf]);
},"a2");
var $$GHCziConcziSync$d=$F(3,function(g,h,i){
 $$GHCziConcziSync$c.J(g,h,i);
},"at libraries/base/GHC/Conc/Sync.lhs:808:4");
var $$GHCziConcziSync$i=$T(function(){
 $$GHCziIOziHandle_hFlush.J($$GHCziIOziHandleziFD_stdout);
},"lvl2");
var $$GHCziConcziSync$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no threads to run:  infinite loop or deadlock?");
},"lvl3");
var $$GHCziConcziSync$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("%s");
},"lvl4");
var $$GHCziConcziSync$l=$F(2,function(Wf,Xf){
 $M(Wf,function(Yf){
  $r([Xf,$$GHCziTuple_Z0T]);
 },[Xf]);
},"lvl5");
var $$GHCziConcziSync$m=$F(2,function(Zf,ag){
 $M(Zf,function(bg){
  var cg=bg.v[0],dg=bg.v[1];
  $b($hs_catchzh,[$$GHCziConcziSync$i,$$GHCziConcziSync$l,ag],function(eg){
   var fg=eg[0];
   $$GHCziIOziEncoding_getForeignEncoding.C([fg],function(gg){
    var hg=gg[0],ig=gg[1];
    var jg=$f(2,function(kg,lg){
     $$GHCziIOziEncoding_getForeignEncoding.C([lg],function(mg){
      var ng=mg[0],og=mg[1];
      var pg=$f(2,function(qg,i){
       $$GHCziConcziSync$d.J(kg,qg,i);
      },[kg],"sat");
      var rg=$t(function(){
       $$GHCziException_zdp1Exception.C([cg],function(yg){
	$$DataziTypeable_cast.C([yg,$$GHCziIOziException_zdfTypeableDeadlockzuzdctypeOf,dg],function(sg){
	 switch(sg.g){
	 case 1:
	  $$DataziTypeable_cast.C([yg,$$GHCziException_zdfExceptionErrorCallzuzdctypeOf,dg],function(tg){
	   switch(tg.g){
	   case 1:
	    $$GHCziException_zdp2Exception.C([cg],function(ug){
	     $$GHCziShow_showsPrec.J(ug,$$GHCziConcziSync_zdfShowThreadStatus1,dg,$$GHCziTypes_ZMZN);
	    },[dg]);break;
	   case 2:
	    var vg=tg.v[0];
	    $M(vg,function(wg){
	     var xg=wg.v[0];
	     $A(xg);
	    },[]);break;
	   }
	  },[cg,dg]);break;
	 case 2:
	  var zg=sg.v[0];
	  $M(zg,function(Ag){
	   $A($$GHCziConcziSync$j);
	  },[]);break;
	 }
	},[cg,yg,dg]);
       },[cg,dg]);
      },[cg,dg],"sat");
      $$GHCziForeign_charIsRepresentable3.J(og,rg,pg,ng);
     },[cg,dg,kg]);
    },[cg,dg],"sat");
    $$GHCziForeign_charIsRepresentable3.J(ig,$$GHCziConcziSync$k,jg,hg);
   },[cg,dg]);
  },[cg,dg]);
 },[ag]);
},"a3");
var $$GHCziConcziSync$n=$F(1,function(Bg){
 var Gg=$hs_noDuplicatezh(Bg);
 var Cg=$hs_newMutVarzh($$GHCziConcziSync$m,Gg);
 var Dg=Cg[0],Eg=Cg[1];
 var Fg=$d(1,[Eg],"sat");
 $r([Dg,Fg]);
},"lvl6");
var $$GHCziEnum_zdfEnumBool3=$t(function(){
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
},[],"at libraries/base/GHC/Err.lhs:60:1");
var $$GHCziErr$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.undefined");
},"lvl");
var $$GHCziEventziControl_sendWakeupzuloc=$t(function(){
 $$GHCziCString_unpackCStringzh.J("sendWakeup");
},[],"in `base:GHC.Event.Control'");
var $$GHCziEventziControl_sendWakeup1=$f(2,function(G7,H7){
 var I7=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),H7);
 var J7=I7[0],K7=I7[1];
 var L7=$hs_unsafeFreezzeByteArrayzh(K7,J7);
 var M7=L7[0],N7=L7[1];
 var f8=$hs_byteArrayContentszh(N7);
 var g8=$hs_writeWord64OffAddrzh(f8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),M7);
 $M(G7,function(O7){
  var P7=O7.v[2];
  var e8=$hs_narrow32Intzh(P7);
  var $ff=write(e8,f8,goog.math.Long.fromBits(8,0));
  var Q7=[g8,$ff];
  var R7=Q7[0],S7=Q7[1];
  $M(S7,function(T7){
   switch(T7.toString()){
   case "-1":
    var $ff=__hscore_get_errno();
    var V7=[R7,$ff];
    var W7=V7[0],X7=V7[1];
    var Z7=$hs_narrow32Intzh(X7);
    var Y7=$d(1,[Z7],"sat");
    $$ForeignziCziError_errnoToIOError.C([$$GHCziEventziControl_sendWakeupzuloc,Y7,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(a8){
     $$GHCziIOziException_ioError.C([a8,W7],function(b8){
      var c8=b8[0];
      var d8=$hs_touchzh(N7,c8);
      $r([d8,$$GHCziTuple_Z0T]);
     },[N7]);
    },[N7,W7]);break;
   default:
    var U7=$hs_touchzh(N7,R7);
    $r([U7,$$GHCziTuple_Z0T]);
   }
  },[N7,R7]);
 },[N7,f8,g8]);
},[],"in `base:GHC.Event.Control'");
var $$GHCziEventziIntMap_deletezuzdszdwdelete=$f(2,function(S2,T2){
 $M(T2,function(U2){
  switch(U2.g){
  case 1:
   $r([$$DataziMaybe_Nothing,$$GHCziEventziIntMap_Nil]);break;
  case 2:
   var V2=U2.v[0],W2=U2.v[1];
   var X2=S2.equals(V2)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(X2.g){
   case 1:
    $r([$$DataziMaybe_Nothing,U2]);break;
   case 2:
    var Y2=$d(2,[W2],"sat");
    $r([Y2,$$GHCziEventziIntMap_Nil]);break;
   }break;
  case 3:
   var Z2=U2.v[0],a3=U2.v[1],b3=U2.v[2],c3=U2.v[3];
   var H3=$hs_int2Wordzh(a3);
   var N3=H3.subtract(goog.math.Long.fromBits(1,0));
   var M3=N3.xor(goog.math.Long.fromBits(4294967295,4294967295));
   var L3=M3.xor(H3);
   var K3=$hs_int2Wordzh(S2);
   var J3=K3.and(L3);
   var I3=$hs_word2Intzh(J3);
   var d3=I3.notEquals(Z2)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(d3.g){
   case 1:
    var G3=$hs_int2Wordzh(S2);
    var F3=G3.and(H3);
    var e3=$hs_eqWordzh(F3,goog.math.Long.fromBits(0,0));
    switch(e3.g){
    case 1:
     var f3=$t(function(){
      $$GHCziEventziIntMap_deletezuzdszdwdelete.C([S2,c3],function(g3){
       var h3=g3[0],i3=g3[1];
       $R(1,[h3,i3],"(,)");
      },[]);
     },[S2,c3],"ds");
     var j3=$t(function(){
      $M(f3,function(k3){
       var l3=k3.v[1];
       $M(l3,function(m3){
	switch(m3.g){
	case 1:
	 $A(b3);break;
	default:
	 $M(b3,function(n3){
	  switch(n3.g){
	  case 1:
	   $A(m3);break;
	  default:
	   $R(3,[Z2,a3,n3,m3],"Bin");
	  }
	 },[a3,Z2,m3]);
	}
       },[a3,Z2,b3]);
      },[a3,Z2,b3]);
     },[a3,Z2,f3,b3],"sat");
     var o3=$t(function(){
      $M(f3,function(p3){
       var q3=p3.v[0];
       $A(q3);
      },[]);
     },[f3],"sat");
     $r([o3,j3]);break;
    case 2:
     var r3=$t(function(){
      $$GHCziEventziIntMap_deletezuzdszdwdelete.C([S2,b3],function(s3){
       var t3=s3[0],u3=s3[1];
       $R(1,[t3,u3],"(,)");
      },[]);
     },[S2,b3],"ds");
     var v3=$t(function(){
      $M(c3,function(w3){
       switch(w3.g){
       case 1:
	$M(r3,function(A3){
	 var B3=A3.v[1];
	 $A(B3);
	},[]);break;
       default:
	$M(r3,function(x3){
	 var y3=x3.v[1];
	 $M(y3,function(z3){
	  switch(z3.g){
	  case 1:
	   $A(w3);break;
	  default:
	   $R(3,[Z2,a3,z3,w3],"Bin");
	  }
	 },[a3,Z2,w3]);
	},[a3,Z2,w3]);
       }
      },[a3,Z2,r3]);
     },[a3,Z2,c3,r3],"sat");
     var C3=$t(function(){
      $M(r3,function(D3){
       var E3=D3.v[0];
       $A(E3);
      },[]);
     },[r3],"sat");
     $r([C3,v3]);break;
    }break;
   case 2:
    $r([$$DataziMaybe_Nothing,U2]);break;
   }break;
  }
 },[S2]);
},[],"at libraries/base/GHC/Event/IntMap.hs:191:1");
var $$GHCziEventziIntMap_zdwdelete=$f(2,function(O3,P3){
 $M(P3,function(Q3){
  switch(Q3.g){
  case 1:
   $r([$$DataziMaybe_Nothing,$$GHCziEventziIntMap_Nil]);break;
  case 2:
   var R3=Q3.v[0],S3=Q3.v[1];
   $M(O3,function(T3){
    var U3=T3.v[0];
    var V3=U3.equals(R3)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(V3.g){
    case 1:
     $r([$$DataziMaybe_Nothing,Q3]);break;
    case 2:
     var W3=$d(2,[S3],"sat");
     $r([W3,$$GHCziEventziIntMap_Nil]);break;
    }
   },[R3,Q3,S3]);break;
  case 3:
   var X3=Q3.v[0],Y3=Q3.v[1],Z3=Q3.v[2],a4=Q3.v[3];
   $M(O3,function(b4){
    var c4=b4.v[0];
    var H4=$hs_int2Wordzh(Y3);
    var N4=H4.subtract(goog.math.Long.fromBits(1,0));
    var M4=N4.xor(goog.math.Long.fromBits(4294967295,4294967295));
    var L4=M4.xor(H4);
    var K4=$hs_int2Wordzh(c4);
    var J4=K4.and(L4);
    var I4=$hs_word2Intzh(J4);
    var d4=I4.notEquals(X3)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(d4.g){
    case 1:
     var G4=$hs_int2Wordzh(c4);
     var F4=G4.and(H4);
     var e4=$hs_eqWordzh(F4,goog.math.Long.fromBits(0,0));
     switch(e4.g){
     case 1:
      var f4=$t(function(){
       $$GHCziEventziIntMap_deletezuzdszdwdelete.C([c4,a4],function(g4){
	var h4=g4[0],i4=g4[1];
	$R(1,[h4,i4],"(,)");
       },[]);
      },[c4,a4],"ds");
      var j4=$t(function(){
       $M(f4,function(k4){
	var l4=k4.v[1];
	$M(l4,function(m4){
	 switch(m4.g){
	 case 1:
	  $A(Z3);break;
	 default:
	  $M(Z3,function(n4){
	   switch(n4.g){
	   case 1:
	    $A(m4);break;
	   default:
	    $R(3,[X3,Y3,n4,m4],"Bin");
	   }
	  },[Y3,X3,m4]);
	 }
	},[Y3,X3,Z3]);
       },[Y3,X3,Z3]);
      },[Y3,X3,f4,Z3],"sat");
      var o4=$t(function(){
       $M(f4,function(p4){
	var q4=p4.v[0];
	$A(q4);
       },[]);
      },[f4],"sat");
      $r([o4,j4]);break;
     case 2:
      var r4=$t(function(){
       $$GHCziEventziIntMap_deletezuzdszdwdelete.C([c4,Z3],function(s4){
	var t4=s4[0],u4=s4[1];
	$R(1,[t4,u4],"(,)");
       },[]);
      },[c4,Z3],"ds");
      var v4=$t(function(){
       $M(a4,function(w4){
	switch(w4.g){
	case 1:
	 $M(r4,function(A4){
	  var B4=A4.v[1];
	  $A(B4);
	 },[]);break;
	default:
	 $M(r4,function(x4){
	  var y4=x4.v[1];
	  $M(y4,function(z4){
	   switch(z4.g){
	   case 1:
	    $A(w4);break;
	   default:
	    $R(3,[X3,Y3,z4,w4],"Bin");
	   }
	  },[Y3,X3,w4]);
	 },[Y3,X3,w4]);
	}
       },[Y3,X3,r4]);
      },[Y3,X3,a4,r4],"sat");
      var C4=$t(function(){
       $M(r4,function(D4){
	var E4=D4.v[0];
	$A(E4);
       },[]);
      },[r4],"sat");
      $r([C4,v4]);break;
     }break;
    case 2:
     $r([$$DataziMaybe_Nothing,Q3]);break;
    }
   },[Q3,Y3,X3,a4,Z3]);break;
  }
 },[O3]);
},[],"at libraries/base/GHC/Event/IntMap.hs:191:1");
var $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith=$f(3,function(T4,U4,V4){
 $M(V4,function(W4){
  switch(W4.g){
  case 1:
   $r([$$DataziMaybe_Nothing,$$GHCziEventziIntMap_Nil]);break;
  case 2:
   var X4=W4.v[0],Y4=W4.v[1];
   var Z4=U4.equals(X4)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Z4.g){
   case 1:
    $r([$$DataziMaybe_Nothing,W4]);break;
   case 2:
    T4.C([Y4],function(a5){
     switch(a5.g){
     case 1:
      var b5=$d(2,[Y4],"sat");
      $r([b5,$$GHCziEventziIntMap_Nil]);break;
     case 2:
      var c5=a5.v[0];
      var d5=$t(function(){
       $M(c5,function(e5){
	$R(2,[X4,e5],"Tip");
       },[X4]);
      },[X4,c5],"sat");
      var f5=$d(2,[Y4],"sat");
      $r([f5,d5]);break;
     }
    },[X4,Y4]);break;
   }break;
  case 3:
   var g5=W4.v[0],h5=W4.v[1],i5=W4.v[2],j5=W4.v[3];
   var O5=$hs_int2Wordzh(h5);
   var U5=O5.subtract(goog.math.Long.fromBits(1,0));
   var T5=U5.xor(goog.math.Long.fromBits(4294967295,4294967295));
   var S5=T5.xor(O5);
   var R5=$hs_int2Wordzh(U4);
   var Q5=R5.and(S5);
   var P5=$hs_word2Intzh(Q5);
   var k5=P5.notEquals(g5)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(k5.g){
   case 1:
    var N5=$hs_int2Wordzh(U4);
    var M5=N5.and(O5);
    var l5=$hs_eqWordzh(M5,goog.math.Long.fromBits(0,0));
    switch(l5.g){
    case 1:
     var m5=$t(function(){
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([T4,U4,j5],function(n5){
       var o5=n5[0],p5=n5[1];
       $R(1,[o5,p5],"(,)");
      },[]);
     },[U4,T4,j5],"ds");
     var q5=$t(function(){
      $M(m5,function(r5){
       var s5=r5.v[1];
       $M(s5,function(t5){
	switch(t5.g){
	case 1:
	 $A(i5);break;
	default:
	 $M(i5,function(u5){
	  switch(u5.g){
	  case 1:
	   $A(t5);break;
	  default:
	   $R(3,[g5,h5,u5,t5],"Bin");
	  }
	 },[h5,g5,t5]);
	}
       },[h5,g5,i5]);
      },[h5,g5,i5]);
     },[h5,g5,m5,i5],"sat");
     var v5=$t(function(){
      $M(m5,function(w5){
       var x5=w5.v[0];
       $A(x5);
      },[]);
     },[m5],"sat");
     $r([v5,q5]);break;
    case 2:
     var y5=$t(function(){
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([T4,U4,i5],function(z5){
       var A5=z5[0],B5=z5[1];
       $R(1,[A5,B5],"(,)");
      },[]);
     },[U4,T4,i5],"ds");
     var C5=$t(function(){
      $M(j5,function(D5){
       switch(D5.g){
       case 1:
	$M(y5,function(H5){
	 var I5=H5.v[1];
	 $A(I5);
	},[]);break;
       default:
	$M(y5,function(E5){
	 var F5=E5.v[1];
	 $M(F5,function(G5){
	  switch(G5.g){
	  case 1:
	   $A(D5);break;
	  default:
	   $R(3,[g5,h5,G5,D5],"Bin");
	  }
	 },[h5,g5,D5]);
	},[h5,g5,D5]);
       }
      },[h5,g5,y5]);
     },[h5,g5,j5,y5],"sat");
     var J5=$t(function(){
      $M(y5,function(K5){
       var L5=K5.v[0];
       $A(L5);
      },[]);
     },[y5],"sat");
     $r([J5,C5]);break;
    }break;
   case 2:
    $r([$$DataziMaybe_Nothing,W4]);break;
   }break;
  }
 },[U4,T4]);
},[],"at libraries/base/GHC/Event/IntMap.hs:204:1");
var $$GHCziEventziIntMap_insertWithzuzdszdwinsertWith=$f(4,function(h7,i7,j7,k7){
 $M(k7,function(l7){
  switch(l7.g){
  case 1:
   var m7=$t(function(){
    $M(j7,function(n7){
     $R(2,[i7,n7],"Tip");
    },[i7]);
   },[j7,i7],"sat");
   $r([$$DataziMaybe_Nothing,m7]);break;
  case 2:
   var o7=l7.v[0],p7=l7.v[1];
   var q7=i7.equals(o7)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(q7.g){
   case 1:
    var r7=$t(function(){
     var h8=$hs_int2Wordzh(o7);
     var g8=$hs_int2Wordzh(i7);
     var e8=g8.xor(h8);
     var f8=$hs_uncheckedShiftRLzh(e8,goog.math.Long.fromBits(1,0));
     var c8=e8.or(f8);
     var d8=$hs_uncheckedShiftRLzh(c8,goog.math.Long.fromBits(2,0));
     var a8=c8.or(d8);
     var b8=$hs_uncheckedShiftRLzh(a8,goog.math.Long.fromBits(4,0));
     var Y7=a8.or(b8);
     var Z7=$hs_uncheckedShiftRLzh(Y7,goog.math.Long.fromBits(8,0));
     var W7=Y7.or(Z7);
     var X7=$hs_uncheckedShiftRLzh(W7,goog.math.Long.fromBits(16,0));
     var U7=W7.or(X7);
     var V7=$hs_uncheckedShiftRLzh(U7,goog.math.Long.fromBits(32,0));
     var D7=U7.or(V7);
     var T7=$hs_uncheckedShiftRLzh(D7,goog.math.Long.fromBits(1,0));
     var S7=D7.xor(T7);
     var R7=$hs_int2Wordzh(i7);
     var Q7=R7.and(S7);
     var s7=$hs_eqWordzh(Q7,goog.math.Long.fromBits(0,0));
     switch(s7.g){
     case 1:
      $M(j7,function(u7){
       var E7=$hs_uncheckedShiftRLzh(D7,goog.math.Long.fromBits(1,0));
       var B7=D7.xor(E7);
       var t7=$d(2,[i7,u7],"sat");
       var w7=$hs_word2Intzh(B7);
       var C7=B7.subtract(goog.math.Long.fromBits(1,0));
       var A7=C7.xor(goog.math.Long.fromBits(4294967295,4294967295));
       var z7=A7.xor(B7);
       var y7=$hs_int2Wordzh(i7);
       var x7=y7.and(z7);
       var v7=$hs_word2Intzh(x7);
       $R(3,[v7,w7,l7,t7],"Bin");
      },[i7,D7,l7]);break;
     case 2:
      $M(j7,function(G7){
       var P7=$hs_uncheckedShiftRLzh(D7,goog.math.Long.fromBits(1,0));
       var N7=D7.xor(P7);
       var F7=$d(2,[i7,G7],"sat");
       var I7=$hs_word2Intzh(N7);
       var O7=N7.subtract(goog.math.Long.fromBits(1,0));
       var M7=O7.xor(goog.math.Long.fromBits(4294967295,4294967295));
       var L7=M7.xor(N7);
       var K7=$hs_int2Wordzh(i7);
       var J7=K7.and(L7);
       var H7=$hs_word2Intzh(J7);
       $R(3,[H7,I7,F7,l7],"Bin");
      },[i7,D7,l7]);break;
     }
    },[j7,i7,o7,l7],"sat");
    $r([$$DataziMaybe_Nothing,r7]);break;
   case 2:
    var i8=$t(function(){
     h7.C([j7,p7],function(j8){
      $R(2,[i7,j8],"Tip");
     },[i7]);
    },[j7,i7,p7,h7],"sat");
    var k8=$d(2,[p7],"sat");
    $r([k8,i8]);break;
   }break;
  case 3:
   var l8=l7.v[0],m8=l7.v[1],n8=l7.v[2],o8=l7.v[3];
   var P8=$hs_int2Wordzh(m8);
   var M9=P8.subtract(goog.math.Long.fromBits(1,0));
   var L9=M9.xor(goog.math.Long.fromBits(4294967295,4294967295));
   var K9=L9.xor(P8);
   var J9=$hs_int2Wordzh(i7);
   var I9=J9.and(K9);
   var H9=$hs_word2Intzh(I9);
   var p8=H9.notEquals(l8)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(p8.g){
   case 1:
    var O8=$hs_int2Wordzh(i7);
    var N8=O8.and(P8);
    var q8=$hs_eqWordzh(N8,goog.math.Long.fromBits(0,0));
    switch(q8.g){
    case 1:
     var r8=$t(function(){
      $$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([h7,i7,j7,o8],function(s8){
       var t8=s8[0],u8=s8[1];
       $R(1,[t8,u8],"(,)");
      },[]);
     },[j7,i7,h7,o8],"ds");
     var v8=$t(function(){
      $M(r8,function(w8){
       var x8=w8.v[1];
       $M(x8,function(y8){
	$R(3,[l8,m8,n8,y8],"Bin");
       },[m8,l8,n8]);
      },[m8,l8,n8]);
     },[m8,l8,r8,n8],"sat");
     var z8=$t(function(){
      $M(r8,function(A8){
       var B8=A8.v[0];
       $A(B8);
      },[]);
     },[r8],"sat");
     $r([z8,v8]);break;
    case 2:
     var C8=$t(function(){
      $$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([h7,i7,j7,n8],function(D8){
       var E8=D8[0],F8=D8[1];
       $R(1,[E8,F8],"(,)");
      },[]);
     },[j7,i7,h7,n8],"ds");
     var G8=$t(function(){
      $M(C8,function(H8){
       var I8=H8.v[1];
       $M(I8,function(J8){
	$R(3,[l8,m8,J8,o8],"Bin");
       },[m8,l8,o8]);
      },[m8,l8,o8]);
     },[m8,l8,o8,C8],"sat");
     var K8=$t(function(){
      $M(C8,function(L8){
       var M8=L8.v[0];
       $A(M8);
      },[]);
     },[C8],"sat");
     $r([K8,G8]);break;
    }break;
   case 2:
    var Q8=$t(function(){
     var G9=$hs_int2Wordzh(l8);
     var F9=$hs_int2Wordzh(i7);
     var D9=F9.xor(G9);
     var E9=$hs_uncheckedShiftRLzh(D9,goog.math.Long.fromBits(1,0));
     var B9=D9.or(E9);
     var C9=$hs_uncheckedShiftRLzh(B9,goog.math.Long.fromBits(2,0));
     var z9=B9.or(C9);
     var A9=$hs_uncheckedShiftRLzh(z9,goog.math.Long.fromBits(4,0));
     var x9=z9.or(A9);
     var y9=$hs_uncheckedShiftRLzh(x9,goog.math.Long.fromBits(8,0));
     var v9=x9.or(y9);
     var w9=$hs_uncheckedShiftRLzh(v9,goog.math.Long.fromBits(16,0));
     var t9=v9.or(w9);
     var u9=$hs_uncheckedShiftRLzh(t9,goog.math.Long.fromBits(32,0));
     var c9=t9.or(u9);
     var s9=$hs_uncheckedShiftRLzh(c9,goog.math.Long.fromBits(1,0));
     var r9=c9.xor(s9);
     var q9=$hs_int2Wordzh(i7);
     var p9=q9.and(r9);
     var R8=$hs_eqWordzh(p9,goog.math.Long.fromBits(0,0));
     switch(R8.g){
     case 1:
      $M(j7,function(T8){
       var d9=$hs_uncheckedShiftRLzh(c9,goog.math.Long.fromBits(1,0));
       var a9=c9.xor(d9);
       var S8=$d(2,[i7,T8],"sat");
       var V8=$hs_word2Intzh(a9);
       var b9=a9.subtract(goog.math.Long.fromBits(1,0));
       var Z8=b9.xor(goog.math.Long.fromBits(4294967295,4294967295));
       var Y8=Z8.xor(a9);
       var X8=$hs_int2Wordzh(i7);
       var W8=X8.and(Y8);
       var U8=$hs_word2Intzh(W8);
       $R(3,[U8,V8,l7,S8],"Bin");
      },[i7,l7,c9]);break;
     case 2:
      $M(j7,function(f9){
       var o9=$hs_uncheckedShiftRLzh(c9,goog.math.Long.fromBits(1,0));
       var m9=c9.xor(o9);
       var e9=$d(2,[i7,f9],"sat");
       var h9=$hs_word2Intzh(m9);
       var n9=m9.subtract(goog.math.Long.fromBits(1,0));
       var l9=n9.xor(goog.math.Long.fromBits(4294967295,4294967295));
       var k9=l9.xor(m9);
       var j9=$hs_int2Wordzh(i7);
       var i9=j9.and(k9);
       var g9=$hs_word2Intzh(i9);
       $R(3,[g9,h9,e9,l7],"Bin");
      },[i7,l7,c9]);break;
     }
    },[j7,i7,l7,l8],"sat");
    $r([$$DataziMaybe_Nothing,Q8]);break;
   }break;
  }
 },[j7,i7,h7]);
},[],"at libraries/base/GHC/Event/IntMap.hs:169:1");
var $$GHCziEventziIntMap_lookupzuzdslookupN=$f(2,function(Dc,Ec){
 $M(Ec,function(Fc){
  switch(Fc.g){
  case 1:
   $R(1,[],"Nothing");break;
  case 2:
   var Gc=Fc.v[0],Hc=Fc.v[1];
   var Jc=$hs_int2Wordzh(Gc);
   var Ic=$hs_eqWordzh(Dc,Jc);
   switch(Ic.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    $R(2,[Hc],"Just");break;
   }break;
  case 3:
   var Kc=Fc.v[1],Lc=Fc.v[2],Mc=Fc.v[3];
   var Pc=$hs_int2Wordzh(Kc);
   var Oc=Dc.and(Pc);
   var Nc=$hs_eqWordzh(Oc,goog.math.Long.fromBits(0,0));
   switch(Nc.g){
   case 1:
    $$GHCziEventziIntMap_lookupzuzdslookupN.J(Dc,Mc);break;
   case 2:
    $$GHCziEventziIntMap_lookupzuzdslookupN.J(Dc,Lc);break;
   }break;
  }
 },[Dc]);
},[],"at libraries/base/GHC/Event/IntMap.hs:128:1");
var $$GHCziEventziIntMap_Nil=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/Event/IntMap.hs:108:17");
var $$GHCziEventziInternal_evtWrite=$t(function(){
 $A($$GHCziEventziInternal$b);
},[],"at libraries/base/GHC/Event/Internal.hs:49:1");
var $$GHCziEventziInternal_evtRead=$t(function(){
 $A($$GHCziEventziInternal$c);
},[],"at libraries/base/GHC/Event/Internal.hs:44:1");
var $$GHCziEventziInternal_zdfShowTimeout1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Event.Internal'");
var $$GHCziEventziInternal_evtNothing=$t(function(){
 $A($$GHCziEventziInternal_zdfShowTimeout1);
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
var $$GHCziEventziManager_zdwlgo=$f(2,function(E3,F3){
 $M(F3,function(G3){
  switch(G3.g){
  case 1:
   $A(E3);break;
  case 2:
   var H3=G3.v[0],I3=G3.v[1];
   $M(H3,function(J3){
    var K3=J3.v[0];
    var O3=$hs_int2Wordzh(K3);
    var N3=$hs_int2Wordzh(E3);
    var M3=N3.or(O3);
    var L3=$hs_word2Intzh(M3);
    $$GHCziEventziManager_zdwlgo.J(L3,I3);
   },[E3,I3]);break;
  }
 },[E3]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_eventsOf=$f(1,function(P3){
 $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,P3],function(Q3){
  $$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),Q3],function(R3){
   $R(1,[R3],"I#");
  },[]);
 },[]);
},[],"at libraries/base/GHC/Event/Manager.hs:309:1");
var $$GHCziEventziManager_zdwa2=$f(8,function(c4,d4,e4,f4,g4,h4,i4,j4){
 var k4=$hs_getMaskingStatezh(j4);
 var l4=k4[0],m4=k4[1];
 var n4=$d(1,[h4],"a3");
 var o4=$f(1,function(p4){
  $M(p4,function(q4){
   var r4=q4.v[1];
   var s4=r4.equals(i4)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(s4.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[i4]);
 },[i4],"lvl5");
 var t4=$f(1,function(u4){
  $$GHCziList_filter.C([o4,u4],function(v4){
   switch(v4.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    $R(2,[v4],"Just");break;
   }
  },[]);
 },[o4],"lvl6");
 var w4=$f(2,function(x4,y4){
  var z4=$f(2,function(A4,B4){
   var C4=$f(3,function(D4,E4,F4){
    var G4=E4.notEquals(F4)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(G4.g){
    case 1:
     var H4=$d(1,[D4,$$GHCziTypes_False],"sat");
     $r([y4,H4]);break;
    case 2:
     $M(c4,function(I4){
      var J4=I4.v[0],K4=I4.v[2];
      var L4=$d(1,[F4],"sat");
      var M4=$d(1,[E4],"sat");
      K4.C([J4,n4,M4,L4,y4],function(N4){
       var O4=N4[0];
       var P4=$d(1,[D4,$$GHCziTypes_True],"sat");
       $r([O4,P4]);
      },[D4]);
     },[n4,y4,E4,F4,D4]);break;
    }
   },[n4,y4,c4],"$w$j");
   $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,A4],function(Q4){
    $$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),Q4],function(S4){
     var W4=$hs_int2Wordzh(h4);
     $$GHCziEventziIntMap_lookupzuzdslookupN.C([W4,B4],function(R4){
      switch(R4.g){
      case 1:
       C4.J(B4,S4,goog.math.Long.fromBits(0,0));break;
      case 2:
       var T4=R4.v[0];
       $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,T4],function(U4){
	$$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),U4],function(V4){
	 C4.J(B4,S4,V4);
	},[n4,y4,c4,C4,B4,S4]);
       },[n4,y4,c4,C4,B4,S4]);break;
      }
     },[n4,y4,c4,C4,B4,S4]);
    },[h4,n4,y4,c4,C4,B4]);
   },[h4,n4,y4,c4,C4,B4]);
  },[h4,n4,y4,c4],"$s$j1");
  var X4=$f(2,function(Y4,Z4){
   var a5=$f(3,function(b5,c5,d5){
    var e5=c5.notEquals(d5)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(e5.g){
    case 1:
     var f5=$d(1,[b5,$$GHCziTypes_False],"sat");
     $r([y4,f5]);break;
    case 2:
     $M(c4,function(g5){
      var h5=g5.v[0],i5=g5.v[2];
      var j5=$d(1,[d5],"sat");
      var k5=$d(1,[c5],"sat");
      i5.C([h5,n4,k5,j5,y4],function(l5){
       var m5=l5[0];
       var n5=$d(1,[b5,$$GHCziTypes_True],"sat");
       $r([m5,n5]);
      },[b5]);
     },[n4,y4,c5,d5,b5]);break;
    }
   },[n4,y4,c4],"$w$j");
   $M(Y4,function(o5){
    switch(o5.g){
    case 1:
     $M(x4,function(p5){
      a5.J(p5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
     },[n4,y4,c4,a5]);break;
    case 2:
     var q5=o5.v[0];
     $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,q5],function(r5){
      $$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),r5],function(t5){
       var x5=$hs_int2Wordzh(h4);
       $$GHCziEventziIntMap_lookupzuzdslookupN.C([x5,Z4],function(s5){
	switch(s5.g){
	case 1:
	 a5.J(Z4,t5,goog.math.Long.fromBits(0,0));break;
	case 2:
	 var u5=s5.v[0];
	 $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,u5],function(v5){
	  $$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),v5],function(w5){
	   a5.J(Z4,t5,w5);
	  },[n4,y4,c4,a5,Z4,t5]);
	 },[n4,y4,c4,a5,Z4,t5]);break;
	}
       },[n4,y4,c4,a5,Z4,t5]);
      },[h4,n4,y4,c4,a5,Z4]);
     },[h4,n4,y4,c4,a5,Z4]);break;
    }
   },[h4,n4,x4,y4,c4,a5,Z4]);
  },[h4,n4,x4,y4,c4],"$j");
  $M(x4,function(y5){
   switch(y5.g){
   case 1:
    var z5=$d(1,[$$GHCziEventziIntMap_Nil,$$GHCziTypes_False],"sat");
    $r([y4,z5]);break;
   case 2:
    var A5=y5.v[0],B5=y5.v[1];
    var C5=h4.equals(A5)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(C5.g){
    case 1:
     var D5=$d(1,[y5,$$GHCziTypes_False],"sat");
     $r([y4,D5]);break;
    case 2:
     $$GHCziList_filter.C([o4,B5],function(E5){
      switch(E5.g){
      case 1:
       z4.J(B5,$$GHCziEventziIntMap_Nil);break;
      case 2:
       var F5=$d(2,[A5,E5],"sat");
       z4.J(B5,F5);break;
      }
     },[h4,n4,y4,c4,z4,A5,B5]);break;
    }break;
   case 3:
    var G5=y5.v[0],H5=y5.v[1],I5=y5.v[2],J5=y5.v[3];
    var a6=$hs_int2Wordzh(H5);
    var h6=a6.subtract(goog.math.Long.fromBits(1,0));
    var g6=h6.xor(goog.math.Long.fromBits(4294967295,4294967295));
    var f6=g6.xor(a6);
    var e6=$hs_int2Wordzh(h4);
    var d6=e6.and(f6);
    var c6=$hs_word2Intzh(d6);
    var K5=c6.notEquals(G5)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(K5.g){
    case 1:
     var Z5=$hs_int2Wordzh(h4);
     var Y5=Z5.and(a6);
     var L5=$hs_eqWordzh(Y5,goog.math.Long.fromBits(0,0));
     switch(L5.g){
     case 1:
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([t4,h4,J5],function(M5){
       var N5=M5[0],O5=M5[1];
       var P5=$t(function(){
	$M(O5,function(Q5){
	 switch(Q5.g){
	 case 1:
	  $A(I5);break;
	 default:
	  $M(I5,function(R5){
	   switch(R5.g){
	   case 1:
	    $A(Q5);break;
	   default:
	    $R(3,[G5,H5,R5,Q5],"Bin");
	   }
	  },[H5,G5,Q5]);
	 }
	},[H5,G5,I5]);
       },[H5,G5,O5,I5],"sat");
       X4.J(N5,P5);
      },[h4,n4,x4,y4,c4,X4,H5,G5,I5]);break;
     case 2:
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([t4,h4,I5],function(S5){
       var T5=S5[0],U5=S5[1];
       var V5=$t(function(){
	$M(J5,function(W5){
	 switch(W5.g){
	 case 1:
	  $A(U5);break;
	 default:
	  $M(U5,function(X5){
	   switch(X5.g){
	   case 1:
	    $A(W5);break;
	   default:
	    $R(3,[G5,H5,X5,W5],"Bin");
	   }
	  },[H5,G5,W5]);
	 }
	},[H5,G5,U5]);
       },[H5,G5,J5,U5],"sat");
       X4.J(T5,V5);
      },[h4,n4,x4,y4,c4,X4,H5,G5,J5]);break;
     }break;
    case 2:
     var b6=$d(1,[y5,$$GHCziTypes_False],"sat");
     $r([y4,b6]);break;
    }break;
   }
  },[h4,n4,o4,t4,x4,y4,c4,z4,X4]);
 },[h4,n4,o4,t4,c4],"a4");
 $M(m4,function(i6){
  switch(i6.toString()){
  case "0":
   var v6=$f(1,function(w6){
    $b($hs_takeMVarzh,[d4,w6],function(x6){
     var y6=x6[0],z6=x6[1];
     var A6=$f(2,function(l1,I){
      $$GHCziEventziManager$a.J(z6,d4,l1,I);
     },[d4,z6],"sat");
     var B6=$f(1,function(I){
      w4.J(z6,I);
     },[w4,z6],"sat");
     var C6=$f(1,function(I){
      $k($hs_unmaskAsyncExceptionszh,[B6,I]);
     },[B6],"sat");
     $b($hs_catchzh,[C6,A6,y6],function(D6){
      var E6=D6[0],F6=D6[1];
      $M(F6,function(G6){
       var H6=G6.v[0],I6=G6.v[1];
       $b($hs_putMVarzh,[d4,H6,E6],function(J6){
	$r([J6,I6]);
       },[I6]);
      },[d4,E6]);
     },[d4]);
    },[w4,d4]);
   },[w4,d4],"sat");
   $k($hs_maskAsyncExceptionszh,[v6,l4]);break;
  default:
   $b($hs_takeMVarzh,[d4,l4],function(j6){
    var k6=j6[0],l6=j6[1];
    var m6=$f(2,function(l1,I){
     $$GHCziEventziManager$a.J(l6,d4,l1,I);
    },[d4,l6],"sat");
    var n6=$f(1,function(I){
     w4.J(l6,I);
    },[w4,l6],"sat");
    $b($hs_catchzh,[n6,m6,k6],function(o6){
     var p6=o6[0],q6=o6[1];
     $M(q6,function(r6){
      var s6=r6.v[0],t6=r6.v[1];
      $b($hs_putMVarzh,[d4,s6,p6],function(u6){
       $r([u6,t6]);
      },[t6]);
     },[d4,p6]);
    },[d4]);
   },[w4,d4]);
  }
 },[w4,d4,l4]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd3=$f(2,function(r7,s7){
 $M(r7,function(t7){
  switch(t7.g){
  case 1:
   $r([s7,$$GHCziTuple_Z0T]);break;
  case 2:
   var u7=t7.v[0],v7=t7.v[1];
   $M(u7,function(w7){
    var x7=w7.v[0],y7=w7.v[1],z7=w7.v[2],A7=w7.v[3];
    var H7=$hs_int2Wordzh(z7);
    var G7=H7.or(goog.math.Long.fromBits(4,0));
    var C7=$hs_word2Intzh(G7);
    var B7=$d(1,[C7],"sat");
    var D7=$d(1,[x7,y7],"sat");
    A7.C([D7,B7,s7],function(E7){
     var F7=E7[0];
     $$GHCziEventziManager_closeFd3.J(v7,F7);
    },[v7]);
   },[s7,v7]);break;
  }
 },[s7]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd4=$f(4,function(I7,J7,K7,L7){
 var M7=$f(1,function(N7){
  $b($hs_putMVarzh,[J7,I7,N7],function(O7){
   $r([O7,$$GHCziTuple_Z0T]);
  },[]);
 },[J7,I7],"sat");
 $$ControlziExceptionziBase_finally2.J(M7,K7,L7);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd2=$f(2,function(P7,Q7){
 $M(P7,function(R7){
  switch(R7.g){
  case 1:
   $r([Q7,$$GHCziTuple_Z0T]);break;
  case 2:
   var S7=R7.v[0],T7=R7.v[1];
   $M(S7,function(U7){
    var V7=U7.v[0],W7=U7.v[1],X7=U7.v[2],Y7=U7.v[3];
    var f8=$hs_int2Wordzh(X7);
    var e8=f8.or(goog.math.Long.fromBits(4,0));
    var a8=$hs_word2Intzh(e8);
    var Z7=$d(1,[a8],"sat");
    var b8=$d(1,[V7,W7],"sat");
    Y7.C([b8,Z7,Q7],function(c8){
     var d8=c8[0];
     $$GHCziEventziManager_closeFd2.J(T7,d8);
    },[T7]);
   },[Q7,T7]);break;
  }
 },[Q7]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd1=$f(4,function(g8,h8,i8,j8){
 var k8=$hs_getMaskingStatezh(j8);
 var l8=k8[0],m8=k8[1];
 var n8=$t(function(){
  h8.J(i8);
 },[i8,h8],"lvl5");
 var o8=$t(function(){
  $M(i8,function(p8){
   var q8=p8.v[0];
   $R(1,[q8],"I#");
  },[]);
 },[i8],"lvl6");
 var r8=$t(function(){
  $M(g8,function(s8){
   var t8=s8.v[5],u8=s8.v[6],v8=s8.v[7];
   $R(1,[t8,u8,v8],"W");
  },[]);
 },[g8],"lvl7");
 var w8=$f(2,function(x8,y8){
  n8.C([y8],function(z8){
   var A8=z8[0];
   $$GHCziEventziIntMap_zdwdelete.C([o8,x8],function(B8){
    var C8=B8[0],D8=B8[1];
    $M(C8,function(E8){
     switch(E8.g){
     case 1:
      var F8=$d(1,[x8,$$GHCziTypes_ZMZN],"sat");
      $r([A8,F8]);break;
     case 2:
      var G8=E8.v[0];
      $M(D8,function(H8){
       $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,G8],function(I8){
	$$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),I8],function(J8){
	 switch(J8.toString()){
	 case "0":
	  var N8=$d(1,[H8,G8],"sat");
	  $r([A8,N8]);break;
	 default:
	  $$GHCziEventziControl_sendWakeup1.C([r8,A8],function(K8){
	   var L8=K8[0];
	   var M8=$d(1,[H8,G8],"sat");
	   $r([L8,M8]);
	  },[G8,H8]);
	 }
	},[r8,A8,G8,H8]);
       },[r8,A8,G8,H8]);
      },[r8,A8,G8]);break;
     }
    },[r8,x8,A8,D8]);
   },[r8,x8,A8]);
  },[o8,r8,x8]);
 },[n8,o8,r8],"a3");
 $M(m8,function(O8){
  switch(O8.toString()){
  case "0":
   var d9=$f(1,function(e9){
    $M(g8,function(f9){
     var g9=f9.v[1];
     $b($hs_takeMVarzh,[g9,e9],function(h9){
      var i9=h9[0],j9=h9[1];
      var k9=$f(2,function(l1,I){
       $$GHCziEventziManager_closeFd4.J(j9,g9,l1,I);
      },[g9,j9],"sat");
      var l9=$f(1,function(I){
       w8.J(j9,I);
      },[w8,j9],"sat");
      var m9=$f(1,function(I){
       $k($hs_unmaskAsyncExceptionszh,[l9,I]);
      },[l9],"sat");
      $b($hs_catchzh,[m9,k9,i9],function(n9){
       var o9=n9[0],p9=n9[1];
       $M(p9,function(q9){
	var r9=q9.v[0],s9=q9.v[1];
	$b($hs_putMVarzh,[g9,r9,o9],function(t9){
	 $r([t9,s9]);
	},[s9]);
       },[g9,o9]);
      },[g9]);
     },[w8,g9]);
    },[w8,e9]);
   },[g8,w8],"sat");
   $b($hs_maskAsyncExceptionszh,[d9,l8],function(u9){
    var v9=u9[0],w9=u9[1];
    $$GHCziEventziManager_closeFd2.J(w9,v9);
   },[]);break;
  default:
   $M(g8,function(P8){
    var Q8=P8.v[1];
    $b($hs_takeMVarzh,[Q8,l8],function(R8){
     var S8=R8[0],T8=R8[1];
     var U8=$f(2,function(l1,I){
      $$GHCziEventziManager_closeFd4.J(T8,Q8,l1,I);
     },[Q8,T8],"sat");
     var V8=$f(1,function(I){
      w8.J(T8,I);
     },[w8,T8],"sat");
     $b($hs_catchzh,[V8,U8,S8],function(W8){
      var X8=W8[0],Y8=W8[1];
      $M(Y8,function(Z8){
       var a9=Z8.v[0],b9=Z8.v[1];
       $b($hs_putMVarzh,[Q8,a9,X8],function(c9){
	$$GHCziEventziManager_closeFd3.J(b9,c9);
       },[b9]);
      },[Q8,X8]);
     },[Q8]);
    },[w8,Q8]);
   },[w8,l8]);
  }
 },[g8,w8,l8]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager$a=$F(4,function(SI,TI,UI,VI){
 var WI=$f(1,function(XI){
  $b($hs_putMVarzh,[TI,SI,XI],function(YI){
   $r([YI,$$GHCziTuple_Z0T]);
  },[]);
 },[TI,SI],"sat");
 $$ControlziExceptionziBase_finally2.J(WI,UI,VI);
},"lvl");
var $$GHCziEventziThread_eventManager=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziEventziThread$g);
},[],"at libraries/base/GHC/Event/Thread.hs:108:1");
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
	  var I1=$hs_byteArrayContentszh(s1);
	  var J1=$hs_writeWord64OffAddrzh(I1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),r1);
	  var H1=$hs_narrow32Intzh(A);
	  var $ff=write(H1,I1,goog.math.Long.fromBits(8,0));
	  var t1=[J1,$ff];
	  var u1=t1[0],v1=t1[1];
	  $M(v1,function(w1){
	   switch(w1.toString()){
	   case "-1":
	    var $ff=__hscore_get_errno();
	    var y1=[u1,$ff];
	    var z1=y1[0],A1=y1[1];
	    var C1=$hs_narrow32Intzh(A1);
	    var B1=$d(1,[C1],"sat");
	    $$ForeignziCziError_errnoToIOError.C([$$GHCziEventziControl_sendWakeupzuloc,B1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(D1){
	     $$GHCziIOziException_ioError.C([D1,z1],function(E1){
	      var F1=E1[0];
	      var G1=$hs_touchzh(s1,F1);
	      Y.J(G1);
	     },[z,m,B,w,x,y,W,Y,s1]);
	    },[z,m,B,w,x,y,W,Y,s1,z1]);break;
	   default:
	    var x1=$hs_touchzh(s1,u1);
	    Y.J(x1);
	   }
	  },[z,m,B,w,x,y,W,Y,s1,u1]);break;
	 }
	},[z,m,B,w,x,y,W,Y,V,A]);
       },[z,m,B,w,x,y,A],"$w$j");
       var K1=$f(4,function(L1,M1,N1,O1){
	$$GHCziEventziManager_zdwa2.C([B,w,x,y,z,L1,M1,O1],function(P1){
	 var Q1=P1[0];
	 $b($hs_putMVarzh,[m,N1,Q1],function(R1){
	  $r([R1,$$GHCziTuple_Z0T]);
	 },[]);
	},[m,N1]);
       },[z,m,B,w,x,y],"$wa");
       var S1=$f(3,function(T1,U1,V1){
	$M(T1,function(W1){
	 var X1=W1.v[0],Y1=W1.v[1];
	 K1.J(X1,Y1,U1,V1);
	},[K1,U1,V1]);
       },[K1],"a9");
       var Z1=$f(2,function(a2,b2){
	$b($hs_takeMVarzh,[w,b2],function(c2){
	 var d2=c2[0],e2=c2[1];
	 var f2=$f(2,function(b1,b){
	  $$GHCziEventziThread$k.J(e2,w,b1,b);
	 },[w,e2],"sat");
	 var g2=$t(function(){
	  var h2=$t(function(){
	   $M(d,function(i2){
	    var j2=i2.v[0];
	    $M(Q,function(k2){
	     var l2=k2.v[0];
	     $M(c,function(m2){
	      var n2=m2.v[0];
	      var o2=$f(1,function(p2){
	       var q2=$T(function(){
		$M(t2,function(r2){
		 var s2=r2.v[0];
		 $A(s2);
		},[]);
	       },"newMap"),t2=$t(function(){
		var u2=$d(1,[j2,l2,n2,S1],"sat");
		var v2=$d(2,[u2,$$GHCziTypes_ZMZN],"sat");
		$$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([$$GHCziBase_zpzp,j2,v2,e2],function(w2){
		 var x2=w2[0],y2=w2[1];
		 $M(x2,function(z2){
		  switch(z2.g){
		  case 1:
		   $M(y2,function(A2){
		    $R(1,[A2,$$GHCziEventziInternal_evtNothing,m2],"(,,)");
		   },[m2]);break;
		  case 2:
		   var B2=z2.v[0];
		   $M(y2,function(C2){
		    var D2=$t(function(){
		     var G2=$hs_int2Wordzh(j2);
		     $$GHCziEventziIntMap_lookupzuzdslookupN.C([G2,q2],function(E2){
		      switch(E2.g){
		      case 1:
		       $A($$GHCziEventziInternal_evtNothing);break;
		      case 2:
		       var F2=E2.v[0];
		       $$GHCziEventziManager_eventsOf.J(F2);break;
		      }
		     },[]);
		    },[q2,j2],"sat");
		    var H2=$t(function(){
		     $$GHCziEventziManager_eventsOf.J(B2);
		    },[B2],"sat");
		    $R(1,[C2,H2,D2],"(,,)");
		   },[q2,j2,B2]);break;
		  }
		 },[q2,j2,y2,m2]);
		},[q2,j2,m2]);
	       },[S1,q2,j2,l2,n2,e2,m2],"ds1");
	       $S(q2,[t2]);
	       $M(t2,function(I2){
		var J2=I2.v[1],K2=I2.v[2];
		$M(J2,function(L2){
		 var M2=L2.v[0];
		 $M(K2,function(N2){
		  var O2=N2.v[0];
		  var P2=M2.notEquals(O2)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(P2.g){
		  case 1:
		   var Q2=$d(1,[j2,l2],"sat");
		   var R2=$d(1,[Q2,$$GHCziTypes_False],"sat");
		   var S2=$d(1,[q2,R2],"sat");
		   $r([p2,S2]);break;
		  case 2:
		   D.C([C,i2,L2,N2,p2],function(T2){
		    var U2=T2[0];
		    var V2=$d(1,[j2,l2],"sat");
		    var W2=$d(1,[V2,$$GHCziTypes_True],"sat");
		    var X2=$d(1,[q2,W2],"sat");
		    $r([U2,X2]);
		   },[q2,j2,l2]);break;
		  }
		 },[q2,j2,l2,M2,p2,C,i2,L2,D]);
		},[q2,j2,l2,K2,p2,C,i2,D]);
	       },[q2,j2,l2,p2,C,i2,D]);
	      },[S1,j2,l2,n2,e2,m2,C,i2,D],"sat");
	      $A(o2);
	     },[S1,j2,l2,e2,C,i2,D]);
	    },[S1,c,j2,e2,C,i2,D]);
	   },[S1,Q,c,e2,C,D]);
	  },[S1,d,Q,c,e2,C,D],"sat");
	  a2.J(h2);
	 },[S1,d,Q,c,e2,C,D,a2],"sat");
	 $b($hs_catchzh,[g2,f2,d2],function(Y2){
	  var Z2=Y2[0],a3=Y2[1];
	  $M(a3,function(b3){
	   var c3=b3.v[0],d3=b3.v[1];
	   $b($hs_putMVarzh,[w,c3,Z2],function(e3){
	    $r([e3,d3]);
	   },[d3]);
	  },[w,Z2]);
	 },[w]);
	},[w,S1,d,Q,c,C,D,a2]);
       },[w,S1,d,Q,c,C,D],"a10");
       $M(T,function(f3){
	switch(f3.toString()){
	case "0":
	 var m3=$f(2,function(b1,b){
	  $k($hs_unmaskAsyncExceptionszh,[b1,b]);
	 },[],"sat");
	 var n3=$f(1,function(b){
	  Z1.J(m3,b);
	 },[Z1,m3],"sat");
	 $b($hs_maskAsyncExceptionszh,[n3,S],function(o3){
	  var p3=o3[0],q3=o3[1];
	  $M(q3,function(r3){
	   var s3=r3.v[0],t3=r3.v[1];
	   U.J(p3,s3,t3);
	  },[z,m,B,w,x,y,A,U,p3]);
	 },[z,m,B,w,x,y,A,U]);break;
	default:
	 Z1.C([$$GHCziBase_id,S],function(g3){
	  var h3=g3[0],i3=g3[1];
	  $M(i3,function(j3){
	   var k3=j3.v[0],l3=j3.v[1];
	   U.J(h3,k3,l3);
	  },[z,m,B,w,x,y,A,U,h3]);
	 },[z,m,B,w,x,y,A,U]);
	}
       },[z,m,B,w,x,y,A,U,Z1,S]);
      },[q,z,m,w,x,y,A,d,c]);
     },[q,m,d,c]);break;
    }
   },[q,m,d,c]);
  },[l,m,d,c]);
 },[d,c],"a6");
 $M(h,function(u3){
  switch(u3.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[i,g]);break;
  default:
   i.J(g);
  }
 },[i,g]);
},[],"in `base:GHC.Event.Thread'");
var $$GHCziEventziThread_closeFdWith2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at libraries/base/GHC/Event/Thread.hs:84:3-10");
},[],"in `base:GHC.Event.Thread'");
var $$GHCziEventziThread$b=$F(2,function(j6,k6){
 $M(j6,function(l6){
  var m6=l6.v[0];
  var $ff=getOrSetSystemEventThreadEventManagerStore(m6);
  var n6=[k6,$ff];
  var o6=n6[0],p6=n6[1];
  var q6=$d(1,[p6],"sat");
  $r([o6,q6]);
 },[k6]);
},"a");
var $$GHCziEventziThread$c=$F(2,function(b1,b){
 $$GHCziEventziThread$b.J(b1,b);
},"at libraries/base/GHC/Event/Thread.hs:105:5");
var $$GHCziEventziThread$g=$F(1,function(B6){
 var G6=$hs_noDuplicatezh(B6);
 var C6=$hs_newMutVarzh($$DataziMaybe_Nothing,G6);
 var D6=C6[0],E6=C6[1];
 var F6=$d(1,[E6],"sat");
 $$GHCziConcziSync_sharedCAF1.J(F6,$$GHCziEventziThread$c,D6);
},"lvl");
var $$GHCziEventziThread$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at libraries/base/GHC/Event/Thread.hs:90:3-10");
},"a2");
var $$GHCziEventziThread$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("threadWait");
},"lvl1");
var $$GHCziEventziThread$j=$T(function(){
 $$ForeignziCziError_errnoToIOError.J($$GHCziEventziThread$i,$$ForeignziCziError_eBADF1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing);
},"a3");
var $$GHCziEventziThread$k=$F(4,function(H6,I6,J6,K6){
 var L6=$f(1,function(M6){
  $b($hs_putMVarzh,[I6,H6,M6],function(N6){
   $r([N6,$$GHCziTuple_Z0T]);
  },[]);
 },[I6,H6],"sat");
 $$ControlziExceptionziBase_finally2.J(L6,J6,K6);
},"lvl2");
var $$GHCziEventziThread$l=$F(8,function(O6,P6,Q6,R6,S6,T6,U6,V6){
 var W6=$f(1,function(X6){
  $M(T6,function(Y6){
   var Z6=Y6.v[0],a7=Y6.v[1];
   $$GHCziEventziManager_zdwa2.J(O6,P6,Q6,R6,S6,Z6,a7,X6);
  },[O6,P6,Q6,R6,S6,X6]);
 },[T6,O6,P6,Q6,R6,S6],"sat");
 $$GHCziIO_finally2.J(W6,U6,V6);
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
var $$GHCziException_zdfShowErrorCallzuzdcshowsPrec=$f(3,function(n1,o1,p1){
 $M(o1,function(q1){
  var r1=q1.v[0];
  $$GHCziBase_zpzp.J(r1,p1);
 },[p1]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowErrorCallzuzdcshowList=$f(2,function(s1,t1){
 $M(s1,function(u1){
  switch(u1.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",t1);break;
  case 2:
   var v1=u1.v[0],w1=u1.v[1];
   var x1=$t(function(){
    $M(v1,function(y1){
     var z1=y1.v[0];
     var A1=$t(function(){
      var B1=$d(2,[$$GHCziShow_showListzuzu2,t1],"lvl19");
      var C1=$f(1,function(D1){
       $M(D1,function(E1){
	switch(E1.g){
	case 1:
	 $A(B1);break;
	case 2:
	 var F1=E1.v[0],G1=E1.v[1];
	 var H1=$t(function(){
	  $M(F1,function(I1){
	   var J1=I1.v[0];
	   var K1=$t(function(){
	    C1.J(G1);
	   },[G1,C1],"sat");
	   $$GHCziBase_zpzp.J(J1,K1);
	  },[G1,C1]);
	 },[F1,G1,C1],"sat");
	 $R(2,[$$GHCziShow_showListzuzu1,H1],":");break;
	}
       },[B1,C1]);
      },[B1],"showl");
      C1.J(w1);
     },[t1,w1],"sat");
     $$GHCziBase_zpzp.J(z1,A1);
    },[t1,w1]);
   },[t1,v1,w1],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,x1],":");break;
  }
 },[t1]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowErrorCallzuzdcshow=$f(1,function(L1){
 $M(L1,function(M1){
  var N1=M1.v[0];
  $A(N1);
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
var $$GHCziException_zdfExceptionErrorCallzuzdctypeOf=$f(1,function(M3){
 $A($$GHCziException_zdfExceptionErrorCall1);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionErrorCallzuzdcfromException=$f(1,function(N3){
 $M(N3,function(O3){
  var P3=O3.v[0],Q3=O3.v[1];
  var R3=$t(function(){
   $$GHCziException_zdp1Exception.J(P3);
  },[P3],"sat");
  $$DataziTypeable_cast.J(R3,$$GHCziException_zdfExceptionErrorCallzuzdctypeOf,Q3);
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
var $$GHCziForeign_zdwa=$f(3,function(z2,A2,B2){
 var C2=$f(2,function(D2,E2){
  var F2=$hs_readInt8OffAddrzh(A2,D2,E2);
  var G2=F2[0],H2=F2[1];
  $M(H2,function(I2){
   switch(I2.toString()){
   case "0":
    var K2=$d(1,[D2],"sat");
    $r([G2,K2]);break;
   default:
    var J2=D2.add(goog.math.Long.fromBits(1,0));
    C2.J(J2,G2);
   }
  },[D2,C2,G2]);
 },[A2],"$sa");
 C2.C([goog.math.Long.fromBits(0,0),B2],function(L2){
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
       var k3=$d(1,[g3],"a3");
       var l3=$d(2,[j3,k3],"a4");
       var n3=$hs_byteArrayContentszh(j3);
       var m3=$d(1,[n3,l3,$$GHCziIOziBuffer_WriteBuffer,c3,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"to");
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
	       p3.C([S3,m3,T3],function(U3){
		var V3=U3[0],W3=U3[1];
		$M(W3,function(X3){
		 var Y3=X3.v[0],Z3=X3.v[1],a4=X3.v[2];
		 $M(Z3,function(b4){
		  var c4=b4.v[4],d4=b4.v[5];
		  var e4=c4.equals(d4)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(e4.g){
		  case 1:
		   var g4=R3.add(goog.math.Long.fromBits(1,0));
		   var f4=$f(6,function(h4,i4,j4,k4,l4,m4){
		    var n4=$d(1,[i4],"sat");
		    var w4=l4.subtract(k4);
		    $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,w4,n4,m4],function(o4){
		     var p4=o4[0],q4=o4[1];
		     var v4=$hs_touchzh(j4,p4);
		     Q3.C([g4,h4,v4],function(r4){
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
		 },[R3,Q3,Y3,a4,V3,q3]);
		},[R3,Q3,V3,q3]);
	       },[R3,Q3,q3]);
	      },[m3,p3,q3],"$sa1");
	      Q3.C([goog.math.Long.fromBits(1,0),G3,d5],function(Z4){
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
   },[A2,N2],"a2");
   $M(S2,function(J5){
    switch(J5.toString()){
    case "0":
     var W5=$f(1,function(X5){
      P2.C([X5],function(Y5){
       var Z5=Y5[0],a6=Y5[1];
       var b6=$f(2,function(c,d){
	$$GHCziForeign$a.J(a6,c,d);
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
       $$GHCziForeign$a.J(M5,c,d);
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
var $$GHCziForeign_withCStringLen2=$f(3,function(q6,r6,s6){
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
   var F6=$f(3,function(G6,H6,I6){
    $M(H6,function(J6){
     var K6=J6.v[0];
     var L6=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,I6);
     var M6=L6[0],N6=L6[1];
     $M(G6,function(O6){
      var P6=O6.v[0];
      var Q6=$d(1,[N6],"a1");
      var R6=$d(1,[Q6],"a2");
      var S6=$d(1,[K6,R6,$$GHCziIOziBuffer_ReadBuffer,P6,goog.math.Long.fromBits(0,0),P6],"from");
      var T6=$f(3,function(U6,V6,W6){
       var X6=$hs_newPinnedByteArrayzh(V6,W6);
       var Y6=X6[0],Z6=X6[1];
       var a7=$hs_unsafeFreezzeByteArrayzh(Z6,Y6);
       var b7=a7[0],c7=a7[1];
       var d7=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,b7);
       var e7=d7[0],f7=d7[1];
       $M(E6,function(g7){
	var h7=g7.v[0],i7=g7.v[1];
	var j7=$d(1,[f7],"sat");
	var k7=$d(1,[j7],"sat");
	var m7=$hs_byteArrayContentszh(c7);
	var l7=$d(1,[m7,k7,$$GHCziIOziBuffer_WriteBuffer,V6,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
	h7.C([S6,l7,e7],function(n7){
	 var o7=n7[0],p7=n7[1];
	 $M(p7,function(q7){
	  var r7=q7.v[0],s7=q7.v[1],t7=q7.v[2];
	  $M(s7,function(u7){
	   var v7=u7.v[4],w7=u7.v[5];
	   var x7=v7.equals(w7)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(x7.g){
	   case 1:
	    $M(r7,function(y7){
	     switch(y7.g){
	     case 2:
	      var H8=V6.multiply(goog.math.Long.fromBits(2,0));
	      var G8=U6.add(goog.math.Long.fromBits(1,0));
	      T6.C([G8,H8,o7],function(C8){
	       var D8=C8[0],E8=C8[1];
	       var F8=$hs_touchzh(c7,D8);
	       $r([F8,E8]);
	      },[c7]);break;
	     default:
	      i7.C([u7,t7,o7],function(z7){
	       var A7=z7[0],B7=z7[1];
	       $M(B7,function(C7){
		var D7=C7.v[0],E7=C7.v[1];
		var F7=$f(4,function(G7,H7,I7,J7){
		 h7.C([H7,I7,J7],function(K7){
		  var L7=K7[0],M7=K7[1];
		  $M(M7,function(N7){
		   var O7=N7.v[0],P7=N7.v[1],Q7=N7.v[2];
		   $M(P7,function(R7){
		    var S7=R7.v[4],T7=R7.v[5];
		    var U7=S7.equals(T7)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(U7.g){
		    case 1:
		     $M(O7,function(V7){
		      switch(V7.g){
		      case 2:
		       $r([L7,$$DataziMaybe_Nothing]);break;
		      default:
		       i7.C([R7,Q7,L7],function(W7){
			var X7=W7[0],Y7=W7[1];
			$M(Y7,function(Z7){
			 var a8=Z7.v[0],b8=Z7.v[1];
			 var c8=G7.add(goog.math.Long.fromBits(1,0));
			 F7.J(c8,a8,b8,X7);
			},[G7,F7,X7]);
		       },[G7,F7]);
		      }
		     },[i7,R7,Q7,L7,G7,F7]);break;
		    case 2:
		     $M(Q7,function(d8){
		      var e8=d8.v[0],f8=d8.v[1],g8=d8.v[3],h8=d8.v[5];
		      var i8=g8.subtract(h8);
		      switch(i8.toString()){
		      case "0":
		       $r([L7,$$DataziMaybe_Nothing]);break;
		      default:
		       var p8=$hs_writeWord8OffAddrzh(e8,h8,goog.math.Long.fromBits(0,0),L7);
		       var j8=$d(1,[e8],"sat");
		       w6.C([j8,p8],function(k8){
			var l8=k8[0],m8=k8[1];
			var o8=$hs_touchzh(f8,l8);
			var n8=$d(2,[m8],"sat");
			$r([o8,n8]);
		       },[f8]);
		      }
		     },[L7,w6]);break;
		    }
		   },[i7,O7,Q7,L7,G7,F7,w6]);
		  },[i7,L7,G7,F7,w6]);
		 },[i7,G7,F7,w6]);
		},[h7,i7,w6],"$s$wa1");
		F7.C([goog.math.Long.fromBits(1,0),D7,E7,A7],function(q8){
		 var r8=q8[0],s8=q8[1];
		 $M(s8,function(t8){
		  switch(t8.g){
		  case 1:
		   var z8=V6.multiply(goog.math.Long.fromBits(2,0));
		   var y8=U6.add(goog.math.Long.fromBits(1,0));
		   T6.C([y8,z8,r8],function(u8){
		    var v8=u8[0],w8=u8[1];
		    var x8=$hs_touchzh(c7,v8);
		    $r([x8,w8]);
		   },[c7]);break;
		  case 2:
		   var A8=t8.v[0];
		   var B8=$hs_touchzh(c7,r8);
		   $r([B8,A8]);break;
		  }
		 },[V6,c7,U6,T6,r8]);
		},[V6,c7,U6,T6]);
	       },[V6,c7,h7,i7,w6,A7,U6,T6]);
	      },[V6,c7,h7,i7,w6,U6,T6]);
	     }
	    },[V6,c7,h7,u7,t7,o7,i7,w6,U6,T6]);break;
	   case 2:
	    $M(t7,function(I8){
	     var J8=I8.v[0],K8=I8.v[1],L8=I8.v[3],M8=I8.v[5];
	     var N8=L8.subtract(M8);
	     switch(N8.toString()){
	     case "0":
	      var a9=V6.multiply(goog.math.Long.fromBits(2,0));
	      var Z8=U6.add(goog.math.Long.fromBits(1,0));
	      T6.C([Z8,a9,o7],function(V8){
	       var W8=V8[0],X8=V8[1];
	       var Y8=$hs_touchzh(c7,W8);
	       $r([Y8,X8]);
	      },[c7]);break;
	     default:
	      var U8=$hs_writeWord8OffAddrzh(J8,M8,goog.math.Long.fromBits(0,0),o7);
	      var O8=$d(1,[J8],"sat");
	      w6.C([O8,U8],function(P8){
	       var Q8=P8[0],R8=P8[1];
	       var T8=$hs_touchzh(K8,Q8);
	       var S8=$hs_touchzh(c7,T8);
	       $r([S8,R8]);
	      },[c7,K8]);
	     }
	    },[V6,c7,o7,w6,U6,T6]);break;
	   }
	  },[V6,c7,h7,r7,t7,o7,i7,w6,U6,T6]);
	 },[V6,c7,h7,o7,i7,w6,U6,T6]);
	},[V6,c7,h7,i7,w6,U6,T6]);
       },[S6,V6,c7,f7,e7,w6,U6,T6]);
      },[S6,E6,w6],"$s$wa");
      var b9=P6.add(goog.math.Long.fromBits(1,0));
      T6.J(goog.math.Long.fromBits(0,0),b9,M6);
     },[N6,K6,E6,w6,M6]);
    },[I6,G6,E6,w6]);
   },[E6,w6],"sat");
   $$ForeignziMarshalziArray_withArrayLen.J($$ForeignziStorable_zdfStorableChar,v6,F6);
  },[v6,w6],"thing");
  $M(C6,function(c9){
   switch(c9.toString()){
   case "0":
    var p9=$f(1,function(q9){
     z6.C([q9],function(r9){
      var s9=r9[0],t9=r9[1];
      var u9=$f(2,function(c,d){
       $$GHCziForeign_withCStringLen2.J(t9,c,d);
      },[t9],"sat");
      var v9=$t(function(){
       D6.J(t9);
      },[D6,t9],"sat");
      var w9=$f(1,function(d){
       $k($hs_unmaskAsyncExceptionszh,[v9,d]);
      },[v9],"sat");
      $b($hs_catchzh,[w9,u9,s9],function(x9){
       var y9=x9[0],z9=x9[1];
       $M(t9,function(A9){
	var B9=A9.v[2];
	B9.C([y9],function(C9){
	 var D9=C9[0];
	 $r([D9,z9]);
	},[z9]);
       },[y9,z9]);
      },[t9]);
     },[D6]);
    },[D6,z6],"sat");
    $k($hs_maskAsyncExceptionszh,[p9,B6]);break;
   default:
    z6.C([B6],function(d9){
     var e9=d9[0],f9=d9[1];
     var g9=$f(2,function(c,d){
      $$GHCziForeign_withCStringLen2.J(f9,c,d);
     },[f9],"sat");
     var h9=$t(function(){
      D6.J(f9);
     },[D6,f9],"sat");
     $b($hs_catchzh,[h9,g9,e9],function(i9){
      var j9=i9[0],k9=i9[1];
      $M(f9,function(l9){
       var m9=l9.v[2];
       m9.C([j9],function(n9){
	var o9=n9[0];
	$r([o9,k9]);
       },[k9]);
      },[j9,k9]);
     },[f9]);
    },[D6]);
   }
  },[D6,B6,z6]);
 },[x6,v6,w6]);
},[],"in `base:GHC.Foreign'");
var $$GHCziForeign$a=$F(3,function(og,pg,qg){
 var rg=$t(function(){
  $$GHCziIOziEncodingziTypes_close.J(og);
 },[og],"sat");
 $$GHCziIO_bracket2.J(rg,pg,qg);
},"lvl");
var $$GHCziForeignPtr_addForeignPtrConcFinalizzer4=$t(function(){
 $$GHCziErr_error.J($$GHCziForeignPtr$c);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_mallocForeignPtr3=$D(1,function(){
 $r([$$GHCziForeignPtr_NoFinalizzers,$$GHCziTypes_ZMZN]);
},"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_mallocForeignPtrBytes2=$t(function(){
 $$GHCziErr_error.J($$GHCziForeignPtr$d);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_addForeignPtrConcFinalizzer5=$f(2,function(R5,S5){
 $M(R5,function(T5){
  switch(T5.g){
  case 1:
   $r([S5,$$GHCziTuple_Z0T]);break;
  case 2:
   var U5=T5.v[0],V5=T5.v[1];
   U5.C([S5],function(W5){
    var X5=W5[0];
    $$GHCziForeignPtr_addForeignPtrConcFinalizzer5.J(V5,X5);
   },[V5]);break;
  }
 },[S5]);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_zdwa7=$f(3,function(Z7,a8,b8){
 var c8=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,b8);
 var d8=c8[0],e8=c8[1];
 var f8=$hs_readMutVarzh(e8,d8);
 var g8=f8[0],h8=f8[1];
 $M(h8,function(i8){
  var j8=i8.v[0],k8=i8.v[1];
  $M(j8,function(l8){
   switch(l8.g){
   case 1:
    var m8=$d(2,[a8,k8],"sat");
    var n8=$d(1,[$$GHCziForeignPtr_HaskellFinalizzers,m8],"sat");
    var B8=$hs_writeMutVarzh(e8,n8,g8);
    $M(k8,function(o8){
     switch(o8.g){
     case 1:
      var p8=$f(1,function(q8){
       var r8=$hs_readMutVarzh(e8,q8);
       var s8=r8[0],t8=r8[1];
       $M(t8,function(u8){
	var v8=u8.v[1];
	$$GHCziForeignPtr_addForeignPtrConcFinalizzer5.J(v8,s8);
       },[s8]);
      },[e8],"sat");
      var w8=$hs_mkWeakzh(e8,$$GHCziTuple_Z0T,p8,B8);
      var x8=w8[0];
      var y8=$d(1,[e8],"sat");
      var z8=$d(1,[y8],"sat");
      var A8=$d(1,[Z7,z8],"sat");
      $r([x8,A8]);break;
     case 2:
      var C8=$d(1,[e8],"sat");
      var D8=$d(1,[C8],"sat");
      var E8=$d(1,[Z7,D8],"sat");
      $r([B8,E8]);break;
     }
    },[e8,B8,Z7]);break;
   case 2:
    $A($$GHCziForeignPtr_addForeignPtrConcFinalizzer4);break;
   case 3:
    var F8=$d(2,[a8,k8],"sat");
    var G8=$d(1,[$$GHCziForeignPtr_HaskellFinalizzers,F8],"sat");
    var U8=$hs_writeMutVarzh(e8,G8,g8);
    $M(k8,function(H8){
     switch(H8.g){
     case 1:
      var I8=$f(1,function(J8){
       var K8=$hs_readMutVarzh(e8,J8);
       var L8=K8[0],M8=K8[1];
       $M(M8,function(N8){
	var O8=N8.v[1];
	$$GHCziForeignPtr_addForeignPtrConcFinalizzer5.J(O8,L8);
       },[L8]);
      },[e8],"sat");
      var P8=$hs_mkWeakzh(e8,$$GHCziTuple_Z0T,I8,U8);
      var Q8=P8[0];
      var R8=$d(1,[e8],"sat");
      var S8=$d(1,[R8],"sat");
      var T8=$d(1,[Z7,S8],"sat");
      $r([Q8,T8]);break;
     case 2:
      var V8=$d(1,[e8],"sat");
      var W8=$d(1,[V8],"sat");
      var X8=$d(1,[Z7,W8],"sat");
      $r([U8,X8]);break;
     }
    },[e8,Z7,U8]);break;
   }
  },[e8,a8,k8,g8,Z7]);
 },[e8,a8,g8,Z7]);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_NoFinalizzers=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/ForeignPtr.hs:90:5");
var $$GHCziForeignPtr_HaskellFinalizzers=$D(3,function(){
 $r([]);
},"at libraries/base/GHC/ForeignPtr.hs:92:5");
var $$GHCziForeignPtr$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.ForeignPtr: attempt to mix Haskell and C finalizers in the same ForeignPtr");
},"lvl2");
var $$GHCziForeignPtr$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("mallocForeignPtrBytes: size must be >= 0");
},"lvl3");
var $$GHCziIO_finally2=$f(3,function(q1,r1,s1){
 q1.C([s1],function(t1){
  var u1=t1[0];
  $r($hs_raiseIOzh(r1,u1));
 },[r1]);
},[],"in `base:GHC.IO'");
var $$GHCziIO_bracket2=$f(3,function(z1,A1,B1){
 z1.C([B1],function(C1){
  var D1=C1[0];
  $r($hs_raiseIOzh(A1,D1));
 },[A1]);
},[],"in `base:GHC.IO'");
var $$GHCziIO_finally1=$f(3,function(l2,m2,n2){
 var o2=$hs_getMaskingStatezh(n2);
 var p2=o2[0],q2=o2[1];
 $M(q2,function(r2){
  switch(r2.toString()){
  case "0":
   var y2=$f(1,function(z2){
    var A2=$f(2,function(c,d){
     $$GHCziIO_finally2.J(m2,c,d);
    },[m2],"sat");
    var B2=$f(1,function(d){
     $k($hs_unmaskAsyncExceptionszh,[l2,d]);
    },[l2],"sat");
    $b($hs_catchzh,[B2,A2,z2],function(C2){
     var D2=C2[0],E2=C2[1];
     m2.C([D2],function(F2){
      var G2=F2[0];
      $r([G2,E2]);
     },[E2]);
    },[m2]);
   },[l2,m2],"sat");
   $k($hs_maskAsyncExceptionszh,[y2,p2]);break;
  default:
   var s2=$f(2,function(c,d){
    $$GHCziIO_finally2.J(m2,c,d);
   },[m2],"sat");
   $b($hs_catchzh,[l2,s2,p2],function(t2){
    var u2=t2[0],v2=t2[1];
    m2.C([u2],function(w2){
     var x2=w2[0];
     $r([x2,v2]);
    },[v2]);
   },[m2]);
  }
 },[l2,m2,p2]);
},[],"in `base:GHC.IO'");
var $$GHCziIO_unsafeDupablePerformIO=$f(1,function(J2){
 J2.C([$$GHCziPrim_realWorldzh],function(K2){
  var L2=K2[1];
  $A(L2);
 },[]);
},[],"at libraries/base/GHC/IO.hs:178:1");
var $$GHCziIO_failIO=$f(2,function(c,d){
 $$GHCziIO$c.J(c,d);
},[],"at libraries/base/GHC/IO.hs:82:1");
var $$GHCziIO$c=$F(2,function(Z3,a4){
 var b4=$t(function(){
  var c4=$t(function(){
   $$GHCziIOziException_userError.J(Z3);
  },[Z3],"sat");
  $$GHCziException_toException.J($$GHCziIOziException_zdfxExceptionIOException,c4);
 },[Z3],"sat");
 $r($hs_raiseIOzh(b4,a4));
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
var $$GHCziIOziEncodingziFailure_recoverDecode6=$t(function(){
 $$GHCziCString_unpackCStringzh.J("recoverDecode");
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("invalid byte sequence");
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode4=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_InvalidArgument,$$GHCziIOziEncodingziFailure_recoverDecode6,$$GHCziIOziEncodingziFailure_recoverDecode5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode3=$f(1,function(C){
 var D=$d(1,[C],"sat");
 $$GHCziBase_chr1.J(D);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode2=$f(1,function(E){
 var G=$hs_word2Intzh(E);
 var F=$d(1,[G],"sat");
 $$GHCziBase_chr1.J(F);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_zdwa=$f(9,function(H,I,J,K,L,M,N,O,P){
 $M(O,function(Q){
  var R=Q.v[0],S=Q.v[1],T=Q.v[2],U=Q.v[3],V=Q.v[4],W=Q.v[5];
  $M(H,function(X){
   switch(X.g){
   case 1:
    $$GHCziIOziException_ioException.J($$GHCziIOziEncodingziFailure_recoverDecode4,P);break;
   case 2:
    var Z=M.add(goog.math.Long.fromBits(1,0));
    var Y=$d(1,[I,J,K,L,Z,N],"sat");
    var a1=$d(1,[Y,Q],"sat");
    $r([P,a1]);break;
   case 3:
    var h1=$hs_writeWideCharOffAddrzh(R,W,"\ufffd",P);
    var g1=$hs_touchzh(S,h1);
    var c1=W.add(goog.math.Long.fromBits(1,0));
    var b1=$d(1,[R,S,T,U,V,c1],"sat");
    var e1=M.add(goog.math.Long.fromBits(1,0));
    var d1=$d(1,[I,J,K,L,e1,N],"sat");
    var f1=$d(1,[d1,b1],"sat");
    $r([g1,f1]);break;
   case 4:
    var J1=$hs_plusAddrzh(I,M);
    var i1=$hs_readWord8OffAddrzh(J1,goog.math.Long.fromBits(0,0),P);
    var j1=i1[0],k1=i1[1];
    var w1=$hs_touchzh(J,j1);
    var l1=$hs_ltWordzh(k1,goog.math.Long.fromBits(128,0));
    switch(l1.g){
    case 1:
     var y1=$hs_word2Intzh(k1);
     var n1=goog.math.Long.fromBits(56320,0).add(y1);
     var x1=$hs_int2Wordzh(n1);
     var m1=$hs_leWordzh(x1,goog.math.Long.fromBits(1114111,0));
     switch(m1.g){
     case 1:
      $$GHCziIOziEncodingziFailure_recoverDecode3.J(n1);break;
     case 2:
      var v1=$hs_chrzh(n1);
      var u1=$hs_writeWideCharOffAddrzh(R,W,v1,w1);
      var t1=$hs_touchzh(S,u1);
      var p1=W.add(goog.math.Long.fromBits(1,0));
      var o1=$d(1,[R,S,T,U,V,p1],"sat");
      var r1=M.add(goog.math.Long.fromBits(1,0));
      var q1=$d(1,[I,J,K,L,r1,N],"sat");
      var s1=$d(1,[q1,o1],"sat");
      $r([t1,s1]);break;
     }break;
    case 2:
     var z1=$hs_leWordzh(k1,goog.math.Long.fromBits(1114111,0));
     switch(z1.g){
     case 1:
      $$GHCziIOziEncodingziFailure_recoverDecode2.J(k1);break;
     case 2:
      var I1=$hs_word2Intzh(k1);
      var H1=$hs_chrzh(I1);
      var G1=$hs_writeWideCharOffAddrzh(R,W,H1,w1);
      var F1=$hs_touchzh(S,G1);
      var B1=W.add(goog.math.Long.fromBits(1,0));
      var A1=$d(1,[R,S,T,U,V,B1],"sat");
      var D1=M.add(goog.math.Long.fromBits(1,0));
      var C1=$d(1,[I,J,K,L,D1,N],"sat");
      var E1=$d(1,[C1,A1],"sat");
      $r([F1,E1]);break;
     }break;
    }break;
   }
  },[P,I,J,K,L,M,N,Q,R,W,S,T,U,V]);
 },[H,P,I,J,K,L,M,N]);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode1=$f(4,function(K1,L1,M1,N1){
 $M(L1,function(O1){
  var P1=O1.v[0],Q1=O1.v[1],R1=O1.v[2],S1=O1.v[3],T1=O1.v[4],U1=O1.v[5];
  $$GHCziIOziEncodingziFailure_zdwa.J(K1,P1,Q1,R1,S1,T1,U1,M1,N1);
 },[K1,M1,N1]);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_zdwa2=$f(1,function(g2){
 $$GHCziIOziException_ioException.J($$GHCziIOziEncodingziFailure$c,g2);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_zdwa1=$f(9,function(h2,i2,j2,k2,l2,m2,n2,o2,p2){
 $M(o2,function(q2){
  var r2=q2.v[0],s2=q2.v[1],t2=q2.v[2],u2=q2.v[3],v2=q2.v[4],w2=q2.v[5];
  var x2=$hs_readWideCharOffAddrzh(i2,m2,p2);
  var y2=x2[0],z2=x2[1];
  var B2=$hs_touchzh(j2,y2);
  $M(h2,function(A2){
   switch(A2.g){
   case 1:
    $$GHCziIOziEncodingziFailure_zdwa2.J(B2);break;
   case 2:
    var D2=m2.add(goog.math.Long.fromBits(1,0));
    var C2=$d(1,[i2,j2,k2,l2,D2,n2],"sat");
    var E2=$d(1,[C2,q2],"sat");
    $r([B2,E2]);break;
   case 3:
    $M(z2,function(F2){
     switch(F2.toString()){
     case "?":
      var L2=m2.add(goog.math.Long.fromBits(1,0));
      var K2=$d(1,[i2,j2,k2,l2,L2,n2],"sat");
      var M2=$d(1,[K2,q2],"sat");
      $r([B2,M2]);break;
     default:
      var J2=$hs_writeWideCharOffAddrzh(i2,m2,"?",B2);
      var I2=$hs_touchzh(j2,J2);
      var G2=$d(1,[i2,j2,k2,l2,m2,n2],"sat");
      var H2=$d(1,[G2,q2],"sat");
      $r([I2,H2]);
     }
    },[i2,m2,j2,B2,k2,l2,n2,q2]);break;
   case 4:
    var Z2=$hs_ordzh(z2);
    var N2=goog.math.Long.fromBits(56448,0).lessThanOrEqual(Z2)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(N2.g){
    case 1:
     $$GHCziIOziEncodingziFailure_zdwa2.J(B2);break;
    case 2:
     var O2=Z2.lessThan(goog.math.Long.fromBits(56576,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(O2.g){
     case 1:
      $$GHCziIOziEncodingziFailure_zdwa2.J(B2);break;
     case 2:
      var Y2=$hs_int2Wordzh(Z2);
      var X2=$hs_narrow8Wordzh(Y2);
      var W2=$hs_plusAddrzh(r2,w2);
      var V2=$hs_writeWord8OffAddrzh(W2,goog.math.Long.fromBits(0,0),X2,B2);
      var U2=$hs_touchzh(s2,V2);
      var Q2=w2.add(goog.math.Long.fromBits(1,0));
      var P2=$d(1,[r2,s2,t2,u2,v2,Q2],"sat");
      var S2=m2.add(goog.math.Long.fromBits(1,0));
      var R2=$d(1,[i2,j2,k2,l2,S2,n2],"sat");
      var T2=$d(1,[R2,P2],"sat");
      $r([U2,T2]);break;
     }break;
    }break;
   }
  },[i2,m2,j2,B2,k2,l2,n2,q2,z2,r2,w2,s2,t2,u2,v2]);
 },[i2,m2,p2,j2,h2,k2,l2,n2]);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverEncode1=$f(4,function(a3,b3,c3,d3){
 $M(b3,function(e3){
  var f3=e3.v[0],g3=e3.v[1],h3=e3.v[2],i3=e3.v[3],j3=e3.v[4],k3=e3.v[5];
  $$GHCziIOziEncodingziFailure_zdwa1.J(a3,f3,g3,h3,i3,j3,k3,c3,d3);
 },[a3,c3,d3]);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_ErrorOnCodingFailure=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Failure.hs:42:5");
var $$GHCziIOziEncodingziFailure_IgnoreCodingFailure=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Failure.hs:44:5");
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
var $$GHCziIOziEncodingziIconv_iconvEncodingzuloc1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Iconv.close");
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding9=$f(2,function(c,d){
 c.C([d],function(e){
  var f=e[0],g=e[1];
  $M(g,function(h){
   var i=h.v[0];
   $M(i,function(j){
    switch(j.toString()){
    case "-1":
     var $ff=__hscore_get_errno();
     var k=[f,$ff];
     var l=k[0],m=k[1];
     var o=$hs_narrow32Intzh(m);
     var n=$d(1,[o],"sat");
     $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv_iconvEncodingzuloc1,n,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(p){
      $$GHCziIOziException_ioError.C([p,l],function(q){
       var r=q[0];
       $r([r,$$GHCziTuple_Z0T]);
      },[]);
     },[l]);break;
    default:
     $r([f,$$GHCziTuple_Z0T]);
    }
   },[f]);
  },[f]);
 },[]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding8=$f(1,function(s){
 $r([s,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding7=$f(2,function(t,u){
 $r([u,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_newIConv=$f(4,function(v,w,x,y){
 var z=$f(1,function(A){
  var B=$f(2,function(C,D){
   $M(C,function(E){
    var F=E.v[0];
    $M(A,function(G){
     var H=G.v[0];
     var $ff=hs_iconv_open(F,H);
     var I=[D,$ff];
     var J=I[0],K=I[1];
     $M(K,function(L){
      switch(L.toString()){
      case "-1":
       var $ff=__hscore_get_errno();
       var X=[J,$ff];
       var Y=X[0],Z=X[1];
       var b1=$hs_narrow32Intzh(Z);
       var a1=$d(1,[b1],"sat");
       $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv_iconvEncodingzuloc,a1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(c1){
	$$GHCziIOziException_ioError.C([c1,Y],function(d1){
	 var e1=d1[0],f1=d1[1];
	 var g1=$f(1,function(b){
	  $$GHCziIOziEncodingziIconv_hszuiconvzuclose.J(f1,b);
	 },[f1],"sat");
	 var h1=$f(1,function(b){
	  $$GHCziIOziEncodingziIconv_iconvEncoding9.J(g1,b);
	 },[g1],"sat");
	 var i1=$t(function(){
	  y.J(f1);
	 },[y,f1],"sat");
	 var j1=$d(1,[i1,x,h1,$$GHCziIOziEncodingziIconv_iconvEncoding8,$$GHCziIOziEncodingziIconv_iconvEncoding7],"sat");
	 $r([e1,j1]);
	},[y,x]);
       },[y,x,Y]);break;
      default:
       var M=$f(1,function(N){
	var $ff=hs_iconv_close(L);
	var O=[N,$ff];
	var P=O[0],Q=O[1];
	var S=$hs_narrow32Intzh(Q);
	var R=$d(1,[S],"sat");
	$r([P,R]);
       },[L],"sat");
       var T=$f(1,function(b){
	$$GHCziIOziEncodingziIconv_iconvEncoding9.J(M,b);
       },[M],"sat");
       var U=$t(function(){
	var V=$d(1,[L],"sat");
	y.J(V);
       },[L,y],"sat");
       var W=$d(1,[U,x,T,$$GHCziIOziEncodingziIconv_iconvEncoding8,$$GHCziIOziEncodingziIconv_iconvEncoding7],"sat");
       $r([J,W]);
      }
     },[J,y,x]);
    },[F,D,y,x]);
   },[A,D,y,x]);
  },[A,y,x],"sat");
  $$ForeignziCziString_withCAString.J(w,B);
 },[w,y,x],"sat");
 $$ForeignziCziString_withCAString.J(v,z);
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
var $$GHCziIOziEncodingziIconv_iconvEncoding5=$f(6,function(k1,l1,m1,n1,o1,p1){
 $M(l1,function(q1){
  var r1=q1.v[0],s1=q1.v[1],t1=q1.v[2],u1=q1.v[3],v1=q1.v[4],w1=q1.v[5];
  $M(n1,function(x1){
   var y1=x1.v[0],z1=x1.v[1],A1=x1.v[2],B1=x1.v[3],C1=x1.v[4],D1=x1.v[5];
   var E1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),p1);
   var F1=E1[0],G1=E1[1];
   var H1=$hs_unsafeFreezzeByteArrayzh(G1,F1);
   var I1=H1[0],J1=H1[1];
   $M(m1,function(K1){
    var L1=K1.v[0];
    var M1=$f(1,function(N1){
     var X1=$hs_byteArrayContentszh(J1);
     var x4=$hs_writeAddrOffAddrzh(X1,goog.math.Long.fromBits(0,0),N1,I1);
     var O1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),x4);
     var P1=O1[0],Q1=O1[1];
     var R1=$hs_unsafeFreezzeByteArrayzh(Q1,P1);
     var S1=R1[0],T1=R1[1];
     $M(o1,function(U1){
      var V1=U1.v[0];
      var W1=$f(1,function(Y1){
       var g2=$hs_byteArrayContentszh(T1);
       var s4=$hs_writeAddrOffAddrzh(g2,goog.math.Long.fromBits(0,0),Y1,S1);
       var Z1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),s4);
       var a2=Z1[0],b2=Z1[1];
       var c2=$hs_unsafeFreezzeByteArrayzh(b2,a2);
       var d2=c2[0],e2=c2[1];
       var f2=$f(1,function(h2){
	var p2=$hs_byteArrayContentszh(e2);
	var n4=$hs_writeWord64OffAddrzh(p2,goog.math.Long.fromBits(0,0),h2,d2);
	var i2=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),n4);
	var j2=i2[0],k2=i2[1];
	var l2=$hs_unsafeFreezzeByteArrayzh(k2,j2);
	var m2=l2[0],n2=l2[1];
	var o2=$f(1,function(q2){
	 var h4=$hs_byteArrayContentszh(n2);
	 var i4=$hs_writeWord64OffAddrzh(h4,goog.math.Long.fromBits(0,0),q2,m2);
	 $M(k1,function(r2){
	  var s2=r2.v[0];
	  var $ff=hs_iconv(s2,X1,p2,g2,h4);
	  var t2=[i4,$ff];
	  var u2=t2[0],v2=t2[1];
	  var w2=$hs_readWord64OffAddrzh(p2,goog.math.Long.fromBits(0,0),u2);
	  var x2=w2[0],y2=w2[1];
	  var z2=$hs_readWord64OffAddrzh(h4,goog.math.Long.fromBits(0,0),x2);
	  var A2=z2[0],B2=z2[1];
	  var C2=$t(function(){
	   var D2=V1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(D2.g){
	   case 1:
	    var F2=$hs_word2Intzh(B2);
	    var E2=$hs_uncheckedIShiftRAzh(F2,V1);
	    $R(1,[E2],"I#");break;
	   case 2:
	    var H2=$hs_word2Intzh(B2);
	    var G2=H2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(G2.g){
	    case 1:
	     $A($$GHCziIOziEncodingziIconv_iconvEncoding4);break;
	    case 2:
	     $A($$GHCziIOziEncodingziIconv$c);break;
	    }break;
	   }
	  },[V1,B2],"new_outleft'");
	  var I2=$t(function(){
	   var J2=$hs_eqWordzh(y2,goog.math.Long.fromBits(0,0));
	   switch(J2.g){
	   case 1:
	    var K2=L1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(K2.g){
	    case 1:
	     var N2=$hs_word2Intzh(y2);
	     var M2=$hs_uncheckedIShiftRAzh(N2,L1);
	     var L2=w1.subtract(M2);
	     $R(1,[r1,s1,t1,u1,L2,w1],"Buffer");break;
	    case 2:
	     var Q2=$hs_word2Intzh(y2);
	     var O2=Q2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(O2.g){
	     case 1:
	      $R(1,[r1,s1,t1,u1,w1,w1],"Buffer");break;
	     case 2:
	      var P2=w1.subtract(goog.math.Long.fromBits(4294967295,4294967295));
	      $R(1,[r1,s1,t1,u1,P2,w1],"Buffer");break;
	     }break;
	    }break;
	   case 2:
	    $R(1,[r1,s1,t1,u1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	   }
	  },[y2,L1,r1,s1,t1,u1,w1],"new_input");
	  var R2=$hs_eqWordzh(v2,goog.math.Long.fromBits(4294967295,4294967295));
	  switch(R2.g){
	  case 1:
	   var c3=$hs_touchzh(n2,A2);
	   var b3=$hs_touchzh(e2,c3);
	   var a3=$hs_touchzh(T1,b3);
	   var Z2=$hs_touchzh(J1,a3);
	   var Y2=$hs_touchzh(z1,Z2);
	   var X2=$hs_touchzh(s1,Y2);
	   var S2=$t(function(){
	    $M(C2,function(T2){
	     var U2=T2.v[0];
	     var V2=B1.subtract(U2);
	     $R(1,[y1,z1,A1,B1,C1,V2],"Buffer");
	    },[z1,y1,A1,B1,C1]);
	   },[C2,z1,y1,A1,B1,C1],"sat");
	   var W2=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,I2,S2],"sat");
	   $r([X2,W2]);break;
	  case 2:
	   var $ff=__hscore_get_errno();
	   var d3=[A2,$ff];
	   var e3=d3[0],f3=d3[1];
	   var g3=$hs_narrow32Intzh(f3);
	   switch(g3.toString()){
	   case "7":
	    var G3=$hs_touchzh(n2,e3);
	    var F3=$hs_touchzh(e2,G3);
	    var E3=$hs_touchzh(T1,F3);
	    var D3=$hs_touchzh(J1,E3);
	    var C3=$hs_touchzh(z1,D3);
	    var B3=$hs_touchzh(s1,C3);
	    var w3=$t(function(){
	     $M(C2,function(x3){
	      var y3=x3.v[0];
	      var z3=B1.subtract(y3);
	      $R(1,[y1,z1,A1,B1,C1,z3],"Buffer");
	     },[z1,y1,A1,B1,C1]);
	    },[C2,z1,y1,A1,B1,C1],"sat");
	    var A3=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,I2,w3],"sat");
	    $r([B3,A3]);break;
	   case "22":
	    var R3=$hs_touchzh(n2,e3);
	    var Q3=$hs_touchzh(e2,R3);
	    var P3=$hs_touchzh(T1,Q3);
	    var O3=$hs_touchzh(J1,P3);
	    var N3=$hs_touchzh(z1,O3);
	    var M3=$hs_touchzh(s1,N3);
	    var H3=$t(function(){
	     $M(C2,function(I3){
	      var J3=I3.v[0];
	      var K3=B1.subtract(J3);
	      $R(1,[y1,z1,A1,B1,C1,K3],"Buffer");
	     },[z1,y1,A1,B1,C1]);
	    },[C2,z1,y1,A1,B1,C1],"sat");
	    var L3=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,I2,H3],"sat");
	    $r([M3,L3]);break;
	   case "84":
	    var g4=$hs_touchzh(n2,e3);
	    var f4=$hs_touchzh(e2,g4);
	    var e4=$hs_touchzh(T1,f4);
	    var d4=$hs_touchzh(J1,e4);
	    var c4=$hs_touchzh(z1,d4);
	    var b4=$hs_touchzh(s1,c4);
	    var S3=$t(function(){
	     $M(C2,function(T3){
	      var U3=T3.v[0];
	      var V3=B1.subtract(U3);
	      $R(1,[y1,z1,A1,B1,C1,V3],"Buffer");
	     },[z1,y1,A1,B1,C1]);
	    },[C2,z1,y1,A1,B1,C1],"sat");
	    var W3=$t(function(){
	     $M(C2,function(X3){
	      var Y3=X3.v[0];
	      $M(Y3,function(Z3){
	       switch(Z3.toString()){
	       case "0":
		$R(2,[],"OutputUnderflow");break;
	       default:
		$R(3,[],"InvalidSequence");
	       }
	      },[]);
	     },[]);
	    },[C2],"sat");
	    var a4=$d(1,[W3,I2,S3],"sat");
	    $r([b4,a4]);break;
	   default:
	    var $ff=__hscore_get_errno();
	    var h3=[e3,$ff];
	    var i3=h3[0],j3=h3[1];
	    var l3=$hs_narrow32Intzh(j3);
	    var k3=$d(1,[l3],"sat");
	    $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv$d,k3,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(m3){
	     $$GHCziIOziException_ioError.C([m3,i3],function(n3){
	      var o3=n3[0],p3=n3[1];
	      var v3=$hs_touchzh(n2,o3);
	      var u3=$hs_touchzh(e2,v3);
	      var t3=$hs_touchzh(T1,u3);
	      var s3=$hs_touchzh(J1,t3);
	      var r3=$hs_touchzh(z1,s3);
	      var q3=$hs_touchzh(s1,r3);
	      $r([q3,p3]);
	     },[J1,T1,e2,n2,s1,z1]);
	    },[J1,T1,e2,n2,s1,z1,i3]);
	   }break;
	  }
	 },[J1,X1,T1,g2,e2,p2,n2,h4,i4,V1,L1,r1,s1,t1,u1,w1,z1,y1,A1,B1,C1]);
	},[J1,X1,T1,g2,e2,p2,n2,m2,k1,V1,L1,r1,s1,t1,u1,w1,z1,y1,A1,B1,C1],"$j3");
	var j4=V1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(j4.g){
	case 1:
	 var m4=B1.subtract(D1);
	 var l4=$hs_uncheckedIShiftLzh(m4,V1);
	 var k4=$hs_int2Wordzh(l4);
	 o2.J(k4);break;
	case 2:
	 o2.J(goog.math.Long.fromBits(0,0));break;
	}
       },[J1,X1,T1,g2,e2,d2,k1,V1,L1,r1,s1,t1,u1,w1,z1,y1,A1,B1,C1,D1],"$j2");
       var o4=L1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(o4.g){
       case 1:
	var r4=w1.subtract(v1);
	var q4=$hs_uncheckedIShiftLzh(r4,L1);
	var p4=$hs_int2Wordzh(q4);
	f2.J(p4);break;
       case 2:
	f2.J(goog.math.Long.fromBits(0,0));break;
       }
      },[J1,X1,T1,S1,k1,V1,L1,r1,s1,t1,u1,w1,z1,y1,A1,B1,C1,D1,v1],"$j1");
      var t4=V1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(t4.g){
      case 1:
       var v4=$hs_uncheckedIShiftLzh(D1,V1);
       var u4=$hs_plusAddrzh(y1,v4);
       W1.J(u4);break;
      case 2:
       var w4=$hs_plusAddrzh(y1,goog.math.Long.fromBits(0,0));
       W1.J(w4);break;
      }
     },[J1,X1,T1,S1,k1,L1,r1,s1,t1,u1,w1,z1,y1,A1,B1,C1,D1,v1]);
    },[J1,I1,o1,k1,L1,r1,s1,t1,u1,w1,z1,y1,A1,B1,C1,D1,v1],"$j");
    var y4=L1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(y4.g){
    case 1:
     var A4=$hs_uncheckedIShiftLzh(v1,L1);
     var z4=$hs_plusAddrzh(r1,A4);
     M1.J(z4);break;
    case 2:
     var B4=$hs_plusAddrzh(r1,goog.math.Long.fromBits(0,0));
     M1.J(B4);break;
    }
   },[J1,I1,o1,k1,r1,s1,t1,u1,w1,z1,y1,A1,B1,C1,D1,v1]);
  },[p1,m1,o1,k1,r1,s1,t1,u1,w1,v1]);
 },[n1,p1,m1,o1,k1]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding6=$f(4,function(C4,D4,E4,F4){
 $$GHCziIOziEncodingziIconv_iconvEncoding5.J(C4,D4,$$GHCziIOziEncodingziIconv_iconvEncoding4,E4,$$GHCziIOziEncodingziIconv_charzushift,F4);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding3=$f(4,function(G4,H4,I4,J4){
 $$GHCziIOziEncodingziIconv_iconvEncoding5.J(G4,H4,$$GHCziIOziEncodingziIconv_charzushift,I4,$$GHCziIOziEncodingziIconv_iconvEncoding4,J4);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding10=$f(1,function(K4){
 $M(K4,function(L4){
  var M4=L4.v[0];
  $M(M4,function(N4){
   switch(N4.toString()){
   case "/":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding2=$f(3,function(O4,P4,Q4){
 var R4=$t(function(){
  var S4=$f(3,function(T4,a,b){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(O4,T4,a,b);
  },[O4],"sat");
  $$GHCziIOziEncodingziIconv_newIConv.J($$GHCziIOziEncodingziIconv_haskellChar,P4,S4,$$GHCziIOziEncodingziIconv_iconvEncoding3);
 },[P4,O4],"sat");
 var U4=$t(function(){
  var V4=$t(function(){
   $$GHCziList_zdwspan.C([$$GHCziIOziEncodingziIconv_iconvEncoding10,P4],function(W4){
    var X4=W4[0],Y4=W4[1];
    $R(1,[X4,Y4],"(,)");
   },[]);
  },[P4],"ds");
  var Z4=$f(3,function(T4,a,b){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(O4,T4,a,b);
  },[O4],"sat");
  var a5=$t(function(){
   var b5=$t(function(){
    $M(V4,function(c5){
     var d5=c5.v[1];
     $A(d5);
    },[]);
   },[V4],"sat");
   $$GHCziBase_zpzp.J($$GHCziIOziEncodingziIconv_haskellChar,b5);
  },[V4],"sat");
  var e5=$t(function(){
   $M(V4,function(f5){
    var g5=f5.v[0];
    $A(g5);
   },[]);
  },[V4],"sat");
  $$GHCziIOziEncodingziIconv_newIConv.J(e5,a5,Z4,$$GHCziIOziEncodingziIconv_iconvEncoding6);
 },[P4,O4],"sat");
 var h5=$d(1,[P4,U4,R4],"sat");
 $r([Q4,h5]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv$a=$F(2,function(i5,j5){
 $M(i5,function(k5){
  var l5=k5.v[0];
  var $ff=hs_iconv_close(l5);
  var m5=[j5,$ff];
  var n5=m5[0],o5=m5[1];
  var q5=$hs_narrow32Intzh(o5);
  var p5=$d(1,[q5],"sat");
  $r([n5,p5]);
 },[j5]);
},"a");
var $$GHCziIOziEncodingziIconv$b=$F(1,function(r5){
 var v5=$hs_noDuplicatezh(r5);
 var $ff=localeEncoding();
 var s5=[v5,$ff];
 var t5=s5[0],u5=s5[1];
 $$ForeignziCziString_zdwa.J(u5,t5);
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
var $$GHCziIOziEncodingziUTF16_zdwa1=$f(8,function(a,b,c,d,e,f,g,h){
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
     var h1=$hs_touchzh(b,x);
     var l1=$hs_ordzh(y);
     var z=l1.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(z.g){
     case 1:
      var q1=m.subtract(s);
      var A=q1.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       var L=l1.subtract(goog.math.Long.fromBits(65536,0));
       var k1=$hs_uncheckedIShiftRAzh(L,goog.math.Long.fromBits(18,0));
       var j1=k1.add(goog.math.Long.fromBits(216,0));
       var i1=$hs_int2Wordzh(j1);
       var g1=$hs_narrow8Wordzh(i1);
       var f1=$hs_plusAddrzh(j,s);
       var e1=$hs_writeWord8OffAddrzh(f1,goog.math.Long.fromBits(0,0),g1,h1);
       var a1=$hs_touchzh(k,e1);
       var d1=$hs_uncheckedIShiftRAzh(L,goog.math.Long.fromBits(10,0));
       var c1=$hs_int2Wordzh(d1);
       var Z=$hs_narrow8Wordzh(c1);
       var b1=s.add(goog.math.Long.fromBits(1,0));
       var Y=$hs_plusAddrzh(j,b1);
       var X=$hs_writeWord8OffAddrzh(Y,goog.math.Long.fromBits(0,0),Z,a1);
       var P=$hs_touchzh(k,X);
       var W=$hs_int2Wordzh(L);
       var V=W.and(goog.math.Long.fromBits(1023,0));
       var U=$hs_word2Intzh(V);
       var T=$hs_uncheckedIShiftRAzh(U,goog.math.Long.fromBits(8,0));
       var S=T.add(goog.math.Long.fromBits(220,0));
       var R=$hs_int2Wordzh(S);
       var O=$hs_narrow8Wordzh(R);
       var Q=s.add(goog.math.Long.fromBits(2,0));
       var N=$hs_plusAddrzh(j,Q);
       var M=$hs_writeWord8OffAddrzh(N,goog.math.Long.fromBits(0,0),O,P);
       var H=$hs_touchzh(k,M);
       var K=$hs_int2Wordzh(L);
       var J=K.and(goog.math.Long.fromBits(1023,0));
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
       $r([h1,p1]);break;
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
	var L1=$hs_uncheckedIShiftRAzh(l1,goog.math.Long.fromBits(8,0));
	var K1=$hs_int2Wordzh(L1);
	var J1=$hs_narrow8Wordzh(K1);
	var I1=$hs_plusAddrzh(j,s);
	var H1=$hs_writeWord8OffAddrzh(I1,goog.math.Long.fromBits(0,0),J1,h1);
	var E1=$hs_touchzh(k,H1);
	var G1=$hs_int2Wordzh(l1);
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
	 var a2=$hs_uncheckedIShiftRAzh(l1,goog.math.Long.fromBits(8,0));
	 var Z1=$hs_int2Wordzh(a2);
	 var Y1=$hs_narrow8Wordzh(Z1);
	 var X1=$hs_plusAddrzh(j,s);
	 var W1=$hs_writeWord8OffAddrzh(X1,goog.math.Long.fromBits(0,0),Y1,h1);
	 var T1=$hs_touchzh(k,W1);
	 var V1=$hs_int2Wordzh(l1);
	 var S1=$hs_narrow8Wordzh(V1);
	 var U1=s.add(goog.math.Long.fromBits(1,0));
	 var R1=$hs_plusAddrzh(j,U1);
	 var Q1=$hs_writeWord8OffAddrzh(R1,goog.math.Long.fromBits(0,0),S1,T1);
	 var P1=$hs_touchzh(k,Q1);
	 var O1=s.add(goog.math.Long.fromBits(2,0));
	 var N1=r.add(goog.math.Long.fromBits(1,0));
	 q.J(N1,O1,P1);break;
	case 2:
	 $r([h1,u1]);break;
	}break;
       }
      },[r,s,l1,j,h1,k,q,u1],"$w$j");
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
	$r([h1,u1]);break;
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
var $$GHCziIOziEncodingziUTF16_mkUTF16be2=$f(3,function(m2,n2,o2){
 $M(m2,function(p2){
  var q2=p2.v[0],r2=p2.v[1],s2=p2.v[2],t2=p2.v[3],u2=p2.v[4],v2=p2.v[5];
  $$GHCziIOziEncodingziUTF16_zdwa1.J(q2,r2,s2,t2,u2,v2,n2,o2);
 },[n2,o2]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_zdwa=$f(9,function(z2,A2,B2,C2,D2,E2,F2,G2,H2){
 var I2=$hs_readMutVarzh(z2,H2);
 var J2=I2[0],K2=I2[1];
 $M(K2,function(L2){
  switch(L2.g){
  case 1:
   var g3=E2.subtract(G2);
   var M2=g3.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(M2.g){
   case 1:
    var d3=$hs_writeMutVarzh(z2,$$GHCziTypes_True,J2);
    var c3=$hs_plusAddrzh(B2,G2);
    var b3=$hs_writeWord8OffAddrzh(c3,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(254,0),d3);
    var Z2=$hs_touchzh(C2,b3);
    var a3=G2.add(goog.math.Long.fromBits(1,0));
    var Y2=$hs_plusAddrzh(B2,a3);
    var X2=$hs_writeWord8OffAddrzh(Y2,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(255,0),Z2);
    var W2=$hs_touchzh(C2,X2);
    $M(A2,function(N2){
     var O2=N2.v[0],P2=N2.v[1],Q2=N2.v[2],R2=N2.v[3],S2=N2.v[4],T2=N2.v[5];
     var V2=G2.add(goog.math.Long.fromBits(2,0));
     var U2=$d(1,[B2,C2,D2,E2,F2,V2],"sat");
     $$GHCziIOziEncodingziUTF16_zdwa1.J(O2,P2,Q2,R2,S2,T2,U2,W2);
    },[E2,G2,B2,C2,D2,F2,W2]);break;
   case 2:
    var e3=$d(1,[B2,C2,D2,E2,F2,G2],"sat");
    var f3=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,A2,e3],"sat");
    $r([J2,f3]);break;
   }break;
  case 2:
   $M(A2,function(h3){
    var i3=h3.v[0],j3=h3.v[1],k3=h3.v[2],l3=h3.v[3],m3=h3.v[4],n3=h3.v[5];
    var o3=$d(1,[B2,C2,D2,E2,F2,G2],"sat");
    $$GHCziIOziEncodingziUTF16_zdwa1.J(i3,j3,k3,l3,m3,n3,o3,J2);
   },[E2,G2,J2,B2,C2,D2,F2]);break;
  }
 },[z2,E2,G2,J2,B2,C2,A2,D2,F2]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_zdwa5=$f(8,function(D3,E3,F3,G3,H3,I3,J3,K3){
 $M(J3,function(L3){
  var M3=L3.v[0],N3=L3.v[1],O3=L3.v[2],P3=L3.v[3],Q3=L3.v[4],R3=L3.v[5];
  var S3=$d(1,[D3,E3,F3,G3,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var T3=$f(3,function(U3,V3,W3){
   var X3=U3.greaterThanOrEqual(I3)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(X3.g){
   case 1:
    var K5=P3.subtract(V3);
    var Y3=K5.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Y3.g){
    case 1:
     var Z3=$hs_readWideCharOffAddrzh(D3,U3,W3);
     var a4=Z3[0],b4=Z3[1];
     var L4=$hs_touchzh(E3,a4);
     var O4=$hs_ordzh(b4);
     var c4=O4.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(c4.g){
     case 1:
      var T4=P3.subtract(V3);
      var d4=T4.lessThan(goog.math.Long.fromBits(4,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(d4.g){
      case 1:
       var s4=O4.subtract(goog.math.Long.fromBits(65536,0));
       var N4=$hs_uncheckedIShiftRAzh(s4,goog.math.Long.fromBits(10,0));
       var M4=$hs_int2Wordzh(N4);
       var K4=$hs_narrow8Wordzh(M4);
       var J4=$hs_plusAddrzh(M3,V3);
       var I4=$hs_writeWord8OffAddrzh(J4,goog.math.Long.fromBits(0,0),K4,L4);
       var D4=$hs_touchzh(N3,I4);
       var H4=$hs_uncheckedIShiftRAzh(s4,goog.math.Long.fromBits(18,0));
       var G4=H4.add(goog.math.Long.fromBits(216,0));
       var F4=$hs_int2Wordzh(G4);
       var C4=$hs_narrow8Wordzh(F4);
       var E4=V3.add(goog.math.Long.fromBits(1,0));
       var B4=$hs_plusAddrzh(M3,E4);
       var A4=$hs_writeWord8OffAddrzh(B4,goog.math.Long.fromBits(0,0),C4,D4);
       var w4=$hs_touchzh(N3,A4);
       var z4=$hs_int2Wordzh(s4);
       var y4=z4.and(goog.math.Long.fromBits(1023,0));
       var v4=$hs_narrow8Wordzh(y4);
       var x4=V3.add(goog.math.Long.fromBits(2,0));
       var u4=$hs_plusAddrzh(M3,x4);
       var t4=$hs_writeWord8OffAddrzh(u4,goog.math.Long.fromBits(0,0),v4,w4);
       var k4=$hs_touchzh(N3,t4);
       var r4=$hs_int2Wordzh(s4);
       var q4=r4.and(goog.math.Long.fromBits(1023,0));
       var p4=$hs_word2Intzh(q4);
       var o4=$hs_uncheckedIShiftRAzh(p4,goog.math.Long.fromBits(8,0));
       var n4=o4.add(goog.math.Long.fromBits(220,0));
       var m4=$hs_int2Wordzh(n4);
       var j4=$hs_narrow8Wordzh(m4);
       var l4=V3.add(goog.math.Long.fromBits(3,0));
       var i4=$hs_plusAddrzh(M3,l4);
       var h4=$hs_writeWord8OffAddrzh(i4,goog.math.Long.fromBits(0,0),j4,k4);
       var g4=$hs_touchzh(N3,h4);
       var f4=V3.add(goog.math.Long.fromBits(4,0));
       var e4=U3.add(goog.math.Long.fromBits(1,0));
       T3.J(e4,f4,g4);break;
      case 2:
       var P4=$d(1,[M3,N3,O3,P3,Q3,V3],"sat");
       var Q4=$t(function(){
	var R4=U3.equals(I3)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(R4.g){
	case 1:
	 $R(1,[D3,E3,F3,G3,U3,I3],"Buffer");break;
	case 2:
	 $A(S3);break;
	}
       },[D3,E3,F3,G3,S3,U3,I3],"sat");
       var S4=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,Q4,P4],"sat");
       $r([L4,S4]);break;
      }break;
     case 2:
      var U4=$t(function(){
       var V4=U3.equals(I3)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(V4.g){
       case 1:
	$R(1,[D3,E3,F3,G3,U3,I3],"Buffer");break;
       case 2:
	$A(S3);break;
       }
      },[D3,E3,F3,G3,S3,U3,I3],"a1");
      var W4=$d(1,[M3,N3,O3,P3,Q3,V3],"a2");
      var X4=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,U4,W4],"lvl1");
      var Y4=$f(1,function(Z4){
       var a5=goog.math.Long.fromBits(56320,0).lessThanOrEqual(O4)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(a5.g){
       case 1:
	var o5=$hs_int2Wordzh(O4);
	var n5=$hs_narrow8Wordzh(o5);
	var m5=$hs_plusAddrzh(M3,V3);
	var l5=$hs_writeWord8OffAddrzh(m5,goog.math.Long.fromBits(0,0),n5,L4);
	var h5=$hs_touchzh(N3,l5);
	var k5=$hs_uncheckedIShiftRAzh(O4,goog.math.Long.fromBits(8,0));
	var j5=$hs_int2Wordzh(k5);
	var g5=$hs_narrow8Wordzh(j5);
	var i5=V3.add(goog.math.Long.fromBits(1,0));
	var f5=$hs_plusAddrzh(M3,i5);
	var e5=$hs_writeWord8OffAddrzh(f5,goog.math.Long.fromBits(0,0),g5,h5);
	var d5=$hs_touchzh(N3,e5);
	var c5=V3.add(goog.math.Long.fromBits(2,0));
	var b5=U3.add(goog.math.Long.fromBits(1,0));
	T3.J(b5,c5,d5);break;
       case 2:
	var p5=O4.lessThanOrEqual(goog.math.Long.fromBits(57343,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(p5.g){
	case 1:
	 var D5=$hs_int2Wordzh(O4);
	 var C5=$hs_narrow8Wordzh(D5);
	 var B5=$hs_plusAddrzh(M3,V3);
	 var A5=$hs_writeWord8OffAddrzh(B5,goog.math.Long.fromBits(0,0),C5,L4);
	 var w5=$hs_touchzh(N3,A5);
	 var z5=$hs_uncheckedIShiftRAzh(O4,goog.math.Long.fromBits(8,0));
	 var y5=$hs_int2Wordzh(z5);
	 var v5=$hs_narrow8Wordzh(y5);
	 var x5=V3.add(goog.math.Long.fromBits(1,0));
	 var u5=$hs_plusAddrzh(M3,x5);
	 var t5=$hs_writeWord8OffAddrzh(u5,goog.math.Long.fromBits(0,0),v5,w5);
	 var s5=$hs_touchzh(N3,t5);
	 var r5=V3.add(goog.math.Long.fromBits(2,0));
	 var q5=U3.add(goog.math.Long.fromBits(1,0));
	 T3.J(q5,r5,s5);break;
	case 2:
	 $r([L4,X4]);break;
	}break;
       }
      },[U3,V3,O4,M3,L4,N3,T3,X4],"$w$j");
      var E5=goog.math.Long.fromBits(55296,0).lessThanOrEqual(O4)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(E5.g){
      case 1:
       Y4.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var F5=O4.lessThanOrEqual(goog.math.Long.fromBits(56319,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(F5.g){
       case 1:
	Y4.J($$GHCziPrim_realWorldzh);break;
       case 2:
	$r([L4,X4]);break;
       }break;
      }break;
     }break;
    case 2:
     var G5=$d(1,[M3,N3,O3,P3,Q3,V3],"sat");
     var H5=$t(function(){
      var I5=U3.equals(I3)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(I5.g){
      case 1:
       $R(1,[D3,E3,F3,G3,U3,I3],"Buffer");break;
      case 2:
       $A(S3);break;
      }
     },[D3,E3,F3,G3,S3,U3,I3],"sat");
     var J5=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,H5,G5],"sat");
     $r([W3,J5]);break;
    }break;
   case 2:
    var L5=$d(1,[M3,N3,O3,P3,Q3,V3],"sat");
    var M5=$t(function(){
     var N5=U3.equals(I3)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(N5.g){
     case 1:
      $R(1,[D3,E3,F3,G3,U3,I3],"Buffer");break;
     case 2:
      $A(S3);break;
     }
    },[D3,E3,F3,G3,S3,U3,I3],"sat");
    var O5=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,M5,L5],"sat");
    $r([W3,O5]);break;
   }
  },[D3,E3,F3,G3,S3,I3,P3,M3,N3,O3,Q3],"$wa6");
  T3.J(H3,R3,K3);
 },[D3,E3,F3,G3,I3,H3,K3]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16le2=$f(3,function(P5,Q5,R5){
 $M(P5,function(S5){
  var T5=S5.v[0],U5=S5.v[1],V5=S5.v[2],W5=S5.v[3],X5=S5.v[4],Y5=S5.v[5];
  $$GHCziIOziEncodingziUTF16_zdwa5.J(T5,U5,V5,W5,X5,Y5,Q5,R5);
 },[Q5,R5]);
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
var $$GHCziIOziEncodingziUTF32_zdwa4=$f(8,function(a,b,c,d,e,f,g,h){
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
       var j1=$hs_int2Wordzh(E);
       var i1=$hs_narrow8Wordzh(j1);
       var h1=$hs_plusAddrzh(j,s);
       var g1=$hs_writeWord8OffAddrzh(h1,goog.math.Long.fromBits(0,0),i1,F);
       var c1=$hs_touchzh(k,g1);
       var f1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(8,0));
       var e1=$hs_int2Wordzh(f1);
       var b1=$hs_narrow8Wordzh(e1);
       var d1=s.add(goog.math.Long.fromBits(1,0));
       var a1=$hs_plusAddrzh(j,d1);
       var Z=$hs_writeWord8OffAddrzh(a1,goog.math.Long.fromBits(0,0),b1,c1);
       var V=$hs_touchzh(k,Z);
       var Y=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(16,0));
       var X=$hs_int2Wordzh(Y);
       var U=$hs_narrow8Wordzh(X);
       var W=s.add(goog.math.Long.fromBits(2,0));
       var T=$hs_plusAddrzh(j,W);
       var S=$hs_writeWord8OffAddrzh(T,goog.math.Long.fromBits(0,0),U,V);
       var O=$hs_touchzh(k,S);
       var R=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(24,0));
       var Q=$hs_int2Wordzh(R);
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
	var M1=$hs_int2Wordzh(E);
	var L1=$hs_narrow8Wordzh(M1);
	var K1=$hs_plusAddrzh(j,s);
	var J1=$hs_writeWord8OffAddrzh(K1,goog.math.Long.fromBits(0,0),L1,F);
	var F1=$hs_touchzh(k,J1);
	var I1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(8,0));
	var H1=$hs_int2Wordzh(I1);
	var E1=$hs_narrow8Wordzh(H1);
	var G1=s.add(goog.math.Long.fromBits(1,0));
	var D1=$hs_plusAddrzh(j,G1);
	var C1=$hs_writeWord8OffAddrzh(D1,goog.math.Long.fromBits(0,0),E1,F1);
	var y1=$hs_touchzh(k,C1);
	var B1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(16,0));
	var A1=$hs_int2Wordzh(B1);
	var x1=$hs_narrow8Wordzh(A1);
	var z1=s.add(goog.math.Long.fromBits(2,0));
	var w1=$hs_plusAddrzh(j,z1);
	var v1=$hs_writeWord8OffAddrzh(w1,goog.math.Long.fromBits(0,0),x1,y1);
	var r1=$hs_touchzh(k,v1);
	var u1=$hs_uncheckedIShiftRAzh(E,goog.math.Long.fromBits(24,0));
	var t1=$hs_int2Wordzh(u1);
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
var $$GHCziIOziEncodingziUTF32_mkUTF32le2=$f(3,function(Y1,Z1,a2){
 $M(Y1,function(b2){
  var c2=b2.v[0],d2=b2.v[1],e2=b2.v[2],f2=b2.v[3],g2=b2.v[4],h2=b2.v[5];
  $$GHCziIOziEncodingziUTF32_zdwa4.J(c2,d2,e2,f2,g2,h2,Z1,a2);
 },[Z1,a2]);
},[],"in `base:GHC.IO.Encoding.UTF32'");
var $$GHCziIOziEncodingziUTF32_zdwa1=$f(8,function(l2,m2,n2,o2,p2,q2,r2,s2){
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
       var u3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(24,0));
       var t3=$hs_int2Wordzh(u3);
       var s3=$hs_narrow8Wordzh(t3);
       var r3=$hs_plusAddrzh(u2,D2);
       var q3=$hs_writeWord8OffAddrzh(r3,goog.math.Long.fromBits(0,0),s3,Q2);
       var m3=$hs_touchzh(v2,q3);
       var p3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(16,0));
       var o3=$hs_int2Wordzh(p3);
       var l3=$hs_narrow8Wordzh(o3);
       var n3=D2.add(goog.math.Long.fromBits(1,0));
       var k3=$hs_plusAddrzh(u2,n3);
       var j3=$hs_writeWord8OffAddrzh(k3,goog.math.Long.fromBits(0,0),l3,m3);
       var f3=$hs_touchzh(v2,j3);
       var i3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(8,0));
       var h3=$hs_int2Wordzh(i3);
       var e3=$hs_narrow8Wordzh(h3);
       var g3=D2.add(goog.math.Long.fromBits(2,0));
       var d3=$hs_plusAddrzh(u2,g3);
       var c3=$hs_writeWord8OffAddrzh(d3,goog.math.Long.fromBits(0,0),e3,f3);
       var Z2=$hs_touchzh(v2,c3);
       var b3=$hs_int2Wordzh(P2);
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
	var X3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(24,0));
	var W3=$hs_int2Wordzh(X3);
	var V3=$hs_narrow8Wordzh(W3);
	var U3=$hs_plusAddrzh(u2,D2);
	var T3=$hs_writeWord8OffAddrzh(U3,goog.math.Long.fromBits(0,0),V3,Q2);
	var P3=$hs_touchzh(v2,T3);
	var S3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(16,0));
	var R3=$hs_int2Wordzh(S3);
	var O3=$hs_narrow8Wordzh(R3);
	var Q3=D2.add(goog.math.Long.fromBits(1,0));
	var N3=$hs_plusAddrzh(u2,Q3);
	var M3=$hs_writeWord8OffAddrzh(N3,goog.math.Long.fromBits(0,0),O3,P3);
	var I3=$hs_touchzh(v2,M3);
	var L3=$hs_uncheckedIShiftRAzh(P2,goog.math.Long.fromBits(8,0));
	var K3=$hs_int2Wordzh(L3);
	var H3=$hs_narrow8Wordzh(K3);
	var J3=D2.add(goog.math.Long.fromBits(2,0));
	var G3=$hs_plusAddrzh(u2,J3);
	var F3=$hs_writeWord8OffAddrzh(G3,goog.math.Long.fromBits(0,0),H3,I3);
	var C3=$hs_touchzh(v2,F3);
	var E3=$hs_int2Wordzh(P2);
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
var $$GHCziIOziEncodingziUTF32_mkUTF32be2=$f(3,function(j4,k4,l4){
 $M(j4,function(m4){
  var n4=m4.v[0],o4=m4.v[1],p4=m4.v[2],q4=m4.v[3],r4=m4.v[4],s4=m4.v[5];
  $$GHCziIOziEncodingziUTF32_zdwa1.J(n4,o4,p4,q4,r4,s4,k4,l4);
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
var $$GHCziIOziException_userError=$f(1,function(s){
 $R(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_UserError,$$GHCziTypes_ZMZN,s,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],"IOError");
},[],"at libraries/base/GHC/IO/Exception.hs:287:1");
var $$GHCziIOziException_zdfShowArrayException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J(": ");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdwzdcshowsPrec2=$f(2,function(D3,E3){
 $M(D3,function(F3){
  switch(F3.g){
  case 1:
   $$GHCziBase_zpzp.J($$GHCziIOziException$a,E3);break;
  case 2:
   $$GHCziBase_zpzp.J($$GHCziIOziException$b,E3);break;
  case 3:
   $$GHCziBase_zpzp.J($$GHCziIOziException$c,E3);break;
  case 4:
   $$GHCziBase_zpzp.J($$GHCziIOziException$d,E3);break;
  case 5:
   $$GHCziBase_zpzp.J($$GHCziIOziException$e,E3);break;
  case 6:
   $$GHCziBase_zpzp.J($$GHCziIOziException$f,E3);break;
  case 7:
   $$GHCziBase_zpzp.J($$GHCziIOziException$g,E3);break;
  case 8:
   $$GHCziBase_zpzp.J($$GHCziIOziException$h,E3);break;
  case 9:
   $$GHCziBase_zpzp.J($$GHCziIOziException$i,E3);break;
  case 10:
   $$GHCziBase_zpzp.J($$GHCziIOziException$j,E3);break;
  case 11:
   $$GHCziBase_zpzp.J($$GHCziIOziException$k,E3);break;
  case 12:
   $$GHCziBase_zpzp.J($$GHCziIOziException$l,E3);break;
  case 13:
   $$GHCziBase_zpzp.J($$GHCziIOziException$m,E3);break;
  case 14:
   $$GHCziBase_zpzp.J($$GHCziIOziException$n,E3);break;
  case 15:
   $$GHCziBase_zpzp.J($$GHCziIOziException$o,E3);break;
  case 16:
   $$GHCziBase_zpzp.J($$GHCziIOziException$p,E3);break;
  case 17:
   $$GHCziBase_zpzp.J($$GHCziIOziException$q,E3);break;
  case 18:
   $$GHCziBase_zpzp.J($$GHCziIOziException$r,E3);break;
  case 19:
   $$GHCziBase_zpzp.J($$GHCziIOziException$s,E3);break;
  }
 },[E3]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J(" (");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOException1=$D(1,function(){
 $r([")"]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdwzdcshowsPrec1=$f(2,function(Z3,a4){
 $M(Z3,function(b4){
  var c4=b4.v[0],d4=b4.v[1],e4=b4.v[2],f4=b4.v[3],g4=b4.v[5];
  var h4=$t(function(){
   var i4=$t(function(){
    var j4=$t(function(){
     $M(f4,function(k4){
      switch(k4.g){
      case 1:
       $A(a4);break;
      case 2:
       var l4=$t(function(){
	var m4=$d(2,[$$GHCziIOziException_zdfShowIOException1,a4],"sat");
	$$GHCziBase_zpzp.J(k4,m4);
       },[a4,k4],"sat");
       $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowIOException2,l4);break;
      }
     },[a4]);
    },[f4,a4],"sat");
    $$GHCziIOziException_zdwzdcshowsPrec2.J(d4,j4);
   },[d4,f4,a4],"a2");
   $M(e4,function(n4){
    switch(n4.g){
    case 1:
     $A(i4);break;
    case 2:
     var o4=$t(function(){
      $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowArrayException2,i4);
     },[i4],"sat");
     $$GHCziBase_zpzp.J(n4,o4);break;
    }
   },[i4]);
  },[d4,f4,a4,e4],"a1");
  $M(g4,function(p4){
   switch(p4.g){
   case 1:
    $M(c4,function(q4){
     switch(q4.g){
     case 1:
      $A(h4);break;
     case 2:
      var r4=q4.v[0];
      $M(r4,function(s4){
       switch(s4.g){
       case 1:
	var t4=s4.v[0];
	var u4=$t(function(){
	 var v4=$t(function(){
	  $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowArrayException2,h4);
	 },[h4],"sat");
	 var w4=$d(2,[$$GHCziIOziHandleziTypes_showHandle1,v4],"sat");
	 $$GHCziBase_zpzp.J(t4,w4);
	},[h4,t4],"sat");
	$$GHCziBase_zpzp.J($$GHCziIOziHandleziTypes_showHandle2,u4);break;
       case 2:
	var x4=s4.v[0];
	var y4=$t(function(){
	 var z4=$t(function(){
	  $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowArrayException2,h4);
	 },[h4],"sat");
	 var A4=$d(2,[$$GHCziIOziHandleziTypes_showHandle1,z4],"sat");
	 $$GHCziBase_zpzp.J(x4,A4);
	},[h4,x4],"sat");
	$$GHCziBase_zpzp.J($$GHCziIOziHandleziTypes_showHandle2,y4);break;
       }
      },[h4]);break;
     }
    },[h4]);break;
   case 2:
    var B4=p4.v[0];
    var C4=$t(function(){
     $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowArrayException2,h4);
    },[h4],"sat");
    $$GHCziBase_zpzp.J(B4,C4);break;
   }
  },[h4,c4]);
 },[a4]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOExceptionzuzdcshowsPrec=$f(3,function(D4,E4,F4){
 $$GHCziIOziException_zdwzdcshowsPrec1.J(E4,F4);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOExceptionzuzdcshowList=$f(2,function(G4,H4){
 $M(G4,function(I4){
  switch(I4.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",H4);break;
  case 2:
   var J4=I4.v[0],K4=I4.v[1];
   var L4=$t(function(){
    var M4=$t(function(){
     var N4=$d(2,[$$GHCziShow_showListzuzu2,H4],"lvl20");
     var O4=$f(1,function(P4){
      $M(P4,function(Q4){
       switch(Q4.g){
       case 1:
	$A(N4);break;
       case 2:
	var R4=Q4.v[0],S4=Q4.v[1];
	var T4=$t(function(){
	 var U4=$t(function(){
	  O4.J(S4);
	 },[S4,O4],"sat");
	 $$GHCziIOziException_zdwzdcshowsPrec1.J(R4,U4);
	},[R4,S4,O4],"sat");
	$R(2,[$$GHCziShow_showListzuzu1,T4],":");break;
       }
      },[N4,O4]);
     },[N4],"showl");
     O4.J(K4);
    },[H4,K4],"sat");
    $$GHCziIOziException_zdwzdcshowsPrec1.J(J4,M4);
   },[H4,J4,K4],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,L4],":");break;
  }
 },[H4]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowIOExceptionzuzdcshow=$f(1,function(V4){
 $$GHCziIOziException_zdwzdcshowsPrec1.J(V4,$$GHCziTypes_ZMZN);
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
var $$GHCziIOziException_zdfTypeableDeadlockzuzdctypeOf=$f(1,function(la){
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
var $$GHCziIOziException_zdfTypeableAsyncExceptionzuzdctypeOf=$f(1,function(Fa){
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
var $$GHCziIOziException_zdfTypeableIOExceptionzuzdctypeOf=$f(1,function(jb){
 $A($$GHCziIOziException_zdfTypeableIOException1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOExceptionzuzdcfromException=$f(1,function(kb){
 $M(kb,function(lb){
  var mb=lb.v[0],nb=lb.v[1];
  $$GHCziException_zdp1Exception.C([mb,nb],function(ob){
   var pb=ob.v[0],qb=ob.v[1];
   var rb=$hs_eqWordzh(pb,goog.math.Long.fromBits(4053623282,1685460941));
   switch(rb.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var sb=$hs_eqWordzh(qb,goog.math.Long.fromBits(3693590983,2507416641));
    switch(sb.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[nb],"Just");break;
    }break;
   }
  },[nb]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOException=$D(1,function(){
 $r([$$GHCziIOziException_zdfTypeableIOExceptionzuzdctypeOf,$$GHCziIOziException_zdfShowIOException,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException,$$GHCziIOziException_zdfExceptionIOExceptionzuzdcfromException]);
},"at libraries/base/GHC/IO/Exception.hs:221:10");
var $$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException=$f(1,function(t){
 $R(1,[$$GHCziIOziException_zdfExceptionIOException,t],"SomeException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfxExceptionIOException=$t(function(){
 $A($$GHCziIOziException_zdfExceptionIOException);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_ioException=$f(2,function(I7,t){
 $$GHCziIOziException$t.J(I7,t);
},[],"at libraries/base/GHC/IO/Exception.hs:188:1");
var $$GHCziIOziException_ioError=$f(2,function(I7,t){
 $$GHCziIOziException$t.J(I7,t);
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
var $$GHCziIOziException$t=$F(2,function(Yd,Zd){
 var ae=$t(function(){
  $$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException.J(Yd);
 },[Yd],"sat");
 $r($hs_raiseIOzh(ae,Zd));
},"a");
var $$GHCziIOziFD_zdfIODeviceFD4=$f(3,function(Q,R,S){
 var T=$t(function(){
  $M(R,function(U){
   switch(U.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[]);
 },[R],"sat");
 var V=$t(function(){
  $M(Q,function(W){
   var X=W.v[0];
   $R(1,[X],"I32#");
  },[]);
 },[Q],"sat");
 $$SystemziPosixziInternals_setCooked1.J(V,T,S);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD5=$f(2,function(b1,c1){
 var d1=$t(function(){
  $M(b1,function(e1){
   var f1=e1.v[0];
   $R(1,[f1],"I32#");
  },[]);
 },[b1],"sat");
 $$SystemziPosixziInternals_getEcho5.J(d1,$$SystemziPosixziInternals_getEcho2,c1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD6=$f(3,function(g1,h1,i1){
 var j1=$t(function(){
  $M(g1,function(k1){
   var l1=k1.v[0];
   $R(1,[l1],"I32#");
  },[]);
 },[g1],"sat");
 $$SystemziPosixziInternals_setEcho1.J(j1,h1,i1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD9=$f(2,function(m1,n1){
 var o1=$t(function(){
  $M(m1,function(p1){
   var q1=p1.v[0];
   $R(1,[q1],"I32#");
  },[]);
 },[m1],"sat");
 $$SystemziPosixziInternals_fdFileSizze1.J(o1,n1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD17=$f(3,function(r1,s1,t1){
 var u1=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,t1);
 var v1=u1[0],w1=u1[1];
 var x1=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(8096,0),v1);
 var y1=x1[0],z1=x1[1];
 var A1=$d(1,[w1],"sat");
 var B1=$d(2,[z1,A1],"sat");
 var D1=$hs_byteArrayContentszh(z1);
 var C1=$d(1,[D1,B1,s1,goog.math.Long.fromBits(8096,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
 $r([y1,C1]);
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
var $$GHCziIOziFD_zdfTypeableFDzuzdctypeOf=$f(1,function(E1){
 $A($$GHCziIOziFD_zdfTypeableFD1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzupred=$f(1,function(F1){
 $M(F1,function(G1){
  var H1=G1.v[0];
  $M(H1,function(I1){
   switch(I1.toString()){
   case "-1":
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("seek");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa9=$f(4,function(J1,K1,L1,M1){
 $$GHCziIntegerziType_integerToInt.C([L1],function(O1){
  var N1=$f(1,function(P1){
   var Q1=$f(1,function(R1){
    var $ff=__hscore_lseek(J1,O1,P1);
    var S1=[R1,$ff];
    var T1=S1[0],U1=S1[1];
    var V1=$d(1,[U1],"sat");
    $r([T1,V1]);
   },[J1,O1,P1],"sat");
   $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFDzupred,$$GHCziIOziFD_zdfIODeviceFDzuloc2,Q1,M1],function(W1){
    var X1=W1[0];
    $r([X1,$$GHCziTuple_Z0T]);
   },[]);
  },[J1,O1,M1],"$j");
  $M(K1,function(Y1){
   switch(Y1.g){
   case 1:
    var $ff=__hscore_seek_set();
    var Z1=[$$GHCziPrim_realWorldzh,$ff];
    var a2=Z1[1];
    var b2=$hs_narrow32Intzh(a2);
    N1.J(b2);break;
   case 2:
    var $ff=__hscore_seek_cur();
    var c2=[$$GHCziPrim_realWorldzh,$ff];
    var d2=c2[1];
    var e2=$hs_narrow32Intzh(d2);
    N1.J(e2);break;
   case 3:
    var $ff=__hscore_seek_end();
    var f2=[$$GHCziPrim_realWorldzh,$ff];
    var g2=f2[1];
    var h2=$hs_narrow32Intzh(g2);
    N1.J(h2);break;
   }
  },[J1,O1,M1,N1]);
 },[J1,M1,K1]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD13=$f(4,function(i2,j2,k2,l2){
 $M(i2,function(m2){
  var n2=m2.v[0];
  $$GHCziIOziFD_zdwa9.J(n2,j2,k2,l2);
 },[j2,k2,l2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD12=$f(1,function(a1){
 $$GHCziIOziFD_zdfIODeviceFDzupred.J(a1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD11=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hGetPosn");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa8=$f(2,function(p2,q2){
 var $ff=__hscore_seek_cur();
 var r2=[$$GHCziPrim_realWorldzh,$ff];
 var s2=r2[1];
 var t2=$f(1,function(u2){
  var z2=$hs_narrow32Intzh(s2);
  var $ff=__hscore_lseek(p2,goog.math.Long.fromBits(0,0),z2);
  var v2=[u2,$ff];
  var w2=v2[0],x2=v2[1];
  var y2=$d(1,[x2],"sat");
  $r([w2,y2]);
 },[p2,s2],"sat");
 $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFD12,$$GHCziIOziFD_zdfIODeviceFD11,t2,q2],function(A2){
  var B2=A2[0],C2=A2[1];
  var D2=$t(function(){
   $M(C2,function(E2){
    var F2=E2.v[0];
    $$GHCziIntegerziType_smallInteger.J(F2);
   },[]);
  },[C2],"sat");
  $r([B2,D2]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD10=$f(2,function(G2,H2){
 $M(G2,function(I2){
  var J2=I2.v[0];
  $$GHCziIOziFD_zdwa8.J(J2,H2);
 },[H2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD8=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.setSize");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa7=$f(3,function(K2,L2,M2){
 $$GHCziIntegerziType_integerToInt.C([L2],function(Z2){
  var $ff=__hscore_ftruncate(K2,Z2);
  var N2=[M2,$ff];
  var O2=N2[0],P2=N2[1];
  var Q2=$hs_narrow32Intzh(P2);
  switch(Q2.toString()){
  case "0":
   $r([O2,$$GHCziTuple_Z0T]);break;
  default:
   var $ff=__hscore_get_errno();
   var R2=[O2,$ff];
   var S2=R2[0],T2=R2[1];
   var V2=$hs_narrow32Intzh(T2);
   var U2=$d(1,[V2],"sat");
   $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziFD_zdfIODeviceFD8,U2,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(W2){
    $$GHCziIOziException_ioError.C([W2,S2],function(X2){
     var Y2=X2[0];
     $r([Y2,$$GHCziTuple_Z0T]);
    },[]);
   },[S2]);
  }
 },[K2,M2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD7=$f(3,function(a3,b3,c3){
 $M(a3,function(d3){
  var e3=d3.v[0];
  $$GHCziIOziFD_zdwa7.J(e3,b3,c3);
 },[b3,c3]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_stdout=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:299:1");
var $$GHCziIOziFD_zdwa13=$f(7,function(f3,g3,h3,i3,j3,k3,l3){
 var m3=$f(1,function(n3){
  var $ff=rtsSupportsBoundThreads();
  var o3=[$$GHCziPrim_realWorldzh,$ff];
  var p3=o3[1];
  $M(p3,function(q3){
   switch(q3.toString()){
   case "0":
    var u3=$hs_narrow32Intzh(g3);
    $b($hs_waitWritezh,[u3,n3],function(t3){
     $r([t3,$$GHCziTuple_Z0T]);
    },[]);break;
   default:
    var s3=$hs_narrow32Intzh(g3);
    var r3=$d(1,[s3],"sat");
    $$GHCziEventziThread_threadWaitRead1.J($$GHCziEventziInternal_evtWrite,r3,n3);
   }
  },[g3,n3]);
 },[g3],"a");
 var v3=$f(2,function(w3,x3){
  $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,f3,w3,m3,x3],function(y3){
   var z3=y3[0],A3=y3[1];
   var B3=$t(function(){
    $M(A3,function(C3){
     var D3=C3.v[0];
     var E3=$hs_narrow32Intzh(D3);
     $R(1,[E3],"I32#");
    },[]);
   },[A3],"sat");
   $r([z3,B3]);
  },[]);
 },[m3,f3],"$sa");
 var F3=$f(1,function(G3){
  var H3=$f(1,function(I3){
   $M(i3,function(J3){
    var K3=J3.v[0];
    $M(j3,function(L3){
     var M3=L3.v[0];
     $M(k3,function(N3){
      var O3=N3.v[0];
      var T3=$hs_plusAddrzh(K3,M3);
      var $ff=write(g3,T3,O3);
      var P3=[I3,$ff];
      var Q3=P3[0],R3=P3[1];
      var S3=$d(1,[R3],"sat");
      $r([Q3,S3]);
     },[g3,K3,M3,I3]);
    },[g3,k3,K3,I3]);
   },[g3,j3,k3,I3]);
  },[g3,i3,j3,k3],"sat");
  v3.J(H3,G3);
 },[g3,v3,i3,j3,k3],"a1");
 $M(h3,function(U3){
  switch(U3.toString()){
  case "0":
   var $ff=fdReady(g3,goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var V3=[l3,$ff];
   var W3=V3[0],X3=V3[1];
   var Y3=$f(1,function(Z3){
    var $ff=rtsSupportsBoundThreads();
    var a4=[$$GHCziPrim_realWorldzh,$ff];
    var b4=a4[1];
    $M(b4,function(c4){
     switch(c4.toString()){
     case "0":
      F3.J(Z3);break;
     default:
      $M(i3,function(d4){
       var e4=d4.v[0];
       $M(j3,function(f4){
	var g4=f4.v[0];
	$M(k3,function(h4){
	 var i4=h4.v[0];
	 var j4=$f(1,function(k4){
	  var p4=$hs_plusAddrzh(e4,g4);
	  var $ff=write(g3,p4,i4);
	  var l4=[k4,$ff];
	  var m4=l4[0],n4=l4[1];
	  var o4=$d(1,[n4],"sat");
	  $r([m4,o4]);
	 },[g3,e4,g4,i4],"sat");
	 v3.J(j4,Z3);
	},[g3,m3,f3,v3,e4,g4,Z3]);
       },[g3,m3,f3,v3,k3,e4,Z3]);
      },[g3,m3,f3,v3,j3,k3,Z3]);
     }
    },[g3,m3,f3,v3,i3,j3,k3,F3,Z3]);
   },[g3,v3,i3,j3,k3,F3],"a2");
   var q4=$hs_narrow32Intzh(X3);
   switch(q4.toString()){
   case "0":
    var $ff=rtsSupportsBoundThreads();
    var r4=[$$GHCziPrim_realWorldzh,$ff];
    var s4=r4[1];
    $M(s4,function(t4){
     switch(t4.toString()){
     case "0":
      var z4=$hs_narrow32Intzh(g3);
      $b($hs_waitWritezh,[z4,W3],function(y4){
       Y3.J(y4);
      },[g3,m3,f3,v3,i3,j3,k3,F3,Y3]);break;
     default:
      var v4=$hs_narrow32Intzh(g3);
      var u4=$d(1,[v4],"sat");
      $$GHCziEventziThread_threadWaitRead1.C([$$GHCziEventziInternal_evtWrite,u4,W3],function(w4){
       var x4=w4[0];
       Y3.J(x4);
      },[g3,m3,f3,v3,i3,j3,k3,F3,Y3]);
     }
    },[g3,m3,f3,v3,i3,j3,k3,F3,Y3,W3]);break;
   default:
    Y3.J(W3);
   }break;
  default:
   F3.J(l3);
  }
 },[g3,m3,f3,v3,i3,j3,k3,F3,l3]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa4=$f(7,function(L4,M4,N4,O4,P4,Q4,R4){
 var T4=$hs_narrow32Intzh(M4);
 var S4=$d(1,[T4],"lvl3");
 var U4=$f(1,function(V4){
  var $ff=rtsSupportsBoundThreads();
  var W4=[$$GHCziPrim_realWorldzh,$ff];
  var X4=W4[1];
  $M(X4,function(Y4){
   switch(Y4.toString()){
   case "0":
    var a5=$hs_narrow32Intzh(M4);
    $b($hs_waitReadzh,[a5,V4],function(Z4){
     $r([Z4,$$GHCziTuple_Z0T]);
    },[]);break;
   default:
    $$GHCziEventziThread_threadWaitRead1.J($$GHCziEventziInternal_evtRead,S4,V4);
   }
  },[M4,S4,V4]);
 },[M4,S4],"a1");
 var b5=$f(1,function(c5){
  var d5=$f(1,function(e5){
   $M(O4,function(f5){
    var g5=f5.v[0];
    $M(P4,function(h5){
     var i5=h5.v[0];
     $M(Q4,function(j5){
      var k5=j5.v[0];
      var p5=$hs_plusAddrzh(g5,i5);
      var $ff=read(M4,p5,k5);
      var l5=[e5,$ff];
      var m5=l5[0],n5=l5[1];
      var o5=$d(1,[n5],"sat");
      $r([m5,o5]);
     },[M4,g5,i5,e5]);
    },[M4,Q4,g5,e5]);
   },[M4,P4,Q4,e5]);
  },[M4,O4,P4,Q4],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,L4,d5,U4,c5],function(q5){
   var r5=q5[0],s5=q5[1];
   var t5=$t(function(){
    $M(s5,function(u5){
     var v5=u5.v[0];
     $R(1,[v5],"I#");
    },[]);
   },[s5],"sat");
   $r([r5,t5]);
  },[]);
 },[M4,U4,L4,O4,P4,Q4],"a2");
 $M(N4,function(w5){
  switch(w5.toString()){
  case "0":
   var $ff=fdReady(M4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var x5=[R4,$ff];
   var y5=x5[0],z5=x5[1];
   var A5=$f(1,function(B5){
    var $ff=rtsSupportsBoundThreads();
    var C5=[$$GHCziPrim_realWorldzh,$ff];
    var D5=C5[1];
    $M(D5,function(E5){
     switch(E5.toString()){
     case "0":
      b5.J(B5);break;
     default:
      $M(O4,function(F5){
       var G5=F5.v[0];
       $M(P4,function(H5){
	var I5=H5.v[0];
	$M(Q4,function(J5){
	 var K5=J5.v[0];
	 var L5=$f(1,function(M5){
	  var R5=$hs_plusAddrzh(G5,I5);
	  var $ff=read(M4,R5,K5);
	  var N5=[M5,$ff];
	  var O5=N5[0],P5=N5[1];
	  var Q5=$d(1,[P5],"sat");
	  $r([O5,Q5]);
	 },[M4,G5,I5,K5],"sat");
	 $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,L4,L5,U4,B5],function(S5){
	  var T5=S5[0],U5=S5[1];
	  var V5=$t(function(){
	   $M(U5,function(W5){
	    var X5=W5.v[0];
	    $R(1,[X5],"I#");
	   },[]);
	  },[U5],"sat");
	  $r([T5,V5]);
	 },[]);
	},[M4,U4,L4,G5,I5,B5]);
       },[M4,U4,L4,Q4,G5,B5]);
      },[M4,U4,L4,P4,Q4,B5]);
     }
    },[M4,U4,L4,O4,P4,Q4,b5,B5]);
   },[M4,U4,L4,O4,P4,Q4,b5],"a3");
   var Y5=$f(1,function(Z5){
    var $ff=rtsSupportsBoundThreads();
    var a6=[$$GHCziPrim_realWorldzh,$ff];
    var b6=a6[1];
    $M(b6,function(c6){
     switch(c6.toString()){
     case "0":
      var g6=$hs_narrow32Intzh(M4);
      $b($hs_waitReadzh,[g6,Z5],function(f6){
       A5.J(f6);
      },[M4,U4,L4,O4,P4,Q4,b5,A5]);break;
     default:
      $$GHCziEventziThread_threadWaitRead1.C([$$GHCziEventziInternal_evtRead,S4,Z5],function(d6){
       var e6=d6[0];
       A5.J(e6);
      },[M4,U4,L4,O4,P4,Q4,b5,A5]);
     }
    },[M4,S4,U4,L4,O4,P4,Q4,b5,A5,Z5]);
   },[M4,S4,A5],"a4");
   var h6=$hs_narrow32Intzh(z5);
   switch(h6.toString()){
   case "-1":
    var $ff=__hscore_get_errno();
    var i6=[y5,$ff];
    var j6=i6[0],k6=i6[1];
    var m6=$hs_narrow32Intzh(k6);
    var l6=$d(1,[m6],"sat");
    $$ForeignziCziError_errnoToIOError.C([L4,l6,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(n6){
     $$GHCziIOziException_ioError.C([n6,j6],function(o6){
      var p6=o6[0],q6=o6[1];
      $M(q6,function(r6){
       var s6=r6.v[0];
       $M(s6,function(t6){
	switch(t6.toString()){
	case "0":
	 Y5.J(p6);break;
	default:
	 A5.J(p6);
	}
       },[M4,S4,U4,L4,O4,P4,Q4,b5,A5,Y5,p6]);
      },[M4,S4,U4,L4,O4,P4,Q4,b5,A5,Y5,p6]);
     },[M4,S4,U4,L4,O4,P4,Q4,b5,A5,Y5]);
    },[M4,S4,U4,L4,O4,P4,Q4,b5,A5,Y5,j6]);break;
   case "0":
    Y5.J(y5);break;
   default:
    A5.J(y5);
   }break;
  default:
   b5.J(R4);
  }
 },[M4,S4,U4,L4,O4,P4,Q4,b5,R4]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfRawIOFD3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdWrite");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa=$f(5,function(D6,E6,F6,G6,H6){
 var J6=$hs_int2Wordzh(G6);
 var I6=$d(1,[J6],"sat");
 $$GHCziIOziFD_zdwa13.C([$$GHCziIOziFD_zdfRawIOFD3,D6,E6,F6,$$GHCziIOziFD_zdfBufferedIOFD2,I6,H6],function(K6){
  var L6=K6[0],M6=K6[1];
  $M(M6,function(N6){
   var O6=N6.v[0];
   var P6=O6.lessThan(G6)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(P6.g){
   case 1:
    $r([L6,$$GHCziTuple_Z0T]);break;
   case 2:
    var U6=G6.subtract(O6);
    var Q6=$t(function(){
     $M(F6,function(R6){
      var S6=R6.v[0];
      var T6=$hs_plusAddrzh(S6,O6);
      $R(1,[T6],"Ptr");
     },[O6]);
    },[F6,O6],"sat");
    $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa.J(D6,E6,Q6,U6,L6);break;
   }
  },[D6,E6,F6,G6,L6]);
 },[D6,E6,F6,G6]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD16=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdRead");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD15=$f(2,function(J7,K7){
 $M(J7,function(L7){
  var M7=L7.v[0];
  var $ff=isatty(M7);
  var N7=[K7,$ff];
  var O7=N7[0],P7=N7[1];
  var Q7=$t(function(){
   var R7=$hs_narrow32Intzh(P7);
   switch(R7.toString()){
   case "0":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[P7],"sat");
  $r([O7,Q7]);
 },[K7]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD21=$f(1,function(S7){
 $M(S7,function(T7){
  var U7=T7.v[0];
  $M(U7,function(V7){
   switch(V7.toString()){
   case "-1":
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD20=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.ready");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa11=$f(4,function(W7,X7,Y7,Z7){
 var a8=$f(1,function(b8){
  var c8=$f(1,function(d8){
   var k8=$hs_narrow32Intzh(Y7);
   var j8=$hs_narrow32Intzh(b8);
   var $ff=fdReady(W7,j8,k8,goog.math.Long.fromBits(0,0));
   var e8=[d8,$ff];
   var f8=e8[0],g8=e8[1];
   var i8=$hs_narrow32Intzh(g8);
   var h8=$d(1,[i8],"sat");
   $r([f8,h8]);
  },[W7,b8,Y7],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFD21,$$GHCziIOziFD_zdfIODeviceFD20,c8,Z7],function(l8){
   var m8=l8[0],n8=l8[1];
   var o8=$t(function(){
    $M(n8,function(p8){
     var q8=p8.v[0];
     $M(q8,function(r8){
      switch(r8.toString()){
      case "0":
       $R(1,[],"False");break;
      case "1":
       $R(2,[],"True");break;
      default:
       $A($$GHCziEnum_zdfEnumBool3);
      }
     },[]);
    },[]);
   },[n8],"sat");
   $r([m8,o8]);
  },[]);
 },[W7,Y7,Z7],"$j");
 $M(X7,function(s8){
  switch(s8.g){
  case 1:
   a8.J(goog.math.Long.fromBits(0,0));break;
  case 2:
   a8.J(goog.math.Long.fromBits(1,0));break;
  }
 },[W7,Y7,Z7,a8]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD19=$f(4,function(t8,u8,v8,w8){
 $M(t8,function(x8){
  var y8=x8.v[0];
  $M(v8,function(z8){
   var A8=z8.v[0];
   $$GHCziIOziFD_zdwa11.J(y8,u8,A8,w8);
  },[y8,u8,w8]);
 },[v8,u8,w8]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.dup2");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa5=$f(4,function(K8,L8,M8,N8){
 var $ff=dup2(K8,M8);
 var O8=[N8,$ff];
 var P8=O8[0],Q8=O8[1];
 var R8=$hs_narrow32Intzh(Q8);
 switch(R8.toString()){
 case "-1":
  var $ff=__hscore_get_errno();
  var T8=[P8,$ff];
  var U8=T8[0],V8=T8[1];
  var X8=$hs_narrow32Intzh(V8);
  var W8=$d(1,[X8],"sat");
  $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziFD_zdfIODeviceFDzuloc,W8,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(Y8){
   $$GHCziIOziException_ioError.C([Y8,U8],function(Z8){
    var a9=Z8[0];
    var b9=$d(1,[M8,L8],"sat");
    $r([a9,b9]);
   },[M8,L8]);
  },[M8,L8,U8]);break;
 default:
  var S8=$d(1,[M8,L8],"sat");
  $r([P8,S8]);
 }
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD1=$f(3,function(c9,d9,e9){
 $M(c9,function(f9){
  var g9=f9.v[0],h9=f9.v[1];
  $M(d9,function(i9){
   var j9=i9.v[0];
   $$GHCziIOziFD_zdwa5.J(g9,h9,j9,e9);
  },[g9,h9,e9]);
 },[d9,e9]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.dup");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa6=$f(3,function(k9,l9,m9){
 var $ff=dup(k9);
 var n9=[m9,$ff];
 var o9=n9[0],p9=n9[1];
 var q9=$hs_narrow32Intzh(p9);
 switch(q9.toString()){
 case "-1":
  var $ff=__hscore_get_errno();
  var s9=[o9,$ff];
  var t9=s9[0],u9=s9[1];
  var w9=$hs_narrow32Intzh(u9);
  var v9=$d(1,[w9],"sat");
  $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziFD_zdfIODeviceFDzuloc1,v9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(x9){
   $$GHCziIOziException_ioError.C([x9,t9],function(y9){
    var z9=y9[0],A9=y9[1];
    var B9=$t(function(){
     $M(A9,function(C9){
      var D9=C9.v[0];
      $R(1,[D9,l9],"FD");
     },[l9]);
    },[l9,A9],"sat");
    $r([z9,B9]);
   },[l9]);
  },[l9,t9]);break;
 default:
  var r9=$d(1,[q9,l9],"sat");
  $r([o9,r9]);
 }
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD2=$f(2,function(E9,F9){
 $M(E9,function(G9){
  var H9=G9.v[0],I9=G9.v[1];
  $$GHCziIOziFD_zdwa6.J(H9,I9,F9);
 },[F9]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD3=$f(2,function(J9,K9){
 var L9=$t(function(){
  $M(J9,function(M9){
   var N9=M9.v[0];
   $R(1,[N9],"I32#");
  },[]);
 },[J9],"sat");
 $$SystemziPosixziInternals_fdStat1.C([L9,K9],function(O9){
  var P9=O9[0],Q9=O9[1];
  $M(Q9,function(R9){
   var S9=R9.v[0];
   $r([P9,S9]);
  },[P9]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD14=$f(2,function(T9,U9){
 var V9=$t(function(){
  $M(T9,function(W9){
   var X9=W9.v[0];
   $R(1,[X9],"I32#");
  },[]);
 },[T9],"sat");
 $$SystemziPosixziInternals_fdStat1.C([V9,U9],function(Y9){
  var Z9=Y9[0],aa=Y9[1];
  $M(aa,function(ba){
   var ca=ba.v[0];
   var da=$t(function(){
    $M(ca,function(ea){
     switch(ea.g){
     case 3:
      $R(2,[],"True");break;
     case 4:
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }
    },[]);
   },[ca],"sat");
   $r([Z9,da]);
  },[Z9]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD17=$f(2,function(fa,ga){
 $M(fa,function(ha){
  var ia=ha.v[0];
  var $ff=unlockFile(ia);
  var ja=[ga,$ff];
  var ka=ja[0];
  $r([ka,$$GHCziTuple_Z0T]);
 },[ga]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzupred1=$f(1,function(a1){
 $$GHCziIOziFD_zdfIODeviceFD21.J(a1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.close");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa10=$f(2,function(la,ma){
 var na=$f(1,function(oa){
  var ua=$hs_narrow32Intzh(la);
  var $ff=close(ua);
  var pa=[oa,$ff];
  var qa=pa[0],ra=pa[1];
  var ta=$hs_narrow32Intzh(ra);
  var sa=$d(1,[ta],"sat");
  $r([qa,sa]);
 },[la],"sat");
 $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFDzupred1,$$GHCziIOziFD_zdfIODeviceFDzuloc3,na,ma],function(va){
  var wa=va[0];
  $r([wa,$$GHCziTuple_Z0T]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD18=$f(2,function(xa,ya){
 $M(xa,function(za){
  var Aa=za.v[0];
  $$GHCziIOziFD_zdwa10.J(Aa,ya);
 },[ya]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD16=$f(2,function(Ba,Ca){
 var Da=$f(1,function(a1){
  $$GHCziIOziFD_zdfIODeviceFD17.J(Ba,a1);
 },[Ba],"sat");
 var Ea=$f(1,function(Fa){
  var $ff=rtsSupportsBoundThreads();
  var Ga=[$$GHCziPrim_realWorldzh,$ff];
  var Ha=Ga[1];
  $M(Ha,function(Ia){
   switch(Ia.toString()){
   case "0":
    $M(Ba,function(Ua){
     var Va=Ua.v[0];
     var Wa=$hs_narrow32Intzh(Va);
     $$GHCziIOziFD_zdwa10.J(Wa,Fa);
    },[Fa]);break;
   default:
    $M($$GHCziEventziThread_eventManager,function(Ja){
     var Ka=Ja.v[0];
     var La=$hs_readMutVarzh(Ka,Fa);
     var Ma=La[0],Na=La[1];
     $M(Na,function(Oa){
      switch(Oa.g){
      case 1:
       $$GHCziIO_failIO.J($$GHCziEventziThread_closeFdWith2,Ma);break;
      case 2:
       var Pa=Oa.v[0];
       var Qa=$t(function(){
	$M(Ba,function(Ra){
	 var Sa=Ra.v[0];
	 var Ta=$hs_narrow32Intzh(Sa);
	 $R(1,[Ta],"I32#");
	},[]);
       },[Ba],"sat");
       $$GHCziEventziManager_closeFd1.J(Pa,$$GHCziIOziFD_zdfIODeviceFD18,Qa,Ma);break;
      }
     },[Ma,Ba]);
    },[Fa,Ba]);
   }
  },[Fa,Ba]);
 },[Ba],"sat");
 $$GHCziIO_finally1.J(Ea,Da,Ca);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD=$D(1,function(){
 $r([$$GHCziIOziFD_zdfIODeviceFD19,$$GHCziIOziFD_zdfIODeviceFD16,$$GHCziIOziFD_zdfIODeviceFD15,$$GHCziIOziFD_zdfIODeviceFD14,$$GHCziIOziFD_zdfIODeviceFD13,$$GHCziIOziFD_zdfIODeviceFD10,$$GHCziIOziFD_zdfIODeviceFD9,$$GHCziIOziFD_zdfIODeviceFD7,$$GHCziIOziFD_zdfIODeviceFD6,$$GHCziIOziFD_zdfIODeviceFD5,$$GHCziIOziFD_zdfIODeviceFD4,$$GHCziIOziFD_zdfIODeviceFD3,$$GHCziIOziFD_zdfIODeviceFD2,$$GHCziIOziFD_zdfIODeviceFD1]);
},"at libraries/base/GHC/IO/FD.hs:96:10");
var $$GHCziIOziFD_zdfBufferedIOFD6=$f(4,function(be,ce,de,ee){
 ce.C([ee],function(fe){
  var ge=fe[0],he=fe[1];
  $M(he,function(ie){
   var je=ie.v[0];
   $M(je,function(ke){
    switch(ke.toString()){
    case "-1":
     var $ff=__hscore_get_errno();
     var le=[ge,$ff];
     var me=le[0],ne=le[1];
     var oe=$hs_narrow32Intzh(ne);
     switch(oe.toString()){
     case "4":
      $$GHCziIOziFD_zdfBufferedIOFD6.J(be,ce,de,me);break;
     case "11":
      de.J(me);break;
     default:
      $$ForeignziCziError_throwErrno1.J(be,me);
     }break;
    default:
     $r([ge,ie]);
    }
   },[ce,ge,ie,be,de]);
  },[ce,ge,be,de]);
 },[ce,be,de]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD5=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD13=$f(1,function(pe){
 $r([pe,$$GHCziIOziFD_zdfBufferedIOFD5]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD14=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdReadNonBlocking");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFDzuloc=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdWriteNonBlocking");
},[],"at libraries/base/GHC/IO/FD.hs:542:26");
var $$GHCziIOziFD_zdfBufferedIOFD4=$f(1,function(Xf){
 $r([Xf,$$GHCziIOziFD_zdfBufferedIOFD5]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD3=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa1=$f(5,function(Yf,Zf,ag,bg,cg){
 var dg=$t(function(){
  $M(bg,function(eg){
   var fg=eg.v[0];
   var gg=$hs_int2Wordzh(fg);
   $R(1,[gg],"W64#");
  },[]);
 },[bg],"a");
 var hg=$f(1,function(ig){
  $M(ag,function(jg){
   var kg=jg.v[0];
   $M(dg,function(lg){
    var mg=lg.v[0];
    var ng=$f(1,function(og){
     var tg=$hs_plusAddrzh(kg,goog.math.Long.fromBits(0,0));
     var $ff=write(Yf,tg,mg);
     var pg=[og,$ff];
     var qg=pg[0],rg=pg[1];
     var sg=$d(1,[rg],"sat");
     $r([qg,sg]);
    },[Yf,kg,mg],"sat");
    $$GHCziIOziFD_zdfBufferedIOFD6.C([$$GHCziIOziFD_zdfBufferedIOFDzuloc,ng,$$GHCziIOziFD_zdfBufferedIOFD4,ig],function(ug){
     var vg=ug[0],wg=ug[1];
     $M(wg,function(xg){
      var yg=xg.v[0];
      $M(yg,function(zg){
       switch(zg.toString()){
       case "-1":
	$r([vg,$$GHCziIOziFD_zdfBufferedIOFD3]);break;
       default:
	var Bg=$hs_narrow32Intzh(zg);
	var Ag=$d(1,[Bg],"sat");
	$r([vg,Ag]);
       }
      },[vg]);
     },[vg]);
    },[]);
   },[Yf,kg,ig]);
  },[dg,Yf,ig]);
 },[dg,ag,Yf],"a1");
 $M(Zf,function(Cg){
  switch(Cg.toString()){
  case "0":
   var $ff=fdReady(Yf,goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var Jg=[cg,$ff];
   var Kg=Jg[0],Lg=Jg[1];
   var Mg=$hs_narrow32Intzh(Lg);
   switch(Mg.toString()){
   case "0":
    $r([Kg,$$GHCziIOziFD_zdfBufferedIOFD2]);break;
   default:
    var $ff=rtsSupportsBoundThreads();
    var Ng=[$$GHCziPrim_realWorldzh,$ff];
    var Og=Ng[1];
    $M(Og,function(Pg){
     switch(Pg.toString()){
     case "0":
      hg.C([Kg],function(jh){
       var kh=jh[0],lh=jh[1];
       var mh=$t(function(){
	$M(lh,function(nh){
	 var oh=nh.v[0];
	 $R(1,[oh],"I#");
	},[]);
       },[lh],"sat");
       $r([kh,mh]);
      },[]);break;
     default:
      $M(ag,function(Qg){
       var Rg=Qg.v[0];
       $M(dg,function(Sg){
	var Tg=Sg.v[0];
	var Ug=$f(1,function(Vg){
	 var ah=$hs_plusAddrzh(Rg,goog.math.Long.fromBits(0,0));
	 var $ff=write(Yf,ah,Tg);
	 var Wg=[Vg,$ff];
	 var Xg=Wg[0],Yg=Wg[1];
	 var Zg=$d(1,[Yg],"sat");
	 $r([Xg,Zg]);
	},[Yf,Rg,Tg],"sat");
	$$GHCziIOziFD_zdfBufferedIOFD6.C([$$GHCziIOziFD_zdfBufferedIOFDzuloc,Ug,$$GHCziIOziFD_zdfBufferedIOFD4,Kg],function(bh){
	 var ch=bh[0],dh=bh[1];
	 $M(dh,function(eh){
	  var fh=eh.v[0];
	  $M(fh,function(gh){
	   switch(gh.toString()){
	   case "-1":
	    $r([ch,$$GHCziIOziFD_zdfBufferedIOFD2]);break;
	   default:
	    var ih=$hs_narrow32Intzh(gh);
	    var hh=$d(1,[ih],"sat");
	    $r([ch,hh]);
	   }
	  },[ch]);
	 },[ch]);
	},[]);
       },[Yf,Rg,Kg]);
      },[dg,Yf,Kg]);
     }
    },[dg,ag,Yf,hg,Kg]);
   }break;
  default:
   hg.C([cg],function(Dg){
    var Eg=Dg[0],Fg=Dg[1];
    var Gg=$t(function(){
     $M(Fg,function(Hg){
      var Ig=Hg.v[0];
      $R(1,[Ig],"I#");
     },[]);
    },[Fg],"sat");
    $r([Eg,Gg]);
   },[]);
  }
 },[dg,ag,Yf,hg,cg]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD7=$f(3,function(wh,xh,yh){
 $M(wh,function(zh){
  var Ah=zh.v[0],Bh=zh.v[1];
  $M(xh,function(Ch){
   var Dh=Ch.v[0],Eh=Ch.v[1],Fh=Ch.v[2],Gh=Ch.v[3],Hh=Ch.v[4],Ih=Ch.v[5];
   var Ph=Ih.subtract(Hh);
   var Kh=$hs_plusAddrzh(Dh,Hh);
   var Jh=$d(1,[Kh],"sat");
   $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa.C([Ah,Bh,Jh,Ph,yh],function(Lh){
    var Mh=Lh[0];
    var Oh=$hs_touchzh(Eh,Mh);
    var Nh=$d(1,[Dh,Eh,Fh,Gh,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
    $r([Oh,Nh]);
   },[Dh,Eh,Fh,Gh]);
  },[Ah,Bh,yh]);
 },[xh,yh]);
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
var $$GHCziIOziFD_zdwa2=$f(9,function(Qh,Rh,Sh,Th,Uh,Vh,Wh,Xh,Yh){
 $M(Rh,function(Zh){
  switch(Zh.toString()){
  case "0":
   var $ff=fdReady(Qh,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var Ci=[Yh,$ff];
   var Di=Ci[0],Ei=Ci[1];
   var Fi=$hs_narrow32Intzh(Ei);
   switch(Fi.toString()){
   case "0":
    var kj=$hs_touchzh(Th,Di);
    var ij=$d(1,[Sh,Th,Uh,Vh,Wh,Xh],"sat");
    var jj=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD10,ij],"sat");
    $r([kj,jj]);break;
   default:
    var Gi=$f(1,function(Hi){
     var Pi=Vh.subtract(Xh);
     var Ni=$hs_int2Wordzh(Pi);
     var Oi=$hs_plusAddrzh(Sh,Xh);
     var Mi=$hs_plusAddrzh(Oi,goog.math.Long.fromBits(0,0));
     var $ff=read(Qh,Mi,Ni);
     var Ii=[Hi,$ff];
     var Ji=Ii[0],Ki=Ii[1];
     var Li=$d(1,[Ki],"sat");
     $r([Ji,Li]);
    },[Qh,Sh,Xh,Vh],"sat");
    $$GHCziIOziFD_zdfBufferedIOFD6.C([$$GHCziIOziFD_zdfBufferedIOFD14,Gi,$$GHCziIOziFD_zdfBufferedIOFD13,Di],function(Qi){
     var Ri=Qi[0],Si=Qi[1];
     $M(Si,function(Ti){
      var Ui=Ti.v[0];
      $M(Ui,function(Vi){
       switch(Vi.toString()){
       case "-1":
	var ej=$hs_touchzh(Th,Ri);
	var cj=$d(1,[Sh,Th,Uh,Vh,Wh,Xh],"sat");
	var dj=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD11,cj],"sat");
	$r([ej,dj]);break;
       case "0":
	var hj=$hs_touchzh(Th,Ri);
	var fj=$d(1,[Sh,Th,Uh,Vh,Wh,Xh],"sat");
	var gj=$d(1,[$$DataziMaybe_Nothing,fj],"sat");
	$r([hj,gj]);break;
       default:
	var bj=$hs_touchzh(Th,Ri);
	var Xi=Xh.add(Vi);
	var Wi=$d(1,[Sh,Th,Uh,Vh,Wh,Xi],"sat");
	var Yi=$d(1,[Vi],"sat");
	var Zi=$d(2,[Yi],"sat");
	var aj=$d(1,[Zi,Wi],"sat");
	$r([bj,aj]);
       }
      },[Sh,Xh,Vh,Th,Uh,Wh,Ri]);
     },[Sh,Xh,Vh,Th,Uh,Wh,Ri]);
    },[Sh,Xh,Vh,Th,Uh,Wh]);
   }break;
  default:
   var ai=$f(1,function(bi){
    var ji=Vh.subtract(Xh);
    var hi=$hs_int2Wordzh(ji);
    var ii=$hs_plusAddrzh(Sh,Xh);
    var gi=$hs_plusAddrzh(ii,goog.math.Long.fromBits(0,0));
    var $ff=read(Qh,gi,hi);
    var ci=[bi,$ff];
    var di=ci[0],ei=ci[1];
    var fi=$d(1,[ei],"sat");
    $r([di,fi]);
   },[Qh,Sh,Xh,Vh],"sat");
   $$GHCziIOziFD_zdfBufferedIOFD6.C([$$GHCziIOziFD_zdfBufferedIOFD14,ai,$$GHCziIOziFD_zdfBufferedIOFD13,Yh],function(ki){
    var li=ki[0],mi=ki[1];
    $M(mi,function(ni){
     var oi=ni.v[0];
     $M(oi,function(pi){
      switch(pi.toString()){
      case "-1":
       var yi=$hs_touchzh(Th,li);
       var wi=$d(1,[Sh,Th,Uh,Vh,Wh,Xh],"sat");
       var xi=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD12,wi],"sat");
       $r([yi,xi]);break;
      case "0":
       var Bi=$hs_touchzh(Th,li);
       var zi=$d(1,[Sh,Th,Uh,Vh,Wh,Xh],"sat");
       var Ai=$d(1,[$$DataziMaybe_Nothing,zi],"sat");
       $r([Bi,Ai]);break;
      default:
       var vi=$hs_touchzh(Th,li);
       var ri=Xh.add(pi);
       var qi=$d(1,[Sh,Th,Uh,Vh,Wh,ri],"sat");
       var si=$d(1,[pi],"sat");
       var ti=$d(2,[si],"sat");
       var ui=$d(1,[ti,qi],"sat");
       $r([vi,ui]);
      }
     },[Sh,Xh,Vh,Th,li,Uh,Wh]);
    },[Sh,Xh,Vh,Th,li,Uh,Wh]);
   },[Sh,Xh,Vh,Th,Uh,Wh]);
  }
 },[Qh,Sh,Xh,Vh,Yh,Th,Uh,Wh]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD9=$f(3,function(lj,mj,nj){
 $M(lj,function(oj){
  var pj=oj.v[0],qj=oj.v[1];
  $M(mj,function(rj){
   var sj=rj.v[0],tj=rj.v[1],uj=rj.v[2],vj=rj.v[3],wj=rj.v[4],xj=rj.v[5];
   $$GHCziIOziFD_zdwa2.J(pj,qj,sj,tj,uj,vj,wj,xj,nj);
  },[pj,qj,nj]);
 },[mj,nj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa=$f(9,function(yj,zj,Aj,Bj,Cj,Dj,Ej,Fj,Gj){
 var Ij=Fj.subtract(Ej);
 var Hj=$d(1,[Ij],"sat");
 var Kj=$hs_plusAddrzh(Aj,Ej);
 var Jj=$d(1,[Kj],"sat");
 $$GHCziIOziFD_zdwa1.C([yj,zj,Jj,Hj,Gj],function(Lj){
  var Mj=Lj[0],Nj=Lj[1];
  var Tj=$hs_touchzh(Bj,Mj);
  var Oj=$t(function(){
   $M(Nj,function(Pj){
    var Qj=Pj.v[0];
    var Rj=Qj.equals(Fj)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Rj.g){
    case 1:
     $R(1,[Aj,Bj,Cj,Dj,Qj,Fj],"Buffer");break;
    case 2:
     $R(1,[Aj,Bj,Cj,Dj,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
    }
   },[Aj,Fj,Bj,Cj,Dj]);
  },[Aj,Fj,Bj,Nj,Cj,Dj],"sat");
  var Sj=$d(1,[Nj,Oj],"sat");
  $r([Tj,Sj]);
 },[Aj,Fj,Bj,Cj,Dj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD1=$f(3,function(Uj,Vj,Wj){
 $M(Uj,function(Xj){
  var Yj=Xj.v[0],Zj=Xj.v[1];
  $M(Vj,function(ak){
   var bk=ak.v[0],ck=ak.v[1],dk=ak.v[2],ek=ak.v[3],fk=ak.v[4],gk=ak.v[5];
   $$GHCziIOziFD_zdwa.J(Yj,Zj,bk,ck,dk,ek,fk,gk,Wj);
  },[Yj,Zj,Wj]);
 },[Vj,Wj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa3=$f(9,function(hk,ik,jk,kk,lk,mk,nk,ok,pk){
 var Dk=mk.subtract(ok);
 var rk=$hs_int2Wordzh(Dk);
 var qk=$d(1,[rk],"sat");
 var tk=$hs_plusAddrzh(jk,ok);
 var sk=$d(1,[tk],"sat");
 $$GHCziIOziFD_zdwa4.C([$$GHCziIOziFD_zdfBufferedIOFD16,hk,ik,sk,$$GHCziIOziFD_zdfBufferedIOFD2,qk,pk],function(uk){
  var vk=uk[0],wk=uk[1];
  var Ck=$hs_touchzh(kk,vk);
  var xk=$t(function(){
   $M(wk,function(yk){
    var zk=yk.v[0];
    var Ak=ok.add(zk);
    $R(1,[jk,kk,lk,mk,nk,Ak],"Buffer");
   },[jk,ok,mk,kk,lk,nk]);
  },[jk,ok,mk,kk,wk,lk,nk],"sat");
  var Bk=$d(1,[wk,xk],"sat");
  $r([Ck,Bk]);
 },[jk,ok,mk,kk,lk,nk]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD15=$f(3,function(Ek,Fk,Gk){
 $M(Ek,function(Hk){
  var Ik=Hk.v[0],Jk=Hk.v[1];
  $M(Fk,function(Kk){
   var Lk=Kk.v[0],Mk=Kk.v[1],Nk=Kk.v[2],Ok=Kk.v[3],Pk=Kk.v[4],Qk=Kk.v[5];
   $$GHCziIOziFD_zdwa3.J(Ik,Jk,Lk,Mk,Nk,Ok,Pk,Qk,Gk);
  },[Ik,Jk,Gk]);
 },[Fk,Gk]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD8=$f(3,function(Rk,Sk,Tk){
 var Uk=$t(function(){
  $M(Sk,function(Vk){
   var Wk=Vk.v[0],Xk=Vk.v[1],Yk=Vk.v[3];
   $R(1,[Wk,Xk,$$GHCziIOziBuffer_WriteBuffer,Yk,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
  },[]);
 },[Sk],"sat");
 $r([Tk,Uk]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD=$D(1,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD17,$$GHCziIOziFD_zdfBufferedIOFD15,$$GHCziIOziFD_zdfBufferedIOFD9,$$GHCziIOziFD_zdfBufferedIOFD8,$$GHCziIOziFD_zdfBufferedIOFD7,$$GHCziIOziFD_zdfBufferedIOFD1]);
},"at libraries/base/GHC/IO/FD.hs:119:10");
var $$GHCziIOziFD$f=$F(1,function(Ul){
 $M(Ul,function(Vl){
  var Wl=Vl.v[0];
  $M(Wl,function(Xl){
   switch(Xl.toString()){
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
    },[X3,f4,i4,h4,W3],"a6");
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
var $$GHCziIOziHandleziInternals_wantSeekableHandle5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("handle is closed");
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_augmentIOError=$f(3,function(p,q,r){
 $M(p,function(s){
  var t=s.v[1],u=s.v[3],v=s.v[4],w=s.v[5];
  var x=$t(function(){
   $M(w,function(y){
    switch(y.g){
    case 1:
     $M(r,function(z){
      switch(z.g){
      case 1:
       var A=z.v[0];
       $R(2,[A],"Just");break;
      case 2:
       var B=z.v[0];
       $R(2,[B],"Just");break;
      }
     },[]);break;
    case 2:
     $A(y);break;
    }
   },[r]);
  },[r,w],"sat");
  var C=$d(2,[r],"sat");
  $R(1,[C,t,q,u,v,x],"IOError");
 },[r,q]);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:214:1");
var $$GHCziIOziHandleziInternals_ioezufinalizzedHandle=$f(1,function(D){
 var E=$d(2,[D],"sat");
 var F=$d(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$k,$$DataziMaybe_Nothing,E],"sat");
 $$GHCziException_throw2.J(F,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:345:1");
var $$GHCziIOziHandleziInternals_zdwa=$f(5,function(I,J,K,L,M){
 var N=$f(3,function(O,P,Q){
  I.C([O,P,Q],function(R){
   var S=R[0],T=R[1];
   $M(T,function(U){
    var V=U.v[0],W=U.v[1],X=U.v[2];
    $M(V,function(Y){
     switch(Y.g){
     case 3:
      $M(O,function(a1){
       var b1=a1.v[4];
       $M(W,function(c1){
	var d1=c1.v[4];
	var e1=b1.equals(d1)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(e1.g){
	case 1:
	 var f1=$d(1,[c1,X],"sat");
	 $r([S,f1]);break;
	case 2:
	 J.C([c1,X,S],function(g1){
	  var h1=g1[0],i1=g1[1];
	  $M(i1,function(j1){
	   var k1=j1.v[0],l1=j1.v[1];
	   N.J(k1,l1,h1);
	  },[I,J,h1,N]);
	 },[I,J,N]);break;
	}
       },[I,S,X,b1,J,N]);
      },[I,S,W,X,J,N]);break;
     default:
      var Z=$d(1,[W,X],"sat");
      $r([S,Z]);
     }
    },[O,I,S,W,X,J,N]);
   },[O,I,S,J,N]);
  },[O,I,J,N]);
 },[I,J],"$wa4");
 N.J(K,L,M);
},[],"in `base:GHC.IO.Handle.Internals'");
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
var $$GHCziIOziHandleziInternals_flushBuffer2=$f(2,function(i7,j7){
 $M(i7,function(k7){
  var l7=k7.v[0],m7=k7.v[3],n7=k7.v[5];
  var o7=$hs_readMutVarzh(n7,j7);
  var p7=o7[0],q7=o7[1];
  $M(q7,function(r7){
   var s7=r7.v[0],t7=r7.v[1],u7=r7.v[2],v7=r7.v[3],w7=r7.v[4],x7=r7.v[5];
   var y7=w7.equals(x7)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(y7.g){
   case 1:
    $$GHCziIOziDevice_isSeekable.C([l7,m7,p7],function(z7){
     var A7=z7[0],B7=z7[1];
     var C7=$f(1,function(D7){
      var E7=$t(function(){
       var G7=x7.subtract(w7);
       var F7=G7.negate();
       $$GHCziIntegerziType_smallInteger.J(F7);
      },[w7,x7],"sat");
      $$GHCziIOziDevice_seek.C([l7,m7,$$GHCziIOziDevice_RelativeSeek,E7,D7],function(H7){
       var I7=H7[0];
       var J7=$d(1,[s7,t7,u7,v7,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
       var K7=$hs_writeMutVarzh(n7,J7,I7);
       $r([K7,$$GHCziTuple_Z0T]);
      },[n7,s7,t7,u7,v7]);
     },[n7,w7,x7,l7,m7,s7,t7,u7,v7],"a7");
     $M(B7,function(L7){
      switch(L7.g){
      case 1:
       $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_flushBuffer3,A7],function(M7){
	var N7=M7[0];
	C7.J(N7);
       },[n7,w7,x7,l7,m7,s7,t7,u7,v7,C7]);break;
      case 2:
       C7.J(A7);break;
      }
     },[n7,w7,x7,l7,m7,s7,t7,u7,v7,C7,A7]);
    },[n7,w7,x7,l7,m7,s7,t7,u7,v7]);break;
   case 2:
    $r([p7,$$GHCziTuple_Z0T]);break;
   }
  },[n7,l7,m7,p7]);
 },[j7]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_mkDuplexHandle5=$f(12,function(Y9,Z9,aa,ba,ca,da,ea,fa,ga,ha,ia,ja){
 var ka=$t(function(){
  $M(da,function(la){
   switch(la.g){
   case 3:
    $R(1,[],"ReadBuffer");break;
   default:
    $R(2,[],"WriteBuffer");
   }
  },[]);
 },[da],"buf_state");
 var ma=$t(function(){
  $$GHCziIOziBufferedIO_newBuffer.J(Z9,ba,ka);
 },[ka,Z9,ba],"lvl18");
 var na=$t(function(){
  $M(ga,function(oa){
   var pa=oa.v[0];
   $A(pa);
  },[]);
 },[ga],"lvl19");
 var qa=$t(function(){
  $M(ga,function(ra){
   var sa=ra.v[1];
   $A(sa);
  },[]);
 },[ga],"lvl20");
 var ta=$f(3,function(ua,va,wa){
  ma.C([wa],function(xa){
   var ya=xa[0],za=xa[1];
   var Aa=$hs_newMutVarzh(za,ya);
   var Ba=Aa[0],Ca=Aa[1];
   var Da=$d(1,[$$GHCziIOziHandleziInternals$n,za],"sat");
   var Ea=$hs_newMutVarzh(Da,Ba);
   var Fa=Ea[0],Ga=Ea[1];
   var Ha=$f(4,function(Ia,Ja,Ka,La){
    var Ma=$hs_newMutVarzh($$GHCziIOziHandleziTypes_BufferListNil,Ia);
    var Na=Ma[0],Oa=Ma[1];
    var Pa=$hs_newMVarzh(Na);
    var Qa=Pa[0],Ra=Pa[1];
    var Sa=$t(function(){
     $M(ba,function(Ta){
      $R(1,[Y9,Z9,aa,Ta,da,Ca,La,Ga,Ja,Oa,ua,va,fa,na,qa,ia],"Handle__");
     },[da,Z9,na,qa,Y9,aa,Ca,La,Ga,Ja,Oa,ua,va,fa,ia]);
    },[da,Z9,ba,na,qa,Y9,aa,Ca,La,Ga,Ja,Oa,ua,va,fa,ia],"sat");
    $b($hs_putMVarzh,[Ra,Sa,Qa],function(Wa){
     $M(ha,function(Ua){
      switch(Ua.g){
      case 1:
       var Va=$d(1,[ca,Ra],"sat");
       $r([Wa,Va]);break;
      case 2:
       var Xa=Ua.v[0];
       var Ya=$t(function(){
	var Za=$d(1,[Ra],"sat");
	Xa.J(ca,Za);
       },[Ra,ca,Xa],"sat");
       var ab=$hs_mkWeakzh(Ra,$$GHCziTuple_Z0T,Ya,Wa);
       var bb=ab[0];
       var cb=$d(1,[ca,Ra],"sat");
       $r([bb,cb]);break;
      }
     },[Ra,Wa,ca]);
    },[Ra,ha,ca]);
   },[da,Z9,ba,na,qa,Y9,aa,Ca,Ga,ua,va,fa,ia,ha,ca],"$s$w$j");
   $M(ea,function(db){
    switch(db.g){
    case 1:
     var eb=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Fa);
     var fb=eb[0],gb=eb[1];
     var hb=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(8192,0),fb);
     var ib=hb[0],jb=hb[1];
     var kb=$d(1,[gb],"sat");
     var lb=$d(2,[jb,kb],"sat");
     var nb=$hs_byteArrayContentszh(jb);
     var mb=$d(1,[nb,lb,ka,goog.math.Long.fromBits(2048,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
     var ob=$hs_newMutVarzh(mb,ib);
     var pb=ob[0],qb=ob[1];
     Ha.J(pb,qb,$$GHCziPrim_coercionTokenzh,$$GHCziIOziHandleziTypes_NoBuffering);break;
    case 2:
     var rb=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Fa);
     var sb=rb[0],tb=rb[1];
     var ub=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(8192,0),sb);
     var vb=ub[0],wb=ub[1];
     var xb=$d(1,[tb],"sat");
     var yb=$d(2,[wb,xb],"sat");
     var Ab=$hs_byteArrayContentszh(wb);
     var zb=$d(1,[Ab,yb,ka,goog.math.Long.fromBits(2048,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
     var Bb=$hs_newMutVarzh(zb,vb);
     var Cb=Bb[0],Db=Bb[1];
     $$GHCziIOziDevice_isTerminal.C([Y9,ba,Cb],function(Eb){
      var Fb=Eb[0],Gb=Eb[1];
      var Hb=$t(function(){
       $M(Gb,function(Ib){
	switch(Ib.g){
	case 1:
	 $A($$GHCziIOziHandleziInternals$o);break;
	case 2:
	 $R(2,[],"LineBuffering");break;
	}
       },[]);
      },[Gb],"sat");
      Ha.J(Fb,Db,$$GHCziPrim_coercionTokenzh,Hb);
     },[da,Z9,ba,na,qa,Y9,aa,Ca,Ga,ua,va,fa,ia,ha,ca,Ha,Db]);break;
    }
   },[da,ka,Z9,ba,na,qa,Y9,aa,Ca,Ga,ua,va,fa,ia,ha,ca,Ha,Fa]);
  },[da,ka,Z9,ba,na,qa,Y9,aa,ua,va,fa,ia,ha,ca,ea]);
 },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea],"a5");
 $M(fa,function(Jb){
  switch(Jb.g){
  case 1:
   ta.J($$DataziMaybe_Nothing,$$DataziMaybe_Nothing,ja);break;
  case 2:
   var Kb=Jb.v[0];
   $M(Kb,function(Lb){
    var Mb=Lb.v[1],Nb=Lb.v[2];
    $M(da,function(Ob){
     switch(Ob.g){
     case 3:
      Mb.C([ja],function(Pb){
       var Qb=Pb[0],Rb=Pb[1];
       var Sb=$d(2,[Rb],"sat");
       ta.J($$DataziMaybe_Nothing,Sb,Qb);
      },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea,ta]);break;
     case 4:
      Nb.C([ja],function(Tb){
       var Ub=Tb[0],Vb=Tb[1];
       var Wb=$d(2,[Vb],"sat");
       ta.J(Wb,$$DataziMaybe_Nothing,Ub);
      },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea,ta]);break;
     case 5:
      Nb.C([ja],function(Xb){
       var Yb=Xb[0],Zb=Xb[1];
       var ac=$d(2,[Zb],"sat");
       ta.J(ac,$$DataziMaybe_Nothing,Yb);
      },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea,ta]);break;
     case 6:
      Mb.C([ja],function(bc){
       var cc=bc[0],dc=bc[1];
       Nb.C([cc],function(ec){
	var fc=ec[0],gc=ec[1];
	var hc=$d(2,[dc],"sat");
	var ic=$d(2,[gc],"sat");
	ta.J(ic,hc,fc);
       },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea,ta,dc]);
      },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea,ta,Nb]);break;
     default:
      ta.J($$DataziMaybe_Nothing,$$DataziMaybe_Nothing,ja);
     }
    },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea,ta,ja,Mb,Nb]);
   },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea,ta,ja]);break;
  }
 },[da,ka,Z9,ba,ma,na,qa,Y9,aa,fa,ia,ha,ca,ea,ta,ja]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_zdwa2=$f(5,function(Tj,Uj,Vj,Wj,Xj){
 $b($hs_takeMVarzh,[Wj,Xj],function(Yj){
  var Zj=Yj[0],ak=Yj[1];
  var bk=$f(2,function(ck,dk){
   $b($hs_putMVarzh,[Wj,ak,dk],function(tk){
    $M(ck,function(ek){
     var fk=ek.v[0],gk=ek.v[1];
     $$GHCziException_zdp1Exception.C([fk,gk],function(hk){
      var ik=hk.v[0],jk=hk.v[1];
      var kk=$f(1,function(lk){
       var mk=$hs_eqWordzh(ik,goog.math.Long.fromBits(2363394409,315339024));
       switch(mk.g){
       case 1:
	$r($hs_raiseIOzh(ek,lk));break;
       case 2:
	var nk=$hs_eqWordzh(jk,goog.math.Long.fromBits(2156861182,4256135785));
	switch(nk.g){
	case 1:
	 $r($hs_raiseIOzh(ek,lk));break;
	case 2:
	 var ok=$hs_myThreadIdzh(lk);
	 var pk=ok[0],qk=ok[1];
	 var rk=$hs_killThreadzh(qk,ek,pk);
	 $$GHCziIOziHandleziInternals_zdwa2.J(Tj,Uj,Vj,Wj,rk);break;
	}break;
       }
      },[Wj,Vj,ik,ek,jk,Tj,Uj],"$wa4");
      var sk=$hs_eqWordzh(ik,goog.math.Long.fromBits(4053623282,1685460941));
      switch(sk.g){
      case 1:
       kk.J(tk);break;
      case 2:
       var uk=$hs_eqWordzh(jk,goog.math.Long.fromBits(3693590983,2507416641));
       switch(uk.g){
       case 1:
	kk.J(tk);break;
       case 2:
	$$GHCziIOziHandleziInternals$s.J(Tj,Uj,gk,tk);break;
       }break;
      }
     },[Wj,Vj,gk,ek,Tj,Uj,tk]);
    },[Wj,Vj,Tj,Uj,tk]);
   },[Wj,Vj,ck,Tj,Uj]);
  },[Wj,ak,Vj,Tj,Uj],"sat");
  var vk=$t(function(){
   Vj.J(ak);
  },[ak,Vj],"sat");
  $k($hs_catchzh,[vk,bk,Zj]);
 },[Wj,Vj,Tj,Uj]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandle5=$f(5,function(wk,xk,yk,zk,Ak){
 var Bk=$hs_getMaskingStatezh(Ak);
 var Ck=Bk[0],Dk=Bk[1];
 var Ek=$f(1,function(Fk){
  $M(yk,function(Gk){
   var Hk=Gk.v[0];
   $$GHCziIOziHandleziInternals_zdwa2.C([wk,xk,zk,Hk,Fk],function(Ik){
    var Jk=Ik[0],Kk=Ik[1];
    $M(Kk,function(Lk){
     var Mk=Lk.v[0],Nk=Lk.v[1];
     $b($hs_putMVarzh,[Hk,Mk,Jk],function(Ok){
      $r([Ok,Nk]);
     },[Nk]);
    },[Hk,Jk]);
   },[Hk]);
  },[wk,xk,zk,Fk]);
 },[yk,wk,xk,zk],"a5");
 $M(Dk,function(Pk){
  switch(Pk.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[Ek,Ck]);break;
  default:
   Ek.J(Ck);
  }
 },[Ek,Ck]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle2=$f(5,function(nl,ol,pl,ql,rl){
 var sl=$f(2,function(tl,ul){
  $M(tl,function(vl){
   var wl=vl.v[1],xl=vl.v[3],yl=vl.v[4],zl=vl.v[5],Al=vl.v[7],Bl=vl.v[8],Cl=vl.v[11];
   $M(yl,function(Dl){
    switch(Dl.g){
    case 1:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$v,ul],function(Il){
      var Jl=Il[0],Kl=Il[1];
      var Ll=$d(1,[vl,Kl],"sat");
      $r([Jl,Ll]);
     },[vl]);break;
    case 2:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$w,ul],function(Ml){
      var Nl=Ml[0],Ol=Ml[1];
      var Pl=$d(1,[vl,Ol],"sat");
      $r([Nl,Pl]);
     },[vl]);break;
    case 3:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$x,ul],function(Ql){
      var Rl=Ql[0],Sl=Ql[1];
      var Tl=$d(1,[vl,Sl],"sat");
      $r([Rl,Tl]);
     },[vl]);break;
    case 6:
     var Ul=$hs_readMutVarzh(Bl,ul);
     var Vl=Ul[0],Wl=Ul[1];
     $M(Wl,function(Xl){
      var Yl=Xl.v[2];
      $M(Yl,function(Zl){
       switch(Zl.g){
       case 1:
	var am=$hs_readMutVarzh(Bl,Vl);
	var bm=am[0],cm=am[1];
	$M(cm,function(dm){
	 var em=dm.v[2],fm=dm.v[4],gm=dm.v[5];
	 var hm=$f(1,function(im){
	  $$GHCziIOziHandleziInternals_flushBuffer2.C([vl,im],function(jm){
	   var km=jm[0];
	   var lm=$hs_readMutVarzh(Bl,km);
	   var mm=lm[0],nm=lm[1];
	   var om=$t(function(){
	    $M(nm,function(pm){
	     var qm=pm.v[0],rm=pm.v[1],sm=pm.v[3],tm=pm.v[4],um=pm.v[5];
	     $R(1,[qm,rm,$$GHCziIOziBuffer_WriteBuffer,sm,tm,um],"Buffer");
	    },[]);
	   },[nm],"sat");
	   var Gm=$hs_writeMutVarzh(Bl,om,mm);
	   var vm=$hs_readMutVarzh(zl,Gm);
	   var wm=vm[0],xm=vm[1];
	   $$GHCziIOziBufferedIO_emptyWriteBuffer.C([wl,xl,xm,wm],function(ym){
	    var zm=ym[0],Am=ym[1];
	    var Fm=$hs_writeMutVarzh(zl,Am,zm);
	    ql.C([vl,Fm],function(Bm){
	     var Cm=Bm[0],Dm=Bm[1];
	     var Em=$d(1,[vl,Dm],"sat");
	     $r([Cm,Em]);
	    },[vl]);
	   },[vl,ql,zl]);
	  },[vl,ql,Bl,zl,wl,xl]);
	 },[vl,ql,Bl,zl,wl,xl],"$j");
	 $M(em,function(Hm){
	  switch(Hm.g){
	  case 1:
	   var Im=fm.equals(gm)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Im.g){
	   case 1:
	    var Jm=$hs_readMutVarzh(Al,bm);
	    var Km=Jm[0],Lm=Jm[1];
	    $M(Lm,function(Mm){
	     var Nm=Mm.v[0],Om=Mm.v[1];
	     var Pm=$hs_readMutVarzh(Bl,Km);
	     var Qm=Pm[0],Rm=Pm[1];
	     var Sm=$t(function(){
	      $M(Rm,function(Tm){
	       var Um=Tm.v[0],Vm=Tm.v[1],Wm=Tm.v[2],Xm=Tm.v[3];
	       $R(1,[Um,Vm,Wm,Xm,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	      },[]);
	     },[Rm],"sat");
	     var qn=$hs_writeMutVarzh(Bl,Sm,Qm);
	     $M(Rm,function(Ym){
	      var Zm=Ym.v[0],an=Ym.v[1],bn=Ym.v[2],cn=Ym.v[4];
	      $M(cn,function(dn){
	       switch(dn.toString()){
	       case "0":
		var Fn=$hs_writeMutVarzh(zl,Om,qn);
		hm.J(Fn);break;
	       default:
		$M(Cl,function(en){
		 switch(en.g){
		 case 1:
		  var fn=$t(function(){
		   $M(Om,function(gn){
		    var hn=gn.v[0],jn=gn.v[1],kn=gn.v[2],ln=gn.v[3],mn=gn.v[4],nn=gn.v[5];
		    var on=mn.add(dn);
		    $R(1,[hn,jn,kn,ln,on,nn],"Buffer");
		   },[dn]);
		  },[Om,dn],"sat");
		  var pn=$hs_writeMutVarzh(zl,fn,qn);
		  hm.J(pn);break;
		 case 2:
		  var rn=en.v[0];
		  $M(rn,function(sn){
		   var tn=sn.v[0],un=sn.v[1],vn=sn.v[4];
		   vn.C([Nm,qn],function(wn){
		    var xn=wn[0];
		    var yn=$d(1,[Zm,an,bn,dn,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
		    $$GHCziIOziHandleziInternals_zdwa.C([tn,un,Om,yn,xn],function(zn){
		     var An=zn[0],Bn=zn[1];
		     $M(Bn,function(Cn){
		      var Dn=Cn.v[0];
		      var En=$hs_writeMutVarzh(zl,Dn,An);
		      hm.J(En);
		     },[vl,ql,Bl,zl,wl,xl,hm,An]);
		    },[vl,ql,Bl,zl,wl,xl,hm]);
		   },[vl,ql,Bl,zl,wl,xl,hm,Om,dn,tn,un,Zm,an,bn]);
		  },[vl,ql,Bl,zl,wl,xl,hm,Om,dn,qn,Nm,Zm,an,bn]);break;
		 }
		},[vl,ql,Bl,zl,wl,xl,hm,Om,dn,qn,Nm,Zm,an,bn]);
	       }
	      },[vl,ql,Bl,zl,wl,xl,hm,Cl,Om,qn,Nm,Zm,an,bn]);
	     },[vl,ql,Bl,zl,wl,xl,hm,Cl,Om,qn,Nm]);
	    },[vl,ql,Bl,zl,wl,xl,hm,Km,Cl]);break;
	   case 2:
	    hm.J(bm);break;
	   }break;
	  case 2:
	   hm.J(bm);break;
	  }
	 },[vl,ql,Bl,zl,wl,xl,hm,fm,gm,Al,bm,Cl]);
	},[vl,ql,Bl,zl,wl,xl,Al,bm,Cl]);break;
       case 2:
	ql.C([vl,Vl],function(Gn){
	 var Hn=Gn[0],In=Gn[1];
	 var Jn=$d(1,[vl,In],"sat");
	 $r([Hn,Jn]);
	},[vl]);break;
       }
      },[vl,ql,Bl,Vl,zl,wl,xl,Al,Cl]);
     },[vl,ql,Bl,Vl,zl,wl,xl,Al,Cl]);break;
    default:
     ql.C([vl,ul],function(El){
      var Fl=El[0],Gl=El[1];
      var Hl=$d(1,[vl,Gl],"sat");
      $r([Fl,Hl]);
     },[vl]);
    }
   },[vl,ul,ql,Bl,zl,wl,xl,Al,Cl]);
  },[ul,ql]);
 },[ql],"sat");
 $$GHCziIOziHandleziInternals_wantReadableHandle5.J(nl,ol,pl,sl,rl);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle1=$f(4,function(Kn,Ln,Mn,Nn){
 $M(Ln,function(On){
  switch(On.g){
  case 1:
   var Pn=On.v[1];
   var Qn=$d(1,[Pn],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(Kn,On,Qn,Mn,Nn);break;
  case 2:
   var Rn=On.v[2];
   var Sn=$d(1,[Rn],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(Kn,On,Sn,Mn,Nn);break;
  }
 },[Kn,Mn,Nn]);
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
var $$GHCziIOziHandleziInternals$s=$F(4,function(hv,iv,jv,kv){
 $$GHCziIOziHandleziInternals_augmentIOError.C([jv,hv,iv],function(lv){
  $$GHCziIOziException_ioError.J(lv,kv);
 },[kv]);
},"a2");
var $$GHCziIOziHandleziInternals$v=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl15");
var $$GHCziIOziHandleziInternals$w=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl16");
var $$GHCziIOziHandleziInternals$x=$D(1,function(){
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
var $$GHCziList_zdwlen=$f(2,function(l,m){
 $M(l,function(n){
  switch(n.g){
  case 1:
   $A(m);break;
  case 2:
   var o=n.v[1];
   var p=m.add(goog.math.Long.fromBits(1,0));
   $$GHCziList_zdwlen.J(o,p);break;
  }
 },[m]);
},[],"at libraries/base/GHC/List.lhs:120:5");
var $$GHCziList_zdwspan=$f(2,function(Y3,Z3){
 $M(Z3,function(a4){
  switch(a4.g){
  case 1:
   $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
  case 2:
   var b4=a4.v[0],c4=a4.v[1];
   Y3.C([b4],function(d4){
    switch(d4.g){
    case 1:
     $r([$$GHCziTypes_ZMZN,a4]);break;
    case 2:
     var e4=$t(function(){
      $$GHCziList_zdwspan.C([Y3,c4],function(f4){
       var g4=f4[0],h4=f4[1];
       $R(1,[g4,h4],"(,)");
      },[]);
     },[Y3,c4],"ds");
     var i4=$t(function(){
      $M(e4,function(j4){
       var k4=j4.v[1];
       $A(k4);
      },[]);
     },[e4],"sat");
     var l4=$t(function(){
      $M(e4,function(m4){
       var n4=m4.v[0];
       $A(n4);
      },[]);
     },[e4],"sat");
     var o4=$d(2,[b4,l4],"sat");
     $r([o4,i4]);break;
    }
   },[b4,Y3,a4,c4]);break;
  }
 },[Y3]);
},[],"at libraries/base/GHC/List.lhs:444:1");
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
},[],"at libraries/base/GHC/Show.lhs:142:5");
var $$GHCziShow_showszuitoszq=$f(2,function(o,p){
 var q=o.lessThan(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(q.g){
 case 1:
  var w=$hs_remIntzh(o,goog.math.Long.fromBits(10,0));
  var v=goog.math.Long.fromBits(48,0).add(w);
  var s=$hs_chrzh(v);
  var r=$d(1,[s],"sat");
  var t=$d(2,[r,p],"sat");
  var u=$hs_quotIntzh(o,goog.math.Long.fromBits(10,0));
  $$GHCziShow_showszuitoszq.J(u,t);break;
 case 2:
  var z=goog.math.Long.fromBits(48,0).add(o);
  var y=$hs_chrzh(z);
  var x=$d(1,[y],"sat");
  $R(2,[x,p],":");break;
 }
},[],"at libraries/base/GHC/Show.lhs:443:5");
var $$GHCziShow_shows3=$D(1,function(){
 $r(["-"]);
},"in `base:GHC.Show'");
var $$GHCziShow_itos=$f(2,function(A,B){
 var C=A.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(C.g){
 case 1:
  $$GHCziShow_showszuitoszq.J(A,B);break;
 case 2:
  $M(A,function(D){
   switch(D.toString()){
   case "-9223372036854775808":
    var G=$t(function(){
     var H=$t(function(){
      $$GHCziShow_showszuitoszq.J(goog.math.Long.fromBits(8,0),B);
     },[B],"sat");
     $$GHCziShow_showszuitoszq.J(goog.math.Long.fromBits(3435973836,214748364),H);
    },[B],"sat");
    $R(2,[$$GHCziShow_shows3,G],":");break;
   default:
    var E=$t(function(){
     var F=D.negate();
     $$GHCziShow_showszuitoszq.J(F,B);
    },[B,D],"sat");
    $R(2,[$$GHCziShow_shows3,E],":");
   }
  },[B]);break;
 }
},[],"at libraries/base/GHC/Show.lhs:432:1");
var $$GHCziShow_shows2=$D(1,function(){
 $r(["("]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows1=$D(1,function(){
 $r([")"]);
},"in `base:GHC.Show'");
var $$GHCziShow_showListzuzu1=$D(1,function(){
 $r([","]);
},"in `base:GHC.Show'");
var $$GHCziShow_showListzuzu2=$D(1,function(){
 $r(["]"]);
},"in `base:GHC.Show'");
var $$GHCziShow_showListzuzu3=$D(1,function(){
 $r(["["]);
},"in `base:GHC.Show'");
var $$GHCziShow_zdwshowSignedInt=$f(3,function(L2,M2,N2){
 var O2=M2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(O2.g){
 case 1:
  $$GHCziShow_itos.J(M2,N2);break;
 case 2:
  var P2=L2.greaterThan(goog.math.Long.fromBits(6,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(P2.g){
  case 1:
   $$GHCziShow_itos.J(M2,N2);break;
  case 2:
   var Q2=$t(function(){
    var R2=$d(2,[$$GHCziShow_shows1,N2],"sat");
    $$GHCziShow_itos.J(M2,R2);
   },[M2,N2],"sat");
   $R(2,[$$GHCziShow_shows2,Q2],":");break;
  }break;
 }
},[],"at libraries/base/GHC/Show.lhs:427:1");
var $$GHCziShow_showSignedInt=$f(3,function(S2,T2,U2){
 $M(S2,function(V2){
  var W2=V2.v[0];
  $M(T2,function(X2){
   var Y2=X2.v[0];
   $$GHCziShow_zdwshowSignedInt.J(W2,Y2,U2);
  },[W2,U2]);
 },[T2,U2]);
},[],"at libraries/base/GHC/Show.lhs:427:1");
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
var $$GHCziUnicode_toLower1=$f(1,function(O1){
 var P1=$d(1,[O1],"sat");
 $$GHCziBase_chr1.J(P1);
},[],"in `base:GHC.Unicode'");
var $$GHCziUnicode_zdwtoUpper=$f(1,function(Q1){
 var Y1=$hs_ordzh(Q1);
 var X1=$hs_narrow32Intzh(Y1);
 var $ff=u_towupper(X1);
 var R1=[$$GHCziPrim_realWorldzh,$ff];
 var S1=R1[1];
 var U1=$hs_narrow32Intzh(S1);
 var W1=$hs_int2Wordzh(U1);
 var T1=$hs_leWordzh(W1,goog.math.Long.fromBits(1114111,0));
 switch(T1.g){
 case 1:
  $$GHCziUnicode_toLower1.J(U1);break;
 case 2:
  var V1=$hs_chrzh(U1);
  $R(1,[V1],"C#");break;
 }
},[],"at libraries/base/GHC/Unicode.hs:147:1");
var $$SystemziPosixziInternals_ioezuunknownfiletype2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("fdType");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_ioezuunknownfiletype1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("unknown file type");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_ioezuunknownfiletype=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_UnsupportedOperation,$$SystemziPosixziInternals_ioezuunknownfiletype2,$$SystemziPosixziInternals_ioezuunknownfiletype1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"at libraries/base/System/Posix/Internals.hs:155:1");
var $$SystemziPosixziInternals_fdGetMode3=$f(1,function(z5){
 $M(z5,function(A5){
  var B5=A5.v[0];
  $M(B5,function(C5){
   switch(C5.toString()){
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
var $$SystemziPosixziInternals_fdFileSizze1=$f(2,function(r7,s7){
 var $ff=__hscore_sizeof_stat();
 var t7=[$$GHCziPrim_realWorldzh,$ff];
 var u7=t7[1];
 var v7=$hs_newPinnedByteArrayzh(u7,s7);
 var w7=v7[0],x7=v7[1];
 var y7=$hs_unsafeFreezzeByteArrayzh(x7,w7);
 var z7=y7[0],A7=y7[1];
 $M(r7,function(B7){
  var C7=B7.v[0];
  var E7=$hs_byteArrayContentszh(A7);
  var D7=$f(1,function(F7){
   var $ff=__hscore_fstat(C7,E7);
   var G7=[F7,$ff];
   var H7=G7[0],I7=G7[1];
   var K7=$hs_narrow32Intzh(I7);
   var J7=$d(1,[K7],"sat");
   $r([H7,J7]);
  },[E7,C7],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals_fdFileSizzezupred,$$SystemziPosixziInternals_fdFileSizzezuloc,D7,z7],function(L7){
   var M7=L7[0];
   var $ff=__hscore_st_mode(E7);
   var N7=[M7,$ff];
   var O7=N7[0],P7=N7[1];
   var Z7=$hs_narrow32Wordzh(P7);
   var $ff=__hscore_s_isreg(Z7);
   var Q7=[$$GHCziPrim_realWorldzh,$ff];
   var R7=Q7[1];
   var S7=$hs_narrow32Intzh(R7);
   switch(S7.toString()){
   case "0":
    var Y7=$hs_touchzh(A7,O7);
    $r([Y7,$$SystemziPosixziInternals_fdFileSizze2]);break;
   default:
    var $ff=__hscore_st_size(E7);
    var T7=[O7,$ff];
    var U7=T7[0],V7=T7[1];
    var X7=$hs_touchzh(A7,U7);
    var W7=$t(function(){
     $$GHCziIntegerziType_smallInteger.J(V7);
    },[V7],"sat");
    $r([X7,W7]);
   }
  },[A7,E7]);
 },[A7,z7]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho5=$f(3,function(a8,b8,c8){
 var $ff=__hscore_sizeof_termios();
 var d8=[$$GHCziPrim_realWorldzh,$ff];
 var e8=d8[1];
 var f8=$hs_newPinnedByteArrayzh(e8,c8);
 var g8=f8[0],h8=f8[1];
 var i8=$hs_unsafeFreezzeByteArrayzh(h8,g8);
 var j8=i8[0],k8=i8[1];
 $M(a8,function(l8){
  var m8=l8.v[0];
  var o8=$hs_byteArrayContentszh(k8);
  var n8=$f(1,function(p8){
   var $ff=tcgetattr(m8,o8);
   var q8=[p8,$ff];
   var r8=q8[0],s8=q8[1];
   var u8=$hs_narrow32Intzh(s8);
   var t8=$d(1,[u8],"sat");
   $r([r8,t8]);
  },[o8,m8],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals_fdGetMode3,$$SystemziPosixziInternals$z1,n8,j8],function(v8){
   var w8=v8[0];
   var x8=$f(1,function(y8){
    var $ff=__hscore_sizeof_sigset_t();
    var z8=[$$GHCziPrim_realWorldzh,$ff];
    var A8=z8[1];
    var B8=$hs_newPinnedByteArrayzh(A8,y8);
    var C8=B8[0],D8=B8[1];
    var E8=$hs_unsafeFreezzeByteArrayzh(D8,C8);
    var F8=E8[0],G8=E8[1];
    var H8=$hs_newPinnedByteArrayzh(A8,F8);
    var I8=H8[0],J8=H8[1];
    var K8=$hs_unsafeFreezzeByteArrayzh(J8,I8);
    var L8=K8[0],M8=K8[1];
    var R8=$hs_byteArrayContentszh(G8);
    var $ff=__hscore_sigemptyset(R8);
    var N8=[L8,$ff];
    var O8=N8[0],P8=N8[1];
    var Q8=$f(1,function(S8){
     var $ff=__hscore_sigttou();
     var T8=[$$GHCziPrim_realWorldzh,$ff];
     var U8=T8[1];
     var ka=$hs_narrow32Intzh(U8);
     var $ff=__hscore_sigaddset(R8,ka);
     var V8=[S8,$ff];
     var W8=V8[0],X8=V8[1];
     var Y8=$f(1,function(Z8){
      var $ff=__hscore_sig_block();
      var a9=[$$GHCziPrim_realWorldzh,$ff];
      var b9=a9[1];
      var g9=$hs_byteArrayContentszh(M8);
      var aa=$hs_narrow32Intzh(b9);
      var $ff=sigprocmask(aa,R8,g9);
      var c9=[Z8,$ff];
      var d9=c9[0],e9=c9[1];
      var f9=$f(1,function(h9){
       var i9=$d(1,[o8],"sat");
       b8.C([i9,h9],function(j9){
	var k9=j9[0],l9=j9[1];
	var $ff=__hscore_tcsanow();
	var m9=[$$GHCziPrim_realWorldzh,$ff];
	var n9=m9[1];
	var o9=$f(1,function(p9){
	 var v9=$hs_narrow32Intzh(n9);
	 var $ff=tcsetattr(m8,v9,o8);
	 var q9=[p9,$ff];
	 var r9=q9[0],s9=q9[1];
	 var u9=$hs_narrow32Intzh(s9);
	 var t9=$d(1,[u9],"sat");
	 $r([r9,t9]);
	},[o8,m8,n9],"sat");
	$$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals$D1,$$SystemziPosixziInternals$z1,o9,k9],function(w9){
	 var x9=w9[0];
	 var $ff=__hscore_sig_setmask();
	 var y9=[$$GHCziPrim_realWorldzh,$ff];
	 var z9=y9[1];
	 var Q9=$hs_narrow32Intzh(z9);
	 var $ff=sigprocmask(Q9,g9,null);
	 var A9=[x9,$ff];
	 var B9=A9[0],C9=A9[1];
	 var D9=$hs_narrow32Intzh(C9);
	 switch(D9.toString()){
	 case "-1":
	  var $ff=__hscore_get_errno();
	  var G9=[B9,$ff];
	  var H9=G9[0],I9=G9[1];
	  var K9=$hs_narrow32Intzh(I9);
	  var J9=$d(1,[K9],"sat");
	  $$ForeignziCziError_errnoToIOError.C([$$SystemziPosixziInternals$C1,J9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(L9){
	   $$GHCziIOziException_ioError.C([L9,H9],function(M9){
	    var N9=M9[0];
	    var P9=$hs_touchzh(M8,N9);
	    var O9=$hs_touchzh(G8,P9);
	    $r([O9,l9]);
	   },[G8,M8,l9]);
	  },[G8,M8,l9,H9]);break;
	 default:
	  var F9=$hs_touchzh(M8,B9);
	  var E9=$hs_touchzh(G8,F9);
	  $r([E9,l9]);
	 }
	},[G8,M8,g9,l9]);
       },[o8,m8,G8,M8,g9]);
      },[o8,m8,G8,M8,g9,b8],"$j2");
      var R9=$hs_narrow32Intzh(e9);
      switch(R9.toString()){
      case "-1":
       var $ff=__hscore_get_errno();
       var S9=[d9,$ff];
       var T9=S9[0],U9=S9[1];
       var W9=$hs_narrow32Intzh(U9);
       var V9=$d(1,[W9],"sat");
       $$ForeignziCziError_errnoToIOError.C([$$SystemziPosixziInternals$C1,V9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(X9){
	$$GHCziIOziException_ioError.C([X9,T9],function(Y9){
	 var Z9=Y9[0];
	 f9.J(Z9);
	},[o8,m8,G8,M8,g9,b8,f9]);
       },[o8,m8,G8,M8,g9,b8,f9,T9]);break;
      default:
       f9.J(d9);
      }
     },[o8,m8,G8,R8,M8,b8],"$j1");
     var ba=$hs_narrow32Intzh(X8);
     switch(ba.toString()){
     case "-1":
      var $ff=__hscore_get_errno();
      var ca=[W8,$ff];
      var da=ca[0],ea=ca[1];
      var ga=$hs_narrow32Intzh(ea);
      var fa=$d(1,[ga],"sat");
      $$ForeignziCziError_errnoToIOError.C([$$SystemziPosixziInternals$B1,fa,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(ha){
       $$GHCziIOziException_ioError.C([ha,da],function(ia){
	var ja=ia[0];
	Y8.J(ja);
       },[o8,m8,G8,R8,M8,b8,Y8]);
      },[o8,m8,G8,R8,M8,b8,Y8,da]);break;
     default:
      Y8.J(W8);
     }
    },[o8,m8,G8,R8,M8,b8],"$j");
    var la=$hs_narrow32Intzh(P8);
    switch(la.toString()){
    case "-1":
     var $ff=__hscore_get_errno();
     var ma=[O8,$ff];
     var na=ma[0],oa=ma[1];
     var qa=$hs_narrow32Intzh(oa);
     var pa=$d(1,[qa],"sat");
     $$ForeignziCziError_errnoToIOError.C([$$SystemziPosixziInternals$A1,pa,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(ra){
      $$GHCziIOziException_ioError.C([ra,na],function(sa){
       var ta=sa[0];
       Q8.J(ta);
      },[o8,m8,G8,R8,M8,b8,Q8]);
     },[o8,m8,G8,R8,M8,b8,Q8,na]);break;
    default:
     Q8.J(O8);
    }
   },[o8,m8,b8],"a78");
   var ua=m8.lessThanOrEqual(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(ua.g){
   case 1:
    x8.C([w8],function(va){
     var wa=va[0],xa=va[1];
     var ya=$hs_touchzh(k8,wa);
     $r([ya,xa]);
    },[k8]);break;
   case 2:
    var $ff=__hscore_get_saved_termios(m8);
    var za=[w8,$ff];
    var Aa=za[0],Ba=za[1];
    var Ca=$hs_eqAddrzh(Ba,null);
    switch(Ca.g){
    case 1:
     x8.C([Aa],function(Da){
      var Ea=Da[0],Fa=Da[1];
      var Ga=$hs_touchzh(k8,Ea);
      $r([Ga,Fa]);
     },[k8]);break;
    case 2:
     var ib=$hs_int2Wordzh(e8);
     var $ff=malloc(ib);
     var Ha=[Aa,$ff];
     var Ia=Ha[0],Ja=Ha[1];
     var Ka=$hs_eqAddrzh(Ja,null);
     switch(Ka.g){
     case 1:
      var Ta=$hs_int2Wordzh(e8);
      var $ff=memcpy(Ja,o8,Ta);
      var La=[Ia,$ff];
      var Ma=La[0];
      var $ff=__hscore_set_saved_termios(m8,Ja);
      var Na=[Ma,$ff];
      var Oa=Na[0];
      x8.C([Oa],function(Pa){
       var Qa=Pa[0],Ra=Pa[1];
       var Sa=$hs_touchzh(k8,Qa);
       $r([Sa,Ra]);
      },[k8]);break;
     case 2:
      $$GHCziIOziException_ioError.C([$$ForeignziMarshalziAlloc_mallocBytes2,Ia],function(Ua){
       var Va=Ua[0],Wa=Ua[1];
       $M(Wa,function(Xa){
	var Ya=Xa.v[0];
	var hb=$hs_int2Wordzh(e8);
	var $ff=memcpy(Ya,o8,hb);
	var Za=[Va,$ff];
	var ab=Za[0];
	var $ff=__hscore_set_saved_termios(m8,Ya);
	var bb=[ab,$ff];
	var cb=bb[0];
	x8.C([cb],function(db){
	 var eb=db[0],fb=db[1];
	 var gb=$hs_touchzh(k8,eb);
	 $r([gb,fb]);
	},[k8]);
       },[e8,k8,o8,m8,x8,Va]);
      },[e8,k8,o8,m8,x8]);break;
     }break;
    }break;
   }
  },[e8,k8,o8,m8,b8]);
 },[e8,k8,j8,b8]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setEcho2=$t(function(){
 var $ff=__hscore_echo();
 var jb=[$$GHCziPrim_realWorldzh,$ff];
 var kb=jb[1];
 var pb=$hs_narrow32Intzh(kb);
 $$GHCziIntegerziType_smallInteger.C([pb],function(lb){
  $$GHCziIntegerziType_integerToWord.C([lb],function(ob){
   var nb=$hs_narrow32Wordzh(ob);
   var mb=nb.xor(goog.math.Long.fromBits(4294967295,0));
   $R(1,[mb],"W32#");
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho4=$t(function(){
 var $ff=__hscore_echo();
 var qb=[$$GHCziPrim_realWorldzh,$ff];
 var rb=qb[1];
 var vb=$hs_narrow32Intzh(rb);
 $$GHCziIntegerziType_smallInteger.C([vb],function(sb){
  $$GHCziIntegerziType_integerToWord.C([sb],function(ub){
   var tb=$hs_narrow32Wordzh(ub);
   $R(1,[tb],"W32#");
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setEcho1=$f(3,function(wb,xb,yb){
 var zb=$f(2,function(Ab,Bb){
  $M(Ab,function(Cb){
   var Db=Cb.v[0];
   var $ff=__hscore_lflag(Db);
   var Eb=[Bb,$ff];
   var Fb=Eb[0],Gb=Eb[1];
   $M(xb,function(Hb){
    switch(Hb.g){
    case 1:
     $M($$SystemziPosixziInternals_setEcho2,function(Ib){
      var Jb=Ib.v[0];
      var Nb=$hs_narrow32Wordzh(Gb);
      var Mb=Nb.and(Jb);
      var $ff=__hscore_poke_lflag(Db,Mb);
      var Kb=[Fb,$ff];
      var Lb=Kb[0];
      $r([Lb,$$GHCziTuple_Z0T]);
     },[Db,Gb,Fb]);break;
    case 2:
     $M($$SystemziPosixziInternals_getEcho4,function(Ob){
      var Pb=Ob.v[0];
      var Tb=$hs_narrow32Wordzh(Gb);
      var Sb=Tb.or(Pb);
      var $ff=__hscore_poke_lflag(Db,Sb);
      var Qb=[Fb,$ff];
      var Rb=Qb[0];
      $r([Rb,$$GHCziTuple_Z0T]);
     },[Db,Gb,Fb]);break;
    }
   },[Db,Gb,Fb]);
  },[Bb,xb]);
 },[xb],"sat");
 $$SystemziPosixziInternals_getEcho5.J(wb,zb,yb);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho2=$f(2,function(Ub,Vb){
 $M(Ub,function(Wb){
  var Xb=Wb.v[0];
  var $ff=__hscore_lflag(Xb);
  var Yb=[Vb,$ff];
  var Zb=Yb[0],ac=Yb[1];
  var bc=$t(function(){
   $M($$SystemziPosixziInternals_getEcho4,function(cc){
    var dc=cc.v[0];
    var gc=$hs_narrow32Wordzh(ac);
    var fc=gc.and(dc);
    var ec=$hs_eqWordzh(fc,goog.math.Long.fromBits(0,0));
    switch(ec.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[ac]);
  },[ac],"sat");
  $r([Zb,bc]);
 },[Vb]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked5=$t(function(){
 var $ff=__hscore_icanon();
 var jc=[$$GHCziPrim_realWorldzh,$ff];
 var kc=jc[1];
 var pc=$hs_narrow32Intzh(kc);
 $$GHCziIntegerziType_smallInteger.C([pc],function(lc){
  $$GHCziIntegerziType_integerToWord.C([lc],function(oc){
   var nc=$hs_narrow32Wordzh(oc);
   var mc=nc.xor(goog.math.Long.fromBits(4294967295,0));
   $R(1,[mc],"W32#");
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked2=$t(function(){
 var $ff=__hscore_icanon();
 var qc=[$$GHCziPrim_realWorldzh,$ff];
 var rc=qc[1];
 var vc=$hs_narrow32Intzh(rc);
 $$GHCziIntegerziType_smallInteger.C([vc],function(sc){
  $$GHCziIntegerziType_integerToWord.C([sc],function(uc){
   var tc=$hs_narrow32Wordzh(uc);
   $R(1,[tc],"W32#");
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked4=$t(function(){
 var $ff=__hscore_vmin();
 var wc=[$$GHCziPrim_realWorldzh,$ff];
 var xc=wc[1];
 var yc=$hs_narrow32Intzh(xc);
 $R(1,[yc],"I#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked3=$t(function(){
 var $ff=__hscore_vtime();
 var zc=[$$GHCziPrim_realWorldzh,$ff];
 var Ac=zc[1];
 var Bc=$hs_narrow32Intzh(Ac);
 $R(1,[Bc],"I#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked1=$f(3,function(Cc,Dc,Ec){
 var Fc=$f(2,function(Gc,Hc){
  $M(Gc,function(Ic){
   var Jc=Ic.v[0];
   var $ff=__hscore_lflag(Jc);
   var Kc=[Hc,$ff];
   var Lc=Kc[0],Mc=Kc[1];
   $M(Dc,function(Nc){
    switch(Nc.g){
    case 1:
     $M($$SystemziPosixziInternals_setCooked5,function(Oc){
      var Pc=Oc.v[0];
      var ed=$hs_narrow32Wordzh(Mc);
      var dd=ed.and(Pc);
      var $ff=__hscore_poke_lflag(Jc,dd);
      var Qc=[Lc,$ff];
      var Rc=Qc[0];
      var $ff=__hscore_ptr_c_cc(Jc);
      var Sc=[Rc,$ff];
      var Tc=Sc[0],Uc=Sc[1];
      $M($$SystemziPosixziInternals_setCooked4,function(Vc){
       var Wc=Vc.v[0];
       var cd=$hs_plusAddrzh(Uc,Wc);
       var bd=$hs_writeWord8OffAddrzh(cd,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),Tc);
       $M($$SystemziPosixziInternals_setCooked3,function(Xc){
	var Yc=Xc.v[0];
	var ad=$hs_plusAddrzh(Uc,Yc);
	var Zc=$hs_writeWord8OffAddrzh(ad,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),bd);
	$r([Zc,$$GHCziTuple_Z0T]);
       },[Uc,bd]);
      },[Uc,Tc]);
     },[Jc,Mc,Lc]);break;
    case 2:
     $M($$SystemziPosixziInternals_setCooked2,function(fd){
      var gd=fd.v[0];
      var kd=$hs_narrow32Wordzh(Mc);
      var jd=kd.or(gd);
      var $ff=__hscore_poke_lflag(Jc,jd);
      var hd=[Lc,$ff];
      var id=hd[0];
      $r([id,$$GHCziTuple_Z0T]);
     },[Jc,Mc,Lc]);break;
    }
   },[Jc,Mc,Lc]);
  },[Hc,Dc]);
 },[Dc],"sat");
 $$SystemziPosixziInternals_getEcho5.J(Cc,Fc,Ec);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fileType2=$f(1,function(rd){
 $$GHCziIOziException_ioError.J($$SystemziPosixziInternals_ioezuunknownfiletype,rd);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdStat1=$f(2,function(Ie,Je){
 var $ff=__hscore_sizeof_stat();
 var Ke=[$$GHCziPrim_realWorldzh,$ff];
 var Le=Ke[1];
 var Me=$hs_newPinnedByteArrayzh(Le,Je);
 var Ne=Me[0],Oe=Me[1];
 var Pe=$hs_unsafeFreezzeByteArrayzh(Oe,Ne);
 var Qe=Pe[0],Re=Pe[1];
 $M(Ie,function(Se){
  var Te=Se.v[0];
  var Ve=$hs_byteArrayContentszh(Re);
  var Ue=$f(1,function(We){
   var $ff=__hscore_fstat(Te,Ve);
   var Xe=[We,$ff];
   var Ye=Xe[0],Ze=Xe[1];
   var bf=$hs_narrow32Intzh(Ze);
   var af=$d(1,[bf],"sat");
   $r([Ye,af]);
  },[Ve,Te],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals$E1,$$SystemziPosixziInternals_ioezuunknownfiletype2,Ue,Qe],function(cf){
   var df=cf[0];
   var $ff=__hscore_st_mode(Ve);
   var ef=[df,$ff];
   var ff=ef[0],gf=ef[1];
   var Ig=$hs_narrow32Wordzh(gf);
   var $ff=__hscore_s_isdir(Ig);
   var hf=[$$GHCziPrim_realWorldzh,$ff];
   var jf=hf[1];
   var kf=$hs_narrow32Intzh(jf);
   switch(kf.toString()){
   case "0":
    var $ff=__hscore_s_isfifo(Ig);
    var vf=[$$GHCziPrim_realWorldzh,$ff];
    var wf=vf[1];
    var xf=$hs_narrow32Intzh(wf);
    switch(xf.toString()){
    case "0":
     var $ff=__hscore_s_issock(Ig);
     var If=[$$GHCziPrim_realWorldzh,$ff];
     var Jf=If[1];
     var Kf=$hs_narrow32Intzh(Jf);
     switch(Kf.toString()){
     case "0":
      var $ff=__hscore_s_ischr(Ig);
      var Vf=[$$GHCziPrim_realWorldzh,$ff];
      var Wf=Vf[1];
      var Xf=$hs_narrow32Intzh(Wf);
      switch(Xf.toString()){
      case "0":
       var $ff=__hscore_s_isreg(Ig);
       var ig=[$$GHCziPrim_realWorldzh,$ff];
       var jg=ig[1];
       var kg=$hs_narrow32Intzh(jg);
       switch(kg.toString()){
       case "0":
	var $ff=__hscore_s_isblk(Ig);
	var vg=[$$GHCziPrim_realWorldzh,$ff];
	var wg=vg[1];
	var xg=$hs_narrow32Intzh(wg);
	switch(xg.toString()){
	case "0":
	 $$SystemziPosixziInternals_fileType2.J(ff);break;
	default:
	 var $ff=__hscore_st_dev(Ve);
	 var yg=[ff,$ff];
	 var zg=yg[0],Ag=yg[1];
	 var $ff=__hscore_st_ino(Ve);
	 var Bg=[zg,$ff];
	 var Cg=Bg[0],Dg=Bg[1];
	 var Hg=$hs_touchzh(Re,Cg);
	 var Eg=$d(1,[Dg],"sat");
	 var Fg=$d(1,[Ag],"sat");
	 var Gg=$d(1,[$$GHCziIOziDevice_RawDevice,Fg,Eg],"sat");
	 $r([Hg,Gg]);
	}break;
       default:
	var $ff=__hscore_st_dev(Ve);
	var lg=[ff,$ff];
	var mg=lg[0],ng=lg[1];
	var $ff=__hscore_st_ino(Ve);
	var og=[mg,$ff];
	var pg=og[0],qg=og[1];
	var ug=$hs_touchzh(Re,pg);
	var rg=$d(1,[qg],"sat");
	var sg=$d(1,[ng],"sat");
	var tg=$d(1,[$$GHCziIOziDevice_RegularFile,sg,rg],"sat");
	$r([ug,tg]);
       }break;
      default:
       var $ff=__hscore_st_dev(Ve);
       var Yf=[ff,$ff];
       var Zf=Yf[0],ag=Yf[1];
       var $ff=__hscore_st_ino(Ve);
       var bg=[Zf,$ff];
       var cg=bg[0],dg=bg[1];
       var hg=$hs_touchzh(Re,cg);
       var eg=$d(1,[dg],"sat");
       var fg=$d(1,[ag],"sat");
       var gg=$d(1,[$$GHCziIOziDevice_Stream,fg,eg],"sat");
       $r([hg,gg]);
      }break;
     default:
      var $ff=__hscore_st_dev(Ve);
      var Lf=[ff,$ff];
      var Mf=Lf[0],Nf=Lf[1];
      var $ff=__hscore_st_ino(Ve);
      var Of=[Mf,$ff];
      var Pf=Of[0],Qf=Of[1];
      var Uf=$hs_touchzh(Re,Pf);
      var Rf=$d(1,[Qf],"sat");
      var Sf=$d(1,[Nf],"sat");
      var Tf=$d(1,[$$GHCziIOziDevice_Stream,Sf,Rf],"sat");
      $r([Uf,Tf]);
     }break;
    default:
     var $ff=__hscore_st_dev(Ve);
     var yf=[ff,$ff];
     var zf=yf[0],Af=yf[1];
     var $ff=__hscore_st_ino(Ve);
     var Bf=[zf,$ff];
     var Cf=Bf[0],Df=Bf[1];
     var Hf=$hs_touchzh(Re,Cf);
     var Ef=$d(1,[Df],"sat");
     var Ff=$d(1,[Af],"sat");
     var Gf=$d(1,[$$GHCziIOziDevice_Stream,Ff,Ef],"sat");
     $r([Hf,Gf]);
    }break;
   default:
    var $ff=__hscore_st_dev(Ve);
    var lf=[ff,$ff];
    var mf=lf[0],nf=lf[1];
    var $ff=__hscore_st_ino(Ve);
    var of=[mf,$ff];
    var pf=of[0],qf=of[1];
    var uf=$hs_touchzh(Re,pf);
    var rf=$d(1,[qf],"sat");
    var sf=$d(1,[nf],"sat");
    var tf=$d(1,[$$GHCziIOziDevice_Directory,sf,rf],"sat");
    $r([uf,tf]);
   }
  },[Re,Ve]);
 },[Re,Qe]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals$z1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("tcSetAttr");
},"lvl1");
var $$SystemziPosixziInternals$A1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigemptyset");
},"loc");
var $$SystemziPosixziInternals$B1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigaddset");
},"loc1");
var $$SystemziPosixziInternals$C1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigprocmask");
},"loc2");
var $$SystemziPosixziInternals$D1=$F(1,function(b){
 $$SystemziPosixziInternals_fdGetMode3.J(b);
},"pred");
var $$SystemziPosixziInternals$E1=$F(1,function(b){
 $$SystemziPosixziInternals_fdGetMode3.J(b);
},"pred1");
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
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:5");
var $$GHCziClasses_zdfEqCharzuzdczsze=$f(2,function(s2,t2){
 $M(s2,function(u2){
  var v2=u2.v[0];
  $M(t2,function(w2){
   var x2=w2.v[0];
   $r(v2!=x2?$$GHCziTypes_True:$$GHCziTypes_False);
  },[v2]);
 },[t2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:11");
var $$GHCziClasses_zdfEqCharzuzdczeze=$f(2,function(y2,z2){
 $M(y2,function(A2){
  var B2=A2.v[0];
  $M(z2,function(C2){
   var D2=C2.v[0];
   $r(B2==D2?$$GHCziTypes_True:$$GHCziTypes_False);
  },[B2]);
 },[z2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:5");
var $$GHCziClasses_zdfEqChar=$D(1,function(){
 $r([$$GHCziClasses_zdfEqCharzuzdczeze,$$GHCziClasses_zdfEqCharzuzdczsze]);
},"at libraries/ghc-prim/GHC/Classes.hs:96:10");
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
},[],"at libraries/integer-gmp/GHC/Integer/GMP/Prim.hs:188:1");
var $$GHCziIntegerziGMPziPrim_integer2Wordzh=$f(2,function(f,g){
 $M(f,function(h){
  switch(h.toString()){
  case "0":
   $r(goog.math.Long.fromBits(0,0));break;
  default:
   var j=$hs_indexIntArrayzh(g,goog.math.Long.fromBits(0,0));
   var i=h.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(i.g){
   case 1:
    $r($hs_int2Wordzh(j));break;
   case 2:
    var k=j.negate();
    $r($hs_int2Wordzh(k));break;
   }
  }
 },[g]);
},[],"at libraries/integer-gmp/GHC/Integer/GMP/Prim.hs:196:1");
var $$GHCziIntegerziType_integerToWord=$f(1,function(ce){
 $M(ce,function(de){
  switch(de.g){
  case 1:
   var ee=de.v[0];
   $r($hs_int2Wordzh(ee));break;
  case 2:
   var fe=de.v[0],ge=de.v[1];
   $$GHCziIntegerziGMPziPrim_integer2Wordzh.J(fe,ge);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:100:1");
var $$GHCziIntegerziType_smallInteger=$f(1,function(he){
 $R(1,[he],"S#");
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:87:1");
var $$GHCziIntegerziType_integerToInt=$f(1,function(ie){
 $M(ie,function(je){
  switch(je.g){
  case 1:
   var ke=je.v[0];
   $A(ke);break;
  case 2:
   var le=je.v[0],me=je.v[1];
   $$GHCziIntegerziGMPziPrim_integer2Intzh.J(le,me);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:142:1");
//@ sourceURL=hs3.js
