//$$Main_main

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
      var a4=$d(2,[$$GHCziShow_showListzuzu2,S3],"lvl22");
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
    $A($$GHCziShow_shows27);break;
   default:
    var o6=$t(function(){
     $$GHCziShow_zdwshowLitChar.J(n6,$$DataziChar$f);
    },[n6],"sat");
    $R(2,[$$GHCziShow_shows28,o6],":");
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
 $r([$$GHCziShow_shows28,$$GHCziTypes_ZMZN]);
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
var $$DataziTypeableziInternal_mkTyCon=$f(5,function(F1,G1,H1,A1,B1){
 $R(1,[F1,G1,H1,A1,B1],"TyCon");
},[],"at libraries/base/Data/Typeable/Internal.hs:125:1");
var $$DataziTypeableziInternal_mkTyConApp=$f(2,function(I1,J1){
 $M(I1,function(K1){
  var L1=K1.v[0],M1=K1.v[1];
  $M(J1,function(N1){
   switch(N1.g){
   case 1:
    $R(1,[L1,M1,K1,$$GHCziTypes_ZMZN],"TypeRep");break;
   case 2:
    var O1=$t(function(){
     $$DataziTypeableziInternal$j.J(N1);
    },[N1],"sat");
    var P1=$d(1,[L1,M1],"sat");
    var Q1=$d(2,[P1,O1],"sat");
    $$GHCziFingerprint_fingerprintFingerprints.C([Q1],function(R1){
     var S1=R1.v[0],T1=R1.v[1];
     $R(1,[S1,T1,K1,N1],"TypeRep");
    },[K1,N1]);break;
   }
  },[L1,M1,K1]);
 },[J1]);
},[],"at libraries/base/Data/Typeable/Internal.hs:130:1");
var $$DataziTypeableziInternal$j=$F(1,function(nj){
 $M(nj,function(oj){
  switch(oj.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var pj=oj.v[0],qj=oj.v[1];
   $M(pj,function(rj){
    var sj=rj.v[0],tj=rj.v[1];
    var uj=$t(function(){
     $$DataziTypeableziInternal$j.J(qj);
    },[qj],"sat");
    var vj=$d(1,[sj,tj],"sat");
    $R(2,[vj,uj],":");
   },[qj]);break;
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
var $$GHCziConcziSync_sharedCAF1=$f(3,function(md,nd,od){
 var pd=$hs_getMaskingStatezh(od);
 var qd=pd[0],rd=pd[1];
 var sd=$f(1,function(td){
  var ud=[td,md];
  var vd=ud[0],wd=ud[1];
  var xd=$d(1,[wd],"sat");
  nd.C([xd,vd],function(yd){
   var zd=yd[0],Ad=yd[1];
   $M(Ad,function(Bd){
    var Cd=Bd.v[0];
    var Dd=$hs_eqAddrzh(wd,Cd);
    switch(Dd.g){
    case 1:
     var $ff=hs_free_stable_ptr(wd);
     var Ed=[zd,$ff];
     var Fd=Ed[0];
     $r([Fd,Cd]);break;
    case 2:
     $r([zd,md]);break;
    }
   },[md,wd,zd]);
  },[md,wd]);
 },[md,nd],"a5");
 $M(rd,function(Gd){
  switch(Gd.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[sd,qd]);break;
  default:
   sd.J(qd);
  }
 },[sd,qd]);
},[],"in `base:GHC.Conc.Sync'");
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
var $$GHCziEventziControl_sendWakeup1=$f(2,function(E7,F7){
 var G7=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),F7);
 var H7=G7[0],I7=G7[1];
 var J7=$hs_unsafeFreezzeByteArrayzh(I7,H7);
 var K7=J7[0],L7=J7[1];
 var d8=$hs_byteArrayContentszh(L7);
 var e8=$hs_writeWord64OffAddrzh(d8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),K7);
 $M(E7,function(M7){
  var N7=M7.v[2];
  var c8=$hs_narrow32Intzh(N7);
  var $ff=write(c8,d8,goog.math.Long.fromBits(8,0));
  var O7=[e8,$ff];
  var P7=O7[0],Q7=O7[1];
  $M(Q7,function(R7){
   switch(R7.toString()){
   case "-1":
    var $ff=__hscore_get_errno();
    var T7=[P7,$ff];
    var U7=T7[0],V7=T7[1];
    var X7=$hs_narrow32Intzh(V7);
    var W7=$d(1,[X7],"sat");
    $$ForeignziCziError_errnoToIOError.C([$$GHCziEventziControl_sendWakeupzuloc,W7,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(Y7){
     $$GHCziIOziException_ioError.C([Y7,U7],function(Z7){
      var a8=Z7[0];
      var b8=$hs_touchzh(L7,a8);
      $r([b8,$$GHCziTuple_Z0T]);
     },[L7]);
    },[L7,U7]);break;
   default:
    var S7=$hs_touchzh(L7,P7);
    $r([S7,$$GHCziTuple_Z0T]);
   }
  },[L7,P7]);
 },[L7,d8,e8]);
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
 var n4=$d(1,[h4],"a5");
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
 },[i4],"lvl8");
 var t4=$f(1,function(u4){
  $$GHCziList_filter.C([o4,u4],function(v4){
   switch(v4.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    $R(2,[v4],"Just");break;
   }
  },[]);
 },[o4],"lvl9");
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
 },[h4,n4,o4,t4,c4],"a6");
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
var $$GHCziEventziManager_closeFd1=$f(4,function(r7,s7,t7,u7){
 var v7=$hs_getMaskingStatezh(u7);
 var w7=v7[0],x7=v7[1];
 var y7=$t(function(){
  s7.J(t7);
 },[t7,s7],"lvl8");
 var z7=$t(function(){
  $M(t7,function(A7){
   var B7=A7.v[0];
   $R(1,[B7],"I#");
  },[]);
 },[t7],"lvl9");
 var C7=$t(function(){
  $M(r7,function(D7){
   var E7=D7.v[5],F7=D7.v[6],G7=D7.v[7];
   $R(1,[E7,F7,G7],"W");
  },[]);
 },[r7],"lvl10");
 var H7=$f(2,function(I7,J7){
  y7.C([J7],function(K7){
   var L7=K7[0];
   $$GHCziEventziIntMap_zdwdelete.C([z7,I7],function(M7){
    var N7=M7[0],O7=M7[1];
    $M(N7,function(P7){
     switch(P7.g){
     case 1:
      var Q7=$d(1,[I7,$$GHCziTypes_ZMZN],"sat");
      $r([L7,Q7]);break;
     case 2:
      var R7=P7.v[0];
      $M(O7,function(S7){
       $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,R7],function(T7){
	$$GHCziEventziManager_zdwlgo.C([goog.math.Long.fromBits(0,0),T7],function(U7){
	 switch(U7.toString()){
	 case "0":
	  var Y7=$d(1,[S7,R7],"sat");
	  $r([L7,Y7]);break;
	 default:
	  $$GHCziEventziControl_sendWakeup1.C([C7,L7],function(V7){
	   var W7=V7[0];
	   var X7=$d(1,[S7,R7],"sat");
	   $r([W7,X7]);
	  },[R7,S7]);
	 }
	},[C7,L7,R7,S7]);
       },[C7,L7,R7,S7]);
      },[C7,L7,R7]);break;
     }
    },[C7,I7,L7,O7]);
   },[C7,I7,L7]);
  },[z7,C7,I7]);
 },[y7,z7,C7],"a5");
 $M(x7,function(Z7){
  switch(Z7.toString()){
  case "0":
   var o8=$f(1,function(p8){
    $M(r7,function(q8){
     var r8=q8.v[1];
     $b($hs_takeMVarzh,[r8,p8],function(s8){
      var t8=s8[0],u8=s8[1];
      var v8=$f(2,function(l1,I){
       $$GHCziEventziManager$c.J(u8,r8,l1,I);
      },[r8,u8],"sat");
      var w8=$f(1,function(I){
       H7.J(u8,I);
      },[H7,u8],"sat");
      var x8=$f(1,function(I){
       $k($hs_unmaskAsyncExceptionszh,[w8,I]);
      },[w8],"sat");
      $b($hs_catchzh,[x8,v8,t8],function(y8){
       var z8=y8[0],A8=y8[1];
       $M(A8,function(B8){
	var C8=B8.v[0],D8=B8.v[1];
	$b($hs_putMVarzh,[r8,C8,z8],function(E8){
	 $r([E8,D8]);
	},[D8]);
       },[r8,z8]);
      },[r8]);
     },[H7,r8]);
    },[H7,p8]);
   },[r7,H7],"sat");
   $b($hs_maskAsyncExceptionszh,[o8,w7],function(F8){
    var G8=F8[0],H8=F8[1];
    $$GHCziEventziManager$d.J(H8,G8);
   },[]);break;
  default:
   $M(r7,function(a8){
    var b8=a8.v[1];
    $b($hs_takeMVarzh,[b8,w7],function(c8){
     var d8=c8[0],e8=c8[1];
     var f8=$f(2,function(l1,I){
      $$GHCziEventziManager$c.J(e8,b8,l1,I);
     },[b8,e8],"sat");
     var g8=$f(1,function(I){
      H7.J(e8,I);
     },[H7,e8],"sat");
     $b($hs_catchzh,[g8,f8,d8],function(h8){
      var i8=h8[0],j8=h8[1];
      $M(j8,function(k8){
       var l8=k8.v[0],m8=k8.v[1];
       $b($hs_putMVarzh,[b8,l8,i8],function(n8){
	$$GHCziEventziManager$b.J(m8,n8);
       },[m8]);
      },[b8,i8]);
     },[b8]);
    },[H7,b8]);
   },[H7,w7]);
  }
 },[r7,H7,w7]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager$a=$F(4,function(XH,YH,ZH,aI){
 var bI=$f(1,function(cI){
  $b($hs_putMVarzh,[YH,XH,cI],function(dI){
   $r([dI,$$GHCziTuple_Z0T]);
  },[]);
 },[YH,XH],"sat");
 $$ControlziExceptionziBase_finally2.J(bI,ZH,aI);
},"lvl");
var $$GHCziEventziManager$b=$F(2,function(eI,fI){
 $M(eI,function(gI){
  switch(gI.g){
  case 1:
   $r([fI,$$GHCziTuple_Z0T]);break;
  case 2:
   var hI=gI.v[0],iI=gI.v[1];
   $M(hI,function(jI){
    var kI=jI.v[0],lI=jI.v[1],mI=jI.v[2],nI=jI.v[3];
    var uI=$hs_int2Wordzh(mI);
    var tI=uI.or(goog.math.Long.fromBits(4,0));
    var pI=$hs_word2Intzh(tI);
    var oI=$d(1,[pI],"sat");
    var qI=$d(1,[kI,lI],"sat");
    nI.C([qI,oI,fI],function(rI){
     var sI=rI[0];
     $$GHCziEventziManager$b.J(iI,sI);
    },[iI]);
   },[fI,iI]);break;
  }
 },[fI]);
},"a");
var $$GHCziEventziManager$c=$F(4,function(vI,wI,xI,yI){
 var zI=$f(1,function(AI){
  $b($hs_putMVarzh,[wI,vI,AI],function(BI){
   $r([BI,$$GHCziTuple_Z0T]);
  },[]);
 },[wI,vI],"sat");
 $$ControlziExceptionziBase_finally2.J(zI,xI,yI);
},"lvl1");
var $$GHCziEventziManager$d=$F(2,function(CI,DI){
 $M(CI,function(EI){
  switch(EI.g){
  case 1:
   $r([DI,$$GHCziTuple_Z0T]);break;
  case 2:
   var FI=EI.v[0],GI=EI.v[1];
   $M(FI,function(HI){
    var II=HI.v[0],JI=HI.v[1],KI=HI.v[2],LI=HI.v[3];
    var SI=$hs_int2Wordzh(KI);
    var RI=SI.or(goog.math.Long.fromBits(4,0));
    var NI=$hs_word2Intzh(RI);
    var MI=$d(1,[NI],"sat");
    var OI=$d(1,[II,JI],"sat");
    LI.C([OI,MI,DI],function(PI){
     var QI=PI[0];
     $$GHCziEventziManager$d.J(GI,QI);
    },[GI]);
   },[DI,GI]);break;
  }
 },[DI]);
},"a1");
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
      var B1=$d(2,[$$GHCziShow_showListzuzu2,t1],"lvl22");
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
     var Y1=$d(2,[$$GHCziShow_showListzuzu2,S1],"lvl22");
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
var $$GHCziFloat_zdfRealFloatDouble6=$D(1,function(){
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
	$A($$GHCziReal_zdfEnumRatio1);break;
       default:
	$$GHCziReal_zdwf1.J($$GHCziFloat_zdfRealFloatDouble6,hd);
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
	$A($$GHCziReal_zdfEnumRatio1);break;
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
var $$GHCziFloat_zdwexpt=$f(2,function(Bv,Cv){
 var Dv=$d(1,[Cv],"n");
 var Ev=$t(function(){
  $$GHCziIntegerziType_eqInteger.C([Bv,$$GHCziFloat_expts4],function(Fv){
   switch(Fv.g){
   case 1:
    var Gv=Cv.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Gv.g){
    case 1:
     $M(Cv,function(Hv){
      switch(Hv.toString()){
      case "0":
       $A($$GHCziReal_zdfEnumRatio1);break;
      default:
       $$GHCziReal_zdwf1.J(Bv,Hv);
      }
     },[Bv]);break;
    case 2:
     $A($$GHCziReal_zc3);break;
    }break;
   case 2:
    var Iv=Cv.lessThanOrEqual(goog.math.Long.fromBits(324,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Iv.g){
    case 1:
     var Jv=Cv.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Jv.g){
     case 1:
      $M(Cv,function(Kv){
       switch(Kv.toString()){
       case "0":
	$A($$GHCziReal_zdfEnumRatio1);break;
       default:
	$$GHCziReal_zdwf1.J(Bv,Kv);
       }
      },[Bv]);break;
     case 2:
      $A($$GHCziReal_zc3);break;
     }break;
    case 2:
     $M($$GHCziFloat_expts10,function(Lv){
      var Mv=Lv.v[0],Nv=Lv.v[1],Ov=Lv.v[3];
      $M(Mv,function(Pv){
       var Qv=Pv.v[0];
       $M(Nv,function(Rv){
	var Sv=Rv.v[0];
	var Tv=Qv.lessThanOrEqual(Cv)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Tv.g){
	case 1:
	 $$GHCziFloat$k.J(Dv,Pv,Rv);break;
	case 2:
	 var Uv=Cv.lessThanOrEqual(Sv)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Uv.g){
	 case 1:
	  $$GHCziFloat$k.J(Dv,Pv,Rv);break;
	 case 2:
	  var Xv=Cv.subtract(Qv);
	  var Vv=$hs_indexArrayzh(Ov,Xv);
	  var Wv=Vv[0];
	  $A(Wv);break;
	 }break;
	}
       },[Cv,Dv,Qv,Pv,Ov]);
      },[Cv,Dv,Nv,Ov]);
     },[Cv,Dv]);break;
    }break;
   }
  },[Cv,Dv,Bv]);
 },[Cv,Dv,Bv],"$w$j2");
 $$GHCziIntegerziType_eqInteger.C([Bv,$$GHCziFloat_zdfRealFloatDouble6],function(Yv){
  switch(Yv.g){
  case 1:
   $A(Ev);break;
  case 2:
   var Zv=Cv.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Zv.g){
   case 1:
    $A(Ev);break;
   case 2:
    var aw=Cv.lessThanOrEqual(goog.math.Long.fromBits(1100,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(aw.g){
    case 1:
     $A(Ev);break;
    case 2:
     $M($$GHCziFloat_expts,function(bw){
      var cw=bw.v[0],dw=bw.v[1],ew=bw.v[3];
      $M(cw,function(fw){
       var gw=fw.v[0];
       $M(dw,function(hw){
	var iw=hw.v[0];
	var jw=gw.lessThanOrEqual(Cv)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(jw.g){
	case 1:
	 $$GHCziFloat$l.J(Dv,fw,hw);break;
	case 2:
	 var kw=Cv.lessThanOrEqual(iw)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(kw.g){
	 case 1:
	  $$GHCziFloat$l.J(Dv,fw,hw);break;
	 case 2:
	  var nw=Cv.subtract(gw);
	  var lw=$hs_indexArrayzh(ew,nw);
	  var mw=lw[0];
	  $A(mw);break;
	 }break;
	}
       },[Cv,Dv,gw,fw,ew]);
      },[Cv,Dv,dw,ew]);
     },[Cv,Dv]);break;
    }break;
   }break;
  }
 },[Cv,Dv,Bv,Ev]);
},[],"at libraries/base/GHC/Float.lhs:869:1");
var $$GHCziFloat_zdwroundTo=$f(3,function(sw,tw,uw){
 var vw=$t(function(){
  $M(sw,function(ww){
   var xw=ww.v[0];
   $$GHCziBase_divIntzh.C([xw,goog.math.Long.fromBits(2,0)],function(yw){
    $R(1,[yw],"I#");
   },[]);
  },[]);
 },[sw],"b2");
 var zw=$f(2,function(Aw,Bw){
  $M(Bw,function(Cw){
   switch(Cw.g){
   case 1:
    var Dw=$t(function(){
     var Ew=Aw.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Ew.g){
     case 1:
      $$GHCziFloat$n.J(Aw);break;
     case 2:
      $R(1,[],"[]");break;
     }
    },[Aw],"sat");
    $r([$$GHCziFloat_minExpt,Dw]);break;
   case 2:
    var Fw=Cw.v[0],Gw=Cw.v[1];
    $M(Aw,function(Hw){
     switch(Hw.toString()){
     case "0":
      var Xw=$t(function(){
       $M(Fw,function(Yw){
	var Zw=Yw.v[0];
	$M(vw,function(ax){
	 var bx=ax.v[0];
	 var cx=Zw.greaterThanOrEqual(bx)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(cx.g){
	 case 1:
	  $A($$GHCziFloat_minExpt);break;
	 case 2:
	  $A($$GHCziFloat$i);break;
	 }
	},[Zw]);
       },[vw]);
      },[vw,Fw],"sat");
      $r([Xw,$$GHCziTypes_ZMZN]);break;
     default:
      var Ww=Hw.subtract(goog.math.Long.fromBits(1,0));
      zw.C([Ww,Gw],function(Iw){
       var Jw=Iw[0],Kw=Iw[1];
       $M(Jw,function(Lw){
	var Mw=Lw.v[0];
	$M(Fw,function(Nw){
	 var Ow=Nw.v[0];
	 $M(sw,function(Pw){
	  var Qw=Pw.v[0];
	  var Tw=Mw.add(Ow);
	  var Rw=Tw.equals(Qw)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Rw.g){
	  case 1:
	   var Sw=$d(1,[Tw],"sat");
	   var Uw=$d(2,[Sw,Kw],"sat");
	   $r([$$GHCziFloat_minExpt,Uw]);break;
	  case 2:
	   var Vw=$d(2,[$$GHCziFloat_minExpt,Kw],"sat");
	   $r([$$GHCziFloat$i,Vw]);break;
	  }
	 },[Mw,Ow,Kw]);
	},[sw,Mw,Kw]);
       },[sw,Fw,Kw]);
      },[sw,Fw]);
     }
    },[sw,vw,zw,Gw,Fw]);break;
   }
  },[sw,vw,Aw,zw]);
 },[sw,vw],"$s$wf3");
 $M(uw,function(dx){
  switch(dx.g){
  case 1:
   var ex=$t(function(){
    $M(tw,function(fx){
     var gx=fx.v[0];
     var hx=gx.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(hx.g){
     case 1:
      $$GHCziFloat$n.J(gx);break;
     case 2:
      $R(1,[],"[]");break;
     }
    },[]);
   },[tw],"sat");
   $r([$$GHCziFloat_minExpt,ex]);break;
  case 2:
   var ix=dx.v[0],jx=dx.v[1];
   $M(tw,function(kx){
    var lx=kx.v[0];
    $M(lx,function(mx){
     switch(mx.toString()){
     case "0":
      $M(ix,function(Dx){
       var Ex=Dx.v[0];
       $M(vw,function(Fx){
	var Gx=Fx.v[0];
	var Hx=Ex.greaterThanOrEqual(Gx)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Hx.g){
	case 1:
	 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);break;
	case 2:
	 var Ix=$d(2,[$$GHCziFloat$i,$$GHCziTypes_ZMZN],"sat");
	 $r([$$GHCziFloat$i,Ix]);break;
	}
       },[Ex]);
      },[vw]);break;
     default:
      var Cx=mx.subtract(goog.math.Long.fromBits(1,0));
      zw.C([Cx,jx],function(nx){
       var ox=nx[0],px=nx[1];
       $M(ox,function(qx){
	var rx=qx.v[0];
	$M(ix,function(sx){
	 var tx=sx.v[0];
	 $M(sw,function(ux){
	  var vx=ux.v[0];
	  var yx=rx.add(tx);
	  var wx=yx.equals(vx)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(wx.g){
	  case 1:
	   var xx=$d(1,[yx],"sat");
	   var zx=$d(2,[xx,px],"sat");
	   $r([$$GHCziFloat_minExpt,zx]);break;
	  case 2:
	   var Ax=$d(2,[$$GHCziFloat_minExpt,px],"sat");
	   var Bx=$d(2,[$$GHCziFloat$i,Ax],"sat");
	   $r([$$GHCziFloat$i,Bx]);break;
	  }
	 },[rx,tx,px]);
	},[sw,rx,px]);
       },[sw,ix,px]);
      },[sw,ix]);
     }
    },[sw,vw,zw,jx,ix]);
   },[sw,vw,zw,jx,ix]);break;
  }
 },[sw,vw,zw,tw]);
},[],"at libraries/base/GHC/Float.lhs:637:1");
var $$GHCziFloat_zdfShowDouble2=$D(1,function(){
 $r(["-"]);
},"in `base:GHC.Float'");
var $$GHCziFloat_zdwzdsfloatToDigits1=$f(2,function(yF,zF){
 var AF=zF==0.0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(AF.g){
 case 1:
  var BF=$t(function(){
   $$GHCziIntegerziType_decodeDoubleInteger.C([zF],function(CF){
    var DF=CF[0],EF=CF[1];
    var FF=$d(1,[EF],"sat");
    $R(1,[DF,FF],"(,)");
   },[]);
  },[zF],"ds");
  var GF=$t(function(){
   $M(BF,function(HF){
    var IF=HF.v[1];
    $A(IF);
   },[]);
  },[BF],"e0");
  var JF=$t(function(){
   $M(GF,function(KF){
    var LF=KF.v[0];
    var TF=goog.math.Long.fromBits(4294966222,4294967295).subtract(LF);
    var MF=TF.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(MF.g){
    case 1:
     var NF=$t(function(){
      $M(BF,function(OF){
       var PF=OF.v[0];
       $A(PF);
      },[]);
     },[BF],"sat");
     $R(1,[NF,KF],"(,)");break;
    case 2:
     var RF=LF.add(TF);
     var QF=$d(1,[RF],"sat");
     var SF=$t(function(){
      $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble6,TF],function(UF){
       $$GHCziIntegerziType_eqInteger.C([UF,$$GHCziReal_even1],function(VF){
	switch(VF.g){
	case 1:
	 $M(BF,function(WF){
	  var XF=WF.v[0];
	  $$GHCziIntegerziType_quotInteger.J(XF,UF);
	 },[UF]);break;
	case 2:
	 $A($$GHCziErr_divZZeroError);break;
	}
       },[BF,UF]);
      },[BF]);
     },[BF,TF],"sat");
     $R(1,[SF,QF],"(,)");break;
    }
   },[BF]);
  },[BF,GF],"ds1");
  var YF=$t(function(){
   $M(JF,function(ZF){
    var aG=ZF.v[1];
    $A(aG);
   },[]);
  },[JF],"e");
  var bG=$t(function(){
   $M(JF,function(cG){
    var dG=cG.v[0];
    $A(dG);
   },[]);
  },[JF],"f");
  var eG=$t(function(){
   $M(YF,function(fG){
    var gG=fG.v[0];
    var hG=gG.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(hG.g){
    case 1:
     var iG=gG.greaterThan(goog.math.Long.fromBits(4294966222,4294967295))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(iG.g){
     case 1:
      var jG=$t(function(){
       var lG=gG.negate();
       $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble6,lG],function(kG){
	$$GHCziIntegerziType_timesInteger.J(kG,$$GHCziFloat_zdfRealFloatDouble6);
       },[]);
      },[gG],"sat");
      var mG=$t(function(){
       $$GHCziIntegerziType_timesInteger.J(bG,$$GHCziFloat_zdfRealFloatDouble6);
      },[bG],"sat");
      $R(1,[mG,jG,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
     case 2:
      $$GHCziIntegerziType_eqInteger.C([bG,$$GHCziFloat$p],function(nG){
       switch(nG.g){
       case 1:
	var oG=$t(function(){
	 var qG=gG.negate();
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble6,qG],function(pG){
	  $$GHCziIntegerziType_timesInteger.J(pG,$$GHCziFloat_zdfRealFloatDouble6);
	 },[]);
	},[gG],"sat");
	var rG=$t(function(){
	 $$GHCziIntegerziType_timesInteger.J(bG,$$GHCziFloat_zdfRealFloatDouble6);
	},[bG],"sat");
	$R(1,[rG,oG,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       case 2:
	var sG=$t(function(){
	 var vG=gG.negate();
	 var uG=vG.add(goog.math.Long.fromBits(1,0));
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble6,uG],function(tG){
	  $$GHCziIntegerziType_timesInteger.J(tG,$$GHCziFloat_zdfRealFloatDouble6);
	 },[]);
	},[gG],"sat");
	var wG=$t(function(){
	 $$GHCziIntegerziType_timesInteger.C([bG,$$GHCziFloat_zdfRealFloatDouble6],function(xG){
	  $$GHCziIntegerziType_timesInteger.J(xG,$$GHCziFloat_zdfRealFloatDouble6);
	 },[]);
	},[bG],"sat");
	$R(1,[wG,sG,$$GHCziFloat_zdfRealFloatDouble6,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       }
      },[bG,gG]);break;
     }break;
    case 2:
     var yG=$t(function(){
      $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble6,gG);
     },[gG],"be");
     $$GHCziIntegerziType_eqInteger.C([bG,$$GHCziFloat$p],function(zG){
      switch(zG.g){
      case 1:
       var AG=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([bG,yG],function(BG){
	 $$GHCziIntegerziType_timesInteger.J(BG,$$GHCziFloat_zdfRealFloatDouble6);
	},[]);
       },[bG,yG],"sat");
       $R(1,[AG,$$GHCziFloat_zdfRealFloatDouble6,yG,yG],"(,,,)");break;
      case 2:
       var CG=$t(function(){
	$$GHCziIntegerziType_timesInteger.J(yG,$$GHCziFloat_zdfRealFloatDouble6);
       },[yG],"sat");
       var DG=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([bG,yG],function(EG){
	 $$GHCziIntegerziType_timesInteger.C([EG,$$GHCziFloat_zdfRealFloatDouble6],function(FG){
	  $$GHCziIntegerziType_timesInteger.J(FG,$$GHCziFloat_zdfRealFloatDouble6);
	 },[]);
	},[]);
       },[bG,yG],"sat");
       $R(1,[DG,$$GHCziFloat$q,CG,yG],"(,,,)");break;
      }
     },[bG,yG]);break;
    }
   },[bG]);
  },[YF,bG],"ds2");
  var GG=$t(function(){
   $M(eG,function(HG){
    var IG=HG.v[1];
    $A(IG);
   },[]);
  },[eG],"s");
  var JG=$t(function(){
   $M(eG,function(KG){
    var LG=KG.v[2];
    $A(LG);
   },[]);
  },[eG],"mUp");
  var MG=$t(function(){
   $M(eG,function(NG){
    var OG=NG.v[0];
    $A(OG);
   },[]);
  },[eG],"r");
  var PG=$t(function(){
   var QG=$t(function(){
    $$GHCziIntegerziType_plusInteger.J(MG,JG);
   },[JG,MG],"lvl32");
   var RG=$f(1,function(SG){
    var TG=SG.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(TG.g){
    case 1:
     var YG=SG.negate();
     $$GHCziFloat_zdwexpt.C([yF,YG],function(UG){
      $$GHCziIntegerziType_timesInteger.C([UG,QG],function(VG){
       $$GHCziIntegerziType_leInteger.C([VG,GG],function(WG){
	switch(WG.g){
	case 1:
	 var XG=SG.add(goog.math.Long.fromBits(1,0));
	 RG.J(XG);break;
	case 2:
	 $A(SG);break;
	}
       },[SG,RG]);
      },[GG,SG,RG]);
     },[GG,QG,SG,RG]);break;
    case 2:
     $$GHCziFloat_zdwexpt.C([yF,SG],function(ZG){
      $$GHCziIntegerziType_timesInteger.C([ZG,GG],function(aH){
       $$GHCziIntegerziType_leInteger.C([QG,aH],function(bH){
	switch(bH.g){
	case 1:
	 var cH=SG.add(goog.math.Long.fromBits(1,0));
	 RG.J(cH);break;
	case 2:
	 $A(SG);break;
	}
       },[SG,RG]);
      },[QG,SG,RG]);
     },[GG,QG,SG,RG]);break;
    }
   },[GG,QG,yF],"$wfixup");
   $$GHCziIntegerziType_eqInteger.C([yF,$$GHCziFloat_expts4],function(dH){
    switch(dH.g){
    case 1:
     $$GHCziIntegerziType_plusInteger.C([bG,$$GHCziFloat_zdfRealDouble1],function(eH){
      $$GHCziIntegerziType_floatFromInteger.C([eH],function(uH){
       $M(YF,function(fH){
	var gH=fH.v[0];
	$$GHCziIntegerziType_floatFromInteger.C([yF],function(vH){
	 var pH=$hs_logFloatzh(vH);
	 var qH=$hs_logFloatzh(uH);
	 var tH=$hs_logFloatzh(2.0);
	 var sH=$hs_int2Floatzh(gH);
	 var rH=sH*tH;
	 var oH=qH+rH;
	 var nH=oH/pH;
	 var jH=$hs_float2Intzh(nH);
	 var mH=$hs_int2Floatzh(jH);
	 var hH=mH<nH?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(hH.g){
	 case 1:
	  RG.C([jH],function(iH){
	   $R(1,[iH],"I#");
	  },[]);break;
	 case 2:
	  var lH=jH.add(goog.math.Long.fromBits(1,0));
	  RG.C([lH],function(kH){
	   $R(1,[kH],"I#");
	  },[]);break;
	 }
	},[RG,uH,gH]);
       },[yF,RG,uH]);
      },[YF,yF,RG]);
     },[YF,yF,RG]);break;
    case 2:
     $M(GF,function(wH){
      var xH=wH.v[0];
      var CH=goog.math.Long.fromBits(52,0).add(xH);
      var yH=CH.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(yH.g){
      case 1:
       var BH=CH.multiply(goog.math.Long.fromBits(8651,0));
       var AH=$hs_quotIntzh(BH,goog.math.Long.fromBits(28738,0));
       RG.C([AH],function(zH){
	$R(1,[zH],"I#");
       },[]);break;
      case 2:
       var GH=CH.multiply(goog.math.Long.fromBits(8651,0));
       var FH=$hs_quotIntzh(GH,goog.math.Long.fromBits(28738,0));
       var EH=FH.add(goog.math.Long.fromBits(1,0));
       RG.C([EH],function(DH){
	$R(1,[DH],"I#");
       },[]);break;
      }
     },[RG]);break;
    }
   },[GF,YF,bG,yF,RG]);
  },[GF,YF,bG,GG,JG,MG,yF],"k");
  var HH=$t(function(){
   $M(PG,function(IH){
    var JH=IH.v[0];
    var KH=$f(5,function(LH,MH,NH,OH,PH){
     $$GHCziIntegerziType_eqInteger.C([NH,$$GHCziReal_even1],function(QH){
      switch(QH.g){
      case 1:
       $$GHCziIntegerziType_timesInteger.C([MH,yF],function(RH){
	$$GHCziIntegerziType_quotRemInteger.C([RH,NH],function(SH){
	 var TH=SH[0],UH=SH[1];
	 $$GHCziIntegerziType_timesInteger.C([PH,yF],function(VH){
	  $$GHCziIntegerziType_timesInteger.C([OH,yF],function(WH){
	   $$GHCziIntegerziType_ltInteger.C([UH,VH],function(XH){
	    switch(XH.g){
	    case 1:
	     $$GHCziIntegerziType_plusInteger.C([UH,WH],function(YH){
	      $$GHCziIntegerziType_gtInteger.C([YH,NH],function(ZH){
	       switch(ZH.g){
	       case 1:
		var aI=$d(2,[TH,LH],"sat");
		KH.J(aI,UH,NH,WH,VH);break;
	       case 2:
		var bI=$t(function(){
		 $$GHCziIntegerziType_plusInteger.J(TH,$$GHCziFloat_zdfRealDouble1);
		},[TH],"sat");
		$R(2,[bI,LH],":");break;
	       }
	      },[NH,VH,WH,UH,TH,LH,KH]);
	     },[NH,VH,WH,UH,TH,LH,KH]);break;
	    case 2:
	     $$GHCziIntegerziType_plusInteger.C([UH,WH],function(cI){
	      $$GHCziIntegerziType_gtInteger.C([cI,NH],function(dI){
	       switch(dI.g){
	       case 1:
		$R(2,[TH,LH],":");break;
	       case 2:
		$$GHCziIntegerziType_timesInteger.C([UH,$$GHCziFloat_zdfRealFloatDouble6],function(eI){
		 $$GHCziIntegerziType_ltInteger.C([eI,NH],function(fI){
		  switch(fI.g){
		  case 1:
		   var gI=$t(function(){
		    $$GHCziIntegerziType_plusInteger.J(TH,$$GHCziFloat_zdfRealDouble1);
		   },[TH],"sat");
		   $R(2,[gI,LH],":");break;
		  case 2:
		   $R(2,[TH,LH],":");break;
		  }
		 },[TH,LH]);
		},[NH,TH,LH]);break;
	       }
	      },[NH,UH,TH,LH]);
	     },[NH,UH,TH,LH]);break;
	    }
	   },[NH,VH,WH,UH,TH,LH,KH]);
	  },[NH,VH,UH,TH,LH,KH]);
	 },[yF,NH,OH,UH,TH,LH,KH]);
	},[yF,NH,PH,OH,LH,KH]);
       },[yF,NH,PH,OH,LH,KH]);break;
      case 2:
       $A($$GHCziErr_divZZeroError);break;
      }
     },[yF,NH,MH,PH,OH,LH,KH]);
    },[yF],"gen");
    var hI=JH.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(hI.g){
    case 1:
     $M(eG,function(iI){
      var jI=iI.v[3];
      var qI=JH.negate();
      $$GHCziFloat_zdwexpt.C([yF,qI],function(kI){
       $$GHCziIntegerziType_timesInteger.C([jI,kI],function(lI){
	$$GHCziIntegerziType_timesInteger.C([JG,kI],function(mI){
	 $$GHCziIntegerziType_timesInteger.C([MG,kI],function(nI){
	  KH.C([$$GHCziTypes_ZMZN,nI,GG,mI,lI],function(oI){
	   $$GHCziList_reverse1.C([oI,$$GHCziTypes_ZMZN],function(pI){
	    $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,pI);
	   },[]);
	  },[]);
	 },[GG,KH,lI,mI]);
	},[GG,MG,KH,kI,lI]);
       },[GG,JG,MG,KH,kI]);
      },[GG,JG,MG,KH,jI]);
     },[GG,JG,MG,yF,KH,JH]);break;
    case 2:
     $M(eG,function(rI){
      var sI=rI.v[3];
      $$GHCziFloat_zdwexpt.C([yF,JH],function(tI){
       $$GHCziIntegerziType_timesInteger.C([GG,tI],function(uI){
	KH.C([$$GHCziTypes_ZMZN,MG,uI,JG,sI],function(vI){
	 $$GHCziList_reverse1.C([vI,$$GHCziTypes_ZMZN],function(wI){
	  $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,wI);
	 },[]);
	},[]);
       },[JG,MG,KH,sI]);
      },[GG,JG,MG,KH,sI]);
     },[GG,JG,MG,yF,KH,JH]);break;
    }
   },[eG,GG,JG,MG,yF]);
  },[eG,GG,JG,MG,yF,PG],"sat");
  $r([HH,PG]);break;
 case 2:
  $r([$$GHCziFloat$o,$$GHCziFloat_minExpt]);break;
 }
},[],"at libraries/base/GHC/Float.lhs:673:1");
var $$GHCziFloat_zdwzdsfloatToDigits=$f(2,function(EI,FI){
 var GI=FI==0.0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(GI.g){
 case 1:
  var HI=$t(function(){
   var II=$hs_decodeFloatzuIntzh(FI);
   var JI=II[0],KI=II[1];
   var LI=$d(1,[KI],"sat");
   var MI=$t(function(){
    $$GHCziIntegerziType_smallInteger.J(JI);
   },[JI],"sat");
   $R(1,[MI,LI],"(,)");
  },[FI],"ds");
  var NI=$t(function(){
   $M(HI,function(OI){
    var PI=OI.v[1];
    $A(PI);
   },[]);
  },[HI],"e0");
  var QI=$t(function(){
   $M(NI,function(RI){
    var SI=RI.v[0];
    var aJ=goog.math.Long.fromBits(4294967147,4294967295).subtract(SI);
    var TI=aJ.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(TI.g){
    case 1:
     var UI=$t(function(){
      $M(HI,function(VI){
       var WI=VI.v[0];
       $A(WI);
      },[]);
     },[HI],"sat");
     $R(1,[UI,RI],"(,)");break;
    case 2:
     var YI=SI.add(aJ);
     var XI=$d(1,[YI],"sat");
     var ZI=$t(function(){
      $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble6,aJ],function(bJ){
       $$GHCziIntegerziType_eqInteger.C([bJ,$$GHCziReal_even1],function(cJ){
	switch(cJ.g){
	case 1:
	 $M(HI,function(dJ){
	  var eJ=dJ.v[0];
	  $$GHCziIntegerziType_quotInteger.J(eJ,bJ);
	 },[bJ]);break;
	case 2:
	 $A($$GHCziErr_divZZeroError);break;
	}
       },[HI,bJ]);
      },[HI]);
     },[HI,aJ],"sat");
     $R(1,[ZI,XI],"(,)");break;
    }
   },[HI]);
  },[HI,NI],"ds1");
  var fJ=$t(function(){
   $M(QI,function(gJ){
    var hJ=gJ.v[1];
    $A(hJ);
   },[]);
  },[QI],"e");
  var iJ=$t(function(){
   $M(QI,function(jJ){
    var kJ=jJ.v[0];
    $A(kJ);
   },[]);
  },[QI],"f");
  var lJ=$t(function(){
   $M(fJ,function(mJ){
    var nJ=mJ.v[0];
    var oJ=nJ.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(oJ.g){
    case 1:
     var pJ=nJ.greaterThan(goog.math.Long.fromBits(4294967147,4294967295))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(pJ.g){
     case 1:
      var qJ=$t(function(){
       var sJ=nJ.negate();
       $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble6,sJ],function(rJ){
	$$GHCziIntegerziType_timesInteger.J(rJ,$$GHCziFloat_zdfRealFloatDouble6);
       },[]);
      },[nJ],"sat");
      var tJ=$t(function(){
       $$GHCziIntegerziType_timesInteger.J(iJ,$$GHCziFloat_zdfRealFloatDouble6);
      },[iJ],"sat");
      $R(1,[tJ,qJ,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
     case 2:
      $$GHCziIntegerziType_eqInteger.C([iJ,$$GHCziFloat$s],function(uJ){
       switch(uJ.g){
       case 1:
	var vJ=$t(function(){
	 var xJ=nJ.negate();
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble6,xJ],function(wJ){
	  $$GHCziIntegerziType_timesInteger.J(wJ,$$GHCziFloat_zdfRealFloatDouble6);
	 },[]);
	},[nJ],"sat");
	var yJ=$t(function(){
	 $$GHCziIntegerziType_timesInteger.J(iJ,$$GHCziFloat_zdfRealFloatDouble6);
	},[iJ],"sat");
	$R(1,[yJ,vJ,$$GHCziFloat_zdfRealDouble1,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       case 2:
	var zJ=$t(function(){
	 var CJ=nJ.negate();
	 var BJ=CJ.add(goog.math.Long.fromBits(1,0));
	 $$GHCziFloat_zdwexpt.C([$$GHCziFloat_zdfRealFloatDouble6,BJ],function(AJ){
	  $$GHCziIntegerziType_timesInteger.J(AJ,$$GHCziFloat_zdfRealFloatDouble6);
	 },[]);
	},[nJ],"sat");
	var DJ=$t(function(){
	 $$GHCziIntegerziType_timesInteger.C([iJ,$$GHCziFloat_zdfRealFloatDouble6],function(EJ){
	  $$GHCziIntegerziType_timesInteger.J(EJ,$$GHCziFloat_zdfRealFloatDouble6);
	 },[]);
	},[iJ],"sat");
	$R(1,[DJ,zJ,$$GHCziFloat_zdfRealFloatDouble6,$$GHCziFloat_zdfRealDouble1],"(,,,)");break;
       }
      },[iJ,nJ]);break;
     }break;
    case 2:
     var FJ=$t(function(){
      $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble6,nJ);
     },[nJ],"be");
     $$GHCziIntegerziType_eqInteger.C([iJ,$$GHCziFloat$s],function(GJ){
      switch(GJ.g){
      case 1:
       var HJ=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([iJ,FJ],function(IJ){
	 $$GHCziIntegerziType_timesInteger.J(IJ,$$GHCziFloat_zdfRealFloatDouble6);
	},[]);
       },[iJ,FJ],"sat");
       $R(1,[HJ,$$GHCziFloat_zdfRealFloatDouble6,FJ,FJ],"(,,,)");break;
      case 2:
       var JJ=$t(function(){
	$$GHCziIntegerziType_timesInteger.J(FJ,$$GHCziFloat_zdfRealFloatDouble6);
       },[FJ],"sat");
       var KJ=$t(function(){
	$$GHCziIntegerziType_timesInteger.C([iJ,FJ],function(LJ){
	 $$GHCziIntegerziType_timesInteger.C([LJ,$$GHCziFloat_zdfRealFloatDouble6],function(MJ){
	  $$GHCziIntegerziType_timesInteger.J(MJ,$$GHCziFloat_zdfRealFloatDouble6);
	 },[]);
	},[]);
       },[iJ,FJ],"sat");
       $R(1,[KJ,$$GHCziFloat$q,JJ,FJ],"(,,,)");break;
      }
     },[iJ,FJ]);break;
    }
   },[iJ]);
  },[fJ,iJ],"ds2");
  var NJ=$t(function(){
   $M(lJ,function(OJ){
    var PJ=OJ.v[1];
    $A(PJ);
   },[]);
  },[lJ],"s");
  var QJ=$t(function(){
   $M(lJ,function(RJ){
    var SJ=RJ.v[2];
    $A(SJ);
   },[]);
  },[lJ],"mUp");
  var TJ=$t(function(){
   $M(lJ,function(UJ){
    var VJ=UJ.v[0];
    $A(VJ);
   },[]);
  },[lJ],"r");
  var WJ=$t(function(){
   var XJ=$t(function(){
    $$GHCziIntegerziType_plusInteger.J(TJ,QJ);
   },[QJ,TJ],"lvl32");
   var YJ=$f(1,function(ZJ){
    var aK=ZJ.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(aK.g){
    case 1:
     var fK=ZJ.negate();
     $$GHCziFloat_zdwexpt.C([EI,fK],function(bK){
      $$GHCziIntegerziType_timesInteger.C([bK,XJ],function(cK){
       $$GHCziIntegerziType_leInteger.C([cK,NJ],function(dK){
	switch(dK.g){
	case 1:
	 var eK=ZJ.add(goog.math.Long.fromBits(1,0));
	 YJ.J(eK);break;
	case 2:
	 $A(ZJ);break;
	}
       },[ZJ,YJ]);
      },[NJ,ZJ,YJ]);
     },[NJ,XJ,ZJ,YJ]);break;
    case 2:
     $$GHCziFloat_zdwexpt.C([EI,ZJ],function(gK){
      $$GHCziIntegerziType_timesInteger.C([gK,NJ],function(hK){
       $$GHCziIntegerziType_leInteger.C([XJ,hK],function(iK){
	switch(iK.g){
	case 1:
	 var jK=ZJ.add(goog.math.Long.fromBits(1,0));
	 YJ.J(jK);break;
	case 2:
	 $A(ZJ);break;
	}
       },[ZJ,YJ]);
      },[XJ,ZJ,YJ]);
     },[NJ,XJ,ZJ,YJ]);break;
    }
   },[NJ,XJ,EI],"$wfixup");
   $$GHCziIntegerziType_eqInteger.C([EI,$$GHCziFloat_expts4],function(kK){
    switch(kK.g){
    case 1:
     $$GHCziIntegerziType_plusInteger.C([iJ,$$GHCziFloat_zdfRealDouble1],function(lK){
      $$GHCziIntegerziType_floatFromInteger.C([lK],function(BK){
       $M(fJ,function(mK){
	var nK=mK.v[0];
	$$GHCziIntegerziType_floatFromInteger.C([EI],function(CK){
	 var wK=$hs_logFloatzh(CK);
	 var xK=$hs_logFloatzh(BK);
	 var AK=$hs_logFloatzh(2.0);
	 var zK=$hs_int2Floatzh(nK);
	 var yK=zK*AK;
	 var vK=xK+yK;
	 var uK=vK/wK;
	 var qK=$hs_float2Intzh(uK);
	 var tK=$hs_int2Floatzh(qK);
	 var oK=tK<uK?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(oK.g){
	 case 1:
	  YJ.C([qK],function(pK){
	   $R(1,[pK],"I#");
	  },[]);break;
	 case 2:
	  var sK=qK.add(goog.math.Long.fromBits(1,0));
	  YJ.C([sK],function(rK){
	   $R(1,[rK],"I#");
	  },[]);break;
	 }
	},[YJ,BK,nK]);
       },[EI,YJ,BK]);
      },[fJ,EI,YJ]);
     },[fJ,EI,YJ]);break;
    case 2:
     $M(NI,function(DK){
      var EK=DK.v[0];
      var JK=goog.math.Long.fromBits(23,0).add(EK);
      var FK=JK.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(FK.g){
      case 1:
       var IK=JK.multiply(goog.math.Long.fromBits(8651,0));
       var HK=$hs_quotIntzh(IK,goog.math.Long.fromBits(28738,0));
       YJ.C([HK],function(GK){
	$R(1,[GK],"I#");
       },[]);break;
      case 2:
       var NK=JK.multiply(goog.math.Long.fromBits(8651,0));
       var MK=$hs_quotIntzh(NK,goog.math.Long.fromBits(28738,0));
       var LK=MK.add(goog.math.Long.fromBits(1,0));
       YJ.C([LK],function(KK){
	$R(1,[KK],"I#");
       },[]);break;
      }
     },[YJ]);break;
    }
   },[NI,fJ,iJ,EI,YJ]);
  },[NI,fJ,iJ,NJ,QJ,TJ,EI],"k");
  var OK=$t(function(){
   $M(WJ,function(PK){
    var QK=PK.v[0];
    var RK=$f(5,function(SK,TK,UK,VK,WK){
     $$GHCziIntegerziType_eqInteger.C([UK,$$GHCziReal_even1],function(XK){
      switch(XK.g){
      case 1:
       $$GHCziIntegerziType_timesInteger.C([TK,EI],function(YK){
	$$GHCziIntegerziType_quotRemInteger.C([YK,UK],function(ZK){
	 var aL=ZK[0],bL=ZK[1];
	 $$GHCziIntegerziType_timesInteger.C([WK,EI],function(cL){
	  $$GHCziIntegerziType_timesInteger.C([VK,EI],function(dL){
	   $$GHCziIntegerziType_ltInteger.C([bL,cL],function(eL){
	    switch(eL.g){
	    case 1:
	     $$GHCziIntegerziType_plusInteger.C([bL,dL],function(fL){
	      $$GHCziIntegerziType_gtInteger.C([fL,UK],function(gL){
	       switch(gL.g){
	       case 1:
		var hL=$d(2,[aL,SK],"sat");
		RK.J(hL,bL,UK,dL,cL);break;
	       case 2:
		var iL=$t(function(){
		 $$GHCziIntegerziType_plusInteger.J(aL,$$GHCziFloat_zdfRealDouble1);
		},[aL],"sat");
		$R(2,[iL,SK],":");break;
	       }
	      },[UK,cL,dL,bL,aL,SK,RK]);
	     },[UK,cL,dL,bL,aL,SK,RK]);break;
	    case 2:
	     $$GHCziIntegerziType_plusInteger.C([bL,dL],function(jL){
	      $$GHCziIntegerziType_gtInteger.C([jL,UK],function(kL){
	       switch(kL.g){
	       case 1:
		$R(2,[aL,SK],":");break;
	       case 2:
		$$GHCziIntegerziType_timesInteger.C([bL,$$GHCziFloat_zdfRealFloatDouble6],function(lL){
		 $$GHCziIntegerziType_ltInteger.C([lL,UK],function(mL){
		  switch(mL.g){
		  case 1:
		   var nL=$t(function(){
		    $$GHCziIntegerziType_plusInteger.J(aL,$$GHCziFloat_zdfRealDouble1);
		   },[aL],"sat");
		   $R(2,[nL,SK],":");break;
		  case 2:
		   $R(2,[aL,SK],":");break;
		  }
		 },[aL,SK]);
		},[UK,aL,SK]);break;
	       }
	      },[UK,bL,aL,SK]);
	     },[UK,bL,aL,SK]);break;
	    }
	   },[UK,cL,dL,bL,aL,SK,RK]);
	  },[UK,cL,bL,aL,SK,RK]);
	 },[EI,UK,VK,bL,aL,SK,RK]);
	},[EI,UK,WK,VK,SK,RK]);
       },[EI,UK,WK,VK,SK,RK]);break;
      case 2:
       $A($$GHCziErr_divZZeroError);break;
      }
     },[EI,UK,TK,WK,VK,SK,RK]);
    },[EI],"gen");
    var oL=QK.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(oL.g){
    case 1:
     $M(lJ,function(pL){
      var qL=pL.v[3];
      var xL=QK.negate();
      $$GHCziFloat_zdwexpt.C([EI,xL],function(rL){
       $$GHCziIntegerziType_timesInteger.C([qL,rL],function(sL){
	$$GHCziIntegerziType_timesInteger.C([QJ,rL],function(tL){
	 $$GHCziIntegerziType_timesInteger.C([TJ,rL],function(uL){
	  RK.C([$$GHCziTypes_ZMZN,uL,NJ,tL,sL],function(vL){
	   $$GHCziList_reverse1.C([vL,$$GHCziTypes_ZMZN],function(wL){
	    $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,wL);
	   },[]);
	  },[]);
	 },[NJ,RK,sL,tL]);
	},[NJ,TJ,RK,rL,sL]);
       },[NJ,QJ,TJ,RK,rL]);
      },[NJ,QJ,TJ,RK,qL]);
     },[NJ,QJ,TJ,EI,RK,QK]);break;
    case 2:
     $M(lJ,function(yL){
      var zL=yL.v[3];
      $$GHCziFloat_zdwexpt.C([EI,QK],function(AL){
       $$GHCziIntegerziType_timesInteger.C([NJ,AL],function(BL){
	RK.C([$$GHCziTypes_ZMZN,TJ,BL,QJ,zL],function(CL){
	 $$GHCziList_reverse1.C([CL,$$GHCziTypes_ZMZN],function(DL){
	  $$GHCziBase_map.J($$GHCziReal_fromIntegralzuzdsfromIntegral,DL);
	 },[]);
	},[]);
       },[QJ,TJ,RK,zL]);
      },[NJ,QJ,TJ,RK,zL]);
     },[NJ,QJ,TJ,EI,RK,QK]);break;
    }
   },[lJ,NJ,QJ,TJ,EI]);
  },[lJ,NJ,QJ,TJ,EI,WJ],"sat");
  $r([OK,WJ]);break;
 case 2:
  $r([$$GHCziFloat$r,$$GHCziFloat_minExpt]);break;
 }
},[],"at libraries/base/GHC/Float.lhs:673:1");
var $$GHCziFloat_zdwzdsformatRealFloat=$f(3,function(KP,LP,MP){
 var $ff=isDoubleNaN(MP);
 var NP=[$$GHCziPrim_realWorldzh,$ff];
 var OP=NP[1];
 $M(OP,function(PP){
  switch(PP.toString()){
  case "0":
   var $ff=isDoubleInfinite(MP);
   var QP=[$$GHCziPrim_realWorldzh,$ff];
   var RP=QP[1];
   $M(RP,function(SP){
    switch(SP.toString()){
    case "0":
     var UP=$f(2,function(VP,WP){
      $M(LP,function(XP){
       switch(XP.g){
       case 1:
	$$GHCziBase_map.C([$$GHCziShow_intToDigit,VP],function(YP){
	 switch(YP.g){
	 case 1:
	  $A($$GHCziFloat$w);break;
	 case 2:
	  var ZP=YP.v[0],aQ=YP.v[1];
	  $M(ZP,function(bQ){
	   var cQ=bQ.v[0];
	   var dQ=$t(function(){
	    $M(aQ,function(eQ){
	     switch(eQ.g){
	     case 1:
	      var fQ=$t(function(){
	       var gQ=$t(function(){
		var hQ=WP.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),hQ,$$GHCziTypes_ZMZN);
	       },[WP],"sat");
	       $$GHCziCString_unpackAppendCStringzh.J(".0e",gQ);
	      },[WP],"sat");
	      $R(2,[bQ,fQ],":");break;
	     case 2:
	      var iQ=$t(function(){
	       var jQ=$t(function(){
		var kQ=WP.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_itos.J(kQ,$$GHCziTypes_ZMZN);
	       },[WP],"sat");
	       var lQ=$d(2,[$$GHCziFloat$A,jQ],"sat");
	       $$GHCziBase_zpzp.J(eQ,lQ);
	      },[WP,eQ],"sat");
	      var mQ=$d(2,[$$GHCziFloat$x,iQ],"sat");
	      $R(2,[bQ,mQ],":");break;
	     }
	    },[bQ,WP]);
	   },[aQ,bQ,WP],"$wfail");
	   $M(cQ,function(nQ){
	    switch(nQ.toString()){
	    case "0":
	     $M(aQ,function(oQ){
	      switch(oQ.g){
	      case 1:
	       $A($$GHCziFloat$y);break;
	      case 2:
	       $A(dQ);break;
	      }
	     },[aQ,bQ,WP,dQ]);break;
	    default:
	     $A(dQ);
	    }
	   },[aQ,bQ,WP,dQ]);
	  },[aQ,WP]);break;
	 }
	},[WP]);break;
       case 2:
	var pQ=XP.v[0];
	var qQ=$t(function(){
	 $M(pQ,function(rQ){
	  var sQ=rQ.v[0];
	  var tQ=sQ.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(tQ.g){
	  case 1:
	   $A(rQ);break;
	  case 2:
	   $A($$GHCziFloat$i);break;
	  }
	 },[]);
	},[pQ],"dec'");
	var uQ=$t(function(){
	 var vQ=$t(function(){
	  $M(qQ,function(wQ){
	   var xQ=wQ.v[0];
	   var yQ=xQ.add(goog.math.Long.fromBits(1,0));
	   $R(1,[yQ],"I#");
	  },[]);
	 },[qQ],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,vQ,VP],function(zQ){
	  var AQ=zQ[0],BQ=zQ[1];
	  $R(1,[AQ,BQ],"(,)");
	 },[]);
	},[VP,qQ],"ds4");
	var CQ=$t(function(){
	 $M(uQ,function(DQ){
	  var EQ=DQ.v[0];
	  $A(EQ);
	 },[]);
	},[uQ],"ei");
	var FQ=$t(function(){
	 $M(CQ,function(GQ){
	  var HQ=GQ.v[0];
	  var IQ=HQ.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(IQ.g){
	  case 1:
	   $M(uQ,function(JQ){
	    var KQ=JQ.v[1];
	    $$GHCziBase_map.C([$$GHCziShow_intToDigit,KQ],function(LQ){
	     switch(LQ.g){
	     case 1:
	      $A($$GHCziFloat$z);break;
	     case 2:
	      var MQ=LQ.v[0],NQ=LQ.v[1];
	      $R(1,[MQ,NQ],"(,)");break;
	     }
	    },[]);
	   },[]);break;
	  case 2:
	   $M(uQ,function(OQ){
	    var PQ=OQ.v[1];
	    $M(PQ,function(QQ){
	     switch(QQ.g){
	     case 1:
	      $A($$GHCziList_init2);break;
	     case 2:
	      var RQ=QQ.v[0],SQ=QQ.v[1];
	      $$GHCziList_init1.C([RQ,SQ],function(TQ){
	       $$GHCziBase_map.C([$$GHCziShow_intToDigit,TQ],function(UQ){
		switch(UQ.g){
		case 1:
		 $A($$GHCziFloat$z);break;
		case 2:
		 var VQ=UQ.v[0],WQ=UQ.v[1];
		 $R(1,[VQ,WQ],"(,)");break;
		}
	       },[]);
	      },[]);break;
	     }
	    },[]);
	   },[]);break;
	  }
	 },[uQ]);
	},[uQ,CQ],"ds5");
	var XQ=$t(function(){
	 $M(FQ,function(YQ){
	  var ZQ=YQ.v[1];
	  var aR=$t(function(){
	   $M(CQ,function(bR){
	    var cR=bR.v[0];
	    var eR=WP.subtract(goog.math.Long.fromBits(1,0));
	    var dR=eR.add(cR);
	    $$GHCziShow_itos.J(dR,$$GHCziTypes_ZMZN);
	   },[WP]);
	  },[WP,CQ],"sat");
	  var fR=$d(2,[$$GHCziFloat$A,aR],"sat");
	  $$GHCziBase_zpzp.J(ZQ,fR);
	 },[WP,CQ]);
	},[WP,CQ,FQ],"a");
	$M(VP,function(gR){
	 switch(gR.g){
	 case 1:
	  var hR=$d(2,[$$GHCziFloat$x,XQ],"sat");
	  var iR=$t(function(){
	   $M(FQ,function(jR){
	    var kR=jR.v[0];
	    $A(kR);
	   },[]);
	  },[FQ],"sat");
	  $R(2,[iR,hR],":");break;
	 case 2:
	  var lR=gR.v[0],mR=gR.v[1];
	  $M(lR,function(nR){
	   var oR=nR.v[0];
	   $M(oR,function(pR){
	    switch(pR.toString()){
	    case "0":
	     $M(mR,function(uR){
	      switch(uR.g){
	      case 1:
	       var vR=$t(function(){
		$M(qQ,function(wR){
		 var xR=wR.v[0];
		 var yR=xR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(yR.g){
		 case 1:
		  $$GHCziFloat$M.J($$GHCziFloat$C,xR);break;
		 case 2:
		  $A($$GHCziFloat$L);break;
		 }
		},[]);
	       },[qQ],"sat");
	       var zR=$d(2,[$$GHCziFloat$x,vR],"sat");
	       $R(2,[$$GHCziFloat$B,zR],":");break;
	      case 2:
	       var AR=$d(2,[$$GHCziFloat$x,XQ],"sat");
	       var BR=$t(function(){
		$M(FQ,function(CR){
		 var DR=CR.v[0];
		 $A(DR);
		},[]);
	       },[FQ],"sat");
	       $R(2,[BR,AR],":");break;
	      }
	     },[qQ,FQ,XQ]);break;
	    default:
	     var qR=$d(2,[$$GHCziFloat$x,XQ],"sat");
	     var rR=$t(function(){
	      $M(FQ,function(sR){
	       var tR=sR.v[0];
	       $A(tR);
	      },[]);
	     },[FQ],"sat");
	     $R(2,[rR,qR],":");
	    }
	   },[qQ,FQ,XQ,mR]);
	  },[qQ,FQ,XQ,mR]);break;
	 }
	},[qQ,FQ,XQ]);break;
       }
      },[VP,WP]);
     },[LP],"$s$wdoFmt");
     var ER=$f(2,function(FR,GR){
      $M(LP,function(HR){
       switch(HR.g){
       case 1:
	var IR=GR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(IR.g){
	case 1:
	 var JR=$t(function(){
	  $$GHCziBase_map.J($$GHCziShow_intToDigit,FR);
	 },[FR],"sat");
	 $$GHCziFloat$F.J(GR,$$GHCziTypes_ZMZN,JR);break;
	case 2:
	 var KR=$t(function(){
	  var TR=GR.negate();
	  var LR=TR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(LR.g){
	  case 1:
	   var MR=$t(function(){
	    $$GHCziBase_map.J($$GHCziShow_intToDigit,FR);
	   },[FR],"n");
	   var NR=$d(2,[$$GHCziFloat$B,MR],"lvl32");
	   var OR=$f(1,function(PR){
	    var QR=PR.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(QR.g){
	    case 1:
	     var RR=$t(function(){
	      var SR=PR.subtract(goog.math.Long.fromBits(1,0));
	      OR.J(SR);
	     },[PR,OR],"sat");
	     $R(2,[$$GHCziFloat$B,RR],":");break;
	    case 2:
	     $A(NR);break;
	    }
	   },[NR],"xs4");
	   OR.J(TR);break;
	  case 2:
	   $$GHCziBase_map.J($$GHCziShow_intToDigit,FR);break;
	  }
	 },[GR,FR],"sat");
	 $$GHCziCString_unpackAppendCStringzh.J("0.",KR);break;
	}break;
       case 2:
	var UR=HR.v[0];
	var VR=GR.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(VR.g){
	case 1:
	 var WR=$t(function(){
	  var mS=GR.negate();
	  var XR=mS.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(XR.g){
	  case 1:
	   var YR=$d(2,[$$GHCziFloat_minExpt,FR],"lvl32");
	   var ZR=$f(1,function(aS){
	    var bS=aS.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(bS.g){
	    case 1:
	     var cS=$t(function(){
	      var dS=aS.subtract(goog.math.Long.fromBits(1,0));
	      ZR.J(dS);
	     },[aS,ZR],"sat");
	     $R(2,[$$GHCziFloat_minExpt,cS],":");break;
	    case 2:
	     $A(YR);break;
	    }
	   },[YR],"xs4");
	   ZR.C([mS],function(eS){
	    var fS=$t(function(){
	     $M(UR,function(gS){
	      var hS=gS.v[0];
	      var iS=hS.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(iS.g){
	      case 1:
	       $A(gS);break;
	      case 2:
	       $A($$GHCziFloat_minExpt);break;
	      }
	     },[]);
	    },[UR],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,fS,eS],function(jS){
	     var kS=jS[0],lS=jS[1];
	     $$GHCziFloat$N.J(kS,lS);
	    },[]);
	   },[UR]);break;
	  case 2:
	   var nS=$t(function(){
	    $M(UR,function(oS){
	     var pS=oS.v[0];
	     var qS=pS.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(qS.g){
	     case 1:
	      $A(oS);break;
	     case 2:
	      $A($$GHCziFloat_minExpt);break;
	     }
	    },[]);
	   },[UR],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,nS,FR],function(rS){
	    var sS=rS[0],tS=rS[1];
	    $$GHCziFloat$N.J(sS,tS);
	   },[]);break;
	  }
	 },[GR,FR,UR],"ds4");
	 var uS=$t(function(){
	  $M(WR,function(vS){
	   var wS=vS.v[1];
	   $M(wS,function(xS){
	    switch(xS.g){
	    case 1:
	     $R(1,[],"[]");break;
	    case 2:
	     $R(2,[$$GHCziFloat$x,xS],":");break;
	    }
	   },[]);
	  },[]);
	 },[WR],"sat");
	 var yS=$t(function(){
	  $M(WR,function(zS){
	   var AS=zS.v[0];
	   $A(AS);
	  },[]);
	 },[WR],"sat");
	 $R(2,[yS,uS],":");break;
	case 2:
	 var BS=$t(function(){
	  $M(UR,function(CS){
	   var DS=CS.v[0];
	   var ES=DS.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(ES.g){
	   case 1:
	    var FS=DS.add(GR);
	    $R(1,[FS],"I#");break;
	   case 2:
	    $R(1,[GR],"I#");break;
	   }
	  },[GR]);
	 },[GR,UR],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,BS,FR],function(GS){
	  var HS=GS[0],IS=GS[1];
	  $M(HS,function(JS){
	   var KS=JS.v[0];
	   var VS=GR.add(KS);
	   var LS=VS.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(LS.g){
	   case 1:
	    var MS=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,IS);
	    },[IS],"sat");
	    $$GHCziList_zdwsplitAtzh.C([VS,MS],function(NS){
	     var OS=NS[0],PS=NS[1];
	     $M(OS,function(QS){
	      switch(QS.g){
	      case 1:
	       var RS=$t(function(){
		$M(PS,function(SS){
		 switch(SS.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$x,SS],":");break;
		 }
		},[]);
	       },[PS],"sat");
	       $R(2,[$$GHCziFloat$B,RS],":");break;
	      case 2:
	       var TS=$t(function(){
		$M(PS,function(US){
		 switch(US.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$x,US],":");break;
		 }
		},[]);
	       },[PS],"sat");
	       $$GHCziBase_zpzp.J(QS,TS);break;
	      }
	     },[PS]);
	    },[]);break;
	   case 2:
	    var WS=$t(function(){
	     $$GHCziBase_map.C([$$GHCziShow_intToDigit,IS],function(XS){
	      switch(XS.g){
	      case 1:
	       $R(1,[],"[]");break;
	      case 2:
	       $R(2,[$$GHCziFloat$x,XS],":");break;
	      }
	     },[]);
	    },[IS],"sat");
	    $R(2,[$$GHCziFloat$B,WS],":");break;
	   }
	  },[GR,IS]);
	 },[GR]);break;
	}break;
       }
      },[GR,FR]);
     },[LP],"$s$wdoFmt1");
     var YS=$f(3,function(ZS,aT,bT){
      $M(ZS,function(cT){
       switch(cT.g){
       case 1:
	$M(LP,function(dT){
	 switch(dT.g){
	 case 1:
	  $$GHCziBase_map.C([$$GHCziShow_intToDigit,aT],function(eT){
	   switch(eT.g){
	   case 1:
	    $A($$GHCziFloat$w);break;
	   case 2:
	    var fT=eT.v[0],gT=eT.v[1];
	    $M(fT,function(hT){
	     var iT=hT.v[0];
	     var jT=$t(function(){
	      $M(gT,function(kT){
	       switch(kT.g){
	       case 1:
		var lT=$t(function(){
		 var mT=$t(function(){
		  $M(bT,function(nT){
		   var oT=nT.v[0];
		   var pT=oT.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),pT,$$GHCziTypes_ZMZN);
		  },[]);
		 },[bT],"sat");
		 $$GHCziCString_unpackAppendCStringzh.J(".0e",mT);
		},[bT],"sat");
		$R(2,[hT,lT],":");break;
	       case 2:
		var qT=$t(function(){
		 var rT=$t(function(){
		  $M(bT,function(sT){
		   var tT=sT.v[0];
		   var uT=tT.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_itos.J(uT,$$GHCziTypes_ZMZN);
		  },[]);
		 },[bT],"sat");
		 var vT=$d(2,[$$GHCziFloat$A,rT],"sat");
		 $$GHCziBase_zpzp.J(kT,vT);
		},[bT,kT],"sat");
		var wT=$d(2,[$$GHCziFloat$x,qT],"sat");
		$R(2,[hT,wT],":");break;
	       }
	      },[hT,bT]);
	     },[gT,hT,bT],"$wfail");
	     $M(iT,function(xT){
	      switch(xT.toString()){
	      case "0":
	       $M(gT,function(yT){
		switch(yT.g){
		case 1:
		 $A($$GHCziFloat$y);break;
		case 2:
		 $A(jT);break;
		}
	       },[gT,hT,bT,jT]);break;
	      default:
	       $A(jT);
	      }
	     },[gT,hT,bT,jT]);
	    },[gT,bT]);break;
	   }
	  },[bT]);break;
	 case 2:
	  var zT=dT.v[0];
	  var AT=$t(function(){
	   $M(zT,function(BT){
	    var CT=BT.v[0];
	    var DT=CT.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(DT.g){
	    case 1:
	     $A(BT);break;
	    case 2:
	     $A($$GHCziFloat$i);break;
	    }
	   },[]);
	  },[zT],"dec'");
	  var ET=$t(function(){
	   var FT=$t(function(){
	    $M(AT,function(GT){
	     var HT=GT.v[0];
	     var IT=HT.add(goog.math.Long.fromBits(1,0));
	     $R(1,[IT],"I#");
	    },[]);
	   },[AT],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,FT,aT],function(JT){
	    var KT=JT[0],LT=JT[1];
	    $R(1,[KT,LT],"(,)");
	   },[]);
	  },[aT,AT],"ds4");
	  var MT=$t(function(){
	   $M(ET,function(NT){
	    var OT=NT.v[0];
	    $A(OT);
	   },[]);
	  },[ET],"ei");
	  var PT=$t(function(){
	   $M(MT,function(QT){
	    var RT=QT.v[0];
	    var ST=RT.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(ST.g){
	    case 1:
	     $M(ET,function(TT){
	      var UT=TT.v[1];
	      $$GHCziBase_map.C([$$GHCziShow_intToDigit,UT],function(VT){
	       switch(VT.g){
	       case 1:
		$A($$GHCziFloat$z);break;
	       case 2:
		var WT=VT.v[0],XT=VT.v[1];
		$R(1,[WT,XT],"(,)");break;
	       }
	      },[]);
	     },[]);break;
	    case 2:
	     $M(ET,function(YT){
	      var ZT=YT.v[1];
	      $M(ZT,function(aU){
	       switch(aU.g){
	       case 1:
		$A($$GHCziList_init2);break;
	       case 2:
		var bU=aU.v[0],cU=aU.v[1];
		$$GHCziList_init1.C([bU,cU],function(dU){
		 $$GHCziBase_map.C([$$GHCziShow_intToDigit,dU],function(eU){
		  switch(eU.g){
		  case 1:
		   $A($$GHCziFloat$z);break;
		  case 2:
		   var fU=eU.v[0],gU=eU.v[1];
		   $R(1,[fU,gU],"(,)");break;
		  }
		 },[]);
		},[]);break;
	       }
	      },[]);
	     },[]);break;
	    }
	   },[ET]);
	  },[ET,MT],"ds5");
	  var hU=$t(function(){
	   $M(PT,function(iU){
	    var jU=iU.v[1];
	    var kU=$t(function(){
	     $M(bT,function(lU){
	      var mU=lU.v[0];
	      $M(MT,function(nU){
	       var oU=nU.v[0];
	       var qU=mU.subtract(goog.math.Long.fromBits(1,0));
	       var pU=qU.add(oU);
	       $$GHCziShow_itos.J(pU,$$GHCziTypes_ZMZN);
	      },[mU]);
	     },[MT]);
	    },[bT,MT],"sat");
	    var rU=$d(2,[$$GHCziFloat$A,kU],"sat");
	    $$GHCziBase_zpzp.J(jU,rU);
	   },[bT,MT]);
	  },[bT,MT,PT],"a");
	  $M(aT,function(sU){
	   switch(sU.g){
	   case 1:
	    var tU=$d(2,[$$GHCziFloat$x,hU],"sat");
	    var uU=$t(function(){
	     $M(PT,function(vU){
	      var wU=vU.v[0];
	      $A(wU);
	     },[]);
	    },[PT],"sat");
	    $R(2,[uU,tU],":");break;
	   case 2:
	    var xU=sU.v[0],yU=sU.v[1];
	    $M(xU,function(zU){
	     var AU=zU.v[0];
	     $M(AU,function(BU){
	      switch(BU.toString()){
	      case "0":
	       $M(yU,function(GU){
		switch(GU.g){
		case 1:
		 var HU=$t(function(){
		  $M(AT,function(IU){
		   var JU=IU.v[0];
		   var KU=JU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(KU.g){
		   case 1:
		    $$GHCziFloat$M.J($$GHCziFloat$C,JU);break;
		   case 2:
		    $A($$GHCziFloat$L);break;
		   }
		  },[]);
		 },[AT],"sat");
		 var LU=$d(2,[$$GHCziFloat$x,HU],"sat");
		 $R(2,[$$GHCziFloat$B,LU],":");break;
		case 2:
		 var MU=$d(2,[$$GHCziFloat$x,hU],"sat");
		 var NU=$t(function(){
		  $M(PT,function(OU){
		   var PU=OU.v[0];
		   $A(PU);
		  },[]);
		 },[PT],"sat");
		 $R(2,[NU,MU],":");break;
		}
	       },[AT,PT,hU]);break;
	      default:
	       var CU=$d(2,[$$GHCziFloat$x,hU],"sat");
	       var DU=$t(function(){
		$M(PT,function(EU){
		 var FU=EU.v[0];
		 $A(FU);
		},[]);
	       },[PT],"sat");
	       $R(2,[DU,CU],":");
	      }
	     },[AT,PT,hU,yU]);
	    },[AT,PT,hU,yU]);break;
	   }
	  },[AT,PT,hU]);break;
	 }
	},[aT,bT]);break;
       case 2:
	$M(LP,function(QU){
	 switch(QU.g){
	 case 1:
	  $M(bT,function(RU){
	   var SU=RU.v[0];
	   var TU=SU.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(TU.g){
	   case 1:
	    var UU=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,aT);
	    },[aT],"sat");
	    $$GHCziFloat$F.J(SU,$$GHCziTypes_ZMZN,UU);break;
	   case 2:
	    var VU=$t(function(){
	     var eV=SU.negate();
	     var WU=eV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(WU.g){
	     case 1:
	      var XU=$t(function(){
	       $$GHCziBase_map.J($$GHCziShow_intToDigit,aT);
	      },[aT],"n");
	      var YU=$d(2,[$$GHCziFloat$B,XU],"lvl32");
	      var ZU=$f(1,function(aV){
	       var bV=aV.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(bV.g){
	       case 1:
		var cV=$t(function(){
		 var dV=aV.subtract(goog.math.Long.fromBits(1,0));
		 ZU.J(dV);
		},[aV,ZU],"sat");
		$R(2,[$$GHCziFloat$B,cV],":");break;
	       case 2:
		$A(YU);break;
	       }
	      },[YU],"xs4");
	      ZU.J(eV);break;
	     case 2:
	      $$GHCziBase_map.J($$GHCziShow_intToDigit,aT);break;
	     }
	    },[aT,SU],"sat");
	    $$GHCziCString_unpackAppendCStringzh.J("0.",VU);break;
	   }
	  },[aT]);break;
	 case 2:
	  var fV=QU.v[0];
	  $M(bT,function(gV){
	   var hV=gV.v[0];
	   var iV=hV.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(iV.g){
	   case 1:
	    var jV=$t(function(){
	     var zV=hV.negate();
	     var kV=zV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(kV.g){
	     case 1:
	      var lV=$d(2,[$$GHCziFloat_minExpt,aT],"lvl32");
	      var mV=$f(1,function(nV){
	       var oV=nV.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(oV.g){
	       case 1:
		var pV=$t(function(){
		 var qV=nV.subtract(goog.math.Long.fromBits(1,0));
		 mV.J(qV);
		},[nV,mV],"sat");
		$R(2,[$$GHCziFloat_minExpt,pV],":");break;
	       case 2:
		$A(lV);break;
	       }
	      },[lV],"xs4");
	      mV.C([zV],function(rV){
	       var sV=$t(function(){
		$M(fV,function(tV){
		 var uV=tV.v[0];
		 var vV=uV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(vV.g){
		 case 1:
		  $A(tV);break;
		 case 2:
		  $A($$GHCziFloat_minExpt);break;
		 }
		},[]);
	       },[fV],"sat");
	       $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,sV,rV],function(wV){
		var xV=wV[0],yV=wV[1];
		$$GHCziFloat$N.J(xV,yV);
	       },[]);
	      },[fV]);break;
	     case 2:
	      var AV=$t(function(){
	       $M(fV,function(BV){
		var CV=BV.v[0];
		var DV=CV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(DV.g){
		case 1:
		 $A(BV);break;
		case 2:
		 $A($$GHCziFloat_minExpt);break;
		}
	       },[]);
	      },[fV],"sat");
	      $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,AV,aT],function(EV){
	       var FV=EV[0],GV=EV[1];
	       $$GHCziFloat$N.J(FV,GV);
	      },[]);break;
	     }
	    },[aT,hV,fV],"ds4");
	    var HV=$t(function(){
	     $M(jV,function(IV){
	      var JV=IV.v[1];
	      $M(JV,function(KV){
	       switch(KV.g){
	       case 1:
		$R(1,[],"[]");break;
	       case 2:
		$R(2,[$$GHCziFloat$x,KV],":");break;
	       }
	      },[]);
	     },[]);
	    },[jV],"sat");
	    var LV=$t(function(){
	     $M(jV,function(MV){
	      var NV=MV.v[0];
	      $A(NV);
	     },[]);
	    },[jV],"sat");
	    $R(2,[LV,HV],":");break;
	   case 2:
	    var OV=$t(function(){
	     $M(fV,function(PV){
	      var QV=PV.v[0];
	      var RV=QV.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(RV.g){
	      case 1:
	       var SV=QV.add(hV);
	       $R(1,[SV],"I#");break;
	      case 2:
	       $A(gV);break;
	      }
	     },[hV,gV]);
	    },[hV,fV,gV],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,OV,aT],function(TV){
	     var UV=TV[0],VV=TV[1];
	     $M(UV,function(WV){
	      var XV=WV.v[0];
	      var iW=hV.add(XV);
	      var YV=iW.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(YV.g){
	      case 1:
	       var ZV=$t(function(){
		$$GHCziBase_map.J($$GHCziShow_intToDigit,VV);
	       },[VV],"sat");
	       $$GHCziList_zdwsplitAtzh.C([iW,ZV],function(aW){
		var bW=aW[0],cW=aW[1];
		$M(bW,function(dW){
		 switch(dW.g){
		 case 1:
		  var eW=$t(function(){
		   $M(cW,function(fW){
		    switch(fW.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$x,fW],":");break;
		    }
		   },[]);
		  },[cW],"sat");
		  $R(2,[$$GHCziFloat$B,eW],":");break;
		 case 2:
		  var gW=$t(function(){
		   $M(cW,function(hW){
		    switch(hW.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$x,hW],":");break;
		    }
		   },[]);
		  },[cW],"sat");
		  $$GHCziBase_zpzp.J(dW,gW);break;
		 }
		},[cW]);
	       },[]);break;
	      case 2:
	       var jW=$t(function(){
		$$GHCziBase_map.C([$$GHCziShow_intToDigit,VV],function(kW){
		 switch(kW.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$x,kW],":");break;
		 }
		},[]);
	       },[VV],"sat");
	       $R(2,[$$GHCziFloat$B,jW],":");break;
	      }
	     },[hV,VV]);
	    },[hV]);break;
	   }
	  },[aT,fV]);break;
	 }
	},[aT,bT]);break;
       case 3:
	$M(bT,function(lW){
	 var mW=lW.v[0];
	 var nW=mW.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(nW.g){
	 case 1:
	  var oW=mW.greaterThan(goog.math.Long.fromBits(7,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(oW.g){
	  case 1:
	   ER.J(aT,mW);break;
	  case 2:
	   UP.J(aT,mW);break;
	  }break;
	 case 2:
	  UP.J(aT,mW);break;
	 }
	},[UP,ER,aT]);break;
       }
      },[LP,UP,ER,aT,bT]);
     },[LP,UP,ER],"$wdoFmt");
     var pW=$t(function(){
      var tW= -MP;
      $$GHCziFloat_zdwzdsfloatToDigits1.C([$$GHCziFloat$H,tW],function(qW){
       var rW=qW[0],sW=qW[1];
       YS.J(KP,rW,sW);
      },[YS,KP]);
     },[MP,YS,KP],"a");
     var uW=MP<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(uW.g){
     case 1:
      var $ff=isDoubleNegativeZero(MP);
      var vW=[$$GHCziPrim_realWorldzh,$ff];
      var wW=vW[1];
      $M(wW,function(xW){
       switch(xW.toString()){
       case "0":
	$$GHCziFloat_zdwzdsfloatToDigits1.C([$$GHCziFloat$H,MP],function(yW){
	 var zW=yW[0],AW=yW[1];
	 YS.J(KP,zW,AW);
	},[YS,KP]);break;
       default:
	$R(2,[$$GHCziFloat_zdfShowDouble2,pW],":");
       }
      },[MP,YS,KP,pW]);break;
     case 2:
      $R(2,[$$GHCziFloat_zdfShowDouble2,pW],":");break;
     }break;
    default:
     var TP=MP<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(TP.g){
     case 1:
      $A($$GHCziFloat$I);break;
     case 2:
      $A($$GHCziFloat$J);break;
     }
    }
   },[MP,LP,KP]);break;
  default:
   $A($$GHCziFloat$K);
  }
 },[MP,LP,KP]);
},[],"at libraries/base/GHC/Float.lhs:573:1");
var $$GHCziFloat_zdwzdsformatRealFloat1=$f(3,function(GW,HW,IW){
 var $ff=isFloatNaN(IW);
 var JW=[$$GHCziPrim_realWorldzh,$ff];
 var KW=JW[1];
 $M(KW,function(LW){
  switch(LW.toString()){
  case "0":
   var $ff=isFloatInfinite(IW);
   var MW=[$$GHCziPrim_realWorldzh,$ff];
   var NW=MW[1];
   $M(NW,function(OW){
    switch(OW.toString()){
    case "0":
     var QW=$f(2,function(RW,SW){
      $M(HW,function(TW){
       switch(TW.g){
       case 1:
	$$GHCziBase_map.C([$$GHCziShow_intToDigit,RW],function(UW){
	 switch(UW.g){
	 case 1:
	  $A($$GHCziFloat$O);break;
	 case 2:
	  var VW=UW.v[0],WW=UW.v[1];
	  $M(VW,function(XW){
	   var YW=XW.v[0];
	   var ZW=$t(function(){
	    $M(WW,function(aX){
	     switch(aX.g){
	     case 1:
	      var bX=$t(function(){
	       var cX=$t(function(){
		var dX=SW.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),dX,$$GHCziTypes_ZMZN);
	       },[SW],"sat");
	       $$GHCziCString_unpackAppendCStringzh.J(".0e",cX);
	      },[SW],"sat");
	      $R(2,[XW,bX],":");break;
	     case 2:
	      var eX=$t(function(){
	       var fX=$t(function(){
		var gX=SW.subtract(goog.math.Long.fromBits(1,0));
		$$GHCziShow_itos.J(gX,$$GHCziTypes_ZMZN);
	       },[SW],"sat");
	       var hX=$d(2,[$$GHCziFloat$A,fX],"sat");
	       $$GHCziBase_zpzp.J(aX,hX);
	      },[SW,aX],"sat");
	      var iX=$d(2,[$$GHCziFloat$x,eX],"sat");
	      $R(2,[XW,iX],":");break;
	     }
	    },[XW,SW]);
	   },[WW,XW,SW],"$wfail");
	   $M(YW,function(jX){
	    switch(jX.toString()){
	    case "0":
	     $M(WW,function(kX){
	      switch(kX.g){
	      case 1:
	       $A($$GHCziFloat$y);break;
	      case 2:
	       $A(ZW);break;
	      }
	     },[WW,XW,SW,ZW]);break;
	    default:
	     $A(ZW);
	    }
	   },[WW,XW,SW,ZW]);
	  },[WW,SW]);break;
	 }
	},[SW]);break;
       case 2:
	var lX=TW.v[0];
	var mX=$t(function(){
	 $M(lX,function(nX){
	  var oX=nX.v[0];
	  var pX=oX.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(pX.g){
	  case 1:
	   $A(nX);break;
	  case 2:
	   $A($$GHCziFloat$i);break;
	  }
	 },[]);
	},[lX],"dec'");
	var qX=$t(function(){
	 var rX=$t(function(){
	  $M(mX,function(sX){
	   var tX=sX.v[0];
	   var uX=tX.add(goog.math.Long.fromBits(1,0));
	   $R(1,[uX],"I#");
	  },[]);
	 },[mX],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,rX,RW],function(vX){
	  var wX=vX[0],xX=vX[1];
	  $R(1,[wX,xX],"(,)");
	 },[]);
	},[RW,mX],"ds4");
	var yX=$t(function(){
	 $M(qX,function(zX){
	  var AX=zX.v[0];
	  $A(AX);
	 },[]);
	},[qX],"ei");
	var BX=$t(function(){
	 $M(yX,function(CX){
	  var DX=CX.v[0];
	  var EX=DX.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(EX.g){
	  case 1:
	   $M(qX,function(FX){
	    var GX=FX.v[1];
	    $$GHCziBase_map.C([$$GHCziShow_intToDigit,GX],function(HX){
	     switch(HX.g){
	     case 1:
	      $A($$GHCziFloat$z);break;
	     case 2:
	      var IX=HX.v[0],JX=HX.v[1];
	      $R(1,[IX,JX],"(,)");break;
	     }
	    },[]);
	   },[]);break;
	  case 2:
	   $M(qX,function(KX){
	    var LX=KX.v[1];
	    $M(LX,function(MX){
	     switch(MX.g){
	     case 1:
	      $A($$GHCziList_init2);break;
	     case 2:
	      var NX=MX.v[0],OX=MX.v[1];
	      $$GHCziList_init1.C([NX,OX],function(PX){
	       $$GHCziBase_map.C([$$GHCziShow_intToDigit,PX],function(QX){
		switch(QX.g){
		case 1:
		 $A($$GHCziFloat$z);break;
		case 2:
		 var RX=QX.v[0],SX=QX.v[1];
		 $R(1,[RX,SX],"(,)");break;
		}
	       },[]);
	      },[]);break;
	     }
	    },[]);
	   },[]);break;
	  }
	 },[qX]);
	},[qX,yX],"ds5");
	var TX=$t(function(){
	 $M(BX,function(UX){
	  var VX=UX.v[1];
	  var WX=$t(function(){
	   $M(yX,function(XX){
	    var YX=XX.v[0];
	    var aY=SW.subtract(goog.math.Long.fromBits(1,0));
	    var ZX=aY.add(YX);
	    $$GHCziShow_itos.J(ZX,$$GHCziTypes_ZMZN);
	   },[SW]);
	  },[SW,yX],"sat");
	  var bY=$d(2,[$$GHCziFloat$A,WX],"sat");
	  $$GHCziBase_zpzp.J(VX,bY);
	 },[SW,yX]);
	},[SW,yX,BX],"a");
	$M(RW,function(cY){
	 switch(cY.g){
	 case 1:
	  var dY=$d(2,[$$GHCziFloat$x,TX],"sat");
	  var eY=$t(function(){
	   $M(BX,function(fY){
	    var gY=fY.v[0];
	    $A(gY);
	   },[]);
	  },[BX],"sat");
	  $R(2,[eY,dY],":");break;
	 case 2:
	  var hY=cY.v[0],iY=cY.v[1];
	  $M(hY,function(jY){
	   var kY=jY.v[0];
	   $M(kY,function(lY){
	    switch(lY.toString()){
	    case "0":
	     $M(iY,function(qY){
	      switch(qY.g){
	      case 1:
	       var rY=$t(function(){
		$M(mX,function(sY){
		 var tY=sY.v[0];
		 var uY=tY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(uY.g){
		 case 1:
		  $$GHCziFloat$T.J($$GHCziFloat$P,tY);break;
		 case 2:
		  $A($$GHCziFloat$L);break;
		 }
		},[]);
	       },[mX],"sat");
	       var vY=$d(2,[$$GHCziFloat$x,rY],"sat");
	       $R(2,[$$GHCziFloat$B,vY],":");break;
	      case 2:
	       var wY=$d(2,[$$GHCziFloat$x,TX],"sat");
	       var xY=$t(function(){
		$M(BX,function(yY){
		 var zY=yY.v[0];
		 $A(zY);
		},[]);
	       },[BX],"sat");
	       $R(2,[xY,wY],":");break;
	      }
	     },[mX,BX,TX]);break;
	    default:
	     var mY=$d(2,[$$GHCziFloat$x,TX],"sat");
	     var nY=$t(function(){
	      $M(BX,function(oY){
	       var pY=oY.v[0];
	       $A(pY);
	      },[]);
	     },[BX],"sat");
	     $R(2,[nY,mY],":");
	    }
	   },[mX,BX,TX,iY]);
	  },[mX,BX,TX,iY]);break;
	 }
	},[mX,BX,TX]);break;
       }
      },[RW,SW]);
     },[HW],"$s$wdoFmt");
     var AY=$f(2,function(BY,CY){
      $M(HW,function(DY){
       switch(DY.g){
       case 1:
	var EY=CY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(EY.g){
	case 1:
	 var FY=$t(function(){
	  $$GHCziBase_map.J($$GHCziShow_intToDigit,BY);
	 },[BY],"sat");
	 $$GHCziFloat$S.J(CY,$$GHCziTypes_ZMZN,FY);break;
	case 2:
	 var GY=$t(function(){
	  var PY=CY.negate();
	  var HY=PY.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(HY.g){
	  case 1:
	   var IY=$t(function(){
	    $$GHCziBase_map.J($$GHCziShow_intToDigit,BY);
	   },[BY],"n");
	   var JY=$d(2,[$$GHCziFloat$B,IY],"lvl32");
	   var KY=$f(1,function(LY){
	    var MY=LY.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(MY.g){
	    case 1:
	     var NY=$t(function(){
	      var OY=LY.subtract(goog.math.Long.fromBits(1,0));
	      KY.J(OY);
	     },[LY,KY],"sat");
	     $R(2,[$$GHCziFloat$B,NY],":");break;
	    case 2:
	     $A(JY);break;
	    }
	   },[JY],"xs4");
	   KY.J(PY);break;
	  case 2:
	   $$GHCziBase_map.J($$GHCziShow_intToDigit,BY);break;
	  }
	 },[CY,BY],"sat");
	 $$GHCziCString_unpackAppendCStringzh.J("0.",GY);break;
	}break;
       case 2:
	var QY=DY.v[0];
	var RY=CY.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(RY.g){
	case 1:
	 var SY=$t(function(){
	  var iZ=CY.negate();
	  var TY=iZ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(TY.g){
	  case 1:
	   var UY=$d(2,[$$GHCziFloat_minExpt,BY],"lvl32");
	   var VY=$f(1,function(WY){
	    var XY=WY.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(XY.g){
	    case 1:
	     var YY=$t(function(){
	      var ZY=WY.subtract(goog.math.Long.fromBits(1,0));
	      VY.J(ZY);
	     },[WY,VY],"sat");
	     $R(2,[$$GHCziFloat_minExpt,YY],":");break;
	    case 2:
	     $A(UY);break;
	    }
	   },[UY],"xs4");
	   VY.C([iZ],function(aZ){
	    var bZ=$t(function(){
	     $M(QY,function(cZ){
	      var dZ=cZ.v[0];
	      var eZ=dZ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(eZ.g){
	      case 1:
	       $A(cZ);break;
	      case 2:
	       $A($$GHCziFloat_minExpt);break;
	      }
	     },[]);
	    },[QY],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,bZ,aZ],function(fZ){
	     var gZ=fZ[0],hZ=fZ[1];
	     $$GHCziFloat$U.J(gZ,hZ);
	    },[]);
	   },[QY]);break;
	  case 2:
	   var jZ=$t(function(){
	    $M(QY,function(kZ){
	     var lZ=kZ.v[0];
	     var mZ=lZ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(mZ.g){
	     case 1:
	      $A(kZ);break;
	     case 2:
	      $A($$GHCziFloat_minExpt);break;
	     }
	    },[]);
	   },[QY],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,jZ,BY],function(nZ){
	    var oZ=nZ[0],pZ=nZ[1];
	    $$GHCziFloat$U.J(oZ,pZ);
	   },[]);break;
	  }
	 },[CY,BY,QY],"ds4");
	 var qZ=$t(function(){
	  $M(SY,function(rZ){
	   var sZ=rZ.v[1];
	   $M(sZ,function(tZ){
	    switch(tZ.g){
	    case 1:
	     $R(1,[],"[]");break;
	    case 2:
	     $R(2,[$$GHCziFloat$x,tZ],":");break;
	    }
	   },[]);
	  },[]);
	 },[SY],"sat");
	 var uZ=$t(function(){
	  $M(SY,function(vZ){
	   var wZ=vZ.v[0];
	   $A(wZ);
	  },[]);
	 },[SY],"sat");
	 $R(2,[uZ,qZ],":");break;
	case 2:
	 var xZ=$t(function(){
	  $M(QY,function(yZ){
	   var zZ=yZ.v[0];
	   var AZ=zZ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(AZ.g){
	   case 1:
	    var BZ=zZ.add(CY);
	    $R(1,[BZ],"I#");break;
	   case 2:
	    $R(1,[CY],"I#");break;
	   }
	  },[CY]);
	 },[CY,QY],"sat");
	 $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,xZ,BY],function(CZ){
	  var DZ=CZ[0],EZ=CZ[1];
	  $M(DZ,function(FZ){
	   var GZ=FZ.v[0];
	   var RZ=CY.add(GZ);
	   var HZ=RZ.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(HZ.g){
	   case 1:
	    var IZ=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,EZ);
	    },[EZ],"sat");
	    $$GHCziList_zdwsplitAtzh.C([RZ,IZ],function(JZ){
	     var KZ=JZ[0],LZ=JZ[1];
	     $M(KZ,function(MZ){
	      switch(MZ.g){
	      case 1:
	       var NZ=$t(function(){
		$M(LZ,function(OZ){
		 switch(OZ.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$x,OZ],":");break;
		 }
		},[]);
	       },[LZ],"sat");
	       $R(2,[$$GHCziFloat$B,NZ],":");break;
	      case 2:
	       var PZ=$t(function(){
		$M(LZ,function(QZ){
		 switch(QZ.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$x,QZ],":");break;
		 }
		},[]);
	       },[LZ],"sat");
	       $$GHCziBase_zpzp.J(MZ,PZ);break;
	      }
	     },[LZ]);
	    },[]);break;
	   case 2:
	    var SZ=$t(function(){
	     $$GHCziBase_map.C([$$GHCziShow_intToDigit,EZ],function(TZ){
	      switch(TZ.g){
	      case 1:
	       $R(1,[],"[]");break;
	      case 2:
	       $R(2,[$$GHCziFloat$x,TZ],":");break;
	      }
	     },[]);
	    },[EZ],"sat");
	    $R(2,[$$GHCziFloat$B,SZ],":");break;
	   }
	  },[CY,EZ]);
	 },[CY]);break;
	}break;
       }
      },[CY,BY]);
     },[HW],"$s$wdoFmt1");
     var UZ=$f(3,function(VZ,WZ,XZ){
      $M(VZ,function(YZ){
       switch(YZ.g){
       case 1:
	$M(HW,function(ZZ){
	 switch(ZZ.g){
	 case 1:
	  $$GHCziBase_map.C([$$GHCziShow_intToDigit,WZ],function(a10){
	   switch(a10.g){
	   case 1:
	    $A($$GHCziFloat$O);break;
	   case 2:
	    var b10=a10.v[0],c10=a10.v[1];
	    $M(b10,function(d10){
	     var e10=d10.v[0];
	     var f10=$t(function(){
	      $M(c10,function(g10){
	       switch(g10.g){
	       case 1:
		var h10=$t(function(){
		 var i10=$t(function(){
		  $M(XZ,function(j10){
		   var k10=j10.v[0];
		   var l10=k10.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),l10,$$GHCziTypes_ZMZN);
		  },[]);
		 },[XZ],"sat");
		 $$GHCziCString_unpackAppendCStringzh.J(".0e",i10);
		},[XZ],"sat");
		$R(2,[d10,h10],":");break;
	       case 2:
		var m10=$t(function(){
		 var n10=$t(function(){
		  $M(XZ,function(o10){
		   var p10=o10.v[0];
		   var q10=p10.subtract(goog.math.Long.fromBits(1,0));
		   $$GHCziShow_itos.J(q10,$$GHCziTypes_ZMZN);
		  },[]);
		 },[XZ],"sat");
		 var r10=$d(2,[$$GHCziFloat$A,n10],"sat");
		 $$GHCziBase_zpzp.J(g10,r10);
		},[XZ,g10],"sat");
		var s10=$d(2,[$$GHCziFloat$x,m10],"sat");
		$R(2,[d10,s10],":");break;
	       }
	      },[d10,XZ]);
	     },[c10,d10,XZ],"$wfail");
	     $M(e10,function(t10){
	      switch(t10.toString()){
	      case "0":
	       $M(c10,function(u10){
		switch(u10.g){
		case 1:
		 $A($$GHCziFloat$y);break;
		case 2:
		 $A(f10);break;
		}
	       },[c10,d10,XZ,f10]);break;
	      default:
	       $A(f10);
	      }
	     },[c10,d10,XZ,f10]);
	    },[c10,XZ]);break;
	   }
	  },[XZ]);break;
	 case 2:
	  var v10=ZZ.v[0];
	  var w10=$t(function(){
	   $M(v10,function(x10){
	    var y10=x10.v[0];
	    var z10=y10.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(z10.g){
	    case 1:
	     $A(x10);break;
	    case 2:
	     $A($$GHCziFloat$i);break;
	    }
	   },[]);
	  },[v10],"dec'");
	  var A10=$t(function(){
	   var B10=$t(function(){
	    $M(w10,function(C10){
	     var D10=C10.v[0];
	     var E10=D10.add(goog.math.Long.fromBits(1,0));
	     $R(1,[E10],"I#");
	    },[]);
	   },[w10],"sat");
	   $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,B10,WZ],function(F10){
	    var G10=F10[0],H10=F10[1];
	    $R(1,[G10,H10],"(,)");
	   },[]);
	  },[WZ,w10],"ds4");
	  var I10=$t(function(){
	   $M(A10,function(J10){
	    var K10=J10.v[0];
	    $A(K10);
	   },[]);
	  },[A10],"ei");
	  var L10=$t(function(){
	   $M(I10,function(M10){
	    var N10=M10.v[0];
	    var O10=N10.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(O10.g){
	    case 1:
	     $M(A10,function(P10){
	      var Q10=P10.v[1];
	      $$GHCziBase_map.C([$$GHCziShow_intToDigit,Q10],function(R10){
	       switch(R10.g){
	       case 1:
		$A($$GHCziFloat$z);break;
	       case 2:
		var S10=R10.v[0],T10=R10.v[1];
		$R(1,[S10,T10],"(,)");break;
	       }
	      },[]);
	     },[]);break;
	    case 2:
	     $M(A10,function(U10){
	      var V10=U10.v[1];
	      $M(V10,function(W10){
	       switch(W10.g){
	       case 1:
		$A($$GHCziList_init2);break;
	       case 2:
		var X10=W10.v[0],Y10=W10.v[1];
		$$GHCziList_init1.C([X10,Y10],function(Z10){
		 $$GHCziBase_map.C([$$GHCziShow_intToDigit,Z10],function(a11){
		  switch(a11.g){
		  case 1:
		   $A($$GHCziFloat$z);break;
		  case 2:
		   var b11=a11.v[0],c11=a11.v[1];
		   $R(1,[b11,c11],"(,)");break;
		  }
		 },[]);
		},[]);break;
	       }
	      },[]);
	     },[]);break;
	    }
	   },[A10]);
	  },[A10,I10],"ds5");
	  var d11=$t(function(){
	   $M(L10,function(e11){
	    var f11=e11.v[1];
	    var g11=$t(function(){
	     $M(XZ,function(h11){
	      var i11=h11.v[0];
	      $M(I10,function(j11){
	       var k11=j11.v[0];
	       var m11=i11.subtract(goog.math.Long.fromBits(1,0));
	       var l11=m11.add(k11);
	       $$GHCziShow_itos.J(l11,$$GHCziTypes_ZMZN);
	      },[i11]);
	     },[I10]);
	    },[XZ,I10],"sat");
	    var n11=$d(2,[$$GHCziFloat$A,g11],"sat");
	    $$GHCziBase_zpzp.J(f11,n11);
	   },[XZ,I10]);
	  },[XZ,I10,L10],"a");
	  $M(WZ,function(o11){
	   switch(o11.g){
	   case 1:
	    var p11=$d(2,[$$GHCziFloat$x,d11],"sat");
	    var q11=$t(function(){
	     $M(L10,function(r11){
	      var s11=r11.v[0];
	      $A(s11);
	     },[]);
	    },[L10],"sat");
	    $R(2,[q11,p11],":");break;
	   case 2:
	    var t11=o11.v[0],u11=o11.v[1];
	    $M(t11,function(v11){
	     var w11=v11.v[0];
	     $M(w11,function(x11){
	      switch(x11.toString()){
	      case "0":
	       $M(u11,function(C11){
		switch(C11.g){
		case 1:
		 var D11=$t(function(){
		  $M(w10,function(E11){
		   var F11=E11.v[0];
		   var G11=F11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(G11.g){
		   case 1:
		    $$GHCziFloat$T.J($$GHCziFloat$P,F11);break;
		   case 2:
		    $A($$GHCziFloat$L);break;
		   }
		  },[]);
		 },[w10],"sat");
		 var H11=$d(2,[$$GHCziFloat$x,D11],"sat");
		 $R(2,[$$GHCziFloat$B,H11],":");break;
		case 2:
		 var I11=$d(2,[$$GHCziFloat$x,d11],"sat");
		 var J11=$t(function(){
		  $M(L10,function(K11){
		   var L11=K11.v[0];
		   $A(L11);
		  },[]);
		 },[L10],"sat");
		 $R(2,[J11,I11],":");break;
		}
	       },[w10,L10,d11]);break;
	      default:
	       var y11=$d(2,[$$GHCziFloat$x,d11],"sat");
	       var z11=$t(function(){
		$M(L10,function(A11){
		 var B11=A11.v[0];
		 $A(B11);
		},[]);
	       },[L10],"sat");
	       $R(2,[z11,y11],":");
	      }
	     },[w10,L10,d11,u11]);
	    },[w10,L10,d11,u11]);break;
	   }
	  },[w10,L10,d11]);break;
	 }
	},[WZ,XZ]);break;
       case 2:
	$M(HW,function(M11){
	 switch(M11.g){
	 case 1:
	  $M(XZ,function(N11){
	   var O11=N11.v[0];
	   var P11=O11.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(P11.g){
	   case 1:
	    var Q11=$t(function(){
	     $$GHCziBase_map.J($$GHCziShow_intToDigit,WZ);
	    },[WZ],"sat");
	    $$GHCziFloat$S.J(O11,$$GHCziTypes_ZMZN,Q11);break;
	   case 2:
	    var R11=$t(function(){
	     var a12=O11.negate();
	     var S11=a12.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(S11.g){
	     case 1:
	      var T11=$t(function(){
	       $$GHCziBase_map.J($$GHCziShow_intToDigit,WZ);
	      },[WZ],"n");
	      var U11=$d(2,[$$GHCziFloat$B,T11],"lvl32");
	      var V11=$f(1,function(W11){
	       var X11=W11.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(X11.g){
	       case 1:
		var Y11=$t(function(){
		 var Z11=W11.subtract(goog.math.Long.fromBits(1,0));
		 V11.J(Z11);
		},[W11,V11],"sat");
		$R(2,[$$GHCziFloat$B,Y11],":");break;
	       case 2:
		$A(U11);break;
	       }
	      },[U11],"xs4");
	      V11.J(a12);break;
	     case 2:
	      $$GHCziBase_map.J($$GHCziShow_intToDigit,WZ);break;
	     }
	    },[WZ,O11],"sat");
	    $$GHCziCString_unpackAppendCStringzh.J("0.",R11);break;
	   }
	  },[WZ]);break;
	 case 2:
	  var b12=M11.v[0];
	  $M(XZ,function(c12){
	   var d12=c12.v[0];
	   var e12=d12.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(e12.g){
	   case 1:
	    var f12=$t(function(){
	     var v12=d12.negate();
	     var g12=v12.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(g12.g){
	     case 1:
	      var h12=$d(2,[$$GHCziFloat_minExpt,WZ],"lvl32");
	      var i12=$f(1,function(j12){
	       var k12=j12.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(k12.g){
	       case 1:
		var l12=$t(function(){
		 var m12=j12.subtract(goog.math.Long.fromBits(1,0));
		 i12.J(m12);
		},[j12,i12],"sat");
		$R(2,[$$GHCziFloat_minExpt,l12],":");break;
	       case 2:
		$A(h12);break;
	       }
	      },[h12],"xs4");
	      i12.C([v12],function(n12){
	       var o12=$t(function(){
		$M(b12,function(p12){
		 var q12=p12.v[0];
		 var r12=q12.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(r12.g){
		 case 1:
		  $A(p12);break;
		 case 2:
		  $A($$GHCziFloat_minExpt);break;
		 }
		},[]);
	       },[b12],"sat");
	       $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,o12,n12],function(s12){
		var t12=s12[0],u12=s12[1];
		$$GHCziFloat$U.J(t12,u12);
	       },[]);
	      },[b12]);break;
	     case 2:
	      var w12=$t(function(){
	       $M(b12,function(x12){
		var y12=x12.v[0];
		var z12=y12.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(z12.g){
		case 1:
		 $A(x12);break;
		case 2:
		 $A($$GHCziFloat_minExpt);break;
		}
	       },[]);
	      },[b12],"sat");
	      $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,w12,WZ],function(A12){
	       var B12=A12[0],C12=A12[1];
	       $$GHCziFloat$U.J(B12,C12);
	      },[]);break;
	     }
	    },[WZ,d12,b12],"ds4");
	    var D12=$t(function(){
	     $M(f12,function(E12){
	      var F12=E12.v[1];
	      $M(F12,function(G12){
	       switch(G12.g){
	       case 1:
		$R(1,[],"[]");break;
	       case 2:
		$R(2,[$$GHCziFloat$x,G12],":");break;
	       }
	      },[]);
	     },[]);
	    },[f12],"sat");
	    var H12=$t(function(){
	     $M(f12,function(I12){
	      var J12=I12.v[0];
	      $A(J12);
	     },[]);
	    },[f12],"sat");
	    $R(2,[H12,D12],":");break;
	   case 2:
	    var K12=$t(function(){
	     $M(b12,function(L12){
	      var M12=L12.v[0];
	      var N12=M12.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(N12.g){
	      case 1:
	       var O12=M12.add(d12);
	       $R(1,[O12],"I#");break;
	      case 2:
	       $A(c12);break;
	      }
	     },[d12,c12]);
	    },[d12,b12,c12],"sat");
	    $$GHCziFloat_zdwroundTo.C([$$GHCziFloat$u,K12,WZ],function(P12){
	     var Q12=P12[0],R12=P12[1];
	     $M(Q12,function(S12){
	      var T12=S12.v[0];
	      var e13=d12.add(T12);
	      var U12=e13.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(U12.g){
	      case 1:
	       var V12=$t(function(){
		$$GHCziBase_map.J($$GHCziShow_intToDigit,R12);
	       },[R12],"sat");
	       $$GHCziList_zdwsplitAtzh.C([e13,V12],function(W12){
		var X12=W12[0],Y12=W12[1];
		$M(X12,function(Z12){
		 switch(Z12.g){
		 case 1:
		  var a13=$t(function(){
		   $M(Y12,function(b13){
		    switch(b13.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$x,b13],":");break;
		    }
		   },[]);
		  },[Y12],"sat");
		  $R(2,[$$GHCziFloat$B,a13],":");break;
		 case 2:
		  var c13=$t(function(){
		   $M(Y12,function(d13){
		    switch(d13.g){
		    case 1:
		     $R(1,[],"[]");break;
		    case 2:
		     $R(2,[$$GHCziFloat$x,d13],":");break;
		    }
		   },[]);
		  },[Y12],"sat");
		  $$GHCziBase_zpzp.J(Z12,c13);break;
		 }
		},[Y12]);
	       },[]);break;
	      case 2:
	       var f13=$t(function(){
		$$GHCziBase_map.C([$$GHCziShow_intToDigit,R12],function(g13){
		 switch(g13.g){
		 case 1:
		  $R(1,[],"[]");break;
		 case 2:
		  $R(2,[$$GHCziFloat$x,g13],":");break;
		 }
		},[]);
	       },[R12],"sat");
	       $R(2,[$$GHCziFloat$B,f13],":");break;
	      }
	     },[d12,R12]);
	    },[d12]);break;
	   }
	  },[WZ,b12]);break;
	 }
	},[WZ,XZ]);break;
       case 3:
	$M(XZ,function(h13){
	 var i13=h13.v[0];
	 var j13=i13.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(j13.g){
	 case 1:
	  var k13=i13.greaterThan(goog.math.Long.fromBits(7,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(k13.g){
	  case 1:
	   AY.J(WZ,i13);break;
	  case 2:
	   QW.J(WZ,i13);break;
	  }break;
	 case 2:
	  QW.J(WZ,i13);break;
	 }
	},[QW,AY,WZ]);break;
       }
      },[HW,QW,AY,WZ,XZ]);
     },[HW,QW,AY],"$wdoFmt");
     var l13=$t(function(){
      var p13= -IW;
      $$GHCziFloat_zdwzdsfloatToDigits.C([$$GHCziFloat$H,p13],function(m13){
       var n13=m13[0],o13=m13[1];
       UZ.J(GW,n13,o13);
      },[UZ,GW]);
     },[IW,UZ,GW],"a");
     var q13=IW<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(q13.g){
     case 1:
      var $ff=isFloatNegativeZero(IW);
      var r13=[$$GHCziPrim_realWorldzh,$ff];
      var s13=r13[1];
      $M(s13,function(t13){
       switch(t13.toString()){
       case "0":
	$$GHCziFloat_zdwzdsfloatToDigits.C([$$GHCziFloat$H,IW],function(u13){
	 var v13=u13[0],w13=u13[1];
	 UZ.J(GW,v13,w13);
	},[UZ,GW]);break;
       default:
	$R(2,[$$GHCziFloat_zdfShowDouble2,l13],":");
       }
      },[IW,UZ,GW,l13]);break;
     case 2:
      $R(2,[$$GHCziFloat_zdfShowDouble2,l13],":");break;
     }break;
    default:
     var PW=IW<0.0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(PW.g){
     case 1:
      $A($$GHCziFloat$I);break;
     case 2:
      $A($$GHCziFloat$J);break;
     }
    }
   },[IW,HW,GW]);break;
  default:
   $A($$GHCziFloat$K);
  }
 },[IW,HW,GW]);
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
var $$GHCziFloat$i=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl6");
var $$GHCziFloat$k=$F(3,function(e1f,f1f,g1f){
 var h1f=$d(1,[f1f,g1f],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,h1f,e1f,$$GHCziFloat$c);
},"poly_$wa");
var $$GHCziFloat$l=$F(3,function(i1f,j1f,k1f){
 var l1f=$d(1,[j1f,k1f],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,l1f,i1f,$$GHCziFloat$c);
},"poly_$wa1");
var $$GHCziFloat$m=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl8");
var $$GHCziFloat$n=$F(1,function(m1f){
 var n1f=m1f.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(n1f.g){
 case 1:
  var o1f=$t(function(){
   var p1f=m1f.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat$n.J(p1f);
  },[m1f],"sat");
  $R(2,[$$GHCziFloat_minExpt,o1f],":");break;
 case 2:
  $A($$GHCziFloat$m);break;
 }
},"xs");
var $$GHCziFloat$o=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl9");
var $$GHCziFloat$p=$T(function(){
 $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble6,goog.math.Long.fromBits(52,0));
},"lvl10");
var $$GHCziFloat$q=$D(1,function(){
 $r([goog.math.Long.fromBits(4,0)]);
},"lvl11");
var $$GHCziFloat$r=$D(2,function(){
 $r([$$GHCziFloat_minExpt,$$GHCziTypes_ZMZN]);
},"lvl12");
var $$GHCziFloat$s=$T(function(){
 $$GHCziFloat_zdwexpt.J($$GHCziFloat_zdfRealFloatDouble6,goog.math.Long.fromBits(23,0));
},"lvl13");
var $$GHCziFloat$u=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"at libraries/base/GHC/Float.lhs:579:3");
var $$GHCziFloat$v=$T(function(){
 $$GHCziCString_unpackCStringzh.J("formatRealFloat/doFmt/FFExponent: []");
},"lvl15");
var $$GHCziFloat$w=$T(function(){
 $$GHCziErr_error.J($$GHCziFloat$v);
},"lvl16");
var $$GHCziFloat$x=$D(1,function(){
 $r(["."]);
},"lvl17");
var $$GHCziFloat$y=$T(function(){
 $$GHCziCString_unpackCStringzh.J("0.0e0");
},"lvl18");
var $$GHCziFloat$z=$T(function(){
 $$ControlziExceptionziBase_irrefutPatError.J("libraries/base/GHC/Float.lhs:603:12-70|(d : ds')");
},"lvl19");
var $$GHCziFloat$A=$D(1,function(){
 $r(["e"]);
},"lvl20");
var $$GHCziFloat$B=$D(1,function(){
 $r(["0"]);
},"lvl21");
var $$GHCziFloat$C=$D(2,function(){
 $r([$$GHCziFloat$B,$$GHCziFloat$C]);
},"xs1");
var $$GHCziFloat$D=$D(2,function(){
 $r([$$GHCziFloat$B,$$GHCziTypes_ZMZN]);
},"lvl22");
var $$GHCziFloat$E=$F(2,function(q1f,r1f){
 $M(q1f,function(s1f){
  switch(s1f.toString()){
  case "0":
   $$GHCziList_reverse1.C([r1f,$$GHCziTypes_ZMZN],function(v1f){
    switch(v1f.g){
    case 1:
     var w1f=$d(2,[$$GHCziFloat$x,$$GHCziFloat$D],"sat");
     $R(2,[$$GHCziFloat$B,w1f],":");break;
    case 2:
     var x1f=$d(2,[$$GHCziFloat$x,$$GHCziFloat$D],"sat");
     $$GHCziBase_zpzp.J(v1f,x1f);break;
    }
   },[]);break;
  default:
   var t1f=$d(2,[$$GHCziFloat$B,r1f],"sat");
   var u1f=s1f.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat$E.J(u1f,t1f);
  }
 },[r1f]);
},"at libraries/base/GHC/Float.lhs:615:17");
var $$GHCziFloat$F=$F(3,function(y1f,z1f,A1f){
 $M(y1f,function(B1f){
  switch(B1f.toString()){
  case "0":
   $$GHCziList_reverse1.C([z1f,$$GHCziTypes_ZMZN],function(J1f){
    switch(J1f.g){
    case 1:
     var K1f=$t(function(){
      $M(A1f,function(L1f){
       switch(L1f.g){
       case 1:
	$A($$GHCziFloat$D);break;
       case 2:
	$A(L1f);break;
       }
      },[]);
     },[A1f],"sat");
     var M1f=$d(2,[$$GHCziFloat$x,K1f],"sat");
     $R(2,[$$GHCziFloat$B,M1f],":");break;
    case 2:
     var N1f=$t(function(){
      $M(A1f,function(O1f){
       switch(O1f.g){
       case 1:
	$A($$GHCziFloat$D);break;
       case 2:
	$A(O1f);break;
       }
      },[]);
     },[A1f],"sat");
     var P1f=$d(2,[$$GHCziFloat$x,N1f],"sat");
     $$GHCziBase_zpzp.J(J1f,P1f);break;
    }
   },[A1f]);break;
  default:
   $M(A1f,function(C1f){
    switch(C1f.g){
    case 1:
     var D1f=$d(2,[$$GHCziFloat$B,z1f],"sat");
     var E1f=B1f.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$E.J(E1f,D1f);break;
    case 2:
     var F1f=C1f.v[0],G1f=C1f.v[1];
     var H1f=$d(2,[F1f,z1f],"sat");
     var I1f=B1f.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$F.J(I1f,H1f,G1f);break;
    }
   },[B1f,z1f]);
  }
 },[A1f,z1f]);
},"at libraries/base/GHC/Float.lhs:615:17");
var $$GHCziFloat$G=$T(function(){
 $$ControlziExceptionziBase_irrefutPatError.J("libraries/base/GHC/Float.lhs:631:11-64|d : ds'");
},"lvl23");
var $$GHCziFloat$H=$T(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(10,0));
},"lvl24");
var $$GHCziFloat$I=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Infinity");
},"lvl25");
var $$GHCziFloat$J=$T(function(){
 $$GHCziCString_unpackCStringzh.J("-Infinity");
},"lvl26");
var $$GHCziFloat$K=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NaN");
},"lvl27");
var $$GHCziFloat$L=$T(function(){
 $$GHCziCString_unpackCStringzh.J("e0");
},"nil");
var $$GHCziFloat$M=$F(2,function(Q1f,R1f){
 $M(Q1f,function(S1f){
  switch(S1f.g){
  case 1:
   $A($$GHCziFloat$L);break;
  case 2:
   var T1f=S1f.v[0],U1f=S1f.v[1];
   var V1f=R1f.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(V1f.g){
   case 1:
    var W1f=$t(function(){
     var X1f=R1f.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$M.J(U1f,X1f);
    },[R1f,U1f],"sat");
    $R(2,[T1f,W1f],":");break;
   case 2:
    $R(2,[T1f,$$GHCziFloat$L],":");break;
   }break;
  }
 },[R1f]);
},"go");
var $$GHCziFloat$N=$F(2,function(Y1f,Z1f){
 $M(Y1f,function(a1g){
  var b1g=a1g.v[0];
  var c1g=b1g.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(c1g.g){
  case 1:
   var d1g=$d(2,[$$GHCziFloat_minExpt,Z1f],"sat");
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,d1g],function(e1g){
    switch(e1g.g){
    case 1:
     $A($$GHCziFloat$G);break;
    case 2:
     var f1g=e1g.v[0],g1g=e1g.v[1];
     $R(1,[f1g,g1g],"(,)");break;
    }
   },[]);break;
  case 2:
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,Z1f],function(h1g){
    switch(h1g.g){
    case 1:
     $A($$GHCziFloat$G);break;
    case 2:
     var i1g=h1g.v[0],j1g=h1g.v[1];
     $R(1,[i1g,j1g],"(,)");break;
    }
   },[]);break;
  }
 },[Z1f]);
},"$j");
var $$GHCziFloat$O=$T(function(){
 $$GHCziErr_error.J($$GHCziFloat$v);
},"lvl28");
var $$GHCziFloat$P=$D(2,function(){
 $r([$$GHCziFloat$B,$$GHCziFloat$P]);
},"xs2");
var $$GHCziFloat$Q=$D(2,function(){
 $r([$$GHCziFloat$B,$$GHCziTypes_ZMZN]);
},"lvl29");
var $$GHCziFloat$R=$F(2,function(k1g,l1g){
 $M(k1g,function(m1g){
  switch(m1g.toString()){
  case "0":
   $$GHCziList_reverse1.C([l1g,$$GHCziTypes_ZMZN],function(p1g){
    switch(p1g.g){
    case 1:
     var q1g=$d(2,[$$GHCziFloat$x,$$GHCziFloat$Q],"sat");
     $R(2,[$$GHCziFloat$B,q1g],":");break;
    case 2:
     var r1g=$d(2,[$$GHCziFloat$x,$$GHCziFloat$Q],"sat");
     $$GHCziBase_zpzp.J(p1g,r1g);break;
    }
   },[]);break;
  default:
   var n1g=$d(2,[$$GHCziFloat$B,l1g],"sat");
   var o1g=m1g.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziFloat$R.J(o1g,n1g);
  }
 },[l1g]);
},"at libraries/base/GHC/Float.lhs:615:17");
var $$GHCziFloat$S=$F(3,function(s1g,t1g,u1g){
 $M(s1g,function(v1g){
  switch(v1g.toString()){
  case "0":
   $$GHCziList_reverse1.C([t1g,$$GHCziTypes_ZMZN],function(D1g){
    switch(D1g.g){
    case 1:
     var E1g=$t(function(){
      $M(u1g,function(F1g){
       switch(F1g.g){
       case 1:
	$A($$GHCziFloat$Q);break;
       case 2:
	$A(F1g);break;
       }
      },[]);
     },[u1g],"sat");
     var G1g=$d(2,[$$GHCziFloat$x,E1g],"sat");
     $R(2,[$$GHCziFloat$B,G1g],":");break;
    case 2:
     var H1g=$t(function(){
      $M(u1g,function(I1g){
       switch(I1g.g){
       case 1:
	$A($$GHCziFloat$Q);break;
       case 2:
	$A(I1g);break;
       }
      },[]);
     },[u1g],"sat");
     var J1g=$d(2,[$$GHCziFloat$x,H1g],"sat");
     $$GHCziBase_zpzp.J(D1g,J1g);break;
    }
   },[u1g]);break;
  default:
   $M(u1g,function(w1g){
    switch(w1g.g){
    case 1:
     var x1g=$d(2,[$$GHCziFloat$B,t1g],"sat");
     var y1g=v1g.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$R.J(y1g,x1g);break;
    case 2:
     var z1g=w1g.v[0],A1g=w1g.v[1];
     var B1g=$d(2,[z1g,t1g],"sat");
     var C1g=v1g.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$S.J(C1g,B1g,A1g);break;
    }
   },[v1g,t1g]);
  }
 },[u1g,t1g]);
},"at libraries/base/GHC/Float.lhs:615:17");
var $$GHCziFloat$T=$F(2,function(K1g,L1g){
 $M(K1g,function(M1g){
  switch(M1g.g){
  case 1:
   $A($$GHCziFloat$L);break;
  case 2:
   var N1g=M1g.v[0],O1g=M1g.v[1];
   var P1g=L1g.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(P1g.g){
   case 1:
    var Q1g=$t(function(){
     var R1g=L1g.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziFloat$T.J(O1g,R1g);
    },[L1g,O1g],"sat");
    $R(2,[N1g,Q1g],":");break;
   case 2:
    $R(2,[N1g,$$GHCziFloat$L],":");break;
   }break;
  }
 },[L1g]);
},"go1");
var $$GHCziFloat$U=$F(2,function(S1g,T1g){
 $M(S1g,function(U1g){
  var V1g=U1g.v[0];
  var W1g=V1g.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(W1g.g){
  case 1:
   var X1g=$d(2,[$$GHCziFloat_minExpt,T1g],"sat");
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,X1g],function(Y1g){
    switch(Y1g.g){
    case 1:
     $A($$GHCziFloat$G);break;
    case 2:
     var Z1g=Y1g.v[0],a1h=Y1g.v[1];
     $R(1,[Z1g,a1h],"(,)");break;
    }
   },[]);break;
  case 2:
   $$GHCziBase_map.C([$$GHCziShow_intToDigit,T1g],function(b1h){
    switch(b1h.g){
    case 1:
     $A($$GHCziFloat$G);break;
    case 2:
     var c1h=b1h.v[0],d1h=b1h.v[1];
     $R(1,[c1h,d1h],"(,)");break;
    }
   },[]);break;
  }
 },[T1g]);
},"$j1");
var $$GHCziForeign_zdwa=$f(3,function(f,g,h){
 var i=$f(2,function(j,k){
  var l=$hs_readInt8OffAddrzh(g,j,k);
  var m=l[0],n=l[1];
  $M(n,function(o){
   switch(o.toString()){
   case "0":
    var q=$d(1,[j],"sat");
    $r([m,q]);break;
   default:
    var p=j.add(goog.math.Long.fromBits(1,0));
    i.J(p,m);
   }
  },[j,i,m]);
 },[g],"$sa");
 i.C([goog.math.Long.fromBits(0,0),h],function(r){
  var s=r[0],t=r[1];
  $M(f,function(u){
   var v=u.v[1];
   var w=$hs_getMaskingStatezh(s);
   var x=w[0],y=w[1];
   var z=$f(2,function(A,B){
    var C=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,B);
    var D=C[0],E=C[1];
    $M(t,function(F){
     var G=F.v[0];
     var H=$f(1,function(I){
      var n3=I.multiply(goog.math.Long.fromBits(4,0));
      var J=n3.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(J.g){
      case 1:
       var K=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,D);
       var L=K[0],M=K[1];
       var N=$hs_newPinnedByteArrayzh(n3,L);
       var O=N[0],P=N[1];
       var Q=$d(1,[M],"a3");
       var R=$d(2,[P,Q],"a4");
       var T=$hs_byteArrayContentszh(P);
       var S=$d(1,[T,R,$$GHCziIOziBuffer_WriteBuffer,I,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"to");
       $M(A,function(U){
	var V=U.v[0],W=U.v[1];
	var X=$d(1,[E],"sat");
	var Y=$d(1,[X],"sat");
	var Z=$d(1,[g,Y,$$GHCziIOziBuffer_ReadBuffer,G,goog.math.Long.fromBits(0,0),G],"sat");
	V.C([Z,S,O],function(a1){
	 var b1=a1[0],c1=a1[1];
	 $M(c1,function(d1){
	  var e1=d1.v[0],f1=d1.v[1],g1=d1.v[2];
	  $M(f1,function(h1){
	   var i1=h1.v[4],j1=h1.v[5];
	   var k1=i1.equals(j1)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(k1.g){
	   case 1:
	    var l1=$f(6,function(m1,n1,o1,p1,q1,r1){
	     var s1=$d(1,[n1],"sat");
	     var K2=q1.subtract(p1);
	     $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,K2,s1,r1],function(t1){
	      var u1=t1[0],v1=t1[1];
	      var J2=$hs_touchzh(o1,u1);
	      var w1=$f(3,function(x1,y1,z1){
	       V.C([y1,S,z1],function(A1){
		var B1=A1[0],C1=A1[1];
		$M(C1,function(D1){
		 var E1=D1.v[0],F1=D1.v[1],G1=D1.v[2];
		 $M(F1,function(H1){
		  var I1=H1.v[4],J1=H1.v[5];
		  var K1=I1.equals(J1)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(K1.g){
		  case 1:
		   var M1=x1.add(goog.math.Long.fromBits(1,0));
		   var L1=$f(6,function(N1,O1,P1,Q1,R1,S1){
		    var T1=$d(1,[O1],"sat");
		    var c2=R1.subtract(Q1);
		    $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,c2,T1,S1],function(U1){
		     var V1=U1[0],W1=U1[1];
		     var b2=$hs_touchzh(P1,V1);
		     w1.C([M1,N1,b2],function(X1){
		      var Y1=X1[0],Z1=X1[1];
		      var a2=$t(function(){
		       $$GHCziBase_zpzp.J(W1,Z1);
		      },[W1,Z1],"sat");
		      $r([Y1,a2]);
		     },[W1]);
		    },[M1,P1,N1,w1]);
		   },[M1,w1],"$wa4");
		   $M(E1,function(d2){
		    switch(d2.g){
		    case 2:
		     $M(G1,function(p2){
		      var q2=p2.v[0],r2=p2.v[1],s2=p2.v[4],t2=p2.v[5];
		      L1.J(H1,q2,r2,s2,t2,B1);
		     },[M1,w1,L1,H1,B1]);break;
		    default:
		     W.C([H1,G1,B1],function(e2){
		      var f2=e2[0],g2=e2[1];
		      $M(g2,function(h2){
		       var i2=h2.v[0],j2=h2.v[1];
		       $M(j2,function(k2){
			var l2=k2.v[0],m2=k2.v[1],n2=k2.v[4],o2=k2.v[5];
			L1.J(i2,l2,m2,n2,o2,f2);
		       },[M1,w1,L1,i2,f2]);
		      },[M1,w1,L1,f2]);
		     },[M1,w1,L1]);
		    }
		   },[M1,w1,L1,H1,G1,B1,W]);break;
		  case 2:
		   $M(G1,function(u2){
		    var v2=u2.v[0],w2=u2.v[1],x2=u2.v[4],y2=u2.v[5];
		    var z2=$d(1,[v2],"sat");
		    var E2=y2.subtract(x2);
		    $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,E2,z2,B1],function(A2){
		     var B2=A2[0],C2=A2[1];
		     var D2=$hs_touchzh(w2,B2);
		     $r([D2,C2]);
		    },[w2]);
		   },[B1]);break;
		  }
		 },[x1,w1,E1,G1,B1,W]);
		},[x1,w1,B1,W]);
	       },[x1,w1,W]);
	      },[S,V,W],"$sa1");
	      w1.C([goog.math.Long.fromBits(1,0),m1,J2],function(F2){
	       var G2=F2[0],H2=F2[1];
	       var I2=$t(function(){
		$$GHCziBase_zpzp.J(v1,H2);
	       },[v1,H2],"sat");
	       $r([G2,I2]);
	      },[v1]);
	     },[S,V,o1,W,m1]);
	    },[S,V,W],"$wa3");
	    $M(e1,function(L2){
	     switch(L2.g){
	     case 2:
	      $M(g1,function(X2){
	       var Y2=X2.v[0],Z2=X2.v[1],a3=X2.v[4],b3=X2.v[5];
	       l1.J(h1,Y2,Z2,a3,b3,b1);
	      },[S,V,W,l1,h1,b1]);break;
	     default:
	      W.C([h1,g1,b1],function(M2){
	       var N2=M2[0],O2=M2[1];
	       $M(O2,function(P2){
		var Q2=P2.v[0],R2=P2.v[1];
		$M(R2,function(S2){
		 var T2=S2.v[0],U2=S2.v[1],V2=S2.v[4],W2=S2.v[5];
		 l1.J(Q2,T2,U2,V2,W2,N2);
		},[S,V,W,l1,Q2,N2]);
	       },[S,V,W,l1,N2]);
	      },[S,V,W,l1]);
	     }
	    },[S,V,W,l1,h1,g1,b1]);break;
	   case 2:
	    $M(g1,function(c3){
	     var d3=c3.v[0],e3=c3.v[1],f3=c3.v[4],g3=c3.v[5];
	     var h3=$d(1,[d3],"sat");
	     var m3=g3.subtract(f3);
	     $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorableChar,m3,h3,b1],function(i3){
	      var j3=i3[0],k3=i3[1];
	      var l3=$hs_touchzh(e3,j3);
	      $r([l3,k3]);
	     },[e3]);
	    },[b1]);break;
	   }
	  },[S,V,W,e1,g1,b1]);
	 },[S,V,W,b1]);
	},[S,V,W]);
       },[g,S,E,G,O]);break;
      case 2:
       $A($$GHCziForeignPtr_mallocForeignPtrBytes2);break;
      }
     },[g,D,A,E,G],"$j");
     var o3=G.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(o3.g){
     case 1:
      H.J(G);break;
     case 2:
      H.J(goog.math.Long.fromBits(1,0));break;
     }
    },[g,D,A,E]);
   },[g,t],"a2");
   $M(y,function(p3){
    switch(p3.toString()){
    case "0":
     var C3=$f(1,function(D3){
      v.C([D3],function(E3){
       var F3=E3[0],G3=E3[1];
       var H3=$f(2,function(c,d){
	$$GHCziForeign$a.J(G3,c,d);
       },[G3],"sat");
       var I3=$f(1,function(d){
	z.J(G3,d);
       },[z,G3],"sat");
       var J3=$f(1,function(d){
	$k($hs_unmaskAsyncExceptionszh,[I3,d]);
       },[I3],"sat");
       $b($hs_catchzh,[J3,H3,F3],function(K3){
	var L3=K3[0],M3=K3[1];
	$M(G3,function(N3){
	 var O3=N3.v[2];
	 O3.C([L3],function(P3){
	  var Q3=P3[0];
	  $r([Q3,M3]);
	 },[M3]);
	},[L3,M3]);
       },[G3]);
      },[z]);
     },[z,v],"sat");
     $k($hs_maskAsyncExceptionszh,[C3,x]);break;
    default:
     v.C([x],function(q3){
      var r3=q3[0],s3=q3[1];
      var t3=$f(2,function(c,d){
       $$GHCziForeign$a.J(s3,c,d);
      },[s3],"sat");
      var u3=$f(1,function(d){
       z.J(s3,d);
      },[z,s3],"sat");
      $b($hs_catchzh,[u3,t3,r3],function(v3){
       var w3=v3[0],x3=v3[1];
       $M(s3,function(y3){
	var z3=y3.v[2];
	z3.C([w3],function(A3){
	 var B3=A3[0];
	 $r([B3,x3]);
	},[x3]);
       },[w3,x3]);
      },[s3]);
     },[z]);
    }
   },[z,x,v]);
  },[g,s,t]);
 },[g,f]);
},[],"in `base:GHC.Foreign'");
var $$GHCziForeign$a=$F(3,function(jc,kc,lc){
 var mc=$t(function(){
  $$GHCziIOziEncodingziTypes_close.J(jc);
 },[jc],"sat");
 $$GHCziIO_bracket2.J(mc,kc,lc);
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
var $$GHCziIOziEncodingziIconv_localeEncodingName=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziEncodingziIconv$c);
},[],"at libraries/base/GHC/IO/Encoding/Iconv.hs:62:1");
var $$GHCziIOziEncodingziIconv_newIConv=$f(4,function(a,b,c,d){
 var e=$f(1,function(f){
  var g=$f(2,function(h,i){
   $M(h,function(j){
    var k=j.v[0];
    $M(f,function(l){
     var m=l.v[0];
     var $ff=hs_iconv_open(k,m);
     var n=[i,$ff];
     var o=n[0],p=n[1];
     $M(p,function(q){
      switch(q.toString()){
      case "-1":
       var $ff=__hscore_get_errno();
       var D=[o,$ff];
       var E=D[0],F=D[1];
       var H=$hs_narrow32Intzh(F);
       var G=$d(1,[H],"sat");
       $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv$d,G,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(I){
	$$GHCziIOziException_ioError.C([I,E],function(J){
	 var K=J[0],L=J[1];
	 var M=$f(1,function(z){
	  $$GHCziIOziEncodingziIconv$b.J(L,z);
	 },[L],"sat");
	 var N=$f(1,function(z){
	  $$GHCziIOziEncodingziIconv$f.J(M,z);
	 },[M],"sat");
	 var O=$t(function(){
	  d.J(L);
	 },[d,L],"sat");
	 var P=$d(1,[O,c,N,$$GHCziIOziEncodingziIconv$g,$$GHCziIOziEncodingziIconv$h],"sat");
	 $r([K,P]);
	},[d,c]);
       },[d,c,E]);break;
      default:
       var r=$f(1,function(s){
	var $ff=hs_iconv_close(q);
	var t=[s,$ff];
	var u=t[0],v=t[1];
	var x=$hs_narrow32Intzh(v);
	var w=$d(1,[x],"sat");
	$r([u,w]);
       },[q],"sat");
       var y=$f(1,function(z){
	$$GHCziIOziEncodingziIconv$f.J(r,z);
       },[r],"sat");
       var A=$t(function(){
	var B=$d(1,[q],"sat");
	d.J(B);
       },[q,d],"sat");
       var C=$d(1,[A,c,y,$$GHCziIOziEncodingziIconv$g,$$GHCziIOziEncodingziIconv$h],"sat");
       $r([o,C]);
      }
     },[o,d,c]);
    },[k,i,d,c]);
   },[f,i,d,c]);
  },[f,d,c],"sat");
  $$ForeignziCziString_withCAString.J(b,g);
 },[b,d,c],"sat");
 $$ForeignziCziString_withCAString.J(a,e);
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
var $$GHCziIOziEncodingziIconv_iconvEncoding5=$f(6,function(Q,R,S,T,U,V){
 $M(R,function(W){
  var X=W.v[0],Y=W.v[1],Z=W.v[2],a1=W.v[3],b1=W.v[4],c1=W.v[5];
  $M(T,function(d1){
   var e1=d1.v[0],f1=d1.v[1],g1=d1.v[2],h1=d1.v[3],i1=d1.v[4],j1=d1.v[5];
   var k1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),V);
   var l1=k1[0],m1=k1[1];
   var n1=$hs_unsafeFreezzeByteArrayzh(m1,l1);
   var o1=n1[0],p1=n1[1];
   $M(S,function(q1){
    var r1=q1.v[0];
    var s1=$f(1,function(t1){
     var D1=$hs_byteArrayContentszh(p1);
     var d4=$hs_writeAddrOffAddrzh(D1,goog.math.Long.fromBits(0,0),t1,o1);
     var u1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),d4);
     var v1=u1[0],w1=u1[1];
     var x1=$hs_unsafeFreezzeByteArrayzh(w1,v1);
     var y1=x1[0],z1=x1[1];
     $M(U,function(A1){
      var B1=A1.v[0];
      var C1=$f(1,function(E1){
       var M1=$hs_byteArrayContentszh(z1);
       var Y3=$hs_writeAddrOffAddrzh(M1,goog.math.Long.fromBits(0,0),E1,y1);
       var F1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),Y3);
       var G1=F1[0],H1=F1[1];
       var I1=$hs_unsafeFreezzeByteArrayzh(H1,G1);
       var J1=I1[0],K1=I1[1];
       var L1=$f(1,function(N1){
	var V1=$hs_byteArrayContentszh(K1);
	var T3=$hs_writeWord64OffAddrzh(V1,goog.math.Long.fromBits(0,0),N1,J1);
	var O1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),T3);
	var P1=O1[0],Q1=O1[1];
	var R1=$hs_unsafeFreezzeByteArrayzh(Q1,P1);
	var S1=R1[0],T1=R1[1];
	var U1=$f(1,function(W1){
	 var N3=$hs_byteArrayContentszh(T1);
	 var O3=$hs_writeWord64OffAddrzh(N3,goog.math.Long.fromBits(0,0),W1,S1);
	 $M(Q,function(X1){
	  var Y1=X1.v[0];
	  var $ff=hs_iconv(Y1,D1,V1,M1,N3);
	  var Z1=[O3,$ff];
	  var a2=Z1[0],b2=Z1[1];
	  var c2=$hs_readWord64OffAddrzh(V1,goog.math.Long.fromBits(0,0),a2);
	  var d2=c2[0],e2=c2[1];
	  var f2=$hs_readWord64OffAddrzh(N3,goog.math.Long.fromBits(0,0),d2);
	  var g2=f2[0],h2=f2[1];
	  var i2=$t(function(){
	   var j2=B1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(j2.g){
	   case 1:
	    var l2=$hs_word2Intzh(h2);
	    var k2=$hs_uncheckedIShiftRAzh(l2,B1);
	    $R(1,[k2],"I#");break;
	   case 2:
	    var n2=$hs_word2Intzh(h2);
	    var m2=n2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(m2.g){
	    case 1:
	     $A($$GHCziIOziEncodingziIconv_iconvEncoding4);break;
	    case 2:
	     $A($$GHCziIOziEncodingziIconv$i);break;
	    }break;
	   }
	  },[B1,h2],"new_outleft'");
	  var o2=$t(function(){
	   var p2=$hs_eqWordzh(e2,goog.math.Long.fromBits(0,0));
	   switch(p2.g){
	   case 1:
	    var q2=r1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(q2.g){
	    case 1:
	     var t2=$hs_word2Intzh(e2);
	     var s2=$hs_uncheckedIShiftRAzh(t2,r1);
	     var r2=c1.subtract(s2);
	     $R(1,[X,Y,Z,a1,r2,c1],"Buffer");break;
	    case 2:
	     var w2=$hs_word2Intzh(e2);
	     var u2=w2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(u2.g){
	     case 1:
	      $R(1,[X,Y,Z,a1,c1,c1],"Buffer");break;
	     case 2:
	      var v2=c1.subtract(goog.math.Long.fromBits(4294967295,4294967295));
	      $R(1,[X,Y,Z,a1,v2,c1],"Buffer");break;
	     }break;
	    }break;
	   case 2:
	    $R(1,[X,Y,Z,a1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
	   }
	  },[e2,r1,X,Y,Z,a1,c1],"new_input");
	  var x2=$hs_eqWordzh(b2,goog.math.Long.fromBits(4294967295,4294967295));
	  switch(x2.g){
	  case 1:
	   var I2=$hs_touchzh(T1,g2);
	   var H2=$hs_touchzh(K1,I2);
	   var G2=$hs_touchzh(z1,H2);
	   var F2=$hs_touchzh(p1,G2);
	   var E2=$hs_touchzh(f1,F2);
	   var D2=$hs_touchzh(Y,E2);
	   var y2=$t(function(){
	    $M(i2,function(z2){
	     var A2=z2.v[0];
	     var B2=h1.subtract(A2);
	     $R(1,[e1,f1,g1,h1,i1,B2],"Buffer");
	    },[f1,e1,g1,h1,i1]);
	   },[i2,f1,e1,g1,h1,i1],"sat");
	   var C2=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,o2,y2],"sat");
	   $r([D2,C2]);break;
	  case 2:
	   var $ff=__hscore_get_errno();
	   var J2=[g2,$ff];
	   var K2=J2[0],L2=J2[1];
	   var M2=$hs_narrow32Intzh(L2);
	   switch(M2.toString()){
	   case "7":
	    var m3=$hs_touchzh(T1,K2);
	    var l3=$hs_touchzh(K1,m3);
	    var k3=$hs_touchzh(z1,l3);
	    var j3=$hs_touchzh(p1,k3);
	    var i3=$hs_touchzh(f1,j3);
	    var h3=$hs_touchzh(Y,i3);
	    var c3=$t(function(){
	     $M(i2,function(d3){
	      var e3=d3.v[0];
	      var f3=h1.subtract(e3);
	      $R(1,[e1,f1,g1,h1,i1,f3],"Buffer");
	     },[f1,e1,g1,h1,i1]);
	    },[i2,f1,e1,g1,h1,i1],"sat");
	    var g3=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,o2,c3],"sat");
	    $r([h3,g3]);break;
	   case "22":
	    var x3=$hs_touchzh(T1,K2);
	    var w3=$hs_touchzh(K1,x3);
	    var v3=$hs_touchzh(z1,w3);
	    var u3=$hs_touchzh(p1,v3);
	    var t3=$hs_touchzh(f1,u3);
	    var s3=$hs_touchzh(Y,t3);
	    var n3=$t(function(){
	     $M(i2,function(o3){
	      var p3=o3.v[0];
	      var q3=h1.subtract(p3);
	      $R(1,[e1,f1,g1,h1,i1,q3],"Buffer");
	     },[f1,e1,g1,h1,i1]);
	    },[i2,f1,e1,g1,h1,i1],"sat");
	    var r3=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,o2,n3],"sat");
	    $r([s3,r3]);break;
	   case "84":
	    var M3=$hs_touchzh(T1,K2);
	    var L3=$hs_touchzh(K1,M3);
	    var K3=$hs_touchzh(z1,L3);
	    var J3=$hs_touchzh(p1,K3);
	    var I3=$hs_touchzh(f1,J3);
	    var H3=$hs_touchzh(Y,I3);
	    var y3=$t(function(){
	     $M(i2,function(z3){
	      var A3=z3.v[0];
	      var B3=h1.subtract(A3);
	      $R(1,[e1,f1,g1,h1,i1,B3],"Buffer");
	     },[f1,e1,g1,h1,i1]);
	    },[i2,f1,e1,g1,h1,i1],"sat");
	    var C3=$t(function(){
	     $M(i2,function(D3){
	      var E3=D3.v[0];
	      $M(E3,function(F3){
	       switch(F3.toString()){
	       case "0":
		$R(2,[],"OutputUnderflow");break;
	       default:
		$R(3,[],"InvalidSequence");
	       }
	      },[]);
	     },[]);
	    },[i2],"sat");
	    var G3=$d(1,[C3,o2,y3],"sat");
	    $r([H3,G3]);break;
	   default:
	    var $ff=__hscore_get_errno();
	    var N2=[K2,$ff];
	    var O2=N2[0],P2=N2[1];
	    var R2=$hs_narrow32Intzh(P2);
	    var Q2=$d(1,[R2],"sat");
	    $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv$j,Q2,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(S2){
	     $$GHCziIOziException_ioError.C([S2,O2],function(T2){
	      var U2=T2[0],V2=T2[1];
	      var b3=$hs_touchzh(T1,U2);
	      var a3=$hs_touchzh(K1,b3);
	      var Z2=$hs_touchzh(z1,a3);
	      var Y2=$hs_touchzh(p1,Z2);
	      var X2=$hs_touchzh(f1,Y2);
	      var W2=$hs_touchzh(Y,X2);
	      $r([W2,V2]);
	     },[p1,z1,K1,T1,Y,f1]);
	    },[p1,z1,K1,T1,Y,f1,O2]);
	   }break;
	  }
	 },[p1,D1,z1,M1,K1,V1,T1,N3,O3,B1,r1,X,Y,Z,a1,c1,f1,e1,g1,h1,i1]);
	},[p1,D1,z1,M1,K1,V1,T1,S1,Q,B1,r1,X,Y,Z,a1,c1,f1,e1,g1,h1,i1],"$j3");
	var P3=B1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(P3.g){
	case 1:
	 var S3=h1.subtract(j1);
	 var R3=$hs_uncheckedIShiftLzh(S3,B1);
	 var Q3=$hs_int2Wordzh(R3);
	 U1.J(Q3);break;
	case 2:
	 U1.J(goog.math.Long.fromBits(0,0));break;
	}
       },[p1,D1,z1,M1,K1,J1,Q,B1,r1,X,Y,Z,a1,c1,f1,e1,g1,h1,i1,j1],"$j2");
       var U3=r1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(U3.g){
       case 1:
	var X3=c1.subtract(b1);
	var W3=$hs_uncheckedIShiftLzh(X3,r1);
	var V3=$hs_int2Wordzh(W3);
	L1.J(V3);break;
       case 2:
	L1.J(goog.math.Long.fromBits(0,0));break;
       }
      },[p1,D1,z1,y1,Q,B1,r1,X,Y,Z,a1,c1,f1,e1,g1,h1,i1,j1,b1],"$j1");
      var Z3=B1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Z3.g){
      case 1:
       var b4=$hs_uncheckedIShiftLzh(j1,B1);
       var a4=$hs_plusAddrzh(e1,b4);
       C1.J(a4);break;
      case 2:
       var c4=$hs_plusAddrzh(e1,goog.math.Long.fromBits(0,0));
       C1.J(c4);break;
      }
     },[p1,D1,z1,y1,Q,r1,X,Y,Z,a1,c1,f1,e1,g1,h1,i1,j1,b1]);
    },[p1,o1,U,Q,r1,X,Y,Z,a1,c1,f1,e1,g1,h1,i1,j1,b1],"$j");
    var e4=r1.greaterThanOrEqual(goog.math.Long.fromBits(64,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(e4.g){
    case 1:
     var g4=$hs_uncheckedIShiftLzh(b1,r1);
     var f4=$hs_plusAddrzh(X,g4);
     s1.J(f4);break;
    case 2:
     var h4=$hs_plusAddrzh(X,goog.math.Long.fromBits(0,0));
     s1.J(h4);break;
    }
   },[p1,o1,U,Q,X,Y,Z,a1,c1,f1,e1,g1,h1,i1,j1,b1]);
  },[V,S,U,Q,X,Y,Z,a1,c1,b1]);
 },[T,V,S,U,Q]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding6=$f(4,function(i4,j4,k4,l4){
 $$GHCziIOziEncodingziIconv_iconvEncoding5.J(i4,j4,$$GHCziIOziEncodingziIconv_iconvEncoding4,k4,$$GHCziIOziEncodingziIconv_charzushift,l4);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding3=$f(4,function(m4,n4,o4,p4){
 $$GHCziIOziEncodingziIconv_iconvEncoding5.J(m4,n4,$$GHCziIOziEncodingziIconv_charzushift,o4,$$GHCziIOziEncodingziIconv_iconvEncoding4,p4);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding7=$f(1,function(q4){
 $M(q4,function(r4){
  var s4=r4.v[0];
  $M(s4,function(t4){
   switch(t4.toString()){
   case "/":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding2=$f(3,function(u4,v4,w4){
 var x4=$t(function(){
  var y4=$f(3,function(z4,A4,z){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(u4,z4,A4,z);
  },[u4],"sat");
  $$GHCziIOziEncodingziIconv_newIConv.J($$GHCziIOziEncodingziIconv_haskellChar,v4,y4,$$GHCziIOziEncodingziIconv_iconvEncoding3);
 },[v4,u4],"sat");
 var B4=$t(function(){
  var C4=$t(function(){
   $$GHCziList_zdwspan.C([$$GHCziIOziEncodingziIconv_iconvEncoding7,v4],function(D4){
    var E4=D4[0],F4=D4[1];
    $R(1,[E4,F4],"(,)");
   },[]);
  },[v4],"ds");
  var G4=$f(3,function(z4,A4,z){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(u4,z4,A4,z);
  },[u4],"sat");
  var H4=$t(function(){
   var I4=$t(function(){
    $M(C4,function(J4){
     var K4=J4.v[1];
     $A(K4);
    },[]);
   },[C4],"sat");
   $$GHCziBase_zpzp.J($$GHCziIOziEncodingziIconv_haskellChar,I4);
  },[C4],"sat");
  var L4=$t(function(){
   $M(C4,function(M4){
    var N4=M4.v[0];
    $A(N4);
   },[]);
  },[C4],"sat");
  $$GHCziIOziEncodingziIconv_newIConv.J(L4,H4,G4,$$GHCziIOziEncodingziIconv_iconvEncoding6);
 },[v4,u4],"sat");
 var O4=$d(1,[v4,B4,x4],"sat");
 $r([w4,O4]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv$a=$F(2,function(P4,Q4){
 $M(P4,function(R4){
  var S4=R4.v[0];
  var $ff=hs_iconv_close(S4);
  var T4=[Q4,$ff];
  var U4=T4[0],V4=T4[1];
  var X4=$hs_narrow32Intzh(V4);
  var W4=$d(1,[X4],"sat");
  $r([U4,W4]);
 },[Q4]);
},"a");
var $$GHCziIOziEncodingziIconv$b=$F(2,function(A4,z){
 $$GHCziIOziEncodingziIconv$a.J(A4,z);
},"at libraries/base/GHC/IO/Encoding/Iconv.hs:76:5");
var $$GHCziIOziEncodingziIconv$c=$F(1,function(Y4){
 var c5=$hs_noDuplicatezh(Y4);
 var $ff=localeEncoding();
 var Z4=[c5,$ff];
 var a5=Z4[0],b5=Z4[1];
 $$ForeignziCziString_zdwa.J(b5,a5);
},"lvl");
var $$GHCziIOziEncodingziIconv$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("mkTextEncoding");
},"loc");
var $$GHCziIOziEncodingziIconv$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Iconv.close");
},"loc1");
var $$GHCziIOziEncodingziIconv$f=$F(2,function(d5,e5){
 d5.C([e5],function(f5){
  var g5=f5[0],h5=f5[1];
  $M(h5,function(i5){
   var j5=i5.v[0];
   $M(j5,function(k5){
    switch(k5.toString()){
    case "-1":
     var $ff=__hscore_get_errno();
     var l5=[g5,$ff];
     var m5=l5[0],n5=l5[1];
     var p5=$hs_narrow32Intzh(n5);
     var o5=$d(1,[p5],"sat");
     $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv$e,o5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(q5){
      $$GHCziIOziException_ioError.C([q5,m5],function(r5){
       var s5=r5[0];
       $r([s5,$$GHCziTuple_Z0T]);
      },[]);
     },[m5]);break;
    default:
     $r([g5,$$GHCziTuple_Z0T]);
    }
   },[g5]);
  },[g5]);
 },[]);
},"a1");
var $$GHCziIOziEncodingziIconv$g=$F(1,function(t5){
 $r([t5,$$GHCziTuple_Z0T]);
},"a2");
var $$GHCziIOziEncodingziIconv$h=$F(2,function(u5,v5){
 $r([v5,$$GHCziTuple_Z0T]);
},"a3");
var $$GHCziIOziEncodingziIconv$i=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"lvl1");
var $$GHCziIOziEncodingziIconv$j=$T(function(){
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
  var p=$d(1,[a,b,c,d,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl2");
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
      var u1=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,r1,t1],"lvl3");
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
var $$GHCziIOziEncodingziUTF16_zdwa4=$f(8,function(D3,E3,F3,G3,H3,I3,J3,K3){
 $M(J3,function(L3){
  var M3=L3.v[0],N3=L3.v[1],O3=L3.v[2],P3=L3.v[3],Q3=L3.v[4],R3=L3.v[5];
  var S3=$d(1,[D3,E3,F3,G3,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl2");
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
      var X4=$d(1,[$$GHCziIOziEncodingziTypes_InvalidSequence,U4,W4],"lvl3");
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
  $$GHCziIOziEncodingziUTF16_zdwa4.J(T5,U5,V5,W5,X5,Y5,Q5,R5);
 },[Q5,R5]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_zdwa3=$f(8,function(Z5,a6,b6,c6,d6,e6,f6,g6){
 $M(f6,function(h6){
  var i6=h6.v[0],j6=h6.v[1],k6=h6.v[2],l6=h6.v[3],m6=h6.v[4],n6=h6.v[5];
  var o6=$d(1,[Z5,a6,b6,c6,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl2");
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
var $$GHCziIOziEncodingziUTF16_mkUTF16be4=$f(3,function(o8,p8,q8){
 $M(o8,function(r8){
  var s8=r8.v[0],t8=r8.v[1],u8=r8.v[2],v8=r8.v[3],w8=r8.v[4],x8=r8.v[5];
  $$GHCziIOziEncodingziUTF16_zdwa3.J(s8,t8,u8,v8,w8,x8,p8,q8);
 },[p8,q8]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
var $$GHCziIOziEncodingziUTF16_mkUTF16be5=$t(function(){
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
  var J8=$d(1,[$$GHCziIOziEncodingziUTF16_mkUTF16be4,I8,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF16be3],"sat");
  $r([H8,J8]);
 },[B8],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF16_mkUTF16be5,G8,C8],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF16.hs:146:1");
var $$GHCziIOziEncodingziUTF16_zdwa5=$f(8,function(a9,b9,c9,d9,e9,f9,g9,h9){
 $M(g9,function(i9){
  var j9=i9.v[0],k9=i9.v[1],l9=i9.v[2],m9=i9.v[3],n9=i9.v[4],o9=i9.v[5];
  var p9=$d(1,[a9,b9,c9,d9,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"lvl2");
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
var $$GHCziIOziEncodingziUTF16_mkUTF16le4=$f(3,function(pb,qb,rb){
 $M(pb,function(sb){
  var tb=sb.v[0],ub=sb.v[1],vb=sb.v[2],wb=sb.v[3],xb=sb.v[4],yb=sb.v[5];
  $$GHCziIOziEncodingziUTF16_zdwa5.J(tb,ub,vb,wb,xb,yb,qb,rb);
 },[qb,rb]);
},[],"in `base:GHC.IO.Encoding.UTF16'");
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
      var Xb=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16$a,Ub);
      $$GHCziIOziEncodingziUTF16_zdwa3.J(Ab,Bb,Cb,Db,Eb,Fb,Gb,Xb);break;
     case 2:
      var Yb=$hs_eqWordzh(Sb,goog.math.Long.fromBits(254,0));
      switch(Yb.g){
      case 1:
       var Zb=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16$a,Ub);
       $$GHCziIOziEncodingziUTF16_zdwa3.J(Ab,Bb,Cb,Db,Eb,Fb,Gb,Zb);break;
      case 2:
       var bc=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16$b,Ub);
       var ac=Eb.add(goog.math.Long.fromBits(2,0));
       $$GHCziIOziEncodingziUTF16_zdwa5.J(Ab,Bb,Cb,Db,ac,Fb,Gb,bc);break;
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
      var fc=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16$a,Ub);
      var ec=Eb.add(goog.math.Long.fromBits(2,0));
      $$GHCziIOziEncodingziUTF16_zdwa3.J(Ab,Bb,Cb,Db,ec,Fb,Gb,fc);break;
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
var $$GHCziIOziEncodingziUTF16_mkUTF2=$t(function(){
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
 $R(1,[$$GHCziIOziEncodingziUTF16_mkUTF2,bd,Dc],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF16.hs:61:1");
var $$GHCziIOziEncodingziUTF16_mkUTF16le5=$t(function(){
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
  var Hd=$d(1,[$$GHCziIOziEncodingziUTF16_mkUTF16le4,Gd,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF1,$$GHCziIOziEncodingziUTF16_mkUTF16le3],"sat");
  $r([Fd,Hd]);
 },[zd],"sat");
 $R(1,[$$GHCziIOziEncodingziUTF16_mkUTF16le5,Ed,Ad],"TextEncoding");
},[],"at libraries/base/GHC/IO/Encoding/UTF16.hs:174:1");
var $$GHCziIOziEncodingziUTF16$a=$D(2,function(){
 $r([$$GHCziIOziEncodingziUTF16_mkUTF16be4]);
},"lvl");
var $$GHCziIOziEncodingziUTF16$b=$D(2,function(){
 $r([$$GHCziIOziEncodingziUTF16_mkUTF16le4]);
},"lvl1");
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
	var m4=$d(2,[$$GHCziIOziException$u,a4],"sat");
	$$GHCziBase_zpzp.J(k4,m4);
       },[a4,k4],"sat");
       $$GHCziBase_zpzp.J($$GHCziIOziException$t,l4);break;
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
     var N4=$d(2,[$$GHCziShow_showListzuzu2,H4],"lvl24");
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
var $$GHCziIOziException_zdfTypeableIOExceptionzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("IOException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableIOExceptionzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(4053623282,1685460941),goog.math.Long.fromBits(3693590983,2507416641),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableIOExceptionzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableIOException1=$D(1,function(){
 $r([goog.math.Long.fromBits(4053623282,1685460941),goog.math.Long.fromBits(3693590983,2507416641),$$GHCziIOziException_zdfTypeableIOExceptionzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableIOExceptionzuzdctypeOf=$f(1,function(qb){
 $A($$GHCziIOziException_zdfTypeableIOException1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOExceptionzuzdcfromException=$f(1,function(rb){
 $M(rb,function(sb){
  var tb=sb.v[0],ub=sb.v[1];
  $$GHCziException_zdp1Exception.C([tb,ub],function(vb){
   var wb=vb.v[0],xb=vb.v[1];
   var yb=$hs_eqWordzh(wb,goog.math.Long.fromBits(4053623282,1685460941));
   switch(yb.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var zb=$hs_eqWordzh(xb,goog.math.Long.fromBits(3693590983,2507416641));
    switch(zb.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[ub],"Just");break;
    }break;
   }
  },[ub]);
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
 $$GHCziIOziException$x.J(I7,t);
},[],"at libraries/base/GHC/IO/Exception.hs:188:1");
var $$GHCziIOziException_ioError=$f(2,function(I7,t){
 $$GHCziIOziException$x.J(I7,t);
},[],"at libraries/base/GHC/IO/Exception.hs:192:1");
var $$GHCziIOziException_untangle1=$D(1,function(){
 $r([" "]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle4=$f(1,function(xd){
 $M(xd,function(yd){
  var zd=yd.v[0];
  $M(zd,function(Ad){
   switch(Ad.toString()){
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
var $$GHCziIOziException_untangle=$f(2,function(Bd,Cd){
 $$GHCziCString_unpackCStringUtf8zh.C([Bd],function(Dd){
  $$GHCziList_zdwspan.C([$$GHCziIOziException_untangle4,Dd],function(Ed){
   var Fd=Ed[0],Gd=Ed[1];
   var Hd=$f(2,function(Id,Jd){
    var Kd=$t(function(){
     var Ld=$t(function(){
      var Md=$t(function(){
       $$GHCziBase_zpzp.J(Jd,$$GHCziIOziException_untangle2);
      },[Jd],"sat");
      $$GHCziBase_zpzp.J(Cd,Md);
     },[Cd,Jd],"sat");
     $$GHCziCString_unpackAppendCStringzh.J(": ",Ld);
    },[Cd,Jd],"sat");
    $$GHCziBase_zpzp.J(Id,Kd);
   },[Cd],"$j");
   $M(Gd,function(Nd){
    switch(Nd.g){
    case 1:
     Hd.J(Fd,$$GHCziTypes_ZMZN);break;
    case 2:
     var Od=Nd.v[0],Pd=Nd.v[1];
     $M(Od,function(Qd){
      var Rd=Qd.v[0];
      $M(Rd,function(Sd){
       switch(Sd.toString()){
       case "|":
	var Td=$d(2,[$$GHCziIOziException_untangle1,Pd],"sat");
	Hd.J(Fd,Td);break;
       default:
	Hd.J(Fd,$$GHCziTypes_ZMZN);
       }
      },[Cd,Hd,Fd,Pd]);
     },[Cd,Hd,Fd,Pd]);break;
    }
   },[Cd,Hd,Fd]);
  },[Cd]);
 },[Cd]);
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
var $$GHCziIOziException$t=$T(function(){
 $$GHCziCString_unpackCStringzh.J(" (");
},"lvl19");
var $$GHCziIOziException$u=$D(1,function(){
 $r([")"]);
},"lvl20");
var $$GHCziIOziException$x=$F(2,function(fe,ge){
 var he=$t(function(){
  $$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException.J(fe);
 },[fe],"sat");
 $r($hs_raiseIOzh(he,ge));
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
var $$GHCziIOziFD_zdfBufferedIOFD15=$f(3,function(r1,s1,t1){
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
 },[g3],"a2");
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
 },[g3,v3,i3,j3,k3],"a3");
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
   },[g3,v3,i3,j3,k3,F3],"a4");
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
 var S4=$d(1,[T4],"lvl8");
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
 },[M4,S4],"a3");
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
 },[M4,U4,L4,O4,P4,Q4],"a4");
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
   },[M4,U4,L4,O4,P4,Q4,b5],"a5");
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
   },[M4,S4,A5],"a6");
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
var $$GHCziIOziFD_zdfBufferedIOFD6=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfRawIOFD3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdWrite");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa=$f(5,function(D6,E6,F6,G6,H6){
 var J6=$hs_int2Wordzh(G6);
 var I6=$d(1,[J6],"sat");
 $$GHCziIOziFD_zdwa13.C([$$GHCziIOziFD_zdfRawIOFD3,D6,E6,F6,$$GHCziIOziFD_zdfBufferedIOFD6,I6,H6],function(K6){
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
var $$GHCziIOziFD_zdfBufferedIOFD14=$t(function(){
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
var $$GHCziIOziFD_zdfBufferedIOFD12=$f(4,function(be,ce,de,ee){
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
      $$GHCziIOziFD_zdfBufferedIOFD12.J(be,ce,de,me);break;
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
var $$GHCziIOziFD_zdfBufferedIOFD10=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD9=$f(1,function(pe){
 $r([pe,$$GHCziIOziFD_zdfBufferedIOFD10]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD11=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdReadNonBlocking");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa1=$f(5,function(Xf,Yf,Zf,ag,bg){
 var cg=$t(function(){
  $M(ag,function(dg){
   var eg=dg.v[0];
   var fg=$hs_int2Wordzh(eg);
   $R(1,[fg],"W64#");
  },[]);
 },[ag],"a2");
 var gg=$f(1,function(hg){
  $M(Zf,function(ig){
   var jg=ig.v[0];
   $M(cg,function(kg){
    var lg=kg.v[0];
    var mg=$f(1,function(ng){
     var sg=$hs_plusAddrzh(jg,goog.math.Long.fromBits(0,0));
     var $ff=write(Xf,sg,lg);
     var og=[ng,$ff];
     var pg=og[0],qg=og[1];
     var rg=$d(1,[qg],"sat");
     $r([pg,rg]);
    },[Xf,jg,lg],"sat");
    $$GHCziIOziFD_zdfBufferedIOFD12.C([$$GHCziIOziFD$n,mg,$$GHCziIOziFD$o,hg],function(tg){
     var ug=tg[0],vg=tg[1];
     $M(vg,function(wg){
      var xg=wg.v[0];
      $M(xg,function(yg){
       switch(yg.toString()){
       case "-1":
	$r([ug,$$GHCziIOziFD$p]);break;
       default:
	var Ag=$hs_narrow32Intzh(yg);
	var zg=$d(1,[Ag],"sat");
	$r([ug,zg]);
       }
      },[ug]);
     },[ug]);
    },[]);
   },[Xf,jg,hg]);
  },[cg,Xf,hg]);
 },[cg,Zf,Xf],"a3");
 $M(Yf,function(Bg){
  switch(Bg.toString()){
  case "0":
   var $ff=fdReady(Xf,goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var Ig=[bg,$ff];
   var Jg=Ig[0],Kg=Ig[1];
   var Lg=$hs_narrow32Intzh(Kg);
   switch(Lg.toString()){
   case "0":
    $r([Jg,$$GHCziIOziFD_zdfBufferedIOFD6]);break;
   default:
    var $ff=rtsSupportsBoundThreads();
    var Mg=[$$GHCziPrim_realWorldzh,$ff];
    var Ng=Mg[1];
    $M(Ng,function(Og){
     switch(Og.toString()){
     case "0":
      gg.C([Jg],function(ih){
       var jh=ih[0],kh=ih[1];
       var lh=$t(function(){
	$M(kh,function(mh){
	 var nh=mh.v[0];
	 $R(1,[nh],"I#");
	},[]);
       },[kh],"sat");
       $r([jh,lh]);
      },[]);break;
     default:
      $M(Zf,function(Pg){
       var Qg=Pg.v[0];
       $M(cg,function(Rg){
	var Sg=Rg.v[0];
	var Tg=$f(1,function(Ug){
	 var Zg=$hs_plusAddrzh(Qg,goog.math.Long.fromBits(0,0));
	 var $ff=write(Xf,Zg,Sg);
	 var Vg=[Ug,$ff];
	 var Wg=Vg[0],Xg=Vg[1];
	 var Yg=$d(1,[Xg],"sat");
	 $r([Wg,Yg]);
	},[Xf,Qg,Sg],"sat");
	$$GHCziIOziFD_zdfBufferedIOFD12.C([$$GHCziIOziFD$n,Tg,$$GHCziIOziFD$o,Jg],function(ah){
	 var bh=ah[0],ch=ah[1];
	 $M(ch,function(dh){
	  var eh=dh.v[0];
	  $M(eh,function(fh){
	   switch(fh.toString()){
	   case "-1":
	    $r([bh,$$GHCziIOziFD_zdfBufferedIOFD6]);break;
	   default:
	    var hh=$hs_narrow32Intzh(fh);
	    var gh=$d(1,[hh],"sat");
	    $r([bh,gh]);
	   }
	  },[bh]);
	 },[bh]);
	},[]);
       },[Xf,Qg,Jg]);
      },[cg,Xf,Jg]);
     }
    },[cg,Zf,Xf,gg,Jg]);
   }break;
  default:
   gg.C([bg],function(Cg){
    var Dg=Cg[0],Eg=Cg[1];
    var Fg=$t(function(){
     $M(Eg,function(Gg){
      var Hg=Gg.v[0];
      $R(1,[Hg],"I#");
     },[]);
    },[Eg],"sat");
    $r([Dg,Fg]);
   },[]);
  }
 },[cg,Zf,Xf,gg,bg]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD2=$f(3,function(vh,wh,xh){
 $M(vh,function(yh){
  var zh=yh.v[0],Ah=yh.v[1];
  $M(wh,function(Bh){
   var Ch=Bh.v[0],Dh=Bh.v[1],Eh=Bh.v[2],Fh=Bh.v[3],Gh=Bh.v[4],Hh=Bh.v[5];
   var Oh=Hh.subtract(Gh);
   var Jh=$hs_plusAddrzh(Ch,Gh);
   var Ih=$d(1,[Jh],"sat");
   $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa.C([zh,Ah,Ih,Oh,xh],function(Kh){
    var Lh=Kh[0];
    var Nh=$hs_touchzh(Dh,Lh);
    var Mh=$d(1,[Ch,Dh,Eh,Fh,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
    $r([Nh,Mh]);
   },[Ch,Dh,Eh,Fh]);
  },[zh,Ah,xh]);
 },[wh,xh]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD8=$D(2,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD6]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD7=$D(2,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD6]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD5=$D(2,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD6]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa2=$f(9,function(Ph,Qh,Rh,Sh,Th,Uh,Vh,Wh,Xh){
 $M(Qh,function(Yh){
  switch(Yh.toString()){
  case "0":
   var $ff=fdReady(Ph,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0));
   var Bi=[Xh,$ff];
   var Ci=Bi[0],Di=Bi[1];
   var Ei=$hs_narrow32Intzh(Di);
   switch(Ei.toString()){
   case "0":
    var jj=$hs_touchzh(Sh,Ci);
    var hj=$d(1,[Rh,Sh,Th,Uh,Vh,Wh],"sat");
    var ij=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD5,hj],"sat");
    $r([jj,ij]);break;
   default:
    var Fi=$f(1,function(Gi){
     var Oi=Uh.subtract(Wh);
     var Mi=$hs_int2Wordzh(Oi);
     var Ni=$hs_plusAddrzh(Rh,Wh);
     var Li=$hs_plusAddrzh(Ni,goog.math.Long.fromBits(0,0));
     var $ff=read(Ph,Li,Mi);
     var Hi=[Gi,$ff];
     var Ii=Hi[0],Ji=Hi[1];
     var Ki=$d(1,[Ji],"sat");
     $r([Ii,Ki]);
    },[Ph,Rh,Wh,Uh],"sat");
    $$GHCziIOziFD_zdfBufferedIOFD12.C([$$GHCziIOziFD_zdfBufferedIOFD11,Fi,$$GHCziIOziFD_zdfBufferedIOFD9,Ci],function(Pi){
     var Qi=Pi[0],Ri=Pi[1];
     $M(Ri,function(Si){
      var Ti=Si.v[0];
      $M(Ti,function(Ui){
       switch(Ui.toString()){
       case "-1":
	var dj=$hs_touchzh(Sh,Qi);
	var bj=$d(1,[Rh,Sh,Th,Uh,Vh,Wh],"sat");
	var cj=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD7,bj],"sat");
	$r([dj,cj]);break;
       case "0":
	var gj=$hs_touchzh(Sh,Qi);
	var ej=$d(1,[Rh,Sh,Th,Uh,Vh,Wh],"sat");
	var fj=$d(1,[$$DataziMaybe_Nothing,ej],"sat");
	$r([gj,fj]);break;
       default:
	var aj=$hs_touchzh(Sh,Qi);
	var Wi=Wh.add(Ui);
	var Vi=$d(1,[Rh,Sh,Th,Uh,Vh,Wi],"sat");
	var Xi=$d(1,[Ui],"sat");
	var Yi=$d(2,[Xi],"sat");
	var Zi=$d(1,[Yi,Vi],"sat");
	$r([aj,Zi]);
       }
      },[Rh,Wh,Uh,Sh,Th,Vh,Qi]);
     },[Rh,Wh,Uh,Sh,Th,Vh,Qi]);
    },[Rh,Wh,Uh,Sh,Th,Vh]);
   }break;
  default:
   var Zh=$f(1,function(ai){
    var ii=Uh.subtract(Wh);
    var gi=$hs_int2Wordzh(ii);
    var hi=$hs_plusAddrzh(Rh,Wh);
    var fi=$hs_plusAddrzh(hi,goog.math.Long.fromBits(0,0));
    var $ff=read(Ph,fi,gi);
    var bi=[ai,$ff];
    var ci=bi[0],di=bi[1];
    var ei=$d(1,[di],"sat");
    $r([ci,ei]);
   },[Ph,Rh,Wh,Uh],"sat");
   $$GHCziIOziFD_zdfBufferedIOFD12.C([$$GHCziIOziFD_zdfBufferedIOFD11,Zh,$$GHCziIOziFD_zdfBufferedIOFD9,Xh],function(ji){
    var ki=ji[0],li=ji[1];
    $M(li,function(mi){
     var ni=mi.v[0];
     $M(ni,function(oi){
      switch(oi.toString()){
      case "-1":
       var xi=$hs_touchzh(Sh,ki);
       var vi=$d(1,[Rh,Sh,Th,Uh,Vh,Wh],"sat");
       var wi=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD8,vi],"sat");
       $r([xi,wi]);break;
      case "0":
       var Ai=$hs_touchzh(Sh,ki);
       var yi=$d(1,[Rh,Sh,Th,Uh,Vh,Wh],"sat");
       var zi=$d(1,[$$DataziMaybe_Nothing,yi],"sat");
       $r([Ai,zi]);break;
      default:
       var ui=$hs_touchzh(Sh,ki);
       var qi=Wh.add(oi);
       var pi=$d(1,[Rh,Sh,Th,Uh,Vh,qi],"sat");
       var ri=$d(1,[oi],"sat");
       var si=$d(2,[ri],"sat");
       var ti=$d(1,[si,pi],"sat");
       $r([ui,ti]);
      }
     },[Rh,Wh,Uh,Sh,ki,Th,Vh]);
    },[Rh,Wh,Uh,Sh,ki,Th,Vh]);
   },[Rh,Wh,Uh,Sh,Th,Vh]);
  }
 },[Ph,Rh,Wh,Uh,Xh,Sh,Th,Vh]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD4=$f(3,function(kj,lj,mj){
 $M(kj,function(nj){
  var oj=nj.v[0],pj=nj.v[1];
  $M(lj,function(qj){
   var rj=qj.v[0],sj=qj.v[1],tj=qj.v[2],uj=qj.v[3],vj=qj.v[4],wj=qj.v[5];
   $$GHCziIOziFD_zdwa2.J(oj,pj,rj,sj,tj,uj,vj,wj,mj);
  },[oj,pj,mj]);
 },[lj,mj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa=$f(9,function(xj,yj,zj,Aj,Bj,Cj,Dj,Ej,Fj){
 var Hj=Ej.subtract(Dj);
 var Gj=$d(1,[Hj],"sat");
 var Jj=$hs_plusAddrzh(zj,Dj);
 var Ij=$d(1,[Jj],"sat");
 $$GHCziIOziFD_zdwa1.C([xj,yj,Ij,Gj,Fj],function(Kj){
  var Lj=Kj[0],Mj=Kj[1];
  var Sj=$hs_touchzh(Aj,Lj);
  var Nj=$t(function(){
   $M(Mj,function(Oj){
    var Pj=Oj.v[0];
    var Qj=Pj.equals(Ej)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Qj.g){
    case 1:
     $R(1,[zj,Aj,Bj,Cj,Pj,Ej],"Buffer");break;
    case 2:
     $R(1,[zj,Aj,Bj,Cj,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");break;
    }
   },[zj,Ej,Aj,Bj,Cj]);
  },[zj,Ej,Aj,Mj,Bj,Cj],"sat");
  var Rj=$d(1,[Mj,Nj],"sat");
  $r([Sj,Rj]);
 },[zj,Ej,Aj,Bj,Cj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD1=$f(3,function(Tj,Uj,Vj){
 $M(Tj,function(Wj){
  var Xj=Wj.v[0],Yj=Wj.v[1];
  $M(Uj,function(Zj){
   var ak=Zj.v[0],bk=Zj.v[1],ck=Zj.v[2],dk=Zj.v[3],ek=Zj.v[4],fk=Zj.v[5];
   $$GHCziIOziFD_zdwa.J(Xj,Yj,ak,bk,ck,dk,ek,fk,Vj);
  },[Xj,Yj,Vj]);
 },[Uj,Vj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa3=$f(9,function(gk,hk,ik,jk,kk,lk,mk,nk,ok){
 var Ck=lk.subtract(nk);
 var qk=$hs_int2Wordzh(Ck);
 var pk=$d(1,[qk],"sat");
 var sk=$hs_plusAddrzh(ik,nk);
 var rk=$d(1,[sk],"sat");
 $$GHCziIOziFD_zdwa4.C([$$GHCziIOziFD_zdfBufferedIOFD14,gk,hk,rk,$$GHCziIOziFD_zdfBufferedIOFD6,pk,ok],function(tk){
  var uk=tk[0],vk=tk[1];
  var Bk=$hs_touchzh(jk,uk);
  var wk=$t(function(){
   $M(vk,function(xk){
    var yk=xk.v[0];
    var zk=nk.add(yk);
    $R(1,[ik,jk,kk,lk,mk,zk],"Buffer");
   },[ik,nk,lk,jk,kk,mk]);
  },[ik,nk,lk,jk,vk,kk,mk],"sat");
  var Ak=$d(1,[vk,wk],"sat");
  $r([Bk,Ak]);
 },[ik,nk,lk,jk,kk,mk]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD13=$f(3,function(Dk,Ek,Fk){
 $M(Dk,function(Gk){
  var Hk=Gk.v[0],Ik=Gk.v[1];
  $M(Ek,function(Jk){
   var Kk=Jk.v[0],Lk=Jk.v[1],Mk=Jk.v[2],Nk=Jk.v[3],Ok=Jk.v[4],Pk=Jk.v[5];
   $$GHCziIOziFD_zdwa3.J(Hk,Ik,Kk,Lk,Mk,Nk,Ok,Pk,Fk);
  },[Hk,Ik,Fk]);
 },[Ek,Fk]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD3=$f(3,function(Qk,Rk,Sk){
 var Tk=$t(function(){
  $M(Rk,function(Uk){
   var Vk=Uk.v[0],Wk=Uk.v[1],Xk=Uk.v[3];
   $R(1,[Vk,Wk,$$GHCziIOziBuffer_WriteBuffer,Xk,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
  },[]);
 },[Rk],"sat");
 $r([Sk,Tk]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD=$D(1,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD15,$$GHCziIOziFD_zdfBufferedIOFD13,$$GHCziIOziFD_zdfBufferedIOFD4,$$GHCziIOziFD_zdfBufferedIOFD3,$$GHCziIOziFD_zdfBufferedIOFD2,$$GHCziIOziFD_zdfBufferedIOFD1]);
},"at libraries/base/GHC/IO/FD.hs:119:10");
var $$GHCziIOziFD$f=$F(1,function(Tl){
 $M(Tl,function(Ul){
  var Vl=Ul.v[0];
  $M(Vl,function(Wl){
   switch(Wl.toString()){
   case "-1":
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},"lvl");
var $$GHCziIOziFD$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdWriteNonBlocking");
},"at libraries/base/GHC/IO/FD.hs:542:26");
var $$GHCziIOziFD$o=$F(1,function(fm){
 $r([fm,$$GHCziIOziFD_zdfBufferedIOFD10]);
},"a");
var $$GHCziIOziFD$p=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"a1");
var $$GHCziIOziHandle_hFlush2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hFlush");
},[],"in `base:GHC.IO.Handle'");
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
var $$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_EOF,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_ioezuEOF=$f(1,function(m){
 $$GHCziIOziHandleziInternals$l.J(m);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:328:1");
var $$GHCziIOziHandleziInternals_wantSeekableHandle5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("handle is closed");
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_augmentIOError=$f(3,function(n,o,p){
 $M(n,function(q){
  var r=q.v[1],s=q.v[3],t=q.v[4],u=q.v[5];
  var v=$t(function(){
   $M(u,function(w){
    switch(w.g){
    case 1:
     $M(p,function(x){
      switch(x.g){
      case 1:
       var y=x.v[0];
       $R(2,[y],"Just");break;
      case 2:
       var z=x.v[0];
       $R(2,[z],"Just");break;
      }
     },[]);break;
    case 2:
     $A(w);break;
    }
   },[p]);
  },[p,u],"sat");
  var A=$d(2,[p],"sat");
  $R(1,[A,r,o,s,t,v],"IOError");
 },[p,o]);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:214:1");
var $$GHCziIOziHandleziInternals_ioezufinalizzedHandle=$f(1,function(B){
 var C=$d(2,[B],"sat");
 var D=$d(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$o,$$DataziMaybe_Nothing,C],"sat");
 $$GHCziException_throw2.J(D,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:345:1");
var $$GHCziIOziHandleziInternals_zdwa=$f(5,function(G,H,I,J,K){
 var L=$f(3,function(M,N,O){
  G.C([M,N,O],function(P){
   var Q=P[0],R=P[1];
   $M(R,function(S){
    var T=S.v[0],U=S.v[1],V=S.v[2];
    $M(T,function(W){
     switch(W.g){
     case 3:
      $M(M,function(Y){
       var Z=Y.v[4];
       $M(U,function(a1){
	var b1=a1.v[4];
	var c1=Z.equals(b1)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(c1.g){
	case 1:
	 var d1=$d(1,[a1,V],"sat");
	 $r([Q,d1]);break;
	case 2:
	 H.C([a1,V,Q],function(e1){
	  var f1=e1[0],g1=e1[1];
	  $M(g1,function(h1){
	   var i1=h1.v[0],j1=h1.v[1];
	   L.J(i1,j1,f1);
	  },[G,H,f1,L]);
	 },[G,H,L]);break;
	}
       },[G,Q,V,Z,H,L]);
      },[G,Q,U,V,H,L]);break;
     default:
      var X=$d(1,[U,V],"sat");
      $r([Q,X]);
     }
    },[M,G,Q,U,V,H,L]);
   },[M,G,Q,H,L]);
  },[M,G,H,L]);
 },[G,H],"$wa4");
 L.J(I,J,K);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandle2=$f(3,function(B1,C1,D1){
 $M(C1,function(E1){
  var F1=E1.v[1],G1=E1.v[3],H1=E1.v[4],I1=E1.v[5],J1=E1.v[8];
  $M(H1,function(K1){
   switch(K1.g){
   case 3:
    B1.J(E1,D1);break;
   case 4:
    $$GHCziIOziHandleziInternals$k.J(D1);break;
   case 5:
    $$GHCziIOziHandleziInternals$k.J(D1);break;
   case 6:
    var L1=$hs_readMutVarzh(I1,D1);
    var M1=L1[0],N1=L1[1];
    $M(N1,function(O1){
     var P1=O1.v[2],Q1=O1.v[4],R1=O1.v[5];
     $M(P1,function(S1){
      switch(S1.g){
      case 1:
       B1.J(E1,M1);break;
      case 2:
       var T1=Q1.equals(R1)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(T1.g){
       case 1:
	var U1=$hs_readMutVarzh(I1,M1);
	var V1=U1[0],W1=U1[1];
	$M(W1,function(X1){
	 var Y1=X1.v[4],Z1=X1.v[5];
	 var a2=Y1.equals(Z1)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(a2.g){
	 case 1:
	  $$GHCziIOziBufferedIO_flushWriteBuffer.C([F1,G1,X1,V1],function(b2){
	   var c2=b2[0],d2=b2[1];
	   var A2=$hs_writeMutVarzh(I1,d2,c2);
	   var e2=$hs_readMutVarzh(J1,A2);
	   var f2=e2[0],g2=e2[1];
	   var h2=$t(function(){
	    $M(g2,function(i2){
	     var j2=i2.v[0],k2=i2.v[1],l2=i2.v[3],m2=i2.v[4],n2=i2.v[5];
	     $R(1,[j2,k2,$$GHCziIOziBuffer_ReadBuffer,l2,m2,n2],"Buffer");
	    },[]);
	   },[g2],"sat");
	   var z2=$hs_writeMutVarzh(J1,h2,f2);
	   var o2=$hs_readMutVarzh(I1,z2);
	   var p2=o2[0],q2=o2[1];
	   var r2=$t(function(){
	    $M(q2,function(s2){
	     var t2=s2.v[0],u2=s2.v[1],v2=s2.v[3],w2=s2.v[4],x2=s2.v[5];
	     $R(1,[t2,u2,$$GHCziIOziBuffer_ReadBuffer,v2,w2,x2],"Buffer");
	    },[]);
	   },[q2],"sat");
	   var y2=$hs_writeMutVarzh(I1,r2,p2);
	   B1.J(E1,y2);
	  },[E1,B1,I1,J1]);break;
	 case 2:
	  var B2=$hs_readMutVarzh(J1,V1);
	  var C2=B2[0],D2=B2[1];
	  var E2=$t(function(){
	   $M(D2,function(F2){
	    var G2=F2.v[0],H2=F2.v[1],I2=F2.v[3],J2=F2.v[4],K2=F2.v[5];
	    $R(1,[G2,H2,$$GHCziIOziBuffer_ReadBuffer,I2,J2,K2],"Buffer");
	   },[]);
	  },[D2],"sat");
	  var W2=$hs_writeMutVarzh(J1,E2,C2);
	  var L2=$hs_readMutVarzh(I1,W2);
	  var M2=L2[0],N2=L2[1];
	  var O2=$t(function(){
	   $M(N2,function(P2){
	    var Q2=P2.v[0],R2=P2.v[1],S2=P2.v[3],T2=P2.v[4],U2=P2.v[5];
	    $R(1,[Q2,R2,$$GHCziIOziBuffer_ReadBuffer,S2,T2,U2],"Buffer");
	   },[]);
	  },[N2],"sat");
	  var V2=$hs_writeMutVarzh(I1,O2,M2);
	  B1.J(E1,V2);break;
	 }
	},[E1,B1,I1,F1,G1,V1,J1]);break;
       case 2:
	var X2=$hs_readMutVarzh(J1,M1);
	var Y2=X2[0],Z2=X2[1];
	var a3=$t(function(){
	 $M(Z2,function(b3){
	  var c3=b3.v[0],d3=b3.v[1],e3=b3.v[3],f3=b3.v[4],g3=b3.v[5];
	  $R(1,[c3,d3,$$GHCziIOziBuffer_ReadBuffer,e3,f3,g3],"Buffer");
	 },[]);
	},[Z2],"sat");
	var s3=$hs_writeMutVarzh(J1,a3,Y2);
	var h3=$hs_readMutVarzh(I1,s3);
	var i3=h3[0],j3=h3[1];
	var k3=$t(function(){
	 $M(j3,function(l3){
	  var m3=l3.v[0],n3=l3.v[1],o3=l3.v[3],p3=l3.v[4],q3=l3.v[5];
	  $R(1,[m3,n3,$$GHCziIOziBuffer_ReadBuffer,o3,p3,q3],"Buffer");
	 },[]);
	},[j3],"sat");
	var r3=$hs_writeMutVarzh(I1,k3,i3);
	B1.J(E1,r3);break;
       }break;
      }
     },[E1,B1,I1,M1,Q1,R1,F1,G1,J1]);
    },[E1,B1,I1,M1,F1,G1,J1]);break;
   default:
    $$GHCziIOziHandleziInternals$n.J(D1);
   }
  },[D1,E1,B1,I1,F1,G1,J1]);
 },[D1,B1]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushWriteBuffer1=$f(2,function(t3,u3){
 $M(t3,function(v3){
  var w3=v3.v[1],x3=v3.v[3],y3=v3.v[5];
  var z3=$hs_readMutVarzh(y3,u3);
  var A3=z3[0],B3=z3[1];
  $M(B3,function(C3){
   var D3=C3.v[2];
   $M(D3,function(E3){
    switch(E3.g){
    case 1:
     $r([A3,$$GHCziTuple_Z0T]);break;
    case 2:
     var F3=$hs_readMutVarzh(y3,A3);
     var G3=F3[0],H3=F3[1];
     $M(H3,function(I3){
      var J3=I3.v[4],K3=I3.v[5];
      var L3=J3.equals(K3)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(L3.g){
      case 1:
       $$GHCziIOziBufferedIO_flushWriteBuffer.C([w3,x3,I3,G3],function(M3){
	var N3=M3[0],O3=M3[1];
	var P3=$hs_writeMutVarzh(y3,O3,N3);
	$r([P3,$$GHCziTuple_Z0T]);
       },[y3]);break;
      case 2:
       $r([G3,$$GHCziTuple_Z0T]);break;
      }
     },[y3,w3,x3,G3]);break;
    }
   },[y3,A3,w3,x3]);
  },[y3,A3,w3,x3]);
 },[u3]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_zdwa3=$f(8,function(Q3,R3,S3,T3,U3,V3,W3,X3){
 $M(Q3,function(Y3){
  var Z3=Y3.v[1],a4=Y3.v[3],b4=Y3.v[5],c4=Y3.v[6],d4=Y3.v[10];
  var e4=$hs_readMutVarzh(b4,X3);
  var f4=e4[0],g4=e4[1];
  var h4=$f(3,function(i4,j4,k4){
   $M(j4,function(l4){
    var m4=l4.v[3],n4=l4.v[4],o4=l4.v[5];
    var p4=$f(1,function(q4){
     $$GHCziIOziBufferedIO_flushWriteBuffer.C([Z3,a4,l4,k4],function(r4){
      var s4=r4[0],t4=r4[1];
      var C4=$hs_writeMutVarzh(b4,t4,s4);
      $M(i4,function(u4){
       var v4=u4.v[0],w4=u4.v[1],x4=u4.v[2],y4=u4.v[3],z4=u4.v[4],A4=u4.v[5];
       var B4=z4.equals(A4)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(B4.g){
       case 1:
	$$GHCziIOziHandleziInternals_zdwa3.J(Y3,v4,w4,x4,y4,z4,A4,C4);break;
       case 2:
	$r([C4,$$GHCziTuple_Z0T]);break;
       }
      },[Y3,C4]);
     },[b4,i4,Y3]);
    },[b4,Z3,a4,l4,k4,i4,Y3],"$w$j");
    var D4=m4.equals(o4)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(D4.g){
    case 1:
     $M(i4,function(E4){
      var F4=E4.v[0],G4=E4.v[1],H4=E4.v[2],I4=E4.v[3],J4=E4.v[4],K4=E4.v[5];
      var L4=$t(function(){
       $r(J4.equals(K4)?$$GHCziTypes_True:$$GHCziTypes_False);
      },[J4,K4],"lvl19");
      var M4=$f(1,function(N4){
       $M(c4,function(O4){
	switch(O4.g){
	case 1:
	 p4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var Q4=$hs_writeMutVarzh(b4,l4,k4);
	 $M(L4,function(P4){
	  switch(P4.g){
	  case 1:
	   $$GHCziIOziHandleziInternals_zdwa3.J(Y3,F4,G4,H4,I4,J4,K4,Q4);break;
	  case 2:
	   $r([Q4,$$GHCziTuple_Z0T]);break;
	  }
	 },[Y3,J4,K4,F4,G4,H4,I4,Q4]);break;
	case 3:
	 var R4=O4.v[0];
	 $M(R4,function(S4){
	  switch(S4.g){
	  case 1:
	   var U4=$hs_writeMutVarzh(b4,l4,k4);
	   $M(L4,function(T4){
	    switch(T4.g){
	    case 1:
	     $$GHCziIOziHandleziInternals_zdwa3.J(Y3,F4,G4,H4,I4,J4,K4,U4);break;
	    case 2:
	     $r([U4,$$GHCziTuple_Z0T]);break;
	    }
	   },[Y3,J4,K4,F4,G4,H4,I4,U4]);break;
	  case 2:
	   var V4=S4.v[0];
	   $M(V4,function(W4){
	    var X4=W4.v[0];
	    var b5=o4.subtract(n4);
	    var Y4=b5.greaterThanOrEqual(X4)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Y4.g){
	    case 1:
	     var a5=$hs_writeMutVarzh(b4,l4,k4);
	     $M(L4,function(Z4){
	      switch(Z4.g){
	      case 1:
	       $$GHCziIOziHandleziInternals_zdwa3.J(Y3,F4,G4,H4,I4,J4,K4,a5);break;
	      case 2:
	       $r([a5,$$GHCziTuple_Z0T]);break;
	      }
	     },[Y3,J4,K4,F4,G4,H4,I4,a5]);break;
	    case 2:
	     p4.J($$GHCziPrim_realWorldzh);break;
	    }
	   },[b4,Z3,a4,l4,k4,i4,Y3,p4,o4,J4,K4,L4,F4,G4,H4,I4,n4]);break;
	  }
	 },[b4,Z3,a4,l4,k4,i4,Y3,p4,o4,J4,K4,L4,F4,G4,H4,I4,n4]);break;
	}
       },[b4,Z3,a4,l4,k4,i4,Y3,p4,o4,J4,K4,L4,F4,G4,H4,I4,n4]);
      },[b4,l4,k4,Y3,p4,o4,J4,K4,L4,c4,F4,G4,H4,I4,n4],"$w$j1");
      $M(L4,function(c5){
       switch(c5.g){
       case 1:
	var d5=J4.equals(V3)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(d5.g){
	case 1:
	 M4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 p4.J($$GHCziPrim_realWorldzh);break;
	}break;
       case 2:
	M4.J($$GHCziPrim_realWorldzh);break;
       }
      },[b4,Z3,a4,l4,k4,i4,Y3,p4,o4,J4,K4,L4,c4,F4,G4,H4,I4,n4,M4,V3]);
     },[b4,Z3,a4,l4,k4,i4,Y3,p4,o4,c4,n4,V3]);break;
    case 2:
     p4.J($$GHCziPrim_realWorldzh);break;
    }
   },[b4,Z3,a4,k4,i4,Y3,c4,V3]);
  },[b4,Z3,a4,Y3,c4,V3],"$wa4");
  $M(d4,function(e5){
   switch(e5.g){
   case 1:
    $$GHCziIOziEncodingziLatin1_zdwa.C([R3,S3,T3,U3,V3,W3,g4,f4],function(f5){
     var g5=f5[0],h5=f5[1];
     $M(h5,function(i5){
      var j5=i5.v[1],k5=i5.v[2];
      h4.J(j5,k5,g5);
     },[b4,Z3,a4,Y3,c4,V3,h4,g5]);
    },[b4,Z3,a4,Y3,c4,V3,h4]);break;
   case 2:
    var l5=e5.v[0];
    $M(l5,function(m5){
     var n5=m5.v[0],o5=m5.v[1];
     var p5=$d(1,[R3,S3,T3,U3,V3,W3],"sat");
     $$GHCziIOziHandleziInternals_zdwa.C([n5,o5,p5,g4,f4],function(q5){
      var r5=q5[0],s5=q5[1];
      $M(s5,function(t5){
       var u5=t5.v[0],v5=t5.v[1];
       h4.J(u5,v5,r5);
      },[b4,Z3,a4,Y3,c4,V3,h4,r5]);
     },[b4,Z3,a4,Y3,c4,V3,h4]);
    },[b4,Z3,a4,Y3,c4,V3,h4,R3,S3,T3,U3,W3,g4,f4]);break;
   }
  },[b4,Z3,a4,Y3,c4,V3,h4,R3,S3,T3,U3,W3,g4,f4]);
 },[X3,V3,R3,S3,T3,U3,W3]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushByteReadBuffer3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("cannot flush the read buffer: underlying device is not seekable");
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushByteReadBuffer2=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_flushByteReadBuffer3,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushByteReadBuffer1=$f(2,function(g7,h7){
 $M(g7,function(i7){
  var j7=i7.v[0],k7=i7.v[3],l7=i7.v[5];
  var m7=$hs_readMutVarzh(l7,h7);
  var n7=m7[0],o7=m7[1];
  $M(o7,function(p7){
   var q7=p7.v[0],r7=p7.v[1],s7=p7.v[2],t7=p7.v[3],u7=p7.v[4],v7=p7.v[5];
   var w7=u7.equals(v7)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(w7.g){
   case 1:
    $$GHCziIOziDevice_isSeekable.C([j7,k7,n7],function(x7){
     var y7=x7[0],z7=x7[1];
     var A7=$f(1,function(B7){
      var C7=$t(function(){
       var E7=v7.subtract(u7);
       var D7=E7.negate();
       $$GHCziIntegerziType_smallInteger.J(D7);
      },[u7,v7],"sat");
      $$GHCziIOziDevice_seek.C([j7,k7,$$GHCziIOziDevice_RelativeSeek,C7,B7],function(F7){
       var G7=F7[0];
       var H7=$d(1,[q7,r7,s7,t7,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
       var I7=$hs_writeMutVarzh(l7,H7,G7);
       $r([I7,$$GHCziTuple_Z0T]);
      },[l7,q7,r7,s7,t7]);
     },[l7,u7,v7,j7,k7,q7,r7,s7,t7],"a9");
     $M(z7,function(J7){
      switch(J7.g){
      case 1:
       $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_flushByteReadBuffer2,y7],function(K7){
	var L7=K7[0];
	A7.J(L7);
       },[l7,u7,v7,j7,k7,q7,r7,s7,t7,A7]);break;
      case 2:
       A7.J(y7);break;
      }
     },[l7,u7,v7,j7,k7,q7,r7,s7,t7,A7,y7]);
    },[l7,u7,v7,j7,k7,q7,r7,s7,t7]);break;
   case 2:
    $r([n7,$$GHCziTuple_Z0T]);break;
   }
  },[l7,j7,k7,n7]);
 },[h7]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_mkDuplexHandle5=$f(12,function(W9,X9,Y9,Z9,aa,ba,ca,da,ea,fa,ga,ha){
 var ia=$t(function(){
  $M(ba,function(ja){
   switch(ja.g){
   case 3:
    $R(1,[],"ReadBuffer");break;
   default:
    $R(2,[],"WriteBuffer");
   }
  },[]);
 },[ba],"buf_state");
 var ka=$t(function(){
  $$GHCziIOziBufferedIO_newBuffer.J(X9,Z9,ia);
 },[ia,X9,Z9],"lvl19");
 var la=$t(function(){
  $M(ea,function(ma){
   var na=ma.v[0];
   $A(na);
  },[]);
 },[ea],"lvl20");
 var oa=$t(function(){
  $M(ea,function(pa){
   var qa=pa.v[1];
   $A(qa);
  },[]);
 },[ea],"lvl21");
 var ra=$f(3,function(sa,ta,ua){
  ka.C([ua],function(va){
   var wa=va[0],xa=va[1];
   var ya=$hs_newMutVarzh(xa,wa);
   var za=ya[0],Aa=ya[1];
   var Ba=$d(1,[$$GHCziIOziHandleziInternals$r,xa],"sat");
   var Ca=$hs_newMutVarzh(Ba,za);
   var Da=Ca[0],Ea=Ca[1];
   var Fa=$f(4,function(Ga,Ha,Ia,Ja){
    var Ka=$hs_newMutVarzh($$GHCziIOziHandleziTypes_BufferListNil,Ga);
    var La=Ka[0],Ma=Ka[1];
    var Na=$hs_newMVarzh(La);
    var Oa=Na[0],Pa=Na[1];
    var Qa=$t(function(){
     $M(Z9,function(Ra){
      $R(1,[W9,X9,Y9,Ra,ba,Aa,Ja,Ea,Ha,Ma,sa,ta,da,la,oa,ga],"Handle__");
     },[ba,X9,la,oa,W9,Y9,Aa,Ja,Ea,Ha,Ma,sa,ta,da,ga]);
    },[ba,X9,Z9,la,oa,W9,Y9,Aa,Ja,Ea,Ha,Ma,sa,ta,da,ga],"sat");
    $b($hs_putMVarzh,[Pa,Qa,Oa],function(Ua){
     $M(fa,function(Sa){
      switch(Sa.g){
      case 1:
       var Ta=$d(1,[aa,Pa],"sat");
       $r([Ua,Ta]);break;
      case 2:
       var Va=Sa.v[0];
       var Wa=$t(function(){
	var Xa=$d(1,[Pa],"sat");
	Va.J(aa,Xa);
       },[Pa,aa,Va],"sat");
       var Ya=$hs_mkWeakzh(Pa,$$GHCziTuple_Z0T,Wa,Ua);
       var Za=Ya[0];
       var ab=$d(1,[aa,Pa],"sat");
       $r([Za,ab]);break;
      }
     },[Pa,Ua,aa]);
    },[Pa,fa,aa]);
   },[ba,X9,Z9,la,oa,W9,Y9,Aa,Ea,sa,ta,da,ga,fa,aa],"$s$w$j");
   $M(ca,function(bb){
    switch(bb.g){
    case 1:
     var cb=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Da);
     var db=cb[0],eb=cb[1];
     var fb=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(8192,0),db);
     var gb=fb[0],hb=fb[1];
     var ib=$d(1,[eb],"sat");
     var jb=$d(2,[hb,ib],"sat");
     var lb=$hs_byteArrayContentszh(hb);
     var kb=$d(1,[lb,jb,ia,goog.math.Long.fromBits(2048,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
     var mb=$hs_newMutVarzh(kb,gb);
     var nb=mb[0],ob=mb[1];
     Fa.J(nb,ob,$$GHCziPrim_coercionTokenzh,$$GHCziIOziHandleziTypes_NoBuffering);break;
    case 2:
     var pb=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Da);
     var qb=pb[0],rb=pb[1];
     var sb=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(8192,0),qb);
     var tb=sb[0],ub=sb[1];
     var vb=$d(1,[rb],"sat");
     var wb=$d(2,[ub,vb],"sat");
     var yb=$hs_byteArrayContentszh(ub);
     var xb=$d(1,[yb,wb,ia,goog.math.Long.fromBits(2048,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
     var zb=$hs_newMutVarzh(xb,tb);
     var Ab=zb[0],Bb=zb[1];
     $$GHCziIOziDevice_isTerminal.C([W9,Z9,Ab],function(Cb){
      var Db=Cb[0],Eb=Cb[1];
      var Fb=$t(function(){
       $M(Eb,function(Gb){
	switch(Gb.g){
	case 1:
	 $A($$GHCziIOziHandleziInternals$s);break;
	case 2:
	 $R(2,[],"LineBuffering");break;
	}
       },[]);
      },[Eb],"sat");
      Fa.J(Db,Bb,$$GHCziPrim_coercionTokenzh,Fb);
     },[ba,X9,Z9,la,oa,W9,Y9,Aa,Ea,sa,ta,da,ga,fa,aa,Fa,Bb]);break;
    }
   },[ba,ia,X9,Z9,la,oa,W9,Y9,Aa,Ea,sa,ta,da,ga,fa,aa,Fa,Da]);
  },[ba,ia,X9,Z9,la,oa,W9,Y9,sa,ta,da,ga,fa,aa,ca]);
 },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca],"a7");
 $M(da,function(Hb){
  switch(Hb.g){
  case 1:
   ra.J($$DataziMaybe_Nothing,$$DataziMaybe_Nothing,ha);break;
  case 2:
   var Ib=Hb.v[0];
   $M(Ib,function(Jb){
    var Kb=Jb.v[1],Lb=Jb.v[2];
    $M(ba,function(Mb){
     switch(Mb.g){
     case 3:
      Kb.C([ha],function(Nb){
       var Ob=Nb[0],Pb=Nb[1];
       var Qb=$d(2,[Pb],"sat");
       ra.J($$DataziMaybe_Nothing,Qb,Ob);
      },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca,ra]);break;
     case 4:
      Lb.C([ha],function(Rb){
       var Sb=Rb[0],Tb=Rb[1];
       var Ub=$d(2,[Tb],"sat");
       ra.J(Ub,$$DataziMaybe_Nothing,Sb);
      },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca,ra]);break;
     case 5:
      Lb.C([ha],function(Vb){
       var Wb=Vb[0],Xb=Vb[1];
       var Yb=$d(2,[Xb],"sat");
       ra.J(Yb,$$DataziMaybe_Nothing,Wb);
      },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca,ra]);break;
     case 6:
      Kb.C([ha],function(Zb){
       var ac=Zb[0],bc=Zb[1];
       Lb.C([ac],function(cc){
	var dc=cc[0],ec=cc[1];
	var fc=$d(2,[bc],"sat");
	var gc=$d(2,[ec],"sat");
	ra.J(gc,fc,dc);
       },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca,ra,bc]);
      },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca,ra,Lb]);break;
     default:
      ra.J($$DataziMaybe_Nothing,$$DataziMaybe_Nothing,ha);
     }
    },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca,ra,ha,Kb,Lb]);
   },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca,ra,ha]);break;
  }
 },[ba,ia,X9,Z9,ka,la,oa,W9,Y9,da,ga,fa,aa,ca,ra,ha]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_hLookAheadzuzuzdsa=$f(27,function(Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,ad,bd,cd,dd,ed,fd,gd,hd,id){
 var jd=$hs_readMutVarzh(Nc,id);
 var kd=jd[0],ld=jd[1];
 $M(ld,function(md){
  var nd=md.v[4],od=md.v[5];
  var pd=$f(2,function(qd,rd){
   Wc.C([rd],function(sd){
    var td=sd[0],ud=sd[1];
    var vd=$d(1,[ud,qd],"sat");
    var Od=$hs_writeMutVarzh(Pc,vd,td);
    var wd=$d(1,[cd,dd,ed,fd,gd,hd],"sat");
    $$GHCziIOziHandleziInternals_zdwa.C([Tc,Uc,qd,wd,Od],function(xd){
     var yd=xd[0],zd=xd[1];
     $M(zd,function(Ad){
      var Bd=Ad.v[0],Cd=Ad.v[1];
      var Gd=$hs_writeMutVarzh(Nc,Bd,yd);
      $M(Cd,function(Dd){
       var Ed=Dd.v[5];
       var Fd=Ed.equals(hd)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Fd.g){
       case 1:
	$r([Gd,Dd]);break;
       case 2:
	$M(Bd,function(Hd){
	 var Id=Hd.v[0],Jd=Hd.v[1],Kd=Hd.v[2],Ld=Hd.v[3],Md=Hd.v[4],Nd=Hd.v[5];
	 $$GHCziIOziHandleziInternals$v.J(Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,ad,bd,Id,Jd,Kd,Ld,Md,Nd,cd,dd,ed,fd,gd,hd,Gd);
	},[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Gd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd]);break;
       }
      },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Bd,Gd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd]);
     },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,yd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd]);
    },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd]);
   },[Nc,Wc,Pc,qd,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd]);
  },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd],"a8");
  var Pd=nd.equals(od)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Pd.g){
  case 1:
   pd.J(md,kd);break;
  case 2:
   $$GHCziIOziBufferedIO_fillReadBuffer.C([Jc,Lc,md,kd],function(Qd){
    var Rd=Qd[0],Sd=Qd[1];
    $M(Sd,function(Td){
     var Ud=Td.v[0],Vd=Td.v[1];
     $M(Ud,function(Wd){
      var Xd=Wd.v[0];
      $M(Xd,function(Yd){
       switch(Yd.toString()){
       case "0":
	$$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,Rd],function(Zd){
	 var ae=Zd[0],be=Zd[1];
	 pd.J(be,ae);
	},[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd,pd]);break;
       default:
	pd.J(Vd,Rd);
       }
      },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd,pd,Vd,Rd]);
     },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd,pd,Vd,Rd]);
    },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd,pd,Rd]);
   },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd,pd]);break;
  }
 },[Nc,Wc,Pc,Tc,Uc,cd,dd,ed,fd,gd,hd,Ic,Jc,Kc,Lc,Mc,Oc,Qc,Rc,Sc,Vc,Xc,Yc,Zc,ad,bd,kd]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_hLookAheadzu2=$f(3,function(ce,de,ee){
 $M(ce,function(fe){
  var ge=fe.v[0],he=fe.v[1],ie=fe.v[2],je=fe.v[3],ke=fe.v[4],le=fe.v[5],me=fe.v[6],ne=fe.v[7],oe=fe.v[8],pe=fe.v[9],qe=fe.v[10],re=fe.v[11],se=fe.v[12],te=fe.v[13],ue=fe.v[14],ve=fe.v[15];
  var we=$hs_readMutVarzh(le,ee);
  var xe=we[0],ye=we[1];
  $M(ye,function(ze){
   var Ae=ze.v[0],Be=ze.v[1],Ce=ze.v[2],De=ze.v[3],Ee=ze.v[4],Fe=ze.v[5];
   var Ge=$f(7,function(He,Ie,Je,Ke,Le,Me,Ne){
    $M(re,function(Oe){
     switch(Oe.g){
     case 1:
      var Pe=$d(1,[He,Ie,Je,Ke,Le,Me],"sat");
      var Qe=$d(1,[$$GHCziIOziHandleziInternals$t,Pe],"sat");
      var xf=$hs_writeMutVarzh(ne,Qe,Ne);
      $$GHCziIOziEncodingziLatin1_zdwa1.C([He,Ie,Je,Ke,Le,Me,de,xf],function(Re){
       var Se=Re[0],Te=Re[1];
       $M(Te,function(Ue){
	var Ve=Ue.v[1],We=Ue.v[2];
	var cf=$hs_writeMutVarzh(le,Ve,Se);
	$M(We,function(Xe){
	 var Ye=Xe.v[5];
	 $M(de,function(Ze){
	  var af=Ze.v[5];
	  var bf=Ye.equals(af)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(bf.g){
	  case 1:
	   $r([cf,Xe]);break;
	  case 2:
	   $M(Ve,function(df){
	    var ef=df.v[0],ff=df.v[1],gf=df.v[2],hf=df.v[3],jf=df.v[4],kf=df.v[5];
	    var of=kf.subtract(jf);
	    var wf=$hs_int2Wordzh(of);
	    var vf=$hs_plusAddrzh(ef,jf);
	    var $ff=memcpy(ef,vf,wf);
	    var lf=[cf,$ff];
	    var mf=lf[0];
	    var uf=$hs_touchzh(ff,mf);
	    var nf=$d(1,[ef,ff,gf,hf,goog.math.Long.fromBits(0,0),of],"sat");
	    $$GHCziIOziBufferedIO_fillReadBuffer.C([he,je,nf,uf],function(pf){
	     var qf=pf[1];
	     $M(qf,function(rf){
	      var sf=rf.v[0];
	      $M(sf,function(tf){
	       $A($$GHCziIOziHandleziInternals$u);
	      },[]);
	     },[]);
	    },[]);
	   },[cf,he,je]);break;
	  }
	 },[Ve,Ye,cf,Xe,he,je]);
	},[de,Ve,cf,he,je]);
       },[le,de,Se,he,je]);
      },[le,de,he,je]);break;
     case 2:
      var yf=Oe.v[0];
      $M(yf,function(zf){
       var Af=zf.v[0],Bf=zf.v[1],Cf=zf.v[2],Df=zf.v[3],Ef=zf.v[4];
       Df.C([Ne],function(Ff){
	var Gf=Ff[0],Hf=Ff[1];
	var If=$d(1,[He,Ie,Je,Ke,Le,Me],"sat");
	var Jf=$d(1,[Hf,If],"sat");
	var jg=$hs_writeMutVarzh(ne,Jf,Gf);
	var Kf=$d(1,[He,Ie,Je,Ke,Le,Me],"sat");
	$$GHCziIOziHandleziInternals_zdwa.C([Af,Bf,Kf,de,jg],function(Lf){
	 var Mf=Lf[0],Nf=Lf[1];
	 $M(Nf,function(Of){
	  var Pf=Of.v[0],Qf=Of.v[1];
	  var bg=$hs_writeMutVarzh(le,Pf,Mf);
	  $M(Qf,function(Rf){
	   var Sf=Rf.v[5];
	   $M(de,function(Tf){
	    var Uf=Tf.v[0],Vf=Tf.v[1],Wf=Tf.v[2],Xf=Tf.v[3],Yf=Tf.v[4],Zf=Tf.v[5];
	    var ag=Sf.equals(Zf)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(ag.g){
	    case 1:
	     $r([bg,Rf]);break;
	    case 2:
	     $M(Pf,function(cg){
	      var dg=cg.v[0],eg=cg.v[1],fg=cg.v[2],gg=cg.v[3],hg=cg.v[4],ig=cg.v[5];
	      $$GHCziIOziHandleziInternals$v.J(ge,he,ie,je,ke,le,me,ne,oe,pe,qe,Af,Bf,Cf,Df,Ef,se,te,ue,ve,dg,eg,fg,gg,hg,ig,Uf,Vf,Wf,Xf,Yf,Zf,bg);
	     },[le,ne,he,je,Df,Af,Bf,Zf,bg,ge,ie,ke,me,oe,pe,qe,Cf,Ef,se,te,ue,ve,Uf,Vf,Wf,Xf,Yf]);break;
	    }
	   },[le,ne,he,je,Df,Af,Bf,Pf,Sf,bg,Rf,ge,ie,ke,me,oe,pe,qe,Cf,Ef,se,te,ue,ve]);
	  },[le,ne,de,he,je,Df,Af,Bf,Pf,bg,ge,ie,ke,me,oe,pe,qe,Cf,Ef,se,te,ue,ve]);
	 },[le,ne,de,he,je,Df,Af,Bf,Mf,ge,ie,ke,me,oe,pe,qe,Cf,Ef,se,te,ue,ve]);
	},[le,ne,de,he,je,Df,Af,Bf,ge,ie,ke,me,oe,pe,qe,Cf,Ef,se,te,ue,ve]);
       },[le,ne,He,Ie,Je,Ke,Le,Me,de,he,je,Df,Af,Bf,ge,ie,ke,me,oe,pe,qe,Cf,Ef,se,te,ue,ve]);
      },[le,ne,He,Ie,Je,Ke,Le,Me,Ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve]);break;
     }
    },[le,ne,He,Ie,Je,Ke,Le,Me,Ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve]);
   },[le,re,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve],"$sa");
   var kg=$f(2,function(lg,mg){
    $M(re,function(ng){
     switch(ng.g){
     case 1:
      var og=$d(1,[$$GHCziIOziHandleziInternals$t,lg],"sat");
      var bh=$hs_writeMutVarzh(ne,og,mg);
      $M(lg,function(pg){
       var qg=pg.v[0],rg=pg.v[1],sg=pg.v[2],tg=pg.v[3],ug=pg.v[4],vg=pg.v[5];
       $$GHCziIOziEncodingziLatin1_zdwa1.C([qg,rg,sg,tg,ug,vg,de,bh],function(wg){
	var xg=wg[0],yg=wg[1];
	$M(yg,function(zg){
	 var Ag=zg.v[1],Bg=zg.v[2];
	 var Hg=$hs_writeMutVarzh(le,Ag,xg);
	 $M(Bg,function(Cg){
	  var Dg=Cg.v[5];
	  $M(de,function(Eg){
	   var Fg=Eg.v[5];
	   var Gg=Dg.equals(Fg)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Gg.g){
	   case 1:
	    $r([Hg,Cg]);break;
	   case 2:
	    $M(Ag,function(Ig){
	     var Jg=Ig.v[0],Kg=Ig.v[1],Lg=Ig.v[2],Mg=Ig.v[3],Ng=Ig.v[4],Og=Ig.v[5];
	     var Sg=Og.subtract(Ng);
	     var ah=$hs_int2Wordzh(Sg);
	     var Zg=$hs_plusAddrzh(Jg,Ng);
	     var $ff=memcpy(Jg,Zg,ah);
	     var Pg=[Hg,$ff];
	     var Qg=Pg[0];
	     var Yg=$hs_touchzh(Kg,Qg);
	     var Rg=$d(1,[Jg,Kg,Lg,Mg,goog.math.Long.fromBits(0,0),Sg],"sat");
	     $$GHCziIOziBufferedIO_fillReadBuffer.C([he,je,Rg,Yg],function(Tg){
	      var Ug=Tg[1];
	      $M(Ug,function(Vg){
	       var Wg=Vg.v[0];
	       $M(Wg,function(Xg){
		$A($$GHCziIOziHandleziInternals$u);
	       },[]);
	      },[]);
	     },[]);
	    },[he,je,Hg]);break;
	   }
	  },[he,je,Ag,Dg,Hg,Cg]);
	 },[de,he,je,Ag,Hg]);
	},[le,de,he,je,xg]);
       },[le,de,he,je]);
      },[le,de,he,je,bh]);break;
     case 2:
      var ch=ng.v[0];
      $M(ch,function(dh){
       var eh=dh.v[0],fh=dh.v[1],gh=dh.v[2],hh=dh.v[3],ih=dh.v[4];
       hh.C([mg],function(jh){
	var kh=jh[0],lh=jh[1];
	var mh=$d(1,[lh,lg],"sat");
	var Lh=$hs_writeMutVarzh(ne,mh,kh);
	$$GHCziIOziHandleziInternals_zdwa.C([eh,fh,lg,de,Lh],function(nh){
	 var oh=nh[0],ph=nh[1];
	 $M(ph,function(qh){
	  var rh=qh.v[0],sh=qh.v[1];
	  var Dh=$hs_writeMutVarzh(le,rh,oh);
	  $M(sh,function(th){
	   var uh=th.v[5];
	   $M(de,function(vh){
	    var wh=vh.v[0],xh=vh.v[1],yh=vh.v[2],zh=vh.v[3],Ah=vh.v[4],Bh=vh.v[5];
	    var Ch=uh.equals(Bh)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Ch.g){
	    case 1:
	     $r([Dh,th]);break;
	    case 2:
	     $M(rh,function(Eh){
	      var Fh=Eh.v[0],Gh=Eh.v[1],Hh=Eh.v[2],Ih=Eh.v[3],Jh=Eh.v[4],Kh=Eh.v[5];
	      $$GHCziIOziHandleziInternals$v.J(ge,he,ie,je,ke,le,me,ne,oe,pe,qe,eh,fh,gh,hh,ih,se,te,ue,ve,Fh,Gh,Hh,Ih,Jh,Kh,wh,xh,yh,zh,Ah,Bh,Dh);
	     },[le,ne,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,hh,eh,fh,Bh,Dh,gh,ih,wh,xh,yh,zh,Ah]);break;
	    }
	   },[le,ne,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,hh,eh,fh,rh,uh,Dh,th,gh,ih]);
	  },[le,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,hh,eh,fh,rh,Dh,gh,ih]);
	 },[le,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,hh,eh,fh,oh,gh,ih]);
	},[le,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,hh,eh,fh,gh,ih]);
       },[le,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,lg,hh,eh,fh,gh,ih]);
      },[le,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,lg,mg]);break;
     }
    },[le,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,lg,mg]);
   },[le,re,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve],"a8");
   var Mh=Ee.equals(Fe)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Mh.g){
   case 1:
    Ge.J(Ae,Be,Ce,De,Ee,Fe,xe);break;
   case 2:
    $$GHCziIOziBufferedIO_fillReadBuffer.C([he,je,ze,xe],function(Nh){
     var Oh=Nh[0],Ph=Nh[1];
     $M(Ph,function(Qh){
      var Rh=Qh.v[0],Sh=Qh.v[1];
      $M(Rh,function(Th){
       var Uh=Th.v[0];
       $M(Uh,function(Vh){
	switch(Vh.toString()){
	case "0":
	 $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,Oh],function(Wh){
	  var Xh=Wh[0],Yh=Wh[1];
	  kg.J(Yh,Xh);
	 },[le,re,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,kg]);break;
	default:
	 kg.J(Sh,Oh);
	}
       },[le,re,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,kg,Sh,Oh]);
      },[le,re,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,kg,Sh,Oh]);
     },[le,re,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,kg,Oh]);
    },[le,re,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,kg]);break;
   }
  },[le,re,ne,de,he,je,ge,ie,ke,me,oe,pe,qe,se,te,ue,ve,xe]);
 },[ee,de]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_zdwa2=$f(5,function(Rj,Sj,Tj,Uj,Vj){
 $b($hs_takeMVarzh,[Uj,Vj],function(Wj){
  var Xj=Wj[0],Yj=Wj[1];
  var Zj=$f(2,function(ak,bk){
   $b($hs_putMVarzh,[Uj,Yj,bk],function(rk){
    $M(ak,function(ck){
     var dk=ck.v[0],ek=ck.v[1];
     $$GHCziException_zdp1Exception.C([dk,ek],function(fk){
      var gk=fk.v[0],hk=fk.v[1];
      var ik=$f(1,function(jk){
       var kk=$hs_eqWordzh(gk,goog.math.Long.fromBits(2363394409,315339024));
       switch(kk.g){
       case 1:
	$r($hs_raiseIOzh(ck,jk));break;
       case 2:
	var lk=$hs_eqWordzh(hk,goog.math.Long.fromBits(2156861182,4256135785));
	switch(lk.g){
	case 1:
	 $r($hs_raiseIOzh(ck,jk));break;
	case 2:
	 var mk=$hs_myThreadIdzh(jk);
	 var nk=mk[0],ok=mk[1];
	 var pk=$hs_killThreadzh(ok,ck,nk);
	 $$GHCziIOziHandleziInternals_zdwa2.J(Rj,Sj,Tj,Uj,pk);break;
	}break;
       }
      },[Uj,Tj,gk,ck,hk,Rj,Sj],"$wa4");
      var qk=$hs_eqWordzh(gk,goog.math.Long.fromBits(4053623282,1685460941));
      switch(qk.g){
      case 1:
       ik.J(rk);break;
      case 2:
       var sk=$hs_eqWordzh(hk,goog.math.Long.fromBits(3693590983,2507416641));
       switch(sk.g){
       case 1:
	ik.J(rk);break;
       case 2:
	$$GHCziIOziHandleziInternals$w.J(Rj,Sj,ek,rk);break;
       }break;
      }
     },[Uj,Tj,ek,ck,Rj,Sj,rk]);
    },[Uj,Tj,Rj,Sj,rk]);
   },[Uj,Tj,ak,Rj,Sj]);
  },[Uj,Yj,Tj,Rj,Sj],"sat");
  var tk=$t(function(){
   Tj.J(Yj);
  },[Yj,Tj],"sat");
  $k($hs_catchzh,[tk,Zj,Xj]);
 },[Uj,Tj,Rj,Sj]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandle3=$f(5,function(uk,vk,wk,xk,yk){
 var zk=$hs_getMaskingStatezh(yk);
 var Ak=zk[0],Bk=zk[1];
 var Ck=$f(1,function(Dk){
  $M(wk,function(Ek){
   var Fk=Ek.v[0];
   $$GHCziIOziHandleziInternals_zdwa2.C([uk,vk,xk,Fk,Dk],function(Gk){
    var Hk=Gk[0],Ik=Gk[1];
    $M(Ik,function(Jk){
     var Kk=Jk.v[0],Lk=Jk.v[1];
     $b($hs_putMVarzh,[Fk,Kk,Hk],function(Mk){
      $r([Mk,Lk]);
     },[Lk]);
    },[Fk,Hk]);
   },[Fk]);
  },[uk,vk,xk,Dk]);
 },[wk,uk,vk,xk],"a7");
 $M(Bk,function(Nk){
  switch(Nk.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[Ck,Ak]);break;
  default:
   Ck.J(Ak);
  }
 },[Ck,Ak]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle2=$f(5,function(ll,ml,nl,ol,pl){
 var ql=$f(2,function(rl,sl){
  $M(rl,function(tl){
   var ul=tl.v[1],vl=tl.v[3],wl=tl.v[4],xl=tl.v[5],yl=tl.v[7],zl=tl.v[8],Al=tl.v[11];
   $M(wl,function(Bl){
    switch(Bl.g){
    case 1:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$z,sl],function(Gl){
      var Hl=Gl[0],Il=Gl[1];
      var Jl=$d(1,[tl,Il],"sat");
      $r([Hl,Jl]);
     },[tl]);break;
    case 2:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$A,sl],function(Kl){
      var Ll=Kl[0],Ml=Kl[1];
      var Nl=$d(1,[tl,Ml],"sat");
      $r([Ll,Nl]);
     },[tl]);break;
    case 3:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$B,sl],function(Ol){
      var Pl=Ol[0],Ql=Ol[1];
      var Rl=$d(1,[tl,Ql],"sat");
      $r([Pl,Rl]);
     },[tl]);break;
    case 6:
     var Sl=$hs_readMutVarzh(zl,sl);
     var Tl=Sl[0],Ul=Sl[1];
     $M(Ul,function(Vl){
      var Wl=Vl.v[2];
      $M(Wl,function(Xl){
       switch(Xl.g){
       case 1:
	var Yl=$hs_readMutVarzh(zl,Tl);
	var Zl=Yl[0],am=Yl[1];
	$M(am,function(bm){
	 var cm=bm.v[2],dm=bm.v[4],em=bm.v[5];
	 var fm=$f(1,function(gm){
	  $$GHCziIOziHandleziInternals_flushByteReadBuffer1.C([tl,gm],function(hm){
	   var im=hm[0];
	   var jm=$hs_readMutVarzh(zl,im);
	   var km=jm[0],lm=jm[1];
	   var mm=$t(function(){
	    $M(lm,function(nm){
	     var om=nm.v[0],pm=nm.v[1],qm=nm.v[3],rm=nm.v[4],sm=nm.v[5];
	     $R(1,[om,pm,$$GHCziIOziBuffer_WriteBuffer,qm,rm,sm],"Buffer");
	    },[]);
	   },[lm],"sat");
	   var Em=$hs_writeMutVarzh(zl,mm,km);
	   var tm=$hs_readMutVarzh(xl,Em);
	   var um=tm[0],vm=tm[1];
	   $$GHCziIOziBufferedIO_emptyWriteBuffer.C([ul,vl,vm,um],function(wm){
	    var xm=wm[0],ym=wm[1];
	    var Dm=$hs_writeMutVarzh(xl,ym,xm);
	    ol.C([tl,Dm],function(zm){
	     var Am=zm[0],Bm=zm[1];
	     var Cm=$d(1,[tl,Bm],"sat");
	     $r([Am,Cm]);
	    },[tl]);
	   },[tl,ol,xl]);
	  },[tl,ol,zl,xl,ul,vl]);
	 },[tl,ol,zl,xl,ul,vl],"$j");
	 $M(cm,function(Fm){
	  switch(Fm.g){
	  case 1:
	   var Gm=dm.equals(em)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Gm.g){
	   case 1:
	    var Hm=$hs_readMutVarzh(yl,Zl);
	    var Im=Hm[0],Jm=Hm[1];
	    $M(Jm,function(Km){
	     var Lm=Km.v[0],Mm=Km.v[1];
	     var Nm=$hs_readMutVarzh(zl,Im);
	     var Om=Nm[0],Pm=Nm[1];
	     var Qm=$t(function(){
	      $M(Pm,function(Rm){
	       var Sm=Rm.v[0],Tm=Rm.v[1],Um=Rm.v[2],Vm=Rm.v[3];
	       $R(1,[Sm,Tm,Um,Vm,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	      },[]);
	     },[Pm],"sat");
	     var on=$hs_writeMutVarzh(zl,Qm,Om);
	     $M(Pm,function(Wm){
	      var Xm=Wm.v[0],Ym=Wm.v[1],Zm=Wm.v[2],an=Wm.v[4];
	      $M(an,function(bn){
	       switch(bn.toString()){
	       case "0":
		var Dn=$hs_writeMutVarzh(xl,Mm,on);
		fm.J(Dn);break;
	       default:
		$M(Al,function(cn){
		 switch(cn.g){
		 case 1:
		  var dn=$t(function(){
		   $M(Mm,function(en){
		    var fn=en.v[0],gn=en.v[1],hn=en.v[2],jn=en.v[3],kn=en.v[4],ln=en.v[5];
		    var mn=kn.add(bn);
		    $R(1,[fn,gn,hn,jn,mn,ln],"Buffer");
		   },[bn]);
		  },[Mm,bn],"sat");
		  var nn=$hs_writeMutVarzh(xl,dn,on);
		  fm.J(nn);break;
		 case 2:
		  var pn=cn.v[0];
		  $M(pn,function(qn){
		   var rn=qn.v[0],sn=qn.v[1],tn=qn.v[4];
		   tn.C([Lm,on],function(un){
		    var vn=un[0];
		    var wn=$d(1,[Xm,Ym,Zm,bn,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
		    $$GHCziIOziHandleziInternals_zdwa.C([rn,sn,Mm,wn,vn],function(xn){
		     var yn=xn[0],zn=xn[1];
		     $M(zn,function(An){
		      var Bn=An.v[0];
		      var Cn=$hs_writeMutVarzh(xl,Bn,yn);
		      fm.J(Cn);
		     },[tl,ol,zl,xl,ul,vl,fm,yn]);
		    },[tl,ol,zl,xl,ul,vl,fm]);
		   },[tl,ol,zl,xl,ul,vl,fm,Mm,bn,rn,sn,Xm,Ym,Zm]);
		  },[tl,ol,zl,xl,ul,vl,fm,Mm,bn,on,Lm,Xm,Ym,Zm]);break;
		 }
		},[tl,ol,zl,xl,ul,vl,fm,Mm,bn,on,Lm,Xm,Ym,Zm]);
	       }
	      },[tl,ol,zl,xl,ul,vl,fm,Al,Mm,on,Lm,Xm,Ym,Zm]);
	     },[tl,ol,zl,xl,ul,vl,fm,Al,Mm,on,Lm]);
	    },[tl,ol,zl,xl,ul,vl,fm,Im,Al]);break;
	   case 2:
	    fm.J(Zl);break;
	   }break;
	  case 2:
	   fm.J(Zl);break;
	  }
	 },[tl,ol,zl,xl,ul,vl,fm,dm,em,yl,Zl,Al]);
	},[tl,ol,zl,xl,ul,vl,yl,Zl,Al]);break;
       case 2:
	ol.C([tl,Tl],function(En){
	 var Fn=En[0],Gn=En[1];
	 var Hn=$d(1,[tl,Gn],"sat");
	 $r([Fn,Hn]);
	},[tl]);break;
       }
      },[tl,ol,zl,Tl,xl,ul,vl,yl,Al]);
     },[tl,ol,zl,Tl,xl,ul,vl,yl,Al]);break;
    default:
     ol.C([tl,sl],function(Cl){
      var Dl=Cl[0],El=Cl[1];
      var Fl=$d(1,[tl,El],"sat");
      $r([Dl,Fl]);
     },[tl]);
    }
   },[tl,sl,ol,zl,xl,ul,vl,yl,Al]);
  },[sl,ol]);
 },[ol],"sat");
 $$GHCziIOziHandleziInternals_wantReadableHandle3.J(ll,ml,nl,ql,pl);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle1=$f(4,function(In,Jn,Kn,Ln){
 $M(Jn,function(Mn){
  switch(Mn.g){
  case 1:
   var Nn=Mn.v[1];
   var On=$d(1,[Nn],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(In,Mn,On,Kn,Ln);break;
  case 2:
   var Pn=Mn.v[2];
   var Qn=$d(1,[Pn],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(In,Mn,Qn,Kn,Ln);break;
  }
 },[In,Kn,Ln]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandlezu2=$f(5,function(Rn,Sn,Tn,Un,Vn){
 var Wn=$f(2,function(Xn,Yn){
  $$GHCziIOziHandleziInternals_wantReadableHandle2.C([Un,Xn,Yn],function(Zn){
   var ao=Zn[0],bo=Zn[1];
   var co=$d(1,[Xn,bo],"sat");
   $r([ao,co]);
  },[Xn]);
 },[Un],"sat");
 $$GHCziIOziHandleziInternals_wantReadableHandle3.J(Rn,Sn,Tn,Wn,Vn);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandlezu1=$f(4,function(eo,fo,go,ho){
 $M(fo,function(io){
  switch(io.g){
  case 1:
   var jo=io.v[1];
   var ko=$d(1,[jo],"sat");
   $$GHCziIOziHandleziInternals_wantReadableHandlezu2.J(eo,io,ko,go,ho);break;
  case 2:
   var lo=io.v[1];
   var mo=$d(1,[lo],"sat");
   $$GHCziIOziHandleziInternals_wantReadableHandlezu2.J(eo,io,mo,go,ho);break;
  }
 },[eo,go,ho]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is not open for writing");
},"lvl3");
var $$GHCziIOziHandleziInternals$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is not open for reading");
},"lvl5");
var $$GHCziIOziHandleziInternals$j=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$i,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl6");
var $$GHCziIOziHandleziInternals$k=$F(1,function(mt){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals$j,mt);
},"a1");
var $$GHCziIOziHandleziInternals$l=$F(1,function(nt){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals_readTextDeviceNonBlocking2,nt);
},"a2");
var $$GHCziIOziHandleziInternals$m=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl7");
var $$GHCziIOziHandleziInternals$n=$F(1,function(ot){
 $$GHCziIOziException_ioException.J($$GHCziIOziHandleziInternals$m,ot);
},"a3");
var $$GHCziIOziHandleziInternals$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is finalized");
},"lvl8");
var $$GHCziIOziHandleziInternals$q=$T(function(){
 $$GHCziCString_unpackCStringzh.J("codec_state");
},"lvl10");
var $$GHCziIOziHandleziInternals$r=$T(function(){
 $$GHCziErr_error.J($$GHCziIOziHandleziInternals$q);
},"lvl11");
var $$GHCziIOziHandleziInternals$s=$D(3,function(){
 $r([$$DataziMaybe_Nothing]);
},"lvl12");
var $$GHCziIOziHandleziInternals$t=$T(function(){
 $$GHCziErr_error.J($$GHCziIOziHandleziInternals$q);
},"lvl13");
var $$GHCziIOziHandleziInternals$u=$T(function(){
 $$ControlziExceptionziBase_irrefutPatError.J("libraries/base/GHC/IO/Handle/Internals.hs:851:7-30|Data.Maybe.Just decoder");
},"lvl14");
var $$GHCziIOziHandleziInternals$v=$F(33,function(pt,qt,rt,st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Jt,Kt,Lt,Mt,Nt,Ot,Pt,Qt,Rt,St,Tt,Ut,Vt){
 var Zt=Ot.subtract(Nt);
 var dv=$hs_int2Wordzh(Zt);
 var cv=$hs_plusAddrzh(Jt,Nt);
 var $ff=memcpy(Jt,cv,dv);
 var Wt=[Vt,$ff];
 var Xt=Wt[0];
 var bv=$hs_touchzh(Kt,Xt);
 var Yt=$d(1,[Jt,Kt,Lt,Mt,goog.math.Long.fromBits(0,0),Zt],"sat");
 $$GHCziIOziBufferedIO_fillReadBuffer.C([qt,st,Yt,bv],function(au){
  var bu=au[0],cu=au[1];
  $M(cu,function(du){
   var eu=du.v[0],fu=du.v[1];
   $M(eu,function(gu){
    var hu=gu.v[0];
    $M(hu,function(iu){
     switch(iu.toString()){
     case "0":
      var Lu=$d(1,[Pt,Qt,Rt,St,Tt,Ut],"sat");
      Bt.C([fu,Lu,bu],function(Mu){
       var Nu=Mu[0],Ou=Mu[1];
       $M(Ou,function(Pu){
	var Qu=Pu.v[0],Ru=Pu.v[1];
	var av=$hs_writeMutVarzh(ut,Qu,Nu);
	$M(Ru,function(Su){
	 var Tu=Su.v[0],Uu=Su.v[1],Vu=Su.v[2],Wu=Su.v[3],Xu=Su.v[4],Yu=Su.v[5];
	 var Zu=Yu.equals(Ut)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Zu.g){
	 case 1:
	  $r([av,Su]);break;
	 case 2:
	  $$GHCziIOziHandleziInternals_hLookAheadzuzuzdsa.J(pt,qt,rt,st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Tu,Uu,Vu,Wu,Xu,Yu,av);break;
	 }
	},[qt,st,Dt,wt,At,Bt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It,av]);
       },[qt,st,Dt,wt,At,Bt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It,Nu]);
      },[qt,st,Dt,wt,At,Bt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);break;
     default:
      Dt.C([bu],function(ju){
       var ku=ju[0],lu=ju[1];
       var mu=$d(1,[lu,fu],"sat");
       var Ku=$hs_writeMutVarzh(wt,mu,ku);
       var nu=$d(1,[Pt,Qt,Rt,St,Tt,Ut],"sat");
       $$GHCziIOziHandleziInternals_zdwa.C([At,Bt,fu,nu,Ku],function(ou){
	var pu=ou[0],qu=ou[1];
	$M(qu,function(ru){
	 var su=ru.v[0],tu=ru.v[1];
	 var Cu=$hs_writeMutVarzh(ut,su,pu);
	 $M(tu,function(uu){
	  var vu=uu.v[0],wu=uu.v[1],xu=uu.v[2],yu=uu.v[3],zu=uu.v[4],Au=uu.v[5];
	  var Bu=Ut.equals(Au)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Bu.g){
	  case 1:
	   $r([Cu,uu]);break;
	  case 2:
	   $M(su,function(Du){
	    var Eu=Du.v[0],Fu=Du.v[1],Gu=Du.v[2],Hu=Du.v[3],Iu=Du.v[4],Ju=Du.v[5];
	    $$GHCziIOziHandleziInternals$v.J(pt,qt,rt,st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Eu,Fu,Gu,Hu,Iu,Ju,vu,wu,xu,yu,zu,Au,Cu);
	   },[qt,st,Dt,wt,At,Bt,ut,Au,Cu,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It,vu,wu,xu,yu,zu]);break;
	  }
	 },[qt,st,Dt,wt,At,Bt,Ut,ut,su,Cu,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);
	},[qt,st,Dt,wt,At,Bt,Ut,ut,pu,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);
       },[qt,st,Dt,wt,At,Bt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);
      },[qt,st,Dt,wt,fu,At,Bt,Pt,Qt,Rt,St,Tt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);
     }
    },[qt,st,bu,Dt,wt,fu,At,Bt,Pt,Qt,Rt,St,Tt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);
   },[qt,st,bu,Dt,wt,fu,At,Bt,Pt,Qt,Rt,St,Tt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);
  },[qt,st,bu,Dt,wt,At,Bt,Pt,Qt,Rt,St,Tt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);
 },[qt,st,Dt,wt,At,Bt,Pt,Qt,Rt,St,Tt,Ut,ut,pt,rt,tt,vt,xt,yt,zt,Ct,Et,Ft,Gt,Ht,It]);
},"$s$wa");
var $$GHCziIOziHandleziInternals$w=$F(4,function(ev,fv,gv,hv){
 $$GHCziIOziHandleziInternals_augmentIOError.C([gv,ev,fv],function(iv){
  $$GHCziIOziException_ioError.J(iv,hv);
 },[hv]);
},"a4");
var $$GHCziIOziHandleziInternals$z=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl15");
var $$GHCziIOziHandleziInternals$A=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl16");
var $$GHCziIOziHandleziInternals$B=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$f,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl17");
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
 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,Z1,c2,b2);
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
var $$GHCziIOziHandleziText_hGetLinezuzdszdwa=$f(24,function(w5,x5,y5,z5,A5,B5,C5,D5,E5,F5,G5,H5,I5,J5,K5,L5,M5,N5,O5,P5,Q5,R5,S5,T5){
 var U5=$d(1,[R5],"w");
 var V5=$d(1,[$$GHCziTypes_False,U5],"lvl22");
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
 },[R5,V5],"$s$wa3");
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
	    $A($$GHCziIOziHandleziText$k);break;
	   case 2:
	    $R(1,[],"[]");break;
	   }
	  },[]);
	 },[v6],"sat");
	 var O6=$d(2,[J6,I6],"sat");
	 $$GHCziList_reverse1.C([O6,$$GHCziTypes_ZMZN],function(P6){
	  $$GHCziIOziHandleziText$m.C([P6],function(Q6){
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
	$$GHCziIOziHandleziText$l.J(i7);
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
       },[M5,Q5],"$wa9");
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
      $$GHCziIOziHandleziText$j.C([M5,N5,Q5,F7,$$GHCziTypes_ZMZN,l6],function(G7){
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
		$A($$GHCziIOziHandleziText$k);break;
	       case 2:
		$R(1,[],"[]");break;
	       }
	      },[]);
	     },[N7],"sat");
	     var i8=$d(2,[d8,c8],"sat");
	     $$GHCziList_reverse1.C([i8,$$GHCziTypes_ZMZN],function(j8){
	      $$GHCziIOziHandleziText$m.C([j8],function(k8){
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
	    $$GHCziIOziHandleziText$l.J(A8);
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
 var Bd=$F(4,function(Cd,Dd,Ed,Fd){
  var of=Cd.add(goog.math.Long.fromBits(1,0));
  var Gd=of.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Gd.g){
  case 1:
   $M(Dd,function(Hd){
    var Id=Hd.v[0];
    $M(Id,function(Jd){
     switch(Jd.toString()){
     case "\n":
      var Od=$f(2,function(Pd,Qd){
       $M(td,function(Rd){
	switch(Rd.g){
	case 1:
	 var Sd=$f(3,function(Td,Ud,Vd){
	  $M(Ud,function(Wd){
	   switch(Wd.g){
	   case 1:
	    $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,Td,$$GHCziTypes_False,$$GHCziTypes_True,Vd);break;
	   case 2:
	    var Xd=Wd.v[0],Yd=Wd.v[1];
	    var se=Td.add(goog.math.Long.fromBits(1,0));
	    var Zd=se.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Zd.g){
	    case 1:
	     $M(Xd,function(ae){
	      var be=ae.v[0];
	      $M(be,function(ce){
	       switch(ce.toString()){
	       case "\n":
		$M(vd,function(ge){
		 switch(ge.g){
		 case 1:
		  var je=$hs_writeWideCharOffAddrzh(wd,Td,"\n",Vd);
		  var ie=$hs_touchzh(xd,je);
		  var he=Td.add(goog.math.Long.fromBits(1,0));
		  Sd.J(he,Yd,ie);break;
		 case 2:
		  var pe=$hs_writeWideCharOffAddrzh(wd,Td,"\r",Vd);
		  var oe=$hs_touchzh(xd,pe);
		  var me=Td.add(goog.math.Long.fromBits(1,0));
		  var ne=$hs_writeWideCharOffAddrzh(wd,me,"\n",oe);
		  var le=$hs_touchzh(xd,ne);
		  var ke=me.add(goog.math.Long.fromBits(1,0));
		  Sd.J(ke,Yd,le);break;
		 }
		},[yd,wd,xd,sd,Td,Vd,Sd,Yd,vd]);break;
	       default:
		var fe=$hs_writeWideCharOffAddrzh(wd,Td,ce,Vd);
		var ee=$hs_touchzh(xd,fe);
		var de=Td.add(goog.math.Long.fromBits(1,0));
		Sd.J(de,Yd,ee);
	       }
	      },[yd,wd,xd,sd,Td,Vd,Sd,Yd,vd]);
	     },[yd,wd,xd,sd,Td,Vd,Sd,Yd,vd]);break;
	    case 2:
	     $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Td,$$GHCziTypes_False,$$GHCziTypes_False,Vd],function(qe){
	      var re=qe[0];
	      Sd.J(goog.math.Long.fromBits(0,0),Wd,re);
	     },[yd,wd,xd,sd,Sd,vd,Wd]);break;
	    }break;
	   }
	  },[yd,wd,xd,sd,Td,Vd,Sd,vd]);
	 },[yd,wd,xd,sd,vd],"$s$wa5");
	 Sd.J(Qd,Ed,Pd);break;
	case 2:
	 $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Qd,$$GHCziTypes_True,$$GHCziTypes_False,Pd],function(te){
	  var ue=te[0];
	  var ve=$f(3,function(we,xe,ye){
	   $M(xe,function(ze){
	    switch(ze.g){
	    case 1:
	     $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,we,$$GHCziTypes_False,$$GHCziTypes_True,ye);break;
	    case 2:
	     var Ae=ze.v[0],Be=ze.v[1];
	     var af=we.add(goog.math.Long.fromBits(1,0));
	     var Ce=af.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Ce.g){
	     case 1:
	      $M(Ae,function(De){
	       var Ee=De.v[0];
	       $M(Ee,function(Fe){
		switch(Fe.toString()){
		case "\n":
		 var Je=$f(2,function(Ke,Le){
		  $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Le,$$GHCziTypes_True,$$GHCziTypes_False,Ke],function(Me){
		   var Ne=Me[0];
		   ve.J(goog.math.Long.fromBits(0,0),Be,Ne);
		  },[yd,wd,xd,sd,vd,ve,Be]);
		 },[yd,wd,xd,sd,ve,Be],"$w$j1");
		 $M(vd,function(Oe){
		  switch(Oe.g){
		  case 1:
		   var Re=$hs_writeWideCharOffAddrzh(wd,we,"\n",ye);
		   var Pe=$hs_touchzh(xd,Re);
		   var Qe=we.add(goog.math.Long.fromBits(1,0));
		   Je.J(Pe,Qe);break;
		  case 2:
		   var Xe=$hs_writeWideCharOffAddrzh(wd,we,"\r",ye);
		   var We=$hs_touchzh(xd,Xe);
		   var Ue=we.add(goog.math.Long.fromBits(1,0));
		   var Ve=$hs_writeWideCharOffAddrzh(wd,Ue,"\n",We);
		   var Se=$hs_touchzh(xd,Ve);
		   var Te=Ue.add(goog.math.Long.fromBits(1,0));
		   Je.J(Se,Te);break;
		  }
		 },[yd,wd,xd,sd,vd,we,ye,ve,Be,Je]);break;
		default:
		 var Ie=$hs_writeWideCharOffAddrzh(wd,we,Fe,ye);
		 var He=$hs_touchzh(xd,Ie);
		 var Ge=we.add(goog.math.Long.fromBits(1,0));
		 ve.J(Ge,Be,He);
		}
	       },[yd,wd,xd,sd,vd,we,ye,ve,Be]);
	      },[yd,wd,xd,sd,vd,we,ye,ve,Be]);break;
	     case 2:
	      $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,we,$$GHCziTypes_False,$$GHCziTypes_False,ye],function(Ye){
	       var Ze=Ye[0];
	       ve.J(goog.math.Long.fromBits(0,0),ze,Ze);
	      },[yd,wd,xd,sd,vd,ve,ze]);break;
	     }break;
	    }
	   },[yd,wd,xd,sd,vd,we,ye,ve]);
	  },[yd,wd,xd,sd,vd],"$s$wa5");
	  ve.J(goog.math.Long.fromBits(0,0),Ed,ue);
	 },[yd,wd,xd,Ed,sd,vd]);break;
	}
       },[yd,wd,xd,Ed,sd,vd,Qd,Pd]);
      },[yd,wd,xd,Ed,td,sd,vd],"$w$j");
      $M(vd,function(bf){
       switch(bf.g){
       case 1:
	var ef=$hs_writeWideCharOffAddrzh(wd,Cd,"\n",Fd);
	var cf=$hs_touchzh(xd,ef);
	var df=Cd.add(goog.math.Long.fromBits(1,0));
	Od.J(cf,df);break;
       case 2:
	var lf=$hs_writeWideCharOffAddrzh(wd,Cd,"\r",Fd);
	var kf=$hs_touchzh(xd,lf);
	var hf=Cd.add(goog.math.Long.fromBits(1,0));
	var jf=$hs_writeWideCharOffAddrzh(wd,hf,"\n",kf);
	var ff=$hs_touchzh(xd,jf);
	var gf=hf.add(goog.math.Long.fromBits(1,0));
	Od.J(ff,gf);break;
       }
      },[Cd,yd,wd,Fd,xd,Ed,td,sd,vd,Od]);break;
     default:
      var Nd=$hs_writeWideCharOffAddrzh(wd,Cd,Jd,Fd);
      var Md=$hs_touchzh(xd,Nd);
      var Ld=Cd.add(goog.math.Long.fromBits(1,0));
      Kd.J(Ld,Ed,Md);
     }
    },[Cd,yd,wd,Fd,xd,Kd,Ed,td,sd,vd]);
   },[Cd,yd,wd,Fd,xd,Kd,Ed,td,sd,vd]);break;
  case 2:
   $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Cd,$$GHCziTypes_False,$$GHCziTypes_False,Fd],function(mf){
    var nf=mf[0];
    Bd.J(goog.math.Long.fromBits(0,0),Dd,Ed,nf);
   },[yd,Dd,wd,xd,Ed,td,sd,vd,Bd]);break;
  }
 },"$s$wa3"),Kd=$f(3,function(pf,qf,rf){
  $M(qf,function(sf){
   switch(sf.g){
   case 1:
    $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,pf,$$GHCziTypes_False,$$GHCziTypes_True,rf);break;
   case 2:
    var tf=sf.v[0],uf=sf.v[1];
    var bh=pf.add(goog.math.Long.fromBits(1,0));
    var vf=bh.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(vf.g){
    case 1:
     $M(tf,function(wf){
      var xf=wf.v[0];
      $M(xf,function(yf){
       switch(yf.toString()){
       case "\n":
	var Cf=$f(2,function(Df,Ef){
	 $M(td,function(Ff){
	  switch(Ff.g){
	  case 1:
	   var Gf=$f(3,function(Hf,If,Jf){
	    $M(If,function(Kf){
	     switch(Kf.g){
	     case 1:
	      $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,Hf,$$GHCziTypes_False,$$GHCziTypes_True,Jf);break;
	     case 2:
	      var Lf=Kf.v[0],Mf=Kf.v[1];
	      var gg=Hf.add(goog.math.Long.fromBits(1,0));
	      var Nf=gg.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Nf.g){
	      case 1:
	       $M(Lf,function(Of){
		var Pf=Of.v[0];
		$M(Pf,function(Qf){
		 switch(Qf.toString()){
		 case "\n":
		  $M(vd,function(Uf){
		   switch(Uf.g){
		   case 1:
		    var Xf=$hs_writeWideCharOffAddrzh(wd,Hf,"\n",Jf);
		    var Wf=$hs_touchzh(xd,Xf);
		    var Vf=Hf.add(goog.math.Long.fromBits(1,0));
		    Gf.J(Vf,Mf,Wf);break;
		   case 2:
		    var dg=$hs_writeWideCharOffAddrzh(wd,Hf,"\r",Jf);
		    var cg=$hs_touchzh(xd,dg);
		    var ag=Hf.add(goog.math.Long.fromBits(1,0));
		    var bg=$hs_writeWideCharOffAddrzh(wd,ag,"\n",cg);
		    var Zf=$hs_touchzh(xd,bg);
		    var Yf=ag.add(goog.math.Long.fromBits(1,0));
		    Gf.J(Yf,Mf,Zf);break;
		   }
		  },[yd,wd,xd,sd,vd,Hf,Jf,Gf,Mf]);break;
		 default:
		  var Tf=$hs_writeWideCharOffAddrzh(wd,Hf,Qf,Jf);
		  var Sf=$hs_touchzh(xd,Tf);
		  var Rf=Hf.add(goog.math.Long.fromBits(1,0));
		  Gf.J(Rf,Mf,Sf);
		 }
		},[yd,wd,xd,sd,vd,Hf,Jf,Gf,Mf]);
	       },[yd,wd,xd,sd,vd,Hf,Jf,Gf,Mf]);break;
	      case 2:
	       $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Hf,$$GHCziTypes_False,$$GHCziTypes_False,Jf],function(eg){
		var fg=eg[0];
		Gf.J(goog.math.Long.fromBits(0,0),Kf,fg);
	       },[yd,wd,xd,sd,vd,Gf,Kf]);break;
	      }break;
	     }
	    },[yd,wd,xd,sd,vd,Hf,Jf,Gf]);
	   },[yd,wd,xd,sd,vd],"$s$wa5");
	   Gf.J(Ef,uf,Df);break;
	  case 2:
	   $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Ef,$$GHCziTypes_True,$$GHCziTypes_False,Df],function(hg){
	    var ig=hg[0];
	    var jg=$f(3,function(kg,lg,mg){
	     $M(lg,function(ng){
	      switch(ng.g){
	      case 1:
	       $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,kg,$$GHCziTypes_False,$$GHCziTypes_True,mg);break;
	      case 2:
	       var og=ng.v[0],pg=ng.v[1];
	       var Og=kg.add(goog.math.Long.fromBits(1,0));
	       var qg=Og.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(qg.g){
	       case 1:
		$M(og,function(rg){
		 var sg=rg.v[0];
		 $M(sg,function(tg){
		  switch(tg.toString()){
		  case "\n":
		   var xg=$f(2,function(yg,zg){
		    $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,zg,$$GHCziTypes_True,$$GHCziTypes_False,yg],function(Ag){
		     var Bg=Ag[0];
		     jg.J(goog.math.Long.fromBits(0,0),pg,Bg);
		    },[yd,wd,xd,sd,vd,jg,pg]);
		   },[yd,wd,xd,sd,jg,pg],"$w$j1");
		   $M(vd,function(Cg){
		    switch(Cg.g){
		    case 1:
		     var Fg=$hs_writeWideCharOffAddrzh(wd,kg,"\n",mg);
		     var Dg=$hs_touchzh(xd,Fg);
		     var Eg=kg.add(goog.math.Long.fromBits(1,0));
		     xg.J(Dg,Eg);break;
		    case 2:
		     var Lg=$hs_writeWideCharOffAddrzh(wd,kg,"\r",mg);
		     var Kg=$hs_touchzh(xd,Lg);
		     var Ig=kg.add(goog.math.Long.fromBits(1,0));
		     var Jg=$hs_writeWideCharOffAddrzh(wd,Ig,"\n",Kg);
		     var Gg=$hs_touchzh(xd,Jg);
		     var Hg=Ig.add(goog.math.Long.fromBits(1,0));
		     xg.J(Gg,Hg);break;
		    }
		   },[yd,wd,xd,sd,vd,kg,mg,jg,pg,xg]);break;
		  default:
		   var wg=$hs_writeWideCharOffAddrzh(wd,kg,tg,mg);
		   var vg=$hs_touchzh(xd,wg);
		   var ug=kg.add(goog.math.Long.fromBits(1,0));
		   jg.J(ug,pg,vg);
		  }
		 },[yd,wd,xd,sd,vd,kg,mg,jg,pg]);
		},[yd,wd,xd,sd,vd,kg,mg,jg,pg]);break;
	       case 2:
		$$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,kg,$$GHCziTypes_False,$$GHCziTypes_False,mg],function(Mg){
		 var Ng=Mg[0];
		 jg.J(goog.math.Long.fromBits(0,0),ng,Ng);
		},[yd,wd,xd,sd,vd,jg,ng]);break;
	       }break;
	      }
	     },[yd,wd,xd,sd,vd,kg,mg,jg]);
	    },[yd,wd,xd,sd,vd],"$s$wa5");
	    jg.J(goog.math.Long.fromBits(0,0),uf,ig);
	   },[yd,wd,xd,sd,vd,uf]);break;
	  }
	 },[yd,wd,xd,sd,vd,uf,Ef,Df]);
	},[yd,wd,xd,td,sd,vd,uf],"$w$j");
	$M(vd,function(Pg){
	 switch(Pg.g){
	 case 1:
	  var Sg=$hs_writeWideCharOffAddrzh(wd,pf,"\n",rf);
	  var Qg=$hs_touchzh(xd,Sg);
	  var Rg=pf.add(goog.math.Long.fromBits(1,0));
	  Cf.J(Qg,Rg);break;
	 case 2:
	  var Yg=$hs_writeWideCharOffAddrzh(wd,pf,"\r",rf);
	  var Xg=$hs_touchzh(xd,Yg);
	  var Vg=pf.add(goog.math.Long.fromBits(1,0));
	  var Wg=$hs_writeWideCharOffAddrzh(wd,Vg,"\n",Xg);
	  var Tg=$hs_touchzh(xd,Wg);
	  var Ug=Vg.add(goog.math.Long.fromBits(1,0));
	  Cf.J(Tg,Ug);break;
	 }
	},[yd,wd,xd,td,sd,vd,pf,rf,uf,Cf]);break;
       default:
	var Bf=$hs_writeWideCharOffAddrzh(wd,pf,yf,rf);
	var Af=$hs_touchzh(xd,Bf);
	var zf=pf.add(goog.math.Long.fromBits(1,0));
	Kd.J(zf,uf,Af);
       }
      },[yd,wd,xd,Kd,td,sd,vd,pf,rf,uf]);
     },[yd,wd,xd,Kd,td,sd,vd,pf,rf,uf]);break;
    case 2:
     $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,pf,$$GHCziTypes_False,$$GHCziTypes_False,rf],function(Zg){
      var ah=Zg[0];
      Bd.J(goog.math.Long.fromBits(0,0),tf,uf,ah);
     },[yd,wd,xd,td,sd,vd,Bd,tf,uf]);break;
    }break;
   }
  },[yd,wd,xd,Kd,td,sd,vd,Bd,pf,rf]);
 },[yd,wd,xd,td,sd,vd,Bd],"$s$wa4");
 $S(Bd,[yd,wd,xd,Kd,td,sd,vd]);
 var ch=$F(5,function(dh,eh,fh,gh,hh){
  var Ti=dh.add(goog.math.Long.fromBits(1,0));
  var ih=Ti.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(ih.g){
  case 1:
   $M(eh,function(jh){
    var kh=jh.v[0];
    $M(kh,function(lh){
     switch(lh.toString()){
     case "\n":
      var qh=$f(2,function(rh,sh){
       $M(td,function(th){
	switch(th.g){
	case 1:
	 var uh=$f(4,function(vh,wh,xh,yh){
	  $M(wh,function(zh){
	   switch(zh.g){
	   case 1:
	    $M(xh,function(Ah){
	     switch(Ah.g){
	     case 1:
	      $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,vh,$$GHCziTypes_False,$$GHCziTypes_True,yh);break;
	     case 2:
	      uh.J(vh,Ah,$$GHCziTypes_ZMZN,yh);break;
	     }
	    },[yd,wd,xd,sd,vd,vh,yh,uh]);break;
	   case 2:
	    var Bh=zh.v[0],Ch=zh.v[1];
	    var Wh=vh.add(goog.math.Long.fromBits(1,0));
	    var Dh=Wh.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Dh.g){
	    case 1:
	     $M(Bh,function(Eh){
	      var Fh=Eh.v[0];
	      $M(Fh,function(Gh){
	       switch(Gh.toString()){
	       case "\n":
		$M(vd,function(Kh){
		 switch(Kh.g){
		 case 1:
		  var Nh=$hs_writeWideCharOffAddrzh(wd,vh,"\n",yh);
		  var Mh=$hs_touchzh(xd,Nh);
		  var Lh=vh.add(goog.math.Long.fromBits(1,0));
		  uh.J(Lh,Ch,xh,Mh);break;
		 case 2:
		  var Th=$hs_writeWideCharOffAddrzh(wd,vh,"\r",yh);
		  var Sh=$hs_touchzh(xd,Th);
		  var Qh=vh.add(goog.math.Long.fromBits(1,0));
		  var Rh=$hs_writeWideCharOffAddrzh(wd,Qh,"\n",Sh);
		  var Ph=$hs_touchzh(xd,Rh);
		  var Oh=Qh.add(goog.math.Long.fromBits(1,0));
		  uh.J(Oh,Ch,xh,Ph);break;
		 }
		},[yd,wd,xd,sd,vd,xh,vh,yh,uh,Ch]);break;
	       default:
		var Jh=$hs_writeWideCharOffAddrzh(wd,vh,Gh,yh);
		var Ih=$hs_touchzh(xd,Jh);
		var Hh=vh.add(goog.math.Long.fromBits(1,0));
		uh.J(Hh,Ch,xh,Ih);
	       }
	      },[yd,wd,xd,sd,vd,xh,vh,yh,uh,Ch]);
	     },[yd,wd,xd,sd,vd,xh,vh,yh,uh,Ch]);break;
	    case 2:
	     $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,vh,$$GHCziTypes_False,$$GHCziTypes_False,yh],function(Uh){
	      var Vh=Uh[0];
	      uh.J(goog.math.Long.fromBits(0,0),zh,xh,Vh);
	     },[yd,wd,xd,sd,vd,xh,uh,zh]);break;
	    }break;
	   }
	  },[yd,wd,xd,sd,vd,xh,vh,yh,uh]);
	 },[yd,wd,xd,sd,vd],"$wa10");
	 uh.J(sh,fh,gh,rh);break;
	case 2:
	 $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,sh,$$GHCziTypes_True,$$GHCziTypes_False,rh],function(Xh){
	  var Yh=Xh[0];
	  var Zh=$f(4,function(ai,bi,ci,di){
	   $M(bi,function(ei){
	    switch(ei.g){
	    case 1:
	     $M(ci,function(fi){
	      switch(fi.g){
	      case 1:
	       $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,ai,$$GHCziTypes_False,$$GHCziTypes_True,di);break;
	      case 2:
	       Zh.J(ai,fi,$$GHCziTypes_ZMZN,di);break;
	      }
	     },[yd,wd,xd,sd,vd,ai,di,Zh]);break;
	    case 2:
	     var gi=ei.v[0],hi=ei.v[1];
	     var Gi=ai.add(goog.math.Long.fromBits(1,0));
	     var ii=Gi.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(ii.g){
	     case 1:
	      $M(gi,function(ji){
	       var ki=ji.v[0];
	       $M(ki,function(li){
		switch(li.toString()){
		case "\n":
		 var pi=$f(2,function(qi,ri){
		  $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,ri,$$GHCziTypes_True,$$GHCziTypes_False,qi],function(si){
		   var ti=si[0];
		   Zh.J(goog.math.Long.fromBits(0,0),hi,ci,ti);
		  },[yd,wd,xd,sd,vd,ci,Zh,hi]);
		 },[yd,wd,xd,sd,ci,Zh,hi],"$w$j1");
		 $M(vd,function(ui){
		  switch(ui.g){
		  case 1:
		   var xi=$hs_writeWideCharOffAddrzh(wd,ai,"\n",di);
		   var vi=$hs_touchzh(xd,xi);
		   var wi=ai.add(goog.math.Long.fromBits(1,0));
		   pi.J(vi,wi);break;
		  case 2:
		   var Di=$hs_writeWideCharOffAddrzh(wd,ai,"\r",di);
		   var Ci=$hs_touchzh(xd,Di);
		   var Ai=ai.add(goog.math.Long.fromBits(1,0));
		   var Bi=$hs_writeWideCharOffAddrzh(wd,Ai,"\n",Ci);
		   var yi=$hs_touchzh(xd,Bi);
		   var zi=Ai.add(goog.math.Long.fromBits(1,0));
		   pi.J(yi,zi);break;
		  }
		 },[yd,wd,xd,sd,vd,ci,ai,di,Zh,hi,pi]);break;
		default:
		 var oi=$hs_writeWideCharOffAddrzh(wd,ai,li,di);
		 var ni=$hs_touchzh(xd,oi);
		 var mi=ai.add(goog.math.Long.fromBits(1,0));
		 Zh.J(mi,hi,ci,ni);
		}
	       },[yd,wd,xd,sd,vd,ci,ai,di,Zh,hi]);
	      },[yd,wd,xd,sd,vd,ci,ai,di,Zh,hi]);break;
	     case 2:
	      $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,ai,$$GHCziTypes_False,$$GHCziTypes_False,di],function(Ei){
	       var Fi=Ei[0];
	       Zh.J(goog.math.Long.fromBits(0,0),ei,ci,Fi);
	      },[yd,wd,xd,sd,vd,ci,Zh,ei]);break;
	     }break;
	    }
	   },[yd,wd,xd,sd,vd,ci,ai,di,Zh]);
	  },[yd,wd,xd,sd,vd],"$wa10");
	  Zh.J(goog.math.Long.fromBits(0,0),fh,gh,Yh);
	 },[yd,wd,xd,sd,vd,fh,gh]);break;
	}
       },[yd,wd,xd,sd,vd,fh,gh,sh,rh]);
      },[yd,wd,xd,td,sd,vd,fh,gh],"$w$j");
      $M(vd,function(Hi){
       switch(Hi.g){
       case 1:
	var Ki=$hs_writeWideCharOffAddrzh(wd,dh,"\n",hh);
	var Ii=$hs_touchzh(xd,Ki);
	var Ji=dh.add(goog.math.Long.fromBits(1,0));
	qh.J(Ii,Ji);break;
       case 2:
	var Qi=$hs_writeWideCharOffAddrzh(wd,dh,"\r",hh);
	var Pi=$hs_touchzh(xd,Qi);
	var Ni=dh.add(goog.math.Long.fromBits(1,0));
	var Oi=$hs_writeWideCharOffAddrzh(wd,Ni,"\n",Pi);
	var Li=$hs_touchzh(xd,Oi);
	var Mi=Ni.add(goog.math.Long.fromBits(1,0));
	qh.J(Li,Mi);break;
       }
      },[yd,wd,xd,td,sd,vd,dh,hh,fh,gh,qh]);break;
     default:
      var ph=$hs_writeWideCharOffAddrzh(wd,dh,lh,hh);
      var oh=$hs_touchzh(xd,ph);
      var nh=dh.add(goog.math.Long.fromBits(1,0));
      mh.J(nh,fh,gh,oh);
     }
    },[yd,wd,xd,td,sd,vd,Bd,dh,hh,mh,fh,gh]);
   },[yd,wd,xd,td,sd,vd,Bd,dh,hh,mh,fh,gh]);break;
  case 2:
   $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,dh,$$GHCziTypes_False,$$GHCziTypes_False,hh],function(Ri){
    var Si=Ri[0];
    ch.J(goog.math.Long.fromBits(0,0),eh,fh,gh,Si);
   },[yd,wd,xd,td,sd,vd,Bd,eh,fh,gh,ch]);break;
  }
 },"$s$wa5"),mh=$f(4,function(Ui,Vi,Wi,Xi){
  $M(Vi,function(Yi){
   switch(Yi.g){
   case 1:
    $M(Wi,function(Zi){
     switch(Zi.g){
     case 1:
      $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,Ui,$$GHCziTypes_False,$$GHCziTypes_True,Xi);break;
     case 2:
      var aj=Zi.v[0],bj=Zi.v[1];
      Bd.J(Ui,aj,bj,Xi);break;
     }
    },[yd,wd,xd,td,sd,vd,Bd,Ui,Xi]);break;
   case 2:
    var cj=Yi.v[0],dj=Yi.v[1];
    var jo=Ui.add(goog.math.Long.fromBits(1,0));
    var ej=jo.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(ej.g){
    case 1:
     $M(cj,function(fj){
      var gj=fj.v[0];
      $M(gj,function(hj){
       switch(hj.toString()){
       case "\n":
	var lj=$f(2,function(mj,nj){
	 $M(td,function(oj){
	  switch(oj.g){
	  case 1:
	   var pj=$F(4,function(qj,rj,sj,tj){
	    var Oj=qj.add(goog.math.Long.fromBits(1,0));
	    var uj=Oj.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(uj.g){
	    case 1:
	     $M(rj,function(vj){
	      var wj=vj.v[0];
	      $M(wj,function(xj){
	       switch(xj.toString()){
	       case "\n":
		$M(vd,function(Cj){
		 switch(Cj.g){
		 case 1:
		  var Fj=$hs_writeWideCharOffAddrzh(wd,qj,"\n",tj);
		  var Ej=$hs_touchzh(xd,Fj);
		  var Dj=qj.add(goog.math.Long.fromBits(1,0));
		  yj.J(Dj,sj,Ej);break;
		 case 2:
		  var Lj=$hs_writeWideCharOffAddrzh(wd,qj,"\r",tj);
		  var Kj=$hs_touchzh(xd,Lj);
		  var Ij=qj.add(goog.math.Long.fromBits(1,0));
		  var Jj=$hs_writeWideCharOffAddrzh(wd,Ij,"\n",Kj);
		  var Hj=$hs_touchzh(xd,Jj);
		  var Gj=Ij.add(goog.math.Long.fromBits(1,0));
		  yj.J(Gj,sj,Hj);break;
		 }
		},[yd,wd,xd,sd,vd,qj,tj,yj,sj]);break;
	       default:
		var Bj=$hs_writeWideCharOffAddrzh(wd,qj,xj,tj);
		var Aj=$hs_touchzh(xd,Bj);
		var zj=qj.add(goog.math.Long.fromBits(1,0));
		yj.J(zj,sj,Aj);
	       }
	      },[yd,wd,xd,sd,vd,qj,tj,yj,sj]);
	     },[yd,wd,xd,sd,vd,qj,tj,yj,sj]);break;
	    case 2:
	     $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,qj,$$GHCziTypes_False,$$GHCziTypes_False,tj],function(Mj){
	      var Nj=Mj[0];
	      pj.J(goog.math.Long.fromBits(0,0),rj,sj,Nj);
	     },[yd,wd,xd,sd,vd,rj,sj,pj]);break;
	    }
	   },"$s$wa6"),yj=$f(3,function(Pj,Qj,Rj){
	    $M(Qj,function(Sj){
	     switch(Sj.g){
	     case 1:
	      $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,Pj,$$GHCziTypes_False,$$GHCziTypes_True,Rj);break;
	     case 2:
	      var Tj=Sj.v[0],Uj=Sj.v[1];
	      var ok=Pj.add(goog.math.Long.fromBits(1,0));
	      var Vj=ok.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Vj.g){
	      case 1:
	       $M(Tj,function(Wj){
		var Xj=Wj.v[0];
		$M(Xj,function(Yj){
		 switch(Yj.toString()){
		 case "\n":
		  $M(vd,function(ck){
		   switch(ck.g){
		   case 1:
		    var fk=$hs_writeWideCharOffAddrzh(wd,Pj,"\n",Rj);
		    var ek=$hs_touchzh(xd,fk);
		    var dk=Pj.add(goog.math.Long.fromBits(1,0));
		    yj.J(dk,Uj,ek);break;
		   case 2:
		    var lk=$hs_writeWideCharOffAddrzh(wd,Pj,"\r",Rj);
		    var kk=$hs_touchzh(xd,lk);
		    var ik=Pj.add(goog.math.Long.fromBits(1,0));
		    var jk=$hs_writeWideCharOffAddrzh(wd,ik,"\n",kk);
		    var hk=$hs_touchzh(xd,jk);
		    var gk=ik.add(goog.math.Long.fromBits(1,0));
		    yj.J(gk,Uj,hk);break;
		   }
		  },[yd,wd,xd,sd,vd,yj,Pj,Rj,Uj]);break;
		 default:
		  var bk=$hs_writeWideCharOffAddrzh(wd,Pj,Yj,Rj);
		  var ak=$hs_touchzh(xd,bk);
		  var Zj=Pj.add(goog.math.Long.fromBits(1,0));
		  yj.J(Zj,Uj,ak);
		 }
		},[yd,wd,xd,sd,vd,yj,Pj,Rj,Uj]);
	       },[yd,wd,xd,sd,vd,yj,Pj,Rj,Uj]);break;
	      case 2:
	       $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Pj,$$GHCziTypes_False,$$GHCziTypes_False,Rj],function(mk){
		var nk=mk[0];
		pj.J(goog.math.Long.fromBits(0,0),Tj,Uj,nk);
	       },[yd,wd,xd,sd,vd,pj,Tj,Uj]);break;
	      }break;
	     }
	    },[yd,wd,xd,sd,vd,yj,pj,Pj,Rj]);
	   },[yd,wd,xd,sd,vd,pj],"$s$wa7");
	   $S(pj,[yd,wd,xd,sd,vd,yj]);
	   var pk=$F(5,function(qk,rk,sk,tk,uk){
	    var Pk=qk.add(goog.math.Long.fromBits(1,0));
	    var vk=Pk.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(vk.g){
	    case 1:
	     $M(rk,function(wk){
	      var xk=wk.v[0];
	      $M(xk,function(yk){
	       switch(yk.toString()){
	       case "\n":
		$M(vd,function(Dk){
		 switch(Dk.g){
		 case 1:
		  var Gk=$hs_writeWideCharOffAddrzh(wd,qk,"\n",uk);
		  var Fk=$hs_touchzh(xd,Gk);
		  var Ek=qk.add(goog.math.Long.fromBits(1,0));
		  zk.J(Ek,sk,tk,Fk);break;
		 case 2:
		  var Mk=$hs_writeWideCharOffAddrzh(wd,qk,"\r",uk);
		  var Lk=$hs_touchzh(xd,Mk);
		  var Jk=qk.add(goog.math.Long.fromBits(1,0));
		  var Kk=$hs_writeWideCharOffAddrzh(wd,Jk,"\n",Lk);
		  var Ik=$hs_touchzh(xd,Kk);
		  var Hk=Jk.add(goog.math.Long.fromBits(1,0));
		  zk.J(Hk,sk,tk,Ik);break;
		 }
		},[yd,wd,xd,sd,vd,pj,qk,uk,zk,sk,tk]);break;
	       default:
		var Ck=$hs_writeWideCharOffAddrzh(wd,qk,yk,uk);
		var Bk=$hs_touchzh(xd,Ck);
		var Ak=qk.add(goog.math.Long.fromBits(1,0));
		zk.J(Ak,sk,tk,Bk);
	       }
	      },[yd,wd,xd,sd,vd,pj,qk,uk,zk,sk,tk]);
	     },[yd,wd,xd,sd,vd,pj,qk,uk,zk,sk,tk]);break;
	    case 2:
	     $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,qk,$$GHCziTypes_False,$$GHCziTypes_False,uk],function(Nk){
	      var Ok=Nk[0];
	      pk.J(goog.math.Long.fromBits(0,0),rk,sk,tk,Ok);
	     },[yd,wd,xd,sd,vd,pj,rk,sk,tk,pk]);break;
	    }
	   },"$s$wa8"),zk=$f(4,function(Qk,Rk,Sk,Tk){
	    $M(Rk,function(Uk){
	     switch(Uk.g){
	     case 1:
	      $M(Sk,function(Vk){
	       switch(Vk.g){
	       case 1:
		$$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,Qk,$$GHCziTypes_False,$$GHCziTypes_True,Tk);break;
	       case 2:
		var Wk=Vk.v[0],Xk=Vk.v[1];
		pj.J(Qk,Wk,Xk,Tk);break;
	       }
	      },[yd,wd,xd,sd,vd,pj,Qk,Tk]);break;
	     case 2:
	      var Yk=Uk.v[0],Zk=Uk.v[1];
	      var tl=Qk.add(goog.math.Long.fromBits(1,0));
	      var al=tl.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(al.g){
	      case 1:
	       $M(Yk,function(bl){
		var cl=bl.v[0];
		$M(cl,function(dl){
		 switch(dl.toString()){
		 case "\n":
		  $M(vd,function(hl){
		   switch(hl.g){
		   case 1:
		    var kl=$hs_writeWideCharOffAddrzh(wd,Qk,"\n",Tk);
		    var jl=$hs_touchzh(xd,kl);
		    var il=Qk.add(goog.math.Long.fromBits(1,0));
		    zk.J(il,Zk,Sk,jl);break;
		   case 2:
		    var ql=$hs_writeWideCharOffAddrzh(wd,Qk,"\r",Tk);
		    var pl=$hs_touchzh(xd,ql);
		    var nl=Qk.add(goog.math.Long.fromBits(1,0));
		    var ol=$hs_writeWideCharOffAddrzh(wd,nl,"\n",pl);
		    var ml=$hs_touchzh(xd,ol);
		    var ll=nl.add(goog.math.Long.fromBits(1,0));
		    zk.J(ll,Zk,Sk,ml);break;
		   }
		  },[yd,wd,xd,sd,vd,pj,zk,Sk,Qk,Tk,Zk]);break;
		 default:
		  var gl=$hs_writeWideCharOffAddrzh(wd,Qk,dl,Tk);
		  var fl=$hs_touchzh(xd,gl);
		  var el=Qk.add(goog.math.Long.fromBits(1,0));
		  zk.J(el,Zk,Sk,fl);
		 }
		},[yd,wd,xd,sd,vd,pj,zk,Sk,Qk,Tk,Zk]);
	       },[yd,wd,xd,sd,vd,pj,zk,Sk,Qk,Tk,Zk]);break;
	      case 2:
	       $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Qk,$$GHCziTypes_False,$$GHCziTypes_False,Tk],function(rl){
		var sl=rl[0];
		pk.J(goog.math.Long.fromBits(0,0),Yk,Zk,Sk,sl);
	       },[yd,wd,xd,sd,vd,pj,pk,Sk,Yk,Zk]);break;
	      }break;
	     }
	    },[yd,wd,xd,sd,vd,pj,zk,pk,Sk,Qk,Tk]);
	   },[yd,wd,xd,sd,vd,pj,pk],"$wa10");
	   $S(pk,[yd,wd,xd,sd,vd,zk]);
	   zk.J(nj,dj,Wi,mj);break;
	  case 2:
	   $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,nj,$$GHCziTypes_True,$$GHCziTypes_False,mj],function(ul){
	    var vl=ul[0];
	    var wl=$F(4,function(xl,yl,zl,Al){
	     var am=xl.add(goog.math.Long.fromBits(1,0));
	     var Bl=am.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Bl.g){
	     case 1:
	      $M(yl,function(Cl){
	       var Dl=Cl.v[0];
	       $M(Dl,function(El){
		switch(El.toString()){
		case "\n":
		 var Jl=$f(2,function(Kl,Ll){
		  $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Ll,$$GHCziTypes_True,$$GHCziTypes_False,Kl],function(Ml){
		   var Nl=Ml[0];
		   Fl.J(goog.math.Long.fromBits(0,0),zl,Nl);
		  },[yd,wd,xd,sd,vd,Fl,zl]);
		 },[yd,wd,xd,sd,Fl,zl],"$w$j1");
		 $M(vd,function(Ol){
		  switch(Ol.g){
		  case 1:
		   var Rl=$hs_writeWideCharOffAddrzh(wd,xl,"\n",Al);
		   var Pl=$hs_touchzh(xd,Rl);
		   var Ql=xl.add(goog.math.Long.fromBits(1,0));
		   Jl.J(Pl,Ql);break;
		  case 2:
		   var Xl=$hs_writeWideCharOffAddrzh(wd,xl,"\r",Al);
		   var Wl=$hs_touchzh(xd,Xl);
		   var Ul=xl.add(goog.math.Long.fromBits(1,0));
		   var Vl=$hs_writeWideCharOffAddrzh(wd,Ul,"\n",Wl);
		   var Sl=$hs_touchzh(xd,Vl);
		   var Tl=Ul.add(goog.math.Long.fromBits(1,0));
		   Jl.J(Sl,Tl);break;
		  }
		 },[yd,wd,xd,sd,vd,xl,Al,Fl,zl,Jl]);break;
		default:
		 var Il=$hs_writeWideCharOffAddrzh(wd,xl,El,Al);
		 var Hl=$hs_touchzh(xd,Il);
		 var Gl=xl.add(goog.math.Long.fromBits(1,0));
		 Fl.J(Gl,zl,Hl);
		}
	       },[yd,wd,xd,sd,vd,xl,Al,Fl,zl]);
	      },[yd,wd,xd,sd,vd,xl,Al,Fl,zl]);break;
	     case 2:
	      $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,xl,$$GHCziTypes_False,$$GHCziTypes_False,Al],function(Yl){
	       var Zl=Yl[0];
	       wl.J(goog.math.Long.fromBits(0,0),yl,zl,Zl);
	      },[yd,wd,xd,sd,vd,yl,zl,wl]);break;
	     }
	    },"$s$wa6"),Fl=$f(3,function(bm,cm,dm){
	     $M(cm,function(em){
	      switch(em.g){
	      case 1:
	       $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,bm,$$GHCziTypes_False,$$GHCziTypes_True,dm);break;
	      case 2:
	       var fm=em.v[0],gm=em.v[1];
	       var Fm=bm.add(goog.math.Long.fromBits(1,0));
	       var hm=Fm.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(hm.g){
	       case 1:
		$M(fm,function(im){
		 var jm=im.v[0];
		 $M(jm,function(km){
		  switch(km.toString()){
		  case "\n":
		   var om=$f(2,function(pm,qm){
		    $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,qm,$$GHCziTypes_True,$$GHCziTypes_False,pm],function(rm){
		     var sm=rm[0];
		     Fl.J(goog.math.Long.fromBits(0,0),gm,sm);
		    },[yd,wd,xd,sd,vd,Fl,gm]);
		   },[yd,wd,xd,sd,Fl,gm],"$w$j1");
		   $M(vd,function(tm){
		    switch(tm.g){
		    case 1:
		     var wm=$hs_writeWideCharOffAddrzh(wd,bm,"\n",dm);
		     var um=$hs_touchzh(xd,wm);
		     var vm=bm.add(goog.math.Long.fromBits(1,0));
		     om.J(um,vm);break;
		    case 2:
		     var Cm=$hs_writeWideCharOffAddrzh(wd,bm,"\r",dm);
		     var Bm=$hs_touchzh(xd,Cm);
		     var zm=bm.add(goog.math.Long.fromBits(1,0));
		     var Am=$hs_writeWideCharOffAddrzh(wd,zm,"\n",Bm);
		     var xm=$hs_touchzh(xd,Am);
		     var ym=zm.add(goog.math.Long.fromBits(1,0));
		     om.J(xm,ym);break;
		    }
		   },[yd,wd,xd,sd,vd,Fl,bm,dm,gm,om]);break;
		  default:
		   var nm=$hs_writeWideCharOffAddrzh(wd,bm,km,dm);
		   var mm=$hs_touchzh(xd,nm);
		   var lm=bm.add(goog.math.Long.fromBits(1,0));
		   Fl.J(lm,gm,mm);
		  }
		 },[yd,wd,xd,sd,vd,Fl,bm,dm,gm]);
		},[yd,wd,xd,sd,vd,Fl,bm,dm,gm]);break;
	       case 2:
		$$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,bm,$$GHCziTypes_False,$$GHCziTypes_False,dm],function(Dm){
		 var Em=Dm[0];
		 wl.J(goog.math.Long.fromBits(0,0),fm,gm,Em);
		},[yd,wd,xd,sd,vd,wl,fm,gm]);break;
	       }break;
	      }
	     },[yd,wd,xd,sd,vd,Fl,wl,bm,dm]);
	    },[yd,wd,xd,sd,vd,wl],"$s$wa7");
	    $S(wl,[yd,wd,xd,sd,vd,Fl]);
	    var Gm=$F(5,function(Hm,Im,Jm,Km,Lm){
	     var mn=Hm.add(goog.math.Long.fromBits(1,0));
	     var Mm=mn.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Mm.g){
	     case 1:
	      $M(Im,function(Nm){
	       var Om=Nm.v[0];
	       $M(Om,function(Pm){
		switch(Pm.toString()){
		case "\n":
		 var Um=$f(2,function(Vm,Wm){
		  $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Wm,$$GHCziTypes_True,$$GHCziTypes_False,Vm],function(Xm){
		   var Ym=Xm[0];
		   Qm.J(goog.math.Long.fromBits(0,0),Jm,Km,Ym);
		  },[yd,wd,xd,sd,vd,wl,Qm,Jm,Km]);
		 },[yd,wd,xd,sd,Qm,Jm,Km],"$w$j1");
		 $M(vd,function(Zm){
		  switch(Zm.g){
		  case 1:
		   var cn=$hs_writeWideCharOffAddrzh(wd,Hm,"\n",Lm);
		   var an=$hs_touchzh(xd,cn);
		   var bn=Hm.add(goog.math.Long.fromBits(1,0));
		   Um.J(an,bn);break;
		  case 2:
		   var jn=$hs_writeWideCharOffAddrzh(wd,Hm,"\r",Lm);
		   var hn=$hs_touchzh(xd,jn);
		   var fn=Hm.add(goog.math.Long.fromBits(1,0));
		   var gn=$hs_writeWideCharOffAddrzh(wd,fn,"\n",hn);
		   var dn=$hs_touchzh(xd,gn);
		   var en=fn.add(goog.math.Long.fromBits(1,0));
		   Um.J(dn,en);break;
		  }
		 },[yd,wd,xd,sd,vd,wl,Hm,Lm,Qm,Jm,Km,Um]);break;
		default:
		 var Tm=$hs_writeWideCharOffAddrzh(wd,Hm,Pm,Lm);
		 var Sm=$hs_touchzh(xd,Tm);
		 var Rm=Hm.add(goog.math.Long.fromBits(1,0));
		 Qm.J(Rm,Jm,Km,Sm);
		}
	       },[yd,wd,xd,sd,vd,wl,Hm,Lm,Qm,Jm,Km]);
	      },[yd,wd,xd,sd,vd,wl,Hm,Lm,Qm,Jm,Km]);break;
	     case 2:
	      $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Hm,$$GHCziTypes_False,$$GHCziTypes_False,Lm],function(kn){
	       var ln=kn[0];
	       Gm.J(goog.math.Long.fromBits(0,0),Im,Jm,Km,ln);
	      },[yd,wd,xd,sd,vd,wl,Im,Jm,Km,Gm]);break;
	     }
	    },"$s$wa8"),Qm=$f(4,function(nn,on,pn,qn){
	     $M(on,function(rn){
	      switch(rn.g){
	      case 1:
	       $M(pn,function(sn){
		switch(sn.g){
		case 1:
		 $$GHCziIOziHandleziText$h.J(sd,wd,xd,yd,nn,$$GHCziTypes_False,$$GHCziTypes_True,qn);break;
		case 2:
		 var tn=sn.v[0],un=sn.v[1];
		 wl.J(nn,tn,un,qn);break;
		}
	       },[yd,wd,xd,sd,vd,wl,nn,qn]);break;
	      case 2:
	       var vn=rn.v[0],wn=rn.v[1];
	       var Vn=nn.add(goog.math.Long.fromBits(1,0));
	       var xn=Vn.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(xn.g){
	       case 1:
		$M(vn,function(yn){
		 var zn=yn.v[0];
		 $M(zn,function(An){
		  switch(An.toString()){
		  case "\n":
		   var En=$f(2,function(Fn,Gn){
		    $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Gn,$$GHCziTypes_True,$$GHCziTypes_False,Fn],function(Hn){
		     var In=Hn[0];
		     Qm.J(goog.math.Long.fromBits(0,0),wn,pn,In);
		    },[yd,wd,xd,sd,vd,wl,Qm,pn,wn]);
		   },[yd,wd,xd,sd,Qm,pn,wn],"$w$j1");
		   $M(vd,function(Jn){
		    switch(Jn.g){
		    case 1:
		     var Mn=$hs_writeWideCharOffAddrzh(wd,nn,"\n",qn);
		     var Kn=$hs_touchzh(xd,Mn);
		     var Ln=nn.add(goog.math.Long.fromBits(1,0));
		     En.J(Kn,Ln);break;
		    case 2:
		     var Sn=$hs_writeWideCharOffAddrzh(wd,nn,"\r",qn);
		     var Rn=$hs_touchzh(xd,Sn);
		     var Pn=nn.add(goog.math.Long.fromBits(1,0));
		     var Qn=$hs_writeWideCharOffAddrzh(wd,Pn,"\n",Rn);
		     var Nn=$hs_touchzh(xd,Qn);
		     var On=Pn.add(goog.math.Long.fromBits(1,0));
		     En.J(Nn,On);break;
		    }
		   },[yd,wd,xd,sd,vd,wl,Qm,pn,nn,qn,wn,En]);break;
		  default:
		   var Dn=$hs_writeWideCharOffAddrzh(wd,nn,An,qn);
		   var Cn=$hs_touchzh(xd,Dn);
		   var Bn=nn.add(goog.math.Long.fromBits(1,0));
		   Qm.J(Bn,wn,pn,Cn);
		  }
		 },[yd,wd,xd,sd,vd,wl,Qm,pn,nn,qn,wn]);
		},[yd,wd,xd,sd,vd,wl,Qm,pn,nn,qn,wn]);break;
	       case 2:
		$$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,nn,$$GHCziTypes_False,$$GHCziTypes_False,qn],function(Tn){
		 var Un=Tn[0];
		 Gm.J(goog.math.Long.fromBits(0,0),vn,wn,pn,Un);
		},[yd,wd,xd,sd,vd,wl,Gm,pn,vn,wn]);break;
	       }break;
	      }
	     },[yd,wd,xd,sd,vd,wl,Qm,Gm,pn,nn,qn]);
	    },[yd,wd,xd,sd,vd,wl,Gm],"$wa10");
	    $S(Gm,[yd,wd,xd,sd,vd,Qm]);
	    Qm.J(goog.math.Long.fromBits(0,0),dj,Wi,vl);
	   },[yd,wd,xd,sd,vd,Wi,dj]);break;
	  }
	 },[yd,wd,xd,sd,vd,Wi,dj,nj,mj]);
	},[yd,wd,xd,td,sd,vd,Wi,dj],"$w$j");
	$M(vd,function(Wn){
	 switch(Wn.g){
	 case 1:
	  var Zn=$hs_writeWideCharOffAddrzh(wd,Ui,"\n",Xi);
	  var Xn=$hs_touchzh(xd,Zn);
	  var Yn=Ui.add(goog.math.Long.fromBits(1,0));
	  lj.J(Xn,Yn);break;
	 case 2:
	  var go=$hs_writeWideCharOffAddrzh(wd,Ui,"\r",Xi);
	  var fo=$hs_touchzh(xd,go);
	  var co=Ui.add(goog.math.Long.fromBits(1,0));
	  var eo=$hs_writeWideCharOffAddrzh(wd,co,"\n",fo);
	  var ao=$hs_touchzh(xd,eo);
	  var bo=co.add(goog.math.Long.fromBits(1,0));
	  lj.J(ao,bo);break;
	 }
	},[yd,wd,xd,td,sd,vd,Wi,Ui,Xi,dj,lj]);break;
       default:
	var kj=$hs_writeWideCharOffAddrzh(wd,Ui,hj,Xi);
	var jj=$hs_touchzh(xd,kj);
	var ij=Ui.add(goog.math.Long.fromBits(1,0));
	mh.J(ij,dj,Wi,jj);
       }
      },[yd,wd,xd,td,sd,vd,Bd,mh,Wi,Ui,Xi,dj]);
     },[yd,wd,xd,td,sd,vd,Bd,mh,Wi,Ui,Xi,dj]);break;
    case 2:
     $$GHCziIOziHandleziText$h.C([sd,wd,xd,yd,Ui,$$GHCziTypes_False,$$GHCziTypes_False,Xi],function(ho){
      var io=ho[0];
      ch.J(goog.math.Long.fromBits(0,0),cj,dj,Wi,io);
     },[yd,wd,xd,td,sd,vd,Bd,ch,Wi,cj,dj]);break;
    }break;
   }
  },[yd,wd,xd,td,sd,vd,Bd,mh,ch,Wi,Ui,Xi]);
 },[yd,wd,xd,td,sd,vd,Bd,ch],"$wa9");
 $S(ch,[yd,wd,xd,td,sd,vd,mh]);
 var ko=$t(function(){
  $M(ud,function(lo){
   switch(lo.g){
   case 1:
    $R(1,[],"[]");break;
   case 2:
    $A($$GHCziIOziHandleziText$s);break;
   }
  },[]);
 },[ud],"sat");
 mh.J(goog.math.Long.fromBits(0,0),zd,ko,Ad);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr7=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hPutStr");
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr6=$t(function(){
 $$GHCziErr_error.J($$GHCziIOziHandleziText$t);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr5=$D(1,function(){
 $r([$$GHCziIOziHandleziTypes_NoBuffering,$$GHCziIOziHandleziText_hPutStr6]);
},"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr4=$f(2,function(mo,no){
 $M(mo,function(oo){
  var po=oo.v[6],qo=oo.v[8],ro=oo.v[9],so=oo.v[14];
  $M(po,function(to){
   switch(to.g){
   case 1:
    var cp=$d(1,[$$GHCziIOziHandleziText_hPutStr5,so],"sat");
    $r([no,cp]);break;
   default:
    var uo=$hs_readMutVarzh(ro,no);
    var vo=uo[0],wo=uo[1];
    var xo=$hs_readMutVarzh(qo,vo);
    var yo=xo[0],zo=xo[1];
    $M(wo,function(Ao){
     switch(Ao.g){
     case 1:
      $M(zo,function(Bo){
       var Co=Bo.v[3];
       var Qo=Co.multiply(goog.math.Long.fromBits(4,0));
       var Do=Qo.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Do.g){
       case 1:
	var Eo=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,yo);
	var Fo=Eo[0],Go=Eo[1];
	var Ho=$hs_newPinnedByteArrayzh(Qo,Fo);
	var Io=Ho[0],Jo=Ho[1];
	var Ko=$d(1,[Go],"sat");
	var Lo=$d(2,[Jo,Ko],"sat");
	var No=$hs_byteArrayContentszh(Jo);
	var Mo=$d(1,[No,Lo,$$GHCziIOziBuffer_WriteBuffer,Co,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
	var Oo=$d(1,[to,Mo],"sat");
	var Po=$d(1,[Oo,so],"sat");
	$r([Io,Po]);break;
       case 2:
	$A($$GHCziForeignPtr_mallocForeignPtrBytes2);break;
       }
      },[yo,to,so]);break;
     case 2:
      var Ro=Ao.v[0],So=Ao.v[1];
      var bp=$hs_writeMutVarzh(ro,So,yo);
      var To=$t(function(){
       $M(Ro,function(Uo){
	var Vo=Uo.v[0],Wo=Uo.v[1];
	$M(zo,function(Xo){
	 var Yo=Xo.v[3];
	 $R(1,[Vo,Wo,$$GHCziIOziBuffer_WriteBuffer,Yo,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	},[Vo,Wo]);
       },[zo]);
      },[zo,Ro],"sat");
      var Zo=$d(1,[to,To],"sat");
      var ap=$d(1,[Zo,so],"sat");
      $r([bp,ap]);break;
     }
    },[ro,zo,yo,to,so]);
   }
  },[ro,no,qo,so]);
 },[no]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr2=$f(4,function(dp,ep,fp,gp){
 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText_hPutStr7,dp,$$GHCziIOziHandleziText_hPutStr4,gp],function(hp){
  var ip=hp[0],jp=hp[1];
  $M(jp,function(kp){
   var lp=kp.v[0],mp=kp.v[1];
   $M(lp,function(np){
    var op=np.v[0],pp=np.v[1];
    $M(op,function(qp){
     switch(qp.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr3.C([dp,ep,ip],function(rp){
       var sp=rp[0];
       $M(fp,function(tp){
	switch(tp.g){
	case 1:
	 $r([sp,$$GHCziTuple_Z0T]);break;
	case 2:
	 $$GHCziIOziHandleziText_zdwa5.J(dp,"\n",sp);break;
	}
       },[dp,sp]);
      },[dp,fp]);break;
     case 2:
      $M(pp,function(up){
       var vp=up.v[0],wp=up.v[1],xp=up.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(dp,$$GHCziTypes_True,fp,mp,vp,wp,xp,ep,ip);
      },[dp,ep,ip,fp,mp]);break;
     case 3:
      $M(pp,function(yp){
       var zp=yp.v[0],Ap=yp.v[1],Bp=yp.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(dp,$$GHCziTypes_False,fp,mp,zp,Ap,Bp,ep,ip);
      },[dp,ep,ip,fp,mp]);break;
     }
    },[dp,ep,ip,fp,pp,mp]);
   },[dp,ep,ip,fp,mp]);
  },[dp,ep,ip,fp]);
 },[dp,ep,fp]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStrLn1=$f(3,function(Fp,Gp,Hp){
 $$GHCziIOziHandleziText_hPutStr2.J(Fp,Gp,$$GHCziTypes_True,Hp);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText$b=$F(2,function(Xz,Yz){
 $M(Xz,function(Zz){
  var aA=Zz.v[0],bA=Zz.v[1];
  $$GHCziException_zdp1Exception.C([aA,bA],function(cA){
   var dA=cA.v[0],eA=cA.v[1];
   var fA=$hs_eqWordzh(dA,goog.math.Long.fromBits(4053623282,1685460941));
   switch(fA.g){
   case 1:
    $r($hs_raiseIOzh(Zz,Yz));break;
   case 2:
    var gA=$hs_eqWordzh(eA,goog.math.Long.fromBits(3693590983,2507416641));
    switch(gA.g){
    case 1:
     $r($hs_raiseIOzh(Zz,Yz));break;
    case 2:
     $M(bA,function(hA){
      var iA=hA.v[1];
      $M(iA,function(jA){
       switch(jA.g){
       case 5:
	$r([Yz,$$DataziMaybe_Nothing]);break;
       default:
	$$GHCziIOziException_ioError.J(hA,Yz);
       }
      },[Yz,hA]);
     },[Yz]);break;
    }break;
   }
  },[bA,Zz,Yz]);
 },[Yz]);
},"lvl");
var $$GHCziIOziHandleziText$c=$F(3,function(kA,lA,mA){
 var nA=$f(1,function(oA){
  $M(kA,function(pA){
   var qA=pA.v[13];
   $M(lA,function(rA){
    var sA=rA.v[0],tA=rA.v[1],uA=rA.v[2],vA=rA.v[3],wA=rA.v[4],xA=rA.v[5];
    var yA=xA.subtract(wA);
    switch(yA.toString()){
    case "0":
     $$GHCziIOziHandleziInternals_hLookAheadzu2.C([pA,rA,oA],function(AA){
      var BA=AA[0],CA=AA[1];
      var DA=$d(2,[CA],"sat");
      $r([BA,DA]);
     },[]);break;
    case "1":
     $M(qA,function(EA){
      switch(EA.g){
      case 1:
       var FA=$d(2,[rA],"sat");
       $r([oA,FA]);break;
      case 2:
       var GA=$hs_readWideCharOffAddrzh(sA,wA,oA);
       var HA=GA[0],IA=GA[1];
       var LA=$hs_touchzh(tA,HA);
       $M(IA,function(JA){
	switch(JA.toString()){
	case "\r":
	 var SA=$hs_writeWideCharOffAddrzh(sA,goog.math.Long.fromBits(0,0),"\r",LA);
	 var RA=$hs_touchzh(tA,SA);
	 var MA=$d(1,[sA,tA,uA,vA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0)],"sat");
	 $$GHCziIOziHandleziInternals_hLookAheadzu2.C([pA,MA,RA],function(NA){
	  var OA=NA[0],PA=NA[1];
	  var QA=$d(2,[PA],"sat");
	  $r([OA,QA]);
	 },[]);break;
	default:
	 var KA=$d(2,[rA],"sat");
	 $r([LA,KA]);
	}
       },[rA,pA,sA,tA,LA,uA,vA]);break;
      }
     },[wA,oA,rA,pA,sA,tA,uA,vA]);break;
    default:
     var zA=$d(2,[rA],"sat");
     $r([oA,zA]);
    }
   },[oA,pA,qA]);
  },[lA,oA]);
 },[kA,lA],"sat");
 $k($hs_catchzh,[nA,$$GHCziIOziHandleziText$b,mA]);
},"a1");
var $$GHCziIOziHandleziText$d=$D(1,function(){
 $r(["\r"]);
},"lvl1");
var $$GHCziIOziHandleziText$e=$D(1,function(){
 $r(["\n"]);
},"lvl2");
var $$GHCziIOziHandleziText$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("hPutChar");
},"lvl3");
var $$GHCziIOziHandleziText$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("commitBuffer");
},"lvl4");
var $$GHCziIOziHandleziText$h=$F(8,function(TA,UA,VA,WA,XA,YA,ZA,aB){
 var bB=$d(1,[UA,VA],"raw");
 var cB=$f(1,function(dB){
  $M(dB,function(eB){
   var fB=eB.v[1],gB=eB.v[3],hB=eB.v[5],iB=eB.v[8],jB=eB.v[9];
   var kB=$f(1,function(lB){
    $$GHCziIOziHandleziInternals_zdwa3.C([eB,UA,VA,$$GHCziIOziBuffer_WriteBuffer,WA,goog.math.Long.fromBits(0,0),XA,lB],function(mB){
     var nB=mB[0];
     $M(YA,function(oB){
      switch(oB.g){
      case 1:
       $M(ZA,function(pB){
	switch(pB.g){
	case 1:
	 $r([nB,$$GHCziTuple_Z0T]);break;
	case 2:
	 var qB=$hs_readMutVarzh(iB,nB);
	 var rB=qB[0],sB=qB[1];
	 $M(sB,function(tB){
	  var uB=tB.v[3];
	  var vB=WA.equals(uB)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(vB.g){
	  case 1:
	   $r([rB,$$GHCziTuple_Z0T]);break;
	  case 2:
	   var wB=$hs_readMutVarzh(jB,rB);
	   var xB=wB[0],yB=wB[1];
	   var zB=$d(2,[bB,yB],"sat");
	   var AB=$hs_writeMutVarzh(jB,zB,xB);
	   $r([AB,$$GHCziTuple_Z0T]);break;
	  }
	 },[bB,WA,rB,jB]);break;
	}
       },[bB,WA,nB,iB,jB]);break;
      case 2:
       var BB=$hs_readMutVarzh(hB,nB);
       var CB=BB[0],DB=BB[1];
       $M(DB,function(EB){
	var FB=EB.v[4],GB=EB.v[5];
	var HB=FB.equals(GB)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(HB.g){
	case 1:
	 $$GHCziIOziBufferedIO_flushWriteBuffer.C([fB,gB,EB,CB],function(IB){
	  var JB=IB[0],KB=IB[1];
	  var MB=$hs_writeMutVarzh(hB,KB,JB);
	  $M(ZA,function(LB){
	   switch(LB.g){
	   case 1:
	    $r([MB,$$GHCziTuple_Z0T]);break;
	   case 2:
	    var NB=$hs_readMutVarzh(iB,MB);
	    var OB=NB[0],PB=NB[1];
	    $M(PB,function(QB){
	     var RB=QB.v[3];
	     var SB=WA.equals(RB)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(SB.g){
	     case 1:
	      $r([OB,$$GHCziTuple_Z0T]);break;
	     case 2:
	      var TB=$hs_readMutVarzh(jB,OB);
	      var UB=TB[0],VB=TB[1];
	      var WB=$d(2,[bB,VB],"sat");
	      var XB=$hs_writeMutVarzh(jB,WB,UB);
	      $r([XB,$$GHCziTuple_Z0T]);break;
	     }
	    },[bB,WA,jB,OB]);break;
	   }
	  },[bB,WA,iB,jB,MB]);
	 },[bB,WA,ZA,iB,jB,hB]);break;
	case 2:
	 $M(ZA,function(YB){
	  switch(YB.g){
	  case 1:
	   $r([CB,$$GHCziTuple_Z0T]);break;
	  case 2:
	   var ZB=$hs_readMutVarzh(iB,CB);
	   var aC=ZB[0],bC=ZB[1];
	   $M(bC,function(cC){
	    var dC=cC.v[3];
	    var eC=WA.equals(dC)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(eC.g){
	    case 1:
	     $r([aC,$$GHCziTuple_Z0T]);break;
	    case 2:
	     var fC=$hs_readMutVarzh(jB,aC);
	     var gC=fC[0],hC=fC[1];
	     var iC=$d(2,[bB,hC],"sat");
	     var jC=$hs_writeMutVarzh(jB,iC,gC);
	     $r([jC,$$GHCziTuple_Z0T]);break;
	    }
	   },[bB,WA,jB,aC]);break;
	  }
	 },[bB,WA,iB,jB,CB]);break;
	}
       },[bB,WA,ZA,iB,jB,hB,fB,gB,CB]);break;
      }
     },[bB,WA,ZA,nB,iB,jB,hB,fB,gB]);
    },[bB,WA,YA,ZA,iB,jB,hB,fB,gB]);
   },[UA,VA,bB,eB,WA,XA,YA,ZA,iB,jB,hB,fB,gB],"sat");
   $A(kB);
  },[UA,VA,bB,WA,XA,YA,ZA]);
 },[UA,VA,bB,WA,XA,YA,ZA],"sat");
 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$g,TA,cB,aB);
},"$wa7");
var $$GHCziIOziHandleziText$i=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl5");
var $$GHCziIOziHandleziText$j=$F(6,function(kC,lC,mC,nC,oC,pC){
 var qC=mC.equals(nC)?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(qC.g){
 case 1:
  var iD=nC.subtract(goog.math.Long.fromBits(1,0));
  var rC=$hs_readWideCharOffAddrzh(kC,iD,pC);
  var sC=rC[0],tC=rC[1];
  var uC=$f(3,function(vC,wC,xC){
   var yC=wC.lessThan(mC)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(yC.g){
   case 1:
    var zC=$hs_readWideCharOffAddrzh(kC,wC,xC);
    var AC=zC[0],BC=zC[1];
    $M(BC,function(CC){
     switch(CC.toString()){
     case "\n":
      var GC=wC.greaterThan(mC)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(GC.g){
      case 1:
       var IC=wC.subtract(goog.math.Long.fromBits(1,0));
       var HC=$d(2,[$$GHCziIOziHandleziText$e,vC],"sat");
       uC.J(HC,IC,AC);break;
      case 2:
       var RC=wC.subtract(goog.math.Long.fromBits(1,0));
       var JC=$hs_readWideCharOffAddrzh(kC,RC,AC);
       var KC=JC[0],LC=JC[1];
       $M(LC,function(MC){
	switch(MC.toString()){
	case "\r":
	 var QC=wC.subtract(goog.math.Long.fromBits(2,0));
	 var PC=$d(2,[$$GHCziIOziHandleziText$e,vC],"sat");
	 uC.J(PC,QC,KC);break;
	default:
	 var OC=wC.subtract(goog.math.Long.fromBits(1,0));
	 var NC=$d(2,[$$GHCziIOziHandleziText$e,vC],"sat");
	 uC.J(NC,OC,KC);
	}
       },[wC,vC,uC,KC]);break;
      }break;
     default:
      var FC=wC.subtract(goog.math.Long.fromBits(1,0));
      var DC=$d(1,[CC],"sat");
      var EC=$d(2,[DC,vC],"sat");
      uC.J(EC,FC,AC);
     }
    },[mC,kC,wC,vC,uC,AC]);break;
   case 2:
    $r([xC,vC]);break;
   }
  },[mC,kC],"$wa9");
  $M(tC,function(SC){
   switch(SC.toString()){
   case "\r":
    var hD=nC.subtract(goog.math.Long.fromBits(2,0));
    uC.C([oC,hD,sC],function(aD){
     var bD=aD[0],cD=aD[1];
     var gD=$hs_touchzh(lC,bD);
     var eD=nC.subtract(goog.math.Long.fromBits(1,0));
     var dD=$d(1,[eD],"sat");
     var fD=$d(1,[cD,dD],"sat");
     $r([gD,fD]);
    },[nC,lC]);break;
   default:
    var ZC=nC.subtract(goog.math.Long.fromBits(1,0));
    uC.C([oC,ZC,sC],function(TC){
     var UC=TC[0],VC=TC[1];
     var YC=$hs_touchzh(lC,UC);
     var WC=$d(1,[nC],"sat");
     var XC=$d(1,[VC,WC],"sat");
     $r([YC,XC]);
    },[nC,lC]);
   }
  },[nC,uC,oC,sC,lC]);break;
 case 2:
  var jD=$d(1,[oC,$$GHCziIOziHandleziText$i],"sat");
  $r([pC,jD]);break;
 }
},"$wa8");
var $$GHCziIOziHandleziText$k=$D(2,function(){
 $r([$$GHCziIOziHandleziText$d,$$GHCziTypes_ZMZN]);
},"lvl6");
var $$GHCziIOziHandleziText$l=$F(1,function(kD){
 $M(kD,function(lD){
  switch(lD.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var mD=lD.v[0],nD=lD.v[1];
   var oD=$t(function(){
    $$GHCziIOziHandleziText$l.J(nD);
   },[nD],"sat");
   $$GHCziBase_zpzp.J(mD,oD);break;
  }
 },[]);
},"go");
var $$GHCziIOziHandleziText$m=$F(1,function(pD){
 $M(pD,function(qD){
  switch(qD.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var rD=qD.v[0],sD=qD.v[1];
   var tD=$t(function(){
    $$GHCziIOziHandleziText$m.J(sD);
   },[sD],"sat");
   $$GHCziBase_zpzp.J(rD,tD);break;
  }
 },[]);
},"go1");
var $$GHCziIOziHandleziText$s=$D(2,function(){
 $r([$$GHCziIOziHandleziText$e,$$GHCziTypes_ZMZN]);
},"lvl11");
var $$GHCziIOziHandleziText$t=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no buffer!");
},"lvl12");
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
   },[Q,T,W],"lvl39");
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
   },[Y],"lvl40");
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
   },[w1,t1],"lvl40");
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
 },[t1,s1],"lvl39");
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
   $A($$GHCziRead$K);break;
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
var $$GHCziRead$K=$F(1,function(UM){
 $R(3,[],"Fail");
},"lvl23");
var $$GHCziReal_zdfEnumRatio1=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Real'");
var $$GHCziReal_even1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Real'");
var $$GHCziReal_zdfEnumRatio2=$t(function(){
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
   $A($$GHCziReal_zdfEnumRatio2);break;
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
 $r([$$GHCziReal_zdfEnumRatio1,$$GHCziReal_even1]);
},"at libraries/base/GHC/Real.lhs:63:1");
var $$GHCziReal_zczuf2=$f(2,function(uo,vo){
 $$GHCziIntegerziType_remInteger.C([vo,$$GHCziReal_even2],function(wo){
  $$GHCziIntegerziType_eqInteger.C([wo,$$GHCziReal_even1],function(xo){
   switch(xo.g){
   case 1:
    $$GHCziIntegerziType_eqInteger.C([vo,$$GHCziReal_zdfEnumRatio1],function(yo){
     switch(yo.g){
     case 1:
      $$GHCziIntegerziType_minusInteger.C([vo,$$GHCziReal_zdfEnumRatio1],function(zo){
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
     $A($$GHCziReal_zdfEnumRatio1);break;
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
var $$GHCziReal$f=$F(3,function(CG,DG,EG){
 $$GHCziIntegerziType_remInteger.C([DG,$$GHCziReal_even2],function(FG){
  $$GHCziIntegerziType_eqInteger.C([FG,$$GHCziReal_even1],function(GG){
   switch(GG.g){
   case 1:
    $$GHCziIntegerziType_eqInteger.C([DG,$$GHCziReal_zdfEnumRatio1],function(HG){
     switch(HG.g){
     case 1:
      $$GHCziIntegerziType_timesInteger.C([CG,EG],function(IG){
       $$GHCziIntegerziType_minusInteger.C([DG,$$GHCziReal_zdfEnumRatio1],function(JG){
	$$GHCziIntegerziType_quotInteger.C([JG,$$GHCziReal_even2],function(KG){
	 $$GHCziIntegerziType_timesInteger.C([CG,CG],function(LG){
	  $$GHCziReal$f.J(LG,KG,IG);
	 },[IG,KG]);
	},[CG,IG]);
       },[CG,IG]);
      },[DG,CG]);break;
     case 2:
      $$GHCziIntegerziType_timesInteger.J(CG,EG);break;
     }
    },[DG,CG,EG]);break;
   case 2:
    $$GHCziIntegerziType_quotInteger.C([DG,$$GHCziReal_even2],function(MG){
     $$GHCziIntegerziType_timesInteger.C([CG,CG],function(NG){
      $$GHCziReal$f.J(NG,MG,EG);
     },[EG,MG]);
    },[CG,EG]);break;
   }
  },[DG,CG,EG]);
 },[DG,CG,EG]);
},"at libraries/base/GHC/Real.lhs:448:11");
var $$GHCziReal$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Negative exponent");
},"lvl5");
var $$GHCziReal$h=$F(3,function(OG,PG,QG){
 var RG=$hs_remIntzh(PG,goog.math.Long.fromBits(2,0));
 switch(RG.toString()){
 case "0":
  var YG=$hs_quotIntzh(PG,goog.math.Long.fromBits(2,0));
  $$GHCziIntegerziType_timesInteger.C([OG,OG],function(XG){
   $$GHCziReal$h.J(XG,YG,QG);
  },[QG,YG]);break;
 default:
  $M(PG,function(SG){
   switch(SG.toString()){
   case "1":
    $$GHCziIntegerziType_timesInteger.J(OG,QG);break;
   default:
    $$GHCziIntegerziType_timesInteger.C([OG,QG],function(TG){
     var WG=SG.subtract(goog.math.Long.fromBits(1,0));
     var VG=$hs_quotIntzh(WG,goog.math.Long.fromBits(2,0));
     $$GHCziIntegerziType_timesInteger.C([OG,OG],function(UG){
      $$GHCziReal$h.J(UG,VG,TG);
     },[TG,VG]);
    },[OG,SG]);
   }
  },[OG,QG]);
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
var $$GHCziShow_shows27=$t(function(){
 $$GHCziCString_unpackCStringzh.J("'\\''");
},[],"in `base:GHC.Show'");
var $$GHCziShow_shows28=$D(1,function(){
 $r(["'"]);
},"in `base:GHC.Show'");
var $$GHCziShow_shows25=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Show'");
var $$GHCziShow_showszuintegerToStringzq=$f(2,function(Z,a1){
 $$GHCziIntegerziType_ltInteger.C([Z,$$GHCziShow$m],function(b1){
  switch(b1.g){
  case 1:
   $$GHCziShow$B.C([$$GHCziShow$v,Z],function(c1){
    switch(c1.g){
    case 1:
     $A($$GHCziShow$x);break;
    case 2:
     var d1=c1.v[0],e1=c1.v[1];
     $$GHCziIntegerziType_quotRemInteger.C([d1,$$GHCziShow$m],function(f1){
      var g1=f1[0],h1=f1[1];
      $$GHCziIntegerziType_integerToInt.C([g1],function(o1){
       var i1=o1.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(i1.g){
       case 1:
	$$GHCziIntegerziType_integerToInt.C([h1],function(k1){
	 var j1=$t(function(){
	  $$GHCziShow$E.J(e1,a1);
	 },[e1,a1],"sat");
	 $$GHCziShow$C.J(k1,j1);
	},[e1,a1]);break;
       case 2:
	var l1=$t(function(){
	 $$GHCziIntegerziType_integerToInt.C([h1],function(n1){
	  var m1=$t(function(){
	   $$GHCziShow$E.J(e1,a1);
	  },[e1,a1],"sat");
	  $$GHCziShow$D.J(goog.math.Long.fromBits(18,0),n1,m1);
	 },[e1,a1]);
	},[h1,e1,a1],"sat");
	$$GHCziShow$C.J(o1,l1);break;
       }
      },[h1,e1,a1]);
     },[e1,a1]);break;
    }
   },[a1]);break;
  case 2:
   $$GHCziIntegerziType_integerToInt.C([Z],function(p1){
    $$GHCziShow$C.J(p1,a1);
   },[a1]);break;
  }
 },[Z,a1]);
},[],"at libraries/base/GHC/Show.lhs:481:5");
var $$GHCziShow_integerToString=$f(2,function(q1,r1){
 $$GHCziIntegerziType_ltInteger.C([q1,$$GHCziShow_shows25],function(s1){
  switch(s1.g){
  case 1:
   $$GHCziShow_showszuintegerToStringzq.J(q1,r1);break;
  case 2:
   var t1=$t(function(){
    $$GHCziIntegerziType_negateInteger.C([q1],function(u1){
     $$GHCziShow_showszuintegerToStringzq.J(u1,r1);
    },[r1]);
   },[q1,r1],"sat");
   $R(2,[$$GHCziShow_shows3,t1],":");break;
  }
 },[q1,r1]);
},[],"at libraries/base/GHC/Show.lhs:476:1");
var $$GHCziShow_zdwshowSignedInt=$f(3,function(L1,M1,N1){
 var O1=M1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(O1.g){
 case 1:
  $$GHCziShow_itos.J(M1,N1);break;
 case 2:
  var P1=L1.greaterThan(goog.math.Long.fromBits(6,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(P1.g){
  case 1:
   $$GHCziShow_itos.J(M1,N1);break;
  case 2:
   var Q1=$t(function(){
    var R1=$d(2,[$$GHCziShow_shows1,N1],"sat");
    $$GHCziShow_itos.J(M1,R1);
   },[M1,N1],"sat");
   $R(2,[$$GHCziShow_shows2,Q1],":");break;
  }break;
 }
},[],"at libraries/base/GHC/Show.lhs:427:1");
var $$GHCziShow_showSignedInt=$f(3,function(S1,T1,U1){
 $M(S1,function(V1){
  var W1=V1.v[0];
  $M(T1,function(X1){
   var Y1=X1.v[0];
   $$GHCziShow_zdwshowSignedInt.J(W1,Y1,U1);
  },[W1,U1]);
 },[T1,U1]);
},[],"at libraries/base/GHC/Show.lhs:427:1");
var $$GHCziShow_zdwzdcshowsPrec=$f(3,function(i2,j2,k2){
 var l2=i2.greaterThan(goog.math.Long.fromBits(6,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(l2.g){
 case 1:
  $$GHCziShow_integerToString.J(j2,k2);break;
 case 2:
  $$GHCziIntegerziType_ltInteger.C([j2,$$GHCziShow_shows25],function(m2){
   switch(m2.g){
   case 1:
    $$GHCziShow_integerToString.J(j2,k2);break;
   case 2:
    var n2=$t(function(){
     var o2=$d(2,[$$GHCziShow_shows1,k2],"sat");
     $$GHCziShow_integerToString.J(j2,o2);
    },[j2,k2],"sat");
    $R(2,[$$GHCziShow_shows2,n2],":");break;
   }
  },[j2,k2]);break;
 }
},[],"at libraries/base/GHC/Show.lhs:142:5");
var $$GHCziShow_zdwshowLitChar=$f(2,function(S4,T4){
 var U4=S4>"\x7f"?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(U4.g){
 case 1:
  $M(S4,function(V4){
   switch(V4.toString()){
   case "\\":
    $$GHCziBase_zpzp.J($$GHCziShow$c,T4);break;
   case "\x7f":
    $$GHCziBase_zpzp.J($$GHCziShow$b,T4);break;
   default:
    var W4=V4>=" "?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(W4.g){
    case 1:
     $M(V4,function(X4){
      switch(X4.toString()){
      case "\x07":
       $$GHCziBase_zpzp.J($$GHCziShow$k,T4);break;
      case "\b":
       $$GHCziBase_zpzp.J($$GHCziShow$j,T4);break;
      case "\t":
       $$GHCziBase_zpzp.J($$GHCziShow$i,T4);break;
      case "\n":
       $$GHCziBase_zpzp.J($$GHCziShow$h,T4);break;
      case "\v":
       $$GHCziBase_zpzp.J($$GHCziShow$g,T4);break;
      case "\f":
       $$GHCziBase_zpzp.J($$GHCziShow$f,T4);break;
      case "\r":
       $$GHCziBase_zpzp.J($$GHCziShow$e,T4);break;
      case "\x0e":
       var c5=$t(function(){
	$M(T4,function(d5){
	 switch(d5.g){
	 case 1:
	  $R(1,[],"[]");break;
	 case 2:
	  var e5=d5.v[0];
	  $M(e5,function(f5){
	   var g5=f5.v[0];
	   $M(g5,function(h5){
	    switch(h5.toString()){
	    case "H":
	     $$GHCziCString_unpackAppendCStringzh.J("\\&",d5);break;
	    default:
	     $A(d5);
	    }
	   },[d5]);
	  },[d5]);break;
	 }
	},[]);
       },[T4],"sat");
       $$GHCziBase_zpzp.J($$GHCziShow$d,c5);break;
      default:
       var Y4=$t(function(){
	var a5=$hs_ordzh(X4);
	var Z4=a5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Z4.g){
	case 1:
	 $$GHCziList_znznzusub.J($$GHCziShow_asciiTab,a5);break;
	case 2:
	 $A($$GHCziList_znzn1);break;
	}
       },[X4],"sat");
       var b5=$d(2,[$$GHCziShow$a,Y4],"sat");
       $$GHCziBase_zpzp.J(b5,T4);
      }
     },[T4]);break;
    case 2:
     var i5=$d(1,[V4],"sat");
     $R(2,[i5,T4],":");break;
    }
   }
  },[T4]);break;
 case 2:
  var j5=$t(function(){
   var k5=$t(function(){
    $M(T4,function(l5){
     switch(l5.g){
     case 1:
      $R(1,[],"[]");break;
     case 2:
      var m5=l5.v[0];
      $M(m5,function(n5){
       var o5=n5.v[0];
       var p5=o5>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(p5.g){
       case 1:
	$A(l5);break;
       case 2:
	var q5=o5<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(q5.g){
	case 1:
	 $A(l5);break;
	case 2:
	 $$GHCziCString_unpackAppendCStringzh.J("\\&",l5);break;
	}break;
       }
      },[l5]);break;
     }
    },[]);
   },[T4],"sat");
   var r5=$hs_ordzh(S4);
   $$GHCziShow_itos.J(r5,k5);
  },[S4,T4],"sat");
  $R(2,[$$GHCziShow$a,j5],":");break;
 }
},[],"at libraries/base/GHC/Show.lhs:348:1");
var $$GHCziShow_zdfShowIntzuzdcshowList=$f(2,function(q7,r7){
 $M(q7,function(s7){
  switch(s7.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",r7);break;
  case 2:
   var t7=s7.v[0],u7=s7.v[1];
   var v7=$t(function(){
    $M(t7,function(w7){
     var x7=w7.v[0];
     var y7=$t(function(){
      var z7=$d(2,[$$GHCziShow_showListzuzu2,r7],"lvl22");
      var A7=$f(1,function(B7){
       $M(B7,function(C7){
	switch(C7.g){
	case 1:
	 $A(z7);break;
	case 2:
	 var D7=C7.v[0],E7=C7.v[1];
	 var F7=$t(function(){
	  $M(D7,function(G7){
	   var H7=G7.v[0];
	   var I7=$t(function(){
	    A7.J(E7);
	   },[E7,A7],"sat");
	   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),H7,I7);
	  },[E7,A7]);
	 },[D7,E7,A7],"sat");
	 $R(2,[$$GHCziShow_showListzuzu1,F7],":");break;
	}
       },[z7,A7]);
      },[z7],"showl");
      A7.J(u7);
     },[r7,u7],"sat");
     $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),x7,y7);
    },[r7,u7]);
   },[r7,t7,u7],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,v7],":");break;
  }
 },[r7]);
},[],"at libraries/base/GHC/Show.lhs:157:5");
var $$GHCziShow_zdfShowIntzuzdcshow=$f(1,function(J7){
 $M(J7,function(K7){
  var L7=K7.v[0];
  $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),L7,$$GHCziTypes_ZMZN);
 },[]);
},[],"at libraries/base/GHC/Show.lhs:150:5");
var $$GHCziShow_zdfShowInt=$D(1,function(){
 $r([$$GHCziShow_showSignedInt,$$GHCziShow_zdfShowIntzuzdcshow,$$GHCziShow_zdfShowIntzuzdcshowList]);
},"at libraries/base/GHC/Show.lhs:206:10");
var $$GHCziShow_zdfShowIntegerzuzdcshow=$f(1,function(M7){
 $$GHCziShow_zdwzdcshowsPrec.J(goog.math.Long.fromBits(0,0),M7,$$GHCziTypes_ZMZN);
},[],"at libraries/base/GHC/Show.lhs:150:5");
var $$GHCziShow_zdfShowZLz2cUZR1=$f(3,function(T7,U7,V7){
 var W7=$t(function(){
  U7.J(V7);
 },[V7,U7],"sat");
 var X7=$d(2,[$$GHCziShow_showListzuzu1,W7],"sat");
 T7.J(X7);
},[],"in `base:GHC.Show'");
var $$GHCziShow_showzutuple=$f(1,function(Y7){
 var Z7=$t(function(){
  $M(Y7,function(a8){
   switch(a8.g){
   case 1:
    $A($$GHCziList_foldr3);break;
   case 2:
    var b8=a8.v[0],c8=a8.v[1];
    $M(c8,function(d8){
     switch(d8.g){
     case 1:
      $A(b8);break;
     case 2:
      var e8=d8.v[0],f8=d8.v[1];
      var g8=$t(function(){
       $$GHCziList_foldr1zuzdsfoldr1.J($$GHCziShow_zdfShowZLz2cUZR1,e8,f8);
      },[e8,f8],"r");
      var h8=$f(1,function(i8){
       var j8=$t(function(){
	g8.J(i8);
       },[g8,i8],"sat");
       var k8=$d(2,[$$GHCziShow_showListzuzu1,j8],"sat");
       b8.J(k8);
      },[b8,g8],"sat");
      $A(h8);break;
     }
    },[b8]);break;
   }
  },[]);
 },[Y7],"f");
 var l8=$f(1,function(m8){
  var n8=$t(function(){
   var o8=$d(2,[$$GHCziShow_shows1,m8],"sat");
   Z7.J(o8);
  },[Z7,m8],"sat");
  $R(2,[$$GHCziShow_shows2,n8],":");
 },[Z7],"sat");
 $A(l8);
},[],"at libraries/base/GHC/Show.lhs:303:1");
var $$GHCziShow_zdwzdcshowsPrec1=$f(5,function(H8,I8,J8,K8,L8){
 var M8=$t(function(){
  $$GHCziShow_showsPrec.J(I8,$$GHCziBase_zzeroInt,K8);
 },[I8,K8],"sat");
 var N8=$d(2,[M8,$$GHCziTypes_ZMZN],"sat");
 var O8=$t(function(){
  $$GHCziShow_showsPrec.J(H8,$$GHCziBase_zzeroInt,J8);
 },[H8,J8],"sat");
 var P8=$d(2,[O8,N8],"sat");
 $$GHCziShow_showzutuple.J(P8,L8);
},[],"at libraries/base/GHC/Show.lhs:142:5");
var $$GHCziShow_intToDigit1=$f(1,function(gA){
 var hA=$t(function(){
  $$GHCziShow_itos.J(gA,$$GHCziTypes_ZMZN);
 },[gA],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Char.intToDigit: not a digit ",hA],function(iA){
  $$GHCziErr_error.J(iA);
 },[]);
},[],"in `base:GHC.Show'");
var $$GHCziShow_zdwintToDigit=$f(1,function(jA){
 var kA=$f(1,function(lA){
  var mA=jA.greaterThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(mA.g){
  case 1:
   $$GHCziShow_intToDigit1.J(jA);break;
  case 2:
   var nA=jA.lessThanOrEqual(goog.math.Long.fromBits(15,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(nA.g){
   case 1:
    $$GHCziShow_intToDigit1.J(jA);break;
   case 2:
    var oA=goog.math.Long.fromBits(87,0).add(jA);
    $r($hs_chrzh(oA));break;
   }break;
  }
 },[jA],"$w$j");
 var pA=jA.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(pA.g){
 case 1:
  kA.J($$GHCziPrim_realWorldzh);break;
 case 2:
  var qA=jA.lessThanOrEqual(goog.math.Long.fromBits(9,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(qA.g){
  case 1:
   kA.J($$GHCziPrim_realWorldzh);break;
  case 2:
   var rA=goog.math.Long.fromBits(48,0).add(jA);
   $r($hs_chrzh(rA));break;
  }break;
 }
},[],"at libraries/base/GHC/Show.lhs:418:1");
var $$GHCziShow_intToDigit=$f(1,function(sA){
 $M(sA,function(tA){
  var uA=tA.v[0];
  $$GHCziShow_zdwintToDigit.C([uA],function(vA){
   $R(1,[vA],"C#");
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
 $r([goog.math.Long.fromBits(2808348672,232830643)]);
},"lvl12");
var $$GHCziShow$n=$D(1,function(){
 $r([goog.math.Long.fromBits(100974195,0)]);
},"sat");
var $$GHCziShow$o=$D(2,function(){
 $r([$$GHCziShow$n,$$GHCziTypes_ZMZN]);
},"sat");
var $$GHCziShow$p=$D(1,function(){
 $r([goog.math.Long.fromBits(1864637526,0)]);
},"sat");
var $$GHCziShow$q=$D(2,function(){
 $r([$$GHCziShow$p,$$GHCziShow$o]);
},"sat");
var $$GHCziShow$r=$D(1,function(){
 $r([goog.math.Long.fromBits(1721187872,0)]);
},"sat");
var $$GHCziShow$s=$D(2,function(){
 $r([$$GHCziShow$r,$$GHCziShow$q]);
},"sat");
var $$GHCziShow$t=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"sat");
var $$GHCziShow$u=$D(2,function(){
 $r([$$GHCziShow$t,$$GHCziShow$s]);
},"sat");
var $$GHCziShow$v=$T(function(){
 $$GHCziIntegerziType_mkInteger.J($$GHCziTypes_True,$$GHCziShow$u);
},"lvl13");
var $$GHCziShow$w=$T(function(){
 $$GHCziCString_unpackCStringzh.J("jprinth []");
},"lvl14");
var $$GHCziShow$x=$T(function(){
 $$GHCziErr_error.J($$GHCziShow$w);
},"lvl15");
var $$GHCziShow$y=$T(function(){
 $$GHCziCString_unpackCStringzh.J("jsplith: []");
},"lvl16");
var $$GHCziShow$z=$T(function(){
 $$GHCziErr_error.J($$GHCziShow$y);
},"lvl17");
var $$GHCziShow$A=$F(2,function(fB,gB){
 $M(gB,function(hB){
  switch(hB.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var iB=hB.v[0],jB=hB.v[1];
   $$GHCziIntegerziType_quotRemInteger.C([iB,fB],function(kB){
    var lB=kB[0],mB=kB[1];
    var nB=$t(function(){
     $$GHCziShow$A.J(fB,jB);
    },[fB,jB],"sat");
    var oB=$d(2,[mB,nB],"sat");
    $R(2,[lB,oB],":");
   },[fB,jB]);break;
  }
 },[fB]);
},"at libraries/base/GHC/Show.lhs:504:5");
var $$GHCziShow$B=$F(2,function(pB,qB){
 $$GHCziIntegerziType_gtInteger.C([pB,qB],function(rB){
  switch(rB.g){
  case 1:
   $$GHCziIntegerziType_timesInteger.C([pB,pB],function(sB){
    $$GHCziShow$B.C([sB,qB],function(tB){
     switch(tB.g){
     case 1:
      $A($$GHCziShow$z);break;
     case 2:
      var uB=tB.v[0],vB=tB.v[1];
      $$GHCziIntegerziType_quotRemInteger.C([uB,pB],function(wB){
       var xB=wB[0],yB=wB[1];
       $$GHCziIntegerziType_gtInteger.C([xB,$$GHCziShow_shows25],function(zB){
	switch(zB.g){
	case 1:
	 var AB=$t(function(){
	  $$GHCziShow$A.J(pB,vB);
	 },[pB,vB],"sat");
	 $R(2,[yB,AB],":");break;
	case 2:
	 var BB=$t(function(){
	  $$GHCziShow$A.J(pB,vB);
	 },[pB,vB],"sat");
	 var CB=$d(2,[yB,BB],"sat");
	 $R(2,[xB,CB],":");break;
	}
       },[pB,xB,yB,vB]);
      },[pB,vB]);break;
     }
    },[pB]);
   },[pB,qB]);break;
  case 2:
   $R(2,[qB,$$GHCziTypes_ZMZN],":");break;
  }
 },[pB,qB]);
},"at libraries/base/GHC/Show.lhs:491:5");
var $$GHCziShow$C=$F(2,function(DB,EB){
 var FB=DB.lessThan(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(FB.g){
 case 1:
  var LB=$hs_remIntzh(DB,goog.math.Long.fromBits(10,0));
  var KB=goog.math.Long.fromBits(48,0).add(LB);
  var HB=$hs_chrzh(KB);
  var GB=$d(1,[HB],"sat");
  var IB=$d(2,[GB,EB],"sat");
  var JB=$hs_quotIntzh(DB,goog.math.Long.fromBits(10,0));
  $$GHCziShow$C.J(JB,IB);break;
 case 2:
  var OB=goog.math.Long.fromBits(48,0).add(DB);
  var NB=$hs_chrzh(OB);
  var MB=$d(1,[NB],"sat");
  $R(2,[MB,EB],":");break;
 }
},"at libraries/base/GHC/Show.lhs:534:5");
var $$GHCziShow$D=$F(3,function(PB,QB,RB){
 $M(PB,function(SB){
  switch(SB.toString()){
  case "1":
   var cC=goog.math.Long.fromBits(48,0).add(QB);
   var bC=$hs_chrzh(cC);
   var aC=$d(1,[bC],"sat");
   $R(2,[aC,RB],":");break;
  default:
   var ZB=$hs_remIntzh(QB,goog.math.Long.fromBits(10,0));
   var YB=goog.math.Long.fromBits(48,0).add(ZB);
   var UB=$hs_chrzh(YB);
   var TB=$d(1,[UB],"sat");
   var VB=$d(2,[TB,RB],"sat");
   var XB=$hs_quotIntzh(QB,goog.math.Long.fromBits(10,0));
   var WB=SB.subtract(goog.math.Long.fromBits(1,0));
   $$GHCziShow$D.J(WB,XB,VB);
  }
 },[QB,RB]);
},"at libraries/base/GHC/Show.lhs:545:5");
var $$GHCziShow$E=$F(2,function(dC,eC){
 $M(dC,function(fC){
  switch(fC.g){
  case 1:
   $A(eC);break;
  case 2:
   var gC=fC.v[0],hC=fC.v[1];
   $$GHCziIntegerziType_quotRemInteger.C([gC,$$GHCziShow$m],function(iC){
    var jC=iC[0],kC=iC[1];
    $$GHCziIntegerziType_integerToInt.C([jC],function(oC){
     var lC=$t(function(){
      $$GHCziIntegerziType_integerToInt.C([kC],function(nC){
       var mC=$t(function(){
	$$GHCziShow$E.J(hC,eC);
       },[eC,hC],"sat");
       $$GHCziShow$D.J(goog.math.Long.fromBits(18,0),nC,mC);
      },[eC,hC]);
     },[eC,kC,hC],"sat");
     $$GHCziShow$D.J(goog.math.Long.fromBits(18,0),oC,lC);
    },[eC,kC,hC]);
   },[eC,hC]);break;
  }
 },[eC]);
},"at libraries/base/GHC/Show.lhs:523:5");
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
		  $A($$TextziPrintf$G);break;
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
		    J1.J($$TextziPrintf$F,e2);break;
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
		 $M(C1,function(i2){
		  switch(i2.g){
		  case 4:
		   var j2=i2.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(69,0));
		   var k2=[$$GHCziPrim_realWorldzh,$ff];
		   var l2=k2[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(69,0));
		   var m2=[$$GHCziPrim_realWorldzh,$ff];
		   var n2=m2[1];
		   var p2=$hs_narrow32Intzh(n2);
		   var v3=$hs_int2Wordzh(p2);
		   var o2=$hs_leWordzh(v3,goog.math.Long.fromBits(1114111,0));
		   switch(o2.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(p2);break;
		   case 2:
		    $b(function(){
		     var c3=$hs_chrzh(p2);
		     switch(c3.toString()){
		     case "e":
		      $M(j2,function(d3){
		       var e3=d3.v[0];
		       var f3=$t(function(){
			$M(s1,function(g3){
			 var h3=g3.v[0];
			 var i3=h3.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(i3.g){
			 case 1:
			  $R(2,[g3],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFExponent,f3,e3);
		      },[J1,v1,s1,l2,A1,D1]);break;
		     case "f":
		      $M(j2,function(j3){
		       var k3=j3.v[0];
		       var l3=$t(function(){
			$M(s1,function(m3){
			 var n3=m3.v[0];
			 var o3=n3.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(o3.g){
			 case 1:
			  $R(2,[m3],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFFixed,l3,k3);
		      },[J1,v1,s1,l2,A1,D1]);break;
		     case "g":
		      $M(j2,function(p3){
		       var q3=p3.v[0];
		       var r3=$t(function(){
			$M(s1,function(s3){
			 var t3=s3.v[0];
			 var u3=t3.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(u3.g){
			 case 1:
			  $R(2,[s3],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFGeneric,r3,q3);
		      },[J1,v1,s1,l2,A1,D1]);break;
		     default:
		      $A($$TextziPrintf$l);
		     }
		    },[],function(q2){
		     var r2=$hs_narrow32Intzh(l2);
		     switch(r2.toString()){
		     case "0":
		      $M(q2,function(K2){
		       switch(K2.g){
		       case 1:
			$M(v1,function(L2){
			 switch(L2.g){
			 case 1:
			  var M2=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(N2){
			   $$GHCziBase_zpzp.J(N2,M2);
			  },[M2]);break;
			 case 2:
			  var O2=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(P2){
			   $$GHCziBase_zpzp.J(P2,O2);
			  },[O2]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var Q2=K2.v[0],R2=K2.v[1];
			$M(Q2,function(S2){
			 var T2=S2.v[0];
			 $M(T2,function(U2){
			  switch(U2.toString()){
			  case "-":
			   var a3=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,R2],function(b3){
			    $$GHCziBase_zpzp.J(b3,a3);
			   },[a3]);break;
			  default:
			   $M(v1,function(V2){
			    switch(V2.g){
			    case 1:
			     var W2=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,K2],function(X2){
			      $$GHCziBase_zpzp.J(X2,W2);
			     },[W2]);break;
			    case 2:
			     var Y2=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,K2],function(Z2){
			      $$GHCziBase_zpzp.J(Z2,Y2);
			     },[Y2]);break;
			    }
			   },[J1,A1,D1,K2]);
			  }
			 },[J1,v1,A1,D1,K2,R2]);
			},[J1,v1,A1,D1,K2,R2]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,q2],function(s2){
		       switch(s2.g){
		       case 1:
			$M(v1,function(t2){
			 switch(t2.g){
			 case 1:
			  var u2=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(v2){
			   $$GHCziBase_zpzp.J(v2,u2);
			  },[u2]);break;
			 case 2:
			  var w2=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(x2){
			   $$GHCziBase_zpzp.J(x2,w2);
			  },[w2]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var y2=s2.v[0],z2=s2.v[1];
			$M(y2,function(A2){
			 var B2=A2.v[0];
			 $M(B2,function(C2){
			  switch(C2.toString()){
			  case "-":
			   var I2=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,z2],function(J2){
			    $$GHCziBase_zpzp.J(J2,I2);
			   },[I2]);break;
			  default:
			   $M(v1,function(D2){
			    switch(D2.g){
			    case 1:
			     var E2=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,s2],function(F2){
			      $$GHCziBase_zpzp.J(F2,E2);
			     },[E2]);break;
			    case 2:
			     var G2=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,s2],function(H2){
			      $$GHCziBase_zpzp.J(H2,G2);
			     },[G2]);break;
			    }
			   },[J1,A1,D1,s2]);
			  }
			 },[J1,v1,A1,D1,s2,z2]);
			},[J1,v1,A1,D1,s2,z2]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,l2,A1,D1]);break;
		   }break;
		  case 5:
		   var w3=i2.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(69,0));
		   var x3=[$$GHCziPrim_realWorldzh,$ff];
		   var y3=x3[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(69,0));
		   var z3=[$$GHCziPrim_realWorldzh,$ff];
		   var A3=z3[1];
		   var C3=$hs_narrow32Intzh(A3);
		   var I4=$hs_int2Wordzh(C3);
		   var B3=$hs_leWordzh(I4,goog.math.Long.fromBits(1114111,0));
		   switch(B3.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(C3);break;
		   case 2:
		    $b(function(){
		     var p4=$hs_chrzh(C3);
		     switch(p4.toString()){
		     case "e":
		      $M(w3,function(q4){
		       var r4=q4.v[0];
		       var s4=$t(function(){
			$M(s1,function(t4){
			 var u4=t4.v[0];
			 var v4=u4.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(v4.g){
			 case 1:
			  $R(2,[t4],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFExponent,s4,r4);
		      },[J1,v1,s1,A1,D1,y3]);break;
		     case "f":
		      $M(w3,function(w4){
		       var x4=w4.v[0];
		       var y4=$t(function(){
			$M(s1,function(z4){
			 var A4=z4.v[0];
			 var B4=A4.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(B4.g){
			 case 1:
			  $R(2,[z4],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFFixed,y4,x4);
		      },[J1,v1,s1,A1,D1,y3]);break;
		     case "g":
		      $M(w3,function(C4){
		       var D4=C4.v[0];
		       var E4=$t(function(){
			$M(s1,function(F4){
			 var G4=F4.v[0];
			 var H4=G4.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(H4.g){
			 case 1:
			  $R(2,[F4],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFGeneric,E4,D4);
		      },[J1,v1,s1,A1,D1,y3]);break;
		     default:
		      $A($$TextziPrintf$i);
		     }
		    },[],function(D3){
		     var E3=$hs_narrow32Intzh(y3);
		     switch(E3.toString()){
		     case "0":
		      $M(D3,function(X3){
		       switch(X3.g){
		       case 1:
			$M(v1,function(Y3){
			 switch(Y3.g){
			 case 1:
			  var Z3=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(a4){
			   $$GHCziBase_zpzp.J(a4,Z3);
			  },[Z3]);break;
			 case 2:
			  var b4=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(c4){
			   $$GHCziBase_zpzp.J(c4,b4);
			  },[b4]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var d4=X3.v[0],e4=X3.v[1];
			$M(d4,function(f4){
			 var g4=f4.v[0];
			 $M(g4,function(h4){
			  switch(h4.toString()){
			  case "-":
			   var n4=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,e4],function(o4){
			    $$GHCziBase_zpzp.J(o4,n4);
			   },[n4]);break;
			  default:
			   $M(v1,function(i4){
			    switch(i4.g){
			    case 1:
			     var j4=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,X3],function(k4){
			      $$GHCziBase_zpzp.J(k4,j4);
			     },[j4]);break;
			    case 2:
			     var l4=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,X3],function(m4){
			      $$GHCziBase_zpzp.J(m4,l4);
			     },[l4]);break;
			    }
			   },[J1,A1,D1,X3]);
			  }
			 },[J1,v1,A1,D1,X3,e4]);
			},[J1,v1,A1,D1,X3,e4]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,D3],function(F3){
		       switch(F3.g){
		       case 1:
			$M(v1,function(G3){
			 switch(G3.g){
			 case 1:
			  var H3=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(I3){
			   $$GHCziBase_zpzp.J(I3,H3);
			  },[H3]);break;
			 case 2:
			  var J3=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(K3){
			   $$GHCziBase_zpzp.J(K3,J3);
			  },[J3]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var L3=F3.v[0],M3=F3.v[1];
			$M(L3,function(N3){
			 var O3=N3.v[0];
			 $M(O3,function(P3){
			  switch(P3.toString()){
			  case "-":
			   var V3=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,M3],function(W3){
			    $$GHCziBase_zpzp.J(W3,V3);
			   },[V3]);break;
			  default:
			   $M(v1,function(Q3){
			    switch(Q3.g){
			    case 1:
			     var R3=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,F3],function(S3){
			      $$GHCziBase_zpzp.J(S3,R3);
			     },[R3]);break;
			    case 2:
			     var T3=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,F3],function(U3){
			      $$GHCziBase_zpzp.J(U3,T3);
			     },[T3]);break;
			    }
			   },[J1,A1,D1,F3]);
			  }
			 },[J1,v1,A1,D1,F3,M3]);
			},[J1,v1,A1,D1,F3,M3]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,y3]);break;
		   }break;
		  default:
		   $A($$TextziPrintf$g);
		  }
		 },[J1,v1,s1,A1,D1]);break;
		case "G":
		 $M(C1,function(J4){
		  switch(J4.g){
		  case 4:
		   var K4=J4.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(71,0));
		   var L4=[$$GHCziPrim_realWorldzh,$ff];
		   var M4=L4[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(71,0));
		   var N4=[$$GHCziPrim_realWorldzh,$ff];
		   var O4=N4[1];
		   var Q4=$hs_narrow32Intzh(O4);
		   var W5=$hs_int2Wordzh(Q4);
		   var P4=$hs_leWordzh(W5,goog.math.Long.fromBits(1114111,0));
		   switch(P4.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(Q4);break;
		   case 2:
		    $b(function(){
		     var D5=$hs_chrzh(Q4);
		     switch(D5.toString()){
		     case "e":
		      $M(K4,function(E5){
		       var F5=E5.v[0];
		       var G5=$t(function(){
			$M(s1,function(H5){
			 var I5=H5.v[0];
			 var J5=I5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(J5.g){
			 case 1:
			  $R(2,[H5],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFExponent,G5,F5);
		      },[J1,v1,s1,A1,D1,M4]);break;
		     case "f":
		      $M(K4,function(K5){
		       var L5=K5.v[0];
		       var M5=$t(function(){
			$M(s1,function(N5){
			 var O5=N5.v[0];
			 var P5=O5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(P5.g){
			 case 1:
			  $R(2,[N5],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFFixed,M5,L5);
		      },[J1,v1,s1,A1,D1,M4]);break;
		     case "g":
		      $M(K4,function(Q5){
		       var R5=Q5.v[0];
		       var S5=$t(function(){
			$M(s1,function(T5){
			 var U5=T5.v[0];
			 var V5=U5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(V5.g){
			 case 1:
			  $R(2,[T5],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFGeneric,S5,R5);
		      },[J1,v1,s1,A1,D1,M4]);break;
		     default:
		      $A($$TextziPrintf$l);
		     }
		    },[],function(R4){
		     var S4=$hs_narrow32Intzh(M4);
		     switch(S4.toString()){
		     case "0":
		      $M(R4,function(l5){
		       switch(l5.g){
		       case 1:
			$M(v1,function(m5){
			 switch(m5.g){
			 case 1:
			  var n5=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(o5){
			   $$GHCziBase_zpzp.J(o5,n5);
			  },[n5]);break;
			 case 2:
			  var p5=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(q5){
			   $$GHCziBase_zpzp.J(q5,p5);
			  },[p5]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var r5=l5.v[0],s5=l5.v[1];
			$M(r5,function(t5){
			 var u5=t5.v[0];
			 $M(u5,function(v5){
			  switch(v5.toString()){
			  case "-":
			   var B5=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,s5],function(C5){
			    $$GHCziBase_zpzp.J(C5,B5);
			   },[B5]);break;
			  default:
			   $M(v1,function(w5){
			    switch(w5.g){
			    case 1:
			     var x5=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,l5],function(y5){
			      $$GHCziBase_zpzp.J(y5,x5);
			     },[x5]);break;
			    case 2:
			     var z5=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,l5],function(A5){
			      $$GHCziBase_zpzp.J(A5,z5);
			     },[z5]);break;
			    }
			   },[J1,A1,D1,l5]);
			  }
			 },[J1,v1,A1,D1,l5,s5]);
			},[J1,v1,A1,D1,l5,s5]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,R4],function(T4){
		       switch(T4.g){
		       case 1:
			$M(v1,function(U4){
			 switch(U4.g){
			 case 1:
			  var V4=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(W4){
			   $$GHCziBase_zpzp.J(W4,V4);
			  },[V4]);break;
			 case 2:
			  var X4=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(Y4){
			   $$GHCziBase_zpzp.J(Y4,X4);
			  },[X4]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var Z4=T4.v[0],a5=T4.v[1];
			$M(Z4,function(b5){
			 var c5=b5.v[0];
			 $M(c5,function(d5){
			  switch(d5.toString()){
			  case "-":
			   var j5=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,a5],function(k5){
			    $$GHCziBase_zpzp.J(k5,j5);
			   },[j5]);break;
			  default:
			   $M(v1,function(e5){
			    switch(e5.g){
			    case 1:
			     var f5=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,T4],function(g5){
			      $$GHCziBase_zpzp.J(g5,f5);
			     },[f5]);break;
			    case 2:
			     var h5=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,T4],function(i5){
			      $$GHCziBase_zpzp.J(i5,h5);
			     },[h5]);break;
			    }
			   },[J1,A1,D1,T4]);
			  }
			 },[J1,v1,A1,D1,T4,a5]);
			},[J1,v1,A1,D1,T4,a5]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,M4]);break;
		   }break;
		  case 5:
		   var X5=J4.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(71,0));
		   var Y5=[$$GHCziPrim_realWorldzh,$ff];
		   var Z5=Y5[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(71,0));
		   var a6=[$$GHCziPrim_realWorldzh,$ff];
		   var b6=a6[1];
		   var d6=$hs_narrow32Intzh(b6);
		   var j7=$hs_int2Wordzh(d6);
		   var c6=$hs_leWordzh(j7,goog.math.Long.fromBits(1114111,0));
		   switch(c6.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(d6);break;
		   case 2:
		    $b(function(){
		     var Q6=$hs_chrzh(d6);
		     switch(Q6.toString()){
		     case "e":
		      $M(X5,function(R6){
		       var S6=R6.v[0];
		       var T6=$t(function(){
			$M(s1,function(U6){
			 var V6=U6.v[0];
			 var W6=V6.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(W6.g){
			 case 1:
			  $R(2,[U6],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFExponent,T6,S6);
		      },[J1,v1,s1,A1,D1,Z5]);break;
		     case "f":
		      $M(X5,function(X6){
		       var Y6=X6.v[0];
		       var Z6=$t(function(){
			$M(s1,function(a7){
			 var b7=a7.v[0];
			 var c7=b7.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(c7.g){
			 case 1:
			  $R(2,[a7],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFFixed,Z6,Y6);
		      },[J1,v1,s1,A1,D1,Z5]);break;
		     case "g":
		      $M(X5,function(d7){
		       var e7=d7.v[0];
		       var f7=$t(function(){
			$M(s1,function(g7){
			 var h7=g7.v[0];
			 var i7=h7.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(i7.g){
			 case 1:
			  $R(2,[g7],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFGeneric,f7,e7);
		      },[J1,v1,s1,A1,D1,Z5]);break;
		     default:
		      $A($$TextziPrintf$i);
		     }
		    },[],function(e6){
		     var f6=$hs_narrow32Intzh(Z5);
		     switch(f6.toString()){
		     case "0":
		      $M(e6,function(y6){
		       switch(y6.g){
		       case 1:
			$M(v1,function(z6){
			 switch(z6.g){
			 case 1:
			  var A6=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(B6){
			   $$GHCziBase_zpzp.J(B6,A6);
			  },[A6]);break;
			 case 2:
			  var C6=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(D6){
			   $$GHCziBase_zpzp.J(D6,C6);
			  },[C6]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var E6=y6.v[0],F6=y6.v[1];
			$M(E6,function(G6){
			 var H6=G6.v[0];
			 $M(H6,function(I6){
			  switch(I6.toString()){
			  case "-":
			   var O6=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,F6],function(P6){
			    $$GHCziBase_zpzp.J(P6,O6);
			   },[O6]);break;
			  default:
			   $M(v1,function(J6){
			    switch(J6.g){
			    case 1:
			     var K6=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,y6],function(L6){
			      $$GHCziBase_zpzp.J(L6,K6);
			     },[K6]);break;
			    case 2:
			     var M6=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,y6],function(N6){
			      $$GHCziBase_zpzp.J(N6,M6);
			     },[M6]);break;
			    }
			   },[J1,A1,D1,y6]);
			  }
			 },[J1,v1,A1,D1,y6,F6]);
			},[J1,v1,A1,D1,y6,F6]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,e6],function(g6){
		       switch(g6.g){
		       case 1:
			$M(v1,function(h6){
			 switch(h6.g){
			 case 1:
			  var i6=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(j6){
			   $$GHCziBase_zpzp.J(j6,i6);
			  },[i6]);break;
			 case 2:
			  var k6=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(l6){
			   $$GHCziBase_zpzp.J(l6,k6);
			  },[k6]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var m6=g6.v[0],n6=g6.v[1];
			$M(m6,function(o6){
			 var p6=o6.v[0];
			 $M(p6,function(q6){
			  switch(q6.toString()){
			  case "-":
			   var w6=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,n6],function(x6){
			    $$GHCziBase_zpzp.J(x6,w6);
			   },[w6]);break;
			  default:
			   $M(v1,function(r6){
			    switch(r6.g){
			    case 1:
			     var s6=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,g6],function(t6){
			      $$GHCziBase_zpzp.J(t6,s6);
			     },[s6]);break;
			    case 2:
			     var u6=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,g6],function(v6){
			      $$GHCziBase_zpzp.J(v6,u6);
			     },[u6]);break;
			    }
			   },[J1,A1,D1,g6]);
			  }
			 },[J1,v1,A1,D1,g6,n6]);
			},[J1,v1,A1,D1,g6,n6]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,Z5]);break;
		   }break;
		  default:
		   $A($$TextziPrintf$g);
		  }
		 },[J1,v1,s1,A1,D1]);break;
		case "X":
		 var k7=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var l7=$t(function(){
		  $$TextziPrintf$w.C([$$TextziPrintf$B,s1,C1],function(m7){
		   $$GHCziBase_map.J($$GHCziUnicode_toUpper,m7);
		  },[]);
		 },[C1,s1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,l7],function(n7){
		  $$GHCziBase_zpzp.J(n7,k7);
		 },[k7]);break;
		case "c":
		 var o7=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var p7=$t(function(){
		  $M(C1,function(q7){
		   switch(q7.g){
		   case 1:
		    var r7=q7.v[0];
		    $M(r7,function(s7){
		     var t7=s7.v[0];
		     var v7=$hs_ordzh(t7);
		     var x7=$hs_int2Wordzh(v7);
		     var u7=$hs_leWordzh(x7,goog.math.Long.fromBits(1114111,0));
		     switch(u7.g){
		     case 1:
		      $$TextziPrintf$H.J(v7);break;
		     case 2:
		      var w7=$hs_chrzh(v7);
		      $R(1,[w7],"C#");break;
		     }
		    },[]);break;
		   case 3:
		    var y7=q7.v[1];
		    $$GHCziIntegerziType_integerToInt.C([y7],function(A7){
		     var C7=$hs_int2Wordzh(A7);
		     var z7=$hs_leWordzh(C7,goog.math.Long.fromBits(1114111,0));
		     switch(z7.g){
		     case 1:
		      $$TextziPrintf$H.J(A7);break;
		     case 2:
		      var B7=$hs_chrzh(A7);
		      $R(1,[B7],"C#");break;
		     }
		    },[]);break;
		   default:
		    $A($$TextziPrintf$g);
		   }
		  },[]);
		 },[C1],"sat");
		 var D7=$d(2,[p7,$$GHCziTypes_ZMZN],"sat");
		 J1.C([$$GHCziTypes_ZMZN,D7],function(E7){
		  $$GHCziBase_zpzp.J(E7,o7);
		 },[o7]);break;
		case "d":
		 $$TextziPrintf$u.C([s1,C1],function(F7){
		  var G7=F7[0],H7=F7[1];
		  var I7=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([G7,H7],function(J7){
		   $$GHCziBase_zpzp.J(J7,I7);
		  },[I7]);
		 },[c2,A1,D1]);break;
		case "e":
		 $M(C1,function(K7){
		  switch(K7.g){
		  case 4:
		   var L7=K7.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(101,0));
		   var M7=[$$GHCziPrim_realWorldzh,$ff];
		   var N7=M7[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(101,0));
		   var O7=[$$GHCziPrim_realWorldzh,$ff];
		   var P7=O7[1];
		   var R7=$hs_narrow32Intzh(P7);
		   var X8=$hs_int2Wordzh(R7);
		   var Q7=$hs_leWordzh(X8,goog.math.Long.fromBits(1114111,0));
		   switch(Q7.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(R7);break;
		   case 2:
		    $b(function(){
		     var E8=$hs_chrzh(R7);
		     switch(E8.toString()){
		     case "e":
		      $M(L7,function(F8){
		       var G8=F8.v[0];
		       var H8=$t(function(){
			$M(s1,function(I8){
			 var J8=I8.v[0];
			 var K8=J8.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(K8.g){
			 case 1:
			  $R(2,[I8],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFExponent,H8,G8);
		      },[J1,v1,s1,A1,D1,N7]);break;
		     case "f":
		      $M(L7,function(L8){
		       var M8=L8.v[0];
		       var N8=$t(function(){
			$M(s1,function(O8){
			 var P8=O8.v[0];
			 var Q8=P8.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Q8.g){
			 case 1:
			  $R(2,[O8],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFFixed,N8,M8);
		      },[J1,v1,s1,A1,D1,N7]);break;
		     case "g":
		      $M(L7,function(R8){
		       var S8=R8.v[0];
		       var T8=$t(function(){
			$M(s1,function(U8){
			 var V8=U8.v[0];
			 var W8=V8.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(W8.g){
			 case 1:
			  $R(2,[U8],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFGeneric,T8,S8);
		      },[J1,v1,s1,A1,D1,N7]);break;
		     default:
		      $A($$TextziPrintf$l);
		     }
		    },[],function(S7){
		     var T7=$hs_narrow32Intzh(N7);
		     switch(T7.toString()){
		     case "0":
		      $M(S7,function(m8){
		       switch(m8.g){
		       case 1:
			$M(v1,function(n8){
			 switch(n8.g){
			 case 1:
			  var o8=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(p8){
			   $$GHCziBase_zpzp.J(p8,o8);
			  },[o8]);break;
			 case 2:
			  var q8=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(r8){
			   $$GHCziBase_zpzp.J(r8,q8);
			  },[q8]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var s8=m8.v[0],t8=m8.v[1];
			$M(s8,function(u8){
			 var v8=u8.v[0];
			 $M(v8,function(w8){
			  switch(w8.toString()){
			  case "-":
			   var C8=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,t8],function(D8){
			    $$GHCziBase_zpzp.J(D8,C8);
			   },[C8]);break;
			  default:
			   $M(v1,function(x8){
			    switch(x8.g){
			    case 1:
			     var y8=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,m8],function(z8){
			      $$GHCziBase_zpzp.J(z8,y8);
			     },[y8]);break;
			    case 2:
			     var A8=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,m8],function(B8){
			      $$GHCziBase_zpzp.J(B8,A8);
			     },[A8]);break;
			    }
			   },[J1,A1,D1,m8]);
			  }
			 },[J1,v1,A1,D1,m8,t8]);
			},[J1,v1,A1,D1,m8,t8]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,S7],function(U7){
		       switch(U7.g){
		       case 1:
			$M(v1,function(V7){
			 switch(V7.g){
			 case 1:
			  var W7=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(X7){
			   $$GHCziBase_zpzp.J(X7,W7);
			  },[W7]);break;
			 case 2:
			  var Y7=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(Z7){
			   $$GHCziBase_zpzp.J(Z7,Y7);
			  },[Y7]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var a8=U7.v[0],b8=U7.v[1];
			$M(a8,function(c8){
			 var d8=c8.v[0];
			 $M(d8,function(e8){
			  switch(e8.toString()){
			  case "-":
			   var k8=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,b8],function(l8){
			    $$GHCziBase_zpzp.J(l8,k8);
			   },[k8]);break;
			  default:
			   $M(v1,function(f8){
			    switch(f8.g){
			    case 1:
			     var g8=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,U7],function(h8){
			      $$GHCziBase_zpzp.J(h8,g8);
			     },[g8]);break;
			    case 2:
			     var i8=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,U7],function(j8){
			      $$GHCziBase_zpzp.J(j8,i8);
			     },[i8]);break;
			    }
			   },[J1,A1,D1,U7]);
			  }
			 },[J1,v1,A1,D1,U7,b8]);
			},[J1,v1,A1,D1,U7,b8]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,N7]);break;
		   }break;
		  case 5:
		   var Y8=K7.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(101,0));
		   var Z8=[$$GHCziPrim_realWorldzh,$ff];
		   var a9=Z8[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(101,0));
		   var b9=[$$GHCziPrim_realWorldzh,$ff];
		   var c9=b9[1];
		   var e9=$hs_narrow32Intzh(c9);
		   var ka=$hs_int2Wordzh(e9);
		   var d9=$hs_leWordzh(ka,goog.math.Long.fromBits(1114111,0));
		   switch(d9.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(e9);break;
		   case 2:
		    $b(function(){
		     var R9=$hs_chrzh(e9);
		     switch(R9.toString()){
		     case "e":
		      $M(Y8,function(S9){
		       var T9=S9.v[0];
		       var U9=$t(function(){
			$M(s1,function(V9){
			 var W9=V9.v[0];
			 var X9=W9.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(X9.g){
			 case 1:
			  $R(2,[V9],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFExponent,U9,T9);
		      },[J1,v1,s1,A1,D1,a9]);break;
		     case "f":
		      $M(Y8,function(Y9){
		       var Z9=Y9.v[0];
		       var aa=$t(function(){
			$M(s1,function(ba){
			 var ca=ba.v[0];
			 var da=ca.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(da.g){
			 case 1:
			  $R(2,[ba],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFFixed,aa,Z9);
		      },[J1,v1,s1,A1,D1,a9]);break;
		     case "g":
		      $M(Y8,function(ea){
		       var fa=ea.v[0];
		       var ga=$t(function(){
			$M(s1,function(ha){
			 var ia=ha.v[0];
			 var ja=ia.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(ja.g){
			 case 1:
			  $R(2,[ha],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFGeneric,ga,fa);
		      },[J1,v1,s1,A1,D1,a9]);break;
		     default:
		      $A($$TextziPrintf$i);
		     }
		    },[],function(f9){
		     var g9=$hs_narrow32Intzh(a9);
		     switch(g9.toString()){
		     case "0":
		      $M(f9,function(z9){
		       switch(z9.g){
		       case 1:
			$M(v1,function(A9){
			 switch(A9.g){
			 case 1:
			  var B9=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(C9){
			   $$GHCziBase_zpzp.J(C9,B9);
			  },[B9]);break;
			 case 2:
			  var D9=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(E9){
			   $$GHCziBase_zpzp.J(E9,D9);
			  },[D9]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var F9=z9.v[0],G9=z9.v[1];
			$M(F9,function(H9){
			 var I9=H9.v[0];
			 $M(I9,function(J9){
			  switch(J9.toString()){
			  case "-":
			   var P9=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,G9],function(Q9){
			    $$GHCziBase_zpzp.J(Q9,P9);
			   },[P9]);break;
			  default:
			   $M(v1,function(K9){
			    switch(K9.g){
			    case 1:
			     var L9=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,z9],function(M9){
			      $$GHCziBase_zpzp.J(M9,L9);
			     },[L9]);break;
			    case 2:
			     var N9=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,z9],function(O9){
			      $$GHCziBase_zpzp.J(O9,N9);
			     },[N9]);break;
			    }
			   },[J1,A1,D1,z9]);
			  }
			 },[J1,v1,A1,D1,z9,G9]);
			},[J1,v1,A1,D1,z9,G9]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,f9],function(h9){
		       switch(h9.g){
		       case 1:
			$M(v1,function(i9){
			 switch(i9.g){
			 case 1:
			  var j9=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(k9){
			   $$GHCziBase_zpzp.J(k9,j9);
			  },[j9]);break;
			 case 2:
			  var l9=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(m9){
			   $$GHCziBase_zpzp.J(m9,l9);
			  },[l9]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var n9=h9.v[0],o9=h9.v[1];
			$M(n9,function(p9){
			 var q9=p9.v[0];
			 $M(q9,function(r9){
			  switch(r9.toString()){
			  case "-":
			   var x9=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,o9],function(y9){
			    $$GHCziBase_zpzp.J(y9,x9);
			   },[x9]);break;
			  default:
			   $M(v1,function(s9){
			    switch(s9.g){
			    case 1:
			     var t9=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,h9],function(u9){
			      $$GHCziBase_zpzp.J(u9,t9);
			     },[t9]);break;
			    case 2:
			     var v9=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,h9],function(w9){
			      $$GHCziBase_zpzp.J(w9,v9);
			     },[v9]);break;
			    }
			   },[J1,A1,D1,h9]);
			  }
			 },[J1,v1,A1,D1,h9,o9]);
			},[J1,v1,A1,D1,h9,o9]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,a9]);break;
		   }break;
		  default:
		   $A($$TextziPrintf$g);
		  }
		 },[J1,v1,s1,A1,D1]);break;
		case "f":
		 $M(C1,function(la){
		  switch(la.g){
		  case 4:
		   var ma=la.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(102,0));
		   var na=[$$GHCziPrim_realWorldzh,$ff];
		   var oa=na[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(102,0));
		   var pa=[$$GHCziPrim_realWorldzh,$ff];
		   var qa=pa[1];
		   var sa=$hs_narrow32Intzh(qa);
		   var yb=$hs_int2Wordzh(sa);
		   var ra=$hs_leWordzh(yb,goog.math.Long.fromBits(1114111,0));
		   switch(ra.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(sa);break;
		   case 2:
		    $b(function(){
		     var fb=$hs_chrzh(sa);
		     switch(fb.toString()){
		     case "e":
		      $M(ma,function(gb){
		       var hb=gb.v[0];
		       var ib=$t(function(){
			$M(s1,function(jb){
			 var kb=jb.v[0];
			 var lb=kb.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(lb.g){
			 case 1:
			  $R(2,[jb],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFExponent,ib,hb);
		      },[J1,v1,s1,A1,D1,oa]);break;
		     case "f":
		      $M(ma,function(mb){
		       var nb=mb.v[0];
		       var ob=$t(function(){
			$M(s1,function(pb){
			 var qb=pb.v[0];
			 var rb=qb.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(rb.g){
			 case 1:
			  $R(2,[pb],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFFixed,ob,nb);
		      },[J1,v1,s1,A1,D1,oa]);break;
		     case "g":
		      $M(ma,function(sb){
		       var tb=sb.v[0];
		       var ub=$t(function(){
			$M(s1,function(vb){
			 var wb=vb.v[0];
			 var xb=wb.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(xb.g){
			 case 1:
			  $R(2,[vb],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFGeneric,ub,tb);
		      },[J1,v1,s1,A1,D1,oa]);break;
		     default:
		      $A($$TextziPrintf$l);
		     }
		    },[],function(ta){
		     var ua=$hs_narrow32Intzh(oa);
		     switch(ua.toString()){
		     case "0":
		      $M(ta,function(Na){
		       switch(Na.g){
		       case 1:
			$M(v1,function(Oa){
			 switch(Oa.g){
			 case 1:
			  var Pa=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(Qa){
			   $$GHCziBase_zpzp.J(Qa,Pa);
			  },[Pa]);break;
			 case 2:
			  var Ra=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(Sa){
			   $$GHCziBase_zpzp.J(Sa,Ra);
			  },[Ra]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var Ta=Na.v[0],Ua=Na.v[1];
			$M(Ta,function(Va){
			 var Wa=Va.v[0];
			 $M(Wa,function(Xa){
			  switch(Xa.toString()){
			  case "-":
			   var db=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,Ua],function(eb){
			    $$GHCziBase_zpzp.J(eb,db);
			   },[db]);break;
			  default:
			   $M(v1,function(Ya){
			    switch(Ya.g){
			    case 1:
			     var Za=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,Na],function(ab){
			      $$GHCziBase_zpzp.J(ab,Za);
			     },[Za]);break;
			    case 2:
			     var bb=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,Na],function(cb){
			      $$GHCziBase_zpzp.J(cb,bb);
			     },[bb]);break;
			    }
			   },[J1,A1,D1,Na]);
			  }
			 },[J1,v1,A1,D1,Na,Ua]);
			},[J1,v1,A1,D1,Na,Ua]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,ta],function(va){
		       switch(va.g){
		       case 1:
			$M(v1,function(wa){
			 switch(wa.g){
			 case 1:
			  var xa=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(ya){
			   $$GHCziBase_zpzp.J(ya,xa);
			  },[xa]);break;
			 case 2:
			  var za=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(Aa){
			   $$GHCziBase_zpzp.J(Aa,za);
			  },[za]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var Ba=va.v[0],Ca=va.v[1];
			$M(Ba,function(Da){
			 var Ea=Da.v[0];
			 $M(Ea,function(Fa){
			  switch(Fa.toString()){
			  case "-":
			   var La=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,Ca],function(Ma){
			    $$GHCziBase_zpzp.J(Ma,La);
			   },[La]);break;
			  default:
			   $M(v1,function(Ga){
			    switch(Ga.g){
			    case 1:
			     var Ha=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,va],function(Ia){
			      $$GHCziBase_zpzp.J(Ia,Ha);
			     },[Ha]);break;
			    case 2:
			     var Ja=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,va],function(Ka){
			      $$GHCziBase_zpzp.J(Ka,Ja);
			     },[Ja]);break;
			    }
			   },[J1,A1,D1,va]);
			  }
			 },[J1,v1,A1,D1,va,Ca]);
			},[J1,v1,A1,D1,va,Ca]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,oa]);break;
		   }break;
		  case 5:
		   var zb=la.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(102,0));
		   var Ab=[$$GHCziPrim_realWorldzh,$ff];
		   var Bb=Ab[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(102,0));
		   var Cb=[$$GHCziPrim_realWorldzh,$ff];
		   var Db=Cb[1];
		   var Fb=$hs_narrow32Intzh(Db);
		   var Lc=$hs_int2Wordzh(Fb);
		   var Eb=$hs_leWordzh(Lc,goog.math.Long.fromBits(1114111,0));
		   switch(Eb.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(Fb);break;
		   case 2:
		    $b(function(){
		     var sc=$hs_chrzh(Fb);
		     switch(sc.toString()){
		     case "e":
		      $M(zb,function(tc){
		       var uc=tc.v[0];
		       var vc=$t(function(){
			$M(s1,function(wc){
			 var xc=wc.v[0];
			 var yc=xc.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(yc.g){
			 case 1:
			  $R(2,[wc],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFExponent,vc,uc);
		      },[J1,v1,s1,A1,D1,Bb]);break;
		     case "f":
		      $M(zb,function(zc){
		       var Ac=zc.v[0];
		       var Bc=$t(function(){
			$M(s1,function(Cc){
			 var Dc=Cc.v[0];
			 var Ec=Dc.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Ec.g){
			 case 1:
			  $R(2,[Cc],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFFixed,Bc,Ac);
		      },[J1,v1,s1,A1,D1,Bb]);break;
		     case "g":
		      $M(zb,function(Fc){
		       var Gc=Fc.v[0];
		       var Hc=$t(function(){
			$M(s1,function(Ic){
			 var Jc=Ic.v[0];
			 var Kc=Jc.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Kc.g){
			 case 1:
			  $R(2,[Ic],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFGeneric,Hc,Gc);
		      },[J1,v1,s1,A1,D1,Bb]);break;
		     default:
		      $A($$TextziPrintf$i);
		     }
		    },[],function(Gb){
		     var Hb=$hs_narrow32Intzh(Bb);
		     switch(Hb.toString()){
		     case "0":
		      $M(Gb,function(ac){
		       switch(ac.g){
		       case 1:
			$M(v1,function(bc){
			 switch(bc.g){
			 case 1:
			  var cc=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(dc){
			   $$GHCziBase_zpzp.J(dc,cc);
			  },[cc]);break;
			 case 2:
			  var ec=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(fc){
			   $$GHCziBase_zpzp.J(fc,ec);
			  },[ec]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var gc=ac.v[0],hc=ac.v[1];
			$M(gc,function(ic){
			 var jc=ic.v[0];
			 $M(jc,function(kc){
			  switch(kc.toString()){
			  case "-":
			   var qc=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,hc],function(rc){
			    $$GHCziBase_zpzp.J(rc,qc);
			   },[qc]);break;
			  default:
			   $M(v1,function(lc){
			    switch(lc.g){
			    case 1:
			     var mc=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,ac],function(nc){
			      $$GHCziBase_zpzp.J(nc,mc);
			     },[mc]);break;
			    case 2:
			     var oc=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,ac],function(pc){
			      $$GHCziBase_zpzp.J(pc,oc);
			     },[oc]);break;
			    }
			   },[J1,A1,D1,ac]);
			  }
			 },[J1,v1,A1,D1,ac,hc]);
			},[J1,v1,A1,D1,ac,hc]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,Gb],function(Ib){
		       switch(Ib.g){
		       case 1:
			$M(v1,function(Jb){
			 switch(Jb.g){
			 case 1:
			  var Kb=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(Lb){
			   $$GHCziBase_zpzp.J(Lb,Kb);
			  },[Kb]);break;
			 case 2:
			  var Mb=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(Nb){
			   $$GHCziBase_zpzp.J(Nb,Mb);
			  },[Mb]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var Ob=Ib.v[0],Pb=Ib.v[1];
			$M(Ob,function(Qb){
			 var Rb=Qb.v[0];
			 $M(Rb,function(Sb){
			  switch(Sb.toString()){
			  case "-":
			   var Yb=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,Pb],function(Zb){
			    $$GHCziBase_zpzp.J(Zb,Yb);
			   },[Yb]);break;
			  default:
			   $M(v1,function(Tb){
			    switch(Tb.g){
			    case 1:
			     var Ub=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,Ib],function(Vb){
			      $$GHCziBase_zpzp.J(Vb,Ub);
			     },[Ub]);break;
			    case 2:
			     var Wb=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,Ib],function(Xb){
			      $$GHCziBase_zpzp.J(Xb,Wb);
			     },[Wb]);break;
			    }
			   },[J1,A1,D1,Ib]);
			  }
			 },[J1,v1,A1,D1,Ib,Pb]);
			},[J1,v1,A1,D1,Ib,Pb]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,Bb]);break;
		   }break;
		  default:
		   $A($$TextziPrintf$g);
		  }
		 },[J1,v1,s1,A1,D1]);break;
		case "g":
		 $M(C1,function(Mc){
		  switch(Mc.g){
		  case 4:
		   var Nc=Mc.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(103,0));
		   var Oc=[$$GHCziPrim_realWorldzh,$ff];
		   var Pc=Oc[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(103,0));
		   var Qc=[$$GHCziPrim_realWorldzh,$ff];
		   var Rc=Qc[1];
		   var Tc=$hs_narrow32Intzh(Rc);
		   var Zd=$hs_int2Wordzh(Tc);
		   var Sc=$hs_leWordzh(Zd,goog.math.Long.fromBits(1114111,0));
		   switch(Sc.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(Tc);break;
		   case 2:
		    $b(function(){
		     var Gd=$hs_chrzh(Tc);
		     switch(Gd.toString()){
		     case "e":
		      $M(Nc,function(Hd){
		       var Id=Hd.v[0];
		       var Jd=$t(function(){
			$M(s1,function(Kd){
			 var Ld=Kd.v[0];
			 var Md=Ld.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Md.g){
			 case 1:
			  $R(2,[Kd],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFExponent,Jd,Id);
		      },[J1,v1,s1,A1,D1,Pc]);break;
		     case "f":
		      $M(Nc,function(Nd){
		       var Od=Nd.v[0];
		       var Pd=$t(function(){
			$M(s1,function(Qd){
			 var Rd=Qd.v[0];
			 var Sd=Rd.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Sd.g){
			 case 1:
			  $R(2,[Qd],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFFixed,Pd,Od);
		      },[J1,v1,s1,A1,D1,Pc]);break;
		     case "g":
		      $M(Nc,function(Td){
		       var Ud=Td.v[0];
		       var Vd=$t(function(){
			$M(s1,function(Wd){
			 var Xd=Wd.v[0];
			 var Yd=Xd.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Yd.g){
			 case 1:
			  $R(2,[Wd],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat1.J($$GHCziFloat_FFGeneric,Vd,Ud);
		      },[J1,v1,s1,A1,D1,Pc]);break;
		     default:
		      $A($$TextziPrintf$l);
		     }
		    },[],function(Uc){
		     var Vc=$hs_narrow32Intzh(Pc);
		     switch(Vc.toString()){
		     case "0":
		      $M(Uc,function(od){
		       switch(od.g){
		       case 1:
			$M(v1,function(pd){
			 switch(pd.g){
			 case 1:
			  var qd=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(rd){
			   $$GHCziBase_zpzp.J(rd,qd);
			  },[qd]);break;
			 case 2:
			  var sd=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(td){
			   $$GHCziBase_zpzp.J(td,sd);
			  },[sd]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var ud=od.v[0],vd=od.v[1];
			$M(ud,function(wd){
			 var xd=wd.v[0];
			 $M(xd,function(yd){
			  switch(yd.toString()){
			  case "-":
			   var Ed=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,vd],function(Fd){
			    $$GHCziBase_zpzp.J(Fd,Ed);
			   },[Ed]);break;
			  default:
			   $M(v1,function(zd){
			    switch(zd.g){
			    case 1:
			     var Ad=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,od],function(Bd){
			      $$GHCziBase_zpzp.J(Bd,Ad);
			     },[Ad]);break;
			    case 2:
			     var Cd=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,od],function(Dd){
			      $$GHCziBase_zpzp.J(Dd,Cd);
			     },[Cd]);break;
			    }
			   },[J1,A1,D1,od]);
			  }
			 },[J1,v1,A1,D1,od,vd]);
			},[J1,v1,A1,D1,od,vd]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,Uc],function(Wc){
		       switch(Wc.g){
		       case 1:
			$M(v1,function(Xc){
			 switch(Xc.g){
			 case 1:
			  var Yc=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(Zc){
			   $$GHCziBase_zpzp.J(Zc,Yc);
			  },[Yc]);break;
			 case 2:
			  var ad=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(bd){
			   $$GHCziBase_zpzp.J(bd,ad);
			  },[ad]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var cd=Wc.v[0],dd=Wc.v[1];
			$M(cd,function(ed){
			 var fd=ed.v[0];
			 $M(fd,function(gd){
			  switch(gd.toString()){
			  case "-":
			   var md=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$m,dd],function(nd){
			    $$GHCziBase_zpzp.J(nd,md);
			   },[md]);break;
			  default:
			   $M(v1,function(hd){
			    switch(hd.g){
			    case 1:
			     var id=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,Wc],function(jd){
			      $$GHCziBase_zpzp.J(jd,id);
			     },[id]);break;
			    case 2:
			     var kd=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,Wc],function(ld){
			      $$GHCziBase_zpzp.J(ld,kd);
			     },[kd]);break;
			    }
			   },[J1,A1,D1,Wc]);
			  }
			 },[J1,v1,A1,D1,Wc,dd]);
			},[J1,v1,A1,D1,Wc,dd]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,Pc]);break;
		   }break;
		  case 5:
		   var ae=Mc.v[0];
		   var $ff=u_iswupper(goog.math.Long.fromBits(103,0));
		   var be=[$$GHCziPrim_realWorldzh,$ff];
		   var ce=be[1];
		   var $ff=u_towlower(goog.math.Long.fromBits(103,0));
		   var de=[$$GHCziPrim_realWorldzh,$ff];
		   var ee=de[1];
		   var ge=$hs_narrow32Intzh(ee);
		   var nf=$hs_int2Wordzh(ge);
		   var fe=$hs_leWordzh(nf,goog.math.Long.fromBits(1114111,0));
		   switch(fe.g){
		   case 1:
		    $$GHCziUnicode_toLower1.J(ge);break;
		   case 2:
		    $b(function(){
		     var Te=$hs_chrzh(ge);
		     switch(Te.toString()){
		     case "e":
		      $M(ae,function(Ue){
		       var Ve=Ue.v[0];
		       var We=$t(function(){
			$M(s1,function(Xe){
			 var Ye=Xe.v[0];
			 var Ze=Ye.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Ze.g){
			 case 1:
			  $R(2,[Xe],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFExponent,We,Ve);
		      },[J1,v1,s1,A1,D1,ce]);break;
		     case "f":
		      $M(ae,function(af){
		       var bf=af.v[0];
		       var cf=$t(function(){
			$M(s1,function(df){
			 var ef=df.v[0];
			 var ff=ef.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(ff.g){
			 case 1:
			  $R(2,[df],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFFixed,cf,bf);
		      },[J1,v1,s1,A1,D1,ce]);break;
		     case "g":
		      $M(ae,function(gf){
		       var hf=gf.v[0];
		       var jf=$t(function(){
			$M(s1,function(kf){
			 var lf=kf.v[0];
			 var mf=lf.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(mf.g){
			 case 1:
			  $R(2,[kf],"Just");break;
			 case 2:
			  $R(1,[],"Nothing");break;
			 }
			},[]);
		       },[s1],"sat");
		       $$GHCziFloat_zdwzdsformatRealFloat.J($$GHCziFloat_FFGeneric,jf,hf);
		      },[J1,v1,s1,A1,D1,ce]);break;
		     default:
		      $A($$TextziPrintf$i);
		     }
		    },[],function(he){
		     var ie=$hs_narrow32Intzh(ce);
		     switch(ie.toString()){
		     case "0":
		      $M(he,function(Be){
		       switch(Be.g){
		       case 1:
			$M(v1,function(Ce){
			 switch(Ce.g){
			 case 1:
			  var De=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(Ee){
			   $$GHCziBase_zpzp.J(Ee,De);
			  },[De]);break;
			 case 2:
			  var Fe=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(Ge){
			   $$GHCziBase_zpzp.J(Ge,Fe);
			  },[Fe]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var He=Be.v[0],Ie=Be.v[1];
			$M(He,function(Je){
			 var Ke=Je.v[0];
			 $M(Ke,function(Le){
			  switch(Le.toString()){
			  case "-":
			   var Re=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,Ie],function(Se){
			    $$GHCziBase_zpzp.J(Se,Re);
			   },[Re]);break;
			  default:
			   $M(v1,function(Me){
			    switch(Me.g){
			    case 1:
			     var Ne=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,Be],function(Oe){
			      $$GHCziBase_zpzp.J(Oe,Ne);
			     },[Ne]);break;
			    case 2:
			     var Pe=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,Be],function(Qe){
			      $$GHCziBase_zpzp.J(Qe,Pe);
			     },[Pe]);break;
			    }
			   },[J1,A1,D1,Be]);
			  }
			 },[J1,v1,A1,D1,Be,Ie]);
			},[J1,v1,A1,D1,Be,Ie]);break;
		       }
		      },[J1,v1,A1,D1]);break;
		     default:
		      $$GHCziBase_map.C([$$GHCziUnicode_toUpper,he],function(je){
		       switch(je.g){
		       case 1:
			$M(v1,function(ke){
			 switch(ke.g){
			 case 1:
			  var le=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN],function(me){
			   $$GHCziBase_zpzp.J(me,le);
			  },[le]);break;
			 case 2:
			  var ne=$t(function(){
			   $$TextziPrintf_uprintf.J(A1,D1);
			  },[A1,D1],"sat");
			  J1.C([$$TextziPrintf$F,$$GHCziTypes_ZMZN],function(oe){
			   $$GHCziBase_zpzp.J(oe,ne);
			  },[ne]);break;
			 }
			},[J1,A1,D1]);break;
		       case 2:
			var pe=je.v[0],qe=je.v[1];
			$M(pe,function(re){
			 var se=re.v[0];
			 $M(se,function(te){
			  switch(te.toString()){
			  case "-":
			   var ze=$t(function(){
			    $$TextziPrintf_uprintf.J(A1,D1);
			   },[A1,D1],"sat");
			   J1.C([$$TextziPrintf$k,qe],function(Ae){
			    $$GHCziBase_zpzp.J(Ae,ze);
			   },[ze]);break;
			  default:
			   $M(v1,function(ue){
			    switch(ue.g){
			    case 1:
			     var ve=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$GHCziTypes_ZMZN,je],function(we){
			      $$GHCziBase_zpzp.J(we,ve);
			     },[ve]);break;
			    case 2:
			     var xe=$t(function(){
			      $$TextziPrintf_uprintf.J(A1,D1);
			     },[A1,D1],"sat");
			     J1.C([$$TextziPrintf$F,je],function(ye){
			      $$GHCziBase_zpzp.J(ye,xe);
			     },[xe]);break;
			    }
			   },[J1,A1,D1,je]);
			  }
			 },[J1,v1,A1,D1,je,qe]);
			},[J1,v1,A1,D1,je,qe]);break;
		       }
		      },[J1,v1,A1,D1]);
		     }
		    },[J1,v1,A1,D1,ce]);break;
		   }break;
		  default:
		   $A($$TextziPrintf$g);
		  }
		 },[J1,v1,s1,A1,D1]);break;
		case "i":
		 $$TextziPrintf$u.C([s1,C1],function(of){
		  var pf=of[0],qf=of[1];
		  var rf=$t(function(){
		   $$TextziPrintf_uprintf.J(A1,D1);
		  },[A1,D1],"sat");
		  c2.C([pf,qf],function(sf){
		   $$GHCziBase_zpzp.J(sf,rf);
		  },[rf]);
		 },[c2,A1,D1]);break;
		case "o":
		 var tf=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var uf=$t(function(){
		  $$TextziPrintf$w.J($$TextziPrintf$D,s1,C1);
		 },[C1,s1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,uf],function(vf){
		  $$GHCziBase_zpzp.J(vf,tf);
		 },[tf]);break;
		case "s":
		 var wf=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var xf=$t(function(){
		  $M(C1,function(yf){
		   switch(yf.g){
		   case 2:
		    var zf=yf.v[0];
		    $M(s1,function(Af){
		     var Bf=Af.v[0];
		     var Cf=Bf.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(Cf.g){
		     case 1:
		      $A(zf);break;
		     case 2:
		      var Df=Bf.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(Df.g){
		      case 1:
		       $$GHCziList_takezuunsafezuUInt.J(Bf,zf);break;
		      case 2:
		       $R(1,[],"[]");break;
		      }break;
		     }
		    },[zf]);break;
		   default:
		    $A($$TextziPrintf$g);
		   }
		  },[s1]);
		 },[C1,s1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,xf],function(Ef){
		  $$GHCziBase_zpzp.J(Ef,wf);
		 },[wf]);break;
		case "u":
		 var Ff=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var Gf=$t(function(){
		  $$TextziPrintf$w.J($$TextziPrintf$C,s1,C1);
		 },[C1,s1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,Gf],function(Hf){
		  $$GHCziBase_zpzp.J(Hf,Ff);
		 },[Ff]);break;
		case "x":
		 var If=$t(function(){
		  $$TextziPrintf_uprintf.J(A1,D1);
		 },[A1,D1],"sat");
		 var Jf=$t(function(){
		  $$TextziPrintf$w.J($$TextziPrintf$B,s1,C1);
		 },[C1,s1],"sat");
		 J1.C([$$GHCziTypes_ZMZN,Jf],function(Kf){
		  $$GHCziBase_zpzp.J(Kf,If);
		 },[If]);break;
		default:
		 $$TextziPrintf$I.J(E1);
		}
	       },[J1,v1,c2,E1,C1,s1,A1,D1]);
	      },[u1,r1,t1,v1,C1,s1,A1,D1]);break;
	     }
	    },[z1,u1,r1,t1,v1,s1,A1]);break;
	   }
	  },[x1,u1,r1,t1,v1,s1]);
	 },[]);break;
	}
       },[j1]);
      },[f1,j1],"$wfail");
      $M(j1,function(Lf){
       switch(Lf.g){
       case 1:
	$A(o1);break;
       case 2:
	var Mf=Lf.v[0],Nf=Lf.v[1];
	$M(Mf,function(Of){
	 var Pf=Of.v[0];
	 $M(Pf,function(Qf){
	  switch(Qf.toString()){
	  case "%":
	   var Rf=$t(function(){
	    $$TextziPrintf_uprintf.J(Nf,f1);
	   },[f1,Nf],"sat");
	   $R(2,[$$TextziPrintf$A,Rf],":");break;
	  default:
	   $A(o1);
	  }
	 },[f1,j1,o1,Nf]);
	},[f1,j1,o1,Nf]);break;
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
var $$TextziPrintf$a=$F(1,function(pg){
 $$GHCziCString_unpackAppendCStringzh.C(["Printf.printf: ",pg],function(qg){
  $$GHCziErr_error.J(qg);
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
var $$TextziPrintf$n=$F(2,function(rg,sg){
 $$GHCziIntegerziType_ltInteger.C([sg,rg],function(tg){
  switch(tg.g){
  case 1:
   $$GHCziIntegerziType_eqInteger.C([rg,$$GHCziReal_even1],function(ug){
    switch(ug.g){
    case 1:
     $$GHCziIntegerziType_quotRemInteger.C([sg,rg],function(vg){
      var wg=vg[0],xg=vg[1];
      var yg=$t(function(){
       $$GHCziIntegerziType_integerToInt.C([xg],function(Ag){
	$$GHCziShow_zdwintToDigit.C([Ag],function(zg){
	 $R(1,[zg],"C#");
	},[]);
       },[]);
      },[xg],"sat");
      var Bg=$d(2,[yg,$$GHCziTypes_ZMZN],"sat");
      $$TextziPrintf$n.C([rg,wg],function(Cg){
       $$GHCziBase_zpzp.J(Cg,Bg);
      },[Bg]);
     },[rg]);break;
    case 2:
     $A($$GHCziErr_divZZeroError);break;
    }
   },[sg,rg]);break;
  case 2:
   var Dg=$t(function(){
    $$GHCziIntegerziType_integerToInt.C([sg],function(Fg){
     $$GHCziShow_zdwintToDigit.C([Fg],function(Eg){
      $R(1,[Eg],"C#");
     },[]);
    },[]);
   },[sg],"sat");
   $R(2,[Dg,$$GHCziTypes_ZMZN],":");break;
  }
 },[sg,rg]);
},"at libraries/base/Text/Printf.hs:261:1");
var $$TextziPrintf$o=$F(1,function(Gg){
 $M(Gg,function(Hg){
  switch(Hg.g){
  case 1:
   var Ig=Hg.v[0];
   $$GHCziBase_ord.J(Ig);break;
  case 3:
   var Jg=Hg.v[1];
   $$GHCziNum_zdfNumIntzuzdcfromInteger.J(Jg);break;
  default:
   $A($$TextziPrintf$g);
  }
 },[]);
},"at libraries/base/Text/Printf.hs:252:1");
var $$TextziPrintf$p=$D(1,function(){
 $r(["0"]);
},"lvl10");
var $$TextziPrintf$q=$F(2,function(Kg,Lg){
 $$GHCziList_zdwlen.C([Lg,goog.math.Long.fromBits(0,0)],function(Ug){
  var Tg=Kg.subtract(Ug);
  var Mg=Tg.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Mg.g){
  case 1:
   var Ng=$d(2,[$$TextziPrintf$p,Lg],"lvl26");
   var Og=$f(1,function(Pg){
    var Qg=Pg.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Qg.g){
    case 1:
     var Rg=$t(function(){
      var Sg=Pg.subtract(goog.math.Long.fromBits(1,0));
      Og.J(Sg);
     },[Pg,Og],"sat");
     $R(2,[$$TextziPrintf$p,Rg],":");break;
    case 2:
     $A(Ng);break;
    }
   },[Ng],"xs");
   Og.J(Tg);break;
  case 2:
   $A(Lg);break;
  }
 },[Lg,Kg]);
},"at libraries/base/Text/Printf.hs:249:1");
var $$TextziPrintf$r=$D(2,function(){
 $r([$$TextziPrintf$j,$$GHCziTypes_ZMZN]);
},"lvl11");
var $$TextziPrintf$s=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl12");
var $$TextziPrintf$t=$F(3,function(Vg,Wg,Xg){
 $$GHCziIntegerziType_ltInteger.C([Xg,$$TextziPrintf_zdfPrintfArgInteger1],function(Yg){
  switch(Yg.g){
  case 1:
   var Zg=$t(function(){
    $$GHCziShow_zdfShowIntegerzuzdcshow.C([Xg],function(ah){
     $$TextziPrintf$q.J(Vg,ah);
    },[Vg]);
   },[Xg,Vg],"sat");
   $r([$$GHCziTypes_ZMZN,Zg]);break;
  case 2:
   var bh=$t(function(){
    $$GHCziIntegerziType_negateInteger.C([Xg],function(ch){
     $$GHCziShow_zdwzdcshowsPrec.C([goog.math.Long.fromBits(0,0),ch,$$GHCziTypes_ZMZN],function(dh){
      $$TextziPrintf$q.J(Vg,dh);
     },[Vg]);
    },[Vg]);
   },[Xg,Vg],"sat");
   $r([$$TextziPrintf$r,bh]);break;
  }
 },[Xg,Vg]);
},"at libraries/base/Text/Printf.hs:239:1");
var $$TextziPrintf$u=$F(2,function(eh,fh){
 $M(fh,function(gh){
  switch(gh.g){
  case 1:
   var hh=gh.v[0];
   var ih=$t(function(){
    $M(hh,function(jh){
     var kh=jh.v[0];
     var lh=$hs_ordzh(kh);
     $$GHCziIntegerziType_smallInteger.J(lh);
    },[]);
   },[hh],"sat");
   $$TextziPrintf$t.J(goog.math.Long.fromBits(0,0),$$TextziPrintf_zdfPrintfArgInt1,ih);break;
  case 3:
   var mh=gh.v[1];
   $$GHCziIntegerziType_ltInteger.C([mh,$$TextziPrintf_zdfPrintfArgInteger1],function(nh){
    switch(nh.g){
    case 1:
     var oh=$t(function(){
      $M(eh,function(ph){
       var qh=ph.v[0];
       $$GHCziShow_zdfShowIntegerzuzdcshow.C([mh],function(rh){
	$$TextziPrintf$q.J(qh,rh);
       },[qh]);
      },[mh]);
     },[mh,eh],"sat");
     $r([$$GHCziTypes_ZMZN,oh]);break;
    case 2:
     var sh=$t(function(){
      $M(eh,function(th){
       var uh=th.v[0];
       $$GHCziIntegerziType_negateInteger.C([mh],function(vh){
	$$GHCziShow_zdwzdcshowsPrec.C([goog.math.Long.fromBits(0,0),vh,$$GHCziTypes_ZMZN],function(wh){
	 $$TextziPrintf$q.J(uh,wh);
	},[uh]);
       },[uh]);
      },[mh]);
     },[mh,eh],"sat");
     $r([$$TextziPrintf$r,sh]);break;
    }
   },[mh,eh]);break;
  default:
   $A($$TextziPrintf$g);
  }
 },[eh]);
},"at libraries/base/Text/Printf.hs:239:1");
var $$TextziPrintf$v=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"lvl13");
var $$TextziPrintf$w=$F(3,function(xh,yh,zh){
 $M(zh,function(Ah){
  switch(Ah.g){
  case 1:
   var Bh=Ah.v[0];
   $M(Bh,function(Ch){
    var Dh=Ch.v[0];
    var Fh=$hs_ordzh(Dh);
    $$GHCziIntegerziType_smallInteger.C([Fh],function(Eh){
     $$TextziPrintf$n.J(xh,Eh);
    },[xh]);
   },[xh]);break;
  case 3:
   var Gh=Ah.v[0],Hh=Ah.v[1];
   $M(yh,function(Ih){
    var Jh=Ih.v[0];
    $$GHCziIntegerziType_ltInteger.C([Hh,$$TextziPrintf_zdfPrintfArgInteger1],function(Kh){
     switch(Kh.g){
     case 1:
      $$TextziPrintf$n.C([xh,Hh],function(Lh){
       $$TextziPrintf$q.J(Jh,Lh);
      },[Jh]);break;
     case 2:
      $$GHCziIntegerziType_timesInteger.C([$$TextziPrintf$v,Gh],function(Mh){
       $$GHCziIntegerziType_negateInteger.C([Mh],function(Nh){
	$$GHCziIntegerziType_plusInteger.C([Nh,Hh],function(Oh){
	 $$TextziPrintf$n.C([xh,Oh],function(Ph){
	  $$TextziPrintf$q.J(Jh,Ph);
	 },[Jh]);
	},[xh,Jh]);
       },[xh,Hh,Jh]);
      },[xh,Hh,Jh]);break;
     }
    },[xh,Hh,Jh,Gh]);
   },[xh,Hh,Gh]);break;
  default:
   $A($$TextziPrintf$g);
  }
 },[xh,yh]);
},"at libraries/base/Text/Printf.hs:244:1");
var $$TextziPrintf$x=$F(2,function(Qh,Rh){
 $M(Rh,function(Sh){
  switch(Sh.g){
  case 1:
   $r([Qh,$$GHCziTypes_ZMZN]);break;
  case 2:
   var Th=Sh.v[0],Uh=Sh.v[1];
   $M(Th,function(Vh){
    var Wh=Vh.v[0];
    var Xh=Wh>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Xh.g){
    case 1:
     $r([Qh,Sh]);break;
    case 2:
     var Yh=Wh<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Yh.g){
     case 1:
      $r([Qh,Sh]);break;
     case 2:
      var Zh=$t(function(){
       $M(Qh,function(ai){
	var bi=ai.v[0];
	$$DataziChar_zdwdigitToInt.C([Wh],function(ei){
	 var di=bi.multiply(goog.math.Long.fromBits(10,0));
	 var ci=di.add(ei);
	 $R(1,[ci],"I#");
	},[bi]);
       },[Wh]);
      },[Qh,Wh],"sat");
      $$TextziPrintf$x.J(Zh,Uh);break;
     }break;
    }
   },[Qh,Sh,Uh]);break;
  }
 },[Qh]);
},"at libraries/base/Text/Printf.hs:269:1");
var $$TextziPrintf$y=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"lvl14");
var $$TextziPrintf$z=$F(5,function(fi,gi,hi,ii,ji){
 $M(ii,function(ki){
  switch(ki.g){
  case 1:
   $r([$$TextziPrintf$s,$$TextziPrintf$y,fi,gi,hi,$$GHCziTypes_ZMZN,ji]);break;
  case 2:
   var li=ki.v[0],mi=ki.v[1];
   $M(li,function(ni){
    var oi=ni.v[0];
    $M(oi,function(pi){
     switch(pi.toString()){
     case "*":
      var oj=$t(function(){
       $M(ji,function(pj){
	switch(pj.g){
	case 1:
	 $A($$TextziPrintf$e);break;
	case 2:
	 var qj=pj.v[0],rj=pj.v[1];
	 var sj=$t(function(){
	  $$TextziPrintf$o.J(qj);
	 },[qj],"sat");
	 $R(1,[rj,sj],"(,)");break;
	}
       },[]);
      },[ji],"ds3");
      var tj=$t(function(){
       $M(mi,function(uj){
	switch(uj.g){
	case 1:
	 var vj=$t(function(){
	  $M(oj,function(wj){
	   var xj=wj.v[0];
	   $A(xj);
	  },[]);
	 },[oj],"sat");
	 $R(1,[$$TextziPrintf$y,$$GHCziTypes_ZMZN,vj],"(,,)");break;
	case 2:
	 var yj=uj.v[0],zj=uj.v[1];
	 $M(yj,function(Aj){
	  var Bj=Aj.v[0];
	  $M(Bj,function(Cj){
	   switch(Cj.toString()){
	   case ".":
	    $M(zj,function(Gj){
	     switch(Gj.g){
	     case 1:
	      $$TextziPrintf$x.C([$$TextziPrintf$s,$$GHCziTypes_ZMZN],function(Hj){
	       var Ij=Hj[0],Jj=Hj[1];
	       var Kj=$t(function(){
		$M(oj,function(Lj){
		 var Mj=Lj.v[0];
		 $A(Mj);
		},[]);
	       },[oj],"sat");
	       $R(1,[Ij,Jj,Kj],"(,,)");
	      },[oj]);break;
	     case 2:
	      var Nj=Gj.v[0],Oj=Gj.v[1];
	      $M(Nj,function(Pj){
	       var Qj=Pj.v[0];
	       $M(Qj,function(Rj){
		switch(Rj.toString()){
		case "*":
		 var Yj=$t(function(){
		  $M(oj,function(Zj){
		   var ak=Zj.v[0];
		   $M(ak,function(bk){
		    switch(bk.g){
		    case 1:
		     $A($$TextziPrintf$e);break;
		    case 2:
		     var ck=bk.v[0],dk=bk.v[1];
		     var ek=$t(function(){
		      $$TextziPrintf$o.J(ck);
		     },[ck],"sat");
		     $R(1,[dk,ek],"(,)");break;
		    }
		   },[]);
		  },[]);
		 },[oj],"ds12");
		 var fk=$t(function(){
		  $M(Yj,function(gk){
		   var hk=gk.v[0];
		   $A(hk);
		  },[]);
		 },[Yj],"sat");
		 var ik=$t(function(){
		  $M(Yj,function(jk){
		   var kk=jk.v[1];
		   $A(kk);
		  },[]);
		 },[Yj],"sat");
		 $R(1,[ik,Oj,fk],"(,,)");break;
		default:
		 $$TextziPrintf$x.C([$$TextziPrintf$s,Gj],function(Sj){
		  var Tj=Sj[0],Uj=Sj[1];
		  var Vj=$t(function(){
		   $M(oj,function(Wj){
		    var Xj=Wj.v[0];
		    $A(Xj);
		   },[]);
		  },[oj],"sat");
		  $R(1,[Tj,Uj,Vj],"(,,)");
		 },[oj]);
		}
	       },[oj,Gj,Oj]);
	      },[oj,Gj,Oj]);break;
	     }
	    },[oj]);break;
	   default:
	    var Dj=$t(function(){
	     $M(oj,function(Ej){
	      var Fj=Ej.v[0];
	      $A(Fj);
	     },[]);
	    },[oj],"sat");
	    $R(1,[$$TextziPrintf$y,uj,Dj],"(,,)");
	   }
	  },[oj,uj,zj]);
	 },[oj,uj,zj]);break;
	}
       },[oj]);
      },[oj,mi],"ds4");
      var lk=$t(function(){
       $M(tj,function(mk){
	var nk=mk.v[2];
	$A(nk);
       },[]);
      },[tj],"sat");
      var ok=$t(function(){
       $M(tj,function(pk){
	var qk=pk.v[1];
	$A(qk);
       },[]);
      },[tj],"sat");
      var rk=$t(function(){
       $M(tj,function(sk){
	var tk=sk.v[0];
	$A(tk);
       },[]);
      },[tj],"sat");
      var uk=$t(function(){
       $M(oj,function(vk){
	var wk=vk.v[1];
	$A(wk);
       },[]);
      },[oj],"sat");
      $r([uk,rk,fi,gi,hi,ok,lk]);break;
     case "+":
      $$TextziPrintf$z.J(fi,gi,$$GHCziTypes_True,mi,ji);break;
     case "-":
      $$TextziPrintf$z.J($$GHCziTypes_True,gi,hi,mi,ji);break;
     case ".":
      var xk=$t(function(){
       $M(mi,function(yk){
	switch(yk.g){
	case 1:
	 $$TextziPrintf$x.C([$$TextziPrintf$s,$$GHCziTypes_ZMZN],function(zk){
	  var Ak=zk[0],Bk=zk[1];
	  $R(1,[Ak,Bk,ji],"(,,)");
	 },[ji]);break;
	case 2:
	 var Ck=yk.v[0],Dk=yk.v[1];
	 $M(Ck,function(Ek){
	  var Fk=Ek.v[0];
	  $M(Fk,function(Gk){
	   switch(Gk.toString()){
	   case "*":
	    var Kk=$t(function(){
	     $M(ji,function(Lk){
	      switch(Lk.g){
	      case 1:
	       $A($$TextziPrintf$e);break;
	      case 2:
	       var Mk=Lk.v[0],Nk=Lk.v[1];
	       var Ok=$t(function(){
		$$TextziPrintf$o.J(Mk);
	       },[Mk],"sat");
	       $R(1,[Nk,Ok],"(,)");break;
	      }
	     },[]);
	    },[ji],"ds7");
	    var Pk=$t(function(){
	     $M(Kk,function(Qk){
	      var Rk=Qk.v[0];
	      $A(Rk);
	     },[]);
	    },[Kk],"sat");
	    var Sk=$t(function(){
	     $M(Kk,function(Tk){
	      var Uk=Tk.v[1];
	      $A(Uk);
	     },[]);
	    },[Kk],"sat");
	    $R(1,[Sk,Dk,Pk],"(,,)");break;
	   default:
	    $$TextziPrintf$x.C([$$TextziPrintf$s,yk],function(Hk){
	     var Ik=Hk[0],Jk=Hk[1];
	     $R(1,[Ik,Jk,ji],"(,,)");
	    },[ji]);
	   }
	  },[ji,yk,Dk]);
	 },[ji,yk,Dk]);break;
	}
       },[ji]);
      },[ji,mi],"ds3");
      var Vk=$t(function(){
       $M(xk,function(Wk){
	var Xk=Wk.v[2];
	$A(Xk);
       },[]);
      },[xk],"sat");
      var Yk=$t(function(){
       $M(xk,function(Zk){
	var al=Zk.v[1];
	$A(al);
       },[]);
      },[xk],"sat");
      var bl=$t(function(){
       $M(xk,function(cl){
	var dl=cl.v[0];
	$A(dl);
       },[]);
      },[xk],"sat");
      $r([$$TextziPrintf$s,bl,fi,gi,hi,Yk,Vk]);break;
     case "0":
      $$TextziPrintf$z.J(fi,$$GHCziTypes_True,hi,mi,ji);break;
     default:
      var qi=pi>="0"?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(qi.g){
      case 1:
       $r([$$TextziPrintf$s,$$TextziPrintf$y,fi,gi,hi,ki,ji]);break;
      case 2:
       var ri=pi<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(ri.g){
       case 1:
	$r([$$TextziPrintf$s,$$TextziPrintf$y,fi,gi,hi,ki,ji]);break;
       case 2:
	var si=$t(function(){
	 $$TextziPrintf$x.C([$$TextziPrintf$s,ki],function(ti){
	  var ui=ti[0],vi=ti[1];
	  $R(1,[ui,vi],"(,)");
	 },[]);
	},[ki],"ds3");
	var wi=$t(function(){
	 $M(si,function(xi){
	  var yi=xi.v[1];
	  $M(yi,function(zi){
	   switch(zi.g){
	   case 1:
	    $R(1,[$$TextziPrintf$y,$$GHCziTypes_ZMZN,ji],"(,,)");break;
	   case 2:
	    var Ai=zi.v[0],Bi=zi.v[1];
	    $M(Ai,function(Ci){
	     var Di=Ci.v[0];
	     $M(Di,function(Ei){
	      switch(Ei.toString()){
	      case ".":
	       $M(Bi,function(Fi){
		switch(Fi.g){
		case 1:
		 $$TextziPrintf$x.C([$$TextziPrintf$s,$$GHCziTypes_ZMZN],function(Gi){
		  var Hi=Gi[0],Ii=Gi[1];
		  $R(1,[Hi,Ii,ji],"(,,)");
		 },[ji]);break;
		case 2:
		 var Ji=Fi.v[0],Ki=Fi.v[1];
		 $M(Ji,function(Li){
		  var Mi=Li.v[0];
		  $M(Mi,function(Ni){
		   switch(Ni.toString()){
		   case "*":
		    var Ri=$t(function(){
		     $M(ji,function(Si){
		      switch(Si.g){
		      case 1:
		       $A($$TextziPrintf$e);break;
		      case 2:
		       var Ti=Si.v[0],Ui=Si.v[1];
		       var Vi=$t(function(){
			$$TextziPrintf$o.J(Ti);
		       },[Ti],"sat");
		       $R(1,[Ui,Vi],"(,)");break;
		      }
		     },[]);
		    },[ji],"ds12");
		    var Wi=$t(function(){
		     $M(Ri,function(Xi){
		      var Yi=Xi.v[0];
		      $A(Yi);
		     },[]);
		    },[Ri],"sat");
		    var Zi=$t(function(){
		     $M(Ri,function(aj){
		      var bj=aj.v[1];
		      $A(bj);
		     },[]);
		    },[Ri],"sat");
		    $R(1,[Zi,Ki,Wi],"(,,)");break;
		   default:
		    $$TextziPrintf$x.C([$$TextziPrintf$s,Fi],function(Oi){
		     var Pi=Oi[0],Qi=Oi[1];
		     $R(1,[Pi,Qi,ji],"(,,)");
		    },[ji]);
		   }
		  },[ji,Fi,Ki]);
		 },[ji,Fi,Ki]);break;
		}
	       },[ji]);break;
	      default:
	       $R(1,[$$TextziPrintf$y,zi,ji],"(,,)");
	      }
	     },[ji,zi,Bi]);
	    },[ji,zi,Bi]);break;
	   }
	  },[ji]);
	 },[ji]);
	},[ji,si],"ds4");
	var cj=$t(function(){
	 $M(wi,function(dj){
	  var ej=dj.v[2];
	  $A(ej);
	 },[]);
	},[wi],"sat");
	var fj=$t(function(){
	 $M(wi,function(gj){
	  var hj=gj.v[1];
	  $A(hj);
	 },[]);
	},[wi],"sat");
	var ij=$t(function(){
	 $M(wi,function(jj){
	  var kj=jj.v[0];
	  $A(kj);
	 },[]);
	},[wi],"sat");
	var lj=$t(function(){
	 $M(si,function(mj){
	  var nj=mj.v[0];
	  $A(nj);
	 },[]);
	},[si],"sat");
	$r([lj,ij,fi,gi,hi,fj,cj]);break;
       }break;
      }
     }
    },[fi,gi,hi,ji,ki,mi]);
   },[fi,gi,hi,ji,ki,mi]);break;
  }
 },[fi,gi,hi,ji]);
},"at libraries/base/Text/Printf.hs:273:1");
var $$TextziPrintf$A=$D(1,function(){
 $r(["%"]);
},"lvl15");
var $$TextziPrintf$B=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"lvl16");
var $$TextziPrintf$C=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"lvl17");
var $$TextziPrintf$D=$D(1,function(){
 $r([goog.math.Long.fromBits(8,0)]);
},"lvl18");
var $$TextziPrintf$E=$D(1,function(){
 $r(["+"]);
},"lvl19");
var $$TextziPrintf$F=$D(2,function(){
 $r([$$TextziPrintf$E,$$GHCziTypes_ZMZN]);
},"lvl20");
var $$TextziPrintf$G=$D(1,function(){
 $r([" "]);
},"lvl21");
var $$TextziPrintf$H=$F(1,function(el){
 var fl=$d(1,[el],"sat");
 $$GHCziBase_chr1.J(fl);
},"lvl22");
var $$TextziPrintf$I=$F(1,function(gl){
 var hl=$t(function(){
  var il=$d(2,[gl,$$GHCziTypes_ZMZN],"sat");
  $$GHCziCString_unpackAppendCStringzh.J("bad formatting char ",il);
 },[gl],"sat");
 $$TextziPrintf$a.J(hl);
},"lvl23");
var $$TextziReadziLex_numberToIntegerzuzdsval=$f(3,function(s4,t4,u4){
 $M(u4,function(v4){
  switch(v4.g){
  case 1:
   $A(t4);break;
  case 2:
   var w4=v4.v[0],x4=v4.v[1];
   $M(w4,function(y4){
    var z4=y4.v[0];
    $$GHCziIntegerziType_smallInteger.C([z4],function(A4){
     $$GHCziIntegerziType_timesInteger.C([t4,s4],function(B4){
      $$GHCziIntegerziType_plusInteger.C([B4,A4],function(C4){
       $$TextziReadziLex_numberToIntegerzuzdsval.J(s4,C4,x4);
      },[s4,x4]);
     },[s4,x4,A4]);
    },[t4,s4,x4]);
   },[t4,s4,x4]);break;
  }
 },[t4,s4]);
},[],"at libraries/base/Text/Read/Lex.hs:499:1");
var $$TextziReadziLex_numberToInteger2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_numberToInteger1=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lexChar2=$f(1,function(z9){
 var A9=$t(function(){
  z9.J($$TextziReadziLex$Y3);
 },[z9],"lvl99");
 var B9=$t(function(){
  z9.J($$TextziReadziLex$X3);
 },[z9],"lvl100");
 var C9=$t(function(){
  z9.J($$TextziReadziLex$W3);
 },[z9],"lvl101");
 var D9=$t(function(){
  z9.J($$TextziReadziLex$V3);
 },[z9],"lvl102");
 var E9=$t(function(){
  z9.J($$TextziReadziLex$U3);
 },[z9],"lvl103");
 var F9=$t(function(){
  z9.J($$TextziReadziLex$T3);
 },[z9],"lvl104");
 var G9=$t(function(){
  z9.J($$TextziReadziLex$S3);
 },[z9],"lvl105");
 var H9=$t(function(){
  z9.J($$TextziReadziLex$R3);
 },[z9],"lvl106");
 var I9=$t(function(){
  z9.J($$TextziReadziLex$Q3);
 },[z9],"lvl107");
 var J9=$t(function(){
  z9.J($$TextziReadziLex$P3);
 },[z9],"lvl108");
 var K9=$t(function(){
  var L9=$t(function(){
   var M9=$t(function(){
    z9.J($$TextziReadziLex$F4);
   },[z9],"lvl109");
   var N9=$t(function(){
    z9.J($$TextziReadziLex$E4);
   },[z9],"lvl110");
   var O9=$t(function(){
    z9.J($$TextziReadziLex$D4);
   },[z9],"lvl111");
   var P9=$t(function(){
    z9.J($$TextziReadziLex$C4);
   },[z9],"lvl112");
   var Q9=$t(function(){
    z9.J($$TextziReadziLex$B4);
   },[z9],"lvl113");
   var R9=$t(function(){
    z9.J($$TextziReadziLex$A4);
   },[z9],"lvl114");
   var S9=$t(function(){
    z9.J($$TextziReadziLex$z4);
   },[z9],"lvl115");
   var T9=$t(function(){
    z9.J($$TextziReadziLex$y4);
   },[z9],"lvl116");
   var U9=$t(function(){
    z9.J($$TextziReadziLex$x4);
   },[z9],"lvl117");
   var V9=$t(function(){
    z9.J($$TextziReadziLex$w4);
   },[z9],"lvl118");
   var W9=$t(function(){
    z9.J($$TextziReadziLex$v4);
   },[z9],"lvl119");
   var X9=$t(function(){
    z9.J($$TextziReadziLex$u4);
   },[z9],"lvl120");
   var Y9=$t(function(){
    z9.J($$TextziReadziLex$t4);
   },[z9],"lvl121");
   var Z9=$t(function(){
    z9.J($$TextziReadziLex$s4);
   },[z9],"lvl122");
   var aa=$t(function(){
    z9.J($$TextziReadziLex$r4);
   },[z9],"lvl123");
   var ba=$t(function(){
    z9.J($$TextziReadziLex$q4);
   },[z9],"lvl124");
   var ca=$t(function(){
    z9.J($$TextziReadziLex$p4);
   },[z9],"lvl125");
   var da=$t(function(){
    z9.J($$TextziReadziLex$o4);
   },[z9],"lvl126");
   var ea=$t(function(){
    z9.J($$TextziReadziLex$n4);
   },[z9],"lvl127");
   var fa=$t(function(){
    z9.J($$TextziReadziLex$m4);
   },[z9],"lvl128");
   var ga=$t(function(){
    z9.J($$TextziReadziLex$l4);
   },[z9],"lvl129");
   var ha=$t(function(){
    z9.J($$TextziReadziLex$k4);
   },[z9],"lvl130");
   var ia=$t(function(){
    z9.J($$TextziReadziLex$j4);
   },[z9],"lvl131");
   var ja=$t(function(){
    z9.J($$TextziReadziLex$i4);
   },[z9],"lvl132");
   var ka=$t(function(){
    z9.J($$TextziReadziLex$h4);
   },[z9],"lvl133");
   var la=$t(function(){
    z9.J($$TextziReadziLex$g4);
   },[z9],"lvl134");
   var ma=$t(function(){
    z9.J($$TextziReadziLex$f4);
   },[z9],"lvl135");
   var na=$t(function(){
    z9.J($$TextziReadziLex$e4);
   },[z9],"lvl136");
   var oa=$t(function(){
    z9.J($$TextziReadziLex$d4);
   },[z9],"lvl137");
   var pa=$t(function(){
    z9.J($$TextziReadziLex$c4);
   },[z9],"lvl138");
   var qa=$t(function(){
    z9.J($$TextziReadziLex$b4);
   },[z9],"lvl139");
   var ra=$t(function(){
    z9.J($$TextziReadziLex$a4);
   },[z9],"lvl140");
   var sa=$f(1,function(ta){
    $M(ta,function(ua){
     var va=ua.v[0];
     $M(va,function(wa){
      switch(wa.toString()){
      case "@":
       $A(ra);break;
      case "A":
       $A(qa);break;
      case "B":
       $A(pa);break;
      case "C":
       $A(oa);break;
      case "D":
       $A(na);break;
      case "E":
       $A(ma);break;
      case "F":
       $A(la);break;
      case "G":
       $A(ka);break;
      case "H":
       $A(ja);break;
      case "I":
       $A(ia);break;
      case "J":
       $A(ha);break;
      case "K":
       $A(ga);break;
      case "L":
       $A(fa);break;
      case "M":
       $A(ea);break;
      case "N":
       $A(da);break;
      case "O":
       $A(ca);break;
      case "P":
       $A(ba);break;
      case "Q":
       $A(aa);break;
      case "R":
       $A(Z9);break;
      case "S":
       $A(Y9);break;
      case "T":
       $A(X9);break;
      case "U":
       $A(W9);break;
      case "V":
       $A(V9);break;
      case "W":
       $A(U9);break;
      case "X":
       $A(T9);break;
      case "Y":
       $A(S9);break;
      case "Z":
       $A(R9);break;
      case "[":
       $A(Q9);break;
      case "\\":
       $A(P9);break;
      case "]":
       $A(O9);break;
      case "^":
       $A(N9);break;
      case "_":
       $A(M9);break;
      default:
       $R(3,[],"Fail");
      }
     },[M9,N9,O9,P9,Q9,R9,S9,T9,U9,V9,W9,X9,Y9,Z9,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra]);
    },[M9,N9,O9,P9,Q9,R9,S9,T9,U9,V9,W9,X9,Y9,Z9,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra]);
   },[M9,N9,O9,P9,Q9,R9,S9,T9,U9,V9,W9,X9,Y9,Z9,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra],"a127");
   var xa=$d(1,[sa],"lvl141");
   var ya=$t(function(){
    var za=$f(1,function(Aa){
     var Ba=$d(1,[Aa,$$GHCziTypes_True],"sat");
     z9.J(Ba);
    },[z9],"k1");
    var Ca=$t(function(){
     $$TextziReadziLex$K3.J(za);
    },[za],"sat");
    $$TextziParserCombinatorsziReadP_zlzpzp1.C([$$TextziReadziLex$j1,$$TextziReadziLex$m1,za],function(Da){
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Da,Ca);
    },[Ca]);
   },[z9],"sat");
   var Ea=$f(1,function(Fa){
    $M(Fa,function(Ga){
     var Ha=Ga.v[0];
     $M(Ha,function(Ia){
      switch(Ia.toString()){
      case "^":
       $A(xa);break;
      default:
       $R(3,[],"Fail");
      }
     },[xa]);
    },[xa]);
   },[xa],"sat");
   var Ja=$d(1,[Ea],"sat");
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Ja,ya);
  },[z9],"sat");
  var Ka=$f(1,function(La){
   var Ma=$t(function(){
    $M(La,function(Na){
     var Oa=Na.v[0];
     $$GHCziIntegerziType_smallInteger.J(Oa);
    },[]);
   },[La],"lvl109");
   var Pa=$f(1,function(Qa){
    $$TextziReadziLex_numberToIntegerzuzdsval.C([Ma,$$TextziReadziLex_numberToInteger2,Qa],function(Ra){
     $$GHCziIntegerziType_leInteger.C([Ra,$$TextziReadziLex$M3],function(Sa){
      switch(Sa.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       var Ta=$t(function(){
	$$GHCziIntegerziType_integerToInt.C([Ra],function(Va){
	 var Xa=$hs_int2Wordzh(Va);
	 var Ua=$hs_leWordzh(Xa,goog.math.Long.fromBits(1114111,0));
	 switch(Ua.g){
	 case 1:
	  $$TextziReadziLex$Z3.J(Va);break;
	 case 2:
	  var Wa=$hs_chrzh(Va);
	  $R(1,[Wa],"C#");break;
	 }
	},[]);
       },[Ra],"sat");
       var Ya=$d(1,[Ta,$$GHCziTypes_True],"sat");
       z9.J(Ya);break;
      }
     },[z9,Ra]);
    },[z9]);
   },[z9,Ma],"sat");
   $$TextziReadziLex$d1.J(La,Pa);
  },[z9],"sat");
  $$TextziParserCombinatorsziReadP_zlzpzp1.C([$$TextziReadziLex$e,$$TextziReadziLex$L3,Ka],function(Za){
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Za,L9);
  },[L9]);
 },[z9],"sat");
 var ab=$f(1,function(bb){
  $M(bb,function(cb){
   var db=cb.v[0];
   $M(db,function(eb){
    switch(eb.toString()){
    case "\"":
     $A(J9);break;
    case "'":
     $A(I9);break;
    case "\\":
     $A(H9);break;
    case "a":
     $A(G9);break;
    case "b":
     $A(F9);break;
    case "f":
     $A(E9);break;
    case "n":
     $A(D9);break;
    case "r":
     $A(C9);break;
    case "t":
     $A(B9);break;
    case "v":
     $A(A9);break;
    default:
     $R(3,[],"Fail");
    }
   },[A9,B9,C9,D9,E9,F9,G9,H9,I9,J9]);
  },[A9,B9,C9,D9,E9,F9,G9,H9,I9,J9]);
 },[A9,B9,C9,D9,E9,F9,G9,H9,I9,J9],"sat");
 var fb=$d(1,[ab],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(fb,K9);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_hsLex2=$f(1,function(rb){
 var sb=$t(function(){
  rb.J($$TextziReadziLex_EOF);
 },[rb],"lvl99");
 var tb=$t(function(){
  var ub=$t(function(){
   var vb=$f(2,function(wb,xb){
    var yb=$t(function(){
     var zb=$d(1,[wb],"sat");
     rb.J(zb);
    },[rb,wb],"lvl101");
    $M(xb,function(Ab){
     switch(Ab.g){
     case 1:
      $M(wb,function(Bb){
       var Cb=Bb.v[0];
       $M(Cb,function(Db){
	switch(Db.toString()){
	case "'":
	 $R(3,[],"Fail");break;
	default:
	 var Eb=$f(1,function(Fb){
	  $M(Fb,function(Gb){
	   var Hb=Gb.v[0];
	   $M(Hb,function(Ib){
	    switch(Ib.toString()){
	    case "'":
	     $A(yb);break;
	    default:
	     $R(3,[],"Fail");
	    }
	   },[yb]);
	  },[yb]);
	 },[yb],"sat");
	 $R(1,[Eb],"Get");
	}
       },[yb]);
      },[yb]);break;
     case 2:
      var Jb=$f(1,function(Kb){
       $M(Kb,function(Lb){
	var Mb=Lb.v[0];
	$M(Mb,function(Nb){
	 switch(Nb.toString()){
	 case "'":
	  $A(yb);break;
	 default:
	  $R(3,[],"Fail");
	 }
	},[yb]);
       },[yb]);
      },[yb],"sat");
      $R(1,[Jb],"Get");break;
     }
    },[wb,yb]);
   },[rb],"$wk");
   var Ob=$f(1,function(Pb){
    $M(Pb,function(Qb){
     var Rb=Qb.v[0],Sb=Qb.v[1];
     vb.J(Rb,Sb);
    },[vb]);
   },[vb],"k1");
   $$TextziReadziLex_lexChar2.J(Ob);
  },[rb],"lvl100");
  var Tb=$f(1,function(Ub){
   $M(Ub,function(Vb){
    var Wb=Vb.v[0];
    $M(Wb,function(Xb){
     switch(Xb.toString()){
     case "'":
      $R(3,[],"Fail");break;
     case "\\":
      $A(ub);break;
     default:
      var Yb=$t(function(){
       var Zb=$d(1,[Vb],"sat");
       rb.J(Zb);
      },[rb,Vb],"lvl101");
      var ac=$f(1,function(bc){
       $M(bc,function(cc){
	var dc=cc.v[0];
	$M(dc,function(ec){
	 switch(ec.toString()){
	 case "'":
	  $A(Yb);break;
	 default:
	  $R(3,[],"Fail");
	 }
	},[Yb]);
       },[Yb]);
      },[Yb],"sat");
      $R(1,[ac],"Get");
     }
    },[rb,ub,Vb]);
   },[rb,ub]);
  },[rb,ub],"a127");
  var fc=$d(1,[Tb],"lvl101");
  var gc=$t(function(){
   var hc=$t(function(){
    $$TextziReadziLex$H4.J($$GHCziBase_id,rb);
   },[rb],"lvl102");
   var ic=$t(function(){
    var jc=$t(function(){
     var kc=$t(function(){
      var lc=$t(function(){
       $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$e1,$$TextziReadziLex$M4,rb);
      },[rb],"sat");
      $$TextziParserCombinatorsziReadP_zlzpzp1.C([$$TextziReadziLex$m,$$TextziReadziLex$h,rb],function(mc){
       $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(mc,lc);
      },[lc]);
     },[rb],"sat");
     var nc=$f(1,function(oc){
      $$GHCziList_elem.C([$$GHCziClasses_zdfEqChar,oc,$$TextziReadziLex$M],function(pc){
       switch(pc.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	var qc=$f(1,function(rc){
	 var sc=$d(2,[oc,rc],"s");
	 $$GHCziList_elem.C([$$GHCziClasses_zdfEqZMZNzuzdfEqZMZN,sc,$$TextziReadziLex$L],function(tc){
	  switch(tc.g){
	  case 1:
	   var uc=$d(5,[sc],"sat");
	   rb.J(uc);break;
	  case 2:
	   var vc=$d(3,[sc],"sat");
	   rb.J(vc);break;
	  }
	 },[rb,sc]);
	},[rb,oc],"sat");
	$$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$N,qc);break;
       }
      },[rb,oc]);
     },[rb],"sat");
     var wc=$d(1,[nc],"sat");
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(wc,kc);
    },[rb],"sat");
    var xc=$f(1,function(yc){
     $$GHCziList_elem.C([$$GHCziClasses_zdfEqChar,yc,$$TextziReadziLex$O],function(zc){
      switch(zc.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       var Ac=$d(2,[yc,$$GHCziTypes_ZMZN],"sat");
       var Bc=$d(3,[Ac],"sat");
       rb.J(Bc);break;
      }
     },[rb,yc]);
    },[rb],"sat");
    var Cc=$d(1,[xc],"sat");
    $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Cc,jc);
   },[rb],"sat");
   var Dc=$f(1,function(Ec){
    $M(Ec,function(Fc){
     var Gc=Fc.v[0];
     $M(Gc,function(Hc){
      switch(Hc.toString()){
      case "\"":
       $A(hc);break;
      default:
       $R(3,[],"Fail");
      }
     },[hc]);
    },[hc]);
   },[hc],"sat");
   var Ic=$d(1,[Dc],"sat");
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Ic,ic);
  },[rb],"sat");
  var Jc=$f(1,function(Kc){
   $M(Kc,function(Lc){
    var Mc=Lc.v[0];
    $M(Mc,function(Nc){
     switch(Nc.toString()){
     case "'":
      $A(fc);break;
     default:
      $R(3,[],"Fail");
     }
    },[fc]);
   },[fc]);
  },[fc],"sat");
  var Oc=$d(1,[Jc],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Oc,gc);
 },[rb],"sat");
 var Pc=$f(1,function(Qc){
  $M(Qc,function(Rc){
   switch(Rc.g){
   case 1:
    $A(sb);break;
   case 2:
    $R(3,[],"Fail");break;
   }
  },[sb]);
 },[sb],"sat");
 var Sc=$d(2,[Pc],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Sc,tb);
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_lex1=$f(1,function(Tc){
 var Uc=$t(function(){
  $$TextziReadziLex_hsLex2.J(Tc);
 },[Tc],"lvl99");
 var Vc=$f(1,function(Wc){
  $A(Uc);
 },[Uc],"k1");
 var Xc=$f(1,function(Yc){
  $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(Yc,Vc);
 },[Vc],"sat");
 $R(2,[Xc],"Look");
},[],"in `base:Text.Read.Lex'");
var $$TextziReadziLex_EOF=$D(8,function(){
 $r([]);
},"at libraries/base/Text/Read/Lex.hs:74:5");
var $$TextziReadziLex$c=$D(1,function(){
 $r([goog.math.Long.fromBits(8,0)]);
},"lvl2");
var $$TextziReadziLex$d=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"lvl3");
var $$TextziReadziLex$e=$F(1,function(Mf){
 var Nf=$t(function(){
  Mf.J($$TextziReadziLex$d);
 },[Mf],"lvl99");
 var Of=$t(function(){
  Mf.J($$TextziReadziLex$c);
 },[Mf],"lvl100");
 var Pf=$t(function(){
  Mf.J($$TextziReadziLex$d);
 },[Mf],"lvl101");
 var Qf=$t(function(){
  Mf.J($$TextziReadziLex$c);
 },[Mf],"lvl102");
 var Rf=$f(1,function(Sf){
  $M(Sf,function(Tf){
   var Uf=Tf.v[0];
   $M(Uf,function(Vf){
    switch(Vf.toString()){
    case "O":
     $A(Qf);break;
    case "X":
     $A(Pf);break;
    case "o":
     $A(Of);break;
    case "x":
     $A(Nf);break;
    default:
     $R(3,[],"Fail");
    }
   },[Nf,Of,Pf,Qf]);
  },[Nf,Of,Pf,Qf]);
 },[Nf,Of,Pf,Qf],"sat");
 $R(1,[Rf],"Get");
},"a");
var $$TextziReadziLex$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("_'");
},"lvl4");
var $$TextziReadziLex$g=$F(1,function(Wf){
 $$GHCziUnicode_isAlphaNum.C([Wf],function(Xf){
  switch(Xf.g){
  case 1:
   $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,Wf,$$TextziReadziLex$f);break;
  case 2:
   $R(2,[],"True");break;
  }
 },[Wf]);
},"at libraries/base/Text/Read/Lex.hs:219:5");
var $$TextziReadziLex$h=$F(1,function(Yf){
 var Zf=$f(1,function(ag){
  $$GHCziUnicode_isAlpha.C([ag],function(bg){
   switch(bg.g){
   case 1:
    $M(ag,function(cg){
     var dg=cg.v[0];
     $M(dg,function(eg){
      switch(eg.toString()){
      case "_":
       var fg=$f(1,function(gg){
	var hg=$d(2,[cg,gg],"sat");
	var ig=$d(4,[hg],"sat");
	Yf.J(ig);
       },[cg,Yf],"sat");
       $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$g,fg);break;
      default:
       $R(3,[],"Fail");
      }
     },[cg,Yf]);
    },[Yf]);break;
   case 2:
    var jg=$f(1,function(kg){
     var lg=$d(2,[ag,kg],"sat");
     var mg=$d(4,[lg],"sat");
     Yf.J(mg);
    },[ag,Yf],"sat");
    $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$g,jg);break;
   }
  },[ag,Yf]);
 },[Yf],"sat");
 $R(1,[Zf],"Get");
},"a1");
var $$TextziReadziLex$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NaN");
},"a2");
var $$TextziReadziLex$j=$D(7,function(){
 $r([$$GHCziReal_notANumber]);
},"a3");
var $$TextziReadziLex$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Infinity");
},"a4");
var $$TextziReadziLex$l=$D(7,function(){
 $r([$$GHCziReal_infinity]);
},"a5");
var $$TextziReadziLex$m=$F(1,function(ng){
 var og=$t(function(){
  ng.J($$TextziReadziLex$j);
 },[ng],"lvl99");
 var pg=$t(function(){
  var qg=$t(function(){
   ng.J($$TextziReadziLex$l);
  },[ng],"lvl100");
  var rg=$f(1,function(sg){
   $A(qg);
  },[qg],"sat");
  $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$k,rg);
 },[ng],"sat");
 var tg=$f(1,function(ug){
  $A(og);
 },[og],"sat");
 $$TextziParserCombinatorsziReadP_string1.C([$$TextziReadziLex$i,tg],function(vg){
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(vg,pg);
 },[pg]);
},"a6");
var $$TextziReadziLex$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("..");
},"a7");
var $$TextziReadziLex$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("::");
},"a8");
var $$TextziReadziLex$p=$D(1,function(){
 $r(["="]);
},"a9");
var $$TextziReadziLex$q=$D(2,function(){
 $r([$$TextziReadziLex$p,$$GHCziTypes_ZMZN]);
},"a10");
var $$TextziReadziLex$r=$D(1,function(){
 $r(["\\"]);
},"a11");
var $$TextziReadziLex$s=$D(2,function(){
 $r([$$TextziReadziLex$r,$$GHCziTypes_ZMZN]);
},"a12");
var $$TextziReadziLex$t=$D(1,function(){
 $r(["|"]);
},"a13");
var $$TextziReadziLex$u=$D(2,function(){
 $r([$$TextziReadziLex$t,$$GHCziTypes_ZMZN]);
},"a14");
var $$TextziReadziLex$v=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<-");
},"a15");
var $$TextziReadziLex$w=$T(function(){
 $$GHCziCString_unpackCStringzh.J("->");
},"a16");
var $$TextziReadziLex$x=$D(1,function(){
 $r(["@"]);
},"a17");
var $$TextziReadziLex$y=$D(2,function(){
 $r([$$TextziReadziLex$x,$$GHCziTypes_ZMZN]);
},"a18");
var $$TextziReadziLex$z=$D(1,function(){
 $r(["~"]);
},"a19");
var $$TextziReadziLex$A=$D(2,function(){
 $r([$$TextziReadziLex$z,$$GHCziTypes_ZMZN]);
},"a20");
var $$TextziReadziLex$B=$T(function(){
 $$GHCziCString_unpackCStringzh.J("=>");
},"a21");
var $$TextziReadziLex$C=$D(2,function(){
 $r([$$TextziReadziLex$B,$$GHCziTypes_ZMZN]);
},"a22");
var $$TextziReadziLex$D=$D(2,function(){
 $r([$$TextziReadziLex$A,$$TextziReadziLex$C]);
},"a23");
var $$TextziReadziLex$E=$D(2,function(){
 $r([$$TextziReadziLex$y,$$TextziReadziLex$D]);
},"a24");
var $$TextziReadziLex$F=$D(2,function(){
 $r([$$TextziReadziLex$w,$$TextziReadziLex$E]);
},"a25");
var $$TextziReadziLex$G=$D(2,function(){
 $r([$$TextziReadziLex$v,$$TextziReadziLex$F]);
},"a26");
var $$TextziReadziLex$H=$D(2,function(){
 $r([$$TextziReadziLex$u,$$TextziReadziLex$G]);
},"a27");
var $$TextziReadziLex$I=$D(2,function(){
 $r([$$TextziReadziLex$s,$$TextziReadziLex$H]);
},"a28");
var $$TextziReadziLex$J=$D(2,function(){
 $r([$$TextziReadziLex$q,$$TextziReadziLex$I]);
},"a29");
var $$TextziReadziLex$K=$D(2,function(){
 $r([$$TextziReadziLex$o,$$TextziReadziLex$J]);
},"a30");
var $$TextziReadziLex$L=$D(2,function(){
 $r([$$TextziReadziLex$n,$$TextziReadziLex$K]);
},"at libraries/base/Text/Read/Lex.hs:189:3");
var $$TextziReadziLex$M=$T(function(){
 $$GHCziCString_unpackCStringzh.J("!@#$%&*+./<=>?\\^|:-~");
},"lvl5");
var $$TextziReadziLex$N=$F(1,function(wg){
 $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,wg,$$TextziReadziLex$M);
},"a31");
var $$TextziReadziLex$O=$T(function(){
 $$GHCziCString_unpackCStringzh.J(",;()[]{}`");
},"lvl6");
var $$TextziReadziLex$Y=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl16");
var $$TextziReadziLex$Z=$F(3,function(xg,yg,zg){
 $M(zg,function(Ag){
  switch(Ag.g){
  case 1:
   $$GHCziIntegerziType_ltInteger.C([xg,$$TextziReadziLex_numberToInteger2],function(Bg){
    switch(Bg.g){
    case 1:
     $$GHCziReal_zczuzc2.C([$$TextziReadziLex_numberToInteger1,xg],function(Cg){
      $$GHCziIntegerziType_timesInteger.C([yg,Cg],function(Dg){
       $r([Dg,$$GHCziReal_zdfEnumRatio1]);
      },[]);
     },[yg]);break;
    case 2:
     $$GHCziIntegerziType_negateInteger.C([xg],function(Eg){
      $$GHCziReal_zczuzc2.C([$$TextziReadziLex_numberToInteger1,Eg],function(Fg){
       $$GHCziIntegerziType_absInteger.C([Fg],function(Gg){
	$$GHCziIntegerziType_signumInteger.C([Fg],function(Hg){
	 $$GHCziIntegerziType_timesInteger.C([yg,Hg],function(Ig){
	  $$GHCziReal_zdwreduce.J(Ig,Gg);
	 },[Gg]);
	},[yg,Gg]);
       },[yg,Fg]);
      },[yg]);
     },[yg]);break;
    }
   },[xg,yg]);break;
  case 2:
   var Jg=Ag.v[0],Kg=Ag.v[1];
   $$GHCziIntegerziType_minusInteger.C([xg,$$TextziReadziLex$Y],function(Lg){
    $M(Jg,function(Mg){
     var Ng=Mg.v[0];
     $$GHCziIntegerziType_smallInteger.C([Ng],function(Og){
      $$GHCziIntegerziType_timesInteger.C([yg,$$TextziReadziLex_numberToInteger1],function(Pg){
       $$GHCziIntegerziType_plusInteger.C([Pg,Og],function(Qg){
	$$TextziReadziLex$Z.J(Lg,Qg,Kg);
       },[Lg,Kg]);
      },[Lg,Kg,Og]);
     },[yg,Lg,Kg]);
    },[yg,Lg,Kg]);
   },[yg,Jg,Kg]);break;
  }
 },[xg,yg]);
},"at libraries/base/Text/Read/Lex.hs:513:1");
var $$TextziReadziLex$a1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("valDig: Bad base");
},"lvl17");
var $$TextziReadziLex$b1=$T(function(){
 $$GHCziErr_error.J($$TextziReadziLex$a1);
},"lvl18");
var $$TextziReadziLex$d1=$F(2,function(Rg,Sg){
 var Tg=$f(1,function(Ug){
  $M(Ug,function(Vg){
   switch(Vg.g){
   case 1:
    $R(3,[],"Fail");break;
   case 2:
    Sg.J(Vg);break;
   }
  },[Sg]);
 },[Sg],"lvl99");
 var Wg=$f(1,function(Xg){
  $M(Xg,function(Yg){
   switch(Yg.g){
   case 1:
    $R(3,[],"Fail");break;
   case 2:
    var Zg=Yg.v[0],ah=Yg.v[1];
    $M(Rg,function(bh){
     var ch=bh.v[0];
     var dh=$f(1,function(eh){
      var fh=$t(function(){
       var gh=$f(2,function(hh,ih){
	$M(hh,function(jh){
	 switch(jh.g){
	 case 1:
	  var kh=$t(function(){
	   ih.J($$GHCziTypes_ZMZN);
	  },[ih],"x35");
	  var lh=$f(1,function(mh){
	   mh.J(kh);
	  },[kh],"sat");
	  $A(lh);break;
	 case 2:
	  var nh=jh.v[0],oh=jh.v[1];
	  var ph=$f(1,function(qh){
	   var rh=$t(function(){
	    var sh=$f(1,function(th){
	     var uh=$d(2,[qh,th],"sat");
	     ih.J(uh);
	    },[ih,qh],"sat");
	    gh.J(oh,sh);
	   },[ih,oh,qh,gh],"lvl101");
	   var vh=$f(1,function(wh){
	    var xh=$t(function(){
	     rh.J(wh);
	    },[rh,wh],"lvl102");
	    var yh=$f(1,function(zh){
	     $A(xh);
	    },[xh],"sat");
	    $R(1,[yh],"Get");
	   },[rh],"sat");
	   $A(vh);
	  },[ih,oh,gh],"$j1");
	  $M(ch,function(Ah){
	   switch(Ah.toString()){
	   case "8":
	    $M(nh,function(Bh){
	     var Ch=Bh.v[0];
	     var Dh="0"<=Ch?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Dh.g){
	     case 1:
	      var Eh=$t(function(){
	       ih.J($$GHCziTypes_ZMZN);
	      },[ih],"x35");
	      var Fh=$f(1,function(Gh){
	       Gh.J(Eh);
	      },[Eh],"sat");
	      $A(Fh);break;
	     case 2:
	      var Hh=Ch<="7"?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Hh.g){
	      case 1:
	       var Ih=$t(function(){
		ih.J($$GHCziTypes_ZMZN);
	       },[ih],"x35");
	       var Jh=$f(1,function(Kh){
		Kh.J(Ih);
	       },[Ih],"sat");
	       $A(Jh);break;
	      case 2:
	       var Nh=$hs_ordzh(Ch);
	       var Mh=Nh.subtract(goog.math.Long.fromBits(48,0));
	       var Lh=$d(1,[Mh],"sat");
	       ph.J(Lh);break;
	      }break;
	     }
	    },[ih,oh,gh,ph]);break;
	   case "10":
	    $M(nh,function(Oh){
	     var Ph=Oh.v[0];
	     var Qh="0"<=Ph?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Qh.g){
	     case 1:
	      var Rh=$t(function(){
	       ih.J($$GHCziTypes_ZMZN);
	      },[ih],"x35");
	      var Sh=$f(1,function(Th){
	       Th.J(Rh);
	      },[Rh],"sat");
	      $A(Sh);break;
	     case 2:
	      var Uh=Ph<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Uh.g){
	      case 1:
	       var Vh=$t(function(){
		ih.J($$GHCziTypes_ZMZN);
	       },[ih],"x35");
	       var Wh=$f(1,function(Xh){
		Xh.J(Vh);
	       },[Vh],"sat");
	       $A(Wh);break;
	      case 2:
	       var ai=$hs_ordzh(Ph);
	       var Zh=ai.subtract(goog.math.Long.fromBits(48,0));
	       var Yh=$d(1,[Zh],"sat");
	       ph.J(Yh);break;
	      }break;
	     }
	    },[ih,oh,gh,ph]);break;
	   case "16":
	    $M(nh,function(bi){
	     var ci=bi.v[0];
	     var di="0"<=ci?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(di.g){
	     case 1:
	      var ei="a"<=ci?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(ei.g){
	      case 1:
	       var fi="A"<=ci?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(fi.g){
	       case 1:
		var gi=$t(function(){
		 ih.J($$GHCziTypes_ZMZN);
		},[ih],"x35");
		var hi=$f(1,function(ii){
		 ii.J(gi);
		},[gi],"sat");
		$A(hi);break;
	       case 2:
		var ji=ci<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(ji.g){
		case 1:
		 var ki=$t(function(){
		  ih.J($$GHCziTypes_ZMZN);
		 },[ih],"x35");
		 var li=$f(1,function(mi){
		  mi.J(ki);
		 },[ki],"sat");
		 $A(li);break;
		case 2:
		 var qi=$hs_ordzh(ci);
		 var pi=qi.subtract(goog.math.Long.fromBits(65,0));
		 var oi=pi.add(goog.math.Long.fromBits(10,0));
		 var ni=$d(1,[oi],"sat");
		 ph.J(ni);break;
		}break;
	       }break;
	      case 2:
	       var ri=ci<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(ri.g){
	       case 1:
		var si="A"<=ci?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(si.g){
		case 1:
		 var ti=$t(function(){
		  ih.J($$GHCziTypes_ZMZN);
		 },[ih],"x35");
		 var ui=$f(1,function(vi){
		  vi.J(ti);
		 },[ti],"sat");
		 $A(ui);break;
		case 2:
		 var wi=ci<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(wi.g){
		 case 1:
		  var xi=$t(function(){
		   ih.J($$GHCziTypes_ZMZN);
		  },[ih],"x35");
		  var yi=$f(1,function(zi){
		   zi.J(xi);
		  },[xi],"sat");
		  $A(yi);break;
		 case 2:
		  var Di=$hs_ordzh(ci);
		  var Ci=Di.subtract(goog.math.Long.fromBits(65,0));
		  var Bi=Ci.add(goog.math.Long.fromBits(10,0));
		  var Ai=$d(1,[Bi],"sat");
		  ph.J(Ai);break;
		 }break;
		}break;
	       case 2:
		var Hi=$hs_ordzh(ci);
		var Gi=Hi.subtract(goog.math.Long.fromBits(97,0));
		var Fi=Gi.add(goog.math.Long.fromBits(10,0));
		var Ei=$d(1,[Fi],"sat");
		ph.J(Ei);break;
	       }break;
	      }break;
	     case 2:
	      var Ii=ci<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Ii.g){
	      case 1:
	       var Ji="a"<=ci?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Ji.g){
	       case 1:
		var Ki="A"<=ci?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Ki.g){
		case 1:
		 var Li=$t(function(){
		  ih.J($$GHCziTypes_ZMZN);
		 },[ih],"x35");
		 var Mi=$f(1,function(Ni){
		  Ni.J(Li);
		 },[Li],"sat");
		 $A(Mi);break;
		case 2:
		 var Oi=ci<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Oi.g){
		 case 1:
		  var Pi=$t(function(){
		   ih.J($$GHCziTypes_ZMZN);
		  },[ih],"x35");
		  var Qi=$f(1,function(Ri){
		   Ri.J(Pi);
		  },[Pi],"sat");
		  $A(Qi);break;
		 case 2:
		  var Vi=$hs_ordzh(ci);
		  var Ui=Vi.subtract(goog.math.Long.fromBits(65,0));
		  var Ti=Ui.add(goog.math.Long.fromBits(10,0));
		  var Si=$d(1,[Ti],"sat");
		  ph.J(Si);break;
		 }break;
		}break;
	       case 2:
		var Wi=ci<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Wi.g){
		case 1:
		 var Xi="A"<=ci?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Xi.g){
		 case 1:
		  var Yi=$t(function(){
		   ih.J($$GHCziTypes_ZMZN);
		  },[ih],"x35");
		  var Zi=$f(1,function(aj){
		   aj.J(Yi);
		  },[Yi],"sat");
		  $A(Zi);break;
		 case 2:
		  var bj=ci<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(bj.g){
		  case 1:
		   var cj=$t(function(){
		    ih.J($$GHCziTypes_ZMZN);
		   },[ih],"x35");
		   var dj=$f(1,function(ej){
		    ej.J(cj);
		   },[cj],"sat");
		   $A(dj);break;
		  case 2:
		   var ij=$hs_ordzh(ci);
		   var hj=ij.subtract(goog.math.Long.fromBits(65,0));
		   var gj=hj.add(goog.math.Long.fromBits(10,0));
		   var fj=$d(1,[gj],"sat");
		   ph.J(fj);break;
		  }break;
		 }break;
		case 2:
		 var mj=$hs_ordzh(ci);
		 var lj=mj.subtract(goog.math.Long.fromBits(97,0));
		 var kj=lj.add(goog.math.Long.fromBits(10,0));
		 var jj=$d(1,[kj],"sat");
		 ph.J(jj);break;
		}break;
	       }break;
	      case 2:
	       var pj=$hs_ordzh(ci);
	       var oj=pj.subtract(goog.math.Long.fromBits(48,0));
	       var nj=$d(1,[oj],"sat");
	       ph.J(nj);break;
	      }break;
	     }
	    },[ih,oh,gh,ph]);break;
	   default:
	    $A($$TextziReadziLex$b1);
	   }
	  },[ih,oh,gh,ph,nh]);break;
	 }
	},[ih,gh,ch]);
       },[ch],"scan");
       var qj=$f(1,function(rj){
	$R(2,[eh,rj],":");
       },[eh],"sat");
       gh.J(ah,qj);
      },[ch,ah,eh],"lvl100");
      var sj=$f(1,function(tj){
       var uj=$t(function(){
	fh.J(tj);
       },[fh,tj],"lvl101");
       var vj=$f(1,function(wj){
	$A(uj);
       },[uj],"sat");
       $R(1,[vj],"Get");
      },[fh],"sat");
      $A(sj);
     },[ch,ah],"$j");
     $M(ch,function(xj){
      switch(xj.toString()){
      case "8":
       $M(Zg,function(yj){
	var zj=yj.v[0];
	var Aj="0"<=zj?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Aj.g){
	case 1:
	 $R(3,[],"Fail");break;
	case 2:
	 var Bj=zj<="7"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Bj.g){
	 case 1:
	  $R(3,[],"Fail");break;
	 case 2:
	  var Ej=$hs_ordzh(zj);
	  var Dj=Ej.subtract(goog.math.Long.fromBits(48,0));
	  var Cj=$d(1,[Dj],"sat");
	  dh.J(Cj,Tg);break;
	 }break;
	}
       },[Tg,dh]);break;
      case "10":
       $M(Zg,function(Fj){
	var Gj=Fj.v[0];
	var Hj="0"<=Gj?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Hj.g){
	case 1:
	 $R(3,[],"Fail");break;
	case 2:
	 var Ij=Gj<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Ij.g){
	 case 1:
	  $R(3,[],"Fail");break;
	 case 2:
	  var Lj=$hs_ordzh(Gj);
	  var Kj=Lj.subtract(goog.math.Long.fromBits(48,0));
	  var Jj=$d(1,[Kj],"sat");
	  dh.J(Jj,Tg);break;
	 }break;
	}
       },[Tg,dh]);break;
      case "16":
       $M(Zg,function(Mj){
	var Nj=Mj.v[0];
	var Oj="0"<=Nj?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Oj.g){
	case 1:
	 var Pj="a"<=Nj?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Pj.g){
	 case 1:
	  var Qj="A"<=Nj?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Qj.g){
	  case 1:
	   $R(3,[],"Fail");break;
	  case 2:
	   var Rj=Nj<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Rj.g){
	   case 1:
	    $R(3,[],"Fail");break;
	   case 2:
	    var Vj=$hs_ordzh(Nj);
	    var Uj=Vj.subtract(goog.math.Long.fromBits(65,0));
	    var Tj=Uj.add(goog.math.Long.fromBits(10,0));
	    var Sj=$d(1,[Tj],"sat");
	    dh.J(Sj,Tg);break;
	   }break;
	  }break;
	 case 2:
	  var Wj=Nj<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Wj.g){
	  case 1:
	   var Xj="A"<=Nj?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Xj.g){
	   case 1:
	    $R(3,[],"Fail");break;
	   case 2:
	    var Yj=Nj<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Yj.g){
	    case 1:
	     $R(3,[],"Fail");break;
	    case 2:
	     var ck=$hs_ordzh(Nj);
	     var bk=ck.subtract(goog.math.Long.fromBits(65,0));
	     var ak=bk.add(goog.math.Long.fromBits(10,0));
	     var Zj=$d(1,[ak],"sat");
	     dh.J(Zj,Tg);break;
	    }break;
	   }break;
	  case 2:
	   var gk=$hs_ordzh(Nj);
	   var fk=gk.subtract(goog.math.Long.fromBits(97,0));
	   var ek=fk.add(goog.math.Long.fromBits(10,0));
	   var dk=$d(1,[ek],"sat");
	   dh.J(dk,Tg);break;
	  }break;
	 }break;
	case 2:
	 var hk=Nj<="9"?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(hk.g){
	 case 1:
	  var ik="a"<=Nj?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(ik.g){
	  case 1:
	   var jk="A"<=Nj?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(jk.g){
	   case 1:
	    $R(3,[],"Fail");break;
	   case 2:
	    var kk=Nj<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(kk.g){
	    case 1:
	     $R(3,[],"Fail");break;
	    case 2:
	     var ok=$hs_ordzh(Nj);
	     var nk=ok.subtract(goog.math.Long.fromBits(65,0));
	     var mk=nk.add(goog.math.Long.fromBits(10,0));
	     var lk=$d(1,[mk],"sat");
	     dh.J(lk,Tg);break;
	    }break;
	   }break;
	  case 2:
	   var pk=Nj<="f"?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(pk.g){
	   case 1:
	    var qk="A"<=Nj?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(qk.g){
	    case 1:
	     $R(3,[],"Fail");break;
	    case 2:
	     var rk=Nj<="F"?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(rk.g){
	     case 1:
	      $R(3,[],"Fail");break;
	     case 2:
	      var vk=$hs_ordzh(Nj);
	      var uk=vk.subtract(goog.math.Long.fromBits(65,0));
	      var tk=uk.add(goog.math.Long.fromBits(10,0));
	      var sk=$d(1,[tk],"sat");
	      dh.J(sk,Tg);break;
	     }break;
	    }break;
	   case 2:
	    var zk=$hs_ordzh(Nj);
	    var yk=zk.subtract(goog.math.Long.fromBits(97,0));
	    var xk=yk.add(goog.math.Long.fromBits(10,0));
	    var wk=$d(1,[xk],"sat");
	    dh.J(wk,Tg);break;
	   }break;
	  }break;
	 case 2:
	  var Ck=$hs_ordzh(Nj);
	  var Bk=Ck.subtract(goog.math.Long.fromBits(48,0));
	  var Ak=$d(1,[Bk],"sat");
	  dh.J(Ak,Tg);break;
	 }break;
	}
       },[Tg,dh]);break;
      default:
       $A($$TextziReadziLex$b1);
      }
     },[Tg,dh,Zg]);
    },[Tg,ah,Zg]);break;
   }
  },[Tg,Rg]);
 },[Tg,Rg],"sat");
 $R(2,[Wg],"Look");
},"a32");
var $$TextziReadziLex$e1=$F(1,function(Dk){
 var Ek=$f(1,function(Fk){
  var Gk=$t(function(){
   $$GHCziIntegerziType_smallInteger.J(Fk);
  },[Fk],"lvl99");
  var Hk=$f(1,function(Ik){
   var Jk=$t(function(){
    $$TextziReadziLex_numberToIntegerzuzdsval.J(Gk,$$TextziReadziLex_numberToInteger2,Ik);
   },[Gk,Ik],"sat");
   var Kk=$d(6,[Jk],"sat");
   Dk.J(Kk);
  },[Gk,Dk],"sat");
  var Lk=$d(1,[Fk],"sat");
  $$TextziReadziLex$d1.J(Lk,Hk);
 },[Dk],"$sk");
 var Mk=$t(function(){
  Ek.J(goog.math.Long.fromBits(16,0));
 },[Ek],"lvl99");
 var Nk=$t(function(){
  Ek.J(goog.math.Long.fromBits(8,0));
 },[Ek],"lvl100");
 var Ok=$t(function(){
  Ek.J(goog.math.Long.fromBits(16,0));
 },[Ek],"lvl101");
 var Pk=$t(function(){
  Ek.J(goog.math.Long.fromBits(8,0));
 },[Ek],"lvl102");
 var Qk=$f(1,function(Rk){
  $M(Rk,function(Sk){
   var Tk=Sk.v[0];
   $M(Tk,function(Uk){
    switch(Uk.toString()){
    case "O":
     $A(Pk);break;
    case "X":
     $A(Ok);break;
    case "o":
     $A(Nk);break;
    case "x":
     $A(Mk);break;
    default:
     $R(3,[],"Fail");
    }
   },[Mk,Nk,Ok,Pk]);
  },[Mk,Nk,Ok,Pk]);
 },[Mk,Nk,Ok,Pk],"a127");
 var Vk=$d(1,[Qk],"lvl103");
 var Wk=$f(1,function(Xk){
  $M(Xk,function(Yk){
   var Zk=Yk.v[0];
   $M(Zk,function(al){
    switch(al.toString()){
    case "0":
     $A(Vk);break;
    default:
     $R(3,[],"Fail");
    }
   },[Vk]);
  },[Vk]);
 },[Vk],"sat");
 $R(1,[Wk],"Get");
},"a33");
var $$TextziReadziLex$f1=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"lvl20");
var $$TextziReadziLex$g1=$F(1,function(bl){
 var cl=$t(function(){
  var dl=$f(1,function(el){
   var fl=$d(2,[el],"sat");
   bl.J(fl);
  },[bl],"sat");
  $$TextziReadziLex$d1.J($$TextziReadziLex$f1,dl);
 },[bl],"lvl99");
 var gl=$f(1,function(hl){
  $M(hl,function(il){
   var jl=il.v[0];
   $M(jl,function(kl){
    switch(kl.toString()){
    case ".":
     $A(cl);break;
    default:
     $R(3,[],"Fail");
    }
   },[cl]);
  },[cl]);
 },[cl],"sat");
 $R(1,[gl],"Get");
},"a34");
var $$TextziReadziLex$h1=$D(1,function(){
 $r(["\x01"]);
},"x");
var $$TextziReadziLex$i1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SOH");
},"a35");
var $$TextziReadziLex$j1=$F(1,function(ll){
 var ml=$t(function(){
  ll.J($$TextziReadziLex$h1);
 },[ll],"lvl99");
 var nl=$f(1,function(ol){
  $A(ml);
 },[ml],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$i1,nl);
},"a36");
var $$TextziReadziLex$k1=$D(1,function(){
 $r(["\x0e"]);
},"x1");
var $$TextziReadziLex$l1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SO");
},"a37");
var $$TextziReadziLex$m1=$F(1,function(pl){
 var ql=$t(function(){
  pl.J($$TextziReadziLex$k1);
 },[pl],"lvl99");
 var rl=$f(1,function(sl){
  $A(ql);
 },[ql],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$l1,rl);
},"a38");
var $$TextziReadziLex$n1=$D(1,function(){
 $r(["\x00"]);
},"x2");
var $$TextziReadziLex$o1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NUL");
},"a39");
var $$TextziReadziLex$p1=$F(1,function(tl){
 var ul=$t(function(){
  tl.J($$TextziReadziLex$n1);
 },[tl],"lvl99");
 var vl=$f(1,function(wl){
  $A(ul);
 },[ul],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$o1,vl);
},"a40");
var $$TextziReadziLex$q1=$D(1,function(){
 $r(["\x02"]);
},"x3");
var $$TextziReadziLex$r1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("STX");
},"a41");
var $$TextziReadziLex$s1=$F(1,function(xl){
 var yl=$t(function(){
  xl.J($$TextziReadziLex$q1);
 },[xl],"lvl99");
 var zl=$f(1,function(Al){
  $A(yl);
 },[yl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$r1,zl);
},"a42");
var $$TextziReadziLex$t1=$D(1,function(){
 $r(["\x03"]);
},"x4");
var $$TextziReadziLex$u1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ETX");
},"a43");
var $$TextziReadziLex$v1=$F(1,function(Bl){
 var Cl=$t(function(){
  Bl.J($$TextziReadziLex$t1);
 },[Bl],"lvl99");
 var Dl=$f(1,function(El){
  $A(Cl);
 },[Cl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$u1,Dl);
},"a44");
var $$TextziReadziLex$w1=$D(1,function(){
 $r(["\x04"]);
},"x5");
var $$TextziReadziLex$x1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("EOT");
},"a45");
var $$TextziReadziLex$y1=$F(1,function(Fl){
 var Gl=$t(function(){
  Fl.J($$TextziReadziLex$w1);
 },[Fl],"lvl99");
 var Hl=$f(1,function(Il){
  $A(Gl);
 },[Gl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$x1,Hl);
},"a46");
var $$TextziReadziLex$z1=$D(1,function(){
 $r(["\x05"]);
},"x6");
var $$TextziReadziLex$A1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ENQ");
},"a47");
var $$TextziReadziLex$B1=$F(1,function(Jl){
 var Kl=$t(function(){
  Jl.J($$TextziReadziLex$z1);
 },[Jl],"lvl99");
 var Ll=$f(1,function(Ml){
  $A(Kl);
 },[Kl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$A1,Ll);
},"a48");
var $$TextziReadziLex$C1=$D(1,function(){
 $r(["\x06"]);
},"x7");
var $$TextziReadziLex$D1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ACK");
},"a49");
var $$TextziReadziLex$E1=$F(1,function(Nl){
 var Ol=$t(function(){
  Nl.J($$TextziReadziLex$C1);
 },[Nl],"lvl99");
 var Pl=$f(1,function(Ql){
  $A(Ol);
 },[Ol],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$D1,Pl);
},"a50");
var $$TextziReadziLex$F1=$D(1,function(){
 $r(["\x07"]);
},"x8");
var $$TextziReadziLex$G1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("BEL");
},"a51");
var $$TextziReadziLex$H1=$F(1,function(Rl){
 var Sl=$t(function(){
  Rl.J($$TextziReadziLex$F1);
 },[Rl],"lvl99");
 var Tl=$f(1,function(Ul){
  $A(Sl);
 },[Sl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$G1,Tl);
},"a52");
var $$TextziReadziLex$I1=$D(1,function(){
 $r(["\b"]);
},"x9");
var $$TextziReadziLex$J1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("BS");
},"a53");
var $$TextziReadziLex$K1=$F(1,function(Vl){
 var Wl=$t(function(){
  Vl.J($$TextziReadziLex$I1);
 },[Vl],"lvl99");
 var Xl=$f(1,function(Yl){
  $A(Wl);
 },[Wl],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$J1,Xl);
},"a54");
var $$TextziReadziLex$L1=$D(1,function(){
 $r(["\t"]);
},"x10");
var $$TextziReadziLex$M1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HT");
},"a55");
var $$TextziReadziLex$N1=$F(1,function(Zl){
 var am=$t(function(){
  Zl.J($$TextziReadziLex$L1);
 },[Zl],"lvl99");
 var bm=$f(1,function(cm){
  $A(am);
 },[am],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$M1,bm);
},"a56");
var $$TextziReadziLex$O1=$D(1,function(){
 $r(["\n"]);
},"x11");
var $$TextziReadziLex$P1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("LF");
},"a57");
var $$TextziReadziLex$Q1=$F(1,function(dm){
 var em=$t(function(){
  dm.J($$TextziReadziLex$O1);
 },[dm],"lvl99");
 var fm=$f(1,function(gm){
  $A(em);
 },[em],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$P1,fm);
},"a58");
var $$TextziReadziLex$R1=$D(1,function(){
 $r(["\v"]);
},"x12");
var $$TextziReadziLex$S1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("VT");
},"a59");
var $$TextziReadziLex$T1=$F(1,function(hm){
 var im=$t(function(){
  hm.J($$TextziReadziLex$R1);
 },[hm],"lvl99");
 var jm=$f(1,function(km){
  $A(im);
 },[im],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$S1,jm);
},"a60");
var $$TextziReadziLex$U1=$D(1,function(){
 $r(["\f"]);
},"x13");
var $$TextziReadziLex$V1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("FF");
},"a61");
var $$TextziReadziLex$W1=$F(1,function(lm){
 var mm=$t(function(){
  lm.J($$TextziReadziLex$U1);
 },[lm],"lvl99");
 var nm=$f(1,function(om){
  $A(mm);
 },[mm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$V1,nm);
},"a62");
var $$TextziReadziLex$X1=$D(1,function(){
 $r(["\r"]);
},"x14");
var $$TextziReadziLex$Y1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("CR");
},"a63");
var $$TextziReadziLex$Z1=$F(1,function(pm){
 var qm=$t(function(){
  pm.J($$TextziReadziLex$X1);
 },[pm],"lvl99");
 var rm=$f(1,function(sm){
  $A(qm);
 },[qm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$Y1,rm);
},"a64");
var $$TextziReadziLex$a2=$D(1,function(){
 $r(["\x0f"]);
},"x15");
var $$TextziReadziLex$b2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SI");
},"a65");
var $$TextziReadziLex$c2=$F(1,function(tm){
 var um=$t(function(){
  tm.J($$TextziReadziLex$a2);
 },[tm],"lvl99");
 var vm=$f(1,function(wm){
  $A(um);
 },[um],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$b2,vm);
},"a66");
var $$TextziReadziLex$d2=$D(1,function(){
 $r(["\x10"]);
},"x16");
var $$TextziReadziLex$e2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DLE");
},"a67");
var $$TextziReadziLex$f2=$F(1,function(xm){
 var ym=$t(function(){
  xm.J($$TextziReadziLex$d2);
 },[xm],"lvl99");
 var zm=$f(1,function(Am){
  $A(ym);
 },[ym],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$e2,zm);
},"a68");
var $$TextziReadziLex$g2=$D(1,function(){
 $r(["\x11"]);
},"x17");
var $$TextziReadziLex$h2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC1");
},"a69");
var $$TextziReadziLex$i2=$F(1,function(Bm){
 var Cm=$t(function(){
  Bm.J($$TextziReadziLex$g2);
 },[Bm],"lvl99");
 var Dm=$f(1,function(Em){
  $A(Cm);
 },[Cm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$h2,Dm);
},"a70");
var $$TextziReadziLex$j2=$D(1,function(){
 $r(["\x12"]);
},"x18");
var $$TextziReadziLex$k2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC2");
},"a71");
var $$TextziReadziLex$l2=$F(1,function(Fm){
 var Gm=$t(function(){
  Fm.J($$TextziReadziLex$j2);
 },[Fm],"lvl99");
 var Hm=$f(1,function(Im){
  $A(Gm);
 },[Gm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$k2,Hm);
},"a72");
var $$TextziReadziLex$m2=$D(1,function(){
 $r(["\x13"]);
},"x19");
var $$TextziReadziLex$n2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC3");
},"a73");
var $$TextziReadziLex$o2=$F(1,function(Jm){
 var Km=$t(function(){
  Jm.J($$TextziReadziLex$m2);
 },[Jm],"lvl99");
 var Lm=$f(1,function(Mm){
  $A(Km);
 },[Km],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$n2,Lm);
},"a74");
var $$TextziReadziLex$p2=$D(1,function(){
 $r(["\x14"]);
},"x20");
var $$TextziReadziLex$q2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DC4");
},"a75");
var $$TextziReadziLex$r2=$F(1,function(Nm){
 var Om=$t(function(){
  Nm.J($$TextziReadziLex$p2);
 },[Nm],"lvl99");
 var Pm=$f(1,function(Qm){
  $A(Om);
 },[Om],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$q2,Pm);
},"a76");
var $$TextziReadziLex$s2=$D(1,function(){
 $r(["\x15"]);
},"x21");
var $$TextziReadziLex$t2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("NAK");
},"a77");
var $$TextziReadziLex$u2=$F(1,function(Rm){
 var Sm=$t(function(){
  Rm.J($$TextziReadziLex$s2);
 },[Rm],"lvl99");
 var Tm=$f(1,function(Um){
  $A(Sm);
 },[Sm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$t2,Tm);
},"a78");
var $$TextziReadziLex$v2=$D(1,function(){
 $r(["\x16"]);
},"x22");
var $$TextziReadziLex$w2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SYN");
},"a79");
var $$TextziReadziLex$x2=$F(1,function(Vm){
 var Wm=$t(function(){
  Vm.J($$TextziReadziLex$v2);
 },[Vm],"lvl99");
 var Xm=$f(1,function(Ym){
  $A(Wm);
 },[Wm],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$w2,Xm);
},"a80");
var $$TextziReadziLex$y2=$D(1,function(){
 $r(["\x17"]);
},"x23");
var $$TextziReadziLex$z2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ETB");
},"a81");
var $$TextziReadziLex$A2=$F(1,function(Zm){
 var an=$t(function(){
  Zm.J($$TextziReadziLex$y2);
 },[Zm],"lvl99");
 var bn=$f(1,function(cn){
  $A(an);
 },[an],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$z2,bn);
},"a82");
var $$TextziReadziLex$B2=$D(1,function(){
 $r(["\x18"]);
},"x24");
var $$TextziReadziLex$C2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("CAN");
},"a83");
var $$TextziReadziLex$D2=$F(1,function(dn){
 var en=$t(function(){
  dn.J($$TextziReadziLex$B2);
 },[dn],"lvl99");
 var fn=$f(1,function(gn){
  $A(en);
 },[en],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$C2,fn);
},"a84");
var $$TextziReadziLex$E2=$D(1,function(){
 $r(["\x19"]);
},"x25");
var $$TextziReadziLex$F2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("EM");
},"a85");
var $$TextziReadziLex$G2=$F(1,function(hn){
 var jn=$t(function(){
  hn.J($$TextziReadziLex$E2);
 },[hn],"lvl99");
 var kn=$f(1,function(ln){
  $A(jn);
 },[jn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$F2,kn);
},"a86");
var $$TextziReadziLex$H2=$D(1,function(){
 $r(["\x1a"]);
},"x26");
var $$TextziReadziLex$I2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SUB");
},"a87");
var $$TextziReadziLex$J2=$F(1,function(mn){
 var nn=$t(function(){
  mn.J($$TextziReadziLex$H2);
 },[mn],"lvl99");
 var on=$f(1,function(pn){
  $A(nn);
 },[nn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$I2,on);
},"a88");
var $$TextziReadziLex$K2=$D(1,function(){
 $r(["\x1b"]);
},"x27");
var $$TextziReadziLex$L2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ESC");
},"a89");
var $$TextziReadziLex$M2=$F(1,function(qn){
 var rn=$t(function(){
  qn.J($$TextziReadziLex$K2);
 },[qn],"lvl99");
 var sn=$f(1,function(tn){
  $A(rn);
 },[rn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$L2,sn);
},"a90");
var $$TextziReadziLex$N2=$D(1,function(){
 $r(["\x1c"]);
},"x28");
var $$TextziReadziLex$O2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("FS");
},"a91");
var $$TextziReadziLex$P2=$F(1,function(un){
 var vn=$t(function(){
  un.J($$TextziReadziLex$N2);
 },[un],"lvl99");
 var wn=$f(1,function(xn){
  $A(vn);
 },[vn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$O2,wn);
},"a92");
var $$TextziReadziLex$Q2=$D(1,function(){
 $r(["\x1d"]);
},"x29");
var $$TextziReadziLex$R2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GS");
},"a93");
var $$TextziReadziLex$S2=$F(1,function(yn){
 var zn=$t(function(){
  yn.J($$TextziReadziLex$Q2);
 },[yn],"lvl99");
 var An=$f(1,function(Bn){
  $A(zn);
 },[zn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$R2,An);
},"a94");
var $$TextziReadziLex$T2=$D(1,function(){
 $r(["\x1e"]);
},"x30");
var $$TextziReadziLex$U2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("RS");
},"a95");
var $$TextziReadziLex$V2=$F(1,function(Cn){
 var Dn=$t(function(){
  Cn.J($$TextziReadziLex$T2);
 },[Cn],"lvl99");
 var En=$f(1,function(Fn){
  $A(Dn);
 },[Dn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$U2,En);
},"a96");
var $$TextziReadziLex$W2=$D(1,function(){
 $r(["\x1f"]);
},"x31");
var $$TextziReadziLex$X2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("US");
},"a97");
var $$TextziReadziLex$Y2=$F(1,function(Gn){
 var Hn=$t(function(){
  Gn.J($$TextziReadziLex$W2);
 },[Gn],"lvl99");
 var In=$f(1,function(Jn){
  $A(Hn);
 },[Hn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$X2,In);
},"a98");
var $$TextziReadziLex$Z2=$D(1,function(){
 $r([" "]);
},"x32");
var $$TextziReadziLex$a3=$T(function(){
 $$GHCziCString_unpackCStringzh.J("SP");
},"a99");
var $$TextziReadziLex$b3=$F(1,function(Kn){
 var Ln=$t(function(){
  Kn.J($$TextziReadziLex$Z2);
 },[Kn],"lvl99");
 var Mn=$f(1,function(Nn){
  $A(Ln);
 },[Ln],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$a3,Mn);
},"a100");
var $$TextziReadziLex$c3=$D(1,function(){
 $r(["\x7f"]);
},"x33");
var $$TextziReadziLex$d3=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DEL");
},"a101");
var $$TextziReadziLex$e3=$F(1,function(On){
 var Pn=$t(function(){
  On.J($$TextziReadziLex$c3);
 },[On],"lvl99");
 var Qn=$f(1,function(Rn){
  $A(Pn);
 },[Pn],"sat");
 $$TextziParserCombinatorsziReadP_string1.J($$TextziReadziLex$d3,Qn);
},"a102");
var $$TextziReadziLex$f3=$D(2,function(){
 $r([$$TextziReadziLex$e3,$$GHCziTypes_ZMZN]);
},"lvl21");
var $$TextziReadziLex$g3=$D(2,function(){
 $r([$$TextziReadziLex$b3,$$TextziReadziLex$f3]);
},"lvl22");
var $$TextziReadziLex$h3=$D(2,function(){
 $r([$$TextziReadziLex$Y2,$$TextziReadziLex$g3]);
},"lvl23");
var $$TextziReadziLex$i3=$D(2,function(){
 $r([$$TextziReadziLex$V2,$$TextziReadziLex$h3]);
},"lvl24");
var $$TextziReadziLex$j3=$D(2,function(){
 $r([$$TextziReadziLex$S2,$$TextziReadziLex$i3]);
},"lvl25");
var $$TextziReadziLex$k3=$D(2,function(){
 $r([$$TextziReadziLex$P2,$$TextziReadziLex$j3]);
},"lvl26");
var $$TextziReadziLex$l3=$D(2,function(){
 $r([$$TextziReadziLex$M2,$$TextziReadziLex$k3]);
},"lvl27");
var $$TextziReadziLex$m3=$D(2,function(){
 $r([$$TextziReadziLex$J2,$$TextziReadziLex$l3]);
},"lvl28");
var $$TextziReadziLex$n3=$D(2,function(){
 $r([$$TextziReadziLex$G2,$$TextziReadziLex$m3]);
},"lvl29");
var $$TextziReadziLex$o3=$D(2,function(){
 $r([$$TextziReadziLex$D2,$$TextziReadziLex$n3]);
},"lvl30");
var $$TextziReadziLex$p3=$D(2,function(){
 $r([$$TextziReadziLex$A2,$$TextziReadziLex$o3]);
},"lvl31");
var $$TextziReadziLex$q3=$D(2,function(){
 $r([$$TextziReadziLex$x2,$$TextziReadziLex$p3]);
},"lvl32");
var $$TextziReadziLex$r3=$D(2,function(){
 $r([$$TextziReadziLex$u2,$$TextziReadziLex$q3]);
},"lvl33");
var $$TextziReadziLex$s3=$D(2,function(){
 $r([$$TextziReadziLex$r2,$$TextziReadziLex$r3]);
},"lvl34");
var $$TextziReadziLex$t3=$D(2,function(){
 $r([$$TextziReadziLex$o2,$$TextziReadziLex$s3]);
},"lvl35");
var $$TextziReadziLex$u3=$D(2,function(){
 $r([$$TextziReadziLex$l2,$$TextziReadziLex$t3]);
},"lvl36");
var $$TextziReadziLex$v3=$D(2,function(){
 $r([$$TextziReadziLex$i2,$$TextziReadziLex$u3]);
},"lvl37");
var $$TextziReadziLex$w3=$D(2,function(){
 $r([$$TextziReadziLex$f2,$$TextziReadziLex$v3]);
},"lvl38");
var $$TextziReadziLex$x3=$D(2,function(){
 $r([$$TextziReadziLex$c2,$$TextziReadziLex$w3]);
},"lvl39");
var $$TextziReadziLex$y3=$D(2,function(){
 $r([$$TextziReadziLex$Z1,$$TextziReadziLex$x3]);
},"lvl40");
var $$TextziReadziLex$z3=$D(2,function(){
 $r([$$TextziReadziLex$W1,$$TextziReadziLex$y3]);
},"lvl41");
var $$TextziReadziLex$A3=$D(2,function(){
 $r([$$TextziReadziLex$T1,$$TextziReadziLex$z3]);
},"lvl42");
var $$TextziReadziLex$B3=$D(2,function(){
 $r([$$TextziReadziLex$Q1,$$TextziReadziLex$A3]);
},"lvl43");
var $$TextziReadziLex$C3=$D(2,function(){
 $r([$$TextziReadziLex$N1,$$TextziReadziLex$B3]);
},"lvl44");
var $$TextziReadziLex$D3=$D(2,function(){
 $r([$$TextziReadziLex$K1,$$TextziReadziLex$C3]);
},"lvl45");
var $$TextziReadziLex$E3=$D(2,function(){
 $r([$$TextziReadziLex$H1,$$TextziReadziLex$D3]);
},"lvl46");
var $$TextziReadziLex$F3=$D(2,function(){
 $r([$$TextziReadziLex$E1,$$TextziReadziLex$E3]);
},"lvl47");
var $$TextziReadziLex$G3=$D(2,function(){
 $r([$$TextziReadziLex$B1,$$TextziReadziLex$F3]);
},"lvl48");
var $$TextziReadziLex$H3=$D(2,function(){
 $r([$$TextziReadziLex$y1,$$TextziReadziLex$G3]);
},"lvl49");
var $$TextziReadziLex$I3=$D(2,function(){
 $r([$$TextziReadziLex$v1,$$TextziReadziLex$H3]);
},"lvl50");
var $$TextziReadziLex$J3=$D(2,function(){
 $r([$$TextziReadziLex$s1,$$TextziReadziLex$I3]);
},"lvl51");
var $$TextziReadziLex$K3=$T(function(){
 $$TextziParserCombinatorsziReadP_choicezuzdschoice.J($$TextziReadziLex$p1,$$TextziReadziLex$J3);
},"ds2");
var $$TextziReadziLex$L3=$F(1,function(Sn){
 Sn.J($$TextziReadziLex$f1);
},"a103");
var $$TextziReadziLex$M3=$T(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(1114111,0));
},"lvl52");
var $$TextziReadziLex$N3=$D(1,function(){
 $r(["\""]);
},"lvl53");
var $$TextziReadziLex$O3=$D(1,function(){
 $r(["'"]);
},"lvl54");
var $$TextziReadziLex$P3=$D(1,function(){
 $r([$$TextziReadziLex$N3,$$GHCziTypes_True]);
},"lvl55");
var $$TextziReadziLex$Q3=$D(1,function(){
 $r([$$TextziReadziLex$O3,$$GHCziTypes_True]);
},"lvl56");
var $$TextziReadziLex$R3=$D(1,function(){
 $r([$$TextziReadziLex$r,$$GHCziTypes_True]);
},"lvl57");
var $$TextziReadziLex$S3=$D(1,function(){
 $r([$$TextziReadziLex$F1,$$GHCziTypes_True]);
},"lvl58");
var $$TextziReadziLex$T3=$D(1,function(){
 $r([$$TextziReadziLex$I1,$$GHCziTypes_True]);
},"lvl59");
var $$TextziReadziLex$U3=$D(1,function(){
 $r([$$TextziReadziLex$U1,$$GHCziTypes_True]);
},"lvl60");
var $$TextziReadziLex$V3=$D(1,function(){
 $r([$$TextziReadziLex$O1,$$GHCziTypes_True]);
},"lvl61");
var $$TextziReadziLex$W3=$D(1,function(){
 $r([$$TextziReadziLex$X1,$$GHCziTypes_True]);
},"lvl62");
var $$TextziReadziLex$X3=$D(1,function(){
 $r([$$TextziReadziLex$L1,$$GHCziTypes_True]);
},"lvl63");
var $$TextziReadziLex$Y3=$D(1,function(){
 $r([$$TextziReadziLex$R1,$$GHCziTypes_True]);
},"lvl64");
var $$TextziReadziLex$Z3=$F(1,function(Tn){
 var Un=$d(1,[Tn],"sat");
 $$GHCziBase_chr1.J(Un);
},"lvl65");
var $$TextziReadziLex$a4=$D(1,function(){
 $r([$$TextziReadziLex$n1,$$GHCziTypes_True]);
},"lvl66");
var $$TextziReadziLex$b4=$D(1,function(){
 $r([$$TextziReadziLex$h1,$$GHCziTypes_True]);
},"lvl67");
var $$TextziReadziLex$c4=$D(1,function(){
 $r([$$TextziReadziLex$q1,$$GHCziTypes_True]);
},"lvl68");
var $$TextziReadziLex$d4=$D(1,function(){
 $r([$$TextziReadziLex$t1,$$GHCziTypes_True]);
},"lvl69");
var $$TextziReadziLex$e4=$D(1,function(){
 $r([$$TextziReadziLex$w1,$$GHCziTypes_True]);
},"lvl70");
var $$TextziReadziLex$f4=$D(1,function(){
 $r([$$TextziReadziLex$z1,$$GHCziTypes_True]);
},"lvl71");
var $$TextziReadziLex$g4=$D(1,function(){
 $r([$$TextziReadziLex$C1,$$GHCziTypes_True]);
},"lvl72");
var $$TextziReadziLex$h4=$D(1,function(){
 $r([$$TextziReadziLex$F1,$$GHCziTypes_True]);
},"lvl73");
var $$TextziReadziLex$i4=$D(1,function(){
 $r([$$TextziReadziLex$I1,$$GHCziTypes_True]);
},"lvl74");
var $$TextziReadziLex$j4=$D(1,function(){
 $r([$$TextziReadziLex$L1,$$GHCziTypes_True]);
},"lvl75");
var $$TextziReadziLex$k4=$D(1,function(){
 $r([$$TextziReadziLex$O1,$$GHCziTypes_True]);
},"lvl76");
var $$TextziReadziLex$l4=$D(1,function(){
 $r([$$TextziReadziLex$R1,$$GHCziTypes_True]);
},"lvl77");
var $$TextziReadziLex$m4=$D(1,function(){
 $r([$$TextziReadziLex$U1,$$GHCziTypes_True]);
},"lvl78");
var $$TextziReadziLex$n4=$D(1,function(){
 $r([$$TextziReadziLex$X1,$$GHCziTypes_True]);
},"lvl79");
var $$TextziReadziLex$o4=$D(1,function(){
 $r([$$TextziReadziLex$k1,$$GHCziTypes_True]);
},"lvl80");
var $$TextziReadziLex$p4=$D(1,function(){
 $r([$$TextziReadziLex$a2,$$GHCziTypes_True]);
},"lvl81");
var $$TextziReadziLex$q4=$D(1,function(){
 $r([$$TextziReadziLex$d2,$$GHCziTypes_True]);
},"lvl82");
var $$TextziReadziLex$r4=$D(1,function(){
 $r([$$TextziReadziLex$g2,$$GHCziTypes_True]);
},"lvl83");
var $$TextziReadziLex$s4=$D(1,function(){
 $r([$$TextziReadziLex$j2,$$GHCziTypes_True]);
},"lvl84");
var $$TextziReadziLex$t4=$D(1,function(){
 $r([$$TextziReadziLex$m2,$$GHCziTypes_True]);
},"lvl85");
var $$TextziReadziLex$u4=$D(1,function(){
 $r([$$TextziReadziLex$p2,$$GHCziTypes_True]);
},"lvl86");
var $$TextziReadziLex$v4=$D(1,function(){
 $r([$$TextziReadziLex$s2,$$GHCziTypes_True]);
},"lvl87");
var $$TextziReadziLex$w4=$D(1,function(){
 $r([$$TextziReadziLex$v2,$$GHCziTypes_True]);
},"lvl88");
var $$TextziReadziLex$x4=$D(1,function(){
 $r([$$TextziReadziLex$y2,$$GHCziTypes_True]);
},"lvl89");
var $$TextziReadziLex$y4=$D(1,function(){
 $r([$$TextziReadziLex$B2,$$GHCziTypes_True]);
},"lvl90");
var $$TextziReadziLex$z4=$D(1,function(){
 $r([$$TextziReadziLex$E2,$$GHCziTypes_True]);
},"lvl91");
var $$TextziReadziLex$A4=$D(1,function(){
 $r([$$TextziReadziLex$H2,$$GHCziTypes_True]);
},"lvl92");
var $$TextziReadziLex$B4=$D(1,function(){
 $r([$$TextziReadziLex$K2,$$GHCziTypes_True]);
},"lvl93");
var $$TextziReadziLex$C4=$D(1,function(){
 $r([$$TextziReadziLex$N2,$$GHCziTypes_True]);
},"lvl94");
var $$TextziReadziLex$D4=$D(1,function(){
 $r([$$TextziReadziLex$Q2,$$GHCziTypes_True]);
},"lvl95");
var $$TextziReadziLex$E4=$D(1,function(){
 $r([$$TextziReadziLex$T2,$$GHCziTypes_True]);
},"lvl96");
var $$TextziReadziLex$F4=$D(1,function(){
 $r([$$TextziReadziLex$W2,$$GHCziTypes_True]);
},"lvl97");
var $$TextziReadziLex$G4=$F(1,function(Vn){
 var Wn=$t(function(){
  $$TextziReadziLex_lexChar2.J(Vn);
 },[Vn],"lvl99");
 var Xn=$t(function(){
  $$TextziReadziLex$G4.J(Vn);
 },[Vn],"lvl100");
 var Yn=$f(1,function(Zn){
  $M(Zn,function(ao){
   var bo=ao.v[0];
   $M(bo,function(co){
    switch(co.toString()){
    case "\\":
     $A(Xn);break;
    default:
     $R(3,[],"Fail");
    }
   },[Xn]);
  },[Xn]);
 },[Xn],"a127");
 var eo=$d(1,[Yn],"lvl101");
 var fo=$f(1,function(go){
  $A(eo);
 },[eo],"k1");
 var ho=$f(1,function(io){
  $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(io,fo);
 },[fo],"a128");
 var jo=$d(2,[ho],"lvl102");
 var ko=$f(1,function(lo){
  $M(lo,function(mo){
   var no=mo.v[0];
   $M(no,function(oo){
    switch(oo.toString()){
    case "&":
     $A(Xn);break;
    default:
     $$GHCziUnicode_isSpace.C([mo],function(po){
      switch(po.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(jo);break;
      }
     },[jo]);
    }
   },[Xn,jo,mo]);
  },[Xn,jo]);
 },[Xn,jo],"a129");
 var qo=$d(1,[ko],"lvl103");
 var ro=$f(1,function(so){
  $M(so,function(to){
   var uo=to.v[0];
   $M(uo,function(vo){
    switch(vo.toString()){
    case "\\":
     $A(Wn);break;
    default:
     var wo=$d(1,[to,$$GHCziTypes_False],"sat");
     Vn.J(wo);
    }
   },[Vn,Wn,to]);
  },[Vn,Wn]);
 },[Vn,Wn],"sat");
 var xo=$f(1,function(yo){
  $M(yo,function(zo){
   var Ao=zo.v[0];
   $M(Ao,function(Bo){
    switch(Bo.toString()){
    case "\\":
     $A(qo);break;
    default:
     $R(3,[],"Fail");
    }
   },[qo]);
  },[qo]);
 },[qo],"sat");
 var Co=$d(1,[xo],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(Co,ro);
},"a104");
var $$TextziReadziLex$H4=$F(2,function(Do,Eo){
 var Fo=$t(function(){
  var Go=$t(function(){
   Do.J($$GHCziTypes_ZMZN);
  },[Do],"sat");
  var Ho=$d(2,[Go],"sat");
  Eo.J(Ho);
 },[Do,Eo],"lvl99");
 var Io=$f(1,function(Jo){
  $M(Jo,function(Ko){
   var Lo=Ko.v[0],Mo=Ko.v[1];
   $M(Lo,function(No){
    var Oo=No.v[0];
    $M(Oo,function(Po){
     switch(Po.toString()){
     case "\"":
      $M(Mo,function(To){
       switch(To.g){
       case 1:
	$A(Fo);break;
       case 2:
	var Uo=$f(1,function(Vo){
	 var Wo=$d(2,[No,Vo],"sat");
	 Do.J(Wo);
	},[Do,No],"sat");
	$$TextziReadziLex$H4.J(Uo,Eo);break;
       }
      },[Do,Eo,Fo,No]);break;
     default:
      var Qo=$f(1,function(Ro){
       var So=$d(2,[No,Ro],"sat");
       Do.J(So);
      },[Do,No],"sat");
      $$TextziReadziLex$H4.J(Qo,Eo);
     }
    },[Do,Eo,Fo,No,Mo]);
   },[Do,Eo,Fo,Mo]);
  },[Do,Eo,Fo]);
 },[Do,Eo,Fo],"sat");
 $$TextziReadziLex$G4.J(Io);
},"a105");
var $$TextziReadziLex$I4=$T(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(10,0));
},"lvl98");
var $$TextziReadziLex$J4=$F(1,function(Xo){
 var Yo=$t(function(){
  var Zo=$t(function(){
   var ap=$f(1,function(bp){
    var cp=$t(function(){
     $$TextziReadziLex_numberToIntegerzuzdsval.J($$TextziReadziLex$I4,$$TextziReadziLex_numberToInteger2,bp);
    },[bp],"sat");
    var dp=$d(2,[cp],"sat");
    Xo.J(dp);
   },[Xo],"sat");
   $$TextziReadziLex$d1.J($$TextziReadziLex$f1,ap);
  },[Xo],"sat");
  var ep=$f(1,function(fp){
   $M(fp,function(gp){
    var hp=gp.v[0];
    $M(hp,function(ip){
     switch(ip.toString()){
     case "+":
      var jp=$f(1,function(kp){
       var lp=$t(function(){
	$$TextziReadziLex_numberToIntegerzuzdsval.J($$TextziReadziLex$I4,$$TextziReadziLex_numberToInteger2,kp);
       },[kp],"sat");
       var mp=$d(2,[lp],"sat");
       Xo.J(mp);
      },[Xo],"sat");
      $$TextziReadziLex$d1.J($$TextziReadziLex$f1,jp);break;
     default:
      $R(3,[],"Fail");
     }
    },[Xo]);
   },[Xo]);
  },[Xo],"sat");
  var np=$f(1,function(op){
   $M(op,function(pp){
    var qp=pp.v[0];
    $M(qp,function(rp){
     switch(rp.toString()){
     case "-":
      var sp=$f(1,function(tp){
       var up=$t(function(){
	$$TextziReadziLex_numberToIntegerzuzdsval.C([$$TextziReadziLex$I4,$$TextziReadziLex_numberToInteger2,tp],function(vp){
	 $$GHCziIntegerziType_negateInteger.J(vp);
	},[]);
       },[tp],"sat");
       var wp=$d(2,[up],"sat");
       Xo.J(wp);
      },[Xo],"sat");
      $$TextziReadziLex$d1.J($$TextziReadziLex$f1,sp);break;
     default:
      $R(3,[],"Fail");
     }
    },[Xo]);
   },[Xo]);
  },[Xo],"sat");
  var xp=$d(1,[np],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.C([xp,ep],function(yp){
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(yp,Zo);
  },[Zo]);
 },[Xo],"lvl99");
 var zp=$f(1,function(Ap){
  $M(Ap,function(Bp){
   var Cp=Bp.v[0];
   $M(Cp,function(Dp){
    switch(Dp.toString()){
    case "E":
     $A(Yo);break;
    default:
     $R(3,[],"Fail");
    }
   },[Yo]);
  },[Yo]);
 },[Yo],"sat");
 var Ep=$f(1,function(Fp){
  $M(Fp,function(Gp){
   var Hp=Gp.v[0];
   $M(Hp,function(Ip){
    switch(Ip.toString()){
    case "e":
     $A(Yo);break;
    default:
     $R(3,[],"Fail");
    }
   },[Yo]);
  },[Yo]);
 },[Yo],"sat");
 var Jp=$d(1,[Ep],"sat");
 $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdszdcmplus.J(Jp,zp);
},"a106");
var $$TextziReadziLex$K4=$F(1,function(Kp){
 Kp.J($$DataziMaybe_Nothing);
},"a107");
var $$TextziReadziLex$L4=$F(1,function(Lp){
 Lp.J($$DataziMaybe_Nothing);
},"a108");
var $$TextziReadziLex$M4=$F(1,function(Mp){
 var Np=$f(1,function(Op){
  var Pp=$t(function(){
   $$TextziReadziLex_numberToIntegerzuzdsval.J($$TextziReadziLex_numberToInteger1,$$TextziReadziLex_numberToInteger2,Op);
  },[Op],"a128");
  var Qp=$d(6,[Pp],"lvl99");
  var Rp=$f(1,function(Sp){
   var Tp=$f(1,function(Up){
    var Vp=$t(function(){
     $M(Sp,function(Wp){
      switch(Wp.g){
      case 1:
       $M(Up,function(Xp){
	switch(Xp.g){
	case 1:
	 $A(Qp);break;
	case 2:
	 var Yp=Xp.v[0];
	 $$GHCziIntegerziType_geInteger.C([Yp,$$TextziReadziLex_numberToInteger2],function(Zp){
	  switch(Zp.g){
	  case 1:
	   var aq=$t(function(){
	    $$GHCziIntegerziType_negateInteger.C([Yp],function(bq){
	     $$GHCziReal_zczuzc2.C([$$TextziReadziLex_numberToInteger1,bq],function(cq){
	      $$GHCziIntegerziType_absInteger.C([cq],function(dq){
	       $$GHCziIntegerziType_signumInteger.C([cq],function(eq){
		$$GHCziIntegerziType_timesInteger.C([Pp,eq],function(fq){
		 $$GHCziReal_zdwreduce.C([fq,dq],function(gq){
		  var hq=gq[0],iq=gq[1];
		  $R(1,[hq,iq],":%");
		 },[]);
		},[dq]);
	       },[Pp,dq]);
	      },[Pp,cq]);
	     },[Pp]);
	    },[Pp]);
	   },[Pp,Yp],"sat");
	   $R(7,[aq],"Rat");break;
	  case 2:
	   var jq=$t(function(){
	    $$GHCziReal_zczuzc2.C([$$TextziReadziLex_numberToInteger1,Yp],function(kq){
	     $$GHCziIntegerziType_timesInteger.J(Pp,kq);
	    },[Pp]);
	   },[Pp,Yp],"sat");
	   $R(6,[jq],"Int");break;
	  }
	 },[Pp,Yp]);break;
	}
       },[Pp,Qp]);break;
      case 2:
       var lq=Wp.v[0];
       var mq=$t(function(){
	$M(Up,function(nq){
	 switch(nq.g){
	 case 1:
	  $$TextziReadziLex$Z.C([$$TextziReadziLex_numberToInteger2,Pp,lq],function(oq){
	   var pq=oq[0],qq=oq[1];
	   $R(1,[pq,qq],":%");
	  },[]);break;
	 case 2:
	  var rq=nq.v[0];
	  $$TextziReadziLex$Z.C([rq,Pp,lq],function(sq){
	   var tq=sq[0],uq=sq[1];
	   $R(1,[tq,uq],":%");
	  },[]);break;
	 }
	},[Pp,lq]);
       },[Pp,Up,lq],"sat");
       $R(7,[mq],"Rat");break;
      }
     },[Pp,Qp,Up]);
    },[Pp,Qp,Sp,Up],"sat");
    Mp.J(Vp);
   },[Pp,Qp,Sp,Mp],"sat");
   $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$J4,$$TextziReadziLex$L4,Tp);
  },[Pp,Qp,Mp],"sat");
  $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$g1,$$TextziReadziLex$K4,Rp);
 },[Mp],"sat");
 $$TextziReadziLex$d1.J($$TextziReadziLex$f1,Np);
},"a109");
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
var $$Main_zdfReadObject27=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Whiskeybottle");
},[],"in `main:Main'");
var $$Main_zdfReadObject26=$f(2,function(x,y){
 y.J($$Main_Whiskeybottle);
},[],"in `main:Main'");
var $$Main_zdfReadObject25=$D(1,function(){
 $r([$$Main_zdfReadObject27,$$Main_zdfReadObject26]);
},"in `main:Main'");
var $$Main_zdfReadObject24=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Bucket");
},[],"in `main:Main'");
var $$Main_zdfReadObject23=$f(2,function(z,A){
 A.J($$Main_Bucket);
},[],"in `main:Main'");
var $$Main_zdfReadObject22=$D(1,function(){
 $r([$$Main_zdfReadObject24,$$Main_zdfReadObject23]);
},"in `main:Main'");
var $$Main_zdfReadObject21=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Chain");
},[],"in `main:Main'");
var $$Main_zdfReadObject20=$f(2,function(B,C){
 C.J($$Main_Chain);
},[],"in `main:Main'");
var $$Main_zdfReadObject19=$D(1,function(){
 $r([$$Main_zdfReadObject21,$$Main_zdfReadObject20]);
},"in `main:Main'");
var $$Main_zdfReadObject18=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Frog");
},[],"in `main:Main'");
var $$Main_zdfReadObject17=$f(2,function(D,E){
 E.J($$Main_Frog);
},[],"in `main:Main'");
var $$Main_zdfReadObject16=$D(1,function(){
 $r([$$Main_zdfReadObject18,$$Main_zdfReadObject17]);
},"in `main:Main'");
var $$Main_zdfReadObject15=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Wizard");
},[],"in `main:Main'");
var $$Main_zdfReadObject14=$f(2,function(F,G){
 G.J($$Main_Wizzard);
},[],"in `main:Main'");
var $$Main_zdfReadObject13=$D(1,function(){
 $r([$$Main_zdfReadObject15,$$Main_zdfReadObject14]);
},"in `main:Main'");
var $$Main_zdfReadObject12=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Well");
},[],"in `main:Main'");
var $$Main_zdfReadObject11=$f(2,function(H,I){
 I.J($$Main_Well);
},[],"in `main:Main'");
var $$Main_zdfReadObject10=$D(1,function(){
 $r([$$Main_zdfReadObject12,$$Main_zdfReadObject11]);
},"in `main:Main'");
var $$Main_zdfReadObject9=$D(2,function(){
 $r([$$Main_zdfReadObject10,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_zdfReadObject8=$D(2,function(){
 $r([$$Main_zdfReadObject13,$$Main_zdfReadObject9]);
},"in `main:Main'");
var $$Main_zdfReadObject7=$D(2,function(){
 $r([$$Main_zdfReadObject16,$$Main_zdfReadObject8]);
},"in `main:Main'");
var $$Main_zdfReadObject6=$D(2,function(){
 $r([$$Main_zdfReadObject19,$$Main_zdfReadObject7]);
},"in `main:Main'");
var $$Main_zdfReadObject5=$D(2,function(){
 $r([$$Main_zdfReadObject22,$$Main_zdfReadObject6]);
},"in `main:Main'");
var $$Main_zdfReadObject4=$D(2,function(){
 $r([$$Main_zdfReadObject25,$$Main_zdfReadObject5]);
},"in `main:Main'");
var $$Main_zdfReadObject3=$f(1,function(J){
 $$GHCziRead_choose2.J($$Main_zdfReadObject4,J);
},[],"in `main:Main'");
var $$Main_zdfReadDirection19=$t(function(){
 $$GHCziCString_unpackCStringzh.J("West");
},[],"in `main:Main'");
var $$Main_zdfReadDirection18=$f(2,function(K,L){
 L.J($$Main_West);
},[],"in `main:Main'");
var $$Main_zdfReadDirection17=$D(1,function(){
 $r([$$Main_zdfReadDirection19,$$Main_zdfReadDirection18]);
},"in `main:Main'");
var $$Main_zdfReadDirection16=$t(function(){
 $$GHCziCString_unpackCStringzh.J("East");
},[],"in `main:Main'");
var $$Main_zdfReadDirection15=$f(2,function(M,N){
 N.J($$Main_East);
},[],"in `main:Main'");
var $$Main_zdfReadDirection14=$D(1,function(){
 $r([$$Main_zdfReadDirection16,$$Main_zdfReadDirection15]);
},"in `main:Main'");
var $$Main_zdfReadDirection13=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Upstairs");
},[],"in `main:Main'");
var $$Main_zdfReadDirection12=$f(2,function(O,P){
 P.J($$Main_Upstairs);
},[],"in `main:Main'");
var $$Main_zdfReadDirection11=$D(1,function(){
 $r([$$Main_zdfReadDirection13,$$Main_zdfReadDirection12]);
},"in `main:Main'");
var $$Main_zdfReadDirection10=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Downstairs");
},[],"in `main:Main'");
var $$Main_zdfReadDirection9=$f(2,function(Q,R){
 R.J($$Main_Downstairs);
},[],"in `main:Main'");
var $$Main_zdfReadDirection8=$D(1,function(){
 $r([$$Main_zdfReadDirection10,$$Main_zdfReadDirection9]);
},"in `main:Main'");
var $$Main_zdfReadDirection7=$D(2,function(){
 $r([$$Main_zdfReadDirection8,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_zdfReadDirection6=$D(2,function(){
 $r([$$Main_zdfReadDirection11,$$Main_zdfReadDirection7]);
},"in `main:Main'");
var $$Main_zdfReadDirection5=$D(2,function(){
 $r([$$Main_zdfReadDirection14,$$Main_zdfReadDirection6]);
},"in `main:Main'");
var $$Main_zdfReadDirection4=$D(2,function(){
 $r([$$Main_zdfReadDirection17,$$Main_zdfReadDirection5]);
},"in `main:Main'");
var $$Main_zdfReadDirection3=$f(1,function(S){
 $$GHCziRead_choose2.J($$Main_zdfReadDirection4,S);
},[],"in `main:Main'");
var $$Main_zdfReadCommand3=$f(1,function(U){
 var V=$t(function(){
  $$GHCziRead_choose2.J($$Main$u,U);
 },[U],"ds3");
 var W=$f(1,function(X){
  var Y=$t(function(){
   $M(U,function(Z){
    var a1=Z.v[0];
    var b1=a1.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(b1.g){
    case 1:
     var c1=$t(function(){
      $$Main$z.J(a1,X);
     },[X,a1],"sat");
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,c1);break;
    case 2:
     var d1=$t(function(){
      var e1=$f(1,function(f1){
       var g1=$d(1,[f1],"sat");
       X.J(g1);
      },[X],"sat");
      $$GHCziRead_parens1.J($$Main_zdfReadDirection3,$$Main$w,e1);
     },[X],"lvl39");
     var h1=$f(1,function(i1){
      $M(i1,function(j1){
       switch(j1.g){
       case 4:
	var k1=j1.v[0];
	$$GHCziBase_eqString.C([k1,$$Main$a],function(l1){
	 switch(l1.g){
	 case 1:
	  $R(3,[],"Fail");break;
	 case 2:
	  $A(d1);break;
	 }
	},[d1]);break;
       default:
	$R(3,[],"Fail");
       }
      },[d1]);
     },[d1],"k1");
     var m1=$t(function(){
      $$TextziReadziLex_hsLex2.J(h1);
     },[h1],"lvl99");
     var n1=$f(1,function(o1){
      $A(m1);
     },[m1],"k2");
     var p1=$t(function(){
      $$Main$z.J(a1,X);
     },[X,a1],"sat");
     var q1=$f(1,function(r1){
      $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(r1,n1);
     },[n1],"sat");
     var s1=$d(2,[q1],"sat");
     $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(s1,p1);break;
    }
   },[X]);
  },[U,X],"sat");
  V.C([X],function(t1){
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(t1,Y);
  },[Y]);
 },[U,V],"sat");
 $A(W);
},[],"in `main:Main'");
var $$Main_maybeRead1=$t(function(){
 $$GHCziRead_parens1.J($$Main_zdfReadCommand3,$$TextziParserCombinatorsziReadPrec_minPrec,$$TextziParserCombinatorsziReadP_zdfMonadPzuzdcreturn);
},[],"in `main:Main'");
var $$Main_capitalizze=$f(1,function(d2){
 var e2=$t(function(){
  $M(d2,function(f2){
   switch(f2.g){
   case 1:
    $A($$GHCziList_tail1);break;
   case 2:
    var g2=f2.v[1];
    $$GHCziBase_map.J($$GHCziUnicode_toLower,g2);break;
   }
  },[]);
 },[d2],"sat");
 var h2=$t(function(){
  $M(d2,function(i2){
   switch(i2.g){
   case 1:
    $A($$GHCziList_badHead);break;
   case 2:
    var j2=i2.v[0];
    $$GHCziUnicode_toUpper.J(j2);break;
   }
  },[]);
 },[d2],"sat");
 $R(2,[h2,e2],":");
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
var $$Main_zdfEqRoomzuzdczeze=$f(2,function(A6,B6){
 $M(A6,function(C6){
  switch(C6.g){
  case 1:
   $M(B6,function(D6){
    switch(D6.g){
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
   $M(B6,function(E6){
    switch(E6.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(B6,function(F6){
    switch(F6.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(B6,function(G6){
    switch(G6.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[B6]);
},[],"in `main:Main'");
var $$Main_zdfEqDirectionzuzdczeze=$f(2,function(K6,L6){
 $M(K6,function(M6){
  switch(M6.g){
  case 1:
   $M(L6,function(N6){
    switch(N6.g){
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
   $M(L6,function(O6){
    switch(O6.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(L6,function(P6){
    switch(P6.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(L6,function(Q6){
    switch(Q6.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[L6]);
},[],"in `main:Main'");
var $$Main_zdfEqObjectzuzdczeze=$f(2,function(p7,q7){
 $M(p7,function(r7){
  switch(r7.g){
  case 1:
   $M(q7,function(s7){
    switch(s7.g){
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
   $M(q7,function(t7){
    switch(t7.g){
    case 2:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 3:
   $M(q7,function(u7){
    switch(u7.g){
    case 3:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 4:
   $M(q7,function(v7){
    switch(v7.g){
    case 4:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 5:
   $M(q7,function(w7){
    switch(w7.g){
    case 5:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  case 6:
   $M(q7,function(x7){
    switch(x7.g){
    case 6:
     $R(2,[],"True");break;
    default:
     $R(1,[],"False");
    }
   },[]);break;
  }
 },[q7]);
},[],"in `main:Main'");
var $$Main_zdwviableDir=$f(2,function(w9,x9){
 var y9=$f(1,function(z9){
  $M(z9,function(A9){
   switch(A9.g){
   case 1:
    $R(1,[],"False");break;
   case 2:
    var B9=A9.v[0],C9=A9.v[1];
    $M(B9,function(D9){
     var E9=D9.v[0];
     $M(E9,function(F9){
      switch(F9.g){
      case 1:
       $M(w9,function(G9){
	switch(G9.g){
	case 1:
	 $R(2,[],"True");break;
	case 2:
	 y9.J(C9);break;
	case 3:
	 y9.J(C9);break;
	case 4:
	 y9.J(C9);break;
	}
       },[w9,C9,y9]);break;
      case 2:
       $M(w9,function(H9){
	switch(H9.g){
	case 2:
	 $R(2,[],"True");break;
	default:
	 y9.J(C9);
	}
       },[w9,C9,y9]);break;
      case 3:
       $M(w9,function(I9){
	switch(I9.g){
	case 3:
	 $R(2,[],"True");break;
	default:
	 y9.J(C9);
	}
       },[w9,C9,y9]);break;
      case 4:
       $M(w9,function(J9){
	switch(J9.g){
	case 4:
	 $R(2,[],"True");break;
	default:
	 y9.J(C9);
	}
       },[w9,C9,y9]);break;
      }
     },[w9,C9,y9]);
    },[w9,C9,y9]);break;
   }
  },[w9,y9]);
 },[w9],"go");
 y9.J(x9);
},[],"at Advgame.hs:134:1");
var $$Main_zdfShowObjectzuzdcshowList=$f(2,function(O9,P9){
 $M(O9,function(Q9){
  switch(Q9.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",P9);break;
  case 2:
   var R9=Q9.v[0],S9=Q9.v[1];
   var T9=$t(function(){
    var U9=$t(function(){
     var V9=$d(2,[$$GHCziShow_showListzuzu2,P9],"lvl39");
     var W9=$f(1,function(X9){
      $M(X9,function(Y9){
       switch(Y9.g){
       case 1:
	$A(V9);break;
       case 2:
	var Z9=Y9.v[0],aa=Y9.v[1];
	var ba=$t(function(){
	 $M(Z9,function(ca){
	  switch(ca.g){
	  case 1:
	   var da=$t(function(){
	    W9.J(aa);
	   },[aa,W9],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadObject27,da);break;
	  case 2:
	   var ea=$t(function(){
	    W9.J(aa);
	   },[aa,W9],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadObject24,ea);break;
	  case 3:
	   var fa=$t(function(){
	    W9.J(aa);
	   },[aa,W9],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadObject21,fa);break;
	  case 4:
	   var ga=$t(function(){
	    W9.J(aa);
	   },[aa,W9],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadObject18,ga);break;
	  case 5:
	   var ha=$t(function(){
	    W9.J(aa);
	   },[aa,W9],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadObject15,ha);break;
	  case 6:
	   var ia=$t(function(){
	    W9.J(aa);
	   },[aa,W9],"sat");
	   $$GHCziBase_zpzp.J($$Main_zdfReadObject12,ia);break;
	  }
	 },[aa,W9]);
	},[Z9,aa,W9],"sat");
	$R(2,[$$GHCziShow_showListzuzu1,ba],":");break;
       }
      },[V9,W9]);
     },[V9],"showl");
     W9.J(S9);
    },[P9,S9],"a23");
    $M(R9,function(ja){
     switch(ja.g){
     case 1:
      $$GHCziBase_zpzp.J($$Main_zdfReadObject27,U9);break;
     case 2:
      $$GHCziBase_zpzp.J($$Main_zdfReadObject24,U9);break;
     case 3:
      $$GHCziBase_zpzp.J($$Main_zdfReadObject21,U9);break;
     case 4:
      $$GHCziBase_zpzp.J($$Main_zdfReadObject18,U9);break;
     case 5:
      $$GHCziBase_zpzp.J($$Main_zdfReadObject15,U9);break;
     case 6:
      $$GHCziBase_zpzp.J($$Main_zdfReadObject12,U9);break;
     }
    },[U9]);
   },[P9,S9,R9],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,T9],":");break;
  }
 },[P9]);
},[],"in `main:Main'");
var $$Main_zdfShowObjectzuzdcshow=$f(1,function(ka){
 $M(ka,function(la){
  switch(la.g){
  case 1:
   $A($$Main_zdfReadObject27);break;
  case 2:
   $A($$Main_zdfReadObject24);break;
  case 3:
   $A($$Main_zdfReadObject21);break;
  case 4:
   $A($$Main_zdfReadObject18);break;
  case 5:
   $A($$Main_zdfReadObject15);break;
  case 6:
   $A($$Main_zdfReadObject12);break;
  }
 },[]);
},[],"in `main:Main'");
var $$Main_describePath2=$f(3,function(xc,yc,zc){
 var Ac=$t(function(){
  $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,zc);
 },[zc],"a24");
 var Bc=$d(2,[Ac],"a25");
 var Cc=$d(2,[Bc,yc],"args1");
 var Dc=$f(1,function(Ec){
  var Fc=$t(function(){
   var Gc=$t(function(){
    $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,Ec);
   },[Ec],"sat");
   var Hc=$d(2,[Gc],"sat");
   var Ic=$d(2,[Hc,Cc],"sat");
   $$GHCziList_reverse1.J(Ic,$$GHCziTypes_ZMZN);
  },[Cc,Ec],"sat");
  $$TextziPrintf_uprintf.C([xc,Fc],function(Jc){
   $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,Jc);
  },[]);
 },[Cc,xc],"sat");
 $A(Dc);
},[],"in `main:Main'");
var $$Main_describePath1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("There is a %s going %s from here.");
},[],"in `main:Main'");
var $$Main_describePath=$f(1,function(Kc){
 var Lc=$t(function(){
  $M(Kc,function(Mc){
   var Nc=Mc.v[0];
   $M(Nc,function(Oc){
    switch(Oc.g){
    case 1:
     $A($$Main_zdfReadDirection19);break;
    case 2:
     $A($$Main_zdfReadDirection16);break;
    case 3:
     $A($$Main_zdfReadDirection13);break;
    case 4:
     $A($$Main_zdfReadDirection10);break;
    }
   },[]);
  },[]);
 },[Kc],"sat");
 var Pc=$t(function(){
  $M(Kc,function(Qc){
   var Rc=Qc.v[1];
   $M(Rc,function(Sc){
    switch(Sc.g){
    case 1:
     $A($$Main_zdfShowEntryway2);break;
    case 2:
     $A($$Main_zdfShowEntryway1);break;
    }
   },[]);
  },[]);
 },[Kc],"sat");
 $$Main_describePath2.J($$Main_describePath1,$$GHCziTypes_ZMZN,Pc,Lc);
},[],"at Advgame.hs:111:1");
var $$Main_describePaths2=$f(2,function(Tc,Uc){
 $M(Tc,function(Vc){
  switch(Vc.g){
  case 1:
   $r([Uc,$$GHCziTuple_Z0T]);break;
  case 2:
   var Wc=Vc.v[0],Xc=Vc.v[1];
   var Yc=$t(function(){
    $$Main_describePath.J(Wc);
   },[Wc],"sat");
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Yc,$$GHCziTypes_True,Uc],function(Zc){
    var ad=Zc[0];
    $$Main_describePaths2.J(Xc,ad);
   },[Xc]);break;
  }
 },[Uc]);
},[],"in `main:Main'");
var $$Main_zdfEqObjectzuzdczsze=$f(2,function(yd,zd){
 $M(yd,function(Ad){
  switch(Ad.g){
  case 1:
   $M(zd,function(Bd){
    switch(Bd.g){
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
   $M(zd,function(Cd){
    switch(Cd.g){
    case 2:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 3:
   $M(zd,function(Dd){
    switch(Dd.g){
    case 3:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 4:
   $M(zd,function(Ed){
    switch(Ed.g){
    case 4:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 5:
   $M(zd,function(Fd){
    switch(Fd.g){
    case 5:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  case 6:
   $M(zd,function(Gd){
    switch(Gd.g){
    case 6:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);break;
  }
 },[zd]);
},[],"in `main:Main'");
var $$Main_zdfEqObject=$D(1,function(){
 $r([$$Main_zdfEqObjectzuzdczeze,$$Main_zdfEqObjectzuzdczsze]);
},"at Advgame.hs:15:15");
var $$Main_pickupable4=$D(2,function(){
 $r([$$Main_Frog,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_pickupable3=$D(2,function(){
 $r([$$Main_Chain,$$Main_pickupable4]);
},"in `main:Main'");
var $$Main_pickupable2=$D(2,function(){
 $r([$$Main_Bucket,$$Main_pickupable3]);
},"in `main:Main'");
var $$Main_pickupable1=$D(2,function(){
 $r([$$Main_Whiskeybottle,$$Main_pickupable2]);
},"in `main:Main'");
var $$Main_describeFloor2=$f(2,function(Id,Jd){
 $M(Id,function(Kd){
  switch(Kd.g){
  case 1:
   $r([Jd,$$GHCziTuple_Z0T]);break;
  case 2:
   var Ld=Kd.v[0],Md=Kd.v[1];
   $$GHCziList_elem.C([$$Main_zdfEqObject,Ld,$$Main_pickupable1],function(Nd){
    switch(Nd.g){
    case 1:
     $$Main_describeFloor2.J(Md,Jd);break;
    case 2:
     var Od=$t(function(){
      var Pd=$t(function(){
       var Qd=$t(function(){
	$M(Ld,function(Rd){
	 switch(Rd.g){
	 case 1:
	  $A($$Main$a1);break;
	 case 2:
	  $A($$Main$V);break;
	 case 3:
	  $A($$Main$W);break;
	 case 4:
	  $A($$Main$X);break;
	 case 5:
	  $A($$Main$Y);break;
	 case 6:
	  $A($$Main$Z);break;
	 }
	},[]);
       },[Ld],"sat");
       var Sd=$d(2,[Qd],"sat");
       var Td=$d(2,[Sd,$$GHCziTypes_ZMZN],"sat");
       $$GHCziList_reverse1.J(Td,$$GHCziTypes_ZMZN);
      },[Ld],"sat");
      $$TextziPrintf_uprintf.C([$$Main$U,Pd],function(Ud){
       $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,Ud);
      },[]);
     },[Ld],"sat");
     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Od,$$GHCziTypes_True,Jd],function(Vd){
      var Wd=Vd[0];
      $$Main_describeFloor2.J(Md,Wd);
     },[Md]);break;
    }
   },[Jd,Ld,Md]);break;
  }
 },[Jd]);
},[],"in `main:Main'");
var $$Main_getLoc=$f(2,function(Kf,Lf){
 var Mf=$f(1,function(Nf){
  $M(Nf,function(Of){
   var Pf=Of.v[0];
   $$Main_zdfEqRoomzuzdczeze.J(Pf,Kf);
  },[Kf]);
 },[Kf],"sat");
 $$GHCziList_filter.C([Mf,Lf],function(Qf){
  switch(Qf.g){
  case 1:
   $A($$GHCziList_badHead);break;
  case 2:
   var Rf=Qf.v[0];
   $A(Rf);break;
  }
 },[]);
},[],"at Advgame.hs:138:1");
var $$Main_zdwzdczeze1=$f(6,function(Sf,Tf,Uf,Vf,Wf,Xf){
 var Yf=$t(function(){
  $M(Tf,function(Zf){
   switch(Zf.g){
   case 1:
    $M(Wf,function(ag){
     switch(ag.g){
     case 1:
      $M(Uf,function(bg){
       switch(bg.g){
       case 1:
	$M(Xf,function(cg){
	 switch(cg.g){
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
	$M(Xf,function(dg){
	 switch(dg.g){
	 case 2:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 3:
	$M(Xf,function(eg){
	 switch(eg.g){
	 case 3:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 4:
	$M(Xf,function(fg){
	 switch(fg.g){
	 case 4:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       }
      },[Xf]);break;
     case 2:
      $R(1,[],"False");break;
     }
    },[Uf,Xf]);break;
   case 2:
    $M(Wf,function(gg){
     switch(gg.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $M(Uf,function(hg){
       switch(hg.g){
       case 1:
	$M(Xf,function(ig){
	 switch(ig.g){
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
	$M(Xf,function(jg){
	 switch(jg.g){
	 case 2:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 3:
	$M(Xf,function(kg){
	 switch(kg.g){
	 case 3:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       case 4:
	$M(Xf,function(lg){
	 switch(lg.g){
	 case 4:
	  $R(2,[],"True");break;
	 default:
	  $R(1,[],"False");
	 }
	},[]);break;
       }
      },[Xf]);break;
     }
    },[Uf,Xf]);break;
   }
  },[Wf,Uf,Xf]);
 },[Tf,Wf,Uf,Xf],"$w$j");
 $M(Sf,function(mg){
  switch(mg.g){
  case 1:
   $M(Vf,function(ng){
    switch(ng.g){
    case 1:
     $A(Yf);break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    }
   },[Tf,Wf,Uf,Xf,Yf]);break;
  case 2:
   $M(Vf,function(og){
    switch(og.g){
    case 2:
     $A(Yf);break;
    default:
     $R(1,[],"False");
    }
   },[Tf,Wf,Uf,Xf,Yf]);break;
  case 3:
   $M(Vf,function(pg){
    switch(pg.g){
    case 3:
     $A(Yf);break;
    default:
     $R(1,[],"False");
    }
   },[Tf,Wf,Uf,Xf,Yf]);break;
  case 4:
   $M(Vf,function(qg){
    switch(qg.g){
    case 4:
     $A(Yf);break;
    default:
     $R(1,[],"False");
    }
   },[Tf,Wf,Uf,Xf,Yf]);break;
  }
 },[Tf,Wf,Uf,Xf,Yf,Vf]);
},[],"in `main:Main'");
var $$Main_zdfEqPathzuzdczeze=$f(2,function(rg,sg){
 $M(rg,function(tg){
  var ug=tg.v[0],vg=tg.v[1],wg=tg.v[2];
  $M(sg,function(xg){
   var yg=xg.v[0],zg=xg.v[1],Ag=xg.v[2];
   $$Main_zdwzdczeze1.J(ug,vg,wg,yg,zg,Ag);
  },[ug,vg,wg]);
 },[sg]);
},[],"in `main:Main'");
var $$Main_zdfEqPathzuzdczsze=$f(2,function(Bg,Cg){
 $M(Bg,function(Dg){
  var Eg=Dg.v[0],Fg=Dg.v[1],Gg=Dg.v[2];
  $M(Cg,function(Hg){
   var Ig=Hg.v[0],Jg=Hg.v[1],Kg=Hg.v[2];
   $$Main_zdwzdczeze1.C([Eg,Fg,Gg,Ig,Jg,Kg],function(Lg){
    switch(Lg.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);
  },[Eg,Fg,Gg]);
 },[Cg]);
},[],"in `main:Main'");
var $$Main_zdfEqPath=$D(1,function(){
 $r([$$Main_zdfEqPathzuzdczeze,$$Main_zdfEqPathzuzdczsze]);
},"at Advgame.hs:37:13");
var $$Main_zdwzdczeze=$f(8,function(Mg,Ng,Og,Pg,Qg,Rg,Sg,Tg){
 var Ug=$t(function(){
  $$GHCziBase_eqString.C([Ng,Rg],function(Vg){
   switch(Vg.g){
   case 1:
    $R(1,[],"False");break;
   case 2:
    $$GHCziClasses_zdfEqZMZNzuzdczeze1.C([$$Main_zdfEqPath,Og,Sg],function(Wg){
     switch(Wg.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $$GHCziClasses_zdfEqZMZNzuzdczeze1.J($$Main_zdfEqObject,Pg,Tg);break;
     }
    },[Pg,Tg]);break;
   }
  },[Og,Sg,Pg,Tg]);
 },[Ng,Rg,Og,Sg,Pg,Tg],"$w$j");
 $M(Mg,function(Xg){
  switch(Xg.g){
  case 1:
   $M(Qg,function(Yg){
    switch(Yg.g){
    case 1:
     $A(Ug);break;
    case 2:
     $R(1,[],"False");break;
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    }
   },[Ng,Rg,Og,Sg,Pg,Tg,Ug]);break;
  case 2:
   $M(Qg,function(Zg){
    switch(Zg.g){
    case 2:
     $A(Ug);break;
    default:
     $R(1,[],"False");
    }
   },[Ng,Rg,Og,Sg,Pg,Tg,Ug]);break;
  case 3:
   $M(Qg,function(ah){
    switch(ah.g){
    case 3:
     $A(Ug);break;
    default:
     $R(1,[],"False");
    }
   },[Ng,Rg,Og,Sg,Pg,Tg,Ug]);break;
  case 4:
   $M(Qg,function(bh){
    switch(bh.g){
    case 4:
     $A(Ug);break;
    default:
     $R(1,[],"False");
    }
   },[Ng,Rg,Og,Sg,Pg,Tg,Ug]);break;
  }
 },[Ng,Rg,Og,Sg,Pg,Tg,Ug,Qg]);
},[],"in `main:Main'");
var $$Main_zdfEqLocationzuzdczeze=$f(2,function(ch,dh){
 $M(ch,function(eh){
  var fh=eh.v[0],gh=eh.v[1],hh=eh.v[2],ih=eh.v[3];
  $M(dh,function(jh){
   var kh=jh.v[0],lh=jh.v[1],mh=jh.v[2],nh=jh.v[3];
   $$Main_zdwzdczeze.J(fh,gh,hh,ih,kh,lh,mh,nh);
  },[fh,gh,hh,ih]);
 },[dh]);
},[],"in `main:Main'");
var $$Main_help24=$f(3,function(Ih,Jh,Kh){
 $M(Ih,function(Lh){
  switch(Lh.g){
  case 1:
   var Mh=$d(1,[$$GHCziTuple_Z0T,Jh],"sat");
   $r([Kh,Mh]);break;
  case 2:
   var Nh=Lh.v[0],Oh=Lh.v[1];
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Nh,$$GHCziTypes_True,Kh],function(Ph){
    var Qh=Ph[0];
    $$Main_help24.J(Oh,Jh,Qh);
   },[Jh,Oh]);break;
  }
 },[Kh,Jh]);
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
var $$Main_getInventory2=$f(1,function(ai){
 $M(ai,function(bi){
  var ci=bi.v[0];
  $M(ci,function(di){
   switch(di.g){
   case 4:
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `main:Main'");
var $$Main_walk=$f(1,function(zi){
 var Ai=$f(1,function(Bi){
  $M(Bi,function(Ci){
   var Di=Ci.v[0];
   $$Main_zdfEqDirectionzuzdczeze.J(Di,zi);
  },[zi]);
 },[zi],"lvl39");
 var Ei=$t(function(){
  var Fi=$t(function(){
   var Gi=$t(function(){
    $M(zi,function(Hi){
     switch(Hi.g){
     case 1:
      $A($$Main$d1);break;
     case 2:
      $A($$Main$e1);break;
     case 3:
      $A($$Main$f1);break;
     case 4:
      $A($$Main$g1);break;
     }
    },[]);
   },[zi],"sat");
   var Ii=$d(2,[Gi],"sat");
   var Ji=$d(2,[Ii,$$GHCziTypes_ZMZN],"sat");
   $$GHCziList_reverse1.J(Ji,$$GHCziTypes_ZMZN);
  },[zi],"sat");
  $$TextziPrintf_uprintf.C([$$Main$c1,Fi],function(Ki){
   $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,Ki);
  },[]);
 },[zi],"a23");
 var Li=$f(2,function(Mi,Ni){
  $M(Mi,function(Oi){
   var Pi=Oi.v[0],Qi=Oi.v[1],Ri=Oi.v[2],Si=Oi.v[3];
   $M(Qi,function(Ti){
    var Ui=Ti.v[2];
    $$Main_zdwviableDir.C([zi,Ui],function(Vi){
     switch(Vi.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$b1,$$GHCziTypes_True,Ni],function(Wi){
       var Xi=Wi[0];
       var Yi=$d(1,[$$Main_Continue,Oi],"sat");
       $r([Xi,Yi]);
      },[Oi]);break;
     case 2:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Ei,$$GHCziTypes_True,Ni],function(Zi){
       var aj=Zi[0];
       var bj=$t(function(){
	var cj=$t(function(){
	 $$GHCziList_filter.C([Ai,Ui],function(dj){
	  switch(dj.g){
	  case 1:
	   $A($$GHCziList_badHead);break;
	  case 2:
	   var ej=dj.v[0];
	   $M(ej,function(fj){
	    var gj=fj.v[2];
	    $A(gj);
	   },[]);break;
	  }
	 },[]);
	},[Ai,Ui],"x");
	var hj=$f(1,function(ij){
	 $M(ij,function(jj){
	  var kj=jj.v[0];
	  $$Main_zdfEqRoomzuzdczeze.J(kj,cj);
	 },[cj]);
	},[cj],"sat");
	$$GHCziList_filter.C([hj,Pi],function(lj){
	 switch(lj.g){
	 case 1:
	  $A($$GHCziList_badHead);break;
	 case 2:
	  var mj=lj.v[0];
	  $A(mj);break;
	 }
	},[]);
       },[Ai,Ui,Pi],"sat");
       var nj=$d(1,[Pi,bj,Ri,Si],"sat");
       var oj=$d(1,[$$Main_Continue,nj],"sat");
       $r([aj,oj]);
      },[Ai,Ui,Pi,Ri,Si]);break;
     }
    },[Ai,Ei,Ui,Ni,Oi,Pi,Ri,Si]);
   },[zi,Ai,Ei,Ni,Oi,Pi,Ri,Si]);
  },[zi,Ai,Ei,Ni]);
 },[zi,Ai,Ei],"sat");
 $A(Li);
},[],"at Advgame.hs:178:1");
var $$Main_pickup=$f(1,function(pj){
 var qj=$t(function(){
  $$GHCziList_elem.J($$Main_zdfEqObject,pj,$$Main_pickupable1);
 },[pj],"lvl39");
 var rj=$t(function(){
  var sj=$t(function(){
   var tj=$t(function(){
    $M(pj,function(uj){
     switch(uj.g){
     case 1:
      $A($$Main$a1);break;
     case 2:
      $A($$Main$V);break;
     case 3:
      $A($$Main$W);break;
     case 4:
      $A($$Main$X);break;
     case 5:
      $A($$Main$Y);break;
     case 6:
      $A($$Main$Z);break;
     }
    },[]);
   },[pj],"sat");
   var vj=$d(2,[tj],"sat");
   var wj=$d(2,[vj,$$GHCziTypes_ZMZN],"sat");
   $$GHCziList_reverse1.J(wj,$$GHCziTypes_ZMZN);
  },[pj],"sat");
  $$TextziPrintf_uprintf.C([$$Main$i1,sj],function(xj){
   $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,xj);
  },[]);
 },[pj],"a23");
 var yj=$f(2,function(zj,Aj){
  $M(zj,function(Bj){
   var Cj=Bj.v[0],Dj=Bj.v[1],Ej=Bj.v[2],Fj=Bj.v[3];
   $M(Dj,function(Gj){
    var Hj=Gj.v[0],Ij=Gj.v[1],Jj=Gj.v[2],Kj=Gj.v[3];
    $$GHCziList_elem.C([$$Main_zdfEqObject,pj,Kj],function(Lj){
     switch(Lj.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$h1,$$GHCziTypes_True,Aj],function(Mj){
       var Nj=Mj[0];
       var Oj=$d(1,[$$Main_Continue,Bj],"sat");
       $r([Nj,Oj]);
      },[Bj]);break;
     case 2:
      $M(qj,function(Pj){
       switch(Pj.g){
       case 1:
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$h1,$$GHCziTypes_True,Aj],function(Qj){
	 var Rj=Qj[0];
	 var Sj=$d(1,[$$Main_Continue,Bj],"sat");
	 $r([Rj,Sj]);
	},[Bj]);break;
       case 2:
	$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,rj,$$GHCziTypes_True,Aj],function(Tj){
	 var Uj=Tj[0];
	 var Vj=$t(function(){
	  $$DataziList_deleteBy.J($$Main_zdfEqObjectzuzdczeze,pj,Kj);
	 },[pj,Kj],"a25");
	 var Wj=$d(1,[Hj,Ij,Jj,Vj],"newl");
	 var Xj=$t(function(){
	  $$Main_getLoc.J($$Main_InventoryRoom,Cj);
	 },[Cj],"inv");
	 var Yj=$t(function(){
	  $$DataziList_deleteBy.C([$$Main_zdfEqLocationzuzdczeze,Gj,Cj],function(Zj){
	   $$DataziList_deleteBy.J($$Main_zdfEqLocationzuzdczeze,Xj,Zj);
	  },[Xj]);
	 },[Cj,Xj,Gj],"sat");
	 var ak=$t(function(){
	  $M(Xj,function(bk){
	   var ck=bk.v[0],dk=bk.v[1],ek=bk.v[2],fk=bk.v[3];
	   var gk=$d(2,[pj,fk],"sat");
	   $R(1,[ck,dk,ek,gk],"Location");
	  },[pj]);
	 },[pj,Xj],"sat");
	 var hk=$d(2,[ak,Yj],"sat");
	 var ik=$d(2,[Wj,hk],"sat");
	 var jk=$d(1,[ik,Wj,Ej,Fj],"sat");
	 var kk=$d(1,[$$Main_Continue,jk],"sat");
	 $r([Uj,kk]);
	},[pj,Kj,Hj,Ij,Jj,Cj,Gj,Ej,Fj]);break;
       }
      },[pj,rj,Kj,Aj,Bj,Hj,Ij,Jj,Cj,Gj,Ej,Fj]);break;
     }
    },[pj,qj,rj,Kj,Aj,Bj,Hj,Ij,Jj,Cj,Gj,Ej,Fj]);
   },[pj,qj,rj,Aj,Bj,Cj,Ej,Fj]);
  },[pj,qj,rj,Aj]);
 },[pj,qj,rj],"sat");
 $A(yj);
},[],"at Advgame.hs:188:1");
var $$Main_gameAction=$f(10,function(uk,vk,wk,xk,yk,zk,Ak,Bk,Ck,Dk){
 var Ek=$t(function(){
  var Fk=$t(function(){
   $$Main_zdfShowObjectzuzdcshow.J(xk);
  },[xk],"sat");
  var Gk=$t(function(){
   $$Main_zdfShowObjectzuzdcshow.J(wk);
  },[wk],"sat");
  $$Main_describePath2.J(Ck,$$GHCziTypes_ZMZN,Gk,Fk);
 },[Ck,wk,xk],"a23");
 var Hk=$t(function(){
  $M(wk,function(Ik){
   switch(Ik.g){
   case 1:
    $M(yk,function(Jk){
     switch(Jk.g){
     case 1:
      $$Main_zdfEqObjectzuzdczeze.J(xk,zk);break;
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
    },[xk,zk]);break;
   case 2:
    $M(yk,function(Kk){
     switch(Kk.g){
     case 2:
      $$Main_zdfEqObjectzuzdczeze.J(xk,zk);break;
     default:
      $R(1,[],"False");
     }
    },[xk,zk]);break;
   case 3:
    $M(yk,function(Lk){
     switch(Lk.g){
     case 3:
      $$Main_zdfEqObjectzuzdczeze.J(xk,zk);break;
     default:
      $R(1,[],"False");
     }
    },[xk,zk]);break;
   case 4:
    $M(yk,function(Mk){
     switch(Mk.g){
     case 4:
      $$Main_zdfEqObjectzuzdczeze.J(xk,zk);break;
     default:
      $R(1,[],"False");
     }
    },[xk,zk]);break;
   case 5:
    $M(yk,function(Nk){
     switch(Nk.g){
     case 5:
      $$Main_zdfEqObjectzuzdczeze.J(xk,zk);break;
     default:
      $R(1,[],"False");
     }
    },[xk,zk]);break;
   case 6:
    $M(yk,function(Ok){
     switch(Ok.g){
     case 6:
      $$Main_zdfEqObjectzuzdczeze.J(xk,zk);break;
     default:
      $R(1,[],"False");
     }
    },[xk,zk]);break;
   }
  },[xk,yk,zk]);
 },[wk,xk,yk,zk],"lvl39");
 var Pk=$f(2,function(Qk,Rk){
  $$Main$l1.C([uk,Qk,Rk],function(Sk){
   var Tk=Sk[0],Uk=Sk[1];
   var Vk=$t(function(){
    $M(Uk,function(Wk){
     var Xk=Wk.v[1];
     $A(Xk);
    },[]);
   },[Uk],"eta1");
   var Yk=$f(2,function(Zk,al){
    $M(Uk,function(bl){
     var cl=bl.v[0];
     var dl=$t(function(){
      $M(al,function(el){
       var fl=el.v[1];
       $A(fl);
      },[]);
     },[al],"a27");
     var gl=$d(1,[$$GHCziTypes_False,dl],"lvl40");
     $$GHCziList_and.C([cl],function(hl){
      switch(hl.g){
      case 1:
       $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(il){
	var jl=il[0];
	$r([jl,gl]);
       },[gl]);break;
      case 2:
       $M(Vk,function(kl){
	var ll=kl.v[1];
	$M(ll,function(ml){
	 var nl=ml.v[0];
	 var ol=$f(1,function(pl){
	  $M(Hk,function(ql){
	   switch(ql.g){
	   case 1:
	    $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(rl){
	     var sl=rl[0];
	     $r([sl,gl]);
	    },[gl]);break;
	   case 2:
	    $M(al,function(tl){
	     var ul=tl.v[0],vl=tl.v[1];
	     $$GHCziList_and.C([ul],function(wl){
	      switch(wl.g){
	      case 1:
	       $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(xl){
		var yl=xl[0];
		var zl=$d(1,[$$GHCziTypes_False,vl],"sat");
		$r([yl,zl]);
	       },[vl]);break;
	      case 2:
	       Ak.C([vl,Zk],function(Al){
		var Bl=Al[0],Cl=Al[1];
		$$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Ek,$$GHCziTypes_True,Bl],function(Dl){
		 var El=Dl[0];
		 var Fl=$t(function(){
		  $M(Cl,function(Gl){
		   var Hl=Gl.v[1];
		   $A(Hl);
		  },[]);
		 },[Cl],"sat");
		 var Il=$d(1,[$$GHCziTypes_True,Fl],"sat");
		 $r([El,Il]);
		},[Cl]);
	       },[Ek]);break;
	      }
	     },[Ek,Dk,Zk,vl,Ak]);
	    },[Ek,Dk,Zk,Ak]);break;
	   }
	  },[Ek,al,gl,Dk,Zk,Ak]);
	 },[Ek,Hk,al,gl,Dk,Zk,Ak],"$w$j");
	 $M(nl,function(Jl){
	  switch(Jl.g){
	  case 1:
	   $M(vk,function(Kl){
	    switch(Kl.g){
	    case 1:
	     ol.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(Ll){
	      var Ml=Ll[0];
	      $r([Ml,gl]);
	     },[gl]);break;
	    case 3:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(Nl){
	      var Ol=Nl[0];
	      $r([Ol,gl]);
	     },[gl]);break;
	    case 4:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(Pl){
	      var Ql=Pl[0];
	      $r([Ql,gl]);
	     },[gl]);break;
	    }
	   },[Ek,Hk,al,gl,Dk,Zk,Ak,ol]);break;
	  case 2:
	   $M(vk,function(Rl){
	    switch(Rl.g){
	    case 2:
	     ol.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(Sl){
	      var Tl=Sl[0];
	      $r([Tl,gl]);
	     },[gl]);
	    }
	   },[Ek,Hk,al,gl,Dk,Zk,Ak,ol]);break;
	  case 3:
	   $M(vk,function(Ul){
	    switch(Ul.g){
	    case 3:
	     ol.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(Vl){
	      var Wl=Vl[0];
	      $r([Wl,gl]);
	     },[gl]);
	    }
	   },[Ek,Hk,al,gl,Dk,Zk,Ak,ol]);break;
	  case 4:
	   $M(vk,function(Xl){
	    switch(Xl.g){
	    case 4:
	     ol.J($$GHCziPrim_realWorldzh);break;
	    default:
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Dk,$$GHCziTypes_True,Zk],function(Yl){
	      var Zl=Yl[0];
	      $r([Zl,gl]);
	     },[gl]);
	    }
	   },[Ek,Hk,al,gl,Dk,Zk,Ak,ol]);break;
	  }
	 },[Ek,Hk,al,gl,Dk,Zk,Ak,ol,vk]);
	},[Ek,Hk,al,gl,Dk,Zk,Ak,vk]);
       },[Ek,Hk,al,gl,Dk,Zk,Ak,vk]);break;
      }
     },[Ek,Hk,Vk,al,gl,Dk,Zk,Ak,vk]);
    },[Ek,Hk,Vk,al,Dk,Zk,Ak,vk]);
   },[Ek,Hk,Uk,Vk,Dk,Ak,vk],"$j");
   $M(Bk,function(am){
    switch(am.g){
    case 1:
     var bm=$d(1,[$$Main$j1,Vk],"sat");
     Yk.J(Tk,bm);break;
    case 2:
     $$Main$k1.C([am,Vk,Tk],function(cm){
      var dm=cm[0],em=cm[1];
      Yk.J(dm,em);
     },[Ek,Hk,Uk,Vk,Dk,Ak,vk,Yk]);break;
    }
   },[Ek,Hk,Uk,Vk,Dk,Ak,vk,Yk,Tk]);
  },[Ek,Hk,Dk,Ak,vk,Bk]);
 },[Ek,Hk,uk,Dk,Ak,vk,Bk],"sat");
 $A(Pk);
},[],"at Advgame.hs:213:1");
var $$Main_dunk7=$D(2,function(){
 $r([$$Main_Bucket,$$GHCziTypes_ZMZN]);
},"in `main:Main'");
var $$Main_weld4=$D(2,function(){
 $r([$$Main_Chain,$$Main_dunk7]);
},"in `main:Main'");
var $$Main_weld3=$f(2,function(fm,gm){
 var hm=$t(function(){
  $M(fm,function(im){
   var jm=im.v[0],km=im.v[1],lm=im.v[3];
   $R(1,[jm,km,$$GHCziTypes_True,lm],"GS");
  },[]);
 },[fm],"sat");
 var mm=$d(1,[$$GHCziTuple_Z0T,hm],"sat");
 $r([gm,mm]);
},[],"in `main:Main'");
var $$Main_weld2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Welding the %s to the %s");
},[],"in `main:Main'");
var $$Main_weld1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("I can't weld like that");
},[],"in `main:Main'");
var $$Main_weld=$f(2,function(nm,om){
 var pm=$t(function(){
  $$Main_gameAction.J($$Main_weld4,$$Main_Attic,$$Main_Chain,$$Main_Bucket,nm,om,$$Main_weld3,$$GHCziTypes_ZMZN,$$Main_weld2,$$Main_weld1);
 },[nm,om],"a23");
 var qm=$f(2,function(rm,sm){
  pm.C([rm,sm],function(tm){
   var um=tm[0],vm=tm[1];
   var wm=$t(function(){
    $M(vm,function(xm){
     var ym=xm.v[1];
     $A(ym);
    },[]);
   },[vm],"sat");
   var zm=$d(1,[$$Main_Continue,wm],"sat");
   $r([um,zm]);
  },[]);
 },[pm],"sat");
 $A(qm);
},[],"at Advgame.hs:223:1");
var $$Main_dunk6=$D(2,function(){
 $r([$$Main_Chain,$$Main_dunk7]);
},"in `main:Main'");
var $$Main_dunk5=$f(2,function(Am,Bm){
 var Cm=$t(function(){
  $M(Am,function(Dm){
   var Em=Dm.v[0],Fm=Dm.v[1],Gm=Dm.v[2];
   $R(1,[Em,Fm,Gm,$$GHCziTypes_True],"GS");
  },[]);
 },[Am],"sat");
 var Hm=$d(1,[$$GHCziTuple_Z0T,Cm],"sat");
 $r([Bm,Hm]);
},[],"in `main:Main'");
var $$Main_dunk4=$f(2,function(Im,Jm){
 var Km=$t(function(){
  $M(Im,function(Lm){
   var Mm=Lm.v[2];
   $A(Mm);
  },[]);
 },[Im],"sat");
 var Nm=$d(1,[Km,Im],"sat");
 $r([Jm,Nm]);
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
var $$Main_dunk=$f(2,function(Om,Pm){
 var Qm=$t(function(){
  $$Main_gameAction.J($$Main_dunk6,$$Main_Garden,$$Main_Bucket,$$Main_Well,Om,Pm,$$Main_dunk5,$$Main_dunk3,$$Main_dunk2,$$Main_dunk1);
 },[Om,Pm],"a23");
 var Rm=$f(2,function(Sm,Tm){
  Qm.C([Sm,Tm],function(Um){
   var Vm=Um[0],Wm=Um[1];
   var Xm=$t(function(){
    $M(Wm,function(Ym){
     var Zm=Ym.v[1];
     $A(Zm);
    },[]);
   },[Wm],"sat");
   var an=$d(1,[$$Main_Continue,Xm],"sat");
   $r([Vm,an]);
  },[]);
 },[Qm],"sat");
 $A(Rm);
},[],"at Advgame.hs:229:1");
var $$Main_splash6=$f(2,function(bn,cn){
 var dn=$d(1,[$$GHCziTuple_Z0T,bn],"sat");
 $r([cn,dn]);
},[],"in `main:Main'");
var $$Main_splash5=$f(2,function(en,fn){
 var gn=$t(function(){
  $M(en,function(hn){
   var jn=hn.v[3];
   $A(jn);
  },[]);
 },[en],"sat");
 var kn=$d(1,[gn,en],"sat");
 $r([fn,kn]);
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
var $$Main_splash=$f(2,function(ln,mn){
 var nn=$t(function(){
  $$Main_gameAction.J($$Main_dunk7,$$Main_LivingRoom,$$Main_Bucket,$$Main_Wizzard,ln,mn,$$Main_splash6,$$Main_splash3,$$Main_splash2,$$Main_splash1);
 },[ln,mn],"a23");
 var on=$f(2,function(pn,qn){
  nn.C([pn,qn],function(rn){
   var sn=rn[0],tn=rn[1];
   $M(tn,function(un){
    var vn=un.v[0],wn=un.v[1];
    $M(vn,function(xn){
     switch(xn.g){
     case 1:
      var yn=$d(1,[$$Main_Continue,wn],"sat");
      $r([sn,yn]);break;
     case 2:
      var zn=$t(function(){
       $M(wn,function(An){
	var Bn=An.v[0];
	$$GHCziList_filter.C([$$Main_getInventory2,Bn],function(Cn){
	 switch(Cn.g){
	 case 1:
	  $A($$GHCziList_badHead);break;
	 case 2:
	  var Dn=Cn.v[0];
	  $M(Dn,function(En){
	   var Fn=En.v[3];
	   $$GHCziList_elem.C([$$Main_zdfEqObject,$$Main_Frog,Fn],function(Gn){
	    switch(Gn.g){
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
      },[wn],"sat");
      var Hn=$d(1,[zn,wn],"sat");
      $r([sn,Hn]);break;
     }
    },[sn,wn]);
   },[sn]);
  },[]);
 },[nn],"sat");
 $A(on);
},[],"at Advgame.hs:234:1");
var $$Main_main4=$f(2,function(In,Jn){
 $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$n1,$$GHCziTypes_False,Jn],function(Kn){
  var Ln=Kn[0];
  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandle_hFlush2,$$GHCziIOziHandleziFD_stdout,$$GHCziIOziHandleziInternals_flushWriteBuffer1,Ln],function(Mn){
   var Nn=Mn[0];
   $$GHCziIOziHandleziInternals_wantReadableHandlezu1.C([$$GHCziIOziHandleziText_hGetLine3,$$GHCziIOziHandleziFD_stdin,$$GHCziIOziHandleziText_hGetLine2,Nn],function(On){
    var Pn=On[0],Qn=On[1];
    var Rn=$f(1,function(Sn){
     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$m1,$$GHCziTypes_True,Pn],function(Tn){
      var Un=Tn[0];
      $$Main_main4.J(In,Un);
     },[In]);
    },[Pn,In],"$j");
    var Vn=$t(function(){
     $$DataziList_words.C([Qn],function(Wn){
      $$GHCziBase_map.C([$$Main_capitalizze,Wn],function(Xn){
       switch(Xn.g){
       case 1:
	$R(1,[],"[]");break;
       case 2:
	var Yn=Xn.v[0],Zn=Xn.v[1];
	$M(Zn,function(ao){
	 switch(ao.g){
	 case 1:
	  $A(Yn);break;
	 case 2:
	  var bo=ao.v[0],co=ao.v[1];
	  var eo=$t(function(){
	   $$DataziList_unwordszuzdsunwords.J(bo,co);
	  },[bo,co],"sat");
	  var fo=$d(2,[$$DataziList_unwords1,eo],"sat");
	  $$GHCziBase_zpzp.J(Yn,fo);break;
	 }
	},[Yn]);break;
       }
      },[]);
     },[]);
    },[Qn],"sat");
    $$TextziParserCombinatorsziReadP_run.C([$$Main_maybeRead1,Vn],function(go){
     switch(go.g){
     case 1:
      Rn.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var ho=go.v[0],io=go.v[1];
      $M(ho,function(jo){
       var ko=jo.v[0],lo=jo.v[1];
       $M(lo,function(mo){
	switch(mo.g){
	case 1:
	 $M(io,function(no){
	  switch(no.g){
	  case 1:
	   $M(ko,function(oo){
	    switch(oo.g){
	    case 1:
	     var po=oo.v[0];
	     $$Main_walk.C([po,In,Pn],function(qo){
	      var ro=qo[0],so=qo[1];
	      $M(so,function(to){
	       var uo=to.v[0],vo=to.v[1];
	       $M(uo,function(wo){
		switch(wo.g){
		case 3:
		 $$Main_main4.J(vo,ro);break;
		default:
		 $r([ro,to]);
		}
	       },[ro,to,vo]);
	      },[ro]);
	     },[]);break;
	    case 2:
	     var xo=oo.v[0];
	     $$Main_pickup.C([xo,In,Pn],function(yo){
	      var zo=yo[0],Ao=yo[1];
	      $M(Ao,function(Bo){
	       var Co=Bo.v[0],Do=Bo.v[1];
	       $M(Co,function(Eo){
		switch(Eo.g){
		case 3:
		 $$Main_main4.J(Do,zo);break;
		default:
		 $r([zo,Bo]);
		}
	       },[zo,Bo,Do]);
	      },[zo]);
	     },[]);break;
	    case 3:
	     var Fo=oo.v[0],Go=oo.v[1];
	     $$Main_splash.C([Fo,Go,In,Pn],function(Ho){
	      var Io=Ho[0],Jo=Ho[1];
	      $M(Jo,function(Ko){
	       var Lo=Ko.v[0],Mo=Ko.v[1];
	       $M(Lo,function(No){
		switch(No.g){
		case 3:
		 $$Main_main4.J(Mo,Io);break;
		default:
		 $r([Io,Ko]);
		}
	       },[Io,Ko,Mo]);
	      },[Io]);
	     },[]);break;
	    case 4:
	     var Oo=$t(function(){
	      $M(In,function(Po){
	       var Qo=Po.v[0];
	       $$GHCziList_filter.C([$$Main_getInventory2,Qo],function(Ro){
		switch(Ro.g){
		case 1:
		 $A($$GHCziList_badHead);break;
		case 2:
		 var So=Ro.v[0];
		 $M(So,function(To){
		  var Uo=To.v[3];
		  $$Main_zdfShowObjectzuzdcshowList.J(Uo,$$GHCziTypes_ZMZN);
		 },[]);break;
		}
	       },[]);
	      },[]);
	     },[In],"sat");
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,Oo,$$GHCziTypes_True,Pn],function(Vo){
	      var Wo=Vo[0];
	      $$Main_main4.J(In,Wo);
	     },[In]);break;
	    case 5:
	     var Xo=$t(function(){
	      $M(In,function(Yo){
	       var Zo=Yo.v[1];
	       $A(Zo);
	      },[]);
	     },[In],"loc");
	     var ap=$t(function(){
	      $M(Xo,function(bp){
	       var cp=bp.v[1];
	       $A(cp);
	      },[]);
	     },[Xo],"sat");
	     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,ap,$$GHCziTypes_True,Pn],function(dp){
	      var ep=dp[0];
	      $M(Xo,function(fp){
	       var gp=fp.v[2],hp=fp.v[3];
	       $$Main_describePaths2.C([gp,ep],function(ip){
		var jp=ip[0];
		$$Main_describeFloor2.C([hp,jp],function(kp){
		 var lp=kp[0];
		 $$Main_main4.J(In,lp);
		},[In]);
	       },[In,hp]);
	      },[In,ep]);
	     },[In,Xo]);break;
	    case 6:
	     var mp=oo.v[0],np=oo.v[1];
	     $$Main_dunk.C([mp,np,In,Pn],function(op){
	      var pp=op[0],qp=op[1];
	      $M(qp,function(rp){
	       var sp=rp.v[0],tp=rp.v[1];
	       $M(sp,function(up){
		switch(up.g){
		case 3:
		 $$Main_main4.J(tp,pp);break;
		default:
		 $r([pp,rp]);
		}
	       },[pp,rp,tp]);
	      },[pp]);
	     },[]);break;
	    case 7:
	     var vp=oo.v[0],wp=oo.v[1];
	     $$Main_weld.C([vp,wp,In,Pn],function(xp){
	      var yp=xp[0],zp=xp[1];
	      $M(zp,function(Ap){
	       var Bp=Ap.v[0],Cp=Ap.v[1];
	       $M(Bp,function(Dp){
		switch(Dp.g){
		case 3:
		 $$Main_main4.J(Cp,yp);break;
		default:
		 $r([yp,Ap]);
		}
	       },[yp,Ap,Cp]);
	      },[yp]);
	     },[]);break;
	    case 8:
	     var Ep=$d(1,[$$Main_QuitGame,In],"sat");
	     $r([Pn,Ep]);break;
	    case 9:
	     $$Main_help24.C([$$Main_help2,In,Pn],function(Fp){
	      var Gp=Fp[0],Hp=Fp[1];
	      var Ip=$t(function(){
	       $M(Hp,function(Jp){
		var Kp=Jp.v[1];
		$A(Kp);
	       },[]);
	      },[Hp],"sat");
	      $$Main_main4.J(Ip,Gp);
	     },[]);break;
	    }
	   },[Pn,In]);break;
	  case 2:
	   Rn.J($$GHCziPrim_realWorldzh);break;
	  }
	 },[Pn,In,Rn,ko]);break;
	case 2:
	 Rn.J($$GHCziPrim_realWorldzh);break;
	}
       },[Pn,In,Rn,io,ko]);
      },[Pn,In,Rn,io]);break;
     }
    },[Pn,In,Rn]);
   },[In]);
  },[In]);
 },[In]);
},[],"in `main:Main'");
var $$Main_main3=$t(function(){
 $$ControlziExceptionziBase_patError.J("Advgame.hs:(289,5)-(292,37)|case");
},[],"in `main:Main'");
var $$Main_main2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Goodbye!");
},[],"in `main:Main'");
var $$Main_main1=$f(1,function(Lp){
 $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main_livingRoom8,$$GHCziTypes_True,Lp],function(Mp){
  var Np=Mp[0];
  $$Main_describePaths2.C([$$Main_livingRoom4,Np],function(Op){
   var Pp=Op[0];
   $$Main_describeFloor2.C([$$Main_livingRoom1,Pp],function(Qp){
    var Rp=Qp[0];
    $$Main_main4.C([$$Main_initialMap,Rp],function(Sp){
     var Tp=Sp[0],Up=Sp[1];
     $M(Up,function(Vp){
      var Wp=Vp.v[0];
      $M(Wp,function(Xp){
       switch(Xp.g){
       case 1:
	$$SystemziIO_putStrLn1.J($$Main_winString,Tp);break;
       case 2:
	$$SystemziIO_putStrLn1.J($$Main_loseString,Tp);break;
       case 3:
	$A($$Main_main3);break;
       case 4:
	$$GHCziIOziHandleziText_hPutStr2.J($$GHCziIOziHandleziFD_stdout,$$Main_main2,$$GHCziTypes_True,Tp);break;
       }
      },[Tp]);
     },[Tp]);
    },[]);
   },[]);
  },[]);
 },[]);
},[],"in `main:Main'");
var $$$Main_main=$f(1,function(j){
 $$Main_main1.J(j);
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
var $$Main$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Walk");
},"lvl");
var $$Main$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pickup");
},"lvl1");
var $$Main$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Splash");
},"lvl2");
var $$Main$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Dunk");
},"lvl3");
var $$Main$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Weld");
},"lvl4");
var $$Main$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Inventory");
},"a");
var $$Main$g=$F(2,function(Zp,aq){
 aq.J($$Main_Inventory);
},"a1");
var $$Main$h=$D(1,function(){
 $r([$$Main$f,$$Main$g]);
},"a2");
var $$Main$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Look");
},"a3");
var $$Main$j=$F(2,function(bq,cq){
 cq.J($$Main_Look);
},"a4");
var $$Main$k=$D(1,function(){
 $r([$$Main$i,$$Main$j]);
},"a5");
var $$Main$l=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Quit");
},"a6");
var $$Main$m=$F(2,function(dq,eq){
 eq.J($$Main_Quit);
},"a7");
var $$Main$n=$D(1,function(){
 $r([$$Main$l,$$Main$m]);
},"a8");
var $$Main$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Help");
},"a9");
var $$Main$p=$F(2,function(fq,gq){
 gq.J($$Main_Help);
},"a10");
var $$Main$q=$D(1,function(){
 $r([$$Main$o,$$Main$p]);
},"a11");
var $$Main$r=$D(2,function(){
 $r([$$Main$q,$$GHCziTypes_ZMZN]);
},"a12");
var $$Main$s=$D(2,function(){
 $r([$$Main$n,$$Main$r]);
},"a13");
var $$Main$t=$D(2,function(){
 $r([$$Main$k,$$Main$s]);
},"a14");
var $$Main$u=$D(2,function(){
 $r([$$Main$h,$$Main$t]);
},"a15");
var $$Main$w=$D(1,function(){
 $r([goog.math.Long.fromBits(11,0)]);
},"lvl5");
var $$Main$x=$F(2,function(kq,lq){
 var mq=$t(function(){
  var nq=kq.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(nq.g){
  case 1:
   $R(3,[],"Fail");break;
  case 2:
   var oq=$t(function(){
    var pq=$f(1,function(qq){
     var rq=$f(1,function(sq){
      var tq=$d(7,[qq,sq],"sat");
      lq.J(tq);
     },[qq,lq],"sat");
     $$GHCziRead_parens1.J($$Main_zdfReadObject3,$$Main$w,rq);
    },[lq],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadObject3,$$Main$w,pq);
   },[lq],"lvl39");
   var uq=$f(1,function(vq){
    $M(vq,function(wq){
     switch(wq.g){
     case 4:
      var xq=wq.v[0];
      $$GHCziBase_eqString.C([xq,$$Main$e],function(yq){
       switch(yq.g){
       case 1:
	$R(3,[],"Fail");break;
       case 2:
	$A(oq);break;
       }
      },[oq]);break;
     default:
      $R(3,[],"Fail");
     }
    },[oq]);
   },[oq],"k");
   var zq=$t(function(){
    $$TextziReadziLex_hsLex2.J(uq);
   },[uq],"lvl99");
   var Aq=$f(1,function(Bq){
    $A(zq);
   },[zq],"k1");
   var Cq=$f(1,function(Dq){
    $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(Dq,Aq);
   },[Aq],"sat");
   $R(2,[Cq],"Look");break;
  }
 },[kq,lq],"a23");
 var Eq=kq.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(Eq.g){
 case 1:
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,mq);break;
 case 2:
  var Fq=$t(function(){
   var Gq=$f(1,function(Hq){
    var Iq=$f(1,function(Jq){
     var Kq=$d(6,[Hq,Jq],"sat");
     lq.J(Kq);
    },[lq,Hq],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadObject3,$$Main$w,Iq);
   },[lq],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadObject3,$$Main$w,Gq);
  },[lq],"lvl39");
  var Lq=$f(1,function(Mq){
   $M(Mq,function(Nq){
    switch(Nq.g){
    case 4:
     var Oq=Nq.v[0];
     $$GHCziBase_eqString.C([Oq,$$Main$d],function(Pq){
      switch(Pq.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(Fq);break;
      }
     },[Fq]);break;
    default:
     $R(3,[],"Fail");
    }
   },[Fq]);
  },[Fq],"k");
  var Qq=$t(function(){
   $$TextziReadziLex_hsLex2.J(Lq);
  },[Lq],"lvl99");
  var Rq=$f(1,function(Sq){
   $A(Qq);
  },[Qq],"k1");
  var Tq=$f(1,function(Uq){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(Uq,Rq);
  },[Rq],"sat");
  var Vq=$d(2,[Tq],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Vq,mq);break;
 }
},"$wa");
var $$Main$y=$F(2,function(Wq,Xq){
 var Yq=Wq.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(Yq.g){
 case 1:
  var Zq=$t(function(){
   $$Main$x.J(Wq,Xq);
  },[Wq,Xq],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,Zq);break;
 case 2:
  var ar=$t(function(){
   var br=$f(1,function(cr){
    var dr=$f(1,function(er){
     var fr=$d(3,[cr,er],"sat");
     Xq.J(fr);
    },[Xq,cr],"sat");
    $$GHCziRead_parens1.J($$Main_zdfReadObject3,$$Main$w,dr);
   },[Xq],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadObject3,$$Main$w,br);
  },[Xq],"lvl39");
  var gr=$f(1,function(hr){
   $M(hr,function(ir){
    switch(ir.g){
    case 4:
     var jr=ir.v[0];
     $$GHCziBase_eqString.C([jr,$$Main$c],function(kr){
      switch(kr.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(ar);break;
      }
     },[ar]);break;
    default:
     $R(3,[],"Fail");
    }
   },[ar]);
  },[ar],"k");
  var lr=$t(function(){
   $$TextziReadziLex_hsLex2.J(gr);
  },[gr],"lvl99");
  var mr=$f(1,function(nr){
   $A(lr);
  },[lr],"k1");
  var or=$t(function(){
   $$Main$x.J(Wq,Xq);
  },[Wq,Xq],"sat");
  var pr=$f(1,function(qr){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(qr,mr);
  },[mr],"sat");
  var rr=$d(2,[pr],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(rr,or);break;
 }
},"$wa1");
var $$Main$z=$F(2,function(sr,tr){
 var ur=sr.lessThanOrEqual(goog.math.Long.fromBits(10,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(ur.g){
 case 1:
  var vr=$t(function(){
   $$Main$y.J(sr,tr);
  },[sr,tr],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J($$TextziParserCombinatorsziReadP_Fail,vr);break;
 case 2:
  var wr=$t(function(){
   var xr=$f(1,function(yr){
    var zr=$d(2,[yr],"sat");
    tr.J(zr);
   },[tr],"sat");
   $$GHCziRead_parens1.J($$Main_zdfReadObject3,$$Main$w,xr);
  },[tr],"lvl39");
  var Ar=$f(1,function(Br){
   $M(Br,function(Cr){
    switch(Cr.g){
    case 4:
     var Dr=Cr.v[0];
     $$GHCziBase_eqString.C([Dr,$$Main$b],function(Er){
      switch(Er.g){
      case 1:
       $R(3,[],"Fail");break;
      case 2:
       $A(wr);break;
      }
     },[wr]);break;
    default:
     $R(3,[],"Fail");
    }
   },[wr]);
  },[wr],"k");
  var Fr=$t(function(){
   $$TextziReadziLex_hsLex2.J(Ar);
  },[Ar],"lvl99");
  var Gr=$f(1,function(Hr){
   $A(Fr);
  },[Fr],"k1");
  var Ir=$t(function(){
   $$Main$y.J(sr,tr);
  },[sr,tr],"sat");
  var Jr=$f(1,function(Kr){
   $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(Kr,Gr);
  },[Gr],"sat");
  var Lr=$d(2,[Jr],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Lr,Ir);break;
 }
},"$wa2");
var $$Main$U=$T(function(){
 $$GHCziCString_unpackCStringzh.J("You see a %s on the floor.");
},"fmts");
var $$Main$V=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadObject24);
},"lvl26");
var $$Main$W=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadObject21);
},"lvl27");
var $$Main$X=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadObject18);
},"lvl28");
var $$Main$Y=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadObject15);
},"lvl29");
var $$Main$Z=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadObject12);
},"lvl30");
var $$Main$a1=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadObject27);
},"lvl31");
var $$Main$b1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("I can't walk that way");
},"a17");
var $$Main$c1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Walking %s ");
},"lvl32");
var $$Main$d1=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadDirection19);
},"lvl33");
var $$Main$e1=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadDirection16);
},"lvl34");
var $$Main$f1=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadDirection13);
},"lvl35");
var $$Main$g1=$T(function(){
 $$GHCziBase_map.J($$TextziPrintf_zdfIsCharCharzuzdcfromChar,$$Main_zdfReadDirection10);
},"lvl36");
var $$Main$h1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("I can't pick that up");
},"a18");
var $$Main$i1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Picking up %s");
},"lvl37");
var $$Main$j1=$D(2,function(){
 $r([$$GHCziTypes_True,$$GHCziTypes_ZMZN]);
},"a19");
var $$Main$k1=$F(3,function(Mr,Nr,Or){
 $M(Mr,function(Pr){
  switch(Pr.g){
  case 1:
   var Qr=$d(1,[$$GHCziTypes_ZMZN,Nr],"sat");
   $r([Or,Qr]);break;
  case 2:
   var Rr=Pr.v[0],Sr=Pr.v[1];
   Rr.C([Nr,Or],function(Tr){
    var Ur=Tr[0],Vr=Tr[1];
    var Wr=$t(function(){
     $M(Vr,function(Xr){
      var Yr=Xr.v[1];
      $A(Yr);
     },[]);
    },[Vr],"sat");
    $$Main$k1.C([Sr,Wr,Ur],function(Zr){
     var as=Zr[0],bs=Zr[1];
     var cs=$t(function(){
      $M(bs,function(ds){
       var es=ds.v[1];
       $A(es);
      },[]);
     },[bs],"sat");
     var fs=$t(function(){
      $M(bs,function(gs){
       var hs=gs.v[0];
       $A(hs);
      },[]);
     },[bs],"sat");
     var is=$t(function(){
      $M(Vr,function(js){
       var ks=js.v[0];
       $A(ks);
      },[]);
     },[Vr],"sat");
     var ls=$d(2,[is,fs],"sat");
     var ms=$d(1,[ls,cs],"sat");
     $r([as,ms]);
    },[Vr]);
   },[Sr]);break;
  }
 },[Or,Nr]);
},"a20");
var $$Main$l1=$F(3,function(ns,os,ps){
 $M(ns,function(qs){
  switch(qs.g){
  case 1:
   var rs=$d(1,[$$GHCziTypes_ZMZN,os],"sat");
   $r([ps,rs]);break;
  case 2:
   var ss=qs.v[0],ts=qs.v[1];
   $$Main$l1.C([ts,os,ps],function(us){
    var vs=us[0],ws=us[1];
    var xs=$t(function(){
     $M(ws,function(ys){
      var zs=ys.v[1];
      $A(zs);
     },[]);
    },[ws],"sat");
    var As=$t(function(){
     $M(ws,function(Bs){
      var Cs=Bs.v[0];
      $A(Cs);
     },[]);
    },[ws],"sat");
    var Ds=$t(function(){
     $M(os,function(Es){
      var Fs=Es.v[0];
      $$GHCziList_filter.C([$$Main_getInventory2,Fs],function(Gs){
       switch(Gs.g){
       case 1:
	$A($$GHCziList_badHead);break;
       case 2:
	var Hs=Gs.v[0];
	$M(Hs,function(Is){
	 var Js=Is.v[3];
	 $$GHCziList_elem.J($$Main_zdfEqObject,ss,Js);
	},[ss]);break;
       }
      },[ss]);
     },[ss]);
    },[os,ss],"sat");
    var Ks=$d(2,[Ds,As],"sat");
    var Ls=$d(1,[Ks,xs],"sat");
    $r([vs,Ls]);
   },[os,ss]);break;
  }
 },[ps,os]);
},"a21");
var $$Main$m1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Invalid command!");
},"a22");
var $$Main$n1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("> ");
},"lvl38");
//@ sourceURL=hs1.js
