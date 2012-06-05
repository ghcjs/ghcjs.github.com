//$$Main_hello
//$$Main_main
//$$Main_main1
//$$Main_main2
//$$Main_tryHamlet
//$$Main_tryHamlet1
//$$Main_tryHamlet2
//$$Main_tryHamlet3
//$$Main_tryHamlet4
//$$Main_tryHamlet5
//$$Main_validatePrime
//$$Main_zdwa
var $$DataziTextziArray_empty1=$f(1,function(P){
 var Q=$hs_newByteArrayzh(0,P);
 var R=Q[0],S=Q[1];
 var T=$d(1,[S],"sat");
 $r([R,T]);
},[],"in `text-0.11.2.1:Data.Text.Array'");
var $$DataziTextziArray_empty=$t(function(){
 $$GHCziST_runSTRep.J($$DataziTextziArray_empty1);
},[],"at Data/Text/Array.hs:170:1");

var $$DataziTextziInternal_empty=$t(function(){
 $M($$DataziTextziArray_empty,function(s){
  var t=s.v[0];
  $R(1,[t,0,0],"Text");
 },[]);
},[],"at Data/Text/Internal.hs:71:1");
var $$DataziTextziInternal_safe=$f(1,function(g1){
 $M(g1,function(h1){
  var i1=h1.v[0];
  var m1=$hs_ordzh(i1);
  var l1=m1>>>0;
  var k1=l1&2095104;
  var j1=k1|0;
  switch(j1){
  case 55296:
   $A($$DataziTextziInternal$a);break;
  default:
   $A(h1);
  }
 },[]);
},[],"at Data/Text/Internal.hs:95:1");
var $$DataziTextziInternal$a=$D(1,function(){
 $r(["\ufffd"]);
},"lvl");

var $$Main_tryHamlet3=$t(function(){
 $$GHCziBase_map.C([$$DataziTextziInternal_safe,$$GHCziTypes_ZMZN],function(L5){
  var M5=$f(1,function(N5){
   var O5=$hs_newByteArrayzh(8,N5);
   var P5=O5[0],Q5=O5[1];
   var R5=$d(1,[Q5],"sat");
   $$Main_zdwa.C([R5,$$Main_tryHamlet4,L5,0,P5],function(S5){
    var T5=S5[0],U5=S5[1];
    $M(U5,function(V5){
     var W5=V5.v[0],X5=V5.v[1];
     $M(W5,function(Y5){
      var Z5=Y5.v[0];
      var a6=$d(1,[Z5],"sat");
      var b6=$d(1,[a6,X5],"sat");
      $r([T5,b6]);
     },[T5,X5]);
    },[T5]);
   },[]);
  },[L5],"sat");
  $$GHCziST_runSTRep.C([M5],function(c6){
   var d6=c6.v[0],e6=c6.v[1];
   $M(e6,function(f6){
    var g6=f6.v[0];
    $M(g6,function(h6){
     switch(h6){
     case 0:
      $A($$DataziTextziInternal_empty);break;
     default:
      $M(d6,function(i6){
       var j6=i6.v[0];
       $R(1,[j6,0,h6],"Text");
      },[h6]);
     }
    },[d6]);
   },[d6]);
  },[]);
 },[]);
},[],"in `main:Main'");

var $$GHCziShow_showszuitoszq=$f(2,function(o,p){
 var q=o<10?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(q.g){
 case 1:
  var w=o%10;
  var v=48+w|0;
  var s=$hs_chrzh(v);
  var r=$d(1,[s],"sat");
  var t=$d(2,[r,p],"sat");
  var u=o/10|0;
  $$GHCziShow_showszuitoszq.J(u,t);break;
 case 2:
  var z=48+o|0;
  var y=$hs_chrzh(z);
  var x=$d(1,[y],"sat");
  $R(2,[x,p],":");break;
 }
},[],"at libraries/base/GHC/Show.lhs:443:5");
var $$GHCziShow_shows3=$D(1,function(){
 $r(["-"]);
},"in `base:GHC.Show'");
var $$GHCziShow_itos=$f(2,function(A,B){
 var C=A<0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(C.g){
 case 1:
  $$GHCziShow_showszuitoszq.J(A,B);break;
 case 2:
  $M(A,function(D){
   switch(D){
   case  -2147483648:
    var G=$t(function(){
     var H=$t(function(){
      $$GHCziShow_showszuitoszq.J(8,B);
     },[B],"sat");
     $$GHCziShow_showszuitoszq.J(214748364,H);
    },[B],"sat");
    $R(2,[$$GHCziShow_shows3,G],":");break;
   default:
    var E=$t(function(){
     var F= -D;
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

var $$Main_tryHamlet4=$D(1,function(){
 $r([4]);
},"in `main:Main'");

var $$GHCziTuple_Z0T=$D(1,function(){
 $r([]);
},"in `ghc-prim:GHC.Tuple'");

var $$GHCziTypes_False=$D(1,function(){
 $r([]);
},"in `ghc-prim:GHC.Types'");
var $$GHCziTypes_True=$D(2,function(){
 $r([]);
},"in `ghc-prim:GHC.Types'");

var $$GHCziST_runSTRep=$f(1,function(X){
 X.C([$$GHCziPrim_realWorldzh],function(Y){
  var Z=Y[1];
  $A(Z);
 },[]);
},[],"at libraries/base/GHC/ST.lhs:173:1");

var $$Main_main=$f(1,function(r4){
 $$Main_main1.J(r4);
},[],"at Main.hs:18:1");

var $$Main_main1=$f(1,function(q4){
 $r([q4,$$GHCziTuple_Z0T]);
},[],"in `main:Main'");

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

var $$Main_tryHamlet2=$f(2,function(k6,l6){
 $A($$Main_tryHamlet3);
},[],"in `main:Main'");

var $$Main_tryHamlet=$f(2,function(z6,r4){
 $$Main_tryHamlet1.J(z6,r4);
},[],"at Main.hs:48:1");

var $$Main$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow\x00");
},"lvl2");

var $$GHCziShow_showsPrec=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at libraries/base/GHC/Show.lhs:142:5");

var $$Main_zdwa=$f(5,function(s4,t4,u4,v4,w4){
 var x4=$f(3,function(y4,z4,A4){
  $M(y4,function(B4){
   switch(B4.g){
   case 1:
    var C4=$d(1,[z4],"sat");
    var D4=$d(1,[s4,C4],"sat");
    $r([A4,D4]);break;
   case 2:
    var E4=B4.v[0],F4=B4.v[1];
    $M(E4,function(G4){
     var H4=G4.v[0];
     $M(F4,function(I4){
      var K4=$hs_ordzh(H4);
      var J4=$t(function(){
       $r(K4<65536?$$GHCziTypes_True:$$GHCziTypes_False);
      },[K4],"lvl12");
      var M4=K4-65536|0;
      var L4=$f(2,function(N4,O4){
       $M(t4,function(P4){
	var Q4=P4.v[0];
	var R4=N4>=Q4?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(R4.g){
	case 1:
	 $M(J4,function(S4){
	  switch(S4.g){
	  case 1:
	   $M(s4,function(T4){
	    var U4=T4.v[0];
	    var i5=M4>>10;
	    var h5=i5+55296|0;
	    var g5=h5>>>0;
	    var f5=g5&65535;
	    var Z4=$hs_writeWord16Arrayzh(U4,z4,f5,O4);
	    var e5=M4>>>0;
	    var d5=e5&1023;
	    var c5=d5|0;
	    var b5=c5+56320|0;
	    var a5=b5>>>0;
	    var Y4=a5&65535;
	    var X4=z4+1|0;
	    var W4=$hs_writeWord16Arrayzh(U4,X4,Y4,Z4);
	    var V4=z4+2|0;
	    x4.J(I4,V4,W4);
	   },[s4,z4,M4,t4,O4,I4,x4]);break;
	  case 2:
	   $M(s4,function(j5){
	    var k5=j5.v[0];
	    var o5=K4>>>0;
	    var n5=o5&65535;
	    var m5=$hs_writeWord16Arrayzh(k5,z4,n5,O4);
	    var l5=z4+1|0;
	    x4.J(I4,l5,m5);
	   },[s4,z4,K4,t4,O4,I4,x4]);break;
	  }
	 },[s4,z4,K4,M4,t4,O4,I4,x4]);break;
	case 2:
	 var I5=Q4+1|0;
	 var A5=I5<<1;
	 var p5=A5<0?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(p5.g){
	 case 1:
	  var H5=A5>>>0;
	  var G5=H5&1073741824;
	  var q5=G5|0;
	  switch(q5){
	  case 0:
	   var F5=A5<<1;
	   var r5=$hs_newByteArrayzh(F5,O4);
	   var s5=r5[0],t5=r5[1];
	   var u5=Q4<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(u5.g){
	   case 1:
	    $M(s4,function(v5){
	     var w5=v5.v[0];
	     var C5=Q4>>>0;
	     var $ff=_hs_text_memcpy(t5,0,w5,0,C5);
	     var x5=[s5,$ff];
	     var y5=x5[0];
	     var z5=$d(1,[A5],"sat");
	     var B5=$d(1,[t5],"sat");
	     $$Main_zdwa.J(B5,z5,B4,z4,y5);
	    },[z4,Q4,A5,t5,s5,B4]);break;
	   case 2:
	    var D5=$d(1,[A5],"sat");
	    var E5=$d(1,[t5],"sat");
	    $$Main_zdwa.J(E5,D5,B4,z4,s5);break;
	   }break;
	  default:
	   $A($$Main$C);
	  }break;
	 case 2:
	  $A($$Main$C);break;
	 }break;
	}
       },[s4,z4,K4,J4,M4,t4,N4,O4,I4,x4,B4]);
      },[s4,z4,K4,J4,M4,t4,I4,x4,B4],"a12");
      $M(J4,function(J5){
       switch(J5.g){
       case 1:
	var K5=z4+1|0;
	L4.J(K5,A4);break;
       case 2:
	L4.J(z4,A4);break;
       }
      },[A4,s4,z4,K4,J4,M4,t4,I4,x4,B4,L4]);
     },[A4,s4,z4,H4,t4,x4,B4]);
    },[A4,s4,z4,F4,t4,x4,B4]);break;
   }
  },[A4,s4,z4,t4,x4]);
 },[s4,t4],"$wa1");
 x4.J(u4,v4,w4);
},[],"in `main:Main'");
var $$Main$C=$T(function(){
 $$GHCziErr_error.J($$Main$f);
},"poly_a1");

var $$DataziMaybe_Nothing=$D(1,function(){
 $r([]);
},"at libraries/base/Data/Maybe.hs:69:19");

var $$GHCziBase_id=$f(1,function(M2){
 $A(M2);
},[],"at libraries/base/GHC/Base.lhs:515:1");
var $$GHCziBase_chr1=$f(1,function(q2){
 $$GHCziBase$b.J(q2);
},[],"in `base:GHC.Base'");
var $$GHCziBase$a=$D(1,function(){
 $r([9]);
},"lvl");
var $$GHCziBase$b=$F(1,function(Y4){
 var Z4=$t(function(){
  $$GHCziShow_showSignedInt.J($$GHCziBase$a,Y4,$$GHCziTypes_ZMZN);
 },[Y4],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Prelude.chr: bad argument: \x00",Z4],function(a5){
  $$GHCziErr_error.J(a5);
 },[]);
},"lvl1");

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

var $$GHCziShow_zdwshowSignedInt=$f(3,function(L1,M1,N1){
 var O1=M1<0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(O1.g){
 case 1:
  $$GHCziShow_itos.J(M1,N1);break;
 case 2:
  var P1=L1>6?$$GHCziTypes_True:$$GHCziTypes_False;
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

var $$GHCziIntegerziGMPziPrim_integer2Wordzh=$f(2,function(f,g){
 $M(f,function(h){
  switch(h){
  case 0:
   $r(0);break;
  default:
   var j=$hs_indexIntArrayzh(g,0);
   var i=h<0?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(i.g){
   case 1:
    $r(j>>>0);break;
   case 2:
    var k= -j;
    $r(k>>>0);break;
   }
  }
 },[g]);
},[],"at libraries/integer-gmp/GHC/Integer/GMP/Prim.hs:196:1");

var $$GHCziIntegerziType_integerToWord=$f(1,function(ye){
 $M(ye,function(ze){
  switch(ze.g){
  case 1:
   var Ae=ze.v[0];
   $r(Ae>>>0);break;
  case 2:
   var Be=ze.v[0],Ce=ze.v[1];
   $$GHCziIntegerziGMPziPrim_integer2Wordzh.J(Be,Ce);break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:100:1");
var $$GHCziIntegerziType_smallInteger=$f(1,function(De){
 $R(1,[De],"S#");
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:87:1");

//@ sourceURL=hs1.js
