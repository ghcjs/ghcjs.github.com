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
    $$GHCziReal_zdwzdczs.C([r3,$$GHCziReal_zdfEnumRatio1,$$DataziFixed_zdfHasResolutionE7,$$GHCziReal_zdfEnumRatio1],function(s3){
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
  $M(g5,function(i5){
   var j5=i5.v[0];
   $M(j5,function(k5){
    switch(k5.toString()){
    case "1":
     $A($$SystemziRandom_zdfRandomGenStdGen1);break;
    default:
     var m5=k5.subtract(goog.math.Long.fromBits(1,0));
     var l5=$hs_narrow32Intzh(m5);
     $R(1,[l5],"I32#");
    }
   },[]);
  },[]);
 },[g5],"sat");
 var n5=$t(function(){
  $M(f5,function(o5){
   var p5=o5.v[0];
   var E5=$hs_quotIntzh(p5,goog.math.Long.fromBits(53668,0));
   var C5=$hs_narrow32Intzh(E5);
   var D5=C5.multiply(goog.math.Long.fromBits(12211,0));
   var w5=$hs_narrow32Intzh(D5);
   var B5=C5.multiply(goog.math.Long.fromBits(53668,0));
   var A5=$hs_narrow32Intzh(B5);
   var z5=p5.subtract(A5);
   var y5=$hs_narrow32Intzh(z5);
   var x5=goog.math.Long.fromBits(40014,0).multiply(y5);
   var v5=$hs_narrow32Intzh(x5);
   var u5=v5.subtract(w5);
   var r5=$hs_narrow32Intzh(u5);
   var q5=r5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(q5.g){
   case 1:
    $R(1,[r5],"I32#");break;
   case 2:
    var t5=r5.add(goog.math.Long.fromBits(2147483563,0));
    var s5=$hs_narrow32Intzh(t5);
    $R(1,[s5],"I32#");break;
   }
  },[]);
 },[f5],"sat");
 var F5=$d(1,[n5,h5],"sat");
 var G5=$t(function(){
  $M(g5,function(H5){
   var I5=H5.v[0];
   var X5=$hs_quotIntzh(I5,goog.math.Long.fromBits(52774,0));
   var V5=$hs_narrow32Intzh(X5);
   var W5=V5.multiply(goog.math.Long.fromBits(3791,0));
   var P5=$hs_narrow32Intzh(W5);
   var U5=V5.multiply(goog.math.Long.fromBits(52774,0));
   var T5=$hs_narrow32Intzh(U5);
   var S5=I5.subtract(T5);
   var R5=$hs_narrow32Intzh(S5);
   var Q5=goog.math.Long.fromBits(40692,0).multiply(R5);
   var O5=$hs_narrow32Intzh(Q5);
   var N5=O5.subtract(P5);
   var K5=$hs_narrow32Intzh(N5);
   var J5=K5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(J5.g){
   case 1:
    $R(1,[K5],"I32#");break;
   case 2:
    var M5=K5.add(goog.math.Long.fromBits(2147483399,0));
    var L5=$hs_narrow32Intzh(M5);
    $R(1,[L5],"I32#");break;
   }
  },[]);
 },[g5],"sat");
 var Y5=$t(function(){
  $M(f5,function(Z5){
   var a6=Z5.v[0];
   $M(a6,function(b6){
    switch(b6.toString()){
    case "2147483562":
     $A($$SystemziRandom_zdfRandomGenStdGen2);break;
    default:
     var d6=b6.add(goog.math.Long.fromBits(1,0));
     var c6=$hs_narrow32Intzh(d6);
     $R(1,[c6],"I32#");
    }
   },[]);
  },[]);
 },[f5],"sat");
 var e6=$d(1,[Y5,G5],"sat");
 $r([e6,F5]);
},[],"at System/Random.hs:163:4");
var $$SystemziRandom_zdfRandomGenStdGenzuzdcsplit=$f(1,function(f6){
 $M(f6,function(g6){
  var h6=g6.v[0],i6=g6.v[1];
  $$SystemziRandom_zdwzdcsplit.C([h6,i6],function(j6){
   var k6=j6[0],l6=j6[1];
   $R(1,[k6,l6],"(,)");
  },[]);
 },[]);
},[],"at System/Random.hs:163:4");
var $$SystemziRandom_zdwzdsrandomIvalInteger=$f(3,function(Uj,Vj,Wj){
 $$GHCziIntegerziType_gtInteger.C([Uj,Vj],function(Xj){
  switch(Xj.g){
  case 1:
   $$GHCziIntegerziType_minusInteger.C([Vj,Uj],function(Yj){
    $$GHCziIntegerziType_plusInteger.C([Yj,$$SystemziRandom_zdfRandomBool3],function(Zj){
     $$SystemziRandom$A.C([$$SystemziRandom$z,Zj],function(ak){
      $$SystemziRandom$G.C([ak,$$SystemziRandom_zdfRandomBool3,Wj],function(bk){
       var ck=bk[0],dk=bk[1];
       var ek=$t(function(){
	$$GHCziIntegerziType_eqInteger.C([Zj,$$GHCziReal_even1],function(fk){
	 switch(fk.g){
	 case 1:
	  $$GHCziIntegerziType_divModInteger.C([ck,Zj],function(gk){
	   var hk=gk[1];
	   $$GHCziIntegerziType_plusInteger.C([Uj,hk],function(ik){
	    $$GHCziIntegerziType_integerToInt.C([ik],function(jk){
	     $R(1,[jk],"I#");
	    },[]);
	   },[]);
	  },[Uj]);break;
	 case 2:
	  $A($$GHCziErr_divZZeroError);break;
	 }
	},[Uj,Zj,ck]);
       },[Uj,Zj,ck],"sat");
       $r([ek,dk]);
      },[Uj,Zj]);
     },[Uj,Zj,Wj]);
    },[Uj,Wj]);
   },[Uj,Wj]);break;
  case 2:
   $$SystemziRandom_zdwzdsrandomIvalInteger.J(Vj,Uj,Wj);break;
  }
 },[Uj,Vj,Wj]);
},[],"at System/Random.hs:425:1");
var $$SystemziRandom$z=$D(1,function(){
 $r([goog.math.Long.fromBits(2147483561,0)]);
},"at System/Random.hs:431:8");
var $$SystemziRandom$A=$F(2,function(G1L,H1L){
 $$GHCziIntegerziType_ltInteger.C([H1L,G1L],function(I1L){
  switch(I1L.g){
  case 1:
   $$GHCziIntegerziType_eqInteger.C([G1L,$$GHCziReal_even1],function(J1L){
    switch(J1L.g){
    case 1:
     $$GHCziIntegerziType_divModInteger.C([H1L,G1L],function(K1L){
      var L1L=K1L[0];
      $$SystemziRandom$A.C([G1L,L1L],function(M1L){
       $$GHCziIntegerziType_plusInteger.J($$SystemziRandom_zdfRandomBool3,M1L);
      },[]);
     },[G1L]);break;
    case 2:
     $A($$GHCziErr_divZZeroError);break;
    }
   },[H1L,G1L]);break;
  case 2:
   $A($$SystemziRandom_zdfRandomBool3);break;
  }
 },[H1L,G1L]);
},"at System/Random.hs:469:1");
var $$SystemziRandom$G=$F(3,function(b1M,c1M,d1M){
 $$GHCziIntegerziType_eqInteger.C([b1M,$$SystemziRandom_getStdRandom3],function(e1M){
  switch(e1M.g){
  case 1:
   var f1M=$t(function(){
    $M(d1M,function(g1M){
     var h1M=g1M.v[0],i1M=g1M.v[1];
     $$SystemziRandom_zdwzdcnext.C([h1M,i1M],function(j1M){
      var k1M=j1M[0],l1M=j1M[1];
      $R(1,[k1M,l1M],"(,)");
     },[]);
    },[]);
   },[d1M],"ds");
   var m1M=$t(function(){
    $M(f1M,function(n1M){
     var o1M=n1M.v[1];
     $A(o1M);
    },[]);
   },[f1M],"sat");
   var p1M=$t(function(){
    $M(f1M,function(q1M){
     var r1M=q1M.v[0];
     $M(r1M,function(s1M){
      var t1M=s1M.v[0];
      $$GHCziIntegerziType_timesInteger.C([c1M,$$SystemziRandom$z],function(u1M){
       $$GHCziIntegerziType_smallInteger.C([t1M],function(v1M){
	$$GHCziIntegerziType_plusInteger.J(v1M,u1M);
       },[u1M]);
      },[t1M]);
     },[c1M]);
    },[c1M]);
   },[f1M,c1M],"sat");
   $$GHCziIntegerziType_minusInteger.C([b1M,$$SystemziRandom_zdfRandomBool3],function(w1M){
    $$SystemziRandom$G.J(w1M,p1M,m1M);
   },[m1M,p1M]);break;
  case 2:
   $r([c1M,d1M]);break;
  }
 },[b1M,d1M,c1M]);
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
var $$FRPziSodiumziPlain_zdsinsertzugo1=$f(3,function(t1,u1,v1){
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
       $$FRPziSodiumziPlain_zdsinsertzugo1.C([w1,u1,D1],function(I1){
	$$DataziMap_balanceR.J(E1,B1,C1,I1);
       },[E1,B1,C1]);break;
      case 2:
       $R(2,[z1,w1,u1,C1,D1],"Bin");break;
      }break;
     case 2:
      $$FRPziSodiumziPlain_zdsinsertzugo1.C([w1,u1,C1],function(J1){
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
var $$FRPziSodiumziPlain_pushPriorityQueue1=$f(4,function(wb,xb,yb,zb){
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
      $$DataziMap_insert.J($$FRPziSodiumziPlain$b,Wb,yb,Ub);
     },[Cb,Lb,yb,Ub],"sat");
     var fc=$hs_writeMutVarzh(Rb,Vb,Tb);
     $M(Gb,function(Xb){
      var Yb=Xb.v[0];
      var Zb=$hs_readMutVarzh(Yb,fc);
      var ac=Zb[0],bc=Zb[1];
      var cc=$t(function(){
       var dc=$d(1,[xb,yb],"sat");
       $$FRPziSodiumziPlain_zdsinsertzugo1.J(Lb,dc,bc);
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
       $$DataziMap_delete.J($$FRPziSodiumziPlain$c,le,Sd);
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
	     $$DataziMap_insert.J($$FRPziSodiumziPlain$c,Ze,Te,Xe);
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
		$$DataziMap_insert.J($$FRPziSodiumziPlain$c,Of,Te,Jf);
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
		  $$DataziMap_insert.J($$FRPziSodiumziPlain$c,tf,Te,of);
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
 $$FRPziSodiumziPlain$d.J(w,x);
},[],"at src/FRP/Sodium/Plain.hs:584:1");
var $$FRPziSodiumziPlain_touch=$f(2,function(w,x){
 $$FRPziSodiumziPlain$e.J(w,x);
},[],"at src/FRP/Sodium/Plain.hs:588:1");
var $$FRPziSodiumziPlain_unSample=$f(2,function(w,x){
 $$FRPziSodiumziPlain$f.J(w,x);
},[],"at src/FRP/Sodium/Plain.hs:83:1");
var $$FRPziSodiumziPlain_finalizzeListen=$f(3,function(P,w,x){
 $$FRPziSodiumziPlain$g.J(P,w,x);
},[],"at src/FRP/Sodium/Plain.hs:710:1");
var $$FRPziSodiumziPlain_finalizzeSample=$f(3,function(P,w,x){
 $$FRPziSodiumziPlain$h.J(P,w,x);
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
var $$FRPziSodiumziPlain_listen2=$f(6,function(dm,em,fm,gm,hm,im){
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
var $$FRPziSodiumziPlain_values5=$f(3,function(On,Pn,Qn){
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
var $$FRPziSodiumziPlain_values3=$f(6,function(Uo,Vo,Wo,Xo,Yo,Zo){
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
    $$FRPziSodiumziPlain_pushPriorityQueue1.C([wp,Vo,mp,Dp],function(zp){
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
var $$FRPziSodiumziPlain_values2=$f(6,function(Fp,Gp,Hp,Ip,Jp,Kp){
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
 $$FRPziSodiumziPlain_values3.J(Lp,Gp,Hp,Ip,Jp,Kp);
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
var $$FRPziSodiumziPlain_hold1=$f(4,function(Ls,Ms,Ns,Os){
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
  $$FRPziSodiumziPlain_listen2.J(Ms,$$DataziMaybe_Nothing,$$GHCziTypes_False,Us);
 },[Ms,Us],"sat");
 $$FRPziSodiumziPlain_values5.C([Gt,Ns,Ss],function(Ht){
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
var $$FRPziSodiumziPlain_values6=$f(1,function(ru){
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
	    $$FRPziSodiumziPlain_values6.C([NE],function(QE){
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
	      $$FRPziSodiumziPlain_values5.C([iF,PE,RE],function(MF){
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
	$$FRPziSodiumziPlain_values6.C([KH],function(NH){
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
	  $$FRPziSodiumziPlain_values5.C([WH,MH,OH],function(rI){
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
  $$FRPziSodiumziPlain_values6.C([hJ],function(iJ){
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
       $$FRPziSodiumziPlain_values5.C([BJ,AJ,yJ],function(LJ){
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
  $$FRPziSodiumziPlain_values6.C([sK],function(tK){
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
	$$FRPziSodiumziPlain_values5.C([YK,rK,IK],function(IL){
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
 $$FRPziSodiumziPlain_values6.C([FU],function(GU){
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
  $$FRPziSodiumziPlain_values6.C([NW],function(OW){
   var PW=OW[0],QW=OW[1];
   $M(QW,function(RW){
    var SW=RW.v[0],TW=RW.v[1],UW=RW.v[2];
    var VW=$t(function(){
     var WW=$d(2,[UW],"sat");
     CW.J(WW,$$GHCziTypes_False,TW);
    },[UW,CW,TW],"sat");
    $$FRPziSodiumziPlain_values5.C([VW,MW,PW],function(XW){
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
var $$FRPziSodiumziPlain$a=$F(1,function(I11){
 var T11=$hs_noDuplicatezh(I11);
 var J11=$hs_newMVarzh(T11);
 var K11=J11[0],L11=J11[1];
 var M11=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
 var N11=$hs_newMutVarzh(M11,K11);
 var O11=N11[0],P11=N11[1];
 var Q11=$d(1,[P11],"sat");
 var R11=$d(1,[L11],"sat");
 var S11=$d(1,[R11,Q11],"sat");
 $r([O11,S11]);
},"sat");
var $$FRPziSodiumziPlain$b=$T(function(){
 $$GHCziClasses_zdfOrdZLz2cUZR.J($$GHCziInt_zdfOrdInt64,$$FRPziSodiumziPlain_zdfOrdSequence);
},"at src/FRP/Sodium/Plain.hs:455:31");
var $$FRPziSodiumziPlain$c=$T(function(){
 $$GHCziClasses_zdfOrdZLz2cUZR.J($$GHCziInt_zdfOrdInt64,$$FRPziSodiumziPlain_zdfOrdSequence);
},"at src/FRP/Sodium/Plain.hs:481:43");
var $$FRPziSodiumziPlain$d=$F(2,function(U11,V11){
 var W11=$d(1,[U11],"sat");
 $r([V11,W11]);
},"a");
var $$FRPziSodiumziPlain$e=$F(2,function(X11,Y11){
 $b($hs_seqzh,[X11,Y11],function(Z11){
  var a12=Z11[0];
  $r([a12,$$GHCziTuple_Z0T]);
 },[]);
},"a1");
var $$FRPziSodiumziPlain$f=$F(2,function(b12,c12){
 $M(b12,function(d12){
  var e12=d12.v[0];
  e12.C([c12],function(f12){
   var g12=f12[0],h12=f12[1];
   $$FRPziSodiumziPlain_touch.C([d12,g12],function(i12){
    var j12=i12[0];
    h12.J(j12);
   },[h12]);
  },[d12]);
 },[c12]);
},"a2");
var $$FRPziSodiumziPlain$g=$F(3,function(k12,l12,m12){
 var n12=$hs_mkWeakzh(k12,k12,l12,m12);
 var o12=n12[0];
 $r([o12,k12]);
},"a3");
var $$FRPziSodiumziPlain$h=$F(3,function(p12,q12,r12){
 var s12=$hs_mkWeakzh(p12,p12,q12,r12);
 var t12=s12[0];
 $r([t12,p12]);
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
var $$GraphicsziUIziGtkziWebKitziDOMziEventM_zdwa11=$f(3,function(Ad,Bd,Cd){
 var Dd=$t(function(){
  $M(Bd,function(Ed){
   var Fd=Ed.v[1];
   $A(Fd);
  },[]);
 },[Bd],"sat");
 Ad.C([Dd],function(Gd){
  var Hd=Gd.v[0],Id=Gd.v[1];
  var $ff=webkit_dom_mouse_event_get_offset_x(Hd);
  var Jd=[Cd,$ff];
  var Kd=Jd[0],Ld=Jd[1];
  var Td=$hs_touchzh(Id,Kd);
  var $ff=webkit_dom_mouse_event_get_offset_y(Hd);
  var Md=[Td,$ff];
  var Nd=Md[0],Od=Md[1];
  var Sd=$hs_touchzh(Id,Nd);
  var Pd=$d(1,[Od],"sat");
  var Qd=$d(1,[Ld],"sat");
  var Rd=$d(1,[Qd,Pd],"sat");
  $r([Sd,Rd]);
 },[Cd]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.EventM'");
var $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeRemoveChild1=$f(5,function(b3,c3,d3,e3,f3){
 var g3=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),f3);
 var h3=g3[0],i3=g3[1];
 var j3=$hs_unsafeFreezzeByteArrayzh(i3,h3);
 var k3=j3[0],l3=j3[1];
 var q3=$hs_byteArrayContentszh(l3);
 var r3=$hs_writeAddrOffAddrzh(q3,goog.math.Long.fromBits(0,0),null,k3);
 $$SystemziGlibziTypes_toGObject.C([b3,d3],function(m3){
  var n3=m3.v[0],o3=m3.v[1];
  var p3=$f(2,function(s3,t3){
   var $ff=webkit_dom_node_remove_child(n3,s3,q3);
   var u3=[r3,$ff];
   var v3=u3[0],w3=u3[1];
   var b4=$hs_touchzh(t3,v3);
   var a4=$hs_touchzh(o3,b4);
   var x3=$hs_readAddrOffAddrzh(q3,goog.math.Long.fromBits(0,0),a4);
   var y3=x3[0],z3=x3[1];
   var A3=$hs_eqAddrzh(z3,null);
   switch(A3.g){
   case 1:
    var Q3=$hs_plusAddrzh(z3,goog.math.Long.fromBits(0,0));
    var B3=$hs_readWord32OffAddrzh(Q3,goog.math.Long.fromBits(0,0),y3);
    var C3=B3[0],D3=B3[1];
    var P3=$hs_plusAddrzh(z3,goog.math.Long.fromBits(4,0));
    var E3=$hs_readInt32OffAddrzh(P3,goog.math.Long.fromBits(0,0),C3);
    var F3=E3[0],G3=E3[1];
    var O3=$hs_plusAddrzh(z3,goog.math.Long.fromBits(8,0));
    var H3=$hs_readAddrOffAddrzh(O3,goog.math.Long.fromBits(0,0),F3);
    var I3=H3[0],J3=H3[1];
    $$ForeignziCziString_zdwa.C([J3,I3],function(K3){
     var L3=K3[0],M3=K3[1];
     var $ff=g_error_free(z3);
     var N3=[L3,$ff];
     $$GraphicsziUIziGtkziWebKitziDOMziNode$a.J(D3,G3,M3);
    },[z3,D3,G3]);break;
   case 2:
    var Z3=$hs_touchzh(l3,y3);
    var R3=$hs_eqAddrzh(w3,null);
    switch(R3.g){
    case 1:
     var S3=$f(1,function(T3){
      var U3=$d(1,[w3],"sat");
      $r([T3,U3]);
     },[w3],"sat");
     $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkNode1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,S3,Z3],function(V3){
      var W3=V3[0],X3=V3[1];
      var Y3=$d(2,[X3],"sat");
      $r([W3,Y3]);
     },[]);break;
    case 2:
     $r([Z3,$$DataziMaybe_Nothing]);break;
    }break;
   }
  },[l3,q3,n3,r3,o3],"$w$j");
  $M(e3,function(c4){
   switch(c4.g){
   case 1:
    $M($$SystemziGlibziFFI_nullForeignPtr,function(d4){
     var e4=d4.v[0],f4=d4.v[1];
     p3.J(e4,f4);
    },[l3,q3,n3,r3,o3,p3]);break;
   case 2:
    var g4=c4.v[0];
    $$SystemziGlibziTypes_toGObject.C([c3,g4],function(h4){
     var i4=h4.v[0],j4=h4.v[1];
     p3.J(i4,j4);
    },[l3,q3,n3,r3,o3,p3]);break;
   }
  },[l3,q3,n3,r3,o3,p3,c3]);
 },[l3,q3,r3,e3,c3]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Node'");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$k1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2038:1");
var $$GraphicsziUIziGtkziWebKitziTypes$k1=$T(function(){
 var $ff=webkit_dom_element_get_type();
 var wH=[$$GHCziPrim_realWorldzh,$ff];
 var xH=wH[1];
 $R(1,[xH],"W64#");
},"a61");
var $$Engine_zdwa=$f(5,function(k,l,m,n,o){
 $$GraphicsziUIziGtkziWebKitziDOMziEventM_zdwa11.C([l,n,o],function(p){
  var q=p[0],r=p[1];
  var s=$t(function(){
   $M(n,function(t){
    var u=t.v[1];
    $A(u);
   },[]);
  },[n],"sat");
  l.C([s],function(v){
   var w=v.v[0],x=v.v[1];
   var $ff=webkit_dom_mouse_event_get_to_element(w);
   var y=[q,$ff];
   var z=y[0],A=y[1];
   var R1=$hs_touchzh(x,z);
   var B=$hs_eqAddrzh(A,null);
   switch(B.g){
   case 1:
    var C=$f(1,function(D){
     var E=$d(1,[A],"sat");
     $r([D,E]);
    },[A],"sat");
    $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkNode1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,C,R1],function(F){
     var G=F[0],H=F[1];
     var I=$t(function(){
      $M(H,function(J){
       var K=J.v[0];
       $R(1,[K],"Ptr");
      },[]);
     },[H],"sat");
     $$SystemziGlibziGType_typeInstanceIsA.C([I,$$GraphicsziUIziGtkziWebKitziTypes_gTypeElement],function(L){
      switch(L.g){
      case 1:
       $r([G,$$DataziMaybe_Nothing]);break;
      case 2:
       $M(r,function(M){
	var N=M.v[0],O=M.v[1];
	var P=$f(4,function(Q,R,S,T){
	 $M(k,function(U){
	  var V=U.v[0];
	  V.C([m],function(W){
	   var X=W.v[0],Y=W.v[1];
	   $M(Q,function(Z){
	    var a1=Z.v[0],b1=Z.v[1];
	    var $ff=webkit_dom_node_is_equal_node(X,a1);
	    var c1=[T,$ff];
	    var d1=c1[0],e1=c1[1];
	    var Q1=$hs_touchzh(b1,d1);
	    var i1=$hs_touchzh(Y,Q1);
	    var f1=$hs_narrow32Intzh(e1);
	    switch(f1.toString()){
	    case "0":
	     var $ff=webkit_dom_node_get_parent_element(a1);
	     var j1=[i1,$ff];
	     var k1=j1[0],l1=j1[1];
	     var P1=$hs_touchzh(b1,k1);
	     var m1=$f(2,function(n1,o1){
	      $M(o1,function(p1){
	       switch(p1.g){
	       case 1:
		$r([n1,$$DataziMaybe_Nothing]);break;
	       case 2:
		var q1=p1.v[0];
		var $ff=webkit_dom_element_get_offset_left(a1);
		var r1=[n1,$ff];
		var s1=r1[0],t1=r1[1];
		var G1=$hs_touchzh(b1,s1);
		var $ff=webkit_dom_element_get_offset_top(a1);
		var u1=[G1,$ff];
		var v1=u1[0],w1=u1[1];
		var F1=$hs_touchzh(b1,v1);
		var x1=$t(function(){
		 $M(S,function(y1){
		  var z1=y1.v[0];
		  var A1=z1.add(w1);
		  $R(1,[A1],"I#");
		 },[w1]);
		},[S,w1],"sat");
		var B1=$t(function(){
		 $M(R,function(C1){
		  var D1=C1.v[0];
		  var E1=D1.add(t1);
		  $R(1,[E1],"I#");
		 },[t1]);
		},[R,t1],"sat");
		P.J(q1,B1,x1,F1);break;
	       }
	      },[k,m,a1,b1,R,S,n1,P]);
	     },[a1,b1,R,S,P],"$j");
	     var H1=$hs_eqAddrzh(l1,null);
	     switch(H1.g){
	     case 1:
	      var I1=$f(1,function(J1){
	       var K1=$d(1,[l1],"sat");
	       $r([J1,K1]);
	      },[l1],"sat");
	      $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkElement1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,I1,P1],function(L1){
	       var M1=L1[0],N1=L1[1];
	       var O1=$d(2,[N1],"sat");
	       m1.J(M1,O1);
	      },[k,m,a1,b1,R,S,P,m1]);break;
	     case 2:
	      m1.J(P1,$$DataziMaybe_Nothing);break;
	     }break;
	    default:
	     var g1=$d(1,[R,S],"sat");
	     var h1=$d(2,[g1],"sat");
	     $r([i1,h1]);
	    }
	   },[k,m,X,T,Y,R,S,P]);
	  },[k,m,Q,T,R,S,P]);
	 },[k,m,Q,T,R,S,P]);
	},[k,m],"$wa1");
	P.J(H,N,O,G);
       },[H,G,k,m]);break;
      }
     },[H,G,r,k,m]);
    },[r,k,m]);break;
   case 2:
    $r([R1,$$DataziMaybe_Nothing]);break;
   }
  },[q,r,k,m]);
 },[l,n,k,m]);
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_toWorld=$f(1,function(v2){
 $M(v2,function(w2){
  var x2=w2.v[0],y2=w2.v[1];
  var z2=$t(function(){
   $M(y2,function(A2){
    var B2=A2.v[0];
    var E2=$hs_int2Doublezh(B2);
    var D2=E2/0.25;
    var C2=1000.0-D2;
    $R(1,[C2],"D#");
   },[]);
  },[y2],"sat");
  var F2=$t(function(){
   $M(x2,function(G2){
    var H2=G2.v[0];
    var K2=$hs_int2Doublezh(H2);
    var J2=K2/0.25;
    var I2=J2+ -1400.0;
    $R(1,[I2],"D#");
   },[]);
  },[x2],"sat");
  $R(1,[F2,z2],"(,)");
 },[]);
},[],"at src/Engine.hs:35:1");
var $$Engine_zdwfromWorldRect=$f(4,function(L2,M2,N2,O2){
 var P2=$t(function(){
  $M(O2,function(Q2){
   var R2=Q2.v[0];
   var W2=R2*0.25;
   var V2=W2*2.0;
   var $ff=rintDouble(V2);
   var S2=[$$GHCziPrim_realWorldzh,$ff];
   var T2=S2[1];
   var U2=$hs_double2Intzh(T2);
   $R(1,[U2],"I#");
  },[]);
 },[O2],"sat");
 var X2=$t(function(){
  $M(N2,function(Y2){
   var Z2=Y2.v[0];
   var e3=Z2*0.25;
   var d3=e3*2.0;
   var $ff=rintDouble(d3);
   var a3=[$$GHCziPrim_realWorldzh,$ff];
   var b3=a3[1];
   var c3=$hs_double2Intzh(b3);
   $R(1,[c3],"I#");
  },[]);
 },[N2],"sat");
 var f3=$d(1,[X2,P2],"sat");
 var g3=$t(function(){
  $M(M2,function(h3){
   var i3=h3.v[0];
   $M(O2,function(j3){
    var k3=j3.v[0];
    var q3=i3+k3;
    var p3=1000.0-q3;
    var o3=p3*0.25;
    var $ff=rintDouble(o3);
    var l3=[$$GHCziPrim_realWorldzh,$ff];
    var m3=l3[1];
    var n3=$hs_double2Intzh(m3);
    $R(1,[n3],"I#");
   },[i3]);
  },[O2]);
 },[M2,O2],"sat");
 var r3=$t(function(){
  $M(L2,function(s3){
   var t3=s3.v[0];
   $M(N2,function(u3){
    var v3=u3.v[0];
    var B3=t3-v3;
    var A3=B3- -1400.0;
    var z3=A3*0.25;
    var $ff=rintDouble(z3);
    var w3=[$$GHCziPrim_realWorldzh,$ff];
    var x3=w3[1];
    var y3=$hs_double2Intzh(x3);
    $R(1,[y3],"I#");
   },[t3]);
  },[N2]);
 },[L2,N2],"sat");
 var C3=$d(1,[r3,g3],"sat");
 $r([C3,f3]);
},[],"at src/Engine.hs:37:1");
var $$Engine_showAll1=$f(5,function(Q3,R3,S3,T3,U3){
 var V3=$f(2,function(W3,X3){
  $M(W3,function(Y3){
   switch(Y3.g){
   case 1:
    $r([X3,$$GHCziTuple_Z0T]);break;
   case 2:
    var Z3=Y3.v[0],a4=Y3.v[1];
    var b4=$d(2,[Z3],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeRemoveChild1.C([Q3,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,S3,b4,X3],function(c4){
     var d4=c4[0];
     V3.J(a4,d4);
    },[a4,V3]);break;
   }
  },[X3,Q3,S3,V3]);
 },[Q3,S3],"a2");
 var e4=$f(2,function(f4,g4){
  $M(f4,function(h4){
   switch(h4.g){
   case 1:
    $r([g4,$$GHCziTuple_Z0T]);break;
   case 2:
    var i4=h4.v[0],j4=h4.v[1];
    var k4=$d(2,[i4],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeRemoveChild1.C([Q3,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,S3,k4,g4],function(l4){
     var m4=l4[0];
     e4.J(j4,m4);
    },[j4,e4]);break;
   }
  },[Q3,S3,g4,e4]);
 },[Q3,S3],"a3");
 var n4=$f(3,function(o4,p4,q4){
  $M(p4,function(r4){
   switch(r4.g){
   case 1:
    $r([q4,$$GHCziTypes_ZMZN]);break;
   case 2:
    var s4=r4.v[0],t4=r4.v[1];
    $M(s4,function(u4){
     var v4=u4.v[0],w4=u4.v[1];
     $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentCreateElement1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,R3,$$Engine$i,q4],function(x4){
      var y4=x4[0],z4=x4[1];
      $M(z4,function(A4){
       switch(A4.g){
       case 1:
	$$GHCziIO_failIO.C([$$Engine$j,y4],function(B4){
	 var C4=B4[0],D4=B4[1];
	 $M(o4,function(E4){
	  switch(E4.toString()){
	  case "9223372036854775807":
	   var K4=$d(2,[D4,$$GHCziTypes_ZMZN],"sat");
	   $r([C4,K4]);break;
	  default:
	   var J4=E4.add(goog.math.Long.fromBits(1,0));
	   n4.C([J4,t4,C4],function(F4){
	    var G4=F4[0],H4=F4[1];
	    var I4=$d(2,[D4,H4],"sat");
	    $r([G4,I4]);
	   },[D4]);
	  }
	 },[n4,t4,C4,D4]);
	},[o4,n4,t4]);break;
       case 2:
	var L4=A4.v[0];
	var M4=$t(function(){
	 var N4=$t(function(){
	  $M(L4,function(O4){
	   var P4=O4.v[0];
	   $R(1,[P4],"Ptr");
	  },[]);
	 },[L4],"sat");
	 $$SystemziGlibziGType_typeInstanceIsA.C([N4,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLElement],function(Q4){
	  switch(Q4.g){
	  case 1:
	   $A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLElement1);break;
	  case 2:
	   $A(L4);break;
	  }
	 },[L4]);
	},[L4],"elt");
	var R4=$d(1,[o4],"sat");
	$$Engine$g.C([M4,v4,R4,y4],function(S4){
	 var T4=S4[0];
	 var U4=$t(function(){
	  $$Engine$b.J($$GHCziTypes_ZC,w4);
	 },[w4],"sat");
	 $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,M4,$$Engine$a,U4,T4],function(V4){
	  var W4=V4[0];
	  $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,M4,$$Engine$k,$$Engine$l,W4],function(X4){
	   var Y4=X4[0];
	   var Z4=$d(2,[M4],"sat");
	   $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeAppendChild1.C([Q3,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,S3,Z4,Y4],function(a5){
	    var b5=a5[0];
	    $M(o4,function(c5){
	     switch(c5.toString()){
	     case "9223372036854775807":
	      var i5=$d(2,[M4,$$GHCziTypes_ZMZN],"sat");
	      $r([b5,i5]);break;
	     default:
	      var h5=c5.add(goog.math.Long.fromBits(1,0));
	      n4.C([h5,t4,b5],function(d5){
	       var e5=d5[0],f5=d5[1];
	       var g5=$d(2,[M4,f5],"sat");
	       $r([e5,g5]);
	      },[M4]);
	     }
	    },[n4,t4,M4,b5]);
	   },[o4,n4,t4,M4]);
	  },[Q3,S3,o4,n4,t4,M4]);
	 },[Q3,S3,o4,n4,t4,M4]);
	},[Q3,S3,o4,n4,t4,M4,w4]);break;
       }
      },[Q3,S3,y4,o4,n4,t4,v4,w4]);
     },[Q3,S3,o4,n4,t4,v4,w4]);
    },[Q3,S3,q4,R3,o4,n4,t4]);break;
   }
  },[Q3,S3,q4,R3,o4,n4]);
 },[Q3,S3,R3],"a4");
 var j5=$f(3,function(k5,l5,m5){
  $M(k5,function(n5){
   switch(n5.g){
   case 1:
    var o5=n5.v[0],p5=n5.v[1];
    j5.C([o5,l5,m5],function(q5){
     var r5=q5[0],s5=q5[1];
     $M(s5,function(t5){
      var u5=t5.v[0],v5=t5.v[1];
      j5.C([p5,v5,r5],function(w5){
       var x5=w5[0],y5=w5[1];
       $M(y5,function(z5){
	var A5=z5.v[0],B5=z5.v[1];
	var C5=$f(1,function(D5){
	 u5.C([D5],function(E5){
	  var F5=E5[0];
	  A5.J(F5);
	 },[A5]);
	},[u5,A5],"sat");
	var G5=$d(1,[C5,B5],"sat");
	$r([x5,G5]);
       },[x5,u5]);
      },[u5]);
     },[j5,p5,r5]);
    },[j5,p5]);break;
   case 2:
    var H5=n5.v[0];
    var I5=$hs_newMutVarzh($$GHCziTypes_ZMZN,m5);
    var J5=I5[0],K5=I5[1];
    var L5=$t(function(){
     $M(l5,function(M5){
      var N5=M5.v[0];
      $$GHCziEnum_eftInt.J(N5,goog.math.Long.fromBits(4294967295,2147483647));
     },[]);
    },[l5],"lvl13");
    var O5=$f(3,function(P5,Q5,R5){
     var S5=$hs_readMutVarzh(K5,R5);
     var T5=S5[0],U5=S5[1];
     $$GHCziList_zdwlen.C([P5,goog.math.Long.fromBits(0,0)],function(E6){
      var V5=$f(1,function(W5){
       var X5=$t(function(){
	$$GHCziList_zzip.J(P5,U5);
       },[P5,U5],"toModify");
       $$GHCziList_foldr2.C([$$Engine$n,$$Engine$o,L5,X5,W5],function(Y5){
	var Z5=Y5[0];
	$M(l5,function(a6){
	 var b6=a6.v[0];
	 var c6=$t(function(){
	  $$GHCziBase_map.J($$Engine$h,X5);
	 },[X5],"keptImgs");
	 $$GHCziList_zdwlen.C([c6,goog.math.Long.fromBits(0,0)],function(m6){
	  $$GHCziList_zdwlen.C([U5,goog.math.Long.fromBits(0,0)],function(n6){
	   var d6=n6.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(d6.g){
	   case 1:
	    $$GHCziList_dropzudropzh.C([n6,P5],function(e6){
	     var l6=b6.add(m6);
	     n4.C([l6,e6,Z5],function(f6){
	      var g6=f6[0],h6=f6[1];
	      var i6=$t(function(){
	       $$GHCziBase_zpzp.C([c6,h6],function(j6){
		$$GHCziList_zzip.J(j6,P5);
	       },[P5]);
	      },[P5,c6,h6],"sat");
	      var k6=$hs_writeMutVarzh(K5,i6,g6);
	      $r([k6,$$GHCziTuple_Z0T]);
	     },[K5,P5,c6]);
	    },[n4,K5,P5,c6,b6,m6,Z5]);break;
	   case 2:
	    var u6=b6.add(m6);
	    n4.C([u6,P5,Z5],function(o6){
	     var p6=o6[0],q6=o6[1];
	     var r6=$t(function(){
	      $$GHCziBase_zpzp.C([c6,q6],function(s6){
	       $$GHCziList_zzip.J(s6,P5);
	      },[P5]);
	     },[P5,c6,q6],"sat");
	     var t6=$hs_writeMutVarzh(K5,r6,p6);
	     $r([t6,$$GHCziTuple_Z0T]);
	    },[K5,P5,c6]);break;
	   }
	  },[n4,K5,P5,c6,b6,m6,Z5]);
	 },[n4,K5,P5,U5,c6,b6,Z5]);
	},[n4,K5,P5,U5,X5,Z5]);
       },[n4,l5,K5,P5,U5,X5]);
      },[n4,l5,L5,K5,P5,U5],"a7");
      var v6=E6.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(v6.g){
      case 1:
       $$GHCziBase_map.C([$$DataziTuple_fst,U5],function(w6){
	$$GHCziList_dropzudropzh.C([E6,w6],function(x6){
	 e4.C([x6,T5],function(y6){
	  var z6=y6[0];
	  V5.C([z6],function(A6){
	   var B6=A6[0],C6=A6[1];
	   var D6=$d(1,[C6,Q5],"sat");
	   $r([B6,D6]);
	  },[Q5]);
	 },[V5,Q5]);
	},[e4,V5,T5,Q5]);
       },[e4,V5,E6,T5,Q5]);break;
      case 2:
       $$GHCziBase_map.C([$$DataziTuple_fst,U5],function(F6){
	V3.C([F6,T5],function(G6){
	 var H6=G6[0];
	 V5.C([H6],function(I6){
	  var J6=I6[0],K6=I6[1];
	  var L6=$d(1,[K6,Q5],"sat");
	  $r([J6,L6]);
	 },[Q5]);
	},[V5,Q5]);
       },[V3,V5,T5,Q5]);break;
      }
     },[V3,e4,n4,l5,L5,K5,P5,U5,T5,Q5]);
    },[V3,e4,n4,l5,L5,K5],"lvl14");
    var M6=$t(function(){
     var N6=$f(3,function(d2,e2,f2){
      $$FRPziSodiumziPlain_values2.J(H5,d2,e2,f2);
     },[H5],"sat");
     $$FRPziSodiumziPlain_zdwa6.C([N6],function(O6){
      var P6=O6[0],Q6=O6[1];
      $R(1,[P6,Q6],"Event");
     },[]);
    },[H5],"a6");
    var R6=$f(2,function(S6,T6){
     $$FRPziSodiumziPlain_listen2.J(M6,$$DataziMaybe_Nothing,$$GHCziTypes_False,O5,S6,T6);
    },[O5,M6],"sat");
    $$FRPziSodiumziPlain_sync1.C([R6,J5],function(U6){
     var V6=U6[0],W6=U6[1];
     var X6=$t(function(){
      $M(l5,function(Y6){
       var Z6=Y6.v[0];
       var a7=goog.math.Long.fromBits(1000,0).add(Z6);
       $R(1,[a7],"I#");
      },[]);
     },[l5],"sat");
     var b7=$d(1,[W6,X6],"sat");
     $r([V6,b7]);
    },[l5]);break;
   }
  },[V3,e4,n4,l5,m5,j5]);
 },[V3,e4,n4],"a5");
 j5.C([T3,$$Engine$m,U3],function(c7){
  var d7=c7[0],e7=c7[1];
  $M(e7,function(f7){
   var g7=f7.v[0];
   $r([d7,g7]);
  },[d7]);
 },[]);
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_engine1=$f(5,function(h7,i7,j7,k7,l7){
 $$FRPziSodiumziPlain_sync1.C([$$FRPziSodiumziPlain_newEvent1,l7],function(m7){
  var n7=m7[0],o7=m7[1];
  $M(o7,function(p7){
   var q7=p7.v[0],r7=p7.v[1];
   var s7=$hs_newMutVarzh($$Engine_Up,n7);
   var t7=s7[0],u7=s7[1];
   var v7=$f(2,function(w7,x7){
    $$Engine_zdwa.C([h7,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent1,j7,w7,x7],function(y7){
     var z7=y7[0],A7=y7[1];
     $M(A7,function(B7){
      switch(B7.g){
      case 1:
       $r([z7,$$GHCziTuple_Z0T]);break;
      case 2:
       var C7=B7.v[0];
       var D7=$hs_readMutVarzh(u7,z7);
       var E7=D7[0],F7=D7[1];
       $M(F7,function(G7){
	switch(G7.g){
	case 1:
	 var K7=$hs_writeMutVarzh(u7,$$Engine_Down,E7);
	 var H7=$t(function(){
	  var I7=$t(function(){
	   $$Engine_toWorld.J(C7);
	  },[C7],"sat");
	  var J7=$d(1,[I7],"sat");
	  r7.J(J7);
	 },[C7,r7],"sat");
	 $$FRPziSodiumziPlain_sync1.J(H7,K7);break;
	case 2:
	 $r([E7,$$GHCziTuple_Z0T]);break;
	}
       },[u7,E7,C7,r7]);break;
      }
     },[z7,u7,r7]);
    },[u7,r7]);
   },[h7,j7,u7,r7],"sat");
   $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousedown1.C([h7,j7,v7,t7],function(L7){
    var M7=L7[0];
    var N7=$f(2,function(O7,P7){
     $$Engine_zdwa.C([h7,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent1,j7,O7,P7],function(Q7){
      var R7=Q7[0],S7=Q7[1];
      $M(S7,function(T7){
       switch(T7.g){
       case 1:
	$r([R7,$$GHCziTuple_Z0T]);break;
       case 2:
	var U7=T7.v[0];
	var V7=$t(function(){
	 var W7=$t(function(){
	  $$Engine_toWorld.J(U7);
	 },[U7],"sat");
	 var X7=$d(2,[W7],"sat");
	 r7.J(X7);
	},[r7,U7],"sat");
	$$FRPziSodiumziPlain_sync1.J(V7,R7);break;
       }
      },[r7,R7]);
     },[r7]);
    },[h7,j7,r7],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmousemove1.C([h7,j7,N7,M7],function(Y7){
     var Z7=Y7[0];
     var a8=$f(2,function(b8,c8){
      $$Engine_zdwa.C([h7,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent1,j7,b8,c8],function(d8){
       var e8=d8[0],f8=d8[1];
       $M(f8,function(g8){
	switch(g8.g){
	case 1:
	 $r([e8,$$GHCziTuple_Z0T]);break;
	case 2:
	 var h8=g8.v[0];
	 var i8=$hs_readMutVarzh(u7,e8);
	 var j8=i8[0],k8=i8[1];
	 $M(k8,function(l8){
	  switch(l8.g){
	  case 1:
	   $r([j8,$$GHCziTuple_Z0T]);break;
	  case 2:
	   var p8=$hs_writeMutVarzh(u7,$$Engine_Up,j8);
	   var m8=$t(function(){
	    var n8=$t(function(){
	     $$Engine_toWorld.J(h8);
	    },[h8],"sat");
	    var o8=$d(3,[n8],"sat");
	    r7.J(o8);
	   },[r7,h8],"sat");
	   $$FRPziSodiumziPlain_sync1.J(m8,p8);break;
	  }
	 },[u7,r7,j8,h8]);break;
	}
       },[u7,r7,e8]);
      },[u7,r7]);
     },[h7,j7,u7,r7],"sat");
     $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnmouseup1.C([h7,j7,a8,Z7],function(q8){
      var r8=q8[0];
      var s8=$t(function(){
       k7.J(q7);
      },[q7,k7],"sat");
      $$FRPziSodiumziPlain_sync1.C([s8,r8],function(t8){
       var u8=t8[0],v8=t8[1];
       $$Engine_showAll1.J(h7,i7,j7,v8,u8);
      },[h7,j7,i7]);
     },[h7,j7,q7,k7,i7]);
    },[h7,j7,u7,r7,q7,k7,i7]);
   },[h7,j7,u7,r7,q7,k7,i7]);
  },[n7,h7,j7,k7,i7]);
 },[h7,j7,k7,i7]);
},[],"in `webkit-sodium-0.0.1:Engine'");
var $$Engine_Up=$D(1,function(){
 $r([]);
},"at src/Engine.hs:93:20");
var $$Engine_Down=$D(2,function(){
 $r([]);
},"at src/Engine.hs:93:25");
var $$Engine$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("src");
},"lvl");
var $$Engine$b=$F(2,function(w8,x8){
 $$GHCziCString_unpackFoldrCStringzh.J("http://ghcjs.github.com/",w8,x8);
},"lvl1");
var $$Engine$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("style");
},"lvl2");
var $$Engine$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("width");
},"lvl3");
var $$Engine$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("height");
},"lvl4");
var $$Engine$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("-webkit-touch-callout:none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none");
},"lvl5");
var $$Engine$g=$F(4,function(y8,z8,A8,B8){
 var C8=$t(function(){
  $M(z8,function(D8){
   var E8=D8.v[0],F8=D8.v[1];
   $M(E8,function(G8){
    var H8=G8.v[0],I8=G8.v[1];
    $M(F8,function(J8){
     var K8=J8.v[0],L8=J8.v[1];
     $$Engine_zdwfromWorldRect.C([H8,I8,K8,L8],function(M8){
      var N8=M8[0],O8=M8[1];
      $M(O8,function(P8){
       var Q8=P8.v[0],R8=P8.v[1];
       $R(1,[N8,Q8,R8],"(,,)");
      },[N8]);
     },[]);
    },[H8,I8]);
   },[F8]);
  },[]);
 },[z8],"ds");
 var S8=$t(function(){
  $M(C8,function(T8){
   var U8=T8.v[0];
   $M(U8,function(V8){
    var W8=V8.v[0],X8=V8.v[1];
    var Y8=$t(function(){
     $M(X8,function(Z8){
      var a9=Z8.v[0];
      var b9=$t(function(){
       var c9=$t(function(){
	$M(W8,function(d9){
	 var e9=d9.v[0];
	 var f9=$t(function(){
	  var g9=$t(function(){
	   $M(A8,function(h9){
	    var i9=h9.v[0];
	    $$GHCziShow_itos.C([i9,$$GHCziTypes_ZMZN],function(j9){
	     $$GHCziBase_zpzp.J(j9,$$Engine$f);
	    },[]);
	   },[]);
	  },[A8],"sat");
	  $$GHCziCString_unpackAppendCStringzh.J("px;zIndex:",g9);
	 },[A8],"sat");
	 $$GHCziShow_itos.C([e9,$$GHCziTypes_ZMZN],function(k9){
	  $$GHCziBase_zpzp.J(k9,f9);
	 },[f9]);
	},[A8]);
       },[W8,A8],"sat");
       $$GHCziCString_unpackAppendCStringzh.J("px;left:",c9);
      },[W8,A8],"sat");
      $$GHCziShow_itos.C([a9,$$GHCziTypes_ZMZN],function(l9){
       $$GHCziBase_zpzp.J(l9,b9);
      },[b9]);
     },[W8,A8]);
    },[X8,W8,A8],"sat");
    $$GHCziCString_unpackAppendCStringzh.J("position:absolute;top:",Y8);
   },[A8]);
  },[A8]);
 },[C8,A8],"sat");
 $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,y8,$$Engine$c,S8,B8],function(m9){
  var n9=m9[0];
  var o9=$t(function(){
   $M(C8,function(p9){
    var q9=p9.v[1];
    $M(q9,function(r9){
     var s9=r9.v[0];
     $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),s9,$$GHCziTypes_ZMZN);
    },[]);
   },[]);
  },[C8],"sat");
  $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,y8,$$Engine$d,o9,n9],function(t9){
   var u9=t9[0];
   var v9=$t(function(){
    $M(C8,function(w9){
     var x9=w9.v[2];
     $M(x9,function(y9){
      var z9=y9.v[0];
      $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),z9,$$GHCziTypes_ZMZN);
     },[]);
    },[]);
   },[C8],"sat");
   $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,y8,$$Engine$e,v9,u9);
  },[C8,y8]);
 },[C8,y8]);
},"a");
var $$Engine$h=$F(1,function(A9){
 $M(A9,function(B9){
  var C9=B9.v[1];
  $M(C9,function(D9){
   var E9=D9.v[0];
   $A(E9);
  },[]);
 },[]);
},"lvl6");
var $$Engine$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("img");
},"lvl7");
var $$Engine$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Engine.hs:175:25-32");
},"a1");
var $$Engine$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("draggable");
},"lvl8");
var $$Engine$l=$T(function(){
 $$GHCziCString_unpackCStringzh.J("false");
},"lvl9");
var $$Engine$m=$D(1,function(){
 $r([goog.math.Long.fromBits(4293967296,4294967295)]);
},"lvl10");
var $$Engine$n=$F(4,function(F9,G9,H9,I9){
 $M(G9,function(J9){
  var K9=J9.v[0],L9=J9.v[1];
  $M(L9,function(M9){
   var N9=M9.v[0],O9=M9.v[1];
   $M(O9,function(P9){
    var Q9=P9.v[0],R9=P9.v[1];
    $M(Q9,function(S9){
     var T9=S9.v[0],U9=S9.v[1];
     $M(K9,function(V9){
      var W9=V9.v[0],X9=V9.v[1];
      $M(W9,function(Y9){
       var Z9=Y9.v[0],aa=Y9.v[1];
       $M(T9,function(ba){
	var ca=ba.v[0],da=ba.v[1];
	$M(Z9,function(ea){
	 var fa=ea.v[0],ga=ea.v[1];
	 $M(ca,function(ha){
	  var ia=ha.v[0];
	  $M(fa,function(ja){
	   var ka=ja.v[0];
	   var la=$f(1,function(ma){
	    $$GHCziClasses_zdfEqZMZNzuzdczeze.C([R9,X9],function(na){
	     switch(na.g){
	     case 1:
	      var oa=$t(function(){
	       $$Engine$b.J($$GHCziTypes_ZC,X9);
	      },[X9],"sat");
	      $$GraphicsziUIziGtkziWebKitziDOMziElement_elementSetAttribute1.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,N9,$$Engine$a,oa,ma);break;
	     case 2:
	      $r([ma,$$GHCziTuple_Z0T]);break;
	     }
	    },[X9,N9,ma]);
	   },[R9,X9,N9],"a2");
	   var pa=ia==ka?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(pa.g){
	   case 1:
	    $$Engine$g.C([N9,Y9,F9,I9],function(qa){
	     var ra=qa[0];
	     la.C([ra],function(sa){
	      var ta=sa[0];
	      H9.J(ta);
	     },[H9]);
	    },[la,H9]);break;
	   case 2:
	    $M(da,function(ua){
	     var va=ua.v[0];
	     $M(ga,function(wa){
	      var xa=wa.v[0];
	      var ya=va==xa?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(ya.g){
	      case 1:
	       $$Engine$g.C([N9,Y9,F9,I9],function(za){
		var Aa=za[0];
		la.C([Aa],function(Ba){
		 var Ca=Ba[0];
		 H9.J(Ca);
		},[H9]);
	       },[la,H9]);break;
	      case 2:
	       $M(U9,function(Da){
		var Ea=Da.v[0],Fa=Da.v[1];
		$M(aa,function(Ga){
		 var Ha=Ga.v[0],Ia=Ga.v[1];
		 $M(Ea,function(Ja){
		  var Ka=Ja.v[0];
		  $M(Ha,function(La){
		   var Ma=La.v[0];
		   var Na=Ka==Ma?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(Na.g){
		   case 1:
		    $$Engine$g.C([N9,Y9,F9,I9],function(Oa){
		     var Pa=Oa[0];
		     la.C([Pa],function(Qa){
		      var Ra=Qa[0];
		      H9.J(Ra);
		     },[H9]);
		    },[la,H9]);break;
		   case 2:
		    $M(Fa,function(Sa){
		     var Ta=Sa.v[0];
		     $M(Ia,function(Ua){
		      var Va=Ua.v[0];
		      var Wa=Ta==Va?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(Wa.g){
		      case 1:
		       $$Engine$g.C([N9,Y9,F9,I9],function(Xa){
			var Ya=Xa[0];
			la.C([Ya],function(Za){
			 var ab=Za[0];
			 H9.J(ab);
			},[H9]);
		       },[la,H9]);break;
		      case 2:
		       la.C([I9],function(bb){
			var cb=bb[0];
			H9.J(cb);
		       },[H9]);break;
		      }
		     },[N9,la,Y9,F9,I9,H9,Ta]);
		    },[N9,la,Y9,F9,I9,H9,Ia]);break;
		   }
		  },[N9,la,Y9,F9,I9,H9,Ka,Fa,Ia]);
		 },[N9,la,Y9,F9,I9,H9,Ha,Fa,Ia]);
		},[N9,la,Y9,F9,I9,H9,Ea,Fa]);
	       },[N9,la,Y9,F9,I9,H9,aa]);break;
	      }
	     },[N9,la,Y9,F9,I9,H9,va,U9,aa]);
	    },[N9,la,Y9,F9,I9,H9,ga,U9,aa]);break;
	   }
	  },[R9,X9,N9,ia,Y9,F9,I9,H9,da,ga,U9,aa]);
	 },[fa,R9,X9,N9,Y9,F9,I9,H9,da,ga,U9,aa]);
	},[ca,R9,X9,N9,Y9,F9,I9,H9,da,U9,aa]);
       },[Z9,R9,X9,N9,Y9,F9,I9,H9,U9,aa]);
      },[T9,R9,X9,N9,F9,I9,H9,U9]);
     },[T9,R9,N9,F9,I9,H9,U9]);
    },[K9,R9,N9,F9,I9,H9]);
   },[K9,N9,F9,I9,H9]);
  },[K9,F9,I9,H9]);
 },[F9,I9,H9]);
},"lvl11");
var $$Engine$o=$F(1,function(db){
 $r([db,$$GHCziTuple_Z0T]);
},"lvl12");
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
var $$Freecell_zdfEqLocationzuzdczeze=$f(2,function(Aa,Ba){
 var Ca=$t(function(){
  $M(Aa,function(Da){
   switch(Da.g){
   case 1:
    $M(Ba,function(Ea){
     switch(Ea.g){
     case 1:
      $R(2,[],"True");break;
     case 2:
      $R(1,[],"False");break;
     case 3:
      $R(1,[],"False");break;
     }
    },[]);break;
   case 2:
    $M(Ba,function(Fa){
     switch(Fa.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $R(2,[],"True");break;
     case 3:
      $R(1,[],"False");break;
     }
    },[]);break;
   case 3:
    $M(Ba,function(Ga){
     switch(Ga.g){
     case 1:
      $R(1,[],"False");break;
     case 2:
      $R(1,[],"False");break;
     case 3:
      $R(2,[],"True");break;
     }
    },[]);break;
   }
  },[Ba]);
 },[Aa,Ba],"$wfail");
 $M(Aa,function(Ha){
  switch(Ha.g){
  case 1:
   var Ia=Ha.v[0];
   $M(Ba,function(Ja){
    switch(Ja.g){
    case 1:
     var Ka=Ja.v[0];
     $$GHCziClasses_eqInt.J(Ia,Ka);break;
    default:
     $A(Ca);
    }
   },[Aa,Ba,Ca,Ia]);break;
  case 2:
   var La=Ha.v[0];
   $M(Ba,function(Ma){
    switch(Ma.g){
    case 2:
     var Na=Ma.v[0];
     $$GHCziClasses_eqInt.J(La,Na);break;
    default:
     $A(Ca);
    }
   },[Aa,Ba,Ca,La]);break;
  case 3:
   $A(Ca);break;
  }
 },[Aa,Ba,Ca]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdfEnumValue2=$t(function(){
 $$GHCziErr_error.J($$Freecell$m1);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdwzdctoEnum=$f(1,function(tl){
 var ul=$t(function(){
  $M(tl,function(vl){
   var wl=vl.v[0];
   var xl=$t(function(){
    $$GHCziBase_modIntzh.C([wl,goog.math.Long.fromBits(13,0)],function(yl){
     $R(1,[yl],"I#");
    },[]);
   },[wl],"sat");
   var zl=$t(function(){
    $$GHCziBase_divIntzh.C([wl,goog.math.Long.fromBits(13,0)],function(Al){
     $R(1,[Al],"I#");
    },[]);
   },[wl],"sat");
   $R(1,[zl,xl],"(,)");
  },[]);
 },[tl],"ds");
 var Bl=$t(function(){
  $M(ul,function(Cl){
   var Dl=Cl.v[0];
   $M(Dl,function(El){
    var Fl=El.v[0];
    var Gl=Fl.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Gl.g){
    case 1:
     $$Freecell_zdfEnumCard1.J(Fl);break;
    case 2:
     var Hl=Fl.lessThanOrEqual(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Hl.g){
     case 1:
      $$Freecell_zdfEnumCard1.J(Fl);break;
     case 2:
      $r($hs_tagToEnumzh(Fl));break;
     }break;
    }
   },[]);
  },[]);
 },[ul],"sat");
 var Il=$t(function(){
  $M(ul,function(Jl){
   var Kl=Jl.v[1];
   $M(Kl,function(Ll){
    var Ml=Ll.v[0];
    var Nl=Ml.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Nl.g){
    case 1:
     $$Freecell_zdfEnumCard2.J(Ml);break;
    case 2:
     var Ol=Ml.lessThanOrEqual(goog.math.Long.fromBits(12,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Ol.g){
     case 1:
      $$Freecell_zdfEnumCard2.J(Ml);break;
     case 2:
      $r($hs_tagToEnumzh(Ml));break;
     }break;
    }
   },[]);
  },[]);
 },[ul],"sat");
 $r([Il,Bl]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_zdwzdcenumFromTo=$f(4,function(qs,rs,ss,ts){
 $M(qs,function(us){
  var vs=$f(1,function(ws){
   $M(ss,function(xs){
    $M(ts,function(ys){
     switch(ys.g){
     case 1:
      $b(function(){
       $M(xs,function(Ls){
	$r($hs_dataToTagzh(Ls));
       },[ws]);
      },[],function(Bs){
       var zs=ws.greaterThan(Bs)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(zs.g){
       case 1:
	var As=$f(1,function(Cs){
	 var Ds=$t(function(){
	  var Es=Cs.equals(Bs)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Es.g){
	  case 1:
	   var Fs=Cs.add(goog.math.Long.fromBits(1,0));
	   As.J(Fs);break;
	  case 2:
	   $R(1,[],"[]");break;
	  }
	 },[Bs,Cs,As],"sat");
	 var Gs=$t(function(){
	  var Hs=$d(1,[Cs],"sat");
	  $$Freecell_zdwzdctoEnum.C([Hs],function(Is){
	   var Js=Is[0],Ks=Is[1];
	   $R(1,[Js,Ks],"Card");
	  },[]);
	 },[Cs],"sat");
	 $R(2,[Gs,Ds],":");
	},[Bs],"go4");
	As.J(ws);break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[ws]);break;
     case 2:
      $b(function(){
       $M(xs,function(Zs){
	$r($hs_dataToTagzh(Zs));
       },[ws]);
      },[],function(Ys){
       var Os=Ys.add(goog.math.Long.fromBits(13,0));
       var Ms=ws.greaterThan(Os)?$$GHCziTypes_True:$$GHCziTypes_False;
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
	Ns.J(ws);break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[ws]);break;
     case 3:
      $b(function(){
       $M(xs,function(nt){
	$r($hs_dataToTagzh(nt));
       },[ws]);
      },[],function(mt){
       var ct=mt.add(goog.math.Long.fromBits(26,0));
       var at=ws.greaterThan(ct)?$$GHCziTypes_True:$$GHCziTypes_False;
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
	bt.J(ws);break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[ws]);break;
     case 4:
      $b(function(){
       $M(xs,function(Bt){
	$r($hs_dataToTagzh(Bt));
       },[ws]);
      },[],function(At){
       var qt=At.add(goog.math.Long.fromBits(39,0));
       var ot=ws.greaterThan(qt)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(ot.g){
       case 1:
	var pt=$f(1,function(rt){
	 var st=$t(function(){
	  var tt=rt.equals(qt)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(tt.g){
	  case 1:
	   var ut=rt.add(goog.math.Long.fromBits(1,0));
	   pt.J(ut);break;
	  case 2:
	   $R(1,[],"[]");break;
	  }
	 },[qt,rt,pt],"sat");
	 var vt=$t(function(){
	  var wt=$d(1,[rt],"sat");
	  $$Freecell_zdwzdctoEnum.C([wt],function(xt){
	   var yt=xt[0],zt=xt[1];
	   $R(1,[yt,zt],"Card");
	  },[]);
	 },[rt],"sat");
	 $R(2,[vt,st],":");
	},[qt],"go4");
	pt.J(ws);break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[ws]);break;
     }
    },[xs,ws]);
   },[ts,ws]);
  },[ss,ts],"$j");
  $M(rs,function(Ct){
   switch(Ct.g){
   case 1:
    $b(function(){
     $M(us,function(Et){
      $r($hs_dataToTagzh(Et));
     },[ss,ts,vs]);
    },[],function(Dt){
     vs.J(Dt);
    },[ss,ts,vs]);break;
   case 2:
    $b(function(){
     $M(us,function(Ht){
      $r($hs_dataToTagzh(Ht));
     },[ss,ts,vs]);
    },[],function(Gt){
     var Ft=Gt.add(goog.math.Long.fromBits(13,0));
     vs.J(Ft);
    },[ss,ts,vs]);break;
   case 3:
    $b(function(){
     $M(us,function(Kt){
      $r($hs_dataToTagzh(Kt));
     },[ss,ts,vs]);
    },[],function(Jt){
     var It=Jt.add(goog.math.Long.fromBits(26,0));
     vs.J(It);
    },[ss,ts,vs]);break;
   case 4:
    $b(function(){
     $M(us,function(Nt){
      $r($hs_dataToTagzh(Nt));
     },[ss,ts,vs]);
    },[],function(Mt){
     var Lt=Mt.add(goog.math.Long.fromBits(39,0));
     vs.J(Lt);
    },[ss,ts,vs]);break;
   }
  },[ss,ts,vs,us]);
 },[ss,ts,rs]);
},[],"in `webkit-sodium-0.0.1:Freecell'");
var $$Freecell_mkFreecell1=$f(1,function(Zw){
 $M($$SystemziRandom_theStdGen,function(ax){
  var bx=ax.v[0];
  $b($hs_atomicModifyMutVarzh,[bx,$$SystemziRandom_zdfRandomGenStdGenzuzdcsplit,Zw],function(cx){
   var dx=cx[0],ex=cx[1];
   var fx=$t(function(){
    var gx=$t(function(){
     var hx=$f(1,function(ix){
      $M($$Freecell$r1,function(jx){
       var kx=jx.v[0];
       var mx=kx.subtract(goog.math.Long.fromBits(1,0));
       var lx=$f(5,function(nx,ox,px,qx,rx){
	var sx=goog.math.Long.fromBits(0,0).greaterThan(mx)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(sx.g){
	case 1:
	 var tx=$f(3,function(ux,vx,wx){
	  $M(vx,function(xx){
	   switch(xx.g){
	   case 1:
	    $r([wx,$$GHCziTuple_Z0T]);break;
	   case 2:
	    var yx=xx.v[0],zx=xx.v[1];
	    $M(yx,function(Ax){
	     var Bx=Ax.v[0];
	     var Cx=ux.notEquals(Bx)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Cx.g){
	     case 1:
	      var Dx=ux.equals(mx)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Dx.g){
	      case 1:
	       var Ex=ux.add(goog.math.Long.fromBits(1,0));
	       tx.J(Ex,zx,wx);break;
	      case 2:
	       $r([wx,$$GHCziTuple_Z0T]);break;
	      }break;
	     case 2:
	      $M(ox,function(Fx){
	       var Gx=Fx.v[0];
	       $M(px,function(Hx){
		var Ix=Hx.v[0];
		var Jx=Gx.lessThanOrEqual(ux)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Jx.g){
		case 1:
		 var Kx=$d(1,[ux],"sat");
		 $$Freecell$y2.J(Kx,Fx,Hx);break;
		case 2:
		 var Lx=ux.lessThanOrEqual(Ix)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Lx.g){
		 case 1:
		  var Mx=$d(1,[ux],"sat");
		  $$Freecell$y2.J(Mx,Fx,Hx);break;
		 case 2:
		  var Ox=ux.subtract(Gx);
		  var Nx=goog.math.Long.fromBits(0,0).lessThanOrEqual(Ox)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Nx.g){
		  case 1:
		   $$Freecell$A2.J(Ox,qx);break;
		  case 2:
		   var Px=Ox.lessThan(qx)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(Px.g){
		   case 1:
		    $$Freecell$A2.J(Ox,qx);break;
		   case 2:
		    var Qx=$hs_readArrayzh(rx,Ox,wx);
		    var Rx=Qx[0],Sx=Qx[1];
		    var Tx=Gx.lessThanOrEqual(Bx)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Tx.g){
		    case 1:
		     $$Freecell$B2.J(Ax,Fx,Hx);break;
		    case 2:
		     var Ux=Bx.lessThanOrEqual(Ix)?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(Ux.g){
		     case 1:
		      $$Freecell$B2.J(Ax,Fx,Hx);break;
		     case 2:
		      var Wx=Bx.subtract(Gx);
		      var Vx=goog.math.Long.fromBits(0,0).lessThanOrEqual(Wx)?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(Vx.g){
		      case 1:
		       $$Freecell$D2.J(Wx,qx);break;
		      case 2:
		       var Xx=Wx.lessThan(qx)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(Xx.g){
		       case 1:
			$$Freecell$D2.J(Wx,qx);break;
		       case 2:
			var Yx=$hs_readArrayzh(rx,Wx,Rx);
			var Zx=Yx[0],ay=Yx[1];
			var by=goog.math.Long.fromBits(0,0).lessThanOrEqual(Ox)?$$GHCziTypes_True:$$GHCziTypes_False;
			switch(by.g){
			case 1:
			 $$Freecell$F2.J(Ox,qx);break;
			case 2:
			 var cy=Ox.lessThan(qx)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(cy.g){
			 case 1:
			  $$Freecell$F2.J(Ox,qx);break;
			 case 2:
			  var iy=$hs_writeArrayzh(rx,Ox,ay,Zx);
			  var dy=goog.math.Long.fromBits(0,0).lessThanOrEqual(Wx)?$$GHCziTypes_True:$$GHCziTypes_False;
			  switch(dy.g){
			  case 1:
			   $$Freecell$H2.J(Wx,qx);break;
			  case 2:
			   var ey=Wx.lessThan(qx)?$$GHCziTypes_True:$$GHCziTypes_False;
			   switch(ey.g){
			   case 1:
			    $$Freecell$H2.J(Wx,qx);break;
			   case 2:
			    var hy=$hs_writeArrayzh(rx,Wx,Sx,iy);
			    var fy=ux.equals(mx)?$$GHCziTypes_True:$$GHCziTypes_False;
			    switch(fy.g){
			    case 1:
			     var gy=ux.add(goog.math.Long.fromBits(1,0));
			     tx.J(gy,zx,hy);break;
			    case 2:
			     $r([hy,$$GHCziTuple_Z0T]);break;
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
	       },[mx,wx,ux,Bx,tx,zx,Gx,Fx,qx,rx,Ax]);
	      },[mx,wx,ux,Bx,tx,zx,px,qx,rx,Ax]);break;
	     }
	    },[mx,wx,ux,tx,zx,ox,px,qx,rx]);break;
	   }
	  },[mx,wx,ux,tx,ox,px,qx,rx]);
	 },[mx,ox,px,qx,rx],"a12");
	 var jy=kx.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(jy.g){
	 case 1:
	  $$Freecell$M2.C([kx],function(ky){
	   $$DataziList_zdwmapAccumL.C([$$Freecell$K2,ex,ky],function(ly){
	    var my=ly[1];
	    tx.C([goog.math.Long.fromBits(0,0),my,nx],function(ny){
	     var oy=ny[0];
	     var py=$hs_unsafeFreezzeArrayzh(rx,oy);
	     var qy=py[0],ry=py[1];
	     var sy=$d(1,[ox,px,qx,ry],"sat");
	     $r([qy,sy]);
	    },[ox,px,qx,rx]);
	   },[tx,ox,px,qx,rx,nx]);
	  },[tx,ox,px,qx,rx,ex,nx]);break;
	 case 2:
	  $$DataziList_zdwmapAccumL.C([$$Freecell$K2,ex,$$GHCziTypes_ZMZN],function(ty){
	   var uy=ty[1];
	   tx.C([goog.math.Long.fromBits(0,0),uy,nx],function(vy){
	    var wy=vy[0];
	    var xy=$hs_unsafeFreezzeArrayzh(rx,wy);
	    var yy=xy[0],zy=xy[1];
	    var Ay=$d(1,[ox,px,qx,zy],"sat");
	    $r([yy,Ay]);
	   },[ox,px,qx,rx]);
	  },[tx,ox,px,qx,rx,nx]);break;
	 }break;
	case 2:
	 var By=$hs_unsafeFreezzeArrayzh(rx,nx);
	 var Cy=By[0],Dy=By[1];
	 var Ey=$d(1,[ox,px,qx,Dy],"sat");
	 $r([Cy,Ey]);break;
	}
       },[kx,mx,ex],"$w$j");
       var Fy=$f(2,function(Gy,Hy){
	var Iy=$f(1,function(Jy){
	 var Ky=$f(3,function(Ly,My,Ny){
	  var Oy=Ly.equals(Jy)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Oy.g){
	  case 1:
	   $M(My,function(Py){
	    switch(Py.g){
	    case 1:
	     $r([Ny,$$GHCziTuple_Z0T]);break;
	    case 2:
	     var Qy=Py.v[0],Ry=Py.v[1];
	     $M(Hy,function(Sy){
	      var Ty=Sy.v[3];
	      var Vy=$hs_writeArrayzh(Ty,Ly,Qy,Ny);
	      var Uy=Ly.add(goog.math.Long.fromBits(1,0));
	      Ky.J(Uy,Ry,Vy);
	     },[Ly,Ny,Qy,Ky,Ry]);break;
	    }
	   },[Ly,Ny,Hy,Ky]);break;
	  case 2:
	   $r([Ny,$$GHCziTuple_Z0T]);break;
	  }
	 },[Jy,Hy],"$wa");
	 Ky.C([goog.math.Long.fromBits(0,0),$$Freecell$q1,Gy],function(Wy){
	  var Xy=Wy[0];
	  $r([Xy,Hy]);
	 },[Hy]);
	},[Hy,Gy],"$j1");
	var Yy=goog.math.Long.fromBits(0,0).lessThanOrEqual(mx)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Yy.g){
	case 1:
	 Iy.J(goog.math.Long.fromBits(0,0));break;
	case 2:
	 var az=mx.add(goog.math.Long.fromBits(1,0));
	 var Zy=az.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Zy.g){
	 case 1:
	  Iy.J(az);break;
	 case 2:
	  $$GHCziErr_error.J($$Freecell$w2);break;
	 }break;
	}
       },[mx],"$j");
       var bz=goog.math.Long.fromBits(0,0).lessThanOrEqual(mx)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(bz.g){
       case 1:
	var cz=$hs_newArrayzh(goog.math.Long.fromBits(0,0),$$DataziArrayziBase_arrEleBottom,ix);
	var dz=cz[0],ez=cz[1];
	var fz=$d(1,[mx],"sat");
	var gz=$d(1,[$$Freecell_zdfShowLocation1,fz,goog.math.Long.fromBits(0,0),ez],"sat");
	Fy.C([dz,gz],function(hz){
	 var iz=hz[0],jz=hz[1];
	 $M(jz,function(kz){
	  var lz=kz.v[0],mz=kz.v[1],nz=kz.v[2],oz=kz.v[3];
	  lx.J(iz,lz,mz,nz,oz);
	 },[kx,mx,ex,lx,iz]);
	},[kx,mx,ex,lx]);break;
       case 2:
	var vz=mx.add(goog.math.Long.fromBits(1,0));
	var pz=vz.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(pz.g){
	case 1:
	 var qz=$hs_newArrayzh(vz,$$DataziArrayziBase_arrEleBottom,ix);
	 var rz=qz[0],sz=qz[1];
	 var tz=$d(1,[mx],"sat");
	 var uz=$d(1,[$$Freecell_zdfShowLocation1,tz,vz,sz],"sat");
	 Fy.C([rz,uz],function(wz){
	  var xz=wz[0],yz=wz[1];
	  $M(yz,function(zz){
	   var Az=zz.v[0],Bz=zz.v[1],Cz=zz.v[2],Dz=zz.v[3];
	   lx.J(xz,Az,Bz,Cz,Dz);
	  },[kx,mx,ex,lx,xz]);
	 },[kx,mx,ex,lx]);break;
	case 2:
	 $A($$GHCziArr_negRange);break;
	}break;
       }
      },[ex,ix]);
     },[ex],"sat");
     $$GHCziST_runSTRep.C([hx],function(Ez){
      var Fz=Ez.v[2],Gz=Ez.v[3];
      var Jz=Fz.subtract(goog.math.Long.fromBits(1,0));
      var Hz=goog.math.Long.fromBits(0,0).greaterThan(Jz)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Hz.g){
      case 1:
       var Iz=$f(1,function(Kz){
	var Lz=$t(function(){
	 var Mz=Kz.equals(Jz)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Mz.g){
	 case 1:
	  var Nz=Kz.add(goog.math.Long.fromBits(1,0));
	  Iz.J(Nz);break;
	 case 2:
	  $R(1,[],"[]");break;
	 }
	},[Jz,Kz,Iz],"sat");
	var Oz=$t(function(){
	 var Pz=$hs_indexArrayzh(Gz,Kz);
	 var Qz=Pz[0];
	 $A(Qz);
	},[Gz,Kz],"sat");
	$R(2,[Oz,Lz],":");
       },[Jz,Gz],"go4");
       Iz.J(goog.math.Long.fromBits(0,0));break;
      case 2:
       $R(1,[],"[]");break;
      }
     },[]);
    },[ex],"sat");
    $$Freecell$p1.C([gx],function(Rz){
     $$Freecell$s2.J($$Freecell$v2,Rz);
    },[]);
   },[ex],"stackCards");
   var Sz=$f(1,function(Tz){
    var Uz=$t(function(){
     $$FRPziSodiumziPlain_zdwa.C([$$Freecell$k2,Tz],function(Vz){
      var Wz=Vz[0],Xz=Vz[1];
      $R(1,[Wz,Xz],"Event");
     },[]);
    },[Tz],"a12");
    var Yz=$f(3,function(Zz,aA,bA){
     var cA=$t(function(){
      $M(Zz,function(dA){
       switch(dA.g){
       case 2:
	var eA=dA.v[0];
	var fA=$t(function(){
	 $$FRPziSodiumziPlain_zdwa.C([$$Freecell$G1,aA],function(gA){
	  var hA=gA[0],iA=gA[1];
	  $R(1,[hA,iA],"Event");
	 },[]);
	},[aA],"a13");
	var jA=$t(function(){
	 $M(eA,function(kA){
	  var lA=kA.v[0];
	  var oA=$hs_int2Doublezh(lA);
	  var nA=oA*244.2857142857143;
	  var mA= -950.0+nA;
	  $R(1,[mA],"D#");
	 },[]);
	},[eA],"a14");
	var pA=$d(1,[jA,$$Freecell$i1],"orig");
	var qA=$f(2,function(rA,sA){
	 $M(rA,function(tA){
	  switch(tA.g){
	  case 1:
	   var uA=tA.v[0];
	   $M(sA,function(vA){
	    switch(vA.g){
	    case 1:
	     $R(1,[],"Nothing");break;
	    case 2:
	     var wA=vA.v[0];
	     $M(uA,function(xA){
	      var yA=xA.v[0],zA=xA.v[1];
	      $M(yA,function(AA){
	       var BA=AA.v[0];
	       $M(jA,function(CA){
		var DA=CA.v[0];
		var OA=DA-100.0;
		var EA=BA>=OA?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(EA.g){
		case 1:
		 $R(1,[],"Nothing");break;
		case 2:
		 var NA=DA+100.0;
		 var FA=BA<=NA?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(FA.g){
		 case 1:
		  $R(1,[],"Nothing");break;
		 case 2:
		  $M(zA,function(GA){
		   var HA=GA.v[0];
		   var IA=HA>=650.0?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(IA.g){
		   case 1:
		    $R(1,[],"Nothing");break;
		   case 2:
		    var JA=HA<=950.0?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(JA.g){
		    case 1:
		     $R(1,[],"Nothing");break;
		    case 2:
		     var KA=$d(2,[wA,$$GHCziTypes_ZMZN],"sat");
		     var LA=$d(1,[pA,xA,KA,dA],"sat");
		     var MA=$d(1,[$$DataziMaybe_Nothing,LA],"sat");
		     $R(2,[MA],"Just");break;
		    }break;
		   }
		  },[pA,xA,wA,dA]);break;
		 }break;
		}
	       },[pA,BA,zA,xA,wA,dA]);
	      },[jA,pA,zA,xA,wA,dA]);
	     },[jA,pA,wA,dA]);break;
	    }
	   },[jA,pA,uA,dA]);break;
	  default:
	   $R(1,[],"Nothing");
	  }
	 },[jA,pA,sA,dA]);
	},[jA,pA,dA],"lvl108");
	var PA=$d(1,[pA,$$Freecell$c],"rect");
	var QA=$d(1,[PA,$$Freecell$M],"n1");
	var RA=$f(1,function(SA){
	 var TA=$t(function(){
	  $M(SA,function(UA){
	   switch(UA.g){
	   case 1:
	    $A(QA);break;
	   case 2:
	    var VA=UA.v[0];
	    $M(VA,function(WA){
	     var XA=WA.v[0],YA=WA.v[1];
	     $$Freecell$I.C([pA,XA,YA],function(ZA){
	      var aB=ZA[0],bB=ZA[1];
	      $R(1,[aB,bB],"(,)");
	     },[]);
	    },[pA]);break;
	   }
	  },[pA,QA]);
	 },[pA,QA,SA],"sat");
	 $R(2,[TA,$$GHCziTypes_ZMZN],":");
	},[pA,QA],"lvl109");
	var cB=$f(1,function(dB){
	 var eB=$t(function(){
	  $M(dB,function(fB){
	   switch(fB.g){
	   case 1:
	    $R(2,[],"True");break;
	   case 2:
	    $R(1,[],"False");break;
	   }
	  },[]);
	 },[dB],"lvl111");
	 var gB=$f(1,function(hB){
	  $$GHCziList_zdwlen.C([hB,goog.math.Long.fromBits(0,0)],function(iB){
	   switch(iB.toString()){
	   case "1":
	    $A(eB);break;
	   default:
	    $R(1,[],"False");
	   }
	  },[eB]);
	 },[eB],"sat");
	 $R(1,[dA,PA,gB],"Destination");
	},[dA,PA],"lvl110");
	var jB=$f(2,function(kB,lB){
	 var mB=$hs_newMVarzh(lB);
	 var nB=mB[0],oB=mB[1];
	 var pB=$f(1,function(qB){
	  var rB=$hs_noDuplicatezh(qB);
	  $k($hs_takeMVarzh,[oB,rB]);
	 },[oB],"sat");
	 $$GHCziIO_unsafeDupableInterleaveIO.C([pB,nB],function(sB){
	  var tB=sB[0],uB=sB[1];
	  var vB=$t(function(){
	   var wB=$t(function(){
	    $M(uB,function(xB){
	     var yB=xB.v[0];
	     $M(yB,function(zB){
	      var AB=zB.v[0];
	      $A(AB);
	     },[]);
	    },[]);
	   },[uB],"sat");
	   $$FRPziSodiumziPlain_zdwa8.C([wB,fA],function(BB){
	    var CB=BB[0],DB=BB[1];
	    $R(1,[CB,DB],"Event");
	   },[]);
	  },[fA,uB],"sat");
	  $$FRPziSodiumziPlain_hold1.C([$$DataziMaybe_Nothing,vB,kB,tB],function(EB){
	   var FB=EB[0],GB=EB[1];
	   $M(GB,function(HB){
	    var IB=HB.v[0],JB=HB.v[1];
	    var KB=$t(function(){
	     var LB=$t(function(){
	      $$FRPziSodiumziPlain_zdwa5.C([qA,Tz,IB],function(MB){
	       var NB=MB[0],OB=MB[1];
	       $R(1,[NB,OB],"Event");
	      },[]);
	     },[Tz,qA,IB],"sat");
	     $$FRPziSodiumziPlain_zdwa7.C([LB],function(PB){
	      var QB=PB[0],RB=PB[1];
	      $R(1,[QB,RB],"Event");
	     },[]);
	    },[Tz,qA,IB],"a18");
	    var SB=$t(function(){
	     $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_snd,KB],function(TB){
	      var UB=TB[0],VB=TB[1];
	      $R(1,[UB,VB],"Event");
	     },[]);
	    },[KB],"a19");
	    var WB=$t(function(){
	     $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_fst,KB],function(XB){
	      var YB=XB[0],ZB=XB[1];
	      $R(1,[YB,ZB],"Event");
	     },[]);
	    },[KB],"sat");
	    var aC=$d(1,[WB,IB,SB],"sat");
	    var bC=$d(1,[aC,JB],"sat");
	    $b($hs_putMVarzh,[oB,bC,FB],function(sD){
	     var cC=$t(function(){
	      $M(IB,function(dC){
	       var eC=dC.v[0],fC=dC.v[1];
	       var gC=$f(1,function(hC){
		var iC=$f(1,function(jC){
		 $$FRPziSodiumziPlain_unSample.C([fC,jC],function(kC){
		  var lC=kC[0],mC=kC[1];
		  var nC=$t(function(){
		   $M(mC,function(oC){
		    switch(oC.g){
		    case 1:
		     $A($$Freecell$N);break;
		    case 2:
		     $A($$Freecell_zdfShowLocation1);break;
		    }
		   },[]);
		  },[mC],"sat");
		  $r([lC,nC]);
		 },[]);
		},[fC],"sat");
		$r([hC,iC]);
	       },[fC],"sat");
	       var pC=$d(1,[gC],"sat");
	       var qC=$t(function(){
		$$FRPziSodiumziPlain_zdwa.C([$$Freecell$J1,eC],function(rC){
		 var sC=rC[0],tC=rC[1];
		 $R(1,[sC,tC],"Event");
		},[]);
	       },[eC],"sat");
	       $R(1,[qC,pC],"Behavior");
	      },[]);
	     },[IB],"sat");
	     var uC=$t(function(){
	      $M(IB,function(vC){
	       var wC=vC.v[0],xC=vC.v[1];
	       var yC=$f(1,function(zC){
		var AC=$f(1,function(BC){
		 $$FRPziSodiumziPlain_unSample.C([xC,BC],function(CC){
		  var DC=CC[0],EC=CC[1];
		  var FC=$t(function(){
		   $M(EC,function(GC){
		    switch(GC.g){
		    case 1:
		     $R(2,[],"True");break;
		    case 2:
		     $R(1,[],"False");break;
		    }
		   },[]);
		  },[EC],"lvl111");
		  var HC=$f(1,function(IC){
		   $$GHCziList_zdwlen.C([IC,goog.math.Long.fromBits(0,0)],function(JC){
		    switch(JC.toString()){
		    case "1":
		     $A(FC);break;
		    default:
		     $R(1,[],"False");
		    }
		   },[FC]);
		  },[FC],"sat");
		  var KC=$d(1,[dA,PA,HC],"sat");
		  $r([DC,KC]);
		 },[dA,PA]);
		},[dA,PA,xC],"sat");
		$r([zC,AC]);
	       },[dA,PA,xC],"sat");
	       var LC=$d(1,[yC],"sat");
	       var MC=$t(function(){
		$$FRPziSodiumziPlain_zdwa.C([cB,wC],function(NC){
		 var OC=NC[0],PC=NC[1];
		 $R(1,[OC,PC],"Event");
		},[]);
	       },[cB,wC],"sat");
	       $R(1,[MC,LC],"Behavior");
	      },[dA,PA,cB]);
	     },[dA,PA,cB,IB],"sat");
	     var QC=$t(function(){
	      $M(IB,function(RC){
	       var SC=RC.v[0],TC=RC.v[1];
	       var UC=$f(1,function(VC){
		var WC=$f(1,function(XC){
		 $$FRPziSodiumziPlain_unSample.C([TC,XC],function(YC){
		  var ZC=YC[0],aD=YC[1];
		  var bD=$t(function(){
		   $M(aD,function(cD){
		    switch(cD.g){
		    case 1:
		     $A(QA);break;
		    case 2:
		     var dD=cD.v[0];
		     $M(dD,function(eD){
		      var fD=eD.v[0],gD=eD.v[1];
		      $$Freecell$I.C([pA,fD,gD],function(hD){
		       var iD=hD[0],jD=hD[1];
		       $R(1,[iD,jD],"(,)");
		      },[]);
		     },[pA]);break;
		    }
		   },[pA,QA]);
		  },[pA,QA,aD],"sat");
		  var kD=$d(2,[bD,$$GHCziTypes_ZMZN],"sat");
		  $r([ZC,kD]);
		 },[pA,QA]);
		},[pA,QA,TC],"sat");
		$r([VC,WC]);
	       },[pA,QA,TC],"sat");
	       var lD=$d(1,[UC],"sat");
	       var mD=$t(function(){
		$$FRPziSodiumziPlain_zdwa.C([RA,SC],function(nD){
		 var oD=nD[0],pD=nD[1];
		 $R(1,[oD,pD],"Event");
		},[]);
	       },[RA,SC],"sat");
	       $R(1,[mD,lD],"Behavior");
	      },[pA,QA,RA]);
	     },[pA,QA,RA,IB],"sat");
	     var qD=$d(1,[QC,uC,SB,cC],"sat");
	     var rD=$d(1,[qD,JB],"sat");
	     $r([sD,rD]);
	    },[pA,dA,PA,QA,RA,cB,IB,SB,JB]);
	   },[Tz,pA,dA,qA,PA,QA,RA,cB,oB,FB]);
	  },[Tz,pA,dA,qA,PA,QA,RA,cB,oB]);
	 },[Tz,fA,pA,dA,qA,PA,QA,RA,cB,oB,kB]);
	},[Tz,fA,pA,dA,qA,PA,QA,RA,cB],"sat");
	$A(jB);break;
       default:
	$A($$Freecell$F1);
       }
      },[Tz,aA]);
     },[Tz,Zz,aA],"m");
     var tD=$f(2,function(uD,vD){
      cA.C([uD,vD],function(wD){
       var xD=wD[0],yD=wD[1];
       $M(yD,function(zD){
	var AD=zD.v[0],BD=zD.v[1];
	bA.C([BD,xD],function(CD){
	 var DD=CD[0],ED=CD[1];
	 $M(ED,function(FD){
	  var GD=FD.v[0],HD=FD.v[1];
	  var ID=$d(2,[AD,GD],"sat");
	  var JD=$d(1,[ID,HD],"sat");
	  $r([DD,JD]);
	 },[DD,AD]);
	},[AD]);
       },[xD,bA]);
      },[bA]);
     },[cA,bA],"sat");
     $A(tD);
    },[Tz],"lvl107");
    var KD=$f(2,function(LD,MD){
     var ND=$hs_newMVarzh(MD);
     var OD=ND[0],PD=ND[1];
     var QD=$f(1,function(RD){
      var SD=$hs_noDuplicatezh(RD);
      $k($hs_takeMVarzh,[PD,SD]);
     },[PD],"sat");
     $$GHCziIO_unsafeDupableInterleaveIO.C([QD,OD],function(TD){
      var UD=TD[0],VD=TD[1];
      var WD=$t(function(){
       $M(VD,function(XD){
	var YD=XD.v[0];
	$A(YD);
       },[]);
      },[VD],"ds");
      var ZD=$t(function(){
       var aE=$t(function(){
	$M(WD,function(bE){
	 var cE=bE.v[0],dE=bE.v[1],eE=bE.v[2];
	 var fE=$t(function(){
	  var gE=$d(2,[eE,$$GHCziTypes_ZMZN],"sat");
	  $$GHCziBase_zpzp.J(dE,gE);
	 },[dE,eE],"sat");
	 $$GHCziBase_zpzp.C([cE,fE],function(hE){
	  $$Freecell$R2.J(hE);
	 },[]);
	},[]);
       },[WD],"sat");
       var iE=$t(function(){
	$M(WD,function(jE){
	 var kE=jE.v[4];
	 $A(kE);
	},[]);
       },[WD],"sat");
       $$FRPziSodiumziPlain_zdwa5.C([$$Freecell$z1,iE,aE],function(lE){
	var mE=lE[0],nE=lE[1];
	$R(1,[mE,nE],"Event");
       },[]);
      },[WD],"a14");
      var oE=$t(function(){
       $M(WD,function(pE){
	var qE=pE.v[3];
	$A(qE);
       },[]);
      },[WD],"emptySpaces");
      var rE=$f(1,function(sE){
       $M(sE,function(tE){
	switch(tE.g){
	case 1:
	 $A($$Freecell$S2);break;
	case 2:
	 var uE=tE.v[0],vE=tE.v[1];
	 var wE=$t(function(){
	  $M(uE,function(xE){
	   var yE=xE.v[0],zE=xE.v[1],AE=xE.v[2];
	   $M(yE,function(BE){
	    switch(BE.g){
	    case 1:
	     var CE=BE.v[0];
	     var DE=$t(function(){
	      $M(CE,function(EE){
	       var FE=EE.v[0];
	       var IE=$hs_int2Doublezh(FE);
	       var HE=IE*271.42857142857144;
	       var GE= -950.0+HE;
	       $R(1,[GE],"D#");
	      },[]);
	     },[CE],"origX");
	     var JE=$t(function(){
	      var KE=$d(1,[DE,$$Freecell$C1],"sat");
	      $$GHCziList_iterate.J($$Freecell$D1,KE);
	     },[DE],"positions1");
	     var LE=$f(2,function(ME,NE){
	      $M(ME,function(OE){
	       switch(OE.g){
	       case 1:
		var PE=OE.v[0];
		$M(PE,function(QE){
		 var RE=QE.v[0],SE=QE.v[1];
		 $M(RE,function(TE){
		  var UE=TE.v[0];
		  $M(DE,function(VE){
		   var WE=VE.v[0];
		   var IF=WE-100.0;
		   var XE=UE>=IF?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(XE.g){
		   case 1:
		    $R(1,[],"Nothing");break;
		   case 2:
		    var HF=WE+100.0;
		    var YE=UE<=HF?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(YE.g){
		    case 1:
		     $R(1,[],"Nothing");break;
		    case 2:
		     $$GHCziList_zdwlen.C([NE,goog.math.Long.fromBits(0,0)],function(FF){
		      $M(SE,function(ZE){
		       var aF=ZE.v[0];
		       var GF=450.0-aF;
		       var DF=GF/70.0;
		       var AF=$hs_double2Intzh(DF);
		       var cF=FF.subtract(goog.math.Long.fromBits(1,0));
		       var bF=$f(1,function(dF){
			var eF=dF.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			switch(eF.g){
			case 1:
			 $R(1,[],"Nothing");break;
			case 2:
			 var xF=$hs_int2Doublezh(cF);
			 var wF=70.0*xF;
			 var vF=150.0-wF;
			 var fF=aF>=vF?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(fF.g){
			 case 1:
			  $R(1,[],"Nothing");break;
			 case 2:
			  var gF=$t(function(){
			   var hF=dF.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			   switch(hF.g){
			   case 1:
			    $$GHCziList_zdwsplitAtzh.C([dF,NE],function(iF){
			     var jF=iF[0],kF=iF[1];
			     $R(1,[jF,kF],"(,)");
			    },[]);break;
			   case 2:
			    $R(1,[$$GHCziTypes_ZMZN,NE],"(,)");break;
			   }
			  },[NE,dF],"ds2");
			  var lF=$t(function(){
			   $M(gF,function(mF){
			    var nF=mF.v[1];
			    $A(nF);
			   },[]);
			  },[gF],"sat");
			  var oF=$t(function(){
			   var pF=dF.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
			   switch(pF.g){
			   case 1:
			    $$GHCziList_znznzusub.J(JE,dF);break;
			   case 2:
			    $A($$GHCziList_znzn1);break;
			   }
			  },[JE,dF],"sat");
			  var qF=$d(1,[oF,QE,lF,BE],"sat");
			  var rF=$t(function(){
			   $M(gF,function(sF){
			    var tF=sF.v[0];
			    $A(tF);
			   },[]);
			  },[gF],"sat");
			  var uF=$d(1,[rF,qF],"sat");
			  $R(2,[uF],"Just");break;
			 }break;
			}
		       },[JE,NE,aF,cF,QE,BE],"$j");
		       var EF=$hs_int2Doublezh(AF);
		       var yF=DF<EF?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(yF.g){
		       case 1:
			var zF=cF.lessThanOrEqual(AF)?$$GHCziTypes_True:$$GHCziTypes_False;
			switch(zF.g){
			case 1:
			 bF.J(AF);break;
			case 2:
			 bF.J(cF);break;
			}break;
		       case 2:
			var CF=AF.subtract(goog.math.Long.fromBits(1,0));
			var BF=cF.lessThanOrEqual(CF)?$$GHCziTypes_True:$$GHCziTypes_False;
			switch(BF.g){
			case 1:
			 bF.J(CF);break;
			case 2:
			 bF.J(cF);break;
			}break;
		       }
		      },[JE,NE,FF,QE,BE]);
		     },[JE,NE,SE,QE,BE]);break;
		    }break;
		   }
		  },[JE,UE,NE,SE,QE,BE]);
		 },[DE,JE,NE,SE,QE,BE]);
		},[DE,JE,NE,BE]);break;
	       default:
		$R(1,[],"Nothing");
	       }
	      },[DE,JE,NE,BE]);
	     },[DE,JE,BE],"lvl108");
	     var JF=$f(2,function(KF,LF){
	      var MF=$t(function(){
	       $M(KF,function(NF){
		switch(NF.g){
		case 1:
		 $A($$GHCziList_last2);break;
		case 2:
		 var OF=NF.v[0],PF=NF.v[1];
		 $$GHCziList_last1.J(OF,PF);break;
		}
	       },[]);
	      },[KF],"lvl109");
	      var QF=$f(1,function(RF){
	       var SF=$t(function(){
		$$GHCziList_dropzudropzh.J(goog.math.Long.fromBits(1,0),RF);
	       },[RF],"sat");
	       $$GHCziList_foldr2.C([$$Freecell$U2,$$GHCziTypes_True,RF,SF],function(TF){
		switch(TF.g){
		case 1:
		 $R(1,[],"False");break;
		case 2:
		 $$GHCziList_zdwlen.C([RF,goog.math.Long.fromBits(0,0)],function(hG){
		  $M(LF,function(UF){
		   var VF=UF.v[0];
		   var gG=hG.subtract(goog.math.Long.fromBits(1,0));
		   var WF=gG.lessThanOrEqual(VF)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(WF.g){
		   case 1:
		    $R(1,[],"False");break;
		   case 2:
		    $M(KF,function(XF){
		     switch(XF.g){
		     case 1:
		      $R(2,[],"True");break;
		     case 2:
		      $M(MF,function(YF){
		       var ZF=YF.v[0],aG=YF.v[1];
		       $M(RF,function(bG){
			switch(bG.g){
			case 1:
			 $A($$GHCziList_badHead);break;
			case 2:
			 var cG=bG.v[0];
			 $M(cG,function(dG){
			  var eG=dG.v[0],fG=dG.v[1];
			  $$Freecell$o1.J(ZF,aG,eG,fG);
			 },[ZF,aG]);break;
			}
		       },[ZF,aG]);
		      },[RF]);break;
		     }
		    },[MF,RF]);break;
		   }
		  },[KF,MF,RF,hG]);
		 },[KF,MF,RF,LF]);break;
		}
	       },[KF,MF,RF,LF]);
	      },[KF,MF,LF],"sat");
	      var iG=$t(function(){
	       $$GHCziList_zdwlen.C([KF,goog.math.Long.fromBits(0,0)],function(mG){
		var lG=$hs_int2Doublezh(mG);
		var kG=lG*70.0;
		var jG=300.0-kG;
		$R(1,[jG],"D#");
	       },[]);
	      },[KF],"sat");
	      var nG=$d(1,[DE,iG],"sat");
	      var oG=$d(1,[nG,$$Freecell$c],"sat");
	      $r([BE,oG,QF]);
	     },[DE,BE],"$wlvl2");
	     var pG=$f(2,function(qG,rG){
	      JF.C([qG,rG],function(sG){
	       var tG=sG[0],uG=sG[1],vG=sG[2];
	       $R(1,[tG,uG,vG],"Destination");
	      },[]);
	     },[JF],"lvl109");
	     var wG=$f(1,function(xG){
	      $$GHCziList_foldr2.J($$Freecell$T2,$$GHCziTypes_ZMZN,JE,xG);
	     },[JE],"lvl110");
	     var yG=$f(2,function(zG,AG){
	      var BG=$hs_newMVarzh(AG);
	      var CG=BG[0],DG=BG[1];
	      var EG=$f(1,function(FG){
	       var GG=$hs_noDuplicatezh(FG);
	       $k($hs_takeMVarzh,[DG,GG]);
	      },[DG],"sat");
	      $$GHCziIO_unsafeDupableInterleaveIO.C([EG,CG],function(HG){
	       var IG=HG[0],JG=HG[1];
	       var KG=$t(function(){
		var LG=$t(function(){
		 $M(JG,function(MG){
		  var NG=MG.v[0];
		  $A(NG);
		 },[]);
		},[JG],"ds2");
		var OG=$t(function(){
		 $M(LG,function(PG){
		  var QG=PG.v[0];
		  $A(QG);
		 },[]);
		},[LG],"sat");
		var RG=$t(function(){
		 $M(LG,function(SG){
		  var TG=SG.v[1];
		  $A(TG);
		 },[]);
		},[LG],"sat");
		$$FRPziSodiumziPlain_zdwa8.C([RG,OG],function(UG){
		 var VG=UG[0],WG=UG[1];
		 $R(1,[VG,WG],"Event");
		},[]);
	       },[JG],"sat");
	       $$FRPziSodiumziPlain_hold1.C([zE,KG,zG,IG],function(XG){
		var YG=XG[0],ZG=XG[1];
		$M(ZG,function(aH){
		 var bH=aH.v[0],cH=aH.v[1];
		 var dH=$t(function(){
		  var eH=$t(function(){
		   $$FRPziSodiumziPlain_zdwa5.C([LE,Tz,bH],function(fH){
		    var gH=fH[0],hH=fH[1];
		    $R(1,[gH,hH],"Event");
		   },[]);
		  },[Tz,LE,bH],"sat");
		  $$FRPziSodiumziPlain_zdwa7.C([eH],function(iH){
		   var jH=iH[0],kH=iH[1];
		   $R(1,[jH,kH],"Event");
		  },[]);
		 },[Tz,LE,bH],"a18");
		 var lH=$t(function(){
		  $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_snd,dH],function(mH){
		   var nH=mH[0],oH=mH[1];
		   $R(1,[nH,oH],"Event");
		  },[]);
		 },[dH],"a19");
		 var pH=$t(function(){
		  $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_fst,dH],function(qH){
		   var rH=qH[0],sH=qH[1];
		   $R(1,[rH,sH],"Event");
		  },[]);
		 },[dH],"sat");
		 var tH=$t(function(){
		  $$FRPziSodiumziPlain_zdwa5.C([$$Freecell$E1,AE,bH],function(uH){
		   var vH=uH[0],wH=uH[1];
		   $R(1,[vH,wH],"Event");
		  },[]);
		 },[bH,AE],"sat");
		 var xH=$d(1,[tH,pH,bH,lH],"sat");
		 var yH=$d(1,[xH,cH],"sat");
		 $b($hs_putMVarzh,[DG,yH,YG],function(kI){
		  var zH=$t(function(){
		   $M(bH,function(AH){
		    var BH=AH.v[0],CH=AH.v[1];
		    var DH=$f(1,function(EH){
		     var FH=$f(1,function(GH){
		      $$FRPziSodiumziPlain_unSample.C([CH,GH],function(HH){
		       var IH=HH[0],JH=HH[1];
		       var KH=$f(1,function(z){
			pG.J(JH,z);
		       },[pG,JH],"sat");
		       $r([IH,KH]);
		      },[pG]);
		     },[pG,CH],"sat");
		     $r([EH,FH]);
		    },[pG,CH],"sat");
		    var LH=$d(1,[DH],"sat");
		    var MH=$t(function(){
		     $$FRPziSodiumziPlain_zdwa.C([pG,BH],function(NH){
		      var OH=NH[0],PH=NH[1];
		      $R(1,[OH,PH],"Event");
		     },[]);
		    },[pG,BH],"sat");
		    var QH=$d(1,[MH,LH],"sat");
		    $$FRPziSodiumziPlain_zdwzdczlztzg.J(QH,oE);
		   },[oE,pG]);
		  },[oE,pG,bH],"sat");
		  var RH=$t(function(){
		   $M(bH,function(SH){
		    var TH=SH.v[0],UH=SH.v[1];
		    var VH=$f(1,function(WH){
		     var XH=$f(1,function(YH){
		      $$FRPziSodiumziPlain_unSample.C([UH,YH],function(ZH){
		       var aI=ZH[0],bI=ZH[1];
		       var cI=$t(function(){
			$$GHCziList_foldr2.J($$Freecell$T2,$$GHCziTypes_ZMZN,JE,bI);
		       },[JE,bI],"sat");
		       $r([aI,cI]);
		      },[JE]);
		     },[JE,UH],"sat");
		     $r([WH,XH]);
		    },[JE,UH],"sat");
		    var dI=$d(1,[VH],"sat");
		    var eI=$t(function(){
		     $$FRPziSodiumziPlain_zdwa.C([wG,TH],function(fI){
		      var gI=fI[0],hI=fI[1];
		      $R(1,[gI,hI],"Event");
		     },[]);
		    },[wG,TH],"sat");
		    $R(1,[eI,dI],"Behavior");
		   },[JE,wG]);
		  },[JE,wG,bH],"sat");
		  var iI=$d(1,[RH,zH,lH],"sat");
		  var jI=$d(1,[iI,cH],"sat");
		  $r([kI,jI]);
		 },[oE,JE,pG,wG,bH,lH,cH]);
		},[Tz,oE,JE,LE,pG,wG,DG,AE,YG]);
	       },[Tz,oE,JE,LE,pG,wG,DG,AE]);
	      },[Tz,oE,JE,LE,pG,wG,DG,zE,zG,AE]);
	     },[Tz,oE,JE,LE,pG,wG,zE,AE],"sat");
	     $A(yG);break;
	    default:
	     $A($$Freecell$B1);
	    }
	   },[Tz,oE,zE,AE]);
	  },[Tz,oE]);
	 },[Tz,oE,uE],"m");
	 var lI=$t(function(){
	  rE.J(vE);
	 },[vE,rE],"ys1");
	 var mI=$f(2,function(nI,oI){
	  wE.C([nI,oI],function(pI){
	   var qI=pI[0],rI=pI[1];
	   $M(rI,function(sI){
	    var tI=sI.v[0],uI=sI.v[1];
	    lI.C([uI,qI],function(vI){
	     var wI=vI[0],xI=vI[1];
	     $M(xI,function(yI){
	      var zI=yI.v[0],AI=yI.v[1];
	      var BI=$d(2,[tI,zI],"sat");
	      var CI=$d(1,[BI,AI],"sat");
	      $r([wI,CI]);
	     },[wI,tI]);
	    },[tI]);
	   },[lI,qI]);
	  },[lI]);
	 },[wE,lI],"sat");
	 $A(mI);break;
	}
       },[Tz,oE,rE]);
      },[Tz,oE],"go4");
      var DI=$t(function(){
       $$Freecell$j1.J(ZD,$$Freecell$x1);
      },[ZD],"sat");
      $$GHCziList_zzip3.C([$$Freecell$x1,fx,DI],function(EI){
       rE.C([EI,LD,UD],function(FI){
	var GI=FI[0],HI=FI[1];
	$M(HI,function(II){
	 var JI=II.v[0],KI=II.v[1];
	 $$Freecell$V2.C([JI],function(LI){
	  var MI=LI[0],NI=LI[1],OI=LI[2];
	  var PI=$t(function(){
	   $$Freecell$j1.J(ZD,$$Freecell$v1);
	  },[ZD],"sat");
	  $$GHCziList_foldr2.C([Yz,$$Freecell$W2,$$Freecell$v1,PI,KI,GI],function(QI){
	   var RI=QI[0],SI=QI[1];
	   $M(SI,function(TI){
	    var UI=TI.v[0],VI=TI.v[1];
	    $$DataziList_zdwunzzip4.C([UI],function(WI){
	     var XI=WI[0],YI=WI[1],ZI=WI[2],aJ=WI[3];
	     var bJ=$hs_newMVarzh(RI);
	     var cJ=bJ[0],dJ=bJ[1];
	     var eJ=$f(1,function(fJ){
	      var gJ=$hs_noDuplicatezh(fJ);
	      $k($hs_takeMVarzh,[dJ,gJ]);
	     },[dJ],"sat");
	     $$GHCziIO_unsafeDupableInterleaveIO.C([eJ,cJ],function(hJ){
	      var iJ=hJ[0],jJ=hJ[1];
	      var kJ=$t(function(){
	       var lJ=$t(function(){
		$M(jJ,function(mJ){
		 var nJ=mJ.v[0];
		 $A(nJ);
		},[]);
	       },[jJ],"ds1");
	       var oJ=$t(function(){
		$M(lJ,function(pJ){
		 var qJ=pJ.v[1];
		 $A(qJ);
		},[]);
	       },[lJ],"sat");
	       var rJ=$t(function(){
		var sJ=$t(function(){
		 $M(lJ,function(tJ){
		  var uJ=tJ.v[0];
		  $A(uJ);
		 },[]);
		},[lJ],"sat");
		var vJ=$t(function(){
		 $$Freecell$j1.C([ZD,$$Freecell$A1],function(wJ){
		  switch(wJ.g){
		  case 1:
		   $A($$GHCziList_badHead);break;
		  case 2:
		   var xJ=wJ.v[0];
		   $A(xJ);break;
		  }
		 },[]);
		},[ZD],"sat");
		$$FRPziSodiumziPlain_zdwa5.C([$$Freecell$a2,vJ,sJ],function(yJ){
		 var zJ=yJ[0],AJ=yJ[1];
		 $R(1,[zJ,AJ],"Event");
		},[]);
	       },[ZD,lJ],"sat");
	       $$FRPziSodiumziPlain_zdwa8.C([rJ,oJ],function(BJ){
		var CJ=BJ[0],DJ=BJ[1];
		$R(1,[CJ,DJ],"Event");
	       },[]);
	      },[ZD,jJ],"sat");
	      $$FRPziSodiumziPlain_hold1.C([$$Freecell$Z1,kJ,VI,iJ],function(EJ){
	       var FJ=EJ[0],GJ=EJ[1];
	       $M(GJ,function(HJ){
		var IJ=HJ.v[0],JJ=HJ.v[1];
		var KJ=$t(function(){
		 var LJ=$t(function(){
		  $$FRPziSodiumziPlain_zdwa5.C([$$Freecell$c2,Tz,IJ],function(MJ){
		   var NJ=MJ[0],OJ=MJ[1];
		   $R(1,[NJ,OJ],"Event");
		  },[]);
		 },[Tz,IJ],"sat");
		 $$FRPziSodiumziPlain_zdwa7.C([LJ],function(PJ){
		  var QJ=PJ[0],RJ=PJ[1];
		  $R(1,[QJ,RJ],"Event");
		 },[]);
		},[Tz,IJ],"a22");
		var SJ=$t(function(){
		 $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_snd,KJ],function(TJ){
		  var UJ=TJ[0],VJ=TJ[1];
		  $R(1,[UJ,VJ],"Event");
		 },[]);
		},[KJ],"a23");
		var WJ=$t(function(){
		 $$FRPziSodiumziPlain_zdwa.C([$$DataziTuple_fst,KJ],function(XJ){
		  var YJ=XJ[0],ZJ=XJ[1];
		  $R(1,[YJ,ZJ],"Event");
		 },[]);
		},[KJ],"sat");
		var aK=$d(1,[IJ,WJ,SJ],"sat");
		var bK=$d(1,[aK,JJ],"sat");
		$b($hs_putMVarzh,[dJ,bK,FJ],function(WM){
		 $$FRPziSodiumziPlain_hold1.C([$$Freecell$j2,Uz,JJ,WM],function(cK){
		  var dK=cK[0],eK=cK[1];
		  $M(eK,function(fK){
		   var gK=fK.v[0],hK=fK.v[1];
		   var iK=$hs_newMVarzh(dK);
		   var jK=iK[0],kK=iK[1];
		   var lK=$f(1,function(mK){
		    var nK=$hs_noDuplicatezh(mK);
		    $k($hs_takeMVarzh,[kK,nK]);
		   },[kK],"sat");
		   $$GHCziIO_unsafeDupableInterleaveIO.C([lK,jK],function(oK){
		    var pK=oK[0],qK=oK[1];
		    var rK=$t(function(){
		     var sK=$t(function(){
		      var tK=$t(function(){
		       var uK=$t(function(){
			var vK=$d(2,[SJ,$$GHCziTypes_ZMZN],"sat");
			$$GHCziBase_zpzp.J(ZI,vK);
		       },[SJ,ZI],"sat");
		       $$GHCziBase_zpzp.C([OI,uK],function(wK){
			switch(wK.g){
			case 1:
			 $A($$GHCziList_foldr3);break;
			case 2:
			 var xK=wK.v[0],yK=wK.v[1];
			 $M(yK,function(zK){
			  switch(zK.g){
			  case 1:
			   $A(xK);break;
			  case 2:
			   var AK=zK.v[0],BK=zK.v[1];
			   var CK=$t(function(){
			    $$GHCziList_foldr1zuzdsfoldr1.J($$FRPziSodiumziPlain_merge1,AK,BK);
			   },[AK,BK],"sat");
			   $$FRPziSodiumziPlain_zdwa8.C([xK,CK],function(DK){
			    var EK=DK[0],FK=DK[1];
			    $R(1,[EK,FK],"Event");
			   },[]);break;
			  }
			 },[xK]);break;
			}
		       },[]);
		      },[SJ,OI,ZI],"sat");
		      $$FRPziSodiumziPlain_zdwa.C([$$DataziMaybe_Just,tK],function(GK){
		       var HK=GK[0],IK=GK[1];
		       $R(1,[HK,IK],"Event");
		      },[]);
		     },[SJ,OI,ZI],"sat");
		     var JK=$t(function(){
		      var KK=$t(function(){
		       $M(qK,function(LK){
			var MK=LK.v[0];
			$M(MK,function(NK){
			 var OK=NK.v[0];
			 $A(OK);
			},[]);
		       },[]);
		      },[qK],"sat");
		      $$FRPziSodiumziPlain_zdwa.C([$$Freecell$l2,KK],function(PK){
		       var QK=PK[0],RK=PK[1];
		       $R(1,[QK,RK],"Event");
		      },[]);
		     },[qK],"sat");
		     $$FRPziSodiumziPlain_zdwa8.C([JK,sK],function(SK){
		      var TK=SK[0],UK=SK[1];
		      $R(1,[TK,UK],"Event");
		     },[]);
		    },[SJ,qK,OI,ZI],"sat");
		    $$FRPziSodiumziPlain_hold1.C([$$DataziMaybe_Nothing,rK,hK,pK],function(VK){
		     var WK=VK[0],XK=VK[1];
		     $M(XK,function(YK){
		      var ZK=YK.v[0],aL=YK.v[1];
		      var bL=$t(function(){
		       var cL=$t(function(){
			$$FRPziSodiumziPlain_zdwa5.C([$$Freecell$m2,Tz,ZK],function(dL){
			 var eL=dL[0],fL=dL[1];
			 $R(1,[eL,fL],"Event");
			},[]);
		       },[Tz,ZK],"sat");
		       $$FRPziSodiumziPlain_zdwa7.C([cL],function(gL){
			var hL=gL[0],iL=gL[1];
			$R(1,[hL,iL],"Event");
		       },[]);
		      },[Tz,ZK],"a29");
		      var jL=$d(1,[bL,ZK],"sat");
		      var kL=$d(1,[jL,aL],"sat");
		      $b($hs_putMVarzh,[kK,kL,WK],function(VM){
		       var lL=$t(function(){
			$M(gK,function(mL){
			 var nL=mL.v[0],oL=mL.v[1];
			 var pL=$f(1,function(qL){
			  var rL=$f(1,function(sL){
			   $$FRPziSodiumziPlain_unSample.C([oL,sL],function(tL){
			    var uL=tL[0],vL=tL[1];
			    var wL=$f(1,function(z){
			     $$Freecell$p2.J(vL,z);
			    },[vL],"sat");
			    $r([uL,wL]);
			   },[]);
			  },[oL],"sat");
			  $r([qL,rL]);
			 },[oL],"sat");
			 var xL=$d(1,[pL],"sat");
			 var yL=$t(function(){
			  $$FRPziSodiumziPlain_zdwa.C([$$Freecell$p2,nL],function(zL){
			   var AL=zL[0],BL=zL[1];
			   $R(1,[AL,BL],"Event");
			  },[]);
			 },[nL],"sat");
			 var CL=$d(1,[yL,xL],"sat");
			 $$FRPziSodiumziPlain_zdwzdczlztzg.J(CL,ZK);
			},[ZK]);
		       },[ZK,gK],"a30");
		       var DL=$t(function(){
			$M(IJ,function(EL){
			 var FL=EL.v[0],GL=EL.v[1];
			 var HL=$f(1,function(IL){
			  var JL=$f(1,function(KL){
			   $$FRPziSodiumziPlain_unSample.C([GL,KL],function(LL){
			    var ML=LL[0],NL=LL[1];
			    var OL=$t(function(){
			     $$GHCziList_zzipWith.J($$Freecell$d2,$$Freecell$O1,NL);
			    },[NL],"sat");
			    $r([ML,OL]);
			   },[]);
			  },[GL],"sat");
			  $r([IL,JL]);
			 },[GL],"sat");
			 var PL=$d(1,[HL],"sat");
			 var QL=$t(function(){
			  $$FRPziSodiumziPlain_zdwa.C([$$Freecell$e2,FL],function(RL){
			   var SL=RL[0],TL=RL[1];
			   $R(1,[SL,TL],"Event");
			  },[]);
			 },[FL],"sat");
			 $R(1,[QL,PL],"Behavior");
			},[]);
		       },[IJ],"a31");
		       var UL=$t(function(){
			$M(aJ,function(VL){
			 switch(VL.g){
			 case 1:
			  $A($$GHCziList_foldr3);break;
			 case 2:
			  var WL=VL.v[0],XL=VL.v[1];
			  $M(XL,function(YL){
			   switch(YL.g){
			   case 1:
			    $A(WL);break;
			   case 2:
			    var ZL=YL.v[0],aM=YL.v[1];
			    $M(WL,function(bM){
			     var cM=bM.v[0],dM=bM.v[1];
			     $$GHCziList_foldr1zuzdsfoldr1.C([$$Freecell$h2,ZL,aM],function(eM){
			      var fM=$f(1,function(gM){
			       var hM=$f(1,function(iM){
				$$FRPziSodiumziPlain_unSample.C([dM,iM],function(jM){
				 var kM=jM[0],lM=jM[1];
				 var mM=$f(1,function(z){
				  $$GHCziBase_plusInt.J(lM,z);
				 },[lM],"sat");
				 $r([kM,mM]);
				},[]);
			       },[dM],"sat");
			       $r([gM,hM]);
			      },[dM],"sat");
			      var nM=$d(1,[fM],"sat");
			      var oM=$t(function(){
			       $$FRPziSodiumziPlain_zdwa.C([$$GHCziBase_plusInt,cM],function(pM){
				var qM=pM[0],rM=pM[1];
				$R(1,[qM,rM],"Event");
			       },[]);
			      },[cM],"sat");
			      var sM=$d(1,[oM,nM],"sat");
			      $$FRPziSodiumziPlain_zdwzdczlztzg.J(sM,eM);
			     },[cM,dM]);
			    },[ZL,aM]);break;
			   }
			  },[WL]);break;
			 }
			},[]);
		       },[aJ],"sat");
		       var tM=$t(function(){
			$M(IJ,function(uM){
			 var vM=uM.v[0],wM=uM.v[1];
			 var xM=$f(1,function(yM){
			  var zM=$f(1,function(AM){
			   $$FRPziSodiumziPlain_unSample.C([wM,AM],function(BM){
			    var CM=BM[0],DM=BM[1];
			    var EM=$t(function(){
			     $$Freecell$g2.J(DM);
			    },[DM],"sat");
			    $r([CM,EM]);
			   },[]);
			  },[wM],"sat");
			  $r([yM,zM]);
			 },[wM],"sat");
			 var FM=$d(1,[xM],"sat");
			 var GM=$t(function(){
			  $$FRPziSodiumziPlain_zdwa.C([$$Freecell$g2,vM],function(HM){
			   var IM=HM[0],JM=HM[1];
			   $R(1,[IM,JM],"Event");
			  },[]);
			 },[vM],"sat");
			 $R(1,[GM,FM],"Behavior");
			},[]);
		       },[IJ],"sat");
		       var KM=$d(1,[NI,YI,tM,UL,bL,MI,XI,DL,lL],"sat");
		       var LM=$d(1,[KM,aL],"sat");
		       $b($hs_putMVarzh,[PD,LM,VM],function(UM){
			var MM=$d(2,[lL],"sat");
			var NM=$d(2,[DL],"sat");
			var OM=$d(1,[NM,MM],"sat");
			var PM=$t(function(){
			 $$Freecell$t1.J(XI);
			},[XI],"sat");
			var QM=$d(1,[PM,OM],"sat");
			var RM=$t(function(){
			 $$Freecell$t1.J(MI);
			},[MI],"sat");
			var SM=$d(1,[RM,QM],"sat");
			var TM=$d(1,[SM,aL],"sat");
			$r([UM,TM]);
		       },[aL,lL,DL,MI,XI]);
		      },[PD,IJ,ZK,bL,aL,gK,NI,YI,aJ,MI,XI]);
		     },[Tz,PD,IJ,kK,WK,gK,NI,YI,aJ,MI,XI]);
		    },[Tz,PD,IJ,kK,gK,NI,YI,aJ,MI,XI]);
		   },[Tz,PD,IJ,SJ,kK,OI,ZI,hK,gK,NI,YI,aJ,MI,XI]);
		  },[Tz,PD,IJ,SJ,dK,OI,ZI,NI,YI,aJ,MI,XI]);
		 },[Tz,PD,IJ,SJ,OI,ZI,NI,YI,aJ,MI,XI]);
		},[Tz,Uz,PD,IJ,SJ,JJ,OI,ZI,NI,YI,aJ,MI,XI]);
	       },[Tz,Uz,PD,dJ,FJ,OI,ZI,NI,YI,aJ,MI,XI]);
	      },[Tz,Uz,PD,dJ,OI,ZI,NI,YI,aJ,MI,XI]);
	     },[Tz,Uz,PD,ZD,dJ,VI,OI,ZI,NI,YI,aJ,MI,XI]);
	    },[Tz,Uz,PD,ZD,RI,VI,OI,NI,MI]);
	   },[Tz,Uz,PD,ZD,RI,OI,NI,MI]);
	  },[Tz,Uz,PD,ZD,OI,NI,MI]);
	 },[Tz,Uz,Yz,PD,ZD,KI,GI]);
	},[Tz,Uz,Yz,PD,ZD,GI]);
       },[Tz,Uz,Yz,PD,ZD]);
      },[Tz,Uz,Yz,PD,ZD,rE,LD,UD]);
     },[fx,Tz,Uz,Yz,PD,LD]);
    },[fx,Tz,Uz,Yz],"sat");
    $A(KD);
   },[fx],"sat");
   $r([dx,Sz]);
  },[]);
 },[Zw]);
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
var $$Freecell$I=$F(3,function(aN,bN,cN){
 var dN=$t(function(){
  var eN=$t(function(){
   var fN=$t(function(){
    $M(bN,function(gN){
     switch(gN.g){
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
   },[bN],"a11");
   $M(cN,function(hN){
    switch(hN.g){
    case 1:
     $R(2,[$$Freecell$q,fN],":");break;
    case 2:
     $R(2,[$$Freecell$r,fN],":");break;
    case 3:
     $R(2,[$$Freecell$s,fN],":");break;
    case 4:
     $R(2,[$$Freecell$t,fN],":");break;
    }
   },[fN]);
  },[bN,cN],"sat");
  var iN=$d(2,[$$SystemziFilePathziPosix_pathSeparator,eN],"sat");
  $$GHCziCString_unpackAppendCStringzh.J("cards",iN);
 },[bN,cN],"sat");
 var jN=$d(1,[aN,$$Freecell$c],"sat");
 $r([jN,dN]);
},"at src/Freecell.hs:95:1");
var $$Freecell$J=$F(2,function(kN,lN){
 $M(lN,function(mN){
  var nN=mN.v[0],oN=mN.v[1];
  $$Freecell$I.C([kN,nN,oN],function(pN){
   var qN=pN[0],rN=pN[1];
   $R(1,[qN,rN],"(,)");
  },[]);
 },[kN]);
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
 $$GHCziShow_showszuitoszq.J(goog.math.Long.fromBits(3,0),$$Freecell$R);
},"lvl39");
var $$Freecell$T=$T(function(){
 $$GHCziCString_unpackAppendCStringzh.J(") is outside of enumeration's range (0,",$$Freecell$S);
},"lvl40");
var $$Freecell$U=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl41");
var $$Freecell$V=$T(function(){
 $$GHCziShow_showszuitoszq.J(goog.math.Long.fromBits(12,0),$$Freecell$U);
},"lvl42");
var $$Freecell$W=$T(function(){
 $$GHCziCString_unpackAppendCStringzh.J(") is outside of enumeration's range (0,",$$Freecell$V);
},"lvl43");
var $$Freecell$i1=$D(1,function(){
 $r([800.0]);
},"at src/Freecell.hs:90:1");
var $$Freecell$j1=$F(2,function(sN,tN){
 var uN=$f(1,function(vN){
  var wN=$t(function(){
   var xN=$f(1,function(yN){
    $M(yN,function(zN){
     var AN=zN.v[0],BN=zN.v[1];
     $$Freecell_zdfEqLocationzuzdczeze.C([AN,vN],function(CN){
      switch(CN.g){
      case 1:
       $R(1,[],"Nothing");break;
      case 2:
       $R(2,[BN],"Just");break;
      }
     },[BN]);
    },[vN]);
   },[vN],"sat");
   $$FRPziSodiumziPlain_zdwa.C([xN,sN],function(DN){
    var EN=DN[0],FN=DN[1];
    $R(1,[EN,FN],"Event");
   },[]);
  },[vN,sN],"sat");
  $$FRPziSodiumziPlain_zdwa7.C([wN],function(GN){
   var HN=GN[0],IN=GN[1];
   $R(1,[HN,IN],"Event");
  },[]);
 },[sN],"sat");
 $$GHCziBase_map.J(uN,tN);
},"at src/Freecell.hs:287:1");
var $$Freecell$m1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("succ{Value}: tried to take `succ' of last tag in enumeration");
},"lvl57");
var $$Freecell$o1=$F(4,function(JN,KN,LN,MN){
 $M(KN,function(NN){
  switch(NN.g){
  case 3:
   $M(MN,function(hO){
    switch(hO.g){
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    default:
     $b(function(){
      $M(JN,function(qO){
       $r($hs_dataToTagzh(qO));
      },[LN]);
     },[],function(iO){
      switch(iO.toString()){
      case "0":
       $R(1,[],"False");break;
      default:
       var pO=iO.add(goog.math.Long.fromBits(4294967295,4294967295));
       var jO=$hs_tagToEnumzh(pO);
       $M(LN,function(kO){
	$b(function(){
	 $M(kO,function(oO){
	  $r($hs_dataToTagzh(oO));
	 },[jO]);
	},[],function(mO){
	 $b(function(){
	  $M(jO,function(nO){
	   $r($hs_dataToTagzh(nO));
	  },[mO]);
	 },[],function(lO){
	  $r(lO.equals(mO)?$$GHCziTypes_True:$$GHCziTypes_False);
	 },[mO]);
	},[jO]);
       },[jO]);
      }
     },[LN]);
    }
   },[JN,LN]);break;
  case 4:
   $M(MN,function(rO){
    switch(rO.g){
    case 3:
     $R(1,[],"False");break;
    case 4:
     $R(1,[],"False");break;
    default:
     $b(function(){
      $M(JN,function(AO){
       $r($hs_dataToTagzh(AO));
      },[LN]);
     },[],function(sO){
      switch(sO.toString()){
      case "0":
       $R(1,[],"False");break;
      default:
       var zO=sO.add(goog.math.Long.fromBits(4294967295,4294967295));
       var tO=$hs_tagToEnumzh(zO);
       $M(LN,function(uO){
	$b(function(){
	 $M(uO,function(yO){
	  $r($hs_dataToTagzh(yO));
	 },[tO]);
	},[],function(wO){
	 $b(function(){
	  $M(tO,function(xO){
	   $r($hs_dataToTagzh(xO));
	  },[wO]);
	 },[],function(vO){
	  $r(vO.equals(wO)?$$GHCziTypes_True:$$GHCziTypes_False);
	 },[wO]);
	},[tO]);
       },[tO]);
      }
     },[LN]);
    }
   },[JN,LN]);break;
  default:
   $M(MN,function(ON){
    switch(ON.g){
    case 3:
     $b(function(){
      $M(JN,function(XN){
       $r($hs_dataToTagzh(XN));
      },[LN]);
     },[],function(PN){
      switch(PN.toString()){
      case "0":
       $R(1,[],"False");break;
      default:
       var WN=PN.add(goog.math.Long.fromBits(4294967295,4294967295));
       var QN=$hs_tagToEnumzh(WN);
       $M(LN,function(RN){
	$b(function(){
	 $M(RN,function(VN){
	  $r($hs_dataToTagzh(VN));
	 },[QN]);
	},[],function(TN){
	 $b(function(){
	  $M(QN,function(UN){
	   $r($hs_dataToTagzh(UN));
	  },[TN]);
	 },[],function(SN){
	  $r(SN.equals(TN)?$$GHCziTypes_True:$$GHCziTypes_False);
	 },[TN]);
	},[QN]);
       },[QN]);
      }
     },[LN]);break;
    case 4:
     $b(function(){
      $M(JN,function(gO){
       $r($hs_dataToTagzh(gO));
      },[LN]);
     },[],function(YN){
      switch(YN.toString()){
      case "0":
       $R(1,[],"False");break;
      default:
       var fO=YN.add(goog.math.Long.fromBits(4294967295,4294967295));
       var ZN=$hs_tagToEnumzh(fO);
       $M(LN,function(aO){
	$b(function(){
	 $M(aO,function(eO){
	  $r($hs_dataToTagzh(eO));
	 },[ZN]);
	},[],function(cO){
	 $b(function(){
	  $M(ZN,function(dO){
	   $r($hs_dataToTagzh(dO));
	  },[cO]);
	 },[],function(bO){
	  $r(bO.equals(cO)?$$GHCziTypes_True:$$GHCziTypes_False);
	 },[cO]);
	},[ZN]);
       },[ZN]);
      }
     },[LN]);break;
    default:
     $R(1,[],"False");
    }
   },[JN,LN]);
  }
 },[MN,JN,LN]);
},"at src/Freecell.hs:76:1");
var $$Freecell$p1=$F(1,function(BO){
 $$GHCziList_zdwsplitAtzh.C([goog.math.Long.fromBits(8,0),BO],function(CO){
  var DO=CO[0],EO=CO[1];
  $M(DO,function(FO){
   switch(FO.g){
   case 1:
    $R(1,[],"[]");break;
   case 2:
    var GO=$t(function(){
     $$Freecell$p1.J(EO);
    },[EO],"sat");
    $R(2,[FO,GO],":");break;
   }
  },[EO]);
 },[]);
},"at src/Freecell.hs:340:5");
var $$Freecell$q1=$T(function(){
 $$Freecell_zdwzdcenumFromTo.J($$Freecell_Ace,$$Freecell_Spades,$$Freecell_King,$$Freecell_Hearts);
},"at src/Freecell.hs:318:13");
var $$Freecell$r1=$T(function(){
 $$GHCziList_zdwlen.C([$$Freecell$q1,goog.math.Long.fromBits(0,0)],function(HO){
  $R(1,[HO],"I#");
 },[]);
},"at src/Freecell.hs:319:9");
var $$Freecell$s1=$T(function(){
 $M($$Freecell$r1,function(IO){
  var JO=IO.v[0];
  var KO=JO.subtract(goog.math.Long.fromBits(1,0));
  $R(1,[KO],"I#");
 },[]);
},"lvl59");
var $$Freecell$t1=$F(1,function(LO){
 $$GHCziBase_map.C([$$Game_BehaviorNode,LO],function(MO){
  switch(MO.g){
  case 1:
   $A($$GHCziList_foldr3);break;
  case 2:
   var NO=MO.v[0],OO=MO.v[1];
   $M(OO,function(PO){
    switch(PO.g){
    case 1:
     $A(NO);break;
    case 2:
     var QO=PO.v[0],RO=PO.v[1];
     var SO=$t(function(){
      $$GHCziList_foldr1zuzdsfoldr1.J($$Game_ZCzpzp,QO,RO);
     },[QO,RO],"sat");
     $R(1,[NO,SO],":++");break;
    }
   },[NO]);break;
  }
 },[]);
},"at src/Freecell.hs:315:5");
var $$Freecell$u1=$F(1,function(TO){
 var UO=$t(function(){
  $M(TO,function(VO){
   switch(VO.toString()){
   case "3":
    $R(1,[],"[]");break;
   default:
    var WO=VO.add(goog.math.Long.fromBits(1,0));
    $$Freecell$u1.J(WO);
   }
  },[]);
 },[TO],"sat");
 var XO=$d(1,[TO],"sat");
 var YO=$d(2,[XO],"sat");
 $R(2,[YO,UO],":");
},"go");
var $$Freecell$v1=$T(function(){
 $$Freecell$u1.J(goog.math.Long.fromBits(0,0));
},"at src/Freecell.hs:297:9");
var $$Freecell$w1=$F(1,function(ZO){
 var aP=$t(function(){
  $M(ZO,function(bP){
   switch(bP.toString()){
   case "7":
    $R(1,[],"[]");break;
   default:
    var cP=bP.add(goog.math.Long.fromBits(1,0));
    $$Freecell$w1.J(cP);
   }
  },[]);
 },[ZO],"sat");
 var dP=$d(1,[ZO],"sat");
 var eP=$d(1,[dP],"sat");
 $R(2,[eP,aP],":");
},"go1");
var $$Freecell$x1=$T(function(){
 $$Freecell$w1.J(goog.math.Long.fromBits(0,0));
},"at src/Freecell.hs:296:9");
var $$Freecell$y1=$F(3,function(fP,gP,hP){
 var iP=$t(function(){
  $M(gP,function(jP){
   var kP=jP.v[2];
   $A(kP);
  },[]);
 },[gP],"lvl107");
 var lP=$t(function(){
  $M(gP,function(mP){
   var nP=mP.v[3];
   $A(nP);
  },[]);
 },[gP],"a11");
 var oP=$f(1,function(pP){
  $M(pP,function(qP){
   switch(qP.g){
   case 1:
    $r([lP,iP]);break;
   case 2:
    var rP=qP.v[0],sP=qP.v[1];
    $M(rP,function(tP){
     var uP=tP.v[0],vP=tP.v[1],wP=tP.v[2];
     $M(fP,function(xP){
      var yP=xP.v[0],zP=xP.v[1];
      $M(yP,function(AP){
       var BP=AP.v[0];
       $M(vP,function(CP){
	var DP=CP.v[0],EP=CP.v[1];
	$M(DP,function(FP){
	 var GP=FP.v[0],HP=FP.v[1];
	 $M(GP,function(IP){
	  var JP=IP.v[0];
	  $M(EP,function(KP){
	   var LP=KP.v[0],MP=KP.v[1];
	   $M(LP,function(NP){
	    var OP=NP.v[0];
	    var dQ=JP-OP;
	    var PP=BP>=dQ?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(PP.g){
	    case 1:
	     oP.J(sP);break;
	    case 2:
	     var cQ=JP+OP;
	     var QP=BP<=cQ?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(QP.g){
	     case 1:
	      oP.J(sP);break;
	     case 2:
	      $M(zP,function(RP){
	       var SP=RP.v[0];
	       $M(HP,function(TP){
		var UP=TP.v[0];
		$M(MP,function(VP){
		 var WP=VP.v[0];
		 var bQ=UP-WP;
		 var XP=SP>=bQ?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(XP.g){
		 case 1:
		  oP.J(sP);break;
		 case 2:
		  var aQ=UP+WP;
		  var YP=SP<=aQ?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(YP.g){
		  case 1:
		   oP.J(sP);break;
		  case 2:
		   wP.C([iP],function(ZP){
		    switch(ZP.g){
		    case 1:
		     oP.J(sP);break;
		    case 2:
		     $r([uP,iP]);break;
		    }
		   },[iP,lP,fP,sP,oP,uP]);break;
		  }break;
		 }
		},[iP,lP,fP,sP,oP,SP,UP,wP,uP]);
	       },[iP,lP,fP,sP,oP,MP,SP,wP,uP]);
	      },[iP,lP,fP,sP,oP,HP,MP,wP,uP]);break;
	     }break;
	    }
	   },[iP,lP,fP,BP,JP,sP,oP,zP,HP,MP,wP,uP]);
	  },[iP,lP,fP,BP,JP,sP,oP,zP,HP,wP,uP]);
	 },[iP,lP,fP,EP,BP,sP,oP,zP,HP,wP,uP]);
	},[iP,lP,fP,EP,BP,sP,oP,zP,wP,uP]);
       },[iP,lP,fP,BP,sP,oP,zP,wP,uP]);
      },[iP,lP,fP,vP,sP,oP,zP,wP,uP]);
     },[iP,lP,fP,vP,sP,oP,wP,uP]);
    },[iP,lP,fP,sP,oP]);break;
   }
  },[iP,lP,fP,oP]);
 },[iP,lP,fP],"$wfindDest");
 oP.J(hP);
},"$wlvl");
var $$Freecell$z1=$F(2,function(eQ,fQ){
 $M(eQ,function(gQ){
  var hQ=gQ.v[0],iQ=gQ.v[1];
  $$Freecell$y1.C([hQ,iQ,fQ],function(jQ){
   var kQ=jQ[0],lQ=jQ[1];
   $R(1,[kQ,lQ],"(,)");
  },[]);
 },[fQ]);
},"lvl60");
var $$Freecell$A1=$D(2,function(){
 $r([$$Freecell_Grave,$$GHCziTypes_ZMZN]);
},"lvl61");
var $$Freecell$B1=$T(function(){
 $$ControlziExceptionziBase_patError.J("src/Freecell.hs:(122,1)-(160,33)|function stack");
},"lvl62");
var $$Freecell$C1=$D(1,function(){
 $r([300.0]);
},"at src/Freecell.hs:124:22");
var $$Freecell$D1=$F(1,function(mQ){
 $M(mQ,function(nQ){
  var oQ=nQ.v[0],pQ=nQ.v[1];
  var qQ=$t(function(){
   $M(pQ,function(rQ){
    var sQ=rQ.v[0];
    var tQ=sQ-70.0;
    $R(1,[tQ],"D#");
   },[]);
  },[pQ],"sat");
  $R(1,[oQ,qQ],"(,)");
 },[]);
},"lvl63");
var $$Freecell$E1=$F(2,function(uQ,vQ){
 $$GHCziBase_zpzp.J(vQ,uQ);
},"lvl64");
var $$Freecell$F1=$T(function(){
 $$ControlziExceptionziBase_patError.J("src/Freecell.hs:(165,1)-(186,46)|function cell");
},"lvl65");
var $$Freecell$G1=$F(1,function(wQ){
 var xQ=$t(function(){
  $M(wQ,function(yQ){
   switch(yQ.g){
   case 1:
    $A($$GHCziList_badHead);break;
   case 2:
    var zQ=yQ.v[0];
    $A(zQ);break;
   }
  },[]);
 },[wQ],"sat");
 $R(2,[xQ],"Just");
},"lvl66");
var $$Freecell$J1=$F(1,function(AQ){
 $M(AQ,function(BQ){
  switch(BQ.g){
  case 1:
   $A($$Freecell$N);break;
  case 2:
   $A($$Freecell_zdfShowLocation1);break;
  }
 },[]);
},"lvl69");
var $$Freecell$K1=$D(1,function(){
 $r([goog.math.Long.fromBits(3,0)]);
},"lvl70");
var $$Freecell$L1=$F(2,function(CQ,DQ){
 var EQ=$t(function(){
  $$GHCziIntegerziType_minusInteger.C([$$Freecell$K1,CQ],function(FQ){
   $$GHCziIntegerziType_doubleFromInteger.C([FQ],function(IQ){
    var HQ=244.2857142857143*IQ;
    var GQ=950.0-HQ;
    $R(1,[GQ],"D#");
   },[]);
  },[]);
 },[CQ],"sat");
 var JQ=$d(1,[EQ,$$Freecell$i1],"sat");
 $R(2,[JQ,DQ],":");
},"lvl71");
var $$Freecell$M1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl72");
var $$Freecell$N1=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl73");
var $$Freecell$O1=$T(function(){
 $$GHCziEnum_enumDeltaToIntegerFB.J($$Freecell$L1,$$GHCziTypes_ZMZN,$$Freecell$M1,$$Freecell$N1,$$Freecell$K1);
},"at src/Freecell.hs:193:9");
var $$Freecell$P1=$F(1,function(KQ){
 $M(KQ,function(LQ){
  switch(LQ.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var MQ=LQ.v[0],NQ=LQ.v[1];
   var OQ=$t(function(){
    $$Freecell$P1.J(NQ);
   },[NQ],"sat");
   var PQ=$d(1,[MQ,$$Freecell$c],"sat");
   $R(2,[PQ,OQ],":");break;
  }
 },[]);
},"xs");
var $$Freecell$Q1=$T(function(){
 $$Freecell$P1.J($$Freecell$O1);
},"at src/Freecell.hs:194:9");
var $$Freecell$R1=$D(1,function(){
 $r([583.5714285714286]);
},"a2");
var $$Freecell$S1=$D(1,function(){
 $r([$$Freecell$R1,$$Freecell$i1]);
},"a3");
var $$Freecell$T1=$D(1,function(){
 $r([466.42857142857144]);
},"a4");
var $$Freecell$U1=$D(1,function(){
 $r([$$Freecell$T1,$$Freecell$b]);
},"a5");
var $$Freecell$V1=$D(1,function(){
 $r([$$Freecell$S1,$$Freecell$U1]);
},"at src/Freecell.hs:196:9");
var $$Freecell$W1=$D(2,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziTypes_ZMZN]);
},"lvl74");
var $$Freecell$X1=$D(2,function(){
 $r([$$DataziMaybe_Nothing,$$Freecell$W1]);
},"lvl75");
var $$Freecell$Y1=$D(2,function(){
 $r([$$DataziMaybe_Nothing,$$Freecell$X1]);
},"lvl76");
var $$Freecell$Z1=$D(2,function(){
 $r([$$DataziMaybe_Nothing,$$Freecell$Y1]);
},"lvl77");
var $$Freecell$a2=$F(2,function(QQ,RQ){
 $M(QQ,function(SQ){
  switch(SQ.g){
  case 1:
   $A($$GHCziList_badHead);break;
  case 2:
   var TQ=SQ.v[0];
   $M(TQ,function(UQ){
    var VQ=UQ.v[1];
    var WQ=$f(1,function(XQ){
     var YQ=$t(function(){
      var aR=XQ.add(goog.math.Long.fromBits(1,0));
      var ZQ=aR.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(ZQ.g){
      case 1:
       $$GHCziList_dropzudropzh.J(aR,RQ);break;
      case 2:
       $A(RQ);break;
      }
     },[XQ,RQ],"a11");
     var bR=$d(2,[UQ],"a12");
     var cR=$d(2,[bR,YQ],"n1");
     var dR=XQ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(dR.g){
     case 1:
      var eR=$f(2,function(fR,gR){
       $M(fR,function(hR){
	switch(hR.g){
	case 1:
	 $A(cR);break;
	case 2:
	 var iR=hR.v[0],jR=hR.v[1];
	 var kR=gR.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(kR.g){
	 case 1:
	  var lR=$t(function(){
	   var mR=gR.subtract(goog.math.Long.fromBits(1,0));
	   eR.J(jR,mR);
	  },[gR,jR,eR],"sat");
	  $R(2,[iR,lR],":");break;
	 case 2:
	  $R(2,[iR,cR],":");break;
	 }break;
	}
       },[cR,gR,eR]);
      },[cR],"go4");
      eR.J(RQ,XQ);break;
     case 2:
      $A(cR);break;
     }
    },[RQ,UQ],"$j");
    $M(VQ,function(nR){
     switch(nR.g){
     case 1:
      WQ.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      WQ.J(goog.math.Long.fromBits(1,0));break;
     case 3:
      WQ.J(goog.math.Long.fromBits(2,0));break;
     case 4:
      WQ.J(goog.math.Long.fromBits(3,0));break;
     }
    },[RQ,UQ,WQ]);
   },[RQ]);break;
  }
 },[RQ]);
},"lvl78");
var $$Freecell$b2=$F(2,function(oR,pR){
 $M(oR,function(qR){
  switch(qR.g){
  case 1:
   $R(1,[],"Nothing");break;
  case 2:
   var rR=qR.v[0],sR=qR.v[1];
   $M(rR,function(tR){
    switch(tR.g){
    case 1:
     var uR=$t(function(){
      $M(pR,function(vR){
       var wR=vR.v[0];
       var xR=wR.add(goog.math.Long.fromBits(1,0));
       $R(1,[xR],"I#");
      },[]);
     },[pR],"sat");
     $$Freecell$b2.J(sR,uR);break;
    case 2:
     $R(2,[pR],"Just");break;
    }
   },[sR,pR]);break;
  }
 },[pR]);
},"at src/Freecell.hs:241:9");
var $$Freecell$c2=$F(2,function(yR,zR){
 $M(yR,function(AR){
  switch(AR.g){
  case 1:
   var BR=AR.v[0];
   var CR=$f(1,function(z){
    $$Game_inside.J(BR,z);
   },[BR],"sat");
   $$GHCziBase_map.C([CR,$$Freecell$Q1],function(DR){
    $$Freecell$b2.C([DR,$$Freecell_zdfShowLocation1],function(ER){
     switch(ER.g){
     case 1:
      $R(1,[],"Nothing");break;
     case 2:
      var FR=ER.v[0];
      $M(FR,function(GR){
       var HR=GR.v[0];
       var IR=HR.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(IR.g){
       case 1:
	$$GHCziList_znznzusub.C([zR,HR],function(JR){
	 switch(JR.g){
	 case 1:
	  $R(1,[],"Nothing");break;
	 case 2:
	  var KR=JR.v[0];
	  $M(KR,function(LR){
	   var MR=LR.v[0],NR=LR.v[1];
	   var OR=$d(2,[LR,$$GHCziTypes_ZMZN],"sat");
	   var PR=$t(function(){
	    $$GHCziList_znznzusub.J($$Freecell$O1,HR);
	   },[HR],"sat");
	   var QR=$d(1,[PR,BR,OR,$$Freecell_Grave],"sat");
	   var RR=$t(function(){
	    var SR=$t(function(){
	     var UR=HR.add(goog.math.Long.fromBits(1,0));
	     var TR=UR.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(TR.g){
	     case 1:
	      $$GHCziList_dropzudropzh.J(UR,zR);break;
	     case 2:
	      $A(zR);break;
	     }
	    },[HR,zR],"a11");
	    var VR=$t(function(){
	     $b(function(){
	      $M(MR,function(aS){
	       $r($hs_dataToTagzh(aS));
	      },[NR]);
	     },[],function(WR){
	      switch(WR.toString()){
	      case "0":
	       $R(1,[],"Nothing");break;
	      default:
	       var XR=$t(function(){
		var YR=WR.add(goog.math.Long.fromBits(4294967295,4294967295));
		$r($hs_tagToEnumzh(YR));
	       },[WR],"sat");
	       var ZR=$d(1,[XR,NR],"sat");
	       $R(2,[ZR],"Just");
	      }
	     },[NR]);
	    },[MR,NR],"a12");
	    var bS=$d(2,[VR,SR],"n1");
	    var cS=HR.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(cS.g){
	    case 1:
	     var dS=$f(2,function(eS,fS){
	      $M(eS,function(gS){
	       switch(gS.g){
	       case 1:
		$A(bS);break;
	       case 2:
		var hS=gS.v[0],iS=gS.v[1];
		var jS=fS.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(jS.g){
		case 1:
		 var kS=$t(function(){
		  var lS=fS.subtract(goog.math.Long.fromBits(1,0));
		  dS.J(iS,lS);
		 },[fS,iS,dS],"sat");
		 $R(2,[hS,kS],":");break;
		case 2:
		 $R(2,[hS,bS],":");break;
		}break;
	       }
	      },[bS,fS,dS]);
	     },[bS],"go4");
	     dS.J(zR,HR);break;
	    case 2:
	     $A(bS);break;
	    }
	   },[HR,zR,MR,NR],"sat");
	   var mS=$d(1,[RR,QR],"sat");
	   $R(2,[mS],"Just");
	  },[BR,HR,zR]);break;
	 }
	},[BR,HR,zR]);break;
       case 2:
	$A($$GHCziList_znzn1);break;
       }
      },[BR,zR]);break;
     }
    },[BR,zR]);
   },[BR,zR]);break;
  default:
   $R(1,[],"Nothing");
  }
 },[zR]);
},"lvl79");
var $$Freecell$d2=$F(2,function(nS,oS){
 $M(oS,function(pS){
  switch(pS.g){
  case 1:
   var qS=$d(1,[nS,$$Freecell$c],"sat");
   $R(1,[qS,$$Freecell$M],"(,)");break;
  case 2:
   var rS=pS.v[0];
   $$Freecell$J.J(nS,rS);break;
  }
 },[nS]);
},"lvl80");
var $$Freecell$e2=$F(1,function(z){
 $$GHCziList_zzipWith.J($$Freecell$d2,$$Freecell$O1,z);
},"lvl81");
var $$Freecell$f2=$F(1,function(sS){
 var tS=$f(1,function(uS){
  $M(uS,function(vS){
   switch(vS.g){
   case 1:
    $R(1,[],"False");break;
   case 2:
    var wS=vS.v[0],xS=vS.v[1];
    $M(wS,function(yS){
     var zS=yS.v[0],AS=yS.v[1];
     $M(xS,function(BS){
      switch(BS.g){
      case 1:
       var CS=$f(1,function(DS){
	var ES=DS.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(ES.g){
	case 1:
	 $$GHCziList_znznzusub.C([sS,DS],function(FS){
	  switch(FS.g){
	  case 1:
	   $b(function(){
	    $M(zS,function(HS){
	     $r($hs_dataToTagzh(HS));
	    },[]);
	   },[],function(GS){
	    switch(GS.toString()){
	    case "0":
	     $R(2,[],"True");break;
	    default:
	     $R(1,[],"False");
	    }
	   },[]);break;
	  case 2:
	   var IS=FS.v[0];
	   $M(IS,function(JS){
	    var KS=JS.v[0];
	    $M(zS,function(LS){
	     $b(function(){
	      $M(KS,function(TS){
	       $r($hs_dataToTagzh(TS));
	      },[LS]);
	     },[],function(MS){
	      switch(MS.toString()){
	      case "12":
	       $A($$Freecell_zdfEnumValue2);break;
	      default:
	       var SS=MS.add(goog.math.Long.fromBits(1,0));
	       var NS=$hs_tagToEnumzh(SS);
	       $b(function(){
		$M(NS,function(RS){
		 $r($hs_dataToTagzh(RS));
		},[LS]);
	       },[],function(PS){
		$b(function(){
		 $M(LS,function(QS){
		  $r($hs_dataToTagzh(QS));
		 },[PS]);
		},[],function(OS){
		 $r(OS.equals(PS)?$$GHCziTypes_True:$$GHCziTypes_False);
		},[PS]);
	       },[LS]);
	      }
	     },[LS]);
	    },[KS]);
	   },[zS]);break;
	  }
	 },[zS]);break;
	case 2:
	 $A($$GHCziList_znzn1);break;
	}
       },[sS,zS],"$j");
       $M(AS,function(US){
	switch(US.g){
	case 1:
	 CS.J(goog.math.Long.fromBits(0,0));break;
	case 2:
	 CS.J(goog.math.Long.fromBits(1,0));break;
	case 3:
	 CS.J(goog.math.Long.fromBits(2,0));break;
	case 4:
	 CS.J(goog.math.Long.fromBits(3,0));break;
	}
       },[sS,zS,CS]);break;
      case 2:
       $R(1,[],"False");break;
      }
     },[sS,zS,AS]);
    },[xS,sS]);break;
   }
  },[sS]);
 },[sS],"sat");
 $r([$$Freecell_Grave,$$Freecell$V1,tS]);
},"$wlvl1");
var $$Freecell$g2=$F(1,function(VS){
 $$Freecell$f2.C([VS],function(WS){
  var XS=WS[0],YS=WS[1],ZS=WS[2];
  $R(1,[XS,YS,ZS],"Destination");
 },[]);
},"lvl82");
var $$Freecell$h2=$F(2,function(aT,bT){
 $M(aT,function(cT){
  var dT=cT.v[0],eT=cT.v[1];
  var fT=$f(1,function(gT){
   var hT=$f(1,function(iT){
    $$FRPziSodiumziPlain_unSample.C([eT,iT],function(jT){
     var kT=jT[0],lT=jT[1];
     var mT=$f(1,function(z){
      $$GHCziBase_plusInt.J(lT,z);
     },[lT],"sat");
     $r([kT,mT]);
    },[]);
   },[eT],"sat");
   $r([gT,hT]);
  },[eT],"sat");
  var nT=$d(1,[fT],"sat");
  var oT=$t(function(){
   $$FRPziSodiumziPlain_zdwa.C([$$GHCziBase_plusInt,dT],function(pT){
    var qT=pT[0],rT=pT[1];
    $R(1,[qT,rT],"Event");
   },[]);
  },[dT],"sat");
  var sT=$d(1,[oT,nT],"sat");
  $$FRPziSodiumziPlain_zdwzdczlztzg.J(sT,bT);
 },[bT]);
},"lvl83");
var $$Freecell$i2=$D(1,function(){
 $r([0.0]);
},"lvl84");
var $$Freecell$j2=$D(1,function(){
 $r([$$Freecell$i2,$$Freecell$i2]);
},"lvl85");
var $$Freecell$k2=$F(1,function(tT){
 $M(tT,function(uT){
  switch(uT.g){
  case 1:
   var vT=uT.v[0];
   $A(vT);break;
  case 2:
   var wT=uT.v[0];
   $A(wT);break;
  case 3:
   var xT=uT.v[0];
   $A(xT);break;
  }
 },[]);
},"lvl86");
var $$Freecell$l2=$F(1,function(yT){
 $R(1,[],"Nothing");
},"lvl87");
var $$Freecell$m2=$F(2,function(zT,AT){
 $M(zT,function(BT){
  switch(BT.g){
  case 3:
   var CT=BT.v[0];
   $M(AT,function(DT){
    switch(DT.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     var ET=DT.v[0];
     var FT=$t(function(){
      $M(CT,function(GT){
       var HT=GT.v[0],IT=GT.v[1];
       $M(ET,function(JT){
	var KT=JT.v[0],LT=JT.v[1];
	$M(LT,function(MT){
	 var NT=MT.v[0],OT=MT.v[1];
	 $M(KT,function(PT){
	  var QT=PT.v[0],RT=PT.v[1];
	  var ST=$t(function(){
	   $M(IT,function(TT){
	    var UT=TT.v[0];
	    $M(OT,function(VT){
	     var WT=VT.v[0];
	     $M(RT,function(XT){
	      var YT=XT.v[0];
	      var aU=UT-WT;
	      var ZT=aU+YT;
	      $R(1,[ZT],"D#");
	     },[UT,WT]);
	    },[RT,UT]);
	   },[OT,RT]);
	  },[IT,OT,RT],"sat");
	  var bU=$t(function(){
	   $M(HT,function(cU){
	    var dU=cU.v[0];
	    $M(NT,function(eU){
	     var fU=eU.v[0];
	     $M(QT,function(gU){
	      var hU=gU.v[0];
	      var jU=dU-fU;
	      var iU=jU+hU;
	      $R(1,[iU],"D#");
	     },[dU,fU]);
	    },[QT,dU]);
	   },[NT,QT]);
	  },[HT,NT,QT],"sat");
	  $R(1,[bU,ST],"(,)");
	 },[HT,NT,IT,OT]);
	},[KT,HT,IT]);
       },[HT,IT]);
      },[ET]);
     },[CT,ET],"sat");
     var kU=$d(1,[FT,ET],"sat");
     $R(2,[kU],"Just");break;
    }
   },[CT]);break;
  default:
   $R(1,[],"Nothing");
  }
 },[AT]);
},"lvl88");
var $$Freecell$n2=$F(1,function(z){
 $$Freecell$D1.J(z);
},"lvl89");
var $$Freecell$o2=$F(3,function(lU,mU,nU){
 $M(nU,function(oU){
  switch(oU.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var pU=oU.v[0],qU=oU.v[1];
   var rU=$t(function(){
    mU.J(qU);
   },[qU,mU],"sat");
   var sU=$t(function(){
    $$Freecell$J.J(lU,pU);
   },[lU,pU],"sat");
   $R(2,[sU,rU],":");break;
  }
 },[lU,mU]);
},"lvl90");
var $$Freecell$p2=$F(2,function(tU,uU){
 $M(uU,function(vU){
  switch(vU.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var wU=vU.v[0];
   var xU=$t(function(){
    $M(wU,function(yU){
     var zU=yU.v[2];
     $A(zU);
    },[]);
   },[wU],"sat");
   var AU=$t(function(){
    $M(tU,function(BU){
     var CU=BU.v[0],DU=BU.v[1];
     $M(wU,function(EU){
      var FU=EU.v[0],GU=EU.v[1];
      $M(GU,function(HU){
       var IU=HU.v[0],JU=HU.v[1];
       $M(FU,function(KU){
	var LU=KU.v[0],MU=KU.v[1];
	var NU=$t(function(){
	 $M(DU,function(OU){
	  var PU=OU.v[0];
	  $M(JU,function(QU){
	   var RU=QU.v[0];
	   $M(MU,function(SU){
	    var TU=SU.v[0];
	    var VU=PU-RU;
	    var UU=VU+TU;
	    $R(1,[UU],"D#");
	   },[PU,RU]);
	  },[MU,PU]);
	 },[JU,MU]);
	},[DU,JU,MU],"sat");
	var WU=$t(function(){
	 $M(CU,function(XU){
	  var YU=XU.v[0];
	  $M(IU,function(ZU){
	   var aV=ZU.v[0];
	   $M(LU,function(bV){
	    var cV=bV.v[0];
	    var eV=YU-aV;
	    var dV=eV+cV;
	    $R(1,[dV],"D#");
	   },[YU,aV]);
	  },[LU,YU]);
	 },[IU,LU]);
	},[CU,IU,LU],"sat");
	$R(1,[WU,NU],"(,)");
       },[CU,IU,DU,JU]);
      },[FU,CU,DU]);
     },[CU,DU]);
    },[wU]);
   },[tU,wU],"sat");
   $$GHCziList_iterateFB.J($$Freecell$o2,$$Freecell$n2,AU,xU);break;
  }
 },[tU]);
},"lvl91");
var $$Freecell$q2=$F(1,function(fV){
 $M(fV,function(gV){
  switch(gV.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var hV=gV.v[0],iV=gV.v[1];
   var jV=$t(function(){
    $$Freecell$q2.J(iV);
   },[iV],"sat");
   var kV=$t(function(){
    $$GHCziBase_zpzp.J($$GHCziTypes_ZMZN,hV);
   },[hV],"sat");
   $R(2,[kV,jV],":");break;
  }
 },[]);
},"xs1");
var $$Freecell$r2=$F(2,function(lV,mV){
 $M(lV,function(nV){
  switch(nV.g){
  case 1:
   $$Freecell$q2.J(mV);break;
  case 2:
   var oV=nV.v[0],pV=nV.v[1];
   $M(mV,function(qV){
    switch(qV.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var rV=qV.v[0],sV=qV.v[1];
     var tV=$t(function(){
      $$Freecell$r2.J(pV,sV);
     },[pV,sV],"sat");
     var uV=$t(function(){
      var vV=$d(2,[oV,$$GHCziTypes_ZMZN],"sat");
      $$GHCziBase_zpzp.J(vV,rV);
     },[oV,rV],"sat");
     $R(2,[uV,tV],":");break;
    }
   },[oV,pV]);break;
  }
 },[mV]);
},"go2");
var $$Freecell$s2=$F(2,function(wV,xV){
 $M(xV,function(yV){
  switch(yV.g){
  case 1:
   $A(wV);break;
  case 2:
   var zV=yV.v[0],AV=yV.v[1];
   $$Freecell$r2.C([zV,wV],function(BV){
    $$Freecell$s2.J(BV,AV);
   },[AV]);break;
  }
 },[wV]);
},"lgo");
var $$Freecell$t2=$D(2,function(){
 $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);
},"lvl92");
var $$Freecell$u2=$F(1,function(CV){
 var DV=CV.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(DV.g){
 case 1:
  var EV=$t(function(){
   var FV=CV.subtract(goog.math.Long.fromBits(1,0));
   $$Freecell$u2.J(FV);
  },[CV],"sat");
  $R(2,[$$GHCziTypes_ZMZN,EV],":");break;
 case 2:
  $A($$Freecell$t2);break;
 }
},"xs2");
var $$Freecell$v2=$T(function(){
 $$Freecell$u2.J(goog.math.Long.fromBits(8,0));
},"lvl93");
var $$Freecell$w2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Negative range size");
},"lvl94");
var $$Freecell$x2=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Int");
},"lvl95");
var $$Freecell$y2=$F(3,function(GV,HV,IV){
 var JV=$d(1,[HV,IV],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,JV,GV,$$Freecell$x2);
},"poly_$w$j");
var $$Freecell$z2=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl96");
var $$Freecell$A2=$F(2,function(KV,LV){
 var MV=$t(function(){
  var NV=$t(function(){
   var OV=$t(function(){
    $$GHCziShow_itos.C([LV,$$GHCziTypes_ZMZN],function(PV){
     $$GHCziBase_zpzp.J(PV,$$Freecell$z2);
    },[]);
   },[LV],"sat");
   $$GHCziCString_unpackAppendCStringzh.J(" not in range [0..",OV);
  },[LV],"sat");
  $$GHCziShow_itos.C([KV,$$GHCziTypes_ZMZN],function(QV){
   $$GHCziBase_zpzp.J(QV,NV);
  },[NV]);
 },[KV,LV],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Error in array index; ",MV],function(RV){
  $$GHCziErr_error.J(RV);
 },[]);
},"poly_$w$j1");
var $$Freecell$B2=$F(3,function(SV,TV,UV){
 var VV=$d(1,[TV,UV],"sat");
 $$GHCziArr_indexError.J($$GHCziShow_zdfShowInt,VV,SV,$$Freecell$x2);
},"poly_$w$j2");
var $$Freecell$C2=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl97");
var $$Freecell$D2=$F(2,function(WV,XV){
 var YV=$t(function(){
  var ZV=$t(function(){
   var aW=$t(function(){
    $$GHCziShow_itos.C([XV,$$GHCziTypes_ZMZN],function(bW){
     $$GHCziBase_zpzp.J(bW,$$Freecell$C2);
    },[]);
   },[XV],"sat");
   $$GHCziCString_unpackAppendCStringzh.J(" not in range [0..",aW);
  },[XV],"sat");
  $$GHCziShow_itos.C([WV,$$GHCziTypes_ZMZN],function(cW){
   $$GHCziBase_zpzp.J(cW,ZV);
  },[ZV]);
 },[WV,XV],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Error in array index; ",YV],function(dW){
  $$GHCziErr_error.J(dW);
 },[]);
},"poly_$w$j3");
var $$Freecell$E2=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl98");
var $$Freecell$F2=$F(2,function(eW,fW){
 var gW=$t(function(){
  var hW=$t(function(){
   var iW=$t(function(){
    $$GHCziShow_itos.C([fW,$$GHCziTypes_ZMZN],function(jW){
     $$GHCziBase_zpzp.J(jW,$$Freecell$E2);
    },[]);
   },[fW],"sat");
   $$GHCziCString_unpackAppendCStringzh.J(" not in range [0..",iW);
  },[fW],"sat");
  $$GHCziShow_itos.C([eW,$$GHCziTypes_ZMZN],function(kW){
   $$GHCziBase_zpzp.J(kW,hW);
  },[hW]);
 },[eW,fW],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Error in array index; ",gW],function(lW){
  $$GHCziErr_error.J(lW);
 },[]);
},"poly_$w$j4");
var $$Freecell$G2=$D(2,function(){
 $r([$$Freecell$Q,$$GHCziTypes_ZMZN]);
},"lvl99");
var $$Freecell$H2=$F(2,function(mW,nW){
 var oW=$t(function(){
  var pW=$t(function(){
   var qW=$t(function(){
    $$GHCziShow_itos.C([nW,$$GHCziTypes_ZMZN],function(rW){
     $$GHCziBase_zpzp.J(rW,$$Freecell$G2);
    },[]);
   },[nW],"sat");
   $$GHCziCString_unpackAppendCStringzh.J(" not in range [0..",qW);
  },[nW],"sat");
  $$GHCziShow_itos.C([mW,$$GHCziTypes_ZMZN],function(sW){
   $$GHCziBase_zpzp.J(sW,pW);
  },[pW]);
 },[mW,nW],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Error in array index; ",oW],function(tW){
  $$GHCziErr_error.J(tW);
 },[]);
},"poly_$w$j5");
var $$Freecell$I2=$T(function(){
 $$GHCziIntegerziType_smallInteger.J(goog.math.Long.fromBits(0,0));
},"lvl100");
var $$Freecell$J2=$T(function(){
 $M($$Freecell$s1,function(uW){
  var vW=uW.v[0];
  $$GHCziIntegerziType_smallInteger.J(vW);
 },[]);
},"lvl101");
var $$Freecell$K2=$F(2,function(wW,xW){
 $M(xW,function(yW){
  var zW=$t(function(){
   $$SystemziRandom_zdwzdsrandomIvalInteger.C([$$Freecell$I2,$$Freecell$J2,wW],function(AW){
    var BW=AW[0],CW=AW[1];
    $R(1,[BW,CW],"(,)");
   },[]);
  },[wW],"ds");
  var DW=$t(function(){
   $M(zW,function(EW){
    var FW=EW.v[0];
    $A(FW);
   },[]);
  },[zW],"sat");
  var GW=$t(function(){
   $M(zW,function(HW){
    var IW=HW.v[1];
    $A(IW);
   },[]);
  },[zW],"sat");
  $R(1,[GW,DW],"(,)");
 },[wW]);
},"a6");
var $$Freecell$L2=$D(2,function(){
 $r([$$GHCziTuple_Z0T,$$GHCziTypes_ZMZN]);
},"lvl102");
var $$Freecell$M2=$F(1,function(JW){
 var KW=JW.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(KW.g){
 case 1:
  var LW=$t(function(){
   var MW=JW.subtract(goog.math.Long.fromBits(1,0));
   $$Freecell$M2.J(MW);
  },[JW],"sat");
  $R(2,[$$GHCziTuple_Z0T,LW],":");break;
 case 2:
  $A($$Freecell$L2);break;
 }
},"xs3");
var $$Freecell$N2=$F(1,function(NW){
 $r([NW,$$GHCziTypes_ZMZN]);
},"lvl103");
var $$Freecell$O2=$F(1,function(OW){
 $r([OW,$$Freecell$N2]);
},"a7");
var $$Freecell$P2=$D(1,function(){
 $r([$$Freecell$O2]);
},"a8");
var $$Freecell$Q2=$D(1,function(){
 $r([$$FRPziSodiumziPlain_constant2,$$Freecell$P2]);
},"a9");
var $$Freecell$R2=$F(1,function(PW){
 $M(PW,function(QW){
  switch(QW.g){
  case 1:
   $A($$Freecell$Q2);break;
  case 2:
   var RW=QW.v[0],SW=QW.v[1];
   $M(RW,function(TW){
    var UW=TW.v[0],VW=TW.v[1];
    $$Freecell$R2.C([SW],function(WW){
     var XW=$f(1,function(YW){
      var ZW=$f(1,function(aX){
       $$FRPziSodiumziPlain_unSample.C([VW,aX],function(bX){
	var cX=bX[0],dX=bX[1];
	var eX=$f(1,function(z){
	 $R(2,[dX,z],":");
	},[dX],"sat");
	$r([cX,eX]);
       },[]);
      },[VW],"sat");
      $r([YW,ZW]);
     },[VW],"sat");
     var fX=$d(1,[XW],"sat");
     var gX=$t(function(){
      $$FRPziSodiumziPlain_zdwa.C([$$GHCziTypes_ZC,UW],function(hX){
       var iX=hX[0],jX=hX[1];
       $R(1,[iX,jX],"Event");
      },[]);
     },[UW],"sat");
     var kX=$d(1,[gX,fX],"sat");
     $$FRPziSodiumziPlain_zdwzdczlztzg.J(kX,WW);
    },[UW,VW]);
   },[SW]);break;
  }
 },[]);
},"go3");
var $$Freecell$S2=$F(2,function(lX,mX){
 var nX=$d(1,[$$GHCziTypes_ZMZN,lX],"sat");
 $r([mX,nX]);
},"a10");
var $$Freecell$T2=$F(3,function(oX,pX,qX){
 var rX=$t(function(){
  $$Freecell$J.J(oX,pX);
 },[oX,pX],"sat");
 $R(2,[rX,qX],":");
},"lvl104");
var $$Freecell$U2=$F(3,function(sX,tX,uX){
 $M(sX,function(vX){
  var wX=vX.v[0],xX=vX.v[1];
  $M(tX,function(yX){
   var zX=yX.v[0],AX=yX.v[1];
   $$Freecell$o1.C([wX,xX,zX,AX],function(BX){
    switch(BX.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     $A(uX);break;
    }
   },[uX]);
  },[wX,xX,uX]);
 },[tX,uX]);
},"lvl105");
var $$Freecell$V2=$F(1,function(CX){
 $M(CX,function(DX){
  switch(DX.g){
  case 1:
   $r([$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN,$$GHCziTypes_ZMZN]);break;
  case 2:
   var EX=DX.v[0],FX=DX.v[1];
   $M(EX,function(GX){
    var HX=GX.v[0],IX=GX.v[1],JX=GX.v[2];
    var KX=$t(function(){
     $$Freecell$V2.C([FX],function(LX){
      var MX=LX[0],NX=LX[1],OX=LX[2];
      $R(1,[MX,NX,OX],"(,,)");
     },[]);
    },[FX],"ds1");
    var PX=$t(function(){
     $M(KX,function(QX){
      var RX=QX.v[2];
      $A(RX);
     },[]);
    },[KX],"sat");
    var SX=$d(2,[JX,PX],"sat");
    var TX=$t(function(){
     $M(KX,function(UX){
      var VX=UX.v[1];
      $A(VX);
     },[]);
    },[KX],"sat");
    var WX=$d(2,[IX,TX],"sat");
    var XX=$t(function(){
     $M(KX,function(YX){
      var ZX=YX.v[0];
      $A(ZX);
     },[]);
    },[KX],"sat");
    var aY=$d(2,[HX,XX],"sat");
    $r([aY,WX,SX]);
   },[FX]);break;
  }
 },[]);
},"$wgo");
var $$Freecell$W2=$F(2,function(bY,cY){
 var dY=$d(1,[$$GHCziTypes_ZMZN,bY],"sat");
 $r([cY,dY]);
},"lvl106");
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
  $$GHCziIntegerziType_timesInteger.C([g4,$$GHCziReal_zdfEnumRatio1],function(i4){
   $$GHCziIntegerziType_timesInteger.C([f4,h4],function(j4){
    $$GHCziReal_zdwreduce.C([j4,i4],function(k4){
     var l4=k4[0],m4=k4[1];
     $$GHCziReal_zdwzdcfloor.J($$GHCziReal_zdfRealInteger,l4,m4);
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
var $$GHCziEnum_zdfEnumInteger1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Enum'");
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
var $$GHCziReal_zdp1Real=$f(1,function(N){
 $M(N,function(O){
  var P=O.v[0];
  $A(P);
 },[]);
},[],"at libraries/base/GHC/Real.lhs:114:26");
var $$GHCziReal_zdfRealIntegerzuzdctoRational=$f(1,function(m4){
 $M(m4,function(n4){
  $R(1,[n4,$$GHCziReal_zdfEnumRatio1],":%");
 },[]);
},[],"at libraries/base/GHC/Real.lhs:116:5");
var $$GHCziReal_zdfRealInteger=$D(1,function(){
 $r([$$GHCziNum_zdfNumInteger,$$GHCziIntegerziType_zdfOrdInteger,$$GHCziReal_zdfRealIntegerzuzdctoRational]);
},"at libraries/base/GHC/Real.lhs:300:11");
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
var $$GHCziReal_zdwzdcfloor=$f(3,function(qz,rz,sz){
 $$GHCziIntegerziType_eqInteger.C([sz,$$GHCziReal_even1],function(tz){
  switch(tz.g){
  case 1:
   $$GHCziIntegerziType_quotRemInteger.C([rz,sz],function(uz){
    var vz=uz[0],wz=uz[1];
    $$GHCziIntegerziType_timesInteger.C([$$GHCziReal_even1,sz],function(xz){
     $$GHCziIntegerziType_timesInteger.C([wz,$$GHCziReal_zdfEnumRatio1],function(yz){
      $$GHCziIntegerziType_ltInteger.C([yz,xz],function(zz){
       switch(zz.g){
       case 1:
	$$GHCziReal_zdp1Real.C([qz],function(Az){
	 $$GHCziNum_fromInteger.J(Az,vz);
	},[vz]);break;
       case 2:
	$M(qz,function(Bz){
	 var Cz=Bz.v[0];
	 $M(Cz,function(Dz){
	  var Ez=Dz.v[2],Fz=Dz.v[6];
	  var Gz=$t(function(){
	   Fz.J($$GHCziReal_zdfEnumRatio1);
	  },[Fz],"sat");
	  var Hz=$t(function(){
	   Fz.J(vz);
	  },[vz,Fz],"sat");
	  Ez.J(Hz,Gz);
	 },[vz]);
	},[vz]);break;
       }
      },[qz,vz]);
     },[qz,vz,xz]);
    },[wz,qz,vz]);
   },[sz,qz]);break;
  case 2:
   $A($$GHCziErr_divZZeroError);break;
  }
 },[sz,rz,qz]);
},[],"at libraries/base/GHC/Real.lhs:195:5");
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
var $$SystemziCPUTime_getCPUTime1=$f(1,function(a){
 var b=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(144,0),a);
 var c=b[0],d=b[1];
 var e=$hs_unsafeFreezzeByteArrayzh(d,c);
 var f=e[0],g=e[1];
 var l=$hs_byteArrayContentszh(g);
 var $ff=ghc_wrapper_d1rx_getrusage(goog.math.Long.fromBits(0,0),l);
 var h=[f,$ff];
 var i=h[0],j=h[1];
 var k=$f(1,function(m){
  var O=$hs_plusAddrzh(l,goog.math.Long.fromBits(0,0));
  var P=$hs_plusAddrzh(O,goog.math.Long.fromBits(0,0));
  var n=$hs_readInt64OffAddrzh(P,goog.math.Long.fromBits(0,0),m);
  var o=n[0],p=n[1];
  var N=$hs_plusAddrzh(O,goog.math.Long.fromBits(8,0));
  var q=$hs_readInt64OffAddrzh(N,goog.math.Long.fromBits(0,0),o);
  var r=q[0],s=q[1];
  var L=$hs_plusAddrzh(l,goog.math.Long.fromBits(16,0));
  var M=$hs_plusAddrzh(L,goog.math.Long.fromBits(0,0));
  var t=$hs_readInt64OffAddrzh(M,goog.math.Long.fromBits(0,0),r);
  var u=t[0],v=t[1];
  var K=$hs_plusAddrzh(L,goog.math.Long.fromBits(8,0));
  var w=$hs_readInt64OffAddrzh(K,goog.math.Long.fromBits(0,0),u);
  var x=w[0],y=w[1];
  var J=$hs_touchzh(g,x);
  var z=$t(function(){
   $$SystemziCPUTime$e.C([y],function(A){
    $$SystemziCPUTime$c.C([v],function(B){
     $$GHCziIntegerziType_timesInteger.C([B,$$SystemziCPUTime$f],function(C){
      $$SystemziCPUTime$e.C([s],function(D){
       $$SystemziCPUTime$c.C([p],function(E){
	$$GHCziIntegerziType_timesInteger.C([E,$$SystemziCPUTime$f],function(F){
	 $$GHCziIntegerziType_plusInteger.C([F,D],function(G){
	  $$GHCziIntegerziType_plusInteger.C([G,C],function(H){
	   $$GHCziIntegerziType_plusInteger.C([H,A],function(I){
	    $$GHCziIntegerziType_timesInteger.J(I,$$SystemziCPUTime$f);
	   },[]);
	  },[A]);
	 },[C,A]);
	},[D,C,A]);
       },[D,C,A]);
      },[p,C,A]);
     },[p,s,A]);
    },[p,s,A]);
   },[p,s,v]);
  },[p,s,v,y],"sat");
  $r([J,z]);
 },[g,l],"$j1");
 var Q=$hs_narrow32Intzh(j);
 switch(Q.toString()){
 case "-1":
  var $ff=__hscore_get_errno();
  var R=[i,$ff];
  var S=R[0],T=R[1];
  var V=$hs_narrow32Intzh(T);
  var U=$d(1,[V],"sat");
  $$ForeignziCziError_errnoToIOError.C([$$SystemziCPUTime$g,U,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(W){
   $$GHCziIOziException_ioError.C([W,S],function(X){
    var Y=X[0];
    k.J(Y);
   },[g,l,k]);
  },[g,l,k,S]);break;
 default:
  k.J(i);
 }
},[],"in `base:System.CPUTime'");
var $$SystemziCPUTime$a=$F(1,function(p1){
 var $ff=rintDouble(p1);
 var q1=[$$GHCziPrim_realWorldzh,$ff];
 var r1=q1[1];
 $$GHCziIntegerziType_decodeDoubleInteger.C([r1],function(s1){
  var t1=s1[0],u1=s1[1];
  var v1=u1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(v1.g){
  case 1:
   $$GHCziIntegerziType_shiftLInteger.J(t1,u1);break;
  case 2:
   $$GHCziIntegerziType_integerToInt.C([t1],function(x1){
    var y1=u1.negate();
    var w1=$hs_uncheckedIShiftRAzh(x1,y1);
    $$GHCziIntegerziType_smallInteger.J(w1);
   },[u1]);break;
  }
 },[]);
},"$j");
var $$SystemziCPUTime$b=$T(function(){
 $$SystemziCPUTime$a.J(0.0);
},"lvl");
var $$SystemziCPUTime$c=$F(1,function(z1){
 $$GHCziIntegerziType_smallInteger.C([z1],function(A1){
  $$GHCziIntegerziType_timesInteger.C([A1,$$GHCziInt_zdfRealInt1],function(B1){
   $$GHCziReal_zdwreduce.C([B1,$$GHCziInt_zdfRealInt1],function(C1){
    var D1=C1[0],E1=C1[1];
    $$GHCziIntegerziType_eqInteger.C([E1,$$GHCziFloat_zdfFractionalDouble5],function(F1){
     switch(F1.g){
     case 1:
      $$GHCziIntegerziType_eqInteger.C([D1,$$GHCziFloat_zdfFractionalDouble5],function(G1){
       switch(G1.g){
       case 1:
	$$GHCziIntegerziType_ltInteger.C([D1,$$GHCziFloat_zdfFractionalDouble5],function(H1){
	 switch(H1.g){
	 case 1:
	  $$GHCziFloat_zdwfromRatzqzq.C([goog.math.Long.fromBits(4294966275,4294967295),goog.math.Long.fromBits(53,0),D1,E1],function(I1){
	   $$SystemziCPUTime$a.J(I1);
	  },[]);break;
	 case 2:
	  $$GHCziIntegerziType_negateInteger.C([D1],function(J1){
	   $$GHCziFloat_zdwfromRatzqzq.C([goog.math.Long.fromBits(4294966275,4294967295),goog.math.Long.fromBits(53,0),J1,E1],function(L1){
	    var K1= -L1;
	    $$SystemziCPUTime$a.J(K1);
	   },[]);
	  },[E1]);break;
	 }
	},[E1,D1]);break;
       case 2:
	$A($$SystemziCPUTime$b);break;
       }
      },[E1,D1]);break;
     case 2:
      $$GHCziIntegerziType_eqInteger.C([D1,$$GHCziFloat_zdfFractionalDouble5],function(M1){
       switch(M1.g){
       case 1:
	$$GHCziIntegerziType_ltInteger.C([D1,$$GHCziFloat_zdfFractionalDouble5],function(N1){
	 switch(N1.g){
	 case 1:
	  $M($$GHCziFloat_zdfFractionalDouble3,function(O1){
	   var P1=O1.v[0];
	   $$SystemziCPUTime$a.J(P1);
	  },[]);break;
	 case 2:
	  $M($$GHCziFloat_zdfFractionalDouble2,function(Q1){
	   var R1=Q1.v[0];
	   $$SystemziCPUTime$a.J(R1);
	  },[]);break;
	 }
	},[]);break;
       case 2:
	$M($$GHCziFloat_zdfFractionalDouble1,function(S1){
	 var T1=S1.v[0];
	 $$SystemziCPUTime$a.J(T1);
	},[]);break;
       }
      },[D1]);break;
     }
    },[E1,D1]);
   },[]);
  },[]);
 },[]);
},"at libraries/base/System/CPUTime.hsc:77:1");
var $$SystemziCPUTime$d=$T(function(){
 $$SystemziCPUTime$a.J(0.0);
},"lvl1");
var $$SystemziCPUTime$e=$F(1,function(U1){
 $$GHCziIntegerziType_smallInteger.C([U1],function(V1){
  $$GHCziIntegerziType_timesInteger.C([V1,$$GHCziInt_zdfRealInt1],function(W1){
   $$GHCziReal_zdwreduce.C([W1,$$GHCziInt_zdfRealInt1],function(X1){
    var Y1=X1[0],Z1=X1[1];
    $$GHCziIntegerziType_eqInteger.C([Z1,$$GHCziFloat_zdfFractionalDouble5],function(a2){
     switch(a2.g){
     case 1:
      $$GHCziIntegerziType_eqInteger.C([Y1,$$GHCziFloat_zdfFractionalDouble5],function(b2){
       switch(b2.g){
       case 1:
	$$GHCziIntegerziType_ltInteger.C([Y1,$$GHCziFloat_zdfFractionalDouble5],function(c2){
	 switch(c2.g){
	 case 1:
	  $$GHCziFloat_zdwfromRatzqzq.C([goog.math.Long.fromBits(4294966275,4294967295),goog.math.Long.fromBits(53,0),Y1,Z1],function(d2){
	   $$SystemziCPUTime$a.J(d2);
	  },[]);break;
	 case 2:
	  $$GHCziIntegerziType_negateInteger.C([Y1],function(e2){
	   $$GHCziFloat_zdwfromRatzqzq.C([goog.math.Long.fromBits(4294966275,4294967295),goog.math.Long.fromBits(53,0),e2,Z1],function(g2){
	    var f2= -g2;
	    $$SystemziCPUTime$a.J(f2);
	   },[]);
	  },[Z1]);break;
	 }
	},[Z1,Y1]);break;
       case 2:
	$A($$SystemziCPUTime$d);break;
       }
      },[Z1,Y1]);break;
     case 2:
      $$GHCziIntegerziType_eqInteger.C([Y1,$$GHCziFloat_zdfFractionalDouble5],function(h2){
       switch(h2.g){
       case 1:
	$$GHCziIntegerziType_ltInteger.C([Y1,$$GHCziFloat_zdfFractionalDouble5],function(i2){
	 switch(i2.g){
	 case 1:
	  $M($$GHCziFloat_zdfFractionalDouble3,function(j2){
	   var k2=j2.v[0];
	   $$SystemziCPUTime$a.J(k2);
	  },[]);break;
	 case 2:
	  $M($$GHCziFloat_zdfFractionalDouble2,function(l2){
	   var m2=l2.v[0];
	   $$SystemziCPUTime$a.J(m2);
	  },[]);break;
	 }
	},[]);break;
       case 2:
	$M($$GHCziFloat_zdfFractionalDouble1,function(n2){
	 var o2=n2.v[0];
	 $$SystemziCPUTime$a.J(o2);
	},[]);break;
       }
      },[Y1]);break;
     }
    },[Z1,Y1]);
   },[]);
  },[]);
 },[]);
},"at libraries/base/System/CPUTime.hsc:77:1");
var $$SystemziCPUTime$f=$D(1,function(){
 $r([goog.math.Long.fromBits(1000000,0)]);
},"lvl2");
var $$SystemziCPUTime$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("getrusage");
},"lvl3");
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
var $$DataziMap$j=$F(2,function(HW,IW){
 $M(IW,function(JW){
  switch(JW.g){
  case 1:
   $A(HW);break;
  case 2:
   var KW=JW.v[1],LW=JW.v[2],MW=JW.v[3],NW=JW.v[4];
   var OW=$t(function(){
    $$DataziMap$j.J(HW,NW);
   },[HW,NW],"sat");
   var PW=$d(1,[KW,LW],"sat");
   var QW=$d(2,[PW,OW],"sat");
   $$DataziMap$j.J(QW,MW);break;
  }
 },[HW]);
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
var $$DataziSequence_zdfSizzedFingerTreezuzdcsizze=$f(1,function(Zp){
 $M(Zp,function(aq){
  switch(aq.g){
  case 1:
   var bq=aq.v[0];
   $R(1,[bq],"I#");break;
  case 2:
   var cq=aq.v[0];
   $R(1,[cq],"I#");break;
  }
 },[]);
},[],"at libraries/containers/Data/Sequence.hs:162:5");
var $$DataziSequence_zlzbzunode3=$f(3,function(iq,jq,kq){
 $R(2,[goog.math.Long.fromBits(3,0),iq,jq,kq],"Node3");
},[],"at libraries/containers/Data/Sequence.hs:446:1");
var $$DataziSequence_zlzbzuconsTree1=$f(2,function(Ps,Qs){
 $M(Qs,function(Rs){
  switch(Rs.g){
  case 1:
   $R(2,[Ps],"Single");break;
  case 2:
   var Ss=Rs.v[0];
   $M(Ps,function(Ts){
    switch(Ts.g){
    case 1:
     var Us=Ts.v[0];
     $M(Ss,function(Vs){
      switch(Vs.g){
      case 1:
       var Ws=Vs.v[0];
       var Xs=$d(1,[Vs],"sat");
       var Ys=$d(1,[Ts],"sat");
       var Zs=Us.add(Ws);
       $R(3,[Zs,Ys,$$DataziSequence_Empty,Xs],"Deep");break;
      case 2:
       var at=Vs.v[0];
       var bt=$d(1,[Vs],"sat");
       var ct=$d(1,[Ts],"sat");
       var dt=Us.add(at);
       $R(3,[dt,ct,$$DataziSequence_Empty,bt],"Deep");break;
      }
     },[Us,Ts]);break;
    case 2:
     var et=Ts.v[0];
     $M(Ss,function(ft){
      switch(ft.g){
      case 1:
       var gt=ft.v[0];
       var ht=$d(1,[ft],"sat");
       var it=$d(1,[Ts],"sat");
       var jt=et.add(gt);
       $R(3,[jt,it,$$DataziSequence_Empty,ht],"Deep");break;
      case 2:
       var kt=ft.v[0];
       var lt=$d(1,[ft],"sat");
       var mt=$d(1,[Ts],"sat");
       var nt=et.add(kt);
       $R(3,[nt,mt,$$DataziSequence_Empty,lt],"Deep");break;
      }
     },[Ts,et]);break;
    }
   },[Ss]);break;
  case 3:
   var ot=Rs.v[0],pt=Rs.v[1],qt=Rs.v[2],rt=Rs.v[3];
   $M(pt,function(st){
    switch(st.g){
    case 1:
     var tt=st.v[0];
     $M(Ps,function(ut){
      switch(ut.g){
      case 1:
       var vt=ut.v[0];
       var wt=$d(2,[ut,tt],"sat");
       var xt=vt.add(ot);
       $R(3,[xt,wt,qt,rt],"Deep");break;
      case 2:
       var yt=ut.v[0];
       var zt=$d(2,[ut,tt],"sat");
       var At=yt.add(ot);
       $R(3,[At,zt,qt,rt],"Deep");break;
      }
     },[ot,tt,qt,rt]);break;
    case 2:
     var Bt=st.v[0],Ct=st.v[1];
     $M(Ps,function(Dt){
      switch(Dt.g){
      case 1:
       var Et=Dt.v[0];
       var Ft=$d(3,[Dt,Bt,Ct],"sat");
       var Gt=Et.add(ot);
       $R(3,[Gt,Ft,qt,rt],"Deep");break;
      case 2:
       var Ht=Dt.v[0];
       var It=$d(3,[Dt,Bt,Ct],"sat");
       var Jt=Ht.add(ot);
       $R(3,[Jt,It,qt,rt],"Deep");break;
      }
     },[ot,qt,rt,Bt,Ct]);break;
    case 3:
     var Kt=st.v[0],Lt=st.v[1],Mt=st.v[2];
     $M(Ps,function(Nt){
      switch(Nt.g){
      case 1:
       var Ot=Nt.v[0];
       var Pt=$d(4,[Nt,Kt,Lt,Mt],"sat");
       var Qt=Ot.add(ot);
       $R(3,[Qt,Pt,qt,rt],"Deep");break;
      case 2:
       var Rt=Nt.v[0];
       var St=$d(4,[Nt,Kt,Lt,Mt],"sat");
       var Tt=Rt.add(ot);
       $R(3,[Tt,St,qt,rt],"Deep");break;
      }
     },[ot,qt,rt,Kt,Lt,Mt]);break;
    case 4:
     var Ut=st.v[0],Vt=st.v[1],Wt=st.v[2],Xt=st.v[3];
     $M(qt,function(Yt){
      var Zt=$f(1,function(au){
       var bu=$t(function(){
	var cu=$t(function(){
	 $$DataziSequence$S.J(Vt,Wt,Xt);
	},[Vt,Wt,Xt],"sat");
	$$DataziSequence_zlzbzuconsTree1.J(cu,Yt);
       },[Vt,Wt,Xt,Yt],"sat");
       var du=$d(2,[Ps,Ut],"sat");
       var eu=au.add(ot);
       $R(3,[eu,du,bu,rt],"Deep");
      },[Ps,ot,rt,Ut,Vt,Wt,Xt,Yt],"$j");
      $M(Ps,function(fu){
       switch(fu.g){
       case 1:
	var gu=fu.v[0];
	Zt.J(gu);break;
       case 2:
	var hu=fu.v[0];
	Zt.J(hu);break;
       }
      },[Ps,ot,rt,Ut,Vt,Wt,Xt,Yt,Zt]);
     },[Ps,ot,rt,Ut,Vt,Wt,Xt]);break;
    }
   },[Ps,ot,qt,rt]);break;
  }
 },[Ps]);
},[],"at libraries/containers/Data/Sequence.hs:592:1");
var $$DataziSequence_zlzbzuconsTree=$f(2,function(iu,ju){
 $M(ju,function(ku){
  switch(ku.g){
  case 1:
   $R(2,[iu],"Single");break;
  case 2:
   var lu=ku.v[0];
   var mu=$d(1,[lu],"sat");
   var nu=$d(1,[iu],"sat");
   $R(3,[goog.math.Long.fromBits(2,0),nu,$$DataziSequence_Empty,mu],"Deep");break;
  case 3:
   var ou=ku.v[0],pu=ku.v[1],qu=ku.v[2],ru=ku.v[3];
   $M(pu,function(su){
    switch(su.g){
    case 1:
     var tu=su.v[0];
     var uu=$d(2,[iu,tu],"sat");
     var vu=goog.math.Long.fromBits(1,0).add(ou);
     $R(3,[vu,uu,qu,ru],"Deep");break;
    case 2:
     var wu=su.v[0],xu=su.v[1];
     var yu=$d(3,[iu,wu,xu],"sat");
     var zu=goog.math.Long.fromBits(1,0).add(ou);
     $R(3,[zu,yu,qu,ru],"Deep");break;
    case 3:
     var Au=su.v[0],Bu=su.v[1],Cu=su.v[2];
     var Du=$d(4,[iu,Au,Bu,Cu],"sat");
     var Eu=goog.math.Long.fromBits(1,0).add(ou);
     $R(3,[Eu,Du,qu,ru],"Deep");break;
    case 4:
     var Fu=su.v[0],Gu=su.v[1],Hu=su.v[2],Iu=su.v[3];
     $M(qu,function(Ju){
      var Ku=$t(function(){
       var Lu=$t(function(){
	$$DataziSequence_zlzbzunode3.J(Gu,Hu,Iu);
       },[Gu,Hu,Iu],"sat");
       $$DataziSequence_zlzbzuconsTree1.J(Lu,Ju);
      },[Gu,Hu,Iu,Ju],"sat");
      var Mu=$d(2,[iu,Fu],"sat");
      var Nu=goog.math.Long.fromBits(1,0).add(ou);
      $R(3,[Nu,Mu,Ku,ru],"Deep");
     },[iu,ou,ru,Fu,Gu,Hu,Iu]);break;
    }
   },[iu,ou,qu,ru]);break;
  }
 },[iu]);
},[],"at libraries/containers/Data/Sequence.hs:592:1");
var $$DataziSequence_filterzusnocTree1=$f(2,function(Zu,av){
 $M(Zu,function(bv){
  switch(bv.g){
  case 1:
   $R(2,[av],"Single");break;
  case 2:
   var cv=bv.v[0];
   $M(cv,function(dv){
    switch(dv.g){
    case 1:
     var ev=dv.v[0];
     $M(av,function(fv){
      switch(fv.g){
      case 1:
       var gv=fv.v[0];
       var hv=$d(1,[fv],"sat");
       var iv=$d(1,[dv],"sat");
       var jv=ev.add(gv);
       $R(3,[jv,iv,$$DataziSequence_Empty,hv],"Deep");break;
      case 2:
       var kv=fv.v[0];
       var lv=$d(1,[fv],"sat");
       var mv=$d(1,[dv],"sat");
       var nv=ev.add(kv);
       $R(3,[nv,mv,$$DataziSequence_Empty,lv],"Deep");break;
      }
     },[ev,dv]);break;
    case 2:
     var ov=dv.v[0];
     $M(av,function(pv){
      switch(pv.g){
      case 1:
       var qv=pv.v[0];
       var rv=$d(1,[pv],"sat");
       var sv=$d(1,[dv],"sat");
       var tv=ov.add(qv);
       $R(3,[tv,sv,$$DataziSequence_Empty,rv],"Deep");break;
      case 2:
       var uv=pv.v[0];
       var vv=$d(1,[pv],"sat");
       var wv=$d(1,[dv],"sat");
       var xv=ov.add(uv);
       $R(3,[xv,wv,$$DataziSequence_Empty,vv],"Deep");break;
      }
     },[dv,ov]);break;
    }
   },[av]);break;
  case 3:
   var yv=bv.v[0],zv=bv.v[1],Av=bv.v[2],Bv=bv.v[3];
   $M(Bv,function(Cv){
    switch(Cv.g){
    case 1:
     var Dv=Cv.v[0];
     $M(av,function(Ev){
      switch(Ev.g){
      case 1:
       var Fv=Ev.v[0];
       var Gv=$d(2,[Dv,Ev],"sat");
       var Hv=yv.add(Fv);
       $R(3,[Hv,zv,Av,Gv],"Deep");break;
      case 2:
       var Iv=Ev.v[0];
       var Jv=$d(2,[Dv,Ev],"sat");
       var Kv=yv.add(Iv);
       $R(3,[Kv,zv,Av,Jv],"Deep");break;
      }
     },[yv,zv,Av,Dv]);break;
    case 2:
     var Lv=Cv.v[0],Mv=Cv.v[1];
     $M(av,function(Nv){
      switch(Nv.g){
      case 1:
       var Ov=Nv.v[0];
       var Pv=$d(3,[Lv,Mv,Nv],"sat");
       var Qv=yv.add(Ov);
       $R(3,[Qv,zv,Av,Pv],"Deep");break;
      case 2:
       var Rv=Nv.v[0];
       var Sv=$d(3,[Lv,Mv,Nv],"sat");
       var Tv=yv.add(Rv);
       $R(3,[Tv,zv,Av,Sv],"Deep");break;
      }
     },[yv,zv,Av,Lv,Mv]);break;
    case 3:
     var Uv=Cv.v[0],Vv=Cv.v[1],Wv=Cv.v[2];
     $M(av,function(Xv){
      switch(Xv.g){
      case 1:
       var Yv=Xv.v[0];
       var Zv=$d(4,[Uv,Vv,Wv,Xv],"sat");
       var aw=yv.add(Yv);
       $R(3,[aw,zv,Av,Zv],"Deep");break;
      case 2:
       var bw=Xv.v[0];
       var cw=$d(4,[Uv,Vv,Wv,Xv],"sat");
       var dw=yv.add(bw);
       $R(3,[dw,zv,Av,cw],"Deep");break;
      }
     },[yv,zv,Av,Uv,Vv,Wv]);break;
    case 4:
     var ew=Cv.v[0],fw=Cv.v[1],gw=Cv.v[2],hw=Cv.v[3];
     $M(Av,function(iw){
      var jw=$f(1,function(kw){
       var lw=$d(2,[hw,av],"sat");
       var mw=$t(function(){
	var nw=$t(function(){
	 $$DataziSequence$S.J(ew,fw,gw);
	},[ew,fw,gw],"sat");
	$$DataziSequence_filterzusnocTree1.J(iw,nw);
       },[iw,ew,fw,gw],"sat");
       var ow=yv.add(kw);
       $R(3,[ow,zv,mw,lw],"Deep");
      },[av,yv,zv,iw,ew,fw,gw,hw],"$j");
      $M(av,function(pw){
       switch(pw.g){
       case 1:
	var qw=pw.v[0];
	jw.J(qw);break;
       case 2:
	var rw=pw.v[0];
	jw.J(rw);break;
       }
      },[av,yv,zv,iw,ew,fw,gw,hw,jw]);
     },[av,yv,zv,ew,fw,gw,hw]);break;
    }
   },[av,yv,zv,Av]);break;
  }
 },[av]);
},[],"at libraries/containers/Data/Sequence.hs:611:1");
var $$DataziSequence_filterzusnocTree=$f(2,function(sw,tw){
 $M(sw,function(uw){
  switch(uw.g){
  case 1:
   $R(2,[tw],"Single");break;
  case 2:
   var vw=uw.v[0];
   var ww=$d(1,[tw],"sat");
   var xw=$d(1,[vw],"sat");
   $R(3,[goog.math.Long.fromBits(2,0),xw,$$DataziSequence_Empty,ww],"Deep");break;
  case 3:
   var yw=uw.v[0],zw=uw.v[1],Aw=uw.v[2],Bw=uw.v[3];
   $M(Bw,function(Cw){
    switch(Cw.g){
    case 1:
     var Dw=Cw.v[0];
     var Ew=$d(2,[Dw,tw],"sat");
     var Fw=yw.add(goog.math.Long.fromBits(1,0));
     $R(3,[Fw,zw,Aw,Ew],"Deep");break;
    case 2:
     var Gw=Cw.v[0],Hw=Cw.v[1];
     var Iw=$d(3,[Gw,Hw,tw],"sat");
     var Jw=yw.add(goog.math.Long.fromBits(1,0));
     $R(3,[Jw,zw,Aw,Iw],"Deep");break;
    case 3:
     var Kw=Cw.v[0],Lw=Cw.v[1],Mw=Cw.v[2];
     var Nw=$d(4,[Kw,Lw,Mw,tw],"sat");
     var Ow=yw.add(goog.math.Long.fromBits(1,0));
     $R(3,[Ow,zw,Aw,Nw],"Deep");break;
    case 4:
     var Pw=Cw.v[0],Qw=Cw.v[1],Rw=Cw.v[2],Sw=Cw.v[3];
     $M(Aw,function(Tw){
      var Uw=$d(2,[Sw,tw],"sat");
      var Vw=$t(function(){
       var Ww=$t(function(){
	$$DataziSequence_zlzbzunode3.J(Pw,Qw,Rw);
       },[Pw,Qw,Rw],"sat");
       $$DataziSequence_filterzusnocTree1.J(Tw,Ww);
      },[Tw,Pw,Qw,Rw],"sat");
      var Xw=yw.add(goog.math.Long.fromBits(1,0));
      $R(3,[Xw,zw,Vw,Uw],"Deep");
     },[tw,yw,zw,Pw,Qw,Rw,Sw]);break;
    }
   },[tw,yw,zw,Aw]);break;
  }
 },[tw]);
},[],"at libraries/containers/Data/Sequence.hs:611:1");
var $$DataziSequence_zdwindex=$f(2,function(XG,YG){
 var ZG=goog.math.Long.fromBits(0,0).lessThanOrEqual(YG)?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(ZG.g){
 case 1:
  $A($$DataziSequence$B1);break;
 case 2:
  var aH=$t(function(){
   $M(XG,function(bH){
    switch(bH.g){
    case 1:
     $A($$DataziSequence$C1);break;
    case 2:
     var cH=bH.v[0];
     $A(cH);break;
    case 3:
     var dH=bH.v[1],eH=bH.v[2],fH=bH.v[3];
     var gH=$f(1,function(hH){
      var iH=YG.lessThan(hH)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(iH.g){
      case 1:
       var jH=$f(1,function(kH){
	var lH=YG.lessThan(kH)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(lH.g){
	case 1:
	 $M(fH,function(mH){
	  switch(mH.g){
	  case 1:
	   var nH=mH.v[0];
	   $A(nH);break;
	  case 2:
	   var oH=mH.v[0],pH=mH.v[1];
	   var rH=YG.subtract(kH);
	   var qH=rH.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(qH.g){
	   case 1:
	    $A(pH);break;
	   case 2:
	    $A(oH);break;
	   }break;
	  case 3:
	   var sH=mH.v[0],tH=mH.v[1],uH=mH.v[2];
	   var xH=YG.subtract(kH);
	   var vH=xH.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(vH.g){
	   case 1:
	    var wH=xH.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(wH.g){
	    case 1:
	     $A(uH);break;
	    case 2:
	     $A(tH);break;
	    }break;
	   case 2:
	    $A(sH);break;
	   }break;
	  case 4:
	   var yH=mH.v[0],zH=mH.v[1],AH=mH.v[2],BH=mH.v[3];
	   var FH=YG.subtract(kH);
	   var CH=FH.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(CH.g){
	   case 1:
	    var DH=FH.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(DH.g){
	    case 1:
	     var EH=FH.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(EH.g){
	     case 1:
	      $A(BH);break;
	     case 2:
	      $A(AH);break;
	     }break;
	    case 2:
	     $A(zH);break;
	    }break;
	   case 2:
	    $A(yH);break;
	   }break;
	  }
	 },[YG,kH]);break;
	case 2:
	 var SH=YG.subtract(hH);
	 $$DataziSequence$z1.C([SH,eH],function(GH){
	  var HH=GH[0],IH=GH[1];
	  $M(IH,function(JH){
	   switch(JH.g){
	   case 1:
	    var KH=JH.v[1],LH=JH.v[2];
	    var MH=HH.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(MH.g){
	    case 1:
	     $A(LH);break;
	    case 2:
	     $A(KH);break;
	    }break;
	   case 2:
	    var NH=JH.v[1],OH=JH.v[2],PH=JH.v[3];
	    var QH=HH.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(QH.g){
	    case 1:
	     var RH=HH.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(RH.g){
	     case 1:
	      $A(PH);break;
	     case 2:
	      $A(OH);break;
	     }break;
	    case 2:
	     $A(NH);break;
	    }break;
	   }
	  },[HH]);
	 },[]);break;
	}
       },[YG,hH,fH,eH],"$j1");
       $M(eH,function(TH){
	switch(TH.g){
	case 1:
	 jH.J(hH);break;
	case 2:
	 var UH=TH.v[0];
	 $M(UH,function(VH){
	  switch(VH.g){
	  case 1:
	   var WH=VH.v[0];
	   var XH=hH.add(WH);
	   jH.J(XH);break;
	  case 2:
	   var YH=VH.v[0];
	   var ZH=hH.add(YH);
	   jH.J(ZH);break;
	  }
	 },[YG,hH,fH,eH,jH]);break;
	case 3:
	 var aI=TH.v[0];
	 var bI=hH.add(aI);
	 jH.J(bI);break;
	}
       },[YG,hH,fH,eH,jH]);break;
      case 2:
       $M(dH,function(cI){
	switch(cI.g){
	case 1:
	 var dI=cI.v[0];
	 $A(dI);break;
	case 2:
	 var eI=cI.v[0],fI=cI.v[1];
	 var gI=YG.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(gI.g){
	 case 1:
	  $A(fI);break;
	 case 2:
	  $A(eI);break;
	 }break;
	case 3:
	 var hI=cI.v[0],iI=cI.v[1],jI=cI.v[2];
	 var kI=YG.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(kI.g){
	 case 1:
	  var lI=YG.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(lI.g){
	  case 1:
	   $A(jI);break;
	  case 2:
	   $A(iI);break;
	  }break;
	 case 2:
	  $A(hI);break;
	 }break;
	case 4:
	 var mI=cI.v[0],nI=cI.v[1],oI=cI.v[2],pI=cI.v[3];
	 var qI=YG.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(qI.g){
	 case 1:
	  var rI=YG.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(rI.g){
	  case 1:
	   var sI=YG.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(sI.g){
	   case 1:
	    $A(pI);break;
	   case 2:
	    $A(oI);break;
	   }break;
	  case 2:
	   $A(nI);break;
	  }break;
	 case 2:
	  $A(mI);break;
	 }break;
	}
       },[YG]);break;
      }
     },[YG,fH,eH,dH],"$j");
     $M(dH,function(tI){
      switch(tI.g){
      case 1:
       gH.J(goog.math.Long.fromBits(1,0));break;
      case 2:
       gH.J(goog.math.Long.fromBits(2,0));break;
      case 3:
       gH.J(goog.math.Long.fromBits(3,0));break;
      case 4:
       gH.J(goog.math.Long.fromBits(4,0));break;
      }
     },[YG,fH,eH,dH,gH]);break;
    }
   },[YG]);
  },[YG,XG],"$w$j");
  $M(XG,function(uI){
   switch(uI.g){
   case 1:
    var vI=YG.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(vI.g){
    case 1:
     $A($$DataziSequence$B1);break;
    case 2:
     $A(aH);break;
    }break;
   case 2:
    var wI=YG.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(wI.g){
    case 1:
     $A($$DataziSequence$B1);break;
    case 2:
     $A(aH);break;
    }break;
   case 3:
    var xI=uI.v[0];
    var yI=YG.lessThan(xI)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(yI.g){
    case 1:
     $A($$DataziSequence$B1);break;
    case 2:
     $A(aH);break;
    }break;
   }
  },[YG,XG,aH]);break;
 }
},[],"at libraries/containers/Data/Sequence.hs:1043:1");
var $$DataziSequence_zdwsplitAt=$f(2,function(DI,EI){
 var FI=$t(function(){
  $M(EI,function(GI){
   switch(GI.g){
   case 1:
    $M(DI,function(JM){
     $A($$DataziSequence$J1);
    },[]);break;
   default:
    var HI=$f(1,function(II){
     $M(DI,function(JI){
      var KI=JI.v[0];
      var LI=II.greaterThan(KI)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(LI.g){
      case 1:
       $r([GI,$$DataziSequence_Empty]);break;
      case 2:
       var MI=$t(function(){
	$M(GI,function(NI){
	 switch(NI.g){
	 case 2:
	  var OI=NI.v[0];
	  $R(1,[$$DataziSequence_Empty,OI,$$DataziSequence_Empty],"Split");break;
	 case 3:
	  var PI=NI.v[1],QI=NI.v[2],RI=NI.v[3];
	  var SI=$f(1,function(TI){
	   var UI=KI.lessThan(TI)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(UI.g){
	   case 1:
	    var VI=$f(1,function(WI){
	     var XI=KI.lessThan(WI)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(XI.g){
	     case 1:
	      $M(RI,function(YI){
	       switch(YI.g){
	       case 1:
		var ZI=YI.v[0];
		var aJ=$t(function(){
		 $$DataziSequence$f1.J(PI,QI,$$DataziMaybe_Nothing);
		},[PI,QI],"sat");
		$r([aJ,ZI,$$DataziSequence_Empty]);break;
	       case 2:
		var bJ=YI.v[0],cJ=YI.v[1];
		var jJ=KI.subtract(WI);
		var dJ=jJ.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(dJ.g){
		case 1:
		 var eJ=$t(function(){
		  var fJ=$d(1,[bJ],"sat");
		  var gJ=$d(2,[fJ],"sat");
		  $$DataziSequence$f1.J(PI,QI,gJ);
		 },[PI,QI,bJ],"sat");
		 $r([eJ,cJ,$$DataziSequence_Empty]);break;
		case 2:
		 var hJ=$d(2,[cJ],"sat");
		 var iJ=$t(function(){
		  $$DataziSequence$f1.J(PI,QI,$$DataziMaybe_Nothing);
		 },[PI,QI],"sat");
		 $r([iJ,bJ,hJ]);break;
		}break;
	       case 3:
		var kJ=YI.v[0],lJ=YI.v[1],mJ=YI.v[2];
		var wJ=KI.subtract(WI);
		var nJ=wJ.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(nJ.g){
		case 1:
		 var oJ=wJ.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(oJ.g){
		 case 1:
		  var pJ=$t(function(){
		   var qJ=$d(2,[kJ,lJ],"sat");
		   var rJ=$d(2,[qJ],"sat");
		   $$DataziSequence$f1.J(PI,QI,rJ);
		  },[PI,QI,kJ,lJ],"sat");
		  $r([pJ,mJ,$$DataziSequence_Empty]);break;
		 case 2:
		  var sJ=$d(2,[mJ],"sat");
		  var tJ=$t(function(){
		   var uJ=$d(1,[kJ],"sat");
		   var vJ=$d(2,[uJ],"sat");
		   $$DataziSequence$f1.J(PI,QI,vJ);
		  },[PI,QI,kJ],"sat");
		  $r([tJ,lJ,sJ]);break;
		 }break;
		case 2:
		 var xJ=$d(1,[mJ],"sat");
		 var yJ=$d(1,[lJ],"sat");
		 var zJ=$d(3,[goog.math.Long.fromBits(2,0),yJ,$$DataziSequence_Empty,xJ],"sat");
		 var AJ=$t(function(){
		  $$DataziSequence$f1.J(PI,QI,$$DataziMaybe_Nothing);
		 },[PI,QI],"sat");
		 $r([AJ,kJ,zJ]);break;
		}break;
	       case 4:
		var BJ=YI.v[0],CJ=YI.v[1],DJ=YI.v[2],EJ=YI.v[3];
		var PJ=KI.subtract(WI);
		var FJ=PJ.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(FJ.g){
		case 1:
		 var GJ=PJ.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(GJ.g){
		 case 1:
		  var HJ=PJ.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(HJ.g){
		  case 1:
		   var IJ=$t(function(){
		    var JJ=$d(3,[BJ,CJ,DJ],"sat");
		    var KJ=$d(2,[JJ],"sat");
		    $$DataziSequence$f1.J(PI,QI,KJ);
		   },[PI,QI,BJ,CJ,DJ],"sat");
		   $r([IJ,EJ,$$DataziSequence_Empty]);break;
		  case 2:
		   var LJ=$d(2,[EJ],"sat");
		   var MJ=$t(function(){
		    var NJ=$d(2,[BJ,CJ],"sat");
		    var OJ=$d(2,[NJ],"sat");
		    $$DataziSequence$f1.J(PI,QI,OJ);
		   },[PI,QI,BJ,CJ],"sat");
		   $r([MJ,DJ,LJ]);break;
		  }break;
		 case 2:
		  var QJ=$d(1,[EJ],"sat");
		  var RJ=$d(1,[DJ],"sat");
		  var SJ=$d(3,[goog.math.Long.fromBits(2,0),RJ,$$DataziSequence_Empty,QJ],"sat");
		  var TJ=$t(function(){
		   var UJ=$d(1,[BJ],"sat");
		   var VJ=$d(2,[UJ],"sat");
		   $$DataziSequence$f1.J(PI,QI,VJ);
		  },[PI,QI,BJ],"sat");
		  $r([TJ,CJ,SJ]);break;
		 }break;
		case 2:
		 var WJ=$d(1,[EJ],"sat");
		 var XJ=$d(2,[CJ,DJ],"sat");
		 var YJ=$d(3,[goog.math.Long.fromBits(3,0),XJ,$$DataziSequence_Empty,WJ],"sat");
		 var ZJ=$t(function(){
		  $$DataziSequence$f1.J(PI,QI,$$DataziMaybe_Nothing);
		 },[PI,QI],"sat");
		 $r([ZJ,BJ,YJ]);break;
		}break;
	       }
	      },[KI,WI,PI,QI]);break;
	     case 2:
	      var MK=KI.subtract(TI);
	      $$DataziSequence$I1.C([MK,QI],function(aK){
	       var bK=aK[0],cK=aK[1],dK=aK[2];
	       var eK=$f(1,function(fK){
		$M(cK,function(gK){
		 switch(gK.g){
		 case 1:
		  var hK=gK.v[1],iK=gK.v[2];
		  var jK=fK.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(jK.g){
		  case 1:
		   var kK=$t(function(){
		    $$DataziSequence$c1.J($$DataziMaybe_Nothing,dK,RI);
		   },[RI,dK],"sat");
		   var lK=$t(function(){
		    var mK=$d(1,[hK],"sat");
		    var nK=$d(2,[mK],"sat");
		    $$DataziSequence$f1.J(PI,bK,nK);
		   },[PI,bK,hK],"sat");
		   $r([lK,iK,kK]);break;
		  case 2:
		   var oK=$t(function(){
		    var pK=$d(1,[iK],"sat");
		    var qK=$d(2,[pK],"sat");
		    $$DataziSequence$c1.J(qK,dK,RI);
		   },[RI,iK,dK],"sat");
		   var rK=$t(function(){
		    $$DataziSequence$f1.J(PI,bK,$$DataziMaybe_Nothing);
		   },[PI,bK],"sat");
		   $r([rK,hK,oK]);break;
		  }break;
		 case 2:
		  var sK=gK.v[1],tK=gK.v[2],uK=gK.v[3];
		  var vK=fK.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(vK.g){
		  case 1:
		   var wK=fK.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(wK.g){
		   case 1:
		    var xK=$t(function(){
		     $$DataziSequence$c1.J($$DataziMaybe_Nothing,dK,RI);
		    },[RI,dK],"sat");
		    var yK=$t(function(){
		     var zK=$d(2,[sK,tK],"sat");
		     var AK=$d(2,[zK],"sat");
		     $$DataziSequence$f1.J(PI,bK,AK);
		    },[PI,bK,sK,tK],"sat");
		    $r([yK,uK,xK]);break;
		   case 2:
		    var BK=$t(function(){
		     var CK=$d(1,[uK],"sat");
		     var DK=$d(2,[CK],"sat");
		     $$DataziSequence$c1.J(DK,dK,RI);
		    },[RI,dK,uK],"sat");
		    var EK=$t(function(){
		     var FK=$d(1,[sK],"sat");
		     var GK=$d(2,[FK],"sat");
		     $$DataziSequence$f1.J(PI,bK,GK);
		    },[PI,bK,sK],"sat");
		    $r([EK,tK,BK]);break;
		   }break;
		  case 2:
		   var HK=$t(function(){
		    var IK=$d(2,[tK,uK],"sat");
		    var JK=$d(2,[IK],"sat");
		    $$DataziSequence$c1.J(JK,dK,RI);
		   },[RI,dK,tK,uK],"sat");
		   var KK=$t(function(){
		    $$DataziSequence$f1.J(PI,bK,$$DataziMaybe_Nothing);
		   },[PI,bK],"sat");
		   $r([KK,sK,HK]);break;
		  }break;
		 }
		},[RI,PI,fK,bK,dK]);
	       },[RI,PI,cK,bK,dK],"$j");
	       $M(bK,function(LK){
		switch(LK.g){
		case 1:
		 eK.J(MK);break;
		case 2:
		 var NK=LK.v[0];
		 $M(NK,function(OK){
		  switch(OK.g){
		  case 1:
		   var PK=OK.v[0];
		   var QK=MK.subtract(PK);
		   eK.J(QK);break;
		  case 2:
		   var RK=OK.v[0];
		   var SK=MK.subtract(RK);
		   eK.J(SK);break;
		  }
		 },[RI,PI,MK,cK,bK,dK,eK]);break;
		case 3:
		 var TK=LK.v[0];
		 var UK=MK.subtract(TK);
		 eK.J(UK);break;
		}
	       },[RI,PI,MK,cK,bK,dK,eK]);
	      },[RI,PI,MK]);break;
	     }
	    },[KI,TI,RI,PI,QI],"$w$j2");
	    $M(QI,function(VK){
	     switch(VK.g){
	     case 1:
	      VI.J(TI);break;
	     case 2:
	      var WK=VK.v[0];
	      $M(WK,function(XK){
	       switch(XK.g){
	       case 1:
		var YK=XK.v[0];
		var ZK=TI.add(YK);
		VI.J(ZK);break;
	       case 2:
		var aL=XK.v[0];
		var bL=TI.add(aL);
		VI.J(bL);break;
	       }
	      },[KI,TI,RI,PI,QI,VI]);break;
	     case 3:
	      var cL=VK.v[0];
	      var dL=TI.add(cL);
	      VI.J(dL);break;
	     }
	    },[KI,TI,RI,PI,QI,VI]);break;
	   case 2:
	    $M(PI,function(eL){
	     switch(eL.g){
	     case 1:
	      var fL=eL.v[0];
	      var gL=$t(function(){
	       $$DataziSequence$c1.J($$DataziMaybe_Nothing,QI,RI);
	      },[RI,QI],"sat");
	      $r([$$DataziSequence_Empty,fL,gL]);break;
	     case 2:
	      var hL=eL.v[0],iL=eL.v[1];
	      var jL=KI.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(jL.g){
	      case 1:
	       var kL=$t(function(){
		$$DataziSequence$c1.J($$DataziMaybe_Nothing,QI,RI);
	       },[RI,QI],"sat");
	       var lL=$d(2,[hL],"sat");
	       $r([lL,iL,kL]);break;
	      case 2:
	       var mL=$t(function(){
		var nL=$d(1,[iL],"sat");
		var oL=$d(2,[nL],"sat");
		$$DataziSequence$c1.J(oL,QI,RI);
	       },[RI,QI,iL],"sat");
	       $r([$$DataziSequence_Empty,hL,mL]);break;
	      }break;
	     case 3:
	      var pL=eL.v[0],qL=eL.v[1],rL=eL.v[2];
	      var sL=KI.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(sL.g){
	      case 1:
	       var tL=KI.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(tL.g){
	       case 1:
		var uL=$t(function(){
		 $$DataziSequence$c1.J($$DataziMaybe_Nothing,QI,RI);
		},[RI,QI],"sat");
		var vL=$d(1,[qL],"sat");
		var wL=$d(1,[pL],"sat");
		var xL=$d(3,[goog.math.Long.fromBits(2,0),wL,$$DataziSequence_Empty,vL],"sat");
		$r([xL,rL,uL]);break;
	       case 2:
		var yL=$t(function(){
		 var zL=$d(1,[rL],"sat");
		 var AL=$d(2,[zL],"sat");
		 $$DataziSequence$c1.J(AL,QI,RI);
		},[RI,QI,rL],"sat");
		var BL=$d(2,[pL],"sat");
		$r([BL,qL,yL]);break;
	       }break;
	      case 2:
	       var CL=$t(function(){
		var DL=$d(2,[qL,rL],"sat");
		var EL=$d(2,[DL],"sat");
		$$DataziSequence$c1.J(EL,QI,RI);
	       },[RI,QI,qL,rL],"sat");
	       $r([$$DataziSequence_Empty,pL,CL]);break;
	      }break;
	     case 4:
	      var FL=eL.v[0],GL=eL.v[1],HL=eL.v[2],IL=eL.v[3];
	      var JL=KI.lessThan(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(JL.g){
	      case 1:
	       var KL=KI.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(KL.g){
	       case 1:
		var LL=KI.lessThan(goog.math.Long.fromBits(3,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(LL.g){
		case 1:
		 var ML=$t(function(){
		  $$DataziSequence$c1.J($$DataziMaybe_Nothing,QI,RI);
		 },[RI,QI],"sat");
		 var NL=$d(1,[HL],"sat");
		 var OL=$d(2,[FL,GL],"sat");
		 var PL=$d(3,[goog.math.Long.fromBits(3,0),OL,$$DataziSequence_Empty,NL],"sat");
		 $r([PL,IL,ML]);break;
		case 2:
		 var QL=$t(function(){
		  var RL=$d(1,[IL],"sat");
		  var SL=$d(2,[RL],"sat");
		  $$DataziSequence$c1.J(SL,QI,RI);
		 },[RI,QI,IL],"sat");
		 var TL=$d(1,[GL],"sat");
		 var UL=$d(1,[FL],"sat");
		 var VL=$d(3,[goog.math.Long.fromBits(2,0),UL,$$DataziSequence_Empty,TL],"sat");
		 $r([VL,HL,QL]);break;
		}break;
	       case 2:
		var WL=$t(function(){
		 var XL=$d(2,[HL,IL],"sat");
		 var YL=$d(2,[XL],"sat");
		 $$DataziSequence$c1.J(YL,QI,RI);
		},[RI,QI,HL,IL],"sat");
		var ZL=$d(2,[FL],"sat");
		$r([ZL,GL,WL]);break;
	       }break;
	      case 2:
	       var aM=$t(function(){
		var bM=$d(3,[GL,HL,IL],"sat");
		var cM=$d(2,[bM],"sat");
		$$DataziSequence$c1.J(cM,QI,RI);
	       },[RI,QI,GL,HL,IL],"sat");
	       $r([$$DataziSequence_Empty,FL,aM]);break;
	      }break;
	     }
	    },[KI,RI,QI]);break;
	   }
	  },[KI,RI,PI,QI],"$w$j1");
	  $M(PI,function(dM){
	   switch(dM.g){
	   case 1:
	    SI.C([goog.math.Long.fromBits(1,0)],function(eM){
	     var fM=eM[0],gM=eM[1],hM=eM[2];
	     $R(1,[fM,gM,hM],"Split");
	    },[]);break;
	   case 2:
	    SI.C([goog.math.Long.fromBits(2,0)],function(iM){
	     var jM=iM[0],kM=iM[1],lM=iM[2];
	     $R(1,[jM,kM,lM],"Split");
	    },[]);break;
	   case 3:
	    SI.C([goog.math.Long.fromBits(3,0)],function(mM){
	     var nM=mM[0],oM=mM[1],pM=mM[2];
	     $R(1,[nM,oM,pM],"Split");
	    },[]);break;
	   case 4:
	    SI.C([goog.math.Long.fromBits(4,0)],function(qM){
	     var rM=qM[0],sM=qM[1],tM=qM[2];
	     $R(1,[rM,sM,tM],"Split");
	    },[]);break;
	   }
	  },[SI]);break;
	 }
	},[KI]);
       },[KI,GI],"ds1");
       var uM=$t(function(){
	$M(MI,function(vM){
	 var wM=vM.v[1],xM=vM.v[2];
	 $$DataziSequence_zlzbzuconsTree.J(wM,xM);
	},[]);
       },[MI],"sat");
       var yM=$t(function(){
	$M(MI,function(zM){
	 var AM=zM.v[0];
	 $A(AM);
	},[]);
       },[MI],"sat");
       $r([yM,uM]);break;
      }
     },[II,GI]);
    },[DI,GI],"$w$j");
    $M(GI,function(BM){
     switch(BM.g){
     case 2:
      HI.C([goog.math.Long.fromBits(1,0)],function(CM){
       var DM=CM[0],EM=CM[1];
       $R(1,[DM,EM],"(,)");
      },[]);break;
     case 3:
      var FM=BM.v[0];
      HI.C([FM],function(GM){
       var HM=GM[0],IM=GM[1];
       $R(1,[HM,IM],"(,)");
      },[]);break;
     }
    },[HI]);
   }
  },[DI]);
 },[EI,DI],"ds");
 var KM=$t(function(){
  $M(FI,function(LM){
   var MM=LM.v[1];
   $A(MM);
  },[]);
 },[FI],"sat");
 var NM=$t(function(){
  $M(FI,function(OM){
   var PM=OM.v[0];
   $A(PM);
  },[]);
 },[FI],"sat");
 $r([NM,KM]);
},[],"at libraries/containers/Data/Sequence.hs:1202:1");
var $$DataziSequence_Empty=$D(1,function(){
 $r([]);
},"at libraries/containers/Data/Sequence.hs:262:7");
var $$DataziSequence$w=$F(2,function(X1x,Y1x){
 $M(Y1x,function(Z1x){
  switch(Z1x.g){
  case 1:
   var a1y=Z1x.v[0];
   $R(2,[a1y],"Single");break;
  case 2:
   var b1y=Z1x.v[0],c1y=Z1x.v[1];
   var d1y=$d(1,[c1y],"sat");
   var e1y=$d(1,[b1y],"sat");
   $R(3,[X1x,e1y,$$DataziSequence_Empty,d1y],"Deep");break;
  case 3:
   var f1y=Z1x.v[0],g1y=Z1x.v[1],h1y=Z1x.v[2];
   var i1y=$d(1,[h1y],"sat");
   var j1y=$d(2,[f1y,g1y],"sat");
   $R(3,[X1x,j1y,$$DataziSequence_Empty,i1y],"Deep");break;
  case 4:
   var k1y=Z1x.v[0],l1y=Z1x.v[1],m1y=Z1x.v[2],n1y=Z1x.v[3];
   var o1y=$d(2,[m1y,n1y],"sat");
   var p1y=$d(2,[k1y,l1y],"sat");
   $R(3,[X1x,p1y,$$DataziSequence_Empty,o1y],"Deep");break;
  }
 },[X1x]);
},"at libraries/containers/Data/Sequence.hs:401:1");
var $$DataziSequence$R=$F(2,function(i1H,j1H){
 $M(j1H,function(k1H){
  switch(k1H.g){
  case 1:
   var l1H=k1H.v[0];
   $r([$$DataziMaybe_Nothing,l1H,$$DataziMaybe_Nothing]);break;
  case 2:
   var m1H=k1H.v[0],n1H=k1H.v[1];
   $M(m1H,function(o1H){
    switch(o1H.g){
    case 1:
     var p1H=o1H.v[0];
     var q1H=i1H.lessThan(p1H)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(q1H.g){
     case 1:
      var r1H=$d(1,[o1H],"sat");
      var s1H=$d(2,[r1H],"sat");
      $r([s1H,n1H,$$DataziMaybe_Nothing]);break;
     case 2:
      var t1H=$d(1,[n1H],"sat");
      var u1H=$d(2,[t1H],"sat");
      $r([$$DataziMaybe_Nothing,o1H,u1H]);break;
     }break;
    case 2:
     var v1H=o1H.v[0];
     var w1H=i1H.lessThan(v1H)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(w1H.g){
     case 1:
      var x1H=$d(1,[o1H],"sat");
      var y1H=$d(2,[x1H],"sat");
      $r([y1H,n1H,$$DataziMaybe_Nothing]);break;
     case 2:
      var z1H=$d(1,[n1H],"sat");
      var A1H=$d(2,[z1H],"sat");
      $r([$$DataziMaybe_Nothing,o1H,A1H]);break;
     }break;
    }
   },[i1H,n1H]);break;
  case 3:
   var B1H=k1H.v[0],C1H=k1H.v[1],D1H=k1H.v[2];
   var E1H=$f(1,function(F1H){
    var G1H=i1H.lessThan(F1H)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(G1H.g){
    case 1:
     $M(C1H,function(H1H){
      switch(H1H.g){
      case 1:
       var I1H=H1H.v[0];
       var Q1H=F1H.add(I1H);
       var J1H=i1H.lessThan(Q1H)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(J1H.g){
       case 1:
	var K1H=$d(2,[B1H,H1H],"sat");
	var L1H=$d(2,[K1H],"sat");
	$r([L1H,D1H,$$DataziMaybe_Nothing]);break;
       case 2:
	var M1H=$d(1,[D1H],"sat");
	var N1H=$d(2,[M1H],"sat");
	var O1H=$d(1,[B1H],"sat");
	var P1H=$d(2,[O1H],"sat");
	$r([P1H,H1H,N1H]);break;
       }break;
      case 2:
       var R1H=H1H.v[0];
       var Z1H=F1H.add(R1H);
       var S1H=i1H.lessThan(Z1H)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(S1H.g){
       case 1:
	var T1H=$d(2,[B1H,H1H],"sat");
	var U1H=$d(2,[T1H],"sat");
	$r([U1H,D1H,$$DataziMaybe_Nothing]);break;
       case 2:
	var V1H=$d(1,[D1H],"sat");
	var W1H=$d(2,[V1H],"sat");
	var X1H=$d(1,[B1H],"sat");
	var Y1H=$d(2,[X1H],"sat");
	$r([Y1H,H1H,W1H]);break;
       }break;
      }
     },[i1H,F1H,B1H,D1H]);break;
    case 2:
     var a1I=$d(2,[C1H,D1H],"sat");
     var b1I=$d(2,[a1I],"sat");
     $r([$$DataziMaybe_Nothing,B1H,b1I]);break;
    }
   },[i1H,C1H,B1H,D1H],"$w$j");
   $M(B1H,function(c1I){
    switch(c1I.g){
    case 1:
     var d1I=c1I.v[0];
     E1H.J(d1I);break;
    case 2:
     var e1I=c1I.v[0];
     E1H.J(e1I);break;
    }
   },[i1H,C1H,B1H,D1H,E1H]);break;
  case 4:
   var f1I=k1H.v[0],g1I=k1H.v[1],h1I=k1H.v[2],i1I=k1H.v[3];
   var j1I=$f(1,function(k1I){
    var l1I=i1H.lessThan(k1I)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(l1I.g){
    case 1:
     var m1I=$f(1,function(n1I){
      var o1I=i1H.lessThan(n1I)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(o1I.g){
      case 1:
       $M(h1I,function(p1I){
	switch(p1I.g){
	case 1:
	 var q1I=p1I.v[0];
	 var y1I=n1I.add(q1I);
	 var r1I=i1H.lessThan(y1I)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(r1I.g){
	 case 1:
	  var s1I=$d(3,[f1I,g1I,p1I],"sat");
	  var t1I=$d(2,[s1I],"sat");
	  $r([t1I,i1I,$$DataziMaybe_Nothing]);break;
	 case 2:
	  var u1I=$d(1,[i1I],"sat");
	  var v1I=$d(2,[u1I],"sat");
	  var w1I=$d(2,[f1I,g1I],"sat");
	  var x1I=$d(2,[w1I],"sat");
	  $r([x1I,p1I,v1I]);break;
	 }break;
	case 2:
	 var z1I=p1I.v[0];
	 var H1I=n1I.add(z1I);
	 var A1I=i1H.lessThan(H1I)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(A1I.g){
	 case 1:
	  var B1I=$d(3,[f1I,g1I,p1I],"sat");
	  var C1I=$d(2,[B1I],"sat");
	  $r([C1I,i1I,$$DataziMaybe_Nothing]);break;
	 case 2:
	  var D1I=$d(1,[i1I],"sat");
	  var E1I=$d(2,[D1I],"sat");
	  var F1I=$d(2,[f1I,g1I],"sat");
	  var G1I=$d(2,[F1I],"sat");
	  $r([G1I,p1I,E1I]);break;
	 }break;
	}
       },[i1H,n1I,f1I,g1I,i1I]);break;
      case 2:
       var I1I=$d(2,[h1I,i1I],"sat");
       var J1I=$d(2,[I1I],"sat");
       var K1I=$d(1,[f1I],"sat");
       var L1I=$d(2,[K1I],"sat");
       $r([L1I,g1I,J1I]);break;
      }
     },[i1H,h1I,f1I,g1I,i1I],"$w$j1");
     $M(g1I,function(M1I){
      switch(M1I.g){
      case 1:
       var N1I=M1I.v[0];
       var O1I=k1I.add(N1I);
       m1I.J(O1I);break;
      case 2:
       var P1I=M1I.v[0];
       var Q1I=k1I.add(P1I);
       m1I.J(Q1I);break;
      }
     },[i1H,k1I,h1I,f1I,g1I,i1I,m1I]);break;
    case 2:
     var R1I=$d(3,[g1I,h1I,i1I],"sat");
     var S1I=$d(2,[R1I],"sat");
     $r([$$DataziMaybe_Nothing,f1I,S1I]);break;
    }
   },[i1H,h1I,f1I,g1I,i1I],"$w$j");
   $M(f1I,function(T1I){
    switch(T1I.g){
    case 1:
     var U1I=T1I.v[0];
     j1I.J(U1I);break;
    case 2:
     var V1I=T1I.v[0];
     j1I.J(V1I);break;
    }
   },[i1H,h1I,f1I,g1I,i1I,j1I]);break;
  }
 },[i1H]);
},"at libraries/containers/Data/Sequence.hs:1255:1");
var $$DataziSequence$S=$F(3,function(W1I,X1I,Y1I){
 var Z1I=$f(1,function(a1J){
  $M(X1I,function(b1J){
   switch(b1J.g){
   case 1:
    var c1J=b1J.v[0];
    $M(Y1I,function(d1J){
     switch(d1J.g){
     case 1:
      var e1J=d1J.v[0];
      var g1J=a1J.add(c1J);
      var f1J=g1J.add(e1J);
      $R(2,[f1J,W1I,b1J,d1J],"Node3");break;
     case 2:
      var h1J=d1J.v[0];
      var j1J=a1J.add(c1J);
      var i1J=j1J.add(h1J);
      $R(2,[i1J,W1I,b1J,d1J],"Node3");break;
     }
    },[a1J,c1J,W1I,b1J]);break;
   case 2:
    var k1J=b1J.v[0];
    $M(Y1I,function(l1J){
     switch(l1J.g){
     case 1:
      var m1J=l1J.v[0];
      var o1J=a1J.add(k1J);
      var n1J=o1J.add(m1J);
      $R(2,[n1J,W1I,b1J,l1J],"Node3");break;
     case 2:
      var p1J=l1J.v[0];
      var r1J=a1J.add(k1J);
      var q1J=r1J.add(p1J);
      $R(2,[q1J,W1I,b1J,l1J],"Node3");break;
     }
    },[a1J,W1I,b1J,k1J]);break;
   }
  },[Y1I,a1J,W1I]);
 },[X1I,Y1I,W1I],"$j");
 $M(W1I,function(s1J){
  switch(s1J.g){
  case 1:
   var t1J=s1J.v[0];
   Z1I.J(t1J);break;
  case 2:
   var u1J=s1J.v[0];
   Z1I.J(u1J);break;
  }
 },[X1I,Y1I,W1I,Z1I]);
},"at libraries/containers/Data/Sequence.hs:446:1");
var $$DataziSequence$V=$F(2,function(M1J,N1J){
 $M(N1J,function(O1J){
  switch(O1J.g){
  case 1:
   $R(1,[],"Nothing2");break;
  case 2:
   var P1J=O1J.v[0];
   $R(2,[P1J,$$DataziSequence_Empty],"Just2");break;
  case 3:
   var Q1J=O1J.v[0],R1J=O1J.v[1],S1J=O1J.v[2],T1J=O1J.v[3];
   $M(R1J,function(U1J){
    switch(U1J.g){
    case 1:
     var V1J=U1J.v[0];
     var W1J=$t(function(){
      $$DataziSequence$V.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,S1J],function(X1J){
       switch(X1J.g){
       case 1:
	$M(T1J,function(Y1J){
	 switch(Y1J.g){
	 case 1:
	  var Z1J=Y1J.v[0];
	  M1J.C([V1J],function(a1K){
	   $R(2,[Z1J],"Single");
	  },[Z1J]);break;
	 case 2:
	  var b1K=Y1J.v[0],c1K=Y1J.v[1];
	  M1J.C([V1J],function(d1K){
	   var e1K=d1K.v[0];
	   var f1K=$d(1,[c1K],"sat");
	   var g1K=$d(1,[b1K],"sat");
	   var h1K=Q1J.subtract(e1K);
	   $R(3,[h1K,g1K,$$DataziSequence_Empty,f1K],"Deep");
	  },[Q1J,b1K,c1K]);break;
	 case 3:
	  var i1K=Y1J.v[0],j1K=Y1J.v[1],k1K=Y1J.v[2];
	  M1J.C([V1J],function(l1K){
	   var m1K=l1K.v[0];
	   var n1K=$d(1,[k1K],"sat");
	   var o1K=$d(2,[i1K,j1K],"sat");
	   var p1K=Q1J.subtract(m1K);
	   $R(3,[p1K,o1K,$$DataziSequence_Empty,n1K],"Deep");
	  },[Q1J,i1K,j1K,k1K]);break;
	 case 4:
	  var q1K=Y1J.v[0],r1K=Y1J.v[1],s1K=Y1J.v[2],t1K=Y1J.v[3];
	  M1J.C([V1J],function(u1K){
	   var v1K=u1K.v[0];
	   var w1K=$d(2,[s1K,t1K],"sat");
	   var x1K=$d(2,[q1K,r1K],"sat");
	   var y1K=Q1J.subtract(v1K);
	   $R(3,[y1K,x1K,$$DataziSequence_Empty,w1K],"Deep");
	  },[Q1J,q1K,r1K,s1K,t1K]);break;
	 }
	},[V1J,M1J,Q1J]);break;
       case 2:
	var z1K=X1J.v[0],A1K=X1J.v[1];
	M1J.C([V1J],function(B1K){
	 var C1K=B1K.v[0];
	 $b(function(){
	  $M(z1K,function(F1K){
	   switch(F1K.g){
	   case 1:
	    var G1K=F1K.v[1],H1K=F1K.v[2];
	    $R(2,[G1K,H1K],"Two");break;
	   case 2:
	    var I1K=F1K.v[1],J1K=F1K.v[2],K1K=F1K.v[3];
	    $R(3,[I1K,J1K,K1K],"Three");break;
	   }
	  },[T1J,Q1J,C1K,A1K]);
	 },[],function(D1K){
	  var E1K=Q1J.subtract(C1K);
	  $R(3,[E1K,D1K,A1K,T1J],"Deep");
	 },[T1J,Q1J,C1K,A1K]);
	},[T1J,Q1J,z1K,A1K]);break;
       }
      },[V1J,T1J,M1J,Q1J]);
     },[V1J,S1J,T1J,M1J,Q1J],"sat");
     $R(2,[V1J,W1J],"Just2");break;
    case 2:
     var L1K=U1J.v[0],M1K=U1J.v[1];
     var N1K=$t(function(){
      M1J.C([L1K],function(O1K){
       var P1K=O1K.v[0];
       var Q1K=$d(1,[M1K],"sat");
       var R1K=Q1J.subtract(P1K);
       $R(3,[R1K,Q1K,S1J,T1J],"Deep");
      },[S1J,T1J,Q1J,M1K]);
     },[S1J,T1J,M1J,Q1J,L1K,M1K],"sat");
     $R(2,[L1K,N1K],"Just2");break;
    case 3:
     var S1K=U1J.v[0],T1K=U1J.v[1],U1K=U1J.v[2];
     var V1K=$t(function(){
      M1J.C([S1K],function(W1K){
       var X1K=W1K.v[0];
       var Y1K=$d(2,[T1K,U1K],"sat");
       var Z1K=Q1J.subtract(X1K);
       $R(3,[Z1K,Y1K,S1J,T1J],"Deep");
      },[S1J,T1J,Q1J,T1K,U1K]);
     },[S1J,T1J,M1J,Q1J,S1K,T1K,U1K],"sat");
     $R(2,[S1K,V1K],"Just2");break;
    case 4:
     var a1L=U1J.v[0],b1L=U1J.v[1],c1L=U1J.v[2],d1L=U1J.v[3];
     var e1L=$t(function(){
      M1J.C([a1L],function(f1L){
       var g1L=f1L.v[0];
       var h1L=$d(3,[b1L,c1L,d1L],"sat");
       var i1L=Q1J.subtract(g1L);
       $R(3,[i1L,h1L,S1J,T1J],"Deep");
      },[S1J,T1J,Q1J,b1L,c1L,d1L]);
     },[S1J,T1J,M1J,Q1J,a1L,b1L,c1L,d1L],"sat");
     $R(2,[a1L,e1L],"Just2");break;
    }
   },[S1J,T1J,M1J,Q1J]);break;
  }
 },[M1J]);
},"at libraries/containers/Data/Sequence.hs:937:1");
var $$DataziSequence$X=$F(2,function(o1N,p1N){
 $M(p1N,function(q1N){
  switch(q1N.g){
  case 1:
   $R(1,[],"Nothing2");break;
  case 2:
   var r1N=q1N.v[0];
   $R(2,[$$DataziSequence_Empty,r1N],"Just2");break;
  case 3:
   var s1N=q1N.v[0],t1N=q1N.v[1],u1N=q1N.v[2],v1N=q1N.v[3];
   $M(v1N,function(w1N){
    switch(w1N.g){
    case 1:
     var x1N=w1N.v[0];
     var y1N=$t(function(){
      $$DataziSequence$X.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,u1N],function(z1N){
       switch(z1N.g){
       case 1:
	$M(t1N,function(A1N){
	 switch(A1N.g){
	 case 1:
	  var B1N=A1N.v[0];
	  o1N.C([x1N],function(C1N){
	   $R(2,[B1N],"Single");
	  },[B1N]);break;
	 case 2:
	  var D1N=A1N.v[0],E1N=A1N.v[1];
	  o1N.C([x1N],function(F1N){
	   var G1N=F1N.v[0];
	   var H1N=$d(1,[E1N],"sat");
	   var I1N=$d(1,[D1N],"sat");
	   var J1N=s1N.subtract(G1N);
	   $R(3,[J1N,I1N,$$DataziSequence_Empty,H1N],"Deep");
	  },[s1N,D1N,E1N]);break;
	 case 3:
	  var K1N=A1N.v[0],L1N=A1N.v[1],M1N=A1N.v[2];
	  o1N.C([x1N],function(N1N){
	   var O1N=N1N.v[0];
	   var P1N=$d(1,[M1N],"sat");
	   var Q1N=$d(2,[K1N,L1N],"sat");
	   var R1N=s1N.subtract(O1N);
	   $R(3,[R1N,Q1N,$$DataziSequence_Empty,P1N],"Deep");
	  },[s1N,K1N,L1N,M1N]);break;
	 case 4:
	  var S1N=A1N.v[0],T1N=A1N.v[1],U1N=A1N.v[2],V1N=A1N.v[3];
	  o1N.C([x1N],function(W1N){
	   var X1N=W1N.v[0];
	   var Y1N=$d(2,[U1N,V1N],"sat");
	   var Z1N=$d(2,[S1N,T1N],"sat");
	   var a1O=s1N.subtract(X1N);
	   $R(3,[a1O,Z1N,$$DataziSequence_Empty,Y1N],"Deep");
	  },[s1N,S1N,T1N,U1N,V1N]);break;
	 }
	},[x1N,o1N,s1N]);break;
       case 2:
	var b1O=z1N.v[0],c1O=z1N.v[1];
	o1N.C([x1N],function(d1O){
	 var e1O=d1O.v[0];
	 $b(function(){
	  $M(c1O,function(h1O){
	   switch(h1O.g){
	   case 1:
	    var i1O=h1O.v[1],j1O=h1O.v[2];
	    $R(2,[i1O,j1O],"Two");break;
	   case 2:
	    var k1O=h1O.v[1],l1O=h1O.v[2],m1O=h1O.v[3];
	    $R(3,[k1O,l1O,m1O],"Three");break;
	   }
	  },[t1N,s1N,e1O,b1O]);
	 },[],function(f1O){
	  var g1O=s1N.subtract(e1O);
	  $R(3,[g1O,t1N,b1O,f1O],"Deep");
	 },[t1N,s1N,e1O,b1O]);
	},[t1N,s1N,c1O,b1O]);break;
       }
      },[t1N,x1N,o1N,s1N]);
     },[u1N,t1N,x1N,o1N,s1N],"sat");
     $R(2,[y1N,x1N],"Just2");break;
    case 2:
     var n1O=w1N.v[0],o1O=w1N.v[1];
     var p1O=$t(function(){
      o1N.C([o1O],function(q1O){
       var r1O=q1O.v[0];
       var s1O=$d(1,[n1O],"sat");
       var t1O=s1N.subtract(r1O);
       $R(3,[t1O,t1N,u1N,s1O],"Deep");
      },[u1N,t1N,s1N,n1O]);
     },[u1N,t1N,o1N,s1N,o1O,n1O],"sat");
     $R(2,[p1O,o1O],"Just2");break;
    case 3:
     var u1O=w1N.v[0],v1O=w1N.v[1],w1O=w1N.v[2];
     var x1O=$t(function(){
      o1N.C([w1O],function(y1O){
       var z1O=y1O.v[0];
       var A1O=$d(2,[u1O,v1O],"sat");
       var B1O=s1N.subtract(z1O);
       $R(3,[B1O,t1N,u1N,A1O],"Deep");
      },[u1N,t1N,s1N,u1O,v1O]);
     },[u1N,t1N,o1N,s1N,w1O,u1O,v1O],"sat");
     $R(2,[x1O,w1O],"Just2");break;
    case 4:
     var C1O=w1N.v[0],D1O=w1N.v[1],E1O=w1N.v[2],F1O=w1N.v[3];
     var G1O=$t(function(){
      o1N.C([F1O],function(H1O){
       var I1O=H1O.v[0];
       var J1O=$d(3,[C1O,D1O,E1O],"sat");
       var K1O=s1N.subtract(I1O);
       $R(3,[K1O,t1N,u1N,J1O],"Deep");
      },[u1N,t1N,s1N,C1O,D1O,E1O]);
     },[u1N,t1N,o1N,s1N,F1O,C1O,D1O,E1O],"sat");
     $R(2,[G1O,F1O],"Just2");break;
    }
   },[u1N,t1N,o1N,s1N]);break;
  }
 },[o1N]);
},"at libraries/containers/Data/Sequence.hs:988:1");
var $$DataziSequence$Z=$F(3,function(Q1Q,R1Q,S1Q){
 var T1Q=$f(1,function(U1Q){
  var V1Q=$f(1,function(W1Q){
   $M(S1Q,function(X1Q){
    switch(X1Q.g){
    case 1:
     $M(Q1Q,function(Y1Q){
      var a1R=U1Q.add(W1Q);
      var Z1Q=a1R.add(goog.math.Long.fromBits(1,0));
      $R(3,[Z1Q,Y1Q,R1Q,X1Q],"Deep");
     },[U1Q,W1Q,R1Q,X1Q]);break;
    case 2:
     $M(Q1Q,function(b1R){
      var d1R=U1Q.add(W1Q);
      var c1R=d1R.add(goog.math.Long.fromBits(2,0));
      $R(3,[c1R,b1R,R1Q,X1Q],"Deep");
     },[U1Q,W1Q,R1Q,X1Q]);break;
    case 3:
     $M(Q1Q,function(e1R){
      var g1R=U1Q.add(W1Q);
      var f1R=g1R.add(goog.math.Long.fromBits(3,0));
      $R(3,[f1R,e1R,R1Q,X1Q],"Deep");
     },[U1Q,W1Q,R1Q,X1Q]);break;
    case 4:
     $M(Q1Q,function(h1R){
      var j1R=U1Q.add(W1Q);
      var i1R=j1R.add(goog.math.Long.fromBits(4,0));
      $R(3,[i1R,h1R,R1Q,X1Q],"Deep");
     },[U1Q,W1Q,R1Q,X1Q]);break;
    }
   },[Q1Q,U1Q,W1Q,R1Q]);
  },[S1Q,Q1Q,U1Q,R1Q],"$j1");
  $M(R1Q,function(k1R){
   switch(k1R.g){
   case 1:
    V1Q.J(goog.math.Long.fromBits(0,0));break;
   case 2:
    var l1R=k1R.v[0];
    $M(l1R,function(m1R){
     switch(m1R.g){
     case 1:
      var n1R=m1R.v[0];
      V1Q.J(n1R);break;
     case 2:
      var o1R=m1R.v[0];
      V1Q.J(o1R);break;
     }
    },[S1Q,Q1Q,U1Q,R1Q,V1Q]);break;
   case 3:
    var p1R=k1R.v[0];
    V1Q.J(p1R);break;
   }
  },[S1Q,Q1Q,U1Q,R1Q,V1Q]);
 },[S1Q,Q1Q,R1Q],"$j");
 $M(Q1Q,function(q1R){
  switch(q1R.g){
  case 1:
   T1Q.J(goog.math.Long.fromBits(1,0));break;
  case 2:
   T1Q.J(goog.math.Long.fromBits(2,0));break;
  case 3:
   T1Q.J(goog.math.Long.fromBits(3,0));break;
  case 4:
   T1Q.J(goog.math.Long.fromBits(4,0));break;
  }
 },[S1Q,Q1Q,R1Q,T1Q]);
},"at libraries/containers/Data/Sequence.hs:314:1");
var $$DataziSequence$a1=$F(1,function(r1R){
 $M(r1R,function(s1R){
  switch(s1R.g){
  case 1:
   var t1R=s1R.v[0];
   $M(t1R,function(u1R){
    switch(u1R.g){
    case 1:
     var v1R=u1R.v[0];
     $A(v1R);break;
    case 2:
     var w1R=u1R.v[0];
     $A(w1R);break;
    }
   },[]);break;
  case 2:
   var x1R=s1R.v[0],y1R=s1R.v[1];
   $M(x1R,function(z1R){
    switch(z1R.g){
    case 1:
     var A1R=z1R.v[0];
     $M(y1R,function(B1R){
      switch(B1R.g){
      case 1:
       var C1R=B1R.v[0];
       $r(A1R.add(C1R));break;
      case 2:
       var D1R=B1R.v[0];
       $r(A1R.add(D1R));break;
      }
     },[A1R]);break;
    case 2:
     var E1R=z1R.v[0];
     $M(y1R,function(F1R){
      switch(F1R.g){
      case 1:
       var G1R=F1R.v[0];
       $r(E1R.add(G1R));break;
      case 2:
       var H1R=F1R.v[0];
       $r(E1R.add(H1R));break;
      }
     },[E1R]);break;
    }
   },[y1R]);break;
  case 3:
   var I1R=s1R.v[0],J1R=s1R.v[1],K1R=s1R.v[2];
   $M(I1R,function(L1R){
    switch(L1R.g){
    case 1:
     var M1R=L1R.v[0];
     $M(J1R,function(N1R){
      switch(N1R.g){
      case 1:
       var O1R=N1R.v[0];
       $M(K1R,function(P1R){
	switch(P1R.g){
	case 1:
	 var Q1R=P1R.v[0];
	 var R1R=M1R.add(O1R);
	 $r(R1R.add(Q1R));break;
	case 2:
	 var S1R=P1R.v[0];
	 var T1R=M1R.add(O1R);
	 $r(T1R.add(S1R));break;
	}
       },[M1R,O1R]);break;
      case 2:
       var U1R=N1R.v[0];
       $M(K1R,function(V1R){
	switch(V1R.g){
	case 1:
	 var W1R=V1R.v[0];
	 var X1R=M1R.add(U1R);
	 $r(X1R.add(W1R));break;
	case 2:
	 var Y1R=V1R.v[0];
	 var Z1R=M1R.add(U1R);
	 $r(Z1R.add(Y1R));break;
	}
       },[M1R,U1R]);break;
      }
     },[K1R,M1R]);break;
    case 2:
     var a1S=L1R.v[0];
     $M(J1R,function(b1S){
      switch(b1S.g){
      case 1:
       var c1S=b1S.v[0];
       $M(K1R,function(d1S){
	switch(d1S.g){
	case 1:
	 var e1S=d1S.v[0];
	 var f1S=a1S.add(c1S);
	 $r(f1S.add(e1S));break;
	case 2:
	 var g1S=d1S.v[0];
	 var h1S=a1S.add(c1S);
	 $r(h1S.add(g1S));break;
	}
       },[a1S,c1S]);break;
      case 2:
       var i1S=b1S.v[0];
       $M(K1R,function(j1S){
	switch(j1S.g){
	case 1:
	 var k1S=j1S.v[0];
	 var l1S=a1S.add(i1S);
	 $r(l1S.add(k1S));break;
	case 2:
	 var m1S=j1S.v[0];
	 var n1S=a1S.add(i1S);
	 $r(n1S.add(m1S));break;
	}
       },[a1S,i1S]);break;
      }
     },[K1R,a1S]);break;
    }
   },[J1R,K1R]);break;
  case 4:
   var o1S=s1R.v[0],p1S=s1R.v[1],q1S=s1R.v[2],r1S=s1R.v[3];
   var s1S=$f(1,function(t1S){
    $M(p1S,function(u1S){
     switch(u1S.g){
     case 1:
      var v1S=u1S.v[0];
      $M(q1S,function(w1S){
       switch(w1S.g){
       case 1:
	var x1S=w1S.v[0];
	$M(r1S,function(y1S){
	 switch(y1S.g){
	 case 1:
	  var z1S=y1S.v[0];
	  var B1S=t1S.add(v1S);
	  var A1S=B1S.add(x1S);
	  $r(A1S.add(z1S));break;
	 case 2:
	  var C1S=y1S.v[0];
	  var E1S=t1S.add(v1S);
	  var D1S=E1S.add(x1S);
	  $r(D1S.add(C1S));break;
	 }
	},[t1S,v1S,x1S]);break;
       case 2:
	var F1S=w1S.v[0];
	$M(r1S,function(G1S){
	 switch(G1S.g){
	 case 1:
	  var H1S=G1S.v[0];
	  var J1S=t1S.add(v1S);
	  var I1S=J1S.add(F1S);
	  $r(I1S.add(H1S));break;
	 case 2:
	  var K1S=G1S.v[0];
	  var M1S=t1S.add(v1S);
	  var L1S=M1S.add(F1S);
	  $r(L1S.add(K1S));break;
	 }
	},[t1S,v1S,F1S]);break;
       }
      },[r1S,t1S,v1S]);break;
     case 2:
      var N1S=u1S.v[0];
      $M(q1S,function(O1S){
       switch(O1S.g){
       case 1:
	var P1S=O1S.v[0];
	$M(r1S,function(Q1S){
	 switch(Q1S.g){
	 case 1:
	  var R1S=Q1S.v[0];
	  var T1S=t1S.add(N1S);
	  var S1S=T1S.add(P1S);
	  $r(S1S.add(R1S));break;
	 case 2:
	  var U1S=Q1S.v[0];
	  var W1S=t1S.add(N1S);
	  var V1S=W1S.add(P1S);
	  $r(V1S.add(U1S));break;
	 }
	},[t1S,N1S,P1S]);break;
       case 2:
	var X1S=O1S.v[0];
	$M(r1S,function(Y1S){
	 switch(Y1S.g){
	 case 1:
	  var Z1S=Y1S.v[0];
	  var b1T=t1S.add(N1S);
	  var a1T=b1T.add(X1S);
	  $r(a1T.add(Z1S));break;
	 case 2:
	  var c1T=Y1S.v[0];
	  var e1T=t1S.add(N1S);
	  var d1T=e1T.add(X1S);
	  $r(d1T.add(c1T));break;
	 }
	},[t1S,N1S,X1S]);break;
       }
      },[r1S,t1S,N1S]);break;
     }
    },[q1S,r1S,t1S]);
   },[p1S,q1S,r1S],"$w$j");
   $M(o1S,function(f1T){
    switch(f1T.g){
    case 1:
     var g1T=f1T.v[0];
     s1S.J(g1T);break;
    case 2:
     var h1T=f1T.v[0];
     s1S.J(h1T);break;
    }
   },[p1S,q1S,r1S,s1S]);break;
  }
 },[]);
},"$wa");
var $$DataziSequence$b1=$F(3,function(i1T,j1T,k1T){
 $$DataziSequence$a1.C([i1T],function(p1T){
  $M(j1T,function(l1T){
   switch(l1T.g){
   case 1:
    $$DataziSequence$a1.C([k1T],function(q1T){
     $M(i1T,function(m1T){
      $M(k1T,function(n1T){
       var o1T=p1T.add(q1T);
       $R(3,[o1T,m1T,$$DataziSequence_Empty,n1T],"Deep");
      },[p1T,q1T,m1T]);
     },[k1T,p1T,q1T]);
    },[i1T,k1T,p1T]);break;
   case 2:
    var r1T=l1T.v[0];
    $M(r1T,function(s1T){
     switch(s1T.g){
     case 1:
      var t1T=s1T.v[0];
      $$DataziSequence$a1.C([k1T],function(y1T){
       $M(i1T,function(u1T){
	$M(k1T,function(v1T){
	 var x1T=p1T.add(t1T);
	 var w1T=x1T.add(y1T);
	 $R(3,[w1T,u1T,l1T,v1T],"Deep");
	},[p1T,t1T,y1T,u1T,l1T]);
       },[k1T,p1T,t1T,y1T,l1T]);
      },[i1T,k1T,p1T,t1T,l1T]);break;
     case 2:
      var z1T=s1T.v[0];
      $$DataziSequence$a1.C([k1T],function(E1T){
       $M(i1T,function(A1T){
	$M(k1T,function(B1T){
	 var D1T=p1T.add(z1T);
	 var C1T=D1T.add(E1T);
	 $R(3,[C1T,A1T,l1T,B1T],"Deep");
	},[p1T,l1T,z1T,E1T,A1T]);
       },[k1T,p1T,l1T,z1T,E1T]);
      },[i1T,k1T,p1T,l1T,z1T]);break;
     }
    },[i1T,k1T,p1T,l1T]);break;
   case 3:
    var F1T=l1T.v[0];
    $$DataziSequence$a1.C([k1T],function(K1T){
     $M(i1T,function(G1T){
      $M(k1T,function(H1T){
       var J1T=p1T.add(F1T);
       var I1T=J1T.add(K1T);
       $R(3,[I1T,G1T,l1T,H1T],"Deep");
      },[p1T,l1T,F1T,K1T,G1T]);
     },[k1T,p1T,l1T,F1T,K1T]);
    },[i1T,k1T,p1T,l1T,F1T]);break;
   }
  },[i1T,k1T,p1T]);
 },[i1T,j1T,k1T]);
},"at libraries/containers/Data/Sequence.hs:314:1");
var $$DataziSequence$c1=$F(3,function(L1T,M1T,N1T){
 $M(L1T,function(O1T){
  switch(O1T.g){
  case 1:
   var P1T=$f(1,function(Q1T){
    $$DataziSequence$V.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,M1T],function(R1T){
     switch(R1T.g){
     case 1:
      $$DataziSequence$w.J(Q1T,N1T);break;
     case 2:
      var S1T=R1T.v[0],T1T=R1T.v[1];
      $b(function(){
       $M(S1T,function(W1T){
	switch(W1T.g){
	case 1:
	 var X1T=W1T.v[1],Y1T=W1T.v[2];
	 $R(2,[X1T,Y1T],"Two");break;
	case 2:
	 var Z1T=W1T.v[1],a1U=W1T.v[2],b1U=W1T.v[3];
	 $R(3,[Z1T,a1U,b1U],"Three");break;
	}
       },[Q1T,N1T,T1T]);
      },[],function(U1T){
       $M(N1T,function(V1T){
	$R(3,[Q1T,U1T,T1T,V1T],"Deep");
       },[Q1T,U1T,T1T]);
      },[Q1T,N1T,T1T]);break;
     }
    },[Q1T,N1T]);
   },[M1T,N1T],"$j");
   $M(M1T,function(c1U){
    switch(c1U.g){
    case 1:
     $M(N1T,function(d1U){
      switch(d1U.g){
      case 1:
       P1T.J(goog.math.Long.fromBits(1,0));break;
      case 2:
       P1T.J(goog.math.Long.fromBits(2,0));break;
      case 3:
       P1T.J(goog.math.Long.fromBits(3,0));break;
      case 4:
       P1T.J(goog.math.Long.fromBits(4,0));break;
      }
     },[M1T,N1T,P1T]);break;
    case 2:
     var e1U=c1U.v[0];
     $M(e1U,function(f1U){
      switch(f1U.g){
      case 1:
       var g1U=f1U.v[0];
       $M(N1T,function(h1U){
	switch(h1U.g){
	case 1:
	 var i1U=g1U.add(goog.math.Long.fromBits(1,0));
	 P1T.J(i1U);break;
	case 2:
	 var j1U=g1U.add(goog.math.Long.fromBits(2,0));
	 P1T.J(j1U);break;
	case 3:
	 var k1U=g1U.add(goog.math.Long.fromBits(3,0));
	 P1T.J(k1U);break;
	case 4:
	 var l1U=g1U.add(goog.math.Long.fromBits(4,0));
	 P1T.J(l1U);break;
	}
       },[M1T,N1T,P1T,g1U]);break;
      case 2:
       var m1U=f1U.v[0];
       $M(N1T,function(n1U){
	switch(n1U.g){
	case 1:
	 var o1U=m1U.add(goog.math.Long.fromBits(1,0));
	 P1T.J(o1U);break;
	case 2:
	 var p1U=m1U.add(goog.math.Long.fromBits(2,0));
	 P1T.J(p1U);break;
	case 3:
	 var q1U=m1U.add(goog.math.Long.fromBits(3,0));
	 P1T.J(q1U);break;
	case 4:
	 var r1U=m1U.add(goog.math.Long.fromBits(4,0));
	 P1T.J(r1U);break;
	}
       },[M1T,N1T,P1T,m1U]);break;
      }
     },[M1T,N1T,P1T]);break;
    case 3:
     var s1U=c1U.v[0];
     $M(N1T,function(t1U){
      switch(t1U.g){
      case 1:
       var u1U=s1U.add(goog.math.Long.fromBits(1,0));
       P1T.J(u1U);break;
      case 2:
       var v1U=s1U.add(goog.math.Long.fromBits(2,0));
       P1T.J(v1U);break;
      case 3:
       var w1U=s1U.add(goog.math.Long.fromBits(3,0));
       P1T.J(w1U);break;
      case 4:
       var x1U=s1U.add(goog.math.Long.fromBits(4,0));
       P1T.J(x1U);break;
      }
     },[M1T,N1T,P1T,s1U]);break;
    }
   },[M1T,N1T,P1T]);break;
  case 2:
   var y1U=O1T.v[0];
   $$DataziSequence$Z.J(y1U,M1T,N1T);break;
  }
 },[M1T,N1T]);
},"at libraries/containers/Data/Sequence.hs:331:1");
var $$DataziSequence$d1=$F(1,function(z1U){
 $M(z1U,function(A1U){
  switch(A1U.g){
  case 1:
   var B1U=A1U.v[0];
   $M(B1U,function(C1U){
    switch(C1U.g){
    case 1:
     var D1U=C1U.v[0];
     $A(D1U);break;
    case 2:
     var E1U=C1U.v[0];
     $A(E1U);break;
    }
   },[]);break;
  case 2:
   var F1U=A1U.v[0],G1U=A1U.v[1];
   $M(F1U,function(H1U){
    switch(H1U.g){
    case 1:
     var I1U=H1U.v[0];
     $M(G1U,function(J1U){
      switch(J1U.g){
      case 1:
       var K1U=J1U.v[0];
       $r(I1U.add(K1U));break;
      case 2:
       var L1U=J1U.v[0];
       $r(I1U.add(L1U));break;
      }
     },[I1U]);break;
    case 2:
     var M1U=H1U.v[0];
     $M(G1U,function(N1U){
      switch(N1U.g){
      case 1:
       var O1U=N1U.v[0];
       $r(M1U.add(O1U));break;
      case 2:
       var P1U=N1U.v[0];
       $r(M1U.add(P1U));break;
      }
     },[M1U]);break;
    }
   },[G1U]);break;
  case 3:
   var Q1U=A1U.v[0],R1U=A1U.v[1],S1U=A1U.v[2];
   $M(Q1U,function(T1U){
    switch(T1U.g){
    case 1:
     var U1U=T1U.v[0];
     $M(R1U,function(V1U){
      switch(V1U.g){
      case 1:
       var W1U=V1U.v[0];
       $M(S1U,function(X1U){
	switch(X1U.g){
	case 1:
	 var Y1U=X1U.v[0];
	 var Z1U=U1U.add(W1U);
	 $r(Z1U.add(Y1U));break;
	case 2:
	 var a1V=X1U.v[0];
	 var b1V=U1U.add(W1U);
	 $r(b1V.add(a1V));break;
	}
       },[U1U,W1U]);break;
      case 2:
       var c1V=V1U.v[0];
       $M(S1U,function(d1V){
	switch(d1V.g){
	case 1:
	 var e1V=d1V.v[0];
	 var f1V=U1U.add(c1V);
	 $r(f1V.add(e1V));break;
	case 2:
	 var g1V=d1V.v[0];
	 var h1V=U1U.add(c1V);
	 $r(h1V.add(g1V));break;
	}
       },[U1U,c1V]);break;
      }
     },[S1U,U1U]);break;
    case 2:
     var i1V=T1U.v[0];
     $M(R1U,function(j1V){
      switch(j1V.g){
      case 1:
       var k1V=j1V.v[0];
       $M(S1U,function(l1V){
	switch(l1V.g){
	case 1:
	 var m1V=l1V.v[0];
	 var n1V=i1V.add(k1V);
	 $r(n1V.add(m1V));break;
	case 2:
	 var o1V=l1V.v[0];
	 var p1V=i1V.add(k1V);
	 $r(p1V.add(o1V));break;
	}
       },[i1V,k1V]);break;
      case 2:
       var q1V=j1V.v[0];
       $M(S1U,function(r1V){
	switch(r1V.g){
	case 1:
	 var s1V=r1V.v[0];
	 var t1V=i1V.add(q1V);
	 $r(t1V.add(s1V));break;
	case 2:
	 var u1V=r1V.v[0];
	 var v1V=i1V.add(q1V);
	 $r(v1V.add(u1V));break;
	}
       },[i1V,q1V]);break;
      }
     },[S1U,i1V]);break;
    }
   },[R1U,S1U]);break;
  case 4:
   var w1V=A1U.v[0],x1V=A1U.v[1],y1V=A1U.v[2],z1V=A1U.v[3];
   var A1V=$f(1,function(B1V){
    $M(x1V,function(C1V){
     switch(C1V.g){
     case 1:
      var D1V=C1V.v[0];
      $M(y1V,function(E1V){
       switch(E1V.g){
       case 1:
	var F1V=E1V.v[0];
	$M(z1V,function(G1V){
	 switch(G1V.g){
	 case 1:
	  var H1V=G1V.v[0];
	  var J1V=B1V.add(D1V);
	  var I1V=J1V.add(F1V);
	  $r(I1V.add(H1V));break;
	 case 2:
	  var K1V=G1V.v[0];
	  var M1V=B1V.add(D1V);
	  var L1V=M1V.add(F1V);
	  $r(L1V.add(K1V));break;
	 }
	},[B1V,D1V,F1V]);break;
       case 2:
	var N1V=E1V.v[0];
	$M(z1V,function(O1V){
	 switch(O1V.g){
	 case 1:
	  var P1V=O1V.v[0];
	  var R1V=B1V.add(D1V);
	  var Q1V=R1V.add(N1V);
	  $r(Q1V.add(P1V));break;
	 case 2:
	  var S1V=O1V.v[0];
	  var U1V=B1V.add(D1V);
	  var T1V=U1V.add(N1V);
	  $r(T1V.add(S1V));break;
	 }
	},[B1V,D1V,N1V]);break;
       }
      },[z1V,B1V,D1V]);break;
     case 2:
      var V1V=C1V.v[0];
      $M(y1V,function(W1V){
       switch(W1V.g){
       case 1:
	var X1V=W1V.v[0];
	$M(z1V,function(Y1V){
	 switch(Y1V.g){
	 case 1:
	  var Z1V=Y1V.v[0];
	  var b1W=B1V.add(V1V);
	  var a1W=b1W.add(X1V);
	  $r(a1W.add(Z1V));break;
	 case 2:
	  var c1W=Y1V.v[0];
	  var e1W=B1V.add(V1V);
	  var d1W=e1W.add(X1V);
	  $r(d1W.add(c1W));break;
	 }
	},[B1V,V1V,X1V]);break;
       case 2:
	var f1W=W1V.v[0];
	$M(z1V,function(g1W){
	 switch(g1W.g){
	 case 1:
	  var h1W=g1W.v[0];
	  var j1W=B1V.add(V1V);
	  var i1W=j1W.add(f1W);
	  $r(i1W.add(h1W));break;
	 case 2:
	  var k1W=g1W.v[0];
	  var m1W=B1V.add(V1V);
	  var l1W=m1W.add(f1W);
	  $r(l1W.add(k1W));break;
	 }
	},[B1V,V1V,f1W]);break;
       }
      },[z1V,B1V,V1V]);break;
     }
    },[y1V,z1V,B1V]);
   },[x1V,y1V,z1V],"$w$j");
   $M(w1V,function(n1W){
    switch(n1W.g){
    case 1:
     var o1W=n1W.v[0];
     A1V.J(o1W);break;
    case 2:
     var p1W=n1W.v[0];
     A1V.J(p1W);break;
    }
   },[x1V,y1V,z1V,A1V]);break;
  }
 },[]);
},"$wa1");
var $$DataziSequence$e1=$F(3,function(q1W,r1W,s1W){
 $M(q1W,function(t1W){
  switch(t1W.g){
  case 1:
   var u1W=$f(1,function(v1W){
    $$DataziSequence$V.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,r1W],function(w1W){
     switch(w1W.g){
     case 1:
      $$DataziSequence$w.J(v1W,s1W);break;
     case 2:
      var x1W=w1W.v[0],y1W=w1W.v[1];
      $b(function(){
       $M(x1W,function(B1W){
	switch(B1W.g){
	case 1:
	 var C1W=B1W.v[1],D1W=B1W.v[2];
	 $R(2,[C1W,D1W],"Two");break;
	case 2:
	 var E1W=B1W.v[1],F1W=B1W.v[2],G1W=B1W.v[3];
	 $R(3,[E1W,F1W,G1W],"Three");break;
	}
       },[v1W,s1W,y1W]);
      },[],function(z1W){
       $M(s1W,function(A1W){
	$R(3,[v1W,z1W,y1W,A1W],"Deep");
       },[v1W,z1W,y1W]);
      },[v1W,s1W,y1W]);break;
     }
    },[v1W,s1W]);
   },[r1W,s1W],"$j");
   $M(r1W,function(H1W){
    switch(H1W.g){
    case 1:
     $$DataziSequence$d1.C([s1W],function(I1W){
      u1W.J(I1W);
     },[r1W,s1W,u1W]);break;
    case 2:
     var J1W=H1W.v[0];
     $M(J1W,function(K1W){
      switch(K1W.g){
      case 1:
       var L1W=K1W.v[0];
       $$DataziSequence$d1.C([s1W],function(N1W){
	var M1W=L1W.add(N1W);
	u1W.J(M1W);
       },[r1W,s1W,u1W,L1W]);break;
      case 2:
       var O1W=K1W.v[0];
       $$DataziSequence$d1.C([s1W],function(Q1W){
	var P1W=O1W.add(Q1W);
	u1W.J(P1W);
       },[r1W,s1W,u1W,O1W]);break;
      }
     },[r1W,s1W,u1W]);break;
    case 3:
     var R1W=H1W.v[0];
     $$DataziSequence$d1.C([s1W],function(T1W){
      var S1W=R1W.add(T1W);
      u1W.J(S1W);
     },[r1W,s1W,u1W,R1W]);break;
    }
   },[r1W,s1W,u1W]);break;
  case 2:
   var U1W=t1W.v[0];
   $$DataziSequence$b1.J(U1W,r1W,s1W);break;
  }
 },[r1W,s1W]);
},"at libraries/containers/Data/Sequence.hs:331:1");
var $$DataziSequence$f1=$F(3,function(V1W,W1W,X1W){
 $M(X1W,function(Y1W){
  switch(Y1W.g){
  case 1:
   var Z1W=$f(1,function(a1X){
    $$DataziSequence$X.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,W1W],function(b1X){
     switch(b1X.g){
     case 1:
      $$DataziSequence$w.J(a1X,V1W);break;
     case 2:
      var c1X=b1X.v[0],d1X=b1X.v[1];
      $M(V1W,function(e1X){
       $b(function(){
	$M(d1X,function(g1X){
	 switch(g1X.g){
	 case 1:
	  var h1X=g1X.v[1],i1X=g1X.v[2];
	  $R(2,[h1X,i1X],"Two");break;
	 case 2:
	  var j1X=g1X.v[1],k1X=g1X.v[2],l1X=g1X.v[3];
	  $R(3,[j1X,k1X,l1X],"Three");break;
	 }
	},[a1X,e1X,c1X]);
       },[],function(f1X){
	$R(3,[a1X,e1X,c1X,f1X],"Deep");
       },[a1X,e1X,c1X]);
      },[a1X,d1X,c1X]);break;
     }
    },[a1X,V1W]);
   },[W1W,V1W],"$j");
   $M(W1W,function(m1X){
    switch(m1X.g){
    case 1:
     $M(V1W,function(n1X){
      switch(n1X.g){
      case 1:
       Z1W.J(goog.math.Long.fromBits(1,0));break;
      case 2:
       Z1W.J(goog.math.Long.fromBits(2,0));break;
      case 3:
       Z1W.J(goog.math.Long.fromBits(3,0));break;
      case 4:
       Z1W.J(goog.math.Long.fromBits(4,0));break;
      }
     },[W1W,V1W,Z1W]);break;
    case 2:
     var o1X=m1X.v[0];
     $M(o1X,function(p1X){
      switch(p1X.g){
      case 1:
       var q1X=p1X.v[0];
       $M(V1W,function(r1X){
	switch(r1X.g){
	case 1:
	 var s1X=q1X.add(goog.math.Long.fromBits(1,0));
	 Z1W.J(s1X);break;
	case 2:
	 var t1X=q1X.add(goog.math.Long.fromBits(2,0));
	 Z1W.J(t1X);break;
	case 3:
	 var u1X=q1X.add(goog.math.Long.fromBits(3,0));
	 Z1W.J(u1X);break;
	case 4:
	 var v1X=q1X.add(goog.math.Long.fromBits(4,0));
	 Z1W.J(v1X);break;
	}
       },[W1W,V1W,Z1W,q1X]);break;
      case 2:
       var w1X=p1X.v[0];
       $M(V1W,function(x1X){
	switch(x1X.g){
	case 1:
	 var y1X=w1X.add(goog.math.Long.fromBits(1,0));
	 Z1W.J(y1X);break;
	case 2:
	 var z1X=w1X.add(goog.math.Long.fromBits(2,0));
	 Z1W.J(z1X);break;
	case 3:
	 var A1X=w1X.add(goog.math.Long.fromBits(3,0));
	 Z1W.J(A1X);break;
	case 4:
	 var B1X=w1X.add(goog.math.Long.fromBits(4,0));
	 Z1W.J(B1X);break;
	}
       },[W1W,V1W,Z1W,w1X]);break;
      }
     },[W1W,V1W,Z1W]);break;
    case 3:
     var C1X=m1X.v[0];
     $M(V1W,function(D1X){
      switch(D1X.g){
      case 1:
       var E1X=C1X.add(goog.math.Long.fromBits(1,0));
       Z1W.J(E1X);break;
      case 2:
       var F1X=C1X.add(goog.math.Long.fromBits(2,0));
       Z1W.J(F1X);break;
      case 3:
       var G1X=C1X.add(goog.math.Long.fromBits(3,0));
       Z1W.J(G1X);break;
      case 4:
       var H1X=C1X.add(goog.math.Long.fromBits(4,0));
       Z1W.J(H1X);break;
      }
     },[W1W,V1W,Z1W,C1X]);break;
    }
   },[W1W,V1W,Z1W]);break;
  case 2:
   var I1X=Y1W.v[0];
   $$DataziSequence$Z.J(V1W,W1W,I1X);break;
  }
 },[W1W,V1W]);
},"at libraries/containers/Data/Sequence.hs:337:1");
var $$DataziSequence$g1=$F(1,function(J1X){
 $M(J1X,function(K1X){
  switch(K1X.g){
  case 1:
   var L1X=K1X.v[0];
   $M(L1X,function(M1X){
    switch(M1X.g){
    case 1:
     var N1X=M1X.v[0];
     $A(N1X);break;
    case 2:
     var O1X=M1X.v[0];
     $A(O1X);break;
    }
   },[]);break;
  case 2:
   var P1X=K1X.v[0],Q1X=K1X.v[1];
   $M(P1X,function(R1X){
    switch(R1X.g){
    case 1:
     var S1X=R1X.v[0];
     $M(Q1X,function(T1X){
      switch(T1X.g){
      case 1:
       var U1X=T1X.v[0];
       $r(S1X.add(U1X));break;
      case 2:
       var V1X=T1X.v[0];
       $r(S1X.add(V1X));break;
      }
     },[S1X]);break;
    case 2:
     var W1X=R1X.v[0];
     $M(Q1X,function(X1X){
      switch(X1X.g){
      case 1:
       var Y1X=X1X.v[0];
       $r(W1X.add(Y1X));break;
      case 2:
       var Z1X=X1X.v[0];
       $r(W1X.add(Z1X));break;
      }
     },[W1X]);break;
    }
   },[Q1X]);break;
  case 3:
   var a1Y=K1X.v[0],b1Y=K1X.v[1],c1Y=K1X.v[2];
   $M(a1Y,function(d1Y){
    switch(d1Y.g){
    case 1:
     var e1Y=d1Y.v[0];
     $M(b1Y,function(f1Y){
      switch(f1Y.g){
      case 1:
       var g1Y=f1Y.v[0];
       $M(c1Y,function(h1Y){
	switch(h1Y.g){
	case 1:
	 var i1Y=h1Y.v[0];
	 var j1Y=e1Y.add(g1Y);
	 $r(j1Y.add(i1Y));break;
	case 2:
	 var k1Y=h1Y.v[0];
	 var l1Y=e1Y.add(g1Y);
	 $r(l1Y.add(k1Y));break;
	}
       },[e1Y,g1Y]);break;
      case 2:
       var m1Y=f1Y.v[0];
       $M(c1Y,function(n1Y){
	switch(n1Y.g){
	case 1:
	 var o1Y=n1Y.v[0];
	 var p1Y=e1Y.add(m1Y);
	 $r(p1Y.add(o1Y));break;
	case 2:
	 var q1Y=n1Y.v[0];
	 var r1Y=e1Y.add(m1Y);
	 $r(r1Y.add(q1Y));break;
	}
       },[e1Y,m1Y]);break;
      }
     },[c1Y,e1Y]);break;
    case 2:
     var s1Y=d1Y.v[0];
     $M(b1Y,function(t1Y){
      switch(t1Y.g){
      case 1:
       var u1Y=t1Y.v[0];
       $M(c1Y,function(v1Y){
	switch(v1Y.g){
	case 1:
	 var w1Y=v1Y.v[0];
	 var x1Y=s1Y.add(u1Y);
	 $r(x1Y.add(w1Y));break;
	case 2:
	 var y1Y=v1Y.v[0];
	 var z1Y=s1Y.add(u1Y);
	 $r(z1Y.add(y1Y));break;
	}
       },[s1Y,u1Y]);break;
      case 2:
       var A1Y=t1Y.v[0];
       $M(c1Y,function(B1Y){
	switch(B1Y.g){
	case 1:
	 var C1Y=B1Y.v[0];
	 var D1Y=s1Y.add(A1Y);
	 $r(D1Y.add(C1Y));break;
	case 2:
	 var E1Y=B1Y.v[0];
	 var F1Y=s1Y.add(A1Y);
	 $r(F1Y.add(E1Y));break;
	}
       },[s1Y,A1Y]);break;
      }
     },[c1Y,s1Y]);break;
    }
   },[b1Y,c1Y]);break;
  case 4:
   var G1Y=K1X.v[0],H1Y=K1X.v[1],I1Y=K1X.v[2],J1Y=K1X.v[3];
   var K1Y=$f(1,function(L1Y){
    $M(H1Y,function(M1Y){
     switch(M1Y.g){
     case 1:
      var N1Y=M1Y.v[0];
      $M(I1Y,function(O1Y){
       switch(O1Y.g){
       case 1:
	var P1Y=O1Y.v[0];
	$M(J1Y,function(Q1Y){
	 switch(Q1Y.g){
	 case 1:
	  var R1Y=Q1Y.v[0];
	  var T1Y=L1Y.add(N1Y);
	  var S1Y=T1Y.add(P1Y);
	  $r(S1Y.add(R1Y));break;
	 case 2:
	  var U1Y=Q1Y.v[0];
	  var W1Y=L1Y.add(N1Y);
	  var V1Y=W1Y.add(P1Y);
	  $r(V1Y.add(U1Y));break;
	 }
	},[L1Y,N1Y,P1Y]);break;
       case 2:
	var X1Y=O1Y.v[0];
	$M(J1Y,function(Y1Y){
	 switch(Y1Y.g){
	 case 1:
	  var Z1Y=Y1Y.v[0];
	  var b1Z=L1Y.add(N1Y);
	  var a1Z=b1Z.add(X1Y);
	  $r(a1Z.add(Z1Y));break;
	 case 2:
	  var c1Z=Y1Y.v[0];
	  var e1Z=L1Y.add(N1Y);
	  var d1Z=e1Z.add(X1Y);
	  $r(d1Z.add(c1Z));break;
	 }
	},[L1Y,N1Y,X1Y]);break;
       }
      },[J1Y,L1Y,N1Y]);break;
     case 2:
      var f1Z=M1Y.v[0];
      $M(I1Y,function(g1Z){
       switch(g1Z.g){
       case 1:
	var h1Z=g1Z.v[0];
	$M(J1Y,function(i1Z){
	 switch(i1Z.g){
	 case 1:
	  var j1Z=i1Z.v[0];
	  var l1Z=L1Y.add(f1Z);
	  var k1Z=l1Z.add(h1Z);
	  $r(k1Z.add(j1Z));break;
	 case 2:
	  var m1Z=i1Z.v[0];
	  var o1Z=L1Y.add(f1Z);
	  var n1Z=o1Z.add(h1Z);
	  $r(n1Z.add(m1Z));break;
	 }
	},[L1Y,f1Z,h1Z]);break;
       case 2:
	var p1Z=g1Z.v[0];
	$M(J1Y,function(q1Z){
	 switch(q1Z.g){
	 case 1:
	  var r1Z=q1Z.v[0];
	  var t1Z=L1Y.add(f1Z);
	  var s1Z=t1Z.add(p1Z);
	  $r(s1Z.add(r1Z));break;
	 case 2:
	  var u1Z=q1Z.v[0];
	  var w1Z=L1Y.add(f1Z);
	  var v1Z=w1Z.add(p1Z);
	  $r(v1Z.add(u1Z));break;
	 }
	},[L1Y,f1Z,p1Z]);break;
       }
      },[J1Y,L1Y,f1Z]);break;
     }
    },[I1Y,J1Y,L1Y]);
   },[H1Y,I1Y,J1Y],"$w$j");
   $M(G1Y,function(x1Z){
    switch(x1Z.g){
    case 1:
     var y1Z=x1Z.v[0];
     K1Y.J(y1Z);break;
    case 2:
     var z1Z=x1Z.v[0];
     K1Y.J(z1Z);break;
    }
   },[H1Y,I1Y,J1Y,K1Y]);break;
  }
 },[]);
},"$wa2");
var $$DataziSequence$h1=$F(3,function(A1Z,B1Z,C1Z){
 $M(C1Z,function(D1Z){
  switch(D1Z.g){
  case 1:
   var E1Z=$f(1,function(F1Z){
    $$DataziSequence$X.C([$$DataziSequence_zdfSizzedFingerTreezuzdcsizze,B1Z],function(G1Z){
     switch(G1Z.g){
     case 1:
      $$DataziSequence$w.J(F1Z,A1Z);break;
     case 2:
      var H1Z=G1Z.v[0],I1Z=G1Z.v[1];
      $M(A1Z,function(J1Z){
       $b(function(){
	$M(I1Z,function(L1Z){
	 switch(L1Z.g){
	 case 1:
	  var M1Z=L1Z.v[1],N1Z=L1Z.v[2];
	  $R(2,[M1Z,N1Z],"Two");break;
	 case 2:
	  var O1Z=L1Z.v[1],P1Z=L1Z.v[2],Q1Z=L1Z.v[3];
	  $R(3,[O1Z,P1Z,Q1Z],"Three");break;
	 }
	},[F1Z,J1Z,H1Z]);
       },[],function(K1Z){
	$R(3,[F1Z,J1Z,H1Z,K1Z],"Deep");
       },[F1Z,J1Z,H1Z]);
      },[F1Z,I1Z,H1Z]);break;
     }
    },[F1Z,A1Z]);
   },[B1Z,A1Z],"$j");
   $M(B1Z,function(R1Z){
    switch(R1Z.g){
    case 1:
     $$DataziSequence$g1.C([A1Z],function(S1Z){
      E1Z.J(S1Z);
     },[B1Z,A1Z,E1Z]);break;
    case 2:
     var T1Z=R1Z.v[0];
     $M(T1Z,function(U1Z){
      switch(U1Z.g){
      case 1:
       var V1Z=U1Z.v[0];
       $$DataziSequence$g1.C([A1Z],function(X1Z){
	var W1Z=V1Z.add(X1Z);
	E1Z.J(W1Z);
       },[B1Z,A1Z,E1Z,V1Z]);break;
      case 2:
       var Y1Z=U1Z.v[0];
       $$DataziSequence$g1.C([A1Z],function(a20){
	var Z1Z=Y1Z.add(a20);
	E1Z.J(Z1Z);
       },[B1Z,A1Z,E1Z,Y1Z]);break;
      }
     },[B1Z,A1Z,E1Z]);break;
    case 3:
     var b20=R1Z.v[0];
     $$DataziSequence$g1.C([A1Z],function(d20){
      var c20=b20.add(d20);
      E1Z.J(c20);
     },[B1Z,A1Z,E1Z,b20]);break;
    }
   },[B1Z,A1Z,E1Z]);break;
  case 2:
   var e20=D1Z.v[0];
   $$DataziSequence$b1.J(A1Z,B1Z,e20);break;
  }
 },[B1Z,A1Z]);
},"at libraries/containers/Data/Sequence.hs:337:1");
var $$DataziSequence$i1=$F(1,function(f20){
 $M(f20,function(g20){
  switch(g20.g){
  case 1:
   var h20=g20.v[0];
   $R(2,[h20],"Single");break;
  case 2:
   var i20=g20.v[0],j20=g20.v[1];
   $M(i20,function(k20){
    switch(k20.g){
    case 1:
     var l20=k20.v[0];
     $M(j20,function(m20){
      switch(m20.g){
      case 1:
       var n20=m20.v[0];
       var o20=$d(1,[m20],"sat");
       var p20=$d(1,[k20],"sat");
       var q20=l20.add(n20);
       $R(3,[q20,p20,$$DataziSequence_Empty,o20],"Deep");break;
      case 2:
       var r20=m20.v[0];
       var s20=$d(1,[m20],"sat");
       var t20=$d(1,[k20],"sat");
       var u20=l20.add(r20);
       $R(3,[u20,t20,$$DataziSequence_Empty,s20],"Deep");break;
      }
     },[l20,k20]);break;
    case 2:
     var v20=k20.v[0];
     $M(j20,function(w20){
      switch(w20.g){
      case 1:
       var x20=w20.v[0];
       var y20=$d(1,[w20],"sat");
       var z20=$d(1,[k20],"sat");
       var A20=v20.add(x20);
       $R(3,[A20,z20,$$DataziSequence_Empty,y20],"Deep");break;
      case 2:
       var B20=w20.v[0];
       var C20=$d(1,[w20],"sat");
       var D20=$d(1,[k20],"sat");
       var E20=v20.add(B20);
       $R(3,[E20,D20,$$DataziSequence_Empty,C20],"Deep");break;
      }
     },[k20,v20]);break;
    }
   },[j20]);break;
  case 3:
   var F20=g20.v[0],G20=g20.v[1],H20=g20.v[2];
   var I20=$f(1,function(J20){
    $M(G20,function(K20){
     switch(K20.g){
     case 1:
      var L20=K20.v[0];
      $M(H20,function(M20){
       switch(M20.g){
       case 1:
	var N20=M20.v[0];
	var O20=$d(1,[M20],"sat");
	var P20=$d(2,[F20,K20],"sat");
	var R20=J20.add(L20);
	var Q20=R20.add(N20);
	$R(3,[Q20,P20,$$DataziSequence_Empty,O20],"Deep");break;
       case 2:
	var S20=M20.v[0];
	var T20=$d(1,[M20],"sat");
	var U20=$d(2,[F20,K20],"sat");
	var W20=J20.add(L20);
	var V20=W20.add(S20);
	$R(3,[V20,U20,$$DataziSequence_Empty,T20],"Deep");break;
       }
      },[J20,L20,F20,K20]);break;
     case 2:
      var X20=K20.v[0];
      $M(H20,function(Y20){
       switch(Y20.g){
       case 1:
	var Z20=Y20.v[0];
	var a21=$d(1,[Y20],"sat");
	var b21=$d(2,[F20,K20],"sat");
	var d21=J20.add(X20);
	var c21=d21.add(Z20);
	$R(3,[c21,b21,$$DataziSequence_Empty,a21],"Deep");break;
       case 2:
	var e21=Y20.v[0];
	var f21=$d(1,[Y20],"sat");
	var g21=$d(2,[F20,K20],"sat");
	var i21=J20.add(X20);
	var h21=i21.add(e21);
	$R(3,[h21,g21,$$DataziSequence_Empty,f21],"Deep");break;
       }
      },[J20,F20,K20,X20]);break;
     }
    },[H20,J20,F20]);
   },[G20,H20,F20],"$j");
   $M(F20,function(j21){
    switch(j21.g){
    case 1:
     var k21=j21.v[0];
     I20.J(k21);break;
    case 2:
     var l21=j21.v[0];
     I20.J(l21);break;
    }
   },[G20,H20,F20,I20]);break;
  case 4:
   var m21=g20.v[0],n21=g20.v[1],o21=g20.v[2],p21=g20.v[3];
   var q21=$f(1,function(r21){
    var s21=$f(1,function(t21){
     $M(o21,function(u21){
      switch(u21.g){
      case 1:
       var v21=u21.v[0];
       $M(p21,function(w21){
	switch(w21.g){
	case 1:
	 var x21=w21.v[0];
	 var y21=$d(2,[u21,w21],"sat");
	 var z21=$d(2,[m21,n21],"sat");
	 var C21=v21.add(x21);
	 var B21=r21.add(t21);
	 var A21=B21.add(C21);
	 $R(3,[A21,z21,$$DataziSequence_Empty,y21],"Deep");break;
	case 2:
	 var D21=w21.v[0];
	 var E21=$d(2,[u21,w21],"sat");
	 var F21=$d(2,[m21,n21],"sat");
	 var I21=v21.add(D21);
	 var H21=r21.add(t21);
	 var G21=H21.add(I21);
	 $R(3,[G21,F21,$$DataziSequence_Empty,E21],"Deep");break;
	}
       },[r21,t21,v21,m21,n21,u21]);break;
      case 2:
       var J21=u21.v[0];
       $M(p21,function(K21){
	switch(K21.g){
	case 1:
	 var L21=K21.v[0];
	 var M21=$d(2,[u21,K21],"sat");
	 var N21=$d(2,[m21,n21],"sat");
	 var Q21=J21.add(L21);
	 var P21=r21.add(t21);
	 var O21=P21.add(Q21);
	 $R(3,[O21,N21,$$DataziSequence_Empty,M21],"Deep");break;
	case 2:
	 var R21=K21.v[0];
	 var S21=$d(2,[u21,K21],"sat");
	 var T21=$d(2,[m21,n21],"sat");
	 var W21=J21.add(R21);
	 var V21=r21.add(t21);
	 var U21=V21.add(W21);
	 $R(3,[U21,T21,$$DataziSequence_Empty,S21],"Deep");break;
	}
       },[r21,t21,m21,n21,u21,J21]);break;
      }
     },[p21,r21,t21,m21,n21]);
    },[o21,p21,r21,m21,n21],"$j1");
    $M(n21,function(X21){
     switch(X21.g){
     case 1:
      var Y21=X21.v[0];
      s21.J(Y21);break;
     case 2:
      var Z21=X21.v[0];
      s21.J(Z21);break;
     }
    },[o21,p21,r21,m21,n21,s21]);
   },[o21,p21,m21,n21],"$j");
   $M(m21,function(a22){
    switch(a22.g){
    case 1:
     var b22=a22.v[0];
     q21.J(b22);break;
    case 2:
     var c22=a22.v[0];
     q21.J(c22);break;
    }
   },[o21,p21,m21,n21,q21]);break;
  }
 },[]);
},"at libraries/containers/Data/Sequence.hs:393:1");
var $$DataziSequence$x1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("lookupTree of empty tree");
},"lvl19");
var $$DataziSequence$y1=$T(function(){
 $$GHCziErr_error.J($$DataziSequence$x1);
},"lvl20");
var $$DataziSequence$z1=$F(2,function(S2A,T2A){
 $M(T2A,function(U2A){
  switch(U2A.g){
  case 1:
   $A($$DataziSequence$y1);break;
  case 2:
   var V2A=U2A.v[0];
   $r([S2A,V2A]);break;
  case 3:
   var W2A=U2A.v[1],X2A=U2A.v[2],Y2A=U2A.v[3];
   var Z2A=$f(1,function(a2B){
    var b2B=S2A.lessThan(a2B)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(b2B.g){
    case 1:
     var c2B=$f(1,function(d2B){
      var e2B=S2A.lessThan(d2B)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(e2B.g){
      case 1:
       var h2B=S2A.subtract(d2B);
       $M(Y2A,function(f2B){
	switch(f2B.g){
	case 1:
	 var g2B=f2B.v[0];
	 $r([h2B,g2B]);break;
	case 2:
	 var i2B=f2B.v[0],j2B=f2B.v[1];
	 $M(i2B,function(k2B){
	  switch(k2B.g){
	  case 1:
	   var l2B=k2B.v[0];
	   var m2B=h2B.lessThan(l2B)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(m2B.g){
	   case 1:
	    var n2B=h2B.subtract(l2B);
	    $r([n2B,j2B]);break;
	   case 2:
	    $r([h2B,k2B]);break;
	   }break;
	  case 2:
	   var o2B=k2B.v[0];
	   var p2B=h2B.lessThan(o2B)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(p2B.g){
	   case 1:
	    var q2B=h2B.subtract(o2B);
	    $r([q2B,j2B]);break;
	   case 2:
	    $r([h2B,k2B]);break;
	   }break;
	  }
	 },[h2B,j2B]);break;
	case 3:
	 var r2B=f2B.v[0],s2B=f2B.v[1],t2B=f2B.v[2];
	 $M(r2B,function(u2B){
	  switch(u2B.g){
	  case 1:
	   var v2B=u2B.v[0];
	   var w2B=h2B.lessThan(v2B)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(w2B.g){
	   case 1:
	    $M(s2B,function(x2B){
	     switch(x2B.g){
	     case 1:
	      var y2B=x2B.v[0];
	      var B2B=v2B.add(y2B);
	      var z2B=h2B.lessThan(B2B)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(z2B.g){
	      case 1:
	       var A2B=h2B.subtract(B2B);
	       $r([A2B,t2B]);break;
	      case 2:
	       var C2B=h2B.subtract(v2B);
	       $r([C2B,x2B]);break;
	      }break;
	     case 2:
	      var D2B=x2B.v[0];
	      var G2B=v2B.add(D2B);
	      var E2B=h2B.lessThan(G2B)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(E2B.g){
	      case 1:
	       var F2B=h2B.subtract(G2B);
	       $r([F2B,t2B]);break;
	      case 2:
	       var H2B=h2B.subtract(v2B);
	       $r([H2B,x2B]);break;
	      }break;
	     }
	    },[h2B,v2B,t2B]);break;
	   case 2:
	    $r([h2B,u2B]);break;
	   }break;
	  case 2:
	   var I2B=u2B.v[0];
	   var J2B=h2B.lessThan(I2B)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(J2B.g){
	   case 1:
	    $M(s2B,function(K2B){
	     switch(K2B.g){
	     case 1:
	      var L2B=K2B.v[0];
	      var O2B=I2B.add(L2B);
	      var M2B=h2B.lessThan(O2B)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(M2B.g){
	      case 1:
	       var N2B=h2B.subtract(O2B);
	       $r([N2B,t2B]);break;
	      case 2:
	       var P2B=h2B.subtract(I2B);
	       $r([P2B,K2B]);break;
	      }break;
	     case 2:
	      var Q2B=K2B.v[0];
	      var T2B=I2B.add(Q2B);
	      var R2B=h2B.lessThan(T2B)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(R2B.g){
	      case 1:
	       var S2B=h2B.subtract(T2B);
	       $r([S2B,t2B]);break;
	      case 2:
	       var U2B=h2B.subtract(I2B);
	       $r([U2B,K2B]);break;
	      }break;
	     }
	    },[h2B,t2B,I2B]);break;
	   case 2:
	    $r([h2B,u2B]);break;
	   }break;
	  }
	 },[h2B,s2B,t2B]);break;
	case 4:
	 var V2B=f2B.v[0],W2B=f2B.v[1],X2B=f2B.v[2],Y2B=f2B.v[3];
	 $M(V2B,function(Z2B){
	  switch(Z2B.g){
	  case 1:
	   var a2C=Z2B.v[0];
	   var b2C=h2B.lessThan(a2C)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(b2C.g){
	   case 1:
	    $M(W2B,function(c2C){
	     switch(c2C.g){
	     case 1:
	      var d2C=c2C.v[0];
	      var l2C=a2C.add(d2C);
	      var e2C=h2B.lessThan(l2C)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(e2C.g){
	      case 1:
	       $M(X2B,function(f2C){
		switch(f2C.g){
		case 1:
		 var g2C=f2C.v[0];
		 var j2C=l2C.add(g2C);
		 var h2C=h2B.lessThan(j2C)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(h2C.g){
		 case 1:
		  var i2C=h2B.subtract(j2C);
		  $r([i2C,Y2B]);break;
		 case 2:
		  var k2C=h2B.subtract(l2C);
		  $r([k2C,f2C]);break;
		 }break;
		case 2:
		 var m2C=f2C.v[0];
		 var p2C=l2C.add(m2C);
		 var n2C=h2B.lessThan(p2C)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(n2C.g){
		 case 1:
		  var o2C=h2B.subtract(p2C);
		  $r([o2C,Y2B]);break;
		 case 2:
		  var q2C=h2B.subtract(l2C);
		  $r([q2C,f2C]);break;
		 }break;
		}
	       },[h2B,l2C,Y2B]);break;
	      case 2:
	       var r2C=h2B.subtract(a2C);
	       $r([r2C,c2C]);break;
	      }break;
	     case 2:
	      var s2C=c2C.v[0];
	      var A2C=a2C.add(s2C);
	      var t2C=h2B.lessThan(A2C)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(t2C.g){
	      case 1:
	       $M(X2B,function(u2C){
		switch(u2C.g){
		case 1:
		 var v2C=u2C.v[0];
		 var y2C=A2C.add(v2C);
		 var w2C=h2B.lessThan(y2C)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(w2C.g){
		 case 1:
		  var x2C=h2B.subtract(y2C);
		  $r([x2C,Y2B]);break;
		 case 2:
		  var z2C=h2B.subtract(A2C);
		  $r([z2C,u2C]);break;
		 }break;
		case 2:
		 var B2C=u2C.v[0];
		 var E2C=A2C.add(B2C);
		 var C2C=h2B.lessThan(E2C)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(C2C.g){
		 case 1:
		  var D2C=h2B.subtract(E2C);
		  $r([D2C,Y2B]);break;
		 case 2:
		  var F2C=h2B.subtract(A2C);
		  $r([F2C,u2C]);break;
		 }break;
		}
	       },[h2B,Y2B,A2C]);break;
	      case 2:
	       var G2C=h2B.subtract(a2C);
	       $r([G2C,c2C]);break;
	      }break;
	     }
	    },[h2B,a2C,X2B,Y2B]);break;
	   case 2:
	    $r([h2B,Z2B]);break;
	   }break;
	  case 2:
	   var H2C=Z2B.v[0];
	   var I2C=h2B.lessThan(H2C)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(I2C.g){
	   case 1:
	    $M(W2B,function(J2C){
	     switch(J2C.g){
	     case 1:
	      var K2C=J2C.v[0];
	      var S2C=H2C.add(K2C);
	      var L2C=h2B.lessThan(S2C)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(L2C.g){
	      case 1:
	       $M(X2B,function(M2C){
		switch(M2C.g){
		case 1:
		 var N2C=M2C.v[0];
		 var Q2C=S2C.add(N2C);
		 var O2C=h2B.lessThan(Q2C)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(O2C.g){
		 case 1:
		  var P2C=h2B.subtract(Q2C);
		  $r([P2C,Y2B]);break;
		 case 2:
		  var R2C=h2B.subtract(S2C);
		  $r([R2C,M2C]);break;
		 }break;
		case 2:
		 var T2C=M2C.v[0];
		 var W2C=S2C.add(T2C);
		 var U2C=h2B.lessThan(W2C)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(U2C.g){
		 case 1:
		  var V2C=h2B.subtract(W2C);
		  $r([V2C,Y2B]);break;
		 case 2:
		  var X2C=h2B.subtract(S2C);
		  $r([X2C,M2C]);break;
		 }break;
		}
	       },[h2B,Y2B,S2C]);break;
	      case 2:
	       var Y2C=h2B.subtract(H2C);
	       $r([Y2C,J2C]);break;
	      }break;
	     case 2:
	      var Z2C=J2C.v[0];
	      var h2D=H2C.add(Z2C);
	      var a2D=h2B.lessThan(h2D)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(a2D.g){
	      case 1:
	       $M(X2B,function(b2D){
		switch(b2D.g){
		case 1:
		 var c2D=b2D.v[0];
		 var f2D=h2D.add(c2D);
		 var d2D=h2B.lessThan(f2D)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(d2D.g){
		 case 1:
		  var e2D=h2B.subtract(f2D);
		  $r([e2D,Y2B]);break;
		 case 2:
		  var g2D=h2B.subtract(h2D);
		  $r([g2D,b2D]);break;
		 }break;
		case 2:
		 var i2D=b2D.v[0];
		 var l2D=h2D.add(i2D);
		 var j2D=h2B.lessThan(l2D)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(j2D.g){
		 case 1:
		  var k2D=h2B.subtract(l2D);
		  $r([k2D,Y2B]);break;
		 case 2:
		  var m2D=h2B.subtract(h2D);
		  $r([m2D,b2D]);break;
		 }break;
		}
	       },[h2B,Y2B,h2D]);break;
	      case 2:
	       var n2D=h2B.subtract(H2C);
	       $r([n2D,J2C]);break;
	      }break;
	     }
	    },[h2B,X2B,Y2B,H2C]);break;
	   case 2:
	    $r([h2B,Z2B]);break;
	   }break;
	  }
	 },[h2B,W2B,X2B,Y2B]);break;
	}
       },[h2B]);break;
      case 2:
       var f2E=S2A.subtract(a2B);
       $$DataziSequence$z1.C([f2E,X2A],function(o2D){
	var p2D=o2D[0],q2D=o2D[1];
	$M(q2D,function(r2D){
	 switch(r2D.g){
	 case 1:
	  var s2D=r2D.v[1],t2D=r2D.v[2];
	  $M(s2D,function(u2D){
	   switch(u2D.g){
	   case 1:
	    var v2D=u2D.v[0];
	    var w2D=p2D.lessThan(v2D)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(w2D.g){
	    case 1:
	     var x2D=p2D.subtract(v2D);
	     $r([x2D,t2D]);break;
	    case 2:
	     $r([p2D,u2D]);break;
	    }break;
	   case 2:
	    var y2D=u2D.v[0];
	    var z2D=p2D.lessThan(y2D)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(z2D.g){
	    case 1:
	     var A2D=p2D.subtract(y2D);
	     $r([A2D,t2D]);break;
	    case 2:
	     $r([p2D,u2D]);break;
	    }break;
	   }
	  },[p2D,t2D]);break;
	 case 2:
	  var B2D=r2D.v[1],C2D=r2D.v[2],D2D=r2D.v[3];
	  $M(B2D,function(E2D){
	   switch(E2D.g){
	   case 1:
	    var F2D=E2D.v[0];
	    var G2D=p2D.lessThan(F2D)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(G2D.g){
	    case 1:
	     $M(C2D,function(H2D){
	      switch(H2D.g){
	      case 1:
	       var I2D=H2D.v[0];
	       var L2D=F2D.add(I2D);
	       var J2D=p2D.lessThan(L2D)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(J2D.g){
	       case 1:
		var K2D=p2D.subtract(L2D);
		$r([K2D,D2D]);break;
	       case 2:
		var M2D=p2D.subtract(F2D);
		$r([M2D,H2D]);break;
	       }break;
	      case 2:
	       var N2D=H2D.v[0];
	       var Q2D=F2D.add(N2D);
	       var O2D=p2D.lessThan(Q2D)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(O2D.g){
	       case 1:
		var P2D=p2D.subtract(Q2D);
		$r([P2D,D2D]);break;
	       case 2:
		var R2D=p2D.subtract(F2D);
		$r([R2D,H2D]);break;
	       }break;
	      }
	     },[p2D,F2D,D2D]);break;
	    case 2:
	     $r([p2D,E2D]);break;
	    }break;
	   case 2:
	    var S2D=E2D.v[0];
	    var T2D=p2D.lessThan(S2D)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(T2D.g){
	    case 1:
	     $M(C2D,function(U2D){
	      switch(U2D.g){
	      case 1:
	       var V2D=U2D.v[0];
	       var Y2D=S2D.add(V2D);
	       var W2D=p2D.lessThan(Y2D)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(W2D.g){
	       case 1:
		var X2D=p2D.subtract(Y2D);
		$r([X2D,D2D]);break;
	       case 2:
		var Z2D=p2D.subtract(S2D);
		$r([Z2D,U2D]);break;
	       }break;
	      case 2:
	       var a2E=U2D.v[0];
	       var d2E=S2D.add(a2E);
	       var b2E=p2D.lessThan(d2E)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(b2E.g){
	       case 1:
		var c2E=p2D.subtract(d2E);
		$r([c2E,D2D]);break;
	       case 2:
		var e2E=p2D.subtract(S2D);
		$r([e2E,U2D]);break;
	       }break;
	      }
	     },[p2D,D2D,S2D]);break;
	    case 2:
	     $r([p2D,E2D]);break;
	    }break;
	   }
	  },[p2D,C2D,D2D]);break;
	 }
	},[p2D]);
       },[]);break;
      }
     },[S2A,a2B,Y2A,X2A],"$w$j1");
     $M(X2A,function(g2E){
      switch(g2E.g){
      case 1:
       c2B.J(a2B);break;
      case 2:
       var h2E=g2E.v[0];
       $M(h2E,function(i2E){
	switch(i2E.g){
	case 1:
	 var j2E=i2E.v[0];
	 var k2E=a2B.add(j2E);
	 c2B.J(k2E);break;
	case 2:
	 var l2E=i2E.v[0];
	 var m2E=a2B.add(l2E);
	 c2B.J(m2E);break;
	}
       },[S2A,a2B,Y2A,X2A,c2B]);break;
      case 3:
       var n2E=g2E.v[0];
       var o2E=a2B.add(n2E);
       c2B.J(o2E);break;
      }
     },[S2A,a2B,Y2A,X2A,c2B]);break;
    case 2:
     $M(W2A,function(p2E){
      switch(p2E.g){
      case 1:
       var q2E=p2E.v[0];
       $r([S2A,q2E]);break;
      case 2:
       var r2E=p2E.v[0],s2E=p2E.v[1];
       $M(r2E,function(t2E){
	switch(t2E.g){
	case 1:
	 var u2E=t2E.v[0];
	 var v2E=S2A.lessThan(u2E)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(v2E.g){
	 case 1:
	  var w2E=S2A.subtract(u2E);
	  $r([w2E,s2E]);break;
	 case 2:
	  $r([S2A,t2E]);break;
	 }break;
	case 2:
	 var x2E=t2E.v[0];
	 var y2E=S2A.lessThan(x2E)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(y2E.g){
	 case 1:
	  var z2E=S2A.subtract(x2E);
	  $r([z2E,s2E]);break;
	 case 2:
	  $r([S2A,t2E]);break;
	 }break;
	}
       },[S2A,s2E]);break;
      case 3:
       var A2E=p2E.v[0],B2E=p2E.v[1],C2E=p2E.v[2];
       $M(A2E,function(D2E){
	switch(D2E.g){
	case 1:
	 var E2E=D2E.v[0];
	 var F2E=S2A.lessThan(E2E)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(F2E.g){
	 case 1:
	  $M(B2E,function(G2E){
	   switch(G2E.g){
	   case 1:
	    var H2E=G2E.v[0];
	    var K2E=E2E.add(H2E);
	    var I2E=S2A.lessThan(K2E)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(I2E.g){
	    case 1:
	     var J2E=S2A.subtract(K2E);
	     $r([J2E,C2E]);break;
	    case 2:
	     var L2E=S2A.subtract(E2E);
	     $r([L2E,G2E]);break;
	    }break;
	   case 2:
	    var M2E=G2E.v[0];
	    var P2E=E2E.add(M2E);
	    var N2E=S2A.lessThan(P2E)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(N2E.g){
	    case 1:
	     var O2E=S2A.subtract(P2E);
	     $r([O2E,C2E]);break;
	    case 2:
	     var Q2E=S2A.subtract(E2E);
	     $r([Q2E,G2E]);break;
	    }break;
	   }
	  },[S2A,E2E,C2E]);break;
	 case 2:
	  $r([S2A,D2E]);break;
	 }break;
	case 2:
	 var R2E=D2E.v[0];
	 var S2E=S2A.lessThan(R2E)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(S2E.g){
	 case 1:
	  $M(B2E,function(T2E){
	   switch(T2E.g){
	   case 1:
	    var U2E=T2E.v[0];
	    var X2E=R2E.add(U2E);
	    var V2E=S2A.lessThan(X2E)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(V2E.g){
	    case 1:
	     var W2E=S2A.subtract(X2E);
	     $r([W2E,C2E]);break;
	    case 2:
	     var Y2E=S2A.subtract(R2E);
	     $r([Y2E,T2E]);break;
	    }break;
	   case 2:
	    var Z2E=T2E.v[0];
	    var c2F=R2E.add(Z2E);
	    var a2F=S2A.lessThan(c2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(a2F.g){
	    case 1:
	     var b2F=S2A.subtract(c2F);
	     $r([b2F,C2E]);break;
	    case 2:
	     var d2F=S2A.subtract(R2E);
	     $r([d2F,T2E]);break;
	    }break;
	   }
	  },[S2A,C2E,R2E]);break;
	 case 2:
	  $r([S2A,D2E]);break;
	 }break;
	}
       },[S2A,B2E,C2E]);break;
      case 4:
       var e2F=p2E.v[0],f2F=p2E.v[1],g2F=p2E.v[2],h2F=p2E.v[3];
       $M(e2F,function(i2F){
	switch(i2F.g){
	case 1:
	 var j2F=i2F.v[0];
	 var k2F=S2A.lessThan(j2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(k2F.g){
	 case 1:
	  $M(f2F,function(l2F){
	   switch(l2F.g){
	   case 1:
	    var m2F=l2F.v[0];
	    var u2F=j2F.add(m2F);
	    var n2F=S2A.lessThan(u2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(n2F.g){
	    case 1:
	     $M(g2F,function(o2F){
	      switch(o2F.g){
	      case 1:
	       var p2F=o2F.v[0];
	       var s2F=u2F.add(p2F);
	       var q2F=S2A.lessThan(s2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(q2F.g){
	       case 1:
		var r2F=S2A.subtract(s2F);
		$r([r2F,h2F]);break;
	       case 2:
		var t2F=S2A.subtract(u2F);
		$r([t2F,o2F]);break;
	       }break;
	      case 2:
	       var v2F=o2F.v[0];
	       var y2F=u2F.add(v2F);
	       var w2F=S2A.lessThan(y2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(w2F.g){
	       case 1:
		var x2F=S2A.subtract(y2F);
		$r([x2F,h2F]);break;
	       case 2:
		var z2F=S2A.subtract(u2F);
		$r([z2F,o2F]);break;
	       }break;
	      }
	     },[S2A,u2F,h2F]);break;
	    case 2:
	     var A2F=S2A.subtract(j2F);
	     $r([A2F,l2F]);break;
	    }break;
	   case 2:
	    var B2F=l2F.v[0];
	    var J2F=j2F.add(B2F);
	    var C2F=S2A.lessThan(J2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(C2F.g){
	    case 1:
	     $M(g2F,function(D2F){
	      switch(D2F.g){
	      case 1:
	       var E2F=D2F.v[0];
	       var H2F=J2F.add(E2F);
	       var F2F=S2A.lessThan(H2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(F2F.g){
	       case 1:
		var G2F=S2A.subtract(H2F);
		$r([G2F,h2F]);break;
	       case 2:
		var I2F=S2A.subtract(J2F);
		$r([I2F,D2F]);break;
	       }break;
	      case 2:
	       var K2F=D2F.v[0];
	       var N2F=J2F.add(K2F);
	       var L2F=S2A.lessThan(N2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(L2F.g){
	       case 1:
		var M2F=S2A.subtract(N2F);
		$r([M2F,h2F]);break;
	       case 2:
		var O2F=S2A.subtract(J2F);
		$r([O2F,D2F]);break;
	       }break;
	      }
	     },[S2A,h2F,J2F]);break;
	    case 2:
	     var P2F=S2A.subtract(j2F);
	     $r([P2F,l2F]);break;
	    }break;
	   }
	  },[S2A,j2F,g2F,h2F]);break;
	 case 2:
	  $r([S2A,i2F]);break;
	 }break;
	case 2:
	 var Q2F=i2F.v[0];
	 var R2F=S2A.lessThan(Q2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(R2F.g){
	 case 1:
	  $M(f2F,function(S2F){
	   switch(S2F.g){
	   case 1:
	    var T2F=S2F.v[0];
	    var b2G=Q2F.add(T2F);
	    var U2F=S2A.lessThan(b2G)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(U2F.g){
	    case 1:
	     $M(g2F,function(V2F){
	      switch(V2F.g){
	      case 1:
	       var W2F=V2F.v[0];
	       var Z2F=b2G.add(W2F);
	       var X2F=S2A.lessThan(Z2F)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(X2F.g){
	       case 1:
		var Y2F=S2A.subtract(Z2F);
		$r([Y2F,h2F]);break;
	       case 2:
		var a2G=S2A.subtract(b2G);
		$r([a2G,V2F]);break;
	       }break;
	      case 2:
	       var c2G=V2F.v[0];
	       var f2G=b2G.add(c2G);
	       var d2G=S2A.lessThan(f2G)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(d2G.g){
	       case 1:
		var e2G=S2A.subtract(f2G);
		$r([e2G,h2F]);break;
	       case 2:
		var g2G=S2A.subtract(b2G);
		$r([g2G,V2F]);break;
	       }break;
	      }
	     },[S2A,h2F,b2G]);break;
	    case 2:
	     var h2G=S2A.subtract(Q2F);
	     $r([h2G,S2F]);break;
	    }break;
	   case 2:
	    var i2G=S2F.v[0];
	    var q2G=Q2F.add(i2G);
	    var j2G=S2A.lessThan(q2G)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(j2G.g){
	    case 1:
	     $M(g2F,function(k2G){
	      switch(k2G.g){
	      case 1:
	       var l2G=k2G.v[0];
	       var o2G=q2G.add(l2G);
	       var m2G=S2A.lessThan(o2G)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(m2G.g){
	       case 1:
		var n2G=S2A.subtract(o2G);
		$r([n2G,h2F]);break;
	       case 2:
		var p2G=S2A.subtract(q2G);
		$r([p2G,k2G]);break;
	       }break;
	      case 2:
	       var r2G=k2G.v[0];
	       var u2G=q2G.add(r2G);
	       var s2G=S2A.lessThan(u2G)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(s2G.g){
	       case 1:
		var t2G=S2A.subtract(u2G);
		$r([t2G,h2F]);break;
	       case 2:
		var v2G=S2A.subtract(q2G);
		$r([v2G,k2G]);break;
	       }break;
	      }
	     },[S2A,h2F,q2G]);break;
	    case 2:
	     var w2G=S2A.subtract(Q2F);
	     $r([w2G,S2F]);break;
	    }break;
	   }
	  },[S2A,g2F,h2F,Q2F]);break;
	 case 2:
	  $r([S2A,i2F]);break;
	 }break;
	}
       },[S2A,f2F,g2F,h2F]);break;
      }
     },[S2A]);break;
    }
   },[S2A,Y2A,X2A,W2A],"$w$j");
   $M(W2A,function(x2G){
    switch(x2G.g){
    case 1:
     var y2G=x2G.v[0];
     $M(y2G,function(z2G){
      switch(z2G.g){
      case 1:
       var A2G=z2G.v[0];
       Z2A.J(A2G);break;
      case 2:
       var B2G=z2G.v[0];
       Z2A.J(B2G);break;
      }
     },[S2A,Y2A,X2A,W2A,Z2A]);break;
    case 2:
     var C2G=x2G.v[0],D2G=x2G.v[1];
     $M(C2G,function(E2G){
      switch(E2G.g){
      case 1:
       var F2G=E2G.v[0];
       $M(D2G,function(G2G){
	switch(G2G.g){
	case 1:
	 var H2G=G2G.v[0];
	 var I2G=F2G.add(H2G);
	 Z2A.J(I2G);break;
	case 2:
	 var J2G=G2G.v[0];
	 var K2G=F2G.add(J2G);
	 Z2A.J(K2G);break;
	}
       },[S2A,Y2A,X2A,W2A,Z2A,F2G]);break;
      case 2:
       var L2G=E2G.v[0];
       $M(D2G,function(M2G){
	switch(M2G.g){
	case 1:
	 var N2G=M2G.v[0];
	 var O2G=L2G.add(N2G);
	 Z2A.J(O2G);break;
	case 2:
	 var P2G=M2G.v[0];
	 var Q2G=L2G.add(P2G);
	 Z2A.J(Q2G);break;
	}
       },[S2A,Y2A,X2A,W2A,Z2A,L2G]);break;
      }
     },[S2A,Y2A,X2A,W2A,Z2A,D2G]);break;
    case 3:
     var R2G=x2G.v[0],S2G=x2G.v[1],T2G=x2G.v[2];
     var U2G=$f(1,function(V2G){
      $M(S2G,function(W2G){
       switch(W2G.g){
       case 1:
	var X2G=W2G.v[0];
	$M(T2G,function(Y2G){
	 switch(Y2G.g){
	 case 1:
	  var Z2G=Y2G.v[0];
	  var b2H=V2G.add(X2G);
	  var a2H=b2H.add(Z2G);
	  Z2A.J(a2H);break;
	 case 2:
	  var c2H=Y2G.v[0];
	  var e2H=V2G.add(X2G);
	  var d2H=e2H.add(c2H);
	  Z2A.J(d2H);break;
	 }
	},[S2A,Y2A,X2A,W2A,Z2A,V2G,X2G]);break;
       case 2:
	var f2H=W2G.v[0];
	$M(T2G,function(g2H){
	 switch(g2H.g){
	 case 1:
	  var h2H=g2H.v[0];
	  var j2H=V2G.add(f2H);
	  var i2H=j2H.add(h2H);
	  Z2A.J(i2H);break;
	 case 2:
	  var k2H=g2H.v[0];
	  var m2H=V2G.add(f2H);
	  var l2H=m2H.add(k2H);
	  Z2A.J(l2H);break;
	 }
	},[S2A,Y2A,X2A,W2A,Z2A,V2G,f2H]);break;
       }
      },[S2A,Y2A,X2A,W2A,Z2A,T2G,V2G]);
     },[Z2A,S2G,T2G],"$w$j1");
     $M(R2G,function(n2H){
      switch(n2H.g){
      case 1:
       var o2H=n2H.v[0];
       U2G.J(o2H);break;
      case 2:
       var p2H=n2H.v[0];
       U2G.J(p2H);break;
      }
     },[S2A,Y2A,X2A,W2A,Z2A,S2G,T2G,U2G]);break;
    case 4:
     var q2H=x2G.v[0],r2H=x2G.v[1],s2H=x2G.v[2],t2H=x2G.v[3];
     var u2H=$f(1,function(v2H){
      var w2H=$f(1,function(x2H){
       $M(s2H,function(y2H){
	switch(y2H.g){
	case 1:
	 var z2H=y2H.v[0];
	 $M(t2H,function(A2H){
	  switch(A2H.g){
	  case 1:
	   var B2H=A2H.v[0];
	   var E2H=v2H.add(x2H);
	   var D2H=E2H.add(z2H);
	   var C2H=D2H.add(B2H);
	   Z2A.J(C2H);break;
	  case 2:
	   var F2H=A2H.v[0];
	   var I2H=v2H.add(x2H);
	   var H2H=I2H.add(z2H);
	   var G2H=H2H.add(F2H);
	   Z2A.J(G2H);break;
	  }
	 },[S2A,Y2A,X2A,W2A,Z2A,v2H,x2H,z2H]);break;
	case 2:
	 var J2H=y2H.v[0];
	 $M(t2H,function(K2H){
	  switch(K2H.g){
	  case 1:
	   var L2H=K2H.v[0];
	   var O2H=v2H.add(x2H);
	   var N2H=O2H.add(J2H);
	   var M2H=N2H.add(L2H);
	   Z2A.J(M2H);break;
	  case 2:
	   var P2H=K2H.v[0];
	   var S2H=v2H.add(x2H);
	   var R2H=S2H.add(J2H);
	   var Q2H=R2H.add(P2H);
	   Z2A.J(Q2H);break;
	  }
	 },[S2A,Y2A,X2A,W2A,Z2A,v2H,x2H,J2H]);break;
	}
       },[S2A,Y2A,X2A,W2A,Z2A,t2H,v2H,x2H]);
      },[Z2A,s2H,t2H,v2H],"$w$j2");
      $M(r2H,function(T2H){
       switch(T2H.g){
       case 1:
	var U2H=T2H.v[0];
	w2H.J(U2H);break;
       case 2:
	var V2H=T2H.v[0];
	w2H.J(V2H);break;
       }
      },[S2A,Y2A,X2A,W2A,Z2A,s2H,t2H,v2H,w2H]);
     },[Z2A,s2H,t2H,r2H],"$w$j1");
     $M(q2H,function(W2H){
      switch(W2H.g){
      case 1:
       var X2H=W2H.v[0];
       u2H.J(X2H);break;
      case 2:
       var Y2H=W2H.v[0];
       u2H.J(Y2H);break;
      }
     },[S2A,Y2A,X2A,W2A,Z2A,s2H,t2H,r2H,u2H]);break;
    }
   },[S2A,Y2A,X2A,W2A,Z2A]);break;
  }
 },[S2A]);
},"at libraries/containers/Data/Sequence.hs:1056:1");
var $$DataziSequence$A1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("index out of bounds");
},"lvl21");
var $$DataziSequence$B1=$T(function(){
 $$GHCziErr_error.J($$DataziSequence$A1);
},"lvl22");
var $$DataziSequence$C1=$T(function(){
 $$GHCziErr_error.J($$DataziSequence$x1);
},"lvl23");
var $$DataziSequence$G1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("splitTree of empty tree");
},"lvl26");
var $$DataziSequence$H1=$T(function(){
 $$GHCziErr_error.J($$DataziSequence$G1);
},"lvl27");
var $$DataziSequence$I1=$F(2,function(a2O,b2O){
 $M(b2O,function(c2O){
  switch(c2O.g){
  case 1:
   $A($$DataziSequence$H1);break;
  case 2:
   var d2O=c2O.v[0];
   $r([$$DataziSequence_Empty,d2O,$$DataziSequence_Empty]);break;
  case 3:
   var e2O=c2O.v[1],f2O=c2O.v[2],g2O=c2O.v[3];
   var h2O=$f(1,function(i2O){
    var j2O=a2O.lessThan(i2O)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(j2O.g){
    case 1:
     var k2O=$f(1,function(l2O){
      var m2O=a2O.lessThan(l2O)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(m2O.g){
      case 1:
       var v2O=a2O.subtract(l2O);
       $$DataziSequence$R.C([v2O,g2O],function(n2O){
	var o2O=n2O[0],p2O=n2O[1],q2O=n2O[2];
	var r2O=$t(function(){
	 $M(q2O,function(s2O){
	  switch(s2O.g){
	  case 1:
	   $R(1,[],"Empty");break;
	  case 2:
	   var t2O=s2O.v[0];
	   $$DataziSequence$i1.J(t2O);break;
	  }
	 },[]);
	},[q2O],"sat");
	var u2O=$t(function(){
	 $$DataziSequence$h1.J(e2O,f2O,o2O);
	},[e2O,f2O,o2O],"sat");
	$r([u2O,p2O,r2O]);
       },[e2O,f2O]);break;
      case 2:
       var y2P=a2O.subtract(i2O);
       $$DataziSequence$I1.C([y2P,f2O],function(w2O){
	var x2O=w2O[0],y2O=w2O[1],z2O=w2O[2];
	var A2O=$f(1,function(B2O){
	 $M(y2O,function(C2O){
	  switch(C2O.g){
	  case 1:
	   var D2O=C2O.v[1],E2O=C2O.v[2];
	   var F2O=$f(1,function(G2O){
	    var H2O=B2O.lessThan(G2O)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(H2O.g){
	    case 1:
	     var I2O=$t(function(){
	      $$DataziSequence$e1.J($$DataziMaybe_Nothing,z2O,g2O);
	     },[g2O,z2O],"sat");
	     var J2O=$t(function(){
	      var K2O=$d(1,[D2O],"sat");
	      var L2O=$d(2,[K2O],"sat");
	      $$DataziSequence$h1.J(e2O,x2O,L2O);
	     },[e2O,x2O,D2O],"sat");
	     $r([J2O,E2O,I2O]);break;
	    case 2:
	     var M2O=$t(function(){
	      var N2O=$d(1,[E2O],"sat");
	      var O2O=$d(2,[N2O],"sat");
	      $$DataziSequence$e1.J(O2O,z2O,g2O);
	     },[g2O,E2O,z2O],"sat");
	     var P2O=$t(function(){
	      $$DataziSequence$h1.J(e2O,x2O,$$DataziMaybe_Nothing);
	     },[e2O,x2O],"sat");
	     $r([P2O,D2O,M2O]);break;
	    }
	   },[g2O,e2O,B2O,x2O,D2O,E2O,z2O],"$w$j2");
	   $M(D2O,function(Q2O){
	    switch(Q2O.g){
	    case 1:
	     var R2O=Q2O.v[0];
	     F2O.J(R2O);break;
	    case 2:
	     var S2O=Q2O.v[0];
	     F2O.J(S2O);break;
	    }
	   },[g2O,e2O,B2O,x2O,D2O,E2O,z2O,F2O]);break;
	  case 2:
	   var T2O=C2O.v[1],U2O=C2O.v[2],V2O=C2O.v[3];
	   var W2O=$f(1,function(X2O){
	    var Y2O=B2O.lessThan(X2O)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Y2O.g){
	    case 1:
	     var Z2O=$f(1,function(a2P){
	      var m2P=X2O.add(a2P);
	      var b2P=B2O.lessThan(m2P)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(b2P.g){
	      case 1:
	       var c2P=$t(function(){
		$$DataziSequence$e1.J($$DataziMaybe_Nothing,z2O,g2O);
	       },[g2O,z2O],"sat");
	       var d2P=$t(function(){
		var e2P=$d(2,[T2O,U2O],"sat");
		var f2P=$d(2,[e2P],"sat");
		$$DataziSequence$h1.J(e2O,x2O,f2P);
	       },[e2O,x2O,T2O,U2O],"sat");
	       $r([d2P,V2O,c2P]);break;
	      case 2:
	       var g2P=$t(function(){
		var h2P=$d(1,[V2O],"sat");
		var i2P=$d(2,[h2P],"sat");
		$$DataziSequence$e1.J(i2P,z2O,g2O);
	       },[g2O,z2O,V2O],"sat");
	       var j2P=$t(function(){
		var k2P=$d(1,[T2O],"sat");
		var l2P=$d(2,[k2P],"sat");
		$$DataziSequence$h1.J(e2O,x2O,l2P);
	       },[e2O,x2O,T2O],"sat");
	       $r([j2P,U2O,g2P]);break;
	      }
	     },[g2O,e2O,B2O,x2O,z2O,X2O,T2O,U2O,V2O],"$w$j3");
	     $M(U2O,function(n2P){
	      switch(n2P.g){
	      case 1:
	       var o2P=n2P.v[0];
	       Z2O.J(o2P);break;
	      case 2:
	       var p2P=n2P.v[0];
	       Z2O.J(p2P);break;
	      }
	     },[g2O,e2O,B2O,x2O,z2O,X2O,T2O,U2O,V2O,Z2O]);break;
	    case 2:
	     var q2P=$t(function(){
	      var r2P=$d(2,[U2O,V2O],"sat");
	      var s2P=$d(2,[r2P],"sat");
	      $$DataziSequence$e1.J(s2P,z2O,g2O);
	     },[g2O,z2O,U2O,V2O],"sat");
	     var t2P=$t(function(){
	      $$DataziSequence$h1.J(e2O,x2O,$$DataziMaybe_Nothing);
	     },[e2O,x2O],"sat");
	     $r([t2P,T2O,q2P]);break;
	    }
	   },[g2O,e2O,B2O,x2O,z2O,T2O,U2O,V2O],"$w$j2");
	   $M(T2O,function(u2P){
	    switch(u2P.g){
	    case 1:
	     var v2P=u2P.v[0];
	     W2O.J(v2P);break;
	    case 2:
	     var w2P=u2P.v[0];
	     W2O.J(w2P);break;
	    }
	   },[g2O,e2O,B2O,x2O,z2O,T2O,U2O,V2O,W2O]);break;
	  }
	 },[g2O,e2O,B2O,x2O,z2O]);
	},[g2O,e2O,y2O,x2O,z2O],"$j");
	$M(x2O,function(x2P){
	 switch(x2P.g){
	 case 1:
	  A2O.J(y2P);break;
	 case 2:
	  var z2P=x2P.v[0];
	  $M(z2P,function(A2P){
	   switch(A2P.g){
	   case 1:
	    var B2P=A2P.v[0];
	    var C2P=y2P.subtract(B2P);
	    A2O.J(C2P);break;
	   case 2:
	    var D2P=A2P.v[0];
	    var E2P=y2P.subtract(D2P);
	    A2O.J(E2P);break;
	   }
	  },[g2O,e2O,y2P,y2O,x2O,z2O,A2O]);break;
	 case 3:
	  var F2P=x2P.v[0];
	  var G2P=y2P.subtract(F2P);
	  A2O.J(G2P);break;
	 }
	},[g2O,e2O,y2P,y2O,x2O,z2O,A2O]);
       },[g2O,e2O,y2P]);break;
      }
     },[a2O,i2O,g2O,e2O,f2O],"$w$j1");
     $M(f2O,function(H2P){
      switch(H2P.g){
      case 1:
       k2O.J(i2O);break;
      case 2:
       var I2P=H2P.v[0];
       $M(I2P,function(J2P){
	switch(J2P.g){
	case 1:
	 var K2P=J2P.v[0];
	 var L2P=i2O.add(K2P);
	 k2O.J(L2P);break;
	case 2:
	 var M2P=J2P.v[0];
	 var N2P=i2O.add(M2P);
	 k2O.J(N2P);break;
	}
       },[a2O,i2O,g2O,e2O,f2O,k2O]);break;
      case 3:
       var O2P=H2P.v[0];
       var P2P=i2O.add(O2P);
       k2O.J(P2P);break;
      }
     },[a2O,i2O,g2O,e2O,f2O,k2O]);break;
    case 2:
     $$DataziSequence$R.C([a2O,e2O],function(Q2P){
      var R2P=Q2P[0],S2P=Q2P[1],T2P=Q2P[2];
      var U2P=$t(function(){
       $$DataziSequence$e1.J(T2P,f2O,g2O);
      },[g2O,f2O,T2P],"sat");
      var V2P=$t(function(){
       $M(R2P,function(W2P){
	switch(W2P.g){
	case 1:
	 $R(1,[],"Empty");break;
	case 2:
	 var X2P=W2P.v[0];
	 $$DataziSequence$i1.J(X2P);break;
	}
       },[]);
      },[R2P],"sat");
      $r([V2P,S2P,U2P]);
     },[g2O,f2O]);break;
    }
   },[a2O,g2O,e2O,f2O],"$w$j");
   $M(e2O,function(Y2P){
    switch(Y2P.g){
    case 1:
     var Z2P=Y2P.v[0];
     $M(Z2P,function(a2Q){
      switch(a2Q.g){
      case 1:
       var b2Q=a2Q.v[0];
       h2O.J(b2Q);break;
      case 2:
       var c2Q=a2Q.v[0];
       h2O.J(c2Q);break;
      }
     },[a2O,g2O,e2O,f2O,h2O]);break;
    case 2:
     var d2Q=Y2P.v[0],e2Q=Y2P.v[1];
     $M(d2Q,function(f2Q){
      switch(f2Q.g){
      case 1:
       var g2Q=f2Q.v[0];
       $M(e2Q,function(h2Q){
	switch(h2Q.g){
	case 1:
	 var i2Q=h2Q.v[0];
	 var j2Q=g2Q.add(i2Q);
	 h2O.J(j2Q);break;
	case 2:
	 var k2Q=h2Q.v[0];
	 var l2Q=g2Q.add(k2Q);
	 h2O.J(l2Q);break;
	}
       },[a2O,g2O,e2O,f2O,h2O,g2Q]);break;
      case 2:
       var m2Q=f2Q.v[0];
       $M(e2Q,function(n2Q){
	switch(n2Q.g){
	case 1:
	 var o2Q=n2Q.v[0];
	 var p2Q=m2Q.add(o2Q);
	 h2O.J(p2Q);break;
	case 2:
	 var q2Q=n2Q.v[0];
	 var r2Q=m2Q.add(q2Q);
	 h2O.J(r2Q);break;
	}
       },[a2O,g2O,e2O,f2O,h2O,m2Q]);break;
      }
     },[a2O,g2O,e2O,f2O,h2O,e2Q]);break;
    case 3:
     var s2Q=Y2P.v[0],t2Q=Y2P.v[1],u2Q=Y2P.v[2];
     var v2Q=$f(1,function(w2Q){
      $M(t2Q,function(x2Q){
       switch(x2Q.g){
       case 1:
	var y2Q=x2Q.v[0];
	$M(u2Q,function(z2Q){
	 switch(z2Q.g){
	 case 1:
	  var A2Q=z2Q.v[0];
	  var C2Q=w2Q.add(y2Q);
	  var B2Q=C2Q.add(A2Q);
	  h2O.J(B2Q);break;
	 case 2:
	  var D2Q=z2Q.v[0];
	  var F2Q=w2Q.add(y2Q);
	  var E2Q=F2Q.add(D2Q);
	  h2O.J(E2Q);break;
	 }
	},[a2O,g2O,e2O,f2O,h2O,w2Q,y2Q]);break;
       case 2:
	var G2Q=x2Q.v[0];
	$M(u2Q,function(H2Q){
	 switch(H2Q.g){
	 case 1:
	  var I2Q=H2Q.v[0];
	  var K2Q=w2Q.add(G2Q);
	  var J2Q=K2Q.add(I2Q);
	  h2O.J(J2Q);break;
	 case 2:
	  var L2Q=H2Q.v[0];
	  var N2Q=w2Q.add(G2Q);
	  var M2Q=N2Q.add(L2Q);
	  h2O.J(M2Q);break;
	 }
	},[a2O,g2O,e2O,f2O,h2O,w2Q,G2Q]);break;
       }
      },[a2O,g2O,e2O,f2O,h2O,u2Q,w2Q]);
     },[h2O,t2Q,u2Q],"$w$j1");
     $M(s2Q,function(O2Q){
      switch(O2Q.g){
      case 1:
       var P2Q=O2Q.v[0];
       v2Q.J(P2Q);break;
      case 2:
       var Q2Q=O2Q.v[0];
       v2Q.J(Q2Q);break;
      }
     },[a2O,g2O,e2O,f2O,h2O,t2Q,u2Q,v2Q]);break;
    case 4:
     var R2Q=Y2P.v[0],S2Q=Y2P.v[1],T2Q=Y2P.v[2],U2Q=Y2P.v[3];
     var V2Q=$f(1,function(W2Q){
      var X2Q=$f(1,function(Y2Q){
       $M(T2Q,function(Z2Q){
	switch(Z2Q.g){
	case 1:
	 var a2R=Z2Q.v[0];
	 $M(U2Q,function(b2R){
	  switch(b2R.g){
	  case 1:
	   var c2R=b2R.v[0];
	   var f2R=W2Q.add(Y2Q);
	   var e2R=f2R.add(a2R);
	   var d2R=e2R.add(c2R);
	   h2O.J(d2R);break;
	  case 2:
	   var g2R=b2R.v[0];
	   var j2R=W2Q.add(Y2Q);
	   var i2R=j2R.add(a2R);
	   var h2R=i2R.add(g2R);
	   h2O.J(h2R);break;
	  }
	 },[a2O,g2O,e2O,f2O,h2O,W2Q,Y2Q,a2R]);break;
	case 2:
	 var k2R=Z2Q.v[0];
	 $M(U2Q,function(l2R){
	  switch(l2R.g){
	  case 1:
	   var m2R=l2R.v[0];
	   var p2R=W2Q.add(Y2Q);
	   var o2R=p2R.add(k2R);
	   var n2R=o2R.add(m2R);
	   h2O.J(n2R);break;
	  case 2:
	   var q2R=l2R.v[0];
	   var t2R=W2Q.add(Y2Q);
	   var s2R=t2R.add(k2R);
	   var r2R=s2R.add(q2R);
	   h2O.J(r2R);break;
	  }
	 },[a2O,g2O,e2O,f2O,h2O,W2Q,Y2Q,k2R]);break;
	}
       },[a2O,g2O,e2O,f2O,h2O,U2Q,W2Q,Y2Q]);
      },[h2O,T2Q,U2Q,W2Q],"$w$j2");
      $M(S2Q,function(u2R){
       switch(u2R.g){
       case 1:
	var v2R=u2R.v[0];
	X2Q.J(v2R);break;
       case 2:
	var w2R=u2R.v[0];
	X2Q.J(w2R);break;
       }
      },[a2O,g2O,e2O,f2O,h2O,T2Q,U2Q,W2Q,X2Q]);
     },[h2O,T2Q,U2Q,S2Q],"$w$j1");
     $M(R2Q,function(x2R){
      switch(x2R.g){
      case 1:
       var y2R=x2R.v[0];
       V2Q.J(y2R);break;
      case 2:
       var z2R=x2R.v[0];
       V2Q.J(z2R);break;
      }
     },[a2O,g2O,e2O,f2O,h2O,T2Q,U2Q,S2Q,V2Q]);break;
    }
   },[a2O,g2O,e2O,f2O,h2O]);break;
  }
 },[a2O]);
},"at libraries/containers/Data/Sequence.hs:1221:1");
var $$DataziSequence$J1=$D(1,function(){
 $r([$$DataziSequence_Empty,$$DataziSequence_Empty]);
},"lvl28");
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
var $$DataziTimeziClockziCTimeval_getCTimeval4=$t(function(){
 $$GHCziShow_showszuitoszq.J(goog.math.Long.fromBits(8,0),$$GHCziTypes_ZMZN);
},[],"in `time-1.4:Data.Time.Clock.CTimeval'");
var $$DataziTimeziClockziCTimeval_getCTimeval3=$t(function(){
 $$GHCziShow_showszuitoszq.J(goog.math.Long.fromBits(3435973836,214748364),$$DataziTimeziClockziCTimeval_getCTimeval4);
},[],"in `time-1.4:Data.Time.Clock.CTimeval'");
var $$DataziTimeziClockziCTimeval_getCTimeval2=$D(2,function(){
 $r([$$GHCziShow_shows3,$$DataziTimeziClockziCTimeval_getCTimeval3]);
},"in `time-1.4:Data.Time.Clock.CTimeval'");
var $$DataziTimeziClockziCTimeval_getCTimeval1=$f(1,function(b2){
 var c2=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(16,0),goog.math.Long.fromBits(8,0),b2);
 var d2=c2[0],e2=c2[1];
 var f2=$hs_unsafeFreezzeByteArrayzh(e2,d2);
 var g2=f2[0],h2=f2[1];
 var G2=$hs_byteArrayContentszh(h2);
 var I2=$hs_writeInt64OffAddrzh(G2,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),g2);
 var H2=$hs_writeInt64OffAddrzh(G2,goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(0,0),I2);
 var $ff=gettimeofday(G2,null);
 var i2=[H2,$ff];
 var j2=i2[0],k2=i2[1];
 var l2=$hs_narrow32Intzh(k2);
 switch(l2.toString()){
 case "0":
  var w2=$hs_readInt64OffAddrzh(G2,goog.math.Long.fromBits(0,0),j2);
  var x2=w2[0],y2=w2[1];
  var z2=$hs_readInt64OffAddrzh(G2,goog.math.Long.fromBits(1,0),x2);
  var A2=z2[0],B2=z2[1];
  var F2=$hs_touchzh(h2,A2);
  var C2=$d(1,[B2],"sat");
  var D2=$d(1,[y2],"sat");
  var E2=$d(1,[D2,C2],"sat");
  $r([F2,E2]);break;
 default:
  var m2=$t(function(){
   var n2=l2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(n2.g){
   case 1:
    $$GHCziShow_showszuitoszq.J(l2,$$GHCziTypes_ZMZN);break;
   case 2:
    $M(l2,function(o2){
     switch(o2.toString()){
     case "-9223372036854775808":
      $A($$DataziTimeziClockziCTimeval_getCTimeval2);break;
     default:
      var p2=$t(function(){
       var q2=o2.negate();
       $$GHCziShow_showszuitoszq.J(q2,$$GHCziTypes_ZMZN);
      },[o2],"sat");
      $R(2,[$$GHCziShow_shows3,p2],":");
     }
    },[]);break;
   }
  },[l2],"sat");
  $$GHCziCString_unpackAppendCStringzh.C(["error in gettimeofday: ",m2],function(r2){
   $$GHCziIO_failIO.C([r2,j2],function(s2){
    var t2=s2[0],u2=s2[1];
    var v2=$hs_touchzh(h2,t2);
    $r([v2,u2]);
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
  $$GHCziReal_zdwzdczs.C([a,$$GHCziReal_zdfEnumRatio1,$$DataziFixed_zdfHasResolutionE7,$$GHCziReal_zdfEnumRatio1],function(c){
   var d=c[0],e=c[1];
   $$GHCziReal_zdwzdczs.C([$$DataziTimeziClockziPOSIX_posixDayLength1,$$GHCziReal_zdfEnumRatio1,$$DataziFixed_zdfHasResolutionE7,$$GHCziReal_zdfEnumRatio1],function(f){
    var g=f[0],h=f[1];
    $$GHCziReal_zdwzdczs.C([d,e,g,h],function(i){
     var j=i[0],k=i[1];
     $$GHCziReal_zdwzdcfloor.J($$GHCziReal_zdfRealInteger,j,k);
    },[]);
   },[d,e]);
  },[]);
 },[a],"f");
 var l=$t(function(){
  $$GHCziIntegerziType_timesInteger.C([b,$$DataziFixed_zdfHasResolutionE7],function(m){
   $$DataziFixed_zdfNumFixed6.C([$$DataziFixed_zdfHasResolutionE12zuzdcresolution,m,$$DataziTimeziClockziPOSIX_posixDayLength1],function(n){
    $$GHCziIntegerziType_minusInteger.C([a,n],function(o){
     $$GHCziReal_zdwzdczs.C([o,$$GHCziReal_zdfEnumRatio1,$$DataziFixed_zdfHasResolutionE7,$$GHCziReal_zdfEnumRatio1],function(p){
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
 $$Main$K.J(c,d,a,b);
},[],"at src/Main.hs:158:1");
var $$Main$s=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Main.hs:162:5-12");
},"a18");
var $$Main$I=$T(function(){
 $$GHCziCString_unpackCStringzh.J("freecell");
},"lvl15");
var $$Main$J=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<div style=\"position:relative;left:0px;top:0px;background-color:#e0d0ff;width:700px;height:500px\" id=\"freecell\" draggable=\"false\"></div>");
},"lvl16");
var $$Main$K=$F(4,function(Z5,a6,b6,c6){
 $$GraphicsziUIziGtkziWebKitziDOMziHTMLElement_htmlElementSetInnerHTML1.C([Z5,b6,$$Main$J,c6],function(d6){
  var e6=d6[0];
  $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,a6,$$Main$I,e6],function(f6){
   var g6=f6[0],h6=f6[1];
   $M(h6,function(i6){
    switch(i6.g){
    case 1:
     $$GHCziIO_failIO.J($$Main$s,g6);break;
    case 2:
     var j6=i6.v[0];
     $$Freecell_mkFreecell1.C([g6],function(k6){
      var l6=k6[0],m6=k6[1];
      var n6=$t(function(){
       var o6=$t(function(){
	$M(j6,function(p6){
	 var q6=p6.v[0];
	 $R(1,[q6],"Ptr");
	},[]);
       },[j6],"sat");
       $$SystemziGlibziGType_typeInstanceIsA.C([o6,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLElement],function(r6){
	switch(r6.g){
	case 1:
	 $A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLElement1);break;
	case 2:
	 $A(j6);break;
	}
       },[j6]);
      },[j6],"sat");
      $$Engine_engine1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,a6,n6,m6,l6],function(s6){
       var t6=s6[0];
       $r([t6,$$GHCziTuple_Z0T]);
      },[]);
     },[a6,j6]);break;
    }
   },[a6,g6]);
  },[a6]);
 },[a6]);
},"a19");
//@ sourceURL=hs1.js
