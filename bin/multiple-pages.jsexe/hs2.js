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
},[],"in `glib-0.12.3.1:System.Glib.Attributes'");
var $$SystemziGlibziFFI_nullForeignPtr1=$f(1,function(J){
 var Q=$hs_noDuplicatezh(J);
 var K=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Q);
 var L=K[0],M=K[1];
 var N=$d(1,[M],"sat");
 var O=$d(1,[N],"sat");
 var P=$d(1,[null,O],"sat");
 $r([L,P]);
},[],"in `glib-0.12.3.1:System.Glib.FFI'");
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
},"in `glib-0.12.3.1:System.Glib.GTypeConstants'");
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
},[],"in `glib-0.12.3.1:System.Glib.GValueTypes'");
var $$SystemziGlibziGValueTypes_valueGetString1=$f(2,function(b,c){
 $$SystemziGlibziGValueTypes_zdwa4.J(b,c);
},[],"in `glib-0.12.3.1:System.Glib.GValueTypes'");
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
},"in `glib-0.12.3.1:System.Glib.MainLoop'");
var $$SystemziGlibziMainLoop_idleAdd2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `glib-0.12.3.1:System.Glib.MainLoop'");
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
 },[o5],"sat");
 $$SystemziGlibziMainLoop_mkSourceFunc.C([s5,r5],function(z5){
  var A5=z5[0],B5=z5[1];
  $M(p5,function(C5){
   var D5=C5.v[0];
   $M(q5,function(E5){
    var F5=E5.v[0];
    $M(B5,function(G5){
     var H5=G5.v[0];
     var P5=$hs_int2Wordzh(F5);
     var O5=$hs_narrow32Wordzh(P5);
     var N5=$hs_narrow32Intzh(D5);
     var $ff=g_timeout_add_full(N5,O5,H5,H5,$hs_labelFunction("freeHaskellFunctionPtr",null));
     var I5=[A5,$ff];
     var J5=I5[0],K5=I5[1];
     var M5=$hs_narrow32Wordzh(K5);
     var L5=$d(1,[M5],"sat");
     $r([J5,L5]);
    },[D5,F5,A5]);
   },[B5,D5,A5]);
  },[q5,B5,A5]);
 },[p5,q5]);
},[],"in `glib-0.12.3.1:System.Glib.MainLoop'");
var $$SystemziGlibziMainLoop$a=$F(2,function(q6,r6){
 var s6=[r6,q6];
 var t6=s6[0],u6=s6[1];
 var $ff=createAdjustor(goog.math.Long.fromBits(1,0),u6,$hs_labelFunction("SystemziGlibziMainLoop_d9QH",null),"");
 var v6=[t6,$ff];
 var w6=v6[0],x6=v6[1];
 var y6=$d(1,[x6],"sat");
 $r([w6,y6]);
},"a");
var $$SystemziGlibziProperties_newAttrFromBoolProperty2=$f(7,function(a,b,c,d,e,f,g){
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(h){
  var i=h.v[0];
  i.C([g],function(j){
   var k=j[0],l=j[1];
   var m=$t(function(){
    $$SystemziGlibziTypes_toGObject.J(a,e);
   },[a,e],"a1");
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
},[],"in `glib-0.12.3.1:System.Glib.Properties'");
var $$SystemziGlibziProperties_newAttrFromBoolProperty4=$f(6,function(B4,C4,D4,E4,F4,G4){
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(H4){
  var I4=H4.v[0];
  I4.C([G4],function(J4){
   var K4=J4[0],L4=J4[1];
   var M4=$t(function(){
    $$SystemziGlibziTypes_toGObject.J(B4,F4);
   },[B4,F4],"a1");
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
},[],"in `glib-0.12.3.1:System.Glib.Properties'");
var $$SystemziGlibziSignals_connectGeneric3=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `glib-0.12.3.1:System.Glib.Signals'");
var $$SystemziGlibziSignals_connectGeneric2=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `glib-0.12.3.1:System.Glib.Signals'");
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
   },[N1,Q1],"a2");
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
},[],"in `glib-0.12.3.1:System.Glib.Signals'");
var $$SystemziGlibziUTFString_withUTFString=$f(1,function(C7){
 var D7=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(C7);
 },[C7],"sat");
 $$ForeignziCziString_withCAString.J(D7);
},[],"at System/Glib/UTFString.hs:58:1");
var $$GraphicsziUIziGtkziAbstractziObject_makeNewObject2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("makeNewObject: object is NULL");
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.Abstract.Object'");
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
   },[L,E,D],"a3");
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
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.Abstract.Object'");
var $$GraphicsziUIziGtkziAbstractziWidget_afterDestroy2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("destroy");
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.Abstract.Widget'");
var $$GraphicsziUIziGtkziGeneralziGeneral_mainQuit=$f(1,function(b){
 $$GraphicsziUIziGtkziGeneralziGeneral$c.J(b);
},[],"at Graphics/UI/Gtk/General/General.chs:235:1");
var $$GraphicsziUIziGtkziGeneralziGeneral_timeoutAdd2=$f(4,function(f2,g2,h2,i2){
 var j2=$f(1,function(k2){
  var $ff=gdk_threads_enter();
  var l2=[k2,$ff];
  var m2=l2[0];
  f2.C([m2],function(n2){
   var o2=n2[0],p2=n2[1];
   var $ff=gdk_threads_leave();
   var q2=[o2,$ff];
   var r2=q2[0];
   $r([r2,p2]);
  },[]);
 },[f2],"sat");
 $$SystemziGlibziMainLoop_timeoutAdd2.J(j2,g2,h2,i2);
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.General.General'");
var $$GraphicsziUIziGtkziGeneralziGeneral_initGUI=$f(1,function(b){
 $$GraphicsziUIziGtkziGeneralziGeneral$k.J(b);
},[],"at Graphics/UI/Gtk/General/General.chs:141:1");
var $$GraphicsziUIziGtkziGeneralziGeneral$c=$F(1,function(V3){
 var $ff=gtk_main_quit();
 var W3=[V3,$ff];
 var X3=W3[0];
 $r([X3,$$GHCziTuple_Z0T]);
},"a2");
var $$GraphicsziUIziGtkziGeneralziGeneral$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Cannot initialize GUI.");
},"lvl");
var $$GraphicsziUIziGtkziGeneralziGeneral$e=$T(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziGeneralziGeneral$d);
},"lvl1");
var $$GraphicsziUIziGtkziGeneralziGeneral$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at Graphics/UI/Gtk/General/General.chs:155:9-16");
},"a3");
var $$GraphicsziUIziGtkziGeneralziGeneral$g=$F(2,function(Y3,Z3){
 $M(Y3,function(a4){
  switch(a4.g){
  case 1:
   $r([Z3,$$GHCziTypes_ZMZN]);break;
  case 2:
   var b4=a4.v[0],c4=a4.v[1];
   $M(b4,function(d4){
    var e4=d4.v[0];
    $$ForeignziCziString_zdwa.C([e4,Z3],function(f4){
     var g4=f4[0],h4=f4[1];
     $$GraphicsziUIziGtkziGeneralziGeneral$g.C([c4,g4],function(i4){
      var j4=i4[0],k4=i4[1];
      var l4=$t(function(){
       $$SystemziGlibziUTFString_fromUTF.J(h4);
      },[h4],"sat");
      var m4=$d(2,[l4,k4],"sat");
      $r([j4,m4]);
     },[h4]);
    },[c4]);
   },[Z3,c4]);break;
  }
 },[Z3]);
},"a4");
var $$GraphicsziUIziGtkziGeneralziGeneral$h=$F(3,function(n4,o4,p4){
 var q4=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),p4);
 var r4=q4[0],s4=q4[1];
 var t4=$hs_unsafeFreezzeByteArrayzh(s4,r4);
 var u4=t4[0],v4=t4[1];
 $M(o4,function(w4){
  var x4=w4.v[0];
  var g5=$hs_byteArrayContentszh(v4);
  var j5=$hs_writeAddrOffAddrzh(g5,goog.math.Long.fromBits(0,0),x4,u4);
  var y4=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),j5);
  var z4=y4[0],A4=y4[1];
  var B4=$hs_unsafeFreezzeByteArrayzh(A4,z4);
  var C4=B4[0],D4=B4[1];
  $M(n4,function(E4){
   var F4=E4.v[0];
   var h5=$hs_byteArrayContentszh(D4);
   var i5=$hs_writeIntOffAddrzh(h5,goog.math.Long.fromBits(0,0),F4,C4);
   var $ff=gtk_init_check(h5,g5);
   var G4=[i5,$ff];
   var H4=G4[0],I4=G4[1];
   var J4=$hs_narrow32Intzh(I4);
   switch(J4.toString()){
   case "0":
    $A($$GraphicsziUIziGtkziGeneralziGeneral$e);break;
   default:
    var K4=$hs_readIntOffAddrzh(h5,goog.math.Long.fromBits(0,0),H4);
    var L4=K4[0],M4=K4[1];
    var N4=$hs_readAddrOffAddrzh(g5,goog.math.Long.fromBits(0,0),L4);
    var O4=N4[0],P4=N4[1];
    var Q4=$d(1,[P4],"sat");
    $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorablePtr,M4,Q4,O4],function(R4){
     var S4=R4[0],T4=R4[1];
     $M(T4,function(U4){
      switch(U4.g){
      case 1:
       $$GHCziIO_failIO.C([$$GraphicsziUIziGtkziGeneralziGeneral$f,S4],function(V4){
	var W4=V4[0],X4=V4[1];
	var Z4=$hs_touchzh(D4,W4);
	var Y4=$hs_touchzh(v4,Z4);
	$r([Y4,X4]);
       },[v4,D4]);break;
      case 2:
       var a5=U4.v[1];
       $$GraphicsziUIziGtkziGeneralziGeneral$g.C([a5,S4],function(b5){
	var c5=b5[0],d5=b5[1];
	var f5=$hs_touchzh(D4,c5);
	var e5=$hs_touchzh(v4,f5);
	$r([e5,d5]);
       },[v4,D4]);break;
      }
     },[v4,D4,S4]);
    },[v4,D4]);
   }
  },[v4,g5,D4,C4]);
 },[v4,u4,n4]);
},"a5");
var $$GraphicsziUIziGtkziGeneralziGeneral$i=$F(1,function(k5){
 $$ForeignziMarshalziArray_withArrayLen.J($$ForeignziStorable_zdfStorablePtr,k5,$$GraphicsziUIziGtkziGeneralziGeneral$h);
},"lvl2");
var $$GraphicsziUIziGtkziGeneralziGeneral$j=$F(1,function(l5){
 $$SystemziEnvironment_getProgName1.C([l5],function(m5){
  var n5=m5[0],o5=m5[1];
  $$SystemziEnvironment_getArgs1.C([n5],function(p5){
   var q5=p5[0],r5=p5[1];
   var s5=$d(2,[o5,r5],"sat");
   $$ForeignziMarshalziUtils_withMany.J($$SystemziGlibziUTFString_withUTFString,s5,$$GraphicsziUIziGtkziGeneralziGeneral$i,q5);
  },[o5]);
 },[]);
},"a6");
var $$GraphicsziUIziGtkziGeneralziGeneral$k=$F(1,function(t5){
 var $ff=rtsSupportsBoundThreads();
 var u5=[$$GHCziPrim_realWorldzh,$ff];
 var v5=u5[1];
 $M(v5,function(w5){
  switch(w5.toString()){
  case "0":
   $$GraphicsziUIziGtkziGeneralziGeneral$j.J(t5);break;
  default:
   var $ff=gtk2hs_threads_initialise();
   var x5=[t5,$ff];
   var y5=x5[0];
   $$GraphicsziUIziGtkziGeneralziGeneral$j.J(y5);
  }
 },[t5]);
},"a7");
var $$GraphicsziUIziGtkziTypes_mkScrolledWindow1=$f(1,function(f8){
 $A(f8);
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.Types'");
var $$GraphicsziUIziGtkziTypes_zdfGObjectClassWindow1=$f(1,function(G8){
 $A(G8);
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.Types'");
var $$GraphicsziUIziGtkziTypes_mkWindow1=$f(1,function(H8){
 $A(H8);
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.Types'");
var $$GraphicsziUIziGtkziTypes_zdfGObjectClassAboutDialog1=$f(1,function(ob){
 $A(ob);
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.Types'");
var $$GraphicsziUIziGtkziTypes_zdfGObjectClassWindow=$D(1,function(){
 $r([$$GraphicsziUIziGtkziTypes_zdfGObjectClassWindow1,$$GraphicsziUIziGtkziTypes_zdfGObjectClassAboutDialog1]);
},"at Graphics/UI/Gtk/Types.chs:2570:10");
var $$GraphicsziUIziGtkziWindowsziWindow_windowNew2=$f(1,function(ko){
 var $ff=gtk_window_new(goog.math.Long.fromBits(0,0));
 var lo=[ko,$ff];
 var mo=lo[0],no=lo[1];
 var oo=$d(1,[no],"sat");
 $r([mo,oo]);
},[],"in `gtk-0.12.3.1:Graphics.UI.Gtk.Windows.Window'");
var $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1=$f(4,function(Pk,Qk,Rk,Sk){
 var Tk=$t(function(){
  $$SystemziGlibziTypes_toGObject.J(Pk,Qk);
 },[Pk,Qk],"a");
 var Uk=$f(2,function(Vk,Wk){
  $M(Tk,function(Xk){
   var Yk=Xk.v[0],Zk=Xk.v[1];
   $M(Vk,function(al){
    var bl=al.v[0];
    var $ff=webkit_dom_document_get_element_by_id(Yk,bl);
    var cl=[Wk,$ff];
    var dl=cl[0],el=cl[1];
    var gl=$hs_touchzh(Zk,dl);
    var fl=$d(1,[el],"sat");
    $r([gl,fl]);
   },[Yk,Wk,Zk]);
  },[Vk,Wk]);
 },[Tk],"sat");
 var hl=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(Rk);
 },[Rk],"sat");
 $$ForeignziCziString_withCAString.C([hl,Uk,Sk],function(il){
  var jl=il[0],kl=il[1];
  $M(kl,function(ll){
   var ml=ll.v[0];
   var nl=$hs_eqAddrzh(ml,null);
   switch(nl.g){
   case 1:
    var ol=$f(1,function(pl){
     $r([pl,ll]);
    },[ll],"sat");
    $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkElement1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,ol,jl],function(ql){
     var rl=ql[0],sl=ql[1];
     var tl=$d(2,[sl],"sat");
     $r([rl,tl]);
    },[]);break;
   case 2:
    $r([jl,$$DataziMaybe_Nothing]);break;
   }
  },[jl]);
 },[]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Document'");
var $$GraphicsziUIziGtkziWebKitziSignals_connectzuOBJECTzuOBJECTzuOBJECTzuOBJECTzuzuBOOL2=$f(1,function(J){
 $A(J);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Signals'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkElement1=$f(1,function(r5){
 $A(r5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument1=$f(1,function(y5){
 $A(y5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkDocument1=$f(1,function(z5){
 $A(z5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkNavigator1=$f(1,function(N5){
 $A(N5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings1=$f(1,function(E7){
 $A(E7);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkWebSettings1=$f(1,function(F7){
 $A(F7);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebView1=$f(1,function(I7){
 $A(I7);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkWebView1=$f(1,function(J7){
 $A(J7);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeDOMWindow=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$L);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:1444:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$l1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2063:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLDivElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$w1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2349:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLInputElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$I1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2661:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLTextAreaElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$i2);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:3337:1");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebView=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebView1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:606:10");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassWebSettings1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:652:10");
var $$GraphicsziUIziGtkziWebKitziTypes_castToDOMWindow1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$Z3);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:1933:10");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$Z4);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLDivElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$v5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLInputElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$T5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLTextAreaElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$T6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes$a=$F(2,function(cF,dF){
 $$GHCziCString_unpackFoldrCStringzh.J("Cannot cast object to ",cF,dF);
},"lvl");
var $$GraphicsziUIziGtkziWebKitziTypes$L=$T(function(){
 var $ff=webkit_dom_dom_window_get_type();
 var yG=[$$GHCziPrim_realWorldzh,$ff];
 var zG=yG[1];
 $R(1,[zG],"W64#");
},"a36");
var $$GraphicsziUIziGtkziWebKitziTypes$l1=$T(function(){
 var $ff=webkit_dom_html_element_get_type();
 var yH=[$$GHCziPrim_realWorldzh,$ff];
 var zH=yH[1];
 $R(1,[zH],"W64#");
},"a62");
var $$GraphicsziUIziGtkziWebKitziTypes$w1=$T(function(){
 var $ff=webkit_dom_html_div_element_get_type();
 var UH=[$$GHCziPrim_realWorldzh,$ff];
 var VH=UH[1];
 $R(1,[VH],"W64#");
},"a73");
var $$GraphicsziUIziGtkziWebKitziTypes$I1=$T(function(){
 var $ff=webkit_dom_html_input_element_get_type();
 var sI=[$$GHCziPrim_realWorldzh,$ff];
 var tI=sI[1];
 $R(1,[tI],"W64#");
},"a85");
var $$GraphicsziUIziGtkziWebKitziTypes$i2=$T(function(){
 var $ff=webkit_dom_html_text_area_element_get_type();
 var sJ=[$$GHCziPrim_realWorldzh,$ff];
 var tJ=sJ[1];
 $R(1,[tJ],"W64#");
},"a111");
var $$GraphicsziUIziGtkziWebKitziTypes$Y3=$T(function(){
 $$GHCziCString_unpackCStringzh.J("DOMWindow");
},"lvl73");
var $$GraphicsziUIziGtkziWebKitziTypes$Z3=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$Y3);
},"lvl74");
var $$GraphicsziUIziGtkziWebKitziTypes$Y4=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HTMLElement");
},"lvl125");
var $$GraphicsziUIziGtkziWebKitziTypes$Z4=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$Y4);
},"lvl126");
var $$GraphicsziUIziGtkziWebKitziTypes$u5=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HTMLDivElement");
},"lvl147");
var $$GraphicsziUIziGtkziWebKitziTypes$v5=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$u5);
},"lvl148");
var $$GraphicsziUIziGtkziWebKitziTypes$S5=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HTMLInputElement");
},"lvl171");
var $$GraphicsziUIziGtkziWebKitziTypes$T5=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$S5);
},"lvl172");
var $$GraphicsziUIziGtkziWebKitziTypes$S6=$T(function(){
 $$GHCziCString_unpackCStringzh.J("HTMLTextAreaElement");
},"lvl223");
var $$GraphicsziUIziGtkziWebKitziTypes$T6=$T(function(){
 $$GraphicsziUIziGtkziWebKitziTypes$a.J($$GHCziTypes_ZC,$$GraphicsziUIziGtkziWebKitziTypes$S6);
},"lvl224");
var $$GraphicsziUIziGtkziWebKitziWebSettings_webSettingsUserAgent1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("user-agent");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebSettings'");
var $$GraphicsziUIziGtkziWebKitziWebView_loadFinished2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("load_finished");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$GraphicsziUIziGtkziWebKitziWebView_webViewLoadUri1=$f(4,function(I6,J6,K6,L6){
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(M6){
  var N6=M6.v[0];
  N6.C([L6],function(O6){
   var P6=O6[0],Q6=O6[1];
   var R6=$t(function(){
    $$SystemziGlibziTypes_toGObject.J(I6,J6);
   },[I6,J6],"a3");
   var S6=$f(2,function(T6,U6){
    $M(R6,function(V6){
     var W6=V6.v[0],X6=V6.v[1];
     $M(T6,function(Y6){
      var Z6=Y6.v[0];
      var $ff=webkit_web_view_load_uri(W6,Z6);
      var a7=[U6,$ff];
      var b7=a7[0];
      var c7=$hs_touchzh(X6,b7);
      $r([c7,$$GHCziTuple_Z0T]);
     },[W6,U6,X6]);
    },[T6,U6]);
   },[R6],"sat");
   $$GHCziForeign_charIsRepresentable3.J(Q6,K6,S6,P6);
  },[I6,J6,K6]);
 },[L6,I6,J6,K6]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$GraphicsziUIziGtkziWebKitziWebView_webViewNew2=$f(1,function(bA){
 var $ff=webkit_web_view_new();
 var cA=[bA,$ff];
 var dA=cA[0],eA=cA[1];
 var fA=$d(1,[eA],"sat");
 $r([dA,fA]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$GraphicsziUIziGtkziWebKitziWebView_webViewNew1=$f(1,function(gA){
 var $ff=g_thread_get_initialized();
 var hA=[gA,$ff];
 var iA=hA[0],jA=hA[1];
 var kA=$hs_narrow32Intzh(jA);
 switch(kA.toString()){
 case "0":
  var $ff=g_thread_init(null);
  var lA=[iA,$ff];
  var mA=lA[0];
  $$GraphicsziUIziGtkziAbstractziObject_zdwa.J($$GraphicsziUIziGtkziWebKitziTypes_mkWebView1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,$$GraphicsziUIziGtkziWebKitziWebView_webViewNew2,mA);break;
 default:
  $$GraphicsziUIziGtkziAbstractziObject_zdwa.J($$GraphicsziUIziGtkziWebKitziTypes_mkWebView1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,$$GraphicsziUIziGtkziWebKitziWebView_webViewNew2,iA);
 }
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$GraphicsziUIziGtkziWebKitziWebView_zdwa16=$f(2,function(jL,kL){
 var lL=$f(1,function(mL){
  $M(jL,function(nL){
   var oL=nL.v[0],pL=nL.v[1];
   var $ff=webkit_web_view_get_dom_document(oL);
   var qL=[mL,$ff];
   var rL=qL[0],sL=qL[1];
   var uL=$hs_touchzh(pL,rL);
   var tL=$d(1,[sL],"sat");
   $r([uL,tL]);
  },[mL]);
 },[jL],"sat");
 $$SystemziGlibziGObject_zdwa1.J($$GraphicsziUIziGtkziWebKitziTypes_mkDocument1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,lL,kL);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.WebView'");
var $$DataziTypeableziInternal_zdfTypeableZLZRzupkg=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ghc-prim");
},[],"at libraries/base/Data/Typeable/Internal.hs:178:10");
var $$DataziTypeableziInternal_zdfTypeable1IOzumodl=$t(function(){
 $$GHCziCString_unpackCStringzh.J("GHC.Types");
},[],"at libraries/base/Data/Typeable/Internal.hs:178:14");
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
},[],"at libraries/base/Data/Typeable/Internal.hs:234:1");
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
},[],"at libraries/base/Data/Typeable/Internal.hs:221:3");
var $$DataziTypeableziInternal_zdfTypeable1IO3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("IO");
},[],"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IO2=$D(1,function(){
 $r([goog.math.Long.fromBits(1456544454,4198540223),goog.math.Long.fromBits(3588501173,645407194),$$DataziTypeableziInternal_zdfTypeableZLZRzupkg,$$DataziTypeableziInternal_zdfTypeable1IOzumodl,$$DataziTypeableziInternal_zdfTypeable1IO3]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IO1=$D(1,function(){
 $r([goog.math.Long.fromBits(1456544454,4198540223),goog.math.Long.fromBits(3588501173,645407194),$$DataziTypeableziInternal_zdfTypeable1IO2,$$GHCziTypes_ZMZN]);
},"in `base:Data.Typeable.Internal'");
var $$DataziTypeableziInternal_zdfTypeable1IOzuzdctypeOf1=$f(1,function(ng){
 $A($$DataziTypeableziInternal_zdfTypeable1IO1);
},[],"at libraries/base/Data/Typeable/Internal.hs:229:3");
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
},[],"at libraries/base/Foreign/Storable.hs:109:4");
var $$ForeignziStorable_zdfStorablePtrzuzdcsizzeOf=$f(1,function(v3){
 $A($$ForeignziStorable_zdfStorableDouble6);
},[],"at libraries/base/Foreign/Storable.hs:105:4");
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
},"at libraries/base/Foreign/Storable.hs:213:10");
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
      var A=v.lessThanOrEqual(z)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(A.g){
      case 1:
       $A($$GHCziConcziSignal_setHandler3);break;
      case 2:
       var B=z.lessThanOrEqual(x)?$$GHCziTypes_True:$$GHCziTypes_False;
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
  switch(G.toString()){
  case "0":
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
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl");
var $$GHCziConcziSignal$b=$D(1,function(){
 $r([goog.math.Long.fromBits(64,0)]);
},"lvl1");
var $$GHCziConcziSignal$c=$F(1,function(C2){
 var b3=$hs_noDuplicatezh(C2);
 var D2=$hs_newArrayzh(goog.math.Long.fromBits(65,0),$$DataziMaybe_Nothing,b3);
 var E2=D2[0],F2=D2[1];
 var G2=$hs_newMVarzh(E2);
 var H2=G2[0],I2=G2[1];
 var J2=$d(1,[$$GHCziConcziSignal$a,$$GHCziConcziSignal$b,goog.math.Long.fromBits(65,0),F2],"sat");
 $b($hs_putMVarzh,[I2,J2,H2],function(a3){
  var K2=$hs_getMaskingStatezh(a3);
  var L2=K2[0],M2=K2[1];
  var N2=$f(1,function(O2){
   var P2=$d(1,[I2],"m");
   var Q2=[O2,P2];
   var R2=Q2[0],S2=Q2[1];
   var $ff=getOrSetGHCConcSignalSignalHandlerStore(S2);
   var T2=[R2,$ff];
   var U2=T2[0],V2=T2[1];
   var W2=$hs_eqAddrzh(S2,V2);
   switch(W2.g){
   case 1:
    var $ff=hs_free_stable_ptr(S2);
    var X2=[U2,$ff];
    var Y2=X2[0];
    $r([Y2,V2]);break;
   case 2:
    $r([U2,P2]);break;
   }
  },[I2],"a");
  $M(M2,function(Z2){
   switch(Z2.toString()){
   case "0":
    $k($hs_maskAsyncExceptionszh,[N2,L2]);break;
   default:
    N2.J(L2);
   }
  },[N2,L2]);
 },[I2]);
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
},"at libraries/base/GHC/IO/Encoding/Failure.hs:50:5");
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
var $$GHCziIOziException_zdfShowAsyncException4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("stack overflow");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException8=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException4,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("heap overflow");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException7=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException3,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("thread killed");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException6=$f(1,function(t){
 $$GHCziBase_zpzp.J($$GHCziIOziException_zdfShowAsyncException2,t);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfShowAsyncException1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("user interrupt");
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
   $$GHCziCString_unpackAppendCStringzh.J("[]",n2);break;
  case 2:
   var p2=o2.v[0],q2=o2.v[1];
   var r2=$t(function(){
    var s2=$t(function(){
     var t2=$d(2,[$$GHCziShow_showListzuzu2,n2],"lvl20");
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
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdcfromException=$f(1,function(Ga){
 $M(Ga,function(Ha){
  var Ia=Ha.v[0],Ja=Ha.v[1];
  $$GHCziException_zdp1Exception.C([Ia,Ja],function(Ka){
   var La=Ka.v[0],Ma=Ka.v[1];
   var Na=$hs_eqWordzh(La,goog.math.Long.fromBits(2363394409,315339024));
   switch(Na.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var Oa=$hs_eqWordzh(Ma,goog.math.Long.fromBits(2156861182,4256135785));
    switch(Oa.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[Ja],"Just");break;
    }break;
   }
  },[Ja]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfExceptionAsyncException=$D(1,function(){
 $r([$$GHCziIOziException_zdfTypeableAsyncExceptionzuzdctypeOf,$$GHCziIOziException_zdfShowAsyncException,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException,$$GHCziIOziException_zdfExceptionAsyncExceptionzuzdcfromException]);
},"at libraries/base/GHC/IO/Exception.hs:135:10");
var $$GHCziIOziException_zdfExceptionAsyncExceptionzuzdctoException=$f(1,function(t){
 $R(1,[$$GHCziIOziException_zdfExceptionAsyncException,t],"SomeException");
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
var $$GHCziIOziException_zdfTypeableExitCodezuzdctypeOf=$f(1,function(Za){
 $A($$GHCziIOziException_zdfTypeableExitCode1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_UserInterrupt=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:129:5");
var $$GHCziIOziFD_stderr=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0),goog.math.Long.fromBits(0,0)]);
},"at libraries/base/GHC/IO/FD.hs:300:1");
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
  var j4=$f(3,function(k4,l4,m4){
   $M(l4,function(n4){
    var o4=n4.v[3],p4=n4.v[4],q4=n4.v[5];
    var r4=$f(1,function(s4){
     $$GHCziIOziBufferedIO_flushWriteBuffer.C([b4,c4,n4,m4],function(t4){
      var u4=t4[0],v4=t4[1];
      var E4=$hs_writeMutVarzh(d4,v4,u4);
      $M(k4,function(w4){
       var x4=w4.v[0],y4=w4.v[1],z4=w4.v[2],A4=w4.v[3],B4=w4.v[4],C4=w4.v[5];
       var D4=B4.equals(C4)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(D4.g){
       case 1:
	$$GHCziIOziHandleziInternals_zdwa3.J(a4,x4,y4,z4,A4,B4,C4,E4);break;
       case 2:
	$r([E4,$$GHCziTuple_Z0T]);break;
       }
      },[a4,E4]);
     },[d4,k4,a4]);
    },[d4,b4,c4,n4,m4,k4,a4],"$w$j");
    var F4=o4.equals(q4)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(F4.g){
    case 1:
     $M(k4,function(G4){
      var H4=G4.v[0],I4=G4.v[1],J4=G4.v[2],K4=G4.v[3],L4=G4.v[4],M4=G4.v[5];
      var N4=$t(function(){
       $r(L4.equals(M4)?$$GHCziTypes_True:$$GHCziTypes_False);
      },[L4,M4],"lvl18");
      var O4=$f(1,function(P4){
       $M(e4,function(Q4){
	switch(Q4.g){
	case 1:
	 r4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 var S4=$hs_writeMutVarzh(d4,n4,m4);
	 $M(N4,function(R4){
	  switch(R4.g){
	  case 1:
	   $$GHCziIOziHandleziInternals_zdwa3.J(a4,H4,I4,J4,K4,L4,M4,S4);break;
	  case 2:
	   $r([S4,$$GHCziTuple_Z0T]);break;
	  }
	 },[a4,L4,M4,H4,I4,J4,K4,S4]);break;
	case 3:
	 var T4=Q4.v[0];
	 $M(T4,function(U4){
	  switch(U4.g){
	  case 1:
	   var W4=$hs_writeMutVarzh(d4,n4,m4);
	   $M(N4,function(V4){
	    switch(V4.g){
	    case 1:
	     $$GHCziIOziHandleziInternals_zdwa3.J(a4,H4,I4,J4,K4,L4,M4,W4);break;
	    case 2:
	     $r([W4,$$GHCziTuple_Z0T]);break;
	    }
	   },[a4,L4,M4,H4,I4,J4,K4,W4]);break;
	  case 2:
	   var X4=U4.v[0];
	   $M(X4,function(Y4){
	    var Z4=Y4.v[0];
	    var d5=q4.subtract(p4);
	    var a5=d5.greaterThanOrEqual(Z4)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(a5.g){
	    case 1:
	     var c5=$hs_writeMutVarzh(d4,n4,m4);
	     $M(N4,function(b5){
	      switch(b5.g){
	      case 1:
	       $$GHCziIOziHandleziInternals_zdwa3.J(a4,H4,I4,J4,K4,L4,M4,c5);break;
	      case 2:
	       $r([c5,$$GHCziTuple_Z0T]);break;
	      }
	     },[a4,L4,M4,H4,I4,J4,K4,c5]);break;
	    case 2:
	     r4.J($$GHCziPrim_realWorldzh);break;
	    }
	   },[d4,b4,c4,n4,m4,k4,a4,r4,q4,L4,M4,N4,H4,I4,J4,K4,p4]);break;
	  }
	 },[d4,b4,c4,n4,m4,k4,a4,r4,q4,L4,M4,N4,H4,I4,J4,K4,p4]);break;
	}
       },[d4,b4,c4,n4,m4,k4,a4,r4,q4,L4,M4,N4,H4,I4,J4,K4,p4]);
      },[d4,n4,m4,a4,r4,q4,L4,M4,N4,e4,H4,I4,J4,K4,p4],"$w$j1");
      $M(N4,function(e5){
       switch(e5.g){
       case 1:
	var f5=L4.equals(X3)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(f5.g){
	case 1:
	 O4.J($$GHCziPrim_realWorldzh);break;
	case 2:
	 r4.J($$GHCziPrim_realWorldzh);break;
	}break;
       case 2:
	O4.J($$GHCziPrim_realWorldzh);break;
       }
      },[d4,b4,c4,n4,m4,k4,a4,r4,q4,L4,M4,N4,e4,H4,I4,J4,K4,p4,O4,X3]);
     },[d4,b4,c4,n4,m4,k4,a4,r4,q4,e4,p4,X3]);break;
    case 2:
     r4.J($$GHCziPrim_realWorldzh);break;
    }
   },[d4,b4,c4,m4,k4,a4,e4,X3]);
  },[d4,b4,c4,a4,e4,X3],"$wa4");
  $M(f4,function(g5){
   switch(g5.g){
   case 1:
    $$GHCziIOziEncodingziLatin1_zdwa.C([T3,U3,V3,W3,X3,Y3,i4,h4],function(h5){
     var i5=h5[0],j5=h5[1];
     $M(j5,function(k5){
      var l5=k5.v[1],m5=k5.v[2];
      j4.J(l5,m5,i5);
     },[d4,b4,c4,a4,e4,X3,j4,i5]);
    },[d4,b4,c4,a4,e4,X3,j4]);break;
   case 2:
    var n5=g5.v[0];
    $M(n5,function(o5){
     var p5=o5.v[0],q5=o5.v[1];
     var r5=$d(1,[T3,U3,V3,W3,X3,Y3],"sat");
     $$GHCziIOziHandleziInternals_zdwa.C([p5,q5,r5,i4,h4],function(s5){
      var t5=s5[0],u5=s5[1];
      $M(u5,function(v5){
       var w5=v5.v[0],x5=v5.v[1];
       j4.J(w5,x5,t5);
      },[d4,b4,c4,a4,e4,X3,j4,t5]);
     },[d4,b4,c4,a4,e4,X3,j4]);
    },[d4,b4,c4,a4,e4,X3,j4,T3,U3,V3,W3,Y3,i4,h4]);break;
   }
  },[d4,b4,c4,a4,e4,X3,j4,T3,U3,V3,W3,Y3,i4,h4]);
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
var $$GHCziIOziHandleziText_zdwa6=$f(9,function(sd,td,ud,vd,wd,xd,yd,zd,Ad){
 var Bd=$d(1,[wd,xd],"raw");
 var Cd=$F(4,function(Dd,Ed,Fd,Gd){
  var oh=Dd.add(goog.math.Long.fromBits(1,0));
  var Hd=oh.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Hd.g){
  case 1:
   $M(Ed,function(Id){
    var Jd=Id.v[0];
    $M(Jd,function(Kd){
     switch(Kd.toString()){
     case "\n":
      var Pd=$f(2,function(Qd,Rd){
       $M(td,function(Sd){
	switch(Sd.g){
	case 1:
	 var Td=$f(3,function(Ud,Vd,Wd){
	  $M(Vd,function(Xd){
	   switch(Xd.g){
	   case 1:
	    var Yd=$f(1,function(Zd){
	     $M(Zd,function(ae){
	      var be=ae.v[8],ce=ae.v[9];
	      var de=$f(1,function(ee){
	       $$GHCziIOziHandleziInternals_zdwa3.C([ae,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ud,ee],function(fe){
		var ge=fe[0];
		var he=$hs_readMutVarzh(be,ge);
		var ie=he[0],je=he[1];
		$M(je,function(ke){
		 var le=ke.v[3];
		 var me=yd.equals(le)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(me.g){
		 case 1:
		  $r([ie,$$GHCziTuple_Z0T]);break;
		 case 2:
		  var ne=$hs_readMutVarzh(ce,ie);
		  var oe=ne[0],pe=ne[1];
		  var qe=$d(2,[Bd,pe],"sat");
		  var re=$hs_writeMutVarzh(ce,qe,oe);
		  $r([re,$$GHCziTuple_Z0T]);break;
		 }
		},[Bd,yd,ie,ce]);
	       },[Bd,yd,be,ce]);
	      },[wd,xd,Bd,yd,ae,Ud,be,ce],"sat");
	      $A(de);
	     },[wd,xd,Bd,yd,Ud]);
	    },[wd,xd,Bd,yd,Ud],"sat");
	    $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Yd,Wd);break;
	   case 2:
	    var se=Xd.v[0],te=Xd.v[1];
	    var Ue=Ud.add(goog.math.Long.fromBits(1,0));
	    var ue=Ue.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(ue.g){
	    case 1:
	     $M(se,function(ve){
	      var we=ve.v[0];
	      $M(we,function(xe){
	       switch(xe.toString()){
	       case "\n":
		$M(vd,function(Be){
		 switch(Be.g){
		 case 1:
		  var Ee=$hs_writeWideCharOffAddrzh(wd,Ud,"\n",Wd);
		  var De=$hs_touchzh(xd,Ee);
		  var Ce=Ud.add(goog.math.Long.fromBits(1,0));
		  Td.J(Ce,te,De);break;
		 case 2:
		  var Ke=$hs_writeWideCharOffAddrzh(wd,Ud,"\r",Wd);
		  var Je=$hs_touchzh(xd,Ke);
		  var He=Ud.add(goog.math.Long.fromBits(1,0));
		  var Ie=$hs_writeWideCharOffAddrzh(wd,He,"\n",Je);
		  var Ge=$hs_touchzh(xd,Ie);
		  var Fe=He.add(goog.math.Long.fromBits(1,0));
		  Td.J(Fe,te,Ge);break;
		 }
		},[wd,xd,Bd,yd,sd,Ud,Wd,Td,te,vd]);break;
	       default:
		var Ae=$hs_writeWideCharOffAddrzh(wd,Ud,xe,Wd);
		var ze=$hs_touchzh(xd,Ae);
		var ye=Ud.add(goog.math.Long.fromBits(1,0));
		Td.J(ye,te,ze);
	       }
	      },[wd,xd,Bd,yd,sd,Ud,Wd,Td,te,vd]);
	     },[wd,xd,Bd,yd,sd,Ud,Wd,Td,te,vd]);break;
	    case 2:
	     var Le=$f(1,function(Me){
	      $M(Me,function(Ne){
	       var Oe=$f(1,function(Pe){
		$$GHCziIOziHandleziInternals_zdwa3.C([Ne,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ud,Pe],function(Qe){
		 var Re=Qe[0];
		 $r([Re,$$GHCziTuple_Z0T]);
		},[]);
	       },[wd,xd,yd,Ud,Ne],"sat");
	       $A(Oe);
	      },[wd,xd,yd,Ud]);
	     },[wd,xd,yd,Ud],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Le,Wd],function(Se){
	      var Te=Se[0];
	      Td.J(goog.math.Long.fromBits(0,0),Xd,Te);
	     },[wd,xd,Bd,yd,sd,Td,vd,Xd]);break;
	    }break;
	   }
	  },[wd,xd,Bd,yd,sd,Ud,Wd,Td,vd]);
	 },[wd,xd,Bd,yd,sd,vd],"$s$wa4");
	 Td.J(Rd,Fd,Qd);break;
	case 2:
	 var Ve=$f(1,function(We){
	  $M(We,function(Xe){
	   var Ye=Xe.v[1],Ze=Xe.v[3],af=Xe.v[5];
	   var bf=$f(1,function(cf){
	    $$GHCziIOziHandleziInternals_zdwa3.C([Xe,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Rd,cf],function(df){
	     var ef=df[0];
	     var ff=$hs_readMutVarzh(af,ef);
	     var gf=ff[0],hf=ff[1];
	     $M(hf,function(jf){
	      var kf=jf.v[4],lf=jf.v[5];
	      var mf=kf.equals(lf)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(mf.g){
	      case 1:
	       $$GHCziIOziBufferedIO_flushWriteBuffer.C([Ye,Ze,jf,gf],function(nf){
		var of=nf[0],pf=nf[1];
		var qf=$hs_writeMutVarzh(af,pf,of);
		$r([qf,$$GHCziTuple_Z0T]);
	       },[af]);break;
	      case 2:
	       $r([gf,$$GHCziTuple_Z0T]);break;
	      }
	     },[af,Ye,Ze,gf]);
	    },[af,Ye,Ze]);
	   },[wd,xd,yd,Rd,Xe,af,Ye,Ze],"sat");
	   $A(bf);
	  },[wd,xd,yd,Rd]);
	 },[wd,xd,yd,Rd],"sat");
	 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Ve,Qd],function(rf){
	  var sf=rf[0];
	  var tf=$f(3,function(uf,vf,wf){
	   $M(vf,function(xf){
	    switch(xf.g){
	    case 1:
	     var yf=$f(1,function(zf){
	      $M(zf,function(Af){
	       var Bf=Af.v[8],Cf=Af.v[9];
	       var Df=$f(1,function(Ef){
		$$GHCziIOziHandleziInternals_zdwa3.C([Af,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),uf,Ef],function(Ff){
		 var Gf=Ff[0];
		 var Hf=$hs_readMutVarzh(Bf,Gf);
		 var If=Hf[0],Jf=Hf[1];
		 $M(Jf,function(Kf){
		  var Lf=Kf.v[3];
		  var Mf=yd.equals(Lf)?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Mf.g){
		  case 1:
		   $r([If,$$GHCziTuple_Z0T]);break;
		  case 2:
		   var Nf=$hs_readMutVarzh(Cf,If);
		   var Of=Nf[0],Pf=Nf[1];
		   var Qf=$d(2,[Bd,Pf],"sat");
		   var Rf=$hs_writeMutVarzh(Cf,Qf,Of);
		   $r([Rf,$$GHCziTuple_Z0T]);break;
		  }
		 },[Bd,yd,If,Cf]);
		},[Bd,yd,Bf,Cf]);
	       },[wd,xd,Bd,yd,Af,uf,Bf,Cf],"sat");
	       $A(Df);
	      },[wd,xd,Bd,yd,uf]);
	     },[wd,xd,Bd,yd,uf],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,yf,wf);break;
	    case 2:
	     var Sf=xf.v[0],Tf=xf.v[1];
	     var Ug=uf.add(goog.math.Long.fromBits(1,0));
	     var Uf=Ug.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Uf.g){
	     case 1:
	      $M(Sf,function(Vf){
	       var Wf=Vf.v[0];
	       $M(Wf,function(Xf){
		switch(Xf.toString()){
		case "\n":
		 var bg=$f(2,function(cg,dg){
		  var eg=$f(1,function(fg){
		   $M(fg,function(gg){
		    var hg=gg.v[1],ig=gg.v[3],jg=gg.v[5];
		    var kg=$f(1,function(lg){
		     $$GHCziIOziHandleziInternals_zdwa3.C([gg,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),dg,lg],function(mg){
		      var ng=mg[0];
		      var og=$hs_readMutVarzh(jg,ng);
		      var pg=og[0],qg=og[1];
		      $M(qg,function(rg){
		       var sg=rg.v[4],tg=rg.v[5];
		       var ug=sg.equals(tg)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(ug.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([hg,ig,rg,pg],function(vg){
			 var wg=vg[0],xg=vg[1];
			 var yg=$hs_writeMutVarzh(jg,xg,wg);
			 $r([yg,$$GHCziTuple_Z0T]);
			},[jg]);break;
		       case 2:
			$r([pg,$$GHCziTuple_Z0T]);break;
		       }
		      },[jg,hg,ig,pg]);
		     },[jg,hg,ig]);
		    },[wd,xd,yd,gg,dg,jg,hg,ig],"sat");
		    $A(kg);
		   },[wd,xd,yd,dg]);
		  },[wd,xd,yd,dg],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,eg,cg],function(zg){
		   var Ag=zg[0];
		   tf.J(goog.math.Long.fromBits(0,0),Tf,Ag);
		  },[wd,xd,Bd,yd,sd,vd,tf,Tf]);
		 },[wd,xd,yd,sd,tf,Tf],"$w$j1");
		 $M(vd,function(Bg){
		  switch(Bg.g){
		  case 1:
		   var Eg=$hs_writeWideCharOffAddrzh(wd,uf,"\n",wf);
		   var Cg=$hs_touchzh(xd,Eg);
		   var Dg=uf.add(goog.math.Long.fromBits(1,0));
		   bg.J(Cg,Dg);break;
		  case 2:
		   var Kg=$hs_writeWideCharOffAddrzh(wd,uf,"\r",wf);
		   var Jg=$hs_touchzh(xd,Kg);
		   var Hg=uf.add(goog.math.Long.fromBits(1,0));
		   var Ig=$hs_writeWideCharOffAddrzh(wd,Hg,"\n",Jg);
		   var Fg=$hs_touchzh(xd,Ig);
		   var Gg=Hg.add(goog.math.Long.fromBits(1,0));
		   bg.J(Fg,Gg);break;
		  }
		 },[wd,xd,Bd,yd,sd,vd,uf,wf,tf,Tf,bg]);break;
		default:
		 var ag=$hs_writeWideCharOffAddrzh(wd,uf,Xf,wf);
		 var Zf=$hs_touchzh(xd,ag);
		 var Yf=uf.add(goog.math.Long.fromBits(1,0));
		 tf.J(Yf,Tf,Zf);
		}
	       },[wd,xd,Bd,yd,sd,vd,uf,wf,tf,Tf]);
	      },[wd,xd,Bd,yd,sd,vd,uf,wf,tf,Tf]);break;
	     case 2:
	      var Lg=$f(1,function(Mg){
	       $M(Mg,function(Ng){
		var Og=$f(1,function(Pg){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Ng,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),uf,Pg],function(Qg){
		  var Rg=Qg[0];
		  $r([Rg,$$GHCziTuple_Z0T]);
		 },[]);
		},[wd,xd,yd,uf,Ng],"sat");
		$A(Og);
	       },[wd,xd,yd,uf]);
	      },[wd,xd,yd,uf],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Lg,wf],function(Sg){
	       var Tg=Sg[0];
	       tf.J(goog.math.Long.fromBits(0,0),xf,Tg);
	      },[wd,xd,Bd,yd,sd,vd,tf,xf]);break;
	     }break;
	    }
	   },[wd,xd,Bd,yd,sd,vd,uf,wf,tf]);
	  },[wd,xd,Bd,yd,sd,vd],"$s$wa4");
	  tf.J(goog.math.Long.fromBits(0,0),Fd,sf);
	 },[wd,xd,Bd,yd,Fd,sd,vd]);break;
	}
       },[wd,xd,Bd,yd,Fd,sd,vd,Rd,Qd]);
      },[wd,xd,Bd,yd,Fd,td,sd,vd],"$w$j");
      $M(vd,function(Vg){
       switch(Vg.g){
       case 1:
	var Yg=$hs_writeWideCharOffAddrzh(wd,Dd,"\n",Gd);
	var Wg=$hs_touchzh(xd,Yg);
	var Xg=Dd.add(goog.math.Long.fromBits(1,0));
	Pd.J(Wg,Xg);break;
       case 2:
	var eh=$hs_writeWideCharOffAddrzh(wd,Dd,"\r",Gd);
	var dh=$hs_touchzh(xd,eh);
	var bh=Dd.add(goog.math.Long.fromBits(1,0));
	var ch=$hs_writeWideCharOffAddrzh(wd,bh,"\n",dh);
	var Zg=$hs_touchzh(xd,ch);
	var ah=bh.add(goog.math.Long.fromBits(1,0));
	Pd.J(Zg,ah);break;
       }
      },[wd,xd,Bd,Dd,yd,Gd,Fd,td,sd,vd,Pd]);break;
     default:
      var Od=$hs_writeWideCharOffAddrzh(wd,Dd,Kd,Gd);
      var Nd=$hs_touchzh(xd,Od);
      var Md=Dd.add(goog.math.Long.fromBits(1,0));
      Ld.J(Md,Fd,Nd);
     }
    },[wd,xd,Bd,Dd,yd,Gd,Ld,Fd,td,sd,vd]);
   },[wd,xd,Bd,Dd,yd,Gd,Ld,Fd,td,sd,vd]);break;
  case 2:
   var fh=$f(1,function(gh){
    $M(gh,function(hh){
     var ih=$f(1,function(jh){
      $$GHCziIOziHandleziInternals_zdwa3.C([hh,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Dd,jh],function(kh){
       var lh=kh[0];
       $r([lh,$$GHCziTuple_Z0T]);
      },[]);
     },[wd,xd,Dd,yd,hh],"sat");
     $A(ih);
    },[wd,xd,Dd,yd]);
   },[wd,xd,Dd,yd],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,fh,Gd],function(mh){
    var nh=mh[0];
    Cd.J(goog.math.Long.fromBits(0,0),Ed,Fd,nh);
   },[wd,xd,Bd,yd,Ed,Fd,td,sd,vd,Cd]);break;
  }
 },"$s$wa2"),Ld=$f(3,function(ph,qh,rh){
  $M(qh,function(sh){
   switch(sh.g){
   case 1:
    var th=$f(1,function(uh){
     $M(uh,function(vh){
      var wh=vh.v[8],xh=vh.v[9];
      var yh=$f(1,function(zh){
       $$GHCziIOziHandleziInternals_zdwa3.C([vh,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ph,zh],function(Ah){
	var Bh=Ah[0];
	var Ch=$hs_readMutVarzh(wh,Bh);
	var Dh=Ch[0],Eh=Ch[1];
	$M(Eh,function(Fh){
	 var Gh=Fh.v[3];
	 var Hh=yd.equals(Gh)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Hh.g){
	 case 1:
	  $r([Dh,$$GHCziTuple_Z0T]);break;
	 case 2:
	  var Ih=$hs_readMutVarzh(xh,Dh);
	  var Jh=Ih[0],Kh=Ih[1];
	  var Lh=$d(2,[Bd,Kh],"sat");
	  var Mh=$hs_writeMutVarzh(xh,Lh,Jh);
	  $r([Mh,$$GHCziTuple_Z0T]);break;
	 }
	},[Bd,yd,Dh,xh]);
       },[Bd,yd,wh,xh]);
      },[wd,xd,Bd,yd,vh,ph,wh,xh],"sat");
      $A(yh);
     },[wd,xd,Bd,yd,ph]);
    },[wd,xd,Bd,yd,ph],"sat");
    $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,th,rh);break;
   case 2:
    var Nh=sh.v[0],Oh=sh.v[1];
    var ul=ph.add(goog.math.Long.fromBits(1,0));
    var Ph=ul.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Ph.g){
    case 1:
     $M(Nh,function(Qh){
      var Rh=Qh.v[0];
      $M(Rh,function(Sh){
       switch(Sh.toString()){
       case "\n":
	var Wh=$f(2,function(Xh,Yh){
	 $M(td,function(Zh){
	  switch(Zh.g){
	  case 1:
	   var ai=$f(3,function(bi,ci,di){
	    $M(ci,function(ei){
	     switch(ei.g){
	     case 1:
	      var fi=$f(1,function(gi){
	       $M(gi,function(hi){
		var ii=hi.v[8],ji=hi.v[9];
		var ki=$f(1,function(li){
		 $$GHCziIOziHandleziInternals_zdwa3.C([hi,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),bi,li],function(mi){
		  var ni=mi[0];
		  var oi=$hs_readMutVarzh(ii,ni);
		  var pi=oi[0],qi=oi[1];
		  $M(qi,function(ri){
		   var si=ri.v[3];
		   var ti=yd.equals(si)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(ti.g){
		   case 1:
		    $r([pi,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var ui=$hs_readMutVarzh(ji,pi);
		    var vi=ui[0],wi=ui[1];
		    var xi=$d(2,[Bd,wi],"sat");
		    var yi=$hs_writeMutVarzh(ji,xi,vi);
		    $r([yi,$$GHCziTuple_Z0T]);break;
		   }
		  },[Bd,yd,pi,ji]);
		 },[Bd,yd,ii,ji]);
		},[wd,xd,Bd,yd,hi,bi,ii,ji],"sat");
		$A(ki);
	       },[wd,xd,Bd,yd,bi]);
	      },[wd,xd,Bd,yd,bi],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,fi,di);break;
	     case 2:
	      var zi=ei.v[0],Ai=ei.v[1];
	      var bj=bi.add(goog.math.Long.fromBits(1,0));
	      var Bi=bj.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Bi.g){
	      case 1:
	       $M(zi,function(Ci){
		var Di=Ci.v[0];
		$M(Di,function(Ei){
		 switch(Ei.toString()){
		 case "\n":
		  $M(vd,function(Ii){
		   switch(Ii.g){
		   case 1:
		    var Li=$hs_writeWideCharOffAddrzh(wd,bi,"\n",di);
		    var Ki=$hs_touchzh(xd,Li);
		    var Ji=bi.add(goog.math.Long.fromBits(1,0));
		    ai.J(Ji,Ai,Ki);break;
		   case 2:
		    var Ri=$hs_writeWideCharOffAddrzh(wd,bi,"\r",di);
		    var Qi=$hs_touchzh(xd,Ri);
		    var Oi=bi.add(goog.math.Long.fromBits(1,0));
		    var Pi=$hs_writeWideCharOffAddrzh(wd,Oi,"\n",Qi);
		    var Ni=$hs_touchzh(xd,Pi);
		    var Mi=Oi.add(goog.math.Long.fromBits(1,0));
		    ai.J(Mi,Ai,Ni);break;
		   }
		  },[wd,xd,Bd,yd,sd,vd,bi,di,ai,Ai]);break;
		 default:
		  var Hi=$hs_writeWideCharOffAddrzh(wd,bi,Ei,di);
		  var Gi=$hs_touchzh(xd,Hi);
		  var Fi=bi.add(goog.math.Long.fromBits(1,0));
		  ai.J(Fi,Ai,Gi);
		 }
		},[wd,xd,Bd,yd,sd,vd,bi,di,ai,Ai]);
	       },[wd,xd,Bd,yd,sd,vd,bi,di,ai,Ai]);break;
	      case 2:
	       var Si=$f(1,function(Ti){
		$M(Ti,function(Ui){
		 var Vi=$f(1,function(Wi){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Ui,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),bi,Wi],function(Xi){
		   var Yi=Xi[0];
		   $r([Yi,$$GHCziTuple_Z0T]);
		  },[]);
		 },[wd,xd,yd,bi,Ui],"sat");
		 $A(Vi);
		},[wd,xd,yd,bi]);
	       },[wd,xd,yd,bi],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Si,di],function(Zi){
		var aj=Zi[0];
		ai.J(goog.math.Long.fromBits(0,0),ei,aj);
	       },[wd,xd,Bd,yd,sd,vd,ai,ei]);break;
	      }break;
	     }
	    },[wd,xd,Bd,yd,sd,vd,bi,di,ai]);
	   },[wd,xd,Bd,yd,sd,vd],"$s$wa4");
	   ai.J(Yh,Oh,Xh);break;
	  case 2:
	   var cj=$f(1,function(dj){
	    $M(dj,function(ej){
	     var fj=ej.v[1],gj=ej.v[3],hj=ej.v[5];
	     var ij=$f(1,function(jj){
	      $$GHCziIOziHandleziInternals_zdwa3.C([ej,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Yh,jj],function(kj){
	       var lj=kj[0];
	       var mj=$hs_readMutVarzh(hj,lj);
	       var nj=mj[0],oj=mj[1];
	       $M(oj,function(pj){
		var qj=pj.v[4],rj=pj.v[5];
		var sj=qj.equals(rj)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(sj.g){
		case 1:
		 $$GHCziIOziBufferedIO_flushWriteBuffer.C([fj,gj,pj,nj],function(tj){
		  var uj=tj[0],vj=tj[1];
		  var wj=$hs_writeMutVarzh(hj,vj,uj);
		  $r([wj,$$GHCziTuple_Z0T]);
		 },[hj]);break;
		case 2:
		 $r([nj,$$GHCziTuple_Z0T]);break;
		}
	       },[hj,fj,gj,nj]);
	      },[hj,fj,gj]);
	     },[wd,xd,yd,Yh,ej,hj,fj,gj],"sat");
	     $A(ij);
	    },[wd,xd,yd,Yh]);
	   },[wd,xd,yd,Yh],"sat");
	   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,cj,Xh],function(xj){
	    var yj=xj[0];
	    var zj=$f(3,function(Aj,Bj,Cj){
	     $M(Bj,function(Dj){
	      switch(Dj.g){
	      case 1:
	       var Ej=$f(1,function(Fj){
		$M(Fj,function(Gj){
		 var Hj=Gj.v[8],Ij=Gj.v[9];
		 var Jj=$f(1,function(Kj){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Gj,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Aj,Kj],function(Lj){
		   var Mj=Lj[0];
		   var Nj=$hs_readMutVarzh(Hj,Mj);
		   var Oj=Nj[0],Pj=Nj[1];
		   $M(Pj,function(Qj){
		    var Rj=Qj.v[3];
		    var Sj=yd.equals(Rj)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Sj.g){
		    case 1:
		     $r([Oj,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var Tj=$hs_readMutVarzh(Ij,Oj);
		     var Uj=Tj[0],Vj=Tj[1];
		     var Wj=$d(2,[Bd,Vj],"sat");
		     var Xj=$hs_writeMutVarzh(Ij,Wj,Uj);
		     $r([Xj,$$GHCziTuple_Z0T]);break;
		    }
		   },[Bd,yd,Oj,Ij]);
		  },[Bd,yd,Hj,Ij]);
		 },[wd,xd,Bd,yd,Gj,Aj,Hj,Ij],"sat");
		 $A(Jj);
		},[wd,xd,Bd,yd,Aj]);
	       },[wd,xd,Bd,yd,Aj],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Ej,Cj);break;
	      case 2:
	       var Yj=Dj.v[0],Zj=Dj.v[1];
	       var al=Aj.add(goog.math.Long.fromBits(1,0));
	       var ak=al.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(ak.g){
	       case 1:
		$M(Yj,function(bk){
		 var ck=bk.v[0];
		 $M(ck,function(dk){
		  switch(dk.toString()){
		  case "\n":
		   var hk=$f(2,function(ik,jk){
		    var kk=$f(1,function(lk){
		     $M(lk,function(mk){
		      var nk=mk.v[1],ok=mk.v[3],pk=mk.v[5];
		      var qk=$f(1,function(rk){
		       $$GHCziIOziHandleziInternals_zdwa3.C([mk,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),jk,rk],function(sk){
			var tk=sk[0];
			var uk=$hs_readMutVarzh(pk,tk);
			var vk=uk[0],wk=uk[1];
			$M(wk,function(xk){
			 var yk=xk.v[4],zk=xk.v[5];
			 var Ak=yk.equals(zk)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Ak.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([nk,ok,xk,vk],function(Bk){
			   var Ck=Bk[0],Dk=Bk[1];
			   var Ek=$hs_writeMutVarzh(pk,Dk,Ck);
			   $r([Ek,$$GHCziTuple_Z0T]);
			  },[pk]);break;
			 case 2:
			  $r([vk,$$GHCziTuple_Z0T]);break;
			 }
			},[pk,nk,ok,vk]);
		       },[pk,nk,ok]);
		      },[wd,xd,yd,mk,jk,pk,nk,ok],"sat");
		      $A(qk);
		     },[wd,xd,yd,jk]);
		    },[wd,xd,yd,jk],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,kk,ik],function(Fk){
		     var Gk=Fk[0];
		     zj.J(goog.math.Long.fromBits(0,0),Zj,Gk);
		    },[wd,xd,Bd,yd,sd,vd,zj,Zj]);
		   },[wd,xd,yd,sd,zj,Zj],"$w$j1");
		   $M(vd,function(Hk){
		    switch(Hk.g){
		    case 1:
		     var Kk=$hs_writeWideCharOffAddrzh(wd,Aj,"\n",Cj);
		     var Ik=$hs_touchzh(xd,Kk);
		     var Jk=Aj.add(goog.math.Long.fromBits(1,0));
		     hk.J(Ik,Jk);break;
		    case 2:
		     var Qk=$hs_writeWideCharOffAddrzh(wd,Aj,"\r",Cj);
		     var Pk=$hs_touchzh(xd,Qk);
		     var Nk=Aj.add(goog.math.Long.fromBits(1,0));
		     var Ok=$hs_writeWideCharOffAddrzh(wd,Nk,"\n",Pk);
		     var Lk=$hs_touchzh(xd,Ok);
		     var Mk=Nk.add(goog.math.Long.fromBits(1,0));
		     hk.J(Lk,Mk);break;
		    }
		   },[wd,xd,Bd,yd,sd,vd,Aj,Cj,zj,Zj,hk]);break;
		  default:
		   var gk=$hs_writeWideCharOffAddrzh(wd,Aj,dk,Cj);
		   var fk=$hs_touchzh(xd,gk);
		   var ek=Aj.add(goog.math.Long.fromBits(1,0));
		   zj.J(ek,Zj,fk);
		  }
		 },[wd,xd,Bd,yd,sd,vd,Aj,Cj,zj,Zj]);
		},[wd,xd,Bd,yd,sd,vd,Aj,Cj,zj,Zj]);break;
	       case 2:
		var Rk=$f(1,function(Sk){
		 $M(Sk,function(Tk){
		  var Uk=$f(1,function(Vk){
		   $$GHCziIOziHandleziInternals_zdwa3.C([Tk,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Aj,Vk],function(Wk){
		    var Xk=Wk[0];
		    $r([Xk,$$GHCziTuple_Z0T]);
		   },[]);
		  },[wd,xd,yd,Aj,Tk],"sat");
		  $A(Uk);
		 },[wd,xd,yd,Aj]);
		},[wd,xd,yd,Aj],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Rk,Cj],function(Yk){
		 var Zk=Yk[0];
		 zj.J(goog.math.Long.fromBits(0,0),Dj,Zk);
		},[wd,xd,Bd,yd,sd,vd,zj,Dj]);break;
	       }break;
	      }
	     },[wd,xd,Bd,yd,sd,vd,Aj,Cj,zj]);
	    },[wd,xd,Bd,yd,sd,vd],"$s$wa4");
	    zj.J(goog.math.Long.fromBits(0,0),Oh,yj);
	   },[wd,xd,Bd,yd,sd,vd,Oh]);break;
	  }
	 },[wd,xd,Bd,yd,sd,vd,Oh,Yh,Xh]);
	},[wd,xd,Bd,yd,td,sd,vd,Oh],"$w$j");
	$M(vd,function(bl){
	 switch(bl.g){
	 case 1:
	  var el=$hs_writeWideCharOffAddrzh(wd,ph,"\n",rh);
	  var cl=$hs_touchzh(xd,el);
	  var dl=ph.add(goog.math.Long.fromBits(1,0));
	  Wh.J(cl,dl);break;
	 case 2:
	  var kl=$hs_writeWideCharOffAddrzh(wd,ph,"\r",rh);
	  var jl=$hs_touchzh(xd,kl);
	  var hl=ph.add(goog.math.Long.fromBits(1,0));
	  var il=$hs_writeWideCharOffAddrzh(wd,hl,"\n",jl);
	  var fl=$hs_touchzh(xd,il);
	  var gl=hl.add(goog.math.Long.fromBits(1,0));
	  Wh.J(fl,gl);break;
	 }
	},[wd,xd,Bd,yd,td,sd,vd,ph,rh,Oh,Wh]);break;
       default:
	var Vh=$hs_writeWideCharOffAddrzh(wd,ph,Sh,rh);
	var Uh=$hs_touchzh(xd,Vh);
	var Th=ph.add(goog.math.Long.fromBits(1,0));
	Ld.J(Th,Oh,Uh);
       }
      },[wd,xd,Bd,yd,Ld,td,sd,vd,ph,rh,Oh]);
     },[wd,xd,Bd,yd,Ld,td,sd,vd,ph,rh,Oh]);break;
    case 2:
     var ll=$f(1,function(ml){
      $M(ml,function(nl){
       var ol=$f(1,function(pl){
	$$GHCziIOziHandleziInternals_zdwa3.C([nl,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ph,pl],function(ql){
	 var rl=ql[0];
	 $r([rl,$$GHCziTuple_Z0T]);
	},[]);
       },[wd,xd,yd,ph,nl],"sat");
       $A(ol);
      },[wd,xd,yd,ph]);
     },[wd,xd,yd,ph],"sat");
     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,ll,rh],function(sl){
      var tl=sl[0];
      Cd.J(goog.math.Long.fromBits(0,0),Nh,Oh,tl);
     },[wd,xd,Bd,yd,td,sd,vd,Cd,Nh,Oh]);break;
    }break;
   }
  },[wd,xd,Bd,yd,Ld,td,sd,vd,Cd,ph,rh]);
 },[wd,xd,Bd,yd,td,sd,vd,Cd],"$s$wa3");
 $S(Cd,[wd,xd,Bd,yd,Ld,td,sd,vd]);
 var vl=$F(5,function(wl,xl,yl,zl,Al){
  var np=wl.add(goog.math.Long.fromBits(1,0));
  var Bl=np.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Bl.g){
  case 1:
   $M(xl,function(Cl){
    var Dl=Cl.v[0];
    $M(Dl,function(El){
     switch(El.toString()){
     case "\n":
      var Jl=$f(2,function(Kl,Ll){
       $M(td,function(Ml){
	switch(Ml.g){
	case 1:
	 var Nl=$f(4,function(Ol,Pl,Ql,Rl){
	  $M(Pl,function(Sl){
	   switch(Sl.g){
	   case 1:
	    $M(Ql,function(Tl){
	     switch(Tl.g){
	     case 1:
	      var Ul=$f(1,function(Vl){
	       $M(Vl,function(Wl){
		var Xl=Wl.v[8],Yl=Wl.v[9];
		var Zl=$f(1,function(am){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Wl,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ol,am],function(bm){
		  var cm=bm[0];
		  var dm=$hs_readMutVarzh(Xl,cm);
		  var em=dm[0],fm=dm[1];
		  $M(fm,function(gm){
		   var hm=gm.v[3];
		   var im=yd.equals(hm)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(im.g){
		   case 1:
		    $r([em,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var jm=$hs_readMutVarzh(Yl,em);
		    var km=jm[0],lm=jm[1];
		    var mm=$d(2,[Bd,lm],"sat");
		    var nm=$hs_writeMutVarzh(Yl,mm,km);
		    $r([nm,$$GHCziTuple_Z0T]);break;
		   }
		  },[Bd,yd,em,Yl]);
		 },[Bd,yd,Xl,Yl]);
		},[wd,xd,Bd,yd,Wl,Ol,Xl,Yl],"sat");
		$A(Zl);
	       },[wd,xd,Bd,yd,Ol]);
	      },[wd,xd,Bd,yd,Ol],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Ul,Rl);break;
	     case 2:
	      Nl.J(Ol,Tl,$$GHCziTypes_ZMZN,Rl);break;
	     }
	    },[wd,xd,Bd,yd,sd,vd,Ol,Rl,Nl]);break;
	   case 2:
	    var om=Sl.v[0],pm=Sl.v[1];
	    var Qm=Ol.add(goog.math.Long.fromBits(1,0));
	    var qm=Qm.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(qm.g){
	    case 1:
	     $M(om,function(rm){
	      var sm=rm.v[0];
	      $M(sm,function(tm){
	       switch(tm.toString()){
	       case "\n":
		$M(vd,function(xm){
		 switch(xm.g){
		 case 1:
		  var Am=$hs_writeWideCharOffAddrzh(wd,Ol,"\n",Rl);
		  var zm=$hs_touchzh(xd,Am);
		  var ym=Ol.add(goog.math.Long.fromBits(1,0));
		  Nl.J(ym,pm,Ql,zm);break;
		 case 2:
		  var Gm=$hs_writeWideCharOffAddrzh(wd,Ol,"\r",Rl);
		  var Fm=$hs_touchzh(xd,Gm);
		  var Dm=Ol.add(goog.math.Long.fromBits(1,0));
		  var Em=$hs_writeWideCharOffAddrzh(wd,Dm,"\n",Fm);
		  var Cm=$hs_touchzh(xd,Em);
		  var Bm=Dm.add(goog.math.Long.fromBits(1,0));
		  Nl.J(Bm,pm,Ql,Cm);break;
		 }
		},[wd,xd,Bd,yd,sd,vd,Ql,Ol,Rl,Nl,pm]);break;
	       default:
		var wm=$hs_writeWideCharOffAddrzh(wd,Ol,tm,Rl);
		var vm=$hs_touchzh(xd,wm);
		var um=Ol.add(goog.math.Long.fromBits(1,0));
		Nl.J(um,pm,Ql,vm);
	       }
	      },[wd,xd,Bd,yd,sd,vd,Ql,Ol,Rl,Nl,pm]);
	     },[wd,xd,Bd,yd,sd,vd,Ql,Ol,Rl,Nl,pm]);break;
	    case 2:
	     var Hm=$f(1,function(Im){
	      $M(Im,function(Jm){
	       var Km=$f(1,function(Lm){
		$$GHCziIOziHandleziInternals_zdwa3.C([Jm,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ol,Lm],function(Mm){
		 var Nm=Mm[0];
		 $r([Nm,$$GHCziTuple_Z0T]);
		},[]);
	       },[wd,xd,yd,Ol,Jm],"sat");
	       $A(Km);
	      },[wd,xd,yd,Ol]);
	     },[wd,xd,yd,Ol],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Hm,Rl],function(Om){
	      var Pm=Om[0];
	      Nl.J(goog.math.Long.fromBits(0,0),Sl,Ql,Pm);
	     },[wd,xd,Bd,yd,sd,vd,Ql,Nl,Sl]);break;
	    }break;
	   }
	  },[wd,xd,Bd,yd,sd,vd,Ql,Ol,Rl,Nl]);
	 },[wd,xd,Bd,yd,sd,vd],"$wa9");
	 Nl.J(Ll,yl,zl,Kl);break;
	case 2:
	 var Rm=$f(1,function(Sm){
	  $M(Sm,function(Tm){
	   var Um=Tm.v[1],Vm=Tm.v[3],Wm=Tm.v[5];
	   var Xm=$f(1,function(Ym){
	    $$GHCziIOziHandleziInternals_zdwa3.C([Tm,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ll,Ym],function(Zm){
	     var an=Zm[0];
	     var bn=$hs_readMutVarzh(Wm,an);
	     var cn=bn[0],dn=bn[1];
	     $M(dn,function(en){
	      var fn=en.v[4],gn=en.v[5];
	      var hn=fn.equals(gn)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(hn.g){
	      case 1:
	       $$GHCziIOziBufferedIO_flushWriteBuffer.C([Um,Vm,en,cn],function(jn){
		var kn=jn[0],ln=jn[1];
		var mn=$hs_writeMutVarzh(Wm,ln,kn);
		$r([mn,$$GHCziTuple_Z0T]);
	       },[Wm]);break;
	      case 2:
	       $r([cn,$$GHCziTuple_Z0T]);break;
	      }
	     },[Wm,Um,Vm,cn]);
	    },[Wm,Um,Vm]);
	   },[wd,xd,yd,Ll,Tm,Wm,Um,Vm],"sat");
	   $A(Xm);
	  },[wd,xd,yd,Ll]);
	 },[wd,xd,yd,Ll],"sat");
	 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Rm,Kl],function(nn){
	  var on=nn[0];
	  var pn=$f(4,function(qn,rn,sn,tn){
	   $M(rn,function(un){
	    switch(un.g){
	    case 1:
	     $M(sn,function(vn){
	      switch(vn.g){
	      case 1:
	       var wn=$f(1,function(xn){
		$M(xn,function(yn){
		 var zn=yn.v[8],An=yn.v[9];
		 var Bn=$f(1,function(Cn){
		  $$GHCziIOziHandleziInternals_zdwa3.C([yn,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),qn,Cn],function(Dn){
		   var En=Dn[0];
		   var Fn=$hs_readMutVarzh(zn,En);
		   var Gn=Fn[0],Hn=Fn[1];
		   $M(Hn,function(In){
		    var Jn=In.v[3];
		    var Kn=yd.equals(Jn)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Kn.g){
		    case 1:
		     $r([Gn,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var Ln=$hs_readMutVarzh(An,Gn);
		     var Mn=Ln[0],Nn=Ln[1];
		     var On=$d(2,[Bd,Nn],"sat");
		     var Pn=$hs_writeMutVarzh(An,On,Mn);
		     $r([Pn,$$GHCziTuple_Z0T]);break;
		    }
		   },[Bd,yd,Gn,An]);
		  },[Bd,yd,zn,An]);
		 },[wd,xd,Bd,yd,yn,qn,zn,An],"sat");
		 $A(Bn);
		},[wd,xd,Bd,yd,qn]);
	       },[wd,xd,Bd,yd,qn],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,wn,tn);break;
	      case 2:
	       pn.J(qn,vn,$$GHCziTypes_ZMZN,tn);break;
	      }
	     },[wd,xd,Bd,yd,sd,vd,qn,tn,pn]);break;
	    case 2:
	     var Qn=un.v[0],Rn=un.v[1];
	     var To=qn.add(goog.math.Long.fromBits(1,0));
	     var Sn=To.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Sn.g){
	     case 1:
	      $M(Qn,function(Tn){
	       var Un=Tn.v[0];
	       $M(Un,function(Vn){
		switch(Vn.toString()){
		case "\n":
		 var Zn=$f(2,function(ao,bo){
		  var co=$f(1,function(eo){
		   $M(eo,function(fo){
		    var go=fo.v[1],ho=fo.v[3],io=fo.v[5];
		    var jo=$f(1,function(ko){
		     $$GHCziIOziHandleziInternals_zdwa3.C([fo,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),bo,ko],function(lo){
		      var mo=lo[0];
		      var no=$hs_readMutVarzh(io,mo);
		      var oo=no[0],po=no[1];
		      $M(po,function(qo){
		       var ro=qo.v[4],so=qo.v[5];
		       var to=ro.equals(so)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(to.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([go,ho,qo,oo],function(uo){
			 var vo=uo[0],wo=uo[1];
			 var xo=$hs_writeMutVarzh(io,wo,vo);
			 $r([xo,$$GHCziTuple_Z0T]);
			},[io]);break;
		       case 2:
			$r([oo,$$GHCziTuple_Z0T]);break;
		       }
		      },[io,go,ho,oo]);
		     },[io,go,ho]);
		    },[wd,xd,yd,fo,bo,io,go,ho],"sat");
		    $A(jo);
		   },[wd,xd,yd,bo]);
		  },[wd,xd,yd,bo],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,co,ao],function(yo){
		   var zo=yo[0];
		   pn.J(goog.math.Long.fromBits(0,0),Rn,sn,zo);
		  },[wd,xd,Bd,yd,sd,vd,sn,pn,Rn]);
		 },[wd,xd,yd,sd,sn,pn,Rn],"$w$j1");
		 $M(vd,function(Ao){
		  switch(Ao.g){
		  case 1:
		   var Do=$hs_writeWideCharOffAddrzh(wd,qn,"\n",tn);
		   var Bo=$hs_touchzh(xd,Do);
		   var Co=qn.add(goog.math.Long.fromBits(1,0));
		   Zn.J(Bo,Co);break;
		  case 2:
		   var Jo=$hs_writeWideCharOffAddrzh(wd,qn,"\r",tn);
		   var Io=$hs_touchzh(xd,Jo);
		   var Go=qn.add(goog.math.Long.fromBits(1,0));
		   var Ho=$hs_writeWideCharOffAddrzh(wd,Go,"\n",Io);
		   var Eo=$hs_touchzh(xd,Ho);
		   var Fo=Go.add(goog.math.Long.fromBits(1,0));
		   Zn.J(Eo,Fo);break;
		  }
		 },[wd,xd,Bd,yd,sd,vd,sn,qn,tn,pn,Rn,Zn]);break;
		default:
		 var Yn=$hs_writeWideCharOffAddrzh(wd,qn,Vn,tn);
		 var Xn=$hs_touchzh(xd,Yn);
		 var Wn=qn.add(goog.math.Long.fromBits(1,0));
		 pn.J(Wn,Rn,sn,Xn);
		}
	       },[wd,xd,Bd,yd,sd,vd,sn,qn,tn,pn,Rn]);
	      },[wd,xd,Bd,yd,sd,vd,sn,qn,tn,pn,Rn]);break;
	     case 2:
	      var Ko=$f(1,function(Lo){
	       $M(Lo,function(Mo){
		var No=$f(1,function(Oo){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Mo,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),qn,Oo],function(Po){
		  var Qo=Po[0];
		  $r([Qo,$$GHCziTuple_Z0T]);
		 },[]);
		},[wd,xd,yd,qn,Mo],"sat");
		$A(No);
	       },[wd,xd,yd,qn]);
	      },[wd,xd,yd,qn],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Ko,tn],function(Ro){
	       var So=Ro[0];
	       pn.J(goog.math.Long.fromBits(0,0),un,sn,So);
	      },[wd,xd,Bd,yd,sd,vd,sn,pn,un]);break;
	     }break;
	    }
	   },[wd,xd,Bd,yd,sd,vd,sn,qn,tn,pn]);
	  },[wd,xd,Bd,yd,sd,vd],"$wa9");
	  pn.J(goog.math.Long.fromBits(0,0),yl,zl,on);
	 },[wd,xd,Bd,yd,sd,vd,yl,zl]);break;
	}
       },[wd,xd,Bd,yd,sd,vd,yl,zl,Ll,Kl]);
      },[wd,xd,Bd,yd,td,sd,vd,yl,zl],"$w$j");
      $M(vd,function(Uo){
       switch(Uo.g){
       case 1:
	var Xo=$hs_writeWideCharOffAddrzh(wd,wl,"\n",Al);
	var Vo=$hs_touchzh(xd,Xo);
	var Wo=wl.add(goog.math.Long.fromBits(1,0));
	Jl.J(Vo,Wo);break;
       case 2:
	var dp=$hs_writeWideCharOffAddrzh(wd,wl,"\r",Al);
	var cp=$hs_touchzh(xd,dp);
	var ap=wl.add(goog.math.Long.fromBits(1,0));
	var bp=$hs_writeWideCharOffAddrzh(wd,ap,"\n",cp);
	var Yo=$hs_touchzh(xd,bp);
	var Zo=ap.add(goog.math.Long.fromBits(1,0));
	Jl.J(Yo,Zo);break;
       }
      },[wd,xd,Bd,yd,td,sd,vd,wl,Al,yl,zl,Jl]);break;
     default:
      var Il=$hs_writeWideCharOffAddrzh(wd,wl,El,Al);
      var Hl=$hs_touchzh(xd,Il);
      var Gl=wl.add(goog.math.Long.fromBits(1,0));
      Fl.J(Gl,yl,zl,Hl);
     }
    },[wd,xd,Bd,yd,td,sd,vd,Cd,wl,Al,Fl,yl,zl]);
   },[wd,xd,Bd,yd,td,sd,vd,Cd,wl,Al,Fl,yl,zl]);break;
  case 2:
   var ep=$f(1,function(fp){
    $M(fp,function(gp){
     var hp=$f(1,function(ip){
      $$GHCziIOziHandleziInternals_zdwa3.C([gp,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),wl,ip],function(jp){
       var kp=jp[0];
       $r([kp,$$GHCziTuple_Z0T]);
      },[]);
     },[wd,xd,yd,wl,gp],"sat");
     $A(hp);
    },[wd,xd,yd,wl]);
   },[wd,xd,yd,wl],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,ep,Al],function(lp){
    var mp=lp[0];
    vl.J(goog.math.Long.fromBits(0,0),xl,yl,zl,mp);
   },[wd,xd,Bd,yd,td,sd,vd,Cd,xl,yl,zl,vl]);break;
  }
 },"$s$wa4"),Fl=$f(4,function(op,pp,qp,rp){
  $M(pp,function(sp){
   switch(sp.g){
   case 1:
    $M(qp,function(tp){
     switch(tp.g){
     case 1:
      var up=$f(1,function(vp){
       $M(vp,function(wp){
	var xp=wp.v[8],yp=wp.v[9];
	var zp=$f(1,function(Ap){
	 $$GHCziIOziHandleziInternals_zdwa3.C([wp,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),op,Ap],function(Bp){
	  var Cp=Bp[0];
	  var Dp=$hs_readMutVarzh(xp,Cp);
	  var Ep=Dp[0],Fp=Dp[1];
	  $M(Fp,function(Gp){
	   var Hp=Gp.v[3];
	   var Ip=yd.equals(Hp)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Ip.g){
	   case 1:
	    $r([Ep,$$GHCziTuple_Z0T]);break;
	   case 2:
	    var Jp=$hs_readMutVarzh(yp,Ep);
	    var Kp=Jp[0],Lp=Jp[1];
	    var Mp=$d(2,[Bd,Lp],"sat");
	    var Np=$hs_writeMutVarzh(yp,Mp,Kp);
	    $r([Np,$$GHCziTuple_Z0T]);break;
	   }
	  },[Bd,yd,Ep,yp]);
	 },[Bd,yd,xp,yp]);
	},[wd,xd,Bd,yd,wp,op,xp,yp],"sat");
	$A(zp);
       },[wd,xd,Bd,yd,op]);
      },[wd,xd,Bd,yd,op],"sat");
      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,up,rp);break;
     case 2:
      var Op=tp.v[0],Pp=tp.v[1];
      Cd.J(op,Op,Pp,rp);break;
     }
    },[wd,xd,Bd,yd,td,sd,vd,Cd,op,rp]);break;
   case 2:
    var Qp=sp.v[0],Rp=sp.v[1];
    var Jz=op.add(goog.math.Long.fromBits(1,0));
    var Sp=Jz.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Sp.g){
    case 1:
     $M(Qp,function(Tp){
      var Up=Tp.v[0];
      $M(Up,function(Vp){
       switch(Vp.toString()){
       case "\n":
	var Zp=$f(2,function(aq,bq){
	 $M(td,function(cq){
	  switch(cq.g){
	  case 1:
	   var dq=$F(4,function(eq,fq,gq,hq){
	    var Jq=eq.add(goog.math.Long.fromBits(1,0));
	    var iq=Jq.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(iq.g){
	    case 1:
	     $M(fq,function(jq){
	      var kq=jq.v[0];
	      $M(kq,function(lq){
	       switch(lq.toString()){
	       case "\n":
		$M(vd,function(qq){
		 switch(qq.g){
		 case 1:
		  var tq=$hs_writeWideCharOffAddrzh(wd,eq,"\n",hq);
		  var sq=$hs_touchzh(xd,tq);
		  var rq=eq.add(goog.math.Long.fromBits(1,0));
		  mq.J(rq,gq,sq);break;
		 case 2:
		  var zq=$hs_writeWideCharOffAddrzh(wd,eq,"\r",hq);
		  var yq=$hs_touchzh(xd,zq);
		  var wq=eq.add(goog.math.Long.fromBits(1,0));
		  var xq=$hs_writeWideCharOffAddrzh(wd,wq,"\n",yq);
		  var vq=$hs_touchzh(xd,xq);
		  var uq=wq.add(goog.math.Long.fromBits(1,0));
		  mq.J(uq,gq,vq);break;
		 }
		},[wd,xd,Bd,yd,sd,vd,eq,hq,mq,gq]);break;
	       default:
		var pq=$hs_writeWideCharOffAddrzh(wd,eq,lq,hq);
		var oq=$hs_touchzh(xd,pq);
		var nq=eq.add(goog.math.Long.fromBits(1,0));
		mq.J(nq,gq,oq);
	       }
	      },[wd,xd,Bd,yd,sd,vd,eq,hq,mq,gq]);
	     },[wd,xd,Bd,yd,sd,vd,eq,hq,mq,gq]);break;
	    case 2:
	     var Aq=$f(1,function(Bq){
	      $M(Bq,function(Cq){
	       var Dq=$f(1,function(Eq){
		$$GHCziIOziHandleziInternals_zdwa3.C([Cq,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),eq,Eq],function(Fq){
		 var Gq=Fq[0];
		 $r([Gq,$$GHCziTuple_Z0T]);
		},[]);
	       },[wd,xd,yd,eq,Cq],"sat");
	       $A(Dq);
	      },[wd,xd,yd,eq]);
	     },[wd,xd,yd,eq],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Aq,hq],function(Hq){
	      var Iq=Hq[0];
	      dq.J(goog.math.Long.fromBits(0,0),fq,gq,Iq);
	     },[wd,xd,Bd,yd,sd,vd,fq,gq,dq]);break;
	    }
	   },"$s$wa5"),mq=$f(3,function(Kq,Lq,Mq){
	    $M(Lq,function(Nq){
	     switch(Nq.g){
	     case 1:
	      var Oq=$f(1,function(Pq){
	       $M(Pq,function(Qq){
		var Rq=Qq.v[8],Sq=Qq.v[9];
		var Tq=$f(1,function(Uq){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Qq,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Kq,Uq],function(Vq){
		  var Wq=Vq[0];
		  var Xq=$hs_readMutVarzh(Rq,Wq);
		  var Yq=Xq[0],Zq=Xq[1];
		  $M(Zq,function(ar){
		   var br=ar.v[3];
		   var cr=yd.equals(br)?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(cr.g){
		   case 1:
		    $r([Yq,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var dr=$hs_readMutVarzh(Sq,Yq);
		    var er=dr[0],fr=dr[1];
		    var gr=$d(2,[Bd,fr],"sat");
		    var hr=$hs_writeMutVarzh(Sq,gr,er);
		    $r([hr,$$GHCziTuple_Z0T]);break;
		   }
		  },[Bd,yd,Yq,Sq]);
		 },[Bd,yd,Rq,Sq]);
		},[wd,xd,Bd,yd,Qq,Kq,Rq,Sq],"sat");
		$A(Tq);
	       },[wd,xd,Bd,yd,Kq]);
	      },[wd,xd,Bd,yd,Kq],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Oq,Mq);break;
	     case 2:
	      var ir=Nq.v[0],jr=Nq.v[1];
	      var Kr=Kq.add(goog.math.Long.fromBits(1,0));
	      var kr=Kr.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(kr.g){
	      case 1:
	       $M(ir,function(lr){
		var mr=lr.v[0];
		$M(mr,function(nr){
		 switch(nr.toString()){
		 case "\n":
		  $M(vd,function(rr){
		   switch(rr.g){
		   case 1:
		    var ur=$hs_writeWideCharOffAddrzh(wd,Kq,"\n",Mq);
		    var tr=$hs_touchzh(xd,ur);
		    var sr=Kq.add(goog.math.Long.fromBits(1,0));
		    mq.J(sr,jr,tr);break;
		   case 2:
		    var Ar=$hs_writeWideCharOffAddrzh(wd,Kq,"\r",Mq);
		    var zr=$hs_touchzh(xd,Ar);
		    var xr=Kq.add(goog.math.Long.fromBits(1,0));
		    var yr=$hs_writeWideCharOffAddrzh(wd,xr,"\n",zr);
		    var wr=$hs_touchzh(xd,yr);
		    var vr=xr.add(goog.math.Long.fromBits(1,0));
		    mq.J(vr,jr,wr);break;
		   }
		  },[wd,xd,Bd,yd,sd,vd,mq,Kq,Mq,jr]);break;
		 default:
		  var qr=$hs_writeWideCharOffAddrzh(wd,Kq,nr,Mq);
		  var pr=$hs_touchzh(xd,qr);
		  var or=Kq.add(goog.math.Long.fromBits(1,0));
		  mq.J(or,jr,pr);
		 }
		},[wd,xd,Bd,yd,sd,vd,mq,Kq,Mq,jr]);
	       },[wd,xd,Bd,yd,sd,vd,mq,Kq,Mq,jr]);break;
	      case 2:
	       var Br=$f(1,function(Cr){
		$M(Cr,function(Dr){
		 var Er=$f(1,function(Fr){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Dr,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Kq,Fr],function(Gr){
		   var Hr=Gr[0];
		   $r([Hr,$$GHCziTuple_Z0T]);
		  },[]);
		 },[wd,xd,yd,Kq,Dr],"sat");
		 $A(Er);
		},[wd,xd,yd,Kq]);
	       },[wd,xd,yd,Kq],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Br,Mq],function(Ir){
		var Jr=Ir[0];
		dq.J(goog.math.Long.fromBits(0,0),ir,jr,Jr);
	       },[wd,xd,Bd,yd,sd,vd,dq,ir,jr]);break;
	      }break;
	     }
	    },[wd,xd,Bd,yd,sd,vd,mq,dq,Kq,Mq]);
	   },[wd,xd,Bd,yd,sd,vd,dq],"$s$wa6");
	   $S(dq,[wd,xd,yd,sd,vd,mq]);
	   var Lr=$F(5,function(Mr,Nr,Or,Pr,Qr){
	    var ss=Mr.add(goog.math.Long.fromBits(1,0));
	    var Rr=ss.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Rr.g){
	    case 1:
	     $M(Nr,function(Sr){
	      var Tr=Sr.v[0];
	      $M(Tr,function(Ur){
	       switch(Ur.toString()){
	       case "\n":
		$M(vd,function(Zr){
		 switch(Zr.g){
		 case 1:
		  var cs=$hs_writeWideCharOffAddrzh(wd,Mr,"\n",Qr);
		  var bs=$hs_touchzh(xd,cs);
		  var as=Mr.add(goog.math.Long.fromBits(1,0));
		  Vr.J(as,Or,Pr,bs);break;
		 case 2:
		  var is=$hs_writeWideCharOffAddrzh(wd,Mr,"\r",Qr);
		  var hs=$hs_touchzh(xd,is);
		  var fs=Mr.add(goog.math.Long.fromBits(1,0));
		  var gs=$hs_writeWideCharOffAddrzh(wd,fs,"\n",hs);
		  var es=$hs_touchzh(xd,gs);
		  var ds=fs.add(goog.math.Long.fromBits(1,0));
		  Vr.J(ds,Or,Pr,es);break;
		 }
		},[wd,xd,Bd,yd,sd,vd,dq,Mr,Qr,Vr,Or,Pr]);break;
	       default:
		var Yr=$hs_writeWideCharOffAddrzh(wd,Mr,Ur,Qr);
		var Xr=$hs_touchzh(xd,Yr);
		var Wr=Mr.add(goog.math.Long.fromBits(1,0));
		Vr.J(Wr,Or,Pr,Xr);
	       }
	      },[wd,xd,Bd,yd,sd,vd,dq,Mr,Qr,Vr,Or,Pr]);
	     },[wd,xd,Bd,yd,sd,vd,dq,Mr,Qr,Vr,Or,Pr]);break;
	    case 2:
	     var js=$f(1,function(ks){
	      $M(ks,function(ls){
	       var ms=$f(1,function(ns){
		$$GHCziIOziHandleziInternals_zdwa3.C([ls,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Mr,ns],function(os){
		 var ps=os[0];
		 $r([ps,$$GHCziTuple_Z0T]);
		},[]);
	       },[wd,xd,yd,Mr,ls],"sat");
	       $A(ms);
	      },[wd,xd,yd,Mr]);
	     },[wd,xd,yd,Mr],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,js,Qr],function(qs){
	      var rs=qs[0];
	      Lr.J(goog.math.Long.fromBits(0,0),Nr,Or,Pr,rs);
	     },[wd,xd,Bd,yd,sd,vd,dq,Nr,Or,Pr,Lr]);break;
	    }
	   },"$s$wa7"),Vr=$f(4,function(ts,us,vs,ws){
	    $M(us,function(xs){
	     switch(xs.g){
	     case 1:
	      $M(vs,function(ys){
	       switch(ys.g){
	       case 1:
		var zs=$f(1,function(As){
		 $M(As,function(Bs){
		  var Cs=Bs.v[8],Ds=Bs.v[9];
		  var Es=$f(1,function(Fs){
		   $$GHCziIOziHandleziInternals_zdwa3.C([Bs,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ts,Fs],function(Gs){
		    var Hs=Gs[0];
		    var Is=$hs_readMutVarzh(Cs,Hs);
		    var Js=Is[0],Ks=Is[1];
		    $M(Ks,function(Ls){
		     var Ms=Ls.v[3];
		     var Ns=yd.equals(Ms)?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(Ns.g){
		     case 1:
		      $r([Js,$$GHCziTuple_Z0T]);break;
		     case 2:
		      var Os=$hs_readMutVarzh(Ds,Js);
		      var Ps=Os[0],Qs=Os[1];
		      var Rs=$d(2,[Bd,Qs],"sat");
		      var Ss=$hs_writeMutVarzh(Ds,Rs,Ps);
		      $r([Ss,$$GHCziTuple_Z0T]);break;
		     }
		    },[Bd,yd,Js,Ds]);
		   },[Bd,yd,Cs,Ds]);
		  },[wd,xd,Bd,yd,Bs,ts,Cs,Ds],"sat");
		  $A(Es);
		 },[wd,xd,Bd,yd,ts]);
		},[wd,xd,Bd,yd,ts],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,zs,ws);break;
	       case 2:
		var Ts=ys.v[0],Us=ys.v[1];
		dq.J(ts,Ts,Us,ws);break;
	       }
	      },[wd,xd,Bd,yd,sd,vd,dq,ts,ws]);break;
	     case 2:
	      var Vs=xs.v[0],Ws=xs.v[1];
	      var xt=ts.add(goog.math.Long.fromBits(1,0));
	      var Xs=xt.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Xs.g){
	      case 1:
	       $M(Vs,function(Ys){
		var Zs=Ys.v[0];
		$M(Zs,function(at){
		 switch(at.toString()){
		 case "\n":
		  $M(vd,function(et){
		   switch(et.g){
		   case 1:
		    var ht=$hs_writeWideCharOffAddrzh(wd,ts,"\n",ws);
		    var gt=$hs_touchzh(xd,ht);
		    var ft=ts.add(goog.math.Long.fromBits(1,0));
		    Vr.J(ft,Ws,vs,gt);break;
		   case 2:
		    var nt=$hs_writeWideCharOffAddrzh(wd,ts,"\r",ws);
		    var mt=$hs_touchzh(xd,nt);
		    var kt=ts.add(goog.math.Long.fromBits(1,0));
		    var lt=$hs_writeWideCharOffAddrzh(wd,kt,"\n",mt);
		    var jt=$hs_touchzh(xd,lt);
		    var it=kt.add(goog.math.Long.fromBits(1,0));
		    Vr.J(it,Ws,vs,jt);break;
		   }
		  },[wd,xd,Bd,yd,sd,vd,dq,Vr,vs,ts,ws,Ws]);break;
		 default:
		  var dt=$hs_writeWideCharOffAddrzh(wd,ts,at,ws);
		  var ct=$hs_touchzh(xd,dt);
		  var bt=ts.add(goog.math.Long.fromBits(1,0));
		  Vr.J(bt,Ws,vs,ct);
		 }
		},[wd,xd,Bd,yd,sd,vd,dq,Vr,vs,ts,ws,Ws]);
	       },[wd,xd,Bd,yd,sd,vd,dq,Vr,vs,ts,ws,Ws]);break;
	      case 2:
	       var ot=$f(1,function(pt){
		$M(pt,function(qt){
		 var rt=$f(1,function(st){
		  $$GHCziIOziHandleziInternals_zdwa3.C([qt,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ts,st],function(tt){
		   var ut=tt[0];
		   $r([ut,$$GHCziTuple_Z0T]);
		  },[]);
		 },[wd,xd,yd,ts,qt],"sat");
		 $A(rt);
		},[wd,xd,yd,ts]);
	       },[wd,xd,yd,ts],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,ot,ws],function(vt){
		var wt=vt[0];
		Lr.J(goog.math.Long.fromBits(0,0),Vs,Ws,vs,wt);
	       },[wd,xd,Bd,yd,sd,vd,dq,Lr,vs,Vs,Ws]);break;
	      }break;
	     }
	    },[wd,xd,Bd,yd,sd,vd,dq,Vr,Lr,vs,ts,ws]);
	   },[wd,xd,Bd,yd,sd,vd,dq,Lr],"$wa9");
	   $S(Lr,[wd,xd,yd,sd,vd,Vr]);
	   Vr.J(bq,Rp,qp,aq);break;
	  case 2:
	   var yt=$f(1,function(zt){
	    $M(zt,function(At){
	     var Bt=At.v[1],Ct=At.v[3],Dt=At.v[5];
	     var Et=$f(1,function(Ft){
	      $$GHCziIOziHandleziInternals_zdwa3.C([At,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),bq,Ft],function(Gt){
	       var Ht=Gt[0];
	       var It=$hs_readMutVarzh(Dt,Ht);
	       var Jt=It[0],Kt=It[1];
	       $M(Kt,function(Lt){
		var Mt=Lt.v[4],Nt=Lt.v[5];
		var Ot=Mt.equals(Nt)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Ot.g){
		case 1:
		 $$GHCziIOziBufferedIO_flushWriteBuffer.C([Bt,Ct,Lt,Jt],function(Pt){
		  var Qt=Pt[0],Rt=Pt[1];
		  var St=$hs_writeMutVarzh(Dt,Rt,Qt);
		  $r([St,$$GHCziTuple_Z0T]);
		 },[Dt]);break;
		case 2:
		 $r([Jt,$$GHCziTuple_Z0T]);break;
		}
	       },[Dt,Bt,Ct,Jt]);
	      },[Dt,Bt,Ct]);
	     },[wd,xd,yd,bq,At,Dt,Bt,Ct],"sat");
	     $A(Et);
	    },[wd,xd,yd,bq]);
	   },[wd,xd,yd,bq],"sat");
	   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,yt,aq],function(Tt){
	    var Ut=Tt[0];
	    var Vt=$F(4,function(Wt,Xt,Yt,Zt){
	     var bv=Wt.add(goog.math.Long.fromBits(1,0));
	     var au=bv.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(au.g){
	     case 1:
	      $M(Xt,function(bu){
	       var cu=bu.v[0];
	       $M(cu,function(du){
		switch(du.toString()){
		case "\n":
		 var iu=$f(2,function(ju,ku){
		  var lu=$f(1,function(mu){
		   $M(mu,function(nu){
		    var ou=nu.v[1],pu=nu.v[3],qu=nu.v[5];
		    var ru=$f(1,function(su){
		     $$GHCziIOziHandleziInternals_zdwa3.C([nu,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),ku,su],function(tu){
		      var uu=tu[0];
		      var vu=$hs_readMutVarzh(qu,uu);
		      var wu=vu[0],xu=vu[1];
		      $M(xu,function(yu){
		       var zu=yu.v[4],Au=yu.v[5];
		       var Bu=zu.equals(Au)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(Bu.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([ou,pu,yu,wu],function(Cu){
			 var Du=Cu[0],Eu=Cu[1];
			 var Fu=$hs_writeMutVarzh(qu,Eu,Du);
			 $r([Fu,$$GHCziTuple_Z0T]);
			},[qu]);break;
		       case 2:
			$r([wu,$$GHCziTuple_Z0T]);break;
		       }
		      },[qu,ou,pu,wu]);
		     },[qu,ou,pu]);
		    },[wd,xd,yd,nu,ku,qu,ou,pu],"sat");
		    $A(ru);
		   },[wd,xd,yd,ku]);
		  },[wd,xd,yd,ku],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,lu,ju],function(Gu){
		   var Hu=Gu[0];
		   eu.J(goog.math.Long.fromBits(0,0),Yt,Hu);
		  },[wd,xd,Bd,yd,sd,vd,eu,Yt]);
		 },[wd,xd,yd,sd,eu,Yt],"$w$j1");
		 $M(vd,function(Iu){
		  switch(Iu.g){
		  case 1:
		   var Lu=$hs_writeWideCharOffAddrzh(wd,Wt,"\n",Zt);
		   var Ju=$hs_touchzh(xd,Lu);
		   var Ku=Wt.add(goog.math.Long.fromBits(1,0));
		   iu.J(Ju,Ku);break;
		  case 2:
		   var Ru=$hs_writeWideCharOffAddrzh(wd,Wt,"\r",Zt);
		   var Qu=$hs_touchzh(xd,Ru);
		   var Ou=Wt.add(goog.math.Long.fromBits(1,0));
		   var Pu=$hs_writeWideCharOffAddrzh(wd,Ou,"\n",Qu);
		   var Mu=$hs_touchzh(xd,Pu);
		   var Nu=Ou.add(goog.math.Long.fromBits(1,0));
		   iu.J(Mu,Nu);break;
		  }
		 },[wd,xd,Bd,yd,sd,vd,Wt,Zt,eu,Yt,iu]);break;
		default:
		 var hu=$hs_writeWideCharOffAddrzh(wd,Wt,du,Zt);
		 var gu=$hs_touchzh(xd,hu);
		 var fu=Wt.add(goog.math.Long.fromBits(1,0));
		 eu.J(fu,Yt,gu);
		}
	       },[wd,xd,Bd,yd,sd,vd,Wt,Zt,eu,Yt]);
	      },[wd,xd,Bd,yd,sd,vd,Wt,Zt,eu,Yt]);break;
	     case 2:
	      var Su=$f(1,function(Tu){
	       $M(Tu,function(Uu){
		var Vu=$f(1,function(Wu){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Uu,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Wt,Wu],function(Xu){
		  var Yu=Xu[0];
		  $r([Yu,$$GHCziTuple_Z0T]);
		 },[]);
		},[wd,xd,yd,Wt,Uu],"sat");
		$A(Vu);
	       },[wd,xd,yd,Wt]);
	      },[wd,xd,yd,Wt],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Su,Zt],function(Zu){
	       var av=Zu[0];
	       Vt.J(goog.math.Long.fromBits(0,0),Xt,Yt,av);
	      },[wd,xd,Bd,yd,sd,vd,Xt,Yt,Vt]);break;
	     }
	    },"$s$wa5"),eu=$f(3,function(cv,dv,ev){
	     $M(dv,function(fv){
	      switch(fv.g){
	      case 1:
	       var gv=$f(1,function(hv){
		$M(hv,function(iv){
		 var jv=iv.v[8],kv=iv.v[9];
		 var lv=$f(1,function(mv){
		  $$GHCziIOziHandleziInternals_zdwa3.C([iv,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),cv,mv],function(nv){
		   var ov=nv[0];
		   var pv=$hs_readMutVarzh(jv,ov);
		   var qv=pv[0],rv=pv[1];
		   $M(rv,function(sv){
		    var tv=sv.v[3];
		    var uv=yd.equals(tv)?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(uv.g){
		    case 1:
		     $r([qv,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var vv=$hs_readMutVarzh(kv,qv);
		     var wv=vv[0],xv=vv[1];
		     var yv=$d(2,[Bd,xv],"sat");
		     var zv=$hs_writeMutVarzh(kv,yv,wv);
		     $r([zv,$$GHCziTuple_Z0T]);break;
		    }
		   },[Bd,yd,qv,kv]);
		  },[Bd,yd,jv,kv]);
		 },[wd,xd,Bd,yd,iv,cv,jv,kv],"sat");
		 $A(lv);
		},[wd,xd,Bd,yd,cv]);
	       },[wd,xd,Bd,yd,cv],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,gv,ev);break;
	      case 2:
	       var Av=fv.v[0],Bv=fv.v[1];
	       var Cw=cv.add(goog.math.Long.fromBits(1,0));
	       var Cv=Cw.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Cv.g){
	       case 1:
		$M(Av,function(Dv){
		 var Ev=Dv.v[0];
		 $M(Ev,function(Fv){
		  switch(Fv.toString()){
		  case "\n":
		   var Jv=$f(2,function(Kv,Lv){
		    var Mv=$f(1,function(Nv){
		     $M(Nv,function(Ov){
		      var Pv=Ov.v[1],Qv=Ov.v[3],Rv=Ov.v[5];
		      var Sv=$f(1,function(Tv){
		       $$GHCziIOziHandleziInternals_zdwa3.C([Ov,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Lv,Tv],function(Uv){
			var Vv=Uv[0];
			var Wv=$hs_readMutVarzh(Rv,Vv);
			var Xv=Wv[0],Yv=Wv[1];
			$M(Yv,function(Zv){
			 var aw=Zv.v[4],bw=Zv.v[5];
			 var cw=aw.equals(bw)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(cw.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([Pv,Qv,Zv,Xv],function(dw){
			   var ew=dw[0],fw=dw[1];
			   var gw=$hs_writeMutVarzh(Rv,fw,ew);
			   $r([gw,$$GHCziTuple_Z0T]);
			  },[Rv]);break;
			 case 2:
			  $r([Xv,$$GHCziTuple_Z0T]);break;
			 }
			},[Rv,Pv,Qv,Xv]);
		       },[Rv,Pv,Qv]);
		      },[wd,xd,yd,Ov,Lv,Rv,Pv,Qv],"sat");
		      $A(Sv);
		     },[wd,xd,yd,Lv]);
		    },[wd,xd,yd,Lv],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Mv,Kv],function(hw){
		     var iw=hw[0];
		     eu.J(goog.math.Long.fromBits(0,0),Bv,iw);
		    },[wd,xd,Bd,yd,sd,vd,eu,Bv]);
		   },[wd,xd,yd,sd,eu,Bv],"$w$j1");
		   $M(vd,function(jw){
		    switch(jw.g){
		    case 1:
		     var mw=$hs_writeWideCharOffAddrzh(wd,cv,"\n",ev);
		     var kw=$hs_touchzh(xd,mw);
		     var lw=cv.add(goog.math.Long.fromBits(1,0));
		     Jv.J(kw,lw);break;
		    case 2:
		     var sw=$hs_writeWideCharOffAddrzh(wd,cv,"\r",ev);
		     var rw=$hs_touchzh(xd,sw);
		     var pw=cv.add(goog.math.Long.fromBits(1,0));
		     var qw=$hs_writeWideCharOffAddrzh(wd,pw,"\n",rw);
		     var nw=$hs_touchzh(xd,qw);
		     var ow=pw.add(goog.math.Long.fromBits(1,0));
		     Jv.J(nw,ow);break;
		    }
		   },[wd,xd,Bd,yd,sd,vd,eu,cv,ev,Bv,Jv]);break;
		  default:
		   var Iv=$hs_writeWideCharOffAddrzh(wd,cv,Fv,ev);
		   var Hv=$hs_touchzh(xd,Iv);
		   var Gv=cv.add(goog.math.Long.fromBits(1,0));
		   eu.J(Gv,Bv,Hv);
		  }
		 },[wd,xd,Bd,yd,sd,vd,eu,cv,ev,Bv]);
		},[wd,xd,Bd,yd,sd,vd,eu,cv,ev,Bv]);break;
	       case 2:
		var tw=$f(1,function(uw){
		 $M(uw,function(vw){
		  var ww=$f(1,function(xw){
		   $$GHCziIOziHandleziInternals_zdwa3.C([vw,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),cv,xw],function(yw){
		    var zw=yw[0];
		    $r([zw,$$GHCziTuple_Z0T]);
		   },[]);
		  },[wd,xd,yd,cv,vw],"sat");
		  $A(ww);
		 },[wd,xd,yd,cv]);
		},[wd,xd,yd,cv],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,tw,ev],function(Aw){
		 var Bw=Aw[0];
		 Vt.J(goog.math.Long.fromBits(0,0),Av,Bv,Bw);
		},[wd,xd,Bd,yd,sd,vd,Vt,Av,Bv]);break;
	       }break;
	      }
	     },[wd,xd,Bd,yd,sd,vd,eu,Vt,cv,ev]);
	    },[wd,xd,Bd,yd,sd,vd,Vt],"$s$wa6");
	    $S(Vt,[wd,xd,yd,sd,vd,eu]);
	    var Dw=$F(5,function(Ew,Fw,Gw,Hw,Iw){
	     var Kx=Ew.add(goog.math.Long.fromBits(1,0));
	     var Jw=Kx.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Jw.g){
	     case 1:
	      $M(Fw,function(Kw){
	       var Lw=Kw.v[0];
	       $M(Lw,function(Mw){
		switch(Mw.toString()){
		case "\n":
		 var Rw=$f(2,function(Sw,Tw){
		  var Uw=$f(1,function(Vw){
		   $M(Vw,function(Ww){
		    var Xw=Ww.v[1],Yw=Ww.v[3],Zw=Ww.v[5];
		    var ax=$f(1,function(bx){
		     $$GHCziIOziHandleziInternals_zdwa3.C([Ww,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Tw,bx],function(cx){
		      var dx=cx[0];
		      var ex=$hs_readMutVarzh(Zw,dx);
		      var fx=ex[0],gx=ex[1];
		      $M(gx,function(hx){
		       var ix=hx.v[4],jx=hx.v[5];
		       var kx=ix.equals(jx)?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(kx.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([Xw,Yw,hx,fx],function(lx){
			 var mx=lx[0],nx=lx[1];
			 var ox=$hs_writeMutVarzh(Zw,nx,mx);
			 $r([ox,$$GHCziTuple_Z0T]);
			},[Zw]);break;
		       case 2:
			$r([fx,$$GHCziTuple_Z0T]);break;
		       }
		      },[Zw,Xw,Yw,fx]);
		     },[Zw,Xw,Yw]);
		    },[wd,xd,yd,Ww,Tw,Zw,Xw,Yw],"sat");
		    $A(ax);
		   },[wd,xd,yd,Tw]);
		  },[wd,xd,yd,Tw],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Uw,Sw],function(px){
		   var qx=px[0];
		   Nw.J(goog.math.Long.fromBits(0,0),Gw,Hw,qx);
		  },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Gw,Hw]);
		 },[wd,xd,yd,sd,Nw,Gw,Hw],"$w$j1");
		 $M(vd,function(rx){
		  switch(rx.g){
		  case 1:
		   var ux=$hs_writeWideCharOffAddrzh(wd,Ew,"\n",Iw);
		   var sx=$hs_touchzh(xd,ux);
		   var tx=Ew.add(goog.math.Long.fromBits(1,0));
		   Rw.J(sx,tx);break;
		  case 2:
		   var Ax=$hs_writeWideCharOffAddrzh(wd,Ew,"\r",Iw);
		   var zx=$hs_touchzh(xd,Ax);
		   var xx=Ew.add(goog.math.Long.fromBits(1,0));
		   var yx=$hs_writeWideCharOffAddrzh(wd,xx,"\n",zx);
		   var vx=$hs_touchzh(xd,yx);
		   var wx=xx.add(goog.math.Long.fromBits(1,0));
		   Rw.J(vx,wx);break;
		  }
		 },[wd,xd,Bd,yd,sd,vd,Vt,Ew,Iw,Nw,Gw,Hw,Rw]);break;
		default:
		 var Qw=$hs_writeWideCharOffAddrzh(wd,Ew,Mw,Iw);
		 var Pw=$hs_touchzh(xd,Qw);
		 var Ow=Ew.add(goog.math.Long.fromBits(1,0));
		 Nw.J(Ow,Gw,Hw,Pw);
		}
	       },[wd,xd,Bd,yd,sd,vd,Vt,Ew,Iw,Nw,Gw,Hw]);
	      },[wd,xd,Bd,yd,sd,vd,Vt,Ew,Iw,Nw,Gw,Hw]);break;
	     case 2:
	      var Bx=$f(1,function(Cx){
	       $M(Cx,function(Dx){
		var Ex=$f(1,function(Fx){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Dx,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Ew,Fx],function(Gx){
		  var Hx=Gx[0];
		  $r([Hx,$$GHCziTuple_Z0T]);
		 },[]);
		},[wd,xd,yd,Ew,Dx],"sat");
		$A(Ex);
	       },[wd,xd,yd,Ew]);
	      },[wd,xd,yd,Ew],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Bx,Iw],function(Ix){
	       var Jx=Ix[0];
	       Dw.J(goog.math.Long.fromBits(0,0),Fw,Gw,Hw,Jx);
	      },[wd,xd,Bd,yd,sd,vd,Vt,Fw,Gw,Hw,Dw]);break;
	     }
	    },"$s$wa7"),Nw=$f(4,function(Lx,Mx,Nx,Ox){
	     $M(Mx,function(Px){
	      switch(Px.g){
	      case 1:
	       $M(Nx,function(Qx){
		switch(Qx.g){
		case 1:
		 var Rx=$f(1,function(Sx){
		  $M(Sx,function(Tx){
		   var Ux=Tx.v[8],Vx=Tx.v[9];
		   var Wx=$f(1,function(Xx){
		    $$GHCziIOziHandleziInternals_zdwa3.C([Tx,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Lx,Xx],function(Yx){
		     var Zx=Yx[0];
		     var ay=$hs_readMutVarzh(Ux,Zx);
		     var by=ay[0],cy=ay[1];
		     $M(cy,function(dy){
		      var ey=dy.v[3];
		      var fy=yd.equals(ey)?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(fy.g){
		      case 1:
		       $r([by,$$GHCziTuple_Z0T]);break;
		      case 2:
		       var gy=$hs_readMutVarzh(Vx,by);
		       var hy=gy[0],iy=gy[1];
		       var jy=$d(2,[Bd,iy],"sat");
		       var ky=$hs_writeMutVarzh(Vx,jy,hy);
		       $r([ky,$$GHCziTuple_Z0T]);break;
		      }
		     },[Bd,yd,by,Vx]);
		    },[Bd,yd,Ux,Vx]);
		   },[wd,xd,Bd,yd,Tx,Lx,Ux,Vx],"sat");
		   $A(Wx);
		  },[wd,xd,Bd,yd,Lx]);
		 },[wd,xd,Bd,yd,Lx],"sat");
		 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,sd,Rx,Ox);break;
		case 2:
		 var ly=Qx.v[0],my=Qx.v[1];
		 Vt.J(Lx,ly,my,Ox);break;
		}
	       },[wd,xd,Bd,yd,sd,vd,Vt,Lx,Ox]);break;
	      case 2:
	       var ny=Px.v[0],oy=Px.v[1];
	       var pz=Lx.add(goog.math.Long.fromBits(1,0));
	       var py=pz.greaterThanOrEqual(yd)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(py.g){
	       case 1:
		$M(ny,function(qy){
		 var ry=qy.v[0];
		 $M(ry,function(sy){
		  switch(sy.toString()){
		  case "\n":
		   var wy=$f(2,function(xy,yy){
		    var zy=$f(1,function(Ay){
		     $M(Ay,function(By){
		      var Cy=By.v[1],Dy=By.v[3],Ey=By.v[5];
		      var Fy=$f(1,function(Gy){
		       $$GHCziIOziHandleziInternals_zdwa3.C([By,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),yy,Gy],function(Hy){
			var Iy=Hy[0];
			var Jy=$hs_readMutVarzh(Ey,Iy);
			var Ky=Jy[0],Ly=Jy[1];
			$M(Ly,function(My){
			 var Ny=My.v[4],Oy=My.v[5];
			 var Py=Ny.equals(Oy)?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Py.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([Cy,Dy,My,Ky],function(Qy){
			   var Ry=Qy[0],Sy=Qy[1];
			   var Ty=$hs_writeMutVarzh(Ey,Sy,Ry);
			   $r([Ty,$$GHCziTuple_Z0T]);
			  },[Ey]);break;
			 case 2:
			  $r([Ky,$$GHCziTuple_Z0T]);break;
			 }
			},[Ey,Cy,Dy,Ky]);
		       },[Ey,Cy,Dy]);
		      },[wd,xd,yd,By,yy,Ey,Cy,Dy],"sat");
		      $A(Fy);
		     },[wd,xd,yd,yy]);
		    },[wd,xd,yd,yy],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,zy,xy],function(Uy){
		     var Vy=Uy[0];
		     Nw.J(goog.math.Long.fromBits(0,0),oy,Nx,Vy);
		    },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Nx,oy]);
		   },[wd,xd,yd,sd,Nw,Nx,oy],"$w$j1");
		   $M(vd,function(Wy){
		    switch(Wy.g){
		    case 1:
		     var Zy=$hs_writeWideCharOffAddrzh(wd,Lx,"\n",Ox);
		     var Xy=$hs_touchzh(xd,Zy);
		     var Yy=Lx.add(goog.math.Long.fromBits(1,0));
		     wy.J(Xy,Yy);break;
		    case 2:
		     var fz=$hs_writeWideCharOffAddrzh(wd,Lx,"\r",Ox);
		     var ez=$hs_touchzh(xd,fz);
		     var cz=Lx.add(goog.math.Long.fromBits(1,0));
		     var dz=$hs_writeWideCharOffAddrzh(wd,cz,"\n",ez);
		     var az=$hs_touchzh(xd,dz);
		     var bz=cz.add(goog.math.Long.fromBits(1,0));
		     wy.J(az,bz);break;
		    }
		   },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Nx,Lx,Ox,oy,wy]);break;
		  default:
		   var vy=$hs_writeWideCharOffAddrzh(wd,Lx,sy,Ox);
		   var uy=$hs_touchzh(xd,vy);
		   var ty=Lx.add(goog.math.Long.fromBits(1,0));
		   Nw.J(ty,oy,Nx,uy);
		  }
		 },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Nx,Lx,Ox,oy]);
		},[wd,xd,Bd,yd,sd,vd,Vt,Nw,Nx,Lx,Ox,oy]);break;
	       case 2:
		var gz=$f(1,function(hz){
		 $M(hz,function(iz){
		  var jz=$f(1,function(kz){
		   $$GHCziIOziHandleziInternals_zdwa3.C([iz,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),Lx,kz],function(lz){
		    var mz=lz[0];
		    $r([mz,$$GHCziTuple_Z0T]);
		   },[]);
		  },[wd,xd,yd,Lx,iz],"sat");
		  $A(jz);
		 },[wd,xd,yd,Lx]);
		},[wd,xd,yd,Lx],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,gz,Ox],function(nz){
		 var oz=nz[0];
		 Dw.J(goog.math.Long.fromBits(0,0),ny,oy,Nx,oz);
		},[wd,xd,Bd,yd,sd,vd,Vt,Dw,Nx,ny,oy]);break;
	       }break;
	      }
	     },[wd,xd,Bd,yd,sd,vd,Vt,Nw,Dw,Nx,Lx,Ox]);
	    },[wd,xd,Bd,yd,sd,vd,Vt,Dw],"$wa9");
	    $S(Dw,[wd,xd,yd,sd,vd,Nw]);
	    Nw.J(goog.math.Long.fromBits(0,0),Rp,qp,Ut);
	   },[wd,xd,Bd,yd,sd,vd,qp,Rp]);break;
	  }
	 },[wd,xd,Bd,yd,sd,vd,qp,Rp,bq,aq]);
	},[wd,xd,Bd,yd,td,sd,vd,qp,Rp],"$w$j");
	$M(vd,function(qz){
	 switch(qz.g){
	 case 1:
	  var tz=$hs_writeWideCharOffAddrzh(wd,op,"\n",rp);
	  var rz=$hs_touchzh(xd,tz);
	  var sz=op.add(goog.math.Long.fromBits(1,0));
	  Zp.J(rz,sz);break;
	 case 2:
	  var zz=$hs_writeWideCharOffAddrzh(wd,op,"\r",rp);
	  var yz=$hs_touchzh(xd,zz);
	  var wz=op.add(goog.math.Long.fromBits(1,0));
	  var xz=$hs_writeWideCharOffAddrzh(wd,wz,"\n",yz);
	  var uz=$hs_touchzh(xd,xz);
	  var vz=wz.add(goog.math.Long.fromBits(1,0));
	  Zp.J(uz,vz);break;
	 }
	},[wd,xd,Bd,yd,td,sd,vd,qp,op,rp,Rp,Zp]);break;
       default:
	var Yp=$hs_writeWideCharOffAddrzh(wd,op,Vp,rp);
	var Xp=$hs_touchzh(xd,Yp);
	var Wp=op.add(goog.math.Long.fromBits(1,0));
	Fl.J(Wp,Rp,qp,Xp);
       }
      },[wd,xd,Bd,yd,td,sd,vd,Cd,Fl,qp,op,rp,Rp]);
     },[wd,xd,Bd,yd,td,sd,vd,Cd,Fl,qp,op,rp,Rp]);break;
    case 2:
     var Az=$f(1,function(Bz){
      $M(Bz,function(Cz){
       var Dz=$f(1,function(Ez){
	$$GHCziIOziHandleziInternals_zdwa3.C([Cz,wd,xd,$$GHCziIOziBuffer_WriteBuffer,yd,goog.math.Long.fromBits(0,0),op,Ez],function(Fz){
	 var Gz=Fz[0];
	 $r([Gz,$$GHCziTuple_Z0T]);
	},[]);
       },[wd,xd,yd,op,Cz],"sat");
       $A(Dz);
      },[wd,xd,yd,op]);
     },[wd,xd,yd,op],"sat");
     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,sd,Az,rp],function(Hz){
      var Iz=Hz[0];
      vl.J(goog.math.Long.fromBits(0,0),Qp,Rp,qp,Iz);
     },[wd,xd,Bd,yd,td,sd,vd,Cd,vl,qp,Qp,Rp]);break;
    }break;
   }
  },[wd,xd,Bd,yd,td,sd,vd,Cd,Fl,vl,qp,op,rp]);
 },[wd,xd,Bd,yd,td,sd,vd,Cd,vl],"$wa8");
 $S(vl,[wd,xd,Bd,yd,td,sd,vd,Fl]);
 var Kz=$t(function(){
  $M(ud,function(Lz){
   switch(Lz.g){
   case 1:
    $R(1,[],"[]");break;
   case 2:
    $A($$GHCziIOziHandleziText$o);break;
   }
  },[]);
 },[ud],"sat");
 Fl.J(goog.math.Long.fromBits(0,0),zd,Kz,Ad);
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
var $$GHCziIOziHandleziText_hPutStr4=$f(2,function(Mz,Nz){
 $M(Mz,function(Oz){
  var Pz=Oz.v[6],Qz=Oz.v[8],Rz=Oz.v[9],Sz=Oz.v[14];
  $M(Pz,function(Tz){
   switch(Tz.g){
   case 1:
    var CA=$d(1,[$$GHCziIOziHandleziText_hPutStr5,Sz],"sat");
    $r([Nz,CA]);break;
   default:
    var Uz=$hs_readMutVarzh(Rz,Nz);
    var Vz=Uz[0],Wz=Uz[1];
    var Xz=$hs_readMutVarzh(Qz,Vz);
    var Yz=Xz[0],Zz=Xz[1];
    $M(Wz,function(aA){
     switch(aA.g){
     case 1:
      $M(Zz,function(bA){
       var cA=bA.v[3];
       var qA=cA.multiply(goog.math.Long.fromBits(4,0));
       var dA=qA.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(dA.g){
       case 1:
	var eA=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Yz);
	var fA=eA[0],gA=eA[1];
	var hA=$hs_newPinnedByteArrayzh(qA,fA);
	var iA=hA[0],jA=hA[1];
	var kA=$d(1,[gA],"sat");
	var lA=$d(2,[jA,kA],"sat");
	var nA=$hs_byteArrayContentszh(jA);
	var mA=$d(1,[nA,lA,$$GHCziIOziBuffer_WriteBuffer,cA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"sat");
	var oA=$d(1,[Tz,mA],"sat");
	var pA=$d(1,[oA,Sz],"sat");
	$r([iA,pA]);break;
       case 2:
	$A($$GHCziForeignPtr_mallocForeignPtrBytes2);break;
       }
      },[Yz,Tz,Sz]);break;
     case 2:
      var rA=aA.v[0],sA=aA.v[1];
      var BA=$hs_writeMutVarzh(Rz,sA,Yz);
      var tA=$t(function(){
       $M(rA,function(uA){
	var vA=uA.v[0],wA=uA.v[1];
	$M(Zz,function(xA){
	 var yA=xA.v[3];
	 $R(1,[vA,wA,$$GHCziIOziBuffer_WriteBuffer,yA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
	},[vA,wA]);
       },[Zz]);
      },[Zz,rA],"sat");
      var zA=$d(1,[Tz,tA],"sat");
      var AA=$d(1,[zA,Sz],"sat");
      $r([BA,AA]);break;
     }
    },[Rz,Zz,Yz,Tz,Sz]);
   }
  },[Rz,Nz,Qz,Sz]);
 },[Nz]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr2=$f(4,function(DA,EA,FA,GA){
 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText_hPutStr7,DA,$$GHCziIOziHandleziText_hPutStr4,GA],function(HA){
  var IA=HA[0],JA=HA[1];
  $M(JA,function(KA){
   var LA=KA.v[0],MA=KA.v[1];
   $M(LA,function(NA){
    var OA=NA.v[0],PA=NA.v[1];
    $M(OA,function(QA){
     switch(QA.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr3.C([DA,EA,IA],function(RA){
       var SA=RA[0];
       $M(FA,function(TA){
	switch(TA.g){
	case 1:
	 $r([SA,$$GHCziTuple_Z0T]);break;
	case 2:
	 $$GHCziIOziHandleziText_zdwa5.J(DA,"\n",SA);break;
	}
       },[DA,SA]);
      },[DA,FA]);break;
     case 2:
      $M(PA,function(UA){
       var VA=UA.v[0],WA=UA.v[1],XA=UA.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(DA,$$GHCziTypes_True,FA,MA,VA,WA,XA,EA,IA);
      },[DA,EA,IA,FA,MA]);break;
     case 3:
      $M(PA,function(YA){
       var ZA=YA.v[0],aB=YA.v[1],bB=YA.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(DA,$$GHCziTypes_False,FA,MA,ZA,aB,bB,EA,IA);
      },[DA,EA,IA,FA,MA]);break;
     }
    },[DA,EA,IA,FA,PA,MA]);
   },[DA,EA,IA,FA,MA]);
  },[DA,EA,IA,FA]);
 },[DA,EA,FA]);
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
  var P=$hs_mkWeakzh(N,O,goog.math.Long.fromBits(0,0),M);
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
var $$SystemziEnvironment_getProgNamezugo=$f(2,function(B,C){
 $M(C,function(D){
  switch(D.g){
  case 1:
   $A(B);break;
  case 2:
   var E=D.v[0],F=D.v[1];
   $M(E,function(G){
    var H=G.v[0];
    $M(H,function(I){
     switch(I.toString()){
     case "/":
      $$SystemziEnvironment_getProgNamezugo.J(F,F);break;
     default:
      $$SystemziEnvironment_getProgNamezugo.J(B,F);
     }
    },[B,F]);
   },[B,F]);break;
  }
 },[B]);
},[],"at libraries/base/System/Environment.hs:169:3");
var $$SystemziEnvironment_getProgName1=$f(1,function(J){
 var K=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(4,0),goog.math.Long.fromBits(4,0),J);
 var L=K[0],M=K[1];
 var N=$hs_unsafeFreezzeByteArrayzh(M,L);
 var O=N[0],P=N[1];
 var Q=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),O);
 var R=Q[0],S=Q[1];
 var T=$hs_unsafeFreezzeByteArrayzh(S,R);
 var U=T[0],V=T[1];
 var p1=$hs_byteArrayContentszh(V);
 var q1=$hs_byteArrayContentszh(P);
 var $ff=getProgArgv(q1,p1);
 var W=[U,$ff];
 var X=W[0];
 var Y=$hs_readAddrOffAddrzh(p1,goog.math.Long.fromBits(0,0),X);
 var Z=Y[0],a1=Y[1];
 $M($$GHCziIOziEncoding_getFileSystemEncoding1,function(b1){
  var c1=b1.v[0];
  c1.C([Z],function(d1){
   var e1=d1[0],f1=d1[1];
   var g1=$hs_readAddrOffAddrzh(a1,goog.math.Long.fromBits(0,0),e1);
   var h1=g1[0],i1=g1[1];
   $$GHCziForeign_zdwa.C([f1,i1,h1],function(j1){
    var k1=j1[0],l1=j1[1];
    var o1=$hs_touchzh(V,k1);
    var n1=$hs_touchzh(P,o1);
    var m1=$t(function(){
     $$SystemziEnvironment_getProgNamezugo.J(l1,l1);
    },[l1],"sat");
    $r([n1,m1]);
   },[V,P]);
  },[V,P,a1]);
 },[V,P,Z,a1]);
},[],"in `base:System.Environment'");
var $$SystemziEnvironment_getArgs1=$f(1,function(r1){
 var s1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(4,0),goog.math.Long.fromBits(4,0),r1);
 var t1=s1[0],u1=s1[1];
 var v1=$hs_unsafeFreezzeByteArrayzh(u1,t1);
 var w1=v1[0],x1=v1[1];
 var y1=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),w1);
 var z1=y1[0],A1=y1[1];
 var B1=$hs_unsafeFreezzeByteArrayzh(A1,z1);
 var C1=B1[0],D1=B1[1];
 var r2=$hs_byteArrayContentszh(D1);
 var s2=$hs_byteArrayContentszh(x1);
 var $ff=getProgArgv(s2,r2);
 var E1=[C1,$ff];
 var F1=E1[0];
 var G1=$hs_readInt32OffAddrzh(s2,goog.math.Long.fromBits(0,0),F1);
 var H1=G1[0],I1=G1[1];
 var J1=$hs_readAddrOffAddrzh(r2,goog.math.Long.fromBits(0,0),H1);
 var K1=J1[0],L1=J1[1];
 $M($$GHCziIOziEncoding_getFileSystemEncoding1,function(M1){
  var N1=M1.v[0];
  N1.C([K1],function(O1){
   var P1=O1[0],Q1=O1[1];
   var S1=$hs_plusAddrzh(L1,goog.math.Long.fromBits(8,0));
   var R1=$d(1,[S1],"sat");
   var q2=I1.subtract(goog.math.Long.fromBits(1,0));
   $$ForeignziMarshalziArray_zdwa8.C([$$ForeignziStorable_zdfStorablePtr,q2,R1,P1],function(T1){
    var U1=T1[0],V1=T1[1];
    var W1=$f(2,function(X1,Y1){
     $M(X1,function(Z1){
      switch(Z1.g){
      case 1:
       $r([Y1,$$GHCziTypes_ZMZN]);break;
      case 2:
       var a2=Z1.v[0],b2=Z1.v[1];
       $M(a2,function(c2){
	var d2=c2.v[0];
	$$GHCziForeign_zdwa.C([Q1,d2,Y1],function(e2){
	 var f2=e2[0],g2=e2[1];
	 W1.C([b2,f2],function(h2){
	  var i2=h2[0],j2=h2[1];
	  var k2=$d(2,[g2,j2],"sat");
	  $r([i2,k2]);
	 },[g2]);
	},[b2,W1]);
       },[Y1,Q1,b2,W1]);break;
      }
     },[Y1,Q1,W1]);
    },[Q1],"a5");
    W1.C([V1,U1],function(l2){
     var m2=l2[0],n2=l2[1];
     var p2=$hs_touchzh(D1,m2);
     var o2=$hs_touchzh(x1,p2);
     $r([o2,n2]);
    },[D1,x1]);
   },[D1,x1,Q1]);
  },[D1,x1,I1,L1]);
 },[D1,x1,K1,I1,L1]);
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
    $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,o,$$Main$p,n],function(p){
     var q=p[0],r=p[1];
     $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,o,$$Main$o,q],function(s){
      var t=s[0],u=s[1];
      var v=$f(1,function(w){
       $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,o,$$Main$n,w],function(x){
	var y=x[0],z=x[1];
	$$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,o,$$Main$m,y],function(A){
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
      },[o],"a23");
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
 },[d],"a18");
 var h1=$hs_eqAddrzh(h,null);
 switch(h1.g){
 case 1:
  var i1=$f(1,function(j1){
   var k1=$d(1,[h],"sat");
   $r([j1,k1]);
  },[h],"sat");
  $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkWebView1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,i1,g],function(l1){
   var m1=l1[0];
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$q,$$GHCziTypes_True,m1],function(n1){
    var o1=n1[0];
    i.J(o1);
   },[d,i]);
  },[d,i]);break;
 case 2:
  $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$r,$$GHCziTypes_True,g],function(p1){
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
var $$$ZCMain_main=$f(1,function(b){
 $$Main_main3.J(b);
},[],"at src/Main.hs:42:1");
var $$Main$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("hamlet-out");
},"lvl");
var $$Main$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("hamlet-in");
},"lvl1");
var $$Main$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("prime-out");
},"lvl2");
var $$Main$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("prime-in");
},"lvl3");
var $$Main$q=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Hello from JavaScript land");
},"lvl4");
var $$Main$r=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Hello from Native Haskell");
},"lvl5");
//@ sourceURL=hs2.js
