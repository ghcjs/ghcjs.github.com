//$$ZCMain_main

var $$ControlziExceptionziBase_bracket2=$f(3,function(I1,J1,K1){
 I1.C([K1],function(L1){
  var M1=L1[0];
  $r($hs_raiseIOzh(J1,M1));
 },[J1]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowsPrec=$f(3,function(X3,Y3,Z3){
 $M(Y3,function(a4){
  var b4=a4.v[0];
  $$GHCziBase_zpzp.J(b4,Z3);
 },[Z3]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFail1=$f(2,function(c4,d4){
 $M(c4,function(e4){
  var f4=e4.v[0];
  $$GHCziBase_zpzp.J(f4,d4);
 },[d4]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowList=$f(2,function(g4,h4){
 $$GHCziShow_showListzuzu.J($$ControlziExceptionziBase_zdfShowPatternMatchFail1,g4,h4);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshow=$f(1,function(i4){
 $M(i4,function(j4){
  var k4=j4.v[0];
  $A(k4);
 },[]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFail=$D(1,function(){
 $r([$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowsPrec,$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshow,$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowList]);
},"at libraries/base/Control/Exception/Base.hs:562:10");
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
var $$ControlziExceptionziBase_zdfTypeablePatternMatchFailzuzdctypeOf=$f(1,function(H5){
 $A($$ControlziExceptionziBase_zdfTypeablePatternMatchFail1);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdcfromException=$f(1,function(I5){
 $M(I5,function(J5){
  var K5=J5.v[0],L5=J5.v[1];
  $$GHCziException_zdp1Exception.C([K5,L5],function(M5){
   var N5=M5.v[0],O5=M5.v[1];
   var P5=$hs_eqWordzh(N5,goog.math.Long.fromBits(18445595,3739165398));
   switch(P5.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var Q5=$hs_eqWordzh(O5,goog.math.Long.fromBits(52003073,3246954884));
    switch(Q5.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[L5],"Just");break;
    }break;
   }
  },[L5]);
 },[]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFail=$D(1,function(){
 $r([$$ControlziExceptionziBase_zdfTypeablePatternMatchFailzuzdctypeOf,$$ControlziExceptionziBase_zdfShowPatternMatchFail,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdcfromException]);
},"at libraries/base/Control/Exception/Base.hs:571:10");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException=$f(1,function(d){
 $R(1,[$$ControlziExceptionziBase_zdfExceptionPatternMatchFail,d],"SomeException");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_patError=$f(1,function(c7){
 var d7=$t(function(){
  $$GHCziIOziException_untangle.J(c7,$$ControlziExceptionziBase$b);
 },[c7],"sat");
 var e7=$d(1,[d7],"sat");
 $$GHCziException_throw2.J(e7,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_irrefutPatError=$f(1,function(n7){
 var o7=$t(function(){
  $$GHCziIOziException_untangle.J(n7,$$ControlziExceptionziBase$e);
 },[n7],"sat");
 var p7=$d(1,[o7],"sat");
 $$GHCziException_throw2.J(p7,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Non-exhaustive patterns in");
},"lvl1");
var $$ControlziExceptionziBase$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Irrefutable pattern failed for pattern");
},"lvl4");
var $$DataziChar_digitToInt1=$f(1,function(A5){
 var B5=$t(function(){
  $M(A5,function(C5){
   switch(C5.toString()){
   case "'":
    $A($$GHCziShow_shows19);break;
   default:
    var D5=$t(function(){
     $$GHCziShow_zdwshowLitChar.J(C5,$$DataziChar$f);
    },[C5],"sat");
    $R(2,[$$GHCziShow_shows20,D5],":");
   }
  },[]);
 },[A5],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Char.digitToInt: not a digit ",B5],function(E5){
  $$GHCziErr_error.J(E5);
 },[]);
},[],"in `base:Data.Char'");
var $$DataziChar_zdwdigitToInt=$f(1,function(F5){
 var G5=$f(1,function(H5){
  var I5=$f(1,function(J5){
   var K5=F5>="A"?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(K5.g){
   case 1:
    $$DataziChar_digitToInt1.J(F5);break;
   case 2:
    var L5=F5<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(L5.g){
    case 1:
     $$DataziChar_digitToInt1.J(F5);break;
    case 2:
     var N5=$hs_ordzh(F5);
     var M5=N5.subtract(goog.math.Long.fromBits(65,0));
     $r(M5.add(goog.math.Long.fromBits(10,0)));break;
    }break;
   }
  },[F5],"$w$j1");
  var O5=F5>="a"?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(O5.g){
  case 1:
   I5.J($$GHCziPrim_realWorldzh);break;
  case 2:
   var P5=F5<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(P5.g){
   case 1:
    I5.J($$GHCziPrim_realWorldzh);break;
   case 2:
    var R5=$hs_ordzh(F5);
    var Q5=R5.subtract(goog.math.Long.fromBits(97,0));
    $r(Q5.add(goog.math.Long.fromBits(10,0)));break;
   }break;
  }
 },[F5],"$w$j");
 var S5=F5>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(S5.g){
 case 1:
  G5.J($$GHCziPrim_realWorldzh);break;
 case 2:
  var T5=F5<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(T5.g){
  case 1:
   G5.J($$GHCziPrim_realWorldzh);break;
  case 2:
   var U5=$hs_ordzh(F5);
   $r(U5.subtract(goog.math.Long.fromBits(48,0)));break;
  }break;
 }
},[],"at libraries/base/Data/Char.hs:86:1");
var $$DataziChar$f=$D(2,function(){
 $r([$$GHCziShow_shows20,$$GHCziTypes_ZMZN]);
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
},[],"at libraries/base/Data/List.hs:1108:1");
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
},[],"at libraries/base/Data/List.hs:1093:1");
var $$DataziList_deleteBy=$f(3,function(mj,nj,oj){
 $M(oj,function(pj){
  switch(pj.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var qj=pj.v[0],rj=pj.v[1];
   mj.C([nj,qj],function(sj){
    switch(sj.g){
    case 1:
     var tj=$t(function(){
      $$DataziList_deleteBy.J(mj,nj,rj);
     },[nj,mj,rj],"sat");
     $R(2,[qj,tj],":");break;
    case 2:
     $A(rj);break;
    }
   },[nj,qj,mj,rj]);break;
  }
 },[nj,mj]);
},[],"at libraries/base/Data/List.hs:376:1");
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
var $$DataziTypeableziInternal_zdfTypeableZLZRzupkg=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ghc-prim");
},[],"at libraries/base/Data/Typeable/Internal.hs:179:10");
var $$DataziTypeableziInternal_zdfTypeable1IOzumodl=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Types");
},[],"at libraries/base/Data/Typeable/Internal.hs:179:14");
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
},[],"at libraries/base/Data/Typeable/Internal.hs:235:1");
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
},[],"at libraries/base/Data/Typeable/Internal.hs:222:3");
var $$DataziTypeableziInternal_zdfTypeable1IO3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("IO");
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IO2=$D(1,function(){
 $r([goog.math.Long.fromBits(1456544454,4198540223),goog.math.Long.fromBits(3588501173,645407194),$$DataziTypeableziInternal_zdfTypeableZLZRzupkg,$$DataziTypeableziInternal_zdfTypeable1IOzumodl,$$DataziTypeableziInternal_zdfTypeable1IO3]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IO1=$D(1,function(){
 $r([goog.math.Long.fromBits(1456544454,4198540223),goog.math.Long.fromBits(3588501173,645407194),$$DataziTypeableziInternal_zdfTypeable1IO2,$$GHCziTypes_ZMZN]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IOzuzdctypeOf1=$f(1,function(qh){
 $A($$DataziTypeableziInternal_zdfTypeable1IO1);
},[],"at libraries/base/Data/Typeable/Internal.hs:230:3");
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
var $$GHCziArr_zdfIxInt2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Arr'");
var $$GHCziArr_indexError=$f(4,function(L,M,N,O){
 $$GHCziArr$f.J(O,N,M,L);
},[],"at libraries/base/GHC/Arr.lhs:190:1");
var $$GHCziArr_arrEleBottom=$t(function(){
 $$GHCziErr_error.J($$GHCziArr$n);
},[],"at libraries/base/GHC/Arr.lhs:427:1");
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
 $r([$$GHCziShow_shows10,$$GHCziTypes_ZMZN]);
},"lvl3");
var $$GHCziArr$e=$F(5,function(OY,PY,QY,RY,SY){
 var TY=$t(function(){
  var UY=$t(function(){
   var VY=$t(function(){
    var WY=$t(function(){
     var XY=$t(function(){
      $$GHCziShow_zdwzdcshowsPrec1.J(SY,SY,QY,RY,$$GHCziArr$d);
     },[SY,QY,RY],"sat");
     var YY=$d(2,[$$GHCziShow_shows11,XY],"sat");
     $$GHCziBase_zpzp.J($$GHCziArr$a,YY);
    },[SY,QY,RY],"sat");
    var ZY=$d(2,[$$GHCziShow_shows10,WY],"sat");
    $$GHCziShow_showsPrec.J(SY,$$GHCziArr_zdfIxInt2,PY,ZY);
   },[SY,PY,QY,RY],"sat");
   var aZ=$d(2,[$$GHCziShow_shows11,VY],"sat");
   $$GHCziBase_zpzp.J($$GHCziArr$b,aZ);
  },[SY,PY,QY,RY],"sat");
  $$GHCziBase_zpzp.J(OY,UY);
 },[OY,SY,PY,QY,RY],"sat");
 $$GHCziBase_zpzp.C([$$GHCziArr$c,TY],function(bZ){
  $$GHCziErr_error.J(bZ);
 },[]);
},"lvl4");
var $$GHCziArr$f=$F(4,function(cZ,dZ,eZ,fZ){
 $M(eZ,function(gZ){
  var hZ=gZ.v[0],iZ=gZ.v[1];
  $$GHCziArr$e.J(cZ,dZ,hZ,iZ,fZ);
 },[cZ,dZ,fZ]);
},"lvl5");
var $$GHCziArr$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("(Array.!): undefined array element");
},"lvl9");
var $$GHCziBase_id=$f(1,function(I3){
 $A(I3);
},[],"at libraries/base/GHC/Base.lhs:514:1");
var $$GHCziBase_ord=$f(1,function(J3){
 $M(J3,function(K3){
  var L3=K3.v[0];
  var M3=$hs_ordzh(L3);
  $R(1,[M3],"I#");
 },[]);
},[],"at libraries/base/GHC/Base.lhs:465:1");
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
 $$ControlziExceptionziBase_bracket2.J(e,c,d);
},[],"in `base:GHC.Conc.Signal'");
var $$GHCziConcziSignal_setHandler1=$f(3,function(h,i,j){
 var k=$hs_getMaskingStatezh(j);
 var l=k[0],m=k[1];
 var n=$t(function(){
  $M(h,function(o){
   var p=o.v[0];
   $R(1,[p],"I#");
  },[]);
 },[h],"int");
 var q=$f(2,function(r,s){
  $M(r,function(t){
   var u=t.v[0],v=t.v[1],w=t.v[3];
   $M(u,function(x){
    var y=x.v[0];
    $M(v,function(z){
     var A=z.v[0];
     $M(n,function(B){
      var C=B.v[0];
      var D=y.lessThanOrEqual(C)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(D.g){
      case 1:
       $A($$GHCziConcziSignal_setHandler3);break;
      case 2:
       var E=C.lessThanOrEqual(A)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(E.g){
       case 1:
	$A($$GHCziConcziSignal_setHandler3);break;
       case 2:
	var F=$hs_readArrayzh(w,C,s);
	var G=F[0],H=F[1];
	var I=$hs_writeArrayzh(w,C,i,G);
	$r([I,H]);break;
       }break;
      }
     },[y,A,w,s,i]);
    },[n,y,w,s,i]);
   },[n,v,w,s,i]);
  },[n,s,i]);
 },[n,i],"a");
 $M(m,function(J){
  switch(J.toString()){
  case "0":
   var X=$f(1,function(Y){
    $M($$GHCziConcziSignal_signalzuhandlers,function(Z){
     var a1=Z.v[0];
     $b($hs_takeMVarzh,[a1,Y],function(b1){
      var c1=b1[0],d1=b1[1];
      var e1=$f(2,function(Q,R){
       $$GHCziConcziSignal_setHandler2.J(d1,a1,Q,R);
      },[a1,d1],"sat");
      var f1=$f(1,function(R){
       q.J(d1,R);
      },[q,d1],"sat");
      var g1=$f(1,function(R){
       $k($hs_unmaskAsyncExceptionszh,[f1,R]);
      },[f1],"sat");
      $b($hs_catchzh,[g1,e1,c1],function(h1){
       var i1=h1[0],j1=h1[1];
       $b($hs_putMVarzh,[a1,d1,i1],function(k1){
	$r([k1,j1]);
       },[j1]);
      },[a1,d1]);
     },[q,a1]);
    },[q,Y]);
   },[q],"sat");
   $k($hs_maskAsyncExceptionszh,[X,l]);break;
  default:
   $M($$GHCziConcziSignal_signalzuhandlers,function(K){
    var L=K.v[0];
    $b($hs_takeMVarzh,[L,l],function(M){
     var N=M[0],O=M[1];
     var P=$f(2,function(Q,R){
      $$GHCziConcziSignal_setHandler2.J(O,L,Q,R);
     },[L,O],"sat");
     var S=$f(1,function(R){
      q.J(O,R);
     },[q,O],"sat");
     $b($hs_catchzh,[S,P,N],function(T){
      var U=T[0],V=T[1];
      $b($hs_putMVarzh,[L,O,U],function(W){
       $r([W,V]);
      },[V]);
     },[L,O]);
    },[q,L]);
   },[q,l]);
  }
 },[q,l]);
},[],"in `base:GHC.Conc.Signal'");
var $$GHCziConcziSignal$a=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl");
var $$GHCziConcziSignal$b=$D(1,function(){
 $r([goog.math.Long.fromBits(64,0)]);
},"lvl1");
var $$GHCziConcziSignal$c=$F(1,function(I2){
 var h3=$hs_noDuplicatezh(I2);
 var J2=$hs_newArrayzh(goog.math.Long.fromBits(65,0),$$DataziMaybe_Nothing,h3);
 var K2=J2[0],L2=J2[1];
 var M2=$hs_newMVarzh(K2);
 var N2=M2[0],O2=M2[1];
 var P2=$d(1,[$$GHCziConcziSignal$a,$$GHCziConcziSignal$b,goog.math.Long.fromBits(65,0),L2],"sat");
 $b($hs_putMVarzh,[O2,P2,N2],function(g3){
  var Q2=$hs_getMaskingStatezh(g3);
  var R2=Q2[0],S2=Q2[1];
  var T2=$f(1,function(U2){
   var V2=$d(1,[O2],"m");
   var W2=[U2,V2];
   var X2=W2[0],Y2=W2[1];
   var $ff=getOrSetGHCConcSignalSignalHandlerStore(Y2);
   var Z2=[X2,$ff];
   var a3=Z2[0],b3=Z2[1];
   var c3=$hs_eqAddrzh(Y2,b3);
   switch(c3.g){
   case 1:
    var $ff=hs_free_stable_ptr(Y2);
    var d3=[a3,$ff];
    var e3=d3[0];
    $r([e3,b3]);break;
   case 2:
    $r([a3,V2]);break;
   }
  },[O2],"a");
  $M(S2,function(f3){
   switch(f3.toString()){
   case "0":
    $k($hs_maskAsyncExceptionszh,[T2,R2]);break;
   default:
    T2.J(R2);
   }
  },[T2,R2]);
 },[O2]);
},"lvl2");
var $$GHCziConcziSignal$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Conc.setHandler: signal out of range");
},"lvl3");
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
var $$GHCziErr_divZZeroError=$t(function(){
 $$GHCziException_throw2.J($$GHCziException_DivideByZZero,$$GHCziException_zdfExceptionArithExceptionzuzdctoException);
},[],"at libraries/base/GHC/Err.lhs:84:1");
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
var $$GHCziException_zdfShowArithException13=$t(function(){
 $$GHCziCString_unpackCStringzh.J("arithmetic overflow");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException12=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException13,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException11=$t(function(){
 $$GHCziCString_unpackCStringzh.J("arithmetic underflow");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException10=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException11,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException9=$t(function(){
 $$GHCziCString_unpackCStringzh.J("loss of precision");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException8=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException9,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException7=$t(function(){
 $$GHCziCString_unpackCStringzh.J("divide by zero");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException6=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException7,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("denormal");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException4=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException5,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Ratio has zero denominator");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException2=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException3,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshowsPrec=$f(2,function(l1,m1){
 $M(m1,function(n1){
  switch(n1.g){
  case 1:
   $A($$GHCziException_zdfShowArithException12);break;
  case 2:
   $A($$GHCziException_zdfShowArithException10);break;
  case 3:
   $A($$GHCziException_zdfShowArithException8);break;
  case 4:
   $A($$GHCziException_zdfShowArithException6);break;
  case 5:
   $A($$GHCziException_zdfShowArithException4);break;
  case 6:
   $A($$GHCziException_zdfShowArithException2);break;
  }
 },[]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException1=$f(1,function(o1){
 $M(o1,function(p1){
  switch(p1.g){
  case 1:
   $A($$GHCziException_zdfShowArithException12);break;
  case 2:
   $A($$GHCziException_zdfShowArithException10);break;
  case 3:
   $A($$GHCziException_zdfShowArithException8);break;
  case 4:
   $A($$GHCziException_zdfShowArithException6);break;
  case 5:
   $A($$GHCziException_zdfShowArithException4);break;
  case 6:
   $A($$GHCziException_zdfShowArithException2);break;
  }
 },[]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshowList=$f(2,function(q1,r1){
 $$GHCziShow_showListzuzu.J($$GHCziException_zdfShowArithException1,q1,r1);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshow=$f(1,function(s1){
 $M(s1,function(t1){
  switch(t1.g){
  case 1:
   $A($$GHCziException_zdfShowArithException13);break;
  case 2:
   $A($$GHCziException_zdfShowArithException11);break;
  case 3:
   $A($$GHCziException_zdfShowArithException9);break;
  case 4:
   $A($$GHCziException_zdfShowArithException7);break;
  case 5:
   $A($$GHCziException_zdfShowArithException5);break;
  case 6:
   $A($$GHCziException_zdfShowArithException3);break;
  }
 },[]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException=$D(1,function(){
 $r([$$GHCziException_zdfShowArithExceptionzuzdcshowsPrec,$$GHCziException_zdfShowArithExceptionzuzdcshow,$$GHCziException_zdfShowArithExceptionzuzdcshowList]);
},"at libraries/base/GHC/Exception.lhs:190:10");
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
var $$GHCziException_zdfExceptionArithExceptionzuzdctypeOf=$f(1,function(V2){
 $A($$GHCziException_zdfExceptionArithException1);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithExceptionzuzdcfromException=$f(1,function(W2){
 $M(W2,function(X2){
  var Y2=X2.v[0],Z2=X2.v[1];
  var a3=$t(function(){
   $$GHCziException_zdp1Exception.J(Y2);
  },[Y2],"sat");
  $$DataziTypeable_cast.J(a3,$$GHCziException_zdfExceptionArithExceptionzuzdctypeOf,Z2);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:142:5");
var $$GHCziException_zdfExceptionArithException=$D(1,function(){
 $r([$$GHCziException_zdfExceptionArithExceptionzuzdctypeOf,$$GHCziException_zdfShowArithException,$$GHCziException_zdfExceptionArithExceptionzuzdctoException,$$GHCziException_zdfExceptionArithExceptionzuzdcfromException]);
},"at libraries/base/GHC/Exception.lhs:188:10");
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
},"at libraries/base/GHC/Float.lhs:884:1");
var $$GHCziFloat_maxExpt=$D(1,function(){
 $r([goog.math.Long.fromBits(1100,0)]);
},"at libraries/base/GHC/Float.lhs:868:1");
var $$GHCziFloat_minExpt=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/Float.lhs:867:1");
var $$GHCziFloat_zdfRealFracFloat2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Float'");
var $$GHCziFloat_zdwroundTo=$f(3,function(H8,I8,J8){
 var K8=$t(function(){
  $M(H8,function(L8){
   var M8=L8.v[0];
   var N8=$hs_quotIntzh(M8,goog.math.Long.fromBits(2,0));
   $R(1,[N8],"I#");
  },[]);
 },[H8],"b2");
 var O8=$f(3,function(P8,Q8,R8){
  $M(Q8,function(S8){
   switch(S8.g){
   case 1:
    var T8=$t(function(){
     var U8=R8.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(U8.g){
     case 1:
      $$GHCziFloat$f.J(R8);break;
     case 2:
      $R(1,[],"[]");break;
     }
    },[R8],"sat");
    $r([$$GHCziFloat_minExpt,T8]);break;
   case 2:
    var V8=S8.v[0],W8=S8.v[1];
    $M(R8,function(X8){
     switch(X8.toString()){
     case "0":
      $M(V8,function(r9){
       var s9=r9.v[0];
       $M(K8,function(t9){
	var u9=t9.v[0];
	var v9=s9.equals(u9)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(v9.g){
	case 1:
	 var w9=$t(function(){
	  var x9=s9.greaterThanOrEqual(u9)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(x9.g){
	  case 1:
	   $A($$GHCziFloat_minExpt);break;
	  case 2:
	   $A($$GHCziFloat_zdfRealFracFloat2);break;
	  }
	 },[s9,u9],"sat");
	 $r([w9,$$GHCziTypes_ZMZN]);break;
	case 2:
	 $M(P8,function(y9){
	  switch(y9.g){
	  case 1:
	   var z9=$t(function(){
	    var A9=s9.greaterThanOrEqual(u9)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(A9.g){
	    case 1:
	     $A($$GHCziFloat_minExpt);break;
	    case 2:
	     $A($$GHCziFloat_zdfRealFracFloat2);break;
	    }
	   },[s9,u9],"sat");
	   $r([z9,$$GHCziTypes_ZMZN]);break;
	  case 2:
	   $$GHCziList_all.C([$$GHCziFloat$b,W8],function(B9){
	    switch(B9.g){
	    case 1:
	     var C9=$t(function(){
	      var D9=s9.greaterThanOrEqual(u9)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(D9.g){
	      case 1:
	       $A($$GHCziFloat_minExpt);break;
	      case 2:
	       $A($$GHCziFloat_zdfRealFracFloat2);break;
	      }
	     },[s9,u9],"sat");
	     $r([C9,$$GHCziTypes_ZMZN]);break;
	    case 2:
	     $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);break;
	    }
	   },[s9,u9]);break;
	  }
	 },[W8,s9,u9]);break;
	}
       },[W8,s9,P8]);
      },[K8,W8,P8]);break;
     default:
      var q9=X8.subtract(goog.math.Long.fromBits(1,0));
      var Y8=$t(function(){
       $M(V8,function(Z8){
	var a9=Z8.v[0];
	var b9=$hs_remIntzh(a9,goog.math.Long.fromBits(2,0));
	switch(b9.toString()){
	case "0":
	 $R(2,[],"True");break;
	default:
	 $R(1,[],"False");
	}
       },[]);
      },[V8],"sat");
      O8.C([Y8,W8,q9],function(c9){
       var d9=c9[0],e9=c9[1];
       $M(d9,function(f9){
	var g9=f9.v[0];
	$M(V8,function(h9){
	 var i9=h9.v[0];
	 $M(H8,function(j9){
	  var k9=j9.v[0];
	  var n9=g9.add(i9);
	  var l9=n9.equals(k9)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(l9.g){
	  case 1:
	   var m9=$d(1,[n9],"sat");
	   var o9=$d(2,[m9,e9],"sat");
	   $r([$$GHCziFloat_minExpt,o9]);break;
	  case 2:
	   var p9=$d(2,[$$GHCziFloat_minExpt,e9],"sat");
	   $r([$$GHCziFloat_zdfRealFracFloat2,p9]);break;
	  }
	 },[g9,i9,e9]);
	},[H8,g9,e9]);
       },[H8,V8,e9]);
      },[H8,V8]);
     }
    },[H8,K8,V8,O8,W8,P8]);break;
   }
  },[H8,K8,R8,O8,P8]);
 },[H8,K8],"$s$wf3");
 $M(J8,function(E9){
  switch(E9.g){
  case 1:
   var F9=$t(function(){
    $M(I8,function(G9){
     var H9=G9.v[0];
     var I9=H9.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(I9.g){
     case 1:
      $$GHCziFloat$f.J(H9);break;
     case 2:
      $R(1,[],"[]");break;
     }
    },[]);
   },[I8],"sat");
   $r([$$GHCziFloat_minExpt,F9]);break;
  case 2:
   var J9=E9.v[0],K9=E9.v[1];
   $M(I8,function(L9){
    var M9=L9.v[0];
    $M(M9,function(N9){
     switch(N9.toString()){
     case "0":
      $M(J9,function(ia){
       var ja=ia.v[0];
       $M(K8,function(ka){
	var la=ka.v[0];
	var ma=ja.equals(la)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(ma.g){
	case 1:
	 var na=ja.greaterThanOrEqual(la)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(na.g){
	 case 1:
	  $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);break;
	 case 2:
	  var oa=$d(2,[$$GHCziFloat_zdfRealFracFloat2,$$GHCziTypes_ZMZN],"sat");
	  $r([$$GHCziFloat_zdfRealFracFloat2,oa]);break;
	 }break;
	case 2:
	 $$GHCziList_all.C([$$GHCziFloat$b,K9],function(pa){
	  switch(pa.g){
	  case 1:
	   var qa=ja.greaterThanOrEqual(la)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(qa.g){
	   case 1:
	    $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);break;
	   case 2:
	    var ra=$d(2,[$$GHCziFloat_zdfRealFracFloat2,$$GHCziTypes_ZMZN],"sat");
	    $r([$$GHCziFloat_zdfRealFracFloat2,ra]);break;
	   }break;
	  case 2:
	   $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);break;
	  }
	 },[ja,la]);break;
	}
       },[K9,ja]);
      },[K8,K9]);break;
     default:
      var ha=N9.subtract(goog.math.Long.fromBits(1,0));
      var O9=$t(function(){
       $M(J9,function(P9){
	var Q9=P9.v[0];
	var R9=$hs_remIntzh(Q9,goog.math.Long.fromBits(2,0));
	switch(R9.toString()){
	case "0":
	 $R(2,[],"True");break;
	default:
	 $R(1,[],"False");
	}
       },[]);
      },[J9],"sat");
      O8.C([O9,K9,ha],function(S9){
       var T9=S9[0],U9=S9[1];
       $M(T9,function(V9){
	var W9=V9.v[0];
	$M(J9,function(X9){
	 var Y9=X9.v[0];
	 $M(H8,function(Z9){
	  var aa=Z9.v[0];
	  var da=W9.add(Y9);
	  var ba=da.equals(aa)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(ba.g){
	  case 1:
	   var ca=$d(1,[da],"sat");
	   var ea=$d(2,[ca,U9],"sat");
	   $r([$$GHCziFloat_minExpt,ea]);break;
	  case 2:
	   var fa=$d(2,[$$GHCziFloat_minExpt,U9],"sat");
	   var ga=$d(2,[$$GHCziFloat_zdfRealFracFloat2,fa],"sat");
	   $r([$$GHCziFloat_zdfRealFracFloat2,ga]);break;
	  }
	 },[W9,Y9,U9]);
	},[H8,W9,U9]);
       },[H8,J9,U9]);
      },[H8,J9]);
     }
    },[H8,K8,O8,J9,K9]);
   },[H8,K8,O8,J9,K9]);break;
  }
 },[H8,K8,O8,I8]);
},[],"at libraries/base/GHC/Float.lhs:638:1");
var $$GHCziFloat_expts2=$f(1,function(Le){
 $$GHCziFloat$i.J(Le);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expts1=$f(1,function(Me){
 var Ne=$hs_newArrayzh(goog.math.Long.fromBits(1101,0),$$GHCziArr_arrEleBottom,Me);
 var Oe=Ne[0],Pe=Ne[1];
 var Qe=$f(2,function(Re,Se){
  var Te=goog.math.Long.fromBits(0,0).lessThanOrEqual(Re)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Te.g){
  case 1:
   $$GHCziFloat_expts2.J(Re);break;
  case 2:
   var Ue=Re.lessThanOrEqual(goog.math.Long.fromBits(1100,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Ue.g){
   case 1:
    $$GHCziFloat_expts2.J(Re);break;
   case 2:
    var Ve=$t(function(){
     var We=Re.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(We.g){
     case 1:
      $M(Re,function(Xe){
       switch(Xe.toString()){
       case "0":
	$A($$GHCziReal_zdfNumRatio3);break;
       default:
	$$GHCziReal_zdwf1.J($$GHCziFloat_zdfRealFloatDouble7,Xe);
       }
      },[]);break;
     case 2:
      $A($$GHCziReal_zc3);break;
     }
    },[Re],"sat");
    var af=$hs_writeArrayzh(Pe,Re,Ve,Se);
    $M(Re,function(Ye){
     switch(Ye.toString()){
     case "1100":
      var bf=$hs_unsafeFreezzeArrayzh(Pe,af);
      var cf=bf[0],df=bf[1];
      var ef=$d(1,[$$GHCziFloat_minExpt,$$GHCziFloat_maxExpt,goog.math.Long.fromBits(1101,0),df],"sat");
      $r([cf,ef]);break;
     default:
      var Ze=Ye.add(goog.math.Long.fromBits(1,0));
      Qe.J(Ze,af);
     }
    },[Pe,Qe,af]);break;
   }break;
  }
 },[Pe],"go3");
 Qe.J(goog.math.Long.fromBits(0,0),Oe);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expts=$t(function(){
 $$GHCziST_runSTRep.J($$GHCziFloat_expts1);
},[],"at libraries/base/GHC/Float.lhs:881:1");
var $$GHCziFloat_expts4=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"in `base:GHC.Float'");
var $$GHCziFloat_expts5=$f(1,function(ff){
 $$GHCziFloat$k.J(ff);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expts3=$f(1,function(gf){
 var hf=$hs_newArrayzh(goog.math.Long.fromBits(325,0),$$GHCziArr_arrEleBottom,gf);
 var jf=hf[0],kf=hf[1];
 var lf=$f(2,function(mf,nf){
  var of=goog.math.Long.fromBits(0,0).lessThanOrEqual(mf)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(of.g){
  case 1:
   $$GHCziFloat_expts5.J(mf);break;
  case 2:
   var pf=mf.lessThanOrEqual(goog.math.Long.fromBits(324,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(pf.g){
   case 1:
    $$GHCziFloat_expts5.J(mf);break;
   case 2:
    var qf=$t(function(){
     var rf=mf.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(rf.g){
     case 1:
      $M(mf,function(sf){
       switch(sf.toString()){
       case "0":
	$A($$GHCziReal_zdfNumRatio3);break;
       default:
	$$GHCziReal_zdwf1.J($$GHCziFloat_expts4,sf);
       }
      },[]);break;
     case 2:
      $A($$GHCziReal_zc3);break;
     }
    },[mf],"sat");
    var vf=$hs_writeArrayzh(kf,mf,qf,nf);
    $M(mf,function(tf){
     switch(tf.toString()){
     case "324":
      var wf=$hs_unsafeFreezzeArrayzh(kf,vf);
      var xf=wf[0],yf=wf[1];
      var zf=$d(1,[$$GHCziFloat_minExpt,$$GHCziFloat_maxExpt10,goog.math.Long.fromBits(325,0),yf],"sat");
      $r([xf,zf]);break;
     default:
      var uf=tf.add(goog.math.Long.fromBits(1,0));
      lf.J(uf,vf);
     }
    },[kf,lf,vf]);break;
   }break;
  }
 },[kf],"go3");
 lf.J(goog.math.Long.fromBits(0,0),jf);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expts10=$t(function(){
 $$GHCziST_runSTRep.J($$GHCziFloat_expts3);
},[],"at libraries/base/GHC/Float.lhs:887:1");
var $$GHCziFloat_expt2=$f(3,function(qx,rx,sx){
 $$GHCziFloat$n.J(qx,rx,sx);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_expt1=$f(3,function(tx,ux,vx){
 $$GHCziFloat$o.J(tx,ux,vx);
},[],"in `base:GHC.Float'");
var $$GHCziFloat_zdwexpt=$f(2,function(wx,xx){
 var yx=$d(1,[xx],"n");
 var zx=$t(function(){
  $$GHCziIntegerziType_eqInteger.C([wx,$$GHCziFloat_expts4],function(Ax){
   switch(Ax.g){
   case 1:
    var Bx=xx.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Bx.g){
    case 1:
     $M(xx,function(Cx){
      switch(Cx.toString()){
      case "0":
       $A($$GHCziReal_zdfNumRatio3);break;
      default:
       $$GHCziReal_zdwf1.J(wx,Cx);
      }
     },[wx]);break;
    case 2:
     $A($$GHCziReal_zc3);break;
    }break;
   case 2:
    var Dx=xx.lessThanOrEqual(goog.math.Long.fromBits(324,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Dx.g){
    case 1:
     var Ex=xx.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Ex.g){
     case 1:
      $M(xx,function(Fx){
       switch(Fx.toString()){
       case "0":
	$A($$GHCziReal_zdfNumRatio3);break;
       default:
	$$GHCziReal_zdwf1.J(wx,Fx);
       }
      },[wx]);break;
     case 2:
      $A($$GHCziReal_zc3);break;
     }break;
    case 2:
     $M($$GHCziFloat_expts10,function(Gx){
      var Hx=Gx.v[0],Ix=Gx.v[1],Jx=Gx.v[3];
      $M(Hx,function(Kx){
       var Lx=Kx.v[0];
       $M(Ix,function(Mx){
	var Nx=Mx.v[0];
	var Ox=Lx.lessThanOrEqual(xx)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Ox.g){
	case 1:
	 $$GHCziFloat_expt2.J(yx,Kx,Mx);break;
	case 2:
	 var Px=xx.lessThanOrEqual(Nx)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Px.g){
	 case 1:
	  $$GHCziFloat_expt2.J(yx,Kx,Mx);break;
	 case 2:
	  var Sx=xx.subtract(Lx);
	  var Qx=$hs_indexArrayzh(Jx,Sx);
	  var Rx=Qx[0];
	  $A(Rx);break;
	 }break;
	}
       },[xx,yx,Lx,Kx,Jx]);
      },[xx,yx,Ix,Jx]);
     },[xx,yx]);break;
    }break;
   }
  },[xx,yx,wx]);
 },[xx,yx,wx],"$w$j2");
 $$GHCziIntegerziType_eqInteger.C([wx,$$GHCziFloat_zdfRealFloatDouble7],function(Tx){
  switch(Tx.g){
  case 1:
   $A(zx);break;
  case 2:
   var Ux=xx.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Ux.g){
   case 1:
    $A(zx);break;
   case 2:
    var Vx=xx.lessThanOrEqual(goog.math.Long.fromBits(1100,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Vx.g){
    case 1:
     $A(zx);break;
    case 2:
     $M($$GHCziFloat_expts,function(Wx){
      var Xx=Wx.v[0],Yx=Wx.v[1],Zx=Wx.v[3];
      $M(Xx,function(ay){
       var by=ay.v[0];
       $M(Yx,function(cy){
	var dy=cy.v[0];
	var ey=by.lessThanOrEqual(xx)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(ey.g){
	case 1:
	 $$GHCziFloat_expt1.J(yx,ay,cy);break;
	case 2:
	 var fy=xx.lessThanOrEqual(dy)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(fy.g){
	 case 1:
	  $$GHCziFloat_expt1.J(yx,ay,cy);break;
	 case 2:
	  var iy=xx.subtract(by);
	  var gy=$hs_indexArrayzh(Zx,iy);
	  var hy=gy[0];
	  $A(hy);break;
	 }break;
	}
       },[xx,yx,by,ay,Zx]);
      },[xx,yx,Yx,Zx]);
     },[xx,yx]);break;
    }break;
   }break;
  }
 },[xx,yx,wx,zx]);
},[],"at libraries/base/GHC/Float.lhs:871:1");
var $$GHCziFloat_zdfShowDouble4=$D(1,function(){
 $r(["-"]);
},"in `base:GHC.Float'");
var $$GHCziFloat_zdwzdsfloatToDigits1=$f(2,function(JE,KE){
 var LE=KE==0.0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(LE.g){
 case 1:
  var ME=$t(function(){
   $$GHCziIntegerziType_decodeDoubleInteger.C([KE],function(NE){
    var OE=NE[0],PE=NE[1];
    var QE=$d(1,[PE],"sat");
    $R(1,[OE,QE],"(,)");
   },[]);
  },[KE],"ds");
  var RE=$t(function(){
   $M(ME,function(SE){
    var TE=SE.v[1];
    $A(TE);
   },[]);
  },[ME],"e0");
  var UE=$t(function(){
   $M(RE,function(VE){
    var WE=VE.v[0];
    var eF=goog.math.Long.fromBits(4294966222,4294967295).subtract(WE);
    var XE=eF.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(XE.g){
    case 1:
     var YE=$t(function(){
      $M(ME,function(ZE){
       var aF=ZE.v[0];
       $A(aF);
      },[]);
     },[ME],"sat");
     $R(1,[YE,VE],"(,)");break;
    case 2:
     var cF=WE.add(eF);
     var bF=$d(1,[cF],"sat");
     var dF=$t(function(){
      $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,eF],function(fF){
       $$GHCziIntegerziType_eqInteger.C([fF,$$GHCziReal_even1],function(gF){
	switch(gF.g){
	case 1:
	 $M(ME,function(hF){
	  var iF=hF.v[0];
	  $$GHCziIntegerziType_quotInteger.J(iF,fF);
	 },[fF]);break;
	case 2:
	 $A($$GHCziErr_divZZeroError);break;
	}
       },[ME,fF]);
      },[ME]);
     },[ME,eF],"sat");
     $R(1,[dF,bF],"(,)");break;
    }
   },[ME]);
  },[ME,RE],"ds1");
  var jF=$t(function(){
   $M(UE,function(kF){
    var lF=kF.v[1];
    $A(lF);
   },[]);
  },[UE],"e");
  var mF=$t(function(){
   $M(UE,function(nF){
    var oF=nF.v[0];
    $A(oF);
   },[]);
  },[UE],"f");
  var pF=$t(function(){
   $M(jF,function(qF){
    var rF=qF.v[0];
    var sF=rF.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(sF.g){
    case 1:
     var tF=rF.greaterThan(goog.math.Long.fromBits(4294966222,4294967295))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(tF.g){
     case 1:
      var uF=$t(function(){
       var wF=rF.negate();
       $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,wF],function(vF){
	$$GHCziIntegerziType_timesInteger.J(vF,$$GHCziFloat_zdfRealFloatDouble7);
       },[]);
      },[rF],"sat");
      var xF=$t(function(){
       $$GHCziIntegerziType_timesInteger.J(mF,$$GHCziFloat_zdfRealFloatDouble7);
      },[mF],"sat");
      $R(1,[xF,uF,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
     case 2:
      $$GHCziIntegerziType_eqInteger.C([mF,$$GHCziFloat$q],function(yF){
       switch(yF.g){
       case 1:
	var zF=$t(function(){
	 var BF=rF.negate();
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,BF],function(AF){
	  $$GHCziIntegerziType_timesInteger.J(AF,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[rF],"sat");
	var CF=$t(function(){
	 $$GHCziIntegerziType_timesInteger.J(mF,$$GHCziFloat_zdfRealFloatDouble7);
	},[mF],"sat");
	$R(1,[CF,zF,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       case 2:
	var DF=$t(function(){
	 var GF=rF.negate();
	 var FF=GF.add(goog.math.Long.fromBits(1,0));
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,FF],function(EF){
	  $$GHCziIntegerziType_timesInteger.J(EF,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[rF],"sat");
	var HF=$t(function(){
	 $$GHCziIntegerziType_timesInteger.C([mF,$$GHCziFloat_zdfRealFloatDouble7],function(IF){
	  $$GHCziIntegerziType_timesInteger.J(IF,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[mF],"sat");
	$R(1,[HF,DF,$$GHCziFloat_zdfRealFloatDouble7,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       }
      },[mF,rF]);break;
     }break;
    case 2:
     var JF=$t(function(){
      $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble7,rF);
     },[rF],"be");
     $$GHCziIntegerziType_eqInteger.C([mF,$$GHCziFloat$q],function(KF){
      switch(KF.g){
      case 1:
       var LF=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([mF,JF],function(MF){
	 $$GHCziIntegerziType_timesInteger.J(MF,$$GHCziFloat_zdfRealFloatDouble7);
	},[]);
       },[mF,JF],"sat");
       $R(1,[LF,$$GHCziFloat_zdfRealFloatDouble7,JF,JF],"(,,,)");break;
      case 2:
       var NF=$t(function(){
	$$GHCziIntegerziType_timesInteger.J(JF,$$GHCziFloat_zdfRealFloatDouble7);
       },[JF],"sat");
       var OF=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([mF,JF],function(PF){
	 $$GHCziIntegerziType_timesInteger.C([PF,$$GHCziFloat_zdfRealFloatDouble7],function(QF){
	  $$GHCziIntegerziType_timesInteger.J(QF,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[]);
       },[mF,JF],"sat");
       $R(1,[OF,$$GHCziFloat$r,NF,JF],"(,,,)");break;
      }
     },[mF,JF]);break;
    }
   },[mF]);
  },[jF,mF],"ds2");
  var RF=$t(function(){
   $M(pF,function(SF){
    var TF=SF.v[1];
    $A(TF);
   },[]);
  },[pF],"s");
  var UF=$t(function(){
   $M(pF,function(VF){
    var WF=VF.v[2];
    $A(WF);
   },[]);
  },[pF],"mUp");
  var XF=$t(function(){
   $M(pF,function(YF){
    var ZF=YF.v[0];
    $A(ZF);
   },[]);
  },[pF],"r");
  var aG=$t(function(){
   var bG=$t(function(){
    $$GHCziIntegerziType_plusInteger.J(XF,UF);
   },[UF,XF],"lvl34");
   var cG=$f(1,function(dG){
    var eG=dG.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(eG.g){
    case 1:
     var jG=dG.negate();
     $$GHCziFloat_zdwexpt.C([JE,jG],function(fG){
      $$GHCziIntegerziType_timesInteger.C([fG,bG],function(gG){
       $$GHCziIntegerziType_leInteger.C([gG,RF],function(hG){
	switch(hG.g){
	case 1:
	 var iG=dG.add(goog.math.Long.fromBits(1,0));
	 cG.J(iG);break;
	case 2:
	 $A(dG);break;
	}
       },[dG,cG]);
      },[RF,dG,cG]);
     },[RF,bG,dG,cG]);break;
    case 2:
     $$GHCziFloat_zdwexpt.C([JE,dG],function(kG){
      $$GHCziIntegerziType_timesInteger.C([kG,RF],function(lG){
       $$GHCziIntegerziType_leInteger.C([bG,lG],function(mG){
	switch(mG.g){
	case 1:
	 var nG=dG.add(goog.math.Long.fromBits(1,0));
	 cG.J(nG);break;
	case 2:
	 $A(dG);break;
	}
       },[dG,cG]);
      },[bG,dG,cG]);
     },[RF,bG,dG,cG]);break;
    }
   },[RF,bG,JE],"$wfixup");
   $$GHCziIntegerziType_eqInteger.C([JE,$$GHCziFloat_expts4],function(oG){
    switch(oG.g){
    case 1:
     $$GHCziIntegerziType_plusInteger.C([mF,$$GHCziFloat_zdfRealDouble1],function(pG){
      $$GHCziIntegerziType_floatFromInteger.C([pG],function(FG){
       $M(jF,function(qG){
	var rG=qG.v[0];
	$$GHCziIntegerziType_floatFromInteger.C([JE],function(GG){
	 var AG=$hs_logFloatzh(GG);
	 var BG=$hs_logFloatzh(FG);
	 var EG=$hs_logFloatzh(2.0);
	 var DG=$hs_int2Floatzh(rG);
	 var CG=DG*EG;
	 var zG=BG+CG;
	 var yG=zG/AG;
	 var uG=$hs_float2Intzh(yG);
	 var xG=$hs_int2Floatzh(uG);
	 var sG=xG<yG?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(sG.g){
	 case 1:
	  cG.C([uG],function(tG){
	   $R(1,[tG],"I#");
	  },[]);break;
	 case 2:
	  var wG=uG.add(goog.math.Long.fromBits(1,0));
	  cG.C([wG],function(vG){
	   $R(1,[vG],"I#");
	  },[]);break;
	 }
	},[cG,FG,rG]);
       },[JE,cG,FG]);
      },[jF,JE,cG]);
     },[jF,JE,cG]);break;
    case 2:
     $M(RE,function(HG){
      var IG=HG.v[0];
      var NG=goog.math.Long.fromBits(52,0).add(IG);
      var JG=NG.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(JG.g){
      case 1:
       var MG=NG.multiply(goog.math.Long.fromBits(8651,0));
       var LG=$hs_quotIntzh(MG,goog.math.Long.fromBits(28738,0));
       cG.C([LG],function(KG){
	$R(1,[KG],"I#");
       },[]);break;
      case 2:
       var RG=NG.multiply(goog.math.Long.fromBits(8651,0));
       var QG=$hs_quotIntzh(RG,goog.math.Long.fromBits(28738,0));
       var PG=QG.add(goog.math.Long.fromBits(1,0));
       cG.C([PG],function(OG){
	$R(1,[OG],"I#");
       },[]);break;
      }
     },[cG]);break;
    }
   },[RE,jF,mF,JE,cG]);
  },[RE,jF,mF,RF,UF,XF,JE],"k");
  var SG=$t(function(){
   $M(aG,function(TG){
    var UG=TG.v[0];
    var VG=$f(5,function(WG,XG,YG,ZG,aH){
     $$GHCziIntegerziType_eqInteger.C([YG,$$GHCziReal_even1],function(bH){
      switch(bH.g){
      case 1:
       $$GHCziIntegerziType_timesInteger.C([XG,JE],function(cH){
	$$GHCziIntegerziType_quotRemInteger.C([cH,YG],function(dH){
	 var eH=dH[0],fH=dH[1];
	 $$GHCziIntegerziType_timesInteger.C([aH,JE],function(gH){
	  $$GHCziIntegerziType_timesInteger.C([ZG,JE],function(hH){
	   $$GHCziIntegerziType_ltInteger.C([fH,gH],function(iH){
	    switch(iH.g){
	    case 1:
	     $$GHCziIntegerziType_plusInteger.C([fH,hH],function(jH){
	      $$GHCziIntegerziType_gtInteger.C([jH,YG],function(kH){
	       switch(kH.g){
	       case 1:
		var lH=$d(2,[eH,WG],"sat");
		VG.J(lH,fH,YG,hH,gH);break;
	       case 2:
		var mH=$t(function(){
		 $$GHCziIntegerziType_plusInteger.J(eH,$$GHCziFloat_zdfRealDouble1);
		},[eH],"sat");
		$R(2,[mH,WG],":");break;
	       }
	      },[YG,gH,hH,fH,eH,WG,VG]);
	     },[YG,gH,hH,fH,eH,WG,VG]);break;
	    case 2:
	     $$GHCziIntegerziType_plusInteger.C([fH,hH],function(nH){
	      $$GHCziIntegerziType_gtInteger.C([nH,YG],function(oH){
	       switch(oH.g){
	       case 1:
		$R(2,[eH,WG],":");break;
	       case 2:
		$$GHCziIntegerziType_timesInteger.C([fH,$$GHCziFloat_zdfRealFloatDouble7],function(pH){
		 $$GHCziIntegerziType_ltInteger.C([pH,YG],function(qH){
		  switch(qH.g){
		  case 1:
		   var rH=$t(function(){
		    $$GHCziIntegerziType_plusInteger.J(eH,$$GHCziFloat_zdfRealDouble1);
		   },[eH],"sat");
		   $R(2,[rH,WG],":");break;
		  case 2:
		   $R(2,[eH,WG],":");break;
		  }
		 },[eH,WG]);
		},[YG,eH,WG]);break;
	       }
	      },[YG,fH,eH,WG]);
	     },[YG,fH,eH,WG]);break;
	    }
	   },[YG,gH,hH,fH,eH,WG,VG]);
	  },[YG,gH,fH,eH,WG,VG]);
	 },[JE,YG,ZG,fH,eH,WG,VG]);
	},[JE,YG,aH,ZG,WG,VG]);
       },[JE,YG,aH,ZG,WG,VG]);break;
      case 2:
       $A($$GHCziErr_divZZeroError);break;
      }
     },[JE,YG,XG,aH,ZG,WG,VG]);
    },[JE],"gen");
    var sH=UG.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(sH.g){
    case 1:
     $M(pF,function(tH){
      var uH=tH.v[3];
      var BH=UG.negate();
      $$GHCziFloat_zdwexpt.C([JE,BH],function(vH){
       $$GHCziIntegerziType_timesInteger.C([uH,vH],function(wH){
	$$GHCziIntegerziType_timesInteger.C([UF,vH],function(xH){
	 $$GHCziIntegerziType_timesInteger.C([XF,vH],function(yH){
	  VG.C([$$GHCziTypes_ZMZN,yH,RF,xH,wH],function(zH){
	   $$GHCziList_reverse1.C([zH,$$GHCziTypes_ZMZN],function(AH){
	    $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,AH);
	   },[]);
	  },[]);
	 },[RF,VG,wH,xH]);
	},[RF,XF,VG,vH,wH]);
       },[RF,UF,XF,VG,vH]);
      },[RF,UF,XF,VG,uH]);
     },[RF,UF,XF,JE,VG,UG]);break;
    case 2:
     $M(pF,function(CH){
      var DH=CH.v[3];
      $$GHCziFloat_zdwexpt.C([JE,UG],function(EH){
       $$GHCziIntegerziType_timesInteger.C([RF,EH],function(FH){
	VG.C([$$GHCziTypes_ZMZN,XF,FH,UF,DH],function(GH){
	 $$GHCziList_reverse1.C([GH,$$GHCziTypes_ZMZN],function(HH){
	  $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,HH);
	 },[]);
	},[]);
       },[UF,XF,VG,DH]);
      },[RF,UF,XF,VG,DH]);
     },[RF,UF,XF,JE,VG,UG]);break;
    }
   },[pF,RF,UF,XF,JE]);
  },[pF,RF,UF,XF,JE,aG],"sat");
  $r([SG,aG]);break;
 case 2:
  $r([$$GHCziFloat$p,$$GHCziFloat_minExpt]);break;
 }
},[],"at libraries/base/GHC/Float.lhs:675:1");
var $$GHCziFloat_zdwzdsfloatToDigits=$f(2,function(PH,QH){
 var RH=QH==0.0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(RH.g){
 case 1:
  var SH=$t(function(){
   var TH=$hs_decodeFloatzuIntzh(QH);
   var UH=TH[0],VH=TH[1];
   var WH=$d(1,[VH],"sat");
   var XH=$t(function(){
    $$GHCziIntegerziType_smallInteger.J(UH);
   },[UH],"sat");
   $R(1,[XH,WH],"(,)");
  },[QH],"ds");
  var YH=$t(function(){
   $M(SH,function(ZH){
    var aI=ZH.v[1];
    $A(aI);
   },[]);
  },[SH],"e0");
  var bI=$t(function(){
   $M(YH,function(cI){
    var dI=cI.v[0];
    var lI=goog.math.Long.fromBits(4294967147,4294967295).subtract(dI);
    var eI=lI.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(eI.g){
    case 1:
     var fI=$t(function(){
      $M(SH,function(gI){
       var hI=gI.v[0];
       $A(hI);
      },[]);
     },[SH],"sat");
     $R(1,[fI,cI],"(,)");break;
    case 2:
     var jI=dI.add(lI);
     var iI=$d(1,[jI],"sat");
     var kI=$t(function(){
      $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,lI],function(mI){
       $$GHCziIntegerziType_eqInteger.C([mI,$$GHCziReal_even1],function(nI){
	switch(nI.g){
	case 1:
	 $M(SH,function(oI){
	  var pI=oI.v[0];
	  $$GHCziIntegerziType_quotInteger.J(pI,mI);
	 },[mI]);break;
	case 2:
	 $A($$GHCziErr_divZZeroError);break;
	}
       },[SH,mI]);
      },[SH]);
     },[SH,lI],"sat");
     $R(1,[kI,iI],"(,)");break;
    }
   },[SH]);
  },[SH,YH],"ds1");
  var qI=$t(function(){
   $M(bI,function(rI){
    var sI=rI.v[1];
    $A(sI);
   },[]);
  },[bI],"e");
  var tI=$t(function(){
   $M(bI,function(uI){
    var vI=uI.v[0];
    $A(vI);
   },[]);
  },[bI],"f");
  var wI=$t(function(){
   $M(qI,function(xI){
    var yI=xI.v[0];
    var zI=yI.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(zI.g){
    case 1:
     var AI=yI.greaterThan(goog.math.Long.fromBits(4294967147,4294967295))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(AI.g){
     case 1:
      var BI=$t(function(){
       var DI=yI.negate();
       $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,DI],function(CI){
	$$GHCziIntegerziType_timesInteger.J(CI,$$GHCziFloat_zdfRealFloatDouble7);
       },[]);
      },[yI],"sat");
      var EI=$t(function(){
       $$GHCziIntegerziType_timesInteger.J(tI,$$GHCziFloat_zdfRealFloatDouble7);
      },[tI],"sat");
      $R(1,[EI,BI,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
     case 2:
      $$GHCziIntegerziType_eqInteger.C([tI,$$GHCziFloat$t],function(FI){
       switch(FI.g){
       case 1:
	var GI=$t(function(){
	 var II=yI.negate();
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,II],function(HI){
	  $$GHCziIntegerziType_timesInteger.J(HI,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[yI],"sat");
	var JI=$t(function(){
	 $$GHCziIntegerziType_timesInteger.J(tI,$$GHCziFloat_zdfRealFloatDouble7);
	},[tI],"sat");
	$R(1,[JI,GI,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       case 2:
	var KI=$t(function(){
	 var NI=yI.negate();
	 var MI=NI.add(goog.math.Long.fromBits(1,0));
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble7,MI],function(LI){
	  $$GHCziIntegerziType_timesInteger.J(LI,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[yI],"sat");
	var OI=$t(function(){
	 $$GHCziIntegerziType_timesInteger.C([tI,$$GHCziFloat_zdfRealFloatDouble7],function(PI){
	  $$GHCziIntegerziType_timesInteger.J(PI,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[tI],"sat");
	$R(1,[OI,KI,$$GHCziFloat_zdfRealFloatDouble7,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       }
      },[tI,yI]);break;
     }break;
    case 2:
     var QI=$t(function(){
      $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble7,yI);
     },[yI],"be");
     $$GHCziIntegerziType_eqInteger.C([tI,$$GHCziFloat$t],function(RI){
      switch(RI.g){
      case 1:
       var SI=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([tI,QI],function(TI){
	 $$GHCziIntegerziType_timesInteger.J(TI,$$GHCziFloat_zdfRealFloatDouble7);
	},[]);
       },[tI,QI],"sat");
       $R(1,[SI,$$GHCziFloat_zdfRealFloatDouble7,QI,QI],"(,,,)");break;
      case 2:
       var UI=$t(function(){
	$$GHCziIntegerziType_timesInteger.J(QI,$$GHCziFloat_zdfRealFloatDouble7);
       },[QI],"sat");
       var VI=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([tI,QI],function(WI){
	 $$GHCziIntegerziType_timesInteger.C([WI,$$GHCziFloat_zdfRealFloatDouble7],function(XI){
	  $$GHCziIntegerziType_timesInteger.J(XI,$$GHCziFloat_zdfRealFloatDouble7);
	 },[]);
	},[]);
       },[tI,QI],"sat");
       $R(1,[VI,$$GHCziFloat$r,UI,QI],"(,,,)");break;
      }
     },[tI,QI]);break;
    }
   },[tI]);
  },[qI,tI],"ds2");
  var YI=$t(function(){
   $M(wI,function(ZI){
    var aJ=ZI.v[1];
    $A(aJ);
   },[]);
  },[wI],"s");
  var bJ=$t(function(){
   $M(wI,function(cJ){
    var dJ=cJ.v[2];
    $A(dJ);
   },[]);
  },[wI],"mUp");
  var eJ=$t(function(){
   $M(wI,function(fJ){
    var gJ=fJ.v[0];
    $A(gJ);
   },[]);
  },[wI],"r");
  var hJ=$t(function(){
   var iJ=$t(function(){
    $$GHCziIntegerziType_plusInteger.J(eJ,bJ);
   },[bJ,eJ],"lvl34");
   var jJ=$f(1,function(kJ){
    var lJ=kJ.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(lJ.g){
    case 1:
     var qJ=kJ.negate();
     $$GHCziFloat_zdwexpt.C([PH,qJ],function(mJ){
      $$GHCziIntegerziType_timesInteger.C([mJ,iJ],function(nJ){
       $$GHCziIntegerziType_leInteger.C([nJ,YI],function(oJ){
	switch(oJ.g){
	case 1:
	 var pJ=kJ.add(goog.math.Long.fromBits(1,0));
	 jJ.J(pJ);break;
	case 2:
	 $A(kJ);break;
	}
       },[kJ,jJ]);
      },[YI,kJ,jJ]);
     },[YI,iJ,kJ,jJ]);break;
    case 2:
     $$GHCziFloat_zdwexpt.C([PH,kJ],function(rJ){
      $$GHCziIntegerziType_timesInteger.C([rJ,YI],function(sJ){
       $$GHCziIntegerziType_leInteger.C([iJ,sJ],function(tJ){
	switch(tJ.g){
	case 1:
	 var uJ=kJ.add(goog.math.Long.fromBits(1,0));
	 jJ.J(uJ);break;
	case 2:
	 $A(kJ);break;
	}
       },[kJ,jJ]);
      },[iJ,kJ,jJ]);
     },[YI,iJ,kJ,jJ]);break;
    }
   },[YI,iJ,PH],"$wfixup");
   $$GHCziIntegerziType_eqInteger.C([PH,$$GHCziFloat_expts4],function(vJ){
    switch(vJ.g){
    case 1:
     $$GHCziIntegerziType_plusInteger.C([tI,$$GHCziFloat_zdfRealDouble1],function(wJ){
      $$GHCziIntegerziType_floatFromInteger.C([wJ],function(MJ){
       $M(qI,function(xJ){
	var yJ=xJ.v[0];
	$$GHCziIntegerziType_floatFromInteger.C([PH],function(NJ){
	 var HJ=$hs_logFloatzh(NJ);
	 var IJ=$hs_logFloatzh(MJ);
	 var LJ=$hs_logFloatzh(2.0);
	 var KJ=$hs_int2Floatzh(yJ);
	 var JJ=KJ*LJ;
	 var GJ=IJ+JJ;
	 var FJ=GJ/HJ;
	 var BJ=$hs_float2Intzh(FJ);
	 var EJ=$hs_int2Floatzh(BJ);
	 var zJ=EJ<FJ?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(zJ.g){
	 case 1:
	  jJ.C([BJ],function(AJ){
	   $R(1,[AJ],"I#");
	  },[]);break;
	 case 2:
	  var DJ=BJ.add(goog.math.Long.fromBits(1,0));
	  jJ.C([DJ],function(CJ){
	   $R(1,[CJ],"I#");
	  },[]);break;
	 }
	},[jJ,MJ,yJ]);
       },[PH,jJ,MJ]);
      },[qI,PH,jJ]);
     },[qI,PH,jJ]);break;
    case 2:
     $M(YH,function(OJ){
      var PJ=OJ.v[0];
      var UJ=goog.math.Long.fromBits(23,0).add(PJ);
      var QJ=UJ.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(QJ.g){
      case 1:
       var TJ=UJ.multiply(goog.math.Long.fromBits(8651,0));
       var SJ=$hs_quotIntzh(TJ,goog.math.Long.fromBits(28738,0));
       jJ.C([SJ],function(RJ){
	$R(1,[RJ],"I#");
       },[]);break;
      case 2:
       var YJ=UJ.multiply(goog.math.Long.fromBits(8651,0));
       var XJ=$hs_quotIntzh(YJ,goog.math.Long.fromBits(28738,0));
       var WJ=XJ.add(goog.math.Long.fromBits(1,0));
       jJ.C([WJ],function(VJ){
	$R(1,[VJ],"I#");
       },[]);break;
      }
     },[jJ]);break;
    }
   },[YH,qI,tI,PH,jJ]);
  },[YH,qI,tI,YI,bJ,eJ,PH],"k");
  var ZJ=$t(function(){
   $M(hJ,function(aK){
    var bK=aK.v[0];
    var cK=$f(5,function(dK,eK,fK,gK,hK){
     $$GHCziIntegerziType_eqInteger.C([fK,$$GHCziReal_even1],function(iK){
      switch(iK.g){
      case 1:
       $$GHCziIntegerziType_timesInteger.C([eK,PH],function(jK){
	$$GHCziIntegerziType_quotRemInteger.C([jK,fK],function(kK){
	 var lK=kK[0],mK=kK[1];
	 $$GHCziIntegerziType_timesInteger.C([hK,PH],function(nK){
	  $$GHCziIntegerziType_timesInteger.C([gK,PH],function(oK){
	   $$GHCziIntegerziType_ltInteger.C([mK,nK],function(pK){
	    switch(pK.g){
	    case 1:
	     $$GHCziIntegerziType_plusInteger.C([mK,oK],function(qK){
	      $$GHCziIntegerziType_gtInteger.C([qK,fK],function(rK){
	       switch(rK.g){
	       case 1:
		var sK=$d(2,[lK,dK],"sat");
		cK.J(sK,mK,fK,oK,nK);break;
	       case 2:
		var tK=$t(function(){
		 $$GHCziIntegerziType_plusInteger.J(lK,$$GHCziFloat_zdfRealDouble1);
		},[lK],"sat");
		$R(2,[tK,dK],":");break;
	       }
	      },[fK,nK,oK,mK,lK,dK,cK]);
	     },[fK,nK,oK,mK,lK,dK,cK]);break;
	    case 2:
	     $$GHCziIntegerziType_plusInteger.C([mK,oK],function(uK){
	      $$GHCziIntegerziType_gtInteger.C([uK,fK],function(vK){
	       switch(vK.g){
	       case 1:
		$R(2,[lK,dK],":");break;
	       case 2:
		$$GHCziIntegerziType_timesInteger.C([mK,$$GHCziFloat_zdfRealFloatDouble7],function(wK){
		 $$GHCziIntegerziType_ltInteger.C([wK,fK],function(xK){
		  switch(xK.g){
		  case 1:
		   var yK=$t(function(){
		    $$GHCziIntegerziType_plusInteger.J(lK,$$GHCziFloat_zdfRealDouble1);
		   },[lK],"sat");
		   $R(2,[yK,dK],":");break;
		  case 2:
		   $R(2,[lK,dK],":");break;
		  }
		 },[lK,dK]);
		},[fK,lK,dK]);break;
	       }
	      },[fK,mK,lK,dK]);
	     },[fK,mK,lK,dK]);break;
	    }
	   },[fK,nK,oK,mK,lK,dK,cK]);
	  },[fK,nK,mK,lK,dK,cK]);
	 },[PH,fK,gK,mK,lK,dK,cK]);
	},[PH,fK,hK,gK,dK,cK]);
       },[PH,fK,hK,gK,dK,cK]);break;
      case 2:
       $A($$GHCziErr_divZZeroError);break;
      }
     },[PH,fK,eK,hK,gK,dK,cK]);
    },[PH],"gen");
    var zK=bK.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(zK.g){
    case 1:
     $M(wI,function(AK){
      var BK=AK.v[3];
      var IK=bK.negate();
      $$GHCziFloat_zdwexpt.C([PH,IK],function(CK){
       $$GHCziIntegerziType_timesInteger.C([BK,CK],function(DK){
	$$GHCziIntegerziType_timesInteger.C([bJ,CK],function(EK){
	 $$GHCziIntegerziType_timesInteger.C([eJ,CK],function(FK){
	  cK.C([$$GHCziTypes_ZMZN,FK,YI,EK,DK],function(GK){
	   $$GHCziList_reverse1.C([GK,$$GHCziTypes_ZMZN],function(HK){
	    $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,HK);
	   },[]);
	  },[]);
	 },[YI,cK,DK,EK]);
	},[YI,eJ,cK,CK,DK]);
       },[YI,bJ,eJ,cK,CK]);
      },[YI,bJ,eJ,cK,BK]);
     },[YI,bJ,eJ,PH,cK,bK]);break;
    case 2:
     $M(wI,function(JK){
      var KK=JK.v[3];
      $$GHCziFloat_zdwexpt.C([PH,bK],function(LK){
       $$GHCziIntegerziType_timesInteger.C([YI,LK],function(MK){
	cK.C([$$GHCziTypes_ZMZN,eJ,MK,bJ,KK],function(NK){
	 $$GHCziList_reverse1.C([NK,$$GHCziTypes_ZMZN],function(OK){
	  $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,OK);
	 },[]);
	},[]);
       },[bJ,eJ,cK,KK]);
      },[YI,bJ,eJ,cK,KK]);
     },[YI,bJ,eJ,PH,cK,bK]);break;
    }
   },[wI,YI,bJ,eJ,PH]);
  },[wI,YI,bJ,eJ,PH,hJ],"sat");
  $r([ZJ,hJ]);break;
 case 2:
  $r([$$GHCziFloat$s,$$GHCziFloat_minExpt]);break;
 }
},[],"at libraries/base/GHC/Float.lhs:675:1");
var $$GHCziFloat_zdwzdsformatRealFloat=$f(3,function(VO,WO,XO){
 var $ff=isDoubleNaN(XO);
 var YO=[$$GHCziPrim_realWorldzh,$ff];
 var ZO=YO[1];
 $M(ZO,function(aP){
  switch(aP.toString()){
  case "0":
   var $ff=isDoubleInfinite(XO);
   var bP=[$$GHCziPrim_realWorldzh,$ff];
   var cP=bP[1];
   $M(cP,function(dP){
    switch(dP.toString()){
    case "0":
     var fP=$f(2,function(gP,hP){
      $M(WO,function(iP){
       switch(iP.g){
       case 1:
	$$GHCziBase_map.C([$$GHCziShow_intToDigit,gP],function(jP){
	 switch(jP.g){
	 case 1:
	  $A($$GHCziFloat$x);break;
	 case 2:
	  var kP=jP.v[0],lP=jP.v[1];
	  $M(kP,function(mP){
	   var nP=mP.v[0];
	   var oP=$t(function(){
	    $M(lP,function(pP){
	     switch(pP.g){
	     case 1:
	      var qP=$t(function(){
	       var rP=$t(function(){
		var sP=hP.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),sP,$$GHCziTypes_ZMZN);
	       },[hP],"sat");
	       $$GHCziCString_unpackAppendCStringzh.J(".0e",rP);
	      },[hP],"sat");
	      $R(2,[mP,qP],":");break;
	     case 2:
	      var tP=$t(function(){
	       var uP=$t(function(){
		var vP=hP.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_itos.J(vP,$$GHCziTypes_ZMZN);
	       },[hP],"sat");
	       var wP=$d(2,[$$GHCziFloat$B,uP],"sat");
	       $$GHCziBase_zpzp.J(pP,wP);
	      },[hP,pP],"sat");
	      var xP=$d(2,[$$GHCziFloat$y,tP],"sat");
	      $R(2,[mP,xP],":");break;
	     }
	    },[mP,hP]);
	   },[lP,mP,hP],"$wfail");
	   $M(nP,function(yP){
	    switch(yP.toString()){
	    case "0":
	     $M(lP,function(zP){
	      switch(zP.g){
	      case 1:
	       $A($$GHCziFloat$z);break;
	      case 2:
	       $A(oP);break;
	      }
	     },[lP,mP,hP,oP]);break;
	    default:
	     $A(oP);
	    }
	   },[lP,mP,hP,oP]);
	  },[lP,hP]);break;
	 }
	},[hP]);break;
       case 2:
	var AP=iP.v[0];
	var BP=$t(function(){
	 $M(AP,function(CP){
	  var DP=CP.v[0];
	  var EP=DP.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(EP.g){
	  case 1:
	   $A(CP);break;
	  case 2:
	   $A($$GHCziFloat_zdfRealFracFloat2);break;
	  }
	 },[]);
	},[AP],"dec'");
	var FP=$t(function(){
	 var GP=$t(function(){
	  $M(BP,function(HP){
	   var IP=HP.v[0];
	   var JP=IP.add(goog.math.Long.fromBits(1,0));
	   $R(1,[JP],"I#");
	  },[]);
	 },[BP],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,GP,gP],function(KP){
	  var LP=KP[0],MP=KP[1];
	  $R(1,[LP,MP],"(,)");
	 },[]);
	},[gP,BP],"ds4");
	var NP=$t(function(){
	 $M(FP,function(OP){
	  var PP=OP.v[0];
	  $A(PP);
	 },[]);
	},[FP],"ei");
	var QP=$t(function(){
	 $M(NP,function(RP){
	  var SP=RP.v[0];
	  var TP=SP.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(TP.g){
	  case 1:
	   $M(FP,function(UP){
	    var VP=UP.v[1];
	    $$GHCziBase_map.C([$$GHCziShow_intToDigit,VP],function(WP){
	     switch(WP.g){
	     case 1:
	      $A($$GHCziFloat$A);break;
	     case 2:
	      var XP=WP.v[0],YP=WP.v[1];
	      $R(1,[XP,YP],"(,)");break;
	     }
	    },[]);
	   },[]);break;
	  case 2:
	   $M(FP,function(ZP){
	    var aQ=ZP.v[1];
	    $M(aQ,function(bQ){
	     switch(bQ.g){
	     case 1:
	      $A($$GHCziList_init2);break;
	     case 2:
	      var cQ=bQ.v[0],dQ=bQ.v[1];
	      $$GHCziList_init1.C([cQ,dQ],function(eQ){
	       $$GHCziBase_map.C([$$GHCziShow_intToDigit,eQ],function(fQ){
		switch(fQ.g){
		case 1:
		 $A($$GHCziFloat$A);break;
		case 2:
		 var gQ=fQ.v[0],hQ=fQ.v[1];
		 $R(1,[gQ,hQ],"(,)");break;
		}
	       },[]);
	      },[]);break;
	     }
	    },[]);
	   },[]);break;
	  }
	 },[FP]);
	},[FP,NP],"ds5");
	var iQ=$t(function(){
	 $M(QP,function(jQ){
	  var kQ=jQ.v[1];
	  var lQ=$t(function(){
	   $M(NP,function(mQ){
	    var nQ=mQ.v[0];
	    var pQ=hP.subtract(goog.math.Long.fromBits(1,0));
	    var oQ=pQ.add(nQ);
	    $$GHCziShow_itos.J(oQ,$$GHCziTypes_ZMZN);
	   },[hP]);
	  },[hP,NP],"sat");
	  var qQ=$d(2,[$$GHCziFloat$B,lQ],"sat");
	  $$GHCziBase_zpzp.J(kQ,qQ);
	 },[hP,NP]);
	},[hP,NP,QP],"a");
	$M(gP,function(rQ){
	 switch(rQ.g){
	 case 1:
	  var sQ=$d(2,[$$GHCziFloat$y,iQ],"sat");
	  var tQ=$t(function(){
	   $M(QP,function(uQ){
	    var vQ=uQ.v[0];
	    $A(vQ);
	   },[]);
	  },[QP],"sat");
	  $R(2,[tQ,sQ],":");break;
	 case 2:
	  var wQ=rQ.v[0],xQ=rQ.v[1];
	  $M(wQ,function(yQ){
	   var zQ=yQ.v[0];
	   $M(zQ,function(AQ){
	    switch(AQ.toString()){
	    case "0":
	     $M(xQ,function(FQ){
	      switch(FQ.g){
	      case 1:
	       var GQ=$t(function(){
		$M(BP,function(HQ){
		 var IQ=HQ.v[0];
		 var JQ=IQ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(JQ.g){
		 case 1:
		  $$GHCziFloat$M.J($$GHCziFloat$D,IQ);break;
		 case 2:
		  $A($$GHCziFloat$L);break;
		 }
		},[]);
	       },[BP],"sat");
	       var KQ=$d(2,[$$GHCziFloat$y,GQ],"sat");
	       $R(2,[$$GHCziFloat$C,KQ],":");break;
	      case 2:
	       var LQ=$d(2,[$$GHCziFloat$y,iQ],"sat");
	       var MQ=$t(function(){
		$M(QP,function(NQ){
		 var OQ=NQ.v[0];
		 $A(OQ);
		},[]);
	       },[QP],"sat");
	       $R(2,[MQ,LQ],":");break;
	      }
	     },[BP,QP,iQ]);break;
	    default:
	     var BQ=$d(2,[$$GHCziFloat$y,iQ],"sat");
	     var CQ=$t(function(){
	      $M(QP,function(DQ){
	       var EQ=DQ.v[0];
	       $A(EQ);
	      },[]);
	     },[QP],"sat");
	     $R(2,[CQ,BQ],":");
	    }
	   },[BP,QP,iQ,xQ]);
	  },[BP,QP,iQ,xQ]);break;
	 }
	},[BP,QP,iQ]);break;
       }
      },[gP,hP]);
     },[WO],"$s$wdoFmt");
     var PQ=$f(2,function(QQ,RQ){
      $M(WO,function(SQ){
       switch(SQ.g){
       case 1:
	var TQ=RQ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(TQ.g){
	case 1:
	 var UQ=$t(function(){
	  $$GHCziBase_map.J($$GHCziShow_intToDigit,QQ);
	 },[QQ],"sat");
	 $$GHCziFloat$G.J(RQ,$$GHCziTypes_ZMZN,UQ);break;
	case 2:
	 var VQ=$t(function(){
	  var eR=RQ.negate();
	  var WQ=eR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(WQ.g){
	  case 1:
	   var XQ=$t(function(){
	    $$GHCziBase_map.J($$GHCziShow_intToDigit,QQ);
	   },[QQ],"n");
	   var YQ=$d(2,[$$GHCziFloat$C,XQ],"lvl34");
	   var ZQ=$f(1,function(aR){
	    var bR=aR.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(bR.g){
	    case 1:
	     var cR=$t(function(){
	      var dR=aR.subtract(goog.math.Long.fromBits(1,0));
	      ZQ.J(dR);
	     },[aR,ZQ],"sat");
	     $R(2,[$$GHCziFloat$C,cR],":");break;
	    case 2:
	     $A(YQ);break;
	    }
	   },[YQ],"xs4");
	   ZQ.J(eR);break;
	  case 2:
	   $$GHCziBase_map.J($$GHCziShow_intToDigit,QQ);break;
	  }
	 },[RQ,QQ],"sat");
	 $$GHCziCString_unpackAppendCStringzh.J("0.",VQ);break;
	}break;
       case 2:
	var fR=SQ.v[0];
	var gR=RQ.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(gR.g){
	case 1:
	 var hR=$t(function(){
	  var xR=RQ.negate();
	  var iR=xR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(iR.g){
	  case 1:
	   var jR=$d(2,[$$GHCziFloat_minExpt,QQ],"lvl34");
	   var kR=$f(1,function(lR){
	    var mR=lR.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(mR.g){
	    case 1:
	     var nR=$t(function(){
	      var oR=lR.subtract(goog.math.Long.fromBits(1,0));
	      kR.J(oR);
	     },[lR,kR],"sat");
	     $R(2,[$$GHCziFloat_minExpt,nR],":");break;
	    case 2:
	     $A(jR);break;
	    }
	   },[jR],"xs4");
	   kR.C([xR],function(pR){
	    var qR=$t(function(){
	     $M(fR,function(rR){
	      var sR=rR.v[0];
	      var tR=sR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(tR.g){
	      case 1:
	       $A(rR);break;
	      case 2:
	       $A($$GHCziFloat_minExpt);break;
	      }
	     },[]);
	    },[fR],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,qR,pR],function(uR){
	     var vR=uR[0],wR=uR[1];
	     $$GHCziFloat$N.J(vR,wR);
	    },[]);
	   },[fR]);break;
	  case 2:
	   var yR=$t(function(){
	    $M(fR,function(zR){
	     var AR=zR.v[0];
	     var BR=AR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(BR.g){
	     case 1:
	      $A(zR);break;
	     case 2:
	      $A($$GHCziFloat_minExpt);break;
	     }
	    },[]);
	   },[fR],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,yR,QQ],function(CR){
	    var DR=CR[0],ER=CR[1];
	    $$GHCziFloat$N.J(DR,ER);
	   },[]);break;
	  }
	 },[RQ,QQ,fR],"ds4");
	 var FR=$t(function(){
	  $M(hR,function(GR){
	   var HR=GR.v[1];
	   $M(HR,function(IR){
	    switch(IR.g){
	    case 1:
	     $R(1,[],"[]");break;
	    case 2:
	     $R(2,[$$GHCziFloat$y,IR],":");break;
	    }
	   },[]);
	  },[]);
	 },[hR],"sat");
	 var JR=$t(function(){
	  $M(hR,function(KR){
	   var LR=KR.v[0];
	   $A(LR);
	  },[]);
	 },[hR],"sat");
	 $R(2,[JR,FR],":");break;
	case 2:
	 var MR=$t(function(){
	  $M(fR,function(NR){
	   var OR=NR.v[0];
	   var PR=OR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(PR.g){
	   case 1:
	    var QR=OR.add(RQ);
	    $R(1,[QR],"I#");break;
	   case 2:
	    $R(1,[RQ],"I#");break;
	   }
	  },[RQ]);
	 },[RQ,fR],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,MR,QQ],function(RR){
	  var SR=RR[0],TR=RR[1];
	  $M(SR,function(UR){
	   var VR=UR.v[0];
	   var gS=RQ.add(VR);
	   var WR=gS.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(WR.g){
	   case 1:
	    var XR=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,TR);
	    },[TR],"sat");
	    $$GHCziList_zdwsplitAtzh.C([gS,XR],function(YR){
	     var ZR=YR[0],aS=YR[1];
	     $M(ZR,function(bS){
	      switch(bS.g){
	      case 1:
	       var cS=$t(function(){
		$M(aS,function(dS){
		 switch(dS.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$y,dS],":");break;
		 }
		},[]);
	       },[aS],"sat");
	       $R(2,[$$GHCziFloat$C,cS],":");break;
	      case 2:
	       var eS=$t(function(){
		$M(aS,function(fS){
		 switch(fS.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$y,fS],":");break;
		 }
		},[]);
	       },[aS],"sat");
	       $$GHCziBase_zpzp.J(bS,eS);break;
	      }
	     },[aS]);
	    },[]);break;
	   case 2:
	    var hS=$t(function(){
	     $$GHCziBase_map.C([$$GHCziShow_intToDigit,TR],function(iS){
	      switch(iS.g){
	      case 1:
	       $R(1,[],"[]");break;
	      case 2:
	       $R(2,[$$GHCziFloat$y,iS],":");break;
	      }
	     },[]);
	    },[TR],"sat");
	    $R(2,[$$GHCziFloat$C,hS],":");break;
	   }
	  },[RQ,TR]);
	 },[RQ]);break;
	}break;
       }
      },[RQ,QQ]);
     },[WO],"$s$wdoFmt1");
     var jS=$f(3,function(kS,lS,mS){
      $M(kS,function(nS){
       switch(nS.g){
       case 1:
	$M(WO,function(oS){
	 switch(oS.g){
	 case 1:
	  $$GHCziBase_map.C([$$GHCziShow_intToDigit,lS],function(pS){
	   switch(pS.g){
	   case 1:
	    $A($$GHCziFloat$x);break;
	   case 2:
	    var qS=pS.v[0],rS=pS.v[1];
	    $M(qS,function(sS){
	     var tS=sS.v[0];
	     var uS=$t(function(){
	      $M(rS,function(vS){
	       switch(vS.g){
	       case 1:
		var wS=$t(function(){
		 var xS=$t(function(){
		  $M(mS,function(yS){
		   var zS=yS.v[0];
		   var AS=zS.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),AS,$$GHCziTypes_ZMZN);
		  },[]);
		 },[mS],"sat");
		 $$GHCziCString_unpackAppendCStringzh.J(".0e",xS);
		},[mS],"sat");
		$R(2,[sS,wS],":");break;
	       case 2:
		var BS=$t(function(){
		 var CS=$t(function(){
		  $M(mS,function(DS){
		   var ES=DS.v[0];
		   var FS=ES.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_itos.J(FS,$$GHCziTypes_ZMZN);
		  },[]);
		 },[mS],"sat");
		 var GS=$d(2,[$$GHCziFloat$B,CS],"sat");
		 $$GHCziBase_zpzp.J(vS,GS);
		},[mS,vS],"sat");
		var HS=$d(2,[$$GHCziFloat$y,BS],"sat");
		$R(2,[sS,HS],":");break;
	       }
	      },[sS,mS]);
	     },[rS,sS,mS],"$wfail");
	     $M(tS,function(IS){
	      switch(IS.toString()){
	      case "0":
	       $M(rS,function(JS){
		switch(JS.g){
		case 1:
		 $A($$GHCziFloat$z);break;
		case 2:
		 $A(uS);break;
		}
	       },[rS,sS,mS,uS]);break;
	      default:
	       $A(uS);
	      }
	     },[rS,sS,mS,uS]);
	    },[rS,mS]);break;
	   }
	  },[mS]);break;
	 case 2:
	  var KS=oS.v[0];
	  var LS=$t(function(){
	   $M(KS,function(MS){
	    var NS=MS.v[0];
	    var OS=NS.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(OS.g){
	    case 1:
	     $A(MS);break;
	    case 2:
	     $A($$GHCziFloat_zdfRealFracFloat2);break;
	    }
	   },[]);
	  },[KS],"dec'");
	  var PS=$t(function(){
	   var QS=$t(function(){
	    $M(LS,function(RS){
	     var SS=RS.v[0];
	     var TS=SS.add(goog.math.Long.fromBits(1,0));
	     $R(1,[TS],"I#");
	    },[]);
	   },[LS],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,QS,lS],function(US){
	    var VS=US[0],WS=US[1];
	    $R(1,[VS,WS],"(,)");
	   },[]);
	  },[lS,LS],"ds4");
	  var XS=$t(function(){
	   $M(PS,function(YS){
	    var ZS=YS.v[0];
	    $A(ZS);
	   },[]);
	  },[PS],"ei");
	  var aT=$t(function(){
	   $M(XS,function(bT){
	    var cT=bT.v[0];
	    var dT=cT.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(dT.g){
	    case 1:
	     $M(PS,function(eT){
	      var fT=eT.v[1];
	      $$GHCziBase_map.C([$$GHCziShow_intToDigit,fT],function(gT){
	       switch(gT.g){
	       case 1:
		$A($$GHCziFloat$A);break;
	       case 2:
		var hT=gT.v[0],iT=gT.v[1];
		$R(1,[hT,iT],"(,)");break;
	       }
	      },[]);
	     },[]);break;
	    case 2:
	     $M(PS,function(jT){
	      var kT=jT.v[1];
	      $M(kT,function(lT){
	       switch(lT.g){
	       case 1:
		$A($$GHCziList_init2);break;
	       case 2:
		var mT=lT.v[0],nT=lT.v[1];
		$$GHCziList_init1.C([mT,nT],function(oT){
		 $$GHCziBase_map.C([$$GHCziShow_intToDigit,oT],function(pT){
		  switch(pT.g){
		  case 1:
		   $A($$GHCziFloat$A);break;
		  case 2:
		   var qT=pT.v[0],rT=pT.v[1];
		   $R(1,[qT,rT],"(,)");break;
		  }
		 },[]);
		},[]);break;
	       }
	      },[]);
	     },[]);break;
	    }
	   },[PS]);
	  },[PS,XS],"ds5");
	  var sT=$t(function(){
	   $M(aT,function(tT){
	    var uT=tT.v[1];
	    var vT=$t(function(){
	     $M(mS,function(wT){
	      var xT=wT.v[0];
	      $M(XS,function(yT){
	       var zT=yT.v[0];
	       var BT=xT.subtract(goog.math.Long.fromBits(1,0));
	       var AT=BT.add(zT);
	       $$GHCziShow_itos.J(AT,$$GHCziTypes_ZMZN);
	      },[xT]);
	     },[XS]);
	    },[mS,XS],"sat");
	    var CT=$d(2,[$$GHCziFloat$B,vT],"sat");
	    $$GHCziBase_zpzp.J(uT,CT);
	   },[mS,XS]);
	  },[mS,XS,aT],"a");
	  $M(lS,function(DT){
	   switch(DT.g){
	   case 1:
	    var ET=$d(2,[$$GHCziFloat$y,sT],"sat");
	    var FT=$t(function(){
	     $M(aT,function(GT){
	      var HT=GT.v[0];
	      $A(HT);
	     },[]);
	    },[aT],"sat");
	    $R(2,[FT,ET],":");break;
	   case 2:
	    var IT=DT.v[0],JT=DT.v[1];
	    $M(IT,function(KT){
	     var LT=KT.v[0];
	     $M(LT,function(MT){
	      switch(MT.toString()){
	      case "0":
	       $M(JT,function(RT){
		switch(RT.g){
		case 1:
		 var ST=$t(function(){
		  $M(LS,function(TT){
		   var UT=TT.v[0];
		   var VT=UT.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(VT.g){
		   case 1:
		    $$GHCziFloat$M.J($$GHCziFloat$D,UT);break;
		   case 2:
		    $A($$GHCziFloat$L);break;
		   }
		  },[]);
		 },[LS],"sat");
		 var WT=$d(2,[$$GHCziFloat$y,ST],"sat");
		 $R(2,[$$GHCziFloat$C,WT],":");break;
		case 2:
		 var XT=$d(2,[$$GHCziFloat$y,sT],"sat");
		 var YT=$t(function(){
		  $M(aT,function(ZT){
		   var aU=ZT.v[0];
		   $A(aU);
		  },[]);
		 },[aT],"sat");
		 $R(2,[YT,XT],":");break;
		}
	       },[LS,aT,sT]);break;
	      default:
	       var NT=$d(2,[$$GHCziFloat$y,sT],"sat");
	       var OT=$t(function(){
		$M(aT,function(PT){
		 var QT=PT.v[0];
		 $A(QT);
		},[]);
	       },[aT],"sat");
	       $R(2,[OT,NT],":");
	      }
	     },[LS,aT,sT,JT]);
	    },[LS,aT,sT,JT]);break;
	   }
	  },[LS,aT,sT]);break;
	 }
	},[lS,mS]);break;
       case 2:
	$M(WO,function(bU){
	 switch(bU.g){
	 case 1:
	  $M(mS,function(cU){
	   var dU=cU.v[0];
	   var eU=dU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(eU.g){
	   case 1:
	    var fU=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,lS);
	    },[lS],"sat");
	    $$GHCziFloat$G.J(dU,$$GHCziTypes_ZMZN,fU);break;
	   case 2:
	    var gU=$t(function(){
	     var pU=dU.negate();
	     var hU=pU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(hU.g){
	     case 1:
	      var iU=$t(function(){
	       $$GHCziBase_map.J($$GHCziShow_intToDigit,lS);
	      },[lS],"n");
	      var jU=$d(2,[$$GHCziFloat$C,iU],"lvl34");
	      var kU=$f(1,function(lU){
	       var mU=lU.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(mU.g){
	       case 1:
		var nU=$t(function(){
		 var oU=lU.subtract(goog.math.Long.fromBits(1,0));
		 kU.J(oU);
		},[lU,kU],"sat");
		$R(2,[$$GHCziFloat$C,nU],":");break;
	       case 2:
		$A(jU);break;
	       }
	      },[jU],"xs4");
	      kU.J(pU);break;
	     case 2:
	      $$GHCziBase_map.J($$GHCziShow_intToDigit,lS);break;
	     }
	    },[lS,dU],"sat");
	    $$GHCziCString_unpackAppendCStringzh.J("0.",gU);break;
	   }
	  },[lS]);break;
	 case 2:
	  var qU=bU.v[0];
	  $M(mS,function(rU){
	   var sU=rU.v[0];
	   var tU=sU.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(tU.g){
	   case 1:
	    var uU=$t(function(){
	     var KU=sU.negate();
	     var vU=KU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(vU.g){
	     case 1:
	      var wU=$d(2,[$$GHCziFloat_minExpt,lS],"lvl34");
	      var xU=$f(1,function(yU){
	       var zU=yU.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(zU.g){
	       case 1:
		var AU=$t(function(){
		 var BU=yU.subtract(goog.math.Long.fromBits(1,0));
		 xU.J(BU);
		},[yU,xU],"sat");
		$R(2,[$$GHCziFloat_minExpt,AU],":");break;
	       case 2:
		$A(wU);break;
	       }
	      },[wU],"xs4");
	      xU.C([KU],function(CU){
	       var DU=$t(function(){
		$M(qU,function(EU){
		 var FU=EU.v[0];
		 var GU=FU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(GU.g){
		 case 1:
		  $A(EU);break;
		 case 2:
		  $A($$GHCziFloat_minExpt);break;
		 }
		},[]);
	       },[qU],"sat");
	       $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,DU,CU],function(HU){
		var IU=HU[0],JU=HU[1];
		$$GHCziFloat$N.J(IU,JU);
	       },[]);
	      },[qU]);break;
	     case 2:
	      var LU=$t(function(){
	       $M(qU,function(MU){
		var NU=MU.v[0];
		var OU=NU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(OU.g){
		case 1:
		 $A(MU);break;
		case 2:
		 $A($$GHCziFloat_minExpt);break;
		}
	       },[]);
	      },[qU],"sat");
	      $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,LU,lS],function(PU){
	       var QU=PU[0],RU=PU[1];
	       $$GHCziFloat$N.J(QU,RU);
	      },[]);break;
	     }
	    },[lS,sU,qU],"ds4");
	    var SU=$t(function(){
	     $M(uU,function(TU){
	      var UU=TU.v[1];
	      $M(UU,function(VU){
	       switch(VU.g){
	       case 1:
		$R(1,[],"[]");break;
	       case 2:
		$R(2,[$$GHCziFloat$y,VU],":");break;
	       }
	      },[]);
	     },[]);
	    },[uU],"sat");
	    var WU=$t(function(){
	     $M(uU,function(XU){
	      var YU=XU.v[0];
	      $A(YU);
	     },[]);
	    },[uU],"sat");
	    $R(2,[WU,SU],":");break;
	   case 2:
	    var ZU=$t(function(){
	     $M(qU,function(aV){
	      var bV=aV.v[0];
	      var cV=bV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(cV.g){
	      case 1:
	       var dV=bV.add(sU);
	       $R(1,[dV],"I#");break;
	      case 2:
	       $A(rU);break;
	      }
	     },[sU,rU]);
	    },[sU,qU,rU],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,ZU,lS],function(eV){
	     var fV=eV[0],gV=eV[1];
	     $M(fV,function(hV){
	      var iV=hV.v[0];
	      var tV=sU.add(iV);
	      var jV=tV.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(jV.g){
	      case 1:
	       var kV=$t(function(){
		$$GHCziBase_map.J($$GHCziShow_intToDigit,gV);
	       },[gV],"sat");
	       $$GHCziList_zdwsplitAtzh.C([tV,kV],function(lV){
		var mV=lV[0],nV=lV[1];
		$M(mV,function(oV){
		 switch(oV.g){
		 case 1:
		  var pV=$t(function(){
		   $M(nV,function(qV){
		    switch(qV.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$y,qV],":");break;
		    }
		   },[]);
		  },[nV],"sat");
		  $R(2,[$$GHCziFloat$C,pV],":");break;
		 case 2:
		  var rV=$t(function(){
		   $M(nV,function(sV){
		    switch(sV.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$y,sV],":");break;
		    }
		   },[]);
		  },[nV],"sat");
		  $$GHCziBase_zpzp.J(oV,rV);break;
		 }
		},[nV]);
	       },[]);break;
	      case 2:
	       var uV=$t(function(){
		$$GHCziBase_map.C([$$GHCziShow_intToDigit,gV],function(vV){
		 switch(vV.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$y,vV],":");break;
		 }
		},[]);
	       },[gV],"sat");
	       $R(2,[$$GHCziFloat$C,uV],":");break;
	      }
	     },[sU,gV]);
	    },[sU]);break;
	   }
	  },[lS,qU]);break;
	 }
	},[lS,mS]);break;
       case 3:
	$M(mS,function(wV){
	 var xV=wV.v[0];
	 var yV=xV.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(yV.g){
	 case 1:
	  var zV=xV.greaterThan(goog.math.Long.fromBits(7,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(zV.g){
	  case 1:
	   PQ.J(lS,xV);break;
	  case 2:
	   fP.J(lS,xV);break;
	  }break;
	 case 2:
	  fP.J(lS,xV);break;
	 }
	},[fP,PQ,lS]);break;
       }
      },[WO,fP,PQ,lS,mS]);
     },[WO,fP,PQ],"$wdoFmt");
     var AV=$t(function(){
      var EV= -XO;
      $$GHCziFloat_zdwzdsfloatToDigits1.C([$$GHCziFloat_expts4,EV],function(BV){
       var CV=BV[0],DV=BV[1];
       jS.J(VO,CV,DV);
      },[jS,VO]);
     },[XO,jS,VO],"a");
     var FV=XO<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(FV.g){
     case 1:
      var $ff=isDoubleNegativeZero(XO);
      var GV=[$$GHCziPrim_realWorldzh,$ff];
      var HV=GV[1];
      $M(HV,function(IV){
       switch(IV.toString()){
       case "0":
	$$GHCziFloat_zdwzdsfloatToDigits1.C([$$GHCziFloat_expts4,XO],function(JV){
	 var KV=JV[0],LV=JV[1];
	 jS.J(VO,KV,LV);
	},[jS,VO]);break;
       default:
	$R(2,[$$GHCziFloat_zdfShowDouble4,AV],":");
       }
      },[XO,jS,VO,AV]);break;
     case 2:
      $R(2,[$$GHCziFloat_zdfShowDouble4,AV],":");break;
     }break;
    default:
     var eP=XO<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(eP.g){
     case 1:
      $A($$GHCziFloat$I);break;
     case 2:
      $A($$GHCziFloat$J);break;
     }
    }
   },[XO,WO,VO]);break;
  default:
   $A($$GHCziFloat$K);
  }
 },[XO,WO,VO]);
},[],"at libraries/base/GHC/Float.lhs:574:1");
var $$GHCziFloat_zdwzdsformatRealFloat1=$f(3,function(RV,SV,TV){
 var $ff=isFloatNaN(TV);
 var UV=[$$GHCziPrim_realWorldzh,$ff];
 var VV=UV[1];
 $M(VV,function(WV){
  switch(WV.toString()){
  case "0":
   var $ff=isFloatInfinite(TV);
   var XV=[$$GHCziPrim_realWorldzh,$ff];
   var YV=XV[1];
   $M(YV,function(ZV){
    switch(ZV.toString()){
    case "0":
     var bW=$f(2,function(cW,dW){
      $M(SV,function(eW){
       switch(eW.g){
       case 1:
	$$GHCziBase_map.C([$$GHCziShow_intToDigit,cW],function(fW){
	 switch(fW.g){
	 case 1:
	  $A($$GHCziFloat$O);break;
	 case 2:
	  var gW=fW.v[0],hW=fW.v[1];
	  $M(gW,function(iW){
	   var jW=iW.v[0];
	   var kW=$t(function(){
	    $M(hW,function(lW){
	     switch(lW.g){
	     case 1:
	      var mW=$t(function(){
	       var nW=$t(function(){
		var oW=dW.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),oW,$$GHCziTypes_ZMZN);
	       },[dW],"sat");
	       $$GHCziCString_unpackAppendCStringzh.J(".0e",nW);
	      },[dW],"sat");
	      $R(2,[iW,mW],":");break;
	     case 2:
	      var pW=$t(function(){
	       var qW=$t(function(){
		var rW=dW.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_itos.J(rW,$$GHCziTypes_ZMZN);
	       },[dW],"sat");
	       var sW=$d(2,[$$GHCziFloat$B,qW],"sat");
	       $$GHCziBase_zpzp.J(lW,sW);
	      },[dW,lW],"sat");
	      var tW=$d(2,[$$GHCziFloat$y,pW],"sat");
	      $R(2,[iW,tW],":");break;
	     }
	    },[iW,dW]);
	   },[hW,iW,dW],"$wfail");
	   $M(jW,function(uW){
	    switch(uW.toString()){
	    case "0":
	     $M(hW,function(vW){
	      switch(vW.g){
	      case 1:
	       $A($$GHCziFloat$z);break;
	      case 2:
	       $A(kW);break;
	      }
	     },[hW,iW,dW,kW]);break;
	    default:
	     $A(kW);
	    }
	   },[hW,iW,dW,kW]);
	  },[hW,dW]);break;
	 }
	},[dW]);break;
       case 2:
	var wW=eW.v[0];
	var xW=$t(function(){
	 $M(wW,function(yW){
	  var zW=yW.v[0];
	  var AW=zW.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(AW.g){
	  case 1:
	   $A(yW);break;
	  case 2:
	   $A($$GHCziFloat_zdfRealFracFloat2);break;
	  }
	 },[]);
	},[wW],"dec'");
	var BW=$t(function(){
	 var CW=$t(function(){
	  $M(xW,function(DW){
	   var EW=DW.v[0];
	   var FW=EW.add(goog.math.Long.fromBits(1,0));
	   $R(1,[FW],"I#");
	  },[]);
	 },[xW],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,CW,cW],function(GW){
	  var HW=GW[0],IW=GW[1];
	  $R(1,[HW,IW],"(,)");
	 },[]);
	},[cW,xW],"ds4");
	var JW=$t(function(){
	 $M(BW,function(KW){
	  var LW=KW.v[0];
	  $A(LW);
	 },[]);
	},[BW],"ei");
	var MW=$t(function(){
	 $M(JW,function(NW){
	  var OW=NW.v[0];
	  var PW=OW.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(PW.g){
	  case 1:
	   $M(BW,function(QW){
	    var RW=QW.v[1];
	    $$GHCziBase_map.C([$$GHCziShow_intToDigit,RW],function(SW){
	     switch(SW.g){
	     case 1:
	      $A($$GHCziFloat$A);break;
	     case 2:
	      var TW=SW.v[0],UW=SW.v[1];
	      $R(1,[TW,UW],"(,)");break;
	     }
	    },[]);
	   },[]);break;
	  case 2:
	   $M(BW,function(VW){
	    var WW=VW.v[1];
	    $M(WW,function(XW){
	     switch(XW.g){
	     case 1:
	      $A($$GHCziList_init2);break;
	     case 2:
	      var YW=XW.v[0],ZW=XW.v[1];
	      $$GHCziList_init1.C([YW,ZW],function(aX){
	       $$GHCziBase_map.C([$$GHCziShow_intToDigit,aX],function(bX){
		switch(bX.g){
		case 1:
		 $A($$GHCziFloat$A);break;
		case 2:
		 var cX=bX.v[0],dX=bX.v[1];
		 $R(1,[cX,dX],"(,)");break;
		}
	       },[]);
	      },[]);break;
	     }
	    },[]);
	   },[]);break;
	  }
	 },[BW]);
	},[BW,JW],"ds5");
	var eX=$t(function(){
	 $M(MW,function(fX){
	  var gX=fX.v[1];
	  var hX=$t(function(){
	   $M(JW,function(iX){
	    var jX=iX.v[0];
	    var lX=dW.subtract(goog.math.Long.fromBits(1,0));
	    var kX=lX.add(jX);
	    $$GHCziShow_itos.J(kX,$$GHCziTypes_ZMZN);
	   },[dW]);
	  },[dW,JW],"sat");
	  var mX=$d(2,[$$GHCziFloat$B,hX],"sat");
	  $$GHCziBase_zpzp.J(gX,mX);
	 },[dW,JW]);
	},[dW,JW,MW],"a");
	$M(cW,function(nX){
	 switch(nX.g){
	 case 1:
	  var oX=$d(2,[$$GHCziFloat$y,eX],"sat");
	  var pX=$t(function(){
	   $M(MW,function(qX){
	    var rX=qX.v[0];
	    $A(rX);
	   },[]);
	  },[MW],"sat");
	  $R(2,[pX,oX],":");break;
	 case 2:
	  var sX=nX.v[0],tX=nX.v[1];
	  $M(sX,function(uX){
	   var vX=uX.v[0];
	   $M(vX,function(wX){
	    switch(wX.toString()){
	    case "0":
	     $M(tX,function(BX){
	      switch(BX.g){
	      case 1:
	       var CX=$t(function(){
		$M(xW,function(DX){
		 var EX=DX.v[0];
		 var FX=EX.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(FX.g){
		 case 1:
		  $$GHCziFloat$T.J($$GHCziFloat$P,EX);break;
		 case 2:
		  $A($$GHCziFloat$L);break;
		 }
		},[]);
	       },[xW],"sat");
	       var GX=$d(2,[$$GHCziFloat$y,CX],"sat");
	       $R(2,[$$GHCziFloat$C,GX],":");break;
	      case 2:
	       var HX=$d(2,[$$GHCziFloat$y,eX],"sat");
	       var IX=$t(function(){
		$M(MW,function(JX){
		 var KX=JX.v[0];
		 $A(KX);
		},[]);
	       },[MW],"sat");
	       $R(2,[IX,HX],":");break;
	      }
	     },[xW,MW,eX]);break;
	    default:
	     var xX=$d(2,[$$GHCziFloat$y,eX],"sat");
	     var yX=$t(function(){
	      $M(MW,function(zX){
	       var AX=zX.v[0];
	       $A(AX);
	      },[]);
	     },[MW],"sat");
	     $R(2,[yX,xX],":");
	    }
	   },[xW,MW,eX,tX]);
	  },[xW,MW,eX,tX]);break;
	 }
	},[xW,MW,eX]);break;
       }
      },[cW,dW]);
     },[SV],"$s$wdoFmt");
     var LX=$f(2,function(MX,NX){
      $M(SV,function(OX){
       switch(OX.g){
       case 1:
	var PX=NX.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(PX.g){
	case 1:
	 var QX=$t(function(){
	  $$GHCziBase_map.J($$GHCziShow_intToDigit,MX);
	 },[MX],"sat");
	 $$GHCziFloat$S.J(NX,$$GHCziTypes_ZMZN,QX);break;
	case 2:
	 var RX=$t(function(){
	  var aY=NX.negate();
	  var SX=aY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(SX.g){
	  case 1:
	   var TX=$t(function(){
	    $$GHCziBase_map.J($$GHCziShow_intToDigit,MX);
	   },[MX],"n");
	   var UX=$d(2,[$$GHCziFloat$C,TX],"lvl34");
	   var VX=$f(1,function(WX){
	    var XX=WX.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(XX.g){
	    case 1:
	     var YX=$t(function(){
	      var ZX=WX.subtract(goog.math.Long.fromBits(1,0));
	      VX.J(ZX);
	     },[WX,VX],"sat");
	     $R(2,[$$GHCziFloat$C,YX],":");break;
	    case 2:
	     $A(UX);break;
	    }
	   },[UX],"xs4");
	   VX.J(aY);break;
	  case 2:
	   $$GHCziBase_map.J($$GHCziShow_intToDigit,MX);break;
	  }
	 },[NX,MX],"sat");
	 $$GHCziCString_unpackAppendCStringzh.J("0.",RX);break;
	}break;
       case 2:
	var bY=OX.v[0];
	var cY=NX.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(cY.g){
	case 1:
	 var dY=$t(function(){
	  var tY=NX.negate();
	  var eY=tY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(eY.g){
	  case 1:
	   var fY=$d(2,[$$GHCziFloat_minExpt,MX],"lvl34");
	   var gY=$f(1,function(hY){
	    var iY=hY.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(iY.g){
	    case 1:
	     var jY=$t(function(){
	      var kY=hY.subtract(goog.math.Long.fromBits(1,0));
	      gY.J(kY);
	     },[hY,gY],"sat");
	     $R(2,[$$GHCziFloat_minExpt,jY],":");break;
	    case 2:
	     $A(fY);break;
	    }
	   },[fY],"xs4");
	   gY.C([tY],function(lY){
	    var mY=$t(function(){
	     $M(bY,function(nY){
	      var oY=nY.v[0];
	      var pY=oY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(pY.g){
	      case 1:
	       $A(nY);break;
	      case 2:
	       $A($$GHCziFloat_minExpt);break;
	      }
	     },[]);
	    },[bY],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,mY,lY],function(qY){
	     var rY=qY[0],sY=qY[1];
	     $$GHCziFloat$U.J(rY,sY);
	    },[]);
	   },[bY]);break;
	  case 2:
	   var uY=$t(function(){
	    $M(bY,function(vY){
	     var wY=vY.v[0];
	     var xY=wY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(xY.g){
	     case 1:
	      $A(vY);break;
	     case 2:
	      $A($$GHCziFloat_minExpt);break;
	     }
	    },[]);
	   },[bY],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,uY,MX],function(yY){
	    var zY=yY[0],AY=yY[1];
	    $$GHCziFloat$U.J(zY,AY);
	   },[]);break;
	  }
	 },[NX,MX,bY],"ds4");
	 var BY=$t(function(){
	  $M(dY,function(CY){
	   var DY=CY.v[1];
	   $M(DY,function(EY){
	    switch(EY.g){
	    case 1:
	     $R(1,[],"[]");break;
	    case 2:
	     $R(2,[$$GHCziFloat$y,EY],":");break;
	    }
	   },[]);
	  },[]);
	 },[dY],"sat");
	 var FY=$t(function(){
	  $M(dY,function(GY){
	   var HY=GY.v[0];
	   $A(HY);
	  },[]);
	 },[dY],"sat");
	 $R(2,[FY,BY],":");break;
	case 2:
	 var IY=$t(function(){
	  $M(bY,function(JY){
	   var KY=JY.v[0];
	   var LY=KY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(LY.g){
	   case 1:
	    var MY=KY.add(NX);
	    $R(1,[MY],"I#");break;
	   case 2:
	    $R(1,[NX],"I#");break;
	   }
	  },[NX]);
	 },[NX,bY],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,IY,MX],function(NY){
	  var OY=NY[0],PY=NY[1];
	  $M(OY,function(QY){
	   var RY=QY.v[0];
	   var cZ=NX.add(RY);
	   var SY=cZ.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(SY.g){
	   case 1:
	    var TY=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,PY);
	    },[PY],"sat");
	    $$GHCziList_zdwsplitAtzh.C([cZ,TY],function(UY){
	     var VY=UY[0],WY=UY[1];
	     $M(VY,function(XY){
	      switch(XY.g){
	      case 1:
	       var YY=$t(function(){
		$M(WY,function(ZY){
		 switch(ZY.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$y,ZY],":");break;
		 }
		},[]);
	       },[WY],"sat");
	       $R(2,[$$GHCziFloat$C,YY],":");break;
	      case 2:
	       var aZ=$t(function(){
		$M(WY,function(bZ){
		 switch(bZ.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$y,bZ],":");break;
		 }
		},[]);
	       },[WY],"sat");
	       $$GHCziBase_zpzp.J(XY,aZ);break;
	      }
	     },[WY]);
	    },[]);break;
	   case 2:
	    var dZ=$t(function(){
	     $$GHCziBase_map.C([$$GHCziShow_intToDigit,PY],function(eZ){
	      switch(eZ.g){
	      case 1:
	       $R(1,[],"[]");break;
	      case 2:
	       $R(2,[$$GHCziFloat$y,eZ],":");break;
	      }
	     },[]);
	    },[PY],"sat");
	    $R(2,[$$GHCziFloat$C,dZ],":");break;
	   }
	  },[NX,PY]);
	 },[NX]);break;
	}break;
       }
      },[NX,MX]);
     },[SV],"$s$wdoFmt1");
     var fZ=$f(3,function(gZ,hZ,iZ){
      $M(gZ,function(jZ){
       switch(jZ.g){
       case 1:
	$M(SV,function(kZ){
	 switch(kZ.g){
	 case 1:
	  $$GHCziBase_map.C([$$GHCziShow_intToDigit,hZ],function(lZ){
	   switch(lZ.g){
	   case 1:
	    $A($$GHCziFloat$O);break;
	   case 2:
	    var mZ=lZ.v[0],nZ=lZ.v[1];
	    $M(mZ,function(oZ){
	     var pZ=oZ.v[0];
	     var qZ=$t(function(){
	      $M(nZ,function(rZ){
	       switch(rZ.g){
	       case 1:
		var sZ=$t(function(){
		 var tZ=$t(function(){
		  $M(iZ,function(uZ){
		   var vZ=uZ.v[0];
		   var wZ=vZ.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),wZ,$$GHCziTypes_ZMZN);
		  },[]);
		 },[iZ],"sat");
		 $$GHCziCString_unpackAppendCStringzh.J(".0e",tZ);
		},[iZ],"sat");
		$R(2,[oZ,sZ],":");break;
	       case 2:
		var xZ=$t(function(){
		 var yZ=$t(function(){
		  $M(iZ,function(zZ){
		   var AZ=zZ.v[0];
		   var BZ=AZ.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_itos.J(BZ,$$GHCziTypes_ZMZN);
		  },[]);
		 },[iZ],"sat");
		 var CZ=$d(2,[$$GHCziFloat$B,yZ],"sat");
		 $$GHCziBase_zpzp.J(rZ,CZ);
		},[iZ,rZ],"sat");
		var DZ=$d(2,[$$GHCziFloat$y,xZ],"sat");
		$R(2,[oZ,DZ],":");break;
	       }
	      },[oZ,iZ]);
	     },[nZ,oZ,iZ],"$wfail");
	     $M(pZ,function(EZ){
	      switch(EZ.toString()){
	      case "0":
	       $M(nZ,function(FZ){
		switch(FZ.g){
		case 1:
		 $A($$GHCziFloat$z);break;
		case 2:
		 $A(qZ);break;
		}
	       },[nZ,oZ,iZ,qZ]);break;
	      default:
	       $A(qZ);
	      }
	     },[nZ,oZ,iZ,qZ]);
	    },[nZ,iZ]);break;
	   }
	  },[iZ]);break;
	 case 2:
	  var GZ=kZ.v[0];
	  var HZ=$t(function(){
	   $M(GZ,function(IZ){
	    var JZ=IZ.v[0];
	    var KZ=JZ.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(KZ.g){
	    case 1:
	     $A(IZ);break;
	    case 2:
	     $A($$GHCziFloat_zdfRealFracFloat2);break;
	    }
	   },[]);
	  },[GZ],"dec'");
	  var LZ=$t(function(){
	   var MZ=$t(function(){
	    $M(HZ,function(NZ){
	     var OZ=NZ.v[0];
	     var PZ=OZ.add(goog.math.Long.fromBits(1,0));
	     $R(1,[PZ],"I#");
	    },[]);
	   },[HZ],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,MZ,hZ],function(QZ){
	    var RZ=QZ[0],SZ=QZ[1];
	    $R(1,[RZ,SZ],"(,)");
	   },[]);
	  },[hZ,HZ],"ds4");
	  var TZ=$t(function(){
	   $M(LZ,function(UZ){
	    var VZ=UZ.v[0];
	    $A(VZ);
	   },[]);
	  },[LZ],"ei");
	  var WZ=$t(function(){
	   $M(TZ,function(XZ){
	    var YZ=XZ.v[0];
	    var ZZ=YZ.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(ZZ.g){
	    case 1:
	     $M(LZ,function(a10){
	      var b10=a10.v[1];
	      $$GHCziBase_map.C([$$GHCziShow_intToDigit,b10],function(c10){
	       switch(c10.g){
	       case 1:
		$A($$GHCziFloat$A);break;
	       case 2:
		var d10=c10.v[0],e10=c10.v[1];
		$R(1,[d10,e10],"(,)");break;
	       }
	      },[]);
	     },[]);break;
	    case 2:
	     $M(LZ,function(f10){
	      var g10=f10.v[1];
	      $M(g10,function(h10){
	       switch(h10.g){
	       case 1:
		$A($$GHCziList_init2);break;
	       case 2:
		var i10=h10.v[0],j10=h10.v[1];
		$$GHCziList_init1.C([i10,j10],function(k10){
		 $$GHCziBase_map.C([$$GHCziShow_intToDigit,k10],function(l10){
		  switch(l10.g){
		  case 1:
		   $A($$GHCziFloat$A);break;
		  case 2:
		   var m10=l10.v[0],n10=l10.v[1];
		   $R(1,[m10,n10],"(,)");break;
		  }
		 },[]);
		},[]);break;
	       }
	      },[]);
	     },[]);break;
	    }
	   },[LZ]);
	  },[LZ,TZ],"ds5");
	  var o10=$t(function(){
	   $M(WZ,function(p10){
	    var q10=p10.v[1];
	    var r10=$t(function(){
	     $M(iZ,function(s10){
	      var t10=s10.v[0];
	      $M(TZ,function(u10){
	       var v10=u10.v[0];
	       var x10=t10.subtract(goog.math.Long.fromBits(1,0));
	       var w10=x10.add(v10);
	       $$GHCziShow_itos.J(w10,$$GHCziTypes_ZMZN);
	      },[t10]);
	     },[TZ]);
	    },[iZ,TZ],"sat");
	    var y10=$d(2,[$$GHCziFloat$B,r10],"sat");
	    $$GHCziBase_zpzp.J(q10,y10);
	   },[iZ,TZ]);
	  },[iZ,TZ,WZ],"a");
	  $M(hZ,function(z10){
	   switch(z10.g){
	   case 1:
	    var A10=$d(2,[$$GHCziFloat$y,o10],"sat");
	    var B10=$t(function(){
	     $M(WZ,function(C10){
	      var D10=C10.v[0];
	      $A(D10);
	     },[]);
	    },[WZ],"sat");
	    $R(2,[B10,A10],":");break;
	   case 2:
	    var E10=z10.v[0],F10=z10.v[1];
	    $M(E10,function(G10){
	     var H10=G10.v[0];
	     $M(H10,function(I10){
	      switch(I10.toString()){
	      case "0":
	       $M(F10,function(N10){
		switch(N10.g){
		case 1:
		 var O10=$t(function(){
		  $M(HZ,function(P10){
		   var Q10=P10.v[0];
		   var R10=Q10.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(R10.g){
		   case 1:
		    $$GHCziFloat$T.J($$GHCziFloat$P,Q10);break;
		   case 2:
		    $A($$GHCziFloat$L);break;
		   }
		  },[]);
		 },[HZ],"sat");
		 var S10=$d(2,[$$GHCziFloat$y,O10],"sat");
		 $R(2,[$$GHCziFloat$C,S10],":");break;
		case 2:
		 var T10=$d(2,[$$GHCziFloat$y,o10],"sat");
		 var U10=$t(function(){
		  $M(WZ,function(V10){
		   var W10=V10.v[0];
		   $A(W10);
		  },[]);
		 },[WZ],"sat");
		 $R(2,[U10,T10],":");break;
		}
	       },[HZ,WZ,o10]);break;
	      default:
	       var J10=$d(2,[$$GHCziFloat$y,o10],"sat");
	       var K10=$t(function(){
		$M(WZ,function(L10){
		 var M10=L10.v[0];
		 $A(M10);
		},[]);
	       },[WZ],"sat");
	       $R(2,[K10,J10],":");
	      }
	     },[HZ,WZ,o10,F10]);
	    },[HZ,WZ,o10,F10]);break;
	   }
	  },[HZ,WZ,o10]);break;
	 }
	},[hZ,iZ]);break;
       case 2:
	$M(SV,function(X10){
	 switch(X10.g){
	 case 1:
	  $M(iZ,function(Y10){
	   var Z10=Y10.v[0];
	   var a11=Z10.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(a11.g){
	   case 1:
	    var b11=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,hZ);
	    },[hZ],"sat");
	    $$GHCziFloat$S.J(Z10,$$GHCziTypes_ZMZN,b11);break;
	   case 2:
	    var c11=$t(function(){
	     var l11=Z10.negate();
	     var d11=l11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(d11.g){
	     case 1:
	      var e11=$t(function(){
	       $$GHCziBase_map.J($$GHCziShow_intToDigit,hZ);
	      },[hZ],"n");
	      var f11=$d(2,[$$GHCziFloat$C,e11],"lvl34");
	      var g11=$f(1,function(h11){
	       var i11=h11.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(i11.g){
	       case 1:
		var j11=$t(function(){
		 var k11=h11.subtract(goog.math.Long.fromBits(1,0));
		 g11.J(k11);
		},[h11,g11],"sat");
		$R(2,[$$GHCziFloat$C,j11],":");break;
	       case 2:
		$A(f11);break;
	       }
	      },[f11],"xs4");
	      g11.J(l11);break;
	     case 2:
	      $$GHCziBase_map.J($$GHCziShow_intToDigit,hZ);break;
	     }
	    },[hZ,Z10],"sat");
	    $$GHCziCString_unpackAppendCStringzh.J("0.",c11);break;
	   }
	  },[hZ]);break;
	 case 2:
	  var m11=X10.v[0];
	  $M(iZ,function(n11){
	   var o11=n11.v[0];
	   var p11=o11.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(p11.g){
	   case 1:
	    var q11=$t(function(){
	     var G11=o11.negate();
	     var r11=G11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(r11.g){
	     case 1:
	      var s11=$d(2,[$$GHCziFloat_minExpt,hZ],"lvl34");
	      var t11=$f(1,function(u11){
	       var v11=u11.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(v11.g){
	       case 1:
		var w11=$t(function(){
		 var x11=u11.subtract(goog.math.Long.fromBits(1,0));
		 t11.J(x11);
		},[u11,t11],"sat");
		$R(2,[$$GHCziFloat_minExpt,w11],":");break;
	       case 2:
		$A(s11);break;
	       }
	      },[s11],"xs4");
	      t11.C([G11],function(y11){
	       var z11=$t(function(){
		$M(m11,function(A11){
		 var B11=A11.v[0];
		 var C11=B11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(C11.g){
		 case 1:
		  $A(A11);break;
		 case 2:
		  $A($$GHCziFloat_minExpt);break;
		 }
		},[]);
	       },[m11],"sat");
	       $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,z11,y11],function(D11){
		var E11=D11[0],F11=D11[1];
		$$GHCziFloat$U.J(E11,F11);
	       },[]);
	      },[m11]);break;
	     case 2:
	      var H11=$t(function(){
	       $M(m11,function(I11){
		var J11=I11.v[0];
		var K11=J11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(K11.g){
		case 1:
		 $A(I11);break;
		case 2:
		 $A($$GHCziFloat_minExpt);break;
		}
	       },[]);
	      },[m11],"sat");
	      $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,H11,hZ],function(L11){
	       var M11=L11[0],N11=L11[1];
	       $$GHCziFloat$U.J(M11,N11);
	      },[]);break;
	     }
	    },[hZ,o11,m11],"ds4");
	    var O11=$t(function(){
	     $M(q11,function(P11){
	      var Q11=P11.v[1];
	      $M(Q11,function(R11){
	       switch(R11.g){
	       case 1:
		$R(1,[],"[]");break;
	       case 2:
		$R(2,[$$GHCziFloat$y,R11],":");break;
	       }
	      },[]);
	     },[]);
	    },[q11],"sat");
	    var S11=$t(function(){
	     $M(q11,function(T11){
	      var U11=T11.v[0];
	      $A(U11);
	     },[]);
	    },[q11],"sat");
	    $R(2,[S11,O11],":");break;
	   case 2:
	    var V11=$t(function(){
	     $M(m11,function(W11){
	      var X11=W11.v[0];
	      var Y11=X11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Y11.g){
	      case 1:
	       var Z11=X11.add(o11);
	       $R(1,[Z11],"I#");break;
	      case 2:
	       $A(n11);break;
	      }
	     },[o11,n11]);
	    },[o11,m11,n11],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$v,V11,hZ],function(a12){
	     var b12=a12[0],c12=a12[1];
	     $M(b12,function(d12){
	      var e12=d12.v[0];
	      var p12=o11.add(e12);
	      var f12=p12.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(f12.g){
	      case 1:
	       var g12=$t(function(){
		$$GHCziBase_map.J($$GHCziShow_intToDigit,c12);
	       },[c12],"sat");
	       $$GHCziList_zdwsplitAtzh.C([p12,g12],function(h12){
		var i12=h12[0],j12=h12[1];
		$M(i12,function(k12){
		 switch(k12.g){
		 case 1:
		  var l12=$t(function(){
		   $M(j12,function(m12){
		    switch(m12.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$y,m12],":");break;
		    }
		   },[]);
		  },[j12],"sat");
		  $R(2,[$$GHCziFloat$C,l12],":");break;
		 case 2:
		  var n12=$t(function(){
		   $M(j12,function(o12){
		    switch(o12.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$y,o12],":");break;
		    }
		   },[]);
		  },[j12],"sat");
		  $$GHCziBase_zpzp.J(k12,n12);break;
		 }
		},[j12]);
	       },[]);break;
	      case 2:
	       var q12=$t(function(){
		$$GHCziBase_map.C([$$GHCziShow_intToDigit,c12],function(r12){
		 switch(r12.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$y,r12],":");break;
		 }
		},[]);
	       },[c12],"sat");
	       $R(2,[$$GHCziFloat$C,q12],":");break;
	      }
	     },[o11,c12]);
	    },[o11]);break;
	   }
	  },[hZ,m11]);break;
	 }
	},[hZ,iZ]);break;
       case 3:
	$M(iZ,function(s12){
	 var t12=s12.v[0];
	 var u12=t12.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(u12.g){
	 case 1:
	  var v12=t12.greaterThan(goog.math.Long.fromBits(7,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(v12.g){
	  case 1:
	   LX.J(hZ,t12);break;
	  case 2:
	   bW.J(hZ,t12);break;
	  }break;
	 case 2:
	  bW.J(hZ,t12);break;
	 }
	},[bW,LX,hZ]);break;
       }
      },[SV,bW,LX,hZ,iZ]);
     },[SV,bW,LX],"$wdoFmt");
     var w12=$t(function(){
      var A12= -TV;
      $$GHCziFloat_zdwzdsfloatToDigits.C([$$GHCziFloat_expts4,A12],function(x12){
       var y12=x12[0],z12=x12[1];
       fZ.J(RV,y12,z12);
      },[fZ,RV]);
     },[TV,fZ,RV],"a");
     var B12=TV<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(B12.g){
     case 1:
      var $ff=isFloatNegativeZero(TV);
      var C12=[$$GHCziPrim_realWorldzh,$ff];
      var D12=C12[1];
      $M(D12,function(E12){
       switch(E12.toString()){
       case "0":
	$$GHCziFloat_zdwzdsfloatToDigits.C([$$GHCziFloat_expts4,TV],function(F12){
	 var G12=F12[0],H12=F12[1];
	 fZ.J(RV,G12,H12);
	},[fZ,RV]);break;
       default:
	$R(2,[$$GHCziFloat_zdfShowDouble4,w12],":");
       }
      },[TV,fZ,RV,w12]);break;
     case 2:
      $R(2,[$$GHCziFloat_zdfShowDouble4,w12],":");break;
     }break;
    default:
     var aW=TV<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(aW.g){
     case 1:
      $A($$GHCziFloat$I);break;
     case 2:
      $A($$GHCziFloat$J);break;
     }
    }
   },[TV,SV,RV]);break;
  default:
   $A($$GHCziFloat$K);
  }
 },[TV,SV,RV]);
},[],"at libraries/base/GHC/Float.lhs:574:1");
var $$GHCziFloat_FFExponent=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/Float.lhs:571:17");
var $$GHCziFloat_FFFixed=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/Float.lhs:571:30");
var $$GHCziFloat_FFGeneric=$D(3,function(){
 $r([]);
},"at libraries/base/GHC/Float.lhs:571:40");
var $$GHCziFloat$b=$F(1,function(x1c){
 $M(x1c,function(y1c){
  var z1c=y1c.v[0];
  $M(z1c,function(A1c){
   switch(A1c.toString()){
   case "0":
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},"lvl1");
var $$GHCziFloat$e=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl4");
var $$GHCziFloat$f=$F(1,function(B1c){
 var C1c=B1c.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(C1c.g){
 case 1:
  var D1c=$t(function(){
   var E1c=B1c.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat$f.J(E1c);
  },[B1c],"sat");
  $R(2,[$$GHCziFloat_minExpt,D1c],":");break;
 case 2:
  $A($$GHCziFloat$e);break;
 }
},"xs");
var $$GHCziFloat$g=$D(1,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziFloat_maxExpt]);
},"lvl5");
var $$GHCziFloat$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Int");
},"lvl6");
var $$GHCziFloat$i=$F(1,function(F1c){
 var G1c=$d(1,[F1c],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,$$GHCziFloat$g,G1c,$$GHCziFloat$h);
},"lvl7");
var $$GHCziFloat$j=$D(1,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziFloat_maxExpt10]);
},"lvl8");
var $$GHCziFloat$k=$F(1,function(H1c){
 var I1c=$d(1,[H1c],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,$$GHCziFloat$j,I1c,$$GHCziFloat$h);
},"lvl9");
var $$GHCziFloat$n=$F(3,function(n1d,o1d,p1d){
 var q1d=$d(1,[o1d,p1d],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,q1d,n1d,$$GHCziFloat$h);
},"lvl10");
var $$GHCziFloat$o=$F(3,function(r1d,s1d,t1d){
 var u1d=$d(1,[s1d,t1d],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,u1d,r1d,$$GHCziFloat$h);
},"lvl11");
var $$GHCziFloat$p=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl12");
var $$GHCziFloat$q=$T(function(){
 $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble7,goog.math.Long.fromBits(52,0));
},"lvl13");
var $$GHCziFloat$r=$D(1,function(){
 $r([goog.math.Long.fromBits(4,0)]);
},"lvl14");
var $$GHCziFloat$s=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl15");
var $$GHCziFloat$t=$T(function(){
 $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble7,goog.math.Long.fromBits(23,0));
},"lvl16");
var $$GHCziFloat$v=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"at libraries/base/GHC/Float.lhs:580:3");
var $$GHCziFloat$w=$T(function(){
 $$GHCziCString_unpackCStringzh.J("formatRealFloat/doFmt/FFExponent: []");
},"lvl18");
var $$GHCziFloat$x=$T(function(){
 $$GHCziErr_error.J($$GHCziFloat$w);
},"lvl19");
var $$GHCziFloat$y=$D(1,function(){
 $r(["."]);
},"lvl20");
var $$GHCziFloat$z=$T(function(){
 $$GHCziCString_unpackCStringzh.J("0.0e0");
},"lvl21");
var $$GHCziFloat$A=$T(function(){
 $$ControlziExceptionziBase_irrefutPatError.J("libraries/base/GHC/Float.lhs:604:12-70|(d : ds')");
},"lvl22");
var $$GHCziFloat$B=$D(1,function(){
 $r(["e"]);
},"lvl23");
var $$GHCziFloat$C=$D(1,function(){
 $r(["0"]);
},"lvl24");
var $$GHCziFloat$D=$D(2,function(){
 $r([$$GHCziFloat$C,$$GHCziFloat$D]);
},"xs1");
var $$GHCziFloat$E=$D(2,function(){
 $r([$$GHCziFloat$C,$$GHCziTypes_ZMZN]);
},"lvl25");
var $$GHCziFloat$F=$F(2,function(v1d,w1d){
 $M(v1d,function(x1d){
  switch(x1d.toString()){
  case "0":
   $$GHCziList_reverse1.C([w1d,$$GHCziTypes_ZMZN],function(A1d){
    switch(A1d.g){
    case 1:
     var B1d=$d(2,[$$GHCziFloat$y,$$GHCziFloat$E],"sat");
     $R(2,[$$GHCziFloat$C,B1d],":");break;
    case 2:
     var C1d=$d(2,[$$GHCziFloat$y,$$GHCziFloat$E],"sat");
     $$GHCziBase_zpzp.J(A1d,C1d);break;
    }
   },[]);break;
  default:
   var y1d=$d(2,[$$GHCziFloat$C,w1d],"sat");
   var z1d=x1d.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat$F.J(z1d,y1d);
  }
 },[w1d]);
},"at libraries/base/GHC/Float.lhs:616:17");
var $$GHCziFloat$G=$F(3,function(D1d,E1d,F1d){
 $M(D1d,function(G1d){
  switch(G1d.toString()){
  case "0":
   $$GHCziList_reverse1.C([E1d,$$GHCziTypes_ZMZN],function(O1d){
    switch(O1d.g){
    case 1:
     var P1d=$t(function(){
      $M(F1d,function(Q1d){
       switch(Q1d.g){
       case 1:
	$A($$GHCziFloat$E);break;
       case 2:
	$A(Q1d);break;
       }
      },[]);
     },[F1d],"sat");
     var R1d=$d(2,[$$GHCziFloat$y,P1d],"sat");
     $R(2,[$$GHCziFloat$C,R1d],":");break;
    case 2:
     var S1d=$t(function(){
      $M(F1d,function(T1d){
       switch(T1d.g){
       case 1:
	$A($$GHCziFloat$E);break;
       case 2:
	$A(T1d);break;
       }
      },[]);
     },[F1d],"sat");
     var U1d=$d(2,[$$GHCziFloat$y,S1d],"sat");
     $$GHCziBase_zpzp.J(O1d,U1d);break;
    }
   },[F1d]);break;
  default:
   $M(F1d,function(H1d){
    switch(H1d.g){
    case 1:
     var I1d=$d(2,[$$GHCziFloat$C,E1d],"sat");
     var J1d=G1d.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$F.J(J1d,I1d);break;
    case 2:
     var K1d=H1d.v[0],L1d=H1d.v[1];
     var M1d=$d(2,[K1d,E1d],"sat");
     var N1d=G1d.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$G.J(N1d,M1d,L1d);break;
    }
   },[G1d,E1d]);
  }
 },[F1d,E1d]);
},"at libraries/base/GHC/Float.lhs:616:17");
var $$GHCziFloat$H=$T(function(){
 $$ControlziExceptionziBase_irrefutPatError.J("libraries/base/GHC/Float.lhs:632:11-64|d : ds'");
},"lvl26");
var $$GHCziFloat$I=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Infinity");
},"lvl27");
var $$GHCziFloat$J=$T(function(){
 $$GHCziCString_unpackCStringzh.J("-Infinity");
},"lvl28");
var $$GHCziFloat$K=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NaN");
},"lvl29");
var $$GHCziFloat$L=$T(function(){
 $$GHCziCString_unpackCStringzh.J("e0");
},"nil");
var $$GHCziFloat$M=$F(2,function(V1d,W1d){
 $M(V1d,function(X1d){
  switch(X1d.g){
  case 1:
   $A($$GHCziFloat$L);break;
  case 2:
   var Y1d=X1d.v[0],Z1d=X1d.v[1];
   var a1e=W1d.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(a1e.g){
   case 1:
    var b1e=$t(function(){
     var c1e=W1d.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$M.J(Z1d,c1e);
    },[W1d,Z1d],"sat");
    $R(2,[Y1d,b1e],":");break;
   case 2:
    $R(2,[Y1d,$$GHCziFloat$L],":");break;
   }break;
  }
 },[W1d]);
},"go");
var $$GHCziFloat$N=$F(2,function(d1e,e1e){
 $M(d1e,function(f1e){
  var g1e=f1e.v[0];
  var h1e=g1e.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(h1e.g){
  case 1:
   var i1e=$d(2,[$$GHCziFloat_minExpt,e1e],"sat");
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,i1e],function(j1e){
    switch(j1e.g){
    case 1:
     $A($$GHCziFloat$H);break;
    case 2:
     var k1e=j1e.v[0],l1e=j1e.v[1];
     $R(1,[k1e,l1e],"(,)");break;
    }
   },[]);break;
  case 2:
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,e1e],function(m1e){
    switch(m1e.g){
    case 1:
     $A($$GHCziFloat$H);break;
    case 2:
     var n1e=m1e.v[0],o1e=m1e.v[1];
     $R(1,[n1e,o1e],"(,)");break;
    }
   },[]);break;
  }
 },[e1e]);
},"$j");
var $$GHCziFloat$O=$T(function(){
 $$GHCziErr_error.J($$GHCziFloat$w);
},"lvl30");
var $$GHCziFloat$P=$D(2,function(){
 $r([$$GHCziFloat$C,$$GHCziFloat$P]);
},"xs2");
var $$GHCziFloat$Q=$D(2,function(){
 $r([$$GHCziFloat$C,$$GHCziTypes_ZMZN]);
},"lvl31");
var $$GHCziFloat$R=$F(2,function(p1e,q1e){
 $M(p1e,function(r1e){
  switch(r1e.toString()){
  case "0":
   $$GHCziList_reverse1.C([q1e,$$GHCziTypes_ZMZN],function(u1e){
    switch(u1e.g){
    case 1:
     var v1e=$d(2,[$$GHCziFloat$y,$$GHCziFloat$Q],"sat");
     $R(2,[$$GHCziFloat$C,v1e],":");break;
    case 2:
     var w1e=$d(2,[$$GHCziFloat$y,$$GHCziFloat$Q],"sat");
     $$GHCziBase_zpzp.J(u1e,w1e);break;
    }
   },[]);break;
  default:
   var s1e=$d(2,[$$GHCziFloat$C,q1e],"sat");
   var t1e=r1e.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat$R.J(t1e,s1e);
  }
 },[q1e]);
},"at libraries/base/GHC/Float.lhs:616:17");
var $$GHCziFloat$S=$F(3,function(x1e,y1e,z1e){
 $M(x1e,function(A1e){
  switch(A1e.toString()){
  case "0":
   $$GHCziList_reverse1.C([y1e,$$GHCziTypes_ZMZN],function(I1e){
    switch(I1e.g){
    case 1:
     var J1e=$t(function(){
      $M(z1e,function(K1e){
       switch(K1e.g){
       case 1:
	$A($$GHCziFloat$Q);break;
       case 2:
	$A(K1e);break;
       }
      },[]);
     },[z1e],"sat");
     var L1e=$d(2,[$$GHCziFloat$y,J1e],"sat");
     $R(2,[$$GHCziFloat$C,L1e],":");break;
    case 2:
     var M1e=$t(function(){
      $M(z1e,function(N1e){
       switch(N1e.g){
       case 1:
	$A($$GHCziFloat$Q);break;
       case 2:
	$A(N1e);break;
       }
      },[]);
     },[z1e],"sat");
     var O1e=$d(2,[$$GHCziFloat$y,M1e],"sat");
     $$GHCziBase_zpzp.J(I1e,O1e);break;
    }
   },[z1e]);break;
  default:
   $M(z1e,function(B1e){
    switch(B1e.g){
    case 1:
     var C1e=$d(2,[$$GHCziFloat$C,y1e],"sat");
     var D1e=A1e.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$R.J(D1e,C1e);break;
    case 2:
     var E1e=B1e.v[0],F1e=B1e.v[1];
     var G1e=$d(2,[E1e,y1e],"sat");
     var H1e=A1e.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$S.J(H1e,G1e,F1e);break;
    }
   },[A1e,y1e]);
  }
 },[z1e,y1e]);
},"at libraries/base/GHC/Float.lhs:616:17");
var $$GHCziFloat$T=$F(2,function(P1e,Q1e){
 $M(P1e,function(R1e){
  switch(R1e.g){
  case 1:
   $A($$GHCziFloat$L);break;
  case 2:
   var S1e=R1e.v[0],T1e=R1e.v[1];
   var U1e=Q1e.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(U1e.g){
   case 1:
    var V1e=$t(function(){
     var W1e=Q1e.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$T.J(T1e,W1e);
    },[Q1e,T1e],"sat");
    $R(2,[S1e,V1e],":");break;
   case 2:
    $R(2,[S1e,$$GHCziFloat$L],":");break;
   }break;
  }
 },[Q1e]);
},"go1");
var $$GHCziFloat$U=$F(2,function(X1e,Y1e){
 $M(X1e,function(Z1e){
  var a1f=Z1e.v[0];
  var b1f=a1f.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(b1f.g){
  case 1:
   var c1f=$d(2,[$$GHCziFloat_minExpt,Y1e],"sat");
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,c1f],function(d1f){
    switch(d1f.g){
    case 1:
     $A($$GHCziFloat$H);break;
    case 2:
     var e1f=d1f.v[0],f1f=d1f.v[1];
     $R(1,[e1f,f1f],"(,)");break;
    }
   },[]);break;
  case 2:
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,Y1e],function(g1f){
    switch(g1f.g){
    case 1:
     $A($$GHCziFloat$H);break;
    case 2:
     var h1f=g1f.v[0],i1f=g1f.v[1];
     $R(1,[h1f,i1f],"(,)");break;
    }
   },[]);break;
  }
 },[Y1e]);
},"$j1");
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
var $$GHCziForeignPtr_mallocForeignPtr3=$D(1,function(){
 $r([$$GHCziForeignPtr_NoFinalizzers,$$GHCziTypes_ZMZN]);
},"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_mallocForeignPtrBytes2=$t(function(){
 $$GHCziErr_error.J($$GHCziForeignPtr$f);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr_NoFinalizzers=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/ForeignPtr.hs:93:5");
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
var $$GHCziIOziEncodingziLatin1_zdwa=$f(8,function(j1,k1,l1,m1,n1,o1,p1,q1){
 $M(p1,function(r1){
  var s1=r1.v[0],t1=r1.v[1],u1=r1.v[2],v1=r1.v[3],w1=r1.v[4],x1=r1.v[5];
  var y1=$d(1,[j1,k1,l1,m1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var z1=$f(3,function(A1,B1,C1){
   var D1=B1.greaterThanOrEqual(v1)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(D1.g){
   case 1:
    var E1=A1.greaterThanOrEqual(o1)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(E1.g){
    case 1:
     var F1=$hs_readWideCharOffAddrzh(j1,A1,C1);
     var G1=F1[0],H1=F1[1];
     var O1=$hs_touchzh(k1,G1);
     var Q1=$hs_ordzh(H1);
     var P1=$hs_int2Wordzh(Q1);
     var N1=$hs_narrow8Wordzh(P1);
     var M1=$hs_plusAddrzh(s1,B1);
     var L1=$hs_writeWord8OffAddrzh(M1,goog.math.Long.fromBits(0,0),N1,O1);
     var K1=$hs_touchzh(t1,L1);
     var J1=B1.add(goog.math.Long.fromBits(1,0));
     var I1=A1.add(goog.math.Long.fromBits(1,0));
     z1.J(I1,J1,K1);break;
    case 2:
     var R1=$d(1,[s1,t1,u1,v1,w1,B1],"sat");
     var S1=$t(function(){
      var T1=A1.equals(o1)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(T1.g){
      case 1:
       $R(1,[j1,k1,l1,m1,A1,o1],"Buffer");break;
      case 2:
       $A(y1);break;
      }
     },[j1,k1,l1,m1,y1,A1,o1],"sat");
     var U1=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,S1,R1],"sat");
     $r([C1,U1]);break;
    }break;
   case 2:
    var V1=$d(1,[s1,t1,u1,v1,w1,B1],"sat");
    var W1=$t(function(){
     var X1=A1.equals(o1)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(X1.g){
     case 1:
      $R(1,[j1,k1,l1,m1,A1,o1],"Buffer");break;
     case 2:
      $A(y1);break;
     }
    },[j1,k1,l1,m1,y1,A1,o1],"sat");
    var Y1=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,W1,V1],"sat");
    $r([C1,Y1]);break;
   }
  },[j1,k1,l1,m1,y1,v1,o1,s1,t1,u1,w1],"$wa3");
  z1.J(n1,x1,q1);
 },[j1,k1,l1,m1,o1,n1,q1]);
},[],"in `base:GHC.IO.Encoding.Latin1'");
var $$GHCziIOziEncodingziLatin1_zdwa1=$f(8,function(j2,k2,l2,m2,n2,o2,p2,q2){
 $M(p2,function(r2){
  var s2=r2.v[0],t2=r2.v[1],u2=r2.v[2],v2=r2.v[3],w2=r2.v[4],x2=r2.v[5];
  var y2=$d(1,[j2,k2,l2,m2,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl");
  var z2=$f(3,function(A2,B2,C2){
   var D2=B2.greaterThanOrEqual(v2)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(D2.g){
   case 1:
    var E2=A2.greaterThanOrEqual(o2)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(E2.g){
    case 1:
     var P2=$hs_plusAddrzh(j2,A2);
     var F2=$hs_readWord8OffAddrzh(P2,goog.math.Long.fromBits(0,0),C2);
     var G2=F2[0],H2=F2[1];
     var N2=$hs_touchzh(k2,G2);
     var O2=$hs_word2Intzh(H2);
     var M2=$hs_chrzh(O2);
     var L2=$hs_writeWideCharOffAddrzh(s2,B2,M2,N2);
     var K2=$hs_touchzh(t2,L2);
     var J2=B2.add(goog.math.Long.fromBits(1,0));
     var I2=A2.add(goog.math.Long.fromBits(1,0));
     z2.J(I2,J2,K2);break;
    case 2:
     var Q2=$d(1,[s2,t2,u2,v2,w2,B2],"sat");
     var R2=$t(function(){
      var S2=A2.equals(o2)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(S2.g){
      case 1:
       $R(1,[j2,k2,l2,m2,A2,o2],"Buffer");break;
      case 2:
       $A(y2);break;
      }
     },[j2,k2,l2,m2,y2,A2,o2],"sat");
     var T2=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,R2,Q2],"sat");
     $r([C2,T2]);break;
    }break;
   case 2:
    var U2=$d(1,[s2,t2,u2,v2,w2,B2],"sat");
    var V2=$t(function(){
     var W2=A2.equals(o2)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(W2.g){
     case 1:
      $R(1,[j2,k2,l2,m2,A2,o2],"Buffer");break;
     case 2:
      $A(y2);break;
     }
    },[j2,k2,l2,m2,y2,A2,o2],"sat");
    var X2=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,V2,U2],"sat");
    $r([C2,X2]);break;
   }
  },[j2,k2,l2,m2,y2,v2,o2,s2,t2,u2,w2],"$wa3");
  z2.J(n2,x2,q2);
 },[j2,k2,l2,m2,o2,n2,q2]);
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
var $$GHCziIOziException_untangle1=$D(1,function(){
 $r([" "]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle4=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $M(c,function(d){
   switch(d.toString()){
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
var $$GHCziIOziException_untangle=$f(2,function(e,f){
 $$GHCziCString_unpackCStringUtf8zh.C([e],function(g){
  $$GHCziList_zdwspan.C([$$GHCziIOziException_untangle4,g],function(h){
   var i=h[0],j=h[1];
   var k=$f(2,function(l,m){
    var n=$t(function(){
     var o=$t(function(){
      var p=$t(function(){
       $$GHCziBase_zpzp.J(m,$$GHCziIOziException_untangle2);
      },[m],"sat");
      $$GHCziBase_zpzp.J(f,p);
     },[f,m],"sat");
     $$GHCziCString_unpackAppendCStringzh.J(": ",o);
    },[f,m],"sat");
    $$GHCziBase_zpzp.J(l,n);
   },[f],"$j");
   $M(j,function(q){
    switch(q.g){
    case 1:
     k.J(i,$$GHCziTypes_ZMZN);break;
    case 2:
     var r=q.v[0],s=q.v[1];
     $M(r,function(t){
      var u=t.v[0];
      $M(u,function(v){
       switch(v.toString()){
       case "|":
	var w=$d(2,[$$GHCziIOziException_untangle1,s],"sat");
	k.J(i,w);break;
       default:
	k.J(i,$$GHCziTypes_ZMZN);
       }
      },[f,k,i,s]);
     },[f,k,i,s]);break;
    }
   },[f,k,i]);
  },[f]);
 },[f]);
},[],"at libraries/base/GHC/IO/Exception.hs:327:1");
var $$GHCziIOziException_userError=$f(1,function(P){
 $R(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_UserError,$$GHCziTypes_ZMZN,P,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],"IOError");
},[],"at libraries/base/GHC/IO/Exception.hs:287:1");
var $$GHCziIOziException_zdfShowAsyncException9=$t(function(){
 $$GHCziCString_unpackCStringzh.J("stack overflow");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException8=$f(1,function(Q){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException9,Q);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException7=$t(function(){
 $$GHCziCString_unpackCStringzh.J("heap overflow");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException6=$f(1,function(Q){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException7,Q);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("thread killed");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException4=$f(1,function(Q){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException5,Q);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("user interrupt");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException2=$f(1,function(Q){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException3,Q);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncExceptionzuzdcshowsPrec=$f(2,function(G1,H1){
 $M(H1,function(I1){
  switch(I1.g){
  case 1:
   $A($$GHCziIOziException_zdfShowAsyncException8);break;
  case 2:
   $A($$GHCziIOziException_zdfShowAsyncException6);break;
  case 3:
   $A($$GHCziIOziException_zdfShowAsyncException4);break;
  case 4:
   $A($$GHCziIOziException_zdfShowAsyncException2);break;
  }
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException1=$f(1,function(J1){
 $M(J1,function(K1){
  switch(K1.g){
  case 1:
   $A($$GHCziIOziException_zdfShowAsyncException8);break;
  case 2:
   $A($$GHCziIOziException_zdfShowAsyncException6);break;
  case 3:
   $A($$GHCziIOziException_zdfShowAsyncException4);break;
  case 4:
   $A($$GHCziIOziException_zdfShowAsyncException2);break;
  }
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncExceptionzuzdcshowList=$f(2,function(L1,M1){
 $$GHCziShow_showListzuzu.J($$GHCziIOziException_zdfShowAsyncException1,L1,M1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncExceptionzuzdcshow=$f(1,function(N1){
 $M(N1,function(O1){
  switch(O1.g){
  case 1:
   $A($$GHCziIOziException_zdfShowAsyncException9);break;
  case 2:
   $A($$GHCziIOziException_zdfShowAsyncException7);break;
  case 3:
   $A($$GHCziIOziException_zdfShowAsyncException5);break;
  case 4:
   $A($$GHCziIOziException_zdfShowAsyncException3);break;
  }
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException=$D(1,function(){
 $r([$$GHCziIOziException_zdfShowAsyncExceptionzuzdcshowsPrec,$$GHCziIOziException_zdfShowAsyncExceptionzuzdcshow,$$GHCziIOziException_zdfShowAsyncExceptionzuzdcshowList]);
},"at libraries/base/GHC/IO/Exception.hs:153:10");
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
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdcfromException=$f(1,function(Ia){
 $M(Ia,function(Ja){
  var Ka=Ja.v[0],La=Ja.v[1];
  $$GHCziException_zdp1Exception.C([Ka,La],function(Ma){
   var Na=Ma.v[0],Oa=Ma.v[1];
   var Pa=$hs_eqWordzh(Na,goog.math.Long.fromBits(2363394409,315339024));
   switch(Pa.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var Qa=$hs_eqWordzh(Oa,goog.math.Long.fromBits(2156861182,4256135785));
    switch(Qa.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[La],"Just");break;
    }break;
   }
  },[La]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncException=$D(1,function(){
 $r([$$GHCziIOziException_zdfTypeableAsyncExceptionzuzdctypeOf,$$GHCziIOziException_zdfShowAsyncException,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdcfromException]);
},"at libraries/base/GHC/IO/Exception.hs:135:10");
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException=$f(1,function(Q){
 $R(1,[$$GHCziIOziException_zdfExceptionAsyncException,Q],"SomeException");
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
var $$GHCziIOziException_zdfTypeableExitCodezuzdctypeOf=$f(1,function(bb){
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
var $$GHCziIOziFD_stdin=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:309:1");
var $$GHCziIOziFD_stdout=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:310:1");
var $$GHCziIOziFD_stderr=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:311:1");
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
var $$GHCziIOziHandleziInternals_wantReadableHandle3=$f(1,function(R){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals$h,R);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_EOF,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_ioezuEOF=$f(1,function(Q){
 $$GHCziIOziHandleziInternals$i.J(Q);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:328:1");
var $$GHCziIOziHandleziInternals_wantSeekableHandle5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("handle is closed");
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandle4=$f(1,function(S){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals$j,S);
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
  var j4=$t(function(){
   $$GHCziIOziBufferedIO_flushWriteBuffer.J(b4);
  },[b4],"lvl18");
  var k4=$f(3,function(l4,m4,n4){
   $M(m4,function(o4){
    var p4=o4.v[3],q4=o4.v[4],r4=o4.v[5];
    var s4=$f(1,function(t4){
     j4.C([c4,o4,n4],function(u4){
      var v4=u4[0],w4=u4[1];
      var F4=$hs_writeMutVarzh(d4,w4,v4);
      $M(l4,function(x4){
       var y4=x4.v[0],z4=x4.v[1],A4=x4.v[2],B4=x4.v[3],C4=x4.v[4],D4=x4.v[5];
       var E4=C4.equals(D4)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(E4.g){
       case 1:
	$$GHCziIOziHandleziInternals_zdwa3.J(a4,y4,z4,A4,B4,C4,D4,F4);break;
       case 2:
	$r([F4,$$GHCziTuple_Z0T]);break;
       }
      },[a4,F4]);
     },[d4,l4,a4]);
    },[d4,j4,c4,o4,n4,l4,a4],"$w$j");
    var G4=p4.equals(r4)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(G4.g){
    case 1:
     $M(l4,function(H4){
      var I4=H4.v[0],J4=H4.v[1],K4=H4.v[2],L4=H4.v[3],M4=H4.v[4],N4=H4.v[5];
      var O4=$t(function(){
       $r(M4.equals(N4)?$$GHCziTypes_True:$$GHCziTypes_False);
      },[M4,N4],"lvl19");
      var P4=$f(1,function(Q4){
       $M(e4,function(R4){
	switch(R4.g){
	case 1:
	 s4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var T4=$hs_writeMutVarzh(d4,o4,n4);
	 $M(O4,function(S4){
	  switch(S4.g){
	  case 1:
	   $$GHCziIOziHandleziInternals_zdwa3.J(a4,I4,J4,K4,L4,M4,N4,T4);break;
	  case 2:
	   $r([T4,$$GHCziTuple_Z0T]);break;
	  }
	 },[a4,M4,N4,I4,J4,K4,L4,T4]);break;
	case 3:
	 var U4=R4.v[0];
	 $M(U4,function(V4){
	  switch(V4.g){
	  case 1:
	   var X4=$hs_writeMutVarzh(d4,o4,n4);
	   $M(O4,function(W4){
	    switch(W4.g){
	    case 1:
	     $$GHCziIOziHandleziInternals_zdwa3.J(a4,I4,J4,K4,L4,M4,N4,X4);break;
	    case 2:
	     $r([X4,$$GHCziTuple_Z0T]);break;
	    }
	   },[a4,M4,N4,I4,J4,K4,L4,X4]);break;
	  case 2:
	   var Y4=V4.v[0];
	   $M(Y4,function(Z4){
	    var a5=Z4.v[0];
	    var e5=r4.subtract(q4);
	    var b5=e5.greaterThanOrEqual(a5)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(b5.g){
	    case 1:
	     var d5=$hs_writeMutVarzh(d4,o4,n4);
	     $M(O4,function(c5){
	      switch(c5.g){
	      case 1:
	       $$GHCziIOziHandleziInternals_zdwa3.J(a4,I4,J4,K4,L4,M4,N4,d5);break;
	      case 2:
	       $r([d5,$$GHCziTuple_Z0T]);break;
	      }
	     },[a4,M4,N4,I4,J4,K4,L4,d5]);break;
	    case 2:
	     s4.J($$GHCziPrim_realWorldzh);break;
	    }
	   },[d4,j4,c4,o4,n4,l4,a4,s4,r4,M4,N4,O4,I4,J4,K4,L4,q4]);break;
	  }
	 },[d4,j4,c4,o4,n4,l4,a4,s4,r4,M4,N4,O4,I4,J4,K4,L4,q4]);break;
	}
       },[d4,j4,c4,o4,n4,l4,a4,s4,r4,M4,N4,O4,I4,J4,K4,L4,q4]);
      },[d4,o4,n4,a4,s4,r4,M4,N4,O4,e4,I4,J4,K4,L4,q4],"$w$j1");
      $M(O4,function(f5){
       switch(f5.g){
       case 1:
	var g5=M4.equals(X3)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(g5.g){
	case 1:
	 P4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 s4.J($$GHCziPrim_realWorldzh);break;
	}break;
       case 2:
	P4.J($$GHCziPrim_realWorldzh);break;
       }
      },[d4,j4,c4,o4,n4,l4,a4,s4,r4,M4,N4,O4,e4,I4,J4,K4,L4,q4,P4,X3]);
     },[d4,j4,c4,o4,n4,l4,a4,s4,r4,e4,q4,X3]);break;
    case 2:
     s4.J($$GHCziPrim_realWorldzh);break;
    }
   },[d4,j4,c4,n4,l4,a4,e4,X3]);
  },[d4,j4,c4,a4,e4,X3],"$wa4");
  $M(f4,function(h5){
   switch(h5.g){
   case 1:
    $$GHCziIOziEncodingziLatin1_zdwa.C([T3,U3,V3,W3,X3,Y3,i4,h4],function(i5){
     var j5=i5[0],k5=i5[1];
     $M(k5,function(l5){
      var m5=l5.v[1],n5=l5.v[2];
      k4.J(m5,n5,j5);
     },[d4,j4,c4,a4,e4,X3,k4,j5]);
    },[d4,j4,c4,a4,e4,X3,k4]);break;
   case 2:
    var o5=h5.v[0];
    $M(o5,function(p5){
     var q5=p5.v[0],r5=p5.v[1];
     var s5=$d(1,[T3,U3,V3,W3,X3,Y3],"sat");
     $$GHCziIOziHandleziInternals_zdwa.C([q5,r5,s5,i4,h4],function(t5){
      var u5=t5[0],v5=t5[1];
      $M(v5,function(w5){
       var x5=w5.v[0],y5=w5.v[1];
       k4.J(x5,y5,u5);
      },[d4,j4,c4,a4,e4,X3,k4,u5]);
     },[d4,j4,c4,a4,e4,X3,k4]);
    },[d4,j4,c4,a4,e4,X3,k4,T3,U3,V3,W3,Y3,i4,h4]);break;
   }
  },[d4,j4,c4,a4,e4,X3,k4,T3,U3,V3,W3,Y3,i4,h4]);
 },[Z3,X3,T3,U3,V3,W3,Y3]);
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
var $$GHCziIOziHandleziInternals_hLookAheadzuzuzdsa=$f(27,function(Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md){
 var nd=$hs_readMutVarzh(Sc,Mc);
 var od=nd[0],pd=nd[1];
 $M(pd,function(qd){
  var rd=qd.v[4],sd=qd.v[5];
  var td=$f(2,function(ud,vd){
   bd.C([vd],function(wd){
    var xd=wd[0],yd=wd[1];
    var zd=$d(1,[yd,ud],"sat");
    var Sd=$hs_writeMutVarzh(Uc,zd,xd);
    var Ad=$d(1,[hd,id,jd,kd,ld,md],"sat");
    $$GHCziIOziHandleziInternals_zdwa.C([Yc,Zc,ud,Ad,Sd],function(Bd){
     var Cd=Bd[0],Dd=Bd[1];
     $M(Dd,function(Ed){
      var Fd=Ed.v[0],Gd=Ed.v[1];
      var Kd=$hs_writeMutVarzh(Sc,Fd,Cd);
      $M(Gd,function(Hd){
       var Id=Hd.v[5];
       var Jd=Id.equals(md)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Jd.g){
       case 1:
	$r([Kd,Hd]);break;
       case 2:
	$M(Fd,function(Ld){
	 var Md=Ld.v[0],Nd=Ld.v[1],Od=Ld.v[2],Pd=Ld.v[3],Qd=Ld.v[4],Rd=Ld.v[5];
	 $$GHCziIOziHandleziInternals$r.J(Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,ad,bd,cd,dd,ed,fd,gd,Md,Nd,Od,Pd,Qd,Rd,hd,id,jd,kd,ld,md,Kd);
	},[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Kd,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd]);break;
       }
      },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Fd,Kd,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd]);
     },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Cd,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd]);
    },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd]);
   },[Sc,bd,Uc,ud,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd]);
  },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd],"a5");
  var Td=rd.equals(sd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Td.g){
  case 1:
   td.J(qd,od);break;
  case 2:
   $$GHCziIOziBufferedIO_fillReadBuffer.C([Oc,Qc,qd,od],function(Ud){
    var Vd=Ud[0],Wd=Ud[1];
    $M(Wd,function(Xd){
     var Yd=Xd.v[0],Zd=Xd.v[1];
     $M(Yd,function(ae){
      var be=ae.v[0];
      $M(be,function(ce){
       switch(ce.toString()){
       case "0":
	$$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,Vd],function(de){
	 var ee=de[0],fe=de[1];
	 td.J(fe,ee);
	},[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd,td]);break;
       default:
	td.J(Zd,Vd);
       }
      },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd,td,Zd,Vd]);
     },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd,td,Zd,Vd]);
    },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd,td,Vd]);
   },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd,td]);break;
  }
 },[Sc,bd,Uc,Yc,Zc,hd,id,jd,kd,ld,md,Nc,Oc,Pc,Qc,Rc,Tc,Vc,Wc,Xc,ad,cd,dd,ed,fd,gd,od]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_hLookAheadzu2=$f(3,function(ge,he,ie){
 $M(ge,function(je){
  var ke=je.v[0],le=je.v[1],me=je.v[2],ne=je.v[3],oe=je.v[4],pe=je.v[5],qe=je.v[6],re=je.v[7],se=je.v[8],te=je.v[9],ue=je.v[10],ve=je.v[11],we=je.v[12],xe=je.v[13],ye=je.v[14],ze=je.v[15];
  var Ae=$hs_readMutVarzh(pe,ie);
  var Be=Ae[0],Ce=Ae[1];
  $M(Ce,function(De){
   var Ee=De.v[0],Fe=De.v[1],Ge=De.v[2],He=De.v[3],Ie=De.v[4],Je=De.v[5];
   var Ke=$t(function(){
    $M(he,function(Le){
     var Me=Le.v[5];
     $R(1,[Me],"I#");
    },[]);
   },[he],"lvl18");
   var Ne=$f(7,function(Oe,Pe,Qe,Re,Se,Te,Ue){
    $M(ve,function(Ve){
     switch(Ve.g){
     case 1:
      var We=$d(1,[Pe,Qe,Re,Se,Te,Ue],"sat");
      var Xe=$d(1,[$$GHCziIOziHandleziInternals$p,We],"sat");
      var Gf=$hs_writeMutVarzh(re,Xe,Oe);
      $$GHCziIOziEncodingziLatin1_zdwa1.C([Pe,Qe,Re,Se,Te,Ue,he,Gf],function(Ye){
       var Ze=Ye[0],af=Ye[1];
       $M(af,function(bf){
	var cf=bf.v[1],df=bf.v[2];
	var kf=$hs_writeMutVarzh(pe,cf,Ze);
	$M(df,function(ef){
	 var ff=ef.v[5];
	 $M(Ke,function(gf){
	  var hf=gf.v[0];
	  var jf=ff.equals(hf)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(jf.g){
	  case 1:
	   $r([kf,ef]);break;
	  case 2:
	   $M(cf,function(lf){
	    var mf=lf.v[0],nf=lf.v[1],of=lf.v[2],pf=lf.v[3],qf=lf.v[4],rf=lf.v[5];
	    var vf=rf.subtract(qf);
	    var Ff=$hs_int2Wordzh(vf);
	    var Ef=$hs_plusAddrzh(mf,qf);
	    var $ff=memcpy(mf,Ef,Ff);
	    var sf=[kf,$ff];
	    var tf=sf[0];
	    var Df=$hs_touchzh(nf,tf);
	    var uf=$d(1,[mf,nf,of,pf,goog.math.Long.fromBits(0,0),vf],"sat");
	    $$GHCziIOziBufferedIO_fillReadBuffer.C([le,ne,uf,Df],function(wf){
	     var xf=wf[1];
	     $M(xf,function(yf){
	      var zf=yf.v[0];
	      $M(zf,function(Af){
	       var Bf=Af.v[0];
	       $M(Bf,function(Cf){
		switch(Cf.toString()){
		case "0":
		 $A($$GHCziIOziHandleziInternals$q);break;
		default:
		 $A($$GHCziIOziHandleziInternals$q);
		}
	       },[]);
	      },[]);
	     },[]);
	    },[]);
	   },[kf,le,ne]);break;
	  }
	 },[cf,ff,kf,ef,le,ne]);
	},[Ke,cf,kf,le,ne]);
       },[pe,Ke,Ze,le,ne]);
      },[pe,Ke,le,ne]);break;
     case 2:
      var Hf=Ve.v[0];
      $M(Hf,function(If){
       var Jf=If.v[0],Kf=If.v[1],Lf=If.v[2],Mf=If.v[3],Nf=If.v[4];
       Mf.C([Oe],function(Of){
	var Pf=Of[0],Qf=Of[1];
	var Rf=$d(1,[Pe,Qe,Re,Se,Te,Ue],"sat");
	var Sf=$d(1,[Qf,Rf],"sat");
	var ng=$hs_writeMutVarzh(re,Sf,Pf);
	var Tf=$d(1,[Pe,Qe,Re,Se,Te,Ue],"sat");
	$$GHCziIOziHandleziInternals_zdwa.C([Jf,Kf,Tf,he,ng],function(Uf){
	 var Vf=Uf[0],Wf=Uf[1];
	 $M(Wf,function(Xf){
	  var Yf=Xf.v[0],Zf=Xf.v[1];
	  var fg=$hs_writeMutVarzh(pe,Yf,Vf);
	  $M(Zf,function(ag){
	   var bg=ag.v[5];
	   $M(Ke,function(cg){
	    var dg=cg.v[0];
	    var eg=bg.equals(dg)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(eg.g){
	    case 1:
	     $r([fg,ag]);break;
	    case 2:
	     $M(Yf,function(gg){
	      var hg=gg.v[0],ig=gg.v[1],jg=gg.v[2],kg=gg.v[3],lg=gg.v[4],mg=gg.v[5];
	      $$GHCziIOziHandleziInternals$s.J(ke,le,me,ne,oe,pe,qe,re,se,te,ue,Jf,Kf,Lf,Mf,Nf,we,xe,ye,ze,hg,ig,jg,kg,lg,mg,he,fg);
	     },[pe,he,re,le,ne,Mf,Jf,Kf,fg,ke,me,oe,qe,se,te,ue,Lf,Nf,we,xe,ye,ze]);break;
	    }
	   },[pe,he,re,le,ne,Mf,Jf,Kf,Yf,bg,fg,ag,ke,me,oe,qe,se,te,ue,Lf,Nf,we,xe,ye,ze]);
	  },[pe,he,Ke,re,le,ne,Mf,Jf,Kf,Yf,fg,ke,me,oe,qe,se,te,ue,Lf,Nf,we,xe,ye,ze]);
	 },[pe,he,Ke,re,le,ne,Mf,Jf,Kf,Vf,ke,me,oe,qe,se,te,ue,Lf,Nf,we,xe,ye,ze]);
	},[pe,he,Ke,re,le,ne,Mf,Jf,Kf,ke,me,oe,qe,se,te,ue,Lf,Nf,we,xe,ye,ze]);
       },[pe,he,Ke,re,Pe,Qe,Re,Se,Te,Ue,le,ne,Mf,Jf,Kf,ke,me,oe,qe,se,te,ue,Lf,Nf,we,xe,ye,ze]);
      },[pe,he,Ke,re,Pe,Qe,Re,Se,Te,Ue,Oe,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze]);break;
     }
    },[pe,he,Ke,re,Pe,Qe,Re,Se,Te,Ue,Oe,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze]);
   },[pe,he,Ke,ve,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze],"$sa");
   var og=$f(2,function(pg,qg){
    $M(ve,function(rg){
     switch(rg.g){
     case 1:
      var sg=$d(1,[$$GHCziIOziHandleziInternals$p,pg],"sat");
      var hh=$hs_writeMutVarzh(re,sg,qg);
      $M(pg,function(tg){
       var ug=tg.v[0],vg=tg.v[1],wg=tg.v[2],xg=tg.v[3],yg=tg.v[4],zg=tg.v[5];
       $$GHCziIOziEncodingziLatin1_zdwa1.C([ug,vg,wg,xg,yg,zg,he,hh],function(Ag){
	var Bg=Ag[0],Cg=Ag[1];
	$M(Cg,function(Dg){
	 var Eg=Dg.v[1],Fg=Dg.v[2];
	 var Lg=$hs_writeMutVarzh(pe,Eg,Bg);
	 $M(Fg,function(Gg){
	  var Hg=Gg.v[5];
	  $M(Ke,function(Ig){
	   var Jg=Ig.v[0];
	   var Kg=Hg.equals(Jg)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Kg.g){
	   case 1:
	    $r([Lg,Gg]);break;
	   case 2:
	    $M(Eg,function(Mg){
	     var Ng=Mg.v[0],Og=Mg.v[1],Pg=Mg.v[2],Qg=Mg.v[3],Rg=Mg.v[4],Sg=Mg.v[5];
	     var Wg=Sg.subtract(Rg);
	     var gh=$hs_int2Wordzh(Wg);
	     var fh=$hs_plusAddrzh(Ng,Rg);
	     var $ff=memcpy(Ng,fh,gh);
	     var Tg=[Lg,$ff];
	     var Ug=Tg[0];
	     var eh=$hs_touchzh(Og,Ug);
	     var Vg=$d(1,[Ng,Og,Pg,Qg,goog.math.Long.fromBits(0,0),Wg],"sat");
	     $$GHCziIOziBufferedIO_fillReadBuffer.C([le,ne,Vg,eh],function(Xg){
	      var Yg=Xg[1];
	      $M(Yg,function(Zg){
	       var ah=Zg.v[0];
	       $M(ah,function(bh){
		var ch=bh.v[0];
		$M(ch,function(dh){
		 switch(dh.toString()){
		 case "0":
		  $A($$GHCziIOziHandleziInternals$q);break;
		 default:
		  $A($$GHCziIOziHandleziInternals$q);
		 }
		},[]);
	       },[]);
	      },[]);
	     },[]);
	    },[le,ne,Lg]);break;
	   }
	  },[le,ne,Eg,Hg,Lg,Gg]);
	 },[Ke,le,ne,Eg,Lg]);
	},[pe,Ke,le,ne,Bg]);
       },[pe,Ke,le,ne]);
      },[pe,he,Ke,le,ne,hh]);break;
     case 2:
      var ih=rg.v[0];
      $M(ih,function(jh){
       var kh=jh.v[0],lh=jh.v[1],mh=jh.v[2],nh=jh.v[3],oh=jh.v[4];
       nh.C([qg],function(ph){
	var qh=ph[0],rh=ph[1];
	var sh=$d(1,[rh,pg],"sat");
	var Mh=$hs_writeMutVarzh(re,sh,qh);
	$$GHCziIOziHandleziInternals_zdwa.C([kh,lh,pg,he,Mh],function(th){
	 var uh=th[0],vh=th[1];
	 $M(vh,function(wh){
	  var xh=wh.v[0],yh=wh.v[1];
	  var Eh=$hs_writeMutVarzh(pe,xh,uh);
	  $M(yh,function(zh){
	   var Ah=zh.v[5];
	   $M(Ke,function(Bh){
	    var Ch=Bh.v[0];
	    var Dh=Ah.equals(Ch)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Dh.g){
	    case 1:
	     $r([Eh,zh]);break;
	    case 2:
	     $M(xh,function(Fh){
	      var Gh=Fh.v[0],Hh=Fh.v[1],Ih=Fh.v[2],Jh=Fh.v[3],Kh=Fh.v[4],Lh=Fh.v[5];
	      $$GHCziIOziHandleziInternals$s.J(ke,le,me,ne,oe,pe,qe,re,se,te,ue,kh,lh,mh,nh,oh,we,xe,ye,ze,Gh,Hh,Ih,Jh,Kh,Lh,he,Eh);
	     },[pe,he,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,nh,kh,lh,Eh,mh,oh]);break;
	    }
	   },[pe,he,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,nh,kh,lh,xh,Ah,Eh,zh,mh,oh]);
	  },[pe,he,Ke,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,nh,kh,lh,xh,Eh,mh,oh]);
	 },[pe,he,Ke,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,nh,kh,lh,uh,mh,oh]);
	},[pe,he,Ke,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,nh,kh,lh,mh,oh]);
       },[pe,he,Ke,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,pg,nh,kh,lh,mh,oh]);
      },[pe,he,Ke,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,pg,qg]);break;
     }
    },[pe,he,Ke,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,pg,qg]);
   },[pe,he,Ke,ve,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze],"a5");
   var Nh=Ie.equals(Je)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Nh.g){
   case 1:
    Ne.J(Be,Ee,Fe,Ge,He,Ie,Je);break;
   case 2:
    $$GHCziIOziBufferedIO_fillReadBuffer.C([le,ne,De,Be],function(Oh){
     var Ph=Oh[0],Qh=Oh[1];
     $M(Qh,function(Rh){
      var Sh=Rh.v[0],Th=Rh.v[1];
      $M(Sh,function(Uh){
       var Vh=Uh.v[0];
       $M(Vh,function(Wh){
	switch(Wh.toString()){
	case "0":
	 $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,Ph],function(Xh){
	  var Yh=Xh[0],Zh=Xh[1];
	  og.J(Zh,Yh);
	 },[pe,he,Ke,ve,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,og]);break;
	default:
	 og.J(Th,Ph);
	}
       },[pe,he,Ke,ve,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,og,Th,Ph]);
      },[pe,he,Ke,ve,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,og,Th,Ph]);
     },[pe,he,Ke,ve,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,og,Ph]);
    },[pe,he,Ke,ve,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,og]);break;
   }
  },[pe,he,ve,re,le,ne,ke,me,oe,qe,se,te,ue,we,xe,ye,ze,Be]);
 },[ie,he]);
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
var $$GHCziIOziHandleziInternals_wantReadableHandlezu2=$f(5,function(Sn,Tn,Un,Vn,Wn){
 var Xn=$f(2,function(Yn,Zn){
  $$GHCziIOziHandleziInternals_wantReadableHandle2.C([Vn,Yn,Zn],function(ao){
   var bo=ao[0],co=ao[1];
   var eo=$d(1,[Yn,co],"sat");
   $r([bo,eo]);
  },[Yn]);
 },[Vn],"sat");
 $$GHCziIOziHandleziInternals_wantReadableHandle5.J(Sn,Tn,Un,Xn,Wn);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandlezu1=$f(4,function(fo,go,ho,io){
 $M(go,function(jo){
  switch(jo.g){
  case 1:
   var ko=jo.v[1];
   var lo=$d(1,[ko],"sat");
   $$GHCziIOziHandleziInternals_wantReadableHandlezu2.J(fo,jo,lo,ho,io);break;
  case 2:
   var mo=jo.v[1];
   var no=$d(1,[mo],"sat");
   $$GHCziIOziHandleziInternals_wantReadableHandlezu2.J(fo,jo,no,ho,io);break;
  }
 },[fo,ho,io]);
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
var $$GHCziIOziHandleziInternals$i=$F(1,function(qt){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,qt);
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
var $$GHCziIOziHandleziInternals$r=$F(33,function(rt,st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Jt,Kt,Lt,Mt,Nt,Ot,Pt,Qt,Rt,St,Tt,Ut,Vt,Wt,Xt){
 var bu=Qt.subtract(Pt);
 var fv=$hs_int2Wordzh(bu);
 var ev=$hs_plusAddrzh(Lt,Pt);
 var $ff=memcpy(Lt,ev,fv);
 var Yt=[Xt,$ff];
 var Zt=Yt[0];
 var dv=$hs_touchzh(Mt,Zt);
 var au=$d(1,[Lt,Mt,Nt,Ot,goog.math.Long.fromBits(0,0),bu],"sat");
 $$GHCziIOziBufferedIO_fillReadBuffer.C([st,ut,au,dv],function(cu){
  var du=cu[0],eu=cu[1];
  $M(eu,function(fu){
   var gu=fu.v[0],hu=fu.v[1];
   $M(gu,function(iu){
    var ju=iu.v[0];
    $M(ju,function(ku){
     switch(ku.toString()){
     case "0":
      var Nu=$d(1,[Rt,St,Tt,Ut,Vt,Wt],"sat");
      Dt.C([hu,Nu,du],function(Ou){
       var Pu=Ou[0],Qu=Ou[1];
       $M(Qu,function(Ru){
	var Su=Ru.v[0],Tu=Ru.v[1];
	var cv=$hs_writeMutVarzh(wt,Su,Pu);
	$M(Tu,function(Uu){
	 var Vu=Uu.v[0],Wu=Uu.v[1],Xu=Uu.v[2],Yu=Uu.v[3],Zu=Uu.v[4],av=Uu.v[5];
	 var bv=av.equals(Wt)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(bv.g){
	 case 1:
	  $r([cv,Uu]);break;
	 case 2:
	  $$GHCziIOziHandleziInternals_hLookAheadzuzuzdsa.J(cv,rt,st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Jt,Kt,Vu,Wu,Xu,Yu,Zu,av);break;
	 }
	},[st,ut,Ft,yt,Ct,Dt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt,cv]);
       },[st,ut,Ft,yt,Ct,Dt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt,Pu]);
      },[st,ut,Ft,yt,Ct,Dt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);break;
     default:
      Ft.C([du],function(lu){
       var mu=lu[0],nu=lu[1];
       var ou=$d(1,[nu,hu],"sat");
       var Mu=$hs_writeMutVarzh(yt,ou,mu);
       var pu=$d(1,[Rt,St,Tt,Ut,Vt,Wt],"sat");
       $$GHCziIOziHandleziInternals_zdwa.C([Ct,Dt,hu,pu,Mu],function(qu){
	var ru=qu[0],su=qu[1];
	$M(su,function(tu){
	 var uu=tu.v[0],vu=tu.v[1];
	 var Eu=$hs_writeMutVarzh(wt,uu,ru);
	 $M(vu,function(wu){
	  var xu=wu.v[0],yu=wu.v[1],zu=wu.v[2],Au=wu.v[3],Bu=wu.v[4],Cu=wu.v[5];
	  var Du=Wt.equals(Cu)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Du.g){
	  case 1:
	   $r([Eu,wu]);break;
	  case 2:
	   $M(uu,function(Fu){
	    var Gu=Fu.v[0],Hu=Fu.v[1],Iu=Fu.v[2],Ju=Fu.v[3],Ku=Fu.v[4],Lu=Fu.v[5];
	    $$GHCziIOziHandleziInternals$r.J(rt,st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Jt,Kt,Gu,Hu,Iu,Ju,Ku,Lu,xu,yu,zu,Au,Bu,Cu,Eu);
	   },[st,ut,Ft,yt,Ct,Dt,wt,Cu,Eu,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt,xu,yu,zu,Au,Bu]);break;
	  }
	 },[st,ut,Ft,yt,Ct,Dt,Wt,wt,uu,Eu,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);
	},[st,ut,Ft,yt,Ct,Dt,Wt,wt,ru,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);
       },[st,ut,Ft,yt,Ct,Dt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);
      },[st,ut,Ft,yt,hu,Ct,Dt,Rt,St,Tt,Ut,Vt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);
     }
    },[st,ut,du,Ft,yt,hu,Ct,Dt,Rt,St,Tt,Ut,Vt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);
   },[st,ut,du,Ft,yt,hu,Ct,Dt,Rt,St,Tt,Ut,Vt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);
  },[st,ut,du,Ft,yt,Ct,Dt,Rt,St,Tt,Ut,Vt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);
 },[st,ut,Ft,yt,Ct,Dt,Rt,St,Tt,Ut,Vt,Wt,wt,rt,tt,vt,xt,zt,At,Bt,Et,Gt,Ht,It,Jt,Kt]);
},"$s$wa");
var $$GHCziIOziHandleziInternals$s=$F(28,function(gv,hv,iv,jv,kv,lv,mv,nv,ov,pv,qv,rv,sv,tv,uv,vv,wv,xv,yv,zv,Av,Bv,Cv,Dv,Ev,Fv,Gv,Hv){
 var Lv=Fv.subtract(Ev);
 var Rw=$hs_int2Wordzh(Lv);
 var Qw=$hs_plusAddrzh(Av,Ev);
 var $ff=memcpy(Av,Qw,Rw);
 var Iv=[Hv,$ff];
 var Jv=Iv[0];
 var Pw=$hs_touchzh(Bv,Jv);
 var Kv=$d(1,[Av,Bv,Cv,Dv,goog.math.Long.fromBits(0,0),Lv],"sat");
 $$GHCziIOziBufferedIO_fillReadBuffer.C([hv,jv,Kv,Pw],function(Mv){
  var Nv=Mv[0],Ov=Mv[1];
  $M(Ov,function(Pv){
   var Qv=Pv.v[0],Rv=Pv.v[1];
   $M(Qv,function(Sv){
    var Tv=Sv.v[0];
    $M(Tv,function(Uv){
     switch(Uv.toString()){
     case "0":
      sv.C([Rv,Gv,Nv],function(yw){
       var zw=yw[0],Aw=yw[1];
       $M(Aw,function(Bw){
	var Cw=Bw.v[0],Dw=Bw.v[1];
	var Ow=$hs_writeMutVarzh(lv,Cw,zw);
	$M(Dw,function(Ew){
	 var Fw=Ew.v[0],Gw=Ew.v[1],Hw=Ew.v[2],Iw=Ew.v[3],Jw=Ew.v[4],Kw=Ew.v[5];
	 $M(Gv,function(Lw){
	  var Mw=Lw.v[5];
	  var Nw=Kw.equals(Mw)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Nw.g){
	  case 1:
	   $r([Ow,Ew]);break;
	  case 2:
	   $$GHCziIOziHandleziInternals_hLookAheadzuzuzdsa.J(Ow,gv,hv,iv,jv,kv,lv,mv,nv,ov,pv,qv,rv,sv,tv,uv,vv,wv,xv,yv,zv,Fw,Gw,Hw,Iw,Jw,Kw);break;
	  }
	 },[hv,jv,uv,nv,rv,sv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv,Kw,Ow,Ew,Fw,Gw,Hw,Iw,Jw]);
	},[hv,jv,uv,nv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv,Ow]);
       },[hv,jv,uv,nv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv,zw]);
      },[hv,jv,uv,nv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);break;
     default:
      uv.C([Nv],function(Vv){
       var Wv=Vv[0],Xv=Vv[1];
       var Yv=$d(1,[Xv,Rv],"sat");
       var xw=$hs_writeMutVarzh(nv,Yv,Wv);
       $$GHCziIOziHandleziInternals_zdwa.C([rv,sv,Rv,Gv,xw],function(Zv){
	var aw=Zv[0],bw=Zv[1];
	$M(bw,function(cw){
	 var dw=cw.v[0],ew=cw.v[1];
	 var pw=$hs_writeMutVarzh(lv,dw,aw);
	 $M(Gv,function(fw){
	  var gw=fw.v[5];
	  $M(ew,function(hw){
	   var iw=hw.v[0],jw=hw.v[1],kw=hw.v[2],lw=hw.v[3],mw=hw.v[4],nw=hw.v[5];
	   var ow=gw.equals(nw)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(ow.g){
	   case 1:
	    $r([pw,hw]);break;
	   case 2:
	    $M(dw,function(qw){
	     var rw=qw.v[0],sw=qw.v[1],tw=qw.v[2],uw=qw.v[3],vw=qw.v[4],ww=qw.v[5];
	     $$GHCziIOziHandleziInternals$r.J(gv,hv,iv,jv,kv,lv,mv,nv,ov,pv,qv,rv,sv,tv,uv,vv,wv,xv,yv,zv,rw,sw,tw,uw,vw,ww,iw,jw,kw,lw,mw,nw,pw);
	    },[hv,jv,uv,nv,rv,sv,lv,nw,pw,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv,iw,jw,kw,lw,mw]);break;
	   }
	  },[hv,jv,uv,nv,rv,sv,lv,dw,gw,pw,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
	 },[hv,jv,uv,nv,rv,sv,lv,dw,ew,pw,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
	},[hv,jv,uv,nv,rv,sv,Gv,lv,aw,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
       },[hv,jv,uv,nv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
      },[hv,jv,uv,nv,Rv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
     }
    },[hv,jv,Nv,uv,nv,Rv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
   },[hv,jv,Nv,uv,nv,Rv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
  },[hv,jv,Nv,uv,nv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
 },[hv,jv,uv,nv,rv,sv,Gv,lv,gv,iv,kv,mv,ov,pv,qv,tv,vv,wv,xv,yv,zv]);
},"$s$wa1");
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
     },[j2,i2,g2,h2],"a3");
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
var $$GHCziIOziHandleziText_hGetLinezuzdszdwa=$f(24,function(E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,U8,V8,W8,X8,Y8,Z8,a9,b9){
 var c9=$d(1,[Z8],"w");
 var d9=$d(1,[$$GHCziTypes_False,c9],"lvl18");
 var e9=$f(4,function(f9,g9,h9,i9){
  var j9=f9.equals(Z8)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(j9.g){
  case 1:
   var k9=$hs_readWideCharOffAddrzh(h9,f9,g9);
   var l9=k9[0],m9=k9[1];
   var p9=$hs_touchzh(i9,l9);
   $M(m9,function(n9){
    switch(n9.toString()){
    case "\n":
     var q9=$d(1,[f9],"sat");
     var r9=$d(1,[$$GHCziTypes_True,q9],"sat");
     $r([p9,r9]);break;
    default:
     var o9=f9.add(goog.math.Long.fromBits(1,0));
     e9.J(o9,p9,h9,i9);
    }
   },[f9,h9,i9,e9,p9]);break;
  case 2:
   $r([g9,d9]);break;
  }
 },[Z8,d9],"$s$wa2");
 e9.C([Y8,b9,U8,V8],function(s9){
  var t9=s9[0],u9=s9[1];
  $M(u9,function(v9){
   var w9=v9.v[0],x9=v9.v[1];
   var y9=$f(3,function(z9,A9,B9){
    $M(w9,function(C9){
     switch(C9.g){
     case 1:
      var D9=$t(function(){
       var E9=B9.equals(Z8)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(E9.g){
       case 1:
	$R(1,[U8,V8,W8,X8,B9,Z8],"Buffer");break;
       case 2:
	$R(1,[U8,V8,W8,X8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
       }
      },[Z8,U8,V8,B9,W8,X8],"buf1");
      var F9=$d(1,[E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8],"sat");
      $$GHCziIOziHandleziText$c.C([F9,D9,z9],function(G9){
       var H9=G9[0],I9=G9[1];
       $M(I9,function(J9){
	switch(J9.g){
	case 1:
	 var K9=$t(function(){
	  $M(D9,function(L9){
	   var M9=L9.v[0],N9=L9.v[1],O9=L9.v[2],P9=L9.v[3];
	   $R(1,[M9,N9,O9,P9,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	  },[]);
	 },[D9],"sat");
	 var Z9=$hs_writeMutVarzh(M8,K9,H9);
	 var Q9=$d(2,[A9,a9],"sat");
	 var R9=$t(function(){
	  $M(D9,function(S9){
	   var T9=S9.v[4],U9=S9.v[5];
	   var V9=T9.equals(U9)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(V9.g){
	   case 1:
	    $A($$GHCziIOziHandleziText$l);break;
	   case 2:
	    $R(1,[],"[]");break;
	   }
	  },[]);
	 },[D9],"sat");
	 var W9=$d(2,[R9,Q9],"sat");
	 $$GHCziList_reverse1.C([W9,$$GHCziTypes_ZMZN],function(X9){
	  $$GHCziIOziHandleziText$n.C([X9],function(Y9){
	   switch(Y9.g){
	   case 1:
	    $$GHCziIOziHandleziInternals_ioezuEOF.J(Z9);break;
	   case 2:
	    $r([Z9,Y9]);break;
	   }
	  },[Z9]);
	 },[Z9]);break;
	case 2:
	 var aa=J9.v[0];
	 $M(aa,function(ba){
	  var ca=ba.v[0],da=ba.v[1],ea=ba.v[2],fa=ba.v[3],ga=ba.v[4],ha=ba.v[5];
	  var ia=$d(2,[A9,a9],"sat");
	  $$GHCziIOziHandleziText_hGetLinezuzdszdwa.J(E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,ca,da,ea,fa,ga,ha,ia,H9);
	 },[E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,H9,A9,a9]);break;
	}
       },[D9,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,H9,A9,a9]);
      },[D9,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,A9,a9]);break;
     case 2:
      var ja=$t(function(){
       $M(x9,function(ka){
	var la=ka.v[0];
	var na=la.add(goog.math.Long.fromBits(1,0));
	var ma=na.equals(Z8)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(ma.g){
	case 1:
	 $R(1,[U8,V8,W8,X8,na,Z8],"Buffer");break;
	case 2:
	 $R(1,[U8,V8,W8,X8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	}
       },[Z8,U8,V8,W8,X8]);
      },[Z8,U8,V8,W8,X8,x9],"sat");
      var ra=$hs_writeMutVarzh(M8,ja,z9);
      var oa=$t(function(){
       var pa=$d(2,[A9,a9],"sat");
       $$GHCziList_reverse1.C([pa,$$GHCziTypes_ZMZN],function(qa){
	$$GHCziIOziHandleziText$m.J(qa);
       },[]);
      },[A9,a9],"sat");
      $r([ra,oa]);break;
     }
    },[Z8,U8,V8,B9,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,z9,A9,a9,x9]);
   },[Z8,U8,V8,w9,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,a9,x9],"$s$w$j");
   $M(R8,function(sa){
    switch(sa.g){
    case 1:
     $M(x9,function(ta){
      var ua=ta.v[0];
      var va=Y8.equals(ua)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(va.g){
      case 1:
       var wa=$f(3,function(xa,ya,za){
	var Aa=ya.lessThan(Y8)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Aa.g){
	case 1:
	 var Ba=$hs_readWideCharOffAddrzh(U8,ya,za);
	 var Ca=Ba[0],Da=Ba[1];
	 var Ga=ya.subtract(goog.math.Long.fromBits(1,0));
	 var Ea=$d(1,[Da],"sat");
	 var Fa=$d(2,[Ea,xa],"sat");
	 wa.J(Fa,Ga,Ca);break;
	case 2:
	 $r([za,xa]);break;
	}
       },[Y8,U8],"$wa8");
       var La=ua.subtract(goog.math.Long.fromBits(1,0));
       wa.C([$$GHCziTypes_ZMZN,La,t9],function(Ha){
	var Ia=Ha[0],Ja=Ha[1];
	var Ka=$hs_touchzh(V8,Ia);
	y9.J(Ka,Ja,ua);
       },[Z8,U8,V8,w9,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,a9,x9,y9,ua]);break;
      case 2:
       y9.J(t9,$$GHCziTypes_ZMZN,ua);break;
      }
     },[Z8,Y8,U8,V8,w9,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,a9,x9,y9,t9]);break;
    case 2:
     $M(x9,function(Ma){
      var Na=Ma.v[0];
      $$GHCziIOziHandleziText$g.C([U8,V8,Y8,Na,$$GHCziTypes_ZMZN,t9],function(Oa){
       var Pa=Oa[0],Qa=Oa[1];
       $M(Qa,function(Ra){
	var Sa=Ra.v[0],Ta=Ra.v[1];
	$M(w9,function(Ua){
	 switch(Ua.g){
	 case 1:
	  var Va=$t(function(){
	   $M(Ta,function(Wa){
	    var Xa=Wa.v[0];
	    var Ya=Xa.equals(Z8)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Ya.g){
	    case 1:
	     $R(1,[U8,V8,W8,X8,Xa,Z8],"Buffer");break;
	    case 2:
	     $R(1,[U8,V8,W8,X8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	    }
	   },[Z8,U8,V8,W8,X8]);
	  },[Z8,U8,V8,W8,X8,Ta],"buf1");
	  var Za=$d(1,[E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,$$GHCziIOziHandleziTypes_CRLF,S8,T8],"sat");
	  $$GHCziIOziHandleziText$c.C([Za,Va,Pa],function(ab){
	   var bb=ab[0],cb=ab[1];
	   $M(cb,function(db){
	    switch(db.g){
	    case 1:
	     var eb=$t(function(){
	      $M(Va,function(fb){
	       var gb=fb.v[0],hb=fb.v[1],ib=fb.v[2],jb=fb.v[3];
	       $R(1,[gb,hb,ib,jb,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	      },[]);
	     },[Va],"sat");
	     var tb=$hs_writeMutVarzh(M8,eb,bb);
	     var kb=$d(2,[Sa,a9],"sat");
	     var lb=$t(function(){
	      $M(Va,function(mb){
	       var nb=mb.v[4],ob=mb.v[5];
	       var pb=nb.equals(ob)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(pb.g){
	       case 1:
		$A($$GHCziIOziHandleziText$l);break;
	       case 2:
		$R(1,[],"[]");break;
	       }
	      },[]);
	     },[Va],"sat");
	     var qb=$d(2,[lb,kb],"sat");
	     $$GHCziList_reverse1.C([qb,$$GHCziTypes_ZMZN],function(rb){
	      $$GHCziIOziHandleziText$n.C([rb],function(sb){
	       switch(sb.g){
	       case 1:
		$$GHCziIOziHandleziInternals_ioezuEOF.J(tb);break;
	       case 2:
		$r([tb,sb]);break;
	       }
	      },[tb]);
	     },[tb]);break;
	    case 2:
	     var ub=db.v[0];
	     $M(ub,function(vb){
	      var wb=vb.v[0],xb=vb.v[1],yb=vb.v[2],zb=vb.v[3],Ab=vb.v[4],Bb=vb.v[5];
	      var Cb=$d(2,[Sa,a9],"sat");
	      $$GHCziIOziHandleziText_hGetLinezuzdszdwa.J(E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,$$GHCziIOziHandleziTypes_CRLF,S8,T8,wb,xb,yb,zb,Ab,Bb,Cb,bb);
	     },[E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,S8,T8,a9,bb,Sa]);break;
	    }
	   },[E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,S8,T8,a9,Va,bb,Sa]);
	  },[E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,S8,T8,a9,Va,Sa]);break;
	 case 2:
	  var Db=$t(function(){
	   var Fb=Na.add(goog.math.Long.fromBits(1,0));
	   var Eb=Fb.equals(Z8)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Eb.g){
	   case 1:
	    $R(1,[U8,V8,W8,X8,Fb,Z8],"Buffer");break;
	   case 2:
	    $R(1,[U8,V8,W8,X8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	   }
	  },[Z8,U8,V8,W8,X8,Na],"sat");
	  var Jb=$hs_writeMutVarzh(M8,Db,Pa);
	  var Gb=$t(function(){
	   var Hb=$d(2,[Sa,a9],"sat");
	   $$GHCziList_reverse1.C([Hb,$$GHCziTypes_ZMZN],function(Ib){
	    $$GHCziIOziHandleziText$m.J(Ib);
	   },[]);
	  },[a9,Sa],"sat");
	  $r([Jb,Gb]);break;
	 }
	},[Z8,U8,V8,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,S8,T8,a9,Na,Ta,Pa,Sa]);
       },[Z8,U8,V8,w9,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,S8,T8,a9,Na,Pa]);
      },[Z8,U8,V8,w9,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,S8,T8,a9,Na]);
     },[Z8,Y8,U8,V8,w9,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,S8,T8,a9,t9]);break;
    }
   },[Z8,Y8,U8,V8,w9,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,a9,x9,y9,t9]);
  },[Z8,Y8,U8,V8,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,a9,t9]);
 },[Z8,Y8,U8,V8,W8,X8,E8,F8,G8,H8,I8,J8,K8,L8,M8,N8,O8,P8,Q8,R8,S8,T8,a9]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hGetLine3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hGetLine");
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hGetLine2=$f(2,function(Kb,Lb){
 $M(Kb,function(Mb){
  var Nb=Mb.v[0],Ob=Mb.v[1],Pb=Mb.v[2],Qb=Mb.v[3],Rb=Mb.v[4],Sb=Mb.v[5],Tb=Mb.v[6],Ub=Mb.v[7],Vb=Mb.v[8],Wb=Mb.v[9],Xb=Mb.v[10],Yb=Mb.v[11],Zb=Mb.v[12],ac=Mb.v[13],bc=Mb.v[14],cc=Mb.v[15];
  var dc=$hs_readMutVarzh(Vb,Lb);
  var ec=dc[0],fc=dc[1];
  $M(fc,function(gc){
   var hc=gc.v[0],ic=gc.v[1],jc=gc.v[2],kc=gc.v[3],lc=gc.v[4],mc=gc.v[5];
   $$GHCziIOziHandleziText_hGetLinezuzdszdwa.J(Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,Zb,ac,bc,cc,hc,ic,jc,kc,lc,mc,$$GHCziTypes_ZMZN,ec);
  },[Vb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Wb,Xb,Yb,Zb,ac,bc,cc,ec]);
 },[Lb]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_zdwa6=$f(9,function(vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd){
 var Ed=$d(1,[zd,Ad],"raw");
 var Fd=$F(4,function(Gd,Hd,Id,Jd){
  var rh=Gd.add(goog.math.Long.fromBits(1,0));
  var Kd=rh.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Kd.g){
  case 1:
   $M(Hd,function(Ld){
    var Md=Ld.v[0];
    $M(Md,function(Nd){
     switch(Nd.toString()){
     case "\n":
      var Sd=$f(2,function(Td,Ud){
       $M(wd,function(Vd){
	switch(Vd.g){
	case 1:
	 var Wd=$f(3,function(Xd,Yd,Zd){
	  $M(Yd,function(ae){
	   switch(ae.g){
	   case 1:
	    var be=$f(1,function(ce){
	     $M(ce,function(de){
	      var ee=de.v[8],fe=de.v[9];
	      var ge=$f(1,function(he){
	       $$GHCziIOziHandleziInternals_zdwa3.C([de,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Xd,he],function(ie){
		var je=ie[0];
		var ke=$hs_readMutVarzh(ee,je);
		var le=ke[0],me=ke[1];
		$M(me,function(ne){
		 var oe=ne.v[3];
		 var pe=Bd.equals(oe)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(pe.g){
		 case 1:
		  $r([le,$$GHCziTuple_Z0T]);break;
		 case 2:
		  var qe=$hs_readMutVarzh(fe,le);
		  var re=qe[0],se=qe[1];
		  var te=$d(2,[Ed,se],"sat");
		  var ue=$hs_writeMutVarzh(fe,te,re);
		  $r([ue,$$GHCziTuple_Z0T]);break;
		 }
		},[Ed,Bd,le,fe]);
	       },[Ed,Bd,ee,fe]);
	      },[zd,Ad,Ed,Bd,de,Xd,ee,fe],"sat");
	      $A(ge);
	     },[zd,Ad,Ed,Bd,Xd]);
	    },[zd,Ad,Ed,Bd,Xd],"sat");
	    $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,be,Zd);break;
	   case 2:
	    var ve=ae.v[0],we=ae.v[1];
	    var Xe=Xd.add(goog.math.Long.fromBits(1,0));
	    var xe=Xe.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(xe.g){
	    case 1:
	     $M(ve,function(ye){
	      var ze=ye.v[0];
	      $M(ze,function(Ae){
	       switch(Ae.toString()){
	       case "\n":
		$M(yd,function(Ee){
		 switch(Ee.g){
		 case 1:
		  var He=$hs_writeWideCharOffAddrzh(zd,Xd,"\n",Zd);
		  var Ge=$hs_touchzh(Ad,He);
		  var Fe=Xd.add(goog.math.Long.fromBits(1,0));
		  Wd.J(Fe,we,Ge);break;
		 case 2:
		  var Ne=$hs_writeWideCharOffAddrzh(zd,Xd,"\r",Zd);
		  var Me=$hs_touchzh(Ad,Ne);
		  var Ke=Xd.add(goog.math.Long.fromBits(1,0));
		  var Le=$hs_writeWideCharOffAddrzh(zd,Ke,"\n",Me);
		  var Je=$hs_touchzh(Ad,Le);
		  var Ie=Ke.add(goog.math.Long.fromBits(1,0));
		  Wd.J(Ie,we,Je);break;
		 }
		},[zd,Ad,Ed,Bd,vd,Xd,Zd,Wd,we,yd]);break;
	       default:
		var De=$hs_writeWideCharOffAddrzh(zd,Xd,Ae,Zd);
		var Ce=$hs_touchzh(Ad,De);
		var Be=Xd.add(goog.math.Long.fromBits(1,0));
		Wd.J(Be,we,Ce);
	       }
	      },[zd,Ad,Ed,Bd,vd,Xd,Zd,Wd,we,yd]);
	     },[zd,Ad,Ed,Bd,vd,Xd,Zd,Wd,we,yd]);break;
	    case 2:
	     var Oe=$f(1,function(Pe){
	      $M(Pe,function(Qe){
	       var Re=$f(1,function(Se){
		$$GHCziIOziHandleziInternals_zdwa3.C([Qe,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Xd,Se],function(Te){
		 var Ue=Te[0];
		 $r([Ue,$$GHCziTuple_Z0T]);
		},[]);
	       },[zd,Ad,Bd,Xd,Qe],"sat");
	       $A(Re);
	      },[zd,Ad,Bd,Xd]);
	     },[zd,Ad,Bd,Xd],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Oe,Zd],function(Ve){
	      var We=Ve[0];
	      Wd.J(goog.math.Long.fromBits(0,0),ae,We);
	     },[zd,Ad,Ed,Bd,vd,Wd,yd,ae]);break;
	    }break;
	   }
	  },[zd,Ad,Ed,Bd,vd,Xd,Zd,Wd,yd]);
	 },[zd,Ad,Ed,Bd,vd,yd],"$s$wa4");
	 Wd.J(Ud,Id,Td);break;
	case 2:
	 var Ye=$f(1,function(Ze){
	  $M(Ze,function(af){
	   var bf=af.v[1],cf=af.v[3],df=af.v[5];
	   var ef=$f(1,function(ff){
	    $$GHCziIOziHandleziInternals_zdwa3.C([af,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Ud,ff],function(gf){
	     var hf=gf[0];
	     var jf=$hs_readMutVarzh(df,hf);
	     var kf=jf[0],lf=jf[1];
	     $M(lf,function(mf){
	      var nf=mf.v[4],of=mf.v[5];
	      var pf=nf.equals(of)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(pf.g){
	      case 1:
	       $$GHCziIOziBufferedIO_flushWriteBuffer.C([bf,cf,mf,kf],function(qf){
		var rf=qf[0],sf=qf[1];
		var tf=$hs_writeMutVarzh(df,sf,rf);
		$r([tf,$$GHCziTuple_Z0T]);
	       },[df]);break;
	      case 2:
	       $r([kf,$$GHCziTuple_Z0T]);break;
	      }
	     },[df,bf,cf,kf]);
	    },[df,bf,cf]);
	   },[zd,Ad,Bd,Ud,af,df,bf,cf],"sat");
	   $A(ef);
	  },[zd,Ad,Bd,Ud]);
	 },[zd,Ad,Bd,Ud],"sat");
	 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Ye,Td],function(uf){
	  var vf=uf[0];
	  var wf=$f(3,function(xf,yf,zf){
	   $M(yf,function(Af){
	    switch(Af.g){
	    case 1:
	     var Bf=$f(1,function(Cf){
	      $M(Cf,function(Df){
	       var Ef=Df.v[8],Ff=Df.v[9];
	       var Gf=$f(1,function(Hf){
		$$GHCziIOziHandleziInternals_zdwa3.C([Df,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),xf,Hf],function(If){
		 var Jf=If[0];
		 var Kf=$hs_readMutVarzh(Ef,Jf);
		 var Lf=Kf[0],Mf=Kf[1];
		 $M(Mf,function(Nf){
		  var Of=Nf.v[3];
		  var Pf=Bd.equals(Of)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Pf.g){
		  case 1:
		   $r([Lf,$$GHCziTuple_Z0T]);break;
		  case 2:
		   var Qf=$hs_readMutVarzh(Ff,Lf);
		   var Rf=Qf[0],Sf=Qf[1];
		   var Tf=$d(2,[Ed,Sf],"sat");
		   var Uf=$hs_writeMutVarzh(Ff,Tf,Rf);
		   $r([Uf,$$GHCziTuple_Z0T]);break;
		  }
		 },[Ed,Bd,Lf,Ff]);
		},[Ed,Bd,Ef,Ff]);
	       },[zd,Ad,Ed,Bd,Df,xf,Ef,Ff],"sat");
	       $A(Gf);
	      },[zd,Ad,Ed,Bd,xf]);
	     },[zd,Ad,Ed,Bd,xf],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,Bf,zf);break;
	    case 2:
	     var Vf=Af.v[0],Wf=Af.v[1];
	     var Xg=xf.add(goog.math.Long.fromBits(1,0));
	     var Xf=Xg.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Xf.g){
	     case 1:
	      $M(Vf,function(Yf){
	       var Zf=Yf.v[0];
	       $M(Zf,function(ag){
		switch(ag.toString()){
		case "\n":
		 var eg=$f(2,function(fg,gg){
		  var hg=$f(1,function(ig){
		   $M(ig,function(jg){
		    var kg=jg.v[1],lg=jg.v[3],mg=jg.v[5];
		    var ng=$f(1,function(og){
		     $$GHCziIOziHandleziInternals_zdwa3.C([jg,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),gg,og],function(pg){
		      var qg=pg[0];
		      var rg=$hs_readMutVarzh(mg,qg);
		      var sg=rg[0],tg=rg[1];
		      $M(tg,function(ug){
		       var vg=ug.v[4],wg=ug.v[5];
		       var xg=vg.equals(wg)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(xg.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([kg,lg,ug,sg],function(yg){
			 var zg=yg[0],Ag=yg[1];
			 var Bg=$hs_writeMutVarzh(mg,Ag,zg);
			 $r([Bg,$$GHCziTuple_Z0T]);
			},[mg]);break;
		       case 2:
			$r([sg,$$GHCziTuple_Z0T]);break;
		       }
		      },[mg,kg,lg,sg]);
		     },[mg,kg,lg]);
		    },[zd,Ad,Bd,jg,gg,mg,kg,lg],"sat");
		    $A(ng);
		   },[zd,Ad,Bd,gg]);
		  },[zd,Ad,Bd,gg],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,hg,fg],function(Cg){
		   var Dg=Cg[0];
		   wf.J(goog.math.Long.fromBits(0,0),Wf,Dg);
		  },[zd,Ad,Ed,Bd,vd,yd,wf,Wf]);
		 },[zd,Ad,Bd,vd,wf,Wf],"$w$j1");
		 $M(yd,function(Eg){
		  switch(Eg.g){
		  case 1:
		   var Hg=$hs_writeWideCharOffAddrzh(zd,xf,"\n",zf);
		   var Fg=$hs_touchzh(Ad,Hg);
		   var Gg=xf.add(goog.math.Long.fromBits(1,0));
		   eg.J(Fg,Gg);break;
		  case 2:
		   var Ng=$hs_writeWideCharOffAddrzh(zd,xf,"\r",zf);
		   var Mg=$hs_touchzh(Ad,Ng);
		   var Kg=xf.add(goog.math.Long.fromBits(1,0));
		   var Lg=$hs_writeWideCharOffAddrzh(zd,Kg,"\n",Mg);
		   var Ig=$hs_touchzh(Ad,Lg);
		   var Jg=Kg.add(goog.math.Long.fromBits(1,0));
		   eg.J(Ig,Jg);break;
		  }
		 },[zd,Ad,Ed,Bd,vd,yd,xf,zf,wf,Wf,eg]);break;
		default:
		 var dg=$hs_writeWideCharOffAddrzh(zd,xf,ag,zf);
		 var cg=$hs_touchzh(Ad,dg);
		 var bg=xf.add(goog.math.Long.fromBits(1,0));
		 wf.J(bg,Wf,cg);
		}
	       },[zd,Ad,Ed,Bd,vd,yd,xf,zf,wf,Wf]);
	      },[zd,Ad,Ed,Bd,vd,yd,xf,zf,wf,Wf]);break;
	     case 2:
	      var Og=$f(1,function(Pg){
	       $M(Pg,function(Qg){
		var Rg=$f(1,function(Sg){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Qg,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),xf,Sg],function(Tg){
		  var Ug=Tg[0];
		  $r([Ug,$$GHCziTuple_Z0T]);
		 },[]);
		},[zd,Ad,Bd,xf,Qg],"sat");
		$A(Rg);
	       },[zd,Ad,Bd,xf]);
	      },[zd,Ad,Bd,xf],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Og,zf],function(Vg){
	       var Wg=Vg[0];
	       wf.J(goog.math.Long.fromBits(0,0),Af,Wg);
	      },[zd,Ad,Ed,Bd,vd,yd,wf,Af]);break;
	     }break;
	    }
	   },[zd,Ad,Ed,Bd,vd,yd,xf,zf,wf]);
	  },[zd,Ad,Ed,Bd,vd,yd],"$s$wa4");
	  wf.J(goog.math.Long.fromBits(0,0),Id,vf);
	 },[zd,Ad,Ed,Bd,Id,vd,yd]);break;
	}
       },[zd,Ad,Ed,Bd,Id,vd,yd,Ud,Td]);
      },[zd,Ad,Ed,Bd,Id,wd,vd,yd],"$w$j");
      $M(yd,function(Yg){
       switch(Yg.g){
       case 1:
	var bh=$hs_writeWideCharOffAddrzh(zd,Gd,"\n",Jd);
	var Zg=$hs_touchzh(Ad,bh);
	var ah=Gd.add(goog.math.Long.fromBits(1,0));
	Sd.J(Zg,ah);break;
       case 2:
	var hh=$hs_writeWideCharOffAddrzh(zd,Gd,"\r",Jd);
	var gh=$hs_touchzh(Ad,hh);
	var eh=Gd.add(goog.math.Long.fromBits(1,0));
	var fh=$hs_writeWideCharOffAddrzh(zd,eh,"\n",gh);
	var ch=$hs_touchzh(Ad,fh);
	var dh=eh.add(goog.math.Long.fromBits(1,0));
	Sd.J(ch,dh);break;
       }
      },[zd,Ad,Ed,Gd,Bd,Jd,Id,wd,vd,yd,Sd]);break;
     default:
      var Rd=$hs_writeWideCharOffAddrzh(zd,Gd,Nd,Jd);
      var Qd=$hs_touchzh(Ad,Rd);
      var Pd=Gd.add(goog.math.Long.fromBits(1,0));
      Od.J(Pd,Id,Qd);
     }
    },[zd,Ad,Ed,Gd,Bd,Jd,Od,Id,wd,vd,yd]);
   },[zd,Ad,Ed,Gd,Bd,Jd,Od,Id,wd,vd,yd]);break;
  case 2:
   var ih=$f(1,function(jh){
    $M(jh,function(kh){
     var lh=$f(1,function(mh){
      $$GHCziIOziHandleziInternals_zdwa3.C([kh,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Gd,mh],function(nh){
       var oh=nh[0];
       $r([oh,$$GHCziTuple_Z0T]);
      },[]);
     },[zd,Ad,Gd,Bd,kh],"sat");
     $A(lh);
    },[zd,Ad,Gd,Bd]);
   },[zd,Ad,Gd,Bd],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,ih,Jd],function(ph){
    var qh=ph[0];
    Fd.J(goog.math.Long.fromBits(0,0),Hd,Id,qh);
   },[zd,Ad,Ed,Bd,Hd,Id,wd,vd,yd,Fd]);break;
  }
 },"$s$wa2"),Od=$f(3,function(sh,th,uh){
  $M(th,function(vh){
   switch(vh.g){
   case 1:
    var wh=$f(1,function(xh){
     $M(xh,function(yh){
      var zh=yh.v[8],Ah=yh.v[9];
      var Bh=$f(1,function(Ch){
       $$GHCziIOziHandleziInternals_zdwa3.C([yh,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),sh,Ch],function(Dh){
	var Eh=Dh[0];
	var Fh=$hs_readMutVarzh(zh,Eh);
	var Gh=Fh[0],Hh=Fh[1];
	$M(Hh,function(Ih){
	 var Jh=Ih.v[3];
	 var Kh=Bd.equals(Jh)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Kh.g){
	 case 1:
	  $r([Gh,$$GHCziTuple_Z0T]);break;
	 case 2:
	  var Lh=$hs_readMutVarzh(Ah,Gh);
	  var Mh=Lh[0],Nh=Lh[1];
	  var Oh=$d(2,[Ed,Nh],"sat");
	  var Ph=$hs_writeMutVarzh(Ah,Oh,Mh);
	  $r([Ph,$$GHCziTuple_Z0T]);break;
	 }
	},[Ed,Bd,Gh,Ah]);
       },[Ed,Bd,zh,Ah]);
      },[zd,Ad,Ed,Bd,yh,sh,zh,Ah],"sat");
      $A(Bh);
     },[zd,Ad,Ed,Bd,sh]);
    },[zd,Ad,Ed,Bd,sh],"sat");
    $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,wh,uh);break;
   case 2:
    var Qh=vh.v[0],Rh=vh.v[1];
    var xl=sh.add(goog.math.Long.fromBits(1,0));
    var Sh=xl.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Sh.g){
    case 1:
     $M(Qh,function(Th){
      var Uh=Th.v[0];
      $M(Uh,function(Vh){
       switch(Vh.toString()){
       case "\n":
	var Zh=$f(2,function(ai,bi){
	 $M(wd,function(ci){
	  switch(ci.g){
	  case 1:
	   var di=$f(3,function(ei,fi,gi){
	    $M(fi,function(hi){
	     switch(hi.g){
	     case 1:
	      var ii=$f(1,function(ji){
	       $M(ji,function(ki){
		var li=ki.v[8],mi=ki.v[9];
		var ni=$f(1,function(oi){
		 $$GHCziIOziHandleziInternals_zdwa3.C([ki,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),ei,oi],function(pi){
		  var qi=pi[0];
		  var ri=$hs_readMutVarzh(li,qi);
		  var si=ri[0],ti=ri[1];
		  $M(ti,function(ui){
		   var vi=ui.v[3];
		   var wi=Bd.equals(vi)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(wi.g){
		   case 1:
		    $r([si,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var xi=$hs_readMutVarzh(mi,si);
		    var yi=xi[0],zi=xi[1];
		    var Ai=$d(2,[Ed,zi],"sat");
		    var Bi=$hs_writeMutVarzh(mi,Ai,yi);
		    $r([Bi,$$GHCziTuple_Z0T]);break;
		   }
		  },[Ed,Bd,si,mi]);
		 },[Ed,Bd,li,mi]);
		},[zd,Ad,Ed,Bd,ki,ei,li,mi],"sat");
		$A(ni);
	       },[zd,Ad,Ed,Bd,ei]);
	      },[zd,Ad,Ed,Bd,ei],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,ii,gi);break;
	     case 2:
	      var Ci=hi.v[0],Di=hi.v[1];
	      var ej=ei.add(goog.math.Long.fromBits(1,0));
	      var Ei=ej.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Ei.g){
	      case 1:
	       $M(Ci,function(Fi){
		var Gi=Fi.v[0];
		$M(Gi,function(Hi){
		 switch(Hi.toString()){
		 case "\n":
		  $M(yd,function(Li){
		   switch(Li.g){
		   case 1:
		    var Oi=$hs_writeWideCharOffAddrzh(zd,ei,"\n",gi);
		    var Ni=$hs_touchzh(Ad,Oi);
		    var Mi=ei.add(goog.math.Long.fromBits(1,0));
		    di.J(Mi,Di,Ni);break;
		   case 2:
		    var Ui=$hs_writeWideCharOffAddrzh(zd,ei,"\r",gi);
		    var Ti=$hs_touchzh(Ad,Ui);
		    var Ri=ei.add(goog.math.Long.fromBits(1,0));
		    var Si=$hs_writeWideCharOffAddrzh(zd,Ri,"\n",Ti);
		    var Qi=$hs_touchzh(Ad,Si);
		    var Pi=Ri.add(goog.math.Long.fromBits(1,0));
		    di.J(Pi,Di,Qi);break;
		   }
		  },[zd,Ad,Ed,Bd,vd,yd,ei,gi,di,Di]);break;
		 default:
		  var Ki=$hs_writeWideCharOffAddrzh(zd,ei,Hi,gi);
		  var Ji=$hs_touchzh(Ad,Ki);
		  var Ii=ei.add(goog.math.Long.fromBits(1,0));
		  di.J(Ii,Di,Ji);
		 }
		},[zd,Ad,Ed,Bd,vd,yd,ei,gi,di,Di]);
	       },[zd,Ad,Ed,Bd,vd,yd,ei,gi,di,Di]);break;
	      case 2:
	       var Vi=$f(1,function(Wi){
		$M(Wi,function(Xi){
		 var Yi=$f(1,function(Zi){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Xi,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),ei,Zi],function(aj){
		   var bj=aj[0];
		   $r([bj,$$GHCziTuple_Z0T]);
		  },[]);
		 },[zd,Ad,Bd,ei,Xi],"sat");
		 $A(Yi);
		},[zd,Ad,Bd,ei]);
	       },[zd,Ad,Bd,ei],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Vi,gi],function(cj){
		var dj=cj[0];
		di.J(goog.math.Long.fromBits(0,0),hi,dj);
	       },[zd,Ad,Ed,Bd,vd,yd,di,hi]);break;
	      }break;
	     }
	    },[zd,Ad,Ed,Bd,vd,yd,ei,gi,di]);
	   },[zd,Ad,Ed,Bd,vd,yd],"$s$wa4");
	   di.J(bi,Rh,ai);break;
	  case 2:
	   var fj=$f(1,function(gj){
	    $M(gj,function(hj){
	     var ij=hj.v[1],jj=hj.v[3],kj=hj.v[5];
	     var lj=$f(1,function(mj){
	      $$GHCziIOziHandleziInternals_zdwa3.C([hj,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),bi,mj],function(nj){
	       var oj=nj[0];
	       var pj=$hs_readMutVarzh(kj,oj);
	       var qj=pj[0],rj=pj[1];
	       $M(rj,function(sj){
		var tj=sj.v[4],uj=sj.v[5];
		var vj=tj.equals(uj)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(vj.g){
		case 1:
		 $$GHCziIOziBufferedIO_flushWriteBuffer.C([ij,jj,sj,qj],function(wj){
		  var xj=wj[0],yj=wj[1];
		  var zj=$hs_writeMutVarzh(kj,yj,xj);
		  $r([zj,$$GHCziTuple_Z0T]);
		 },[kj]);break;
		case 2:
		 $r([qj,$$GHCziTuple_Z0T]);break;
		}
	       },[kj,ij,jj,qj]);
	      },[kj,ij,jj]);
	     },[zd,Ad,Bd,bi,hj,kj,ij,jj],"sat");
	     $A(lj);
	    },[zd,Ad,Bd,bi]);
	   },[zd,Ad,Bd,bi],"sat");
	   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,fj,ai],function(Aj){
	    var Bj=Aj[0];
	    var Cj=$f(3,function(Dj,Ej,Fj){
	     $M(Ej,function(Gj){
	      switch(Gj.g){
	      case 1:
	       var Hj=$f(1,function(Ij){
		$M(Ij,function(Jj){
		 var Kj=Jj.v[8],Lj=Jj.v[9];
		 var Mj=$f(1,function(Nj){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Jj,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Dj,Nj],function(Oj){
		   var Pj=Oj[0];
		   var Qj=$hs_readMutVarzh(Kj,Pj);
		   var Rj=Qj[0],Sj=Qj[1];
		   $M(Sj,function(Tj){
		    var Uj=Tj.v[3];
		    var Vj=Bd.equals(Uj)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Vj.g){
		    case 1:
		     $r([Rj,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var Wj=$hs_readMutVarzh(Lj,Rj);
		     var Xj=Wj[0],Yj=Wj[1];
		     var Zj=$d(2,[Ed,Yj],"sat");
		     var ak=$hs_writeMutVarzh(Lj,Zj,Xj);
		     $r([ak,$$GHCziTuple_Z0T]);break;
		    }
		   },[Ed,Bd,Rj,Lj]);
		  },[Ed,Bd,Kj,Lj]);
		 },[zd,Ad,Ed,Bd,Jj,Dj,Kj,Lj],"sat");
		 $A(Mj);
		},[zd,Ad,Ed,Bd,Dj]);
	       },[zd,Ad,Ed,Bd,Dj],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,Hj,Fj);break;
	      case 2:
	       var bk=Gj.v[0],ck=Gj.v[1];
	       var dl=Dj.add(goog.math.Long.fromBits(1,0));
	       var dk=dl.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(dk.g){
	       case 1:
		$M(bk,function(ek){
		 var fk=ek.v[0];
		 $M(fk,function(gk){
		  switch(gk.toString()){
		  case "\n":
		   var kk=$f(2,function(lk,mk){
		    var nk=$f(1,function(ok){
		     $M(ok,function(pk){
		      var qk=pk.v[1],rk=pk.v[3],sk=pk.v[5];
		      var tk=$f(1,function(uk){
		       $$GHCziIOziHandleziInternals_zdwa3.C([pk,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),mk,uk],function(vk){
			var wk=vk[0];
			var xk=$hs_readMutVarzh(sk,wk);
			var yk=xk[0],zk=xk[1];
			$M(zk,function(Ak){
			 var Bk=Ak.v[4],Ck=Ak.v[5];
			 var Dk=Bk.equals(Ck)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Dk.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([qk,rk,Ak,yk],function(Ek){
			   var Fk=Ek[0],Gk=Ek[1];
			   var Hk=$hs_writeMutVarzh(sk,Gk,Fk);
			   $r([Hk,$$GHCziTuple_Z0T]);
			  },[sk]);break;
			 case 2:
			  $r([yk,$$GHCziTuple_Z0T]);break;
			 }
			},[sk,qk,rk,yk]);
		       },[sk,qk,rk]);
		      },[zd,Ad,Bd,pk,mk,sk,qk,rk],"sat");
		      $A(tk);
		     },[zd,Ad,Bd,mk]);
		    },[zd,Ad,Bd,mk],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,nk,lk],function(Ik){
		     var Jk=Ik[0];
		     Cj.J(goog.math.Long.fromBits(0,0),ck,Jk);
		    },[zd,Ad,Ed,Bd,vd,yd,Cj,ck]);
		   },[zd,Ad,Bd,vd,Cj,ck],"$w$j1");
		   $M(yd,function(Kk){
		    switch(Kk.g){
		    case 1:
		     var Nk=$hs_writeWideCharOffAddrzh(zd,Dj,"\n",Fj);
		     var Lk=$hs_touchzh(Ad,Nk);
		     var Mk=Dj.add(goog.math.Long.fromBits(1,0));
		     kk.J(Lk,Mk);break;
		    case 2:
		     var Tk=$hs_writeWideCharOffAddrzh(zd,Dj,"\r",Fj);
		     var Sk=$hs_touchzh(Ad,Tk);
		     var Qk=Dj.add(goog.math.Long.fromBits(1,0));
		     var Rk=$hs_writeWideCharOffAddrzh(zd,Qk,"\n",Sk);
		     var Ok=$hs_touchzh(Ad,Rk);
		     var Pk=Qk.add(goog.math.Long.fromBits(1,0));
		     kk.J(Ok,Pk);break;
		    }
		   },[zd,Ad,Ed,Bd,vd,yd,Dj,Fj,Cj,ck,kk]);break;
		  default:
		   var jk=$hs_writeWideCharOffAddrzh(zd,Dj,gk,Fj);
		   var ik=$hs_touchzh(Ad,jk);
		   var hk=Dj.add(goog.math.Long.fromBits(1,0));
		   Cj.J(hk,ck,ik);
		  }
		 },[zd,Ad,Ed,Bd,vd,yd,Dj,Fj,Cj,ck]);
		},[zd,Ad,Ed,Bd,vd,yd,Dj,Fj,Cj,ck]);break;
	       case 2:
		var Uk=$f(1,function(Vk){
		 $M(Vk,function(Wk){
		  var Xk=$f(1,function(Yk){
		   $$GHCziIOziHandleziInternals_zdwa3.C([Wk,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Dj,Yk],function(Zk){
		    var al=Zk[0];
		    $r([al,$$GHCziTuple_Z0T]);
		   },[]);
		  },[zd,Ad,Bd,Dj,Wk],"sat");
		  $A(Xk);
		 },[zd,Ad,Bd,Dj]);
		},[zd,Ad,Bd,Dj],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Uk,Fj],function(bl){
		 var cl=bl[0];
		 Cj.J(goog.math.Long.fromBits(0,0),Gj,cl);
		},[zd,Ad,Ed,Bd,vd,yd,Cj,Gj]);break;
	       }break;
	      }
	     },[zd,Ad,Ed,Bd,vd,yd,Dj,Fj,Cj]);
	    },[zd,Ad,Ed,Bd,vd,yd],"$s$wa4");
	    Cj.J(goog.math.Long.fromBits(0,0),Rh,Bj);
	   },[zd,Ad,Ed,Bd,vd,yd,Rh]);break;
	  }
	 },[zd,Ad,Ed,Bd,vd,yd,Rh,bi,ai]);
	},[zd,Ad,Ed,Bd,wd,vd,yd,Rh],"$w$j");
	$M(yd,function(el){
	 switch(el.g){
	 case 1:
	  var hl=$hs_writeWideCharOffAddrzh(zd,sh,"\n",uh);
	  var fl=$hs_touchzh(Ad,hl);
	  var gl=sh.add(goog.math.Long.fromBits(1,0));
	  Zh.J(fl,gl);break;
	 case 2:
	  var nl=$hs_writeWideCharOffAddrzh(zd,sh,"\r",uh);
	  var ml=$hs_touchzh(Ad,nl);
	  var kl=sh.add(goog.math.Long.fromBits(1,0));
	  var ll=$hs_writeWideCharOffAddrzh(zd,kl,"\n",ml);
	  var il=$hs_touchzh(Ad,ll);
	  var jl=kl.add(goog.math.Long.fromBits(1,0));
	  Zh.J(il,jl);break;
	 }
	},[zd,Ad,Ed,Bd,wd,vd,yd,sh,uh,Rh,Zh]);break;
       default:
	var Yh=$hs_writeWideCharOffAddrzh(zd,sh,Vh,uh);
	var Xh=$hs_touchzh(Ad,Yh);
	var Wh=sh.add(goog.math.Long.fromBits(1,0));
	Od.J(Wh,Rh,Xh);
       }
      },[zd,Ad,Ed,Bd,Od,wd,vd,yd,sh,uh,Rh]);
     },[zd,Ad,Ed,Bd,Od,wd,vd,yd,sh,uh,Rh]);break;
    case 2:
     var ol=$f(1,function(pl){
      $M(pl,function(ql){
       var rl=$f(1,function(sl){
	$$GHCziIOziHandleziInternals_zdwa3.C([ql,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),sh,sl],function(tl){
	 var ul=tl[0];
	 $r([ul,$$GHCziTuple_Z0T]);
	},[]);
       },[zd,Ad,Bd,sh,ql],"sat");
       $A(rl);
      },[zd,Ad,Bd,sh]);
     },[zd,Ad,Bd,sh],"sat");
     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,ol,uh],function(vl){
      var wl=vl[0];
      Fd.J(goog.math.Long.fromBits(0,0),Qh,Rh,wl);
     },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,Qh,Rh]);break;
    }break;
   }
  },[zd,Ad,Ed,Bd,Od,wd,vd,yd,Fd,sh,uh]);
 },[zd,Ad,Ed,Bd,wd,vd,yd,Fd],"$s$wa3");
 $S(Fd,[zd,Ad,Ed,Bd,Od,wd,vd,yd]);
 var yl=$F(5,function(zl,Al,Bl,Cl,Dl){
  var qp=zl.add(goog.math.Long.fromBits(1,0));
  var El=qp.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(El.g){
  case 1:
   $M(Al,function(Fl){
    var Gl=Fl.v[0];
    $M(Gl,function(Hl){
     switch(Hl.toString()){
     case "\n":
      var Ml=$f(2,function(Nl,Ol){
       $M(wd,function(Pl){
	switch(Pl.g){
	case 1:
	 var Ql=$f(4,function(Rl,Sl,Tl,Ul){
	  $M(Sl,function(Vl){
	   switch(Vl.g){
	   case 1:
	    $M(Tl,function(Wl){
	     switch(Wl.g){
	     case 1:
	      var Xl=$f(1,function(Yl){
	       $M(Yl,function(Zl){
		var am=Zl.v[8],bm=Zl.v[9];
		var cm=$f(1,function(dm){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Zl,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Rl,dm],function(em){
		  var fm=em[0];
		  var gm=$hs_readMutVarzh(am,fm);
		  var hm=gm[0],im=gm[1];
		  $M(im,function(jm){
		   var km=jm.v[3];
		   var lm=Bd.equals(km)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(lm.g){
		   case 1:
		    $r([hm,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var mm=$hs_readMutVarzh(bm,hm);
		    var nm=mm[0],om=mm[1];
		    var pm=$d(2,[Ed,om],"sat");
		    var qm=$hs_writeMutVarzh(bm,pm,nm);
		    $r([qm,$$GHCziTuple_Z0T]);break;
		   }
		  },[Ed,Bd,hm,bm]);
		 },[Ed,Bd,am,bm]);
		},[zd,Ad,Ed,Bd,Zl,Rl,am,bm],"sat");
		$A(cm);
	       },[zd,Ad,Ed,Bd,Rl]);
	      },[zd,Ad,Ed,Bd,Rl],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,Xl,Ul);break;
	     case 2:
	      Ql.J(Rl,Wl,$$GHCziTypes_ZMZN,Ul);break;
	     }
	    },[zd,Ad,Ed,Bd,vd,yd,Rl,Ul,Ql]);break;
	   case 2:
	    var rm=Vl.v[0],sm=Vl.v[1];
	    var Tm=Rl.add(goog.math.Long.fromBits(1,0));
	    var tm=Tm.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(tm.g){
	    case 1:
	     $M(rm,function(um){
	      var vm=um.v[0];
	      $M(vm,function(wm){
	       switch(wm.toString()){
	       case "\n":
		$M(yd,function(Am){
		 switch(Am.g){
		 case 1:
		  var Dm=$hs_writeWideCharOffAddrzh(zd,Rl,"\n",Ul);
		  var Cm=$hs_touchzh(Ad,Dm);
		  var Bm=Rl.add(goog.math.Long.fromBits(1,0));
		  Ql.J(Bm,sm,Tl,Cm);break;
		 case 2:
		  var Jm=$hs_writeWideCharOffAddrzh(zd,Rl,"\r",Ul);
		  var Im=$hs_touchzh(Ad,Jm);
		  var Gm=Rl.add(goog.math.Long.fromBits(1,0));
		  var Hm=$hs_writeWideCharOffAddrzh(zd,Gm,"\n",Im);
		  var Fm=$hs_touchzh(Ad,Hm);
		  var Em=Gm.add(goog.math.Long.fromBits(1,0));
		  Ql.J(Em,sm,Tl,Fm);break;
		 }
		},[zd,Ad,Ed,Bd,vd,yd,Tl,Rl,Ul,Ql,sm]);break;
	       default:
		var zm=$hs_writeWideCharOffAddrzh(zd,Rl,wm,Ul);
		var ym=$hs_touchzh(Ad,zm);
		var xm=Rl.add(goog.math.Long.fromBits(1,0));
		Ql.J(xm,sm,Tl,ym);
	       }
	      },[zd,Ad,Ed,Bd,vd,yd,Tl,Rl,Ul,Ql,sm]);
	     },[zd,Ad,Ed,Bd,vd,yd,Tl,Rl,Ul,Ql,sm]);break;
	    case 2:
	     var Km=$f(1,function(Lm){
	      $M(Lm,function(Mm){
	       var Nm=$f(1,function(Om){
		$$GHCziIOziHandleziInternals_zdwa3.C([Mm,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Rl,Om],function(Pm){
		 var Qm=Pm[0];
		 $r([Qm,$$GHCziTuple_Z0T]);
		},[]);
	       },[zd,Ad,Bd,Rl,Mm],"sat");
	       $A(Nm);
	      },[zd,Ad,Bd,Rl]);
	     },[zd,Ad,Bd,Rl],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Km,Ul],function(Rm){
	      var Sm=Rm[0];
	      Ql.J(goog.math.Long.fromBits(0,0),Vl,Tl,Sm);
	     },[zd,Ad,Ed,Bd,vd,yd,Tl,Ql,Vl]);break;
	    }break;
	   }
	  },[zd,Ad,Ed,Bd,vd,yd,Tl,Rl,Ul,Ql]);
	 },[zd,Ad,Ed,Bd,vd,yd],"$wa9");
	 Ql.J(Ol,Bl,Cl,Nl);break;
	case 2:
	 var Um=$f(1,function(Vm){
	  $M(Vm,function(Wm){
	   var Xm=Wm.v[1],Ym=Wm.v[3],Zm=Wm.v[5];
	   var an=$f(1,function(bn){
	    $$GHCziIOziHandleziInternals_zdwa3.C([Wm,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Ol,bn],function(cn){
	     var dn=cn[0];
	     var en=$hs_readMutVarzh(Zm,dn);
	     var fn=en[0],gn=en[1];
	     $M(gn,function(hn){
	      var jn=hn.v[4],kn=hn.v[5];
	      var ln=jn.equals(kn)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(ln.g){
	      case 1:
	       $$GHCziIOziBufferedIO_flushWriteBuffer.C([Xm,Ym,hn,fn],function(mn){
		var nn=mn[0],on=mn[1];
		var pn=$hs_writeMutVarzh(Zm,on,nn);
		$r([pn,$$GHCziTuple_Z0T]);
	       },[Zm]);break;
	      case 2:
	       $r([fn,$$GHCziTuple_Z0T]);break;
	      }
	     },[Zm,Xm,Ym,fn]);
	    },[Zm,Xm,Ym]);
	   },[zd,Ad,Bd,Ol,Wm,Zm,Xm,Ym],"sat");
	   $A(an);
	  },[zd,Ad,Bd,Ol]);
	 },[zd,Ad,Bd,Ol],"sat");
	 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Um,Nl],function(qn){
	  var rn=qn[0];
	  var sn=$f(4,function(tn,un,vn,wn){
	   $M(un,function(xn){
	    switch(xn.g){
	    case 1:
	     $M(vn,function(yn){
	      switch(yn.g){
	      case 1:
	       var zn=$f(1,function(An){
		$M(An,function(Bn){
		 var Cn=Bn.v[8],Dn=Bn.v[9];
		 var En=$f(1,function(Fn){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Bn,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),tn,Fn],function(Gn){
		   var Hn=Gn[0];
		   var In=$hs_readMutVarzh(Cn,Hn);
		   var Jn=In[0],Kn=In[1];
		   $M(Kn,function(Ln){
		    var Mn=Ln.v[3];
		    var Nn=Bd.equals(Mn)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Nn.g){
		    case 1:
		     $r([Jn,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var On=$hs_readMutVarzh(Dn,Jn);
		     var Pn=On[0],Qn=On[1];
		     var Rn=$d(2,[Ed,Qn],"sat");
		     var Sn=$hs_writeMutVarzh(Dn,Rn,Pn);
		     $r([Sn,$$GHCziTuple_Z0T]);break;
		    }
		   },[Ed,Bd,Jn,Dn]);
		  },[Ed,Bd,Cn,Dn]);
		 },[zd,Ad,Ed,Bd,Bn,tn,Cn,Dn],"sat");
		 $A(En);
		},[zd,Ad,Ed,Bd,tn]);
	       },[zd,Ad,Ed,Bd,tn],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,zn,wn);break;
	      case 2:
	       sn.J(tn,yn,$$GHCziTypes_ZMZN,wn);break;
	      }
	     },[zd,Ad,Ed,Bd,vd,yd,tn,wn,sn]);break;
	    case 2:
	     var Tn=xn.v[0],Un=xn.v[1];
	     var Wo=tn.add(goog.math.Long.fromBits(1,0));
	     var Vn=Wo.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Vn.g){
	     case 1:
	      $M(Tn,function(Wn){
	       var Xn=Wn.v[0];
	       $M(Xn,function(Yn){
		switch(Yn.toString()){
		case "\n":
		 var co=$f(2,function(eo,fo){
		  var go=$f(1,function(ho){
		   $M(ho,function(io){
		    var jo=io.v[1],ko=io.v[3],lo=io.v[5];
		    var mo=$f(1,function(no){
		     $$GHCziIOziHandleziInternals_zdwa3.C([io,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),fo,no],function(oo){
		      var po=oo[0];
		      var qo=$hs_readMutVarzh(lo,po);
		      var ro=qo[0],so=qo[1];
		      $M(so,function(to){
		       var uo=to.v[4],vo=to.v[5];
		       var wo=uo.equals(vo)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(wo.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([jo,ko,to,ro],function(xo){
			 var yo=xo[0],zo=xo[1];
			 var Ao=$hs_writeMutVarzh(lo,zo,yo);
			 $r([Ao,$$GHCziTuple_Z0T]);
			},[lo]);break;
		       case 2:
			$r([ro,$$GHCziTuple_Z0T]);break;
		       }
		      },[lo,jo,ko,ro]);
		     },[lo,jo,ko]);
		    },[zd,Ad,Bd,io,fo,lo,jo,ko],"sat");
		    $A(mo);
		   },[zd,Ad,Bd,fo]);
		  },[zd,Ad,Bd,fo],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,go,eo],function(Bo){
		   var Co=Bo[0];
		   sn.J(goog.math.Long.fromBits(0,0),Un,vn,Co);
		  },[zd,Ad,Ed,Bd,vd,yd,vn,sn,Un]);
		 },[zd,Ad,Bd,vd,vn,sn,Un],"$w$j1");
		 $M(yd,function(Do){
		  switch(Do.g){
		  case 1:
		   var Go=$hs_writeWideCharOffAddrzh(zd,tn,"\n",wn);
		   var Eo=$hs_touchzh(Ad,Go);
		   var Fo=tn.add(goog.math.Long.fromBits(1,0));
		   co.J(Eo,Fo);break;
		  case 2:
		   var Mo=$hs_writeWideCharOffAddrzh(zd,tn,"\r",wn);
		   var Lo=$hs_touchzh(Ad,Mo);
		   var Jo=tn.add(goog.math.Long.fromBits(1,0));
		   var Ko=$hs_writeWideCharOffAddrzh(zd,Jo,"\n",Lo);
		   var Ho=$hs_touchzh(Ad,Ko);
		   var Io=Jo.add(goog.math.Long.fromBits(1,0));
		   co.J(Ho,Io);break;
		  }
		 },[zd,Ad,Ed,Bd,vd,yd,vn,tn,wn,sn,Un,co]);break;
		default:
		 var bo=$hs_writeWideCharOffAddrzh(zd,tn,Yn,wn);
		 var ao=$hs_touchzh(Ad,bo);
		 var Zn=tn.add(goog.math.Long.fromBits(1,0));
		 sn.J(Zn,Un,vn,ao);
		}
	       },[zd,Ad,Ed,Bd,vd,yd,vn,tn,wn,sn,Un]);
	      },[zd,Ad,Ed,Bd,vd,yd,vn,tn,wn,sn,Un]);break;
	     case 2:
	      var No=$f(1,function(Oo){
	       $M(Oo,function(Po){
		var Qo=$f(1,function(Ro){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Po,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),tn,Ro],function(So){
		  var To=So[0];
		  $r([To,$$GHCziTuple_Z0T]);
		 },[]);
		},[zd,Ad,Bd,tn,Po],"sat");
		$A(Qo);
	       },[zd,Ad,Bd,tn]);
	      },[zd,Ad,Bd,tn],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,No,wn],function(Uo){
	       var Vo=Uo[0];
	       sn.J(goog.math.Long.fromBits(0,0),xn,vn,Vo);
	      },[zd,Ad,Ed,Bd,vd,yd,vn,sn,xn]);break;
	     }break;
	    }
	   },[zd,Ad,Ed,Bd,vd,yd,vn,tn,wn,sn]);
	  },[zd,Ad,Ed,Bd,vd,yd],"$wa9");
	  sn.J(goog.math.Long.fromBits(0,0),Bl,Cl,rn);
	 },[zd,Ad,Ed,Bd,vd,yd,Bl,Cl]);break;
	}
       },[zd,Ad,Ed,Bd,vd,yd,Bl,Cl,Ol,Nl]);
      },[zd,Ad,Ed,Bd,wd,vd,yd,Bl,Cl],"$w$j");
      $M(yd,function(Xo){
       switch(Xo.g){
       case 1:
	var ap=$hs_writeWideCharOffAddrzh(zd,zl,"\n",Dl);
	var Yo=$hs_touchzh(Ad,ap);
	var Zo=zl.add(goog.math.Long.fromBits(1,0));
	Ml.J(Yo,Zo);break;
       case 2:
	var gp=$hs_writeWideCharOffAddrzh(zd,zl,"\r",Dl);
	var fp=$hs_touchzh(Ad,gp);
	var dp=zl.add(goog.math.Long.fromBits(1,0));
	var ep=$hs_writeWideCharOffAddrzh(zd,dp,"\n",fp);
	var bp=$hs_touchzh(Ad,ep);
	var cp=dp.add(goog.math.Long.fromBits(1,0));
	Ml.J(bp,cp);break;
       }
      },[zd,Ad,Ed,Bd,wd,vd,yd,zl,Dl,Bl,Cl,Ml]);break;
     default:
      var Ll=$hs_writeWideCharOffAddrzh(zd,zl,Hl,Dl);
      var Kl=$hs_touchzh(Ad,Ll);
      var Jl=zl.add(goog.math.Long.fromBits(1,0));
      Il.J(Jl,Bl,Cl,Kl);
     }
    },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,zl,Dl,Il,Bl,Cl]);
   },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,zl,Dl,Il,Bl,Cl]);break;
  case 2:
   var hp=$f(1,function(ip){
    $M(ip,function(jp){
     var kp=$f(1,function(lp){
      $$GHCziIOziHandleziInternals_zdwa3.C([jp,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),zl,lp],function(mp){
       var np=mp[0];
       $r([np,$$GHCziTuple_Z0T]);
      },[]);
     },[zd,Ad,Bd,zl,jp],"sat");
     $A(kp);
    },[zd,Ad,Bd,zl]);
   },[zd,Ad,Bd,zl],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,hp,Dl],function(op){
    var pp=op[0];
    yl.J(goog.math.Long.fromBits(0,0),Al,Bl,Cl,pp);
   },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,Al,Bl,Cl,yl]);break;
  }
 },"$s$wa4"),Il=$f(4,function(rp,sp,tp,up){
  $M(sp,function(vp){
   switch(vp.g){
   case 1:
    $M(tp,function(wp){
     switch(wp.g){
     case 1:
      var xp=$f(1,function(yp){
       $M(yp,function(zp){
	var Ap=zp.v[8],Bp=zp.v[9];
	var Cp=$f(1,function(Dp){
	 $$GHCziIOziHandleziInternals_zdwa3.C([zp,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),rp,Dp],function(Ep){
	  var Fp=Ep[0];
	  var Gp=$hs_readMutVarzh(Ap,Fp);
	  var Hp=Gp[0],Ip=Gp[1];
	  $M(Ip,function(Jp){
	   var Kp=Jp.v[3];
	   var Lp=Bd.equals(Kp)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Lp.g){
	   case 1:
	    $r([Hp,$$GHCziTuple_Z0T]);break;
	   case 2:
	    var Mp=$hs_readMutVarzh(Bp,Hp);
	    var Np=Mp[0],Op=Mp[1];
	    var Pp=$d(2,[Ed,Op],"sat");
	    var Qp=$hs_writeMutVarzh(Bp,Pp,Np);
	    $r([Qp,$$GHCziTuple_Z0T]);break;
	   }
	  },[Ed,Bd,Hp,Bp]);
	 },[Ed,Bd,Ap,Bp]);
	},[zd,Ad,Ed,Bd,zp,rp,Ap,Bp],"sat");
	$A(Cp);
       },[zd,Ad,Ed,Bd,rp]);
      },[zd,Ad,Ed,Bd,rp],"sat");
      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,xp,up);break;
     case 2:
      var Rp=wp.v[0],Sp=wp.v[1];
      Fd.J(rp,Rp,Sp,up);break;
     }
    },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,rp,up]);break;
   case 2:
    var Tp=vp.v[0],Up=vp.v[1];
    var Mz=rp.add(goog.math.Long.fromBits(1,0));
    var Vp=Mz.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Vp.g){
    case 1:
     $M(Tp,function(Wp){
      var Xp=Wp.v[0];
      $M(Xp,function(Yp){
       switch(Yp.toString()){
       case "\n":
	var cq=$f(2,function(dq,eq){
	 $M(wd,function(fq){
	  switch(fq.g){
	  case 1:
	   var gq=$F(4,function(hq,iq,jq,kq){
	    var Mq=hq.add(goog.math.Long.fromBits(1,0));
	    var lq=Mq.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(lq.g){
	    case 1:
	     $M(iq,function(mq){
	      var nq=mq.v[0];
	      $M(nq,function(oq){
	       switch(oq.toString()){
	       case "\n":
		$M(yd,function(tq){
		 switch(tq.g){
		 case 1:
		  var wq=$hs_writeWideCharOffAddrzh(zd,hq,"\n",kq);
		  var vq=$hs_touchzh(Ad,wq);
		  var uq=hq.add(goog.math.Long.fromBits(1,0));
		  pq.J(uq,jq,vq);break;
		 case 2:
		  var Cq=$hs_writeWideCharOffAddrzh(zd,hq,"\r",kq);
		  var Bq=$hs_touchzh(Ad,Cq);
		  var zq=hq.add(goog.math.Long.fromBits(1,0));
		  var Aq=$hs_writeWideCharOffAddrzh(zd,zq,"\n",Bq);
		  var yq=$hs_touchzh(Ad,Aq);
		  var xq=zq.add(goog.math.Long.fromBits(1,0));
		  pq.J(xq,jq,yq);break;
		 }
		},[zd,Ad,Ed,Bd,vd,yd,hq,kq,pq,jq]);break;
	       default:
		var sq=$hs_writeWideCharOffAddrzh(zd,hq,oq,kq);
		var rq=$hs_touchzh(Ad,sq);
		var qq=hq.add(goog.math.Long.fromBits(1,0));
		pq.J(qq,jq,rq);
	       }
	      },[zd,Ad,Ed,Bd,vd,yd,hq,kq,pq,jq]);
	     },[zd,Ad,Ed,Bd,vd,yd,hq,kq,pq,jq]);break;
	    case 2:
	     var Dq=$f(1,function(Eq){
	      $M(Eq,function(Fq){
	       var Gq=$f(1,function(Hq){
		$$GHCziIOziHandleziInternals_zdwa3.C([Fq,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),hq,Hq],function(Iq){
		 var Jq=Iq[0];
		 $r([Jq,$$GHCziTuple_Z0T]);
		},[]);
	       },[zd,Ad,Bd,hq,Fq],"sat");
	       $A(Gq);
	      },[zd,Ad,Bd,hq]);
	     },[zd,Ad,Bd,hq],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Dq,kq],function(Kq){
	      var Lq=Kq[0];
	      gq.J(goog.math.Long.fromBits(0,0),iq,jq,Lq);
	     },[zd,Ad,Ed,Bd,vd,yd,iq,jq,gq]);break;
	    }
	   },"$s$wa5"),pq=$f(3,function(Nq,Oq,Pq){
	    $M(Oq,function(Qq){
	     switch(Qq.g){
	     case 1:
	      var Rq=$f(1,function(Sq){
	       $M(Sq,function(Tq){
		var Uq=Tq.v[8],Vq=Tq.v[9];
		var Wq=$f(1,function(Xq){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Tq,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Nq,Xq],function(Yq){
		  var Zq=Yq[0];
		  var ar=$hs_readMutVarzh(Uq,Zq);
		  var br=ar[0],cr=ar[1];
		  $M(cr,function(dr){
		   var er=dr.v[3];
		   var fr=Bd.equals(er)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(fr.g){
		   case 1:
		    $r([br,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var gr=$hs_readMutVarzh(Vq,br);
		    var hr=gr[0],ir=gr[1];
		    var jr=$d(2,[Ed,ir],"sat");
		    var kr=$hs_writeMutVarzh(Vq,jr,hr);
		    $r([kr,$$GHCziTuple_Z0T]);break;
		   }
		  },[Ed,Bd,br,Vq]);
		 },[Ed,Bd,Uq,Vq]);
		},[zd,Ad,Ed,Bd,Tq,Nq,Uq,Vq],"sat");
		$A(Wq);
	       },[zd,Ad,Ed,Bd,Nq]);
	      },[zd,Ad,Ed,Bd,Nq],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,Rq,Pq);break;
	     case 2:
	      var lr=Qq.v[0],mr=Qq.v[1];
	      var Nr=Nq.add(goog.math.Long.fromBits(1,0));
	      var nr=Nr.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(nr.g){
	      case 1:
	       $M(lr,function(or){
		var pr=or.v[0];
		$M(pr,function(qr){
		 switch(qr.toString()){
		 case "\n":
		  $M(yd,function(ur){
		   switch(ur.g){
		   case 1:
		    var xr=$hs_writeWideCharOffAddrzh(zd,Nq,"\n",Pq);
		    var wr=$hs_touchzh(Ad,xr);
		    var vr=Nq.add(goog.math.Long.fromBits(1,0));
		    pq.J(vr,mr,wr);break;
		   case 2:
		    var Dr=$hs_writeWideCharOffAddrzh(zd,Nq,"\r",Pq);
		    var Cr=$hs_touchzh(Ad,Dr);
		    var Ar=Nq.add(goog.math.Long.fromBits(1,0));
		    var Br=$hs_writeWideCharOffAddrzh(zd,Ar,"\n",Cr);
		    var zr=$hs_touchzh(Ad,Br);
		    var yr=Ar.add(goog.math.Long.fromBits(1,0));
		    pq.J(yr,mr,zr);break;
		   }
		  },[zd,Ad,Ed,Bd,vd,yd,pq,Nq,Pq,mr]);break;
		 default:
		  var tr=$hs_writeWideCharOffAddrzh(zd,Nq,qr,Pq);
		  var sr=$hs_touchzh(Ad,tr);
		  var rr=Nq.add(goog.math.Long.fromBits(1,0));
		  pq.J(rr,mr,sr);
		 }
		},[zd,Ad,Ed,Bd,vd,yd,pq,Nq,Pq,mr]);
	       },[zd,Ad,Ed,Bd,vd,yd,pq,Nq,Pq,mr]);break;
	      case 2:
	       var Er=$f(1,function(Fr){
		$M(Fr,function(Gr){
		 var Hr=$f(1,function(Ir){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Gr,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Nq,Ir],function(Jr){
		   var Kr=Jr[0];
		   $r([Kr,$$GHCziTuple_Z0T]);
		  },[]);
		 },[zd,Ad,Bd,Nq,Gr],"sat");
		 $A(Hr);
		},[zd,Ad,Bd,Nq]);
	       },[zd,Ad,Bd,Nq],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Er,Pq],function(Lr){
		var Mr=Lr[0];
		gq.J(goog.math.Long.fromBits(0,0),lr,mr,Mr);
	       },[zd,Ad,Ed,Bd,vd,yd,gq,lr,mr]);break;
	      }break;
	     }
	    },[zd,Ad,Ed,Bd,vd,yd,pq,gq,Nq,Pq]);
	   },[zd,Ad,Ed,Bd,vd,yd,gq],"$s$wa6");
	   $S(gq,[zd,Ad,Bd,vd,yd,pq]);
	   var Or=$F(5,function(Pr,Qr,Rr,Sr,Tr){
	    var vs=Pr.add(goog.math.Long.fromBits(1,0));
	    var Ur=vs.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Ur.g){
	    case 1:
	     $M(Qr,function(Vr){
	      var Wr=Vr.v[0];
	      $M(Wr,function(Xr){
	       switch(Xr.toString()){
	       case "\n":
		$M(yd,function(cs){
		 switch(cs.g){
		 case 1:
		  var fs=$hs_writeWideCharOffAddrzh(zd,Pr,"\n",Tr);
		  var es=$hs_touchzh(Ad,fs);
		  var ds=Pr.add(goog.math.Long.fromBits(1,0));
		  Yr.J(ds,Rr,Sr,es);break;
		 case 2:
		  var ls=$hs_writeWideCharOffAddrzh(zd,Pr,"\r",Tr);
		  var ks=$hs_touchzh(Ad,ls);
		  var is=Pr.add(goog.math.Long.fromBits(1,0));
		  var js=$hs_writeWideCharOffAddrzh(zd,is,"\n",ks);
		  var hs=$hs_touchzh(Ad,js);
		  var gs=is.add(goog.math.Long.fromBits(1,0));
		  Yr.J(gs,Rr,Sr,hs);break;
		 }
		},[zd,Ad,Ed,Bd,vd,yd,gq,Pr,Tr,Yr,Rr,Sr]);break;
	       default:
		var bs=$hs_writeWideCharOffAddrzh(zd,Pr,Xr,Tr);
		var as=$hs_touchzh(Ad,bs);
		var Zr=Pr.add(goog.math.Long.fromBits(1,0));
		Yr.J(Zr,Rr,Sr,as);
	       }
	      },[zd,Ad,Ed,Bd,vd,yd,gq,Pr,Tr,Yr,Rr,Sr]);
	     },[zd,Ad,Ed,Bd,vd,yd,gq,Pr,Tr,Yr,Rr,Sr]);break;
	    case 2:
	     var ms=$f(1,function(ns){
	      $M(ns,function(os){
	       var ps=$f(1,function(qs){
		$$GHCziIOziHandleziInternals_zdwa3.C([os,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Pr,qs],function(rs){
		 var ss=rs[0];
		 $r([ss,$$GHCziTuple_Z0T]);
		},[]);
	       },[zd,Ad,Bd,Pr,os],"sat");
	       $A(ps);
	      },[zd,Ad,Bd,Pr]);
	     },[zd,Ad,Bd,Pr],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,ms,Tr],function(ts){
	      var us=ts[0];
	      Or.J(goog.math.Long.fromBits(0,0),Qr,Rr,Sr,us);
	     },[zd,Ad,Ed,Bd,vd,yd,gq,Qr,Rr,Sr,Or]);break;
	    }
	   },"$s$wa7"),Yr=$f(4,function(ws,xs,ys,zs){
	    $M(xs,function(As){
	     switch(As.g){
	     case 1:
	      $M(ys,function(Bs){
	       switch(Bs.g){
	       case 1:
		var Cs=$f(1,function(Ds){
		 $M(Ds,function(Es){
		  var Fs=Es.v[8],Gs=Es.v[9];
		  var Hs=$f(1,function(Is){
		   $$GHCziIOziHandleziInternals_zdwa3.C([Es,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),ws,Is],function(Js){
		    var Ks=Js[0];
		    var Ls=$hs_readMutVarzh(Fs,Ks);
		    var Ms=Ls[0],Ns=Ls[1];
		    $M(Ns,function(Os){
		     var Ps=Os.v[3];
		     var Qs=Bd.equals(Ps)?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(Qs.g){
		     case 1:
		      $r([Ms,$$GHCziTuple_Z0T]);break;
		     case 2:
		      var Rs=$hs_readMutVarzh(Gs,Ms);
		      var Ss=Rs[0],Ts=Rs[1];
		      var Us=$d(2,[Ed,Ts],"sat");
		      var Vs=$hs_writeMutVarzh(Gs,Us,Ss);
		      $r([Vs,$$GHCziTuple_Z0T]);break;
		     }
		    },[Ed,Bd,Ms,Gs]);
		   },[Ed,Bd,Fs,Gs]);
		  },[zd,Ad,Ed,Bd,Es,ws,Fs,Gs],"sat");
		  $A(Hs);
		 },[zd,Ad,Ed,Bd,ws]);
		},[zd,Ad,Ed,Bd,ws],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,Cs,zs);break;
	       case 2:
		var Ws=Bs.v[0],Xs=Bs.v[1];
		gq.J(ws,Ws,Xs,zs);break;
	       }
	      },[zd,Ad,Ed,Bd,vd,yd,gq,ws,zs]);break;
	     case 2:
	      var Ys=As.v[0],Zs=As.v[1];
	      var At=ws.add(goog.math.Long.fromBits(1,0));
	      var at=At.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(at.g){
	      case 1:
	       $M(Ys,function(bt){
		var ct=bt.v[0];
		$M(ct,function(dt){
		 switch(dt.toString()){
		 case "\n":
		  $M(yd,function(ht){
		   switch(ht.g){
		   case 1:
		    var kt=$hs_writeWideCharOffAddrzh(zd,ws,"\n",zs);
		    var jt=$hs_touchzh(Ad,kt);
		    var it=ws.add(goog.math.Long.fromBits(1,0));
		    Yr.J(it,Zs,ys,jt);break;
		   case 2:
		    var qt=$hs_writeWideCharOffAddrzh(zd,ws,"\r",zs);
		    var pt=$hs_touchzh(Ad,qt);
		    var nt=ws.add(goog.math.Long.fromBits(1,0));
		    var ot=$hs_writeWideCharOffAddrzh(zd,nt,"\n",pt);
		    var mt=$hs_touchzh(Ad,ot);
		    var lt=nt.add(goog.math.Long.fromBits(1,0));
		    Yr.J(lt,Zs,ys,mt);break;
		   }
		  },[zd,Ad,Ed,Bd,vd,yd,gq,Yr,ys,ws,zs,Zs]);break;
		 default:
		  var gt=$hs_writeWideCharOffAddrzh(zd,ws,dt,zs);
		  var ft=$hs_touchzh(Ad,gt);
		  var et=ws.add(goog.math.Long.fromBits(1,0));
		  Yr.J(et,Zs,ys,ft);
		 }
		},[zd,Ad,Ed,Bd,vd,yd,gq,Yr,ys,ws,zs,Zs]);
	       },[zd,Ad,Ed,Bd,vd,yd,gq,Yr,ys,ws,zs,Zs]);break;
	      case 2:
	       var rt=$f(1,function(st){
		$M(st,function(tt){
		 var ut=$f(1,function(vt){
		  $$GHCziIOziHandleziInternals_zdwa3.C([tt,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),ws,vt],function(wt){
		   var xt=wt[0];
		   $r([xt,$$GHCziTuple_Z0T]);
		  },[]);
		 },[zd,Ad,Bd,ws,tt],"sat");
		 $A(ut);
		},[zd,Ad,Bd,ws]);
	       },[zd,Ad,Bd,ws],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,rt,zs],function(yt){
		var zt=yt[0];
		Or.J(goog.math.Long.fromBits(0,0),Ys,Zs,ys,zt);
	       },[zd,Ad,Ed,Bd,vd,yd,gq,Or,ys,Ys,Zs]);break;
	      }break;
	     }
	    },[zd,Ad,Ed,Bd,vd,yd,gq,Yr,Or,ys,ws,zs]);
	   },[zd,Ad,Ed,Bd,vd,yd,gq,Or],"$wa9");
	   $S(Or,[zd,Ad,Bd,vd,yd,Yr]);
	   Yr.J(eq,Up,tp,dq);break;
	  case 2:
	   var Bt=$f(1,function(Ct){
	    $M(Ct,function(Dt){
	     var Et=Dt.v[1],Ft=Dt.v[3],Gt=Dt.v[5];
	     var Ht=$f(1,function(It){
	      $$GHCziIOziHandleziInternals_zdwa3.C([Dt,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),eq,It],function(Jt){
	       var Kt=Jt[0];
	       var Lt=$hs_readMutVarzh(Gt,Kt);
	       var Mt=Lt[0],Nt=Lt[1];
	       $M(Nt,function(Ot){
		var Pt=Ot.v[4],Qt=Ot.v[5];
		var Rt=Pt.equals(Qt)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Rt.g){
		case 1:
		 $$GHCziIOziBufferedIO_flushWriteBuffer.C([Et,Ft,Ot,Mt],function(St){
		  var Tt=St[0],Ut=St[1];
		  var Vt=$hs_writeMutVarzh(Gt,Ut,Tt);
		  $r([Vt,$$GHCziTuple_Z0T]);
		 },[Gt]);break;
		case 2:
		 $r([Mt,$$GHCziTuple_Z0T]);break;
		}
	       },[Gt,Et,Ft,Mt]);
	      },[Gt,Et,Ft]);
	     },[zd,Ad,Bd,eq,Dt,Gt,Et,Ft],"sat");
	     $A(Ht);
	    },[zd,Ad,Bd,eq]);
	   },[zd,Ad,Bd,eq],"sat");
	   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Bt,dq],function(Wt){
	    var Xt=Wt[0];
	    var Yt=$F(4,function(Zt,au,bu,cu){
	     var ev=Zt.add(goog.math.Long.fromBits(1,0));
	     var du=ev.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(du.g){
	     case 1:
	      $M(au,function(eu){
	       var fu=eu.v[0];
	       $M(fu,function(gu){
		switch(gu.toString()){
		case "\n":
		 var lu=$f(2,function(mu,nu){
		  var ou=$f(1,function(pu){
		   $M(pu,function(qu){
		    var ru=qu.v[1],su=qu.v[3],tu=qu.v[5];
		    var uu=$f(1,function(vu){
		     $$GHCziIOziHandleziInternals_zdwa3.C([qu,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),nu,vu],function(wu){
		      var xu=wu[0];
		      var yu=$hs_readMutVarzh(tu,xu);
		      var zu=yu[0],Au=yu[1];
		      $M(Au,function(Bu){
		       var Cu=Bu.v[4],Du=Bu.v[5];
		       var Eu=Cu.equals(Du)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(Eu.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([ru,su,Bu,zu],function(Fu){
			 var Gu=Fu[0],Hu=Fu[1];
			 var Iu=$hs_writeMutVarzh(tu,Hu,Gu);
			 $r([Iu,$$GHCziTuple_Z0T]);
			},[tu]);break;
		       case 2:
			$r([zu,$$GHCziTuple_Z0T]);break;
		       }
		      },[tu,ru,su,zu]);
		     },[tu,ru,su]);
		    },[zd,Ad,Bd,qu,nu,tu,ru,su],"sat");
		    $A(uu);
		   },[zd,Ad,Bd,nu]);
		  },[zd,Ad,Bd,nu],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,ou,mu],function(Ju){
		   var Ku=Ju[0];
		   hu.J(goog.math.Long.fromBits(0,0),bu,Ku);
		  },[zd,Ad,Ed,Bd,vd,yd,hu,bu]);
		 },[zd,Ad,Bd,vd,hu,bu],"$w$j1");
		 $M(yd,function(Lu){
		  switch(Lu.g){
		  case 1:
		   var Ou=$hs_writeWideCharOffAddrzh(zd,Zt,"\n",cu);
		   var Mu=$hs_touchzh(Ad,Ou);
		   var Nu=Zt.add(goog.math.Long.fromBits(1,0));
		   lu.J(Mu,Nu);break;
		  case 2:
		   var Uu=$hs_writeWideCharOffAddrzh(zd,Zt,"\r",cu);
		   var Tu=$hs_touchzh(Ad,Uu);
		   var Ru=Zt.add(goog.math.Long.fromBits(1,0));
		   var Su=$hs_writeWideCharOffAddrzh(zd,Ru,"\n",Tu);
		   var Pu=$hs_touchzh(Ad,Su);
		   var Qu=Ru.add(goog.math.Long.fromBits(1,0));
		   lu.J(Pu,Qu);break;
		  }
		 },[zd,Ad,Ed,Bd,vd,yd,Zt,cu,hu,bu,lu]);break;
		default:
		 var ku=$hs_writeWideCharOffAddrzh(zd,Zt,gu,cu);
		 var ju=$hs_touchzh(Ad,ku);
		 var iu=Zt.add(goog.math.Long.fromBits(1,0));
		 hu.J(iu,bu,ju);
		}
	       },[zd,Ad,Ed,Bd,vd,yd,Zt,cu,hu,bu]);
	      },[zd,Ad,Ed,Bd,vd,yd,Zt,cu,hu,bu]);break;
	     case 2:
	      var Vu=$f(1,function(Wu){
	       $M(Wu,function(Xu){
		var Yu=$f(1,function(Zu){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Xu,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Zt,Zu],function(av){
		  var bv=av[0];
		  $r([bv,$$GHCziTuple_Z0T]);
		 },[]);
		},[zd,Ad,Bd,Zt,Xu],"sat");
		$A(Yu);
	       },[zd,Ad,Bd,Zt]);
	      },[zd,Ad,Bd,Zt],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Vu,cu],function(cv){
	       var dv=cv[0];
	       Yt.J(goog.math.Long.fromBits(0,0),au,bu,dv);
	      },[zd,Ad,Ed,Bd,vd,yd,au,bu,Yt]);break;
	     }
	    },"$s$wa5"),hu=$f(3,function(fv,gv,hv){
	     $M(gv,function(iv){
	      switch(iv.g){
	      case 1:
	       var jv=$f(1,function(kv){
		$M(kv,function(lv){
		 var mv=lv.v[8],nv=lv.v[9];
		 var ov=$f(1,function(pv){
		  $$GHCziIOziHandleziInternals_zdwa3.C([lv,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),fv,pv],function(qv){
		   var rv=qv[0];
		   var sv=$hs_readMutVarzh(mv,rv);
		   var tv=sv[0],uv=sv[1];
		   $M(uv,function(vv){
		    var wv=vv.v[3];
		    var xv=Bd.equals(wv)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(xv.g){
		    case 1:
		     $r([tv,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var yv=$hs_readMutVarzh(nv,tv);
		     var zv=yv[0],Av=yv[1];
		     var Bv=$d(2,[Ed,Av],"sat");
		     var Cv=$hs_writeMutVarzh(nv,Bv,zv);
		     $r([Cv,$$GHCziTuple_Z0T]);break;
		    }
		   },[Ed,Bd,tv,nv]);
		  },[Ed,Bd,mv,nv]);
		 },[zd,Ad,Ed,Bd,lv,fv,mv,nv],"sat");
		 $A(ov);
		},[zd,Ad,Ed,Bd,fv]);
	       },[zd,Ad,Ed,Bd,fv],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,jv,hv);break;
	      case 2:
	       var Dv=iv.v[0],Ev=iv.v[1];
	       var Fw=fv.add(goog.math.Long.fromBits(1,0));
	       var Fv=Fw.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Fv.g){
	       case 1:
		$M(Dv,function(Gv){
		 var Hv=Gv.v[0];
		 $M(Hv,function(Iv){
		  switch(Iv.toString()){
		  case "\n":
		   var Mv=$f(2,function(Nv,Ov){
		    var Pv=$f(1,function(Qv){
		     $M(Qv,function(Rv){
		      var Sv=Rv.v[1],Tv=Rv.v[3],Uv=Rv.v[5];
		      var Vv=$f(1,function(Wv){
		       $$GHCziIOziHandleziInternals_zdwa3.C([Rv,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Ov,Wv],function(Xv){
			var Yv=Xv[0];
			var Zv=$hs_readMutVarzh(Uv,Yv);
			var aw=Zv[0],bw=Zv[1];
			$M(bw,function(cw){
			 var dw=cw.v[4],ew=cw.v[5];
			 var fw=dw.equals(ew)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(fw.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([Sv,Tv,cw,aw],function(gw){
			   var hw=gw[0],iw=gw[1];
			   var jw=$hs_writeMutVarzh(Uv,iw,hw);
			   $r([jw,$$GHCziTuple_Z0T]);
			  },[Uv]);break;
			 case 2:
			  $r([aw,$$GHCziTuple_Z0T]);break;
			 }
			},[Uv,Sv,Tv,aw]);
		       },[Uv,Sv,Tv]);
		      },[zd,Ad,Bd,Rv,Ov,Uv,Sv,Tv],"sat");
		      $A(Vv);
		     },[zd,Ad,Bd,Ov]);
		    },[zd,Ad,Bd,Ov],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Pv,Nv],function(kw){
		     var lw=kw[0];
		     hu.J(goog.math.Long.fromBits(0,0),Ev,lw);
		    },[zd,Ad,Ed,Bd,vd,yd,hu,Ev]);
		   },[zd,Ad,Bd,vd,hu,Ev],"$w$j1");
		   $M(yd,function(mw){
		    switch(mw.g){
		    case 1:
		     var pw=$hs_writeWideCharOffAddrzh(zd,fv,"\n",hv);
		     var nw=$hs_touchzh(Ad,pw);
		     var ow=fv.add(goog.math.Long.fromBits(1,0));
		     Mv.J(nw,ow);break;
		    case 2:
		     var vw=$hs_writeWideCharOffAddrzh(zd,fv,"\r",hv);
		     var uw=$hs_touchzh(Ad,vw);
		     var sw=fv.add(goog.math.Long.fromBits(1,0));
		     var tw=$hs_writeWideCharOffAddrzh(zd,sw,"\n",uw);
		     var qw=$hs_touchzh(Ad,tw);
		     var rw=sw.add(goog.math.Long.fromBits(1,0));
		     Mv.J(qw,rw);break;
		    }
		   },[zd,Ad,Ed,Bd,vd,yd,hu,fv,hv,Ev,Mv]);break;
		  default:
		   var Lv=$hs_writeWideCharOffAddrzh(zd,fv,Iv,hv);
		   var Kv=$hs_touchzh(Ad,Lv);
		   var Jv=fv.add(goog.math.Long.fromBits(1,0));
		   hu.J(Jv,Ev,Kv);
		  }
		 },[zd,Ad,Ed,Bd,vd,yd,hu,fv,hv,Ev]);
		},[zd,Ad,Ed,Bd,vd,yd,hu,fv,hv,Ev]);break;
	       case 2:
		var ww=$f(1,function(xw){
		 $M(xw,function(yw){
		  var zw=$f(1,function(Aw){
		   $$GHCziIOziHandleziInternals_zdwa3.C([yw,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),fv,Aw],function(Bw){
		    var Cw=Bw[0];
		    $r([Cw,$$GHCziTuple_Z0T]);
		   },[]);
		  },[zd,Ad,Bd,fv,yw],"sat");
		  $A(zw);
		 },[zd,Ad,Bd,fv]);
		},[zd,Ad,Bd,fv],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,ww,hv],function(Dw){
		 var Ew=Dw[0];
		 Yt.J(goog.math.Long.fromBits(0,0),Dv,Ev,Ew);
		},[zd,Ad,Ed,Bd,vd,yd,Yt,Dv,Ev]);break;
	       }break;
	      }
	     },[zd,Ad,Ed,Bd,vd,yd,hu,Yt,fv,hv]);
	    },[zd,Ad,Ed,Bd,vd,yd,Yt],"$s$wa6");
	    $S(Yt,[zd,Ad,Bd,vd,yd,hu]);
	    var Gw=$F(5,function(Hw,Iw,Jw,Kw,Lw){
	     var Nx=Hw.add(goog.math.Long.fromBits(1,0));
	     var Mw=Nx.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Mw.g){
	     case 1:
	      $M(Iw,function(Nw){
	       var Ow=Nw.v[0];
	       $M(Ow,function(Pw){
		switch(Pw.toString()){
		case "\n":
		 var Uw=$f(2,function(Vw,Ww){
		  var Xw=$f(1,function(Yw){
		   $M(Yw,function(Zw){
		    var ax=Zw.v[1],bx=Zw.v[3],cx=Zw.v[5];
		    var dx=$f(1,function(ex){
		     $$GHCziIOziHandleziInternals_zdwa3.C([Zw,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Ww,ex],function(fx){
		      var gx=fx[0];
		      var hx=$hs_readMutVarzh(cx,gx);
		      var ix=hx[0],jx=hx[1];
		      $M(jx,function(kx){
		       var lx=kx.v[4],mx=kx.v[5];
		       var nx=lx.equals(mx)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(nx.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([ax,bx,kx,ix],function(ox){
			 var px=ox[0],qx=ox[1];
			 var rx=$hs_writeMutVarzh(cx,qx,px);
			 $r([rx,$$GHCziTuple_Z0T]);
			},[cx]);break;
		       case 2:
			$r([ix,$$GHCziTuple_Z0T]);break;
		       }
		      },[cx,ax,bx,ix]);
		     },[cx,ax,bx]);
		    },[zd,Ad,Bd,Zw,Ww,cx,ax,bx],"sat");
		    $A(dx);
		   },[zd,Ad,Bd,Ww]);
		  },[zd,Ad,Bd,Ww],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Xw,Vw],function(sx){
		   var tx=sx[0];
		   Qw.J(goog.math.Long.fromBits(0,0),Jw,Kw,tx);
		  },[zd,Ad,Ed,Bd,vd,yd,Yt,Qw,Jw,Kw]);
		 },[zd,Ad,Bd,vd,Qw,Jw,Kw],"$w$j1");
		 $M(yd,function(ux){
		  switch(ux.g){
		  case 1:
		   var xx=$hs_writeWideCharOffAddrzh(zd,Hw,"\n",Lw);
		   var vx=$hs_touchzh(Ad,xx);
		   var wx=Hw.add(goog.math.Long.fromBits(1,0));
		   Uw.J(vx,wx);break;
		  case 2:
		   var Dx=$hs_writeWideCharOffAddrzh(zd,Hw,"\r",Lw);
		   var Cx=$hs_touchzh(Ad,Dx);
		   var Ax=Hw.add(goog.math.Long.fromBits(1,0));
		   var Bx=$hs_writeWideCharOffAddrzh(zd,Ax,"\n",Cx);
		   var yx=$hs_touchzh(Ad,Bx);
		   var zx=Ax.add(goog.math.Long.fromBits(1,0));
		   Uw.J(yx,zx);break;
		  }
		 },[zd,Ad,Ed,Bd,vd,yd,Yt,Hw,Lw,Qw,Jw,Kw,Uw]);break;
		default:
		 var Tw=$hs_writeWideCharOffAddrzh(zd,Hw,Pw,Lw);
		 var Sw=$hs_touchzh(Ad,Tw);
		 var Rw=Hw.add(goog.math.Long.fromBits(1,0));
		 Qw.J(Rw,Jw,Kw,Sw);
		}
	       },[zd,Ad,Ed,Bd,vd,yd,Yt,Hw,Lw,Qw,Jw,Kw]);
	      },[zd,Ad,Ed,Bd,vd,yd,Yt,Hw,Lw,Qw,Jw,Kw]);break;
	     case 2:
	      var Ex=$f(1,function(Fx){
	       $M(Fx,function(Gx){
		var Hx=$f(1,function(Ix){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Gx,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Hw,Ix],function(Jx){
		  var Kx=Jx[0];
		  $r([Kx,$$GHCziTuple_Z0T]);
		 },[]);
		},[zd,Ad,Bd,Hw,Gx],"sat");
		$A(Hx);
	       },[zd,Ad,Bd,Hw]);
	      },[zd,Ad,Bd,Hw],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Ex,Lw],function(Lx){
	       var Mx=Lx[0];
	       Gw.J(goog.math.Long.fromBits(0,0),Iw,Jw,Kw,Mx);
	      },[zd,Ad,Ed,Bd,vd,yd,Yt,Iw,Jw,Kw,Gw]);break;
	     }
	    },"$s$wa7"),Qw=$f(4,function(Ox,Px,Qx,Rx){
	     $M(Px,function(Sx){
	      switch(Sx.g){
	      case 1:
	       $M(Qx,function(Tx){
		switch(Tx.g){
		case 1:
		 var Ux=$f(1,function(Vx){
		  $M(Vx,function(Wx){
		   var Xx=Wx.v[8],Yx=Wx.v[9];
		   var Zx=$f(1,function(ay){
		    $$GHCziIOziHandleziInternals_zdwa3.C([Wx,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Ox,ay],function(by){
		     var cy=by[0];
		     var dy=$hs_readMutVarzh(Xx,cy);
		     var ey=dy[0],fy=dy[1];
		     $M(fy,function(gy){
		      var hy=gy.v[3];
		      var iy=Bd.equals(hy)?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(iy.g){
		      case 1:
		       $r([ey,$$GHCziTuple_Z0T]);break;
		      case 2:
		       var jy=$hs_readMutVarzh(Yx,ey);
		       var ky=jy[0],ly=jy[1];
		       var my=$d(2,[Ed,ly],"sat");
		       var ny=$hs_writeMutVarzh(Yx,my,ky);
		       $r([ny,$$GHCziTuple_Z0T]);break;
		      }
		     },[Ed,Bd,ey,Yx]);
		    },[Ed,Bd,Xx,Yx]);
		   },[zd,Ad,Ed,Bd,Wx,Ox,Xx,Yx],"sat");
		   $A(Zx);
		  },[zd,Ad,Ed,Bd,Ox]);
		 },[zd,Ad,Ed,Bd,Ox],"sat");
		 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,vd,Ux,Rx);break;
		case 2:
		 var oy=Tx.v[0],py=Tx.v[1];
		 Yt.J(Ox,oy,py,Rx);break;
		}
	       },[zd,Ad,Ed,Bd,vd,yd,Yt,Ox,Rx]);break;
	      case 2:
	       var qy=Sx.v[0],ry=Sx.v[1];
	       var sz=Ox.add(goog.math.Long.fromBits(1,0));
	       var sy=sz.greaterThanOrEqual(Bd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(sy.g){
	       case 1:
		$M(qy,function(ty){
		 var uy=ty.v[0];
		 $M(uy,function(vy){
		  switch(vy.toString()){
		  case "\n":
		   var zy=$f(2,function(Ay,By){
		    var Cy=$f(1,function(Dy){
		     $M(Dy,function(Ey){
		      var Fy=Ey.v[1],Gy=Ey.v[3],Hy=Ey.v[5];
		      var Iy=$f(1,function(Jy){
		       $$GHCziIOziHandleziInternals_zdwa3.C([Ey,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),By,Jy],function(Ky){
			var Ly=Ky[0];
			var My=$hs_readMutVarzh(Hy,Ly);
			var Ny=My[0],Oy=My[1];
			$M(Oy,function(Py){
			 var Qy=Py.v[4],Ry=Py.v[5];
			 var Sy=Qy.equals(Ry)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Sy.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([Fy,Gy,Py,Ny],function(Ty){
			   var Uy=Ty[0],Vy=Ty[1];
			   var Wy=$hs_writeMutVarzh(Hy,Vy,Uy);
			   $r([Wy,$$GHCziTuple_Z0T]);
			  },[Hy]);break;
			 case 2:
			  $r([Ny,$$GHCziTuple_Z0T]);break;
			 }
			},[Hy,Fy,Gy,Ny]);
		       },[Hy,Fy,Gy]);
		      },[zd,Ad,Bd,Ey,By,Hy,Fy,Gy],"sat");
		      $A(Iy);
		     },[zd,Ad,Bd,By]);
		    },[zd,Ad,Bd,By],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Cy,Ay],function(Xy){
		     var Yy=Xy[0];
		     Qw.J(goog.math.Long.fromBits(0,0),ry,Qx,Yy);
		    },[zd,Ad,Ed,Bd,vd,yd,Yt,Qw,Qx,ry]);
		   },[zd,Ad,Bd,vd,Qw,Qx,ry],"$w$j1");
		   $M(yd,function(Zy){
		    switch(Zy.g){
		    case 1:
		     var cz=$hs_writeWideCharOffAddrzh(zd,Ox,"\n",Rx);
		     var az=$hs_touchzh(Ad,cz);
		     var bz=Ox.add(goog.math.Long.fromBits(1,0));
		     zy.J(az,bz);break;
		    case 2:
		     var iz=$hs_writeWideCharOffAddrzh(zd,Ox,"\r",Rx);
		     var hz=$hs_touchzh(Ad,iz);
		     var fz=Ox.add(goog.math.Long.fromBits(1,0));
		     var gz=$hs_writeWideCharOffAddrzh(zd,fz,"\n",hz);
		     var dz=$hs_touchzh(Ad,gz);
		     var ez=fz.add(goog.math.Long.fromBits(1,0));
		     zy.J(dz,ez);break;
		    }
		   },[zd,Ad,Ed,Bd,vd,yd,Yt,Qw,Qx,Ox,Rx,ry,zy]);break;
		  default:
		   var yy=$hs_writeWideCharOffAddrzh(zd,Ox,vy,Rx);
		   var xy=$hs_touchzh(Ad,yy);
		   var wy=Ox.add(goog.math.Long.fromBits(1,0));
		   Qw.J(wy,ry,Qx,xy);
		  }
		 },[zd,Ad,Ed,Bd,vd,yd,Yt,Qw,Qx,Ox,Rx,ry]);
		},[zd,Ad,Ed,Bd,vd,yd,Yt,Qw,Qx,Ox,Rx,ry]);break;
	       case 2:
		var jz=$f(1,function(kz){
		 $M(kz,function(lz){
		  var mz=$f(1,function(nz){
		   $$GHCziIOziHandleziInternals_zdwa3.C([lz,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),Ox,nz],function(oz){
		    var pz=oz[0];
		    $r([pz,$$GHCziTuple_Z0T]);
		   },[]);
		  },[zd,Ad,Bd,Ox,lz],"sat");
		  $A(mz);
		 },[zd,Ad,Bd,Ox]);
		},[zd,Ad,Bd,Ox],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,jz,Rx],function(qz){
		 var rz=qz[0];
		 Gw.J(goog.math.Long.fromBits(0,0),qy,ry,Qx,rz);
		},[zd,Ad,Ed,Bd,vd,yd,Yt,Gw,Qx,qy,ry]);break;
	       }break;
	      }
	     },[zd,Ad,Ed,Bd,vd,yd,Yt,Qw,Gw,Qx,Ox,Rx]);
	    },[zd,Ad,Ed,Bd,vd,yd,Yt,Gw],"$wa9");
	    $S(Gw,[zd,Ad,Bd,vd,yd,Qw]);
	    Qw.J(goog.math.Long.fromBits(0,0),Up,tp,Xt);
	   },[zd,Ad,Ed,Bd,vd,yd,tp,Up]);break;
	  }
	 },[zd,Ad,Ed,Bd,vd,yd,tp,Up,eq,dq]);
	},[zd,Ad,Ed,Bd,wd,vd,yd,tp,Up],"$w$j");
	$M(yd,function(tz){
	 switch(tz.g){
	 case 1:
	  var wz=$hs_writeWideCharOffAddrzh(zd,rp,"\n",up);
	  var uz=$hs_touchzh(Ad,wz);
	  var vz=rp.add(goog.math.Long.fromBits(1,0));
	  cq.J(uz,vz);break;
	 case 2:
	  var Cz=$hs_writeWideCharOffAddrzh(zd,rp,"\r",up);
	  var Bz=$hs_touchzh(Ad,Cz);
	  var zz=rp.add(goog.math.Long.fromBits(1,0));
	  var Az=$hs_writeWideCharOffAddrzh(zd,zz,"\n",Bz);
	  var xz=$hs_touchzh(Ad,Az);
	  var yz=zz.add(goog.math.Long.fromBits(1,0));
	  cq.J(xz,yz);break;
	 }
	},[zd,Ad,Ed,Bd,wd,vd,yd,tp,rp,up,Up,cq]);break;
       default:
	var bq=$hs_writeWideCharOffAddrzh(zd,rp,Yp,up);
	var aq=$hs_touchzh(Ad,bq);
	var Zp=rp.add(goog.math.Long.fromBits(1,0));
	Il.J(Zp,Up,tp,aq);
       }
      },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,Il,tp,rp,up,Up]);
     },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,Il,tp,rp,up,Up]);break;
    case 2:
     var Dz=$f(1,function(Ez){
      $M(Ez,function(Fz){
       var Gz=$f(1,function(Hz){
	$$GHCziIOziHandleziInternals_zdwa3.C([Fz,zd,Ad,$$GHCziIOziBuffer_WriteBuffer,Bd,goog.math.Long.fromBits(0,0),rp,Hz],function(Iz){
	 var Jz=Iz[0];
	 $r([Jz,$$GHCziTuple_Z0T]);
	},[]);
       },[zd,Ad,Bd,rp,Fz],"sat");
       $A(Gz);
      },[zd,Ad,Bd,rp]);
     },[zd,Ad,Bd,rp],"sat");
     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,vd,Dz,up],function(Kz){
      var Lz=Kz[0];
      yl.J(goog.math.Long.fromBits(0,0),Tp,Up,tp,Lz);
     },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,yl,tp,Tp,Up]);break;
    }break;
   }
  },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,Il,yl,tp,rp,up]);
 },[zd,Ad,Ed,Bd,wd,vd,yd,Fd,yl],"$wa8");
 $S(yl,[zd,Ad,Ed,Bd,wd,vd,yd,Il]);
 var Nz=$t(function(){
  $M(xd,function(Oz){
   switch(Oz.g){
   case 1:
    $R(1,[],"[]");break;
   case 2:
    $A($$GHCziIOziHandleziText$o);break;
   }
  },[]);
 },[xd],"sat");
 Il.J(goog.math.Long.fromBits(0,0),Cd,Nz,Dd);
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
var $$GHCziIOziHandleziText_hPutStr4=$f(2,function(Pz,Qz){
 $M(Pz,function(Rz){
  var Sz=Rz.v[6],Tz=Rz.v[8],Uz=Rz.v[9],Vz=Rz.v[14];
  $M(Sz,function(Wz){
   switch(Wz.g){
   case 1:
    var FA=$d(1,[$$GHCziIOziHandleziText_hPutStr5,Vz],"sat");
    $r([Qz,FA]);break;
   default:
    var Xz=$hs_readMutVarzh(Uz,Qz);
    var Yz=Xz[0],Zz=Xz[1];
    var aA=$hs_readMutVarzh(Tz,Yz);
    var bA=aA[0],cA=aA[1];
    $M(Zz,function(dA){
     switch(dA.g){
     case 1:
      $M(cA,function(eA){
       var fA=eA.v[3];
       var tA=fA.multiply(goog.math.Long.fromBits(4,0));
       var gA=tA.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(gA.g){
       case 1:
	var hA=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,bA);
	var iA=hA[0],jA=hA[1];
	var kA=$hs_newPinnedByteArrayzh(tA,iA);
	var lA=kA[0],mA=kA[1];
	var nA=$d(1,[jA],"sat");
	var oA=$d(2,[mA,nA],"sat");
	var qA=$hs_byteArrayContentszh(mA);
	var pA=$d(1,[qA,oA,$$GHCziIOziBuffer_WriteBuffer,fA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
	var rA=$d(1,[Wz,pA],"sat");
	var sA=$d(1,[rA,Vz],"sat");
	$r([lA,sA]);break;
       case 2:
	$A($$GHCziForeignPtr_mallocForeignPtrBytes2);break;
       }
      },[bA,Wz,Vz]);break;
     case 2:
      var uA=dA.v[0],vA=dA.v[1];
      var EA=$hs_writeMutVarzh(Uz,vA,bA);
      var wA=$t(function(){
       $M(uA,function(xA){
	var yA=xA.v[0],zA=xA.v[1];
	$M(cA,function(AA){
	 var BA=AA.v[3];
	 $R(1,[yA,zA,$$GHCziIOziBuffer_WriteBuffer,BA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	},[yA,zA]);
       },[cA]);
      },[cA,uA],"sat");
      var CA=$d(1,[Wz,wA],"sat");
      var DA=$d(1,[CA,Vz],"sat");
      $r([EA,DA]);break;
     }
    },[Uz,cA,bA,Wz,Vz]);
   }
  },[Uz,Qz,Tz,Vz]);
 },[Qz]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr2=$f(4,function(GA,HA,IA,JA){
 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText_hPutStr7,GA,$$GHCziIOziHandleziText_hPutStr4,JA],function(KA){
  var LA=KA[0],MA=KA[1];
  $M(MA,function(NA){
   var OA=NA.v[0],PA=NA.v[1];
   $M(OA,function(QA){
    var RA=QA.v[0],SA=QA.v[1];
    $M(RA,function(TA){
     switch(TA.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr3.C([GA,HA,LA],function(UA){
       var VA=UA[0];
       $M(IA,function(WA){
	switch(WA.g){
	case 1:
	 $r([VA,$$GHCziTuple_Z0T]);break;
	case 2:
	 $$GHCziIOziHandleziText_zdwa5.J(GA,"\n",VA);break;
	}
       },[GA,VA]);
      },[GA,IA]);break;
     case 2:
      $M(SA,function(XA){
       var YA=XA.v[0],ZA=XA.v[1],aB=XA.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(GA,$$GHCziTypes_True,IA,PA,YA,ZA,aB,HA,LA);
      },[GA,HA,LA,IA,PA]);break;
     case 3:
      $M(SA,function(bB){
       var cB=bB.v[0],dB=bB.v[1],eB=bB.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(GA,$$GHCziTypes_False,IA,PA,cB,dB,eB,HA,LA);
      },[GA,HA,LA,IA,PA]);break;
     }
    },[GA,HA,LA,IA,SA,PA]);
   },[GA,HA,LA,IA,PA]);
  },[GA,HA,LA,IA]);
 },[GA,HA,IA]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStrLn1=$f(3,function(iB,jB,kB){
 $$GHCziIOziHandleziText_hPutStr2.J(iB,jB,$$GHCziTypes_True,kB);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText$b=$F(2,function(ZM,aN){
 $M(ZM,function(bN){
  var cN=bN.v[0],dN=bN.v[1];
  $$GHCziException_zdp1Exception.C([cN,dN],function(eN){
   var fN=eN.v[0],gN=eN.v[1];
   var hN=$hs_eqWordzh(fN,goog.math.Long.fromBits(4053623282,1685460941));
   switch(hN.g){
   case 1:
    $r($hs_raiseIOzh(bN,aN));break;
   case 2:
    var iN=$hs_eqWordzh(gN,goog.math.Long.fromBits(3693590983,2507416641));
    switch(iN.g){
    case 1:
     $r($hs_raiseIOzh(bN,aN));break;
    case 2:
     $M(dN,function(jN){
      var kN=jN.v[1];
      $M(kN,function(lN){
       switch(lN.g){
       case 5:
	$r([aN,$$DataziMaybe_Nothing]);break;
       default:
	$$GHCziIOziException_ioError.J(jN,aN);
       }
      },[aN,jN]);
     },[aN]);break;
    }break;
   }
  },[dN,bN,aN]);
 },[aN]);
},"lvl");
var $$GHCziIOziHandleziText$c=$F(3,function(mN,nN,oN){
 var pN=$f(1,function(qN){
  $M(mN,function(rN){
   var sN=rN.v[13];
   $M(nN,function(tN){
    var uN=tN.v[0],vN=tN.v[1],wN=tN.v[2],xN=tN.v[3],yN=tN.v[4],zN=tN.v[5];
    var AN=zN.subtract(yN);
    switch(AN.toString()){
    case "0":
     $$GHCziIOziHandleziInternals_hLookAheadzu2.C([rN,tN,qN],function(CN){
      var DN=CN[0],EN=CN[1];
      var FN=$d(2,[EN],"sat");
      $r([DN,FN]);
     },[]);break;
    case "1":
     $M(sN,function(GN){
      switch(GN.g){
      case 1:
       var HN=$d(2,[tN],"sat");
       $r([qN,HN]);break;
      case 2:
       var IN=$hs_readWideCharOffAddrzh(uN,yN,qN);
       var JN=IN[0],KN=IN[1];
       var NN=$hs_touchzh(vN,JN);
       $M(KN,function(LN){
	switch(LN.toString()){
	case "\r":
	 var UN=$hs_writeWideCharOffAddrzh(uN,goog.math.Long.fromBits(0,0),"\r",NN);
	 var TN=$hs_touchzh(vN,UN);
	 var ON=$d(1,[uN,vN,wN,xN,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0)],"sat");
	 $$GHCziIOziHandleziInternals_hLookAheadzu2.C([rN,ON,TN],function(PN){
	  var QN=PN[0],RN=PN[1];
	  var SN=$d(2,[RN],"sat");
	  $r([QN,SN]);
	 },[]);break;
	default:
	 var MN=$d(2,[tN],"sat");
	 $r([NN,MN]);
	}
       },[tN,rN,uN,vN,NN,wN,xN]);break;
      }
     },[yN,qN,tN,rN,uN,vN,wN,xN]);break;
    default:
     var BN=$d(2,[tN],"sat");
     $r([qN,BN]);
    }
   },[qN,rN,sN]);
  },[nN,qN]);
 },[mN,nN],"sat");
 $k($hs_catchzh,[pN,$$GHCziIOziHandleziText$b,oN]);
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
var $$GHCziIOziHandleziText$g=$F(6,function(VN,WN,XN,YN,ZN,aO){
 var bO=XN.equals(YN)?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(bO.g){
 case 1:
  var TO=YN.subtract(goog.math.Long.fromBits(1,0));
  var cO=$hs_readWideCharOffAddrzh(VN,TO,aO);
  var dO=cO[0],eO=cO[1];
  var fO=$f(3,function(gO,hO,iO){
   var jO=hO.lessThan(XN)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(jO.g){
   case 1:
    var kO=$hs_readWideCharOffAddrzh(VN,hO,iO);
    var lO=kO[0],mO=kO[1];
    $M(mO,function(nO){
     switch(nO.toString()){
     case "\n":
      var rO=hO.greaterThan(XN)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(rO.g){
      case 1:
       var tO=hO.subtract(goog.math.Long.fromBits(1,0));
       var sO=$d(2,[$$GHCziIOziHandleziText$e,gO],"sat");
       fO.J(sO,tO,lO);break;
      case 2:
       var CO=hO.subtract(goog.math.Long.fromBits(1,0));
       var uO=$hs_readWideCharOffAddrzh(VN,CO,lO);
       var vO=uO[0],wO=uO[1];
       $M(wO,function(xO){
	switch(xO.toString()){
	case "\r":
	 var BO=hO.subtract(goog.math.Long.fromBits(2,0));
	 var AO=$d(2,[$$GHCziIOziHandleziText$e,gO],"sat");
	 fO.J(AO,BO,vO);break;
	default:
	 var zO=hO.subtract(goog.math.Long.fromBits(1,0));
	 var yO=$d(2,[$$GHCziIOziHandleziText$e,gO],"sat");
	 fO.J(yO,zO,vO);
	}
       },[hO,gO,fO,vO]);break;
      }break;
     default:
      var qO=hO.subtract(goog.math.Long.fromBits(1,0));
      var oO=$d(1,[nO],"sat");
      var pO=$d(2,[oO,gO],"sat");
      fO.J(pO,qO,lO);
     }
    },[XN,VN,hO,gO,fO,lO]);break;
   case 2:
    $r([iO,gO]);break;
   }
  },[XN,VN],"$wa8");
  $M(eO,function(DO){
   switch(DO.toString()){
   case "\r":
    var SO=YN.subtract(goog.math.Long.fromBits(2,0));
    fO.C([ZN,SO,dO],function(LO){
     var MO=LO[0],NO=LO[1];
     var RO=$hs_touchzh(WN,MO);
     var PO=YN.subtract(goog.math.Long.fromBits(1,0));
     var OO=$d(1,[PO],"sat");
     var QO=$d(1,[NO,OO],"sat");
     $r([RO,QO]);
    },[YN,WN]);break;
   default:
    var KO=YN.subtract(goog.math.Long.fromBits(1,0));
    fO.C([ZN,KO,dO],function(EO){
     var FO=EO[0],GO=EO[1];
     var JO=$hs_touchzh(WN,FO);
     var HO=$d(1,[YN],"sat");
     var IO=$d(1,[GO,HO],"sat");
     $r([JO,IO]);
    },[YN,WN]);
   }
  },[YN,fO,ZN,dO,WN]);break;
 case 2:
  var UO=$d(1,[ZN,$$GHCziIOziHandleziText_hPutBuf3],"sat");
  $r([aO,UO]);break;
 }
},"$wa7");
var $$GHCziIOziHandleziText$l=$D(2,function(){
 $r([$$GHCziIOziHandleziText$d,$$GHCziTypes_ZMZN]);
},"lvl7");
var $$GHCziIOziHandleziText$m=$F(1,function(cP){
 $M(cP,function(dP){
  switch(dP.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var eP=dP.v[0],fP=dP.v[1];
   var gP=$t(function(){
    $$GHCziIOziHandleziText$m.J(fP);
   },[fP],"sat");
   $$GHCziBase_zpzp.J(eP,gP);break;
  }
 },[]);
},"go");
var $$GHCziIOziHandleziText$n=$F(1,function(hP){
 $M(hP,function(iP){
  switch(iP.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var jP=iP.v[0],kP=iP.v[1];
   var lP=$t(function(){
    $$GHCziIOziHandleziText$n.J(kP);
   },[kP],"sat");
   $$GHCziBase_zpzp.J(jP,lP);break;
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
var $$GHCziList_errorEmptyList=$f(1,function(a){
 var b=$t(function(){
  $$GHCziBase_zpzp.J(a,$$GHCziList$b);
 },[a],"sat");
 $$GHCziBase_zpzp.C([$$GHCziList$a,b],function(c){
  $$GHCziErr_error.J(c);
 },[]);
},[],"at libraries/base/GHC/List.lhs:738:1");
var $$GHCziList_znznzusub=$f(2,function(k1,l1){
 $M(k1,function(m1){
  switch(m1.g){
  case 1:
   $A($$GHCziList$h);break;
  case 2:
   var n1=m1.v[0],o1=m1.v[1];
   $M(l1,function(p1){
    switch(p1.toString()){
    case "0":
     $A(n1);break;
    default:
     var q1=p1.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziList_znznzusub.J(o1,q1);
    }
   },[o1,n1]);break;
  }
 },[l1]);
},[],"at libraries/base/GHC/List.lhs:596:29");
var $$GHCziList_znzn1=$t(function(){
 $$GHCziErr_error.J($$GHCziList$i);
},[],"in `base:GHC.List'");
var $$GHCziList_elem=$f(3,function(W1,X1,Y1){
 $M(Y1,function(Z1){
  switch(Z1.g){
  case 1:
   $R(1,[],"False");break;
  case 2:
   var a2=Z1.v[0],b2=Z1.v[1];
   $$GHCziClasses_zeze.C([W1,X1,a2],function(c2){
    switch(c2.g){
    case 1:
     $$GHCziList_elem.J(W1,X1,b2);break;
    case 2:
     $R(2,[],"True");break;
    }
   },[W1,X1,b2]);break;
  }
 },[W1,X1]);
},[],"at libraries/base/GHC/List.lhs:547:1");
var $$GHCziList_all=$f(2,function(d2,e2){
 $M(e2,function(f2){
  switch(f2.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   var g2=f2.v[0],h2=f2.v[1];
   d2.C([g2],function(i2){
    switch(i2.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     $$GHCziList_all.J(d2,h2);break;
    }
   },[d2,h2]);break;
  }
 },[d2]);
},[],"at libraries/base/GHC/List.lhs:526:1");
var $$GHCziList_and=$f(1,function(u2){
 $M(u2,function(v2){
  switch(v2.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   var w2=v2.v[0],x2=v2.v[1];
   $M(w2,function(y2){
    switch(y2.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     $$GHCziList_and.J(x2);break;
    }
   },[x2]);break;
  }
 },[]);
},[],"at libraries/base/GHC/List.lhs:495:1");
var $$GHCziList_reverse1=$f(2,function(z2,A2){
 $M(z2,function(B2){
  switch(B2.g){
  case 1:
   $A(A2);break;
  case 2:
   var C2=B2.v[0],D2=B2.v[1];
   var E2=$d(2,[C2,A2],"sat");
   $$GHCziList_reverse1.J(D2,E2);break;
  }
 },[A2]);
},[],"in `base:GHC.List'");
var $$GHCziList_zdwbreak=$f(2,function(G2,H2){
 $M(H2,function(I2){
  switch(I2.g){
  case 1:
   $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
  case 2:
   var J2=I2.v[0],K2=I2.v[1];
   G2.C([J2],function(L2){
    switch(L2.g){
    case 1:
     var M2=$t(function(){
      $$GHCziList_zdwbreak.C([G2,K2],function(N2){
       var O2=N2[0],P2=N2[1];
       $R(1,[O2,P2],"(,)");
      },[]);
     },[G2,K2],"ds");
     var Q2=$t(function(){
      $M(M2,function(R2){
       var S2=R2.v[1];
       $A(S2);
      },[]);
     },[M2],"sat");
     var T2=$t(function(){
      $M(M2,function(U2){
       var V2=U2.v[0];
       $A(V2);
      },[]);
     },[M2],"sat");
     var W2=$d(2,[J2,T2],"sat");
     $r([W2,Q2]);break;
    case 2:
     $r([$$GHCziTypes_ZMZN,I2]);break;
    }
   },[J2,G2,K2,I2]);break;
  }
 },[G2]);
},[],"at libraries/base/GHC/List.lhs:464:1");
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
var $$GHCziList_zdwsplitAtzh=$f(2,function(y3,z3){
 $M(y3,function(A3){
  switch(A3.toString()){
  case "0":
   $r([$$GHCziTypes_ZMZN,z3]);break;
  default:
   $M(z3,function(B3){
    switch(B3.g){
    case 1:
     $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
    case 2:
     var C3=B3.v[0],D3=B3.v[1];
     var E3=$t(function(){
      var I3=A3.subtract(goog.math.Long.fromBits(1,0));
      $$GHCziList_zdwsplitAtzh.C([I3,D3],function(F3){
       var G3=F3[0],H3=F3[1];
       $R(1,[G3,H3],"(,)");
      },[]);
     },[A3,D3],"ds1");
     var J3=$t(function(){
      $M(E3,function(K3){
       var L3=K3.v[1];
       $A(L3);
      },[]);
     },[E3],"sat");
     var M3=$t(function(){
      $M(E3,function(N3){
       var O3=N3.v[0];
       $A(O3);
      },[]);
     },[E3],"sat");
     var P3=$d(2,[C3,M3],"sat");
     $r([P3,J3]);break;
    }
   },[A3]);
  }
 },[z3]);
},[],"at libraries/base/GHC/List.lhs:425:9");
var $$GHCziList_takezuunsafezuUInt=$f(2,function(y4,z4){
 $M(y4,function(A4){
  switch(A4.toString()){
  case "0":
   $R(1,[],"[]");break;
  default:
   $M(z4,function(B4){
    switch(B4.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var C4=B4.v[0],D4=B4.v[1];
     var E4=$t(function(){
      var F4=A4.subtract(goog.math.Long.fromBits(1,0));
      $$GHCziList_takezuunsafezuUInt.J(F4,D4);
     },[A4,D4],"sat");
     $R(2,[C4,E4],":");break;
    }
   },[A4]);
  }
 },[z4]);
},[],"at libraries/base/GHC/List.lhs:393:1");
var $$GHCziList_dropWhile=$f(2,function(c5,d5){
 $M(d5,function(e5){
  switch(e5.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var f5=e5.v[0],g5=e5.v[1];
   c5.C([f5],function(h5){
    switch(h5.g){
    case 1:
     $A(e5);break;
    case 2:
     $$GHCziList_dropWhile.J(c5,g5);break;
    }
   },[c5,e5,g5]);break;
  }
 },[c5]);
},[],"at libraries/base/GHC/List.lhs:296:1");
var $$GHCziList_foldr3=$t(function(){
 $$GHCziList_errorEmptyList.J($$GHCziList$l);
},[],"in `base:GHC.List'");
var $$GHCziList_foldr1zuzdsfoldr1=$f(3,function(P6,Q6,R6){
 $M(R6,function(S6){
  switch(S6.g){
  case 1:
   $A(Q6);break;
  case 2:
   var T6=S6.v[0],U6=S6.v[1];
   var V6=$t(function(){
    $$GHCziList_foldr1zuzdsfoldr1.J(P6,T6,U6);
   },[P6,T6,U6],"sat");
   P6.J(Q6,V6);break;
  }
 },[Q6,P6]);
},[],"at libraries/base/GHC/List.lhs:202:1");
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
var $$GHCziList_init2=$t(function(){
 $$GHCziList_errorEmptyList.J($$GHCziList$m);
},[],"in `base:GHC.List'");
var $$GHCziList_init1=$f(2,function(O7,P7){
 $M(P7,function(Q7){
  switch(Q7.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var R7=Q7.v[0],S7=Q7.v[1];
   var T7=$t(function(){
    $$GHCziList_init1.J(R7,S7);
   },[R7,S7],"sat");
   $R(2,[O7,T7],":");break;
  }
 },[O7]);
},[],"in `base:GHC.List'");
var $$GHCziList_tail1=$t(function(){
 $$GHCziList_errorEmptyList.J($$GHCziList$o);
},[],"in `base:GHC.List'");
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
var $$GHCziList$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.");
},"at libraries/base/GHC/List.lhs:742:1");
var $$GHCziList$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J(": empty list");
},"lvl");
var $$GHCziList$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.(!!): index too large\n");
},"lvl1");
var $$GHCziList$h=$T(function(){
 $$GHCziErr_error.J($$GHCziList$g);
},"lvl2");
var $$GHCziList$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.(!!): negative index\n");
},"lvl3");
var $$GHCziList$l=$T(function(){
 $$GHCziCString_unpackCStringzh.J("foldr1");
},"lvl6");
var $$GHCziList$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("init");
},"lvl7");
var $$GHCziList$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("tail");
},"lvl9");
var $$GHCziList$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("head");
},"lvl10");
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
var $$GHCziNum_zdfNumIntzuzdcfromInteger=$f(1,function(F){
 $$GHCziIntegerziType_integerToInt.C([F],function(G){
  $R(1,[G],"I#");
 },[]);
},[],"at libraries/base/GHC/Num.lhs:60:5");
var $$GHCziPtr_castPtr=$f(1,function(G){
 $M(G,function(H){
  var I=H.v[0];
  $R(1,[I],"Ptr");
 },[]);
},[],"at libraries/base/GHC/Ptr.lhs:59:1");
var $$GHCziRead_choose2=$f(3,function(v,w,x){
 $M(v,function(y){
  switch(y.g){
  case 1:
   $R(3,[],"Fail");break;
  case 2:
   var z=y.v[0],A=y.v[1];
   $M(z,function(B){
    var C=B.v[0],D=B.v[1];
    var E=$t(function(){
     D.J(w,x);
    },[w,x,D],"lvl14");
    var F=$f(1,function(G){
     $M(G,function(H){
      switch(H.g){
      case 4:
       var I=H.v[0];
       $$GHCziBase_eqString.C([C,I],function(J){
	switch(J.g){
	case 1:
	 $R(3,[],"Fail");break;
	case 2:
	 $A(E);break;
	}
       },[E]);break;
      case 5:
       var K=H.v[0];
       $$GHCziBase_eqString.C([C,K],function(L){
	switch(L.g){
	case 1:
	 $R(3,[],"Fail");break;
	case 2:
	 $A(E);break;
	}
       },[E]);break;
      default:
       $R(3,[],"Fail");
      }
     },[E,C]);
    },[E,C],"k");
    var M=$t(function(){
     $$TextziReadziLex_hsLex2.J(F);
    },[F],"lvl15");
    var N=$f(1,function(O){
     $A(M);
    },[M],"k2");
    var P=$t(function(){
     $$GHCziRead_choose2.J(A,w,x);
    },[w,x,A],"sat");
    var Q=$f(1,function(R){
     $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(R,N);
    },[N],"sat");
    var S=$d(2,[Q],"sat");
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(S,P);
   },[w,x,A]);break;
  }
 },[w,x]);
},[],"in `base:GHC.Read'");
var $$GHCziRead_zdwa3=$f(2,function(J2,K2){
 var L2=$t(function(){
  var M2=$f(1,function(N2){
   var O2=$t(function(){
    K2.J(N2);
   },[N2,K2],"lvl15");
   var P2=$f(1,function(Q2){
    $M(Q2,function(R2){
     switch(R2.g){
     case 3:
      var S2=R2.v[0];
      $M(S2,function(T2){
       switch(T2.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	var U2=T2.v[0],V2=T2.v[1];
	$M(U2,function(W2){
	 var X2=W2.v[0];
	 $M(X2,function(Y2){
	  switch(Y2.toString()){
	  case ")":
	   $M(V2,function(Z2){
	    switch(Z2.g){
	    case 1:
	     $A(O2);break;
	    case 2:
	     $R(3,[],"Fail");break;
	    }
	   },[O2]);break;
	  default:
	   $R(3,[],"Fail");
	  }
	 },[O2,V2]);
	},[O2,V2]);break;
       }
      },[O2]);break;
     default:
      $R(3,[],"Fail");
     }
    },[O2]);
   },[O2],"sat");
   $$TextziReadziLex_lex1.J(P2);
  },[K2],"sat");
  J2.J($$TextziParserCombinatorsziReadPrec_minPrec,M2);
 },[K2,J2],"lvl14");
 var a3=$f(1,function(b3){
  $M(b3,function(c3){
   switch(c3.g){
   case 3:
    var d3=c3.v[0];
    $M(d3,function(e3){
     switch(e3.g){
     case 1:
      $R(3,[],"Fail");break;
     case 2:
      var f3=e3.v[0],g3=e3.v[1];
      $M(f3,function(h3){
       var i3=h3.v[0];
       $M(i3,function(j3){
	switch(j3.toString()){
	case "(":
	 $M(g3,function(k3){
	  switch(k3.g){
	  case 1:
	   $A(L2);break;
	  case 2:
	   $R(3,[],"Fail");break;
	  }
	 },[L2]);break;
	default:
	 $R(3,[],"Fail");
	}
       },[L2,g3]);
      },[L2,g3]);break;
     }
    },[L2]);break;
   default:
    $R(3,[],"Fail");
   }
  },[L2]);
 },[L2],"sat");
 $$TextziReadziLex_lex1.J(a3);
},[],"in `base:GHC.Read'");
var $$GHCziRead_parens1=$f(2,function(o3,p3){
 var q3=$f(1,function(r3){
  var s3=$t(function(){
   o3.J(r3);
  },[r3,o3],"ds3");
  var t3=$f(1,function(u3){
   var v3=$t(function(){
    $$GHCziRead_zdwa3.J(q3,u3);
   },[u3,q3],"sat");
   s3.C([u3],function(w3){
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(w3,v3);
   },[v3]);
  },[s3,q3],"sat");
  $A(t3);
 },[o3],"a4");
 q3.J(p3);
},[],"in `base:GHC.Read'");
var $$GHCziReal_zdfNumRatio3=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Real'");
var $$GHCziReal_even1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Real'");
var $$GHCziReal_fromIntegralzuzdsfromIntegral=$f(1,function(Oc){
 $$GHCziIntegerziType_integerToInt.C([Oc],function(Pc){
  $R(1,[Pc],"I#");
 },[]);
},[],"at libraries/base/GHC/Real.lhs:465:1");
var $$GHCziReal_zdwf1=$f(2,function(Cw,Dw){
 var Ew=$hs_remIntzh(Dw,goog.math.Long.fromBits(2,0));
 switch(Ew.toString()){
 case "0":
  var Kw=$hs_quotIntzh(Dw,goog.math.Long.fromBits(2,0));
  $$GHCziIntegerziType_timesInteger.C([Cw,Cw],function(Jw){
   $$GHCziReal_zdwf1.J(Jw,Kw);
  },[Kw]);break;
 default:
  $M(Dw,function(Fw){
   switch(Fw.toString()){
   case "1":
    $A(Cw);break;
   default:
    var Iw=Fw.subtract(goog.math.Long.fromBits(1,0));
    var Hw=$hs_quotIntzh(Iw,goog.math.Long.fromBits(2,0));
    $$GHCziIntegerziType_timesInteger.C([Cw,Cw],function(Gw){
     $$GHCziReal$q.J(Gw,Hw,Cw);
    },[Cw,Hw]);
   }
  },[Cw]);
 }
},[],"at libraries/base/GHC/Real.lhs:515:11");
var $$GHCziReal_zc3=$t(function(){
 $$GHCziErr_error.J($$GHCziReal$p);
},[],"in `base:GHC.Real'");
var $$GHCziReal$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Negative exponent");
},"lvl8");
var $$GHCziReal$q=$F(3,function(nK,oK,pK){
 var qK=$hs_remIntzh(oK,goog.math.Long.fromBits(2,0));
 switch(qK.toString()){
 case "0":
  var xK=$hs_quotIntzh(oK,goog.math.Long.fromBits(2,0));
  $$GHCziIntegerziType_timesInteger.C([nK,nK],function(wK){
   $$GHCziReal$q.J(wK,xK,pK);
  },[pK,xK]);break;
 default:
  $M(oK,function(rK){
   switch(rK.toString()){
   case "1":
    $$GHCziIntegerziType_timesInteger.J(nK,pK);break;
   default:
    $$GHCziIntegerziType_timesInteger.C([nK,pK],function(sK){
     var vK=rK.subtract(goog.math.Long.fromBits(1,0));
     var uK=$hs_quotIntzh(vK,goog.math.Long.fromBits(2,0));
     $$GHCziIntegerziType_timesInteger.C([nK,nK],function(tK){
      $$GHCziReal$q.J(tK,uK,sK);
     },[sK,uK]);
    },[nK,rK]);
   }
  },[nK,pK]);
 }
},"at libraries/base/GHC/Real.lhs:519:11");
var $$GHCziST_runSTRep=$f(1,function(L){
 L.C([$$GHCziPrim_realWorldzh],function(M){
  var N=M[1];
  $A(N);
 },[]);
},[],"at libraries/base/GHC/ST.lhs:169:1");
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
var $$GHCziShow_showSignedInt=$f(3,function(V,W,X){
 $M(V,function(Y){
  var Z=Y.v[0];
  $M(W,function(a1){
   var b1=a1.v[0];
   $$GHCziShow_zdwshowSignedInt.J(Z,b1,X);
  },[Z,X]);
 },[W,X]);
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
},"at libraries/base/GHC/Show.lhs:411:1");
var $$GHCziShow_shows26=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
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
var $$GHCziShow_shows19=$t(function(){
 $$GHCziCString_unpackCStringzh.J("'\\''");
},[],"in `base:GHC.Show'");
var $$GHCziShow_shows20=$D(1,function(){
 $r(["'"]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows12=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows16=$D(1,function(){
 $r([goog.math.Long.fromBits(2808348672,232830643)]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows15=$t(function(){
 $$GHCziIntegerziType_mkInteger.J($$GHCziTypes_True,$$GHCziShow$t);
},[],"in `base:GHC.Show'");
var $$GHCziShow_shows14=$t(function(){
 $$GHCziErr_error.J($$GHCziShow$u);
},[],"in `base:GHC.Show'");
var $$GHCziShow_showszujsplitf=$f(2,function(t1,u1){
 $$GHCziIntegerziType_gtInteger.C([t1,u1],function(v1){
  switch(v1.g){
  case 1:
   $$GHCziIntegerziType_timesInteger.C([t1,t1],function(w1){
    $$GHCziShow_showszujsplitf.C([w1,u1],function(x1){
     switch(x1.g){
     case 1:
      $A($$GHCziShow$w);break;
     case 2:
      var y1=x1.v[0],z1=x1.v[1];
      $$GHCziIntegerziType_quotRemInteger.C([y1,t1],function(A1){
       var B1=A1[0],C1=A1[1];
       $$GHCziIntegerziType_gtInteger.C([B1,$$GHCziShow_shows12],function(D1){
	switch(D1.g){
	case 1:
	 var E1=$t(function(){
	  $$GHCziShow$x.J(t1,z1);
	 },[t1,z1],"sat");
	 $R(2,[C1,E1],":");break;
	case 2:
	 var F1=$t(function(){
	  $$GHCziShow$x.J(t1,z1);
	 },[t1,z1],"sat");
	 var G1=$d(2,[C1,F1],"sat");
	 $R(2,[B1,G1],":");break;
	}
       },[t1,B1,C1,z1]);
      },[t1,z1]);break;
     }
    },[t1]);
   },[t1,u1]);break;
  case 2:
   $R(2,[u1,$$GHCziTypes_ZMZN],":");break;
  }
 },[t1,u1]);
},[],"at libraries/base/GHC/Show.lhs:492:5");
var $$GHCziShow_zdwjhead=$f(2,function(H1,I1){
 var J1=H1.lessThan(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(J1.g){
 case 1:
  var K1=$hs_quotRemIntzh(H1,goog.math.Long.fromBits(10,0));
  var L1=K1[0],M1=K1[1];
  var Q1=goog.math.Long.fromBits(48,0).add(M1);
  var O1=$hs_chrzh(Q1);
  var N1=$d(1,[O1],"sat");
  var P1=$d(2,[N1,I1],"sat");
  $$GHCziShow_zdwjhead.J(L1,P1);break;
 case 2:
  var T1=goog.math.Long.fromBits(48,0).add(H1);
  var S1=$hs_chrzh(T1);
  var R1=$d(1,[S1],"sat");
  $R(2,[R1,I1],":");break;
 }
},[],"at libraries/base/GHC/Show.lhs:535:5");
var $$GHCziShow_zdwjblockzq=$f(3,function(U1,V1,W1){
 $M(U1,function(X1){
  switch(X1.toString()){
  case "1":
   var i2=goog.math.Long.fromBits(48,0).add(V1);
   var h2=$hs_chrzh(i2);
   var g2=$d(1,[h2],"sat");
   $R(2,[g2,W1],":");break;
  default:
   var Y1=$hs_quotRemIntzh(V1,goog.math.Long.fromBits(10,0));
   var Z1=Y1[0],a2=Y1[1];
   var f2=goog.math.Long.fromBits(48,0).add(a2);
   var c2=$hs_chrzh(f2);
   var b2=$d(1,[c2],"sat");
   var d2=$d(2,[b2,W1],"sat");
   var e2=X1.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziShow_zdwjblockzq.J(e2,Z1,d2);
  }
 },[V1,W1]);
},[],"at libraries/base/GHC/Show.lhs:546:5");
var $$GHCziShow_showszujprintb=$f(2,function(j2,k2){
 $M(j2,function(l2){
  switch(l2.g){
  case 1:
   $A(k2);break;
  case 2:
   var m2=l2.v[0],n2=l2.v[1];
   $$GHCziIntegerziType_quotRemInteger.C([m2,$$GHCziShow_shows16],function(o2){
    var p2=o2[0],q2=o2[1];
    $$GHCziIntegerziType_integerToInt.C([p2],function(u2){
     var r2=$t(function(){
      $$GHCziIntegerziType_integerToInt.C([q2],function(t2){
       var s2=$t(function(){
	$$GHCziShow_showszujprintb.J(n2,k2);
       },[k2,n2],"sat");
       $$GHCziShow_zdwjblockzq.J(goog.math.Long.fromBits(18,0),t2,s2);
      },[k2,n2]);
     },[k2,q2,n2],"sat");
     $$GHCziShow_zdwjblockzq.J(goog.math.Long.fromBits(18,0),u2,r2);
    },[k2,q2,n2]);
   },[k2,n2]);break;
  }
 },[k2]);
},[],"at libraries/base/GHC/Show.lhs:524:5");
var $$GHCziShow_showszuintegerToStringzq=$f(2,function(v2,w2){
 $$GHCziIntegerziType_ltInteger.C([v2,$$GHCziShow_shows16],function(x2){
  switch(x2.g){
  case 1:
   $$GHCziShow_showszujsplitf.C([$$GHCziShow_shows15,v2],function(y2){
    switch(y2.g){
    case 1:
     $A($$GHCziShow_shows14);break;
    case 2:
     var z2=y2.v[0],A2=y2.v[1];
     $$GHCziIntegerziType_quotRemInteger.C([z2,$$GHCziShow_shows16],function(B2){
      var C2=B2[0],D2=B2[1];
      $$GHCziIntegerziType_integerToInt.C([C2],function(K2){
       var E2=K2.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(E2.g){
       case 1:
	$$GHCziIntegerziType_integerToInt.C([D2],function(G2){
	 var F2=$t(function(){
	  $$GHCziShow_showszujprintb.J(A2,w2);
	 },[A2,w2],"sat");
	 $$GHCziShow_zdwjhead.J(G2,F2);
	},[A2,w2]);break;
       case 2:
	var H2=$t(function(){
	 $$GHCziIntegerziType_integerToInt.C([D2],function(J2){
	  var I2=$t(function(){
	   $$GHCziShow_showszujprintb.J(A2,w2);
	  },[A2,w2],"sat");
	  $$GHCziShow_zdwjblockzq.J(goog.math.Long.fromBits(18,0),J2,I2);
	 },[A2,w2]);
	},[D2,A2,w2],"sat");
	$$GHCziShow_zdwjhead.J(K2,H2);break;
       }
      },[D2,A2,w2]);
     },[A2,w2]);break;
    }
   },[w2]);break;
  case 2:
   $$GHCziIntegerziType_integerToInt.C([v2],function(L2){
    $$GHCziShow_zdwjhead.J(L2,w2);
   },[w2]);break;
  }
 },[v2,w2]);
},[],"at libraries/base/GHC/Show.lhs:482:5");
var $$GHCziShow_integerToString=$f(2,function(M2,N2){
 $$GHCziIntegerziType_ltInteger.C([M2,$$GHCziShow_shows12],function(O2){
  switch(O2.g){
  case 1:
   $$GHCziShow_showszuintegerToStringzq.J(M2,N2);break;
  case 2:
   var P2=$t(function(){
    $$GHCziIntegerziType_negateInteger.C([M2],function(Q2){
     $$GHCziShow_showszuintegerToStringzq.J(Q2,N2);
    },[N2]);
   },[M2,N2],"sat");
   $R(2,[$$GHCziShow_shows13,P2],":");break;
  }
 },[M2,N2]);
},[],"at libraries/base/GHC/Show.lhs:477:1");
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
var $$GHCziShow_zdwzdcshowsPrec=$f(3,function(J3,K3,L3){
 var M3=J3.greaterThan(goog.math.Long.fromBits(6,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(M3.g){
 case 1:
  $$GHCziShow_integerToString.J(K3,L3);break;
 case 2:
  $$GHCziIntegerziType_ltInteger.C([K3,$$GHCziShow_shows12],function(N3){
   switch(N3.g){
   case 1:
    $$GHCziShow_integerToString.J(K3,L3);break;
   case 2:
    var O3=$t(function(){
     var P3=$d(2,[$$GHCziShow_shows10,L3],"sat");
     $$GHCziShow_integerToString.J(K3,P3);
    },[K3,L3],"sat");
    $R(2,[$$GHCziShow_shows11,O3],":");break;
   }
  },[K3,L3]);break;
 }
},[],"at libraries/base/GHC/Show.lhs:140:5");
var $$GHCziShow_shows17=$f(2,function(q4,r4){
 $M(q4,function(s4){
  var t4=s4.v[0];
  $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),t4,r4);
 },[r4]);
},[],"in `base:GHC.Show'");
var $$GHCziShow_zdwshowLitChar=$f(2,function(A4,B4){
 var C4=A4>"\x7f"?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(C4.g){
 case 1:
  $M(A4,function(D4){
   switch(D4.toString()){
   case "\\":
    $$GHCziBase_zpzp.J($$GHCziShow$c,B4);break;
   case "\x7f":
    $$GHCziBase_zpzp.J($$GHCziShow$b,B4);break;
   default:
    var E4=D4>=" "?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(E4.g){
    case 1:
     $M(D4,function(F4){
      switch(F4.toString()){
      case "\x07":
       $$GHCziBase_zpzp.J($$GHCziShow$k,B4);break;
      case "\b":
       $$GHCziBase_zpzp.J($$GHCziShow$j,B4);break;
      case "\t":
       $$GHCziBase_zpzp.J($$GHCziShow$i,B4);break;
      case "\n":
       $$GHCziBase_zpzp.J($$GHCziShow$h,B4);break;
      case "\v":
       $$GHCziBase_zpzp.J($$GHCziShow$g,B4);break;
      case "\f":
       $$GHCziBase_zpzp.J($$GHCziShow$f,B4);break;
      case "\r":
       $$GHCziBase_zpzp.J($$GHCziShow$e,B4);break;
      case "\x0e":
       var K4=$t(function(){
	$M(B4,function(L4){
	 switch(L4.g){
	 case 1:
	  $R(1,[],"[]");break;
	 case 2:
	  var M4=L4.v[0];
	  $M(M4,function(N4){
	   var O4=N4.v[0];
	   $M(O4,function(P4){
	    switch(P4.toString()){
	    case "H":
	     $$GHCziCString_unpackAppendCStringzh.J("\\&",L4);break;
	    default:
	     $A(L4);
	    }
	   },[L4]);
	  },[L4]);break;
	 }
	},[]);
       },[B4],"sat");
       $$GHCziBase_zpzp.J($$GHCziShow$d,K4);break;
      default:
       var G4=$t(function(){
	var I4=$hs_ordzh(F4);
	var H4=I4.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(H4.g){
	case 1:
	 $$GHCziList_znznzusub.J($$GHCziShow_asciiTab,I4);break;
	case 2:
	 $A($$GHCziList_znzn1);break;
	}
       },[F4],"sat");
       var J4=$d(2,[$$GHCziShow$a,G4],"sat");
       $$GHCziBase_zpzp.J(J4,B4);
      }
     },[B4]);break;
    case 2:
     var Q4=$d(1,[D4],"sat");
     $R(2,[Q4,B4],":");break;
    }
   }
  },[B4]);break;
 case 2:
  var R4=$t(function(){
   var S4=$t(function(){
    $M(B4,function(T4){
     switch(T4.g){
     case 1:
      $R(1,[],"[]");break;
     case 2:
      var U4=T4.v[0];
      $M(U4,function(V4){
       var W4=V4.v[0];
       var X4=W4>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(X4.g){
       case 1:
	$A(T4);break;
       case 2:
	var Y4=W4<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Y4.g){
	case 1:
	 $A(T4);break;
	case 2:
	 $$GHCziCString_unpackAppendCStringzh.J("\\&",T4);break;
	}break;
       }
      },[T4]);break;
     }
    },[]);
   },[B4],"sat");
   var Z4=$hs_ordzh(A4);
   $$GHCziShow_itos.J(Z4,S4);
  },[A4,B4],"sat");
  $R(2,[$$GHCziShow$a,R4],":");break;
 }
},[],"at libraries/base/GHC/Show.lhs:356:1");
var $$GHCziShow_zdfShowIntzuzdcshowList=$f(2,function(c6,d6){
 $$GHCziShow_showListzuzu.J($$GHCziShow_shows17,c6,d6);
},[],"at libraries/base/GHC/Show.lhs:155:5");
var $$GHCziShow_zdfShowIntzuzdcshow=$f(1,function(e6){
 $M(e6,function(f6){
  var g6=f6.v[0];
  $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),g6,$$GHCziTypes_ZMZN);
 },[]);
},[],"at libraries/base/GHC/Show.lhs:148:5");
var $$GHCziShow_zdfShowInt=$D(1,function(){
 $r([$$GHCziShow_showSignedInt,$$GHCziShow_zdfShowIntzuzdcshow,$$GHCziShow_zdfShowIntzuzdcshowList]);
},"at libraries/base/GHC/Show.lhs:204:10");
var $$GHCziShow_zdfShowIntegerzuzdcshow=$f(1,function(m6){
 $$GHCziShow_zdwzdcshowsPrec.J(goog.math.Long.fromBits(0,0),m6,$$GHCziTypes_ZMZN);
},[],"at libraries/base/GHC/Show.lhs:148:5");
var $$GHCziShow_zdfShowZLz2cUZR1=$f(3,function(p6,q6,r6){
 var s6=$t(function(){
  q6.J(r6);
 },[r6,q6],"sat");
 var t6=$d(2,[$$GHCziShow_showListzuzu1,s6],"sat");
 p6.J(t6);
},[],"in `base:GHC.Show'");
var $$GHCziShow_showzutuple=$f(1,function(u6){
 var v6=$t(function(){
  $M(u6,function(w6){
   switch(w6.g){
   case 1:
    $A($$GHCziList_foldr3);break;
   case 2:
    var x6=w6.v[0],y6=w6.v[1];
    $M(y6,function(z6){
     switch(z6.g){
     case 1:
      $A(x6);break;
     case 2:
      var A6=z6.v[0],B6=z6.v[1];
      var C6=$t(function(){
       $$GHCziList_foldr1zuzdsfoldr1.J($$GHCziShow_zdfShowZLz2cUZR1,A6,B6);
      },[A6,B6],"r");
      var D6=$f(1,function(E6){
       var F6=$t(function(){
	C6.J(E6);
       },[C6,E6],"sat");
       var G6=$d(2,[$$GHCziShow_showListzuzu1,F6],"sat");
       x6.J(G6);
      },[x6,C6],"sat");
      $A(D6);break;
     }
    },[x6]);break;
   }
  },[]);
 },[u6],"f");
 var H6=$f(1,function(I6){
  var J6=$t(function(){
   var K6=$d(2,[$$GHCziShow_shows10,I6],"sat");
   v6.J(K6);
  },[v6,I6],"sat");
  $R(2,[$$GHCziShow_shows11,J6],":");
 },[v6],"sat");
 $A(H6);
},[],"at libraries/base/GHC/Show.lhs:311:1");
var $$GHCziShow_zdwzdcshowsPrec1=$f(5,function(d7,e7,f7,g7,h7){
 var i7=$t(function(){
  $$GHCziShow_showsPrec.J(e7,$$GHCziShow_shows26,g7);
 },[e7,g7],"sat");
 var j7=$d(2,[i7,$$GHCziTypes_ZMZN],"sat");
 var k7=$t(function(){
  $$GHCziShow_showsPrec.J(d7,$$GHCziShow_shows26,f7);
 },[d7,f7],"sat");
 var l7=$d(2,[k7,j7],"sat");
 $$GHCziShow_showzutuple.J(l7,h7);
},[],"at libraries/base/GHC/Show.lhs:140:5");
var $$GHCziShow_intToDigit1=$f(1,function(xv){
 var yv=$t(function(){
  $$GHCziShow_itos.J(xv,$$GHCziTypes_ZMZN);
 },[xv],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Char.intToDigit: not a digit ",yv],function(zv){
  $$GHCziErr_error.J(zv);
 },[]);
},[],"in `base:GHC.Show'");
var $$GHCziShow_zdwintToDigit=$f(1,function(Av){
 var Bv=$f(1,function(Cv){
  var Dv=Av.greaterThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Dv.g){
  case 1:
   $$GHCziShow_intToDigit1.J(Av);break;
  case 2:
   var Ev=Av.lessThanOrEqual(goog.math.Long.fromBits(15,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Ev.g){
   case 1:
    $$GHCziShow_intToDigit1.J(Av);break;
   case 2:
    var Gv=goog.math.Long.fromBits(97,0).add(Av);
    var Fv=Gv.subtract(goog.math.Long.fromBits(10,0));
    $r($hs_chrzh(Fv));break;
   }break;
  }
 },[Av],"$w$j");
 var Hv=Av.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(Hv.g){
 case 1:
  Bv.J($$GHCziPrim_realWorldzh);break;
 case 2:
  var Iv=Av.lessThanOrEqual(goog.math.Long.fromBits(9,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Iv.g){
  case 1:
   Bv.J($$GHCziPrim_realWorldzh);break;
  case 2:
   var Jv=goog.math.Long.fromBits(48,0).add(Av);
   $r($hs_chrzh(Jv));break;
  }break;
 }
},[],"at libraries/base/GHC/Show.lhs:426:1");
var $$GHCziShow_intToDigit=$f(1,function(Kv){
 $M(Kv,function(Lv){
  var Mv=Lv.v[0];
  $$GHCziShow_zdwintToDigit.C([Mv],function(Nv){
   $R(1,[Nv],"C#");
  },[]);
 },[]);
},[],"at libraries/base/GHC/Show.lhs:426:1");
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
var $$GHCziShow$x=$F(2,function(Ov,Pv){
 $M(Pv,function(Qv){
  switch(Qv.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var Rv=Qv.v[0],Sv=Qv.v[1];
   $$GHCziIntegerziType_quotRemInteger.C([Rv,Ov],function(Tv){
    var Uv=Tv[0],Vv=Tv[1];
    var Wv=$t(function(){
     $$GHCziShow$x.J(Ov,Sv);
    },[Ov,Sv],"sat");
    var Xv=$d(2,[Vv,Wv],"sat");
    $R(2,[Uv,Xv],":");
   },[Ov,Sv]);break;
  }
 },[Ov]);
},"at libraries/base/GHC/Show.lhs:505:5");
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
  var P=$hs_mkWeakNoFinalizzerzh(N,O,M);
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
},[],"at libraries/base/GHC/Unicode.hs:138:1");
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
},[],"at libraries/base/GHC/Unicode.hs:137:1");
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
},[],"at libraries/base/GHC/Unicode.hs:74:1");
var $$GHCziUnicode_isSpace=$f(1,function(L1){
 $M(L1,function(M1){
  var N1=M1.v[0];
  $$GHCziUnicode_zdwisSpace.J(N1);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:74:1");
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
var $$GHCziUnicode_toUpper=$f(1,function(X1){
 $M(X1,function(Y1){
  var Z1=Y1.v[0];
  $$GHCziUnicode_zdwtoUpper.J(Z1);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:146:1");
var $$GHCziUnicode_zdwtoLower=$f(1,function(a2){
 var i2=$hs_ordzh(a2);
 var h2=$hs_narrow32Intzh(i2);
 var $ff=u_towlower(h2);
 var b2=[$$GHCziPrim_realWorldzh,$ff];
 var c2=b2[1];
 var e2=$hs_narrow32Intzh(c2);
 var g2=$hs_int2Wordzh(e2);
 var d2=$hs_leWordzh(g2,goog.math.Long.fromBits(1114111,0));
 switch(d2.g){
 case 1:
  $$GHCziChar_chr2.J(e2);break;
 case 2:
  var f2=$hs_chrzh(e2);
  $R(1,[f2],"C#");break;
 }
},[],"at libraries/base/GHC/Unicode.hs:145:1");
var $$GHCziUnicode_toLower=$f(1,function(j2){
 $M(j2,function(k2){
  var l2=k2.v[0];
  $$GHCziUnicode_zdwtoLower.J(l2);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:145:1");
var $$SystemziIO_putStrLn1=$f(2,function(O1,P1){
 $$GHCziIOziHandleziText_hPutStrLn1.J($$GHCziIOziHandleziFD_stdout,O1,P1);
},[],"in `base:System.IO'");
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
},[],"at libraries/base/Text/ParserCombinators/ReadP.hs:192:1");
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
},[],"at libraries/base/Text/ParserCombinators/ReadP.hs:322:1");
var $$TextziParserCombinatorsziReadP_string3=$f(1,function(e5){
 $R(3,[],"Fail");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_string2=$f(1,function(b){
 $$TextziParserCombinatorsziReadP_string3.J(b);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_string1=$f(2,function(f5,g5){
 var h5=$f(1,function(i5){
  i5.J(f5);
 },[f5],"a1");
 var j5=$f(2,function(k5,l5){
  $M(k5,function(m5){
   switch(m5.g){
   case 1:
    $A(h5);break;
   case 2:
    var n5=m5.v[0],o5=m5.v[1];
    $M(l5,function(p5){
     switch(p5.g){
     case 1:
      $A($$TextziParserCombinatorsziReadP_string3);break;
     case 2:
      var q5=p5.v[0],r5=p5.v[1];
      $M(n5,function(s5){
       var t5=s5.v[0];
       $M(q5,function(u5){
	var v5=u5.v[0];
	var w5=t5==v5?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(w5.g){
	case 1:
	 $A($$TextziParserCombinatorsziReadP_string2);break;
	case 2:
	 var x5=$t(function(){
	  j5.J(o5,r5);
	 },[o5,r5,j5],"lvl4");
	 var y5=$f(1,function(z5){
	  var A5=$t(function(){
	   x5.J(z5);
	  },[x5,z5],"lvl5");
	  var B5=$f(1,function(C5){
	   $A(A5);
	  },[A5],"sat");
	  $R(1,[B5],"Get");
	 },[x5],"sat");
	 $A(y5);break;
	}
       },[t5,o5,r5,j5]);
      },[q5,o5,r5,j5]);break;
     }
    },[n5,o5,j5]);break;
   }
  },[h5,l5,j5]);
 },[h5],"scan");
 var D5=$f(1,function(E5){
  j5.J(f5,E5,g5);
 },[f5,j5,g5],"sat");
 $R(2,[D5],"Look");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_munch3=$f(1,function(F5){
 F5.J($$GHCziTypes_ZMZN);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_munch2=$f(2,function(G5,H5){
 var I5=$f(1,function(J5){
  $M(J5,function(K5){
   switch(K5.g){
   case 1:
    $A($$TextziParserCombinatorsziReadP_munch3);break;
   case 2:
    var L5=K5.v[0],M5=K5.v[1];
    G5.C([L5],function(N5){
     switch(N5.g){
     case 1:
      $A($$TextziParserCombinatorsziReadP_munch3);break;
     case 2:
      var O5=$t(function(){
       I5.J(M5);
      },[M5,I5],"ds1");
      var P5=$f(1,function(Q5){
       var R5=$t(function(){
	var S5=$f(1,function(T5){
	 var U5=$d(2,[L5,T5],"sat");
	 Q5.J(U5);
	},[L5,Q5],"sat");
	O5.J(S5);
       },[L5,O5,Q5],"lvl4");
       var V5=$f(1,function(W5){
	$A(R5);
       },[R5],"sat");
       $R(1,[V5],"Get");
      },[L5,O5],"sat");
      $A(P5);break;
     }
    },[L5,M5,I5]);break;
   }
  },[G5,I5]);
 },[G5],"scan");
 var X5=$f(1,function(Y5){
  I5.J(Y5,H5);
 },[I5,H5],"sat");
 $R(2,[X5],"Look");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_skipSpaceszuskip=$f(1,function(h6){
 $M(h6,function(i6){
  switch(i6.g){
  case 1:
   $A($$TextziParserCombinatorsziReadP$e);break;
  case 2:
   var j6=i6.v[0],k6=i6.v[1];
   $$GHCziUnicode_isSpace.C([j6],function(l6){
    switch(l6.g){
    case 1:
     $A($$TextziParserCombinatorsziReadP$e);break;
    case 2:
     var m6=$t(function(){
      $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(k6);
     },[k6],"lvl4");
     var n6=$f(1,function(o6){
      var p6=$t(function(){
       m6.J(o6);
      },[m6,o6],"lvl5");
      var q6=$f(1,function(r6){
       $A(p6);
      },[p6],"sat");
      $R(1,[q6],"Get");
     },[m6],"sat");
     $A(n6);break;
    }
   },[k6]);break;
  }
 },[]);
},[],"at libraries/base/Text/ParserCombinators/ReadP.hs:332:3");
var $$TextziParserCombinatorsziReadP_zlzpzp2=$f(2,function(v6,w6){
 $M(v6,function(x6){
  switch(x6.toString()){
  case "0":
   w6.J($$GHCziTuple_Z0T);break;
  default:
   var y6=$t(function(){
    var z6=x6.subtract(goog.math.Long.fromBits(1,0));
    $$TextziParserCombinatorsziReadP_zlzpzp2.J(z6,w6);
   },[x6,w6],"lvl4");
   var A6=$f(1,function(B6){
    $A(y6);
   },[y6],"sat");
   $R(1,[A6],"Get");
  }
 },[w6]);
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_zlzpzp1=$f(3,function(C6,D6,E6){
 var F6=$t(function(){
  C6.J($$TextziParserCombinatorsziReadP_zdfMonadPzuzdcreturn);
 },[C6],"lvl4");
 var G6=$f(3,function(H6,I6,J6){
  $M(H6,function(K6){
   switch(K6.g){
   case 1:
    var L6=K6.v[0];
    $M(I6,function(M6){
     switch(M6.g){
     case 1:
      $A(D6);break;
     case 2:
      var N6=M6.v[0],O6=M6.v[1];
      var Q6=J6.add(goog.math.Long.fromBits(1,0));
      L6.C([N6],function(P6){
       G6.J(P6,O6,Q6);
      },[G6,O6,Q6]);break;
     }
    },[D6,L6,G6,J6]);break;
   case 2:
    var R6=K6.v[0];
    R6.C([I6],function(S6){
     G6.J(S6,I6,J6);
    },[I6,G6,J6]);break;
   case 3:
    $A(D6);break;
   case 4:
    var T6=$f(1,function(U6){
     var V6=$t(function(){
      $$TextziParserCombinatorsziReadP_zdfMonadPzuzdczgzgze.J(K6,U6);
     },[K6,U6],"lvl5");
     var W6=$f(1,function(X6){
      $A(V6);
     },[V6],"sat");
     $$TextziParserCombinatorsziReadP_zlzpzp2.J(J6,W6);
    },[J6,K6],"sat");
    $A(T6);break;
   case 5:
    $$TextziParserCombinatorsziReadP_zdfMonadPzuzdczgzgze.J(K6);break;
   }
  },[I6,D6,G6,J6]);
 },[D6],"probe");
 var Y6=$f(1,function(Z6){
  G6.J(F6,Z6,goog.math.Long.fromBits(0,0),E6);
 },[F6,G6,E6],"sat");
 $R(2,[Y6],"Look");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_Fail=$D(3,function(){
 $r([]);
},"at libraries/base/Text/ParserCombinators/ReadP.hs:113:5");
var $$TextziParserCombinatorsziReadP$a=$T(function(){
 $$ControlziExceptionziBase_patError.J("libraries/base/Text/ParserCombinators/ReadP.hs:(134,3)-(157,60)|function mplus");
},"lvl");
var $$TextziParserCombinatorsziReadP$e=$F(1,function(sa){
 sa.J($$GHCziTuple_Z0T);
},"lvl3");
var $$TextziParserCombinatorsziReadPrec_minPrec=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"at libraries/base/Text/ParserCombinators/ReadPrec.hs:94:1");
var $$TextziPrintf_zdfPrintfArgInt1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,2147483648)]);
},"in `base:Text.Printf'");
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
		      $$GHCziChar_chr2.J(D2);break;
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
		      $$GHCziChar_chr2.J(I2);break;
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
		 $$TextziPrintf$J.J(E1);
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
   var G4=$d(2,[$$TextziPrintf$p,E4],"lvl26");
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
   var v9=$hs_narrow32Intzh(f9);
   var P9=$hs_int2Wordzh(v9);
   $b(function(){
    var u9=$hs_leWordzh(P9,goog.math.Long.fromBits(1114111,0));
    switch(u9.g){
    case 1:
     $$GHCziChar_chr2.J(v9);break;
    case 2:
     var w9=$hs_chrzh(v9);
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
     }break;
    }
   },[],function(g9){
    var h9=$hs_narrow32Intzh(d9);
    switch(h9.toString()){
    case "0":
     $M(g9,function(o9){
      switch(o9.g){
      case 1:
       $A($$TextziPrintf$A);break;
      case 2:
       var p9=o9.v[0],q9=o9.v[1];
       $M(p9,function(r9){
	var s9=r9.v[0];
	$M(s9,function(t9){
	 switch(t9.toString()){
	 case "-":
	  $R(1,[$$TextziPrintf$m,q9],"(,)");break;
	 default:
	  $R(1,[$$GHCziTypes_ZMZN,o9],"(,)");
	 }
	},[o9,q9]);
       },[o9,q9]);break;
      }
     },[]);break;
    default:
     $$GHCziBase_map.C([$$GHCziUnicode_toUpper,g9],function(i9){
      switch(i9.g){
      case 1:
       $A($$TextziPrintf$A);break;
      case 2:
       var j9=i9.v[0],k9=i9.v[1];
       $M(j9,function(l9){
	var m9=l9.v[0];
	$M(m9,function(n9){
	 switch(n9.toString()){
	 case "-":
	  $R(1,[$$TextziPrintf$m,k9],"(,)");break;
	 default:
	  $R(1,[$$GHCziTypes_ZMZN,i9],"(,)");
	 }
	},[i9,k9]);
       },[i9,k9]);break;
      }
     },[]);
    }
   },[d9]);break;
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
   var oa=$hs_narrow32Intzh(Y9);
   var Ia=$hs_int2Wordzh(oa);
   $b(function(){
    var na=$hs_leWordzh(Ia,goog.math.Long.fromBits(1114111,0));
    switch(na.g){
    case 1:
     $$GHCziChar_chr2.J(oa);break;
    case 2:
     var pa=$hs_chrzh(oa);
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
     }break;
    }
   },[],function(Z9){
    var aa=$hs_narrow32Intzh(W9);
    switch(aa.toString()){
    case "0":
     $M(Z9,function(ha){
      switch(ha.g){
      case 1:
       $A($$TextziPrintf$A);break;
      case 2:
       var ia=ha.v[0],ja=ha.v[1];
       $M(ia,function(ka){
	var la=ka.v[0];
	$M(la,function(ma){
	 switch(ma.toString()){
	 case "-":
	  $R(1,[$$TextziPrintf$k,ja],"(,)");break;
	 default:
	  $R(1,[$$GHCziTypes_ZMZN,ha],"(,)");
	 }
	},[ha,ja]);
       },[ha,ja]);break;
      }
     },[]);break;
    default:
     $$GHCziBase_map.C([$$GHCziUnicode_toUpper,Z9],function(ba){
      switch(ba.g){
      case 1:
       $A($$TextziPrintf$A);break;
      case 2:
       var ca=ba.v[0],da=ba.v[1];
       $M(ca,function(ea){
	var fa=ea.v[0];
	$M(fa,function(ga){
	 switch(ga.toString()){
	 case "-":
	  $R(1,[$$TextziPrintf$k,da],"(,)");break;
	 default:
	  $R(1,[$$GHCziTypes_ZMZN,ba],"(,)");
	 }
	},[ba,da]);
       },[ba,da]);break;
      }
     },[]);
    }
   },[W9]);break;
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
 var Oa=$t(function(){
  var Pa=$d(2,[Na,$$GHCziTypes_ZMZN],"sat");
  $$GHCziCString_unpackAppendCStringzh.J("bad formatting char ",Pa);
 },[Na],"sat");
 $$TextziPrintf$a.J(Oa);
},"lvl23");
var $$TextziReadziLex_numberToIntegerzuzdsval=$f(3,function(a,b,c){
 $M(c,function(d){
  switch(d.g){
  case 1:
   $A(b);break;
  case 2:
   var e=d.v[0],f=d.v[1];
   $M(e,function(g){
    var h=g.v[0];
    $$GHCziIntegerziType_smallInteger.C([h],function(i){
     $$GHCziIntegerziType_timesInteger.C([b,a],function(j){
      $$GHCziIntegerziType_plusInteger.C([j,i],function(k){
       $$TextziReadziLex_numberToIntegerzuzdsval.J(a,k,f);
      },[a,f]);
     },[a,f,i]);
    },[b,a,f]);
   },[b,a,f]);break;
  }
 },[b,a]);
},[],"at libraries/base/Text/Read/Lex.hs:433:1");
var $$TextziReadziLex_numberToInteger2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_numberToInteger1=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexChar2=$f(1,function(M7){
 var N7=$t(function(){
  M7.J($$TextziReadziLex$H3);
 },[M7],"lvl85");
 var O7=$t(function(){
  M7.J($$TextziReadziLex$G3);
 },[M7],"lvl86");
 var P7=$t(function(){
  M7.J($$TextziReadziLex$F3);
 },[M7],"lvl87");
 var Q7=$t(function(){
  M7.J($$TextziReadziLex$E3);
 },[M7],"lvl88");
 var R7=$t(function(){
  M7.J($$TextziReadziLex$D3);
 },[M7],"lvl89");
 var S7=$t(function(){
  M7.J($$TextziReadziLex$C3);
 },[M7],"lvl90");
 var T7=$t(function(){
  M7.J($$TextziReadziLex$B3);
 },[M7],"lvl91");
 var U7=$t(function(){
  M7.J($$TextziReadziLex$A3);
 },[M7],"lvl92");
 var V7=$t(function(){
  M7.J($$TextziReadziLex$z3);
 },[M7],"lvl93");
 var W7=$t(function(){
  M7.J($$TextziReadziLex$y3);
 },[M7],"lvl94");
 var X7=$t(function(){
  var Y7=$t(function(){
   var Z7=$t(function(){
    M7.J($$TextziReadziLex$n4);
   },[M7],"lvl95");
   var a8=$t(function(){
    M7.J($$TextziReadziLex$m4);
   },[M7],"lvl96");
   var b8=$t(function(){
    M7.J($$TextziReadziLex$l4);
   },[M7],"lvl97");
   var c8=$t(function(){
    M7.J($$TextziReadziLex$k4);
   },[M7],"lvl98");
   var d8=$t(function(){
    M7.J($$TextziReadziLex$j4);
   },[M7],"lvl99");
   var e8=$t(function(){
    M7.J($$TextziReadziLex$i4);
   },[M7],"lvl100");
   var f8=$t(function(){
    M7.J($$TextziReadziLex$h4);
   },[M7],"lvl101");
   var g8=$t(function(){
    M7.J($$TextziReadziLex$g4);
   },[M7],"lvl102");
   var h8=$t(function(){
    M7.J($$TextziReadziLex$f4);
   },[M7],"lvl103");
   var i8=$t(function(){
    M7.J($$TextziReadziLex$e4);
   },[M7],"lvl104");
   var j8=$t(function(){
    M7.J($$TextziReadziLex$d4);
   },[M7],"lvl105");
   var k8=$t(function(){
    M7.J($$TextziReadziLex$c4);
   },[M7],"lvl106");
   var l8=$t(function(){
    M7.J($$TextziReadziLex$b4);
   },[M7],"lvl107");
   var m8=$t(function(){
    M7.J($$TextziReadziLex$a4);
   },[M7],"lvl108");
   var n8=$t(function(){
    M7.J($$TextziReadziLex$Z3);
   },[M7],"lvl109");
   var o8=$t(function(){
    M7.J($$TextziReadziLex$Y3);
   },[M7],"lvl110");
   var p8=$t(function(){
    M7.J($$TextziReadziLex$X3);
   },[M7],"lvl111");
   var q8=$t(function(){
    M7.J($$TextziReadziLex$W3);
   },[M7],"lvl112");
   var r8=$t(function(){
    M7.J($$TextziReadziLex$V3);
   },[M7],"lvl113");
   var s8=$t(function(){
    M7.J($$TextziReadziLex$U3);
   },[M7],"lvl114");
   var t8=$t(function(){
    M7.J($$TextziReadziLex$T3);
   },[M7],"lvl115");
   var u8=$t(function(){
    M7.J($$TextziReadziLex$S3);
   },[M7],"lvl116");
   var v8=$t(function(){
    M7.J($$TextziReadziLex$R3);
   },[M7],"lvl117");
   var w8=$t(function(){
    M7.J($$TextziReadziLex$Q3);
   },[M7],"lvl118");
   var x8=$t(function(){
    M7.J($$TextziReadziLex$P3);
   },[M7],"lvl119");
   var y8=$t(function(){
    M7.J($$TextziReadziLex$O3);
   },[M7],"lvl120");
   var z8=$t(function(){
    M7.J($$TextziReadziLex$N3);
   },[M7],"lvl121");
   var A8=$t(function(){
    M7.J($$TextziReadziLex$M3);
   },[M7],"lvl122");
   var B8=$t(function(){
    M7.J($$TextziReadziLex$L3);
   },[M7],"lvl123");
   var C8=$t(function(){
    M7.J($$TextziReadziLex$K3);
   },[M7],"lvl124");
   var D8=$t(function(){
    M7.J($$TextziReadziLex$J3);
   },[M7],"lvl125");
   var E8=$t(function(){
    M7.J($$TextziReadziLex$I3);
   },[M7],"lvl126");
   var F8=$f(1,function(G8){
    $M(G8,function(H8){
     var I8=H8.v[0];
     $M(I8,function(J8){
      switch(J8.toString()){
      case "@":
       $A(E8);break;
      case "A":
       $A(D8);break;
      case "B":
       $A(C8);break;
      case "C":
       $A(B8);break;
      case "D":
       $A(A8);break;
      case "E":
       $A(z8);break;
      case "F":
       $A(y8);break;
      case "G":
       $A(x8);break;
      case "H":
       $A(w8);break;
      case "I":
       $A(v8);break;
      case "J":
       $A(u8);break;
      case "K":
       $A(t8);break;
      case "L":
       $A(s8);break;
      case "M":
       $A(r8);break;
      case "N":
       $A(q8);break;
      case "O":
       $A(p8);break;
      case "P":
       $A(o8);break;
      case "Q":
       $A(n8);break;
      case "R":
       $A(m8);break;
      case "S":
       $A(l8);break;
      case "T":
       $A(k8);break;
      case "U":
       $A(j8);break;
      case "V":
       $A(i8);break;
      case "W":
       $A(h8);break;
      case "X":
       $A(g8);break;
      case "Y":
       $A(f8);break;
      case "Z":
       $A(e8);break;
      case "[":
       $A(d8);break;
      case "\\":
       $A(c8);break;
      case "]":
       $A(b8);break;
      case "^":
       $A(a8);break;
      case "_":
       $A(Z7);break;
      default:
       $R(3,[],"Fail");
      }
     },[Z7,a8,b8,c8,d8,e8,f8,g8,h8,i8,j8,k8,l8,m8,n8,o8,p8,q8,r8,s8,t8,u8,v8,w8,x8,y8,z8,A8,B8,C8,D8,E8]);
    },[Z7,a8,b8,c8,d8,e8,f8,g8,h8,i8,j8,k8,l8,m8,n8,o8,p8,q8,r8,s8,t8,u8,v8,w8,x8,y8,z8,A8,B8,C8,D8,E8]);
   },[Z7,a8,b8,c8,d8,e8,f8,g8,h8,i8,j8,k8,l8,m8,n8,o8,p8,q8,r8,s8,t8,u8,v8,w8,x8,y8,z8,A8,B8,C8,D8,E8],"a104");
   var K8=$d(1,[F8],"lvl127");
   var L8=$t(function(){
    var M8=$f(1,function(N8){
     var O8=$d(1,[N8,$$GHCziTypes_True],"sat");
     M7.J(O8);
    },[M7],"k1");
    var P8=$t(function(){
     $$TextziReadziLex$t3.J(M8);
    },[M8],"sat");
    $$TextziParserCombinatorsziReadP_zlzpzp1.C([$$TextziReadziLex$S,$$TextziReadziLex$V,M8],function(Q8){
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Q8,P8);
    },[P8]);
   },[M7],"sat");
   var R8=$f(1,function(S8){
    $M(S8,function(T8){
     var U8=T8.v[0];
     $M(U8,function(V8){
      switch(V8.toString()){
      case "^":
       $A(K8);break;
      default:
       $R(3,[],"Fail");
      }
     },[K8]);
    },[K8]);
   },[K8],"sat");
   var W8=$d(1,[R8],"sat");
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(W8,L8);
  },[M7],"sat");
  var X8=$f(1,function(Y8){
   var Z8=$t(function(){
    $M(Y8,function(a9){
     var b9=a9.v[0];
     $$GHCziIntegerziType_smallInteger.J(b9);
    },[]);
   },[Y8],"lvl95");
   var c9=$f(1,function(d9){
    $$TextziReadziLex_numberToIntegerzuzdsval.C([Z8,$$TextziReadziLex_numberToInteger2,d9],function(e9){
     $$GHCziIntegerziType_leInteger.C([e9,$$TextziReadziLex$v3],function(f9){
      switch(f9.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       var g9=$t(function(){
	$$GHCziIntegerziType_integerToInt.C([e9],function(i9){
	 var k9=$hs_int2Wordzh(i9);
	 var h9=$hs_leWordzh(k9,goog.math.Long.fromBits(1114111,0));
	 switch(h9.g){
	 case 1:
	  $$GHCziChar_chr2.J(i9);break;
	 case 2:
	  var j9=$hs_chrzh(i9);
	  $R(1,[j9],"C#");break;
	 }
	},[]);
       },[e9],"sat");
       var l9=$d(1,[g9,$$GHCziTypes_True],"sat");
       M7.J(l9);break;
      }
     },[M7,e9]);
    },[M7]);
   },[M7,Z8],"sat");
   $$TextziReadziLex$M.J(Y8,c9);
  },[M7],"sat");
  $$TextziParserCombinatorsziReadP_zlzpzp1.C([$$TextziReadziLex$d,$$TextziReadziLex$u3,X8],function(m9){
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(m9,Y7);
  },[Y7]);
 },[M7],"sat");
 var n9=$f(1,function(o9){
  $M(o9,function(p9){
   var q9=p9.v[0];
   $M(q9,function(r9){
    switch(r9.toString()){
    case "\"":
     $A(W7);break;
    case "'":
     $A(V7);break;
    case "\\":
     $A(U7);break;
    case "a":
     $A(T7);break;
    case "b":
     $A(S7);break;
    case "f":
     $A(R7);break;
    case "n":
     $A(Q7);break;
    case "r":
     $A(P7);break;
    case "t":
     $A(O7);break;
    case "v":
     $A(N7);break;
    default:
     $R(3,[],"Fail");
    }
   },[N7,O7,P7,Q7,R7,S7,T7,U7,V7,W7]);
  },[N7,O7,P7,Q7,R7,S7,T7,U7,V7,W7]);
 },[N7,O7,P7,Q7,R7,S7,T7,U7,V7,W7],"sat");
 var s9=$d(1,[n9],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(s9,X7);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_hsLex2=$f(1,function(E9){
 var F9=$t(function(){
  E9.J($$TextziReadziLex_EOF);
 },[E9],"lvl85");
 var G9=$t(function(){
  var H9=$t(function(){
   var I9=$f(2,function(J9,K9){
    var L9=$t(function(){
     var M9=$d(1,[J9],"sat");
     E9.J(M9);
    },[E9,J9],"lvl87");
    $M(K9,function(N9){
     switch(N9.g){
     case 1:
      $M(J9,function(O9){
       var P9=O9.v[0];
       $M(P9,function(Q9){
	switch(Q9.toString()){
	case "'":
	 $R(3,[],"Fail");break;
	default:
	 var R9=$f(1,function(S9){
	  $M(S9,function(T9){
	   var U9=T9.v[0];
	   $M(U9,function(V9){
	    switch(V9.toString()){
	    case "'":
	     $A(L9);break;
	    default:
	     $R(3,[],"Fail");
	    }
	   },[L9]);
	  },[L9]);
	 },[L9],"sat");
	 $R(1,[R9],"Get");
	}
       },[L9]);
      },[L9]);break;
     case 2:
      var W9=$f(1,function(X9){
       $M(X9,function(Y9){
	var Z9=Y9.v[0];
	$M(Z9,function(aa){
	 switch(aa.toString()){
	 case "'":
	  $A(L9);break;
	 default:
	  $R(3,[],"Fail");
	 }
	},[L9]);
       },[L9]);
      },[L9],"sat");
      $R(1,[W9],"Get");break;
     }
    },[J9,L9]);
   },[E9],"$wk");
   var ba=$f(1,function(ca){
    $M(ca,function(da){
     var ea=da.v[0],fa=da.v[1];
     I9.J(ea,fa);
    },[I9]);
   },[I9],"k1");
   $$TextziReadziLex_lexChar2.J(ba);
  },[E9],"lvl86");
  var ga=$f(1,function(ha){
   $M(ha,function(ia){
    var ja=ia.v[0];
    $M(ja,function(ka){
     switch(ka.toString()){
     case "'":
      $R(3,[],"Fail");break;
     case "\\":
      $A(H9);break;
     default:
      var la=$t(function(){
       var ma=$d(1,[ia],"sat");
       E9.J(ma);
      },[E9,ia],"lvl87");
      var na=$f(1,function(oa){
       $M(oa,function(pa){
	var qa=pa.v[0];
	$M(qa,function(ra){
	 switch(ra.toString()){
	 case "'":
	  $A(la);break;
	 default:
	  $R(3,[],"Fail");
	 }
	},[la]);
       },[la]);
      },[la],"sat");
      $R(1,[na],"Get");
     }
    },[E9,H9,ia]);
   },[E9,H9]);
  },[E9,H9],"a104");
  var sa=$d(1,[ga],"lvl87");
  var ta=$t(function(){
   var ua=$t(function(){
    $$TextziReadziLex$p4.J($$GHCziBase_id,E9);
   },[E9],"lvl88");
   var va=$t(function(){
    var wa=$t(function(){
     var xa=$t(function(){
      var ya=$t(function(){
       $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$N,$$TextziReadziLex$t4,E9);
      },[E9],"sat");
      var za=$f(1,function(Aa){
       $$GHCziUnicode_isAlpha.C([Aa],function(Ba){
	switch(Ba.g){
	case 1:
	 $M(Aa,function(Ca){
	  var Da=Ca.v[0];
	  $M(Da,function(Ea){
	   switch(Ea.toString()){
	   case "_":
	    var Fa=$f(1,function(Ga){
	     var Ha=$d(2,[Ca,Ga],"sat");
	     var Ia=$d(4,[Ha],"sat");
	     E9.J(Ia);
	    },[E9,Ca],"sat");
	    $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$f,Fa);break;
	   default:
	    $R(3,[],"Fail");
	   }
	  },[E9,Ca]);
	 },[E9]);break;
	case 2:
	 var Ja=$f(1,function(Ka){
	  var La=$d(2,[Aa,Ka],"sat");
	  var Ma=$d(4,[La],"sat");
	  E9.J(Ma);
	 },[E9,Aa],"sat");
	 $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$f,Ja);break;
	}
       },[E9,Aa]);
      },[E9],"sat");
      var Na=$d(1,[za],"sat");
      $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Na,ya);
     },[E9],"sat");
     var Oa=$f(1,function(Pa){
      $$GHCziList_elem.C([$$GHCziClasses_zdfEqChar,Pa,$$TextziReadziLex$F],function(Qa){
       switch(Qa.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	var Ra=$f(1,function(Sa){
	 var Ta=$d(2,[Pa,Sa],"s");
	 $$GHCziList_elem.C([$$TextziReadziLex$a,Ta,$$TextziReadziLex$E],function(Ua){
	  switch(Ua.g){
	  case 1:
	   var Va=$d(5,[Ta],"sat");
	   E9.J(Va);break;
	  case 2:
	   var Wa=$d(3,[Ta],"sat");
	   E9.J(Wa);break;
	  }
	 },[E9,Ta]);
	},[E9,Pa],"sat");
	$$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$G,Ra);break;
       }
      },[E9,Pa]);
     },[E9],"sat");
     var Xa=$d(1,[Oa],"sat");
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Xa,xa);
    },[E9],"sat");
    var Ya=$f(1,function(Za){
     $$GHCziList_elem.C([$$GHCziClasses_zdfEqChar,Za,$$TextziReadziLex$H],function(ab){
      switch(ab.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       var bb=$d(2,[Za,$$GHCziTypes_ZMZN],"sat");
       var cb=$d(3,[bb],"sat");
       E9.J(cb);break;
      }
     },[E9,Za]);
    },[E9],"sat");
    var db=$d(1,[Ya],"sat");
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(db,wa);
   },[E9],"sat");
   var eb=$f(1,function(fb){
    $M(fb,function(gb){
     var hb=gb.v[0];
     $M(hb,function(ib){
      switch(ib.toString()){
      case "\"":
       $A(ua);break;
      default:
       $R(3,[],"Fail");
      }
     },[ua]);
    },[ua]);
   },[ua],"sat");
   var jb=$d(1,[eb],"sat");
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(jb,va);
  },[E9],"sat");
  var kb=$f(1,function(lb){
   $M(lb,function(mb){
    var nb=mb.v[0];
    $M(nb,function(ob){
     switch(ob.toString()){
     case "'":
      $A(sa);break;
     default:
      $R(3,[],"Fail");
     }
    },[sa]);
   },[sa]);
  },[sa],"sat");
  var pb=$d(1,[kb],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(pb,ta);
 },[E9],"sat");
 var qb=$f(1,function(rb){
  $M(rb,function(sb){
   switch(sb.g){
   case 1:
    $A(F9);break;
   case 2:
    $R(3,[],"Fail");break;
   }
  },[F9]);
 },[F9],"sat");
 var tb=$d(2,[qb],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(tb,G9);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lex1=$f(1,function(ub){
 var vb=$t(function(){
  $$TextziReadziLex_hsLex2.J(ub);
 },[ub],"lvl85");
 var wb=$f(1,function(xb){
  $A(vb);
 },[vb],"k1");
 var yb=$f(1,function(zb){
  $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(zb,wb);
 },[wb],"sat");
 $R(2,[yb],"Look");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_EOF=$D(7,function(){
 $r([]);
},"at libraries/base/Text/Read/Lex.hs:70:5");
var $$TextziReadziLex$a=$T(function(){
 $$GHCziClasses_zdfEqZMZN.J($$GHCziClasses_zdfEqChar);
},"at libraries/base/Text/Read/Lex.hs:186:11");
var $$TextziReadziLex$b=$D(1,function(){
 $r([goog.math.Long.fromBits(8,0)]);
},"lvl");
var $$TextziReadziLex$c=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"lvl1");
var $$TextziReadziLex$d=$F(1,function(oc){
 var pc=$t(function(){
  oc.J($$TextziReadziLex$c);
 },[oc],"lvl85");
 var qc=$t(function(){
  oc.J($$TextziReadziLex$b);
 },[oc],"lvl86");
 var rc=$t(function(){
  oc.J($$TextziReadziLex$c);
 },[oc],"lvl87");
 var sc=$t(function(){
  oc.J($$TextziReadziLex$b);
 },[oc],"lvl88");
 var tc=$f(1,function(uc){
  $M(uc,function(vc){
   var wc=vc.v[0];
   $M(wc,function(xc){
    switch(xc.toString()){
    case "O":
     $A(sc);break;
    case "X":
     $A(rc);break;
    case "o":
     $A(qc);break;
    case "x":
     $A(pc);break;
    default:
     $R(3,[],"Fail");
    }
   },[pc,qc,rc,sc]);
  },[pc,qc,rc,sc]);
 },[pc,qc,rc,sc],"sat");
 $R(1,[tc],"Get");
},"a");
var $$TextziReadziLex$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("_'");
},"lvl2");
var $$TextziReadziLex$f=$F(1,function(yc){
 $$GHCziUnicode_isAlphaNum.C([yc],function(zc){
  switch(zc.g){
  case 1:
   $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,yc,$$TextziReadziLex$e);break;
  case 2:
   $R(2,[],"True");break;
  }
 },[yc]);
},"at libraries/base/Text/Read/Lex.hs:204:5");
var $$TextziReadziLex$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("..");
},"a1");
var $$TextziReadziLex$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("::");
},"a2");
var $$TextziReadziLex$i=$D(1,function(){
 $r(["="]);
},"a3");
var $$TextziReadziLex$j=$D(2,function(){
 $r([$$TextziReadziLex$i,$$GHCziTypes_ZMZN]);
},"a4");
var $$TextziReadziLex$k=$D(1,function(){
 $r(["\\"]);
},"a5");
var $$TextziReadziLex$l=$D(2,function(){
 $r([$$TextziReadziLex$k,$$GHCziTypes_ZMZN]);
},"a6");
var $$TextziReadziLex$m=$D(1,function(){
 $r(["|"]);
},"a7");
var $$TextziReadziLex$n=$D(2,function(){
 $r([$$TextziReadziLex$m,$$GHCziTypes_ZMZN]);
},"a8");
var $$TextziReadziLex$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<-");
},"a9");
var $$TextziReadziLex$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("->");
},"a10");
var $$TextziReadziLex$q=$D(1,function(){
 $r(["@"]);
},"a11");
var $$TextziReadziLex$r=$D(2,function(){
 $r([$$TextziReadziLex$q,$$GHCziTypes_ZMZN]);
},"a12");
var $$TextziReadziLex$s=$D(1,function(){
 $r(["~"]);
},"a13");
var $$TextziReadziLex$t=$D(2,function(){
 $r([$$TextziReadziLex$s,$$GHCziTypes_ZMZN]);
},"a14");
var $$TextziReadziLex$u=$T(function(){
 $$GHCziCString_unpackCStringzh.J("=>");
},"a15");
var $$TextziReadziLex$v=$D(2,function(){
 $r([$$TextziReadziLex$u,$$GHCziTypes_ZMZN]);
},"a16");
var $$TextziReadziLex$w=$D(2,function(){
 $r([$$TextziReadziLex$t,$$TextziReadziLex$v]);
},"a17");
var $$TextziReadziLex$x=$D(2,function(){
 $r([$$TextziReadziLex$r,$$TextziReadziLex$w]);
},"a18");
var $$TextziReadziLex$y=$D(2,function(){
 $r([$$TextziReadziLex$p,$$TextziReadziLex$x]);
},"a19");
var $$TextziReadziLex$z=$D(2,function(){
 $r([$$TextziReadziLex$o,$$TextziReadziLex$y]);
},"a20");
var $$TextziReadziLex$A=$D(2,function(){
 $r([$$TextziReadziLex$n,$$TextziReadziLex$z]);
},"a21");
var $$TextziReadziLex$B=$D(2,function(){
 $r([$$TextziReadziLex$l,$$TextziReadziLex$A]);
},"a22");
var $$TextziReadziLex$C=$D(2,function(){
 $r([$$TextziReadziLex$j,$$TextziReadziLex$B]);
},"a23");
var $$TextziReadziLex$D=$D(2,function(){
 $r([$$TextziReadziLex$h,$$TextziReadziLex$C]);
},"a24");
var $$TextziReadziLex$E=$D(2,function(){
 $r([$$TextziReadziLex$g,$$TextziReadziLex$D]);
},"at libraries/base/Text/Read/Lex.hs:192:3");
var $$TextziReadziLex$F=$T(function(){
 $$GHCziCString_unpackCStringzh.J("!@#$%&*+./<=>?\\^|:-~");
},"lvl3");
var $$TextziReadziLex$G=$F(1,function(Ac){
 $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,Ac,$$TextziReadziLex$F);
},"a25");
var $$TextziReadziLex$H=$T(function(){
 $$GHCziCString_unpackCStringzh.J(",;()[]{}`");
},"lvl4");
var $$TextziReadziLex$K=$T(function(){
 $$GHCziCString_unpackCStringzh.J("valDig: Bad base");
},"lvl6");
var $$TextziReadziLex$L=$T(function(){
 $$GHCziErr_error.J($$TextziReadziLex$K);
},"lvl7");
var $$TextziReadziLex$M=$F(2,function(Vc,Wc){
 var Xc=$f(1,function(Yc){
  $M(Yc,function(Zc){
   switch(Zc.g){
   case 1:
    $R(3,[],"Fail");break;
   case 2:
    Wc.J(Zc);break;
   }
  },[Wc]);
 },[Wc],"lvl85");
 var ad=$f(1,function(bd){
  $M(bd,function(cd){
   switch(cd.g){
   case 1:
    $R(3,[],"Fail");break;
   case 2:
    var dd=cd.v[0],ed=cd.v[1];
    $M(Vc,function(fd){
     var gd=fd.v[0];
     $M(dd,function(hd){
      var id=hd.v[0];
      var jd=$f(1,function(kd){
       var ld=$t(function(){
	var md=$f(2,function(nd,od){
	 $M(nd,function(pd){
	  switch(pd.g){
	  case 1:
	   var qd=$t(function(){
	    od.J($$GHCziTypes_ZMZN);
	   },[od],"x34");
	   var rd=$f(1,function(sd){
	    sd.J(qd);
	   },[qd],"sat");
	   $A(rd);break;
	  case 2:
	   var td=pd.v[0],ud=pd.v[1];
	   $M(td,function(vd){
	    var wd=vd.v[0];
	    var xd=$f(1,function(yd){
	     var zd=$t(function(){
	      var Ad=$f(1,function(Bd){
	       var Cd=$d(2,[yd,Bd],"sat");
	       od.J(Cd);
	      },[od,yd],"sat");
	      md.J(ud,Ad);
	     },[od,ud,yd,md],"lvl87");
	     var Dd=$f(1,function(Ed){
	      var Fd=$t(function(){
	       zd.J(Ed);
	      },[zd,Ed],"lvl88");
	      var Gd=$f(1,function(Hd){
	       $A(Fd);
	      },[Fd],"sat");
	      $R(1,[Gd],"Get");
	     },[zd],"sat");
	     $A(Dd);
	    },[od,ud,md],"$j1");
	    $M(gd,function(Id){
	     switch(Id.toString()){
	     case "8":
	      var Jd="0"<=wd?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Jd.g){
	      case 1:
	       var Kd=$t(function(){
		od.J($$GHCziTypes_ZMZN);
	       },[od],"x34");
	       var Ld=$f(1,function(Md){
		Md.J(Kd);
	       },[Kd],"sat");
	       $A(Ld);break;
	      case 2:
	       var Nd=wd<="7"?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Nd.g){
	       case 1:
		var Od=$t(function(){
		 od.J($$GHCziTypes_ZMZN);
		},[od],"x34");
		var Pd=$f(1,function(Qd){
		 Qd.J(Od);
		},[Od],"sat");
		$A(Pd);break;
	       case 2:
		var Td=$hs_ordzh(wd);
		var Sd=Td.subtract(goog.math.Long.fromBits(48,0));
		var Rd=$d(1,[Sd],"sat");
		xd.J(Rd);break;
	       }break;
	      }break;
	     case "10":
	      var Ud="0"<=wd?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Ud.g){
	      case 1:
	       var Vd=$t(function(){
		od.J($$GHCziTypes_ZMZN);
	       },[od],"x34");
	       var Wd=$f(1,function(Xd){
		Xd.J(Vd);
	       },[Vd],"sat");
	       $A(Wd);break;
	      case 2:
	       var Yd=wd<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Yd.g){
	       case 1:
		var Zd=$t(function(){
		 od.J($$GHCziTypes_ZMZN);
		},[od],"x34");
		var ae=$f(1,function(be){
		 be.J(Zd);
		},[Zd],"sat");
		$A(ae);break;
	       case 2:
		var ee=$hs_ordzh(wd);
		var de=ee.subtract(goog.math.Long.fromBits(48,0));
		var ce=$d(1,[de],"sat");
		xd.J(ce);break;
	       }break;
	      }break;
	     case "16":
	      var fe=$t(function(){
	       var ge="a"<=wd?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(ge.g){
	       case 1:
		var he="A"<=wd?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(he.g){
		case 1:
		 $R(1,[],"Nothing");break;
		case 2:
		 var ie=wd<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(ie.g){
		 case 1:
		  $R(1,[],"Nothing");break;
		 case 2:
		  var me=$hs_ordzh(wd);
		  var le=me.subtract(goog.math.Long.fromBits(65,0));
		  var ke=le.add(goog.math.Long.fromBits(10,0));
		  var je=$d(1,[ke],"sat");
		  $R(2,[je],"Just");break;
		 }break;
		}break;
	       case 2:
		var ne=wd<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(ne.g){
		case 1:
		 var oe="A"<=wd?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(oe.g){
		 case 1:
		  $R(1,[],"Nothing");break;
		 case 2:
		  var pe=wd<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(pe.g){
		  case 1:
		   $R(1,[],"Nothing");break;
		  case 2:
		   var te=$hs_ordzh(wd);
		   var se=te.subtract(goog.math.Long.fromBits(65,0));
		   var re=se.add(goog.math.Long.fromBits(10,0));
		   var qe=$d(1,[re],"sat");
		   $R(2,[qe],"Just");break;
		  }break;
		 }break;
		case 2:
		 var xe=$hs_ordzh(wd);
		 var we=xe.subtract(goog.math.Long.fromBits(97,0));
		 var ve=we.add(goog.math.Long.fromBits(10,0));
		 var ue=$d(1,[ve],"sat");
		 $R(2,[ue],"Just");break;
		}break;
	       }
	      },[wd],"$w$j");
	      var ye="0"<=wd?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(ye.g){
	      case 1:
	       $M(fe,function(ze){
		switch(ze.g){
		case 1:
		 var Ae=$t(function(){
		  od.J($$GHCziTypes_ZMZN);
		 },[od],"x34");
		 var Be=$f(1,function(Ce){
		  Ce.J(Ae);
		 },[Ae],"sat");
		 $A(Be);break;
		case 2:
		 var De=ze.v[0];
		 xd.J(De);break;
		}
	       },[od,ud,md,xd]);break;
	      case 2:
	       var Ee=wd<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Ee.g){
	       case 1:
		$M(fe,function(Fe){
		 switch(Fe.g){
		 case 1:
		  var Ge=$t(function(){
		   od.J($$GHCziTypes_ZMZN);
		  },[od],"x34");
		  var He=$f(1,function(Ie){
		   Ie.J(Ge);
		  },[Ge],"sat");
		  $A(He);break;
		 case 2:
		  var Je=Fe.v[0];
		  xd.J(Je);break;
		 }
		},[od,ud,md,xd]);break;
	       case 2:
		var Me=$hs_ordzh(wd);
		var Le=Me.subtract(goog.math.Long.fromBits(48,0));
		var Ke=$d(1,[Le],"sat");
		xd.J(Ke);break;
	       }break;
	      }break;
	     default:
	      $A($$TextziReadziLex$L);
	     }
	    },[od,ud,md,xd,wd]);
	   },[od,ud,md,gd]);break;
	  }
	 },[od,md,gd]);
	},[gd],"scan");
	var Ne=$f(1,function(Oe){
	 $R(2,[kd,Oe],":");
	},[kd],"sat");
	md.J(ed,Ne);
       },[gd,ed,kd],"lvl86");
       var Pe=$f(1,function(Qe){
	var Re=$t(function(){
	 ld.J(Qe);
	},[ld,Qe],"lvl87");
	var Se=$f(1,function(Te){
	 $A(Re);
	},[Re],"sat");
	$R(1,[Se],"Get");
       },[ld],"sat");
       $A(Pe);
      },[gd,ed],"$j");
      $M(gd,function(Ue){
       switch(Ue.toString()){
       case "8":
	var Ve="0"<=id?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Ve.g){
	case 1:
	 $R(3,[],"Fail");break;
	case 2:
	 var We=id<="7"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(We.g){
	 case 1:
	  $R(3,[],"Fail");break;
	 case 2:
	  var Ze=$hs_ordzh(id);
	  var Ye=Ze.subtract(goog.math.Long.fromBits(48,0));
	  var Xe=$d(1,[Ye],"sat");
	  jd.J(Xe,Xc);break;
	 }break;
	}break;
       case "10":
	var af="0"<=id?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(af.g){
	case 1:
	 $R(3,[],"Fail");break;
	case 2:
	 var bf=id<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(bf.g){
	 case 1:
	  $R(3,[],"Fail");break;
	 case 2:
	  var ef=$hs_ordzh(id);
	  var df=ef.subtract(goog.math.Long.fromBits(48,0));
	  var cf=$d(1,[df],"sat");
	  jd.J(cf,Xc);break;
	 }break;
	}break;
       case "16":
	var ff=$t(function(){
	 var gf="a"<=id?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(gf.g){
	 case 1:
	  var hf="A"<=id?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(hf.g){
	  case 1:
	   $R(1,[],"Nothing");break;
	  case 2:
	   var jf=id<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(jf.g){
	   case 1:
	    $R(1,[],"Nothing");break;
	   case 2:
	    var nf=$hs_ordzh(id);
	    var mf=nf.subtract(goog.math.Long.fromBits(65,0));
	    var lf=mf.add(goog.math.Long.fromBits(10,0));
	    var kf=$d(1,[lf],"sat");
	    $R(2,[kf],"Just");break;
	   }break;
	  }break;
	 case 2:
	  var of=id<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(of.g){
	  case 1:
	   var pf="A"<=id?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(pf.g){
	   case 1:
	    $R(1,[],"Nothing");break;
	   case 2:
	    var qf=id<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(qf.g){
	    case 1:
	     $R(1,[],"Nothing");break;
	    case 2:
	     var uf=$hs_ordzh(id);
	     var tf=uf.subtract(goog.math.Long.fromBits(65,0));
	     var sf=tf.add(goog.math.Long.fromBits(10,0));
	     var rf=$d(1,[sf],"sat");
	     $R(2,[rf],"Just");break;
	    }break;
	   }break;
	  case 2:
	   var yf=$hs_ordzh(id);
	   var xf=yf.subtract(goog.math.Long.fromBits(97,0));
	   var wf=xf.add(goog.math.Long.fromBits(10,0));
	   var vf=$d(1,[wf],"sat");
	   $R(2,[vf],"Just");break;
	  }break;
	 }
	},[id],"$w$j");
	var zf="0"<=id?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(zf.g){
	case 1:
	 $M(ff,function(Af){
	  switch(Af.g){
	  case 1:
	   $R(3,[],"Fail");break;
	  case 2:
	   var Bf=Af.v[0];
	   jd.J(Bf,Xc);break;
	  }
	 },[Xc,jd]);break;
	case 2:
	 var Cf=id<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Cf.g){
	 case 1:
	  $M(ff,function(Df){
	   switch(Df.g){
	   case 1:
	    $R(3,[],"Fail");break;
	   case 2:
	    var Ef=Df.v[0];
	    jd.J(Ef,Xc);break;
	   }
	  },[Xc,jd]);break;
	 case 2:
	  var Hf=$hs_ordzh(id);
	  var Gf=Hf.subtract(goog.math.Long.fromBits(48,0));
	  var Ff=$d(1,[Gf],"sat");
	  jd.J(Ff,Xc);break;
	 }break;
	}break;
       default:
	$A($$TextziReadziLex$L);
       }
      },[Xc,jd,id]);
     },[Xc,gd,ed]);
    },[Xc,dd,ed]);break;
   }
  },[Xc,Vc]);
 },[Xc,Vc],"sat");
 $R(2,[ad],"Look");
},"a26");
var $$TextziReadziLex$N=$F(1,function(If){
 var Jf=$t(function(){
  var Kf=$f(1,function(Lf){
   var Mf=$d(1,[$$TextziReadziLex$c,Lf],"sat");
   var Nf=$d(6,[Mf],"sat");
   If.J(Nf);
  },[If],"sat");
  $$TextziReadziLex$M.J($$TextziReadziLex$c,Kf);
 },[If],"lvl85");
 var Of=$t(function(){
  var Pf=$f(1,function(Qf){
   var Rf=$d(1,[$$TextziReadziLex$b,Qf],"sat");
   var Sf=$d(6,[Rf],"sat");
   If.J(Sf);
  },[If],"sat");
  $$TextziReadziLex$M.J($$TextziReadziLex$b,Pf);
 },[If],"lvl86");
 var Tf=$t(function(){
  var Uf=$f(1,function(Vf){
   var Wf=$d(1,[$$TextziReadziLex$c,Vf],"sat");
   var Xf=$d(6,[Wf],"sat");
   If.J(Xf);
  },[If],"sat");
  $$TextziReadziLex$M.J($$TextziReadziLex$c,Uf);
 },[If],"lvl87");
 var Yf=$t(function(){
  var Zf=$f(1,function(ag){
   var bg=$d(1,[$$TextziReadziLex$b,ag],"sat");
   var cg=$d(6,[bg],"sat");
   If.J(cg);
  },[If],"sat");
  $$TextziReadziLex$M.J($$TextziReadziLex$b,Zf);
 },[If],"lvl88");
 var dg=$f(1,function(eg){
  $M(eg,function(fg){
   var gg=fg.v[0];
   $M(gg,function(hg){
    switch(hg.toString()){
    case "O":
     $A(Yf);break;
    case "X":
     $A(Tf);break;
    case "o":
     $A(Of);break;
    case "x":
     $A(Jf);break;
    default:
     $R(3,[],"Fail");
    }
   },[Jf,Of,Tf,Yf]);
  },[Jf,Of,Tf,Yf]);
 },[Jf,Of,Tf,Yf],"a104");
 var ig=$d(1,[dg],"lvl89");
 var jg=$f(1,function(kg){
  $M(kg,function(lg){
   var mg=lg.v[0];
   $M(mg,function(ng){
    switch(ng.toString()){
    case "0":
     $A(ig);break;
    default:
     $R(3,[],"Fail");
    }
   },[ig]);
  },[ig]);
 },[ig],"sat");
 $R(1,[jg],"Get");
},"a27");
var $$TextziReadziLex$O=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"lvl8");
var $$TextziReadziLex$P=$F(1,function(og){
 var pg=$t(function(){
  var qg=$f(1,function(rg){
   var sg=$d(2,[rg],"sat");
   og.J(sg);
  },[og],"sat");
  $$TextziReadziLex$M.J($$TextziReadziLex$O,qg);
 },[og],"lvl85");
 var tg=$f(1,function(ug){
  $M(ug,function(vg){
   var wg=vg.v[0];
   $M(wg,function(xg){
    switch(xg.toString()){
    case ".":
     $A(pg);break;
    default:
     $R(3,[],"Fail");
    }
   },[pg]);
  },[pg]);
 },[pg],"sat");
 $R(1,[tg],"Get");
},"a28");
var $$TextziReadziLex$Q=$D(1,function(){
 $r(["\x01"]);
},"x");
var $$TextziReadziLex$R=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SOH");
},"a29");
var $$TextziReadziLex$S=$F(1,function(yg){
 var zg=$t(function(){
  yg.J($$TextziReadziLex$Q);
 },[yg],"lvl85");
 var Ag=$f(1,function(Bg){
  $A(zg);
 },[zg],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$R,Ag);
},"a30");
var $$TextziReadziLex$T=$D(1,function(){
 $r(["\x0e"]);
},"x1");
var $$TextziReadziLex$U=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SO");
},"a31");
var $$TextziReadziLex$V=$F(1,function(Cg){
 var Dg=$t(function(){
  Cg.J($$TextziReadziLex$T);
 },[Cg],"lvl85");
 var Eg=$f(1,function(Fg){
  $A(Dg);
 },[Dg],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$U,Eg);
},"a32");
var $$TextziReadziLex$W=$D(1,function(){
 $r(["\x00"]);
},"x2");
var $$TextziReadziLex$X=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NUL");
},"a33");
var $$TextziReadziLex$Y=$F(1,function(Gg){
 var Hg=$t(function(){
  Gg.J($$TextziReadziLex$W);
 },[Gg],"lvl85");
 var Ig=$f(1,function(Jg){
  $A(Hg);
 },[Hg],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$X,Ig);
},"a34");
var $$TextziReadziLex$Z=$D(1,function(){
 $r(["\x02"]);
},"x3");
var $$TextziReadziLex$a1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("STX");
},"a35");
var $$TextziReadziLex$b1=$F(1,function(Kg){
 var Lg=$t(function(){
  Kg.J($$TextziReadziLex$Z);
 },[Kg],"lvl85");
 var Mg=$f(1,function(Ng){
  $A(Lg);
 },[Lg],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$a1,Mg);
},"a36");
var $$TextziReadziLex$c1=$D(1,function(){
 $r(["\x03"]);
},"x4");
var $$TextziReadziLex$d1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ETX");
},"a37");
var $$TextziReadziLex$e1=$F(1,function(Og){
 var Pg=$t(function(){
  Og.J($$TextziReadziLex$c1);
 },[Og],"lvl85");
 var Qg=$f(1,function(Rg){
  $A(Pg);
 },[Pg],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$d1,Qg);
},"a38");
var $$TextziReadziLex$f1=$D(1,function(){
 $r(["\x04"]);
},"x5");
var $$TextziReadziLex$g1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("EOT");
},"a39");
var $$TextziReadziLex$h1=$F(1,function(Sg){
 var Tg=$t(function(){
  Sg.J($$TextziReadziLex$f1);
 },[Sg],"lvl85");
 var Ug=$f(1,function(Vg){
  $A(Tg);
 },[Tg],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$g1,Ug);
},"a40");
var $$TextziReadziLex$i1=$D(1,function(){
 $r(["\x05"]);
},"x6");
var $$TextziReadziLex$j1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ENQ");
},"a41");
var $$TextziReadziLex$k1=$F(1,function(Wg){
 var Xg=$t(function(){
  Wg.J($$TextziReadziLex$i1);
 },[Wg],"lvl85");
 var Yg=$f(1,function(Zg){
  $A(Xg);
 },[Xg],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$j1,Yg);
},"a42");
var $$TextziReadziLex$l1=$D(1,function(){
 $r(["\x06"]);
},"x7");
var $$TextziReadziLex$m1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ACK");
},"a43");
var $$TextziReadziLex$n1=$F(1,function(ah){
 var bh=$t(function(){
  ah.J($$TextziReadziLex$l1);
 },[ah],"lvl85");
 var ch=$f(1,function(dh){
  $A(bh);
 },[bh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$m1,ch);
},"a44");
var $$TextziReadziLex$o1=$D(1,function(){
 $r(["\x07"]);
},"x8");
var $$TextziReadziLex$p1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("BEL");
},"a45");
var $$TextziReadziLex$q1=$F(1,function(eh){
 var fh=$t(function(){
  eh.J($$TextziReadziLex$o1);
 },[eh],"lvl85");
 var gh=$f(1,function(hh){
  $A(fh);
 },[fh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$p1,gh);
},"a46");
var $$TextziReadziLex$r1=$D(1,function(){
 $r(["\b"]);
},"x9");
var $$TextziReadziLex$s1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("BS");
},"a47");
var $$TextziReadziLex$t1=$F(1,function(ih){
 var jh=$t(function(){
  ih.J($$TextziReadziLex$r1);
 },[ih],"lvl85");
 var kh=$f(1,function(lh){
  $A(jh);
 },[jh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$s1,kh);
},"a48");
var $$TextziReadziLex$u1=$D(1,function(){
 $r(["\t"]);
},"x10");
var $$TextziReadziLex$v1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HT");
},"a49");
var $$TextziReadziLex$w1=$F(1,function(mh){
 var nh=$t(function(){
  mh.J($$TextziReadziLex$u1);
 },[mh],"lvl85");
 var oh=$f(1,function(ph){
  $A(nh);
 },[nh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$v1,oh);
},"a50");
var $$TextziReadziLex$x1=$D(1,function(){
 $r(["\n"]);
},"x11");
var $$TextziReadziLex$y1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("LF");
},"a51");
var $$TextziReadziLex$z1=$F(1,function(qh){
 var rh=$t(function(){
  qh.J($$TextziReadziLex$x1);
 },[qh],"lvl85");
 var sh=$f(1,function(th){
  $A(rh);
 },[rh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$y1,sh);
},"a52");
var $$TextziReadziLex$A1=$D(1,function(){
 $r(["\v"]);
},"x12");
var $$TextziReadziLex$B1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("VT");
},"a53");
var $$TextziReadziLex$C1=$F(1,function(uh){
 var vh=$t(function(){
  uh.J($$TextziReadziLex$A1);
 },[uh],"lvl85");
 var wh=$f(1,function(xh){
  $A(vh);
 },[vh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$B1,wh);
},"a54");
var $$TextziReadziLex$D1=$D(1,function(){
 $r(["\f"]);
},"x13");
var $$TextziReadziLex$E1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("FF");
},"a55");
var $$TextziReadziLex$F1=$F(1,function(yh){
 var zh=$t(function(){
  yh.J($$TextziReadziLex$D1);
 },[yh],"lvl85");
 var Ah=$f(1,function(Bh){
  $A(zh);
 },[zh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$E1,Ah);
},"a56");
var $$TextziReadziLex$G1=$D(1,function(){
 $r(["\r"]);
},"x14");
var $$TextziReadziLex$H1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("CR");
},"a57");
var $$TextziReadziLex$I1=$F(1,function(Ch){
 var Dh=$t(function(){
  Ch.J($$TextziReadziLex$G1);
 },[Ch],"lvl85");
 var Eh=$f(1,function(Fh){
  $A(Dh);
 },[Dh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$H1,Eh);
},"a58");
var $$TextziReadziLex$J1=$D(1,function(){
 $r(["\x0f"]);
},"x15");
var $$TextziReadziLex$K1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SI");
},"a59");
var $$TextziReadziLex$L1=$F(1,function(Gh){
 var Hh=$t(function(){
  Gh.J($$TextziReadziLex$J1);
 },[Gh],"lvl85");
 var Ih=$f(1,function(Jh){
  $A(Hh);
 },[Hh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$K1,Ih);
},"a60");
var $$TextziReadziLex$M1=$D(1,function(){
 $r(["\x10"]);
},"x16");
var $$TextziReadziLex$N1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DLE");
},"a61");
var $$TextziReadziLex$O1=$F(1,function(Kh){
 var Lh=$t(function(){
  Kh.J($$TextziReadziLex$M1);
 },[Kh],"lvl85");
 var Mh=$f(1,function(Nh){
  $A(Lh);
 },[Lh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$N1,Mh);
},"a62");
var $$TextziReadziLex$P1=$D(1,function(){
 $r(["\x11"]);
},"x17");
var $$TextziReadziLex$Q1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC1");
},"a63");
var $$TextziReadziLex$R1=$F(1,function(Oh){
 var Ph=$t(function(){
  Oh.J($$TextziReadziLex$P1);
 },[Oh],"lvl85");
 var Qh=$f(1,function(Rh){
  $A(Ph);
 },[Ph],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$Q1,Qh);
},"a64");
var $$TextziReadziLex$S1=$D(1,function(){
 $r(["\x12"]);
},"x18");
var $$TextziReadziLex$T1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC2");
},"a65");
var $$TextziReadziLex$U1=$F(1,function(Sh){
 var Th=$t(function(){
  Sh.J($$TextziReadziLex$S1);
 },[Sh],"lvl85");
 var Uh=$f(1,function(Vh){
  $A(Th);
 },[Th],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$T1,Uh);
},"a66");
var $$TextziReadziLex$V1=$D(1,function(){
 $r(["\x13"]);
},"x19");
var $$TextziReadziLex$W1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC3");
},"a67");
var $$TextziReadziLex$X1=$F(1,function(Wh){
 var Xh=$t(function(){
  Wh.J($$TextziReadziLex$V1);
 },[Wh],"lvl85");
 var Yh=$f(1,function(Zh){
  $A(Xh);
 },[Xh],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$W1,Yh);
},"a68");
var $$TextziReadziLex$Y1=$D(1,function(){
 $r(["\x14"]);
},"x20");
var $$TextziReadziLex$Z1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC4");
},"a69");
var $$TextziReadziLex$a2=$F(1,function(ai){
 var bi=$t(function(){
  ai.J($$TextziReadziLex$Y1);
 },[ai],"lvl85");
 var ci=$f(1,function(di){
  $A(bi);
 },[bi],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$Z1,ci);
},"a70");
var $$TextziReadziLex$b2=$D(1,function(){
 $r(["\x15"]);
},"x21");
var $$TextziReadziLex$c2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NAK");
},"a71");
var $$TextziReadziLex$d2=$F(1,function(ei){
 var fi=$t(function(){
  ei.J($$TextziReadziLex$b2);
 },[ei],"lvl85");
 var gi=$f(1,function(hi){
  $A(fi);
 },[fi],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$c2,gi);
},"a72");
var $$TextziReadziLex$e2=$D(1,function(){
 $r(["\x16"]);
},"x22");
var $$TextziReadziLex$f2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SYN");
},"a73");
var $$TextziReadziLex$g2=$F(1,function(ii){
 var ji=$t(function(){
  ii.J($$TextziReadziLex$e2);
 },[ii],"lvl85");
 var ki=$f(1,function(li){
  $A(ji);
 },[ji],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$f2,ki);
},"a74");
var $$TextziReadziLex$h2=$D(1,function(){
 $r(["\x17"]);
},"x23");
var $$TextziReadziLex$i2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ETB");
},"a75");
var $$TextziReadziLex$j2=$F(1,function(mi){
 var ni=$t(function(){
  mi.J($$TextziReadziLex$h2);
 },[mi],"lvl85");
 var oi=$f(1,function(pi){
  $A(ni);
 },[ni],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$i2,oi);
},"a76");
var $$TextziReadziLex$k2=$D(1,function(){
 $r(["\x18"]);
},"x24");
var $$TextziReadziLex$l2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("CAN");
},"a77");
var $$TextziReadziLex$m2=$F(1,function(qi){
 var ri=$t(function(){
  qi.J($$TextziReadziLex$k2);
 },[qi],"lvl85");
 var si=$f(1,function(ti){
  $A(ri);
 },[ri],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$l2,si);
},"a78");
var $$TextziReadziLex$n2=$D(1,function(){
 $r(["\x19"]);
},"x25");
var $$TextziReadziLex$o2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("EM");
},"a79");
var $$TextziReadziLex$p2=$F(1,function(ui){
 var vi=$t(function(){
  ui.J($$TextziReadziLex$n2);
 },[ui],"lvl85");
 var wi=$f(1,function(xi){
  $A(vi);
 },[vi],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$o2,wi);
},"a80");
var $$TextziReadziLex$q2=$D(1,function(){
 $r(["\x1a"]);
},"x26");
var $$TextziReadziLex$r2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SUB");
},"a81");
var $$TextziReadziLex$s2=$F(1,function(yi){
 var zi=$t(function(){
  yi.J($$TextziReadziLex$q2);
 },[yi],"lvl85");
 var Ai=$f(1,function(Bi){
  $A(zi);
 },[zi],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$r2,Ai);
},"a82");
var $$TextziReadziLex$t2=$D(1,function(){
 $r(["\x1b"]);
},"x27");
var $$TextziReadziLex$u2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ESC");
},"a83");
var $$TextziReadziLex$v2=$F(1,function(Ci){
 var Di=$t(function(){
  Ci.J($$TextziReadziLex$t2);
 },[Ci],"lvl85");
 var Ei=$f(1,function(Fi){
  $A(Di);
 },[Di],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$u2,Ei);
},"a84");
var $$TextziReadziLex$w2=$D(1,function(){
 $r(["\x1c"]);
},"x28");
var $$TextziReadziLex$x2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("FS");
},"a85");
var $$TextziReadziLex$y2=$F(1,function(Gi){
 var Hi=$t(function(){
  Gi.J($$TextziReadziLex$w2);
 },[Gi],"lvl85");
 var Ii=$f(1,function(Ji){
  $A(Hi);
 },[Hi],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$x2,Ii);
},"a86");
var $$TextziReadziLex$z2=$D(1,function(){
 $r(["\x1d"]);
},"x29");
var $$TextziReadziLex$A2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GS");
},"a87");
var $$TextziReadziLex$B2=$F(1,function(Ki){
 var Li=$t(function(){
  Ki.J($$TextziReadziLex$z2);
 },[Ki],"lvl85");
 var Mi=$f(1,function(Ni){
  $A(Li);
 },[Li],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$A2,Mi);
},"a88");
var $$TextziReadziLex$C2=$D(1,function(){
 $r(["\x1e"]);
},"x30");
var $$TextziReadziLex$D2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("RS");
},"a89");
var $$TextziReadziLex$E2=$F(1,function(Oi){
 var Pi=$t(function(){
  Oi.J($$TextziReadziLex$C2);
 },[Oi],"lvl85");
 var Qi=$f(1,function(Ri){
  $A(Pi);
 },[Pi],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$D2,Qi);
},"a90");
var $$TextziReadziLex$F2=$D(1,function(){
 $r(["\x1f"]);
},"x31");
var $$TextziReadziLex$G2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("US");
},"a91");
var $$TextziReadziLex$H2=$F(1,function(Si){
 var Ti=$t(function(){
  Si.J($$TextziReadziLex$F2);
 },[Si],"lvl85");
 var Ui=$f(1,function(Vi){
  $A(Ti);
 },[Ti],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$G2,Ui);
},"a92");
var $$TextziReadziLex$I2=$D(1,function(){
 $r([" "]);
},"x32");
var $$TextziReadziLex$J2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SP");
},"a93");
var $$TextziReadziLex$K2=$F(1,function(Wi){
 var Xi=$t(function(){
  Wi.J($$TextziReadziLex$I2);
 },[Wi],"lvl85");
 var Yi=$f(1,function(Zi){
  $A(Xi);
 },[Xi],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$J2,Yi);
},"a94");
var $$TextziReadziLex$L2=$D(1,function(){
 $r(["\x7f"]);
},"x33");
var $$TextziReadziLex$M2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DEL");
},"a95");
var $$TextziReadziLex$N2=$F(1,function(aj){
 var bj=$t(function(){
  aj.J($$TextziReadziLex$L2);
 },[aj],"lvl85");
 var cj=$f(1,function(dj){
  $A(bj);
 },[bj],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$M2,cj);
},"a96");
var $$TextziReadziLex$O2=$D(2,function(){
 $r([$$TextziReadziLex$N2,$$GHCziTypes_ZMZN]);
},"lvl9");
var $$TextziReadziLex$P2=$D(2,function(){
 $r([$$TextziReadziLex$K2,$$TextziReadziLex$O2]);
},"lvl10");
var $$TextziReadziLex$Q2=$D(2,function(){
 $r([$$TextziReadziLex$H2,$$TextziReadziLex$P2]);
},"lvl11");
var $$TextziReadziLex$R2=$D(2,function(){
 $r([$$TextziReadziLex$E2,$$TextziReadziLex$Q2]);
},"lvl12");
var $$TextziReadziLex$S2=$D(2,function(){
 $r([$$TextziReadziLex$B2,$$TextziReadziLex$R2]);
},"lvl13");
var $$TextziReadziLex$T2=$D(2,function(){
 $r([$$TextziReadziLex$y2,$$TextziReadziLex$S2]);
},"lvl14");
var $$TextziReadziLex$U2=$D(2,function(){
 $r([$$TextziReadziLex$v2,$$TextziReadziLex$T2]);
},"lvl15");
var $$TextziReadziLex$V2=$D(2,function(){
 $r([$$TextziReadziLex$s2,$$TextziReadziLex$U2]);
},"lvl16");
var $$TextziReadziLex$W2=$D(2,function(){
 $r([$$TextziReadziLex$p2,$$TextziReadziLex$V2]);
},"lvl17");
var $$TextziReadziLex$X2=$D(2,function(){
 $r([$$TextziReadziLex$m2,$$TextziReadziLex$W2]);
},"lvl18");
var $$TextziReadziLex$Y2=$D(2,function(){
 $r([$$TextziReadziLex$j2,$$TextziReadziLex$X2]);
},"lvl19");
var $$TextziReadziLex$Z2=$D(2,function(){
 $r([$$TextziReadziLex$g2,$$TextziReadziLex$Y2]);
},"lvl20");
var $$TextziReadziLex$a3=$D(2,function(){
 $r([$$TextziReadziLex$d2,$$TextziReadziLex$Z2]);
},"lvl21");
var $$TextziReadziLex$b3=$D(2,function(){
 $r([$$TextziReadziLex$a2,$$TextziReadziLex$a3]);
},"lvl22");
var $$TextziReadziLex$c3=$D(2,function(){
 $r([$$TextziReadziLex$X1,$$TextziReadziLex$b3]);
},"lvl23");
var $$TextziReadziLex$d3=$D(2,function(){
 $r([$$TextziReadziLex$U1,$$TextziReadziLex$c3]);
},"lvl24");
var $$TextziReadziLex$e3=$D(2,function(){
 $r([$$TextziReadziLex$R1,$$TextziReadziLex$d3]);
},"lvl25");
var $$TextziReadziLex$f3=$D(2,function(){
 $r([$$TextziReadziLex$O1,$$TextziReadziLex$e3]);
},"lvl26");
var $$TextziReadziLex$g3=$D(2,function(){
 $r([$$TextziReadziLex$L1,$$TextziReadziLex$f3]);
},"lvl27");
var $$TextziReadziLex$h3=$D(2,function(){
 $r([$$TextziReadziLex$I1,$$TextziReadziLex$g3]);
},"lvl28");
var $$TextziReadziLex$i3=$D(2,function(){
 $r([$$TextziReadziLex$F1,$$TextziReadziLex$h3]);
},"lvl29");
var $$TextziReadziLex$j3=$D(2,function(){
 $r([$$TextziReadziLex$C1,$$TextziReadziLex$i3]);
},"lvl30");
var $$TextziReadziLex$k3=$D(2,function(){
 $r([$$TextziReadziLex$z1,$$TextziReadziLex$j3]);
},"lvl31");
var $$TextziReadziLex$l3=$D(2,function(){
 $r([$$TextziReadziLex$w1,$$TextziReadziLex$k3]);
},"lvl32");
var $$TextziReadziLex$m3=$D(2,function(){
 $r([$$TextziReadziLex$t1,$$TextziReadziLex$l3]);
},"lvl33");
var $$TextziReadziLex$n3=$D(2,function(){
 $r([$$TextziReadziLex$q1,$$TextziReadziLex$m3]);
},"lvl34");
var $$TextziReadziLex$o3=$D(2,function(){
 $r([$$TextziReadziLex$n1,$$TextziReadziLex$n3]);
},"lvl35");
var $$TextziReadziLex$p3=$D(2,function(){
 $r([$$TextziReadziLex$k1,$$TextziReadziLex$o3]);
},"lvl36");
var $$TextziReadziLex$q3=$D(2,function(){
 $r([$$TextziReadziLex$h1,$$TextziReadziLex$p3]);
},"lvl37");
var $$TextziReadziLex$r3=$D(2,function(){
 $r([$$TextziReadziLex$e1,$$TextziReadziLex$q3]);
},"lvl38");
var $$TextziReadziLex$s3=$D(2,function(){
 $r([$$TextziReadziLex$b1,$$TextziReadziLex$r3]);
},"lvl39");
var $$TextziReadziLex$t3=$T(function(){
 $$TextziParserCombinatorsziReadP_choicezuzdschoice.J($$TextziReadziLex$Y,$$TextziReadziLex$s3);
},"ds2");
var $$TextziReadziLex$u3=$F(1,function(ej){
 ej.J($$TextziReadziLex$O);
},"a97");
var $$TextziReadziLex$v3=$D(1,function(){
 $r([goog.math.Long.fromBits(1114111,0)]);
},"lvl40");
var $$TextziReadziLex$w3=$D(1,function(){
 $r(["\""]);
},"lvl41");
var $$TextziReadziLex$x3=$D(1,function(){
 $r(["'"]);
},"lvl42");
var $$TextziReadziLex$y3=$D(1,function(){
 $r([$$TextziReadziLex$w3,$$GHCziTypes_True]);
},"lvl43");
var $$TextziReadziLex$z3=$D(1,function(){
 $r([$$TextziReadziLex$x3,$$GHCziTypes_True]);
},"lvl44");
var $$TextziReadziLex$A3=$D(1,function(){
 $r([$$TextziReadziLex$k,$$GHCziTypes_True]);
},"lvl45");
var $$TextziReadziLex$B3=$D(1,function(){
 $r([$$TextziReadziLex$o1,$$GHCziTypes_True]);
},"lvl46");
var $$TextziReadziLex$C3=$D(1,function(){
 $r([$$TextziReadziLex$r1,$$GHCziTypes_True]);
},"lvl47");
var $$TextziReadziLex$D3=$D(1,function(){
 $r([$$TextziReadziLex$D1,$$GHCziTypes_True]);
},"lvl48");
var $$TextziReadziLex$E3=$D(1,function(){
 $r([$$TextziReadziLex$x1,$$GHCziTypes_True]);
},"lvl49");
var $$TextziReadziLex$F3=$D(1,function(){
 $r([$$TextziReadziLex$G1,$$GHCziTypes_True]);
},"lvl50");
var $$TextziReadziLex$G3=$D(1,function(){
 $r([$$TextziReadziLex$u1,$$GHCziTypes_True]);
},"lvl51");
var $$TextziReadziLex$H3=$D(1,function(){
 $r([$$TextziReadziLex$A1,$$GHCziTypes_True]);
},"lvl52");
var $$TextziReadziLex$I3=$D(1,function(){
 $r([$$TextziReadziLex$W,$$GHCziTypes_True]);
},"lvl53");
var $$TextziReadziLex$J3=$D(1,function(){
 $r([$$TextziReadziLex$Q,$$GHCziTypes_True]);
},"lvl54");
var $$TextziReadziLex$K3=$D(1,function(){
 $r([$$TextziReadziLex$Z,$$GHCziTypes_True]);
},"lvl55");
var $$TextziReadziLex$L3=$D(1,function(){
 $r([$$TextziReadziLex$c1,$$GHCziTypes_True]);
},"lvl56");
var $$TextziReadziLex$M3=$D(1,function(){
 $r([$$TextziReadziLex$f1,$$GHCziTypes_True]);
},"lvl57");
var $$TextziReadziLex$N3=$D(1,function(){
 $r([$$TextziReadziLex$i1,$$GHCziTypes_True]);
},"lvl58");
var $$TextziReadziLex$O3=$D(1,function(){
 $r([$$TextziReadziLex$l1,$$GHCziTypes_True]);
},"lvl59");
var $$TextziReadziLex$P3=$D(1,function(){
 $r([$$TextziReadziLex$o1,$$GHCziTypes_True]);
},"lvl60");
var $$TextziReadziLex$Q3=$D(1,function(){
 $r([$$TextziReadziLex$r1,$$GHCziTypes_True]);
},"lvl61");
var $$TextziReadziLex$R3=$D(1,function(){
 $r([$$TextziReadziLex$u1,$$GHCziTypes_True]);
},"lvl62");
var $$TextziReadziLex$S3=$D(1,function(){
 $r([$$TextziReadziLex$x1,$$GHCziTypes_True]);
},"lvl63");
var $$TextziReadziLex$T3=$D(1,function(){
 $r([$$TextziReadziLex$A1,$$GHCziTypes_True]);
},"lvl64");
var $$TextziReadziLex$U3=$D(1,function(){
 $r([$$TextziReadziLex$D1,$$GHCziTypes_True]);
},"lvl65");
var $$TextziReadziLex$V3=$D(1,function(){
 $r([$$TextziReadziLex$G1,$$GHCziTypes_True]);
},"lvl66");
var $$TextziReadziLex$W3=$D(1,function(){
 $r([$$TextziReadziLex$T,$$GHCziTypes_True]);
},"lvl67");
var $$TextziReadziLex$X3=$D(1,function(){
 $r([$$TextziReadziLex$J1,$$GHCziTypes_True]);
},"lvl68");
var $$TextziReadziLex$Y3=$D(1,function(){
 $r([$$TextziReadziLex$M1,$$GHCziTypes_True]);
},"lvl69");
var $$TextziReadziLex$Z3=$D(1,function(){
 $r([$$TextziReadziLex$P1,$$GHCziTypes_True]);
},"lvl70");
var $$TextziReadziLex$a4=$D(1,function(){
 $r([$$TextziReadziLex$S1,$$GHCziTypes_True]);
},"lvl71");
var $$TextziReadziLex$b4=$D(1,function(){
 $r([$$TextziReadziLex$V1,$$GHCziTypes_True]);
},"lvl72");
var $$TextziReadziLex$c4=$D(1,function(){
 $r([$$TextziReadziLex$Y1,$$GHCziTypes_True]);
},"lvl73");
var $$TextziReadziLex$d4=$D(1,function(){
 $r([$$TextziReadziLex$b2,$$GHCziTypes_True]);
},"lvl74");
var $$TextziReadziLex$e4=$D(1,function(){
 $r([$$TextziReadziLex$e2,$$GHCziTypes_True]);
},"lvl75");
var $$TextziReadziLex$f4=$D(1,function(){
 $r([$$TextziReadziLex$h2,$$GHCziTypes_True]);
},"lvl76");
var $$TextziReadziLex$g4=$D(1,function(){
 $r([$$TextziReadziLex$k2,$$GHCziTypes_True]);
},"lvl77");
var $$TextziReadziLex$h4=$D(1,function(){
 $r([$$TextziReadziLex$n2,$$GHCziTypes_True]);
},"lvl78");
var $$TextziReadziLex$i4=$D(1,function(){
 $r([$$TextziReadziLex$q2,$$GHCziTypes_True]);
},"lvl79");
var $$TextziReadziLex$j4=$D(1,function(){
 $r([$$TextziReadziLex$t2,$$GHCziTypes_True]);
},"lvl80");
var $$TextziReadziLex$k4=$D(1,function(){
 $r([$$TextziReadziLex$w2,$$GHCziTypes_True]);
},"lvl81");
var $$TextziReadziLex$l4=$D(1,function(){
 $r([$$TextziReadziLex$z2,$$GHCziTypes_True]);
},"lvl82");
var $$TextziReadziLex$m4=$D(1,function(){
 $r([$$TextziReadziLex$C2,$$GHCziTypes_True]);
},"lvl83");
var $$TextziReadziLex$n4=$D(1,function(){
 $r([$$TextziReadziLex$F2,$$GHCziTypes_True]);
},"lvl84");
var $$TextziReadziLex$o4=$F(1,function(fj){
 var gj=$t(function(){
  $$TextziReadziLex_lexChar2.J(fj);
 },[fj],"lvl85");
 var hj=$t(function(){
  $$TextziReadziLex$o4.J(fj);
 },[fj],"lvl86");
 var ij=$f(1,function(jj){
  $M(jj,function(kj){
   var lj=kj.v[0];
   $M(lj,function(mj){
    switch(mj.toString()){
    case "\\":
     $A(hj);break;
    default:
     $R(3,[],"Fail");
    }
   },[hj]);
  },[hj]);
 },[hj],"a104");
 var nj=$d(1,[ij],"lvl87");
 var oj=$f(1,function(pj){
  $A(nj);
 },[nj],"k1");
 var qj=$f(1,function(rj){
  $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(rj,oj);
 },[oj],"a105");
 var sj=$d(2,[qj],"lvl88");
 var tj=$f(1,function(uj){
  $M(uj,function(vj){
   var wj=vj.v[0];
   $M(wj,function(xj){
    switch(xj.toString()){
    case "&":
     $A(hj);break;
    default:
     $$GHCziUnicode_isSpace.C([vj],function(yj){
      switch(yj.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(sj);break;
      }
     },[sj]);
    }
   },[hj,sj,vj]);
  },[hj,sj]);
 },[hj,sj],"a106");
 var zj=$d(1,[tj],"lvl89");
 var Aj=$f(1,function(Bj){
  $M(Bj,function(Cj){
   var Dj=Cj.v[0];
   $M(Dj,function(Ej){
    switch(Ej.toString()){
    case "\\":
     $A(gj);break;
    default:
     var Fj=$d(1,[Cj,$$GHCziTypes_False],"sat");
     fj.J(Fj);
    }
   },[fj,gj,Cj]);
  },[fj,gj]);
 },[fj,gj],"sat");
 var Gj=$f(1,function(Hj){
  $M(Hj,function(Ij){
   var Jj=Ij.v[0];
   $M(Jj,function(Kj){
    switch(Kj.toString()){
    case "\\":
     $A(zj);break;
    default:
     $R(3,[],"Fail");
    }
   },[zj]);
  },[zj]);
 },[zj],"sat");
 var Lj=$d(1,[Gj],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(Lj,Aj);
},"a98");
var $$TextziReadziLex$p4=$F(2,function(Mj,Nj){
 var Oj=$t(function(){
  var Pj=$t(function(){
   Mj.J($$GHCziTypes_ZMZN);
  },[Mj],"sat");
  var Qj=$d(2,[Pj],"sat");
  Nj.J(Qj);
 },[Mj,Nj],"lvl85");
 var Rj=$f(1,function(Sj){
  $M(Sj,function(Tj){
   var Uj=Tj.v[0],Vj=Tj.v[1];
   $M(Uj,function(Wj){
    var Xj=Wj.v[0];
    $M(Xj,function(Yj){
     switch(Yj.toString()){
     case "\"":
      $M(Vj,function(ck){
       switch(ck.g){
       case 1:
	$A(Oj);break;
       case 2:
	var dk=$f(1,function(ek){
	 var fk=$d(2,[Wj,ek],"sat");
	 Mj.J(fk);
	},[Mj,Wj],"sat");
	$$TextziReadziLex$p4.J(dk,Nj);break;
       }
      },[Mj,Nj,Oj,Wj]);break;
     default:
      var Zj=$f(1,function(ak){
       var bk=$d(2,[Wj,ak],"sat");
       Mj.J(bk);
      },[Mj,Wj],"sat");
      $$TextziReadziLex$p4.J(Zj,Nj);
     }
    },[Mj,Nj,Oj,Wj,Vj]);
   },[Mj,Nj,Oj,Vj]);
  },[Mj,Nj,Oj]);
 },[Mj,Nj,Oj],"sat");
 $$TextziReadziLex$o4.J(Rj);
},"a99");
var $$TextziReadziLex$q4=$F(1,function(gk){
 var hk=$t(function(){
  var ik=$t(function(){
   var jk=$f(1,function(kk){
    var lk=$t(function(){
     $$TextziReadziLex_numberToIntegerzuzdsval.J($$TextziReadziLex_numberToInteger1,$$TextziReadziLex_numberToInteger2,kk);
    },[kk],"sat");
    var mk=$d(2,[lk],"sat");
    gk.J(mk);
   },[gk],"sat");
   $$TextziReadziLex$M.J($$TextziReadziLex$O,jk);
  },[gk],"sat");
  var nk=$f(1,function(ok){
   $M(ok,function(pk){
    var qk=pk.v[0];
    $M(qk,function(rk){
     switch(rk.toString()){
     case "+":
      var sk=$f(1,function(tk){
       var uk=$t(function(){
	$$TextziReadziLex_numberToIntegerzuzdsval.J($$TextziReadziLex_numberToInteger1,$$TextziReadziLex_numberToInteger2,tk);
       },[tk],"sat");
       var vk=$d(2,[uk],"sat");
       gk.J(vk);
      },[gk],"sat");
      $$TextziReadziLex$M.J($$TextziReadziLex$O,sk);break;
     default:
      $R(3,[],"Fail");
     }
    },[gk]);
   },[gk]);
  },[gk],"sat");
  var wk=$f(1,function(xk){
   $M(xk,function(yk){
    var zk=yk.v[0];
    $M(zk,function(Ak){
     switch(Ak.toString()){
     case "-":
      var Bk=$f(1,function(Ck){
       var Dk=$t(function(){
	$$TextziReadziLex_numberToIntegerzuzdsval.C([$$TextziReadziLex_numberToInteger1,$$TextziReadziLex_numberToInteger2,Ck],function(Ek){
	 $$GHCziIntegerziType_negateInteger.J(Ek);
	},[]);
       },[Ck],"sat");
       var Fk=$d(2,[Dk],"sat");
       gk.J(Fk);
      },[gk],"sat");
      $$TextziReadziLex$M.J($$TextziReadziLex$O,Bk);break;
     default:
      $R(3,[],"Fail");
     }
    },[gk]);
   },[gk]);
  },[gk],"sat");
  var Gk=$d(1,[wk],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.C([Gk,nk],function(Hk){
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Hk,ik);
  },[ik]);
 },[gk],"lvl85");
 var Ik=$f(1,function(Jk){
  $M(Jk,function(Kk){
   var Lk=Kk.v[0];
   $M(Lk,function(Mk){
    switch(Mk.toString()){
    case "E":
     $A(hk);break;
    default:
     $R(3,[],"Fail");
    }
   },[hk]);
  },[hk]);
 },[hk],"sat");
 var Nk=$f(1,function(Ok){
  $M(Ok,function(Pk){
   var Qk=Pk.v[0];
   $M(Qk,function(Rk){
    switch(Rk.toString()){
    case "e":
     $A(hk);break;
    default:
     $R(3,[],"Fail");
    }
   },[hk]);
  },[hk]);
 },[hk],"sat");
 var Sk=$d(1,[Nk],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(Sk,Ik);
},"a100");
var $$TextziReadziLex$r4=$F(1,function(Tk){
 Tk.J($$DataziMaybe_Nothing);
},"a101");
var $$TextziReadziLex$s4=$F(1,function(Uk){
 Uk.J($$DataziMaybe_Nothing);
},"a102");
var $$TextziReadziLex$t4=$F(1,function(Vk){
 var Wk=$f(1,function(Xk){
  var Yk=$f(1,function(Zk){
   var al=$f(1,function(bl){
    var cl=$d(2,[Xk,Zk,bl],"sat");
    var dl=$d(6,[cl],"sat");
    Vk.J(dl);
   },[Xk,Zk,Vk],"sat");
   $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$q4,$$TextziReadziLex$s4,al);
  },[Xk,Vk],"sat");
  $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$P,$$TextziReadziLex$r4,Yk);
 },[Vk],"sat");
 $$TextziReadziLex$M.J($$TextziReadziLex$O,Wk);
},"a103");
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
var $$GHCziClasses_zdfEqZMZNzuzdczeze=$f(3,function(q4,r4,s4){
 $M(r4,function(t4){
  switch(t4.g){
  case 1:
   $M(s4,function(u4){
    switch(u4.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   var v4=t4.v[0],w4=t4.v[1];
   $M(s4,function(x4){
    switch(x4.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var y4=x4.v[0],z4=x4.v[1];
     $$GHCziClasses_zeze.C([q4,v4,y4],function(A4){
      switch(A4.g){
      case 1:
       $R(1,[],"False");break;
      case 2:
       $$GHCziClasses_zdfEqZMZNzuzdczeze.J(q4,w4,z4);break;
      }
     },[q4,w4,z4]);break;
    }
   },[q4,v4,w4]);break;
  }
 },[s4,q4]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:44:5");
var $$GHCziClasses_zdfEqZMZNzuzdczsze=$f(3,function(B4,C4,D4){
 $$GHCziClasses_zdfEqZMZNzuzdczeze.C([B4,C4,D4],function(E4){
  switch(E4.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   $R(1,[],"False");break;
  }
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:44:11");
var $$GHCziClasses_zdfEqZMZN=$f(1,function(F4){
 var G4=$f(2,function(H4,I4){
  $$GHCziClasses_zdfEqZMZNzuzdczsze.J(F4,H4,I4);
 },[F4],"sat");
 var J4=$f(2,function(H4,I4){
  $$GHCziClasses_zdfEqZMZNzuzdczeze.J(F4,H4,I4);
 },[F4],"sat");
 $R(1,[J4,G4],"D:Eq");
},[],"at libraries/ghc-prim/GHC/Classes.hs:85:10");
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
var $$GHCziIntegerziType_decodeDoubleInteger=$f(1,function(Z2){
 var a3=integer_cmm_decodeDoublezh(Z2);
 var b3=a3[0],c3=a3[1],d3=a3[2];
 var e3=$d(2,[c3,d3],"sat");
 $r([e3,b3]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:490:1");
var $$GHCziIntegerziType_shiftLInteger=$f(2,function(w3,x3){
 $M(w3,function(y3){
  switch(y3.g){
  case 1:
   var z3=y3.v[0];
   var A3=integer_cmm_int2Integerzh(z3);
   var B3=A3[0],C3=A3[1];
   var D3=$d(2,[B3,C3],"sat");
   $$GHCziIntegerziType_shiftLInteger.J(D3,x3);break;
  case 2:
   var E3=y3.v[0],F3=y3.v[1];
   var G3=integer_cmm_mul2ExpIntegerzh(E3,F3,x3);
   var H3=G3[0],I3=G3[1];
   $R(2,[H3,I3],"J#");break;
  }
 },[x3]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:567:1");
var $$GHCziIntegerziType_orInteger=$f(2,function(v4,w4){
 $M(v4,function(x4){
  switch(x4.g){
  case 1:
   var y4=x4.v[0];
   $M(w4,function(z4){
    switch(z4.g){
    case 1:
     var A4=z4.v[0];
     var E4=$hs_int2Wordzh(A4);
     var D4=$hs_int2Wordzh(y4);
     var C4=D4.or(E4);
     var B4=$hs_word2Intzh(C4);
     $R(1,[B4],"S#");break;
    case 2:
     var F4=integer_cmm_int2Integerzh(y4);
     var G4=F4[0],H4=F4[1];
     var I4=$d(2,[G4,H4],"sat");
     $$GHCziIntegerziType_orInteger.J(I4,z4);break;
    }
   },[y4]);break;
  case 2:
   var J4=x4.v[0],K4=x4.v[1];
   $M(w4,function(L4){
    switch(L4.g){
    case 1:
     var M4=L4.v[0];
     var N4=integer_cmm_int2Integerzh(M4);
     var O4=N4[0],P4=N4[1];
     var Q4=$d(2,[O4,P4],"sat");
     $$GHCziIntegerziType_orInteger.J(x4,Q4);break;
    case 2:
     var R4=L4.v[0],S4=L4.v[1];
     var T4=integer_cmm_orIntegerzh(J4,K4,R4,S4);
     var U4=T4[0],V4=T4[1];
     $R(2,[U4,V4],"J#");break;
    }
   },[x4,J4,K4]);break;
  }
 },[w4]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:542:8");
var $$GHCziIntegerziType_floatFromInteger=$f(1,function(Q5){
 $M(Q5,function(R5){
  switch(R5.g){
  case 1:
   var S5=R5.v[0];
   $r($hs_int2Floatzh(S5));break;
  case 2:
   var T5=R5.v[0],U5=R5.v[1];
   var $ff=integer_cbits_encodeFloat(T5,U5,goog.math.Long.fromBits(0,0));
   var V5=[$$GHCziPrim_realWorldzh,$ff];
   var W5=V5[1];
   $A(W5);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:506:1");
var $$GHCziIntegerziType_quotInteger=$f(2,function(G6,H6){
 $M(G6,function(I6){
  switch(I6.g){
  case 1:
   var J6=I6.v[0];
   $M(J6,function(K6){
    switch(K6.toString()){
    case "-9223372036854775808":
     var S6=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
     var T6=S6[0],U6=S6[1];
     var V6=$d(2,[T6,U6],"sat");
     $$GHCziIntegerziType_quotInteger.J(V6,H6);break;
    default:
     $M(H6,function(L6){
      switch(L6.g){
      case 1:
       var M6=L6.v[0];
       var N6=$hs_quotIntzh(K6,M6);
       $R(1,[N6],"S#");break;
      case 2:
       var O6=integer_cmm_int2Integerzh(K6);
       var P6=O6[0],Q6=O6[1];
       var R6=$d(2,[P6,Q6],"sat");
       $$GHCziIntegerziType_quotInteger.J(R6,L6);break;
      }
     },[K6]);
    }
   },[H6]);break;
  case 2:
   var W6=I6.v[0],X6=I6.v[1];
   $M(H6,function(Y6){
    switch(Y6.g){
    case 1:
     var Z6=Y6.v[0];
     var a7=integer_cmm_int2Integerzh(Z6);
     var b7=a7[0],c7=a7[1];
     var d7=integer_cmm_quotIntegerzh(W6,X6,b7,c7);
     var e7=d7[0],f7=d7[1];
     $R(2,[e7,f7],"J#");break;
    case 2:
     var g7=Y6.v[0],h7=Y6.v[1];
     var i7=integer_cmm_quotIntegerzh(W6,X6,g7,h7);
     var j7=i7[0],k7=i7[1];
     $R(2,[j7,k7],"J#");break;
    }
   },[W6,X6]);break;
  }
 },[H6]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:217:1");
var $$GHCziIntegerziType_quotRemInteger=$f(2,function(V7,W7){
 $M(V7,function(X7){
  switch(X7.g){
  case 1:
   var Y7=X7.v[0];
   $M(Y7,function(Z7){
    switch(Z7.toString()){
    case "-9223372036854775808":
     var k8=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
     var l8=k8[0],m8=k8[1];
     var n8=$d(2,[l8,m8],"sat");
     $$GHCziIntegerziType_quotRemInteger.J(n8,W7);break;
    default:
     $M(W7,function(a8){
      switch(a8.g){
      case 1:
       var b8=a8.v[0];
       var d8=$hs_remIntzh(Z7,b8);
       var f8=$hs_quotIntzh(Z7,b8);
       var c8=$d(1,[d8],"sat");
       var e8=$d(1,[f8],"sat");
       $r([e8,c8]);break;
      case 2:
       var g8=integer_cmm_int2Integerzh(Z7);
       var h8=g8[0],i8=g8[1];
       var j8=$d(2,[h8,i8],"sat");
       $$GHCziIntegerziType_quotRemInteger.J(j8,a8);break;
      }
     },[Z7]);
    }
   },[W7]);break;
  case 2:
   var o8=X7.v[0],p8=X7.v[1];
   $M(W7,function(q8){
    switch(q8.g){
    case 1:
     var r8=q8.v[0];
     var s8=integer_cmm_int2Integerzh(r8);
     var t8=s8[0],u8=s8[1];
     var v8=$d(2,[t8,u8],"sat");
     $$GHCziIntegerziType_quotRemInteger.J(X7,v8);break;
    case 2:
     var w8=q8.v[0],x8=q8.v[1];
     var y8=integer_cmm_quotRemIntegerzh(o8,p8,w8,x8);
     var z8=y8[0],A8=y8[1],B8=y8[2],C8=y8[3];
     var D8=$d(2,[B8,C8],"sat");
     var E8=$d(2,[z8,A8],"sat");
     $r([E8,D8]);break;
    }
   },[X7,o8,p8]);break;
  }
 },[W7]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:163:1");
var $$GHCziIntegerziType_ltInteger=$f(2,function(v9,w9){
 $M(v9,function(x9){
  switch(x9.g){
  case 1:
   var y9=x9.v[0];
   $M(w9,function(z9){
    switch(z9.g){
    case 1:
     var A9=z9.v[0];
     $r(y9.lessThan(A9)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var B9=z9.v[0],C9=z9.v[1];
     var D9=integer_cmm_cmpIntegerIntzh(B9,C9,y9);
     $r(D9.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[y9]);break;
  case 2:
   var E9=x9.v[0],F9=x9.v[1];
   $M(w9,function(G9){
    switch(G9.g){
    case 1:
     var H9=G9.v[0];
     var I9=integer_cmm_cmpIntegerIntzh(E9,F9,H9);
     $r(I9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var J9=G9.v[0],K9=G9.v[1];
     var L9=integer_cmm_cmpIntegerzh(E9,F9,J9,K9);
     $r(L9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[E9,F9]);break;
  }
 },[w9]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:360:1");
var $$GHCziIntegerziType_gtInteger=$f(2,function(M9,N9){
 $M(M9,function(O9){
  switch(O9.g){
  case 1:
   var P9=O9.v[0];
   $M(N9,function(Q9){
    switch(Q9.g){
    case 1:
     var R9=Q9.v[0];
     $r(P9.greaterThan(R9)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var S9=Q9.v[0],T9=Q9.v[1];
     var U9=integer_cmm_cmpIntegerIntzh(S9,T9,P9);
     $r(U9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[P9]);break;
  case 2:
   var V9=O9.v[0],W9=O9.v[1];
   $M(N9,function(X9){
    switch(X9.g){
    case 1:
     var Y9=X9.v[0];
     var Z9=integer_cmm_cmpIntegerIntzh(V9,W9,Y9);
     $r(Z9.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var aa=X9.v[0],ba=X9.v[1];
     var ca=integer_cmm_cmpIntegerzh(V9,W9,aa,ba);
     $r(ca.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[V9,W9]);break;
  }
 },[N9]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:353:1");
var $$GHCziIntegerziType_leInteger=$f(2,function(da,ea){
 $M(da,function(fa){
  switch(fa.g){
  case 1:
   var ga=fa.v[0];
   $M(ea,function(ha){
    switch(ha.g){
    case 1:
     var ia=ha.v[0];
     $r(ga.lessThanOrEqual(ia)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var ja=ha.v[0],ka=ha.v[1];
     var la=integer_cmm_cmpIntegerIntzh(ja,ka,ga);
     $r(la.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[ga]);break;
  case 2:
   var ma=fa.v[0],na=fa.v[1];
   $M(ea,function(oa){
    switch(oa.g){
    case 1:
     var pa=oa.v[0];
     var qa=integer_cmm_cmpIntegerIntzh(ma,na,pa);
     $r(qa.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var ra=oa.v[0],sa=oa.v[1];
     var ta=integer_cmm_cmpIntegerzh(ma,na,ra,sa);
     $r(ta.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[ma,na]);break;
  }
 },[ea]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:346:1");
var $$GHCziIntegerziType_eqInteger=$f(2,function(Va,Wa){
 $M(Va,function(Xa){
  switch(Xa.g){
  case 1:
   var Ya=Xa.v[0];
   $M(Wa,function(Za){
    switch(Za.g){
    case 1:
     var ab=Za.v[0];
     $r(Ya.equals(ab)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var bb=Za.v[0],cb=Za.v[1];
     var db=integer_cmm_cmpIntegerIntzh(bb,cb,Ya);
     switch(db.toString()){
     case "0":
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    }
   },[Ya]);break;
  case 2:
   var eb=Xa.v[0],fb=Xa.v[1];
   $M(Wa,function(gb){
    switch(gb.g){
    case 1:
     var hb=gb.v[0];
     var ib=integer_cmm_cmpIntegerIntzh(eb,fb,hb);
     switch(ib.toString()){
     case "0":
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    case 2:
     var jb=gb.v[0],kb=gb.v[1];
     var lb=integer_cmm_cmpIntegerzh(eb,fb,jb,kb);
     switch(lb.toString()){
     case "0":
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    }
   },[eb,fb]);break;
  }
 },[Wa]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:326:1");
var $$GHCziIntegerziType_timesInteger=$f(2,function(bc,cc){
 $M(bc,function(dc){
  switch(dc.g){
  case 1:
   var ec=dc.v[0];
   $M(cc,function(fc){
    switch(fc.g){
    case 1:
     var gc=fc.v[0];
     var hc=$hs_mulIntMayOflozh(ec,gc);
     switch(hc.toString()){
     case "0":
      var qc=ec.multiply(gc);
      $R(1,[qc],"S#");break;
     default:
      var ic=integer_cmm_int2Integerzh(ec);
      var jc=ic[0],kc=ic[1];
      var lc=integer_cmm_int2Integerzh(gc);
      var mc=lc[0],nc=lc[1];
      var oc=$d(2,[mc,nc],"sat");
      var pc=$d(2,[jc,kc],"sat");
      $$GHCziIntegerziType_timesInteger.J(pc,oc);
     }break;
    case 2:
     var rc=integer_cmm_int2Integerzh(ec);
     var sc=rc[0],tc=rc[1];
     var uc=$d(2,[sc,tc],"sat");
     $$GHCziIntegerziType_timesInteger.J(uc,fc);break;
    }
   },[ec]);break;
  case 2:
   var vc=dc.v[0],wc=dc.v[1];
   $M(cc,function(xc){
    switch(xc.g){
    case 1:
     var yc=xc.v[0];
     var zc=integer_cmm_int2Integerzh(yc);
     var Ac=zc[0],Bc=zc[1];
     var Cc=$d(2,[Ac,Bc],"sat");
     $$GHCziIntegerziType_timesInteger.J(dc,Cc);break;
    case 2:
     var Dc=xc.v[0],Ec=xc.v[1];
     var Fc=integer_cmm_timesIntegerzh(vc,wc,Dc,Ec);
     var Gc=Fc[0],Hc=Fc[1];
     $R(2,[Gc,Hc],"J#");break;
    }
   },[dc,vc,wc]);break;
  }
 },[cc]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:455:1");
var $$GHCziIntegerziType_plusInteger=$f(2,function(Ic,Jc){
 $M(Ic,function(Kc){
  switch(Kc.g){
  case 1:
   var Lc=Kc.v[0];
   $M(Jc,function(Mc){
    switch(Mc.g){
    case 1:
     var Nc=Mc.v[0];
     var Oc=$hs_addIntCzh(Lc,Nc);
     var Pc=Oc[0],Qc=Oc[1];
     $M(Qc,function(Rc){
      switch(Rc.toString()){
      case "0":
       $R(1,[Pc],"S#");break;
      default:
       var Sc=integer_cmm_int2Integerzh(Lc);
       var Tc=Sc[0],Uc=Sc[1];
       var Vc=integer_cmm_int2Integerzh(Nc);
       var Wc=Vc[0],Xc=Vc[1];
       var Yc=$d(2,[Wc,Xc],"sat");
       var Zc=$d(2,[Tc,Uc],"sat");
       $$GHCziIntegerziType_plusInteger.J(Zc,Yc);
      }
     },[Lc,Nc,Pc]);break;
    case 2:
     var ad=integer_cmm_int2Integerzh(Lc);
     var bd=ad[0],cd=ad[1];
     var dd=$d(2,[bd,cd],"sat");
     $$GHCziIntegerziType_plusInteger.J(dd,Mc);break;
    }
   },[Lc]);break;
  case 2:
   var ed=Kc.v[0],fd=Kc.v[1];
   $M(Jc,function(gd){
    switch(gd.g){
    case 1:
     var hd=gd.v[0];
     var id=integer_cmm_int2Integerzh(hd);
     var jd=id[0],kd=id[1];
     var ld=$d(2,[jd,kd],"sat");
     $$GHCziIntegerziType_plusInteger.J(Kc,ld);break;
    case 2:
     var md=gd.v[0],nd=gd.v[1];
     var od=integer_cmm_plusIntegerzh(ed,fd,md,nd);
     var pd=od[0],qd=od[1];
     $R(2,[pd,qd],"J#");break;
    }
   },[Kc,ed,fd]);break;
  }
 },[Jc]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:431:1");
var $$GHCziIntegerziType_negateInteger=$f(1,function(rd){
 $M(rd,function(sd){
  switch(sd.g){
  case 1:
   var td=sd.v[0];
   $M(td,function(ud){
    switch(ud.toString()){
    case "-9223372036854775808":
     $A($$GHCziIntegerziType$e);break;
    default:
     var vd=ud.negate();
     $R(1,[vd],"S#");
    }
   },[]);break;
  case 2:
   var wd=sd.v[0],xd=sd.v[1];
   var yd=wd.negate();
   $R(2,[yd,xd],"J#");break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:465:1");
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
var $$GHCziIntegerziType_mkIntegerzuf=$f(1,function(We){
 $M(We,function(Xe){
  switch(Xe.g){
  case 1:
   $A($$GHCziIntegerziType$a);break;
  case 2:
   var Ye=Xe.v[0],Ze=Xe.v[1];
   $M(Ye,function(af){
    var bf=af.v[0];
    $$GHCziIntegerziType_mkIntegerzuf.C([Ze],function(cf){
     $$GHCziIntegerziType_shiftLInteger.C([cf,goog.math.Long.fromBits(31,0)],function(df){
      var ef=$d(1,[bf],"sat");
      $$GHCziIntegerziType_orInteger.J(ef,df);
     },[bf]);
    },[bf]);
   },[Ze]);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:83:11");
var $$GHCziIntegerziType_mkInteger=$f(2,function(ff,gf){
 $M(ff,function(hf){
  switch(hf.g){
  case 1:
   $$GHCziIntegerziType_mkIntegerzuf.C([gf],function(jf){
    $$GHCziIntegerziType_negateInteger.J(jf);
   },[]);break;
  case 2:
   $$GHCziIntegerziType_mkIntegerzuf.J(gf);break;
  }
 },[gf]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:81:1");
var $$GHCziIntegerziType$a=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl");
var $$GHCziIntegerziType$b=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl1");
var $$GHCziIntegerziType$d=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,2147483647)]);
},"lvl3");
var $$GHCziIntegerziType$e=$T(function(){
 $$GHCziIntegerziType_plusInteger.J($$GHCziIntegerziType$d,$$GHCziIntegerziType$b);
},"lvl4");
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
var $$Main_zdfReadCommand24=$f(2,function(R,S){
 $$GHCziRead_choose2.J($$Main_zdfReadCommand25,R,S);
},[],"in `main:Main'");
var $$Main_zdfReadCommand22=$t(function(){
 $$GHCziCString_unpackCStringzh.J("West");
},[],"in `main:Main'");
var $$Main_zdfReadCommand21=$f(2,function(T,U){
 U.J($$Main_West);
},[],"in `main:Main'");
var $$Main_zdfReadCommand20=$D(1,function(){
 $r([$$Main_zdfReadCommand22,$$Main_zdfReadCommand21]);
},"in `main:Main'");
var $$Main_zdfReadCommand19=$t(function(){
 $$GHCziCString_unpackCStringzh.J("East");
},[],"in `main:Main'");
var $$Main_zdfReadCommand18=$f(2,function(V,W){
 W.J($$Main_East);
},[],"in `main:Main'");
var $$Main_zdfReadCommand17=$D(1,function(){
 $r([$$Main_zdfReadCommand19,$$Main_zdfReadCommand18]);
},"in `main:Main'");
var $$Main_zdfReadCommand16=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Upstairs");
},[],"in `main:Main'");
var $$Main_zdfReadCommand15=$f(2,function(X,Y){
 Y.J($$Main_Upstairs);
},[],"in `main:Main'");
var $$Main_zdfReadCommand14=$D(1,function(){
 $r([$$Main_zdfReadCommand16,$$Main_zdfReadCommand15]);
},"in `main:Main'");
var $$Main_zdfReadCommand13=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Downstairs");
},[],"in `main:Main'");
var $$Main_zdfReadCommand12=$f(2,function(Z,a1){
 a1.J($$Main_Downstairs);
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
var $$Main_zdfReadCommand6=$f(2,function(b1,c1){
 $$GHCziRead_choose2.J($$Main_zdfReadCommand7,b1,c1);
},[],"in `main:Main'");
var $$Main_zdfReadCommand5=$D(1,function(){
 $r([goog.math.Long.fromBits(11,0)]);
},"in `main:Main'");
var $$Main_zdwa2=$f(2,function(e1,f1){
 var g1=$t(function(){
  var h1=e1.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(h1.g){
  case 1:
   $R(3,[],"Fail");break;
  case 2:
   var i1=$t(function(){
    var j1=$f(1,function(k1){
     var l1=$f(1,function(m1){
      var n1=$d(7,[k1,m1],"sat");
      f1.J(n1);
     },[k1,f1],"sat");
     $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,l1);
    },[f1],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,j1);
   },[f1],"lvl16");
   var o1=$f(1,function(p1){
    $M(p1,function(q1){
     switch(q1.g){
     case 4:
      var r1=q1.v[0];
      $$GHCziBase_eqString.C([r1,$$Main_zdfReadCommand51],function(s1){
       switch(s1.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	$A(i1);break;
       }
      },[i1]);break;
     default:
      $R(3,[],"Fail");
     }
    },[i1]);
   },[i1],"k");
   var t1=$t(function(){
    $$TextziReadziLex_hsLex2.J(o1);
   },[o1],"lvl85");
   var u1=$f(1,function(v1){
    $A(t1);
   },[t1],"k1");
   var w1=$f(1,function(x1){
    $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(x1,u1);
   },[u1],"sat");
   $R(2,[w1],"Look");break;
  }
 },[e1,f1],"a3");
 var y1=e1.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(y1.g){
 case 1:
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,g1);break;
 case 2:
  var z1=$t(function(){
   var A1=$f(1,function(B1){
    var C1=$f(1,function(D1){
     var E1=$d(6,[B1,D1],"sat");
     f1.J(E1);
    },[f1,B1],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,C1);
   },[f1],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,A1);
  },[f1],"lvl16");
  var F1=$f(1,function(G1){
   $M(G1,function(H1){
    switch(H1.g){
    case 4:
     var I1=H1.v[0];
     $$GHCziBase_eqString.C([I1,$$Main_zdfReadCommand50],function(J1){
      switch(J1.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(z1);break;
      }
     },[z1]);break;
    default:
     $R(3,[],"Fail");
    }
   },[z1]);
  },[z1],"k");
  var K1=$t(function(){
   $$TextziReadziLex_hsLex2.J(F1);
  },[F1],"lvl85");
  var L1=$f(1,function(M1){
   $A(K1);
  },[K1],"k1");
  var N1=$f(1,function(O1){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(O1,L1);
  },[L1],"sat");
  var P1=$d(2,[N1],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(P1,g1);break;
 }
},[],"in `main:Main'");
var $$Main_zdwa1=$f(2,function(Q1,R1){
 var S1=Q1.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(S1.g){
 case 1:
  var T1=$t(function(){
   $$Main_zdwa2.J(Q1,R1);
  },[Q1,R1],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,T1);break;
 case 2:
  var U1=$t(function(){
   var V1=$f(1,function(W1){
    var X1=$f(1,function(Y1){
     var Z1=$d(3,[W1,Y1],"sat");
     R1.J(Z1);
    },[R1,W1],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,X1);
   },[R1],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,V1);
  },[R1],"lvl16");
  var a2=$f(1,function(b2){
   $M(b2,function(c2){
    switch(c2.g){
    case 4:
     var d2=c2.v[0];
     $$GHCziBase_eqString.C([d2,$$Main_zdfReadCommand49],function(e2){
      switch(e2.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(U1);break;
      }
     },[U1]);break;
    default:
     $R(3,[],"Fail");
    }
   },[U1]);
  },[U1],"k");
  var f2=$t(function(){
   $$TextziReadziLex_hsLex2.J(a2);
  },[a2],"lvl85");
  var g2=$f(1,function(h2){
   $A(f2);
  },[f2],"k1");
  var i2=$t(function(){
   $$Main_zdwa2.J(Q1,R1);
  },[Q1,R1],"sat");
  var j2=$f(1,function(k2){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(k2,g2);
  },[g2],"sat");
  var l2=$d(2,[j2],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(l2,i2);break;
 }
},[],"in `main:Main'");
var $$Main_zdwa=$f(2,function(m2,n2){
 var o2=m2.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(o2.g){
 case 1:
  var p2=$t(function(){
   $$Main_zdwa1.J(m2,n2);
  },[m2,n2],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,p2);break;
 case 2:
  var q2=$t(function(){
   var r2=$f(1,function(s2){
    var t2=$d(2,[s2],"sat");
    n2.J(t2);
   },[n2],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadCommand24,$$Main_zdfReadCommand5,r2);
  },[n2],"lvl16");
  var u2=$f(1,function(v2){
   $M(v2,function(w2){
    switch(w2.g){
    case 4:
     var x2=w2.v[0];
     $$GHCziBase_eqString.C([x2,$$Main_zdfReadCommand23],function(y2){
      switch(y2.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(q2);break;
      }
     },[q2]);break;
    default:
     $R(3,[],"Fail");
    }
   },[q2]);
  },[q2],"k");
  var z2=$t(function(){
   $$TextziReadziLex_hsLex2.J(u2);
  },[u2],"lvl85");
  var A2=$f(1,function(B2){
   $A(z2);
  },[z2],"k1");
  var C2=$t(function(){
   $$Main_zdwa1.J(m2,n2);
  },[m2,n2],"sat");
  var D2=$f(1,function(E2){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(E2,A2);
  },[A2],"sat");
  var F2=$d(2,[D2],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(F2,C2);break;
 }
},[],"in `main:Main'");
var $$Main_zdfReadCommand3=$f(2,function(G2,H2){
 var I2=$t(function(){
  $M(G2,function(J2){
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
    },[H2],"lvl16");
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
    },[N2],"k");
    var W2=$t(function(){
     $$TextziReadziLex_hsLex2.J(R2);
    },[R2],"lvl85");
    var X2=$f(1,function(Y2){
     $A(W2);
    },[W2],"k1");
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
 },[G2,H2],"sat");
 $$GHCziRead_choose2.C([$$Main_zdfReadCommand52,G2,H2],function(d3){
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(d3,I2);
 },[I2]);
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
var $$Main_zdfShowEntryway3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("door");
},[],"in `main:Main'");
var $$Main_zdfShowEntryway2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("stairway");
},[],"in `main:Main'");
var $$Main_zdfEqRoomzuzdczeze=$f(2,function(m7,n7){
 $M(m7,function(o7){
  switch(o7.g){
  case 1:
   $M(n7,function(p7){
    switch(p7.g){
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
   $M(n7,function(q7){
    switch(q7.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(n7,function(r7){
    switch(r7.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(n7,function(s7){
    switch(s7.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[n7]);
},[],"in `main:Main'");
var $$Main_zdfEqDirectionzuzdczeze=$f(2,function(w7,x7){
 $M(w7,function(y7){
  switch(y7.g){
  case 1:
   $M(x7,function(z7){
    switch(z7.g){
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
   $M(x7,function(A7){
    switch(A7.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(x7,function(B7){
    switch(B7.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(x7,function(C7){
    switch(C7.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[x7]);
},[],"in `main:Main'");
var $$Main_zdfShowObject7=$f(1,function(j){
 $$GHCziBase_zpzp.J($$Main_zdfReadCommand48,j);
},[],"in `main:Main'");
var $$Main_zdfShowObject6=$f(1,function(j){
 $$GHCziBase_zpzp.J($$Main_zdfReadCommand45,j);
},[],"in `main:Main'");
var $$Main_zdfShowObject5=$f(1,function(j){
 $$GHCziBase_zpzp.J($$Main_zdfReadCommand42,j);
},[],"in `main:Main'");
var $$Main_zdfShowObject4=$f(1,function(j){
 $$GHCziBase_zpzp.J($$Main_zdfReadCommand39,j);
},[],"in `main:Main'");
var $$Main_zdfShowObject3=$f(1,function(j){
 $$GHCziBase_zpzp.J($$Main_zdfReadCommand36,j);
},[],"in `main:Main'");
var $$Main_zdfShowObject2=$f(1,function(j){
 $$GHCziBase_zpzp.J($$Main_zdfReadCommand33,j);
},[],"in `main:Main'");
var $$Main_zdfEqObjectzuzdczeze=$f(2,function(c8,d8){
 $M(c8,function(e8){
  switch(e8.g){
  case 1:
   $M(d8,function(f8){
    switch(f8.g){
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
   $M(d8,function(g8){
    switch(g8.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(d8,function(h8){
    switch(h8.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(d8,function(i8){
    switch(i8.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 5:
   $M(d8,function(j8){
    switch(j8.g){
    case 5:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 6:
   $M(d8,function(k8){
    switch(k8.g){
    case 6:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[d8]);
},[],"in `main:Main'");
var $$Main_zdwviableDir=$f(2,function(B9,C9){
 var D9=$f(1,function(E9){
  $M(E9,function(F9){
   switch(F9.g){
   case 1:
    $R(1,[],"False");break;
   case 2:
    var G9=F9.v[0],H9=F9.v[1];
    $M(G9,function(I9){
     var J9=I9.v[0];
     $M(J9,function(K9){
      switch(K9.g){
      case 1:
       $M(B9,function(L9){
	switch(L9.g){
	case 1:
	 $R(2,[],"True");break;
	case 2:
	 D9.J(H9);break;
	case 3:
	 D9.J(H9);break;
	case 4:
	 D9.J(H9);break;
	}
       },[B9,H9,D9]);break;
      case 2:
       $M(B9,function(M9){
	switch(M9.g){
	case 2:
	 $R(2,[],"True");break;
	default:
	 D9.J(H9);
	}
       },[B9,H9,D9]);break;
      case 3:
       $M(B9,function(N9){
	switch(N9.g){
	case 3:
	 $R(2,[],"True");break;
	default:
	 D9.J(H9);
	}
       },[B9,H9,D9]);break;
      case 4:
       $M(B9,function(O9){
	switch(O9.g){
	case 4:
	 $R(2,[],"True");break;
	default:
	 D9.J(H9);
	}
       },[B9,H9,D9]);break;
      }
     },[B9,H9,D9]);
    },[B9,H9,D9]);break;
   }
  },[B9,D9]);
 },[B9],"go");
 D9.J(C9);
},[],"at Advgame.hs:134:1");
var $$Main_zdfShowObject1=$f(1,function(T9){
 $M(T9,function(U9){
  switch(U9.g){
  case 1:
   $A($$Main_zdfShowObject7);break;
  case 2:
   $A($$Main_zdfShowObject6);break;
  case 3:
   $A($$Main_zdfShowObject5);break;
  case 4:
   $A($$Main_zdfShowObject4);break;
  case 5:
   $A($$Main_zdfShowObject3);break;
  case 6:
   $A($$Main_zdfShowObject2);break;
  }
 },[]);
},[],"in `main:Main'");
var $$Main_zdfShowObjectzuzdcshow=$f(1,function(V9){
 $M(V9,function(W9){
  switch(W9.g){
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
var $$Main_describePath2=$f(3,function(Tb,Ub,Vb){
 var Wb=$t(function(){
  $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,Vb);
 },[Vb],"a4");
 var Xb=$d(2,[Wb],"a6");
 var Yb=$d(2,[Xb,Ub],"args1");
 var Zb=$f(1,function(ac){
  var bc=$t(function(){
   var cc=$t(function(){
    $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,ac);
   },[ac],"sat");
   var dc=$d(2,[cc],"sat");
   var ec=$d(2,[dc,Yb],"sat");
   $$GHCziList_reverse1.J(ec,$$GHCziTypes_ZMZN);
  },[Yb,ac],"sat");
  $$TextziPrintf_uprintf.C([Tb,bc],function(fc){
   $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,fc);
  },[]);
 },[Yb,Tb],"sat");
 $A(Zb);
},[],"in `main:Main'");
var $$Main_describePath1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("There is a %s going %s from here.");
},[],"in `main:Main'");
var $$Main_describePath=$f(1,function(gc){
 var hc=$t(function(){
  $M(gc,function(ic){
   var jc=ic.v[0];
   $M(jc,function(kc){
    switch(kc.g){
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
 },[gc],"sat");
 var lc=$t(function(){
  $M(gc,function(mc){
   var nc=mc.v[1];
   $M(nc,function(oc){
    switch(oc.g){
    case 1:
     $A($$Main_zdfShowEntryway3);break;
    case 2:
     $A($$Main_zdfShowEntryway2);break;
    }
   },[]);
  },[]);
 },[gc],"sat");
 $$Main_describePath2.J($$Main_describePath1,$$GHCziTypes_ZMZN,lc,hc);
},[],"at Advgame.hs:111:1");
var $$Main_describePaths2=$f(2,function(pc,qc){
 $M(pc,function(rc){
  switch(rc.g){
  case 1:
   $r([qc,$$GHCziTuple_Z0T]);break;
  case 2:
   var sc=rc.v[0],tc=rc.v[1];
   var uc=$t(function(){
    $$Main_describePath.J(sc);
   },[sc],"sat");
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,uc,$$GHCziTypes_True,qc],function(vc){
    var wc=vc[0];
    $$Main_describePaths2.J(tc,wc);
   },[tc]);break;
  }
 },[qc]);
},[],"in `main:Main'");
var $$Main_parseCommand=$f(1,function(Bc){
 var Cc=$t(function(){
  $$DataziList_words.C([Bc],function(Dc){
   $$GHCziBase_map.C([$$Main_capitalizze,Dc],function(Ec){
    switch(Ec.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var Fc=Ec.v[0],Gc=Ec.v[1];
     $M(Gc,function(Hc){
      switch(Hc.g){
      case 1:
       $A(Fc);break;
      case 2:
       var Ic=Hc.v[0],Jc=Hc.v[1];
       var Kc=$t(function(){
	$$DataziList_unwordszuzdsunwords.J(Ic,Jc);
       },[Ic,Jc],"sat");
       var Lc=$d(2,[$$DataziList_unwords1,Kc],"sat");
       $$GHCziBase_zpzp.J(Fc,Lc);break;
      }
     },[Fc]);break;
    }
   },[]);
  },[]);
 },[Bc],"sat");
 $$TextziParserCombinatorsziReadP_run.C([$$Main_maybeRead1,Cc],function(Mc){
  switch(Mc.g){
  case 1:
   $R(1,[],"Nothing");break;
  case 2:
   var Nc=Mc.v[0],Oc=Mc.v[1];
   $M(Nc,function(Pc){
    var Qc=Pc.v[0],Rc=Pc.v[1];
    $M(Rc,function(Sc){
     switch(Sc.g){
     case 1:
      $M(Oc,function(Tc){
       switch(Tc.g){
       case 1:
	$R(2,[Qc],"Just");break;
       case 2:
	$R(1,[],"Nothing");break;
       }
      },[Qc]);break;
     case 2:
      $R(1,[],"Nothing");break;
     }
    },[Oc,Qc]);
   },[Oc]);break;
  }
 },[]);
},[],"at Advgame.hs:152:1");
var $$Main_zdfEqObjectzuzdczsze=$f(2,function(Uc,Vc){
 $M(Uc,function(Wc){
  switch(Wc.g){
  case 1:
   $M(Vc,function(Xc){
    switch(Xc.g){
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
   $M(Vc,function(Yc){
    switch(Yc.g){
    case 2:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 3:
   $M(Vc,function(Zc){
    switch(Zc.g){
    case 3:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 4:
   $M(Vc,function(ad){
    switch(ad.g){
    case 4:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 5:
   $M(Vc,function(bd){
    switch(bd.g){
    case 5:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 6:
   $M(Vc,function(cd){
    switch(cd.g){
    case 6:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  }
 },[Vc]);
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
var $$Main_describeFloor2=$f(2,function(ed,fd){
 $M(ed,function(gd){
  switch(gd.g){
  case 1:
   $r([fd,$$GHCziTuple_Z0T]);break;
  case 2:
   var hd=gd.v[0],id=gd.v[1];
   $$GHCziList_elem.C([$$Main_zdfEqObject,hd,$$Main_pickup9],function(jd){
    switch(jd.g){
    case 1:
     $$Main_describeFloor2.J(id,fd);break;
    case 2:
     var kd=$t(function(){
      var ld=$t(function(){
       var md=$t(function(){
	$M(hd,function(nd){
	 switch(nd.g){
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
       },[hd],"sat");
       var od=$d(2,[md],"sat");
       var pd=$d(2,[od,$$GHCziTypes_ZMZN],"sat");
       $$GHCziList_reverse1.J(pd,$$GHCziTypes_ZMZN);
      },[hd],"sat");
      $$TextziPrintf_uprintf.C([$$Main$p,ld],function(qd){
       $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,qd);
      },[]);
     },[hd],"sat");
     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,kd,$$GHCziTypes_True,fd],function(rd){
      var sd=rd[0];
      $$Main_describeFloor2.J(id,sd);
     },[id]);break;
    }
   },[fd,hd,id]);break;
  }
 },[fd]);
},[],"in `main:Main'");
var $$Main_getLoc=$f(2,function(ff,gf){
 var hf=$f(1,function(jf){
  $M(jf,function(kf){
   var lf=kf.v[0];
   $$Main_zdfEqRoomzuzdczeze.J(lf,ff);
  },[ff]);
 },[ff],"sat");
 $$GHCziList_filter.C([hf,gf],function(mf){
  switch(mf.g){
  case 1:
   $A($$GHCziList_badHead);break;
  case 2:
   var nf=mf.v[0];
   $A(nf);break;
  }
 },[]);
},[],"at Advgame.hs:138:1");
var $$Main_zdwzdczeze1=$f(6,function(of,pf,qf,rf,sf,tf){
 var uf=$t(function(){
  $M(pf,function(vf){
   switch(vf.g){
   case 1:
    $M(sf,function(wf){
     switch(wf.g){
     case 1:
      $M(qf,function(xf){
       switch(xf.g){
       case 1:
	$M(tf,function(yf){
	 switch(yf.g){
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
	$M(tf,function(zf){
	 switch(zf.g){
	 case 2:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 3:
	$M(tf,function(Af){
	 switch(Af.g){
	 case 3:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 4:
	$M(tf,function(Bf){
	 switch(Bf.g){
	 case 4:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       }
      },[tf]);break;
     case 2:
      $R(1,[],"False");break;
     }
    },[qf,tf]);break;
   case 2:
    $M(sf,function(Cf){
     switch(Cf.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $M(qf,function(Df){
       switch(Df.g){
       case 1:
	$M(tf,function(Ef){
	 switch(Ef.g){
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
	$M(tf,function(Ff){
	 switch(Ff.g){
	 case 2:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 3:
	$M(tf,function(Gf){
	 switch(Gf.g){
	 case 3:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 4:
	$M(tf,function(Hf){
	 switch(Hf.g){
	 case 4:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       }
      },[tf]);break;
     }
    },[qf,tf]);break;
   }
  },[sf,qf,tf]);
 },[pf,sf,qf,tf],"$w$j");
 $M(of,function(If){
  switch(If.g){
  case 1:
   $M(rf,function(Jf){
    switch(Jf.g){
    case 1:
     $A(uf);break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    }
   },[pf,sf,qf,tf,uf]);break;
  case 2:
   $M(rf,function(Kf){
    switch(Kf.g){
    case 2:
     $A(uf);break;
    default:
     $R(1,[],"False");
    }
   },[pf,sf,qf,tf,uf]);break;
  case 3:
   $M(rf,function(Lf){
    switch(Lf.g){
    case 3:
     $A(uf);break;
    default:
     $R(1,[],"False");
    }
   },[pf,sf,qf,tf,uf]);break;
  case 4:
   $M(rf,function(Mf){
    switch(Mf.g){
    case 4:
     $A(uf);break;
    default:
     $R(1,[],"False");
    }
   },[pf,sf,qf,tf,uf]);break;
  }
 },[pf,sf,qf,tf,uf,rf]);
},[],"in `main:Main'");
var $$Main_zdfEqPathzuzdczeze=$f(2,function(Nf,Of){
 $M(Nf,function(Pf){
  var Qf=Pf.v[0],Rf=Pf.v[1],Sf=Pf.v[2];
  $M(Of,function(Tf){
   var Uf=Tf.v[0],Vf=Tf.v[1],Wf=Tf.v[2];
   $$Main_zdwzdczeze1.J(Qf,Rf,Sf,Uf,Vf,Wf);
  },[Qf,Rf,Sf]);
 },[Of]);
},[],"in `main:Main'");
var $$Main_zdfEqPathzuzdczsze=$f(2,function(Xf,Yf){
 $M(Xf,function(Zf){
  var ag=Zf.v[0],bg=Zf.v[1],cg=Zf.v[2];
  $M(Yf,function(dg){
   var eg=dg.v[0],fg=dg.v[1],gg=dg.v[2];
   $$Main_zdwzdczeze1.C([ag,bg,cg,eg,fg,gg],function(hg){
    switch(hg.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);
  },[ag,bg,cg]);
 },[Yf]);
},[],"in `main:Main'");
var $$Main_zdfEqPath=$D(1,function(){
 $r([$$Main_zdfEqPathzuzdczeze,$$Main_zdfEqPathzuzdczsze]);
},"at Advgame.hs:37:13");
var $$Main_zdwzdczeze=$f(8,function(ig,jg,kg,lg,mg,ng,og,pg){
 var qg=$t(function(){
  $$GHCziBase_eqString.C([jg,ng],function(rg){
   switch(rg.g){
   case 1:
    $R(1,[],"False");break;
   case 2:
    $$GHCziClasses_zdfEqZMZNzuzdczeze.C([$$Main_zdfEqPath,kg,og],function(sg){
     switch(sg.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $$GHCziClasses_zdfEqZMZNzuzdczeze.J($$Main_zdfEqObject,lg,pg);break;
     }
    },[lg,pg]);break;
   }
  },[kg,og,lg,pg]);
 },[jg,ng,kg,og,lg,pg],"$w$j");
 $M(ig,function(tg){
  switch(tg.g){
  case 1:
   $M(mg,function(ug){
    switch(ug.g){
    case 1:
     $A(qg);break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    }
   },[jg,ng,kg,og,lg,pg,qg]);break;
  case 2:
   $M(mg,function(vg){
    switch(vg.g){
    case 2:
     $A(qg);break;
    default:
     $R(1,[],"False");
    }
   },[jg,ng,kg,og,lg,pg,qg]);break;
  case 3:
   $M(mg,function(wg){
    switch(wg.g){
    case 3:
     $A(qg);break;
    default:
     $R(1,[],"False");
    }
   },[jg,ng,kg,og,lg,pg,qg]);break;
  case 4:
   $M(mg,function(xg){
    switch(xg.g){
    case 4:
     $A(qg);break;
    default:
     $R(1,[],"False");
    }
   },[jg,ng,kg,og,lg,pg,qg]);break;
  }
 },[jg,ng,kg,og,lg,pg,qg,mg]);
},[],"in `main:Main'");
var $$Main_zdfEqLocationzuzdczeze=$f(2,function(yg,zg){
 $M(yg,function(Ag){
  var Bg=Ag.v[0],Cg=Ag.v[1],Dg=Ag.v[2],Eg=Ag.v[3];
  $M(zg,function(Fg){
   var Gg=Fg.v[0],Hg=Fg.v[1],Ig=Fg.v[2],Jg=Fg.v[3];
   $$Main_zdwzdczeze.J(Bg,Cg,Dg,Eg,Gg,Hg,Ig,Jg);
  },[Bg,Cg,Dg,Eg]);
 },[zg]);
},[],"in `main:Main'");
var $$Main_help24=$f(3,function(Zg,ah,bh){
 $M(Zg,function(ch){
  switch(ch.g){
  case 1:
   var dh=$d(1,[$$GHCziTuple_Z0T,ah],"sat");
   $r([bh,dh]);break;
  case 2:
   var eh=ch.v[0],fh=ch.v[1];
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,eh,$$GHCziTypes_True,bh],function(gh){
    var hh=gh[0];
    $$Main_help24.J(fh,ah,hh);
   },[ah,fh]);break;
  }
 },[bh,ah]);
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
var $$Main_getInventory2=$f(1,function(rh){
 $M(rh,function(sh){
  var th=sh.v[0];
  $M(th,function(uh){
   switch(uh.g){
   case 4:
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `main:Main'");
var $$Main_walk6=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Walking %s ");
},[],"in `main:Main'");
var $$Main_walk7=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't walk that way");
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
var $$Main_zdwa3=$f(9,function(Qh,Rh,Sh,Th,Uh,Vh,Wh,Xh,Yh){
 $$Main_zdwviableDir.C([Qh,Uh],function(Zh){
  switch(Zh.g){
  case 1:
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_walk7,$$GHCziTypes_True,Yh],function(ai){
    var bi=ai[0];
    var ci=$d(1,[Sh,Th,Uh,Vh],"sat");
    var di=$d(1,[Rh,ci,Wh,Xh],"sat");
    var ei=$d(1,[$$Main_Continue,di],"sat");
    $r([bi,ei]);
   },[Uh,Rh,Sh,Th,Vh,Wh,Xh]);break;
  case 2:
   var fi=$t(function(){
    var gi=$t(function(){
     var hi=$t(function(){
      $M(Qh,function(ii){
       switch(ii.g){
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
     },[Qh],"sat");
     var ji=$d(2,[hi],"sat");
     var ki=$d(2,[ji,$$GHCziTypes_ZMZN],"sat");
     $$GHCziList_reverse1.J(ki,$$GHCziTypes_ZMZN);
    },[Qh],"sat");
    $$TextziPrintf_uprintf.C([$$Main_walk6,gi],function(li){
     $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,li);
    },[]);
   },[Qh],"sat");
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,fi,$$GHCziTypes_True,Yh],function(mi){
    var ni=mi[0];
    var oi=$t(function(){
     var pi=$t(function(){
      var qi=$f(1,function(ri){
       $M(ri,function(si){
	var ti=si.v[0];
	$$Main_zdfEqDirectionzuzdczeze.J(ti,Qh);
       },[Qh]);
      },[Qh],"sat");
      $$GHCziList_filter.C([qi,Uh],function(ui){
       switch(ui.g){
       case 1:
	$A($$GHCziList_badHead);break;
       case 2:
	var vi=ui.v[0];
	$M(vi,function(wi){
	 var xi=wi.v[2];
	 $A(xi);
	},[]);break;
       }
      },[]);
     },[Qh,Uh],"x");
     var yi=$f(1,function(zi){
      $M(zi,function(Ai){
       var Bi=Ai.v[0];
       $$Main_zdfEqRoomzuzdczeze.J(Bi,pi);
      },[pi]);
     },[pi],"sat");
     $$GHCziList_filter.C([yi,Rh],function(Ci){
      switch(Ci.g){
      case 1:
       $A($$GHCziList_badHead);break;
      case 2:
       var Di=Ci.v[0];
       $A(Di);break;
      }
     },[]);
    },[Qh,Uh,Rh],"sat");
    var Ei=$d(1,[Rh,oi,Wh,Xh],"sat");
    var Fi=$d(1,[$$Main_Continue,Ei],"sat");
    $r([ni,Fi]);
   },[Qh,Uh,Rh,Wh,Xh]);break;
  }
 },[Qh,Uh,Yh,Rh,Sh,Th,Vh,Wh,Xh]);
},[],"in `main:Main'");
var $$Main_pickup1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't pick that up");
},[],"in `main:Main'");
var $$Main_pickup8=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Picking up %s");
},[],"in `main:Main'");
var $$Main_pickup=$f(1,function(Ti){
 var Ui=$t(function(){
  $$GHCziList_elem.J($$Main_zdfEqObject,Ti,$$Main_pickup9);
 },[Ti],"lvl16");
 var Vi=$t(function(){
  var Wi=$t(function(){
   var Xi=$t(function(){
    $M(Ti,function(Yi){
     switch(Yi.g){
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
   },[Ti],"sat");
   var Zi=$d(2,[Xi],"sat");
   var aj=$d(2,[Zi,$$GHCziTypes_ZMZN],"sat");
   $$GHCziList_reverse1.J(aj,$$GHCziTypes_ZMZN);
  },[Ti],"sat");
  $$TextziPrintf_uprintf.C([$$Main_pickup8,Wi],function(bj){
   $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,bj);
  },[]);
 },[Ti],"lvl17");
 var cj=$f(2,function(dj,ej){
  $M(dj,function(fj){
   var gj=fj.v[0],hj=fj.v[1],ij=fj.v[2],jj=fj.v[3];
   $M(hj,function(kj){
    var lj=kj.v[0],mj=kj.v[1],nj=kj.v[2],oj=kj.v[3];
    $$GHCziList_elem.C([$$Main_zdfEqObject,Ti,oj],function(pj){
     switch(pj.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_pickup1,$$GHCziTypes_True,ej],function(qj){
       var rj=qj[0];
       var sj=$d(1,[$$Main_Continue,fj],"sat");
       $r([rj,sj]);
      },[fj]);break;
     case 2:
      $M(Ui,function(tj){
       switch(tj.g){
       case 1:
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_pickup1,$$GHCziTypes_True,ej],function(uj){
	 var vj=uj[0];
	 var wj=$d(1,[$$Main_Continue,fj],"sat");
	 $r([vj,wj]);
	},[fj]);break;
       case 2:
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Vi,$$GHCziTypes_True,ej],function(xj){
	 var yj=xj[0];
	 var zj=$t(function(){
	  $$DataziList_deleteBy.J($$Main_zdfEqObjectzuzdczeze,Ti,oj);
	 },[Ti,oj],"a3");
	 var Aj=$d(1,[lj,mj,nj,zj],"newl");
	 var Bj=$t(function(){
	  $$Main_getLoc.J($$Main_InventoryRoom,gj);
	 },[gj],"inv");
	 var Cj=$t(function(){
	  $$DataziList_deleteBy.C([$$Main_zdfEqLocationzuzdczeze,kj,gj],function(Dj){
	   $$DataziList_deleteBy.J($$Main_zdfEqLocationzuzdczeze,Bj,Dj);
	  },[Bj]);
	 },[gj,Bj,kj],"sat");
	 var Ej=$t(function(){
	  $M(Bj,function(Fj){
	   var Gj=Fj.v[0],Hj=Fj.v[1],Ij=Fj.v[2],Jj=Fj.v[3];
	   var Kj=$d(2,[Ti,Jj],"sat");
	   $R(1,[Gj,Hj,Ij,Kj],"Location");
	  },[Ti]);
	 },[Ti,Bj],"sat");
	 var Lj=$d(2,[Ej,Cj],"sat");
	 var Mj=$d(2,[Aj,Lj],"sat");
	 var Nj=$d(1,[Mj,Aj,ij,jj],"sat");
	 var Oj=$d(1,[$$Main_Continue,Nj],"sat");
	 $r([yj,Oj]);
	},[Ti,oj,lj,mj,nj,gj,kj,ij,jj]);break;
       }
      },[Ti,Vi,oj,ej,fj,lj,mj,nj,gj,kj,ij,jj]);break;
     }
    },[Ti,Ui,Vi,oj,ej,fj,lj,mj,nj,gj,kj,ij,jj]);
   },[Ti,Ui,Vi,ej,fj,gj,ij,jj]);
  },[Ti,Ui,Vi,ej]);
 },[Ti,Ui,Vi],"sat");
 $A(cj);
},[],"at Advgame.hs:188:1");
var $$Main_gameAction=$f(10,function(Yj,Zj,ak,bk,ck,dk,ek,fk,gk,hk){
 var ik=$t(function(){
  $M(ak,function(jk){
   switch(jk.g){
   case 1:
    $M(ck,function(kk){
     switch(kk.g){
     case 1:
      $$Main_zdfEqObjectzuzdczeze.J(bk,dk);break;
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
    },[bk,dk]);break;
   case 2:
    $M(ck,function(lk){
     switch(lk.g){
     case 2:
      $$Main_zdfEqObjectzuzdczeze.J(bk,dk);break;
     default:
      $R(1,[],"False");
     }
    },[bk,dk]);break;
   case 3:
    $M(ck,function(mk){
     switch(mk.g){
     case 3:
      $$Main_zdfEqObjectzuzdczeze.J(bk,dk);break;
     default:
      $R(1,[],"False");
     }
    },[bk,dk]);break;
   case 4:
    $M(ck,function(nk){
     switch(nk.g){
     case 4:
      $$Main_zdfEqObjectzuzdczeze.J(bk,dk);break;
     default:
      $R(1,[],"False");
     }
    },[bk,dk]);break;
   case 5:
    $M(ck,function(ok){
     switch(ok.g){
     case 5:
      $$Main_zdfEqObjectzuzdczeze.J(bk,dk);break;
     default:
      $R(1,[],"False");
     }
    },[bk,dk]);break;
   case 6:
    $M(ck,function(pk){
     switch(pk.g){
     case 6:
      $$Main_zdfEqObjectzuzdczeze.J(bk,dk);break;
     default:
      $R(1,[],"False");
     }
    },[bk,dk]);break;
   }
  },[ck,bk,dk]);
 },[ak,ck,bk,dk],"lvl16");
 var qk=$t(function(){
  var rk=$t(function(){
   $$Main_zdfShowObjectzuzdcshow.J(bk);
  },[bk],"sat");
  var sk=$t(function(){
   $$Main_zdfShowObjectzuzdcshow.J(ak);
  },[ak],"sat");
  $$Main_describePath2.J(gk,$$GHCziTypes_ZMZN,sk,rk);
 },[ak,bk,gk],"lvl17");
 var tk=$f(2,function(uk,vk){
  $$Main$s.C([Yj,uk,vk],function(wk){
   var xk=wk[0],yk=wk[1];
   var zk=$t(function(){
    $M(yk,function(Ak){
     var Bk=Ak.v[1];
     $A(Bk);
    },[]);
   },[yk],"eta1");
   var Ck=$f(2,function(Dk,Ek){
    $M(yk,function(Fk){
     var Gk=Fk.v[0];
     var Hk=$t(function(){
      $M(Ek,function(Ik){
       var Jk=Ik.v[1];
       $A(Jk);
      },[]);
     },[Ek],"a4");
     var Kk=$d(1,[$$GHCziTypes_False,Hk],"lvl18");
     $$GHCziList_and.C([Gk],function(Lk){
      switch(Lk.g){
      case 1:
       $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(Mk){
	var Nk=Mk[0];
	$r([Nk,Kk]);
       },[Kk]);break;
      case 2:
       $M(zk,function(Ok){
	var Pk=Ok.v[1];
	$M(Pk,function(Qk){
	 var Rk=Qk.v[0];
	 var Sk=$f(1,function(Tk){
	  $M(ik,function(Uk){
	   switch(Uk.g){
	   case 1:
	    $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(Vk){
	     var Wk=Vk[0];
	     $r([Wk,Kk]);
	    },[Kk]);break;
	   case 2:
	    $M(Ek,function(Xk){
	     var Yk=Xk.v[0],Zk=Xk.v[1];
	     $$GHCziList_and.C([Yk],function(al){
	      switch(al.g){
	      case 1:
	       $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(bl){
		var cl=bl[0];
		var dl=$d(1,[$$GHCziTypes_False,Zk],"sat");
		$r([cl,dl]);
	       },[Zk]);break;
	      case 2:
	       ek.C([Zk,Dk],function(el){
		var fl=el[0],gl=el[1];
		$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,qk,$$GHCziTypes_True,fl],function(hl){
		 var il=hl[0];
		 var jl=$t(function(){
		  $M(gl,function(kl){
		   var ll=kl.v[1];
		   $A(ll);
		  },[]);
		 },[gl],"sat");
		 var ml=$d(1,[$$GHCziTypes_True,jl],"sat");
		 $r([il,ml]);
		},[gl]);
	       },[qk]);break;
	      }
	     },[qk,hk,Dk,Zk,ek]);
	    },[qk,hk,Dk,ek]);break;
	   }
	  },[qk,Ek,Kk,hk,Dk,ek]);
	 },[ik,qk,Ek,Kk,hk,Dk,ek],"$w$j");
	 $M(Rk,function(nl){
	  switch(nl.g){
	  case 1:
	   $M(Zj,function(ol){
	    switch(ol.g){
	    case 1:
	     Sk.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(pl){
	      var ql=pl[0];
	      $r([ql,Kk]);
	     },[Kk]);break;
	    case 3:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(rl){
	      var sl=rl[0];
	      $r([sl,Kk]);
	     },[Kk]);break;
	    case 4:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(tl){
	      var ul=tl[0];
	      $r([ul,Kk]);
	     },[Kk]);break;
	    }
	   },[ik,qk,Ek,Kk,hk,Dk,ek,Sk]);break;
	  case 2:
	   $M(Zj,function(vl){
	    switch(vl.g){
	    case 2:
	     Sk.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(wl){
	      var xl=wl[0];
	      $r([xl,Kk]);
	     },[Kk]);
	    }
	   },[ik,qk,Ek,Kk,hk,Dk,ek,Sk]);break;
	  case 3:
	   $M(Zj,function(yl){
	    switch(yl.g){
	    case 3:
	     Sk.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(zl){
	      var Al=zl[0];
	      $r([Al,Kk]);
	     },[Kk]);
	    }
	   },[ik,qk,Ek,Kk,hk,Dk,ek,Sk]);break;
	  case 4:
	   $M(Zj,function(Bl){
	    switch(Bl.g){
	    case 4:
	     Sk.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,hk,$$GHCziTypes_True,Dk],function(Cl){
	      var Dl=Cl[0];
	      $r([Dl,Kk]);
	     },[Kk]);
	    }
	   },[ik,qk,Ek,Kk,hk,Dk,ek,Sk]);break;
	  }
	 },[ik,qk,Ek,Kk,hk,Dk,ek,Sk,Zj]);
	},[ik,qk,Ek,Kk,hk,Dk,ek,Zj]);
       },[ik,qk,Ek,Kk,hk,Dk,ek,Zj]);break;
      }
     },[ik,qk,zk,Ek,Kk,hk,Dk,ek,Zj]);
    },[ik,qk,zk,Ek,hk,Dk,ek,Zj]);
   },[ik,qk,yk,zk,hk,ek,Zj],"$j");
   $M(fk,function(El){
    switch(El.g){
    case 1:
     var Fl=$d(1,[$$Main$q,zk],"sat");
     Ck.J(xk,Fl);break;
    case 2:
     $$Main$r.C([El,zk,xk],function(Gl){
      var Hl=Gl[0],Il=Gl[1];
      Ck.J(Hl,Il);
     },[ik,qk,yk,zk,hk,ek,Zj,Ck]);break;
    }
   },[ik,qk,yk,zk,hk,ek,Zj,Ck,xk]);
  },[ik,qk,hk,ek,Zj,fk]);
 },[ik,qk,Yj,hk,ek,Zj,fk],"sat");
 $A(tk);
},[],"at Advgame.hs:213:1");
var $$Main_dunk7=$D(2,function(){
 $r([$$Main_Bucket,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_weld4=$D(2,function(){
 $r([$$Main_Chain,$$Main_dunk7]);
},"in `main:Main'");
var $$Main_weld3=$f(2,function(Jl,Kl){
 var Ll=$t(function(){
  $M(Jl,function(Ml){
   var Nl=Ml.v[0],Ol=Ml.v[1],Pl=Ml.v[3];
   $R(1,[Nl,Ol,$$GHCziTypes_True,Pl],"GS");
  },[]);
 },[Jl],"sat");
 var Ql=$d(1,[$$GHCziTuple_Z0T,Ll],"sat");
 $r([Kl,Ql]);
},[],"in `main:Main'");
var $$Main_weld2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Welding the %s to the %s");
},[],"in `main:Main'");
var $$Main_weld1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't weld like that");
},[],"in `main:Main'");
var $$Main_weld=$f(2,function(Rl,Sl){
 var Tl=$t(function(){
  $$Main_gameAction.J($$Main_weld4,$$Main_Attic,$$Main_Chain,$$Main_Bucket,Rl,Sl,$$Main_weld3,$$GHCziTypes_ZMZN,$$Main_weld2,$$Main_weld1);
 },[Rl,Sl],"a3");
 var Ul=$f(2,function(Vl,Wl){
  Tl.C([Vl,Wl],function(Xl){
   var Yl=Xl[0],Zl=Xl[1];
   var am=$t(function(){
    $M(Zl,function(bm){
     var cm=bm.v[1];
     $A(cm);
    },[]);
   },[Zl],"sat");
   var dm=$d(1,[$$Main_Continue,am],"sat");
   $r([Yl,dm]);
  },[]);
 },[Tl],"sat");
 $A(Ul);
},[],"at Advgame.hs:223:1");
var $$Main_dunk6=$D(2,function(){
 $r([$$Main_Chain,$$Main_dunk7]);
},"in `main:Main'");
var $$Main_dunk5=$f(2,function(em,fm){
 var gm=$t(function(){
  $M(em,function(hm){
   var im=hm.v[0],jm=hm.v[1],km=hm.v[2];
   $R(1,[im,jm,km,$$GHCziTypes_True],"GS");
  },[]);
 },[em],"sat");
 var lm=$d(1,[$$GHCziTuple_Z0T,gm],"sat");
 $r([fm,lm]);
},[],"in `main:Main'");
var $$Main_dunk4=$f(2,function(mm,nm){
 var om=$t(function(){
  $M(mm,function(pm){
   var qm=pm.v[2];
   $A(qm);
  },[]);
 },[mm],"sat");
 var rm=$d(1,[om,mm],"sat");
 $r([nm,rm]);
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
var $$Main_dunk=$f(2,function(sm,tm){
 var um=$t(function(){
  $$Main_gameAction.J($$Main_dunk6,$$Main_Garden,$$Main_Bucket,$$Main_Well,sm,tm,$$Main_dunk5,$$Main_dunk3,$$Main_dunk2,$$Main_dunk1);
 },[sm,tm],"a3");
 var vm=$f(2,function(wm,xm){
  um.C([wm,xm],function(ym){
   var zm=ym[0],Am=ym[1];
   var Bm=$t(function(){
    $M(Am,function(Cm){
     var Dm=Cm.v[1];
     $A(Dm);
    },[]);
   },[Am],"sat");
   var Em=$d(1,[$$Main_Continue,Bm],"sat");
   $r([zm,Em]);
  },[]);
 },[um],"sat");
 $A(vm);
},[],"at Advgame.hs:229:1");
var $$Main_splash6=$f(2,function(Fm,Gm){
 var Hm=$d(1,[$$GHCziTuple_Z0T,Fm],"sat");
 $r([Gm,Hm]);
},[],"in `main:Main'");
var $$Main_splash5=$f(2,function(Im,Jm){
 var Km=$t(function(){
  $M(Im,function(Lm){
   var Mm=Lm.v[3];
   $A(Mm);
  },[]);
 },[Im],"sat");
 var Nm=$d(1,[Km,Im],"sat");
 $r([Jm,Nm]);
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
var $$Main_splash=$f(2,function(Om,Pm){
 var Qm=$t(function(){
  $$Main_gameAction.J($$Main_dunk7,$$Main_LivingRoom,$$Main_Bucket,$$Main_Wizzard,Om,Pm,$$Main_splash6,$$Main_splash3,$$Main_splash2,$$Main_splash1);
 },[Om,Pm],"a3");
 var Rm=$f(2,function(Sm,Tm){
  Qm.C([Sm,Tm],function(Um){
   var Vm=Um[0],Wm=Um[1];
   $M(Wm,function(Xm){
    var Ym=Xm.v[0],Zm=Xm.v[1];
    $M(Ym,function(an){
     switch(an.g){
     case 1:
      var bn=$d(1,[$$Main_Continue,Zm],"sat");
      $r([Vm,bn]);break;
     case 2:
      var cn=$t(function(){
       $M(Zm,function(dn){
	var en=dn.v[0];
	$$GHCziList_filter.C([$$Main_getInventory2,en],function(fn){
	 switch(fn.g){
	 case 1:
	  $A($$GHCziList_badHead);break;
	 case 2:
	  var gn=fn.v[0];
	  $M(gn,function(hn){
	   var jn=hn.v[3];
	   $$GHCziList_elem.C([$$Main_zdfEqObject,$$Main_Frog,jn],function(kn){
	    switch(kn.g){
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
      },[Zm],"sat");
      var ln=$d(1,[cn,Zm],"sat");
      $r([Vm,ln]);break;
     }
    },[Vm,Zm]);
   },[Vm]);
  },[]);
 },[Qm],"sat");
 $A(Rm);
},[],"at Advgame.hs:234:1");
var $$Main_main4=$f(2,function(mn,nn){
 $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$t,$$GHCziTypes_False,nn],function(on){
  var pn=on[0];
  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandle_hFlush2,$$GHCziIOziHandleziFD_stdout,$$GHCziIOziHandleziInternals_flushWriteBuffer1,pn],function(qn){
   var rn=qn[0];
   $$GHCziIOziHandleziInternals_wantReadableHandlezu1.C([$$GHCziIOziHandleziText_hGetLine3,$$GHCziIOziHandleziFD_stdin,$$GHCziIOziHandleziText_hGetLine2,rn],function(sn){
    var tn=sn[0],un=sn[1];
    $$Main_parseCommand.C([un],function(vn){
     switch(vn.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$u,$$GHCziTypes_True,tn],function(wn){
       var xn=wn[0];
       $$Main_main4.J(mn,xn);
      },[mn]);break;
     case 2:
      var yn=vn.v[0];
      $M(yn,function(zn){
       switch(zn.g){
       case 1:
	var An=zn.v[0];
	$M(mn,function(Bn){
	 var Cn=Bn.v[0],Dn=Bn.v[1],En=Bn.v[2],Fn=Bn.v[3];
	 $M(Dn,function(Gn){
	  var Hn=Gn.v[0],In=Gn.v[1],Jn=Gn.v[2],Kn=Gn.v[3];
	  $$Main_zdwa3.C([An,Cn,Hn,In,Jn,Kn,En,Fn,tn],function(Ln){
	   var Mn=Ln[0],Nn=Ln[1];
	   $M(Nn,function(On){
	    var Pn=On.v[0],Qn=On.v[1];
	    $M(Pn,function(Rn){
	     switch(Rn.g){
	     case 3:
	      $$Main_main4.J(Qn,Mn);break;
	     default:
	      $r([Mn,Nn]);
	     }
	    },[Nn,Qn,Mn]);
	   },[Nn,Mn]);
	  },[]);
	 },[tn,An,Cn,En,Fn]);
	},[tn,An]);break;
       case 2:
	var Sn=zn.v[0];
	$$Main_pickup.C([Sn,mn,tn],function(Tn){
	 var Un=Tn[0],Vn=Tn[1];
	 $M(Vn,function(Wn){
	  var Xn=Wn.v[0],Yn=Wn.v[1];
	  $M(Xn,function(Zn){
	   switch(Zn.g){
	   case 3:
	    $$Main_main4.J(Yn,Un);break;
	   default:
	    $r([Un,Vn]);
	   }
	  },[Vn,Yn,Un]);
	 },[Vn,Un]);
	},[]);break;
       case 3:
	var ao=zn.v[0],bo=zn.v[1];
	$$Main_splash.C([ao,bo,mn,tn],function(co){
	 var eo=co[0],fo=co[1];
	 $M(fo,function(go){
	  var ho=go.v[0],io=go.v[1];
	  $M(ho,function(jo){
	   switch(jo.g){
	   case 3:
	    $$Main_main4.J(io,eo);break;
	   default:
	    $r([eo,fo]);
	   }
	  },[fo,io,eo]);
	 },[fo,eo]);
	},[]);break;
       case 4:
	var ko=$t(function(){
	 $M(mn,function(lo){
	  var mo=lo.v[0];
	  $$GHCziList_filter.C([$$Main_getInventory2,mo],function(no){
	   switch(no.g){
	   case 1:
	    $A($$GHCziList_badHead);break;
	   case 2:
	    var oo=no.v[0];
	    $M(oo,function(po){
	     var qo=po.v[3];
	     $$GHCziShow_showListzuzu.J($$Main_zdfShowObject1,qo,$$GHCziTypes_ZMZN);
	    },[]);break;
	   }
	  },[]);
	 },[]);
	},[mn],"sat");
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,ko,$$GHCziTypes_True,tn],function(ro){
	 var so=ro[0];
	 $$Main_main4.J(mn,so);
	},[mn]);break;
       case 5:
	var to=$t(function(){
	 $M(mn,function(uo){
	  var vo=uo.v[1];
	  $A(vo);
	 },[]);
	},[mn],"loc");
	var wo=$t(function(){
	 $M(to,function(xo){
	  var yo=xo.v[1];
	  $A(yo);
	 },[]);
	},[to],"sat");
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,wo,$$GHCziTypes_True,tn],function(zo){
	 var Ao=zo[0];
	 $M(to,function(Bo){
	  var Co=Bo.v[2],Do=Bo.v[3];
	  $$Main_describePaths2.C([Co,Ao],function(Eo){
	   var Fo=Eo[0];
	   $$Main_describeFloor2.C([Do,Fo],function(Go){
	    var Ho=Go[0];
	    $$Main_main4.J(mn,Ho);
	   },[mn]);
	  },[mn,Do]);
	 },[mn,Ao]);
	},[mn,to]);break;
       case 6:
	var Io=zn.v[0],Jo=zn.v[1];
	$$Main_dunk.C([Io,Jo,mn,tn],function(Ko){
	 var Lo=Ko[0],Mo=Ko[1];
	 $M(Mo,function(No){
	  var Oo=No.v[0],Po=No.v[1];
	  $M(Oo,function(Qo){
	   switch(Qo.g){
	   case 3:
	    $$Main_main4.J(Po,Lo);break;
	   default:
	    $r([Lo,Mo]);
	   }
	  },[Mo,Po,Lo]);
	 },[Mo,Lo]);
	},[]);break;
       case 7:
	var Ro=zn.v[0],So=zn.v[1];
	$$Main_weld.C([Ro,So,mn,tn],function(To){
	 var Uo=To[0],Vo=To[1];
	 $M(Vo,function(Wo){
	  var Xo=Wo.v[0],Yo=Wo.v[1];
	  $M(Xo,function(Zo){
	   switch(Zo.g){
	   case 3:
	    $$Main_main4.J(Yo,Uo);break;
	   default:
	    $r([Uo,Vo]);
	   }
	  },[Vo,Yo,Uo]);
	 },[Vo,Uo]);
	},[]);break;
       case 8:
	var ap=$d(1,[$$Main_QuitGame,mn],"sat");
	$r([tn,ap]);break;
       case 9:
	$$Main_help24.C([$$Main_help2,mn,tn],function(bp){
	 var cp=bp[0],dp=bp[1];
	 var ep=$t(function(){
	  $M(dp,function(fp){
	   var gp=fp.v[1];
	   $A(gp);
	  },[]);
	 },[dp],"sat");
	 $$Main_main4.J(ep,cp);
	},[]);break;
       }
      },[tn,mn]);break;
     }
    },[tn,mn]);
   },[mn]);
  },[mn]);
 },[mn]);
},[],"in `main:Main'");
var $$Main_main3=$t(function(){
 $$ControlziExceptionziBase_patError.J("Advgame.hs:(289,5)-(292,37)|case");
},[],"in `main:Main'");
var $$Main_main2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Goodbye!");
},[],"in `main:Main'");
var $$Main_main1=$f(1,function(hp){
 $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_livingRoom8,$$GHCziTypes_True,hp],function(ip){
  var jp=ip[0];
  $$Main_describePaths2.C([$$Main_livingRoom4,jp],function(kp){
   var lp=kp[0];
   $$Main_describeFloor2.C([$$Main_livingRoom1,lp],function(mp){
    var np=mp[0];
    $$Main_main4.C([$$Main_initialMap,np],function(op){
     var pp=op[0],qp=op[1];
     $M(qp,function(rp){
      var sp=rp.v[0];
      $M(sp,function(tp){
       switch(tp.g){
       case 1:
	$$SystemziIO_putStrLn1.J($$Main_winString,pp);break;
       case 2:
	$$SystemziIO_putStrLn1.J($$Main_loseString,pp);break;
       case 3:
	$A($$Main_main3);break;
       case 4:
	$$GHCziIOziHandleziText_hPutStr2.J($$GHCziIOziHandleziFD_stdout,$$Main_main2,$$GHCziTypes_True,pp);break;
       }
      },[pp]);
     },[pp]);
    },[]);
   },[]);
  },[]);
 },[]);
},[],"in `main:Main'");
var $$Main_main5=$f(1,function(up){
 $$GHCziTopHandler_runMainIO1.J($$Main_main1,up);
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
var $$Main$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("You see a %s on the floor.");
},"fmts");
var $$Main$q=$D(2,function(){
 $r([$$GHCziTypes_True,$$GHCziTypes_ZMZN]);
},"a5");
var $$Main$r=$F(3,function(yp,zp,Ap){
 $M(yp,function(Bp){
  switch(Bp.g){
  case 1:
   var Cp=$d(1,[$$GHCziTypes_ZMZN,zp],"sat");
   $r([Ap,Cp]);break;
  case 2:
   var Dp=Bp.v[0],Ep=Bp.v[1];
   Dp.C([zp,Ap],function(Fp){
    var Gp=Fp[0],Hp=Fp[1];
    var Ip=$t(function(){
     $M(Hp,function(Jp){
      var Kp=Jp.v[1];
      $A(Kp);
     },[]);
    },[Hp],"sat");
    $$Main$r.C([Ep,Ip,Gp],function(Lp){
     var Mp=Lp[0],Np=Lp[1];
     var Op=$t(function(){
      $M(Np,function(Pp){
       var Qp=Pp.v[1];
       $A(Qp);
      },[]);
     },[Np],"sat");
     var Rp=$t(function(){
      $M(Np,function(Sp){
       var Tp=Sp.v[0];
       $A(Tp);
      },[]);
     },[Np],"sat");
     var Up=$t(function(){
      $M(Hp,function(Vp){
       var Wp=Vp.v[0];
       $A(Wp);
      },[]);
     },[Hp],"sat");
     var Xp=$d(2,[Up,Rp],"sat");
     var Yp=$d(1,[Xp,Op],"sat");
     $r([Mp,Yp]);
    },[Hp]);
   },[Ep]);break;
  }
 },[Ap,zp]);
},"a1");
var $$Main$s=$F(3,function(Zp,aq,bq){
 $M(Zp,function(cq){
  switch(cq.g){
  case 1:
   var dq=$d(1,[$$GHCziTypes_ZMZN,aq],"sat");
   $r([bq,dq]);break;
  case 2:
   var eq=cq.v[0],fq=cq.v[1];
   $$Main$s.C([fq,aq,bq],function(gq){
    var hq=gq[0],iq=gq[1];
    var jq=$t(function(){
     $M(iq,function(kq){
      var lq=kq.v[1];
      $A(lq);
     },[]);
    },[iq],"sat");
    var mq=$t(function(){
     $M(iq,function(nq){
      var oq=nq.v[0];
      $A(oq);
     },[]);
    },[iq],"sat");
    var pq=$t(function(){
     $M(aq,function(qq){
      var rq=qq.v[0];
      $$GHCziList_filter.C([$$Main_getInventory2,rq],function(sq){
       switch(sq.g){
       case 1:
	$A($$GHCziList_badHead);break;
       case 2:
	var tq=sq.v[0];
	$M(tq,function(uq){
	 var vq=uq.v[3];
	 $$GHCziList_elem.J($$Main_zdfEqObject,eq,vq);
	},[eq]);break;
       }
      },[eq]);
     },[eq]);
    },[aq,eq],"sat");
    var wq=$d(2,[pq,mq],"sat");
    var xq=$d(1,[wq,jq],"sat");
    $r([hq,xq]);
   },[aq,eq]);break;
  }
 },[bq,aq]);
},"a2");
var $$Main$t=$T(function(){
 $$GHCziCString_unpackCStringzh.J("> ");
},"lvl14");
var $$Main$u=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Invalid command!");
},"lvl15");
//@ sourceURL=hs1.js
