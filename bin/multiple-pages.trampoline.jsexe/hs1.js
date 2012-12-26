//$$Main_lazzyLoadzuwireHamlet
//$$Main_lazzyLoadzuwirePrime
//$$ZCMain_main

var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement1=$f(1,function(d5){
 $A(d5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement1=$f(1,function(d6){
 $A(d6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:2239:10");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:2915:10");
var $$GHCziEnum_enumDeltaInteger=$f(2,function(No,Oo){
 $M(No,function(Po){
  var Qo=$t(function(){
   $$GHCziIntegerziType_plusInteger.C([Po,Oo],function(Ro){
    $$GHCziEnum_enumDeltaInteger.J(Ro,Oo);
   },[Oo]);
  },[Po,Oo],"sat");
  $R(2,[Po,Qo],":");
 },[Oo]);
},[],"at libraries/base/GHC/Enum.lhs:677:1");
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
var $$GHCziList_takeWhile=$f(2,function(i5,j5){
 $M(j5,function(k5){
  switch(k5.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var l5=k5.v[0],m5=k5.v[1];
   i5.C([l5],function(n5){
    switch(n5.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var o5=$t(function(){
      $$GHCziList_takeWhile.J(i5,m5);
     },[i5,m5],"sat");
     $R(2,[l5,o5],":");break;
    }
   },[l5,i5,m5]);break;
  }
 },[i5]);
},[],"at libraries/base/GHC/List.lhs:283:1");
var $$GHCziShow_zdfShowIntegerzuzdcshow=$f(1,function(m6){
 $$GHCziShow_zdwzdcshowsPrec.J(goog.math.Long.fromBits(0,0),m6,$$GHCziTypes_ZMZN);
},[],"at libraries/base/GHC/Show.lhs:148:5");
var $$GHCziIntegerziType_modInteger=$f(2,function(u,v){
 $M(u,function(w){
  switch(w.g){
  case 1:
   var x=w.v[0];
   $M(x,function(y){
    switch(y.toString()){
    case "-9223372036854775808":
     var G=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
     var H=G[0],I=G[1];
     var J=$d(2,[H,I],"sat");
     $$GHCziIntegerziType_modInteger.J(J,v);break;
    default:
     $M(v,function(z){
      switch(z.g){
      case 1:
       var A=z.v[0];
       $$GHCziClasses_modIntzh.C([y,A],function(B){
	$R(1,[B],"S#");
       },[]);break;
      case 2:
       var C=integer_cmm_int2Integerzh(y);
       var D=C[0],E=C[1];
       var F=$d(2,[D,E],"sat");
       $$GHCziIntegerziType_modInteger.J(F,z);break;
      }
     },[y]);
    }
   },[v]);break;
  case 2:
   var K=w.v[0],L=w.v[1];
   $M(v,function(M){
    switch(M.g){
    case 1:
     var N=M.v[0];
     var O=integer_cmm_int2Integerzh(N);
     var P=O[0],Q=O[1];
     var R=integer_cmm_modIntegerzh(K,L,P,Q);
     var S=R[0],T=R[1];
     $M(S,function(U){
      switch(U.toString()){
      case "0":
       $A($$GHCziIntegerziType$a);break;
      default:
       var W=$hs_indexIntArrayzh(T,goog.math.Long.fromBits(0,0));
       var V=U.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(V.g){
       case 1:
	$R(1,[W],"S#");break;
       case 2:
	var X=W.negate();
	$R(1,[X],"S#");break;
       }
      }
     },[T]);break;
    case 2:
     var Y=M.v[0],Z=M.v[1];
     var a1=integer_cmm_modIntegerzh(K,L,Y,Z);
     var b1=a1[0],c1=a1[1];
     $R(2,[b1,c1],"J#");break;
    }
   },[K,L]);break;
  }
 },[v]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:234:1");
var $$GHCziIntegerziType_neqInteger=$f(2,function(Ea,Fa){
 $M(Ea,function(Ga){
  switch(Ga.g){
  case 1:
   var Ha=Ga.v[0];
   $M(Fa,function(Ia){
    switch(Ia.g){
    case 1:
     var Ja=Ia.v[0];
     $r(Ha.notEquals(Ja)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var Ka=Ia.v[0],La=Ia.v[1];
     var Ma=integer_cmm_cmpIntegerIntzh(Ka,La,Ha);
     switch(Ma.toString()){
     case "0":
      $R(1,[],"False");break;
     default:
      $R(2,[],"True");
     }break;
    }
   },[Ha]);break;
  case 2:
   var Na=Ga.v[0],Oa=Ga.v[1];
   $M(Fa,function(Pa){
    switch(Pa.g){
    case 1:
     var Qa=Pa.v[0];
     var Ra=integer_cmm_cmpIntegerIntzh(Na,Oa,Qa);
     switch(Ra.toString()){
     case "0":
      $R(1,[],"False");break;
     default:
      $R(2,[],"True");
     }break;
    case 2:
     var Sa=Pa.v[0],Ta=Pa.v[1];
     var Ua=integer_cmm_cmpIntegerzh(Na,Oa,Sa,Ta);
     switch(Ua.toString()){
     case "0":
      $R(1,[],"False");break;
     default:
      $R(2,[],"True");
     }break;
    }
   },[Na,Oa]);break;
  }
 },[Fa]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:333:1");
var $$$Main_lazzyLoadzuwirePrime=$f(3,function(a,b,c){
 $$Main$G.J(a,b,c);
},[],"at src/Main.hs:67:1");
var $$Main$a=$T(function(){
 $$DataziText_unpackCStringzh.J("<b>No</b>, that is not a number</b>\n");
},"a");
var $$Main$b=$D(3,function(){
 $r([$$Main$a]);
},"a1");
var $$Main$c=$D(5,function(){
 $r([$$Main$b]);
},"a2");
var $$Main$d=$D(5,function(){
 $r([$$Main$c]);
},"$wfail");
var $$Main$e=$T(function(){
 $$DataziText_unpackCStringzh.J("<b>No</b>, ");
},"a3");
var $$Main$f=$D(3,function(){
 $r([$$Main$e]);
},"a4");
var $$Main$g=$D(5,function(){
 $r([$$Main$f]);
},"a5");
var $$Main$h=$D(5,function(){
 $r([$$Main$g]);
},"lvl");
var $$Main$i=$T(function(){
 $$DataziText_unpackCStringzh.J(" is not a prime</b>\n");
},"a6");
var $$Main$j=$D(3,function(){
 $r([$$Main$i]);
},"a7");
var $$Main$k=$D(5,function(){
 $r([$$Main$j]);
},"a8");
var $$Main$l=$D(5,function(){
 $r([$$Main$k]);
},"lvl1");
var $$Main$m=$T(function(){
 $$DataziText_unpackCStringzh.J("<b>Yes</b>, ");
},"a9");
var $$Main$n=$D(3,function(){
 $r([$$Main$m]);
},"a10");
var $$Main$o=$D(5,function(){
 $r([$$Main$n]);
},"a11");
var $$Main$p=$D(5,function(){
 $r([$$Main$o]);
},"lvl2");
var $$Main$q=$T(function(){
 $$DataziText_unpackCStringzh.J(" is a prime</b>\n");
},"a12");
var $$Main$r=$D(3,function(){
 $r([$$Main$q]);
},"a13");
var $$Main$s=$D(5,function(){
 $r([$$Main$r]);
},"a14");
var $$Main$t=$D(5,function(){
 $r([$$Main$s]);
},"lvl3");
var $$Main$u=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl4");
var $$Main$v=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl5");
var $$Main$w=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"lvl6");
var $$Main$x=$T(function(){
 $$GHCziEnum_enumDeltaInteger.J($$Main$w,$$Main$u);
},"lvl7");
var $$Main$y=$T(function(){
 $$TextziBlazzeziRendererziText_renderMarkupWith.J($$DataziTextziEncoding_decodeUtf8,$$Main$d);
},"lvl8");
var $$Main$z=$T(function(){
 $$GHCziRead_zdfReadInteger5.J($$GHCziRead_zdfReadIntegerzuzdsconvertInt,$$TextziParserCombinatorsziReadPrec_minPrec,$$TextziParserCombinatorsziReadP_zdfMonadPzuzdcreturn);
},"lvl9");
var $$Main$A=$F(1,function(t1){
 $$TextziParserCombinatorsziReadP_run.C([$$Main$z,t1],function(u1){
  switch(u1.g){
  case 1:
   $A($$Main$y);break;
  case 2:
   var v1=u1.v[0],w1=u1.v[1];
   $M(v1,function(x1){
    var y1=x1.v[0],z1=x1.v[1];
    $M(z1,function(A1){
     switch(A1.g){
     case 1:
      $M(w1,function(B1){
       switch(B1.g){
       case 1:
	var C1=$t(function(){
	 var D1=$t(function(){
	  $$GHCziShow_zdfShowIntegerzuzdcshow.J(y1);
	 },[y1],"sat");
	 var E1=$d(2,[D1],"sat");
	 var F1=$d(5,[E1],"sat");
	 var G1=$d(6,[F1,$$Main$l],"sat");
	 var H1=$d(6,[$$Main$h,G1],"sat");
	 $$TextziBlazzeziRendererziText_renderMarkupWith.J($$DataziTextziEncoding_decodeUtf8,H1);
	},[y1],"$w$j");
	$$GHCziIntegerziType_gtInteger.C([y1,$$Main$u],function(I1){
	 switch(I1.g){
	 case 1:
	  $A(C1);break;
	 case 2:
	  var J1=$f(1,function(K1){
	   $$GHCziIntegerziType_timesInteger.C([K1,K1],function(L1){
	    $$GHCziIntegerziType_leInteger.J(L1,y1);
	   },[y1]);
	  },[y1],"sat");
	  $$GHCziList_takeWhile.C([J1,$$Main$x],function(M1){
	   var N1=$f(1,function(O1){
	    $$GHCziIntegerziType_eqInteger.C([O1,$$GHCziReal_even1],function(P1){
	     switch(P1.g){
	     case 1:
	      $$GHCziIntegerziType_modInteger.C([y1,O1],function(Q1){
	       $$GHCziIntegerziType_neqInteger.J(Q1,$$Main$v);
	      },[]);break;
	     case 2:
	      $A($$GHCziErr_divZZeroError);break;
	     }
	    },[y1,O1]);
	   },[y1],"sat");
	   $$GHCziList_all.C([N1,M1],function(R1){
	    switch(R1.g){
	    case 1:
	     $A(C1);break;
	    case 2:
	     var S1=$t(function(){
	      $$GHCziShow_zdfShowIntegerzuzdcshow.J(y1);
	     },[y1],"sat");
	     var T1=$d(2,[S1],"sat");
	     var U1=$d(5,[T1],"sat");
	     var V1=$d(6,[U1,$$Main$t],"sat");
	     var W1=$d(6,[$$Main$p,V1],"sat");
	     $$TextziBlazzeziRendererziText_renderMarkupWith.J($$DataziTextziEncoding_decodeUtf8,W1);break;
	    }
	   },[y1,C1]);
	  },[y1,C1]);break;
	 }
	},[y1,C1]);break;
       case 2:
	$A($$Main$y);break;
       }
      },[y1]);break;
     case 2:
      $A($$Main$y);break;
     }
    },[w1,y1]);
   },[w1]);break;
  }
 },[]);
},"at src/Main.hs:103:1");
var $$Main$B=$F(2,function(X1,Y1){
 $M(X1,function(Z1){
  switch(Z1.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var a2=Z1.v[0],b2=Z1.v[1],c2=Z1.v[2],d2=Z1.v[3];
   var e2=Y1.greaterThanOrEqual(c2)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(e2.g){
   case 1:
    var w2=b2.add(Y1);
    var s2=$hs_indexWord16Arrayzh(a2,w2);
    var f2=$hs_ltWordzh(s2,goog.math.Long.fromBits(55296,0));
    switch(f2.g){
    case 1:
     var g2=$hs_gtWordzh(s2,goog.math.Long.fromBits(56319,0));
     switch(g2.g){
     case 1:
      var v2=w2.add(goog.math.Long.fromBits(1,0));
      var u2=$hs_indexWord16Arrayzh(a2,v2);
      var i2=Y1.add(goog.math.Long.fromBits(2,0));
      var h2=$d(1,[i2],"sat");
      var j2=$d(1,[Z1,h2],"sat");
      var t2=$hs_word2Intzh(u2);
      var p2=t2.subtract(goog.math.Long.fromBits(56320,0));
      var r2=$hs_word2Intzh(s2);
      var q2=r2.subtract(goog.math.Long.fromBits(55296,0));
      var o2=$hs_uncheckedIShiftLzh(q2,goog.math.Long.fromBits(10,0));
      var n2=o2.add(p2);
      var m2=n2.add(goog.math.Long.fromBits(65536,0));
      var l2=$hs_chrzh(m2);
      var k2=$d(1,[l2],"sat");
      $R(3,[k2,j2],"Yield");break;
     case 2:
      var y2=Y1.add(goog.math.Long.fromBits(1,0));
      var x2=$d(1,[y2],"sat");
      var z2=$d(1,[Z1,x2],"sat");
      var C2=$hs_word2Intzh(s2);
      var B2=$hs_chrzh(C2);
      var A2=$d(1,[B2],"sat");
      $R(3,[A2,z2],"Yield");break;
     }break;
    case 2:
     var E2=Y1.add(goog.math.Long.fromBits(1,0));
     var D2=$d(1,[E2],"sat");
     var F2=$d(1,[Z1,D2],"sat");
     var I2=$hs_word2Intzh(s2);
     var H2=$hs_chrzh(I2);
     var G2=$d(1,[H2],"sat");
     $R(3,[G2,F2],"Yield");break;
    }break;
   case 2:
    $$Main$B.J(d2,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[Y1]);
},"$wnext1");
var $$Main$C=$F(2,function(J2,K2){
 $$Main$B.C([J2,K2],function(L2){
  switch(L2.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var M2=L2.v[0];
   $M(M2,function(N2){
    var O2=N2.v[0],P2=N2.v[1];
    $M(P2,function(Q2){
     var R2=Q2.v[0];
     $$Main$C.J(O2,R2);
    },[O2]);
   },[]);break;
  case 3:
   var S2=L2.v[0],T2=L2.v[1];
   $M(T2,function(U2){
    var V2=U2.v[0],W2=U2.v[1];
    $M(W2,function(X2){
     var Y2=X2.v[0];
     var Z2=$t(function(){
      $$Main$C.J(V2,Y2);
     },[V2,Y2],"sat");
     $R(2,[S2,Z2],":");
    },[S2,V2]);
   },[S2]);break;
  }
 },[]);
},"$wunfold");
var $$Main$D=$F(2,function(a3,b3){
 $M(a3,function(c3){
  switch(c3.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var d3=c3.v[0],e3=c3.v[1],f3=c3.v[2],g3=c3.v[3];
   var h3=b3.greaterThanOrEqual(f3)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(h3.g){
   case 1:
    var z3=e3.add(b3);
    var v3=$hs_indexWord16Arrayzh(d3,z3);
    var i3=$hs_ltWordzh(v3,goog.math.Long.fromBits(55296,0));
    switch(i3.g){
    case 1:
     var j3=$hs_gtWordzh(v3,goog.math.Long.fromBits(56319,0));
     switch(j3.g){
     case 1:
      var y3=z3.add(goog.math.Long.fromBits(1,0));
      var x3=$hs_indexWord16Arrayzh(d3,y3);
      var l3=b3.add(goog.math.Long.fromBits(2,0));
      var k3=$d(1,[l3],"sat");
      var m3=$d(1,[c3,k3],"sat");
      var w3=$hs_word2Intzh(x3);
      var s3=w3.subtract(goog.math.Long.fromBits(56320,0));
      var u3=$hs_word2Intzh(v3);
      var t3=u3.subtract(goog.math.Long.fromBits(55296,0));
      var r3=$hs_uncheckedIShiftLzh(t3,goog.math.Long.fromBits(10,0));
      var q3=r3.add(s3);
      var p3=q3.add(goog.math.Long.fromBits(65536,0));
      var o3=$hs_chrzh(p3);
      var n3=$d(1,[o3],"sat");
      $R(3,[n3,m3],"Yield");break;
     case 2:
      var B3=b3.add(goog.math.Long.fromBits(1,0));
      var A3=$d(1,[B3],"sat");
      var C3=$d(1,[c3,A3],"sat");
      var F3=$hs_word2Intzh(v3);
      var E3=$hs_chrzh(F3);
      var D3=$d(1,[E3],"sat");
      $R(3,[D3,C3],"Yield");break;
     }break;
    case 2:
     var H3=b3.add(goog.math.Long.fromBits(1,0));
     var G3=$d(1,[H3],"sat");
     var I3=$d(1,[c3,G3],"sat");
     var L3=$hs_word2Intzh(v3);
     var K3=$hs_chrzh(L3);
     var J3=$d(1,[K3],"sat");
     $R(3,[J3,I3],"Yield");break;
    }break;
   case 2:
    $$Main$D.J(g3,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[b3]);
},"$wnext2");
var $$Main$E=$F(2,function(M3,N3){
 $$Main$D.C([M3,N3],function(O3){
  switch(O3.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var P3=O3.v[0];
   $M(P3,function(Q3){
    var R3=Q3.v[0],S3=Q3.v[1];
    $M(S3,function(T3){
     var U3=T3.v[0];
     $$Main$E.J(R3,U3);
    },[R3]);
   },[]);break;
  case 3:
   var V3=O3.v[0],W3=O3.v[1];
   $M(W3,function(X3){
    var Y3=X3.v[0],Z3=X3.v[1];
    $M(Z3,function(a4){
     var b4=a4.v[0];
     var c4=$t(function(){
      $$Main$E.J(Y3,b4);
     },[Y3,b4],"sat");
     $R(2,[V3,c4],":");
    },[V3,Y3]);
   },[V3]);break;
  }
 },[]);
},"$wunfold1");
var $$Main$F=$F(3,function(d4,e4,f4){
 $M(d4,function(g4){
  var h4=g4.v[0],i4=g4.v[1];
  var $ff=webkit_dom_element_focus(h4);
  var j4=[f4,$ff];
  var k4=j4[0];
  var m5=$hs_touchzh(i4,k4);
  var l4=$hs_newMVarzh(m5);
  var m4=l4[0],n4=l4[1];
  var o4=$f(1,function(p4){
   var q4=$f(1,function(r4){
    $b($hs_takeMVarzh,[n4,r4],function(s4){
     var t4=s4[0],u4=s4[1];
     var v4=$t(function(){
      $$Main$A.C([u4],function(w4){
       $$Main$E.J(w4,goog.math.Long.fromBits(0,0));
      },[]);
     },[u4],"sat");
     $$GraphicsziUIziGtkziWebKitziDOMziHTMLElement_htmlElementSetInnerHTML1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,e4,v4,t4],function(x4){
      var y4=x4[0];
      q4.J(y4);
     },[q4]);
    },[e4,q4]);
   },[n4,e4],"a17");
   $k($hs_catchzh,[q4,$$GHCziConcziSync_forkIO2,p4]);
  },[n4,e4],"sat");
  var z4=$hs_forkzh(o4,m4);
  var A4=z4[0];
  var B4=$f(1,function(C4){
   var $ff=webkit_dom_html_input_element_get_value(h4);
   var D4=[C4,$ff];
   var E4=D4[0],F4=D4[1];
   var W4=$hs_touchzh(i4,E4);
   $$ForeignziCziString_zdwa.C([F4,W4],function(G4){
    var H4=G4[0],I4=G4[1];
    var $ff=g_free(F4);
    var J4=[H4,$ff];
    var K4=J4[0];
    var L4=$t(function(){
     $$SystemziGlibziUTFString_fromUTF.J(I4);
    },[I4],"ipv6");
    var M4=$t(function(){
     $$Main$A.C([L4],function(N4){
      $$Main$C.J(N4,goog.math.Long.fromBits(0,0));
     },[]);
    },[L4],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziHTMLElement_htmlElementSetInnerHTML1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,e4,M4,K4],function(O4){
     var P4=O4[0];
     $b($hs_tryTakeMVarzh,[n4,P4],function(Q4){
      var R4=Q4[0],S4=Q4[1];
      $M(S4,function(T4){
       switch(T4.toString()){
       case "0":
	$b($hs_putMVarzh,[n4,L4,R4],function(V4){
	 $r([V4,$$GHCziTuple_Z0T]);
	},[]);break;
       default:
	$b($hs_putMVarzh,[n4,L4,R4],function(U4){
	 $r([U4,$$GHCziTuple_Z0T]);
	},[]);
       }
      },[n4,L4,R4]);
     },[n4,L4]);
    },[n4,L4]);
   },[n4,e4,F4]);
  },[h4,i4,n4,e4],"a17");
  var X4=$f(3,function(Y4,Z4,c){
   B4.J(c);
  },[B4],"sat");
  $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,g4,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeydown2,$$GHCziTypes_False,X4,A4],function(a5){
   var b5=a5[0];
   var c5=$f(3,function(d5,e5,c){
    B4.J(c);
   },[B4],"sat");
   $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,g4,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeyup2,$$GHCziTypes_False,c5,b5],function(f5){
    var g5=f5[0];
    var h5=$f(3,function(i5,j5,c){
     B4.J(c);
    },[B4],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,g4,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeypress2,$$GHCziTypes_False,h5,g5],function(k5){
     var l5=k5[0];
     $r([l5,$$GHCziTuple_Z0T]);
    },[]);
   },[B4,g4]);
  },[B4,g4]);
 },[f4,e4]);
},"$wa");
var $$Main$G=$F(3,function(a,b,c){
 $$Main$F.J(a,b,c);
},"a15");
//@ sourceURL=hs1.js
