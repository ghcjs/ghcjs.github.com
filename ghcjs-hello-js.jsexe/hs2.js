//$$Main_main2
//$$Main_tryHamlet
//$$Main_tryHamlet1
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

var $$GHCziException_toException=$f(1,function(g){
 $M(g,function(h){
  var i=h.v[2];
  $A(i);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:141:5");

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

var $$GHCziIOziException_userError=$f(1,function(s){
 $R(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_UserError,$$GHCziTypes_ZMZN,s,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],"IOError");
},[],"at libraries/base/GHC/IO/Exception.hs:287:1");
var $$GHCziIOziException_zdfShowArrayException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J(": \x00");
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
   $$GHCziCString_unpackAppendCStringzh.J("[]\x00",H4);break;
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
var $$GHCziIOziException_zdfExceptionArrayExceptionzuds=$t(function(){
 $$GHCziCString_unpackCStringzh.J("base\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionArrayExceptionzuds1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.Exception\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOExceptionzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("IOException\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOExceptionzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(4053623282,1685460941),goog.math.Long.fromBits(3693590983,2507416641),$$GHCziIOziException_zdfExceptionArrayExceptionzuds,$$GHCziIOziException_zdfExceptionArrayExceptionzuds1,$$GHCziIOziException_zdfExceptionIOExceptionzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOException1=$D(1,function(){
 $r([goog.math.Long.fromBits(4053623282,1685460941),goog.math.Long.fromBits(3693590983,2507416641),$$GHCziIOziException_zdfExceptionIOExceptionzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOExceptionzuzdctypeOf=$f(1,function(Oa){
 $A($$GHCziIOziException_zdfExceptionIOException1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOExceptionzuzdcfromException=$f(1,function(Pa){
 $M(Pa,function(Qa){
  var Ra=Qa.v[0],Sa=Qa.v[1];
  $$GHCziException_zdp1Exception.C([Ra],function(Ta){
   $$DataziTypeable_cast.J(Ta,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctypeOf,Sa);
  },[Sa]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionIOException=$D(1,function(){
 $r([$$GHCziIOziException_zdfExceptionIOExceptionzuzdctypeOf,$$GHCziIOziException_zdfShowIOException,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException,$$GHCziIOziException_zdfExceptionIOExceptionzuzdcfromException]);
},"at libraries/base/GHC/IO/Exception.hs:221:10");
var $$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException=$f(1,function(t){
 $R(1,[$$GHCziIOziException_zdfExceptionIOException,t],"SomeException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfxExceptionIOException=$t(function(){
 $A($$GHCziIOziException_zdfExceptionIOException);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_UserError=$D(8,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:237:5");
var $$GHCziIOziException$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("already exists\x00");
},"lvl");
var $$GHCziIOziException$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("does not exist\x00");
},"lvl1");
var $$GHCziIOziException$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("resource busy\x00");
},"lvl2");
var $$GHCziIOziException$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("resource exhausted\x00");
},"lvl3");
var $$GHCziIOziException$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("end of file\x00");
},"lvl4");
var $$GHCziIOziException$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("illegal operation\x00");
},"lvl5");
var $$GHCziIOziException$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("permission denied\x00");
},"lvl6");
var $$GHCziIOziException$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("user error\x00");
},"lvl7");
var $$GHCziIOziException$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("unsatisified constraints\x00");
},"lvl8");
var $$GHCziIOziException$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("system error\x00");
},"lvl9");
var $$GHCziIOziException$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("protocol error\x00");
},"lvl10");
var $$GHCziIOziException$l=$T(function(){
 $$GHCziCString_unpackCStringzh.J("failed\x00");
},"lvl11");
var $$GHCziIOziException$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("invalid argument\x00");
},"lvl12");
var $$GHCziIOziException$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("inappropriate type\x00");
},"lvl13");
var $$GHCziIOziException$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("hardware fault\x00");
},"lvl14");
var $$GHCziIOziException$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("unsupported operation\x00");
},"lvl15");
var $$GHCziIOziException$q=$T(function(){
 $$GHCziCString_unpackCStringzh.J("timeout\x00");
},"lvl16");
var $$GHCziIOziException$r=$T(function(){
 $$GHCziCString_unpackCStringzh.J("resource vanished\x00");
},"lvl17");
var $$GHCziIOziException$s=$T(function(){
 $$GHCziCString_unpackCStringzh.J("interrupted\x00");
},"lvl18");
var $$GHCziIOziException$t=$T(function(){
 $$GHCziCString_unpackCStringzh.J(" (\x00");
},"lvl19");
var $$GHCziIOziException$u=$D(1,function(){
 $r([")"]);
},"lvl20");

var $$GHCziIOziHandleziTypes_showHandle2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("{handle: \x00");
},[],"in `base:GHC.IO.Handle.Types'");
var $$GHCziIOziHandleziTypes_showHandle1=$D(1,function(){
 $r(["}"]);
},"in `base:GHC.IO.Handle.Types'");

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

var $$GHCziIntWord64_intToInt64zh=$f(1,function(C2){
 var $ff=hs_intToInt64(C2);
 var D2=[$$GHCziPrim_realWorldzh,$ff];
 var E2=D2[1];
 $A(E2);
},[],"at libraries/ghc-prim/GHC/IntWord64.hs:67:50");

var $$GHCziIntegerziGMPziPrim_integerToInt64zh=$f(2,function(p,q){
 var $ff=hs_integerToInt64(p,q);
 var r=[$$GHCziPrim_realWorldzh,$ff];
 var s=r[1];
 $A(s);
},[],"at libraries/integer-gmp/GHC/Integer/GMP/Prim.hs:180:5");

var $$GHCziIntegerziType_int64ToInteger=$f(1,function(Je){
 var $ff=hs_intToInt64(2147483647);
 var Ke=[$$GHCziPrim_realWorldzh,$ff];
 var Le=Ke[1];
 var $ff=hs_leInt64(Je,Le);
 var Me=[$$GHCziPrim_realWorldzh,$ff];
 var Ne=Me[1];
 $M(Ne,function(Oe){
  switch(Oe){
  case 0:
   var Ze=integer_cmm_int64ToIntegerzh(Je);
   var af=Ze[0],bf=Ze[1];
   $R(2,[af,bf],"J#");break;
  default:
   var $ff=hs_intToInt64( -2147483648);
   var Pe=[$$GHCziPrim_realWorldzh,$ff];
   var Qe=Pe[1];
   var $ff=hs_geInt64(Je,Qe);
   var Re=[$$GHCziPrim_realWorldzh,$ff];
   var Se=Re[1];
   $M(Se,function(Te){
    switch(Te){
    case 0:
     var We=integer_cmm_int64ToIntegerzh(Je);
     var Xe=We[0],Ye=We[1];
     $R(2,[Xe,Ye],"J#");break;
    default:
     var $ff=hs_int64ToInt(Je);
     var Ue=[$$GHCziPrim_realWorldzh,$ff];
     var Ve=Ue[1];
     $$GHCziIntegerziType_smallInteger.J(Ve);
    }
   },[Je]);
  }
 },[Je]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:123:1");
var $$GHCziIntegerziType_integerToInt64=$f(1,function(cf){
 $M(cf,function(df){
  switch(df.g){
  case 1:
   var ef=df.v[0];
   $$GHCziIntWord64_intToInt64zh.J(ef);break;
  case 2:
   var ff=df.v[0],gf=df.v[1];
   $$GHCziIntegerziGMPziPrim_integerToInt64zh.J(ff,gf);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:118:1");

//@ sourceURL=hs2.js
