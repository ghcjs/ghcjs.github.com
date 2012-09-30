//$$Main_lazzyLoadzuwireHamlet
//$$Main_lazzyLoadzuwirePrime
//$$ZCMain_main

var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement1=$f(1,function(u4){
 $A(u4);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement1=$f(1,function(o5){
 $A(o5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:2055:10");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:2653:10");
var $$GHCziEnum_enumDeltaInteger=$f(2,function(ss,ts){
 $M(ss,function(us){
  var vs=$t(function(){
   $$GHCziIntegerziType_plusInteger.C([us,ts],function(ws){
    $$GHCziEnum_enumDeltaInteger.J(ws,ts);
   },[ts]);
  },[us,ts],"sat");
  $R(2,[us,vs],":");
 },[ts]);
},[],"at libraries/base/GHC/Enum.lhs:659:1");
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
var $$GHCziList_all=$f(2,function(f3,g3){
 $M(g3,function(h3){
  switch(h3.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   var i3=h3.v[0],j3=h3.v[1];
   f3.C([i3],function(k3){
    switch(k3.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     $$GHCziList_all.J(f3,j3);break;
    }
   },[f3,j3]);break;
  }
 },[f3]);
},[],"at libraries/base/GHC/List.lhs:526:1");
var $$GHCziList_takeWhile=$f(2,function(B5,C5){
 $M(C5,function(D5){
  switch(D5.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var E5=D5.v[0],F5=D5.v[1];
   B5.C([E5],function(G5){
    switch(G5.g){
    case 1:
     $R(1,[],"[]");break;
    case 2:
     var H5=$t(function(){
      $$GHCziList_takeWhile.J(B5,F5);
     },[B5,F5],"sat");
     $R(2,[E5,H5],":");break;
    }
   },[E5,B5,F5]);break;
  }
 },[B5]);
},[],"at libraries/base/GHC/List.lhs:283:1");
var $$GHCziShow_zdfShowIntegerzuzdcshow=$f(1,function(M8){
 $$GHCziShow_zdwzdcshowsPrec.J(goog.math.Long.fromBits(0,0),M8,$$GHCziTypes_ZMZN);
},[],"at libraries/base/GHC/Show.lhs:150:5");
var $$GHCziIntegerziType_divModInteger=$f(2,function(X5,Y5){
 $M(X5,function(Z5){
  switch(Z5.g){
  case 1:
   var a6=Z5.v[0];
   $M(a6,function(b6){
    switch(b6.toString()){
    case "-9223372036854775808":
     var R6=integer_cmm_int2Integerzh(goog.math.Long.fromBits(0,2147483648));
     var S6=R6[0],T6=R6[1];
     var U6=$d(2,[S6,T6],"sat");
     $$GHCziIntegerziType_divModInteger.J(U6,Y5);break;
    default:
     $M(Y5,function(c6){
      switch(c6.g){
      case 1:
       var d6=c6.v[0];
       var e6=$f(1,function(f6){
	var g6=$f(1,function(h6){
	 var i6=b6.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(i6.g){
	 case 1:
	  var l6=$hs_quotIntzh(b6,d6);
	  var j6=$d(1,[f6],"sat");
	  var k6=$d(1,[l6],"sat");
	  $r([k6,j6]);break;
	 case 2:
	  var m6=d6.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(m6.g){
	  case 1:
	   var p6=$hs_quotIntzh(b6,d6);
	   var n6=$d(1,[f6],"sat");
	   var o6=$d(1,[p6],"sat");
	   $r([o6,n6]);break;
	  case 2:
	   var u6=b6.add(goog.math.Long.fromBits(1,0));
	   var t6=$hs_quotIntzh(u6,d6);
	   var q6=$d(1,[f6],"sat");
	   var s6=t6.subtract(goog.math.Long.fromBits(1,0));
	   var r6=$d(1,[s6],"sat");
	   $r([r6,q6]);break;
	  }break;
	 }
	},[b6,d6,f6],"$w$j");
	var v6=b6.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(v6.g){
	case 1:
	 g6.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var w6=d6.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(w6.g){
	 case 1:
	  g6.J($$GHCziPrim_realWorldzh);break;
	 case 2:
	  var B6=b6.subtract(goog.math.Long.fromBits(1,0));
	  var A6=$hs_quotIntzh(B6,d6);
	  var x6=$d(1,[f6],"sat");
	  var z6=A6.subtract(goog.math.Long.fromBits(1,0));
	  var y6=$d(1,[z6],"sat");
	  $r([y6,x6]);break;
	 }break;
	}
       },[b6,d6],"$j");
       var D6=$hs_remIntzh(b6,d6);
       var C6=$f(1,function(E6){
	var F6=b6.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(F6.g){
	case 1:
	 e6.J(D6);break;
	case 2:
	 var G6=d6.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(G6.g){
	 case 1:
	  e6.J(D6);break;
	 case 2:
	  $M(D6,function(H6){
	   switch(H6.toString()){
	   case "0":
	    e6.J(goog.math.Long.fromBits(0,0));break;
	   default:
	    var I6=H6.add(d6);
	    e6.J(I6);
	   }
	  },[b6,d6,e6]);break;
	 }break;
	}
       },[b6,d6,e6,D6],"$w$j");
       var J6=b6.greaterThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(J6.g){
       case 1:
	C6.J($$GHCziPrim_realWorldzh);break;
       case 2:
	var K6=d6.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(K6.g){
	case 1:
	 C6.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 $M(D6,function(L6){
	  switch(L6.toString()){
	  case "0":
	   e6.J(goog.math.Long.fromBits(0,0));break;
	  default:
	   var M6=L6.add(d6);
	   e6.J(M6);
	  }
	 },[b6,d6,e6]);break;
	}break;
       }break;
      case 2:
       var N6=integer_cmm_int2Integerzh(b6);
       var O6=N6[0],P6=N6[1];
       var Q6=$d(2,[O6,P6],"sat");
       $$GHCziIntegerziType_divModInteger.J(Q6,c6);break;
      }
     },[b6]);
    }
   },[Y5]);break;
  case 2:
   var V6=Z5.v[0],W6=Z5.v[1];
   $M(Y5,function(X6){
    switch(X6.g){
    case 1:
     var Y6=X6.v[0];
     var Z6=integer_cmm_int2Integerzh(Y6);
     var a7=Z6[0],b7=Z6[1];
     var c7=$d(2,[a7,b7],"sat");
     $$GHCziIntegerziType_divModInteger.J(Z5,c7);break;
    case 2:
     var d7=X6.v[0],e7=X6.v[1];
     var f7=integer_cmm_divModIntegerzh(V6,W6,d7,e7);
     var g7=f7[0],h7=f7[1],i7=f7[2],j7=f7[3];
     var k7=$d(2,[i7,j7],"sat");
     var l7=$d(2,[g7,h7],"sat");
     $r([l7,k7]);break;
    }
   },[Z5,V6,W6]);break;
  }
 },[Y5]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:185:1");
var $$GHCziIntegerziType_neqInteger=$f(2,function(V9,W9){
 $M(V9,function(X9){
  switch(X9.g){
  case 1:
   var Y9=X9.v[0];
   $M(W9,function(Z9){
    switch(Z9.g){
    case 1:
     var aa=Z9.v[0];
     $r(Y9.notEquals(aa)?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var ba=Z9.v[0],ca=Z9.v[1];
     var da=integer_cmm_cmpIntegerIntzh(ba,ca,Y9);
     switch(da.toString()){
     case "0":
      $R(1,[],"False");break;
     default:
      $R(2,[],"True");
     }break;
    }
   },[Y9]);break;
  case 2:
   var ea=X9.v[0],fa=X9.v[1];
   $M(W9,function(ga){
    switch(ga.g){
    case 1:
     var ha=ga.v[0];
     var ia=integer_cmm_cmpIntegerIntzh(ea,fa,ha);
     switch(ia.toString()){
     case "0":
      $R(1,[],"False");break;
     default:
      $R(2,[],"True");
     }break;
    case 2:
     var ja=ga.v[0],ka=ga.v[1];
     var la=integer_cmm_cmpIntegerzh(ea,fa,ja,ka);
     switch(la.toString()){
     case "0":
      $R(1,[],"False");break;
     default:
      $R(2,[],"True");
     }break;
    }
   },[ea,fa]);break;
  }
 },[W9]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:322:1");
var $$$Main_lazzyLoadzuwirePrime=$f(3,function(c,a,b){
 $$Main$S.J(c,a,b);
},[],"at src/Main.hs:67:1");
var $$Main$a=$T(function(){
 $$DataziText_unpackCStringzh.J(" is a prime</b>\n");
},"a");
var $$Main$b=$D(3,function(){
 $r([$$Main$a]);
},"a1");
var $$Main$c=$D(5,function(){
 $r([$$Main$b]);
},"a2");
var $$Main$d=$T(function(){
 $$DataziText_unpackCStringzh.J("<b>Yes</b>, ");
},"a3");
var $$Main$e=$D(3,function(){
 $r([$$Main$d]);
},"a4");
var $$Main$f=$D(5,function(){
 $r([$$Main$e]);
},"a5");
var $$Main$g=$T(function(){
 $$DataziText_unpackCStringzh.J(" is not a prime</b>\n");
},"a6");
var $$Main$h=$D(3,function(){
 $r([$$Main$g]);
},"a7");
var $$Main$i=$D(5,function(){
 $r([$$Main$h]);
},"a8");
var $$Main$j=$T(function(){
 $$DataziText_unpackCStringzh.J("<b>No</b>, ");
},"a9");
var $$Main$k=$D(3,function(){
 $r([$$Main$j]);
},"a10");
var $$Main$l=$D(5,function(){
 $r([$$Main$k]);
},"a11");
var $$Main$y=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"lvl10");
var $$Main$z=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl11");
var $$Main$A=$T(function(){
 $$GHCziEnum_enumDeltaInteger.J($$Main$y,$$Main$z);
},"lvl12");
var $$Main$B=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl13");
var $$Main$C=$D(5,function(){
 $r([$$Main$c]);
},"lvl14");
var $$Main$D=$D(5,function(){
 $r([$$Main$f]);
},"lvl15");
var $$Main$E=$D(5,function(){
 $r([$$Main$i]);
},"lvl16");
var $$Main$F=$D(5,function(){
 $r([$$Main$l]);
},"lvl17");
var $$Main$G=$T(function(){
 $$DataziText_unpackCStringzh.J("<b>No</b>, that is not a number</b>\n");
},"a12");
var $$Main$H=$D(3,function(){
 $r([$$Main$G]);
},"a13");
var $$Main$I=$D(5,function(){
 $r([$$Main$H]);
},"a14");
var $$Main$J=$D(5,function(){
 $r([$$Main$I]);
},"$wfail");
var $$Main$L=$T(function(){
 $$TextziBlazzeziRendererziText_renderMarkupWith.J($$DataziTextziEncoding_decodeUtf8,$$Main$J);
},"lvl18");
var $$Main$M=$F(1,function(c3){
 $$TextziParserCombinatorsziReadP_run.C([$$GHCziRead_zdfReadInteger4,c3],function(d3){
  switch(d3.g){
  case 1:
   $A($$Main$L);break;
  case 2:
   var e3=d3.v[0],f3=d3.v[1];
   $M(e3,function(g3){
    var h3=g3.v[0],i3=g3.v[1];
    $M(i3,function(j3){
     switch(j3.g){
     case 1:
      $M(f3,function(k3){
       switch(k3.g){
       case 1:
	var l3=$t(function(){
	 var m3=$t(function(){
	  $$GHCziShow_zdfShowIntegerzuzdcshow.J(h3);
	 },[h3],"sat");
	 var n3=$d(2,[m3],"sat");
	 var o3=$d(5,[n3],"sat");
	 var p3=$d(6,[o3,$$Main$E],"sat");
	 var q3=$d(6,[$$Main$F,p3],"sat");
	 $$TextziBlazzeziRendererziText_renderMarkupWith.J($$DataziTextziEncoding_decodeUtf8,q3);
	},[h3],"$w$j");
	$$GHCziIntegerziType_gtInteger.C([h3,$$Main$z],function(r3){
	 switch(r3.g){
	 case 1:
	  $A(l3);break;
	 case 2:
	  var s3=$f(1,function(t3){
	   $$GHCziIntegerziType_timesInteger.C([t3,t3],function(u3){
	    $$GHCziIntegerziType_leInteger.J(u3,h3);
	   },[h3]);
	  },[h3],"sat");
	  $$GHCziList_takeWhile.C([s3,$$Main$A],function(v3){
	   var w3=$f(1,function(x3){
	    $$GHCziIntegerziType_eqInteger.C([x3,$$GHCziReal_even1],function(y3){
	     switch(y3.g){
	     case 1:
	      $$GHCziIntegerziType_divModInteger.C([h3,x3],function(z3){
	       var A3=z3[1];
	       $$GHCziIntegerziType_neqInteger.J(A3,$$Main$B);
	      },[]);break;
	     case 2:
	      $A($$GHCziErr_divZZeroError);break;
	     }
	    },[h3,x3]);
	   },[h3],"sat");
	   $$GHCziList_all.C([w3,v3],function(B3){
	    switch(B3.g){
	    case 1:
	     $A(l3);break;
	    case 2:
	     var C3=$t(function(){
	      $$GHCziShow_zdfShowIntegerzuzdcshow.J(h3);
	     },[h3],"sat");
	     var D3=$d(2,[C3],"sat");
	     var E3=$d(5,[D3],"sat");
	     var F3=$d(6,[E3,$$Main$C],"sat");
	     var G3=$d(6,[$$Main$D,F3],"sat");
	     $$TextziBlazzeziRendererziText_renderMarkupWith.J($$DataziTextziEncoding_decodeUtf8,G3);break;
	    }
	   },[h3,l3]);
	  },[h3,l3]);break;
	 }
	},[h3,l3]);break;
       case 2:
	$A($$Main$L);break;
       }
      },[h3]);break;
     case 2:
      $A($$Main$L);break;
     }
    },[f3,h3]);
   },[f3]);break;
  }
 },[]);
},"at src/Main.hs:103:1");
var $$Main$N=$F(2,function(H3,I3){
 $M(H3,function(J3){
  switch(J3.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var K3=J3.v[0],L3=J3.v[1],M3=J3.v[2],N3=J3.v[3];
   var O3=I3.greaterThanOrEqual(M3)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(O3.g){
   case 1:
    var g4=L3.add(I3);
    var c4=$hs_indexWord16Arrayzh(K3,g4);
    var P3=$hs_ltWordzh(c4,goog.math.Long.fromBits(55296,0));
    switch(P3.g){
    case 1:
     var Q3=$hs_gtWordzh(c4,goog.math.Long.fromBits(56319,0));
     switch(Q3.g){
     case 1:
      var f4=g4.add(goog.math.Long.fromBits(1,0));
      var e4=$hs_indexWord16Arrayzh(K3,f4);
      var S3=I3.add(goog.math.Long.fromBits(2,0));
      var R3=$d(1,[S3],"sat");
      var T3=$d(1,[J3,R3],"sat");
      var d4=$hs_word2Intzh(e4);
      var Z3=d4.subtract(goog.math.Long.fromBits(56320,0));
      var b4=$hs_word2Intzh(c4);
      var a4=b4.subtract(goog.math.Long.fromBits(55296,0));
      var Y3=$hs_uncheckedIShiftLzh(a4,goog.math.Long.fromBits(10,0));
      var X3=Y3.add(Z3);
      var W3=X3.add(goog.math.Long.fromBits(65536,0));
      var V3=$hs_chrzh(W3);
      var U3=$d(1,[V3],"sat");
      $R(3,[U3,T3],"Yield");break;
     case 2:
      var i4=I3.add(goog.math.Long.fromBits(1,0));
      var h4=$d(1,[i4],"sat");
      var j4=$d(1,[J3,h4],"sat");
      var m4=$hs_word2Intzh(c4);
      var l4=$hs_chrzh(m4);
      var k4=$d(1,[l4],"sat");
      $R(3,[k4,j4],"Yield");break;
     }break;
    case 2:
     var o4=I3.add(goog.math.Long.fromBits(1,0));
     var n4=$d(1,[o4],"sat");
     var p4=$d(1,[J3,n4],"sat");
     var s4=$hs_word2Intzh(c4);
     var r4=$hs_chrzh(s4);
     var q4=$d(1,[r4],"sat");
     $R(3,[q4,p4],"Yield");break;
    }break;
   case 2:
    $$Main$N.J(N3,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[I3]);
},"$wnext1");
var $$Main$O=$F(2,function(t4,u4){
 $$Main$N.C([t4,u4],function(v4){
  switch(v4.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var w4=v4.v[0];
   $M(w4,function(x4){
    var y4=x4.v[0],z4=x4.v[1];
    $M(z4,function(A4){
     var B4=A4.v[0];
     $$Main$O.J(y4,B4);
    },[y4]);
   },[]);break;
  case 3:
   var C4=v4.v[0],D4=v4.v[1];
   $M(D4,function(E4){
    var F4=E4.v[0],G4=E4.v[1];
    $M(G4,function(H4){
     var I4=H4.v[0];
     var J4=$t(function(){
      $$Main$O.J(F4,I4);
     },[F4,I4],"sat");
     $R(2,[C4,J4],":");
    },[C4,F4]);
   },[C4]);break;
  }
 },[]);
},"$wunfold");
var $$Main$P=$F(2,function(K4,L4){
 $M(K4,function(M4){
  switch(M4.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var N4=M4.v[0],O4=M4.v[1],P4=M4.v[2],Q4=M4.v[3];
   var R4=L4.greaterThanOrEqual(P4)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(R4.g){
   case 1:
    var j5=O4.add(L4);
    var f5=$hs_indexWord16Arrayzh(N4,j5);
    var S4=$hs_ltWordzh(f5,goog.math.Long.fromBits(55296,0));
    switch(S4.g){
    case 1:
     var T4=$hs_gtWordzh(f5,goog.math.Long.fromBits(56319,0));
     switch(T4.g){
     case 1:
      var i5=j5.add(goog.math.Long.fromBits(1,0));
      var h5=$hs_indexWord16Arrayzh(N4,i5);
      var V4=L4.add(goog.math.Long.fromBits(2,0));
      var U4=$d(1,[V4],"sat");
      var W4=$d(1,[M4,U4],"sat");
      var g5=$hs_word2Intzh(h5);
      var c5=g5.subtract(goog.math.Long.fromBits(56320,0));
      var e5=$hs_word2Intzh(f5);
      var d5=e5.subtract(goog.math.Long.fromBits(55296,0));
      var b5=$hs_uncheckedIShiftLzh(d5,goog.math.Long.fromBits(10,0));
      var a5=b5.add(c5);
      var Z4=a5.add(goog.math.Long.fromBits(65536,0));
      var Y4=$hs_chrzh(Z4);
      var X4=$d(1,[Y4],"sat");
      $R(3,[X4,W4],"Yield");break;
     case 2:
      var l5=L4.add(goog.math.Long.fromBits(1,0));
      var k5=$d(1,[l5],"sat");
      var m5=$d(1,[M4,k5],"sat");
      var p5=$hs_word2Intzh(f5);
      var o5=$hs_chrzh(p5);
      var n5=$d(1,[o5],"sat");
      $R(3,[n5,m5],"Yield");break;
     }break;
    case 2:
     var r5=L4.add(goog.math.Long.fromBits(1,0));
     var q5=$d(1,[r5],"sat");
     var s5=$d(1,[M4,q5],"sat");
     var v5=$hs_word2Intzh(f5);
     var u5=$hs_chrzh(v5);
     var t5=$d(1,[u5],"sat");
     $R(3,[t5,s5],"Yield");break;
    }break;
   case 2:
    $$Main$P.J(Q4,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[L4]);
},"$wnext2");
var $$Main$Q=$F(2,function(w5,x5){
 $$Main$P.C([w5,x5],function(y5){
  switch(y5.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var z5=y5.v[0];
   $M(z5,function(A5){
    var B5=A5.v[0],C5=A5.v[1];
    $M(C5,function(D5){
     var E5=D5.v[0];
     $$Main$Q.J(B5,E5);
    },[B5]);
   },[]);break;
  case 3:
   var F5=y5.v[0],G5=y5.v[1];
   $M(G5,function(H5){
    var I5=H5.v[0],J5=H5.v[1];
    $M(J5,function(K5){
     var L5=K5.v[0];
     var M5=$t(function(){
      $$Main$Q.J(I5,L5);
     },[I5,L5],"sat");
     $R(2,[F5,M5],":");
    },[F5,I5]);
   },[F5]);break;
  }
 },[]);
},"$wunfold1");
var $$Main$R=$F(3,function(N5,O5,P5){
 $M(N5,function(Q5){
  var R5=Q5.v[0],S5=Q5.v[1];
  var $ff=webkit_dom_element_focus(R5);
  var T5=[P5,$ff];
  var U5=T5[0];
  var V6=$hs_touchzh(S5,U5);
  var V5=$hs_newMVarzh(V6);
  var W5=V5[0],X5=V5[1];
  var Y5=$f(1,function(Z5){
   var a6=$f(1,function(b6){
    $b($hs_takeMVarzh,[X5,b6],function(c6){
     var d6=c6[0],e6=c6[1];
     var f6=$t(function(){
      $$Main$M.C([e6],function(g6){
       $$Main$Q.J(g6,goog.math.Long.fromBits(0,0));
      },[]);
     },[e6],"sat");
     $$GraphicsziUIziGtkziWebKitziDOMziHTMLElement_htmlElementSetInnerHTML1.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,O5,f6,d6);
    },[O5]);
   },[X5,O5],"sat");
   var h6=$f(1,function(b){
    $$Main_zdsforever.J(a6,b);
   },[a6],"sat");
   $k($hs_catchzh,[h6,$$GHCziConcziSync_forkIO2,Z5]);
  },[X5,O5],"sat");
  var i6=$hs_forkzh(Y5,W5);
  var j6=i6[0];
  var k6=$f(1,function(l6){
   var $ff=webkit_dom_html_input_element_get_value(R5);
   var m6=[l6,$ff];
   var n6=m6[0],o6=m6[1];
   var F6=$hs_touchzh(S5,n6);
   $$ForeignziCziString_zdwa.C([o6,F6],function(p6){
    var q6=p6[0],r6=p6[1];
    var $ff=g_free(o6);
    var s6=[q6,$ff];
    var t6=s6[0];
    var u6=$t(function(){
     $$SystemziGlibziUTFString_fromUTF.J(r6);
    },[r6],"a20");
    var v6=$t(function(){
     $$Main$M.C([u6],function(w6){
      $$Main$O.J(w6,goog.math.Long.fromBits(0,0));
     },[]);
    },[u6],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziHTMLElement_htmlElementSetInnerHTML1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,O5,v6,t6],function(x6){
     var y6=x6[0];
     $b($hs_tryTakeMVarzh,[X5,y6],function(z6){
      var A6=z6[0],B6=z6[1];
      $M(B6,function(C6){
       switch(C6.toString()){
       case "0":
	$b($hs_putMVarzh,[X5,u6,A6],function(E6){
	 $r([E6,$$GHCziTuple_Z0T]);
	},[]);break;
       default:
	$b($hs_putMVarzh,[X5,u6,A6],function(D6){
	 $r([D6,$$GHCziTuple_Z0T]);
	},[]);
       }
      },[X5,u6,A6]);
     },[X5,u6]);
    },[X5,u6]);
   },[X5,O5,o6]);
  },[R5,S5,X5,O5],"a18");
  var G6=$f(3,function(H6,I6,b){
   k6.J(b);
  },[k6],"sat");
  $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,Q5,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeydown2,$$GHCziTypes_False,G6,j6],function(J6){
   var K6=J6[0];
   var L6=$f(3,function(M6,N6,b){
    k6.J(b);
   },[k6],"sat");
   $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,Q5,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeyup2,$$GHCziTypes_False,L6,K6],function(O6){
    var P6=O6[0];
    var Q6=$f(3,function(R6,S6,b){
     k6.J(b);
    },[k6],"sat");
    $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,Q5,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeypress2,$$GHCziTypes_False,Q6,P6],function(T6){
     var U6=T6[0];
     $r([U6,$$GHCziTuple_Z0T]);
    },[]);
   },[k6,Q5]);
  },[k6,Q5]);
 },[P5,O5]);
},"$wa");
var $$Main$S=$F(3,function(c,a,b){
 $$Main$R.J(c,a,b);
},"a16");
//@ sourceURL=hs1.js
