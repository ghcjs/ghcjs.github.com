//$$Main_main2
var $$ControlziExceptionziBase_finally2=$f(3,function(x1,y1,z1){
 x1.C([z1],function(A1){
  var B1=A1[0];
  $r($hs_raiseIOzh(y1,B1));
 },[y1]);
},[],"in `base:Control.Exception.Base'");

var $$DataziTypeableziInternal_zdfTypeableZLZRzupkg=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ghc-prim\x00");
},[],"at libraries/base/Data/Typeable/Internal.hs:175:10");
var $$DataziTypeableziInternal_zdfTypeable1IOzumodl=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Types\x00");
},[],"at libraries/base/Data/Typeable/Internal.hs:175:14");
var $$DataziTypeableziInternal_typeOfDefault=$f(2,function(d1,e1){
 var f1=$t(function(){
  d1.C([$$GHCziErr_undefined],function(g1){
   var h1=g1.v[0],i1=g1.v[1],j1=g1.v[2],k1=g1.v[3];
   var l1=$t(function(){
    e1.J($$GHCziErr_undefined);
   },[e1],"arg_tr");
   var m1=$t(function(){
    $M(l1,function(n1){
     var o1=n1.v[0],p1=n1.v[1];
     $R(1,[o1,p1],"Fingerprint");
    },[]);
   },[l1],"sat");
   var q1=$d(2,[m1,$$GHCziTypes_ZMZN],"sat");
   var r1=$d(1,[h1,i1],"sat");
   var s1=$d(2,[r1,q1],"sat");
   $$GHCziFingerprint_fingerprintFingerprints.C([s1],function(t1){
    var u1=t1.v[0],v1=t1.v[1];
    var w1=$t(function(){
     var x1=$d(2,[l1,$$GHCziTypes_ZMZN],"sat");
     $$GHCziBase_zpzp.J(k1,x1);
    },[l1,k1],"sat");
    $R(1,[u1,v1,j1,w1],"TypeRep");
   },[l1,j1,k1]);
  },[e1]);
 },[d1,e1],"rep");
 var y1=$f(1,function(z1){
  $A(f1);
 },[f1],"sat");
 $A(y1);
},[],"at libraries/base/Data/Typeable/Internal.hs:231:1");
var $$DataziTypeableziInternal_zdfTypeableZLZR4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Tuple\x00");
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeableZLZR3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("()\x00");
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeableZLZR2=$D(1,function(){
 $r([goog.math.Long.fromBits(2170319554,3688774321),goog.math.Long.fromBits(26914641,3196943984),$$DataziTypeableziInternal_zdfTypeableZLZRzupkg,$$DataziTypeableziInternal_zdfTypeableZLZR4,$$DataziTypeableziInternal_zdfTypeableZLZR3]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeableZLZR1=$D(1,function(){
 $r([goog.math.Long.fromBits(2170319554,3688774321),goog.math.Long.fromBits(26914641,3196943984),$$DataziTypeableziInternal_zdfTypeableZLZR2,$$GHCziTypes_ZMZN]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeableZLZRzuzdctypeOf=$f(1,function(h2){
 $A($$DataziTypeableziInternal_zdfTypeableZLZR1);
},[],"at libraries/base/Data/Typeable/Internal.hs:218:3");
var $$DataziTypeableziInternal_zdfTypeable1IO3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("IO\x00");
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IO2=$D(1,function(){
 $r([goog.math.Long.fromBits(1456544454,4198540223),goog.math.Long.fromBits(3588501173,645407194),$$DataziTypeableziInternal_zdfTypeableZLZRzupkg,$$DataziTypeableziInternal_zdfTypeable1IOzumodl,$$DataziTypeableziInternal_zdfTypeable1IO3]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IO1=$D(1,function(){
 $r([goog.math.Long.fromBits(1456544454,4198540223),goog.math.Long.fromBits(3588501173,645407194),$$DataziTypeableziInternal_zdfTypeable1IO2,$$GHCziTypes_ZMZN]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IOzuzdctypeOf1=$f(1,function(Wf){
 $A($$DataziTypeableziInternal_zdfTypeable1IO1);
},[],"at libraries/base/Data/Typeable/Internal.hs:226:3");

var $$ForeignziCziError_eBADF1=$D(1,function(){
 $r([9]);
},"in `base:Foreign.C.Error'");
var $$ForeignziCziError_errnoToIOError=$f(4,function(B,C,D,E){
 var F=$f(1,function(G){
  var W=$hs_noDuplicatezh(G);
  $M(C,function(H){
   var I=H.v[0];
   var $ff=strerror(I);
   var J=[W,$ff];
   var K=J[0],L=J[1];
   $$GHCziIOziEncoding_getForeignEncoding.C([K],function(M){
    var N=M[0],O=M[1];
    $$GHCziForeign_zdwa.C([O,L,N],function(P){
     var Q=P[0],R=P[1];
     var S=$d(2,[H],"sat");
     var T=$t(function(){
      $M(I,function(U){
       switch(U){
       case 1:
	$R(7,[],"PermissionDenied");break;
       case 2:
	$R(2,[],"NoSuchThing");break;
       case 3:
	$R(2,[],"NoSuchThing");break;
       case 4:
	$R(19,[],"Interrupted");break;
       case 5:
	$R(15,[],"HardwareFault");break;
       case 6:
	$R(2,[],"NoSuchThing");break;
       case 7:
	$R(4,[],"ResourceExhausted");break;
       case 8:
	$R(13,[],"InvalidArgument");break;
       case 9:
	$R(13,[],"InvalidArgument");break;
       case 10:
	$R(2,[],"NoSuchThing");break;
       case 11:
	$R(3,[],"ResourceBusy");break;
       case 12:
	$R(4,[],"ResourceExhausted");break;
       case 13:
	$R(7,[],"PermissionDenied");break;
       case 15:
	$R(13,[],"InvalidArgument");break;
       case 16:
	$R(3,[],"ResourceBusy");break;
       case 17:
	$R(1,[],"AlreadyExists");break;
       case 18:
	$R(16,[],"UnsupportedOperation");break;
       case 19:
	$R(16,[],"UnsupportedOperation");break;
       case 20:
	$R(14,[],"InappropriateType");break;
       case 21:
	$R(14,[],"InappropriateType");break;
       case 22:
	$R(13,[],"InvalidArgument");break;
       case 23:
	$R(4,[],"ResourceExhausted");break;
       case 24:
	$R(4,[],"ResourceExhausted");break;
       case 25:
	$R(6,[],"IllegalOperation");break;
       case 26:
	$R(3,[],"ResourceBusy");break;
       case 27:
	$R(7,[],"PermissionDenied");break;
       case 28:
	$R(4,[],"ResourceExhausted");break;
       case 29:
	$R(16,[],"UnsupportedOperation");break;
       case 30:
	$R(7,[],"PermissionDenied");break;
       case 31:
	$R(4,[],"ResourceExhausted");break;
       case 32:
	$R(18,[],"ResourceVanished");break;
       case 33:
	$R(13,[],"InvalidArgument");break;
       case 34:
	$R(16,[],"UnsupportedOperation");break;
       case 35:
	$R(4,[],"ResourceExhausted");break;
       case 36:
	$R(1,[],"AlreadyExists");break;
       case 37:
	$R(1,[],"AlreadyExists");break;
       case 38:
	$R(13,[],"InvalidArgument");break;
       case 39:
	$R(13,[],"InvalidArgument");break;
       case 40:
	$R(4,[],"ResourceExhausted");break;
       case 41:
	$R(11,[],"ProtocolError");break;
       case 42:
	$R(16,[],"UnsupportedOperation");break;
       case 43:
	$R(11,[],"ProtocolError");break;
       case 44:
	$R(16,[],"UnsupportedOperation");break;
       case 46:
	$R(16,[],"UnsupportedOperation");break;
       case 47:
	$R(16,[],"UnsupportedOperation");break;
       case 48:
	$R(3,[],"ResourceBusy");break;
       case 49:
	$R(16,[],"UnsupportedOperation");break;
       case 50:
	$R(18,[],"ResourceVanished");break;
       case 51:
	$R(2,[],"NoSuchThing");break;
       case 52:
	$R(18,[],"ResourceVanished");break;
       case 54:
	$R(18,[],"ResourceVanished");break;
       case 55:
	$R(4,[],"ResourceExhausted");break;
       case 56:
	$R(1,[],"AlreadyExists");break;
       case 57:
	$R(13,[],"InvalidArgument");break;
       case 58:
	$R(6,[],"IllegalOperation");break;
       case 59:
	$R(4,[],"ResourceExhausted");break;
       case 60:
	$R(17,[],"TimeExpired");break;
       case 61:
	$R(2,[],"NoSuchThing");break;
       case 62:
	$R(13,[],"InvalidArgument");break;
       case 63:
	$R(13,[],"InvalidArgument");break;
       case 64:
	$R(2,[],"NoSuchThing");break;
       case 65:
	$R(2,[],"NoSuchThing");break;
       case 66:
	$R(9,[],"UnsatisfiedConstraints");break;
       case 67:
	$R(7,[],"PermissionDenied");break;
       case 68:
	$R(4,[],"ResourceExhausted");break;
       case 69:
	$R(7,[],"PermissionDenied");break;
       case 70:
	$R(18,[],"ResourceVanished");break;
       case 71:
	$R(6,[],"IllegalOperation");break;
       case 73:
	$R(11,[],"ProtocolError");break;
       case 74:
	$R(16,[],"UnsupportedOperation");break;
       case 75:
	$R(11,[],"ProtocolError");break;
       case 76:
	$R(16,[],"UnsupportedOperation");break;
       case 77:
	$R(4,[],"ResourceExhausted");break;
       case 78:
	$R(16,[],"UnsupportedOperation");break;
       case 79:
	$R(14,[],"InappropriateType");break;
       case 90:
	$R(18,[],"ResourceVanished");break;
       case 91:
	$R(2,[],"NoSuchThing");break;
       case 92:
	$R(13,[],"InvalidArgument");break;
       case 94:
	$R(14,[],"InappropriateType");break;
       case 95:
	$R(16,[],"UnsupportedOperation");break;
       case 96:
	$R(2,[],"NoSuchThing");break;
       case 97:
	$R(18,[],"ResourceVanished");break;
       case 98:
	$R(4,[],"ResourceExhausted");break;
       case 99:
	$R(13,[],"InvalidArgument");break;
       case 100:
	$R(11,[],"ProtocolError");break;
       case 101:
	$R(17,[],"TimeExpired");break;
       case 102:
	$R(16,[],"UnsupportedOperation");break;
       default:
	$R(12,[],"OtherError");
       }
      },[]);
     },[I],"sat");
     var V=$d(1,[D,T,B,R,S,E],"sat");
     $r([Q,V]);
    },[I,D,B,H,E]);
   },[I,L,D,B,H,E]);
  },[W,D,B,E]);
 },[C,D,B,E],"sat");
 $$GHCziIO_unsafeDupablePerformIO.J(F);
},[],"at libraries/base/Foreign/C/Error.hs:507:1");
var $$ForeignziCziError_throwErrno1=$f(2,function(X,Y){
 var $ff=__hscore_get_errno();
 var Z=[Y,$ff];
 var a1=Z[0],b1=Z[1];
 var c1=$d(1,[b1],"sat");
 $$ForeignziCziError_errnoToIOError.C([X,c1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(d1){
  $$GHCziIOziException_ioError.J(d1,a1);
 },[a1]);
},[],"in `base:Foreign.C.Error'");
var $$ForeignziCziError_throwErrnoIfMinus1Retry2=$f(4,function(s2,t2,u2,v2){
 u2.C([v2],function(w2){
  var x2=w2[0],y2=w2[1];
  s2.C([y2],function(z2){
   switch(z2.g){
   case 1:
    $r([x2,y2]);break;
   case 2:
    var $ff=__hscore_get_errno();
    var A2=[x2,$ff];
    var B2=A2[0],C2=A2[1];
    $M(C2,function(D2){
     switch(D2){
     case 4:
      $$ForeignziCziError_throwErrnoIfMinus1Retry2.J(s2,t2,u2,B2);break;
     default:
      $$ForeignziCziError_throwErrno1.J(t2,B2);
     }
    },[u2,s2,t2,B2]);break;
   }
  },[u2,y2,s2,x2,t2]);
 },[u2,s2,t2]);
},[],"in `base:Foreign.C.Error'");
var $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2=$f(5,function(f3,g3,h3,i3,j3){
 h3.C([j3],function(k3){
  var l3=k3[0],m3=k3[1];
  f3.C([m3],function(n3){
   switch(n3.g){
   case 1:
    $r([l3,m3]);break;
   case 2:
    var $ff=__hscore_get_errno();
    var o3=[l3,$ff];
    var p3=o3[0],q3=o3[1];
    $M(q3,function(r3){
     switch(r3){
     case 4:
      $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.J(f3,g3,h3,i3,p3);break;
     case 35:
      i3.C([p3],function(s3){
       var t3=s3[0];
       $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.J(f3,g3,h3,i3,t3);
      },[h3,f3,g3,i3]);break;
     default:
      $$ForeignziCziError_throwErrno1.J(g3,p3);
     }
    },[h3,f3,g3,p3,i3]);break;
   }
  },[h3,m3,f3,l3,g3,i3]);
 },[h3,f3,g3,i3]);
},[],"in `base:Foreign.C.Error'");

var $$ForeignziCziString_zdwa=$f(2,function(J4,K4){
 var L4=$f(2,function(M4,N4){
  var O4=$hs_readInt8OffAddrzh(J4,M4,N4);
  var P4=O4[0],Q4=O4[1];
  $M(Q4,function(R4){
   switch(R4){
   case 0:
    var T4=$d(1,[M4],"sat");
    $r([P4,T4]);break;
   default:
    var S4=M4+1|0;
    L4.J(S4,P4);
   }
  },[M4,L4,P4]);
 },[J4],"$sa");
 L4.C([0,K4],function(U4){
  var V4=U4[0],W4=U4[1];
  $M(W4,function(X4){
   var Y4=X4.v[0];
   var Z4=Y4<=0?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Z4.g){
   case 1:
    var a5=$f(3,function(b5,c5,d5){
     var e5=$hs_readInt8OffAddrzh(J4,c5,d5);
     var f5=e5[0],g5=e5[1];
     var h5=c5<=0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(h5.g){
     case 1:
      var l5=c5-1|0;
      var o5=g5>>>0;
      var n5=o5&255;
      var m5=n5|0;
      var j5=$hs_chrzh(m5);
      var i5=$d(1,[j5],"sat");
      var k5=$d(2,[i5,b5],"sat");
      a5.J(k5,l5,f5);break;
     case 2:
      var u5=g5>>>0;
      var t5=u5&255;
      var s5=t5|0;
      var q5=$hs_chrzh(s5);
      var p5=$d(1,[q5],"sat");
      var r5=$d(2,[p5,b5],"sat");
      $r([f5,r5]);break;
     }
    },[J4],"$wa4");
    var v5=Y4-1|0;
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
     var aa=$hs_writeInt8OffAddrzh(Z9,0,0,W9);
     T9.J(Y9,aa);
    },[W9,T9]);break;
   case 2:
    var ba=X9.v[0],ca=X9.v[1];
    $M(V9,function(da){
     var ea=da.v[0];
     $M(ba,function(fa){
      var ga=fa.v[0];
      var za=$hs_ordzh(ga);
      var ya=(za&127)-(za&128);
      var xa=$hs_writeInt8OffAddrzh(ea,0,ya,W9);
      var ha=$f(3,function(ia,ja,ka){
       $M(ia,function(la){
	switch(la.g){
	case 1:
	 var ma=$hs_writeInt8OffAddrzh(ea,ja,0,ka);
	 $r([ma,$$GHCziTuple_Z0T]);break;
	case 2:
	 var na=la.v[0],oa=la.v[1];
	 $M(na,function(pa){
	  var qa=pa.v[0];
	  var ua=$hs_ordzh(qa);
	  var ta=(ua&127)-(ua&128);
	  var sa=$hs_writeInt8OffAddrzh(ea,ja,ta,ka);
	  var ra=ja+1|0;
	  ha.J(oa,ra,sa);
	 },[ea,ja,ka,oa,ha]);break;
	}
       },[ea,ja,ka,ha]);
      },[ea],"$wa4");
      ha.C([ca,1,xa],function(va){
       var wa=va[0];
       T9.J(da,wa);
      },[T9,da]);
     },[W9,T9,ea,ca,da]);
    },[W9,T9,ba,ca]);break;
   }
  },[V9,W9,T9]);
 },[S9,T9],"sat");
 var Aa=$t(function(){
  $$GHCziList_zdwlen.C([S9,0],function(Ca){
   var Ba=Ca+1|0;
   $R(1,[Ba],"I#");
  },[]);
 },[S9],"sat");
 $$ForeignziMarshalziArray_allocaArray.J($$ForeignziCziTypes_zdfStorableCChar,Aa,U9);
},[],"at libraries/base/Foreign/C/String.hs:366:1");

var $$ForeignziCziTypes_zdfStorableCChar=$D(1,function(){
 $r([$$ForeignziStorable_zdfStorableInt8zuzdcsizzeOf,$$ForeignziStorable_zdfStorableInt8zuzdcalignment,$$GHCziStorable_readInt8OffPtr1,$$GHCziStorable_writeInt8OffPtr1,$$ForeignziStorable_zdfStorableInt29,$$ForeignziStorable_zdfStorableInt28,$$ForeignziStorable_zdfStorableInt27,$$ForeignziStorable_zdfStorableInt26]);
},"at libraries/base/Foreign/C/Types.hs:109:54");

var $$ForeignziMarshalziAlloc_mallocBytes3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("out of memory\x00");
},[],"in `base:Foreign.Marshal.Alloc'");
var $$ForeignziMarshalziAlloc_mallocBytes4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("malloc\x00");
},[],"in `base:Foreign.Marshal.Alloc'");
var $$ForeignziMarshalziAlloc_mallocBytes2=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_ResourceExhausted,$$ForeignziMarshalziAlloc_mallocBytes4,$$ForeignziMarshalziAlloc_mallocBytes3,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:Foreign.Marshal.Alloc'");

var $$ForeignziMarshalziArray_peekArray2=$D(1,function(){
 $r([0]);
},"in `base:Foreign.Marshal.Array'");
var $$ForeignziMarshalziArray_zdwa8=$f(4,function(v2,w2,x2,y2){
 var z2=w2<=0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(z2.g){
 case 1:
  var A2=$t(function(){
   $$ForeignziStorable_peekElemOff.J(v2,x2,$$ForeignziMarshalziArray_peekArray2);
  },[v2,x2],"lvl");
  var B2=$f(3,function(C2,D2,E2){
   $M(C2,function(F2){
    switch(F2){
    case 0:
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
      var L2=F2-1|0;
      B2.J(L2,K2,I2);
     },[v2,x2,A2,F2,B2,D2]);
    }
   },[v2,x2,A2,E2,B2,D2]);
  },[v2,x2,A2],"$wa9");
  var Q2=w2-1|0;
  B2.J(Q2,$$GHCziTypes_ZMZN,y2);break;
 case 2:
  $r([y2,$$GHCziTypes_ZMZN]);break;
 }
},[],"in `base:Foreign.Marshal.Array'");

var $$ForeignziStorable_peekElemOff=$f(1,function(g){
 $M(g,function(h){
  var i=h.v[2];
  $A(i);
 },[]);
},[],"at libraries/base/Foreign/Storable.hs:114:4");
var $$ForeignziStorable_zdfStorableBool8=$D(1,function(){
 $r([4]);
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
   var d1=$hs_writeWideCharOffAddrzh(a1,0,c1,Y);
   $r([d1,$$GHCziTuple_Z0T]);
  },[a1,Y]);
 },[X,Y]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableChar2=$f(2,function(h1,i1){
 $M(h1,function(j1){
  var k1=j1.v[0];
  var l1=$hs_readWideCharOffAddrzh(k1,0,i1);
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
    var z1=$hs_writeWideCharOffAddrzh(A1,0,y1,s1);
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
   var J1=$hs_readWideCharOffAddrzh(N1,0,E1);
   var K1=J1[0],L1=J1[1];
   var M1=$d(1,[L1],"sat");
   $r([K1,M1]);
  },[G1,E1]);
 },[D1,E1]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableChar=$D(1,function(){
 $r([$$ForeignziStorable_zdfStorableCharzuzdcsizzeOf,$$ForeignziStorable_zdfStorableCharzuzdcalignment,$$GHCziStorable_readWideCharOffPtr1,$$GHCziStorable_writeWideCharOffPtr1,$$ForeignziStorable_zdfStorableChar4,$$ForeignziStorable_zdfStorableChar3,$$ForeignziStorable_zdfStorableChar2,$$ForeignziStorable_zdfStorableChar1]);
},"at libraries/base/Foreign/Storable.hs:198:10");
var $$ForeignziStorable_zdfStorableInt31=$D(1,function(){
 $r([1]);
},"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt8zuzdcalignment=$f(1,function(Ia){
 $A($$ForeignziStorable_zdfStorableInt31);
},[],"at libraries/base/Foreign/Storable.hs:109:4");
var $$ForeignziStorable_zdfStorableInt8zuzdcsizzeOf=$f(1,function(Ja){
 $A($$ForeignziStorable_zdfStorableInt31);
},[],"at libraries/base/Foreign/Storable.hs:105:4");
var $$ForeignziStorable_zdfStorableInt26=$f(3,function(Ka,La,Ma){
 $M(Ka,function(Na){
  var Oa=Na.v[0];
  $M(La,function(Pa){
   var Qa=Pa.v[0];
   var Ra=$hs_writeInt8OffAddrzh(Oa,0,Qa,Ma);
   $r([Ra,$$GHCziTuple_Z0T]);
  },[Oa,Ma]);
 },[La,Ma]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt27=$f(2,function(Sa,Ta){
 $M(Sa,function(Ua){
  var Va=Ua.v[0];
  var Wa=$hs_readInt8OffAddrzh(Va,0,Ta);
  var Xa=Wa[0],Ya=Wa[1];
  var Za=$d(1,[Ya],"sat");
  $r([Xa,Za]);
 },[Ta]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt28=$f(4,function(ab,bb,cb,db){
 $M(ab,function(eb){
  var fb=eb.v[0];
  $M(bb,function(gb){
   var hb=gb.v[0];
   $M(cb,function(ib){
    var jb=ib.v[0];
    var lb=$hs_plusAddrzh(fb,hb);
    var kb=$hs_writeInt8OffAddrzh(lb,0,jb,db);
    $r([kb,$$GHCziTuple_Z0T]);
   },[fb,hb,db]);
  },[cb,fb,db]);
 },[bb,cb,db]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorableInt29=$f(3,function(mb,nb,ob){
 $M(mb,function(pb){
  var qb=pb.v[0];
  $M(nb,function(rb){
   var sb=rb.v[0];
   var xb=$hs_plusAddrzh(qb,sb);
   var tb=$hs_readInt8OffAddrzh(xb,0,ob);
   var ub=tb[0],vb=tb[1];
   var wb=$d(1,[vb],"sat");
   $r([ub,wb]);
  },[qb,ob]);
 },[nb,ob]);
},[],"in `base:Foreign.Storable'");

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
      var A=v<=z?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       $A($$GHCziConcziSignal_setHandler3);break;
      case 2:
       var B=z<=x?$$GHCziTypes_True:$$GHCziTypes_False;
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
  switch(G){
  case 0:
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
 $r([0]);
},"lvl");
var $$GHCziConcziSignal$b=$D(1,function(){
 $r([64]);
},"lvl1");
var $$GHCziConcziSignal$c=$F(1,function(v2){
 var U2=$hs_noDuplicatezh(v2);
 var w2=$hs_newArrayzh(65,$$DataziMaybe_Nothing,U2);
 var x2=w2[0],y2=w2[1];
 var z2=$hs_newMVarzh(x2);
 var A2=z2[0],B2=z2[1];
 var C2=$d(1,[$$GHCziConcziSignal$a,$$GHCziConcziSignal$b,65,y2],"sat");
 $b($hs_putMVarzh,[B2,C2,A2],function(T2){
  var D2=$hs_getMaskingStatezh(T2);
  var E2=D2[0],F2=D2[1];
  var G2=$f(1,function(H2){
   var I2=$d(1,[B2],"m");
   var J2=[H2,I2];
   var K2=J2[0],L2=J2[1];
   var $ff=getOrSetGHCConcSignalSignalHandlerStore(L2);
   var M2=[K2,$ff];
   var N2=M2[0],O2=M2[1];
   var P2=$hs_eqAddrzh(L2,O2);
   switch(P2.g){
   case 1:
    var $ff=hs_free_stable_ptr(L2);
    var Q2=[N2,$ff];
    var R2=Q2[0];
    $r([R2,O2]);break;
   case 2:
    $r([N2,I2]);break;
   }
  },[B2],"a");
  $M(F2,function(S2){
   switch(S2){
   case 0:
    $k($hs_maskAsyncExceptionszh,[G2,E2]);break;
   default:
    G2.J(E2);
   }
  },[G2,E2]);
 },[B2]);
},"lvl2");
var $$GHCziConcziSignal$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Conc.setHandler: signal out of range\x00");
},"lvl3");

var $$GHCziConcziSync_zdfShowThreadStatus1=$D(1,function(){
 $r([0]);
},"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync_sharedCAF1=$f(3,function(Zc,ad,bd){
 var cd=$hs_getMaskingStatezh(bd);
 var dd=cd[0],ed=cd[1];
 var fd=$f(1,function(gd){
  var hd=[gd,Zc];
  var id=hd[0],jd=hd[1];
  var kd=$d(1,[jd],"sat");
  ad.C([kd,id],function(ld){
   var md=ld[0],nd=ld[1];
   $M(nd,function(od){
    var pd=od.v[0];
    var qd=$hs_eqAddrzh(jd,pd);
    switch(qd.g){
    case 1:
     var $ff=hs_free_stable_ptr(jd);
     var rd=[md,$ff];
     var sd=rd[0];
     $r([sd,pd]);break;
    case 2:
     $r([md,Zc]);break;
    }
   },[Zc,jd,md]);
  },[Zc,jd]);
 },[Zc,ad],"a5");
 $M(ed,function(td){
  switch(td){
  case 0:
   $k($hs_maskAsyncExceptionszh,[fd,dd]);break;
  default:
   fd.J(dd);
  }
 },[fd,dd]);
},[],"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync_uncaughtExceptionHandler=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziConcziSync$n);
},[],"at libraries/base/GHC/Conc/Sync.lhs:791:1");
var $$GHCziConcziSync$c=$F(3,function(Ef,Ff,Gf){
 $M(Ef,function(Hf){
  var If=Hf.v[0];
  $M(Ff,function(Jf){
   var Kf=Jf.v[0];
   var $ff=errorBelch2(If,Kf);
   var Lf=[Gf,$ff];
   var Mf=Lf[0];
   $r([Mf,$$GHCziTuple_Z0T]);
  },[If,Gf]);
 },[Ff,Gf]);
},"a2");
var $$GHCziConcziSync$d=$F(3,function(g,h,i){
 $$GHCziConcziSync$c.J(g,h,i);
},"at libraries/base/GHC/Conc/Sync.lhs:808:4");
var $$GHCziConcziSync$i=$T(function(){
 $$GHCziIOziHandle_hFlush.J($$GHCziIOziHandleziFD_stdout);
},"lvl2");
var $$GHCziConcziSync$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no threads to run:  infinite loop or deadlock?\x00");
},"lvl3");
var $$GHCziConcziSync$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("%s\x00");
},"lvl4");
var $$GHCziConcziSync$l=$F(2,function(Nf,Of){
 $M(Nf,function(Pf){
  $r([Of,$$GHCziTuple_Z0T]);
 },[Of]);
},"lvl5");
var $$GHCziConcziSync$m=$F(2,function(Qf,Rf){
 $M(Qf,function(Sf){
  var Tf=Sf.v[0],Uf=Sf.v[1];
  $b($hs_catchzh,[$$GHCziConcziSync$i,$$GHCziConcziSync$l,Rf],function(Vf){
   var Wf=Vf[0];
   $$GHCziIOziEncoding_getForeignEncoding.C([Wf],function(Xf){
    var Yf=Xf[0],Zf=Xf[1];
    var ag=$f(2,function(bg,cg){
     $$GHCziIOziEncoding_getForeignEncoding.C([cg],function(dg){
      var eg=dg[0],fg=dg[1];
      var gg=$f(2,function(hg,i){
       $$GHCziConcziSync$d.J(bg,hg,i);
      },[bg],"sat");
      var ig=$t(function(){
       $$GHCziException_zdp1Exception.C([Tf],function(pg){
	$$DataziTypeable_cast.C([pg,$$GHCziIOziException_zdfExceptionDeadlockzuzdctypeOf,Uf],function(jg){
	 switch(jg.g){
	 case 1:
	  $$DataziTypeable_cast.C([pg,$$GHCziException_zdfExceptionErrorCallzuzdctypeOf,Uf],function(kg){
	   switch(kg.g){
	   case 1:
	    $$GHCziException_zdp2Exception.C([Tf],function(lg){
	     $$GHCziShow_showsPrec.J(lg,$$GHCziConcziSync_zdfShowThreadStatus1,Uf,$$GHCziTypes_ZMZN);
	    },[Uf]);break;
	   case 2:
	    var mg=kg.v[0];
	    $M(mg,function(ng){
	     var og=ng.v[0];
	     $A(og);
	    },[]);break;
	   }
	  },[Tf,Uf]);break;
	 case 2:
	  var qg=jg.v[0];
	  $M(qg,function(rg){
	   $A($$GHCziConcziSync$j);
	  },[]);break;
	 }
	},[Tf,pg,Uf]);
       },[Tf,Uf]);
      },[Tf,Uf],"sat");
      $$GHCziForeign_charIsRepresentable3.J(fg,ig,gg,eg);
     },[Tf,Uf,bg]);
    },[Tf,Uf],"sat");
    $$GHCziForeign_charIsRepresentable3.J(Zf,$$GHCziConcziSync$k,ag,Yf);
   },[Tf,Uf]);
  },[Tf,Uf]);
 },[Rf]);
},"a3");
var $$GHCziConcziSync$n=$F(1,function(sg){
 var xg=$hs_noDuplicatezh(sg);
 var tg=$hs_newMutVarzh($$GHCziConcziSync$m,xg);
 var ug=tg[0],vg=tg[1];
 var wg=$d(1,[vg],"sat");
 $r([ug,wg]);
},"lvl6");

var $$GHCziEnum_zdfEnumBool3=$t(function(){
 $$GHCziErr_error.J($$GHCziEnum$x);
},[],"in `base:GHC.Enum'");
var $$GHCziEnum$x=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.Enum.Bool.toEnum: bad argument\x00");
},"lvl23");

var $$GHCziEventziControl_sendWakeup2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("sendWakeup\x00");
},[],"in `base:GHC.Event.Control'");

var $$GHCziEventziIntMap_deletezuzdszdwdelete=$f(2,function(S2,T2){
 $M(T2,function(U2){
  switch(U2.g){
  case 1:
   $r([$$DataziMaybe_Nothing,$$GHCziEventziIntMap_Nil]);break;
  case 2:
   var V2=U2.v[0],W2=U2.v[1];
   var X2=S2==V2?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(X2.g){
   case 1:
    $r([$$DataziMaybe_Nothing,U2]);break;
   case 2:
    var Y2=$d(2,[W2],"sat");
    $r([Y2,$$GHCziEventziIntMap_Nil]);break;
   }break;
  case 3:
   var Z2=U2.v[0],a3=U2.v[1],b3=U2.v[2],c3=U2.v[3];
   var H3=a3>>>0;
   var N3=H3-1>>>0;
   var M3=N3^4294967295;
   var L3=M3^H3;
   var K3=S2>>>0;
   var J3=K3&L3;
   var I3=J3|0;
   var d3=I3!=Z2?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(d3.g){
   case 1:
    var G3=S2>>>0;
    var F3=G3&H3;
    var e3=F3==0?$$GHCziTypes_True:$$GHCziTypes_False;
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
    var V3=U3==R3?$$GHCziTypes_True:$$GHCziTypes_False;
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
    var H4=Y3>>>0;
    var N4=H4-1>>>0;
    var M4=N4^4294967295;
    var L4=M4^H4;
    var K4=c4>>>0;
    var J4=K4&L4;
    var I4=J4|0;
    var d4=I4!=X3?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(d4.g){
    case 1:
     var G4=c4>>>0;
     var F4=G4&H4;
     var e4=F4==0?$$GHCziTypes_True:$$GHCziTypes_False;
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
   var Z4=U4==X4?$$GHCziTypes_True:$$GHCziTypes_False;
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
   var O5=h5>>>0;
   var U5=O5-1>>>0;
   var T5=U5^4294967295;
   var S5=T5^O5;
   var R5=U4>>>0;
   var Q5=R5&S5;
   var P5=Q5|0;
   var k5=P5!=g5?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(k5.g){
   case 1:
    var N5=U4>>>0;
    var M5=N5&O5;
    var l5=M5==0?$$GHCziTypes_True:$$GHCziTypes_False;
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
   var q7=i7==o7?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(q7.g){
   case 1:
    var r7=$t(function(){
     var g8=o7>>>0;
     var f8=i7>>>0;
     var d8=f8^g8;
     var e8=d8>>>1;
     var b8=d8|e8;
     var c8=b8>>>2;
     var Z7=b8|c8;
     var a8=Z7>>>4;
     var X7=Z7|a8;
     var Y7=X7>>>8;
     var V7=X7|Y7;
     var W7=V7>>>16;
     var U7=V7|W7;
     var D7=U7|0;
     var T7=D7>>>1;
     var S7=D7^T7;
     var R7=i7>>>0;
     var Q7=R7&S7;
     var s7=Q7==0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(s7.g){
     case 1:
      $M(j7,function(u7){
       var E7=D7>>>1;
       var B7=D7^E7;
       var t7=$d(2,[i7,u7],"sat");
       var w7=B7|0;
       var C7=B7-1>>>0;
       var A7=C7^4294967295;
       var z7=A7^B7;
       var y7=i7>>>0;
       var x7=y7&z7;
       var v7=x7|0;
       $R(3,[v7,w7,l7,t7],"Bin");
      },[i7,D7,l7]);break;
     case 2:
      $M(j7,function(G7){
       var P7=D7>>>1;
       var N7=D7^P7;
       var F7=$d(2,[i7,G7],"sat");
       var I7=N7|0;
       var O7=N7-1>>>0;
       var M7=O7^4294967295;
       var L7=M7^N7;
       var K7=i7>>>0;
       var J7=K7&L7;
       var H7=J7|0;
       $R(3,[H7,I7,F7,l7],"Bin");
      },[i7,D7,l7]);break;
     }
    },[j7,i7,o7,l7],"sat");
    $r([$$DataziMaybe_Nothing,r7]);break;
   case 2:
    var h8=$t(function(){
     h7.C([j7,p7],function(i8){
      $R(2,[i7,i8],"Tip");
     },[i7]);
    },[j7,i7,p7,h7],"sat");
    var j8=$d(2,[p7],"sat");
    $r([j8,h8]);break;
   }break;
  case 3:
   var k8=l7.v[0],l8=l7.v[1],m8=l7.v[2],n8=l7.v[3];
   var O8=l8>>>0;
   var K9=O8-1>>>0;
   var J9=K9^4294967295;
   var I9=J9^O8;
   var H9=i7>>>0;
   var G9=H9&I9;
   var F9=G9|0;
   var o8=F9!=k8?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(o8.g){
   case 1:
    var N8=i7>>>0;
    var M8=N8&O8;
    var p8=M8==0?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(p8.g){
    case 1:
     var q8=$t(function(){
      $$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([h7,i7,j7,n8],function(r8){
       var s8=r8[0],t8=r8[1];
       $R(1,[s8,t8],"(,)");
      },[]);
     },[j7,i7,h7,n8],"ds");
     var u8=$t(function(){
      $M(q8,function(v8){
       var w8=v8.v[1];
       $M(w8,function(x8){
	$R(3,[k8,l8,m8,x8],"Bin");
       },[l8,k8,m8]);
      },[l8,k8,m8]);
     },[l8,k8,q8,m8],"sat");
     var y8=$t(function(){
      $M(q8,function(z8){
       var A8=z8.v[0];
       $A(A8);
      },[]);
     },[q8],"sat");
     $r([y8,u8]);break;
    case 2:
     var B8=$t(function(){
      $$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([h7,i7,j7,m8],function(C8){
       var D8=C8[0],E8=C8[1];
       $R(1,[D8,E8],"(,)");
      },[]);
     },[j7,i7,h7,m8],"ds");
     var F8=$t(function(){
      $M(B8,function(G8){
       var H8=G8.v[1];
       $M(H8,function(I8){
	$R(3,[k8,l8,I8,n8],"Bin");
       },[l8,k8,n8]);
      },[l8,k8,n8]);
     },[l8,k8,n8,B8],"sat");
     var J8=$t(function(){
      $M(B8,function(K8){
       var L8=K8.v[0];
       $A(L8);
      },[]);
     },[B8],"sat");
     $r([J8,F8]);break;
    }break;
   case 2:
    var P8=$t(function(){
     var E9=k8>>>0;
     var D9=i7>>>0;
     var B9=D9^E9;
     var C9=B9>>>1;
     var z9=B9|C9;
     var A9=z9>>>2;
     var x9=z9|A9;
     var y9=x9>>>4;
     var v9=x9|y9;
     var w9=v9>>>8;
     var t9=v9|w9;
     var u9=t9>>>16;
     var s9=t9|u9;
     var b9=s9|0;
     var r9=b9>>>1;
     var q9=b9^r9;
     var p9=i7>>>0;
     var o9=p9&q9;
     var Q8=o9==0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Q8.g){
     case 1:
      $M(j7,function(S8){
       var c9=b9>>>1;
       var Z8=b9^c9;
       var R8=$d(2,[i7,S8],"sat");
       var U8=Z8|0;
       var a9=Z8-1>>>0;
       var Y8=a9^4294967295;
       var X8=Y8^Z8;
       var W8=i7>>>0;
       var V8=W8&X8;
       var T8=V8|0;
       $R(3,[T8,U8,l7,R8],"Bin");
      },[i7,l7,b9]);break;
     case 2:
      $M(j7,function(e9){
       var n9=b9>>>1;
       var l9=b9^n9;
       var d9=$d(2,[i7,e9],"sat");
       var g9=l9|0;
       var m9=l9-1>>>0;
       var k9=m9^4294967295;
       var j9=k9^l9;
       var i9=i7>>>0;
       var h9=i9&j9;
       var f9=h9|0;
       $R(3,[f9,g9,d9,l7],"Bin");
      },[i7,l7,b9]);break;
     }
    },[j7,i7,l7,k8],"sat");
    $r([$$DataziMaybe_Nothing,P8]);break;
   }break;
  }
 },[j7,i7,h7]);
},[],"at libraries/base/GHC/Event/IntMap.hs:169:1");
var $$GHCziEventziIntMap_lookupzuzdslookupN=$f(2,function(zc,Ac){
 $M(Ac,function(Bc){
  switch(Bc.g){
  case 1:
   $R(1,[],"Nothing");break;
  case 2:
   var Cc=Bc.v[0],Dc=Bc.v[1];
   var Fc=Cc>>>0;
   var Ec=zc==Fc?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Ec.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    $R(2,[Dc],"Just");break;
   }break;
  case 3:
   var Gc=Bc.v[1],Hc=Bc.v[2],Ic=Bc.v[3];
   var Lc=Gc>>>0;
   var Kc=zc&Lc;
   var Jc=Kc==0?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Jc.g){
   case 1:
    $$GHCziEventziIntMap_lookupzuzdslookupN.J(zc,Ic);break;
   case 2:
    $$GHCziEventziIntMap_lookupzuzdslookupN.J(zc,Hc);break;
   }break;
  }
 },[zc]);
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
 $r([0]);
},"in `base:GHC.Event.Internal'");
var $$GHCziEventziInternal_evtNothing=$t(function(){
 $A($$GHCziEventziInternal_zdfShowTimeout1);
},[],"at libraries/base/GHC/Event/Internal.hs:39:1");
var $$GHCziEventziInternal$b=$D(1,function(){
 $r([2]);
},"a1");
var $$GHCziEventziInternal$c=$D(1,function(){
 $r([1]);
},"a2");

var $$GHCziEventziManager_fdEvents=$f(1,function(N){
 $M(N,function(O){
  var P=O.v[2];
  $R(1,[P],"I#");
 },[]);
},[],"at libraries/base/GHC/Event/Manager.hs:92:7");
var $$GHCziEventziManager_zdwlgo=$f(2,function(O3,P3){
 $M(P3,function(Q3){
  switch(Q3.g){
  case 1:
   $A(O3);break;
  case 2:
   var R3=Q3.v[0],S3=Q3.v[1];
   $M(R3,function(T3){
    var U3=T3.v[0];
    var Y3=U3>>>0;
    var X3=O3>>>0;
    var W3=X3|Y3;
    var V3=W3|0;
    $$GHCziEventziManager_zdwlgo.J(V3,S3);
   },[O3,S3]);break;
  }
 },[O3]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_eventsOf=$f(1,function(Z3){
 $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,Z3],function(a4){
  $$GHCziEventziManager_zdwlgo.C([0,a4],function(b4){
   $R(1,[b4],"I#");
  },[]);
 },[]);
},[],"at libraries/base/GHC/Event/Manager.hs:309:1");
var $$GHCziEventziManager_zdwa2=$f(8,function(m4,n4,o4,p4,q4,r4,s4,t4){
 var u4=$hs_getMaskingStatezh(t4);
 var v4=u4[0],w4=u4[1];
 var x4=$d(1,[r4],"a5");
 var y4=$f(1,function(z4){
  $M(z4,function(A4){
   var B4=A4.v[1];
   $$GHCziIntWord64_neInt64zh.J(B4,s4);
  },[s4]);
 },[s4],"lvl8");
 var C4=$f(1,function(D4){
  $$GHCziList_filter.C([y4,D4],function(E4){
   switch(E4.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    $R(2,[E4],"Just");break;
   }
  },[]);
 },[y4],"lvl9");
 var F4=$f(2,function(G4,H4){
  var I4=$f(2,function(J4,K4){
   var L4=$f(3,function(M4,N4,O4){
    var P4=N4!=O4?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(P4.g){
    case 1:
     var Q4=$d(1,[M4,$$GHCziTypes_False],"sat");
     $r([H4,Q4]);break;
    case 2:
     $M(m4,function(R4){
      var S4=R4.v[0],T4=R4.v[2];
      var U4=$d(1,[O4],"sat");
      var V4=$d(1,[N4],"sat");
      T4.C([S4,x4,V4,U4,H4],function(W4){
       var X4=W4[0];
       var Y4=$d(1,[M4,$$GHCziTypes_True],"sat");
       $r([X4,Y4]);
      },[M4]);
     },[x4,H4,N4,O4,M4]);break;
    }
   },[x4,H4,m4],"$w$j");
   $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,J4],function(Z4){
    $$GHCziEventziManager_zdwlgo.C([0,Z4],function(b5){
     var f5=r4>>>0;
     $$GHCziEventziIntMap_lookupzuzdslookupN.C([f5,K4],function(a5){
      switch(a5.g){
      case 1:
       L4.J(K4,b5,0);break;
      case 2:
       var c5=a5.v[0];
       $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,c5],function(d5){
	$$GHCziEventziManager_zdwlgo.C([0,d5],function(e5){
	 L4.J(K4,b5,e5);
	},[x4,H4,m4,L4,K4,b5]);
       },[x4,H4,m4,L4,K4,b5]);break;
      }
     },[x4,H4,m4,L4,K4,b5]);
    },[r4,x4,H4,m4,L4,K4]);
   },[r4,x4,H4,m4,L4,K4]);
  },[r4,x4,H4,m4],"$s$j1");
  var g5=$f(2,function(h5,i5){
   var j5=$f(3,function(k5,l5,m5){
    var n5=l5!=m5?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(n5.g){
    case 1:
     var o5=$d(1,[k5,$$GHCziTypes_False],"sat");
     $r([H4,o5]);break;
    case 2:
     $M(m4,function(p5){
      var q5=p5.v[0],r5=p5.v[2];
      var s5=$d(1,[m5],"sat");
      var t5=$d(1,[l5],"sat");
      r5.C([q5,x4,t5,s5,H4],function(u5){
       var v5=u5[0];
       var w5=$d(1,[k5,$$GHCziTypes_True],"sat");
       $r([v5,w5]);
      },[k5]);
     },[x4,H4,l5,m5,k5]);break;
    }
   },[x4,H4,m4],"$w$j");
   $M(h5,function(x5){
    switch(x5.g){
    case 1:
     $M(G4,function(y5){
      j5.J(y5,0,0);
     },[x4,H4,m4,j5]);break;
    case 2:
     var z5=x5.v[0];
     $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,z5],function(A5){
      $$GHCziEventziManager_zdwlgo.C([0,A5],function(C5){
       var G5=r4>>>0;
       $$GHCziEventziIntMap_lookupzuzdslookupN.C([G5,i5],function(B5){
	switch(B5.g){
	case 1:
	 j5.J(i5,C5,0);break;
	case 2:
	 var D5=B5.v[0];
	 $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,D5],function(E5){
	  $$GHCziEventziManager_zdwlgo.C([0,E5],function(F5){
	   j5.J(i5,C5,F5);
	  },[x4,H4,m4,j5,i5,C5]);
	 },[x4,H4,m4,j5,i5,C5]);break;
	}
       },[x4,H4,m4,j5,i5,C5]);
      },[r4,x4,H4,m4,j5,i5]);
     },[r4,x4,H4,m4,j5,i5]);break;
    }
   },[r4,x4,G4,H4,m4,j5,i5]);
  },[r4,x4,G4,H4,m4],"$j");
  $M(G4,function(H5){
   switch(H5.g){
   case 1:
    var I5=$d(1,[$$GHCziEventziIntMap_Nil,$$GHCziTypes_False],"sat");
    $r([H4,I5]);break;
   case 2:
    var J5=H5.v[0],K5=H5.v[1];
    var L5=r4==J5?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(L5.g){
    case 1:
     var M5=$d(1,[H5,$$GHCziTypes_False],"sat");
     $r([H4,M5]);break;
    case 2:
     $$GHCziList_filter.C([y4,K5],function(N5){
      switch(N5.g){
      case 1:
       I4.J(K5,$$GHCziEventziIntMap_Nil);break;
      case 2:
       var O5=$d(2,[J5,N5],"sat");
       I4.J(K5,O5);break;
      }
     },[r4,x4,H4,m4,I4,J5,K5]);break;
    }break;
   case 3:
    var P5=H5.v[0],Q5=H5.v[1],R5=H5.v[2],S5=H5.v[3];
    var j6=Q5>>>0;
    var q6=j6-1>>>0;
    var p6=q6^4294967295;
    var o6=p6^j6;
    var n6=r4>>>0;
    var m6=n6&o6;
    var l6=m6|0;
    var T5=l6!=P5?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(T5.g){
    case 1:
     var i6=r4>>>0;
     var h6=i6&j6;
     var U5=h6==0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(U5.g){
     case 1:
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([C4,r4,S5],function(V5){
       var W5=V5[0],X5=V5[1];
       var Y5=$t(function(){
	$M(X5,function(Z5){
	 switch(Z5.g){
	 case 1:
	  $A(R5);break;
	 default:
	  $M(R5,function(a6){
	   switch(a6.g){
	   case 1:
	    $A(Z5);break;
	   default:
	    $R(3,[P5,Q5,a6,Z5],"Bin");
	   }
	  },[Q5,P5,Z5]);
	 }
	},[Q5,P5,R5]);
       },[Q5,P5,X5,R5],"sat");
       g5.J(W5,Y5);
      },[r4,x4,G4,H4,m4,g5,Q5,P5,R5]);break;
     case 2:
      $$GHCziEventziIntMap_updateWithzuzdszdwupdateWith.C([C4,r4,R5],function(b6){
       var c6=b6[0],d6=b6[1];
       var e6=$t(function(){
	$M(S5,function(f6){
	 switch(f6.g){
	 case 1:
	  $A(d6);break;
	 default:
	  $M(d6,function(g6){
	   switch(g6.g){
	   case 1:
	    $A(f6);break;
	   default:
	    $R(3,[P5,Q5,g6,f6],"Bin");
	   }
	  },[Q5,P5,f6]);
	 }
	},[Q5,P5,d6]);
       },[Q5,P5,S5,d6],"sat");
       g5.J(c6,e6);
      },[r4,x4,G4,H4,m4,g5,Q5,P5,S5]);break;
     }break;
    case 2:
     var k6=$d(1,[H5,$$GHCziTypes_False],"sat");
     $r([H4,k6]);break;
    }break;
   }
  },[r4,x4,y4,C4,G4,H4,m4,I4,g5]);
 },[r4,x4,y4,C4,m4],"a6");
 $M(w4,function(r6){
  switch(r6){
  case 0:
   var E6=$f(1,function(F6){
    $b($hs_takeMVarzh,[n4,F6],function(G6){
     var H6=G6[0],I6=G6[1];
     var J6=$f(2,function(o1,J){
      $$GHCziEventziManager$a.J(I6,n4,o1,J);
     },[n4,I6],"sat");
     var K6=$f(1,function(J){
      F4.J(I6,J);
     },[F4,I6],"sat");
     var L6=$f(1,function(J){
      $k($hs_unmaskAsyncExceptionszh,[K6,J]);
     },[K6],"sat");
     $b($hs_catchzh,[L6,J6,H6],function(M6){
      var N6=M6[0],O6=M6[1];
      $M(O6,function(P6){
       var Q6=P6.v[0],R6=P6.v[1];
       $b($hs_putMVarzh,[n4,Q6,N6],function(S6){
	$r([S6,R6]);
       },[R6]);
      },[n4,N6]);
     },[n4]);
    },[F4,n4]);
   },[F4,n4],"sat");
   $k($hs_maskAsyncExceptionszh,[E6,v4]);break;
  default:
   $b($hs_takeMVarzh,[n4,v4],function(s6){
    var t6=s6[0],u6=s6[1];
    var v6=$f(2,function(o1,J){
     $$GHCziEventziManager$a.J(u6,n4,o1,J);
    },[n4,u6],"sat");
    var w6=$f(1,function(J){
     F4.J(u6,J);
    },[F4,u6],"sat");
    $b($hs_catchzh,[w6,v6,t6],function(x6){
     var y6=x6[0],z6=x6[1];
     $M(z6,function(A6){
      var B6=A6.v[0],C6=A6.v[1];
      $b($hs_putMVarzh,[n4,B6,y6],function(D6){
       $r([D6,C6]);
      },[C6]);
     },[n4,y6]);
    },[n4]);
   },[F4,n4]);
  }
 },[F4,n4,v4]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_closeFd1=$f(4,function(B7,C7,D7,E7){
 var F7=$hs_getMaskingStatezh(E7);
 var G7=F7[0],H7=F7[1];
 var I7=$t(function(){
  C7.J(D7);
 },[D7,C7],"lvl8");
 var J7=$t(function(){
  $M(D7,function(K7){
   var L7=K7.v[0];
   $R(1,[L7],"I#");
  },[]);
 },[D7],"lvl9");
 var M7=$f(2,function(N7,O7){
  I7.C([O7],function(P7){
   var Q7=P7[0];
   $$GHCziEventziIntMap_zdwdelete.C([J7,N7],function(R7){
    var S7=R7[0],T7=R7[1];
    $M(S7,function(U7){
     switch(U7.g){
     case 1:
      var V7=$d(1,[N7,$$GHCziTypes_ZMZN],"sat");
      $r([Q7,V7]);break;
     case 2:
      var W7=U7.v[0];
      $M(T7,function(X7){
       $$GHCziBase_map.C([$$GHCziEventziManager_fdEvents,W7],function(Y7){
	$$GHCziEventziManager_zdwlgo.C([0,Y7],function(Z7){
	 switch(Z7){
	 case 0:
	  var D8=$d(1,[X7,W7],"sat");
	  $r([Q7,D8]);break;
	 default:
	  var a8=$hs_newAlignedPinnedByteArrayzh(1,1,Q7);
	  var b8=a8[0],c8=a8[1];
	  var d8=$hs_unsafeFreezzeByteArrayzh(c8,b8);
	  var e8=d8[0],f8=d8[1];
	  var B8=$hs_byteArrayContentszh(f8);
	  var C8=$hs_writeWord8OffAddrzh(B8,0,255,e8);
	  $M(B7,function(g8){
	   var h8=g8.v[8];
	   var $ff=write(h8,B8,1);
	   var i8=[C8,$ff];
	   var j8=i8[0],k8=i8[1];
	   var n8=$hs_touchzh(f8,j8);
	   $M(k8,function(l8){
	    switch(l8){
	    case  -1:
	     var $ff=__hscore_get_errno();
	     var o8=[n8,$ff];
	     var p8=o8[0],q8=o8[1];
	     $M(q8,function(r8){
	      switch(r8){
	      case 35:
	       var A8=$d(1,[X7,W7],"sat");
	       $r([p8,A8]);break;
	      default:
	       var $ff=__hscore_get_errno();
	       var s8=[p8,$ff];
	       var t8=s8[0],u8=s8[1];
	       var v8=$d(1,[u8],"sat");
	       $$ForeignziCziError_errnoToIOError.C([$$GHCziEventziControl_sendWakeup2,v8,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(w8){
		$$GHCziIOziException_ioError.C([w8,t8],function(x8){
		 var y8=x8[0];
		 var z8=$d(1,[X7,W7],"sat");
		 $r([y8,z8]);
		},[W7,X7]);
	       },[W7,X7,t8]);
	      }
	     },[W7,X7,p8]);break;
	    default:
	     var m8=$d(1,[X7,W7],"sat");
	     $r([n8,m8]);
	    }
	   },[W7,n8,X7]);
	  },[W7,f8,B8,C8,X7]);
	 }
	},[Q7,W7,B7,X7]);
       },[Q7,W7,B7,X7]);
      },[Q7,W7,B7]);break;
     }
    },[N7,Q7,T7,B7]);
   },[N7,Q7,B7]);
  },[J7,N7,B7]);
 },[I7,J7,B7],"a5");
 $M(H7,function(E8){
  switch(E8){
  case 0:
   var T8=$f(1,function(U8){
    $M(B7,function(V8){
     var W8=V8.v[1];
     $b($hs_takeMVarzh,[W8,U8],function(X8){
      var Y8=X8[0],Z8=X8[1];
      var a9=$f(2,function(o1,J){
       $$GHCziEventziManager$c.J(Z8,W8,o1,J);
      },[W8,Z8],"sat");
      var b9=$f(1,function(J){
       M7.J(Z8,J);
      },[M7,Z8],"sat");
      var c9=$f(1,function(J){
       $k($hs_unmaskAsyncExceptionszh,[b9,J]);
      },[b9],"sat");
      $b($hs_catchzh,[c9,a9,Y8],function(d9){
       var e9=d9[0],f9=d9[1];
       $M(f9,function(g9){
	var h9=g9.v[0],i9=g9.v[1];
	$b($hs_putMVarzh,[W8,h9,e9],function(j9){
	 $r([j9,i9]);
	},[i9]);
       },[W8,e9]);
      },[W8]);
     },[M7,W8]);
    },[M7,U8]);
   },[B7,M7],"sat");
   $b($hs_maskAsyncExceptionszh,[T8,G7],function(k9){
    var l9=k9[0],m9=k9[1];
    $$GHCziEventziManager$d.J(m9,l9);
   },[]);break;
  default:
   $M(B7,function(F8){
    var G8=F8.v[1];
    $b($hs_takeMVarzh,[G8,G7],function(H8){
     var I8=H8[0],J8=H8[1];
     var K8=$f(2,function(o1,J){
      $$GHCziEventziManager$c.J(J8,G8,o1,J);
     },[G8,J8],"sat");
     var L8=$f(1,function(J){
      M7.J(J8,J);
     },[M7,J8],"sat");
     $b($hs_catchzh,[L8,K8,I8],function(M8){
      var N8=M8[0],O8=M8[1];
      $M(O8,function(P8){
       var Q8=P8.v[0],R8=P8.v[1];
       $b($hs_putMVarzh,[G8,Q8,N8],function(S8){
	$$GHCziEventziManager$b.J(R8,S8);
       },[R8]);
      },[G8,N8]);
     },[G8]);
    },[M7,G8]);
   },[M7,G7]);
  }
 },[B7,M7,G7]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager$a=$F(4,function(pJ,qJ,rJ,sJ){
 var tJ=$f(1,function(uJ){
  $b($hs_putMVarzh,[qJ,pJ,uJ],function(vJ){
   $r([vJ,$$GHCziTuple_Z0T]);
  },[]);
 },[qJ,pJ],"sat");
 $$ControlziExceptionziBase_finally2.J(tJ,rJ,sJ);
},"lvl");
var $$GHCziEventziManager$b=$F(2,function(wJ,xJ){
 $M(wJ,function(yJ){
  switch(yJ.g){
  case 1:
   $r([xJ,$$GHCziTuple_Z0T]);break;
  case 2:
   var zJ=yJ.v[0],AJ=yJ.v[1];
   $M(zJ,function(BJ){
    var CJ=BJ.v[0],DJ=BJ.v[1],EJ=BJ.v[2],FJ=BJ.v[3];
    var MJ=EJ>>>0;
    var LJ=MJ|4;
    var HJ=LJ|0;
    var GJ=$d(1,[HJ],"sat");
    var IJ=$d(1,[CJ,DJ],"sat");
    FJ.C([IJ,GJ,xJ],function(JJ){
     var KJ=JJ[0];
     $$GHCziEventziManager$b.J(AJ,KJ);
    },[AJ]);
   },[xJ,AJ]);break;
  }
 },[xJ]);
},"a");
var $$GHCziEventziManager$c=$F(4,function(NJ,OJ,PJ,QJ){
 var RJ=$f(1,function(SJ){
  $b($hs_putMVarzh,[OJ,NJ,SJ],function(TJ){
   $r([TJ,$$GHCziTuple_Z0T]);
  },[]);
 },[OJ,NJ],"sat");
 $$ControlziExceptionziBase_finally2.J(RJ,PJ,QJ);
},"lvl1");
var $$GHCziEventziManager$d=$F(2,function(UJ,VJ){
 $M(UJ,function(WJ){
  switch(WJ.g){
  case 1:
   $r([VJ,$$GHCziTuple_Z0T]);break;
  case 2:
   var XJ=WJ.v[0],YJ=WJ.v[1];
   $M(XJ,function(ZJ){
    var aK=ZJ.v[0],bK=ZJ.v[1],cK=ZJ.v[2],dK=ZJ.v[3];
    var kK=cK>>>0;
    var jK=kK|4;
    var fK=jK|0;
    var eK=$d(1,[fK],"sat");
    var gK=$d(1,[aK,bK],"sat");
    dK.C([gK,eK,VJ],function(hK){
     var iK=hK[0];
     $$GHCziEventziManager$d.J(YJ,iK);
    },[YJ]);
   },[VJ,YJ]);break;
  }
 },[VJ]);
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
      var v=u.v[0],w=u.v[1],x=u.v[2],y=u.v[3],z=u.v[4],A=u.v[8];
      $M(v,function(B){
       var C=B.v[0],D=B.v[2];
       var E=$f(1,function(F){
	var G=$hs_readTVarzh(z,F);
	var H=G[0],I=G[1];
	$M(I,function(J){
	 var K=J.v[0];
	 var $ff=hs_plusInt64(K,goog.math.Long.fromBits(1,0));
	 var L=[$$GHCziPrim_realWorldzh,$ff];
	 var M=L[1];
	 var N=$d(1,[M],"u'");
	 var O=$hs_writeTVarzh(z,N,H);
	 $r([O,N]);
	},[z,H]);
       },[z],"sat");
       var P=$hs_atomicallyzh(E,q);
       var Q=P[0],R=P[1];
       var S=$hs_getMaskingStatezh(Q);
       var T=S[0],U=S[1];
       var V=$f(3,function(W,X,Y){
	var Z=$f(1,function(a1){
	 var b1=$f(2,function(c1,b){
	  $$GHCziEventziThread$l.J(B,w,x,y,z,X,c1,b);
	 },[z,B,w,x,y,X],"sat");
	 var d1=$f(1,function(e1){
	  $k($hs_takeMVarzh,[m,e1]);
	 },[m],"sat");
	 $b($hs_catchzh,[d1,b1,a1],function(f1){
	  var g1=f1[0],h1=f1[1];
	  $M(h1,function(i1){
	   var j1=i1.v[0];
	   var m1=j1>>>0;
	   var l1=m1&4;
	   var k1=l1|0;
	   switch(k1){
	   case 0:
	    $r([g1,$$GHCziTuple_Z0T]);break;
	   default:
	    $$GHCziIOziException_ioError.J($$GHCziEventziThread$j,g1);
	   }
	  },[g1]);
	 },[]);
	},[z,m,B,w,x,y,X],"$w$j1");
	$M(Y,function(n1){
	 switch(n1.g){
	 case 1:
	  Z.J(W);break;
	 case 2:
	  var o1=$hs_newAlignedPinnedByteArrayzh(1,1,W);
	  var p1=o1[0],q1=o1[1];
	  var r1=$hs_unsafeFreezzeByteArrayzh(q1,p1);
	  var s1=r1[0],t1=r1[1];
	  var K1=$hs_byteArrayContentszh(t1);
	  var L1=$hs_writeWord8OffAddrzh(K1,0,255,s1);
	  var $ff=write(A,K1,1);
	  var u1=[L1,$ff];
	  var v1=u1[0],w1=u1[1];
	  var y1=$hs_touchzh(t1,v1);
	  $M(w1,function(x1){
	   switch(x1){
	   case  -1:
	    var $ff=__hscore_get_errno();
	    var z1=[y1,$ff];
	    var A1=z1[0],B1=z1[1];
	    $M(B1,function(C1){
	     switch(C1){
	     case 35:
	      Z.J(A1);break;
	     default:
	      var $ff=__hscore_get_errno();
	      var D1=[A1,$ff];
	      var E1=D1[0],F1=D1[1];
	      var G1=$d(1,[F1],"sat");
	      $$ForeignziCziError_errnoToIOError.C([$$GHCziEventziControl_sendWakeup2,G1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(H1){
	       $$GHCziIOziException_ioError.C([H1,E1],function(I1){
		var J1=I1[0];
		Z.J(J1);
	       },[z,m,B,w,x,y,X,Z]);
	      },[z,m,B,w,x,y,X,Z,E1]);
	     }
	    },[z,m,B,w,x,y,X,Z,A1]);break;
	   default:
	    Z.J(y1);
	   }
	  },[z,m,B,w,x,y,X,Z,y1]);break;
	 }
	},[z,m,B,w,x,y,X,Z,W,A]);
       },[z,m,B,w,x,y,A],"$w$j");
       var M1=$f(4,function(N1,O1,P1,Q1){
	$$GHCziEventziManager_zdwa2.C([B,w,x,y,z,N1,O1,Q1],function(R1){
	 var S1=R1[0];
	 $b($hs_putMVarzh,[m,P1,S1],function(T1){
	  $r([T1,$$GHCziTuple_Z0T]);
	 },[]);
	},[m,P1]);
       },[z,m,B,w,x,y],"$wa");
       var U1=$f(3,function(V1,W1,X1){
	$M(V1,function(Y1){
	 var Z1=Y1.v[0],a2=Y1.v[1];
	 M1.J(Z1,a2,W1,X1);
	},[M1,W1,X1]);
       },[M1],"a9");
       var b2=$f(2,function(c2,d2){
	$b($hs_takeMVarzh,[w,d2],function(e2){
	 var f2=e2[0],g2=e2[1];
	 var h2=$f(2,function(c1,b){
	  $$GHCziEventziThread$k.J(g2,w,c1,b);
	 },[w,g2],"sat");
	 var i2=$t(function(){
	  var j2=$t(function(){
	   $M(d,function(k2){
	    var l2=k2.v[0];
	    $M(R,function(m2){
	     var n2=m2.v[0];
	     $M(c,function(o2){
	      var p2=o2.v[0];
	      var q2=$f(1,function(r2){
	       var s2=$T(function(){
		$M(v2,function(t2){
		 var u2=t2.v[0];
		 $A(u2);
		},[]);
	       },"newMap"),v2=$t(function(){
		var w2=$d(1,[l2,n2,p2,U1],"sat");
		var x2=$d(2,[w2,$$GHCziTypes_ZMZN],"sat");
		$$GHCziEventziIntMap_insertWithzuzdszdwinsertWith.C([$$GHCziBase_zpzp,l2,x2,g2],function(y2){
		 var z2=y2[0],A2=y2[1];
		 $M(z2,function(B2){
		  switch(B2.g){
		  case 1:
		   $M(A2,function(C2){
		    $R(1,[C2,$$GHCziEventziInternal_evtNothing,o2],"(,,)");
		   },[o2]);break;
		  case 2:
		   var D2=B2.v[0];
		   $M(A2,function(E2){
		    var F2=$t(function(){
		     var I2=l2>>>0;
		     $$GHCziEventziIntMap_lookupzuzdslookupN.C([I2,s2],function(G2){
		      switch(G2.g){
		      case 1:
		       $A($$GHCziEventziInternal_evtNothing);break;
		      case 2:
		       var H2=G2.v[0];
		       $$GHCziEventziManager_eventsOf.J(H2);break;
		      }
		     },[]);
		    },[s2,l2],"sat");
		    var J2=$t(function(){
		     $$GHCziEventziManager_eventsOf.J(D2);
		    },[D2],"sat");
		    $R(1,[E2,J2,F2],"(,,)");
		   },[s2,l2,D2]);break;
		  }
		 },[s2,l2,A2,o2]);
		},[s2,l2,o2]);
	       },[U1,s2,l2,n2,p2,g2,o2],"ds1");
	       $S(s2,[v2]);
	       $M(v2,function(K2){
		var L2=K2.v[1],M2=K2.v[2];
		$M(L2,function(N2){
		 var O2=N2.v[0];
		 $M(M2,function(P2){
		  var Q2=P2.v[0];
		  var R2=O2!=Q2?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(R2.g){
		  case 1:
		   var S2=$d(1,[l2,n2],"sat");
		   var T2=$d(1,[S2,$$GHCziTypes_False],"sat");
		   var U2=$d(1,[s2,T2],"sat");
		   $r([r2,U2]);break;
		  case 2:
		   D.C([C,k2,N2,P2,r2],function(V2){
		    var W2=V2[0];
		    var X2=$d(1,[l2,n2],"sat");
		    var Y2=$d(1,[X2,$$GHCziTypes_True],"sat");
		    var Z2=$d(1,[s2,Y2],"sat");
		    $r([W2,Z2]);
		   },[s2,l2,n2]);break;
		  }
		 },[s2,l2,n2,O2,r2,C,k2,N2,D]);
		},[s2,l2,n2,M2,r2,C,k2,D]);
	       },[s2,l2,n2,r2,C,k2,D]);
	      },[U1,l2,n2,p2,g2,o2,C,k2,D],"sat");
	      $A(q2);
	     },[U1,l2,n2,g2,C,k2,D]);
	    },[U1,c,l2,g2,C,k2,D]);
	   },[U1,R,c,g2,C,D]);
	  },[U1,d,R,c,g2,C,D],"sat");
	  c2.J(j2);
	 },[U1,d,R,c,g2,C,D,c2],"sat");
	 $b($hs_catchzh,[i2,h2,f2],function(a3){
	  var b3=a3[0],c3=a3[1];
	  $M(c3,function(d3){
	   var e3=d3.v[0],f3=d3.v[1];
	   $b($hs_putMVarzh,[w,e3,b3],function(g3){
	    $r([g3,f3]);
	   },[f3]);
	  },[w,b3]);
	 },[w]);
	},[w,U1,d,R,c,C,D,c2]);
       },[w,U1,d,R,c,C,D],"a10");
       $M(U,function(h3){
	switch(h3){
	case 0:
	 var o3=$f(2,function(c1,b){
	  $k($hs_unmaskAsyncExceptionszh,[c1,b]);
	 },[],"sat");
	 var p3=$f(1,function(b){
	  b2.J(o3,b);
	 },[b2,o3],"sat");
	 $b($hs_maskAsyncExceptionszh,[p3,T],function(q3){
	  var r3=q3[0],s3=q3[1];
	  $M(s3,function(t3){
	   var u3=t3.v[0],v3=t3.v[1];
	   V.J(r3,u3,v3);
	  },[z,m,B,w,x,y,A,V,r3]);
	 },[z,m,B,w,x,y,A,V]);break;
	default:
	 b2.C([$$GHCziBase_id,T],function(i3){
	  var j3=i3[0],k3=i3[1];
	  $M(k3,function(l3){
	   var m3=l3.v[0],n3=l3.v[1];
	   V.J(j3,m3,n3);
	  },[z,m,B,w,x,y,A,V,j3]);
	 },[z,m,B,w,x,y,A,V]);
	}
       },[z,m,B,w,x,y,A,V,b2,T]);
      },[q,z,m,w,x,y,A,d,c]);
     },[q,m,d,c]);break;
    }
   },[q,m,d,c]);
  },[l,m,d,c]);
 },[d,c],"a6");
 $M(h,function(w3){
  switch(w3){
  case 0:
   $k($hs_maskAsyncExceptionszh,[i,g]);break;
  default:
   i.J(g);
  }
 },[i,g]);
},[],"in `base:GHC.Event.Thread'");
var $$GHCziEventziThread_closeFdWith2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at libraries/base/GHC/Event/Thread.hs:84:3-10\x00");
},[],"in `base:GHC.Event.Thread'");
var $$GHCziEventziThread$b=$F(2,function(m6,n6){
 $M(m6,function(o6){
  var p6=o6.v[0];
  var $ff=getOrSetSystemEventThreadEventManagerStore(p6);
  var q6=[n6,$ff];
  var r6=q6[0],s6=q6[1];
  var t6=$d(1,[s6],"sat");
  $r([r6,t6]);
 },[n6]);
},"a");
var $$GHCziEventziThread$c=$F(2,function(c1,b){
 $$GHCziEventziThread$b.J(c1,b);
},"at libraries/base/GHC/Event/Thread.hs:105:5");
var $$GHCziEventziThread$g=$F(1,function(E6){
 var J6=$hs_noDuplicatezh(E6);
 var F6=$hs_newMutVarzh($$DataziMaybe_Nothing,J6);
 var G6=F6[0],H6=F6[1];
 var I6=$d(1,[H6],"sat");
 $$GHCziConcziSync_sharedCAF1.J(I6,$$GHCziEventziThread$c,G6);
},"lvl");
var $$GHCziEventziThread$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at libraries/base/GHC/Event/Thread.hs:90:3-10\x00");
},"a2");
var $$GHCziEventziThread$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("threadWait\x00");
},"lvl1");
var $$GHCziEventziThread$j=$T(function(){
 $$ForeignziCziError_errnoToIOError.J($$GHCziEventziThread$i,$$ForeignziCziError_eBADF1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing);
},"a3");
var $$GHCziEventziThread$k=$F(4,function(K6,L6,M6,N6){
 var O6=$f(1,function(P6){
  $b($hs_putMVarzh,[L6,K6,P6],function(Q6){
   $r([Q6,$$GHCziTuple_Z0T]);
  },[]);
 },[L6,K6],"sat");
 $$ControlziExceptionziBase_finally2.J(O6,M6,N6);
},"lvl2");
var $$GHCziEventziThread$l=$F(8,function(R6,S6,T6,U6,V6,W6,X6,Y6){
 var Z6=$f(1,function(a7){
  $M(W6,function(b7){
   var c7=b7.v[0],d7=b7.v[1];
   $$GHCziEventziManager_zdwa2.J(R6,S6,T6,U6,V6,c7,d7,a7);
  },[R6,S6,T6,U6,V6,a7]);
 },[W6,R6,S6,T6,U6,V6],"sat");
 $$GHCziIO_finally2.J(Z6,X6,Y6);
},"lvl3");

var $$GHCziException_zdp2Exception=$f(1,function(d){
 $M(d,function(e){
  var f=e.v[1];
  $A(f);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:140:31");

var $$GHCziForeign_zdwa=$f(3,function(f,g,h){
 var i=$f(2,function(j,k){
  var l=$hs_readInt8OffAddrzh(g,j,k);
  var m=l[0],n=l[1];
  $M(n,function(o){
   switch(o){
   case 0:
    var q=$d(1,[j],"sat");
    $r([m,q]);break;
   default:
    var p=j+1|0;
    i.J(p,m);
   }
  },[j,i,m]);
 },[g],"$sa");
 i.C([0,h],function(r){
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
      var n3=I*4|0;
      var J=n3<0?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(J.g){
      case 1:
       var K=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,D);
       var L=K[0],M=K[1];
       var N=$hs_newPinnedByteArrayzh(n3,L);
       var O=N[0],P=N[1];
       var Q=$d(1,[M],"a3");
       var R=$d(2,[P,Q],"a4");
       var T=$hs_byteArrayContentszh(P);
       var S=$d(1,[T,R,$$GHCziIOziBuffer_WriteBuffer,I,0,0],"to");
       $M(A,function(U){
	var V=U.v[0],W=U.v[1];
	var X=$d(1,[E],"sat");
	var Y=$d(1,[X],"sat");
	var Z=$d(1,[g,Y,$$GHCziIOziBuffer_ReadBuffer,G,0,G],"sat");
	V.C([Z,S,O],function(a1){
	 var b1=a1[0],c1=a1[1];
	 $M(c1,function(d1){
	  var e1=d1.v[0],f1=d1.v[1],g1=d1.v[2];
	  $M(f1,function(h1){
	   var i1=h1.v[4],j1=h1.v[5];
	   var k1=i1==j1?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(k1.g){
	   case 1:
	    var l1=$f(6,function(m1,n1,o1,p1,q1,r1){
	     var s1=$d(1,[n1],"sat");
	     var K2=q1-p1|0;
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
		  var K1=I1==J1?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(K1.g){
		  case 1:
		   var M1=x1+1|0;
		   var L1=$f(6,function(N1,O1,P1,Q1,R1,S1){
		    var T1=$d(1,[O1],"sat");
		    var c2=R1-Q1|0;
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
		    var E2=y2-x2|0;
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
	      w1.C([1,m1,J2],function(F2){
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
	     var m3=g3-f3|0;
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
     var o3=G<=1?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(o3.g){
     case 1:
      H.J(G);break;
     case 2:
      H.J(1);break;
     }
    },[g,D,A,E]);
   },[g,t],"a2");
   $M(y,function(p3){
    switch(p3){
    case 0:
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
var $$GHCziForeign_charIsRepresentable3=$f(4,function(W3,X3,Y3,Z3){
 $M(W3,function(a4){
  var b4=a4.v[2];
  var c4=$hs_getMaskingStatezh(Z3);
  var d4=c4[0],e4=c4[1];
  var f4=$f(1,function(g4){
   $M(g4,function(h4){
    var i4=h4.v[0];
    Y3.J(i4);
   },[Y3]);
  },[Y3],"act1");
  var j4=$f(1,function(k4){
   var l4=$f(3,function(m4,n4,o4){
    $M(n4,function(p4){
     var q4=p4.v[0];
     var r4=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,o4);
     var s4=r4[0],t4=r4[1];
     $M(m4,function(u4){
      var v4=u4.v[0];
      var w4=$d(1,[t4],"a1");
      var x4=$d(1,[w4],"a2");
      var y4=$d(1,[q4,x4,$$GHCziIOziBuffer_ReadBuffer,v4,0,v4],"from");
      var z4=$f(3,function(A4,B4,C4){
       var D4=$hs_newPinnedByteArrayzh(B4,C4);
       var E4=D4[0],F4=D4[1];
       var G4=$hs_unsafeFreezzeByteArrayzh(F4,E4);
       var H4=G4[0],I4=G4[1];
       var J4=$d(1,[B4],"sat");
       var W4=$hs_byteArrayContentszh(I4);
       $$GHCziForeign$d.C([k4,$$GHCziTypes_True,y4,W4,J4,f4,H4],function(K4){
	var L4=K4[0],M4=K4[1];
	$M(M4,function(N4){
	 switch(N4.g){
	 case 1:
	  var T4=B4*2|0;
	  var S4=A4+1|0;
	  z4.C([S4,T4,L4],function(O4){
	   var P4=O4[0],Q4=O4[1];
	   var R4=$hs_touchzh(I4,P4);
	   $r([R4,Q4]);
	  },[I4]);break;
	 case 2:
	  var U4=N4.v[0];
	  var V4=$hs_touchzh(I4,L4);
	  $r([V4,U4]);break;
	 }
	},[B4,I4,A4,z4,L4]);
       },[B4,I4,A4,z4]);
      },[f4,y4,k4],"$s$wa");
      var X4=v4+1|0;
      z4.J(0,X4,s4);
     },[f4,t4,q4,k4,s4]);
    },[f4,o4,m4,k4]);
   },[f4,k4],"sat");
   $$ForeignziMarshalziArray_withArrayLen.J($$ForeignziStorable_zdfStorableChar,X3,l4);
  },[f4,X3],"thing");
  $M(e4,function(Y4){
   switch(Y4){
   case 0:
    var l5=$f(1,function(m5){
     b4.C([m5],function(n5){
      var o5=n5[0],p5=n5[1];
      var q5=$f(2,function(c,d){
       $$GHCziForeign$e.J(p5,c,d);
      },[p5],"sat");
      var r5=$t(function(){
       j4.J(p5);
      },[j4,p5],"sat");
      var s5=$f(1,function(d){
       $k($hs_unmaskAsyncExceptionszh,[r5,d]);
      },[r5],"sat");
      $b($hs_catchzh,[s5,q5,o5],function(t5){
       var u5=t5[0],v5=t5[1];
       $M(p5,function(w5){
	var x5=w5.v[2];
	x5.C([u5],function(y5){
	 var z5=y5[0];
	 $r([z5,v5]);
	},[v5]);
       },[u5,v5]);
      },[p5]);
     },[j4]);
    },[j4,b4],"sat");
    $k($hs_maskAsyncExceptionszh,[l5,d4]);break;
   default:
    b4.C([d4],function(Z4){
     var a5=Z4[0],b5=Z4[1];
     var c5=$f(2,function(c,d){
      $$GHCziForeign$e.J(b5,c,d);
     },[b5],"sat");
     var d5=$t(function(){
      j4.J(b5);
     },[j4,b5],"sat");
     $b($hs_catchzh,[d5,c5,a5],function(e5){
      var f5=e5[0],g5=e5[1];
      $M(b5,function(h5){
       var i5=h5.v[2];
       i5.C([f5],function(j5){
	var k5=j5[0];
	$r([k5,g5]);
       },[g5]);
      },[f5,g5]);
     },[b5]);
    },[j4]);
   }
  },[j4,d4,b4]);
 },[Z3,Y3,X3]);
},[],"in `base:GHC.Foreign'");
var $$GHCziForeign$a=$F(3,function(gc,hc,ic){
 var jc=$t(function(){
  $$GHCziIOziEncodingziTypes_close.J(gc);
 },[gc],"sat");
 $$GHCziIO_bracket2.J(jc,hc,ic);
},"lvl");
var $$GHCziForeign$d=$F(7,function(Uf,Vf,Wf,Xf,Yf,Zf,ag){
 var bg=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,ag);
 var cg=bg[0],dg=bg[1];
 $M(Uf,function(eg){
  var fg=eg.v[0],gg=eg.v[1];
  var hg=$t(function(){
   $M(Yf,function(ig){
    var jg=ig.v[0];
    var kg=$d(1,[dg],"sat");
    var lg=$d(1,[kg],"sat");
    $R(1,[Xf,lg,$$GHCziIOziBuffer_WriteBuffer,jg,0,0],"Buffer");
   },[Xf,dg]);
  },[Yf,Xf,dg],"sat");
  fg.C([Wf,hg,cg],function(mg){
   var ng=mg[0],og=mg[1];
   $M(og,function(pg){
    var qg=pg.v[0],rg=pg.v[1],sg=pg.v[2];
    $M(rg,function(tg){
     var ug=tg.v[4],vg=tg.v[5];
     var wg=ug==vg?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(wg.g){
     case 1:
      $M(qg,function(xg){
       switch(xg.g){
       case 2:
	$r([ng,$$DataziMaybe_Nothing]);break;
       default:
	gg.C([tg,sg,ng],function(yg){
	 var zg=yg[0],Ag=yg[1];
	 $M(Ag,function(Bg){
	  var Cg=Bg.v[0],Dg=Bg.v[1];
	  var Eg=$f(4,function(Fg,Gg,Hg,Ig){
	   fg.C([Gg,Hg,Ig],function(Jg){
	    var Kg=Jg[0],Lg=Jg[1];
	    $M(Lg,function(Mg){
	     var Ng=Mg.v[0],Og=Mg.v[1],Pg=Mg.v[2];
	     $M(Og,function(Qg){
	      var Rg=Qg.v[4],Sg=Qg.v[5];
	      var Tg=Rg==Sg?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Tg.g){
	      case 1:
	       $M(Ng,function(Ug){
		switch(Ug.g){
		case 2:
		 $r([Kg,$$DataziMaybe_Nothing]);break;
		default:
		 gg.C([Qg,Pg,Kg],function(Vg){
		  var Wg=Vg[0],Xg=Vg[1];
		  $M(Xg,function(Yg){
		   var Zg=Yg.v[0],ah=Yg.v[1];
		   var bh=Fg+1|0;
		   Eg.J(bh,Zg,ah,Wg);
		  },[fg,gg,Fg,Eg,Wg,Vf,Zf]);
		 },[fg,gg,Fg,Eg,Vf,Zf]);
		}
	       },[fg,gg,Qg,Pg,Kg,Fg,Eg,Vf,Zf]);break;
	      case 2:
	       var ch=$f(1,function(dh){
		$M(Pg,function(eh){
		 var fh=eh.v[0],gh=eh.v[1],hh=eh.v[4],ih=eh.v[5];
		 $M(Vf,function(jh){
		  switch(jh.g){
		  case 1:
		   var lh=ih-hh|0;
		   var kh=$d(1,[lh],"sat");
		   var mh=$d(1,[fh],"sat");
		   var nh=$d(1,[mh,kh],"sat");
		   Zf.C([nh,dh],function(oh){
		    var ph=oh[0],qh=oh[1];
		    var sh=$hs_touchzh(gh,ph);
		    var rh=$d(2,[qh],"sat");
		    $r([sh,rh]);
		   },[gh]);break;
		  case 2:
		   var Ch=$hs_writeWord8OffAddrzh(fh,ih,0,dh);
		   var uh=ih-hh|0;
		   var th=$d(1,[uh],"sat");
		   var vh=$d(1,[fh],"sat");
		   var wh=$d(1,[vh,th],"sat");
		   Zf.C([wh,Ch],function(xh){
		    var yh=xh[0],zh=xh[1];
		    var Bh=$hs_touchzh(gh,yh);
		    var Ah=$d(2,[zh],"sat");
		    $r([Bh,Ah]);
		   },[gh]);break;
		  }
		 },[fh,ih,hh,Zf,dh,gh]);
		},[Vf,Zf,dh]);
	       },[Pg,Vf,Zf],"$wa3");
	       $M(Vf,function(Dh){
		switch(Dh.g){
		case 1:
		 ch.J(Kg);break;
		case 2:
		 $M(Pg,function(Eh){
		  var Fh=Eh.v[3],Gh=Eh.v[5];
		  var Hh=Fh-Gh|0;
		  switch(Hh){
		  case 0:
		   $r([Kg,$$DataziMaybe_Nothing]);break;
		  default:
		   ch.J(Kg);
		  }
		 },[Pg,Kg,Vf,Zf,ch]);break;
		}
	       },[Pg,Kg,Vf,Zf,ch]);break;
	      }
	     },[fg,gg,Ng,Pg,Kg,Fg,Eg,Vf,Zf]);
	    },[fg,gg,Kg,Fg,Eg,Vf,Zf]);
	   },[fg,gg,Fg,Eg,Vf,Zf]);
	  },[fg,gg,Vf,Zf],"$s$wa");
	  Eg.J(1,Cg,Dg,zg);
	 },[fg,gg,Vf,Zf,zg]);
	},[fg,gg,Vf,Zf]);
       }
      },[fg,tg,sg,ng,gg,Vf,Zf]);break;
     case 2:
      var Ih=$f(1,function(Jh){
       $M(sg,function(Kh){
	var Lh=Kh.v[0],Mh=Kh.v[1],Nh=Kh.v[4],Oh=Kh.v[5];
	$M(Vf,function(Ph){
	 switch(Ph.g){
	 case 1:
	  var Rh=Oh-Nh|0;
	  var Qh=$d(1,[Rh],"sat");
	  var Sh=$d(1,[Lh],"sat");
	  var Th=$d(1,[Sh,Qh],"sat");
	  Zf.C([Th,Jh],function(Uh){
	   var Vh=Uh[0],Wh=Uh[1];
	   var Yh=$hs_touchzh(Mh,Vh);
	   var Xh=$d(2,[Wh],"sat");
	   $r([Yh,Xh]);
	  },[Mh]);break;
	 case 2:
	  var ii=$hs_writeWord8OffAddrzh(Lh,Oh,0,Jh);
	  var ai=Oh-Nh|0;
	  var Zh=$d(1,[ai],"sat");
	  var bi=$d(1,[Lh],"sat");
	  var ci=$d(1,[bi,Zh],"sat");
	  Zf.C([ci,ii],function(di){
	   var ei=di[0],fi=di[1];
	   var hi=$hs_touchzh(Mh,ei);
	   var gi=$d(2,[fi],"sat");
	   $r([hi,gi]);
	  },[Mh]);break;
	 }
	},[Zf,Lh,Oh,Nh,Jh,Mh]);
       },[Vf,Zf,Jh]);
      },[sg,Vf,Zf],"$wa3");
      $M(Vf,function(ji){
       switch(ji.g){
       case 1:
	Ih.J(ng);break;
       case 2:
	$M(sg,function(ki){
	 var li=ki.v[3],mi=ki.v[5];
	 var ni=li-mi|0;
	 switch(ni){
	 case 0:
	  $r([ng,$$DataziMaybe_Nothing]);break;
	 default:
	  Ih.J(ng);
	 }
	},[sg,ng,Vf,Zf,Ih]);break;
       }
      },[sg,ng,Vf,Zf,Ih]);break;
     }
    },[fg,qg,sg,ng,gg,Vf,Zf]);
   },[fg,ng,gg,Vf,Zf]);
  },[fg,gg,Vf,Zf]);
 },[Wf,Yf,Xf,dg,cg,Vf,Zf]);
},"$wa2");
var $$GHCziForeign$e=$F(3,function(oi,pi,qi){
 var ri=$t(function(){
  $$GHCziIOziEncodingziTypes_close.J(oi);
 },[oi],"sat");
 $$GHCziIO_bracket2.J(ri,pi,qi);
},"lvl1");

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
 $$GHCziCString_unpackCStringzh.J("mallocForeignPtrBytes: size must be >= 0\x00");
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
  switch(r2){
  case 0:
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
 $$GHCziCString_unpackCStringzh.J("UTF8\x00");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding6=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF32LE\x00");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding7=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF32BE\x00");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding8=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF32\x00");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding9=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF16LE\x00");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding10=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF16BE\x00");
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding11=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UTF16\x00");
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
     switch(u){
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
 $$GHCziCString_unpackCStringzh.J("recoverDecode\x00");
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("invalid byte sequence\x00");
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode4=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_InvalidArgument,$$GHCziIOziEncodingziFailure_recoverDecode6,$$GHCziIOziEncodingziFailure_recoverDecode5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode3=$f(1,function(C){
 var D=$d(1,[C],"sat");
 $$GHCziBase_chr1.J(D);
},[],"in `base:GHC.IO.Encoding.Failure'");
var $$GHCziIOziEncodingziFailure_recoverDecode2=$f(1,function(E){
 var G=E|0;
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
    var Z=M+1|0;
    var Y=$d(1,[I,J,K,L,Z,N],"sat");
    var a1=$d(1,[Y,Q],"sat");
    $r([P,a1]);break;
   case 3:
    var h1=$hs_writeWideCharOffAddrzh(R,W,"\ufffd",P);
    var g1=$hs_touchzh(S,h1);
    var c1=W+1|0;
    var b1=$d(1,[R,S,T,U,V,c1],"sat");
    var e1=M+1|0;
    var d1=$d(1,[I,J,K,L,e1,N],"sat");
    var f1=$d(1,[d1,b1],"sat");
    $r([g1,f1]);break;
   case 4:
    var J1=$hs_plusAddrzh(I,M);
    var i1=$hs_readWord8OffAddrzh(J1,0,P);
    var j1=i1[0],k1=i1[1];
    var w1=$hs_touchzh(J,j1);
    var l1=k1<128?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(l1.g){
    case 1:
     var y1=k1|0;
     var n1=56320+y1|0;
     var x1=n1>>>0;
     var m1=x1<=1114111?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(m1.g){
     case 1:
      $$GHCziIOziEncodingziFailure_recoverDecode3.J(n1);break;
     case 2:
      var v1=$hs_chrzh(n1);
      var u1=$hs_writeWideCharOffAddrzh(R,W,v1,w1);
      var t1=$hs_touchzh(S,u1);
      var p1=W+1|0;
      var o1=$d(1,[R,S,T,U,V,p1],"sat");
      var r1=M+1|0;
      var q1=$d(1,[I,J,K,L,r1,N],"sat");
      var s1=$d(1,[q1,o1],"sat");
      $r([t1,s1]);break;
     }break;
    case 2:
     var z1=k1<=1114111?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(z1.g){
     case 1:
      $$GHCziIOziEncodingziFailure_recoverDecode2.J(k1);break;
     case 2:
      var I1=k1|0;
      var H1=$hs_chrzh(I1);
      var G1=$hs_writeWideCharOffAddrzh(R,W,H1,w1);
      var F1=$hs_touchzh(S,G1);
      var B1=W+1|0;
      var A1=$d(1,[R,S,T,U,V,B1],"sat");
      var D1=M+1|0;
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
    var D2=m2+1|0;
    var C2=$d(1,[i2,j2,k2,l2,D2,n2],"sat");
    var E2=$d(1,[C2,q2],"sat");
    $r([B2,E2]);break;
   case 3:
    $M(z2,function(F2){
     switch(F2){
     case "?":
      var L2=m2+1|0;
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
    var N2=56448<=Z2?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(N2.g){
    case 1:
     $$GHCziIOziEncodingziFailure_zdwa2.J(B2);break;
    case 2:
     var O2=Z2<56576?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(O2.g){
     case 1:
      $$GHCziIOziEncodingziFailure_zdwa2.J(B2);break;
     case 2:
      var Y2=Z2>>>0;
      var X2=Y2&255;
      var W2=$hs_plusAddrzh(r2,w2);
      var V2=$hs_writeWord8OffAddrzh(W2,0,X2,B2);
      var U2=$hs_touchzh(s2,V2);
      var Q2=w2+1|0;
      var P2=$d(1,[r2,s2,t2,u2,v2,Q2],"sat");
      var S2=m2+1|0;
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
 $$GHCziCString_unpackCStringzh.J("recoverEncode\x00");
},"lvl");
var $$GHCziIOziEncodingziFailure$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("invalid character\x00");
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
      switch(q){
      case  -1:
       var $ff=__hscore_get_errno();
       var C=[o,$ff];
       var D=C[0],E=C[1];
       var F=$d(1,[E],"sat");
       $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv$d,F,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(G){
	$$GHCziIOziException_ioError.C([G,D],function(H){
	 var I=H[0],J=H[1];
	 var K=$f(1,function(y){
	  $$GHCziIOziEncodingziIconv$b.J(J,y);
	 },[J],"sat");
	 var L=$f(1,function(y){
	  $$GHCziIOziEncodingziIconv$f.J(K,y);
	 },[K],"sat");
	 var M=$t(function(){
	  d.J(J);
	 },[d,J],"sat");
	 var N=$d(1,[M,c,L,$$GHCziIOziEncodingziIconv$g,$$GHCziIOziEncodingziIconv$h],"sat");
	 $r([I,N]);
	},[d,c]);
       },[d,c,D]);break;
      default:
       var r=$f(1,function(s){
	var $ff=hs_iconv_close(q);
	var t=[s,$ff];
	var u=t[0],v=t[1];
	var w=$d(1,[v],"sat");
	$r([u,w]);
       },[q],"sat");
       var x=$f(1,function(y){
	$$GHCziIOziEncodingziIconv$f.J(r,y);
       },[r],"sat");
       var z=$t(function(){
	var A=$d(1,[q],"sat");
	d.J(A);
       },[q,d],"sat");
       var B=$d(1,[z,c,x,$$GHCziIOziEncodingziIconv$g,$$GHCziIOziEncodingziIconv$h],"sat");
       $r([o,B]);
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
 $$GHCziCString_unpackCStringzh.J("UTF-32LE\x00");
},[],"at libraries/base/GHC/IO/Encoding/Iconv.hs:90:1");
var $$GHCziIOziEncodingziIconv_charzushift=$D(1,function(){
 $r([2]);
},"at libraries/base/GHC/IO/Encoding/Iconv.hs:95:1");
var $$GHCziIOziEncodingziIconv_iconvEncoding4=$D(1,function(){
 $r([0]);
},"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding5=$f(6,function(O,P,Q,R,S,T){
 $M(P,function(U){
  var V=U.v[0],W=U.v[1],X=U.v[2],Y=U.v[3],Z=U.v[4],a1=U.v[5];
  $M(R,function(b1){
   var c1=b1.v[0],d1=b1.v[1],e1=b1.v[2],f1=b1.v[3],g1=b1.v[4],h1=b1.v[5];
   var i1=$hs_newAlignedPinnedByteArrayzh(4,4,T);
   var j1=i1[0],k1=i1[1];
   var l1=$hs_unsafeFreezzeByteArrayzh(k1,j1);
   var m1=l1[0],n1=l1[1];
   $M(Q,function(o1){
    var p1=o1.v[0];
    var q1=$f(1,function(r1){
     var B1=$hs_byteArrayContentszh(n1);
     var a4=$hs_writeAddrOffAddrzh(B1,0,r1,m1);
     var s1=$hs_newAlignedPinnedByteArrayzh(4,4,a4);
     var t1=s1[0],u1=s1[1];
     var v1=$hs_unsafeFreezzeByteArrayzh(u1,t1);
     var w1=v1[0],x1=v1[1];
     $M(S,function(y1){
      var z1=y1.v[0];
      var A1=$f(1,function(C1){
       var K1=$hs_byteArrayContentszh(x1);
       var V3=$hs_writeAddrOffAddrzh(K1,0,C1,w1);
       var D1=$hs_newAlignedPinnedByteArrayzh(4,4,V3);
       var E1=D1[0],F1=D1[1];
       var G1=$hs_unsafeFreezzeByteArrayzh(F1,E1);
       var H1=G1[0],I1=G1[1];
       var J1=$f(1,function(L1){
	var T1=$hs_byteArrayContentszh(I1);
	var Q3=$hs_writeWord32OffAddrzh(T1,0,L1,H1);
	var M1=$hs_newAlignedPinnedByteArrayzh(4,4,Q3);
	var N1=M1[0],O1=M1[1];
	var P1=$hs_unsafeFreezzeByteArrayzh(O1,N1);
	var Q1=P1[0],R1=P1[1];
	var S1=$f(1,function(U1){
	 var K3=$hs_byteArrayContentszh(R1);
	 var L3=$hs_writeWord32OffAddrzh(K3,0,U1,Q1);
	 $M(O,function(V1){
	  var W1=V1.v[0];
	  var $ff=hs_iconv(W1,B1,T1,K1,K3);
	  var X1=[L3,$ff];
	  var Y1=X1[0],Z1=X1[1];
	  var a2=$hs_readWord32OffAddrzh(T1,0,Y1);
	  var b2=a2[0],c2=a2[1];
	  var d2=$hs_readWord32OffAddrzh(K3,0,b2);
	  var e2=d2[0],f2=d2[1];
	  var g2=$t(function(){
	   var h2=z1>=32?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(h2.g){
	   case 1:
	    var j2=f2|0;
	    var i2=j2>>z1;
	    $R(1,[i2],"I#");break;
	   case 2:
	    var l2=f2|0;
	    var k2=l2<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(k2.g){
	    case 1:
	     $A($$GHCziIOziEncodingziIconv_iconvEncoding4);break;
	    case 2:
	     $A($$GHCziIOziEncodingziIconv$i);break;
	    }break;
	   }
	  },[z1,f2],"new_outleft'");
	  var m2=$t(function(){
	   var n2=c2==0?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(n2.g){
	   case 1:
	    var o2=p1>=32?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(o2.g){
	    case 1:
	     var r2=c2|0;
	     var q2=r2>>p1;
	     var p2=a1-q2|0;
	     $R(1,[V,W,X,Y,p2,a1],"Buffer");break;
	    case 2:
	     var u2=c2|0;
	     var s2=u2<0?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(s2.g){
	     case 1:
	      $R(1,[V,W,X,Y,a1,a1],"Buffer");break;
	     case 2:
	      var t2=a1- -1|0;
	      $R(1,[V,W,X,Y,t2,a1],"Buffer");break;
	     }break;
	    }break;
	   case 2:
	    $R(1,[V,W,X,Y,0,0],"Buffer");break;
	   }
	  },[c2,p1,V,W,X,Y,a1],"new_input");
	  var v2=Z1==4294967295?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(v2.g){
	  case 1:
	   var G2=$hs_touchzh(R1,e2);
	   var F2=$hs_touchzh(I1,G2);
	   var E2=$hs_touchzh(x1,F2);
	   var D2=$hs_touchzh(n1,E2);
	   var C2=$hs_touchzh(d1,D2);
	   var B2=$hs_touchzh(W,C2);
	   var w2=$t(function(){
	    $M(g2,function(x2){
	     var y2=x2.v[0];
	     var z2=f1-y2|0;
	     $R(1,[c1,d1,e1,f1,g1,z2],"Buffer");
	    },[d1,c1,e1,f1,g1]);
	   },[g2,d1,c1,e1,f1,g1],"sat");
	   var A2=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,m2,w2],"sat");
	   $r([B2,A2]);break;
	  case 2:
	   var $ff=__hscore_get_errno();
	   var H2=[e2,$ff];
	   var I2=H2[0],J2=H2[1];
	   $M(J2,function(K2){
	    switch(K2){
	    case 7:
	     var j3=$hs_touchzh(R1,I2);
	     var i3=$hs_touchzh(I1,j3);
	     var h3=$hs_touchzh(x1,i3);
	     var g3=$hs_touchzh(n1,h3);
	     var f3=$hs_touchzh(d1,g3);
	     var e3=$hs_touchzh(W,f3);
	     var Z2=$t(function(){
	      $M(g2,function(a3){
	       var b3=a3.v[0];
	       var c3=f1-b3|0;
	       $R(1,[c1,d1,e1,f1,g1,c3],"Buffer");
	      },[d1,c1,e1,f1,g1]);
	     },[g2,d1,c1,e1,f1,g1],"sat");
	     var d3=$d(1,[$$GHCziIOziEncodingziTypes_OutputUnderflow,m2,Z2],"sat");
	     $r([e3,d3]);break;
	    case 22:
	     var u3=$hs_touchzh(R1,I2);
	     var t3=$hs_touchzh(I1,u3);
	     var s3=$hs_touchzh(x1,t3);
	     var r3=$hs_touchzh(n1,s3);
	     var q3=$hs_touchzh(d1,r3);
	     var p3=$hs_touchzh(W,q3);
	     var k3=$t(function(){
	      $M(g2,function(l3){
	       var m3=l3.v[0];
	       var n3=f1-m3|0;
	       $R(1,[c1,d1,e1,f1,g1,n3],"Buffer");
	      },[d1,c1,e1,f1,g1]);
	     },[g2,d1,c1,e1,f1,g1],"sat");
	     var o3=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,m2,k3],"sat");
	     $r([p3,o3]);break;
	    case 92:
	     var J3=$hs_touchzh(R1,I2);
	     var I3=$hs_touchzh(I1,J3);
	     var H3=$hs_touchzh(x1,I3);
	     var G3=$hs_touchzh(n1,H3);
	     var F3=$hs_touchzh(d1,G3);
	     var E3=$hs_touchzh(W,F3);
	     var v3=$t(function(){
	      $M(g2,function(w3){
	       var x3=w3.v[0];
	       var y3=f1-x3|0;
	       $R(1,[c1,d1,e1,f1,g1,y3],"Buffer");
	      },[d1,c1,e1,f1,g1]);
	     },[g2,d1,c1,e1,f1,g1],"sat");
	     var z3=$t(function(){
	      $M(g2,function(A3){
	       var B3=A3.v[0];
	       $M(B3,function(C3){
		switch(C3){
		case 0:
		 $R(2,[],"OutputUnderflow");break;
		default:
		 $R(3,[],"InvalidSequence");
		}
	       },[]);
	      },[]);
	     },[g2],"sat");
	     var D3=$d(1,[z3,m2,v3],"sat");
	     $r([E3,D3]);break;
	    default:
	     var $ff=__hscore_get_errno();
	     var L2=[I2,$ff];
	     var M2=L2[0],N2=L2[1];
	     var O2=$d(1,[N2],"sat");
	     $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv$j,O2,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(P2){
	      $$GHCziIOziException_ioError.C([P2,M2],function(Q2){
	       var R2=Q2[0],S2=Q2[1];
	       var Y2=$hs_touchzh(R1,R2);
	       var X2=$hs_touchzh(I1,Y2);
	       var W2=$hs_touchzh(x1,X2);
	       var V2=$hs_touchzh(n1,W2);
	       var U2=$hs_touchzh(d1,V2);
	       var T2=$hs_touchzh(W,U2);
	       $r([T2,S2]);
	      },[n1,x1,I1,R1,W,d1]);
	     },[n1,x1,I1,R1,W,d1,M2]);
	    }
	   },[n1,x1,I1,R1,g2,W,m2,d1,c1,e1,f1,g1,I2]);break;
	  }
	 },[n1,B1,x1,K1,I1,T1,R1,K3,L3,z1,p1,V,W,X,Y,a1,d1,c1,e1,f1,g1]);
	},[n1,B1,x1,K1,I1,T1,R1,Q1,O,z1,p1,V,W,X,Y,a1,d1,c1,e1,f1,g1],"$j3");
	var M3=z1>=32?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(M3.g){
	case 1:
	 var P3=f1-h1|0;
	 var O3=P3<<z1;
	 var N3=O3>>>0;
	 S1.J(N3);break;
	case 2:
	 S1.J(0);break;
	}
       },[n1,B1,x1,K1,I1,H1,O,z1,p1,V,W,X,Y,a1,d1,c1,e1,f1,g1,h1],"$j2");
       var R3=p1>=32?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(R3.g){
       case 1:
	var U3=a1-Z|0;
	var T3=U3<<p1;
	var S3=T3>>>0;
	J1.J(S3);break;
       case 2:
	J1.J(0);break;
       }
      },[n1,B1,x1,w1,O,z1,p1,V,W,X,Y,a1,d1,c1,e1,f1,g1,h1,Z],"$j1");
      var W3=z1>=32?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(W3.g){
      case 1:
       var Y3=h1<<z1;
       var X3=$hs_plusAddrzh(c1,Y3);
       A1.J(X3);break;
      case 2:
       var Z3=$hs_plusAddrzh(c1,0);
       A1.J(Z3);break;
      }
     },[n1,B1,x1,w1,O,p1,V,W,X,Y,a1,d1,c1,e1,f1,g1,h1,Z]);
    },[n1,m1,S,O,p1,V,W,X,Y,a1,d1,c1,e1,f1,g1,h1,Z],"$j");
    var b4=p1>=32?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(b4.g){
    case 1:
     var d4=Z<<p1;
     var c4=$hs_plusAddrzh(V,d4);
     q1.J(c4);break;
    case 2:
     var e4=$hs_plusAddrzh(V,0);
     q1.J(e4);break;
    }
   },[n1,m1,S,O,V,W,X,Y,a1,d1,c1,e1,f1,g1,h1,Z]);
  },[T,Q,S,O,V,W,X,Y,a1,Z]);
 },[R,T,Q,S,O]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding6=$f(4,function(f4,g4,h4,i4){
 $$GHCziIOziEncodingziIconv_iconvEncoding5.J(f4,g4,$$GHCziIOziEncodingziIconv_iconvEncoding4,h4,$$GHCziIOziEncodingziIconv_charzushift,i4);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding3=$f(4,function(j4,k4,l4,m4){
 $$GHCziIOziEncodingziIconv_iconvEncoding5.J(j4,k4,$$GHCziIOziEncodingziIconv_charzushift,l4,$$GHCziIOziEncodingziIconv_iconvEncoding4,m4);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding7=$f(1,function(n4){
 $M(n4,function(o4){
  var p4=o4.v[0];
  $M(p4,function(q4){
   switch(q4){
   case "/":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv_iconvEncoding2=$f(3,function(r4,s4,t4){
 var u4=$t(function(){
  var v4=$f(3,function(w4,x4,y){
   $$GHCziIOziEncodingziFailure_recoverEncode1.J(r4,w4,x4,y);
  },[r4],"sat");
  $$GHCziIOziEncodingziIconv_newIConv.J($$GHCziIOziEncodingziIconv_haskellChar,s4,v4,$$GHCziIOziEncodingziIconv_iconvEncoding3);
 },[s4,r4],"sat");
 var y4=$t(function(){
  var z4=$t(function(){
   $$GHCziList_zdwspan.C([$$GHCziIOziEncodingziIconv_iconvEncoding7,s4],function(A4){
    var B4=A4[0],C4=A4[1];
    $R(1,[B4,C4],"(,)");
   },[]);
  },[s4],"ds");
  var D4=$f(3,function(w4,x4,y){
   $$GHCziIOziEncodingziFailure_recoverDecode1.J(r4,w4,x4,y);
  },[r4],"sat");
  var E4=$t(function(){
   var F4=$t(function(){
    $M(z4,function(G4){
     var H4=G4.v[1];
     $A(H4);
    },[]);
   },[z4],"sat");
   $$GHCziBase_zpzp.J($$GHCziIOziEncodingziIconv_haskellChar,F4);
  },[z4],"sat");
  var I4=$t(function(){
   $M(z4,function(J4){
    var K4=J4.v[0];
    $A(K4);
   },[]);
  },[z4],"sat");
  $$GHCziIOziEncodingziIconv_newIConv.J(I4,E4,D4,$$GHCziIOziEncodingziIconv_iconvEncoding6);
 },[s4,r4],"sat");
 var L4=$d(1,[s4,y4,u4],"sat");
 $r([t4,L4]);
},[],"in `base:GHC.IO.Encoding.Iconv'");
var $$GHCziIOziEncodingziIconv$a=$F(2,function(M4,N4){
 $M(M4,function(O4){
  var P4=O4.v[0];
  var $ff=hs_iconv_close(P4);
  var Q4=[N4,$ff];
  var R4=Q4[0],S4=Q4[1];
  var T4=$d(1,[S4],"sat");
  $r([R4,T4]);
 },[N4]);
},"a");
var $$GHCziIOziEncodingziIconv$b=$F(2,function(x4,y){
 $$GHCziIOziEncodingziIconv$a.J(x4,y);
},"at libraries/base/GHC/IO/Encoding/Iconv.hs:76:5");
var $$GHCziIOziEncodingziIconv$c=$F(1,function(U4){
 var Y4=$hs_noDuplicatezh(U4);
 var $ff=localeEncoding();
 var V4=[Y4,$ff];
 var W4=V4[0],X4=V4[1];
 $$ForeignziCziString_zdwa.J(X4,W4);
},"lvl");
var $$GHCziIOziEncodingziIconv$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("mkTextEncoding\x00");
},"loc");
var $$GHCziIOziEncodingziIconv$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Iconv.close\x00");
},"loc1");
var $$GHCziIOziEncodingziIconv$f=$F(2,function(Z4,a5){
 Z4.C([a5],function(b5){
  var c5=b5[0],d5=b5[1];
  $M(d5,function(e5){
   var f5=e5.v[0];
   $M(f5,function(g5){
    switch(g5){
    case  -1:
     var $ff=__hscore_get_errno();
     var h5=[c5,$ff];
     var i5=h5[0],j5=h5[1];
     var k5=$d(1,[j5],"sat");
     $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziEncodingziIconv$e,k5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(l5){
      $$GHCziIOziException_ioError.C([l5,i5],function(m5){
       var n5=m5[0];
       $r([n5,$$GHCziTuple_Z0T]);
      },[]);
     },[i5]);break;
    default:
     $r([c5,$$GHCziTuple_Z0T]);
    }
   },[c5]);
  },[c5]);
 },[]);
},"a1");
var $$GHCziIOziEncodingziIconv$g=$F(1,function(o5){
 $r([o5,$$GHCziTuple_Z0T]);
},"a2");
var $$GHCziIOziEncodingziIconv$h=$F(2,function(p5,q5){
 $r([q5,$$GHCziTuple_Z0T]);
},"a3");
var $$GHCziIOziEncodingziIconv$i=$D(1,function(){
 $r([ -1]);
},"lvl1");
var $$GHCziIOziEncodingziIconv$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("iconvRecoder\x00");
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
  var p=$d(1,[a,b,c,d,0,0],"lvl2");
  var q=$f(3,function(r,s,t){
   var u=r>=f?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u.g){
   case 1:
    var h2=m-s|0;
    var v=h2<2?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v.g){
    case 1:
     var w=$hs_readWideCharOffAddrzh(a,r,t);
     var x=w[0],y=w[1];
     var h1=$hs_touchzh(b,x);
     var l1=$hs_ordzh(y);
     var z=l1<65536?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(z.g){
     case 1:
      var q1=m-s|0;
      var A=q1<4?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       var L=l1-65536|0;
       var k1=L>>18;
       var j1=k1+216|0;
       var i1=j1>>>0;
       var g1=i1&255;
       var f1=$hs_plusAddrzh(j,s);
       var e1=$hs_writeWord8OffAddrzh(f1,0,g1,h1);
       var a1=$hs_touchzh(k,e1);
       var d1=L>>10;
       var c1=d1>>>0;
       var Z=c1&255;
       var b1=s+1|0;
       var Y=$hs_plusAddrzh(j,b1);
       var X=$hs_writeWord8OffAddrzh(Y,0,Z,a1);
       var P=$hs_touchzh(k,X);
       var W=L>>>0;
       var V=W&1023;
       var U=V|0;
       var T=U>>8;
       var S=T+220|0;
       var R=S>>>0;
       var O=R&255;
       var Q=s+2|0;
       var N=$hs_plusAddrzh(j,Q);
       var M=$hs_writeWord8OffAddrzh(N,0,O,P);
       var H=$hs_touchzh(k,M);
       var K=L>>>0;
       var J=K&1023;
       var G=J&255;
       var I=s+3|0;
       var F=$hs_plusAddrzh(j,I);
       var E=$hs_writeWord8OffAddrzh(F,0,G,H);
       var D=$hs_touchzh(k,E);
       var C=s+4|0;
       var B=r+1|0;
       q.J(B,C,D);break;
      case 2:
       var m1=$d(1,[j,k,l,m,n,s],"sat");
       var n1=$t(function(){
	var o1=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
       var s1=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
       var x1=56320<=l1?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(x1.g){
       case 1:
	var L1=l1>>8;
	var K1=L1>>>0;
	var J1=K1&255;
	var I1=$hs_plusAddrzh(j,s);
	var H1=$hs_writeWord8OffAddrzh(I1,0,J1,h1);
	var E1=$hs_touchzh(k,H1);
	var G1=l1>>>0;
	var D1=G1&255;
	var F1=s+1|0;
	var C1=$hs_plusAddrzh(j,F1);
	var B1=$hs_writeWord8OffAddrzh(C1,0,D1,E1);
	var A1=$hs_touchzh(k,B1);
	var z1=s+2|0;
	var y1=r+1|0;
	q.J(y1,z1,A1);break;
       case 2:
	var M1=l1<=57343?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(M1.g){
	case 1:
	 var a2=l1>>8;
	 var Z1=a2>>>0;
	 var Y1=Z1&255;
	 var X1=$hs_plusAddrzh(j,s);
	 var W1=$hs_writeWord8OffAddrzh(X1,0,Y1,h1);
	 var T1=$hs_touchzh(k,W1);
	 var V1=l1>>>0;
	 var S1=V1&255;
	 var U1=s+1|0;
	 var R1=$hs_plusAddrzh(j,U1);
	 var Q1=$hs_writeWord8OffAddrzh(R1,0,S1,T1);
	 var P1=$hs_touchzh(k,Q1);
	 var O1=s+2|0;
	 var N1=r+1|0;
	 q.J(N1,O1,P1);break;
	case 2:
	 $r([h1,u1]);break;
	}break;
       }
      },[r,s,l1,j,h1,k,q,u1],"$w$j");
      var b2=55296<=l1?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(b2.g){
      case 1:
       v1.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var c2=l1<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var f2=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var k2=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
   var g3=E2-G2|0;
   var M2=g3<2?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(M2.g){
   case 1:
    var d3=$hs_writeMutVarzh(z2,$$GHCziTypes_True,J2);
    var c3=$hs_plusAddrzh(B2,G2);
    var b3=$hs_writeWord8OffAddrzh(c3,0,254,d3);
    var Z2=$hs_touchzh(C2,b3);
    var a3=G2+1|0;
    var Y2=$hs_plusAddrzh(B2,a3);
    var X2=$hs_writeWord8OffAddrzh(Y2,0,255,Z2);
    var W2=$hs_touchzh(C2,X2);
    $M(A2,function(N2){
     var O2=N2.v[0],P2=N2.v[1],Q2=N2.v[2],R2=N2.v[3],S2=N2.v[4],T2=N2.v[5];
     var V2=G2+2|0;
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
  var S3=$d(1,[D3,E3,F3,G3,0,0],"lvl2");
  var T3=$f(3,function(U3,V3,W3){
   var X3=U3>=I3?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(X3.g){
   case 1:
    var K5=P3-V3|0;
    var Y3=K5<2?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Y3.g){
    case 1:
     var Z3=$hs_readWideCharOffAddrzh(D3,U3,W3);
     var a4=Z3[0],b4=Z3[1];
     var L4=$hs_touchzh(E3,a4);
     var O4=$hs_ordzh(b4);
     var c4=O4<65536?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(c4.g){
     case 1:
      var T4=P3-V3|0;
      var d4=T4<4?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(d4.g){
      case 1:
       var s4=O4-65536|0;
       var N4=s4>>10;
       var M4=N4>>>0;
       var K4=M4&255;
       var J4=$hs_plusAddrzh(M3,V3);
       var I4=$hs_writeWord8OffAddrzh(J4,0,K4,L4);
       var D4=$hs_touchzh(N3,I4);
       var H4=s4>>18;
       var G4=H4+216|0;
       var F4=G4>>>0;
       var C4=F4&255;
       var E4=V3+1|0;
       var B4=$hs_plusAddrzh(M3,E4);
       var A4=$hs_writeWord8OffAddrzh(B4,0,C4,D4);
       var w4=$hs_touchzh(N3,A4);
       var z4=s4>>>0;
       var y4=z4&1023;
       var v4=y4&255;
       var x4=V3+2|0;
       var u4=$hs_plusAddrzh(M3,x4);
       var t4=$hs_writeWord8OffAddrzh(u4,0,v4,w4);
       var k4=$hs_touchzh(N3,t4);
       var r4=s4>>>0;
       var q4=r4&1023;
       var p4=q4|0;
       var o4=p4>>8;
       var n4=o4+220|0;
       var m4=n4>>>0;
       var j4=m4&255;
       var l4=V3+3|0;
       var i4=$hs_plusAddrzh(M3,l4);
       var h4=$hs_writeWord8OffAddrzh(i4,0,j4,k4);
       var g4=$hs_touchzh(N3,h4);
       var f4=V3+4|0;
       var e4=U3+1|0;
       T3.J(e4,f4,g4);break;
      case 2:
       var P4=$d(1,[M3,N3,O3,P3,Q3,V3],"sat");
       var Q4=$t(function(){
	var R4=U3==I3?$$GHCziTypes_True:$$GHCziTypes_False;
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
       var V4=U3==I3?$$GHCziTypes_True:$$GHCziTypes_False;
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
       var a5=56320<=O4?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(a5.g){
       case 1:
	var o5=O4>>>0;
	var n5=o5&255;
	var m5=$hs_plusAddrzh(M3,V3);
	var l5=$hs_writeWord8OffAddrzh(m5,0,n5,L4);
	var h5=$hs_touchzh(N3,l5);
	var k5=O4>>8;
	var j5=k5>>>0;
	var g5=j5&255;
	var i5=V3+1|0;
	var f5=$hs_plusAddrzh(M3,i5);
	var e5=$hs_writeWord8OffAddrzh(f5,0,g5,h5);
	var d5=$hs_touchzh(N3,e5);
	var c5=V3+2|0;
	var b5=U3+1|0;
	T3.J(b5,c5,d5);break;
       case 2:
	var p5=O4<=57343?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(p5.g){
	case 1:
	 var D5=O4>>>0;
	 var C5=D5&255;
	 var B5=$hs_plusAddrzh(M3,V3);
	 var A5=$hs_writeWord8OffAddrzh(B5,0,C5,L4);
	 var w5=$hs_touchzh(N3,A5);
	 var z5=O4>>8;
	 var y5=z5>>>0;
	 var v5=y5&255;
	 var x5=V3+1|0;
	 var u5=$hs_plusAddrzh(M3,x5);
	 var t5=$hs_writeWord8OffAddrzh(u5,0,v5,w5);
	 var s5=$hs_touchzh(N3,t5);
	 var r5=V3+2|0;
	 var q5=U3+1|0;
	 T3.J(q5,r5,s5);break;
	case 2:
	 $r([L4,X4]);break;
	}break;
       }
      },[U3,V3,O4,M3,L4,N3,T3,X4],"$w$j");
      var E5=55296<=O4?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(E5.g){
      case 1:
       Y4.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var F5=O4<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var I5=U3==I3?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var N5=U3==I3?$$GHCziTypes_True:$$GHCziTypes_False;
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
  var o6=$d(1,[Z5,a6,b6,c6,0,0],"lvl2");
  var p6=$f(3,function(q6,r6,s6){
   var t6=r6>=l6?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(t6.g){
   case 1:
    var u6=q6>=e6?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(u6.g){
    case 1:
     var f8=q6+1|0;
     var v6=f8==e6?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(v6.g){
     case 1:
      var a8=$hs_plusAddrzh(Z5,q6);
      var w6=$hs_readWord8OffAddrzh(a8,0,s6);
      var x6=w6[0],y6=w6[1];
      var Y7=$hs_touchzh(a6,x6);
      var Z7=q6+1|0;
      var X7=$hs_plusAddrzh(Z5,Z7);
      var z6=$hs_readWord8OffAddrzh(X7,0,Y7);
      var A6=z6[0],B6=z6[1];
      var B7=$hs_touchzh(a6,A6);
      var W7=y6<<8;
      var V7=W7&65535;
      var U7=V7+B6>>>0;
      var r7=U7&65535;
      var C6=r7<55296?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(C6.g){
      case 1:
       var D6=r7>57343?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(D6.g){
       case 1:
	var H7=e6-q6|0;
	var E6=H7<4?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(E6.g){
	case 1:
	 var C7=q6+2|0;
	 var A7=$hs_plusAddrzh(Z5,C7);
	 var F6=$hs_readWord8OffAddrzh(A7,0,B7);
	 var G6=F6[0],H6=F6[1];
	 var y7=$hs_touchzh(a6,G6);
	 var z7=q6+3|0;
	 var x7=$hs_plusAddrzh(Z5,z7);
	 var I6=$hs_readWord8OffAddrzh(x7,0,y7);
	 var J6=I6[0],K6=I6[1];
	 var Q6=$hs_touchzh(a6,J6);
	 var L6=r7>=55296?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(L6.g){
	 case 1:
	  var M6=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	  var N6=$t(function(){
	   var O6=q6==e6?$$GHCziTypes_True:$$GHCziTypes_False;
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
	  var R6=r7<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(R6.g){
	  case 1:
	   var S6=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	   var T6=$t(function(){
	    var U6=q6==e6?$$GHCziTypes_True:$$GHCziTypes_False;
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
	   var w7=H6<<8;
	   var v7=w7&65535;
	   var u7=v7+K6>>>0;
	   var t7=u7&65535;
	   var W6=t7>=56320?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(W6.g){
	   case 1:
	    var X6=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	    var Y6=$t(function(){
	     var Z6=q6==e6?$$GHCziTypes_True:$$GHCziTypes_False;
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
	    var b7=t7<=57343?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(b7.g){
	    case 1:
	     var c7=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	     var d7=$t(function(){
	      var e7=q6==e6?$$GHCziTypes_True:$$GHCziTypes_False;
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
	     var s7=t7|0;
	     var o7=s7-56320|0;
	     var q7=r7|0;
	     var p7=q7-55296|0;
	     var n7=p7<<10;
	     var m7=n7+o7|0;
	     var l7=m7+65536|0;
	     var k7=$hs_chrzh(l7);
	     var j7=$hs_writeWideCharOffAddrzh(i6,r6,k7,Q6);
	     var i7=$hs_touchzh(j6,j7);
	     var h7=r6+1|0;
	     var g7=q6+4|0;
	     p6.J(g7,h7,i7);break;
	    }break;
	   }break;
	  }break;
	 }break;
	case 2:
	 var D7=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
	 var E7=$t(function(){
	  var F7=q6==e6?$$GHCziTypes_True:$$GHCziTypes_False;
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
	var N7=r7|0;
	var M7=$hs_chrzh(N7);
	var L7=$hs_writeWideCharOffAddrzh(i6,r6,M7,B7);
	var K7=$hs_touchzh(j6,L7);
	var J7=r6+1|0;
	var I7=q6+2|0;
	p6.J(I7,J7,K7);break;
       }break;
      case 2:
       var T7=r7|0;
       var S7=$hs_chrzh(T7);
       var R7=$hs_writeWideCharOffAddrzh(i6,r6,S7,B7);
       var Q7=$hs_touchzh(j6,R7);
       var P7=r6+1|0;
       var O7=q6+2|0;
       p6.J(O7,P7,Q7);break;
      }break;
     case 2:
      var b8=$d(1,[i6,j6,k6,l6,m6,r6],"sat");
      var c8=$t(function(){
       var d8=q6==e6?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var i8=q6==e6?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var m8=q6==e6?$$GHCziTypes_True:$$GHCziTypes_False;
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
 $$GHCziCString_unpackCStringzh.J("UTF-16BE\x00");
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
  var p9=$d(1,[a9,b9,c9,d9,0,0],"lvl2");
  var q9=$f(3,function(r9,s9,t9){
   var u9=s9>=m9?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u9.g){
   case 1:
    var v9=r9>=f9?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v9.g){
    case 1:
     var gb=r9+1|0;
     var w9=gb==f9?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(w9.g){
     case 1:
      var bb=$hs_plusAddrzh(a9,r9);
      var x9=$hs_readWord8OffAddrzh(bb,0,t9);
      var y9=x9[0],z9=x9[1];
      var Za=$hs_touchzh(b9,y9);
      var ab=r9+1|0;
      var Ya=$hs_plusAddrzh(a9,ab);
      var A9=$hs_readWord8OffAddrzh(Ya,0,Za);
      var B9=A9[0],C9=A9[1];
      var Ca=$hs_touchzh(b9,B9);
      var Xa=C9<<8;
      var Wa=Xa&65535;
      var Va=Wa+z9>>>0;
      var sa=Va&65535;
      var D9=sa<55296?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(D9.g){
      case 1:
       var E9=sa>57343?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(E9.g){
       case 1:
	var Ia=f9-r9|0;
	var F9=Ia<4?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(F9.g){
	case 1:
	 var Da=r9+2|0;
	 var Ba=$hs_plusAddrzh(a9,Da);
	 var G9=$hs_readWord8OffAddrzh(Ba,0,Ca);
	 var H9=G9[0],I9=G9[1];
	 var za=$hs_touchzh(b9,H9);
	 var Aa=r9+3|0;
	 var ya=$hs_plusAddrzh(a9,Aa);
	 var J9=$hs_readWord8OffAddrzh(ya,0,za);
	 var K9=J9[0],L9=J9[1];
	 var R9=$hs_touchzh(b9,K9);
	 var M9=sa>=55296?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(M9.g){
	 case 1:
	  var N9=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	  var O9=$t(function(){
	   var P9=r9==f9?$$GHCziTypes_True:$$GHCziTypes_False;
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
	  var S9=sa<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(S9.g){
	  case 1:
	   var T9=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	   var U9=$t(function(){
	    var V9=r9==f9?$$GHCziTypes_True:$$GHCziTypes_False;
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
	   var xa=L9<<8;
	   var wa=xa&65535;
	   var va=wa+I9>>>0;
	   var ua=va&65535;
	   var X9=ua>=56320?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(X9.g){
	   case 1:
	    var Y9=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	    var Z9=$t(function(){
	     var aa=r9==f9?$$GHCziTypes_True:$$GHCziTypes_False;
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
	    var ca=ua<=57343?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(ca.g){
	    case 1:
	     var da=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	     var ea=$t(function(){
	      var fa=r9==f9?$$GHCziTypes_True:$$GHCziTypes_False;
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
	     var ta=ua|0;
	     var pa=ta-56320|0;
	     var ra=sa|0;
	     var qa=ra-55296|0;
	     var oa=qa<<10;
	     var na=oa+pa|0;
	     var ma=na+65536|0;
	     var la=$hs_chrzh(ma);
	     var ka=$hs_writeWideCharOffAddrzh(j9,s9,la,R9);
	     var ja=$hs_touchzh(k9,ka);
	     var ia=s9+1|0;
	     var ha=r9+4|0;
	     q9.J(ha,ia,ja);break;
	    }break;
	   }break;
	  }break;
	 }break;
	case 2:
	 var Ea=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
	 var Fa=$t(function(){
	  var Ga=r9==f9?$$GHCziTypes_True:$$GHCziTypes_False;
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
	var Oa=sa|0;
	var Na=$hs_chrzh(Oa);
	var Ma=$hs_writeWideCharOffAddrzh(j9,s9,Na,Ca);
	var La=$hs_touchzh(k9,Ma);
	var Ka=s9+1|0;
	var Ja=r9+2|0;
	q9.J(Ja,Ka,La);break;
       }break;
      case 2:
       var Ua=sa|0;
       var Ta=$hs_chrzh(Ua);
       var Sa=$hs_writeWideCharOffAddrzh(j9,s9,Ta,Ca);
       var Ra=$hs_touchzh(k9,Sa);
       var Qa=s9+1|0;
       var Pa=r9+2|0;
       q9.J(Pa,Qa,Ra);break;
      }break;
     case 2:
      var cb=$d(1,[j9,k9,l9,m9,n9,s9],"sat");
      var db=$t(function(){
       var eb=r9==f9?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var jb=r9==f9?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var nb=r9==f9?$$GHCziTypes_True:$$GHCziTypes_False;
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
   var mc=Fb-Eb|0;
   var Mb=mc<2?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Mb.g){
   case 1:
    var jc=$hs_plusAddrzh(Ab,Eb);
    var Nb=$hs_readWord8OffAddrzh(jc,0,Jb);
    var Ob=Nb[0],Pb=Nb[1];
    var hc=$hs_touchzh(Bb,Ob);
    var ic=Eb+1|0;
    var gc=$hs_plusAddrzh(Ab,ic);
    var Qb=$hs_readWord8OffAddrzh(gc,0,hc);
    var Rb=Qb[0],Sb=Qb[1];
    var Ub=$hs_touchzh(Bb,Rb);
    var Tb=$f(1,function(Vb){
     var Wb=Pb==255?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Wb.g){
     case 1:
      var Xb=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16$a,Ub);
      $$GHCziIOziEncodingziUTF16_zdwa3.J(Ab,Bb,Cb,Db,Eb,Fb,Gb,Xb);break;
     case 2:
      var Yb=Sb==254?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Yb.g){
      case 1:
       var Zb=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16$a,Ub);
       $$GHCziIOziEncodingziUTF16_zdwa3.J(Ab,Bb,Cb,Db,Eb,Fb,Gb,Zb);break;
      case 2:
       var bc=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16$b,Ub);
       var ac=Eb+2|0;
       $$GHCziIOziEncodingziUTF16_zdwa5.J(Ab,Bb,Cb,Db,ac,Fb,Gb,bc);break;
      }break;
     }
    },[zb,Fb,Eb,Ab,Bb,Pb,Ub,Cb,Db,Gb,Sb],"$w$j");
    var cc=Pb==254?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(cc.g){
    case 1:
     Tb.J($$GHCziPrim_realWorldzh);break;
    case 2:
     var dc=Sb==255?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(dc.g){
     case 1:
      Tb.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var fc=$hs_writeMutVarzh(zb,$$GHCziIOziEncodingziUTF16$a,Ub);
      var ec=Eb+2|0;
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
 $$GHCziCString_unpackCStringzh.J("UTF-16\x00");
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
 $$GHCziCString_unpackCStringzh.J("UTF16-LE\x00");
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
  var p=$d(1,[a,b,c,d,0,0],"lvl2");
  var q=$f(3,function(r,s,t){
   var u=r>=f?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u.g){
   case 1:
    var T1=m-s|0;
    var v=T1<4?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v.g){
    case 1:
     var w=$hs_readWideCharOffAddrzh(a,r,t);
     var x=w[0],y=w[1];
     var F=$hs_touchzh(b,x);
     var E=$hs_ordzh(y);
     var z=$t(function(){
      var A=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var H=56320<=E?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(H.g){
      case 1:
       var j1=E>>>0;
       var i1=j1&255;
       var h1=$hs_plusAddrzh(j,s);
       var g1=$hs_writeWord8OffAddrzh(h1,0,i1,F);
       var c1=$hs_touchzh(k,g1);
       var f1=E>>8;
       var e1=f1>>>0;
       var b1=e1&255;
       var d1=s+1|0;
       var a1=$hs_plusAddrzh(j,d1);
       var Z=$hs_writeWord8OffAddrzh(a1,0,b1,c1);
       var V=$hs_touchzh(k,Z);
       var Y=E>>16;
       var X=Y>>>0;
       var U=X&255;
       var W=s+2|0;
       var T=$hs_plusAddrzh(j,W);
       var S=$hs_writeWord8OffAddrzh(T,0,U,V);
       var O=$hs_touchzh(k,S);
       var R=E>>24;
       var Q=R>>>0;
       var N=Q&255;
       var P=s+3|0;
       var M=$hs_plusAddrzh(j,P);
       var L=$hs_writeWord8OffAddrzh(M,0,N,O);
       var K=$hs_touchzh(k,L);
       var J=s+4|0;
       var I=r+1|0;
       q.J(I,J,K);break;
      case 2:
       var k1=E<=57343?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(k1.g){
       case 1:
	var M1=E>>>0;
	var L1=M1&255;
	var K1=$hs_plusAddrzh(j,s);
	var J1=$hs_writeWord8OffAddrzh(K1,0,L1,F);
	var F1=$hs_touchzh(k,J1);
	var I1=E>>8;
	var H1=I1>>>0;
	var E1=H1&255;
	var G1=s+1|0;
	var D1=$hs_plusAddrzh(j,G1);
	var C1=$hs_writeWord8OffAddrzh(D1,0,E1,F1);
	var y1=$hs_touchzh(k,C1);
	var B1=E>>16;
	var A1=B1>>>0;
	var x1=A1&255;
	var z1=s+2|0;
	var w1=$hs_plusAddrzh(j,z1);
	var v1=$hs_writeWord8OffAddrzh(w1,0,x1,y1);
	var r1=$hs_touchzh(k,v1);
	var u1=E>>24;
	var t1=u1>>>0;
	var q1=t1&255;
	var s1=s+3|0;
	var p1=$hs_plusAddrzh(j,s1);
	var o1=$hs_writeWord8OffAddrzh(p1,0,q1,r1);
	var n1=$hs_touchzh(k,o1);
	var m1=s+4|0;
	var l1=r+1|0;
	q.J(l1,m1,n1);break;
       case 2:
	$r([F,C]);break;
       }break;
      }
     },[r,s,E,j,k,C,F,q],"$w$j");
     var N1=55296<=E?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(N1.g){
     case 1:
      D.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var O1=E<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var R1=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var W1=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
  var A2=$d(1,[l2,m2,n2,o2,0,0],"lvl2");
  var B2=$f(3,function(C2,D2,E2){
   var F2=C2>=q2?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(F2.g){
   case 1:
    var e4=x2-D2|0;
    var G2=e4<4?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(G2.g){
    case 1:
     var H2=$hs_readWideCharOffAddrzh(l2,C2,E2);
     var I2=H2[0],J2=H2[1];
     var Q2=$hs_touchzh(m2,I2);
     var P2=$hs_ordzh(J2);
     var K2=$t(function(){
      var L2=C2==q2?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var S2=56320<=P2?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(S2.g){
      case 1:
       var u3=P2>>24;
       var t3=u3>>>0;
       var s3=t3&255;
       var r3=$hs_plusAddrzh(u2,D2);
       var q3=$hs_writeWord8OffAddrzh(r3,0,s3,Q2);
       var m3=$hs_touchzh(v2,q3);
       var p3=P2>>16;
       var o3=p3>>>0;
       var l3=o3&255;
       var n3=D2+1|0;
       var k3=$hs_plusAddrzh(u2,n3);
       var j3=$hs_writeWord8OffAddrzh(k3,0,l3,m3);
       var f3=$hs_touchzh(v2,j3);
       var i3=P2>>8;
       var h3=i3>>>0;
       var e3=h3&255;
       var g3=D2+2|0;
       var d3=$hs_plusAddrzh(u2,g3);
       var c3=$hs_writeWord8OffAddrzh(d3,0,e3,f3);
       var Z2=$hs_touchzh(v2,c3);
       var b3=P2>>>0;
       var Y2=b3&255;
       var a3=D2+3|0;
       var X2=$hs_plusAddrzh(u2,a3);
       var W2=$hs_writeWord8OffAddrzh(X2,0,Y2,Z2);
       var V2=$hs_touchzh(v2,W2);
       var U2=D2+4|0;
       var T2=C2+1|0;
       B2.J(T2,U2,V2);break;
      case 2:
       var v3=P2<=57343?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(v3.g){
       case 1:
	var X3=P2>>24;
	var W3=X3>>>0;
	var V3=W3&255;
	var U3=$hs_plusAddrzh(u2,D2);
	var T3=$hs_writeWord8OffAddrzh(U3,0,V3,Q2);
	var P3=$hs_touchzh(v2,T3);
	var S3=P2>>16;
	var R3=S3>>>0;
	var O3=R3&255;
	var Q3=D2+1|0;
	var N3=$hs_plusAddrzh(u2,Q3);
	var M3=$hs_writeWord8OffAddrzh(N3,0,O3,P3);
	var I3=$hs_touchzh(v2,M3);
	var L3=P2>>8;
	var K3=L3>>>0;
	var H3=K3&255;
	var J3=D2+2|0;
	var G3=$hs_plusAddrzh(u2,J3);
	var F3=$hs_writeWord8OffAddrzh(G3,0,H3,I3);
	var C3=$hs_touchzh(v2,F3);
	var E3=P2>>>0;
	var B3=E3&255;
	var D3=D2+3|0;
	var A3=$hs_plusAddrzh(u2,D3);
	var z3=$hs_writeWord8OffAddrzh(A3,0,B3,C3);
	var y3=$hs_touchzh(v2,z3);
	var x3=D2+4|0;
	var w3=C2+1|0;
	B2.J(w3,x3,y3);break;
       case 2:
	$r([Q2,N2]);break;
       }break;
      }
     },[C2,D2,P2,u2,v2,N2,Q2,B2],"$w$j");
     var Y3=55296<=P2?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Y3.g){
     case 1:
      O2.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var Z3=P2<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var c4=C2==q2?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var h4=C2==q2?$$GHCziTypes_True:$$GHCziTypes_False;
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
   var i5=y4-A4|0;
   var G4=i5<4?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(G4.g){
   case 1:
    var f5=$hs_writeMutVarzh(t4,$$GHCziTypes_True,D4);
    var e5=$hs_plusAddrzh(v4,A4);
    var d5=$hs_writeWord8OffAddrzh(e5,0,0,f5);
    var b5=$hs_touchzh(w4,d5);
    var c5=A4+1|0;
    var a5=$hs_plusAddrzh(v4,c5);
    var Z4=$hs_writeWord8OffAddrzh(a5,0,0,b5);
    var X4=$hs_touchzh(w4,Z4);
    var Y4=A4+2|0;
    var W4=$hs_plusAddrzh(v4,Y4);
    var V4=$hs_writeWord8OffAddrzh(W4,0,254,X4);
    var T4=$hs_touchzh(w4,V4);
    var U4=A4+3|0;
    var S4=$hs_plusAddrzh(v4,U4);
    var R4=$hs_writeWord8OffAddrzh(S4,0,255,T4);
    var Q4=$hs_touchzh(w4,R4);
    $M(u4,function(H4){
     var I4=H4.v[0],J4=H4.v[1],K4=H4.v[2],L4=H4.v[3],M4=H4.v[4],N4=H4.v[5];
     var P4=A4+4|0;
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
  var U5=$d(1,[F5,G5,H5,I5,0,0],"lvl2");
  var V5=$f(3,function(W5,X5,Y5){
   var Z5=X5>=R5?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Z5.g){
   case 1:
    var k7=K5-W5|0;
    var a6=k7<4?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(a6.g){
    case 1:
     var f7=$hs_plusAddrzh(F5,W5);
     var b6=$hs_readWord8OffAddrzh(f7,0,Y5);
     var c6=b6[0],d6=b6[1];
     var d7=$hs_touchzh(G5,c6);
     var e7=W5+1|0;
     var c7=$hs_plusAddrzh(F5,e7);
     var e6=$hs_readWord8OffAddrzh(c7,0,d7);
     var f6=e6[0],g6=e6[1];
     var a7=$hs_touchzh(G5,f6);
     var b7=W5+2|0;
     var Z6=$hs_plusAddrzh(F5,b7);
     var h6=$hs_readWord8OffAddrzh(Z6,0,a7);
     var i6=h6[0],j6=h6[1];
     var X6=$hs_touchzh(G5,i6);
     var Y6=W5+3|0;
     var W6=$hs_plusAddrzh(F5,Y6);
     var k6=$hs_readWord8OffAddrzh(W6,0,X6);
     var l6=k6[0],m6=k6[1];
     var q6=$hs_touchzh(G5,l6);
     var O6=m6|0;
     var V6=j6|0;
     var Q6=V6<<8;
     var U6=g6|0;
     var S6=U6<<16;
     var T6=d6|0;
     var R6=T6<<24;
     var P6=R6+S6|0;
     var N6=P6+Q6|0;
     var M6=N6+O6|0;
     var o6=$hs_chrzh(M6);
     var p6=$hs_ordzh(o6);
     var n6=$f(1,function(r6){
      var s6=p6>57343?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(s6.g){
      case 1:
       var t6=$d(1,[O5,P5,Q5,R5,S5,X5],"sat");
       var u6=$t(function(){
	var v6=W5==K5?$$GHCziTypes_True:$$GHCziTypes_False;
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
       var x6=p6<=1114111?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(x6.g){
       case 1:
	var y6=$d(1,[O5,P5,Q5,R5,S5,X5],"sat");
	var z6=$t(function(){
	 var A6=W5==K5?$$GHCziTypes_True:$$GHCziTypes_False;
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
	var D6=X5+1|0;
	var C6=W5+4|0;
	V5.J(C6,D6,E6);break;
       }break;
      }
     },[F5,G5,H5,I5,U5,X5,R5,K5,W5,o6,p6,q6,O5,P5,Q5,S5,V5],"$w$j");
     var G6=p6>=0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(G6.g){
     case 1:
      n6.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var H6=p6<55296?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(H6.g){
      case 1:
       n6.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var L6=$hs_writeWideCharOffAddrzh(O5,X5,o6,q6);
       var K6=$hs_touchzh(P5,L6);
       var J6=X5+1|0;
       var I6=W5+4|0;
       V5.J(I6,J6,K6);break;
      }break;
     }break;
    case 2:
     var g7=$d(1,[O5,P5,Q5,R5,S5,X5],"sat");
     var h7=$t(function(){
      var i7=W5==K5?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var n7=W5==K5?$$GHCziTypes_True:$$GHCziTypes_False;
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
 $$GHCziCString_unpackCStringzh.J("UTF-32BE\x00");
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
  var q8=$d(1,[b8,c8,d8,e8,0,0],"lvl2");
  var r8=$f(3,function(s8,t8,u8){
   var v8=t8>=n8?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(v8.g){
   case 1:
    var G9=g8-s8|0;
    var w8=G9<4?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(w8.g){
    case 1:
     var B9=$hs_plusAddrzh(b8,s8);
     var x8=$hs_readWord8OffAddrzh(B9,0,u8);
     var y8=x8[0],z8=x8[1];
     var z9=$hs_touchzh(c8,y8);
     var A9=s8+1|0;
     var y9=$hs_plusAddrzh(b8,A9);
     var A8=$hs_readWord8OffAddrzh(y9,0,z9);
     var B8=A8[0],C8=A8[1];
     var w9=$hs_touchzh(c8,B8);
     var x9=s8+2|0;
     var v9=$hs_plusAddrzh(b8,x9);
     var D8=$hs_readWord8OffAddrzh(v9,0,w9);
     var E8=D8[0],F8=D8[1];
     var t9=$hs_touchzh(c8,E8);
     var u9=s8+3|0;
     var s9=$hs_plusAddrzh(b8,u9);
     var G8=$hs_readWord8OffAddrzh(s9,0,t9);
     var H8=G8[0],I8=G8[1];
     var M8=$hs_touchzh(c8,H8);
     var k9=z8|0;
     var r9=C8|0;
     var m9=r9<<8;
     var q9=F8|0;
     var o9=q9<<16;
     var p9=I8|0;
     var n9=p9<<24;
     var l9=n9+o9|0;
     var j9=l9+m9|0;
     var i9=j9+k9|0;
     var K8=$hs_chrzh(i9);
     var L8=$hs_ordzh(K8);
     var J8=$f(1,function(N8){
      var O8=L8>57343?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(O8.g){
      case 1:
       var P8=$d(1,[k8,l8,m8,n8,o8,t8],"sat");
       var Q8=$t(function(){
	var R8=s8==g8?$$GHCziTypes_True:$$GHCziTypes_False;
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
       var T8=L8<=1114111?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(T8.g){
       case 1:
	var U8=$d(1,[k8,l8,m8,n8,o8,t8],"sat");
	var V8=$t(function(){
	 var W8=s8==g8?$$GHCziTypes_True:$$GHCziTypes_False;
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
	var Z8=t8+1|0;
	var Y8=s8+4|0;
	r8.J(Y8,Z8,a9);break;
       }break;
      }
     },[b8,c8,d8,e8,q8,t8,n8,g8,s8,K8,L8,M8,k8,l8,m8,o8,r8],"$w$j");
     var c9=L8>=0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(c9.g){
     case 1:
      J8.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var d9=L8<55296?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(d9.g){
      case 1:
       J8.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var h9=$hs_writeWideCharOffAddrzh(k8,t8,K8,M8);
       var g9=$hs_touchzh(l8,h9);
       var f9=t8+1|0;
       var e9=s8+4|0;
       r8.J(e9,f9,g9);break;
      }break;
     }break;
    case 2:
     var C9=$d(1,[k8,l8,m8,n8,o8,t8],"sat");
     var D9=$t(function(){
      var E9=s8==g8?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var J9=s8==g8?$$GHCziTypes_True:$$GHCziTypes_False;
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
   var ab=ba-aa|0;
   var ia=ab<4?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(ia.g){
   case 1:
    var Xa=$hs_plusAddrzh(W9,aa);
    var ja=$hs_readWord8OffAddrzh(Xa,0,fa);
    var ka=ja[0],la=ja[1];
    var Va=$hs_touchzh(X9,ka);
    var Wa=aa+1|0;
    var Ua=$hs_plusAddrzh(W9,Wa);
    var ma=$hs_readWord8OffAddrzh(Ua,0,Va);
    var na=ma[0],oa=ma[1];
    var Sa=$hs_touchzh(X9,na);
    var Ta=aa+2|0;
    var Ra=$hs_plusAddrzh(W9,Ta);
    var pa=$hs_readWord8OffAddrzh(Ra,0,Sa);
    var qa=pa[0],ra=pa[1];
    var Pa=$hs_touchzh(X9,qa);
    var Qa=aa+3|0;
    var Oa=$hs_plusAddrzh(W9,Qa);
    var sa=$hs_readWord8OffAddrzh(Oa,0,Pa);
    var ta=sa[0],ua=sa[1];
    var wa=$hs_touchzh(X9,ta);
    var va=$f(1,function(xa){
     var ya=la==255?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(ya.g){
     case 1:
      var za=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
      $$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,aa,ba,ca,za);break;
     case 2:
      var Aa=oa==254?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Aa.g){
      case 1:
       var Ba=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
       $$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,aa,ba,ca,Ba);break;
      case 2:
       var Ca=ra==0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Ca.g){
       case 1:
	var Da=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
	$$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,aa,ba,ca,Da);break;
       case 2:
	var Ea=ua==0?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Ea.g){
	case 1:
	 var Fa=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
	 $$GHCziIOziEncodingziUTF32_zdwa3.J(W9,X9,Y9,Z9,aa,ba,ca,Fa);break;
	case 2:
	 var Ha=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$b,wa);
	 var Ga=aa+4|0;
	 $$GHCziIOziEncodingziUTF32_zdwa5.J(W9,X9,Y9,Z9,Ga,ba,ca,Ha);break;
	}break;
       }break;
      }break;
     }
    },[V9,ba,aa,W9,X9,la,wa,Y9,Z9,ca,oa,ra,ua],"$w$j");
    var Ia=la==0?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Ia.g){
    case 1:
     va.J($$GHCziPrim_realWorldzh);break;
    case 2:
     var Ja=oa==0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Ja.g){
     case 1:
      va.J($$GHCziPrim_realWorldzh);break;
     case 2:
      var Ka=ra==254?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Ka.g){
      case 1:
       va.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var La=ua==255?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(La.g){
       case 1:
	va.J($$GHCziPrim_realWorldzh);break;
       case 2:
	var Na=$hs_writeMutVarzh(V9,$$GHCziIOziEncodingziUTF32$a,wa);
	var Ma=aa+4|0;
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
 $$GHCziCString_unpackCStringzh.J("UTF-32\x00");
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
 $$GHCziCString_unpackCStringzh.J("UTF-32LE\x00");
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
  var p=$d(1,[a,b,c,d,0,0],"lvl1");
  var q=$f(3,function(r,s,t){
   var u=s>=m?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u.g){
   case 1:
    var v=r>=f?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v.g){
    case 1:
     var w=$hs_readWideCharOffAddrzh(a,r,t);
     var x=w[0],y=w[1];
     var q1=$hs_touchzh(b,x);
     var Q=$hs_ordzh(y);
     var z=Q<=127?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(z.g){
     case 1:
      var A=Q<=2047?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       var B=Q<=65535?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(B.g){
       case 1:
	var y1=m-s|0;
	var C=y1<4?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(C.g){
	case 1:
	 var t1=Q>>18;
	 var s1=t1+240|0;
	 var r1=s1>>>0;
	 var p1=r1&255;
	 var o1=$hs_plusAddrzh(j,s);
	 var n1=$hs_writeWord8OffAddrzh(o1,0,p1,q1);
	 var f1=$hs_touchzh(k,n1);
	 var m1=Q>>12;
	 var l1=m1>>>0;
	 var k1=l1&63;
	 var j1=k1|0;
	 var i1=j1+128|0;
	 var h1=i1>>>0;
	 var e1=h1&255;
	 var g1=s+1|0;
	 var d1=$hs_plusAddrzh(j,g1);
	 var c1=$hs_writeWord8OffAddrzh(d1,0,e1,f1);
	 var U=$hs_touchzh(k,c1);
	 var b1=Q>>6;
	 var a1=b1>>>0;
	 var Z=a1&63;
	 var Y=Z|0;
	 var X=Y+128|0;
	 var W=X>>>0;
	 var T=W&255;
	 var V=s+2|0;
	 var S=$hs_plusAddrzh(j,V);
	 var R=$hs_writeWord8OffAddrzh(S,0,T,U);
	 var J=$hs_touchzh(k,R);
	 var P=Q>>>0;
	 var O=P&63;
	 var N=O|0;
	 var M=N+128|0;
	 var L=M>>>0;
	 var I=L&255;
	 var K=s+3|0;
	 var H=$hs_plusAddrzh(j,K);
	 var G=$hs_writeWord8OffAddrzh(H,0,I,J);
	 var F=$hs_touchzh(k,G);
	 var E=s+4|0;
	 var D=r+1|0;
	 q.J(D,E,F);break;
	case 2:
	 var u1=$d(1,[j,k,l,m,n,s],"sat");
	 var v1=$t(function(){
	  var w1=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
	 var A1=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
	  var q2=m-s|0;
	  var H1=q2<3?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(H1.g){
	  case 1:
	   var l2=Q>>12;
	   var k2=l2+224|0;
	   var j2=k2>>>0;
	   var i2=j2&255;
	   var h2=$hs_plusAddrzh(j,s);
	   var g2=$hs_writeWord8OffAddrzh(h2,0,i2,q1);
	   var Y1=$hs_touchzh(k,g2);
	   var f2=Q>>6;
	   var e2=f2>>>0;
	   var d2=e2&63;
	   var c2=d2|0;
	   var b2=c2+128|0;
	   var a2=b2>>>0;
	   var X1=a2&255;
	   var Z1=s+1|0;
	   var W1=$hs_plusAddrzh(j,Z1);
	   var V1=$hs_writeWord8OffAddrzh(W1,0,X1,Y1);
	   var O1=$hs_touchzh(k,V1);
	   var U1=Q>>>0;
	   var T1=U1&63;
	   var S1=T1|0;
	   var R1=S1+128|0;
	   var Q1=R1>>>0;
	   var N1=Q1&255;
	   var P1=s+2|0;
	   var M1=$hs_plusAddrzh(j,P1);
	   var L1=$hs_writeWord8OffAddrzh(M1,0,N1,O1);
	   var K1=$hs_touchzh(k,L1);
	   var J1=s+3|0;
	   var I1=r+1|0;
	   q.J(I1,J1,K1);break;
	  case 2:
	   var m2=$d(1,[j,k,l,m,n,s],"sat");
	   var n2=$t(function(){
	    var o2=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
	 var r2=56320<=Q?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(r2.g){
	 case 1:
	  F1.J($$GHCziPrim_realWorldzh);break;
	 case 2:
	  var s2=Q<=57343?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(s2.g){
	  case 1:
	   F1.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   $r([q1,C1]);break;
	  }break;
	 }
	},[a,b,c,d,p,s,m,r,f,Q,j,q1,k,q,l,n,C1],"$w$j");
	var t2=55296<=Q?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(t2.g){
	case 1:
	 D1.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var u2=Q<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(u2.g){
	 case 1:
	  D1.J($$GHCziPrim_realWorldzh);break;
	 case 2:
	  $r([q1,C1]);break;
	 }break;
	}break;
       }break;
      case 2:
       var T2=m-s|0;
       var v2=T2<2?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(v2.g){
       case 1:
	var O2=Q>>6;
	var N2=O2+192|0;
	var M2=N2>>>0;
	var L2=M2&255;
	var K2=$hs_plusAddrzh(j,s);
	var J2=$hs_writeWord8OffAddrzh(K2,0,L2,q1);
	var C2=$hs_touchzh(k,J2);
	var I2=Q>>>0;
	var H2=I2&63;
	var G2=H2|0;
	var F2=G2+128|0;
	var E2=F2>>>0;
	var B2=E2&255;
	var D2=s+1|0;
	var A2=$hs_plusAddrzh(j,D2);
	var z2=$hs_writeWord8OffAddrzh(A2,0,B2,C2);
	var y2=$hs_touchzh(k,z2);
	var x2=s+2|0;
	var w2=r+1|0;
	q.J(w2,x2,y2);break;
       case 2:
	var P2=$d(1,[j,k,l,m,n,s],"sat");
	var Q2=$t(function(){
	 var R2=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var a3=Q>>>0;
      var Z2=a3&255;
      var Y2=$hs_plusAddrzh(j,s);
      var X2=$hs_writeWord8OffAddrzh(Y2,0,Z2,q1);
      var W2=$hs_touchzh(k,X2);
      var V2=s+1|0;
      var U2=r+1|0;
      q.J(U2,V2,W2);break;
     }break;
    case 2:
     var b3=$d(1,[j,k,l,m,n,s],"sat");
     var c3=$t(function(){
      var d3=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var h3=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
  var I3=$d(1,[t3,u3,v3,w3,0,0],"lvl1");
  var J3=$f(3,function(K3,L3,M3){
   var N3=L3>=F3?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(N3.g){
   case 1:
    var O3=$t(function(){
     var P3=K3==y3?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(P3.g){
     case 1:
      $R(1,[t3,u3,v3,w3,K3,y3],"Buffer");break;
     case 2:
      $A(I3);break;
     }
    },[t3,u3,v3,w3,I3,K3,y3],"a");
    var Q3=$d(1,[C3,D3,E3,F3,G3,L3],"a1");
    var R3=$d(1,[$$GHCziIOziEncodingziTypes_InputUnderflow,O3,Q3],"lvl2");
    var S3=K3>=y3?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(S3.g){
    case 1:
     var za=$hs_plusAddrzh(t3,K3);
     var T3=$hs_readWord8OffAddrzh(za,0,M3);
     var U3=T3[0],V3=T3[1];
     var c4=$hs_touchzh(u3,U3);
     var W3=V3<=127?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(W3.g){
     case 1:
      var X3=$t(function(){
       var Y3=K3==y3?$$GHCziTypes_True:$$GHCziTypes_False;
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
	var g4=V3>=240?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(g4.g){
	case 1:
	 $r([c4,a4]);break;
	case 2:
	 var h4=y3-K3|0;
	 switch(h4){
	 case 1:
	  $r([c4,R3]);break;
	 case 2:
	  var I6=K3+1|0;
	  var H6=$hs_plusAddrzh(t3,I6);
	  var l6=$hs_readWord8OffAddrzh(H6,0,c4);
	  var m6=l6[0],n6=l6[1];
	  var q6=$hs_touchzh(u3,m6);
	  var o6=$t(function(){
	   $r(n6<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[n6],"lvl4");
	  var p6=$f(1,function(r6){
	   var s6=V3>=241?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(s6.g){
	   case 1:
	    var t6=V3==244?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(t6.g){
	    case 1:
	     $r([q6,a4]);break;
	    case 2:
	     var u6=n6>=128?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(u6.g){
	     case 1:
	      $r([q6,a4]);break;
	     case 2:
	      var v6=n6<=143?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(v6.g){
	      case 1:
	       $r([q6,a4]);break;
	      case 2:
	       $r([q6,R3]);break;
	      }break;
	     }break;
	    }break;
	   case 2:
	    var w6=V3<=243?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(w6.g){
	    case 1:
	     var x6=V3==244?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(x6.g){
	     case 1:
	      $r([q6,a4]);break;
	     case 2:
	      var y6=n6>=128?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(y6.g){
	      case 1:
	       $r([q6,a4]);break;
	      case 2:
	       var z6=n6<=143?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(z6.g){
	       case 1:
		$r([q6,a4]);break;
	       case 2:
		$r([q6,R3]);break;
	       }break;
	      }break;
	     }break;
	    case 2:
	     var A6=n6>=128?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(A6.g){
	     case 1:
	      $r([q6,a4]);break;
	     case 2:
	      $M(o6,function(B6){
	       switch(B6.g){
	       case 1:
		var C6=V3==244?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(C6.g){
		case 1:
		 $r([q6,a4]);break;
		case 2:
		 var D6=n6<=143?$$GHCziTypes_True:$$GHCziTypes_False;
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
	  var E6=V3==240?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(E6.g){
	  case 1:
	   p6.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var F6=n6>=144?$$GHCziTypes_True:$$GHCziTypes_False;
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
	 case 3:
	  var s7=K3+1|0;
	  var r7=$hs_plusAddrzh(t3,s7);
	  var J6=$hs_readWord8OffAddrzh(r7,0,c4);
	  var K6=J6[0],L6=J6[1];
	  var p7=$hs_touchzh(u3,K6);
	  var q7=K3+2|0;
	  var o7=$hs_plusAddrzh(t3,q7);
	  var M6=$hs_readWord8OffAddrzh(o7,0,p7);
	  var N6=M6[0],O6=M6[1];
	  var T6=$hs_touchzh(u3,N6);
	  var P6=$t(function(){
	   $r(O6>=128?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[O6],"lvl4");
	  var Q6=$t(function(){
	   $r(O6<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[O6],"lvl5");
	  var R6=$t(function(){
	   $r(L6<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[L6],"lvl6");
	  var S6=$f(1,function(U6){
	   var V6=$t(function(){
	    $r(L6>=128?$$GHCziTypes_True:$$GHCziTypes_False);
	   },[L6],"lvl7");
	   var W6=$f(1,function(X6){
	    var Y6=V3==244?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Y6.g){
	    case 1:
	     $r([T6,a4]);break;
	    case 2:
	     $M(V6,function(Z6){
	      switch(Z6.g){
	      case 1:
	       $r([T6,a4]);break;
	      case 2:
	       var a7=L6<=143?$$GHCziTypes_True:$$GHCziTypes_False;
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
	   var d7=V3>=241?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(d7.g){
	   case 1:
	    W6.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    var e7=V3<=243?$$GHCziTypes_True:$$GHCziTypes_False;
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
	  var j7=V3==240?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(j7.g){
	  case 1:
	   S6.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var k7=L6>=144?$$GHCziTypes_True:$$GHCziTypes_False;
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
	  var k6=K3+1|0;
	  var j6=$hs_plusAddrzh(t3,k6);
	  var i4=$hs_readWord8OffAddrzh(j6,0,c4);
	  var j4=i4[0],k4=i4[1];
	  var h6=$hs_touchzh(u3,j4);
	  var i6=K3+2|0;
	  var g6=$hs_plusAddrzh(t3,i6);
	  var l4=$hs_readWord8OffAddrzh(g6,0,h6);
	  var m4=l4[0],n4=l4[1];
	  var e6=$hs_touchzh(u3,m4);
	  var f6=K3+3|0;
	  var d6=$hs_plusAddrzh(t3,f6);
	  var o4=$hs_readWord8OffAddrzh(d6,0,e6);
	  var p4=o4[0],q4=o4[1];
	  var x4=$hs_touchzh(u3,p4);
	  var r4=$t(function(){
	   $r(q4>=128?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[q4],"lvl4");
	  var s4=$t(function(){
	   $r(q4<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[q4],"lvl5");
	  var t4=$t(function(){
	   $r(n4>=128?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[n4],"lvl6");
	  var u4=$t(function(){
	   $r(n4<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[n4],"lvl7");
	  var v4=$t(function(){
	   $r(k4<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[k4],"lvl8");
	  var w4=$f(1,function(y4){
	   var z4=$t(function(){
	    $r(k4>=128?$$GHCziTypes_True:$$GHCziTypes_False);
	   },[k4],"lvl9");
	   var A4=$f(1,function(B4){
	    var C4=V3==244?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(C4.g){
	    case 1:
	     $r([x4,a4]);break;
	    case 2:
	     $M(z4,function(D4){
	      switch(D4.g){
	      case 1:
	       $r([x4,a4]);break;
	      case 2:
	       var E4=k4<=143?$$GHCziTypes_True:$$GHCziTypes_False;
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
			var b5=q4|0;
			var Q4=b5-128|0;
			var a5=n4|0;
			var Z4=a5-128|0;
			var S4=Z4<<6;
			var Y4=k4|0;
			var X4=Y4-128|0;
			var U4=X4<<12;
			var W4=V3|0;
			var V4=W4-240|0;
			var T4=V4<<18;
			var R4=T4+U4|0;
			var P4=R4+S4|0;
			var O4=P4+Q4|0;
			var N4=$hs_chrzh(O4);
			var M4=$hs_writeWideCharOffAddrzh(C3,L3,N4,x4);
			var L4=$hs_touchzh(D3,M4);
			var K4=L3+1|0;
			var J4=K3+4|0;
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
	   var c5=V3>=241?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(c5.g){
	   case 1:
	    A4.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    var d5=V3<=243?$$GHCziTypes_True:$$GHCziTypes_False;
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
			 var C5=q4|0;
			 var r5=C5-128|0;
			 var B5=n4|0;
			 var A5=B5-128|0;
			 var t5=A5<<6;
			 var z5=k4|0;
			 var y5=z5-128|0;
			 var v5=y5<<12;
			 var x5=V3|0;
			 var w5=x5-240|0;
			 var u5=w5<<18;
			 var s5=u5+v5|0;
			 var q5=s5+t5|0;
			 var p5=q5+r5|0;
			 var o5=$hs_chrzh(p5);
			 var n5=$hs_writeWideCharOffAddrzh(C3,L3,o5,x4);
			 var m5=$hs_touchzh(D3,n5);
			 var l5=L3+1|0;
			 var k5=K3+4|0;
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
	  var D5=V3==240?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(D5.g){
	  case 1:
	   w4.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var E5=k4>=144?$$GHCziTypes_True:$$GHCziTypes_False;
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
		      var c6=q4|0;
		      var R5=c6-128|0;
		      var b6=n4|0;
		      var a6=b6-128|0;
		      var T5=a6<<6;
		      var Z5=k4|0;
		      var Y5=Z5-128|0;
		      var V5=Y5<<12;
		      var X5=V3|0;
		      var W5=X5-240|0;
		      var U5=W5<<18;
		      var S5=U5+V5|0;
		      var Q5=S5+T5|0;
		      var P5=Q5+R5|0;
		      var O5=$hs_chrzh(P5);
		      var N5=$hs_writeWideCharOffAddrzh(C3,L3,O5,x4);
		      var M5=$hs_touchzh(D3,N5);
		      var L5=L3+1|0;
		      var K5=K3+4|0;
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
       var t7=V3>=224?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(t7.g){
       case 1:
	e4.J($$GHCziPrim_realWorldzh);break;
       case 2:
	var u7=V3<=239?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(u7.g){
	case 1:
	 e4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var v7=y3-K3|0;
	 switch(v7){
	 case 1:
	  $r([c4,R3]);break;
	 case 2:
	  var V9=K3+1|0;
	  var U9=$hs_plusAddrzh(t3,V9);
	  var v9=$hs_readWord8OffAddrzh(U9,0,c4);
	  var w9=v9[0],x9=v9[1];
	  var A9=$hs_touchzh(u3,w9);
	  var y9=$t(function(){
	   $r(x9<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[x9],"lvl4");
	  var z9=$f(1,function(B9){
	   var C9=$t(function(){
	    $r(x9>=128?$$GHCziTypes_True:$$GHCziTypes_False);
	   },[x9],"lvl5");
	   var D9=$f(1,function(E9){
	    var F9=V3==237?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(F9.g){
	    case 1:
	     var G9=V3>=238?$$GHCziTypes_True:$$GHCziTypes_False;
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
	       var K9=x9<=159?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(K9.g){
	       case 1:
		var L9=V3>=238?$$GHCziTypes_True:$$GHCziTypes_False;
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
	   var N9=V3>=225?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(N9.g){
	   case 1:
	    D9.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    var O9=V3<=236?$$GHCziTypes_True:$$GHCziTypes_False;
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
	  var R9=V3==224?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(R9.g){
	  case 1:
	   z9.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var S9=x9>=160?$$GHCziTypes_True:$$GHCziTypes_False;
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
	  var u9=K3+1|0;
	  var t9=$hs_plusAddrzh(t3,u9);
	  var w7=$hs_readWord8OffAddrzh(t9,0,c4);
	  var x7=w7[0],y7=w7[1];
	  var r9=$hs_touchzh(u3,x7);
	  var s9=K3+2|0;
	  var q9=$hs_plusAddrzh(t3,s9);
	  var z7=$hs_readWord8OffAddrzh(q9,0,r9);
	  var A7=z7[0],B7=z7[1];
	  var G7=$hs_touchzh(u3,A7);
	  var C7=$t(function(){
	   $r(B7>=128?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[B7],"lvl4");
	  var D7=$t(function(){
	   $r(B7<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[B7],"lvl5");
	  var E7=$t(function(){
	   $r(y7<=191?$$GHCziTypes_True:$$GHCziTypes_False);
	  },[y7],"lvl6");
	  var F7=$f(1,function(H7){
	   var I7=$t(function(){
	    $r(y7>=128?$$GHCziTypes_True:$$GHCziTypes_False);
	   },[y7],"lvl7");
	   var J7=$f(1,function(K7){
	    var L7=$f(1,function(M7){
	     var N7=V3>=238?$$GHCziTypes_True:$$GHCziTypes_False;
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
		      var g8=B7|0;
		      var Z7=g8-128|0;
		      var f8=y7|0;
		      var e8=f8-128|0;
		      var b8=e8<<6;
		      var d8=V3|0;
		      var c8=d8-224|0;
		      var a8=c8<<12;
		      var Y7=a8+b8|0;
		      var X7=Y7+Z7|0;
		      var W7=$hs_chrzh(X7);
		      var V7=$hs_writeWideCharOffAddrzh(C3,L3,W7,G7);
		      var U7=$hs_touchzh(D3,V7);
		      var T7=L3+1|0;
		      var S7=K3+3|0;
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
	    var h8=V3==237?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(h8.g){
	    case 1:
	     L7.J($$GHCziPrim_realWorldzh);break;
	    case 2:
	     $M(I7,function(i8){
	      switch(i8.g){
	      case 1:
	       L7.J($$GHCziPrim_realWorldzh);break;
	      case 2:
	       var j8=y7<=159?$$GHCziTypes_True:$$GHCziTypes_False;
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
		    var A8=B7|0;
		    var t8=A8-128|0;
		    var z8=y7|0;
		    var y8=z8-128|0;
		    var v8=y8<<6;
		    var x8=V3|0;
		    var w8=x8-224|0;
		    var u8=w8<<12;
		    var s8=u8+v8|0;
		    var r8=s8+t8|0;
		    var q8=$hs_chrzh(r8);
		    var p8=$hs_writeWideCharOffAddrzh(C3,L3,q8,G7);
		    var o8=$hs_touchzh(D3,p8);
		    var n8=L3+1|0;
		    var m8=K3+3|0;
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
	   var B8=V3>=225?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(B8.g){
	   case 1:
	    J7.J($$GHCziPrim_realWorldzh);break;
	   case 2:
	    var C8=V3<=236?$$GHCziTypes_True:$$GHCziTypes_False;
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
		     var V8=B7|0;
		     var O8=V8-128|0;
		     var U8=y7|0;
		     var T8=U8-128|0;
		     var Q8=T8<<6;
		     var S8=V3|0;
		     var R8=S8-224|0;
		     var P8=R8<<12;
		     var N8=P8+Q8|0;
		     var M8=N8+O8|0;
		     var L8=$hs_chrzh(M8);
		     var K8=$hs_writeWideCharOffAddrzh(C3,L3,L8,G7);
		     var J8=$hs_touchzh(D3,K8);
		     var I8=L3+1|0;
		     var H8=K3+3|0;
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
	  var W8=V3==224?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(W8.g){
	  case 1:
	   F7.J($$GHCziPrim_realWorldzh);break;
	  case 2:
	   var X8=y7>=160?$$GHCziTypes_True:$$GHCziTypes_False;
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
		  var p9=B7|0;
		  var i9=p9-128|0;
		  var o9=y7|0;
		  var n9=o9-128|0;
		  var k9=n9<<6;
		  var m9=V3|0;
		  var l9=m9-224|0;
		  var j9=l9<<12;
		  var h9=j9+k9|0;
		  var g9=h9+i9|0;
		  var f9=$hs_chrzh(g9);
		  var e9=$hs_writeWideCharOffAddrzh(C3,L3,f9,G7);
		  var d9=$hs_touchzh(D3,e9);
		  var c9=L3+1|0;
		  var b9=K3+3|0;
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
      var W9=V3>=192?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(W9.g){
      case 1:
       b4.J($$GHCziPrim_realWorldzh);break;
      case 2:
       var X9=V3<=223?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(X9.g){
       case 1:
	b4.J($$GHCziPrim_realWorldzh);break;
       case 2:
	var sa=y3-K3|0;
	var Y9=sa<2?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Y9.g){
	case 1:
	 var ra=K3+1|0;
	 var qa=$hs_plusAddrzh(t3,ra);
	 var Z9=$hs_readWord8OffAddrzh(qa,0,c4);
	 var aa=Z9[0],ba=Z9[1];
	 var ja=$hs_touchzh(u3,aa);
	 var ca=ba<128?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(ca.g){
	 case 1:
	  var da=ba>=192?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(da.g){
	  case 1:
	   var pa=ba|0;
	   var ma=pa-128|0;
	   var oa=V3|0;
	   var na=oa-192|0;
	   var la=na<<6;
	   var ka=la+ma|0;
	   var ia=$hs_chrzh(ka);
	   var ha=$hs_writeWideCharOffAddrzh(C3,L3,ia,ja);
	   var ga=$hs_touchzh(D3,ha);
	   var fa=L3+1|0;
	   var ea=K3+2|0;
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
      var ya=V3|0;
      var xa=$hs_chrzh(ya);
      var wa=$hs_writeWideCharOffAddrzh(C3,L3,xa,c4);
      var va=$hs_touchzh(D3,wa);
      var ua=L3+1|0;
      var ta=K3+1|0;
      J3.J(ta,ua,va);break;
     }break;
    case 2:
     $r([M3,R3]);break;
    }break;
   case 2:
    var Aa=$d(1,[C3,D3,E3,F3,G3,L3],"sat");
    var Ba=$t(function(){
     var Ca=K3==y3?$$GHCziTypes_True:$$GHCziTypes_False;
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
 $$GHCziCString_unpackCStringzh.J("UTF-8\x00");
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

var $$GHCziIOziException_zdfShowAsyncException4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("stack overflow\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException8=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException4,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("heap overflow\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException7=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException3,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("thread killed\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException6=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException2,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("user interrupt\x00");
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
   $$GHCziCString_unpackAppendCStringzh.J("[]\x00",n2);break;
  case 2:
   var p2=o2.v[0],q2=o2.v[1];
   var r2=$t(function(){
    var s2=$t(function(){
     var t2=$d(2,[$$GHCziShow_showListzuzu2,n2],"lvl24");
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
var $$GHCziIOziException_zdfExceptionDeadlockzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Deadlock\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionDeadlockzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(51525854,1528534511),goog.math.Long.fromBits(2498035378,3076107346),$$GHCziIOziException_zdfExceptionArrayExceptionzuds,$$GHCziIOziException_zdfExceptionArrayExceptionzuds1,$$GHCziIOziException_zdfExceptionDeadlockzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionDeadlock1=$D(1,function(){
 $r([goog.math.Long.fromBits(51525854,1528534511),goog.math.Long.fromBits(2498035378,3076107346),$$GHCziIOziException_zdfExceptionDeadlockzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionDeadlockzuzdctypeOf=$f(1,function(ka){
 $A($$GHCziIOziException_zdfExceptionDeadlock1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("AsyncException\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(2363394409,315339024),goog.math.Long.fromBits(2156861182,4256135785),$$GHCziIOziException_zdfExceptionArrayExceptionzuds,$$GHCziIOziException_zdfExceptionArrayExceptionzuds1,$$GHCziIOziException_zdfExceptionAsyncExceptionzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncException1=$D(1,function(){
 $r([goog.math.Long.fromBits(2363394409,315339024),goog.math.Long.fromBits(2156861182,4256135785),$$GHCziIOziException_zdfExceptionAsyncExceptionzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctypeOf=$f(1,function(wa){
 $A($$GHCziIOziException_zdfExceptionAsyncException1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdcfromException=$f(1,function(xa){
 $M(xa,function(ya){
  var za=ya.v[0],Aa=ya.v[1];
  $$GHCziException_zdp1Exception.C([za],function(Ba){
   $$DataziTypeable_cast.J(Ba,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctypeOf,Aa);
  },[Aa]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncException=$D(1,function(){
 $r([$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctypeOf,$$GHCziIOziException_zdfShowAsyncException,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdcfromException]);
},"at libraries/base/GHC/IO/Exception.hs:135:10");
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException=$f(1,function(t){
 $R(1,[$$GHCziIOziException_zdfExceptionAsyncException,t],"SomeException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionExitCodezuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ExitCode\x00");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionExitCodezuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(1741995454,4203736966),goog.math.Long.fromBits(3139257453,3149502275),$$GHCziIOziException_zdfExceptionArrayExceptionzuds,$$GHCziIOziException_zdfExceptionArrayExceptionzuds1,$$GHCziIOziException_zdfExceptionExitCodezuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionExitCode1=$D(1,function(){
 $r([goog.math.Long.fromBits(1741995454,4203736966),goog.math.Long.fromBits(3139257453,3149502275),$$GHCziIOziException_zdfExceptionExitCodezuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionExitCodezuzdctypeOf=$f(1,function(Ia){
 $A($$GHCziIOziException_zdfExceptionExitCode1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_ioException=$f(2,function(I7,t){
 $$GHCziIOziException$x.J(I7,t);
},[],"at libraries/base/GHC/IO/Exception.hs:188:1");
var $$GHCziIOziException_ioError=$f(2,function(I7,t){
 $$GHCziIOziException$x.J(I7,t);
},[],"at libraries/base/GHC/IO/Exception.hs:192:1");
var $$GHCziIOziException_ResourceExhausted=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:233:5");
var $$GHCziIOziException_IllegalOperation=$D(6,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:235:5");
var $$GHCziIOziException_InvalidArgument=$D(13,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:243:5");
var $$GHCziIOziException_UnsupportedOperation=$D(16,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:246:5");
var $$GHCziIOziException_UserInterrupt=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:129:5");
var $$GHCziIOziException$x=$F(2,function(zd,Ad){
 var Bd=$t(function(){
  $$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException.J(zd);
 },[zd],"sat");
 $r($hs_raiseIOzh(Bd,Ad));
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
 var x1=$hs_newPinnedByteArrayzh(8096,v1);
 var y1=x1[0],z1=x1[1];
 var A1=$d(1,[w1],"sat");
 var B1=$d(2,[z1,A1],"sat");
 var D1=$hs_byteArrayContentszh(z1);
 var C1=$d(1,[D1,B1,s1,8096,0,0],"sat");
 $r([y1,C1]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFDzuds=$t(function(){
 $$GHCziCString_unpackCStringzh.J("base\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFDzuds1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfTypeableFDzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("FD\x00");
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
var $$GHCziIOziFD_zdfIODeviceFDzuds1=$t(function(){
 var $ff=hs_negateInt64(goog.math.Long.fromBits(1,0));
 var F1=[$$GHCziPrim_realWorldzh,$ff];
 var G1=F1[1];
 $R(1,[G1],"I64#");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzupred=$f(1,function(H1){
 $$GHCziInt_zdfEqInt64zuzdczeze.J(H1,$$GHCziIOziFD_zdfIODeviceFDzuds1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("seek\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa9=$f(4,function(I1,J1,K1,L1){
 $$GHCziIntegerziType_integerToInt64.C([K1],function(N1){
  var M1=$f(1,function(O1){
   var P1=$f(1,function(Q1){
    var $ff=__hscore_lseek(I1,N1,O1);
    var R1=[Q1,$ff];
    var S1=R1[0],T1=R1[1];
    var U1=$d(1,[T1],"sat");
    $r([S1,U1]);
   },[I1,N1,O1],"sat");
   $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFDzupred,$$GHCziIOziFD_zdfIODeviceFDzuloc2,P1,L1],function(V1){
    var W1=V1[0];
    $r([W1,$$GHCziTuple_Z0T]);
   },[]);
  },[I1,N1,L1],"$j");
  $M(J1,function(X1){
   switch(X1.g){
   case 1:
    var $ff=__hscore_seek_set();
    var Y1=[$$GHCziPrim_realWorldzh,$ff];
    var Z1=Y1[1];
    M1.J(Z1);break;
   case 2:
    var $ff=__hscore_seek_cur();
    var a2=[$$GHCziPrim_realWorldzh,$ff];
    var b2=a2[1];
    M1.J(b2);break;
   case 3:
    var $ff=__hscore_seek_end();
    var c2=[$$GHCziPrim_realWorldzh,$ff];
    var d2=c2[1];
    M1.J(d2);break;
   }
  },[I1,N1,L1,M1]);
 },[I1,L1,J1]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD13=$f(4,function(e2,f2,g2,h2){
 $M(e2,function(i2){
  var j2=i2.v[0];
  $$GHCziIOziFD_zdwa9.J(j2,f2,g2,h2);
 },[f2,g2,h2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD12=$f(1,function(l2){
 $$GHCziInt_zdfEqInt64zuzdczeze.J(l2,$$GHCziIOziFD_zdfIODeviceFDzuds1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD11=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hGetPosn\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa8=$f(2,function(m2,n2){
 var $ff=__hscore_seek_cur();
 var o2=[$$GHCziPrim_realWorldzh,$ff];
 var p2=o2[1];
 var q2=$f(1,function(r2){
  var $ff=__hscore_lseek(m2,goog.math.Long.fromBits(0,0),p2);
  var s2=[r2,$ff];
  var t2=s2[0],u2=s2[1];
  var v2=$d(1,[u2],"sat");
  $r([t2,v2]);
 },[m2,p2],"sat");
 $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFD12,$$GHCziIOziFD_zdfIODeviceFD11,q2,n2],function(w2){
  var x2=w2[0],y2=w2[1];
  var z2=$t(function(){
   $M(y2,function(A2){
    var B2=A2.v[0];
    $$GHCziIntegerziType_int64ToInteger.J(B2);
   },[]);
  },[y2],"sat");
  $r([x2,z2]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD10=$f(2,function(C2,D2){
 $M(C2,function(E2){
  var F2=E2.v[0];
  $$GHCziIOziFD_zdwa8.J(F2,D2);
 },[D2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD8=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.setSize\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa7=$f(3,function(G2,H2,I2){
 $$GHCziIntegerziType_integerToInt64.C([H2],function(U2){
  var $ff=__hscore_ftruncate(G2,U2);
  var J2=[I2,$ff];
  var K2=J2[0],L2=J2[1];
  $M(L2,function(M2){
   switch(M2){
   case 0:
    $r([K2,$$GHCziTuple_Z0T]);break;
   default:
    var $ff=__hscore_get_errno();
    var N2=[K2,$ff];
    var O2=N2[0],P2=N2[1];
    var Q2=$d(1,[P2],"sat");
    $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziFD_zdfIODeviceFD8,Q2,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(R2){
     $$GHCziIOziException_ioError.C([R2,O2],function(S2){
      var T2=S2[0];
      $r([T2,$$GHCziTuple_Z0T]);
     },[]);
    },[O2]);
   }
  },[K2]);
 },[G2,I2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD7=$f(3,function(V2,W2,X2){
 $M(V2,function(Y2){
  var Z2=Y2.v[0];
  $$GHCziIOziFD_zdwa7.J(Z2,W2,X2);
 },[W2,X2]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_stdout=$D(1,function(){
 $r([1,0]);
},"at libraries/base/GHC/IO/FD.hs:299:1");
var $$GHCziIOziFD_stderr=$D(1,function(){
 $r([2,0]);
},"at libraries/base/GHC/IO/FD.hs:300:1");
var $$GHCziIOziFD_zdwa13=$f(7,function(a3,b3,c3,d3,e3,f3,g3){
 var h3=$f(1,function(i3){
  var $ff=rtsSupportsBoundThreads();
  var j3=[$$GHCziPrim_realWorldzh,$ff];
  var k3=j3[1];
  $M(k3,function(l3){
   switch(l3){
   case 0:
    $b($hs_waitWritezh,[b3,i3],function(n3){
     $r([n3,$$GHCziTuple_Z0T]);
    },[]);break;
   default:
    var m3=$d(1,[b3],"sat");
    $$GHCziEventziThread_threadWaitRead1.J($$GHCziEventziInternal_evtWrite,m3,i3);
   }
  },[b3,i3]);
 },[b3],"a2");
 var o3=$f(1,function(p3){
  var q3=$f(1,function(r3){
   $M(d3,function(s3){
    var t3=s3.v[0];
    $M(e3,function(u3){
     var v3=u3.v[0];
     $M(f3,function(w3){
      var x3=w3.v[0];
      var C3=$hs_plusAddrzh(t3,v3);
      var $ff=write(b3,C3,x3);
      var y3=[r3,$ff];
      var z3=y3[0],A3=y3[1];
      var B3=$d(1,[A3],"sat");
      $r([z3,B3]);
     },[b3,t3,v3,r3]);
    },[b3,f3,t3,r3]);
   },[b3,e3,f3,r3]);
  },[b3,d3,e3,f3],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,a3,q3,h3,p3],function(D3){
   var E3=D3[0],F3=D3[1];
   $r([E3,F3]);
  },[]);
 },[b3,h3,a3,d3,e3,f3],"a3");
 $M(c3,function(G3){
  switch(G3){
  case 0:
   var $ff=fdReady(b3,1,0,0);
   var H3=[g3,$ff];
   var I3=H3[0],J3=H3[1];
   var K3=$f(1,function(L3){
    var $ff=rtsSupportsBoundThreads();
    var M3=[$$GHCziPrim_realWorldzh,$ff];
    var N3=M3[1];
    $M(N3,function(O3){
     switch(O3){
     case 0:
      o3.J(L3);break;
     default:
      $M(d3,function(P3){
       var Q3=P3.v[0];
       $M(e3,function(R3){
	var S3=R3.v[0];
	$M(f3,function(T3){
	 var U3=T3.v[0];
	 var V3=$f(1,function(W3){
	  var b4=$hs_plusAddrzh(Q3,S3);
	  var $ff=write(b3,b4,U3);
	  var X3=[W3,$ff];
	  var Y3=X3[0],Z3=X3[1];
	  var a4=$d(1,[Z3],"sat");
	  $r([Y3,a4]);
	 },[b3,Q3,S3,U3],"sat");
	 $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,a3,V3,h3,L3],function(c4){
	  var d4=c4[0],e4=c4[1];
	  $r([d4,e4]);
	 },[]);
	},[b3,h3,a3,Q3,S3,L3]);
       },[b3,h3,a3,f3,Q3,L3]);
      },[b3,h3,a3,e3,f3,L3]);
     }
    },[b3,h3,a3,d3,e3,f3,o3,L3]);
   },[b3,h3,a3,d3,e3,f3,o3],"a4");
   $M(J3,function(f4){
    switch(f4){
    case 0:
     var $ff=rtsSupportsBoundThreads();
     var g4=[$$GHCziPrim_realWorldzh,$ff];
     var h4=g4[1];
     $M(h4,function(i4){
      switch(i4){
      case 0:
       $b($hs_waitWritezh,[b3,I3],function(m4){
	K3.J(m4);
       },[b3,h3,a3,d3,e3,f3,o3,K3]);break;
      default:
       var j4=$d(1,[b3],"sat");
       $$GHCziEventziThread_threadWaitRead1.C([$$GHCziEventziInternal_evtWrite,j4,I3],function(k4){
	var l4=k4[0];
	K3.J(l4);
       },[b3,h3,a3,d3,e3,f3,o3,K3]);
      }
     },[b3,h3,a3,d3,e3,f3,o3,K3,I3]);break;
    default:
     K3.J(I3);
    }
   },[b3,h3,a3,d3,e3,f3,o3,K3,I3]);break;
  default:
   o3.J(g3);
  }
 },[b3,h3,a3,d3,e3,f3,o3,g3]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa4=$f(7,function(y4,z4,A4,B4,C4,D4,E4){
 var F4=$d(1,[z4],"lvl8");
 var G4=$f(1,function(H4){
  var $ff=rtsSupportsBoundThreads();
  var I4=[$$GHCziPrim_realWorldzh,$ff];
  var J4=I4[1];
  $M(J4,function(K4){
   switch(K4){
   case 0:
    $b($hs_waitReadzh,[z4,H4],function(L4){
     $r([L4,$$GHCziTuple_Z0T]);
    },[]);break;
   default:
    $$GHCziEventziThread_threadWaitRead1.J($$GHCziEventziInternal_evtRead,F4,H4);
   }
  },[z4,F4,H4]);
 },[z4,F4],"a2");
 var M4=$f(1,function(N4){
  var O4=$f(1,function(P4){
   $M(B4,function(Q4){
    var R4=Q4.v[0];
    $M(C4,function(S4){
     var T4=S4.v[0];
     $M(D4,function(U4){
      var V4=U4.v[0];
      var a5=$hs_plusAddrzh(R4,T4);
      var $ff=read(z4,a5,V4);
      var W4=[P4,$ff];
      var X4=W4[0],Y4=W4[1];
      var Z4=$d(1,[Y4],"sat");
      $r([X4,Z4]);
     },[z4,R4,T4,P4]);
    },[z4,D4,R4,P4]);
   },[z4,C4,D4,P4]);
  },[z4,B4,C4,D4],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,y4,O4,G4,N4],function(b5){
   var c5=b5[0],d5=b5[1];
   var e5=$t(function(){
    $M(d5,function(f5){
     var g5=f5.v[0];
     $R(1,[g5],"I#");
    },[]);
   },[d5],"sat");
   $r([c5,e5]);
  },[]);
 },[z4,G4,y4,B4,C4,D4],"a3");
 $M(A4,function(h5){
  switch(h5){
  case 0:
   var $ff=fdReady(z4,0,0,0);
   var i5=[E4,$ff];
   var j5=i5[0],k5=i5[1];
   var l5=$f(1,function(m5){
    var $ff=rtsSupportsBoundThreads();
    var n5=[$$GHCziPrim_realWorldzh,$ff];
    var o5=n5[1];
    $M(o5,function(p5){
     switch(p5){
     case 0:
      M4.J(m5);break;
     default:
      $M(B4,function(q5){
       var r5=q5.v[0];
       $M(C4,function(s5){
	var t5=s5.v[0];
	$M(D4,function(u5){
	 var v5=u5.v[0];
	 var w5=$f(1,function(x5){
	  var C5=$hs_plusAddrzh(r5,t5);
	  var $ff=read(z4,C5,v5);
	  var y5=[x5,$ff];
	  var z5=y5[0],A5=y5[1];
	  var B5=$d(1,[A5],"sat");
	  $r([z5,B5]);
	 },[z4,r5,t5,v5],"sat");
	 $$ForeignziCziError_throwErrnoIfMinus1RetryMayBlock2.C([$$GHCziIOziFD$f,y4,w5,G4,m5],function(D5){
	  var E5=D5[0],F5=D5[1];
	  var G5=$t(function(){
	   $M(F5,function(H5){
	    var I5=H5.v[0];
	    $R(1,[I5],"I#");
	   },[]);
	  },[F5],"sat");
	  $r([E5,G5]);
	 },[]);
	},[z4,G4,y4,r5,t5,m5]);
       },[z4,G4,y4,D4,r5,m5]);
      },[z4,G4,y4,C4,D4,m5]);
     }
    },[z4,G4,y4,B4,C4,D4,M4,m5]);
   },[z4,G4,y4,B4,C4,D4,M4],"a4");
   var J5=$f(1,function(K5){
    var $ff=rtsSupportsBoundThreads();
    var L5=[$$GHCziPrim_realWorldzh,$ff];
    var M5=L5[1];
    $M(M5,function(N5){
     switch(N5){
     case 0:
      $b($hs_waitReadzh,[z4,K5],function(Q5){
       l5.J(Q5);
      },[z4,G4,y4,B4,C4,D4,M4,l5]);break;
     default:
      $$GHCziEventziThread_threadWaitRead1.C([$$GHCziEventziInternal_evtRead,F4,K5],function(O5){
       var P5=O5[0];
       l5.J(P5);
      },[z4,G4,y4,B4,C4,D4,M4,l5]);
     }
    },[z4,F4,G4,y4,B4,C4,D4,M4,l5,K5]);
   },[z4,F4,l5],"a5");
   $M(k5,function(R5){
    switch(R5){
    case  -1:
     var $ff=__hscore_get_errno();
     var S5=[j5,$ff];
     var T5=S5[0],U5=S5[1];
     var V5=$d(1,[U5],"sat");
     $$ForeignziCziError_errnoToIOError.C([y4,V5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(W5){
      $$GHCziIOziException_ioError.C([W5,T5],function(X5){
       var Y5=X5[0],Z5=X5[1];
       $M(Z5,function(a6){
	var b6=a6.v[0];
	$M(b6,function(c6){
	 switch(c6){
	 case 0:
	  J5.J(Y5);break;
	 default:
	  l5.J(Y5);
	 }
	},[z4,F4,G4,y4,B4,C4,D4,M4,l5,J5,Y5]);
       },[z4,F4,G4,y4,B4,C4,D4,M4,l5,J5,Y5]);
      },[z4,F4,G4,y4,B4,C4,D4,M4,l5,J5]);
     },[z4,F4,G4,y4,B4,C4,D4,M4,l5,J5,T5]);break;
    case 0:
     J5.J(j5);break;
    default:
     l5.J(j5);
    }
   },[z4,F4,G4,y4,B4,C4,D4,M4,l5,J5,j5]);break;
  default:
   M4.J(E4);
  }
 },[z4,F4,G4,y4,B4,C4,D4,M4,E4]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD6=$D(1,function(){
 $r([0]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfRawIOFD3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdWrite\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa=$f(5,function(m6,n6,o6,p6,q6){
 var s6=p6>>>0;
 var r6=$d(1,[s6],"sat");
 $$GHCziIOziFD_zdwa13.C([$$GHCziIOziFD_zdfRawIOFD3,m6,n6,o6,$$GHCziIOziFD_zdfBufferedIOFD6,r6,q6],function(t6){
  var u6=t6[0],v6=t6[1];
  $M(v6,function(w6){
   var x6=w6.v[0];
   var y6=x6<p6?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(y6.g){
   case 1:
    $r([u6,$$GHCziTuple_Z0T]);break;
   case 2:
    var D6=p6-x6|0;
    var z6=$t(function(){
     $M(o6,function(A6){
      var B6=A6.v[0];
      var C6=$hs_plusAddrzh(B6,x6);
      $R(1,[C6],"Ptr");
     },[x6]);
    },[o6,x6],"sat");
    $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa.J(m6,n6,z6,D6,u6);break;
   }
  },[m6,n6,o6,p6,u6]);
 },[m6,n6,o6,p6]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD14=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdRead\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD15=$f(2,function(s7,t7){
 $M(s7,function(u7){
  var v7=u7.v[0];
  var $ff=isatty(v7);
  var w7=[t7,$ff];
  var x7=w7[0],y7=w7[1];
  var z7=$t(function(){
   $M(y7,function(A7){
    switch(A7){
    case 0:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);
  },[y7],"sat");
  $r([x7,z7]);
 },[t7]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD21=$f(1,function(B7){
 $M(B7,function(C7){
  var D7=C7.v[0];
  $M(D7,function(E7){
   switch(E7){
   case  -1:
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD20=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.ready\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa11=$f(4,function(F7,G7,H7,I7){
 var J7=$f(1,function(K7){
  var L7=$f(1,function(M7){
   var $ff=fdReady(F7,K7,H7,0);
   var N7=[M7,$ff];
   var O7=N7[0],P7=N7[1];
   var Q7=$d(1,[P7],"sat");
   $r([O7,Q7]);
  },[F7,K7,H7],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFD21,$$GHCziIOziFD_zdfIODeviceFD20,L7,I7],function(R7){
   var S7=R7[0],T7=R7[1];
   var U7=$t(function(){
    $M(T7,function(V7){
     var W7=V7.v[0];
     $M(W7,function(X7){
      switch(X7){
      case 0:
       $R(1,[],"False");break;
      case 1:
       $R(2,[],"True");break;
      default:
       $A($$GHCziEnum_zdfEnumBool3);
      }
     },[]);
    },[]);
   },[T7],"sat");
   $r([S7,U7]);
  },[]);
 },[F7,H7,I7],"$j");
 $M(G7,function(Y7){
  switch(Y7.g){
  case 1:
   J7.J(0);break;
  case 2:
   J7.J(1);break;
  }
 },[F7,H7,I7,J7]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD19=$f(4,function(Z7,a8,b8,c8){
 $M(Z7,function(d8){
  var e8=d8.v[0];
  $M(b8,function(f8){
   var g8=f8.v[0];
   $$GHCziIOziFD_zdwa11.J(e8,a8,g8,c8);
  },[e8,a8,c8]);
 },[b8,a8,c8]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.dup2\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa5=$f(4,function(q8,r8,s8,t8){
 var $ff=dup2(q8,s8);
 var u8=[t8,$ff];
 var v8=u8[0],w8=u8[1];
 $M(w8,function(x8){
  switch(x8){
  case  -1:
   var $ff=__hscore_get_errno();
   var z8=[v8,$ff];
   var A8=z8[0],B8=z8[1];
   var C8=$d(1,[B8],"sat");
   $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziFD_zdfIODeviceFDzuloc,C8,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(D8){
    $$GHCziIOziException_ioError.C([D8,A8],function(E8){
     var F8=E8[0];
     var G8=$d(1,[s8,r8],"sat");
     $r([F8,G8]);
    },[s8,r8]);
   },[s8,r8,A8]);break;
  default:
   var y8=$d(1,[s8,r8],"sat");
   $r([v8,y8]);
  }
 },[s8,v8,r8]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD1=$f(3,function(H8,I8,J8){
 $M(H8,function(K8){
  var L8=K8.v[0],M8=K8.v[1];
  $M(I8,function(N8){
   var O8=N8.v[0];
   $$GHCziIOziFD_zdwa5.J(L8,M8,O8,J8);
  },[L8,M8,J8]);
 },[I8,J8]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.dup\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa6=$f(3,function(P8,Q8,R8){
 var $ff=dup(P8);
 var S8=[R8,$ff];
 var T8=S8[0],U8=S8[1];
 $M(U8,function(V8){
  switch(V8){
  case  -1:
   var $ff=__hscore_get_errno();
   var X8=[T8,$ff];
   var Y8=X8[0],Z8=X8[1];
   var a9=$d(1,[Z8],"sat");
   $$ForeignziCziError_errnoToIOError.C([$$GHCziIOziFD_zdfIODeviceFDzuloc1,a9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(b9){
    $$GHCziIOziException_ioError.C([b9,Y8],function(c9){
     var d9=c9[0],e9=c9[1];
     var f9=$t(function(){
      $M(e9,function(g9){
       var h9=g9.v[0];
       $R(1,[h9,Q8],"FD");
      },[Q8]);
     },[Q8,e9],"sat");
     $r([d9,f9]);
    },[Q8]);
   },[Q8,Y8]);break;
  default:
   var W8=$d(1,[V8,Q8],"sat");
   $r([T8,W8]);
  }
 },[T8,Q8]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD2=$f(2,function(i9,j9){
 $M(i9,function(k9){
  var l9=k9.v[0],m9=k9.v[1];
  $$GHCziIOziFD_zdwa6.J(l9,m9,j9);
 },[j9]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD3=$f(2,function(n9,o9){
 var p9=$t(function(){
  $M(n9,function(q9){
   var r9=q9.v[0];
   $R(1,[r9],"I32#");
  },[]);
 },[n9],"sat");
 $$SystemziPosixziInternals_fdStat1.C([p9,o9],function(s9){
  var t9=s9[0],u9=s9[1];
  $M(u9,function(v9){
   var w9=v9.v[0];
   $r([t9,w9]);
  },[t9]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD14=$f(2,function(x9,y9){
 var z9=$t(function(){
  $M(x9,function(A9){
   var B9=A9.v[0];
   $R(1,[B9],"I32#");
  },[]);
 },[x9],"sat");
 $$SystemziPosixziInternals_fdStat1.C([z9,y9],function(C9){
  var D9=C9[0],E9=C9[1];
  $M(E9,function(F9){
   var G9=F9.v[0];
   var H9=$t(function(){
    $M(G9,function(I9){
     switch(I9.g){
     case 3:
      $R(2,[],"True");break;
     case 4:
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }
    },[]);
   },[G9],"sat");
   $r([D9,H9]);
  },[D9]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD17=$f(2,function(J9,K9){
 $M(J9,function(L9){
  var M9=L9.v[0];
  var $ff=unlockFile(M9);
  var N9=[K9,$ff];
  var O9=N9[0];
  $r([O9,$$GHCziTuple_Z0T]);
 },[K9]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzupred1=$f(1,function(a1){
 $$GHCziIOziFD_zdfIODeviceFD21.J(a1);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFDzuloc3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.close\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa10=$f(2,function(P9,Q9){
 var R9=$f(1,function(S9){
  var $ff=close(P9);
  var T9=[S9,$ff];
  var U9=T9[0],V9=T9[1];
  var W9=$d(1,[V9],"sat");
  $r([U9,W9]);
 },[P9],"sat");
 $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$GHCziIOziFD_zdfIODeviceFDzupred1,$$GHCziIOziFD_zdfIODeviceFDzuloc3,R9,Q9],function(X9){
  var Y9=X9[0];
  $r([Y9,$$GHCziTuple_Z0T]);
 },[]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD18=$f(2,function(Z9,aa){
 $M(Z9,function(ba){
  var ca=ba.v[0];
  $$GHCziIOziFD_zdwa10.J(ca,aa);
 },[aa]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD16=$f(2,function(da,ea){
 var fa=$f(1,function(a1){
  $$GHCziIOziFD_zdfIODeviceFD17.J(da,a1);
 },[da],"sat");
 var ga=$f(1,function(ha){
  var $ff=rtsSupportsBoundThreads();
  var ia=[$$GHCziPrim_realWorldzh,$ff];
  var ja=ia[1];
  $M(ja,function(ka){
   switch(ka){
   case 0:
    $M(da,function(va){
     var wa=va.v[0];
     $$GHCziIOziFD_zdwa10.J(wa,ha);
    },[ha]);break;
   default:
    $M($$GHCziEventziThread_eventManager,function(la){
     var ma=la.v[0];
     var na=$hs_readMutVarzh(ma,ha);
     var oa=na[0],pa=na[1];
     $M(pa,function(qa){
      switch(qa.g){
      case 1:
       $$GHCziIO_failIO.J($$GHCziEventziThread_closeFdWith2,oa);break;
      case 2:
       var ra=qa.v[0];
       var sa=$t(function(){
	$M(da,function(ta){
	 var ua=ta.v[0];
	 $R(1,[ua],"I32#");
	},[]);
       },[da],"sat");
       $$GHCziEventziManager_closeFd1.J(ra,$$GHCziIOziFD_zdfIODeviceFD18,sa,oa);break;
      }
     },[oa,da]);
    },[ha,da]);
   }
  },[ha,da]);
 },[da],"sat");
 $$GHCziIO_finally1.J(ga,fa,ea);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfIODeviceFD=$D(1,function(){
 $r([$$GHCziIOziFD_zdfIODeviceFD19,$$GHCziIOziFD_zdfIODeviceFD16,$$GHCziIOziFD_zdfIODeviceFD15,$$GHCziIOziFD_zdfIODeviceFD14,$$GHCziIOziFD_zdfIODeviceFD13,$$GHCziIOziFD_zdfIODeviceFD10,$$GHCziIOziFD_zdfIODeviceFD9,$$GHCziIOziFD_zdfIODeviceFD7,$$GHCziIOziFD_zdfIODeviceFD6,$$GHCziIOziFD_zdfIODeviceFD5,$$GHCziIOziFD_zdfIODeviceFD4,$$GHCziIOziFD_zdfIODeviceFD3,$$GHCziIOziFD_zdfIODeviceFD2,$$GHCziIOziFD_zdfIODeviceFD1]);
},"at libraries/base/GHC/IO/FD.hs:96:10");
var $$GHCziIOziFD_zdfBufferedIOFD12=$f(4,function(yd,zd,Ad,Bd){
 zd.C([Bd],function(Cd){
  var Dd=Cd[0],Ed=Cd[1];
  $M(Ed,function(Fd){
   var Gd=Fd.v[0];
   $M(Gd,function(Hd){
    switch(Hd){
    case  -1:
     var $ff=__hscore_get_errno();
     var Id=[Dd,$ff];
     var Jd=Id[0],Kd=Id[1];
     $M(Kd,function(Ld){
      switch(Ld){
      case 4:
       $$GHCziIOziFD_zdfBufferedIOFD12.J(yd,zd,Ad,Jd);break;
      case 35:
       Ad.J(Jd);break;
      default:
       $$ForeignziCziError_throwErrno1.J(yd,Jd);
      }
     },[zd,yd,Jd,Ad]);break;
    default:
     $r([Dd,Fd]);
    }
   },[zd,Dd,Fd,yd,Ad]);
  },[zd,Dd,yd,Ad]);
 },[zd,yd,Ad]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD10=$D(1,function(){
 $r([ -1]);
},"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD9=$f(1,function(Md){
 $r([Md,$$GHCziIOziFD_zdfBufferedIOFD10]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD11=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdReadNonBlocking\x00");
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa1=$f(5,function(uf,vf,wf,xf,yf){
 var zf=$t(function(){
  $M(xf,function(Af){
   var Bf=Af.v[0];
   var Cf=Bf>>>0;
   $R(1,[Cf],"W32#");
  },[]);
 },[xf],"a2");
 var Df=$f(1,function(Ef){
  $M(wf,function(Ff){
   var Gf=Ff.v[0];
   $M(zf,function(Hf){
    var If=Hf.v[0];
    var Jf=$f(1,function(Kf){
     var Pf=$hs_plusAddrzh(Gf,0);
     var $ff=write(uf,Pf,If);
     var Lf=[Kf,$ff];
     var Mf=Lf[0],Nf=Lf[1];
     var Of=$d(1,[Nf],"sat");
     $r([Mf,Of]);
    },[uf,Gf,If],"sat");
    $$GHCziIOziFD_zdfBufferedIOFD12.C([$$GHCziIOziFD$n,Jf,$$GHCziIOziFD$o,Ef],function(Qf){
     var Rf=Qf[0],Sf=Qf[1];
     $M(Sf,function(Tf){
      var Uf=Tf.v[0];
      $M(Uf,function(Vf){
       switch(Vf){
       case  -1:
	$r([Rf,$$GHCziIOziFD$p]);break;
       default:
	$r([Rf,Tf]);
       }
      },[Rf,Tf]);
     },[Rf]);
    },[]);
   },[uf,Gf,Ef]);
  },[zf,uf,Ef]);
 },[zf,wf,uf],"a3");
 $M(vf,function(Wf){
  switch(Wf){
  case 0:
   var $ff=fdReady(uf,1,0,0);
   var dg=[yf,$ff];
   var eg=dg[0],fg=dg[1];
   $M(fg,function(gg){
    switch(gg){
    case 0:
     $r([eg,$$GHCziIOziFD_zdfBufferedIOFD6]);break;
    default:
     var $ff=rtsSupportsBoundThreads();
     var hg=[$$GHCziPrim_realWorldzh,$ff];
     var ig=hg[1];
     $M(ig,function(jg){
      switch(jg){
      case 0:
       Df.C([eg],function(Cg){
	var Dg=Cg[0],Eg=Cg[1];
	var Fg=$t(function(){
	 $M(Eg,function(Gg){
	  var Hg=Gg.v[0];
	  $R(1,[Hg],"I#");
	 },[]);
	},[Eg],"sat");
	$r([Dg,Fg]);
       },[]);break;
      default:
       $M(wf,function(kg){
	var lg=kg.v[0];
	$M(zf,function(mg){
	 var ng=mg.v[0];
	 var og=$f(1,function(pg){
	  var ug=$hs_plusAddrzh(lg,0);
	  var $ff=write(uf,ug,ng);
	  var qg=[pg,$ff];
	  var rg=qg[0],sg=qg[1];
	  var tg=$d(1,[sg],"sat");
	  $r([rg,tg]);
	 },[uf,lg,ng],"sat");
	 $$GHCziIOziFD_zdfBufferedIOFD12.C([$$GHCziIOziFD$n,og,$$GHCziIOziFD$o,eg],function(vg){
	  var wg=vg[0],xg=vg[1];
	  $M(xg,function(yg){
	   var zg=yg.v[0];
	   $M(zg,function(Ag){
	    switch(Ag){
	    case  -1:
	     $r([wg,$$GHCziIOziFD_zdfBufferedIOFD6]);break;
	    default:
	     var Bg=$d(1,[Ag],"sat");
	     $r([wg,Bg]);
	    }
	   },[wg]);
	  },[wg]);
	 },[]);
	},[uf,lg,eg]);
       },[zf,uf,eg]);
      }
     },[zf,wf,uf,Df,eg]);
    }
   },[zf,wf,uf,Df,eg]);break;
  default:
   Df.C([yf],function(Xf){
    var Yf=Xf[0],Zf=Xf[1];
    var ag=$t(function(){
     $M(Zf,function(bg){
      var cg=bg.v[0];
      $R(1,[cg],"I#");
     },[]);
    },[Zf],"sat");
    $r([Yf,ag]);
   },[]);
  }
 },[zf,wf,uf,Df,yf]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD2=$f(3,function(Pg,Qg,Rg){
 $M(Pg,function(Sg){
  var Tg=Sg.v[0],Ug=Sg.v[1];
  $M(Qg,function(Vg){
   var Wg=Vg.v[0],Xg=Vg.v[1],Yg=Vg.v[2],Zg=Vg.v[3],ah=Vg.v[4],bh=Vg.v[5];
   var ih=bh-ah|0;
   var dh=$hs_plusAddrzh(Wg,ah);
   var ch=$d(1,[dh],"sat");
   $$GHCziIOziFD_zdfBufferedIOFDzuzdszdwa.C([Tg,Ug,ch,ih,Rg],function(eh){
    var fh=eh[0];
    var hh=$hs_touchzh(Xg,fh);
    var gh=$d(1,[Wg,Xg,Yg,Zg,0,0],"sat");
    $r([hh,gh]);
   },[Wg,Xg,Yg,Zg]);
  },[Tg,Ug,Rg]);
 },[Qg,Rg]);
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
var $$GHCziIOziFD_zdwa2=$f(9,function(jh,kh,lh,mh,nh,oh,ph,qh,rh){
 $M(kh,function(sh){
  switch(sh){
  case 0:
   var $ff=fdReady(jh,0,0,0);
   var Vh=[rh,$ff];
   var Wh=Vh[0],Xh=Vh[1];
   $M(Xh,function(Yh){
    switch(Yh){
    case 0:
     var Di=$hs_touchzh(mh,Wh);
     var Bi=$d(1,[lh,mh,nh,oh,ph,qh],"sat");
     var Ci=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD5,Bi],"sat");
     $r([Di,Ci]);break;
    default:
     var Zh=$f(1,function(ai){
      var ii=oh-qh|0;
      var gi=ii>>>0;
      var hi=$hs_plusAddrzh(lh,qh);
      var fi=$hs_plusAddrzh(hi,0);
      var $ff=read(jh,fi,gi);
      var bi=[ai,$ff];
      var ci=bi[0],di=bi[1];
      var ei=$d(1,[di],"sat");
      $r([ci,ei]);
     },[jh,lh,qh,oh],"sat");
     $$GHCziIOziFD_zdfBufferedIOFD12.C([$$GHCziIOziFD_zdfBufferedIOFD11,Zh,$$GHCziIOziFD_zdfBufferedIOFD9,Wh],function(ji){
      var ki=ji[0],li=ji[1];
      $M(li,function(mi){
       var ni=mi.v[0];
       $M(ni,function(oi){
	switch(oi){
	case  -1:
	 var xi=$hs_touchzh(mh,ki);
	 var vi=$d(1,[lh,mh,nh,oh,ph,qh],"sat");
	 var wi=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD7,vi],"sat");
	 $r([xi,wi]);break;
	case 0:
	 var Ai=$hs_touchzh(mh,ki);
	 var yi=$d(1,[lh,mh,nh,oh,ph,qh],"sat");
	 var zi=$d(1,[$$DataziMaybe_Nothing,yi],"sat");
	 $r([Ai,zi]);break;
	default:
	 var ui=$hs_touchzh(mh,ki);
	 var qi=qh+oi|0;
	 var pi=$d(1,[lh,mh,nh,oh,ph,qi],"sat");
	 var ri=$d(1,[oi],"sat");
	 var si=$d(2,[ri],"sat");
	 var ti=$d(1,[si,pi],"sat");
	 $r([ui,ti]);
	}
       },[lh,qh,oh,mh,nh,ph,ki]);
      },[lh,qh,oh,mh,nh,ph,ki]);
     },[lh,qh,oh,mh,nh,ph]);
    }
   },[jh,lh,qh,oh,mh,nh,ph,Wh]);break;
  default:
   var th=$f(1,function(uh){
    var Ch=oh-qh|0;
    var Ah=Ch>>>0;
    var Bh=$hs_plusAddrzh(lh,qh);
    var zh=$hs_plusAddrzh(Bh,0);
    var $ff=read(jh,zh,Ah);
    var vh=[uh,$ff];
    var wh=vh[0],xh=vh[1];
    var yh=$d(1,[xh],"sat");
    $r([wh,yh]);
   },[jh,lh,qh,oh],"sat");
   $$GHCziIOziFD_zdfBufferedIOFD12.C([$$GHCziIOziFD_zdfBufferedIOFD11,th,$$GHCziIOziFD_zdfBufferedIOFD9,rh],function(Dh){
    var Eh=Dh[0],Fh=Dh[1];
    $M(Fh,function(Gh){
     var Hh=Gh.v[0];
     $M(Hh,function(Ih){
      switch(Ih){
      case  -1:
       var Rh=$hs_touchzh(mh,Eh);
       var Ph=$d(1,[lh,mh,nh,oh,ph,qh],"sat");
       var Qh=$d(1,[$$GHCziIOziFD_zdfBufferedIOFD8,Ph],"sat");
       $r([Rh,Qh]);break;
      case 0:
       var Uh=$hs_touchzh(mh,Eh);
       var Sh=$d(1,[lh,mh,nh,oh,ph,qh],"sat");
       var Th=$d(1,[$$DataziMaybe_Nothing,Sh],"sat");
       $r([Uh,Th]);break;
      default:
       var Oh=$hs_touchzh(mh,Eh);
       var Kh=qh+Ih|0;
       var Jh=$d(1,[lh,mh,nh,oh,ph,Kh],"sat");
       var Lh=$d(1,[Ih],"sat");
       var Mh=$d(2,[Lh],"sat");
       var Nh=$d(1,[Mh,Jh],"sat");
       $r([Oh,Nh]);
      }
     },[lh,qh,oh,mh,Eh,nh,ph]);
    },[lh,qh,oh,mh,Eh,nh,ph]);
   },[lh,qh,oh,mh,nh,ph]);
  }
 },[jh,lh,qh,oh,rh,mh,nh,ph]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD4=$f(3,function(Ei,Fi,Gi){
 $M(Ei,function(Hi){
  var Ii=Hi.v[0],Ji=Hi.v[1];
  $M(Fi,function(Ki){
   var Li=Ki.v[0],Mi=Ki.v[1],Ni=Ki.v[2],Oi=Ki.v[3],Pi=Ki.v[4],Qi=Ki.v[5];
   $$GHCziIOziFD_zdwa2.J(Ii,Ji,Li,Mi,Ni,Oi,Pi,Qi,Gi);
  },[Ii,Ji,Gi]);
 },[Fi,Gi]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa=$f(9,function(Ri,Si,Ti,Ui,Vi,Wi,Xi,Yi,Zi){
 var bj=Yi-Xi|0;
 var aj=$d(1,[bj],"sat");
 var dj=$hs_plusAddrzh(Ti,Xi);
 var cj=$d(1,[dj],"sat");
 $$GHCziIOziFD_zdwa1.C([Ri,Si,cj,aj,Zi],function(ej){
  var fj=ej[0],gj=ej[1];
  var mj=$hs_touchzh(Ui,fj);
  var hj=$t(function(){
   $M(gj,function(ij){
    var jj=ij.v[0];
    var kj=jj==Yi?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(kj.g){
    case 1:
     $R(1,[Ti,Ui,Vi,Wi,jj,Yi],"Buffer");break;
    case 2:
     $R(1,[Ti,Ui,Vi,Wi,0,0],"Buffer");break;
    }
   },[Ti,Yi,Ui,Vi,Wi]);
  },[Ti,Yi,Ui,gj,Vi,Wi],"sat");
  var lj=$d(1,[gj,hj],"sat");
  $r([mj,lj]);
 },[Ti,Yi,Ui,Vi,Wi]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD1=$f(3,function(nj,oj,pj){
 $M(nj,function(qj){
  var rj=qj.v[0],sj=qj.v[1];
  $M(oj,function(tj){
   var uj=tj.v[0],vj=tj.v[1],wj=tj.v[2],xj=tj.v[3],yj=tj.v[4],zj=tj.v[5];
   $$GHCziIOziFD_zdwa.J(rj,sj,uj,vj,wj,xj,yj,zj,pj);
  },[rj,sj,pj]);
 },[oj,pj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdwa3=$f(9,function(Aj,Bj,Cj,Dj,Ej,Fj,Gj,Hj,Ij){
 var Wj=Fj-Hj|0;
 var Kj=Wj>>>0;
 var Jj=$d(1,[Kj],"sat");
 var Mj=$hs_plusAddrzh(Cj,Hj);
 var Lj=$d(1,[Mj],"sat");
 $$GHCziIOziFD_zdwa4.C([$$GHCziIOziFD_zdfBufferedIOFD14,Aj,Bj,Lj,$$GHCziIOziFD_zdfBufferedIOFD6,Jj,Ij],function(Nj){
  var Oj=Nj[0],Pj=Nj[1];
  var Vj=$hs_touchzh(Dj,Oj);
  var Qj=$t(function(){
   $M(Pj,function(Rj){
    var Sj=Rj.v[0];
    var Tj=Hj+Sj|0;
    $R(1,[Cj,Dj,Ej,Fj,Gj,Tj],"Buffer");
   },[Cj,Hj,Fj,Dj,Ej,Gj]);
  },[Cj,Hj,Fj,Dj,Pj,Ej,Gj],"sat");
  var Uj=$d(1,[Pj,Qj],"sat");
  $r([Vj,Uj]);
 },[Cj,Hj,Fj,Dj,Ej,Gj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD13=$f(3,function(Xj,Yj,Zj){
 $M(Xj,function(ak){
  var bk=ak.v[0],ck=ak.v[1];
  $M(Yj,function(dk){
   var ek=dk.v[0],fk=dk.v[1],gk=dk.v[2],hk=dk.v[3],ik=dk.v[4],jk=dk.v[5];
   $$GHCziIOziFD_zdwa3.J(bk,ck,ek,fk,gk,hk,ik,jk,Zj);
  },[bk,ck,Zj]);
 },[Yj,Zj]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD3=$f(3,function(kk,lk,mk){
 var nk=$t(function(){
  $M(lk,function(ok){
   var pk=ok.v[0],qk=ok.v[1],rk=ok.v[3];
   $R(1,[pk,qk,$$GHCziIOziBuffer_WriteBuffer,rk,0,0],"Buffer");
  },[]);
 },[lk],"sat");
 $r([mk,nk]);
},[],"in `base:GHC.IO.FD'");
var $$GHCziIOziFD_zdfBufferedIOFD=$D(1,function(){
 $r([$$GHCziIOziFD_zdfBufferedIOFD15,$$GHCziIOziFD_zdfBufferedIOFD13,$$GHCziIOziFD_zdfBufferedIOFD4,$$GHCziIOziFD_zdfBufferedIOFD3,$$GHCziIOziFD_zdfBufferedIOFD2,$$GHCziIOziFD_zdfBufferedIOFD1]);
},"at libraries/base/GHC/IO/FD.hs:119:10");
var $$GHCziIOziFD$f=$F(1,function(gl){
 $M(gl,function(hl){
  var il=hl.v[0];
  $M(il,function(jl){
   switch(jl){
   case  -1:
    $R(2,[],"True");break;
   default:
    $R(1,[],"False");
   }
  },[]);
 },[]);
},"lvl");
var $$GHCziIOziFD$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.IO.FD.fdWriteNonBlocking\x00");
},"at libraries/base/GHC/IO/FD.hs:542:26");
var $$GHCziIOziFD$o=$F(1,function(sl){
 $r([sl,$$GHCziIOziFD_zdfBufferedIOFD10]);
},"a");
var $$GHCziIOziFD$p=$D(1,function(){
 $r([0]);
},"a1");

var $$GHCziIOziHandle_hFlush2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("hFlush\x00");
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
var $$GHCziIOziHandleziFD$a=$F(3,function(e4,f4,g4){
 $b($hs_takeMVarzh,[f4,g4],function(h4){
  var i4=h4[0],j4=h4[1];
  $M(j4,function(k4){
   var l4=k4.v[1],m4=k4.v[3],n4=k4.v[4],o4=k4.v[5],p4=k4.v[10],q4=k4.v[11];
   var r4=$hs_readMutVarzh(o4,i4);
   var s4=r4[0],t4=r4[1];
   $M(t4,function(u4){
    var v4=u4.v[2];
    var w4=$f(1,function(x4){
     $M(n4,function(y4){
      switch(y4.g){
      case 1:
       var Z4=$t(function(){
	$$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(e4);
       },[e4],"sat");
       $b($hs_putMVarzh,[f4,Z4,x4],function(a5){
	$r([a5,$$GHCziTuple_Z0T]);
       },[]);break;
      default:
       $M(q4,function(z4){
	switch(z4.g){
	case 1:
	 $M(p4,function(A4){
	  switch(A4.g){
	  case 1:
	   var B4=$t(function(){
	    $$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(e4);
	   },[e4],"sat");
	   $b($hs_putMVarzh,[f4,B4,x4],function(C4){
	    $r([C4,$$GHCziTuple_Z0T]);
	   },[]);break;
	  case 2:
	   var D4=A4.v[0];
	   $M(D4,function(E4){
	    var F4=E4.v[2];
	    F4.C([x4],function(G4){
	     var H4=G4[0];
	     var I4=$t(function(){
	      $$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(e4);
	     },[e4],"sat");
	     $b($hs_putMVarzh,[f4,I4,H4],function(J4){
	      $r([J4,$$GHCziTuple_Z0T]);
	     },[]);
	    },[f4,e4]);
	   },[f4,e4,x4]);break;
	  }
	 },[f4,e4,x4]);break;
	case 2:
	 var K4=z4.v[0];
	 $M(K4,function(L4){
	  var M4=L4.v[2];
	  M4.C([x4],function(N4){
	   var O4=N4[0];
	   $M(p4,function(P4){
	    switch(P4.g){
	    case 1:
	     var Q4=$t(function(){
	      $$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(e4);
	     },[e4],"sat");
	     $b($hs_putMVarzh,[f4,Q4,O4],function(R4){
	      $r([R4,$$GHCziTuple_Z0T]);
	     },[]);break;
	    case 2:
	     var S4=P4.v[0];
	     $M(S4,function(T4){
	      var U4=T4.v[2];
	      U4.C([O4],function(V4){
	       var W4=V4[0];
	       var X4=$t(function(){
		$$GHCziIOziHandleziInternals_ioezufinalizzedHandle.J(e4);
	       },[e4],"sat");
	       $b($hs_putMVarzh,[f4,X4,W4],function(Y4){
		$r([Y4,$$GHCziTuple_Z0T]);
	       },[]);
	      },[f4,e4]);
	     },[f4,e4,O4]);break;
	    }
	   },[f4,e4,O4]);
	  },[f4,p4,e4]);
	 },[f4,p4,e4,x4]);break;
	}
       },[f4,p4,e4,x4]);
      }
     },[f4,q4,p4,e4,x4]);
    },[f4,n4,q4,p4,e4],"a4");
    $M(v4,function(b5){
     switch(b5.g){
     case 1:
      w4.J(s4);break;
     case 2:
      var c5=$hs_readMutVarzh(o4,s4);
      var d5=c5[0],e5=c5[1];
      $M(e5,function(f5){
       var g5=f5.v[4],h5=f5.v[5];
       var i5=g5==h5?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(i5.g){
       case 1:
	$$GHCziIOziBufferedIO_flushWriteBuffer.C([l4,m4,f5,d5],function(j5){
	 var k5=j5[0],l5=j5[1];
	 var m5=$hs_writeMutVarzh(o4,l5,k5);
	 w4.J(m5);
	},[f4,o4,n4,q4,p4,e4,w4]);break;
       case 2:
	w4.J(d5);break;
       }
      },[f4,o4,n4,q4,p4,e4,w4,l4,m4,d5]);break;
     }
    },[f4,o4,n4,q4,p4,e4,w4,s4,l4,m4]);
   },[f4,o4,n4,q4,p4,e4,s4,l4,m4]);
  },[f4,i4,e4]);
 },[f4,e4]);
},"$wa1");
var $$GHCziIOziHandleziFD$b=$F(3,function(n5,o5,p5){
 $M(o5,function(q5){
  var r5=q5.v[0];
  $$GHCziIOziHandleziFD$a.J(n5,r5,p5);
 },[n5,p5]);
},"a");
var $$GHCziIOziHandleziFD$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<stderr>\x00");
},"lvl");
var $$GHCziIOziHandleziFD$d=$D(2,function(){
 $r([$$GHCziIOziHandleziFD$b]);
},"lvl1");
var $$GHCziIOziHandleziFD$e=$F(1,function(s5){
 var z5=$hs_noDuplicatezh(s5);
 $M($$GHCziIOziEncoding_getLocaleEncoding1,function(t5){
  var u5=t5.v[0];
  u5.C([z5],function(v5){
   var w5=v5[0],x5=v5[1];
   var y5=$d(2,[x5],"sat");
   $$GHCziIOziHandleziInternals_mkDuplexHandle5.J($$GHCziIOziFD_zdfIODeviceFD,$$GHCziIOziFD_zdfBufferedIOFD,$$GHCziIOziFD_zdfTypeableFDzuzdctypeOf,$$GHCziIOziFD_stderr,$$GHCziIOziHandleziFD$c,$$GHCziIOziHandleziTypes_WriteHandle,$$GHCziTypes_False,y5,$$GHCziIOziHandleziTypes_noNewlineTranslation,$$GHCziIOziHandleziFD$d,$$DataziMaybe_Nothing,w5);
  },[]);
 },[z5]);
},"lvl2");
var $$GHCziIOziHandleziFD$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<stdout>\x00");
},"lvl3");
var $$GHCziIOziHandleziFD$g=$F(1,function(A5){
 var H5=$hs_noDuplicatezh(A5);
 $M($$GHCziIOziEncoding_getLocaleEncoding1,function(B5){
  var C5=B5.v[0];
  C5.C([H5],function(D5){
   var E5=D5[0],F5=D5[1];
   var G5=$d(2,[F5],"sat");
   $$GHCziIOziHandleziInternals_mkDuplexHandle5.J($$GHCziIOziFD_zdfIODeviceFD,$$GHCziIOziFD_zdfBufferedIOFD,$$GHCziIOziFD_zdfTypeableFDzuzdctypeOf,$$GHCziIOziFD_stdout,$$GHCziIOziHandleziFD$f,$$GHCziIOziHandleziTypes_WriteHandle,$$GHCziTypes_True,G5,$$GHCziIOziHandleziTypes_noNewlineTranslation,$$GHCziIOziHandleziFD$d,$$DataziMaybe_Nothing,E5);
  },[]);
 },[H5]);
},"lvl4");

var $$GHCziIOziHandleziInternals_wantSeekableHandle5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("handle is closed\x00");
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
	var c1=Z==b1?$$GHCziTypes_True:$$GHCziTypes_False;
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
      var L3=J3==K3?$$GHCziTypes_True:$$GHCziTypes_False;
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
var $$GHCziIOziHandleziInternals_flushByteReadBuffer3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("cannot flush the read buffer: underlying device is not seekable\x00");
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
   var w7=u7==v7?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(w7.g){
   case 1:
    $$GHCziIOziDevice_isSeekable.C([j7,k7,n7],function(x7){
     var y7=x7[0],z7=x7[1];
     var A7=$f(1,function(B7){
      var C7=$t(function(){
       var E7=v7-u7|0;
       var D7= -E7;
       $$GHCziIntegerziType_smallInteger.J(D7);
      },[u7,v7],"sat");
      $$GHCziIOziDevice_seek.C([j7,k7,$$GHCziIOziDevice_RelativeSeek,C7,B7],function(F7){
       var G7=F7[0];
       var H7=$d(1,[q7,r7,s7,t7,0,0],"sat");
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
     var fb=$hs_newPinnedByteArrayzh(8192,db);
     var gb=fb[0],hb=fb[1];
     var ib=$d(1,[eb],"sat");
     var jb=$d(2,[hb,ib],"sat");
     var lb=$hs_byteArrayContentszh(hb);
     var kb=$d(1,[lb,jb,ia,2048,0,0],"sat");
     var mb=$hs_newMutVarzh(kb,gb);
     var nb=mb[0],ob=mb[1];
     Fa.J(nb,ob,$$GHCziPrim_coercionTokenzh,$$GHCziIOziHandleziTypes_NoBuffering);break;
    case 2:
     var pb=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Da);
     var qb=pb[0],rb=pb[1];
     var sb=$hs_newPinnedByteArrayzh(8192,qb);
     var tb=sb[0],ub=sb[1];
     var vb=$d(1,[rb],"sat");
     var wb=$d(2,[ub,vb],"sat");
     var yb=$hs_byteArrayContentszh(ub);
     var xb=$d(1,[yb,wb,ia,2048,0,0],"sat");
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
var $$GHCziIOziHandleziInternals_zdwa2=$f(5,function(Rj,Sj,Tj,Uj,Vj){
 $b($hs_takeMVarzh,[Uj,Vj],function(Wj){
  var Xj=Wj[0],Yj=Wj[1];
  var Zj=$f(2,function(ak,bk){
   $b($hs_putMVarzh,[Uj,Yj,bk],function(hk){
    $M(ak,function(ck){
     var dk=ck.v[0],ek=ck.v[1];
     $$GHCziException_zdp1Exception.C([dk],function(ok){
      $$DataziTypeable_cast.C([ok,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctypeOf,ek],function(fk){
       switch(fk.g){
       case 1:
	$$GHCziException_zdp1Exception.C([dk],function(mk){
	 $$DataziTypeable_cast.C([mk,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctypeOf,ek],function(gk){
	  switch(gk.g){
	  case 1:
	   $r($hs_raiseIOzh(ck,hk));break;
	  case 2:
	   var ik=$hs_myThreadIdzh(hk);
	   var jk=ik[0],kk=ik[1];
	   var lk=$hs_killThreadzh(kk,ck,jk);
	   $$GHCziIOziHandleziInternals_zdwa2.J(Rj,Sj,Tj,Uj,lk);break;
	  }
	 },[Uj,Tj,ck,hk,Rj,Sj]);
	},[Uj,Tj,ek,ck,hk,Rj,Sj]);break;
       case 2:
	var nk=fk.v[0];
	$$GHCziIOziHandleziInternals$w.J(Rj,Sj,nk,hk);break;
       }
      },[Uj,Tj,dk,ek,ck,hk,Rj,Sj]);
     },[Uj,Tj,dk,ek,ck,hk,Rj,Sj]);
    },[Uj,Tj,hk,Rj,Sj]);
   },[Uj,Tj,ak,Rj,Sj]);
  },[Uj,Yj,Tj,Rj,Sj],"sat");
  var pk=$t(function(){
   Tj.J(Yj);
  },[Yj,Tj],"sat");
  $k($hs_catchzh,[pk,Zj,Xj]);
 },[Uj,Tj,Rj,Sj]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantReadableHandle3=$f(5,function(qk,rk,sk,tk,uk){
 var vk=$hs_getMaskingStatezh(uk);
 var wk=vk[0],xk=vk[1];
 var yk=$f(1,function(zk){
  $M(sk,function(Ak){
   var Bk=Ak.v[0];
   $$GHCziIOziHandleziInternals_zdwa2.C([qk,rk,tk,Bk,zk],function(Ck){
    var Dk=Ck[0],Ek=Ck[1];
    $M(Ek,function(Fk){
     var Gk=Fk.v[0],Hk=Fk.v[1];
     $b($hs_putMVarzh,[Bk,Gk,Dk],function(Ik){
      $r([Ik,Hk]);
     },[Hk]);
    },[Bk,Dk]);
   },[Bk]);
  },[qk,rk,tk,zk]);
 },[sk,qk,rk,tk],"a7");
 $M(xk,function(Jk){
  switch(Jk){
  case 0:
   $k($hs_maskAsyncExceptionszh,[yk,wk]);break;
  default:
   yk.J(wk);
  }
 },[yk,wk]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle2=$f(5,function(hl,il,jl,kl,ll){
 var ml=$f(2,function(nl,ol){
  $M(nl,function(pl){
   var ql=pl.v[1],rl=pl.v[3],sl=pl.v[4],tl=pl.v[5],ul=pl.v[7],vl=pl.v[8],wl=pl.v[11];
   $M(sl,function(xl){
    switch(xl.g){
    case 1:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$z,ol],function(Cl){
      var Dl=Cl[0],El=Cl[1];
      var Fl=$d(1,[pl,El],"sat");
      $r([Dl,Fl]);
     },[pl]);break;
    case 2:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$A,ol],function(Gl){
      var Hl=Gl[0],Il=Gl[1];
      var Jl=$d(1,[pl,Il],"sat");
      $r([Hl,Jl]);
     },[pl]);break;
    case 3:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$B,ol],function(Kl){
      var Ll=Kl[0],Ml=Kl[1];
      var Nl=$d(1,[pl,Ml],"sat");
      $r([Ll,Nl]);
     },[pl]);break;
    case 6:
     var Ol=$hs_readMutVarzh(vl,ol);
     var Pl=Ol[0],Ql=Ol[1];
     $M(Ql,function(Rl){
      var Sl=Rl.v[2];
      $M(Sl,function(Tl){
       switch(Tl.g){
       case 1:
	var Ul=$hs_readMutVarzh(vl,Pl);
	var Vl=Ul[0],Wl=Ul[1];
	$M(Wl,function(Xl){
	 var Yl=Xl.v[2],Zl=Xl.v[4],am=Xl.v[5];
	 var bm=$f(1,function(cm){
	  $$GHCziIOziHandleziInternals_flushByteReadBuffer1.C([pl,cm],function(dm){
	   var em=dm[0];
	   var fm=$hs_readMutVarzh(vl,em);
	   var gm=fm[0],hm=fm[1];
	   var im=$t(function(){
	    $M(hm,function(jm){
	     var km=jm.v[0],lm=jm.v[1],mm=jm.v[3],nm=jm.v[4],om=jm.v[5];
	     $R(1,[km,lm,$$GHCziIOziBuffer_WriteBuffer,mm,nm,om],"Buffer");
	    },[]);
	   },[hm],"sat");
	   var Am=$hs_writeMutVarzh(vl,im,gm);
	   var pm=$hs_readMutVarzh(tl,Am);
	   var qm=pm[0],rm=pm[1];
	   $$GHCziIOziBufferedIO_emptyWriteBuffer.C([ql,rl,rm,qm],function(sm){
	    var tm=sm[0],um=sm[1];
	    var zm=$hs_writeMutVarzh(tl,um,tm);
	    kl.C([pl,zm],function(vm){
	     var wm=vm[0],xm=vm[1];
	     var ym=$d(1,[pl,xm],"sat");
	     $r([wm,ym]);
	    },[pl]);
	   },[pl,kl,tl]);
	  },[pl,kl,vl,tl,ql,rl]);
	 },[pl,kl,vl,tl,ql,rl],"$j");
	 $M(Yl,function(Bm){
	  switch(Bm.g){
	  case 1:
	   var Cm=Zl==am?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Cm.g){
	   case 1:
	    var Dm=$hs_readMutVarzh(ul,Vl);
	    var Em=Dm[0],Fm=Dm[1];
	    $M(Fm,function(Gm){
	     var Hm=Gm.v[0],Im=Gm.v[1];
	     var Jm=$hs_readMutVarzh(vl,Em);
	     var Km=Jm[0],Lm=Jm[1];
	     var Mm=$t(function(){
	      $M(Lm,function(Nm){
	       var Om=Nm.v[0],Pm=Nm.v[1],Qm=Nm.v[2],Rm=Nm.v[3];
	       $R(1,[Om,Pm,Qm,Rm,0,0],"Buffer");
	      },[]);
	     },[Lm],"sat");
	     var kn=$hs_writeMutVarzh(vl,Mm,Km);
	     $M(Lm,function(Sm){
	      var Tm=Sm.v[0],Um=Sm.v[1],Vm=Sm.v[2],Wm=Sm.v[4];
	      $M(Wm,function(Xm){
	       switch(Xm){
	       case 0:
		var zn=$hs_writeMutVarzh(tl,Im,kn);
		bm.J(zn);break;
	       default:
		$M(wl,function(Ym){
		 switch(Ym.g){
		 case 1:
		  var Zm=$t(function(){
		   $M(Im,function(an){
		    var bn=an.v[0],cn=an.v[1],dn=an.v[2],en=an.v[3],fn=an.v[4],gn=an.v[5];
		    var hn=fn+Xm|0;
		    $R(1,[bn,cn,dn,en,hn,gn],"Buffer");
		   },[Xm]);
		  },[Im,Xm],"sat");
		  var jn=$hs_writeMutVarzh(tl,Zm,kn);
		  bm.J(jn);break;
		 case 2:
		  var ln=Ym.v[0];
		  $M(ln,function(mn){
		   var nn=mn.v[0],on=mn.v[1],pn=mn.v[4];
		   pn.C([Hm,kn],function(qn){
		    var rn=qn[0];
		    var sn=$d(1,[Tm,Um,Vm,Xm,0,0],"sat");
		    $$GHCziIOziHandleziInternals_zdwa.C([nn,on,Im,sn,rn],function(tn){
		     var un=tn[0],vn=tn[1];
		     $M(vn,function(wn){
		      var xn=wn.v[0];
		      var yn=$hs_writeMutVarzh(tl,xn,un);
		      bm.J(yn);
		     },[pl,kl,vl,tl,ql,rl,bm,un]);
		    },[pl,kl,vl,tl,ql,rl,bm]);
		   },[pl,kl,vl,tl,ql,rl,bm,Im,Xm,nn,on,Tm,Um,Vm]);
		  },[pl,kl,vl,tl,ql,rl,bm,Im,Xm,kn,Hm,Tm,Um,Vm]);break;
		 }
		},[pl,kl,vl,tl,ql,rl,bm,Im,Xm,kn,Hm,Tm,Um,Vm]);
	       }
	      },[pl,kl,vl,tl,ql,rl,bm,wl,Im,kn,Hm,Tm,Um,Vm]);
	     },[pl,kl,vl,tl,ql,rl,bm,wl,Im,kn,Hm]);
	    },[pl,kl,vl,tl,ql,rl,bm,Em,wl]);break;
	   case 2:
	    bm.J(Vl);break;
	   }break;
	  case 2:
	   bm.J(Vl);break;
	  }
	 },[pl,kl,vl,tl,ql,rl,bm,Zl,am,ul,Vl,wl]);
	},[pl,kl,vl,tl,ql,rl,ul,Vl,wl]);break;
       case 2:
	kl.C([pl,Pl],function(An){
	 var Bn=An[0],Cn=An[1];
	 var Dn=$d(1,[pl,Cn],"sat");
	 $r([Bn,Dn]);
	},[pl]);break;
       }
      },[pl,kl,vl,Pl,tl,ql,rl,ul,wl]);
     },[pl,kl,vl,Pl,tl,ql,rl,ul,wl]);break;
    default:
     kl.C([pl,ol],function(yl){
      var zl=yl[0],Al=yl[1];
      var Bl=$d(1,[pl,Al],"sat");
      $r([zl,Bl]);
     },[pl]);
    }
   },[pl,ol,kl,vl,tl,ql,rl,ul,wl]);
  },[ol,kl]);
 },[kl],"sat");
 $$GHCziIOziHandleziInternals_wantReadableHandle3.J(hl,il,jl,ml,ll);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle1=$f(4,function(En,Fn,Gn,Hn){
 $M(Fn,function(In){
  switch(In.g){
  case 1:
   var Jn=In.v[1];
   var Kn=$d(1,[Jn],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(En,In,Kn,Gn,Hn);break;
  case 2:
   var Ln=In.v[2];
   var Mn=$d(1,[Ln],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(En,In,Mn,Gn,Hn);break;
  }
 },[En,Gn,Hn]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is not open for writing\x00");
},"lvl3");
var $$GHCziIOziHandleziInternals$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is finalized\x00");
},"lvl8");
var $$GHCziIOziHandleziInternals$q=$T(function(){
 $$GHCziCString_unpackCStringzh.J("codec_state\x00");
},"lvl10");
var $$GHCziIOziHandleziInternals$r=$T(function(){
 $$GHCziErr_error.J($$GHCziIOziHandleziInternals$q);
},"lvl11");
var $$GHCziIOziHandleziInternals$s=$D(3,function(){
 $r([$$DataziMaybe_Nothing]);
},"lvl12");
var $$GHCziIOziHandleziInternals$w=$F(4,function(av,bv,cv,dv){
 $$GHCziIOziHandleziInternals_augmentIOError.C([cv,av,bv],function(ev){
  $$GHCziIOziException_ioError.J(ev,dv);
 },[dv]);
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

var $$GHCziInt_zdfEqInt64zuzdczeze=$f(2,function(N9,O9){
 $M(N9,function(P9){
  var Q9=P9.v[0];
  $M(O9,function(R9){
   var S9=R9.v[0];
   $$GHCziIntWord64_eqInt64zh.J(Q9,S9);
  },[Q9]);
 },[O9]);
},[],"in `base:GHC.Int'");

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
 $r([2]);
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
  var P=$hs_mkWeakzh(N,O,0,M);
  var Q=P[0],R=P[1];
  var S=$f(1,function(T){
   var U=$hs_deRefWeakzh(R,T);
   var V=U[0],W=U[1],X=U[2];
   $M(W,function(Y){
    switch(Y){
    case 0:
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
   var $ff=stg_sig_install(2, -5,null);
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
  var $ff=shutdownHaskellAndExit(p1);
  var q1=[n1,$ff];
  var r1=q1[0];
  $r([r1,$$GHCziTuple_Z0T]);
 },[n1]);
},"a");
var $$GHCziTopHandler$c=$D(1,function(){
 $r([1]);
},"lvl");
var $$GHCziTopHandler$d=$D(1,function(){
 $r([0]);
},"lvl1");
var $$GHCziTopHandler$e=$D(1,function(){
 $r([2]);
},"lvl2");
var $$GHCziTopHandler$f=$F(3,function(y1,z1,A1){
 $M(z1,function(B1){
  var C1=B1.v[0],D1=B1.v[1];
  $b($hs_catchzh,[$$GHCziTopHandler_flushStdHandles5,$$GHCziTopHandler_flushStdHandles4,A1],function(E1){
   var F1=E1[0];
   $b($hs_catchzh,[$$GHCziTopHandler_flushStdHandles3,$$GHCziTopHandler_flushStdHandles2,F1],function(G1){
    var H1=G1[0];
    $$GHCziException_zdp1Exception.C([C1],function(J1){
     var I1=$f(1,function(K1){
      $$DataziTypeable_cast.C([J1,$$GHCziIOziException_zdfExceptionExitCodezuzdctypeOf,D1],function(L1){
       switch(L1.g){
       case 1:
	$$DataziTypeable_cast.C([J1,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctypeOf,D1],function(M1){
	 switch(M1.g){
	 case 1:
	  $M($$GHCziConcziSync_uncaughtExceptionHandler,function(N1){
	   var O1=N1.v[0];
	   var P1=$hs_readMutVarzh(O1,K1);
	   var Q1=P1[0],R1=P1[1];
	   R1.C([B1,Q1],function(S1){
	    var T1=S1[0];
	    y1.J($$GHCziTopHandler$c,T1);
	   },[y1]);
	  },[K1,B1,y1]);break;
	 case 2:
	  var U1=M1.v[0];
	  $M(U1,function(V1){
	   var W1=V1.v[0],X1=V1.v[1],Y1=V1.v[4];
	   $M(X1,function(Z1){
	    switch(Z1.g){
	    case 18:
	     $M(Y1,function(h2){
	      switch(h2.g){
	      case 1:
	       $M($$GHCziConcziSync_uncaughtExceptionHandler,function(i2){
		var j2=i2.v[0];
		var k2=$hs_readMutVarzh(j2,K1);
		var l2=k2[0],m2=k2[1];
		m2.C([B1,l2],function(n2){
		 var o2=n2[0];
		 y1.J($$GHCziTopHandler$c,o2);
		},[y1]);
	       },[K1,B1,y1]);break;
	      case 2:
	       var p2=h2.v[0];
	       $M(W1,function(q2){
		switch(q2.g){
		case 1:
		 $M($$GHCziConcziSync_uncaughtExceptionHandler,function(r2){
		  var s2=r2.v[0];
		  var t2=$hs_readMutVarzh(s2,K1);
		  var u2=t2[0],v2=t2[1];
		  v2.C([B1,u2],function(w2){
		   var x2=w2[0];
		   y1.J($$GHCziTopHandler$c,x2);
		  },[y1]);
		 },[K1,B1,y1]);break;
		case 2:
		 var y2=q2.v[0];
		 $M(p2,function(z2){
		  var A2=z2.v[0];
		  $M(A2,function(B2){
		   switch(B2){
		   case  -1:
		    $M($$GHCziConcziSync_uncaughtExceptionHandler,function(J2){
		     var K2=J2.v[0];
		     var L2=$hs_readMutVarzh(K2,K1);
		     var M2=L2[0],N2=L2[1];
		     N2.C([B1,M2],function(O2){
		      var P2=O2[0];
		      y1.J($$GHCziTopHandler$c,P2);
		     },[y1]);
		    },[K1,B1,y1]);break;
		   case 32:
		    $M(y2,function(Q2){
		     switch(Q2.g){
		     case 1:
		      var R2=Q2.v[1];
		      $M($$GHCziIOziHandleziFD_stdout,function(S2){
		       switch(S2.g){
		       case 1:
			var T2=S2.v[1];
			var U2=$hs_sameMVarzh(R2,T2);
			switch(U2.g){
			case 1:
			 $M($$GHCziConcziSync_uncaughtExceptionHandler,function(V2){
			  var W2=V2.v[0];
			  var X2=$hs_readMutVarzh(W2,K1);
			  var Y2=X2[0],Z2=X2[1];
			  Z2.C([B1,Y2],function(a3){
			   var b3=a3[0];
			   y1.J($$GHCziTopHandler$c,b3);
			  },[y1]);
			 },[K1,B1,y1]);break;
			case 2:
			 y1.J($$GHCziTopHandler$d,K1);break;
			}break;
		       case 2:
			$M($$GHCziConcziSync_uncaughtExceptionHandler,function(c3){
			 var d3=c3.v[0];
			 var e3=$hs_readMutVarzh(d3,K1);
			 var f3=e3[0],g3=e3[1];
			 g3.C([B1,f3],function(h3){
			  var i3=h3[0];
			  y1.J($$GHCziTopHandler$c,i3);
			 },[y1]);
			},[K1,B1,y1]);break;
		       }
		      },[K1,B1,y1,R2]);break;
		     case 2:
		      var j3=Q2.v[1];
		      $M($$GHCziIOziHandleziFD_stdout,function(k3){
		       switch(k3.g){
		       case 1:
			$M($$GHCziConcziSync_uncaughtExceptionHandler,function(l3){
			 var m3=l3.v[0];
			 var n3=$hs_readMutVarzh(m3,K1);
			 var o3=n3[0],p3=n3[1];
			 p3.C([B1,o3],function(q3){
			  var r3=q3[0];
			  y1.J($$GHCziTopHandler$c,r3);
			 },[y1]);
			},[K1,B1,y1]);break;
		       case 2:
			var s3=k3.v[1];
			var t3=$hs_sameMVarzh(j3,s3);
			switch(t3.g){
			case 1:
			 $M($$GHCziConcziSync_uncaughtExceptionHandler,function(u3){
			  var v3=u3.v[0];
			  var w3=$hs_readMutVarzh(v3,K1);
			  var x3=w3[0],y3=w3[1];
			  y3.C([B1,x3],function(z3){
			   var A3=z3[0];
			   y1.J($$GHCziTopHandler$c,A3);
			  },[y1]);
			 },[K1,B1,y1]);break;
			case 2:
			 y1.J($$GHCziTopHandler$d,K1);break;
			}break;
		       }
		      },[K1,B1,y1,j3]);break;
		     }
		    },[K1,B1,y1]);break;
		   default:
		    $M($$GHCziConcziSync_uncaughtExceptionHandler,function(C2){
		     var D2=C2.v[0];
		     var E2=$hs_readMutVarzh(D2,K1);
		     var F2=E2[0],G2=E2[1];
		     G2.C([B1,F2],function(H2){
		      var I2=H2[0];
		      y1.J($$GHCziTopHandler$c,I2);
		     },[y1]);
		    },[K1,B1,y1]);
		   }
		  },[K1,B1,y1,y2]);
		 },[K1,B1,y1,y2]);break;
		}
	       },[K1,B1,y1,p2]);break;
	      }
	     },[K1,B1,y1,W1]);break;
	    default:
	     $M($$GHCziConcziSync_uncaughtExceptionHandler,function(a2){
	      var b2=a2.v[0];
	      var c2=$hs_readMutVarzh(b2,K1);
	      var d2=c2[0],e2=c2[1];
	      e2.C([B1,d2],function(f2){
	       var g2=f2[0];
	       y1.J($$GHCziTopHandler$c,g2);
	      },[y1]);
	     },[K1,B1,y1]);
	    }
	   },[K1,B1,y1,Y1,W1]);
	  },[K1,B1,y1]);break;
	 }
	},[K1,B1,y1]);break;
       case 2:
	var B3=L1.v[0];
	$M(B3,function(C3){
	 switch(C3.g){
	 case 1:
	  y1.J($$GHCziTopHandler$d,K1);break;
	 case 2:
	  var D3=C3.v[0];
	  y1.J(D3,K1);break;
	 }
	},[K1,y1]);break;
       }
      },[J1,D1,K1,B1,y1]);
     },[J1,D1,B1,y1],"$wa");
     $$DataziTypeable_cast.C([J1,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctypeOf,D1],function(E3){
      switch(E3.g){
      case 1:
       I1.J(H1);break;
      case 2:
       var F3=E3.v[0];
       $M(F3,function(G3){
	switch(G3.g){
	case 1:
	 var $ff=stackOverflow();
	 var H3=[H1,$ff];
	 var I3=H3[0];
	 y1.J($$GHCziTopHandler$e,I3);break;
	case 4:
	 var $ff=shutdownHaskellAndSignal(2);
	 var J3=[H1,$ff];
	 var K3=J3[0];
	 $r([K3,$$GHCziTuple_Z0T]);break;
	default:
	 I1.J(H1);
	}
       },[J1,D1,B1,y1,I1,H1]);break;
      }
     },[J1,D1,B1,y1,I1,H1]);
    },[D1,B1,y1,H1]);
   },[C1,D1,B1,y1]);
  },[C1,D1,B1,y1]);
 },[A1,y1]);
},"a2");

var $$GHCziUnicode_toLower1=$f(1,function(H1){
 var I1=$d(1,[H1],"sat");
 $$GHCziBase_chr1.J(I1);
},[],"in `base:GHC.Unicode'");
var $$GHCziUnicode_zdwtoUpper=$f(1,function(J1){
 var P1=$hs_ordzh(J1);
 var $ff=u_towupper(P1);
 var K1=[$$GHCziPrim_realWorldzh,$ff];
 var L1=K1[1];
 var O1=L1>>>0;
 var M1=O1<=1114111?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(M1.g){
 case 1:
  $$GHCziUnicode_toLower1.J(L1);break;
 case 2:
  var N1=$hs_chrzh(L1);
  $R(1,[N1],"C#");break;
 }
},[],"at libraries/base/GHC/Unicode.hs:147:1");

var $$SystemziPosixziInternals_ioezuunknownfiletype2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("fdType\x00");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_ioezuunknownfiletype1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("unknown file type\x00");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_ioezuunknownfiletype=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_UnsupportedOperation,$$SystemziPosixziInternals_ioezuunknownfiletype2,$$SystemziPosixziInternals_ioezuunknownfiletype1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"at libraries/base/System/Posix/Internals.hs:155:1");
var $$SystemziPosixziInternals_fdGetMode3=$f(1,function(w5){
 $M(w5,function(x5){
  var y5=x5.v[0];
  $M(y5,function(z5){
   switch(z5){
   case  -1:
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
 $$GHCziCString_unpackCStringzh.J("fileSize\x00");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdFileSizze2=$D(1,function(){
 $r([ -1]);
},"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdFileSizze1=$f(2,function(e7,f7){
 var $ff=__hscore_sizeof_stat();
 var g7=[$$GHCziPrim_realWorldzh,$ff];
 var h7=g7[1];
 var i7=$hs_newPinnedByteArrayzh(h7,f7);
 var j7=i7[0],k7=i7[1];
 var l7=$hs_unsafeFreezzeByteArrayzh(k7,j7);
 var m7=l7[0],n7=l7[1];
 $M(e7,function(o7){
  var p7=o7.v[0];
  var r7=$hs_byteArrayContentszh(n7);
  var q7=$f(1,function(s7){
   var $ff=__hscore_fstat(p7,r7);
   var t7=[s7,$ff];
   var u7=t7[0],v7=t7[1];
   var w7=$d(1,[v7],"sat");
   $r([u7,w7]);
  },[r7,p7],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals_fdFileSizzezupred,$$SystemziPosixziInternals_fdFileSizzezuloc,q7,m7],function(x7){
   var y7=x7[0];
   var $ff=__hscore_st_mode(r7);
   var z7=[y7,$ff];
   var A7=z7[0],B7=z7[1];
   var L7=B7&65535;
   var $ff=__hscore_s_isreg(L7);
   var C7=[$$GHCziPrim_realWorldzh,$ff];
   var D7=C7[1];
   $M(D7,function(E7){
    switch(E7){
    case 0:
     var K7=$hs_touchzh(n7,A7);
     $r([K7,$$SystemziPosixziInternals_fdFileSizze2]);break;
    default:
     var $ff=__hscore_st_size(r7);
     var F7=[A7,$ff];
     var G7=F7[0],H7=F7[1];
     var J7=$hs_touchzh(n7,G7);
     var I7=$t(function(){
      $$GHCziIntegerziType_int64ToInteger.J(H7);
     },[H7],"sat");
     $r([J7,I7]);
    }
   },[n7,r7,A7]);
  },[n7,r7]);
 },[n7,m7]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho5=$f(3,function(M7,N7,O7){
 var $ff=__hscore_sizeof_termios();
 var P7=[$$GHCziPrim_realWorldzh,$ff];
 var Q7=P7[1];
 var R7=$hs_newPinnedByteArrayzh(Q7,O7);
 var S7=R7[0],T7=R7[1];
 var U7=$hs_unsafeFreezzeByteArrayzh(T7,S7);
 var V7=U7[0],W7=U7[1];
 $M(M7,function(X7){
  var Y7=X7.v[0];
  var a8=$hs_byteArrayContentszh(W7);
  var Z7=$f(1,function(b8){
   var $ff=tcgetattr(Y7,a8);
   var c8=[b8,$ff];
   var d8=c8[0],e8=c8[1];
   var f8=$d(1,[e8],"sat");
   $r([d8,f8]);
  },[a8,Y7],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals_fdGetMode3,$$SystemziPosixziInternals$z1,Z7,V7],function(g8){
   var h8=g8[0];
   var i8=$f(1,function(j8){
    var $ff=__hscore_sizeof_sigset_t();
    var k8=[$$GHCziPrim_realWorldzh,$ff];
    var l8=k8[1];
    var m8=$hs_newPinnedByteArrayzh(l8,j8);
    var n8=m8[0],o8=m8[1];
    var p8=$hs_unsafeFreezzeByteArrayzh(o8,n8);
    var q8=p8[0],r8=p8[1];
    var s8=$hs_newPinnedByteArrayzh(l8,q8);
    var t8=s8[0],u8=s8[1];
    var v8=$hs_unsafeFreezzeByteArrayzh(u8,t8);
    var w8=v8[0],x8=v8[1];
    var C8=$hs_byteArrayContentszh(r8);
    var $ff=__hscore_sigemptyset(C8);
    var y8=[w8,$ff];
    var z8=y8[0],A8=y8[1];
    var B8=$f(1,function(D8){
     var $ff=__hscore_sigttou();
     var E8=[$$GHCziPrim_realWorldzh,$ff];
     var F8=E8[1];
     var $ff=__hscore_sigaddset(C8,F8);
     var G8=[D8,$ff];
     var H8=G8[0],I8=G8[1];
     var J8=$f(1,function(K8){
      var $ff=__hscore_sig_block();
      var L8=[$$GHCziPrim_realWorldzh,$ff];
      var M8=L8[1];
      var R8=$hs_byteArrayContentszh(x8);
      var $ff=sigprocmask(M8,C8,R8);
      var N8=[K8,$ff];
      var O8=N8[0],P8=N8[1];
      var Q8=$f(1,function(S8){
       var T8=$d(1,[a8],"sat");
       N7.C([T8,S8],function(U8){
	var V8=U8[0],W8=U8[1];
	var $ff=__hscore_tcsanow();
	var X8=[$$GHCziPrim_realWorldzh,$ff];
	var Y8=X8[1];
	var Z8=$f(1,function(a9){
	 var $ff=tcsetattr(Y7,Y8,a8);
	 var b9=[a9,$ff];
	 var c9=b9[0],d9=b9[1];
	 var e9=$d(1,[d9],"sat");
	 $r([c9,e9]);
	},[a8,Y7,Y8],"sat");
	$$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals$D1,$$SystemziPosixziInternals$z1,Z8,V8],function(f9){
	 var g9=f9[0];
	 var $ff=__hscore_sig_setmask();
	 var h9=[$$GHCziPrim_realWorldzh,$ff];
	 var i9=h9[1];
	 var $ff=sigprocmask(i9,R8,null);
	 var j9=[g9,$ff];
	 var k9=j9[0],l9=j9[1];
	 $M(l9,function(m9){
	  switch(m9){
	  case  -1:
	   var $ff=__hscore_get_errno();
	   var p9=[k9,$ff];
	   var q9=p9[0],r9=p9[1];
	   var s9=$d(1,[r9],"sat");
	   $$ForeignziCziError_errnoToIOError.C([$$SystemziPosixziInternals$C1,s9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(t9){
	    $$GHCziIOziException_ioError.C([t9,q9],function(u9){
	     var v9=u9[0];
	     var x9=$hs_touchzh(x8,v9);
	     var w9=$hs_touchzh(r8,x9);
	     $r([w9,W8]);
	    },[r8,x8,W8]);
	   },[r8,x8,W8,q9]);break;
	  default:
	   var o9=$hs_touchzh(x8,k9);
	   var n9=$hs_touchzh(r8,o9);
	   $r([n9,W8]);
	  }
	 },[r8,x8,k9,W8]);
	},[r8,x8,R8,W8]);
       },[a8,Y7,r8,x8,R8]);
      },[a8,Y7,r8,x8,R8,N7],"$j2");
      $M(P8,function(y9){
       switch(y9){
       case  -1:
	var $ff=__hscore_get_errno();
	var z9=[O8,$ff];
	var A9=z9[0],B9=z9[1];
	var C9=$d(1,[B9],"sat");
	$$ForeignziCziError_errnoToIOError.C([$$SystemziPosixziInternals$C1,C9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(D9){
	 $$GHCziIOziException_ioError.C([D9,A9],function(E9){
	  var F9=E9[0];
	  Q8.J(F9);
	 },[a8,Y7,r8,x8,R8,N7,Q8]);
	},[a8,Y7,r8,x8,R8,N7,Q8,A9]);break;
       default:
	Q8.J(O8);
       }
      },[a8,Y7,r8,x8,R8,N7,Q8,O8]);
     },[a8,Y7,r8,C8,x8,N7],"$j1");
     $M(I8,function(G9){
      switch(G9){
      case  -1:
       var $ff=__hscore_get_errno();
       var H9=[H8,$ff];
       var I9=H9[0],J9=H9[1];
       var K9=$d(1,[J9],"sat");
       $$ForeignziCziError_errnoToIOError.C([$$SystemziPosixziInternals$B1,K9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(L9){
	$$GHCziIOziException_ioError.C([L9,I9],function(M9){
	 var N9=M9[0];
	 J8.J(N9);
	},[a8,Y7,r8,C8,x8,N7,J8]);
       },[a8,Y7,r8,C8,x8,N7,J8,I9]);break;
      default:
       J8.J(H8);
      }
     },[a8,Y7,r8,C8,x8,N7,J8,H8]);
    },[a8,Y7,r8,C8,x8,N7],"$j");
    $M(A8,function(O9){
     switch(O9){
     case  -1:
      var $ff=__hscore_get_errno();
      var P9=[z8,$ff];
      var Q9=P9[0],R9=P9[1];
      var S9=$d(1,[R9],"sat");
      $$ForeignziCziError_errnoToIOError.C([$$SystemziPosixziInternals$A1,S9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(T9){
       $$GHCziIOziException_ioError.C([T9,Q9],function(U9){
	var V9=U9[0];
	B8.J(V9);
       },[a8,Y7,r8,C8,x8,N7,B8]);
      },[a8,Y7,r8,C8,x8,N7,B8,Q9]);break;
     default:
      B8.J(z8);
     }
    },[a8,Y7,r8,C8,x8,N7,B8,z8]);
   },[a8,Y7,N7],"a78");
   var W9=Y7<=2?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(W9.g){
   case 1:
    i8.C([h8],function(X9){
     var Y9=X9[0],Z9=X9[1];
     var aa=$hs_touchzh(W7,Y9);
     $r([aa,Z9]);
    },[W7]);break;
   case 2:
    var $ff=__hscore_get_saved_termios(Y7);
    var ba=[h8,$ff];
    var ca=ba[0],da=ba[1];
    var ea=$hs_eqAddrzh(da,null);
    switch(ea.g){
    case 1:
     i8.C([ca],function(fa){
      var ga=fa[0],ha=fa[1];
      var ia=$hs_touchzh(W7,ga);
      $r([ia,ha]);
     },[W7]);break;
    case 2:
     var Ka=Q7>>>0;
     var $ff=malloc(Ka);
     var ja=[ca,$ff];
     var ka=ja[0],la=ja[1];
     var ma=$hs_eqAddrzh(la,null);
     switch(ma.g){
     case 1:
      var va=Q7>>>0;
      var $ff=memcpy(la,a8,va);
      var na=[ka,$ff];
      var oa=na[0];
      var $ff=__hscore_set_saved_termios(Y7,la);
      var pa=[oa,$ff];
      var qa=pa[0];
      i8.C([qa],function(ra){
       var sa=ra[0],ta=ra[1];
       var ua=$hs_touchzh(W7,sa);
       $r([ua,ta]);
      },[W7]);break;
     case 2:
      $$GHCziIOziException_ioError.C([$$ForeignziMarshalziAlloc_mallocBytes2,ka],function(wa){
       var xa=wa[0],ya=wa[1];
       $M(ya,function(za){
	var Aa=za.v[0];
	var Ja=Q7>>>0;
	var $ff=memcpy(Aa,a8,Ja);
	var Ba=[xa,$ff];
	var Ca=Ba[0];
	var $ff=__hscore_set_saved_termios(Y7,Aa);
	var Da=[Ca,$ff];
	var Ea=Da[0];
	i8.C([Ea],function(Fa){
	 var Ga=Fa[0],Ha=Fa[1];
	 var Ia=$hs_touchzh(W7,Ga);
	 $r([Ia,Ha]);
	},[W7]);
       },[Q7,W7,a8,Y7,i8,xa]);
      },[Q7,W7,a8,Y7,i8]);break;
     }break;
    }break;
   }
  },[Q7,W7,a8,Y7,N7]);
 },[Q7,W7,V7,N7]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setEcho2=$t(function(){
 var $ff=__hscore_echo();
 var La=[$$GHCziPrim_realWorldzh,$ff];
 var Ma=La[1];
 $$GHCziIntegerziType_smallInteger.C([Ma],function(Na){
  $$GHCziIntegerziType_integerToWord.C([Na],function(Pa){
   var Oa=Pa^4294967295;
   $R(1,[Oa],"W32#");
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho4=$t(function(){
 var $ff=__hscore_echo();
 var Qa=[$$GHCziPrim_realWorldzh,$ff];
 var Ra=Qa[1];
 $$GHCziIntegerziType_smallInteger.C([Ra],function(Sa){
  $$GHCziIntegerziType_integerToWord.C([Sa],function(Ta){
   $R(1,[Ta],"W32#");
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setEcho1=$f(3,function(Ua,Va,Wa){
 var Xa=$f(2,function(Ya,Za){
  $M(Ya,function(ab){
   var bb=ab.v[0];
   var $ff=__hscore_lflag(bb);
   var cb=[Za,$ff];
   var db=cb[0],eb=cb[1];
   $M(Va,function(fb){
    switch(fb.g){
    case 1:
     $M($$SystemziPosixziInternals_setEcho2,function(gb){
      var hb=gb.v[0];
      var kb=eb&hb;
      var $ff=__hscore_poke_lflag(bb,kb);
      var ib=[db,$ff];
      var jb=ib[0];
      $r([jb,$$GHCziTuple_Z0T]);
     },[bb,eb,db]);break;
    case 2:
     $M($$SystemziPosixziInternals_getEcho4,function(lb){
      var mb=lb.v[0];
      var pb=eb|mb;
      var $ff=__hscore_poke_lflag(bb,pb);
      var nb=[db,$ff];
      var ob=nb[0];
      $r([ob,$$GHCziTuple_Z0T]);
     },[bb,eb,db]);break;
    }
   },[bb,eb,db]);
  },[Za,Va]);
 },[Va],"sat");
 $$SystemziPosixziInternals_getEcho5.J(Ua,Xa,Wa);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_getEcho2=$f(2,function(qb,rb){
 $M(qb,function(sb){
  var tb=sb.v[0];
  var $ff=__hscore_lflag(tb);
  var ub=[rb,$ff];
  var vb=ub[0],wb=ub[1];
  var xb=$t(function(){
   $M($$SystemziPosixziInternals_getEcho4,function(yb){
    var zb=yb.v[0];
    var Bb=wb&zb;
    var Ab=Bb==0?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Ab.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[wb]);
  },[wb],"sat");
  $r([vb,xb]);
 },[rb]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked5=$t(function(){
 var $ff=__hscore_icanon();
 var Eb=[$$GHCziPrim_realWorldzh,$ff];
 var Fb=Eb[1];
 $$GHCziIntegerziType_smallInteger.C([Fb],function(Gb){
  $$GHCziIntegerziType_integerToWord.C([Gb],function(Ib){
   var Hb=Ib^4294967295;
   $R(1,[Hb],"W32#");
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked2=$t(function(){
 var $ff=__hscore_icanon();
 var Jb=[$$GHCziPrim_realWorldzh,$ff];
 var Kb=Jb[1];
 $$GHCziIntegerziType_smallInteger.C([Kb],function(Lb){
  $$GHCziIntegerziType_integerToWord.C([Lb],function(Mb){
   $R(1,[Mb],"W32#");
  },[]);
 },[]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked4=$t(function(){
 var $ff=__hscore_vmin();
 var Nb=[$$GHCziPrim_realWorldzh,$ff];
 var Ob=Nb[1];
 $R(1,[Ob],"I#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked3=$t(function(){
 var $ff=__hscore_vtime();
 var Pb=[$$GHCziPrim_realWorldzh,$ff];
 var Qb=Pb[1];
 $R(1,[Qb],"I#");
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_setCooked1=$f(3,function(Rb,Sb,Tb){
 var Ub=$f(2,function(Vb,Wb){
  $M(Vb,function(Xb){
   var Yb=Xb.v[0];
   var $ff=__hscore_lflag(Yb);
   var Zb=[Wb,$ff];
   var ac=Zb[0],bc=Zb[1];
   $M(Sb,function(cc){
    switch(cc.g){
    case 1:
     $M($$SystemziPosixziInternals_setCooked5,function(dc){
      var ec=dc.v[0];
      var sc=bc&ec;
      var $ff=__hscore_poke_lflag(Yb,sc);
      var fc=[ac,$ff];
      var gc=fc[0];
      var $ff=__hscore_ptr_c_cc(Yb);
      var hc=[gc,$ff];
      var ic=hc[0],jc=hc[1];
      $M($$SystemziPosixziInternals_setCooked4,function(kc){
       var lc=kc.v[0];
       var rc=$hs_plusAddrzh(jc,lc);
       var qc=$hs_writeWord8OffAddrzh(rc,0,1,ic);
       $M($$SystemziPosixziInternals_setCooked3,function(mc){
	var nc=mc.v[0];
	var pc=$hs_plusAddrzh(jc,nc);
	var oc=$hs_writeWord8OffAddrzh(pc,0,0,qc);
	$r([oc,$$GHCziTuple_Z0T]);
       },[jc,qc]);
      },[jc,ic]);
     },[Yb,bc,ac]);break;
    case 2:
     $M($$SystemziPosixziInternals_setCooked2,function(tc){
      var uc=tc.v[0];
      var xc=bc|uc;
      var $ff=__hscore_poke_lflag(Yb,xc);
      var vc=[ac,$ff];
      var wc=vc[0];
      $r([wc,$$GHCziTuple_Z0T]);
     },[Yb,bc,ac]);break;
    }
   },[Yb,bc,ac]);
  },[Wb,Sb]);
 },[Sb],"sat");
 $$SystemziPosixziInternals_getEcho5.J(Rb,Ub,Tb);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fileType2=$f(1,function(Ec){
 $$GHCziIOziException_ioError.J($$SystemziPosixziInternals_ioezuunknownfiletype,Ec);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals_fdStat1=$f(2,function(Ud,Vd){
 var $ff=__hscore_sizeof_stat();
 var Wd=[$$GHCziPrim_realWorldzh,$ff];
 var Xd=Wd[1];
 var Yd=$hs_newPinnedByteArrayzh(Xd,Vd);
 var Zd=Yd[0],ae=Yd[1];
 var be=$hs_unsafeFreezzeByteArrayzh(ae,Zd);
 var ce=be[0],de=be[1];
 $M(Ud,function(ee){
  var fe=ee.v[0];
  var he=$hs_byteArrayContentszh(de);
  var ge=$f(1,function(ie){
   var $ff=__hscore_fstat(fe,he);
   var je=[ie,$ff];
   var ke=je[0],le=je[1];
   var me=$d(1,[le],"sat");
   $r([ke,me]);
  },[he,fe],"sat");
  $$ForeignziCziError_throwErrnoIfMinus1Retry2.C([$$SystemziPosixziInternals$E1,$$SystemziPosixziInternals_ioezuunknownfiletype2,ge,ce],function(ne){
   var oe=ne[0];
   var $ff=__hscore_st_mode(he);
   var pe=[oe,$ff];
   var qe=pe[0],re=pe[1];
   var Tf=re&65535;
   var $ff=__hscore_s_isdir(Tf);
   var se=[$$GHCziPrim_realWorldzh,$ff];
   var te=se[1];
   $M(te,function(ue){
    switch(ue){
    case 0:
     var $ff=__hscore_s_isfifo(Tf);
     var Fe=[$$GHCziPrim_realWorldzh,$ff];
     var Ge=Fe[1];
     $M(Ge,function(He){
      switch(He){
      case 0:
       var $ff=__hscore_s_issock(Tf);
       var Se=[$$GHCziPrim_realWorldzh,$ff];
       var Te=Se[1];
       $M(Te,function(Ue){
	switch(Ue){
	case 0:
	 var $ff=__hscore_s_ischr(Tf);
	 var ff=[$$GHCziPrim_realWorldzh,$ff];
	 var gf=ff[1];
	 $M(gf,function(hf){
	  switch(hf){
	  case 0:
	   var $ff=__hscore_s_isreg(Tf);
	   var tf=[$$GHCziPrim_realWorldzh,$ff];
	   var uf=tf[1];
	   $M(uf,function(vf){
	    switch(vf){
	    case 0:
	     var $ff=__hscore_s_isblk(Tf);
	     var Gf=[$$GHCziPrim_realWorldzh,$ff];
	     var Hf=Gf[1];
	     $M(Hf,function(If){
	      switch(If){
	      case 0:
	       $$SystemziPosixziInternals_fileType2.J(qe);break;
	      default:
	       var $ff=__hscore_st_dev(he);
	       var Jf=[qe,$ff];
	       var Kf=Jf[0],Lf=Jf[1];
	       var $ff=__hscore_st_ino(he);
	       var Mf=[Kf,$ff];
	       var Nf=Mf[0],Of=Mf[1];
	       var Sf=$hs_touchzh(de,Nf);
	       var Pf=$d(1,[Of],"sat");
	       var Qf=$d(1,[Lf],"sat");
	       var Rf=$d(1,[$$GHCziIOziDevice_RawDevice,Qf,Pf],"sat");
	       $r([Sf,Rf]);
	      }
	     },[de,he,qe]);break;
	    default:
	     var $ff=__hscore_st_dev(he);
	     var wf=[qe,$ff];
	     var xf=wf[0],yf=wf[1];
	     var $ff=__hscore_st_ino(he);
	     var zf=[xf,$ff];
	     var Af=zf[0],Bf=zf[1];
	     var Ff=$hs_touchzh(de,Af);
	     var Cf=$d(1,[Bf],"sat");
	     var Df=$d(1,[yf],"sat");
	     var Ef=$d(1,[$$GHCziIOziDevice_RegularFile,Df,Cf],"sat");
	     $r([Ff,Ef]);
	    }
	   },[de,he,Tf,qe]);break;
	  default:
	   var $ff=__hscore_st_dev(he);
	   var jf=[qe,$ff];
	   var kf=jf[0],lf=jf[1];
	   var $ff=__hscore_st_ino(he);
	   var mf=[kf,$ff];
	   var nf=mf[0],of=mf[1];
	   var sf=$hs_touchzh(de,nf);
	   var pf=$d(1,[of],"sat");
	   var qf=$d(1,[lf],"sat");
	   var rf=$d(1,[$$GHCziIOziDevice_Stream,qf,pf],"sat");
	   $r([sf,rf]);
	  }
	 },[de,he,Tf,qe]);break;
	default:
	 var $ff=__hscore_st_dev(he);
	 var Ve=[qe,$ff];
	 var We=Ve[0],Xe=Ve[1];
	 var $ff=__hscore_st_ino(he);
	 var Ye=[We,$ff];
	 var Ze=Ye[0],af=Ye[1];
	 var ef=$hs_touchzh(de,Ze);
	 var bf=$d(1,[af],"sat");
	 var cf=$d(1,[Xe],"sat");
	 var df=$d(1,[$$GHCziIOziDevice_Stream,cf,bf],"sat");
	 $r([ef,df]);
	}
       },[de,he,Tf,qe]);break;
      default:
       var $ff=__hscore_st_dev(he);
       var Ie=[qe,$ff];
       var Je=Ie[0],Ke=Ie[1];
       var $ff=__hscore_st_ino(he);
       var Le=[Je,$ff];
       var Me=Le[0],Ne=Le[1];
       var Re=$hs_touchzh(de,Me);
       var Oe=$d(1,[Ne],"sat");
       var Pe=$d(1,[Ke],"sat");
       var Qe=$d(1,[$$GHCziIOziDevice_Stream,Pe,Oe],"sat");
       $r([Re,Qe]);
      }
     },[de,he,Tf,qe]);break;
    default:
     var $ff=__hscore_st_dev(he);
     var ve=[qe,$ff];
     var we=ve[0],xe=ve[1];
     var $ff=__hscore_st_ino(he);
     var ye=[we,$ff];
     var ze=ye[0],Ae=ye[1];
     var Ee=$hs_touchzh(de,ze);
     var Be=$d(1,[Ae],"sat");
     var Ce=$d(1,[xe],"sat");
     var De=$d(1,[$$GHCziIOziDevice_Directory,Ce,Be],"sat");
     $r([Ee,De]);
    }
   },[de,he,Tf,qe]);
  },[de,he]);
 },[de,ce]);
},[],"in `base:System.Posix.Internals'");
var $$SystemziPosixziInternals$z1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("tcSetAttr\x00");
},"lvl1");
var $$SystemziPosixziInternals$A1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigemptyset\x00");
},"loc");
var $$SystemziPosixziInternals$B1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigaddset\x00");
},"loc1");
var $$SystemziPosixziInternals$C1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("sigprocmask\x00");
},"loc2");
var $$SystemziPosixziInternals$D1=$F(1,function(b){
 $$SystemziPosixziInternals_fdGetMode3.J(b);
},"pred");
var $$SystemziPosixziInternals$E1=$F(1,function(b){
 $$SystemziPosixziInternals_fdGetMode3.J(b);
},"pred1");

var $$GHCziIntWord64_eqInt64zh=$f(2,function(E,F){
 var $ff=hs_eqInt64(E,F);
 var G=[$$GHCziPrim_realWorldzh,$ff];
 var H=G[1];
 $M(H,function(I){
  switch(I){
  case 0:
   $R(1,[],"False");break;
  default:
   $R(2,[],"True");
  }
 },[]);
},[],"at libraries/ghc-prim/GHC/IntWord64.hs:38:46");
var $$GHCziIntWord64_neInt64zh=$f(2,function(J,K){
 var $ff=hs_neInt64(J,K);
 var L=[$$GHCziPrim_realWorldzh,$ff];
 var M=L[1];
 $M(M,function(N){
  switch(N){
  case 0:
   $R(1,[],"False");break;
  default:
   $R(2,[],"True");
  }
 },[]);
},[],"at libraries/ghc-prim/GHC/IntWord64.hs:39:46");

var $$Main_main2=$f(1,function(A6){
 $$GHCziTopHandler_runMainIO1.J($$Main_main1,A6);
},[],"in `main:Main'");

//@ sourceURL=hs9.js
