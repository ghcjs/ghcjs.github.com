//$$ZCMain_main

var $$GraphicsziUIziGtkziWebKitziGHCJS_runWebGUI1=$f(2,function(z,A){
 var $ff=ghcjs_currentWindow();
 var B=[A,$ff];
 var C=B[0],D=B[1];
 var E=$f(2,function(F,G){
  $M(G,function(H){
   switch(H.g){
   case 1:
    $$GraphicsziUIziGtkziGeneralziGeneral_initGUI.C([F],function(I){
     var J=I[0];
     $$GraphicsziUIziGtkziAbstractziObject_zdwa.C([$$GraphicsziUIziGtkziTypes_mkWindow1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,$$GraphicsziUIziGtkziWindowsziWindow_windowNew2,J],function(K){
      var L=K[0],M=K[1];
      $$GraphicsziUIziGtkziGeneralziGeneral_timeoutAdd2.C([$$GraphicsziUIziGtkziWebKitziGHCJS$b,$$SystemziGlibziMainLoop_priorityHigh,$$GraphicsziUIziGtkziWebKitziGHCJS$c,L],function(N){
       var O=N[0];
       $M(M,function(P){
	var Q=P.v[0],R=P.v[1];
	var $ff=gtk_window_set_default_size(Q,goog.math.Long.fromBits(900,0),goog.math.Long.fromBits(600,0));
	var S=[O,$ff];
	var T=S[0];
	var y2=$hs_touchzh(R,T);
	var $ff=gtk_window_set_position(Q,goog.math.Long.fromBits(1,0));
	var U=[y2,$ff];
	var V=U[0];
	var x2=$hs_touchzh(R,V);
	$$GraphicsziUIziGtkziAbstractziObject_zdwa.C([$$GraphicsziUIziGtkziTypes_mkScrolledWindow1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,$$GraphicsziUIziGtkziWebKitziGHCJS$l,x2],function(W){
	 var X=W[0],Y=W[1];
	 $$GraphicsziUIziGtkziWebKitziWebView_webViewNew1.C([X],function(Z){
	  var a1=Z[0],b1=Z[1];
	  var c1=$f(1,function(d1){
	   $M(b1,function(e1){
	    var f1=e1.v[0],g1=e1.v[1];
	    var $ff=webkit_web_view_get_settings(f1);
	    var h1=[d1,$ff];
	    var i1=h1[0],j1=h1[1];
	    var l1=$hs_touchzh(g1,i1);
	    var k1=$d(1,[j1],"sat");
	    $r([l1,k1]);
	   },[d1]);
	  },[b1],"sat");
	  $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkWebSettings1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,c1,a1],function(m1){
	   var n1=m1[0],o1=m1[1];
	   $$SystemziGlibziProperties_newAttrFromBoolProperty4.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings,$$SystemziGlibziGTypeConstants_string1,$$SystemziGlibziGValueTypes_valueGetString1,$$GraphicsziUIziGtkziWebKitziWebSettings_webSettingsUserAgent1,o1,n1],function(p1){
	    var q1=p1[0],r1=p1[1];
	    var s1=$t(function(){
	     $$GHCziBase_zpzp.J(r1,$$GraphicsziUIziGtkziWebKitziGHCJS$h);
	    },[r1],"sat");
	    var t1=$d(1,[$$GraphicsziUIziGtkziWebKitziGHCJS$f,s1],"sat");
	    var u1=$d(2,[t1,$$GHCziTypes_ZMZN],"sat");
	    $$SystemziGlibziAttributes_set1.C([o1,u1,q1],function(v1){
	     var w1=v1[0];
	     $M(b1,function(x1){
	      var y1=x1.v[0],z1=x1.v[1];
	      $M(o1,function(A1){
	       var B1=A1.v[0],C1=A1.v[1];
	       var $ff=webkit_web_view_set_settings(y1,B1);
	       var D1=[w1,$ff];
	       var E1=D1[0];
	       var w2=$hs_touchzh(C1,E1);
	       var v2=$hs_touchzh(z1,w2);
	       $M(Y,function(F1){
		var G1=F1.v[0],H1=F1.v[1];
		var $ff=gtk_container_add(Q,G1);
		var I1=[v2,$ff];
		var J1=I1[0];
		var u2=$hs_touchzh(H1,J1);
		var t2=$hs_touchzh(R,u2);
		var $ff=gtk_container_add(G1,y1);
		var K1=[t2,$ff];
		var L1=K1[0];
		var s2=$hs_touchzh(z1,L1);
		var r2=$hs_touchzh(H1,s2);
		$$SystemziGlibziSignals_connectGeneric1.C([$$GraphicsziUIziGtkziTypes_zdfGObjectClassWindow,$$GraphicsziUIziGtkziAbstractziWidget_afterDestroy2,$$GHCziTypes_False,P,$$GraphicsziUIziGtkziWebKitziGHCJS$k,r2],function(M1){
		 var N1=M1[0];
		 var $ff=gtk_widget_show_all(Q);
		 var O1=[N1,$ff];
		 var P1=O1[0];
		 var q2=$hs_touchzh(R,P1);
		 var Q1=$t(function(){
		  z.J(x1);
		 },[x1,z],"lvl7");
		 var R1=$f(3,function(S1,T1,U1){
		  var V1=$f(1,function(W1){
		   var X1=$f(1,function(Y1){
		    $r([Y1,T1]);
		   },[T1],"sat");
		   $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziSignals_connectzuOBJECTzuOBJECTzuOBJECTzuOBJECTzuzuBOOL2,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,X1,W1],function(Z1){
		    var a2=Z1[0];
		    Q1.J(a2);
		   },[Q1]);
		  },[Q1,T1],"sat");
		  $k($hs_catchzh,[V1,$$SystemziGlibziGError_failOnGError2,U1]);
		 },[Q1],"sat");
		 $$SystemziGlibziSignals_connectGeneric1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebView,$$GraphicsziUIziGtkziWebKitziWebView_loadFinished2,$$GHCziTypes_False,x1,R1,q2],function(b2){
		  var c2=b2[0];
		  $$SystemziEnvironment_getArgs1.C([c2],function(d2){
		   var e2=d2[0],f2=d2[1];
		   $M(f2,function(g2){
		    switch(g2.g){
		    case 1:
		     z.C([x1,e2],function(h2){
		      var i2=h2[0];
		      var $ff=gtk_main();
		      var j2=[i2,$ff];
		      var k2=j2[0];
		      $r([k2,$$GHCziTuple_Z0T]);
		     },[]);break;
		    case 2:
		     var l2=g2.v[0];
		     $$GraphicsziUIziGtkziWebKitziWebView_webViewLoadUri1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebView,x1,l2,e2],function(m2){
		      var n2=m2[0];
		      var $ff=gtk_main();
		      var o2=[n2,$ff];
		      var p2=o2[0];
		      $r([p2,$$GHCziTuple_Z0T]);
		     },[]);break;
		    }
		   },[x1,z,e2]);
		  },[x1,z]);
		 },[x1,z]);
		},[Q,R,x1,z]);
	       },[Q,R,y1,z1,v2,P,x1,z]);
	      },[Q,R,y1,w1,z1,Y,P,x1,z]);
	     },[Q,R,o1,w1,Y,P,z]);
	    },[Q,R,b1,o1,Y,P,z]);
	   },[Q,R,b1,o1,Y,P,z]);
	  },[Q,R,b1,Y,P,z]);
	 },[Q,R,Y,P,z]);
	},[Q,R,P,z]);
       },[O,z]);
      },[M,z]);
     },[z]);
    },[z]);break;
   case 2:
    var z2=H.v[0];
    var A2=$t(function(){
     $M(z2,function(B2){
      var C2=B2.v[0];
      $R(1,[C2],"Ptr");
     },[]);
    },[z2],"sat");
    $$SystemziGlibziGType_typeInstanceIsA.C([A2,$$GraphicsziUIziGtkziWebKitziTypes_gTypeDOMWindow],function(D2){
     switch(D2.g){
     case 1:
      $A($$GraphicsziUIziGtkziWebKitziTypes_castToDOMWindow1);break;
     case 2:
      $M(z2,function(E2){
       var F2=E2.v[0],G2=E2.v[1];
       var $ff=webkit_dom_dom_window_get_navigator(F2);
       var H2=[F,$ff];
       var I2=H2[0],J2=H2[1];
       var m3=$hs_touchzh(G2,I2);
       var K2=$f(2,function(L2,M2){
	$M(M2,function(N2){
	 switch(N2.g){
	 case 1:
	  $$GHCziIO_failIO.J($$GraphicsziUIziGtkziWebKitziGHCJS$i,L2);break;
	 case 2:
	  var O2=N2.v[0];
	  $M(O2,function(P2){
	   var Q2=P2.v[0],R2=P2.v[1];
	   var $ff=webkit_dom_navigator_get_user_agent(Q2);
	   var S2=[L2,$ff];
	   var T2=S2[0],U2=S2[1];
	   var d3=$hs_touchzh(R2,T2);
	   $$ForeignziCziString_zdwa.C([U2,d3],function(V2){
	    var W2=V2[0],X2=V2[1];
	    var $ff=g_free(U2);
	    var Y2=[W2,$ff];
	    var Z2=Y2[0];
	    var a3=$t(function(){
	     $$SystemziGlibziUTFString_fromUTF.C([X2],function(b3){
	      $$GHCziList_reverse1.J(b3,$$GHCziTypes_ZMZN);
	     },[]);
	    },[X2],"sat");
	    $$DataziList_isPrefixOf.C([$$GHCziClasses_zdfEqChar,$$GraphicsziUIziGtkziWebKitziGHCJS$m,a3],function(c3){
	     switch(c3.g){
	     case 1:
	      z.J(E2,Z2);break;
	     case 2:
	      $r([Z2,$$GHCziTuple_Z0T]);break;
	     }
	    },[z,E2,Z2]);
	   },[z,U2,E2]);
	  },[z,L2,E2]);break;
	 }
	},[z,L2,E2]);
       },[z,E2],"$j1");
       var e3=$hs_eqAddrzh(J2,null);
       switch(e3.g){
       case 1:
	var f3=$f(1,function(g3){
	 var h3=$d(1,[J2],"sat");
	 $r([g3,h3]);
	},[J2],"sat");
	$$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkNavigator1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,f3,m3],function(i3){
	 var j3=i3[0],k3=i3[1];
	 var l3=$d(2,[k3],"sat");
	 K2.J(j3,l3);
	},[z,E2,K2]);break;
       case 2:
	K2.J(m3,$$DataziMaybe_Nothing);break;
       }
      },[F,z]);break;
     }
    },[F,z,z2]);break;
   }
  },[F,z]);
 },[z],"$j");
 var n3=$hs_eqAddrzh(D,null);
 switch(n3.g){
 case 1:
  var o3=$f(1,function(p3){
   var q3=$d(1,[D],"sat");
   $r([p3,q3]);
  },[D],"sat");
  $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkWebView1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,o3,C],function(r3){
   var s3=r3[0],t3=r3[1];
   var u3=$d(2,[t3],"sat");
   E.J(s3,u3);
  },[z,E]);break;
 case 2:
  E.J(C,$$DataziMaybe_Nothing);break;
 }
},[],"in `ghcjs-dom-0.0.1:Graphics.UI.Gtk.WebKit.GHCJS'");
var $$GraphicsziUIziGtkziWebKitziGHCJS$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHCJS");
},"at src/Graphics/UI/Gtk/WebKit/GHCJS.hs:47:12");
var $$GraphicsziUIziGtkziWebKitziGHCJS$b=$F(1,function(w3){
 $b($hs_yieldzh,[w3],function(x3){
  $r([x3,$$GHCziTypes_True]);
 },[]);
},"a");
var $$GraphicsziUIziGtkziWebKitziGHCJS$c=$D(1,function(){
 $r([goog.math.Long.fromBits(10,0)]);
},"lvl");
var $$GraphicsziUIziGtkziWebKitziGHCJS$d=$F(2,function(y3,z3){
 $$SystemziGlibziProperties_newAttrFromBoolProperty4.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings,$$SystemziGlibziGTypeConstants_string1,$$SystemziGlibziGValueTypes_valueGetString1,$$GraphicsziUIziGtkziWebKitziWebSettings_webSettingsUserAgent1,y3,z3);
},"a1");
var $$GraphicsziUIziGtkziWebKitziGHCJS$e=$F(3,function(A3,B3,C3){
 $$SystemziGlibziProperties_newAttrFromBoolProperty2.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings,$$SystemziGlibziGTypeConstants_string1,$$SystemziGlibziGValueTypes_valueSetString,$$GraphicsziUIziGtkziWebKitziWebSettings_webSettingsUserAgent1,A3,B3,C3);
},"a2");
var $$GraphicsziUIziGtkziWebKitziGHCJS$f=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziWebSettings_webSettingsUserAgent1,$$GraphicsziUIziGtkziWebKitziGHCJS$d,$$GraphicsziUIziGtkziWebKitziGHCJS$e]);
},"lvl1");
var $$GraphicsziUIziGtkziWebKitziGHCJS$g=$D(1,function(){
 $r([" "]);
},"a3");
var $$GraphicsziUIziGtkziWebKitziGHCJS$h=$D(2,function(){
 $r([$$GraphicsziUIziGtkziWebKitziGHCJS$g,$$GraphicsziUIziGtkziWebKitziGHCJS$a]);
},"lvl2");
var $$GraphicsziUIziGtkziWebKitziGHCJS$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Graphics/UI/Gtk/WebKit/GHCJS.hs:53:7-12");
},"a4");
var $$GraphicsziUIziGtkziWebKitziGHCJS$j=$D(2,function(){
 $r([$$GraphicsziUIziGtkziWebKitziGHCJS$g,$$GraphicsziUIziGtkziWebKitziGHCJS$a]);
},"lvl3");
var $$GraphicsziUIziGtkziWebKitziGHCJS$k=$F(2,function(D3,E3){
 $k($hs_catchzh,[$$GraphicsziUIziGtkziGeneralziGeneral_mainQuit,$$SystemziGlibziGError_failOnGError2,E3]);
},"lvl4");
var $$GraphicsziUIziGtkziWebKitziGHCJS$l=$F(1,function(F3){
 $M($$SystemziGlibziFFI_nullForeignPtr,function(G3){
  var H3=G3.v[0],I3=G3.v[1];
  $M($$SystemziGlibziFFI_nullForeignPtr,function(J3){
   var K3=J3.v[0],L3=J3.v[1];
   var $ff=gtk_scrolled_window_new(H3,K3);
   var M3=[F3,$ff];
   var N3=M3[0],O3=M3[1];
   var R3=$hs_touchzh(L3,N3);
   var Q3=$hs_touchzh(I3,R3);
   var P3=$d(1,[O3],"sat");
   $r([Q3,P3]);
  },[H3,F3,I3]);
 },[F3]);
},"lvl5");
var $$GraphicsziUIziGtkziWebKitziGHCJS$m=$T(function(){
 $$GHCziList_reverse1.J($$GraphicsziUIziGtkziWebKitziGHCJS$j,$$GHCziTypes_ZMZN);
},"lvl6");
var $$SystemziGlibziAttributes_set1=$f(3,function(j,k,l){
 var m=$f(2,function(n,o){
  $M(n,function(p){
   switch(p.g){
   case 1:
    $r([o,$$GHCziTuple_Z0T]);break;
   case 2:
    var q=p.v[0],r=p.v[1];
    $M(q,function(s){
     switch(s.g){
     case 1:
      var t=s.v[0],u=s.v[1];
      $M(t,function(v){
       var w=v.v[2];
       w.C([j,u,o],function(x){
	var y=x[0];
	m.J(r,y);
       },[j,r,m]);
      },[o,j,u,r,m]);break;
     case 2:
      var z=s.v[0],A=s.v[1];
      $M(z,function(B){
       var C=B.v[1],D=B.v[2];
       C.C([j,o],function(E){
	var F=E[0],G=E[1];
	var H=$t(function(){
	 A.J(G);
	},[G,A],"sat");
	D.C([j,H,F],function(I){
	 var J=I[0];
	 m.J(r,J);
	},[j,r,m]);
       },[j,r,m,A,D]);
      },[o,j,r,m,A]);break;
     case 3:
      var K=s.v[0],L=s.v[1];
      $M(K,function(M){
       var N=M.v[2];
       L.C([o],function(O){
	var P=O[0],Q=O[1];
	N.C([j,Q,P],function(R){
	 var S=R[0];
	 m.J(r,S);
	},[j,r,m]);
       },[j,r,m,N]);
      },[o,j,r,m,L]);break;
     case 4:
      var T=s.v[0],U=s.v[1];
      $M(T,function(V){
       var W=V.v[1],X=V.v[2];
       W.C([j,o],function(Y){
	var Z=Y[0],a1=Y[1];
	U.C([a1,Z],function(b1){
	 var c1=b1[0],d1=b1[1];
	 X.C([j,d1,c1],function(e1){
	  var f1=e1[0];
	  m.J(r,f1);
	 },[j,r,m]);
	},[j,r,m,X]);
       },[j,r,m,U,X]);
      },[o,j,r,m,U]);break;
     case 5:
      var g1=s.v[0],h1=s.v[1];
      $M(g1,function(i1){
       var j1=i1.v[2];
       var k1=$t(function(){
	h1.J(j);
       },[j,h1],"sat");
       j1.C([j,k1,o],function(l1){
	var m1=l1[0];
	m.J(r,m1);
       },[j,r,m]);
      },[o,j,r,m,h1]);break;
     case 6:
      var n1=s.v[0],o1=s.v[1];
      $M(n1,function(p1){
       var q1=p1.v[1],r1=p1.v[2];
       q1.C([j,o],function(s1){
	var t1=s1[0],u1=s1[1];
	var v1=$t(function(){
	 o1.J(j,u1);
	},[j,u1,o1],"sat");
	r1.C([j,v1,t1],function(w1){
	 var x1=w1[0];
	 m.J(r,x1);
	},[j,r,m]);
       },[j,r,m,o1,r1]);
      },[o,j,r,m,o1]);break;
     }
    },[o,j,r,m]);break;
   }
  },[o,j,m]);
 },[j],"a");
 m.J(k,l);
},[],"in `glib-0.12.4:System.Glib.Attributes'");
var $$SystemziGlibziFFI_nullForeignPtr1=$f(1,function(J){
 var Q=$hs_noDuplicatezh(J);
 var K=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Q);
 var L=K[0],M=K[1];
 var N=$d(1,[M],"sat");
 var O=$d(1,[N],"sat");
 var P=$d(1,[null,O],"sat");
 $r([L,P]);
},[],"in `glib-0.12.4:System.Glib.FFI'");
var $$SystemziGlibziFFI_nullForeignPtr=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$SystemziGlibziFFI_nullForeignPtr1);
},[],"at System/Glib/FFI.hs:66:1");
var $$SystemziGlibziGType_typeInstanceIsA=$f(2,function(b,c){
 var d=$f(1,function(e){
  var o=$hs_noDuplicatezh(e);
  $M(b,function(f){
   var g=f.v[0];
   $M(c,function(h){
    var i=h.v[0];
    var $ff=g_type_check_instance_is_a(g,i);
    var j=[o,$ff];
    var k=j[0],l=j[1];
    var n=$hs_narrow32Intzh(l);
    var m=$d(1,[n],"sat");
    $r([k,m]);
   },[g,o]);
  },[c,o]);
 },[b,c],"sat");
 $$GHCziIO_unsafeDupablePerformIO.C([d],function(p){
  var q=p.v[0];
  $M(q,function(r){
   switch(r.toString()){
   case "0":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"at System/Glib/GType.chs:45:1");
var $$SystemziGlibziGTypeConstants_string1=$D(1,function(){
 $r([goog.math.Long.fromBits(64,0)]);
},"in `glib-0.12.4:System.Glib.GTypeConstants'");
var $$SystemziGlibziGValueTypes_gzuvaluezusetzustring=$f(3,function(a,b,c){
 $$SystemziGlibziGValueTypes$c.J(a,b,c);
},[],"at System/Glib/GValueTypes.chs:287:3");
var $$SystemziGlibziGValueTypes_valueSetString=$f(2,function(d,e){
 var f=$f(2,function(g,c){
  $$SystemziGlibziGValueTypes_gzuvaluezusetzustring.J(d,g,c);
 },[d],"sat");
 var h=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(e);
 },[e],"sat");
 $$ForeignziCziString_withCAString.J(h,f);
},[],"at System/Glib/GValueTypes.chs:163:1");
var $$SystemziGlibziGValueTypes_zdwa4=$f(2,function(W2,X2){
 $M(W2,function(Y2){
  var Z2=Y2.v[0];
  var $ff=g_value_get_string(Z2);
  var a3=[X2,$ff];
  var b3=a3[0],c3=a3[1];
  var d3=$hs_eqAddrzh(c3,null);
  switch(d3.g){
  case 1:
   $$ForeignziCziString_zdwa.C([c3,b3],function(e3){
    var f3=e3[0],g3=e3[1];
    var h3=$t(function(){
     $$SystemziGlibziUTFString_fromUTF.J(g3);
    },[g3],"sat");
    $r([f3,h3]);
   },[]);break;
  case 2:
   $r([b3,$$GHCziTypes_ZMZN]);break;
  }
 },[X2]);
},[],"in `glib-0.12.4:System.Glib.GValueTypes'");
var $$SystemziGlibziGValueTypes_valueGetString1=$f(2,function(b,c){
 $$SystemziGlibziGValueTypes_zdwa4.J(b,c);
},[],"in `glib-0.12.4:System.Glib.GValueTypes'");
var $$SystemziGlibziGValueTypes$c=$F(3,function(j6,k6,l6){
 $M(j6,function(m6){
  var n6=m6.v[0];
  $M(k6,function(o6){
   var p6=o6.v[0];
   var $ff=g_value_set_string(n6,p6);
   var q6=[l6,$ff];
   var r6=q6[0];
   $r([r6,$$GHCziTuple_Z0T]);
  },[n6,l6]);
 },[k6,l6]);
},"a2");
var $$SystemziGlibziMainLoop_mkSourceFunc=$f(2,function(a,b){
 $$SystemziGlibziMainLoop$a.J(a,b);
},[],"at System/Glib/MainLoop.chs:74:32");
var $$SystemziGlibziMainLoop_priorityHigh=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967196,4294967295)]);
},"at System/Glib/MainLoop.chs:207:1");
var $$SystemziGlibziMainLoop_idleAdd3=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `glib-0.12.4:System.Glib.MainLoop'");
var $$SystemziGlibziMainLoop_idleAdd2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `glib-0.12.4:System.Glib.MainLoop'");
var $$SystemziGlibziMainLoop_timeoutAdd2=$f(4,function(o5,p5,q5,r5){
 var s5=$f(1,function(t5){
  o5.C([t5],function(u5){
   var v5=u5[0],w5=u5[1];
   var x5=$t(function(){
    $M(w5,function(y5){
     switch(y5.g){
     case 1:
      $A($$SystemziGlibziMainLoop_idleAdd3);break;
     case 2:
      $A($$SystemziGlibziMainLoop_idleAdd2);break;
     }
    },[]);
   },[w5],"sat");
   $r([v5,x5]);
  },[]);
 },[o5],"a2");
 var z5=$f(2,function(A5,b){
  s5.J(b);
 },[s5],"sat");
 $$SystemziGlibziMainLoop_mkSourceFunc.C([z5,r5],function(B5){
  var C5=B5[0],D5=B5[1];
  $M(p5,function(E5){
   var F5=E5.v[0];
   $M(q5,function(G5){
    var H5=G5.v[0];
    $M(D5,function(I5){
     var J5=I5.v[0];
     var R5=$hs_int2Wordzh(H5);
     var Q5=$hs_narrow32Wordzh(R5);
     var P5=$hs_narrow32Intzh(F5);
     var $ff=g_timeout_add_full(P5,Q5,J5,J5,$hs_labelFunction("freeHaskellFunctionPtr",null));
     var K5=[C5,$ff];
     var L5=K5[0],M5=K5[1];
     var O5=$hs_narrow32Wordzh(M5);
     var N5=$d(1,[O5],"sat");
     $r([L5,N5]);
    },[F5,H5,C5]);
   },[D5,F5,C5]);
  },[q5,D5,C5]);
 },[p5,q5]);
},[],"in `glib-0.12.4:System.Glib.MainLoop'");
var $$SystemziGlibziMainLoop$a=$F(2,function(u6,v6){
 var w6=[v6,u6];
 var x6=w6[0],y6=w6[1];
 var $ff=createAdjustor(goog.math.Long.fromBits(1,0),y6,$hs_labelFunction("SystemziGlibziMainLoop_dciK",null),"p");
 var z6=[x6,$ff];
 var A6=z6[0],B6=z6[1];
 var C6=$d(1,[B6],"sat");
 $r([A6,C6]);
},"a");
var $$SystemziGlibziProperties_newAttrFromBoolProperty2=$f(7,function(a,b,c,d,e,f,g){
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(h){
  var i=h.v[0];
  i.C([g],function(j){
   var k=j[0],l=j[1];
   var m=$t(function(){
    $$SystemziGlibziTypes_toGObject.J(a,e);
   },[a,e],"a");
   var n=$f(2,function(o,p){
    var q=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(24,0),p);
    var r=q[0],s=q[1];
    var t=$hs_unsafeFreezzeByteArrayzh(s,r);
    var u=t[0],v=t[1];
    var B=$hs_byteArrayContentszh(v);
    var Q=$hs_plusAddrzh(B,goog.math.Long.fromBits(0,0));
    var P=$hs_writeWord64OffAddrzh(Q,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),u);
    $M(b,function(w){
     var x=w.v[0];
     var $ff=g_value_init(B,x);
     var y=[P,$ff];
     var z=y[0];
     var A=$d(1,[B],"sat");
     c.C([A,f,z],function(C){
      var D=C[0];
      $M(m,function(E){
       var F=E.v[0],G=E.v[1];
       $M(o,function(H){
	var I=H.v[0];
	var $ff=g_object_set_property(F,I,B);
	var J=[D,$ff];
	var K=J[0];
	var O=$hs_touchzh(G,K);
	var $ff=g_value_unset(B);
	var L=[O,$ff];
	var M=L[0];
	var N=$hs_touchzh(v,M);
	$r([N,$$GHCziTuple_Z0T]);
       },[v,B,F,D,G]);
      },[v,B,o,D]);
     },[m,v,B,o]);
    },[m,v,B,P,c,f,o]);
   },[m,b,c,f],"sat");
   $$GHCziForeign_charIsRepresentable3.J(l,d,n,k);
  },[a,e,d,b,c,f]);
 },[g,a,e,d,b,c,f]);
},[],"in `glib-0.12.4:System.Glib.Properties'");
var $$SystemziGlibziProperties_newAttrFromBoolProperty4=$f(6,function(B4,C4,D4,E4,F4,G4){
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(H4){
  var I4=H4.v[0];
  I4.C([G4],function(J4){
   var K4=J4[0],L4=J4[1];
   var M4=$t(function(){
    $$SystemziGlibziTypes_toGObject.J(B4,F4);
   },[B4,F4],"a");
   var N4=$f(2,function(O4,P4){
    var Q4=$hs_newPinnedByteArrayzh(goog.math.Long.fromBits(24,0),P4);
    var R4=Q4[0],S4=Q4[1];
    var T4=$hs_unsafeFreezzeByteArrayzh(S4,R4);
    var U4=T4[0],V4=T4[1];
    var i5=$hs_byteArrayContentszh(V4);
    var r5=$hs_plusAddrzh(i5,goog.math.Long.fromBits(0,0));
    var q5=$hs_writeWord64OffAddrzh(r5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),U4);
    $M(C4,function(W4){
     var X4=W4.v[0];
     var $ff=g_value_init(i5,X4);
     var Y4=[q5,$ff];
     var Z4=Y4[0];
     $M(M4,function(a5){
      var b5=a5.v[0],c5=a5.v[1];
      $M(O4,function(d5){
       var e5=d5.v[0];
       var $ff=g_object_get_property(b5,e5,i5);
       var f5=[Z4,$ff];
       var g5=f5[0];
       var p5=$hs_touchzh(c5,g5);
       var h5=$d(1,[i5],"sat");
       D4.C([h5,p5],function(j5){
	var k5=j5[0],l5=j5[1];
	var $ff=g_value_unset(i5);
	var m5=[k5,$ff];
	var n5=m5[0];
	var o5=$hs_touchzh(V4,n5);
	$r([o5,l5]);
       },[V4,i5]);
      },[V4,i5,b5,Z4,c5,D4]);
     },[V4,i5,O4,Z4,D4]);
    },[M4,V4,i5,q5,O4,D4]);
   },[M4,C4,D4],"sat");
   $$GHCziForeign_charIsRepresentable3.J(L4,E4,N4,K4);
  },[B4,F4,E4,C4,D4]);
 },[G4,B4,F4,E4,C4,D4]);
},[],"in `glib-0.12.4:System.Glib.Properties'");
var $$SystemziGlibziSignals_connectGeneric3=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `glib-0.12.4:System.Glib.Signals'");
var $$SystemziGlibziSignals_connectGeneric2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `glib-0.12.4:System.Glib.Signals'");
var $$SystemziGlibziSignals_connectGeneric1=$f(6,function(N1,O1,P1,Q1,R1,S1){
 var T1=[S1,R1];
 var U1=T1[0],V1=T1[1];
 var $ff=gtk2hs_closure_new(V1);
 var W1=[U1,$ff];
 var X1=W1[0],Y1=W1[1];
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(Z1){
  var a2=Z1.v[0];
  a2.C([X1],function(b2){
   var c2=b2[0],d2=b2[1];
   var e2=$t(function(){
    $$SystemziGlibziTypes_toGObject.J(N1,Q1);
   },[N1,Q1],"a1");
   var f2=$t(function(){
    $M(P1,function(g2){
     switch(g2.g){
     case 1:
      $A($$SystemziGlibziSignals_connectGeneric3);break;
     case 2:
      $A($$SystemziGlibziSignals_connectGeneric2);break;
     }
    },[]);
   },[P1],"lvl");
   var h2=$f(2,function(i2,j2){
    $M(e2,function(k2){
     var l2=k2.v[0],m2=k2.v[1];
     $M(i2,function(n2){
      var o2=n2.v[0];
      $M(f2,function(p2){
       var q2=p2.v[0];
       var $ff=g_signal_connect_closure(l2,o2,Y1,q2);
       var r2=[j2,$ff];
       var s2=r2[0],t2=r2[1];
       var v2=$hs_touchzh(m2,s2);
       var u2=$d(1,[t2],"sat");
       $r([v2,u2]);
      },[l2,o2,Y1,j2,m2]);
     },[f2,l2,Y1,j2,m2]);
    },[f2,i2,Y1,j2]);
   },[e2,f2,Y1],"sat");
   $$GHCziForeign_charIsRepresentable3.C([d2,O1,h2,c2],function(w2){
    var x2=w2[0],y2=w2[1];
    var z2=$d(1,[y2,Q1],"sat");
    $r([x2,z2]);
   },[Q1]);
  },[N1,Q1,P1,O1,Y1]);
 },[X1,N1,Q1,P1,O1,Y1]);
},[],"in `glib-0.12.4:System.Glib.Signals'");
var $$SystemziGlibziUTFString_withUTFString=$f(1,function(p7){
 var q7=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(p7);
 },[p7],"sat");
 $$ForeignziCziString_withCAString.J(q7);
},[],"at System/Glib/UTFString.hs:58:1");
var $$GraphicsziUIziGtkziAbstractziObject_makeNewObject2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("makeNewObject: object is NULL");
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.Abstract.Object'");
var $$GraphicsziUIziGtkziAbstractziObject_zdwa=$f(4,function(D,E,F,G){
 F.C([G],function(H){
  var I=H[0],J=H[1];
  $M(J,function(K){
   var L=K.v[0];
   var M=$f(1,function(N){
    var $ff=g_object_ref_sink(L);
    var O=[N,$ff];
    var P=O[0];
    $$SystemziGlibziFFI_zdwa.C([L,E,P],function(Q){
     var R=Q[0],S=Q[1];
     D.C([S],function(T){
      $r([R,T]);
     },[R]);
    },[D]);
   },[L,E,D],"a2");
   var U=$hs_eqAddrzh(L,null);
   switch(U.g){
   case 1:
    M.J(I);break;
   case 2:
    $$GHCziIO_failIO.C([$$GraphicsziUIziGtkziAbstractziObject_makeNewObject2,I],function(V){
     var W=V[0];
     M.J(W);
    },[L,E,D,M]);break;
   }
  },[E,D,I]);
 },[E,D]);
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.Abstract.Object'");
var $$GraphicsziUIziGtkziAbstractziWidget_afterDestroy2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("destroy");
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.Abstract.Widget'");
var $$GraphicsziUIziGtkziGeneralziGeneral_mainQuit=$f(1,function(a){
 $$GraphicsziUIziGtkziGeneralziGeneral$b.J(a);
},[],"at Graphics/UI/Gtk/General/General.chs:241:1");
var $$GraphicsziUIziGtkziGeneralziGeneral_timeoutAdd2=$f(4,function(h1,i1,j1,k1){
 var l1=$f(1,function(m1){
  var $ff=gdk_threads_enter();
  var n1=[m1,$ff];
  var o1=n1[0];
  h1.C([o1],function(p1){
   var q1=p1[0],r1=p1[1];
   var $ff=gdk_threads_leave();
   var s1=[q1,$ff];
   var t1=s1[0];
   $r([t1,r1]);
  },[]);
 },[h1],"sat");
 $$SystemziGlibziMainLoop_timeoutAdd2.J(l1,i1,j1,k1);
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.General.General'");
var $$GraphicsziUIziGtkziGeneralziGeneral_initGUI=$f(1,function(a){
 $$GraphicsziUIziGtkziGeneralziGeneral$j.J(a);
},[],"at Graphics/UI/Gtk/General/General.chs:143:1");
var $$GraphicsziUIziGtkziGeneralziGeneral$b=$F(1,function(P2){
 var $ff=gtk_main_quit();
 var Q2=[P2,$ff];
 var R2=Q2[0];
 $r([R2,$$GHCziTuple_Z0T]);
},"a1");
var $$GraphicsziUIziGtkziGeneralziGeneral$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Cannot initialize GUI.");
},"lvl");
var $$GraphicsziUIziGtkziGeneralziGeneral$d=$T(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziGeneralziGeneral$c);
},"lvl1");
var $$GraphicsziUIziGtkziGeneralziGeneral$e=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at Graphics/UI/Gtk/General/General.chs:158:9-16");
},"a2");
var $$GraphicsziUIziGtkziGeneralziGeneral$f=$F(2,function(S2,T2){
 $M(S2,function(U2){
  switch(U2.g){
  case 1:
   $r([T2,$$GHCziTypes_ZMZN]);break;
  case 2:
   var V2=U2.v[0],W2=U2.v[1];
   $M(V2,function(X2){
    var Y2=X2.v[0];
    $$ForeignziCziString_zdwa.C([Y2,T2],function(Z2){
     var a3=Z2[0],b3=Z2[1];
     $$GraphicsziUIziGtkziGeneralziGeneral$f.C([W2,a3],function(c3){
      var d3=c3[0],e3=c3[1];
      var f3=$t(function(){
       $$SystemziGlibziUTFString_fromUTF.J(b3);
      },[b3],"sat");
      var g3=$d(2,[f3,e3],"sat");
      $r([d3,g3]);
     },[b3]);
    },[W2]);
   },[T2,W2]);break;
  }
 },[T2]);
},"a3");
var $$GraphicsziUIziGtkziGeneralziGeneral$g=$F(3,function(h3,i3,j3){
 var k3=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),j3);
 var l3=k3[0],m3=k3[1];
 var n3=$hs_unsafeFreezzeByteArrayzh(m3,l3);
 var o3=n3[0],p3=n3[1];
 $M(i3,function(q3){
  var r3=q3.v[0];
  var a4=$hs_byteArrayContentszh(p3);
  var d4=$hs_writeAddrOffAddrzh(a4,goog.math.Long.fromBits(0,0),r3,o3);
  var s3=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),d4);
  var t3=s3[0],u3=s3[1];
  var v3=$hs_unsafeFreezzeByteArrayzh(u3,t3);
  var w3=v3[0],x3=v3[1];
  $M(h3,function(y3){
   var z3=y3.v[0];
   var b4=$hs_byteArrayContentszh(x3);
   var c4=$hs_writeIntOffAddrzh(b4,goog.math.Long.fromBits(0,0),z3,w3);
   var $ff=gtk_init_check(b4,a4);
   var A3=[c4,$ff];
   var B3=A3[0],C3=A3[1];
   var D3=$hs_narrow32Intzh(C3);
   switch(D3.toString()){
   case "0":
    $A($$GraphicsziUIziGtkziGeneralziGeneral$d);break;
   default:
    var E3=$hs_readIntOffAddrzh(b4,goog.math.Long.fromBits(0,0),B3);
    var F3=E3[0],G3=E3[1];
    var H3=$hs_readAddrOffAddrzh(a4,goog.math.Long.fromBits(0,0),F3);
    var I3=H3[0],J3=H3[1];
    var K3=$d(1,[J3],"sat");
    $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorablePtr,G3,K3,I3],function(L3){
     var M3=L3[0],N3=L3[1];
     $M(N3,function(O3){
      switch(O3.g){
      case 1:
       $$GHCziIO_failIO.C([$$GraphicsziUIziGtkziGeneralziGeneral$e,M3],function(P3){
	var Q3=P3[0],R3=P3[1];
	var T3=$hs_touchzh(x3,Q3);
	var S3=$hs_touchzh(p3,T3);
	$r([S3,R3]);
       },[p3,x3]);break;
      case 2:
       var U3=O3.v[1];
       $$GraphicsziUIziGtkziGeneralziGeneral$f.C([U3,M3],function(V3){
	var W3=V3[0],X3=V3[1];
	var Z3=$hs_touchzh(x3,W3);
	var Y3=$hs_touchzh(p3,Z3);
	$r([Y3,X3]);
       },[p3,x3]);break;
      }
     },[p3,x3,M3]);
    },[p3,x3]);
   }
  },[p3,a4,x3,w3]);
 },[p3,o3,h3]);
},"a4");
var $$GraphicsziUIziGtkziGeneralziGeneral$h=$F(1,function(e4){
 $$ForeignziMarshalziArray_withArrayLen.J($$ForeignziStorable_zdfStorablePtr,e4,$$GraphicsziUIziGtkziGeneralziGeneral$g);
},"lvl2");
var $$GraphicsziUIziGtkziGeneralziGeneral$i=$F(1,function(f4){
 $$SystemziEnvironment_getProgName1.C([f4],function(g4){
  var h4=g4[0],i4=g4[1];
  $$SystemziEnvironment_getArgs1.C([h4],function(j4){
   var k4=j4[0],l4=j4[1];
   var m4=$d(2,[i4,l4],"sat");
   $$ForeignziMarshalziUtils_withMany.J($$SystemziGlibziUTFString_withUTFString,m4,$$GraphicsziUIziGtkziGeneralziGeneral$h,k4);
  },[i4]);
 },[]);
},"a5");
var $$GraphicsziUIziGtkziGeneralziGeneral$j=$F(1,function(n4){
 var $ff=gtk2hs_initialise();
 var o4=[n4,$ff];
 var p4=o4[0];
 var $ff=rtsSupportsBoundThreads();
 var q4=[$$GHCziPrim_realWorldzh,$ff];
 var r4=q4[1];
 $M(r4,function(s4){
  switch(s4.toString()){
  case "0":
   $$GraphicsziUIziGtkziGeneralziGeneral$i.J(p4);break;
  default:
   var $ff=gtk2hs_threads_initialise();
   var t4=[p4,$ff];
   var u4=t4[0];
   $$GraphicsziUIziGtkziGeneralziGeneral$i.J(u4);
  }
 },[p4]);
},"a6");
var $$GraphicsziUIziGtkziTypes_mkScrolledWindow1=$f(1,function(u7){
 $A(u7);
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.Types'");
var $$GraphicsziUIziGtkziTypes_zdfGObjectClassWindow1=$f(1,function(R7){
 $A(R7);
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.Types'");
var $$GraphicsziUIziGtkziTypes_mkWindow1=$f(1,function(S7){
 $A(S7);
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.Types'");
var $$GraphicsziUIziGtkziTypes_zdfGObjectClassAboutDialog1=$f(1,function(ja){
 $A(ja);
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.Types'");
var $$GraphicsziUIziGtkziTypes_zdfGObjectClassWindow=$D(1,function(){
 $r([$$GraphicsziUIziGtkziTypes_zdfGObjectClassWindow1,$$GraphicsziUIziGtkziTypes_zdfGObjectClassAboutDialog1]);
},"at Graphics/UI/Gtk/Types.chs:2255:10");
var $$GraphicsziUIziGtkziWindowsziWindow_windowNew2=$f(1,function(xo){
 var $ff=gtk_window_new(goog.math.Long.fromBits(0,0));
 var yo=[xo,$ff];
 var zo=yo[0],Ao=yo[1];
 var Bo=$d(1,[Ao],"sat");
 $r([zo,Bo]);
},[],"in `gtk-0.12.4:Graphics.UI.Gtk.Windows.Window'");
var $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1=$f(4,function(fl,gl,hl,il){
 var jl=$t(function(){
  $$SystemziGlibziTypes_toGObject.J(fl,gl);
 },[fl,gl],"a");
 var kl=$f(2,function(ll,ml){
  $M(jl,function(nl){
   var ol=nl.v[0],pl=nl.v[1];
   $M(ll,function(ql){
    var rl=ql.v[0];
    var $ff=webkit_dom_document_get_element_by_id(ol,rl);
    var sl=[ml,$ff];
    var tl=sl[0],ul=sl[1];
    var wl=$hs_touchzh(pl,tl);
    var vl=$d(1,[ul],"sat");
    $r([wl,vl]);
   },[ol,ml,pl]);
  },[ll,ml]);
 },[jl],"sat");
 var xl=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(hl);
 },[hl],"sat");
 $$ForeignziCziString_withCAString.C([xl,kl,il],function(yl){
  var zl=yl[0],Al=yl[1];
  $M(Al,function(Bl){
   var Cl=Bl.v[0];
   var Dl=$hs_eqAddrzh(Cl,null);
   switch(Dl.g){
   case 1:
    var El=$f(1,function(Fl){
     $r([Fl,Bl]);
    },[Bl],"sat");
    $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkElement1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,El,zl],function(Gl){
     var Hl=Gl[0],Il=Gl[1];
     var Jl=$d(2,[Il],"sat");
     $r([Hl,Jl]);
    },[]);break;
   case 2:
    $r([zl,$$DataziMaybe_Nothing]);break;
   }
  },[zl]);
 },[]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Document'");
var $$GraphicsziUIziGtkziWebKitziSignals_connectzuOBJECTzuOBJECTzuOBJECTzuOBJECTzuzuBOOL2=$f(1,function(J){
 $A(J);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Signals'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkElement1=$f(1,function(g6){
 $A(g6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument1=$f(1,function(n6){
 $A(n6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkDocument1=$f(1,function(o6){
 $A(o6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkNavigator1=$f(1,function(C6){
 $A(C6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings1=$f(1,function(D8){
 $A(D8);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkWebSettings1=$f(1,function(E8){
 $A(E8);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebView1=$f(1,function(H8){
 $A(H8);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkWebView1=$f(1,function(I8){
 $A(I8);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeDOMWindow=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$N);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:1559:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$q1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2247:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLDivElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$D1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2585:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLInputElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$Q1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2923:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLTextAreaElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$v2);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:3731:1");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebView=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebView1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:675:10");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:721:10");
var $$GraphicsziUIziGtkziWebKitziTypes_castToDOMWindow1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$u4);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:2117:10");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$A5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLDivElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$a6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLInputElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$A6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLTextAreaElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$K7);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes$a=$F(2,function(o3a,p3a){
 $$GHCziCString_unpackFoldrCStringzh.J("Cannot cast object to ",o3a,p3a);
},"lvl");
var $$GraphicsziUIziGtkziWebKitziTypes$N=$T(function(){
 var $ff=webkit_dom_dom_window_get_type();
 var O3b=[$$GHCziPrim_realWorldzh,$ff];
 var P3b=O3b[1];
 $R(1,[P3b],"W64#");
},"a38");
var $$GraphicsziUIziGtkziWebKitziTypes$q1=$T(function(){
 var $ff=webkit_dom_html_element_get_type();
 var U3c=[$$GHCziPrim_realWorldzh,$ff];
 var V3c=U3c[1];
 $R(1,[V3c],"W64#");
},"a67");
var $$GraphicsziUIziGtkziWebKitziTypes$D1=$T(function(){
 var $ff=webkit_dom_html_div_element_get_type();
 var u3d=[$$GHCziPrim_realWorldzh,$ff];
 var v3d=u3d[1];
 $R(1,[v3d],"W64#");
},"a80");
var $$GraphicsziUIziGtkziWebKitziTypes$Q1=$T(function(){
 var $ff=webkit_dom_html_input_element_get_type();
 var U3d=[$$GHCziPrim_realWorldzh,$ff];
 var V3d=U3d[1];
 $R(1,[V3d],"W64#");
},"a93");
var $$GraphicsziUIziGtkziWebKitziTypes$v2=$T(function(){
 var $ff=webkit_dom_html_text_area_element_get_type();
 var e3f=[$$GHCziPrim_realWorldzh,$ff];
 var f3f=e3f[1];
 $R(1,[f3f],"W64#");
},"a124");
var $$GraphicsziUIziGtkziWebKitziTypes$t4=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DOMWindow");
},"lvl77");
var $$GraphicsziUIziGtkziWebKitziTypes$u4=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$t4);
},"lvl78");
var $$GraphicsziUIziGtkziWebKitziTypes$z5=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HTMLElement");
},"lvl135");
var $$GraphicsziUIziGtkziWebKitziTypes$A5=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$z5);
},"lvl136");
var $$GraphicsziUIziGtkziWebKitziTypes$Z5=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HTMLDivElement");
},"lvl161");
var $$GraphicsziUIziGtkziWebKitziTypes$a6=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$Z5);
},"lvl162");
var $$GraphicsziUIziGtkziWebKitziTypes$z6=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HTMLInputElement");
},"lvl187");
var $$GraphicsziUIziGtkziWebKitziTypes$A6=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$z6);
},"lvl188");
var $$GraphicsziUIziGtkziWebKitziTypes$J7=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HTMLTextAreaElement");
},"lvl249");
var $$GraphicsziUIziGtkziWebKitziTypes$K7=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$J7);
},"lvl250");
var $$GraphicsziUIziGtkziWebKitziWebSettings_webSettingsUserAgent1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("user-agent");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebSettings'");
var $$GraphicsziUIziGtkziWebKitziWebView_loadFinished2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("load_finished");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$GraphicsziUIziGtkziWebKitziWebView_webViewLoadUri1=$f(4,function(B6,C6,D6,E6){
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(F6){
  var G6=F6.v[0];
  G6.C([E6],function(H6){
   var I6=H6[0],J6=H6[1];
   var K6=$t(function(){
    $$SystemziGlibziTypes_toGObject.J(B6,C6);
   },[B6,C6],"a2");
   var L6=$f(2,function(M6,N6){
    $M(K6,function(O6){
     var P6=O6.v[0],Q6=O6.v[1];
     $M(M6,function(R6){
      var S6=R6.v[0];
      var $ff=webkit_web_view_load_uri(P6,S6);
      var T6=[N6,$ff];
      var U6=T6[0];
      var V6=$hs_touchzh(Q6,U6);
      $r([V6,$$GHCziTuple_Z0T]);
     },[P6,N6,Q6]);
    },[M6,N6]);
   },[K6],"sat");
   $$GHCziForeign_charIsRepresentable3.J(J6,D6,L6,I6);
  },[B6,C6,D6]);
 },[E6,B6,C6,D6]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$GraphicsziUIziGtkziWebKitziWebView_webViewNew2=$f(1,function(Fn){
 var $ff=webkit_web_view_new();
 var Gn=[Fn,$ff];
 var Hn=Gn[0],In=Gn[1];
 var Jn=$d(1,[In],"sat");
 $r([Hn,Jn]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$GraphicsziUIziGtkziWebKitziWebView_webViewNew1=$f(1,function(Kn){
 var $ff=g_thread_get_initialized();
 var Ln=[Kn,$ff];
 var Mn=Ln[0],Nn=Ln[1];
 var On=$hs_narrow32Intzh(Nn);
 switch(On.toString()){
 case "0":
  var $ff=g_thread_init(null);
  var Pn=[Mn,$ff];
  var Qn=Pn[0];
  $$GraphicsziUIziGtkziAbstractziObject_zdwa.J($$GraphicsziUIziGtkziWebKitziTypes_mkWebView1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,$$GraphicsziUIziGtkziWebKitziWebView_webViewNew2,Qn);break;
 default:
  $$GraphicsziUIziGtkziAbstractziObject_zdwa.J($$GraphicsziUIziGtkziWebKitziTypes_mkWebView1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,$$GraphicsziUIziGtkziWebKitziWebView_webViewNew2,Mn);
 }
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$GraphicsziUIziGtkziWebKitziWebView_zdwa16=$f(2,function(Sy,Ty){
 var Uy=$f(1,function(Vy){
  $M(Sy,function(Wy){
   var Xy=Wy.v[0],Yy=Wy.v[1];
   var $ff=webkit_web_view_get_dom_document(Xy);
   var Zy=[Vy,$ff];
   var az=Zy[0],bz=Zy[1];
   var dz=$hs_touchzh(Yy,az);
   var cz=$d(1,[bz],"sat");
   $r([dz,cz]);
  },[Vy]);
 },[Sy],"sat");
 $$SystemziGlibziGObject_zdwa1.J($$GraphicsziUIziGtkziWebKitziTypes_mkDocument1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,Uy,Ty);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$DataziTypeableziInternal_zdfTypeableZLZRzupkg=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ghc-prim");
},[],"at libraries/base/Data/Typeable/Internal.hs:179:10");
var $$DataziTypeableziInternal_zdfTypeable1IOzumodl=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Types");
},[],"at libraries/base/Data/Typeable/Internal.hs:179:14");
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
var $$ForeignziMarshalziUtils_withMany=$f(3,function(a,b,c){
 $M(b,function(d){
  switch(d.g){
  case 1:
   c.J($$GHCziTypes_ZMZN);break;
  case 2:
   var e=d.v[0],f=d.v[1];
   var g=$f(1,function(h){
    var i=$f(1,function(j){
     var k=$d(2,[h,j],"sat");
     c.J(k);
    },[c,h],"sat");
    $$ForeignziMarshalziUtils_withMany.J(a,f,i);
   },[c,a,f],"sat");
   a.J(e,g);break;
  }
 },[c,a]);
},[],"at libraries/base/Foreign/Marshal/Utils.hs:151:1");
var $$ForeignziStorable_zdfStorablePtrzuzdcalignment=$f(1,function(u3){
 $A($$ForeignziStorable_zdfStorableDouble6);
},[],"at libraries/base/Foreign/Storable.hs:108:4");
var $$ForeignziStorable_zdfStorablePtrzuzdcsizzeOf=$f(1,function(v3){
 $A($$ForeignziStorable_zdfStorableDouble6);
},[],"at libraries/base/Foreign/Storable.hs:104:4");
var $$ForeignziStorable_zdfStorablePtr1=$f(3,function(w3,x3,y3){
 $M(w3,function(z3){
  var A3=z3.v[0];
  $M(x3,function(B3){
   var C3=B3.v[0];
   var D3=$hs_writeAddrOffAddrzh(A3,goog.math.Long.fromBits(0,0),C3,y3);
   $r([D3,$$GHCziTuple_Z0T]);
  },[A3,y3]);
 },[x3,y3]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorablePtr2=$f(2,function(E3,F3){
 $M(E3,function(G3){
  var H3=G3.v[0];
  var I3=$hs_readAddrOffAddrzh(H3,goog.math.Long.fromBits(0,0),F3);
  var J3=I3[0],K3=I3[1];
  var L3=$d(1,[K3],"sat");
  $r([J3,L3]);
 },[F3]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorablePtr3=$f(4,function(M3,N3,O3,P3){
 $M(M3,function(Q3){
  var R3=Q3.v[0];
  $M(N3,function(S3){
   var T3=S3.v[0];
   $M(O3,function(U3){
    var V3=U3.v[0];
    var X3=$hs_plusAddrzh(R3,T3);
    var W3=$hs_writeAddrOffAddrzh(X3,goog.math.Long.fromBits(0,0),V3,P3);
    $r([W3,$$GHCziTuple_Z0T]);
   },[R3,T3,P3]);
  },[O3,R3,P3]);
 },[N3,O3,P3]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorablePtr4=$f(3,function(Y3,Z3,a4){
 $M(Y3,function(b4){
  var c4=b4.v[0];
  $M(Z3,function(d4){
   var e4=d4.v[0];
   var j4=$hs_plusAddrzh(c4,e4);
   var f4=$hs_readAddrOffAddrzh(j4,goog.math.Long.fromBits(0,0),a4);
   var g4=f4[0],h4=f4[1];
   var i4=$d(1,[h4],"sat");
   $r([g4,i4]);
  },[c4,a4]);
 },[Z3,a4]);
},[],"in `base:Foreign.Storable'");
var $$ForeignziStorable_zdfStorablePtr=$D(1,function(){
 $r([$$ForeignziStorable_zdfStorablePtrzuzdcsizzeOf,$$ForeignziStorable_zdfStorablePtrzuzdcalignment,$$GHCziStorable_readPtrOffPtr1,$$GHCziStorable_writePtrOffPtr1,$$ForeignziStorable_zdfStorablePtr4,$$ForeignziStorable_zdfStorablePtr3,$$ForeignziStorable_zdfStorablePtr2,$$ForeignziStorable_zdfStorablePtr1]);
},"at libraries/base/Foreign/Storable.hs:212:10");
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
var $$GHCziIOziEncoding_getFileSystemEncoding3=$f(1,function(V){
 var W=$hs_noDuplicatezh(V);
 $$GHCziIOziEncoding_getFileSystemEncoding4.J($$GHCziIOziEncodingziFailure_RoundtripFailure,$$GHCziIOziEncodingziIconv_localeEncodingName,W);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding2=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziEncoding_getFileSystemEncoding3);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncoding_getFileSystemEncoding1=$t(function(){
 $$GHCziIOziEncoding_mkGlobal.J($$GHCziIOziEncoding_getFileSystemEncoding2);
},[],"in `base:GHC.IO.Encoding'");
var $$GHCziIOziEncodingziFailure_RoundtripFailure=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Failure.hs:51:5");
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
var $$GHCziIOziException_UserInterrupt=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:129:5");
var $$GHCziIOziFD_stderr=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:311:1");
var $$GHCziIOziHandleziFD_stderr=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziIOziHandleziFD$e);
},[],"at libraries/base/GHC/IO/Handle/FD.hs:74:1");
var $$GHCziIOziHandleziFD$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<stderr>");
},"lvl");
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
var $$GHCziIOziHandleziText$e=$D(1,function(){
 $r(["\n"]);
},"lvl2");
var $$GHCziIOziHandleziText$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("commitBuffer");
},"lvl3");
var $$GHCziIOziHandleziText$o=$D(2,function(){
 $r([$$GHCziIOziHandleziText$e,$$GHCziTypes_ZMZN]);
},"lvl8");
var $$GHCziIOziHandleziText$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no buffer!");
},"lvl9");
var $$GHCziStorable_writePtrOffPtr1=$f(4,function(G2,H2,I2,J2){
 $M(G2,function(K2){
  var L2=K2.v[0];
  $M(H2,function(M2){
   var N2=M2.v[0];
   $M(I2,function(O2){
    var P2=O2.v[0];
    var Q2=$hs_writeAddrOffAddrzh(L2,N2,P2,J2);
    $r([Q2,$$GHCziTuple_Z0T]);
   },[L2,N2,J2]);
  },[I2,L2,J2]);
 },[H2,I2,J2]);
},[],"in `base:GHC.Storable'");
var $$GHCziStorable_readPtrOffPtr1=$f(3,function(a6,b6,c6){
 $M(a6,function(d6){
  var e6=d6.v[0];
  $M(b6,function(f6){
   var g6=f6.v[0];
   var h6=$hs_readAddrOffAddrzh(e6,g6,c6);
   var i6=h6[0],j6=h6[1];
   var k6=$d(1,[j6],"sat");
   $r([i6,k6]);
  },[e6,c6]);
 },[b6,c6]);
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
var $$SystemziEnvironment_getProgNamezugo=$f(2,function(Q,R){
 $M(R,function(S){
  switch(S.g){
  case 1:
   $A(Q);break;
  case 2:
   var T=S.v[0],U=S.v[1];
   $M(T,function(V){
    var W=V.v[0];
    $M(W,function(X){
     switch(X.toString()){
     case "/":
      $$SystemziEnvironment_getProgNamezugo.J(U,U);break;
     default:
      $$SystemziEnvironment_getProgNamezugo.J(Q,U);
     }
    },[Q,U]);
   },[Q,U]);break;
  }
 },[Q]);
},[],"at libraries/base/System/Environment.hs:183:3");
var $$SystemziEnvironment_getProgName1=$f(1,function(Y){
 var Z=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(4,0),goog.math.Long.fromBits(4,0),Y);
 var a1=Z[0],b1=Z[1];
 var c1=$hs_unsafeFreezzeByteArrayzh(b1,a1);
 var d1=c1[0],e1=c1[1];
 var f1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),d1);
 var g1=f1[0],h1=f1[1];
 var i1=$hs_unsafeFreezzeByteArrayzh(h1,g1);
 var j1=i1[0],k1=i1[1];
 var E1=$hs_byteArrayContentszh(k1);
 var F1=$hs_byteArrayContentszh(e1);
 var $ff=getProgArgv(F1,E1);
 var l1=[j1,$ff];
 var m1=l1[0];
 var n1=$hs_readAddrOffAddrzh(E1,goog.math.Long.fromBits(0,0),m1);
 var o1=n1[0],p1=n1[1];
 $M($$GHCziIOziEncoding_getFileSystemEncoding1,function(q1){
  var r1=q1.v[0];
  r1.C([o1],function(s1){
   var t1=s1[0],u1=s1[1];
   var v1=$hs_readAddrOffAddrzh(p1,goog.math.Long.fromBits(0,0),t1);
   var w1=v1[0],x1=v1[1];
   $$GHCziForeign_zdwa.C([u1,x1,w1],function(y1){
    var z1=y1[0],A1=y1[1];
    var D1=$hs_touchzh(k1,z1);
    var C1=$hs_touchzh(e1,D1);
    var B1=$t(function(){
     $$SystemziEnvironment_getProgNamezugo.J(A1,A1);
    },[A1],"sat");
    $r([C1,B1]);
   },[k1,e1]);
  },[k1,e1,p1]);
 },[k1,e1,o1,p1]);
},[],"in `base:System.Environment'");
var $$SystemziEnvironment_getArgs1=$f(1,function(G1){
 var H1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(4,0),goog.math.Long.fromBits(4,0),G1);
 var I1=H1[0],J1=H1[1];
 var K1=$hs_unsafeFreezzeByteArrayzh(J1,I1);
 var L1=K1[0],M1=K1[1];
 var N1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),L1);
 var O1=N1[0],P1=N1[1];
 var Q1=$hs_unsafeFreezzeByteArrayzh(P1,O1);
 var R1=Q1[0],S1=Q1[1];
 var G2=$hs_byteArrayContentszh(S1);
 var H2=$hs_byteArrayContentszh(M1);
 var $ff=getProgArgv(H2,G2);
 var T1=[R1,$ff];
 var U1=T1[0];
 var V1=$hs_readInt32OffAddrzh(H2,goog.math.Long.fromBits(0,0),U1);
 var W1=V1[0],X1=V1[1];
 var Y1=$hs_readAddrOffAddrzh(G2,goog.math.Long.fromBits(0,0),W1);
 var Z1=Y1[0],a2=Y1[1];
 $M($$GHCziIOziEncoding_getFileSystemEncoding1,function(b2){
  var c2=b2.v[0];
  c2.C([Z1],function(d2){
   var e2=d2[0],f2=d2[1];
   var h2=$hs_plusAddrzh(a2,goog.math.Long.fromBits(8,0));
   var g2=$d(1,[h2],"sat");
   var F2=X1.subtract(goog.math.Long.fromBits(1,0));
   $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorablePtr,F2,g2,e2],function(i2){
    var j2=i2[0],k2=i2[1];
    var l2=$f(2,function(m2,n2){
     $M(m2,function(o2){
      switch(o2.g){
      case 1:
       $r([n2,$$GHCziTypes_ZMZN]);break;
      case 2:
       var p2=o2.v[0],q2=o2.v[1];
       $M(p2,function(r2){
	var s2=r2.v[0];
	$$GHCziForeign_zdwa.C([f2,s2,n2],function(t2){
	 var u2=t2[0],v2=t2[1];
	 l2.C([q2,u2],function(w2){
	  var x2=w2[0],y2=w2[1];
	  var z2=$d(2,[v2,y2],"sat");
	  $r([x2,z2]);
	 },[v2]);
	},[q2,l2]);
       },[n2,f2,q2,l2]);break;
      }
     },[n2,f2,l2]);
    },[f2],"a4");
    l2.C([k2,j2],function(A2){
     var B2=A2[0],C2=A2[1];
     var E2=$hs_touchzh(S1,B2);
     var D2=$hs_touchzh(M1,E2);
     $r([D2,C2]);
    },[S1,M1]);
   },[S1,M1,f2]);
  },[S1,M1,X1,a2]);
 },[S1,M1,Z1,X1,a2]);
},[],"in `base:System.Environment'");
var $$GHCziCString_unpackFoldrCStringzh=$f(3,function(B,C,D){
 var E=$f(1,function(F){
  var G=$hs_indexCharOffAddrzh(B,F);
  switch(G.toString()){
  case "\x00":
   $A(D);break;
  default:
   var H=$t(function(){
    var I=F.add(goog.math.Long.fromBits(1,0));
    E.J(I);
   },[F,E],"sat");
   var J=$d(1,[G],"sat");
   C.J(J,H);
  }
 },[B,C,D],"unpack");
 E.J(goog.math.Long.fromBits(0,0));
},[],"at libraries/ghc-prim/GHC/CString.hs:79:1");
var $$GHCziTypes_ZC=$f(2,function(b,a){
 $R(2,[b,a],":");
},[],"in `ghc-prim:GHC.Types'");
var $$Main_main2=$f(2,function(d,e){
 var $ff=ghcjs_currentWindow();
 var f=[e,$ff];
 var g=f[0],h=f[1];
 var i=$f(1,function(j){
  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandle_hFlush2,$$GHCziIOziHandleziFD_stdout,$$GHCziIOziHandleziInternals_flushWriteBuffer1,j],function(k){
   var l=k[0];
   $$GraphicsziUIziGtkziWebKitziWebView_zdwa16.C([d,l],function(m){
    var n=m[0],o=m[1];
    $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,o,$$Main$U,n],function(p){
     var q=p[0],r=p[1];
     $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,o,$$Main$V,q],function(s){
      var t=s[0],u=s[1];
      var v=$f(1,function(w){
       $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,o,$$Main$W,w],function(x){
	var y=x[0],z=x[1];
	$$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,o,$$Main$X,y],function(A){
	 var B=A[0],C=A[1];
	 $M(z,function(D){
	  switch(D.g){
	  case 1:
	   $r([B,$$GHCziTuple_Z0T]);break;
	  case 2:
	   var E=D.v[0];
	   $M(C,function(F){
	    switch(F.g){
	    case 1:
	     $r([B,$$GHCziTuple_Z0T]);break;
	    case 2:
	     var G=F.v[0];
	     var H=$t(function(){
	      var I=$t(function(){
	       $M(G,function(J){
		var K=J.v[0];
		$R(1,[K],"Ptr");
	       },[]);
	      },[G],"sat");
	      $$SystemziGlibziGType_typeInstanceIsA.C([I,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLDivElement],function(L){
	       switch(L.g){
	       case 1:
		$A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLDivElement1);break;
	       case 2:
		$A(G);break;
	       }
	      },[G]);
	     },[G],"sat");
	     var M=$t(function(){
	      $M(E,function(N){
	       var O=N.v[0];
	       $R(1,[O],"Ptr");
	      },[]);
	     },[E],"sat");
	     $b(function(){
	      $$SystemziGlibziGType_typeInstanceIsA.C([M,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLTextAreaElement],function(Q){
	       switch(Q.g){
	       case 1:
		$A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLTextAreaElement1);break;
	       case 2:
		$A(E);break;
	       }
	      },[B,E,H]);
	     },[],function(P){
	      $$Main_lazzyLoadzuwireHamlet.J(P,H,B);
	     },[B,H]);break;
	    }
	   },[B,E]);break;
	  }
	 },[B,C]);
	},[z]);
       },[o]);
      },[o],"a18");
      $M(r,function(R){
       switch(R.g){
       case 1:
	v.J(t);break;
       case 2:
	var S=R.v[0];
	$M(u,function(T){
	 switch(T.g){
	 case 1:
	  v.J(t);break;
	 case 2:
	  var U=T.v[0];
	  var V=$t(function(){
	   var W=$t(function(){
	    $M(U,function(X){
	     var Y=X.v[0];
	     $R(1,[Y],"Ptr");
	    },[]);
	   },[U],"sat");
	   $$SystemziGlibziGType_typeInstanceIsA.C([W,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLElement],function(Z){
	    switch(Z.g){
	    case 1:
	     $A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLElement1);break;
	    case 2:
	     $A(U);break;
	    }
	   },[U]);
	  },[U],"sat");
	  var a1=$t(function(){
	   $M(S,function(b1){
	    var c1=b1.v[0];
	    $R(1,[c1],"Ptr");
	   },[]);
	  },[S],"sat");
	  $b(function(){
	   $$SystemziGlibziGType_typeInstanceIsA.C([a1,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLInputElement],function(g1){
	    switch(g1.g){
	    case 1:
	     $A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLInputElement1);break;
	    case 2:
	     $A(S);break;
	    }
	   },[o,v,t,S,V]);
	  },[],function(d1){
	   $$Main_lazzyLoadzuwirePrime.C([d1,V,t],function(e1){
	    var f1=e1[0];
	    v.J(f1);
	   },[o,v]);
	  },[o,v,t,V]);break;
	 }
	},[o,v,t,S]);break;
       }
      },[o,v,t,u]);
     },[o,r]);
    },[o]);
   },[]);
  },[d]);
 },[d],"a17");
 var h1=$hs_eqAddrzh(h,null);
 switch(h1.g){
 case 1:
  var i1=$f(1,function(j1){
   var k1=$d(1,[h],"sat");
   $r([j1,k1]);
  },[h],"sat");
  $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkWebView1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,i1,g],function(l1){
   var m1=l1[0];
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$T,$$GHCziTypes_True,m1],function(n1){
    var o1=n1[0];
    i.J(o1);
   },[d,i]);
  },[d,i]);break;
 case 2:
  $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$S,$$GHCziTypes_True,g],function(p1){
   var q1=p1[0];
   i.J(q1);
  },[d,i]);break;
 }
},[],"in `main:Main'");
var $$Main_main1=$f(1,function(r1){
 $$GraphicsziUIziGtkziWebKitziGHCJS_runWebGUI1.J($$Main_main2,r1);
},[],"in `main:Main'");
var $$Main_main3=$f(1,function(s1){
 $$GHCziTopHandler_runMainIO1.J($$Main_main1,s1);
},[],"in `main:Main'");
var $$$ZCMain_main=$f(1,function(c){
 $$Main_main3.J(c);
},[],"at src/Main.hs:42:1");
var $$Main$S=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Hello from Native Haskell");
},"lvl17");
var $$Main$T=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Hello from JavaScript land");
},"lvl18");
var $$Main$U=$T(function(){
 $$GHCziCString_unpackCStringzh.J("prime-in");
},"lvl19");
var $$Main$V=$T(function(){
 $$GHCziCString_unpackCStringzh.J("prime-out");
},"lvl20");
var $$Main$W=$T(function(){
 $$GHCziCString_unpackCStringzh.J("hamlet-in");
},"lvl21");
var $$Main$X=$T(function(){
 $$GHCziCString_unpackCStringzh.J("hamlet-out");
},"lvl22");
//@ sourceURL=hs2.js
