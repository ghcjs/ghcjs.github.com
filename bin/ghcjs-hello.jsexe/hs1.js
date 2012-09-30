//$$Main_lazzyLoadzufreecell

var $$SystemziRandom_zdfRandomGenStdGen2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `random-1.0.1.1:System.Random'");
var $$SystemziRandom_zdfRandomBool3=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `random-1.0.1.1:System.Random'");
var $$SystemziRandom_getStdRandom3=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `random-1.0.1.1:System.Random'");
var $$SystemziRandom_zdfRandomGenStdGen1=$D(1,function(){
 $r([goog.math.Long.fromBits(2147483398,0)]);
},"in `random-1.0.1.1:System.Random'");
var $$SystemziRandom_zdwmkStdGen32=$f(1,function(C2){
 var D2=$t(function(){
  $M(C2,function(E2){
   var F2=E2.v[0];
   var O2=$hs_int2Wordzh(F2);
   var N2=O2.and(goog.math.Long.fromBits(2147483647,0));
   var H2=$hs_word2Intzh(N2);
   var G2=$t(function(){
    $$GHCziBase_modIntzh.C([H2,goog.math.Long.fromBits(2147483562,0)],function(J2){
     var I2=$hs_narrow32Intzh(J2);
     $R(1,[I2],"I32#");
    },[]);
   },[H2],"sat");
   var K2=$t(function(){
    $$GHCziBase_divIntzh.C([H2,goog.math.Long.fromBits(2147483562,0)],function(M2){
     var L2=$hs_narrow32Intzh(M2);
     $R(1,[L2],"I32#");
    },[]);
   },[H2],"sat");
   $R(1,[K2,G2],"(,)");
  },[]);
 },[C2],"ds");
 var P2=$t(function(){
  $M(D2,function(Q2){
   var R2=Q2.v[0];
   $M(R2,function(S2){
    var T2=S2.v[0];
    $$GHCziBase_modIntzh.C([T2,goog.math.Long.fromBits(2147483398,0)],function(X2){
     var W2=$hs_narrow32Intzh(X2);
     var V2=W2.add(goog.math.Long.fromBits(1,0));
     var U2=$hs_narrow32Intzh(V2);
     $R(1,[U2],"I32#");
    },[]);
   },[]);
  },[]);
 },[D2],"sat");
 var Y2=$t(function(){
  $M(D2,function(Z2){
   var a3=Z2.v[1];
   $M(a3,function(b3){
    var c3=b3.v[0];
    var e3=c3.add(goog.math.Long.fromBits(1,0));
    var d3=$hs_narrow32Intzh(e3);
    $R(1,[d3],"I32#");
   },[]);
  },[]);
 },[D2],"sat");
 $r([Y2,P2]);
},[],"at System/Random.hs:239:1");
var $$SystemziRandom_getStdRandom4=$D(1,function(){
 $r([goog.math.Long.fromBits(12345,0)]);
},"in `random-1.0.1.1:System.Random'");
var $$SystemziRandom_getStdRandom2=$f(1,function(j3){
 var O3=$hs_noDuplicatezh(j3);
 $$SystemziCPUTime_getCPUTime1.C([O3],function(k3){
  var l3=k3[0],m3=k3[1];
  $$DataziTimeziClockziPOSIX_getPOSIXTime1.C([l3],function(n3){
   var o3=n3[0],p3=n3[1];
   $$DataziTimeziClockziPOSIX_zdwposixSecondsToUTCTime.C([p3],function(q3){
    var r3=q3[1];
    $$GHCziReal_zdwzdczs.C([r3,$$GHCziReal_zdfEnumRatio2,$$DataziFixed_zdfHasResolutionE7,$$GHCziReal_zdfEnumRatio2],function(s3){
     var t3=s3[0],u3=s3[1];
     $$GHCziIntegerziType_eqInteger.C([u3,$$GHCziReal_even1],function(v3){
      switch(v3.g){
      case 1:
       $$GHCziIntegerziType_quotRemInteger.C([t3,u3],function(w3){
	var x3=w3[0],y3=w3[1];
	var z3=$t(function(){
	 var A3=$t(function(){
	  $$GHCziIntegerziType_timesInteger.C([x3,$$SystemziRandom_getStdRandom4],function(B3){
	   $$GHCziIntegerziType_plusInteger.C([B3,y3],function(C3){
	    $$GHCziIntegerziType_plusInteger.C([C3,m3],function(D3){
	     $$GHCziIntegerziType_plusInteger.C([D3,$$SystemziRandom_getStdRandom3],function(E3){
	      $$GHCziIntegerziType_integerToInt.C([E3],function(G3){
	       var F3=$hs_narrow32Intzh(G3);
	       $R(1,[F3],"I32#");
	      },[]);
	     },[]);
	    },[]);
	   },[m3]);
	  },[y3,m3]);
	 },[x3,y3,m3],"sat");
	 $$SystemziRandom_zdwmkStdGen32.C([A3],function(H3){
	  var I3=H3[0],J3=H3[1];
	  $R(1,[I3,J3],"StdGen");
	 },[]);
	},[x3,y3,m3],"sat");
	var K3=$hs_newMutVarzh(z3,o3);
	var L3=K3[0],M3=K3[1];
	var N3=$d(1,[M3],"sat");
	$r([L3,N3]);
       },[m3,o3]);break;
      case 2:
       $A($$GHCziErr_divZZeroError);break;
      }
     },[u3,t3,m3,o3]);
    },[m3,o3]);
   },[m3,o3]);
  },[m3]);
 },[]);
},[],"in `random-1.0.1.1:System.Random'");
var $$SystemziRandom_theStdGen=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$SystemziRandom_getStdRandom2);
},[],"at System/Random.hs:524:1");
var $$SystemziRandom_zdwzdcnext=$f(2,function(b4,c4){
 var d4=$t(function(){
  $M(c4,function(e4){
   var f4=e4.v[0];
   var u4=$hs_quotIntzh(f4,goog.math.Long.fromBits(52774,0));
   var s4=$hs_narrow32Intzh(u4);
   var t4=s4.multiply(goog.math.Long.fromBits(3791,0));
   var m4=$hs_narrow32Intzh(t4);
   var r4=s4.multiply(goog.math.Long.fromBits(52774,0));
   var q4=$hs_narrow32Intzh(r4);
   var p4=f4.subtract(q4);
   var o4=$hs_narrow32Intzh(p4);
   var n4=goog.math.Long.fromBits(40692,0).multiply(o4);
   var l4=$hs_narrow32Intzh(n4);
   var k4=l4.subtract(m4);
   var h4=$hs_narrow32Intzh(k4);
   var g4=h4.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(g4.g){
   case 1:
    $R(1,[h4],"I32#");break;
   case 2:
    var j4=h4.add(goog.math.Long.fromBits(2147483399,0));
    var i4=$hs_narrow32Intzh(j4);
    $R(1,[i4],"I32#");break;
   }
  },[]);
 },[c4],"s2''");
 var v4=$t(function(){
  $M(b4,function(w4){
   var x4=w4.v[0];
   var M4=$hs_quotIntzh(x4,goog.math.Long.fromBits(53668,0));
   var K4=$hs_narrow32Intzh(M4);
   var L4=K4.multiply(goog.math.Long.fromBits(12211,0));
   var E4=$hs_narrow32Intzh(L4);
   var J4=K4.multiply(goog.math.Long.fromBits(53668,0));
   var I4=$hs_narrow32Intzh(J4);
   var H4=x4.subtract(I4);
   var G4=$hs_narrow32Intzh(H4);
   var F4=goog.math.Long.fromBits(40014,0).multiply(G4);
   var D4=$hs_narrow32Intzh(F4);
   var C4=D4.subtract(E4);
   var z4=$hs_narrow32Intzh(C4);
   var y4=z4.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(y4.g){
   case 1:
    $R(1,[z4],"I32#");break;
   case 2:
    var B4=z4.add(goog.math.Long.fromBits(2147483563,0));
    var A4=$hs_narrow32Intzh(B4);
    $R(1,[A4],"I32#");break;
   }
  },[]);
 },[b4],"s1''");
 var N4=$d(1,[v4,d4],"sat");
 var O4=$t(function(){
  $M(v4,function(P4){
   var Q4=P4.v[0];
   $M(d4,function(R4){
    var S4=R4.v[0];
    var X4=Q4.subtract(S4);
    var U4=$hs_narrow32Intzh(X4);
    var T4=U4.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(T4.g){
    case 1:
     $R(1,[U4],"I#");break;
    case 2:
     var W4=U4.add(goog.math.Long.fromBits(2147483562,0));
     var V4=$hs_narrow32Intzh(W4);
     $R(1,[V4],"I#");break;
    }
   },[Q4]);
  },[d4]);
 },[d4,v4],"sat");
 $r([O4,N4]);
},[],"at System/Random.hs:128:4");
var $$SystemziRandom_zdwzdcsplit=$f(2,function(f5,g5){
 var h5=$t(function(){
  $$SystemziRandom_zdwzdcnext.C([f5,g5],function(i5){
   var j5=i5[1];
   $A(j5);
  },[]);
 },[f5,g5],"ds");
 var k5=$t(function(){
  $M(g5,function(l5){
   var m5=l5.v[0];
   $M(m5,function(n5){
    switch(n5.toString()){
    case "1":
     $A($$SystemziRandom_zdfRandomGenStdGen1);break;
    default:
     var p5=n5.subtract(goog.math.Long.fromBits(1,0));
     var o5=$hs_narrow32Intzh(p5);
     $R(1,[o5],"I32#");
    }
   },[]);
  },[]);
 },[g5],"sat");
 var q5=$t(function(){
  $M(h5,function(r5){
   var s5=r5.v[0];
   $A(s5);
  },[]);
 },[h5],"sat");
 var t5=$d(1,[q5,k5],"sat");
 var u5=$t(function(){
  $M(h5,function(v5){
   var w5=v5.v[1];
   $A(w5);
  },[]);
 },[h5],"sat");
 var x5=$t(function(){
  $M(f5,function(y5){
   var z5=y5.v[0];
   $M(z5,function(A5){
    switch(A5.toString()){
    case "2147483562":
     $A($$SystemziRandom_zdfRandomGenStdGen2);break;
    default:
     var C5=A5.add(goog.math.Long.fromBits(1,0));
     var B5=$hs_narrow32Intzh(C5);
     $R(1,[B5],"I32#");
    }
   },[]);
  },[]);
 },[f5],"sat");
 var D5=$d(1,[x5,u5],"sat");
 $r([D5,t5]);
},[],"at System/Random.hs:163:4");
var $$SystemziRandom_zdfRandomGenStdGenzuzdcsplit=$f(1,function(E5){
 $M(E5,function(F5){
  var G5=F5.v[0],H5=F5.v[1];
  $$SystemziRandom_zdwzdcsplit.C([G5,H5],function(I5){
   var J5=I5[0],K5=I5[1];
   $R(1,[J5,K5],"(,)");
  },[]);
 },[]);
},[],"at System/Random.hs:163:4");
var $$SystemziRandom_zdwzdsrandomIvalInteger=$f(3,function(tj,uj,vj){
 $$GHCziIntegerziType_gtInteger.C([tj,uj],function(wj){
  switch(wj.g){
  case 1:
   $$GHCziIntegerziType_minusInteger.C([uj,tj],function(xj){
    $$GHCziIntegerziType_plusInteger.C([xj,$$SystemziRandom_zdfRandomBool3],function(yj){
     $$SystemziRandom$A.C([$$SystemziRandom$z,yj],function(zj){
      $$SystemziRandom$E.C([zj,$$SystemziRandom_zdfRandomBool3,vj],function(Aj){
       var Bj=Aj[0],Cj=Aj[1];
       var Dj=$t(function(){
	$$GHCziIntegerziType_eqInteger.C([yj,$$GHCziReal_even1],function(Ej){
	 switch(Ej.g){
	 case 1:
	  $$GHCziIntegerziType_divModInteger.C([Bj,yj],function(Fj){
	   var Gj=Fj[1];
	   $$GHCziIntegerziType_plusInteger.C([tj,Gj],function(Hj){
	    $$GHCziIntegerziType_integerToInt.C([Hj],function(Ij){
	     $R(1,[Ij],"I#");
	    },[]);
	   },[]);
	  },[tj]);break;
	 case 2:
	  $A($$GHCziErr_divZZeroError);break;
	 }
	},[tj,yj,Bj]);
       },[tj,yj,Bj],"sat");
       $r([Dj,Cj]);
      },[tj,yj]);
     },[tj,yj,vj]);
    },[tj,vj]);
   },[tj,vj]);break;
  case 2:
   $$SystemziRandom_zdwzdsrandomIvalInteger.J(uj,tj,vj);break;
  }
 },[tj,uj,vj]);
},[],"at System/Random.hs:425:1");
var $$SystemziRandom$z=$D(1,function(){
 $r([goog.math.Long.fromBits(2147483561,0)]);
},"at System/Random.hs:431:8");
var $$SystemziRandom$A=$F(2,function(b1K,c1K){
 $$GHCziIntegerziType_ltInteger.C([c1K,b1K],function(d1K){
  switch(d1K.g){
  case 1:
   $$GHCziIntegerziType_eqInteger.C([b1K,$$GHCziReal_even1],function(e1K){
    switch(e1K.g){
    case 1:
     $$GHCziIntegerziType_divModInteger.C([c1K,b1K],function(f1K){
      var g1K=f1K[0];
      $$SystemziRandom$A.C([b1K,g1K],function(h1K){
       $$GHCziIntegerziType_plusInteger.J($$SystemziRandom_zdfRandomBool3,h1K);
      },[]);
     },[b1K]);break;
    case 2:
     $A($$GHCziErr_divZZeroError);break;
    }
   },[c1K,b1K]);break;
  case 2:
   $A($$SystemziRandom_zdfRandomBool3);break;
  }
 },[c1K,b1K]);
},"at System/Random.hs:469:1");
var $$SystemziRandom$E=$F(3,function(l1K,m1K,n1K){
 $$GHCziIntegerziType_eqInteger.C([l1K,$$SystemziRandom_getStdRandom3],function(o1K){
  switch(o1K.g){
  case 1:
   var p1K=$t(function(){
    $M(n1K,function(q1K){
     var r1K=q1K.v[0],s1K=q1K.v[1];
     $$SystemziRandom_zdwzdcnext.C([r1K,s1K],function(t1K){
      var u1K=t1K[0],v1K=t1K[1];
      $R(1,[u1K,v1K],"(,)");
     },[]);
    },[]);
   },[n1K],"ds");
   var w1K=$t(function(){
    $M(p1K,function(x1K){
     var y1K=x1K.v[1];
     $A(y1K);
    },[]);
   },[p1K],"sat");
   var z1K=$t(function(){
    $M(p1K,function(A1K){
     var B1K=A1K.v[0];
     $M(B1K,function(C1K){
      var D1K=C1K.v[0];
      $$GHCziIntegerziType_timesInteger.C([m1K,$$SystemziRandom$z],function(E1K){
       $$GHCziIntegerziType_smallInteger.C([D1K],function(F1K){
	$$GHCziIntegerziType_plusInteger.J(F1K,E1K);
       },[E1K]);
      },[D1K]);
     },[m1K]);
    },[m1K]);
   },[p1K,m1K],"sat");
   $$GHCziIntegerziType_minusInteger.C([l1K,$$SystemziRandom_zdfRandomBool3],function(G1K){
    $$SystemziRandom$E.J(G1K,z1K,w1K);
   },[w1K,z1K]);break;
  case 2:
   $r([m1K,n1K]);break;
  }
 },[l1K,n1K,m1K]);
},"at System/Random.hs:435:8");
var $$FRPziSodiumziPlain_zdwgo2=$f(2,function(f,g){
 $M(g,function(h){
  switch(h.g){
  case 1:
   $R(1,[],"Tip");break;
  case 2:
   var i=h.v[1],j=h.v[2],k=h.v[3],l=h.v[4];
   $M(i,function(m){
    var n=m.v[0];
    var o=f.lessThan(n)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(o.g){
    case 1:
     var p=f.equals(n)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(p.g){
     case 1:
      $$FRPziSodiumziPlain_zdwgo2.C([f,l],function(q){
       $$DataziMap_balanceL.J(m,j,k,q);
      },[m,j,k]);break;
     case 2:
      $$DataziMap_glue.J(k,l);break;
     }break;
    case 2:
     $$FRPziSodiumziPlain_zdwgo2.C([f,k],function(r){
      $$DataziMap_balanceR.J(m,j,r,l);
     },[m,j,l]);break;
    }
   },[f,j,k,l]);break;
  }
 },[f]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdsinsertzugo2=$f(3,function(y,z,A){
 $M(y,function(B){
  var C=B.v[0];
  $M(A,function(D){
   switch(D.g){
   case 1:
    $R(2,[goog.math.Long.fromBits(1,0),B,z,$$DataziMap_Tip,$$DataziMap_Tip],"Bin");break;
   case 2:
    var E=D.v[0],F=D.v[1],G=D.v[2],H=D.v[3],I=D.v[4];
    $M(F,function(J){
     var K=J.v[0];
     var L=C.lessThan(K)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(L.g){
     case 1:
      var M=C.equals(K)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(M.g){
      case 1:
       $$FRPziSodiumziPlain_zdsinsertzugo2.C([B,z,I],function(N){
	$$DataziMap_balanceR.J(J,G,H,N);
       },[J,G,H]);break;
      case 2:
       $R(2,[E,B,z,H,I],"Bin");break;
      }break;
     case 2:
      $$FRPziSodiumziPlain_zdsinsertzugo2.C([B,z,H],function(O){
       $$DataziMap_balanceL.J(J,G,O,I);
      },[J,G,I]);break;
     }
    },[B,z,C,G,H,I,E]);break;
   }
  },[B,z,C]);
 },[A,z]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdwgo3=$f(2,function(Q,R){
 $M(R,function(S){
  switch(S.g){
  case 1:
   $R(1,[],"False");break;
  case 2:
   var T=S.v[1],U=S.v[2],V=S.v[3];
   $M(T,function(W){
    var X=W.v[0];
    var Y=Q.lessThan(X)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Y.g){
    case 1:
     var Z=Q.equals(X)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Z.g){
     case 1:
      $$FRPziSodiumziPlain_zdwgo3.J(Q,V);break;
     case 2:
      $R(2,[],"True");break;
     }break;
    case 2:
     $$FRPziSodiumziPlain_zdwgo3.J(Q,U);break;
    }
   },[Q,V,U]);break;
  }
 },[Q]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdsinsertzugo3=$f(2,function(e1,f1){
 $M(e1,function(g1){
  var h1=g1.v[0];
  $M(f1,function(i1){
   switch(i1.g){
   case 1:
    $R(2,[goog.math.Long.fromBits(1,0),g1,$$DataziSet_Tip,$$DataziSet_Tip],"Bin");break;
   case 2:
    var j1=i1.v[0],k1=i1.v[1],l1=i1.v[2],m1=i1.v[3];
    $M(k1,function(n1){
     var o1=n1.v[0];
     var p1=h1.lessThan(o1)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(p1.g){
     case 1:
      var q1=h1.equals(o1)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(q1.g){
      case 1:
       $$FRPziSodiumziPlain_zdsinsertzugo3.C([g1,m1],function(r1){
	$$DataziSet_balanceR.J(n1,l1,r1);
       },[n1,l1]);break;
      case 2:
       $R(2,[j1,g1,l1,m1],"Bin");break;
      }break;
     case 2:
      $$FRPziSodiumziPlain_zdsinsertzugo3.C([g1,l1],function(s1){
       $$DataziSet_balanceL.J(n1,s1,m1);
      },[n1,m1]);break;
     }
    },[g1,h1,l1,m1,j1]);break;
   }
  },[g1,h1]);
 },[f1]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdfEqSequence=$D(1,function(){
 $r([$$GHCziInt_zdfEqInt64zuzdczeze,$$GHCziInt_zdfBitsInt64zuzdczsze]);
},"at src/FRP/Sodium/Plain.hs:436:45");
var $$FRPziSodiumziPlain_zdfOrdSequence=$D(1,function(){
 $r([$$FRPziSodiumziPlain_zdfEqSequence,$$GHCziInt_zdfOrdInt64zuzdccompare,$$GHCziInt_zdfOrdInt64zuzdczl,$$GHCziInt_zdfOrdInt64zuzdczgze,$$GHCziInt_zdfOrdInt64zuzdczg,$$GHCziInt_zdfOrdInt64zuzdczlze,$$GHCziInt_zdfOrdInt64zuzdcmax,$$GHCziInt_zdfOrdInt64zuzdcmin]);
},"at src/FRP/Sodium/Plain.hs:436:49");
var $$FRPziSodiumziPlain_switchzugo2=$f(3,function(t1,u1,v1){
 $M(t1,function(w1){
  var x1=w1.v[0];
  $M(v1,function(y1){
   switch(y1.g){
   case 1:
    $R(2,[goog.math.Long.fromBits(1,0),w1,u1,$$DataziMap_Tip,$$DataziMap_Tip],"Bin");break;
   case 2:
    var z1=y1.v[0],A1=y1.v[1],B1=y1.v[2],C1=y1.v[3],D1=y1.v[4];
    $M(A1,function(E1){
     var F1=E1.v[0];
     var G1=x1.lessThan(F1)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(G1.g){
     case 1:
      var H1=x1.equals(F1)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(H1.g){
      case 1:
       $$FRPziSodiumziPlain_switchzugo2.C([w1,u1,D1],function(I1){
	$$DataziMap_balanceR.J(E1,B1,C1,I1);
       },[E1,B1,C1]);break;
      case 2:
       $R(2,[z1,w1,u1,C1,D1],"Bin");break;
      }break;
     case 2:
      $$FRPziSodiumziPlain_switchzugo2.C([w1,u1,C1],function(J1){
       $$DataziMap_balanceL.J(E1,B1,J1,D1);
      },[E1,B1,D1]);break;
     }
    },[w1,u1,x1,B1,C1,D1,z1]);break;
   }
  },[w1,u1,x1]);
 },[v1,u1]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdwgo1=$f(2,function(K1,L1){
 $M(L1,function(M1){
  switch(M1.g){
  case 1:
   $R(1,[],"Tip");break;
  case 2:
   var N1=M1.v[1],O1=M1.v[2],P1=M1.v[3],Q1=M1.v[4];
   $M(N1,function(R1){
    var S1=R1.v[0];
    var T1=K1.lessThan(S1)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(T1.g){
    case 1:
     var U1=K1.equals(S1)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(U1.g){
     case 1:
      $$FRPziSodiumziPlain_zdwgo1.C([K1,Q1],function(V1){
       $$DataziMap_balanceL.J(R1,O1,P1,V1);
      },[R1,O1,P1]);break;
     case 2:
      $$DataziMap_glue.J(P1,Q1);break;
     }break;
    case 2:
     $$FRPziSodiumziPlain_zdwgo1.C([K1,P1],function(W1){
      $$DataziMap_balanceR.J(R1,O1,W1,Q1);
     },[R1,O1,Q1]);break;
    }
   },[K1,O1,P1,Q1]);break;
  }
 },[K1]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdsdeletezugo1=$f(2,function(X1,Y1){
 $M(X1,function(Z1){
  var a2=Z1.v[0];
  $$FRPziSodiumziPlain_zdwgo1.J(a2,Y1);
 },[Y1]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_partition=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$FRPziSodiumziPlain$a);
},[],"at src/FRP/Sodium/Plain.hs:55:1");
var $$FRPziSodiumziPlain_zdwa9=$f(4,function(J8,K8,L8,M8){
 $b($hs_takeMVarzh,[K8,M8],function(N8){
  var O8=N8[0],P8=N8[1];
  $M(P8,function(Q8){
   var R8=Q8.v[0],S8=Q8.v[1],T8=Q8.v[2];
   $M(S8,function(U8){
    var V8=U8.v[0];
    $M(L8,function(W8){
     var X8=W8.v[0];
     var Y8=V8.greaterThan(X8)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Y8.g){
     case 1:
      $M(R8,function(Z8){
       var a9=Z8.v[0];
       $$FRPziSodiumziPlain_zdwgo3.C([a9,J8],function(b9){
	switch(b9.g){
	case 1:
	 var c9=$t(function(){
	  $M(X8,function(d9){
	   switch(d9.toString()){
	   case "9223372036854775807":
	    $A($$GHCziInt_zdfEnumInt9);break;
	   default:
	    var e9=d9.add(goog.math.Long.fromBits(1,0));
	    $R(1,[e9],"I64#");
	   }
	  },[]);
	 },[X8],"newSerial");
	 var f9=$t(function(){
	  $M(c9,function(g9){
	   $R(1,[Z8,g9,T8],"Node");
	  },[Z8,T8]);
	 },[c9,Z8,T8],"a9");
	 $b($hs_seqzh,[f9,O8],function(h9){
	  var i9=h9[0];
	  $b($hs_putMVarzh,[K8,f9,i9],function(z9){
	   var j9=$f(2,function(k9,l9){
	    $M(k9,function(m9){
	     switch(m9.g){
	     case 1:
	      $r([l9,$$GHCziTuple_Z0T]);break;
	     case 2:
	      var n9=m9.v[0],o9=m9.v[1];
	      $M(n9,function(p9){
	       var q9=p9.v[1];
	       $M(q9,function(r9){
		var s9=r9.v[0];
		var t9=$t(function(){
		 $$FRPziSodiumziPlain_zdsinsertzugo3.J(Z8,J8);
		},[J8,Z8],"sat");
		$$FRPziSodiumziPlain_zdwa9.C([t9,s9,c9,l9],function(u9){
		 var v9=u9[0];
		 j9.J(o9,v9);
		},[o9,j9]);
	       },[J8,c9,Z8,l9,o9,j9]);
	      },[J8,c9,Z8,l9,o9,j9]);break;
	     }
	    },[J8,c9,Z8,l9,j9]);
	   },[J8,c9,Z8],"a11");
	   $$DataziMap_toAscList.C([T8],function(w9){
	    j9.C([w9,z9],function(x9){
	     var y9=x9[0];
	     $r([y9,$$GHCziTypes_True]);
	    },[]);
	   },[j9,z9]);
	  },[J8,c9,Z8,T8]);
	 },[K8,J8,c9,Z8,T8,f9]);break;
	case 2:
	 $b($hs_putMVarzh,[K8,Q8,O8],function(A9){
	  $r([A9,$$GHCziTypes_False]);
	 },[]);break;
	}
       },[K8,X8,J8,Z8,T8,O8,Q8]);
      },[K8,X8,J8,T8,O8,Q8]);break;
     case 2:
      $b($hs_putMVarzh,[K8,Q8,O8],function(B9){
       $r([B9,$$GHCziTypes_False]);
      },[]);break;
     }
    },[K8,V8,R8,J8,T8,O8,Q8]);
   },[K8,L8,R8,J8,T8,O8,Q8]);
  },[K8,L8,J8,O8]);
 },[K8,L8,J8]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_linkNode1=$f(4,function(J9,K9,L9,M9){
 var N9=$hs_getMaskingStatezh(M9);
 var O9=N9[0],P9=N9[1];
 var Q9=$f(2,function(R9,S9){
  $M(L9,function(T9){
   var U9=T9.v[0];
   var V9=$t(function(){
    $M(S9,function(W9){
     var X9=W9.v[1];
     $A(X9);
    },[]);
   },[S9],"sat");
   $$FRPziSodiumziPlain_zdwa9.C([$$DataziSet_Tip,U9,V9,R9],function(Y9){
    var Z9=Y9[0],aa=Y9[1];
    var ba=$hs_getMaskingStatezh(Z9);
    var ca=ba[0],da=ba[1];
    $M(da,function(ea){
     switch(ea.toString()){
     case "0":
      var Ca=$f(1,function(Da){
       $M(J9,function(Ea){
	var Fa=Ea.v[0];
	$b($hs_takeMVarzh,[Fa,Da],function(Ga){
	 var Ha=Ga[0],Ia=Ga[1];
	 var Ja=$f(1,function(Ka){
	  $b($hs_putMVarzh,[Fa,Ia,Ka],function(La){
	   $r([La,$$GHCziTuple_Z0T]);
	  },[]);
	 },[Fa,Ia],"sat");
	 var Ma=$f(2,function(w,x){
	  $$ControlziExceptionziBase_finally2.J(Ja,w,x);
	 },[Ja],"sat");
	 var Na=$f(1,function(Oa){
	  var Pa=$t(function(){
	   $M(Ia,function(Qa){
	    var Ra=Qa.v[0],Sa=Qa.v[1],Ta=Qa.v[2];
	    $$FRPziSodiumziPlain_zdsinsertzugo2.C([K9,T9,Ta],function(Ua){
	     $R(1,[Ra,Sa,Ua],"Node");
	    },[Ra,Sa]);
	   },[K9,T9]);
	  },[K9,T9,Ia],"a10");
	  $b($hs_seqzh,[Pa,Oa],function(Va){
	   var Wa=Va[0];
	   $r([Wa,Pa]);
	  },[Pa]);
	 },[K9,T9,Ia],"sat");
	 var Xa=$f(1,function(x){
	  $k($hs_unmaskAsyncExceptionszh,[Na,x]);
	 },[Na],"sat");
	 $b($hs_catchzh,[Xa,Ma,Ha],function(Ya){
	  var Za=Ya[0],ab=Ya[1];
	  $b($hs_putMVarzh,[Fa,ab,Za],function(bb){
	   $r([bb,$$GHCziTuple_Z0T]);
	  },[]);
	 },[Fa]);
	},[K9,T9,Fa]);
       },[K9,T9,Da]);
      },[J9,K9,T9],"sat");
      $b($hs_maskAsyncExceptionszh,[Ca,ca],function(cb){
       var db=cb[0];
       $r([db,aa]);
      },[aa]);break;
     default:
      $M(J9,function(fa){
       var ga=fa.v[0];
       $b($hs_takeMVarzh,[ga,ca],function(ha){
	var ia=ha[0],ja=ha[1];
	var ka=$f(1,function(la){
	 $b($hs_putMVarzh,[ga,ja,la],function(ma){
	  $r([ma,$$GHCziTuple_Z0T]);
	 },[]);
	},[ga,ja],"sat");
	var na=$f(2,function(w,x){
	 $$ControlziExceptionziBase_finally2.J(ka,w,x);
	},[ka],"sat");
	var oa=$f(1,function(pa){
	 var qa=$t(function(){
	  $M(ja,function(ra){
	   var sa=ra.v[0],ta=ra.v[1],ua=ra.v[2];
	   $$FRPziSodiumziPlain_zdsinsertzugo2.C([K9,T9,ua],function(va){
	    $R(1,[sa,ta,va],"Node");
	   },[sa,ta]);
	  },[K9,T9]);
	 },[ja,K9,T9],"a10");
	 $b($hs_seqzh,[qa,pa],function(wa){
	  var xa=wa[0];
	  $r([xa,qa]);
	 },[qa]);
	},[ja,K9,T9],"sat");
	$b($hs_catchzh,[oa,na,ia],function(ya){
	 var za=ya[0],Aa=ya[1];
	 $b($hs_putMVarzh,[ga,Aa,za],function(Ba){
	  $r([Ba,aa]);
	 },[aa]);
	},[ga,aa]);
       },[ga,K9,T9,aa]);
      },[ca,K9,T9,aa]);
     }
    },[J9,ca,K9,T9,aa]);
   },[J9,K9,T9]);
  },[S9,R9,J9,K9]);
 },[L9,J9,K9],"$j");
 $M(P9,function(eb){
  switch(eb.toString()){
  case "0":
   var lb=$f(1,function(mb){
    $M(J9,function(nb){
     var ob=nb.v[0];
     $b($hs_takeMVarzh,[ob,mb],function(pb){
      var qb=pb[0],rb=pb[1];
      $b($hs_putMVarzh,[ob,rb,qb],function(sb){
       $r([sb,rb]);
      },[rb]);
     },[ob]);
    },[mb]);
   },[J9],"sat");
   $b($hs_maskAsyncExceptionszh,[lb,O9],function(tb){
    var ub=tb[0],vb=tb[1];
    Q9.J(ub,vb);
   },[L9,J9,K9,Q9]);break;
  default:
   $M(J9,function(fb){
    var gb=fb.v[0];
    $b($hs_takeMVarzh,[gb,O9],function(hb){
     var ib=hb[0],jb=hb[1];
     $b($hs_putMVarzh,[gb,jb,ib],function(kb){
      Q9.J(kb,jb);
     },[L9,J9,K9,Q9,jb]);
    },[L9,J9,K9,Q9,gb]);
   },[L9,J9,K9,Q9,O9]);
  }
 },[L9,J9,K9,Q9,O9]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_switchzuzddOrd=$t(function(){
 $$GHCziClasses_zdfOrdZLz2cUZR.J($$GHCziInt_zdfOrdInt64,$$FRPziSodiumziPlain_zdfOrdSequence);
},[],"at src/FRP/Sodium/Plain.hs:455:31");
var $$FRPziSodiumziPlain_switch5=$f(4,function(wb,xb,yb,zb){
 var Ab=$f(2,function(Bb,Cb){
  $M(wb,function(Db){
   var Eb=Db.v[0],Fb=Db.v[2],Gb=Db.v[3];
   $M(Eb,function(Hb){
    var Ib=Hb.v[0];
    var Jb=$hs_readMutVarzh(Ib,Bb);
    var Kb=Jb[0],Lb=Jb[1];
    var Mb=$hs_readMutVarzh(Ib,Kb);
    var Nb=Mb[0],Ob=Mb[1];
    var Pb=$t(function(){
     $$GHCziInt_zdfEnumInt64zuzdcsucc.J(Ob);
    },[Ob],"sat");
    var gc=$hs_writeMutVarzh(Ib,Pb,Nb);
    $M(Fb,function(Qb){
     var Rb=Qb.v[0];
     var Sb=$hs_readMutVarzh(Rb,gc);
     var Tb=Sb[0],Ub=Sb[1];
     var Vb=$t(function(){
      var Wb=$d(1,[Cb,Lb],"sat");
      $$DataziMap_insert.J($$FRPziSodiumziPlain_switchzuzddOrd,Wb,yb,Ub);
     },[Cb,Lb,yb,Ub],"sat");
     var fc=$hs_writeMutVarzh(Rb,Vb,Tb);
     $M(Gb,function(Xb){
      var Yb=Xb.v[0];
      var Zb=$hs_readMutVarzh(Yb,fc);
      var ac=Zb[0],bc=Zb[1];
      var cc=$t(function(){
       var dc=$d(1,[xb,yb],"sat");
       $$FRPziSodiumziPlain_switchzugo2.J(Lb,dc,bc);
      },[Lb,yb,xb,bc],"sat");
      var ec=$hs_writeMutVarzh(Yb,cc,ac);
      $r([ec,$$GHCziTuple_Z0T]);
     },[Lb,yb,fc,xb]);
    },[gc,Cb,Lb,yb,Gb,xb]);
   },[Bb,Fb,Cb,yb,Gb,xb]);
  },[Bb,Cb,yb,xb]);
 },[wb,yb,xb],"$j");
 $M(xb,function(hc){
  switch(hc.g){
  case 1:
   Ab.J(zb,$$GHCziInt_zdfBoundedInt64zuzdcmaxBound);break;
  case 2:
   var ic=hc.v[0];
   var jc=$hs_getMaskingStatezh(zb);
   var kc=jc[0],lc=jc[1];
   $M(lc,function(mc){
    switch(mc.toString()){
    case "0":
     var wc=$f(1,function(xc){
      $M(ic,function(yc){
       var zc=yc.v[0];
       $b($hs_takeMVarzh,[zc,xc],function(Ac){
	var Bc=Ac[0],Cc=Ac[1];
	$b($hs_putMVarzh,[zc,Cc,Bc],function(Dc){
	 $r([Dc,Cc]);
	},[Cc]);
       },[zc]);
      },[xc]);
     },[ic],"sat");
     $b($hs_maskAsyncExceptionszh,[wc,kc],function(Ec){
      var Fc=Ec[0],Gc=Ec[1];
      var Hc=$t(function(){
       $M(Gc,function(Ic){
	var Jc=Ic.v[1];
	$A(Jc);
       },[]);
      },[Gc],"sat");
      Ab.J(Fc,Hc);
     },[wb,yb,xb,Ab]);break;
    default:
     $M(ic,function(nc){
      var oc=nc.v[0];
      $b($hs_takeMVarzh,[oc,kc],function(pc){
       var qc=pc[0],rc=pc[1];
       $b($hs_putMVarzh,[oc,rc,qc],function(vc){
	var sc=$t(function(){
	 $M(rc,function(tc){
	  var uc=tc.v[1];
	  $A(uc);
	 },[]);
	},[rc],"sat");
	Ab.J(vc,sc);
       },[wb,yb,xb,Ab,rc]);
      },[wb,yb,xb,Ab,oc]);
     },[wb,yb,xb,Ab,kc]);
    }
   },[wb,yb,xb,Ab,ic,kc]);break;
  }
 },[wb,yb,xb,Ab,zb]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdwa11=$f(4,function(yd,zd,Ad,Bd){
 var Cd=$hs_readMutVarzh(yd,Bd);
 var Dd=Cd[0],Ed=Cd[1];
 var Fd=$f(1,function(Gd){
  $M(zd,function(Hd){
   var Id=Hd.v[0];
   var Jd=$hs_readMutVarzh(Id,Gd);
   var Kd=Jd[0],Ld=Jd[1];
   $M(Ld,function(Md){
    switch(Md.g){
    case 1:
     $r([Kd,$$DataziMaybe_Nothing]);break;
    case 2:
     var Nd=Md.v[1],Od=Md.v[2],Pd=Md.v[3];
     var Qd=$hs_readMutVarzh(Id,Kd);
     var Rd=Qd[0],Sd=Qd[1];
     var Td=$t(function(){
      $M(Pd,function(Ud){
       switch(Ud.g){
       case 1:
	$M(Nd,function(Vd){
	 var Wd=Vd.v[0],Xd=Vd.v[1];
	 $R(1,[Vd,Wd,Xd,Od],"(,,,)");
	},[Od]);break;
       case 2:
	var Yd=Ud.v[0],Zd=Ud.v[1],ae=Ud.v[2],be=Ud.v[3],ce=Ud.v[4];
	$$DataziMap_findMinzuzdsfindMin.C([Yd,Zd,ae,be,ce],function(de){
	 var ee=de.v[0],fe=de.v[1];
	 $M(ee,function(ge){
	  var he=ge.v[0],ie=ge.v[1];
	  $R(1,[ge,he,ie,fe],"(,,,)");
	 },[fe]);
	},[]);break;
       }
      },[Nd,Od]);
     },[Pd,Nd,Od],"ds");
     var je=$t(function(){
      $M(Td,function(ke){
       var le=ke.v[0];
       $$DataziMap_delete.J($$FRPziSodiumziPlain$b,le,Sd);
      },[Sd]);
     },[Td,Sd],"sat");
     var ze=$hs_writeMutVarzh(Id,je,Rd);
     $M(Ad,function(me){
      var ne=me.v[0];
      var oe=$hs_readMutVarzh(ne,ze);
      var pe=oe[0],qe=oe[1];
      var re=$t(function(){
       $M(Td,function(se){
	var te=se.v[2];
	$$FRPziSodiumziPlain_zdsdeletezugo1.J(te,qe);
       },[qe]);
      },[Td,qe],"sat");
      var ye=$hs_writeMutVarzh(ne,re,pe);
      var ue=$t(function(){
       $M(Td,function(ve){
	var we=ve.v[3];
	$A(we);
       },[]);
      },[Td],"sat");
      var xe=$d(2,[ue],"sat");
      $r([ye,xe]);
     },[Td,ze]);break;
    }
   },[Id,Kd,Ad]);
  },[Gd,Ad]);
 },[zd,Ad],"a8");
 $M(Ed,function(Ae){
  switch(Ae.g){
  case 1:
   Fd.J(Dd);break;
  case 2:
   var Uf=$hs_writeMutVarzh(yd,$$GHCziTypes_False,Dd);
   $M(Ad,function(Be){
    var Ce=Be.v[0];
    var De=$hs_readMutVarzh(Ce,Uf);
    var Ee=De[0],Fe=De[1];
    $M(zd,function(Ge){
     var He=Ge.v[0];
     var Tf=$hs_writeMutVarzh(He,$$DataziMap_Tip,Ee);
     var Ie=$f(2,function(Je,Ke){
      $M(Je,function(Le){
       switch(Le.g){
       case 1:
	$r([Ke,$$GHCziTuple_Z0T]);break;
       case 2:
	var Me=Le.v[0],Ne=Le.v[1];
	$M(Me,function(Oe){
	 var Pe=Oe.v[0],Qe=Oe.v[1];
	 $M(Qe,function(Re){
	  var Se=Re.v[0],Te=Re.v[1];
	  $M(Se,function(Ue){
	   switch(Ue.g){
	   case 1:
	    var Ve=$hs_readMutVarzh(He,Ke);
	    var We=Ve[0],Xe=Ve[1];
	    var Ye=$t(function(){
	     var Ze=$d(1,[$$GHCziInt_zdfBoundedInt64zuzdcmaxBound,Pe],"sat");
	     $$DataziMap_insert.J($$FRPziSodiumziPlain$b,Ze,Te,Xe);
	    },[Pe,Te,Xe],"sat");
	    var af=$hs_writeMutVarzh(He,Ye,We);
	    Ie.J(Ne,af);break;
	   case 2:
	    var bf=Ue.v[0];
	    var cf=$hs_getMaskingStatezh(Ke);
	    var df=cf[0],ef=cf[1];
	    $M(ef,function(ff){
	     switch(ff.toString()){
	     case "0":
	      var wf=$f(1,function(xf){
	       $M(bf,function(yf){
		var zf=yf.v[0];
		$b($hs_takeMVarzh,[zf,xf],function(Af){
		 var Bf=Af[0],Cf=Af[1];
		 $b($hs_putMVarzh,[zf,Cf,Bf],function(Df){
		  $r([Df,Cf]);
		 },[Cf]);
		},[zf]);
	       },[xf]);
	      },[bf],"sat");
	      $b($hs_maskAsyncExceptionszh,[wf,df],function(Ef){
	       var Ff=Ef[0],Gf=Ef[1];
	       var Hf=$hs_readMutVarzh(He,Ff);
	       var If=Hf[0],Jf=Hf[1];
	       var Kf=$t(function(){
		var Lf=$t(function(){
		 $M(Gf,function(Mf){
		  var Nf=Mf.v[1];
		  $A(Nf);
		 },[]);
		},[Gf],"sat");
		var Of=$d(1,[Lf,Pe],"sat");
		$$DataziMap_insert.J($$FRPziSodiumziPlain$b,Of,Te,Jf);
	       },[Pe,Te,Gf,Jf],"sat");
	       var Pf=$hs_writeMutVarzh(He,Kf,If);
	       Ie.J(Ne,Pf);
	      },[He,Pe,Te,Ne,Ie]);break;
	     default:
	      $M(bf,function(gf){
	       var hf=gf.v[0];
	       $b($hs_takeMVarzh,[hf,df],function(jf){
		var kf=jf[0],lf=jf[1];
		$b($hs_putMVarzh,[hf,lf,kf],function(vf){
		 var mf=$hs_readMutVarzh(He,vf);
		 var nf=mf[0],of=mf[1];
		 var pf=$t(function(){
		  var qf=$t(function(){
		   $M(lf,function(rf){
		    var sf=rf.v[1];
		    $A(sf);
		   },[]);
		  },[lf],"sat");
		  var tf=$d(1,[qf,Pe],"sat");
		  $$DataziMap_insert.J($$FRPziSodiumziPlain$b,tf,Te,of);
		 },[Pe,Te,lf,of],"sat");
		 var uf=$hs_writeMutVarzh(He,pf,nf);
		 Ie.J(Ne,uf);
		},[He,Pe,Te,Ne,Ie,lf]);
	       },[He,Pe,Te,Ne,Ie,hf]);
	      },[He,Pe,Te,Ne,Ie,df]);
	     }
	    },[He,Pe,Te,Ne,Ie,bf,df]);break;
	   }
	  },[He,Ke,Pe,Te,Ne,Ie]);
	 },[He,Ke,Pe,Ne,Ie]);
	},[He,Ke,Ne,Ie]);break;
       }
      },[He,Ke,Ie]);
     },[He],"a10");
     $$DataziMap_toAscList.C([Fe],function(Qf){
      Ie.C([Qf,Tf],function(Rf){
       var Sf=Rf[0];
       Fd.J(Sf);
      },[zd,Ad,Fd]);
     },[zd,Ad,Fd,Ie,Tf]);
    },[zd,Ad,Fd,Ee,Fe]);
   },[zd,Ad,Fd,Uf]);break;
  }
 },[yd,zd,Ad,Fd,Dd]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_wrap=$f(2,function(w,x){
 $$FRPziSodiumziPlain$c.J(w,x);
},[],"at src/FRP/Sodium/Plain.hs:584:1");
var $$FRPziSodiumziPlain_touch=$f(2,function(w,x){
 $$FRPziSodiumziPlain$d.J(w,x);
},[],"at src/FRP/Sodium/Plain.hs:588:1");
var $$FRPziSodiumziPlain_unSample=$f(2,function(w,x){
 $$FRPziSodiumziPlain$e.J(w,x);
},[],"at src/FRP/Sodium/Plain.hs:83:1");
var $$FRPziSodiumziPlain_finalizzeListen=$f(3,function(P,w,x){
 $$FRPziSodiumziPlain$f.J(P,w,x);
},[],"at src/FRP/Sodium/Plain.hs:710:1");
var $$FRPziSodiumziPlain_finalizzeSample=$f(3,function(P,w,x){
 $$FRPziSodiumziPlain$g.J(P,w,x);
},[],"at src/FRP/Sodium/Plain.hs:717:1");
var $$FRPziSodiumziPlain_addCleanupzuListen=$f(2,function(fi,gi){
 var hi=$f(1,function(ii){
  $M(fi,function(ji){
   var ki=ji.v[0];
   $b($hs_takeMVarzh,[ki,ii],function(li){
    var mi=li[0],ni=li[1];
    $M(ni,function(oi){
     switch(oi.g){
     case 1:
      $b($hs_putMVarzh,[ki,$$DataziMaybe_Nothing,mi],function(pi){
       $r([pi,$$GHCziTuple_Z0T]);
      },[]);break;
     case 2:
      var qi=oi.v[0];
      qi.C([mi],function(ri){
       var si=ri[0];
       $b($hs_putMVarzh,[ki,$$DataziMaybe_Nothing,si],function(ti){
	$r([ti,$$GHCziTuple_Z0T]);
       },[]);
      },[ki]);break;
     }
    },[ki,mi]);
   },[ki]);
  },[ii]);
 },[fi],"a7");
 var ui=$f(2,function(vi,wi){
  $$FRPziSodiumziPlain_finalizzeListen.C([gi,hi,wi],function(xi){
   var yi=xi[0],zi=xi[1];
   var Ai=$d(1,[zi,vi],"sat");
   $r([yi,Ai]);
  },[vi]);
 },[hi,gi],"sat");
 $A(ui);
},[],"at src/FRP/Sodium/Plain.hs:745:1");
var $$FRPziSodiumziPlain_constant5=$f(3,function(fj,gj,hj){
 var ij=$f(1,function(jj){
  $r([jj,$$GHCziTuple_Z0T]);
 },[],"a7");
 var kj=$f(2,function(lj,mj){
  var nj=$d(1,[ij,lj],"sat");
  $r([mj,nj]);
 },[ij],"sat");
 $A(kj);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_constantzua=$D(1,function(){
 $r([$$FRPziSodiumziPlain_constant5]);
},"at src/FRP/Sodium/Plain.hs:506:12");
var $$FRPziSodiumziPlain_constant4=$f(2,function(oj,pj){
 var qj=$d(1,[$$FRPziSodiumziPlain_constantzua,oj],"sat");
 $r([pj,qj]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_constant3=$t(function(){
 var rj=$f(1,function(sj){
  var xj=$hs_noDuplicatezh(sj);
  var tj=$hs_newMutVarzh($$DataziMaybe_Nothing,xj);
  var uj=tj[0],vj=tj[1];
  var wj=$d(1,[vj],"sat");
  $r([uj,wj]);
 },[],"sat");
 $$GHCziIO_unsafeDupablePerformIO.J(rj);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_constant2=$D(1,function(){
 $r([$$FRPziSodiumziPlain_constant4,$$FRPziSodiumziPlain_constant3]);
},"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_runListen=$f(4,function(Ej,Fj,Gj,Hj){
 var Ij=$t(function(){
  $M(Ej,function(Jj){
   var Kj=Jj.v[0];
   Kj.J(Fj,Gj,Hj);
  },[Fj,Gj,Hj]);
 },[Ej,Fj,Gj,Hj],"rma");
 var Lj=$f(2,function(Mj,Nj){
  Ij.C([Mj,Nj],function(Oj){
   var Pj=Oj[0],Qj=Oj[1];
   $M(Qj,function(Rj){
    var Sj=Rj.v[0],Tj=Rj.v[1];
    $$FRPziSodiumziPlain_touch.C([Ej,Pj],function(Uj){
     var Vj=Uj[0];
     var Wj=$d(1,[Sj,Tj],"sat");
     $r([Vj,Wj]);
    },[Sj,Tj]);
   },[Ej,Pj]);
  },[Ej]);
 },[Ej,Ij],"sat");
 $A(Lj);
},[],"at src/FRP/Sodium/Plain.hs:535:1");
var $$FRPziSodiumziPlain_zdwa=$f(2,function(vk,wk){
 var xk=$t(function(){
  var yk=$f(1,function(zk){
   var Ek=$hs_noDuplicatezh(zk);
   var Ak=$hs_newMutVarzh($$DataziMaybe_Nothing,Ek);
   var Bk=Ak[0],Ck=Ak[1];
   var Dk=$d(1,[Ck],"sat");
   $r([Bk,Dk]);
  },[],"sat");
  $$GHCziIO_unsafeDupablePerformIO.J(yk);
 },[],"sat");
 var Fk=$f(5,function(Gk,Hk,Ik,Jk,Kk){
  $M(wk,function(Lk){
   var Mk=Lk.v[0],Nk=Lk.v[1];
   $M(Nk,function(Ok){
    var Pk=Ok.v[0];
    var Qk=$hs_readMutVarzh(Pk,Kk);
    var Rk=Qk[0],Sk=Qk[1];
    $M(Sk,function(Tk){
     switch(Tk.g){
     case 1:
      Mk.C([Jk,Rk],function(Uk){
       var Vk=Uk[0],Wk=Uk[1];
       $M(Wk,function(Xk){
	var Yk=Xk.v[0],Zk=Xk.v[1];
	var al=$d(2,[Yk],"sat");
	var cl=$hs_writeMutVarzh(Pk,al,Vk);
	var bl=$f(1,function(x){
	 $$GHCziBase_zi.J(Ik,vk,x);
	},[Ik,vk],"sat");
	$$FRPziSodiumziPlain_runListen.J(Yk,Gk,Hk,bl,Zk,cl);
       },[Pk,Vk,Gk,Hk,Ik,vk]);
      },[Pk,Gk,Hk,Ik,vk]);break;
     case 2:
      var dl=Tk.v[0];
      var el=$f(1,function(x){
       $$GHCziBase_zi.J(Ik,vk,x);
      },[Ik,vk],"sat");
      $$FRPziSodiumziPlain_runListen.J(dl,Gk,Hk,el,Jk,Rk);break;
     }
    },[Pk,Jk,Rk,Mk,Gk,Hk,Ik,vk]);
   },[Kk,Jk,Mk,Gk,Hk,Ik,vk]);
  },[Kk,Jk,Gk,Hk,Ik,vk]);
 },[wk,vk],"a7");
 var fl=$d(1,[Fk],"a8");
 var gl=$f(2,function(hl,il){
  var jl=$d(1,[fl,hl],"sat");
  $r([il,jl]);
 },[fl],"sat");
 $r([gl,xk]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_switch2=$f(6,function(dm,em,fm,gm,hm,im){
 $M(dm,function(jm){
  var km=jm.v[0],lm=jm.v[1];
  $M(lm,function(mm){
   var nm=mm.v[0];
   var om=$hs_readMutVarzh(nm,im);
   var pm=om[0],qm=om[1];
   $M(qm,function(rm){
    switch(rm.g){
    case 1:
     km.C([hm,pm],function(sm){
      var tm=sm[0],um=sm[1];
      $M(um,function(vm){
       var wm=vm.v[0],xm=vm.v[1];
       var ym=$d(2,[wm],"sat");
       var zm=$hs_writeMutVarzh(nm,ym,tm);
       $$FRPziSodiumziPlain_runListen.J(wm,em,fm,gm,xm,zm);
      },[nm,tm,em,fm,gm]);
     },[nm,em,fm,gm]);break;
    case 2:
     var Am=rm.v[0];
     $$FRPziSodiumziPlain_runListen.J(Am,em,fm,gm,hm,pm);break;
    }
   },[nm,hm,pm,km,em,fm,gm]);
  },[im,hm,km,em,fm,gm]);
 },[im,hm,em,fm,gm]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_execute2=$f(3,function(On,Pn,Qn){
 var Rn=$hs_newMVarzh(Qn);
 var Sn=Rn[0],Tn=Rn[1];
 var Un=$f(1,function(Vn){
  $r([Vn,$$GHCziTuple_Z0T]);
 },[],"sat");
 var Wn=$d(2,[Un],"sat");
 $b($hs_putMVarzh,[Tn,Wn,Sn],function(yo){
  var Xn=$t(function(){
   $M(Pn,function(Yn){
    var Zn=Yn.v[0],ao=Yn.v[1],bo=Yn.v[2];
    var co=$t(function(){
     var eo=$f(2,function(fo,go){
      $b($hs_takeMVarzh,[Tn,go],function(ho){
       var io=ho[0],jo=ho[1];
       $M(jo,function(ko){
	switch(ko.g){
	case 1:
	 $b($hs_putMVarzh,[Tn,$$DataziMaybe_Nothing,io],function(mo){
	  var lo=$d(1,[$$GHCziTuple_Z0T,fo],"sat");
	  $r([mo,lo]);
	 },[fo]);break;
	case 2:
	 On.C([fo,io],function(no){
	  var oo=no[0],po=no[1];
	  $M(po,function(qo){
	   var ro=qo.v[0],so=qo.v[1];
	   var to=$d(2,[ro],"sat");
	   $b($hs_putMVarzh,[Tn,to,oo],function(vo){
	    var uo=$d(1,[$$GHCziTuple_Z0T,so],"sat");
	    $r([vo,uo]);
	   },[so]);
	  },[Tn,oo]);
	 },[Tn]);break;
	}
       },[Tn,io,fo,On]);
      },[Tn,fo,On]);
     },[Tn,On],"sat");
     $$DataziSequence_filterzusnocTree.J(Zn,eo);
    },[Tn,Zn,On],"sat");
    $R(1,[co,ao,bo],"ReactiveState");
   },[Tn,On]);
  },[Tn,Pn,On],"sat");
  var wo=$d(1,[Tn],"sat");
  var xo=$d(1,[wo,Xn],"sat");
  $r([yo,xo]);
 },[Tn,Pn,On]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_switch4=$f(6,function(Uo,Vo,Wo,Xo,Yo,Zo){
 var ap=$hs_newMutVarzh($$DataziMaybe_Nothing,Zo);
 var bp=ap[0],cp=ap[1];
 var dp=$f(3,function(ep,fp,gp){
  var hp=$hs_readMutVarzh(cp,gp);
  var ip=hp[0],jp=hp[1];
  var kp=$d(2,[ep],"sat");
  var Dp=$hs_writeMutVarzh(cp,kp,ip);
  $M(jp,function(lp){
   switch(lp.g){
   case 1:
    var mp=$f(2,function(np,op){
     var pp=$hs_readMutVarzh(cp,op);
     var qp=pp[0],rp=pp[1];
     $M(rp,function(sp){
      switch(sp.g){
      case 1:
       $$GHCziCString_unpackCStringzh.C(["Pattern match failure in do expression at src/FRP/Sodium/Plain.hs:789:13-18"],function(tp){
	$$GHCziErr_error.J(tp);
       },[]);break;
      case 2:
       var up=sp.v[0];
       var vp=$hs_writeMutVarzh(cp,$$DataziMaybe_Nothing,qp);
       Xo.J(up,np,vp);break;
      }
     },[cp,qp,np,Xo]);
    },[cp,Xo],"sat");
    var wp=$t(function(){
     $M(fp,function(xp){
      var yp=xp.v[1];
      $A(yp);
     },[]);
    },[fp],"sat");
    $$FRPziSodiumziPlain_switch5.C([wp,Vo,mp,Dp],function(zp){
     var Ap=zp[0],Bp=zp[1];
     var Cp=$d(1,[Bp,fp],"sat");
     $r([Ap,Cp]);
    },[fp]);break;
   case 2:
    var Ep=$d(1,[$$GHCziTuple_Z0T,fp],"sat");
    $r([Dp,Ep]);break;
   }
  },[Vo,cp,fp,Xo,Dp]);
 },[Vo,cp,Xo],"sat");
 Uo.J(Vo,Wo,dp,Yo,bp);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_switch3=$f(6,function(Fp,Gp,Hp,Ip,Jp,Kp){
 var Lp=$f(3,function(Mp,Np,Op){
  var Pp=$t(function(){
   $M(Fp,function(Qp){
    var Rp=Qp.v[1];
    $A(Rp);
   },[]);
  },[Fp],"a7");
  var Sp=$f(2,function(Tp,Up){
   $$FRPziSodiumziPlain_unSample.C([Pp,Up],function(Vp){
    var Wp=Vp[0],Xp=Vp[1];
    Op.C([Xp,Tp,Wp],function(Yp){
     var Zp=Yp[0],aq=Yp[1];
     $M(aq,function(bq){
      var cq=bq.v[1];
      $M(Fp,function(dq){
       var eq=dq.v[0];
       $M(eq,function(fq){
	var gq=fq.v[0],hq=fq.v[1];
	$M(hq,function(iq){
	 var jq=iq.v[0];
	 var kq=$hs_readMutVarzh(jq,Zp);
	 var lq=kq[0],mq=kq[1];
	 $M(mq,function(nq){
	  switch(nq.g){
	  case 1:
	   gq.C([cq,lq],function(oq){
	    var pq=oq[0],qq=oq[1];
	    $M(qq,function(rq){
	     var sq=rq.v[0],tq=rq.v[1];
	     var uq=$d(2,[sq],"sat");
	     var vq=$hs_writeMutVarzh(jq,uq,pq);
	     $$FRPziSodiumziPlain_runListen.J(sq,Mp,Np,Op,tq,vq);
	    },[Op,jq,pq,Mp,Np]);
	   },[Op,jq,Mp,Np]);break;
	  case 2:
	   var wq=nq.v[0];
	   $$FRPziSodiumziPlain_runListen.J(wq,Mp,Np,Op,cq,lq);break;
	  }
	 },[Op,jq,cq,lq,gq,Mp,Np]);
	},[Op,Zp,cq,gq,Mp,Np]);
       },[Op,Zp,cq,Mp,Np]);
      },[Op,Zp,cq,Mp,Np]);
     },[Fp,Op,Zp,Mp,Np]);
    },[Fp,Op,Mp,Np]);
   },[Fp,Tp,Op,Mp,Np]);
  },[Fp,Pp,Op,Mp,Np],"sat");
  $A(Sp);
 },[Fp],"sat");
 $$FRPziSodiumziPlain_switch4.J(Lp,Gp,Hp,Ip,Jp,Kp);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_sync1=$f(2,function(Bq,Cq){
 var Dq=$hs_newMutVarzh($$GHCziErr_undefined,Cq);
 var Eq=Dq[0],Fq=Dq[1];
 $M($$FRPziSodiumziPlain_partition,function(Gq){
  var Hq=Gq.v[0];
  $M(Hq,function(Iq){
   var Jq=Iq.v[0];
   $b($hs_putMVarzh,[Jq,$$GHCziTuple_Z0T,Eq],function(As){
    var Kq=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
    var Lq=$hs_newMutVarzh(Kq,As);
    var Mq=Lq[0],Nq=Lq[1];
    var Oq=$hs_newMutVarzh($$GHCziTypes_False,Mq);
    var Pq=Oq[0],Qq=Oq[1];
    var Rq=$hs_newMutVarzh($$DataziMap_Tip,Pq);
    var Sq=Rq[0],Tq=Rq[1];
    var Uq=$hs_newMutVarzh($$DataziMap_Tip,Sq);
    var Vq=Uq[0],Wq=Uq[1];
    var Xq=$f(4,function(Yq,Zq,ar,br){
     $M(Yq,function(cr){
      switch(cr.g){
      case 1:
       $M(Zq,function(rr){
	var sr=rr.v[1],tr=rr.v[2],ur=rr.v[3];
	$M(sr,function(vr){
	 var wr=vr.v[0];
	 $$FRPziSodiumziPlain_zdwa11.C([wr,tr,ur,br],function(xr){
	  var yr=xr[0],zr=xr[1];
	  $M(zr,function(Ar){
	   switch(Ar.g){
	   case 1:
	    $M(ar,function(Br){
	     switch(Br.g){
	     case 1:
	      var Qr=$d(1,[$$DataziSequence_Empty,rr,$$DataziSequence_Empty],"sat");
	      var Rr=$d(1,[$$GHCziTuple_Z0T,Qr],"sat");
	      $r([yr,Rr]);break;
	     default:
	      var Cr=$t(function(){
	       var Dr=$d(1,[goog.math.Long.fromBits(1,0)],"sat");
	       $$DataziSequence_zdwsplitAt.C([Dr,Br],function(Er){
		var Fr=Er[1];
		$A(Fr);
	       },[]);
	      },[Br],"sat");
	      var Gr=$d(1,[$$DataziSequence_Empty,rr,Cr],"sat");
	      $$DataziSequence_zdwindex.C([Br,goog.math.Long.fromBits(0,0),Gr,yr],function(Hr){
	       var Ir=Hr[0],Jr=Hr[1];
	       $M(Jr,function(Kr){
		var Lr=Kr.v[1];
		$M(Lr,function(Mr){
		 var Nr=Mr.v[0],Or=Mr.v[1],Pr=Mr.v[2];
		 Xq.J(Nr,Or,Pr,Ir);
		},[Xq,Ir]);
	       },[Xq,Ir]);
	      },[Xq]);
	     }
	    },[Xq,rr,yr]);break;
	   case 2:
	    var Sr=Ar.v[0];
	    var Tr=$d(1,[$$DataziSequence_Empty,rr,ar],"sat");
	    Sr.C([Tr,yr],function(Ur){
	     var Vr=Ur[0],Wr=Ur[1];
	     $M(Wr,function(Xr){
	      var Yr=Xr.v[1];
	      $M(Yr,function(Zr){
	       var as=Zr.v[0],bs=Zr.v[1],cs=Zr.v[2];
	       Xq.J(as,bs,cs,Vr);
	      },[Xq,Vr]);
	     },[Xq,Vr]);
	    },[Xq]);break;
	   }
	  },[ar,Xq,rr,yr]);
	 },[ar,Xq,rr]);
	},[ar,br,Xq,tr,ur,rr]);
       },[ar,br,Xq]);break;
      default:
       var dr=$t(function(){
	var er=$d(1,[goog.math.Long.fromBits(1,0)],"sat");
	$$DataziSequence_zdwsplitAt.C([er,cr],function(fr){
	 var gr=fr[1];
	 $A(gr);
	},[]);
       },[cr],"sat");
       var hr=$d(1,[dr,Zq,ar],"sat");
       $$DataziSequence_zdwindex.C([cr,goog.math.Long.fromBits(0,0),hr,br],function(ir){
	var jr=ir[0],kr=ir[1];
	$M(kr,function(lr){
	 var mr=lr.v[1];
	 $M(mr,function(nr){
	  var or=nr.v[0],pr=nr.v[1],qr=nr.v[2];
	  Xq.J(or,pr,qr,jr);
	 },[jr,Xq]);
	},[jr,Xq]);
       },[Xq]);
      }
     },[Zq,ar,br,Xq]);
    },[],"$wa13");
    var ds=$d(1,[Wq],"sat");
    var es=$d(1,[Tq],"sat");
    var fs=$d(1,[Qq],"sat");
    var gs=$d(1,[Nq],"sat");
    var hs=$d(1,[gs,fs,es,ds],"sat");
    var is=$f(2,function(js,ks){
     Bq.C([js,ks],function(ls){
      var ms=ls[0],ns=ls[1];
      $M(ns,function(os){
       var ps=os.v[0],qs=os.v[1];
       var ss=$hs_writeMutVarzh(Fq,ps,ms);
       var rs=$d(1,[$$GHCziTuple_Z0T,qs],"sat");
       $r([ss,rs]);
      },[Fq,ms]);
     },[Fq]);
    },[Bq,Fq],"sat");
    var ts=$d(2,[is],"sat");
    Xq.C([ts,hs,$$DataziSequence_Empty,Vq],function(us){
     var vs=us[0],ws=us[1];
     $M(ws,function(xs){
      $b($hs_takeMVarzh,[Jq,vs],function(ys){
       var zs=ys[0];
       $r($hs_readMutVarzh(Fq,zs));
      },[Fq]);
     },[Jq,Fq,vs]);
    },[Jq,Fq]);
   },[Jq,Bq,Fq]);
  },[Eq,Bq,Fq]);
 },[Eq,Bq,Fq]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_switch1=$f(4,function(Ls,Ms,Ns,Os){
 var Ps=$t(function(){
  $M(Ls,function(Qs){
   $R(1,[Qs,$$DataziMaybe_Nothing],"BehaviorState");
  },[]);
 },[Ls],"sat");
 var Rs=$hs_newMutVarzh(Ps,Os);
 var Ss=Rs[0],Ts=Rs[1];
 var Us=$f(3,function(Vs,Ws,Xs){
  var Ys=$hs_readMutVarzh(Ts,Xs);
  var Zs=Ys[0],at=Ys[1];
  var bt=$t(function(){
   $M(Vs,function(ft){
    $M(at,function(ct){
     var dt=ct.v[0];
     var et=$d(2,[ft],"sat");
     $R(1,[dt,et],"BehaviorState");
    },[ft]);
   },[at]);
  },[Vs,at],"sat");
  var Et=$hs_writeMutVarzh(Ts,bt,Zs);
  $M(at,function(gt){
   var ht=gt.v[1];
   $M(ht,function(it){
    switch(it.g){
    case 1:
     var jt=$t(function(){
      $M(Ws,function(kt){
       var lt=kt.v[0],mt=kt.v[1],nt=kt.v[2];
       var ot=$t(function(){
	var pt=$f(2,function(qt,rt){
	 var st=$hs_readMutVarzh(Ts,rt);
	 var tt=st[0],ut=st[1];
	 var vt=$t(function(){
	  $M(ut,function(wt){
	   var xt=wt.v[1];
	   $M(xt,function(yt){
	    switch(yt.g){
	    case 1:
	     $A($$DataziMaybe_fromJust1);break;
	    case 2:
	     var zt=yt.v[0];
	     $M(zt,function(At){
	      $R(1,[At,$$DataziMaybe_Nothing],"BehaviorState");
	     },[]);break;
	    }
	   },[]);
	  },[]);
	 },[ut],"sat");
	 var Ct=$hs_writeMutVarzh(Ts,vt,tt);
	 var Bt=$d(1,[$$GHCziTuple_Z0T,qt],"sat");
	 $r([Ct,Bt]);
	},[Ts],"sat");
	$$DataziSequence_filterzusnocTree.J(nt,pt);
       },[Ts,nt],"sat");
       $R(1,[lt,mt,ot],"ReactiveState");
      },[Ts]);
     },[Ts,Ws],"sat");
     var Dt=$d(1,[$$GHCziTuple_Z0T,jt],"sat");
     $r([Et,Dt]);break;
    case 2:
     var Ft=$d(1,[$$GHCziTuple_Z0T,Ws],"sat");
     $r([Et,Ft]);break;
    }
   },[Ts,Et,Ws]);
  },[Ts,Et,Ws]);
 },[Ts],"sat");
 var Gt=$t(function(){
  $$FRPziSodiumziPlain_switch2.J(Ms,$$DataziMaybe_Nothing,$$GHCziTypes_False,Us);
 },[Ms,Us],"sat");
 $$FRPziSodiumziPlain_execute2.C([Gt,Ns,Ss],function(Ht){
  var It=Ht[0],Jt=Ht[1];
  $M(Jt,function(Kt){
   var Lt=Kt.v[0],Mt=Kt.v[1];
   var Nt=$f(1,function(Ot){
    $M(Lt,function(Pt){
     var Qt=Pt.v[0];
     $b($hs_takeMVarzh,[Qt,Ot],function(Rt){
      var St=Rt[0],Tt=Rt[1];
      $M(Tt,function(Ut){
       switch(Ut.g){
       case 1:
	$b($hs_putMVarzh,[Qt,$$DataziMaybe_Nothing,St],function(Vt){
	 $r([Vt,$$GHCziTuple_Z0T]);
	},[]);break;
       case 2:
	var Wt=Ut.v[0];
	Wt.C([St],function(Xt){
	 var Yt=Xt[0];
	 $b($hs_putMVarzh,[Qt,$$DataziMaybe_Nothing,Yt],function(Zt){
	  $r([Zt,$$GHCziTuple_Z0T]);
	 },[]);
	},[Qt]);break;
       }
      },[Qt,St]);
     },[Qt]);
    },[Ot]);
   },[Lt],"sat");
   var au=$f(1,function(bu){
    var cu=$f(1,function(du){
     var eu=$hs_readMutVarzh(Ts,du);
     var fu=eu[0],gu=eu[1];
     var hu=$t(function(){
      $M(gu,function(iu){
       var ju=iu.v[0];
       $A(ju);
      },[]);
     },[gu],"sat");
     $r([fu,hu]);
    },[Ts],"sat");
    $r([bu,cu]);
   },[Ts],"sat");
   var ku=$d(1,[au],"sat");
   $$FRPziSodiumziPlain_finalizzeSample.C([ku,Nt,It],function(lu){
    var mu=lu[0],nu=lu[1];
    var ou=$t(function(){
     $M(nu,function(pu){
      $R(1,[Ms,pu],"Behavior");
     },[Ms]);
    },[Ms,nu],"sat");
    var qu=$d(1,[ou,Mt],"sat");
    $r([mu,qu]);
   },[Ms,Mt]);
  },[Ms,Ts,It]);
 },[Ms,Ts]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_execute3=$f(1,function(ru){
 $M($$FRPziSodiumziPlain_partition,function(su){
  var tu=su.v[1];
  $M(tu,function(uu){
   var vu=uu.v[0];
   var wu=$hs_readMutVarzh(vu,ru);
   var xu=wu[0],yu=wu[1];
   var zu=$hs_readMutVarzh(vu,xu);
   var Au=zu[0],Bu=zu[1];
   var Cu=$t(function(){
    $$GHCziEnum_zdfEnumIntzuzdcsucc.J(Bu);
   },[Bu],"sat");
   var AD=$hs_writeMutVarzh(vu,Cu,Au);
   var Du=$hs_newMVarzh(AD);
   var Eu=Du[0],Fu=Du[1];
   var Gu=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
   var Hu=$d(1,[yu,Gu,$$DataziMap_Tip],"sat");
   $b($hs_putMVarzh,[Fu,Hu,Eu],function(zD){
    var Iu=$hs_newMVarzh(zD);
    var Ju=Iu[0],Ku=Iu[1];
    var Lu=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
    var Mu=$d(1,[Lu,$$DataziMap_Tip,$$GHCziTypes_ZMZN],"sat");
    $b($hs_putMVarzh,[Ku,Mu,Ju],function(yD){
     var Nu=$hs_newMutVarzh($$DataziMaybe_Nothing,yD);
     var Ou=Nu[0];
     var Pu=$hs_newMVarzh(Ou);
     var Qu=Pu[0],Ru=Pu[1];
     var Su=$f(1,function(Tu){
      var Uu=$hs_noDuplicatezh(Tu);
      $k($hs_takeMVarzh,[Ru,Uu]);
     },[Ru],"sat");
     $$GHCziIO_unsafeDupableInterleaveIO.C([Su,Qu],function(Vu){
      var Wu=Vu[0],Xu=Vu[1];
      var Yu=$d(1,[Fu],"a10");
      var Zu=$f(3,function(av,bv,cv){
       var dv=$f(2,function(ev,fv){
	var gv=$t(function(){
	 $M(ev,function(hv){
	  var iv=hv.v[0];
	  $A(iv);
	 },[]);
	},[ev],"iD");
	var jv=$f(1,function(kv){
	 var lv=$hs_getMaskingStatezh(kv);
	 var mv=lv[0],nv=lv[1];
	 var ov=$f(1,function(pv){
	  var qv=$hs_getMaskingStatezh(pv);
	  var rv=qv[0],sv=qv[1];
	  $M(sv,function(tv){
	   switch(tv.toString()){
	   case "0":
	    var Tv=$f(1,function(Uv){
	     $b($hs_takeMVarzh,[Fu,Uv],function(Vv){
	      var Wv=Vv[0],Xv=Vv[1];
	      var Yv=$f(1,function(Zv){
	       $b($hs_putMVarzh,[Fu,Xv,Zv],function(aw){
		$r([aw,$$GHCziTuple_Z0T]);
	       },[]);
	      },[Fu,Xv],"sat");
	      var bw=$f(2,function(w,x){
	       $$ControlziExceptionziBase_finally2.J(Yv,w,x);
	      },[Yv],"sat");
	      var cw=$f(1,function(dw){
	       var ew=$t(function(){
		$M(Xv,function(fw){
		 var gw=fw.v[0],hw=fw.v[1],iw=fw.v[2];
		 $M(gv,function(jw){
		  var kw=jw.v[0];
		  $$FRPziSodiumziPlain_zdwgo2.C([kw,iw],function(lw){
		   $R(1,[gw,hw,lw],"Node");
		  },[gw,hw]);
		 },[iw,gw,hw]);
		},[gv]);
	       },[gv,Xv],"a13");
	       $b($hs_seqzh,[ew,dw],function(mw){
		var nw=mw[0];
		$r([nw,ew]);
	       },[ew]);
	      },[gv,Xv],"sat");
	      var ow=$f(1,function(x){
	       $k($hs_unmaskAsyncExceptionszh,[cw,x]);
	      },[cw],"sat");
	      $b($hs_catchzh,[ow,bw,Wv],function(pw){
	       var qw=pw[0],rw=pw[1];
	       $b($hs_putMVarzh,[Fu,rw,qw],function(sw){
		$r([sw,$$GHCziTuple_Z0T]);
	       },[]);
	      },[Fu]);
	     },[Fu,gv]);
	    },[Fu,gv],"sat");
	    $b($hs_maskAsyncExceptionszh,[Tv,rv],function(tw){
	     var uw=tw[0];
	     $$FRPziSodiumziPlain_touch.C([Xu,uw],function(vw){
	      var ww=vw[0];
	      $r([ww,$$GHCziTuple_Z0T]);
	     },[]);
	    },[Xu]);break;
	   default:
	    $b($hs_takeMVarzh,[Fu,rv],function(uv){
	     var vv=uv[0],wv=uv[1];
	     var xv=$f(1,function(yv){
	      $b($hs_putMVarzh,[Fu,wv,yv],function(zv){
	       $r([zv,$$GHCziTuple_Z0T]);
	      },[]);
	     },[Fu,wv],"sat");
	     var Av=$f(2,function(w,x){
	      $$ControlziExceptionziBase_finally2.J(xv,w,x);
	     },[xv],"sat");
	     var Bv=$f(1,function(Cv){
	      var Dv=$t(function(){
	       $M(wv,function(Ev){
		var Fv=Ev.v[0],Gv=Ev.v[1],Hv=Ev.v[2];
		$M(gv,function(Iv){
		 var Jv=Iv.v[0];
		 $$FRPziSodiumziPlain_zdwgo2.C([Jv,Hv],function(Kv){
		  $R(1,[Fv,Gv,Kv],"Node");
		 },[Fv,Gv]);
		},[Hv,Fv,Gv]);
	       },[gv]);
	      },[gv,wv],"a13");
	      $b($hs_seqzh,[Dv,Cv],function(Lv){
	       var Mv=Lv[0];
	       $r([Mv,Dv]);
	      },[Dv]);
	     },[gv,wv],"sat");
	     $b($hs_catchzh,[Bv,Av,vv],function(Nv){
	      var Ov=Nv[0],Pv=Nv[1];
	      $b($hs_putMVarzh,[Fu,Pv,Ov],function(Sv){
	       $$FRPziSodiumziPlain_touch.C([Xu,Sv],function(Qv){
		var Rv=Qv[0];
		$r([Rv,$$GHCziTuple_Z0T]);
	       },[]);
	      },[Xu]);
	     },[Fu,Xu]);
	    },[Fu,gv,Xu]);
	   }
	  },[Fu,gv,rv,Xu]);
	 },[Fu,gv,Xu],"$j");
	 $M(nv,function(xw){
	  switch(xw.toString()){
	  case "0":
	   var Vw=$f(1,function(Ww){
	    $b($hs_takeMVarzh,[Ku,Ww],function(Xw){
	     var Yw=Xw[0],Zw=Xw[1];
	     var ax=$f(1,function(bx){
	      $b($hs_putMVarzh,[Ku,Zw,bx],function(cx){
	       $r([cx,$$GHCziTuple_Z0T]);
	      },[]);
	     },[Ku,Zw],"sat");
	     var dx=$f(2,function(w,x){
	      $$ControlziExceptionziBase_finally2.J(ax,w,x);
	     },[ax],"sat");
	     var ex=$f(1,function(fx){
	      var gx=$t(function(){
	       $M(Zw,function(hx){
		var ix=hx.v[0],jx=hx.v[1],kx=hx.v[2];
		$M(gv,function(lx){
		 var mx=lx.v[0];
		 $$FRPziSodiumziPlain_zdwgo2.C([mx,jx],function(nx){
		  $R(1,[ix,nx,kx],"Observer");
		 },[ix,kx]);
		},[jx,ix,kx]);
	       },[gv]);
	      },[gv,Zw],"a13");
	      $b($hs_seqzh,[gx,fx],function(ox){
	       var px=ox[0];
	       $r([px,gx]);
	      },[gx]);
	     },[gv,Zw],"sat");
	     var qx=$f(1,function(x){
	      $k($hs_unmaskAsyncExceptionszh,[ex,x]);
	     },[ex],"sat");
	     $b($hs_catchzh,[qx,dx,Yw],function(rx){
	      var sx=rx[0],tx=rx[1];
	      $b($hs_putMVarzh,[Ku,tx,sx],function(ux){
	       $r([ux,$$GHCziTuple_Z0T]);
	      },[]);
	     },[Ku]);
	    },[Ku,gv]);
	   },[Ku,gv],"sat");
	   $b($hs_maskAsyncExceptionszh,[Vw,mv],function(vx){
	    var wx=vx[0];
	    ov.J(wx);
	   },[Fu,gv,Xu,ov]);break;
	  default:
	   $b($hs_takeMVarzh,[Ku,mv],function(yw){
	    var zw=yw[0],Aw=yw[1];
	    var Bw=$f(1,function(Cw){
	     $b($hs_putMVarzh,[Ku,Aw,Cw],function(Dw){
	      $r([Dw,$$GHCziTuple_Z0T]);
	     },[]);
	    },[Ku,Aw],"sat");
	    var Ew=$f(2,function(w,x){
	     $$ControlziExceptionziBase_finally2.J(Bw,w,x);
	    },[Bw],"sat");
	    var Fw=$f(1,function(Gw){
	     var Hw=$t(function(){
	      $M(Aw,function(Iw){
	       var Jw=Iw.v[0],Kw=Iw.v[1],Lw=Iw.v[2];
	       $M(gv,function(Mw){
		var Nw=Mw.v[0];
		$$FRPziSodiumziPlain_zdwgo2.C([Nw,Kw],function(Ow){
		 $R(1,[Jw,Ow,Lw],"Observer");
		},[Jw,Lw]);
	       },[Kw,Jw,Lw]);
	      },[gv]);
	     },[gv,Aw],"a13");
	     $b($hs_seqzh,[Hw,Gw],function(Pw){
	      var Qw=Pw[0];
	      $r([Qw,Hw]);
	     },[Hw]);
	    },[gv,Aw],"sat");
	    $b($hs_catchzh,[Fw,Ew,zw],function(Rw){
	     var Sw=Rw[0],Tw=Rw[1];
	     $b($hs_putMVarzh,[Ku,Tw,Sw],function(Uw){
	      ov.J(Uw);
	     },[Fu,gv,Xu,ov]);
	    },[Fu,Ku,gv,Xu,ov]);
	   },[Fu,Ku,gv,Xu,ov]);
	  }
	 },[Fu,Ku,gv,Xu,ov,mv]);
	},[Fu,Ku,gv,Xu],"sat");
	var xx=$t(function(){
	 $M(ev,function(yx){
	  var zx=yx.v[2];
	  $$GHCziList_reverse1.J(zx,$$GHCziTypes_ZMZN);
	 },[]);
	},[ev],"sat");
	var Ax=$d(1,[xx,jv,gv],"sat");
	var Bx=$t(function(){
	 $M(gv,function(Cx){
	  var Dx=Cx.v[0];
	  $M(Dx,function(Ex){
	   switch(Ex.toString()){
	   case "9223372036854775807":
	    $A($$GHCziInt_zdfEnumInt9);break;
	   default:
	    $M(ev,function(Fx){
	     var Gx=Fx.v[1],Hx=Fx.v[2];
	     $$FRPziSodiumziPlain_zdsinsertzugo2.C([Cx,cv,Gx],function(Ix){
	      var Kx=Ex.add(goog.math.Long.fromBits(1,0));
	      var Jx=$d(1,[Kx],"sat");
	      $R(1,[Jx,Ix,Hx],"Observer");
	     },[Ex,Hx]);
	    },[Cx,cv,Ex]);
	   }
	  },[ev,Cx,cv]);
	 },[ev,cv]);
	},[ev,gv,cv],"sat");
	var Lx=$d(1,[Bx,Ax],"sat");
	$r([fv,Lx]);
       },[Fu,Ku,cv,Xu],"a11");
       var Mx=$f(2,function(Nx,Ox){
	var Px=$hs_getMaskingStatezh(Ox);
	var Qx=Px[0],Rx=Px[1];
	var Sx=$f(5,function(Tx,Ux,Vx,Wx,Xx){
	 var Yx=$f(3,function(Zx,ay,by){
	  $b(function(){
	   $M(bv,function(xy){
	    switch(xy.g){
	    case 1:
	     var yy=$f(2,function(zy,Ay){
	      var By=$d(1,[$$GHCziTuple_Z0T,zy],"sat");
	      $r([Ay,By]);
	     },[],"a12");
	     var Cy=$f(1,function(Dy){
	      $M(Dy,function(Ey){
	       switch(Ey.g){
	       case 1:
		$A(yy);break;
	       case 2:
		var Fy=Ey.v[0],Gy=Ey.v[1];
		var Hy=$t(function(){
		 cv.J(Fy);
		},[cv,Fy],"rma1");
		var Iy=$t(function(){
		 Cy.J(Gy);
		},[Gy,Cy],"ys1");
		var Jy=$f(2,function(Ky,Ly){
		 Hy.C([Ky,Ly],function(My){
		  var Ny=My[0],Oy=My[1];
		  $M(Oy,function(Py){
		   var Qy=Py.v[1];
		   Iy.J(Qy,Ny);
		  },[Iy,Ny]);
		 },[Iy]);
		},[Hy,Iy],"sat");
		$A(Jy);break;
	       }
	      },[cv,yy,Cy]);
	     },[cv,yy],"go");
	     Cy.J(Ux);break;
	    case 2:
	     var Ry=$f(2,function(Sy,Ty){
	      var Uy=$d(1,[$$GHCziTuple_Z0T,Sy],"sat");
	      $r([Ty,Uy]);
	     },[],"sat");
	     $A(Ry);break;
	    }
	   },[cv,Ux,ay,by,Zx,Vx]);
	  },[],function(cy){
	   $M(ay,function(dy){
	    switch(dy.g){
	    case 1:
	     cy.C([by,Zx],function(ey){
	      var fy=ey[0],gy=ey[1];
	      $M(gy,function(hy){
	       var iy=hy.v[1];
	       var jy=$d(1,[Vx,iy],"sat");
	       $r([fy,jy]);
	      },[fy,Vx]);
	     },[Vx]);break;
	    case 2:
	     $M(by,function(ky){
	      var ly=ky.v[1];
	      $M(ly,function(my){
	       var ny=my.v[1];
	       $M(ny,function(oy){
		var py=oy.v[0];
		var wy=$hs_writeMutVarzh(py,$$GHCziTypes_True,Zx);
		cy.C([ky,wy],function(qy){
		 var ry=qy[0],sy=qy[1];
		 $M(sy,function(ty){
		  var uy=ty.v[1];
		  var vy=$d(1,[Vx,uy],"sat");
		  $r([ry,vy]);
		 },[Vx,ry]);
		},[Vx]);
	       },[cy,Zx,Vx,ky]);
	      },[cy,Zx,Vx,ky]);
	     },[cy,Zx,Vx]);break;
	    }
	   },[cy,by,Zx,Vx]);
	  },[ay,by,Zx,Vx]);
	 },[cv,bv,Ux,Vx],"$w$j1");
	 $M(av,function(Vy){
	  switch(Vy.g){
	  case 1:
	   Yx.J(Tx,$$GHCziTypes_False,Xx);break;
	  case 2:
	   var Wy=Vy.v[0];
	   $$FRPziSodiumziPlain_linkNode1.C([Yu,Wx,Wy,Tx],function(Xy){
	    var Yy=Xy[0],Zy=Xy[1];
	    Yx.J(Yy,Zy,Xx);
	   },[cv,bv,Ux,Vx,Yx,Xx]);break;
	  }
	 },[Yu,cv,bv,Ux,Vx,Yx,Tx,Xx,Wx]);
	},[Yu,cv,bv,av],"$w$j");
	$M(Rx,function(az){
	 switch(az.toString()){
	 case "0":
	  var Ez=$f(1,function(Fz){
	   $b($hs_takeMVarzh,[Ku,Fz],function(Gz){
	    var Hz=Gz[0],Iz=Gz[1];
	    var Jz=$f(1,function(Kz){
	     $b($hs_putMVarzh,[Ku,Iz,Kz],function(Lz){
	      $r([Lz,$$GHCziTuple_Z0T]);
	     },[]);
	    },[Ku,Iz],"sat");
	    var Mz=$f(2,function(w,x){
	     $$ControlziExceptionziBase_finally2.J(Jz,w,x);
	    },[Jz],"sat");
	    var Nz=$f(1,function(Oz){
	     dv.C([Iz,Oz],function(Pz){
	      var Qz=Pz[0],Rz=Pz[1];
	      $M(Rz,function(Sz){
	       var Tz=Sz.v[0],Uz=Sz.v[1];
	       $b($hs_seqzh,[Tz,Qz],function(Vz){
		var Wz=Vz[0];
		var Xz=$d(1,[Tz,Uz],"sat");
		$r([Wz,Xz]);
	       },[Tz,Uz]);
	      },[Qz]);
	     },[]);
	    },[dv,Iz],"sat");
	    var Yz=$f(1,function(x){
	     $k($hs_unmaskAsyncExceptionszh,[Nz,x]);
	    },[Nz],"sat");
	    $b($hs_catchzh,[Yz,Mz,Hz],function(Zz){
	     var aA=Zz[0],bA=Zz[1];
	     $M(bA,function(cA){
	      var dA=cA.v[0],eA=cA.v[1];
	      $b($hs_putMVarzh,[Ku,dA,aA],function(fA){
	       $r([fA,eA]);
	      },[eA]);
	     },[Ku,aA]);
	    },[Ku]);
	   },[Ku,dv]);
	  },[Ku,dv],"sat");
	  $b($hs_maskAsyncExceptionszh,[Ez,Qx],function(gA){
	   var hA=gA[0],iA=gA[1];
	   $M(iA,function(jA){
	    var kA=jA.v[0],lA=jA.v[1],mA=jA.v[2];
	    Sx.J(hA,kA,lA,mA,Nx);
	   },[Yu,cv,bv,av,Sx,Nx,hA]);
	  },[Yu,cv,bv,av,Sx,Nx]);break;
	 default:
	  $b($hs_takeMVarzh,[Ku,Qx],function(bz){
	   var cz=bz[0],dz=bz[1];
	   var ez=$f(1,function(fz){
	    $b($hs_putMVarzh,[Ku,dz,fz],function(gz){
	     $r([gz,$$GHCziTuple_Z0T]);
	    },[]);
	   },[Ku,dz],"sat");
	   var hz=$f(2,function(w,x){
	    $$ControlziExceptionziBase_finally2.J(ez,w,x);
	   },[ez],"sat");
	   var iz=$f(1,function(jz){
	    dv.C([dz,jz],function(kz){
	     var lz=kz[0],mz=kz[1];
	     $M(mz,function(nz){
	      var oz=nz.v[0],pz=nz.v[1];
	      $b($hs_seqzh,[oz,lz],function(qz){
	       var rz=qz[0];
	       var sz=$d(1,[oz,pz],"sat");
	       $r([rz,sz]);
	      },[oz,pz]);
	     },[lz]);
	    },[]);
	   },[dv,dz],"sat");
	   $b($hs_catchzh,[iz,hz,cz],function(tz){
	    var uz=tz[0],vz=tz[1];
	    $M(vz,function(wz){
	     var xz=wz.v[0],yz=wz.v[1];
	     $b($hs_putMVarzh,[Ku,xz,uz],function(Dz){
	      $M(yz,function(zz){
	       var Az=zz.v[0],Bz=zz.v[1],Cz=zz.v[2];
	       Sx.J(Dz,Az,Bz,Cz,Nx);
	      },[Yu,cv,bv,av,Sx,Dz,Nx]);
	     },[Yu,cv,bv,av,Sx,yz,Nx]);
	    },[Ku,Yu,cv,bv,av,Sx,uz,Nx]);
	   },[Ku,Yu,cv,bv,av,Sx,Nx]);
	  },[Ku,Yu,cv,dv,bv,av,Sx,Nx]);
	 }
	},[Ku,Yu,cv,dv,bv,av,Sx,Qx,Nx]);
       },[Ku,Yu,cv,dv,bv,av],"sat");
       $A(Mx);
      },[Fu,Ku,Yu,Xu],"sat");
      $$FRPziSodiumziPlain_wrap.C([Zu,Wu],function(nA){
       var oA=nA[0],pA=nA[1];
       $b($hs_putMVarzh,[Ru,pA,oA],function(xD){
	var qA=$f(3,function(rA,sA,tA){
	 $b($hs_seqzh,[rA,tA],function(uA){
	  var vA=uA[0];
	  var wA=$hs_getMaskingStatezh(vA);
	  var xA=wA[0],yA=wA[1];
	  var zA=$f(4,function(AA,BA,CA,DA){
	   var EA=$f(2,function(FA,GA){
	    var HA=$f(2,function(IA,JA){
	     var KA=$d(1,[$$GHCziTuple_Z0T,IA],"sat");
	     $r([JA,KA]);
	    },[],"a14");
	    var LA=$f(1,function(MA){
	     $M(MA,function(NA){
	      switch(NA.g){
	      case 1:
	       $A(HA);break;
	      case 2:
	       var OA=NA.v[0],PA=NA.v[1];
	       $M(OA,function(QA){
		var RA=QA.v[1];
		var SA=$t(function(){
		 RA.J(rA);
		},[rA,RA],"rma");
		var TA=$t(function(){
		 LA.J(PA);
		},[PA,LA],"k");
		var UA=$f(2,function(VA,WA){
		 SA.C([VA,WA],function(XA){
		  var YA=XA[0],ZA=XA[1];
		  $M(ZA,function(aB){
		   var bB=aB.v[1];
		   TA.J(bB,YA);
		  },[TA,YA]);
		 },[TA]);
		},[SA,TA],"sat");
		$A(UA);
	       },[rA,PA,LA]);break;
	      }
	     },[rA,HA,LA]);
	    },[rA,HA],"go");
	    $$DataziMap_toAscList.C([BA],function(cB){
	     LA.J(cB,GA,FA);
	    },[LA,GA,FA]);
	   },[rA,BA],"$w$j1");
	   $M(CA,function(dB){
	    switch(dB.g){
	    case 1:
	     var eB=$t(function(){
	      $M(DA,function(fB){
	       var gB=fB.v[0],hB=fB.v[1],iB=fB.v[2];
	       var jB=$t(function(){
		var kB=$f(2,function(lB,mB){
		 var nB=$hs_getMaskingStatezh(mB);
		 var oB=nB[0],pB=nB[1];
		 $M(pB,function(qB){
		  switch(qB.toString()){
		  case "0":
		   var LB=$f(1,function(MB){
		    $b($hs_takeMVarzh,[Ku,MB],function(NB){
		     var OB=NB[0],PB=NB[1];
		     var QB=$f(1,function(RB){
		      $b($hs_putMVarzh,[Ku,PB,RB],function(SB){
		       $r([SB,$$GHCziTuple_Z0T]);
		      },[]);
		     },[Ku,PB],"sat");
		     var TB=$f(2,function(w,x){
		      $$ControlziExceptionziBase_finally2.J(QB,w,x);
		     },[QB],"sat");
		     var UB=$f(1,function(VB){
		      var WB=$t(function(){
		       $M(PB,function(XB){
			var YB=XB.v[0],ZB=XB.v[1];
			$R(1,[YB,ZB,$$GHCziTypes_ZMZN],"Observer");
		       },[]);
		      },[PB],"a15");
		      $b($hs_seqzh,[WB,VB],function(aC){
		       var bC=aC[0];
		       $r([bC,WB]);
		      },[WB]);
		     },[PB],"sat");
		     var cC=$f(1,function(x){
		      $k($hs_unmaskAsyncExceptionszh,[UB,x]);
		     },[UB],"sat");
		     $b($hs_catchzh,[cC,TB,OB],function(dC){
		      var eC=dC[0],fC=dC[1];
		      $b($hs_putMVarzh,[Ku,fC,eC],function(gC){
		       $r([gC,$$GHCziTuple_Z0T]);
		      },[]);
		     },[Ku]);
		    },[Ku]);
		   },[Ku],"sat");
		   $b($hs_maskAsyncExceptionszh,[LB,oB],function(hC){
		    var iC=hC[0],jC=hC[1];
		    var kC=$d(1,[jC,lB],"sat");
		    $r([iC,kC]);
		   },[lB]);break;
		  default:
		   $b($hs_takeMVarzh,[Ku,oB],function(rB){
		    var sB=rB[0],tB=rB[1];
		    var uB=$f(1,function(vB){
		     $b($hs_putMVarzh,[Ku,tB,vB],function(wB){
		      $r([wB,$$GHCziTuple_Z0T]);
		     },[]);
		    },[Ku,tB],"sat");
		    var xB=$f(2,function(w,x){
		     $$ControlziExceptionziBase_finally2.J(uB,w,x);
		    },[uB],"sat");
		    var yB=$f(1,function(zB){
		     var AB=$t(function(){
		      $M(tB,function(BB){
		       var CB=BB.v[0],DB=BB.v[1];
		       $R(1,[CB,DB,$$GHCziTypes_ZMZN],"Observer");
		      },[]);
		     },[tB],"a15");
		     $b($hs_seqzh,[AB,zB],function(EB){
		      var FB=EB[0];
		      $r([FB,AB]);
		     },[AB]);
		    },[tB],"sat");
		    $b($hs_catchzh,[yB,xB,sB],function(GB){
		     var HB=GB[0],IB=GB[1];
		     $b($hs_putMVarzh,[Ku,IB,HB],function(KB){
		      var JB=$d(1,[$$GHCziTuple_Z0T,lB],"sat");
		      $r([KB,JB]);
		     },[lB]);
		    },[Ku,lB]);
		   },[Ku,lB]);
		  }
		 },[Ku,oB,lB]);
		},[Ku],"sat");
		$$DataziSequence_filterzusnocTree.J(iB,kB);
	       },[Ku,iB],"sat");
	       $R(1,[gB,hB,jB],"ReactiveState");
	      },[Ku]);
	     },[Ku,DA],"sat");
	     EA.J(AA,eB);break;
	    case 2:
	     EA.J(AA,DA);break;
	    }
	   },[Ku,rA,BA,EA,AA,DA]);
	  },[Ku,rA],"$w$j");
	  $M(yA,function(lC){
	   switch(lC.toString()){
	   case "0":
	    var OC=$f(1,function(PC){
	     $b($hs_takeMVarzh,[Ku,PC],function(QC){
	      var RC=QC[0],SC=QC[1];
	      var TC=$f(1,function(UC){
	       $b($hs_putMVarzh,[Ku,SC,UC],function(VC){
		$r([VC,$$GHCziTuple_Z0T]);
	       },[]);
	      },[Ku,SC],"sat");
	      var WC=$f(2,function(w,x){
	       $$ControlziExceptionziBase_finally2.J(TC,w,x);
	      },[TC],"sat");
	      var XC=$f(1,function(YC){
	       var ZC=$t(function(){
		$M(SC,function(aD){
		 var bD=aD.v[0],cD=aD.v[1],dD=aD.v[2];
		 var eD=$d(2,[rA,dD],"sat");
		 $R(1,[bD,cD,eD],"Observer");
		},[rA]);
	       },[rA,SC],"a15");
	       $b($hs_seqzh,[ZC,YC],function(fD){
		var gD=fD[0];
		var hD=$d(1,[ZC,SC],"sat");
		$r([gD,hD]);
	       },[SC,ZC]);
	      },[rA,SC],"sat");
	      var iD=$f(1,function(x){
	       $k($hs_unmaskAsyncExceptionszh,[XC,x]);
	      },[XC],"sat");
	      $b($hs_catchzh,[iD,WC,RC],function(jD){
	       var kD=jD[0],lD=jD[1];
	       $M(lD,function(mD){
		var nD=mD.v[0],oD=mD.v[1];
		$b($hs_putMVarzh,[Ku,nD,kD],function(pD){
		 $r([pD,oD]);
		},[oD]);
	       },[Ku,kD]);
	      },[Ku]);
	     },[Ku,rA]);
	    },[Ku,rA],"sat");
	    $b($hs_maskAsyncExceptionszh,[OC,xA],function(qD){
	     var rD=qD[0],sD=qD[1];
	     $M(sD,function(tD){
	      var uD=tD.v[1],vD=tD.v[2];
	      zA.J(rD,uD,vD,sA);
	     },[Ku,rA,zA,sA,rD]);
	    },[Ku,rA,zA,sA]);break;
	   default:
	    $b($hs_takeMVarzh,[Ku,xA],function(mC){
	     var nC=mC[0],oC=mC[1];
	     var pC=$f(1,function(qC){
	      $b($hs_putMVarzh,[Ku,oC,qC],function(rC){
	       $r([rC,$$GHCziTuple_Z0T]);
	      },[]);
	     },[Ku,oC],"sat");
	     var sC=$f(2,function(w,x){
	      $$ControlziExceptionziBase_finally2.J(pC,w,x);
	     },[pC],"sat");
	     var tC=$f(1,function(uC){
	      var vC=$t(function(){
	       $M(oC,function(wC){
		var xC=wC.v[0],yC=wC.v[1],zC=wC.v[2];
		var AC=$d(2,[rA,zC],"sat");
		$R(1,[xC,yC,AC],"Observer");
	       },[rA]);
	      },[rA,oC],"a15");
	      $b($hs_seqzh,[vC,uC],function(BC){
	       var CC=BC[0];
	       var DC=$d(1,[vC,oC],"sat");
	       $r([CC,DC]);
	      },[oC,vC]);
	     },[rA,oC],"sat");
	     $b($hs_catchzh,[tC,sC,nC],function(EC){
	      var FC=EC[0],GC=EC[1];
	      $M(GC,function(HC){
	       var IC=HC.v[0],JC=HC.v[1];
	       $b($hs_putMVarzh,[Ku,IC,FC],function(NC){
		$M(JC,function(KC){
		 var LC=KC.v[1],MC=KC.v[2];
		 zA.J(NC,LC,MC,sA);
		},[Ku,rA,zA,NC,sA]);
	       },[Ku,rA,zA,JC,sA]);
	      },[Ku,rA,zA,FC,sA]);
	     },[Ku,rA,zA,sA]);
	    },[Ku,rA,zA,sA]);
	   }
	  },[Ku,rA,zA,xA,sA]);
	 },[Ku,rA,sA]);
	},[Ku],"sat");
	var wD=$d(1,[pA,qA,Yu],"sat");
	$r([xD,wD]);
       },[Ku,Yu,pA]);
      },[Ku,Ru,Yu]);
     },[Fu,Ku,Ru]);
    },[Fu,Ku]);
   },[Fu]);
  },[ru]);
 },[ru]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdwzdczlztzg=$f(2,function(BD,CD){
 $M(BD,function(DD){
  var ED=DD.v[0],FD=DD.v[1];
  $M(CD,function(GD){
   var HD=GD.v[0],ID=GD.v[1];
   var JD=$f(1,function(KD){
    var LD=$f(1,function(MD){
     $$FRPziSodiumziPlain_unSample.C([FD,MD],function(ND){
      var OD=ND[0],PD=ND[1];
      $$FRPziSodiumziPlain_unSample.C([ID,OD],function(QD){
       var RD=QD[0],SD=QD[1];
       var TD=$t(function(){
	PD.J(SD);
       },[SD,PD],"sat");
       $r([RD,TD]);
      },[PD]);
     },[ID]);
    },[FD,ID],"sat");
    $r([KD,LD]);
   },[FD,ID],"sat");
   var UD=$d(1,[JD],"sat");
   var VD=$t(function(){
    var WD=$f(1,function(XD){
     var cE=$hs_noDuplicatezh(XD);
     var YD=$hs_newMutVarzh($$DataziMaybe_Nothing,cE);
     var ZD=YD[0],aE=YD[1];
     var bE=$d(1,[aE],"sat");
     $r([ZD,bE]);
    },[],"sat");
    $$GHCziIO_unsafeDupablePerformIO.J(WD);
   },[],"sat");
   var dE=$f(2,function(eE,fE){
    $$FRPziSodiumziPlain_unSample.C([FD,fE],function(gE){
     var hE=gE[0],iE=gE[1];
     var jE=$hs_newMutVarzh(iE,hE);
     var kE=jE[0],lE=jE[1];
     $$FRPziSodiumziPlain_unSample.C([ID,kE],function(mE){
      var nE=mE[0],oE=mE[1];
      var pE=$hs_newMutVarzh(oE,nE);
      var qE=pE[0],rE=pE[1];
      $M(ED,function(sE){
       var tE=sE.v[0],uE=sE.v[1];
       $M(uE,function(vE){
	var wE=vE.v[0];
	var xE=$hs_readMutVarzh(wE,qE);
	var yE=xE[0],zE=xE[1];
	var AE=$f(3,function(BE,CE,DE){
	 $M(HD,function(EE){
	  var FE=EE.v[0],GE=EE.v[1];
	  $M(GE,function(HE){
	   var IE=HE.v[0];
	   var JE=$hs_readMutVarzh(IE,BE);
	   var KE=JE[0],LE=JE[1];
	   var ME=$f(3,function(NE,OE,PE){
	    $$FRPziSodiumziPlain_execute3.C([NE],function(QE){
	     var RE=QE[0],SE=QE[1];
	     $M(SE,function(TE){
	      var UE=TE.v[0],VE=TE.v[1],WE=TE.v[2];
	      var XE=$t(function(){
	       var YE=$f(3,function(ZE,aF,bF){
		var gF=$hs_writeMutVarzh(lE,ZE,bF);
		var cF=$hs_readMutVarzh(rE,gF);
		var dF=cF[0],eF=cF[1];
		var fF=$t(function(){
		 ZE.J(eF);
		},[ZE,eF],"sat");
		VE.J(fF,aF,dF);
	       },[lE,rE,VE],"sat");
	       var hF=$d(2,[WE],"sat");
	       $$FRPziSodiumziPlain_runListen.J(CE,hF,$$GHCziTypes_False,YE);
	      },[CE,WE,lE,rE,VE],"rma");
	      var iF=$f(2,function(jF,kF){
	       XE.C([jF,kF],function(lF){
		var mF=lF[0],nF=lF[1];
		$M(nF,function(oF){
		 var pF=oF.v[0],qF=oF.v[1];
		 var rF=$f(3,function(sF,tF,uF){
		  var vF=$hs_readMutVarzh(lE,uF);
		  var wF=vF[0],xF=vF[1];
		  var zF=$hs_writeMutVarzh(rE,sF,wF);
		  var yF=$t(function(){
		   xF.J(sF);
		  },[sF,xF],"sat");
		  VE.J(yF,tF,zF);
		 },[lE,rE,VE],"sat");
		 var AF=$d(2,[WE],"sat");
		 $$FRPziSodiumziPlain_runListen.C([OE,AF,$$GHCziTypes_False,rF,qF,mF],function(BF){
		  var CF=BF[0],DF=BF[1];
		  $M(DF,function(EF){
		   var FF=EF.v[0],GF=EF.v[1];
		   var HF=$f(1,function(IF){
		    pF.C([IF],function(JF){
		     var KF=JF[0];
		     FF.J(KF);
		    },[FF]);
		   },[pF,FF],"sat");
		   var LF=$d(1,[HF,GF],"sat");
		   $r([CF,LF]);
		  },[CF,pF]);
		 },[pF]);
		},[WE,lE,rE,VE,OE,mF]);
	       },[WE,lE,rE,VE,OE]);
	      },[WE,lE,rE,VE,XE,OE],"sat");
	      $$FRPziSodiumziPlain_execute2.C([iF,PE,RE],function(MF){
	       var NF=MF[0],OF=MF[1];
	       $M(OF,function(PF){
		var QF=PF.v[0],RF=PF.v[1];
		$$FRPziSodiumziPlain_addCleanupzuListen.J(QF,UE,RF,NF);
	       },[UE,NF]);
	      },[UE]);
	     },[CE,lE,rE,OE,PE,RE]);
	    },[CE,lE,rE,OE,PE]);
	   },[CE,lE,rE],"$w$j1");
	   $M(LE,function(SF){
	    switch(SF.g){
	    case 1:
	     FE.C([DE,KE],function(TF){
	      var UF=TF[0],VF=TF[1];
	      $M(VF,function(WF){
	       var XF=WF.v[0],YF=WF.v[1];
	       var ZF=$d(2,[XF],"sat");
	       var aG=$hs_writeMutVarzh(IE,ZF,UF);
	       ME.J(aG,XF,YF);
	      },[IE,CE,lE,rE,ME,UF]);
	     },[IE,CE,lE,rE,ME]);break;
	    case 2:
	     var bG=SF.v[0];
	     ME.J(KE,bG,DE);break;
	    }
	   },[IE,CE,lE,rE,ME,DE,KE,FE]);
	  },[BE,CE,lE,rE,DE,FE]);
	 },[BE,CE,lE,rE,DE]);
	},[HD,lE,rE],"$w$j");
	$M(zE,function(cG){
	 switch(cG.g){
	 case 1:
	  tE.C([eE,yE],function(dG){
	   var eG=dG[0],fG=dG[1];
	   $M(fG,function(gG){
	    var hG=gG.v[0],iG=gG.v[1];
	    var jG=$d(2,[hG],"sat");
	    var kG=$hs_writeMutVarzh(wE,jG,eG);
	    AE.J(kG,hG,iG);
	   },[wE,HD,lE,rE,AE,eG]);
	  },[wE,HD,lE,rE,AE]);break;
	 case 2:
	  var lG=cG.v[0];
	  AE.J(yE,lG,eE);break;
	 }
	},[wE,HD,lE,rE,AE,eE,yE,tE]);
       },[qE,HD,lE,rE,eE,tE]);
      },[qE,HD,lE,rE,eE]);
     },[ED,HD,lE,eE]);
    },[ID,ED,HD,eE]);
   },[FD,ID,ED,HD],"sat");
   var mG=$d(1,[dE,VD],"sat");
   $R(1,[mG,UD],"Behavior");
  },[FD,ED]);
 },[CD]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdwa8=$f(2,function(cH,dH){
 var eH=$t(function(){
  var fH=$f(1,function(gH){
   var lH=$hs_noDuplicatezh(gH);
   var hH=$hs_newMutVarzh($$DataziMaybe_Nothing,lH);
   var iH=hH[0],jH=hH[1];
   var kH=$d(1,[jH],"sat");
   $r([iH,kH]);
  },[],"sat");
  $$GHCziIO_unsafeDupablePerformIO.J(fH);
 },[],"sat");
 var mH=$f(2,function(nH,oH){
  $M(cH,function(pH){
   var qH=pH.v[0],rH=pH.v[1];
   $M(rH,function(sH){
    var tH=sH.v[0];
    var uH=$hs_readMutVarzh(tH,oH);
    var vH=uH[0],wH=uH[1];
    var xH=$f(3,function(yH,zH,AH){
     $M(dH,function(BH){
      var CH=BH.v[0],DH=BH.v[1];
      $M(DH,function(EH){
       var FH=EH.v[0];
       var GH=$hs_readMutVarzh(FH,yH);
       var HH=GH[0],IH=GH[1];
       var JH=$f(3,function(KH,LH,MH){
	$$FRPziSodiumziPlain_execute3.C([KH],function(NH){
	 var OH=NH[0],PH=NH[1];
	 $M(PH,function(QH){
	  var RH=QH.v[0],SH=QH.v[1],TH=QH.v[2];
	  var UH=$t(function(){
	   var VH=$d(2,[TH],"sat");
	   $$FRPziSodiumziPlain_runListen.J(zH,VH,$$GHCziTypes_False,SH);
	  },[zH,TH,SH],"rma");
	  var WH=$f(2,function(XH,YH){
	   UH.C([XH,YH],function(ZH){
	    var aI=ZH[0],bI=ZH[1];
	    $M(bI,function(cI){
	     var dI=cI.v[0],eI=cI.v[1];
	     var fI=$d(2,[TH],"sat");
	     $$FRPziSodiumziPlain_runListen.C([LH,fI,$$GHCziTypes_False,SH,eI,aI],function(gI){
	      var hI=gI[0],iI=gI[1];
	      $M(iI,function(jI){
	       var kI=jI.v[0],lI=jI.v[1];
	       var mI=$f(1,function(nI){
		dI.C([nI],function(oI){
		 var pI=oI[0];
		 kI.J(pI);
		},[kI]);
	       },[dI,kI],"sat");
	       var qI=$d(1,[mI,lI],"sat");
	       $r([hI,qI]);
	      },[hI,dI]);
	     },[dI]);
	    },[TH,SH,LH,aI]);
	   },[TH,SH,LH]);
	  },[TH,SH,UH,LH],"sat");
	  $$FRPziSodiumziPlain_execute2.C([WH,MH,OH],function(rI){
	   var sI=rI[0],tI=rI[1];
	   $M(tI,function(uI){
	    var vI=uI.v[0],wI=uI.v[1];
	    $$FRPziSodiumziPlain_addCleanupzuListen.J(vI,RH,wI,sI);
	   },[RH,sI]);
	  },[RH]);
	 },[zH,LH,MH,OH]);
	},[zH,LH,MH]);
       },[zH],"$w$j1");
       $M(IH,function(xI){
	switch(xI.g){
	case 1:
	 CH.C([AH,HH],function(yI){
	  var zI=yI[0],AI=yI[1];
	  $M(AI,function(BI){
	   var CI=BI.v[0],DI=BI.v[1];
	   var EI=$d(2,[CI],"sat");
	   var FI=$hs_writeMutVarzh(FH,EI,zI);
	   JH.J(FI,CI,DI);
	  },[FH,zH,JH,zI]);
	 },[FH,zH,JH]);break;
	case 2:
	 var GI=xI.v[0];
	 JH.J(HH,GI,AH);break;
	}
       },[FH,zH,JH,AH,HH,CH]);
      },[yH,zH,AH,CH]);
     },[yH,zH,AH]);
    },[dH],"$w$j");
    $M(wH,function(HI){
     switch(HI.g){
     case 1:
      qH.C([nH,vH],function(II){
       var JI=II[0],KI=II[1];
       $M(KI,function(LI){
	var MI=LI.v[0],NI=LI.v[1];
	var OI=$d(2,[MI],"sat");
	var PI=$hs_writeMutVarzh(tH,OI,JI);
	xH.J(PI,MI,NI);
       },[tH,dH,xH,JI]);
      },[tH,dH,xH]);break;
     case 2:
      var QI=HI.v[0];
      xH.J(vH,QI,nH);break;
     }
    },[tH,dH,xH,nH,vH,qH]);
   },[oH,dH,nH,qH]);
  },[oH,dH,nH]);
 },[cH,dH],"sat");
 $r([mH,eH]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_merge1=$f(2,function(RI,SI){
 $$FRPziSodiumziPlain_zdwa8.C([RI,SI],function(TI){
  var UI=TI[0],VI=TI[1];
  $R(1,[UI,VI],"Event");
 },[]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdwa7=$f(1,function(WI){
 var XI=$t(function(){
  var YI=$f(1,function(ZI){
   var eJ=$hs_noDuplicatezh(ZI);
   var aJ=$hs_newMutVarzh($$DataziMaybe_Nothing,eJ);
   var bJ=aJ[0],cJ=aJ[1];
   var dJ=$d(1,[cJ],"sat");
   $r([bJ,dJ]);
  },[],"sat");
  $$GHCziIO_unsafeDupablePerformIO.J(YI);
 },[],"sat");
 var fJ=$f(2,function(gJ,hJ){
  $$FRPziSodiumziPlain_execute3.C([hJ],function(iJ){
   var jJ=iJ[0],kJ=iJ[1];
   $M(kJ,function(lJ){
    var mJ=lJ.v[0],nJ=lJ.v[1],oJ=lJ.v[2];
    $M(WI,function(pJ){
     var qJ=pJ.v[0],rJ=pJ.v[1];
     $M(rJ,function(sJ){
      var tJ=sJ.v[0];
      var uJ=$hs_readMutVarzh(tJ,jJ);
      var vJ=uJ[0],wJ=uJ[1];
      var xJ=$f(3,function(yJ,zJ,AJ){
       var BJ=$t(function(){
	var CJ=$f(1,function(DJ){
	 $M(DJ,function(EJ){
	  switch(EJ.g){
	  case 1:
	   var FJ=$f(2,function(GJ,HJ){
	    var IJ=$d(1,[$$GHCziTuple_Z0T,GJ],"sat");
	    $r([HJ,IJ]);
	   },[],"sat");
	   $A(FJ);break;
	  case 2:
	   var JJ=EJ.v[0];
	   nJ.J(JJ);break;
	  }
	 },[nJ]);
	},[nJ],"sat");
	var KJ=$d(2,[oJ],"sat");
	$$FRPziSodiumziPlain_runListen.J(zJ,KJ,$$GHCziTypes_False,CJ);
       },[zJ,oJ,nJ],"sat");
       $$FRPziSodiumziPlain_execute2.C([BJ,AJ,yJ],function(LJ){
	var MJ=LJ[0],NJ=LJ[1];
	$M(NJ,function(OJ){
	 var PJ=OJ.v[0],QJ=OJ.v[1];
	 $$FRPziSodiumziPlain_addCleanupzuListen.J(PJ,mJ,QJ,MJ);
	},[mJ,MJ]);
       },[mJ]);
      },[oJ,nJ,mJ],"$w$j");
      $M(wJ,function(RJ){
       switch(RJ.g){
       case 1:
	qJ.C([gJ,vJ],function(SJ){
	 var TJ=SJ[0],UJ=SJ[1];
	 $M(UJ,function(VJ){
	  var WJ=VJ.v[0],XJ=VJ.v[1];
	  var YJ=$d(2,[WJ],"sat");
	  var ZJ=$hs_writeMutVarzh(tJ,YJ,TJ);
	  xJ.J(ZJ,WJ,XJ);
	 },[tJ,oJ,nJ,mJ,xJ,TJ]);
	},[tJ,oJ,nJ,mJ,xJ]);break;
       case 2:
	var aK=RJ.v[0];
	xJ.J(vJ,aK,gJ);break;
       }
      },[tJ,oJ,nJ,mJ,xJ,gJ,vJ,qJ]);
     },[jJ,oJ,nJ,mJ,gJ,qJ]);
    },[jJ,oJ,nJ,mJ,gJ]);
   },[WI,jJ,gJ]);
  },[WI,gJ]);
 },[WI],"sat");
 $r([fJ,XI]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdwa5=$f(3,function(fK,gK,hK){
 var iK=$t(function(){
  var jK=$f(1,function(kK){
   var pK=$hs_noDuplicatezh(kK);
   var lK=$hs_newMutVarzh($$DataziMaybe_Nothing,pK);
   var mK=lK[0],nK=lK[1];
   var oK=$d(1,[nK],"sat");
   $r([mK,oK]);
  },[],"sat");
  $$GHCziIO_unsafeDupablePerformIO.J(jK);
 },[],"sat");
 var qK=$f(2,function(rK,sK){
  $$FRPziSodiumziPlain_execute3.C([sK],function(tK){
   var uK=tK[0],vK=tK[1];
   $M(vK,function(wK){
    var xK=wK.v[0],yK=wK.v[1],zK=wK.v[2];
    $M(hK,function(AK){
     var BK=AK.v[1];
     $M(BK,function(CK){
      var DK=CK.v[0];
      DK.C([uK],function(EK){
       var FK=EK[0],GK=EK[1];
       $$FRPziSodiumziPlain_touch.C([GK,FK],function(HK){
	var IK=HK[0];
	var JK=$f(3,function(KK,LK,MK){
	 GK.C([MK],function(NK){
	  var OK=NK[0],PK=NK[1];
	  var QK=$t(function(){
	   fK.J(KK,PK);
	  },[KK,PK,fK],"sat");
	  yK.C([QK,LK,OK],function(RK){
	   var SK=RK[0],TK=RK[1];
	   $M(TK,function(UK){
	    var VK=UK.v[1];
	    var WK=$d(1,[$$GHCziTuple_Z0T,VK],"sat");
	    $r([SK,WK]);
	   },[SK]);
	  },[]);
	 },[KK,fK,yK,LK]);
	},[GK,fK,yK],"a10");
	var XK=$d(2,[zK],"mMvTarget");
	var YK=$f(2,function(ZK,aL){
	 $M(gK,function(bL){
	  var cL=bL.v[0],dL=bL.v[1];
	  $M(dL,function(eL){
	   var fL=eL.v[0];
	   var gL=$hs_readMutVarzh(fL,aL);
	   var hL=gL[0],iL=gL[1];
	   var jL=$f(3,function(kL,lL,mL){
	    $$FRPziSodiumziPlain_runListen.C([lL,XK,$$GHCziTypes_False,JK,mL,kL],function(nL){
	     var oL=nL[0],pL=nL[1];
	     $M(pL,function(qL){
	      var rL=qL.v[0],sL=qL.v[1];
	      var tL=$f(1,function(uL){
	       rL.C([uL],function(vL){
		var wL=vL[0];
		$$FRPziSodiumziPlain_touch.J(AK,wL);
	       },[AK]);
	      },[rL,AK],"sat");
	      var xL=$d(1,[tL,sL],"sat");
	      $r([oL,xL]);
	     },[oL,AK]);
	    },[AK]);
	   },[JK,XK,AK],"$w$j");
	   $M(iL,function(yL){
	    switch(yL.g){
	    case 1:
	     cL.C([ZK,hL],function(zL){
	      var AL=zL[0],BL=zL[1];
	      $M(BL,function(CL){
	       var DL=CL.v[0],EL=CL.v[1];
	       var FL=$d(2,[DL],"sat");
	       var GL=$hs_writeMutVarzh(fL,FL,AL);
	       jL.J(GL,DL,EL);
	      },[JK,XK,fL,AK,jL,AL]);
	     },[JK,XK,fL,AK,jL]);break;
	    case 2:
	     var HL=yL.v[0];
	     jL.J(hL,HL,ZK);break;
	    }
	   },[JK,XK,fL,AK,jL,ZK,hL,cL]);
	  },[JK,XK,aL,AK,ZK,cL]);
	 },[JK,XK,aL,AK,ZK]);
	},[JK,XK,gK,AK],"sat");
	$$FRPziSodiumziPlain_execute2.C([YK,rK,IK],function(IL){
	 var JL=IL[0],KL=IL[1];
	 $M(KL,function(LL){
	  var ML=LL.v[0],NL=LL.v[1];
	  $$FRPziSodiumziPlain_addCleanupzuListen.J(ML,xK,NL,JL);
	 },[xK,JL]);
	},[xK]);
       },[GK,fK,yK,zK,gK,AK,rK,xK]);
      },[fK,yK,zK,gK,AK,rK,xK]);
     },[uK,fK,yK,zK,gK,AK,rK,xK]);
    },[uK,fK,yK,zK,gK,rK,xK]);
   },[hK,uK,fK,gK,rK]);
  },[hK,fK,gK,rK]);
 },[hK,fK,gK],"sat");
 $r([qK,iK]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_newEvent1=$f(2,function(EU,FU){
 $$FRPziSodiumziPlain_execute3.C([FU],function(GU){
  var HU=GU[0],IU=GU[1];
  $M(IU,function(JU){
   var KU=JU.v[0],LU=JU.v[1];
   var MU=$hs_newMutVarzh($$DataziMaybe_Nothing,HU);
   var NU=MU[0],OU=MU[1];
   var PU=$d(1,[OU],"sat");
   var QU=$f(2,function(RU,SU){
    var TU=$d(1,[KU,RU],"sat");
    $r([SU,TU]);
   },[KU],"sat");
   var UU=$d(1,[QU,PU],"sat");
   var VU=$d(1,[UU,LU],"sat");
   var WU=$d(1,[VU,EU],"sat");
   $r([NU,WU]);
  },[HU,EU]);
 },[EU]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain_zdwa6=$f(1,function(CW){
 var DW=$t(function(){
  var EW=$f(1,function(FW){
   var KW=$hs_noDuplicatezh(FW);
   var GW=$hs_newMutVarzh($$DataziMaybe_Nothing,KW);
   var HW=GW[0],IW=GW[1];
   var JW=$d(1,[IW],"sat");
   $r([HW,JW]);
  },[],"sat");
  $$GHCziIO_unsafeDupablePerformIO.J(EW);
 },[],"sat");
 var LW=$f(2,function(MW,NW){
  $$FRPziSodiumziPlain_execute3.C([NW],function(OW){
   var PW=OW[0],QW=OW[1];
   $M(QW,function(RW){
    var SW=RW.v[0],TW=RW.v[1],UW=RW.v[2];
    var VW=$t(function(){
     var WW=$d(2,[UW],"sat");
     CW.J(WW,$$GHCziTypes_False,TW);
    },[UW,CW,TW],"sat");
    $$FRPziSodiumziPlain_execute2.C([VW,MW,PW],function(XW){
     var YW=XW[0],ZW=XW[1];
     $M(ZW,function(aX){
      var bX=aX.v[0],cX=aX.v[1];
      $$FRPziSodiumziPlain_addCleanupzuListen.J(bX,SW,cX,YW);
     },[SW,YW]);
    },[SW]);
   },[CW,MW,PW]);
  },[CW,MW]);
 },[CW],"sat");
 $r([LW,DW]);
},[],"in `sodium-0.5.0.2:FRP.Sodium.Plain'");
var $$FRPziSodiumziPlain$a=$F(1,function(q13){
 var B13=$hs_noDuplicatezh(q13);
 var r13=$hs_newMVarzh(B13);
 var s13=r13[0],t13=r13[1];
 var u13=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
 var v13=$hs_newMutVarzh(u13,s13);
 var w13=v13[0],x13=v13[1];
 var y13=$d(1,[x13],"sat");
 var z13=$d(1,[t13],"sat");
 var A13=$d(1,[z13,y13],"sat");
 $r([w13,A13]);
},"sat");
var $$FRPziSodiumziPlain$b=$T(function(){
 $$GHCziClasses_zdfOrdZLz2cUZR.J($$GHCziInt_zdfOrdInt64,$$FRPziSodiumziPlain_zdfOrdSequence);
},"at src/FRP/Sodium/Plain.hs:481:43");
var $$FRPziSodiumziPlain$c=$F(2,function(C13,D13){
 var E13=$d(1,[C13],"sat");
 $r([D13,E13]);
},"a");
var $$FRPziSodiumziPlain$d=$F(2,function(F13,G13){
 $b($hs_seqzh,[F13,G13],function(H13){
  var I13=H13[0];
  $r([I13,$$GHCziTuple_Z0T]);
 },[]);
},"a1");
var $$FRPziSodiumziPlain$e=$F(2,function(J13,K13){
 $M(J13,function(L13){
  var M13=L13.v[0];
  M13.C([K13],function(N13){
   var O13=N13[0],P13=N13[1];
   $$FRPziSodiumziPlain_touch.C([L13,O13],function(Q13){
    var R13=Q13[0];
    P13.J(R13);
   },[P13]);
  },[L13]);
 },[K13]);
},"a2");
var $$FRPziSodiumziPlain$f=$F(3,function(S13,T13,U13){
 var V13=$hs_mkWeakzh(S13,S13,T13,U13);
 var W13=V13[0];
 $r([W13,S13]);
},"a3");
var $$FRPziSodiumziPlain$g=$F(3,function(X13,Y13,Z13){
 var a14=$hs_mkWeakzh(X13,X13,Y13,Z13);
 var b14=a14[0];
 $r([b14,X13]);
},"a4");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmouseup2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("mouseup");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmouseup1=$f(4,function(a3,b3,c3,d3){
 var e3=$f(2,function(f3,g3){
  var h3=$d(1,[f3,g3],"sat");
  c3.J(h3);
 },[c3],"sat");
 $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.J(a3,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent,b3,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmouseup2,$$GHCziTypes_False,e3,d3);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousemove2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("mousemove");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousemove1=$f(4,function(y3,z3,A3,B3){
 var C3=$f(2,function(D3,E3){
  var F3=$d(1,[D3,E3],"sat");
  A3.J(F3);
 },[A3],"sat");
 $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.J(y3,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent,z3,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousemove2,$$GHCziTypes_False,C3,B3);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousedown2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("mousedown");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousedown1=$f(4,function(G3,H3,I3,J3){
 var K3=$f(2,function(L3,M3){
  var N3=$d(1,[L3,M3],"sat");
  I3.J(N3);
 },[I3],"sat");
 $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.J(G3,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent,H3,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousedown2,$$GHCziTypes_False,K3,J3);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute2=$f(3,function(w7,x7,y7){
 var z7=$t(function(){
  $$SystemziGlibziUTFString_fromUTF.C([y7],function(A7){
   var B7=$d(1,[x7],"sat");
   var C7=$d(1,[w7],"sat");
   $R(1,[C7,B7,A7],"GError");
  },[w7,x7]);
 },[y7,w7,x7],"sat");
 $$SystemziGlibziGError_throwGError.J(z7);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1=$f(5,function(D7,E7,F7,G7,H7){
 var I7=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),H7);
 var J7=I7[0],K7=I7[1];
 var L7=$hs_unsafeFreezzeByteArrayzh(K7,J7);
 var M7=L7[0],N7=L7[1];
 var R7=$hs_byteArrayContentszh(N7);
 var F8=$hs_writeAddrOffAddrzh(R7,goog.math.Long.fromBits(0,0),null,M7);
 var O7=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(F7);
 },[F7],"a");
 var P7=$t(function(){
  $$SystemziGlibziTypes_toGObject.J(D7,E7);
 },[D7,E7],"a2");
 var Q7=$f(1,function(S7){
  var T7=$f(2,function(U7,V7){
   $M(P7,function(W7){
    var X7=W7.v[0],Y7=W7.v[1];
    $M(U7,function(Z7){
     var a8=Z7.v[0];
     $M(S7,function(b8){
      var c8=b8.v[0];
      var $ff=webkit_dom_element_set_attribute(X7,a8,c8,R7);
      var d8=[V7,$ff];
      var e8=d8[0];
      var f8=$hs_touchzh(Y7,e8);
      $r([f8,$$GHCziTuple_Z0T]);
     },[R7,X7,a8,V7,Y7]);
    },[R7,S7,X7,V7,Y7]);
   },[R7,U7,S7,V7]);
  },[R7,P7,S7],"sat");
  $$ForeignziCziString_withCAString.J(O7,T7);
 },[R7,O7,P7],"sat");
 var g8=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(G7);
 },[G7],"sat");
 $$ForeignziCziString_withCAString.C([g8,Q7,F8],function(h8){
  var i8=h8[0],j8=h8[1];
  var k8=$hs_readAddrOffAddrzh(R7,goog.math.Long.fromBits(0,0),i8);
  var l8=k8[0],m8=k8[1];
  var n8=$hs_eqAddrzh(m8,null);
  switch(n8.g){
  case 1:
   var D8=$hs_plusAddrzh(m8,goog.math.Long.fromBits(0,0));
   var o8=$hs_readWord32OffAddrzh(D8,goog.math.Long.fromBits(0,0),l8);
   var p8=o8[0],q8=o8[1];
   var C8=$hs_plusAddrzh(m8,goog.math.Long.fromBits(4,0));
   var r8=$hs_readInt32OffAddrzh(C8,goog.math.Long.fromBits(0,0),p8);
   var s8=r8[0],t8=r8[1];
   var B8=$hs_plusAddrzh(m8,goog.math.Long.fromBits(8,0));
   var u8=$hs_readAddrOffAddrzh(B8,goog.math.Long.fromBits(0,0),s8);
   var v8=u8[0],w8=u8[1];
   $$ForeignziCziString_zdwa.C([w8,v8],function(x8){
    var y8=x8[0],z8=x8[1];
    var $ff=g_error_free(m8);
    var A8=[y8,$ff];
    $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute2.J(q8,t8,z8);
   },[m8,q8,t8]);break;
  case 2:
   var E8=$hs_touchzh(N7,l8);
   $r([E8,j8]);break;
  }
 },[N7,R7]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziEventM_zdwa8=$f(3,function(u9,v9,w9){
 var x9=$t(function(){
  $M(v9,function(y9){
   var z9=y9.v[1];
   $A(z9);
  },[]);
 },[v9],"sat");
 u9.C([x9],function(A9){
  var B9=A9.v[0],C9=A9.v[1];
  var $ff=webkit_dom_mouse_event_get_client_x(B9);
  var D9=[w9,$ff];
  var E9=D9[0],F9=D9[1];
  var N9=$hs_touchzh(C9,E9);
  var $ff=webkit_dom_mouse_event_get_client_y(B9);
  var G9=[N9,$ff];
  var H9=G9[0],I9=G9[1];
  var M9=$hs_touchzh(C9,H9);
  var J9=$d(1,[I9],"sat");
  var K9=$d(1,[F9],"sat");
  var L9=$d(1,[K9,J9],"sat");
  $r([M9,L9]);
 },[w9]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.EventM'");
var $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeRemoveChild1=$f(5,function(i3,j3,k3,l3,m3){
 var n3=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),m3);
 var o3=n3[0],p3=n3[1];
 var q3=$hs_unsafeFreezzeByteArrayzh(p3,o3);
 var r3=q3[0],s3=q3[1];
 var x3=$hs_byteArrayContentszh(s3);
 var y3=$hs_writeAddrOffAddrzh(x3,goog.math.Long.fromBits(0,0),null,r3);
 $$SystemziGlibziTypes_toGObject.C([i3,k3],function(t3){
  var u3=t3.v[0],v3=t3.v[1];
  var w3=$f(2,function(z3,A3){
   var $ff=webkit_dom_node_remove_child(u3,z3,x3);
   var B3=[y3,$ff];
   var C3=B3[0],D3=B3[1];
   var i4=$hs_touchzh(A3,C3);
   var h4=$hs_touchzh(v3,i4);
   var E3=$hs_readAddrOffAddrzh(x3,goog.math.Long.fromBits(0,0),h4);
   var F3=E3[0],G3=E3[1];
   var H3=$hs_eqAddrzh(G3,null);
   switch(H3.g){
   case 1:
    var X3=$hs_plusAddrzh(G3,goog.math.Long.fromBits(0,0));
    var I3=$hs_readWord32OffAddrzh(X3,goog.math.Long.fromBits(0,0),F3);
    var J3=I3[0],K3=I3[1];
    var W3=$hs_plusAddrzh(G3,goog.math.Long.fromBits(4,0));
    var L3=$hs_readInt32OffAddrzh(W3,goog.math.Long.fromBits(0,0),J3);
    var M3=L3[0],N3=L3[1];
    var V3=$hs_plusAddrzh(G3,goog.math.Long.fromBits(8,0));
    var O3=$hs_readAddrOffAddrzh(V3,goog.math.Long.fromBits(0,0),M3);
    var P3=O3[0],Q3=O3[1];
    $$ForeignziCziString_zdwa.C([Q3,P3],function(R3){
     var S3=R3[0],T3=R3[1];
     var $ff=g_error_free(G3);
     var U3=[S3,$ff];
     $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeAppendChild2.J(K3,N3,T3);
    },[G3,K3,N3]);break;
   case 2:
    var g4=$hs_touchzh(s3,F3);
    var Y3=$hs_eqAddrzh(D3,null);
    switch(Y3.g){
    case 1:
     var Z3=$f(1,function(a4){
      var b4=$d(1,[D3],"sat");
      $r([a4,b4]);
     },[D3],"sat");
     $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkNode1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,Z3,g4],function(c4){
      var d4=c4[0],e4=c4[1];
      var f4=$d(2,[e4],"sat");
      $r([d4,f4]);
     },[]);break;
    case 2:
     $r([g4,$$DataziMaybe_Nothing]);break;
    }break;
   }
  },[s3,x3,u3,y3,v3],"$w$j");
  $M(l3,function(j4){
   switch(j4.g){
   case 1:
    $M($$SystemziGlibziFFI_nullForeignPtr,function(k4){
     var l4=k4.v[0],m4=k4.v[1];
     w3.J(l4,m4);
    },[s3,x3,u3,y3,v3,w3]);break;
   case 2:
    var n4=j4.v[0];
    $$SystemziGlibziTypes_toGObject.C([j3,n4],function(o4){
     var p4=o4.v[0],q4=o4.v[1];
     w3.J(p4,q4);
    },[s3,x3,u3,y3,v3,w3]);break;
   }
  },[s3,x3,u3,y3,v3,w3,j3]);
 },[s3,x3,y3,l3,j3]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Node'");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$k1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2038:1");
var $$GraphicsziUIziGtkziWebKitziTypes_castToElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$X4);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdwcastToElement=$f(2,function(cn,dn){
 cn.C([dn],function(en){
  var fn=$t(function(){
   $M(en,function(gn){
    var hn=gn.v[0];
    $R(1,[hn],"Ptr");
   },[]);
  },[en],"sat");
  $$SystemziGlibziGType_typeInstanceIsA.C([fn,$$GraphicsziUIziGtkziWebKitziTypes_gTypeElement],function(jn){
   switch(jn.g){
   case 1:
    $A($$GraphicsziUIziGtkziWebKitziTypes_castToElement1);break;
   case 2:
    $A(en);break;
   }
  },[en]);
 },[]);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2035:1");
var $$GraphicsziUIziGtkziWebKitziTypes_castToElement=$f(2,function(kn,ln){
 $M(kn,function(mn){
  var nn=mn.v[0];
  $$GraphicsziUIziGtkziWebKitziTypes_zdwcastToElement.J(nn,ln);
 },[ln]);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2035:1");
var $$GraphicsziUIziGtkziWebKitziTypes$k1=$T(function(){
 var $ff=webkit_dom_element_get_type();
 var wH=[$$GHCziPrim_realWorldzh,$ff];
 var xH=wH[1];
 $R(1,[xH],"W64#");
},"a61");
var $$GraphicsziUIziGtkziWebKitziTypes$W4=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Element");
},"lvl123");
var $$GraphicsziUIziGtkziWebKitziTypes$X4=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$W4);
},"lvl124");
var $$Engine_elementPageXY2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Engine.hs:80:5-13");
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_zdwa1=$f(5,function(C,D,E,F,G){
 $M(D,function(H){
  var I=H.v[0],J=H.v[1];
  $M(C,function(K){
   var L=K.v[0],M=K.v[1];
   var $ff=webkit_dom_node_is_equal_node(I,L);
   var N=[G,$ff];
   var O=N[0],P=N[1];
   var u1=$hs_touchzh(M,O);
   var S=$hs_touchzh(J,u1);
   var Q=$hs_narrow32Intzh(P);
   switch(Q.toString()){
   case "0":
    var $ff=webkit_dom_element_get_offset_left(I);
    var T=[S,$ff];
    var U=T[0],V=T[1];
    var t1=$hs_touchzh(J,U);
    var $ff=webkit_dom_element_get_offset_top(I);
    var W=[t1,$ff];
    var X=W[0],Y=W[1];
    var s1=$hs_touchzh(J,X);
    var $ff=webkit_dom_element_get_offset_parent(I);
    var Z=[s1,$ff];
    var a1=Z[0],b1=Z[1];
    var r1=$hs_touchzh(J,a1);
    var c1=$hs_eqAddrzh(b1,null);
    switch(c1.g){
    case 1:
     var d1=$f(1,function(e1){
      var f1=$d(1,[b1],"sat");
      $r([e1,f1]);
     },[b1],"sat");
     $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkElement1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,d1,r1],function(g1){
      var h1=g1[0],i1=g1[1];
      var j1=$t(function(){
       $M(F,function(k1){
	var l1=k1.v[0];
	var m1=l1.add(Y);
	$R(1,[m1],"I#");
       },[Y]);
      },[F,Y],"sat");
      var n1=$t(function(){
       $M(E,function(o1){
	var p1=o1.v[0];
	var q1=p1.add(V);
	$R(1,[q1],"I#");
       },[V]);
      },[E,V],"sat");
      $$Engine_zdwa1.J(K,i1,n1,j1,h1);
     },[E,F,K,V,Y]);break;
    case 2:
     $$GHCziIO_failIO.J($$Engine$a,r1);break;
    }break;
   default:
    var R=$d(1,[E,F],"sat");
    $r([S,R]);
   }
  },[I,G,J,E,F]);
 },[C,G,E,F]);
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_elementPageXY3=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_zdwa3=$f(4,function(P1,Q1,R1,S1){
 $$GraphicsziUIziGtkziWebKitziDOMziEventM_zdwa8.C([P1,R1,S1],function(T1){
  var U1=T1[0],V1=T1[1];
  $M(V1,function(W1){
   var X1=W1.v[0],Y1=W1.v[1];
   $M(Q1,function(Z1){
    var a2=Z1.v[0],b2=Z1.v[1];
    var $ff=webkit_dom_document_get_body(a2);
    var c2=[U1,$ff];
    var d2=c2[0],e2=c2[1];
    var q3=$hs_touchzh(b2,d2);
    var f2=$f(2,function(g2,h2){
     $M(h2,function(i2){
      switch(i2.g){
      case 1:
       $$GHCziIO_failIO.J($$Engine$b,g2);break;
      case 2:
       var j2=i2.v[0];
       $M(j2,function(k2){
	var l2=k2.v[0],m2=k2.v[1];
	var $ff=webkit_dom_element_get_scroll_left(l2);
	var n2=[g2,$ff];
	var o2=n2[0],p2=n2[1];
	var h3=$hs_touchzh(m2,o2);
	var $ff=webkit_dom_element_get_scroll_top(l2);
	var q2=[h3,$ff];
	var r2=q2[0],s2=q2[1];
	var g3=$hs_touchzh(m2,r2);
	var $ff=webkit_dom_document_get_document_element(a2);
	var t2=[g3,$ff];
	var u2=t2[0],v2=t2[1];
	var f3=$hs_touchzh(b2,u2);
	var w2=$f(2,function(x2,y2){
	 $M(y2,function(z2){
	  switch(z2.g){
	  case 1:
	   $$GHCziIO_failIO.J($$Engine$c,x2);break;
	  case 2:
	   var A2=z2.v[0];
	   $M(A2,function(B2){
	    var C2=B2.v[0],D2=B2.v[1];
	    var $ff=webkit_dom_element_get_scroll_left(C2);
	    var E2=[x2,$ff];
	    var F2=E2[0],G2=E2[1];
	    var W2=$hs_touchzh(D2,F2);
	    var $ff=webkit_dom_element_get_scroll_top(C2);
	    var H2=[W2,$ff];
	    var I2=H2[0],J2=H2[1];
	    var V2=$hs_touchzh(D2,I2);
	    var K2=$t(function(){
	     $M(Y1,function(L2){
	      var M2=L2.v[0];
	      var O2=M2.add(s2);
	      var N2=O2.add(J2);
	      $R(1,[N2],"I#");
	     },[s2,J2]);
	    },[Y1,s2,J2],"sat");
	    var P2=$t(function(){
	     $M(X1,function(Q2){
	      var R2=Q2.v[0];
	      var T2=R2.add(p2);
	      var S2=T2.add(G2);
	      $R(1,[S2],"I#");
	     },[p2,G2]);
	    },[X1,p2,G2],"sat");
	    var U2=$d(1,[P2,K2],"sat");
	    $r([V2,U2]);
	   },[x2,X1,p2,Y1,s2]);break;
	  }
	 },[x2,X1,p2,Y1,s2]);
	},[X1,p2,Y1,s2],"$j1");
	var X2=$hs_eqAddrzh(v2,null);
	switch(X2.g){
	case 1:
	 var Y2=$f(1,function(Z2){
	  var a3=$d(1,[v2],"sat");
	  $r([Z2,a3]);
	 },[v2],"sat");
	 $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkElement1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,Y2,f3],function(b3){
	  var c3=b3[0],d3=b3[1];
	  var e3=$d(2,[d3],"sat");
	  w2.J(c3,e3);
	 },[X1,p2,Y1,s2,w2]);break;
	case 2:
	 w2.J(f3,$$DataziMaybe_Nothing);break;
	}
       },[a2,b2,g2,X1,Y1]);break;
      }
     },[a2,b2,g2,X1,Y1]);
    },[a2,b2,X1,Y1],"$j");
    var i3=$hs_eqAddrzh(e2,null);
    switch(i3.g){
    case 1:
     var j3=$f(1,function(k3){
      var l3=$d(1,[e2],"sat");
      $r([k3,l3]);
     },[e2],"sat");
     $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkHTMLElement1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,j3,q3],function(m3){
      var n3=m3[0],o3=m3[1];
      var p3=$d(2,[o3],"sat");
      f2.J(n3,p3);
     },[a2,b2,X1,Y1,f2]);break;
    case 2:
     f2.J(q3,$$DataziMaybe_Nothing);break;
    }
   },[U1,X1,Y1]);
  },[Q1,U1]);
 },[Q1]);
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_zdwa2=$f(6,function(D3,E3,F3,G3,H3,I3){
 $$Engine_zdwa3.C([E3,F3,H3,I3],function(J3){
  var K3=J3[0],L3=J3[1];
  $M(L3,function(M3){
   var N3=M3.v[0],O3=M3.v[1];
   $M(F3,function(P3){
    var Q3=P3.v[0],R3=P3.v[1];
    var $ff=webkit_dom_document_get_body(Q3);
    var S3=[K3,$ff];
    var T3=S3[0],U3=S3[1];
    var m4=$hs_touchzh(R3,T3);
    var V3=$hs_eqAddrzh(U3,null);
    switch(V3.g){
    case 1:
     var W3=$f(1,function(X3){
      var Y3=$d(1,[U3],"sat");
      $r([X3,Y3]);
     },[U3],"sat");
     $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkHTMLElement1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,W3,m4],function(Z3){
      var a4=Z3[0],b4=Z3[1];
      $$GraphicsziUIziGtkziWebKitziTypes_castToElement.C([D3,G3],function(c4){
       $$Engine_zdwa1.C([b4,c4,$$Engine_elementPageXY3,$$Engine_elementPageXY3,a4],function(d4){
	var e4=d4[0],f4=d4[1];
	$M(f4,function(g4){
	 var h4=g4.v[0],i4=g4.v[1];
	 var j4=$t(function(){
	  $$GHCziBase_minusInt.J(O3,i4);
	 },[O3,i4],"sat");
	 var k4=$t(function(){
	  $$GHCziBase_minusInt.J(N3,h4);
	 },[N3,h4],"sat");
	 var l4=$d(1,[k4,j4],"sat");
	 $r([e4,l4]);
	},[e4,N3,O3]);
       },[N3,O3]);
      },[b4,a4,N3,O3]);
     },[D3,G3,N3,O3]);break;
    case 2:
     $$GHCziIO_failIO.C([$$Engine_elementPageXY2,m4],function(n4){
      var o4=n4[0],p4=n4[1];
      $M(p4,function(q4){
       var r4=q4.v[0],s4=q4.v[1];
       var t4=$t(function(){
	$$GHCziBase_minusInt.J(O3,s4);
       },[O3,s4],"sat");
       var u4=$t(function(){
	$$GHCziBase_minusInt.J(N3,r4);
       },[N3,r4],"sat");
       var v4=$d(1,[u4,t4],"sat");
       $r([o4,v4]);
      },[N3,O3,o4]);
     },[N3,O3]);break;
    }
   },[K3,D3,G3,N3,O3]);
  },[F3,K3,D3,G3]);
 },[F3,D3,G3]);
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_toWorld=$f(1,function(F4){
 $M(F4,function(G4){
  var H4=G4.v[0],I4=G4.v[1];
  var J4=$t(function(){
   $M(I4,function(K4){
    var L4=K4.v[0];
    var O4=$hs_int2Doublezh(L4);
    var N4=O4/0.25;
    var M4=1000.0-N4;
    $R(1,[M4],"D#");
   },[]);
  },[I4],"sat");
  var P4=$t(function(){
   $M(H4,function(Q4){
    var R4=Q4.v[0];
    var U4=$hs_int2Doublezh(R4);
    var T4=U4/0.25;
    var S4=T4+ -1400.0;
    $R(1,[S4],"D#");
   },[]);
  },[H4],"sat");
  $R(1,[P4,J4],"(,)");
 },[]);
},[],"at src/Engine.hs:38:1");
var $$Engine_zdwfromWorldRect=$f(4,function(V4,W4,X4,Y4){
 var Z4=$t(function(){
  $M(Y4,function(a5){
   var b5=a5.v[0];
   var g5=b5*0.25;
   var f5=g5*2.0;
   var $ff=rintDouble(f5);
   var c5=[$$GHCziPrim_realWorldzh,$ff];
   var d5=c5[1];
   var e5=$hs_double2Intzh(d5);
   $R(1,[e5],"I#");
  },[]);
 },[Y4],"sat");
 var h5=$t(function(){
  $M(X4,function(i5){
   var j5=i5.v[0];
   var o5=j5*0.25;
   var n5=o5*2.0;
   var $ff=rintDouble(n5);
   var k5=[$$GHCziPrim_realWorldzh,$ff];
   var l5=k5[1];
   var m5=$hs_double2Intzh(l5);
   $R(1,[m5],"I#");
  },[]);
 },[X4],"sat");
 var p5=$d(1,[h5,Z4],"sat");
 var q5=$t(function(){
  $M(W4,function(r5){
   var s5=r5.v[0];
   $M(Y4,function(t5){
    var u5=t5.v[0];
    var A5=s5+u5;
    var z5=1000.0-A5;
    var y5=z5*0.25;
    var $ff=rintDouble(y5);
    var v5=[$$GHCziPrim_realWorldzh,$ff];
    var w5=v5[1];
    var x5=$hs_double2Intzh(w5);
    $R(1,[x5],"I#");
   },[s5]);
  },[Y4]);
 },[W4,Y4],"sat");
 var B5=$t(function(){
  $M(V4,function(C5){
   var D5=C5.v[0];
   $M(X4,function(E5){
    var F5=E5.v[0];
    var L5=D5-F5;
    var K5=L5- -1400.0;
    var J5=K5*0.25;
    var $ff=rintDouble(J5);
    var G5=[$$GHCziPrim_realWorldzh,$ff];
    var H5=G5[1];
    var I5=$hs_double2Intzh(H5);
    $R(1,[I5],"I#");
   },[D5]);
  },[X4]);
 },[V4,X4],"sat");
 var M5=$d(1,[B5,q5],"sat");
 $r([M5,p5]);
},[],"at src/Engine.hs:40:1");
var $$Engine_showAll1=$f(5,function(a6,b6,c6,d6,e6){
 var f6=$f(2,function(g6,h6){
  $M(g6,function(i6){
   switch(i6.g){
   case 1:
    $r([h6,$$GHCziTuple_Z0T]);break;
   case 2:
    var j6=i6.v[0],k6=i6.v[1];
    var l6=$d(2,[j6],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeRemoveChild1.C([a6,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,c6,l6,h6],function(m6){
     var n6=m6[0];
     f6.J(k6,n6);
    },[k6,f6]);break;
   }
  },[h6,a6,c6,f6]);
 },[a6,c6],"a5");
 var o6=$f(2,function(p6,q6){
  $M(p6,function(r6){
   switch(r6.g){
   case 1:
    $r([q6,$$GHCziTuple_Z0T]);break;
   case 2:
    var s6=r6.v[0],t6=r6.v[1];
    var u6=$d(2,[s6],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeRemoveChild1.C([a6,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,c6,u6,q6],function(v6){
     var w6=v6[0];
     o6.J(t6,w6);
    },[t6,o6]);break;
   }
  },[a6,c6,q6,o6]);
 },[a6,c6],"a6");
 var x6=$f(3,function(y6,z6,A6){
  $M(z6,function(B6){
   switch(B6.g){
   case 1:
    $r([A6,$$GHCziTypes_ZMZN]);break;
   case 2:
    var C6=B6.v[0],D6=B6.v[1];
    $M(C6,function(E6){
     var F6=E6.v[0],G6=E6.v[1];
     $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentCreateElement1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,b6,$$Engine$l,A6],function(H6){
      var I6=H6[0],J6=H6[1];
      $M(J6,function(K6){
       switch(K6.g){
       case 1:
	$$GHCziIO_failIO.C([$$Engine$m,I6],function(L6){
	 var M6=L6[0],N6=L6[1];
	 $M(y6,function(O6){
	  switch(O6.toString()){
	  case "9223372036854775807":
	   var U6=$d(2,[N6,$$GHCziTypes_ZMZN],"sat");
	   $r([M6,U6]);break;
	  default:
	   var T6=O6.add(goog.math.Long.fromBits(1,0));
	   x6.C([T6,D6,M6],function(P6){
	    var Q6=P6[0],R6=P6[1];
	    var S6=$d(2,[N6,R6],"sat");
	    $r([Q6,S6]);
	   },[N6]);
	  }
	 },[x6,D6,M6,N6]);
	},[y6,x6,D6]);break;
       case 2:
	var V6=K6.v[0];
	var W6=$t(function(){
	 var X6=$t(function(){
	  $M(V6,function(Y6){
	   var Z6=Y6.v[0];
	   $R(1,[Z6],"Ptr");
	  },[]);
	 },[V6],"sat");
	 $$SystemziGlibziGType_typeInstanceIsA.C([X6,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLElement],function(a7){
	  switch(a7.g){
	  case 1:
	   $A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLElement1);break;
	  case 2:
	   $A(V6);break;
	  }
	 },[V6]);
	},[V6],"elt");
	var b7=$d(1,[y6],"sat");
	$$Engine$j.C([W6,F6,b7,I6],function(c7){
	 var d7=c7[0];
	 var e7=$t(function(){
	  $$Engine$e.J($$GHCziTypes_ZC,G6);
	 },[G6],"sat");
	 $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,W6,$$Engine$d,e7,d7],function(f7){
	  var g7=f7[0];
	  $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,W6,$$Engine$n,$$Engine$o,g7],function(h7){
	   var i7=h7[0];
	   var j7=$d(2,[W6],"sat");
	   $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeAppendChild1.C([a6,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,c6,j7,i7],function(k7){
	    var l7=k7[0];
	    $M(y6,function(m7){
	     switch(m7.toString()){
	     case "9223372036854775807":
	      var s7=$d(2,[W6,$$GHCziTypes_ZMZN],"sat");
	      $r([l7,s7]);break;
	     default:
	      var r7=m7.add(goog.math.Long.fromBits(1,0));
	      x6.C([r7,D6,l7],function(n7){
	       var o7=n7[0],p7=n7[1];
	       var q7=$d(2,[W6,p7],"sat");
	       $r([o7,q7]);
	      },[W6]);
	     }
	    },[x6,D6,W6,l7]);
	   },[y6,x6,D6,W6]);
	  },[a6,c6,y6,x6,D6,W6]);
	 },[a6,c6,y6,x6,D6,W6]);
	},[a6,c6,y6,x6,D6,W6,G6]);break;
       }
      },[a6,c6,I6,y6,x6,D6,F6,G6]);
     },[a6,c6,y6,x6,D6,F6,G6]);
    },[a6,c6,A6,b6,y6,x6,D6]);break;
   }
  },[a6,c6,A6,b6,y6,x6]);
 },[a6,c6,b6],"a7");
 var t7=$f(3,function(u7,v7,w7){
  $M(u7,function(x7){
   switch(x7.g){
   case 1:
    var y7=x7.v[0],z7=x7.v[1];
    t7.C([y7,v7,w7],function(A7){
     var B7=A7[0],C7=A7[1];
     $M(C7,function(D7){
      var E7=D7.v[0],F7=D7.v[1];
      t7.C([z7,F7,B7],function(G7){
       var H7=G7[0],I7=G7[1];
       $M(I7,function(J7){
	var K7=J7.v[0],L7=J7.v[1];
	var M7=$f(1,function(N7){
	 E7.C([N7],function(O7){
	  var P7=O7[0];
	  K7.J(P7);
	 },[K7]);
	},[E7,K7],"sat");
	var Q7=$d(1,[M7,L7],"sat");
	$r([H7,Q7]);
       },[H7,E7]);
      },[E7]);
     },[t7,z7,B7]);
    },[t7,z7]);break;
   case 2:
    var R7=x7.v[0];
    var S7=$hs_newMutVarzh($$GHCziTypes_ZMZN,w7);
    var T7=S7[0],U7=S7[1];
    var V7=$t(function(){
     $M(v7,function(W7){
      var X7=W7.v[0];
      $$GHCziEnum_eftInt.J(X7,goog.math.Long.fromBits(4294967295,2147483647));
     },[]);
    },[v7],"lvl14");
    var Y7=$f(3,function(Z7,a8,b8){
     var c8=$hs_readMutVarzh(U7,b8);
     var d8=c8[0],e8=c8[1];
     $$GHCziList_zdwlen.C([Z7,goog.math.Long.fromBits(0,0)],function(O8){
      var f8=$f(1,function(g8){
       var h8=$t(function(){
	$$GHCziList_zzip.J(Z7,e8);
       },[Z7,e8],"toModify");
       $$GHCziList_foldr2.C([$$Engine$q,$$Engine$r,V7,h8,g8],function(i8){
	var j8=i8[0];
	$M(v7,function(k8){
	 var l8=k8.v[0];
	 var m8=$t(function(){
	  $$GHCziBase_map.J($$Engine$k,h8);
	 },[h8],"keptImgs");
	 $$GHCziList_zdwlen.C([m8,goog.math.Long.fromBits(0,0)],function(w8){
	  $$GHCziList_zdwlen.C([e8,goog.math.Long.fromBits(0,0)],function(x8){
	   var n8=x8.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(n8.g){
	   case 1:
	    $$GHCziList_dropzudropzh.C([x8,Z7],function(o8){
	     var v8=l8.add(w8);
	     x6.C([v8,o8,j8],function(p8){
	      var q8=p8[0],r8=p8[1];
	      var s8=$t(function(){
	       $$GHCziBase_zpzp.C([m8,r8],function(t8){
		$$GHCziList_zzip.J(t8,Z7);
	       },[Z7]);
	      },[Z7,m8,r8],"sat");
	      var u8=$hs_writeMutVarzh(U7,s8,q8);
	      $r([u8,$$GHCziTuple_Z0T]);
	     },[U7,Z7,m8]);
	    },[x6,U7,Z7,m8,l8,w8,j8]);break;
	   case 2:
	    var E8=l8.add(w8);
	    x6.C([E8,Z7,j8],function(y8){
	     var z8=y8[0],A8=y8[1];
	     var B8=$t(function(){
	      $$GHCziBase_zpzp.C([m8,A8],function(C8){
	       $$GHCziList_zzip.J(C8,Z7);
	      },[Z7]);
	     },[Z7,m8,A8],"sat");
	     var D8=$hs_writeMutVarzh(U7,B8,z8);
	     $r([D8,$$GHCziTuple_Z0T]);
	    },[U7,Z7,m8]);break;
	   }
	  },[x6,U7,Z7,m8,l8,w8,j8]);
	 },[x6,U7,Z7,e8,m8,l8,j8]);
	},[x6,U7,Z7,e8,h8,j8]);
       },[x6,v7,U7,Z7,e8,h8]);
      },[x6,v7,V7,U7,Z7,e8],"a10");
      var F8=O8.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(F8.g){
      case 1:
       $$GHCziBase_map.C([$$DataziTuple_fst,e8],function(G8){
	$$GHCziList_dropzudropzh.C([O8,G8],function(H8){
	 o6.C([H8,d8],function(I8){
	  var J8=I8[0];
	  f8.C([J8],function(K8){
	   var L8=K8[0],M8=K8[1];
	   var N8=$d(1,[M8,a8],"sat");
	   $r([L8,N8]);
	  },[a8]);
	 },[f8,a8]);
	},[o6,f8,d8,a8]);
       },[o6,f8,O8,d8,a8]);break;
      case 2:
       $$GHCziBase_map.C([$$DataziTuple_fst,e8],function(P8){
	f6.C([P8,d8],function(Q8){
	 var R8=Q8[0];
	 f8.C([R8],function(S8){
	  var T8=S8[0],U8=S8[1];
	  var V8=$d(1,[U8,a8],"sat");
	  $r([T8,V8]);
	 },[a8]);
	},[f8,a8]);
       },[f6,f8,d8,a8]);break;
      }
     },[f6,o6,x6,v7,V7,U7,Z7,e8,d8,a8]);
    },[f6,o6,x6,v7,V7,U7],"lvl15");
    var W8=$t(function(){
     var X8=$f(3,function(z,A,B){
      $$FRPziSodiumziPlain_switch3.J(R7,z,A,B);
     },[R7],"sat");
     $$FRPziSodiumziPlain_zdwa6.C([X8],function(Y8){
      var Z8=Y8[0],a9=Y8[1];
      $R(1,[Z8,a9],"Event");
     },[]);
    },[R7],"a9");
    var b9=$f(2,function(c9,d9){
     $$FRPziSodiumziPlain_switch2.J(W8,$$DataziMaybe_Nothing,$$GHCziTypes_False,Y7,c9,d9);
    },[Y7,W8],"sat");
    $$FRPziSodiumziPlain_sync1.C([b9,T7],function(e9){
     var f9=e9[0],g9=e9[1];
     var h9=$t(function(){
      $M(v7,function(i9){
       var j9=i9.v[0];
       var k9=goog.math.Long.fromBits(1000,0).add(j9);
       $R(1,[k9],"I#");
      },[]);
     },[v7],"sat");
     var l9=$d(1,[g9,h9],"sat");
     $r([f9,l9]);
    },[v7]);break;
   }
  },[f6,o6,x6,v7,w7,t7]);
 },[f6,o6,x6],"a8");
 t7.C([d6,$$Engine$p,e6],function(m9){
  var n9=m9[0],o9=m9[1];
  $M(o9,function(p9){
   var q9=p9.v[0];
   $r([n9,q9]);
  },[n9]);
 },[]);
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_engine1=$f(5,function(r9,s9,t9,u9,v9){
 $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Engine$s,$$GHCziTypes_True,v9],function(w9){
  var x9=w9[0];
  $$FRPziSodiumziPlain_sync1.C([$$FRPziSodiumziPlain_newEvent1,x9],function(y9){
   var z9=y9[0],A9=y9[1];
   $M(A9,function(B9){
    var C9=B9.v[0],D9=B9.v[1];
    var E9=$hs_newMutVarzh($$Engine_Up,z9);
    var F9=E9[0],G9=E9[1];
    var H9=$f(2,function(I9,J9){
     $$Engine_zdwa2.C([r9,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent1,s9,t9,I9,J9],function(K9){
      var L9=K9[0],M9=K9[1];
      var N9=$hs_readMutVarzh(G9,L9);
      var O9=N9[0],P9=N9[1];
      $M(P9,function(Q9){
       switch(Q9.g){
       case 1:
	var U9=$hs_writeMutVarzh(G9,$$Engine_Down,O9);
	var R9=$t(function(){
	 var S9=$t(function(){
	  $$Engine_toWorld.J(M9);
	 },[M9],"sat");
	 var T9=$d(1,[S9],"sat");
	 D9.J(T9);
	},[M9,D9],"sat");
	$$FRPziSodiumziPlain_sync1.J(R9,U9);break;
       case 2:
	$r([O9,$$GHCziTuple_Z0T]);break;
       }
      },[G9,O9,M9,D9]);
     },[G9,D9]);
    },[r9,t9,s9,G9,D9],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousedown1.C([r9,t9,H9,F9],function(V9){
     var W9=V9[0];
     var X9=$f(2,function(Y9,Z9){
      $$Engine_zdwa2.C([r9,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent1,s9,t9,Y9,Z9],function(aa){
       var ba=aa[0],ca=aa[1];
       var da=$t(function(){
	var ea=$t(function(){
	 $$Engine_toWorld.J(ca);
	},[ca],"sat");
	var fa=$d(2,[ea],"sat");
	D9.J(fa);
       },[D9,ca],"sat");
       $$FRPziSodiumziPlain_sync1.J(da,ba);
      },[D9]);
     },[r9,t9,s9,D9],"sat");
     $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousemove1.C([r9,t9,X9,W9],function(ga){
      var ha=ga[0];
      var ia=$f(2,function(ja,ka){
       $$Engine_zdwa2.C([r9,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent1,s9,t9,ja,ka],function(la){
	var ma=la[0],na=la[1];
	var oa=$hs_readMutVarzh(G9,ma);
	var pa=oa[0],qa=oa[1];
	$M(qa,function(ra){
	 switch(ra.g){
	 case 1:
	  $r([pa,$$GHCziTuple_Z0T]);break;
	 case 2:
	  var va=$hs_writeMutVarzh(G9,$$Engine_Up,pa);
	  var sa=$t(function(){
	   var ta=$t(function(){
	    $$Engine_toWorld.J(na);
	   },[na],"sat");
	   var ua=$d(3,[ta],"sat");
	   D9.J(ua);
	  },[D9,na],"sat");
	  $$FRPziSodiumziPlain_sync1.J(sa,va);break;
	 }
	},[G9,D9,pa,na]);
       },[G9,D9]);
      },[r9,t9,s9,G9,D9],"sat");
      $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmouseup1.C([r9,t9,ia,ha],function(wa){
       var xa=wa[0];
       var ya=$t(function(){
	u9.J(C9);
       },[C9,u9],"sat");
       $$FRPziSodiumziPlain_sync1.C([ya,xa],function(za){
	var Aa=za[0],Ba=za[1];
	$$Engine_showAll1.J(r9,s9,t9,Ba,Aa);
       },[r9,t9,s9]);
      },[r9,t9,s9,C9,u9]);
     },[r9,t9,s9,G9,D9,C9,u9]);
    },[r9,t9,s9,G9,D9,C9,u9]);
   },[z9,r9,t9,s9,u9]);
  },[r9,t9,s9,u9]);
 },[r9,t9,s9,u9]);
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_Up=$D(1,function(){
 $r([]);
},"at src/Engine.hs:106:20");
var $$Engine_Down=$D(2,function(){
 $r([]);
},"at src/Engine.hs:106:25");
var $$Engine$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Engine.hs:90:17-27");
},"a");
var $$Engine$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Engine.hs:69:9-17");
},"a1");
var $$Engine$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Engine.hs:72:9-19");
},"a2");
var $$Engine$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("src");
},"lvl");
var $$Engine$e=$F(2,function(Ca,Da){
 $$GHCziCString_unpackFoldrCStringzh.J("http://ghcjs.github.com/",Ca,Da);
},"lvl1");
var $$Engine$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("style");
},"lvl2");
var $$Engine$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("width");
},"lvl3");
var $$Engine$h=$T(function(){
 $$GHCziCString_unpackCStringzh.J("height");
},"lvl4");
var $$Engine$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("-webkit-touch-callout:none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none");
},"lvl5");
var $$Engine$j=$F(4,function(Ea,Fa,Ga,Ha){
 var Ia=$t(function(){
  $M(Fa,function(Ja){
   var Ka=Ja.v[0],La=Ja.v[1];
   $M(Ka,function(Ma){
    var Na=Ma.v[0],Oa=Ma.v[1];
    $M(La,function(Pa){
     var Qa=Pa.v[0],Ra=Pa.v[1];
     $$Engine_zdwfromWorldRect.C([Na,Oa,Qa,Ra],function(Sa){
      var Ta=Sa[0],Ua=Sa[1];
      $M(Ua,function(Va){
       var Wa=Va.v[0],Xa=Va.v[1];
       $R(1,[Ta,Wa,Xa],"(,,)");
      },[Ta]);
     },[]);
    },[Na,Oa]);
   },[La]);
  },[]);
 },[Fa],"ds");
 var Ya=$t(function(){
  $M(Ia,function(Za){
   var ab=Za.v[0];
   $M(ab,function(bb){
    var cb=bb.v[0],db=bb.v[1];
    var eb=$t(function(){
     $M(db,function(fb){
      var gb=fb.v[0];
      var hb=$t(function(){
       var ib=$t(function(){
	$M(cb,function(jb){
	 var kb=jb.v[0];
	 var lb=$t(function(){
	  var mb=$t(function(){
	   $M(Ga,function(nb){
	    var ob=nb.v[0];
	    $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),ob,$$GHCziTypes_ZMZN],function(pb){
	     $$GHCziBase_zpzp.J(pb,$$Engine$i);
	    },[]);
	   },[]);
	  },[Ga],"sat");
	  $$GHCziCString_unpackAppendCStringzh.J("px;zIndex:",mb);
	 },[Ga],"sat");
	 $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),kb,$$GHCziTypes_ZMZN],function(qb){
	  $$GHCziBase_zpzp.J(qb,lb);
	 },[lb]);
	},[Ga]);
       },[cb,Ga],"sat");
       $$GHCziCString_unpackAppendCStringzh.J("px;left:",ib);
      },[cb,Ga],"sat");
      $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),gb,$$GHCziTypes_ZMZN],function(rb){
       $$GHCziBase_zpzp.J(rb,hb);
      },[hb]);
     },[cb,Ga]);
    },[db,cb,Ga],"sat");
    $$GHCziCString_unpackAppendCStringzh.J("position:absolute;top:",eb);
   },[Ga]);
  },[Ga]);
 },[Ia,Ga],"sat");
 $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,Ea,$$Engine$f,Ya,Ha],function(sb){
  var tb=sb[0];
  var ub=$t(function(){
   $M(Ia,function(vb){
    var wb=vb.v[1];
    $M(wb,function(xb){
     var yb=xb.v[0];
     $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),yb,$$GHCziTypes_ZMZN);
    },[]);
   },[]);
  },[Ia],"sat");
  $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,Ea,$$Engine$g,ub,tb],function(zb){
   var Ab=zb[0];
   var Bb=$t(function(){
    $M(Ia,function(Cb){
     var Db=Cb.v[2];
     $M(Db,function(Eb){
      var Fb=Eb.v[0];
      $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),Fb,$$GHCziTypes_ZMZN);
     },[]);
    },[]);
   },[Ia],"sat");
   $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,Ea,$$Engine$h,Bb,Ab);
  },[Ia,Ea]);
 },[Ia,Ea]);
},"a3");
var $$Engine$k=$F(1,function(Gb){
 $M(Gb,function(Hb){
  var Ib=Hb.v[1];
  $M(Ib,function(Jb){
   var Kb=Jb.v[0];
   $A(Kb);
  },[]);
 },[]);
},"lvl6");
var $$Engine$l=$T(function(){
 $$GHCziCString_unpackCStringzh.J("img");
},"lvl7");
var $$Engine$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Engine.hs:183:25-32");
},"a4");
var $$Engine$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ondragstart");
},"lvl8");
var $$Engine$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("return false");
},"lvl9");
var $$Engine$p=$D(1,function(){
 $r([goog.math.Long.fromBits(4293967296,4294967295)]);
},"lvl10");
var $$Engine$q=$F(4,function(Lb,Mb,Nb,Ob){
 $M(Mb,function(Pb){
  var Qb=Pb.v[0],Rb=Pb.v[1];
  $M(Rb,function(Sb){
   var Tb=Sb.v[0],Ub=Sb.v[1];
   $M(Ub,function(Vb){
    var Wb=Vb.v[0],Xb=Vb.v[1];
    $M(Wb,function(Yb){
     var Zb=Yb.v[0],ac=Yb.v[1];
     $M(Qb,function(bc){
      var cc=bc.v[0],dc=bc.v[1];
      $M(cc,function(ec){
       var fc=ec.v[0],gc=ec.v[1];
       $M(Zb,function(hc){
	var ic=hc.v[0],jc=hc.v[1];
	$M(fc,function(kc){
	 var lc=kc.v[0],mc=kc.v[1];
	 $M(ic,function(nc){
	  var oc=nc.v[0];
	  $M(lc,function(pc){
	   var qc=pc.v[0];
	   var rc=$f(1,function(sc){
	    $$GHCziClasses_zdfEqZMZNzuzdczeze.C([Xb,dc],function(tc){
	     switch(tc.g){
	     case 1:
	      var uc=$t(function(){
	       $$Engine$e.J($$GHCziTypes_ZC,dc);
	      },[dc],"sat");
	      $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,Tb,$$Engine$d,uc,sc);break;
	     case 2:
	      $r([sc,$$GHCziTuple_Z0T]);break;
	     }
	    },[dc,Tb,sc]);
	   },[Xb,dc,Tb],"a5");
	   var vc=oc==qc?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(vc.g){
	   case 1:
	    $$Engine$j.C([Tb,ec,Lb,Ob],function(wc){
	     var xc=wc[0];
	     rc.C([xc],function(yc){
	      var zc=yc[0];
	      Nb.J(zc);
	     },[Nb]);
	    },[rc,Nb]);break;
	   case 2:
	    $M(jc,function(Ac){
	     var Bc=Ac.v[0];
	     $M(mc,function(Cc){
	      var Dc=Cc.v[0];
	      var Ec=Bc==Dc?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Ec.g){
	      case 1:
	       $$Engine$j.C([Tb,ec,Lb,Ob],function(Fc){
		var Gc=Fc[0];
		rc.C([Gc],function(Hc){
		 var Ic=Hc[0];
		 Nb.J(Ic);
		},[Nb]);
	       },[rc,Nb]);break;
	      case 2:
	       $M(ac,function(Jc){
		var Kc=Jc.v[0],Lc=Jc.v[1];
		$M(gc,function(Mc){
		 var Nc=Mc.v[0],Oc=Mc.v[1];
		 $M(Kc,function(Pc){
		  var Qc=Pc.v[0];
		  $M(Nc,function(Rc){
		   var Sc=Rc.v[0];
		   var Tc=Qc==Sc?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(Tc.g){
		   case 1:
		    $$Engine$j.C([Tb,ec,Lb,Ob],function(Uc){
		     var Vc=Uc[0];
		     rc.C([Vc],function(Wc){
		      var Xc=Wc[0];
		      Nb.J(Xc);
		     },[Nb]);
		    },[rc,Nb]);break;
		   case 2:
		    $M(Lc,function(Yc){
		     var Zc=Yc.v[0];
		     $M(Oc,function(ad){
		      var bd=ad.v[0];
		      var cd=Zc==bd?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(cd.g){
		      case 1:
		       $$Engine$j.C([Tb,ec,Lb,Ob],function(dd){
			var ed=dd[0];
			rc.C([ed],function(fd){
			 var gd=fd[0];
			 Nb.J(gd);
			},[Nb]);
		       },[rc,Nb]);break;
		      case 2:
		       rc.C([Ob],function(hd){
			var id=hd[0];
			Nb.J(id);
		       },[Nb]);break;
		      }
		     },[Tb,rc,ec,Lb,Ob,Nb,Zc]);
		    },[Tb,rc,ec,Lb,Ob,Nb,Oc]);break;
		   }
		  },[Tb,rc,ec,Lb,Ob,Nb,Qc,Lc,Oc]);
		 },[Tb,rc,ec,Lb,Ob,Nb,Nc,Lc,Oc]);
		},[Tb,rc,ec,Lb,Ob,Nb,Kc,Lc]);
	       },[Tb,rc,ec,Lb,Ob,Nb,gc]);break;
	      }
	     },[Tb,rc,ec,Lb,Ob,Nb,Bc,ac,gc]);
	    },[Tb,rc,ec,Lb,Ob,Nb,mc,ac,gc]);break;
	   }
	  },[Xb,dc,Tb,oc,ec,Lb,Ob,Nb,jc,mc,ac,gc]);
	 },[lc,Xb,dc,Tb,ec,Lb,Ob,Nb,jc,mc,ac,gc]);
	},[ic,Xb,dc,Tb,ec,Lb,Ob,Nb,jc,ac,gc]);
       },[fc,Xb,dc,Tb,ec,Lb,Ob,Nb,ac,gc]);
      },[Zb,Xb,dc,Tb,Lb,Ob,Nb,ac]);
     },[Zb,Xb,Tb,Lb,Ob,Nb,ac]);
    },[Qb,Xb,Tb,Lb,Ob,Nb]);
   },[Qb,Tb,Lb,Ob,Nb]);
  },[Qb,Lb,Ob,Nb]);
 },[Lb,Ob,Nb]);
},"lvl11");
var $$Engine$r=$F(1,function(jd){
 $r([jd,$$GHCziTuple_Z0T]);
},"lvl12");
var $$Engine$s=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Haskell Freecell");
},"lvl13");
var $$Freecell_zdfShowLocation1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdfEnumCard1=$f(1,function(P3){
 var Q3=$t(function(){
  $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),P3,$$Freecell$T);
 },[P3],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["toEnum{Suit}: tag (",Q3],function(R3){
  $$GHCziErr_error.J(R3);
 },[]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdfEnumCard2=$f(1,function(M4){
 var N4=$t(function(){
  $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),M4,$$Freecell$W);
 },[M4],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["toEnum{Value}: tag (",N4],function(O4){
  $$GHCziErr_error.J(O4);
 },[]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdfEqLocationzuzdczeze=$f(2,function(ma,na){
 var oa=$t(function(){
  $M(ma,function(pa){
   switch(pa.g){
   case 1:
    $M(na,function(qa){
     switch(qa.g){
     case 1:
      $R(2,[],"True");break;
     case 2:
      $R(1,[],"False");break;
     case 3:
      $R(1,[],"False");break;
     }
    },[]);break;
   case 2:
    $M(na,function(ra){
     switch(ra.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $R(2,[],"True");break;
     case 3:
      $R(1,[],"False");break;
     }
    },[]);break;
   case 3:
    $M(na,function(sa){
     switch(sa.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $R(1,[],"False");break;
     case 3:
      $R(2,[],"True");break;
     }
    },[]);break;
   }
  },[na]);
 },[ma,na],"$wfail");
 $M(ma,function(ta){
  switch(ta.g){
  case 1:
   var ua=ta.v[0];
   $M(na,function(va){
    switch(va.g){
    case 1:
     var wa=va.v[0];
     $$GHCziClasses_eqInt.J(ua,wa);break;
    default:
     $A(oa);
    }
   },[ma,na,oa,ua]);break;
  case 2:
   var xa=ta.v[0];
   $M(na,function(ya){
    switch(ya.g){
    case 2:
     var za=ya.v[0];
     $$GHCziClasses_eqInt.J(xa,za);break;
    default:
     $A(oa);
    }
   },[ma,na,oa,xa]);break;
  case 3:
   $A(oa);break;
  }
 },[ma,na,oa]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdfEnumValue2=$t(function(){
 $$GHCziErr_error.J($$Freecell$i1);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdwzdctoEnum=$f(1,function(fl){
 var gl=$t(function(){
  $M(fl,function(hl){
   var il=hl.v[0];
   var jl=$t(function(){
    $$GHCziBase_modIntzh.C([il,goog.math.Long.fromBits(13,0)],function(kl){
     $R(1,[kl],"I#");
    },[]);
   },[il],"sat");
   var ll=$t(function(){
    $$GHCziBase_divIntzh.C([il,goog.math.Long.fromBits(13,0)],function(ml){
     $R(1,[ml],"I#");
    },[]);
   },[il],"sat");
   $R(1,[ll,jl],"(,)");
  },[]);
 },[fl],"ds");
 var nl=$t(function(){
  $M(gl,function(ol){
   var pl=ol.v[0];
   $M(pl,function(ql){
    var rl=ql.v[0];
    var sl=rl.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(sl.g){
    case 1:
     $$Freecell_zdfEnumCard1.J(rl);break;
    case 2:
     var tl=rl.lessThanOrEqual(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(tl.g){
     case 1:
      $$Freecell_zdfEnumCard1.J(rl);break;
     case 2:
      $r($hs_tagToEnumzh(rl));break;
     }break;
    }
   },[]);
  },[]);
 },[gl],"sat");
 var ul=$t(function(){
  $M(gl,function(vl){
   var wl=vl.v[1];
   $M(wl,function(xl){
    var yl=xl.v[0];
    var zl=yl.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(zl.g){
    case 1:
     $$Freecell_zdfEnumCard2.J(yl);break;
    case 2:
     var Al=yl.lessThanOrEqual(goog.math.Long.fromBits(12,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Al.g){
     case 1:
      $$Freecell_zdfEnumCard2.J(yl);break;
     case 2:
      $r($hs_tagToEnumzh(yl));break;
     }break;
    }
   },[]);
  },[]);
 },[gl],"sat");
 $r([ul,nl]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdwzdcenumFromTo=$f(4,function(cs,ds,es,fs){
 $M(cs,function(gs){
  var hs=$f(1,function(is){
   $M(es,function(js){
    $M(fs,function(ks){
     switch(ks.g){
     case 1:
      $b(function(){
       $M(js,function(xs){
	$r($hs_dataToTagzh(xs));
       },[is]);
      },[],function(ns){
       var ls=is.greaterThan(ns)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(ls.g){
       case 1:
	var ms=$f(1,function(os){
	 var ps=$t(function(){
	  var qs=os.equals(ns)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(qs.g){
	  case 1:
	   var rs=os.add(goog.math.Long.fromBits(1,0));
	   ms.J(rs);break;
	  case 2:
	   $R(1,[],"[]");break;
	  }
	 },[ns,os,ms],"sat");
	 var ss=$t(function(){
	  var ts=$d(1,[os],"sat");
	  $$Freecell_zdwzdctoEnum.C([ts],function(us){
	   var vs=us[0],ws=us[1];
	   $R(1,[vs,ws],"Card");
	  },[]);
	 },[os],"sat");
	 $R(2,[ss,ps],":");
	},[ns],"go4");
	ms.J(is);break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[is]);break;
     case 2:
      $b(function(){
       $M(js,function(Ls){
	$r($hs_dataToTagzh(Ls));
       },[is]);
      },[],function(Ks){
       var As=Ks.add(goog.math.Long.fromBits(13,0));
       var ys=is.greaterThan(As)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(ys.g){
       case 1:
	var zs=$f(1,function(Bs){
	 var Cs=$t(function(){
	  var Ds=Bs.equals(As)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Ds.g){
	  case 1:
	   var Es=Bs.add(goog.math.Long.fromBits(1,0));
	   zs.J(Es);break;
	  case 2:
	   $R(1,[],"[]");break;
	  }
	 },[As,Bs,zs],"sat");
	 var Fs=$t(function(){
	  var Gs=$d(1,[Bs],"sat");
	  $$Freecell_zdwzdctoEnum.C([Gs],function(Hs){
	   var Is=Hs[0],Js=Hs[1];
	   $R(1,[Is,Js],"Card");
	  },[]);
	 },[Bs],"sat");
	 $R(2,[Fs,Cs],":");
	},[As],"go4");
	zs.J(is);break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[is]);break;
     case 3:
      $b(function(){
       $M(js,function(Zs){
	$r($hs_dataToTagzh(Zs));
       },[is]);
      },[],function(Ys){
       var Os=Ys.add(goog.math.Long.fromBits(26,0));
       var Ms=is.greaterThan(Os)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Ms.g){
       case 1:
	var Ns=$f(1,function(Ps){
	 var Qs=$t(function(){
	  var Rs=Ps.equals(Os)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Rs.g){
	  case 1:
	   var Ss=Ps.add(goog.math.Long.fromBits(1,0));
	   Ns.J(Ss);break;
	  case 2:
	   $R(1,[],"[]");break;
	  }
	 },[Os,Ps,Ns],"sat");
	 var Ts=$t(function(){
	  var Us=$d(1,[Ps],"sat");
	  $$Freecell_zdwzdctoEnum.C([Us],function(Vs){
	   var Ws=Vs[0],Xs=Vs[1];
	   $R(1,[Ws,Xs],"Card");
	  },[]);
	 },[Ps],"sat");
	 $R(2,[Ts,Qs],":");
	},[Os],"go4");
	Ns.J(is);break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[is]);break;
     case 4:
      $b(function(){
       $M(js,function(nt){
	$r($hs_dataToTagzh(nt));
       },[is]);
      },[],function(mt){
       var ct=mt.add(goog.math.Long.fromBits(39,0));
       var at=is.greaterThan(ct)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(at.g){
       case 1:
	var bt=$f(1,function(dt){
	 var et=$t(function(){
	  var ft=dt.equals(ct)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(ft.g){
	  case 1:
	   var gt=dt.add(goog.math.Long.fromBits(1,0));
	   bt.J(gt);break;
	  case 2:
	   $R(1,[],"[]");break;
	  }
	 },[ct,dt,bt],"sat");
	 var ht=$t(function(){
	  var it=$d(1,[dt],"sat");
	  $$Freecell_zdwzdctoEnum.C([it],function(jt){
	   var kt=jt[0],lt=jt[1];
	   $R(1,[kt,lt],"Card");
	  },[]);
	 },[dt],"sat");
	 $R(2,[ht,et],":");
	},[ct],"go4");
	bt.J(is);break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[is]);break;
     }
    },[js,is]);
   },[fs,is]);
  },[es,fs],"$j");
  $M(ds,function(ot){
   switch(ot.g){
   case 1:
    $b(function(){
     $M(gs,function(qt){
      $r($hs_dataToTagzh(qt));
     },[es,fs,hs]);
    },[],function(pt){
     hs.J(pt);
    },[es,fs,hs]);break;
   case 2:
    $b(function(){
     $M(gs,function(tt){
      $r($hs_dataToTagzh(tt));
     },[es,fs,hs]);
    },[],function(st){
     var rt=st.add(goog.math.Long.fromBits(13,0));
     hs.J(rt);
    },[es,fs,hs]);break;
   case 3:
    $b(function(){
     $M(gs,function(wt){
      $r($hs_dataToTagzh(wt));
     },[es,fs,hs]);
    },[],function(vt){
     var ut=vt.add(goog.math.Long.fromBits(26,0));
     hs.J(ut);
    },[es,fs,hs]);break;
   case 4:
    $b(function(){
     $M(gs,function(zt){
      $r($hs_dataToTagzh(zt));
     },[es,fs,hs]);
    },[],function(yt){
     var xt=yt.add(goog.math.Long.fromBits(39,0));
     hs.J(xt);
    },[es,fs,hs]);break;
   }
  },[es,fs,hs,gs]);
 },[es,fs,ds]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_mkFreecell1=$f(1,function(Lw){
 $M($$SystemziRandom_theStdGen,function(Mw){
  var Nw=Mw.v[0];
  $b($hs_atomicModifyMutVarzh,[Nw,$$SystemziRandom_zdfRandomGenStdGenzuzdcsplit,Lw],function(Ow){
   var Pw=Ow[0],Qw=Ow[1];
   var Rw=$t(function(){
    var Sw=$t(function(){
     var Tw=$f(1,function(Uw){
      $M($$Freecell$n1,function(Vw){
       var Ww=Vw.v[0];
       var Yw=Ww.subtract(goog.math.Long.fromBits(1,0));
       var Xw=$f(5,function(Zw,ax,bx,cx,dx){
	var ex=goog.math.Long.fromBits(0,0).greaterThan(Yw)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(ex.g){
	case 1:
	 var fx=$f(3,function(gx,hx,ix){
	  $M(hx,function(jx){
	   switch(jx.g){
	   case 1:
	    $r([ix,$$GHCziTuple_Z0T]);break;
	   case 2:
	    var kx=jx.v[0],lx=jx.v[1];
	    $M(kx,function(mx){
	     var nx=mx.v[0];
	     var ox=gx.notEquals(nx)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(ox.g){
	     case 1:
	      var px=gx.equals(Yw)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(px.g){
	      case 1:
	       var qx=gx.add(goog.math.Long.fromBits(1,0));
	       fx.J(qx,lx,ix);break;
	      case 2:
	       $r([ix,$$GHCziTuple_Z0T]);break;
	      }break;
	     case 2:
	      $M(ax,function(rx){
	       var sx=rx.v[0];
	       $M(bx,function(tx){
		var ux=tx.v[0];
		var vx=sx.lessThanOrEqual(gx)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(vx.g){
		case 1:
		 var wx=$d(1,[gx],"sat");
		 $$Freecell$u2.J(wx,rx,tx);break;
		case 2:
		 var xx=gx.lessThanOrEqual(ux)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(xx.g){
		 case 1:
		  var yx=$d(1,[gx],"sat");
		  $$Freecell$u2.J(yx,rx,tx);break;
		 case 2:
		  var Ax=gx.subtract(sx);
		  var zx=goog.math.Long.fromBits(0,0).lessThanOrEqual(Ax)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(zx.g){
		  case 1:
		   $$Freecell$w2.J(Ax,cx);break;
		  case 2:
		   var Bx=Ax.lessThan(cx)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(Bx.g){
		   case 1:
		    $$Freecell$w2.J(Ax,cx);break;
		   case 2:
		    var Cx=$hs_readArrayzh(dx,Ax,ix);
		    var Dx=Cx[0],Ex=Cx[1];
		    var Fx=sx.lessThanOrEqual(nx)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Fx.g){
		    case 1:
		     $$Freecell$x2.J(mx,rx,tx);break;
		    case 2:
		     var Gx=nx.lessThanOrEqual(ux)?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(Gx.g){
		     case 1:
		      $$Freecell$x2.J(mx,rx,tx);break;
		     case 2:
		      var Ix=nx.subtract(sx);
		      var Hx=goog.math.Long.fromBits(0,0).lessThanOrEqual(Ix)?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(Hx.g){
		      case 1:
		       $$Freecell$z2.J(Ix,cx);break;
		      case 2:
		       var Jx=Ix.lessThan(cx)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(Jx.g){
		       case 1:
			$$Freecell$z2.J(Ix,cx);break;
		       case 2:
			var Kx=$hs_readArrayzh(dx,Ix,Dx);
			var Lx=Kx[0],Mx=Kx[1];
			var Nx=goog.math.Long.fromBits(0,0).lessThanOrEqual(Ax)?$$GHCziTypes_True:$$GHCziTypes_False;
			switch(Nx.g){
			case 1:
			 $$Freecell$B2.J(Ax,cx);break;
			case 2:
			 var Ox=Ax.lessThan(cx)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Ox.g){
			 case 1:
			  $$Freecell$B2.J(Ax,cx);break;
			 case 2:
			  var Ux=$hs_writeArrayzh(dx,Ax,Mx,Lx);
			  var Px=goog.math.Long.fromBits(0,0).lessThanOrEqual(Ix)?$$GHCziTypes_True:$$GHCziTypes_False;
			  switch(Px.g){
			  case 1:
			   $$Freecell$D2.J(Ix,cx);break;
			  case 2:
			   var Qx=Ix.lessThan(cx)?$$GHCziTypes_True:$$GHCziTypes_False;
			   switch(Qx.g){
			   case 1:
			    $$Freecell$D2.J(Ix,cx);break;
			   case 2:
			    var Tx=$hs_writeArrayzh(dx,Ix,Ex,Ux);
			    var Rx=gx.equals(Yw)?$$GHCziTypes_True:$$GHCziTypes_False;
			    switch(Rx.g){
			    case 1:
			     var Sx=gx.add(goog.math.Long.fromBits(1,0));
			     fx.J(Sx,lx,Tx);break;
			    case 2:
			     $r([Tx,$$GHCziTuple_Z0T]);break;
			    }break;
			   }break;
			  }break;
			 }break;
			}break;
		       }break;
		      }break;
		     }break;
		    }break;
		   }break;
		  }break;
		 }break;
		}
	       },[Yw,ix,gx,nx,fx,lx,sx,rx,cx,dx,mx]);
	      },[Yw,ix,gx,nx,fx,lx,bx,cx,dx,mx]);break;
	     }
	    },[Yw,ix,gx,fx,lx,ax,bx,cx,dx]);break;
	   }
	  },[Yw,ix,gx,fx,ax,bx,cx,dx]);
	 },[Yw,ax,bx,cx,dx],"a12");
	 var Vx=Ww.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Vx.g){
	 case 1:
	  $$Freecell$I2.C([Ww],function(Wx){
	   $$DataziList_zdwmapAccumL.C([$$Freecell$G2,Qw,Wx],function(Xx){
	    var Yx=Xx[1];
	    fx.C([goog.math.Long.fromBits(0,0),Yx,Zw],function(Zx){
	     var ay=Zx[0];
	     var by=$hs_unsafeFreezzeArrayzh(dx,ay);
	     var cy=by[0],dy=by[1];
	     var ey=$d(1,[ax,bx,cx,dy],"sat");
	     $r([cy,ey]);
	    },[ax,bx,cx,dx]);
	   },[fx,ax,bx,cx,dx,Zw]);
	  },[fx,ax,bx,cx,dx,Qw,Zw]);break;
	 case 2:
	  $$DataziList_zdwmapAccumL.C([$$Freecell$G2,Qw,$$GHCziTypes_ZMZN],function(fy){
	   var gy=fy[1];
	   fx.C([goog.math.Long.fromBits(0,0),gy,Zw],function(hy){
	    var iy=hy[0];
	    var jy=$hs_unsafeFreezzeArrayzh(dx,iy);
	    var ky=jy[0],ly=jy[1];
	    var my=$d(1,[ax,bx,cx,ly],"sat");
	    $r([ky,my]);
	   },[ax,bx,cx,dx]);
	  },[fx,ax,bx,cx,dx,Zw]);break;
	 }break;
	case 2:
	 var ny=$hs_unsafeFreezzeArrayzh(dx,Zw);
	 var oy=ny[0],py=ny[1];
	 var qy=$d(1,[ax,bx,cx,py],"sat");
	 $r([oy,qy]);break;
	}
       },[Ww,Yw,Qw],"$w$j");
       var ry=$f(2,function(sy,ty){
	var uy=$f(1,function(vy){
	 var wy=$f(3,function(xy,yy,zy){
	  var Ay=xy.equals(vy)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Ay.g){
	  case 1:
	   $M(yy,function(By){
	    switch(By.g){
	    case 1:
	     $r([zy,$$GHCziTuple_Z0T]);break;
	    case 2:
	     var Cy=By.v[0],Dy=By.v[1];
	     $M(ty,function(Ey){
	      var Fy=Ey.v[3];
	      var Hy=$hs_writeArrayzh(Fy,xy,Cy,zy);
	      var Gy=xy.add(goog.math.Long.fromBits(1,0));
	      wy.J(Gy,Dy,Hy);
	     },[xy,zy,Cy,wy,Dy]);break;
	    }
	   },[xy,zy,ty,wy]);break;
	  case 2:
	   $r([zy,$$GHCziTuple_Z0T]);break;
	  }
	 },[vy,ty],"$wa");
	 wy.C([goog.math.Long.fromBits(0,0),$$Freecell$m1,sy],function(Iy){
	  var Jy=Iy[0];
	  $r([Jy,ty]);
	 },[ty]);
	},[ty,sy],"$j1");
	var Ky=goog.math.Long.fromBits(0,0).lessThanOrEqual(Yw)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Ky.g){
	case 1:
	 uy.J(goog.math.Long.fromBits(0,0));break;
	case 2:
	 var My=Yw.add(goog.math.Long.fromBits(1,0));
	 var Ly=My.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Ly.g){
	 case 1:
	  uy.J(My);break;
	 case 2:
	  $$GHCziErr_error.J($$Freecell$s2);break;
	 }break;
	}
       },[Yw],"$j");
       var Ny=goog.math.Long.fromBits(0,0).lessThanOrEqual(Yw)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Ny.g){
       case 1:
	var Oy=$hs_newArrayzh(goog.math.Long.fromBits(0,0),$$DataziArrayziBase_arrEleBottom,Uw);
	var Py=Oy[0],Qy=Oy[1];
	var Ry=$d(1,[Yw],"sat");
	var Sy=$d(1,[$$Freecell_zdfShowLocation1,Ry,goog.math.Long.fromBits(0,0),Qy],"sat");
	ry.C([Py,Sy],function(Ty){
	 var Uy=Ty[0],Vy=Ty[1];
	 $M(Vy,function(Wy){
	  var Xy=Wy.v[0],Yy=Wy.v[1],Zy=Wy.v[2],az=Wy.v[3];
	  Xw.J(Uy,Xy,Yy,Zy,az);
	 },[Ww,Yw,Qw,Xw,Uy]);
	},[Ww,Yw,Qw,Xw]);break;
       case 2:
	var hz=Yw.add(goog.math.Long.fromBits(1,0));
	var bz=hz.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(bz.g){
	case 1:
	 var cz=$hs_newArrayzh(hz,$$DataziArrayziBase_arrEleBottom,Uw);
	 var dz=cz[0],ez=cz[1];
	 var fz=$d(1,[Yw],"sat");
	 var gz=$d(1,[$$Freecell_zdfShowLocation1,fz,hz,ez],"sat");
	 ry.C([dz,gz],function(iz){
	  var jz=iz[0],kz=iz[1];
	  $M(kz,function(lz){
	   var mz=lz.v[0],nz=lz.v[1],oz=lz.v[2],pz=lz.v[3];
	   Xw.J(jz,mz,nz,oz,pz);
	  },[Ww,Yw,Qw,Xw,jz]);
	 },[Ww,Yw,Qw,Xw]);break;
	case 2:
	 $A($$GHCziArr_negRange);break;
	}break;
       }
      },[Qw,Uw]);
     },[Qw],"sat");
     $$GHCziST_runSTRep.C([Tw],function(qz){
      var rz=qz.v[2],sz=qz.v[3];
      var vz=rz.subtract(goog.math.Long.fromBits(1,0));
      var tz=goog.math.Long.fromBits(0,0).greaterThan(vz)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(tz.g){
      case 1:
       var uz=$f(1,function(wz){
	var xz=$t(function(){
	 var yz=wz.equals(vz)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(yz.g){
	 case 1:
	  var zz=wz.add(goog.math.Long.fromBits(1,0));
	  uz.J(zz);break;
	 case 2:
	  $R(1,[],"[]");break;
	 }
	},[vz,wz,uz],"sat");
	var Az=$t(function(){
	 var Bz=$hs_indexArrayzh(sz,wz);
	 var Cz=Bz[0];
	 $A(Cz);
	},[sz,wz],"sat");
	$R(2,[Az,xz],":");
       },[vz,sz],"go4");
       uz.J(goog.math.Long.fromBits(0,0));break;
      case 2:
       $R(1,[],"[]");break;
      }
     },[]);
    },[Qw],"sat");
    $$Freecell$l1.C([Sw],function(Dz){
     $$Freecell$o2.J($$Freecell$r2,Dz);
    },[]);
   },[Qw],"stackCards");
   var Ez=$f(1,function(Fz){
    var Gz=$t(function(){
     $$FRPziSodiumziPlain_zdwa.C([$$Freecell$g2,Fz],function(Hz){
      var Iz=Hz[0],Jz=Hz[1];
      $R(1,[Iz,Jz],"Event");
     },[]);
    },[Fz],"a12");
    var Kz=$f(3,function(Lz,Mz,Nz){
     var Oz=$t(function(){
      $M(Lz,function(Pz){
       switch(Pz.g){
       case 2:
	var Qz=Pz.v[0];
	var Rz=$t(function(){
	 $$FRPziSodiumziPlain_zdwa.C([$$Freecell$C1,Mz],function(Sz){
	  var Tz=Sz[0],Uz=Sz[1];
	  $R(1,[Tz,Uz],"Event");
	 },[]);
	},[Mz],"a13");
	var Vz=$t(function(){
	 $M(Qz,function(Wz){
	  var Xz=Wz.v[0];
	  var aA=$hs_int2Doublezh(Xz);
	  var Zz=aA*244.2857142857143;
	  var Yz= -950.0+Zz;
	  $R(1,[Yz],"D#");
	 },[]);
	},[Qz],"a14");
	var bA=$d(1,[Vz,$$Freecell$e1],"orig");
	var cA=$f(2,function(dA,eA){
	 $M(dA,function(fA){
	  switch(fA.g){
	  case 1:
	   var gA=fA.v[0];
	   $M(eA,function(hA){
	    switch(hA.g){
	    case 1:
	     $R(1,[],"Nothing");break;
	    case 2:
	     var iA=hA.v[0];
	     $M(gA,function(jA){
	      var kA=jA.v[0],lA=jA.v[1];
	      $M(kA,function(mA){
	       var nA=mA.v[0];
	       $M(Vz,function(oA){
		var pA=oA.v[0];
		var AA=pA-100.0;
		var qA=nA>=AA?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(qA.g){
		case 1:
		 $R(1,[],"Nothing");break;
		case 2:
		 var zA=pA+100.0;
		 var rA=nA<=zA?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(rA.g){
		 case 1:
		  $R(1,[],"Nothing");break;
		 case 2:
		  $M(lA,function(sA){
		   var tA=sA.v[0];
		   var uA=tA>=650.0?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(uA.g){
		   case 1:
		    $R(1,[],"Nothing");break;
		   case 2:
		    var vA=tA<=950.0?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(vA.g){
		    case 1:
		     $R(1,[],"Nothing");break;
		    case 2:
		     var wA=$d(2,[iA,$$GHCziTypes_ZMZN],"sat");
		     var xA=$d(1,[bA,jA,wA,Pz],"sat");
		     var yA=$d(1,[$$DataziMaybe_Nothing,xA],"sat");
		     $R(2,[yA],"Just");break;
		    }break;
		   }
		  },[bA,jA,iA,Pz]);break;
		 }break;
		}
	       },[bA,nA,lA,jA,iA,Pz]);
	      },[Vz,bA,lA,jA,iA,Pz]);
	     },[Vz,bA,iA,Pz]);break;
	    }
	   },[Vz,bA,gA,Pz]);break;
	  default:
	   $R(1,[],"Nothing");
	  }
	 },[Vz,bA,eA,Pz]);
	},[Vz,bA,Pz],"lvl104");
	var BA=$d(1,[bA,$$Freecell$c],"rect");
	var CA=$d(1,[BA,$$Freecell$M],"n1");
	var DA=$f(1,function(EA){
	 var FA=$t(function(){
	  $M(EA,function(GA){
	   switch(GA.g){
	   case 1:
	    $A(CA);break;
	   case 2:
	    var HA=GA.v[0];
	    $M(HA,function(IA){
	     var JA=IA.v[0],KA=IA.v[1];
	     $$Freecell$I.C([bA,JA,KA],function(LA){
	      var MA=LA[0],NA=LA[1];
	      $R(1,[MA,NA],"(,)");
	     },[]);
	    },[bA]);break;
	   }
	  },[bA,CA]);
	 },[bA,CA,EA],"sat");
	 $R(2,[FA,$$GHCziTypes_ZMZN],":");
	},[bA,CA],"lvl105");
	var OA=$f(1,function(PA){
	 var QA=$t(function(){
	  $M(PA,function(RA){
	   switch(RA.g){
	   case 1:
	    $R(2,[],"True");break;
	   case 2:
	    $R(1,[],"False");break;
	   }
	  },[]);
	 },[PA],"lvl107");
	 var SA=$f(1,function(TA){
	  $$GHCziList_zdwlen.C([TA,goog.math.Long.fromBits(0,0)],function(UA){
	   switch(UA.toString()){
	   case "1":
	    $A(QA);break;
	   default:
	    $R(1,[],"False");
	   }
	  },[QA]);
	 },[QA],"sat");
	 $R(1,[Pz,BA,SA],"Destination");
	},[Pz,BA],"lvl106");
	var VA=$f(2,function(WA,XA){
	 var YA=$hs_newMVarzh(XA);
	 var ZA=YA[0],aB=YA[1];
	 var bB=$f(1,function(cB){
	  var dB=$hs_noDuplicatezh(cB);
	  $k($hs_takeMVarzh,[aB,dB]);
	 },[aB],"sat");
	 $$GHCziIO_unsafeDupableInterleaveIO.C([bB,ZA],function(eB){
	  var fB=eB[0],gB=eB[1];
	  var hB=$t(function(){
	   var iB=$t(function(){
	    $M(gB,function(jB){
	     var kB=jB.v[0];
	     $M(kB,function(lB){
	      var mB=lB.v[0];
	      $A(mB);
	     },[]);
	    },[]);
	   },[gB],"sat");
	   $$FRPziSodiumziPlain_zdwa8.C([iB,Rz],function(nB){
	    var oB=nB[0],pB=nB[1];
	    $R(1,[oB,pB],"Event");
	   },[]);
	  },[Rz,gB],"sat");
	  $$FRPziSodiumziPlain_switch1.C([$$DataziMaybe_Nothing,hB,WA,fB],function(qB){
	   var rB=qB[0],sB=qB[1];
	   $M(sB,function(tB){
	    var uB=tB.v[0],vB=tB.v[1];
	    var wB=$t(function(){
	     var xB=$t(function(){
	      $$FRPziSodiumziPlain_zdwa5.C([cA,Fz,uB],function(yB){
	       var zB=yB[0],AB=yB[1];
	       $R(1,[zB,AB],"Event");
	      },[]);
	     },[Fz,cA,uB],"sat");
	     $$FRPziSodiumziPlain_zdwa7.C([xB],function(BB){
	      var CB=BB[0],DB=BB[1];
	      $R(1,[CB,DB],"Event");
	     },[]);
	    },[Fz,cA,uB],"a18");
	    var EB=$t(function(){
	     $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_snd,wB],function(FB){
	      var GB=FB[0],HB=FB[1];
	      $R(1,[GB,HB],"Event");
	     },[]);
	    },[wB],"a19");
	    var IB=$t(function(){
	     $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_fst,wB],function(JB){
	      var KB=JB[0],LB=JB[1];
	      $R(1,[KB,LB],"Event");
	     },[]);
	    },[wB],"sat");
	    var MB=$d(1,[IB,uB,EB],"sat");
	    var NB=$d(1,[MB,vB],"sat");
	    $b($hs_putMVarzh,[aB,NB,rB],function(eD){
	     var OB=$t(function(){
	      $M(uB,function(PB){
	       var QB=PB.v[0],RB=PB.v[1];
	       var SB=$f(1,function(TB){
		var UB=$f(1,function(VB){
		 $$FRPziSodiumziPlain_unSample.C([RB,VB],function(WB){
		  var XB=WB[0],YB=WB[1];
		  var ZB=$t(function(){
		   $M(YB,function(aC){
		    switch(aC.g){
		    case 1:
		     $A($$Freecell$N);break;
		    case 2:
		     $A($$Freecell_zdfShowLocation1);break;
		    }
		   },[]);
		  },[YB],"sat");
		  $r([XB,ZB]);
		 },[]);
		},[RB],"sat");
		$r([TB,UB]);
	       },[RB],"sat");
	       var bC=$d(1,[SB],"sat");
	       var cC=$t(function(){
		$$FRPziSodiumziPlain_zdwa.C([$$Freecell$F1,QB],function(dC){
		 var eC=dC[0],fC=dC[1];
		 $R(1,[eC,fC],"Event");
		},[]);
	       },[QB],"sat");
	       $R(1,[cC,bC],"Behavior");
	      },[]);
	     },[uB],"sat");
	     var gC=$t(function(){
	      $M(uB,function(hC){
	       var iC=hC.v[0],jC=hC.v[1];
	       var kC=$f(1,function(lC){
		var mC=$f(1,function(nC){
		 $$FRPziSodiumziPlain_unSample.C([jC,nC],function(oC){
		  var pC=oC[0],qC=oC[1];
		  var rC=$t(function(){
		   $M(qC,function(sC){
		    switch(sC.g){
		    case 1:
		     $R(2,[],"True");break;
		    case 2:
		     $R(1,[],"False");break;
		    }
		   },[]);
		  },[qC],"lvl107");
		  var tC=$f(1,function(uC){
		   $$GHCziList_zdwlen.C([uC,goog.math.Long.fromBits(0,0)],function(vC){
		    switch(vC.toString()){
		    case "1":
		     $A(rC);break;
		    default:
		     $R(1,[],"False");
		    }
		   },[rC]);
		  },[rC],"sat");
		  var wC=$d(1,[Pz,BA,tC],"sat");
		  $r([pC,wC]);
		 },[Pz,BA]);
		},[Pz,BA,jC],"sat");
		$r([lC,mC]);
	       },[Pz,BA,jC],"sat");
	       var xC=$d(1,[kC],"sat");
	       var yC=$t(function(){
		$$FRPziSodiumziPlain_zdwa.C([OA,iC],function(zC){
		 var AC=zC[0],BC=zC[1];
		 $R(1,[AC,BC],"Event");
		},[]);
	       },[OA,iC],"sat");
	       $R(1,[yC,xC],"Behavior");
	      },[Pz,BA,OA]);
	     },[Pz,BA,OA,uB],"sat");
	     var CC=$t(function(){
	      $M(uB,function(DC){
	       var EC=DC.v[0],FC=DC.v[1];
	       var GC=$f(1,function(HC){
		var IC=$f(1,function(JC){
		 $$FRPziSodiumziPlain_unSample.C([FC,JC],function(KC){
		  var LC=KC[0],MC=KC[1];
		  var NC=$t(function(){
		   $M(MC,function(OC){
		    switch(OC.g){
		    case 1:
		     $A(CA);break;
		    case 2:
		     var PC=OC.v[0];
		     $M(PC,function(QC){
		      var RC=QC.v[0],SC=QC.v[1];
		      $$Freecell$I.C([bA,RC,SC],function(TC){
		       var UC=TC[0],VC=TC[1];
		       $R(1,[UC,VC],"(,)");
		      },[]);
		     },[bA]);break;
		    }
		   },[bA,CA]);
		  },[bA,CA,MC],"sat");
		  var WC=$d(2,[NC,$$GHCziTypes_ZMZN],"sat");
		  $r([LC,WC]);
		 },[bA,CA]);
		},[bA,CA,FC],"sat");
		$r([HC,IC]);
	       },[bA,CA,FC],"sat");
	       var XC=$d(1,[GC],"sat");
	       var YC=$t(function(){
		$$FRPziSodiumziPlain_zdwa.C([DA,EC],function(ZC){
		 var aD=ZC[0],bD=ZC[1];
		 $R(1,[aD,bD],"Event");
		},[]);
	       },[DA,EC],"sat");
	       $R(1,[YC,XC],"Behavior");
	      },[bA,CA,DA]);
	     },[bA,CA,DA,uB],"sat");
	     var cD=$d(1,[CC,gC,EB,OB],"sat");
	     var dD=$d(1,[cD,vB],"sat");
	     $r([eD,dD]);
	    },[bA,Pz,BA,CA,DA,OA,uB,EB,vB]);
	   },[Fz,bA,Pz,cA,BA,CA,DA,OA,aB,rB]);
	  },[Fz,bA,Pz,cA,BA,CA,DA,OA,aB]);
	 },[Fz,Rz,bA,Pz,cA,BA,CA,DA,OA,aB,WA]);
	},[Fz,Rz,bA,Pz,cA,BA,CA,DA,OA],"sat");
	$A(VA);break;
       default:
	$A($$Freecell$B1);
       }
      },[Fz,Mz]);
     },[Fz,Lz,Mz],"m");
     var fD=$f(2,function(gD,hD){
      Oz.C([gD,hD],function(iD){
       var jD=iD[0],kD=iD[1];
       $M(kD,function(lD){
	var mD=lD.v[0],nD=lD.v[1];
	Nz.C([nD,jD],function(oD){
	 var pD=oD[0],qD=oD[1];
	 $M(qD,function(rD){
	  var sD=rD.v[0],tD=rD.v[1];
	  var uD=$d(2,[mD,sD],"sat");
	  var vD=$d(1,[uD,tD],"sat");
	  $r([pD,vD]);
	 },[pD,mD]);
	},[mD]);
       },[jD,Nz]);
      },[Nz]);
     },[Oz,Nz],"sat");
     $A(fD);
    },[Fz],"lvl103");
    var wD=$f(2,function(xD,yD){
     var zD=$hs_newMVarzh(yD);
     var AD=zD[0],BD=zD[1];
     var CD=$f(1,function(DD){
      var ED=$hs_noDuplicatezh(DD);
      $k($hs_takeMVarzh,[BD,ED]);
     },[BD],"sat");
     $$GHCziIO_unsafeDupableInterleaveIO.C([CD,AD],function(FD){
      var GD=FD[0],HD=FD[1];
      var ID=$t(function(){
       $M(HD,function(JD){
	var KD=JD.v[0];
	$A(KD);
       },[]);
      },[HD],"ds");
      var LD=$t(function(){
       var MD=$t(function(){
	$M(ID,function(ND){
	 var OD=ND.v[0],PD=ND.v[1],QD=ND.v[2];
	 var RD=$t(function(){
	  var SD=$d(2,[QD,$$GHCziTypes_ZMZN],"sat");
	  $$GHCziBase_zpzp.J(PD,SD);
	 },[PD,QD],"sat");
	 $$GHCziBase_zpzp.C([OD,RD],function(TD){
	  $$Freecell$N2.J(TD);
	 },[]);
	},[]);
       },[ID],"sat");
       var UD=$t(function(){
	$M(ID,function(VD){
	 var WD=VD.v[4];
	 $A(WD);
	},[]);
       },[ID],"sat");
       $$FRPziSodiumziPlain_zdwa5.C([$$Freecell$v1,UD,MD],function(XD){
	var YD=XD[0],ZD=XD[1];
	$R(1,[YD,ZD],"Event");
       },[]);
      },[ID],"a14");
      var aE=$t(function(){
       $M(ID,function(bE){
	var cE=bE.v[3];
	$A(cE);
       },[]);
      },[ID],"emptySpaces");
      var dE=$f(1,function(eE){
       $M(eE,function(fE){
	switch(fE.g){
	case 1:
	 $A($$Freecell$O2);break;
	case 2:
	 var gE=fE.v[0],hE=fE.v[1];
	 var iE=$t(function(){
	  $M(gE,function(jE){
	   var kE=jE.v[0],lE=jE.v[1],mE=jE.v[2];
	   $M(kE,function(nE){
	    switch(nE.g){
	    case 1:
	     var oE=nE.v[0];
	     var pE=$t(function(){
	      $M(oE,function(qE){
	       var rE=qE.v[0];
	       var uE=$hs_int2Doublezh(rE);
	       var tE=uE*271.42857142857144;
	       var sE= -950.0+tE;
	       $R(1,[sE],"D#");
	      },[]);
	     },[oE],"origX");
	     var vE=$t(function(){
	      var wE=$d(1,[pE,$$Freecell$y1],"sat");
	      $$GHCziList_iterate.J($$Freecell$z1,wE);
	     },[pE],"positions1");
	     var xE=$f(2,function(yE,zE){
	      $M(yE,function(AE){
	       switch(AE.g){
	       case 1:
		var BE=AE.v[0];
		$M(BE,function(CE){
		 var DE=CE.v[0],EE=CE.v[1];
		 $M(DE,function(FE){
		  var GE=FE.v[0];
		  $M(pE,function(HE){
		   var IE=HE.v[0];
		   var uF=IE-100.0;
		   var JE=GE>=uF?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(JE.g){
		   case 1:
		    $R(1,[],"Nothing");break;
		   case 2:
		    var tF=IE+100.0;
		    var KE=GE<=tF?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(KE.g){
		    case 1:
		     $R(1,[],"Nothing");break;
		    case 2:
		     $$GHCziList_zdwlen.C([zE,goog.math.Long.fromBits(0,0)],function(rF){
		      $M(EE,function(LE){
		       var ME=LE.v[0];
		       var sF=450.0-ME;
		       var pF=sF/70.0;
		       var mF=$hs_double2Intzh(pF);
		       var OE=rF.subtract(goog.math.Long.fromBits(1,0));
		       var NE=$f(1,function(PE){
			var QE=PE.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			switch(QE.g){
			case 1:
			 $R(1,[],"Nothing");break;
			case 2:
			 var jF=$hs_int2Doublezh(OE);
			 var iF=70.0*jF;
			 var hF=150.0-iF;
			 var RE=ME>=hF?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(RE.g){
			 case 1:
			  $R(1,[],"Nothing");break;
			 case 2:
			  var SE=$t(function(){
			   var TE=PE.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			   switch(TE.g){
			   case 1:
			    $$GHCziList_zdwsplitAtzh.C([PE,zE],function(UE){
			     var VE=UE[0],WE=UE[1];
			     $R(1,[VE,WE],"(,)");
			    },[]);break;
			   case 2:
			    $R(1,[$$GHCziTypes_ZMZN,zE],"(,)");break;
			   }
			  },[zE,PE],"ds2");
			  var XE=$t(function(){
			   $M(SE,function(YE){
			    var ZE=YE.v[1];
			    $A(ZE);
			   },[]);
			  },[SE],"sat");
			  var aF=$t(function(){
			   var bF=PE.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			   switch(bF.g){
			   case 1:
			    $$GHCziList_znznzusub.J(vE,PE);break;
			   case 2:
			    $A($$GHCziList_znzn1);break;
			   }
			  },[vE,PE],"sat");
			  var cF=$d(1,[aF,CE,XE,nE],"sat");
			  var dF=$t(function(){
			   $M(SE,function(eF){
			    var fF=eF.v[0];
			    $A(fF);
			   },[]);
			  },[SE],"sat");
			  var gF=$d(1,[dF,cF],"sat");
			  $R(2,[gF],"Just");break;
			 }break;
			}
		       },[vE,zE,ME,OE,CE,nE],"$j");
		       var qF=$hs_int2Doublezh(mF);
		       var kF=pF<qF?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(kF.g){
		       case 1:
			var lF=OE.lessThanOrEqual(mF)?$$GHCziTypes_True:$$GHCziTypes_False;
			switch(lF.g){
			case 1:
			 NE.J(mF);break;
			case 2:
			 NE.J(OE);break;
			}break;
		       case 2:
			var oF=mF.subtract(goog.math.Long.fromBits(1,0));
			var nF=OE.lessThanOrEqual(oF)?$$GHCziTypes_True:$$GHCziTypes_False;
			switch(nF.g){
			case 1:
			 NE.J(oF);break;
			case 2:
			 NE.J(OE);break;
			}break;
		       }
		      },[vE,zE,rF,CE,nE]);
		     },[vE,zE,EE,CE,nE]);break;
		    }break;
		   }
		  },[vE,GE,zE,EE,CE,nE]);
		 },[pE,vE,zE,EE,CE,nE]);
		},[pE,vE,zE,nE]);break;
	       default:
		$R(1,[],"Nothing");
	       }
	      },[pE,vE,zE,nE]);
	     },[pE,vE,nE],"lvl104");
	     var vF=$f(2,function(wF,xF){
	      var yF=$t(function(){
	       $M(wF,function(zF){
		switch(zF.g){
		case 1:
		 $A($$GHCziList_last2);break;
		case 2:
		 var AF=zF.v[0],BF=zF.v[1];
		 $$GHCziList_last1.J(AF,BF);break;
		}
	       },[]);
	      },[wF],"lvl105");
	      var CF=$f(1,function(DF){
	       var EF=$t(function(){
		$$GHCziList_dropzudropzh.J(goog.math.Long.fromBits(1,0),DF);
	       },[DF],"sat");
	       $$GHCziList_foldr2.C([$$Freecell$Q2,$$GHCziTypes_True,DF,EF],function(FF){
		switch(FF.g){
		case 1:
		 $R(1,[],"False");break;
		case 2:
		 $$GHCziList_zdwlen.C([DF,goog.math.Long.fromBits(0,0)],function(TF){
		  $M(xF,function(GF){
		   var HF=GF.v[0];
		   var SF=TF.subtract(goog.math.Long.fromBits(1,0));
		   var IF=SF.lessThanOrEqual(HF)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(IF.g){
		   case 1:
		    $R(1,[],"False");break;
		   case 2:
		    $M(wF,function(JF){
		     switch(JF.g){
		     case 1:
		      $R(2,[],"True");break;
		     case 2:
		      $M(yF,function(KF){
		       var LF=KF.v[0],MF=KF.v[1];
		       $M(DF,function(NF){
			switch(NF.g){
			case 1:
			 $A($$GHCziList_badHead);break;
			case 2:
			 var OF=NF.v[0];
			 $M(OF,function(PF){
			  var QF=PF.v[0],RF=PF.v[1];
			  $$Freecell$k1.J(LF,MF,QF,RF);
			 },[LF,MF]);break;
			}
		       },[LF,MF]);
		      },[DF]);break;
		     }
		    },[yF,DF]);break;
		   }
		  },[wF,yF,DF,TF]);
		 },[wF,yF,DF,xF]);break;
		}
	       },[wF,yF,DF,xF]);
	      },[wF,yF,xF],"sat");
	      var UF=$t(function(){
	       $$GHCziList_zdwlen.C([wF,goog.math.Long.fromBits(0,0)],function(YF){
		var XF=$hs_int2Doublezh(YF);
		var WF=XF*70.0;
		var VF=300.0-WF;
		$R(1,[VF],"D#");
	       },[]);
	      },[wF],"sat");
	      var ZF=$d(1,[pE,UF],"sat");
	      var aG=$d(1,[ZF,$$Freecell$c],"sat");
	      $r([nE,aG,CF]);
	     },[pE,nE],"$wlvl2");
	     var bG=$f(2,function(cG,dG){
	      vF.C([cG,dG],function(eG){
	       var fG=eG[0],gG=eG[1],hG=eG[2];
	       $R(1,[fG,gG,hG],"Destination");
	      },[]);
	     },[vF],"lvl105");
	     var iG=$f(1,function(jG){
	      $$GHCziList_foldr2.J($$Freecell$P2,$$GHCziTypes_ZMZN,vE,jG);
	     },[vE],"lvl106");
	     var kG=$f(2,function(lG,mG){
	      var nG=$hs_newMVarzh(mG);
	      var oG=nG[0],pG=nG[1];
	      var qG=$f(1,function(rG){
	       var sG=$hs_noDuplicatezh(rG);
	       $k($hs_takeMVarzh,[pG,sG]);
	      },[pG],"sat");
	      $$GHCziIO_unsafeDupableInterleaveIO.C([qG,oG],function(tG){
	       var uG=tG[0],vG=tG[1];
	       var wG=$t(function(){
		var xG=$t(function(){
		 $M(vG,function(yG){
		  var zG=yG.v[0];
		  $A(zG);
		 },[]);
		},[vG],"ds2");
		var AG=$t(function(){
		 $M(xG,function(BG){
		  var CG=BG.v[0];
		  $A(CG);
		 },[]);
		},[xG],"sat");
		var DG=$t(function(){
		 $M(xG,function(EG){
		  var FG=EG.v[1];
		  $A(FG);
		 },[]);
		},[xG],"sat");
		$$FRPziSodiumziPlain_zdwa8.C([DG,AG],function(GG){
		 var HG=GG[0],IG=GG[1];
		 $R(1,[HG,IG],"Event");
		},[]);
	       },[vG],"sat");
	       $$FRPziSodiumziPlain_switch1.C([lE,wG,lG,uG],function(JG){
		var KG=JG[0],LG=JG[1];
		$M(LG,function(MG){
		 var NG=MG.v[0],OG=MG.v[1];
		 var PG=$t(function(){
		  var QG=$t(function(){
		   $$FRPziSodiumziPlain_zdwa5.C([xE,Fz,NG],function(RG){
		    var SG=RG[0],TG=RG[1];
		    $R(1,[SG,TG],"Event");
		   },[]);
		  },[Fz,xE,NG],"sat");
		  $$FRPziSodiumziPlain_zdwa7.C([QG],function(UG){
		   var VG=UG[0],WG=UG[1];
		   $R(1,[VG,WG],"Event");
		  },[]);
		 },[Fz,xE,NG],"a18");
		 var XG=$t(function(){
		  $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_snd,PG],function(YG){
		   var ZG=YG[0],aH=YG[1];
		   $R(1,[ZG,aH],"Event");
		  },[]);
		 },[PG],"a19");
		 var bH=$t(function(){
		  $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_fst,PG],function(cH){
		   var dH=cH[0],eH=cH[1];
		   $R(1,[dH,eH],"Event");
		  },[]);
		 },[PG],"sat");
		 var fH=$t(function(){
		  $$FRPziSodiumziPlain_zdwa5.C([$$Freecell$A1,mE,NG],function(gH){
		   var hH=gH[0],iH=gH[1];
		   $R(1,[hH,iH],"Event");
		  },[]);
		 },[NG,mE],"sat");
		 var jH=$d(1,[fH,bH,NG,XG],"sat");
		 var kH=$d(1,[jH,OG],"sat");
		 $b($hs_putMVarzh,[pG,kH,KG],function(WH){
		  var lH=$t(function(){
		   $M(NG,function(mH){
		    var nH=mH.v[0],oH=mH.v[1];
		    var pH=$f(1,function(qH){
		     var rH=$f(1,function(sH){
		      $$FRPziSodiumziPlain_unSample.C([oH,sH],function(tH){
		       var uH=tH[0],vH=tH[1];
		       var wH=$f(1,function(z){
			bG.J(vH,z);
		       },[bG,vH],"sat");
		       $r([uH,wH]);
		      },[bG]);
		     },[bG,oH],"sat");
		     $r([qH,rH]);
		    },[bG,oH],"sat");
		    var xH=$d(1,[pH],"sat");
		    var yH=$t(function(){
		     $$FRPziSodiumziPlain_zdwa.C([bG,nH],function(zH){
		      var AH=zH[0],BH=zH[1];
		      $R(1,[AH,BH],"Event");
		     },[]);
		    },[bG,nH],"sat");
		    var CH=$d(1,[yH,xH],"sat");
		    $$FRPziSodiumziPlain_zdwzdczlztzg.J(CH,aE);
		   },[aE,bG]);
		  },[aE,bG,NG],"sat");
		  var DH=$t(function(){
		   $M(NG,function(EH){
		    var FH=EH.v[0],GH=EH.v[1];
		    var HH=$f(1,function(IH){
		     var JH=$f(1,function(KH){
		      $$FRPziSodiumziPlain_unSample.C([GH,KH],function(LH){
		       var MH=LH[0],NH=LH[1];
		       var OH=$t(function(){
			$$GHCziList_foldr2.J($$Freecell$P2,$$GHCziTypes_ZMZN,vE,NH);
		       },[vE,NH],"sat");
		       $r([MH,OH]);
		      },[vE]);
		     },[vE,GH],"sat");
		     $r([IH,JH]);
		    },[vE,GH],"sat");
		    var PH=$d(1,[HH],"sat");
		    var QH=$t(function(){
		     $$FRPziSodiumziPlain_zdwa.C([iG,FH],function(RH){
		      var SH=RH[0],TH=RH[1];
		      $R(1,[SH,TH],"Event");
		     },[]);
		    },[iG,FH],"sat");
		    $R(1,[QH,PH],"Behavior");
		   },[vE,iG]);
		  },[vE,iG,NG],"sat");
		  var UH=$d(1,[DH,lH,XG],"sat");
		  var VH=$d(1,[UH,OG],"sat");
		  $r([WH,VH]);
		 },[aE,vE,bG,iG,NG,XG,OG]);
		},[Fz,aE,vE,xE,bG,iG,pG,mE,KG]);
	       },[Fz,aE,vE,xE,bG,iG,pG,mE]);
	      },[Fz,aE,vE,xE,bG,iG,pG,lE,lG,mE]);
	     },[Fz,aE,vE,xE,bG,iG,lE,mE],"sat");
	     $A(kG);break;
	    default:
	     $A($$Freecell$x1);
	    }
	   },[Fz,aE,lE,mE]);
	  },[Fz,aE]);
	 },[Fz,aE,gE],"m");
	 var XH=$t(function(){
	  dE.J(hE);
	 },[hE,dE],"ys1");
	 var YH=$f(2,function(ZH,aI){
	  iE.C([ZH,aI],function(bI){
	   var cI=bI[0],dI=bI[1];
	   $M(dI,function(eI){
	    var fI=eI.v[0],gI=eI.v[1];
	    XH.C([gI,cI],function(hI){
	     var iI=hI[0],jI=hI[1];
	     $M(jI,function(kI){
	      var lI=kI.v[0],mI=kI.v[1];
	      var nI=$d(2,[fI,lI],"sat");
	      var oI=$d(1,[nI,mI],"sat");
	      $r([iI,oI]);
	     },[iI,fI]);
	    },[fI]);
	   },[XH,cI]);
	  },[XH]);
	 },[iE,XH],"sat");
	 $A(YH);break;
	}
       },[Fz,aE,dE]);
      },[Fz,aE],"go4");
      var pI=$t(function(){
       $$Freecell$f1.J(LD,$$Freecell$t1);
      },[LD],"sat");
      $$GHCziList_zzip3.C([$$Freecell$t1,Rw,pI],function(qI){
       dE.C([qI,xD,GD],function(rI){
	var sI=rI[0],tI=rI[1];
	$M(tI,function(uI){
	 var vI=uI.v[0],wI=uI.v[1];
	 $$Freecell$R2.C([vI],function(xI){
	  var yI=xI[0],zI=xI[1],AI=xI[2];
	  var BI=$t(function(){
	   $$Freecell$f1.J(LD,$$Freecell$r1);
	  },[LD],"sat");
	  $$GHCziList_foldr2.C([Kz,$$Freecell$S2,$$Freecell$r1,BI,wI,sI],function(CI){
	   var DI=CI[0],EI=CI[1];
	   $M(EI,function(FI){
	    var GI=FI.v[0],HI=FI.v[1];
	    $$DataziList_zdwunzzip4.C([GI],function(II){
	     var JI=II[0],KI=II[1],LI=II[2],MI=II[3];
	     var NI=$hs_newMVarzh(DI);
	     var OI=NI[0],PI=NI[1];
	     var QI=$f(1,function(RI){
	      var SI=$hs_noDuplicatezh(RI);
	      $k($hs_takeMVarzh,[PI,SI]);
	     },[PI],"sat");
	     $$GHCziIO_unsafeDupableInterleaveIO.C([QI,OI],function(TI){
	      var UI=TI[0],VI=TI[1];
	      var WI=$t(function(){
	       var XI=$t(function(){
		$M(VI,function(YI){
		 var ZI=YI.v[0];
		 $A(ZI);
		},[]);
	       },[VI],"ds1");
	       var aJ=$t(function(){
		$M(XI,function(bJ){
		 var cJ=bJ.v[1];
		 $A(cJ);
		},[]);
	       },[XI],"sat");
	       var dJ=$t(function(){
		var eJ=$t(function(){
		 $M(XI,function(fJ){
		  var gJ=fJ.v[0];
		  $A(gJ);
		 },[]);
		},[XI],"sat");
		var hJ=$t(function(){
		 $$Freecell$f1.C([LD,$$Freecell$w1],function(iJ){
		  switch(iJ.g){
		  case 1:
		   $A($$GHCziList_badHead);break;
		  case 2:
		   var jJ=iJ.v[0];
		   $A(jJ);break;
		  }
		 },[]);
		},[LD],"sat");
		$$FRPziSodiumziPlain_zdwa5.C([$$Freecell$W1,hJ,eJ],function(kJ){
		 var lJ=kJ[0],mJ=kJ[1];
		 $R(1,[lJ,mJ],"Event");
		},[]);
	       },[LD,XI],"sat");
	       $$FRPziSodiumziPlain_zdwa8.C([dJ,aJ],function(nJ){
		var oJ=nJ[0],pJ=nJ[1];
		$R(1,[oJ,pJ],"Event");
	       },[]);
	      },[LD,VI],"sat");
	      $$FRPziSodiumziPlain_switch1.C([$$Freecell$V1,WI,HI,UI],function(qJ){
	       var rJ=qJ[0],sJ=qJ[1];
	       $M(sJ,function(tJ){
		var uJ=tJ.v[0],vJ=tJ.v[1];
		var wJ=$t(function(){
		 var xJ=$t(function(){
		  $$FRPziSodiumziPlain_zdwa5.C([$$Freecell$Y1,Fz,uJ],function(yJ){
		   var zJ=yJ[0],AJ=yJ[1];
		   $R(1,[zJ,AJ],"Event");
		  },[]);
		 },[Fz,uJ],"sat");
		 $$FRPziSodiumziPlain_zdwa7.C([xJ],function(BJ){
		  var CJ=BJ[0],DJ=BJ[1];
		  $R(1,[CJ,DJ],"Event");
		 },[]);
		},[Fz,uJ],"a22");
		var EJ=$t(function(){
		 $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_snd,wJ],function(FJ){
		  var GJ=FJ[0],HJ=FJ[1];
		  $R(1,[GJ,HJ],"Event");
		 },[]);
		},[wJ],"a23");
		var IJ=$t(function(){
		 $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_fst,wJ],function(JJ){
		  var KJ=JJ[0],LJ=JJ[1];
		  $R(1,[KJ,LJ],"Event");
		 },[]);
		},[wJ],"sat");
		var MJ=$d(1,[uJ,IJ,EJ],"sat");
		var NJ=$d(1,[MJ,vJ],"sat");
		$b($hs_putMVarzh,[PI,NJ,rJ],function(IM){
		 $$FRPziSodiumziPlain_switch1.C([$$Freecell$f2,Gz,vJ,IM],function(OJ){
		  var PJ=OJ[0],QJ=OJ[1];
		  $M(QJ,function(RJ){
		   var SJ=RJ.v[0],TJ=RJ.v[1];
		   var UJ=$hs_newMVarzh(PJ);
		   var VJ=UJ[0],WJ=UJ[1];
		   var XJ=$f(1,function(YJ){
		    var ZJ=$hs_noDuplicatezh(YJ);
		    $k($hs_takeMVarzh,[WJ,ZJ]);
		   },[WJ],"sat");
		   $$GHCziIO_unsafeDupableInterleaveIO.C([XJ,VJ],function(aK){
		    var bK=aK[0],cK=aK[1];
		    var dK=$t(function(){
		     var eK=$t(function(){
		      var fK=$t(function(){
		       var gK=$t(function(){
			var hK=$d(2,[EJ,$$GHCziTypes_ZMZN],"sat");
			$$GHCziBase_zpzp.J(LI,hK);
		       },[EJ,LI],"sat");
		       $$GHCziBase_zpzp.C([AI,gK],function(iK){
			switch(iK.g){
			case 1:
			 $A($$GHCziList_foldr3);break;
			case 2:
			 var jK=iK.v[0],kK=iK.v[1];
			 $M(kK,function(lK){
			  switch(lK.g){
			  case 1:
			   $A(jK);break;
			  case 2:
			   var mK=lK.v[0],nK=lK.v[1];
			   var oK=$t(function(){
			    $$GHCziList_foldr1zuzdsfoldr1.J($$FRPziSodiumziPlain_merge1,mK,nK);
			   },[mK,nK],"sat");
			   $$FRPziSodiumziPlain_zdwa8.C([jK,oK],function(pK){
			    var qK=pK[0],rK=pK[1];
			    $R(1,[qK,rK],"Event");
			   },[]);break;
			  }
			 },[jK]);break;
			}
		       },[]);
		      },[EJ,AI,LI],"sat");
		      $$FRPziSodiumziPlain_zdwa.C([$$DataziMaybe_Just,fK],function(sK){
		       var tK=sK[0],uK=sK[1];
		       $R(1,[tK,uK],"Event");
		      },[]);
		     },[EJ,AI,LI],"sat");
		     var vK=$t(function(){
		      var wK=$t(function(){
		       $M(cK,function(xK){
			var yK=xK.v[0];
			$M(yK,function(zK){
			 var AK=zK.v[0];
			 $A(AK);
			},[]);
		       },[]);
		      },[cK],"sat");
		      $$FRPziSodiumziPlain_zdwa.C([$$Freecell$h2,wK],function(BK){
		       var CK=BK[0],DK=BK[1];
		       $R(1,[CK,DK],"Event");
		      },[]);
		     },[cK],"sat");
		     $$FRPziSodiumziPlain_zdwa8.C([vK,eK],function(EK){
		      var FK=EK[0],GK=EK[1];
		      $R(1,[FK,GK],"Event");
		     },[]);
		    },[EJ,cK,AI,LI],"sat");
		    $$FRPziSodiumziPlain_switch1.C([$$DataziMaybe_Nothing,dK,TJ,bK],function(HK){
		     var IK=HK[0],JK=HK[1];
		     $M(JK,function(KK){
		      var LK=KK.v[0],MK=KK.v[1];
		      var NK=$t(function(){
		       var OK=$t(function(){
			$$FRPziSodiumziPlain_zdwa5.C([$$Freecell$i2,Fz,LK],function(PK){
			 var QK=PK[0],RK=PK[1];
			 $R(1,[QK,RK],"Event");
			},[]);
		       },[Fz,LK],"sat");
		       $$FRPziSodiumziPlain_zdwa7.C([OK],function(SK){
			var TK=SK[0],UK=SK[1];
			$R(1,[TK,UK],"Event");
		       },[]);
		      },[Fz,LK],"a29");
		      var VK=$d(1,[NK,LK],"sat");
		      var WK=$d(1,[VK,MK],"sat");
		      $b($hs_putMVarzh,[WJ,WK,IK],function(HM){
		       var XK=$t(function(){
			$M(SJ,function(YK){
			 var ZK=YK.v[0],aL=YK.v[1];
			 var bL=$f(1,function(cL){
			  var dL=$f(1,function(eL){
			   $$FRPziSodiumziPlain_unSample.C([aL,eL],function(fL){
			    var gL=fL[0],hL=fL[1];
			    var iL=$f(1,function(z){
			     $$Freecell$l2.J(hL,z);
			    },[hL],"sat");
			    $r([gL,iL]);
			   },[]);
			  },[aL],"sat");
			  $r([cL,dL]);
			 },[aL],"sat");
			 var jL=$d(1,[bL],"sat");
			 var kL=$t(function(){
			  $$FRPziSodiumziPlain_zdwa.C([$$Freecell$l2,ZK],function(lL){
			   var mL=lL[0],nL=lL[1];
			   $R(1,[mL,nL],"Event");
			  },[]);
			 },[ZK],"sat");
			 var oL=$d(1,[kL,jL],"sat");
			 $$FRPziSodiumziPlain_zdwzdczlztzg.J(oL,LK);
			},[LK]);
		       },[LK,SJ],"a30");
		       var pL=$t(function(){
			$M(uJ,function(qL){
			 var rL=qL.v[0],sL=qL.v[1];
			 var tL=$f(1,function(uL){
			  var vL=$f(1,function(wL){
			   $$FRPziSodiumziPlain_unSample.C([sL,wL],function(xL){
			    var yL=xL[0],zL=xL[1];
			    var AL=$t(function(){
			     $$GHCziList_zzipWith.J($$Freecell$Z1,$$Freecell$K1,zL);
			    },[zL],"sat");
			    $r([yL,AL]);
			   },[]);
			  },[sL],"sat");
			  $r([uL,vL]);
			 },[sL],"sat");
			 var BL=$d(1,[tL],"sat");
			 var CL=$t(function(){
			  $$FRPziSodiumziPlain_zdwa.C([$$Freecell$a2,rL],function(DL){
			   var EL=DL[0],FL=DL[1];
			   $R(1,[EL,FL],"Event");
			  },[]);
			 },[rL],"sat");
			 $R(1,[CL,BL],"Behavior");
			},[]);
		       },[uJ],"a31");
		       var GL=$t(function(){
			$M(MI,function(HL){
			 switch(HL.g){
			 case 1:
			  $A($$GHCziList_foldr3);break;
			 case 2:
			  var IL=HL.v[0],JL=HL.v[1];
			  $M(JL,function(KL){
			   switch(KL.g){
			   case 1:
			    $A(IL);break;
			   case 2:
			    var LL=KL.v[0],ML=KL.v[1];
			    $M(IL,function(NL){
			     var OL=NL.v[0],PL=NL.v[1];
			     $$GHCziList_foldr1zuzdsfoldr1.C([$$Freecell$d2,LL,ML],function(QL){
			      var RL=$f(1,function(SL){
			       var TL=$f(1,function(UL){
				$$FRPziSodiumziPlain_unSample.C([PL,UL],function(VL){
				 var WL=VL[0],XL=VL[1];
				 var YL=$f(1,function(z){
				  $$GHCziBase_plusInt.J(XL,z);
				 },[XL],"sat");
				 $r([WL,YL]);
				},[]);
			       },[PL],"sat");
			       $r([SL,TL]);
			      },[PL],"sat");
			      var ZL=$d(1,[RL],"sat");
			      var aM=$t(function(){
			       $$FRPziSodiumziPlain_zdwa.C([$$GHCziBase_plusInt,OL],function(bM){
				var cM=bM[0],dM=bM[1];
				$R(1,[cM,dM],"Event");
			       },[]);
			      },[OL],"sat");
			      var eM=$d(1,[aM,ZL],"sat");
			      $$FRPziSodiumziPlain_zdwzdczlztzg.J(eM,QL);
			     },[OL,PL]);
			    },[LL,ML]);break;
			   }
			  },[IL]);break;
			 }
			},[]);
		       },[MI],"sat");
		       var fM=$t(function(){
			$M(uJ,function(gM){
			 var hM=gM.v[0],iM=gM.v[1];
			 var jM=$f(1,function(kM){
			  var lM=$f(1,function(mM){
			   $$FRPziSodiumziPlain_unSample.C([iM,mM],function(nM){
			    var oM=nM[0],pM=nM[1];
			    var qM=$t(function(){
			     $$Freecell$c2.J(pM);
			    },[pM],"sat");
			    $r([oM,qM]);
			   },[]);
			  },[iM],"sat");
			  $r([kM,lM]);
			 },[iM],"sat");
			 var rM=$d(1,[jM],"sat");
			 var sM=$t(function(){
			  $$FRPziSodiumziPlain_zdwa.C([$$Freecell$c2,hM],function(tM){
			   var uM=tM[0],vM=tM[1];
			   $R(1,[uM,vM],"Event");
			  },[]);
			 },[hM],"sat");
			 $R(1,[sM,rM],"Behavior");
			},[]);
		       },[uJ],"sat");
		       var wM=$d(1,[zI,KI,fM,GL,NK,yI,JI,pL,XK],"sat");
		       var xM=$d(1,[wM,MK],"sat");
		       $b($hs_putMVarzh,[BD,xM,HM],function(GM){
			var yM=$d(2,[XK],"sat");
			var zM=$d(2,[pL],"sat");
			var AM=$d(1,[zM,yM],"sat");
			var BM=$t(function(){
			 $$Freecell$p1.J(JI);
			},[JI],"sat");
			var CM=$d(1,[BM,AM],"sat");
			var DM=$t(function(){
			 $$Freecell$p1.J(yI);
			},[yI],"sat");
			var EM=$d(1,[DM,CM],"sat");
			var FM=$d(1,[EM,MK],"sat");
			$r([GM,FM]);
		       },[MK,XK,pL,yI,JI]);
		      },[BD,uJ,LK,NK,MK,SJ,zI,KI,MI,yI,JI]);
		     },[Fz,BD,uJ,WJ,IK,SJ,zI,KI,MI,yI,JI]);
		    },[Fz,BD,uJ,WJ,SJ,zI,KI,MI,yI,JI]);
		   },[Fz,BD,uJ,EJ,WJ,AI,LI,TJ,SJ,zI,KI,MI,yI,JI]);
		  },[Fz,BD,uJ,EJ,PJ,AI,LI,zI,KI,MI,yI,JI]);
		 },[Fz,BD,uJ,EJ,AI,LI,zI,KI,MI,yI,JI]);
		},[Fz,Gz,BD,uJ,EJ,vJ,AI,LI,zI,KI,MI,yI,JI]);
	       },[Fz,Gz,BD,PI,rJ,AI,LI,zI,KI,MI,yI,JI]);
	      },[Fz,Gz,BD,PI,AI,LI,zI,KI,MI,yI,JI]);
	     },[Fz,Gz,BD,LD,PI,HI,AI,LI,zI,KI,MI,yI,JI]);
	    },[Fz,Gz,BD,LD,DI,HI,AI,zI,yI]);
	   },[Fz,Gz,BD,LD,DI,AI,zI,yI]);
	  },[Fz,Gz,BD,LD,AI,zI,yI]);
	 },[Fz,Gz,Kz,BD,LD,wI,sI]);
	},[Fz,Gz,Kz,BD,LD,sI]);
       },[Fz,Gz,Kz,BD,LD]);
      },[Fz,Gz,Kz,BD,LD,dE,xD,GD]);
     },[Rw,Fz,Gz,Kz,BD,xD]);
    },[Rw,Fz,Gz,Kz],"sat");
    $A(wD);
   },[Rw],"sat");
   $r([Pw,Ez]);
  },[]);
 },[Lw]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_Grave=$D(3,function(){
 $r([]);
},"at src/Freecell.hs:56:40");
var $$Freecell_Ace=$D(1,function(){
 $r([]);
},"at src/Freecell.hs:29:14");
var $$Freecell_King=$D(13,function(){
 $r([]);
},"at src/Freecell.hs:29:98");
var $$Freecell_Spades=$D(1,function(){
 $r([]);
},"at src/Freecell.hs:27:14");
var $$Freecell_Hearts=$D(4,function(){
 $r([]);
},"at src/Freecell.hs:27:42");
var $$Freecell$a=$D(1,function(){
 $r([100.0]);
},"a");
var $$Freecell$b=$D(1,function(){
 $r([150.0]);
},"a1");
var $$Freecell$c=$D(1,function(){
 $r([$$Freecell$a,$$Freecell$b]);
},"at src/Freecell.hs:51:1");
var $$Freecell$d=$D(1,function(){
 $r(["1"]);
},"lvl");
var $$Freecell$e=$D(1,function(){
 $r(["2"]);
},"lvl1");
var $$Freecell$f=$D(1,function(){
 $r(["3"]);
},"lvl2");
var $$Freecell$g=$D(1,function(){
 $r(["4"]);
},"lvl3");
var $$Freecell$h=$D(1,function(){
 $r(["5"]);
},"lvl4");
var $$Freecell$i=$D(1,function(){
 $r(["6"]);
},"lvl5");
var $$Freecell$j=$D(1,function(){
 $r(["7"]);
},"lvl6");
var $$Freecell$k=$D(1,function(){
 $r(["8"]);
},"lvl7");
var $$Freecell$l=$D(1,function(){
 $r(["9"]);
},"lvl8");
var $$Freecell$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("10");
},"lvl9");
var $$Freecell$n=$D(1,function(){
 $r(["j"]);
},"lvl10");
var $$Freecell$o=$D(1,function(){
 $r(["q"]);
},"lvl11");
var $$Freecell$p=$D(1,function(){
 $r(["k"]);
},"lvl12");
var $$Freecell$q=$D(1,function(){
 $r(["s"]);
},"lvl13");
var $$Freecell$r=$D(1,function(){
 $r(["c"]);
},"lvl14");
var $$Freecell$s=$D(1,function(){
 $r(["d"]);
},"lvl15");
var $$Freecell$t=$D(1,function(){
 $r(["h"]);
},"lvl16");
var $$Freecell$u=$T(function(){
 $$GHCziCString_unpackCStringzh.J(".png");
},"lvl17");
var $$Freecell$v=$D(2,function(){
 $r([$$Freecell$d,$$Freecell$u]);
},"lvl18");
var $$Freecell$w=$D(2,function(){
 $r([$$Freecell$e,$$Freecell$u]);
},"lvl19");
var $$Freecell$x=$D(2,function(){
 $r([$$Freecell$f,$$Freecell$u]);
},"lvl20");
var $$Freecell$y=$D(2,function(){
 $r([$$Freecell$g,$$Freecell$u]);
},"lvl21");
var $$Freecell$z=$D(2,function(){
 $r([$$Freecell$h,$$Freecell$u]);
},"lvl22");
var $$Freecell$A=$D(2,function(){
 $r([$$Freecell$i,$$Freecell$u]);
},"lvl23");
var $$Freecell$B=$D(2,function(){
 $r([$$Freecell$j,$$Freecell$u]);
},"lvl24");
var $$Freecell$C=$D(2,function(){
 $r([$$Freecell$k,$$Freecell$u]);
},"lvl25");
var $$Freecell$D=$D(2,function(){
 $r([$$Freecell$l,$$Freecell$u]);
},"lvl26");
var $$Freecell$E=$T(function(){
 $$GHCziBase_zpzp.J($$Freecell$m,$$Freecell$u);
},"lvl27");
var $$Freecell$F=$D(2,function(){
 $r([$$Freecell$n,$$Freecell$u]);
},"lvl28");
var $$Freecell$G=$D(2,function(){
 $r([$$Freecell$o,$$Freecell$u]);
},"lvl29");
var $$Freecell$H=$D(2,function(){
 $r([$$Freecell$p,$$Freecell$u]);
},"lvl30");
var $$Freecell$I=$F(3,function(MM,NM,OM){
 var PM=$t(function(){
  var QM=$t(function(){
   var RM=$t(function(){
    $M(NM,function(SM){
     switch(SM.g){
     case 1:
      $A($$Freecell$v);break;
     case 2:
      $A($$Freecell$w);break;
     case 3:
      $A($$Freecell$x);break;
     case 4:
      $A($$Freecell$y);break;
     case 5:
      $A($$Freecell$z);break;
     case 6:
      $A($$Freecell$A);break;
     case 7:
      $A($$Freecell$B);break;
     case 8:
      $A($$Freecell$C);break;
     case 9:
      $A($$Freecell$D);break;
     case 10:
      $A($$Freecell$E);break;
     case 11:
      $A($$Freecell$F);break;
     case 12:
      $A($$Freecell$G);break;
     case 13:
      $A($$Freecell$H);break;
     }
    },[]);
   },[NM],"a11");
   $M(OM,function(TM){
    switch(TM.g){
    case 1:
     $R(2,[$$Freecell$q,RM],":");break;
    case 2:
     $R(2,[$$Freecell$r,RM],":");break;
    case 3:
     $R(2,[$$Freecell$s,RM],":");break;
    case 4:
     $R(2,[$$Freecell$t,RM],":");break;
    }
   },[RM]);
  },[NM,OM],"sat");
  var UM=$d(2,[$$SystemziFilePathziPosix_pathSeparator,QM],"sat");
  $$GHCziCString_unpackAppendCStringzh.J("cards",UM);
 },[NM,OM],"sat");
 var VM=$d(1,[MM,$$Freecell$c],"sat");
 $r([VM,PM]);
},"at src/Freecell.hs:95:1");
var $$Freecell$J=$F(2,function(WM,XM){
 $M(XM,function(YM){
  var ZM=YM.v[0],aN=YM.v[1];
  $$Freecell$I.C([WM,ZM,aN],function(bN){
   var cN=bN[0],dN=bN[1];
   $R(1,[cN,dN],"(,)");
  },[]);
 },[WM]);
},"at src/Freecell.hs:95:1");
var $$Freecell$K=$T(function(){
 $$GHCziCString_unpackCStringzh.J("empty-space.png");
},"lvl31");
var $$Freecell$L=$D(2,function(){
 $r([$$SystemziFilePathziPosix_pathSeparator,$$Freecell$K]);
},"lvl32");
var $$Freecell$M=$T(function(){
 $$GHCziCString_unpackAppendCStringzh.J("cards",$$Freecell$L);
},"lvl33");
var $$Freecell$N=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl34");
var $$Freecell$Q=$D(1,function(){
 $r([")"]);
},"lvl37");
var $$Freecell$R=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl38");
var $$Freecell$S=$T(function(){
 $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(3,0),$$Freecell$R);
},"lvl39");
var $$Freecell$T=$T(function(){
 $$GHCziCString_unpackAppendCStringzh.J(") is outside of enumeration's range (0,",$$Freecell$S);
},"lvl40");
var $$Freecell$U=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl41");
var $$Freecell$V=$T(function(){
 $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(12,0),$$Freecell$U);
},"lvl42");
var $$Freecell$W=$T(function(){
 $$GHCziCString_unpackAppendCStringzh.J(") is outside of enumeration's range (0,",$$Freecell$V);
},"lvl43");
var $$Freecell$e1=$D(1,function(){
 $r([800.0]);
},"at src/Freecell.hs:90:1");
var $$Freecell$f1=$F(2,function(eN,fN){
 var gN=$f(1,function(hN){
  var iN=$t(function(){
   var jN=$f(1,function(kN){
    $M(kN,function(lN){
     var mN=lN.v[0],nN=lN.v[1];
     $$Freecell_zdfEqLocationzuzdczeze.C([mN,hN],function(oN){
      switch(oN.g){
      case 1:
       $R(1,[],"Nothing");break;
      case 2:
       $R(2,[nN],"Just");break;
      }
     },[nN]);
    },[hN]);
   },[hN],"sat");
   $$FRPziSodiumziPlain_zdwa.C([jN,eN],function(pN){
    var qN=pN[0],rN=pN[1];
    $R(1,[qN,rN],"Event");
   },[]);
  },[hN,eN],"sat");
  $$FRPziSodiumziPlain_zdwa7.C([iN],function(sN){
   var tN=sN[0],uN=sN[1];
   $R(1,[tN,uN],"Event");
  },[]);
 },[eN],"sat");
 $$GHCziBase_map.J(gN,fN);
},"at src/Freecell.hs:287:1");
var $$Freecell$i1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("succ{Value}: tried to take `succ' of last tag in enumeration");
},"lvl53");
var $$Freecell$k1=$F(4,function(vN,wN,xN,yN){
 $M(wN,function(zN){
  switch(zN.g){
  case 3:
   $M(yN,function(TN){
    switch(TN.g){
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    default:
     $b(function(){
      $M(vN,function(cO){
       $r($hs_dataToTagzh(cO));
      },[xN]);
     },[],function(UN){
      switch(UN.toString()){
      case "0":
       $R(1,[],"False");break;
      default:
       var bO=UN.add(goog.math.Long.fromBits(4294967295,4294967295));
       var VN=$hs_tagToEnumzh(bO);
       $M(xN,function(WN){
	$b(function(){
	 $M(WN,function(aO){
	  $r($hs_dataToTagzh(aO));
	 },[VN]);
	},[],function(YN){
	 $b(function(){
	  $M(VN,function(ZN){
	   $r($hs_dataToTagzh(ZN));
	  },[YN]);
	 },[],function(XN){
	  $r(XN.equals(YN)?$$GHCziTypes_True:$$GHCziTypes_False);
	 },[YN]);
	},[VN]);
       },[VN]);
      }
     },[xN]);
    }
   },[vN,xN]);break;
  case 4:
   $M(yN,function(dO){
    switch(dO.g){
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    default:
     $b(function(){
      $M(vN,function(mO){
       $r($hs_dataToTagzh(mO));
      },[xN]);
     },[],function(eO){
      switch(eO.toString()){
      case "0":
       $R(1,[],"False");break;
      default:
       var lO=eO.add(goog.math.Long.fromBits(4294967295,4294967295));
       var fO=$hs_tagToEnumzh(lO);
       $M(xN,function(gO){
	$b(function(){
	 $M(gO,function(kO){
	  $r($hs_dataToTagzh(kO));
	 },[fO]);
	},[],function(iO){
	 $b(function(){
	  $M(fO,function(jO){
	   $r($hs_dataToTagzh(jO));
	  },[iO]);
	 },[],function(hO){
	  $r(hO.equals(iO)?$$GHCziTypes_True:$$GHCziTypes_False);
	 },[iO]);
	},[fO]);
       },[fO]);
      }
     },[xN]);
    }
   },[vN,xN]);break;
  default:
   $M(yN,function(AN){
    switch(AN.g){
    case 3:
     $b(function(){
      $M(vN,function(JN){
       $r($hs_dataToTagzh(JN));
      },[xN]);
     },[],function(BN){
      switch(BN.toString()){
      case "0":
       $R(1,[],"False");break;
      default:
       var IN=BN.add(goog.math.Long.fromBits(4294967295,4294967295));
       var CN=$hs_tagToEnumzh(IN);
       $M(xN,function(DN){
	$b(function(){
	 $M(DN,function(HN){
	  $r($hs_dataToTagzh(HN));
	 },[CN]);
	},[],function(FN){
	 $b(function(){
	  $M(CN,function(GN){
	   $r($hs_dataToTagzh(GN));
	  },[FN]);
	 },[],function(EN){
	  $r(EN.equals(FN)?$$GHCziTypes_True:$$GHCziTypes_False);
	 },[FN]);
	},[CN]);
       },[CN]);
      }
     },[xN]);break;
    case 4:
     $b(function(){
      $M(vN,function(SN){
       $r($hs_dataToTagzh(SN));
      },[xN]);
     },[],function(KN){
      switch(KN.toString()){
      case "0":
       $R(1,[],"False");break;
      default:
       var RN=KN.add(goog.math.Long.fromBits(4294967295,4294967295));
       var LN=$hs_tagToEnumzh(RN);
       $M(xN,function(MN){
	$b(function(){
	 $M(MN,function(QN){
	  $r($hs_dataToTagzh(QN));
	 },[LN]);
	},[],function(ON){
	 $b(function(){
	  $M(LN,function(PN){
	   $r($hs_dataToTagzh(PN));
	  },[ON]);
	 },[],function(NN){
	  $r(NN.equals(ON)?$$GHCziTypes_True:$$GHCziTypes_False);
	 },[ON]);
	},[LN]);
       },[LN]);
      }
     },[xN]);break;
    default:
     $R(1,[],"False");
    }
   },[vN,xN]);
  }
 },[yN,vN,xN]);
},"at src/Freecell.hs:76:1");
var $$Freecell$l1=$F(1,function(nO){
 $$GHCziList_zdwsplitAtzh.C([goog.math.Long.fromBits(8,0),nO],function(oO){
  var pO=oO[0],qO=oO[1];
  $M(pO,function(rO){
   switch(rO.g){
   case 1:
    $R(1,[],"[]");break;
   case 2:
    var sO=$t(function(){
     $$Freecell$l1.J(qO);
    },[qO],"sat");
    $R(2,[rO,sO],":");break;
   }
  },[qO]);
 },[]);
},"at src/Freecell.hs:340:5");
var $$Freecell$m1=$T(function(){
 $$Freecell_zdwzdcenumFromTo.J($$Freecell_Ace,$$Freecell_Spades,$$Freecell_King,$$Freecell_Hearts);
},"at src/Freecell.hs:318:13");
var $$Freecell$n1=$T(function(){
 $$GHCziList_zdwlen.C([$$Freecell$m1,goog.math.Long.fromBits(0,0)],function(tO){
  $R(1,[tO],"I#");
 },[]);
},"at src/Freecell.hs:319:9");
var $$Freecell$o1=$T(function(){
 $M($$Freecell$n1,function(uO){
  var vO=uO.v[0];
  var wO=vO.subtract(goog.math.Long.fromBits(1,0));
  $R(1,[wO],"I#");
 },[]);
},"lvl55");
var $$Freecell$p1=$F(1,function(xO){
 $$GHCziBase_map.C([$$Game_BehaviorNode,xO],function(yO){
  switch(yO.g){
  case 1:
   $A($$GHCziList_foldr3);break;
  case 2:
   var zO=yO.v[0],AO=yO.v[1];
   $M(AO,function(BO){
    switch(BO.g){
    case 1:
     $A(zO);break;
    case 2:
     var CO=BO.v[0],DO=BO.v[1];
     var EO=$t(function(){
      $$GHCziList_foldr1zuzdsfoldr1.J($$Game_ZCzpzp,CO,DO);
     },[CO,DO],"sat");
     $R(1,[zO,EO],":++");break;
    }
   },[zO]);break;
  }
 },[]);
},"at src/Freecell.hs:315:5");
var $$Freecell$q1=$F(1,function(FO){
 var GO=$t(function(){
  $M(FO,function(HO){
   switch(HO.toString()){
   case "3":
    $R(1,[],"[]");break;
   default:
    var IO=HO.add(goog.math.Long.fromBits(1,0));
    $$Freecell$q1.J(IO);
   }
  },[]);
 },[FO],"sat");
 var JO=$d(1,[FO],"sat");
 var KO=$d(2,[JO],"sat");
 $R(2,[KO,GO],":");
},"go");
var $$Freecell$r1=$T(function(){
 $$Freecell$q1.J(goog.math.Long.fromBits(0,0));
},"at src/Freecell.hs:297:9");
var $$Freecell$s1=$F(1,function(LO){
 var MO=$t(function(){
  $M(LO,function(NO){
   switch(NO.toString()){
   case "7":
    $R(1,[],"[]");break;
   default:
    var OO=NO.add(goog.math.Long.fromBits(1,0));
    $$Freecell$s1.J(OO);
   }
  },[]);
 },[LO],"sat");
 var PO=$d(1,[LO],"sat");
 var QO=$d(1,[PO],"sat");
 $R(2,[QO,MO],":");
},"go1");
var $$Freecell$t1=$T(function(){
 $$Freecell$s1.J(goog.math.Long.fromBits(0,0));
},"at src/Freecell.hs:296:9");
var $$Freecell$u1=$F(3,function(RO,SO,TO){
 var UO=$t(function(){
  $M(SO,function(VO){
   var WO=VO.v[2];
   $A(WO);
  },[]);
 },[SO],"lvl103");
 var XO=$t(function(){
  $M(SO,function(YO){
   var ZO=YO.v[3];
   $A(ZO);
  },[]);
 },[SO],"a11");
 var aP=$f(1,function(bP){
  $M(bP,function(cP){
   switch(cP.g){
   case 1:
    $r([XO,UO]);break;
   case 2:
    var dP=cP.v[0],eP=cP.v[1];
    $M(dP,function(fP){
     var gP=fP.v[0],hP=fP.v[1],iP=fP.v[2];
     $M(RO,function(jP){
      var kP=jP.v[0],lP=jP.v[1];
      $M(kP,function(mP){
       var nP=mP.v[0];
       $M(hP,function(oP){
	var pP=oP.v[0],qP=oP.v[1];
	$M(pP,function(rP){
	 var sP=rP.v[0],tP=rP.v[1];
	 $M(sP,function(uP){
	  var vP=uP.v[0];
	  $M(qP,function(wP){
	   var xP=wP.v[0],yP=wP.v[1];
	   $M(xP,function(zP){
	    var AP=zP.v[0];
	    var PP=vP-AP;
	    var BP=nP>=PP?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(BP.g){
	    case 1:
	     aP.J(eP);break;
	    case 2:
	     var OP=vP+AP;
	     var CP=nP<=OP?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(CP.g){
	     case 1:
	      aP.J(eP);break;
	     case 2:
	      $M(lP,function(DP){
	       var EP=DP.v[0];
	       $M(tP,function(FP){
		var GP=FP.v[0];
		$M(yP,function(HP){
		 var IP=HP.v[0];
		 var NP=GP-IP;
		 var JP=EP>=NP?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(JP.g){
		 case 1:
		  aP.J(eP);break;
		 case 2:
		  var MP=GP+IP;
		  var KP=EP<=MP?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(KP.g){
		  case 1:
		   aP.J(eP);break;
		  case 2:
		   iP.C([UO],function(LP){
		    switch(LP.g){
		    case 1:
		     aP.J(eP);break;
		    case 2:
		     $r([gP,UO]);break;
		    }
		   },[UO,XO,RO,eP,aP,gP]);break;
		  }break;
		 }
		},[UO,XO,RO,eP,aP,EP,GP,iP,gP]);
	       },[UO,XO,RO,eP,aP,yP,EP,iP,gP]);
	      },[UO,XO,RO,eP,aP,tP,yP,iP,gP]);break;
	     }break;
	    }
	   },[UO,XO,RO,nP,vP,eP,aP,lP,tP,yP,iP,gP]);
	  },[UO,XO,RO,nP,vP,eP,aP,lP,tP,iP,gP]);
	 },[UO,XO,RO,qP,nP,eP,aP,lP,tP,iP,gP]);
	},[UO,XO,RO,qP,nP,eP,aP,lP,iP,gP]);
       },[UO,XO,RO,nP,eP,aP,lP,iP,gP]);
      },[UO,XO,RO,hP,eP,aP,lP,iP,gP]);
     },[UO,XO,RO,hP,eP,aP,iP,gP]);
    },[UO,XO,RO,eP,aP]);break;
   }
  },[UO,XO,RO,aP]);
 },[UO,XO,RO],"$wfindDest");
 aP.J(TO);
},"$wlvl");
var $$Freecell$v1=$F(2,function(QP,RP){
 $M(QP,function(SP){
  var TP=SP.v[0],UP=SP.v[1];
  $$Freecell$u1.C([TP,UP,RP],function(VP){
   var WP=VP[0],XP=VP[1];
   $R(1,[WP,XP],"(,)");
  },[]);
 },[RP]);
},"lvl56");
var $$Freecell$w1=$D(2,function(){
 $r([$$Freecell_Grave,$$GHCziTypes_ZMZN]);
},"lvl57");
var $$Freecell$x1=$T(function(){
 $$ControlziExceptionziBase_patError.J("src/Freecell.hs:(122,1)-(160,33)|function stack");
},"lvl58");
var $$Freecell$y1=$D(1,function(){
 $r([300.0]);
},"at src/Freecell.hs:124:22");
var $$Freecell$z1=$F(1,function(YP){
 $M(YP,function(ZP){
  var aQ=ZP.v[0],bQ=ZP.v[1];
  var cQ=$t(function(){
   $M(bQ,function(dQ){
    var eQ=dQ.v[0];
    var fQ=eQ-70.0;
    $R(1,[fQ],"D#");
   },[]);
  },[bQ],"sat");
  $R(1,[aQ,cQ],"(,)");
 },[]);
},"lvl59");
var $$Freecell$A1=$F(2,function(gQ,hQ){
 $$GHCziBase_zpzp.J(hQ,gQ);
},"lvl60");
var $$Freecell$B1=$T(function(){
 $$ControlziExceptionziBase_patError.J("src/Freecell.hs:(165,1)-(186,46)|function cell");
},"lvl61");
var $$Freecell$C1=$F(1,function(iQ){
 var jQ=$t(function(){
  $M(iQ,function(kQ){
   switch(kQ.g){
   case 1:
    $A($$GHCziList_badHead);break;
   case 2:
    var lQ=kQ.v[0];
    $A(lQ);break;
   }
  },[]);
 },[iQ],"sat");
 $R(2,[jQ],"Just");
},"lvl62");
var $$Freecell$F1=$F(1,function(mQ){
 $M(mQ,function(nQ){
  switch(nQ.g){
  case 1:
   $A($$Freecell$N);break;
  case 2:
   $A($$Freecell_zdfShowLocation1);break;
  }
 },[]);
},"lvl65");
var $$Freecell$G1=$D(1,function(){
 $r([goog.math.Long.fromBits(3,0)]);
},"lvl66");
var $$Freecell$H1=$F(2,function(oQ,pQ){
 var qQ=$t(function(){
  $$GHCziIntegerziType_minusInteger.C([$$Freecell$G1,oQ],function(rQ){
   $$GHCziIntegerziType_doubleFromInteger.C([rQ],function(uQ){
    var tQ=244.2857142857143*uQ;
    var sQ=950.0-tQ;
    $R(1,[sQ],"D#");
   },[]);
  },[]);
 },[oQ],"sat");
 var vQ=$d(1,[qQ,$$Freecell$e1],"sat");
 $R(2,[vQ,pQ],":");
},"lvl67");
var $$Freecell$I1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl68");
var $$Freecell$J1=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl69");
var $$Freecell$K1=$T(function(){
 $$GHCziEnum_enumDeltaToIntegerFB.J($$Freecell$H1,$$GHCziTypes_ZMZN,$$Freecell$I1,$$Freecell$J1,$$Freecell$G1);
},"at src/Freecell.hs:193:9");
var $$Freecell$L1=$F(1,function(wQ){
 $M(wQ,function(xQ){
  switch(xQ.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var yQ=xQ.v[0],zQ=xQ.v[1];
   var AQ=$t(function(){
    $$Freecell$L1.J(zQ);
   },[zQ],"sat");
   var BQ=$d(1,[yQ,$$Freecell$c],"sat");
   $R(2,[BQ,AQ],":");break;
  }
 },[]);
},"xs");
var $$Freecell$M1=$T(function(){
 $$Freecell$L1.J($$Freecell$K1);
},"at src/Freecell.hs:194:9");
var $$Freecell$N1=$D(1,function(){
 $r([583.5714285714286]);
},"a2");
var $$Freecell$O1=$D(1,function(){
 $r([$$Freecell$N1,$$Freecell$e1]);
},"a3");
var $$Freecell$P1=$D(1,function(){
 $r([466.42857142857144]);
},"a4");
var $$Freecell$Q1=$D(1,function(){
 $r([$$Freecell$P1,$$Freecell$b]);
},"a5");
var $$Freecell$R1=$D(1,function(){
 $r([$$Freecell$O1,$$Freecell$Q1]);
},"at src/Freecell.hs:196:9");
var $$Freecell$S1=$D(2,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziTypes_ZMZN]);
},"lvl70");
var $$Freecell$T1=$D(2,function(){
 $r([$$DataziMaybe_Nothing,$$Freecell$S1]);
},"lvl71");
var $$Freecell$U1=$D(2,function(){
 $r([$$DataziMaybe_Nothing,$$Freecell$T1]);
},"lvl72");
var $$Freecell$V1=$D(2,function(){
 $r([$$DataziMaybe_Nothing,$$Freecell$U1]);
},"lvl73");
var $$Freecell$W1=$F(2,function(CQ,DQ){
 $M(CQ,function(EQ){
  switch(EQ.g){
  case 1:
   $A($$GHCziList_badHead);break;
  case 2:
   var FQ=EQ.v[0];
   $M(FQ,function(GQ){
    var HQ=GQ.v[1];
    var IQ=$f(1,function(JQ){
     var KQ=$t(function(){
      var MQ=JQ.add(goog.math.Long.fromBits(1,0));
      var LQ=MQ.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(LQ.g){
      case 1:
       $$GHCziList_dropzudropzh.J(MQ,DQ);break;
      case 2:
       $A(DQ);break;
      }
     },[JQ,DQ],"a11");
     var NQ=$d(2,[GQ],"a12");
     var OQ=$d(2,[NQ,KQ],"n1");
     var PQ=JQ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(PQ.g){
     case 1:
      var QQ=$f(2,function(RQ,SQ){
       $M(RQ,function(TQ){
	switch(TQ.g){
	case 1:
	 $A(OQ);break;
	case 2:
	 var UQ=TQ.v[0],VQ=TQ.v[1];
	 var WQ=SQ.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(WQ.g){
	 case 1:
	  var XQ=$t(function(){
	   var YQ=SQ.subtract(goog.math.Long.fromBits(1,0));
	   QQ.J(VQ,YQ);
	  },[SQ,VQ,QQ],"sat");
	  $R(2,[UQ,XQ],":");break;
	 case 2:
	  $R(2,[UQ,OQ],":");break;
	 }break;
	}
       },[OQ,SQ,QQ]);
      },[OQ],"go4");
      QQ.J(DQ,JQ);break;
     case 2:
      $A(OQ);break;
     }
    },[DQ,GQ],"$j");
    $M(HQ,function(ZQ){
     switch(ZQ.g){
     case 1:
      IQ.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      IQ.J(goog.math.Long.fromBits(1,0));break;
     case 3:
      IQ.J(goog.math.Long.fromBits(2,0));break;
     case 4:
      IQ.J(goog.math.Long.fromBits(3,0));break;
     }
    },[DQ,GQ,IQ]);
   },[DQ]);break;
  }
 },[DQ]);
},"lvl74");
var $$Freecell$X1=$F(2,function(aR,bR){
 $M(aR,function(cR){
  switch(cR.g){
  case 1:
   $R(1,[],"Nothing");break;
  case 2:
   var dR=cR.v[0],eR=cR.v[1];
   $M(dR,function(fR){
    switch(fR.g){
    case 1:
     var gR=$t(function(){
      $M(bR,function(hR){
       var iR=hR.v[0];
       var jR=iR.add(goog.math.Long.fromBits(1,0));
       $R(1,[jR],"I#");
      },[]);
     },[bR],"sat");
     $$Freecell$X1.J(eR,gR);break;
    case 2:
     $R(2,[bR],"Just");break;
    }
   },[eR,bR]);break;
  }
 },[bR]);
},"at src/Freecell.hs:241:9");
var $$Freecell$Y1=$F(2,function(kR,lR){
 $M(kR,function(mR){
  switch(mR.g){
  case 1:
   var nR=mR.v[0];
   var oR=$f(1,function(z){
    $$Game_inside.J(nR,z);
   },[nR],"sat");
   $$GHCziBase_map.C([oR,$$Freecell$M1],function(pR){
    $$Freecell$X1.C([pR,$$Freecell_zdfShowLocation1],function(qR){
     switch(qR.g){
     case 1:
      $R(1,[],"Nothing");break;
     case 2:
      var rR=qR.v[0];
      $M(rR,function(sR){
       var tR=sR.v[0];
       var uR=tR.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(uR.g){
       case 1:
	$$GHCziList_znznzusub.C([lR,tR],function(vR){
	 switch(vR.g){
	 case 1:
	  $R(1,[],"Nothing");break;
	 case 2:
	  var wR=vR.v[0];
	  $M(wR,function(xR){
	   var yR=xR.v[0],zR=xR.v[1];
	   var AR=$d(2,[xR,$$GHCziTypes_ZMZN],"sat");
	   var BR=$t(function(){
	    $$GHCziList_znznzusub.J($$Freecell$K1,tR);
	   },[tR],"sat");
	   var CR=$d(1,[BR,nR,AR,$$Freecell_Grave],"sat");
	   var DR=$t(function(){
	    var ER=$t(function(){
	     var GR=tR.add(goog.math.Long.fromBits(1,0));
	     var FR=GR.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(FR.g){
	     case 1:
	      $$GHCziList_dropzudropzh.J(GR,lR);break;
	     case 2:
	      $A(lR);break;
	     }
	    },[tR,lR],"a11");
	    var HR=$t(function(){
	     $b(function(){
	      $M(yR,function(MR){
	       $r($hs_dataToTagzh(MR));
	      },[zR]);
	     },[],function(IR){
	      switch(IR.toString()){
	      case "0":
	       $R(1,[],"Nothing");break;
	      default:
	       var JR=$t(function(){
		var KR=IR.add(goog.math.Long.fromBits(4294967295,4294967295));
		$r($hs_tagToEnumzh(KR));
	       },[IR],"sat");
	       var LR=$d(1,[JR,zR],"sat");
	       $R(2,[LR],"Just");
	      }
	     },[zR]);
	    },[yR,zR],"a12");
	    var NR=$d(2,[HR,ER],"n1");
	    var OR=tR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(OR.g){
	    case 1:
	     var PR=$f(2,function(QR,RR){
	      $M(QR,function(SR){
	       switch(SR.g){
	       case 1:
		$A(NR);break;
	       case 2:
		var TR=SR.v[0],UR=SR.v[1];
		var VR=RR.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(VR.g){
		case 1:
		 var WR=$t(function(){
		  var XR=RR.subtract(goog.math.Long.fromBits(1,0));
		  PR.J(UR,XR);
		 },[RR,UR,PR],"sat");
		 $R(2,[TR,WR],":");break;
		case 2:
		 $R(2,[TR,NR],":");break;
		}break;
	       }
	      },[NR,RR,PR]);
	     },[NR],"go4");
	     PR.J(lR,tR);break;
	    case 2:
	     $A(NR);break;
	    }
	   },[tR,lR,yR,zR],"sat");
	   var YR=$d(1,[DR,CR],"sat");
	   $R(2,[YR],"Just");
	  },[nR,tR,lR]);break;
	 }
	},[nR,tR,lR]);break;
       case 2:
	$A($$GHCziList_znzn1);break;
       }
      },[nR,lR]);break;
     }
    },[nR,lR]);
   },[nR,lR]);break;
  default:
   $R(1,[],"Nothing");
  }
 },[lR]);
},"lvl75");
var $$Freecell$Z1=$F(2,function(ZR,aS){
 $M(aS,function(bS){
  switch(bS.g){
  case 1:
   var cS=$d(1,[ZR,$$Freecell$c],"sat");
   $R(1,[cS,$$Freecell$M],"(,)");break;
  case 2:
   var dS=bS.v[0];
   $$Freecell$J.J(ZR,dS);break;
  }
 },[ZR]);
},"lvl76");
var $$Freecell$a2=$F(1,function(z){
 $$GHCziList_zzipWith.J($$Freecell$Z1,$$Freecell$K1,z);
},"lvl77");
var $$Freecell$b2=$F(1,function(eS){
 var fS=$f(1,function(gS){
  $M(gS,function(hS){
   switch(hS.g){
   case 1:
    $R(1,[],"False");break;
   case 2:
    var iS=hS.v[0],jS=hS.v[1];
    $M(iS,function(kS){
     var lS=kS.v[0],mS=kS.v[1];
     $M(jS,function(nS){
      switch(nS.g){
      case 1:
       var oS=$f(1,function(pS){
	var qS=pS.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(qS.g){
	case 1:
	 $$GHCziList_znznzusub.C([eS,pS],function(rS){
	  switch(rS.g){
	  case 1:
	   $b(function(){
	    $M(lS,function(tS){
	     $r($hs_dataToTagzh(tS));
	    },[]);
	   },[],function(sS){
	    switch(sS.toString()){
	    case "0":
	     $R(2,[],"True");break;
	    default:
	     $R(1,[],"False");
	    }
	   },[]);break;
	  case 2:
	   var uS=rS.v[0];
	   $M(uS,function(vS){
	    var wS=vS.v[0];
	    $M(lS,function(xS){
	     $b(function(){
	      $M(wS,function(FS){
	       $r($hs_dataToTagzh(FS));
	      },[xS]);
	     },[],function(yS){
	      switch(yS.toString()){
	      case "12":
	       $A($$Freecell_zdfEnumValue2);break;
	      default:
	       var ES=yS.add(goog.math.Long.fromBits(1,0));
	       var zS=$hs_tagToEnumzh(ES);
	       $b(function(){
		$M(zS,function(DS){
		 $r($hs_dataToTagzh(DS));
		},[xS]);
	       },[],function(BS){
		$b(function(){
		 $M(xS,function(CS){
		  $r($hs_dataToTagzh(CS));
		 },[BS]);
		},[],function(AS){
		 $r(AS.equals(BS)?$$GHCziTypes_True:$$GHCziTypes_False);
		},[BS]);
	       },[xS]);
	      }
	     },[xS]);
	    },[wS]);
	   },[lS]);break;
	  }
	 },[lS]);break;
	case 2:
	 $A($$GHCziList_znzn1);break;
	}
       },[eS,lS],"$j");
       $M(mS,function(GS){
	switch(GS.g){
	case 1:
	 oS.J(goog.math.Long.fromBits(0,0));break;
	case 2:
	 oS.J(goog.math.Long.fromBits(1,0));break;
	case 3:
	 oS.J(goog.math.Long.fromBits(2,0));break;
	case 4:
	 oS.J(goog.math.Long.fromBits(3,0));break;
	}
       },[eS,lS,oS]);break;
      case 2:
       $R(1,[],"False");break;
      }
     },[eS,lS,mS]);
    },[jS,eS]);break;
   }
  },[eS]);
 },[eS],"sat");
 $r([$$Freecell_Grave,$$Freecell$R1,fS]);
},"$wlvl1");
var $$Freecell$c2=$F(1,function(HS){
 $$Freecell$b2.C([HS],function(IS){
  var JS=IS[0],KS=IS[1],LS=IS[2];
  $R(1,[JS,KS,LS],"Destination");
 },[]);
},"lvl78");
var $$Freecell$d2=$F(2,function(MS,NS){
 $M(MS,function(OS){
  var PS=OS.v[0],QS=OS.v[1];
  var RS=$f(1,function(SS){
   var TS=$f(1,function(US){
    $$FRPziSodiumziPlain_unSample.C([QS,US],function(VS){
     var WS=VS[0],XS=VS[1];
     var YS=$f(1,function(z){
      $$GHCziBase_plusInt.J(XS,z);
     },[XS],"sat");
     $r([WS,YS]);
    },[]);
   },[QS],"sat");
   $r([SS,TS]);
  },[QS],"sat");
  var ZS=$d(1,[RS],"sat");
  var aT=$t(function(){
   $$FRPziSodiumziPlain_zdwa.C([$$GHCziBase_plusInt,PS],function(bT){
    var cT=bT[0],dT=bT[1];
    $R(1,[cT,dT],"Event");
   },[]);
  },[PS],"sat");
  var eT=$d(1,[aT,ZS],"sat");
  $$FRPziSodiumziPlain_zdwzdczlztzg.J(eT,NS);
 },[NS]);
},"lvl79");
var $$Freecell$e2=$D(1,function(){
 $r([0.0]);
},"lvl80");
var $$Freecell$f2=$D(1,function(){
 $r([$$Freecell$e2,$$Freecell$e2]);
},"lvl81");
var $$Freecell$g2=$F(1,function(fT){
 $M(fT,function(gT){
  switch(gT.g){
  case 1:
   var hT=gT.v[0];
   $A(hT);break;
  case 2:
   var iT=gT.v[0];
   $A(iT);break;
  case 3:
   var jT=gT.v[0];
   $A(jT);break;
  }
 },[]);
},"lvl82");
var $$Freecell$h2=$F(1,function(kT){
 $R(1,[],"Nothing");
},"lvl83");
var $$Freecell$i2=$F(2,function(lT,mT){
 $M(lT,function(nT){
  switch(nT.g){
  case 3:
   var oT=nT.v[0];
   $M(mT,function(pT){
    switch(pT.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     var qT=pT.v[0];
     var rT=$t(function(){
      $M(oT,function(sT){
       var tT=sT.v[0],uT=sT.v[1];
       $M(qT,function(vT){
	var wT=vT.v[0],xT=vT.v[1];
	$M(xT,function(yT){
	 var zT=yT.v[0],AT=yT.v[1];
	 $M(wT,function(BT){
	  var CT=BT.v[0],DT=BT.v[1];
	  var ET=$t(function(){
	   $M(uT,function(FT){
	    var GT=FT.v[0];
	    $M(AT,function(HT){
	     var IT=HT.v[0];
	     $M(DT,function(JT){
	      var KT=JT.v[0];
	      var MT=GT-IT;
	      var LT=MT+KT;
	      $R(1,[LT],"D#");
	     },[GT,IT]);
	    },[DT,GT]);
	   },[AT,DT]);
	  },[uT,AT,DT],"sat");
	  var NT=$t(function(){
	   $M(tT,function(OT){
	    var PT=OT.v[0];
	    $M(zT,function(QT){
	     var RT=QT.v[0];
	     $M(CT,function(ST){
	      var TT=ST.v[0];
	      var VT=PT-RT;
	      var UT=VT+TT;
	      $R(1,[UT],"D#");
	     },[PT,RT]);
	    },[CT,PT]);
	   },[zT,CT]);
	  },[tT,zT,CT],"sat");
	  $R(1,[NT,ET],"(,)");
	 },[tT,zT,uT,AT]);
	},[wT,tT,uT]);
       },[tT,uT]);
      },[qT]);
     },[oT,qT],"sat");
     var WT=$d(1,[rT,qT],"sat");
     $R(2,[WT],"Just");break;
    }
   },[oT]);break;
  default:
   $R(1,[],"Nothing");
  }
 },[mT]);
},"lvl84");
var $$Freecell$j2=$F(1,function(z){
 $$Freecell$z1.J(z);
},"lvl85");
var $$Freecell$k2=$F(3,function(XT,YT,ZT){
 $M(ZT,function(aU){
  switch(aU.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var bU=aU.v[0],cU=aU.v[1];
   var dU=$t(function(){
    YT.J(cU);
   },[cU,YT],"sat");
   var eU=$t(function(){
    $$Freecell$J.J(XT,bU);
   },[XT,bU],"sat");
   $R(2,[eU,dU],":");break;
  }
 },[XT,YT]);
},"lvl86");
var $$Freecell$l2=$F(2,function(fU,gU){
 $M(gU,function(hU){
  switch(hU.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var iU=hU.v[0];
   var jU=$t(function(){
    $M(iU,function(kU){
     var lU=kU.v[2];
     $A(lU);
    },[]);
   },[iU],"sat");
   var mU=$t(function(){
    $M(fU,function(nU){
     var oU=nU.v[0],pU=nU.v[1];
     $M(iU,function(qU){
      var rU=qU.v[0],sU=qU.v[1];
      $M(sU,function(tU){
       var uU=tU.v[0],vU=tU.v[1];
       $M(rU,function(wU){
	var xU=wU.v[0],yU=wU.v[1];
	var zU=$t(function(){
	 $M(pU,function(AU){
	  var BU=AU.v[0];
	  $M(vU,function(CU){
	   var DU=CU.v[0];
	   $M(yU,function(EU){
	    var FU=EU.v[0];
	    var HU=BU-DU;
	    var GU=HU+FU;
	    $R(1,[GU],"D#");
	   },[BU,DU]);
	  },[yU,BU]);
	 },[vU,yU]);
	},[pU,vU,yU],"sat");
	var IU=$t(function(){
	 $M(oU,function(JU){
	  var KU=JU.v[0];
	  $M(uU,function(LU){
	   var MU=LU.v[0];
	   $M(xU,function(NU){
	    var OU=NU.v[0];
	    var QU=KU-MU;
	    var PU=QU+OU;
	    $R(1,[PU],"D#");
	   },[KU,MU]);
	  },[xU,KU]);
	 },[uU,xU]);
	},[oU,uU,xU],"sat");
	$R(1,[IU,zU],"(,)");
       },[oU,uU,pU,vU]);
      },[rU,oU,pU]);
     },[oU,pU]);
    },[iU]);
   },[fU,iU],"sat");
   $$GHCziList_iterateFB.J($$Freecell$k2,$$Freecell$j2,mU,jU);break;
  }
 },[fU]);
},"lvl87");
var $$Freecell$m2=$F(1,function(RU){
 $M(RU,function(SU){
  switch(SU.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var TU=SU.v[0],UU=SU.v[1];
   var VU=$t(function(){
    $$Freecell$m2.J(UU);
   },[UU],"sat");
   var WU=$t(function(){
    $$GHCziBase_zpzp.J($$GHCziTypes_ZMZN,TU);
   },[TU],"sat");
   $R(2,[WU,VU],":");break;
  }
 },[]);
},"xs1");
var $$Freecell$n2=$F(2,function(XU,YU){
 $M(XU,function(ZU){
  switch(ZU.g){
  case 1:
   $$Freecell$m2.J(YU);break;
  case 2:
   var aV=ZU.v[0],bV=ZU.v[1];
   $M(YU,function(cV){
    switch(cV.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var dV=cV.v[0],eV=cV.v[1];
     var fV=$t(function(){
      $$Freecell$n2.J(bV,eV);
     },[bV,eV],"sat");
     var gV=$t(function(){
      var hV=$d(2,[aV,$$GHCziTypes_ZMZN],"sat");
      $$GHCziBase_zpzp.J(hV,dV);
     },[aV,dV],"sat");
     $R(2,[gV,fV],":");break;
    }
   },[aV,bV]);break;
  }
 },[YU]);
},"go2");
var $$Freecell$o2=$F(2,function(iV,jV){
 $M(jV,function(kV){
  switch(kV.g){
  case 1:
   $A(iV);break;
  case 2:
   var lV=kV.v[0],mV=kV.v[1];
   $$Freecell$n2.C([lV,iV],function(nV){
    $$Freecell$o2.J(nV,mV);
   },[mV]);break;
  }
 },[iV]);
},"lgo");
var $$Freecell$p2=$D(2,function(){
 $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);
},"lvl88");
var $$Freecell$q2=$F(1,function(oV){
 var pV=oV.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(pV.g){
 case 1:
  var qV=$t(function(){
   var rV=oV.subtract(goog.math.Long.fromBits(1,0));
   $$Freecell$q2.J(rV);
  },[oV],"sat");
  $R(2,[$$GHCziTypes_ZMZN,qV],":");break;
 case 2:
  $A($$Freecell$p2);break;
 }
},"xs2");
var $$Freecell$r2=$T(function(){
 $$Freecell$q2.J(goog.math.Long.fromBits(8,0));
},"lvl89");
var $$Freecell$s2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Negative range size");
},"lvl90");
var $$Freecell$t2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Int");
},"lvl91");
var $$Freecell$u2=$F(3,function(sV,tV,uV){
 var vV=$d(1,[tV,uV],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,vV,sV,$$Freecell$t2);
},"poly_$w$j");
var $$Freecell$v2=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl92");
var $$Freecell$w2=$F(2,function(wV,xV){
 var yV=$t(function(){
  var zV=$t(function(){
   var AV=$t(function(){
    $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),xV,$$GHCziTypes_ZMZN],function(BV){
     $$GHCziBase_zpzp.J(BV,$$Freecell$v2);
    },[]);
   },[xV],"sat");
   $$GHCziCString_unpackAppendCStringzh.J(" not in range [0..",AV);
  },[xV],"sat");
  $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),wV,$$GHCziTypes_ZMZN],function(CV){
   $$GHCziBase_zpzp.J(CV,zV);
  },[zV]);
 },[wV,xV],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Error in array index; ",yV],function(DV){
  $$GHCziErr_error.J(DV);
 },[]);
},"poly_$w$j1");
var $$Freecell$x2=$F(3,function(EV,FV,GV){
 var HV=$d(1,[FV,GV],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,HV,EV,$$Freecell$t2);
},"poly_$w$j2");
var $$Freecell$y2=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl93");
var $$Freecell$z2=$F(2,function(IV,JV){
 var KV=$t(function(){
  var LV=$t(function(){
   var MV=$t(function(){
    $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),JV,$$GHCziTypes_ZMZN],function(NV){
     $$GHCziBase_zpzp.J(NV,$$Freecell$y2);
    },[]);
   },[JV],"sat");
   $$GHCziCString_unpackAppendCStringzh.J(" not in range [0..",MV);
  },[JV],"sat");
  $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),IV,$$GHCziTypes_ZMZN],function(OV){
   $$GHCziBase_zpzp.J(OV,LV);
  },[LV]);
 },[IV,JV],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Error in array index; ",KV],function(PV){
  $$GHCziErr_error.J(PV);
 },[]);
},"poly_$w$j3");
var $$Freecell$A2=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl94");
var $$Freecell$B2=$F(2,function(QV,RV){
 var SV=$t(function(){
  var TV=$t(function(){
   var UV=$t(function(){
    $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),RV,$$GHCziTypes_ZMZN],function(VV){
     $$GHCziBase_zpzp.J(VV,$$Freecell$A2);
    },[]);
   },[RV],"sat");
   $$GHCziCString_unpackAppendCStringzh.J(" not in range [0..",UV);
  },[RV],"sat");
  $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),QV,$$GHCziTypes_ZMZN],function(WV){
   $$GHCziBase_zpzp.J(WV,TV);
  },[TV]);
 },[QV,RV],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Error in array index; ",SV],function(XV){
  $$GHCziErr_error.J(XV);
 },[]);
},"poly_$w$j4");
var $$Freecell$C2=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl95");
var $$Freecell$D2=$F(2,function(YV,ZV){
 var aW=$t(function(){
  var bW=$t(function(){
   var cW=$t(function(){
    $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),ZV,$$GHCziTypes_ZMZN],function(dW){
     $$GHCziBase_zpzp.J(dW,$$Freecell$C2);
    },[]);
   },[ZV],"sat");
   $$GHCziCString_unpackAppendCStringzh.J(" not in range [0..",cW);
  },[ZV],"sat");
  $$GHCziShow_zdwshowSignedInt.C([goog.math.Long.fromBits(0,0),YV,$$GHCziTypes_ZMZN],function(eW){
   $$GHCziBase_zpzp.J(eW,bW);
  },[bW]);
 },[YV,ZV],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Error in array index; ",aW],function(fW){
  $$GHCziErr_error.J(fW);
 },[]);
},"poly_$w$j5");
var $$Freecell$E2=$T(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(0,0));
},"lvl96");
var $$Freecell$F2=$T(function(){
 $M($$Freecell$o1,function(gW){
  var hW=gW.v[0];
  $$GHCziIntegerziType_smallInteger.J(hW);
 },[]);
},"lvl97");
var $$Freecell$G2=$F(2,function(iW,jW){
 $M(jW,function(kW){
  var lW=$t(function(){
   $$SystemziRandom_zdwzdsrandomIvalInteger.C([$$Freecell$E2,$$Freecell$F2,iW],function(mW){
    var nW=mW[0],oW=mW[1];
    $R(1,[nW,oW],"(,)");
   },[]);
  },[iW],"ds");
  var pW=$t(function(){
   $M(lW,function(qW){
    var rW=qW.v[0];
    $A(rW);
   },[]);
  },[lW],"sat");
  var sW=$t(function(){
   $M(lW,function(tW){
    var uW=tW.v[1];
    $A(uW);
   },[]);
  },[lW],"sat");
  $R(1,[sW,pW],"(,)");
 },[iW]);
},"a6");
var $$Freecell$H2=$D(2,function(){
 $r([$$GHCziTuple_Z0T,$$GHCziTypes_ZMZN]);
},"lvl98");
var $$Freecell$I2=$F(1,function(vW){
 var wW=vW.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(wW.g){
 case 1:
  var xW=$t(function(){
   var yW=vW.subtract(goog.math.Long.fromBits(1,0));
   $$Freecell$I2.J(yW);
  },[vW],"sat");
  $R(2,[$$GHCziTuple_Z0T,xW],":");break;
 case 2:
  $A($$Freecell$H2);break;
 }
},"xs3");
var $$Freecell$J2=$F(1,function(zW){
 $r([zW,$$GHCziTypes_ZMZN]);
},"lvl99");
var $$Freecell$K2=$F(1,function(AW){
 $r([AW,$$Freecell$J2]);
},"a7");
var $$Freecell$L2=$D(1,function(){
 $r([$$Freecell$K2]);
},"a8");
var $$Freecell$M2=$D(1,function(){
 $r([$$FRPziSodiumziPlain_constant2,$$Freecell$L2]);
},"a9");
var $$Freecell$N2=$F(1,function(BW){
 $M(BW,function(CW){
  switch(CW.g){
  case 1:
   $A($$Freecell$M2);break;
  case 2:
   var DW=CW.v[0],EW=CW.v[1];
   $M(DW,function(FW){
    var GW=FW.v[0],HW=FW.v[1];
    $$Freecell$N2.C([EW],function(IW){
     var JW=$f(1,function(KW){
      var LW=$f(1,function(MW){
       $$FRPziSodiumziPlain_unSample.C([HW,MW],function(NW){
	var OW=NW[0],PW=NW[1];
	var QW=$f(1,function(z){
	 $R(2,[PW,z],":");
	},[PW],"sat");
	$r([OW,QW]);
       },[]);
      },[HW],"sat");
      $r([KW,LW]);
     },[HW],"sat");
     var RW=$d(1,[JW],"sat");
     var SW=$t(function(){
      $$FRPziSodiumziPlain_zdwa.C([$$GHCziTypes_ZC,GW],function(TW){
       var UW=TW[0],VW=TW[1];
       $R(1,[UW,VW],"Event");
      },[]);
     },[GW],"sat");
     var WW=$d(1,[SW,RW],"sat");
     $$FRPziSodiumziPlain_zdwzdczlztzg.J(WW,IW);
    },[GW,HW]);
   },[EW]);break;
  }
 },[]);
},"go3");
var $$Freecell$O2=$F(2,function(XW,YW){
 var ZW=$d(1,[$$GHCziTypes_ZMZN,XW],"sat");
 $r([YW,ZW]);
},"a10");
var $$Freecell$P2=$F(3,function(aX,bX,cX){
 var dX=$t(function(){
  $$Freecell$J.J(aX,bX);
 },[aX,bX],"sat");
 $R(2,[dX,cX],":");
},"lvl100");
var $$Freecell$Q2=$F(3,function(eX,fX,gX){
 $M(eX,function(hX){
  var iX=hX.v[0],jX=hX.v[1];
  $M(fX,function(kX){
   var lX=kX.v[0],mX=kX.v[1];
   $$Freecell$k1.C([iX,jX,lX,mX],function(nX){
    switch(nX.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     $A(gX);break;
    }
   },[gX]);
  },[iX,jX,gX]);
 },[fX,gX]);
},"lvl101");
var $$Freecell$R2=$F(1,function(oX){
 $M(oX,function(pX){
  switch(pX.g){
  case 1:
   $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
  case 2:
   var qX=pX.v[0],rX=pX.v[1];
   $M(qX,function(sX){
    var tX=sX.v[0],uX=sX.v[1],vX=sX.v[2];
    var wX=$t(function(){
     $$Freecell$R2.C([rX],function(xX){
      var yX=xX[0],zX=xX[1],AX=xX[2];
      $R(1,[yX,zX,AX],"(,,)");
     },[]);
    },[rX],"ds1");
    var BX=$t(function(){
     $M(wX,function(CX){
      var DX=CX.v[2];
      $A(DX);
     },[]);
    },[wX],"sat");
    var EX=$d(2,[vX,BX],"sat");
    var FX=$t(function(){
     $M(wX,function(GX){
      var HX=GX.v[1];
      $A(HX);
     },[]);
    },[wX],"sat");
    var IX=$d(2,[uX,FX],"sat");
    var JX=$t(function(){
     $M(wX,function(KX){
      var LX=KX.v[0];
      $A(LX);
     },[]);
    },[wX],"sat");
    var MX=$d(2,[tX,JX],"sat");
    $r([MX,IX,EX]);
   },[rX]);break;
  }
 },[]);
},"$wgo");
var $$Freecell$S2=$F(2,function(NX,OX){
 var PX=$d(1,[$$GHCziTypes_ZMZN,NX],"sat");
 $r([OX,PX]);
},"lvl102");
var $$Game_zdwinside=$f(6,function(v3,w3,x3,y3,z3,A3){
 var N3=x3-z3;
 var B3=v3>=N3?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(B3.g){
 case 1:
  $R(1,[],"False");break;
 case 2:
  var M3=x3+z3;
  var C3=v3<=M3?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(C3.g){
  case 1:
   $R(1,[],"False");break;
  case 2:
   $M(w3,function(D3){
    var E3=D3.v[0];
    $M(y3,function(F3){
     var G3=F3.v[0];
     $M(A3,function(H3){
      var I3=H3.v[0];
      var L3=G3-I3;
      var J3=E3>=L3?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(J3.g){
      case 1:
       $R(1,[],"False");break;
      case 2:
       var K3=G3+I3;
       $r(E3<=K3?$$GHCziTypes_True:$$GHCziTypes_False);break;
      }
     },[E3,G3]);
    },[A3,E3]);
   },[y3,A3]);break;
  }break;
 }
},[],"at src/Game.hs:23:1");
var $$Game_inside=$f(2,function(O3,P3){
 $M(O3,function(Q3){
  var R3=Q3.v[0],S3=Q3.v[1];
  $M(R3,function(T3){
   var U3=T3.v[0];
   $M(P3,function(V3){
    var W3=V3.v[0],X3=V3.v[1];
    $M(W3,function(Y3){
     var Z3=Y3.v[0],a4=Y3.v[1];
     $M(Z3,function(b4){
      var c4=b4.v[0];
      $M(X3,function(d4){
       var e4=d4.v[0],f4=d4.v[1];
       $M(e4,function(g4){
	var h4=g4.v[0];
	$$Game_zdwinside.J(U3,S3,c4,a4,h4,f4);
       },[U3,S3,c4,a4,f4]);
      },[U3,S3,c4,a4]);
     },[X3,U3,S3,a4]);
    },[X3,U3,S3]);
   },[U3,S3]);
  },[P3,S3]);
 },[P3]);
},[],"at src/Game.hs:23:1");
var $$Game_ZCzpzp=$f(2,function(i4,j4){
 $R(1,[i4,j4],":++");
},[],"at src/Game.hs:32:38");
var $$Game_BehaviorNode=$f(1,function(j4){
 $R(2,[j4],"BehaviorNode");
},[],"at src/Game.hs:33:23");
var $$DataziArrayziBase_arrEleBottom=$t(function(){
 $$GHCziErr_error.J($$DataziArrayziBase$f);
},[],"at libraries/array/Data/Array/Base.hs:925:1");
var $$DataziArrayziBase$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("MArray: undefined array element");
},"lvl");
var $$DataziFixed_zdfHasResolutionE7=$D(1,function(){
 $r([goog.math.Long.fromBits(3567587328,232)]);
},"in `base:Data.Fixed'");
var $$DataziFixed_zdfHasResolutionE12zuzdcresolution=$f(1,function(K){
 $A($$DataziFixed_zdfHasResolutionE7);
},[],"at libraries/base/Data/Fixed.hs:91:5");
var $$DataziFixed_zdfFractionalFixed1=$f(3,function(P3,Q3,R3){
 $$GHCziIntegerziType_eqInteger.C([R3,$$GHCziReal_even1],function(S3){
  switch(S3.g){
  case 1:
   P3.C([Q3],function(T3){
    $$GHCziIntegerziType_timesInteger.C([Q3,T3],function(U3){
     $$GHCziIntegerziType_divModInteger.C([U3,R3],function(V3){
      var W3=V3[0];
      $A(W3);
     },[]);
    },[R3]);
   },[R3,Q3]);break;
  case 2:
   $A($$GHCziErr_divZZeroError);break;
  }
 },[R3,Q3,P3]);
},[],"in `base:Data.Fixed'");
var $$DataziFixed_zdwzdcfromRational=$f(3,function(e4,f4,g4){
 e4.C([$$GHCziErr_undefined],function(h4){
  $$GHCziIntegerziType_timesInteger.C([g4,$$GHCziReal_zdfEnumRatio2],function(i4){
   $$GHCziIntegerziType_timesInteger.C([f4,h4],function(j4){
    $$GHCziReal_zdwreduce.C([j4,i4],function(k4){
     var l4=k4[0],m4=k4[1];
     $$GHCziReal_zdwzdcfloor.J($$GHCziReal_zdfIntegralInteger,l4,m4);
    },[]);
   },[i4]);
  },[f4,h4]);
 },[f4,g4]);
},[],"in `base:Data.Fixed'");
var $$DataziFixed_zdfNumFixed6=$f(3,function(y4,z4,A4){
 y4.C([z4],function(B4){
  $$GHCziIntegerziType_eqInteger.C([B4,$$GHCziReal_even1],function(C4){
   switch(C4.g){
   case 1:
    $$GHCziIntegerziType_timesInteger.C([z4,A4],function(D4){
     $$GHCziIntegerziType_divModInteger.C([D4,B4],function(E4){
      var F4=E4[0];
      $A(F4);
     },[]);
    },[B4]);break;
   case 2:
    $A($$GHCziErr_divZZeroError);break;
   }
  },[z4,B4,A4]);
 },[z4,A4]);
},[],"in `base:Data.Fixed'");
var $$DataziList_zdwunzzip4=$f(1,function(o8){
 $M(o8,function(p8){
  switch(p8.g){
  case 1:
   $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
  case 2:
   var q8=p8.v[0],r8=p8.v[1];
   $M(q8,function(s8){
    var t8=s8.v[0],u8=s8.v[1],v8=s8.v[2],w8=s8.v[3];
    var x8=$t(function(){
     $$DataziList_zdwunzzip4.C([r8],function(y8){
      var z8=y8[0],A8=y8[1],B8=y8[2],C8=y8[3];
      $R(1,[z8,A8,B8,C8],"(,,,)");
     },[]);
    },[r8],"ds");
    var D8=$t(function(){
     $M(x8,function(E8){
      var F8=E8.v[3];
      $A(F8);
     },[]);
    },[x8],"sat");
    var G8=$d(2,[w8,D8],"sat");
    var H8=$t(function(){
     $M(x8,function(I8){
      var J8=I8.v[2];
      $A(J8);
     },[]);
    },[x8],"sat");
    var K8=$d(2,[v8,H8],"sat");
    var L8=$t(function(){
     $M(x8,function(M8){
      var N8=M8.v[1];
      $A(N8);
     },[]);
    },[x8],"sat");
    var O8=$d(2,[u8,L8],"sat");
    var P8=$t(function(){
     $M(x8,function(Q8){
      var R8=Q8.v[0];
      $A(R8);
     },[]);
    },[x8],"sat");
    var S8=$d(2,[t8,P8],"sat");
    $r([S8,O8,K8,G8]);
   },[r8]);break;
  }
 },[]);
},[],"at libraries/base/Data/List.hs:705:1");
var $$DataziList_zdwmapAccumL=$f(3,function(Gg,Hg,Ig){
 $M(Ig,function(Jg){
  switch(Jg.g){
  case 1:
   $r([Hg,$$GHCziTypes_ZMZN]);break;
  case 2:
   var Kg=Jg.v[0],Lg=Jg.v[1];
   var Mg=$t(function(){
    Gg.J(Hg,Kg);
   },[Hg,Kg,Gg],"ds");
   var Ng=$t(function(){
    var Og=$t(function(){
     $M(Mg,function(Pg){
      var Qg=Pg.v[0];
      $A(Qg);
     },[]);
    },[Mg],"sat");
    $$DataziList_zdwmapAccumL.C([Gg,Og,Lg],function(Rg){
     var Sg=Rg[0],Tg=Rg[1];
     $R(1,[Sg,Tg],"(,)");
    },[]);
   },[Gg,Mg,Lg],"ds1");
   var Ug=$t(function(){
    $M(Ng,function(Vg){
     var Wg=Vg.v[1];
     $A(Wg);
    },[]);
   },[Ng],"sat");
   var Xg=$t(function(){
    $M(Mg,function(Yg){
     var Zg=Yg.v[1];
     $A(Zg);
    },[]);
   },[Mg],"sat");
   var ah=$d(2,[Xg,Ug],"sat");
   var bh=$t(function(){
    $M(Ng,function(ch){
     var dh=ch.v[0];
     $A(dh);
    },[]);
   },[Ng],"sat");
   $r([bh,ah]);break;
  }
 },[Hg,Gg]);
},[],"at libraries/base/Data/List.hs:490:1");
var $$DataziMaybe_Just=$f(1,function(A2){
 $R(2,[A2],"Just");
},[],"at libraries/base/Data/Maybe.hs:69:29");
var $$DataziTuple_snd=$f(1,function(i){
 $M(i,function(j){
  var k=j.v[1];
  $A(k);
 },[]);
},[],"at libraries/base/Data/Tuple.hs:96:1");
var $$DataziTuple_fst=$f(1,function(l){
 $M(l,function(m){
  var n=m.v[0];
  $A(n);
 },[]);
},[],"at libraries/base/Data/Tuple.hs:92:1");
var $$GHCziArr_zdfIxChar2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Arr'");
var $$GHCziArr_indexError=$f(4,function(L,M,N,O){
 $$GHCziArr$f.J(O,N,M,L);
},[],"at libraries/base/GHC/Arr.lhs:189:1");
var $$GHCziArr_negRange=$t(function(){
 $$GHCziErr_error.J($$GHCziArr$m);
},[],"at libraries/base/GHC/Arr.lhs:527:1");
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
var $$GHCziArr$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Negative range size");
},"lvl8");
var $$GHCziBase_modIntzh=$f(2,function(C1,D1){
 var G1=$hs_remIntzh(C1,D1);
 var E1=C1.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(E1.g){
 case 1:
  var F1=C1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(F1.g){
  case 1:
   $A(G1);break;
  case 2:
   var H1=D1.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(H1.g){
   case 1:
    $A(G1);break;
   case 2:
    $M(G1,function(I1){
     switch(I1.toString()){
     case "0":
      $r(goog.math.Long.fromBits(0,0));break;
     default:
      $r(I1.add(D1));
     }
    },[D1]);break;
   }break;
  }break;
 case 2:
  var J1=D1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(J1.g){
  case 1:
   var K1=C1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(K1.g){
   case 1:
    $A(G1);break;
   case 2:
    var L1=D1.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(L1.g){
    case 1:
     $A(G1);break;
    case 2:
     $M(G1,function(M1){
      switch(M1.toString()){
      case "0":
       $r(goog.math.Long.fromBits(0,0));break;
      default:
       $r(M1.add(D1));
      }
     },[D1]);break;
    }break;
   }break;
  case 2:
   $M(G1,function(N1){
    switch(N1.toString()){
    case "0":
     $r(goog.math.Long.fromBits(0,0));break;
    default:
     $r(N1.add(D1));
    }
   },[D1]);break;
  }break;
 }
},[],"at libraries/base/GHC/Base.lhs:672:4");
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
var $$GHCziBase_zi=$f(3,function(B2,C2,D2){
 var E2=$t(function(){
  C2.J(D2);
 },[D2,C2],"sat");
 B2.J(E2);
},[],"at libraries/base/GHC/Base.lhs:566:1");
var $$GHCziBase_zzeroInt=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/Base.lhs:488:1");
var $$GHCziEnum_succError=$f(1,function(x4){
 $$GHCziEnum$d.J(x4);
},[],"at libraries/base/GHC/Enum.lhs:152:1");
var $$GHCziEnum_zdfEnumInt2=$t(function(){
 $$GHCziErr_error.J($$GHCziEnum$z);
},[],"in `base:GHC.Enum'");
var $$GHCziEnum_zdfEnumIntzuzdcsucc=$f(1,function(mj){
 $M(mj,function(nj){
  var oj=nj.v[0];
  $M(oj,function(pj){
   switch(pj.toString()){
   case "9223372036854775807":
    $A($$GHCziEnum_zdfEnumInt2);break;
   default:
    var qj=pj.add(goog.math.Long.fromBits(1,0));
    $R(1,[qj],"I#");
   }
  },[]);
 },[]);
},[],"at libraries/base/GHC/Enum.lhs:90:5");
var $$GHCziEnum_zdfEnumIntegerzuzdcfromEnum=$f(1,function(ls){
 $$GHCziIntegerziType_integerToInt.C([ls],function(ms){
  $R(1,[ms],"I#");
 },[]);
},[],"at libraries/base/GHC/Enum.lhs:98:5");
var $$GHCziEnum_zdfEnumIntegerzuzdctoEnum=$f(1,function(ns){
 $M(ns,function(os){
  var ps=os.v[0];
  $$GHCziIntegerziType_smallInteger.J(ps);
 },[]);
},[],"at libraries/base/GHC/Enum.lhs:94:5");
var $$GHCziEnum_zdfEnumInteger2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Enum'");
var $$GHCziEnum_zdfEnumIntegerzuzdcsucc=$f(1,function(qs){
 $$GHCziIntegerziType_plusInteger.J(qs,$$GHCziEnum_zdfEnumInteger2);
},[],"at libraries/base/GHC/Enum.lhs:90:5");
var $$GHCziEnum_zdfEnumIntegerzuzdcpred=$f(1,function(rs){
 $$GHCziIntegerziType_minusInteger.J(rs,$$GHCziEnum_zdfEnumInteger2);
},[],"at libraries/base/GHC/Enum.lhs:92:5");
var $$GHCziEnum_zdfEnumIntegerzuzdcenumFrom=$f(1,function(Ds){
 $$GHCziEnum_enumDeltaInteger.J(Ds,$$GHCziEnum_zdfEnumInteger2);
},[],"at libraries/base/GHC/Enum.lhs:101:5");
var $$GHCziEnum_zdfEnumIntegerzuzdcenumFromThen=$f(2,function(Es,Fs){
 var Gs=$t(function(){
  $$GHCziIntegerziType_minusInteger.J(Fs,Es);
 },[Es,Fs],"sat");
 $$GHCziEnum_enumDeltaInteger.J(Es,Gs);
},[],"at libraries/base/GHC/Enum.lhs:103:5");
var $$GHCziEnum_zdfEnumInteger1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Enum'");
var $$GHCziEnum_enumDeltaToInteger=$f(3,function(Hs,Is,Js){
 $$GHCziIntegerziType_geInteger.C([Is,$$GHCziEnum_zdfEnumInteger1],function(Ks){
  switch(Ks.g){
  case 1:
   var Ls=$f(1,function(Ms){
    $$GHCziIntegerziType_ltInteger.C([Ms,Js],function(Ns){
     switch(Ns.g){
     case 1:
      var Os=$t(function(){
       $$GHCziIntegerziType_plusInteger.C([Ms,Is],function(Ps){
	Ls.J(Ps);
       },[Ls]);
      },[Is,Ms,Ls],"sat");
      $R(2,[Ms,Os],":");break;
     case 2:
      $R(1,[],"[]");break;
     }
    },[Is,Ms,Ls]);
   },[Is,Js],"go");
   Ls.J(Hs);break;
  case 2:
   var Qs=$f(1,function(Rs){
    $$GHCziIntegerziType_gtInteger.C([Rs,Js],function(Ss){
     switch(Ss.g){
     case 1:
      var Ts=$t(function(){
       $$GHCziIntegerziType_plusInteger.C([Rs,Is],function(Us){
	Qs.J(Us);
       },[Qs]);
      },[Is,Rs,Qs],"sat");
      $R(2,[Rs,Ts],":");break;
     case 2:
      $R(1,[],"[]");break;
     }
    },[Is,Rs,Qs]);
   },[Is,Js],"go");
   Qs.J(Hs);break;
  }
 },[Is,Js,Hs]);
},[],"at libraries/base/GHC/Enum.lhs:673:1");
var $$GHCziEnum_enumDeltaToIntegerFB=$f(5,function(Vs,Ws,Xs,Ys,Zs){
 $$GHCziIntegerziType_geInteger.C([Ys,$$GHCziEnum_zdfEnumInteger1],function(at){
  switch(at.g){
  case 1:
   var bt=$f(1,function(ct){
    $$GHCziIntegerziType_ltInteger.C([ct,Zs],function(dt){
     switch(dt.g){
     case 1:
      var et=$t(function(){
       $$GHCziIntegerziType_plusInteger.C([ct,Ys],function(ft){
	bt.J(ft);
       },[bt]);
      },[Ys,ct,bt],"sat");
      Vs.J(ct,et);break;
     case 2:
      $A(Ws);break;
     }
    },[Ys,ct,bt,Vs,Ws]);
   },[Ys,Zs,Vs,Ws],"go");
   bt.J(Xs);break;
  case 2:
   var gt=$f(1,function(ht){
    $$GHCziIntegerziType_gtInteger.C([ht,Zs],function(it){
     switch(it.g){
     case 1:
      var jt=$t(function(){
       $$GHCziIntegerziType_plusInteger.C([ht,Ys],function(kt){
	gt.J(kt);
       },[gt]);
      },[Ys,ht,gt],"sat");
      Vs.J(ht,jt);break;
     case 2:
      $A(Ws);break;
     }
    },[Ys,Vs,Ws,ht,gt]);
   },[Ys,Zs,Vs,Ws],"go");
   gt.J(Xs);break;
  }
 },[Ys,Zs,Vs,Ws,Xs]);
},[],"at libraries/base/GHC/Enum.lhs:668:1");
var $$GHCziEnum_zdfEnumIntegerzuzdcenumFromTo=$f(2,function(lt,mt){
 $$GHCziEnum_enumDeltaToInteger.J(lt,$$GHCziEnum_zdfEnumInteger2,mt);
},[],"at libraries/base/GHC/Enum.lhs:105:5");
var $$GHCziEnum_zdfEnumIntegerzuzdcenumFromThenTo=$f(3,function(nt,ot,pt){
 $$GHCziIntegerziType_minusInteger.C([ot,nt],function(qt){
  $$GHCziEnum_enumDeltaToInteger.J(nt,qt,pt);
 },[nt,pt]);
},[],"at libraries/base/GHC/Enum.lhs:107:5");
var $$GHCziEnum_zdfEnumInteger=$D(1,function(){
 $r([$$GHCziEnum_zdfEnumIntegerzuzdcsucc,$$GHCziEnum_zdfEnumIntegerzuzdcpred,$$GHCziEnum_zdfEnumIntegerzuzdctoEnum,$$GHCziEnum_zdfEnumIntegerzuzdcfromEnum,$$GHCziEnum_zdfEnumIntegerzuzdcenumFrom,$$GHCziEnum_zdfEnumIntegerzuzdcenumFromThen,$$GHCziEnum_zdfEnumIntegerzuzdcenumFromTo,$$GHCziEnum_zdfEnumIntegerzuzdcenumFromThenTo]);
},"at libraries/base/GHC/Enum.lhs:633:11");
var $$GHCziEnum$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("}: tried to take `succ' of maxBound");
},"lvl2");
var $$GHCziEnum$d=$F(1,function(At){
 var Bt=$t(function(){
  $$GHCziBase_zpzp.J(At,$$GHCziEnum$c);
 },[At],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Enum.succ{",Bt],function(Ct){
  $$GHCziErr_error.J(Ct);
 },[]);
},"lvl3");
var $$GHCziEnum$z=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.Enum.succ{Int}: tried to take `succ' of maxBound");
},"lvl25");
var $$GHCziIO_unsafeDupableInterleaveIO=$f(2,function(c,d){
 $$GHCziIO$a.J(c,d);
},[],"at libraries/base/GHC/IO.hs:231:1");
var $$GHCziIO$a=$F(2,function(P3,Q3){
 var R3=$t(function(){
  P3.C([Q3],function(S3){
   var T3=S3[1];
   $A(T3);
  },[]);
 },[Q3,P3],"sat");
 $r([Q3,R3]);
},"a");
var $$GHCziInt_zdfOrdInt64zuzdczlze=$f(2,function(CF,DF){
 $M(CF,function(EF){
  var FF=EF.v[0];
  $M(DF,function(GF){
   var HF=GF.v[0];
   $r(FF.lessThanOrEqual(HF)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[FF]);
 },[DF]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfOrdInt64zuzdczg=$f(2,function(IF,JF){
 $M(IF,function(KF){
  var LF=KF.v[0];
  $M(JF,function(MF){
   var NF=MF.v[0];
   $r(LF.greaterThan(NF)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[LF]);
 },[JF]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfOrdInt64zuzdczgze=$f(2,function(OF,PF){
 $M(OF,function(QF){
  var RF=QF.v[0];
  $M(PF,function(SF){
   var TF=SF.v[0];
   $r(RF.greaterThanOrEqual(TF)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[RF]);
 },[PF]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfOrdInt64zuzdczl=$f(2,function(UF,VF){
 $M(UF,function(WF){
  var XF=WF.v[0];
  $M(VF,function(YF){
   var ZF=YF.v[0];
   $r(XF.lessThan(ZF)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[XF]);
 },[VF]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfOrdInt64zuzdccompare=$f(2,function(aG,bG){
 $M(aG,function(cG){
  var dG=cG.v[0];
  $M(bG,function(eG){
   var fG=eG.v[0];
   var gG=dG.lessThan(fG)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(gG.g){
   case 1:
    var hG=dG.equals(fG)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(hG.g){
    case 1:
     $R(3,[],"GT");break;
    case 2:
     $R(2,[],"EQ");break;
    }break;
   case 2:
    $R(1,[],"LT");break;
   }
  },[dG]);
 },[bG]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfEqInt64zuzdczeze=$f(2,function(iG,jG){
 $M(iG,function(kG){
  var lG=kG.v[0];
  $M(jG,function(mG){
   var nG=mG.v[0];
   $r(lG.equals(nG)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[lG]);
 },[jG]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfBitsInt64zuzdczsze=$f(2,function(oG,pG){
 $M(oG,function(qG){
  var rG=qG.v[0];
  $M(pG,function(sG){
   var tG=sG.v[0];
   var uG=rG.equals(tG)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(uG.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[rG]);
 },[pG]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfEqInt64=$D(1,function(){
 $r([$$GHCziInt_zdfEqInt64zuzdczeze,$$GHCziInt_zdfBitsInt64zuzdczsze]);
},"at libraries/base/GHC/Int.hs:678:34");
var $$GHCziInt_zdfOrdInt64zuzdcmin=$f(2,function(vG,wG){
 $M(vG,function(xG){
  var yG=xG.v[0];
  $M(wG,function(zG){
   var AG=zG.v[0];
   var BG=yG.lessThanOrEqual(AG)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(BG.g){
   case 1:
    $A(zG);break;
   case 2:
    $A(xG);break;
   }
  },[yG,xG]);
 },[wG]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfOrdInt64zuzdcmax=$f(2,function(CG,DG){
 $M(CG,function(EG){
  var FG=EG.v[0];
  $M(DG,function(GG){
   var HG=GG.v[0];
   var IG=FG.lessThanOrEqual(HG)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(IG.g){
   case 1:
    $A(EG);break;
   case 2:
    $A(GG);break;
   }
  },[FG,EG]);
 },[DG]);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfOrdInt64=$D(1,function(){
 $r([$$GHCziInt_zdfEqInt64,$$GHCziInt_zdfOrdInt64zuzdccompare,$$GHCziInt_zdfOrdInt64zuzdczl,$$GHCziInt_zdfOrdInt64zuzdczgze,$$GHCziInt_zdfOrdInt64zuzdczg,$$GHCziInt_zdfOrdInt64zuzdczlze,$$GHCziInt_zdfOrdInt64zuzdcmax,$$GHCziInt_zdfOrdInt64zuzdcmin]);
},"at libraries/base/GHC/Int.hs:678:38");
var $$GHCziInt_zdfBoundedInt64zuzdcmaxBound=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,2147483647)]);
},"in `base:GHC.Int'");
var $$GHCziInt_zdfEnumInt9=$t(function(){
 $$GHCziEnum_succError.J($$GHCziInt$k);
},[],"in `base:GHC.Int'");
var $$GHCziInt_zdfEnumInt64zuzdcsucc=$f(1,function(AK){
 $M(AK,function(BK){
  var CK=BK.v[0];
  $M(CK,function(DK){
   switch(DK.toString()){
   case "9223372036854775807":
    $A($$GHCziInt_zdfEnumInt9);break;
   default:
    var EK=DK.add(goog.math.Long.fromBits(1,0));
    $R(1,[EK],"I64#");
   }
  },[]);
 },[]);
},[],"in `base:GHC.Int'");
var $$GHCziInt$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Int64");
},"lvl10");
var $$GHCziList_znzn1=$t(function(){
 $$GHCziErr_error.J($$GHCziList$c);
},[],"in `base:GHC.List'");
var $$GHCziList_last1=$f(2,function(a,b){
 $M(b,function(c){
  switch(c.g){
  case 1:
   $A(a);break;
  case 2:
   var d=c.v[0],e=c.v[1];
   $$GHCziList_last1.J(d,e);break;
  }
 },[a]);
},[],"in `base:GHC.List'");
var $$GHCziList_dropzudropzh=$f(2,function(t,u){
 $M(t,function(v){
  switch(v.toString()){
  case "0":
   $A(u);break;
  default:
   $M(u,function(w){
    switch(w.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var x=w.v[1];
     var y=v.subtract(goog.math.Long.fromBits(1,0));
     $$GHCziList_dropzudropzh.J(y,x);break;
    }
   },[v]);
  }
 },[u]);
},[],"at libraries/base/GHC/List.lhs:416:9");
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
var $$GHCziList_last2=$t(function(){
 $$GHCziList_errorEmptyList.J($$GHCziList$j);
},[],"in `base:GHC.List'");
var $$GHCziList_zzip3=$f(3,function(I1,J1,K1){
 $M(I1,function(L1){
  switch(L1.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var M1=L1.v[0],N1=L1.v[1];
   $M(J1,function(O1){
    switch(O1.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var P1=O1.v[0],Q1=O1.v[1];
     $M(K1,function(R1){
      switch(R1.g){
      case 1:
       $R(1,[],"[]");break;
      case 2:
       var S1=R1.v[0],T1=R1.v[1];
       var U1=$t(function(){
	$$GHCziList_zzip3.J(N1,Q1,T1);
       },[N1,Q1,T1],"sat");
       var V1=$d(1,[M1,P1,S1],"sat");
       $R(2,[V1,U1],":");break;
      }
     },[M1,P1,N1,Q1]);break;
    }
   },[K1,M1,N1]);break;
  }
 },[J1,K1]);
},[],"at libraries/base/GHC/List.lhs:673:1");
var $$GHCziList_iterate=$f(2,function(b6,c6){
 var d6=$t(function(){
  var e6=$t(function(){
   b6.J(c6);
  },[c6,b6],"sat");
  $$GHCziList_iterate.J(b6,e6);
 },[c6,b6],"sat");
 $R(2,[c6,d6],":");
},[],"at libraries/base/GHC/List.lhs:230:1");
var $$GHCziList_iterateFB=$f(3,function(f6,g6,h6){
 var i6=$t(function(){
  var j6=$t(function(){
   g6.J(h6);
  },[h6,g6],"sat");
  $$GHCziList_iterateFB.J(f6,g6,j6);
 },[h6,f6,g6],"sat");
 f6.J(h6,i6);
},[],"at libraries/base/GHC/List.lhs:233:1");
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
var $$GHCziList_zzipWith=$f(3,function(s8,t8,u8){
 $M(t8,function(v8){
  switch(v8.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var w8=v8.v[0],x8=v8.v[1];
   $M(u8,function(y8){
    switch(y8.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var z8=y8.v[0],A8=y8.v[1];
     var B8=$t(function(){
      $$GHCziList_zzipWith.J(s8,x8,A8);
     },[s8,x8,A8],"sat");
     var C8=$t(function(){
      s8.J(w8,z8);
     },[w8,z8,s8],"sat");
     $R(2,[C8,B8],":");break;
    }
   },[w8,s8,x8]);break;
  }
 },[u8,s8]);
},[],"at libraries/base/GHC/List.lhs:688:1");
var $$GHCziList_zzip=$f(2,function(D8,E8){
 $M(D8,function(F8){
  switch(F8.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var G8=F8.v[0],H8=F8.v[1];
   $M(E8,function(I8){
    switch(I8.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var J8=I8.v[0],K8=I8.v[1];
     var L8=$t(function(){
      $$GHCziList_zzip.J(H8,K8);
     },[H8,K8],"sat");
     var M8=$d(1,[G8,J8],"sat");
     $R(2,[M8,L8],":");break;
    }
   },[G8,H8]);break;
  }
 },[E8]);
},[],"at libraries/base/GHC/List.lhs:653:1");
var $$GHCziList_foldr2=$f(4,function(N8,O8,P8,Q8){
 $M(P8,function(R8){
  switch(R8.g){
  case 1:
   $A(O8);break;
  case 2:
   var S8=R8.v[0],T8=R8.v[1];
   $M(Q8,function(U8){
    switch(U8.g){
    case 1:
     $A(O8);break;
    case 2:
     var V8=U8.v[0],W8=U8.v[1];
     var X8=$t(function(){
      $$GHCziList_foldr2.J(N8,O8,T8,W8);
     },[O8,N8,T8,W8],"sat");
     N8.J(S8,V8,X8);break;
    }
   },[O8,S8,N8,T8]);break;
  }
 },[O8,Q8,N8]);
},[],"at libraries/base/GHC/List.lhs:612:1");
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
var $$GHCziList$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("last");
},"lvl8");
var $$GHCziList$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("head");
},"lvl10");
var $$GHCziNum_zdfNumIntegerzuzdcfromInteger=$f(1,function(l1){
 $A(l1);
},[],"at libraries/base/GHC/Num.lhs:60:5");
var $$GHCziNum_zdfNumInteger=$D(1,function(){
 $r([$$GHCziIntegerziType_plusInteger,$$GHCziIntegerziType_timesInteger,$$GHCziIntegerziType_minusInteger,$$GHCziIntegerziType_negateInteger,$$GHCziIntegerziType_absInteger,$$GHCziIntegerziType_signumInteger,$$GHCziNum_zdfNumIntegerzuzdcfromInteger]);
},"at libraries/base/GHC/Num.lhs:115:11");
var $$GHCziReal_zdp1Integral=$f(1,function(m){
 $M(m,function(n){
  var o=n.v[0];
  $A(o);
 },[]);
},[],"at libraries/base/GHC/Real.lhs:121:28");
var $$GHCziReal_zdp1Real=$f(1,function(N){
 $M(N,function(O){
  var P=O.v[0];
  $A(P);
 },[]);
},[],"at libraries/base/GHC/Real.lhs:114:26");
var $$GHCziReal_zdfRealIntegerzuzdctoRational=$f(1,function(m4){
 $M(m4,function(n4){
  $R(1,[n4,$$GHCziReal_zdfEnumRatio2],":%");
 },[]);
},[],"at libraries/base/GHC/Real.lhs:116:5");
var $$GHCziReal_zdfRealInteger=$D(1,function(){
 $r([$$GHCziNum_zdfNumInteger,$$GHCziIntegerziType_zdfOrdInteger,$$GHCziReal_zdfRealIntegerzuzdctoRational]);
},"at libraries/base/GHC/Real.lhs:300:11");
var $$GHCziReal_zdfIntegralIntegerzuzdctoInteger=$f(1,function(o4){
 $A(o4);
},[],"at libraries/base/GHC/Real.lhs:139:5");
var $$GHCziReal_zdfIntegralIntegerzuzdcdivMod=$f(2,function(p4,q4){
 $$GHCziIntegerziType_eqInteger.C([q4,$$GHCziReal_even1],function(r4){
  switch(r4.g){
  case 1:
   $$GHCziIntegerziType_divModInteger.C([p4,q4],function(s4){
    var t4=s4[0],u4=s4[1];
    $R(1,[t4,u4],"(,)");
   },[]);break;
  case 2:
   $A($$GHCziErr_divZZeroError);break;
  }
 },[q4,p4]);
},[],"at libraries/base/GHC/Real.lhs:137:5");
var $$GHCziReal_zdfIntegralIntegerzuzdcquotRem=$f(2,function(v4,w4){
 $$GHCziIntegerziType_eqInteger.C([w4,$$GHCziReal_even1],function(x4){
  switch(x4.g){
  case 1:
   $$GHCziIntegerziType_quotRemInteger.C([v4,w4],function(y4){
    var z4=y4[0],A4=y4[1];
    $R(1,[z4,A4],"(,)");
   },[]);break;
  case 2:
   $A($$GHCziErr_divZZeroError);break;
  }
 },[w4,v4]);
},[],"at libraries/base/GHC/Real.lhs:135:5");
var $$GHCziReal_zdfIntegralIntegerzuzdcmod=$f(2,function(B4,C4){
 $$GHCziIntegerziType_eqInteger.C([C4,$$GHCziReal_even1],function(D4){
  switch(D4.g){
  case 1:
   $$GHCziIntegerziType_divModInteger.C([B4,C4],function(E4){
    var F4=E4[1];
    $A(F4);
   },[]);break;
  case 2:
   $A($$GHCziErr_divZZeroError);break;
  }
 },[C4,B4]);
},[],"at libraries/base/GHC/Real.lhs:133:5");
var $$GHCziReal_zdfIntegralIntegerzuzdcdiv=$f(2,function(G4,H4){
 $$GHCziIntegerziType_eqInteger.C([H4,$$GHCziReal_even1],function(I4){
  switch(I4.g){
  case 1:
   $$GHCziIntegerziType_divModInteger.C([G4,H4],function(J4){
    var K4=J4[0];
    $A(K4);
   },[]);break;
  case 2:
   $A($$GHCziErr_divZZeroError);break;
  }
 },[H4,G4]);
},[],"at libraries/base/GHC/Real.lhs:129:5");
var $$GHCziReal_zdfIntegralIntegerzuzdcrem=$f(2,function(L4,M4){
 $$GHCziIntegerziType_eqInteger.C([M4,$$GHCziReal_even1],function(N4){
  switch(N4.g){
  case 1:
   $$GHCziIntegerziType_remInteger.J(L4,M4);break;
  case 2:
   $A($$GHCziErr_divZZeroError);break;
  }
 },[M4,L4]);
},[],"at libraries/base/GHC/Real.lhs:127:5");
var $$GHCziReal_zdfIntegralIntegerzuzdcquot=$f(2,function(O4,P4){
 $$GHCziIntegerziType_eqInteger.C([P4,$$GHCziReal_even1],function(Q4){
  switch(Q4.g){
  case 1:
   $$GHCziIntegerziType_quotInteger.J(O4,P4);break;
  case 2:
   $A($$GHCziErr_divZZeroError);break;
  }
 },[P4,O4]);
},[],"at libraries/base/GHC/Real.lhs:123:5");
var $$GHCziReal_zdwzdczs=$f(4,function(n5,o5,p5,q5){
 $$GHCziIntegerziType_timesInteger.C([o5,p5],function(r5){
  $$GHCziIntegerziType_absInteger.C([r5],function(s5){
   $$GHCziIntegerziType_signumInteger.C([r5],function(t5){
    $$GHCziIntegerziType_timesInteger.C([n5,q5],function(u5){
     $$GHCziIntegerziType_timesInteger.C([u5,t5],function(v5){
      $$GHCziReal_zdwreduce.J(v5,s5);
     },[s5]);
    },[t5,s5]);
   },[n5,q5,s5]);
  },[r5,n5,q5]);
 },[n5,q5]);
},[],"at libraries/base/GHC/Real.lhs:158:5");
var $$GHCziReal_zdfIntegralInteger=$D(1,function(){
 $r([$$GHCziReal_zdfRealInteger,$$GHCziEnum_zdfEnumInteger,$$GHCziReal_zdfIntegralIntegerzuzdcquot,$$GHCziReal_zdfIntegralIntegerzuzdcrem,$$GHCziReal_zdfIntegralIntegerzuzdcdiv,$$GHCziReal_zdfIntegralIntegerzuzdcmod,$$GHCziReal_zdfIntegralIntegerzuzdcquotRem,$$GHCziReal_zdfIntegralIntegerzuzdcdivMod,$$GHCziReal_zdfIntegralIntegerzuzdctoInteger]);
},"at libraries/base/GHC/Real.lhs:303:11");
var $$GHCziReal_zdwzdcproperFraction=$f(3,function(uj,vj,wj){
 var xj=$t(function(){
  $$GHCziIntegerziType_eqInteger.C([wj,$$GHCziReal_even1],function(yj){
   switch(yj.g){
   case 1:
    $$GHCziIntegerziType_quotRemInteger.C([vj,wj],function(zj){
     var Aj=zj[0],Bj=zj[1];
     $R(1,[Aj,Bj],"(,)");
    },[]);break;
   case 2:
    $A($$GHCziErr_divZZeroError);break;
   }
  },[wj,vj]);
 },[wj,vj],"ds");
 var Cj=$t(function(){
  $M(xj,function(Dj){
   var Ej=Dj.v[1];
   $M(Ej,function(Fj){
    $R(1,[Fj,wj],":%");
   },[wj]);
  },[wj]);
 },[wj,xj],"sat");
 var Gj=$t(function(){
  var Hj=$t(function(){
   $M(xj,function(Ij){
    var Jj=Ij.v[0];
    $A(Jj);
   },[]);
  },[xj],"sat");
  $$GHCziReal_zdp1Integral.C([uj],function(Kj){
   $$GHCziReal_zdp1Real.C([Kj],function(Lj){
    $$GHCziNum_fromInteger.J(Lj,Hj);
   },[Hj]);
  },[Hj]);
 },[xj,uj],"sat");
 $r([Gj,Cj]);
},[],"at libraries/base/GHC/Real.lhs:186:5");
var $$GHCziReal_zdwzdcfloor=$f(3,function(gz,hz,iz){
 $$GHCziReal_zdwzdcproperFraction.C([gz,hz,iz],function(jz){
  var kz=jz[0],lz=jz[1];
  $M(lz,function(mz){
   var nz=mz.v[0],oz=mz.v[1];
   $$GHCziIntegerziType_timesInteger.C([$$GHCziReal_even1,oz],function(pz){
    $$GHCziIntegerziType_timesInteger.C([nz,$$GHCziReal_zdfEnumRatio2],function(qz){
     $$GHCziIntegerziType_ltInteger.C([qz,pz],function(rz){
      switch(rz.g){
      case 1:
       $A(kz);break;
      case 2:
       $$GHCziReal_zdp1Integral.C([gz],function(sz){
	var tz=sz.v[0];
	$M(tz,function(uz){
	 var vz=uz.v[2],wz=uz.v[6];
	 var xz=$t(function(){
	  wz.J($$GHCziReal_zdfEnumRatio2);
	 },[wz],"sat");
	 vz.J(kz,xz);
	},[kz]);
       },[kz]);break;
      }
     },[gz,kz]);
    },[gz,kz,pz]);
   },[gz,nz,kz]);
  },[gz,kz]);
 },[gz]);
},[],"at libraries/base/GHC/Real.lhs:195:5");
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
var $$SystemziCPUTime_zdwzdsrealToInteger=$f(1,function(a){
 $$GHCziIntegerziType_smallInteger.C([a],function(b){
  $$GHCziIntegerziType_timesInteger.C([b,$$GHCziInt_zdfRealInt1],function(c){
   $$GHCziReal_zdwreduce.C([c,$$GHCziInt_zdfRealInt1],function(d){
    var e=d[0],f=d[1];
    $$GHCziFloat_zdwzdcfromRational.C([e,f],function(g){
     var h=g.v[0];
     var $ff=rintDouble(h);
     var i=[$$GHCziPrim_realWorldzh,$ff];
     var j=i[1];
     $$GHCziIntegerziType_decodeDoubleInteger.C([j],function(k){
      var l=k[0],m=k[1];
      var n=m.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(n.g){
      case 1:
       $$GHCziIntegerziType_shiftLInteger.J(l,m);break;
      case 2:
       $$GHCziIntegerziType_integerToInt.C([l],function(p){
	var q=m.negate();
	var o=$hs_uncheckedIShiftRAzh(p,q);
	$$GHCziIntegerziType_smallInteger.J(o);
       },[m]);break;
      }
     },[]);
    },[]);
   },[]);
  },[]);
 },[]);
},[],"at libraries/base/System/CPUTime.hsc:77:1");
var $$SystemziCPUTime_getCPUTime3=$D(1,function(){
 $r([goog.math.Long.fromBits(1000000,0)]);
},"in `base:System.CPUTime'");
var $$SystemziCPUTime_getCPUTime2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("getrusage");
},[],"in `base:System.CPUTime'");
var $$SystemziCPUTime_getCPUTime1=$f(1,function(r){
 var s=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(144,0),r);
 var t=s[0],u=s[1];
 var v=$hs_unsafeFreezzeByteArrayzh(u,t);
 var w=v[0],x=v[1];
 var C=$hs_byteArrayContentszh(x);
 var $ff=ghc_wrapper_d1rG_getrusage(goog.math.Long.fromBits(0,0),C);
 var y=[w,$ff];
 var z=y[0],A=y[1];
 var B=$f(1,function(D){
  var f1=$hs_plusAddrzh(C,goog.math.Long.fromBits(0,0));
  var g1=$hs_plusAddrzh(f1,goog.math.Long.fromBits(0,0));
  var E=$hs_readInt64OffAddrzh(g1,goog.math.Long.fromBits(0,0),D);
  var F=E[0],G=E[1];
  var e1=$hs_plusAddrzh(f1,goog.math.Long.fromBits(8,0));
  var H=$hs_readInt64OffAddrzh(e1,goog.math.Long.fromBits(0,0),F);
  var I=H[0],J=H[1];
  var c1=$hs_plusAddrzh(C,goog.math.Long.fromBits(16,0));
  var d1=$hs_plusAddrzh(c1,goog.math.Long.fromBits(0,0));
  var K=$hs_readInt64OffAddrzh(d1,goog.math.Long.fromBits(0,0),I);
  var L=K[0],M=K[1];
  var b1=$hs_plusAddrzh(c1,goog.math.Long.fromBits(8,0));
  var N=$hs_readInt64OffAddrzh(b1,goog.math.Long.fromBits(0,0),L);
  var O=N[0],P=N[1];
  var a1=$hs_touchzh(x,O);
  var Q=$t(function(){
   $$SystemziCPUTime_zdwzdsrealToInteger.C([P],function(R){
    $$SystemziCPUTime_zdwzdsrealToInteger.C([M],function(S){
     $$GHCziIntegerziType_timesInteger.C([S,$$SystemziCPUTime_getCPUTime3],function(T){
      $$SystemziCPUTime_zdwzdsrealToInteger.C([J],function(U){
       $$SystemziCPUTime_zdwzdsrealToInteger.C([G],function(V){
	$$GHCziIntegerziType_timesInteger.C([V,$$SystemziCPUTime_getCPUTime3],function(W){
	 $$GHCziIntegerziType_plusInteger.C([W,U],function(X){
	  $$GHCziIntegerziType_plusInteger.C([X,T],function(Y){
	   $$GHCziIntegerziType_plusInteger.C([Y,R],function(Z){
	    $$GHCziIntegerziType_timesInteger.J(Z,$$SystemziCPUTime_getCPUTime3);
	   },[]);
	  },[R]);
	 },[T,R]);
	},[U,T,R]);
       },[U,T,R]);
      },[G,T,R]);
     },[G,J,R]);
    },[G,J,R]);
   },[G,J,M]);
  },[G,J,M,P],"sat");
  $r([a1,Q]);
 },[x,C],"$j");
 var h1=$hs_narrow32Intzh(A);
 switch(h1.toString()){
 case "-1":
  var $ff=__hscore_get_errno();
  var i1=[z,$ff];
  var j1=i1[0],k1=i1[1];
  var m1=$hs_narrow32Intzh(k1);
  var l1=$d(1,[m1],"sat");
  $$ForeignziCziError_errnoToIOError.C([$$SystemziCPUTime_getCPUTime2,l1,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(n1){
   $$GHCziIOziException_ioError.C([n1,j1],function(o1){
    var p1=o1[0];
    B.J(p1);
   },[x,C,B]);
  },[x,C,B,j1]);break;
 default:
  B.J(z);
 }
},[],"in `base:System.CPUTime'");
var $$DataziMap_toAscList=$f(1,function(X3){
 $$DataziMap$j.J($$GHCziTypes_ZMZN,X3);
},[],"at libraries/containers/Data/Map.hs:1900:1");
var $$DataziMap_findMinzuzdsfindMin=$f(5,function(C7,D7,E7,F7,G7){
 $M(F7,function(H7){
  switch(H7.g){
  case 1:
   $R(1,[D7,E7],"(,)");break;
  case 2:
   var I7=H7.v[0],J7=H7.v[1],K7=H7.v[2],L7=H7.v[3],M7=H7.v[4];
   $$DataziMap_findMinzuzdsfindMin.J(I7,J7,K7,L7,M7);break;
  }
 },[D7,E7]);
},[],"at libraries/containers/Data/Map.hs:881:1");
var $$DataziMap_balanceL=$f(4,function(af,bf,cf,df){
 $M(df,function(ef){
  switch(ef.g){
  case 1:
   $M(cf,function(ff){
    switch(ff.g){
    case 1:
     $M(af,function(gf){
      $R(2,[goog.math.Long.fromBits(1,0),gf,bf,$$DataziMap_Tip,$$DataziMap_Tip],"Bin");
     },[bf]);break;
    case 2:
     var hf=ff.v[0],jf=ff.v[1],kf=ff.v[2],lf=ff.v[3],mf=ff.v[4];
     $M(lf,function(nf){
      switch(nf.g){
      case 1:
       $M(mf,function(of){
	switch(of.g){
	case 1:
	 $M(af,function(pf){
	  $R(2,[goog.math.Long.fromBits(2,0),pf,bf,ff,$$DataziMap_Tip],"Bin");
	 },[bf,ff]);break;
	case 2:
	 var qf=of.v[1],rf=of.v[2];
	 $M(af,function(tf){
	  var sf=$d(2,[goog.math.Long.fromBits(1,0),tf,bf,$$DataziMap_Tip,$$DataziMap_Tip],"sat");
	  var uf=$d(2,[goog.math.Long.fromBits(1,0),jf,kf,$$DataziMap_Tip,$$DataziMap_Tip],"sat");
	  $R(2,[goog.math.Long.fromBits(3,0),qf,rf,uf,sf],"Bin");
	 },[bf,qf,rf,jf,kf]);break;
	}
       },[af,bf,ff,jf,kf]);break;
      case 2:
       var vf=nf.v[0];
       $M(mf,function(wf){
	switch(wf.g){
	case 1:
	 $M(af,function(yf){
	  var xf=$d(2,[goog.math.Long.fromBits(1,0),yf,bf,$$DataziMap_Tip,$$DataziMap_Tip],"sat");
	  $R(2,[goog.math.Long.fromBits(3,0),jf,kf,nf,xf],"Bin");
	 },[bf,jf,kf,nf]);break;
	case 2:
	 var zf=wf.v[0],Af=wf.v[1],Bf=wf.v[2],Cf=wf.v[3],Df=wf.v[4];
	 var cg=goog.math.Long.fromBits(2,0).multiply(vf);
	 var Ef=zf.lessThan(cg)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Ef.g){
	 case 1:
	  var Ff=$f(1,function(Gf){
	   $M(Df,function(Hf){
	    switch(Hf.g){
	    case 1:
	     $M(af,function(Jf){
	      var If=$d(2,[goog.math.Long.fromBits(1,0),Jf,bf,$$DataziMap_Tip,$$DataziMap_Tip],"sat");
	      var Nf=goog.math.Long.fromBits(1,0).add(vf);
	      var Lf=Nf.add(Gf);
	      var Kf=$d(2,[Lf,jf,kf,nf,Cf],"sat");
	      var Mf=goog.math.Long.fromBits(1,0).add(hf);
	      $R(2,[Mf,Af,Bf,Kf,If],"Bin");
	     },[bf,jf,kf,nf,vf,hf,Af,Bf,Gf,Cf]);break;
	    case 2:
	     var Of=Hf.v[0];
	     $M(af,function(Rf){
	      var Qf=goog.math.Long.fromBits(1,0).add(Of);
	      var Pf=$d(2,[Qf,Rf,bf,Hf,$$DataziMap_Tip],"sat");
	      var Vf=goog.math.Long.fromBits(1,0).add(vf);
	      var Tf=Vf.add(Gf);
	      var Sf=$d(2,[Tf,jf,kf,nf,Cf],"sat");
	      var Uf=goog.math.Long.fromBits(1,0).add(hf);
	      $R(2,[Uf,Af,Bf,Sf,Pf],"Bin");
	     },[bf,jf,kf,nf,vf,hf,Af,Bf,Gf,Cf,Of,Hf]);break;
	    }
	   },[af,bf,jf,kf,nf,vf,hf,Af,Bf,Gf,Cf]);
	  },[af,bf,jf,kf,nf,vf,Df,hf,Af,Bf,Cf],"$j");
	  $M(Cf,function(Wf){
	   switch(Wf.g){
	   case 1:
	    Ff.J(goog.math.Long.fromBits(0,0));break;
	   case 2:
	    var Xf=Wf.v[0];
	    Ff.J(Xf);break;
	   }
	  },[af,bf,jf,kf,nf,vf,Df,hf,Af,Bf,Cf,Ff]);break;
	 case 2:
	  $M(af,function(ag){
	   var Zf=goog.math.Long.fromBits(1,0).add(zf);
	   var Yf=$d(2,[Zf,ag,bf,wf,$$DataziMap_Tip],"sat");
	   var bg=goog.math.Long.fromBits(1,0).add(hf);
	   $R(2,[bg,jf,kf,nf,Yf],"Bin");
	  },[bf,jf,kf,nf,zf,hf,wf]);break;
	 }break;
	}
       },[af,bf,jf,kf,nf,vf,hf]);break;
      }
     },[af,bf,mf,ff,jf,kf,hf]);break;
    }
   },[af,bf]);break;
  case 2:
   var dg=ef.v[0];
   $M(cf,function(eg){
    switch(eg.g){
    case 1:
     $M(af,function(gg){
      var fg=goog.math.Long.fromBits(1,0).add(dg);
      $R(2,[fg,gg,bf,$$DataziMap_Tip,ef],"Bin");
     },[bf,dg,ef]);break;
    case 2:
     var hg=eg.v[0],ig=eg.v[1],jg=eg.v[2],kg=eg.v[3],lg=eg.v[4];
     var dh=goog.math.Long.fromBits(3,0).multiply(dg);
     var mg=hg.greaterThan(dh)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(mg.g){
     case 1:
      $M(af,function(og){
       var pg=goog.math.Long.fromBits(1,0).add(hg);
       var ng=pg.add(dg);
       $R(2,[ng,og,bf,eg,ef],"Bin");
      },[bf,dg,ef,hg,eg]);break;
     case 2:
      $M(kg,function(qg){
       switch(qg.g){
       case 1:
	$A($$DataziMap$A);break;
       case 2:
	var rg=qg.v[0];
	$M(lg,function(sg){
	 switch(sg.g){
	 case 1:
	  $A($$DataziMap$A);break;
	 case 2:
	  var tg=sg.v[0],ug=sg.v[1],vg=sg.v[2],wg=sg.v[3],xg=sg.v[4];
	  var ch=goog.math.Long.fromBits(2,0).multiply(rg);
	  var yg=tg.lessThan(ch)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(yg.g){
	  case 1:
	   var zg=$f(1,function(Ag){
	    $M(xg,function(Bg){
	     switch(Bg.g){
	     case 1:
	      $M(af,function(Eg){
	       var Dg=goog.math.Long.fromBits(1,0).add(dg);
	       var Cg=$d(2,[Dg,Eg,bf,$$DataziMap_Tip,ef],"sat");
	       var Jg=goog.math.Long.fromBits(1,0).add(rg);
	       var Gg=Jg.add(Ag);
	       var Fg=$d(2,[Gg,ig,jg,qg,wg],"sat");
	       var Ig=goog.math.Long.fromBits(1,0).add(hg);
	       var Hg=Ig.add(dg);
	       $R(2,[Hg,ug,vg,Fg,Cg],"Bin");
	      },[bf,dg,ef,hg,rg,ug,vg,Ag,ig,jg,qg,wg]);break;
	     case 2:
	      var Kg=Bg.v[0];
	      $M(af,function(Ng){
	       var Tg=goog.math.Long.fromBits(1,0).add(dg);
	       var Mg=Tg.add(Kg);
	       var Lg=$d(2,[Mg,Ng,bf,Bg,ef],"sat");
	       var Sg=goog.math.Long.fromBits(1,0).add(rg);
	       var Pg=Sg.add(Ag);
	       var Og=$d(2,[Pg,ig,jg,qg,wg],"sat");
	       var Rg=goog.math.Long.fromBits(1,0).add(hg);
	       var Qg=Rg.add(dg);
	       $R(2,[Qg,ug,vg,Og,Lg],"Bin");
	      },[bf,dg,ef,hg,rg,ug,vg,Ag,ig,jg,qg,wg,Kg,Bg]);break;
	     }
	    },[af,bf,dg,ef,hg,rg,ug,vg,Ag,ig,jg,qg,wg]);
	   },[af,bf,dg,ef,hg,rg,xg,ug,vg,ig,jg,qg,wg],"$j");
	   $M(wg,function(Ug){
	    switch(Ug.g){
	    case 1:
	     zg.J(goog.math.Long.fromBits(0,0));break;
	    case 2:
	     var Vg=Ug.v[0];
	     zg.J(Vg);break;
	    }
	   },[af,bf,dg,ef,hg,rg,xg,ug,vg,ig,jg,qg,wg,zg]);break;
	  case 2:
	   $M(af,function(Yg){
	    var bh=goog.math.Long.fromBits(1,0).add(dg);
	    var Xg=bh.add(tg);
	    var Wg=$d(2,[Xg,Yg,bf,sg,ef],"sat");
	    var ah=goog.math.Long.fromBits(1,0).add(hg);
	    var Zg=ah.add(dg);
	    $R(2,[Zg,ig,jg,qg,Wg],"Bin");
	   },[bf,dg,ef,hg,tg,ig,jg,qg,sg]);break;
	  }break;
	 }
	},[af,bf,dg,ef,hg,rg,ig,jg,qg]);break;
       }
      },[af,bf,dg,ef,hg,lg,ig,jg]);break;
     }break;
    }
   },[af,bf,dg,ef]);break;
  }
 },[cf,af,bf]);
},[],"at libraries/containers/Data/Map.hs:2381:1");
var $$DataziMap_differencezuzdsdeleteFindMax=$f(5,function(yi,zi,Ai,Bi,Ci){
 $M(Ci,function(Di){
  switch(Di.g){
  case 1:
   var Ei=$d(1,[zi,Ai],"sat");
   $R(1,[Ei,Bi],"(,)");break;
  case 2:
   var Fi=Di.v[0],Gi=Di.v[1],Hi=Di.v[2],Ii=Di.v[3],Ji=Di.v[4];
   var Ki=$t(function(){
    $$DataziMap_differencezuzdsdeleteFindMax.J(Fi,Gi,Hi,Ii,Ji);
   },[Fi,Gi,Hi,Ii,Ji],"ds");
   var Li=$t(function(){
    $M(Ki,function(Mi){
     var Ni=Mi.v[1];
     $$DataziMap_balanceL.J(zi,Ai,Bi,Ni);
    },[zi,Ai,Bi]);
   },[zi,Ai,Bi,Ki],"sat");
   var Oi=$t(function(){
    $M(Ki,function(Pi){
     var Qi=Pi.v[0];
     $A(Qi);
    },[]);
   },[Ki],"sat");
   $R(1,[Oi,Li],"(,)");break;
  }
 },[zi,Ai,Bi]);
},[],"at libraries/containers/Data/Map.hs:2263:1");
var $$DataziMap_balanceR=$f(4,function(Fj,Gj,Hj,Ij){
 $M(Hj,function(Jj){
  switch(Jj.g){
  case 1:
   $M(Ij,function(Kj){
    switch(Kj.g){
    case 1:
     $M(Fj,function(Lj){
      $R(2,[goog.math.Long.fromBits(1,0),Lj,Gj,$$DataziMap_Tip,$$DataziMap_Tip],"Bin");
     },[Gj]);break;
    case 2:
     var Mj=Kj.v[0],Nj=Kj.v[1],Oj=Kj.v[2],Pj=Kj.v[3],Qj=Kj.v[4];
     $M(Pj,function(Rj){
      switch(Rj.g){
      case 1:
       $M(Qj,function(Sj){
	switch(Sj.g){
	case 1:
	 $M(Fj,function(Tj){
	  $R(2,[goog.math.Long.fromBits(2,0),Tj,Gj,$$DataziMap_Tip,Kj],"Bin");
	 },[Gj,Kj]);break;
	case 2:
	 $M(Fj,function(Vj){
	  var Uj=$d(2,[goog.math.Long.fromBits(1,0),Vj,Gj,$$DataziMap_Tip,$$DataziMap_Tip],"sat");
	  $R(2,[goog.math.Long.fromBits(3,0),Nj,Oj,Uj,Sj],"Bin");
	 },[Gj,Nj,Oj,Sj]);break;
	}
       },[Fj,Gj,Kj,Nj,Oj]);break;
      case 2:
       var Wj=Rj.v[0],Xj=Rj.v[1],Yj=Rj.v[2],Zj=Rj.v[3],ak=Rj.v[4];
       $M(Qj,function(bk){
	switch(bk.g){
	case 1:
	 $M(Fj,function(ek){
	  var ck=$d(2,[goog.math.Long.fromBits(1,0),Nj,Oj,$$DataziMap_Tip,$$DataziMap_Tip],"sat");
	  var dk=$d(2,[goog.math.Long.fromBits(1,0),ek,Gj,$$DataziMap_Tip,$$DataziMap_Tip],"sat");
	  $R(2,[goog.math.Long.fromBits(3,0),Xj,Yj,dk,ck],"Bin");
	 },[Gj,Nj,Oj,Xj,Yj]);break;
	case 2:
	 var fk=bk.v[0];
	 var Dk=goog.math.Long.fromBits(2,0).multiply(fk);
	 var gk=Wj.lessThan(Dk)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(gk.g){
	 case 1:
	  var hk=$f(1,function(ik){
	   $M(Fj,function(ok){
	    $M(ak,function(jk){
	     switch(jk.g){
	     case 1:
	      var lk=goog.math.Long.fromBits(1,0).add(fk);
	      var kk=$d(2,[lk,Nj,Oj,$$DataziMap_Tip,bk],"sat");
	      var nk=goog.math.Long.fromBits(1,0).add(ik);
	      var mk=$d(2,[nk,ok,Gj,$$DataziMap_Tip,Zj],"sat");
	      var pk=goog.math.Long.fromBits(1,0).add(Mj);
	      $R(2,[pk,Xj,Yj,mk,kk],"Bin");break;
	     case 2:
	      var qk=jk.v[0];
	      var wk=goog.math.Long.fromBits(1,0).add(fk);
	      var sk=wk.add(qk);
	      var rk=$d(2,[sk,Nj,Oj,jk,bk],"sat");
	      var uk=goog.math.Long.fromBits(1,0).add(ik);
	      var tk=$d(2,[uk,ok,Gj,$$DataziMap_Tip,Zj],"sat");
	      var vk=goog.math.Long.fromBits(1,0).add(Mj);
	      $R(2,[vk,Xj,Yj,tk,rk],"Bin");break;
	     }
	    },[Gj,Nj,Oj,Xj,Yj,fk,Mj,ik,ok,Zj,bk]);
	   },[Gj,Nj,Oj,Xj,Yj,fk,ak,Mj,ik,Zj,bk]);
	  },[Fj,Gj,Nj,Oj,Xj,Yj,fk,ak,Mj,Zj,bk],"$j");
	  $M(Zj,function(xk){
	   switch(xk.g){
	   case 1:
	    hk.J(goog.math.Long.fromBits(0,0));break;
	   case 2:
	    var yk=xk.v[0];
	    hk.J(yk);break;
	   }
	  },[Fj,Gj,Nj,Oj,Xj,Yj,fk,ak,Mj,Zj,bk,hk]);break;
	 case 2:
	  $M(Fj,function(Bk){
	   var Ak=goog.math.Long.fromBits(1,0).add(Wj);
	   var zk=$d(2,[Ak,Bk,Gj,$$DataziMap_Tip,Rj],"sat");
	   var Ck=goog.math.Long.fromBits(1,0).add(Mj);
	   $R(2,[Ck,Nj,Oj,zk,bk],"Bin");
	  },[Gj,Nj,Oj,Wj,Mj,bk,Rj]);break;
	 }break;
	}
       },[Fj,Gj,Nj,Oj,Xj,Yj,Wj,ak,Mj,Zj,Rj]);break;
      }
     },[Fj,Gj,Qj,Kj,Nj,Oj,Mj]);break;
    }
   },[Fj,Gj]);break;
  case 2:
   var Ek=Jj.v[0];
   $M(Ij,function(Fk){
    switch(Fk.g){
    case 1:
     $M(Fj,function(Hk){
      var Gk=goog.math.Long.fromBits(1,0).add(Ek);
      $R(2,[Gk,Hk,Gj,Jj,$$DataziMap_Tip],"Bin");
     },[Gj,Ek,Jj]);break;
    case 2:
     var Ik=Fk.v[0],Jk=Fk.v[1],Kk=Fk.v[2],Lk=Fk.v[3],Mk=Fk.v[4];
     var Dl=goog.math.Long.fromBits(3,0).multiply(Ek);
     var Nk=Ik.greaterThan(Dl)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Nk.g){
     case 1:
      $M(Fj,function(Pk){
       var Qk=goog.math.Long.fromBits(1,0).add(Ek);
       var Ok=Qk.add(Ik);
       $R(2,[Ok,Pk,Gj,Jj,Fk],"Bin");
      },[Gj,Ek,Jj,Ik,Fk]);break;
     case 2:
      $M(Lk,function(Rk){
       switch(Rk.g){
       case 1:
	$A($$DataziMap$F);break;
       case 2:
	var Sk=Rk.v[0],Tk=Rk.v[1],Uk=Rk.v[2],Vk=Rk.v[3],Wk=Rk.v[4];
	$M(Mk,function(Xk){
	 switch(Xk.g){
	 case 1:
	  $A($$DataziMap$F);break;
	 case 2:
	  var Yk=Xk.v[0];
	  var Cl=goog.math.Long.fromBits(2,0).multiply(Yk);
	  var Zk=Sk.lessThan(Cl)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Zk.g){
	  case 1:
	   var al=$f(1,function(bl){
	    $M(Fj,function(hl){
	     $M(Wk,function(cl){
	      switch(cl.g){
	      case 1:
	       var el=goog.math.Long.fromBits(1,0).add(Yk);
	       var dl=$d(2,[el,Jk,Kk,$$DataziMap_Tip,Xk],"sat");
	       var kl=goog.math.Long.fromBits(1,0).add(Ek);
	       var gl=kl.add(bl);
	       var fl=$d(2,[gl,hl,Gj,Jj,Vk],"sat");
	       var jl=goog.math.Long.fromBits(1,0).add(Ek);
	       var il=jl.add(Ik);
	       $R(2,[il,Tk,Uk,fl,dl],"Bin");break;
	      case 2:
	       var ll=cl.v[0];
	       var tl=goog.math.Long.fromBits(1,0).add(Yk);
	       var nl=tl.add(ll);
	       var ml=$d(2,[nl,Jk,Kk,cl,Xk],"sat");
	       var sl=goog.math.Long.fromBits(1,0).add(Ek);
	       var pl=sl.add(bl);
	       var ol=$d(2,[pl,hl,Gj,Jj,Vk],"sat");
	       var rl=goog.math.Long.fromBits(1,0).add(Ek);
	       var ql=rl.add(Ik);
	       $R(2,[ql,Tk,Uk,ol,ml],"Bin");break;
	      }
	     },[Gj,Ek,Jj,Ik,Yk,Tk,Uk,bl,hl,Vk,Jk,Kk,Xk]);
	    },[Gj,Ek,Jj,Ik,Yk,Wk,Tk,Uk,bl,Vk,Jk,Kk,Xk]);
	   },[Fj,Gj,Ek,Jj,Ik,Yk,Wk,Tk,Uk,Vk,Jk,Kk,Xk],"$j");
	   $M(Vk,function(ul){
	    switch(ul.g){
	    case 1:
	     al.J(goog.math.Long.fromBits(0,0));break;
	    case 2:
	     var vl=ul.v[0];
	     al.J(vl);break;
	    }
	   },[Fj,Gj,Ek,Jj,Ik,Yk,Wk,Tk,Uk,Vk,Jk,Kk,Xk,al]);break;
	  case 2:
	   $M(Fj,function(yl){
	    var Bl=goog.math.Long.fromBits(1,0).add(Ek);
	    var xl=Bl.add(Sk);
	    var wl=$d(2,[xl,yl,Gj,Jj,Rk],"sat");
	    var Al=goog.math.Long.fromBits(1,0).add(Ek);
	    var zl=Al.add(Ik);
	    $R(2,[zl,Jk,Kk,wl,Xk],"Bin");
	   },[Gj,Ek,Jj,Ik,Sk,Jk,Kk,Xk,Rk]);break;
	  }break;
	 }
	},[Fj,Gj,Ek,Jj,Ik,Sk,Wk,Tk,Uk,Vk,Jk,Kk,Rk]);break;
       }
      },[Fj,Gj,Ek,Jj,Ik,Mk,Jk,Kk]);break;
     }break;
    }
   },[Fj,Gj,Ek,Jj]);break;
  }
 },[Ij,Fj,Gj]);
},[],"at libraries/containers/Data/Map.hs:2406:1");
var $$DataziMap_insert=$f(4,function(El,Fl,Gl,Hl){
 var Il=$f(3,function(Jl,Kl,Ll){
  $M(Jl,function(Nl){
   $M(Ll,function(Ml){
    switch(Ml.g){
    case 1:
     $R(2,[goog.math.Long.fromBits(1,0),Nl,Kl,$$DataziMap_Tip,$$DataziMap_Tip],"Bin");break;
    case 2:
     var Ol=Ml.v[0],Pl=Ml.v[1],Ql=Ml.v[2],Rl=Ml.v[3],Sl=Ml.v[4];
     $$GHCziClasses_compare.C([El,Nl,Pl],function(Tl){
      switch(Tl.g){
      case 1:
       Il.C([Nl,Kl,Rl],function(Ul){
	$$DataziMap_balanceL.J(Pl,Ql,Ul,Sl);
       },[Pl,Ql,Sl]);break;
      case 2:
       $R(2,[Ol,Nl,Kl,Rl,Sl],"Bin");break;
      case 3:
       Il.C([Nl,Kl,Sl],function(Vl){
	$$DataziMap_balanceR.J(Pl,Ql,Rl,Vl);
       },[Pl,Ql,Rl]);break;
      }
     },[Nl,Kl,Pl,Ql,Rl,Il,Sl,Ol]);break;
    }
   },[Nl,Kl,El,Il]);
  },[Ll,Kl,El,Il]);
 },[El],"go2");
 Il.J(Fl,Gl,Hl);
},[],"at libraries/containers/Data/Map.hs:472:1");
var $$DataziMap_differencezuzdsdeleteFindMin=$f(5,function(nr,or,pr,qr,rr){
 $M(qr,function(sr){
  switch(sr.g){
  case 1:
   var tr=$d(1,[or,pr],"sat");
   $R(1,[tr,rr],"(,)");break;
  case 2:
   var ur=sr.v[0],vr=sr.v[1],wr=sr.v[2],xr=sr.v[3],yr=sr.v[4];
   var zr=$t(function(){
    $$DataziMap_differencezuzdsdeleteFindMin.J(ur,vr,wr,xr,yr);
   },[ur,vr,wr,xr,yr],"ds");
   var Ar=$t(function(){
    $M(zr,function(Br){
     var Cr=Br.v[1];
     $$DataziMap_balanceR.J(or,pr,Cr,rr);
    },[or,pr,rr]);
   },[or,pr,rr,zr],"sat");
   var Dr=$t(function(){
    $M(zr,function(Er){
     var Fr=Er.v[0];
     $A(Fr);
    },[]);
   },[zr],"sat");
   $R(1,[Dr,Ar],"(,)");break;
  }
 },[or,pr,rr]);
},[],"at libraries/containers/Data/Map.hs:2248:1");
var $$DataziMap_glue=$f(2,function(us,vs){
 $M(us,function(ws){
  switch(ws.g){
  case 1:
   $A(vs);break;
  case 2:
   var xs=ws.v[0],ys=ws.v[1],zs=ws.v[2],As=ws.v[3],Bs=ws.v[4];
   $M(vs,function(Cs){
    switch(Cs.g){
    case 1:
     $A(ws);break;
    case 2:
     var Ds=Cs.v[0],Es=Cs.v[1],Fs=Cs.v[2],Gs=Cs.v[3],Hs=Cs.v[4];
     var Is=xs.greaterThan(Ds)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Is.g){
     case 1:
      $$DataziMap_differencezuzdsdeleteFindMin.C([Ds,Es,Fs,Gs,Hs],function(Js){
       var Ks=Js.v[0],Ls=Js.v[1];
       $M(Ks,function(Ms){
	var Ns=Ms.v[0],Os=Ms.v[1];
	$$DataziMap_balanceL.J(Ns,Os,ws,Ls);
       },[ws,Ls]);
      },[ws]);break;
     case 2:
      $$DataziMap_differencezuzdsdeleteFindMax.C([xs,ys,zs,As,Bs],function(Ps){
       var Qs=Ps.v[0],Rs=Ps.v[1];
       $M(Qs,function(Ss){
	var Ts=Ss.v[0],Us=Ss.v[1];
	$$DataziMap_balanceR.J(Ts,Us,Rs,Cs);
       },[Rs,Cs]);
      },[Cs]);break;
     }break;
    }
   },[ws,xs,ys,zs,As,Bs]);break;
  }
 },[vs]);
},[],"at libraries/containers/Data/Map.hs:2232:1");
var $$DataziMap_delete=$f(3,function(Vs,Ws,Xs){
 var Ys=$f(2,function(Zs,at){
  $M(Zs,function(it){
   $M(at,function(bt){
    switch(bt.g){
    case 1:
     $R(1,[],"Tip");break;
    case 2:
     var ct=bt.v[1],dt=bt.v[2],et=bt.v[3],ft=bt.v[4];
     $$GHCziClasses_compare.C([Vs,it,ct],function(gt){
      switch(gt.g){
      case 1:
       Ys.C([it,et],function(ht){
	$$DataziMap_balanceR.J(ct,dt,ht,ft);
       },[ct,dt,ft]);break;
      case 2:
       $$DataziMap_glue.J(et,ft);break;
      case 3:
       Ys.C([it,ft],function(jt){
	$$DataziMap_balanceL.J(ct,dt,et,jt);
       },[ct,dt,et]);break;
      }
     },[it,ct,dt,et,Ys,ft]);break;
    }
   },[Vs,it,Ys]);
  },[at,Vs,Ys]);
 },[Vs],"go2");
 Ys.J(Ws,Xs);
},[],"at libraries/containers/Data/Map.hs:624:1");
var $$DataziMap_Tip=$D(1,function(){
 $r([]);
},"at libraries/containers/Data/Map.hs:268:17");
var $$DataziMap$j=$F(2,function(JX,KX){
 $M(KX,function(LX){
  switch(LX.g){
  case 1:
   $A(JX);break;
  case 2:
   var MX=LX.v[1],NX=LX.v[2],OX=LX.v[3],PX=LX.v[4];
   var QX=$t(function(){
    $$DataziMap$j.J(JX,PX);
   },[JX,PX],"sat");
   var RX=$d(1,[MX,NX],"sat");
   var SX=$d(2,[RX,QX],"sat");
   $$DataziMap$j.J(SX,OX);break;
  }
 },[JX]);
},"poly_go1");
var $$DataziMap$z=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Failure in Data.Map.balanceL");
},"lvl17");
var $$DataziMap$A=$T(function(){
 $$GHCziErr_error.J($$DataziMap$z);
},"lvl18");
var $$DataziMap$E=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Failure in Data.Map.balanceR");
},"lvl22");
var $$DataziMap$F=$T(function(){
 $$GHCziErr_error.J($$DataziMap$E);
},"lvl23");
var $$DataziSequence_zdfSizzedFingerTreezuzdcsizze=$f(1,function(Us){
 $M(Us,function(Vs){
  switch(Vs.g){
  case 1:
   var Ws=Vs.v[0];
   $R(1,[Ws],"I#");break;
  case 2:
   var Xs=Vs.v[0];
   $R(1,[Xs],"I#");break;
  }
 },[]);
},[],"at libraries/containers/Data/Sequence.hs:162:5");
var $$DataziSequence_zlzbzunode3=$f(3,function(dt,et,ft){
 $R(2,[goog.math.Long.fromBits(3,0),dt,et,ft],"Node3");
},[],"at libraries/containers/Data/Sequence.hs:446:1");
var $$DataziSequence_zlzbzuconsTree1=$f(2,function(Kv,Lv){
 $M(Lv,function(Mv){
  switch(Mv.g){
  case 1:
   $R(2,[Kv],"Single");break;
  case 2:
   var Nv=Mv.v[0];
   $M(Kv,function(Ov){
    switch(Ov.g){
    case 1:
     var Pv=Ov.v[0];
     $M(Nv,function(Qv){
      switch(Qv.g){
      case 1:
       var Rv=Qv.v[0];
       var Sv=$d(1,[Qv],"sat");
       var Tv=$d(1,[Ov],"sat");
       var Uv=Pv.add(Rv);
       $R(3,[Uv,Tv,$$DataziSequence_Empty,Sv],"Deep");break;
      case 2:
       var Vv=Qv.v[0];
       var Wv=$d(1,[Qv],"sat");
       var Xv=$d(1,[Ov],"sat");
       var Yv=Pv.add(Vv);
       $R(3,[Yv,Xv,$$DataziSequence_Empty,Wv],"Deep");break;
      }
     },[Pv,Ov]);break;
    case 2:
     var Zv=Ov.v[0];
     $M(Nv,function(aw){
      switch(aw.g){
      case 1:
       var bw=aw.v[0];
       var cw=$d(1,[aw],"sat");
       var dw=$d(1,[Ov],"sat");
       var ew=Zv.add(bw);
       $R(3,[ew,dw,$$DataziSequence_Empty,cw],"Deep");break;
      case 2:
       var fw=aw.v[0];
       var gw=$d(1,[aw],"sat");
       var hw=$d(1,[Ov],"sat");
       var iw=Zv.add(fw);
       $R(3,[iw,hw,$$DataziSequence_Empty,gw],"Deep");break;
      }
     },[Ov,Zv]);break;
    }
   },[Nv]);break;
  case 3:
   var jw=Mv.v[0],kw=Mv.v[1],lw=Mv.v[2],mw=Mv.v[3];
   $M(kw,function(nw){
    switch(nw.g){
    case 1:
     var ow=nw.v[0];
     $M(Kv,function(pw){
      switch(pw.g){
      case 1:
       var qw=pw.v[0];
       var rw=$d(2,[pw,ow],"sat");
       var sw=qw.add(jw);
       $R(3,[sw,rw,lw,mw],"Deep");break;
      case 2:
       var tw=pw.v[0];
       var uw=$d(2,[pw,ow],"sat");
       var vw=tw.add(jw);
       $R(3,[vw,uw,lw,mw],"Deep");break;
      }
     },[jw,ow,lw,mw]);break;
    case 2:
     var ww=nw.v[0],xw=nw.v[1];
     $M(Kv,function(yw){
      switch(yw.g){
      case 1:
       var zw=yw.v[0];
       var Aw=$d(3,[yw,ww,xw],"sat");
       var Bw=zw.add(jw);
       $R(3,[Bw,Aw,lw,mw],"Deep");break;
      case 2:
       var Cw=yw.v[0];
       var Dw=$d(3,[yw,ww,xw],"sat");
       var Ew=Cw.add(jw);
       $R(3,[Ew,Dw,lw,mw],"Deep");break;
      }
     },[jw,lw,mw,ww,xw]);break;
    case 3:
     var Fw=nw.v[0],Gw=nw.v[1],Hw=nw.v[2];
     $M(Kv,function(Iw){
      switch(Iw.g){
      case 1:
       var Jw=Iw.v[0];
       var Kw=$d(4,[Iw,Fw,Gw,Hw],"sat");
       var Lw=Jw.add(jw);
       $R(3,[Lw,Kw,lw,mw],"Deep");break;
      case 2:
       var Mw=Iw.v[0];
       var Nw=$d(4,[Iw,Fw,Gw,Hw],"sat");
       var Ow=Mw.add(jw);
       $R(3,[Ow,Nw,lw,mw],"Deep");break;
      }
     },[jw,lw,mw,Fw,Gw,Hw]);break;
    case 4:
     var Pw=nw.v[0],Qw=nw.v[1],Rw=nw.v[2],Sw=nw.v[3];
     $M(lw,function(Tw){
      var Uw=$f(1,function(Vw){
       var Ww=$t(function(){
	var Xw=$t(function(){
	 $$DataziSequence$O.J(Qw,Rw,Sw);
	},[Qw,Rw,Sw],"sat");
	$$DataziSequence_zlzbzuconsTree1.J(Xw,Tw);
       },[Qw,Rw,Sw,Tw],"sat");
       var Yw=$d(2,[Kv,Pw],"sat");
       var Zw=Vw.add(jw);
       $R(3,[Zw,Yw,Ww,mw],"Deep");
      },[Kv,jw,mw,Pw,Qw,Rw,Sw,Tw],"$j");
      $M(Kv,function(ax){
       switch(ax.g){
       case 1:
	var bx=ax.v[0];
	Uw.J(bx);break;
       case 2:
	var cx=ax.v[0];
	Uw.J(cx);break;
       }
      },[Kv,jw,mw,Pw,Qw,Rw,Sw,Tw,Uw]);
     },[Kv,jw,mw,Pw,Qw,Rw,Sw]);break;
    }
   },[Kv,jw,lw,mw]);break;
  }
 },[Kv]);
},[],"at libraries/containers/Data/Sequence.hs:592:1");
var $$DataziSequence_zlzbzuconsTree=$f(2,function(dx,ex){
 $M(ex,function(fx){
  switch(fx.g){
  case 1:
   $R(2,[dx],"Single");break;
  case 2:
   var gx=fx.v[0];
   var hx=$d(1,[gx],"sat");
   var ix=$d(1,[dx],"sat");
   $R(3,[goog.math.Long.fromBits(2,0),ix,$$DataziSequence_Empty,hx],"Deep");break;
  case 3:
   var jx=fx.v[0],kx=fx.v[1],lx=fx.v[2],mx=fx.v[3];
   $M(kx,function(nx){
    switch(nx.g){
    case 1:
     var ox=nx.v[0];
     var px=$d(2,[dx,ox],"sat");
     var qx=goog.math.Long.fromBits(1,0).add(jx);
     $R(3,[qx,px,lx,mx],"Deep");break;
    case 2:
     var rx=nx.v[0],sx=nx.v[1];
     var tx=$d(3,[dx,rx,sx],"sat");
     var ux=goog.math.Long.fromBits(1,0).add(jx);
     $R(3,[ux,tx,lx,mx],"Deep");break;
    case 3:
     var vx=nx.v[0],wx=nx.v[1],xx=nx.v[2];
     var yx=$d(4,[dx,vx,wx,xx],"sat");
     var zx=goog.math.Long.fromBits(1,0).add(jx);
     $R(3,[zx,yx,lx,mx],"Deep");break;
    case 4:
     var Ax=nx.v[0],Bx=nx.v[1],Cx=nx.v[2],Dx=nx.v[3];
     $M(lx,function(Ex){
      var Fx=$t(function(){
       var Gx=$t(function(){
	$$DataziSequence_zlzbzunode3.J(Bx,Cx,Dx);
       },[Bx,Cx,Dx],"sat");
       $$DataziSequence_zlzbzuconsTree1.J(Gx,Ex);
      },[Bx,Cx,Dx,Ex],"sat");
      var Hx=$d(2,[dx,Ax],"sat");
      var Ix=goog.math.Long.fromBits(1,0).add(jx);
      $R(3,[Ix,Hx,Fx,mx],"Deep");
     },[dx,jx,mx,Ax,Bx,Cx,Dx]);break;
    }
   },[dx,jx,lx,mx]);break;
  }
 },[dx]);
},[],"at libraries/containers/Data/Sequence.hs:592:1");
var $$DataziSequence_filterzusnocTree1=$f(2,function(Ux,Vx){
 $M(Ux,function(Wx){
  switch(Wx.g){
  case 1:
   $R(2,[Vx],"Single");break;
  case 2:
   var Xx=Wx.v[0];
   $M(Xx,function(Yx){
    switch(Yx.g){
    case 1:
     var Zx=Yx.v[0];
     $M(Vx,function(ay){
      switch(ay.g){
      case 1:
       var by=ay.v[0];
       var cy=$d(1,[ay],"sat");
       var dy=$d(1,[Yx],"sat");
       var ey=Zx.add(by);
       $R(3,[ey,dy,$$DataziSequence_Empty,cy],"Deep");break;
      case 2:
       var fy=ay.v[0];
       var gy=$d(1,[ay],"sat");
       var hy=$d(1,[Yx],"sat");
       var iy=Zx.add(fy);
       $R(3,[iy,hy,$$DataziSequence_Empty,gy],"Deep");break;
      }
     },[Zx,Yx]);break;
    case 2:
     var jy=Yx.v[0];
     $M(Vx,function(ky){
      switch(ky.g){
      case 1:
       var ly=ky.v[0];
       var my=$d(1,[ky],"sat");
       var ny=$d(1,[Yx],"sat");
       var oy=jy.add(ly);
       $R(3,[oy,ny,$$DataziSequence_Empty,my],"Deep");break;
      case 2:
       var py=ky.v[0];
       var qy=$d(1,[ky],"sat");
       var ry=$d(1,[Yx],"sat");
       var sy=jy.add(py);
       $R(3,[sy,ry,$$DataziSequence_Empty,qy],"Deep");break;
      }
     },[Yx,jy]);break;
    }
   },[Vx]);break;
  case 3:
   var ty=Wx.v[0],uy=Wx.v[1],vy=Wx.v[2],wy=Wx.v[3];
   $M(wy,function(xy){
    switch(xy.g){
    case 1:
     var yy=xy.v[0];
     $M(Vx,function(zy){
      switch(zy.g){
      case 1:
       var Ay=zy.v[0];
       var By=$d(2,[yy,zy],"sat");
       var Cy=ty.add(Ay);
       $R(3,[Cy,uy,vy,By],"Deep");break;
      case 2:
       var Dy=zy.v[0];
       var Ey=$d(2,[yy,zy],"sat");
       var Fy=ty.add(Dy);
       $R(3,[Fy,uy,vy,Ey],"Deep");break;
      }
     },[ty,uy,vy,yy]);break;
    case 2:
     var Gy=xy.v[0],Hy=xy.v[1];
     $M(Vx,function(Iy){
      switch(Iy.g){
      case 1:
       var Jy=Iy.v[0];
       var Ky=$d(3,[Gy,Hy,Iy],"sat");
       var Ly=ty.add(Jy);
       $R(3,[Ly,uy,vy,Ky],"Deep");break;
      case 2:
       var My=Iy.v[0];
       var Ny=$d(3,[Gy,Hy,Iy],"sat");
       var Oy=ty.add(My);
       $R(3,[Oy,uy,vy,Ny],"Deep");break;
      }
     },[ty,uy,vy,Gy,Hy]);break;
    case 3:
     var Py=xy.v[0],Qy=xy.v[1],Ry=xy.v[2];
     $M(Vx,function(Sy){
      switch(Sy.g){
      case 1:
       var Ty=Sy.v[0];
       var Uy=$d(4,[Py,Qy,Ry,Sy],"sat");
       var Vy=ty.add(Ty);
       $R(3,[Vy,uy,vy,Uy],"Deep");break;
      case 2:
       var Wy=Sy.v[0];
       var Xy=$d(4,[Py,Qy,Ry,Sy],"sat");
       var Yy=ty.add(Wy);
       $R(3,[Yy,uy,vy,Xy],"Deep");break;
      }
     },[ty,uy,vy,Py,Qy,Ry]);break;
    case 4:
     var Zy=xy.v[0],az=xy.v[1],bz=xy.v[2],cz=xy.v[3];
     $M(vy,function(dz){
      var ez=$f(1,function(fz){
       var gz=$d(2,[cz,Vx],"sat");
       var hz=$t(function(){
	var iz=$t(function(){
	 $$DataziSequence$O.J(Zy,az,bz);
	},[Zy,az,bz],"sat");
	$$DataziSequence_filterzusnocTree1.J(dz,iz);
       },[dz,Zy,az,bz],"sat");
       var jz=ty.add(fz);
       $R(3,[jz,uy,hz,gz],"Deep");
      },[Vx,ty,uy,dz,Zy,az,bz,cz],"$j");
      $M(Vx,function(kz){
       switch(kz.g){
       case 1:
	var lz=kz.v[0];
	ez.J(lz);break;
       case 2:
	var mz=kz.v[0];
	ez.J(mz);break;
       }
      },[Vx,ty,uy,dz,Zy,az,bz,cz,ez]);
     },[Vx,ty,uy,Zy,az,bz,cz]);break;
    }
   },[Vx,ty,uy,vy]);break;
  }
 },[Vx]);
},[],"at libraries/containers/Data/Sequence.hs:611:1");
var $$DataziSequence_filterzusnocTree=$f(2,function(nz,oz){
 $M(nz,function(pz){
  switch(pz.g){
  case 1:
   $R(2,[oz],"Single");break;
  case 2:
   var qz=pz.v[0];
   var rz=$d(1,[oz],"sat");
   var sz=$d(1,[qz],"sat");
   $R(3,[goog.math.Long.fromBits(2,0),sz,$$DataziSequence_Empty,rz],"Deep");break;
  case 3:
   var tz=pz.v[0],uz=pz.v[1],vz=pz.v[2],wz=pz.v[3];
   $M(wz,function(xz){
    switch(xz.g){
    case 1:
     var yz=xz.v[0];
     var zz=$d(2,[yz,oz],"sat");
     var Az=tz.add(goog.math.Long.fromBits(1,0));
     $R(3,[Az,uz,vz,zz],"Deep");break;
    case 2:
     var Bz=xz.v[0],Cz=xz.v[1];
     var Dz=$d(3,[Bz,Cz,oz],"sat");
     var Ez=tz.add(goog.math.Long.fromBits(1,0));
     $R(3,[Ez,uz,vz,Dz],"Deep");break;
    case 3:
     var Fz=xz.v[0],Gz=xz.v[1],Hz=xz.v[2];
     var Iz=$d(4,[Fz,Gz,Hz,oz],"sat");
     var Jz=tz.add(goog.math.Long.fromBits(1,0));
     $R(3,[Jz,uz,vz,Iz],"Deep");break;
    case 4:
     var Kz=xz.v[0],Lz=xz.v[1],Mz=xz.v[2],Nz=xz.v[3];
     $M(vz,function(Oz){
      var Pz=$d(2,[Nz,oz],"sat");
      var Qz=$t(function(){
       var Rz=$t(function(){
	$$DataziSequence_zlzbzunode3.J(Kz,Lz,Mz);
       },[Kz,Lz,Mz],"sat");
       $$DataziSequence_filterzusnocTree1.J(Oz,Rz);
      },[Oz,Kz,Lz,Mz],"sat");
      var Sz=tz.add(goog.math.Long.fromBits(1,0));
      $R(3,[Sz,uz,Qz,Pz],"Deep");
     },[oz,tz,uz,Kz,Lz,Mz,Nz]);break;
    }
   },[oz,tz,uz,vz]);break;
  }
 },[oz]);
},[],"at libraries/containers/Data/Sequence.hs:611:1");
var $$DataziSequence_zdwindex=$f(2,function(BN,CN){
 var DN=goog.math.Long.fromBits(0,0).lessThanOrEqual(CN)?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(DN.g){
 case 1:
  $A($$DataziSequence$u1);break;
 case 2:
  var EN=$t(function(){
   $M(BN,function(FN){
    switch(FN.g){
    case 1:
     $A($$DataziSequence$v1);break;
    case 2:
     var GN=FN.v[0];
     $A(GN);break;
    case 3:
     var HN=FN.v[1],IN=FN.v[2],JN=FN.v[3];
     var KN=$f(1,function(LN){
      var MN=CN.lessThan(LN)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(MN.g){
      case 1:
       var NN=$f(1,function(ON){
	var PN=CN.lessThan(ON)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(PN.g){
	case 1:
	 $M(JN,function(QN){
	  switch(QN.g){
	  case 1:
	   var RN=QN.v[0];
	   $A(RN);break;
	  case 2:
	   var SN=QN.v[0],TN=QN.v[1];
	   var VN=CN.subtract(ON);
	   var UN=VN.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(UN.g){
	   case 1:
	    $A(TN);break;
	   case 2:
	    $A(SN);break;
	   }break;
	  case 3:
	   var WN=QN.v[0],XN=QN.v[1],YN=QN.v[2];
	   var bO=CN.subtract(ON);
	   var ZN=bO.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(ZN.g){
	   case 1:
	    var aO=bO.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(aO.g){
	    case 1:
	     $A(YN);break;
	    case 2:
	     $A(XN);break;
	    }break;
	   case 2:
	    $A(WN);break;
	   }break;
	  case 4:
	   var cO=QN.v[0],dO=QN.v[1],eO=QN.v[2],fO=QN.v[3];
	   var jO=CN.subtract(ON);
	   var gO=jO.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(gO.g){
	   case 1:
	    var hO=jO.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(hO.g){
	    case 1:
	     var iO=jO.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(iO.g){
	     case 1:
	      $A(fO);break;
	     case 2:
	      $A(eO);break;
	     }break;
	    case 2:
	     $A(dO);break;
	    }break;
	   case 2:
	    $A(cO);break;
	   }break;
	  }
	 },[CN,ON]);break;
	case 2:
	 var wO=CN.subtract(LN);
	 $$DataziSequence$s1.C([wO,IN],function(kO){
	  var lO=kO[0],mO=kO[1];
	  $M(mO,function(nO){
	   switch(nO.g){
	   case 1:
	    var oO=nO.v[1],pO=nO.v[2];
	    var qO=lO.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(qO.g){
	    case 1:
	     $A(pO);break;
	    case 2:
	     $A(oO);break;
	    }break;
	   case 2:
	    var rO=nO.v[1],sO=nO.v[2],tO=nO.v[3];
	    var uO=lO.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(uO.g){
	    case 1:
	     var vO=lO.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(vO.g){
	     case 1:
	      $A(tO);break;
	     case 2:
	      $A(sO);break;
	     }break;
	    case 2:
	     $A(rO);break;
	    }break;
	   }
	  },[lO]);
	 },[]);break;
	}
       },[CN,LN,JN,IN],"$j1");
       $M(IN,function(xO){
	switch(xO.g){
	case 1:
	 NN.J(LN);break;
	case 2:
	 var yO=xO.v[0];
	 $M(yO,function(zO){
	  switch(zO.g){
	  case 1:
	   var AO=zO.v[0];
	   var BO=LN.add(AO);
	   NN.J(BO);break;
	  case 2:
	   var CO=zO.v[0];
	   var DO=LN.add(CO);
	   NN.J(DO);break;
	  }
	 },[CN,LN,JN,IN,NN]);break;
	case 3:
	 var EO=xO.v[0];
	 var FO=LN.add(EO);
	 NN.J(FO);break;
	}
       },[CN,LN,JN,IN,NN]);break;
      case 2:
       $M(HN,function(GO){
	switch(GO.g){
	case 1:
	 var HO=GO.v[0];
	 $A(HO);break;
	case 2:
	 var IO=GO.v[0],JO=GO.v[1];
	 var KO=CN.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(KO.g){
	 case 1:
	  $A(JO);break;
	 case 2:
	  $A(IO);break;
	 }break;
	case 3:
	 var LO=GO.v[0],MO=GO.v[1],NO=GO.v[2];
	 var OO=CN.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(OO.g){
	 case 1:
	  var PO=CN.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(PO.g){
	  case 1:
	   $A(NO);break;
	  case 2:
	   $A(MO);break;
	  }break;
	 case 2:
	  $A(LO);break;
	 }break;
	case 4:
	 var QO=GO.v[0],RO=GO.v[1],SO=GO.v[2],TO=GO.v[3];
	 var UO=CN.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(UO.g){
	 case 1:
	  var VO=CN.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(VO.g){
	  case 1:
	   var WO=CN.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(WO.g){
	   case 1:
	    $A(TO);break;
	   case 2:
	    $A(SO);break;
	   }break;
	  case 2:
	   $A(RO);break;
	  }break;
	 case 2:
	  $A(QO);break;
	 }break;
	}
       },[CN]);break;
      }
     },[CN,JN,IN,HN],"$j");
     $M(HN,function(XO){
      switch(XO.g){
      case 1:
       KN.J(goog.math.Long.fromBits(1,0));break;
      case 2:
       KN.J(goog.math.Long.fromBits(2,0));break;
      case 3:
       KN.J(goog.math.Long.fromBits(3,0));break;
      case 4:
       KN.J(goog.math.Long.fromBits(4,0));break;
      }
     },[CN,JN,IN,HN,KN]);break;
    }
   },[CN]);
  },[CN,BN],"$w$j");
  $M(BN,function(YO){
   switch(YO.g){
   case 1:
    var ZO=CN.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(ZO.g){
    case 1:
     $A($$DataziSequence$u1);break;
    case 2:
     $A(EN);break;
    }break;
   case 2:
    var aP=CN.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(aP.g){
    case 1:
     $A($$DataziSequence$u1);break;
    case 2:
     $A(EN);break;
    }break;
   case 3:
    var bP=YO.v[0];
    var cP=CN.lessThan(bP)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(cP.g){
    case 1:
     $A($$DataziSequence$u1);break;
    case 2:
     $A(EN);break;
    }break;
   }
  },[CN,BN,EN]);break;
 }
},[],"at libraries/containers/Data/Sequence.hs:1043:1");
var $$DataziSequence_zdwsplitAt=$f(2,function(hP,iP){
 var jP=$t(function(){
  $M(iP,function(kP){
   switch(kP.g){
   case 1:
    $M(hP,function(w1b){
     $A($$DataziSequence$C1);
    },[]);break;
   default:
    var lP=$f(1,function(mP){
     $M(hP,function(nP){
      var oP=nP.v[0];
      var pP=mP.greaterThan(oP)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(pP.g){
      case 1:
       $r([kP,$$DataziSequence_Empty]);break;
      case 2:
       var qP=$t(function(){
	$M(kP,function(rP){
	 switch(rP.g){
	 case 2:
	  var sP=rP.v[0];
	  $R(1,[$$DataziSequence_Empty,sP,$$DataziSequence_Empty],"Split");break;
	 case 3:
	  var tP=rP.v[1],uP=rP.v[2],vP=rP.v[3];
	  var wP=$f(1,function(xP){
	   var yP=oP.lessThan(xP)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(yP.g){
	   case 1:
	    var zP=$f(1,function(AP){
	     var BP=oP.lessThan(AP)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(BP.g){
	     case 1:
	      $M(vP,function(CP){
	       switch(CP.g){
	       case 1:
		var DP=CP.v[0];
		var EP=$t(function(){
		 var FP=$f(1,function(GP){
		  $$DataziSequence$T.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,uP],function(HP){
		   switch(HP.g){
		   case 1:
		    $M(tP,function(IP){
		     switch(IP.g){
		     case 1:
		      var JP=IP.v[0];
		      $R(2,[JP],"Single");break;
		     case 2:
		      var KP=IP.v[0],LP=IP.v[1];
		      var MP=$d(1,[LP],"sat");
		      var NP=$d(1,[KP],"sat");
		      $R(3,[GP,NP,$$DataziSequence_Empty,MP],"Deep");break;
		     case 3:
		      var OP=IP.v[0],PP=IP.v[1],QP=IP.v[2];
		      var RP=$d(1,[QP],"sat");
		      var SP=$d(2,[OP,PP],"sat");
		      $R(3,[GP,SP,$$DataziSequence_Empty,RP],"Deep");break;
		     case 4:
		      var TP=IP.v[0],UP=IP.v[1],VP=IP.v[2],WP=IP.v[3];
		      var XP=$d(2,[VP,WP],"sat");
		      var YP=$d(2,[TP,UP],"sat");
		      $R(3,[GP,YP,$$DataziSequence_Empty,XP],"Deep");break;
		     }
		    },[GP]);break;
		   case 2:
		    var ZP=HP.v[0],aQ=HP.v[1];
		    $b(function(){
		     $M(aQ,function(cQ){
		      switch(cQ.g){
		      case 1:
		       var dQ=cQ.v[1],eQ=cQ.v[2];
		       $R(2,[dQ,eQ],"Two");break;
		      case 2:
		       var fQ=cQ.v[1],gQ=cQ.v[2],hQ=cQ.v[3];
		       $R(3,[fQ,gQ,hQ],"Three");break;
		      }
		     },[tP,GP,ZP]);
		    },[],function(bQ){
		     $R(3,[GP,tP,ZP,bQ],"Deep");
		    },[tP,GP,ZP]);break;
		   }
		  },[tP,GP]);
		 },[uP,tP],"$j");
		 $M(uP,function(iQ){
		  switch(iQ.g){
		  case 1:
		   $M(tP,function(jQ){
		    switch(jQ.g){
		    case 1:
		     FP.J(goog.math.Long.fromBits(1,0));break;
		    case 2:
		     FP.J(goog.math.Long.fromBits(2,0));break;
		    case 3:
		     FP.J(goog.math.Long.fromBits(3,0));break;
		    case 4:
		     FP.J(goog.math.Long.fromBits(4,0));break;
		    }
		   },[uP,tP,FP]);break;
		  case 2:
		   var kQ=iQ.v[0];
		   $M(kQ,function(lQ){
		    switch(lQ.g){
		    case 1:
		     var mQ=lQ.v[0];
		     $M(tP,function(nQ){
		      switch(nQ.g){
		      case 1:
		       var oQ=mQ.add(goog.math.Long.fromBits(1,0));
		       FP.J(oQ);break;
		      case 2:
		       var pQ=mQ.add(goog.math.Long.fromBits(2,0));
		       FP.J(pQ);break;
		      case 3:
		       var qQ=mQ.add(goog.math.Long.fromBits(3,0));
		       FP.J(qQ);break;
		      case 4:
		       var rQ=mQ.add(goog.math.Long.fromBits(4,0));
		       FP.J(rQ);break;
		      }
		     },[uP,tP,FP,mQ]);break;
		    case 2:
		     var sQ=lQ.v[0];
		     $M(tP,function(tQ){
		      switch(tQ.g){
		      case 1:
		       var uQ=sQ.add(goog.math.Long.fromBits(1,0));
		       FP.J(uQ);break;
		      case 2:
		       var vQ=sQ.add(goog.math.Long.fromBits(2,0));
		       FP.J(vQ);break;
		      case 3:
		       var wQ=sQ.add(goog.math.Long.fromBits(3,0));
		       FP.J(wQ);break;
		      case 4:
		       var xQ=sQ.add(goog.math.Long.fromBits(4,0));
		       FP.J(xQ);break;
		      }
		     },[uP,tP,FP,sQ]);break;
		    }
		   },[uP,tP,FP]);break;
		  case 3:
		   var yQ=iQ.v[0];
		   $M(tP,function(zQ){
		    switch(zQ.g){
		    case 1:
		     var AQ=yQ.add(goog.math.Long.fromBits(1,0));
		     FP.J(AQ);break;
		    case 2:
		     var BQ=yQ.add(goog.math.Long.fromBits(2,0));
		     FP.J(BQ);break;
		    case 3:
		     var CQ=yQ.add(goog.math.Long.fromBits(3,0));
		     FP.J(CQ);break;
		    case 4:
		     var DQ=yQ.add(goog.math.Long.fromBits(4,0));
		     FP.J(DQ);break;
		    }
		   },[uP,tP,FP,yQ]);break;
		  }
		 },[uP,tP,FP]);
		},[uP,tP],"sat");
		$r([EP,DP,$$DataziSequence_Empty]);break;
	       case 2:
		var EQ=CP.v[0],FQ=CP.v[1];
		var dS=oP.subtract(AP);
		var GQ=dS.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(GQ.g){
		case 1:
		 var HQ=$t(function(){
		  var IQ=$f(1,function(JQ){
		   $M(uP,function(KQ){
		    switch(KQ.g){
		    case 1:
		     var LQ=$d(1,[EQ],"sat");
		     var MQ=JQ.add(goog.math.Long.fromBits(1,0));
		     $R(3,[MQ,tP,$$DataziSequence_Empty,LQ],"Deep");break;
		    case 2:
		     var NQ=KQ.v[0];
		     $M(NQ,function(OQ){
		      switch(OQ.g){
		      case 1:
		       var PQ=OQ.v[0];
		       var QQ=$d(1,[EQ],"sat");
		       var SQ=JQ.add(PQ);
		       var RQ=SQ.add(goog.math.Long.fromBits(1,0));
		       $R(3,[RQ,tP,KQ,QQ],"Deep");break;
		      case 2:
		       var TQ=OQ.v[0];
		       var UQ=$d(1,[EQ],"sat");
		       var WQ=JQ.add(TQ);
		       var VQ=WQ.add(goog.math.Long.fromBits(1,0));
		       $R(3,[VQ,tP,KQ,UQ],"Deep");break;
		      }
		     },[tP,JQ,EQ,KQ]);break;
		    case 3:
		     var XQ=KQ.v[0];
		     var YQ=$d(1,[EQ],"sat");
		     var aR=JQ.add(XQ);
		     var ZQ=aR.add(goog.math.Long.fromBits(1,0));
		     $R(3,[ZQ,tP,KQ,YQ],"Deep");break;
		    }
		   },[tP,JQ,EQ]);
		  },[uP,tP,EQ],"$j");
		  $M(tP,function(bR){
		   switch(bR.g){
		   case 1:
		    IQ.J(goog.math.Long.fromBits(1,0));break;
		   case 2:
		    IQ.J(goog.math.Long.fromBits(2,0));break;
		   case 3:
		    IQ.J(goog.math.Long.fromBits(3,0));break;
		   case 4:
		    IQ.J(goog.math.Long.fromBits(4,0));break;
		   }
		  },[uP,tP,EQ,IQ]);
		 },[uP,tP,EQ],"sat");
		 $r([HQ,FQ,$$DataziSequence_Empty]);break;
		case 2:
		 var cR=$d(2,[FQ],"sat");
		 var dR=$t(function(){
		  var eR=$f(1,function(fR){
		   $$DataziSequence$T.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,uP],function(gR){
		    switch(gR.g){
		    case 1:
		     $M(tP,function(hR){
		      switch(hR.g){
		      case 1:
		       var iR=hR.v[0];
		       $R(2,[iR],"Single");break;
		      case 2:
		       var jR=hR.v[0],kR=hR.v[1];
		       var lR=$d(1,[kR],"sat");
		       var mR=$d(1,[jR],"sat");
		       $R(3,[fR,mR,$$DataziSequence_Empty,lR],"Deep");break;
		      case 3:
		       var nR=hR.v[0],oR=hR.v[1],pR=hR.v[2];
		       var qR=$d(1,[pR],"sat");
		       var rR=$d(2,[nR,oR],"sat");
		       $R(3,[fR,rR,$$DataziSequence_Empty,qR],"Deep");break;
		      case 4:
		       var sR=hR.v[0],tR=hR.v[1],uR=hR.v[2],vR=hR.v[3];
		       var wR=$d(2,[uR,vR],"sat");
		       var xR=$d(2,[sR,tR],"sat");
		       $R(3,[fR,xR,$$DataziSequence_Empty,wR],"Deep");break;
		      }
		     },[fR]);break;
		    case 2:
		     var yR=gR.v[0],zR=gR.v[1];
		     $b(function(){
		      $M(zR,function(BR){
		       switch(BR.g){
		       case 1:
			var CR=BR.v[1],DR=BR.v[2];
			$R(2,[CR,DR],"Two");break;
		       case 2:
			var ER=BR.v[1],FR=BR.v[2],GR=BR.v[3];
			$R(3,[ER,FR,GR],"Three");break;
		       }
		      },[tP,fR,yR]);
		     },[],function(AR){
		      $R(3,[fR,tP,yR,AR],"Deep");
		     },[tP,fR,yR]);break;
		    }
		   },[tP,fR]);
		  },[uP,tP],"$j");
		  $M(uP,function(HR){
		   switch(HR.g){
		   case 1:
		    $M(tP,function(IR){
		     switch(IR.g){
		     case 1:
		      eR.J(goog.math.Long.fromBits(1,0));break;
		     case 2:
		      eR.J(goog.math.Long.fromBits(2,0));break;
		     case 3:
		      eR.J(goog.math.Long.fromBits(3,0));break;
		     case 4:
		      eR.J(goog.math.Long.fromBits(4,0));break;
		     }
		    },[uP,tP,eR]);break;
		   case 2:
		    var JR=HR.v[0];
		    $M(JR,function(KR){
		     switch(KR.g){
		     case 1:
		      var LR=KR.v[0];
		      $M(tP,function(MR){
		       switch(MR.g){
		       case 1:
			var NR=LR.add(goog.math.Long.fromBits(1,0));
			eR.J(NR);break;
		       case 2:
			var OR=LR.add(goog.math.Long.fromBits(2,0));
			eR.J(OR);break;
		       case 3:
			var PR=LR.add(goog.math.Long.fromBits(3,0));
			eR.J(PR);break;
		       case 4:
			var QR=LR.add(goog.math.Long.fromBits(4,0));
			eR.J(QR);break;
		       }
		      },[uP,tP,eR,LR]);break;
		     case 2:
		      var RR=KR.v[0];
		      $M(tP,function(SR){
		       switch(SR.g){
		       case 1:
			var TR=RR.add(goog.math.Long.fromBits(1,0));
			eR.J(TR);break;
		       case 2:
			var UR=RR.add(goog.math.Long.fromBits(2,0));
			eR.J(UR);break;
		       case 3:
			var VR=RR.add(goog.math.Long.fromBits(3,0));
			eR.J(VR);break;
		       case 4:
			var WR=RR.add(goog.math.Long.fromBits(4,0));
			eR.J(WR);break;
		       }
		      },[uP,tP,eR,RR]);break;
		     }
		    },[uP,tP,eR]);break;
		   case 3:
		    var XR=HR.v[0];
		    $M(tP,function(YR){
		     switch(YR.g){
		     case 1:
		      var ZR=XR.add(goog.math.Long.fromBits(1,0));
		      eR.J(ZR);break;
		     case 2:
		      var aS=XR.add(goog.math.Long.fromBits(2,0));
		      eR.J(aS);break;
		     case 3:
		      var bS=XR.add(goog.math.Long.fromBits(3,0));
		      eR.J(bS);break;
		     case 4:
		      var cS=XR.add(goog.math.Long.fromBits(4,0));
		      eR.J(cS);break;
		     }
		    },[uP,tP,eR,XR]);break;
		   }
		  },[uP,tP,eR]);
		 },[uP,tP],"sat");
		 $r([dR,EQ,cR]);break;
		}break;
	       case 3:
		var eS=CP.v[0],fS=CP.v[1],gS=CP.v[2];
		var aT=oP.subtract(AP);
		var hS=aT.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(hS.g){
		case 1:
		 var iS=aT.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(iS.g){
		 case 1:
		  var jS=$t(function(){
		   var kS=$f(1,function(lS){
		    $M(uP,function(mS){
		     switch(mS.g){
		     case 1:
		      var nS=$d(2,[eS,fS],"sat");
		      var oS=lS.add(goog.math.Long.fromBits(2,0));
		      $R(3,[oS,tP,$$DataziSequence_Empty,nS],"Deep");break;
		     case 2:
		      var pS=mS.v[0];
		      $M(pS,function(qS){
		       switch(qS.g){
		       case 1:
			var rS=qS.v[0];
			var sS=$d(2,[eS,fS],"sat");
			var uS=lS.add(rS);
			var tS=uS.add(goog.math.Long.fromBits(2,0));
			$R(3,[tS,tP,mS,sS],"Deep");break;
		       case 2:
			var vS=qS.v[0];
			var wS=$d(2,[eS,fS],"sat");
			var yS=lS.add(vS);
			var xS=yS.add(goog.math.Long.fromBits(2,0));
			$R(3,[xS,tP,mS,wS],"Deep");break;
		       }
		      },[tP,lS,eS,fS,mS]);break;
		     case 3:
		      var zS=mS.v[0];
		      var AS=$d(2,[eS,fS],"sat");
		      var CS=lS.add(zS);
		      var BS=CS.add(goog.math.Long.fromBits(2,0));
		      $R(3,[BS,tP,mS,AS],"Deep");break;
		     }
		    },[tP,lS,eS,fS]);
		   },[uP,tP,eS,fS],"$j");
		   $M(tP,function(DS){
		    switch(DS.g){
		    case 1:
		     kS.J(goog.math.Long.fromBits(1,0));break;
		    case 2:
		     kS.J(goog.math.Long.fromBits(2,0));break;
		    case 3:
		     kS.J(goog.math.Long.fromBits(3,0));break;
		    case 4:
		     kS.J(goog.math.Long.fromBits(4,0));break;
		    }
		   },[uP,tP,eS,fS,kS]);
		  },[uP,tP,eS,fS],"sat");
		  $r([jS,gS,$$DataziSequence_Empty]);break;
		 case 2:
		  var ES=$d(2,[gS],"sat");
		  var FS=$t(function(){
		   var GS=$f(1,function(HS){
		    $M(uP,function(IS){
		     switch(IS.g){
		     case 1:
		      var JS=$d(1,[eS],"sat");
		      var KS=HS.add(goog.math.Long.fromBits(1,0));
		      $R(3,[KS,tP,$$DataziSequence_Empty,JS],"Deep");break;
		     case 2:
		      var LS=IS.v[0];
		      $M(LS,function(MS){
		       switch(MS.g){
		       case 1:
			var NS=MS.v[0];
			var OS=$d(1,[eS],"sat");
			var QS=HS.add(NS);
			var PS=QS.add(goog.math.Long.fromBits(1,0));
			$R(3,[PS,tP,IS,OS],"Deep");break;
		       case 2:
			var RS=MS.v[0];
			var SS=$d(1,[eS],"sat");
			var US=HS.add(RS);
			var TS=US.add(goog.math.Long.fromBits(1,0));
			$R(3,[TS,tP,IS,SS],"Deep");break;
		       }
		      },[tP,eS,HS,IS]);break;
		     case 3:
		      var VS=IS.v[0];
		      var WS=$d(1,[eS],"sat");
		      var YS=HS.add(VS);
		      var XS=YS.add(goog.math.Long.fromBits(1,0));
		      $R(3,[XS,tP,IS,WS],"Deep");break;
		     }
		    },[tP,eS,HS]);
		   },[uP,tP,eS],"$j");
		   $M(tP,function(ZS){
		    switch(ZS.g){
		    case 1:
		     GS.J(goog.math.Long.fromBits(1,0));break;
		    case 2:
		     GS.J(goog.math.Long.fromBits(2,0));break;
		    case 3:
		     GS.J(goog.math.Long.fromBits(3,0));break;
		    case 4:
		     GS.J(goog.math.Long.fromBits(4,0));break;
		    }
		   },[uP,tP,eS,GS]);
		  },[uP,tP,eS],"sat");
		  $r([FS,fS,ES]);break;
		 }break;
		case 2:
		 var bT=$d(1,[gS],"sat");
		 var cT=$d(1,[fS],"sat");
		 var dT=$d(3,[goog.math.Long.fromBits(2,0),cT,$$DataziSequence_Empty,bT],"sat");
		 var eT=$t(function(){
		  var fT=$f(1,function(gT){
		   $$DataziSequence$T.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,uP],function(hT){
		    switch(hT.g){
		    case 1:
		     $M(tP,function(iT){
		      switch(iT.g){
		      case 1:
		       var jT=iT.v[0];
		       $R(2,[jT],"Single");break;
		      case 2:
		       var kT=iT.v[0],lT=iT.v[1];
		       var mT=$d(1,[lT],"sat");
		       var nT=$d(1,[kT],"sat");
		       $R(3,[gT,nT,$$DataziSequence_Empty,mT],"Deep");break;
		      case 3:
		       var oT=iT.v[0],pT=iT.v[1],qT=iT.v[2];
		       var rT=$d(1,[qT],"sat");
		       var sT=$d(2,[oT,pT],"sat");
		       $R(3,[gT,sT,$$DataziSequence_Empty,rT],"Deep");break;
		      case 4:
		       var tT=iT.v[0],uT=iT.v[1],vT=iT.v[2],wT=iT.v[3];
		       var xT=$d(2,[vT,wT],"sat");
		       var yT=$d(2,[tT,uT],"sat");
		       $R(3,[gT,yT,$$DataziSequence_Empty,xT],"Deep");break;
		      }
		     },[gT]);break;
		    case 2:
		     var zT=hT.v[0],AT=hT.v[1];
		     $b(function(){
		      $M(AT,function(CT){
		       switch(CT.g){
		       case 1:
			var DT=CT.v[1],ET=CT.v[2];
			$R(2,[DT,ET],"Two");break;
		       case 2:
			var FT=CT.v[1],GT=CT.v[2],HT=CT.v[3];
			$R(3,[FT,GT,HT],"Three");break;
		       }
		      },[tP,gT,zT]);
		     },[],function(BT){
		      $R(3,[gT,tP,zT,BT],"Deep");
		     },[tP,gT,zT]);break;
		    }
		   },[tP,gT]);
		  },[uP,tP],"$j");
		  $M(uP,function(IT){
		   switch(IT.g){
		   case 1:
		    $M(tP,function(JT){
		     switch(JT.g){
		     case 1:
		      fT.J(goog.math.Long.fromBits(1,0));break;
		     case 2:
		      fT.J(goog.math.Long.fromBits(2,0));break;
		     case 3:
		      fT.J(goog.math.Long.fromBits(3,0));break;
		     case 4:
		      fT.J(goog.math.Long.fromBits(4,0));break;
		     }
		    },[uP,tP,fT]);break;
		   case 2:
		    var KT=IT.v[0];
		    $M(KT,function(LT){
		     switch(LT.g){
		     case 1:
		      var MT=LT.v[0];
		      $M(tP,function(NT){
		       switch(NT.g){
		       case 1:
			var OT=MT.add(goog.math.Long.fromBits(1,0));
			fT.J(OT);break;
		       case 2:
			var PT=MT.add(goog.math.Long.fromBits(2,0));
			fT.J(PT);break;
		       case 3:
			var QT=MT.add(goog.math.Long.fromBits(3,0));
			fT.J(QT);break;
		       case 4:
			var RT=MT.add(goog.math.Long.fromBits(4,0));
			fT.J(RT);break;
		       }
		      },[uP,tP,fT,MT]);break;
		     case 2:
		      var ST=LT.v[0];
		      $M(tP,function(TT){
		       switch(TT.g){
		       case 1:
			var UT=ST.add(goog.math.Long.fromBits(1,0));
			fT.J(UT);break;
		       case 2:
			var VT=ST.add(goog.math.Long.fromBits(2,0));
			fT.J(VT);break;
		       case 3:
			var WT=ST.add(goog.math.Long.fromBits(3,0));
			fT.J(WT);break;
		       case 4:
			var XT=ST.add(goog.math.Long.fromBits(4,0));
			fT.J(XT);break;
		       }
		      },[uP,tP,fT,ST]);break;
		     }
		    },[uP,tP,fT]);break;
		   case 3:
		    var YT=IT.v[0];
		    $M(tP,function(ZT){
		     switch(ZT.g){
		     case 1:
		      var aU=YT.add(goog.math.Long.fromBits(1,0));
		      fT.J(aU);break;
		     case 2:
		      var bU=YT.add(goog.math.Long.fromBits(2,0));
		      fT.J(bU);break;
		     case 3:
		      var cU=YT.add(goog.math.Long.fromBits(3,0));
		      fT.J(cU);break;
		     case 4:
		      var dU=YT.add(goog.math.Long.fromBits(4,0));
		      fT.J(dU);break;
		     }
		    },[uP,tP,fT,YT]);break;
		   }
		  },[uP,tP,fT]);
		 },[uP,tP],"sat");
		 $r([eT,eS,dT]);break;
		}break;
	       case 4:
		var eU=CP.v[0],fU=CP.v[1],gU=CP.v[2],hU=CP.v[3];
		var cV=oP.subtract(AP);
		var iU=cV.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(iU.g){
		case 1:
		 var jU=cV.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(jU.g){
		 case 1:
		  var kU=cV.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(kU.g){
		  case 1:
		   var lU=$t(function(){
		    var mU=$f(1,function(nU){
		     $M(uP,function(oU){
		      switch(oU.g){
		      case 1:
		       var pU=$d(3,[eU,fU,gU],"sat");
		       var qU=nU.add(goog.math.Long.fromBits(3,0));
		       $R(3,[qU,tP,$$DataziSequence_Empty,pU],"Deep");break;
		      case 2:
		       var rU=oU.v[0];
		       $M(rU,function(sU){
			switch(sU.g){
			case 1:
			 var tU=sU.v[0];
			 var uU=$d(3,[eU,fU,gU],"sat");
			 var wU=nU.add(tU);
			 var vU=wU.add(goog.math.Long.fromBits(3,0));
			 $R(3,[vU,tP,oU,uU],"Deep");break;
			case 2:
			 var xU=sU.v[0];
			 var yU=$d(3,[eU,fU,gU],"sat");
			 var AU=nU.add(xU);
			 var zU=AU.add(goog.math.Long.fromBits(3,0));
			 $R(3,[zU,tP,oU,yU],"Deep");break;
			}
		       },[tP,nU,eU,fU,gU,oU]);break;
		      case 3:
		       var BU=oU.v[0];
		       var CU=$d(3,[eU,fU,gU],"sat");
		       var EU=nU.add(BU);
		       var DU=EU.add(goog.math.Long.fromBits(3,0));
		       $R(3,[DU,tP,oU,CU],"Deep");break;
		      }
		     },[tP,nU,eU,fU,gU]);
		    },[uP,tP,eU,fU,gU],"$j");
		    $M(tP,function(FU){
		     switch(FU.g){
		     case 1:
		      mU.J(goog.math.Long.fromBits(1,0));break;
		     case 2:
		      mU.J(goog.math.Long.fromBits(2,0));break;
		     case 3:
		      mU.J(goog.math.Long.fromBits(3,0));break;
		     case 4:
		      mU.J(goog.math.Long.fromBits(4,0));break;
		     }
		    },[uP,tP,eU,fU,gU,mU]);
		   },[uP,tP,eU,fU,gU],"sat");
		   $r([lU,hU,$$DataziSequence_Empty]);break;
		  case 2:
		   var GU=$d(2,[hU],"sat");
		   var HU=$t(function(){
		    var IU=$f(1,function(JU){
		     $M(uP,function(KU){
		      switch(KU.g){
		      case 1:
		       var LU=$d(2,[eU,fU],"sat");
		       var MU=JU.add(goog.math.Long.fromBits(2,0));
		       $R(3,[MU,tP,$$DataziSequence_Empty,LU],"Deep");break;
		      case 2:
		       var NU=KU.v[0];
		       $M(NU,function(OU){
			switch(OU.g){
			case 1:
			 var PU=OU.v[0];
			 var QU=$d(2,[eU,fU],"sat");
			 var SU=JU.add(PU);
			 var RU=SU.add(goog.math.Long.fromBits(2,0));
			 $R(3,[RU,tP,KU,QU],"Deep");break;
			case 2:
			 var TU=OU.v[0];
			 var UU=$d(2,[eU,fU],"sat");
			 var WU=JU.add(TU);
			 var VU=WU.add(goog.math.Long.fromBits(2,0));
			 $R(3,[VU,tP,KU,UU],"Deep");break;
			}
		       },[tP,eU,fU,JU,KU]);break;
		      case 3:
		       var XU=KU.v[0];
		       var YU=$d(2,[eU,fU],"sat");
		       var aV=JU.add(XU);
		       var ZU=aV.add(goog.math.Long.fromBits(2,0));
		       $R(3,[ZU,tP,KU,YU],"Deep");break;
		      }
		     },[tP,eU,fU,JU]);
		    },[uP,tP,eU,fU],"$j");
		    $M(tP,function(bV){
		     switch(bV.g){
		     case 1:
		      IU.J(goog.math.Long.fromBits(1,0));break;
		     case 2:
		      IU.J(goog.math.Long.fromBits(2,0));break;
		     case 3:
		      IU.J(goog.math.Long.fromBits(3,0));break;
		     case 4:
		      IU.J(goog.math.Long.fromBits(4,0));break;
		     }
		    },[uP,tP,eU,fU,IU]);
		   },[uP,tP,eU,fU],"sat");
		   $r([HU,gU,GU]);break;
		  }break;
		 case 2:
		  var dV=$d(1,[hU],"sat");
		  var eV=$d(1,[gU],"sat");
		  var fV=$d(3,[goog.math.Long.fromBits(2,0),eV,$$DataziSequence_Empty,dV],"sat");
		  var gV=$t(function(){
		   var hV=$f(1,function(iV){
		    $M(uP,function(jV){
		     switch(jV.g){
		     case 1:
		      var kV=$d(1,[eU],"sat");
		      var lV=iV.add(goog.math.Long.fromBits(1,0));
		      $R(3,[lV,tP,$$DataziSequence_Empty,kV],"Deep");break;
		     case 2:
		      var mV=jV.v[0];
		      $M(mV,function(nV){
		       switch(nV.g){
		       case 1:
			var oV=nV.v[0];
			var pV=$d(1,[eU],"sat");
			var rV=iV.add(oV);
			var qV=rV.add(goog.math.Long.fromBits(1,0));
			$R(3,[qV,tP,jV,pV],"Deep");break;
		       case 2:
			var sV=nV.v[0];
			var tV=$d(1,[eU],"sat");
			var vV=iV.add(sV);
			var uV=vV.add(goog.math.Long.fromBits(1,0));
			$R(3,[uV,tP,jV,tV],"Deep");break;
		       }
		      },[tP,eU,iV,jV]);break;
		     case 3:
		      var wV=jV.v[0];
		      var xV=$d(1,[eU],"sat");
		      var zV=iV.add(wV);
		      var yV=zV.add(goog.math.Long.fromBits(1,0));
		      $R(3,[yV,tP,jV,xV],"Deep");break;
		     }
		    },[tP,eU,iV]);
		   },[uP,tP,eU],"$j");
		   $M(tP,function(AV){
		    switch(AV.g){
		    case 1:
		     hV.J(goog.math.Long.fromBits(1,0));break;
		    case 2:
		     hV.J(goog.math.Long.fromBits(2,0));break;
		    case 3:
		     hV.J(goog.math.Long.fromBits(3,0));break;
		    case 4:
		     hV.J(goog.math.Long.fromBits(4,0));break;
		    }
		   },[uP,tP,eU,hV]);
		  },[uP,tP,eU],"sat");
		  $r([gV,fU,fV]);break;
		 }break;
		case 2:
		 var BV=$d(1,[hU],"sat");
		 var CV=$d(2,[fU,gU],"sat");
		 var DV=$d(3,[goog.math.Long.fromBits(3,0),CV,$$DataziSequence_Empty,BV],"sat");
		 var EV=$t(function(){
		  var FV=$f(1,function(GV){
		   $$DataziSequence$T.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,uP],function(HV){
		    switch(HV.g){
		    case 1:
		     $M(tP,function(IV){
		      switch(IV.g){
		      case 1:
		       var JV=IV.v[0];
		       $R(2,[JV],"Single");break;
		      case 2:
		       var KV=IV.v[0],LV=IV.v[1];
		       var MV=$d(1,[LV],"sat");
		       var NV=$d(1,[KV],"sat");
		       $R(3,[GV,NV,$$DataziSequence_Empty,MV],"Deep");break;
		      case 3:
		       var OV=IV.v[0],PV=IV.v[1],QV=IV.v[2];
		       var RV=$d(1,[QV],"sat");
		       var SV=$d(2,[OV,PV],"sat");
		       $R(3,[GV,SV,$$DataziSequence_Empty,RV],"Deep");break;
		      case 4:
		       var TV=IV.v[0],UV=IV.v[1],VV=IV.v[2],WV=IV.v[3];
		       var XV=$d(2,[VV,WV],"sat");
		       var YV=$d(2,[TV,UV],"sat");
		       $R(3,[GV,YV,$$DataziSequence_Empty,XV],"Deep");break;
		      }
		     },[GV]);break;
		    case 2:
		     var ZV=HV.v[0],aW=HV.v[1];
		     $b(function(){
		      $M(aW,function(cW){
		       switch(cW.g){
		       case 1:
			var dW=cW.v[1],eW=cW.v[2];
			$R(2,[dW,eW],"Two");break;
		       case 2:
			var fW=cW.v[1],gW=cW.v[2],hW=cW.v[3];
			$R(3,[fW,gW,hW],"Three");break;
		       }
		      },[tP,GV,ZV]);
		     },[],function(bW){
		      $R(3,[GV,tP,ZV,bW],"Deep");
		     },[tP,GV,ZV]);break;
		    }
		   },[tP,GV]);
		  },[uP,tP],"$j");
		  $M(uP,function(iW){
		   switch(iW.g){
		   case 1:
		    $M(tP,function(jW){
		     switch(jW.g){
		     case 1:
		      FV.J(goog.math.Long.fromBits(1,0));break;
		     case 2:
		      FV.J(goog.math.Long.fromBits(2,0));break;
		     case 3:
		      FV.J(goog.math.Long.fromBits(3,0));break;
		     case 4:
		      FV.J(goog.math.Long.fromBits(4,0));break;
		     }
		    },[uP,tP,FV]);break;
		   case 2:
		    var kW=iW.v[0];
		    $M(kW,function(lW){
		     switch(lW.g){
		     case 1:
		      var mW=lW.v[0];
		      $M(tP,function(nW){
		       switch(nW.g){
		       case 1:
			var oW=mW.add(goog.math.Long.fromBits(1,0));
			FV.J(oW);break;
		       case 2:
			var pW=mW.add(goog.math.Long.fromBits(2,0));
			FV.J(pW);break;
		       case 3:
			var qW=mW.add(goog.math.Long.fromBits(3,0));
			FV.J(qW);break;
		       case 4:
			var rW=mW.add(goog.math.Long.fromBits(4,0));
			FV.J(rW);break;
		       }
		      },[uP,tP,FV,mW]);break;
		     case 2:
		      var sW=lW.v[0];
		      $M(tP,function(tW){
		       switch(tW.g){
		       case 1:
			var uW=sW.add(goog.math.Long.fromBits(1,0));
			FV.J(uW);break;
		       case 2:
			var vW=sW.add(goog.math.Long.fromBits(2,0));
			FV.J(vW);break;
		       case 3:
			var wW=sW.add(goog.math.Long.fromBits(3,0));
			FV.J(wW);break;
		       case 4:
			var xW=sW.add(goog.math.Long.fromBits(4,0));
			FV.J(xW);break;
		       }
		      },[uP,tP,FV,sW]);break;
		     }
		    },[uP,tP,FV]);break;
		   case 3:
		    var yW=iW.v[0];
		    $M(tP,function(zW){
		     switch(zW.g){
		     case 1:
		      var AW=yW.add(goog.math.Long.fromBits(1,0));
		      FV.J(AW);break;
		     case 2:
		      var BW=yW.add(goog.math.Long.fromBits(2,0));
		      FV.J(BW);break;
		     case 3:
		      var CW=yW.add(goog.math.Long.fromBits(3,0));
		      FV.J(CW);break;
		     case 4:
		      var DW=yW.add(goog.math.Long.fromBits(4,0));
		      FV.J(DW);break;
		     }
		    },[uP,tP,FV,yW]);break;
		   }
		  },[uP,tP,FV]);
		 },[uP,tP],"sat");
		 $r([EV,eU,DV]);break;
		}break;
	       }
	      },[oP,AP,uP,tP]);break;
	     case 2:
	      var t13=oP.subtract(xP);
	      $$DataziSequence$B1.C([t13,uP],function(EW){
	       var FW=EW[0],GW=EW[1],HW=EW[2];
	       var IW=$f(1,function(JW){
		$M(GW,function(KW){
		 switch(KW.g){
		 case 1:
		  var LW=KW.v[1],MW=KW.v[2];
		  var NW=JW.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(NW.g){
		  case 1:
		   var OW=$t(function(){
		    var PW=$f(1,function(QW){
		     $$DataziSequence$R.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,HW],function(RW){
		      switch(RW.g){
		      case 1:
		       $M(vP,function(SW){
			switch(SW.g){
			case 1:
			 var TW=SW.v[0];
			 $R(2,[TW],"Single");break;
			case 2:
			 var UW=SW.v[0],VW=SW.v[1];
			 var WW=$d(1,[VW],"sat");
			 var XW=$d(1,[UW],"sat");
			 $R(3,[QW,XW,$$DataziSequence_Empty,WW],"Deep");break;
			case 3:
			 var YW=SW.v[0],ZW=SW.v[1],aX=SW.v[2];
			 var bX=$d(1,[aX],"sat");
			 var cX=$d(2,[YW,ZW],"sat");
			 $R(3,[QW,cX,$$DataziSequence_Empty,bX],"Deep");break;
			case 4:
			 var dX=SW.v[0],eX=SW.v[1],fX=SW.v[2],gX=SW.v[3];
			 var hX=$d(2,[fX,gX],"sat");
			 var iX=$d(2,[dX,eX],"sat");
			 $R(3,[QW,iX,$$DataziSequence_Empty,hX],"Deep");break;
			}
		       },[QW]);break;
		      case 2:
		       var jX=RW.v[0],kX=RW.v[1];
		       $b(function(){
			$M(jX,function(mX){
			 switch(mX.g){
			 case 1:
			  var nX=mX.v[1],oX=mX.v[2];
			  $R(2,[nX,oX],"Two");break;
			 case 2:
			  var pX=mX.v[1],qX=mX.v[2],rX=mX.v[3];
			  $R(3,[pX,qX,rX],"Three");break;
			 }
			},[vP,QW,kX]);
		       },[],function(lX){
			$R(3,[QW,lX,kX,vP],"Deep");
		       },[vP,QW,kX]);break;
		      }
		     },[vP,QW]);
		    },[vP,HW],"$j1");
		    $M(HW,function(sX){
		     switch(sX.g){
		     case 1:
		      $M(vP,function(tX){
		       switch(tX.g){
		       case 1:
			PW.J(goog.math.Long.fromBits(1,0));break;
		       case 2:
			PW.J(goog.math.Long.fromBits(2,0));break;
		       case 3:
			PW.J(goog.math.Long.fromBits(3,0));break;
		       case 4:
			PW.J(goog.math.Long.fromBits(4,0));break;
		       }
		      },[vP,HW,PW]);break;
		     case 2:
		      var uX=sX.v[0];
		      $M(uX,function(vX){
		       switch(vX.g){
		       case 1:
			var wX=vX.v[0];
			$M(vP,function(xX){
			 switch(xX.g){
			 case 1:
			  var yX=wX.add(goog.math.Long.fromBits(1,0));
			  PW.J(yX);break;
			 case 2:
			  var zX=wX.add(goog.math.Long.fromBits(2,0));
			  PW.J(zX);break;
			 case 3:
			  var AX=wX.add(goog.math.Long.fromBits(3,0));
			  PW.J(AX);break;
			 case 4:
			  var BX=wX.add(goog.math.Long.fromBits(4,0));
			  PW.J(BX);break;
			 }
			},[vP,HW,PW,wX]);break;
		       case 2:
			var CX=vX.v[0];
			$M(vP,function(DX){
			 switch(DX.g){
			 case 1:
			  var EX=CX.add(goog.math.Long.fromBits(1,0));
			  PW.J(EX);break;
			 case 2:
			  var FX=CX.add(goog.math.Long.fromBits(2,0));
			  PW.J(FX);break;
			 case 3:
			  var GX=CX.add(goog.math.Long.fromBits(3,0));
			  PW.J(GX);break;
			 case 4:
			  var HX=CX.add(goog.math.Long.fromBits(4,0));
			  PW.J(HX);break;
			 }
			},[vP,HW,PW,CX]);break;
		       }
		      },[vP,HW,PW]);break;
		     case 3:
		      var IX=sX.v[0];
		      $M(vP,function(JX){
		       switch(JX.g){
		       case 1:
			var KX=IX.add(goog.math.Long.fromBits(1,0));
			PW.J(KX);break;
		       case 2:
			var LX=IX.add(goog.math.Long.fromBits(2,0));
			PW.J(LX);break;
		       case 3:
			var MX=IX.add(goog.math.Long.fromBits(3,0));
			PW.J(MX);break;
		       case 4:
			var NX=IX.add(goog.math.Long.fromBits(4,0));
			PW.J(NX);break;
		       }
		      },[vP,HW,PW,IX]);break;
		     }
		    },[vP,HW,PW]);
		   },[vP,HW],"sat");
		   var OX=$t(function(){
		    var PX=$f(1,function(QX){
		     $M(FW,function(RX){
		      switch(RX.g){
		      case 1:
		       var SX=$d(1,[LW],"sat");
		       var TX=QX.add(goog.math.Long.fromBits(1,0));
		       $R(3,[TX,tP,$$DataziSequence_Empty,SX],"Deep");break;
		      case 2:
		       var UX=RX.v[0];
		       $M(UX,function(VX){
			switch(VX.g){
			case 1:
			 var WX=VX.v[0];
			 var XX=$d(1,[LW],"sat");
			 var ZX=QX.add(WX);
			 var YX=ZX.add(goog.math.Long.fromBits(1,0));
			 $R(3,[YX,tP,RX,XX],"Deep");break;
			case 2:
			 var aY=VX.v[0];
			 var bY=$d(1,[LW],"sat");
			 var dY=QX.add(aY);
			 var cY=dY.add(goog.math.Long.fromBits(1,0));
			 $R(3,[cY,tP,RX,bY],"Deep");break;
			}
		       },[tP,QX,LW,RX]);break;
		      case 3:
		       var eY=RX.v[0];
		       var fY=$d(1,[LW],"sat");
		       var hY=QX.add(eY);
		       var gY=hY.add(goog.math.Long.fromBits(1,0));
		       $R(3,[gY,tP,RX,fY],"Deep");break;
		      }
		     },[tP,QX,LW]);
		    },[tP,FW,LW],"$j1");
		    $M(tP,function(iY){
		     switch(iY.g){
		     case 1:
		      PX.J(goog.math.Long.fromBits(1,0));break;
		     case 2:
		      PX.J(goog.math.Long.fromBits(2,0));break;
		     case 3:
		      PX.J(goog.math.Long.fromBits(3,0));break;
		     case 4:
		      PX.J(goog.math.Long.fromBits(4,0));break;
		     }
		    },[tP,FW,LW,PX]);
		   },[tP,FW,LW],"sat");
		   $r([OX,MW,OW]);break;
		  case 2:
		   var jY=$t(function(){
		    var kY=$f(1,function(lY){
		     $M(vP,function(mY){
		      switch(mY.g){
		      case 1:
		       var nY=$d(1,[MW],"sat");
		       var pY=goog.math.Long.fromBits(1,0).add(lY);
		       var oY=pY.add(goog.math.Long.fromBits(1,0));
		       $R(3,[oY,nY,HW,mY],"Deep");break;
		      case 2:
		       var qY=$d(1,[MW],"sat");
		       var sY=goog.math.Long.fromBits(1,0).add(lY);
		       var rY=sY.add(goog.math.Long.fromBits(2,0));
		       $R(3,[rY,qY,HW,mY],"Deep");break;
		      case 3:
		       var tY=$d(1,[MW],"sat");
		       var vY=goog.math.Long.fromBits(1,0).add(lY);
		       var uY=vY.add(goog.math.Long.fromBits(3,0));
		       $R(3,[uY,tY,HW,mY],"Deep");break;
		      case 4:
		       var wY=$d(1,[MW],"sat");
		       var yY=goog.math.Long.fromBits(1,0).add(lY);
		       var xY=yY.add(goog.math.Long.fromBits(4,0));
		       $R(3,[xY,wY,HW,mY],"Deep");break;
		      }
		     },[MW,HW,lY]);
		    },[vP,MW,HW],"$j1");
		    $M(HW,function(zY){
		     switch(zY.g){
		     case 1:
		      kY.J(goog.math.Long.fromBits(0,0));break;
		     case 2:
		      var AY=zY.v[0];
		      $M(AY,function(BY){
		       switch(BY.g){
		       case 1:
			var CY=BY.v[0];
			kY.J(CY);break;
		       case 2:
			var DY=BY.v[0];
			kY.J(DY);break;
		       }
		      },[vP,MW,HW,kY]);break;
		     case 3:
		      var EY=zY.v[0];
		      kY.J(EY);break;
		     }
		    },[vP,MW,HW,kY]);
		   },[vP,MW,HW],"sat");
		   var FY=$t(function(){
		    var GY=$f(1,function(HY){
		     $$DataziSequence$T.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,FW],function(IY){
		      switch(IY.g){
		      case 1:
		       $M(tP,function(JY){
			switch(JY.g){
			case 1:
			 var KY=JY.v[0];
			 $R(2,[KY],"Single");break;
			case 2:
			 var LY=JY.v[0],MY=JY.v[1];
			 var NY=$d(1,[MY],"sat");
			 var OY=$d(1,[LY],"sat");
			 $R(3,[HY,OY,$$DataziSequence_Empty,NY],"Deep");break;
			case 3:
			 var PY=JY.v[0],QY=JY.v[1],RY=JY.v[2];
			 var SY=$d(1,[RY],"sat");
			 var TY=$d(2,[PY,QY],"sat");
			 $R(3,[HY,TY,$$DataziSequence_Empty,SY],"Deep");break;
			case 4:
			 var UY=JY.v[0],VY=JY.v[1],WY=JY.v[2],XY=JY.v[3];
			 var YY=$d(2,[WY,XY],"sat");
			 var ZY=$d(2,[UY,VY],"sat");
			 $R(3,[HY,ZY,$$DataziSequence_Empty,YY],"Deep");break;
			}
		       },[HY]);break;
		      case 2:
		       var aZ=IY.v[0],bZ=IY.v[1];
		       $b(function(){
			$M(bZ,function(dZ){
			 switch(dZ.g){
			 case 1:
			  var eZ=dZ.v[1],fZ=dZ.v[2];
			  $R(2,[eZ,fZ],"Two");break;
			 case 2:
			  var gZ=dZ.v[1],hZ=dZ.v[2],iZ=dZ.v[3];
			  $R(3,[gZ,hZ,iZ],"Three");break;
			 }
			},[tP,HY,aZ]);
		       },[],function(cZ){
			$R(3,[HY,tP,aZ,cZ],"Deep");
		       },[tP,HY,aZ]);break;
		      }
		     },[tP,HY]);
		    },[tP,FW],"$j1");
		    $M(FW,function(jZ){
		     switch(jZ.g){
		     case 1:
		      $M(tP,function(kZ){
		       switch(kZ.g){
		       case 1:
			GY.J(goog.math.Long.fromBits(1,0));break;
		       case 2:
			GY.J(goog.math.Long.fromBits(2,0));break;
		       case 3:
			GY.J(goog.math.Long.fromBits(3,0));break;
		       case 4:
			GY.J(goog.math.Long.fromBits(4,0));break;
		       }
		      },[tP,FW,GY]);break;
		     case 2:
		      var lZ=jZ.v[0];
		      $M(lZ,function(mZ){
		       switch(mZ.g){
		       case 1:
			var nZ=mZ.v[0];
			$M(tP,function(oZ){
			 switch(oZ.g){
			 case 1:
			  var pZ=nZ.add(goog.math.Long.fromBits(1,0));
			  GY.J(pZ);break;
			 case 2:
			  var qZ=nZ.add(goog.math.Long.fromBits(2,0));
			  GY.J(qZ);break;
			 case 3:
			  var rZ=nZ.add(goog.math.Long.fromBits(3,0));
			  GY.J(rZ);break;
			 case 4:
			  var sZ=nZ.add(goog.math.Long.fromBits(4,0));
			  GY.J(sZ);break;
			 }
			},[tP,FW,GY,nZ]);break;
		       case 2:
			var tZ=mZ.v[0];
			$M(tP,function(uZ){
			 switch(uZ.g){
			 case 1:
			  var vZ=tZ.add(goog.math.Long.fromBits(1,0));
			  GY.J(vZ);break;
			 case 2:
			  var wZ=tZ.add(goog.math.Long.fromBits(2,0));
			  GY.J(wZ);break;
			 case 3:
			  var xZ=tZ.add(goog.math.Long.fromBits(3,0));
			  GY.J(xZ);break;
			 case 4:
			  var yZ=tZ.add(goog.math.Long.fromBits(4,0));
			  GY.J(yZ);break;
			 }
			},[tP,FW,GY,tZ]);break;
		       }
		      },[tP,FW,GY]);break;
		     case 3:
		      var zZ=jZ.v[0];
		      $M(tP,function(AZ){
		       switch(AZ.g){
		       case 1:
			var BZ=zZ.add(goog.math.Long.fromBits(1,0));
			GY.J(BZ);break;
		       case 2:
			var CZ=zZ.add(goog.math.Long.fromBits(2,0));
			GY.J(CZ);break;
		       case 3:
			var DZ=zZ.add(goog.math.Long.fromBits(3,0));
			GY.J(DZ);break;
		       case 4:
			var EZ=zZ.add(goog.math.Long.fromBits(4,0));
			GY.J(EZ);break;
		       }
		      },[tP,FW,GY,zZ]);break;
		     }
		    },[tP,FW,GY]);
		   },[tP,FW],"sat");
		   $r([FY,LW,jY]);break;
		  }break;
		 case 2:
		  var FZ=KW.v[1],GZ=KW.v[2],HZ=KW.v[3];
		  var IZ=JW.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(IZ.g){
		  case 1:
		   var JZ=JW.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(JZ.g){
		   case 1:
		    var KZ=$t(function(){
		     var LZ=$f(1,function(MZ){
		      $$DataziSequence$R.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,HW],function(NZ){
		       switch(NZ.g){
		       case 1:
			$M(vP,function(OZ){
			 switch(OZ.g){
			 case 1:
			  var PZ=OZ.v[0];
			  $R(2,[PZ],"Single");break;
			 case 2:
			  var QZ=OZ.v[0],RZ=OZ.v[1];
			  var SZ=$d(1,[RZ],"sat");
			  var TZ=$d(1,[QZ],"sat");
			  $R(3,[MZ,TZ,$$DataziSequence_Empty,SZ],"Deep");break;
			 case 3:
			  var UZ=OZ.v[0],VZ=OZ.v[1],WZ=OZ.v[2];
			  var XZ=$d(1,[WZ],"sat");
			  var YZ=$d(2,[UZ,VZ],"sat");
			  $R(3,[MZ,YZ,$$DataziSequence_Empty,XZ],"Deep");break;
			 case 4:
			  var ZZ=OZ.v[0],a10=OZ.v[1],b10=OZ.v[2],c10=OZ.v[3];
			  var d10=$d(2,[b10,c10],"sat");
			  var e10=$d(2,[ZZ,a10],"sat");
			  $R(3,[MZ,e10,$$DataziSequence_Empty,d10],"Deep");break;
			 }
			},[MZ]);break;
		       case 2:
			var f10=NZ.v[0],g10=NZ.v[1];
			$b(function(){
			 $M(f10,function(i10){
			  switch(i10.g){
			  case 1:
			   var j10=i10.v[1],k10=i10.v[2];
			   $R(2,[j10,k10],"Two");break;
			  case 2:
			   var l10=i10.v[1],m10=i10.v[2],n10=i10.v[3];
			   $R(3,[l10,m10,n10],"Three");break;
			  }
			 },[vP,MZ,g10]);
			},[],function(h10){
			 $R(3,[MZ,h10,g10,vP],"Deep");
			},[vP,MZ,g10]);break;
		       }
		      },[vP,MZ]);
		     },[vP,HW],"$j1");
		     $M(HW,function(o10){
		      switch(o10.g){
		      case 1:
		       $M(vP,function(p10){
			switch(p10.g){
			case 1:
			 LZ.J(goog.math.Long.fromBits(1,0));break;
			case 2:
			 LZ.J(goog.math.Long.fromBits(2,0));break;
			case 3:
			 LZ.J(goog.math.Long.fromBits(3,0));break;
			case 4:
			 LZ.J(goog.math.Long.fromBits(4,0));break;
			}
		       },[vP,HW,LZ]);break;
		      case 2:
		       var q10=o10.v[0];
		       $M(q10,function(r10){
			switch(r10.g){
			case 1:
			 var s10=r10.v[0];
			 $M(vP,function(t10){
			  switch(t10.g){
			  case 1:
			   var u10=s10.add(goog.math.Long.fromBits(1,0));
			   LZ.J(u10);break;
			  case 2:
			   var v10=s10.add(goog.math.Long.fromBits(2,0));
			   LZ.J(v10);break;
			  case 3:
			   var w10=s10.add(goog.math.Long.fromBits(3,0));
			   LZ.J(w10);break;
			  case 4:
			   var x10=s10.add(goog.math.Long.fromBits(4,0));
			   LZ.J(x10);break;
			  }
			 },[vP,HW,LZ,s10]);break;
			case 2:
			 var y10=r10.v[0];
			 $M(vP,function(z10){
			  switch(z10.g){
			  case 1:
			   var A10=y10.add(goog.math.Long.fromBits(1,0));
			   LZ.J(A10);break;
			  case 2:
			   var B10=y10.add(goog.math.Long.fromBits(2,0));
			   LZ.J(B10);break;
			  case 3:
			   var C10=y10.add(goog.math.Long.fromBits(3,0));
			   LZ.J(C10);break;
			  case 4:
			   var D10=y10.add(goog.math.Long.fromBits(4,0));
			   LZ.J(D10);break;
			  }
			 },[vP,HW,LZ,y10]);break;
			}
		       },[vP,HW,LZ]);break;
		      case 3:
		       var E10=o10.v[0];
		       $M(vP,function(F10){
			switch(F10.g){
			case 1:
			 var G10=E10.add(goog.math.Long.fromBits(1,0));
			 LZ.J(G10);break;
			case 2:
			 var H10=E10.add(goog.math.Long.fromBits(2,0));
			 LZ.J(H10);break;
			case 3:
			 var I10=E10.add(goog.math.Long.fromBits(3,0));
			 LZ.J(I10);break;
			case 4:
			 var J10=E10.add(goog.math.Long.fromBits(4,0));
			 LZ.J(J10);break;
			}
		       },[vP,HW,LZ,E10]);break;
		      }
		     },[vP,HW,LZ]);
		    },[vP,HW],"sat");
		    var K10=$t(function(){
		     var L10=$f(1,function(M10){
		      $M(FW,function(N10){
		       switch(N10.g){
		       case 1:
			var O10=$d(2,[FZ,GZ],"sat");
			var P10=M10.add(goog.math.Long.fromBits(2,0));
			$R(3,[P10,tP,$$DataziSequence_Empty,O10],"Deep");break;
		       case 2:
			var Q10=N10.v[0];
			$M(Q10,function(R10){
			 switch(R10.g){
			 case 1:
			  var S10=R10.v[0];
			  var T10=$d(2,[FZ,GZ],"sat");
			  var V10=M10.add(S10);
			  var U10=V10.add(goog.math.Long.fromBits(2,0));
			  $R(3,[U10,tP,N10,T10],"Deep");break;
			 case 2:
			  var W10=R10.v[0];
			  var X10=$d(2,[FZ,GZ],"sat");
			  var Z10=M10.add(W10);
			  var Y10=Z10.add(goog.math.Long.fromBits(2,0));
			  $R(3,[Y10,tP,N10,X10],"Deep");break;
			 }
			},[tP,M10,FZ,GZ,N10]);break;
		       case 3:
			var a11=N10.v[0];
			var b11=$d(2,[FZ,GZ],"sat");
			var d11=M10.add(a11);
			var c11=d11.add(goog.math.Long.fromBits(2,0));
			$R(3,[c11,tP,N10,b11],"Deep");break;
		       }
		      },[tP,M10,FZ,GZ]);
		     },[tP,FW,FZ,GZ],"$j1");
		     $M(tP,function(e11){
		      switch(e11.g){
		      case 1:
		       L10.J(goog.math.Long.fromBits(1,0));break;
		      case 2:
		       L10.J(goog.math.Long.fromBits(2,0));break;
		      case 3:
		       L10.J(goog.math.Long.fromBits(3,0));break;
		      case 4:
		       L10.J(goog.math.Long.fromBits(4,0));break;
		      }
		     },[tP,FW,FZ,GZ,L10]);
		    },[tP,FW,FZ,GZ],"sat");
		    $r([K10,HZ,KZ]);break;
		   case 2:
		    var f11=$t(function(){
		     var g11=$f(1,function(h11){
		      $M(vP,function(i11){
		       switch(i11.g){
		       case 1:
			var j11=$d(1,[HZ],"sat");
			var l11=goog.math.Long.fromBits(1,0).add(h11);
			var k11=l11.add(goog.math.Long.fromBits(1,0));
			$R(3,[k11,j11,HW,i11],"Deep");break;
		       case 2:
			var m11=$d(1,[HZ],"sat");
			var o11=goog.math.Long.fromBits(1,0).add(h11);
			var n11=o11.add(goog.math.Long.fromBits(2,0));
			$R(3,[n11,m11,HW,i11],"Deep");break;
		       case 3:
			var p11=$d(1,[HZ],"sat");
			var r11=goog.math.Long.fromBits(1,0).add(h11);
			var q11=r11.add(goog.math.Long.fromBits(3,0));
			$R(3,[q11,p11,HW,i11],"Deep");break;
		       case 4:
			var s11=$d(1,[HZ],"sat");
			var u11=goog.math.Long.fromBits(1,0).add(h11);
			var t11=u11.add(goog.math.Long.fromBits(4,0));
			$R(3,[t11,s11,HW,i11],"Deep");break;
		       }
		      },[HW,HZ,h11]);
		     },[vP,HW,HZ],"$j1");
		     $M(HW,function(v11){
		      switch(v11.g){
		      case 1:
		       g11.J(goog.math.Long.fromBits(0,0));break;
		      case 2:
		       var w11=v11.v[0];
		       $M(w11,function(x11){
			switch(x11.g){
			case 1:
			 var y11=x11.v[0];
			 g11.J(y11);break;
			case 2:
			 var z11=x11.v[0];
			 g11.J(z11);break;
			}
		       },[vP,HW,HZ,g11]);break;
		      case 3:
		       var A11=v11.v[0];
		       g11.J(A11);break;
		      }
		     },[vP,HW,HZ,g11]);
		    },[vP,HW,HZ],"sat");
		    var B11=$t(function(){
		     var C11=$f(1,function(D11){
		      $M(FW,function(E11){
		       switch(E11.g){
		       case 1:
			var F11=$d(1,[FZ],"sat");
			var G11=D11.add(goog.math.Long.fromBits(1,0));
			$R(3,[G11,tP,$$DataziSequence_Empty,F11],"Deep");break;
		       case 2:
			var H11=E11.v[0];
			$M(H11,function(I11){
			 switch(I11.g){
			 case 1:
			  var J11=I11.v[0];
			  var K11=$d(1,[FZ],"sat");
			  var M11=D11.add(J11);
			  var L11=M11.add(goog.math.Long.fromBits(1,0));
			  $R(3,[L11,tP,E11,K11],"Deep");break;
			 case 2:
			  var N11=I11.v[0];
			  var O11=$d(1,[FZ],"sat");
			  var Q11=D11.add(N11);
			  var P11=Q11.add(goog.math.Long.fromBits(1,0));
			  $R(3,[P11,tP,E11,O11],"Deep");break;
			 }
			},[tP,FZ,D11,E11]);break;
		       case 3:
			var R11=E11.v[0];
			var S11=$d(1,[FZ],"sat");
			var U11=D11.add(R11);
			var T11=U11.add(goog.math.Long.fromBits(1,0));
			$R(3,[T11,tP,E11,S11],"Deep");break;
		       }
		      },[tP,FZ,D11]);
		     },[tP,FW,FZ],"$j1");
		     $M(tP,function(V11){
		      switch(V11.g){
		      case 1:
		       C11.J(goog.math.Long.fromBits(1,0));break;
		      case 2:
		       C11.J(goog.math.Long.fromBits(2,0));break;
		      case 3:
		       C11.J(goog.math.Long.fromBits(3,0));break;
		      case 4:
		       C11.J(goog.math.Long.fromBits(4,0));break;
		      }
		     },[tP,FW,FZ,C11]);
		    },[tP,FW,FZ],"sat");
		    $r([B11,GZ,f11]);break;
		   }break;
		  case 2:
		   var W11=$t(function(){
		    var X11=$f(1,function(Y11){
		     $M(vP,function(Z11){
		      switch(Z11.g){
		      case 1:
		       var a12=$d(2,[GZ,HZ],"sat");
		       var c12=goog.math.Long.fromBits(2,0).add(Y11);
		       var b12=c12.add(goog.math.Long.fromBits(1,0));
		       $R(3,[b12,a12,HW,Z11],"Deep");break;
		      case 2:
		       var d12=$d(2,[GZ,HZ],"sat");
		       var f12=goog.math.Long.fromBits(2,0).add(Y11);
		       var e12=f12.add(goog.math.Long.fromBits(2,0));
		       $R(3,[e12,d12,HW,Z11],"Deep");break;
		      case 3:
		       var g12=$d(2,[GZ,HZ],"sat");
		       var i12=goog.math.Long.fromBits(2,0).add(Y11);
		       var h12=i12.add(goog.math.Long.fromBits(3,0));
		       $R(3,[h12,g12,HW,Z11],"Deep");break;
		      case 4:
		       var j12=$d(2,[GZ,HZ],"sat");
		       var l12=goog.math.Long.fromBits(2,0).add(Y11);
		       var k12=l12.add(goog.math.Long.fromBits(4,0));
		       $R(3,[k12,j12,HW,Z11],"Deep");break;
		      }
		     },[HW,GZ,HZ,Y11]);
		    },[vP,HW,GZ,HZ],"$j1");
		    $M(HW,function(m12){
		     switch(m12.g){
		     case 1:
		      X11.J(goog.math.Long.fromBits(0,0));break;
		     case 2:
		      var n12=m12.v[0];
		      $M(n12,function(o12){
		       switch(o12.g){
		       case 1:
			var p12=o12.v[0];
			X11.J(p12);break;
		       case 2:
			var q12=o12.v[0];
			X11.J(q12);break;
		       }
		      },[vP,HW,GZ,HZ,X11]);break;
		     case 3:
		      var r12=m12.v[0];
		      X11.J(r12);break;
		     }
		    },[vP,HW,GZ,HZ,X11]);
		   },[vP,HW,GZ,HZ],"sat");
		   var s12=$t(function(){
		    var t12=$f(1,function(u12){
		     $$DataziSequence$T.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,FW],function(v12){
		      switch(v12.g){
		      case 1:
		       $M(tP,function(w12){
			switch(w12.g){
			case 1:
			 var x12=w12.v[0];
			 $R(2,[x12],"Single");break;
			case 2:
			 var y12=w12.v[0],z12=w12.v[1];
			 var A12=$d(1,[z12],"sat");
			 var B12=$d(1,[y12],"sat");
			 $R(3,[u12,B12,$$DataziSequence_Empty,A12],"Deep");break;
			case 3:
			 var C12=w12.v[0],D12=w12.v[1],E12=w12.v[2];
			 var F12=$d(1,[E12],"sat");
			 var G12=$d(2,[C12,D12],"sat");
			 $R(3,[u12,G12,$$DataziSequence_Empty,F12],"Deep");break;
			case 4:
			 var H12=w12.v[0],I12=w12.v[1],J12=w12.v[2],K12=w12.v[3];
			 var L12=$d(2,[J12,K12],"sat");
			 var M12=$d(2,[H12,I12],"sat");
			 $R(3,[u12,M12,$$DataziSequence_Empty,L12],"Deep");break;
			}
		       },[u12]);break;
		      case 2:
		       var N12=v12.v[0],O12=v12.v[1];
		       $b(function(){
			$M(O12,function(Q12){
			 switch(Q12.g){
			 case 1:
			  var R12=Q12.v[1],S12=Q12.v[2];
			  $R(2,[R12,S12],"Two");break;
			 case 2:
			  var T12=Q12.v[1],U12=Q12.v[2],V12=Q12.v[3];
			  $R(3,[T12,U12,V12],"Three");break;
			 }
			},[tP,u12,N12]);
		       },[],function(P12){
			$R(3,[u12,tP,N12,P12],"Deep");
		       },[tP,u12,N12]);break;
		      }
		     },[tP,u12]);
		    },[tP,FW],"$j1");
		    $M(FW,function(W12){
		     switch(W12.g){
		     case 1:
		      $M(tP,function(X12){
		       switch(X12.g){
		       case 1:
			t12.J(goog.math.Long.fromBits(1,0));break;
		       case 2:
			t12.J(goog.math.Long.fromBits(2,0));break;
		       case 3:
			t12.J(goog.math.Long.fromBits(3,0));break;
		       case 4:
			t12.J(goog.math.Long.fromBits(4,0));break;
		       }
		      },[tP,FW,t12]);break;
		     case 2:
		      var Y12=W12.v[0];
		      $M(Y12,function(Z12){
		       switch(Z12.g){
		       case 1:
			var a13=Z12.v[0];
			$M(tP,function(b13){
			 switch(b13.g){
			 case 1:
			  var c13=a13.add(goog.math.Long.fromBits(1,0));
			  t12.J(c13);break;
			 case 2:
			  var d13=a13.add(goog.math.Long.fromBits(2,0));
			  t12.J(d13);break;
			 case 3:
			  var e13=a13.add(goog.math.Long.fromBits(3,0));
			  t12.J(e13);break;
			 case 4:
			  var f13=a13.add(goog.math.Long.fromBits(4,0));
			  t12.J(f13);break;
			 }
			},[tP,FW,t12,a13]);break;
		       case 2:
			var g13=Z12.v[0];
			$M(tP,function(h13){
			 switch(h13.g){
			 case 1:
			  var i13=g13.add(goog.math.Long.fromBits(1,0));
			  t12.J(i13);break;
			 case 2:
			  var j13=g13.add(goog.math.Long.fromBits(2,0));
			  t12.J(j13);break;
			 case 3:
			  var k13=g13.add(goog.math.Long.fromBits(3,0));
			  t12.J(k13);break;
			 case 4:
			  var l13=g13.add(goog.math.Long.fromBits(4,0));
			  t12.J(l13);break;
			 }
			},[tP,FW,t12,g13]);break;
		       }
		      },[tP,FW,t12]);break;
		     case 3:
		      var m13=W12.v[0];
		      $M(tP,function(n13){
		       switch(n13.g){
		       case 1:
			var o13=m13.add(goog.math.Long.fromBits(1,0));
			t12.J(o13);break;
		       case 2:
			var p13=m13.add(goog.math.Long.fromBits(2,0));
			t12.J(p13);break;
		       case 3:
			var q13=m13.add(goog.math.Long.fromBits(3,0));
			t12.J(q13);break;
		       case 4:
			var r13=m13.add(goog.math.Long.fromBits(4,0));
			t12.J(r13);break;
		       }
		      },[tP,FW,t12,m13]);break;
		     }
		    },[tP,FW,t12]);
		   },[tP,FW],"sat");
		   $r([s12,FZ,W11]);break;
		  }break;
		 }
		},[vP,tP,JW,FW,HW]);
	       },[vP,tP,GW,FW,HW],"$j");
	       $M(FW,function(s13){
		switch(s13.g){
		case 1:
		 IW.J(t13);break;
		case 2:
		 var u13=s13.v[0];
		 $M(u13,function(v13){
		  switch(v13.g){
		  case 1:
		   var w13=v13.v[0];
		   var x13=t13.subtract(w13);
		   IW.J(x13);break;
		  case 2:
		   var y13=v13.v[0];
		   var z13=t13.subtract(y13);
		   IW.J(z13);break;
		  }
		 },[vP,tP,t13,GW,FW,HW,IW]);break;
		case 3:
		 var A13=s13.v[0];
		 var B13=t13.subtract(A13);
		 IW.J(B13);break;
		}
	       },[vP,tP,t13,GW,FW,HW,IW]);
	      },[vP,tP,t13]);break;
	     }
	    },[oP,xP,vP,uP,tP],"$w$j2");
	    $M(uP,function(C13){
	     switch(C13.g){
	     case 1:
	      zP.J(xP);break;
	     case 2:
	      var D13=C13.v[0];
	      $M(D13,function(E13){
	       switch(E13.g){
	       case 1:
		var F13=E13.v[0];
		var G13=xP.add(F13);
		zP.J(G13);break;
	       case 2:
		var H13=E13.v[0];
		var I13=xP.add(H13);
		zP.J(I13);break;
	       }
	      },[oP,xP,vP,uP,tP,zP]);break;
	     case 3:
	      var J13=C13.v[0];
	      var K13=xP.add(J13);
	      zP.J(K13);break;
	     }
	    },[oP,xP,vP,uP,tP,zP]);break;
	   case 2:
	    $M(tP,function(L13){
	     switch(L13.g){
	     case 1:
	      var M13=L13.v[0];
	      var N13=$t(function(){
	       var O13=$f(1,function(P13){
		$$DataziSequence$R.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,uP],function(Q13){
		 switch(Q13.g){
		 case 1:
		  $M(vP,function(R13){
		   switch(R13.g){
		   case 1:
		    var S13=R13.v[0];
		    $R(2,[S13],"Single");break;
		   case 2:
		    var T13=R13.v[0],U13=R13.v[1];
		    var V13=$d(1,[U13],"sat");
		    var W13=$d(1,[T13],"sat");
		    $R(3,[P13,W13,$$DataziSequence_Empty,V13],"Deep");break;
		   case 3:
		    var X13=R13.v[0],Y13=R13.v[1],Z13=R13.v[2];
		    var a14=$d(1,[Z13],"sat");
		    var b14=$d(2,[X13,Y13],"sat");
		    $R(3,[P13,b14,$$DataziSequence_Empty,a14],"Deep");break;
		   case 4:
		    var c14=R13.v[0],d14=R13.v[1],e14=R13.v[2],f14=R13.v[3];
		    var g14=$d(2,[e14,f14],"sat");
		    var h14=$d(2,[c14,d14],"sat");
		    $R(3,[P13,h14,$$DataziSequence_Empty,g14],"Deep");break;
		   }
		  },[P13]);break;
		 case 2:
		  var i14=Q13.v[0],j14=Q13.v[1];
		  $b(function(){
		   $M(i14,function(l14){
		    switch(l14.g){
		    case 1:
		     var m14=l14.v[1],n14=l14.v[2];
		     $R(2,[m14,n14],"Two");break;
		    case 2:
		     var o14=l14.v[1],p14=l14.v[2],q14=l14.v[3];
		     $R(3,[o14,p14,q14],"Three");break;
		    }
		   },[vP,P13,j14]);
		  },[],function(k14){
		   $R(3,[P13,k14,j14,vP],"Deep");
		  },[vP,P13,j14]);break;
		 }
		},[vP,P13]);
	       },[vP,uP],"$j");
	       $M(uP,function(r14){
		switch(r14.g){
		case 1:
		 $M(vP,function(s14){
		  switch(s14.g){
		  case 1:
		   O13.J(goog.math.Long.fromBits(1,0));break;
		  case 2:
		   O13.J(goog.math.Long.fromBits(2,0));break;
		  case 3:
		   O13.J(goog.math.Long.fromBits(3,0));break;
		  case 4:
		   O13.J(goog.math.Long.fromBits(4,0));break;
		  }
		 },[vP,uP,O13]);break;
		case 2:
		 var t14=r14.v[0];
		 $M(t14,function(u14){
		  switch(u14.g){
		  case 1:
		   var v14=u14.v[0];
		   $M(vP,function(w14){
		    switch(w14.g){
		    case 1:
		     var x14=v14.add(goog.math.Long.fromBits(1,0));
		     O13.J(x14);break;
		    case 2:
		     var y14=v14.add(goog.math.Long.fromBits(2,0));
		     O13.J(y14);break;
		    case 3:
		     var z14=v14.add(goog.math.Long.fromBits(3,0));
		     O13.J(z14);break;
		    case 4:
		     var A14=v14.add(goog.math.Long.fromBits(4,0));
		     O13.J(A14);break;
		    }
		   },[vP,uP,O13,v14]);break;
		  case 2:
		   var B14=u14.v[0];
		   $M(vP,function(C14){
		    switch(C14.g){
		    case 1:
		     var D14=B14.add(goog.math.Long.fromBits(1,0));
		     O13.J(D14);break;
		    case 2:
		     var E14=B14.add(goog.math.Long.fromBits(2,0));
		     O13.J(E14);break;
		    case 3:
		     var F14=B14.add(goog.math.Long.fromBits(3,0));
		     O13.J(F14);break;
		    case 4:
		     var G14=B14.add(goog.math.Long.fromBits(4,0));
		     O13.J(G14);break;
		    }
		   },[vP,uP,O13,B14]);break;
		  }
		 },[vP,uP,O13]);break;
		case 3:
		 var H14=r14.v[0];
		 $M(vP,function(I14){
		  switch(I14.g){
		  case 1:
		   var J14=H14.add(goog.math.Long.fromBits(1,0));
		   O13.J(J14);break;
		  case 2:
		   var K14=H14.add(goog.math.Long.fromBits(2,0));
		   O13.J(K14);break;
		  case 3:
		   var L14=H14.add(goog.math.Long.fromBits(3,0));
		   O13.J(L14);break;
		  case 4:
		   var M14=H14.add(goog.math.Long.fromBits(4,0));
		   O13.J(M14);break;
		  }
		 },[vP,uP,O13,H14]);break;
		}
	       },[vP,uP,O13]);
	      },[vP,uP],"sat");
	      $r([$$DataziSequence_Empty,M13,N13]);break;
	     case 2:
	      var N14=L13.v[0],O14=L13.v[1];
	      var P14=oP.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(P14.g){
	      case 1:
	       var Q14=$t(function(){
		var R14=$f(1,function(S14){
		 $$DataziSequence$R.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,uP],function(T14){
		  switch(T14.g){
		  case 1:
		   $M(vP,function(U14){
		    switch(U14.g){
		    case 1:
		     var V14=U14.v[0];
		     $R(2,[V14],"Single");break;
		    case 2:
		     var W14=U14.v[0],X14=U14.v[1];
		     var Y14=$d(1,[X14],"sat");
		     var Z14=$d(1,[W14],"sat");
		     $R(3,[S14,Z14,$$DataziSequence_Empty,Y14],"Deep");break;
		    case 3:
		     var a15=U14.v[0],b15=U14.v[1],c15=U14.v[2];
		     var d15=$d(1,[c15],"sat");
		     var e15=$d(2,[a15,b15],"sat");
		     $R(3,[S14,e15,$$DataziSequence_Empty,d15],"Deep");break;
		    case 4:
		     var f15=U14.v[0],g15=U14.v[1],h15=U14.v[2],i15=U14.v[3];
		     var j15=$d(2,[h15,i15],"sat");
		     var k15=$d(2,[f15,g15],"sat");
		     $R(3,[S14,k15,$$DataziSequence_Empty,j15],"Deep");break;
		    }
		   },[S14]);break;
		  case 2:
		   var l15=T14.v[0],m15=T14.v[1];
		   $b(function(){
		    $M(l15,function(o15){
		     switch(o15.g){
		     case 1:
		      var p15=o15.v[1],q15=o15.v[2];
		      $R(2,[p15,q15],"Two");break;
		     case 2:
		      var r15=o15.v[1],s15=o15.v[2],t15=o15.v[3];
		      $R(3,[r15,s15,t15],"Three");break;
		     }
		    },[vP,S14,m15]);
		   },[],function(n15){
		    $R(3,[S14,n15,m15,vP],"Deep");
		   },[vP,S14,m15]);break;
		  }
		 },[vP,S14]);
		},[vP,uP],"$j");
		$M(uP,function(u15){
		 switch(u15.g){
		 case 1:
		  $M(vP,function(v15){
		   switch(v15.g){
		   case 1:
		    R14.J(goog.math.Long.fromBits(1,0));break;
		   case 2:
		    R14.J(goog.math.Long.fromBits(2,0));break;
		   case 3:
		    R14.J(goog.math.Long.fromBits(3,0));break;
		   case 4:
		    R14.J(goog.math.Long.fromBits(4,0));break;
		   }
		  },[vP,uP,R14]);break;
		 case 2:
		  var w15=u15.v[0];
		  $M(w15,function(x15){
		   switch(x15.g){
		   case 1:
		    var y15=x15.v[0];
		    $M(vP,function(z15){
		     switch(z15.g){
		     case 1:
		      var A15=y15.add(goog.math.Long.fromBits(1,0));
		      R14.J(A15);break;
		     case 2:
		      var B15=y15.add(goog.math.Long.fromBits(2,0));
		      R14.J(B15);break;
		     case 3:
		      var C15=y15.add(goog.math.Long.fromBits(3,0));
		      R14.J(C15);break;
		     case 4:
		      var D15=y15.add(goog.math.Long.fromBits(4,0));
		      R14.J(D15);break;
		     }
		    },[vP,uP,R14,y15]);break;
		   case 2:
		    var E15=x15.v[0];
		    $M(vP,function(F15){
		     switch(F15.g){
		     case 1:
		      var G15=E15.add(goog.math.Long.fromBits(1,0));
		      R14.J(G15);break;
		     case 2:
		      var H15=E15.add(goog.math.Long.fromBits(2,0));
		      R14.J(H15);break;
		     case 3:
		      var I15=E15.add(goog.math.Long.fromBits(3,0));
		      R14.J(I15);break;
		     case 4:
		      var J15=E15.add(goog.math.Long.fromBits(4,0));
		      R14.J(J15);break;
		     }
		    },[vP,uP,R14,E15]);break;
		   }
		  },[vP,uP,R14]);break;
		 case 3:
		  var K15=u15.v[0];
		  $M(vP,function(L15){
		   switch(L15.g){
		   case 1:
		    var M15=K15.add(goog.math.Long.fromBits(1,0));
		    R14.J(M15);break;
		   case 2:
		    var N15=K15.add(goog.math.Long.fromBits(2,0));
		    R14.J(N15);break;
		   case 3:
		    var O15=K15.add(goog.math.Long.fromBits(3,0));
		    R14.J(O15);break;
		   case 4:
		    var P15=K15.add(goog.math.Long.fromBits(4,0));
		    R14.J(P15);break;
		   }
		  },[vP,uP,R14,K15]);break;
		 }
		},[vP,uP,R14]);
	       },[vP,uP],"sat");
	       var Q15=$d(2,[N14],"sat");
	       $r([Q15,O14,Q14]);break;
	      case 2:
	       var R15=$t(function(){
		var S15=$f(1,function(T15){
		 $M(vP,function(U15){
		  switch(U15.g){
		  case 1:
		   var V15=$d(1,[O14],"sat");
		   var X15=goog.math.Long.fromBits(1,0).add(T15);
		   var W15=X15.add(goog.math.Long.fromBits(1,0));
		   $R(3,[W15,V15,uP,U15],"Deep");break;
		  case 2:
		   var Y15=$d(1,[O14],"sat");
		   var a16=goog.math.Long.fromBits(1,0).add(T15);
		   var Z15=a16.add(goog.math.Long.fromBits(2,0));
		   $R(3,[Z15,Y15,uP,U15],"Deep");break;
		  case 3:
		   var b16=$d(1,[O14],"sat");
		   var d16=goog.math.Long.fromBits(1,0).add(T15);
		   var c16=d16.add(goog.math.Long.fromBits(3,0));
		   $R(3,[c16,b16,uP,U15],"Deep");break;
		  case 4:
		   var e16=$d(1,[O14],"sat");
		   var g16=goog.math.Long.fromBits(1,0).add(T15);
		   var f16=g16.add(goog.math.Long.fromBits(4,0));
		   $R(3,[f16,e16,uP,U15],"Deep");break;
		  }
		 },[uP,O14,T15]);
		},[vP,uP,O14],"$j");
		$M(uP,function(h16){
		 switch(h16.g){
		 case 1:
		  S15.J(goog.math.Long.fromBits(0,0));break;
		 case 2:
		  var i16=h16.v[0];
		  $M(i16,function(j16){
		   switch(j16.g){
		   case 1:
		    var k16=j16.v[0];
		    S15.J(k16);break;
		   case 2:
		    var l16=j16.v[0];
		    S15.J(l16);break;
		   }
		  },[vP,uP,O14,S15]);break;
		 case 3:
		  var m16=h16.v[0];
		  S15.J(m16);break;
		 }
		},[vP,uP,O14,S15]);
	       },[vP,uP,O14],"sat");
	       $r([$$DataziSequence_Empty,N14,R15]);break;
	      }break;
	     case 3:
	      var n16=L13.v[0],o16=L13.v[1],p16=L13.v[2];
	      var q16=oP.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(q16.g){
	      case 1:
	       var r16=oP.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(r16.g){
	       case 1:
		var s16=$t(function(){
		 var t16=$f(1,function(u16){
		  $$DataziSequence$R.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,uP],function(v16){
		   switch(v16.g){
		   case 1:
		    $M(vP,function(w16){
		     switch(w16.g){
		     case 1:
		      var x16=w16.v[0];
		      $R(2,[x16],"Single");break;
		     case 2:
		      var y16=w16.v[0],z16=w16.v[1];
		      var A16=$d(1,[z16],"sat");
		      var B16=$d(1,[y16],"sat");
		      $R(3,[u16,B16,$$DataziSequence_Empty,A16],"Deep");break;
		     case 3:
		      var C16=w16.v[0],D16=w16.v[1],E16=w16.v[2];
		      var F16=$d(1,[E16],"sat");
		      var G16=$d(2,[C16,D16],"sat");
		      $R(3,[u16,G16,$$DataziSequence_Empty,F16],"Deep");break;
		     case 4:
		      var H16=w16.v[0],I16=w16.v[1],J16=w16.v[2],K16=w16.v[3];
		      var L16=$d(2,[J16,K16],"sat");
		      var M16=$d(2,[H16,I16],"sat");
		      $R(3,[u16,M16,$$DataziSequence_Empty,L16],"Deep");break;
		     }
		    },[u16]);break;
		   case 2:
		    var N16=v16.v[0],O16=v16.v[1];
		    $b(function(){
		     $M(N16,function(Q16){
		      switch(Q16.g){
		      case 1:
		       var R16=Q16.v[1],S16=Q16.v[2];
		       $R(2,[R16,S16],"Two");break;
		      case 2:
		       var T16=Q16.v[1],U16=Q16.v[2],V16=Q16.v[3];
		       $R(3,[T16,U16,V16],"Three");break;
		      }
		     },[vP,u16,O16]);
		    },[],function(P16){
		     $R(3,[u16,P16,O16,vP],"Deep");
		    },[vP,u16,O16]);break;
		   }
		  },[vP,u16]);
		 },[vP,uP],"$j");
		 $M(uP,function(W16){
		  switch(W16.g){
		  case 1:
		   $M(vP,function(X16){
		    switch(X16.g){
		    case 1:
		     t16.J(goog.math.Long.fromBits(1,0));break;
		    case 2:
		     t16.J(goog.math.Long.fromBits(2,0));break;
		    case 3:
		     t16.J(goog.math.Long.fromBits(3,0));break;
		    case 4:
		     t16.J(goog.math.Long.fromBits(4,0));break;
		    }
		   },[vP,uP,t16]);break;
		  case 2:
		   var Y16=W16.v[0];
		   $M(Y16,function(Z16){
		    switch(Z16.g){
		    case 1:
		     var a17=Z16.v[0];
		     $M(vP,function(b17){
		      switch(b17.g){
		      case 1:
		       var c17=a17.add(goog.math.Long.fromBits(1,0));
		       t16.J(c17);break;
		      case 2:
		       var d17=a17.add(goog.math.Long.fromBits(2,0));
		       t16.J(d17);break;
		      case 3:
		       var e17=a17.add(goog.math.Long.fromBits(3,0));
		       t16.J(e17);break;
		      case 4:
		       var f17=a17.add(goog.math.Long.fromBits(4,0));
		       t16.J(f17);break;
		      }
		     },[vP,uP,t16,a17]);break;
		    case 2:
		     var g17=Z16.v[0];
		     $M(vP,function(h17){
		      switch(h17.g){
		      case 1:
		       var i17=g17.add(goog.math.Long.fromBits(1,0));
		       t16.J(i17);break;
		      case 2:
		       var j17=g17.add(goog.math.Long.fromBits(2,0));
		       t16.J(j17);break;
		      case 3:
		       var k17=g17.add(goog.math.Long.fromBits(3,0));
		       t16.J(k17);break;
		      case 4:
		       var l17=g17.add(goog.math.Long.fromBits(4,0));
		       t16.J(l17);break;
		      }
		     },[vP,uP,t16,g17]);break;
		    }
		   },[vP,uP,t16]);break;
		  case 3:
		   var m17=W16.v[0];
		   $M(vP,function(n17){
		    switch(n17.g){
		    case 1:
		     var o17=m17.add(goog.math.Long.fromBits(1,0));
		     t16.J(o17);break;
		    case 2:
		     var p17=m17.add(goog.math.Long.fromBits(2,0));
		     t16.J(p17);break;
		    case 3:
		     var q17=m17.add(goog.math.Long.fromBits(3,0));
		     t16.J(q17);break;
		    case 4:
		     var r17=m17.add(goog.math.Long.fromBits(4,0));
		     t16.J(r17);break;
		    }
		   },[vP,uP,t16,m17]);break;
		  }
		 },[vP,uP,t16]);
		},[vP,uP],"sat");
		var s17=$d(1,[o16],"sat");
		var t17=$d(1,[n16],"sat");
		var u17=$d(3,[goog.math.Long.fromBits(2,0),t17,$$DataziSequence_Empty,s17],"sat");
		$r([u17,p16,s16]);break;
	       case 2:
		var v17=$t(function(){
		 var w17=$f(1,function(x17){
		  $M(vP,function(y17){
		   switch(y17.g){
		   case 1:
		    var z17=$d(1,[p16],"sat");
		    var B17=goog.math.Long.fromBits(1,0).add(x17);
		    var A17=B17.add(goog.math.Long.fromBits(1,0));
		    $R(3,[A17,z17,uP,y17],"Deep");break;
		   case 2:
		    var C17=$d(1,[p16],"sat");
		    var E17=goog.math.Long.fromBits(1,0).add(x17);
		    var D17=E17.add(goog.math.Long.fromBits(2,0));
		    $R(3,[D17,C17,uP,y17],"Deep");break;
		   case 3:
		    var F17=$d(1,[p16],"sat");
		    var H17=goog.math.Long.fromBits(1,0).add(x17);
		    var G17=H17.add(goog.math.Long.fromBits(3,0));
		    $R(3,[G17,F17,uP,y17],"Deep");break;
		   case 4:
		    var I17=$d(1,[p16],"sat");
		    var K17=goog.math.Long.fromBits(1,0).add(x17);
		    var J17=K17.add(goog.math.Long.fromBits(4,0));
		    $R(3,[J17,I17,uP,y17],"Deep");break;
		   }
		  },[uP,p16,x17]);
		 },[vP,uP,p16],"$j");
		 $M(uP,function(L17){
		  switch(L17.g){
		  case 1:
		   w17.J(goog.math.Long.fromBits(0,0));break;
		  case 2:
		   var M17=L17.v[0];
		   $M(M17,function(N17){
		    switch(N17.g){
		    case 1:
		     var O17=N17.v[0];
		     w17.J(O17);break;
		    case 2:
		     var P17=N17.v[0];
		     w17.J(P17);break;
		    }
		   },[vP,uP,p16,w17]);break;
		  case 3:
		   var Q17=L17.v[0];
		   w17.J(Q17);break;
		  }
		 },[vP,uP,p16,w17]);
		},[vP,uP,p16],"sat");
		var R17=$d(2,[n16],"sat");
		$r([R17,o16,v17]);break;
	       }break;
	      case 2:
	       var S17=$t(function(){
		var T17=$f(1,function(U17){
		 $M(vP,function(V17){
		  switch(V17.g){
		  case 1:
		   var W17=$d(2,[o16,p16],"sat");
		   var Y17=goog.math.Long.fromBits(2,0).add(U17);
		   var X17=Y17.add(goog.math.Long.fromBits(1,0));
		   $R(3,[X17,W17,uP,V17],"Deep");break;
		  case 2:
		   var Z17=$d(2,[o16,p16],"sat");
		   var b18=goog.math.Long.fromBits(2,0).add(U17);
		   var a18=b18.add(goog.math.Long.fromBits(2,0));
		   $R(3,[a18,Z17,uP,V17],"Deep");break;
		  case 3:
		   var c18=$d(2,[o16,p16],"sat");
		   var e18=goog.math.Long.fromBits(2,0).add(U17);
		   var d18=e18.add(goog.math.Long.fromBits(3,0));
		   $R(3,[d18,c18,uP,V17],"Deep");break;
		  case 4:
		   var f18=$d(2,[o16,p16],"sat");
		   var h18=goog.math.Long.fromBits(2,0).add(U17);
		   var g18=h18.add(goog.math.Long.fromBits(4,0));
		   $R(3,[g18,f18,uP,V17],"Deep");break;
		  }
		 },[uP,o16,p16,U17]);
		},[vP,uP,o16,p16],"$j");
		$M(uP,function(i18){
		 switch(i18.g){
		 case 1:
		  T17.J(goog.math.Long.fromBits(0,0));break;
		 case 2:
		  var j18=i18.v[0];
		  $M(j18,function(k18){
		   switch(k18.g){
		   case 1:
		    var l18=k18.v[0];
		    T17.J(l18);break;
		   case 2:
		    var m18=k18.v[0];
		    T17.J(m18);break;
		   }
		  },[vP,uP,o16,p16,T17]);break;
		 case 3:
		  var n18=i18.v[0];
		  T17.J(n18);break;
		 }
		},[vP,uP,o16,p16,T17]);
	       },[vP,uP,o16,p16],"sat");
	       $r([$$DataziSequence_Empty,n16,S17]);break;
	      }break;
	     case 4:
	      var o18=L13.v[0],p18=L13.v[1],q18=L13.v[2],r18=L13.v[3];
	      var s18=oP.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(s18.g){
	      case 1:
	       var t18=oP.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(t18.g){
	       case 1:
		var u18=oP.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(u18.g){
		case 1:
		 var v18=$t(function(){
		  var w18=$f(1,function(x18){
		   $$DataziSequence$R.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,uP],function(y18){
		    switch(y18.g){
		    case 1:
		     $M(vP,function(z18){
		      switch(z18.g){
		      case 1:
		       var A18=z18.v[0];
		       $R(2,[A18],"Single");break;
		      case 2:
		       var B18=z18.v[0],C18=z18.v[1];
		       var D18=$d(1,[C18],"sat");
		       var E18=$d(1,[B18],"sat");
		       $R(3,[x18,E18,$$DataziSequence_Empty,D18],"Deep");break;
		      case 3:
		       var F18=z18.v[0],G18=z18.v[1],H18=z18.v[2];
		       var I18=$d(1,[H18],"sat");
		       var J18=$d(2,[F18,G18],"sat");
		       $R(3,[x18,J18,$$DataziSequence_Empty,I18],"Deep");break;
		      case 4:
		       var K18=z18.v[0],L18=z18.v[1],M18=z18.v[2],N18=z18.v[3];
		       var O18=$d(2,[M18,N18],"sat");
		       var P18=$d(2,[K18,L18],"sat");
		       $R(3,[x18,P18,$$DataziSequence_Empty,O18],"Deep");break;
		      }
		     },[x18]);break;
		    case 2:
		     var Q18=y18.v[0],R18=y18.v[1];
		     $b(function(){
		      $M(Q18,function(T18){
		       switch(T18.g){
		       case 1:
			var U18=T18.v[1],V18=T18.v[2];
			$R(2,[U18,V18],"Two");break;
		       case 2:
			var W18=T18.v[1],X18=T18.v[2],Y18=T18.v[3];
			$R(3,[W18,X18,Y18],"Three");break;
		       }
		      },[vP,x18,R18]);
		     },[],function(S18){
		      $R(3,[x18,S18,R18,vP],"Deep");
		     },[vP,x18,R18]);break;
		    }
		   },[vP,x18]);
		  },[vP,uP],"$j");
		  $M(uP,function(Z18){
		   switch(Z18.g){
		   case 1:
		    $M(vP,function(a19){
		     switch(a19.g){
		     case 1:
		      w18.J(goog.math.Long.fromBits(1,0));break;
		     case 2:
		      w18.J(goog.math.Long.fromBits(2,0));break;
		     case 3:
		      w18.J(goog.math.Long.fromBits(3,0));break;
		     case 4:
		      w18.J(goog.math.Long.fromBits(4,0));break;
		     }
		    },[vP,uP,w18]);break;
		   case 2:
		    var b19=Z18.v[0];
		    $M(b19,function(c19){
		     switch(c19.g){
		     case 1:
		      var d19=c19.v[0];
		      $M(vP,function(e19){
		       switch(e19.g){
		       case 1:
			var f19=d19.add(goog.math.Long.fromBits(1,0));
			w18.J(f19);break;
		       case 2:
			var g19=d19.add(goog.math.Long.fromBits(2,0));
			w18.J(g19);break;
		       case 3:
			var h19=d19.add(goog.math.Long.fromBits(3,0));
			w18.J(h19);break;
		       case 4:
			var i19=d19.add(goog.math.Long.fromBits(4,0));
			w18.J(i19);break;
		       }
		      },[vP,uP,w18,d19]);break;
		     case 2:
		      var j19=c19.v[0];
		      $M(vP,function(k19){
		       switch(k19.g){
		       case 1:
			var l19=j19.add(goog.math.Long.fromBits(1,0));
			w18.J(l19);break;
		       case 2:
			var m19=j19.add(goog.math.Long.fromBits(2,0));
			w18.J(m19);break;
		       case 3:
			var n19=j19.add(goog.math.Long.fromBits(3,0));
			w18.J(n19);break;
		       case 4:
			var o19=j19.add(goog.math.Long.fromBits(4,0));
			w18.J(o19);break;
		       }
		      },[vP,uP,w18,j19]);break;
		     }
		    },[vP,uP,w18]);break;
		   case 3:
		    var p19=Z18.v[0];
		    $M(vP,function(q19){
		     switch(q19.g){
		     case 1:
		      var r19=p19.add(goog.math.Long.fromBits(1,0));
		      w18.J(r19);break;
		     case 2:
		      var s19=p19.add(goog.math.Long.fromBits(2,0));
		      w18.J(s19);break;
		     case 3:
		      var t19=p19.add(goog.math.Long.fromBits(3,0));
		      w18.J(t19);break;
		     case 4:
		      var u19=p19.add(goog.math.Long.fromBits(4,0));
		      w18.J(u19);break;
		     }
		    },[vP,uP,w18,p19]);break;
		   }
		  },[vP,uP,w18]);
		 },[vP,uP],"sat");
		 var v19=$d(1,[q18],"sat");
		 var w19=$d(2,[o18,p18],"sat");
		 var x19=$d(3,[goog.math.Long.fromBits(3,0),w19,$$DataziSequence_Empty,v19],"sat");
		 $r([x19,r18,v18]);break;
		case 2:
		 var y19=$t(function(){
		  var z19=$f(1,function(A19){
		   $M(vP,function(B19){
		    switch(B19.g){
		    case 1:
		     var C19=$d(1,[r18],"sat");
		     var E19=goog.math.Long.fromBits(1,0).add(A19);
		     var D19=E19.add(goog.math.Long.fromBits(1,0));
		     $R(3,[D19,C19,uP,B19],"Deep");break;
		    case 2:
		     var F19=$d(1,[r18],"sat");
		     var H19=goog.math.Long.fromBits(1,0).add(A19);
		     var G19=H19.add(goog.math.Long.fromBits(2,0));
		     $R(3,[G19,F19,uP,B19],"Deep");break;
		    case 3:
		     var I19=$d(1,[r18],"sat");
		     var K19=goog.math.Long.fromBits(1,0).add(A19);
		     var J19=K19.add(goog.math.Long.fromBits(3,0));
		     $R(3,[J19,I19,uP,B19],"Deep");break;
		    case 4:
		     var L19=$d(1,[r18],"sat");
		     var N19=goog.math.Long.fromBits(1,0).add(A19);
		     var M19=N19.add(goog.math.Long.fromBits(4,0));
		     $R(3,[M19,L19,uP,B19],"Deep");break;
		    }
		   },[uP,r18,A19]);
		  },[vP,uP,r18],"$j");
		  $M(uP,function(O19){
		   switch(O19.g){
		   case 1:
		    z19.J(goog.math.Long.fromBits(0,0));break;
		   case 2:
		    var P19=O19.v[0];
		    $M(P19,function(Q19){
		     switch(Q19.g){
		     case 1:
		      var R19=Q19.v[0];
		      z19.J(R19);break;
		     case 2:
		      var S19=Q19.v[0];
		      z19.J(S19);break;
		     }
		    },[vP,uP,r18,z19]);break;
		   case 3:
		    var T19=O19.v[0];
		    z19.J(T19);break;
		   }
		  },[vP,uP,r18,z19]);
		 },[vP,uP,r18],"sat");
		 var U19=$d(1,[p18],"sat");
		 var V19=$d(1,[o18],"sat");
		 var W19=$d(3,[goog.math.Long.fromBits(2,0),V19,$$DataziSequence_Empty,U19],"sat");
		 $r([W19,q18,y19]);break;
		}break;
	       case 2:
		var X19=$t(function(){
		 var Y19=$f(1,function(Z19){
		  $M(vP,function(a1a){
		   switch(a1a.g){
		   case 1:
		    var b1a=$d(2,[q18,r18],"sat");
		    var d1a=goog.math.Long.fromBits(2,0).add(Z19);
		    var c1a=d1a.add(goog.math.Long.fromBits(1,0));
		    $R(3,[c1a,b1a,uP,a1a],"Deep");break;
		   case 2:
		    var e1a=$d(2,[q18,r18],"sat");
		    var g1a=goog.math.Long.fromBits(2,0).add(Z19);
		    var f1a=g1a.add(goog.math.Long.fromBits(2,0));
		    $R(3,[f1a,e1a,uP,a1a],"Deep");break;
		   case 3:
		    var h1a=$d(2,[q18,r18],"sat");
		    var j1a=goog.math.Long.fromBits(2,0).add(Z19);
		    var i1a=j1a.add(goog.math.Long.fromBits(3,0));
		    $R(3,[i1a,h1a,uP,a1a],"Deep");break;
		   case 4:
		    var k1a=$d(2,[q18,r18],"sat");
		    var m1a=goog.math.Long.fromBits(2,0).add(Z19);
		    var l1a=m1a.add(goog.math.Long.fromBits(4,0));
		    $R(3,[l1a,k1a,uP,a1a],"Deep");break;
		   }
		  },[uP,q18,r18,Z19]);
		 },[vP,uP,q18,r18],"$j");
		 $M(uP,function(n1a){
		  switch(n1a.g){
		  case 1:
		   Y19.J(goog.math.Long.fromBits(0,0));break;
		  case 2:
		   var o1a=n1a.v[0];
		   $M(o1a,function(p1a){
		    switch(p1a.g){
		    case 1:
		     var q1a=p1a.v[0];
		     Y19.J(q1a);break;
		    case 2:
		     var r1a=p1a.v[0];
		     Y19.J(r1a);break;
		    }
		   },[vP,uP,q18,r18,Y19]);break;
		  case 3:
		   var s1a=n1a.v[0];
		   Y19.J(s1a);break;
		  }
		 },[vP,uP,q18,r18,Y19]);
		},[vP,uP,q18,r18],"sat");
		var t1a=$d(2,[o18],"sat");
		$r([t1a,p18,X19]);break;
	       }break;
	      case 2:
	       var u1a=$t(function(){
		var v1a=$f(1,function(w1a){
		 $M(vP,function(x1a){
		  switch(x1a.g){
		  case 1:
		   var y1a=$d(3,[p18,q18,r18],"sat");
		   var A1a=goog.math.Long.fromBits(3,0).add(w1a);
		   var z1a=A1a.add(goog.math.Long.fromBits(1,0));
		   $R(3,[z1a,y1a,uP,x1a],"Deep");break;
		  case 2:
		   var B1a=$d(3,[p18,q18,r18],"sat");
		   var D1a=goog.math.Long.fromBits(3,0).add(w1a);
		   var C1a=D1a.add(goog.math.Long.fromBits(2,0));
		   $R(3,[C1a,B1a,uP,x1a],"Deep");break;
		  case 3:
		   var E1a=$d(3,[p18,q18,r18],"sat");
		   var G1a=goog.math.Long.fromBits(3,0).add(w1a);
		   var F1a=G1a.add(goog.math.Long.fromBits(3,0));
		   $R(3,[F1a,E1a,uP,x1a],"Deep");break;
		  case 4:
		   var H1a=$d(3,[p18,q18,r18],"sat");
		   var J1a=goog.math.Long.fromBits(3,0).add(w1a);
		   var I1a=J1a.add(goog.math.Long.fromBits(4,0));
		   $R(3,[I1a,H1a,uP,x1a],"Deep");break;
		  }
		 },[uP,p18,q18,r18,w1a]);
		},[vP,uP,p18,q18,r18],"$j");
		$M(uP,function(K1a){
		 switch(K1a.g){
		 case 1:
		  v1a.J(goog.math.Long.fromBits(0,0));break;
		 case 2:
		  var L1a=K1a.v[0];
		  $M(L1a,function(M1a){
		   switch(M1a.g){
		   case 1:
		    var N1a=M1a.v[0];
		    v1a.J(N1a);break;
		   case 2:
		    var O1a=M1a.v[0];
		    v1a.J(O1a);break;
		   }
		  },[vP,uP,p18,q18,r18,v1a]);break;
		 case 3:
		  var P1a=K1a.v[0];
		  v1a.J(P1a);break;
		 }
		},[vP,uP,p18,q18,r18,v1a]);
	       },[vP,uP,p18,q18,r18],"sat");
	       $r([$$DataziSequence_Empty,o18,u1a]);break;
	      }break;
	     }
	    },[oP,vP,uP]);break;
	   }
	  },[oP,vP,uP,tP],"$w$j1");
	  $M(tP,function(Q1a){
	   switch(Q1a.g){
	   case 1:
	    wP.C([goog.math.Long.fromBits(1,0)],function(R1a){
	     var S1a=R1a[0],T1a=R1a[1],U1a=R1a[2];
	     $R(1,[S1a,T1a,U1a],"Split");
	    },[]);break;
	   case 2:
	    wP.C([goog.math.Long.fromBits(2,0)],function(V1a){
	     var W1a=V1a[0],X1a=V1a[1],Y1a=V1a[2];
	     $R(1,[W1a,X1a,Y1a],"Split");
	    },[]);break;
	   case 3:
	    wP.C([goog.math.Long.fromBits(3,0)],function(Z1a){
	     var a1b=Z1a[0],b1b=Z1a[1],c1b=Z1a[2];
	     $R(1,[a1b,b1b,c1b],"Split");
	    },[]);break;
	   case 4:
	    wP.C([goog.math.Long.fromBits(4,0)],function(d1b){
	     var e1b=d1b[0],f1b=d1b[1],g1b=d1b[2];
	     $R(1,[e1b,f1b,g1b],"Split");
	    },[]);break;
	   }
	  },[wP]);break;
	 }
	},[oP]);
       },[oP,kP],"ds1");
       var h1b=$t(function(){
	$M(qP,function(i1b){
	 var j1b=i1b.v[1],k1b=i1b.v[2];
	 $$DataziSequence_zlzbzuconsTree.J(j1b,k1b);
	},[]);
       },[qP],"sat");
       var l1b=$t(function(){
	$M(qP,function(m1b){
	 var n1b=m1b.v[0];
	 $A(n1b);
	},[]);
       },[qP],"sat");
       $r([l1b,h1b]);break;
      }
     },[mP,kP]);
    },[hP,kP],"$w$j");
    $M(kP,function(o1b){
     switch(o1b.g){
     case 2:
      lP.C([goog.math.Long.fromBits(1,0)],function(p1b){
       var q1b=p1b[0],r1b=p1b[1];
       $R(1,[q1b,r1b],"(,)");
      },[]);break;
     case 3:
      var s1b=o1b.v[0];
      lP.C([s1b],function(t1b){
       var u1b=t1b[0],v1b=t1b[1];
       $R(1,[u1b,v1b],"(,)");
      },[]);break;
     }
    },[lP]);
   }
  },[hP]);
 },[iP,hP],"ds");
 var x1b=$t(function(){
  $M(jP,function(y1b){
   var z1b=y1b.v[1];
   $A(z1b);
  },[]);
 },[jP],"sat");
 var A1b=$t(function(){
  $M(jP,function(B1b){
   var C1b=B1b.v[0];
   $A(C1b);
  },[]);
 },[jP],"sat");
 $r([A1b,x1b]);
},[],"at libraries/containers/Data/Sequence.hs:1202:1");
var $$DataziSequence_Empty=$D(1,function(){
 $r([]);
},"at libraries/containers/Data/Sequence.hs:262:7");
var $$DataziSequence$u=$F(2,function(N1W,O1W){
 $M(O1W,function(P1W){
  switch(P1W.g){
  case 1:
   var Q1W=P1W.v[0];
   $R(2,[Q1W],"Single");break;
  case 2:
   var R1W=P1W.v[0],S1W=P1W.v[1];
   var T1W=$d(1,[S1W],"sat");
   var U1W=$d(1,[R1W],"sat");
   $R(3,[N1W,U1W,$$DataziSequence_Empty,T1W],"Deep");break;
  case 3:
   var V1W=P1W.v[0],W1W=P1W.v[1],X1W=P1W.v[2];
   var Y1W=$d(1,[X1W],"sat");
   var Z1W=$d(2,[V1W,W1W],"sat");
   $R(3,[N1W,Z1W,$$DataziSequence_Empty,Y1W],"Deep");break;
  case 4:
   var a1X=P1W.v[0],b1X=P1W.v[1],c1X=P1W.v[2],d1X=P1W.v[3];
   var e1X=$d(2,[c1X,d1X],"sat");
   var f1X=$d(2,[a1X,b1X],"sat");
   $R(3,[N1W,f1X,$$DataziSequence_Empty,e1X],"Deep");break;
  }
 },[N1W]);
},"at libraries/containers/Data/Sequence.hs:401:1");
var $$DataziSequence$N=$F(2,function(Q20,R20){
 $M(R20,function(S20){
  switch(S20.g){
  case 1:
   var T20=S20.v[0];
   $r([$$DataziMaybe_Nothing,T20,$$DataziMaybe_Nothing]);break;
  case 2:
   var U20=S20.v[0],V20=S20.v[1];
   $M(U20,function(W20){
    switch(W20.g){
    case 1:
     var X20=W20.v[0];
     var Y20=Q20.lessThan(X20)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Y20.g){
     case 1:
      var Z20=$d(1,[W20],"sat");
      var a21=$d(2,[Z20],"sat");
      $r([a21,V20,$$DataziMaybe_Nothing]);break;
     case 2:
      var b21=$d(1,[V20],"sat");
      var c21=$d(2,[b21],"sat");
      $r([$$DataziMaybe_Nothing,W20,c21]);break;
     }break;
    case 2:
     var d21=W20.v[0];
     var e21=Q20.lessThan(d21)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(e21.g){
     case 1:
      var f21=$d(1,[W20],"sat");
      var g21=$d(2,[f21],"sat");
      $r([g21,V20,$$DataziMaybe_Nothing]);break;
     case 2:
      var h21=$d(1,[V20],"sat");
      var i21=$d(2,[h21],"sat");
      $r([$$DataziMaybe_Nothing,W20,i21]);break;
     }break;
    }
   },[Q20,V20]);break;
  case 3:
   var j21=S20.v[0],k21=S20.v[1],l21=S20.v[2];
   var m21=$f(1,function(n21){
    var o21=Q20.lessThan(n21)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(o21.g){
    case 1:
     $M(k21,function(p21){
      switch(p21.g){
      case 1:
       var q21=p21.v[0];
       var y21=n21.add(q21);
       var r21=Q20.lessThan(y21)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(r21.g){
       case 1:
	var s21=$d(2,[j21,p21],"sat");
	var t21=$d(2,[s21],"sat");
	$r([t21,l21,$$DataziMaybe_Nothing]);break;
       case 2:
	var u21=$d(1,[l21],"sat");
	var v21=$d(2,[u21],"sat");
	var w21=$d(1,[j21],"sat");
	var x21=$d(2,[w21],"sat");
	$r([x21,p21,v21]);break;
       }break;
      case 2:
       var z21=p21.v[0];
       var H21=n21.add(z21);
       var A21=Q20.lessThan(H21)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(A21.g){
       case 1:
	var B21=$d(2,[j21,p21],"sat");
	var C21=$d(2,[B21],"sat");
	$r([C21,l21,$$DataziMaybe_Nothing]);break;
       case 2:
	var D21=$d(1,[l21],"sat");
	var E21=$d(2,[D21],"sat");
	var F21=$d(1,[j21],"sat");
	var G21=$d(2,[F21],"sat");
	$r([G21,p21,E21]);break;
       }break;
      }
     },[Q20,n21,j21,l21]);break;
    case 2:
     var I21=$d(2,[k21,l21],"sat");
     var J21=$d(2,[I21],"sat");
     $r([$$DataziMaybe_Nothing,j21,J21]);break;
    }
   },[Q20,k21,j21,l21],"$w$j");
   $M(j21,function(K21){
    switch(K21.g){
    case 1:
     var L21=K21.v[0];
     m21.J(L21);break;
    case 2:
     var M21=K21.v[0];
     m21.J(M21);break;
    }
   },[Q20,k21,j21,l21,m21]);break;
  case 4:
   var N21=S20.v[0],O21=S20.v[1],P21=S20.v[2],Q21=S20.v[3];
   var R21=$f(1,function(S21){
    var T21=Q20.lessThan(S21)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(T21.g){
    case 1:
     var U21=$f(1,function(V21){
      var W21=Q20.lessThan(V21)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(W21.g){
      case 1:
       $M(P21,function(X21){
	switch(X21.g){
	case 1:
	 var Y21=X21.v[0];
	 var g22=V21.add(Y21);
	 var Z21=Q20.lessThan(g22)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Z21.g){
	 case 1:
	  var a22=$d(3,[N21,O21,X21],"sat");
	  var b22=$d(2,[a22],"sat");
	  $r([b22,Q21,$$DataziMaybe_Nothing]);break;
	 case 2:
	  var c22=$d(1,[Q21],"sat");
	  var d22=$d(2,[c22],"sat");
	  var e22=$d(2,[N21,O21],"sat");
	  var f22=$d(2,[e22],"sat");
	  $r([f22,X21,d22]);break;
	 }break;
	case 2:
	 var h22=X21.v[0];
	 var p22=V21.add(h22);
	 var i22=Q20.lessThan(p22)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(i22.g){
	 case 1:
	  var j22=$d(3,[N21,O21,X21],"sat");
	  var k22=$d(2,[j22],"sat");
	  $r([k22,Q21,$$DataziMaybe_Nothing]);break;
	 case 2:
	  var l22=$d(1,[Q21],"sat");
	  var m22=$d(2,[l22],"sat");
	  var n22=$d(2,[N21,O21],"sat");
	  var o22=$d(2,[n22],"sat");
	  $r([o22,X21,m22]);break;
	 }break;
	}
       },[Q20,V21,N21,O21,Q21]);break;
      case 2:
       var q22=$d(2,[P21,Q21],"sat");
       var r22=$d(2,[q22],"sat");
       var s22=$d(1,[N21],"sat");
       var t22=$d(2,[s22],"sat");
       $r([t22,O21,r22]);break;
      }
     },[Q20,P21,N21,O21,Q21],"$w$j1");
     $M(O21,function(u22){
      switch(u22.g){
      case 1:
       var v22=u22.v[0];
       var w22=S21.add(v22);
       U21.J(w22);break;
      case 2:
       var x22=u22.v[0];
       var y22=S21.add(x22);
       U21.J(y22);break;
      }
     },[Q20,S21,P21,N21,O21,Q21,U21]);break;
    case 2:
     var z22=$d(3,[O21,P21,Q21],"sat");
     var A22=$d(2,[z22],"sat");
     $r([$$DataziMaybe_Nothing,N21,A22]);break;
    }
   },[Q20,P21,N21,O21,Q21],"$w$j");
   $M(N21,function(B22){
    switch(B22.g){
    case 1:
     var C22=B22.v[0];
     R21.J(C22);break;
    case 2:
     var D22=B22.v[0];
     R21.J(D22);break;
    }
   },[Q20,P21,N21,O21,Q21,R21]);break;
  }
 },[Q20]);
},"at libraries/containers/Data/Sequence.hs:1255:1");
var $$DataziSequence$O=$F(3,function(E22,F22,G22){
 var H22=$f(1,function(I22){
  $M(F22,function(J22){
   switch(J22.g){
   case 1:
    var K22=J22.v[0];
    $M(G22,function(L22){
     switch(L22.g){
     case 1:
      var M22=L22.v[0];
      var O22=I22.add(K22);
      var N22=O22.add(M22);
      $R(2,[N22,E22,J22,L22],"Node3");break;
     case 2:
      var P22=L22.v[0];
      var R22=I22.add(K22);
      var Q22=R22.add(P22);
      $R(2,[Q22,E22,J22,L22],"Node3");break;
     }
    },[I22,K22,E22,J22]);break;
   case 2:
    var S22=J22.v[0];
    $M(G22,function(T22){
     switch(T22.g){
     case 1:
      var U22=T22.v[0];
      var W22=I22.add(S22);
      var V22=W22.add(U22);
      $R(2,[V22,E22,J22,T22],"Node3");break;
     case 2:
      var X22=T22.v[0];
      var Z22=I22.add(S22);
      var Y22=Z22.add(X22);
      $R(2,[Y22,E22,J22,T22],"Node3");break;
     }
    },[I22,E22,J22,S22]);break;
   }
  },[G22,I22,E22]);
 },[F22,G22,E22],"$j");
 $M(E22,function(a23){
  switch(a23.g){
  case 1:
   var b23=a23.v[0];
   H22.J(b23);break;
  case 2:
   var c23=a23.v[0];
   H22.J(c23);break;
  }
 },[F22,G22,E22,H22]);
},"at libraries/containers/Data/Sequence.hs:446:1");
var $$DataziSequence$R=$F(2,function(u23,v23){
 $M(v23,function(w23){
  switch(w23.g){
  case 1:
   $R(1,[],"Nothing2");break;
  case 2:
   var x23=w23.v[0];
   $R(2,[x23,$$DataziSequence_Empty],"Just2");break;
  case 3:
   var y23=w23.v[0],z23=w23.v[1],A23=w23.v[2],B23=w23.v[3];
   $M(z23,function(C23){
    switch(C23.g){
    case 1:
     var D23=C23.v[0];
     var E23=$t(function(){
      $$DataziSequence$R.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,A23],function(F23){
       switch(F23.g){
       case 1:
	$M(B23,function(G23){
	 switch(G23.g){
	 case 1:
	  var H23=G23.v[0];
	  u23.C([D23],function(I23){
	   $R(2,[H23],"Single");
	  },[H23]);break;
	 case 2:
	  var J23=G23.v[0],K23=G23.v[1];
	  u23.C([D23],function(L23){
	   var M23=L23.v[0];
	   var N23=$d(1,[K23],"sat");
	   var O23=$d(1,[J23],"sat");
	   var P23=y23.subtract(M23);
	   $R(3,[P23,O23,$$DataziSequence_Empty,N23],"Deep");
	  },[y23,J23,K23]);break;
	 case 3:
	  var Q23=G23.v[0],R23=G23.v[1],S23=G23.v[2];
	  u23.C([D23],function(T23){
	   var U23=T23.v[0];
	   var V23=$d(1,[S23],"sat");
	   var W23=$d(2,[Q23,R23],"sat");
	   var X23=y23.subtract(U23);
	   $R(3,[X23,W23,$$DataziSequence_Empty,V23],"Deep");
	  },[y23,Q23,R23,S23]);break;
	 case 4:
	  var Y23=G23.v[0],Z23=G23.v[1],a24=G23.v[2],b24=G23.v[3];
	  u23.C([D23],function(c24){
	   var d24=c24.v[0];
	   var e24=$d(2,[a24,b24],"sat");
	   var f24=$d(2,[Y23,Z23],"sat");
	   var g24=y23.subtract(d24);
	   $R(3,[g24,f24,$$DataziSequence_Empty,e24],"Deep");
	  },[y23,Y23,Z23,a24,b24]);break;
	 }
	},[D23,u23,y23]);break;
       case 2:
	var h24=F23.v[0],i24=F23.v[1];
	u23.C([D23],function(j24){
	 var k24=j24.v[0];
	 $b(function(){
	  $M(h24,function(n24){
	   switch(n24.g){
	   case 1:
	    var o24=n24.v[1],p24=n24.v[2];
	    $R(2,[o24,p24],"Two");break;
	   case 2:
	    var q24=n24.v[1],r24=n24.v[2],s24=n24.v[3];
	    $R(3,[q24,r24,s24],"Three");break;
	   }
	  },[B23,y23,k24,i24]);
	 },[],function(l24){
	  var m24=y23.subtract(k24);
	  $R(3,[m24,l24,i24,B23],"Deep");
	 },[B23,y23,k24,i24]);
	},[B23,y23,h24,i24]);break;
       }
      },[D23,B23,u23,y23]);
     },[D23,A23,B23,u23,y23],"sat");
     $R(2,[D23,E23],"Just2");break;
    case 2:
     var t24=C23.v[0],u24=C23.v[1];
     var v24=$t(function(){
      u23.C([t24],function(w24){
       var x24=w24.v[0];
       var y24=$d(1,[u24],"sat");
       var z24=y23.subtract(x24);
       $R(3,[z24,y24,A23,B23],"Deep");
      },[A23,B23,y23,u24]);
     },[A23,B23,u23,y23,t24,u24],"sat");
     $R(2,[t24,v24],"Just2");break;
    case 3:
     var A24=C23.v[0],B24=C23.v[1],C24=C23.v[2];
     var D24=$t(function(){
      u23.C([A24],function(E24){
       var F24=E24.v[0];
       var G24=$d(2,[B24,C24],"sat");
       var H24=y23.subtract(F24);
       $R(3,[H24,G24,A23,B23],"Deep");
      },[A23,B23,y23,B24,C24]);
     },[A23,B23,u23,y23,A24,B24,C24],"sat");
     $R(2,[A24,D24],"Just2");break;
    case 4:
     var I24=C23.v[0],J24=C23.v[1],K24=C23.v[2],L24=C23.v[3];
     var M24=$t(function(){
      u23.C([I24],function(N24){
       var O24=N24.v[0];
       var P24=$d(3,[J24,K24,L24],"sat");
       var Q24=y23.subtract(O24);
       $R(3,[Q24,P24,A23,B23],"Deep");
      },[A23,B23,y23,J24,K24,L24]);
     },[A23,B23,u23,y23,I24,J24,K24,L24],"sat");
     $R(2,[I24,M24],"Just2");break;
    }
   },[A23,B23,u23,y23]);break;
  }
 },[u23]);
},"at libraries/containers/Data/Sequence.hs:937:1");
var $$DataziSequence$T=$F(2,function(W26,X26){
 $M(X26,function(Y26){
  switch(Y26.g){
  case 1:
   $R(1,[],"Nothing2");break;
  case 2:
   var Z26=Y26.v[0];
   $R(2,[$$DataziSequence_Empty,Z26],"Just2");break;
  case 3:
   var a27=Y26.v[0],b27=Y26.v[1],c27=Y26.v[2],d27=Y26.v[3];
   $M(d27,function(e27){
    switch(e27.g){
    case 1:
     var f27=e27.v[0];
     var g27=$t(function(){
      $$DataziSequence$T.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,c27],function(h27){
       switch(h27.g){
       case 1:
	$M(b27,function(i27){
	 switch(i27.g){
	 case 1:
	  var j27=i27.v[0];
	  W26.C([f27],function(k27){
	   $R(2,[j27],"Single");
	  },[j27]);break;
	 case 2:
	  var l27=i27.v[0],m27=i27.v[1];
	  W26.C([f27],function(n27){
	   var o27=n27.v[0];
	   var p27=$d(1,[m27],"sat");
	   var q27=$d(1,[l27],"sat");
	   var r27=a27.subtract(o27);
	   $R(3,[r27,q27,$$DataziSequence_Empty,p27],"Deep");
	  },[a27,l27,m27]);break;
	 case 3:
	  var s27=i27.v[0],t27=i27.v[1],u27=i27.v[2];
	  W26.C([f27],function(v27){
	   var w27=v27.v[0];
	   var x27=$d(1,[u27],"sat");
	   var y27=$d(2,[s27,t27],"sat");
	   var z27=a27.subtract(w27);
	   $R(3,[z27,y27,$$DataziSequence_Empty,x27],"Deep");
	  },[a27,s27,t27,u27]);break;
	 case 4:
	  var A27=i27.v[0],B27=i27.v[1],C27=i27.v[2],D27=i27.v[3];
	  W26.C([f27],function(E27){
	   var F27=E27.v[0];
	   var G27=$d(2,[C27,D27],"sat");
	   var H27=$d(2,[A27,B27],"sat");
	   var I27=a27.subtract(F27);
	   $R(3,[I27,H27,$$DataziSequence_Empty,G27],"Deep");
	  },[a27,A27,B27,C27,D27]);break;
	 }
	},[f27,W26,a27]);break;
       case 2:
	var J27=h27.v[0],K27=h27.v[1];
	W26.C([f27],function(L27){
	 var M27=L27.v[0];
	 $b(function(){
	  $M(K27,function(P27){
	   switch(P27.g){
	   case 1:
	    var Q27=P27.v[1],R27=P27.v[2];
	    $R(2,[Q27,R27],"Two");break;
	   case 2:
	    var S27=P27.v[1],T27=P27.v[2],U27=P27.v[3];
	    $R(3,[S27,T27,U27],"Three");break;
	   }
	  },[b27,a27,M27,J27]);
	 },[],function(N27){
	  var O27=a27.subtract(M27);
	  $R(3,[O27,b27,J27,N27],"Deep");
	 },[b27,a27,M27,J27]);
	},[b27,a27,K27,J27]);break;
       }
      },[b27,f27,W26,a27]);
     },[c27,b27,f27,W26,a27],"sat");
     $R(2,[g27,f27],"Just2");break;
    case 2:
     var V27=e27.v[0],W27=e27.v[1];
     var X27=$t(function(){
      W26.C([W27],function(Y27){
       var Z27=Y27.v[0];
       var a28=$d(1,[V27],"sat");
       var b28=a27.subtract(Z27);
       $R(3,[b28,b27,c27,a28],"Deep");
      },[c27,b27,a27,V27]);
     },[c27,b27,W26,a27,W27,V27],"sat");
     $R(2,[X27,W27],"Just2");break;
    case 3:
     var c28=e27.v[0],d28=e27.v[1],e28=e27.v[2];
     var f28=$t(function(){
      W26.C([e28],function(g28){
       var h28=g28.v[0];
       var i28=$d(2,[c28,d28],"sat");
       var j28=a27.subtract(h28);
       $R(3,[j28,b27,c27,i28],"Deep");
      },[c27,b27,a27,c28,d28]);
     },[c27,b27,W26,a27,e28,c28,d28],"sat");
     $R(2,[f28,e28],"Just2");break;
    case 4:
     var k28=e27.v[0],l28=e27.v[1],m28=e27.v[2],n28=e27.v[3];
     var o28=$t(function(){
      W26.C([n28],function(p28){
       var q28=p28.v[0];
       var r28=$d(3,[k28,l28,m28],"sat");
       var s28=a27.subtract(q28);
       $R(3,[s28,b27,c27,r28],"Deep");
      },[c27,b27,a27,k28,l28,m28]);
     },[c27,b27,W26,a27,n28,k28,l28,m28],"sat");
     $R(2,[o28,n28],"Just2");break;
    }
   },[c27,b27,W26,a27]);break;
  }
 },[W26]);
},"at libraries/containers/Data/Sequence.hs:988:1");
var $$DataziSequence$V=$F(1,function(y2a){
 $M(y2a,function(z2a){
  switch(z2a.g){
  case 1:
   var A2a=z2a.v[0];
   $M(A2a,function(B2a){
    switch(B2a.g){
    case 1:
     var C2a=B2a.v[0];
     $A(C2a);break;
    case 2:
     var D2a=B2a.v[0];
     $A(D2a);break;
    }
   },[]);break;
  case 2:
   var E2a=z2a.v[0],F2a=z2a.v[1];
   $M(E2a,function(G2a){
    switch(G2a.g){
    case 1:
     var H2a=G2a.v[0];
     $M(F2a,function(I2a){
      switch(I2a.g){
      case 1:
       var J2a=I2a.v[0];
       $r(H2a.add(J2a));break;
      case 2:
       var K2a=I2a.v[0];
       $r(H2a.add(K2a));break;
      }
     },[H2a]);break;
    case 2:
     var L2a=G2a.v[0];
     $M(F2a,function(M2a){
      switch(M2a.g){
      case 1:
       var N2a=M2a.v[0];
       $r(L2a.add(N2a));break;
      case 2:
       var O2a=M2a.v[0];
       $r(L2a.add(O2a));break;
      }
     },[L2a]);break;
    }
   },[F2a]);break;
  case 3:
   var P2a=z2a.v[0],Q2a=z2a.v[1],R2a=z2a.v[2];
   $M(P2a,function(S2a){
    switch(S2a.g){
    case 1:
     var T2a=S2a.v[0];
     $M(Q2a,function(U2a){
      switch(U2a.g){
      case 1:
       var V2a=U2a.v[0];
       $M(R2a,function(W2a){
	switch(W2a.g){
	case 1:
	 var X2a=W2a.v[0];
	 var Y2a=T2a.add(V2a);
	 $r(Y2a.add(X2a));break;
	case 2:
	 var Z2a=W2a.v[0];
	 var a2b=T2a.add(V2a);
	 $r(a2b.add(Z2a));break;
	}
       },[T2a,V2a]);break;
      case 2:
       var b2b=U2a.v[0];
       $M(R2a,function(c2b){
	switch(c2b.g){
	case 1:
	 var d2b=c2b.v[0];
	 var e2b=T2a.add(b2b);
	 $r(e2b.add(d2b));break;
	case 2:
	 var f2b=c2b.v[0];
	 var g2b=T2a.add(b2b);
	 $r(g2b.add(f2b));break;
	}
       },[T2a,b2b]);break;
      }
     },[R2a,T2a]);break;
    case 2:
     var h2b=S2a.v[0];
     $M(Q2a,function(i2b){
      switch(i2b.g){
      case 1:
       var j2b=i2b.v[0];
       $M(R2a,function(k2b){
	switch(k2b.g){
	case 1:
	 var l2b=k2b.v[0];
	 var m2b=h2b.add(j2b);
	 $r(m2b.add(l2b));break;
	case 2:
	 var n2b=k2b.v[0];
	 var o2b=h2b.add(j2b);
	 $r(o2b.add(n2b));break;
	}
       },[h2b,j2b]);break;
      case 2:
       var p2b=i2b.v[0];
       $M(R2a,function(q2b){
	switch(q2b.g){
	case 1:
	 var r2b=q2b.v[0];
	 var s2b=h2b.add(p2b);
	 $r(s2b.add(r2b));break;
	case 2:
	 var t2b=q2b.v[0];
	 var u2b=h2b.add(p2b);
	 $r(u2b.add(t2b));break;
	}
       },[h2b,p2b]);break;
      }
     },[R2a,h2b]);break;
    }
   },[Q2a,R2a]);break;
  case 4:
   var v2b=z2a.v[0],w2b=z2a.v[1],x2b=z2a.v[2],y2b=z2a.v[3];
   var z2b=$f(1,function(A2b){
    $M(w2b,function(B2b){
     switch(B2b.g){
     case 1:
      var C2b=B2b.v[0];
      $M(x2b,function(D2b){
       switch(D2b.g){
       case 1:
	var E2b=D2b.v[0];
	$M(y2b,function(F2b){
	 switch(F2b.g){
	 case 1:
	  var G2b=F2b.v[0];
	  var I2b=A2b.add(C2b);
	  var H2b=I2b.add(E2b);
	  $r(H2b.add(G2b));break;
	 case 2:
	  var J2b=F2b.v[0];
	  var L2b=A2b.add(C2b);
	  var K2b=L2b.add(E2b);
	  $r(K2b.add(J2b));break;
	 }
	},[A2b,C2b,E2b]);break;
       case 2:
	var M2b=D2b.v[0];
	$M(y2b,function(N2b){
	 switch(N2b.g){
	 case 1:
	  var O2b=N2b.v[0];
	  var Q2b=A2b.add(C2b);
	  var P2b=Q2b.add(M2b);
	  $r(P2b.add(O2b));break;
	 case 2:
	  var R2b=N2b.v[0];
	  var T2b=A2b.add(C2b);
	  var S2b=T2b.add(M2b);
	  $r(S2b.add(R2b));break;
	 }
	},[A2b,C2b,M2b]);break;
       }
      },[y2b,A2b,C2b]);break;
     case 2:
      var U2b=B2b.v[0];
      $M(x2b,function(V2b){
       switch(V2b.g){
       case 1:
	var W2b=V2b.v[0];
	$M(y2b,function(X2b){
	 switch(X2b.g){
	 case 1:
	  var Y2b=X2b.v[0];
	  var a2c=A2b.add(U2b);
	  var Z2b=a2c.add(W2b);
	  $r(Z2b.add(Y2b));break;
	 case 2:
	  var b2c=X2b.v[0];
	  var d2c=A2b.add(U2b);
	  var c2c=d2c.add(W2b);
	  $r(c2c.add(b2c));break;
	 }
	},[A2b,U2b,W2b]);break;
       case 2:
	var e2c=V2b.v[0];
	$M(y2b,function(f2c){
	 switch(f2c.g){
	 case 1:
	  var g2c=f2c.v[0];
	  var i2c=A2b.add(U2b);
	  var h2c=i2c.add(e2c);
	  $r(h2c.add(g2c));break;
	 case 2:
	  var j2c=f2c.v[0];
	  var l2c=A2b.add(U2b);
	  var k2c=l2c.add(e2c);
	  $r(k2c.add(j2c));break;
	 }
	},[A2b,U2b,e2c]);break;
       }
      },[y2b,A2b,U2b]);break;
     }
    },[x2b,y2b,A2b]);
   },[w2b,x2b,y2b],"$w$j");
   $M(v2b,function(m2c){
    switch(m2c.g){
    case 1:
     var n2c=m2c.v[0];
     z2b.J(n2c);break;
    case 2:
     var o2c=m2c.v[0];
     z2b.J(o2c);break;
    }
   },[w2b,x2b,y2b,z2b]);break;
  }
 },[]);
},"$wa");
var $$DataziSequence$W=$F(3,function(p2c,q2c,r2c){
 $$DataziSequence$V.C([p2c],function(w2c){
  $M(q2c,function(s2c){
   switch(s2c.g){
   case 1:
    $$DataziSequence$V.C([r2c],function(x2c){
     $M(p2c,function(t2c){
      $M(r2c,function(u2c){
       var v2c=w2c.add(x2c);
       $R(3,[v2c,t2c,$$DataziSequence_Empty,u2c],"Deep");
      },[w2c,x2c,t2c]);
     },[r2c,w2c,x2c]);
    },[p2c,r2c,w2c]);break;
   case 2:
    var y2c=s2c.v[0];
    $M(y2c,function(z2c){
     switch(z2c.g){
     case 1:
      var A2c=z2c.v[0];
      $$DataziSequence$V.C([r2c],function(F2c){
       $M(p2c,function(B2c){
	$M(r2c,function(C2c){
	 var E2c=w2c.add(A2c);
	 var D2c=E2c.add(F2c);
	 $R(3,[D2c,B2c,s2c,C2c],"Deep");
	},[w2c,A2c,F2c,B2c,s2c]);
       },[r2c,w2c,A2c,F2c,s2c]);
      },[p2c,r2c,w2c,A2c,s2c]);break;
     case 2:
      var G2c=z2c.v[0];
      $$DataziSequence$V.C([r2c],function(L2c){
       $M(p2c,function(H2c){
	$M(r2c,function(I2c){
	 var K2c=w2c.add(G2c);
	 var J2c=K2c.add(L2c);
	 $R(3,[J2c,H2c,s2c,I2c],"Deep");
	},[w2c,s2c,G2c,L2c,H2c]);
       },[r2c,w2c,s2c,G2c,L2c]);
      },[p2c,r2c,w2c,s2c,G2c]);break;
     }
    },[p2c,r2c,w2c,s2c]);break;
   case 3:
    var M2c=s2c.v[0];
    $$DataziSequence$V.C([r2c],function(R2c){
     $M(p2c,function(N2c){
      $M(r2c,function(O2c){
       var Q2c=w2c.add(M2c);
       var P2c=Q2c.add(R2c);
       $R(3,[P2c,N2c,s2c,O2c],"Deep");
      },[w2c,s2c,M2c,R2c,N2c]);
     },[r2c,w2c,s2c,M2c,R2c]);
    },[p2c,r2c,w2c,s2c,M2c]);break;
   }
  },[p2c,r2c,w2c]);
 },[p2c,q2c,r2c]);
},"at libraries/containers/Data/Sequence.hs:314:1");
var $$DataziSequence$X=$F(1,function(S2c){
 $M(S2c,function(T2c){
  switch(T2c.g){
  case 1:
   var U2c=T2c.v[0];
   $M(U2c,function(V2c){
    switch(V2c.g){
    case 1:
     var W2c=V2c.v[0];
     $A(W2c);break;
    case 2:
     var X2c=V2c.v[0];
     $A(X2c);break;
    }
   },[]);break;
  case 2:
   var Y2c=T2c.v[0],Z2c=T2c.v[1];
   $M(Y2c,function(a2d){
    switch(a2d.g){
    case 1:
     var b2d=a2d.v[0];
     $M(Z2c,function(c2d){
      switch(c2d.g){
      case 1:
       var d2d=c2d.v[0];
       $r(b2d.add(d2d));break;
      case 2:
       var e2d=c2d.v[0];
       $r(b2d.add(e2d));break;
      }
     },[b2d]);break;
    case 2:
     var f2d=a2d.v[0];
     $M(Z2c,function(g2d){
      switch(g2d.g){
      case 1:
       var h2d=g2d.v[0];
       $r(f2d.add(h2d));break;
      case 2:
       var i2d=g2d.v[0];
       $r(f2d.add(i2d));break;
      }
     },[f2d]);break;
    }
   },[Z2c]);break;
  case 3:
   var j2d=T2c.v[0],k2d=T2c.v[1],l2d=T2c.v[2];
   $M(j2d,function(m2d){
    switch(m2d.g){
    case 1:
     var n2d=m2d.v[0];
     $M(k2d,function(o2d){
      switch(o2d.g){
      case 1:
       var p2d=o2d.v[0];
       $M(l2d,function(q2d){
	switch(q2d.g){
	case 1:
	 var r2d=q2d.v[0];
	 var s2d=n2d.add(p2d);
	 $r(s2d.add(r2d));break;
	case 2:
	 var t2d=q2d.v[0];
	 var u2d=n2d.add(p2d);
	 $r(u2d.add(t2d));break;
	}
       },[n2d,p2d]);break;
      case 2:
       var v2d=o2d.v[0];
       $M(l2d,function(w2d){
	switch(w2d.g){
	case 1:
	 var x2d=w2d.v[0];
	 var y2d=n2d.add(v2d);
	 $r(y2d.add(x2d));break;
	case 2:
	 var z2d=w2d.v[0];
	 var A2d=n2d.add(v2d);
	 $r(A2d.add(z2d));break;
	}
       },[n2d,v2d]);break;
      }
     },[l2d,n2d]);break;
    case 2:
     var B2d=m2d.v[0];
     $M(k2d,function(C2d){
      switch(C2d.g){
      case 1:
       var D2d=C2d.v[0];
       $M(l2d,function(E2d){
	switch(E2d.g){
	case 1:
	 var F2d=E2d.v[0];
	 var G2d=B2d.add(D2d);
	 $r(G2d.add(F2d));break;
	case 2:
	 var H2d=E2d.v[0];
	 var I2d=B2d.add(D2d);
	 $r(I2d.add(H2d));break;
	}
       },[B2d,D2d]);break;
      case 2:
       var J2d=C2d.v[0];
       $M(l2d,function(K2d){
	switch(K2d.g){
	case 1:
	 var L2d=K2d.v[0];
	 var M2d=B2d.add(J2d);
	 $r(M2d.add(L2d));break;
	case 2:
	 var N2d=K2d.v[0];
	 var O2d=B2d.add(J2d);
	 $r(O2d.add(N2d));break;
	}
       },[B2d,J2d]);break;
      }
     },[l2d,B2d]);break;
    }
   },[k2d,l2d]);break;
  case 4:
   var P2d=T2c.v[0],Q2d=T2c.v[1],R2d=T2c.v[2],S2d=T2c.v[3];
   var T2d=$f(1,function(U2d){
    $M(Q2d,function(V2d){
     switch(V2d.g){
     case 1:
      var W2d=V2d.v[0];
      $M(R2d,function(X2d){
       switch(X2d.g){
       case 1:
	var Y2d=X2d.v[0];
	$M(S2d,function(Z2d){
	 switch(Z2d.g){
	 case 1:
	  var a2e=Z2d.v[0];
	  var c2e=U2d.add(W2d);
	  var b2e=c2e.add(Y2d);
	  $r(b2e.add(a2e));break;
	 case 2:
	  var d2e=Z2d.v[0];
	  var f2e=U2d.add(W2d);
	  var e2e=f2e.add(Y2d);
	  $r(e2e.add(d2e));break;
	 }
	},[U2d,W2d,Y2d]);break;
       case 2:
	var g2e=X2d.v[0];
	$M(S2d,function(h2e){
	 switch(h2e.g){
	 case 1:
	  var i2e=h2e.v[0];
	  var k2e=U2d.add(W2d);
	  var j2e=k2e.add(g2e);
	  $r(j2e.add(i2e));break;
	 case 2:
	  var l2e=h2e.v[0];
	  var n2e=U2d.add(W2d);
	  var m2e=n2e.add(g2e);
	  $r(m2e.add(l2e));break;
	 }
	},[U2d,W2d,g2e]);break;
       }
      },[S2d,U2d,W2d]);break;
     case 2:
      var o2e=V2d.v[0];
      $M(R2d,function(p2e){
       switch(p2e.g){
       case 1:
	var q2e=p2e.v[0];
	$M(S2d,function(r2e){
	 switch(r2e.g){
	 case 1:
	  var s2e=r2e.v[0];
	  var u2e=U2d.add(o2e);
	  var t2e=u2e.add(q2e);
	  $r(t2e.add(s2e));break;
	 case 2:
	  var v2e=r2e.v[0];
	  var x2e=U2d.add(o2e);
	  var w2e=x2e.add(q2e);
	  $r(w2e.add(v2e));break;
	 }
	},[U2d,o2e,q2e]);break;
       case 2:
	var y2e=p2e.v[0];
	$M(S2d,function(z2e){
	 switch(z2e.g){
	 case 1:
	  var A2e=z2e.v[0];
	  var C2e=U2d.add(o2e);
	  var B2e=C2e.add(y2e);
	  $r(B2e.add(A2e));break;
	 case 2:
	  var D2e=z2e.v[0];
	  var F2e=U2d.add(o2e);
	  var E2e=F2e.add(y2e);
	  $r(E2e.add(D2e));break;
	 }
	},[U2d,o2e,y2e]);break;
       }
      },[S2d,U2d,o2e]);break;
     }
    },[R2d,S2d,U2d]);
   },[Q2d,R2d,S2d],"$w$j");
   $M(P2d,function(G2e){
    switch(G2e.g){
    case 1:
     var H2e=G2e.v[0];
     T2d.J(H2e);break;
    case 2:
     var I2e=G2e.v[0];
     T2d.J(I2e);break;
    }
   },[Q2d,R2d,S2d,T2d]);break;
  }
 },[]);
},"$wa1");
var $$DataziSequence$Y=$F(3,function(J2e,K2e,L2e){
 $M(J2e,function(M2e){
  switch(M2e.g){
  case 1:
   var N2e=$f(1,function(O2e){
    $$DataziSequence$R.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,K2e],function(P2e){
     switch(P2e.g){
     case 1:
      $$DataziSequence$u.J(O2e,L2e);break;
     case 2:
      var Q2e=P2e.v[0],R2e=P2e.v[1];
      $b(function(){
       $M(Q2e,function(U2e){
	switch(U2e.g){
	case 1:
	 var V2e=U2e.v[1],W2e=U2e.v[2];
	 $R(2,[V2e,W2e],"Two");break;
	case 2:
	 var X2e=U2e.v[1],Y2e=U2e.v[2],Z2e=U2e.v[3];
	 $R(3,[X2e,Y2e,Z2e],"Three");break;
	}
       },[O2e,L2e,R2e]);
      },[],function(S2e){
       $M(L2e,function(T2e){
	$R(3,[O2e,S2e,R2e,T2e],"Deep");
       },[O2e,S2e,R2e]);
      },[O2e,L2e,R2e]);break;
     }
    },[O2e,L2e]);
   },[K2e,L2e],"$j");
   $M(K2e,function(a2f){
    switch(a2f.g){
    case 1:
     $$DataziSequence$X.C([L2e],function(b2f){
      N2e.J(b2f);
     },[K2e,L2e,N2e]);break;
    case 2:
     var c2f=a2f.v[0];
     $M(c2f,function(d2f){
      switch(d2f.g){
      case 1:
       var e2f=d2f.v[0];
       $$DataziSequence$X.C([L2e],function(g2f){
	var f2f=e2f.add(g2f);
	N2e.J(f2f);
       },[K2e,L2e,N2e,e2f]);break;
      case 2:
       var h2f=d2f.v[0];
       $$DataziSequence$X.C([L2e],function(j2f){
	var i2f=h2f.add(j2f);
	N2e.J(i2f);
       },[K2e,L2e,N2e,h2f]);break;
      }
     },[K2e,L2e,N2e]);break;
    case 3:
     var k2f=a2f.v[0];
     $$DataziSequence$X.C([L2e],function(m2f){
      var l2f=k2f.add(m2f);
      N2e.J(l2f);
     },[K2e,L2e,N2e,k2f]);break;
    }
   },[K2e,L2e,N2e]);break;
  case 2:
   var n2f=M2e.v[0];
   $$DataziSequence$W.J(n2f,K2e,L2e);break;
  }
 },[K2e,L2e]);
},"at libraries/containers/Data/Sequence.hs:331:1");
var $$DataziSequence$Z=$F(1,function(o2f){
 $M(o2f,function(p2f){
  switch(p2f.g){
  case 1:
   var q2f=p2f.v[0];
   $M(q2f,function(r2f){
    switch(r2f.g){
    case 1:
     var s2f=r2f.v[0];
     $A(s2f);break;
    case 2:
     var t2f=r2f.v[0];
     $A(t2f);break;
    }
   },[]);break;
  case 2:
   var u2f=p2f.v[0],v2f=p2f.v[1];
   $M(u2f,function(w2f){
    switch(w2f.g){
    case 1:
     var x2f=w2f.v[0];
     $M(v2f,function(y2f){
      switch(y2f.g){
      case 1:
       var z2f=y2f.v[0];
       $r(x2f.add(z2f));break;
      case 2:
       var A2f=y2f.v[0];
       $r(x2f.add(A2f));break;
      }
     },[x2f]);break;
    case 2:
     var B2f=w2f.v[0];
     $M(v2f,function(C2f){
      switch(C2f.g){
      case 1:
       var D2f=C2f.v[0];
       $r(B2f.add(D2f));break;
      case 2:
       var E2f=C2f.v[0];
       $r(B2f.add(E2f));break;
      }
     },[B2f]);break;
    }
   },[v2f]);break;
  case 3:
   var F2f=p2f.v[0],G2f=p2f.v[1],H2f=p2f.v[2];
   $M(F2f,function(I2f){
    switch(I2f.g){
    case 1:
     var J2f=I2f.v[0];
     $M(G2f,function(K2f){
      switch(K2f.g){
      case 1:
       var L2f=K2f.v[0];
       $M(H2f,function(M2f){
	switch(M2f.g){
	case 1:
	 var N2f=M2f.v[0];
	 var O2f=J2f.add(L2f);
	 $r(O2f.add(N2f));break;
	case 2:
	 var P2f=M2f.v[0];
	 var Q2f=J2f.add(L2f);
	 $r(Q2f.add(P2f));break;
	}
       },[J2f,L2f]);break;
      case 2:
       var R2f=K2f.v[0];
       $M(H2f,function(S2f){
	switch(S2f.g){
	case 1:
	 var T2f=S2f.v[0];
	 var U2f=J2f.add(R2f);
	 $r(U2f.add(T2f));break;
	case 2:
	 var V2f=S2f.v[0];
	 var W2f=J2f.add(R2f);
	 $r(W2f.add(V2f));break;
	}
       },[J2f,R2f]);break;
      }
     },[H2f,J2f]);break;
    case 2:
     var X2f=I2f.v[0];
     $M(G2f,function(Y2f){
      switch(Y2f.g){
      case 1:
       var Z2f=Y2f.v[0];
       $M(H2f,function(a2g){
	switch(a2g.g){
	case 1:
	 var b2g=a2g.v[0];
	 var c2g=X2f.add(Z2f);
	 $r(c2g.add(b2g));break;
	case 2:
	 var d2g=a2g.v[0];
	 var e2g=X2f.add(Z2f);
	 $r(e2g.add(d2g));break;
	}
       },[X2f,Z2f]);break;
      case 2:
       var f2g=Y2f.v[0];
       $M(H2f,function(g2g){
	switch(g2g.g){
	case 1:
	 var h2g=g2g.v[0];
	 var i2g=X2f.add(f2g);
	 $r(i2g.add(h2g));break;
	case 2:
	 var j2g=g2g.v[0];
	 var k2g=X2f.add(f2g);
	 $r(k2g.add(j2g));break;
	}
       },[X2f,f2g]);break;
      }
     },[H2f,X2f]);break;
    }
   },[G2f,H2f]);break;
  case 4:
   var l2g=p2f.v[0],m2g=p2f.v[1],n2g=p2f.v[2],o2g=p2f.v[3];
   var p2g=$f(1,function(q2g){
    $M(m2g,function(r2g){
     switch(r2g.g){
     case 1:
      var s2g=r2g.v[0];
      $M(n2g,function(t2g){
       switch(t2g.g){
       case 1:
	var u2g=t2g.v[0];
	$M(o2g,function(v2g){
	 switch(v2g.g){
	 case 1:
	  var w2g=v2g.v[0];
	  var y2g=q2g.add(s2g);
	  var x2g=y2g.add(u2g);
	  $r(x2g.add(w2g));break;
	 case 2:
	  var z2g=v2g.v[0];
	  var B2g=q2g.add(s2g);
	  var A2g=B2g.add(u2g);
	  $r(A2g.add(z2g));break;
	 }
	},[q2g,s2g,u2g]);break;
       case 2:
	var C2g=t2g.v[0];
	$M(o2g,function(D2g){
	 switch(D2g.g){
	 case 1:
	  var E2g=D2g.v[0];
	  var G2g=q2g.add(s2g);
	  var F2g=G2g.add(C2g);
	  $r(F2g.add(E2g));break;
	 case 2:
	  var H2g=D2g.v[0];
	  var J2g=q2g.add(s2g);
	  var I2g=J2g.add(C2g);
	  $r(I2g.add(H2g));break;
	 }
	},[q2g,s2g,C2g]);break;
       }
      },[o2g,q2g,s2g]);break;
     case 2:
      var K2g=r2g.v[0];
      $M(n2g,function(L2g){
       switch(L2g.g){
       case 1:
	var M2g=L2g.v[0];
	$M(o2g,function(N2g){
	 switch(N2g.g){
	 case 1:
	  var O2g=N2g.v[0];
	  var Q2g=q2g.add(K2g);
	  var P2g=Q2g.add(M2g);
	  $r(P2g.add(O2g));break;
	 case 2:
	  var R2g=N2g.v[0];
	  var T2g=q2g.add(K2g);
	  var S2g=T2g.add(M2g);
	  $r(S2g.add(R2g));break;
	 }
	},[q2g,K2g,M2g]);break;
       case 2:
	var U2g=L2g.v[0];
	$M(o2g,function(V2g){
	 switch(V2g.g){
	 case 1:
	  var W2g=V2g.v[0];
	  var Y2g=q2g.add(K2g);
	  var X2g=Y2g.add(U2g);
	  $r(X2g.add(W2g));break;
	 case 2:
	  var Z2g=V2g.v[0];
	  var b2h=q2g.add(K2g);
	  var a2h=b2h.add(U2g);
	  $r(a2h.add(Z2g));break;
	 }
	},[q2g,K2g,U2g]);break;
       }
      },[o2g,q2g,K2g]);break;
     }
    },[n2g,o2g,q2g]);
   },[m2g,n2g,o2g],"$w$j");
   $M(l2g,function(c2h){
    switch(c2h.g){
    case 1:
     var d2h=c2h.v[0];
     p2g.J(d2h);break;
    case 2:
     var e2h=c2h.v[0];
     p2g.J(e2h);break;
    }
   },[m2g,n2g,o2g,p2g]);break;
  }
 },[]);
},"$wa2");
var $$DataziSequence$a1=$F(3,function(f2h,g2h,h2h){
 $M(h2h,function(i2h){
  switch(i2h.g){
  case 1:
   var j2h=$f(1,function(k2h){
    $$DataziSequence$T.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,g2h],function(l2h){
     switch(l2h.g){
     case 1:
      $$DataziSequence$u.J(k2h,f2h);break;
     case 2:
      var m2h=l2h.v[0],n2h=l2h.v[1];
      $M(f2h,function(o2h){
       $b(function(){
	$M(n2h,function(q2h){
	 switch(q2h.g){
	 case 1:
	  var r2h=q2h.v[1],s2h=q2h.v[2];
	  $R(2,[r2h,s2h],"Two");break;
	 case 2:
	  var t2h=q2h.v[1],u2h=q2h.v[2],v2h=q2h.v[3];
	  $R(3,[t2h,u2h,v2h],"Three");break;
	 }
	},[k2h,o2h,m2h]);
       },[],function(p2h){
	$R(3,[k2h,o2h,m2h,p2h],"Deep");
       },[k2h,o2h,m2h]);
      },[k2h,n2h,m2h]);break;
     }
    },[k2h,f2h]);
   },[g2h,f2h],"$j");
   $M(g2h,function(w2h){
    switch(w2h.g){
    case 1:
     $$DataziSequence$Z.C([f2h],function(x2h){
      j2h.J(x2h);
     },[g2h,f2h,j2h]);break;
    case 2:
     var y2h=w2h.v[0];
     $M(y2h,function(z2h){
      switch(z2h.g){
      case 1:
       var A2h=z2h.v[0];
       $$DataziSequence$Z.C([f2h],function(C2h){
	var B2h=A2h.add(C2h);
	j2h.J(B2h);
       },[g2h,f2h,j2h,A2h]);break;
      case 2:
       var D2h=z2h.v[0];
       $$DataziSequence$Z.C([f2h],function(F2h){
	var E2h=D2h.add(F2h);
	j2h.J(E2h);
       },[g2h,f2h,j2h,D2h]);break;
      }
     },[g2h,f2h,j2h]);break;
    case 3:
     var G2h=w2h.v[0];
     $$DataziSequence$Z.C([f2h],function(I2h){
      var H2h=G2h.add(I2h);
      j2h.J(H2h);
     },[g2h,f2h,j2h,G2h]);break;
    }
   },[g2h,f2h,j2h]);break;
  case 2:
   var J2h=i2h.v[0];
   $$DataziSequence$W.J(f2h,g2h,J2h);break;
  }
 },[g2h,f2h]);
},"at libraries/containers/Data/Sequence.hs:337:1");
var $$DataziSequence$b1=$F(1,function(K2h){
 $M(K2h,function(L2h){
  switch(L2h.g){
  case 1:
   var M2h=L2h.v[0];
   $R(2,[M2h],"Single");break;
  case 2:
   var N2h=L2h.v[0],O2h=L2h.v[1];
   $M(N2h,function(P2h){
    switch(P2h.g){
    case 1:
     var Q2h=P2h.v[0];
     $M(O2h,function(R2h){
      switch(R2h.g){
      case 1:
       var S2h=R2h.v[0];
       var T2h=$d(1,[R2h],"sat");
       var U2h=$d(1,[P2h],"sat");
       var V2h=Q2h.add(S2h);
       $R(3,[V2h,U2h,$$DataziSequence_Empty,T2h],"Deep");break;
      case 2:
       var W2h=R2h.v[0];
       var X2h=$d(1,[R2h],"sat");
       var Y2h=$d(1,[P2h],"sat");
       var Z2h=Q2h.add(W2h);
       $R(3,[Z2h,Y2h,$$DataziSequence_Empty,X2h],"Deep");break;
      }
     },[Q2h,P2h]);break;
    case 2:
     var a2i=P2h.v[0];
     $M(O2h,function(b2i){
      switch(b2i.g){
      case 1:
       var c2i=b2i.v[0];
       var d2i=$d(1,[b2i],"sat");
       var e2i=$d(1,[P2h],"sat");
       var f2i=a2i.add(c2i);
       $R(3,[f2i,e2i,$$DataziSequence_Empty,d2i],"Deep");break;
      case 2:
       var g2i=b2i.v[0];
       var h2i=$d(1,[b2i],"sat");
       var i2i=$d(1,[P2h],"sat");
       var j2i=a2i.add(g2i);
       $R(3,[j2i,i2i,$$DataziSequence_Empty,h2i],"Deep");break;
      }
     },[P2h,a2i]);break;
    }
   },[O2h]);break;
  case 3:
   var k2i=L2h.v[0],l2i=L2h.v[1],m2i=L2h.v[2];
   $M(k2i,function(n2i){
    switch(n2i.g){
    case 1:
     var o2i=n2i.v[0];
     $M(l2i,function(p2i){
      switch(p2i.g){
      case 1:
       var q2i=p2i.v[0];
       $M(m2i,function(r2i){
	switch(r2i.g){
	case 1:
	 var s2i=r2i.v[0];
	 var t2i=$d(1,[r2i],"sat");
	 var u2i=$d(2,[n2i,p2i],"sat");
	 var w2i=o2i.add(q2i);
	 var v2i=w2i.add(s2i);
	 $R(3,[v2i,u2i,$$DataziSequence_Empty,t2i],"Deep");break;
	case 2:
	 var x2i=r2i.v[0];
	 var y2i=$d(1,[r2i],"sat");
	 var z2i=$d(2,[n2i,p2i],"sat");
	 var B2i=o2i.add(q2i);
	 var A2i=B2i.add(x2i);
	 $R(3,[A2i,z2i,$$DataziSequence_Empty,y2i],"Deep");break;
	}
       },[o2i,q2i,n2i,p2i]);break;
      case 2:
       var C2i=p2i.v[0];
       $M(m2i,function(D2i){
	switch(D2i.g){
	case 1:
	 var E2i=D2i.v[0];
	 var F2i=$d(1,[D2i],"sat");
	 var G2i=$d(2,[n2i,p2i],"sat");
	 var I2i=o2i.add(C2i);
	 var H2i=I2i.add(E2i);
	 $R(3,[H2i,G2i,$$DataziSequence_Empty,F2i],"Deep");break;
	case 2:
	 var J2i=D2i.v[0];
	 var K2i=$d(1,[D2i],"sat");
	 var L2i=$d(2,[n2i,p2i],"sat");
	 var N2i=o2i.add(C2i);
	 var M2i=N2i.add(J2i);
	 $R(3,[M2i,L2i,$$DataziSequence_Empty,K2i],"Deep");break;
	}
       },[o2i,n2i,p2i,C2i]);break;
      }
     },[m2i,o2i,n2i]);break;
    case 2:
     var O2i=n2i.v[0];
     $M(l2i,function(P2i){
      switch(P2i.g){
      case 1:
       var Q2i=P2i.v[0];
       $M(m2i,function(R2i){
	switch(R2i.g){
	case 1:
	 var S2i=R2i.v[0];
	 var T2i=$d(1,[R2i],"sat");
	 var U2i=$d(2,[n2i,P2i],"sat");
	 var W2i=O2i.add(Q2i);
	 var V2i=W2i.add(S2i);
	 $R(3,[V2i,U2i,$$DataziSequence_Empty,T2i],"Deep");break;
	case 2:
	 var X2i=R2i.v[0];
	 var Y2i=$d(1,[R2i],"sat");
	 var Z2i=$d(2,[n2i,P2i],"sat");
	 var b2j=O2i.add(Q2i);
	 var a2j=b2j.add(X2i);
	 $R(3,[a2j,Z2i,$$DataziSequence_Empty,Y2i],"Deep");break;
	}
       },[n2i,O2i,Q2i,P2i]);break;
      case 2:
       var c2j=P2i.v[0];
       $M(m2i,function(d2j){
	switch(d2j.g){
	case 1:
	 var e2j=d2j.v[0];
	 var f2j=$d(1,[d2j],"sat");
	 var g2j=$d(2,[n2i,P2i],"sat");
	 var i2j=O2i.add(c2j);
	 var h2j=i2j.add(e2j);
	 $R(3,[h2j,g2j,$$DataziSequence_Empty,f2j],"Deep");break;
	case 2:
	 var j2j=d2j.v[0];
	 var k2j=$d(1,[d2j],"sat");
	 var l2j=$d(2,[n2i,P2i],"sat");
	 var n2j=O2i.add(c2j);
	 var m2j=n2j.add(j2j);
	 $R(3,[m2j,l2j,$$DataziSequence_Empty,k2j],"Deep");break;
	}
       },[n2i,O2i,P2i,c2j]);break;
      }
     },[m2i,n2i,O2i]);break;
    }
   },[l2i,m2i]);break;
  case 4:
   var o2j=L2h.v[0],p2j=L2h.v[1],q2j=L2h.v[2],r2j=L2h.v[3];
   var s2j=$f(1,function(t2j){
    $M(q2j,function(u2j){
     switch(u2j.g){
     case 1:
      var v2j=u2j.v[0];
      $M(r2j,function(w2j){
       switch(w2j.g){
       case 1:
	var x2j=w2j.v[0];
	var y2j=$d(2,[u2j,w2j],"sat");
	var z2j=$d(2,[o2j,p2j],"sat");
	var B2j=v2j.add(x2j);
	var A2j=t2j.add(B2j);
	$R(3,[A2j,z2j,$$DataziSequence_Empty,y2j],"Deep");break;
       case 2:
	var C2j=w2j.v[0];
	var D2j=$d(2,[u2j,w2j],"sat");
	var E2j=$d(2,[o2j,p2j],"sat");
	var G2j=v2j.add(C2j);
	var F2j=t2j.add(G2j);
	$R(3,[F2j,E2j,$$DataziSequence_Empty,D2j],"Deep");break;
       }
      },[t2j,v2j,o2j,p2j,u2j]);break;
     case 2:
      var H2j=u2j.v[0];
      $M(r2j,function(I2j){
       switch(I2j.g){
       case 1:
	var J2j=I2j.v[0];
	var K2j=$d(2,[u2j,I2j],"sat");
	var L2j=$d(2,[o2j,p2j],"sat");
	var N2j=H2j.add(J2j);
	var M2j=t2j.add(N2j);
	$R(3,[M2j,L2j,$$DataziSequence_Empty,K2j],"Deep");break;
       case 2:
	var O2j=I2j.v[0];
	var P2j=$d(2,[u2j,I2j],"sat");
	var Q2j=$d(2,[o2j,p2j],"sat");
	var S2j=H2j.add(O2j);
	var R2j=t2j.add(S2j);
	$R(3,[R2j,Q2j,$$DataziSequence_Empty,P2j],"Deep");break;
       }
      },[t2j,o2j,p2j,u2j,H2j]);break;
     }
    },[r2j,t2j,o2j,p2j]);
   },[q2j,r2j,o2j,p2j],"$j");
   $M(o2j,function(T2j){
    switch(T2j.g){
    case 1:
     var U2j=T2j.v[0];
     $M(p2j,function(V2j){
      switch(V2j.g){
      case 1:
       var W2j=V2j.v[0];
       var X2j=U2j.add(W2j);
       s2j.J(X2j);break;
      case 2:
       var Y2j=V2j.v[0];
       var Z2j=U2j.add(Y2j);
       s2j.J(Z2j);break;
      }
     },[q2j,r2j,o2j,p2j,s2j,U2j]);break;
    case 2:
     var a2k=T2j.v[0];
     $M(p2j,function(b2k){
      switch(b2k.g){
      case 1:
       var c2k=b2k.v[0];
       var d2k=a2k.add(c2k);
       s2j.J(d2k);break;
      case 2:
       var e2k=b2k.v[0];
       var f2k=a2k.add(e2k);
       s2j.J(f2k);break;
      }
     },[q2j,r2j,o2j,p2j,s2j,a2k]);break;
    }
   },[q2j,r2j,o2j,p2j,s2j]);break;
  }
 },[]);
},"at libraries/containers/Data/Sequence.hs:393:1");
var $$DataziSequence$q1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("lookupTree of empty tree");
},"lvl17");
var $$DataziSequence$r1=$T(function(){
 $$GHCziErr_error.J($$DataziSequence$q1);
},"lvl18");
var $$DataziSequence$s1=$F(2,function(c3w,d3w){
 $M(d3w,function(e3w){
  switch(e3w.g){
  case 1:
   $A($$DataziSequence$r1);break;
  case 2:
   var f3w=e3w.v[0];
   $r([c3w,f3w]);break;
  case 3:
   var g3w=e3w.v[1],h3w=e3w.v[2],i3w=e3w.v[3];
   var j3w=$f(1,function(k3w){
    var l3w=c3w.lessThan(k3w)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(l3w.g){
    case 1:
     var m3w=$f(1,function(n3w){
      var o3w=c3w.lessThan(n3w)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(o3w.g){
      case 1:
       var r3w=c3w.subtract(n3w);
       $M(i3w,function(p3w){
	switch(p3w.g){
	case 1:
	 var q3w=p3w.v[0];
	 $r([r3w,q3w]);break;
	case 2:
	 var s3w=p3w.v[0],t3w=p3w.v[1];
	 $M(s3w,function(u3w){
	  switch(u3w.g){
	  case 1:
	   var v3w=u3w.v[0];
	   var w3w=r3w.lessThan(v3w)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(w3w.g){
	   case 1:
	    var x3w=r3w.subtract(v3w);
	    $r([x3w,t3w]);break;
	   case 2:
	    $r([r3w,u3w]);break;
	   }break;
	  case 2:
	   var y3w=u3w.v[0];
	   var z3w=r3w.lessThan(y3w)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(z3w.g){
	   case 1:
	    var A3w=r3w.subtract(y3w);
	    $r([A3w,t3w]);break;
	   case 2:
	    $r([r3w,u3w]);break;
	   }break;
	  }
	 },[r3w,t3w]);break;
	case 3:
	 var B3w=p3w.v[0],C3w=p3w.v[1],D3w=p3w.v[2];
	 $M(B3w,function(E3w){
	  switch(E3w.g){
	  case 1:
	   var F3w=E3w.v[0];
	   var G3w=r3w.lessThan(F3w)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(G3w.g){
	   case 1:
	    $M(C3w,function(H3w){
	     switch(H3w.g){
	     case 1:
	      var I3w=H3w.v[0];
	      var L3w=F3w.add(I3w);
	      var J3w=r3w.lessThan(L3w)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(J3w.g){
	      case 1:
	       var K3w=r3w.subtract(L3w);
	       $r([K3w,D3w]);break;
	      case 2:
	       var M3w=r3w.subtract(F3w);
	       $r([M3w,H3w]);break;
	      }break;
	     case 2:
	      var N3w=H3w.v[0];
	      var Q3w=F3w.add(N3w);
	      var O3w=r3w.lessThan(Q3w)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(O3w.g){
	      case 1:
	       var P3w=r3w.subtract(Q3w);
	       $r([P3w,D3w]);break;
	      case 2:
	       var R3w=r3w.subtract(F3w);
	       $r([R3w,H3w]);break;
	      }break;
	     }
	    },[r3w,F3w,D3w]);break;
	   case 2:
	    $r([r3w,E3w]);break;
	   }break;
	  case 2:
	   var S3w=E3w.v[0];
	   var T3w=r3w.lessThan(S3w)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(T3w.g){
	   case 1:
	    $M(C3w,function(U3w){
	     switch(U3w.g){
	     case 1:
	      var V3w=U3w.v[0];
	      var Y3w=S3w.add(V3w);
	      var W3w=r3w.lessThan(Y3w)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(W3w.g){
	      case 1:
	       var X3w=r3w.subtract(Y3w);
	       $r([X3w,D3w]);break;
	      case 2:
	       var Z3w=r3w.subtract(S3w);
	       $r([Z3w,U3w]);break;
	      }break;
	     case 2:
	      var a3x=U3w.v[0];
	      var d3x=S3w.add(a3x);
	      var b3x=r3w.lessThan(d3x)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(b3x.g){
	      case 1:
	       var c3x=r3w.subtract(d3x);
	       $r([c3x,D3w]);break;
	      case 2:
	       var e3x=r3w.subtract(S3w);
	       $r([e3x,U3w]);break;
	      }break;
	     }
	    },[r3w,D3w,S3w]);break;
	   case 2:
	    $r([r3w,E3w]);break;
	   }break;
	  }
	 },[r3w,C3w,D3w]);break;
	case 4:
	 var f3x=p3w.v[0],g3x=p3w.v[1],h3x=p3w.v[2],i3x=p3w.v[3];
	 $M(f3x,function(j3x){
	  switch(j3x.g){
	  case 1:
	   var k3x=j3x.v[0];
	   var l3x=r3w.lessThan(k3x)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(l3x.g){
	   case 1:
	    $M(g3x,function(m3x){
	     switch(m3x.g){
	     case 1:
	      var n3x=m3x.v[0];
	      var v3x=k3x.add(n3x);
	      var o3x=r3w.lessThan(v3x)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(o3x.g){
	      case 1:
	       $M(h3x,function(p3x){
		switch(p3x.g){
		case 1:
		 var q3x=p3x.v[0];
		 var t3x=v3x.add(q3x);
		 var r3x=r3w.lessThan(t3x)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(r3x.g){
		 case 1:
		  var s3x=r3w.subtract(t3x);
		  $r([s3x,i3x]);break;
		 case 2:
		  var u3x=r3w.subtract(v3x);
		  $r([u3x,p3x]);break;
		 }break;
		case 2:
		 var w3x=p3x.v[0];
		 var z3x=v3x.add(w3x);
		 var x3x=r3w.lessThan(z3x)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(x3x.g){
		 case 1:
		  var y3x=r3w.subtract(z3x);
		  $r([y3x,i3x]);break;
		 case 2:
		  var A3x=r3w.subtract(v3x);
		  $r([A3x,p3x]);break;
		 }break;
		}
	       },[r3w,v3x,i3x]);break;
	      case 2:
	       var B3x=r3w.subtract(k3x);
	       $r([B3x,m3x]);break;
	      }break;
	     case 2:
	      var C3x=m3x.v[0];
	      var K3x=k3x.add(C3x);
	      var D3x=r3w.lessThan(K3x)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(D3x.g){
	      case 1:
	       $M(h3x,function(E3x){
		switch(E3x.g){
		case 1:
		 var F3x=E3x.v[0];
		 var I3x=K3x.add(F3x);
		 var G3x=r3w.lessThan(I3x)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(G3x.g){
		 case 1:
		  var H3x=r3w.subtract(I3x);
		  $r([H3x,i3x]);break;
		 case 2:
		  var J3x=r3w.subtract(K3x);
		  $r([J3x,E3x]);break;
		 }break;
		case 2:
		 var L3x=E3x.v[0];
		 var O3x=K3x.add(L3x);
		 var M3x=r3w.lessThan(O3x)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(M3x.g){
		 case 1:
		  var N3x=r3w.subtract(O3x);
		  $r([N3x,i3x]);break;
		 case 2:
		  var P3x=r3w.subtract(K3x);
		  $r([P3x,E3x]);break;
		 }break;
		}
	       },[r3w,i3x,K3x]);break;
	      case 2:
	       var Q3x=r3w.subtract(k3x);
	       $r([Q3x,m3x]);break;
	      }break;
	     }
	    },[r3w,k3x,h3x,i3x]);break;
	   case 2:
	    $r([r3w,j3x]);break;
	   }break;
	  case 2:
	   var R3x=j3x.v[0];
	   var S3x=r3w.lessThan(R3x)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(S3x.g){
	   case 1:
	    $M(g3x,function(T3x){
	     switch(T3x.g){
	     case 1:
	      var U3x=T3x.v[0];
	      var c3y=R3x.add(U3x);
	      var V3x=r3w.lessThan(c3y)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(V3x.g){
	      case 1:
	       $M(h3x,function(W3x){
		switch(W3x.g){
		case 1:
		 var X3x=W3x.v[0];
		 var a3y=c3y.add(X3x);
		 var Y3x=r3w.lessThan(a3y)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Y3x.g){
		 case 1:
		  var Z3x=r3w.subtract(a3y);
		  $r([Z3x,i3x]);break;
		 case 2:
		  var b3y=r3w.subtract(c3y);
		  $r([b3y,W3x]);break;
		 }break;
		case 2:
		 var d3y=W3x.v[0];
		 var g3y=c3y.add(d3y);
		 var e3y=r3w.lessThan(g3y)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(e3y.g){
		 case 1:
		  var f3y=r3w.subtract(g3y);
		  $r([f3y,i3x]);break;
		 case 2:
		  var h3y=r3w.subtract(c3y);
		  $r([h3y,W3x]);break;
		 }break;
		}
	       },[r3w,i3x,c3y]);break;
	      case 2:
	       var i3y=r3w.subtract(R3x);
	       $r([i3y,T3x]);break;
	      }break;
	     case 2:
	      var j3y=T3x.v[0];
	      var r3y=R3x.add(j3y);
	      var k3y=r3w.lessThan(r3y)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(k3y.g){
	      case 1:
	       $M(h3x,function(l3y){
		switch(l3y.g){
		case 1:
		 var m3y=l3y.v[0];
		 var p3y=r3y.add(m3y);
		 var n3y=r3w.lessThan(p3y)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(n3y.g){
		 case 1:
		  var o3y=r3w.subtract(p3y);
		  $r([o3y,i3x]);break;
		 case 2:
		  var q3y=r3w.subtract(r3y);
		  $r([q3y,l3y]);break;
		 }break;
		case 2:
		 var s3y=l3y.v[0];
		 var v3y=r3y.add(s3y);
		 var t3y=r3w.lessThan(v3y)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(t3y.g){
		 case 1:
		  var u3y=r3w.subtract(v3y);
		  $r([u3y,i3x]);break;
		 case 2:
		  var w3y=r3w.subtract(r3y);
		  $r([w3y,l3y]);break;
		 }break;
		}
	       },[r3w,i3x,r3y]);break;
	      case 2:
	       var x3y=r3w.subtract(R3x);
	       $r([x3y,T3x]);break;
	      }break;
	     }
	    },[r3w,h3x,i3x,R3x]);break;
	   case 2:
	    $r([r3w,j3x]);break;
	   }break;
	  }
	 },[r3w,g3x,h3x,i3x]);break;
	}
       },[r3w]);break;
      case 2:
       var p3z=c3w.subtract(k3w);
       $$DataziSequence$s1.C([p3z,h3w],function(y3y){
	var z3y=y3y[0],A3y=y3y[1];
	$M(A3y,function(B3y){
	 switch(B3y.g){
	 case 1:
	  var C3y=B3y.v[1],D3y=B3y.v[2];
	  $M(C3y,function(E3y){
	   switch(E3y.g){
	   case 1:
	    var F3y=E3y.v[0];
	    var G3y=z3y.lessThan(F3y)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(G3y.g){
	    case 1:
	     var H3y=z3y.subtract(F3y);
	     $r([H3y,D3y]);break;
	    case 2:
	     $r([z3y,E3y]);break;
	    }break;
	   case 2:
	    var I3y=E3y.v[0];
	    var J3y=z3y.lessThan(I3y)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(J3y.g){
	    case 1:
	     var K3y=z3y.subtract(I3y);
	     $r([K3y,D3y]);break;
	    case 2:
	     $r([z3y,E3y]);break;
	    }break;
	   }
	  },[z3y,D3y]);break;
	 case 2:
	  var L3y=B3y.v[1],M3y=B3y.v[2],N3y=B3y.v[3];
	  $M(L3y,function(O3y){
	   switch(O3y.g){
	   case 1:
	    var P3y=O3y.v[0];
	    var Q3y=z3y.lessThan(P3y)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Q3y.g){
	    case 1:
	     $M(M3y,function(R3y){
	      switch(R3y.g){
	      case 1:
	       var S3y=R3y.v[0];
	       var V3y=P3y.add(S3y);
	       var T3y=z3y.lessThan(V3y)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(T3y.g){
	       case 1:
		var U3y=z3y.subtract(V3y);
		$r([U3y,N3y]);break;
	       case 2:
		var W3y=z3y.subtract(P3y);
		$r([W3y,R3y]);break;
	       }break;
	      case 2:
	       var X3y=R3y.v[0];
	       var a3z=P3y.add(X3y);
	       var Y3y=z3y.lessThan(a3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Y3y.g){
	       case 1:
		var Z3y=z3y.subtract(a3z);
		$r([Z3y,N3y]);break;
	       case 2:
		var b3z=z3y.subtract(P3y);
		$r([b3z,R3y]);break;
	       }break;
	      }
	     },[z3y,P3y,N3y]);break;
	    case 2:
	     $r([z3y,O3y]);break;
	    }break;
	   case 2:
	    var c3z=O3y.v[0];
	    var d3z=z3y.lessThan(c3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(d3z.g){
	    case 1:
	     $M(M3y,function(e3z){
	      switch(e3z.g){
	      case 1:
	       var f3z=e3z.v[0];
	       var i3z=c3z.add(f3z);
	       var g3z=z3y.lessThan(i3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(g3z.g){
	       case 1:
		var h3z=z3y.subtract(i3z);
		$r([h3z,N3y]);break;
	       case 2:
		var j3z=z3y.subtract(c3z);
		$r([j3z,e3z]);break;
	       }break;
	      case 2:
	       var k3z=e3z.v[0];
	       var n3z=c3z.add(k3z);
	       var l3z=z3y.lessThan(n3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(l3z.g){
	       case 1:
		var m3z=z3y.subtract(n3z);
		$r([m3z,N3y]);break;
	       case 2:
		var o3z=z3y.subtract(c3z);
		$r([o3z,e3z]);break;
	       }break;
	      }
	     },[z3y,N3y,c3z]);break;
	    case 2:
	     $r([z3y,O3y]);break;
	    }break;
	   }
	  },[z3y,M3y,N3y]);break;
	 }
	},[z3y]);
       },[]);break;
      }
     },[c3w,k3w,i3w,h3w],"$w$j1");
     $M(h3w,function(q3z){
      switch(q3z.g){
      case 1:
       m3w.J(k3w);break;
      case 2:
       var r3z=q3z.v[0];
       $M(r3z,function(s3z){
	switch(s3z.g){
	case 1:
	 var t3z=s3z.v[0];
	 var u3z=k3w.add(t3z);
	 m3w.J(u3z);break;
	case 2:
	 var v3z=s3z.v[0];
	 var w3z=k3w.add(v3z);
	 m3w.J(w3z);break;
	}
       },[c3w,k3w,i3w,h3w,m3w]);break;
      case 3:
       var x3z=q3z.v[0];
       var y3z=k3w.add(x3z);
       m3w.J(y3z);break;
      }
     },[c3w,k3w,i3w,h3w,m3w]);break;
    case 2:
     $M(g3w,function(z3z){
      switch(z3z.g){
      case 1:
       var A3z=z3z.v[0];
       $r([c3w,A3z]);break;
      case 2:
       var B3z=z3z.v[0],C3z=z3z.v[1];
       $M(B3z,function(D3z){
	switch(D3z.g){
	case 1:
	 var E3z=D3z.v[0];
	 var F3z=c3w.lessThan(E3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(F3z.g){
	 case 1:
	  var G3z=c3w.subtract(E3z);
	  $r([G3z,C3z]);break;
	 case 2:
	  $r([c3w,D3z]);break;
	 }break;
	case 2:
	 var H3z=D3z.v[0];
	 var I3z=c3w.lessThan(H3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(I3z.g){
	 case 1:
	  var J3z=c3w.subtract(H3z);
	  $r([J3z,C3z]);break;
	 case 2:
	  $r([c3w,D3z]);break;
	 }break;
	}
       },[c3w,C3z]);break;
      case 3:
       var K3z=z3z.v[0],L3z=z3z.v[1],M3z=z3z.v[2];
       $M(K3z,function(N3z){
	switch(N3z.g){
	case 1:
	 var O3z=N3z.v[0];
	 var P3z=c3w.lessThan(O3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(P3z.g){
	 case 1:
	  $M(L3z,function(Q3z){
	   switch(Q3z.g){
	   case 1:
	    var R3z=Q3z.v[0];
	    var U3z=O3z.add(R3z);
	    var S3z=c3w.lessThan(U3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(S3z.g){
	    case 1:
	     var T3z=c3w.subtract(U3z);
	     $r([T3z,M3z]);break;
	    case 2:
	     var V3z=c3w.subtract(O3z);
	     $r([V3z,Q3z]);break;
	    }break;
	   case 2:
	    var W3z=Q3z.v[0];
	    var Z3z=O3z.add(W3z);
	    var X3z=c3w.lessThan(Z3z)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(X3z.g){
	    case 1:
	     var Y3z=c3w.subtract(Z3z);
	     $r([Y3z,M3z]);break;
	    case 2:
	     var a3A=c3w.subtract(O3z);
	     $r([a3A,Q3z]);break;
	    }break;
	   }
	  },[c3w,O3z,M3z]);break;
	 case 2:
	  $r([c3w,N3z]);break;
	 }break;
	case 2:
	 var b3A=N3z.v[0];
	 var c3A=c3w.lessThan(b3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(c3A.g){
	 case 1:
	  $M(L3z,function(d3A){
	   switch(d3A.g){
	   case 1:
	    var e3A=d3A.v[0];
	    var h3A=b3A.add(e3A);
	    var f3A=c3w.lessThan(h3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(f3A.g){
	    case 1:
	     var g3A=c3w.subtract(h3A);
	     $r([g3A,M3z]);break;
	    case 2:
	     var i3A=c3w.subtract(b3A);
	     $r([i3A,d3A]);break;
	    }break;
	   case 2:
	    var j3A=d3A.v[0];
	    var m3A=b3A.add(j3A);
	    var k3A=c3w.lessThan(m3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(k3A.g){
	    case 1:
	     var l3A=c3w.subtract(m3A);
	     $r([l3A,M3z]);break;
	    case 2:
	     var n3A=c3w.subtract(b3A);
	     $r([n3A,d3A]);break;
	    }break;
	   }
	  },[c3w,M3z,b3A]);break;
	 case 2:
	  $r([c3w,N3z]);break;
	 }break;
	}
       },[c3w,L3z,M3z]);break;
      case 4:
       var o3A=z3z.v[0],p3A=z3z.v[1],q3A=z3z.v[2],r3A=z3z.v[3];
       $M(o3A,function(s3A){
	switch(s3A.g){
	case 1:
	 var t3A=s3A.v[0];
	 var u3A=c3w.lessThan(t3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(u3A.g){
	 case 1:
	  $M(p3A,function(v3A){
	   switch(v3A.g){
	   case 1:
	    var w3A=v3A.v[0];
	    var E3A=t3A.add(w3A);
	    var x3A=c3w.lessThan(E3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(x3A.g){
	    case 1:
	     $M(q3A,function(y3A){
	      switch(y3A.g){
	      case 1:
	       var z3A=y3A.v[0];
	       var C3A=E3A.add(z3A);
	       var A3A=c3w.lessThan(C3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(A3A.g){
	       case 1:
		var B3A=c3w.subtract(C3A);
		$r([B3A,r3A]);break;
	       case 2:
		var D3A=c3w.subtract(E3A);
		$r([D3A,y3A]);break;
	       }break;
	      case 2:
	       var F3A=y3A.v[0];
	       var I3A=E3A.add(F3A);
	       var G3A=c3w.lessThan(I3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(G3A.g){
	       case 1:
		var H3A=c3w.subtract(I3A);
		$r([H3A,r3A]);break;
	       case 2:
		var J3A=c3w.subtract(E3A);
		$r([J3A,y3A]);break;
	       }break;
	      }
	     },[c3w,E3A,r3A]);break;
	    case 2:
	     var K3A=c3w.subtract(t3A);
	     $r([K3A,v3A]);break;
	    }break;
	   case 2:
	    var L3A=v3A.v[0];
	    var T3A=t3A.add(L3A);
	    var M3A=c3w.lessThan(T3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(M3A.g){
	    case 1:
	     $M(q3A,function(N3A){
	      switch(N3A.g){
	      case 1:
	       var O3A=N3A.v[0];
	       var R3A=T3A.add(O3A);
	       var P3A=c3w.lessThan(R3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(P3A.g){
	       case 1:
		var Q3A=c3w.subtract(R3A);
		$r([Q3A,r3A]);break;
	       case 2:
		var S3A=c3w.subtract(T3A);
		$r([S3A,N3A]);break;
	       }break;
	      case 2:
	       var U3A=N3A.v[0];
	       var X3A=T3A.add(U3A);
	       var V3A=c3w.lessThan(X3A)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(V3A.g){
	       case 1:
		var W3A=c3w.subtract(X3A);
		$r([W3A,r3A]);break;
	       case 2:
		var Y3A=c3w.subtract(T3A);
		$r([Y3A,N3A]);break;
	       }break;
	      }
	     },[c3w,r3A,T3A]);break;
	    case 2:
	     var Z3A=c3w.subtract(t3A);
	     $r([Z3A,v3A]);break;
	    }break;
	   }
	  },[c3w,t3A,q3A,r3A]);break;
	 case 2:
	  $r([c3w,s3A]);break;
	 }break;
	case 2:
	 var a3B=s3A.v[0];
	 var b3B=c3w.lessThan(a3B)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(b3B.g){
	 case 1:
	  $M(p3A,function(c3B){
	   switch(c3B.g){
	   case 1:
	    var d3B=c3B.v[0];
	    var l3B=a3B.add(d3B);
	    var e3B=c3w.lessThan(l3B)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(e3B.g){
	    case 1:
	     $M(q3A,function(f3B){
	      switch(f3B.g){
	      case 1:
	       var g3B=f3B.v[0];
	       var j3B=l3B.add(g3B);
	       var h3B=c3w.lessThan(j3B)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(h3B.g){
	       case 1:
		var i3B=c3w.subtract(j3B);
		$r([i3B,r3A]);break;
	       case 2:
		var k3B=c3w.subtract(l3B);
		$r([k3B,f3B]);break;
	       }break;
	      case 2:
	       var m3B=f3B.v[0];
	       var p3B=l3B.add(m3B);
	       var n3B=c3w.lessThan(p3B)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(n3B.g){
	       case 1:
		var o3B=c3w.subtract(p3B);
		$r([o3B,r3A]);break;
	       case 2:
		var q3B=c3w.subtract(l3B);
		$r([q3B,f3B]);break;
	       }break;
	      }
	     },[c3w,r3A,l3B]);break;
	    case 2:
	     var r3B=c3w.subtract(a3B);
	     $r([r3B,c3B]);break;
	    }break;
	   case 2:
	    var s3B=c3B.v[0];
	    var A3B=a3B.add(s3B);
	    var t3B=c3w.lessThan(A3B)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(t3B.g){
	    case 1:
	     $M(q3A,function(u3B){
	      switch(u3B.g){
	      case 1:
	       var v3B=u3B.v[0];
	       var y3B=A3B.add(v3B);
	       var w3B=c3w.lessThan(y3B)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(w3B.g){
	       case 1:
		var x3B=c3w.subtract(y3B);
		$r([x3B,r3A]);break;
	       case 2:
		var z3B=c3w.subtract(A3B);
		$r([z3B,u3B]);break;
	       }break;
	      case 2:
	       var B3B=u3B.v[0];
	       var E3B=A3B.add(B3B);
	       var C3B=c3w.lessThan(E3B)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(C3B.g){
	       case 1:
		var D3B=c3w.subtract(E3B);
		$r([D3B,r3A]);break;
	       case 2:
		var F3B=c3w.subtract(A3B);
		$r([F3B,u3B]);break;
	       }break;
	      }
	     },[c3w,r3A,A3B]);break;
	    case 2:
	     var G3B=c3w.subtract(a3B);
	     $r([G3B,c3B]);break;
	    }break;
	   }
	  },[c3w,q3A,r3A,a3B]);break;
	 case 2:
	  $r([c3w,s3A]);break;
	 }break;
	}
       },[c3w,p3A,q3A,r3A]);break;
      }
     },[c3w]);break;
    }
   },[c3w,i3w,h3w,g3w],"$w$j");
   $M(g3w,function(H3B){
    switch(H3B.g){
    case 1:
     var I3B=H3B.v[0];
     $M(I3B,function(J3B){
      switch(J3B.g){
      case 1:
       var K3B=J3B.v[0];
       j3w.J(K3B);break;
      case 2:
       var L3B=J3B.v[0];
       j3w.J(L3B);break;
      }
     },[c3w,i3w,h3w,g3w,j3w]);break;
    case 2:
     var M3B=H3B.v[0],N3B=H3B.v[1];
     $M(M3B,function(O3B){
      switch(O3B.g){
      case 1:
       var P3B=O3B.v[0];
       $M(N3B,function(Q3B){
	switch(Q3B.g){
	case 1:
	 var R3B=Q3B.v[0];
	 var S3B=P3B.add(R3B);
	 j3w.J(S3B);break;
	case 2:
	 var T3B=Q3B.v[0];
	 var U3B=P3B.add(T3B);
	 j3w.J(U3B);break;
	}
       },[c3w,i3w,h3w,g3w,j3w,P3B]);break;
      case 2:
       var V3B=O3B.v[0];
       $M(N3B,function(W3B){
	switch(W3B.g){
	case 1:
	 var X3B=W3B.v[0];
	 var Y3B=V3B.add(X3B);
	 j3w.J(Y3B);break;
	case 2:
	 var Z3B=W3B.v[0];
	 var a3C=V3B.add(Z3B);
	 j3w.J(a3C);break;
	}
       },[c3w,i3w,h3w,g3w,j3w,V3B]);break;
      }
     },[c3w,i3w,h3w,g3w,j3w,N3B]);break;
    case 3:
     var b3C=H3B.v[0],c3C=H3B.v[1],d3C=H3B.v[2];
     var e3C=$f(1,function(f3C){
      $M(c3C,function(g3C){
       switch(g3C.g){
       case 1:
	var h3C=g3C.v[0];
	$M(d3C,function(i3C){
	 switch(i3C.g){
	 case 1:
	  var j3C=i3C.v[0];
	  var l3C=f3C.add(h3C);
	  var k3C=l3C.add(j3C);
	  j3w.J(k3C);break;
	 case 2:
	  var m3C=i3C.v[0];
	  var o3C=f3C.add(h3C);
	  var n3C=o3C.add(m3C);
	  j3w.J(n3C);break;
	 }
	},[c3w,i3w,h3w,g3w,j3w,f3C,h3C]);break;
       case 2:
	var p3C=g3C.v[0];
	$M(d3C,function(q3C){
	 switch(q3C.g){
	 case 1:
	  var r3C=q3C.v[0];
	  var t3C=f3C.add(p3C);
	  var s3C=t3C.add(r3C);
	  j3w.J(s3C);break;
	 case 2:
	  var u3C=q3C.v[0];
	  var w3C=f3C.add(p3C);
	  var v3C=w3C.add(u3C);
	  j3w.J(v3C);break;
	 }
	},[c3w,i3w,h3w,g3w,j3w,f3C,p3C]);break;
       }
      },[c3w,i3w,h3w,g3w,j3w,d3C,f3C]);
     },[j3w,c3C,d3C],"$w$j1");
     $M(b3C,function(x3C){
      switch(x3C.g){
      case 1:
       var y3C=x3C.v[0];
       e3C.J(y3C);break;
      case 2:
       var z3C=x3C.v[0];
       e3C.J(z3C);break;
      }
     },[c3w,i3w,h3w,g3w,j3w,c3C,d3C,e3C]);break;
    case 4:
     var A3C=H3B.v[0],B3C=H3B.v[1],C3C=H3B.v[2],D3C=H3B.v[3];
     var E3C=$f(1,function(F3C){
      var G3C=$f(1,function(H3C){
       $M(C3C,function(I3C){
	switch(I3C.g){
	case 1:
	 var J3C=I3C.v[0];
	 $M(D3C,function(K3C){
	  switch(K3C.g){
	  case 1:
	   var L3C=K3C.v[0];
	   var O3C=F3C.add(H3C);
	   var N3C=O3C.add(J3C);
	   var M3C=N3C.add(L3C);
	   j3w.J(M3C);break;
	  case 2:
	   var P3C=K3C.v[0];
	   var S3C=F3C.add(H3C);
	   var R3C=S3C.add(J3C);
	   var Q3C=R3C.add(P3C);
	   j3w.J(Q3C);break;
	  }
	 },[c3w,i3w,h3w,g3w,j3w,F3C,H3C,J3C]);break;
	case 2:
	 var T3C=I3C.v[0];
	 $M(D3C,function(U3C){
	  switch(U3C.g){
	  case 1:
	   var V3C=U3C.v[0];
	   var Y3C=F3C.add(H3C);
	   var X3C=Y3C.add(T3C);
	   var W3C=X3C.add(V3C);
	   j3w.J(W3C);break;
	  case 2:
	   var Z3C=U3C.v[0];
	   var c3D=F3C.add(H3C);
	   var b3D=c3D.add(T3C);
	   var a3D=b3D.add(Z3C);
	   j3w.J(a3D);break;
	  }
	 },[c3w,i3w,h3w,g3w,j3w,F3C,H3C,T3C]);break;
	}
       },[c3w,i3w,h3w,g3w,j3w,D3C,F3C,H3C]);
      },[j3w,C3C,D3C,F3C],"$w$j2");
      $M(B3C,function(d3D){
       switch(d3D.g){
       case 1:
	var e3D=d3D.v[0];
	G3C.J(e3D);break;
       case 2:
	var f3D=d3D.v[0];
	G3C.J(f3D);break;
       }
      },[c3w,i3w,h3w,g3w,j3w,C3C,D3C,F3C,G3C]);
     },[j3w,C3C,D3C,B3C],"$w$j1");
     $M(A3C,function(g3D){
      switch(g3D.g){
      case 1:
       var h3D=g3D.v[0];
       E3C.J(h3D);break;
      case 2:
       var i3D=g3D.v[0];
       E3C.J(i3D);break;
      }
     },[c3w,i3w,h3w,g3w,j3w,C3C,D3C,B3C,E3C]);break;
    }
   },[c3w,i3w,h3w,g3w,j3w]);break;
  }
 },[c3w]);
},"at libraries/containers/Data/Sequence.hs:1056:1");
var $$DataziSequence$t1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("index out of bounds");
},"lvl19");
var $$DataziSequence$u1=$T(function(){
 $$GHCziErr_error.J($$DataziSequence$t1);
},"lvl20");
var $$DataziSequence$v1=$T(function(){
 $$GHCziErr_error.J($$DataziSequence$q1);
},"lvl21");
var $$DataziSequence$z1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("splitTree of empty tree");
},"lvl24");
var $$DataziSequence$A1=$T(function(){
 $$GHCziErr_error.J($$DataziSequence$z1);
},"lvl25");
var $$DataziSequence$B1=$F(2,function(k3J,l3J){
 $M(l3J,function(m3J){
  switch(m3J.g){
  case 1:
   $A($$DataziSequence$A1);break;
  case 2:
   var n3J=m3J.v[0];
   $r([$$DataziSequence_Empty,n3J,$$DataziSequence_Empty]);break;
  case 3:
   var o3J=m3J.v[1],p3J=m3J.v[2],q3J=m3J.v[3];
   var r3J=$f(1,function(s3J){
    var t3J=k3J.lessThan(s3J)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(t3J.g){
    case 1:
     var u3J=$f(1,function(v3J){
      var w3J=k3J.lessThan(v3J)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(w3J.g){
      case 1:
       var F3J=k3J.subtract(v3J);
       $$DataziSequence$N.C([F3J,q3J],function(x3J){
	var y3J=x3J[0],z3J=x3J[1],A3J=x3J[2];
	var B3J=$t(function(){
	 $M(A3J,function(C3J){
	  switch(C3J.g){
	  case 1:
	   $R(1,[],"Empty");break;
	  case 2:
	   var D3J=C3J.v[0];
	   $$DataziSequence$b1.J(D3J);break;
	  }
	 },[]);
	},[A3J],"sat");
	var E3J=$t(function(){
	 $$DataziSequence$a1.J(o3J,p3J,y3J);
	},[o3J,p3J,y3J],"sat");
	$r([E3J,z3J,B3J]);
       },[o3J,p3J]);break;
      case 2:
       var I3K=k3J.subtract(s3J);
       $$DataziSequence$B1.C([I3K,p3J],function(G3J){
	var H3J=G3J[0],I3J=G3J[1],J3J=G3J[2];
	var K3J=$f(1,function(L3J){
	 $M(I3J,function(M3J){
	  switch(M3J.g){
	  case 1:
	   var N3J=M3J.v[1],O3J=M3J.v[2];
	   var P3J=$f(1,function(Q3J){
	    var R3J=L3J.lessThan(Q3J)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(R3J.g){
	    case 1:
	     var S3J=$t(function(){
	      $$DataziSequence$Y.J($$DataziMaybe_Nothing,J3J,q3J);
	     },[q3J,J3J],"sat");
	     var T3J=$t(function(){
	      var U3J=$d(1,[N3J],"sat");
	      var V3J=$d(2,[U3J],"sat");
	      $$DataziSequence$a1.J(o3J,H3J,V3J);
	     },[o3J,H3J,N3J],"sat");
	     $r([T3J,O3J,S3J]);break;
	    case 2:
	     var W3J=$t(function(){
	      var X3J=$d(1,[O3J],"sat");
	      var Y3J=$d(2,[X3J],"sat");
	      $$DataziSequence$Y.J(Y3J,J3J,q3J);
	     },[q3J,O3J,J3J],"sat");
	     var Z3J=$t(function(){
	      $$DataziSequence$a1.J(o3J,H3J,$$DataziMaybe_Nothing);
	     },[o3J,H3J],"sat");
	     $r([Z3J,N3J,W3J]);break;
	    }
	   },[q3J,o3J,L3J,H3J,N3J,O3J,J3J],"$w$j2");
	   $M(N3J,function(a3K){
	    switch(a3K.g){
	    case 1:
	     var b3K=a3K.v[0];
	     P3J.J(b3K);break;
	    case 2:
	     var c3K=a3K.v[0];
	     P3J.J(c3K);break;
	    }
	   },[q3J,o3J,L3J,H3J,N3J,O3J,J3J,P3J]);break;
	  case 2:
	   var d3K=M3J.v[1],e3K=M3J.v[2],f3K=M3J.v[3];
	   var g3K=$f(1,function(h3K){
	    var i3K=L3J.lessThan(h3K)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(i3K.g){
	    case 1:
	     var j3K=$f(1,function(k3K){
	      var w3K=h3K.add(k3K);
	      var l3K=L3J.lessThan(w3K)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(l3K.g){
	      case 1:
	       var m3K=$t(function(){
		$$DataziSequence$Y.J($$DataziMaybe_Nothing,J3J,q3J);
	       },[q3J,J3J],"sat");
	       var n3K=$t(function(){
		var o3K=$d(2,[d3K,e3K],"sat");
		var p3K=$d(2,[o3K],"sat");
		$$DataziSequence$a1.J(o3J,H3J,p3K);
	       },[o3J,H3J,d3K,e3K],"sat");
	       $r([n3K,f3K,m3K]);break;
	      case 2:
	       var q3K=$t(function(){
		var r3K=$d(1,[f3K],"sat");
		var s3K=$d(2,[r3K],"sat");
		$$DataziSequence$Y.J(s3K,J3J,q3J);
	       },[q3J,J3J,f3K],"sat");
	       var t3K=$t(function(){
		var u3K=$d(1,[d3K],"sat");
		var v3K=$d(2,[u3K],"sat");
		$$DataziSequence$a1.J(o3J,H3J,v3K);
	       },[o3J,H3J,d3K],"sat");
	       $r([t3K,e3K,q3K]);break;
	      }
	     },[q3J,o3J,L3J,H3J,J3J,h3K,d3K,e3K,f3K],"$w$j3");
	     $M(e3K,function(x3K){
	      switch(x3K.g){
	      case 1:
	       var y3K=x3K.v[0];
	       j3K.J(y3K);break;
	      case 2:
	       var z3K=x3K.v[0];
	       j3K.J(z3K);break;
	      }
	     },[q3J,o3J,L3J,H3J,J3J,h3K,d3K,e3K,f3K,j3K]);break;
	    case 2:
	     var A3K=$t(function(){
	      var B3K=$d(2,[e3K,f3K],"sat");
	      var C3K=$d(2,[B3K],"sat");
	      $$DataziSequence$Y.J(C3K,J3J,q3J);
	     },[q3J,J3J,e3K,f3K],"sat");
	     var D3K=$t(function(){
	      $$DataziSequence$a1.J(o3J,H3J,$$DataziMaybe_Nothing);
	     },[o3J,H3J],"sat");
	     $r([D3K,d3K,A3K]);break;
	    }
	   },[q3J,o3J,L3J,H3J,J3J,d3K,e3K,f3K],"$w$j2");
	   $M(d3K,function(E3K){
	    switch(E3K.g){
	    case 1:
	     var F3K=E3K.v[0];
	     g3K.J(F3K);break;
	    case 2:
	     var G3K=E3K.v[0];
	     g3K.J(G3K);break;
	    }
	   },[q3J,o3J,L3J,H3J,J3J,d3K,e3K,f3K,g3K]);break;
	  }
	 },[q3J,o3J,L3J,H3J,J3J]);
	},[q3J,o3J,I3J,H3J,J3J],"$j");
	$M(H3J,function(H3K){
	 switch(H3K.g){
	 case 1:
	  K3J.J(I3K);break;
	 case 2:
	  var J3K=H3K.v[0];
	  $M(J3K,function(K3K){
	   switch(K3K.g){
	   case 1:
	    var L3K=K3K.v[0];
	    var M3K=I3K.subtract(L3K);
	    K3J.J(M3K);break;
	   case 2:
	    var N3K=K3K.v[0];
	    var O3K=I3K.subtract(N3K);
	    K3J.J(O3K);break;
	   }
	  },[q3J,o3J,I3K,I3J,H3J,J3J,K3J]);break;
	 case 3:
	  var P3K=H3K.v[0];
	  var Q3K=I3K.subtract(P3K);
	  K3J.J(Q3K);break;
	 }
	},[q3J,o3J,I3K,I3J,H3J,J3J,K3J]);
       },[q3J,o3J,I3K]);break;
      }
     },[k3J,s3J,q3J,o3J,p3J],"$w$j1");
     $M(p3J,function(R3K){
      switch(R3K.g){
      case 1:
       u3J.J(s3J);break;
      case 2:
       var S3K=R3K.v[0];
       $M(S3K,function(T3K){
	switch(T3K.g){
	case 1:
	 var U3K=T3K.v[0];
	 var V3K=s3J.add(U3K);
	 u3J.J(V3K);break;
	case 2:
	 var W3K=T3K.v[0];
	 var X3K=s3J.add(W3K);
	 u3J.J(X3K);break;
	}
       },[k3J,s3J,q3J,o3J,p3J,u3J]);break;
      case 3:
       var Y3K=R3K.v[0];
       var Z3K=s3J.add(Y3K);
       u3J.J(Z3K);break;
      }
     },[k3J,s3J,q3J,o3J,p3J,u3J]);break;
    case 2:
     $$DataziSequence$N.C([k3J,o3J],function(a3L){
      var b3L=a3L[0],c3L=a3L[1],d3L=a3L[2];
      var e3L=$t(function(){
       $$DataziSequence$Y.J(d3L,p3J,q3J);
      },[q3J,p3J,d3L],"sat");
      var f3L=$t(function(){
       $M(b3L,function(g3L){
	switch(g3L.g){
	case 1:
	 $R(1,[],"Empty");break;
	case 2:
	 var h3L=g3L.v[0];
	 $$DataziSequence$b1.J(h3L);break;
	}
       },[]);
      },[b3L],"sat");
      $r([f3L,c3L,e3L]);
     },[q3J,p3J]);break;
    }
   },[k3J,q3J,o3J,p3J],"$w$j");
   $M(o3J,function(i3L){
    switch(i3L.g){
    case 1:
     var j3L=i3L.v[0];
     $M(j3L,function(k3L){
      switch(k3L.g){
      case 1:
       var l3L=k3L.v[0];
       r3J.J(l3L);break;
      case 2:
       var m3L=k3L.v[0];
       r3J.J(m3L);break;
      }
     },[k3J,q3J,o3J,p3J,r3J]);break;
    case 2:
     var n3L=i3L.v[0],o3L=i3L.v[1];
     $M(n3L,function(p3L){
      switch(p3L.g){
      case 1:
       var q3L=p3L.v[0];
       $M(o3L,function(r3L){
	switch(r3L.g){
	case 1:
	 var s3L=r3L.v[0];
	 var t3L=q3L.add(s3L);
	 r3J.J(t3L);break;
	case 2:
	 var u3L=r3L.v[0];
	 var v3L=q3L.add(u3L);
	 r3J.J(v3L);break;
	}
       },[k3J,q3J,o3J,p3J,r3J,q3L]);break;
      case 2:
       var w3L=p3L.v[0];
       $M(o3L,function(x3L){
	switch(x3L.g){
	case 1:
	 var y3L=x3L.v[0];
	 var z3L=w3L.add(y3L);
	 r3J.J(z3L);break;
	case 2:
	 var A3L=x3L.v[0];
	 var B3L=w3L.add(A3L);
	 r3J.J(B3L);break;
	}
       },[k3J,q3J,o3J,p3J,r3J,w3L]);break;
      }
     },[k3J,q3J,o3J,p3J,r3J,o3L]);break;
    case 3:
     var C3L=i3L.v[0],D3L=i3L.v[1],E3L=i3L.v[2];
     var F3L=$f(1,function(G3L){
      $M(D3L,function(H3L){
       switch(H3L.g){
       case 1:
	var I3L=H3L.v[0];
	$M(E3L,function(J3L){
	 switch(J3L.g){
	 case 1:
	  var K3L=J3L.v[0];
	  var M3L=G3L.add(I3L);
	  var L3L=M3L.add(K3L);
	  r3J.J(L3L);break;
	 case 2:
	  var N3L=J3L.v[0];
	  var P3L=G3L.add(I3L);
	  var O3L=P3L.add(N3L);
	  r3J.J(O3L);break;
	 }
	},[k3J,q3J,o3J,p3J,r3J,G3L,I3L]);break;
       case 2:
	var Q3L=H3L.v[0];
	$M(E3L,function(R3L){
	 switch(R3L.g){
	 case 1:
	  var S3L=R3L.v[0];
	  var U3L=G3L.add(Q3L);
	  var T3L=U3L.add(S3L);
	  r3J.J(T3L);break;
	 case 2:
	  var V3L=R3L.v[0];
	  var X3L=G3L.add(Q3L);
	  var W3L=X3L.add(V3L);
	  r3J.J(W3L);break;
	 }
	},[k3J,q3J,o3J,p3J,r3J,G3L,Q3L]);break;
       }
      },[k3J,q3J,o3J,p3J,r3J,E3L,G3L]);
     },[r3J,D3L,E3L],"$w$j1");
     $M(C3L,function(Y3L){
      switch(Y3L.g){
      case 1:
       var Z3L=Y3L.v[0];
       F3L.J(Z3L);break;
      case 2:
       var a3M=Y3L.v[0];
       F3L.J(a3M);break;
      }
     },[k3J,q3J,o3J,p3J,r3J,D3L,E3L,F3L]);break;
    case 4:
     var b3M=i3L.v[0],c3M=i3L.v[1],d3M=i3L.v[2],e3M=i3L.v[3];
     var f3M=$f(1,function(g3M){
      var h3M=$f(1,function(i3M){
       $M(d3M,function(j3M){
	switch(j3M.g){
	case 1:
	 var k3M=j3M.v[0];
	 $M(e3M,function(l3M){
	  switch(l3M.g){
	  case 1:
	   var m3M=l3M.v[0];
	   var p3M=g3M.add(i3M);
	   var o3M=p3M.add(k3M);
	   var n3M=o3M.add(m3M);
	   r3J.J(n3M);break;
	  case 2:
	   var q3M=l3M.v[0];
	   var t3M=g3M.add(i3M);
	   var s3M=t3M.add(k3M);
	   var r3M=s3M.add(q3M);
	   r3J.J(r3M);break;
	  }
	 },[k3J,q3J,o3J,p3J,r3J,g3M,i3M,k3M]);break;
	case 2:
	 var u3M=j3M.v[0];
	 $M(e3M,function(v3M){
	  switch(v3M.g){
	  case 1:
	   var w3M=v3M.v[0];
	   var z3M=g3M.add(i3M);
	   var y3M=z3M.add(u3M);
	   var x3M=y3M.add(w3M);
	   r3J.J(x3M);break;
	  case 2:
	   var A3M=v3M.v[0];
	   var D3M=g3M.add(i3M);
	   var C3M=D3M.add(u3M);
	   var B3M=C3M.add(A3M);
	   r3J.J(B3M);break;
	  }
	 },[k3J,q3J,o3J,p3J,r3J,g3M,i3M,u3M]);break;
	}
       },[k3J,q3J,o3J,p3J,r3J,e3M,g3M,i3M]);
      },[r3J,d3M,e3M,g3M],"$w$j2");
      $M(c3M,function(E3M){
       switch(E3M.g){
       case 1:
	var F3M=E3M.v[0];
	h3M.J(F3M);break;
       case 2:
	var G3M=E3M.v[0];
	h3M.J(G3M);break;
       }
      },[k3J,q3J,o3J,p3J,r3J,d3M,e3M,g3M,h3M]);
     },[r3J,d3M,e3M,c3M],"$w$j1");
     $M(b3M,function(H3M){
      switch(H3M.g){
      case 1:
       var I3M=H3M.v[0];
       f3M.J(I3M);break;
      case 2:
       var J3M=H3M.v[0];
       f3M.J(J3M);break;
      }
     },[k3J,q3J,o3J,p3J,r3J,d3M,e3M,c3M,f3M]);break;
    }
   },[k3J,q3J,o3J,p3J,r3J]);break;
  }
 },[k3J]);
},"at libraries/containers/Data/Sequence.hs:1221:1");
var $$DataziSequence$C1=$D(1,function(){
 $r([$$DataziSequence_Empty,$$DataziSequence_Empty]);
},"lvl26");
var $$DataziSet_balanceL=$f(3,function(a5,b5,c5){
 $M(c5,function(d5){
  switch(d5.g){
  case 1:
   $M(b5,function(e5){
    switch(e5.g){
    case 1:
     $M(a5,function(f5){
      $R(2,[goog.math.Long.fromBits(1,0),f5,$$DataziSet_Tip,$$DataziSet_Tip],"Bin");
     },[]);break;
    case 2:
     var g5=e5.v[0],h5=e5.v[1],i5=e5.v[2],j5=e5.v[3];
     $M(i5,function(k5){
      switch(k5.g){
      case 1:
       $M(j5,function(l5){
	switch(l5.g){
	case 1:
	 $M(a5,function(m5){
	  $R(2,[goog.math.Long.fromBits(2,0),m5,e5,$$DataziSet_Tip],"Bin");
	 },[e5]);break;
	case 2:
	 var n5=l5.v[1];
	 $M(a5,function(p5){
	  var o5=$d(2,[goog.math.Long.fromBits(1,0),p5,$$DataziSet_Tip,$$DataziSet_Tip],"sat");
	  var q5=$d(2,[goog.math.Long.fromBits(1,0),h5,$$DataziSet_Tip,$$DataziSet_Tip],"sat");
	  $R(2,[goog.math.Long.fromBits(3,0),n5,q5,o5],"Bin");
	 },[n5,h5]);break;
	}
       },[a5,e5,h5]);break;
      case 2:
       var r5=k5.v[0];
       $M(j5,function(s5){
	switch(s5.g){
	case 1:
	 $M(a5,function(u5){
	  var t5=$d(2,[goog.math.Long.fromBits(1,0),u5,$$DataziSet_Tip,$$DataziSet_Tip],"sat");
	  $R(2,[goog.math.Long.fromBits(3,0),h5,k5,t5],"Bin");
	 },[h5,k5]);break;
	case 2:
	 var v5=s5.v[0],w5=s5.v[1],x5=s5.v[2],y5=s5.v[3];
	 var X5=goog.math.Long.fromBits(2,0).multiply(r5);
	 var z5=v5.lessThan(X5)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(z5.g){
	 case 1:
	  var A5=$f(1,function(B5){
	   $M(y5,function(C5){
	    switch(C5.g){
	    case 1:
	     $M(a5,function(E5){
	      var D5=$d(2,[goog.math.Long.fromBits(1,0),E5,$$DataziSet_Tip,$$DataziSet_Tip],"sat");
	      var I5=goog.math.Long.fromBits(1,0).add(r5);
	      var G5=I5.add(B5);
	      var F5=$d(2,[G5,h5,k5,x5],"sat");
	      var H5=goog.math.Long.fromBits(1,0).add(g5);
	      $R(2,[H5,w5,F5,D5],"Bin");
	     },[h5,k5,r5,g5,w5,B5,x5]);break;
	    case 2:
	     var J5=C5.v[0];
	     $M(a5,function(M5){
	      var L5=goog.math.Long.fromBits(1,0).add(J5);
	      var K5=$d(2,[L5,M5,C5,$$DataziSet_Tip],"sat");
	      var Q5=goog.math.Long.fromBits(1,0).add(r5);
	      var O5=Q5.add(B5);
	      var N5=$d(2,[O5,h5,k5,x5],"sat");
	      var P5=goog.math.Long.fromBits(1,0).add(g5);
	      $R(2,[P5,w5,N5,K5],"Bin");
	     },[h5,k5,r5,g5,w5,B5,x5,J5,C5]);break;
	    }
	   },[a5,h5,k5,r5,g5,w5,B5,x5]);
	  },[a5,h5,k5,r5,y5,g5,w5,x5],"$j");
	  $M(x5,function(R5){
	   switch(R5.g){
	   case 1:
	    A5.J(goog.math.Long.fromBits(0,0));break;
	   case 2:
	    var S5=R5.v[0];
	    A5.J(S5);break;
	   }
	  },[a5,h5,k5,r5,y5,g5,w5,x5,A5]);break;
	 case 2:
	  $M(a5,function(V5){
	   var U5=goog.math.Long.fromBits(1,0).add(v5);
	   var T5=$d(2,[U5,V5,s5,$$DataziSet_Tip],"sat");
	   var W5=goog.math.Long.fromBits(1,0).add(g5);
	   $R(2,[W5,h5,k5,T5],"Bin");
	  },[h5,k5,v5,g5,s5]);break;
	 }break;
	}
       },[a5,h5,k5,r5,g5]);break;
      }
     },[a5,j5,e5,h5,g5]);break;
    }
   },[a5]);break;
  case 2:
   var Y5=d5.v[0];
   $M(b5,function(Z5){
    switch(Z5.g){
    case 1:
     $M(a5,function(b6){
      var a6=goog.math.Long.fromBits(1,0).add(Y5);
      $R(2,[a6,b6,$$DataziSet_Tip,d5],"Bin");
     },[Y5,d5]);break;
    case 2:
     var c6=Z5.v[0],d6=Z5.v[1],e6=Z5.v[2],f6=Z5.v[3];
     var W6=goog.math.Long.fromBits(3,0).multiply(Y5);
     var g6=c6.greaterThan(W6)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(g6.g){
     case 1:
      $M(a5,function(i6){
       var j6=goog.math.Long.fromBits(1,0).add(c6);
       var h6=j6.add(Y5);
       $R(2,[h6,i6,Z5,d5],"Bin");
      },[Y5,d5,c6,Z5]);break;
     case 2:
      $M(e6,function(k6){
       switch(k6.g){
       case 1:
	$A($$DataziSet$p);break;
       case 2:
	var l6=k6.v[0];
	$M(f6,function(m6){
	 switch(m6.g){
	 case 1:
	  $A($$DataziSet$p);break;
	 case 2:
	  var n6=m6.v[0],o6=m6.v[1],p6=m6.v[2],q6=m6.v[3];
	  var V6=goog.math.Long.fromBits(2,0).multiply(l6);
	  var r6=n6.lessThan(V6)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(r6.g){
	  case 1:
	   var s6=$f(1,function(t6){
	    $M(q6,function(u6){
	     switch(u6.g){
	     case 1:
	      $M(a5,function(x6){
	       var w6=goog.math.Long.fromBits(1,0).add(Y5);
	       var v6=$d(2,[w6,x6,$$DataziSet_Tip,d5],"sat");
	       var C6=goog.math.Long.fromBits(1,0).add(l6);
	       var z6=C6.add(t6);
	       var y6=$d(2,[z6,d6,k6,p6],"sat");
	       var B6=goog.math.Long.fromBits(1,0).add(c6);
	       var A6=B6.add(Y5);
	       $R(2,[A6,o6,y6,v6],"Bin");
	      },[Y5,d5,c6,l6,o6,t6,d6,k6,p6]);break;
	     case 2:
	      var D6=u6.v[0];
	      $M(a5,function(G6){
	       var M6=goog.math.Long.fromBits(1,0).add(Y5);
	       var F6=M6.add(D6);
	       var E6=$d(2,[F6,G6,u6,d5],"sat");
	       var L6=goog.math.Long.fromBits(1,0).add(l6);
	       var I6=L6.add(t6);
	       var H6=$d(2,[I6,d6,k6,p6],"sat");
	       var K6=goog.math.Long.fromBits(1,0).add(c6);
	       var J6=K6.add(Y5);
	       $R(2,[J6,o6,H6,E6],"Bin");
	      },[Y5,d5,c6,l6,o6,t6,d6,k6,p6,D6,u6]);break;
	     }
	    },[a5,Y5,d5,c6,l6,o6,t6,d6,k6,p6]);
	   },[a5,Y5,d5,c6,l6,q6,o6,d6,k6,p6],"$j");
	   $M(p6,function(N6){
	    switch(N6.g){
	    case 1:
	     s6.J(goog.math.Long.fromBits(0,0));break;
	    case 2:
	     var O6=N6.v[0];
	     s6.J(O6);break;
	    }
	   },[a5,Y5,d5,c6,l6,q6,o6,d6,k6,p6,s6]);break;
	  case 2:
	   $M(a5,function(R6){
	    var U6=goog.math.Long.fromBits(1,0).add(Y5);
	    var Q6=U6.add(n6);
	    var P6=$d(2,[Q6,R6,m6,d5],"sat");
	    var T6=goog.math.Long.fromBits(1,0).add(c6);
	    var S6=T6.add(Y5);
	    $R(2,[S6,d6,k6,P6],"Bin");
	   },[Y5,d5,c6,n6,d6,k6,m6]);break;
	  }break;
	 }
	},[a5,Y5,d5,c6,l6,d6,k6]);break;
       }
      },[a5,Y5,d5,c6,f6,d6]);break;
     }break;
    }
   },[a5,Y5,d5]);break;
  }
 },[b5,a5]);
},[],"at libraries/containers/Data/Set.hs:1078:1");
var $$DataziSet_balanceR=$f(3,function(o8,p8,q8){
 $M(p8,function(r8){
  switch(r8.g){
  case 1:
   $M(q8,function(s8){
    switch(s8.g){
    case 1:
     $M(o8,function(t8){
      $R(2,[goog.math.Long.fromBits(1,0),t8,$$DataziSet_Tip,$$DataziSet_Tip],"Bin");
     },[]);break;
    case 2:
     var u8=s8.v[0],v8=s8.v[1],w8=s8.v[2],x8=s8.v[3];
     $M(w8,function(y8){
      switch(y8.g){
      case 1:
       $M(x8,function(z8){
	switch(z8.g){
	case 1:
	 $M(o8,function(A8){
	  $R(2,[goog.math.Long.fromBits(2,0),A8,$$DataziSet_Tip,s8],"Bin");
	 },[s8]);break;
	case 2:
	 $M(o8,function(C8){
	  var B8=$d(2,[goog.math.Long.fromBits(1,0),C8,$$DataziSet_Tip,$$DataziSet_Tip],"sat");
	  $R(2,[goog.math.Long.fromBits(3,0),v8,B8,z8],"Bin");
	 },[v8,z8]);break;
	}
       },[o8,s8,v8]);break;
      case 2:
       var D8=y8.v[0],E8=y8.v[1],F8=y8.v[2],G8=y8.v[3];
       $M(x8,function(H8){
	switch(H8.g){
	case 1:
	 $M(o8,function(K8){
	  var I8=$d(2,[goog.math.Long.fromBits(1,0),v8,$$DataziSet_Tip,$$DataziSet_Tip],"sat");
	  var J8=$d(2,[goog.math.Long.fromBits(1,0),K8,$$DataziSet_Tip,$$DataziSet_Tip],"sat");
	  $R(2,[goog.math.Long.fromBits(3,0),E8,J8,I8],"Bin");
	 },[v8,E8]);break;
	case 2:
	 var L8=H8.v[0];
	 var j9=goog.math.Long.fromBits(2,0).multiply(L8);
	 var M8=D8.lessThan(j9)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(M8.g){
	 case 1:
	  var N8=$f(1,function(O8){
	   $M(o8,function(U8){
	    $M(G8,function(P8){
	     switch(P8.g){
	     case 1:
	      var R8=goog.math.Long.fromBits(1,0).add(L8);
	      var Q8=$d(2,[R8,v8,$$DataziSet_Tip,H8],"sat");
	      var T8=goog.math.Long.fromBits(1,0).add(O8);
	      var S8=$d(2,[T8,U8,$$DataziSet_Tip,F8],"sat");
	      var V8=goog.math.Long.fromBits(1,0).add(u8);
	      $R(2,[V8,E8,S8,Q8],"Bin");break;
	     case 2:
	      var W8=P8.v[0];
	      var c9=goog.math.Long.fromBits(1,0).add(L8);
	      var Y8=c9.add(W8);
	      var X8=$d(2,[Y8,v8,P8,H8],"sat");
	      var a9=goog.math.Long.fromBits(1,0).add(O8);
	      var Z8=$d(2,[a9,U8,$$DataziSet_Tip,F8],"sat");
	      var b9=goog.math.Long.fromBits(1,0).add(u8);
	      $R(2,[b9,E8,Z8,X8],"Bin");break;
	     }
	    },[v8,E8,L8,u8,O8,U8,F8,H8]);
	   },[v8,E8,L8,G8,u8,O8,F8,H8]);
	  },[o8,v8,E8,L8,G8,u8,F8,H8],"$j");
	  $M(F8,function(d9){
	   switch(d9.g){
	   case 1:
	    N8.J(goog.math.Long.fromBits(0,0));break;
	   case 2:
	    var e9=d9.v[0];
	    N8.J(e9);break;
	   }
	  },[o8,v8,E8,L8,G8,u8,F8,H8,N8]);break;
	 case 2:
	  $M(o8,function(h9){
	   var g9=goog.math.Long.fromBits(1,0).add(D8);
	   var f9=$d(2,[g9,h9,$$DataziSet_Tip,y8],"sat");
	   var i9=goog.math.Long.fromBits(1,0).add(u8);
	   $R(2,[i9,v8,f9,H8],"Bin");
	  },[v8,D8,u8,H8,y8]);break;
	 }break;
	}
       },[o8,v8,E8,D8,G8,u8,F8,y8]);break;
      }
     },[o8,x8,s8,v8,u8]);break;
    }
   },[o8]);break;
  case 2:
   var k9=r8.v[0];
   $M(q8,function(l9){
    switch(l9.g){
    case 1:
     $M(o8,function(n9){
      var m9=goog.math.Long.fromBits(1,0).add(k9);
      $R(2,[m9,n9,r8,$$DataziSet_Tip],"Bin");
     },[k9,r8]);break;
    case 2:
     var o9=l9.v[0],p9=l9.v[1],q9=l9.v[2],r9=l9.v[3];
     var ha=goog.math.Long.fromBits(3,0).multiply(k9);
     var s9=o9.greaterThan(ha)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(s9.g){
     case 1:
      $M(o8,function(u9){
       var v9=goog.math.Long.fromBits(1,0).add(k9);
       var t9=v9.add(o9);
       $R(2,[t9,u9,r8,l9],"Bin");
      },[k9,r8,o9,l9]);break;
     case 2:
      $M(q9,function(w9){
       switch(w9.g){
       case 1:
	$A($$DataziSet$u);break;
       case 2:
	var x9=w9.v[0],y9=w9.v[1],z9=w9.v[2],A9=w9.v[3];
	$M(r9,function(B9){
	 switch(B9.g){
	 case 1:
	  $A($$DataziSet$u);break;
	 case 2:
	  var C9=B9.v[0];
	  var ga=goog.math.Long.fromBits(2,0).multiply(C9);
	  var D9=x9.lessThan(ga)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(D9.g){
	  case 1:
	   var E9=$f(1,function(F9){
	    $M(o8,function(L9){
	     $M(A9,function(G9){
	      switch(G9.g){
	      case 1:
	       var I9=goog.math.Long.fromBits(1,0).add(C9);
	       var H9=$d(2,[I9,p9,$$DataziSet_Tip,B9],"sat");
	       var O9=goog.math.Long.fromBits(1,0).add(k9);
	       var K9=O9.add(F9);
	       var J9=$d(2,[K9,L9,r8,z9],"sat");
	       var N9=goog.math.Long.fromBits(1,0).add(k9);
	       var M9=N9.add(o9);
	       $R(2,[M9,y9,J9,H9],"Bin");break;
	      case 2:
	       var P9=G9.v[0];
	       var X9=goog.math.Long.fromBits(1,0).add(C9);
	       var R9=X9.add(P9);
	       var Q9=$d(2,[R9,p9,G9,B9],"sat");
	       var W9=goog.math.Long.fromBits(1,0).add(k9);
	       var T9=W9.add(F9);
	       var S9=$d(2,[T9,L9,r8,z9],"sat");
	       var V9=goog.math.Long.fromBits(1,0).add(k9);
	       var U9=V9.add(o9);
	       $R(2,[U9,y9,S9,Q9],"Bin");break;
	      }
	     },[k9,r8,o9,C9,y9,F9,L9,z9,p9,B9]);
	    },[k9,r8,o9,C9,A9,y9,F9,z9,p9,B9]);
	   },[o8,k9,r8,o9,C9,A9,y9,z9,p9,B9],"$j");
	   $M(z9,function(Y9){
	    switch(Y9.g){
	    case 1:
	     E9.J(goog.math.Long.fromBits(0,0));break;
	    case 2:
	     var Z9=Y9.v[0];
	     E9.J(Z9);break;
	    }
	   },[o8,k9,r8,o9,C9,A9,y9,z9,p9,B9,E9]);break;
	  case 2:
	   $M(o8,function(ca){
	    var fa=goog.math.Long.fromBits(1,0).add(k9);
	    var ba=fa.add(x9);
	    var aa=$d(2,[ba,ca,r8,w9],"sat");
	    var ea=goog.math.Long.fromBits(1,0).add(k9);
	    var da=ea.add(o9);
	    $R(2,[da,p9,aa,B9],"Bin");
	   },[k9,r8,o9,x9,p9,B9,w9]);break;
	  }break;
	 }
	},[o8,k9,r8,o9,x9,A9,y9,z9,p9,w9]);break;
       }
      },[o8,k9,r8,o9,r9,p9]);break;
     }break;
    }
   },[o8,k9,r8]);break;
  }
 },[q8,o8]);
},[],"at libraries/containers/Data/Set.hs:1103:1");
var $$DataziSet_Tip=$D(1,function(){
 $r([]);
},"at libraries/containers/Data/Set.hs:181:17");
var $$DataziSet$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Failure in Data.Map.balanceL");
},"lvl9");
var $$DataziSet$p=$T(function(){
 $$GHCziErr_error.J($$DataziSet$o);
},"lvl10");
var $$DataziSet$t=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Failure in Data.Map.balanceR");
},"lvl14");
var $$DataziSet$u=$T(function(){
 $$GHCziErr_error.J($$DataziSet$t);
},"lvl15");
var $$SystemziFilePathziPosix_pathSeparator=$D(1,function(){
 $r(["/"]);
},"at libraries/filepath/System/FilePath/Internal.hs:115:1");
var $$GHCziClasses_zdp1Ord=$f(1,function(g){
 $M(g,function(h){
  var i=h.v[0];
  $A(i);
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:127:18");
var $$GHCziClasses_compare=$f(1,function(j){
 $M(j,function(k){
  var l=k.v[1];
  $A(l);
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:128:5");
var $$GHCziClasses_zl=$f(1,function(m){
 $M(m,function(n){
  var o=n.v[2];
  $A(o);
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:5");
var $$GHCziClasses_zgze=$f(1,function(p){
 $M(p,function(q){
  var r=q.v[3];
  $A(r);
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:21");
var $$GHCziClasses_zg=$f(1,function(s){
 $M(s,function(t){
  var u=t.v[4];
  $A(u);
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:16");
var $$GHCziClasses_zlze=$f(1,function(v){
 $M(v,function(w){
  var x=w.v[5];
  $A(x);
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:10");
var $$GHCziClasses_zdwzdczeze=$f(6,function(g8,h8,i8,j8,k8,l8){
 g8.C([i8,k8],function(m8){
  switch(m8.g){
  case 1:
   $R(1,[],"False");break;
  case 2:
   $$GHCziClasses_zeze.J(h8,j8,l8);break;
  }
 },[h8,j8,l8]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:5");
var $$GHCziClasses_zdfEqZLz2cUZRzuzdczeze=$f(4,function(n8,o8,p8,q8){
 $M(n8,function(r8){
  var s8=r8.v[0];
  $M(p8,function(t8){
   var u8=t8.v[0],v8=t8.v[1];
   $M(q8,function(w8){
    var x8=w8.v[0],y8=w8.v[1];
    $$GHCziClasses_zdwzdczeze.J(s8,o8,u8,v8,x8,y8);
   },[s8,o8,u8,v8]);
  },[q8,s8,o8]);
 },[p8,q8,o8]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:5");
var $$GHCziClasses_zdwzdczsze=$f(6,function(z8,A8,B8,C8,D8,E8){
 z8.C([B8,D8],function(F8){
  switch(F8.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   $$GHCziClasses_zeze.C([A8,C8,E8],function(G8){
    switch(G8.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);break;
  }
 },[A8,C8,E8]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:11");
var $$GHCziClasses_zdfEqZLz2cUZRzuzdczsze=$f(4,function(H8,I8,J8,K8){
 $M(H8,function(L8){
  var M8=L8.v[0];
  $M(J8,function(N8){
   var O8=N8.v[0],P8=N8.v[1];
   $M(K8,function(Q8){
    var R8=Q8.v[0],S8=Q8.v[1];
    $$GHCziClasses_zdwzdczsze.J(M8,I8,O8,P8,R8,S8);
   },[M8,I8,O8,P8]);
  },[K8,M8,I8]);
 },[J8,K8,I8]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:11");
var $$GHCziClasses_zdfEqZLz2cUZR=$f(2,function(T8,U8){
 var V8=$f(2,function(g4,h4){
  $$GHCziClasses_zdfEqZLz2cUZRzuzdczsze.J(T8,U8,g4,h4);
 },[T8,U8],"sat");
 var W8=$f(2,function(g4,h4){
  $$GHCziClasses_zdfEqZLz2cUZRzuzdczeze.J(T8,U8,g4,h4);
 },[T8,U8],"sat");
 $R(1,[W8,V8],"D:Eq");
},[],"at libraries/ghc-prim/GHC/Classes.hs:54:1");
var $$GHCziClasses_zdwzdczlze=$f(6,function(Oq,Pq,Qq,Rq,Sq,Tq){
 Oq.C([Qq,Sq],function(Uq){
  switch(Uq.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   $$GHCziClasses_zlze.J(Pq,Rq,Tq);break;
  case 3:
   $R(1,[],"False");break;
  }
 },[Pq,Rq,Tq]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:10");
var $$GHCziClasses_zdfOrdZLz2cUZRzuzdczlze=$f(4,function(Vq,Wq,Xq,Yq){
 $M(Vq,function(Zq){
  var ar=Zq.v[1];
  $M(Xq,function(br){
   var cr=br.v[0],dr=br.v[1];
   $M(Yq,function(er){
    var fr=er.v[0],gr=er.v[1];
    $$GHCziClasses_zdwzdczlze.J(ar,Wq,cr,dr,fr,gr);
   },[ar,Wq,cr,dr]);
  },[Yq,ar,Wq]);
 },[Xq,Yq,Wq]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:10");
var $$GHCziClasses_zdwzdczg=$f(6,function(hr,ir,jr,kr,lr,mr){
 hr.C([jr,lr],function(nr){
  switch(nr.g){
  case 1:
   $R(1,[],"False");break;
  case 2:
   $$GHCziClasses_zg.J(ir,kr,mr);break;
  case 3:
   $R(2,[],"True");break;
  }
 },[ir,kr,mr]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:16");
var $$GHCziClasses_zdfOrdZLz2cUZRzuzdczg=$f(4,function(or,pr,qr,rr){
 $M(or,function(sr){
  var tr=sr.v[1];
  $M(qr,function(ur){
   var vr=ur.v[0],wr=ur.v[1];
   $M(rr,function(xr){
    var yr=xr.v[0],zr=xr.v[1];
    $$GHCziClasses_zdwzdczg.J(tr,pr,vr,wr,yr,zr);
   },[tr,pr,vr,wr]);
  },[rr,tr,pr]);
 },[qr,rr,pr]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:16");
var $$GHCziClasses_zdwzdczgze=$f(6,function(Ar,Br,Cr,Dr,Er,Fr){
 Ar.C([Cr,Er],function(Gr){
  switch(Gr.g){
  case 1:
   $R(1,[],"False");break;
  case 2:
   $$GHCziClasses_zgze.J(Br,Dr,Fr);break;
  case 3:
   $R(2,[],"True");break;
  }
 },[Br,Dr,Fr]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:21");
var $$GHCziClasses_zdfOrdZLz2cUZRzuzdczgze=$f(4,function(Hr,Ir,Jr,Kr){
 $M(Hr,function(Lr){
  var Mr=Lr.v[1];
  $M(Jr,function(Nr){
   var Or=Nr.v[0],Pr=Nr.v[1];
   $M(Kr,function(Qr){
    var Rr=Qr.v[0],Sr=Qr.v[1];
    $$GHCziClasses_zdwzdczgze.J(Mr,Ir,Or,Pr,Rr,Sr);
   },[Mr,Ir,Or,Pr]);
  },[Kr,Mr,Ir]);
 },[Jr,Kr,Ir]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:21");
var $$GHCziClasses_zdwzdczl=$f(6,function(Tr,Ur,Vr,Wr,Xr,Yr){
 Tr.C([Vr,Xr],function(Zr){
  switch(Zr.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   $$GHCziClasses_zl.J(Ur,Wr,Yr);break;
  case 3:
   $R(1,[],"False");break;
  }
 },[Ur,Wr,Yr]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:5");
var $$GHCziClasses_zdfOrdZLz2cUZRzuzdczl=$f(4,function(as,bs,cs,ds){
 $M(as,function(es){
  var fs=es.v[1];
  $M(cs,function(gs){
   var hs=gs.v[0],is=gs.v[1];
   $M(ds,function(js){
    var ks=js.v[0],ls=js.v[1];
    $$GHCziClasses_zdwzdczl.J(fs,bs,hs,is,ks,ls);
   },[fs,bs,hs,is]);
  },[ds,fs,bs]);
 },[cs,ds,bs]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:129:5");
var $$GHCziClasses_zdwzdccompare=$f(6,function(ms,ns,os,ps,qs,rs){
 ms.C([os,qs],function(ss){
  switch(ss.g){
  case 1:
   $R(1,[],"LT");break;
  case 2:
   $$GHCziClasses_compare.J(ns,ps,rs);break;
  case 3:
   $R(3,[],"GT");break;
  }
 },[ns,ps,rs]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:128:5");
var $$GHCziClasses_zdfOrdZLz2cUZRzuzdccompare=$f(4,function(ts,us,vs,ws){
 $M(ts,function(xs){
  var ys=xs.v[1];
  $M(vs,function(zs){
   var As=zs.v[0],Bs=zs.v[1];
   $M(ws,function(Cs){
    var Ds=Cs.v[0],Es=Cs.v[1];
    $$GHCziClasses_zdwzdccompare.J(ys,us,As,Bs,Ds,Es);
   },[ys,us,As,Bs]);
  },[ws,ys,us]);
 },[vs,ws,us]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:128:5");
var $$GHCziClasses_zdfOrdZLz2cUZRzuzdczdp1Ord=$f(2,function(Fs,Gs){
 var Hs=$t(function(){
  $$GHCziClasses_zdp1Ord.J(Gs);
 },[Gs],"sat");
 var Is=$t(function(){
  $$GHCziClasses_zdp1Ord.J(Fs);
 },[Fs],"sat");
 $$GHCziClasses_zdfEqZLz2cUZR.J(Is,Hs);
},[],"at libraries/ghc-prim/GHC/Classes.hs:127:18");
var $$GHCziClasses_zdfOrdZLz2cUZRzuzdcmin=$f(4,function(Js,Ks,Ls,Ms){
 $M(Js,function(Ns){
  var Os=Ns.v[1];
  $M(Ls,function(Ps){
   var Qs=Ps.v[0],Rs=Ps.v[1];
   $M(Ms,function(Ss){
    var Ts=Ss.v[0],Us=Ss.v[1];
    Os.C([Qs,Ts],function(Vs){
     switch(Vs.g){
     case 1:
      $R(1,[Qs,Rs],"(,)");break;
     case 2:
      $$GHCziClasses_zlze.C([Ks,Rs,Us],function(Ws){
       switch(Ws.g){
       case 1:
	$R(1,[Ts,Us],"(,)");break;
       case 2:
	$R(1,[Qs,Rs],"(,)");break;
       }
      },[Qs,Ts,Rs,Us]);break;
     case 3:
      $R(1,[Ts,Us],"(,)");break;
     }
    },[Qs,Ts,Rs,Ks,Us]);
   },[Qs,Os,Rs,Ks]);
  },[Ms,Os,Ks]);
 },[Ls,Ms,Ks]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:130:10");
var $$GHCziClasses_zdfOrdZLz2cUZRzuzdcmax=$f(4,function(Xs,Ys,Zs,at){
 $M(Xs,function(bt){
  var ct=bt.v[1];
  $M(Zs,function(dt){
   var et=dt.v[0],ft=dt.v[1];
   $M(at,function(gt){
    var ht=gt.v[0],it=gt.v[1];
    ct.C([et,ht],function(jt){
     switch(jt.g){
     case 1:
      $R(1,[ht,it],"(,)");break;
     case 2:
      $$GHCziClasses_zlze.C([Ys,ft,it],function(kt){
       switch(kt.g){
       case 1:
	$R(1,[et,ft],"(,)");break;
       case 2:
	$R(1,[ht,it],"(,)");break;
       }
      },[et,ht,it,ft]);break;
     case 3:
      $R(1,[et,ft],"(,)");break;
     }
    },[et,ht,it,Ys,ft]);
   },[et,ct,Ys,ft]);
  },[at,ct,Ys]);
 },[Zs,at,Ys]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:130:5");
var $$GHCziClasses_zdfOrdZLz2cUZR=$f(2,function(lt,mt){
 var nt=$f(2,function(g4,h4){
  $$GHCziClasses_zdfOrdZLz2cUZRzuzdcmin.J(lt,mt,g4,h4);
 },[lt,mt],"sat");
 var ot=$f(2,function(g4,h4){
  $$GHCziClasses_zdfOrdZLz2cUZRzuzdcmax.J(lt,mt,g4,h4);
 },[lt,mt],"sat");
 var pt=$f(2,function(g4,h4){
  $$GHCziClasses_zdfOrdZLz2cUZRzuzdczlze.J(lt,mt,g4,h4);
 },[lt,mt],"sat");
 var qt=$f(2,function(g4,h4){
  $$GHCziClasses_zdfOrdZLz2cUZRzuzdczg.J(lt,mt,g4,h4);
 },[lt,mt],"sat");
 var rt=$f(2,function(g4,h4){
  $$GHCziClasses_zdfOrdZLz2cUZRzuzdczgze.J(lt,mt,g4,h4);
 },[lt,mt],"sat");
 var st=$f(2,function(g4,h4){
  $$GHCziClasses_zdfOrdZLz2cUZRzuzdczl.J(lt,mt,g4,h4);
 },[lt,mt],"sat");
 var tt=$f(2,function(g4,h4){
  $$GHCziClasses_zdfOrdZLz2cUZRzuzdccompare.J(lt,mt,g4,h4);
 },[lt,mt],"sat");
 var ut=$t(function(){
  $$GHCziClasses_zdfOrdZLz2cUZRzuzdczdp1Ord.J(lt,mt);
 },[lt,mt],"sat");
 $R(1,[ut,tt,st,rt,qt,pt,ot,nt],"D:Ord");
},[],"at libraries/ghc-prim/GHC/Classes.hs:150:1");
var $$GHCziIntegerziType_decodeDoubleInteger=$f(1,function(a){
 var b=integer_cmm_decodeDoublezh(a);
 var c=b[0],d=b[1],e=b[2];
 var f=$d(2,[d,e],"sat");
 $r([f,c]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:479:1");
var $$GHCziIntegerziType_doubleFromInteger=$f(1,function(v4){
 $M(v4,function(w4){
  switch(w4.g){
  case 1:
   var x4=w4.v[0];
   $r($hs_int2Doublezh(x4));break;
  case 2:
   var y4=w4.v[0],z4=w4.v[1];
   var $ff=integer_cbits_encodeDouble(y4,z4,goog.math.Long.fromBits(0,0));
   var A4=[$$GHCziPrim_realWorldzh,$ff];
   var B4=A4[1];
   $A(B4);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:490:1");
var $$GHCziIntegerziType_zdfEqInteger=$D(1,function(){
 $r([$$GHCziIntegerziType_eqInteger,$$GHCziIntegerziType_neqInteger]);
},"at libraries/integer-gmp/GHC/Integer/Type.lhs:327:11");
var $$GHCziIntegerziType_zdfOrdIntegerzuzdcmin=$f(2,function(Da,Ea){
 $$GHCziIntegerziType_leInteger.C([Da,Ea],function(Fa){
  switch(Fa.g){
  case 1:
   $A(Ea);break;
  case 2:
   $A(Da);break;
  }
 },[Da,Ea]);
},[],"in `integer-gmp:GHC.Integer.Type'");
var $$GHCziIntegerziType_zdfOrdIntegerzuzdcmax=$f(2,function(Ga,Ha){
 $$GHCziIntegerziType_leInteger.C([Ga,Ha],function(Ia){
  switch(Ia.g){
  case 1:
   $A(Ga);break;
  case 2:
   $A(Ha);break;
  }
 },[Ga,Ha]);
},[],"in `integer-gmp:GHC.Integer.Type'");
var $$GHCziIntegerziType_zdfOrdInteger=$D(1,function(){
 $r([$$GHCziIntegerziType_zdfEqInteger,$$GHCziIntegerziType_compareInteger,$$GHCziIntegerziType_ltInteger,$$GHCziIntegerziType_geInteger,$$GHCziIntegerziType_gtInteger,$$GHCziIntegerziType_leInteger,$$GHCziIntegerziType_zdfOrdIntegerzuzdcmax,$$GHCziIntegerziType_zdfOrdIntegerzuzdcmin]);
},"at libraries/integer-gmp/GHC/Integer/Type.lhs:383:10");
var $$DataziTimeziClockziCTimeval_getCTimeval1=$f(1,function(b2){
 var c2=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(16,0),goog.math.Long.fromBits(8,0),b2);
 var d2=c2[0],e2=c2[1];
 var f2=$hs_unsafeFreezzeByteArrayzh(e2,d2);
 var g2=f2[0],h2=f2[1];
 var C2=$hs_byteArrayContentszh(h2);
 var E2=$hs_writeInt64OffAddrzh(C2,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),g2);
 var D2=$hs_writeInt64OffAddrzh(C2,goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0),E2);
 var $ff=gettimeofday(C2,null);
 var i2=[D2,$ff];
 var j2=i2[0],k2=i2[1];
 var l2=$hs_narrow32Intzh(k2);
 switch(l2.toString()){
 case "0":
  var s2=$hs_readInt64OffAddrzh(C2,goog.math.Long.fromBits(0,0),j2);
  var t2=s2[0],u2=s2[1];
  var v2=$hs_readInt64OffAddrzh(C2,goog.math.Long.fromBits(1,0),t2);
  var w2=v2[0],x2=v2[1];
  var B2=$hs_touchzh(h2,w2);
  var y2=$d(1,[x2],"sat");
  var z2=$d(1,[u2],"sat");
  var A2=$d(1,[z2,y2],"sat");
  $r([B2,A2]);break;
 default:
  var m2=$t(function(){
   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),l2,$$GHCziTypes_ZMZN);
  },[l2],"sat");
  $$GHCziCString_unpackAppendCStringzh.C(["error in gettimeofday: ",m2],function(n2){
   $$GHCziIO_failIO.C([n2,j2],function(o2){
    var p2=o2[0],q2=o2[1];
    var r2=$hs_touchzh(h2,p2);
    $r([r2,q2]);
   },[h2]);
  },[h2,j2]);
 }
},[],"in `time-1.4:Data.Time.Clock.CTimeval'");
var $$DataziTimeziClockziPOSIX_posixSecondsToUTCTime1=$D(1,function(){
 $r([goog.math.Long.fromBits(40587,0)]);
},"in `time-1.4:Data.Time.Clock.POSIX'");
var $$DataziTimeziClockziPOSIX_posixDayLength1=$D(1,function(){
 $r([goog.math.Long.fromBits(2627207168,20116567)]);
},"in `time-1.4:Data.Time.Clock.POSIX'");
var $$DataziTimeziClockziPOSIX_zdwposixSecondsToUTCTime=$f(1,function(a){
 var b=$t(function(){
  $$GHCziReal_zdwzdczs.C([a,$$GHCziReal_zdfEnumRatio2,$$DataziFixed_zdfHasResolutionE7,$$GHCziReal_zdfEnumRatio2],function(c){
   var d=c[0],e=c[1];
   $$GHCziReal_zdwzdczs.C([$$DataziTimeziClockziPOSIX_posixDayLength1,$$GHCziReal_zdfEnumRatio2,$$DataziFixed_zdfHasResolutionE7,$$GHCziReal_zdfEnumRatio2],function(f){
    var g=f[0],h=f[1];
    $$GHCziReal_zdwzdczs.C([d,e,g,h],function(i){
     var j=i[0],k=i[1];
     $$GHCziReal_zdwzdcfloor.J($$GHCziReal_zdfIntegralInteger,j,k);
    },[]);
   },[d,e]);
  },[]);
 },[a],"f");
 var l=$t(function(){
  $$GHCziIntegerziType_timesInteger.C([b,$$DataziFixed_zdfHasResolutionE7],function(m){
   $$DataziFixed_zdfNumFixed6.C([$$DataziFixed_zdfHasResolutionE12zuzdcresolution,m,$$DataziTimeziClockziPOSIX_posixDayLength1],function(n){
    $$GHCziIntegerziType_minusInteger.C([a,n],function(o){
     $$GHCziReal_zdwzdczs.C([o,$$GHCziReal_zdfEnumRatio2,$$DataziFixed_zdfHasResolutionE7,$$GHCziReal_zdfEnumRatio2],function(p){
      var q=p[0],r=p[1];
      $$DataziFixed_zdwzdcfromRational.J($$DataziFixed_zdfHasResolutionE12zuzdcresolution,q,r);
     },[]);
    },[]);
   },[a]);
  },[a]);
 },[a,b],"sat");
 var s=$t(function(){
  $$GHCziIntegerziType_plusInteger.J($$DataziTimeziClockziPOSIX_posixSecondsToUTCTime1,b);
 },[b],"sat");
 $r([s,l]);
},[],"at libraries/time/Data/Time/Clock/POSIX.hs:34:1");
var $$DataziTimeziClockziPOSIX_getPOSIXTime2=$D(1,function(){
 $r([goog.math.Long.fromBits(2808348672,232830643)]);
},"in `time-1.4:Data.Time.Clock.POSIX'");
var $$DataziTimeziClockziPOSIX_getPOSIXTime1=$f(1,function(L){
 $$DataziTimeziClockziCTimeval_getCTimeval1.C([L],function(M){
  var N=M[0],O=M[1];
  var P=$t(function(){
   $M(O,function(Q){
    var R=Q.v[0],S=Q.v[1];
    $M(R,function(T){
     var U=T.v[0];
     $M(S,function(V){
      var W=V.v[0];
      $$GHCziIntegerziType_smallInteger.C([W],function(X){
       $$GHCziIntegerziType_timesInteger.C([X,$$DataziFixed_zdfHasResolutionE7],function(Y){
	$$DataziFixed_zdfFractionalFixed1.C([$$DataziFixed_zdfHasResolutionE12zuzdcresolution,Y,$$DataziTimeziClockziPOSIX_getPOSIXTime2],function(Z){
	 $$GHCziIntegerziType_smallInteger.C([U],function(a1){
	  $$GHCziIntegerziType_timesInteger.C([a1,$$DataziFixed_zdfHasResolutionE7],function(b1){
	   $$GHCziIntegerziType_plusInteger.J(b1,Z);
	  },[Z]);
	 },[Z]);
	},[U]);
       },[U]);
      },[U]);
     },[U]);
    },[S]);
   },[]);
  },[O],"sat");
  $r([N,P]);
 },[]);
},[],"in `time-1.4:Data.Time.Clock.POSIX'");
var $$$Main_lazzyLoadzufreecell=$f(4,function(c,d,a,b){
 $$Main$R.J(c,d,a,b);
},[],"at src/Main.hs:158:1");
var $$Main$s=$D(1,function(){
 $r([goog.math.Long.fromBits(1000000000,0)]);
},"lvl");
var $$Main$t=$F(1,function(Z5){
 var $ff=rtsSupportsBoundThreads();
 var a6=[$$GHCziPrim_realWorldzh,$ff];
 var b6=a6[1];
 $M(b6,function(c6){
  switch(c6.toString()){
  case "0":
   $b($hs_delayzh,[goog.math.Long.fromBits(1000000000,0),Z5],function(d6){
    $r([d6,$$GHCziTuple_Z0T]);
   },[]);break;
  default:
   $$GHCziEventziThread_threadDelay1.J($$Main$s,Z5);
  }
 },[Z5]);
},"a18");
var $$Main$u=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Main.hs:162:5-12");
},"a19");
var $$Main$K=$T(function(){
 $$GHCziCString_unpackCStringzh.J("freecell");
},"lvl16");
var $$Main$L=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<div style=\"position:relative;left:0px;top:0px;background-color:#e0d0ff;width:700px;height:500px\" id=\"freecell\" draggable=\"false\"></div>");
},"lvl17");
var $$Main$R=$F(4,function(i6,j6,k6,l6){
 $$GraphicsziUIziGtkziWebKitziDOMziHTMLElement_htmlElementSetInnerHTML1.C([i6,k6,$$Main$L,l6],function(m6){
  var n6=m6[0];
  $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,j6,$$Main$K,n6],function(o6){
   var p6=o6[0],q6=o6[1];
   $M(q6,function(r6){
    switch(r6.g){
    case 1:
     $$GHCziIO_failIO.J($$Main$u,p6);break;
    case 2:
     var s6=r6.v[0];
     $$Freecell_mkFreecell1.C([p6],function(t6){
      var u6=t6[0],v6=t6[1];
      var w6=$t(function(){
       var x6=$t(function(){
	$M(s6,function(y6){
	 var z6=y6.v[0];
	 $R(1,[z6],"Ptr");
	},[]);
       },[s6],"sat");
       $$SystemziGlibziGType_typeInstanceIsA.C([x6,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLElement],function(A6){
	switch(A6.g){
	case 1:
	 $A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLElement1);break;
	case 2:
	 $A(s6);break;
	}
       },[s6]);
      },[s6],"sat");
      $$Engine_engine1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,j6,w6,v6,u6],function(B6){
       var C6=B6[0],D6=B6[1];
       var E6=$f(1,function(F6){
	var G6=$f(1,function(H6){
	 $$Main_zdsforever.C([$$Main$t,H6],function(I6){
	  var J6=I6[0];
	  D6.J(J6);
	 },[D6]);
	},[D6],"sat");
	$k($hs_catchzh,[G6,$$GHCziConcziSync_forkIO2,F6]);
       },[D6],"sat");
       var K6=$hs_forkzh(E6,C6);
       var L6=K6[0];
       $r([L6,$$GHCziTuple_Z0T]);
      },[]);
     },[j6,s6]);break;
    }
   },[j6,p6]);
  },[j6]);
 },[j6]);
},"a24");
//@ sourceURL=hs1.js
