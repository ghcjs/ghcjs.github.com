//$$ZCMain_main

var $$ControlziExceptionziBase_finally2=$f(3,function(x1,y1,z1){
 x1.C([z1],function(A1){
  var B1=A1[0];
  $r($hs_raiseIOzh(y1,B1));
 },[y1]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowsPrec=$f(3,function(M3,N3,O3){
 $M(N3,function(P3){
  var Q3=P3.v[0];
  $$GHCziBase_zpzp.J(Q3,O3);
 },[O3]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowList=$f(2,function(R3,S3){
 $M(R3,function(T3){
  switch(T3.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",S3);break;
  case 2:
   var U3=T3.v[0],V3=T3.v[1];
   var W3=$t(function(){
    $M(U3,function(X3){
     var Y3=X3.v[0];
     var Z3=$t(function(){
      var a4=$d(2,[$$GHCziShow_showListzuzu2,S3],"lvl19");
      var b4=$f(1,function(c4){
       $M(c4,function(d4){
	switch(d4.g){
	case 1:
	 $A(a4);break;
	case 2:
	 var e4=d4.v[0],f4=d4.v[1];
	 var g4=$t(function(){
	  $M(e4,function(h4){
	   var i4=h4.v[0];
	   var j4=$t(function(){
	    b4.J(f4);
	   },[f4,b4],"sat");
	   $$GHCziBase_zpzp.J(i4,j4);
	  },[f4,b4]);
	 },[e4,f4,b4],"sat");
	 $R(2,[$$GHCziShow_showListzuzu1,g4],":");break;
	}
       },[a4,b4]);
      },[a4],"showl");
      b4.J(V3);
     },[S3,V3],"sat");
     $$GHCziBase_zpzp.J(Y3,Z3);
    },[S3,V3]);
   },[S3,U3,V3],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,W3],":");break;
  }
 },[S3]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshow=$f(1,function(k4){
 $M(k4,function(l4){
  var m4=l4.v[0];
  $A(m4);
 },[]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFail=$D(1,function(){
 $r([$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowsPrec,$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshow,$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowList]);
},"at libraries/base/Control/Exception/Base.hs:578:10");
var $$ControlziExceptionziBase_zdfTypeableNestedAtomicallyzuds=$t(function(){
 $$GHCziCString_unpackCStringzh.J("base");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfTypeableNestedAtomicallyzuds1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Control.Exception.Base");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfTypeablePatternMatchFailzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("PatternMatchFail");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfTypeablePatternMatchFailzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(18445595,3739165398),goog.math.Long.fromBits(52003073,3246954884),$$ControlziExceptionziBase_zdfTypeableNestedAtomicallyzuds,$$ControlziExceptionziBase_zdfTypeableNestedAtomicallyzuds1,$$ControlziExceptionziBase_zdfTypeablePatternMatchFailzuds2]);
},"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfTypeablePatternMatchFail1=$D(1,function(){
 $r([goog.math.Long.fromBits(18445595,3739165398),goog.math.Long.fromBits(52003073,3246954884),$$ControlziExceptionziBase_zdfTypeablePatternMatchFailzuwild,$$GHCziTypes_ZMZN]);
},"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfTypeablePatternMatchFailzuzdctypeOf=$f(1,function(j7){
 $A($$ControlziExceptionziBase_zdfTypeablePatternMatchFail1);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdcfromException=$f(1,function(k7){
 $M(k7,function(l7){
  var m7=l7.v[0],n7=l7.v[1];
  $$GHCziException_zdp1Exception.C([m7,n7],function(o7){
   var p7=o7.v[0],q7=o7.v[1];
   var r7=$hs_eqWordzh(p7,goog.math.Long.fromBits(18445595,3739165398));
   switch(r7.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var s7=$hs_eqWordzh(q7,goog.math.Long.fromBits(52003073,3246954884));
    switch(s7.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[n7],"Just");break;
    }break;
   }
  },[n7]);
 },[]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFail=$D(1,function(){
 $r([$$ControlziExceptionziBase_zdfTypeablePatternMatchFailzuzdctypeOf,$$ControlziExceptionziBase_zdfShowPatternMatchFail,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdcfromException]);
},"at libraries/base/Control/Exception/Base.hs:587:10");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException=$f(1,function(d){
 $R(1,[$$ControlziExceptionziBase_zdfExceptionPatternMatchFail,d],"SomeException");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_patError=$f(1,function(E8){
 var F8=$t(function(){
  $$GHCziIOziException_untangle.J(E8,$$ControlziExceptionziBase$d);
 },[E8],"sat");
 var G8=$d(1,[F8],"sat");
 $$GHCziException_throw2.J(G8,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_irrefutPatError=$f(1,function(P8){
 var Q8=$t(function(){
  $$GHCziIOziException_untangle.J(P8,$$ControlziExceptionziBase$g);
 },[P8],"sat");
 var R8=$d(1,[Q8],"sat");
 $$GHCziException_throw2.J(R8,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Non-exhaustive patterns in");
},"lvl1");
var $$ControlziExceptionziBase$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Irrefutable pattern failed for pattern");
},"lvl4");
var $$DataziChar_digitToInt1=$f(1,function(l6){
 var m6=$t(function(){
  $M(l6,function(n6){
   switch(n6.toString()){
   case "'":
    $A($$GHCziShow_shows30);break;
   default:
    var o6=$t(function(){
     $$GHCziShow_zdwshowLitChar.J(n6,$$DataziChar$f);
    },[n6],"sat");
    $R(2,[$$GHCziShow_shows31,o6],":");
   }
  },[]);
 },[l6],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Char.digitToInt: not a digit ",m6],function(p6){
  $$GHCziErr_error.J(p6);
 },[]);
},[],"in `base:Data.Char'");
var $$DataziChar_zdwdigitToInt=$f(1,function(q6){
 var r6=$f(1,function(s6){
  var t6=$f(1,function(u6){
   var v6=q6>="A"?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(v6.g){
   case 1:
    $$DataziChar_digitToInt1.J(q6);break;
   case 2:
    var w6=q6<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(w6.g){
    case 1:
     $$DataziChar_digitToInt1.J(q6);break;
    case 2:
     var y6=$hs_ordzh(q6);
     var x6=y6.subtract(goog.math.Long.fromBits(65,0));
     $r(x6.add(goog.math.Long.fromBits(10,0)));break;
    }break;
   }
  },[q6],"$w$j1");
  var z6=q6>="a"?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(z6.g){
  case 1:
   t6.J($$GHCziPrim_realWorldzh);break;
  case 2:
   var A6=q6<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(A6.g){
   case 1:
    t6.J($$GHCziPrim_realWorldzh);break;
   case 2:
    var C6=$hs_ordzh(q6);
    var B6=C6.subtract(goog.math.Long.fromBits(97,0));
    $r(B6.add(goog.math.Long.fromBits(10,0)));break;
   }break;
  }
 },[q6],"$w$j");
 var D6=q6>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(D6.g){
 case 1:
  r6.J($$GHCziPrim_realWorldzh);break;
 case 2:
  var E6=q6<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(E6.g){
  case 1:
   r6.J($$GHCziPrim_realWorldzh);break;
  case 2:
   var F6=$hs_ordzh(q6);
   $r(F6.subtract(goog.math.Long.fromBits(48,0)));break;
  }break;
 }
},[],"at libraries/base/Data/Char.hs:85:1");
var $$DataziChar$f=$D(2,function(){
 $r([$$GHCziShow_shows31,$$GHCziTypes_ZMZN]);
},"lvl5");
var $$DataziList_unwords1=$D(1,function(){
 $r([" "]);
},"in `base:Data.List'");
var $$DataziList_unwordszuzdsunwords=$f(2,function(a,b){
 $M(b,function(c){
  switch(c.g){
  case 1:
   $A(a);break;
  case 2:
   var d=c.v[0],e=c.v[1];
   var f=$t(function(){
    $$DataziList_unwordszuzdsunwords.J(d,e);
   },[d,e],"sat");
   var g=$d(2,[$$DataziList_unwords1,f],"sat");
   $$GHCziBase_zpzp.J(a,g);break;
  }
 },[a]);
},[],"at libraries/base/Data/List.hs:1107:1");
var $$DataziList_words=$f(1,function(q){
 $$GHCziList_dropWhile.C([$$GHCziUnicode_isSpace,q],function(r){
  switch(r.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var s=$t(function(){
    $$GHCziList_zdwbreak.C([$$GHCziUnicode_isSpace,r],function(t){
     var u=t[0],v=t[1];
     $R(1,[u,v],"(,)");
    },[]);
   },[r],"ds");
   var w=$t(function(){
    $M(s,function(x){
     var y=x.v[1];
     $$DataziList_words.J(y);
    },[]);
   },[s],"sat");
   var z=$t(function(){
    $M(s,function(A){
     var B=A.v[0];
     $A(B);
    },[]);
   },[s],"sat");
   $R(2,[z,w],":");break;
  }
 },[]);
},[],"at libraries/base/Data/List.hs:1092:1");
var $$DataziList_deleteBy=$f(3,function(xj,yj,zj){
 $M(zj,function(Aj){
  switch(Aj.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var Bj=Aj.v[0],Cj=Aj.v[1];
   xj.C([yj,Bj],function(Dj){
    switch(Dj.g){
    case 1:
     var Ej=$t(function(){
      $$DataziList_deleteBy.J(xj,yj,Cj);
     },[yj,xj,Cj],"sat");
     $R(2,[Bj,Ej],":");break;
    case 2:
     $A(Cj);break;
    }
   },[yj,Bj,xj,Cj]);break;
  }
 },[yj,xj]);
},[],"at libraries/base/Data/List.hs:376:1");
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
var $$DataziTypeableziInternal_zdfTypeableZLZRzupkg=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ghc-prim");
},[],"at libraries/base/Data/Typeable/Internal.hs:178:10");
var $$DataziTypeableziInternal_zdfTypeable1IOzumodl=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Types");
},[],"at libraries/base/Data/Typeable/Internal.hs:178:14");
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
var $$DataziTypeableziInternal_typeOfDefaultzugo=$f(1,function(u1){
 $M(u1,function(v1){
  switch(v1.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var w1=v1.v[0],x1=v1.v[1];
   $M(w1,function(y1){
    var z1=y1.v[0],A1=y1.v[1];
    var B1=$t(function(){
     $$DataziTypeableziInternal_typeOfDefaultzugo.J(x1);
    },[x1],"sat");
    var C1=$d(1,[z1,A1],"sat");
    $R(2,[C1,B1],":");
   },[x1]);break;
  }
 },[]);
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_typeOfDefault=$f(2,function(D1,E1){
 var F1=$t(function(){
  D1.C([$$GHCziErr_undefined],function(G1){
   var H1=G1.v[2],I1=G1.v[3];
   $M(H1,function(J1){
    var K1=J1.v[0],L1=J1.v[1];
    var M1=$t(function(){
     E1.J($$GHCziErr_undefined);
    },[E1],"sat");
    var N1=$d(2,[M1,$$GHCziTypes_ZMZN],"sat");
    $$GHCziBase_zpzp.C([I1,N1],function(O1){
     switch(O1.g){
     case 1:
      $R(1,[K1,L1,J1,$$GHCziTypes_ZMZN],"TypeRep");break;
     case 2:
      var P1=$t(function(){
       $$DataziTypeableziInternal_typeOfDefaultzugo.J(O1);
      },[O1],"sat");
      var Q1=$d(1,[K1,L1],"sat");
      var R1=$d(2,[Q1,P1],"sat");
      $$GHCziFingerprint_fingerprintFingerprints.C([R1],function(S1){
       var T1=S1.v[0],U1=S1.v[1];
       $R(1,[T1,U1,J1,O1],"TypeRep");
      },[J1,O1]);break;
     }
    },[K1,L1,J1]);
   },[I1,E1]);
  },[E1]);
 },[D1,E1],"rep");
 var V1=$f(1,function(W1){
  $A(F1);
 },[F1],"sat");
 $A(V1);
},[],"at libraries/base/Data/Typeable/Internal.hs:234:1");
var $$DataziTypeableziInternal_zdfTypeableZLZR4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Tuple");
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeableZLZR3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("()");
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeableZLZR2=$D(1,function(){
 $r([goog.math.Long.fromBits(2170319554,3688774321),goog.math.Long.fromBits(26914641,3196943984),$$DataziTypeableziInternal_zdfTypeableZLZRzupkg,$$DataziTypeableziInternal_zdfTypeableZLZR4,$$DataziTypeableziInternal_zdfTypeableZLZR3]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeableZLZR1=$D(1,function(){
 $r([goog.math.Long.fromBits(2170319554,3688774321),goog.math.Long.fromBits(26914641,3196943984),$$DataziTypeableziInternal_zdfTypeableZLZR2,$$GHCziTypes_ZMZN]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeableZLZRzuzdctypeOf=$f(1,function(l2){
 $A($$DataziTypeableziInternal_zdfTypeableZLZR1);
},[],"at libraries/base/Data/Typeable/Internal.hs:221:3");
var $$DataziTypeableziInternal_zdfTypeable1IO3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("IO");
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IO2=$D(1,function(){
 $r([goog.math.Long.fromBits(1456544454,4198540223),goog.math.Long.fromBits(3588501173,645407194),$$DataziTypeableziInternal_zdfTypeableZLZRzupkg,$$DataziTypeableziInternal_zdfTypeable1IOzumodl,$$DataziTypeableziInternal_zdfTypeable1IO3]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IO1=$D(1,function(){
 $r([goog.math.Long.fromBits(1456544454,4198540223),goog.math.Long.fromBits(3588501173,645407194),$$DataziTypeableziInternal_zdfTypeable1IO2,$$GHCziTypes_ZMZN]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IOzuzdctypeOf1=$f(1,function(ng){
 $A($$DataziTypeableziInternal_zdfTypeable1IO1);
},[],"at libraries/base/Data/Typeable/Internal.hs:229:3");
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
var $$GHCziArr_zdfIxChar2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Arr'");
var $$GHCziArr_indexError=$f(4,function(L,M,N,O){
 $$GHCziArr$f.J(O,N,M,L);
},[],"at libraries/base/GHC/Arr.lhs:189:1");
var $$GHCziArr_arrEleBottom=$t(function(){
 $$GHCziErr_error.J($$GHCziArr$n);
},[],"at libraries/base/GHC/Arr.lhs:421:1");
var $$GHCziArr$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J(" out of range ");
},"lvl");
var $$GHCziArr$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("}.index: Index ");
},"lvl1");
var $$GHCziArr$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Ix{");
},"lvl2");
var $$GHCziArr$d=$D(2,function(){
 $r([$$GHCziShow_shows1,$$GHCziTypes_ZMZN]);
},"lvl3");
var $$GHCziArr$e=$F(5,function(t13,u13,v13,w13,x13){
 var y13=$t(function(){
  var z13=$t(function(){
   var A13=$t(function(){
    var B13=$t(function(){
     var C13=$t(function(){
      $$GHCziShow_zdwzdcshowsPrec1.J(x13,x13,v13,w13,$$GHCziArr$d);
     },[x13,v13,w13],"sat");
     var D13=$d(2,[$$GHCziShow_shows2,C13],"sat");
     $$GHCziBase_zpzp.J($$GHCziArr$a,D13);
    },[x13,v13,w13],"sat");
    var E13=$d(2,[$$GHCziShow_shows1,B13],"sat");
    $$GHCziShow_showsPrec.J(x13,$$GHCziArr_zdfIxChar2,u13,E13);
   },[x13,u13,v13,w13],"sat");
   var F13=$d(2,[$$GHCziShow_shows2,A13],"sat");
   $$GHCziBase_zpzp.J($$GHCziArr$b,F13);
  },[x13,u13,v13,w13],"sat");
  $$GHCziBase_zpzp.J(t13,z13);
 },[t13,x13,u13,v13,w13],"sat");
 $$GHCziBase_zpzp.C([$$GHCziArr$c,y13],function(G13){
  $$GHCziErr_error.J(G13);
 },[]);
},"lvl4");
var $$GHCziArr$f=$F(4,function(H13,I13,J13,K13){
 $M(J13,function(L13){
  var M13=L13.v[0],N13=L13.v[1];
  $$GHCziArr$e.J(H13,I13,M13,N13,K13);
 },[H13,I13,K13]);
},"lvl5");
var $$GHCziArr$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("(Array.!): undefined array element");
},"lvl9");
var $$GHCziBase_divIntzh=$f(2,function(V1,W1){
 var X1=V1.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(X1.g){
 case 1:
  var Y1=V1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Y1.g){
  case 1:
   $r($hs_quotIntzh(V1,W1));break;
  case 2:
   var Z1=W1.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Z1.g){
   case 1:
    $r($hs_quotIntzh(V1,W1));break;
   case 2:
    var b2=V1.add(goog.math.Long.fromBits(1,0));
    var a2=$hs_quotIntzh(b2,W1);
    $r(a2.subtract(goog.math.Long.fromBits(1,0)));break;
   }break;
  }break;
 case 2:
  var c2=W1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(c2.g){
  case 1:
   var d2=V1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(d2.g){
   case 1:
    $r($hs_quotIntzh(V1,W1));break;
   case 2:
    var e2=W1.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(e2.g){
    case 1:
     $r($hs_quotIntzh(V1,W1));break;
    case 2:
     var g2=V1.add(goog.math.Long.fromBits(1,0));
     var f2=$hs_quotIntzh(g2,W1);
     $r(f2.subtract(goog.math.Long.fromBits(1,0)));break;
    }break;
   }break;
  case 2:
   var i2=V1.subtract(goog.math.Long.fromBits(1,0));
   var h2=$hs_quotIntzh(i2,W1);
   $r(h2.subtract(goog.math.Long.fromBits(1,0)));break;
  }break;
 }
},[],"at libraries/base/GHC/Base.lhs:661:4");
var $$GHCziBase_id=$f(1,function(M2){
 $A(M2);
},[],"at libraries/base/GHC/Base.lhs:515:1");
var $$GHCziBase_zzeroInt=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/Base.lhs:488:1");
var $$GHCziBase_ord=$f(1,function(N2){
 $M(N2,function(O2){
  var P2=O2.v[0];
  var Q2=$hs_ordzh(P2);
  $R(1,[Q2],"I#");
 },[]);
},[],"at libraries/base/GHC/Base.lhs:463:1");
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
var $$GHCziConcziSignal_signalzuhandlers=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziConcziSignal$c);
},[],"at libraries/base/GHC/Conc/Signal.hs:42:1");
var $$GHCziConcziSignal_setHandler3=$t(function(){
 $$GHCziErr_error.J($$GHCziConcziSignal$d);
},[],"in `base:GHC.Conc.Signal'");
var $$GHCziConcziSignal_setHandler2=$f(4,function(a,b,c,d){
 var e=$f(1,function(f){
  $b($hs_putMVarzh,[b,a,f],function(g){
   $r([g,$$GHCziTuple_Z0T]);
  },[]);
 },[b,a],"sat");
 $$ControlziExceptionziBase_finally2.J(e,c,d);
},[],"in `base:GHC.Conc.Signal'");
var $$GHCziConcziSignal_setHandler1=$f(3,function(h,i,j){
 var k=$hs_getMaskingStatezh(j);
 var l=k[0],m=k[1];
 var n=$f(2,function(o,p){
  $M(o,function(q){
   var r=q.v[0],s=q.v[1],t=q.v[3];
   $M(r,function(u){
    var v=u.v[0];
    $M(s,function(w){
     var x=w.v[0];
     $M(h,function(y){
      var z=y.v[0];
      var A=v.lessThanOrEqual(z)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       $A($$GHCziConcziSignal_setHandler3);break;
      case 2:
       var B=z.lessThanOrEqual(x)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(B.g){
       case 1:
	$A($$GHCziConcziSignal_setHandler3);break;
       case 2:
	var C=$hs_readArrayzh(t,z,p);
	var D=C[0],E=C[1];
	var F=$hs_writeArrayzh(t,z,i,D);
	$r([F,E]);break;
       }break;
      }
     },[v,x,t,p,i]);
    },[h,v,t,p,i]);
   },[s,h,t,p,i]);
  },[h,p,i]);
 },[h,i],"a");
 $M(m,function(G){
  switch(G.toString()){
  case "0":
   var U=$f(1,function(V){
    $M($$GHCziConcziSignal_signalzuhandlers,function(W){
     var X=W.v[0];
     $b($hs_takeMVarzh,[X,V],function(Y){
      var Z=Y[0],a1=Y[1];
      var b1=$f(2,function(N,O){
       $$GHCziConcziSignal_setHandler2.J(a1,X,N,O);
      },[X,a1],"sat");
      var c1=$f(1,function(O){
       n.J(a1,O);
      },[n,a1],"sat");
      var d1=$f(1,function(O){
       $k($hs_unmaskAsyncExceptionszh,[c1,O]);
      },[c1],"sat");
      $b($hs_catchzh,[d1,b1,Z],function(e1){
       var f1=e1[0],g1=e1[1];
       $b($hs_putMVarzh,[X,a1,f1],function(h1){
	$r([h1,g1]);
       },[g1]);
      },[X,a1]);
     },[n,X]);
    },[n,V]);
   },[n],"sat");
   $k($hs_maskAsyncExceptionszh,[U,l]);break;
  default:
   $M($$GHCziConcziSignal_signalzuhandlers,function(H){
    var I=H.v[0];
    $b($hs_takeMVarzh,[I,l],function(J){
     var K=J[0],L=J[1];
     var M=$f(2,function(N,O){
      $$GHCziConcziSignal_setHandler2.J(L,I,N,O);
     },[I,L],"sat");
     var P=$f(1,function(O){
      n.J(L,O);
     },[n,L],"sat");
     $b($hs_catchzh,[P,M,K],function(Q){
      var R=Q[0],S=Q[1];
      $b($hs_putMVarzh,[I,L,R],function(T){
       $r([T,S]);
      },[S]);
     },[I,L]);
    },[n,I]);
   },[n,l]);
  }
 },[n,l]);
},[],"in `base:GHC.Conc.Signal'");
var $$GHCziConcziSignal$a=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl");
var $$GHCziConcziSignal$b=$D(1,function(){
 $r([goog.math.Long.fromBits(64,0)]);
},"lvl1");
var $$GHCziConcziSignal$c=$F(1,function(C2){
 var b3=$hs_noDuplicatezh(C2);
 var D2=$hs_newArrayzh(goog.math.Long.fromBits(65,0),$$DataziMaybe_Nothing,b3);
 var E2=D2[0],F2=D2[1];
 var G2=$hs_newMVarzh(E2);
 var H2=G2[0],I2=G2[1];
 var J2=$d(1,[$$GHCziConcziSignal$a,$$GHCziConcziSignal$b,goog.math.Long.fromBits(65,0),F2],"sat");
 $b($hs_putMVarzh,[I2,J2,H2],function(a3){
  var K2=$hs_getMaskingStatezh(a3);
  var L2=K2[0],M2=K2[1];
  var N2=$f(1,function(O2){
   var P2=$d(1,[I2],"m");
   var Q2=[O2,P2];
   var R2=Q2[0],S2=Q2[1];
   var $ff=getOrSetGHCConcSignalSignalHandlerStore(S2);
   var T2=[R2,$ff];
   var U2=T2[0],V2=T2[1];
   var W2=$hs_eqAddrzh(S2,V2);
   switch(W2.g){
   case 1:
    var $ff=hs_free_stable_ptr(S2);
    var X2=[U2,$ff];
    var Y2=X2[0];
    $r([Y2,V2]);break;
   case 2:
    $r([U2,P2]);break;
   }
  },[I2],"a");
  $M(M2,function(Z2){
   switch(Z2.toString()){
   case "0":
    $k($hs_maskAsyncExceptionszh,[N2,L2]);break;
   default:
    N2.J(L2);
   }
  },[N2,L2]);
 },[I2]);
},"lvl2");
var $$GHCziConcziSignal$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Conc.setHandler: signal out of range");
},"lvl3");
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
var $$GHCziErr_divZZeroError=$t(function(){
 $$GHCziException_throw2.J($$GHCziException_DivideByZZero,$$GHCziException_zdfExceptionArithExceptionzuzdctoException);
},[],"at libraries/base/GHC/Err.lhs:85:1");
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
var $$GHCziException_zdfShowArithException5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("arithmetic overflow");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException10=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException5,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("arithmetic underflow");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException9=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException4,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("loss of precision");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException8=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException3,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("divide by zero");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException7=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException2,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("denormal");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException6=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException1,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshowsPrec=$f(2,function(O1,P1){
 $M(P1,function(Q1){
  switch(Q1.g){
  case 1:
   $A($$GHCziException_zdfShowArithException10);break;
  case 2:
   $A($$GHCziException_zdfShowArithException9);break;
  case 3:
   $A($$GHCziException_zdfShowArithException8);break;
  case 4:
   $A($$GHCziException_zdfShowArithException7);break;
  case 5:
   $A($$GHCziException_zdfShowArithException6);break;
  }
 },[]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshowList=$f(2,function(R1,S1){
 $M(R1,function(T1){
  switch(T1.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",S1);break;
  case 2:
   var U1=T1.v[0],V1=T1.v[1];
   var W1=$t(function(){
    var X1=$t(function(){
     var Y1=$d(2,[$$GHCziShow_showListzuzu2,S1],"lvl19");
     var Z1=$f(1,function(a2){
      $M(a2,function(b2){
       switch(b2.g){
       case 1:
	$A(Y1);break;
       case 2:
	var c2=b2.v[0],d2=b2.v[1];
	var e2=$t(function(){
	 $M(c2,function(f2){
	  switch(f2.g){
	  case 1:
	   var g2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException5,g2);break;
	  case 2:
	   var h2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException4,h2);break;
	  case 3:
	   var i2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException3,i2);break;
	  case 4:
	   var j2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException2,j2);break;
	  case 5:
	   var k2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException1,k2);break;
	  }
	 },[d2,Z1]);
	},[c2,d2,Z1],"sat");
	$R(2,[$$GHCziShow_showListzuzu1,e2],":");break;
       }
      },[Y1,Z1]);
     },[Y1],"showl");
     Z1.J(V1);
    },[S1,V1],"a");
    $M(U1,function(l2){
     switch(l2.g){
     case 1:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException5,X1);break;
     case 2:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException4,X1);break;
     case 3:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException3,X1);break;
     case 4:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException2,X1);break;
     case 5:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException1,X1);break;
     }
    },[X1]);
   },[S1,V1,U1],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,W1],":");break;
  }
 },[S1]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshow=$f(1,function(m2){
 $M(m2,function(n2){
  switch(n2.g){
  case 1:
   $A($$GHCziException_zdfShowArithException5);break;
  case 2:
   $A($$GHCziException_zdfShowArithException4);break;
  case 3:
   $A($$GHCziException_zdfShowArithException3);break;
  case 4:
   $A($$GHCziException_zdfShowArithException2);break;
  case 5:
   $A($$GHCziException_zdfShowArithException1);break;
  }
 },[]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException=$D(1,function(){
 $r([$$GHCziException_zdfShowArithExceptionzuzdcshowsPrec,$$GHCziException_zdfShowArithExceptionzuzdcshow,$$GHCziException_zdfShowArithExceptionzuzdcshowList]);
},"at libraries/base/GHC/Exception.lhs:189:10");
var $$GHCziException_zdfExceptionArithException5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("base");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithException4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Exception");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ArithException");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithException2=$t(function(){
 $$DataziTypeableziInternal_mkTyCon.J(goog.math.Long.fromBits(4194982440,719304104),goog.math.Long.fromBits(3110813675,1843557400),$$GHCziException_zdfExceptionArithException5,$$GHCziException_zdfExceptionArithException4,$$GHCziException_zdfExceptionArithException3);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithException1=$t(function(){
 $$DataziTypeableziInternal_mkTyConApp.J($$GHCziException_zdfExceptionArithException2,$$GHCziTypes_ZMZN);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithExceptionzuzdctypeOf=$f(1,function(G3){
 $A($$GHCziException_zdfExceptionArithException1);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithExceptionzuzdcfromException=$f(1,function(H3){
 $M(H3,function(I3){
  var J3=I3.v[0],K3=I3.v[1];
  var L3=$t(function(){
   $$GHCziException_zdp1Exception.J(J3);
  },[J3],"sat");
  $$DataziTypeable_cast.J(L3,$$GHCziException_zdfExceptionArithExceptionzuzdctypeOf,K3);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:142:5");
var $$GHCziException_zdfExceptionArithException=$D(1,function(){
 $r([$$GHCziException_zdfExceptionArithExceptionzuzdctypeOf,$$GHCziException_zdfShowArithException,$$GHCziException_zdfExceptionArithExceptionzuzdctoException,$$GHCziException_zdfExceptionArithExceptionzuzdcfromException]);
},"at libraries/base/GHC/Exception.lhs:187:10");
var $$GHCziException_zdfExceptionArithExceptionzuzdctoException=$f(1,function(u){
 $R(1,[$$GHCziException_zdfExceptionArithException,u],"SomeException");
},[],"at libraries/base/GHC/Exception.lhs:141:5");
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
var $$GHCziException_DivideByZZero=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/Exception.lhs:183:5");
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
var $$GHCziFloat_zdfRealFloatDouble7=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"in `base:GHC.Float'");
var $$GHCziFloat_zdfRealDouble1=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Float'");
var $$GHCziFloat_maxExpt10=$D(1,function(){
 $r([goog.math.Long.fromBits(324,0)]);
},"at libraries/base/GHC/Float.lhs:882:1");
var $$GHCziFloat_maxExpt=$D(1,function(){
 $r([goog.math.Long.fromBits(1100,0)]);
},"at libraries/base/GHC/Float.lhs:866:1");
var $$GHCziFloat_minExpt=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/Float.lhs:865:1");
var $$GHCziFloat_expts2=$f(1,function(Uc){
 var Vc=$d(1,[Uc],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,$$GHCziFloat$b,Vc,$$GHCziFloat$c);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expts1=$f(1,function(Wc){
 var Xc=$hs_newArrayzh(goog.math.Long.fromBits(1101,0),$$GHCziArr_arrEleBottom,Wc);
 var Yc=Xc[0],Zc=Xc[1];
 var ad=$f(2,function(bd,cd){
  var dd=goog.math.Long.fromBits(0,0).lessThanOrEqual(bd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(dd.g){
  case 1:
   $$GHCziFloat_expts2.J(bd);break;
  case 2:
   var ed=bd.lessThanOrEqual(goog.math.Long.fromBits(1100,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(ed.g){
   case 1:
    $$GHCziFloat_expts2.J(bd);break;
   case 2:
    var fd=$t(function(){
     var gd=bd.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(gd.g){
     case 1:
      $M(bd,function(hd){
       switch(hd.toString()){
       case "0":
	$A($$GHCziReal_zdfEnumRatio2);break;
       default:
	$$GHCziReal_zdwf1.J($$GHCziFloat_zdfRealFloatDouble7,hd);
       }
      },[]);break;
     case 2:
      $A($$GHCziReal_zc3);break;
     }
    },[bd],"sat");
    var kd=$hs_writeArrayzh(Zc,bd,fd,cd);
    $M(bd,function(id){
     switch(id.toString()){
     case "1100":
      var ld=$hs_unsafeFreezzeArrayzh(Zc,kd);
      var md=ld[0],nd=ld[1];
      var od=$d(1,[$$GHCziFloat_minExpt,$$GHCziFloat_maxExpt,goog.math.Long.fromBits(1101,0),nd],"sat");
      $r([md,od]);break;
     default:
      var jd=id.add(goog.math.Long.fromBits(1,0));
      ad.J(jd,kd);
     }
    },[Zc,ad,kd]);break;
   }break;
  }
 },[Zc],"go3");
 ad.J(goog.math.Long.fromBits(0,0),Yc);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expts=$t(function(){
 $$GHCziST_runSTRep.J($$GHCziFloat_expts1);
},[],"at libraries/base/GHC/Float.lhs:879:1");
var $$GHCziFloat_expts4=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"in `base:GHC.Float'");
var $$GHCziFloat_expts5=$f(1,function(pd){
 var qd=$d(1,[pd],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,$$GHCziFloat$d,qd,$$GHCziFloat$c);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expts3=$f(1,function(rd){
 var sd=$hs_newArrayzh(goog.math.Long.fromBits(325,0),$$GHCziArr_arrEleBottom,rd);
 var td=sd[0],ud=sd[1];
 var vd=$f(2,function(wd,xd){
  var yd=goog.math.Long.fromBits(0,0).lessThanOrEqual(wd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(yd.g){
  case 1:
   $$GHCziFloat_expts5.J(wd);break;
  case 2:
   var zd=wd.lessThanOrEqual(goog.math.Long.fromBits(324,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(zd.g){
   case 1:
    $$GHCziFloat_expts5.J(wd);break;
   case 2:
    var Ad=$t(function(){
     var Bd=wd.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Bd.g){
     case 1:
      $M(wd,function(Cd){
       switch(Cd.toString()){
       case "0":
	$A($$GHCziReal_zdfEnumRatio2);break;
       default:
	$$GHCziReal_zdwf1.J($$GHCziFloat_expts4,Cd);
       }
      },[]);break;
     case 2:
      $A($$GHCziReal_zc3);break;
     }
    },[wd],"sat");
    var Fd=$hs_writeArrayzh(ud,wd,Ad,xd);
    $M(wd,function(Dd){
     switch(Dd.toString()){
     case "324":
      var Gd=$hs_unsafeFreezzeArrayzh(ud,Fd);
      var Hd=Gd[0],Id=Gd[1];
      var Jd=$d(1,[$$GHCziFloat_minExpt,$$GHCziFloat_maxExpt10,goog.math.Long.fromBits(325,0),Id],"sat");
      $r([Hd,Jd]);break;
     default:
      var Ed=Dd.add(goog.math.Long.fromBits(1,0));
      vd.J(Ed,Fd);
     }
    },[ud,vd,Fd]);break;
   }break;
  }
 },[ud],"go3");
 vd.J(goog.math.Long.fromBits(0,0),td);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expts10=$t(function(){
 $$GHCziST_runSTRep.J($$GHCziFloat_expts3);
},[],"at libraries/base/GHC/Float.lhs:885:1");
var $$GHCziFloat_zdfRealFracFloat2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Float'");
var $$GHCziFloat_expt2=$f(3,function(Bv,Cv,Dv){
 var Ev=$d(1,[Cv,Dv],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,Ev,Bv,$$GHCziFloat$c);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expt1=$f(3,function(Fv,Gv,Hv){
 var Iv=$d(1,[Gv,Hv],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,Iv,Fv,$$GHCziFloat$c);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_zdwexpt=$f(2,function(Jv,Kv){
 var Lv=$d(1,[Kv],"n");
 var Mv=$t(function(){
  $$GHCziIntegerziType_eqInteger.C([Jv,$$GHCziFloat_expts4],function(Nv){
   switch(Nv.g){
   case 1:
    var Ov=Kv.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Ov.g){
    case 1:
     $M(Kv,function(Pv){
      switch(Pv.toString()){
      case "0":
       $A($$GHCziReal_zdfEnumRatio2);break;
      default:
       $$GHCziReal_zdwf1.J(Jv,Pv);
      }
     },[Jv]);break;
    case 2:
     $A($$GHCziReal_zc3);break;
    }break;
   case 2:
    var Qv=Kv.lessThanOrEqual(goog.math.Long.fromBits(324,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Qv.g){
    case 1:
     var Rv=Kv.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Rv.g){
     case 1:
      $M(Kv,function(Sv){
       switch(Sv.toString()){
       case "0":
	$A($$GHCziReal_zdfEnumRatio2);break;
       default:
	$$GHCziReal_zdwf1.J(Jv,Sv);
       }
      },[Jv]);break;
     case 2:
      $A($$GHCziReal_zc3);break;
     }break;
    case 2:
     $M($$GHCziFloat_expts10,function(Tv){
      var Uv=Tv.v[0],Vv=Tv.v[1],Wv=Tv.v[3];
      $M(Uv,function(Xv){
       var Yv=Xv.v[0];
       $M(Vv,function(Zv){
	var aw=Zv.v[0];
	var bw=Yv.lessThanOrEqual(Kv)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(bw.g){
	case 1:
	 $$GHCziFloat_expt2.J(Lv,Xv,Zv);break;
	case 2:
	 var cw=Kv.lessThanOrEqual(aw)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(cw.g){
	 case 1:
	  $$GHCziFloat_expt2.J(Lv,Xv,Zv);break;
	 case 2:
	  var fw=Kv.subtract(Yv);
	  var dw=$hs_indexArrayzh(Wv,fw);
	  var ew=dw[0];
	  $A(ew);break;
	 }break;
	}
       },[Kv,Lv,Yv,Xv,Wv]);
      },[Kv,Lv,Vv,Wv]);
     },[Kv,Lv]);break;
    }break;
   }
  },[Kv,Lv,Jv]);
 },[Kv,Lv,Jv],"$w$j2");
 $$GHCziIntegerziType_eqInteger.C([Jv,$$GHCziFloat_zdfRealFloatDouble7],function(gw){
  switch(gw.g){
  case 1:
   $A(Mv);break;
  case 2:
   var hw=Kv.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(hw.g){
   case 1:
    $A(Mv);break;
   case 2:
    var iw=Kv.lessThanOrEqual(goog.math.Long.fromBits(1100,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(iw.g){
    case 1:
     $A(Mv);break;
    case 2:
     $M($$GHCziFloat_expts,function(jw){
      var kw=jw.v[0],lw=jw.v[1],mw=jw.v[3];
      $M(kw,function(nw){
       var ow=nw.v[0];
       $M(lw,function(pw){
	var qw=pw.v[0];
	var rw=ow.lessThanOrEqual(Kv)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(rw.g){
	case 1:
	 $$GHCziFloat_expt1.J(Lv,nw,pw);break;
	case 2:
	 var sw=Kv.lessThanOrEqual(qw)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(sw.g){
	 case 1:
	  $$GHCziFloat_expt1.J(Lv,nw,pw);break;
	 case 2:
	  var vw=Kv.subtract(ow);
	  var tw=$hs_indexArrayzh(mw,vw);
	  var uw=tw[0];
	  $A(uw);break;
	 }break;
	}
       },[Kv,Lv,ow,nw,mw]);
      },[Kv,Lv,lw,mw]);
     },[Kv,Lv]);break;
    }break;
   }break;
  }
 },[Kv,Lv,Jv,Mv]);
},[],"at libraries/base/GHC/Float.lhs:869:1");
var $$GHCziFloat_roundTozuxs=$f(1,function(Aw){
 var Bw=Aw.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(Bw.g){
 case 1:
  var Cw=$t(function(){
   var Dw=Aw.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat_roundTozuxs.J(Dw);
  },[Aw],"sat");
  $R(2,[$$GHCziFloat_minExpt,Cw],":");break;
 case 2:
  $A($$GHCziFloat$g);break;
 }
},[],"in `base:GHC.Float'");
var $$GHCziFloat_zdwroundTo=$f(3,function(Ew,Fw,Gw){
 var Hw=$t(function(){
  $M(Ew,function(Iw){
   var Jw=Iw.v[0];
   $$GHCziBase_divIntzh.C([Jw,goog.math.Long.fromBits(2,0)],function(Kw){
    $R(1,[Kw],"I#");
   },[]);
  },[]);
 },[Ew],"b2");
 var Lw=$f(2,function(Mw,Nw){
  $M(Nw,function(Ow){
   switch(Ow.g){
   case 1:
    var Pw=$t(function(){
     var Qw=Mw.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Qw.g){
     case 1:
      $$GHCziFloat_roundTozuxs.J(Mw);break;
     case 2:
      $R(1,[],"[]");break;
     }
    },[Mw],"sat");
    $r([$$GHCziFloat_minExpt,Pw]);break;
   case 2:
    var Rw=Ow.v[0],Sw=Ow.v[1];
    $M(Mw,function(Tw){
     switch(Tw.toString()){
     case "0":
      var jx=$t(function(){
       $M(Rw,function(kx){
	var lx=kx.v[0];
	$M(Hw,function(mx){
	 var nx=mx.v[0];
	 var ox=lx.greaterThanOrEqual(nx)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(ox.g){
	 case 1:
	  $A($$GHCziFloat_minExpt);break;
	 case 2:
	  $A($$GHCziFloat_zdfRealFracFloat2);break;
	 }
	},[lx]);
       },[Hw]);
      },[Hw,Rw],"sat");
      $r([jx,$$GHCziTypes_ZMZN]);break;
     default:
      var ix=Tw.subtract(goog.math.Long.fromBits(1,0));
      Lw.C([ix,Sw],function(Uw){
       var Vw=Uw[0],Ww=Uw[1];
       $M(Vw,function(Xw){
	var Yw=Xw.v[0];
	$M(Rw,function(Zw){
	 var ax=Zw.v[0];
	 $M(Ew,function(bx){
	  var cx=bx.v[0];
	  var fx=Yw.add(ax);
	  var dx=fx.equals(cx)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(dx.g){
	  case 1:
	   var ex=$d(1,[fx],"sat");
	   var gx=$d(2,[ex,Ww],"sat");
	   $r([$$GHCziFloat_minExpt,gx]);break;
	  case 2:
	   var hx=$d(2,[$$GHCziFloat_minExpt,Ww],"sat");
	   $r([$$GHCziFloat_zdfRealFracFloat2,hx]);break;
	  }
	 },[Yw,ax,Ww]);
	},[Ew,Yw,Ww]);
       },[Ew,Rw,Ww]);
      },[Ew,Rw]);
     }
    },[Ew,Hw,Lw,Sw,Rw]);break;
   }
  },[Ew,Hw,Mw,Lw]);
 },[Ew,Hw],"$s$wf3");
 $M(Gw,function(px){
  switch(px.g){
  case 1:
   var qx=$t(function(){
    $M(Fw,function(rx){
     var sx=rx.v[0];
     var tx=sx.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(tx.g){
     case 1:
      $$GHCziFloat_roundTozuxs.J(sx);break;
     case 2:
      $R(1,[],"[]");break;
     }
    },[]);
   },[Fw],"sat");
   $r([$$GHCziFloat_minExpt,qx]);break;
  case 2:
   var ux=px.v[0],vx=px.v[1];
   $M(Fw,function(wx){
    var xx=wx.v[0];
    $M(xx,function(yx){
     switch(yx.toString()){
     case "0":
      $M(ux,function(Px){
       var Qx=Px.v[0];
       $M(Hw,function(Rx){
	var Sx=Rx.v[0];
	var Tx=Qx.greaterThanOrEqual(Sx)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Tx.g){
	case 1:
	 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);break;
	case 2:
	 var Ux=$d(2,[$$GHCziFloat_zdfRealFracFloat2,$$GHCziTypes_ZMZN],"sat");
	 $r([$$GHCziFloat_zdfRealFracFloat2,Ux]);break;
	}
       },[Qx]);
      },[Hw]);break;
     default:
      var Ox=yx.subtract(goog.math.Long.fromBits(1,0));
      Lw.C([Ox,vx],function(zx){
       var Ax=zx[0],Bx=zx[1];
       $M(Ax,function(Cx){
	var Dx=Cx.v[0];
	$M(ux,function(Ex){
	 var Fx=Ex.v[0];
	 $M(Ew,function(Gx){
	  var Hx=Gx.v[0];
	  var Kx=Dx.add(Fx);
	  var Ix=Kx.equals(Hx)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Ix.g){
	  case 1:
	   var Jx=$d(1,[Kx],"sat");
	   var Lx=$d(2,[Jx,Bx],"sat");
	   $r([$$GHCziFloat_minExpt,Lx]);break;
	  case 2:
	   var Mx=$d(2,[$$GHCziFloat_minExpt,Bx],"sat");
	   var Nx=$d(2,[$$GHCziFloat_zdfRealFracFloat2,Mx],"sat");
	   $r([$$GHCziFloat_zdfRealFracFloat2,Nx]);break;
	  }
	 },[Dx,Fx,Bx]);
	},[Ew,Dx,Bx]);
       },[Ew,ux,Bx]);
      },[Ew,ux]);
     }
    },[Ew,Hw,Lw,vx,ux]);
   },[Ew,Hw,Lw,vx,ux]);break;
  }
 },[Ew,Hw,Lw,Fw]);
},[],"at libraries/base/GHC/Float.lhs:637:1");
var $$GHCziFloat_zdfShowDouble2=$D(1,function(){
 $r(["-"]);
},"in `base:GHC.Float'");
var $$GHCziFloat_zdwzdsfloatToDigits1=$f(2,function(hF,iF){
 var jF=iF==0.0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(jF.g){
 case 1:
  var kF=$t(function(){
   $$GHCziIntegerziType_decodeDoubleInteger.C([iF],function(lF){
    var mF=lF[0],nF=lF[1];
    var oF=$d(1,[nF],"sat");
    $R(1,[mF,oF],"(,)");
   },[]);
  },[iF],"ds");
  var pF=$t(function(){
   $M(kF,function(qF){
    var rF=qF.v[1];
    $A(rF);
   },[]);
  },[kF],"e0");
  var sF=$t(function(){
   $M(pF,function(tF){
    var uF=tF.v[0];
    var CF=goog.math.Long.fromBits(4294966222,4294967295).subtract(uF);
    var vF=CF.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(vF.g){
    case 1:
     var wF=$t(function(){
      $M(kF,function(xF){
       var yF=xF.v[0];
       $A(yF);
      },[]);
     },[kF],"sat");
     $R(1,[wF,tF],"(,)");break;
    case 2:
     var AF=uF.add(CF);
     var zF=$d(1,[AF],"sat");
     var BF=$t(function(){
      $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,CF],function(DF){
       $$GHCziIntegerziType_eqInteger.C([DF,$$GHCziReal_even1],function(EF){
	switch(EF.g){
	case 1:
	 $M(kF,function(FF){
	  var GF=FF.v[0];
	  $$GHCziIntegerziType_quotInteger.J(GF,DF);
	 },[DF]);break;
	case 2:
	 $A($$GHCziErr_divZZeroError);break;
	}
       },[kF,DF]);
      },[kF]);
     },[kF,CF],"sat");
     $R(1,[BF,zF],"(,)");break;
    }
   },[kF]);
  },[kF,pF],"ds1");
  var HF=$t(function(){
   $M(sF,function(IF){
    var JF=IF.v[1];
    $A(JF);
   },[]);
  },[sF],"e");
  var KF=$t(function(){
   $M(sF,function(LF){
    var MF=LF.v[0];
    $A(MF);
   },[]);
  },[sF],"f");
  var NF=$t(function(){
   $M(HF,function(OF){
    var PF=OF.v[0];
    var QF=PF.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(QF.g){
    case 1:
     var RF=PF.greaterThan(goog.math.Long.fromBits(4294966222,4294967295))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(RF.g){
     case 1:
      var SF=$t(function(){
       var UF=PF.negate();
       $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,UF],function(TF){
	$$GHCziIntegerziType_timesInteger.J(TF,$$GHCziFloat_zdfRealFloatDouble7);
       },[]);
      },[PF],"sat");
      var VF=$t(function(){
       $$GHCziIntegerziType_timesInteger.J(KF,$$GHCziFloat_zdfRealFloatDouble7);
      },[KF],"sat");
      $R(1,[VF,SF,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
     case 2:
      $$GHCziIntegerziType_eqInteger.C([KF,$$GHCziFloat$i],function(WF){
       switch(WF.g){
       case 1:
	var XF=$t(function(){
	 var ZF=PF.negate();
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,ZF],function(YF){
	  $$GHCziIntegerziType_timesInteger.J(YF,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[PF],"sat");
	var aG=$t(function(){
	 $$GHCziIntegerziType_timesInteger.J(KF,$$GHCziFloat_zdfRealFloatDouble7);
	},[KF],"sat");
	$R(1,[aG,XF,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       case 2:
	var bG=$t(function(){
	 var eG=PF.negate();
	 var dG=eG.add(goog.math.Long.fromBits(1,0));
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,dG],function(cG){
	  $$GHCziIntegerziType_timesInteger.J(cG,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[PF],"sat");
	var fG=$t(function(){
	 $$GHCziIntegerziType_timesInteger.C([KF,$$GHCziFloat_zdfRealFloatDouble7],function(gG){
	  $$GHCziIntegerziType_timesInteger.J(gG,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[KF],"sat");
	$R(1,[fG,bG,$$GHCziFloat_zdfRealFloatDouble7,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       }
      },[KF,PF]);break;
     }break;
    case 2:
     var hG=$t(function(){
      $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble7,PF);
     },[PF],"be");
     $$GHCziIntegerziType_eqInteger.C([KF,$$GHCziFloat$i],function(iG){
      switch(iG.g){
      case 1:
       var jG=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([KF,hG],function(kG){
	 $$GHCziIntegerziType_timesInteger.J(kG,$$GHCziFloat_zdfRealFloatDouble7);
	},[]);
       },[KF,hG],"sat");
       $R(1,[jG,$$GHCziFloat_zdfRealFloatDouble7,hG,hG],"(,,,)");break;
      case 2:
       var lG=$t(function(){
	$$GHCziIntegerziType_timesInteger.J(hG,$$GHCziFloat_zdfRealFloatDouble7);
       },[hG],"sat");
       var mG=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([KF,hG],function(nG){
	 $$GHCziIntegerziType_timesInteger.C([nG,$$GHCziFloat_zdfRealFloatDouble7],function(oG){
	  $$GHCziIntegerziType_timesInteger.J(oG,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[]);
       },[KF,hG],"sat");
       $R(1,[mG,$$GHCziFloat$j,lG,hG],"(,,,)");break;
      }
     },[KF,hG]);break;
    }
   },[KF]);
  },[HF,KF],"ds2");
  var pG=$t(function(){
   $M(NF,function(qG){
    var rG=qG.v[1];
    $A(rG);
   },[]);
  },[NF],"s");
  var sG=$t(function(){
   $M(NF,function(tG){
    var uG=tG.v[2];
    $A(uG);
   },[]);
  },[NF],"mUp");
  var vG=$t(function(){
   $M(NF,function(wG){
    var xG=wG.v[0];
    $A(xG);
   },[]);
  },[NF],"r");
  var yG=$t(function(){
   var zG=$t(function(){
    $$GHCziIntegerziType_plusInteger.J(vG,sG);
   },[sG,vG],"lvl28");
   var AG=$f(1,function(BG){
    var CG=BG.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(CG.g){
    case 1:
     var HG=BG.negate();
     $$GHCziFloat_zdwexpt.C([hF,HG],function(DG){
      $$GHCziIntegerziType_timesInteger.C([DG,zG],function(EG){
       $$GHCziIntegerziType_leInteger.C([EG,pG],function(FG){
	switch(FG.g){
	case 1:
	 var GG=BG.add(goog.math.Long.fromBits(1,0));
	 AG.J(GG);break;
	case 2:
	 $A(BG);break;
	}
       },[BG,AG]);
      },[pG,BG,AG]);
     },[pG,zG,BG,AG]);break;
    case 2:
     $$GHCziFloat_zdwexpt.C([hF,BG],function(IG){
      $$GHCziIntegerziType_timesInteger.C([IG,pG],function(JG){
       $$GHCziIntegerziType_leInteger.C([zG,JG],function(KG){
	switch(KG.g){
	case 1:
	 var LG=BG.add(goog.math.Long.fromBits(1,0));
	 AG.J(LG);break;
	case 2:
	 $A(BG);break;
	}
       },[BG,AG]);
      },[zG,BG,AG]);
     },[pG,zG,BG,AG]);break;
    }
   },[pG,zG,hF],"$wfixup");
   $$GHCziIntegerziType_eqInteger.C([hF,$$GHCziFloat_expts4],function(MG){
    switch(MG.g){
    case 1:
     $$GHCziIntegerziType_plusInteger.C([KF,$$GHCziFloat_zdfRealDouble1],function(NG){
      $$GHCziIntegerziType_floatFromInteger.C([NG],function(dH){
       $M(HF,function(OG){
	var PG=OG.v[0];
	$$GHCziIntegerziType_floatFromInteger.C([hF],function(eH){
	 var YG=$hs_logFloatzh(eH);
	 var ZG=$hs_logFloatzh(dH);
	 var cH=$hs_logFloatzh(2.0);
	 var bH=$hs_int2Floatzh(PG);
	 var aH=bH*cH;
	 var XG=ZG+aH;
	 var WG=XG/YG;
	 var SG=$hs_float2Intzh(WG);
	 var VG=$hs_int2Floatzh(SG);
	 var QG=VG<WG?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(QG.g){
	 case 1:
	  AG.C([SG],function(RG){
	   $R(1,[RG],"I#");
	  },[]);break;
	 case 2:
	  var UG=SG.add(goog.math.Long.fromBits(1,0));
	  AG.C([UG],function(TG){
	   $R(1,[TG],"I#");
	  },[]);break;
	 }
	},[AG,dH,PG]);
       },[hF,AG,dH]);
      },[HF,hF,AG]);
     },[HF,hF,AG]);break;
    case 2:
     $M(pF,function(fH){
      var gH=fH.v[0];
      var lH=goog.math.Long.fromBits(52,0).add(gH);
      var hH=lH.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(hH.g){
      case 1:
       var kH=lH.multiply(goog.math.Long.fromBits(8651,0));
       var jH=$hs_quotIntzh(kH,goog.math.Long.fromBits(28738,0));
       AG.C([jH],function(iH){
	$R(1,[iH],"I#");
       },[]);break;
      case 2:
       var pH=lH.multiply(goog.math.Long.fromBits(8651,0));
       var oH=$hs_quotIntzh(pH,goog.math.Long.fromBits(28738,0));
       var nH=oH.add(goog.math.Long.fromBits(1,0));
       AG.C([nH],function(mH){
	$R(1,[mH],"I#");
       },[]);break;
      }
     },[AG]);break;
    }
   },[pF,HF,KF,hF,AG]);
  },[pF,HF,KF,pG,sG,vG,hF],"k");
  var qH=$t(function(){
   $M(yG,function(rH){
    var sH=rH.v[0];
    var tH=$f(5,function(uH,vH,wH,xH,yH){
     $$GHCziIntegerziType_eqInteger.C([wH,$$GHCziReal_even1],function(zH){
      switch(zH.g){
      case 1:
       $$GHCziIntegerziType_timesInteger.C([vH,hF],function(AH){
	$$GHCziIntegerziType_quotRemInteger.C([AH,wH],function(BH){
	 var CH=BH[0],DH=BH[1];
	 $$GHCziIntegerziType_timesInteger.C([yH,hF],function(EH){
	  $$GHCziIntegerziType_timesInteger.C([xH,hF],function(FH){
	   $$GHCziIntegerziType_ltInteger.C([DH,EH],function(GH){
	    switch(GH.g){
	    case 1:
	     $$GHCziIntegerziType_plusInteger.C([DH,FH],function(HH){
	      $$GHCziIntegerziType_gtInteger.C([HH,wH],function(IH){
	       switch(IH.g){
	       case 1:
		var JH=$d(2,[CH,uH],"sat");
		tH.J(JH,DH,wH,FH,EH);break;
	       case 2:
		var KH=$t(function(){
		 $$GHCziIntegerziType_plusInteger.J(CH,$$GHCziFloat_zdfRealDouble1);
		},[CH],"sat");
		$R(2,[KH,uH],":");break;
	       }
	      },[wH,EH,FH,DH,CH,uH,tH]);
	     },[wH,EH,FH,DH,CH,uH,tH]);break;
	    case 2:
	     $$GHCziIntegerziType_plusInteger.C([DH,FH],function(LH){
	      $$GHCziIntegerziType_gtInteger.C([LH,wH],function(MH){
	       switch(MH.g){
	       case 1:
		$R(2,[CH,uH],":");break;
	       case 2:
		$$GHCziIntegerziType_timesInteger.C([DH,$$GHCziFloat_zdfRealFloatDouble7],function(NH){
		 $$GHCziIntegerziType_ltInteger.C([NH,wH],function(OH){
		  switch(OH.g){
		  case 1:
		   var PH=$t(function(){
		    $$GHCziIntegerziType_plusInteger.J(CH,$$GHCziFloat_zdfRealDouble1);
		   },[CH],"sat");
		   $R(2,[PH,uH],":");break;
		  case 2:
		   $R(2,[CH,uH],":");break;
		  }
		 },[CH,uH]);
		},[wH,CH,uH]);break;
	       }
	      },[wH,DH,CH,uH]);
	     },[wH,DH,CH,uH]);break;
	    }
	   },[wH,EH,FH,DH,CH,uH,tH]);
	  },[wH,EH,DH,CH,uH,tH]);
	 },[hF,wH,xH,DH,CH,uH,tH]);
	},[hF,wH,yH,xH,uH,tH]);
       },[hF,wH,yH,xH,uH,tH]);break;
      case 2:
       $A($$GHCziErr_divZZeroError);break;
      }
     },[hF,wH,vH,yH,xH,uH,tH]);
    },[hF],"gen");
    var QH=sH.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(QH.g){
    case 1:
     $M(NF,function(RH){
      var SH=RH.v[3];
      var ZH=sH.negate();
      $$GHCziFloat_zdwexpt.C([hF,ZH],function(TH){
       $$GHCziIntegerziType_timesInteger.C([SH,TH],function(UH){
	$$GHCziIntegerziType_timesInteger.C([sG,TH],function(VH){
	 $$GHCziIntegerziType_timesInteger.C([vG,TH],function(WH){
	  tH.C([$$GHCziTypes_ZMZN,WH,pG,VH,UH],function(XH){
	   $$GHCziList_reverse1.C([XH,$$GHCziTypes_ZMZN],function(YH){
	    $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,YH);
	   },[]);
	  },[]);
	 },[pG,tH,UH,VH]);
	},[pG,vG,tH,TH,UH]);
       },[pG,sG,vG,tH,TH]);
      },[pG,sG,vG,tH,SH]);
     },[pG,sG,vG,hF,tH,sH]);break;
    case 2:
     $M(NF,function(aI){
      var bI=aI.v[3];
      $$GHCziFloat_zdwexpt.C([hF,sH],function(cI){
       $$GHCziIntegerziType_timesInteger.C([pG,cI],function(dI){
	tH.C([$$GHCziTypes_ZMZN,vG,dI,sG,bI],function(eI){
	 $$GHCziList_reverse1.C([eI,$$GHCziTypes_ZMZN],function(fI){
	  $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,fI);
	 },[]);
	},[]);
       },[sG,vG,tH,bI]);
      },[pG,sG,vG,tH,bI]);
     },[pG,sG,vG,hF,tH,sH]);break;
    }
   },[NF,pG,sG,vG,hF]);
  },[NF,pG,sG,vG,hF,yG],"sat");
  $r([qH,yG]);break;
 case 2:
  $r([$$GHCziFloat$h,$$GHCziFloat_minExpt]);break;
 }
},[],"at libraries/base/GHC/Float.lhs:673:1");
var $$GHCziFloat_zdwzdsfloatToDigits=$f(2,function(nI,oI){
 var pI=oI==0.0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(pI.g){
 case 1:
  var qI=$t(function(){
   var rI=$hs_decodeFloatzuIntzh(oI);
   var sI=rI[0],tI=rI[1];
   var uI=$d(1,[tI],"sat");
   var vI=$t(function(){
    $$GHCziIntegerziType_smallInteger.J(sI);
   },[sI],"sat");
   $R(1,[vI,uI],"(,)");
  },[oI],"ds");
  var wI=$t(function(){
   $M(qI,function(xI){
    var yI=xI.v[1];
    $A(yI);
   },[]);
  },[qI],"e0");
  var zI=$t(function(){
   $M(wI,function(AI){
    var BI=AI.v[0];
    var JI=goog.math.Long.fromBits(4294967147,4294967295).subtract(BI);
    var CI=JI.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(CI.g){
    case 1:
     var DI=$t(function(){
      $M(qI,function(EI){
       var FI=EI.v[0];
       $A(FI);
      },[]);
     },[qI],"sat");
     $R(1,[DI,AI],"(,)");break;
    case 2:
     var HI=BI.add(JI);
     var GI=$d(1,[HI],"sat");
     var II=$t(function(){
      $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,JI],function(KI){
       $$GHCziIntegerziType_eqInteger.C([KI,$$GHCziReal_even1],function(LI){
	switch(LI.g){
	case 1:
	 $M(qI,function(MI){
	  var NI=MI.v[0];
	  $$GHCziIntegerziType_quotInteger.J(NI,KI);
	 },[KI]);break;
	case 2:
	 $A($$GHCziErr_divZZeroError);break;
	}
       },[qI,KI]);
      },[qI]);
     },[qI,JI],"sat");
     $R(1,[II,GI],"(,)");break;
    }
   },[qI]);
  },[qI,wI],"ds1");
  var OI=$t(function(){
   $M(zI,function(PI){
    var QI=PI.v[1];
    $A(QI);
   },[]);
  },[zI],"e");
  var RI=$t(function(){
   $M(zI,function(SI){
    var TI=SI.v[0];
    $A(TI);
   },[]);
  },[zI],"f");
  var UI=$t(function(){
   $M(OI,function(VI){
    var WI=VI.v[0];
    var XI=WI.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(XI.g){
    case 1:
     var YI=WI.greaterThan(goog.math.Long.fromBits(4294967147,4294967295))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(YI.g){
     case 1:
      var ZI=$t(function(){
       var bJ=WI.negate();
       $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,bJ],function(aJ){
	$$GHCziIntegerziType_timesInteger.J(aJ,$$GHCziFloat_zdfRealFloatDouble7);
       },[]);
      },[WI],"sat");
      var cJ=$t(function(){
       $$GHCziIntegerziType_timesInteger.J(RI,$$GHCziFloat_zdfRealFloatDouble7);
      },[RI],"sat");
      $R(1,[cJ,ZI,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
     case 2:
      $$GHCziIntegerziType_eqInteger.C([RI,$$GHCziFloat$l],function(dJ){
       switch(dJ.g){
       case 1:
	var eJ=$t(function(){
	 var gJ=WI.negate();
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,gJ],function(fJ){
	  $$GHCziIntegerziType_timesInteger.J(fJ,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[WI],"sat");
	var hJ=$t(function(){
	 $$GHCziIntegerziType_timesInteger.J(RI,$$GHCziFloat_zdfRealFloatDouble7);
	},[RI],"sat");
	$R(1,[hJ,eJ,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       case 2:
	var iJ=$t(function(){
	 var lJ=WI.negate();
	 var kJ=lJ.add(goog.math.Long.fromBits(1,0));
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,kJ],function(jJ){
	  $$GHCziIntegerziType_timesInteger.J(jJ,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[WI],"sat");
	var mJ=$t(function(){
	 $$GHCziIntegerziType_timesInteger.C([RI,$$GHCziFloat_zdfRealFloatDouble7],function(nJ){
	  $$GHCziIntegerziType_timesInteger.J(nJ,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[RI],"sat");
	$R(1,[mJ,iJ,$$GHCziFloat_zdfRealFloatDouble7,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       }
      },[RI,WI]);break;
     }break;
    case 2:
     var oJ=$t(function(){
      $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble7,WI);
     },[WI],"be");
     $$GHCziIntegerziType_eqInteger.C([RI,$$GHCziFloat$l],function(pJ){
      switch(pJ.g){
      case 1:
       var qJ=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([RI,oJ],function(rJ){
	 $$GHCziIntegerziType_timesInteger.J(rJ,$$GHCziFloat_zdfRealFloatDouble7);
	},[]);
       },[RI,oJ],"sat");
       $R(1,[qJ,$$GHCziFloat_zdfRealFloatDouble7,oJ,oJ],"(,,,)");break;
      case 2:
       var sJ=$t(function(){
	$$GHCziIntegerziType_timesInteger.J(oJ,$$GHCziFloat_zdfRealFloatDouble7);
       },[oJ],"sat");
       var tJ=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([RI,oJ],function(uJ){
	 $$GHCziIntegerziType_timesInteger.C([uJ,$$GHCziFloat_zdfRealFloatDouble7],function(vJ){
	  $$GHCziIntegerziType_timesInteger.J(vJ,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[]);
       },[RI,oJ],"sat");
       $R(1,[tJ,$$GHCziFloat$j,sJ,oJ],"(,,,)");break;
      }
     },[RI,oJ]);break;
    }
   },[RI]);
  },[OI,RI],"ds2");
  var wJ=$t(function(){
   $M(UI,function(xJ){
    var yJ=xJ.v[1];
    $A(yJ);
   },[]);
  },[UI],"s");
  var zJ=$t(function(){
   $M(UI,function(AJ){
    var BJ=AJ.v[2];
    $A(BJ);
   },[]);
  },[UI],"mUp");
  var CJ=$t(function(){
   $M(UI,function(DJ){
    var EJ=DJ.v[0];
    $A(EJ);
   },[]);
  },[UI],"r");
  var FJ=$t(function(){
   var GJ=$t(function(){
    $$GHCziIntegerziType_plusInteger.J(CJ,zJ);
   },[zJ,CJ],"lvl28");
   var HJ=$f(1,function(IJ){
    var JJ=IJ.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(JJ.g){
    case 1:
     var OJ=IJ.negate();
     $$GHCziFloat_zdwexpt.C([nI,OJ],function(KJ){
      $$GHCziIntegerziType_timesInteger.C([KJ,GJ],function(LJ){
       $$GHCziIntegerziType_leInteger.C([LJ,wJ],function(MJ){
	switch(MJ.g){
	case 1:
	 var NJ=IJ.add(goog.math.Long.fromBits(1,0));
	 HJ.J(NJ);break;
	case 2:
	 $A(IJ);break;
	}
       },[IJ,HJ]);
      },[wJ,IJ,HJ]);
     },[wJ,GJ,IJ,HJ]);break;
    case 2:
     $$GHCziFloat_zdwexpt.C([nI,IJ],function(PJ){
      $$GHCziIntegerziType_timesInteger.C([PJ,wJ],function(QJ){
       $$GHCziIntegerziType_leInteger.C([GJ,QJ],function(RJ){
	switch(RJ.g){
	case 1:
	 var SJ=IJ.add(goog.math.Long.fromBits(1,0));
	 HJ.J(SJ);break;
	case 2:
	 $A(IJ);break;
	}
       },[IJ,HJ]);
      },[GJ,IJ,HJ]);
     },[wJ,GJ,IJ,HJ]);break;
    }
   },[wJ,GJ,nI],"$wfixup");
   $$GHCziIntegerziType_eqInteger.C([nI,$$GHCziFloat_expts4],function(TJ){
    switch(TJ.g){
    case 1:
     $$GHCziIntegerziType_plusInteger.C([RI,$$GHCziFloat_zdfRealDouble1],function(UJ){
      $$GHCziIntegerziType_floatFromInteger.C([UJ],function(kK){
       $M(OI,function(VJ){
	var WJ=VJ.v[0];
	$$GHCziIntegerziType_floatFromInteger.C([nI],function(lK){
	 var fK=$hs_logFloatzh(lK);
	 var gK=$hs_logFloatzh(kK);
	 var jK=$hs_logFloatzh(2.0);
	 var iK=$hs_int2Floatzh(WJ);
	 var hK=iK*jK;
	 var eK=gK+hK;
	 var dK=eK/fK;
	 var ZJ=$hs_float2Intzh(dK);
	 var cK=$hs_int2Floatzh(ZJ);
	 var XJ=cK<dK?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(XJ.g){
	 case 1:
	  HJ.C([ZJ],function(YJ){
	   $R(1,[YJ],"I#");
	  },[]);break;
	 case 2:
	  var bK=ZJ.add(goog.math.Long.fromBits(1,0));
	  HJ.C([bK],function(aK){
	   $R(1,[aK],"I#");
	  },[]);break;
	 }
	},[HJ,kK,WJ]);
       },[nI,HJ,kK]);
      },[OI,nI,HJ]);
     },[OI,nI,HJ]);break;
    case 2:
     $M(wI,function(mK){
      var nK=mK.v[0];
      var sK=goog.math.Long.fromBits(23,0).add(nK);
      var oK=sK.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(oK.g){
      case 1:
       var rK=sK.multiply(goog.math.Long.fromBits(8651,0));
       var qK=$hs_quotIntzh(rK,goog.math.Long.fromBits(28738,0));
       HJ.C([qK],function(pK){
	$R(1,[pK],"I#");
       },[]);break;
      case 2:
       var wK=sK.multiply(goog.math.Long.fromBits(8651,0));
       var vK=$hs_quotIntzh(wK,goog.math.Long.fromBits(28738,0));
       var uK=vK.add(goog.math.Long.fromBits(1,0));
       HJ.C([uK],function(tK){
	$R(1,[tK],"I#");
       },[]);break;
      }
     },[HJ]);break;
    }
   },[wI,OI,RI,nI,HJ]);
  },[wI,OI,RI,wJ,zJ,CJ,nI],"k");
  var xK=$t(function(){
   $M(FJ,function(yK){
    var zK=yK.v[0];
    var AK=$f(5,function(BK,CK,DK,EK,FK){
     $$GHCziIntegerziType_eqInteger.C([DK,$$GHCziReal_even1],function(GK){
      switch(GK.g){
      case 1:
       $$GHCziIntegerziType_timesInteger.C([CK,nI],function(HK){
	$$GHCziIntegerziType_quotRemInteger.C([HK,DK],function(IK){
	 var JK=IK[0],KK=IK[1];
	 $$GHCziIntegerziType_timesInteger.C([FK,nI],function(LK){
	  $$GHCziIntegerziType_timesInteger.C([EK,nI],function(MK){
	   $$GHCziIntegerziType_ltInteger.C([KK,LK],function(NK){
	    switch(NK.g){
	    case 1:
	     $$GHCziIntegerziType_plusInteger.C([KK,MK],function(OK){
	      $$GHCziIntegerziType_gtInteger.C([OK,DK],function(PK){
	       switch(PK.g){
	       case 1:
		var QK=$d(2,[JK,BK],"sat");
		AK.J(QK,KK,DK,MK,LK);break;
	       case 2:
		var RK=$t(function(){
		 $$GHCziIntegerziType_plusInteger.J(JK,$$GHCziFloat_zdfRealDouble1);
		},[JK],"sat");
		$R(2,[RK,BK],":");break;
	       }
	      },[DK,LK,MK,KK,JK,BK,AK]);
	     },[DK,LK,MK,KK,JK,BK,AK]);break;
	    case 2:
	     $$GHCziIntegerziType_plusInteger.C([KK,MK],function(SK){
	      $$GHCziIntegerziType_gtInteger.C([SK,DK],function(TK){
	       switch(TK.g){
	       case 1:
		$R(2,[JK,BK],":");break;
	       case 2:
		$$GHCziIntegerziType_timesInteger.C([KK,$$GHCziFloat_zdfRealFloatDouble7],function(UK){
		 $$GHCziIntegerziType_ltInteger.C([UK,DK],function(VK){
		  switch(VK.g){
		  case 1:
		   var WK=$t(function(){
		    $$GHCziIntegerziType_plusInteger.J(JK,$$GHCziFloat_zdfRealDouble1);
		   },[JK],"sat");
		   $R(2,[WK,BK],":");break;
		  case 2:
		   $R(2,[JK,BK],":");break;
		  }
		 },[JK,BK]);
		},[DK,JK,BK]);break;
	       }
	      },[DK,KK,JK,BK]);
	     },[DK,KK,JK,BK]);break;
	    }
	   },[DK,LK,MK,KK,JK,BK,AK]);
	  },[DK,LK,KK,JK,BK,AK]);
	 },[nI,DK,EK,KK,JK,BK,AK]);
	},[nI,DK,FK,EK,BK,AK]);
       },[nI,DK,FK,EK,BK,AK]);break;
      case 2:
       $A($$GHCziErr_divZZeroError);break;
      }
     },[nI,DK,CK,FK,EK,BK,AK]);
    },[nI],"gen");
    var XK=zK.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(XK.g){
    case 1:
     $M(UI,function(YK){
      var ZK=YK.v[3];
      var gL=zK.negate();
      $$GHCziFloat_zdwexpt.C([nI,gL],function(aL){
       $$GHCziIntegerziType_timesInteger.C([ZK,aL],function(bL){
	$$GHCziIntegerziType_timesInteger.C([zJ,aL],function(cL){
	 $$GHCziIntegerziType_timesInteger.C([CJ,aL],function(dL){
	  AK.C([$$GHCziTypes_ZMZN,dL,wJ,cL,bL],function(eL){
	   $$GHCziList_reverse1.C([eL,$$GHCziTypes_ZMZN],function(fL){
	    $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,fL);
	   },[]);
	  },[]);
	 },[wJ,AK,bL,cL]);
	},[wJ,CJ,AK,aL,bL]);
       },[wJ,zJ,CJ,AK,aL]);
      },[wJ,zJ,CJ,AK,ZK]);
     },[wJ,zJ,CJ,nI,AK,zK]);break;
    case 2:
     $M(UI,function(hL){
      var iL=hL.v[3];
      $$GHCziFloat_zdwexpt.C([nI,zK],function(jL){
       $$GHCziIntegerziType_timesInteger.C([wJ,jL],function(kL){
	AK.C([$$GHCziTypes_ZMZN,CJ,kL,zJ,iL],function(lL){
	 $$GHCziList_reverse1.C([lL,$$GHCziTypes_ZMZN],function(mL){
	  $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,mL);
	 },[]);
	},[]);
       },[zJ,CJ,AK,iL]);
      },[wJ,zJ,CJ,AK,iL]);
     },[wJ,zJ,CJ,nI,AK,zK]);break;
    }
   },[UI,wJ,zJ,CJ,nI]);
  },[UI,wJ,zJ,CJ,nI,FJ],"sat");
  $r([xK,FJ]);break;
 case 2:
  $r([$$GHCziFloat$k,$$GHCziFloat_minExpt]);break;
 }
},[],"at libraries/base/GHC/Float.lhs:673:1");
var $$GHCziFloat_zdwzdsformatRealFloat=$f(3,function(tP,uP,vP){
 var $ff=isDoubleNaN(vP);
 var wP=[$$GHCziPrim_realWorldzh,$ff];
 var xP=wP[1];
 $M(xP,function(yP){
  switch(yP.toString()){
  case "0":
   var $ff=isDoubleInfinite(vP);
   var zP=[$$GHCziPrim_realWorldzh,$ff];
   var AP=zP[1];
   $M(AP,function(BP){
    switch(BP.toString()){
    case "0":
     var DP=$f(2,function(EP,FP){
      $M(uP,function(GP){
       switch(GP.g){
       case 1:
	$$GHCziBase_map.C([$$GHCziShow_intToDigit,EP],function(HP){
	 switch(HP.g){
	 case 1:
	  $A($$GHCziFloat$p);break;
	 case 2:
	  var IP=HP.v[0],JP=HP.v[1];
	  $M(IP,function(KP){
	   var LP=KP.v[0];
	   var MP=$t(function(){
	    $M(JP,function(NP){
	     switch(NP.g){
	     case 1:
	      var OP=$t(function(){
	       var PP=$t(function(){
		var QP=FP.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),QP,$$GHCziTypes_ZMZN);
	       },[FP],"sat");
	       $$GHCziCString_unpackAppendCStringzh.J(".0e",PP);
	      },[FP],"sat");
	      $R(2,[KP,OP],":");break;
	     case 2:
	      var RP=$t(function(){
	       var SP=$t(function(){
		var TP=FP.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_itos.J(TP,$$GHCziTypes_ZMZN);
	       },[FP],"sat");
	       var UP=$d(2,[$$GHCziFloat$t,SP],"sat");
	       $$GHCziBase_zpzp.J(NP,UP);
	      },[FP,NP],"sat");
	      var VP=$d(2,[$$GHCziFloat$q,RP],"sat");
	      $R(2,[KP,VP],":");break;
	     }
	    },[KP,FP]);
	   },[JP,KP,FP],"$wfail");
	   $M(LP,function(WP){
	    switch(WP.toString()){
	    case "0":
	     $M(JP,function(XP){
	      switch(XP.g){
	      case 1:
	       $A($$GHCziFloat$r);break;
	      case 2:
	       $A(MP);break;
	      }
	     },[JP,KP,FP,MP]);break;
	    default:
	     $A(MP);
	    }
	   },[JP,KP,FP,MP]);
	  },[JP,FP]);break;
	 }
	},[FP]);break;
       case 2:
	var YP=GP.v[0];
	var ZP=$t(function(){
	 $M(YP,function(aQ){
	  var bQ=aQ.v[0];
	  var cQ=bQ.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(cQ.g){
	  case 1:
	   $A(aQ);break;
	  case 2:
	   $A($$GHCziFloat_zdfRealFracFloat2);break;
	  }
	 },[]);
	},[YP],"dec'");
	var dQ=$t(function(){
	 var eQ=$t(function(){
	  $M(ZP,function(fQ){
	   var gQ=fQ.v[0];
	   var hQ=gQ.add(goog.math.Long.fromBits(1,0));
	   $R(1,[hQ],"I#");
	  },[]);
	 },[ZP],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,eQ,EP],function(iQ){
	  var jQ=iQ[0],kQ=iQ[1];
	  $R(1,[jQ,kQ],"(,)");
	 },[]);
	},[EP,ZP],"ds4");
	var lQ=$t(function(){
	 $M(dQ,function(mQ){
	  var nQ=mQ.v[0];
	  $A(nQ);
	 },[]);
	},[dQ],"ei");
	var oQ=$t(function(){
	 $M(lQ,function(pQ){
	  var qQ=pQ.v[0];
	  var rQ=qQ.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(rQ.g){
	  case 1:
	   $M(dQ,function(sQ){
	    var tQ=sQ.v[1];
	    $$GHCziBase_map.C([$$GHCziShow_intToDigit,tQ],function(uQ){
	     switch(uQ.g){
	     case 1:
	      $A($$GHCziFloat$s);break;
	     case 2:
	      var vQ=uQ.v[0],wQ=uQ.v[1];
	      $R(1,[vQ,wQ],"(,)");break;
	     }
	    },[]);
	   },[]);break;
	  case 2:
	   $M(dQ,function(xQ){
	    var yQ=xQ.v[1];
	    $M(yQ,function(zQ){
	     switch(zQ.g){
	     case 1:
	      $A($$GHCziList_init2);break;
	     case 2:
	      var AQ=zQ.v[0],BQ=zQ.v[1];
	      $$GHCziList_init1.C([AQ,BQ],function(CQ){
	       $$GHCziBase_map.C([$$GHCziShow_intToDigit,CQ],function(DQ){
		switch(DQ.g){
		case 1:
		 $A($$GHCziFloat$s);break;
		case 2:
		 var EQ=DQ.v[0],FQ=DQ.v[1];
		 $R(1,[EQ,FQ],"(,)");break;
		}
	       },[]);
	      },[]);break;
	     }
	    },[]);
	   },[]);break;
	  }
	 },[dQ]);
	},[dQ,lQ],"ds5");
	var GQ=$t(function(){
	 $M(oQ,function(HQ){
	  var IQ=HQ.v[1];
	  var JQ=$t(function(){
	   $M(lQ,function(KQ){
	    var LQ=KQ.v[0];
	    var NQ=FP.subtract(goog.math.Long.fromBits(1,0));
	    var MQ=NQ.add(LQ);
	    $$GHCziShow_itos.J(MQ,$$GHCziTypes_ZMZN);
	   },[FP]);
	  },[FP,lQ],"sat");
	  var OQ=$d(2,[$$GHCziFloat$t,JQ],"sat");
	  $$GHCziBase_zpzp.J(IQ,OQ);
	 },[FP,lQ]);
	},[FP,lQ,oQ],"a");
	$M(EP,function(PQ){
	 switch(PQ.g){
	 case 1:
	  var QQ=$d(2,[$$GHCziFloat$q,GQ],"sat");
	  var RQ=$t(function(){
	   $M(oQ,function(SQ){
	    var TQ=SQ.v[0];
	    $A(TQ);
	   },[]);
	  },[oQ],"sat");
	  $R(2,[RQ,QQ],":");break;
	 case 2:
	  var UQ=PQ.v[0],VQ=PQ.v[1];
	  $M(UQ,function(WQ){
	   var XQ=WQ.v[0];
	   $M(XQ,function(YQ){
	    switch(YQ.toString()){
	    case "0":
	     $M(VQ,function(dR){
	      switch(dR.g){
	      case 1:
	       var eR=$t(function(){
		$M(ZP,function(fR){
		 var gR=fR.v[0];
		 var hR=gR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(hR.g){
		 case 1:
		  $$GHCziFloat$F.J($$GHCziFloat$v,gR);break;
		 case 2:
		  $A($$GHCziFloat$E);break;
		 }
		},[]);
	       },[ZP],"sat");
	       var iR=$d(2,[$$GHCziFloat$q,eR],"sat");
	       $R(2,[$$GHCziFloat$u,iR],":");break;
	      case 2:
	       var jR=$d(2,[$$GHCziFloat$q,GQ],"sat");
	       var kR=$t(function(){
		$M(oQ,function(lR){
		 var mR=lR.v[0];
		 $A(mR);
		},[]);
	       },[oQ],"sat");
	       $R(2,[kR,jR],":");break;
	      }
	     },[ZP,oQ,GQ]);break;
	    default:
	     var ZQ=$d(2,[$$GHCziFloat$q,GQ],"sat");
	     var aR=$t(function(){
	      $M(oQ,function(bR){
	       var cR=bR.v[0];
	       $A(cR);
	      },[]);
	     },[oQ],"sat");
	     $R(2,[aR,ZQ],":");
	    }
	   },[ZP,oQ,GQ,VQ]);
	  },[ZP,oQ,GQ,VQ]);break;
	 }
	},[ZP,oQ,GQ]);break;
       }
      },[EP,FP]);
     },[uP],"$s$wdoFmt");
     var nR=$f(2,function(oR,pR){
      $M(uP,function(qR){
       switch(qR.g){
       case 1:
	var rR=pR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(rR.g){
	case 1:
	 var sR=$t(function(){
	  $$GHCziBase_map.J($$GHCziShow_intToDigit,oR);
	 },[oR],"sat");
	 $$GHCziFloat$y.J(pR,$$GHCziTypes_ZMZN,sR);break;
	case 2:
	 var tR=$t(function(){
	  var CR=pR.negate();
	  var uR=CR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(uR.g){
	  case 1:
	   var vR=$t(function(){
	    $$GHCziBase_map.J($$GHCziShow_intToDigit,oR);
	   },[oR],"n");
	   var wR=$d(2,[$$GHCziFloat$u,vR],"lvl28");
	   var xR=$f(1,function(yR){
	    var zR=yR.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(zR.g){
	    case 1:
	     var AR=$t(function(){
	      var BR=yR.subtract(goog.math.Long.fromBits(1,0));
	      xR.J(BR);
	     },[yR,xR],"sat");
	     $R(2,[$$GHCziFloat$u,AR],":");break;
	    case 2:
	     $A(wR);break;
	    }
	   },[wR],"xs3");
	   xR.J(CR);break;
	  case 2:
	   $$GHCziBase_map.J($$GHCziShow_intToDigit,oR);break;
	  }
	 },[pR,oR],"sat");
	 $$GHCziCString_unpackAppendCStringzh.J("0.",tR);break;
	}break;
       case 2:
	var DR=qR.v[0];
	var ER=pR.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(ER.g){
	case 1:
	 var FR=$t(function(){
	  var VR=pR.negate();
	  var GR=VR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(GR.g){
	  case 1:
	   var HR=$d(2,[$$GHCziFloat_minExpt,oR],"lvl28");
	   var IR=$f(1,function(JR){
	    var KR=JR.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(KR.g){
	    case 1:
	     var LR=$t(function(){
	      var MR=JR.subtract(goog.math.Long.fromBits(1,0));
	      IR.J(MR);
	     },[JR,IR],"sat");
	     $R(2,[$$GHCziFloat_minExpt,LR],":");break;
	    case 2:
	     $A(HR);break;
	    }
	   },[HR],"xs3");
	   IR.C([VR],function(NR){
	    var OR=$t(function(){
	     $M(DR,function(PR){
	      var QR=PR.v[0];
	      var RR=QR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(RR.g){
	      case 1:
	       $A(PR);break;
	      case 2:
	       $A($$GHCziFloat_minExpt);break;
	      }
	     },[]);
	    },[DR],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,OR,NR],function(SR){
	     var TR=SR[0],UR=SR[1];
	     $$GHCziFloat$G.J(TR,UR);
	    },[]);
	   },[DR]);break;
	  case 2:
	   var WR=$t(function(){
	    $M(DR,function(XR){
	     var YR=XR.v[0];
	     var ZR=YR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(ZR.g){
	     case 1:
	      $A(XR);break;
	     case 2:
	      $A($$GHCziFloat_minExpt);break;
	     }
	    },[]);
	   },[DR],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,WR,oR],function(aS){
	    var bS=aS[0],cS=aS[1];
	    $$GHCziFloat$G.J(bS,cS);
	   },[]);break;
	  }
	 },[pR,oR,DR],"ds4");
	 var dS=$t(function(){
	  $M(FR,function(eS){
	   var fS=eS.v[1];
	   $M(fS,function(gS){
	    switch(gS.g){
	    case 1:
	     $R(1,[],"[]");break;
	    case 2:
	     $R(2,[$$GHCziFloat$q,gS],":");break;
	    }
	   },[]);
	  },[]);
	 },[FR],"sat");
	 var hS=$t(function(){
	  $M(FR,function(iS){
	   var jS=iS.v[0];
	   $A(jS);
	  },[]);
	 },[FR],"sat");
	 $R(2,[hS,dS],":");break;
	case 2:
	 var kS=$t(function(){
	  $M(DR,function(lS){
	   var mS=lS.v[0];
	   var nS=mS.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(nS.g){
	   case 1:
	    var oS=mS.add(pR);
	    $R(1,[oS],"I#");break;
	   case 2:
	    $R(1,[pR],"I#");break;
	   }
	  },[pR]);
	 },[pR,DR],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,kS,oR],function(pS){
	  var qS=pS[0],rS=pS[1];
	  $M(qS,function(sS){
	   var tS=sS.v[0];
	   var ES=pR.add(tS);
	   var uS=ES.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(uS.g){
	   case 1:
	    var vS=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,rS);
	    },[rS],"sat");
	    $$GHCziList_zdwsplitAtzh.C([ES,vS],function(wS){
	     var xS=wS[0],yS=wS[1];
	     $M(xS,function(zS){
	      switch(zS.g){
	      case 1:
	       var AS=$t(function(){
		$M(yS,function(BS){
		 switch(BS.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$q,BS],":");break;
		 }
		},[]);
	       },[yS],"sat");
	       $R(2,[$$GHCziFloat$u,AS],":");break;
	      case 2:
	       var CS=$t(function(){
		$M(yS,function(DS){
		 switch(DS.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$q,DS],":");break;
		 }
		},[]);
	       },[yS],"sat");
	       $$GHCziBase_zpzp.J(zS,CS);break;
	      }
	     },[yS]);
	    },[]);break;
	   case 2:
	    var FS=$t(function(){
	     $$GHCziBase_map.C([$$GHCziShow_intToDigit,rS],function(GS){
	      switch(GS.g){
	      case 1:
	       $R(1,[],"[]");break;
	      case 2:
	       $R(2,[$$GHCziFloat$q,GS],":");break;
	      }
	     },[]);
	    },[rS],"sat");
	    $R(2,[$$GHCziFloat$u,FS],":");break;
	   }
	  },[pR,rS]);
	 },[pR]);break;
	}break;
       }
      },[pR,oR]);
     },[uP],"$s$wdoFmt1");
     var HS=$f(3,function(IS,JS,KS){
      $M(IS,function(LS){
       switch(LS.g){
       case 1:
	$M(uP,function(MS){
	 switch(MS.g){
	 case 1:
	  $$GHCziBase_map.C([$$GHCziShow_intToDigit,JS],function(NS){
	   switch(NS.g){
	   case 1:
	    $A($$GHCziFloat$p);break;
	   case 2:
	    var OS=NS.v[0],PS=NS.v[1];
	    $M(OS,function(QS){
	     var RS=QS.v[0];
	     var SS=$t(function(){
	      $M(PS,function(TS){
	       switch(TS.g){
	       case 1:
		var US=$t(function(){
		 var VS=$t(function(){
		  $M(KS,function(WS){
		   var XS=WS.v[0];
		   var YS=XS.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),YS,$$GHCziTypes_ZMZN);
		  },[]);
		 },[KS],"sat");
		 $$GHCziCString_unpackAppendCStringzh.J(".0e",VS);
		},[KS],"sat");
		$R(2,[QS,US],":");break;
	       case 2:
		var ZS=$t(function(){
		 var aT=$t(function(){
		  $M(KS,function(bT){
		   var cT=bT.v[0];
		   var dT=cT.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_itos.J(dT,$$GHCziTypes_ZMZN);
		  },[]);
		 },[KS],"sat");
		 var eT=$d(2,[$$GHCziFloat$t,aT],"sat");
		 $$GHCziBase_zpzp.J(TS,eT);
		},[KS,TS],"sat");
		var fT=$d(2,[$$GHCziFloat$q,ZS],"sat");
		$R(2,[QS,fT],":");break;
	       }
	      },[QS,KS]);
	     },[PS,QS,KS],"$wfail");
	     $M(RS,function(gT){
	      switch(gT.toString()){
	      case "0":
	       $M(PS,function(hT){
		switch(hT.g){
		case 1:
		 $A($$GHCziFloat$r);break;
		case 2:
		 $A(SS);break;
		}
	       },[PS,QS,KS,SS]);break;
	      default:
	       $A(SS);
	      }
	     },[PS,QS,KS,SS]);
	    },[PS,KS]);break;
	   }
	  },[KS]);break;
	 case 2:
	  var iT=MS.v[0];
	  var jT=$t(function(){
	   $M(iT,function(kT){
	    var lT=kT.v[0];
	    var mT=lT.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(mT.g){
	    case 1:
	     $A(kT);break;
	    case 2:
	     $A($$GHCziFloat_zdfRealFracFloat2);break;
	    }
	   },[]);
	  },[iT],"dec'");
	  var nT=$t(function(){
	   var oT=$t(function(){
	    $M(jT,function(pT){
	     var qT=pT.v[0];
	     var rT=qT.add(goog.math.Long.fromBits(1,0));
	     $R(1,[rT],"I#");
	    },[]);
	   },[jT],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,oT,JS],function(sT){
	    var tT=sT[0],uT=sT[1];
	    $R(1,[tT,uT],"(,)");
	   },[]);
	  },[JS,jT],"ds4");
	  var vT=$t(function(){
	   $M(nT,function(wT){
	    var xT=wT.v[0];
	    $A(xT);
	   },[]);
	  },[nT],"ei");
	  var yT=$t(function(){
	   $M(vT,function(zT){
	    var AT=zT.v[0];
	    var BT=AT.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(BT.g){
	    case 1:
	     $M(nT,function(CT){
	      var DT=CT.v[1];
	      $$GHCziBase_map.C([$$GHCziShow_intToDigit,DT],function(ET){
	       switch(ET.g){
	       case 1:
		$A($$GHCziFloat$s);break;
	       case 2:
		var FT=ET.v[0],GT=ET.v[1];
		$R(1,[FT,GT],"(,)");break;
	       }
	      },[]);
	     },[]);break;
	    case 2:
	     $M(nT,function(HT){
	      var IT=HT.v[1];
	      $M(IT,function(JT){
	       switch(JT.g){
	       case 1:
		$A($$GHCziList_init2);break;
	       case 2:
		var KT=JT.v[0],LT=JT.v[1];
		$$GHCziList_init1.C([KT,LT],function(MT){
		 $$GHCziBase_map.C([$$GHCziShow_intToDigit,MT],function(NT){
		  switch(NT.g){
		  case 1:
		   $A($$GHCziFloat$s);break;
		  case 2:
		   var OT=NT.v[0],PT=NT.v[1];
		   $R(1,[OT,PT],"(,)");break;
		  }
		 },[]);
		},[]);break;
	       }
	      },[]);
	     },[]);break;
	    }
	   },[nT]);
	  },[nT,vT],"ds5");
	  var QT=$t(function(){
	   $M(yT,function(RT){
	    var ST=RT.v[1];
	    var TT=$t(function(){
	     $M(KS,function(UT){
	      var VT=UT.v[0];
	      $M(vT,function(WT){
	       var XT=WT.v[0];
	       var ZT=VT.subtract(goog.math.Long.fromBits(1,0));
	       var YT=ZT.add(XT);
	       $$GHCziShow_itos.J(YT,$$GHCziTypes_ZMZN);
	      },[VT]);
	     },[vT]);
	    },[KS,vT],"sat");
	    var aU=$d(2,[$$GHCziFloat$t,TT],"sat");
	    $$GHCziBase_zpzp.J(ST,aU);
	   },[KS,vT]);
	  },[KS,vT,yT],"a");
	  $M(JS,function(bU){
	   switch(bU.g){
	   case 1:
	    var cU=$d(2,[$$GHCziFloat$q,QT],"sat");
	    var dU=$t(function(){
	     $M(yT,function(eU){
	      var fU=eU.v[0];
	      $A(fU);
	     },[]);
	    },[yT],"sat");
	    $R(2,[dU,cU],":");break;
	   case 2:
	    var gU=bU.v[0],hU=bU.v[1];
	    $M(gU,function(iU){
	     var jU=iU.v[0];
	     $M(jU,function(kU){
	      switch(kU.toString()){
	      case "0":
	       $M(hU,function(pU){
		switch(pU.g){
		case 1:
		 var qU=$t(function(){
		  $M(jT,function(rU){
		   var sU=rU.v[0];
		   var tU=sU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(tU.g){
		   case 1:
		    $$GHCziFloat$F.J($$GHCziFloat$v,sU);break;
		   case 2:
		    $A($$GHCziFloat$E);break;
		   }
		  },[]);
		 },[jT],"sat");
		 var uU=$d(2,[$$GHCziFloat$q,qU],"sat");
		 $R(2,[$$GHCziFloat$u,uU],":");break;
		case 2:
		 var vU=$d(2,[$$GHCziFloat$q,QT],"sat");
		 var wU=$t(function(){
		  $M(yT,function(xU){
		   var yU=xU.v[0];
		   $A(yU);
		  },[]);
		 },[yT],"sat");
		 $R(2,[wU,vU],":");break;
		}
	       },[jT,yT,QT]);break;
	      default:
	       var lU=$d(2,[$$GHCziFloat$q,QT],"sat");
	       var mU=$t(function(){
		$M(yT,function(nU){
		 var oU=nU.v[0];
		 $A(oU);
		},[]);
	       },[yT],"sat");
	       $R(2,[mU,lU],":");
	      }
	     },[jT,yT,QT,hU]);
	    },[jT,yT,QT,hU]);break;
	   }
	  },[jT,yT,QT]);break;
	 }
	},[JS,KS]);break;
       case 2:
	$M(uP,function(zU){
	 switch(zU.g){
	 case 1:
	  $M(KS,function(AU){
	   var BU=AU.v[0];
	   var CU=BU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(CU.g){
	   case 1:
	    var DU=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,JS);
	    },[JS],"sat");
	    $$GHCziFloat$y.J(BU,$$GHCziTypes_ZMZN,DU);break;
	   case 2:
	    var EU=$t(function(){
	     var NU=BU.negate();
	     var FU=NU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(FU.g){
	     case 1:
	      var GU=$t(function(){
	       $$GHCziBase_map.J($$GHCziShow_intToDigit,JS);
	      },[JS],"n");
	      var HU=$d(2,[$$GHCziFloat$u,GU],"lvl28");
	      var IU=$f(1,function(JU){
	       var KU=JU.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(KU.g){
	       case 1:
		var LU=$t(function(){
		 var MU=JU.subtract(goog.math.Long.fromBits(1,0));
		 IU.J(MU);
		},[JU,IU],"sat");
		$R(2,[$$GHCziFloat$u,LU],":");break;
	       case 2:
		$A(HU);break;
	       }
	      },[HU],"xs3");
	      IU.J(NU);break;
	     case 2:
	      $$GHCziBase_map.J($$GHCziShow_intToDigit,JS);break;
	     }
	    },[JS,BU],"sat");
	    $$GHCziCString_unpackAppendCStringzh.J("0.",EU);break;
	   }
	  },[JS]);break;
	 case 2:
	  var OU=zU.v[0];
	  $M(KS,function(PU){
	   var QU=PU.v[0];
	   var RU=QU.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(RU.g){
	   case 1:
	    var SU=$t(function(){
	     var iV=QU.negate();
	     var TU=iV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(TU.g){
	     case 1:
	      var UU=$d(2,[$$GHCziFloat_minExpt,JS],"lvl28");
	      var VU=$f(1,function(WU){
	       var XU=WU.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(XU.g){
	       case 1:
		var YU=$t(function(){
		 var ZU=WU.subtract(goog.math.Long.fromBits(1,0));
		 VU.J(ZU);
		},[WU,VU],"sat");
		$R(2,[$$GHCziFloat_minExpt,YU],":");break;
	       case 2:
		$A(UU);break;
	       }
	      },[UU],"xs3");
	      VU.C([iV],function(aV){
	       var bV=$t(function(){
		$M(OU,function(cV){
		 var dV=cV.v[0];
		 var eV=dV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(eV.g){
		 case 1:
		  $A(cV);break;
		 case 2:
		  $A($$GHCziFloat_minExpt);break;
		 }
		},[]);
	       },[OU],"sat");
	       $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,bV,aV],function(fV){
		var gV=fV[0],hV=fV[1];
		$$GHCziFloat$G.J(gV,hV);
	       },[]);
	      },[OU]);break;
	     case 2:
	      var jV=$t(function(){
	       $M(OU,function(kV){
		var lV=kV.v[0];
		var mV=lV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(mV.g){
		case 1:
		 $A(kV);break;
		case 2:
		 $A($$GHCziFloat_minExpt);break;
		}
	       },[]);
	      },[OU],"sat");
	      $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,jV,JS],function(nV){
	       var oV=nV[0],pV=nV[1];
	       $$GHCziFloat$G.J(oV,pV);
	      },[]);break;
	     }
	    },[JS,QU,OU],"ds4");
	    var qV=$t(function(){
	     $M(SU,function(rV){
	      var sV=rV.v[1];
	      $M(sV,function(tV){
	       switch(tV.g){
	       case 1:
		$R(1,[],"[]");break;
	       case 2:
		$R(2,[$$GHCziFloat$q,tV],":");break;
	       }
	      },[]);
	     },[]);
	    },[SU],"sat");
	    var uV=$t(function(){
	     $M(SU,function(vV){
	      var wV=vV.v[0];
	      $A(wV);
	     },[]);
	    },[SU],"sat");
	    $R(2,[uV,qV],":");break;
	   case 2:
	    var xV=$t(function(){
	     $M(OU,function(yV){
	      var zV=yV.v[0];
	      var AV=zV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(AV.g){
	      case 1:
	       var BV=zV.add(QU);
	       $R(1,[BV],"I#");break;
	      case 2:
	       $A(PU);break;
	      }
	     },[QU,PU]);
	    },[QU,OU,PU],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,xV,JS],function(CV){
	     var DV=CV[0],EV=CV[1];
	     $M(DV,function(FV){
	      var GV=FV.v[0];
	      var RV=QU.add(GV);
	      var HV=RV.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(HV.g){
	      case 1:
	       var IV=$t(function(){
		$$GHCziBase_map.J($$GHCziShow_intToDigit,EV);
	       },[EV],"sat");
	       $$GHCziList_zdwsplitAtzh.C([RV,IV],function(JV){
		var KV=JV[0],LV=JV[1];
		$M(KV,function(MV){
		 switch(MV.g){
		 case 1:
		  var NV=$t(function(){
		   $M(LV,function(OV){
		    switch(OV.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$q,OV],":");break;
		    }
		   },[]);
		  },[LV],"sat");
		  $R(2,[$$GHCziFloat$u,NV],":");break;
		 case 2:
		  var PV=$t(function(){
		   $M(LV,function(QV){
		    switch(QV.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$q,QV],":");break;
		    }
		   },[]);
		  },[LV],"sat");
		  $$GHCziBase_zpzp.J(MV,PV);break;
		 }
		},[LV]);
	       },[]);break;
	      case 2:
	       var SV=$t(function(){
		$$GHCziBase_map.C([$$GHCziShow_intToDigit,EV],function(TV){
		 switch(TV.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$q,TV],":");break;
		 }
		},[]);
	       },[EV],"sat");
	       $R(2,[$$GHCziFloat$u,SV],":");break;
	      }
	     },[QU,EV]);
	    },[QU]);break;
	   }
	  },[JS,OU]);break;
	 }
	},[JS,KS]);break;
       case 3:
	$M(KS,function(UV){
	 var VV=UV.v[0];
	 var WV=VV.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(WV.g){
	 case 1:
	  var XV=VV.greaterThan(goog.math.Long.fromBits(7,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(XV.g){
	  case 1:
	   nR.J(JS,VV);break;
	  case 2:
	   DP.J(JS,VV);break;
	  }break;
	 case 2:
	  DP.J(JS,VV);break;
	 }
	},[DP,nR,JS]);break;
       }
      },[uP,DP,nR,JS,KS]);
     },[uP,DP,nR],"$wdoFmt");
     var YV=$t(function(){
      var cW= -vP;
      $$GHCziFloat_zdwzdsfloatToDigits1.C([$$GHCziFloat$A,cW],function(ZV){
       var aW=ZV[0],bW=ZV[1];
       HS.J(tP,aW,bW);
      },[HS,tP]);
     },[vP,HS,tP],"a");
     var dW=vP<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(dW.g){
     case 1:
      var $ff=isDoubleNegativeZero(vP);
      var eW=[$$GHCziPrim_realWorldzh,$ff];
      var fW=eW[1];
      $M(fW,function(gW){
       switch(gW.toString()){
       case "0":
	$$GHCziFloat_zdwzdsfloatToDigits1.C([$$GHCziFloat$A,vP],function(hW){
	 var iW=hW[0],jW=hW[1];
	 HS.J(tP,iW,jW);
	},[HS,tP]);break;
       default:
	$R(2,[$$GHCziFloat_zdfShowDouble2,YV],":");
       }
      },[vP,HS,tP,YV]);break;
     case 2:
      $R(2,[$$GHCziFloat_zdfShowDouble2,YV],":");break;
     }break;
    default:
     var CP=vP<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(CP.g){
     case 1:
      $A($$GHCziFloat$B);break;
     case 2:
      $A($$GHCziFloat$C);break;
     }
    }
   },[vP,uP,tP]);break;
  default:
   $A($$GHCziFloat$D);
  }
 },[vP,uP,tP]);
},[],"at libraries/base/GHC/Float.lhs:573:1");
var $$GHCziFloat_zdwzdsformatRealFloat1=$f(3,function(pW,qW,rW){
 var $ff=isFloatNaN(rW);
 var sW=[$$GHCziPrim_realWorldzh,$ff];
 var tW=sW[1];
 $M(tW,function(uW){
  switch(uW.toString()){
  case "0":
   var $ff=isFloatInfinite(rW);
   var vW=[$$GHCziPrim_realWorldzh,$ff];
   var wW=vW[1];
   $M(wW,function(xW){
    switch(xW.toString()){
    case "0":
     var zW=$f(2,function(AW,BW){
      $M(qW,function(CW){
       switch(CW.g){
       case 1:
	$$GHCziBase_map.C([$$GHCziShow_intToDigit,AW],function(DW){
	 switch(DW.g){
	 case 1:
	  $A($$GHCziFloat$H);break;
	 case 2:
	  var EW=DW.v[0],FW=DW.v[1];
	  $M(EW,function(GW){
	   var HW=GW.v[0];
	   var IW=$t(function(){
	    $M(FW,function(JW){
	     switch(JW.g){
	     case 1:
	      var KW=$t(function(){
	       var LW=$t(function(){
		var MW=BW.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),MW,$$GHCziTypes_ZMZN);
	       },[BW],"sat");
	       $$GHCziCString_unpackAppendCStringzh.J(".0e",LW);
	      },[BW],"sat");
	      $R(2,[GW,KW],":");break;
	     case 2:
	      var NW=$t(function(){
	       var OW=$t(function(){
		var PW=BW.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_itos.J(PW,$$GHCziTypes_ZMZN);
	       },[BW],"sat");
	       var QW=$d(2,[$$GHCziFloat$t,OW],"sat");
	       $$GHCziBase_zpzp.J(JW,QW);
	      },[BW,JW],"sat");
	      var RW=$d(2,[$$GHCziFloat$q,NW],"sat");
	      $R(2,[GW,RW],":");break;
	     }
	    },[GW,BW]);
	   },[FW,GW,BW],"$wfail");
	   $M(HW,function(SW){
	    switch(SW.toString()){
	    case "0":
	     $M(FW,function(TW){
	      switch(TW.g){
	      case 1:
	       $A($$GHCziFloat$r);break;
	      case 2:
	       $A(IW);break;
	      }
	     },[FW,GW,BW,IW]);break;
	    default:
	     $A(IW);
	    }
	   },[FW,GW,BW,IW]);
	  },[FW,BW]);break;
	 }
	},[BW]);break;
       case 2:
	var UW=CW.v[0];
	var VW=$t(function(){
	 $M(UW,function(WW){
	  var XW=WW.v[0];
	  var YW=XW.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(YW.g){
	  case 1:
	   $A(WW);break;
	  case 2:
	   $A($$GHCziFloat_zdfRealFracFloat2);break;
	  }
	 },[]);
	},[UW],"dec'");
	var ZW=$t(function(){
	 var aX=$t(function(){
	  $M(VW,function(bX){
	   var cX=bX.v[0];
	   var dX=cX.add(goog.math.Long.fromBits(1,0));
	   $R(1,[dX],"I#");
	  },[]);
	 },[VW],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,aX,AW],function(eX){
	  var fX=eX[0],gX=eX[1];
	  $R(1,[fX,gX],"(,)");
	 },[]);
	},[AW,VW],"ds4");
	var hX=$t(function(){
	 $M(ZW,function(iX){
	  var jX=iX.v[0];
	  $A(jX);
	 },[]);
	},[ZW],"ei");
	var kX=$t(function(){
	 $M(hX,function(lX){
	  var mX=lX.v[0];
	  var nX=mX.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(nX.g){
	  case 1:
	   $M(ZW,function(oX){
	    var pX=oX.v[1];
	    $$GHCziBase_map.C([$$GHCziShow_intToDigit,pX],function(qX){
	     switch(qX.g){
	     case 1:
	      $A($$GHCziFloat$s);break;
	     case 2:
	      var rX=qX.v[0],sX=qX.v[1];
	      $R(1,[rX,sX],"(,)");break;
	     }
	    },[]);
	   },[]);break;
	  case 2:
	   $M(ZW,function(tX){
	    var uX=tX.v[1];
	    $M(uX,function(vX){
	     switch(vX.g){
	     case 1:
	      $A($$GHCziList_init2);break;
	     case 2:
	      var wX=vX.v[0],xX=vX.v[1];
	      $$GHCziList_init1.C([wX,xX],function(yX){
	       $$GHCziBase_map.C([$$GHCziShow_intToDigit,yX],function(zX){
		switch(zX.g){
		case 1:
		 $A($$GHCziFloat$s);break;
		case 2:
		 var AX=zX.v[0],BX=zX.v[1];
		 $R(1,[AX,BX],"(,)");break;
		}
	       },[]);
	      },[]);break;
	     }
	    },[]);
	   },[]);break;
	  }
	 },[ZW]);
	},[ZW,hX],"ds5");
	var CX=$t(function(){
	 $M(kX,function(DX){
	  var EX=DX.v[1];
	  var FX=$t(function(){
	   $M(hX,function(GX){
	    var HX=GX.v[0];
	    var JX=BW.subtract(goog.math.Long.fromBits(1,0));
	    var IX=JX.add(HX);
	    $$GHCziShow_itos.J(IX,$$GHCziTypes_ZMZN);
	   },[BW]);
	  },[BW,hX],"sat");
	  var KX=$d(2,[$$GHCziFloat$t,FX],"sat");
	  $$GHCziBase_zpzp.J(EX,KX);
	 },[BW,hX]);
	},[BW,hX,kX],"a");
	$M(AW,function(LX){
	 switch(LX.g){
	 case 1:
	  var MX=$d(2,[$$GHCziFloat$q,CX],"sat");
	  var NX=$t(function(){
	   $M(kX,function(OX){
	    var PX=OX.v[0];
	    $A(PX);
	   },[]);
	  },[kX],"sat");
	  $R(2,[NX,MX],":");break;
	 case 2:
	  var QX=LX.v[0],RX=LX.v[1];
	  $M(QX,function(SX){
	   var TX=SX.v[0];
	   $M(TX,function(UX){
	    switch(UX.toString()){
	    case "0":
	     $M(RX,function(ZX){
	      switch(ZX.g){
	      case 1:
	       var aY=$t(function(){
		$M(VW,function(bY){
		 var cY=bY.v[0];
		 var dY=cY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(dY.g){
		 case 1:
		  $$GHCziFloat$M.J($$GHCziFloat$I,cY);break;
		 case 2:
		  $A($$GHCziFloat$E);break;
		 }
		},[]);
	       },[VW],"sat");
	       var eY=$d(2,[$$GHCziFloat$q,aY],"sat");
	       $R(2,[$$GHCziFloat$u,eY],":");break;
	      case 2:
	       var fY=$d(2,[$$GHCziFloat$q,CX],"sat");
	       var gY=$t(function(){
		$M(kX,function(hY){
		 var iY=hY.v[0];
		 $A(iY);
		},[]);
	       },[kX],"sat");
	       $R(2,[gY,fY],":");break;
	      }
	     },[VW,kX,CX]);break;
	    default:
	     var VX=$d(2,[$$GHCziFloat$q,CX],"sat");
	     var WX=$t(function(){
	      $M(kX,function(XX){
	       var YX=XX.v[0];
	       $A(YX);
	      },[]);
	     },[kX],"sat");
	     $R(2,[WX,VX],":");
	    }
	   },[VW,kX,CX,RX]);
	  },[VW,kX,CX,RX]);break;
	 }
	},[VW,kX,CX]);break;
       }
      },[AW,BW]);
     },[qW],"$s$wdoFmt");
     var jY=$f(2,function(kY,lY){
      $M(qW,function(mY){
       switch(mY.g){
       case 1:
	var nY=lY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(nY.g){
	case 1:
	 var oY=$t(function(){
	  $$GHCziBase_map.J($$GHCziShow_intToDigit,kY);
	 },[kY],"sat");
	 $$GHCziFloat$L.J(lY,$$GHCziTypes_ZMZN,oY);break;
	case 2:
	 var pY=$t(function(){
	  var yY=lY.negate();
	  var qY=yY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(qY.g){
	  case 1:
	   var rY=$t(function(){
	    $$GHCziBase_map.J($$GHCziShow_intToDigit,kY);
	   },[kY],"n");
	   var sY=$d(2,[$$GHCziFloat$u,rY],"lvl28");
	   var tY=$f(1,function(uY){
	    var vY=uY.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(vY.g){
	    case 1:
	     var wY=$t(function(){
	      var xY=uY.subtract(goog.math.Long.fromBits(1,0));
	      tY.J(xY);
	     },[uY,tY],"sat");
	     $R(2,[$$GHCziFloat$u,wY],":");break;
	    case 2:
	     $A(sY);break;
	    }
	   },[sY],"xs3");
	   tY.J(yY);break;
	  case 2:
	   $$GHCziBase_map.J($$GHCziShow_intToDigit,kY);break;
	  }
	 },[lY,kY],"sat");
	 $$GHCziCString_unpackAppendCStringzh.J("0.",pY);break;
	}break;
       case 2:
	var zY=mY.v[0];
	var AY=lY.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(AY.g){
	case 1:
	 var BY=$t(function(){
	  var RY=lY.negate();
	  var CY=RY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(CY.g){
	  case 1:
	   var DY=$d(2,[$$GHCziFloat_minExpt,kY],"lvl28");
	   var EY=$f(1,function(FY){
	    var GY=FY.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(GY.g){
	    case 1:
	     var HY=$t(function(){
	      var IY=FY.subtract(goog.math.Long.fromBits(1,0));
	      EY.J(IY);
	     },[FY,EY],"sat");
	     $R(2,[$$GHCziFloat_minExpt,HY],":");break;
	    case 2:
	     $A(DY);break;
	    }
	   },[DY],"xs3");
	   EY.C([RY],function(JY){
	    var KY=$t(function(){
	     $M(zY,function(LY){
	      var MY=LY.v[0];
	      var NY=MY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(NY.g){
	      case 1:
	       $A(LY);break;
	      case 2:
	       $A($$GHCziFloat_minExpt);break;
	      }
	     },[]);
	    },[zY],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,KY,JY],function(OY){
	     var PY=OY[0],QY=OY[1];
	     $$GHCziFloat$N.J(PY,QY);
	    },[]);
	   },[zY]);break;
	  case 2:
	   var SY=$t(function(){
	    $M(zY,function(TY){
	     var UY=TY.v[0];
	     var VY=UY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(VY.g){
	     case 1:
	      $A(TY);break;
	     case 2:
	      $A($$GHCziFloat_minExpt);break;
	     }
	    },[]);
	   },[zY],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,SY,kY],function(WY){
	    var XY=WY[0],YY=WY[1];
	    $$GHCziFloat$N.J(XY,YY);
	   },[]);break;
	  }
	 },[lY,kY,zY],"ds4");
	 var ZY=$t(function(){
	  $M(BY,function(aZ){
	   var bZ=aZ.v[1];
	   $M(bZ,function(cZ){
	    switch(cZ.g){
	    case 1:
	     $R(1,[],"[]");break;
	    case 2:
	     $R(2,[$$GHCziFloat$q,cZ],":");break;
	    }
	   },[]);
	  },[]);
	 },[BY],"sat");
	 var dZ=$t(function(){
	  $M(BY,function(eZ){
	   var fZ=eZ.v[0];
	   $A(fZ);
	  },[]);
	 },[BY],"sat");
	 $R(2,[dZ,ZY],":");break;
	case 2:
	 var gZ=$t(function(){
	  $M(zY,function(hZ){
	   var iZ=hZ.v[0];
	   var jZ=iZ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(jZ.g){
	   case 1:
	    var kZ=iZ.add(lY);
	    $R(1,[kZ],"I#");break;
	   case 2:
	    $R(1,[lY],"I#");break;
	   }
	  },[lY]);
	 },[lY,zY],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,gZ,kY],function(lZ){
	  var mZ=lZ[0],nZ=lZ[1];
	  $M(mZ,function(oZ){
	   var pZ=oZ.v[0];
	   var AZ=lY.add(pZ);
	   var qZ=AZ.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(qZ.g){
	   case 1:
	    var rZ=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,nZ);
	    },[nZ],"sat");
	    $$GHCziList_zdwsplitAtzh.C([AZ,rZ],function(sZ){
	     var tZ=sZ[0],uZ=sZ[1];
	     $M(tZ,function(vZ){
	      switch(vZ.g){
	      case 1:
	       var wZ=$t(function(){
		$M(uZ,function(xZ){
		 switch(xZ.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$q,xZ],":");break;
		 }
		},[]);
	       },[uZ],"sat");
	       $R(2,[$$GHCziFloat$u,wZ],":");break;
	      case 2:
	       var yZ=$t(function(){
		$M(uZ,function(zZ){
		 switch(zZ.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$q,zZ],":");break;
		 }
		},[]);
	       },[uZ],"sat");
	       $$GHCziBase_zpzp.J(vZ,yZ);break;
	      }
	     },[uZ]);
	    },[]);break;
	   case 2:
	    var BZ=$t(function(){
	     $$GHCziBase_map.C([$$GHCziShow_intToDigit,nZ],function(CZ){
	      switch(CZ.g){
	      case 1:
	       $R(1,[],"[]");break;
	      case 2:
	       $R(2,[$$GHCziFloat$q,CZ],":");break;
	      }
	     },[]);
	    },[nZ],"sat");
	    $R(2,[$$GHCziFloat$u,BZ],":");break;
	   }
	  },[lY,nZ]);
	 },[lY]);break;
	}break;
       }
      },[lY,kY]);
     },[qW],"$s$wdoFmt1");
     var DZ=$f(3,function(EZ,FZ,GZ){
      $M(EZ,function(HZ){
       switch(HZ.g){
       case 1:
	$M(qW,function(IZ){
	 switch(IZ.g){
	 case 1:
	  $$GHCziBase_map.C([$$GHCziShow_intToDigit,FZ],function(JZ){
	   switch(JZ.g){
	   case 1:
	    $A($$GHCziFloat$H);break;
	   case 2:
	    var KZ=JZ.v[0],LZ=JZ.v[1];
	    $M(KZ,function(MZ){
	     var NZ=MZ.v[0];
	     var OZ=$t(function(){
	      $M(LZ,function(PZ){
	       switch(PZ.g){
	       case 1:
		var QZ=$t(function(){
		 var RZ=$t(function(){
		  $M(GZ,function(SZ){
		   var TZ=SZ.v[0];
		   var UZ=TZ.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),UZ,$$GHCziTypes_ZMZN);
		  },[]);
		 },[GZ],"sat");
		 $$GHCziCString_unpackAppendCStringzh.J(".0e",RZ);
		},[GZ],"sat");
		$R(2,[MZ,QZ],":");break;
	       case 2:
		var VZ=$t(function(){
		 var WZ=$t(function(){
		  $M(GZ,function(XZ){
		   var YZ=XZ.v[0];
		   var ZZ=YZ.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_itos.J(ZZ,$$GHCziTypes_ZMZN);
		  },[]);
		 },[GZ],"sat");
		 var a10=$d(2,[$$GHCziFloat$t,WZ],"sat");
		 $$GHCziBase_zpzp.J(PZ,a10);
		},[GZ,PZ],"sat");
		var b10=$d(2,[$$GHCziFloat$q,VZ],"sat");
		$R(2,[MZ,b10],":");break;
	       }
	      },[MZ,GZ]);
	     },[LZ,MZ,GZ],"$wfail");
	     $M(NZ,function(c10){
	      switch(c10.toString()){
	      case "0":
	       $M(LZ,function(d10){
		switch(d10.g){
		case 1:
		 $A($$GHCziFloat$r);break;
		case 2:
		 $A(OZ);break;
		}
	       },[LZ,MZ,GZ,OZ]);break;
	      default:
	       $A(OZ);
	      }
	     },[LZ,MZ,GZ,OZ]);
	    },[LZ,GZ]);break;
	   }
	  },[GZ]);break;
	 case 2:
	  var e10=IZ.v[0];
	  var f10=$t(function(){
	   $M(e10,function(g10){
	    var h10=g10.v[0];
	    var i10=h10.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(i10.g){
	    case 1:
	     $A(g10);break;
	    case 2:
	     $A($$GHCziFloat_zdfRealFracFloat2);break;
	    }
	   },[]);
	  },[e10],"dec'");
	  var j10=$t(function(){
	   var k10=$t(function(){
	    $M(f10,function(l10){
	     var m10=l10.v[0];
	     var n10=m10.add(goog.math.Long.fromBits(1,0));
	     $R(1,[n10],"I#");
	    },[]);
	   },[f10],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,k10,FZ],function(o10){
	    var p10=o10[0],q10=o10[1];
	    $R(1,[p10,q10],"(,)");
	   },[]);
	  },[FZ,f10],"ds4");
	  var r10=$t(function(){
	   $M(j10,function(s10){
	    var t10=s10.v[0];
	    $A(t10);
	   },[]);
	  },[j10],"ei");
	  var u10=$t(function(){
	   $M(r10,function(v10){
	    var w10=v10.v[0];
	    var x10=w10.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(x10.g){
	    case 1:
	     $M(j10,function(y10){
	      var z10=y10.v[1];
	      $$GHCziBase_map.C([$$GHCziShow_intToDigit,z10],function(A10){
	       switch(A10.g){
	       case 1:
		$A($$GHCziFloat$s);break;
	       case 2:
		var B10=A10.v[0],C10=A10.v[1];
		$R(1,[B10,C10],"(,)");break;
	       }
	      },[]);
	     },[]);break;
	    case 2:
	     $M(j10,function(D10){
	      var E10=D10.v[1];
	      $M(E10,function(F10){
	       switch(F10.g){
	       case 1:
		$A($$GHCziList_init2);break;
	       case 2:
		var G10=F10.v[0],H10=F10.v[1];
		$$GHCziList_init1.C([G10,H10],function(I10){
		 $$GHCziBase_map.C([$$GHCziShow_intToDigit,I10],function(J10){
		  switch(J10.g){
		  case 1:
		   $A($$GHCziFloat$s);break;
		  case 2:
		   var K10=J10.v[0],L10=J10.v[1];
		   $R(1,[K10,L10],"(,)");break;
		  }
		 },[]);
		},[]);break;
	       }
	      },[]);
	     },[]);break;
	    }
	   },[j10]);
	  },[j10,r10],"ds5");
	  var M10=$t(function(){
	   $M(u10,function(N10){
	    var O10=N10.v[1];
	    var P10=$t(function(){
	     $M(GZ,function(Q10){
	      var R10=Q10.v[0];
	      $M(r10,function(S10){
	       var T10=S10.v[0];
	       var V10=R10.subtract(goog.math.Long.fromBits(1,0));
	       var U10=V10.add(T10);
	       $$GHCziShow_itos.J(U10,$$GHCziTypes_ZMZN);
	      },[R10]);
	     },[r10]);
	    },[GZ,r10],"sat");
	    var W10=$d(2,[$$GHCziFloat$t,P10],"sat");
	    $$GHCziBase_zpzp.J(O10,W10);
	   },[GZ,r10]);
	  },[GZ,r10,u10],"a");
	  $M(FZ,function(X10){
	   switch(X10.g){
	   case 1:
	    var Y10=$d(2,[$$GHCziFloat$q,M10],"sat");
	    var Z10=$t(function(){
	     $M(u10,function(a11){
	      var b11=a11.v[0];
	      $A(b11);
	     },[]);
	    },[u10],"sat");
	    $R(2,[Z10,Y10],":");break;
	   case 2:
	    var c11=X10.v[0],d11=X10.v[1];
	    $M(c11,function(e11){
	     var f11=e11.v[0];
	     $M(f11,function(g11){
	      switch(g11.toString()){
	      case "0":
	       $M(d11,function(l11){
		switch(l11.g){
		case 1:
		 var m11=$t(function(){
		  $M(f10,function(n11){
		   var o11=n11.v[0];
		   var p11=o11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(p11.g){
		   case 1:
		    $$GHCziFloat$M.J($$GHCziFloat$I,o11);break;
		   case 2:
		    $A($$GHCziFloat$E);break;
		   }
		  },[]);
		 },[f10],"sat");
		 var q11=$d(2,[$$GHCziFloat$q,m11],"sat");
		 $R(2,[$$GHCziFloat$u,q11],":");break;
		case 2:
		 var r11=$d(2,[$$GHCziFloat$q,M10],"sat");
		 var s11=$t(function(){
		  $M(u10,function(t11){
		   var u11=t11.v[0];
		   $A(u11);
		  },[]);
		 },[u10],"sat");
		 $R(2,[s11,r11],":");break;
		}
	       },[f10,u10,M10]);break;
	      default:
	       var h11=$d(2,[$$GHCziFloat$q,M10],"sat");
	       var i11=$t(function(){
		$M(u10,function(j11){
		 var k11=j11.v[0];
		 $A(k11);
		},[]);
	       },[u10],"sat");
	       $R(2,[i11,h11],":");
	      }
	     },[f10,u10,M10,d11]);
	    },[f10,u10,M10,d11]);break;
	   }
	  },[f10,u10,M10]);break;
	 }
	},[FZ,GZ]);break;
       case 2:
	$M(qW,function(v11){
	 switch(v11.g){
	 case 1:
	  $M(GZ,function(w11){
	   var x11=w11.v[0];
	   var y11=x11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(y11.g){
	   case 1:
	    var z11=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,FZ);
	    },[FZ],"sat");
	    $$GHCziFloat$L.J(x11,$$GHCziTypes_ZMZN,z11);break;
	   case 2:
	    var A11=$t(function(){
	     var J11=x11.negate();
	     var B11=J11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(B11.g){
	     case 1:
	      var C11=$t(function(){
	       $$GHCziBase_map.J($$GHCziShow_intToDigit,FZ);
	      },[FZ],"n");
	      var D11=$d(2,[$$GHCziFloat$u,C11],"lvl28");
	      var E11=$f(1,function(F11){
	       var G11=F11.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(G11.g){
	       case 1:
		var H11=$t(function(){
		 var I11=F11.subtract(goog.math.Long.fromBits(1,0));
		 E11.J(I11);
		},[F11,E11],"sat");
		$R(2,[$$GHCziFloat$u,H11],":");break;
	       case 2:
		$A(D11);break;
	       }
	      },[D11],"xs3");
	      E11.J(J11);break;
	     case 2:
	      $$GHCziBase_map.J($$GHCziShow_intToDigit,FZ);break;
	     }
	    },[FZ,x11],"sat");
	    $$GHCziCString_unpackAppendCStringzh.J("0.",A11);break;
	   }
	  },[FZ]);break;
	 case 2:
	  var K11=v11.v[0];
	  $M(GZ,function(L11){
	   var M11=L11.v[0];
	   var N11=M11.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(N11.g){
	   case 1:
	    var O11=$t(function(){
	     var e12=M11.negate();
	     var P11=e12.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(P11.g){
	     case 1:
	      var Q11=$d(2,[$$GHCziFloat_minExpt,FZ],"lvl28");
	      var R11=$f(1,function(S11){
	       var T11=S11.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(T11.g){
	       case 1:
		var U11=$t(function(){
		 var V11=S11.subtract(goog.math.Long.fromBits(1,0));
		 R11.J(V11);
		},[S11,R11],"sat");
		$R(2,[$$GHCziFloat_minExpt,U11],":");break;
	       case 2:
		$A(Q11);break;
	       }
	      },[Q11],"xs3");
	      R11.C([e12],function(W11){
	       var X11=$t(function(){
		$M(K11,function(Y11){
		 var Z11=Y11.v[0];
		 var a12=Z11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(a12.g){
		 case 1:
		  $A(Y11);break;
		 case 2:
		  $A($$GHCziFloat_minExpt);break;
		 }
		},[]);
	       },[K11],"sat");
	       $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,X11,W11],function(b12){
		var c12=b12[0],d12=b12[1];
		$$GHCziFloat$N.J(c12,d12);
	       },[]);
	      },[K11]);break;
	     case 2:
	      var f12=$t(function(){
	       $M(K11,function(g12){
		var h12=g12.v[0];
		var i12=h12.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(i12.g){
		case 1:
		 $A(g12);break;
		case 2:
		 $A($$GHCziFloat_minExpt);break;
		}
	       },[]);
	      },[K11],"sat");
	      $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,f12,FZ],function(j12){
	       var k12=j12[0],l12=j12[1];
	       $$GHCziFloat$N.J(k12,l12);
	      },[]);break;
	     }
	    },[FZ,M11,K11],"ds4");
	    var m12=$t(function(){
	     $M(O11,function(n12){
	      var o12=n12.v[1];
	      $M(o12,function(p12){
	       switch(p12.g){
	       case 1:
		$R(1,[],"[]");break;
	       case 2:
		$R(2,[$$GHCziFloat$q,p12],":");break;
	       }
	      },[]);
	     },[]);
	    },[O11],"sat");
	    var q12=$t(function(){
	     $M(O11,function(r12){
	      var s12=r12.v[0];
	      $A(s12);
	     },[]);
	    },[O11],"sat");
	    $R(2,[q12,m12],":");break;
	   case 2:
	    var t12=$t(function(){
	     $M(K11,function(u12){
	      var v12=u12.v[0];
	      var w12=v12.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(w12.g){
	      case 1:
	       var x12=v12.add(M11);
	       $R(1,[x12],"I#");break;
	      case 2:
	       $A(L11);break;
	      }
	     },[M11,L11]);
	    },[M11,K11,L11],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$n,t12,FZ],function(y12){
	     var z12=y12[0],A12=y12[1];
	     $M(z12,function(B12){
	      var C12=B12.v[0];
	      var N12=M11.add(C12);
	      var D12=N12.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(D12.g){
	      case 1:
	       var E12=$t(function(){
		$$GHCziBase_map.J($$GHCziShow_intToDigit,A12);
	       },[A12],"sat");
	       $$GHCziList_zdwsplitAtzh.C([N12,E12],function(F12){
		var G12=F12[0],H12=F12[1];
		$M(G12,function(I12){
		 switch(I12.g){
		 case 1:
		  var J12=$t(function(){
		   $M(H12,function(K12){
		    switch(K12.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$q,K12],":");break;
		    }
		   },[]);
		  },[H12],"sat");
		  $R(2,[$$GHCziFloat$u,J12],":");break;
		 case 2:
		  var L12=$t(function(){
		   $M(H12,function(M12){
		    switch(M12.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$q,M12],":");break;
		    }
		   },[]);
		  },[H12],"sat");
		  $$GHCziBase_zpzp.J(I12,L12);break;
		 }
		},[H12]);
	       },[]);break;
	      case 2:
	       var O12=$t(function(){
		$$GHCziBase_map.C([$$GHCziShow_intToDigit,A12],function(P12){
		 switch(P12.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$q,P12],":");break;
		 }
		},[]);
	       },[A12],"sat");
	       $R(2,[$$GHCziFloat$u,O12],":");break;
	      }
	     },[M11,A12]);
	    },[M11]);break;
	   }
	  },[FZ,K11]);break;
	 }
	},[FZ,GZ]);break;
       case 3:
	$M(GZ,function(Q12){
	 var R12=Q12.v[0];
	 var S12=R12.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(S12.g){
	 case 1:
	  var T12=R12.greaterThan(goog.math.Long.fromBits(7,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(T12.g){
	  case 1:
	   jY.J(FZ,R12);break;
	  case 2:
	   zW.J(FZ,R12);break;
	  }break;
	 case 2:
	  zW.J(FZ,R12);break;
	 }
	},[zW,jY,FZ]);break;
       }
      },[qW,zW,jY,FZ,GZ]);
     },[qW,zW,jY],"$wdoFmt");
     var U12=$t(function(){
      var Y12= -rW;
      $$GHCziFloat_zdwzdsfloatToDigits.C([$$GHCziFloat$A,Y12],function(V12){
       var W12=V12[0],X12=V12[1];
       DZ.J(pW,W12,X12);
      },[DZ,pW]);
     },[rW,DZ,pW],"a");
     var Z12=rW<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Z12.g){
     case 1:
      var $ff=isFloatNegativeZero(rW);
      var a13=[$$GHCziPrim_realWorldzh,$ff];
      var b13=a13[1];
      $M(b13,function(c13){
       switch(c13.toString()){
       case "0":
	$$GHCziFloat_zdwzdsfloatToDigits.C([$$GHCziFloat$A,rW],function(d13){
	 var e13=d13[0],f13=d13[1];
	 DZ.J(pW,e13,f13);
	},[DZ,pW]);break;
       default:
	$R(2,[$$GHCziFloat_zdfShowDouble2,U12],":");
       }
      },[rW,DZ,pW,U12]);break;
     case 2:
      $R(2,[$$GHCziFloat_zdfShowDouble2,U12],":");break;
     }break;
    default:
     var yW=rW<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(yW.g){
     case 1:
      $A($$GHCziFloat$B);break;
     case 2:
      $A($$GHCziFloat$C);break;
     }
    }
   },[rW,qW,pW]);break;
  default:
   $A($$GHCziFloat$D);
  }
 },[rW,qW,pW]);
},[],"at libraries/base/GHC/Float.lhs:573:1");
var $$GHCziFloat_FFExponent=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/Float.lhs:570:17");
var $$GHCziFloat_FFFixed=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/Float.lhs:570:30");
var $$GHCziFloat_FFGeneric=$D(3,function(){
 $r([]);
},"at libraries/base/GHC/Float.lhs:570:40");
var $$GHCziFloat$b=$D(1,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziFloat_maxExpt]);
},"lvl1");
var $$GHCziFloat$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Int");
},"lvl2");
var $$GHCziFloat$d=$D(1,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziFloat_maxExpt10]);
},"lvl3");
var $$GHCziFloat$g=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl4");
var $$GHCziFloat$h=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl5");
var $$GHCziFloat$i=$T(function(){
 $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble7,goog.math.Long.fromBits(52,0));
},"lvl6");
var $$GHCziFloat$j=$D(1,function(){
 $r([goog.math.Long.fromBits(4,0)]);
},"lvl7");
var $$GHCziFloat$k=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl8");
var $$GHCziFloat$l=$T(function(){
 $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble7,goog.math.Long.fromBits(23,0));
},"lvl9");
var $$GHCziFloat$n=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"at libraries/base/GHC/Float.lhs:579:3");
var $$GHCziFloat$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("formatRealFloat/doFmt/FFExponent: []");
},"lvl11");
var $$GHCziFloat$p=$T(function(){
 $$GHCziErr_error.J($$GHCziFloat$o);
},"lvl12");
var $$GHCziFloat$q=$D(1,function(){
 $r(["."]);
},"lvl13");
var $$GHCziFloat$r=$T(function(){
 $$GHCziCString_unpackCStringzh.J("0.0e0");
},"lvl14");
var $$GHCziFloat$s=$T(function(){
 $$ControlziExceptionziBase_irrefutPatError.J("libraries/base/GHC/Float.lhs:603:12-70|(d : ds')");
},"lvl15");
var $$GHCziFloat$t=$D(1,function(){
 $r(["e"]);
},"lvl16");
var $$GHCziFloat$u=$D(1,function(){
 $r(["0"]);
},"lvl17");
var $$GHCziFloat$v=$D(2,function(){
 $r([$$GHCziFloat$u,$$GHCziFloat$v]);
},"xs");
var $$GHCziFloat$w=$D(2,function(){
 $r([$$GHCziFloat$u,$$GHCziTypes_ZMZN]);
},"lvl18");
var $$GHCziFloat$x=$F(2,function(N1e,O1e){
 $M(N1e,function(P1e){
  switch(P1e.toString()){
  case "0":
   $$GHCziList_reverse1.C([O1e,$$GHCziTypes_ZMZN],function(S1e){
    switch(S1e.g){
    case 1:
     var T1e=$d(2,[$$GHCziFloat$q,$$GHCziFloat$w],"sat");
     $R(2,[$$GHCziFloat$u,T1e],":");break;
    case 2:
     var U1e=$d(2,[$$GHCziFloat$q,$$GHCziFloat$w],"sat");
     $$GHCziBase_zpzp.J(S1e,U1e);break;
    }
   },[]);break;
  default:
   var Q1e=$d(2,[$$GHCziFloat$u,O1e],"sat");
   var R1e=P1e.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat$x.J(R1e,Q1e);
  }
 },[O1e]);
},"at libraries/base/GHC/Float.lhs:615:17");
var $$GHCziFloat$y=$F(3,function(V1e,W1e,X1e){
 $M(V1e,function(Y1e){
  switch(Y1e.toString()){
  case "0":
   $$GHCziList_reverse1.C([W1e,$$GHCziTypes_ZMZN],function(g1f){
    switch(g1f.g){
    case 1:
     var h1f=$t(function(){
      $M(X1e,function(i1f){
       switch(i1f.g){
       case 1:
	$A($$GHCziFloat$w);break;
       case 2:
	$A(i1f);break;
       }
      },[]);
     },[X1e],"sat");
     var j1f=$d(2,[$$GHCziFloat$q,h1f],"sat");
     $R(2,[$$GHCziFloat$u,j1f],":");break;
    case 2:
     var k1f=$t(function(){
      $M(X1e,function(l1f){
       switch(l1f.g){
       case 1:
	$A($$GHCziFloat$w);break;
       case 2:
	$A(l1f);break;
       }
      },[]);
     },[X1e],"sat");
     var m1f=$d(2,[$$GHCziFloat$q,k1f],"sat");
     $$GHCziBase_zpzp.J(g1f,m1f);break;
    }
   },[X1e]);break;
  default:
   $M(X1e,function(Z1e){
    switch(Z1e.g){
    case 1:
     var a1f=$d(2,[$$GHCziFloat$u,W1e],"sat");
     var b1f=Y1e.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$x.J(b1f,a1f);break;
    case 2:
     var c1f=Z1e.v[0],d1f=Z1e.v[1];
     var e1f=$d(2,[c1f,W1e],"sat");
     var f1f=Y1e.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$y.J(f1f,e1f,d1f);break;
    }
   },[Y1e,W1e]);
  }
 },[X1e,W1e]);
},"at libraries/base/GHC/Float.lhs:615:17");
var $$GHCziFloat$z=$T(function(){
 $$ControlziExceptionziBase_irrefutPatError.J("libraries/base/GHC/Float.lhs:631:11-64|d : ds'");
},"lvl19");
var $$GHCziFloat$A=$T(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(10,0));
},"lvl20");
var $$GHCziFloat$B=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Infinity");
},"lvl21");
var $$GHCziFloat$C=$T(function(){
 $$GHCziCString_unpackCStringzh.J("-Infinity");
},"lvl22");
var $$GHCziFloat$D=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NaN");
},"lvl23");
var $$GHCziFloat$E=$T(function(){
 $$GHCziCString_unpackCStringzh.J("e0");
},"nil");
var $$GHCziFloat$F=$F(2,function(n1f,o1f){
 $M(n1f,function(p1f){
  switch(p1f.g){
  case 1:
   $A($$GHCziFloat$E);break;
  case 2:
   var q1f=p1f.v[0],r1f=p1f.v[1];
   var s1f=o1f.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(s1f.g){
   case 1:
    var t1f=$t(function(){
     var u1f=o1f.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$F.J(r1f,u1f);
    },[o1f,r1f],"sat");
    $R(2,[q1f,t1f],":");break;
   case 2:
    $R(2,[q1f,$$GHCziFloat$E],":");break;
   }break;
  }
 },[o1f]);
},"go");
var $$GHCziFloat$G=$F(2,function(v1f,w1f){
 $M(v1f,function(x1f){
  var y1f=x1f.v[0];
  var z1f=y1f.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(z1f.g){
  case 1:
   var A1f=$d(2,[$$GHCziFloat_minExpt,w1f],"sat");
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,A1f],function(B1f){
    switch(B1f.g){
    case 1:
     $A($$GHCziFloat$z);break;
    case 2:
     var C1f=B1f.v[0],D1f=B1f.v[1];
     $R(1,[C1f,D1f],"(,)");break;
    }
   },[]);break;
  case 2:
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,w1f],function(E1f){
    switch(E1f.g){
    case 1:
     $A($$GHCziFloat$z);break;
    case 2:
     var F1f=E1f.v[0],G1f=E1f.v[1];
     $R(1,[F1f,G1f],"(,)");break;
    }
   },[]);break;
  }
 },[w1f]);
},"$j");
var $$GHCziFloat$H=$T(function(){
 $$GHCziErr_error.J($$GHCziFloat$o);
},"lvl24");
var $$GHCziFloat$I=$D(2,function(){
 $r([$$GHCziFloat$u,$$GHCziFloat$I]);
},"xs1");
var $$GHCziFloat$J=$D(2,function(){
 $r([$$GHCziFloat$u,$$GHCziTypes_ZMZN]);
},"lvl25");
var $$GHCziFloat$K=$F(2,function(H1f,I1f){
 $M(H1f,function(J1f){
  switch(J1f.toString()){
  case "0":
   $$GHCziList_reverse1.C([I1f,$$GHCziTypes_ZMZN],function(M1f){
    switch(M1f.g){
    case 1:
     var N1f=$d(2,[$$GHCziFloat$q,$$GHCziFloat$J],"sat");
     $R(2,[$$GHCziFloat$u,N1f],":");break;
    case 2:
     var O1f=$d(2,[$$GHCziFloat$q,$$GHCziFloat$J],"sat");
     $$GHCziBase_zpzp.J(M1f,O1f);break;
    }
   },[]);break;
  default:
   var K1f=$d(2,[$$GHCziFloat$u,I1f],"sat");
   var L1f=J1f.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat$K.J(L1f,K1f);
  }
 },[I1f]);
},"at libraries/base/GHC/Float.lhs:615:17");
var $$GHCziFloat$L=$F(3,function(P1f,Q1f,R1f){
 $M(P1f,function(S1f){
  switch(S1f.toString()){
  case "0":
   $$GHCziList_reverse1.C([Q1f,$$GHCziTypes_ZMZN],function(a1g){
    switch(a1g.g){
    case 1:
     var b1g=$t(function(){
      $M(R1f,function(c1g){
       switch(c1g.g){
       case 1:
	$A($$GHCziFloat$J);break;
       case 2:
	$A(c1g);break;
       }
      },[]);
     },[R1f],"sat");
     var d1g=$d(2,[$$GHCziFloat$q,b1g],"sat");
     $R(2,[$$GHCziFloat$u,d1g],":");break;
    case 2:
     var e1g=$t(function(){
      $M(R1f,function(f1g){
       switch(f1g.g){
       case 1:
	$A($$GHCziFloat$J);break;
       case 2:
	$A(f1g);break;
       }
      },[]);
     },[R1f],"sat");
     var g1g=$d(2,[$$GHCziFloat$q,e1g],"sat");
     $$GHCziBase_zpzp.J(a1g,g1g);break;
    }
   },[R1f]);break;
  default:
   $M(R1f,function(T1f){
    switch(T1f.g){
    case 1:
     var U1f=$d(2,[$$GHCziFloat$u,Q1f],"sat");
     var V1f=S1f.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$K.J(V1f,U1f);break;
    case 2:
     var W1f=T1f.v[0],X1f=T1f.v[1];
     var Y1f=$d(2,[W1f,Q1f],"sat");
     var Z1f=S1f.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$L.J(Z1f,Y1f,X1f);break;
    }
   },[S1f,Q1f]);
  }
 },[R1f,Q1f]);
},"at libraries/base/GHC/Float.lhs:615:17");
var $$GHCziFloat$M=$F(2,function(h1g,i1g){
 $M(h1g,function(j1g){
  switch(j1g.g){
  case 1:
   $A($$GHCziFloat$E);break;
  case 2:
   var k1g=j1g.v[0],l1g=j1g.v[1];
   var m1g=i1g.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(m1g.g){
   case 1:
    var n1g=$t(function(){
     var o1g=i1g.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$M.J(l1g,o1g);
    },[i1g,l1g],"sat");
    $R(2,[k1g,n1g],":");break;
   case 2:
    $R(2,[k1g,$$GHCziFloat$E],":");break;
   }break;
  }
 },[i1g]);
},"go1");
var $$GHCziFloat$N=$F(2,function(p1g,q1g){
 $M(p1g,function(r1g){
  var s1g=r1g.v[0];
  var t1g=s1g.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(t1g.g){
  case 1:
   var u1g=$d(2,[$$GHCziFloat_minExpt,q1g],"sat");
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,u1g],function(v1g){
    switch(v1g.g){
    case 1:
     $A($$GHCziFloat$z);break;
    case 2:
     var w1g=v1g.v[0],x1g=v1g.v[1];
     $R(1,[w1g,x1g],"(,)");break;
    }
   },[]);break;
  case 2:
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,q1g],function(y1g){
    switch(y1g.g){
    case 1:
     $A($$GHCziFloat$z);break;
    case 2:
     var z1g=y1g.v[0],A1g=y1g.v[1];
     $R(1,[z1g,A1g],"(,)");break;
    }
   },[]);break;
  }
 },[q1g]);
},"$j1");
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
var $$GHCziForeignPtr_mallocForeignPtr3=$D(1,function(){
 $r([$$GHCziForeignPtr_NoFinalizzers,$$GHCziTypes_ZMZN]);
},"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_mallocForeignPtrBytes2=$t(function(){
 $$GHCziErr_error.J($$GHCziForeignPtr$d);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_NoFinalizzers=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/ForeignPtr.hs:90:5");
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
var $$GHCziIOziBufferedIO_fillReadBuffer=$f(1,function(d){
 $M(d,function(e){
  var f=e.v[1];
  $A(f);
 },[]);
},[],"at libraries/base/GHC/IO/BufferedIO.hs:48:3");
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
var $$GHCziIOziEncodingziLatin1_zdwa=$f(8,function(a,b,c,d,e,f,g,h){
 $M(g,function(i){
  var j=i.v[0],k=i.v[1],l=i.v[2],m=i.v[3],n=i.v[4],o=i.v[5];
  var p=$d(1,[a,b,c,d,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var q=$f(3,function(r,s,t){
   var u=s.greaterThanOrEqual(m)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u.g){
   case 1:
    var v=r.greaterThanOrEqual(f)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v.g){
    case 1:
     var w=$hs_readWideCharOffAddrzh(a,r,t);
     var x=w[0],y=w[1];
     var F=$hs_touchzh(b,x);
     var H=$hs_ordzh(y);
     var G=$hs_int2Wordzh(H);
     var E=$hs_narrow8Wordzh(G);
     var D=$hs_plusAddrzh(j,s);
     var C=$hs_writeWord8OffAddrzh(D,goog.math.Long.fromBits(0,0),E,F);
     var B=$hs_touchzh(k,C);
     var A=s.add(goog.math.Long.fromBits(1,0));
     var z=r.add(goog.math.Long.fromBits(1,0));
     q.J(z,A,B);break;
    case 2:
     var I=$d(1,[j,k,l,m,n,s],"sat");
     var J=$t(function(){
      var K=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(K.g){
      case 1:
       $R(1,[a,b,c,d,r,f],"Buffer");break;
      case 2:
       $A(p);break;
      }
     },[a,b,c,d,p,r,f],"sat");
     var L=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,J,I],"sat");
     $r([t,L]);break;
    }break;
   case 2:
    var M=$d(1,[j,k,l,m,n,s],"sat");
    var N=$t(function(){
     var O=r.equals(f)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(O.g){
     case 1:
      $R(1,[a,b,c,d,r,f],"Buffer");break;
     case 2:
      $A(p);break;
     }
    },[a,b,c,d,p,r,f],"sat");
    var P=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,N,M],"sat");
    $r([t,P]);break;
   }
  },[a,b,c,d,p,m,f,j,k,l,n],"$wa3");
  q.J(e,o,h);
 },[a,b,c,d,f,e,h]);
},[],"in `base:GHC.IO.Encoding.Latin1'");
var $$GHCziIOziEncodingziLatin1_zdwa1=$f(8,function(d1,e1,f1,g1,h1,i1,j1,k1){
 $M(j1,function(l1){
  var m1=l1.v[0],n1=l1.v[1],o1=l1.v[2],p1=l1.v[3],q1=l1.v[4],r1=l1.v[5];
  var s1=$d(1,[d1,e1,f1,g1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var t1=$f(3,function(u1,v1,w1){
   var x1=v1.greaterThanOrEqual(p1)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(x1.g){
   case 1:
    var y1=u1.greaterThanOrEqual(i1)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(y1.g){
    case 1:
     var J1=$hs_plusAddrzh(d1,u1);
     var z1=$hs_readWord8OffAddrzh(J1,goog.math.Long.fromBits(0,0),w1);
     var A1=z1[0],B1=z1[1];
     var H1=$hs_touchzh(e1,A1);
     var I1=$hs_word2Intzh(B1);
     var G1=$hs_chrzh(I1);
     var F1=$hs_writeWideCharOffAddrzh(m1,v1,G1,H1);
     var E1=$hs_touchzh(n1,F1);
     var D1=v1.add(goog.math.Long.fromBits(1,0));
     var C1=u1.add(goog.math.Long.fromBits(1,0));
     t1.J(C1,D1,E1);break;
    case 2:
     var K1=$d(1,[m1,n1,o1,p1,q1,v1],"sat");
     var L1=$t(function(){
      var M1=u1.equals(i1)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(M1.g){
      case 1:
       $R(1,[d1,e1,f1,g1,u1,i1],"Buffer");break;
      case 2:
       $A(s1);break;
      }
     },[d1,e1,f1,g1,s1,u1,i1],"sat");
     var N1=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,L1,K1],"sat");
     $r([w1,N1]);break;
    }break;
   case 2:
    var O1=$d(1,[m1,n1,o1,p1,q1,v1],"sat");
    var P1=$t(function(){
     var Q1=u1.equals(i1)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Q1.g){
     case 1:
      $R(1,[d1,e1,f1,g1,u1,i1],"Buffer");break;
     case 2:
      $A(s1);break;
     }
    },[d1,e1,f1,g1,s1,u1,i1],"sat");
    var R1=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,P1,O1],"sat");
    $r([w1,R1]);break;
   }
  },[d1,e1,f1,g1,s1,p1,i1,m1,n1,o1,q1],"$wa3");
  t1.J(h1,r1,k1);
 },[d1,e1,f1,g1,i1,h1,k1]);
},[],"in `base:GHC.IO.Encoding.Latin1'");
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
var $$GHCziIOziException_zdfShowAsyncException4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("stack overflow");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException8=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException4,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("heap overflow");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException7=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException3,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("thread killed");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException6=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException2,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("user interrupt");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException5=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException1,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncExceptionzuzdcshowsPrec=$f(2,function(j2,k2){
 $M(k2,function(l2){
  switch(l2.g){
  case 1:
   $A($$GHCziIOziException_zdfShowAsyncException8);break;
  case 2:
   $A($$GHCziIOziException_zdfShowAsyncException7);break;
  case 3:
   $A($$GHCziIOziException_zdfShowAsyncException6);break;
  case 4:
   $A($$GHCziIOziException_zdfShowAsyncException5);break;
  }
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncExceptionzuzdcshowList=$f(2,function(m2,n2){
 $M(m2,function(o2){
  switch(o2.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",n2);break;
  case 2:
   var p2=o2.v[0],q2=o2.v[1];
   var r2=$t(function(){
    var s2=$t(function(){
     var t2=$d(2,[$$GHCziShow_showListzuzu2,n2],"lvl20");
     var u2=$f(1,function(v2){
      $M(v2,function(w2){
       switch(w2.g){
       case 1:
	$A(t2);break;
       case 2:
	var x2=w2.v[0],y2=w2.v[1];
	var z2=$t(function(){
	 $M(x2,function(A2){
	  switch(A2.g){
	  case 1:
	   var B2=$t(function(){
	    u2.J(y2);
	   },[y2,u2],"sat");
	   $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException4,B2);break;
	  case 2:
	   var C2=$t(function(){
	    u2.J(y2);
	   },[y2,u2],"sat");
	   $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException3,C2);break;
	  case 3:
	   var D2=$t(function(){
	    u2.J(y2);
	   },[y2,u2],"sat");
	   $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException2,D2);break;
	  case 4:
	   var E2=$t(function(){
	    u2.J(y2);
	   },[y2,u2],"sat");
	   $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException1,E2);break;
	  }
	 },[y2,u2]);
	},[x2,y2,u2],"sat");
	$R(2,[$$GHCziShow_showListzuzu1,z2],":");break;
       }
      },[t2,u2]);
     },[t2],"showl");
     u2.J(q2);
    },[n2,q2],"a1");
    $M(p2,function(F2){
     switch(F2.g){
     case 1:
      $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException4,s2);break;
     case 2:
      $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException3,s2);break;
     case 3:
      $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException2,s2);break;
     case 4:
      $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException1,s2);break;
     }
    },[s2]);
   },[n2,q2,p2],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,r2],":");break;
  }
 },[n2]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncExceptionzuzdcshow=$f(1,function(G2){
 $M(G2,function(H2){
  switch(H2.g){
  case 1:
   $A($$GHCziIOziException_zdfShowAsyncException4);break;
  case 2:
   $A($$GHCziIOziException_zdfShowAsyncException3);break;
  case 3:
   $A($$GHCziIOziException_zdfShowAsyncException2);break;
  case 4:
   $A($$GHCziIOziException_zdfShowAsyncException1);break;
  }
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException=$D(1,function(){
 $r([$$GHCziIOziException_zdfShowAsyncExceptionzuzdcshowsPrec,$$GHCziIOziException_zdfShowAsyncExceptionzuzdcshow,$$GHCziIOziException_zdfShowAsyncExceptionzuzdcshowList]);
},"at libraries/base/GHC/IO/Exception.hs:153:10");
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
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdcfromException=$f(1,function(Ga){
 $M(Ga,function(Ha){
  var Ia=Ha.v[0],Ja=Ha.v[1];
  $$GHCziException_zdp1Exception.C([Ia,Ja],function(Ka){
   var La=Ka.v[0],Ma=Ka.v[1];
   var Na=$hs_eqWordzh(La,goog.math.Long.fromBits(2363394409,315339024));
   switch(Na.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var Oa=$hs_eqWordzh(Ma,goog.math.Long.fromBits(2156861182,4256135785));
    switch(Oa.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[Ja],"Just");break;
    }break;
   }
  },[Ja]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncException=$D(1,function(){
 $r([$$GHCziIOziException_zdfTypeableAsyncExceptionzuzdctypeOf,$$GHCziIOziException_zdfShowAsyncException,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdcfromException]);
},"at libraries/base/GHC/IO/Exception.hs:135:10");
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException=$f(1,function(t){
 $R(1,[$$GHCziIOziException_zdfExceptionAsyncException,t],"SomeException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableExitCodezuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ExitCode");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableExitCodezuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(1741995454,4203736966),goog.math.Long.fromBits(3139257453,3149502275),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableExitCodezuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableExitCode1=$D(1,function(){
 $r([goog.math.Long.fromBits(1741995454,4203736966),goog.math.Long.fromBits(3139257453,3149502275),$$GHCziIOziException_zdfTypeableExitCodezuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableExitCodezuzdctypeOf=$f(1,function(Za){
 $A($$GHCziIOziException_zdfTypeableExitCode1);
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
var $$GHCziIOziException_untangle1=$D(1,function(){
 $r([" "]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle4=$f(1,function(qd){
 $M(qd,function(rd){
  var sd=rd.v[0];
  $M(sd,function(td){
   switch(td.toString()){
   case "|":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle3=$D(1,function(){
 $r(["\n"]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle2=$D(2,function(){
 $r([$$GHCziIOziException_untangle3,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle=$f(2,function(ud,vd){
 $$GHCziCString_unpackCStringUtf8zh.C([ud],function(wd){
  $$GHCziList_zdwspan.C([$$GHCziIOziException_untangle4,wd],function(xd){
   var yd=xd[0],zd=xd[1];
   var Ad=$f(2,function(Bd,Cd){
    var Dd=$t(function(){
     var Ed=$t(function(){
      var Fd=$t(function(){
       $$GHCziBase_zpzp.J(Cd,$$GHCziIOziException_untangle2);
      },[Cd],"sat");
      $$GHCziBase_zpzp.J(vd,Fd);
     },[vd,Cd],"sat");
     $$GHCziCString_unpackAppendCStringzh.J(": ",Ed);
    },[vd,Cd],"sat");
    $$GHCziBase_zpzp.J(Bd,Dd);
   },[vd],"$j");
   $M(zd,function(Gd){
    switch(Gd.g){
    case 1:
     Ad.J(yd,$$GHCziTypes_ZMZN);break;
    case 2:
     var Hd=Gd.v[0],Id=Gd.v[1];
     $M(Hd,function(Jd){
      var Kd=Jd.v[0];
      $M(Kd,function(Ld){
       switch(Ld.toString()){
       case "|":
	var Md=$d(2,[$$GHCziIOziException_untangle1,Id],"sat");
	Ad.J(yd,Md);break;
       default:
	Ad.J(yd,$$GHCziTypes_ZMZN);
       }
      },[vd,Ad,yd,Id]);
     },[vd,Ad,yd,Id]);break;
    }
   },[vd,Ad,yd]);
  },[vd]);
 },[vd]);
},[],"at libraries/base/GHC/IO/Exception.hs:327:1");
var $$GHCziIOziException_ResourceExhausted=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:233:5");
var $$GHCziIOziException_EOF=$D(5,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:234:5");
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
var $$GHCziIOziException_UserInterrupt=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:129:5");
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
var $$GHCziIOziFD_stdin=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:298:1");
var $$GHCziIOziFD_stdout=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:299:1");
var $$GHCziIOziFD_stderr=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:300:1");
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
var $$GHCziIOziHandleziFD_stderr=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziHandleziFD$e);
},[],"at libraries/base/GHC/IO/Handle/FD.hs:74:1");
var $$GHCziIOziHandleziFD_stdout=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziHandleziFD$g);
},[],"at libraries/base/GHC/IO/Handle/FD.hs:63:1");
var $$GHCziIOziHandleziFD_stdin=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziHandleziFD$i);
},[],"at libraries/base/GHC/IO/Handle/FD.hs:52:1");
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
var $$GHCziIOziHandleziFD$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<stderr>");
},"lvl");
var $$GHCziIOziHandleziFD$d=$D(2,function(){
 $r([$$GHCziIOziHandleziFD$b]);
},"lvl1");
var $$GHCziIOziHandleziFD$e=$F(1,function(k5){
 var r5=$hs_noDuplicatezh(k5);
 $M($$GHCziIOziEncoding_getLocaleEncoding1,function(l5){
  var m5=l5.v[0];
  m5.C([r5],function(n5){
   var o5=n5[0],p5=n5[1];
   var q5=$d(2,[p5],"sat");
   $$GHCziIOziHandleziInternals_mkDuplexHandle5.J($$GHCziIOziFD_zdfIODeviceFD,$$GHCziIOziFD_zdfBufferedIOFD,$$GHCziIOziFD_zdfTypeableFDzuzdctypeOf,$$GHCziIOziFD_stderr,$$GHCziIOziHandleziFD$c,$$GHCziIOziHandleziTypes_WriteHandle,$$GHCziTypes_False,q5,$$GHCziIOziHandleziTypes_noNewlineTranslation,$$GHCziIOziHandleziFD$d,$$DataziMaybe_Nothing,o5);
  },[]);
 },[r5]);
},"lvl2");
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
var $$GHCziIOziHandleziFD$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<stdin>");
},"lvl5");
var $$GHCziIOziHandleziFD$i=$F(1,function(A5){
 var H5=$hs_noDuplicatezh(A5);
 $M($$GHCziIOziEncoding_getLocaleEncoding1,function(B5){
  var C5=B5.v[0];
  C5.C([H5],function(D5){
   var E5=D5[0],F5=D5[1];
   var G5=$d(2,[F5],"sat");
   $$GHCziIOziHandleziInternals_mkDuplexHandle5.J($$GHCziIOziFD_zdfIODeviceFD,$$GHCziIOziFD_zdfBufferedIOFD,$$GHCziIOziFD_zdfTypeableFDzuzdctypeOf,$$GHCziIOziFD_stdin,$$GHCziIOziHandleziFD$h,$$GHCziIOziHandleziTypes_ReadHandle,$$GHCziTypes_True,G5,$$GHCziIOziHandleziTypes_noNewlineTranslation,$$GHCziIOziHandleziFD$d,$$DataziMaybe_Nothing,E5);
  },[]);
 },[H5]);
},"lvl6");
var $$GHCziIOziHandleziInternals_wantReadableHandle3=$f(1,function(n){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals$h,n);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_EOF,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_ioezuEOF=$f(1,function(m){
 $$GHCziIOziHandleziInternals$i.J(m);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:328:1");
var $$GHCziIOziHandleziInternals_wantSeekableHandle5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("handle is closed");
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandle4=$f(1,function(o){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals$j,o);
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
var $$GHCziIOziHandleziInternals_wantReadableHandle2=$f(3,function(D1,E1,F1){
 $M(E1,function(G1){
  var H1=G1.v[1],I1=G1.v[3],J1=G1.v[4],K1=G1.v[5],L1=G1.v[8];
  $M(J1,function(M1){
   switch(M1.g){
   case 3:
    D1.J(G1,F1);break;
   case 4:
    $$GHCziIOziHandleziInternals_wantReadableHandle3.J(F1);break;
   case 5:
    $$GHCziIOziHandleziInternals_wantReadableHandle3.J(F1);break;
   case 6:
    var N1=$hs_readMutVarzh(K1,F1);
    var O1=N1[0],P1=N1[1];
    $M(P1,function(Q1){
     var R1=Q1.v[2],S1=Q1.v[4],T1=Q1.v[5];
     $M(R1,function(U1){
      switch(U1.g){
      case 1:
       D1.J(G1,O1);break;
      case 2:
       var V1=S1.equals(T1)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(V1.g){
       case 1:
	var W1=$hs_readMutVarzh(K1,O1);
	var X1=W1[0],Y1=W1[1];
	$M(Y1,function(Z1){
	 var a2=Z1.v[4],b2=Z1.v[5];
	 var c2=a2.equals(b2)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(c2.g){
	 case 1:
	  $$GHCziIOziBufferedIO_flushWriteBuffer.C([H1,I1,Z1,X1],function(d2){
	   var e2=d2[0],f2=d2[1];
	   var C2=$hs_writeMutVarzh(K1,f2,e2);
	   var g2=$hs_readMutVarzh(L1,C2);
	   var h2=g2[0],i2=g2[1];
	   var j2=$t(function(){
	    $M(i2,function(k2){
	     var l2=k2.v[0],m2=k2.v[1],n2=k2.v[3],o2=k2.v[4],p2=k2.v[5];
	     $R(1,[l2,m2,$$GHCziIOziBuffer_ReadBuffer,n2,o2,p2],"Buffer");
	    },[]);
	   },[i2],"sat");
	   var B2=$hs_writeMutVarzh(L1,j2,h2);
	   var q2=$hs_readMutVarzh(K1,B2);
	   var r2=q2[0],s2=q2[1];
	   var t2=$t(function(){
	    $M(s2,function(u2){
	     var v2=u2.v[0],w2=u2.v[1],x2=u2.v[3],y2=u2.v[4],z2=u2.v[5];
	     $R(1,[v2,w2,$$GHCziIOziBuffer_ReadBuffer,x2,y2,z2],"Buffer");
	    },[]);
	   },[s2],"sat");
	   var A2=$hs_writeMutVarzh(K1,t2,r2);
	   D1.J(G1,A2);
	  },[G1,D1,K1,L1]);break;
	 case 2:
	  var D2=$hs_readMutVarzh(L1,X1);
	  var E2=D2[0],F2=D2[1];
	  var G2=$t(function(){
	   $M(F2,function(H2){
	    var I2=H2.v[0],J2=H2.v[1],K2=H2.v[3],L2=H2.v[4],M2=H2.v[5];
	    $R(1,[I2,J2,$$GHCziIOziBuffer_ReadBuffer,K2,L2,M2],"Buffer");
	   },[]);
	  },[F2],"sat");
	  var Y2=$hs_writeMutVarzh(L1,G2,E2);
	  var N2=$hs_readMutVarzh(K1,Y2);
	  var O2=N2[0],P2=N2[1];
	  var Q2=$t(function(){
	   $M(P2,function(R2){
	    var S2=R2.v[0],T2=R2.v[1],U2=R2.v[3],V2=R2.v[4],W2=R2.v[5];
	    $R(1,[S2,T2,$$GHCziIOziBuffer_ReadBuffer,U2,V2,W2],"Buffer");
	   },[]);
	  },[P2],"sat");
	  var X2=$hs_writeMutVarzh(K1,Q2,O2);
	  D1.J(G1,X2);break;
	 }
	},[G1,D1,K1,H1,I1,X1,L1]);break;
       case 2:
	var Z2=$hs_readMutVarzh(L1,O1);
	var a3=Z2[0],b3=Z2[1];
	var c3=$t(function(){
	 $M(b3,function(d3){
	  var e3=d3.v[0],f3=d3.v[1],g3=d3.v[3],h3=d3.v[4],i3=d3.v[5];
	  $R(1,[e3,f3,$$GHCziIOziBuffer_ReadBuffer,g3,h3,i3],"Buffer");
	 },[]);
	},[b3],"sat");
	var u3=$hs_writeMutVarzh(L1,c3,a3);
	var j3=$hs_readMutVarzh(K1,u3);
	var k3=j3[0],l3=j3[1];
	var m3=$t(function(){
	 $M(l3,function(n3){
	  var o3=n3.v[0],p3=n3.v[1],q3=n3.v[3],r3=n3.v[4],s3=n3.v[5];
	  $R(1,[o3,p3,$$GHCziIOziBuffer_ReadBuffer,q3,r3,s3],"Buffer");
	 },[]);
	},[l3],"sat");
	var t3=$hs_writeMutVarzh(K1,m3,k3);
	D1.J(G1,t3);break;
       }break;
      }
     },[G1,D1,K1,O1,S1,T1,H1,I1,L1]);
    },[G1,D1,K1,O1,H1,I1,L1]);break;
   default:
    $$GHCziIOziHandleziInternals_wantReadableHandle4.J(F1);
   }
  },[F1,G1,D1,K1,H1,I1,L1]);
 },[F1,D1]);
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
var $$GHCziIOziHandleziInternals_zdwa3=$f(8,function(S3,T3,U3,V3,W3,X3,Y3,Z3){
 $M(S3,function(a4){
  var b4=a4.v[1],c4=a4.v[3],d4=a4.v[5],e4=a4.v[6],f4=a4.v[10];
  var g4=$hs_readMutVarzh(d4,Z3);
  var h4=g4[0],i4=g4[1];
  var j4=$f(3,function(k4,l4,m4){
   $M(l4,function(n4){
    var o4=n4.v[3],p4=n4.v[4],q4=n4.v[5];
    var r4=$f(1,function(s4){
     $$GHCziIOziBufferedIO_flushWriteBuffer.C([b4,c4,n4,m4],function(t4){
      var u4=t4[0],v4=t4[1];
      var E4=$hs_writeMutVarzh(d4,v4,u4);
      $M(k4,function(w4){
       var x4=w4.v[0],y4=w4.v[1],z4=w4.v[2],A4=w4.v[3],B4=w4.v[4],C4=w4.v[5];
       var D4=B4.equals(C4)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(D4.g){
       case 1:
	$$GHCziIOziHandleziInternals_zdwa3.J(a4,x4,y4,z4,A4,B4,C4,E4);break;
       case 2:
	$r([E4,$$GHCziTuple_Z0T]);break;
       }
      },[a4,E4]);
     },[d4,k4,a4]);
    },[d4,b4,c4,n4,m4,k4,a4],"$w$j");
    var F4=o4.equals(q4)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(F4.g){
    case 1:
     $M(k4,function(G4){
      var H4=G4.v[0],I4=G4.v[1],J4=G4.v[2],K4=G4.v[3],L4=G4.v[4],M4=G4.v[5];
      var N4=$t(function(){
       $r(L4.equals(M4)?$$GHCziTypes_True:$$GHCziTypes_False);
      },[L4,M4],"lvl18");
      var O4=$f(1,function(P4){
       $M(e4,function(Q4){
	switch(Q4.g){
	case 1:
	 r4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var S4=$hs_writeMutVarzh(d4,n4,m4);
	 $M(N4,function(R4){
	  switch(R4.g){
	  case 1:
	   $$GHCziIOziHandleziInternals_zdwa3.J(a4,H4,I4,J4,K4,L4,M4,S4);break;
	  case 2:
	   $r([S4,$$GHCziTuple_Z0T]);break;
	  }
	 },[a4,L4,M4,H4,I4,J4,K4,S4]);break;
	case 3:
	 var T4=Q4.v[0];
	 $M(T4,function(U4){
	  switch(U4.g){
	  case 1:
	   var W4=$hs_writeMutVarzh(d4,n4,m4);
	   $M(N4,function(V4){
	    switch(V4.g){
	    case 1:
	     $$GHCziIOziHandleziInternals_zdwa3.J(a4,H4,I4,J4,K4,L4,M4,W4);break;
	    case 2:
	     $r([W4,$$GHCziTuple_Z0T]);break;
	    }
	   },[a4,L4,M4,H4,I4,J4,K4,W4]);break;
	  case 2:
	   var X4=U4.v[0];
	   $M(X4,function(Y4){
	    var Z4=Y4.v[0];
	    var d5=q4.subtract(p4);
	    var a5=d5.greaterThanOrEqual(Z4)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(a5.g){
	    case 1:
	     var c5=$hs_writeMutVarzh(d4,n4,m4);
	     $M(N4,function(b5){
	      switch(b5.g){
	      case 1:
	       $$GHCziIOziHandleziInternals_zdwa3.J(a4,H4,I4,J4,K4,L4,M4,c5);break;
	      case 2:
	       $r([c5,$$GHCziTuple_Z0T]);break;
	      }
	     },[a4,L4,M4,H4,I4,J4,K4,c5]);break;
	    case 2:
	     r4.J($$GHCziPrim_realWorldzh);break;
	    }
	   },[d4,b4,c4,n4,m4,k4,a4,r4,q4,L4,M4,N4,H4,I4,J4,K4,p4]);break;
	  }
	 },[d4,b4,c4,n4,m4,k4,a4,r4,q4,L4,M4,N4,H4,I4,J4,K4,p4]);break;
	}
       },[d4,b4,c4,n4,m4,k4,a4,r4,q4,L4,M4,N4,H4,I4,J4,K4,p4]);
      },[d4,n4,m4,a4,r4,q4,L4,M4,N4,e4,H4,I4,J4,K4,p4],"$w$j1");
      $M(N4,function(e5){
       switch(e5.g){
       case 1:
	var f5=L4.equals(X3)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(f5.g){
	case 1:
	 O4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 r4.J($$GHCziPrim_realWorldzh);break;
	}break;
       case 2:
	O4.J($$GHCziPrim_realWorldzh);break;
       }
      },[d4,b4,c4,n4,m4,k4,a4,r4,q4,L4,M4,N4,e4,H4,I4,J4,K4,p4,O4,X3]);
     },[d4,b4,c4,n4,m4,k4,a4,r4,q4,e4,p4,X3]);break;
    case 2:
     r4.J($$GHCziPrim_realWorldzh);break;
    }
   },[d4,b4,c4,m4,k4,a4,e4,X3]);
  },[d4,b4,c4,a4,e4,X3],"$wa4");
  $M(f4,function(g5){
   switch(g5.g){
   case 1:
    $$GHCziIOziEncodingziLatin1_zdwa.C([T3,U3,V3,W3,X3,Y3,i4,h4],function(h5){
     var i5=h5[0],j5=h5[1];
     $M(j5,function(k5){
      var l5=k5.v[1],m5=k5.v[2];
      j4.J(l5,m5,i5);
     },[d4,b4,c4,a4,e4,X3,j4,i5]);
    },[d4,b4,c4,a4,e4,X3,j4]);break;
   case 2:
    var n5=g5.v[0];
    $M(n5,function(o5){
     var p5=o5.v[0],q5=o5.v[1];
     var r5=$d(1,[T3,U3,V3,W3,X3,Y3],"sat");
     $$GHCziIOziHandleziInternals_zdwa.C([p5,q5,r5,i4,h4],function(s5){
      var t5=s5[0],u5=s5[1];
      $M(u5,function(v5){
       var w5=v5.v[0],x5=v5.v[1];
       j4.J(w5,x5,t5);
      },[d4,b4,c4,a4,e4,X3,j4,t5]);
     },[d4,b4,c4,a4,e4,X3,j4]);
    },[d4,b4,c4,a4,e4,X3,j4,T3,U3,V3,W3,Y3,i4,h4]);break;
   }
  },[d4,b4,c4,a4,e4,X3,j4,T3,U3,V3,W3,Y3,i4,h4]);
 },[Z3,X3,T3,U3,V3,W3,Y3]);
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
var $$GHCziIOziHandleziInternals_hLookAheadzuzuzdsa=$f(27,function(Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd){
 var ld=$hs_readMutVarzh(Pc,kd);
 var md=ld[0],nd=ld[1];
 $M(nd,function(od){
  var pd=od.v[4],qd=od.v[5];
  var rd=$f(2,function(sd,td){
   Yc.C([td],function(ud){
    var vd=ud[0],wd=ud[1];
    var xd=$d(1,[wd,sd],"sat");
    var Qd=$hs_writeMutVarzh(Rc,xd,vd);
    var yd=$d(1,[ed,fd,gd,hd,id,jd],"sat");
    $$GHCziIOziHandleziInternals_zdwa.C([Vc,Wc,sd,yd,Qd],function(zd){
     var Ad=zd[0],Bd=zd[1];
     $M(Bd,function(Cd){
      var Dd=Cd.v[0],Ed=Cd.v[1];
      var Id=$hs_writeMutVarzh(Pc,Dd,Ad);
      $M(Ed,function(Fd){
       var Gd=Fd.v[5];
       var Hd=Gd.equals(jd)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Hd.g){
       case 1:
	$r([Id,Fd]);break;
       case 2:
	$M(Dd,function(Jd){
	 var Kd=Jd.v[0],Ld=Jd.v[1],Md=Jd.v[2],Nd=Jd.v[3],Od=Jd.v[4],Pd=Jd.v[5];
	 $$GHCziIOziHandleziInternals$r.J(Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,ad,bd,cd,dd,Kd,Ld,Md,Nd,Od,Pd,ed,fd,gd,hd,id,jd,Id);
	},[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Id,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd]);break;
       }
      },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Dd,Id,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd]);
     },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Ad,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd]);
    },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd]);
   },[Pc,Yc,Rc,sd,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd]);
  },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd],"a6");
  var Rd=pd.equals(qd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Rd.g){
  case 1:
   rd.J(od,md);break;
  case 2:
   $$GHCziIOziBufferedIO_fillReadBuffer.C([Lc,Nc,od,md],function(Sd){
    var Td=Sd[0],Ud=Sd[1];
    $M(Ud,function(Vd){
     var Wd=Vd.v[0],Xd=Vd.v[1];
     $M(Wd,function(Yd){
      var Zd=Yd.v[0];
      $M(Zd,function(ae){
       switch(ae.toString()){
       case "0":
	$$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,Td],function(be){
	 var ce=be[0],de=be[1];
	 rd.J(de,ce);
	},[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd,rd]);break;
       default:
	rd.J(Xd,Td);
       }
      },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd,rd,Xd,Td]);
     },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd,rd,Xd,Td]);
    },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd,rd,Td]);
   },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd,rd]);break;
  }
 },[Pc,Yc,Rc,Vc,Wc,ed,fd,gd,hd,id,jd,Kc,Lc,Mc,Nc,Oc,Qc,Sc,Tc,Uc,Xc,Zc,ad,bd,cd,dd,md]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_hLookAheadzu2=$f(3,function(ee,fe,ge){
 $M(ee,function(he){
  var ie=he.v[0],je=he.v[1],ke=he.v[2],le=he.v[3],me=he.v[4],ne=he.v[5],oe=he.v[6],pe=he.v[7],qe=he.v[8],re=he.v[9],se=he.v[10],te=he.v[11],ue=he.v[12],ve=he.v[13],we=he.v[14],xe=he.v[15];
  var ye=$hs_readMutVarzh(ne,ge);
  var ze=ye[0],Ae=ye[1];
  $M(Ae,function(Be){
   var Ce=Be.v[0],De=Be.v[1],Ee=Be.v[2],Fe=Be.v[3],Ge=Be.v[4],He=Be.v[5];
   var Ie=$f(7,function(Je,Ke,Le,Me,Ne,Oe,Pe){
    $M(te,function(Qe){
     switch(Qe.g){
     case 1:
      var Re=$d(1,[Je,Ke,Le,Me,Ne,Oe],"sat");
      var Se=$d(1,[$$GHCziIOziHandleziInternals$p,Re],"sat");
      var zf=$hs_writeMutVarzh(pe,Se,Pe);
      $$GHCziIOziEncodingziLatin1_zdwa1.C([Je,Ke,Le,Me,Ne,Oe,fe,zf],function(Te){
       var Ue=Te[0],Ve=Te[1];
       $M(Ve,function(We){
	var Xe=We.v[1],Ye=We.v[2];
	var ef=$hs_writeMutVarzh(ne,Xe,Ue);
	$M(Ye,function(Ze){
	 var af=Ze.v[5];
	 $M(fe,function(bf){
	  var cf=bf.v[5];
	  var df=af.equals(cf)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(df.g){
	  case 1:
	   $r([ef,Ze]);break;
	  case 2:
	   $M(Xe,function(ff){
	    var gf=ff.v[0],hf=ff.v[1],jf=ff.v[2],kf=ff.v[3],lf=ff.v[4],mf=ff.v[5];
	    var qf=mf.subtract(lf);
	    var yf=$hs_int2Wordzh(qf);
	    var xf=$hs_plusAddrzh(gf,lf);
	    var $ff=memcpy(gf,xf,yf);
	    var nf=[ef,$ff];
	    var of=nf[0];
	    var wf=$hs_touchzh(hf,of);
	    var pf=$d(1,[gf,hf,jf,kf,goog.math.Long.fromBits(0,0),qf],"sat");
	    $$GHCziIOziBufferedIO_fillReadBuffer.C([je,le,pf,wf],function(rf){
	     var sf=rf[1];
	     $M(sf,function(tf){
	      var uf=tf.v[0];
	      $M(uf,function(vf){
	       $A($$GHCziIOziHandleziInternals$q);
	      },[]);
	     },[]);
	    },[]);
	   },[ef,je,le]);break;
	  }
	 },[Xe,af,ef,Ze,je,le]);
	},[fe,Xe,ef,je,le]);
       },[ne,fe,Ue,je,le]);
      },[ne,fe,je,le]);break;
     case 2:
      var Af=Qe.v[0];
      $M(Af,function(Bf){
       var Cf=Bf.v[0],Df=Bf.v[1],Ef=Bf.v[2],Ff=Bf.v[3],Gf=Bf.v[4];
       Ff.C([Pe],function(Hf){
	var If=Hf[0],Jf=Hf[1];
	var Kf=$d(1,[Je,Ke,Le,Me,Ne,Oe],"sat");
	var Lf=$d(1,[Jf,Kf],"sat");
	var lg=$hs_writeMutVarzh(pe,Lf,If);
	var Mf=$d(1,[Je,Ke,Le,Me,Ne,Oe],"sat");
	$$GHCziIOziHandleziInternals_zdwa.C([Cf,Df,Mf,fe,lg],function(Nf){
	 var Of=Nf[0],Pf=Nf[1];
	 $M(Pf,function(Qf){
	  var Rf=Qf.v[0],Sf=Qf.v[1];
	  var dg=$hs_writeMutVarzh(ne,Rf,Of);
	  $M(Sf,function(Tf){
	   var Uf=Tf.v[5];
	   $M(fe,function(Vf){
	    var Wf=Vf.v[0],Xf=Vf.v[1],Yf=Vf.v[2],Zf=Vf.v[3],ag=Vf.v[4],bg=Vf.v[5];
	    var cg=Uf.equals(bg)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(cg.g){
	    case 1:
	     $r([dg,Tf]);break;
	    case 2:
	     $M(Rf,function(eg){
	      var fg=eg.v[0],gg=eg.v[1],hg=eg.v[2],ig=eg.v[3],jg=eg.v[4],kg=eg.v[5];
	      $$GHCziIOziHandleziInternals$r.J(ie,je,ke,le,me,ne,oe,pe,qe,re,se,Cf,Df,Ef,Ff,Gf,ue,ve,we,xe,fg,gg,hg,ig,jg,kg,Wf,Xf,Yf,Zf,ag,bg,dg);
	     },[ne,pe,je,le,Ff,Cf,Df,bg,dg,ie,ke,me,oe,qe,re,se,Ef,Gf,ue,ve,we,xe,Wf,Xf,Yf,Zf,ag]);break;
	    }
	   },[ne,pe,je,le,Ff,Cf,Df,Rf,Uf,dg,Tf,ie,ke,me,oe,qe,re,se,Ef,Gf,ue,ve,we,xe]);
	  },[ne,pe,fe,je,le,Ff,Cf,Df,Rf,dg,ie,ke,me,oe,qe,re,se,Ef,Gf,ue,ve,we,xe]);
	 },[ne,pe,fe,je,le,Ff,Cf,Df,Of,ie,ke,me,oe,qe,re,se,Ef,Gf,ue,ve,we,xe]);
	},[ne,pe,fe,je,le,Ff,Cf,Df,ie,ke,me,oe,qe,re,se,Ef,Gf,ue,ve,we,xe]);
       },[ne,pe,Je,Ke,Le,Me,Ne,Oe,fe,je,le,Ff,Cf,Df,ie,ke,me,oe,qe,re,se,Ef,Gf,ue,ve,we,xe]);
      },[ne,pe,Je,Ke,Le,Me,Ne,Oe,Pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe]);break;
     }
    },[ne,pe,Je,Ke,Le,Me,Ne,Oe,Pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe]);
   },[ne,te,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe],"$sa");
   var mg=$f(2,function(ng,og){
    $M(te,function(pg){
     switch(pg.g){
     case 1:
      var qg=$d(1,[$$GHCziIOziHandleziInternals$p,ng],"sat");
      var dh=$hs_writeMutVarzh(pe,qg,og);
      $M(ng,function(rg){
       var sg=rg.v[0],tg=rg.v[1],ug=rg.v[2],vg=rg.v[3],wg=rg.v[4],xg=rg.v[5];
       $$GHCziIOziEncodingziLatin1_zdwa1.C([sg,tg,ug,vg,wg,xg,fe,dh],function(yg){
	var zg=yg[0],Ag=yg[1];
	$M(Ag,function(Bg){
	 var Cg=Bg.v[1],Dg=Bg.v[2];
	 var Jg=$hs_writeMutVarzh(ne,Cg,zg);
	 $M(Dg,function(Eg){
	  var Fg=Eg.v[5];
	  $M(fe,function(Gg){
	   var Hg=Gg.v[5];
	   var Ig=Fg.equals(Hg)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Ig.g){
	   case 1:
	    $r([Jg,Eg]);break;
	   case 2:
	    $M(Cg,function(Kg){
	     var Lg=Kg.v[0],Mg=Kg.v[1],Ng=Kg.v[2],Og=Kg.v[3],Pg=Kg.v[4],Qg=Kg.v[5];
	     var Ug=Qg.subtract(Pg);
	     var ch=$hs_int2Wordzh(Ug);
	     var bh=$hs_plusAddrzh(Lg,Pg);
	     var $ff=memcpy(Lg,bh,ch);
	     var Rg=[Jg,$ff];
	     var Sg=Rg[0];
	     var ah=$hs_touchzh(Mg,Sg);
	     var Tg=$d(1,[Lg,Mg,Ng,Og,goog.math.Long.fromBits(0,0),Ug],"sat");
	     $$GHCziIOziBufferedIO_fillReadBuffer.C([je,le,Tg,ah],function(Vg){
	      var Wg=Vg[1];
	      $M(Wg,function(Xg){
	       var Yg=Xg.v[0];
	       $M(Yg,function(Zg){
		$A($$GHCziIOziHandleziInternals$q);
	       },[]);
	      },[]);
	     },[]);
	    },[je,le,Jg]);break;
	   }
	  },[je,le,Cg,Fg,Jg,Eg]);
	 },[fe,je,le,Cg,Jg]);
	},[ne,fe,je,le,zg]);
       },[ne,fe,je,le]);
      },[ne,fe,je,le,dh]);break;
     case 2:
      var eh=pg.v[0];
      $M(eh,function(fh){
       var gh=fh.v[0],hh=fh.v[1],ih=fh.v[2],jh=fh.v[3],kh=fh.v[4];
       jh.C([og],function(lh){
	var mh=lh[0],nh=lh[1];
	var oh=$d(1,[nh,ng],"sat");
	var Nh=$hs_writeMutVarzh(pe,oh,mh);
	$$GHCziIOziHandleziInternals_zdwa.C([gh,hh,ng,fe,Nh],function(ph){
	 var qh=ph[0],rh=ph[1];
	 $M(rh,function(sh){
	  var th=sh.v[0],uh=sh.v[1];
	  var Fh=$hs_writeMutVarzh(ne,th,qh);
	  $M(uh,function(vh){
	   var wh=vh.v[5];
	   $M(fe,function(xh){
	    var yh=xh.v[0],zh=xh.v[1],Ah=xh.v[2],Bh=xh.v[3],Ch=xh.v[4],Dh=xh.v[5];
	    var Eh=wh.equals(Dh)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Eh.g){
	    case 1:
	     $r([Fh,vh]);break;
	    case 2:
	     $M(th,function(Gh){
	      var Hh=Gh.v[0],Ih=Gh.v[1],Jh=Gh.v[2],Kh=Gh.v[3],Lh=Gh.v[4],Mh=Gh.v[5];
	      $$GHCziIOziHandleziInternals$r.J(ie,je,ke,le,me,ne,oe,pe,qe,re,se,gh,hh,ih,jh,kh,ue,ve,we,xe,Hh,Ih,Jh,Kh,Lh,Mh,yh,zh,Ah,Bh,Ch,Dh,Fh);
	     },[ne,pe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,jh,gh,hh,Dh,Fh,ih,kh,yh,zh,Ah,Bh,Ch]);break;
	    }
	   },[ne,pe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,jh,gh,hh,th,wh,Fh,vh,ih,kh]);
	  },[ne,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,jh,gh,hh,th,Fh,ih,kh]);
	 },[ne,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,jh,gh,hh,qh,ih,kh]);
	},[ne,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,jh,gh,hh,ih,kh]);
       },[ne,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,ng,jh,gh,hh,ih,kh]);
      },[ne,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,ng,og]);break;
     }
    },[ne,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,ng,og]);
   },[ne,te,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe],"a6");
   var Oh=Ge.equals(He)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Oh.g){
   case 1:
    Ie.J(Ce,De,Ee,Fe,Ge,He,ze);break;
   case 2:
    $$GHCziIOziBufferedIO_fillReadBuffer.C([je,le,Be,ze],function(Ph){
     var Qh=Ph[0],Rh=Ph[1];
     $M(Rh,function(Sh){
      var Th=Sh.v[0],Uh=Sh.v[1];
      $M(Th,function(Vh){
       var Wh=Vh.v[0];
       $M(Wh,function(Xh){
	switch(Xh.toString()){
	case "0":
	 $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,Qh],function(Yh){
	  var Zh=Yh[0],ai=Yh[1];
	  mg.J(ai,Zh);
	 },[ne,te,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,mg]);break;
	default:
	 mg.J(Uh,Qh);
	}
       },[ne,te,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,mg,Uh,Qh]);
      },[ne,te,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,mg,Uh,Qh]);
     },[ne,te,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,mg,Qh]);
    },[ne,te,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,mg]);break;
   }
  },[ne,te,pe,fe,je,le,ie,ke,me,oe,qe,re,se,ue,ve,we,xe,ze]);
 },[ge,fe]);
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
var $$GHCziIOziHandleziInternals_wantReadableHandlezu2=$f(5,function(Tn,Un,Vn,Wn,Xn){
 var Yn=$f(2,function(Zn,ao){
  $$GHCziIOziHandleziInternals_wantReadableHandle2.C([Wn,Zn,ao],function(bo){
   var co=bo[0],eo=bo[1];
   var fo=$d(1,[Zn,eo],"sat");
   $r([co,fo]);
  },[Zn]);
 },[Wn],"sat");
 $$GHCziIOziHandleziInternals_wantReadableHandle5.J(Tn,Un,Vn,Yn,Xn);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandlezu1=$f(4,function(go,ho,io,jo){
 $M(ho,function(ko){
  switch(ko.g){
  case 1:
   var lo=ko.v[1];
   var mo=$d(1,[lo],"sat");
   $$GHCziIOziHandleziInternals_wantReadableHandlezu2.J(go,ko,mo,io,jo);break;
  case 2:
   var no=ko.v[1];
   var oo=$d(1,[no],"sat");
   $$GHCziIOziHandleziInternals_wantReadableHandlezu2.J(go,ko,oo,io,jo);break;
  }
 },[go,io,jo]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is not open for writing");
},"lvl3");
var $$GHCziIOziHandleziInternals$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is not open for reading");
},"lvl5");
var $$GHCziIOziHandleziInternals$h=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$g,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl6");
var $$GHCziIOziHandleziInternals$i=$F(1,function(rt){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,rt);
},"a1");
var $$GHCziIOziHandleziInternals$j=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl7");
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
var $$GHCziIOziHandleziInternals$p=$T(function(){
 $$GHCziErr_error.J($$GHCziIOziHandleziInternals$m);
},"lvl13");
var $$GHCziIOziHandleziInternals$q=$T(function(){
 $$ControlziExceptionziBase_irrefutPatError.J("libraries/base/GHC/IO/Handle/Internals.hs:851:7-30|Data.Maybe.Just decoder");
},"lvl14");
var $$GHCziIOziHandleziInternals$r=$F(33,function(st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Jt,Kt,Lt,Mt,Nt,Ot,Pt,Qt,Rt,St,Tt,Ut,Vt,Wt,Xt,Yt){
 var cu=Rt.subtract(Qt);
 var gv=$hs_int2Wordzh(cu);
 var fv=$hs_plusAddrzh(Mt,Qt);
 var $ff=memcpy(Mt,fv,gv);
 var Zt=[Yt,$ff];
 var au=Zt[0];
 var ev=$hs_touchzh(Nt,au);
 var bu=$d(1,[Mt,Nt,Ot,Pt,goog.math.Long.fromBits(0,0),cu],"sat");
 $$GHCziIOziBufferedIO_fillReadBuffer.C([tt,vt,bu,ev],function(du){
  var eu=du[0],fu=du[1];
  $M(fu,function(gu){
   var hu=gu.v[0],iu=gu.v[1];
   $M(hu,function(ju){
    var ku=ju.v[0];
    $M(ku,function(lu){
     switch(lu.toString()){
     case "0":
      var Ou=$d(1,[St,Tt,Ut,Vt,Wt,Xt],"sat");
      Et.C([iu,Ou,eu],function(Pu){
       var Qu=Pu[0],Ru=Pu[1];
       $M(Ru,function(Su){
	var Tu=Su.v[0],Uu=Su.v[1];
	var dv=$hs_writeMutVarzh(xt,Tu,Qu);
	$M(Uu,function(Vu){
	 var Wu=Vu.v[0],Xu=Vu.v[1],Yu=Vu.v[2],Zu=Vu.v[3],av=Vu.v[4],bv=Vu.v[5];
	 var cv=bv.equals(Xt)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(cv.g){
	 case 1:
	  $r([dv,Vu]);break;
	 case 2:
	  $$GHCziIOziHandleziInternals_hLookAheadzuzuzdsa.J(st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Jt,Kt,Lt,Wu,Xu,Yu,Zu,av,bv,dv);break;
	 }
	},[tt,vt,Gt,zt,Dt,Et,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt,dv]);
       },[tt,vt,Gt,zt,Dt,Et,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt,Qu]);
      },[tt,vt,Gt,zt,Dt,Et,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);break;
     default:
      Gt.C([eu],function(mu){
       var nu=mu[0],ou=mu[1];
       var pu=$d(1,[ou,iu],"sat");
       var Nu=$hs_writeMutVarzh(zt,pu,nu);
       var qu=$d(1,[St,Tt,Ut,Vt,Wt,Xt],"sat");
       $$GHCziIOziHandleziInternals_zdwa.C([Dt,Et,iu,qu,Nu],function(ru){
	var su=ru[0],tu=ru[1];
	$M(tu,function(uu){
	 var vu=uu.v[0],wu=uu.v[1];
	 var Fu=$hs_writeMutVarzh(xt,vu,su);
	 $M(wu,function(xu){
	  var yu=xu.v[0],zu=xu.v[1],Au=xu.v[2],Bu=xu.v[3],Cu=xu.v[4],Du=xu.v[5];
	  var Eu=Xt.equals(Du)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Eu.g){
	  case 1:
	   $r([Fu,xu]);break;
	  case 2:
	   $M(vu,function(Gu){
	    var Hu=Gu.v[0],Iu=Gu.v[1],Ju=Gu.v[2],Ku=Gu.v[3],Lu=Gu.v[4],Mu=Gu.v[5];
	    $$GHCziIOziHandleziInternals$r.J(st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Jt,Kt,Lt,Hu,Iu,Ju,Ku,Lu,Mu,yu,zu,Au,Bu,Cu,Du,Fu);
	   },[tt,vt,Gt,zt,Dt,Et,xt,Du,Fu,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt,yu,zu,Au,Bu,Cu]);break;
	  }
	 },[tt,vt,Gt,zt,Dt,Et,Xt,xt,vu,Fu,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);
	},[tt,vt,Gt,zt,Dt,Et,Xt,xt,su,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);
       },[tt,vt,Gt,zt,Dt,Et,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);
      },[tt,vt,Gt,zt,iu,Dt,Et,St,Tt,Ut,Vt,Wt,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);
     }
    },[tt,vt,eu,Gt,zt,iu,Dt,Et,St,Tt,Ut,Vt,Wt,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);
   },[tt,vt,eu,Gt,zt,iu,Dt,Et,St,Tt,Ut,Vt,Wt,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);
  },[tt,vt,eu,Gt,zt,Dt,Et,St,Tt,Ut,Vt,Wt,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);
 },[tt,vt,Gt,zt,Dt,Et,St,Tt,Ut,Vt,Wt,Xt,xt,st,ut,wt,yt,At,Bt,Ct,Ft,Ht,It,Jt,Kt,Lt]);
},"$s$wa");
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
var $$GHCziIOziHandleziText_hPutChar2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hPutChar");
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_zdwa5=$f(3,function(Z1,a2,b2){
 var c2=$f(2,function(d2,e2){
  $M(d2,function(f2){
   var g2=f2.v[1],h2=f2.v[3],i2=f2.v[5],j2=f2.v[6],k2=f2.v[8],l2=f2.v[14];
   var m2=$hs_readMutVarzh(k2,e2);
   var n2=m2[0],o2=m2[1];
   $M(a2,function(p2){
    switch(p2.toString()){
    case "\n":
     var C2=$f(1,function(D2){
      $M(j2,function(E2){
       switch(E2.g){
       case 2:
	var F2=$hs_readMutVarzh(i2,D2);
	var G2=F2[0],H2=F2[1];
	$M(H2,function(I2){
	 var J2=I2.v[4],K2=I2.v[5];
	 var L2=J2.equals(K2)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(L2.g){
	 case 1:
	  $$GHCziIOziBufferedIO_flushWriteBuffer.C([g2,h2,I2,G2],function(M2){
	   var N2=M2[0],O2=M2[1];
	   var P2=$hs_writeMutVarzh(i2,O2,N2);
	   $r([P2,$$GHCziTuple_Z0T]);
	  },[i2]);break;
	 case 2:
	  $r([G2,$$GHCziTuple_Z0T]);break;
	 }
	},[i2,g2,h2,G2]);break;
       default:
	$r([D2,$$GHCziTuple_Z0T]);
       }
      },[D2,i2,g2,h2]);
     },[j2,i2,g2,h2],"a4");
     $M(l2,function(Q2){
      switch(Q2.g){
      case 1:
       $M(o2,function(R2){
	var S2=R2.v[0],T2=R2.v[1],U2=R2.v[2],V2=R2.v[3],W2=R2.v[4],X2=R2.v[5];
	var c3=$hs_writeWideCharOffAddrzh(S2,X2,"\n",n2);
	var b3=$hs_touchzh(T2,c3);
	var a3=X2.add(goog.math.Long.fromBits(1,0));
	$$GHCziIOziHandleziInternals_zdwa3.C([f2,S2,T2,U2,V2,W2,a3,b3],function(Y2){
	 var Z2=Y2[0];
	 C2.J(Z2);
	},[j2,i2,g2,h2,C2]);
       },[n2,f2,j2,i2,g2,h2,C2]);break;
      case 2:
       $M(o2,function(d3){
	var e3=d3.v[0],f3=d3.v[1],g3=d3.v[2],h3=d3.v[3],i3=d3.v[4],j3=d3.v[5];
	var r3=$hs_writeWideCharOffAddrzh(e3,j3,"\r",n2);
	var q3=$hs_touchzh(f3,r3);
	var o3=j3.add(goog.math.Long.fromBits(1,0));
	var p3=$hs_writeWideCharOffAddrzh(e3,o3,"\n",q3);
	var n3=$hs_touchzh(f3,p3);
	var m3=o3.add(goog.math.Long.fromBits(1,0));
	$$GHCziIOziHandleziInternals_zdwa3.C([f2,e3,f3,g3,h3,i3,m3,n3],function(k3){
	 var l3=k3[0];
	 C2.J(l3);
	},[j2,i2,g2,h2,C2]);
       },[n2,f2,j2,i2,g2,h2,C2]);break;
      }
     },[o2,n2,f2,j2,i2,g2,h2,C2]);break;
    default:
     $M(o2,function(q2){
      var r2=q2.v[0],s2=q2.v[1],t2=q2.v[2],u2=q2.v[3],v2=q2.v[4],w2=q2.v[5];
      var B2=$hs_writeWideCharOffAddrzh(r2,w2,p2,n2);
      var A2=$hs_touchzh(s2,B2);
      var z2=w2.add(goog.math.Long.fromBits(1,0));
      $$GHCziIOziHandleziInternals_zdwa3.C([f2,r2,s2,t2,u2,v2,z2,A2],function(x2){
       var y2=x2[0];
       $r([y2,$$GHCziTuple_Z0T]);
      },[]);
     },[p2,n2,f2]);
    }
   },[o2,n2,f2,j2,i2,g2,h2,l2]);
  },[e2,a2]);
 },[a2],"sat");
 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText_hPutChar2,Z1,c2,b2);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr3=$f(3,function(x3,y3,z3){
 $M(y3,function(A3){
  switch(A3.g){
  case 1:
   $r([z3,$$GHCziTuple_Z0T]);break;
  case 2:
   var B3=A3.v[0],C3=A3.v[1];
   $M(B3,function(D3){
    var E3=D3.v[0];
    $$GHCziIOziHandleziText_zdwa5.C([x3,E3,z3],function(F3){
     var G3=F3[0];
     $$GHCziIOziHandleziText_hPutStr3.J(x3,C3,G3);
    },[x3,C3]);
   },[z3,x3,C3]);break;
  }
 },[z3,x3]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutBuf3=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hGetLinezuzdszdwa=$f(24,function(w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,M5,N5,O5,P5,Q5,R5,S5,T5){
 var U5=$d(1,[R5],"w");
 var V5=$d(1,[$$GHCziTypes_False,U5],"lvl18");
 var W5=$f(4,function(X5,Y5,Z5,a6){
  var b6=Z5.equals(R5)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(b6.g){
  case 1:
   var c6=$hs_readWideCharOffAddrzh(X5,Z5,a6);
   var d6=c6[0],e6=c6[1];
   var h6=$hs_touchzh(Y5,d6);
   $M(e6,function(f6){
    switch(f6.toString()){
    case "\n":
     var i6=$d(1,[Z5],"sat");
     var j6=$d(1,[$$GHCziTypes_True,i6],"sat");
     $r([h6,j6]);break;
    default:
     var g6=Z5.add(goog.math.Long.fromBits(1,0));
     W5.J(X5,Y5,g6,h6);
    }
   },[Z5,X5,Y5,W5,h6]);break;
  case 2:
   $r([a6,V5]);break;
  }
 },[R5,V5],"$s$wa2");
 W5.C([M5,N5,Q5,T5],function(k6){
  var l6=k6[0],m6=k6[1];
  $M(m6,function(n6){
   var o6=n6.v[0],p6=n6.v[1];
   var q6=$f(3,function(r6,s6,t6){
    $M(o6,function(u6){
     switch(u6.g){
     case 1:
      var v6=$t(function(){
       var w6=t6.equals(R5)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(w6.g){
       case 1:
	$R(1,[M5,N5,O5,P5,t6,R5],"Buffer");break;
       case 2:
	$R(1,[M5,N5,O5,P5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
       }
      },[R5,M5,N5,t6,O5,P5],"buf1");
      var x6=$d(1,[w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5],"sat");
      $$GHCziIOziHandleziText$c.C([x6,v6,r6],function(y6){
       var z6=y6[0],A6=y6[1];
       $M(A6,function(B6){
	switch(B6.g){
	case 1:
	 var C6=$t(function(){
	  $M(v6,function(D6){
	   var E6=D6.v[0],F6=D6.v[1],G6=D6.v[2],H6=D6.v[3];
	   $R(1,[E6,F6,G6,H6,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	  },[]);
	 },[v6],"sat");
	 var R6=$hs_writeMutVarzh(E5,C6,z6);
	 var I6=$d(2,[s6,S5],"sat");
	 var J6=$t(function(){
	  $M(v6,function(K6){
	   var L6=K6.v[4],M6=K6.v[5];
	   var N6=L6.equals(M6)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(N6.g){
	   case 1:
	    $A($$GHCziIOziHandleziText$h);break;
	   case 2:
	    $R(1,[],"[]");break;
	   }
	  },[]);
	 },[v6],"sat");
	 var O6=$d(2,[J6,I6],"sat");
	 $$GHCziList_reverse1.C([O6,$$GHCziTypes_ZMZN],function(P6){
	  $$GHCziIOziHandleziText$j.C([P6],function(Q6){
	   switch(Q6.g){
	   case 1:
	    $$GHCziIOziHandleziInternals_ioezuEOF.J(R6);break;
	   case 2:
	    $r([R6,Q6]);break;
	   }
	  },[R6]);
	 },[R6]);break;
	case 2:
	 var S6=B6.v[0];
	 $M(S6,function(T6){
	  var U6=T6.v[0],V6=T6.v[1],W6=T6.v[2],X6=T6.v[3],Y6=T6.v[4],Z6=T6.v[5];
	  var a7=$d(2,[s6,S5],"sat");
	  $$GHCziIOziHandleziText_hGetLinezuzdszdwa.J(w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,U6,V6,W6,X6,Y6,Z6,a7,z6);
	 },[w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,z6,s6,S5]);break;
	}
       },[v6,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,z6,s6,S5]);
      },[v6,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,s6,S5]);break;
     case 2:
      var b7=$t(function(){
       $M(p6,function(c7){
	var d7=c7.v[0];
	var f7=d7.add(goog.math.Long.fromBits(1,0));
	var e7=f7.equals(R5)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(e7.g){
	case 1:
	 $R(1,[M5,N5,O5,P5,f7,R5],"Buffer");break;
	case 2:
	 $R(1,[M5,N5,O5,P5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	}
       },[R5,M5,N5,O5,P5]);
      },[R5,M5,N5,O5,P5,p6],"sat");
      var j7=$hs_writeMutVarzh(E5,b7,r6);
      var g7=$t(function(){
       var h7=$d(2,[s6,S5],"sat");
       $$GHCziList_reverse1.C([h7,$$GHCziTypes_ZMZN],function(i7){
	$$GHCziIOziHandleziText$i.J(i7);
       },[]);
      },[s6,S5],"sat");
      $r([j7,g7]);break;
     }
    },[R5,M5,N5,t6,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,r6,s6,S5,p6]);
   },[R5,M5,N5,o6,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,S5,p6],"$s$w$j");
   $M(J5,function(k7){
    switch(k7.g){
    case 1:
     $M(p6,function(l7){
      var m7=l7.v[0];
      var n7=Q5.equals(m7)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(n7.g){
      case 1:
       var o7=$f(3,function(p7,q7,r7){
	var s7=q7.lessThan(Q5)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(s7.g){
	case 1:
	 var t7=$hs_readWideCharOffAddrzh(M5,q7,r7);
	 var u7=t7[0],v7=t7[1];
	 var y7=q7.subtract(goog.math.Long.fromBits(1,0));
	 var w7=$d(1,[v7],"sat");
	 var x7=$d(2,[w7,p7],"sat");
	 o7.J(x7,y7,u7);break;
	case 2:
	 $r([r7,p7]);break;
	}
       },[M5,Q5],"$wa8");
       var D7=m7.subtract(goog.math.Long.fromBits(1,0));
       o7.C([$$GHCziTypes_ZMZN,D7,l6],function(z7){
	var A7=z7[0],B7=z7[1];
	var C7=$hs_touchzh(N5,A7);
	q6.J(C7,B7,m7);
       },[R5,M5,N5,o6,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,S5,p6,q6,m7]);break;
      case 2:
       q6.J(l6,$$GHCziTypes_ZMZN,m7);break;
      }
     },[R5,M5,N5,Q5,o6,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,S5,p6,q6,l6]);break;
    case 2:
     $M(p6,function(E7){
      var F7=E7.v[0];
      $$GHCziIOziHandleziText$g.C([M5,N5,Q5,F7,$$GHCziTypes_ZMZN,l6],function(G7){
       var H7=G7[0],I7=G7[1];
       $M(I7,function(J7){
	var K7=J7.v[0],L7=J7.v[1];
	$M(o6,function(M7){
	 switch(M7.g){
	 case 1:
	  var N7=$t(function(){
	   $M(L7,function(O7){
	    var P7=O7.v[0];
	    var Q7=P7.equals(R5)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Q7.g){
	    case 1:
	     $R(1,[M5,N5,O5,P5,P7,R5],"Buffer");break;
	    case 2:
	     $R(1,[M5,N5,O5,P5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	    }
	   },[R5,M5,N5,O5,P5]);
	  },[R5,M5,N5,O5,P5,L7],"buf1");
	  var R7=$d(1,[w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,$$GHCziIOziHandleziTypes_CRLF,K5,L5],"sat");
	  $$GHCziIOziHandleziText$c.C([R7,N7,H7],function(S7){
	   var T7=S7[0],U7=S7[1];
	   $M(U7,function(V7){
	    switch(V7.g){
	    case 1:
	     var W7=$t(function(){
	      $M(N7,function(X7){
	       var Y7=X7.v[0],Z7=X7.v[1],a8=X7.v[2],b8=X7.v[3];
	       $R(1,[Y7,Z7,a8,b8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	      },[]);
	     },[N7],"sat");
	     var l8=$hs_writeMutVarzh(E5,W7,T7);
	     var c8=$d(2,[K7,S5],"sat");
	     var d8=$t(function(){
	      $M(N7,function(e8){
	       var f8=e8.v[4],g8=e8.v[5];
	       var h8=f8.equals(g8)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(h8.g){
	       case 1:
		$A($$GHCziIOziHandleziText$h);break;
	       case 2:
		$R(1,[],"[]");break;
	       }
	      },[]);
	     },[N7],"sat");
	     var i8=$d(2,[d8,c8],"sat");
	     $$GHCziList_reverse1.C([i8,$$GHCziTypes_ZMZN],function(j8){
	      $$GHCziIOziHandleziText$j.C([j8],function(k8){
	       switch(k8.g){
	       case 1:
		$$GHCziIOziHandleziInternals_ioezuEOF.J(l8);break;
	       case 2:
		$r([l8,k8]);break;
	       }
	      },[l8]);
	     },[l8]);break;
	    case 2:
	     var m8=V7.v[0];
	     $M(m8,function(n8){
	      var o8=n8.v[0],p8=n8.v[1],q8=n8.v[2],r8=n8.v[3],s8=n8.v[4],t8=n8.v[5];
	      var u8=$d(2,[K7,S5],"sat");
	      $$GHCziIOziHandleziText_hGetLinezuzdszdwa.J(w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,$$GHCziIOziHandleziTypes_CRLF,K5,L5,o8,p8,q8,r8,s8,t8,u8,T7);
	     },[w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,K5,L5,S5,T7,K7]);break;
	    }
	   },[w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,K5,L5,S5,N7,T7,K7]);
	  },[w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,K5,L5,S5,N7,K7]);break;
	 case 2:
	  var v8=$t(function(){
	   var x8=F7.add(goog.math.Long.fromBits(1,0));
	   var w8=x8.equals(R5)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(w8.g){
	   case 1:
	    $R(1,[M5,N5,O5,P5,x8,R5],"Buffer");break;
	   case 2:
	    $R(1,[M5,N5,O5,P5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	   }
	  },[R5,M5,N5,O5,P5,F7],"sat");
	  var B8=$hs_writeMutVarzh(E5,v8,H7);
	  var y8=$t(function(){
	   var z8=$d(2,[K7,S5],"sat");
	   $$GHCziList_reverse1.C([z8,$$GHCziTypes_ZMZN],function(A8){
	    $$GHCziIOziHandleziText$i.J(A8);
	   },[]);
	  },[S5,K7],"sat");
	  $r([B8,y8]);break;
	 }
	},[R5,M5,N5,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,K5,L5,S5,F7,L7,H7,K7]);
       },[R5,M5,N5,o6,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,K5,L5,S5,F7,H7]);
      },[R5,M5,N5,o6,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,K5,L5,S5,F7]);
     },[R5,M5,N5,Q5,o6,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,K5,L5,S5,l6]);break;
    }
   },[R5,M5,N5,Q5,o6,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,S5,p6,q6,l6]);
  },[R5,M5,N5,Q5,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,S5,l6]);
 },[R5,M5,N5,Q5,O5,P5,w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,S5]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hGetLine3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hGetLine");
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hGetLine2=$f(2,function(C8,D8){
 $M(C8,function(E8){
  var F8=E8.v[0],G8=E8.v[1],H8=E8.v[2],I8=E8.v[3],J8=E8.v[4],K8=E8.v[5],L8=E8.v[6],M8=E8.v[7],N8=E8.v[8],O8=E8.v[9],P8=E8.v[10],Q8=E8.v[11],R8=E8.v[12],S8=E8.v[13],T8=E8.v[14],U8=E8.v[15];
  var V8=$hs_readMutVarzh(N8,D8);
  var W8=V8[0],X8=V8[1];
  $M(X8,function(Y8){
   var Z8=Y8.v[0],a9=Y8.v[1],b9=Y8.v[2],c9=Y8.v[3],d9=Y8.v[4],e9=Y8.v[5];
   $$GHCziIOziHandleziText_hGetLinezuzdszdwa.J(F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,U8,Z8,a9,b9,c9,d9,e9,$$GHCziTypes_ZMZN,W8);
  },[N8,F8,G8,H8,I8,J8,K8,L8,M8,O8,P8,Q8,R8,S8,T8,U8,W8]);
 },[D8]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_zdwa6=$f(9,function(sd,td,ud,vd,wd,xd,yd,zd,Ad){
 var Bd=$d(1,[wd,xd],"raw");
 var Cd=$F(4,function(Dd,Ed,Fd,Gd){
  var oh=Dd.add(goog.math.Long.fromBits(1,0));
  var Hd=oh.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Hd.g){
  case 1:
   $M(Ed,function(Id){
    var Jd=Id.v[0];
    $M(Jd,function(Kd){
     switch(Kd.toString()){
     case "\n":
      var Pd=$f(2,function(Qd,Rd){
       $M(td,function(Sd){
	switch(Sd.g){
	case 1:
	 var Td=$f(3,function(Ud,Vd,Wd){
	  $M(Vd,function(Xd){
	   switch(Xd.g){
	   case 1:
	    var Yd=$f(1,function(Zd){
	     $M(Zd,function(ae){
	      var be=ae.v[8],ce=ae.v[9];
	      var de=$f(1,function(ee){
	       $$GHCziIOziHandleziInternals_zdwa3.C([ae,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ud,ee],function(fe){
		var ge=fe[0];
		var he=$hs_readMutVarzh(be,ge);
		var ie=he[0],je=he[1];
		$M(je,function(ke){
		 var le=ke.v[3];
		 var me=yd.equals(le)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(me.g){
		 case 1:
		  $r([ie,$$GHCziTuple_Z0T]);break;
		 case 2:
		  var ne=$hs_readMutVarzh(ce,ie);
		  var oe=ne[0],pe=ne[1];
		  var qe=$d(2,[Bd,pe],"sat");
		  var re=$hs_writeMutVarzh(ce,qe,oe);
		  $r([re,$$GHCziTuple_Z0T]);break;
		 }
		},[Bd,yd,ie,ce]);
	       },[Bd,yd,be,ce]);
	      },[wd,xd,Bd,yd,ae,Ud,be,ce],"sat");
	      $A(de);
	     },[wd,xd,Bd,yd,Ud]);
	    },[wd,xd,Bd,yd,Ud],"sat");
	    $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Yd,Wd);break;
	   case 2:
	    var se=Xd.v[0],te=Xd.v[1];
	    var Ue=Ud.add(goog.math.Long.fromBits(1,0));
	    var ue=Ue.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(ue.g){
	    case 1:
	     $M(se,function(ve){
	      var we=ve.v[0];
	      $M(we,function(xe){
	       switch(xe.toString()){
	       case "\n":
		$M(vd,function(Be){
		 switch(Be.g){
		 case 1:
		  var Ee=$hs_writeWideCharOffAddrzh(wd,Ud,"\n",Wd);
		  var De=$hs_touchzh(xd,Ee);
		  var Ce=Ud.add(goog.math.Long.fromBits(1,0));
		  Td.J(Ce,te,De);break;
		 case 2:
		  var Ke=$hs_writeWideCharOffAddrzh(wd,Ud,"\r",Wd);
		  var Je=$hs_touchzh(xd,Ke);
		  var He=Ud.add(goog.math.Long.fromBits(1,0));
		  var Ie=$hs_writeWideCharOffAddrzh(wd,He,"\n",Je);
		  var Ge=$hs_touchzh(xd,Ie);
		  var Fe=He.add(goog.math.Long.fromBits(1,0));
		  Td.J(Fe,te,Ge);break;
		 }
		},[wd,xd,Bd,yd,sd,Ud,Wd,Td,te,vd]);break;
	       default:
		var Ae=$hs_writeWideCharOffAddrzh(wd,Ud,xe,Wd);
		var ze=$hs_touchzh(xd,Ae);
		var ye=Ud.add(goog.math.Long.fromBits(1,0));
		Td.J(ye,te,ze);
	       }
	      },[wd,xd,Bd,yd,sd,Ud,Wd,Td,te,vd]);
	     },[wd,xd,Bd,yd,sd,Ud,Wd,Td,te,vd]);break;
	    case 2:
	     var Le=$f(1,function(Me){
	      $M(Me,function(Ne){
	       var Oe=$f(1,function(Pe){
		$$GHCziIOziHandleziInternals_zdwa3.C([Ne,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ud,Pe],function(Qe){
		 var Re=Qe[0];
		 $r([Re,$$GHCziTuple_Z0T]);
		},[]);
	       },[wd,xd,yd,Ud,Ne],"sat");
	       $A(Oe);
	      },[wd,xd,yd,Ud]);
	     },[wd,xd,yd,Ud],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Le,Wd],function(Se){
	      var Te=Se[0];
	      Td.J(goog.math.Long.fromBits(0,0),Xd,Te);
	     },[wd,xd,Bd,yd,sd,Td,vd,Xd]);break;
	    }break;
	   }
	  },[wd,xd,Bd,yd,sd,Ud,Wd,Td,vd]);
	 },[wd,xd,Bd,yd,sd,vd],"$s$wa4");
	 Td.J(Rd,Fd,Qd);break;
	case 2:
	 var Ve=$f(1,function(We){
	  $M(We,function(Xe){
	   var Ye=Xe.v[1],Ze=Xe.v[3],af=Xe.v[5];
	   var bf=$f(1,function(cf){
	    $$GHCziIOziHandleziInternals_zdwa3.C([Xe,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Rd,cf],function(df){
	     var ef=df[0];
	     var ff=$hs_readMutVarzh(af,ef);
	     var gf=ff[0],hf=ff[1];
	     $M(hf,function(jf){
	      var kf=jf.v[4],lf=jf.v[5];
	      var mf=kf.equals(lf)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(mf.g){
	      case 1:
	       $$GHCziIOziBufferedIO_flushWriteBuffer.C([Ye,Ze,jf,gf],function(nf){
		var of=nf[0],pf=nf[1];
		var qf=$hs_writeMutVarzh(af,pf,of);
		$r([qf,$$GHCziTuple_Z0T]);
	       },[af]);break;
	      case 2:
	       $r([gf,$$GHCziTuple_Z0T]);break;
	      }
	     },[af,Ye,Ze,gf]);
	    },[af,Ye,Ze]);
	   },[wd,xd,yd,Rd,Xe,af,Ye,Ze],"sat");
	   $A(bf);
	  },[wd,xd,yd,Rd]);
	 },[wd,xd,yd,Rd],"sat");
	 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Ve,Qd],function(rf){
	  var sf=rf[0];
	  var tf=$f(3,function(uf,vf,wf){
	   $M(vf,function(xf){
	    switch(xf.g){
	    case 1:
	     var yf=$f(1,function(zf){
	      $M(zf,function(Af){
	       var Bf=Af.v[8],Cf=Af.v[9];
	       var Df=$f(1,function(Ef){
		$$GHCziIOziHandleziInternals_zdwa3.C([Af,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),uf,Ef],function(Ff){
		 var Gf=Ff[0];
		 var Hf=$hs_readMutVarzh(Bf,Gf);
		 var If=Hf[0],Jf=Hf[1];
		 $M(Jf,function(Kf){
		  var Lf=Kf.v[3];
		  var Mf=yd.equals(Lf)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Mf.g){
		  case 1:
		   $r([If,$$GHCziTuple_Z0T]);break;
		  case 2:
		   var Nf=$hs_readMutVarzh(Cf,If);
		   var Of=Nf[0],Pf=Nf[1];
		   var Qf=$d(2,[Bd,Pf],"sat");
		   var Rf=$hs_writeMutVarzh(Cf,Qf,Of);
		   $r([Rf,$$GHCziTuple_Z0T]);break;
		  }
		 },[Bd,yd,If,Cf]);
		},[Bd,yd,Bf,Cf]);
	       },[wd,xd,Bd,yd,Af,uf,Bf,Cf],"sat");
	       $A(Df);
	      },[wd,xd,Bd,yd,uf]);
	     },[wd,xd,Bd,yd,uf],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,yf,wf);break;
	    case 2:
	     var Sf=xf.v[0],Tf=xf.v[1];
	     var Ug=uf.add(goog.math.Long.fromBits(1,0));
	     var Uf=Ug.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Uf.g){
	     case 1:
	      $M(Sf,function(Vf){
	       var Wf=Vf.v[0];
	       $M(Wf,function(Xf){
		switch(Xf.toString()){
		case "\n":
		 var bg=$f(2,function(cg,dg){
		  var eg=$f(1,function(fg){
		   $M(fg,function(gg){
		    var hg=gg.v[1],ig=gg.v[3],jg=gg.v[5];
		    var kg=$f(1,function(lg){
		     $$GHCziIOziHandleziInternals_zdwa3.C([gg,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),dg,lg],function(mg){
		      var ng=mg[0];
		      var og=$hs_readMutVarzh(jg,ng);
		      var pg=og[0],qg=og[1];
		      $M(qg,function(rg){
		       var sg=rg.v[4],tg=rg.v[5];
		       var ug=sg.equals(tg)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(ug.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([hg,ig,rg,pg],function(vg){
			 var wg=vg[0],xg=vg[1];
			 var yg=$hs_writeMutVarzh(jg,xg,wg);
			 $r([yg,$$GHCziTuple_Z0T]);
			},[jg]);break;
		       case 2:
			$r([pg,$$GHCziTuple_Z0T]);break;
		       }
		      },[jg,hg,ig,pg]);
		     },[jg,hg,ig]);
		    },[wd,xd,yd,gg,dg,jg,hg,ig],"sat");
		    $A(kg);
		   },[wd,xd,yd,dg]);
		  },[wd,xd,yd,dg],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,eg,cg],function(zg){
		   var Ag=zg[0];
		   tf.J(goog.math.Long.fromBits(0,0),Tf,Ag);
		  },[wd,xd,Bd,yd,sd,vd,tf,Tf]);
		 },[wd,xd,yd,sd,tf,Tf],"$w$j1");
		 $M(vd,function(Bg){
		  switch(Bg.g){
		  case 1:
		   var Eg=$hs_writeWideCharOffAddrzh(wd,uf,"\n",wf);
		   var Cg=$hs_touchzh(xd,Eg);
		   var Dg=uf.add(goog.math.Long.fromBits(1,0));
		   bg.J(Cg,Dg);break;
		  case 2:
		   var Kg=$hs_writeWideCharOffAddrzh(wd,uf,"\r",wf);
		   var Jg=$hs_touchzh(xd,Kg);
		   var Hg=uf.add(goog.math.Long.fromBits(1,0));
		   var Ig=$hs_writeWideCharOffAddrzh(wd,Hg,"\n",Jg);
		   var Fg=$hs_touchzh(xd,Ig);
		   var Gg=Hg.add(goog.math.Long.fromBits(1,0));
		   bg.J(Fg,Gg);break;
		  }
		 },[wd,xd,Bd,yd,sd,vd,uf,wf,tf,Tf,bg]);break;
		default:
		 var ag=$hs_writeWideCharOffAddrzh(wd,uf,Xf,wf);
		 var Zf=$hs_touchzh(xd,ag);
		 var Yf=uf.add(goog.math.Long.fromBits(1,0));
		 tf.J(Yf,Tf,Zf);
		}
	       },[wd,xd,Bd,yd,sd,vd,uf,wf,tf,Tf]);
	      },[wd,xd,Bd,yd,sd,vd,uf,wf,tf,Tf]);break;
	     case 2:
	      var Lg=$f(1,function(Mg){
	       $M(Mg,function(Ng){
		var Og=$f(1,function(Pg){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Ng,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),uf,Pg],function(Qg){
		  var Rg=Qg[0];
		  $r([Rg,$$GHCziTuple_Z0T]);
		 },[]);
		},[wd,xd,yd,uf,Ng],"sat");
		$A(Og);
	       },[wd,xd,yd,uf]);
	      },[wd,xd,yd,uf],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Lg,wf],function(Sg){
	       var Tg=Sg[0];
	       tf.J(goog.math.Long.fromBits(0,0),xf,Tg);
	      },[wd,xd,Bd,yd,sd,vd,tf,xf]);break;
	     }break;
	    }
	   },[wd,xd,Bd,yd,sd,vd,uf,wf,tf]);
	  },[wd,xd,Bd,yd,sd,vd],"$s$wa4");
	  tf.J(goog.math.Long.fromBits(0,0),Fd,sf);
	 },[wd,xd,Bd,yd,Fd,sd,vd]);break;
	}
       },[wd,xd,Bd,yd,Fd,sd,vd,Rd,Qd]);
      },[wd,xd,Bd,yd,Fd,td,sd,vd],"$w$j");
      $M(vd,function(Vg){
       switch(Vg.g){
       case 1:
	var Yg=$hs_writeWideCharOffAddrzh(wd,Dd,"\n",Gd);
	var Wg=$hs_touchzh(xd,Yg);
	var Xg=Dd.add(goog.math.Long.fromBits(1,0));
	Pd.J(Wg,Xg);break;
       case 2:
	var eh=$hs_writeWideCharOffAddrzh(wd,Dd,"\r",Gd);
	var dh=$hs_touchzh(xd,eh);
	var bh=Dd.add(goog.math.Long.fromBits(1,0));
	var ch=$hs_writeWideCharOffAddrzh(wd,bh,"\n",dh);
	var Zg=$hs_touchzh(xd,ch);
	var ah=bh.add(goog.math.Long.fromBits(1,0));
	Pd.J(Zg,ah);break;
       }
      },[wd,xd,Bd,Dd,yd,Gd,Fd,td,sd,vd,Pd]);break;
     default:
      var Od=$hs_writeWideCharOffAddrzh(wd,Dd,Kd,Gd);
      var Nd=$hs_touchzh(xd,Od);
      var Md=Dd.add(goog.math.Long.fromBits(1,0));
      Ld.J(Md,Fd,Nd);
     }
    },[wd,xd,Bd,Dd,yd,Gd,Ld,Fd,td,sd,vd]);
   },[wd,xd,Bd,Dd,yd,Gd,Ld,Fd,td,sd,vd]);break;
  case 2:
   var fh=$f(1,function(gh){
    $M(gh,function(hh){
     var ih=$f(1,function(jh){
      $$GHCziIOziHandleziInternals_zdwa3.C([hh,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Dd,jh],function(kh){
       var lh=kh[0];
       $r([lh,$$GHCziTuple_Z0T]);
      },[]);
     },[wd,xd,Dd,yd,hh],"sat");
     $A(ih);
    },[wd,xd,Dd,yd]);
   },[wd,xd,Dd,yd],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,fh,Gd],function(mh){
    var nh=mh[0];
    Cd.J(goog.math.Long.fromBits(0,0),Ed,Fd,nh);
   },[wd,xd,Bd,yd,Ed,Fd,td,sd,vd,Cd]);break;
  }
 },"$s$wa2"),Ld=$f(3,function(ph,qh,rh){
  $M(qh,function(sh){
   switch(sh.g){
   case 1:
    var th=$f(1,function(uh){
     $M(uh,function(vh){
      var wh=vh.v[8],xh=vh.v[9];
      var yh=$f(1,function(zh){
       $$GHCziIOziHandleziInternals_zdwa3.C([vh,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ph,zh],function(Ah){
	var Bh=Ah[0];
	var Ch=$hs_readMutVarzh(wh,Bh);
	var Dh=Ch[0],Eh=Ch[1];
	$M(Eh,function(Fh){
	 var Gh=Fh.v[3];
	 var Hh=yd.equals(Gh)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Hh.g){
	 case 1:
	  $r([Dh,$$GHCziTuple_Z0T]);break;
	 case 2:
	  var Ih=$hs_readMutVarzh(xh,Dh);
	  var Jh=Ih[0],Kh=Ih[1];
	  var Lh=$d(2,[Bd,Kh],"sat");
	  var Mh=$hs_writeMutVarzh(xh,Lh,Jh);
	  $r([Mh,$$GHCziTuple_Z0T]);break;
	 }
	},[Bd,yd,Dh,xh]);
       },[Bd,yd,wh,xh]);
      },[wd,xd,Bd,yd,vh,ph,wh,xh],"sat");
      $A(yh);
     },[wd,xd,Bd,yd,ph]);
    },[wd,xd,Bd,yd,ph],"sat");
    $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,th,rh);break;
   case 2:
    var Nh=sh.v[0],Oh=sh.v[1];
    var ul=ph.add(goog.math.Long.fromBits(1,0));
    var Ph=ul.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Ph.g){
    case 1:
     $M(Nh,function(Qh){
      var Rh=Qh.v[0];
      $M(Rh,function(Sh){
       switch(Sh.toString()){
       case "\n":
	var Wh=$f(2,function(Xh,Yh){
	 $M(td,function(Zh){
	  switch(Zh.g){
	  case 1:
	   var ai=$f(3,function(bi,ci,di){
	    $M(ci,function(ei){
	     switch(ei.g){
	     case 1:
	      var fi=$f(1,function(gi){
	       $M(gi,function(hi){
		var ii=hi.v[8],ji=hi.v[9];
		var ki=$f(1,function(li){
		 $$GHCziIOziHandleziInternals_zdwa3.C([hi,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),bi,li],function(mi){
		  var ni=mi[0];
		  var oi=$hs_readMutVarzh(ii,ni);
		  var pi=oi[0],qi=oi[1];
		  $M(qi,function(ri){
		   var si=ri.v[3];
		   var ti=yd.equals(si)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(ti.g){
		   case 1:
		    $r([pi,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var ui=$hs_readMutVarzh(ji,pi);
		    var vi=ui[0],wi=ui[1];
		    var xi=$d(2,[Bd,wi],"sat");
		    var yi=$hs_writeMutVarzh(ji,xi,vi);
		    $r([yi,$$GHCziTuple_Z0T]);break;
		   }
		  },[Bd,yd,pi,ji]);
		 },[Bd,yd,ii,ji]);
		},[wd,xd,Bd,yd,hi,bi,ii,ji],"sat");
		$A(ki);
	       },[wd,xd,Bd,yd,bi]);
	      },[wd,xd,Bd,yd,bi],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,fi,di);break;
	     case 2:
	      var zi=ei.v[0],Ai=ei.v[1];
	      var bj=bi.add(goog.math.Long.fromBits(1,0));
	      var Bi=bj.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Bi.g){
	      case 1:
	       $M(zi,function(Ci){
		var Di=Ci.v[0];
		$M(Di,function(Ei){
		 switch(Ei.toString()){
		 case "\n":
		  $M(vd,function(Ii){
		   switch(Ii.g){
		   case 1:
		    var Li=$hs_writeWideCharOffAddrzh(wd,bi,"\n",di);
		    var Ki=$hs_touchzh(xd,Li);
		    var Ji=bi.add(goog.math.Long.fromBits(1,0));
		    ai.J(Ji,Ai,Ki);break;
		   case 2:
		    var Ri=$hs_writeWideCharOffAddrzh(wd,bi,"\r",di);
		    var Qi=$hs_touchzh(xd,Ri);
		    var Oi=bi.add(goog.math.Long.fromBits(1,0));
		    var Pi=$hs_writeWideCharOffAddrzh(wd,Oi,"\n",Qi);
		    var Ni=$hs_touchzh(xd,Pi);
		    var Mi=Oi.add(goog.math.Long.fromBits(1,0));
		    ai.J(Mi,Ai,Ni);break;
		   }
		  },[wd,xd,Bd,yd,sd,vd,bi,di,ai,Ai]);break;
		 default:
		  var Hi=$hs_writeWideCharOffAddrzh(wd,bi,Ei,di);
		  var Gi=$hs_touchzh(xd,Hi);
		  var Fi=bi.add(goog.math.Long.fromBits(1,0));
		  ai.J(Fi,Ai,Gi);
		 }
		},[wd,xd,Bd,yd,sd,vd,bi,di,ai,Ai]);
	       },[wd,xd,Bd,yd,sd,vd,bi,di,ai,Ai]);break;
	      case 2:
	       var Si=$f(1,function(Ti){
		$M(Ti,function(Ui){
		 var Vi=$f(1,function(Wi){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Ui,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),bi,Wi],function(Xi){
		   var Yi=Xi[0];
		   $r([Yi,$$GHCziTuple_Z0T]);
		  },[]);
		 },[wd,xd,yd,bi,Ui],"sat");
		 $A(Vi);
		},[wd,xd,yd,bi]);
	       },[wd,xd,yd,bi],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Si,di],function(Zi){
		var aj=Zi[0];
		ai.J(goog.math.Long.fromBits(0,0),ei,aj);
	       },[wd,xd,Bd,yd,sd,vd,ai,ei]);break;
	      }break;
	     }
	    },[wd,xd,Bd,yd,sd,vd,bi,di,ai]);
	   },[wd,xd,Bd,yd,sd,vd],"$s$wa4");
	   ai.J(Yh,Oh,Xh);break;
	  case 2:
	   var cj=$f(1,function(dj){
	    $M(dj,function(ej){
	     var fj=ej.v[1],gj=ej.v[3],hj=ej.v[5];
	     var ij=$f(1,function(jj){
	      $$GHCziIOziHandleziInternals_zdwa3.C([ej,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Yh,jj],function(kj){
	       var lj=kj[0];
	       var mj=$hs_readMutVarzh(hj,lj);
	       var nj=mj[0],oj=mj[1];
	       $M(oj,function(pj){
		var qj=pj.v[4],rj=pj.v[5];
		var sj=qj.equals(rj)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(sj.g){
		case 1:
		 $$GHCziIOziBufferedIO_flushWriteBuffer.C([fj,gj,pj,nj],function(tj){
		  var uj=tj[0],vj=tj[1];
		  var wj=$hs_writeMutVarzh(hj,vj,uj);
		  $r([wj,$$GHCziTuple_Z0T]);
		 },[hj]);break;
		case 2:
		 $r([nj,$$GHCziTuple_Z0T]);break;
		}
	       },[hj,fj,gj,nj]);
	      },[hj,fj,gj]);
	     },[wd,xd,yd,Yh,ej,hj,fj,gj],"sat");
	     $A(ij);
	    },[wd,xd,yd,Yh]);
	   },[wd,xd,yd,Yh],"sat");
	   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,cj,Xh],function(xj){
	    var yj=xj[0];
	    var zj=$f(3,function(Aj,Bj,Cj){
	     $M(Bj,function(Dj){
	      switch(Dj.g){
	      case 1:
	       var Ej=$f(1,function(Fj){
		$M(Fj,function(Gj){
		 var Hj=Gj.v[8],Ij=Gj.v[9];
		 var Jj=$f(1,function(Kj){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Gj,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Aj,Kj],function(Lj){
		   var Mj=Lj[0];
		   var Nj=$hs_readMutVarzh(Hj,Mj);
		   var Oj=Nj[0],Pj=Nj[1];
		   $M(Pj,function(Qj){
		    var Rj=Qj.v[3];
		    var Sj=yd.equals(Rj)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Sj.g){
		    case 1:
		     $r([Oj,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var Tj=$hs_readMutVarzh(Ij,Oj);
		     var Uj=Tj[0],Vj=Tj[1];
		     var Wj=$d(2,[Bd,Vj],"sat");
		     var Xj=$hs_writeMutVarzh(Ij,Wj,Uj);
		     $r([Xj,$$GHCziTuple_Z0T]);break;
		    }
		   },[Bd,yd,Oj,Ij]);
		  },[Bd,yd,Hj,Ij]);
		 },[wd,xd,Bd,yd,Gj,Aj,Hj,Ij],"sat");
		 $A(Jj);
		},[wd,xd,Bd,yd,Aj]);
	       },[wd,xd,Bd,yd,Aj],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Ej,Cj);break;
	      case 2:
	       var Yj=Dj.v[0],Zj=Dj.v[1];
	       var al=Aj.add(goog.math.Long.fromBits(1,0));
	       var ak=al.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(ak.g){
	       case 1:
		$M(Yj,function(bk){
		 var ck=bk.v[0];
		 $M(ck,function(dk){
		  switch(dk.toString()){
		  case "\n":
		   var hk=$f(2,function(ik,jk){
		    var kk=$f(1,function(lk){
		     $M(lk,function(mk){
		      var nk=mk.v[1],ok=mk.v[3],pk=mk.v[5];
		      var qk=$f(1,function(rk){
		       $$GHCziIOziHandleziInternals_zdwa3.C([mk,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),jk,rk],function(sk){
			var tk=sk[0];
			var uk=$hs_readMutVarzh(pk,tk);
			var vk=uk[0],wk=uk[1];
			$M(wk,function(xk){
			 var yk=xk.v[4],zk=xk.v[5];
			 var Ak=yk.equals(zk)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Ak.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([nk,ok,xk,vk],function(Bk){
			   var Ck=Bk[0],Dk=Bk[1];
			   var Ek=$hs_writeMutVarzh(pk,Dk,Ck);
			   $r([Ek,$$GHCziTuple_Z0T]);
			  },[pk]);break;
			 case 2:
			  $r([vk,$$GHCziTuple_Z0T]);break;
			 }
			},[pk,nk,ok,vk]);
		       },[pk,nk,ok]);
		      },[wd,xd,yd,mk,jk,pk,nk,ok],"sat");
		      $A(qk);
		     },[wd,xd,yd,jk]);
		    },[wd,xd,yd,jk],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,kk,ik],function(Fk){
		     var Gk=Fk[0];
		     zj.J(goog.math.Long.fromBits(0,0),Zj,Gk);
		    },[wd,xd,Bd,yd,sd,vd,zj,Zj]);
		   },[wd,xd,yd,sd,zj,Zj],"$w$j1");
		   $M(vd,function(Hk){
		    switch(Hk.g){
		    case 1:
		     var Kk=$hs_writeWideCharOffAddrzh(wd,Aj,"\n",Cj);
		     var Ik=$hs_touchzh(xd,Kk);
		     var Jk=Aj.add(goog.math.Long.fromBits(1,0));
		     hk.J(Ik,Jk);break;
		    case 2:
		     var Qk=$hs_writeWideCharOffAddrzh(wd,Aj,"\r",Cj);
		     var Pk=$hs_touchzh(xd,Qk);
		     var Nk=Aj.add(goog.math.Long.fromBits(1,0));
		     var Ok=$hs_writeWideCharOffAddrzh(wd,Nk,"\n",Pk);
		     var Lk=$hs_touchzh(xd,Ok);
		     var Mk=Nk.add(goog.math.Long.fromBits(1,0));
		     hk.J(Lk,Mk);break;
		    }
		   },[wd,xd,Bd,yd,sd,vd,Aj,Cj,zj,Zj,hk]);break;
		  default:
		   var gk=$hs_writeWideCharOffAddrzh(wd,Aj,dk,Cj);
		   var fk=$hs_touchzh(xd,gk);
		   var ek=Aj.add(goog.math.Long.fromBits(1,0));
		   zj.J(ek,Zj,fk);
		  }
		 },[wd,xd,Bd,yd,sd,vd,Aj,Cj,zj,Zj]);
		},[wd,xd,Bd,yd,sd,vd,Aj,Cj,zj,Zj]);break;
	       case 2:
		var Rk=$f(1,function(Sk){
		 $M(Sk,function(Tk){
		  var Uk=$f(1,function(Vk){
		   $$GHCziIOziHandleziInternals_zdwa3.C([Tk,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Aj,Vk],function(Wk){
		    var Xk=Wk[0];
		    $r([Xk,$$GHCziTuple_Z0T]);
		   },[]);
		  },[wd,xd,yd,Aj,Tk],"sat");
		  $A(Uk);
		 },[wd,xd,yd,Aj]);
		},[wd,xd,yd,Aj],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Rk,Cj],function(Yk){
		 var Zk=Yk[0];
		 zj.J(goog.math.Long.fromBits(0,0),Dj,Zk);
		},[wd,xd,Bd,yd,sd,vd,zj,Dj]);break;
	       }break;
	      }
	     },[wd,xd,Bd,yd,sd,vd,Aj,Cj,zj]);
	    },[wd,xd,Bd,yd,sd,vd],"$s$wa4");
	    zj.J(goog.math.Long.fromBits(0,0),Oh,yj);
	   },[wd,xd,Bd,yd,sd,vd,Oh]);break;
	  }
	 },[wd,xd,Bd,yd,sd,vd,Oh,Yh,Xh]);
	},[wd,xd,Bd,yd,td,sd,vd,Oh],"$w$j");
	$M(vd,function(bl){
	 switch(bl.g){
	 case 1:
	  var el=$hs_writeWideCharOffAddrzh(wd,ph,"\n",rh);
	  var cl=$hs_touchzh(xd,el);
	  var dl=ph.add(goog.math.Long.fromBits(1,0));
	  Wh.J(cl,dl);break;
	 case 2:
	  var kl=$hs_writeWideCharOffAddrzh(wd,ph,"\r",rh);
	  var jl=$hs_touchzh(xd,kl);
	  var hl=ph.add(goog.math.Long.fromBits(1,0));
	  var il=$hs_writeWideCharOffAddrzh(wd,hl,"\n",jl);
	  var fl=$hs_touchzh(xd,il);
	  var gl=hl.add(goog.math.Long.fromBits(1,0));
	  Wh.J(fl,gl);break;
	 }
	},[wd,xd,Bd,yd,td,sd,vd,ph,rh,Oh,Wh]);break;
       default:
	var Vh=$hs_writeWideCharOffAddrzh(wd,ph,Sh,rh);
	var Uh=$hs_touchzh(xd,Vh);
	var Th=ph.add(goog.math.Long.fromBits(1,0));
	Ld.J(Th,Oh,Uh);
       }
      },[wd,xd,Bd,yd,Ld,td,sd,vd,ph,rh,Oh]);
     },[wd,xd,Bd,yd,Ld,td,sd,vd,ph,rh,Oh]);break;
    case 2:
     var ll=$f(1,function(ml){
      $M(ml,function(nl){
       var ol=$f(1,function(pl){
	$$GHCziIOziHandleziInternals_zdwa3.C([nl,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ph,pl],function(ql){
	 var rl=ql[0];
	 $r([rl,$$GHCziTuple_Z0T]);
	},[]);
       },[wd,xd,yd,ph,nl],"sat");
       $A(ol);
      },[wd,xd,yd,ph]);
     },[wd,xd,yd,ph],"sat");
     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,ll,rh],function(sl){
      var tl=sl[0];
      Cd.J(goog.math.Long.fromBits(0,0),Nh,Oh,tl);
     },[wd,xd,Bd,yd,td,sd,vd,Cd,Nh,Oh]);break;
    }break;
   }
  },[wd,xd,Bd,yd,Ld,td,sd,vd,Cd,ph,rh]);
 },[wd,xd,Bd,yd,td,sd,vd,Cd],"$s$wa3");
 $S(Cd,[wd,xd,Bd,yd,Ld,td,sd,vd]);
 var vl=$F(5,function(wl,xl,yl,zl,Al){
  var np=wl.add(goog.math.Long.fromBits(1,0));
  var Bl=np.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Bl.g){
  case 1:
   $M(xl,function(Cl){
    var Dl=Cl.v[0];
    $M(Dl,function(El){
     switch(El.toString()){
     case "\n":
      var Jl=$f(2,function(Kl,Ll){
       $M(td,function(Ml){
	switch(Ml.g){
	case 1:
	 var Nl=$f(4,function(Ol,Pl,Ql,Rl){
	  $M(Pl,function(Sl){
	   switch(Sl.g){
	   case 1:
	    $M(Ql,function(Tl){
	     switch(Tl.g){
	     case 1:
	      var Ul=$f(1,function(Vl){
	       $M(Vl,function(Wl){
		var Xl=Wl.v[8],Yl=Wl.v[9];
		var Zl=$f(1,function(am){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Wl,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ol,am],function(bm){
		  var cm=bm[0];
		  var dm=$hs_readMutVarzh(Xl,cm);
		  var em=dm[0],fm=dm[1];
		  $M(fm,function(gm){
		   var hm=gm.v[3];
		   var im=yd.equals(hm)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(im.g){
		   case 1:
		    $r([em,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var jm=$hs_readMutVarzh(Yl,em);
		    var km=jm[0],lm=jm[1];
		    var mm=$d(2,[Bd,lm],"sat");
		    var nm=$hs_writeMutVarzh(Yl,mm,km);
		    $r([nm,$$GHCziTuple_Z0T]);break;
		   }
		  },[Bd,yd,em,Yl]);
		 },[Bd,yd,Xl,Yl]);
		},[wd,xd,Bd,yd,Wl,Ol,Xl,Yl],"sat");
		$A(Zl);
	       },[wd,xd,Bd,yd,Ol]);
	      },[wd,xd,Bd,yd,Ol],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Ul,Rl);break;
	     case 2:
	      Nl.J(Ol,Tl,$$GHCziTypes_ZMZN,Rl);break;
	     }
	    },[wd,xd,Bd,yd,sd,vd,Ol,Rl,Nl]);break;
	   case 2:
	    var om=Sl.v[0],pm=Sl.v[1];
	    var Qm=Ol.add(goog.math.Long.fromBits(1,0));
	    var qm=Qm.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(qm.g){
	    case 1:
	     $M(om,function(rm){
	      var sm=rm.v[0];
	      $M(sm,function(tm){
	       switch(tm.toString()){
	       case "\n":
		$M(vd,function(xm){
		 switch(xm.g){
		 case 1:
		  var Am=$hs_writeWideCharOffAddrzh(wd,Ol,"\n",Rl);
		  var zm=$hs_touchzh(xd,Am);
		  var ym=Ol.add(goog.math.Long.fromBits(1,0));
		  Nl.J(ym,pm,Ql,zm);break;
		 case 2:
		  var Gm=$hs_writeWideCharOffAddrzh(wd,Ol,"\r",Rl);
		  var Fm=$hs_touchzh(xd,Gm);
		  var Dm=Ol.add(goog.math.Long.fromBits(1,0));
		  var Em=$hs_writeWideCharOffAddrzh(wd,Dm,"\n",Fm);
		  var Cm=$hs_touchzh(xd,Em);
		  var Bm=Dm.add(goog.math.Long.fromBits(1,0));
		  Nl.J(Bm,pm,Ql,Cm);break;
		 }
		},[wd,xd,Bd,yd,sd,vd,Ql,Ol,Rl,Nl,pm]);break;
	       default:
		var wm=$hs_writeWideCharOffAddrzh(wd,Ol,tm,Rl);
		var vm=$hs_touchzh(xd,wm);
		var um=Ol.add(goog.math.Long.fromBits(1,0));
		Nl.J(um,pm,Ql,vm);
	       }
	      },[wd,xd,Bd,yd,sd,vd,Ql,Ol,Rl,Nl,pm]);
	     },[wd,xd,Bd,yd,sd,vd,Ql,Ol,Rl,Nl,pm]);break;
	    case 2:
	     var Hm=$f(1,function(Im){
	      $M(Im,function(Jm){
	       var Km=$f(1,function(Lm){
		$$GHCziIOziHandleziInternals_zdwa3.C([Jm,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ol,Lm],function(Mm){
		 var Nm=Mm[0];
		 $r([Nm,$$GHCziTuple_Z0T]);
		},[]);
	       },[wd,xd,yd,Ol,Jm],"sat");
	       $A(Km);
	      },[wd,xd,yd,Ol]);
	     },[wd,xd,yd,Ol],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Hm,Rl],function(Om){
	      var Pm=Om[0];
	      Nl.J(goog.math.Long.fromBits(0,0),Sl,Ql,Pm);
	     },[wd,xd,Bd,yd,sd,vd,Ql,Nl,Sl]);break;
	    }break;
	   }
	  },[wd,xd,Bd,yd,sd,vd,Ql,Ol,Rl,Nl]);
	 },[wd,xd,Bd,yd,sd,vd],"$wa9");
	 Nl.J(Ll,yl,zl,Kl);break;
	case 2:
	 var Rm=$f(1,function(Sm){
	  $M(Sm,function(Tm){
	   var Um=Tm.v[1],Vm=Tm.v[3],Wm=Tm.v[5];
	   var Xm=$f(1,function(Ym){
	    $$GHCziIOziHandleziInternals_zdwa3.C([Tm,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ll,Ym],function(Zm){
	     var an=Zm[0];
	     var bn=$hs_readMutVarzh(Wm,an);
	     var cn=bn[0],dn=bn[1];
	     $M(dn,function(en){
	      var fn=en.v[4],gn=en.v[5];
	      var hn=fn.equals(gn)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(hn.g){
	      case 1:
	       $$GHCziIOziBufferedIO_flushWriteBuffer.C([Um,Vm,en,cn],function(jn){
		var kn=jn[0],ln=jn[1];
		var mn=$hs_writeMutVarzh(Wm,ln,kn);
		$r([mn,$$GHCziTuple_Z0T]);
	       },[Wm]);break;
	      case 2:
	       $r([cn,$$GHCziTuple_Z0T]);break;
	      }
	     },[Wm,Um,Vm,cn]);
	    },[Wm,Um,Vm]);
	   },[wd,xd,yd,Ll,Tm,Wm,Um,Vm],"sat");
	   $A(Xm);
	  },[wd,xd,yd,Ll]);
	 },[wd,xd,yd,Ll],"sat");
	 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Rm,Kl],function(nn){
	  var on=nn[0];
	  var pn=$f(4,function(qn,rn,sn,tn){
	   $M(rn,function(un){
	    switch(un.g){
	    case 1:
	     $M(sn,function(vn){
	      switch(vn.g){
	      case 1:
	       var wn=$f(1,function(xn){
		$M(xn,function(yn){
		 var zn=yn.v[8],An=yn.v[9];
		 var Bn=$f(1,function(Cn){
		  $$GHCziIOziHandleziInternals_zdwa3.C([yn,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),qn,Cn],function(Dn){
		   var En=Dn[0];
		   var Fn=$hs_readMutVarzh(zn,En);
		   var Gn=Fn[0],Hn=Fn[1];
		   $M(Hn,function(In){
		    var Jn=In.v[3];
		    var Kn=yd.equals(Jn)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Kn.g){
		    case 1:
		     $r([Gn,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var Ln=$hs_readMutVarzh(An,Gn);
		     var Mn=Ln[0],Nn=Ln[1];
		     var On=$d(2,[Bd,Nn],"sat");
		     var Pn=$hs_writeMutVarzh(An,On,Mn);
		     $r([Pn,$$GHCziTuple_Z0T]);break;
		    }
		   },[Bd,yd,Gn,An]);
		  },[Bd,yd,zn,An]);
		 },[wd,xd,Bd,yd,yn,qn,zn,An],"sat");
		 $A(Bn);
		},[wd,xd,Bd,yd,qn]);
	       },[wd,xd,Bd,yd,qn],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,wn,tn);break;
	      case 2:
	       pn.J(qn,vn,$$GHCziTypes_ZMZN,tn);break;
	      }
	     },[wd,xd,Bd,yd,sd,vd,qn,tn,pn]);break;
	    case 2:
	     var Qn=un.v[0],Rn=un.v[1];
	     var To=qn.add(goog.math.Long.fromBits(1,0));
	     var Sn=To.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Sn.g){
	     case 1:
	      $M(Qn,function(Tn){
	       var Un=Tn.v[0];
	       $M(Un,function(Vn){
		switch(Vn.toString()){
		case "\n":
		 var Zn=$f(2,function(ao,bo){
		  var co=$f(1,function(eo){
		   $M(eo,function(fo){
		    var go=fo.v[1],ho=fo.v[3],io=fo.v[5];
		    var jo=$f(1,function(ko){
		     $$GHCziIOziHandleziInternals_zdwa3.C([fo,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),bo,ko],function(lo){
		      var mo=lo[0];
		      var no=$hs_readMutVarzh(io,mo);
		      var oo=no[0],po=no[1];
		      $M(po,function(qo){
		       var ro=qo.v[4],so=qo.v[5];
		       var to=ro.equals(so)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(to.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([go,ho,qo,oo],function(uo){
			 var vo=uo[0],wo=uo[1];
			 var xo=$hs_writeMutVarzh(io,wo,vo);
			 $r([xo,$$GHCziTuple_Z0T]);
			},[io]);break;
		       case 2:
			$r([oo,$$GHCziTuple_Z0T]);break;
		       }
		      },[io,go,ho,oo]);
		     },[io,go,ho]);
		    },[wd,xd,yd,fo,bo,io,go,ho],"sat");
		    $A(jo);
		   },[wd,xd,yd,bo]);
		  },[wd,xd,yd,bo],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,co,ao],function(yo){
		   var zo=yo[0];
		   pn.J(goog.math.Long.fromBits(0,0),Rn,sn,zo);
		  },[wd,xd,Bd,yd,sd,vd,sn,pn,Rn]);
		 },[wd,xd,yd,sd,sn,pn,Rn],"$w$j1");
		 $M(vd,function(Ao){
		  switch(Ao.g){
		  case 1:
		   var Do=$hs_writeWideCharOffAddrzh(wd,qn,"\n",tn);
		   var Bo=$hs_touchzh(xd,Do);
		   var Co=qn.add(goog.math.Long.fromBits(1,0));
		   Zn.J(Bo,Co);break;
		  case 2:
		   var Jo=$hs_writeWideCharOffAddrzh(wd,qn,"\r",tn);
		   var Io=$hs_touchzh(xd,Jo);
		   var Go=qn.add(goog.math.Long.fromBits(1,0));
		   var Ho=$hs_writeWideCharOffAddrzh(wd,Go,"\n",Io);
		   var Eo=$hs_touchzh(xd,Ho);
		   var Fo=Go.add(goog.math.Long.fromBits(1,0));
		   Zn.J(Eo,Fo);break;
		  }
		 },[wd,xd,Bd,yd,sd,vd,sn,qn,tn,pn,Rn,Zn]);break;
		default:
		 var Yn=$hs_writeWideCharOffAddrzh(wd,qn,Vn,tn);
		 var Xn=$hs_touchzh(xd,Yn);
		 var Wn=qn.add(goog.math.Long.fromBits(1,0));
		 pn.J(Wn,Rn,sn,Xn);
		}
	       },[wd,xd,Bd,yd,sd,vd,sn,qn,tn,pn,Rn]);
	      },[wd,xd,Bd,yd,sd,vd,sn,qn,tn,pn,Rn]);break;
	     case 2:
	      var Ko=$f(1,function(Lo){
	       $M(Lo,function(Mo){
		var No=$f(1,function(Oo){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Mo,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),qn,Oo],function(Po){
		  var Qo=Po[0];
		  $r([Qo,$$GHCziTuple_Z0T]);
		 },[]);
		},[wd,xd,yd,qn,Mo],"sat");
		$A(No);
	       },[wd,xd,yd,qn]);
	      },[wd,xd,yd,qn],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Ko,tn],function(Ro){
	       var So=Ro[0];
	       pn.J(goog.math.Long.fromBits(0,0),un,sn,So);
	      },[wd,xd,Bd,yd,sd,vd,sn,pn,un]);break;
	     }break;
	    }
	   },[wd,xd,Bd,yd,sd,vd,sn,qn,tn,pn]);
	  },[wd,xd,Bd,yd,sd,vd],"$wa9");
	  pn.J(goog.math.Long.fromBits(0,0),yl,zl,on);
	 },[wd,xd,Bd,yd,sd,vd,yl,zl]);break;
	}
       },[wd,xd,Bd,yd,sd,vd,yl,zl,Ll,Kl]);
      },[wd,xd,Bd,yd,td,sd,vd,yl,zl],"$w$j");
      $M(vd,function(Uo){
       switch(Uo.g){
       case 1:
	var Xo=$hs_writeWideCharOffAddrzh(wd,wl,"\n",Al);
	var Vo=$hs_touchzh(xd,Xo);
	var Wo=wl.add(goog.math.Long.fromBits(1,0));
	Jl.J(Vo,Wo);break;
       case 2:
	var dp=$hs_writeWideCharOffAddrzh(wd,wl,"\r",Al);
	var cp=$hs_touchzh(xd,dp);
	var ap=wl.add(goog.math.Long.fromBits(1,0));
	var bp=$hs_writeWideCharOffAddrzh(wd,ap,"\n",cp);
	var Yo=$hs_touchzh(xd,bp);
	var Zo=ap.add(goog.math.Long.fromBits(1,0));
	Jl.J(Yo,Zo);break;
       }
      },[wd,xd,Bd,yd,td,sd,vd,wl,Al,yl,zl,Jl]);break;
     default:
      var Il=$hs_writeWideCharOffAddrzh(wd,wl,El,Al);
      var Hl=$hs_touchzh(xd,Il);
      var Gl=wl.add(goog.math.Long.fromBits(1,0));
      Fl.J(Gl,yl,zl,Hl);
     }
    },[wd,xd,Bd,yd,td,sd,vd,Cd,wl,Al,Fl,yl,zl]);
   },[wd,xd,Bd,yd,td,sd,vd,Cd,wl,Al,Fl,yl,zl]);break;
  case 2:
   var ep=$f(1,function(fp){
    $M(fp,function(gp){
     var hp=$f(1,function(ip){
      $$GHCziIOziHandleziInternals_zdwa3.C([gp,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),wl,ip],function(jp){
       var kp=jp[0];
       $r([kp,$$GHCziTuple_Z0T]);
      },[]);
     },[wd,xd,yd,wl,gp],"sat");
     $A(hp);
    },[wd,xd,yd,wl]);
   },[wd,xd,yd,wl],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,ep,Al],function(lp){
    var mp=lp[0];
    vl.J(goog.math.Long.fromBits(0,0),xl,yl,zl,mp);
   },[wd,xd,Bd,yd,td,sd,vd,Cd,xl,yl,zl,vl]);break;
  }
 },"$s$wa4"),Fl=$f(4,function(op,pp,qp,rp){
  $M(pp,function(sp){
   switch(sp.g){
   case 1:
    $M(qp,function(tp){
     switch(tp.g){
     case 1:
      var up=$f(1,function(vp){
       $M(vp,function(wp){
	var xp=wp.v[8],yp=wp.v[9];
	var zp=$f(1,function(Ap){
	 $$GHCziIOziHandleziInternals_zdwa3.C([wp,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),op,Ap],function(Bp){
	  var Cp=Bp[0];
	  var Dp=$hs_readMutVarzh(xp,Cp);
	  var Ep=Dp[0],Fp=Dp[1];
	  $M(Fp,function(Gp){
	   var Hp=Gp.v[3];
	   var Ip=yd.equals(Hp)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Ip.g){
	   case 1:
	    $r([Ep,$$GHCziTuple_Z0T]);break;
	   case 2:
	    var Jp=$hs_readMutVarzh(yp,Ep);
	    var Kp=Jp[0],Lp=Jp[1];
	    var Mp=$d(2,[Bd,Lp],"sat");
	    var Np=$hs_writeMutVarzh(yp,Mp,Kp);
	    $r([Np,$$GHCziTuple_Z0T]);break;
	   }
	  },[Bd,yd,Ep,yp]);
	 },[Bd,yd,xp,yp]);
	},[wd,xd,Bd,yd,wp,op,xp,yp],"sat");
	$A(zp);
       },[wd,xd,Bd,yd,op]);
      },[wd,xd,Bd,yd,op],"sat");
      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,up,rp);break;
     case 2:
      var Op=tp.v[0],Pp=tp.v[1];
      Cd.J(op,Op,Pp,rp);break;
     }
    },[wd,xd,Bd,yd,td,sd,vd,Cd,op,rp]);break;
   case 2:
    var Qp=sp.v[0],Rp=sp.v[1];
    var Jz=op.add(goog.math.Long.fromBits(1,0));
    var Sp=Jz.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Sp.g){
    case 1:
     $M(Qp,function(Tp){
      var Up=Tp.v[0];
      $M(Up,function(Vp){
       switch(Vp.toString()){
       case "\n":
	var Zp=$f(2,function(aq,bq){
	 $M(td,function(cq){
	  switch(cq.g){
	  case 1:
	   var dq=$F(4,function(eq,fq,gq,hq){
	    var Jq=eq.add(goog.math.Long.fromBits(1,0));
	    var iq=Jq.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(iq.g){
	    case 1:
	     $M(fq,function(jq){
	      var kq=jq.v[0];
	      $M(kq,function(lq){
	       switch(lq.toString()){
	       case "\n":
		$M(vd,function(qq){
		 switch(qq.g){
		 case 1:
		  var tq=$hs_writeWideCharOffAddrzh(wd,eq,"\n",hq);
		  var sq=$hs_touchzh(xd,tq);
		  var rq=eq.add(goog.math.Long.fromBits(1,0));
		  mq.J(rq,gq,sq);break;
		 case 2:
		  var zq=$hs_writeWideCharOffAddrzh(wd,eq,"\r",hq);
		  var yq=$hs_touchzh(xd,zq);
		  var wq=eq.add(goog.math.Long.fromBits(1,0));
		  var xq=$hs_writeWideCharOffAddrzh(wd,wq,"\n",yq);
		  var vq=$hs_touchzh(xd,xq);
		  var uq=wq.add(goog.math.Long.fromBits(1,0));
		  mq.J(uq,gq,vq);break;
		 }
		},[wd,xd,Bd,yd,sd,vd,eq,hq,mq,gq]);break;
	       default:
		var pq=$hs_writeWideCharOffAddrzh(wd,eq,lq,hq);
		var oq=$hs_touchzh(xd,pq);
		var nq=eq.add(goog.math.Long.fromBits(1,0));
		mq.J(nq,gq,oq);
	       }
	      },[wd,xd,Bd,yd,sd,vd,eq,hq,mq,gq]);
	     },[wd,xd,Bd,yd,sd,vd,eq,hq,mq,gq]);break;
	    case 2:
	     var Aq=$f(1,function(Bq){
	      $M(Bq,function(Cq){
	       var Dq=$f(1,function(Eq){
		$$GHCziIOziHandleziInternals_zdwa3.C([Cq,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),eq,Eq],function(Fq){
		 var Gq=Fq[0];
		 $r([Gq,$$GHCziTuple_Z0T]);
		},[]);
	       },[wd,xd,yd,eq,Cq],"sat");
	       $A(Dq);
	      },[wd,xd,yd,eq]);
	     },[wd,xd,yd,eq],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Aq,hq],function(Hq){
	      var Iq=Hq[0];
	      dq.J(goog.math.Long.fromBits(0,0),fq,gq,Iq);
	     },[wd,xd,Bd,yd,sd,vd,fq,gq,dq]);break;
	    }
	   },"$s$wa5"),mq=$f(3,function(Kq,Lq,Mq){
	    $M(Lq,function(Nq){
	     switch(Nq.g){
	     case 1:
	      var Oq=$f(1,function(Pq){
	       $M(Pq,function(Qq){
		var Rq=Qq.v[8],Sq=Qq.v[9];
		var Tq=$f(1,function(Uq){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Qq,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Kq,Uq],function(Vq){
		  var Wq=Vq[0];
		  var Xq=$hs_readMutVarzh(Rq,Wq);
		  var Yq=Xq[0],Zq=Xq[1];
		  $M(Zq,function(ar){
		   var br=ar.v[3];
		   var cr=yd.equals(br)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(cr.g){
		   case 1:
		    $r([Yq,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var dr=$hs_readMutVarzh(Sq,Yq);
		    var er=dr[0],fr=dr[1];
		    var gr=$d(2,[Bd,fr],"sat");
		    var hr=$hs_writeMutVarzh(Sq,gr,er);
		    $r([hr,$$GHCziTuple_Z0T]);break;
		   }
		  },[Bd,yd,Yq,Sq]);
		 },[Bd,yd,Rq,Sq]);
		},[wd,xd,Bd,yd,Qq,Kq,Rq,Sq],"sat");
		$A(Tq);
	       },[wd,xd,Bd,yd,Kq]);
	      },[wd,xd,Bd,yd,Kq],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Oq,Mq);break;
	     case 2:
	      var ir=Nq.v[0],jr=Nq.v[1];
	      var Kr=Kq.add(goog.math.Long.fromBits(1,0));
	      var kr=Kr.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(kr.g){
	      case 1:
	       $M(ir,function(lr){
		var mr=lr.v[0];
		$M(mr,function(nr){
		 switch(nr.toString()){
		 case "\n":
		  $M(vd,function(rr){
		   switch(rr.g){
		   case 1:
		    var ur=$hs_writeWideCharOffAddrzh(wd,Kq,"\n",Mq);
		    var tr=$hs_touchzh(xd,ur);
		    var sr=Kq.add(goog.math.Long.fromBits(1,0));
		    mq.J(sr,jr,tr);break;
		   case 2:
		    var Ar=$hs_writeWideCharOffAddrzh(wd,Kq,"\r",Mq);
		    var zr=$hs_touchzh(xd,Ar);
		    var xr=Kq.add(goog.math.Long.fromBits(1,0));
		    var yr=$hs_writeWideCharOffAddrzh(wd,xr,"\n",zr);
		    var wr=$hs_touchzh(xd,yr);
		    var vr=xr.add(goog.math.Long.fromBits(1,0));
		    mq.J(vr,jr,wr);break;
		   }
		  },[wd,xd,Bd,yd,sd,vd,mq,Kq,Mq,jr]);break;
		 default:
		  var qr=$hs_writeWideCharOffAddrzh(wd,Kq,nr,Mq);
		  var pr=$hs_touchzh(xd,qr);
		  var or=Kq.add(goog.math.Long.fromBits(1,0));
		  mq.J(or,jr,pr);
		 }
		},[wd,xd,Bd,yd,sd,vd,mq,Kq,Mq,jr]);
	       },[wd,xd,Bd,yd,sd,vd,mq,Kq,Mq,jr]);break;
	      case 2:
	       var Br=$f(1,function(Cr){
		$M(Cr,function(Dr){
		 var Er=$f(1,function(Fr){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Dr,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Kq,Fr],function(Gr){
		   var Hr=Gr[0];
		   $r([Hr,$$GHCziTuple_Z0T]);
		  },[]);
		 },[wd,xd,yd,Kq,Dr],"sat");
		 $A(Er);
		},[wd,xd,yd,Kq]);
	       },[wd,xd,yd,Kq],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Br,Mq],function(Ir){
		var Jr=Ir[0];
		dq.J(goog.math.Long.fromBits(0,0),ir,jr,Jr);
	       },[wd,xd,Bd,yd,sd,vd,dq,ir,jr]);break;
	      }break;
	     }
	    },[wd,xd,Bd,yd,sd,vd,mq,dq,Kq,Mq]);
	   },[wd,xd,Bd,yd,sd,vd,dq],"$s$wa6");
	   $S(dq,[wd,xd,yd,sd,vd,mq]);
	   var Lr=$F(5,function(Mr,Nr,Or,Pr,Qr){
	    var ss=Mr.add(goog.math.Long.fromBits(1,0));
	    var Rr=ss.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Rr.g){
	    case 1:
	     $M(Nr,function(Sr){
	      var Tr=Sr.v[0];
	      $M(Tr,function(Ur){
	       switch(Ur.toString()){
	       case "\n":
		$M(vd,function(Zr){
		 switch(Zr.g){
		 case 1:
		  var cs=$hs_writeWideCharOffAddrzh(wd,Mr,"\n",Qr);
		  var bs=$hs_touchzh(xd,cs);
		  var as=Mr.add(goog.math.Long.fromBits(1,0));
		  Vr.J(as,Or,Pr,bs);break;
		 case 2:
		  var is=$hs_writeWideCharOffAddrzh(wd,Mr,"\r",Qr);
		  var hs=$hs_touchzh(xd,is);
		  var fs=Mr.add(goog.math.Long.fromBits(1,0));
		  var gs=$hs_writeWideCharOffAddrzh(wd,fs,"\n",hs);
		  var es=$hs_touchzh(xd,gs);
		  var ds=fs.add(goog.math.Long.fromBits(1,0));
		  Vr.J(ds,Or,Pr,es);break;
		 }
		},[wd,xd,Bd,yd,sd,vd,dq,Mr,Qr,Vr,Or,Pr]);break;
	       default:
		var Yr=$hs_writeWideCharOffAddrzh(wd,Mr,Ur,Qr);
		var Xr=$hs_touchzh(xd,Yr);
		var Wr=Mr.add(goog.math.Long.fromBits(1,0));
		Vr.J(Wr,Or,Pr,Xr);
	       }
	      },[wd,xd,Bd,yd,sd,vd,dq,Mr,Qr,Vr,Or,Pr]);
	     },[wd,xd,Bd,yd,sd,vd,dq,Mr,Qr,Vr,Or,Pr]);break;
	    case 2:
	     var js=$f(1,function(ks){
	      $M(ks,function(ls){
	       var ms=$f(1,function(ns){
		$$GHCziIOziHandleziInternals_zdwa3.C([ls,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Mr,ns],function(os){
		 var ps=os[0];
		 $r([ps,$$GHCziTuple_Z0T]);
		},[]);
	       },[wd,xd,yd,Mr,ls],"sat");
	       $A(ms);
	      },[wd,xd,yd,Mr]);
	     },[wd,xd,yd,Mr],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,js,Qr],function(qs){
	      var rs=qs[0];
	      Lr.J(goog.math.Long.fromBits(0,0),Nr,Or,Pr,rs);
	     },[wd,xd,Bd,yd,sd,vd,dq,Nr,Or,Pr,Lr]);break;
	    }
	   },"$s$wa7"),Vr=$f(4,function(ts,us,vs,ws){
	    $M(us,function(xs){
	     switch(xs.g){
	     case 1:
	      $M(vs,function(ys){
	       switch(ys.g){
	       case 1:
		var zs=$f(1,function(As){
		 $M(As,function(Bs){
		  var Cs=Bs.v[8],Ds=Bs.v[9];
		  var Es=$f(1,function(Fs){
		   $$GHCziIOziHandleziInternals_zdwa3.C([Bs,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ts,Fs],function(Gs){
		    var Hs=Gs[0];
		    var Is=$hs_readMutVarzh(Cs,Hs);
		    var Js=Is[0],Ks=Is[1];
		    $M(Ks,function(Ls){
		     var Ms=Ls.v[3];
		     var Ns=yd.equals(Ms)?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(Ns.g){
		     case 1:
		      $r([Js,$$GHCziTuple_Z0T]);break;
		     case 2:
		      var Os=$hs_readMutVarzh(Ds,Js);
		      var Ps=Os[0],Qs=Os[1];
		      var Rs=$d(2,[Bd,Qs],"sat");
		      var Ss=$hs_writeMutVarzh(Ds,Rs,Ps);
		      $r([Ss,$$GHCziTuple_Z0T]);break;
		     }
		    },[Bd,yd,Js,Ds]);
		   },[Bd,yd,Cs,Ds]);
		  },[wd,xd,Bd,yd,Bs,ts,Cs,Ds],"sat");
		  $A(Es);
		 },[wd,xd,Bd,yd,ts]);
		},[wd,xd,Bd,yd,ts],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,zs,ws);break;
	       case 2:
		var Ts=ys.v[0],Us=ys.v[1];
		dq.J(ts,Ts,Us,ws);break;
	       }
	      },[wd,xd,Bd,yd,sd,vd,dq,ts,ws]);break;
	     case 2:
	      var Vs=xs.v[0],Ws=xs.v[1];
	      var xt=ts.add(goog.math.Long.fromBits(1,0));
	      var Xs=xt.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Xs.g){
	      case 1:
	       $M(Vs,function(Ys){
		var Zs=Ys.v[0];
		$M(Zs,function(at){
		 switch(at.toString()){
		 case "\n":
		  $M(vd,function(et){
		   switch(et.g){
		   case 1:
		    var ht=$hs_writeWideCharOffAddrzh(wd,ts,"\n",ws);
		    var gt=$hs_touchzh(xd,ht);
		    var ft=ts.add(goog.math.Long.fromBits(1,0));
		    Vr.J(ft,Ws,vs,gt);break;
		   case 2:
		    var nt=$hs_writeWideCharOffAddrzh(wd,ts,"\r",ws);
		    var mt=$hs_touchzh(xd,nt);
		    var kt=ts.add(goog.math.Long.fromBits(1,0));
		    var lt=$hs_writeWideCharOffAddrzh(wd,kt,"\n",mt);
		    var jt=$hs_touchzh(xd,lt);
		    var it=kt.add(goog.math.Long.fromBits(1,0));
		    Vr.J(it,Ws,vs,jt);break;
		   }
		  },[wd,xd,Bd,yd,sd,vd,dq,Vr,vs,ts,ws,Ws]);break;
		 default:
		  var dt=$hs_writeWideCharOffAddrzh(wd,ts,at,ws);
		  var ct=$hs_touchzh(xd,dt);
		  var bt=ts.add(goog.math.Long.fromBits(1,0));
		  Vr.J(bt,Ws,vs,ct);
		 }
		},[wd,xd,Bd,yd,sd,vd,dq,Vr,vs,ts,ws,Ws]);
	       },[wd,xd,Bd,yd,sd,vd,dq,Vr,vs,ts,ws,Ws]);break;
	      case 2:
	       var ot=$f(1,function(pt){
		$M(pt,function(qt){
		 var rt=$f(1,function(st){
		  $$GHCziIOziHandleziInternals_zdwa3.C([qt,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ts,st],function(tt){
		   var ut=tt[0];
		   $r([ut,$$GHCziTuple_Z0T]);
		  },[]);
		 },[wd,xd,yd,ts,qt],"sat");
		 $A(rt);
		},[wd,xd,yd,ts]);
	       },[wd,xd,yd,ts],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,ot,ws],function(vt){
		var wt=vt[0];
		Lr.J(goog.math.Long.fromBits(0,0),Vs,Ws,vs,wt);
	       },[wd,xd,Bd,yd,sd,vd,dq,Lr,vs,Vs,Ws]);break;
	      }break;
	     }
	    },[wd,xd,Bd,yd,sd,vd,dq,Vr,Lr,vs,ts,ws]);
	   },[wd,xd,Bd,yd,sd,vd,dq,Lr],"$wa9");
	   $S(Lr,[wd,xd,yd,sd,vd,Vr]);
	   Vr.J(bq,Rp,qp,aq);break;
	  case 2:
	   var yt=$f(1,function(zt){
	    $M(zt,function(At){
	     var Bt=At.v[1],Ct=At.v[3],Dt=At.v[5];
	     var Et=$f(1,function(Ft){
	      $$GHCziIOziHandleziInternals_zdwa3.C([At,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),bq,Ft],function(Gt){
	       var Ht=Gt[0];
	       var It=$hs_readMutVarzh(Dt,Ht);
	       var Jt=It[0],Kt=It[1];
	       $M(Kt,function(Lt){
		var Mt=Lt.v[4],Nt=Lt.v[5];
		var Ot=Mt.equals(Nt)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Ot.g){
		case 1:
		 $$GHCziIOziBufferedIO_flushWriteBuffer.C([Bt,Ct,Lt,Jt],function(Pt){
		  var Qt=Pt[0],Rt=Pt[1];
		  var St=$hs_writeMutVarzh(Dt,Rt,Qt);
		  $r([St,$$GHCziTuple_Z0T]);
		 },[Dt]);break;
		case 2:
		 $r([Jt,$$GHCziTuple_Z0T]);break;
		}
	       },[Dt,Bt,Ct,Jt]);
	      },[Dt,Bt,Ct]);
	     },[wd,xd,yd,bq,At,Dt,Bt,Ct],"sat");
	     $A(Et);
	    },[wd,xd,yd,bq]);
	   },[wd,xd,yd,bq],"sat");
	   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,yt,aq],function(Tt){
	    var Ut=Tt[0];
	    var Vt=$F(4,function(Wt,Xt,Yt,Zt){
	     var bv=Wt.add(goog.math.Long.fromBits(1,0));
	     var au=bv.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(au.g){
	     case 1:
	      $M(Xt,function(bu){
	       var cu=bu.v[0];
	       $M(cu,function(du){
		switch(du.toString()){
		case "\n":
		 var iu=$f(2,function(ju,ku){
		  var lu=$f(1,function(mu){
		   $M(mu,function(nu){
		    var ou=nu.v[1],pu=nu.v[3],qu=nu.v[5];
		    var ru=$f(1,function(su){
		     $$GHCziIOziHandleziInternals_zdwa3.C([nu,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ku,su],function(tu){
		      var uu=tu[0];
		      var vu=$hs_readMutVarzh(qu,uu);
		      var wu=vu[0],xu=vu[1];
		      $M(xu,function(yu){
		       var zu=yu.v[4],Au=yu.v[5];
		       var Bu=zu.equals(Au)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(Bu.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([ou,pu,yu,wu],function(Cu){
			 var Du=Cu[0],Eu=Cu[1];
			 var Fu=$hs_writeMutVarzh(qu,Eu,Du);
			 $r([Fu,$$GHCziTuple_Z0T]);
			},[qu]);break;
		       case 2:
			$r([wu,$$GHCziTuple_Z0T]);break;
		       }
		      },[qu,ou,pu,wu]);
		     },[qu,ou,pu]);
		    },[wd,xd,yd,nu,ku,qu,ou,pu],"sat");
		    $A(ru);
		   },[wd,xd,yd,ku]);
		  },[wd,xd,yd,ku],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,lu,ju],function(Gu){
		   var Hu=Gu[0];
		   eu.J(goog.math.Long.fromBits(0,0),Yt,Hu);
		  },[wd,xd,Bd,yd,sd,vd,eu,Yt]);
		 },[wd,xd,yd,sd,eu,Yt],"$w$j1");
		 $M(vd,function(Iu){
		  switch(Iu.g){
		  case 1:
		   var Lu=$hs_writeWideCharOffAddrzh(wd,Wt,"\n",Zt);
		   var Ju=$hs_touchzh(xd,Lu);
		   var Ku=Wt.add(goog.math.Long.fromBits(1,0));
		   iu.J(Ju,Ku);break;
		  case 2:
		   var Ru=$hs_writeWideCharOffAddrzh(wd,Wt,"\r",Zt);
		   var Qu=$hs_touchzh(xd,Ru);
		   var Ou=Wt.add(goog.math.Long.fromBits(1,0));
		   var Pu=$hs_writeWideCharOffAddrzh(wd,Ou,"\n",Qu);
		   var Mu=$hs_touchzh(xd,Pu);
		   var Nu=Ou.add(goog.math.Long.fromBits(1,0));
		   iu.J(Mu,Nu);break;
		  }
		 },[wd,xd,Bd,yd,sd,vd,Wt,Zt,eu,Yt,iu]);break;
		default:
		 var hu=$hs_writeWideCharOffAddrzh(wd,Wt,du,Zt);
		 var gu=$hs_touchzh(xd,hu);
		 var fu=Wt.add(goog.math.Long.fromBits(1,0));
		 eu.J(fu,Yt,gu);
		}
	       },[wd,xd,Bd,yd,sd,vd,Wt,Zt,eu,Yt]);
	      },[wd,xd,Bd,yd,sd,vd,Wt,Zt,eu,Yt]);break;
	     case 2:
	      var Su=$f(1,function(Tu){
	       $M(Tu,function(Uu){
		var Vu=$f(1,function(Wu){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Uu,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Wt,Wu],function(Xu){
		  var Yu=Xu[0];
		  $r([Yu,$$GHCziTuple_Z0T]);
		 },[]);
		},[wd,xd,yd,Wt,Uu],"sat");
		$A(Vu);
	       },[wd,xd,yd,Wt]);
	      },[wd,xd,yd,Wt],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Su,Zt],function(Zu){
	       var av=Zu[0];
	       Vt.J(goog.math.Long.fromBits(0,0),Xt,Yt,av);
	      },[wd,xd,Bd,yd,sd,vd,Xt,Yt,Vt]);break;
	     }
	    },"$s$wa5"),eu=$f(3,function(cv,dv,ev){
	     $M(dv,function(fv){
	      switch(fv.g){
	      case 1:
	       var gv=$f(1,function(hv){
		$M(hv,function(iv){
		 var jv=iv.v[8],kv=iv.v[9];
		 var lv=$f(1,function(mv){
		  $$GHCziIOziHandleziInternals_zdwa3.C([iv,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),cv,mv],function(nv){
		   var ov=nv[0];
		   var pv=$hs_readMutVarzh(jv,ov);
		   var qv=pv[0],rv=pv[1];
		   $M(rv,function(sv){
		    var tv=sv.v[3];
		    var uv=yd.equals(tv)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(uv.g){
		    case 1:
		     $r([qv,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var vv=$hs_readMutVarzh(kv,qv);
		     var wv=vv[0],xv=vv[1];
		     var yv=$d(2,[Bd,xv],"sat");
		     var zv=$hs_writeMutVarzh(kv,yv,wv);
		     $r([zv,$$GHCziTuple_Z0T]);break;
		    }
		   },[Bd,yd,qv,kv]);
		  },[Bd,yd,jv,kv]);
		 },[wd,xd,Bd,yd,iv,cv,jv,kv],"sat");
		 $A(lv);
		},[wd,xd,Bd,yd,cv]);
	       },[wd,xd,Bd,yd,cv],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,gv,ev);break;
	      case 2:
	       var Av=fv.v[0],Bv=fv.v[1];
	       var Cw=cv.add(goog.math.Long.fromBits(1,0));
	       var Cv=Cw.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Cv.g){
	       case 1:
		$M(Av,function(Dv){
		 var Ev=Dv.v[0];
		 $M(Ev,function(Fv){
		  switch(Fv.toString()){
		  case "\n":
		   var Jv=$f(2,function(Kv,Lv){
		    var Mv=$f(1,function(Nv){
		     $M(Nv,function(Ov){
		      var Pv=Ov.v[1],Qv=Ov.v[3],Rv=Ov.v[5];
		      var Sv=$f(1,function(Tv){
		       $$GHCziIOziHandleziInternals_zdwa3.C([Ov,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Lv,Tv],function(Uv){
			var Vv=Uv[0];
			var Wv=$hs_readMutVarzh(Rv,Vv);
			var Xv=Wv[0],Yv=Wv[1];
			$M(Yv,function(Zv){
			 var aw=Zv.v[4],bw=Zv.v[5];
			 var cw=aw.equals(bw)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(cw.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([Pv,Qv,Zv,Xv],function(dw){
			   var ew=dw[0],fw=dw[1];
			   var gw=$hs_writeMutVarzh(Rv,fw,ew);
			   $r([gw,$$GHCziTuple_Z0T]);
			  },[Rv]);break;
			 case 2:
			  $r([Xv,$$GHCziTuple_Z0T]);break;
			 }
			},[Rv,Pv,Qv,Xv]);
		       },[Rv,Pv,Qv]);
		      },[wd,xd,yd,Ov,Lv,Rv,Pv,Qv],"sat");
		      $A(Sv);
		     },[wd,xd,yd,Lv]);
		    },[wd,xd,yd,Lv],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Mv,Kv],function(hw){
		     var iw=hw[0];
		     eu.J(goog.math.Long.fromBits(0,0),Bv,iw);
		    },[wd,xd,Bd,yd,sd,vd,eu,Bv]);
		   },[wd,xd,yd,sd,eu,Bv],"$w$j1");
		   $M(vd,function(jw){
		    switch(jw.g){
		    case 1:
		     var mw=$hs_writeWideCharOffAddrzh(wd,cv,"\n",ev);
		     var kw=$hs_touchzh(xd,mw);
		     var lw=cv.add(goog.math.Long.fromBits(1,0));
		     Jv.J(kw,lw);break;
		    case 2:
		     var sw=$hs_writeWideCharOffAddrzh(wd,cv,"\r",ev);
		     var rw=$hs_touchzh(xd,sw);
		     var pw=cv.add(goog.math.Long.fromBits(1,0));
		     var qw=$hs_writeWideCharOffAddrzh(wd,pw,"\n",rw);
		     var nw=$hs_touchzh(xd,qw);
		     var ow=pw.add(goog.math.Long.fromBits(1,0));
		     Jv.J(nw,ow);break;
		    }
		   },[wd,xd,Bd,yd,sd,vd,eu,cv,ev,Bv,Jv]);break;
		  default:
		   var Iv=$hs_writeWideCharOffAddrzh(wd,cv,Fv,ev);
		   var Hv=$hs_touchzh(xd,Iv);
		   var Gv=cv.add(goog.math.Long.fromBits(1,0));
		   eu.J(Gv,Bv,Hv);
		  }
		 },[wd,xd,Bd,yd,sd,vd,eu,cv,ev,Bv]);
		},[wd,xd,Bd,yd,sd,vd,eu,cv,ev,Bv]);break;
	       case 2:
		var tw=$f(1,function(uw){
		 $M(uw,function(vw){
		  var ww=$f(1,function(xw){
		   $$GHCziIOziHandleziInternals_zdwa3.C([vw,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),cv,xw],function(yw){
		    var zw=yw[0];
		    $r([zw,$$GHCziTuple_Z0T]);
		   },[]);
		  },[wd,xd,yd,cv,vw],"sat");
		  $A(ww);
		 },[wd,xd,yd,cv]);
		},[wd,xd,yd,cv],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,tw,ev],function(Aw){
		 var Bw=Aw[0];
		 Vt.J(goog.math.Long.fromBits(0,0),Av,Bv,Bw);
		},[wd,xd,Bd,yd,sd,vd,Vt,Av,Bv]);break;
	       }break;
	      }
	     },[wd,xd,Bd,yd,sd,vd,eu,Vt,cv,ev]);
	    },[wd,xd,Bd,yd,sd,vd,Vt],"$s$wa6");
	    $S(Vt,[wd,xd,yd,sd,vd,eu]);
	    var Dw=$F(5,function(Ew,Fw,Gw,Hw,Iw){
	     var Kx=Ew.add(goog.math.Long.fromBits(1,0));
	     var Jw=Kx.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Jw.g){
	     case 1:
	      $M(Fw,function(Kw){
	       var Lw=Kw.v[0];
	       $M(Lw,function(Mw){
		switch(Mw.toString()){
		case "\n":
		 var Rw=$f(2,function(Sw,Tw){
		  var Uw=$f(1,function(Vw){
		   $M(Vw,function(Ww){
		    var Xw=Ww.v[1],Yw=Ww.v[3],Zw=Ww.v[5];
		    var ax=$f(1,function(bx){
		     $$GHCziIOziHandleziInternals_zdwa3.C([Ww,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Tw,bx],function(cx){
		      var dx=cx[0];
		      var ex=$hs_readMutVarzh(Zw,dx);
		      var fx=ex[0],gx=ex[1];
		      $M(gx,function(hx){
		       var ix=hx.v[4],jx=hx.v[5];
		       var kx=ix.equals(jx)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(kx.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([Xw,Yw,hx,fx],function(lx){
			 var mx=lx[0],nx=lx[1];
			 var ox=$hs_writeMutVarzh(Zw,nx,mx);
			 $r([ox,$$GHCziTuple_Z0T]);
			},[Zw]);break;
		       case 2:
			$r([fx,$$GHCziTuple_Z0T]);break;
		       }
		      },[Zw,Xw,Yw,fx]);
		     },[Zw,Xw,Yw]);
		    },[wd,xd,yd,Ww,Tw,Zw,Xw,Yw],"sat");
		    $A(ax);
		   },[wd,xd,yd,Tw]);
		  },[wd,xd,yd,Tw],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Uw,Sw],function(px){
		   var qx=px[0];
		   Nw.J(goog.math.Long.fromBits(0,0),Gw,Hw,qx);
		  },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Gw,Hw]);
		 },[wd,xd,yd,sd,Nw,Gw,Hw],"$w$j1");
		 $M(vd,function(rx){
		  switch(rx.g){
		  case 1:
		   var ux=$hs_writeWideCharOffAddrzh(wd,Ew,"\n",Iw);
		   var sx=$hs_touchzh(xd,ux);
		   var tx=Ew.add(goog.math.Long.fromBits(1,0));
		   Rw.J(sx,tx);break;
		  case 2:
		   var Ax=$hs_writeWideCharOffAddrzh(wd,Ew,"\r",Iw);
		   var zx=$hs_touchzh(xd,Ax);
		   var xx=Ew.add(goog.math.Long.fromBits(1,0));
		   var yx=$hs_writeWideCharOffAddrzh(wd,xx,"\n",zx);
		   var vx=$hs_touchzh(xd,yx);
		   var wx=xx.add(goog.math.Long.fromBits(1,0));
		   Rw.J(vx,wx);break;
		  }
		 },[wd,xd,Bd,yd,sd,vd,Vt,Ew,Iw,Nw,Gw,Hw,Rw]);break;
		default:
		 var Qw=$hs_writeWideCharOffAddrzh(wd,Ew,Mw,Iw);
		 var Pw=$hs_touchzh(xd,Qw);
		 var Ow=Ew.add(goog.math.Long.fromBits(1,0));
		 Nw.J(Ow,Gw,Hw,Pw);
		}
	       },[wd,xd,Bd,yd,sd,vd,Vt,Ew,Iw,Nw,Gw,Hw]);
	      },[wd,xd,Bd,yd,sd,vd,Vt,Ew,Iw,Nw,Gw,Hw]);break;
	     case 2:
	      var Bx=$f(1,function(Cx){
	       $M(Cx,function(Dx){
		var Ex=$f(1,function(Fx){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Dx,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ew,Fx],function(Gx){
		  var Hx=Gx[0];
		  $r([Hx,$$GHCziTuple_Z0T]);
		 },[]);
		},[wd,xd,yd,Ew,Dx],"sat");
		$A(Ex);
	       },[wd,xd,yd,Ew]);
	      },[wd,xd,yd,Ew],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Bx,Iw],function(Ix){
	       var Jx=Ix[0];
	       Dw.J(goog.math.Long.fromBits(0,0),Fw,Gw,Hw,Jx);
	      },[wd,xd,Bd,yd,sd,vd,Vt,Fw,Gw,Hw,Dw]);break;
	     }
	    },"$s$wa7"),Nw=$f(4,function(Lx,Mx,Nx,Ox){
	     $M(Mx,function(Px){
	      switch(Px.g){
	      case 1:
	       $M(Nx,function(Qx){
		switch(Qx.g){
		case 1:
		 var Rx=$f(1,function(Sx){
		  $M(Sx,function(Tx){
		   var Ux=Tx.v[8],Vx=Tx.v[9];
		   var Wx=$f(1,function(Xx){
		    $$GHCziIOziHandleziInternals_zdwa3.C([Tx,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Lx,Xx],function(Yx){
		     var Zx=Yx[0];
		     var ay=$hs_readMutVarzh(Ux,Zx);
		     var by=ay[0],cy=ay[1];
		     $M(cy,function(dy){
		      var ey=dy.v[3];
		      var fy=yd.equals(ey)?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(fy.g){
		      case 1:
		       $r([by,$$GHCziTuple_Z0T]);break;
		      case 2:
		       var gy=$hs_readMutVarzh(Vx,by);
		       var hy=gy[0],iy=gy[1];
		       var jy=$d(2,[Bd,iy],"sat");
		       var ky=$hs_writeMutVarzh(Vx,jy,hy);
		       $r([ky,$$GHCziTuple_Z0T]);break;
		      }
		     },[Bd,yd,by,Vx]);
		    },[Bd,yd,Ux,Vx]);
		   },[wd,xd,Bd,yd,Tx,Lx,Ux,Vx],"sat");
		   $A(Wx);
		  },[wd,xd,Bd,yd,Lx]);
		 },[wd,xd,Bd,yd,Lx],"sat");
		 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Rx,Ox);break;
		case 2:
		 var ly=Qx.v[0],my=Qx.v[1];
		 Vt.J(Lx,ly,my,Ox);break;
		}
	       },[wd,xd,Bd,yd,sd,vd,Vt,Lx,Ox]);break;
	      case 2:
	       var ny=Px.v[0],oy=Px.v[1];
	       var pz=Lx.add(goog.math.Long.fromBits(1,0));
	       var py=pz.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(py.g){
	       case 1:
		$M(ny,function(qy){
		 var ry=qy.v[0];
		 $M(ry,function(sy){
		  switch(sy.toString()){
		  case "\n":
		   var wy=$f(2,function(xy,yy){
		    var zy=$f(1,function(Ay){
		     $M(Ay,function(By){
		      var Cy=By.v[1],Dy=By.v[3],Ey=By.v[5];
		      var Fy=$f(1,function(Gy){
		       $$GHCziIOziHandleziInternals_zdwa3.C([By,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),yy,Gy],function(Hy){
			var Iy=Hy[0];
			var Jy=$hs_readMutVarzh(Ey,Iy);
			var Ky=Jy[0],Ly=Jy[1];
			$M(Ly,function(My){
			 var Ny=My.v[4],Oy=My.v[5];
			 var Py=Ny.equals(Oy)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Py.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([Cy,Dy,My,Ky],function(Qy){
			   var Ry=Qy[0],Sy=Qy[1];
			   var Ty=$hs_writeMutVarzh(Ey,Sy,Ry);
			   $r([Ty,$$GHCziTuple_Z0T]);
			  },[Ey]);break;
			 case 2:
			  $r([Ky,$$GHCziTuple_Z0T]);break;
			 }
			},[Ey,Cy,Dy,Ky]);
		       },[Ey,Cy,Dy]);
		      },[wd,xd,yd,By,yy,Ey,Cy,Dy],"sat");
		      $A(Fy);
		     },[wd,xd,yd,yy]);
		    },[wd,xd,yd,yy],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,zy,xy],function(Uy){
		     var Vy=Uy[0];
		     Nw.J(goog.math.Long.fromBits(0,0),oy,Nx,Vy);
		    },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Nx,oy]);
		   },[wd,xd,yd,sd,Nw,Nx,oy],"$w$j1");
		   $M(vd,function(Wy){
		    switch(Wy.g){
		    case 1:
		     var Zy=$hs_writeWideCharOffAddrzh(wd,Lx,"\n",Ox);
		     var Xy=$hs_touchzh(xd,Zy);
		     var Yy=Lx.add(goog.math.Long.fromBits(1,0));
		     wy.J(Xy,Yy);break;
		    case 2:
		     var fz=$hs_writeWideCharOffAddrzh(wd,Lx,"\r",Ox);
		     var ez=$hs_touchzh(xd,fz);
		     var cz=Lx.add(goog.math.Long.fromBits(1,0));
		     var dz=$hs_writeWideCharOffAddrzh(wd,cz,"\n",ez);
		     var az=$hs_touchzh(xd,dz);
		     var bz=cz.add(goog.math.Long.fromBits(1,0));
		     wy.J(az,bz);break;
		    }
		   },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Nx,Lx,Ox,oy,wy]);break;
		  default:
		   var vy=$hs_writeWideCharOffAddrzh(wd,Lx,sy,Ox);
		   var uy=$hs_touchzh(xd,vy);
		   var ty=Lx.add(goog.math.Long.fromBits(1,0));
		   Nw.J(ty,oy,Nx,uy);
		  }
		 },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Nx,Lx,Ox,oy]);
		},[wd,xd,Bd,yd,sd,vd,Vt,Nw,Nx,Lx,Ox,oy]);break;
	       case 2:
		var gz=$f(1,function(hz){
		 $M(hz,function(iz){
		  var jz=$f(1,function(kz){
		   $$GHCziIOziHandleziInternals_zdwa3.C([iz,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Lx,kz],function(lz){
		    var mz=lz[0];
		    $r([mz,$$GHCziTuple_Z0T]);
		   },[]);
		  },[wd,xd,yd,Lx,iz],"sat");
		  $A(jz);
		 },[wd,xd,yd,Lx]);
		},[wd,xd,yd,Lx],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,gz,Ox],function(nz){
		 var oz=nz[0];
		 Dw.J(goog.math.Long.fromBits(0,0),ny,oy,Nx,oz);
		},[wd,xd,Bd,yd,sd,vd,Vt,Dw,Nx,ny,oy]);break;
	       }break;
	      }
	     },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Dw,Nx,Lx,Ox]);
	    },[wd,xd,Bd,yd,sd,vd,Vt,Dw],"$wa9");
	    $S(Dw,[wd,xd,yd,sd,vd,Nw]);
	    Nw.J(goog.math.Long.fromBits(0,0),Rp,qp,Ut);
	   },[wd,xd,Bd,yd,sd,vd,qp,Rp]);break;
	  }
	 },[wd,xd,Bd,yd,sd,vd,qp,Rp,bq,aq]);
	},[wd,xd,Bd,yd,td,sd,vd,qp,Rp],"$w$j");
	$M(vd,function(qz){
	 switch(qz.g){
	 case 1:
	  var tz=$hs_writeWideCharOffAddrzh(wd,op,"\n",rp);
	  var rz=$hs_touchzh(xd,tz);
	  var sz=op.add(goog.math.Long.fromBits(1,0));
	  Zp.J(rz,sz);break;
	 case 2:
	  var zz=$hs_writeWideCharOffAddrzh(wd,op,"\r",rp);
	  var yz=$hs_touchzh(xd,zz);
	  var wz=op.add(goog.math.Long.fromBits(1,0));
	  var xz=$hs_writeWideCharOffAddrzh(wd,wz,"\n",yz);
	  var uz=$hs_touchzh(xd,xz);
	  var vz=wz.add(goog.math.Long.fromBits(1,0));
	  Zp.J(uz,vz);break;
	 }
	},[wd,xd,Bd,yd,td,sd,vd,qp,op,rp,Rp,Zp]);break;
       default:
	var Yp=$hs_writeWideCharOffAddrzh(wd,op,Vp,rp);
	var Xp=$hs_touchzh(xd,Yp);
	var Wp=op.add(goog.math.Long.fromBits(1,0));
	Fl.J(Wp,Rp,qp,Xp);
       }
      },[wd,xd,Bd,yd,td,sd,vd,Cd,Fl,qp,op,rp,Rp]);
     },[wd,xd,Bd,yd,td,sd,vd,Cd,Fl,qp,op,rp,Rp]);break;
    case 2:
     var Az=$f(1,function(Bz){
      $M(Bz,function(Cz){
       var Dz=$f(1,function(Ez){
	$$GHCziIOziHandleziInternals_zdwa3.C([Cz,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),op,Ez],function(Fz){
	 var Gz=Fz[0];
	 $r([Gz,$$GHCziTuple_Z0T]);
	},[]);
       },[wd,xd,yd,op,Cz],"sat");
       $A(Dz);
      },[wd,xd,yd,op]);
     },[wd,xd,yd,op],"sat");
     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Az,rp],function(Hz){
      var Iz=Hz[0];
      vl.J(goog.math.Long.fromBits(0,0),Qp,Rp,qp,Iz);
     },[wd,xd,Bd,yd,td,sd,vd,Cd,vl,qp,Qp,Rp]);break;
    }break;
   }
  },[wd,xd,Bd,yd,td,sd,vd,Cd,Fl,vl,qp,op,rp]);
 },[wd,xd,Bd,yd,td,sd,vd,Cd,vl],"$wa8");
 $S(vl,[wd,xd,Bd,yd,td,sd,vd,Fl]);
 var Kz=$t(function(){
  $M(ud,function(Lz){
   switch(Lz.g){
   case 1:
    $R(1,[],"[]");break;
   case 2:
    $A($$GHCziIOziHandleziText$o);break;
   }
  },[]);
 },[ud],"sat");
 Fl.J(goog.math.Long.fromBits(0,0),zd,Kz,Ad);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr7=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hPutStr");
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr6=$t(function(){
 $$GHCziErr_error.J($$GHCziIOziHandleziText$p);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr5=$D(1,function(){
 $r([$$GHCziIOziHandleziTypes_NoBuffering,$$GHCziIOziHandleziText_hPutStr6]);
},"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr4=$f(2,function(Mz,Nz){
 $M(Mz,function(Oz){
  var Pz=Oz.v[6],Qz=Oz.v[8],Rz=Oz.v[9],Sz=Oz.v[14];
  $M(Pz,function(Tz){
   switch(Tz.g){
   case 1:
    var CA=$d(1,[$$GHCziIOziHandleziText_hPutStr5,Sz],"sat");
    $r([Nz,CA]);break;
   default:
    var Uz=$hs_readMutVarzh(Rz,Nz);
    var Vz=Uz[0],Wz=Uz[1];
    var Xz=$hs_readMutVarzh(Qz,Vz);
    var Yz=Xz[0],Zz=Xz[1];
    $M(Wz,function(aA){
     switch(aA.g){
     case 1:
      $M(Zz,function(bA){
       var cA=bA.v[3];
       var qA=cA.multiply(goog.math.Long.fromBits(4,0));
       var dA=qA.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(dA.g){
       case 1:
	var eA=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Yz);
	var fA=eA[0],gA=eA[1];
	var hA=$hs_newPinnedByteArrayzh(qA,fA);
	var iA=hA[0],jA=hA[1];
	var kA=$d(1,[gA],"sat");
	var lA=$d(2,[jA,kA],"sat");
	var nA=$hs_byteArrayContentszh(jA);
	var mA=$d(1,[nA,lA,$$GHCziIOziBuffer_WriteBuffer,cA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
	var oA=$d(1,[Tz,mA],"sat");
	var pA=$d(1,[oA,Sz],"sat");
	$r([iA,pA]);break;
       case 2:
	$A($$GHCziForeignPtr_mallocForeignPtrBytes2);break;
       }
      },[Yz,Tz,Sz]);break;
     case 2:
      var rA=aA.v[0],sA=aA.v[1];
      var BA=$hs_writeMutVarzh(Rz,sA,Yz);
      var tA=$t(function(){
       $M(rA,function(uA){
	var vA=uA.v[0],wA=uA.v[1];
	$M(Zz,function(xA){
	 var yA=xA.v[3];
	 $R(1,[vA,wA,$$GHCziIOziBuffer_WriteBuffer,yA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	},[vA,wA]);
       },[Zz]);
      },[Zz,rA],"sat");
      var zA=$d(1,[Tz,tA],"sat");
      var AA=$d(1,[zA,Sz],"sat");
      $r([BA,AA]);break;
     }
    },[Rz,Zz,Yz,Tz,Sz]);
   }
  },[Rz,Nz,Qz,Sz]);
 },[Nz]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr2=$f(4,function(DA,EA,FA,GA){
 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText_hPutStr7,DA,$$GHCziIOziHandleziText_hPutStr4,GA],function(HA){
  var IA=HA[0],JA=HA[1];
  $M(JA,function(KA){
   var LA=KA.v[0],MA=KA.v[1];
   $M(LA,function(NA){
    var OA=NA.v[0],PA=NA.v[1];
    $M(OA,function(QA){
     switch(QA.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr3.C([DA,EA,IA],function(RA){
       var SA=RA[0];
       $M(FA,function(TA){
	switch(TA.g){
	case 1:
	 $r([SA,$$GHCziTuple_Z0T]);break;
	case 2:
	 $$GHCziIOziHandleziText_zdwa5.J(DA,"\n",SA);break;
	}
       },[DA,SA]);
      },[DA,FA]);break;
     case 2:
      $M(PA,function(UA){
       var VA=UA.v[0],WA=UA.v[1],XA=UA.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(DA,$$GHCziTypes_True,FA,MA,VA,WA,XA,EA,IA);
      },[DA,EA,IA,FA,MA]);break;
     case 3:
      $M(PA,function(YA){
       var ZA=YA.v[0],aB=YA.v[1],bB=YA.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(DA,$$GHCziTypes_False,FA,MA,ZA,aB,bB,EA,IA);
      },[DA,EA,IA,FA,MA]);break;
     }
    },[DA,EA,IA,FA,PA,MA]);
   },[DA,EA,IA,FA,MA]);
  },[DA,EA,IA,FA]);
 },[DA,EA,FA]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStrLn1=$f(3,function(fB,gB,hB){
 $$GHCziIOziHandleziText_hPutStr2.J(fB,gB,$$GHCziTypes_True,hB);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText$b=$F(2,function(WM,XM){
 $M(WM,function(YM){
  var ZM=YM.v[0],aN=YM.v[1];
  $$GHCziException_zdp1Exception.C([ZM,aN],function(bN){
   var cN=bN.v[0],dN=bN.v[1];
   var eN=$hs_eqWordzh(cN,goog.math.Long.fromBits(4053623282,1685460941));
   switch(eN.g){
   case 1:
    $r($hs_raiseIOzh(YM,XM));break;
   case 2:
    var fN=$hs_eqWordzh(dN,goog.math.Long.fromBits(3693590983,2507416641));
    switch(fN.g){
    case 1:
     $r($hs_raiseIOzh(YM,XM));break;
    case 2:
     $M(aN,function(gN){
      var hN=gN.v[1];
      $M(hN,function(iN){
       switch(iN.g){
       case 5:
	$r([XM,$$DataziMaybe_Nothing]);break;
       default:
	$$GHCziIOziException_ioError.J(gN,XM);
       }
      },[XM,gN]);
     },[XM]);break;
    }break;
   }
  },[aN,YM,XM]);
 },[XM]);
},"lvl");
var $$GHCziIOziHandleziText$c=$F(3,function(jN,kN,lN){
 var mN=$f(1,function(nN){
  $M(jN,function(oN){
   var pN=oN.v[13];
   $M(kN,function(qN){
    var rN=qN.v[0],sN=qN.v[1],tN=qN.v[2],uN=qN.v[3],vN=qN.v[4],wN=qN.v[5];
    var xN=wN.subtract(vN);
    switch(xN.toString()){
    case "0":
     $$GHCziIOziHandleziInternals_hLookAheadzu2.C([oN,qN,nN],function(zN){
      var AN=zN[0],BN=zN[1];
      var CN=$d(2,[BN],"sat");
      $r([AN,CN]);
     },[]);break;
    case "1":
     $M(pN,function(DN){
      switch(DN.g){
      case 1:
       var EN=$d(2,[qN],"sat");
       $r([nN,EN]);break;
      case 2:
       var FN=$hs_readWideCharOffAddrzh(rN,vN,nN);
       var GN=FN[0],HN=FN[1];
       var KN=$hs_touchzh(sN,GN);
       $M(HN,function(IN){
	switch(IN.toString()){
	case "\r":
	 var RN=$hs_writeWideCharOffAddrzh(rN,goog.math.Long.fromBits(0,0),"\r",KN);
	 var QN=$hs_touchzh(sN,RN);
	 var LN=$d(1,[rN,sN,tN,uN,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0)],"sat");
	 $$GHCziIOziHandleziInternals_hLookAheadzu2.C([oN,LN,QN],function(MN){
	  var NN=MN[0],ON=MN[1];
	  var PN=$d(2,[ON],"sat");
	  $r([NN,PN]);
	 },[]);break;
	default:
	 var JN=$d(2,[qN],"sat");
	 $r([KN,JN]);
	}
       },[qN,oN,rN,sN,KN,tN,uN]);break;
      }
     },[vN,nN,qN,oN,rN,sN,tN,uN]);break;
    default:
     var yN=$d(2,[qN],"sat");
     $r([nN,yN]);
    }
   },[nN,oN,pN]);
  },[kN,nN]);
 },[jN,kN],"sat");
 $k($hs_catchzh,[mN,$$GHCziIOziHandleziText$b,lN]);
},"a1");
var $$GHCziIOziHandleziText$d=$D(1,function(){
 $r(["\r"]);
},"lvl1");
var $$GHCziIOziHandleziText$e=$D(1,function(){
 $r(["\n"]);
},"lvl2");
var $$GHCziIOziHandleziText$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("commitBuffer");
},"lvl3");
var $$GHCziIOziHandleziText$g=$F(6,function(SN,TN,UN,VN,WN,XN){
 var YN=UN.equals(VN)?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(YN.g){
 case 1:
  var QO=VN.subtract(goog.math.Long.fromBits(1,0));
  var ZN=$hs_readWideCharOffAddrzh(SN,QO,XN);
  var aO=ZN[0],bO=ZN[1];
  var cO=$f(3,function(dO,eO,fO){
   var gO=eO.lessThan(UN)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(gO.g){
   case 1:
    var hO=$hs_readWideCharOffAddrzh(SN,eO,fO);
    var iO=hO[0],jO=hO[1];
    $M(jO,function(kO){
     switch(kO.toString()){
     case "\n":
      var oO=eO.greaterThan(UN)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(oO.g){
      case 1:
       var qO=eO.subtract(goog.math.Long.fromBits(1,0));
       var pO=$d(2,[$$GHCziIOziHandleziText$e,dO],"sat");
       cO.J(pO,qO,iO);break;
      case 2:
       var zO=eO.subtract(goog.math.Long.fromBits(1,0));
       var rO=$hs_readWideCharOffAddrzh(SN,zO,iO);
       var sO=rO[0],tO=rO[1];
       $M(tO,function(uO){
	switch(uO.toString()){
	case "\r":
	 var yO=eO.subtract(goog.math.Long.fromBits(2,0));
	 var xO=$d(2,[$$GHCziIOziHandleziText$e,dO],"sat");
	 cO.J(xO,yO,sO);break;
	default:
	 var wO=eO.subtract(goog.math.Long.fromBits(1,0));
	 var vO=$d(2,[$$GHCziIOziHandleziText$e,dO],"sat");
	 cO.J(vO,wO,sO);
	}
       },[eO,dO,cO,sO]);break;
      }break;
     default:
      var nO=eO.subtract(goog.math.Long.fromBits(1,0));
      var lO=$d(1,[kO],"sat");
      var mO=$d(2,[lO,dO],"sat");
      cO.J(mO,nO,iO);
     }
    },[UN,SN,eO,dO,cO,iO]);break;
   case 2:
    $r([fO,dO]);break;
   }
  },[UN,SN],"$wa8");
  $M(bO,function(AO){
   switch(AO.toString()){
   case "\r":
    var PO=VN.subtract(goog.math.Long.fromBits(2,0));
    cO.C([WN,PO,aO],function(IO){
     var JO=IO[0],KO=IO[1];
     var OO=$hs_touchzh(TN,JO);
     var MO=VN.subtract(goog.math.Long.fromBits(1,0));
     var LO=$d(1,[MO],"sat");
     var NO=$d(1,[KO,LO],"sat");
     $r([OO,NO]);
    },[VN,TN]);break;
   default:
    var HO=VN.subtract(goog.math.Long.fromBits(1,0));
    cO.C([WN,HO,aO],function(BO){
     var CO=BO[0],DO=BO[1];
     var GO=$hs_touchzh(TN,CO);
     var EO=$d(1,[VN],"sat");
     var FO=$d(1,[DO,EO],"sat");
     $r([GO,FO]);
    },[VN,TN]);
   }
  },[VN,cO,WN,aO,TN]);break;
 case 2:
  var RO=$d(1,[WN,$$GHCziIOziHandleziText_hPutBuf3],"sat");
  $r([XN,RO]);break;
 }
},"$wa7");
var $$GHCziIOziHandleziText$h=$D(2,function(){
 $r([$$GHCziIOziHandleziText$d,$$GHCziTypes_ZMZN]);
},"lvl4");
var $$GHCziIOziHandleziText$i=$F(1,function(SO){
 $M(SO,function(TO){
  switch(TO.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var UO=TO.v[0],VO=TO.v[1];
   var WO=$t(function(){
    $$GHCziIOziHandleziText$i.J(VO);
   },[VO],"sat");
   $$GHCziBase_zpzp.J(UO,WO);break;
  }
 },[]);
},"go");
var $$GHCziIOziHandleziText$j=$F(1,function(XO){
 $M(XO,function(YO){
  switch(YO.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var ZO=YO.v[0],aP=YO.v[1];
   var bP=$t(function(){
    $$GHCziIOziHandleziText$j.J(aP);
   },[aP],"sat");
   $$GHCziBase_zpzp.J(ZO,bP);break;
  }
 },[]);
},"go1");
var $$GHCziIOziHandleziText$o=$D(2,function(){
 $r([$$GHCziIOziHandleziText$e,$$GHCziTypes_ZMZN]);
},"lvl8");
var $$GHCziIOziHandleziText$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no buffer!");
},"lvl9");
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
var $$GHCziIOziHandleziTypes_CRLF=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:355:16");
var $$GHCziIOziHandleziTypes_NoBuffering=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:247:4");
var $$GHCziIOziHandleziTypes_ReadHandle=$D(3,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:157:4");
var $$GHCziIOziHandleziTypes_WriteHandle=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:158:4");
var $$GHCziIOziHandleziTypes_BufferListNil=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Handle/Types.hs:148:5");
var $$GHCziList_znzn1=$t(function(){
 $$GHCziErr_error.J($$GHCziList$c);
},[],"in `base:GHC.List'");
var $$GHCziList_init1=$f(2,function(f,g){
 $M(g,function(h){
  switch(h.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var i=h.v[0],j=h.v[1];
   var k=$t(function(){
    $$GHCziList_init1.J(i,j);
   },[i,j],"sat");
   $R(2,[f,k],":");break;
  }
 },[f]);
},[],"in `base:GHC.List'");
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
var $$GHCziList_zdwsplitAtzh=$f(2,function(z,A){
 $M(z,function(B){
  switch(B.toString()){
  case "0":
   $r([$$GHCziTypes_ZMZN,A]);break;
  default:
   $M(A,function(C){
    switch(C.g){
    case 1:
     $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
    case 2:
     var D=C.v[0],E=C.v[1];
     var F=$t(function(){
      var J=B.subtract(goog.math.Long.fromBits(1,0));
      $$GHCziList_zdwsplitAtzh.C([J,E],function(G){
       var H=G[0],I=G[1];
       $R(1,[H,I],"(,)");
      },[]);
     },[B,E],"ds1");
     var K=$t(function(){
      $M(F,function(L){
       var M=L.v[1];
       $A(M);
      },[]);
     },[F],"sat");
     var N=$t(function(){
      $M(F,function(O){
       var P=O.v[0];
       $A(P);
      },[]);
     },[F],"sat");
     var Q=$d(2,[D,N],"sat");
     $r([Q,K]);break;
    }
   },[B]);
  }
 },[A]);
},[],"at libraries/base/GHC/List.lhs:425:9");
var $$GHCziList_reverse1=$f(2,function(W,X){
 $M(W,function(Y){
  switch(Y.g){
  case 1:
   $A(X);break;
  case 2:
   var Z=Y.v[0],a1=Y.v[1];
   var b1=$d(2,[Z,X],"sat");
   $$GHCziList_reverse1.J(a1,b1);break;
  }
 },[X]);
},[],"in `base:GHC.List'");
var $$GHCziList_znznzusub=$f(2,function(c1,d1){
 $M(c1,function(e1){
  switch(e1.g){
  case 1:
   $A($$GHCziList$e);break;
  case 2:
   var f1=e1.v[0],g1=e1.v[1];
   $M(d1,function(h1){
    switch(h1.toString()){
    case "0":
     $A(f1);break;
    default:
     var i1=h1.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziList_znznzusub.J(g1,i1);
    }
   },[g1,f1]);break;
  }
 },[d1]);
},[],"at libraries/base/GHC/List.lhs:596:29");
var $$GHCziList_errorEmptyList=$f(1,function(j1){
 var k1=$t(function(){
  $$GHCziBase_zpzp.J(j1,$$GHCziList$g);
 },[j1],"sat");
 $$GHCziBase_zpzp.C([$$GHCziList$f,k1],function(l1){
  $$GHCziErr_error.J(l1);
 },[]);
},[],"at libraries/base/GHC/List.lhs:738:1");
var $$GHCziList_foldr3=$t(function(){
 $$GHCziList_errorEmptyList.J($$GHCziList$h);
},[],"in `base:GHC.List'");
var $$GHCziList_init2=$t(function(){
 $$GHCziList_errorEmptyList.J($$GHCziList$i);
},[],"in `base:GHC.List'");
var $$GHCziList_tail1=$t(function(){
 $$GHCziList_errorEmptyList.J($$GHCziList$k);
},[],"in `base:GHC.List'");
var $$GHCziList_elem=$f(3,function(Y2,Z2,a3){
 $M(a3,function(b3){
  switch(b3.g){
  case 1:
   $R(1,[],"False");break;
  case 2:
   var c3=b3.v[0],d3=b3.v[1];
   $$GHCziClasses_zeze.C([Y2,Z2,c3],function(e3){
    switch(e3.g){
    case 1:
     $$GHCziList_elem.J(Y2,Z2,d3);break;
    case 2:
     $R(2,[],"True");break;
    }
   },[Y2,Z2,d3]);break;
  }
 },[Y2,Z2]);
},[],"at libraries/base/GHC/List.lhs:547:1");
var $$GHCziList_and=$f(1,function(w3){
 $M(w3,function(x3){
  switch(x3.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   var y3=x3.v[0],z3=x3.v[1];
   $M(y3,function(A3){
    switch(A3.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     $$GHCziList_and.J(z3);break;
    }
   },[z3]);break;
  }
 },[]);
},[],"at libraries/base/GHC/List.lhs:495:1");
var $$GHCziList_zdwbreak=$f(2,function(C3,D3){
 $M(D3,function(E3){
  switch(E3.g){
  case 1:
   $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
  case 2:
   var F3=E3.v[0],G3=E3.v[1];
   C3.C([F3],function(H3){
    switch(H3.g){
    case 1:
     var I3=$t(function(){
      $$GHCziList_zdwbreak.C([C3,G3],function(J3){
       var K3=J3[0],L3=J3[1];
       $R(1,[K3,L3],"(,)");
      },[]);
     },[C3,G3],"ds");
     var M3=$t(function(){
      $M(I3,function(N3){
       var O3=N3.v[1];
       $A(O3);
      },[]);
     },[I3],"sat");
     var P3=$t(function(){
      $M(I3,function(Q3){
       var R3=Q3.v[0];
       $A(R3);
      },[]);
     },[I3],"sat");
     var S3=$d(2,[F3,P3],"sat");
     $r([S3,M3]);break;
    case 2:
     $r([$$GHCziTypes_ZMZN,E3]);break;
    }
   },[F3,C3,G3,E3]);break;
  }
 },[C3]);
},[],"at libraries/base/GHC/List.lhs:464:1");
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
var $$GHCziList_takezuunsafezuUInt=$f(2,function(R4,S4){
 $M(R4,function(T4){
  switch(T4.toString()){
  case "0":
   $R(1,[],"[]");break;
  default:
   $M(S4,function(U4){
    switch(U4.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var V4=U4.v[0],W4=U4.v[1];
     var X4=$t(function(){
      var Y4=T4.subtract(goog.math.Long.fromBits(1,0));
      $$GHCziList_takezuunsafezuUInt.J(Y4,W4);
     },[T4,W4],"sat");
     $R(2,[V4,X4],":");break;
    }
   },[T4]);
  }
 },[S4]);
},[],"at libraries/base/GHC/List.lhs:393:1");
var $$GHCziList_dropWhile=$f(2,function(v5,w5){
 $M(w5,function(x5){
  switch(x5.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var y5=x5.v[0],z5=x5.v[1];
   v5.C([y5],function(A5){
    switch(A5.g){
    case 1:
     $A(x5);break;
    case 2:
     $$GHCziList_dropWhile.J(v5,z5);break;
    }
   },[v5,x5,z5]);break;
  }
 },[v5]);
},[],"at libraries/base/GHC/List.lhs:296:1");
var $$GHCziList_foldr1zuzdsfoldr1=$f(3,function(i7,j7,k7){
 $M(k7,function(l7){
  switch(l7.g){
  case 1:
   $A(j7);break;
  case 2:
   var m7=l7.v[0],n7=l7.v[1];
   var o7=$t(function(){
    $$GHCziList_foldr1zuzdsfoldr1.J(i7,m7,n7);
   },[i7,m7,n7],"sat");
   i7.J(j7,o7);break;
  }
 },[j7,i7]);
},[],"at libraries/base/GHC/List.lhs:202:1");
var $$GHCziList_badHead=$t(function(){
 $$GHCziList_errorEmptyList.J($$GHCziList$p);
},[],"at libraries/base/GHC/List.lhs:63:1");
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
var $$GHCziList$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.(!!): negative index\n");
},"lvl2");
var $$GHCziList$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.(!!): index too large\n");
},"lvl3");
var $$GHCziList$e=$T(function(){
 $$GHCziErr_error.J($$GHCziList$d);
},"lvl4");
var $$GHCziList$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.");
},"at libraries/base/GHC/List.lhs:742:1");
var $$GHCziList$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J(": empty list");
},"lvl5");
var $$GHCziList$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("foldr1");
},"lvl6");
var $$GHCziList$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("init");
},"lvl7");
var $$GHCziList$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("tail");
},"lvl9");
var $$GHCziList$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("head");
},"lvl10");
var $$GHCziNum_zdfNumIntzuzdcfromInteger=$f(1,function(Z){
 $$GHCziIntegerziType_integerToInt.C([Z],function(a1){
  $R(1,[a1],"I#");
 },[]);
},[],"at libraries/base/GHC/Num.lhs:60:5");
var $$GHCziPtr_castPtr=$f(1,function(G){
 $M(G,function(H){
  var I=H.v[0];
  $R(1,[I],"Ptr");
 },[]);
},[],"at libraries/base/GHC/Ptr.lhs:59:1");
var $$GHCziRead_zdfReadAssociativity10=$f(3,function(O,P,Q){
 var R=$t(function(){
  P.J(Q);
 },[Q,P],"ds2");
 var S=$f(1,function(T){
  $M(O,function(U){
   var V=U.v[0],W=U.v[1];
   var X=$t(function(){
    W.J(Q,T);
   },[Q,T,W],"lvl30");
   var Y=$f(1,function(Z){
    $M(Z,function(a1){
     switch(a1.g){
     case 4:
      var b1=a1.v[0];
      $$GHCziBase_eqString.C([V,b1],function(c1){
       switch(c1.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	$A(X);break;
       }
      },[X]);break;
     case 5:
      var d1=a1.v[0];
      $$GHCziBase_eqString.C([V,d1],function(e1){
       switch(e1.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	$A(X);break;
       }
      },[X]);break;
     default:
      $R(3,[],"Fail");
     }
    },[X,V]);
   },[X,V],"k2");
   var f1=$t(function(){
    $$TextziReadziLex_hsLex2.J(Y);
   },[Y],"lvl31");
   var g1=$f(1,function(h1){
    $A(f1);
   },[f1],"k3");
   var i1=$t(function(){
    R.J(T);
   },[R,T],"sat");
   var j1=$f(1,function(k1){
    $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(k1,g1);
   },[g1],"sat");
   var l1=$d(2,[j1],"sat");
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(l1,i1);
  },[Q,R,T]);
 },[Q,R,O],"sat");
 $A(S);
},[],"in `base:GHC.Read'");
var $$GHCziRead_zdwa3=$f(2,function(s1,t1){
 var u1=$t(function(){
  var v1=$f(1,function(w1){
   var x1=$t(function(){
    t1.J(w1);
   },[w1,t1],"lvl31");
   var y1=$f(1,function(z1){
    $M(z1,function(A1){
     switch(A1.g){
     case 3:
      var B1=A1.v[0];
      $M(B1,function(C1){
       switch(C1.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	var D1=C1.v[0],E1=C1.v[1];
	$M(D1,function(F1){
	 var G1=F1.v[0];
	 $M(G1,function(H1){
	  switch(H1.toString()){
	  case ")":
	   $M(E1,function(I1){
	    switch(I1.g){
	    case 1:
	     $A(x1);break;
	    case 2:
	     $R(3,[],"Fail");break;
	    }
	   },[x1]);break;
	  default:
	   $R(3,[],"Fail");
	  }
	 },[x1,E1]);
	},[x1,E1]);break;
       }
      },[x1]);break;
     default:
      $R(3,[],"Fail");
     }
    },[x1]);
   },[x1],"sat");
   $$TextziReadziLex_lex1.J(y1);
  },[t1],"sat");
  s1.J($$TextziParserCombinatorsziReadPrec_minPrec,v1);
 },[t1,s1],"lvl30");
 var J1=$f(1,function(K1){
  $M(K1,function(L1){
   switch(L1.g){
   case 3:
    var M1=L1.v[0];
    $M(M1,function(N1){
     switch(N1.g){
     case 1:
      $R(3,[],"Fail");break;
     case 2:
      var O1=N1.v[0],P1=N1.v[1];
      $M(O1,function(Q1){
       var R1=Q1.v[0];
       $M(R1,function(S1){
	switch(S1.toString()){
	case "(":
	 $M(P1,function(T1){
	  switch(T1.g){
	  case 1:
	   $A(u1);break;
	  case 2:
	   $R(3,[],"Fail");break;
	  }
	 },[u1]);break;
	default:
	 $R(3,[],"Fail");
	}
       },[u1,P1]);
      },[u1,P1]);break;
     }
    },[u1]);break;
   default:
    $R(3,[],"Fail");
   }
  },[u1]);
 },[u1],"sat");
 $$TextziReadziLex_lex1.J(J1);
},[],"in `base:GHC.Read'");
var $$GHCziRead_choose2=$f(2,function(X1,Y1){
 $M(X1,function(Z1){
  switch(Z1.g){
  case 1:
   $A($$GHCziRead$D);break;
  case 2:
   var a2=Z1.v[0],b2=Z1.v[1];
   var c2=$f(1,function(o){
    $$GHCziRead_choose2.J(b2,o);
   },[b2],"sat");
   $$GHCziRead_zdfReadAssociativity10.J(a2,c2,Y1);break;
  }
 },[Y1]);
},[],"in `base:GHC.Read'");
var $$GHCziRead_parens1=$f(2,function(f2,g2){
 var h2=$f(1,function(i2){
  var j2=$t(function(){
   f2.J(i2);
  },[i2,f2],"ds3");
  var k2=$f(1,function(l2){
   var m2=$t(function(){
    $$GHCziRead_zdwa3.J(h2,l2);
   },[l2,h2],"sat");
   j2.C([l2],function(n2){
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(n2,m2);
   },[m2]);
  },[j2,h2],"sat");
  $A(k2);
 },[f2],"a12");
 h2.J(g2);
},[],"in `base:GHC.Read'");
var $$GHCziRead$D=$F(1,function(iO){
 $R(3,[],"Fail");
},"lvl17");
var $$GHCziReal_zdfEnumRatio2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Real'");
var $$GHCziReal_even1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Real'");
var $$GHCziReal_zdfEnumRatio1=$t(function(){
 $$GHCziErr_error.J($$GHCziReal$a);
},[],"in `base:GHC.Real'");
var $$GHCziReal_zdwreduce=$f(2,function(R4,S4){
 $$GHCziIntegerziType_eqInteger.C([S4,$$GHCziReal_even1],function(T4){
  switch(T4.g){
  case 1:
   $$GHCziIntegerziType_gcdInteger.C([R4,S4],function(U4){
    $$GHCziIntegerziType_eqInteger.C([U4,$$GHCziReal_even1],function(V4){
     switch(V4.g){
     case 1:
      $$GHCziIntegerziType_quotInteger.C([R4,U4],function(W4){
       $$GHCziIntegerziType_quotInteger.C([S4,U4],function(X4){
	$r([W4,X4]);
       },[W4]);
      },[S4,U4]);break;
     case 2:
      $A($$GHCziErr_divZZeroError);break;
     }
    },[S4,R4,U4]);
   },[S4,R4]);break;
  case 2:
   $A($$GHCziReal_zdfEnumRatio1);break;
  }
 },[S4,R4]);
},[],"at libraries/base/GHC/Real.lhs:94:1");
var $$GHCziReal_even2=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"in `base:GHC.Real'");
var $$GHCziReal_notANumber=$D(1,function(){
 $r([$$GHCziReal_even1,$$GHCziReal_even1]);
},"at libraries/base/GHC/Real.lhs:64:1");
var $$GHCziReal_infinity=$D(1,function(){
 $r([$$GHCziReal_zdfEnumRatio2,$$GHCziReal_even1]);
},"at libraries/base/GHC/Real.lhs:63:1");
var $$GHCziReal_zczuf2=$f(2,function(uo,vo){
 $$GHCziIntegerziType_remInteger.C([vo,$$GHCziReal_even2],function(wo){
  $$GHCziIntegerziType_eqInteger.C([wo,$$GHCziReal_even1],function(xo){
   switch(xo.g){
   case 1:
    $$GHCziIntegerziType_eqInteger.C([vo,$$GHCziReal_zdfEnumRatio2],function(yo){
     switch(yo.g){
     case 1:
      $$GHCziIntegerziType_minusInteger.C([vo,$$GHCziReal_zdfEnumRatio2],function(zo){
       $$GHCziIntegerziType_quotInteger.C([zo,$$GHCziReal_even2],function(Ao){
	$$GHCziIntegerziType_timesInteger.C([uo,uo],function(Bo){
	 $$GHCziReal$f.J(Bo,Ao,uo);
	},[uo,Ao]);
       },[uo]);
      },[uo]);break;
     case 2:
      $A(uo);break;
     }
    },[vo,uo]);break;
   case 2:
    $$GHCziIntegerziType_quotInteger.C([vo,$$GHCziReal_even2],function(Co){
     $$GHCziIntegerziType_timesInteger.C([uo,uo],function(Do){
      $$GHCziReal_zczuf2.J(Do,Co);
     },[Co]);
    },[uo]);break;
   }
  },[vo,uo]);
 },[vo,uo]);
},[],"at libraries/base/GHC/Real.lhs:444:11");
var $$GHCziReal_zc4=$t(function(){
 $$GHCziErr_error.J($$GHCziReal$g);
},[],"in `base:GHC.Real'");
var $$GHCziReal_zczuzc2=$f(2,function(Eo,Fo){
 $$GHCziIntegerziType_ltInteger.C([Fo,$$GHCziReal_even1],function(Go){
  switch(Go.g){
  case 1:
   $$GHCziIntegerziType_eqInteger.C([Fo,$$GHCziReal_even1],function(Ho){
    switch(Ho.g){
    case 1:
     $$GHCziReal_zczuf2.J(Eo,Fo);break;
    case 2:
     $A($$GHCziReal_zdfEnumRatio2);break;
    }
   },[Fo,Eo]);break;
  case 2:
   $A($$GHCziReal_zc4);break;
  }
 },[Fo,Eo]);
},[],"at libraries/base/GHC/Real.lhs:440:4");
var $$GHCziReal_zdwf1=$f(2,function(Io,Jo){
 var Ko=$hs_remIntzh(Jo,goog.math.Long.fromBits(2,0));
 switch(Ko.toString()){
 case "0":
  var Qo=$hs_quotIntzh(Jo,goog.math.Long.fromBits(2,0));
  $$GHCziIntegerziType_timesInteger.C([Io,Io],function(Po){
   $$GHCziReal_zdwf1.J(Po,Qo);
  },[Qo]);break;
 default:
  $M(Jo,function(Lo){
   switch(Lo.toString()){
   case "1":
    $A(Io);break;
   default:
    var Oo=Lo.subtract(goog.math.Long.fromBits(1,0));
    var No=$hs_quotIntzh(Oo,goog.math.Long.fromBits(2,0));
    $$GHCziIntegerziType_timesInteger.C([Io,Io],function(Mo){
     $$GHCziReal$h.J(Mo,No,Io);
    },[Io,No]);
   }
  },[Io]);
 }
},[],"at libraries/base/GHC/Real.lhs:444:11");
var $$GHCziReal_zc3=$t(function(){
 $$GHCziErr_error.J($$GHCziReal$g);
},[],"in `base:GHC.Real'");
var $$GHCziReal_fromIntegralzuzdsfromIntegral=$f(1,function(at){
 $$GHCziIntegerziType_integerToInt.C([at],function(bt){
  $R(1,[bt],"I#");
 },[]);
},[],"at libraries/base/GHC/Real.lhs:400:1");
var $$GHCziReal$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Ratio.%: zero denominator");
},"lvl");
var $$GHCziReal$f=$F(3,function(jG,kG,lG){
 $$GHCziIntegerziType_remInteger.C([kG,$$GHCziReal_even2],function(mG){
  $$GHCziIntegerziType_eqInteger.C([mG,$$GHCziReal_even1],function(nG){
   switch(nG.g){
   case 1:
    $$GHCziIntegerziType_eqInteger.C([kG,$$GHCziReal_zdfEnumRatio2],function(oG){
     switch(oG.g){
     case 1:
      $$GHCziIntegerziType_timesInteger.C([jG,lG],function(pG){
       $$GHCziIntegerziType_minusInteger.C([kG,$$GHCziReal_zdfEnumRatio2],function(qG){
	$$GHCziIntegerziType_quotInteger.C([qG,$$GHCziReal_even2],function(rG){
	 $$GHCziIntegerziType_timesInteger.C([jG,jG],function(sG){
	  $$GHCziReal$f.J(sG,rG,pG);
	 },[pG,rG]);
	},[jG,pG]);
       },[jG,pG]);
      },[kG,jG]);break;
     case 2:
      $$GHCziIntegerziType_timesInteger.J(jG,lG);break;
     }
    },[kG,jG,lG]);break;
   case 2:
    $$GHCziIntegerziType_quotInteger.C([kG,$$GHCziReal_even2],function(tG){
     $$GHCziIntegerziType_timesInteger.C([jG,jG],function(uG){
      $$GHCziReal$f.J(uG,tG,lG);
     },[lG,tG]);
    },[jG,lG]);break;
   }
  },[kG,jG,lG]);
 },[kG,jG,lG]);
},"at libraries/base/GHC/Real.lhs:448:11");
var $$GHCziReal$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Negative exponent");
},"lvl5");
var $$GHCziReal$h=$F(3,function(vG,wG,xG){
 var yG=$hs_remIntzh(wG,goog.math.Long.fromBits(2,0));
 switch(yG.toString()){
 case "0":
  var FG=$hs_quotIntzh(wG,goog.math.Long.fromBits(2,0));
  $$GHCziIntegerziType_timesInteger.C([vG,vG],function(EG){
   $$GHCziReal$h.J(EG,FG,xG);
  },[xG,FG]);break;
 default:
  $M(wG,function(zG){
   switch(zG.toString()){
   case "1":
    $$GHCziIntegerziType_timesInteger.J(vG,xG);break;
   default:
    $$GHCziIntegerziType_timesInteger.C([vG,xG],function(AG){
     var DG=zG.subtract(goog.math.Long.fromBits(1,0));
     var CG=$hs_quotIntzh(DG,goog.math.Long.fromBits(2,0));
     $$GHCziIntegerziType_timesInteger.C([vG,vG],function(BG){
      $$GHCziReal$h.J(BG,CG,AG);
     },[AG,CG]);
    },[vG,zG]);
   }
  },[vG,xG]);
 }
},"at libraries/base/GHC/Real.lhs:448:11");
var $$GHCziST_runSTRep=$f(1,function(X){
 X.C([$$GHCziPrim_realWorldzh],function(Y){
  var Z=Y[1];
  $A(Z);
 },[]);
},[],"at libraries/base/GHC/ST.lhs:173:1");
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
var $$GHCziShow_asciiTab65=$t(function(){
 $$GHCziCString_unpackCStringzh.J("NUL");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab64=$t(function(){
 $$GHCziCString_unpackCStringzh.J("SOH");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab63=$t(function(){
 $$GHCziCString_unpackCStringzh.J("STX");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab62=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ETX");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab61=$t(function(){
 $$GHCziCString_unpackCStringzh.J("EOT");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab60=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ENQ");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab59=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ACK");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab58=$t(function(){
 $$GHCziCString_unpackCStringzh.J("BEL");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab57=$t(function(){
 $$GHCziCString_unpackCStringzh.J("BS");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab56=$t(function(){
 $$GHCziCString_unpackCStringzh.J("HT");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab55=$t(function(){
 $$GHCziCString_unpackCStringzh.J("LF");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab54=$t(function(){
 $$GHCziCString_unpackCStringzh.J("VT");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab53=$t(function(){
 $$GHCziCString_unpackCStringzh.J("FF");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab52=$t(function(){
 $$GHCziCString_unpackCStringzh.J("CR");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab51=$t(function(){
 $$GHCziCString_unpackCStringzh.J("SO");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab50=$t(function(){
 $$GHCziCString_unpackCStringzh.J("SI");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab49=$t(function(){
 $$GHCziCString_unpackCStringzh.J("DLE");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab48=$t(function(){
 $$GHCziCString_unpackCStringzh.J("DC1");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab47=$t(function(){
 $$GHCziCString_unpackCStringzh.J("DC2");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab46=$t(function(){
 $$GHCziCString_unpackCStringzh.J("DC3");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab45=$t(function(){
 $$GHCziCString_unpackCStringzh.J("DC4");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab44=$t(function(){
 $$GHCziCString_unpackCStringzh.J("NAK");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab43=$t(function(){
 $$GHCziCString_unpackCStringzh.J("SYN");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab42=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ETB");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab41=$t(function(){
 $$GHCziCString_unpackCStringzh.J("CAN");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab40=$t(function(){
 $$GHCziCString_unpackCStringzh.J("EM");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab39=$t(function(){
 $$GHCziCString_unpackCStringzh.J("SUB");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab38=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ESC");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab37=$t(function(){
 $$GHCziCString_unpackCStringzh.J("FS");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab36=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GS");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab35=$t(function(){
 $$GHCziCString_unpackCStringzh.J("RS");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab34=$t(function(){
 $$GHCziCString_unpackCStringzh.J("US");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab33=$t(function(){
 $$GHCziCString_unpackCStringzh.J("SP");
},[],"in `base:GHC.Show'");
var $$GHCziShow_asciiTab32=$D(2,function(){
 $r([$$GHCziShow_asciiTab33,$$GHCziTypes_ZMZN]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab31=$D(2,function(){
 $r([$$GHCziShow_asciiTab34,$$GHCziShow_asciiTab32]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab30=$D(2,function(){
 $r([$$GHCziShow_asciiTab35,$$GHCziShow_asciiTab31]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab29=$D(2,function(){
 $r([$$GHCziShow_asciiTab36,$$GHCziShow_asciiTab30]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab28=$D(2,function(){
 $r([$$GHCziShow_asciiTab37,$$GHCziShow_asciiTab29]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab27=$D(2,function(){
 $r([$$GHCziShow_asciiTab38,$$GHCziShow_asciiTab28]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab26=$D(2,function(){
 $r([$$GHCziShow_asciiTab39,$$GHCziShow_asciiTab27]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab25=$D(2,function(){
 $r([$$GHCziShow_asciiTab40,$$GHCziShow_asciiTab26]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab24=$D(2,function(){
 $r([$$GHCziShow_asciiTab41,$$GHCziShow_asciiTab25]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab23=$D(2,function(){
 $r([$$GHCziShow_asciiTab42,$$GHCziShow_asciiTab24]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab22=$D(2,function(){
 $r([$$GHCziShow_asciiTab43,$$GHCziShow_asciiTab23]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab21=$D(2,function(){
 $r([$$GHCziShow_asciiTab44,$$GHCziShow_asciiTab22]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab20=$D(2,function(){
 $r([$$GHCziShow_asciiTab45,$$GHCziShow_asciiTab21]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab19=$D(2,function(){
 $r([$$GHCziShow_asciiTab46,$$GHCziShow_asciiTab20]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab18=$D(2,function(){
 $r([$$GHCziShow_asciiTab47,$$GHCziShow_asciiTab19]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab17=$D(2,function(){
 $r([$$GHCziShow_asciiTab48,$$GHCziShow_asciiTab18]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab16=$D(2,function(){
 $r([$$GHCziShow_asciiTab49,$$GHCziShow_asciiTab17]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab15=$D(2,function(){
 $r([$$GHCziShow_asciiTab50,$$GHCziShow_asciiTab16]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab14=$D(2,function(){
 $r([$$GHCziShow_asciiTab51,$$GHCziShow_asciiTab15]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab13=$D(2,function(){
 $r([$$GHCziShow_asciiTab52,$$GHCziShow_asciiTab14]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab12=$D(2,function(){
 $r([$$GHCziShow_asciiTab53,$$GHCziShow_asciiTab13]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab11=$D(2,function(){
 $r([$$GHCziShow_asciiTab54,$$GHCziShow_asciiTab12]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab10=$D(2,function(){
 $r([$$GHCziShow_asciiTab55,$$GHCziShow_asciiTab11]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab9=$D(2,function(){
 $r([$$GHCziShow_asciiTab56,$$GHCziShow_asciiTab10]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab8=$D(2,function(){
 $r([$$GHCziShow_asciiTab57,$$GHCziShow_asciiTab9]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab7=$D(2,function(){
 $r([$$GHCziShow_asciiTab58,$$GHCziShow_asciiTab8]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab6=$D(2,function(){
 $r([$$GHCziShow_asciiTab59,$$GHCziShow_asciiTab7]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab5=$D(2,function(){
 $r([$$GHCziShow_asciiTab60,$$GHCziShow_asciiTab6]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab4=$D(2,function(){
 $r([$$GHCziShow_asciiTab61,$$GHCziShow_asciiTab5]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab3=$D(2,function(){
 $r([$$GHCziShow_asciiTab62,$$GHCziShow_asciiTab4]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab2=$D(2,function(){
 $r([$$GHCziShow_asciiTab63,$$GHCziShow_asciiTab3]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab1=$D(2,function(){
 $r([$$GHCziShow_asciiTab64,$$GHCziShow_asciiTab2]);
},"in `base:GHC.Show'");
var $$GHCziShow_asciiTab=$D(2,function(){
 $r([$$GHCziShow_asciiTab65,$$GHCziShow_asciiTab1]);
},"at libraries/base/GHC/Show.lhs:403:1");
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
var $$GHCziShow_shows30=$t(function(){
 $$GHCziCString_unpackCStringzh.J("'\\''");
},[],"in `base:GHC.Show'");
var $$GHCziShow_shows31=$D(1,function(){
 $r(["'"]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows25=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows28=$D(1,function(){
 $r([goog.math.Long.fromBits(2808348672,232830643)]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows27=$t(function(){
 $$GHCziIntegerziType_mkInteger.J($$GHCziTypes_True,$$GHCziShow$t);
},[],"in `base:GHC.Show'");
var $$GHCziShow_shows26=$t(function(){
 $$GHCziErr_error.J($$GHCziShow$u);
},[],"in `base:GHC.Show'");
var $$GHCziShow_showszujsplitf=$f(2,function(Z,a1){
 $$GHCziIntegerziType_gtInteger.C([Z,a1],function(b1){
  switch(b1.g){
  case 1:
   $$GHCziIntegerziType_timesInteger.C([Z,Z],function(c1){
    $$GHCziShow_showszujsplitf.C([c1,a1],function(d1){
     switch(d1.g){
     case 1:
      $A($$GHCziShow$w);break;
     case 2:
      var e1=d1.v[0],f1=d1.v[1];
      $$GHCziIntegerziType_quotRemInteger.C([e1,Z],function(g1){
       var h1=g1[0],i1=g1[1];
       $$GHCziIntegerziType_gtInteger.C([h1,$$GHCziShow_shows25],function(j1){
	switch(j1.g){
	case 1:
	 var k1=$t(function(){
	  $$GHCziShow$x.J(Z,f1);
	 },[Z,f1],"sat");
	 $R(2,[i1,k1],":");break;
	case 2:
	 var l1=$t(function(){
	  $$GHCziShow$x.J(Z,f1);
	 },[Z,f1],"sat");
	 var m1=$d(2,[i1,l1],"sat");
	 $R(2,[h1,m1],":");break;
	}
       },[Z,h1,i1,f1]);
      },[Z,f1]);break;
     }
    },[Z]);
   },[Z,a1]);break;
  case 2:
   $R(2,[a1,$$GHCziTypes_ZMZN],":");break;
  }
 },[Z,a1]);
},[],"at libraries/base/GHC/Show.lhs:491:5");
var $$GHCziShow_zdwjhead=$f(2,function(n1,o1){
 var p1=n1.lessThan(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(p1.g){
 case 1:
  var v1=$hs_remIntzh(n1,goog.math.Long.fromBits(10,0));
  var u1=goog.math.Long.fromBits(48,0).add(v1);
  var r1=$hs_chrzh(u1);
  var q1=$d(1,[r1],"sat");
  var s1=$d(2,[q1,o1],"sat");
  var t1=$hs_quotIntzh(n1,goog.math.Long.fromBits(10,0));
  $$GHCziShow_zdwjhead.J(t1,s1);break;
 case 2:
  var y1=goog.math.Long.fromBits(48,0).add(n1);
  var x1=$hs_chrzh(y1);
  var w1=$d(1,[x1],"sat");
  $R(2,[w1,o1],":");break;
 }
},[],"at libraries/base/GHC/Show.lhs:534:5");
var $$GHCziShow_zdwjblockzq=$f(3,function(z1,A1,B1){
 $M(z1,function(C1){
  switch(C1.toString()){
  case "1":
   var M1=goog.math.Long.fromBits(48,0).add(A1);
   var L1=$hs_chrzh(M1);
   var K1=$d(1,[L1],"sat");
   $R(2,[K1,B1],":");break;
  default:
   var J1=$hs_remIntzh(A1,goog.math.Long.fromBits(10,0));
   var I1=goog.math.Long.fromBits(48,0).add(J1);
   var E1=$hs_chrzh(I1);
   var D1=$d(1,[E1],"sat");
   var F1=$d(2,[D1,B1],"sat");
   var H1=$hs_quotIntzh(A1,goog.math.Long.fromBits(10,0));
   var G1=C1.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziShow_zdwjblockzq.J(G1,H1,F1);
  }
 },[A1,B1]);
},[],"at libraries/base/GHC/Show.lhs:545:5");
var $$GHCziShow_showszujprintb=$f(2,function(N1,O1){
 $M(N1,function(P1){
  switch(P1.g){
  case 1:
   $A(O1);break;
  case 2:
   var Q1=P1.v[0],R1=P1.v[1];
   $$GHCziIntegerziType_quotRemInteger.C([Q1,$$GHCziShow_shows28],function(S1){
    var T1=S1[0],U1=S1[1];
    $$GHCziIntegerziType_integerToInt.C([T1],function(Y1){
     var V1=$t(function(){
      $$GHCziIntegerziType_integerToInt.C([U1],function(X1){
       var W1=$t(function(){
	$$GHCziShow_showszujprintb.J(R1,O1);
       },[O1,R1],"sat");
       $$GHCziShow_zdwjblockzq.J(goog.math.Long.fromBits(18,0),X1,W1);
      },[O1,R1]);
     },[O1,U1,R1],"sat");
     $$GHCziShow_zdwjblockzq.J(goog.math.Long.fromBits(18,0),Y1,V1);
    },[O1,U1,R1]);
   },[O1,R1]);break;
  }
 },[O1]);
},[],"at libraries/base/GHC/Show.lhs:523:5");
var $$GHCziShow_showszuintegerToStringzq=$f(2,function(Z1,a2){
 $$GHCziIntegerziType_ltInteger.C([Z1,$$GHCziShow_shows28],function(b2){
  switch(b2.g){
  case 1:
   $$GHCziShow_showszujsplitf.C([$$GHCziShow_shows27,Z1],function(c2){
    switch(c2.g){
    case 1:
     $A($$GHCziShow_shows26);break;
    case 2:
     var d2=c2.v[0],e2=c2.v[1];
     $$GHCziIntegerziType_quotRemInteger.C([d2,$$GHCziShow_shows28],function(f2){
      var g2=f2[0],h2=f2[1];
      $$GHCziIntegerziType_integerToInt.C([g2],function(o2){
       var i2=o2.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(i2.g){
       case 1:
	$$GHCziIntegerziType_integerToInt.C([h2],function(k2){
	 var j2=$t(function(){
	  $$GHCziShow_showszujprintb.J(e2,a2);
	 },[e2,a2],"sat");
	 $$GHCziShow_zdwjhead.J(k2,j2);
	},[e2,a2]);break;
       case 2:
	var l2=$t(function(){
	 $$GHCziIntegerziType_integerToInt.C([h2],function(n2){
	  var m2=$t(function(){
	   $$GHCziShow_showszujprintb.J(e2,a2);
	  },[e2,a2],"sat");
	  $$GHCziShow_zdwjblockzq.J(goog.math.Long.fromBits(18,0),n2,m2);
	 },[e2,a2]);
	},[h2,e2,a2],"sat");
	$$GHCziShow_zdwjhead.J(o2,l2);break;
       }
      },[h2,e2,a2]);
     },[e2,a2]);break;
    }
   },[a2]);break;
  case 2:
   $$GHCziIntegerziType_integerToInt.C([Z1],function(p2){
    $$GHCziShow_zdwjhead.J(p2,a2);
   },[a2]);break;
  }
 },[Z1,a2]);
},[],"at libraries/base/GHC/Show.lhs:481:5");
var $$GHCziShow_integerToString=$f(2,function(q2,r2){
 $$GHCziIntegerziType_ltInteger.C([q2,$$GHCziShow_shows25],function(s2){
  switch(s2.g){
  case 1:
   $$GHCziShow_showszuintegerToStringzq.J(q2,r2);break;
  case 2:
   var t2=$t(function(){
    $$GHCziIntegerziType_negateInteger.C([q2],function(u2){
     $$GHCziShow_showszuintegerToStringzq.J(u2,r2);
    },[r2]);
   },[q2,r2],"sat");
   $R(2,[$$GHCziShow_shows3,t2],":");break;
  }
 },[q2,r2]);
},[],"at libraries/base/GHC/Show.lhs:476:1");
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
var $$GHCziShow_zdwzdcshowsPrec=$f(3,function(i3,j3,k3){
 var l3=i3.greaterThan(goog.math.Long.fromBits(6,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(l3.g){
 case 1:
  $$GHCziShow_integerToString.J(j3,k3);break;
 case 2:
  $$GHCziIntegerziType_ltInteger.C([j3,$$GHCziShow_shows25],function(m3){
   switch(m3.g){
   case 1:
    $$GHCziShow_integerToString.J(j3,k3);break;
   case 2:
    var n3=$t(function(){
     var o3=$d(2,[$$GHCziShow_shows1,k3],"sat");
     $$GHCziShow_integerToString.J(j3,o3);
    },[j3,k3],"sat");
    $R(2,[$$GHCziShow_shows2,n3],":");break;
   }
  },[j3,k3]);break;
 }
},[],"at libraries/base/GHC/Show.lhs:142:5");
var $$GHCziShow_zdwshowLitChar=$f(2,function(S5,T5){
 var U5=S5>"\x7f"?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(U5.g){
 case 1:
  $M(S5,function(V5){
   switch(V5.toString()){
   case "\\":
    $$GHCziBase_zpzp.J($$GHCziShow$c,T5);break;
   case "\x7f":
    $$GHCziBase_zpzp.J($$GHCziShow$b,T5);break;
   default:
    var W5=V5>=" "?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(W5.g){
    case 1:
     $M(V5,function(X5){
      switch(X5.toString()){
      case "\x07":
       $$GHCziBase_zpzp.J($$GHCziShow$k,T5);break;
      case "\b":
       $$GHCziBase_zpzp.J($$GHCziShow$j,T5);break;
      case "\t":
       $$GHCziBase_zpzp.J($$GHCziShow$i,T5);break;
      case "\n":
       $$GHCziBase_zpzp.J($$GHCziShow$h,T5);break;
      case "\v":
       $$GHCziBase_zpzp.J($$GHCziShow$g,T5);break;
      case "\f":
       $$GHCziBase_zpzp.J($$GHCziShow$f,T5);break;
      case "\r":
       $$GHCziBase_zpzp.J($$GHCziShow$e,T5);break;
      case "\x0e":
       var c6=$t(function(){
	$M(T5,function(d6){
	 switch(d6.g){
	 case 1:
	  $R(1,[],"[]");break;
	 case 2:
	  var e6=d6.v[0];
	  $M(e6,function(f6){
	   var g6=f6.v[0];
	   $M(g6,function(h6){
	    switch(h6.toString()){
	    case "H":
	     $$GHCziCString_unpackAppendCStringzh.J("\\&",d6);break;
	    default:
	     $A(d6);
	    }
	   },[d6]);
	  },[d6]);break;
	 }
	},[]);
       },[T5],"sat");
       $$GHCziBase_zpzp.J($$GHCziShow$d,c6);break;
      default:
       var Y5=$t(function(){
	var a6=$hs_ordzh(X5);
	var Z5=a6.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Z5.g){
	case 1:
	 $$GHCziList_znznzusub.J($$GHCziShow_asciiTab,a6);break;
	case 2:
	 $A($$GHCziList_znzn1);break;
	}
       },[X5],"sat");
       var b6=$d(2,[$$GHCziShow$a,Y5],"sat");
       $$GHCziBase_zpzp.J(b6,T5);
      }
     },[T5]);break;
    case 2:
     var i6=$d(1,[V5],"sat");
     $R(2,[i6,T5],":");break;
    }
   }
  },[T5]);break;
 case 2:
  var j6=$t(function(){
   var k6=$t(function(){
    $M(T5,function(l6){
     switch(l6.g){
     case 1:
      $R(1,[],"[]");break;
     case 2:
      var m6=l6.v[0];
      $M(m6,function(n6){
       var o6=n6.v[0];
       var p6=o6>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(p6.g){
       case 1:
	$A(l6);break;
       case 2:
	var q6=o6<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(q6.g){
	case 1:
	 $A(l6);break;
	case 2:
	 $$GHCziCString_unpackAppendCStringzh.J("\\&",l6);break;
	}break;
       }
      },[l6]);break;
     }
    },[]);
   },[T5],"sat");
   var r6=$hs_ordzh(S5);
   $$GHCziShow_itos.J(r6,k6);
  },[S5,T5],"sat");
  $R(2,[$$GHCziShow$a,j6],":");break;
 }
},[],"at libraries/base/GHC/Show.lhs:348:1");
var $$GHCziShow_zdfShowIntzuzdcshowList=$f(2,function(q8,r8){
 $M(q8,function(s8){
  switch(s8.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",r8);break;
  case 2:
   var t8=s8.v[0],u8=s8.v[1];
   var v8=$t(function(){
    $M(t8,function(w8){
     var x8=w8.v[0];
     var y8=$t(function(){
      var z8=$d(2,[$$GHCziShow_showListzuzu2,r8],"lvl19");
      var A8=$f(1,function(B8){
       $M(B8,function(C8){
	switch(C8.g){
	case 1:
	 $A(z8);break;
	case 2:
	 var D8=C8.v[0],E8=C8.v[1];
	 var F8=$t(function(){
	  $M(D8,function(G8){
	   var H8=G8.v[0];
	   var I8=$t(function(){
	    A8.J(E8);
	   },[E8,A8],"sat");
	   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),H8,I8);
	  },[E8,A8]);
	 },[D8,E8,A8],"sat");
	 $R(2,[$$GHCziShow_showListzuzu1,F8],":");break;
	}
       },[z8,A8]);
      },[z8],"showl");
      A8.J(u8);
     },[r8,u8],"sat");
     $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),x8,y8);
    },[r8,u8]);
   },[r8,t8,u8],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,v8],":");break;
  }
 },[r8]);
},[],"at libraries/base/GHC/Show.lhs:157:5");
var $$GHCziShow_zdfShowIntzuzdcshow=$f(1,function(J8){
 $M(J8,function(K8){
  var L8=K8.v[0];
  $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),L8,$$GHCziTypes_ZMZN);
 },[]);
},[],"at libraries/base/GHC/Show.lhs:150:5");
var $$GHCziShow_zdfShowInt=$D(1,function(){
 $r([$$GHCziShow_showSignedInt,$$GHCziShow_zdfShowIntzuzdcshow,$$GHCziShow_zdfShowIntzuzdcshowList]);
},"at libraries/base/GHC/Show.lhs:206:10");
var $$GHCziShow_zdfShowIntegerzuzdcshow=$f(1,function(M8){
 $$GHCziShow_zdwzdcshowsPrec.J(goog.math.Long.fromBits(0,0),M8,$$GHCziTypes_ZMZN);
},[],"at libraries/base/GHC/Show.lhs:150:5");
var $$GHCziShow_zdfShowZLz2cUZR1=$f(3,function(T8,U8,V8){
 var W8=$t(function(){
  U8.J(V8);
 },[V8,U8],"sat");
 var X8=$d(2,[$$GHCziShow_showListzuzu1,W8],"sat");
 T8.J(X8);
},[],"in `base:GHC.Show'");
var $$GHCziShow_showzutuple=$f(1,function(Y8){
 var Z8=$t(function(){
  $M(Y8,function(a9){
   switch(a9.g){
   case 1:
    $A($$GHCziList_foldr3);break;
   case 2:
    var b9=a9.v[0],c9=a9.v[1];
    $M(c9,function(d9){
     switch(d9.g){
     case 1:
      $A(b9);break;
     case 2:
      var e9=d9.v[0],f9=d9.v[1];
      var g9=$t(function(){
       $$GHCziList_foldr1zuzdsfoldr1.J($$GHCziShow_zdfShowZLz2cUZR1,e9,f9);
      },[e9,f9],"r");
      var h9=$f(1,function(i9){
       var j9=$t(function(){
	g9.J(i9);
       },[g9,i9],"sat");
       var k9=$d(2,[$$GHCziShow_showListzuzu1,j9],"sat");
       b9.J(k9);
      },[b9,g9],"sat");
      $A(h9);break;
     }
    },[b9]);break;
   }
  },[]);
 },[Y8],"f");
 var l9=$f(1,function(m9){
  var n9=$t(function(){
   var o9=$d(2,[$$GHCziShow_shows1,m9],"sat");
   Z8.J(o9);
  },[Z8,m9],"sat");
  $R(2,[$$GHCziShow_shows2,n9],":");
 },[Z8],"sat");
 $A(l9);
},[],"at libraries/base/GHC/Show.lhs:303:1");
var $$GHCziShow_zdwzdcshowsPrec1=$f(5,function(H9,I9,J9,K9,L9){
 var M9=$t(function(){
  $$GHCziShow_showsPrec.J(I9,$$GHCziBase_zzeroInt,K9);
 },[I9,K9],"sat");
 var N9=$d(2,[M9,$$GHCziTypes_ZMZN],"sat");
 var O9=$t(function(){
  $$GHCziShow_showsPrec.J(H9,$$GHCziBase_zzeroInt,J9);
 },[H9,J9],"sat");
 var P9=$d(2,[O9,N9],"sat");
 $$GHCziShow_showzutuple.J(P9,L9);
},[],"at libraries/base/GHC/Show.lhs:142:5");
var $$GHCziShow_intToDigit1=$f(1,function(gB){
 var hB=$t(function(){
  $$GHCziShow_itos.J(gB,$$GHCziTypes_ZMZN);
 },[gB],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Char.intToDigit: not a digit ",hB],function(iB){
  $$GHCziErr_error.J(iB);
 },[]);
},[],"in `base:GHC.Show'");
var $$GHCziShow_zdwintToDigit=$f(1,function(jB){
 var kB=$f(1,function(lB){
  var mB=jB.greaterThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(mB.g){
  case 1:
   $$GHCziShow_intToDigit1.J(jB);break;
  case 2:
   var nB=jB.lessThanOrEqual(goog.math.Long.fromBits(15,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(nB.g){
   case 1:
    $$GHCziShow_intToDigit1.J(jB);break;
   case 2:
    var oB=goog.math.Long.fromBits(87,0).add(jB);
    $r($hs_chrzh(oB));break;
   }break;
  }
 },[jB],"$w$j");
 var pB=jB.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(pB.g){
 case 1:
  kB.J($$GHCziPrim_realWorldzh);break;
 case 2:
  var qB=jB.lessThanOrEqual(goog.math.Long.fromBits(9,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(qB.g){
  case 1:
   kB.J($$GHCziPrim_realWorldzh);break;
  case 2:
   var rB=goog.math.Long.fromBits(48,0).add(jB);
   $r($hs_chrzh(rB));break;
  }break;
 }
},[],"at libraries/base/GHC/Show.lhs:418:1");
var $$GHCziShow_intToDigit=$f(1,function(sB){
 $M(sB,function(tB){
  var uB=tB.v[0];
  $$GHCziShow_zdwintToDigit.C([uB],function(vB){
   $R(1,[vB],"C#");
  },[]);
 },[]);
},[],"at libraries/base/GHC/Show.lhs:418:1");
var $$GHCziShow$a=$D(1,function(){
 $r(["\\"]);
},"lvl");
var $$GHCziShow$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\DEL");
},"lvl1");
var $$GHCziShow$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\\\");
},"lvl2");
var $$GHCziShow$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\SO");
},"lvl3");
var $$GHCziShow$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\r");
},"lvl4");
var $$GHCziShow$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\f");
},"lvl5");
var $$GHCziShow$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\v");
},"lvl6");
var $$GHCziShow$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\n");
},"lvl7");
var $$GHCziShow$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\t");
},"lvl8");
var $$GHCziShow$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\b");
},"lvl9");
var $$GHCziShow$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("\\a");
},"lvl10");
var $$GHCziShow$m=$D(1,function(){
 $r([goog.math.Long.fromBits(100974195,0)]);
},"sat");
var $$GHCziShow$n=$D(2,function(){
 $r([$$GHCziShow$m,$$GHCziTypes_ZMZN]);
},"sat");
var $$GHCziShow$o=$D(1,function(){
 $r([goog.math.Long.fromBits(1864637526,0)]);
},"sat");
var $$GHCziShow$p=$D(2,function(){
 $r([$$GHCziShow$o,$$GHCziShow$n]);
},"sat");
var $$GHCziShow$q=$D(1,function(){
 $r([goog.math.Long.fromBits(1721187872,0)]);
},"sat");
var $$GHCziShow$r=$D(2,function(){
 $r([$$GHCziShow$q,$$GHCziShow$p]);
},"sat");
var $$GHCziShow$s=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"sat");
var $$GHCziShow$t=$D(2,function(){
 $r([$$GHCziShow$s,$$GHCziShow$r]);
},"sat");
var $$GHCziShow$u=$T(function(){
 $$GHCziCString_unpackCStringzh.J("jprinth []");
},"lvl12");
var $$GHCziShow$v=$T(function(){
 $$GHCziCString_unpackCStringzh.J("jsplith: []");
},"lvl13");
var $$GHCziShow$w=$T(function(){
 $$GHCziErr_error.J($$GHCziShow$v);
},"lvl14");
var $$GHCziShow$x=$F(2,function(fC,gC){
 $M(gC,function(hC){
  switch(hC.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var iC=hC.v[0],jC=hC.v[1];
   $$GHCziIntegerziType_quotRemInteger.C([iC,fC],function(kC){
    var lC=kC[0],mC=kC[1];
    var nC=$t(function(){
     $$GHCziShow$x.J(fC,jC);
    },[fC,jC],"sat");
    var oC=$d(2,[mC,nC],"sat");
    $R(2,[lC,oC],":");
   },[fC,jC]);break;
  }
 },[fC]);
},"at libraries/base/GHC/Show.lhs:504:5");
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
var $$GHCziTopHandler_runMainIO2=$t(function(){
 $$DataziTypeableziInternal_typeOfDefault.J($$DataziTypeableziInternal_zdfTypeable1IOzuzdctypeOf1,$$DataziTypeableziInternal_zdfTypeableZLZRzuzdctypeOf);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_runMainIO4=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_flushStdHandles3=$f(1,function(a){
 $$GHCziIOziHandle_hFlush1.J($$GHCziIOziHandleziFD_stderr,a);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_flushStdHandles2=$f(2,function(b,c){
 $M(b,function(d){
  $r([c,$$GHCziTuple_Z0T]);
 },[c]);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_flushStdHandles5=$f(1,function(e){
 $$GHCziIOziHandle_hFlush1.J($$GHCziIOziHandleziFD_stdout,e);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_flushStdHandles4=$f(2,function(f,g){
 $M(f,function(h){
  $r([g,$$GHCziTuple_Z0T]);
 },[g]);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_runIO2=$f(2,function(m,n){
 $$GHCziTopHandler_runIO3.J(m,n);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_runIO3=$f(2,function(o,p){
 var q=$f(1,function(l){
  $$GHCziTopHandler$f.J($$GHCziTopHandler$a,o,l);
 },[o],"sat");
 $k($hs_catchzh,[q,$$GHCziTopHandler_runIO2,p]);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_runMainIO3=$t(function(){
 $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException.J($$GHCziIOziException_UserInterrupt);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler_runMainIO1=$f(2,function(H,I){
 var J=$f(1,function(K){
  var L=$hs_myThreadIdzh(K);
  var M=L[0],N=L[1];
  var O=$d(1,[N],"sat");
  var P=$hs_mkWeakzh(N,O,goog.math.Long.fromBits(0,0),M);
  var Q=P[0],R=P[1];
  var S=$f(1,function(T){
   var U=$hs_deRefWeakzh(R,T);
   var V=U[0],W=U[1],X=U[2];
   $M(W,function(Y){
    switch(Y.toString()){
    case "0":
     $r([V,$$GHCziTuple_Z0T]);break;
    default:
     $M(X,function(Z){
      var a1=Z.v[0];
      var b1=$hs_killThreadzh(a1,$$GHCziTopHandler_runMainIO3,V);
      $r([b1,$$GHCziTuple_Z0T]);
     },[V]);
    }
   },[X,V]);
  },[R],"a3");
  var c1=$t(function(){
   $$GHCziTopHandler_runMainIO2.J(S);
  },[S],"sat");
  var d1=$d(1,[c1,S],"sat");
  var e1=$f(2,function(f1,l){
   S.J(l);
  },[S],"sat");
  var g1=$d(1,[e1,d1],"sat");
  var h1=$d(2,[g1],"sat");
  $$GHCziConcziSignal_setHandler1.C([$$GHCziTopHandler_runMainIO4,h1,Q],function(i1){
   var j1=i1[0];
   var $ff=stg_sig_install(goog.math.Long.fromBits(2,0),goog.math.Long.fromBits(4294967291,4294967295),null);
   var k1=[j1,$ff];
   var l1=k1[0];
   H.J(l1);
  },[H]);
 },[H],"sat");
 $k($hs_catchzh,[J,$$GHCziTopHandler_runIO2,I]);
},[],"in `base:GHC.TopHandler'");
var $$GHCziTopHandler$a=$F(2,function(m1,n1){
 $M(m1,function(o1){
  var p1=o1.v[0];
  var s1=$hs_narrow32Intzh(p1);
  var $ff=shutdownHaskellAndExit(s1);
  var q1=[n1,$ff];
  var r1=q1[0];
  $r([r1,$$GHCziTuple_Z0T]);
 },[n1]);
},"a");
var $$GHCziTopHandler$c=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl");
var $$GHCziTopHandler$d=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl1");
var $$GHCziTopHandler$e=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"lvl2");
var $$GHCziTopHandler$f=$F(3,function(A1,B1,C1){
 $M(B1,function(D1){
  var E1=D1.v[0],F1=D1.v[1];
  $b($hs_catchzh,[$$GHCziTopHandler_flushStdHandles5,$$GHCziTopHandler_flushStdHandles4,C1],function(G1){
   var H1=G1[0];
   $b($hs_catchzh,[$$GHCziTopHandler_flushStdHandles3,$$GHCziTopHandler_flushStdHandles2,H1],function(I1){
    var J1=I1[0];
    $$GHCziException_zdp1Exception.C([E1],function(L1){
     var K1=$f(1,function(M1){
      $$DataziTypeable_cast.C([L1,$$GHCziIOziException_zdfTypeableExitCodezuzdctypeOf,F1],function(N1){
       switch(N1.g){
       case 1:
	$$DataziTypeable_cast.C([L1,$$GHCziIOziException_zdfTypeableIOExceptionzuzdctypeOf,F1],function(O1){
	 switch(O1.g){
	 case 1:
	  $M($$GHCziConcziSync_uncaughtExceptionHandler,function(P1){
	   var Q1=P1.v[0];
	   var R1=$hs_readMutVarzh(Q1,M1);
	   var S1=R1[0],T1=R1[1];
	   T1.C([D1,S1],function(U1){
	    var V1=U1[0];
	    A1.J($$GHCziTopHandler$c,V1);
	   },[A1]);
	  },[M1,D1,A1]);break;
	 case 2:
	  var W1=O1.v[0];
	  $M(W1,function(X1){
	   var Y1=X1.v[0],Z1=X1.v[1],a2=X1.v[4];
	   $M(Z1,function(b2){
	    switch(b2.g){
	    case 18:
	     $M(a2,function(j2){
	      switch(j2.g){
	      case 1:
	       $M($$GHCziConcziSync_uncaughtExceptionHandler,function(k2){
		var l2=k2.v[0];
		var m2=$hs_readMutVarzh(l2,M1);
		var n2=m2[0],o2=m2[1];
		o2.C([D1,n2],function(p2){
		 var q2=p2[0];
		 A1.J($$GHCziTopHandler$c,q2);
		},[A1]);
	       },[M1,D1,A1]);break;
	      case 2:
	       var r2=j2.v[0];
	       $M(Y1,function(s2){
		switch(s2.g){
		case 1:
		 $M($$GHCziConcziSync_uncaughtExceptionHandler,function(t2){
		  var u2=t2.v[0];
		  var v2=$hs_readMutVarzh(u2,M1);
		  var w2=v2[0],x2=v2[1];
		  x2.C([D1,w2],function(y2){
		   var z2=y2[0];
		   A1.J($$GHCziTopHandler$c,z2);
		  },[A1]);
		 },[M1,D1,A1]);break;
		case 2:
		 var A2=s2.v[0];
		 $M(r2,function(B2){
		  var C2=B2.v[0];
		  $M(C2,function(D2){
		   switch(D2.toString()){
		   case "-1":
		    $M($$GHCziConcziSync_uncaughtExceptionHandler,function(L2){
		     var M2=L2.v[0];
		     var N2=$hs_readMutVarzh(M2,M1);
		     var O2=N2[0],P2=N2[1];
		     P2.C([D1,O2],function(Q2){
		      var R2=Q2[0];
		      A1.J($$GHCziTopHandler$c,R2);
		     },[A1]);
		    },[M1,D1,A1]);break;
		   case "32":
		    $M(A2,function(S2){
		     switch(S2.g){
		     case 1:
		      var T2=S2.v[1];
		      $M($$GHCziIOziHandleziFD_stdout,function(U2){
		       switch(U2.g){
		       case 1:
			var V2=U2.v[1];
			var W2=$hs_sameMVarzh(T2,V2);
			switch(W2.g){
			case 1:
			 $M($$GHCziConcziSync_uncaughtExceptionHandler,function(X2){
			  var Y2=X2.v[0];
			  var Z2=$hs_readMutVarzh(Y2,M1);
			  var a3=Z2[0],b3=Z2[1];
			  b3.C([D1,a3],function(c3){
			   var d3=c3[0];
			   A1.J($$GHCziTopHandler$c,d3);
			  },[A1]);
			 },[M1,D1,A1]);break;
			case 2:
			 A1.J($$GHCziTopHandler$d,M1);break;
			}break;
		       case 2:
			$M($$GHCziConcziSync_uncaughtExceptionHandler,function(e3){
			 var f3=e3.v[0];
			 var g3=$hs_readMutVarzh(f3,M1);
			 var h3=g3[0],i3=g3[1];
			 i3.C([D1,h3],function(j3){
			  var k3=j3[0];
			  A1.J($$GHCziTopHandler$c,k3);
			 },[A1]);
			},[M1,D1,A1]);break;
		       }
		      },[M1,D1,A1,T2]);break;
		     case 2:
		      var l3=S2.v[1];
		      $M($$GHCziIOziHandleziFD_stdout,function(m3){
		       switch(m3.g){
		       case 1:
			$M($$GHCziConcziSync_uncaughtExceptionHandler,function(n3){
			 var o3=n3.v[0];
			 var p3=$hs_readMutVarzh(o3,M1);
			 var q3=p3[0],r3=p3[1];
			 r3.C([D1,q3],function(s3){
			  var t3=s3[0];
			  A1.J($$GHCziTopHandler$c,t3);
			 },[A1]);
			},[M1,D1,A1]);break;
		       case 2:
			var u3=m3.v[1];
			var v3=$hs_sameMVarzh(l3,u3);
			switch(v3.g){
			case 1:
			 $M($$GHCziConcziSync_uncaughtExceptionHandler,function(w3){
			  var x3=w3.v[0];
			  var y3=$hs_readMutVarzh(x3,M1);
			  var z3=y3[0],A3=y3[1];
			  A3.C([D1,z3],function(B3){
			   var C3=B3[0];
			   A1.J($$GHCziTopHandler$c,C3);
			  },[A1]);
			 },[M1,D1,A1]);break;
			case 2:
			 A1.J($$GHCziTopHandler$d,M1);break;
			}break;
		       }
		      },[M1,D1,A1,l3]);break;
		     }
		    },[M1,D1,A1]);break;
		   default:
		    $M($$GHCziConcziSync_uncaughtExceptionHandler,function(E2){
		     var F2=E2.v[0];
		     var G2=$hs_readMutVarzh(F2,M1);
		     var H2=G2[0],I2=G2[1];
		     I2.C([D1,H2],function(J2){
		      var K2=J2[0];
		      A1.J($$GHCziTopHandler$c,K2);
		     },[A1]);
		    },[M1,D1,A1]);
		   }
		  },[M1,D1,A1,A2]);
		 },[M1,D1,A1,A2]);break;
		}
	       },[M1,D1,A1,r2]);break;
	      }
	     },[M1,D1,A1,Y1]);break;
	    default:
	     $M($$GHCziConcziSync_uncaughtExceptionHandler,function(c2){
	      var d2=c2.v[0];
	      var e2=$hs_readMutVarzh(d2,M1);
	      var f2=e2[0],g2=e2[1];
	      g2.C([D1,f2],function(h2){
	       var i2=h2[0];
	       A1.J($$GHCziTopHandler$c,i2);
	      },[A1]);
	     },[M1,D1,A1]);
	    }
	   },[M1,D1,A1,a2,Y1]);
	  },[M1,D1,A1]);break;
	 }
	},[M1,D1,A1]);break;
       case 2:
	var D3=N1.v[0];
	$M(D3,function(E3){
	 switch(E3.g){
	 case 1:
	  A1.J($$GHCziTopHandler$d,M1);break;
	 case 2:
	  var F3=E3.v[0];
	  A1.J(F3,M1);break;
	 }
	},[M1,A1]);break;
       }
      },[L1,F1,M1,D1,A1]);
     },[L1,F1,D1,A1],"$wa");
     $$DataziTypeable_cast.C([L1,$$GHCziIOziException_zdfTypeableAsyncExceptionzuzdctypeOf,F1],function(G3){
      switch(G3.g){
      case 1:
       K1.J(J1);break;
      case 2:
       var H3=G3.v[0];
       $M(H3,function(I3){
	switch(I3.g){
	case 1:
	 var $ff=stackOverflow();
	 var J3=[J1,$ff];
	 var K3=J3[0];
	 A1.J($$GHCziTopHandler$e,K3);break;
	case 4:
	 var $ff=shutdownHaskellAndSignal(goog.math.Long.fromBits(2,0));
	 var L3=[J1,$ff];
	 var M3=L3[0];
	 $r([M3,$$GHCziTuple_Z0T]);break;
	default:
	 K1.J(J1);
	}
       },[L1,F1,D1,A1,K1,J1]);break;
      }
     },[L1,F1,D1,A1,K1,J1]);
    },[F1,D1,A1,J1]);
   },[E1,F1,D1,A1]);
  },[E1,F1,D1,A1]);
 },[C1,A1]);
},"a2");
var $$GHCziUnicode_isAlphaNum=$f(1,function(o1){
 $M(o1,function(p1){
  var q1=p1.v[0];
  var v1=$hs_ordzh(q1);
  var u1=$hs_narrow32Intzh(v1);
  var $ff=u_iswalnum(u1);
  var r1=[$$GHCziPrim_realWorldzh,$ff];
  var s1=r1[1];
  var t1=$hs_narrow32Intzh(s1);
  switch(t1.toString()){
  case "0":
   $R(1,[],"False");break;
  default:
   $R(2,[],"True");
  }
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:139:1");
var $$GHCziUnicode_isAlpha=$f(1,function(w1){
 $M(w1,function(x1){
  var y1=x1.v[0];
  var D1=$hs_ordzh(y1);
  var C1=$hs_narrow32Intzh(D1);
  var $ff=u_iswalpha(C1);
  var z1=[$$GHCziPrim_realWorldzh,$ff];
  var A1=z1[1];
  var B1=$hs_narrow32Intzh(A1);
  switch(B1.toString()){
  case "0":
   $R(1,[],"False");break;
  default:
   $R(2,[],"True");
  }
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:138:1");
var $$GHCziUnicode_zdwisSpace=$f(1,function(E1){
 $M(E1,function(F1){
  switch(F1.toString()){
  case "\t":
   $R(2,[],"True");break;
  case "\n":
   $R(2,[],"True");break;
  case "\v":
   $R(2,[],"True");break;
  case "\f":
   $R(2,[],"True");break;
  case "\r":
   $R(2,[],"True");break;
  case " ":
   $R(2,[],"True");break;
  case "\xa0":
   $R(2,[],"True");break;
  default:
   var K1=$hs_ordzh(F1);
   var J1=$hs_narrow32Intzh(K1);
   var $ff=u_iswspace(J1);
   var G1=[$$GHCziPrim_realWorldzh,$ff];
   var H1=G1[1];
   var I1=$hs_narrow32Intzh(H1);
   switch(I1.toString()){
   case "0":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  }
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:73:1");
var $$GHCziUnicode_isSpace=$f(1,function(L1){
 $M(L1,function(M1){
  var N1=M1.v[0];
  $$GHCziUnicode_zdwisSpace.J(N1);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:73:1");
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
var $$GHCziUnicode_toUpper=$f(1,function(Z1){
 $M(Z1,function(a2){
  var b2=a2.v[0];
  $$GHCziUnicode_zdwtoUpper.J(b2);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:147:1");
var $$GHCziUnicode_zdwtoLower=$f(1,function(c2){
 var k2=$hs_ordzh(c2);
 var j2=$hs_narrow32Intzh(k2);
 var $ff=u_towlower(j2);
 var d2=[$$GHCziPrim_realWorldzh,$ff];
 var e2=d2[1];
 var g2=$hs_narrow32Intzh(e2);
 var i2=$hs_int2Wordzh(g2);
 var f2=$hs_leWordzh(i2,goog.math.Long.fromBits(1114111,0));
 switch(f2.g){
 case 1:
  $$GHCziUnicode_toLower1.J(g2);break;
 case 2:
  var h2=$hs_chrzh(g2);
  $R(1,[h2],"C#");break;
 }
},[],"at libraries/base/GHC/Unicode.hs:146:1");
var $$GHCziUnicode_toLower=$f(1,function(l2){
 $M(l2,function(m2){
  var n2=m2.v[0];
  $$GHCziUnicode_zdwtoLower.J(n2);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:146:1");
var $$SystemziIO_putStrLn1=$f(2,function(M1,N1){
 $$GHCziIOziHandleziText_hPutStrLn1.J($$GHCziIOziHandleziFD_stdout,M1,N1);
},[],"in `base:System.IO'");
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
var $$TextziParserCombinatorsziReadP_run=$f(2,function(c,d){
 $M(c,function(e){
  switch(e.g){
  case 1:
   var f=e.v[0];
   $M(d,function(g){
    switch(g.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var h=g.v[0],i=g.v[1];
     f.C([h],function(j){
      $$TextziParserCombinatorsziReadP_run.J(j,i);
     },[i]);break;
    }
   },[f]);break;
  case 2:
   var k=e.v[0];
   k.C([d],function(l){
    $$TextziParserCombinatorsziReadP_run.J(l,d);
   },[d]);break;
  case 3:
   $R(1,[],"[]");break;
  case 4:
   var m=e.v[0],n=e.v[1];
   var o=$t(function(){
    $$TextziParserCombinatorsziReadP_run.J(n,d);
   },[d,n],"sat");
   var p=$d(1,[m,d],"sat");
   $R(2,[p,o],":");break;
  case 5:
   var q=e.v[0];
   $A(q);break;
  }
 },[d]);
},[],"at libraries/base/Text/ParserCombinators/ReadP.hs:194:1");
var $$TextziParserCombinatorsziReadP_zdfMonadPzuzdcreturn=$f(1,function(K){
 $R(4,[K,$$TextziParserCombinatorsziReadP_Fail],"Result");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus=$f(2,function(L,M){
 $M(L,function(N){
  switch(N.g){
  case 1:
   var O=N.v[0];
   var P=$f(1,function(Q){
    var R=$t(function(){
     M.J(Q);
    },[Q,M],"sat");
    O.C([Q],function(S){
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(S,R);
    },[R]);
   },[O,M],"sat");
   $R(1,[P],"Get");break;
  case 2:
   var T=N.v[0];
   var U=$f(1,function(V){
    T.C([V],function(W){
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(W,M);
    },[M]);
   },[M,T],"sat");
   $R(2,[U],"Look");break;
  case 3:
   $R(1,[M],"Get");break;
  case 4:
   var X=N.v[0],Y=N.v[1];
   var Z=$t(function(){
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(Y,M);
   },[M,Y],"sat");
   $R(4,[X,Z],"Result");break;
  case 5:
   var a1=N.v[0];
   var b1=$f(1,function(c1){
    var d1=$t(function(){
     var e1=$t(function(){
      var f1=$d(1,[M],"sat");
      $$TextziParserCombinatorsziReadP_run.J(f1,c1);
     },[M,c1],"sat");
     $$GHCziBase_zpzp.J(a1,e1);
    },[M,a1,c1],"sat");
    $R(5,[d1],"Final");
   },[M,a1],"sat");
   $R(2,[b1],"Look");break;
  }
 },[M]);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus=$f(2,function(g1,h1){
 var i1=$t(function(){
  $M(h1,function(j1){
   switch(j1.g){
   case 4:
    var h2=j1.v[0],i2=j1.v[1];
    var j2=$t(function(){
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(g1,i2);
    },[g1,i2],"sat");
    $R(4,[h2,j2],"Result");break;
   default:
    $M(g1,function(k1){
     switch(k1.g){
     case 3:
      $A(j1);break;
     default:
      $M(j1,function(l1){
       switch(l1.g){
       case 3:
	$A(k1);break;
       default:
	var m1=$t(function(){
	 $M(l1,function(n1){
	  switch(n1.g){
	  case 5:
	   var F1=n1.v[0];
	   var G1=$f(1,function(H1){
	    var I1=$t(function(){
	     $$TextziParserCombinatorsziReadP_run.C([k1,H1],function(J1){
	      $$GHCziBase_zpzp.J(J1,F1);
	     },[F1]);
	    },[k1,H1,F1],"sat");
	    $R(5,[I1],"Final");
	   },[k1,F1],"sat");
	   $R(2,[G1],"Look");break;
	  default:
	   $M(k1,function(o1){
	    switch(o1.g){
	    case 2:
	     var u1=o1.v[0];
	     $M(n1,function(v1){
	      switch(v1.g){
	      case 1:
	       var w1=v1.v[0];
	       var x1=$f(1,function(y1){
		u1.C([y1],function(z1){
		 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(z1,w1);
		},[w1]);
	       },[u1,w1],"sat");
	       $R(2,[x1],"Look");break;
	      case 2:
	       var A1=v1.v[0];
	       var B1=$f(1,function(C1){
		var D1=$t(function(){
		 A1.J(C1);
		},[C1,A1],"sat");
		u1.C([C1],function(E1){
		 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(E1,D1);
		},[D1]);
	       },[u1,A1],"sat");
	       $R(2,[B1],"Look");break;
	      }
	     },[u1]);break;
	    default:
	     $M(n1,function(p1){
	      switch(p1.g){
	      case 1:
	       $A($$TextziParserCombinatorsziReadP$a);break;
	      case 2:
	       var q1=p1.v[0];
	       var r1=$f(1,function(s1){
		var t1=$t(function(){
		 q1.J(s1);
		},[s1,q1],"sat");
		$$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(o1,t1);
	       },[o1,q1],"sat");
	       $R(2,[r1],"Look");break;
	      }
	     },[o1]);
	    }
	   },[n1]);
	  }
	 },[k1]);
	},[l1,k1],"$wfail1");
	$M(k1,function(K1){
	 switch(K1.g){
	 case 2:
	  var L1=K1.v[0];
	  $M(l1,function(M1){
	   switch(M1.g){
	   case 5:
	    var N1=M1.v[0];
	    var O1=$f(1,function(P1){
	     var Q1=$t(function(){
	      L1.C([P1],function(R1){
	       $$TextziParserCombinatorsziReadP_run.C([R1,P1],function(S1){
		$$GHCziBase_zpzp.J(S1,N1);
	       },[N1]);
	      },[P1,N1]);
	     },[P1,L1,N1],"sat");
	     $R(5,[Q1],"Final");
	    },[L1,N1],"sat");
	    $R(2,[O1],"Look");break;
	   default:
	    $A(m1);
	   }
	  },[l1,k1,m1,L1]);break;
	 case 5:
	  var T1=K1.v[0];
	  $M(l1,function(U1){
	   switch(U1.g){
	   case 1:
	    var V1=$f(1,function(W1){
	     var X1=$t(function(){
	      var Y1=$t(function(){
	       $$TextziParserCombinatorsziReadP_run.J(U1,W1);
	      },[U1,W1],"sat");
	      $$GHCziBase_zpzp.J(T1,Y1);
	     },[T1,U1,W1],"sat");
	     $R(5,[X1],"Final");
	    },[T1,U1],"sat");
	    $R(2,[V1],"Look");break;
	   case 2:
	    var Z1=U1.v[0];
	    var a2=$f(1,function(b2){
	     var c2=$t(function(){
	      var d2=$t(function(){
	       Z1.C([b2],function(e2){
		$$TextziParserCombinatorsziReadP_run.J(e2,b2);
	       },[b2]);
	      },[b2,Z1],"sat");
	      $$GHCziBase_zpzp.J(T1,d2);
	     },[T1,b2,Z1],"sat");
	     $R(5,[c2],"Final");
	    },[T1,Z1],"sat");
	    $R(2,[a2],"Look");break;
	   case 5:
	    var f2=U1.v[0];
	    var g2=$t(function(){
	     $$GHCziBase_zpzp.J(T1,f2);
	    },[T1,f2],"sat");
	    $R(5,[g2],"Final");break;
	   }
	  },[T1]);break;
	 default:
	  $A(m1);
	 }
	},[l1,k1,m1]);
       }
      },[k1]);
     }
    },[j1]);
   }
  },[g1]);
 },[h1,g1],"$wfail");
 $M(g1,function(k2){
  switch(k2.g){
  case 1:
   var l2=k2.v[0];
   $M(h1,function(m2){
    switch(m2.g){
    case 1:
     var n2=m2.v[0];
     var o2=$f(1,function(p2){
      var q2=$t(function(){
       n2.J(p2);
      },[p2,n2],"sat");
      l2.C([p2],function(r2){
       $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(r2,q2);
      },[q2]);
     },[l2,n2],"sat");
     $R(1,[o2],"Get");break;
    default:
     $A(i1);
    }
   },[h1,g1,i1,l2]);break;
  case 4:
   var s2=k2.v[0],t2=k2.v[1];
   var u2=$t(function(){
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(t2,h1);
   },[h1,t2],"sat");
   $R(4,[s2,u2],"Result");break;
  default:
   $A(i1);
  }
 },[h1,g1,i1]);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_zdfMonadPzuzdczgzgze=$f(2,function(v2,w2){
 $M(v2,function(x2){
  switch(x2.g){
  case 1:
   var y2=x2.v[0];
   var z2=$f(1,function(A2){
    y2.C([A2],function(B2){
     $$TextziParserCombinatorsziReadP_zdfMonadPzuzdczgzgze.J(B2,w2);
    },[w2]);
   },[y2,w2],"sat");
   $R(1,[z2],"Get");break;
  case 2:
   var C2=x2.v[0];
   var D2=$f(1,function(E2){
    C2.C([E2],function(F2){
     $$TextziParserCombinatorsziReadP_zdfMonadPzuzdczgzgze.J(F2,w2);
    },[w2]);
   },[w2,C2],"sat");
   $R(2,[D2],"Look");break;
  case 3:
   $R(3,[],"Fail");break;
  case 4:
   var G2=x2.v[0],H2=x2.v[1];
   var I2=$t(function(){
    $$TextziParserCombinatorsziReadP_zdfMonadPzuzdczgzgze.J(H2,w2);
   },[w2,H2],"sat");
   w2.C([G2],function(J2){
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(J2,I2);
   },[I2]);break;
  case 5:
   var K2=x2.v[0];
   var L2=$f(1,function(M2){
    $M(M2,function(N2){
     switch(N2.g){
     case 1:
      $R(1,[],"[]");break;
     case 2:
      var O2=N2.v[0],P2=N2.v[1];
      $M(O2,function(Q2){
       var R2=Q2.v[0],S2=Q2.v[1];
       var T2=$t(function(){
	L2.J(P2);
       },[P2,L2],"sat");
       w2.C([R2],function(U2){
	$$TextziParserCombinatorsziReadP_run.C([U2,S2],function(V2){
	 $$GHCziBase_zpzp.J(V2,T2);
	},[T2]);
       },[S2,T2]);
      },[w2,P2,L2]);break;
     }
    },[w2,L2]);
   },[w2],"go");
   L2.C([K2],function(W2){
    switch(W2.g){
    case 1:
     $R(3,[],"Fail");break;
    case 2:
     $R(5,[W2],"Final");break;
    }
   },[]);break;
  }
 },[w2]);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_choicezuzdschoice=$f(2,function(j3,k3){
 $M(k3,function(l3){
  switch(l3.g){
  case 1:
   $A(j3);break;
  case 2:
   var m3=l3.v[0],n3=l3.v[1];
   var o3=$t(function(){
    $$TextziParserCombinatorsziReadP_choicezuzdschoice.J(m3,n3);
   },[m3,n3],"ds");
   var p3=$f(1,function(q3){
    var r3=$t(function(){
     o3.J(q3);
    },[o3,q3],"sat");
    j3.C([q3],function(s3){
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(s3,r3);
    },[r3]);
   },[j3,o3],"sat");
   $A(p3);break;
  }
 },[j3]);
},[],"at libraries/base/Text/ParserCombinators/ReadP.hs:324:1");
var $$TextziParserCombinatorsziReadP_string3=$f(1,function(N4){
 $R(3,[],"Fail");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_string2=$f(1,function(b){
 $$TextziParserCombinatorsziReadP_string3.J(b);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_string1=$f(2,function(O4,P4){
 var Q4=$f(1,function(R4){
  R4.J(O4);
 },[O4],"a1");
 var S4=$f(2,function(T4,U4){
  $M(T4,function(V4){
   switch(V4.g){
   case 1:
    $A(Q4);break;
   case 2:
    var W4=V4.v[0],X4=V4.v[1];
    $M(U4,function(Y4){
     switch(Y4.g){
     case 1:
      $A($$TextziParserCombinatorsziReadP_string3);break;
     case 2:
      var Z4=Y4.v[0],a5=Y4.v[1];
      $M(W4,function(b5){
       var c5=b5.v[0];
       $M(Z4,function(d5){
	var e5=d5.v[0];
	var f5=c5==e5?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(f5.g){
	case 1:
	 $A($$TextziParserCombinatorsziReadP_string2);break;
	case 2:
	 var g5=$t(function(){
	  S4.J(X4,a5);
	 },[X4,a5,S4],"lvl4");
	 var h5=$f(1,function(i5){
	  var j5=$t(function(){
	   g5.J(i5);
	  },[g5,i5],"lvl5");
	  var k5=$f(1,function(l5){
	   $A(j5);
	  },[j5],"sat");
	  $R(1,[k5],"Get");
	 },[g5],"sat");
	 $A(h5);break;
	}
       },[c5,X4,a5,S4]);
      },[Z4,X4,a5,S4]);break;
     }
    },[W4,X4,S4]);break;
   }
  },[Q4,U4,S4]);
 },[Q4],"scan");
 var m5=$f(1,function(n5){
  S4.J(O4,n5,P4);
 },[O4,S4,P4],"sat");
 $R(2,[m5],"Look");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_munch3=$f(1,function(o5){
 o5.J($$GHCziTypes_ZMZN);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_munch2=$f(2,function(p5,q5){
 var r5=$f(1,function(s5){
  $M(s5,function(t5){
   switch(t5.g){
   case 1:
    $A($$TextziParserCombinatorsziReadP_munch3);break;
   case 2:
    var u5=t5.v[0],v5=t5.v[1];
    p5.C([u5],function(w5){
     switch(w5.g){
     case 1:
      $A($$TextziParserCombinatorsziReadP_munch3);break;
     case 2:
      var x5=$t(function(){
       r5.J(v5);
      },[v5,r5],"ds1");
      var y5=$f(1,function(z5){
       var A5=$t(function(){
	var B5=$f(1,function(C5){
	 var D5=$d(2,[u5,C5],"sat");
	 z5.J(D5);
	},[u5,z5],"sat");
	x5.J(B5);
       },[u5,x5,z5],"lvl4");
       var E5=$f(1,function(F5){
	$A(A5);
       },[A5],"sat");
       $R(1,[E5],"Get");
      },[u5,x5],"sat");
      $A(y5);break;
     }
    },[u5,v5,r5]);break;
   }
  },[p5,r5]);
 },[p5],"scan");
 var G5=$f(1,function(H5){
  r5.J(H5,q5);
 },[r5,q5],"sat");
 $R(2,[G5],"Look");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_skipSpaceszuskip=$f(1,function(Q5){
 $M(Q5,function(R5){
  switch(R5.g){
  case 1:
   $A($$TextziParserCombinatorsziReadP$e);break;
  case 2:
   var S5=R5.v[0],T5=R5.v[1];
   $$GHCziUnicode_isSpace.C([S5],function(U5){
    switch(U5.g){
    case 1:
     $A($$TextziParserCombinatorsziReadP$e);break;
    case 2:
     var V5=$t(function(){
      $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(T5);
     },[T5],"lvl4");
     var W5=$f(1,function(X5){
      var Y5=$t(function(){
       V5.J(X5);
      },[V5,X5],"lvl5");
      var Z5=$f(1,function(a6){
       $A(Y5);
      },[Y5],"sat");
      $R(1,[Z5],"Get");
     },[V5],"sat");
     $A(W5);break;
    }
   },[T5]);break;
  }
 },[]);
},[],"at libraries/base/Text/ParserCombinators/ReadP.hs:334:3");
var $$TextziParserCombinatorsziReadP_zlzpzp2=$f(2,function(e6,f6){
 $M(e6,function(g6){
  switch(g6.toString()){
  case "0":
   f6.J($$GHCziTuple_Z0T);break;
  default:
   var h6=$t(function(){
    var i6=g6.subtract(goog.math.Long.fromBits(1,0));
    $$TextziParserCombinatorsziReadP_zlzpzp2.J(i6,f6);
   },[g6,f6],"lvl4");
   var j6=$f(1,function(k6){
    $A(h6);
   },[h6],"sat");
   $R(1,[j6],"Get");
  }
 },[f6]);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_zlzpzp1=$f(3,function(l6,m6,n6){
 var o6=$t(function(){
  l6.J($$TextziParserCombinatorsziReadP_zdfMonadPzuzdcreturn);
 },[l6],"lvl4");
 var p6=$f(3,function(q6,r6,s6){
  $M(q6,function(t6){
   switch(t6.g){
   case 1:
    var u6=t6.v[0];
    $M(r6,function(v6){
     switch(v6.g){
     case 1:
      $A(m6);break;
     case 2:
      var w6=v6.v[0],x6=v6.v[1];
      var z6=s6.add(goog.math.Long.fromBits(1,0));
      u6.C([w6],function(y6){
       p6.J(y6,x6,z6);
      },[p6,x6,z6]);break;
     }
    },[m6,u6,p6,s6]);break;
   case 2:
    var A6=t6.v[0];
    A6.C([r6],function(B6){
     p6.J(B6,r6,s6);
    },[r6,p6,s6]);break;
   case 3:
    $A(m6);break;
   case 4:
    var C6=$f(1,function(D6){
     var E6=$t(function(){
      $$TextziParserCombinatorsziReadP_zdfMonadPzuzdczgzgze.J(t6,D6);
     },[t6,D6],"lvl5");
     var F6=$f(1,function(G6){
      $A(E6);
     },[E6],"sat");
     $$TextziParserCombinatorsziReadP_zlzpzp2.J(s6,F6);
    },[s6,t6],"sat");
    $A(C6);break;
   case 5:
    $$TextziParserCombinatorsziReadP_zdfMonadPzuzdczgzgze.J(t6);break;
   }
  },[r6,m6,p6,s6]);
 },[m6],"probe");
 var H6=$f(1,function(I6){
  p6.J(o6,I6,goog.math.Long.fromBits(0,0),n6);
 },[o6,p6,n6],"sat");
 $R(2,[H6],"Look");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_Fail=$D(3,function(){
 $r([]);
},"at libraries/base/Text/ParserCombinators/ReadP.hs:115:5");
var $$TextziParserCombinatorsziReadP$a=$T(function(){
 $$ControlziExceptionziBase_patError.J("libraries/base/Text/ParserCombinators/ReadP.hs:(136,3)-(159,60)|function mplus");
},"lvl");
var $$TextziParserCombinatorsziReadP$e=$F(1,function(sa){
 sa.J($$GHCziTuple_Z0T);
},"lvl3");
var $$TextziParserCombinatorsziReadPrec_minPrec=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"at libraries/base/Text/ParserCombinators/ReadPrec.hs:94:1");
var $$TextziPrintf_zdfPrintfArgInt1=$t(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(0,2147483648));
},[],"in `base:Text.Printf'");
var $$TextziPrintf_zdfPrintfArgInteger1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:Text.Printf'");
var $$TextziPrintf_zdfIsCharCharzuzdcfromChar=$f(1,function(b1){
 $A(b1);
},[],"at libraries/base/Text/Printf.hs:186:5");
var $$TextziPrintf_uprintf=$f(2,function(e1,f1){
 $M(e1,function(g1){
  switch(g1.g){
  case 1:
   $M(f1,function(h1){
    switch(h1.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     $A($$TextziPrintf$c);break;
    }
   },[]);break;
  case 2:
   var i1=g1.v[0],j1=g1.v[1];
   $M(i1,function(k1){
    var l1=k1.v[0];
    $M(l1,function(m1){
     switch(m1.toString()){
     case "%":
      var o1=$t(function(){
       $M(f1,function(p1){
	switch(p1.g){
	case 1:
	 $A($$TextziPrintf$e);break;
	case 2:
	 $$TextziPrintf$z.C([$$GHCziTypes_False,$$GHCziTypes_False,$$GHCziTypes_False,j1,p1],function(q1){
	  var r1=q1[0],s1=q1[1],t1=q1[2],u1=q1[3],v1=q1[4],w1=q1[5],x1=q1[6];
	  $M(w1,function(y1){
	   switch(y1.g){
	   case 1:
	    $A($$TextziPrintf$c);break;
	   case 2:
	    var z1=y1.v[0],A1=y1.v[1];
	    $M(x1,function(B1){
	     switch(B1.g){
	     case 1:
	      $A($$TextziPrintf$e);break;
	     case 2:
	      var C1=B1.v[0],D1=B1.v[1];
	      $M(z1,function(E1){
	       var F1=E1.v[0];
	       var G1=$t(function(){
		$M(u1,function(H1){
		 switch(H1.g){
		 case 1:
		  $A($$TextziPrintf$I);break;
		 case 2:
		  $A($$TextziPrintf$p);break;
		 }
		},[]);
	       },[u1],"x");
	       var I1=$D(2,function(){
		$r([G1,I1]);
	       },"xs");
	       var J1=$f(2,function(K1,L1){
		var M1=$t(function(){
		 $$GHCziList_zdwlen.C([L1,goog.math.Long.fromBits(0,0)],function(U1){
		  $$GHCziList_zdwlen.C([K1,goog.math.Long.fromBits(0,0)],function(V1){
		   $M(r1,function(N1){
		    var O1=N1.v[0];
		    var W1=U1.add(V1);
		    var P1=W1.lessThan(O1)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(P1.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     var T1=U1.add(V1);
		     var S1=O1.subtract(T1);
		     var Q1=S1.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(Q1.g){
		     case 1:
		      var R1=S1.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(R1.g){
		      case 1:
		       $R(1,[],"[]");break;
		      case 2:
		       $$GHCziList_takezuunsafezuUInt.J(S1,I1);break;
		      }break;
		     case 2:
		      $R(1,[],"[]");break;
		     }break;
		    }
		   },[I1,U1,V1]);
		  },[I1,r1,U1]);
		 },[I1,K1,r1]);
		},[I1,L1,K1,r1],"fill");
		$M(t1,function(X1){
		 switch(X1.g){
		 case 1:
		  $M(u1,function(Y1){
		   switch(Y1.g){
		   case 1:
		    var Z1=$t(function(){
		     $$GHCziBase_zpzp.J(K1,L1);
		    },[L1,K1],"sat");
		    $$GHCziBase_zpzp.J(M1,Z1);break;
		   case 2:
		    var a2=$t(function(){
		     $$GHCziBase_zpzp.J(M1,L1);
		    },[L1,M1],"sat");
		    $$GHCziBase_zpzp.J(K1,a2);break;
		   }
		  },[L1,K1,M1]);break;
		 case 2:
		  var b2=$t(function(){
		   $$GHCziBase_zpzp.J(L1,M1);
		  },[L1,M1],"sat");
		  $$GHCziBase_zpzp.J(K1,b2);break;
		 }
		},[u1,L1,K1,M1]);
	       },[u1,I1,r1,t1],"$wadjust");
	       var c2=$f(2,function(d2,e2){
		$M(d2,function(f2){
		 switch(f2.g){
		 case 1:
		  $M(v1,function(g2){
		   switch(g2.g){
		   case 1:
		    J1.J($$GHCziTypes_ZMZN,e2);break;
		   case 2:
		    J1.J($$TextziPrintf$H,e2);break;
		   }
		  },[J1,e2]);break;
		 case 2:
		  J1.J(f2,e2);break;
		 }
		},[J1,v1,e2]);
	       },[J1,v1],"$wadjust'");
	       $M(F1,function(h2){
		switch(h2.toString()){
		case "E":
		 $$TextziPrintf$B.C(["E",s1,C1],function(i2){
		  var j2=i2.v[0],k2=i2.v[1];
		  var l2=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([j2,k2],function(m2){
		   $$GHCziBase_zpzp.J(m2,l2);
		  },[l2]);
		 },[c2,A1,D1]);break;
		case "G":
		 $$TextziPrintf$B.C(["G",s1,C1],function(n2){
		  var o2=n2.v[0],p2=n2.v[1];
		  var q2=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([o2,p2],function(r2){
		   $$GHCziBase_zpzp.J(r2,q2);
		  },[q2]);
		 },[c2,A1,D1]);break;
		case "X":
		 var s2=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var t2=$t(function(){
		  $$TextziPrintf$w.C([$$TextziPrintf$D,s1,C1],function(u2){
		   $$GHCziBase_map.J($$GHCziUnicode_toUpper,u2);
		  },[]);
		 },[s1,C1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,t2],function(v2){
		  $$GHCziBase_zpzp.J(v2,s2);
		 },[s2]);break;
		case "c":
		 var w2=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var x2=$t(function(){
		  $M(C1,function(y2){
		   switch(y2.g){
		   case 1:
		    var z2=y2.v[0];
		    $M(z2,function(A2){
		     var B2=A2.v[0];
		     var D2=$hs_ordzh(B2);
		     var F2=$hs_int2Wordzh(D2);
		     var C2=$hs_leWordzh(F2,goog.math.Long.fromBits(1114111,0));
		     switch(C2.g){
		     case 1:
		      $$TextziPrintf$J.J(D2);break;
		     case 2:
		      var E2=$hs_chrzh(D2);
		      $R(1,[E2],"C#");break;
		     }
		    },[]);break;
		   case 3:
		    var G2=y2.v[1];
		    $$GHCziIntegerziType_integerToInt.C([G2],function(I2){
		     var K2=$hs_int2Wordzh(I2);
		     var H2=$hs_leWordzh(K2,goog.math.Long.fromBits(1114111,0));
		     switch(H2.g){
		     case 1:
		      $$TextziPrintf$J.J(I2);break;
		     case 2:
		      var J2=$hs_chrzh(I2);
		      $R(1,[J2],"C#");break;
		     }
		    },[]);break;
		   default:
		    $A($$TextziPrintf$g);
		   }
		  },[]);
		 },[C1],"sat");
		 var L2=$d(2,[x2,$$GHCziTypes_ZMZN],"sat");
		 J1.C([$$GHCziTypes_ZMZN,L2],function(M2){
		  $$GHCziBase_zpzp.J(M2,w2);
		 },[w2]);break;
		case "d":
		 $$TextziPrintf$u.C([s1,C1],function(N2){
		  var O2=N2[0],P2=N2[1];
		  var Q2=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([O2,P2],function(R2){
		   $$GHCziBase_zpzp.J(R2,Q2);
		  },[Q2]);
		 },[c2,A1,D1]);break;
		case "e":
		 $$TextziPrintf$B.C(["e",s1,C1],function(S2){
		  var T2=S2.v[0],U2=S2.v[1];
		  var V2=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([T2,U2],function(W2){
		   $$GHCziBase_zpzp.J(W2,V2);
		  },[V2]);
		 },[c2,A1,D1]);break;
		case "f":
		 $$TextziPrintf$B.C(["f",s1,C1],function(X2){
		  var Y2=X2.v[0],Z2=X2.v[1];
		  var a3=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([Y2,Z2],function(b3){
		   $$GHCziBase_zpzp.J(b3,a3);
		  },[a3]);
		 },[c2,A1,D1]);break;
		case "g":
		 $$TextziPrintf$B.C(["g",s1,C1],function(c3){
		  var d3=c3.v[0],e3=c3.v[1];
		  var f3=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([d3,e3],function(g3){
		   $$GHCziBase_zpzp.J(g3,f3);
		  },[f3]);
		 },[c2,A1,D1]);break;
		case "i":
		 $$TextziPrintf$u.C([s1,C1],function(h3){
		  var i3=h3[0],j3=h3[1];
		  var k3=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([i3,j3],function(l3){
		   $$GHCziBase_zpzp.J(l3,k3);
		  },[k3]);
		 },[c2,A1,D1]);break;
		case "o":
		 var m3=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var n3=$t(function(){
		  $$TextziPrintf$w.J($$TextziPrintf$F,s1,C1);
		 },[s1,C1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,n3],function(o3){
		  $$GHCziBase_zpzp.J(o3,m3);
		 },[m3]);break;
		case "s":
		 var p3=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var q3=$t(function(){
		  $M(C1,function(r3){
		   switch(r3.g){
		   case 2:
		    var s3=r3.v[0];
		    $M(s1,function(t3){
		     var u3=t3.v[0];
		     var v3=u3.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(v3.g){
		     case 1:
		      $A(s3);break;
		     case 2:
		      var w3=u3.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(w3.g){
		      case 1:
		       $$GHCziList_takezuunsafezuUInt.J(u3,s3);break;
		      case 2:
		       $R(1,[],"[]");break;
		      }break;
		     }
		    },[s3]);break;
		   default:
		    $A($$TextziPrintf$g);
		   }
		  },[s1]);
		 },[s1,C1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,q3],function(x3){
		  $$GHCziBase_zpzp.J(x3,p3);
		 },[p3]);break;
		case "u":
		 var y3=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var z3=$t(function(){
		  $$TextziPrintf$w.J($$TextziPrintf$E,s1,C1);
		 },[s1,C1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,z3],function(A3){
		  $$GHCziBase_zpzp.J(A3,y3);
		 },[y3]);break;
		case "x":
		 var B3=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var C3=$t(function(){
		  $$TextziPrintf$w.J($$TextziPrintf$D,s1,C1);
		 },[s1,C1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,C3],function(D3){
		  $$GHCziBase_zpzp.J(D3,B3);
		 },[B3]);break;
		default:
		 $$TextziPrintf$K.J(E1);
		}
	       },[J1,c2,E1,s1,C1,A1,D1]);
	      },[u1,r1,t1,v1,s1,C1,A1,D1]);break;
	     }
	    },[z1,u1,r1,t1,v1,s1,A1]);break;
	   }
	  },[x1,u1,r1,t1,v1,s1]);
	 },[]);break;
	}
       },[j1]);
      },[f1,j1],"$wfail");
      $M(j1,function(E3){
       switch(E3.g){
       case 1:
	$A(o1);break;
       case 2:
	var F3=E3.v[0],G3=E3.v[1];
	$M(F3,function(H3){
	 var I3=H3.v[0];
	 $M(I3,function(J3){
	  switch(J3.toString()){
	  case "%":
	   var K3=$t(function(){
	    $$TextziPrintf_uprintf.J(G3,f1);
	   },[f1,G3],"sat");
	   $R(2,[$$TextziPrintf$C,K3],":");break;
	  default:
	   $A(o1);
	  }
	 },[f1,j1,o1,G3]);
	},[f1,j1,o1,G3]);break;
       }
      },[f1,j1,o1]);break;
     default:
      var n1=$t(function(){
       $$TextziPrintf_uprintf.J(j1,f1);
      },[f1,j1],"sat");
      $R(2,[k1,n1],":");
     }
    },[f1,k1,j1]);
   },[f1,j1]);break;
  }
 },[f1]);
},[],"at libraries/base/Text/Printf.hs:197:1");
var $$TextziPrintf$a=$F(1,function(i4){
 $$GHCziCString_unpackAppendCStringzh.C(["Printf.printf: ",i4],function(j4){
  $$GHCziErr_error.J(j4);
 },[]);
},"lvl");
var $$TextziPrintf$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("formatting string ended prematurely");
},"lvl1");
var $$TextziPrintf$c=$T(function(){
 $$TextziPrintf$a.J($$TextziPrintf$b);
},"at libraries/base/Text/Printf.hs:328:1");
var $$TextziPrintf$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("argument list ended prematurely");
},"lvl2");
var $$TextziPrintf$e=$T(function(){
 $$TextziPrintf$a.J($$TextziPrintf$d);
},"at libraries/base/Text/Printf.hs:329:1");
var $$TextziPrintf$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("bad argument");
},"lvl3");
var $$TextziPrintf$g=$T(function(){
 $$TextziPrintf$a.J($$TextziPrintf$f);
},"at libraries/base/Text/Printf.hs:330:1");
var $$TextziPrintf$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Printf.dfmt: impossible");
},"lvl4");
var $$TextziPrintf$i=$T(function(){
 $$GHCziErr_error.J($$TextziPrintf$h);
},"lvl5");
var $$TextziPrintf$j=$D(1,function(){
 $r(["-"]);
},"lvl6");
var $$TextziPrintf$k=$D(2,function(){
 $r([$$TextziPrintf$j,$$GHCziTypes_ZMZN]);
},"lvl7");
var $$TextziPrintf$l=$T(function(){
 $$GHCziErr_error.J($$TextziPrintf$h);
},"lvl8");
var $$TextziPrintf$m=$D(2,function(){
 $r([$$TextziPrintf$j,$$GHCziTypes_ZMZN]);
},"lvl9");
var $$TextziPrintf$n=$F(2,function(k4,l4){
 $$GHCziIntegerziType_ltInteger.C([l4,k4],function(m4){
  switch(m4.g){
  case 1:
   $$GHCziIntegerziType_eqInteger.C([k4,$$GHCziReal_even1],function(n4){
    switch(n4.g){
    case 1:
     $$GHCziIntegerziType_quotRemInteger.C([l4,k4],function(o4){
      var p4=o4[0],q4=o4[1];
      var r4=$t(function(){
       $$GHCziIntegerziType_integerToInt.C([q4],function(t4){
	$$GHCziShow_zdwintToDigit.C([t4],function(s4){
	 $R(1,[s4],"C#");
	},[]);
       },[]);
      },[q4],"sat");
      var u4=$d(2,[r4,$$GHCziTypes_ZMZN],"sat");
      $$TextziPrintf$n.C([k4,p4],function(v4){
       $$GHCziBase_zpzp.J(v4,u4);
      },[u4]);
     },[k4]);break;
    case 2:
     $A($$GHCziErr_divZZeroError);break;
    }
   },[l4,k4]);break;
  case 2:
   var w4=$t(function(){
    $$GHCziIntegerziType_integerToInt.C([l4],function(y4){
     $$GHCziShow_zdwintToDigit.C([y4],function(x4){
      $R(1,[x4],"C#");
     },[]);
    },[]);
   },[l4],"sat");
   $R(2,[w4,$$GHCziTypes_ZMZN],":");break;
  }
 },[l4,k4]);
},"at libraries/base/Text/Printf.hs:261:1");
var $$TextziPrintf$o=$F(1,function(z4){
 $M(z4,function(A4){
  switch(A4.g){
  case 1:
   var B4=A4.v[0];
   $$GHCziBase_ord.J(B4);break;
  case 3:
   var C4=A4.v[1];
   $$GHCziNum_zdfNumIntzuzdcfromInteger.J(C4);break;
  default:
   $A($$TextziPrintf$g);
  }
 },[]);
},"at libraries/base/Text/Printf.hs:252:1");
var $$TextziPrintf$p=$D(1,function(){
 $r(["0"]);
},"lvl10");
var $$TextziPrintf$q=$F(2,function(D4,E4){
 $$GHCziList_zdwlen.C([E4,goog.math.Long.fromBits(0,0)],function(N4){
  var M4=D4.subtract(N4);
  var F4=M4.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(F4.g){
  case 1:
   var G4=$d(2,[$$TextziPrintf$p,E4],"lvl27");
   var H4=$f(1,function(I4){
    var J4=I4.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(J4.g){
    case 1:
     var K4=$t(function(){
      var L4=I4.subtract(goog.math.Long.fromBits(1,0));
      H4.J(L4);
     },[I4,H4],"sat");
     $R(2,[$$TextziPrintf$p,K4],":");break;
    case 2:
     $A(G4);break;
    }
   },[G4],"xs");
   H4.J(M4);break;
  case 2:
   $A(E4);break;
  }
 },[E4,D4]);
},"at libraries/base/Text/Printf.hs:249:1");
var $$TextziPrintf$r=$D(2,function(){
 $r([$$TextziPrintf$j,$$GHCziTypes_ZMZN]);
},"lvl11");
var $$TextziPrintf$s=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl12");
var $$TextziPrintf$t=$F(3,function(O4,P4,Q4){
 $$GHCziIntegerziType_ltInteger.C([Q4,$$TextziPrintf_zdfPrintfArgInteger1],function(R4){
  switch(R4.g){
  case 1:
   var S4=$t(function(){
    $$GHCziShow_zdfShowIntegerzuzdcshow.C([Q4],function(T4){
     $$TextziPrintf$q.J(O4,T4);
    },[O4]);
   },[Q4,O4],"sat");
   $r([$$GHCziTypes_ZMZN,S4]);break;
  case 2:
   var U4=$t(function(){
    $$GHCziIntegerziType_negateInteger.C([Q4],function(V4){
     $$GHCziShow_zdwzdcshowsPrec.C([goog.math.Long.fromBits(0,0),V4,$$GHCziTypes_ZMZN],function(W4){
      $$TextziPrintf$q.J(O4,W4);
     },[O4]);
    },[O4]);
   },[Q4,O4],"sat");
   $r([$$TextziPrintf$r,U4]);break;
  }
 },[Q4,O4]);
},"at libraries/base/Text/Printf.hs:239:1");
var $$TextziPrintf$u=$F(2,function(X4,Y4){
 $M(Y4,function(Z4){
  switch(Z4.g){
  case 1:
   var a5=Z4.v[0];
   var b5=$t(function(){
    $M(a5,function(c5){
     var d5=c5.v[0];
     var e5=$hs_ordzh(d5);
     $$GHCziIntegerziType_smallInteger.J(e5);
    },[]);
   },[a5],"sat");
   $$TextziPrintf$t.J(goog.math.Long.fromBits(0,0),$$TextziPrintf_zdfPrintfArgInt1,b5);break;
  case 3:
   var f5=Z4.v[1];
   $$GHCziIntegerziType_ltInteger.C([f5,$$TextziPrintf_zdfPrintfArgInteger1],function(g5){
    switch(g5.g){
    case 1:
     var h5=$t(function(){
      $M(X4,function(i5){
       var j5=i5.v[0];
       $$GHCziShow_zdfShowIntegerzuzdcshow.C([f5],function(k5){
	$$TextziPrintf$q.J(j5,k5);
       },[j5]);
      },[f5]);
     },[f5,X4],"sat");
     $r([$$GHCziTypes_ZMZN,h5]);break;
    case 2:
     var l5=$t(function(){
      $M(X4,function(m5){
       var n5=m5.v[0];
       $$GHCziIntegerziType_negateInteger.C([f5],function(o5){
	$$GHCziShow_zdwzdcshowsPrec.C([goog.math.Long.fromBits(0,0),o5,$$GHCziTypes_ZMZN],function(p5){
	 $$TextziPrintf$q.J(n5,p5);
	},[n5]);
       },[n5]);
      },[f5]);
     },[f5,X4],"sat");
     $r([$$TextziPrintf$r,l5]);break;
    }
   },[f5,X4]);break;
  default:
   $A($$TextziPrintf$g);
  }
 },[X4]);
},"at libraries/base/Text/Printf.hs:239:1");
var $$TextziPrintf$v=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"lvl13");
var $$TextziPrintf$w=$F(3,function(q5,r5,s5){
 $M(s5,function(t5){
  switch(t5.g){
  case 1:
   var u5=t5.v[0];
   $M(u5,function(v5){
    var w5=v5.v[0];
    var y5=$hs_ordzh(w5);
    $$GHCziIntegerziType_smallInteger.C([y5],function(x5){
     $$TextziPrintf$n.J(q5,x5);
    },[q5]);
   },[q5]);break;
  case 3:
   var z5=t5.v[0],A5=t5.v[1];
   $M(r5,function(B5){
    var C5=B5.v[0];
    $$GHCziIntegerziType_ltInteger.C([A5,$$TextziPrintf_zdfPrintfArgInteger1],function(D5){
     switch(D5.g){
     case 1:
      $$TextziPrintf$n.C([q5,A5],function(E5){
       $$TextziPrintf$q.J(C5,E5);
      },[C5]);break;
     case 2:
      $$GHCziIntegerziType_timesInteger.C([$$TextziPrintf$v,z5],function(F5){
       $$GHCziIntegerziType_negateInteger.C([F5],function(G5){
	$$GHCziIntegerziType_plusInteger.C([G5,A5],function(H5){
	 $$TextziPrintf$n.C([q5,H5],function(I5){
	  $$TextziPrintf$q.J(C5,I5);
	 },[C5]);
	},[q5,C5]);
       },[q5,A5,C5]);
      },[q5,A5,C5]);break;
     }
    },[q5,A5,C5,z5]);
   },[q5,A5,z5]);break;
  default:
   $A($$TextziPrintf$g);
  }
 },[q5,r5]);
},"at libraries/base/Text/Printf.hs:244:1");
var $$TextziPrintf$x=$F(2,function(J5,K5){
 $M(K5,function(L5){
  switch(L5.g){
  case 1:
   $r([J5,$$GHCziTypes_ZMZN]);break;
  case 2:
   var M5=L5.v[0],N5=L5.v[1];
   $M(M5,function(O5){
    var P5=O5.v[0];
    var Q5=P5>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Q5.g){
    case 1:
     $r([J5,L5]);break;
    case 2:
     var R5=P5<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(R5.g){
     case 1:
      $r([J5,L5]);break;
     case 2:
      var S5=$t(function(){
       $M(J5,function(T5){
	var U5=T5.v[0];
	$$DataziChar_zdwdigitToInt.C([P5],function(X5){
	 var W5=U5.multiply(goog.math.Long.fromBits(10,0));
	 var V5=W5.add(X5);
	 $R(1,[V5],"I#");
	},[U5]);
       },[P5]);
      },[J5,P5],"sat");
      $$TextziPrintf$x.J(S5,N5);break;
     }break;
    }
   },[J5,L5,N5]);break;
  }
 },[J5]);
},"at libraries/base/Text/Printf.hs:269:1");
var $$TextziPrintf$y=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"lvl14");
var $$TextziPrintf$z=$F(5,function(Y5,Z5,a6,b6,c6){
 $M(b6,function(d6){
  switch(d6.g){
  case 1:
   $r([$$TextziPrintf$s,$$TextziPrintf$y,Y5,Z5,a6,$$GHCziTypes_ZMZN,c6]);break;
  case 2:
   var e6=d6.v[0],f6=d6.v[1];
   $M(e6,function(g6){
    var h6=g6.v[0];
    $M(h6,function(i6){
     switch(i6.toString()){
     case "*":
      var h7=$t(function(){
       $M(c6,function(i7){
	switch(i7.g){
	case 1:
	 $A($$TextziPrintf$e);break;
	case 2:
	 var j7=i7.v[0],k7=i7.v[1];
	 var l7=$t(function(){
	  $$TextziPrintf$o.J(j7);
	 },[j7],"sat");
	 $R(1,[k7,l7],"(,)");break;
	}
       },[]);
      },[c6],"ds3");
      var m7=$t(function(){
       $M(f6,function(n7){
	switch(n7.g){
	case 1:
	 var o7=$t(function(){
	  $M(h7,function(p7){
	   var q7=p7.v[0];
	   $A(q7);
	  },[]);
	 },[h7],"sat");
	 $R(1,[$$TextziPrintf$y,$$GHCziTypes_ZMZN,o7],"(,,)");break;
	case 2:
	 var r7=n7.v[0],s7=n7.v[1];
	 $M(r7,function(t7){
	  var u7=t7.v[0];
	  $M(u7,function(v7){
	   switch(v7.toString()){
	   case ".":
	    $M(s7,function(z7){
	     switch(z7.g){
	     case 1:
	      $$TextziPrintf$x.C([$$TextziPrintf$s,$$GHCziTypes_ZMZN],function(A7){
	       var B7=A7[0],C7=A7[1];
	       var D7=$t(function(){
		$M(h7,function(E7){
		 var F7=E7.v[0];
		 $A(F7);
		},[]);
	       },[h7],"sat");
	       $R(1,[B7,C7,D7],"(,,)");
	      },[h7]);break;
	     case 2:
	      var G7=z7.v[0],H7=z7.v[1];
	      $M(G7,function(I7){
	       var J7=I7.v[0];
	       $M(J7,function(K7){
		switch(K7.toString()){
		case "*":
		 var R7=$t(function(){
		  $M(h7,function(S7){
		   var T7=S7.v[0];
		   $M(T7,function(U7){
		    switch(U7.g){
		    case 1:
		     $A($$TextziPrintf$e);break;
		    case 2:
		     var V7=U7.v[0],W7=U7.v[1];
		     var X7=$t(function(){
		      $$TextziPrintf$o.J(V7);
		     },[V7],"sat");
		     $R(1,[W7,X7],"(,)");break;
		    }
		   },[]);
		  },[]);
		 },[h7],"ds12");
		 var Y7=$t(function(){
		  $M(R7,function(Z7){
		   var a8=Z7.v[0];
		   $A(a8);
		  },[]);
		 },[R7],"sat");
		 var b8=$t(function(){
		  $M(R7,function(c8){
		   var d8=c8.v[1];
		   $A(d8);
		  },[]);
		 },[R7],"sat");
		 $R(1,[b8,H7,Y7],"(,,)");break;
		default:
		 $$TextziPrintf$x.C([$$TextziPrintf$s,z7],function(L7){
		  var M7=L7[0],N7=L7[1];
		  var O7=$t(function(){
		   $M(h7,function(P7){
		    var Q7=P7.v[0];
		    $A(Q7);
		   },[]);
		  },[h7],"sat");
		  $R(1,[M7,N7,O7],"(,,)");
		 },[h7]);
		}
	       },[h7,z7,H7]);
	      },[h7,z7,H7]);break;
	     }
	    },[h7]);break;
	   default:
	    var w7=$t(function(){
	     $M(h7,function(x7){
	      var y7=x7.v[0];
	      $A(y7);
	     },[]);
	    },[h7],"sat");
	    $R(1,[$$TextziPrintf$y,n7,w7],"(,,)");
	   }
	  },[h7,n7,s7]);
	 },[h7,n7,s7]);break;
	}
       },[h7]);
      },[h7,f6],"ds4");
      var e8=$t(function(){
       $M(m7,function(f8){
	var g8=f8.v[2];
	$A(g8);
       },[]);
      },[m7],"sat");
      var h8=$t(function(){
       $M(m7,function(i8){
	var j8=i8.v[1];
	$A(j8);
       },[]);
      },[m7],"sat");
      var k8=$t(function(){
       $M(m7,function(l8){
	var m8=l8.v[0];
	$A(m8);
       },[]);
      },[m7],"sat");
      var n8=$t(function(){
       $M(h7,function(o8){
	var p8=o8.v[1];
	$A(p8);
       },[]);
      },[h7],"sat");
      $r([n8,k8,Y5,Z5,a6,h8,e8]);break;
     case "+":
      $$TextziPrintf$z.J(Y5,Z5,$$GHCziTypes_True,f6,c6);break;
     case "-":
      $$TextziPrintf$z.J($$GHCziTypes_True,Z5,a6,f6,c6);break;
     case ".":
      var q8=$t(function(){
       $M(f6,function(r8){
	switch(r8.g){
	case 1:
	 $$TextziPrintf$x.C([$$TextziPrintf$s,$$GHCziTypes_ZMZN],function(s8){
	  var t8=s8[0],u8=s8[1];
	  $R(1,[t8,u8,c6],"(,,)");
	 },[c6]);break;
	case 2:
	 var v8=r8.v[0],w8=r8.v[1];
	 $M(v8,function(x8){
	  var y8=x8.v[0];
	  $M(y8,function(z8){
	   switch(z8.toString()){
	   case "*":
	    var D8=$t(function(){
	     $M(c6,function(E8){
	      switch(E8.g){
	      case 1:
	       $A($$TextziPrintf$e);break;
	      case 2:
	       var F8=E8.v[0],G8=E8.v[1];
	       var H8=$t(function(){
		$$TextziPrintf$o.J(F8);
	       },[F8],"sat");
	       $R(1,[G8,H8],"(,)");break;
	      }
	     },[]);
	    },[c6],"ds7");
	    var I8=$t(function(){
	     $M(D8,function(J8){
	      var K8=J8.v[0];
	      $A(K8);
	     },[]);
	    },[D8],"sat");
	    var L8=$t(function(){
	     $M(D8,function(M8){
	      var N8=M8.v[1];
	      $A(N8);
	     },[]);
	    },[D8],"sat");
	    $R(1,[L8,w8,I8],"(,,)");break;
	   default:
	    $$TextziPrintf$x.C([$$TextziPrintf$s,r8],function(A8){
	     var B8=A8[0],C8=A8[1];
	     $R(1,[B8,C8,c6],"(,,)");
	    },[c6]);
	   }
	  },[c6,r8,w8]);
	 },[c6,r8,w8]);break;
	}
       },[c6]);
      },[c6,f6],"ds3");
      var O8=$t(function(){
       $M(q8,function(P8){
	var Q8=P8.v[2];
	$A(Q8);
       },[]);
      },[q8],"sat");
      var R8=$t(function(){
       $M(q8,function(S8){
	var T8=S8.v[1];
	$A(T8);
       },[]);
      },[q8],"sat");
      var U8=$t(function(){
       $M(q8,function(V8){
	var W8=V8.v[0];
	$A(W8);
       },[]);
      },[q8],"sat");
      $r([$$TextziPrintf$s,U8,Y5,Z5,a6,R8,O8]);break;
     case "0":
      $$TextziPrintf$z.J(Y5,$$GHCziTypes_True,a6,f6,c6);break;
     default:
      var j6=i6>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(j6.g){
      case 1:
       $r([$$TextziPrintf$s,$$TextziPrintf$y,Y5,Z5,a6,d6,c6]);break;
      case 2:
       var k6=i6<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(k6.g){
       case 1:
	$r([$$TextziPrintf$s,$$TextziPrintf$y,Y5,Z5,a6,d6,c6]);break;
       case 2:
	var l6=$t(function(){
	 $$TextziPrintf$x.C([$$TextziPrintf$s,d6],function(m6){
	  var n6=m6[0],o6=m6[1];
	  $R(1,[n6,o6],"(,)");
	 },[]);
	},[d6],"ds3");
	var p6=$t(function(){
	 $M(l6,function(q6){
	  var r6=q6.v[1];
	  $M(r6,function(s6){
	   switch(s6.g){
	   case 1:
	    $R(1,[$$TextziPrintf$y,$$GHCziTypes_ZMZN,c6],"(,,)");break;
	   case 2:
	    var t6=s6.v[0],u6=s6.v[1];
	    $M(t6,function(v6){
	     var w6=v6.v[0];
	     $M(w6,function(x6){
	      switch(x6.toString()){
	      case ".":
	       $M(u6,function(y6){
		switch(y6.g){
		case 1:
		 $$TextziPrintf$x.C([$$TextziPrintf$s,$$GHCziTypes_ZMZN],function(z6){
		  var A6=z6[0],B6=z6[1];
		  $R(1,[A6,B6,c6],"(,,)");
		 },[c6]);break;
		case 2:
		 var C6=y6.v[0],D6=y6.v[1];
		 $M(C6,function(E6){
		  var F6=E6.v[0];
		  $M(F6,function(G6){
		   switch(G6.toString()){
		   case "*":
		    var K6=$t(function(){
		     $M(c6,function(L6){
		      switch(L6.g){
		      case 1:
		       $A($$TextziPrintf$e);break;
		      case 2:
		       var M6=L6.v[0],N6=L6.v[1];
		       var O6=$t(function(){
			$$TextziPrintf$o.J(M6);
		       },[M6],"sat");
		       $R(1,[N6,O6],"(,)");break;
		      }
		     },[]);
		    },[c6],"ds12");
		    var P6=$t(function(){
		     $M(K6,function(Q6){
		      var R6=Q6.v[0];
		      $A(R6);
		     },[]);
		    },[K6],"sat");
		    var S6=$t(function(){
		     $M(K6,function(T6){
		      var U6=T6.v[1];
		      $A(U6);
		     },[]);
		    },[K6],"sat");
		    $R(1,[S6,D6,P6],"(,,)");break;
		   default:
		    $$TextziPrintf$x.C([$$TextziPrintf$s,y6],function(H6){
		     var I6=H6[0],J6=H6[1];
		     $R(1,[I6,J6,c6],"(,,)");
		    },[c6]);
		   }
		  },[c6,y6,D6]);
		 },[c6,y6,D6]);break;
		}
	       },[c6]);break;
	      default:
	       $R(1,[$$TextziPrintf$y,s6,c6],"(,,)");
	      }
	     },[c6,s6,u6]);
	    },[c6,s6,u6]);break;
	   }
	  },[c6]);
	 },[c6]);
	},[c6,l6],"ds4");
	var V6=$t(function(){
	 $M(p6,function(W6){
	  var X6=W6.v[2];
	  $A(X6);
	 },[]);
	},[p6],"sat");
	var Y6=$t(function(){
	 $M(p6,function(Z6){
	  var a7=Z6.v[1];
	  $A(a7);
	 },[]);
	},[p6],"sat");
	var b7=$t(function(){
	 $M(p6,function(c7){
	  var d7=c7.v[0];
	  $A(d7);
	 },[]);
	},[p6],"sat");
	var e7=$t(function(){
	 $M(l6,function(f7){
	  var g7=f7.v[0];
	  $A(g7);
	 },[]);
	},[l6],"sat");
	$r([e7,b7,Y5,Z5,a6,Y6,V6]);break;
       }break;
      }
     }
    },[Y5,Z5,a6,c6,d6,f6]);
   },[Y5,Z5,a6,c6,d6,f6]);break;
  }
 },[Y5,Z5,a6,c6]);
},"at libraries/base/Text/Printf.hs:273:1");
var $$TextziPrintf$A=$D(1,function(){
 $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);
},"lvl15");
var $$TextziPrintf$B=$F(3,function(X8,Y8,Z8){
 $M(Z8,function(a9){
  switch(a9.g){
  case 4:
   var b9=a9.v[0];
   var T9=$hs_ordzh(X8);
   var S9=$hs_narrow32Intzh(T9);
   var $ff=u_iswupper(S9);
   var c9=[$$GHCziPrim_realWorldzh,$ff];
   var d9=c9[1];
   var R9=$hs_ordzh(X8);
   var Q9=$hs_narrow32Intzh(R9);
   var $ff=u_towlower(Q9);
   var e9=[$$GHCziPrim_realWorldzh,$ff];
   var f9=e9[1];
   var h9=$hs_narrow32Intzh(f9);
   var P9=$hs_int2Wordzh(h9);
   var g9=$hs_leWordzh(P9,goog.math.Long.fromBits(1114111,0));
   switch(g9.g){
   case 1:
    $$GHCziUnicode_toLower1.J(h9);break;
   case 2:
    $b(function(){
     var w9=$hs_chrzh(h9);
     switch(w9.toString()){
     case "e":
      $M(b9,function(x9){
       var y9=x9.v[0];
       var z9=$t(function(){
	$M(Y8,function(A9){
	 var B9=A9.v[0];
	 var C9=B9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(C9.g){
	 case 1:
	  $R(2,[A9],"Just");break;
	 case 2:
	  $R(1,[],"Nothing");break;
	 }
	},[]);
       },[Y8],"sat");
       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFExponent,z9,y9);
      },[Y8,d9]);break;
     case "f":
      $M(b9,function(D9){
       var E9=D9.v[0];
       var F9=$t(function(){
	$M(Y8,function(G9){
	 var H9=G9.v[0];
	 var I9=H9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(I9.g){
	 case 1:
	  $R(2,[G9],"Just");break;
	 case 2:
	  $R(1,[],"Nothing");break;
	 }
	},[]);
       },[Y8],"sat");
       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFFixed,F9,E9);
      },[Y8,d9]);break;
     case "g":
      $M(b9,function(J9){
       var K9=J9.v[0];
       var L9=$t(function(){
	$M(Y8,function(M9){
	 var N9=M9.v[0];
	 var O9=N9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(O9.g){
	 case 1:
	  $R(2,[M9],"Just");break;
	 case 2:
	  $R(1,[],"Nothing");break;
	 }
	},[]);
       },[Y8],"sat");
       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFGeneric,L9,K9);
      },[Y8,d9]);break;
     default:
      $A($$TextziPrintf$l);
     }
    },[],function(i9){
     var j9=$hs_narrow32Intzh(d9);
     switch(j9.toString()){
     case "0":
      $M(i9,function(q9){
       switch(q9.g){
       case 1:
	$A($$TextziPrintf$A);break;
       case 2:
	var r9=q9.v[0],s9=q9.v[1];
	$M(r9,function(t9){
	 var u9=t9.v[0];
	 $M(u9,function(v9){
	  switch(v9.toString()){
	  case "-":
	   $R(1,[$$TextziPrintf$m,s9],"(,)");break;
	  default:
	   $R(1,[$$GHCziTypes_ZMZN,q9],"(,)");
	  }
	 },[q9,s9]);
	},[q9,s9]);break;
       }
      },[]);break;
     default:
      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,i9],function(k9){
       switch(k9.g){
       case 1:
	$A($$TextziPrintf$A);break;
       case 2:
	var l9=k9.v[0],m9=k9.v[1];
	$M(l9,function(n9){
	 var o9=n9.v[0];
	 $M(o9,function(p9){
	  switch(p9.toString()){
	  case "-":
	   $R(1,[$$TextziPrintf$m,m9],"(,)");break;
	  default:
	   $R(1,[$$GHCziTypes_ZMZN,k9],"(,)");
	  }
	 },[k9,m9]);
	},[k9,m9]);break;
       }
      },[]);
     }
    },[d9]);break;
   }break;
  case 5:
   var U9=a9.v[0];
   var Ma=$hs_ordzh(X8);
   var La=$hs_narrow32Intzh(Ma);
   var $ff=u_iswupper(La);
   var V9=[$$GHCziPrim_realWorldzh,$ff];
   var W9=V9[1];
   var Ka=$hs_ordzh(X8);
   var Ja=$hs_narrow32Intzh(Ka);
   var $ff=u_towlower(Ja);
   var X9=[$$GHCziPrim_realWorldzh,$ff];
   var Y9=X9[1];
   var aa=$hs_narrow32Intzh(Y9);
   var Ia=$hs_int2Wordzh(aa);
   var Z9=$hs_leWordzh(Ia,goog.math.Long.fromBits(1114111,0));
   switch(Z9.g){
   case 1:
    $$GHCziUnicode_toLower1.J(aa);break;
   case 2:
    $b(function(){
     var pa=$hs_chrzh(aa);
     switch(pa.toString()){
     case "e":
      $M(U9,function(qa){
       var ra=qa.v[0];
       var sa=$t(function(){
	$M(Y8,function(ta){
	 var ua=ta.v[0];
	 var va=ua.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(va.g){
	 case 1:
	  $R(2,[ta],"Just");break;
	 case 2:
	  $R(1,[],"Nothing");break;
	 }
	},[]);
       },[Y8],"sat");
       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFExponent,sa,ra);
      },[Y8,W9]);break;
     case "f":
      $M(U9,function(wa){
       var xa=wa.v[0];
       var ya=$t(function(){
	$M(Y8,function(za){
	 var Aa=za.v[0];
	 var Ba=Aa.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Ba.g){
	 case 1:
	  $R(2,[za],"Just");break;
	 case 2:
	  $R(1,[],"Nothing");break;
	 }
	},[]);
       },[Y8],"sat");
       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFFixed,ya,xa);
      },[Y8,W9]);break;
     case "g":
      $M(U9,function(Ca){
       var Da=Ca.v[0];
       var Ea=$t(function(){
	$M(Y8,function(Fa){
	 var Ga=Fa.v[0];
	 var Ha=Ga.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Ha.g){
	 case 1:
	  $R(2,[Fa],"Just");break;
	 case 2:
	  $R(1,[],"Nothing");break;
	 }
	},[]);
       },[Y8],"sat");
       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFGeneric,Ea,Da);
      },[Y8,W9]);break;
     default:
      $A($$TextziPrintf$i);
     }
    },[],function(ba){
     var ca=$hs_narrow32Intzh(W9);
     switch(ca.toString()){
     case "0":
      $M(ba,function(ja){
       switch(ja.g){
       case 1:
	$A($$TextziPrintf$A);break;
       case 2:
	var ka=ja.v[0],la=ja.v[1];
	$M(ka,function(ma){
	 var na=ma.v[0];
	 $M(na,function(oa){
	  switch(oa.toString()){
	  case "-":
	   $R(1,[$$TextziPrintf$k,la],"(,)");break;
	  default:
	   $R(1,[$$GHCziTypes_ZMZN,ja],"(,)");
	  }
	 },[ja,la]);
	},[ja,la]);break;
       }
      },[]);break;
     default:
      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,ba],function(da){
       switch(da.g){
       case 1:
	$A($$TextziPrintf$A);break;
       case 2:
	var ea=da.v[0],fa=da.v[1];
	$M(ea,function(ga){
	 var ha=ga.v[0];
	 $M(ha,function(ia){
	  switch(ia.toString()){
	  case "-":
	   $R(1,[$$TextziPrintf$k,fa],"(,)");break;
	  default:
	   $R(1,[$$GHCziTypes_ZMZN,da],"(,)");
	  }
	 },[da,fa]);
	},[da,fa]);break;
       }
      },[]);
     }
    },[W9]);break;
   }break;
  default:
   $A($$TextziPrintf$g);
  }
 },[X8,Y8]);
},"at libraries/base/Text/Printf.hs:308:1");
var $$TextziPrintf$C=$D(1,function(){
 $r(["%"]);
},"lvl16");
var $$TextziPrintf$D=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"lvl17");
var $$TextziPrintf$E=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"lvl18");
var $$TextziPrintf$F=$D(1,function(){
 $r([goog.math.Long.fromBits(8,0)]);
},"lvl19");
var $$TextziPrintf$G=$D(1,function(){
 $r(["+"]);
},"lvl20");
var $$TextziPrintf$H=$D(2,function(){
 $r([$$TextziPrintf$G,$$GHCziTypes_ZMZN]);
},"lvl21");
var $$TextziPrintf$I=$D(1,function(){
 $r([" "]);
},"lvl22");
var $$TextziPrintf$J=$F(1,function(Na){
 var Oa=$d(1,[Na],"sat");
 $$GHCziBase_chr1.J(Oa);
},"lvl23");
var $$TextziPrintf$K=$F(1,function(Pa){
 var Qa=$t(function(){
  var Ra=$d(2,[Pa,$$GHCziTypes_ZMZN],"sat");
  $$GHCziCString_unpackAppendCStringzh.J("bad formatting char ",Ra);
 },[Pa],"sat");
 $$TextziPrintf$a.J(Qa);
},"lvl24");
var $$TextziReadziLex_lexzq12=$D(1,function(){
 $r([goog.math.Long.fromBits(8,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq13=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq14=$t(function(){
 $$GHCziCString_unpackCStringzh.J("_'");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq38=$t(function(){
 $$GHCziCString_unpackCStringzh.J("..");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq37=$t(function(){
 $$GHCziCString_unpackCStringzh.J("::");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq36=$D(1,function(){
 $r(["="]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq34=$D(1,function(){
 $r(["\\"]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq32=$D(1,function(){
 $r(["|"]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq30=$t(function(){
 $$GHCziCString_unpackCStringzh.J("<-");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq29=$t(function(){
 $$GHCziCString_unpackCStringzh.J("->");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq28=$D(1,function(){
 $r(["@"]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq26=$D(1,function(){
 $r(["~"]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq24=$t(function(){
 $$GHCziCString_unpackCStringzh.J("=>");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq40=$t(function(){
 $$GHCziCString_unpackCStringzh.J("!@#$%&*+./<=>?\\^|:-~");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzqzuzdsval=$f(3,function(n4,o4,p4){
 $M(p4,function(q4){
  switch(q4.g){
  case 1:
   $A(o4);break;
  case 2:
   var r4=q4.v[0],s4=q4.v[1];
   $M(r4,function(t4){
    var u4=t4.v[0];
    $$GHCziIntegerziType_smallInteger.C([u4],function(v4){
     $$GHCziIntegerziType_timesInteger.C([o4,n4],function(w4){
      $$GHCziIntegerziType_plusInteger.C([w4,v4],function(x4){
       $$TextziReadziLex_lexzqzuzdsval.J(n4,x4,s4);
      },[n4,s4]);
     },[n4,s4,v4]);
    },[o4,n4,s4]);
   },[o4,n4,s4]);break;
  }
 },[o4,n4]);
},[],"at libraries/base/Text/Read/Lex.hs:499:1");
var $$TextziReadziLex_lexzq5=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_numberToInteger1=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq8=$f(2,function(ma,na){
 var oa=$f(1,function(pa){
  $M(pa,function(qa){
   switch(qa.g){
   case 1:
    $R(3,[],"Fail");break;
   case 2:
    na.J(qa);break;
   }
  },[na]);
 },[na],"lvl90");
 var ra=$f(1,function(sa){
  $M(sa,function(ta){
   switch(ta.g){
   case 1:
    $R(3,[],"Fail");break;
   case 2:
    var ua=ta.v[0],va=ta.v[1];
    $M(ma,function(wa){
     var xa=wa.v[0];
     $M(ua,function(ya){
      var za=ya.v[0];
      var Aa=$f(1,function(Ba){
       var Ca=$t(function(){
	var Da=$f(2,function(Ea,Fa){
	 $M(Ea,function(Ga){
	  switch(Ga.g){
	  case 1:
	   var Ha=$t(function(){
	    Fa.J($$GHCziTypes_ZMZN);
	   },[Fa],"x34");
	   var Ia=$f(1,function(Ja){
	    Ja.J(Ha);
	   },[Ha],"sat");
	   $A(Ia);break;
	  case 2:
	   var Ka=Ga.v[0],La=Ga.v[1];
	   $M(Ka,function(Ma){
	    var Na=Ma.v[0];
	    var Oa=$f(1,function(Pa){
	     var Qa=$t(function(){
	      var Ra=$f(1,function(Sa){
	       var Ta=$d(2,[Pa,Sa],"sat");
	       Fa.J(Ta);
	      },[Fa,Pa],"sat");
	      Da.J(La,Ra);
	     },[Fa,La,Pa,Da],"lvl92");
	     var Ua=$f(1,function(Va){
	      var Wa=$t(function(){
	       Qa.J(Va);
	      },[Qa,Va],"lvl93");
	      var Xa=$f(1,function(Ya){
	       $A(Wa);
	      },[Wa],"sat");
	      $R(1,[Xa],"Get");
	     },[Qa],"sat");
	     $A(Ua);
	    },[Fa,La,Da],"$j1");
	    $M(xa,function(Za){
	     switch(Za.toString()){
	     case "8":
	      var ab="0"<=Na?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(ab.g){
	      case 1:
	       var bb=$t(function(){
		Fa.J($$GHCziTypes_ZMZN);
	       },[Fa],"x34");
	       var cb=$f(1,function(db){
		db.J(bb);
	       },[bb],"sat");
	       $A(cb);break;
	      case 2:
	       var eb=Na<="7"?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(eb.g){
	       case 1:
		var fb=$t(function(){
		 Fa.J($$GHCziTypes_ZMZN);
		},[Fa],"x34");
		var gb=$f(1,function(hb){
		 hb.J(fb);
		},[fb],"sat");
		$A(gb);break;
	       case 2:
		var kb=$hs_ordzh(Na);
		var jb=kb.subtract(goog.math.Long.fromBits(48,0));
		var ib=$d(1,[jb],"sat");
		Oa.J(ib);break;
	       }break;
	      }break;
	     case "10":
	      var lb="0"<=Na?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(lb.g){
	      case 1:
	       var mb=$t(function(){
		Fa.J($$GHCziTypes_ZMZN);
	       },[Fa],"x34");
	       var nb=$f(1,function(ob){
		ob.J(mb);
	       },[mb],"sat");
	       $A(nb);break;
	      case 2:
	       var pb=Na<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(pb.g){
	       case 1:
		var qb=$t(function(){
		 Fa.J($$GHCziTypes_ZMZN);
		},[Fa],"x34");
		var rb=$f(1,function(sb){
		 sb.J(qb);
		},[qb],"sat");
		$A(rb);break;
	       case 2:
		var vb=$hs_ordzh(Na);
		var ub=vb.subtract(goog.math.Long.fromBits(48,0));
		var tb=$d(1,[ub],"sat");
		Oa.J(tb);break;
	       }break;
	      }break;
	     case "16":
	      var wb=$t(function(){
	       var xb="a"<=Na?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(xb.g){
	       case 1:
		var yb="A"<=Na?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(yb.g){
		case 1:
		 $R(1,[],"Nothing");break;
		case 2:
		 var zb=Na<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(zb.g){
		 case 1:
		  $R(1,[],"Nothing");break;
		 case 2:
		  var Db=$hs_ordzh(Na);
		  var Cb=Db.subtract(goog.math.Long.fromBits(65,0));
		  var Bb=Cb.add(goog.math.Long.fromBits(10,0));
		  var Ab=$d(1,[Bb],"sat");
		  $R(2,[Ab],"Just");break;
		 }break;
		}break;
	       case 2:
		var Eb=Na<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Eb.g){
		case 1:
		 var Fb="A"<=Na?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Fb.g){
		 case 1:
		  $R(1,[],"Nothing");break;
		 case 2:
		  var Gb=Na<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Gb.g){
		  case 1:
		   $R(1,[],"Nothing");break;
		  case 2:
		   var Kb=$hs_ordzh(Na);
		   var Jb=Kb.subtract(goog.math.Long.fromBits(65,0));
		   var Ib=Jb.add(goog.math.Long.fromBits(10,0));
		   var Hb=$d(1,[Ib],"sat");
		   $R(2,[Hb],"Just");break;
		  }break;
		 }break;
		case 2:
		 var Ob=$hs_ordzh(Na);
		 var Nb=Ob.subtract(goog.math.Long.fromBits(97,0));
		 var Mb=Nb.add(goog.math.Long.fromBits(10,0));
		 var Lb=$d(1,[Mb],"sat");
		 $R(2,[Lb],"Just");break;
		}break;
	       }
	      },[Na],"$w$j");
	      var Pb="0"<=Na?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Pb.g){
	      case 1:
	       $M(wb,function(Qb){
		switch(Qb.g){
		case 1:
		 var Rb=$t(function(){
		  Fa.J($$GHCziTypes_ZMZN);
		 },[Fa],"x34");
		 var Sb=$f(1,function(Tb){
		  Tb.J(Rb);
		 },[Rb],"sat");
		 $A(Sb);break;
		case 2:
		 var Ub=Qb.v[0];
		 Oa.J(Ub);break;
		}
	       },[Fa,La,Da,Oa]);break;
	      case 2:
	       var Vb=Na<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Vb.g){
	       case 1:
		$M(wb,function(Wb){
		 switch(Wb.g){
		 case 1:
		  var Xb=$t(function(){
		   Fa.J($$GHCziTypes_ZMZN);
		  },[Fa],"x34");
		  var Yb=$f(1,function(Zb){
		   Zb.J(Xb);
		  },[Xb],"sat");
		  $A(Yb);break;
		 case 2:
		  var ac=Wb.v[0];
		  Oa.J(ac);break;
		 }
		},[Fa,La,Da,Oa]);break;
	       case 2:
		var dc=$hs_ordzh(Na);
		var cc=dc.subtract(goog.math.Long.fromBits(48,0));
		var bc=$d(1,[cc],"sat");
		Oa.J(bc);break;
	       }break;
	      }break;
	     default:
	      $A($$TextziReadziLex$L);
	     }
	    },[Fa,La,Da,Oa,Na]);
	   },[Fa,La,Da,xa]);break;
	  }
	 },[Fa,Da,xa]);
	},[xa],"scan");
	var ec=$f(1,function(fc){
	 $R(2,[Ba,fc],":");
	},[Ba],"sat");
	Da.J(va,ec);
       },[xa,va,Ba],"lvl91");
       var gc=$f(1,function(hc){
	var ic=$t(function(){
	 Ca.J(hc);
	},[Ca,hc],"lvl92");
	var jc=$f(1,function(kc){
	 $A(ic);
	},[ic],"sat");
	$R(1,[jc],"Get");
       },[Ca],"sat");
       $A(gc);
      },[xa,va],"$j");
      $M(xa,function(lc){
       switch(lc.toString()){
       case "8":
	var mc="0"<=za?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(mc.g){
	case 1:
	 $R(3,[],"Fail");break;
	case 2:
	 var nc=za<="7"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(nc.g){
	 case 1:
	  $R(3,[],"Fail");break;
	 case 2:
	  var qc=$hs_ordzh(za);
	  var pc=qc.subtract(goog.math.Long.fromBits(48,0));
	  var oc=$d(1,[pc],"sat");
	  Aa.J(oc,oa);break;
	 }break;
	}break;
       case "10":
	var rc="0"<=za?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(rc.g){
	case 1:
	 $R(3,[],"Fail");break;
	case 2:
	 var sc=za<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(sc.g){
	 case 1:
	  $R(3,[],"Fail");break;
	 case 2:
	  var vc=$hs_ordzh(za);
	  var uc=vc.subtract(goog.math.Long.fromBits(48,0));
	  var tc=$d(1,[uc],"sat");
	  Aa.J(tc,oa);break;
	 }break;
	}break;
       case "16":
	var wc=$t(function(){
	 var xc="a"<=za?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(xc.g){
	 case 1:
	  var yc="A"<=za?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(yc.g){
	  case 1:
	   $R(1,[],"Nothing");break;
	  case 2:
	   var zc=za<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(zc.g){
	   case 1:
	    $R(1,[],"Nothing");break;
	   case 2:
	    var Dc=$hs_ordzh(za);
	    var Cc=Dc.subtract(goog.math.Long.fromBits(65,0));
	    var Bc=Cc.add(goog.math.Long.fromBits(10,0));
	    var Ac=$d(1,[Bc],"sat");
	    $R(2,[Ac],"Just");break;
	   }break;
	  }break;
	 case 2:
	  var Ec=za<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Ec.g){
	  case 1:
	   var Fc="A"<=za?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Fc.g){
	   case 1:
	    $R(1,[],"Nothing");break;
	   case 2:
	    var Gc=za<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Gc.g){
	    case 1:
	     $R(1,[],"Nothing");break;
	    case 2:
	     var Kc=$hs_ordzh(za);
	     var Jc=Kc.subtract(goog.math.Long.fromBits(65,0));
	     var Ic=Jc.add(goog.math.Long.fromBits(10,0));
	     var Hc=$d(1,[Ic],"sat");
	     $R(2,[Hc],"Just");break;
	    }break;
	   }break;
	  case 2:
	   var Oc=$hs_ordzh(za);
	   var Nc=Oc.subtract(goog.math.Long.fromBits(97,0));
	   var Mc=Nc.add(goog.math.Long.fromBits(10,0));
	   var Lc=$d(1,[Mc],"sat");
	   $R(2,[Lc],"Just");break;
	  }break;
	 }
	},[za],"$w$j");
	var Pc="0"<=za?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Pc.g){
	case 1:
	 $M(wc,function(Qc){
	  switch(Qc.g){
	  case 1:
	   $R(3,[],"Fail");break;
	  case 2:
	   var Rc=Qc.v[0];
	   Aa.J(Rc,oa);break;
	  }
	 },[oa,Aa]);break;
	case 2:
	 var Sc=za<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Sc.g){
	 case 1:
	  $M(wc,function(Tc){
	   switch(Tc.g){
	   case 1:
	    $R(3,[],"Fail");break;
	   case 2:
	    var Uc=Tc.v[0];
	    Aa.J(Uc,oa);break;
	   }
	  },[oa,Aa]);break;
	 case 2:
	  var Xc=$hs_ordzh(za);
	  var Wc=Xc.subtract(goog.math.Long.fromBits(48,0));
	  var Vc=$d(1,[Wc],"sat");
	  Aa.J(Vc,oa);break;
	 }break;
	}break;
       default:
	$A($$TextziReadziLex$L);
       }
      },[oa,Aa,za]);
     },[oa,xa,va]);
    },[oa,ua,va]);break;
   }
  },[oa,ma]);
 },[oa,ma],"sat");
 $R(2,[ra],"Look");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq7=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq10=$f(1,function(Yc){
 var Zc=$t(function(){
  var ad=$f(1,function(bd){
   var cd=$d(2,[bd],"sat");
   Yc.J(cd);
  },[Yc],"sat");
  $$TextziReadziLex_lexzq8.J($$TextziReadziLex_lexzq7,ad);
 },[Yc],"lvl90");
 var dd=$f(1,function(ed){
  $M(ed,function(fd){
   var gd=fd.v[0];
   $M(gd,function(hd){
    switch(hd.toString()){
    case ".":
     $A(Zc);break;
    default:
     $R(3,[],"Fail");
    }
   },[Zc]);
  },[Zc]);
 },[Zc],"sat");
 $R(1,[dd],"Get");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexChar2=$f(1,function(id){
 var jd=$t(function(){
  id.J($$TextziReadziLex$E3);
 },[id],"lvl90");
 var kd=$t(function(){
  id.J($$TextziReadziLex$D3);
 },[id],"lvl91");
 var ld=$t(function(){
  id.J($$TextziReadziLex$C3);
 },[id],"lvl92");
 var md=$t(function(){
  id.J($$TextziReadziLex$B3);
 },[id],"lvl93");
 var nd=$t(function(){
  id.J($$TextziReadziLex$A3);
 },[id],"lvl94");
 var od=$t(function(){
  id.J($$TextziReadziLex$z3);
 },[id],"lvl95");
 var pd=$t(function(){
  id.J($$TextziReadziLex$y3);
 },[id],"lvl96");
 var qd=$t(function(){
  id.J($$TextziReadziLex$x3);
 },[id],"lvl97");
 var rd=$t(function(){
  id.J($$TextziReadziLex$w3);
 },[id],"lvl98");
 var sd=$t(function(){
  id.J($$TextziReadziLex$v3);
 },[id],"lvl99");
 var td=$t(function(){
  var ud=$t(function(){
   var vd=$t(function(){
    id.J($$TextziReadziLex$l4);
   },[id],"lvl100");
   var wd=$t(function(){
    id.J($$TextziReadziLex$k4);
   },[id],"lvl101");
   var xd=$t(function(){
    id.J($$TextziReadziLex$j4);
   },[id],"lvl102");
   var yd=$t(function(){
    id.J($$TextziReadziLex$i4);
   },[id],"lvl103");
   var zd=$t(function(){
    id.J($$TextziReadziLex$h4);
   },[id],"lvl104");
   var Ad=$t(function(){
    id.J($$TextziReadziLex$g4);
   },[id],"lvl105");
   var Bd=$t(function(){
    id.J($$TextziReadziLex$f4);
   },[id],"lvl106");
   var Cd=$t(function(){
    id.J($$TextziReadziLex$e4);
   },[id],"lvl107");
   var Dd=$t(function(){
    id.J($$TextziReadziLex$d4);
   },[id],"lvl108");
   var Ed=$t(function(){
    id.J($$TextziReadziLex$c4);
   },[id],"lvl109");
   var Fd=$t(function(){
    id.J($$TextziReadziLex$b4);
   },[id],"lvl110");
   var Gd=$t(function(){
    id.J($$TextziReadziLex$a4);
   },[id],"lvl111");
   var Hd=$t(function(){
    id.J($$TextziReadziLex$Z3);
   },[id],"lvl112");
   var Id=$t(function(){
    id.J($$TextziReadziLex$Y3);
   },[id],"lvl113");
   var Jd=$t(function(){
    id.J($$TextziReadziLex$X3);
   },[id],"lvl114");
   var Kd=$t(function(){
    id.J($$TextziReadziLex$W3);
   },[id],"lvl115");
   var Ld=$t(function(){
    id.J($$TextziReadziLex$V3);
   },[id],"lvl116");
   var Md=$t(function(){
    id.J($$TextziReadziLex$U3);
   },[id],"lvl117");
   var Nd=$t(function(){
    id.J($$TextziReadziLex$T3);
   },[id],"lvl118");
   var Od=$t(function(){
    id.J($$TextziReadziLex$S3);
   },[id],"lvl119");
   var Pd=$t(function(){
    id.J($$TextziReadziLex$R3);
   },[id],"lvl120");
   var Qd=$t(function(){
    id.J($$TextziReadziLex$Q3);
   },[id],"lvl121");
   var Rd=$t(function(){
    id.J($$TextziReadziLex$P3);
   },[id],"lvl122");
   var Sd=$t(function(){
    id.J($$TextziReadziLex$O3);
   },[id],"lvl123");
   var Td=$t(function(){
    id.J($$TextziReadziLex$N3);
   },[id],"lvl124");
   var Ud=$t(function(){
    id.J($$TextziReadziLex$M3);
   },[id],"lvl125");
   var Vd=$t(function(){
    id.J($$TextziReadziLex$L3);
   },[id],"lvl126");
   var Wd=$t(function(){
    id.J($$TextziReadziLex$K3);
   },[id],"lvl127");
   var Xd=$t(function(){
    id.J($$TextziReadziLex$J3);
   },[id],"lvl128");
   var Yd=$t(function(){
    id.J($$TextziReadziLex$I3);
   },[id],"lvl129");
   var Zd=$t(function(){
    id.J($$TextziReadziLex$H3);
   },[id],"lvl130");
   var ae=$t(function(){
    id.J($$TextziReadziLex$G3);
   },[id],"lvl131");
   var be=$f(1,function(ce){
    $M(ce,function(de){
     var ee=de.v[0];
     $M(ee,function(fe){
      switch(fe.toString()){
      case "@":
       $A(ae);break;
      case "A":
       $A(Zd);break;
      case "B":
       $A(Yd);break;
      case "C":
       $A(Xd);break;
      case "D":
       $A(Wd);break;
      case "E":
       $A(Vd);break;
      case "F":
       $A(Ud);break;
      case "G":
       $A(Td);break;
      case "H":
       $A(Sd);break;
      case "I":
       $A(Rd);break;
      case "J":
       $A(Qd);break;
      case "K":
       $A(Pd);break;
      case "L":
       $A(Od);break;
      case "M":
       $A(Nd);break;
      case "N":
       $A(Md);break;
      case "O":
       $A(Ld);break;
      case "P":
       $A(Kd);break;
      case "Q":
       $A(Jd);break;
      case "R":
       $A(Id);break;
      case "S":
       $A(Hd);break;
      case "T":
       $A(Gd);break;
      case "U":
       $A(Fd);break;
      case "V":
       $A(Ed);break;
      case "W":
       $A(Dd);break;
      case "X":
       $A(Cd);break;
      case "Y":
       $A(Bd);break;
      case "Z":
       $A(Ad);break;
      case "[":
       $A(zd);break;
      case "\\":
       $A(yd);break;
      case "]":
       $A(xd);break;
      case "^":
       $A(wd);break;
      case "_":
       $A(vd);break;
      default:
       $R(3,[],"Fail");
      }
     },[vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,ae]);
    },[vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,ae]);
   },[vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,ae],"a95");
   var ge=$d(1,[be],"lvl132");
   var he=$t(function(){
    var ie=$f(1,function(je){
     var ke=$d(1,[je,$$GHCziTypes_True],"sat");
     id.J(ke);
    },[id],"k1");
    var le=$t(function(){
     $$TextziReadziLex$q3.J(ie);
    },[ie],"sat");
    $$TextziParserCombinatorsziReadP_zlzpzp1.C([$$TextziReadziLex$P,$$TextziReadziLex$S,ie],function(me){
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(me,le);
    },[le]);
   },[id],"sat");
   var ne=$f(1,function(oe){
    $M(oe,function(pe){
     var qe=pe.v[0];
     $M(qe,function(re){
      switch(re.toString()){
      case "^":
       $A(ge);break;
      default:
       $R(3,[],"Fail");
      }
     },[ge]);
    },[ge]);
   },[ge],"sat");
   var se=$d(1,[ne],"sat");
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(se,he);
  },[id],"sat");
  var te=$f(1,function(ue){
   var ve=$t(function(){
    $M(ue,function(we){
     var xe=we.v[0];
     $$GHCziIntegerziType_smallInteger.J(xe);
    },[]);
   },[ue],"lvl100");
   var ye=$f(1,function(ze){
    $$TextziReadziLex_lexzqzuzdsval.C([ve,$$TextziReadziLex_lexzq5,ze],function(Ae){
     $$GHCziIntegerziType_leInteger.C([Ae,$$TextziReadziLex$s3],function(Be){
      switch(Be.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       var Ce=$t(function(){
	$$GHCziIntegerziType_integerToInt.C([Ae],function(Ee){
	 var Ge=$hs_int2Wordzh(Ee);
	 var De=$hs_leWordzh(Ge,goog.math.Long.fromBits(1114111,0));
	 switch(De.g){
	 case 1:
	  $$TextziReadziLex$F3.J(Ee);break;
	 case 2:
	  var Fe=$hs_chrzh(Ee);
	  $R(1,[Fe],"C#");break;
	 }
	},[]);
       },[Ae],"sat");
       var He=$d(1,[Ce,$$GHCziTypes_True],"sat");
       id.J(He);break;
      }
     },[id,Ae]);
    },[id]);
   },[id,ve],"sat");
   $$TextziReadziLex_lexzq8.J(ue,ye);
  },[id],"sat");
  $$TextziParserCombinatorsziReadP_zlzpzp1.C([$$TextziReadziLex$a,$$TextziReadziLex$r3,te],function(Ie){
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Ie,ud);
  },[ud]);
 },[id],"sat");
 var Je=$f(1,function(Ke){
  $M(Ke,function(Le){
   var Me=Le.v[0];
   $M(Me,function(Ne){
    switch(Ne.toString()){
    case "\"":
     $A(sd);break;
    case "'":
     $A(rd);break;
    case "\\":
     $A(qd);break;
    case "a":
     $A(pd);break;
    case "b":
     $A(od);break;
    case "f":
     $A(nd);break;
    case "n":
     $A(md);break;
    case "r":
     $A(ld);break;
    case "t":
     $A(kd);break;
    case "v":
     $A(jd);break;
    default:
     $R(3,[],"Fail");
    }
   },[jd,kd,ld,md,nd,od,pd,qd,rd,sd]);
  },[jd,kd,ld,md,nd,od,pd,qd,rd,sd]);
 },[jd,kd,ld,md,nd,od,pd,qd,rd,sd],"sat");
 var Oe=$d(1,[Je],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Oe,td);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq6=$t(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(10,0));
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq4=$f(1,function(af){
 var bf=$t(function(){
  var cf=$t(function(){
   var df=$f(1,function(ef){
    var ff=$t(function(){
     $$TextziReadziLex_lexzqzuzdsval.J($$TextziReadziLex_lexzq6,$$TextziReadziLex_lexzq5,ef);
    },[ef],"sat");
    var gf=$d(2,[ff],"sat");
    af.J(gf);
   },[af],"sat");
   $$TextziReadziLex_lexzq8.J($$TextziReadziLex_lexzq7,df);
  },[af],"sat");
  var hf=$f(1,function(jf){
   $M(jf,function(kf){
    var lf=kf.v[0];
    $M(lf,function(mf){
     switch(mf.toString()){
     case "+":
      var nf=$f(1,function(of){
       var pf=$t(function(){
	$$TextziReadziLex_lexzqzuzdsval.J($$TextziReadziLex_lexzq6,$$TextziReadziLex_lexzq5,of);
       },[of],"sat");
       var qf=$d(2,[pf],"sat");
       af.J(qf);
      },[af],"sat");
      $$TextziReadziLex_lexzq8.J($$TextziReadziLex_lexzq7,nf);break;
     default:
      $R(3,[],"Fail");
     }
    },[af]);
   },[af]);
  },[af],"sat");
  var rf=$f(1,function(sf){
   $M(sf,function(tf){
    var uf=tf.v[0];
    $M(uf,function(vf){
     switch(vf.toString()){
     case "-":
      var wf=$f(1,function(xf){
       var yf=$t(function(){
	$$TextziReadziLex_lexzqzuzdsval.C([$$TextziReadziLex_lexzq6,$$TextziReadziLex_lexzq5,xf],function(zf){
	 $$GHCziIntegerziType_negateInteger.J(zf);
	},[]);
       },[xf],"sat");
       var Af=$d(2,[yf],"sat");
       af.J(Af);
      },[af],"sat");
      $$TextziReadziLex_lexzq8.J($$TextziReadziLex_lexzq7,wf);break;
     default:
      $R(3,[],"Fail");
     }
    },[af]);
   },[af]);
  },[af],"sat");
  var Bf=$d(1,[rf],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.C([Bf,hf],function(Cf){
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Cf,cf);
  },[cf]);
 },[af],"lvl90");
 var Df=$f(1,function(Ef){
  $M(Ef,function(Ff){
   var Gf=Ff.v[0];
   $M(Gf,function(Hf){
    switch(Hf.toString()){
    case "E":
     $A(bf);break;
    default:
     $R(3,[],"Fail");
    }
   },[bf]);
  },[bf]);
 },[bf],"sat");
 var If=$f(1,function(Jf){
  $M(Jf,function(Kf){
   var Lf=Kf.v[0];
   $M(Lf,function(Mf){
    switch(Mf.toString()){
    case "e":
     $A(bf);break;
    default:
     $R(3,[],"Fail");
    }
   },[bf]);
  },[bf]);
 },[bf],"sat");
 var Nf=$d(1,[If],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(Nf,Df);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq9=$f(1,function(Of){
 Of.J($$DataziMaybe_Nothing);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexzq3=$f(1,function(Pf){
 Pf.J($$DataziMaybe_Nothing);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_hsLex2=$f(1,function(Qf){
 var Rf=$t(function(){
  Qf.J($$TextziReadziLex_EOF);
 },[Qf],"lvl90");
 var Sf=$t(function(){
  var Tf=$t(function(){
   var Uf=$f(2,function(Vf,Wf){
    var Xf=$t(function(){
     var Yf=$d(1,[Vf],"sat");
     Qf.J(Yf);
    },[Qf,Vf],"lvl92");
    $M(Wf,function(Zf){
     switch(Zf.g){
     case 1:
      $M(Vf,function(ag){
       var bg=ag.v[0];
       $M(bg,function(cg){
	switch(cg.toString()){
	case "'":
	 $R(3,[],"Fail");break;
	default:
	 var dg=$f(1,function(eg){
	  $M(eg,function(fg){
	   var gg=fg.v[0];
	   $M(gg,function(hg){
	    switch(hg.toString()){
	    case "'":
	     $A(Xf);break;
	    default:
	     $R(3,[],"Fail");
	    }
	   },[Xf]);
	  },[Xf]);
	 },[Xf],"sat");
	 $R(1,[dg],"Get");
	}
       },[Xf]);
      },[Xf]);break;
     case 2:
      var ig=$f(1,function(jg){
       $M(jg,function(kg){
	var lg=kg.v[0];
	$M(lg,function(mg){
	 switch(mg.toString()){
	 case "'":
	  $A(Xf);break;
	 default:
	  $R(3,[],"Fail");
	 }
	},[Xf]);
       },[Xf]);
      },[Xf],"sat");
      $R(1,[ig],"Get");break;
     }
    },[Vf,Xf]);
   },[Qf],"$wk");
   var ng=$f(1,function(og){
    $M(og,function(pg){
     var qg=pg.v[0],rg=pg.v[1];
     Uf.J(qg,rg);
    },[Uf]);
   },[Uf],"k1");
   $$TextziReadziLex_lexChar2.J(ng);
  },[Qf],"lvl91");
  var sg=$f(1,function(tg){
   $M(tg,function(ug){
    var vg=ug.v[0];
    $M(vg,function(wg){
     switch(wg.toString()){
     case "'":
      $R(3,[],"Fail");break;
     case "\\":
      $A(Tf);break;
     default:
      var xg=$t(function(){
       var yg=$d(1,[ug],"sat");
       Qf.J(yg);
      },[Qf,ug],"lvl92");
      var zg=$f(1,function(Ag){
       $M(Ag,function(Bg){
	var Cg=Bg.v[0];
	$M(Cg,function(Dg){
	 switch(Dg.toString()){
	 case "'":
	  $A(xg);break;
	 default:
	  $R(3,[],"Fail");
	 }
	},[xg]);
       },[xg]);
      },[xg],"sat");
      $R(1,[zg],"Get");
     }
    },[Qf,Tf,ug]);
   },[Qf,Tf]);
  },[Qf,Tf],"a95");
  var Eg=$d(1,[sg],"lvl92");
  var Fg=$t(function(){
   var Gg=$t(function(){
    $$TextziReadziLex$n4.J($$GHCziBase_id,Qf);
   },[Qf],"lvl93");
   var Hg=$t(function(){
    var Ig=$t(function(){
     var Jg=$t(function(){
      var Kg=$t(function(){
       $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$M,$$TextziReadziLex$o4,Qf);
      },[Qf],"sat");
      $$TextziParserCombinatorsziReadP_zlzpzp1.C([$$TextziReadziLex$h,$$TextziReadziLex$c,Qf],function(Lg){
       $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Lg,Kg);
      },[Kg]);
     },[Qf],"sat");
     var Mg=$f(1,function(Ng){
      $$GHCziList_elem.C([$$GHCziClasses_zdfEqChar,Ng,$$TextziReadziLex_lexzq40],function(Og){
       switch(Og.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	var Pg=$f(1,function(Qg){
	 var Rg=$d(2,[Ng,Qg],"s");
	 $$GHCziList_elem.C([$$GHCziClasses_zdfEqZMZNzuzdfEqZMZN,Rg,$$TextziReadziLex$w],function(Sg){
	  switch(Sg.g){
	  case 1:
	   var Tg=$d(5,[Rg],"sat");
	   Qf.J(Tg);break;
	  case 2:
	   var Ug=$d(3,[Rg],"sat");
	   Qf.J(Ug);break;
	  }
	 },[Qf,Rg]);
	},[Qf,Ng],"sat");
	$$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$x,Pg);break;
       }
      },[Qf,Ng]);
     },[Qf],"sat");
     var Vg=$d(1,[Mg],"sat");
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Vg,Jg);
    },[Qf],"sat");
    var Wg=$f(1,function(Xg){
     $$GHCziList_elem.C([$$GHCziClasses_zdfEqChar,Xg,$$TextziReadziLex$y],function(Yg){
      switch(Yg.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       var Zg=$d(2,[Xg,$$GHCziTypes_ZMZN],"sat");
       var ah=$d(3,[Zg],"sat");
       Qf.J(ah);break;
      }
     },[Qf,Xg]);
    },[Qf],"sat");
    var bh=$d(1,[Wg],"sat");
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(bh,Ig);
   },[Qf],"sat");
   var ch=$f(1,function(dh){
    $M(dh,function(eh){
     var fh=eh.v[0];
     $M(fh,function(gh){
      switch(gh.toString()){
      case "\"":
       $A(Gg);break;
      default:
       $R(3,[],"Fail");
      }
     },[Gg]);
    },[Gg]);
   },[Gg],"sat");
   var hh=$d(1,[ch],"sat");
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(hh,Hg);
  },[Qf],"sat");
  var ih=$f(1,function(jh){
   $M(jh,function(kh){
    var lh=kh.v[0];
    $M(lh,function(mh){
     switch(mh.toString()){
     case "'":
      $A(Eg);break;
     default:
      $R(3,[],"Fail");
     }
    },[Eg]);
   },[Eg]);
  },[Eg],"sat");
  var nh=$d(1,[ih],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(nh,Fg);
 },[Qf],"sat");
 var oh=$f(1,function(ph){
  $M(ph,function(qh){
   switch(qh.g){
   case 1:
    $A(Rf);break;
   case 2:
    $R(3,[],"Fail");break;
   }
  },[Rf]);
 },[Rf],"sat");
 var rh=$d(2,[oh],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(rh,Sf);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lex1=$f(1,function(sh){
 var th=$t(function(){
  $$TextziReadziLex_hsLex2.J(sh);
 },[sh],"lvl90");
 var uh=$f(1,function(vh){
  $A(th);
 },[th],"k1");
 var wh=$f(1,function(xh){
  $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(xh,uh);
 },[uh],"sat");
 $R(2,[wh],"Look");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_EOF=$D(8,function(){
 $r([]);
},"at libraries/base/Text/Read/Lex.hs:74:5");
var $$TextziReadziLex$a=$F(1,function(Jj){
 var Kj=$t(function(){
  Jj.J($$TextziReadziLex_lexzq13);
 },[Jj],"lvl90");
 var Lj=$t(function(){
  Jj.J($$TextziReadziLex_lexzq12);
 },[Jj],"lvl91");
 var Mj=$t(function(){
  Jj.J($$TextziReadziLex_lexzq13);
 },[Jj],"lvl92");
 var Nj=$t(function(){
  Jj.J($$TextziReadziLex_lexzq12);
 },[Jj],"lvl93");
 var Oj=$f(1,function(Pj){
  $M(Pj,function(Qj){
   var Rj=Qj.v[0];
   $M(Rj,function(Sj){
    switch(Sj.toString()){
    case "O":
     $A(Nj);break;
    case "X":
     $A(Mj);break;
    case "o":
     $A(Lj);break;
    case "x":
     $A(Kj);break;
    default:
     $R(3,[],"Fail");
    }
   },[Kj,Lj,Mj,Nj]);
  },[Kj,Lj,Mj,Nj]);
 },[Kj,Lj,Mj,Nj],"sat");
 $R(1,[Oj],"Get");
},"a");
var $$TextziReadziLex$b=$F(1,function(Tj){
 $$GHCziUnicode_isAlphaNum.C([Tj],function(Uj){
  switch(Uj.g){
  case 1:
   $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,Tj,$$TextziReadziLex_lexzq14);break;
  case 2:
   $R(2,[],"True");break;
  }
 },[Tj]);
},"at libraries/base/Text/Read/Lex.hs:219:5");
var $$TextziReadziLex$c=$F(1,function(Vj){
 var Wj=$f(1,function(Xj){
  $$GHCziUnicode_isAlpha.C([Xj],function(Yj){
   switch(Yj.g){
   case 1:
    $M(Xj,function(Zj){
     var ak=Zj.v[0];
     $M(ak,function(bk){
      switch(bk.toString()){
      case "_":
       var ck=$f(1,function(dk){
	var ek=$d(2,[Zj,dk],"sat");
	var fk=$d(4,[ek],"sat");
	Vj.J(fk);
       },[Zj,Vj],"sat");
       $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$b,ck);break;
      default:
       $R(3,[],"Fail");
      }
     },[Zj,Vj]);
    },[Vj]);break;
   case 2:
    var gk=$f(1,function(hk){
     var ik=$d(2,[Xj,hk],"sat");
     var jk=$d(4,[ik],"sat");
     Vj.J(jk);
    },[Xj,Vj],"sat");
    $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$b,gk);break;
   }
  },[Xj,Vj]);
 },[Vj],"sat");
 $R(1,[Wj],"Get");
},"a1");
var $$TextziReadziLex$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NaN");
},"a2");
var $$TextziReadziLex$e=$D(7,function(){
 $r([$$GHCziReal_notANumber]);
},"a3");
var $$TextziReadziLex$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Infinity");
},"a4");
var $$TextziReadziLex$g=$D(7,function(){
 $r([$$GHCziReal_infinity]);
},"a5");
var $$TextziReadziLex$h=$F(1,function(kk){
 var lk=$t(function(){
  kk.J($$TextziReadziLex$e);
 },[kk],"lvl90");
 var mk=$t(function(){
  var nk=$t(function(){
   kk.J($$TextziReadziLex$g);
  },[kk],"lvl91");
  var ok=$f(1,function(pk){
   $A(nk);
  },[nk],"sat");
  $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$f,ok);
 },[kk],"sat");
 var qk=$f(1,function(rk){
  $A(lk);
 },[lk],"sat");
 $$TextziParserCombinatorsziReadP_string1.C([$$TextziReadziLex$d,qk],function(sk){
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(sk,mk);
 },[mk]);
},"a6");
var $$TextziReadziLex$i=$D(2,function(){
 $r([$$TextziReadziLex_lexzq36,$$GHCziTypes_ZMZN]);
},"a7");
var $$TextziReadziLex$j=$D(2,function(){
 $r([$$TextziReadziLex_lexzq34,$$GHCziTypes_ZMZN]);
},"a8");
var $$TextziReadziLex$k=$D(2,function(){
 $r([$$TextziReadziLex_lexzq32,$$GHCziTypes_ZMZN]);
},"a9");
var $$TextziReadziLex$l=$D(2,function(){
 $r([$$TextziReadziLex_lexzq28,$$GHCziTypes_ZMZN]);
},"a10");
var $$TextziReadziLex$m=$D(2,function(){
 $r([$$TextziReadziLex_lexzq26,$$GHCziTypes_ZMZN]);
},"a11");
var $$TextziReadziLex$n=$D(2,function(){
 $r([$$TextziReadziLex_lexzq24,$$GHCziTypes_ZMZN]);
},"a12");
var $$TextziReadziLex$o=$D(2,function(){
 $r([$$TextziReadziLex$m,$$TextziReadziLex$n]);
},"a13");
var $$TextziReadziLex$p=$D(2,function(){
 $r([$$TextziReadziLex$l,$$TextziReadziLex$o]);
},"a14");
var $$TextziReadziLex$q=$D(2,function(){
 $r([$$TextziReadziLex_lexzq29,$$TextziReadziLex$p]);
},"a15");
var $$TextziReadziLex$r=$D(2,function(){
 $r([$$TextziReadziLex_lexzq30,$$TextziReadziLex$q]);
},"a16");
var $$TextziReadziLex$s=$D(2,function(){
 $r([$$TextziReadziLex$k,$$TextziReadziLex$r]);
},"a17");
var $$TextziReadziLex$t=$D(2,function(){
 $r([$$TextziReadziLex$j,$$TextziReadziLex$s]);
},"a18");
var $$TextziReadziLex$u=$D(2,function(){
 $r([$$TextziReadziLex$i,$$TextziReadziLex$t]);
},"a19");
var $$TextziReadziLex$v=$D(2,function(){
 $r([$$TextziReadziLex_lexzq37,$$TextziReadziLex$u]);
},"a20");
var $$TextziReadziLex$w=$D(2,function(){
 $r([$$TextziReadziLex_lexzq38,$$TextziReadziLex$v]);
},"at libraries/base/Text/Read/Lex.hs:189:3");
var $$TextziReadziLex$x=$F(1,function(tk){
 $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,tk,$$TextziReadziLex_lexzq40);
},"a21");
var $$TextziReadziLex$y=$T(function(){
 $$GHCziCString_unpackCStringzh.J(",;()[]{}`");
},"lvl");
var $$TextziReadziLex$I=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl10");
var $$TextziReadziLex$J=$F(3,function(uk,vk,wk){
 $M(wk,function(xk){
  switch(xk.g){
  case 1:
   $$GHCziIntegerziType_ltInteger.C([uk,$$TextziReadziLex_lexzq5],function(yk){
    switch(yk.g){
    case 1:
     $$GHCziReal_zczuzc2.C([$$TextziReadziLex_numberToInteger1,uk],function(zk){
      $$GHCziIntegerziType_timesInteger.C([vk,zk],function(Ak){
       $r([Ak,$$GHCziReal_zdfEnumRatio2]);
      },[]);
     },[vk]);break;
    case 2:
     $$GHCziIntegerziType_negateInteger.C([uk],function(Bk){
      $$GHCziReal_zczuzc2.C([$$TextziReadziLex_numberToInteger1,Bk],function(Ck){
       $$GHCziIntegerziType_absInteger.C([Ck],function(Dk){
	$$GHCziIntegerziType_signumInteger.C([Ck],function(Ek){
	 $$GHCziIntegerziType_timesInteger.C([vk,Ek],function(Fk){
	  $$GHCziReal_zdwreduce.J(Fk,Dk);
	 },[Dk]);
	},[vk,Dk]);
       },[vk,Ck]);
      },[vk]);
     },[vk]);break;
    }
   },[uk,vk]);break;
  case 2:
   var Gk=xk.v[0],Hk=xk.v[1];
   $$GHCziIntegerziType_minusInteger.C([uk,$$TextziReadziLex$I],function(Ik){
    $M(Gk,function(Jk){
     var Kk=Jk.v[0];
     $$GHCziIntegerziType_smallInteger.C([Kk],function(Lk){
      $$GHCziIntegerziType_timesInteger.C([vk,$$TextziReadziLex_numberToInteger1],function(Mk){
       $$GHCziIntegerziType_plusInteger.C([Mk,Lk],function(Nk){
	$$TextziReadziLex$J.J(Ik,Nk,Hk);
       },[Ik,Hk]);
      },[Ik,Hk,Lk]);
     },[vk,Ik,Hk]);
    },[vk,Ik,Hk]);
   },[vk,Gk,Hk]);break;
  }
 },[uk,vk]);
},"at libraries/base/Text/Read/Lex.hs:513:1");
var $$TextziReadziLex$K=$T(function(){
 $$GHCziCString_unpackCStringzh.J("valDig: Bad base");
},"lvl11");
var $$TextziReadziLex$L=$T(function(){
 $$GHCziErr_error.J($$TextziReadziLex$K);
},"lvl12");
var $$TextziReadziLex$M=$F(1,function(Ok){
 var Pk=$f(1,function(Qk){
  var Rk=$t(function(){
   $$GHCziIntegerziType_smallInteger.J(Qk);
  },[Qk],"lvl90");
  var Sk=$f(1,function(Tk){
   var Uk=$t(function(){
    $$TextziReadziLex_lexzqzuzdsval.J(Rk,$$TextziReadziLex_lexzq5,Tk);
   },[Rk,Tk],"sat");
   var Vk=$d(6,[Uk],"sat");
   Ok.J(Vk);
  },[Rk,Ok],"sat");
  var Wk=$d(1,[Qk],"sat");
  $$TextziReadziLex_lexzq8.J(Wk,Sk);
 },[Ok],"$sk");
 var Xk=$t(function(){
  Pk.J(goog.math.Long.fromBits(16,0));
 },[Pk],"lvl90");
 var Yk=$t(function(){
  Pk.J(goog.math.Long.fromBits(8,0));
 },[Pk],"lvl91");
 var Zk=$t(function(){
  Pk.J(goog.math.Long.fromBits(16,0));
 },[Pk],"lvl92");
 var al=$t(function(){
  Pk.J(goog.math.Long.fromBits(8,0));
 },[Pk],"lvl93");
 var bl=$f(1,function(cl){
  $M(cl,function(dl){
   var el=dl.v[0];
   $M(el,function(fl){
    switch(fl.toString()){
    case "O":
     $A(al);break;
    case "X":
     $A(Zk);break;
    case "o":
     $A(Yk);break;
    case "x":
     $A(Xk);break;
    default:
     $R(3,[],"Fail");
    }
   },[Xk,Yk,Zk,al]);
  },[Xk,Yk,Zk,al]);
 },[Xk,Yk,Zk,al],"a95");
 var gl=$d(1,[bl],"lvl94");
 var hl=$f(1,function(il){
  $M(il,function(jl){
   var kl=jl.v[0];
   $M(kl,function(ll){
    switch(ll.toString()){
    case "0":
     $A(gl);break;
    default:
     $R(3,[],"Fail");
    }
   },[gl]);
  },[gl]);
 },[gl],"sat");
 $R(1,[hl],"Get");
},"a22");
var $$TextziReadziLex$N=$D(1,function(){
 $r(["\x01"]);
},"x");
var $$TextziReadziLex$O=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SOH");
},"a23");
var $$TextziReadziLex$P=$F(1,function(ml){
 var nl=$t(function(){
  ml.J($$TextziReadziLex$N);
 },[ml],"lvl90");
 var ol=$f(1,function(pl){
  $A(nl);
 },[nl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$O,ol);
},"a24");
var $$TextziReadziLex$Q=$D(1,function(){
 $r(["\x0e"]);
},"x1");
var $$TextziReadziLex$R=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SO");
},"a25");
var $$TextziReadziLex$S=$F(1,function(ql){
 var rl=$t(function(){
  ql.J($$TextziReadziLex$Q);
 },[ql],"lvl90");
 var sl=$f(1,function(tl){
  $A(rl);
 },[rl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$R,sl);
},"a26");
var $$TextziReadziLex$T=$D(1,function(){
 $r(["\x00"]);
},"x2");
var $$TextziReadziLex$U=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NUL");
},"a27");
var $$TextziReadziLex$V=$F(1,function(ul){
 var vl=$t(function(){
  ul.J($$TextziReadziLex$T);
 },[ul],"lvl90");
 var wl=$f(1,function(xl){
  $A(vl);
 },[vl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$U,wl);
},"a28");
var $$TextziReadziLex$W=$D(1,function(){
 $r(["\x02"]);
},"x3");
var $$TextziReadziLex$X=$T(function(){
 $$GHCziCString_unpackCStringzh.J("STX");
},"a29");
var $$TextziReadziLex$Y=$F(1,function(yl){
 var zl=$t(function(){
  yl.J($$TextziReadziLex$W);
 },[yl],"lvl90");
 var Al=$f(1,function(Bl){
  $A(zl);
 },[zl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$X,Al);
},"a30");
var $$TextziReadziLex$Z=$D(1,function(){
 $r(["\x03"]);
},"x4");
var $$TextziReadziLex$a1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ETX");
},"a31");
var $$TextziReadziLex$b1=$F(1,function(Cl){
 var Dl=$t(function(){
  Cl.J($$TextziReadziLex$Z);
 },[Cl],"lvl90");
 var El=$f(1,function(Fl){
  $A(Dl);
 },[Dl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$a1,El);
},"a32");
var $$TextziReadziLex$c1=$D(1,function(){
 $r(["\x04"]);
},"x5");
var $$TextziReadziLex$d1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("EOT");
},"a33");
var $$TextziReadziLex$e1=$F(1,function(Gl){
 var Hl=$t(function(){
  Gl.J($$TextziReadziLex$c1);
 },[Gl],"lvl90");
 var Il=$f(1,function(Jl){
  $A(Hl);
 },[Hl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$d1,Il);
},"a34");
var $$TextziReadziLex$f1=$D(1,function(){
 $r(["\x05"]);
},"x6");
var $$TextziReadziLex$g1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ENQ");
},"a35");
var $$TextziReadziLex$h1=$F(1,function(Kl){
 var Ll=$t(function(){
  Kl.J($$TextziReadziLex$f1);
 },[Kl],"lvl90");
 var Ml=$f(1,function(Nl){
  $A(Ll);
 },[Ll],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$g1,Ml);
},"a36");
var $$TextziReadziLex$i1=$D(1,function(){
 $r(["\x06"]);
},"x7");
var $$TextziReadziLex$j1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ACK");
},"a37");
var $$TextziReadziLex$k1=$F(1,function(Ol){
 var Pl=$t(function(){
  Ol.J($$TextziReadziLex$i1);
 },[Ol],"lvl90");
 var Ql=$f(1,function(Rl){
  $A(Pl);
 },[Pl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$j1,Ql);
},"a38");
var $$TextziReadziLex$l1=$D(1,function(){
 $r(["\x07"]);
},"x8");
var $$TextziReadziLex$m1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("BEL");
},"a39");
var $$TextziReadziLex$n1=$F(1,function(Sl){
 var Tl=$t(function(){
  Sl.J($$TextziReadziLex$l1);
 },[Sl],"lvl90");
 var Ul=$f(1,function(Vl){
  $A(Tl);
 },[Tl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$m1,Ul);
},"a40");
var $$TextziReadziLex$o1=$D(1,function(){
 $r(["\b"]);
},"x9");
var $$TextziReadziLex$p1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("BS");
},"a41");
var $$TextziReadziLex$q1=$F(1,function(Wl){
 var Xl=$t(function(){
  Wl.J($$TextziReadziLex$o1);
 },[Wl],"lvl90");
 var Yl=$f(1,function(Zl){
  $A(Xl);
 },[Xl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$p1,Yl);
},"a42");
var $$TextziReadziLex$r1=$D(1,function(){
 $r(["\t"]);
},"x10");
var $$TextziReadziLex$s1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HT");
},"a43");
var $$TextziReadziLex$t1=$F(1,function(am){
 var bm=$t(function(){
  am.J($$TextziReadziLex$r1);
 },[am],"lvl90");
 var cm=$f(1,function(dm){
  $A(bm);
 },[bm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$s1,cm);
},"a44");
var $$TextziReadziLex$u1=$D(1,function(){
 $r(["\n"]);
},"x11");
var $$TextziReadziLex$v1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("LF");
},"a45");
var $$TextziReadziLex$w1=$F(1,function(em){
 var fm=$t(function(){
  em.J($$TextziReadziLex$u1);
 },[em],"lvl90");
 var gm=$f(1,function(hm){
  $A(fm);
 },[fm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$v1,gm);
},"a46");
var $$TextziReadziLex$x1=$D(1,function(){
 $r(["\v"]);
},"x12");
var $$TextziReadziLex$y1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("VT");
},"a47");
var $$TextziReadziLex$z1=$F(1,function(im){
 var jm=$t(function(){
  im.J($$TextziReadziLex$x1);
 },[im],"lvl90");
 var km=$f(1,function(lm){
  $A(jm);
 },[jm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$y1,km);
},"a48");
var $$TextziReadziLex$A1=$D(1,function(){
 $r(["\f"]);
},"x13");
var $$TextziReadziLex$B1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("FF");
},"a49");
var $$TextziReadziLex$C1=$F(1,function(mm){
 var nm=$t(function(){
  mm.J($$TextziReadziLex$A1);
 },[mm],"lvl90");
 var om=$f(1,function(pm){
  $A(nm);
 },[nm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$B1,om);
},"a50");
var $$TextziReadziLex$D1=$D(1,function(){
 $r(["\r"]);
},"x14");
var $$TextziReadziLex$E1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("CR");
},"a51");
var $$TextziReadziLex$F1=$F(1,function(qm){
 var rm=$t(function(){
  qm.J($$TextziReadziLex$D1);
 },[qm],"lvl90");
 var sm=$f(1,function(tm){
  $A(rm);
 },[rm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$E1,sm);
},"a52");
var $$TextziReadziLex$G1=$D(1,function(){
 $r(["\x0f"]);
},"x15");
var $$TextziReadziLex$H1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SI");
},"a53");
var $$TextziReadziLex$I1=$F(1,function(um){
 var vm=$t(function(){
  um.J($$TextziReadziLex$G1);
 },[um],"lvl90");
 var wm=$f(1,function(xm){
  $A(vm);
 },[vm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$H1,wm);
},"a54");
var $$TextziReadziLex$J1=$D(1,function(){
 $r(["\x10"]);
},"x16");
var $$TextziReadziLex$K1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DLE");
},"a55");
var $$TextziReadziLex$L1=$F(1,function(ym){
 var zm=$t(function(){
  ym.J($$TextziReadziLex$J1);
 },[ym],"lvl90");
 var Am=$f(1,function(Bm){
  $A(zm);
 },[zm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$K1,Am);
},"a56");
var $$TextziReadziLex$M1=$D(1,function(){
 $r(["\x11"]);
},"x17");
var $$TextziReadziLex$N1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC1");
},"a57");
var $$TextziReadziLex$O1=$F(1,function(Cm){
 var Dm=$t(function(){
  Cm.J($$TextziReadziLex$M1);
 },[Cm],"lvl90");
 var Em=$f(1,function(Fm){
  $A(Dm);
 },[Dm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$N1,Em);
},"a58");
var $$TextziReadziLex$P1=$D(1,function(){
 $r(["\x12"]);
},"x18");
var $$TextziReadziLex$Q1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC2");
},"a59");
var $$TextziReadziLex$R1=$F(1,function(Gm){
 var Hm=$t(function(){
  Gm.J($$TextziReadziLex$P1);
 },[Gm],"lvl90");
 var Im=$f(1,function(Jm){
  $A(Hm);
 },[Hm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$Q1,Im);
},"a60");
var $$TextziReadziLex$S1=$D(1,function(){
 $r(["\x13"]);
},"x19");
var $$TextziReadziLex$T1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC3");
},"a61");
var $$TextziReadziLex$U1=$F(1,function(Km){
 var Lm=$t(function(){
  Km.J($$TextziReadziLex$S1);
 },[Km],"lvl90");
 var Mm=$f(1,function(Nm){
  $A(Lm);
 },[Lm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$T1,Mm);
},"a62");
var $$TextziReadziLex$V1=$D(1,function(){
 $r(["\x14"]);
},"x20");
var $$TextziReadziLex$W1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC4");
},"a63");
var $$TextziReadziLex$X1=$F(1,function(Om){
 var Pm=$t(function(){
  Om.J($$TextziReadziLex$V1);
 },[Om],"lvl90");
 var Qm=$f(1,function(Rm){
  $A(Pm);
 },[Pm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$W1,Qm);
},"a64");
var $$TextziReadziLex$Y1=$D(1,function(){
 $r(["\x15"]);
},"x21");
var $$TextziReadziLex$Z1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NAK");
},"a65");
var $$TextziReadziLex$a2=$F(1,function(Sm){
 var Tm=$t(function(){
  Sm.J($$TextziReadziLex$Y1);
 },[Sm],"lvl90");
 var Um=$f(1,function(Vm){
  $A(Tm);
 },[Tm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$Z1,Um);
},"a66");
var $$TextziReadziLex$b2=$D(1,function(){
 $r(["\x16"]);
},"x22");
var $$TextziReadziLex$c2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SYN");
},"a67");
var $$TextziReadziLex$d2=$F(1,function(Wm){
 var Xm=$t(function(){
  Wm.J($$TextziReadziLex$b2);
 },[Wm],"lvl90");
 var Ym=$f(1,function(Zm){
  $A(Xm);
 },[Xm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$c2,Ym);
},"a68");
var $$TextziReadziLex$e2=$D(1,function(){
 $r(["\x17"]);
},"x23");
var $$TextziReadziLex$f2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ETB");
},"a69");
var $$TextziReadziLex$g2=$F(1,function(an){
 var bn=$t(function(){
  an.J($$TextziReadziLex$e2);
 },[an],"lvl90");
 var cn=$f(1,function(dn){
  $A(bn);
 },[bn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$f2,cn);
},"a70");
var $$TextziReadziLex$h2=$D(1,function(){
 $r(["\x18"]);
},"x24");
var $$TextziReadziLex$i2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("CAN");
},"a71");
var $$TextziReadziLex$j2=$F(1,function(en){
 var fn=$t(function(){
  en.J($$TextziReadziLex$h2);
 },[en],"lvl90");
 var gn=$f(1,function(hn){
  $A(fn);
 },[fn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$i2,gn);
},"a72");
var $$TextziReadziLex$k2=$D(1,function(){
 $r(["\x19"]);
},"x25");
var $$TextziReadziLex$l2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("EM");
},"a73");
var $$TextziReadziLex$m2=$F(1,function(jn){
 var kn=$t(function(){
  jn.J($$TextziReadziLex$k2);
 },[jn],"lvl90");
 var ln=$f(1,function(mn){
  $A(kn);
 },[kn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$l2,ln);
},"a74");
var $$TextziReadziLex$n2=$D(1,function(){
 $r(["\x1a"]);
},"x26");
var $$TextziReadziLex$o2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SUB");
},"a75");
var $$TextziReadziLex$p2=$F(1,function(nn){
 var on=$t(function(){
  nn.J($$TextziReadziLex$n2);
 },[nn],"lvl90");
 var pn=$f(1,function(qn){
  $A(on);
 },[on],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$o2,pn);
},"a76");
var $$TextziReadziLex$q2=$D(1,function(){
 $r(["\x1b"]);
},"x27");
var $$TextziReadziLex$r2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ESC");
},"a77");
var $$TextziReadziLex$s2=$F(1,function(rn){
 var sn=$t(function(){
  rn.J($$TextziReadziLex$q2);
 },[rn],"lvl90");
 var tn=$f(1,function(un){
  $A(sn);
 },[sn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$r2,tn);
},"a78");
var $$TextziReadziLex$t2=$D(1,function(){
 $r(["\x1c"]);
},"x28");
var $$TextziReadziLex$u2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("FS");
},"a79");
var $$TextziReadziLex$v2=$F(1,function(vn){
 var wn=$t(function(){
  vn.J($$TextziReadziLex$t2);
 },[vn],"lvl90");
 var xn=$f(1,function(yn){
  $A(wn);
 },[wn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$u2,xn);
},"a80");
var $$TextziReadziLex$w2=$D(1,function(){
 $r(["\x1d"]);
},"x29");
var $$TextziReadziLex$x2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GS");
},"a81");
var $$TextziReadziLex$y2=$F(1,function(zn){
 var An=$t(function(){
  zn.J($$TextziReadziLex$w2);
 },[zn],"lvl90");
 var Bn=$f(1,function(Cn){
  $A(An);
 },[An],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$x2,Bn);
},"a82");
var $$TextziReadziLex$z2=$D(1,function(){
 $r(["\x1e"]);
},"x30");
var $$TextziReadziLex$A2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("RS");
},"a83");
var $$TextziReadziLex$B2=$F(1,function(Dn){
 var En=$t(function(){
  Dn.J($$TextziReadziLex$z2);
 },[Dn],"lvl90");
 var Fn=$f(1,function(Gn){
  $A(En);
 },[En],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$A2,Fn);
},"a84");
var $$TextziReadziLex$C2=$D(1,function(){
 $r(["\x1f"]);
},"x31");
var $$TextziReadziLex$D2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("US");
},"a85");
var $$TextziReadziLex$E2=$F(1,function(Hn){
 var In=$t(function(){
  Hn.J($$TextziReadziLex$C2);
 },[Hn],"lvl90");
 var Jn=$f(1,function(Kn){
  $A(In);
 },[In],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$D2,Jn);
},"a86");
var $$TextziReadziLex$F2=$D(1,function(){
 $r([" "]);
},"x32");
var $$TextziReadziLex$G2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SP");
},"a87");
var $$TextziReadziLex$H2=$F(1,function(Ln){
 var Mn=$t(function(){
  Ln.J($$TextziReadziLex$F2);
 },[Ln],"lvl90");
 var Nn=$f(1,function(On){
  $A(Mn);
 },[Mn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$G2,Nn);
},"a88");
var $$TextziReadziLex$I2=$D(1,function(){
 $r(["\x7f"]);
},"x33");
var $$TextziReadziLex$J2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DEL");
},"a89");
var $$TextziReadziLex$K2=$F(1,function(Pn){
 var Qn=$t(function(){
  Pn.J($$TextziReadziLex$I2);
 },[Pn],"lvl90");
 var Rn=$f(1,function(Sn){
  $A(Qn);
 },[Qn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$J2,Rn);
},"a90");
var $$TextziReadziLex$L2=$D(2,function(){
 $r([$$TextziReadziLex$K2,$$GHCziTypes_ZMZN]);
},"lvl13");
var $$TextziReadziLex$M2=$D(2,function(){
 $r([$$TextziReadziLex$H2,$$TextziReadziLex$L2]);
},"lvl14");
var $$TextziReadziLex$N2=$D(2,function(){
 $r([$$TextziReadziLex$E2,$$TextziReadziLex$M2]);
},"lvl15");
var $$TextziReadziLex$O2=$D(2,function(){
 $r([$$TextziReadziLex$B2,$$TextziReadziLex$N2]);
},"lvl16");
var $$TextziReadziLex$P2=$D(2,function(){
 $r([$$TextziReadziLex$y2,$$TextziReadziLex$O2]);
},"lvl17");
var $$TextziReadziLex$Q2=$D(2,function(){
 $r([$$TextziReadziLex$v2,$$TextziReadziLex$P2]);
},"lvl18");
var $$TextziReadziLex$R2=$D(2,function(){
 $r([$$TextziReadziLex$s2,$$TextziReadziLex$Q2]);
},"lvl19");
var $$TextziReadziLex$S2=$D(2,function(){
 $r([$$TextziReadziLex$p2,$$TextziReadziLex$R2]);
},"lvl20");
var $$TextziReadziLex$T2=$D(2,function(){
 $r([$$TextziReadziLex$m2,$$TextziReadziLex$S2]);
},"lvl21");
var $$TextziReadziLex$U2=$D(2,function(){
 $r([$$TextziReadziLex$j2,$$TextziReadziLex$T2]);
},"lvl22");
var $$TextziReadziLex$V2=$D(2,function(){
 $r([$$TextziReadziLex$g2,$$TextziReadziLex$U2]);
},"lvl23");
var $$TextziReadziLex$W2=$D(2,function(){
 $r([$$TextziReadziLex$d2,$$TextziReadziLex$V2]);
},"lvl24");
var $$TextziReadziLex$X2=$D(2,function(){
 $r([$$TextziReadziLex$a2,$$TextziReadziLex$W2]);
},"lvl25");
var $$TextziReadziLex$Y2=$D(2,function(){
 $r([$$TextziReadziLex$X1,$$TextziReadziLex$X2]);
},"lvl26");
var $$TextziReadziLex$Z2=$D(2,function(){
 $r([$$TextziReadziLex$U1,$$TextziReadziLex$Y2]);
},"lvl27");
var $$TextziReadziLex$a3=$D(2,function(){
 $r([$$TextziReadziLex$R1,$$TextziReadziLex$Z2]);
},"lvl28");
var $$TextziReadziLex$b3=$D(2,function(){
 $r([$$TextziReadziLex$O1,$$TextziReadziLex$a3]);
},"lvl29");
var $$TextziReadziLex$c3=$D(2,function(){
 $r([$$TextziReadziLex$L1,$$TextziReadziLex$b3]);
},"lvl30");
var $$TextziReadziLex$d3=$D(2,function(){
 $r([$$TextziReadziLex$I1,$$TextziReadziLex$c3]);
},"lvl31");
var $$TextziReadziLex$e3=$D(2,function(){
 $r([$$TextziReadziLex$F1,$$TextziReadziLex$d3]);
},"lvl32");
var $$TextziReadziLex$f3=$D(2,function(){
 $r([$$TextziReadziLex$C1,$$TextziReadziLex$e3]);
},"lvl33");
var $$TextziReadziLex$g3=$D(2,function(){
 $r([$$TextziReadziLex$z1,$$TextziReadziLex$f3]);
},"lvl34");
var $$TextziReadziLex$h3=$D(2,function(){
 $r([$$TextziReadziLex$w1,$$TextziReadziLex$g3]);
},"lvl35");
var $$TextziReadziLex$i3=$D(2,function(){
 $r([$$TextziReadziLex$t1,$$TextziReadziLex$h3]);
},"lvl36");
var $$TextziReadziLex$j3=$D(2,function(){
 $r([$$TextziReadziLex$q1,$$TextziReadziLex$i3]);
},"lvl37");
var $$TextziReadziLex$k3=$D(2,function(){
 $r([$$TextziReadziLex$n1,$$TextziReadziLex$j3]);
},"lvl38");
var $$TextziReadziLex$l3=$D(2,function(){
 $r([$$TextziReadziLex$k1,$$TextziReadziLex$k3]);
},"lvl39");
var $$TextziReadziLex$m3=$D(2,function(){
 $r([$$TextziReadziLex$h1,$$TextziReadziLex$l3]);
},"lvl40");
var $$TextziReadziLex$n3=$D(2,function(){
 $r([$$TextziReadziLex$e1,$$TextziReadziLex$m3]);
},"lvl41");
var $$TextziReadziLex$o3=$D(2,function(){
 $r([$$TextziReadziLex$b1,$$TextziReadziLex$n3]);
},"lvl42");
var $$TextziReadziLex$p3=$D(2,function(){
 $r([$$TextziReadziLex$Y,$$TextziReadziLex$o3]);
},"lvl43");
var $$TextziReadziLex$q3=$T(function(){
 $$TextziParserCombinatorsziReadP_choicezuzdschoice.J($$TextziReadziLex$V,$$TextziReadziLex$p3);
},"ds2");
var $$TextziReadziLex$r3=$F(1,function(Tn){
 Tn.J($$TextziReadziLex_lexzq7);
},"a91");
var $$TextziReadziLex$s3=$T(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(1114111,0));
},"lvl44");
var $$TextziReadziLex$t3=$D(1,function(){
 $r(["\""]);
},"lvl45");
var $$TextziReadziLex$u3=$D(1,function(){
 $r(["'"]);
},"lvl46");
var $$TextziReadziLex$v3=$D(1,function(){
 $r([$$TextziReadziLex$t3,$$GHCziTypes_True]);
},"lvl47");
var $$TextziReadziLex$w3=$D(1,function(){
 $r([$$TextziReadziLex$u3,$$GHCziTypes_True]);
},"lvl48");
var $$TextziReadziLex$x3=$D(1,function(){
 $r([$$TextziReadziLex_lexzq34,$$GHCziTypes_True]);
},"lvl49");
var $$TextziReadziLex$y3=$D(1,function(){
 $r([$$TextziReadziLex$l1,$$GHCziTypes_True]);
},"lvl50");
var $$TextziReadziLex$z3=$D(1,function(){
 $r([$$TextziReadziLex$o1,$$GHCziTypes_True]);
},"lvl51");
var $$TextziReadziLex$A3=$D(1,function(){
 $r([$$TextziReadziLex$A1,$$GHCziTypes_True]);
},"lvl52");
var $$TextziReadziLex$B3=$D(1,function(){
 $r([$$TextziReadziLex$u1,$$GHCziTypes_True]);
},"lvl53");
var $$TextziReadziLex$C3=$D(1,function(){
 $r([$$TextziReadziLex$D1,$$GHCziTypes_True]);
},"lvl54");
var $$TextziReadziLex$D3=$D(1,function(){
 $r([$$TextziReadziLex$r1,$$GHCziTypes_True]);
},"lvl55");
var $$TextziReadziLex$E3=$D(1,function(){
 $r([$$TextziReadziLex$x1,$$GHCziTypes_True]);
},"lvl56");
var $$TextziReadziLex$F3=$F(1,function(Un){
 var Vn=$d(1,[Un],"sat");
 $$GHCziBase_chr1.J(Vn);
},"lvl57");
var $$TextziReadziLex$G3=$D(1,function(){
 $r([$$TextziReadziLex$T,$$GHCziTypes_True]);
},"lvl58");
var $$TextziReadziLex$H3=$D(1,function(){
 $r([$$TextziReadziLex$N,$$GHCziTypes_True]);
},"lvl59");
var $$TextziReadziLex$I3=$D(1,function(){
 $r([$$TextziReadziLex$W,$$GHCziTypes_True]);
},"lvl60");
var $$TextziReadziLex$J3=$D(1,function(){
 $r([$$TextziReadziLex$Z,$$GHCziTypes_True]);
},"lvl61");
var $$TextziReadziLex$K3=$D(1,function(){
 $r([$$TextziReadziLex$c1,$$GHCziTypes_True]);
},"lvl62");
var $$TextziReadziLex$L3=$D(1,function(){
 $r([$$TextziReadziLex$f1,$$GHCziTypes_True]);
},"lvl63");
var $$TextziReadziLex$M3=$D(1,function(){
 $r([$$TextziReadziLex$i1,$$GHCziTypes_True]);
},"lvl64");
var $$TextziReadziLex$N3=$D(1,function(){
 $r([$$TextziReadziLex$l1,$$GHCziTypes_True]);
},"lvl65");
var $$TextziReadziLex$O3=$D(1,function(){
 $r([$$TextziReadziLex$o1,$$GHCziTypes_True]);
},"lvl66");
var $$TextziReadziLex$P3=$D(1,function(){
 $r([$$TextziReadziLex$r1,$$GHCziTypes_True]);
},"lvl67");
var $$TextziReadziLex$Q3=$D(1,function(){
 $r([$$TextziReadziLex$u1,$$GHCziTypes_True]);
},"lvl68");
var $$TextziReadziLex$R3=$D(1,function(){
 $r([$$TextziReadziLex$x1,$$GHCziTypes_True]);
},"lvl69");
var $$TextziReadziLex$S3=$D(1,function(){
 $r([$$TextziReadziLex$A1,$$GHCziTypes_True]);
},"lvl70");
var $$TextziReadziLex$T3=$D(1,function(){
 $r([$$TextziReadziLex$D1,$$GHCziTypes_True]);
},"lvl71");
var $$TextziReadziLex$U3=$D(1,function(){
 $r([$$TextziReadziLex$Q,$$GHCziTypes_True]);
},"lvl72");
var $$TextziReadziLex$V3=$D(1,function(){
 $r([$$TextziReadziLex$G1,$$GHCziTypes_True]);
},"lvl73");
var $$TextziReadziLex$W3=$D(1,function(){
 $r([$$TextziReadziLex$J1,$$GHCziTypes_True]);
},"lvl74");
var $$TextziReadziLex$X3=$D(1,function(){
 $r([$$TextziReadziLex$M1,$$GHCziTypes_True]);
},"lvl75");
var $$TextziReadziLex$Y3=$D(1,function(){
 $r([$$TextziReadziLex$P1,$$GHCziTypes_True]);
},"lvl76");
var $$TextziReadziLex$Z3=$D(1,function(){
 $r([$$TextziReadziLex$S1,$$GHCziTypes_True]);
},"lvl77");
var $$TextziReadziLex$a4=$D(1,function(){
 $r([$$TextziReadziLex$V1,$$GHCziTypes_True]);
},"lvl78");
var $$TextziReadziLex$b4=$D(1,function(){
 $r([$$TextziReadziLex$Y1,$$GHCziTypes_True]);
},"lvl79");
var $$TextziReadziLex$c4=$D(1,function(){
 $r([$$TextziReadziLex$b2,$$GHCziTypes_True]);
},"lvl80");
var $$TextziReadziLex$d4=$D(1,function(){
 $r([$$TextziReadziLex$e2,$$GHCziTypes_True]);
},"lvl81");
var $$TextziReadziLex$e4=$D(1,function(){
 $r([$$TextziReadziLex$h2,$$GHCziTypes_True]);
},"lvl82");
var $$TextziReadziLex$f4=$D(1,function(){
 $r([$$TextziReadziLex$k2,$$GHCziTypes_True]);
},"lvl83");
var $$TextziReadziLex$g4=$D(1,function(){
 $r([$$TextziReadziLex$n2,$$GHCziTypes_True]);
},"lvl84");
var $$TextziReadziLex$h4=$D(1,function(){
 $r([$$TextziReadziLex$q2,$$GHCziTypes_True]);
},"lvl85");
var $$TextziReadziLex$i4=$D(1,function(){
 $r([$$TextziReadziLex$t2,$$GHCziTypes_True]);
},"lvl86");
var $$TextziReadziLex$j4=$D(1,function(){
 $r([$$TextziReadziLex$w2,$$GHCziTypes_True]);
},"lvl87");
var $$TextziReadziLex$k4=$D(1,function(){
 $r([$$TextziReadziLex$z2,$$GHCziTypes_True]);
},"lvl88");
var $$TextziReadziLex$l4=$D(1,function(){
 $r([$$TextziReadziLex$C2,$$GHCziTypes_True]);
},"lvl89");
var $$TextziReadziLex$m4=$F(1,function(Wn){
 var Xn=$t(function(){
  $$TextziReadziLex_lexChar2.J(Wn);
 },[Wn],"lvl90");
 var Yn=$t(function(){
  $$TextziReadziLex$m4.J(Wn);
 },[Wn],"lvl91");
 var Zn=$f(1,function(ao){
  $M(ao,function(bo){
   var co=bo.v[0];
   $M(co,function(eo){
    switch(eo.toString()){
    case "\\":
     $A(Yn);break;
    default:
     $R(3,[],"Fail");
    }
   },[Yn]);
  },[Yn]);
 },[Yn],"a95");
 var fo=$d(1,[Zn],"lvl92");
 var go=$f(1,function(ho){
  $A(fo);
 },[fo],"k1");
 var io=$f(1,function(jo){
  $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(jo,go);
 },[go],"a96");
 var ko=$d(2,[io],"lvl93");
 var lo=$f(1,function(mo){
  $M(mo,function(no){
   var oo=no.v[0];
   $M(oo,function(po){
    switch(po.toString()){
    case "&":
     $A(Yn);break;
    default:
     $$GHCziUnicode_isSpace.C([no],function(qo){
      switch(qo.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(ko);break;
      }
     },[ko]);
    }
   },[Yn,ko,no]);
  },[Yn,ko]);
 },[Yn,ko],"a97");
 var ro=$d(1,[lo],"lvl94");
 var so=$f(1,function(to){
  $M(to,function(uo){
   var vo=uo.v[0];
   $M(vo,function(wo){
    switch(wo.toString()){
    case "\\":
     $A(Xn);break;
    default:
     var xo=$d(1,[uo,$$GHCziTypes_False],"sat");
     Wn.J(xo);
    }
   },[Wn,Xn,uo]);
  },[Wn,Xn]);
 },[Wn,Xn],"sat");
 var yo=$f(1,function(zo){
  $M(zo,function(Ao){
   var Bo=Ao.v[0];
   $M(Bo,function(Co){
    switch(Co.toString()){
    case "\\":
     $A(ro);break;
    default:
     $R(3,[],"Fail");
    }
   },[ro]);
  },[ro]);
 },[ro],"sat");
 var Do=$d(1,[yo],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(Do,so);
},"a92");
var $$TextziReadziLex$n4=$F(2,function(Eo,Fo){
 var Go=$t(function(){
  var Ho=$t(function(){
   Eo.J($$GHCziTypes_ZMZN);
  },[Eo],"sat");
  var Io=$d(2,[Ho],"sat");
  Fo.J(Io);
 },[Eo,Fo],"lvl90");
 var Jo=$f(1,function(Ko){
  $M(Ko,function(Lo){
   var Mo=Lo.v[0],No=Lo.v[1];
   $M(Mo,function(Oo){
    var Po=Oo.v[0];
    $M(Po,function(Qo){
     switch(Qo.toString()){
     case "\"":
      $M(No,function(Uo){
       switch(Uo.g){
       case 1:
	$A(Go);break;
       case 2:
	var Vo=$f(1,function(Wo){
	 var Xo=$d(2,[Oo,Wo],"sat");
	 Eo.J(Xo);
	},[Eo,Oo],"sat");
	$$TextziReadziLex$n4.J(Vo,Fo);break;
       }
      },[Eo,Fo,Go,Oo]);break;
     default:
      var Ro=$f(1,function(So){
       var To=$d(2,[Oo,So],"sat");
       Eo.J(To);
      },[Eo,Oo],"sat");
      $$TextziReadziLex$n4.J(Ro,Fo);
     }
    },[Eo,Fo,Go,Oo,No]);
   },[Eo,Fo,Go,No]);
  },[Eo,Fo,Go]);
 },[Eo,Fo,Go],"sat");
 $$TextziReadziLex$m4.J(Jo);
},"a93");
var $$TextziReadziLex$o4=$F(1,function(Yo){
 var Zo=$f(1,function(ap){
  var bp=$t(function(){
   $$TextziReadziLex_lexzqzuzdsval.J($$TextziReadziLex_numberToInteger1,$$TextziReadziLex_lexzq5,ap);
  },[ap],"a96");
  var cp=$d(6,[bp],"lvl90");
  var dp=$f(1,function(ep){
   var fp=$f(1,function(gp){
    var hp=$t(function(){
     $M(ep,function(ip){
      switch(ip.g){
      case 1:
       $M(gp,function(jp){
	switch(jp.g){
	case 1:
	 $A(cp);break;
	case 2:
	 var kp=jp.v[0];
	 $$GHCziIntegerziType_geInteger.C([kp,$$TextziReadziLex_lexzq5],function(lp){
	  switch(lp.g){
	  case 1:
	   var mp=$t(function(){
	    $$GHCziIntegerziType_negateInteger.C([kp],function(np){
	     $$GHCziReal_zczuzc2.C([$$TextziReadziLex_numberToInteger1,np],function(op){
	      $$GHCziIntegerziType_absInteger.C([op],function(pp){
	       $$GHCziIntegerziType_signumInteger.C([op],function(qp){
		$$GHCziIntegerziType_timesInteger.C([bp,qp],function(rp){
		 $$GHCziReal_zdwreduce.C([rp,pp],function(sp){
		  var tp=sp[0],up=sp[1];
		  $R(1,[tp,up],":%");
		 },[]);
		},[pp]);
	       },[bp,pp]);
	      },[bp,op]);
	     },[bp]);
	    },[bp]);
	   },[bp,kp],"sat");
	   $R(7,[mp],"Rat");break;
	  case 2:
	   var vp=$t(function(){
	    $$GHCziReal_zczuzc2.C([$$TextziReadziLex_numberToInteger1,kp],function(wp){
	     $$GHCziIntegerziType_timesInteger.J(bp,wp);
	    },[bp]);
	   },[bp,kp],"sat");
	   $R(6,[vp],"Int");break;
	  }
	 },[bp,kp]);break;
	}
       },[bp,cp]);break;
      case 2:
       var xp=ip.v[0];
       var yp=$t(function(){
	$M(gp,function(zp){
	 switch(zp.g){
	 case 1:
	  $$TextziReadziLex$J.C([$$TextziReadziLex_lexzq5,bp,xp],function(Ap){
	   var Bp=Ap[0],Cp=Ap[1];
	   $R(1,[Bp,Cp],":%");
	  },[]);break;
	 case 2:
	  var Dp=zp.v[0];
	  $$TextziReadziLex$J.C([Dp,bp,xp],function(Ep){
	   var Fp=Ep[0],Gp=Ep[1];
	   $R(1,[Fp,Gp],":%");
	  },[]);break;
	 }
	},[bp,xp]);
       },[bp,gp,xp],"sat");
       $R(7,[yp],"Rat");break;
      }
     },[bp,cp,gp]);
    },[bp,cp,ep,gp],"sat");
    Yo.J(hp);
   },[bp,cp,ep,Yo],"sat");
   $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex_lexzq4,$$TextziReadziLex_lexzq3,fp);
  },[bp,cp,Yo],"sat");
  $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex_lexzq10,$$TextziReadziLex_lexzq9,dp);
 },[Yo],"sat");
 $$TextziReadziLex_lexzq8.J($$TextziReadziLex_lexzq7,Zo);
},"a94");
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
var $$GHCziCString_unpackCStringUtf8zh=$f(1,function(K){
 var L=$f(1,function(M){
  var N=$hs_indexCharOffAddrzh(K,M);
  switch(N.toString()){
  case "\x00":
   $R(1,[],"[]");break;
  default:
   var O=N<="\x7f"?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(O.g){
   case 1:
    var P=N<="\xdf"?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(P.g){
    case 1:
     var Q=N<="\xef"?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Q.g){
     case 1:
      var R=$t(function(){
       var S=M.add(goog.math.Long.fromBits(4,0));
       L.J(S);
      },[M,L],"sat");
      var T=$t(function(){
       var o1=M.add(goog.math.Long.fromBits(3,0));
       var l1=$hs_indexCharOffAddrzh(K,o1);
       var n1=M.add(goog.math.Long.fromBits(2,0));
       var j1=$hs_indexCharOffAddrzh(K,n1);
       var m1=M.add(goog.math.Long.fromBits(1,0));
       var g1=$hs_indexCharOffAddrzh(K,m1);
       var k1=$hs_ordzh(l1);
       var X=k1.subtract(goog.math.Long.fromBits(128,0));
       var i1=$hs_ordzh(j1);
       var h1=i1.subtract(goog.math.Long.fromBits(128,0));
       var Z=$hs_uncheckedIShiftLzh(h1,goog.math.Long.fromBits(6,0));
       var f1=$hs_ordzh(g1);
       var e1=f1.subtract(goog.math.Long.fromBits(128,0));
       var b1=$hs_uncheckedIShiftLzh(e1,goog.math.Long.fromBits(12,0));
       var d1=$hs_ordzh(N);
       var c1=d1.subtract(goog.math.Long.fromBits(240,0));
       var a1=$hs_uncheckedIShiftLzh(c1,goog.math.Long.fromBits(18,0));
       var Y=a1.add(b1);
       var W=Y.add(Z);
       var V=W.add(X);
       var U=$hs_chrzh(V);
       $R(1,[U],"C#");
      },[K,M,N],"sat");
      $R(2,[T,R],":");break;
     case 2:
      var p1=$t(function(){
       var q1=M.add(goog.math.Long.fromBits(3,0));
       L.J(q1);
      },[M,L],"sat");
      var r1=$t(function(){
       var G1=M.add(goog.math.Long.fromBits(2,0));
       var E1=$hs_indexCharOffAddrzh(K,G1);
       var F1=M.add(goog.math.Long.fromBits(1,0));
       var C1=$hs_indexCharOffAddrzh(K,F1);
       var D1=$hs_ordzh(E1);
       var v1=D1.subtract(goog.math.Long.fromBits(128,0));
       var B1=$hs_ordzh(C1);
       var A1=B1.subtract(goog.math.Long.fromBits(128,0));
       var x1=$hs_uncheckedIShiftLzh(A1,goog.math.Long.fromBits(6,0));
       var z1=$hs_ordzh(N);
       var y1=z1.subtract(goog.math.Long.fromBits(224,0));
       var w1=$hs_uncheckedIShiftLzh(y1,goog.math.Long.fromBits(12,0));
       var u1=w1.add(x1);
       var t1=u1.add(v1);
       var s1=$hs_chrzh(t1);
       $R(1,[s1],"C#");
      },[K,M,N],"sat");
      $R(2,[r1,p1],":");break;
     }break;
    case 2:
     var H1=$t(function(){
      var I1=M.add(goog.math.Long.fromBits(2,0));
      L.J(I1);
     },[M,L],"sat");
     var J1=$t(function(){
      var S1=M.add(goog.math.Long.fromBits(1,0));
      var R1=$hs_indexCharOffAddrzh(K,S1);
      var Q1=$hs_ordzh(R1);
      var N1=Q1.subtract(goog.math.Long.fromBits(128,0));
      var P1=$hs_ordzh(N);
      var O1=P1.subtract(goog.math.Long.fromBits(192,0));
      var M1=$hs_uncheckedIShiftLzh(O1,goog.math.Long.fromBits(6,0));
      var L1=M1.add(N1);
      var K1=$hs_chrzh(L1);
      $R(1,[K1],"C#");
     },[K,M,N],"sat");
     $R(2,[J1,H1],":");break;
    }break;
   case 2:
    var T1=$t(function(){
     var U1=M.add(goog.math.Long.fromBits(1,0));
     L.J(U1);
    },[M,L],"sat");
    var V1=$d(1,[N],"sat");
    $R(2,[V1,T1],":");break;
   }
  }
 },[K],"unpack");
 L.J(goog.math.Long.fromBits(0,0));
},[],"at libraries/ghc-prim/GHC/CString.hs:89:1");
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
var $$GHCziClasses_zdfEqZMZNzuzdczeze=$f(2,function(y3,z3){
 $M(y3,function(A3){
  switch(A3.g){
  case 1:
   $M(z3,function(B3){
    switch(B3.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   var C3=A3.v[0],D3=A3.v[1];
   $M(z3,function(E3){
    switch(E3.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var F3=E3.v[0],G3=E3.v[1];
     $M(C3,function(H3){
      var I3=H3.v[0];
      $M(F3,function(J3){
       var K3=J3.v[0];
       var L3=I3==K3?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(L3.g){
       case 1:
	$R(1,[],"False");break;
       case 2:
	$$GHCziClasses_zdfEqZMZNzuzdczeze.J(D3,G3);break;
       }
      },[I3,D3,G3]);
     },[F3,D3,G3]);break;
    }
   },[C3,D3]);break;
  }
 },[z3]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:5");
var $$GHCziClasses_zdfEqZMZNzuzdczsze=$f(2,function(M3,N3){
 $$GHCziClasses_zdfEqZMZNzuzdczeze.C([M3,N3],function(O3){
  switch(O3.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   $R(1,[],"False");break;
  }
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:11");
var $$GHCziClasses_zdfEqZMZNzuzdfEqZMZN=$D(1,function(){
 $r([$$GHCziClasses_zdfEqZMZNzuzdczeze,$$GHCziClasses_zdfEqZMZNzuzdczsze]);
},"at libraries/ghc-prim/GHC/Classes.hs:87:10");
var $$GHCziClasses_zdfEqZMZNzuzdczeze1=$f(3,function(P3,Q3,R3){
 $M(Q3,function(S3){
  switch(S3.g){
  case 1:
   $M(R3,function(T3){
    switch(T3.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   var U3=S3.v[0],V3=S3.v[1];
   $M(R3,function(W3){
    switch(W3.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var X3=W3.v[0],Y3=W3.v[1];
     $$GHCziClasses_zeze.C([P3,U3,X3],function(Z3){
      switch(Z3.g){
      case 1:
       $R(1,[],"False");break;
      case 2:
       $$GHCziClasses_zdfEqZMZNzuzdczeze1.J(P3,V3,Y3);break;
      }
     },[P3,V3,Y3]);break;
    }
   },[P3,U3,V3]);break;
  }
 },[R3,P3]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:5");
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
var $$GHCziIntegerziType_decodeDoubleInteger=$f(1,function(a){
 var b=integer_cmm_decodeDoublezh(a);
 var c=b[0],d=b[1],e=b[2];
 var f=$d(2,[d,e],"sat");
 $r([f,c]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:479:1");
var $$GHCziIntegerziType_absInt=$f(1,function(g){
 var h=g.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(h.g){
 case 1:
  $A(g);break;
 case 2:
  $r(g.negate());break;
 }
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:290:1");
var $$GHCziIntegerziType_gcdInt=$f(2,function(i,j){
 $M(i,function(k){
  switch(k.toString()){
  case "0":
   $$GHCziIntegerziType_absInt.J(j);break;
  default:
   $M(j,function(l){
    switch(l.toString()){
    case "0":
     var t=k.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(t.g){
     case 1:
      $A(k);break;
     case 2:
      $r(k.negate());break;
     }break;
    default:
     var m=l.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(m.g){
     case 1:
      var n=k.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(n.g){
      case 1:
       $r(integer_cmm_gcdIntzh(k,l));break;
      case 2:
       var o=k.negate();
       $r(integer_cmm_gcdIntzh(o,l));break;
      }break;
     case 2:
      var p=k.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(p.g){
      case 1:
       var q=l.negate();
       $r(integer_cmm_gcdIntzh(k,q));break;
      case 2:
       var s=l.negate();
       var r=k.negate();
       $r(integer_cmm_gcdIntzh(r,s));break;
      }break;
     }
    }
   },[k]);
  }
 },[j]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:285:1");
var $$GHCziIntegerziType_shiftLInteger=$f(2,function(i2,j2){
 $M(i2,function(k2){
  switch(k2.g){
  case 1:
   var l2=k2.v[0];
   var m2=integer_cmm_int2Integerzh(l2);
   var n2=m2[0],o2=m2[1];
   var p2=$d(2,[n2,o2],"sat");
   $$GHCziIntegerziType_shiftLInteger.J(p2,j2);break;
  case 2:
   var q2=k2.v[0],r2=k2.v[1];
   var s2=integer_cmm_mul2ExpIntegerzh(q2,r2,j2);
   var t2=s2[0],u2=s2[1];
   $R(2,[t2,u2],"J#");break;
  }
 },[j2]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:556:1");
var $$GHCziIntegerziType_orInteger=$f(2,function(h3,i3){
 $M(h3,function(j3){
  switch(j3.g){
  case 1:
   var k3=j3.v[0];
   $M(i3,function(l3){
    switch(l3.g){
    case 1:
     var m3=l3.v[0];
     var q3=$hs_int2Wordzh(m3);
     var p3=$hs_int2Wordzh(k3);
     var o3=p3.or(q3);
     var n3=$hs_word2Intzh(o3);
     $R(1,[n3],"S#");break;
    case 2:
     var r3=integer_cmm_int2Integerzh(k3);
     var s3=r3[0],t3=r3[1];
     var u3=$d(2,[s3,t3],"sat");
     $$GHCziIntegerziType_orInteger.J(u3,l3);break;
    }
   },[k3]);break;
  case 2:
   var v3=j3.v[0],w3=j3.v[1];
   $M(i3,function(x3){
    switch(x3.g){
    case 1:
     var y3=x3.v[0];
     var z3=integer_cmm_int2Integerzh(y3);
     var A3=z3[0],B3=z3[1];
     var C3=$d(2,[A3,B3],"sat");
     $$GHCziIntegerziType_orInteger.J(j3,C3);break;
    case 2:
     var D3=x3.v[0],E3=x3.v[1];
     var F3=integer_cmm_orIntegerzh(v3,w3,D3,E3);
     var G3=F3[0],H3=F3[1];
     $R(2,[G3,H3],"J#");break;
    }
   },[j3,v3,w3]);break;
  }
 },[i3]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:531:8");
var $$GHCziIntegerziType_floatFromInteger=$f(1,function(C4){
 $M(C4,function(D4){
  switch(D4.g){
  case 1:
   var E4=D4.v[0];
   $r($hs_int2Floatzh(E4));break;
  case 2:
   var F4=D4.v[0],G4=D4.v[1];
   var $ff=integer_cbits_encodeFloat(F4,G4,goog.math.Long.fromBits(0,0));
   var H4=[$$GHCziPrim_realWorldzh,$ff];
   var I4=H4[1];
   $A(I4);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:495:1");
var $$GHCziIntegerziType_remInteger=$f(2,function(J4,K4){
 $M(J4,function(L4){
  switch(L4.g){
  case 1:
   var M4=L4.v[0];
   $M(M4,function(N4){
    switch(N4.toString()){
    case "-9223372036854775808":
     var V4=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
     var W4=V4[0],X4=V4[1];
     var Y4=$d(2,[W4,X4],"sat");
     $$GHCziIntegerziType_remInteger.J(Y4,K4);break;
    default:
     $M(K4,function(O4){
      switch(O4.g){
      case 1:
       var P4=O4.v[0];
       var Q4=$hs_remIntzh(N4,P4);
       $R(1,[Q4],"S#");break;
      case 2:
       var R4=integer_cmm_int2Integerzh(N4);
       var S4=R4[0],T4=R4[1];
       var U4=$d(2,[S4,T4],"sat");
       $$GHCziIntegerziType_remInteger.J(U4,O4);break;
      }
     },[N4]);
    }
   },[K4]);break;
  case 2:
   var Z4=L4.v[0],a5=L4.v[1];
   $M(K4,function(b5){
    switch(b5.g){
    case 1:
     var c5=b5.v[0];
     var d5=integer_cmm_int2Integerzh(c5);
     var e5=d5[0],f5=d5[1];
     var g5=integer_cmm_remIntegerzh(Z4,a5,e5,f5);
     var h5=g5[0],i5=g5[1];
     $M(h5,function(j5){
      switch(j5.toString()){
      case "0":
       $A($$GHCziIntegerziType$a);break;
      default:
       var l5=$hs_indexIntArrayzh(i5,goog.math.Long.fromBits(0,0));
       var k5=j5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(k5.g){
       case 1:
	$R(1,[l5],"S#");break;
       case 2:
	var m5=l5.negate();
	$R(1,[m5],"S#");break;
       }
      }
     },[i5]);break;
    case 2:
     var n5=b5.v[0],o5=b5.v[1];
     var p5=integer_cmm_remIntegerzh(Z4,a5,n5,o5);
     var q5=p5[0],r5=p5[1];
     $R(2,[q5,r5],"J#");break;
    }
   },[Z4,a5]);break;
  }
 },[K4]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:216:1");
var $$GHCziIntegerziType_quotInteger=$f(2,function(s5,t5){
 $M(s5,function(u5){
  switch(u5.g){
  case 1:
   var v5=u5.v[0];
   $M(v5,function(w5){
    switch(w5.toString()){
    case "-9223372036854775808":
     var E5=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
     var F5=E5[0],G5=E5[1];
     var H5=$d(2,[F5,G5],"sat");
     $$GHCziIntegerziType_quotInteger.J(H5,t5);break;
    default:
     $M(t5,function(x5){
      switch(x5.g){
      case 1:
       var y5=x5.v[0];
       var z5=$hs_quotIntzh(w5,y5);
       $R(1,[z5],"S#");break;
      case 2:
       var A5=integer_cmm_int2Integerzh(w5);
       var B5=A5[0],C5=A5[1];
       var D5=$d(2,[B5,C5],"sat");
       $$GHCziIntegerziType_quotInteger.J(D5,x5);break;
      }
     },[w5]);
    }
   },[t5]);break;
  case 2:
   var I5=u5.v[0],J5=u5.v[1];
   $M(t5,function(K5){
    switch(K5.g){
    case 1:
     var L5=K5.v[0];
     var M5=integer_cmm_int2Integerzh(L5);
     var N5=M5[0],O5=M5[1];
     var P5=integer_cmm_quotIntegerzh(I5,J5,N5,O5);
     var Q5=P5[0],R5=P5[1];
     $R(2,[Q5,R5],"J#");break;
    case 2:
     var S5=K5.v[0],T5=K5.v[1];
     var U5=integer_cmm_quotIntegerzh(I5,J5,S5,T5);
     var V5=U5[0],W5=U5[1];
     $R(2,[V5,W5],"J#");break;
    }
   },[I5,J5]);break;
  }
 },[t5]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:236:1");
var $$GHCziIntegerziType_quotRemInteger=$f(2,function(m7,n7){
 $M(m7,function(o7){
  switch(o7.g){
  case 1:
   var p7=o7.v[0];
   $M(p7,function(q7){
    switch(q7.toString()){
    case "-9223372036854775808":
     var B7=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
     var C7=B7[0],D7=B7[1];
     var E7=$d(2,[C7,D7],"sat");
     $$GHCziIntegerziType_quotRemInteger.J(E7,n7);break;
    default:
     $M(n7,function(r7){
      switch(r7.g){
      case 1:
       var s7=r7.v[0];
       var u7=$hs_remIntzh(q7,s7);
       var w7=$hs_quotIntzh(q7,s7);
       var t7=$d(1,[u7],"sat");
       var v7=$d(1,[w7],"sat");
       $r([v7,t7]);break;
      case 2:
       var x7=integer_cmm_int2Integerzh(q7);
       var y7=x7[0],z7=x7[1];
       var A7=$d(2,[y7,z7],"sat");
       $$GHCziIntegerziType_quotRemInteger.J(A7,r7);break;
      }
     },[q7]);
    }
   },[n7]);break;
  case 2:
   var F7=o7.v[0],G7=o7.v[1];
   $M(n7,function(H7){
    switch(H7.g){
    case 1:
     var I7=H7.v[0];
     var J7=integer_cmm_int2Integerzh(I7);
     var K7=J7[0],L7=J7[1];
     var M7=$d(2,[K7,L7],"sat");
     $$GHCziIntegerziType_quotRemInteger.J(o7,M7);break;
    case 2:
     var N7=H7.v[0],O7=H7.v[1];
     var P7=integer_cmm_quotRemIntegerzh(F7,G7,N7,O7);
     var Q7=P7[0],R7=P7[1],S7=P7[2],T7=P7[3];
     var U7=$d(2,[S7,T7],"sat");
     var V7=$d(2,[Q7,R7],"sat");
     $r([V7,U7]);break;
    }
   },[o7,F7,G7]);break;
  }
 },[n7]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:167:1");
var $$GHCziIntegerziType_geInteger=$f(2,function(v8,w8){
 $M(v8,function(x8){
  switch(x8.g){
  case 1:
   var y8=x8.v[0];
   $M(w8,function(z8){
    switch(z8.g){
    case 1:
     var A8=z8.v[0];
     $r(y8.greaterThanOrEqual(A8)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var B8=z8.v[0],C8=z8.v[1];
     var D8=integer_cmm_cmpIntegerIntzh(B8,C8,y8);
     $r(D8.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[y8]);break;
  case 2:
   var E8=x8.v[0],F8=x8.v[1];
   $M(w8,function(G8){
    switch(G8.g){
    case 1:
     var H8=G8.v[0];
     var I8=integer_cmm_cmpIntegerIntzh(E8,F8,H8);
     $r(I8.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var J8=G8.v[0],K8=G8.v[1];
     var L8=integer_cmm_cmpIntegerzh(E8,F8,J8,K8);
     $r(L8.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[E8,F8]);break;
  }
 },[w8]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:356:1");
var $$GHCziIntegerziType_ltInteger=$f(2,function(M8,N8){
 $M(M8,function(O8){
  switch(O8.g){
  case 1:
   var P8=O8.v[0];
   $M(N8,function(Q8){
    switch(Q8.g){
    case 1:
     var R8=Q8.v[0];
     $r(P8.lessThan(R8)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var S8=Q8.v[0],T8=Q8.v[1];
     var U8=integer_cmm_cmpIntegerIntzh(S8,T8,P8);
     $r(U8.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[P8]);break;
  case 2:
   var V8=O8.v[0],W8=O8.v[1];
   $M(N8,function(X8){
    switch(X8.g){
    case 1:
     var Y8=X8.v[0];
     var Z8=integer_cmm_cmpIntegerIntzh(V8,W8,Y8);
     $r(Z8.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var a9=X8.v[0],b9=X8.v[1];
     var c9=integer_cmm_cmpIntegerzh(V8,W8,a9,b9);
     $r(c9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[V8,W8]);break;
  }
 },[N8]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:349:1");
var $$GHCziIntegerziType_gtInteger=$f(2,function(d9,e9){
 $M(d9,function(f9){
  switch(f9.g){
  case 1:
   var g9=f9.v[0];
   $M(e9,function(h9){
    switch(h9.g){
    case 1:
     var i9=h9.v[0];
     $r(g9.greaterThan(i9)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var j9=h9.v[0],k9=h9.v[1];
     var l9=integer_cmm_cmpIntegerIntzh(j9,k9,g9);
     $r(l9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[g9]);break;
  case 2:
   var m9=f9.v[0],n9=f9.v[1];
   $M(e9,function(o9){
    switch(o9.g){
    case 1:
     var p9=o9.v[0];
     var q9=integer_cmm_cmpIntegerIntzh(m9,n9,p9);
     $r(q9.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var r9=o9.v[0],s9=o9.v[1];
     var t9=integer_cmm_cmpIntegerzh(m9,n9,r9,s9);
     $r(t9.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[m9,n9]);break;
  }
 },[e9]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:342:1");
var $$GHCziIntegerziType_leInteger=$f(2,function(u9,v9){
 $M(u9,function(w9){
  switch(w9.g){
  case 1:
   var x9=w9.v[0];
   $M(v9,function(y9){
    switch(y9.g){
    case 1:
     var z9=y9.v[0];
     $r(x9.lessThanOrEqual(z9)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var A9=y9.v[0],B9=y9.v[1];
     var C9=integer_cmm_cmpIntegerIntzh(A9,B9,x9);
     $r(C9.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[x9]);break;
  case 2:
   var D9=w9.v[0],E9=w9.v[1];
   $M(v9,function(F9){
    switch(F9.g){
    case 1:
     var G9=F9.v[0];
     var H9=integer_cmm_cmpIntegerIntzh(D9,E9,G9);
     $r(H9.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var I9=F9.v[0],J9=F9.v[1];
     var K9=integer_cmm_cmpIntegerzh(D9,E9,I9,J9);
     $r(K9.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[D9,E9]);break;
  }
 },[v9]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:335:1");
var $$GHCziIntegerziType_signumInteger=$f(1,function(L9){
 $M(L9,function(M9){
  switch(M9.g){
  case 1:
   var N9=M9.v[0];
   var O9=N9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(O9.g){
   case 1:
    $M(N9,function(P9){
     switch(P9.toString()){
     case "0":
      $A($$GHCziIntegerziType$a);break;
     default:
      $A($$GHCziIntegerziType$b);
     }
    },[]);break;
   case 2:
    $A($$GHCziIntegerziType$c);break;
   }break;
  case 2:
   var Q9=M9.v[0],R9=M9.v[1];
   var U9=integer_cmm_cmpIntegerIntzh(Q9,R9,goog.math.Long.fromBits(0,0));
   var S9=U9.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(S9.g){
   case 1:
    $M(U9,function(T9){
     switch(T9.toString()){
     case "0":
      $A($$GHCziIntegerziType$a);break;
     default:
      $A($$GHCziIntegerziType$c);
     }
    },[]);break;
   case 2:
    $A($$GHCziIntegerziType$b);break;
   }break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:407:1");
var $$GHCziIntegerziType_eqInteger=$f(2,function(ma,na){
 $M(ma,function(oa){
  switch(oa.g){
  case 1:
   var pa=oa.v[0];
   $M(na,function(qa){
    switch(qa.g){
    case 1:
     var ra=qa.v[0];
     $r(pa.equals(ra)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var sa=qa.v[0],ta=qa.v[1];
     var ua=integer_cmm_cmpIntegerIntzh(sa,ta,pa);
     switch(ua.toString()){
     case "0":
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    }
   },[pa]);break;
  case 2:
   var va=oa.v[0],wa=oa.v[1];
   $M(na,function(xa){
    switch(xa.g){
    case 1:
     var ya=xa.v[0];
     var za=integer_cmm_cmpIntegerIntzh(va,wa,ya);
     switch(za.toString()){
     case "0":
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    case 2:
     var Aa=xa.v[0],Ba=xa.v[1];
     var Ca=integer_cmm_cmpIntegerzh(va,wa,Aa,Ba);
     switch(Ca.toString()){
     case "0":
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    }
   },[va,wa]);break;
  }
 },[na]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:315:1");
var $$GHCziIntegerziType_minusInteger=$f(2,function(Ja,Ka){
 $M(Ja,function(La){
  switch(La.g){
  case 1:
   var Ma=La.v[0];
   $M(Ka,function(Na){
    switch(Na.g){
    case 1:
     var Oa=Na.v[0];
     var Pa=$hs_subIntCzh(Ma,Oa);
     var Qa=Pa[0],Ra=Pa[1];
     $M(Ra,function(Sa){
      switch(Sa.toString()){
      case "0":
       $R(1,[Qa],"S#");break;
      default:
       var Ta=integer_cmm_int2Integerzh(Ma);
       var Ua=Ta[0],Va=Ta[1];
       var Wa=integer_cmm_int2Integerzh(Oa);
       var Xa=Wa[0],Ya=Wa[1];
       var Za=$d(2,[Xa,Ya],"sat");
       var ab=$d(2,[Ua,Va],"sat");
       $$GHCziIntegerziType_minusInteger.J(ab,Za);
      }
     },[Ma,Oa,Qa]);break;
    case 2:
     var bb=integer_cmm_int2Integerzh(Ma);
     var cb=bb[0],db=bb[1];
     var eb=$d(2,[cb,db],"sat");
     $$GHCziIntegerziType_minusInteger.J(eb,Na);break;
    }
   },[Ma]);break;
  case 2:
   var fb=La.v[0],gb=La.v[1];
   $M(Ka,function(hb){
    switch(hb.g){
    case 1:
     var ib=hb.v[0];
     var jb=integer_cmm_int2Integerzh(ib);
     var kb=jb[0],lb=jb[1];
     var mb=$d(2,[kb,lb],"sat");
     $$GHCziIntegerziType_minusInteger.J(La,mb);break;
    case 2:
     var nb=hb.v[0],ob=hb.v[1];
     var pb=integer_cmm_minusIntegerzh(fb,gb,nb,ob);
     var qb=pb[0],rb=pb[1];
     $R(2,[qb,rb],"J#");break;
    }
   },[La,fb,gb]);break;
  }
 },[Ka]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:432:1");
var $$GHCziIntegerziType_timesInteger=$f(2,function(sb,tb){
 $M(sb,function(ub){
  switch(ub.g){
  case 1:
   var vb=ub.v[0];
   $M(tb,function(wb){
    switch(wb.g){
    case 1:
     var xb=wb.v[0];
     var yb=$hs_mulIntMayOflozh(vb,xb);
     switch(yb.toString()){
     case "0":
      var Hb=vb.multiply(xb);
      $R(1,[Hb],"S#");break;
     default:
      var zb=integer_cmm_int2Integerzh(vb);
      var Ab=zb[0],Bb=zb[1];
      var Cb=integer_cmm_int2Integerzh(xb);
      var Db=Cb[0],Eb=Cb[1];
      var Fb=$d(2,[Db,Eb],"sat");
      var Gb=$d(2,[Ab,Bb],"sat");
      $$GHCziIntegerziType_timesInteger.J(Gb,Fb);
     }break;
    case 2:
     var Ib=integer_cmm_int2Integerzh(vb);
     var Jb=Ib[0],Kb=Ib[1];
     var Lb=$d(2,[Jb,Kb],"sat");
     $$GHCziIntegerziType_timesInteger.J(Lb,wb);break;
    }
   },[vb]);break;
  case 2:
   var Mb=ub.v[0],Nb=ub.v[1];
   $M(tb,function(Ob){
    switch(Ob.g){
    case 1:
     var Pb=Ob.v[0];
     var Qb=integer_cmm_int2Integerzh(Pb);
     var Rb=Qb[0],Sb=Qb[1];
     var Tb=$d(2,[Rb,Sb],"sat");
     $$GHCziIntegerziType_timesInteger.J(ub,Tb);break;
    case 2:
     var Ub=Ob.v[0],Vb=Ob.v[1];
     var Wb=integer_cmm_timesIntegerzh(Mb,Nb,Ub,Vb);
     var Xb=Wb[0],Yb=Wb[1];
     $R(2,[Xb,Yb],"J#");break;
    }
   },[ub,Mb,Nb]);break;
  }
 },[tb]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:444:1");
var $$GHCziIntegerziType_plusInteger=$f(2,function(Zb,ac){
 $M(Zb,function(bc){
  switch(bc.g){
  case 1:
   var cc=bc.v[0];
   $M(ac,function(dc){
    switch(dc.g){
    case 1:
     var ec=dc.v[0];
     var fc=$hs_addIntCzh(cc,ec);
     var gc=fc[0],hc=fc[1];
     $M(hc,function(ic){
      switch(ic.toString()){
      case "0":
       $R(1,[gc],"S#");break;
      default:
       var jc=integer_cmm_int2Integerzh(cc);
       var kc=jc[0],lc=jc[1];
       var mc=integer_cmm_int2Integerzh(ec);
       var nc=mc[0],oc=mc[1];
       var pc=$d(2,[nc,oc],"sat");
       var qc=$d(2,[kc,lc],"sat");
       $$GHCziIntegerziType_plusInteger.J(qc,pc);
      }
     },[cc,ec,gc]);break;
    case 2:
     var rc=integer_cmm_int2Integerzh(cc);
     var sc=rc[0],tc=rc[1];
     var uc=$d(2,[sc,tc],"sat");
     $$GHCziIntegerziType_plusInteger.J(uc,dc);break;
    }
   },[cc]);break;
  case 2:
   var vc=bc.v[0],wc=bc.v[1];
   $M(ac,function(xc){
    switch(xc.g){
    case 1:
     var yc=xc.v[0];
     var zc=integer_cmm_int2Integerzh(yc);
     var Ac=zc[0],Bc=zc[1];
     var Cc=$d(2,[Ac,Bc],"sat");
     $$GHCziIntegerziType_plusInteger.J(bc,Cc);break;
    case 2:
     var Dc=xc.v[0],Ec=xc.v[1];
     var Fc=integer_cmm_plusIntegerzh(vc,wc,Dc,Ec);
     var Gc=Fc[0],Hc=Fc[1];
     $R(2,[Gc,Hc],"J#");break;
    }
   },[bc,vc,wc]);break;
  }
 },[ac]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:420:1");
var $$GHCziIntegerziType_negateInteger=$f(1,function(Ic){
 $M(Ic,function(Jc){
  switch(Jc.g){
  case 1:
   var Kc=Jc.v[0];
   $M(Kc,function(Lc){
    switch(Lc.toString()){
    case "-9223372036854775808":
     $A($$GHCziIntegerziType$e);break;
    default:
     var Mc=Lc.negate();
     $R(1,[Mc],"S#");
    }
   },[]);break;
  case 2:
   var Nc=Jc.v[0],Oc=Jc.v[1];
   var Pc=Nc.negate();
   $R(2,[Pc,Oc],"J#");break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:454:1");
var $$GHCziIntegerziType_absInteger=$f(1,function(Qc){
 $M(Qc,function(Rc){
  switch(Rc.g){
  case 1:
   var Sc=Rc.v[0];
   $M(Sc,function(Tc){
    switch(Tc.toString()){
    case "-9223372036854775808":
     $A($$GHCziIntegerziType$f);break;
    default:
     var Uc=Tc.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Uc.g){
     case 1:
      var Vc=Tc.negate();
      $R(1,[Vc],"S#");break;
     case 2:
      $A(Rc);break;
     }
    }
   },[Rc]);break;
  case 2:
   var Wc=Rc.v[0],Xc=Rc.v[1];
   var Yc=Wc.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Yc.g){
   case 1:
    var Zc=Wc.negate();
    $R(2,[Zc,Xc],"J#");break;
   case 2:
    $A(Rc);break;
   }break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:401:1");
var $$GHCziIntegerziType_gcdInteger=$f(2,function(ad,bd){
 var cd=$t(function(){
  var dd=$t(function(){
   $M(ad,function(ed){
    switch(ed.g){
    case 1:
     var fd=ed.v[0];
     $M(bd,function(gd){
      switch(gd.g){
      case 1:
       var hd=gd.v[0];
       $$GHCziIntegerziType_gcdInt.C([fd,hd],function(id){
	$R(1,[id],"S#");
       },[]);break;
      case 2:
       var jd=gd.v[0],kd=gd.v[1];
       $M(fd,function(ld){
	switch(ld.toString()){
	case "0":
	 $$GHCziIntegerziType_absInteger.J(gd);break;
	default:
	 $M(jd,function(md){
	  switch(md.toString()){
	  case "0":
	   $$GHCziIntegerziType_absInteger.J(ed);break;
	  default:
	   var nd=md.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(nd.g){
	   case 1:
	    var od=ld.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(od.g){
	    case 1:
	     var pd=integer_cmm_gcdIntegerIntzh(md,kd,ld);
	     $R(1,[pd],"S#");break;
	    case 2:
	     var rd=ld.negate();
	     var qd=integer_cmm_gcdIntegerIntzh(md,kd,rd);
	     $R(1,[qd],"S#");break;
	    }break;
	   case 2:
	    var sd=ld.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(sd.g){
	    case 1:
	     var ud=md.negate();
	     var td=integer_cmm_gcdIntegerIntzh(ud,kd,ld);
	     $R(1,[td],"S#");break;
	    case 2:
	     var xd=ld.negate();
	     var wd=md.negate();
	     var vd=integer_cmm_gcdIntegerIntzh(wd,kd,xd);
	     $R(1,[vd],"S#");break;
	    }break;
	   }
	  }
	 },[ld,kd,ed]);
	}
       },[jd,kd,ed,gd]);break;
      }
     },[fd,ed]);break;
    case 2:
     var yd=ed.v[0],zd=ed.v[1];
     $M(bd,function(Ad){
      switch(Ad.g){
      case 1:
       $$GHCziIntegerziType_gcdInteger.J(Ad,ed);break;
      case 2:
       var Bd=Ad.v[0],Cd=Ad.v[1];
       var Dd=integer_cmm_gcdIntegerzh(yd,zd,Bd,Cd);
       var Ed=Dd[0],Fd=Dd[1];
       $R(2,[Ed,Fd],"J#");break;
      }
     },[ed,yd,zd]);break;
    }
   },[bd]);
  },[ad,bd],"$wfail1");
  $M(bd,function(Gd){
   switch(Gd.g){
   case 1:
    var Hd=Gd.v[0];
    $M(Hd,function(Id){
     switch(Id.toString()){
     case "-9223372036854775808":
      var Jd=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
      var Kd=Jd[0],Ld=Jd[1];
      var Md=$d(2,[Kd,Ld],"sat");
      $$GHCziIntegerziType_gcdInteger.J(ad,Md);break;
     default:
      $A(dd);
     }
    },[ad,bd,dd]);break;
   case 2:
    $A(dd);break;
   }
  },[ad,bd,dd]);
 },[ad,bd],"$wfail");
 $M(ad,function(Nd){
  switch(Nd.g){
  case 1:
   var Od=Nd.v[0];
   $M(Od,function(Pd){
    switch(Pd.toString()){
    case "-9223372036854775808":
     var Qd=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
     var Rd=Qd[0],Sd=Qd[1];
     var Td=$d(2,[Rd,Sd],"sat");
     $$GHCziIntegerziType_gcdInteger.J(Td,bd);break;
    default:
     $A(cd);
    }
   },[ad,bd,cd]);break;
  case 2:
   $A(cd);break;
  }
 },[ad,bd,cd]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:260:1");
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
var $$GHCziIntegerziType_mkIntegerzuf=$f(1,function(ne){
 $M(ne,function(oe){
  switch(oe.g){
  case 1:
   $A($$GHCziIntegerziType$a);break;
  case 2:
   var pe=oe.v[0],qe=oe.v[1];
   $M(pe,function(re){
    var se=re.v[0];
    $$GHCziIntegerziType_mkIntegerzuf.C([qe],function(te){
     $$GHCziIntegerziType_shiftLInteger.C([te,goog.math.Long.fromBits(31,0)],function(ue){
      var ve=$d(1,[se],"sat");
      $$GHCziIntegerziType_orInteger.J(ve,ue);
     },[se]);
    },[se]);
   },[qe]);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:82:11");
var $$GHCziIntegerziType_mkInteger=$f(2,function(we,xe){
 $M(we,function(ye){
  switch(ye.g){
  case 1:
   $$GHCziIntegerziType_mkIntegerzuf.C([xe],function(ze){
    $$GHCziIntegerziType_negateInteger.J(ze);
   },[]);break;
  case 2:
   $$GHCziIntegerziType_mkIntegerzuf.J(xe);break;
  }
 },[xe]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:80:1");
var $$GHCziIntegerziType$a=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl");
var $$GHCziIntegerziType$b=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl1");
var $$GHCziIntegerziType$c=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"lvl2");
var $$GHCziIntegerziType$d=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,2147483647)]);
},"lvl3");
var $$GHCziIntegerziType$e=$T(function(){
 $$GHCziIntegerziType_plusInteger.J($$GHCziIntegerziType$d,$$GHCziIntegerziType$b);
},"lvl4");
var $$GHCziIntegerziType$f=$T(function(){
 $$GHCziIntegerziType_plusInteger.J($$GHCziIntegerziType$d,$$GHCziIntegerziType$b);
},"lvl5");
var $$Main_zdfReadCommand4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Walk");
},[],"in `main:Main'");
var $$Main_zdfReadCommand23=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Pickup");
},[],"in `main:Main'");
var $$Main_zdfReadCommand49=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Splash");
},[],"in `main:Main'");
var $$Main_zdfReadCommand50=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Dunk");
},[],"in `main:Main'");
var $$Main_zdfReadCommand51=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Weld");
},[],"in `main:Main'");
var $$Main_zdfReadCommand67=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Inventory");
},[],"in `main:Main'");
var $$Main_zdfReadCommand66=$f(2,function(x,y){
 y.J($$Main_Inventory);
},[],"in `main:Main'");
var $$Main_zdfReadCommand65=$D(1,function(){
 $r([$$Main_zdfReadCommand67,$$Main_zdfReadCommand66]);
},"in `main:Main'");
var $$Main_zdfReadCommand64=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Look");
},[],"in `main:Main'");
var $$Main_zdfReadCommand63=$f(2,function(z,A){
 A.J($$Main_Look);
},[],"in `main:Main'");
var $$Main_zdfReadCommand62=$D(1,function(){
 $r([$$Main_zdfReadCommand64,$$Main_zdfReadCommand63]);
},"in `main:Main'");
var $$Main_zdfReadCommand61=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Quit");
},[],"in `main:Main'");
var $$Main_zdfReadCommand60=$f(2,function(B,C){
 C.J($$Main_Quit);
},[],"in `main:Main'");
var $$Main_zdfReadCommand59=$D(1,function(){
 $r([$$Main_zdfReadCommand61,$$Main_zdfReadCommand60]);
},"in `main:Main'");
var $$Main_zdfReadCommand58=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Help");
},[],"in `main:Main'");
var $$Main_zdfReadCommand57=$f(2,function(D,E){
 E.J($$Main_Help);
},[],"in `main:Main'");
var $$Main_zdfReadCommand56=$D(1,function(){
 $r([$$Main_zdfReadCommand58,$$Main_zdfReadCommand57]);
},"in `main:Main'");
var $$Main_zdfReadCommand55=$D(2,function(){
 $r([$$Main_zdfReadCommand56,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_zdfReadCommand54=$D(2,function(){
 $r([$$Main_zdfReadCommand59,$$Main_zdfReadCommand55]);
},"in `main:Main'");
var $$Main_zdfReadCommand53=$D(2,function(){
 $r([$$Main_zdfReadCommand62,$$Main_zdfReadCommand54]);
},"in `main:Main'");
var $$Main_zdfReadCommand52=$D(2,function(){
 $r([$$Main_zdfReadCommand65,$$Main_zdfReadCommand53]);
},"in `main:Main'");
var $$Main_zdfReadCommand48=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Whiskeybottle");
},[],"in `main:Main'");
var $$Main_zdfReadCommand47=$f(2,function(F,G){
 G.J($$Main_Whiskeybottle);
},[],"in `main:Main'");
var $$Main_zdfReadCommand46=$D(1,function(){
 $r([$$Main_zdfReadCommand48,$$Main_zdfReadCommand47]);
},"in `main:Main'");
var $$Main_zdfReadCommand45=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Bucket");
},[],"in `main:Main'");
var $$Main_zdfReadCommand44=$f(2,function(H,I){
 I.J($$Main_Bucket);
},[],"in `main:Main'");
var $$Main_zdfReadCommand43=$D(1,function(){
 $r([$$Main_zdfReadCommand45,$$Main_zdfReadCommand44]);
},"in `main:Main'");
var $$Main_zdfReadCommand42=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Chain");
},[],"in `main:Main'");
var $$Main_zdfReadCommand41=$f(2,function(J,K){
 K.J($$Main_Chain);
},[],"in `main:Main'");
var $$Main_zdfReadCommand40=$D(1,function(){
 $r([$$Main_zdfReadCommand42,$$Main_zdfReadCommand41]);
},"in `main:Main'");
var $$Main_zdfReadCommand39=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Frog");
},[],"in `main:Main'");
var $$Main_zdfReadCommand38=$f(2,function(L,M){
 M.J($$Main_Frog);
},[],"in `main:Main'");
var $$Main_zdfReadCommand37=$D(1,function(){
 $r([$$Main_zdfReadCommand39,$$Main_zdfReadCommand38]);
},"in `main:Main'");
var $$Main_zdfReadCommand36=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Wizard");
},[],"in `main:Main'");
var $$Main_zdfReadCommand35=$f(2,function(N,O){
 O.J($$Main_Wizzard);
},[],"in `main:Main'");
var $$Main_zdfReadCommand34=$D(1,function(){
 $r([$$Main_zdfReadCommand36,$$Main_zdfReadCommand35]);
},"in `main:Main'");
var $$Main_zdfReadCommand33=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Well");
},[],"in `main:Main'");
var $$Main_zdfReadCommand32=$f(2,function(P,Q){
 Q.J($$Main_Well);
},[],"in `main:Main'");
var $$Main_zdfReadCommand31=$D(1,function(){
 $r([$$Main_zdfReadCommand33,$$Main_zdfReadCommand32]);
},"in `main:Main'");
var $$Main_zdfReadCommand30=$D(2,function(){
 $r([$$Main_zdfReadCommand31,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_zdfReadCommand29=$D(2,function(){
 $r([$$Main_zdfReadCommand34,$$Main_zdfReadCommand30]);
},"in `main:Main'");
var $$Main_zdfReadCommand28=$D(2,function(){
 $r([$$Main_zdfReadCommand37,$$Main_zdfReadCommand29]);
},"in `main:Main'");
var $$Main_zdfReadCommand27=$D(2,function(){
 $r([$$Main_zdfReadCommand40,$$Main_zdfReadCommand28]);
},"in `main:Main'");
var $$Main_zdfReadCommand26=$D(2,function(){
 $r([$$Main_zdfReadCommand43,$$Main_zdfReadCommand27]);
},"in `main:Main'");
var $$Main_zdfReadCommand25=$D(2,function(){
 $r([$$Main_zdfReadCommand46,$$Main_zdfReadCommand26]);
},"in `main:Main'");
var $$Main_zdfReadCommand24=$f(1,function(R){
 $$GHCziRead_choose2.J($$Main_zdfReadCommand25,R);
},[],"in `main:Main'");
var $$Main_zdfReadCommand22=$t(function(){
 $$GHCziCString_unpackCStringzh.J("West");
},[],"in `main:Main'");
var $$Main_zdfReadCommand21=$f(2,function(S,T){
 T.J($$Main_West);
},[],"in `main:Main'");
var $$Main_zdfReadCommand20=$D(1,function(){
 $r([$$Main_zdfReadCommand22,$$Main_zdfReadCommand21]);
},"in `main:Main'");
var $$Main_zdfReadCommand19=$t(function(){
 $$GHCziCString_unpackCStringzh.J("East");
},[],"in `main:Main'");
var $$Main_zdfReadCommand18=$f(2,function(U,V){
 V.J($$Main_East);
},[],"in `main:Main'");
var $$Main_zdfReadCommand17=$D(1,function(){
 $r([$$Main_zdfReadCommand19,$$Main_zdfReadCommand18]);
},"in `main:Main'");
var $$Main_zdfReadCommand16=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Upstairs");
},[],"in `main:Main'");
var $$Main_zdfReadCommand15=$f(2,function(W,X){
 X.J($$Main_Upstairs);
},[],"in `main:Main'");
var $$Main_zdfReadCommand14=$D(1,function(){
 $r([$$Main_zdfReadCommand16,$$Main_zdfReadCommand15]);
},"in `main:Main'");
var $$Main_zdfReadCommand13=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Downstairs");
},[],"in `main:Main'");
var $$Main_zdfReadCommand12=$f(2,function(Y,Z){
 Z.J($$Main_Downstairs);
},[],"in `main:Main'");
var $$Main_zdfReadCommand11=$D(1,function(){
 $r([$$Main_zdfReadCommand13,$$Main_zdfReadCommand12]);
},"in `main:Main'");
var $$Main_zdfReadCommand10=$D(2,function(){
 $r([$$Main_zdfReadCommand11,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_zdfReadCommand9=$D(2,function(){
 $r([$$Main_zdfReadCommand14,$$Main_zdfReadCommand10]);
},"in `main:Main'");
var $$Main_zdfReadCommand8=$D(2,function(){
 $r([$$Main_zdfReadCommand17,$$Main_zdfReadCommand9]);
},"in `main:Main'");
var $$Main_zdfReadCommand7=$D(2,function(){
 $r([$$Main_zdfReadCommand20,$$Main_zdfReadCommand8]);
},"in `main:Main'");
var $$Main_zdfReadCommand6=$f(1,function(a1){
 $$GHCziRead_choose2.J($$Main_zdfReadCommand7,a1);
},[],"in `main:Main'");
var $$Main_zdfReadCommand5=$D(1,function(){
 $r([goog.math.Long.fromBits(11,0)]);
},"in `main:Main'");
var $$Main_zdwa2=$f(2,function(c1,d1){
 var e1=$t(function(){
  var f1=c1.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(f1.g){
  case 1:
   $R(3,[],"Fail");break;
  case 2:
   var g1=$t(function(){
    var h1=$f(1,function(i1){
     var j1=$f(1,function(k1){
      var l1=$d(7,[i1,k1],"sat");
      d1.J(l1);
     },[i1,d1],"sat");
     $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,j1);
    },[d1],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,h1);
   },[d1],"lvl10");
   var m1=$f(1,function(n1){
    $M(n1,function(o1){
     switch(o1.g){
     case 4:
      var p1=o1.v[0];
      $$GHCziBase_eqString.C([p1,$$Main_zdfReadCommand51],function(q1){
       switch(q1.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	$A(g1);break;
       }
      },[g1]);break;
     default:
      $R(3,[],"Fail");
     }
    },[g1]);
   },[g1],"k");
   var r1=$t(function(){
    $$TextziReadziLex_hsLex2.J(m1);
   },[m1],"lvl90");
   var s1=$f(1,function(t1){
    $A(r1);
   },[r1],"k1");
   var u1=$f(1,function(v1){
    $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(v1,s1);
   },[s1],"sat");
   $R(2,[u1],"Look");break;
  }
 },[c1,d1],"a5");
 var w1=c1.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(w1.g){
 case 1:
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,e1);break;
 case 2:
  var x1=$t(function(){
   var y1=$f(1,function(z1){
    var A1=$f(1,function(B1){
     var C1=$d(6,[z1,B1],"sat");
     d1.J(C1);
    },[d1,z1],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,A1);
   },[d1],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,y1);
  },[d1],"lvl10");
  var D1=$f(1,function(E1){
   $M(E1,function(F1){
    switch(F1.g){
    case 4:
     var G1=F1.v[0];
     $$GHCziBase_eqString.C([G1,$$Main_zdfReadCommand50],function(H1){
      switch(H1.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(x1);break;
      }
     },[x1]);break;
    default:
     $R(3,[],"Fail");
    }
   },[x1]);
  },[x1],"k");
  var I1=$t(function(){
   $$TextziReadziLex_hsLex2.J(D1);
  },[D1],"lvl90");
  var J1=$f(1,function(K1){
   $A(I1);
  },[I1],"k1");
  var L1=$f(1,function(M1){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(M1,J1);
  },[J1],"sat");
  var N1=$d(2,[L1],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(N1,e1);break;
 }
},[],"in `main:Main'");
var $$Main_zdwa1=$f(2,function(O1,P1){
 var Q1=O1.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(Q1.g){
 case 1:
  var R1=$t(function(){
   $$Main_zdwa2.J(O1,P1);
  },[O1,P1],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,R1);break;
 case 2:
  var S1=$t(function(){
   var T1=$f(1,function(U1){
    var V1=$f(1,function(W1){
     var X1=$d(3,[U1,W1],"sat");
     P1.J(X1);
    },[P1,U1],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,V1);
   },[P1],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,T1);
  },[P1],"lvl10");
  var Y1=$f(1,function(Z1){
   $M(Z1,function(a2){
    switch(a2.g){
    case 4:
     var b2=a2.v[0];
     $$GHCziBase_eqString.C([b2,$$Main_zdfReadCommand49],function(c2){
      switch(c2.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(S1);break;
      }
     },[S1]);break;
    default:
     $R(3,[],"Fail");
    }
   },[S1]);
  },[S1],"k");
  var d2=$t(function(){
   $$TextziReadziLex_hsLex2.J(Y1);
  },[Y1],"lvl90");
  var e2=$f(1,function(f2){
   $A(d2);
  },[d2],"k1");
  var g2=$t(function(){
   $$Main_zdwa2.J(O1,P1);
  },[O1,P1],"sat");
  var h2=$f(1,function(i2){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(i2,e2);
  },[e2],"sat");
  var j2=$d(2,[h2],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(j2,g2);break;
 }
},[],"in `main:Main'");
var $$Main_zdwa=$f(2,function(k2,l2){
 var m2=k2.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(m2.g){
 case 1:
  var n2=$t(function(){
   $$Main_zdwa1.J(k2,l2);
  },[k2,l2],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,n2);break;
 case 2:
  var o2=$t(function(){
   var p2=$f(1,function(q2){
    var r2=$d(2,[q2],"sat");
    l2.J(r2);
   },[l2],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,p2);
  },[l2],"lvl10");
  var s2=$f(1,function(t2){
   $M(t2,function(u2){
    switch(u2.g){
    case 4:
     var v2=u2.v[0];
     $$GHCziBase_eqString.C([v2,$$Main_zdfReadCommand23],function(w2){
      switch(w2.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(o2);break;
      }
     },[o2]);break;
    default:
     $R(3,[],"Fail");
    }
   },[o2]);
  },[o2],"k");
  var x2=$t(function(){
   $$TextziReadziLex_hsLex2.J(s2);
  },[s2],"lvl90");
  var y2=$f(1,function(z2){
   $A(x2);
  },[x2],"k1");
  var A2=$t(function(){
   $$Main_zdwa1.J(k2,l2);
  },[k2,l2],"sat");
  var B2=$f(1,function(C2){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(C2,y2);
  },[y2],"sat");
  var D2=$d(2,[B2],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(D2,A2);break;
 }
},[],"in `main:Main'");
var $$Main_zdfReadCommand3=$f(1,function(E2){
 var F2=$t(function(){
  $$GHCziRead_choose2.J($$Main_zdfReadCommand52,E2);
 },[E2],"ds3");
 var G2=$f(1,function(H2){
  var I2=$t(function(){
   $M(E2,function(J2){
    var K2=J2.v[0];
    var L2=K2.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(L2.g){
    case 1:
     var M2=$t(function(){
      $$Main_zdwa.J(K2,H2);
     },[H2,K2],"sat");
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,M2);break;
    case 2:
     var N2=$t(function(){
      var O2=$f(1,function(P2){
       var Q2=$d(1,[P2],"sat");
       H2.J(Q2);
      },[H2],"sat");
      $$GHCziRead_parens1.J($$Main_zdfReadCommand6,$$Main_zdfReadCommand5,O2);
     },[H2],"lvl10");
     var R2=$f(1,function(S2){
      $M(S2,function(T2){
       switch(T2.g){
       case 4:
	var U2=T2.v[0];
	$$GHCziBase_eqString.C([U2,$$Main_zdfReadCommand4],function(V2){
	 switch(V2.g){
	 case 1:
	  $R(3,[],"Fail");break;
	 case 2:
	  $A(N2);break;
	 }
	},[N2]);break;
       default:
	$R(3,[],"Fail");
       }
      },[N2]);
     },[N2],"k1");
     var W2=$t(function(){
      $$TextziReadziLex_hsLex2.J(R2);
     },[R2],"lvl90");
     var X2=$f(1,function(Y2){
      $A(W2);
     },[W2],"k2");
     var Z2=$t(function(){
      $$Main_zdwa.J(K2,H2);
     },[H2,K2],"sat");
     var a3=$f(1,function(b3){
      $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(b3,X2);
     },[X2],"sat");
     var c3=$d(2,[a3],"sat");
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(c3,Z2);break;
    }
   },[H2]);
  },[E2,H2],"sat");
  F2.C([H2],function(d3){
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(d3,I2);
  },[I2]);
 },[E2,F2],"sat");
 $A(G2);
},[],"in `main:Main'");
var $$Main_maybeRead1=$t(function(){
 $$GHCziRead_parens1.J($$Main_zdfReadCommand3,$$TextziParserCombinatorsziReadPrec_minPrec,$$TextziParserCombinatorsziReadP_zdfMonadPzuzdcreturn);
},[],"in `main:Main'");
var $$Main_capitalizze=$f(1,function(N3){
 var O3=$t(function(){
  $M(N3,function(P3){
   switch(P3.g){
   case 1:
    $A($$GHCziList_tail1);break;
   case 2:
    var Q3=P3.v[1];
    $$GHCziBase_map.J($$GHCziUnicode_toLower,Q3);break;
   }
  },[]);
 },[N3],"sat");
 var R3=$t(function(){
  $M(N3,function(S3){
   switch(S3.g){
   case 1:
    $A($$GHCziList_badHead);break;
   case 2:
    var T3=S3.v[0];
    $$GHCziUnicode_toUpper.J(T3);break;
   }
  },[]);
 },[N3],"sat");
 $R(2,[R3,O3],":");
},[],"at Advgame.hs:142:1");
var $$Main_loseString=$t(function(){
 $$GHCziCString_unpackCStringzh.J("the wizard awakens and sees that you stole his frog. he is so upset he banishes you to the netherworlds- you lose! the end");
},[],"at Advgame.hs:100:1");
var $$Main_winString=$t(function(){
 $$GHCziCString_unpackCStringzh.J("the wizard awakens from his slumber and greets you warmly. he hands you the magic low-carb donut- you win! the end");
},[],"at Advgame.hs:99:1");
var $$Main_inventory=$D(1,function(){
 $r([$$Main_InventoryRoom,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);
},"at Advgame.hs:93:1");
var $$Main_attic3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("You are in the attic of the wizard's house.  There is a giant welding torch in the corner.");
},[],"in `main:Main'");
var $$Main_attic2=$D(1,function(){
 $r([$$Main_Downstairs,$$Main_Stairway,$$Main_LivingRoom]);
},"in `main:Main'");
var $$Main_attic1=$D(2,function(){
 $r([$$Main_attic2,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_attic=$D(1,function(){
 $r([$$Main_Attic,$$Main_attic3,$$Main_attic1,$$GHCziTypes_ZMZN]);
},"at Advgame.hs:89:1");
var $$Main_garden6=$t(function(){
 $$GHCziCString_unpackCStringzh.J("You are in a beautiful garden.  There is a well in front of you.");
},[],"in `main:Main'");
var $$Main_garden5=$D(1,function(){
 $r([$$Main_East,$$Main_Door,$$Main_LivingRoom]);
},"in `main:Main'");
var $$Main_garden4=$D(2,function(){
 $r([$$Main_garden5,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_garden3=$D(2,function(){
 $r([$$Main_Well,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_garden2=$D(2,function(){
 $r([$$Main_Frog,$$Main_garden3]);
},"in `main:Main'");
var $$Main_garden1=$D(2,function(){
 $r([$$Main_Chain,$$Main_garden2]);
},"in `main:Main'");
var $$Main_garden=$D(1,function(){
 $r([$$Main_Garden,$$Main_garden6,$$Main_garden4,$$Main_garden1]);
},"at Advgame.hs:85:1");
var $$Main_livingRoom8=$t(function(){
 $$GHCziCString_unpackCStringzh.J("You are in the living-room of a wizard's house.  There is a wizard snoring loudly on the couch.");
},[],"in `main:Main'");
var $$Main_livingRoom7=$D(1,function(){
 $r([$$Main_West,$$Main_Door,$$Main_Garden]);
},"in `main:Main'");
var $$Main_livingRoom6=$D(1,function(){
 $r([$$Main_Upstairs,$$Main_Stairway,$$Main_Attic]);
},"in `main:Main'");
var $$Main_livingRoom5=$D(2,function(){
 $r([$$Main_livingRoom6,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_livingRoom4=$D(2,function(){
 $r([$$Main_livingRoom7,$$Main_livingRoom5]);
},"in `main:Main'");
var $$Main_livingRoom3=$D(2,function(){
 $r([$$Main_Wizzard,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_livingRoom2=$D(2,function(){
 $r([$$Main_Bucket,$$Main_livingRoom3]);
},"in `main:Main'");
var $$Main_livingRoom1=$D(2,function(){
 $r([$$Main_Whiskeybottle,$$Main_livingRoom2]);
},"in `main:Main'");
var $$Main_livingRoom=$D(1,function(){
 $r([$$Main_LivingRoom,$$Main_livingRoom8,$$Main_livingRoom4,$$Main_livingRoom1]);
},"at Advgame.hs:81:1");
var $$Main_initialMap4=$D(2,function(){
 $r([$$Main_inventory,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_initialMap3=$D(2,function(){
 $r([$$Main_attic,$$Main_initialMap4]);
},"in `main:Main'");
var $$Main_initialMap2=$D(2,function(){
 $r([$$Main_garden,$$Main_initialMap3]);
},"in `main:Main'");
var $$Main_initialMap1=$D(2,function(){
 $r([$$Main_livingRoom,$$Main_initialMap2]);
},"in `main:Main'");
var $$Main_initialMap=$D(1,function(){
 $r([$$Main_initialMap1,$$Main_livingRoom,$$GHCziTypes_False,$$GHCziTypes_False]);
},"at Advgame.hs:104:1");
var $$Main_zdfShowEntryway2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("door");
},[],"in `main:Main'");
var $$Main_zdfShowEntryway1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("stairway");
},[],"in `main:Main'");
var $$Main_zdfEqRoomzuzdczeze=$f(2,function(k8,l8){
 $M(k8,function(m8){
  switch(m8.g){
  case 1:
   $M(l8,function(n8){
    switch(n8.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   $M(l8,function(o8){
    switch(o8.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(l8,function(p8){
    switch(p8.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(l8,function(q8){
    switch(q8.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[l8]);
},[],"in `main:Main'");
var $$Main_zdfEqDirectionzuzdczeze=$f(2,function(u8,v8){
 $M(u8,function(w8){
  switch(w8.g){
  case 1:
   $M(v8,function(x8){
    switch(x8.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   $M(v8,function(y8){
    switch(y8.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(v8,function(z8){
    switch(z8.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(v8,function(A8){
    switch(A8.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[v8]);
},[],"in `main:Main'");
var $$Main_zdfEqObjectzuzdczeze=$f(2,function(Z8,a9){
 $M(Z8,function(b9){
  switch(b9.g){
  case 1:
   $M(a9,function(c9){
    switch(c9.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    case 5:
     $R(1,[],"False");break;
    case 6:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   $M(a9,function(d9){
    switch(d9.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(a9,function(e9){
    switch(e9.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(a9,function(f9){
    switch(f9.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 5:
   $M(a9,function(g9){
    switch(g9.g){
    case 5:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 6:
   $M(a9,function(h9){
    switch(h9.g){
    case 6:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[a9]);
},[],"in `main:Main'");
var $$Main_zdwviableDir=$f(2,function(gb,hb){
 var ib=$f(1,function(jb){
  $M(jb,function(kb){
   switch(kb.g){
   case 1:
    $R(1,[],"False");break;
   case 2:
    var lb=kb.v[0],mb=kb.v[1];
    $M(lb,function(nb){
     var ob=nb.v[0];
     $M(ob,function(pb){
      switch(pb.g){
      case 1:
       $M(gb,function(qb){
	switch(qb.g){
	case 1:
	 $R(2,[],"True");break;
	case 2:
	 ib.J(mb);break;
	case 3:
	 ib.J(mb);break;
	case 4:
	 ib.J(mb);break;
	}
       },[gb,mb,ib]);break;
      case 2:
       $M(gb,function(rb){
	switch(rb.g){
	case 2:
	 $R(2,[],"True");break;
	default:
	 ib.J(mb);
	}
       },[gb,mb,ib]);break;
      case 3:
       $M(gb,function(sb){
	switch(sb.g){
	case 3:
	 $R(2,[],"True");break;
	default:
	 ib.J(mb);
	}
       },[gb,mb,ib]);break;
      case 4:
       $M(gb,function(tb){
	switch(tb.g){
	case 4:
	 $R(2,[],"True");break;
	default:
	 ib.J(mb);
	}
       },[gb,mb,ib]);break;
      }
     },[gb,mb,ib]);
    },[gb,mb,ib]);break;
   }
  },[gb,ib]);
 },[gb],"go");
 ib.J(hb);
},[],"at Advgame.hs:134:1");
var $$Main_zdfShowObjectzuzdcshowList=$f(2,function(yb,zb){
 $M(yb,function(Ab){
  switch(Ab.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",zb);break;
  case 2:
   var Bb=Ab.v[0],Cb=Ab.v[1];
   var Db=$t(function(){
    var Eb=$t(function(){
     var Fb=$d(2,[$$GHCziShow_showListzuzu2,zb],"lvl19");
     var Gb=$f(1,function(Hb){
      $M(Hb,function(Ib){
       switch(Ib.g){
       case 1:
	$A(Fb);break;
       case 2:
	var Jb=Ib.v[0],Kb=Ib.v[1];
	var Lb=$t(function(){
	 $M(Jb,function(Mb){
	  switch(Mb.g){
	  case 1:
	   var Nb=$t(function(){
	    Gb.J(Kb);
	   },[Kb,Gb],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadCommand48,Nb);break;
	  case 2:
	   var Ob=$t(function(){
	    Gb.J(Kb);
	   },[Kb,Gb],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadCommand45,Ob);break;
	  case 3:
	   var Pb=$t(function(){
	    Gb.J(Kb);
	   },[Kb,Gb],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadCommand42,Pb);break;
	  case 4:
	   var Qb=$t(function(){
	    Gb.J(Kb);
	   },[Kb,Gb],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadCommand39,Qb);break;
	  case 5:
	   var Rb=$t(function(){
	    Gb.J(Kb);
	   },[Kb,Gb],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadCommand36,Rb);break;
	  case 6:
	   var Sb=$t(function(){
	    Gb.J(Kb);
	   },[Kb,Gb],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadCommand33,Sb);break;
	  }
	 },[Kb,Gb]);
	},[Jb,Kb,Gb],"sat");
	$R(2,[$$GHCziShow_showListzuzu1,Lb],":");break;
       }
      },[Fb,Gb]);
     },[Fb],"showl");
     Gb.J(Cb);
    },[zb,Cb],"a5");
    $M(Bb,function(Tb){
     switch(Tb.g){
     case 1:
      $$GHCziBase_zpzp.J($$Main_zdfReadCommand48,Eb);break;
     case 2:
      $$GHCziBase_zpzp.J($$Main_zdfReadCommand45,Eb);break;
     case 3:
      $$GHCziBase_zpzp.J($$Main_zdfReadCommand42,Eb);break;
     case 4:
      $$GHCziBase_zpzp.J($$Main_zdfReadCommand39,Eb);break;
     case 5:
      $$GHCziBase_zpzp.J($$Main_zdfReadCommand36,Eb);break;
     case 6:
      $$GHCziBase_zpzp.J($$Main_zdfReadCommand33,Eb);break;
     }
    },[Eb]);
   },[zb,Cb,Bb],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,Db],":");break;
  }
 },[zb]);
},[],"in `main:Main'");
var $$Main_zdfShowObjectzuzdcshow=$f(1,function(Ub){
 $M(Ub,function(Vb){
  switch(Vb.g){
  case 1:
   $A($$Main_zdfReadCommand48);break;
  case 2:
   $A($$Main_zdfReadCommand45);break;
  case 3:
   $A($$Main_zdfReadCommand42);break;
  case 4:
   $A($$Main_zdfReadCommand39);break;
  case 5:
   $A($$Main_zdfReadCommand36);break;
  case 6:
   $A($$Main_zdfReadCommand33);break;
  }
 },[]);
},[],"in `main:Main'");
var $$Main_describePath2=$f(3,function(he,ie,je){
 var ke=$t(function(){
  $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,je);
 },[je],"a6");
 var le=$d(2,[ke],"a7");
 var me=$d(2,[le,ie],"args1");
 var ne=$f(1,function(oe){
  var pe=$t(function(){
   var qe=$t(function(){
    $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,oe);
   },[oe],"sat");
   var re=$d(2,[qe],"sat");
   var se=$d(2,[re,me],"sat");
   $$GHCziList_reverse1.J(se,$$GHCziTypes_ZMZN);
  },[me,oe],"sat");
  $$TextziPrintf_uprintf.C([he,pe],function(te){
   $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,te);
  },[]);
 },[me,he],"sat");
 $A(ne);
},[],"in `main:Main'");
var $$Main_describePath1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("There is a %s going %s from here.");
},[],"in `main:Main'");
var $$Main_describePath=$f(1,function(ue){
 var ve=$t(function(){
  $M(ue,function(we){
   var xe=we.v[0];
   $M(xe,function(ye){
    switch(ye.g){
    case 1:
     $A($$Main_zdfReadCommand22);break;
    case 2:
     $A($$Main_zdfReadCommand19);break;
    case 3:
     $A($$Main_zdfReadCommand16);break;
    case 4:
     $A($$Main_zdfReadCommand13);break;
    }
   },[]);
  },[]);
 },[ue],"sat");
 var ze=$t(function(){
  $M(ue,function(Ae){
   var Be=Ae.v[1];
   $M(Be,function(Ce){
    switch(Ce.g){
    case 1:
     $A($$Main_zdfShowEntryway2);break;
    case 2:
     $A($$Main_zdfShowEntryway1);break;
    }
   },[]);
  },[]);
 },[ue],"sat");
 $$Main_describePath2.J($$Main_describePath1,$$GHCziTypes_ZMZN,ze,ve);
},[],"at Advgame.hs:111:1");
var $$Main_describePaths2=$f(2,function(De,Ee){
 $M(De,function(Fe){
  switch(Fe.g){
  case 1:
   $r([Ee,$$GHCziTuple_Z0T]);break;
  case 2:
   var Ge=Fe.v[0],He=Fe.v[1];
   var Ie=$t(function(){
    $$Main_describePath.J(Ge);
   },[Ge],"sat");
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Ie,$$GHCziTypes_True,Ee],function(Je){
    var Ke=Je[0];
    $$Main_describePaths2.J(He,Ke);
   },[He]);break;
  }
 },[Ee]);
},[],"in `main:Main'");
var $$Main_parseCommand=$f(1,function(Pe){
 var Qe=$t(function(){
  $$DataziList_words.C([Pe],function(Re){
   $$GHCziBase_map.C([$$Main_capitalizze,Re],function(Se){
    switch(Se.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var Te=Se.v[0],Ue=Se.v[1];
     $M(Ue,function(Ve){
      switch(Ve.g){
      case 1:
       $A(Te);break;
      case 2:
       var We=Ve.v[0],Xe=Ve.v[1];
       var Ye=$t(function(){
	$$DataziList_unwordszuzdsunwords.J(We,Xe);
       },[We,Xe],"sat");
       var Ze=$d(2,[$$DataziList_unwords1,Ye],"sat");
       $$GHCziBase_zpzp.J(Te,Ze);break;
      }
     },[Te]);break;
    }
   },[]);
  },[]);
 },[Pe],"sat");
 $$TextziParserCombinatorsziReadP_run.C([$$Main_maybeRead1,Qe],function(af){
  switch(af.g){
  case 1:
   $R(1,[],"Nothing");break;
  case 2:
   var bf=af.v[0],cf=af.v[1];
   $M(bf,function(df){
    var ef=df.v[0],ff=df.v[1];
    $M(ff,function(gf){
     switch(gf.g){
     case 1:
      $M(cf,function(hf){
       switch(hf.g){
       case 1:
	$R(2,[ef],"Just");break;
       case 2:
	$R(1,[],"Nothing");break;
       }
      },[ef]);break;
     case 2:
      $R(1,[],"Nothing");break;
     }
    },[cf,ef]);
   },[cf]);break;
  }
 },[]);
},[],"at Advgame.hs:152:1");
var $$Main_zdfEqObjectzuzdczsze=$f(2,function(jf,kf){
 $M(jf,function(lf){
  switch(lf.g){
  case 1:
   $M(kf,function(mf){
    switch(mf.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     $R(2,[],"True");break;
    case 3:
     $R(2,[],"True");break;
    case 4:
     $R(2,[],"True");break;
    case 5:
     $R(2,[],"True");break;
    case 6:
     $R(2,[],"True");break;
    }
   },[]);break;
  case 2:
   $M(kf,function(nf){
    switch(nf.g){
    case 2:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 3:
   $M(kf,function(of){
    switch(of.g){
    case 3:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 4:
   $M(kf,function(pf){
    switch(pf.g){
    case 4:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 5:
   $M(kf,function(qf){
    switch(qf.g){
    case 5:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 6:
   $M(kf,function(rf){
    switch(rf.g){
    case 6:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  }
 },[kf]);
},[],"in `main:Main'");
var $$Main_zdfEqObject=$D(1,function(){
 $r([$$Main_zdfEqObjectzuzdczeze,$$Main_zdfEqObjectzuzdczsze]);
},"at Advgame.hs:15:15");
var $$Main_pickup12=$D(2,function(){
 $r([$$Main_Frog,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_pickup11=$D(2,function(){
 $r([$$Main_Chain,$$Main_pickup12]);
},"in `main:Main'");
var $$Main_pickup10=$D(2,function(){
 $r([$$Main_Bucket,$$Main_pickup11]);
},"in `main:Main'");
var $$Main_pickup9=$D(2,function(){
 $r([$$Main_Whiskeybottle,$$Main_pickup10]);
},"in `main:Main'");
var $$Main_pickup6=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand45);
},[],"in `main:Main'");
var $$Main_pickup5=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand42);
},[],"in `main:Main'");
var $$Main_pickup4=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand39);
},[],"in `main:Main'");
var $$Main_pickup3=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand36);
},[],"in `main:Main'");
var $$Main_pickup2=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand33);
},[],"in `main:Main'");
var $$Main_pickup7=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand48);
},[],"in `main:Main'");
var $$Main_describeFloor2=$f(2,function(tf,uf){
 $M(tf,function(vf){
  switch(vf.g){
  case 1:
   $r([uf,$$GHCziTuple_Z0T]);break;
  case 2:
   var wf=vf.v[0],xf=vf.v[1];
   $$GHCziList_elem.C([$$Main_zdfEqObject,wf,$$Main_pickup9],function(yf){
    switch(yf.g){
    case 1:
     $$Main_describeFloor2.J(xf,uf);break;
    case 2:
     var zf=$t(function(){
      var Af=$t(function(){
       var Bf=$t(function(){
	$M(wf,function(Cf){
	 switch(Cf.g){
	 case 1:
	  $A($$Main_pickup7);break;
	 case 2:
	  $A($$Main_pickup6);break;
	 case 3:
	  $A($$Main_pickup5);break;
	 case 4:
	  $A($$Main_pickup4);break;
	 case 5:
	  $A($$Main_pickup3);break;
	 case 6:
	  $A($$Main_pickup2);break;
	 }
	},[]);
       },[wf],"sat");
       var Df=$d(2,[Bf],"sat");
       var Ef=$d(2,[Df,$$GHCziTypes_ZMZN],"sat");
       $$GHCziList_reverse1.J(Ef,$$GHCziTypes_ZMZN);
      },[wf],"sat");
      $$TextziPrintf_uprintf.C([$$Main$k,Af],function(Ff){
       $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,Ff);
      },[]);
     },[wf],"sat");
     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,zf,$$GHCziTypes_True,uf],function(Gf){
      var Hf=Gf[0];
      $$Main_describeFloor2.J(xf,Hf);
     },[xf]);break;
    }
   },[uf,wf,xf]);break;
  }
 },[uf]);
},[],"in `main:Main'");
var $$Main_getLoc=$f(2,function(uh,vh){
 var wh=$f(1,function(xh){
  $M(xh,function(yh){
   var zh=yh.v[0];
   $$Main_zdfEqRoomzuzdczeze.J(zh,uh);
  },[uh]);
 },[uh],"sat");
 $$GHCziList_filter.C([wh,vh],function(Ah){
  switch(Ah.g){
  case 1:
   $A($$GHCziList_badHead);break;
  case 2:
   var Bh=Ah.v[0];
   $A(Bh);break;
  }
 },[]);
},[],"at Advgame.hs:138:1");
var $$Main_zdwzdczeze1=$f(6,function(Ch,Dh,Eh,Fh,Gh,Hh){
 var Ih=$t(function(){
  $M(Dh,function(Jh){
   switch(Jh.g){
   case 1:
    $M(Gh,function(Kh){
     switch(Kh.g){
     case 1:
      $M(Eh,function(Lh){
       switch(Lh.g){
       case 1:
	$M(Hh,function(Mh){
	 switch(Mh.g){
	 case 1:
	  $R(2,[],"True");break;
	 case 2:
	  $R(1,[],"False");break;
	 case 3:
	  $R(1,[],"False");break;
	 case 4:
	  $R(1,[],"False");break;
	 }
	},[]);break;
       case 2:
	$M(Hh,function(Nh){
	 switch(Nh.g){
	 case 2:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 3:
	$M(Hh,function(Oh){
	 switch(Oh.g){
	 case 3:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 4:
	$M(Hh,function(Ph){
	 switch(Ph.g){
	 case 4:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       }
      },[Hh]);break;
     case 2:
      $R(1,[],"False");break;
     }
    },[Eh,Hh]);break;
   case 2:
    $M(Gh,function(Qh){
     switch(Qh.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $M(Eh,function(Rh){
       switch(Rh.g){
       case 1:
	$M(Hh,function(Sh){
	 switch(Sh.g){
	 case 1:
	  $R(2,[],"True");break;
	 case 2:
	  $R(1,[],"False");break;
	 case 3:
	  $R(1,[],"False");break;
	 case 4:
	  $R(1,[],"False");break;
	 }
	},[]);break;
       case 2:
	$M(Hh,function(Th){
	 switch(Th.g){
	 case 2:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 3:
	$M(Hh,function(Uh){
	 switch(Uh.g){
	 case 3:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 4:
	$M(Hh,function(Vh){
	 switch(Vh.g){
	 case 4:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       }
      },[Hh]);break;
     }
    },[Eh,Hh]);break;
   }
  },[Gh,Eh,Hh]);
 },[Dh,Gh,Eh,Hh],"$w$j");
 $M(Ch,function(Wh){
  switch(Wh.g){
  case 1:
   $M(Fh,function(Xh){
    switch(Xh.g){
    case 1:
     $A(Ih);break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    }
   },[Dh,Gh,Eh,Hh,Ih]);break;
  case 2:
   $M(Fh,function(Yh){
    switch(Yh.g){
    case 2:
     $A(Ih);break;
    default:
     $R(1,[],"False");
    }
   },[Dh,Gh,Eh,Hh,Ih]);break;
  case 3:
   $M(Fh,function(Zh){
    switch(Zh.g){
    case 3:
     $A(Ih);break;
    default:
     $R(1,[],"False");
    }
   },[Dh,Gh,Eh,Hh,Ih]);break;
  case 4:
   $M(Fh,function(ai){
    switch(ai.g){
    case 4:
     $A(Ih);break;
    default:
     $R(1,[],"False");
    }
   },[Dh,Gh,Eh,Hh,Ih]);break;
  }
 },[Dh,Gh,Eh,Hh,Ih,Fh]);
},[],"in `main:Main'");
var $$Main_zdfEqPathzuzdczeze=$f(2,function(bi,ci){
 $M(bi,function(di){
  var ei=di.v[0],fi=di.v[1],gi=di.v[2];
  $M(ci,function(hi){
   var ii=hi.v[0],ji=hi.v[1],ki=hi.v[2];
   $$Main_zdwzdczeze1.J(ei,fi,gi,ii,ji,ki);
  },[ei,fi,gi]);
 },[ci]);
},[],"in `main:Main'");
var $$Main_zdfEqPathzuzdczsze=$f(2,function(li,mi){
 $M(li,function(ni){
  var oi=ni.v[0],pi=ni.v[1],qi=ni.v[2];
  $M(mi,function(ri){
   var si=ri.v[0],ti=ri.v[1],ui=ri.v[2];
   $$Main_zdwzdczeze1.C([oi,pi,qi,si,ti,ui],function(vi){
    switch(vi.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);
  },[oi,pi,qi]);
 },[mi]);
},[],"in `main:Main'");
var $$Main_zdfEqPath=$D(1,function(){
 $r([$$Main_zdfEqPathzuzdczeze,$$Main_zdfEqPathzuzdczsze]);
},"at Advgame.hs:37:13");
var $$Main_zdwzdczeze=$f(8,function(wi,xi,yi,zi,Ai,Bi,Ci,Di){
 var Ei=$t(function(){
  $$GHCziBase_eqString.C([xi,Bi],function(Fi){
   switch(Fi.g){
   case 1:
    $R(1,[],"False");break;
   case 2:
    $$GHCziClasses_zdfEqZMZNzuzdczeze1.C([$$Main_zdfEqPath,yi,Ci],function(Gi){
     switch(Gi.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $$GHCziClasses_zdfEqZMZNzuzdczeze1.J($$Main_zdfEqObject,zi,Di);break;
     }
    },[zi,Di]);break;
   }
  },[yi,Ci,zi,Di]);
 },[xi,Bi,yi,Ci,zi,Di],"$w$j");
 $M(wi,function(Hi){
  switch(Hi.g){
  case 1:
   $M(Ai,function(Ii){
    switch(Ii.g){
    case 1:
     $A(Ei);break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    }
   },[xi,Bi,yi,Ci,zi,Di,Ei]);break;
  case 2:
   $M(Ai,function(Ji){
    switch(Ji.g){
    case 2:
     $A(Ei);break;
    default:
     $R(1,[],"False");
    }
   },[xi,Bi,yi,Ci,zi,Di,Ei]);break;
  case 3:
   $M(Ai,function(Ki){
    switch(Ki.g){
    case 3:
     $A(Ei);break;
    default:
     $R(1,[],"False");
    }
   },[xi,Bi,yi,Ci,zi,Di,Ei]);break;
  case 4:
   $M(Ai,function(Li){
    switch(Li.g){
    case 4:
     $A(Ei);break;
    default:
     $R(1,[],"False");
    }
   },[xi,Bi,yi,Ci,zi,Di,Ei]);break;
  }
 },[xi,Bi,yi,Ci,zi,Di,Ei,Ai]);
},[],"in `main:Main'");
var $$Main_zdfEqLocationzuzdczeze=$f(2,function(Mi,Ni){
 $M(Mi,function(Oi){
  var Pi=Oi.v[0],Qi=Oi.v[1],Ri=Oi.v[2],Si=Oi.v[3];
  $M(Ni,function(Ti){
   var Ui=Ti.v[0],Vi=Ti.v[1],Wi=Ti.v[2],Xi=Ti.v[3];
   $$Main_zdwzdczeze.J(Pi,Qi,Ri,Si,Ui,Vi,Wi,Xi);
  },[Pi,Qi,Ri,Si]);
 },[Ni]);
},[],"in `main:Main'");
var $$Main_help24=$f(3,function(sj,tj,uj){
 $M(sj,function(vj){
  switch(vj.g){
  case 1:
   var wj=$d(1,[$$GHCziTuple_Z0T,tj],"sat");
   $r([uj,wj]);break;
  case 2:
   var xj=vj.v[0],yj=vj.v[1];
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,xj,$$GHCziTypes_True,uj],function(zj){
    var Aj=zj[0];
    $$Main_help24.J(yj,tj,Aj);
   },[tj,yj]);break;
  }
 },[uj,tj]);
},[],"in `main:Main'");
var $$Main_help23=$t(function(){
 $$GHCziCString_unpackCStringzh.J("  Available commands are:");
},[],"in `main:Main'");
var $$Main_help22=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Walk [Direction]");
},[],"in `main:Main'");
var $$Main_help21=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Pickup [Object]");
},[],"in `main:Main'");
var $$Main_help20=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Splash [Object] [Object]");
},[],"in `main:Main'");
var $$Main_help19=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Weld [Object] [Object]");
},[],"in `main:Main'");
var $$Main_help18=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Dunk [Object] [Object]");
},[],"in `main:Main'");
var $$Main_help17=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Inventory");
},[],"in `main:Main'");
var $$Main_help16=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Look");
},[],"in `main:Main'");
var $$Main_help15=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Quit");
},[],"in `main:Main'");
var $$Main_help14=$t(function(){
 $$GHCziCString_unpackCStringzh.J("   - Help");
},[],"in `main:Main'");
var $$Main_help13=$D(2,function(){
 $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_help12=$D(2,function(){
 $r([$$Main_help14,$$Main_help13]);
},"in `main:Main'");
var $$Main_help11=$D(2,function(){
 $r([$$Main_help15,$$Main_help12]);
},"in `main:Main'");
var $$Main_help10=$D(2,function(){
 $r([$$Main_help16,$$Main_help11]);
},"in `main:Main'");
var $$Main_help9=$D(2,function(){
 $r([$$Main_help17,$$Main_help10]);
},"in `main:Main'");
var $$Main_help8=$D(2,function(){
 $r([$$Main_help18,$$Main_help9]);
},"in `main:Main'");
var $$Main_help7=$D(2,function(){
 $r([$$Main_help19,$$Main_help8]);
},"in `main:Main'");
var $$Main_help6=$D(2,function(){
 $r([$$Main_help20,$$Main_help7]);
},"in `main:Main'");
var $$Main_help5=$D(2,function(){
 $r([$$Main_help21,$$Main_help6]);
},"in `main:Main'");
var $$Main_help4=$D(2,function(){
 $r([$$Main_help22,$$Main_help5]);
},"in `main:Main'");
var $$Main_help3=$D(2,function(){
 $r([$$Main_help23,$$Main_help4]);
},"in `main:Main'");
var $$Main_help2=$D(2,function(){
 $r([$$GHCziTypes_ZMZN,$$Main_help3]);
},"in `main:Main'");
var $$Main_getInventory2=$f(1,function(Kj){
 $M(Kj,function(Lj){
  var Mj=Lj.v[0];
  $M(Mj,function(Nj){
   switch(Nj.g){
   case 4:
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `main:Main'");
var $$Main_walk1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't walk that way");
},[],"in `main:Main'");
var $$Main_walk6=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Walking %s ");
},[],"in `main:Main'");
var $$Main_walk5=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand22);
},[],"in `main:Main'");
var $$Main_walk4=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand19);
},[],"in `main:Main'");
var $$Main_walk3=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand16);
},[],"in `main:Main'");
var $$Main_walk2=$t(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadCommand13);
},[],"in `main:Main'");
var $$Main_walk=$f(1,function(jk){
 var kk=$f(1,function(lk){
  $M(lk,function(mk){
   var nk=mk.v[0];
   $$Main_zdfEqDirectionzuzdczeze.J(nk,jk);
  },[jk]);
 },[jk],"lvl10");
 var ok=$t(function(){
  var pk=$t(function(){
   var qk=$t(function(){
    $M(jk,function(rk){
     switch(rk.g){
     case 1:
      $A($$Main_walk5);break;
     case 2:
      $A($$Main_walk4);break;
     case 3:
      $A($$Main_walk3);break;
     case 4:
      $A($$Main_walk2);break;
     }
    },[]);
   },[jk],"sat");
   var sk=$d(2,[qk],"sat");
   var tk=$d(2,[sk,$$GHCziTypes_ZMZN],"sat");
   $$GHCziList_reverse1.J(tk,$$GHCziTypes_ZMZN);
  },[jk],"sat");
  $$TextziPrintf_uprintf.C([$$Main_walk6,pk],function(uk){
   $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,uk);
  },[]);
 },[jk],"a5");
 var vk=$f(2,function(wk,xk){
  $M(wk,function(yk){
   var zk=yk.v[0],Ak=yk.v[1],Bk=yk.v[2],Ck=yk.v[3];
   $M(Ak,function(Dk){
    var Ek=Dk.v[2];
    $$Main_zdwviableDir.C([jk,Ek],function(Fk){
     switch(Fk.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_walk1,$$GHCziTypes_True,xk],function(Gk){
       var Hk=Gk[0];
       var Ik=$d(1,[$$Main_Continue,yk],"sat");
       $r([Hk,Ik]);
      },[yk]);break;
     case 2:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,ok,$$GHCziTypes_True,xk],function(Jk){
       var Kk=Jk[0];
       var Lk=$t(function(){
	var Mk=$t(function(){
	 $$GHCziList_filter.C([kk,Ek],function(Nk){
	  switch(Nk.g){
	  case 1:
	   $A($$GHCziList_badHead);break;
	  case 2:
	   var Ok=Nk.v[0];
	   $M(Ok,function(Pk){
	    var Qk=Pk.v[2];
	    $A(Qk);
	   },[]);break;
	  }
	 },[]);
	},[kk,Ek],"x");
	var Rk=$f(1,function(Sk){
	 $M(Sk,function(Tk){
	  var Uk=Tk.v[0];
	  $$Main_zdfEqRoomzuzdczeze.J(Uk,Mk);
	 },[Mk]);
	},[Mk],"sat");
	$$GHCziList_filter.C([Rk,zk],function(Vk){
	 switch(Vk.g){
	 case 1:
	  $A($$GHCziList_badHead);break;
	 case 2:
	  var Wk=Vk.v[0];
	  $A(Wk);break;
	 }
	},[]);
       },[kk,Ek,zk],"sat");
       var Xk=$d(1,[zk,Lk,Bk,Ck],"sat");
       var Yk=$d(1,[$$Main_Continue,Xk],"sat");
       $r([Kk,Yk]);
      },[kk,Ek,zk,Bk,Ck]);break;
     }
    },[kk,ok,Ek,xk,yk,zk,Bk,Ck]);
   },[jk,kk,ok,xk,yk,zk,Bk,Ck]);
  },[jk,kk,ok,xk]);
 },[jk,kk,ok],"sat");
 $A(vk);
},[],"at Advgame.hs:178:1");
var $$Main_pickup1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't pick that up");
},[],"in `main:Main'");
var $$Main_pickup8=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Picking up %s");
},[],"in `main:Main'");
var $$Main_pickup=$f(1,function(Zk){
 var al=$t(function(){
  $$GHCziList_elem.J($$Main_zdfEqObject,Zk,$$Main_pickup9);
 },[Zk],"lvl10");
 var bl=$t(function(){
  var cl=$t(function(){
   var dl=$t(function(){
    $M(Zk,function(el){
     switch(el.g){
     case 1:
      $A($$Main_pickup7);break;
     case 2:
      $A($$Main_pickup6);break;
     case 3:
      $A($$Main_pickup5);break;
     case 4:
      $A($$Main_pickup4);break;
     case 5:
      $A($$Main_pickup3);break;
     case 6:
      $A($$Main_pickup2);break;
     }
    },[]);
   },[Zk],"sat");
   var fl=$d(2,[dl],"sat");
   var gl=$d(2,[fl,$$GHCziTypes_ZMZN],"sat");
   $$GHCziList_reverse1.J(gl,$$GHCziTypes_ZMZN);
  },[Zk],"sat");
  $$TextziPrintf_uprintf.C([$$Main_pickup8,cl],function(hl){
   $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,hl);
  },[]);
 },[Zk],"a5");
 var il=$f(2,function(jl,kl){
  $M(jl,function(ll){
   var ml=ll.v[0],nl=ll.v[1],ol=ll.v[2],pl=ll.v[3];
   $M(nl,function(ql){
    var rl=ql.v[0],sl=ql.v[1],tl=ql.v[2],ul=ql.v[3];
    $$GHCziList_elem.C([$$Main_zdfEqObject,Zk,ul],function(vl){
     switch(vl.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_pickup1,$$GHCziTypes_True,kl],function(wl){
       var xl=wl[0];
       var yl=$d(1,[$$Main_Continue,ll],"sat");
       $r([xl,yl]);
      },[ll]);break;
     case 2:
      $M(al,function(zl){
       switch(zl.g){
       case 1:
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_pickup1,$$GHCziTypes_True,kl],function(Al){
	 var Bl=Al[0];
	 var Cl=$d(1,[$$Main_Continue,ll],"sat");
	 $r([Bl,Cl]);
	},[ll]);break;
       case 2:
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,bl,$$GHCziTypes_True,kl],function(Dl){
	 var El=Dl[0];
	 var Fl=$t(function(){
	  $$DataziList_deleteBy.J($$Main_zdfEqObjectzuzdczeze,Zk,ul);
	 },[Zk,ul],"a7");
	 var Gl=$d(1,[rl,sl,tl,Fl],"newl");
	 var Hl=$t(function(){
	  $$Main_getLoc.J($$Main_InventoryRoom,ml);
	 },[ml],"inv");
	 var Il=$t(function(){
	  $$DataziList_deleteBy.C([$$Main_zdfEqLocationzuzdczeze,ql,ml],function(Jl){
	   $$DataziList_deleteBy.J($$Main_zdfEqLocationzuzdczeze,Hl,Jl);
	  },[Hl]);
	 },[ml,Hl,ql],"sat");
	 var Kl=$t(function(){
	  $M(Hl,function(Ll){
	   var Ml=Ll.v[0],Nl=Ll.v[1],Ol=Ll.v[2],Pl=Ll.v[3];
	   var Ql=$d(2,[Zk,Pl],"sat");
	   $R(1,[Ml,Nl,Ol,Ql],"Location");
	  },[Zk]);
	 },[Zk,Hl],"sat");
	 var Rl=$d(2,[Kl,Il],"sat");
	 var Sl=$d(2,[Gl,Rl],"sat");
	 var Tl=$d(1,[Sl,Gl,ol,pl],"sat");
	 var Ul=$d(1,[$$Main_Continue,Tl],"sat");
	 $r([El,Ul]);
	},[Zk,ul,rl,sl,tl,ml,ql,ol,pl]);break;
       }
      },[Zk,bl,ul,kl,ll,rl,sl,tl,ml,ql,ol,pl]);break;
     }
    },[Zk,al,bl,ul,kl,ll,rl,sl,tl,ml,ql,ol,pl]);
   },[Zk,al,bl,kl,ll,ml,ol,pl]);
  },[Zk,al,bl,kl]);
 },[Zk,al,bl],"sat");
 $A(il);
},[],"at Advgame.hs:188:1");
var $$Main_gameAction=$f(10,function(em,fm,gm,hm,im,jm,km,lm,mm,nm){
 var om=$t(function(){
  var pm=$t(function(){
   $$Main_zdfShowObjectzuzdcshow.J(hm);
  },[hm],"sat");
  var qm=$t(function(){
   $$Main_zdfShowObjectzuzdcshow.J(gm);
  },[gm],"sat");
  $$Main_describePath2.J(mm,$$GHCziTypes_ZMZN,qm,pm);
 },[mm,gm,hm],"a5");
 var rm=$t(function(){
  $M(gm,function(sm){
   switch(sm.g){
   case 1:
    $M(im,function(tm){
     switch(tm.g){
     case 1:
      $$Main_zdfEqObjectzuzdczeze.J(hm,jm);break;
     case 2:
      $R(1,[],"False");break;
     case 3:
      $R(1,[],"False");break;
     case 4:
      $R(1,[],"False");break;
     case 5:
      $R(1,[],"False");break;
     case 6:
      $R(1,[],"False");break;
     }
    },[hm,jm]);break;
   case 2:
    $M(im,function(um){
     switch(um.g){
     case 2:
      $$Main_zdfEqObjectzuzdczeze.J(hm,jm);break;
     default:
      $R(1,[],"False");
     }
    },[hm,jm]);break;
   case 3:
    $M(im,function(vm){
     switch(vm.g){
     case 3:
      $$Main_zdfEqObjectzuzdczeze.J(hm,jm);break;
     default:
      $R(1,[],"False");
     }
    },[hm,jm]);break;
   case 4:
    $M(im,function(wm){
     switch(wm.g){
     case 4:
      $$Main_zdfEqObjectzuzdczeze.J(hm,jm);break;
     default:
      $R(1,[],"False");
     }
    },[hm,jm]);break;
   case 5:
    $M(im,function(xm){
     switch(xm.g){
     case 5:
      $$Main_zdfEqObjectzuzdczeze.J(hm,jm);break;
     default:
      $R(1,[],"False");
     }
    },[hm,jm]);break;
   case 6:
    $M(im,function(ym){
     switch(ym.g){
     case 6:
      $$Main_zdfEqObjectzuzdczeze.J(hm,jm);break;
     default:
      $R(1,[],"False");
     }
    },[hm,jm]);break;
   }
  },[hm,im,jm]);
 },[gm,hm,im,jm],"lvl10");
 var zm=$f(2,function(Am,Bm){
  $$Main$n.C([em,Am,Bm],function(Cm){
   var Dm=Cm[0],Em=Cm[1];
   var Fm=$t(function(){
    $M(Em,function(Gm){
     var Hm=Gm.v[1];
     $A(Hm);
    },[]);
   },[Em],"eta1");
   var Im=$f(2,function(Jm,Km){
    $M(Em,function(Lm){
     var Mm=Lm.v[0];
     var Nm=$t(function(){
      $M(Km,function(Om){
       var Pm=Om.v[1];
       $A(Pm);
      },[]);
     },[Km],"a9");
     var Qm=$d(1,[$$GHCziTypes_False,Nm],"lvl11");
     $$GHCziList_and.C([Mm],function(Rm){
      switch(Rm.g){
      case 1:
       $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(Sm){
	var Tm=Sm[0];
	$r([Tm,Qm]);
       },[Qm]);break;
      case 2:
       $M(Fm,function(Um){
	var Vm=Um.v[1];
	$M(Vm,function(Wm){
	 var Xm=Wm.v[0];
	 var Ym=$f(1,function(Zm){
	  $M(rm,function(an){
	   switch(an.g){
	   case 1:
	    $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(bn){
	     var cn=bn[0];
	     $r([cn,Qm]);
	    },[Qm]);break;
	   case 2:
	    $M(Km,function(dn){
	     var en=dn.v[0],fn=dn.v[1];
	     $$GHCziList_and.C([en],function(gn){
	      switch(gn.g){
	      case 1:
	       $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(hn){
		var jn=hn[0];
		var kn=$d(1,[$$GHCziTypes_False,fn],"sat");
		$r([jn,kn]);
	       },[fn]);break;
	      case 2:
	       km.C([fn,Jm],function(ln){
		var mn=ln[0],nn=ln[1];
		$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,om,$$GHCziTypes_True,mn],function(on){
		 var pn=on[0];
		 var qn=$t(function(){
		  $M(nn,function(rn){
		   var sn=rn.v[1];
		   $A(sn);
		  },[]);
		 },[nn],"sat");
		 var tn=$d(1,[$$GHCziTypes_True,qn],"sat");
		 $r([pn,tn]);
		},[nn]);
	       },[om]);break;
	      }
	     },[om,nm,Jm,fn,km]);
	    },[om,nm,Jm,km]);break;
	   }
	  },[om,Km,Qm,nm,Jm,km]);
	 },[om,rm,Km,Qm,nm,Jm,km],"$w$j");
	 $M(Xm,function(un){
	  switch(un.g){
	  case 1:
	   $M(fm,function(vn){
	    switch(vn.g){
	    case 1:
	     Ym.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(wn){
	      var xn=wn[0];
	      $r([xn,Qm]);
	     },[Qm]);break;
	    case 3:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(yn){
	      var zn=yn[0];
	      $r([zn,Qm]);
	     },[Qm]);break;
	    case 4:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(An){
	      var Bn=An[0];
	      $r([Bn,Qm]);
	     },[Qm]);break;
	    }
	   },[om,rm,Km,Qm,nm,Jm,km,Ym]);break;
	  case 2:
	   $M(fm,function(Cn){
	    switch(Cn.g){
	    case 2:
	     Ym.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(Dn){
	      var En=Dn[0];
	      $r([En,Qm]);
	     },[Qm]);
	    }
	   },[om,rm,Km,Qm,nm,Jm,km,Ym]);break;
	  case 3:
	   $M(fm,function(Fn){
	    switch(Fn.g){
	    case 3:
	     Ym.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(Gn){
	      var Hn=Gn[0];
	      $r([Hn,Qm]);
	     },[Qm]);
	    }
	   },[om,rm,Km,Qm,nm,Jm,km,Ym]);break;
	  case 4:
	   $M(fm,function(In){
	    switch(In.g){
	    case 4:
	     Ym.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,nm,$$GHCziTypes_True,Jm],function(Jn){
	      var Kn=Jn[0];
	      $r([Kn,Qm]);
	     },[Qm]);
	    }
	   },[om,rm,Km,Qm,nm,Jm,km,Ym]);break;
	  }
	 },[om,rm,Km,Qm,nm,Jm,km,Ym,fm]);
	},[om,rm,Km,Qm,nm,Jm,km,fm]);
       },[om,rm,Km,Qm,nm,Jm,km,fm]);break;
      }
     },[om,rm,Fm,Km,Qm,nm,Jm,km,fm]);
    },[om,rm,Fm,Km,nm,Jm,km,fm]);
   },[om,rm,Em,Fm,nm,km,fm],"$j");
   $M(lm,function(Ln){
    switch(Ln.g){
    case 1:
     var Mn=$d(1,[$$Main$l,Fm],"sat");
     Im.J(Dm,Mn);break;
    case 2:
     $$Main$m.C([Ln,Fm,Dm],function(Nn){
      var On=Nn[0],Pn=Nn[1];
      Im.J(On,Pn);
     },[om,rm,Em,Fm,nm,km,fm,Im]);break;
    }
   },[om,rm,Em,Fm,nm,km,fm,Im,Dm]);
  },[om,rm,nm,km,fm,lm]);
 },[om,rm,em,nm,km,fm,lm],"sat");
 $A(zm);
},[],"at Advgame.hs:213:1");
var $$Main_dunk7=$D(2,function(){
 $r([$$Main_Bucket,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_weld4=$D(2,function(){
 $r([$$Main_Chain,$$Main_dunk7]);
},"in `main:Main'");
var $$Main_weld3=$f(2,function(Qn,Rn){
 var Sn=$t(function(){
  $M(Qn,function(Tn){
   var Un=Tn.v[0],Vn=Tn.v[1],Wn=Tn.v[3];
   $R(1,[Un,Vn,$$GHCziTypes_True,Wn],"GS");
  },[]);
 },[Qn],"sat");
 var Xn=$d(1,[$$GHCziTuple_Z0T,Sn],"sat");
 $r([Rn,Xn]);
},[],"in `main:Main'");
var $$Main_weld2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Welding the %s to the %s");
},[],"in `main:Main'");
var $$Main_weld1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't weld like that");
},[],"in `main:Main'");
var $$Main_weld=$f(2,function(Yn,Zn){
 var ao=$t(function(){
  $$Main_gameAction.J($$Main_weld4,$$Main_Attic,$$Main_Chain,$$Main_Bucket,Yn,Zn,$$Main_weld3,$$GHCziTypes_ZMZN,$$Main_weld2,$$Main_weld1);
 },[Yn,Zn],"a5");
 var bo=$f(2,function(co,eo){
  ao.C([co,eo],function(fo){
   var go=fo[0],ho=fo[1];
   var io=$t(function(){
    $M(ho,function(jo){
     var ko=jo.v[1];
     $A(ko);
    },[]);
   },[ho],"sat");
   var lo=$d(1,[$$Main_Continue,io],"sat");
   $r([go,lo]);
  },[]);
 },[ao],"sat");
 $A(bo);
},[],"at Advgame.hs:223:1");
var $$Main_dunk6=$D(2,function(){
 $r([$$Main_Chain,$$Main_dunk7]);
},"in `main:Main'");
var $$Main_dunk5=$f(2,function(mo,no){
 var oo=$t(function(){
  $M(mo,function(po){
   var qo=po.v[0],ro=po.v[1],so=po.v[2];
   $R(1,[qo,ro,so,$$GHCziTypes_True],"GS");
  },[]);
 },[mo],"sat");
 var to=$d(1,[$$GHCziTuple_Z0T,oo],"sat");
 $r([no,to]);
},[],"in `main:Main'");
var $$Main_dunk4=$f(2,function(uo,vo){
 var wo=$t(function(){
  $M(uo,function(xo){
   var yo=xo.v[2];
   $A(yo);
  },[]);
 },[uo],"sat");
 var zo=$d(1,[wo,uo],"sat");
 $r([vo,zo]);
},[],"in `main:Main'");
var $$Main_dunk3=$D(2,function(){
 $r([$$Main_dunk4,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_dunk2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Dunking the %s in the %s");
},[],"in `main:Main'");
var $$Main_dunk1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't dunk like that");
},[],"in `main:Main'");
var $$Main_dunk=$f(2,function(Ao,Bo){
 var Co=$t(function(){
  $$Main_gameAction.J($$Main_dunk6,$$Main_Garden,$$Main_Bucket,$$Main_Well,Ao,Bo,$$Main_dunk5,$$Main_dunk3,$$Main_dunk2,$$Main_dunk1);
 },[Ao,Bo],"a5");
 var Do=$f(2,function(Eo,Fo){
  Co.C([Eo,Fo],function(Go){
   var Ho=Go[0],Io=Go[1];
   var Jo=$t(function(){
    $M(Io,function(Ko){
     var Lo=Ko.v[1];
     $A(Lo);
    },[]);
   },[Io],"sat");
   var Mo=$d(1,[$$Main_Continue,Jo],"sat");
   $r([Ho,Mo]);
  },[]);
 },[Co],"sat");
 $A(Do);
},[],"at Advgame.hs:229:1");
var $$Main_splash6=$f(2,function(No,Oo){
 var Po=$d(1,[$$GHCziTuple_Z0T,No],"sat");
 $r([Oo,Po]);
},[],"in `main:Main'");
var $$Main_splash5=$f(2,function(Qo,Ro){
 var So=$t(function(){
  $M(Qo,function(To){
   var Uo=To.v[3];
   $A(Uo);
  },[]);
 },[Qo],"sat");
 var Vo=$d(1,[So,Qo],"sat");
 $r([Ro,Vo]);
},[],"in `main:Main'");
var $$Main_splash4=$D(2,function(){
 $r([$$Main_splash5,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_splash3=$D(2,function(){
 $r([$$Main_dunk4,$$Main_splash4]);
},"in `main:Main'");
var $$Main_splash2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Splashing the %s on the %s");
},[],"in `main:Main'");
var $$Main_splash1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't splash like that");
},[],"in `main:Main'");
var $$Main_splash=$f(2,function(Wo,Xo){
 var Yo=$t(function(){
  $$Main_gameAction.J($$Main_dunk7,$$Main_LivingRoom,$$Main_Bucket,$$Main_Wizzard,Wo,Xo,$$Main_splash6,$$Main_splash3,$$Main_splash2,$$Main_splash1);
 },[Wo,Xo],"a5");
 var Zo=$f(2,function(ap,bp){
  Yo.C([ap,bp],function(cp){
   var dp=cp[0],ep=cp[1];
   $M(ep,function(fp){
    var gp=fp.v[0],hp=fp.v[1];
    $M(gp,function(ip){
     switch(ip.g){
     case 1:
      var jp=$d(1,[$$Main_Continue,hp],"sat");
      $r([dp,jp]);break;
     case 2:
      var kp=$t(function(){
       $M(hp,function(lp){
	var mp=lp.v[0];
	$$GHCziList_filter.C([$$Main_getInventory2,mp],function(np){
	 switch(np.g){
	 case 1:
	  $A($$GHCziList_badHead);break;
	 case 2:
	  var op=np.v[0];
	  $M(op,function(pp){
	   var qp=pp.v[3];
	   $$GHCziList_elem.C([$$Main_zdfEqObject,$$Main_Frog,qp],function(rp){
	    switch(rp.g){
	    case 1:
	     $R(2,[],"Lost");break;
	    case 2:
	     $R(1,[],"Won");break;
	    }
	   },[]);
	  },[]);break;
	 }
	},[]);
       },[]);
      },[hp],"sat");
      var sp=$d(1,[kp,hp],"sat");
      $r([dp,sp]);break;
     }
    },[dp,hp]);
   },[dp]);
  },[]);
 },[Yo],"sat");
 $A(Zo);
},[],"at Advgame.hs:234:1");
var $$Main_main4=$f(2,function(tp,up){
 $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$p,$$GHCziTypes_False,up],function(vp){
  var wp=vp[0];
  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandle_hFlush2,$$GHCziIOziHandleziFD_stdout,$$GHCziIOziHandleziInternals_flushWriteBuffer1,wp],function(xp){
   var yp=xp[0];
   $$GHCziIOziHandleziInternals_wantReadableHandlezu1.C([$$GHCziIOziHandleziText_hGetLine3,$$GHCziIOziHandleziFD_stdin,$$GHCziIOziHandleziText_hGetLine2,yp],function(zp){
    var Ap=zp[0],Bp=zp[1];
    $$Main_parseCommand.C([Bp],function(Cp){
     switch(Cp.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$o,$$GHCziTypes_True,Ap],function(Dp){
       var Ep=Dp[0];
       $$Main_main4.J(tp,Ep);
      },[tp]);break;
     case 2:
      var Fp=Cp.v[0];
      $M(Fp,function(Gp){
       switch(Gp.g){
       case 1:
	var Hp=Gp.v[0];
	$$Main_walk.C([Hp,tp,Ap],function(Ip){
	 var Jp=Ip[0],Kp=Ip[1];
	 $M(Kp,function(Lp){
	  var Mp=Lp.v[0],Np=Lp.v[1];
	  $M(Mp,function(Op){
	   switch(Op.g){
	   case 3:
	    $$Main_main4.J(Np,Jp);break;
	   default:
	    $r([Jp,Lp]);
	   }
	  },[Jp,Lp,Np]);
	 },[Jp]);
	},[]);break;
       case 2:
	var Pp=Gp.v[0];
	$$Main_pickup.C([Pp,tp,Ap],function(Qp){
	 var Rp=Qp[0],Sp=Qp[1];
	 $M(Sp,function(Tp){
	  var Up=Tp.v[0],Vp=Tp.v[1];
	  $M(Up,function(Wp){
	   switch(Wp.g){
	   case 3:
	    $$Main_main4.J(Vp,Rp);break;
	   default:
	    $r([Rp,Tp]);
	   }
	  },[Rp,Tp,Vp]);
	 },[Rp]);
	},[]);break;
       case 3:
	var Xp=Gp.v[0],Yp=Gp.v[1];
	$$Main_splash.C([Xp,Yp,tp,Ap],function(Zp){
	 var aq=Zp[0],bq=Zp[1];
	 $M(bq,function(cq){
	  var dq=cq.v[0],eq=cq.v[1];
	  $M(dq,function(fq){
	   switch(fq.g){
	   case 3:
	    $$Main_main4.J(eq,aq);break;
	   default:
	    $r([aq,cq]);
	   }
	  },[aq,cq,eq]);
	 },[aq]);
	},[]);break;
       case 4:
	var gq=$t(function(){
	 $M(tp,function(hq){
	  var iq=hq.v[0];
	  $$GHCziList_filter.C([$$Main_getInventory2,iq],function(jq){
	   switch(jq.g){
	   case 1:
	    $A($$GHCziList_badHead);break;
	   case 2:
	    var kq=jq.v[0];
	    $M(kq,function(lq){
	     var mq=lq.v[3];
	     $$Main_zdfShowObjectzuzdcshowList.J(mq,$$GHCziTypes_ZMZN);
	    },[]);break;
	   }
	  },[]);
	 },[]);
	},[tp],"sat");
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,gq,$$GHCziTypes_True,Ap],function(nq){
	 var oq=nq[0];
	 $$Main_main4.J(tp,oq);
	},[tp]);break;
       case 5:
	var pq=$t(function(){
	 $M(tp,function(qq){
	  var rq=qq.v[1];
	  $A(rq);
	 },[]);
	},[tp],"loc");
	var sq=$t(function(){
	 $M(pq,function(tq){
	  var uq=tq.v[1];
	  $A(uq);
	 },[]);
	},[pq],"sat");
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,sq,$$GHCziTypes_True,Ap],function(vq){
	 var wq=vq[0];
	 $M(pq,function(xq){
	  var yq=xq.v[2],zq=xq.v[3];
	  $$Main_describePaths2.C([yq,wq],function(Aq){
	   var Bq=Aq[0];
	   $$Main_describeFloor2.C([zq,Bq],function(Cq){
	    var Dq=Cq[0];
	    $$Main_main4.J(tp,Dq);
	   },[tp]);
	  },[tp,zq]);
	 },[tp,wq]);
	},[tp,pq]);break;
       case 6:
	var Eq=Gp.v[0],Fq=Gp.v[1];
	$$Main_dunk.C([Eq,Fq,tp,Ap],function(Gq){
	 var Hq=Gq[0],Iq=Gq[1];
	 $M(Iq,function(Jq){
	  var Kq=Jq.v[0],Lq=Jq.v[1];
	  $M(Kq,function(Mq){
	   switch(Mq.g){
	   case 3:
	    $$Main_main4.J(Lq,Hq);break;
	   default:
	    $r([Hq,Jq]);
	   }
	  },[Hq,Jq,Lq]);
	 },[Hq]);
	},[]);break;
       case 7:
	var Nq=Gp.v[0],Oq=Gp.v[1];
	$$Main_weld.C([Nq,Oq,tp,Ap],function(Pq){
	 var Qq=Pq[0],Rq=Pq[1];
	 $M(Rq,function(Sq){
	  var Tq=Sq.v[0],Uq=Sq.v[1];
	  $M(Tq,function(Vq){
	   switch(Vq.g){
	   case 3:
	    $$Main_main4.J(Uq,Qq);break;
	   default:
	    $r([Qq,Sq]);
	   }
	  },[Qq,Sq,Uq]);
	 },[Qq]);
	},[]);break;
       case 8:
	var Wq=$d(1,[$$Main_QuitGame,tp],"sat");
	$r([Ap,Wq]);break;
       case 9:
	$$Main_help24.C([$$Main_help2,tp,Ap],function(Xq){
	 var Yq=Xq[0],Zq=Xq[1];
	 var ar=$t(function(){
	  $M(Zq,function(br){
	   var cr=br.v[1];
	   $A(cr);
	  },[]);
	 },[Zq],"sat");
	 $$Main_main4.J(ar,Yq);
	},[]);break;
       }
      },[Ap,tp]);break;
     }
    },[Ap,tp]);
   },[tp]);
  },[tp]);
 },[tp]);
},[],"in `main:Main'");
var $$Main_main3=$t(function(){
 $$ControlziExceptionziBase_patError.J("Advgame.hs:(289,5)-(292,37)|case");
},[],"in `main:Main'");
var $$Main_main2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Goodbye!");
},[],"in `main:Main'");
var $$Main_main1=$f(1,function(dr){
 $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_livingRoom8,$$GHCziTypes_True,dr],function(er){
  var fr=er[0];
  $$Main_describePaths2.C([$$Main_livingRoom4,fr],function(gr){
   var hr=gr[0];
   $$Main_describeFloor2.C([$$Main_livingRoom1,hr],function(ir){
    var jr=ir[0];
    $$Main_main4.C([$$Main_initialMap,jr],function(kr){
     var lr=kr[0],mr=kr[1];
     $M(mr,function(nr){
      var or=nr.v[0];
      $M(or,function(pr){
       switch(pr.g){
       case 1:
	$$SystemziIO_putStrLn1.J($$Main_winString,lr);break;
       case 2:
	$$SystemziIO_putStrLn1.J($$Main_loseString,lr);break;
       case 3:
	$A($$Main_main3);break;
       case 4:
	$$GHCziIOziHandleziText_hPutStr2.J($$GHCziIOziHandleziFD_stdout,$$Main_main2,$$GHCziTypes_True,lr);break;
       }
      },[lr]);
     },[lr]);
    },[]);
   },[]);
  },[]);
 },[]);
},[],"in `main:Main'");
var $$Main_main5=$f(1,function(qr){
 $$GHCziTopHandler_runMainIO1.J($$Main_main1,qr);
},[],"in `main:Main'");
var $$$ZCMain_main=$f(1,function(j){
 $$Main_main5.J(j);
},[],"at Advgame.hs:286:1");
var $$Main_Continue=$D(3,function(){
 $r([]);
},"at Advgame.hs:64:28");
var $$Main_QuitGame=$D(4,function(){
 $r([]);
},"at Advgame.hs:64:39");
var $$Main_Inventory=$D(4,function(){
 $r([]);
},"at Advgame.hs:51:16");
var $$Main_Look=$D(5,function(){
 $r([]);
},"at Advgame.hs:52:16");
var $$Main_Quit=$D(8,function(){
 $r([]);
},"at Advgame.hs:55:16");
var $$Main_Help=$D(9,function(){
 $r([]);
},"at Advgame.hs:56:16");
var $$Main_Door=$D(1,function(){
 $r([]);
},"at Advgame.hs:26:17");
var $$Main_Stairway=$D(2,function(){
 $r([]);
},"at Advgame.hs:26:24");
var $$Main_Garden=$D(1,function(){
 $r([]);
},"at Advgame.hs:22:13");
var $$Main_Attic=$D(2,function(){
 $r([]);
},"at Advgame.hs:22:22");
var $$Main_LivingRoom=$D(3,function(){
 $r([]);
},"at Advgame.hs:22:30");
var $$Main_InventoryRoom=$D(4,function(){
 $r([]);
},"at Advgame.hs:22:43");
var $$Main_West=$D(1,function(){
 $r([]);
},"at Advgame.hs:18:18");
var $$Main_East=$D(2,function(){
 $r([]);
},"at Advgame.hs:18:25");
var $$Main_Upstairs=$D(3,function(){
 $r([]);
},"at Advgame.hs:18:32");
var $$Main_Downstairs=$D(4,function(){
 $r([]);
},"at Advgame.hs:18:43");
var $$Main_Whiskeybottle=$D(1,function(){
 $r([]);
},"at Advgame.hs:14:15");
var $$Main_Bucket=$D(2,function(){
 $r([]);
},"at Advgame.hs:14:31");
var $$Main_Chain=$D(3,function(){
 $r([]);
},"at Advgame.hs:14:40");
var $$Main_Frog=$D(4,function(){
 $r([]);
},"at Advgame.hs:14:48");
var $$Main_Wizzard=$D(5,function(){
 $r([]);
},"at Advgame.hs:14:55");
var $$Main_Well=$D(6,function(){
 $r([]);
},"at Advgame.hs:14:64");
var $$Main$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("You see a %s on the floor.");
},"fmts");
var $$Main$l=$D(2,function(){
 $r([$$GHCziTypes_True,$$GHCziTypes_ZMZN]);
},"a1");
var $$Main$m=$F(3,function(ur,vr,wr){
 $M(ur,function(xr){
  switch(xr.g){
  case 1:
   var yr=$d(1,[$$GHCziTypes_ZMZN,vr],"sat");
   $r([wr,yr]);break;
  case 2:
   var zr=xr.v[0],Ar=xr.v[1];
   zr.C([vr,wr],function(Br){
    var Cr=Br[0],Dr=Br[1];
    var Er=$t(function(){
     $M(Dr,function(Fr){
      var Gr=Fr.v[1];
      $A(Gr);
     },[]);
    },[Dr],"sat");
    $$Main$m.C([Ar,Er,Cr],function(Hr){
     var Ir=Hr[0],Jr=Hr[1];
     var Kr=$t(function(){
      $M(Jr,function(Lr){
       var Mr=Lr.v[1];
       $A(Mr);
      },[]);
     },[Jr],"sat");
     var Nr=$t(function(){
      $M(Jr,function(Or){
       var Pr=Or.v[0];
       $A(Pr);
      },[]);
     },[Jr],"sat");
     var Qr=$t(function(){
      $M(Dr,function(Rr){
       var Sr=Rr.v[0];
       $A(Sr);
      },[]);
     },[Dr],"sat");
     var Tr=$d(2,[Qr,Nr],"sat");
     var Ur=$d(1,[Tr,Kr],"sat");
     $r([Ir,Ur]);
    },[Dr]);
   },[Ar]);break;
  }
 },[wr,vr]);
},"a2");
var $$Main$n=$F(3,function(Vr,Wr,Xr){
 $M(Vr,function(Yr){
  switch(Yr.g){
  case 1:
   var Zr=$d(1,[$$GHCziTypes_ZMZN,Wr],"sat");
   $r([Xr,Zr]);break;
  case 2:
   var as=Yr.v[0],bs=Yr.v[1];
   $$Main$n.C([bs,Wr,Xr],function(cs){
    var ds=cs[0],es=cs[1];
    var fs=$t(function(){
     $M(es,function(gs){
      var hs=gs.v[1];
      $A(hs);
     },[]);
    },[es],"sat");
    var is=$t(function(){
     $M(es,function(js){
      var ks=js.v[0];
      $A(ks);
     },[]);
    },[es],"sat");
    var ls=$t(function(){
     $M(Wr,function(ms){
      var ns=ms.v[0];
      $$GHCziList_filter.C([$$Main_getInventory2,ns],function(os){
       switch(os.g){
       case 1:
	$A($$GHCziList_badHead);break;
       case 2:
	var ps=os.v[0];
	$M(ps,function(qs){
	 var rs=qs.v[3];
	 $$GHCziList_elem.J($$Main_zdfEqObject,as,rs);
	},[as]);break;
       }
      },[as]);
     },[as]);
    },[Wr,as],"sat");
    var ss=$d(2,[ls,is],"sat");
    var ts=$d(1,[ss,fs],"sat");
    $r([ds,ts]);
   },[Wr,as]);break;
  }
 },[Xr,Wr]);
},"a3");
var $$Main$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Invalid command!");
},"a4");
var $$Main$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("> ");
},"lvl9");
//@ sourceURL=hs1.js
