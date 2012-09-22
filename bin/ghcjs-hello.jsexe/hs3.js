//$$Main_main

var $$TextziBlazzeziRendererziText_renderMarkupBuilder7=$t(function(){
 $$DataziText_unpackCStringzh.C(["&quot;"],function(a){
  var b=a.v[0],c=a.v[1],d=a.v[2];
  var e=d.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(e.g){
  case 1:
   var f=d.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(f.g){
   case 1:
    var g=$f(3,function(h,i,j){
     $M(i,function(k){
      var l=k.v[0],m=k.v[1],n=k.v[2],o=k.v[3];
      $M(n,function(p){
       switch(p.toString()){
       case "0":
	var x=$d(1,[l,m,goog.math.Long.fromBits(0,0),o],"sat");
	h.C([x,j],function(y){
	 var z=y[0],A=y[1];
	 var B=$d(2,[a,A],"sat");
	 $r([z,B]);
	},[a]);break;
       default:
	var q=$t(function(){
	 var s=m.add(p);
	 var r=$d(1,[l,s,goog.math.Long.fromBits(0,0),o],"sat");
	 h.C([r,j],function(t){
	  var u=t[1];
	  $R(2,[a,u],":");
	 },[a]);
	},[j,l,m,p,o,h,a],"sat");
	var v=$d(1,[l,m,p],"sat");
	var w=$d(2,[v,q],"sat");
	$r([j,w]);
       }
      },[j,l,m,o,h,a]);
     },[j,h,a]);
    },[a],"sat");
    $A(g);break;
   case 2:
    var C=$f(1,function(D){
     var E=$f(5,function(F,G,H,I,J){
      var T=G.add(H);
      var V=d.add(T);
      var K=T.greaterThanOrEqual(V)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(K.g){
      case 1:
       var U=V.subtract(T);
       var S=$hs_int2Wordzh(U);
       var R=$hs_int2Wordzh(c);
       var Q=$hs_int2Wordzh(T);
       var $ff=_hs_text_memcpy(F,Q,b,R,S);
       var L=[J,$ff];
       var M=L[0];
       var P=I.subtract(d);
       var O=H.add(d);
       var N=$d(1,[F,G,O,P],"sat");
       D.J(N,M);break;
      case 2:
       var Y=I.subtract(d);
       var X=H.add(d);
       var W=$d(1,[F,G,X,Y],"sat");
       D.J(W,J);break;
      }
     },[d,b,c,D],"$wa1");
     var Z=$f(1,function(a1){
      var b1=$f(1,function(c1){
       var d1=c1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(d1.g){
       case 1:
	var k1=$hs_int2Wordzh(c1);
	var j1=k1.and(goog.math.Long.fromBits(0,1073741824));
	var e1=$hs_word2Intzh(j1);
	switch(e1.toString()){
	case "0":
	 var i1=$hs_uncheckedIShiftLzh(c1,goog.math.Long.fromBits(1,0));
	 var f1=$hs_newByteArrayzh(i1,a1);
	 var g1=f1[0],h1=f1[1];
	 E.J(h1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),c1,g1);break;
	default:
	 $A($$TextziBlazzeziRendererziText$b);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$b);break;
       }
      },[E,a1],"$j");
      var l1=d.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(l1.g){
      case 1:
       b1.J(d);break;
      case 2:
       b1.J(goog.math.Long.fromBits(112,0));break;
      }
     },[d,E],"$wa9");
     var m1=$f(2,function(n1,o1){
      $M(n1,function(p1){
       var q1=p1.v[0],r1=p1.v[1],s1=p1.v[2],t1=p1.v[3];
       var u1=d.lessThanOrEqual(t1)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(u1.g){
       case 1:
	$M(s1,function(v1){
	 switch(v1.toString()){
	 case "0":
	  Z.J(o1);break;
	 default:
	  var w1=$t(function(){
	   Z.C([o1],function(x1){
	    var y1=x1[1];
	    $A(y1);
	   },[]);
	  },[Z,o1],"sat");
	  var z1=$d(1,[q1,r1,v1],"sat");
	  var A1=$d(2,[z1,w1],"sat");
	  $r([o1,A1]);
	 }
	},[Z,o1,q1,r1]);break;
       case 2:
	E.J(q1,r1,s1,t1,o1);break;
       }
      },[d,E,Z,o1]);
     },[d,E,Z],"sat");
     $A(m1);
    },[d,b,c],"sat");
    $A(C);break;
   }break;
  case 2:
   var B1=$f(2,function(C1,D1){
    C1.J(D1);
   },[],"sat");
   $A(B1);break;
  }
 },[]);
},[],"in `blaze-markup-0.5.1.0:Text.Blaze.Renderer.Text'");
var $$TextziBlazzeziRendererziText_renderMarkupBuilder6=$t(function(){
 $$DataziText_unpackCStringzh.C(["&amp;"],function(E1){
  var F1=E1.v[0],G1=E1.v[1],H1=E1.v[2];
  var I1=H1.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(I1.g){
  case 1:
   var J1=H1.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(J1.g){
   case 1:
    var K1=$f(3,function(L1,M1,N1){
     $M(M1,function(O1){
      var P1=O1.v[0],Q1=O1.v[1],R1=O1.v[2],S1=O1.v[3];
      $M(R1,function(T1){
       switch(T1.toString()){
       case "0":
	var b2=$d(1,[P1,Q1,goog.math.Long.fromBits(0,0),S1],"sat");
	L1.C([b2,N1],function(c2){
	 var d2=c2[0],e2=c2[1];
	 var f2=$d(2,[E1,e2],"sat");
	 $r([d2,f2]);
	},[E1]);break;
       default:
	var U1=$t(function(){
	 var W1=Q1.add(T1);
	 var V1=$d(1,[P1,W1,goog.math.Long.fromBits(0,0),S1],"sat");
	 L1.C([V1,N1],function(X1){
	  var Y1=X1[1];
	  $R(2,[E1,Y1],":");
	 },[E1]);
	},[N1,P1,Q1,T1,S1,L1,E1],"sat");
	var Z1=$d(1,[P1,Q1,T1],"sat");
	var a2=$d(2,[Z1,U1],"sat");
	$r([N1,a2]);
       }
      },[N1,P1,Q1,S1,L1,E1]);
     },[N1,L1,E1]);
    },[E1],"sat");
    $A(K1);break;
   case 2:
    var g2=$f(1,function(h2){
     var i2=$f(5,function(j2,k2,l2,m2,n2){
      var x2=k2.add(l2);
      var z2=H1.add(x2);
      var o2=x2.greaterThanOrEqual(z2)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(o2.g){
      case 1:
       var y2=z2.subtract(x2);
       var w2=$hs_int2Wordzh(y2);
       var v2=$hs_int2Wordzh(G1);
       var u2=$hs_int2Wordzh(x2);
       var $ff=_hs_text_memcpy(j2,u2,F1,v2,w2);
       var p2=[n2,$ff];
       var q2=p2[0];
       var t2=m2.subtract(H1);
       var s2=l2.add(H1);
       var r2=$d(1,[j2,k2,s2,t2],"sat");
       h2.J(r2,q2);break;
      case 2:
       var C2=m2.subtract(H1);
       var B2=l2.add(H1);
       var A2=$d(1,[j2,k2,B2,C2],"sat");
       h2.J(A2,n2);break;
      }
     },[H1,F1,G1,h2],"$wa1");
     var D2=$f(1,function(E2){
      var F2=$f(1,function(G2){
       var H2=G2.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(H2.g){
       case 1:
	var O2=$hs_int2Wordzh(G2);
	var N2=O2.and(goog.math.Long.fromBits(0,1073741824));
	var I2=$hs_word2Intzh(N2);
	switch(I2.toString()){
	case "0":
	 var M2=$hs_uncheckedIShiftLzh(G2,goog.math.Long.fromBits(1,0));
	 var J2=$hs_newByteArrayzh(M2,E2);
	 var K2=J2[0],L2=J2[1];
	 i2.J(L2,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),G2,K2);break;
	default:
	 $A($$TextziBlazzeziRendererziText$c);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$c);break;
       }
      },[i2,E2],"$j");
      var P2=H1.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(P2.g){
      case 1:
       F2.J(H1);break;
      case 2:
       F2.J(goog.math.Long.fromBits(112,0));break;
      }
     },[H1,i2],"$wa9");
     var Q2=$f(2,function(R2,S2){
      $M(R2,function(T2){
       var U2=T2.v[0],V2=T2.v[1],W2=T2.v[2],X2=T2.v[3];
       var Y2=H1.lessThanOrEqual(X2)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Y2.g){
       case 1:
	$M(W2,function(Z2){
	 switch(Z2.toString()){
	 case "0":
	  D2.J(S2);break;
	 default:
	  var a3=$t(function(){
	   D2.C([S2],function(b3){
	    var c3=b3[1];
	    $A(c3);
	   },[]);
	  },[D2,S2],"sat");
	  var d3=$d(1,[U2,V2,Z2],"sat");
	  var e3=$d(2,[d3,a3],"sat");
	  $r([S2,e3]);
	 }
	},[D2,S2,U2,V2]);break;
       case 2:
	i2.J(U2,V2,W2,X2,S2);break;
       }
      },[H1,i2,D2,S2]);
     },[H1,i2,D2],"sat");
     $A(Q2);
    },[H1,F1,G1],"sat");
    $A(g2);break;
   }break;
  case 2:
   var f3=$f(2,function(g3,h3){
    g3.J(h3);
   },[],"sat");
   $A(f3);break;
  }
 },[]);
},[],"in `blaze-markup-0.5.1.0:Text.Blaze.Renderer.Text'");
var $$TextziBlazzeziRendererziText_renderMarkupBuilder5=$t(function(){
 $$DataziText_unpackCStringzh.C(["&#39;"],function(i3){
  var j3=i3.v[0],k3=i3.v[1],l3=i3.v[2];
  var m3=l3.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(m3.g){
  case 1:
   var n3=l3.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(n3.g){
   case 1:
    var o3=$f(3,function(p3,q3,r3){
     $M(q3,function(s3){
      var t3=s3.v[0],u3=s3.v[1],v3=s3.v[2],w3=s3.v[3];
      $M(v3,function(x3){
       switch(x3.toString()){
       case "0":
	var F3=$d(1,[t3,u3,goog.math.Long.fromBits(0,0),w3],"sat");
	p3.C([F3,r3],function(G3){
	 var H3=G3[0],I3=G3[1];
	 var J3=$d(2,[i3,I3],"sat");
	 $r([H3,J3]);
	},[i3]);break;
       default:
	var y3=$t(function(){
	 var A3=u3.add(x3);
	 var z3=$d(1,[t3,A3,goog.math.Long.fromBits(0,0),w3],"sat");
	 p3.C([z3,r3],function(B3){
	  var C3=B3[1];
	  $R(2,[i3,C3],":");
	 },[i3]);
	},[r3,t3,u3,x3,w3,p3,i3],"sat");
	var D3=$d(1,[t3,u3,x3],"sat");
	var E3=$d(2,[D3,y3],"sat");
	$r([r3,E3]);
       }
      },[r3,t3,u3,w3,p3,i3]);
     },[r3,p3,i3]);
    },[i3],"sat");
    $A(o3);break;
   case 2:
    var K3=$f(1,function(L3){
     var M3=$f(5,function(N3,O3,P3,Q3,R3){
      var b4=O3.add(P3);
      var d4=l3.add(b4);
      var S3=b4.greaterThanOrEqual(d4)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(S3.g){
      case 1:
       var c4=d4.subtract(b4);
       var a4=$hs_int2Wordzh(c4);
       var Z3=$hs_int2Wordzh(k3);
       var Y3=$hs_int2Wordzh(b4);
       var $ff=_hs_text_memcpy(N3,Y3,j3,Z3,a4);
       var T3=[R3,$ff];
       var U3=T3[0];
       var X3=Q3.subtract(l3);
       var W3=P3.add(l3);
       var V3=$d(1,[N3,O3,W3,X3],"sat");
       L3.J(V3,U3);break;
      case 2:
       var g4=Q3.subtract(l3);
       var f4=P3.add(l3);
       var e4=$d(1,[N3,O3,f4,g4],"sat");
       L3.J(e4,R3);break;
      }
     },[l3,j3,k3,L3],"$wa1");
     var h4=$f(1,function(i4){
      var j4=$f(1,function(k4){
       var l4=k4.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(l4.g){
       case 1:
	var s4=$hs_int2Wordzh(k4);
	var r4=s4.and(goog.math.Long.fromBits(0,1073741824));
	var m4=$hs_word2Intzh(r4);
	switch(m4.toString()){
	case "0":
	 var q4=$hs_uncheckedIShiftLzh(k4,goog.math.Long.fromBits(1,0));
	 var n4=$hs_newByteArrayzh(q4,i4);
	 var o4=n4[0],p4=n4[1];
	 M3.J(p4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),k4,o4);break;
	default:
	 $A($$TextziBlazzeziRendererziText$d);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$d);break;
       }
      },[M3,i4],"$j");
      var t4=l3.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(t4.g){
      case 1:
       j4.J(l3);break;
      case 2:
       j4.J(goog.math.Long.fromBits(112,0));break;
      }
     },[l3,M3],"$wa9");
     var u4=$f(2,function(v4,w4){
      $M(v4,function(x4){
       var y4=x4.v[0],z4=x4.v[1],A4=x4.v[2],B4=x4.v[3];
       var C4=l3.lessThanOrEqual(B4)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(C4.g){
       case 1:
	$M(A4,function(D4){
	 switch(D4.toString()){
	 case "0":
	  h4.J(w4);break;
	 default:
	  var E4=$t(function(){
	   h4.C([w4],function(F4){
	    var G4=F4[1];
	    $A(G4);
	   },[]);
	  },[h4,w4],"sat");
	  var H4=$d(1,[y4,z4,D4],"sat");
	  var I4=$d(2,[H4,E4],"sat");
	  $r([w4,I4]);
	 }
	},[h4,w4,y4,z4]);break;
       case 2:
	M3.J(y4,z4,A4,B4,w4);break;
       }
      },[l3,M3,h4,w4]);
     },[l3,M3,h4],"sat");
     $A(u4);
    },[l3,j3,k3],"sat");
    $A(K3);break;
   }break;
  case 2:
   var J4=$f(2,function(K4,L4){
    K4.J(L4);
   },[],"sat");
   $A(J4);break;
  }
 },[]);
},[],"in `blaze-markup-0.5.1.0:Text.Blaze.Renderer.Text'");
var $$TextziBlazzeziRendererziText_renderMarkupBuilder4=$t(function(){
 $$DataziText_unpackCStringzh.C(["&lt;"],function(M4){
  var N4=M4.v[0],O4=M4.v[1],P4=M4.v[2];
  var Q4=P4.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Q4.g){
  case 1:
   var R4=P4.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(R4.g){
   case 1:
    var S4=$f(3,function(T4,U4,V4){
     $M(U4,function(W4){
      var X4=W4.v[0],Y4=W4.v[1],Z4=W4.v[2],a5=W4.v[3];
      $M(Z4,function(b5){
       switch(b5.toString()){
       case "0":
	var j5=$d(1,[X4,Y4,goog.math.Long.fromBits(0,0),a5],"sat");
	T4.C([j5,V4],function(k5){
	 var l5=k5[0],m5=k5[1];
	 var n5=$d(2,[M4,m5],"sat");
	 $r([l5,n5]);
	},[M4]);break;
       default:
	var c5=$t(function(){
	 var e5=Y4.add(b5);
	 var d5=$d(1,[X4,e5,goog.math.Long.fromBits(0,0),a5],"sat");
	 T4.C([d5,V4],function(f5){
	  var g5=f5[1];
	  $R(2,[M4,g5],":");
	 },[M4]);
	},[V4,X4,Y4,b5,a5,T4,M4],"sat");
	var h5=$d(1,[X4,Y4,b5],"sat");
	var i5=$d(2,[h5,c5],"sat");
	$r([V4,i5]);
       }
      },[V4,X4,Y4,a5,T4,M4]);
     },[V4,T4,M4]);
    },[M4],"sat");
    $A(S4);break;
   case 2:
    var o5=$f(1,function(p5){
     var q5=$f(5,function(r5,s5,t5,u5,v5){
      var F5=s5.add(t5);
      var H5=P4.add(F5);
      var w5=F5.greaterThanOrEqual(H5)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(w5.g){
      case 1:
       var G5=H5.subtract(F5);
       var E5=$hs_int2Wordzh(G5);
       var D5=$hs_int2Wordzh(O4);
       var C5=$hs_int2Wordzh(F5);
       var $ff=_hs_text_memcpy(r5,C5,N4,D5,E5);
       var x5=[v5,$ff];
       var y5=x5[0];
       var B5=u5.subtract(P4);
       var A5=t5.add(P4);
       var z5=$d(1,[r5,s5,A5,B5],"sat");
       p5.J(z5,y5);break;
      case 2:
       var K5=u5.subtract(P4);
       var J5=t5.add(P4);
       var I5=$d(1,[r5,s5,J5,K5],"sat");
       p5.J(I5,v5);break;
      }
     },[P4,N4,O4,p5],"$wa1");
     var L5=$f(1,function(M5){
      var N5=$f(1,function(O5){
       var P5=O5.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(P5.g){
       case 1:
	var W5=$hs_int2Wordzh(O5);
	var V5=W5.and(goog.math.Long.fromBits(0,1073741824));
	var Q5=$hs_word2Intzh(V5);
	switch(Q5.toString()){
	case "0":
	 var U5=$hs_uncheckedIShiftLzh(O5,goog.math.Long.fromBits(1,0));
	 var R5=$hs_newByteArrayzh(U5,M5);
	 var S5=R5[0],T5=R5[1];
	 q5.J(T5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),O5,S5);break;
	default:
	 $A($$TextziBlazzeziRendererziText$e);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$e);break;
       }
      },[q5,M5],"$j");
      var X5=P4.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(X5.g){
      case 1:
       N5.J(P4);break;
      case 2:
       N5.J(goog.math.Long.fromBits(112,0));break;
      }
     },[P4,q5],"$wa9");
     var Y5=$f(2,function(Z5,a6){
      $M(Z5,function(b6){
       var c6=b6.v[0],d6=b6.v[1],e6=b6.v[2],f6=b6.v[3];
       var g6=P4.lessThanOrEqual(f6)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(g6.g){
       case 1:
	$M(e6,function(h6){
	 switch(h6.toString()){
	 case "0":
	  L5.J(a6);break;
	 default:
	  var i6=$t(function(){
	   L5.C([a6],function(j6){
	    var k6=j6[1];
	    $A(k6);
	   },[]);
	  },[L5,a6],"sat");
	  var l6=$d(1,[c6,d6,h6],"sat");
	  var m6=$d(2,[l6,i6],"sat");
	  $r([a6,m6]);
	 }
	},[L5,a6,c6,d6]);break;
       case 2:
	q5.J(c6,d6,e6,f6,a6);break;
       }
      },[P4,q5,L5,a6]);
     },[P4,q5,L5],"sat");
     $A(Y5);
    },[P4,N4,O4],"sat");
    $A(o5);break;
   }break;
  case 2:
   var n6=$f(2,function(o6,p6){
    o6.J(p6);
   },[],"sat");
   $A(n6);break;
  }
 },[]);
},[],"in `blaze-markup-0.5.1.0:Text.Blaze.Renderer.Text'");
var $$TextziBlazzeziRendererziText_renderMarkupBuilder3=$t(function(){
 $$DataziText_unpackCStringzh.C(["&gt;"],function(q6){
  var r6=q6.v[0],s6=q6.v[1],t6=q6.v[2];
  var u6=t6.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(u6.g){
  case 1:
   var v6=t6.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(v6.g){
   case 1:
    var w6=$f(3,function(x6,y6,z6){
     $M(y6,function(A6){
      var B6=A6.v[0],C6=A6.v[1],D6=A6.v[2],E6=A6.v[3];
      $M(D6,function(F6){
       switch(F6.toString()){
       case "0":
	var N6=$d(1,[B6,C6,goog.math.Long.fromBits(0,0),E6],"sat");
	x6.C([N6,z6],function(O6){
	 var P6=O6[0],Q6=O6[1];
	 var R6=$d(2,[q6,Q6],"sat");
	 $r([P6,R6]);
	},[q6]);break;
       default:
	var G6=$t(function(){
	 var I6=C6.add(F6);
	 var H6=$d(1,[B6,I6,goog.math.Long.fromBits(0,0),E6],"sat");
	 x6.C([H6,z6],function(J6){
	  var K6=J6[1];
	  $R(2,[q6,K6],":");
	 },[q6]);
	},[z6,B6,C6,F6,E6,x6,q6],"sat");
	var L6=$d(1,[B6,C6,F6],"sat");
	var M6=$d(2,[L6,G6],"sat");
	$r([z6,M6]);
       }
      },[z6,B6,C6,E6,x6,q6]);
     },[z6,x6,q6]);
    },[q6],"sat");
    $A(w6);break;
   case 2:
    var S6=$f(1,function(T6){
     var U6=$f(5,function(V6,W6,X6,Y6,Z6){
      var j7=W6.add(X6);
      var l7=t6.add(j7);
      var a7=j7.greaterThanOrEqual(l7)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(a7.g){
      case 1:
       var k7=l7.subtract(j7);
       var i7=$hs_int2Wordzh(k7);
       var h7=$hs_int2Wordzh(s6);
       var g7=$hs_int2Wordzh(j7);
       var $ff=_hs_text_memcpy(V6,g7,r6,h7,i7);
       var b7=[Z6,$ff];
       var c7=b7[0];
       var f7=Y6.subtract(t6);
       var e7=X6.add(t6);
       var d7=$d(1,[V6,W6,e7,f7],"sat");
       T6.J(d7,c7);break;
      case 2:
       var o7=Y6.subtract(t6);
       var n7=X6.add(t6);
       var m7=$d(1,[V6,W6,n7,o7],"sat");
       T6.J(m7,Z6);break;
      }
     },[t6,r6,s6,T6],"$wa1");
     var p7=$f(1,function(q7){
      var r7=$f(1,function(s7){
       var t7=s7.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(t7.g){
       case 1:
	var A7=$hs_int2Wordzh(s7);
	var z7=A7.and(goog.math.Long.fromBits(0,1073741824));
	var u7=$hs_word2Intzh(z7);
	switch(u7.toString()){
	case "0":
	 var y7=$hs_uncheckedIShiftLzh(s7,goog.math.Long.fromBits(1,0));
	 var v7=$hs_newByteArrayzh(y7,q7);
	 var w7=v7[0],x7=v7[1];
	 U6.J(x7,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),s7,w7);break;
	default:
	 $A($$TextziBlazzeziRendererziText$f);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$f);break;
       }
      },[U6,q7],"$j");
      var B7=t6.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(B7.g){
      case 1:
       r7.J(t6);break;
      case 2:
       r7.J(goog.math.Long.fromBits(112,0));break;
      }
     },[t6,U6],"$wa9");
     var C7=$f(2,function(D7,E7){
      $M(D7,function(F7){
       var G7=F7.v[0],H7=F7.v[1],I7=F7.v[2],J7=F7.v[3];
       var K7=t6.lessThanOrEqual(J7)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(K7.g){
       case 1:
	$M(I7,function(L7){
	 switch(L7.toString()){
	 case "0":
	  p7.J(E7);break;
	 default:
	  var M7=$t(function(){
	   p7.C([E7],function(N7){
	    var O7=N7[1];
	    $A(O7);
	   },[]);
	  },[p7,E7],"sat");
	  var P7=$d(1,[G7,H7,L7],"sat");
	  var Q7=$d(2,[P7,M7],"sat");
	  $r([E7,Q7]);
	 }
	},[p7,E7,G7,H7]);break;
       case 2:
	U6.J(G7,H7,I7,J7,E7);break;
       }
      },[t6,U6,p7,E7]);
     },[t6,U6,p7],"sat");
     $A(C7);
    },[t6,r6,s6],"sat");
    $A(S6);break;
   }break;
  case 2:
   var R7=$f(2,function(S7,T7){
    S7.J(T7);
   },[],"sat");
   $A(R7);break;
  }
 },[]);
},[],"in `blaze-markup-0.5.1.0:Text.Blaze.Renderer.Text'");
var $$TextziBlazzeziRendererziText_zdwa=$f(3,function(U7,V7,W7){
 $M(U7,function(X7){
  switch(X7.toString()){
  case "\"":
   var c9=$t(function(){
    V7.J(W7);
   },[W7,V7],"sat");
   $$TextziBlazzeziRendererziText_renderMarkupBuilder7.J(c9);break;
  case "&":
   var d9=$t(function(){
    V7.J(W7);
   },[W7,V7],"sat");
   $$TextziBlazzeziRendererziText_renderMarkupBuilder6.J(d9);break;
  case "'":
   var e9=$t(function(){
    V7.J(W7);
   },[W7,V7],"sat");
   $$TextziBlazzeziRendererziText_renderMarkupBuilder5.J(e9);break;
  case "<":
   var f9=$t(function(){
    V7.J(W7);
   },[W7,V7],"sat");
   $$TextziBlazzeziRendererziText_renderMarkupBuilder4.J(f9);break;
  case ">":
   var g9=$t(function(){
    V7.J(W7);
   },[W7,V7],"sat");
   $$TextziBlazzeziRendererziText_renderMarkupBuilder3.J(g9);break;
  default:
   var Y7=$t(function(){
    V7.J(W7);
   },[W7,V7],"x");
   var a8=$hs_ordzh(X7);
   var W8=a8.subtract(goog.math.Long.fromBits(65536,0));
   var b9=$hs_int2Wordzh(W8);
   var a9=b9.and(goog.math.Long.fromBits(1023,0));
   var Z8=$hs_word2Intzh(a9);
   var Y8=Z8.add(goog.math.Long.fromBits(56320,0));
   var X8=$hs_int2Wordzh(Y8);
   var c8=$hs_narrow16Wordzh(X8);
   var V8=$hs_uncheckedIShiftRAzh(W8,goog.math.Long.fromBits(10,0));
   var U8=V8.add(goog.math.Long.fromBits(55296,0));
   var T8=$hs_int2Wordzh(U8);
   var d8=$hs_narrow16Wordzh(T8);
   var Z7=$t(function(){
    $r(a8.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False);
   },[a8],"lvl9");
   var b8=$f(1,function(e8){
    var f8=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),e8);
    var g8=f8[0],h8=f8[1];
    $M(Z7,function(i8){
     switch(i8.g){
     case 1:
      var l8=$hs_writeWord16Arrayzh(h8,goog.math.Long.fromBits(0,0),d8,g8);
      var k8=$hs_writeWord16Arrayzh(h8,goog.math.Long.fromBits(1,0),c8,l8);
      var j8=$d(1,[h8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(2,0),goog.math.Long.fromBits(110,0)],"sat");
      Y7.J(j8,k8);break;
     case 2:
      var p8=$hs_int2Wordzh(a8);
      var o8=$hs_narrow16Wordzh(p8);
      var n8=$hs_writeWord16Arrayzh(h8,goog.math.Long.fromBits(0,0),o8,g8);
      var m8=$d(1,[h8,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
      Y7.J(m8,n8);break;
     }
    },[Y7,a8,c8,d8,h8,g8]);
   },[Y7,a8,c8,d8,Z7],"$wa9");
   var q8=$f(2,function(r8,s8){
    $M(r8,function(t8){
     var u8=t8.v[0],v8=t8.v[1],w8=t8.v[2],x8=t8.v[3];
     var y8=goog.math.Long.fromBits(2,0).lessThanOrEqual(x8)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(y8.g){
     case 1:
      $M(w8,function(z8){
       switch(z8.toString()){
       case "0":
	b8.J(s8);break;
       default:
	var A8=$t(function(){
	 b8.C([s8],function(B8){
	  var C8=B8[1];
	  $A(C8);
	 },[]);
	},[b8,s8],"sat");
	var D8=$d(1,[u8,v8,z8],"sat");
	var E8=$d(2,[D8,A8],"sat");
	$r([s8,E8]);
       }
      },[b8,s8,u8,v8]);break;
     case 2:
      var M8=v8.add(w8);
      $M(Z7,function(F8){
       switch(F8.g){
       case 1:
	var L8=$hs_writeWord16Arrayzh(u8,M8,d8,s8);
	var K8=M8.add(goog.math.Long.fromBits(1,0));
	var J8=$hs_writeWord16Arrayzh(u8,K8,c8,L8);
	var I8=x8.subtract(goog.math.Long.fromBits(2,0));
	var H8=w8.add(goog.math.Long.fromBits(2,0));
	var G8=$d(1,[u8,v8,H8,I8],"sat");
	Y7.J(G8,J8);break;
       case 2:
	var S8=$hs_int2Wordzh(a8);
	var R8=$hs_narrow16Wordzh(S8);
	var Q8=$hs_writeWord16Arrayzh(u8,M8,R8,s8);
	var P8=x8.subtract(goog.math.Long.fromBits(1,0));
	var O8=w8.add(goog.math.Long.fromBits(1,0));
	var N8=$d(1,[u8,v8,O8,P8],"sat");
	Y7.J(N8,Q8);break;
       }
      },[Y7,a8,c8,d8,x8,w8,s8,u8,v8,M8]);break;
     }
    },[Y7,a8,c8,d8,Z7,b8,s8]);
   },[Y7,a8,c8,d8,Z7,b8],"sat");
   $A(q8);
  }
 },[W7,V7]);
},[],"in `blaze-markup-0.5.1.0:Text.Blaze.Renderer.Text'");
var $$TextziBlazzeziRendererziText_renderMarkupBuilder1=$f(2,function(m9,n9){
 m9.J(n9);
},[],"in `blaze-markup-0.5.1.0:Text.Blaze.Renderer.Text'");
var $$TextziBlazzeziRendererziText_fromChoiceString=$f(2,function(p9,q9){
 $M(q9,function(r9){
  switch(r9.g){
  case 1:
   var s9=r9.v[2];
   $$DataziTextziLazzyziBuilder_fromText.J(s9);break;
  case 2:
   var t9=r9.v[0];
   $$GHCziBase_map.C([$$DataziTextziInternal_safe,t9],function(u9){
    $$TextziBlazzeziRendererziText$q.J(u9);
   },[]);break;
  case 3:
   var v9=r9.v[0];
   $M(v9,function(w9){
    var x9=w9.v[0],y9=w9.v[1],z9=w9.v[2];
    var B9=y9.add(z9);
    var A9=$f(1,function(C9){
     var D9=C9.greaterThanOrEqual(B9)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(D9.g){
     case 1:
      var L9=$hs_indexWord16Arrayzh(x9,C9);
      var E9=$hs_geWordzh(L9,goog.math.Long.fromBits(55296,0));
      switch(E9.g){
      case 1:
       var F9=$t(function(){
	var G9=C9.add(goog.math.Long.fromBits(1,0));
	A9.J(G9);
       },[C9,A9],"a2");
       var K9=$hs_word2Intzh(L9);
       var I9=$hs_chrzh(K9);
       var H9=$f(1,function(J9){
	$$TextziBlazzeziRendererziText_zdwa.J(I9,F9,J9);
       },[F9,I9],"sat");
       $A(H9);break;
      case 2:
       var M9=$hs_leWordzh(L9,goog.math.Long.fromBits(56319,0));
       switch(M9.g){
       case 1:
	var N9=$t(function(){
	 var O9=C9.add(goog.math.Long.fromBits(1,0));
	 A9.J(O9);
	},[C9,A9],"a2");
	var S9=$hs_word2Intzh(L9);
	var Q9=$hs_chrzh(S9);
	var P9=$f(1,function(R9){
	 $$TextziBlazzeziRendererziText_zdwa.J(Q9,N9,R9);
	},[N9,Q9],"sat");
	$A(P9);break;
       case 2:
	var T9=$t(function(){
	 var U9=C9.add(goog.math.Long.fromBits(2,0));
	 A9.J(U9);
	},[C9,A9],"a2");
	var ga=C9.add(goog.math.Long.fromBits(1,0));
	var fa=$hs_indexWord16Arrayzh(x9,ga);
	var ea=$hs_word2Intzh(fa);
	var ba=ea.subtract(goog.math.Long.fromBits(56320,0));
	var da=$hs_word2Intzh(L9);
	var ca=da.subtract(goog.math.Long.fromBits(55296,0));
	var aa=$hs_uncheckedIShiftLzh(ca,goog.math.Long.fromBits(10,0));
	var Z9=aa.add(ba);
	var Y9=Z9.add(goog.math.Long.fromBits(65536,0));
	var W9=$hs_chrzh(Y9);
	var V9=$f(1,function(X9){
	 $$TextziBlazzeziRendererziText_zdwa.J(W9,T9,X9);
	},[T9,W9],"sat");
	$A(V9);break;
       }break;
      }break;
     case 2:
      $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
     }
    },[B9,x9],"$wloop_foldr");
    A9.J(y9);
   },[]);break;
  case 4:
   var ha=r9.v[0];
   p9.C([ha],function(ia){
    var ja=ia.v[0],ka=ia.v[1],la=ia.v[2];
    var ma=la.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(ma.g){
    case 1:
     var na=la.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(na.g){
     case 1:
      var oa=$f(3,function(pa,qa,ra){
       $M(qa,function(sa){
	var ta=sa.v[0],ua=sa.v[1],va=sa.v[2],wa=sa.v[3];
	$M(va,function(xa){
	 switch(xa.toString()){
	 case "0":
	  var Fa=$d(1,[ta,ua,goog.math.Long.fromBits(0,0),wa],"sat");
	  pa.C([Fa,ra],function(Ga){
	   var Ha=Ga[0],Ia=Ga[1];
	   var Ja=$d(2,[ia,Ia],"sat");
	   $r([Ha,Ja]);
	  },[ia]);break;
	 default:
	  var ya=$t(function(){
	   var Aa=ua.add(xa);
	   var za=$d(1,[ta,Aa,goog.math.Long.fromBits(0,0),wa],"sat");
	   pa.C([za,ra],function(Ba){
	    var Ca=Ba[1];
	    $R(2,[ia,Ca],":");
	   },[ia]);
	  },[ra,ta,ua,xa,wa,pa,ia],"sat");
	  var Da=$d(1,[ta,ua,xa],"sat");
	  var Ea=$d(2,[Da,ya],"sat");
	  $r([ra,Ea]);
	 }
	},[ra,ta,ua,wa,pa,ia]);
       },[ra,pa,ia]);
      },[ia],"sat");
      $A(oa);break;
     case 2:
      var Ka=$f(1,function(La){
       var Ma=$f(5,function(Na,Oa,Pa,Qa,Ra){
	var bb=Oa.add(Pa);
	var db=la.add(bb);
	var Sa=bb.greaterThanOrEqual(db)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Sa.g){
	case 1:
	 var cb=db.subtract(bb);
	 var ab=$hs_int2Wordzh(cb);
	 var Za=$hs_int2Wordzh(ka);
	 var Ya=$hs_int2Wordzh(bb);
	 var $ff=_hs_text_memcpy(Na,Ya,ja,Za,ab);
	 var Ta=[Ra,$ff];
	 var Ua=Ta[0];
	 var Xa=Qa.subtract(la);
	 var Wa=Pa.add(la);
	 var Va=$d(1,[Na,Oa,Wa,Xa],"sat");
	 La.J(Va,Ua);break;
	case 2:
	 var gb=Qa.subtract(la);
	 var fb=Pa.add(la);
	 var eb=$d(1,[Na,Oa,fb,gb],"sat");
	 La.J(eb,Ra);break;
	}
       },[la,ja,ka,La],"$wa1");
       var hb=$f(1,function(ib){
	var jb=$f(1,function(kb){
	 var lb=kb.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(lb.g){
	 case 1:
	  var sb=$hs_int2Wordzh(kb);
	  var rb=sb.and(goog.math.Long.fromBits(0,1073741824));
	  var mb=$hs_word2Intzh(rb);
	  switch(mb.toString()){
	  case "0":
	   var qb=$hs_uncheckedIShiftLzh(kb,goog.math.Long.fromBits(1,0));
	   var nb=$hs_newByteArrayzh(qb,ib);
	   var ob=nb[0],pb=nb[1];
	   Ma.J(pb,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),kb,ob);break;
	  default:
	   $A($$TextziBlazzeziRendererziText$p);
	  }break;
	 case 2:
	  $A($$TextziBlazzeziRendererziText$p);break;
	 }
	},[Ma,ib],"$j");
	var tb=la.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(tb.g){
	case 1:
	 jb.J(la);break;
	case 2:
	 jb.J(goog.math.Long.fromBits(112,0));break;
	}
       },[la,Ma],"$wa9");
       var ub=$f(2,function(vb,wb){
	$M(vb,function(xb){
	 var yb=xb.v[0],zb=xb.v[1],Ab=xb.v[2],Bb=xb.v[3];
	 var Cb=la.lessThanOrEqual(Bb)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Cb.g){
	 case 1:
	  $M(Ab,function(Db){
	   switch(Db.toString()){
	   case "0":
	    hb.J(wb);break;
	   default:
	    var Eb=$t(function(){
	     hb.C([wb],function(Fb){
	      var Gb=Fb[1];
	      $A(Gb);
	     },[]);
	    },[hb,wb],"sat");
	    var Hb=$d(1,[yb,zb,Db],"sat");
	    var Ib=$d(2,[Hb,Eb],"sat");
	    $r([wb,Ib]);
	   }
	  },[hb,wb,yb,zb]);break;
	 case 2:
	  Ma.J(yb,zb,Ab,Bb,wb);break;
	 }
	},[la,Ma,hb,wb]);
       },[la,Ma,hb],"sat");
       $A(ub);
      },[la,ja,ka],"sat");
      $A(Ka);break;
     }break;
    case 2:
     $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
    }
   },[]);break;
  case 5:
   var Jb=r9.v[0];
   $M(Jb,function(Kb){
    switch(Kb.g){
    case 2:
     var Lb=Kb.v[0];
     $$DataziTextziLazzyziBuilder_fromString.J(Lb);break;
    case 3:
     var Mb=Kb.v[0];
     $$DataziTextziLazzyziBuilder_fromText.J(Mb);break;
    default:
     $$TextziBlazzeziRendererziText_fromChoiceString.J(p9,Kb);
    }
   },[p9]);break;
  case 6:
   var Nb=r9.v[0];
   $M(Nb,function(Ob){
    switch(Ob.g){
    case 2:
     var Pb=Ob.v[0];
     $$DataziList_tails.C([Pb],function(Qb){
      $$GHCziList_any.C([$$TextziBlazzeziRendererziText$l,Qb],function(Rb){
       switch(Rb.g){
       case 1:
	$$DataziTextziLazzyziBuilder_fromString.J(Pb);break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[Pb]);
     },[Pb]);break;
    case 3:
     var Sb=Ob.v[0];
     $M($$TextziBlazzeziRendererziText$k,function(Tb){
      var Ub=Tb.v[0],Vb=Tb.v[1],Wb=Tb.v[2];
      var Xb=Wb.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Xb.g){
      case 1:
       var Zb=Vb.add(Wb);
       var Yb=$f(2,function(ac,bc){
	var cc=bc.greaterThanOrEqual(Zb)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(cc.g){
	case 1:
	 var oc=$hs_indexWord16Arrayzh(Ub,bc);
	 var dc=$hs_geWordzh(oc,goog.math.Long.fromBits(55296,0));
	 switch(dc.g){
	 case 1:
	  var ec=ac.greaterThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(ec.g){
	  case 1:
	   var gc=bc.add(goog.math.Long.fromBits(1,0));
	   var fc=ac.add(goog.math.Long.fromBits(1,0));
	   Yb.J(fc,gc);break;
	  case 2:
	   $R(1,[],"False");break;
	  }break;
	 case 2:
	  var hc=$hs_leWordzh(oc,goog.math.Long.fromBits(56319,0));
	  switch(hc.g){
	  case 1:
	   var ic=ac.greaterThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(ic.g){
	   case 1:
	    var kc=bc.add(goog.math.Long.fromBits(1,0));
	    var jc=ac.add(goog.math.Long.fromBits(1,0));
	    Yb.J(jc,kc);break;
	   case 2:
	    $R(1,[],"False");break;
	   }break;
	  case 2:
	   var lc=ac.greaterThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(lc.g){
	   case 1:
	    var nc=bc.add(goog.math.Long.fromBits(2,0));
	    var mc=ac.add(goog.math.Long.fromBits(1,0));
	    Yb.J(mc,nc);break;
	   case 2:
	    $R(1,[],"False");break;
	   }break;
	  }break;
	 }break;
	case 2:
	 $M(ac,function(pc){
	  switch(pc.toString()){
	  case "1":
	   $R(2,[],"True");break;
	  default:
	   $R(1,[],"False");
	  }
	 },[]);break;
	}
       },[Zb,Ub],"$wloop");
       Yb.C([goog.math.Long.fromBits(0,0),Vb],function(qc){
	switch(qc.g){
	case 1:
	 $M(Sb,function(rc){
	  var sc=rc.v[0],tc=rc.v[1],uc=rc.v[2];
	  $$DataziTextziSearch_zdwindices.C([Ub,Vb,Wb,sc,tc,uc],function(vc){
	   switch(vc.g){
	   case 1:
	    var wc=uc.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(wc.g){
	    case 1:
	     var xc=uc.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(xc.g){
	     case 1:
	      var yc=$f(3,function(zc,Ac,Bc){
	       $M(Ac,function(Cc){
		var Dc=Cc.v[0],Ec=Cc.v[1],Fc=Cc.v[2],Gc=Cc.v[3];
		$M(Fc,function(Hc){
		 switch(Hc.toString()){
		 case "0":
		  var Pc=$d(1,[Dc,Ec,goog.math.Long.fromBits(0,0),Gc],"sat");
		  zc.C([Pc,Bc],function(Qc){
		   var Rc=Qc[0],Sc=Qc[1];
		   var Tc=$d(2,[rc,Sc],"sat");
		   $r([Rc,Tc]);
		  },[rc]);break;
		 default:
		  var Ic=$t(function(){
		   var Kc=Ec.add(Hc);
		   var Jc=$d(1,[Dc,Kc,goog.math.Long.fromBits(0,0),Gc],"sat");
		   zc.C([Jc,Bc],function(Lc){
		    var Mc=Lc[1];
		    $R(2,[rc,Mc],":");
		   },[rc]);
		  },[Bc,Dc,Ec,Hc,Gc,zc,rc],"sat");
		  var Nc=$d(1,[Dc,Ec,Hc],"sat");
		  var Oc=$d(2,[Nc,Ic],"sat");
		  $r([Bc,Oc]);
		 }
		},[Bc,Dc,Ec,Gc,zc,rc]);
	       },[Bc,zc,rc]);
	      },[rc],"sat");
	      $A(yc);break;
	     case 2:
	      var Uc=$f(1,function(Vc){
	       var Wc=$f(5,function(Xc,Yc,Zc,ad,bd){
		var ld=Yc.add(Zc);
		var nd=uc.add(ld);
		var cd=ld.greaterThanOrEqual(nd)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(cd.g){
		case 1:
		 var md=nd.subtract(ld);
		 var kd=$hs_int2Wordzh(md);
		 var jd=$hs_int2Wordzh(tc);
		 var id=$hs_int2Wordzh(ld);
		 var $ff=_hs_text_memcpy(Xc,id,sc,jd,kd);
		 var dd=[bd,$ff];
		 var ed=dd[0];
		 var hd=ad.subtract(uc);
		 var gd=Zc.add(uc);
		 var fd=$d(1,[Xc,Yc,gd,hd],"sat");
		 Vc.J(fd,ed);break;
		case 2:
		 var qd=ad.subtract(uc);
		 var pd=Zc.add(uc);
		 var od=$d(1,[Xc,Yc,pd,qd],"sat");
		 Vc.J(od,bd);break;
		}
	       },[sc,tc,uc,Vc],"$wa1");
	       var rd=$f(1,function(sd){
		var td=$f(1,function(ud){
		 var vd=ud.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(vd.g){
		 case 1:
		  var Cd=$hs_int2Wordzh(ud);
		  var Bd=Cd.and(goog.math.Long.fromBits(0,1073741824));
		  var wd=$hs_word2Intzh(Bd);
		  switch(wd.toString()){
		  case "0":
		   var Ad=$hs_uncheckedIShiftLzh(ud,goog.math.Long.fromBits(1,0));
		   var xd=$hs_newByteArrayzh(Ad,sd);
		   var yd=xd[0],zd=xd[1];
		   Wc.J(zd,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),ud,yd);break;
		  default:
		   $A($$TextziBlazzeziRendererziText$o);
		  }break;
		 case 2:
		  $A($$TextziBlazzeziRendererziText$o);break;
		 }
		},[Wc,sd],"$j");
		var Dd=uc.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Dd.g){
		case 1:
		 td.J(uc);break;
		case 2:
		 td.J(goog.math.Long.fromBits(112,0));break;
		}
	       },[uc,Wc],"$wa9");
	       var Ed=$f(2,function(Fd,Gd){
		$M(Fd,function(Hd){
		 var Id=Hd.v[0],Jd=Hd.v[1],Kd=Hd.v[2],Ld=Hd.v[3];
		 var Md=uc.lessThanOrEqual(Ld)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Md.g){
		 case 1:
		  $M(Kd,function(Nd){
		   switch(Nd.toString()){
		   case "0":
		    rd.J(Gd);break;
		   default:
		    var Od=$t(function(){
		     rd.C([Gd],function(Pd){
		      var Qd=Pd[1];
		      $A(Qd);
		     },[]);
		    },[rd,Gd],"sat");
		    var Rd=$d(1,[Id,Jd,Nd],"sat");
		    var Sd=$d(2,[Rd,Od],"sat");
		    $r([Gd,Sd]);
		   }
		  },[rd,Gd,Id,Jd]);break;
		 case 2:
		  Wc.J(Id,Jd,Kd,Ld,Gd);break;
		 }
		},[uc,Wc,rd,Gd]);
	       },[uc,Wc,rd],"sat");
	       $A(Ed);
	      },[sc,tc,uc],"sat");
	      $A(Uc);break;
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	    }break;
	   case 2:
	    $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	   }
	  },[sc,tc,uc,rc]);
	 },[Wb,Vb,Ub]);break;
	case 2:
	 $M(Sb,function(Td){
	  var Ud=Td.v[0],Vd=Td.v[1],Wd=Td.v[2];
	  var qe=Vd.add(Wd);
	  var Xd=$t(function(){
	   var he=$hs_indexWord16Arrayzh(Ub,Vb);
	   var Yd=$hs_ltWordzh(he,goog.math.Long.fromBits(55296,0));
	   switch(Yd.g){
	   case 1:
	    var Zd=$hs_gtWordzh(he,goog.math.Long.fromBits(56319,0));
	    switch(Zd.g){
	    case 1:
	     var ke=Vb.add(goog.math.Long.fromBits(1,0));
	     var je=$hs_indexWord16Arrayzh(Ub,ke);
	     var ie=$hs_word2Intzh(je);
	     var ee=ie.subtract(goog.math.Long.fromBits(56320,0));
	     var ge=$hs_word2Intzh(he);
	     var fe=ge.subtract(goog.math.Long.fromBits(55296,0));
	     var de=$hs_uncheckedIShiftLzh(fe,goog.math.Long.fromBits(10,0));
	     var ce=de.add(ee);
	     var be=ce.add(goog.math.Long.fromBits(65536,0));
	     var ae=$hs_chrzh(be);
	     $R(1,[ae],"C#");break;
	    case 2:
	     var me=$hs_word2Intzh(he);
	     var le=$hs_chrzh(me);
	     $R(1,[le],"C#");break;
	    }break;
	   case 2:
	    var oe=$hs_word2Intzh(he);
	    var ne=$hs_chrzh(oe);
	    $R(1,[ne],"C#");break;
	   }
	  },[Vb,Ub],"w");
	  var pe=$f(1,function(re){
	   var se=re.greaterThanOrEqual(qe)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(se.g){
	   case 1:
	    var Ae=$hs_indexWord16Arrayzh(Ud,re);
	    var te=$hs_geWordzh(Ae,goog.math.Long.fromBits(55296,0));
	    switch(te.g){
	    case 1:
	     $M(Xd,function(ue){
	      var ve=ue.v[0];
	      var ze=$hs_word2Intzh(Ae);
	      var ye=$hs_chrzh(ze);
	      var we=ye==ve?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(we.g){
	      case 1:
	       var xe=re.add(goog.math.Long.fromBits(1,0));
	       pe.J(xe);break;
	      case 2:
	       $R(2,[],"True");break;
	      }
	     },[re,Ae,pe]);break;
	    case 2:
	     var Be=$hs_leWordzh(Ae,goog.math.Long.fromBits(56319,0));
	     switch(Be.g){
	     case 1:
	      $M(Xd,function(Ce){
	       var De=Ce.v[0];
	       var He=$hs_word2Intzh(Ae);
	       var Ge=$hs_chrzh(He);
	       var Ee=Ge==De?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Ee.g){
	       case 1:
		var Fe=re.add(goog.math.Long.fromBits(1,0));
		pe.J(Fe);break;
	       case 2:
		$R(2,[],"True");break;
	       }
	      },[re,Ae,pe]);break;
	     case 2:
	      $M(Xd,function(Ie){
	       var Je=Ie.v[0];
	       var Ve=re.add(goog.math.Long.fromBits(1,0));
	       var Ue=$hs_indexWord16Arrayzh(Ud,Ve);
	       var Te=$hs_word2Intzh(Ue);
	       var Qe=Te.subtract(goog.math.Long.fromBits(56320,0));
	       var Se=$hs_word2Intzh(Ae);
	       var Re=Se.subtract(goog.math.Long.fromBits(55296,0));
	       var Pe=$hs_uncheckedIShiftLzh(Re,goog.math.Long.fromBits(10,0));
	       var Oe=Pe.add(Qe);
	       var Ne=Oe.add(goog.math.Long.fromBits(65536,0));
	       var Me=$hs_chrzh(Ne);
	       var Ke=Me==Je?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Ke.g){
	       case 1:
		var Le=re.add(goog.math.Long.fromBits(2,0));
		pe.J(Le);break;
	       case 2:
		$R(2,[],"True");break;
	       }
	      },[re,Ud,Ae,pe]);break;
	     }break;
	    }break;
	   case 2:
	    $R(1,[],"False");break;
	   }
	  },[qe,Xd,Ud],"$wloop_elem");
	  pe.C([Vd],function(We){
	   switch(We.g){
	   case 1:
	    var Xe=Wd.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Xe.g){
	    case 1:
	     var Ye=Wd.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Ye.g){
	     case 1:
	      var Ze=$f(3,function(af,bf,cf){
	       $M(bf,function(df){
		var ef=df.v[0],ff=df.v[1],gf=df.v[2],hf=df.v[3];
		$M(gf,function(jf){
		 switch(jf.toString()){
		 case "0":
		  var rf=$d(1,[ef,ff,goog.math.Long.fromBits(0,0),hf],"sat");
		  af.C([rf,cf],function(sf){
		   var tf=sf[0],uf=sf[1];
		   var vf=$d(2,[Td,uf],"sat");
		   $r([tf,vf]);
		  },[Td]);break;
		 default:
		  var kf=$t(function(){
		   var mf=ff.add(jf);
		   var lf=$d(1,[ef,mf,goog.math.Long.fromBits(0,0),hf],"sat");
		   af.C([lf,cf],function(nf){
		    var of=nf[1];
		    $R(2,[Td,of],":");
		   },[Td]);
		  },[cf,ef,ff,jf,hf,af,Td],"sat");
		  var pf=$d(1,[ef,ff,jf],"sat");
		  var qf=$d(2,[pf,kf],"sat");
		  $r([cf,qf]);
		 }
		},[cf,ef,ff,hf,af,Td]);
	       },[cf,af,Td]);
	      },[Td],"sat");
	      $A(Ze);break;
	     case 2:
	      var wf=$f(1,function(xf){
	       var yf=$f(5,function(zf,Af,Bf,Cf,Df){
		var Nf=Af.add(Bf);
		var Pf=Wd.add(Nf);
		var Ef=Nf.greaterThanOrEqual(Pf)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Ef.g){
		case 1:
		 var Of=Pf.subtract(Nf);
		 var Mf=$hs_int2Wordzh(Of);
		 var Lf=$hs_int2Wordzh(Vd);
		 var Kf=$hs_int2Wordzh(Nf);
		 var $ff=_hs_text_memcpy(zf,Kf,Ud,Lf,Mf);
		 var Ff=[Df,$ff];
		 var Gf=Ff[0];
		 var Jf=Cf.subtract(Wd);
		 var If=Bf.add(Wd);
		 var Hf=$d(1,[zf,Af,If,Jf],"sat");
		 xf.J(Hf,Gf);break;
		case 2:
		 var Sf=Cf.subtract(Wd);
		 var Rf=Bf.add(Wd);
		 var Qf=$d(1,[zf,Af,Rf,Sf],"sat");
		 xf.J(Qf,Df);break;
		}
	       },[Vd,Wd,Ud,xf],"$wa1");
	       var Tf=$f(1,function(Uf){
		var Vf=$f(1,function(Wf){
		 var Xf=Wf.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Xf.g){
		 case 1:
		  var eg=$hs_int2Wordzh(Wf);
		  var dg=eg.and(goog.math.Long.fromBits(0,1073741824));
		  var Yf=$hs_word2Intzh(dg);
		  switch(Yf.toString()){
		  case "0":
		   var cg=$hs_uncheckedIShiftLzh(Wf,goog.math.Long.fromBits(1,0));
		   var Zf=$hs_newByteArrayzh(cg,Uf);
		   var ag=Zf[0],bg=Zf[1];
		   yf.J(bg,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),Wf,ag);break;
		  default:
		   $A($$TextziBlazzeziRendererziText$n);
		  }break;
		 case 2:
		  $A($$TextziBlazzeziRendererziText$n);break;
		 }
		},[yf,Uf],"$j");
		var fg=Wd.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(fg.g){
		case 1:
		 Vf.J(Wd);break;
		case 2:
		 Vf.J(goog.math.Long.fromBits(112,0));break;
		}
	       },[Wd,yf],"$wa9");
	       var gg=$f(2,function(hg,ig){
		$M(hg,function(jg){
		 var kg=jg.v[0],lg=jg.v[1],mg=jg.v[2],ng=jg.v[3];
		 var og=Wd.lessThanOrEqual(ng)?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(og.g){
		 case 1:
		  $M(mg,function(pg){
		   switch(pg.toString()){
		   case "0":
		    Tf.J(ig);break;
		   default:
		    var qg=$t(function(){
		     Tf.C([ig],function(rg){
		      var sg=rg[1];
		      $A(sg);
		     },[]);
		    },[Tf,ig],"sat");
		    var tg=$d(1,[kg,lg,pg],"sat");
		    var ug=$d(2,[tg,qg],"sat");
		    $r([ig,ug]);
		   }
		  },[Tf,ig,kg,lg]);break;
		 case 2:
		  yf.J(kg,lg,mg,ng,ig);break;
		 }
		},[Wd,yf,Tf,ig]);
	       },[Wd,yf,Tf],"sat");
	       $A(gg);
	      },[Vd,Wd,Ud],"sat");
	      $A(wf);break;
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	    }break;
	   case 2:
	    $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	   }
	  },[Vd,Wd,Ud,Td]);
	 },[Vb,Ub]);break;
	}
       },[Wb,Vb,Ub,Sb]);break;
      case 2:
       $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
      }
     },[Sb]);break;
    case 4:
     var vg=Ob.v[0];
     $M($$TextziBlazzeziRendererziText$j,function(wg){
      var xg=wg.v[0],yg=wg.v[1],zg=wg.v[2],Ag=wg.v[3];
      $M(vg,function(Bg){
       var Cg=Bg.v[0],Dg=Bg.v[1],Eg=Bg.v[2],Fg=Bg.v[3];
       $$DataziByteString_zdwfindSubstrings.C([xg,yg,zg,Ag,Cg,Dg,Eg,Fg],function(Gg){
	switch(Gg.g){
	case 1:
	 p9.C([Bg],function(Hg){
	  var Ig=Hg.v[0],Jg=Hg.v[1],Kg=Hg.v[2];
	  var Lg=Kg.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Lg.g){
	  case 1:
	   var Mg=Kg.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Mg.g){
	   case 1:
	    var Ng=$f(3,function(Og,Pg,Qg){
	     $M(Pg,function(Rg){
	      var Sg=Rg.v[0],Tg=Rg.v[1],Ug=Rg.v[2],Vg=Rg.v[3];
	      $M(Ug,function(Wg){
	       switch(Wg.toString()){
	       case "0":
		var eh=$d(1,[Sg,Tg,goog.math.Long.fromBits(0,0),Vg],"sat");
		Og.C([eh,Qg],function(fh){
		 var gh=fh[0],hh=fh[1];
		 var ih=$d(2,[Hg,hh],"sat");
		 $r([gh,ih]);
		},[Hg]);break;
	       default:
		var Xg=$t(function(){
		 var Zg=Tg.add(Wg);
		 var Yg=$d(1,[Sg,Zg,goog.math.Long.fromBits(0,0),Vg],"sat");
		 Og.C([Yg,Qg],function(ah){
		  var bh=ah[1];
		  $R(2,[Hg,bh],":");
		 },[Hg]);
		},[Qg,Sg,Tg,Wg,Vg,Og,Hg],"sat");
		var ch=$d(1,[Sg,Tg,Wg],"sat");
		var dh=$d(2,[ch,Xg],"sat");
		$r([Qg,dh]);
	       }
	      },[Qg,Sg,Tg,Vg,Og,Hg]);
	     },[Qg,Og,Hg]);
	    },[Hg],"sat");
	    $A(Ng);break;
	   case 2:
	    var jh=$f(1,function(kh){
	     var lh=$f(5,function(mh,nh,oh,ph,qh){
	      var Ah=nh.add(oh);
	      var Ch=Kg.add(Ah);
	      var rh=Ah.greaterThanOrEqual(Ch)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(rh.g){
	      case 1:
	       var Bh=Ch.subtract(Ah);
	       var zh=$hs_int2Wordzh(Bh);
	       var yh=$hs_int2Wordzh(Jg);
	       var xh=$hs_int2Wordzh(Ah);
	       var $ff=_hs_text_memcpy(mh,xh,Ig,yh,zh);
	       var sh=[qh,$ff];
	       var th=sh[0];
	       var wh=ph.subtract(Kg);
	       var vh=oh.add(Kg);
	       var uh=$d(1,[mh,nh,vh,wh],"sat");
	       kh.J(uh,th);break;
	      case 2:
	       var Fh=ph.subtract(Kg);
	       var Eh=oh.add(Kg);
	       var Dh=$d(1,[mh,nh,Eh,Fh],"sat");
	       kh.J(Dh,qh);break;
	      }
	     },[Kg,Ig,Jg,kh],"$wa1");
	     var Gh=$f(1,function(Hh){
	      var Ih=$f(1,function(Jh){
	       var Kh=Jh.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Kh.g){
	       case 1:
		var Rh=$hs_int2Wordzh(Jh);
		var Qh=Rh.and(goog.math.Long.fromBits(0,1073741824));
		var Lh=$hs_word2Intzh(Qh);
		switch(Lh.toString()){
		case "0":
		 var Ph=$hs_uncheckedIShiftLzh(Jh,goog.math.Long.fromBits(1,0));
		 var Mh=$hs_newByteArrayzh(Ph,Hh);
		 var Nh=Mh[0],Oh=Mh[1];
		 lh.J(Oh,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),Jh,Nh);break;
		default:
		 $A($$TextziBlazzeziRendererziText$m);
		}break;
	       case 2:
		$A($$TextziBlazzeziRendererziText$m);break;
	       }
	      },[lh,Hh],"$j");
	      var Sh=Kg.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Sh.g){
	      case 1:
	       Ih.J(Kg);break;
	      case 2:
	       Ih.J(goog.math.Long.fromBits(112,0));break;
	      }
	     },[Kg,lh],"$wa9");
	     var Th=$f(2,function(Uh,Vh){
	      $M(Uh,function(Wh){
	       var Xh=Wh.v[0],Yh=Wh.v[1],Zh=Wh.v[2],ai=Wh.v[3];
	       var bi=Kg.lessThanOrEqual(ai)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(bi.g){
	       case 1:
		$M(Zh,function(ci){
		 switch(ci.toString()){
		 case "0":
		  Gh.J(Vh);break;
		 default:
		  var di=$t(function(){
		   Gh.C([Vh],function(ei){
		    var fi=ei[1];
		    $A(fi);
		   },[]);
		  },[Gh,Vh],"sat");
		  var gi=$d(1,[Xh,Yh,ci],"sat");
		  var hi=$d(2,[gi,di],"sat");
		  $r([Vh,hi]);
		 }
		},[Gh,Vh,Xh,Yh]);break;
	       case 2:
		lh.J(Xh,Yh,Zh,ai,Vh);break;
	       }
	      },[Kg,lh,Gh,Vh]);
	     },[Kg,lh,Gh],"sat");
	     $A(Th);
	    },[Kg,Ig,Jg],"sat");
	    $A(jh);break;
	   }break;
	  case 2:
	   $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	  }
	 },[]);break;
	case 2:
	 $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	}
       },[p9,Bg]);
      },[p9,xg,yg,zg,Ag]);
     },[p9,vg]);break;
    default:
     $$TextziBlazzeziRendererziText_fromChoiceString.J(p9,Ob);
    }
   },[p9]);break;
  case 7:
   var ii=r9.v[0],ji=r9.v[1];
   var ki=$t(function(){
    $$TextziBlazzeziRendererziText_fromChoiceString.J(p9,ji);
   },[p9,ji],"g");
   var li=$t(function(){
    $$TextziBlazzeziRendererziText_fromChoiceString.J(p9,ii);
   },[p9,ii],"f");
   var mi=$f(1,function(ni){
    var oi=$t(function(){
     ki.J(ni);
    },[ki,ni],"sat");
    li.J(oi);
   },[ki,li],"sat");
   $A(mi);break;
  case 8:
   $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
  }
 },[p9]);
},[],"at src/Text/Blaze/Renderer/Text.hs:49:1");
var $$TextziBlazzeziRendererziText_renderMarkupWith=$f(2,function(Pw,Qw){
 var Rw=$f(2,function(Sw,Tw){
  $M(Tw,function(Uw){
   switch(Uw.g){
   case 1:
    var Vw=Uw.v[1],Ww=Uw.v[2],Xw=Uw.v[3];
    var Yw=$t(function(){
     $M(Ww,function(Zw){
      var ax=Zw.v[2];
      $M(ax,function(bx){
       var cx=bx.v[0],dx=bx.v[1],ex=bx.v[2];
       var fx=ex.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(fx.g){
       case 1:
	var gx=ex.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(gx.g){
	case 1:
	 var hx=$f(3,function(ix,jx,kx){
	  $M(jx,function(lx){
	   var mx=lx.v[0],nx=lx.v[1],ox=lx.v[2],px=lx.v[3];
	   $M(ox,function(qx){
	    switch(qx.toString()){
	    case "0":
	     var yx=$d(1,[mx,nx,goog.math.Long.fromBits(0,0),px],"sat");
	     ix.C([yx,kx],function(zx){
	      var Ax=zx[0],Bx=zx[1];
	      var Cx=$d(2,[bx,Bx],"sat");
	      $r([Ax,Cx]);
	     },[bx]);break;
	    default:
	     var rx=$t(function(){
	      var tx=nx.add(qx);
	      var sx=$d(1,[mx,tx,goog.math.Long.fromBits(0,0),px],"sat");
	      ix.C([sx,kx],function(ux){
	       var vx=ux[1];
	       $R(2,[bx,vx],":");
	      },[bx]);
	     },[kx,mx,nx,qx,px,ix,bx],"sat");
	     var wx=$d(1,[mx,nx,qx],"sat");
	     var xx=$d(2,[wx,rx],"sat");
	     $r([kx,xx]);
	    }
	   },[kx,mx,nx,px,ix,bx]);
	  },[kx,ix,bx]);
	 },[bx],"sat");
	 $A(hx);break;
	case 2:
	 var Dx=$f(1,function(Ex){
	  var Fx=$f(5,function(Gx,Hx,Ix,Jx,Kx){
	   var Ux=Hx.add(Ix);
	   var Wx=ex.add(Ux);
	   var Lx=Ux.greaterThanOrEqual(Wx)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Lx.g){
	   case 1:
	    var Vx=Wx.subtract(Ux);
	    var Tx=$hs_int2Wordzh(Vx);
	    var Sx=$hs_int2Wordzh(dx);
	    var Rx=$hs_int2Wordzh(Ux);
	    var $ff=_hs_text_memcpy(Gx,Rx,cx,Sx,Tx);
	    var Mx=[Kx,$ff];
	    var Nx=Mx[0];
	    var Qx=Jx.subtract(ex);
	    var Px=Ix.add(ex);
	    var Ox=$d(1,[Gx,Hx,Px,Qx],"sat");
	    Ex.J(Ox,Nx);break;
	   case 2:
	    var Zx=Jx.subtract(ex);
	    var Yx=Ix.add(ex);
	    var Xx=$d(1,[Gx,Hx,Yx,Zx],"sat");
	    Ex.J(Xx,Kx);break;
	   }
	  },[ex,cx,dx,Ex],"$wa1");
	  var ay=$f(1,function(by){
	   var cy=$f(1,function(dy){
	    var ey=dy.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(ey.g){
	    case 1:
	     var ly=$hs_int2Wordzh(dy);
	     var ky=ly.and(goog.math.Long.fromBits(0,1073741824));
	     var fy=$hs_word2Intzh(ky);
	     switch(fy.toString()){
	     case "0":
	      var jy=$hs_uncheckedIShiftLzh(dy,goog.math.Long.fromBits(1,0));
	      var gy=$hs_newByteArrayzh(jy,by);
	      var hy=gy[0],iy=gy[1];
	      Fx.J(iy,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),dy,hy);break;
	     default:
	      $A($$TextziBlazzeziRendererziText$M);
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText$M);break;
	    }
	   },[Fx,by],"$j");
	   var my=ex.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(my.g){
	   case 1:
	    cy.J(ex);break;
	   case 2:
	    cy.J(goog.math.Long.fromBits(112,0));break;
	   }
	  },[ex,Fx],"$wa9");
	  var ny=$f(2,function(oy,py){
	   $M(oy,function(qy){
	    var ry=qy.v[0],sy=qy.v[1],ty=qy.v[2],uy=qy.v[3];
	    var vy=ex.lessThanOrEqual(uy)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(vy.g){
	    case 1:
	     $M(ty,function(wy){
	      switch(wy.toString()){
	      case "0":
	       ay.J(py);break;
	      default:
	       var xy=$t(function(){
		ay.C([py],function(yy){
		 var zy=yy[1];
		 $A(zy);
		},[]);
	       },[ay,py],"sat");
	       var Ay=$d(1,[ry,sy,wy],"sat");
	       var By=$d(2,[Ay,xy],"sat");
	       $r([py,By]);
	      }
	     },[ay,py,ry,sy]);break;
	    case 2:
	     Fx.J(ry,sy,ty,uy,py);break;
	    }
	   },[ex,Fx,ay,py]);
	  },[ex,Fx,ay],"sat");
	  $A(ny);
	 },[ex,cx,dx],"sat");
	 $A(Dx);break;
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[]);
     },[]);
    },[Ww],"g");
    var Cy=$t(function(){
     Rw.J($$TextziBlazzeziRendererziText_renderMarkupBuilder1,Xw);
    },[Xw,Rw],"g1");
    var Dy=$t(function(){
     $M(Vw,function(Ey){
      var Fy=Ey.v[2];
      $M(Fy,function(Gy){
       var Hy=Gy.v[0],Iy=Gy.v[1],Jy=Gy.v[2];
       var Ky=Jy.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Ky.g){
       case 1:
	var Ly=Jy.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Ly.g){
	case 1:
	 var My=$f(3,function(Ny,Oy,Py){
	  $M(Oy,function(Qy){
	   var Ry=Qy.v[0],Sy=Qy.v[1],Ty=Qy.v[2],Uy=Qy.v[3];
	   $M(Ty,function(Vy){
	    switch(Vy.toString()){
	    case "0":
	     var dz=$d(1,[Ry,Sy,goog.math.Long.fromBits(0,0),Uy],"sat");
	     Ny.C([dz,Py],function(ez){
	      var fz=ez[0],gz=ez[1];
	      var hz=$d(2,[Gy,gz],"sat");
	      $r([fz,hz]);
	     },[Gy]);break;
	    default:
	     var Wy=$t(function(){
	      var Yy=Sy.add(Vy);
	      var Xy=$d(1,[Ry,Yy,goog.math.Long.fromBits(0,0),Uy],"sat");
	      Ny.C([Xy,Py],function(Zy){
	       var az=Zy[1];
	       $R(2,[Gy,az],":");
	      },[Gy]);
	     },[Py,Ry,Sy,Vy,Uy,Ny,Gy],"sat");
	     var bz=$d(1,[Ry,Sy,Vy],"sat");
	     var cz=$d(2,[bz,Wy],"sat");
	     $r([Py,cz]);
	    }
	   },[Py,Ry,Sy,Uy,Ny,Gy]);
	  },[Py,Ny,Gy]);
	 },[Gy],"sat");
	 $A(My);break;
	case 2:
	 var iz=$f(1,function(jz){
	  var kz=$f(5,function(lz,mz,nz,oz,pz){
	   var zz=mz.add(nz);
	   var Bz=Jy.add(zz);
	   var qz=zz.greaterThanOrEqual(Bz)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(qz.g){
	   case 1:
	    var Az=Bz.subtract(zz);
	    var yz=$hs_int2Wordzh(Az);
	    var xz=$hs_int2Wordzh(Iy);
	    var wz=$hs_int2Wordzh(zz);
	    var $ff=_hs_text_memcpy(lz,wz,Hy,xz,yz);
	    var rz=[pz,$ff];
	    var sz=rz[0];
	    var vz=oz.subtract(Jy);
	    var uz=nz.add(Jy);
	    var tz=$d(1,[lz,mz,uz,vz],"sat");
	    jz.J(tz,sz);break;
	   case 2:
	    var Ez=oz.subtract(Jy);
	    var Dz=nz.add(Jy);
	    var Cz=$d(1,[lz,mz,Dz,Ez],"sat");
	    jz.J(Cz,pz);break;
	   }
	  },[Jy,Hy,Iy,jz],"$wa1");
	  var Fz=$f(1,function(Gz){
	   var Hz=$f(1,function(Iz){
	    var Jz=Iz.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Jz.g){
	    case 1:
	     var Qz=$hs_int2Wordzh(Iz);
	     var Pz=Qz.and(goog.math.Long.fromBits(0,1073741824));
	     var Kz=$hs_word2Intzh(Pz);
	     switch(Kz.toString()){
	     case "0":
	      var Oz=$hs_uncheckedIShiftLzh(Iz,goog.math.Long.fromBits(1,0));
	      var Lz=$hs_newByteArrayzh(Oz,Gz);
	      var Mz=Lz[0],Nz=Lz[1];
	      kz.J(Nz,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),Iz,Mz);break;
	     default:
	      $A($$TextziBlazzeziRendererziText$L);
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText$L);break;
	    }
	   },[kz,Gz],"$j");
	   var Rz=Jy.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Rz.g){
	   case 1:
	    Hz.J(Jy);break;
	   case 2:
	    Hz.J(goog.math.Long.fromBits(112,0));break;
	   }
	  },[Jy,kz],"$wa9");
	  var Sz=$f(2,function(Tz,Uz){
	   $M(Tz,function(Vz){
	    var Wz=Vz.v[0],Xz=Vz.v[1],Yz=Vz.v[2],Zz=Vz.v[3];
	    var aA=Jy.lessThanOrEqual(Zz)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(aA.g){
	    case 1:
	     $M(Yz,function(bA){
	      switch(bA.toString()){
	      case "0":
	       Fz.J(Uz);break;
	      default:
	       var cA=$t(function(){
		Fz.C([Uz],function(dA){
		 var eA=dA[1];
		 $A(eA);
		},[]);
	       },[Fz,Uz],"sat");
	       var fA=$d(1,[Wz,Xz,bA],"sat");
	       var gA=$d(2,[fA,cA],"sat");
	       $r([Uz,gA]);
	      }
	     },[Fz,Uz,Wz,Xz]);break;
	    case 2:
	     kz.J(Wz,Xz,Yz,Zz,Uz);break;
	    }
	   },[Jy,kz,Fz,Uz]);
	  },[Jy,kz,Fz],"sat");
	  $A(Sz);
	 },[Jy,Hy,Iy],"sat");
	 $A(iz);break;
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[]);
     },[]);
    },[Vw],"f");
    var hA=$f(1,function(iA){
     var jA=$t(function(){
      var kA=$t(function(){
       var lA=$t(function(){
	Yw.J(iA);
       },[Yw,iA],"sat");
       Cy.J(lA);
      },[Yw,Cy,iA],"x1");
      var mA=$f(2,function(nA,oA){
       $M(nA,function(pA){
	var qA=pA.v[0],rA=pA.v[1],sA=pA.v[2],tA=pA.v[3];
	var uA=goog.math.Long.fromBits(2,0).lessThanOrEqual(tA)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(uA.g){
	case 1:
	 $M(sA,function(vA){
	  switch(vA.toString()){
	  case "0":
	   var GA=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),oA);
	   var HA=GA[0],IA=GA[1];
	   var KA=$hs_writeWord16Arrayzh(IA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(62,0),HA);
	   var JA=$d(1,[IA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	   kA.J(JA,KA);break;
	  default:
	   var wA=$t(function(){
	    var xA=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),oA);
	    var yA=xA[0],zA=xA[1];
	    var DA=$hs_writeWord16Arrayzh(zA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(62,0),yA);
	    var AA=$d(1,[zA,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	    kA.C([AA,DA],function(BA){
	     var CA=BA[1];
	     $A(CA);
	    },[]);
	   },[kA,oA],"sat");
	   var EA=$d(1,[qA,rA,vA],"sat");
	   var FA=$d(2,[EA,wA],"sat");
	   $r([oA,FA]);
	  }
	 },[kA,oA,qA,rA]);break;
	case 2:
	 var PA=rA.add(sA);
	 var OA=$hs_writeWord16Arrayzh(qA,PA,goog.math.Long.fromBits(62,0),oA);
	 var NA=tA.subtract(goog.math.Long.fromBits(1,0));
	 var MA=sA.add(goog.math.Long.fromBits(1,0));
	 var LA=$d(1,[qA,rA,MA,NA],"sat");
	 kA.J(LA,OA);break;
	}
       },[kA,oA]);
      },[kA],"sat");
      Sw.J(mA);
     },[Yw,Cy,iA,Sw],"sat");
     Dy.J(jA);
    },[Yw,Cy,Dy,Sw],"sat");
    $A(hA);break;
   case 2:
    var QA=Uw.v[0],RA=Uw.v[1];
    var SA=$t(function(){
     $$TextziBlazzeziRendererziText_fromChoiceString.J(Pw,QA);
    },[Pw,QA],"g");
    var TA=$t(function(){
     Rw.J($$TextziBlazzeziRendererziText_renderMarkupBuilder1,RA);
    },[Rw,RA],"g1");
    var UA=$t(function(){
     $$TextziBlazzeziRendererziText_fromChoiceString.J(Pw,QA);
    },[Pw,QA],"g2");
    var VA=$f(1,function(WA){
     var XA=$t(function(){
      var YA=$t(function(){
       var ZA=$t(function(){
	var aB=$t(function(){
	 var bB=$f(2,function(cB,dB){
	  $M(cB,function(eB){
	   var fB=eB.v[0],gB=eB.v[1],hB=eB.v[2],iB=eB.v[3];
	   var jB=goog.math.Long.fromBits(2,0).lessThanOrEqual(iB)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(jB.g){
	   case 1:
	    $M(hB,function(kB){
	     switch(kB.toString()){
	     case "0":
	      var vB=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),dB);
	      var wB=vB[0],xB=vB[1];
	      var zB=$hs_writeWord16Arrayzh(xB,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(62,0),wB);
	      var yB=$d(1,[xB,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	      WA.J(yB,zB);break;
	     default:
	      var lB=$t(function(){
	       var mB=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),dB);
	       var nB=mB[0],oB=mB[1];
	       var sB=$hs_writeWord16Arrayzh(oB,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(62,0),nB);
	       var pB=$d(1,[oB,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	       WA.C([pB,sB],function(qB){
		var rB=qB[1];
		$A(rB);
	       },[]);
	      },[dB,WA],"sat");
	      var tB=$d(1,[fB,gB,kB],"sat");
	      var uB=$d(2,[tB,lB],"sat");
	      $r([dB,uB]);
	     }
	    },[dB,fB,gB,WA]);break;
	   case 2:
	    var EB=gB.add(hB);
	    var DB=$hs_writeWord16Arrayzh(fB,EB,goog.math.Long.fromBits(62,0),dB);
	    var CB=iB.subtract(goog.math.Long.fromBits(1,0));
	    var BB=hB.add(goog.math.Long.fromBits(1,0));
	    var AB=$d(1,[fB,gB,BB,CB],"sat");
	    WA.J(AB,DB);break;
	   }
	  },[dB,WA]);
	 },[WA],"sat");
	 SA.J(bB);
	},[SA,WA],"k");
	var FB=$f(6,function(GB,HB,IB,JB,KB,LB){
	 $M(KB,function(MB){
	  switch(MB.g){
	  case 1:
	   var NB=$d(1,[GB,HB,IB,JB],"sat");
	   aB.J(NB,LB);break;
	  case 2:
	   var OB=MB.v[0],PB=MB.v[1];
	   var QB=JB.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(QB.g){
	   case 1:
	    $M(OB,function(RB){
	     var SB=RB.v[0];
	     var lC=$hs_ordzh(SB);
	     var aC=HB.add(IB);
	     var TB=lC.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(TB.g){
	     case 1:
	      var gC=lC.subtract(goog.math.Long.fromBits(65536,0));
	      var kC=$hs_uncheckedIShiftRAzh(gC,goog.math.Long.fromBits(10,0));
	      var jC=kC.add(goog.math.Long.fromBits(55296,0));
	      var iC=$hs_int2Wordzh(jC);
	      var hC=$hs_narrow16Wordzh(iC);
	      var ZB=$hs_writeWord16Arrayzh(GB,aC,hC,LB);
	      var fC=$hs_int2Wordzh(gC);
	      var eC=fC.and(goog.math.Long.fromBits(1023,0));
	      var dC=$hs_word2Intzh(eC);
	      var cC=dC.add(goog.math.Long.fromBits(56320,0));
	      var bC=$hs_int2Wordzh(cC);
	      var YB=$hs_narrow16Wordzh(bC);
	      var XB=aC.add(goog.math.Long.fromBits(1,0));
	      var WB=$hs_writeWord16Arrayzh(GB,XB,YB,ZB);
	      var VB=JB.subtract(goog.math.Long.fromBits(2,0));
	      var UB=IB.add(goog.math.Long.fromBits(2,0));
	      FB.J(GB,HB,UB,VB,PB,WB);break;
	     case 2:
	      var qC=$hs_int2Wordzh(lC);
	      var pC=$hs_narrow16Wordzh(qC);
	      var oC=$hs_writeWord16Arrayzh(GB,aC,pC,LB);
	      var nC=JB.subtract(goog.math.Long.fromBits(1,0));
	      var mC=IB.add(goog.math.Long.fromBits(1,0));
	      FB.J(GB,HB,mC,nC,PB,oC);break;
	     }
	    },[GB,HB,IB,JB,LB,FB,PB]);break;
	   case 2:
	    var rC=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),LB);
	    var sC=rC[0],tC=rC[1];
	    var uC=$t(function(){
	     FB.C([tC,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(112,0),MB,sC],function(vC){
	      var wC=vC[1];
	      $A(wC);
	     },[]);
	    },[FB,sC,tC,MB],"sat");
	    var xC=$d(1,[GB,HB,IB],"sat");
	    var yC=$d(2,[xC,uC],"sat");
	    $r([sC,yC]);break;
	   }break;
	  }
	 },[aB,GB,HB,IB,JB,LB,FB]);
	},[aB],"$wa1");
	var zC=$f(2,function(AC,BC){
	 $M(AC,function(CC){
	  var DC=CC.v[0],EC=CC.v[1],FC=CC.v[2],GC=CC.v[3];
	  FB.J(DC,EC,FC,GC,$$TextziBlazzeziRendererziText$g,BC);
	 },[FB,BC]);
	},[FB],"sat");
	TA.J(zC);
       },[SA,TA,WA],"x2");
       var HC=$f(2,function(IC,JC){
	$M(IC,function(KC){
	 var LC=KC.v[0],MC=KC.v[1],NC=KC.v[2],OC=KC.v[3];
	 var PC=goog.math.Long.fromBits(2,0).lessThanOrEqual(OC)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(PC.g){
	 case 1:
	  $M(NC,function(QC){
	   switch(QC.toString()){
	   case "0":
	    var bD=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),JC);
	    var cD=bD[0],dD=bD[1];
	    var fD=$hs_writeWord16Arrayzh(dD,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(62,0),cD);
	    var eD=$d(1,[dD,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	    ZA.J(eD,fD);break;
	   default:
	    var RC=$t(function(){
	     var SC=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),JC);
	     var TC=SC[0],UC=SC[1];
	     var YC=$hs_writeWord16Arrayzh(UC,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(62,0),TC);
	     var VC=$d(1,[UC,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	     ZA.C([VC,YC],function(WC){
	      var XC=WC[1];
	      $A(XC);
	     },[]);
	    },[ZA,JC],"sat");
	    var ZC=$d(1,[LC,MC,QC],"sat");
	    var aD=$d(2,[ZC,RC],"sat");
	    $r([JC,aD]);
	   }
	  },[ZA,JC,LC,MC]);break;
	 case 2:
	  var kD=MC.add(NC);
	  var jD=$hs_writeWord16Arrayzh(LC,kD,goog.math.Long.fromBits(62,0),JC);
	  var iD=OC.subtract(goog.math.Long.fromBits(1,0));
	  var hD=NC.add(goog.math.Long.fromBits(1,0));
	  var gD=$d(1,[LC,MC,hD,iD],"sat");
	  ZA.J(gD,jD);break;
	 }
	},[ZA,JC]);
       },[ZA],"sat");
       Sw.J(HC);
      },[Sw,SA,TA,WA],"sat");
      UA.J(YA);
     },[Sw,SA,TA,UA,WA],"x1");
     var lD=$f(2,function(mD,nD){
      $M(mD,function(oD){
       var pD=oD.v[0],qD=oD.v[1],rD=oD.v[2],sD=oD.v[3];
       var tD=goog.math.Long.fromBits(2,0).lessThanOrEqual(sD)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(tD.g){
       case 1:
	$M(rD,function(uD){
	 switch(uD.toString()){
	 case "0":
	  var FD=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),nD);
	  var GD=FD[0],HD=FD[1];
	  var JD=$hs_writeWord16Arrayzh(HD,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(60,0),GD);
	  var ID=$d(1,[HD,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	  XA.J(ID,JD);break;
	 default:
	  var vD=$t(function(){
	   var wD=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),nD);
	   var xD=wD[0],yD=wD[1];
	   var CD=$hs_writeWord16Arrayzh(yD,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(60,0),xD);
	   var zD=$d(1,[yD,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	   XA.C([zD,CD],function(AD){
	    var BD=AD[1];
	    $A(BD);
	   },[]);
	  },[XA,nD],"sat");
	  var DD=$d(1,[pD,qD,uD],"sat");
	  var ED=$d(2,[DD,vD],"sat");
	  $r([nD,ED]);
	 }
	},[XA,nD,pD,qD]);break;
       case 2:
	var OD=qD.add(rD);
	var ND=$hs_writeWord16Arrayzh(pD,OD,goog.math.Long.fromBits(60,0),nD);
	var MD=sD.subtract(goog.math.Long.fromBits(1,0));
	var LD=rD.add(goog.math.Long.fromBits(1,0));
	var KD=$d(1,[pD,qD,LD,MD],"sat");
	XA.J(KD,ND);break;
       }
      },[XA,nD]);
     },[XA],"sat");
     $A(lD);
    },[Sw,SA,TA,UA],"sat");
    $A(VA);break;
   case 3:
    var PD=Uw.v[1],QD=Uw.v[2];
    var RD=$t(function(){
     $M(QD,function(SD){
      var TD=SD.v[2];
      $M(TD,function(UD){
       var VD=UD.v[0],WD=UD.v[1],XD=UD.v[2];
       var YD=XD.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(YD.g){
       case 1:
	var ZD=XD.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(ZD.g){
	case 1:
	 var aE=$f(3,function(bE,cE,dE){
	  $M(cE,function(eE){
	   var fE=eE.v[0],gE=eE.v[1],hE=eE.v[2],iE=eE.v[3];
	   $M(hE,function(jE){
	    switch(jE.toString()){
	    case "0":
	     var rE=$d(1,[fE,gE,goog.math.Long.fromBits(0,0),iE],"sat");
	     bE.C([rE,dE],function(sE){
	      var tE=sE[0],uE=sE[1];
	      var vE=$d(2,[UD,uE],"sat");
	      $r([tE,vE]);
	     },[UD]);break;
	    default:
	     var kE=$t(function(){
	      var mE=gE.add(jE);
	      var lE=$d(1,[fE,mE,goog.math.Long.fromBits(0,0),iE],"sat");
	      bE.C([lE,dE],function(nE){
	       var oE=nE[1];
	       $R(2,[UD,oE],":");
	      },[UD]);
	     },[dE,fE,gE,jE,iE,bE,UD],"sat");
	     var pE=$d(1,[fE,gE,jE],"sat");
	     var qE=$d(2,[pE,kE],"sat");
	     $r([dE,qE]);
	    }
	   },[dE,fE,gE,iE,bE,UD]);
	  },[dE,bE,UD]);
	 },[UD],"sat");
	 $A(aE);break;
	case 2:
	 var wE=$f(1,function(xE){
	  var yE=$f(5,function(zE,AE,BE,CE,DE){
	   var NE=AE.add(BE);
	   var PE=XD.add(NE);
	   var EE=NE.greaterThanOrEqual(PE)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(EE.g){
	   case 1:
	    var OE=PE.subtract(NE);
	    var ME=$hs_int2Wordzh(OE);
	    var LE=$hs_int2Wordzh(WD);
	    var KE=$hs_int2Wordzh(NE);
	    var $ff=_hs_text_memcpy(zE,KE,VD,LE,ME);
	    var FE=[DE,$ff];
	    var GE=FE[0];
	    var JE=CE.subtract(XD);
	    var IE=BE.add(XD);
	    var HE=$d(1,[zE,AE,IE,JE],"sat");
	    xE.J(HE,GE);break;
	   case 2:
	    var SE=CE.subtract(XD);
	    var RE=BE.add(XD);
	    var QE=$d(1,[zE,AE,RE,SE],"sat");
	    xE.J(QE,DE);break;
	   }
	  },[XD,VD,WD,xE],"$wa1");
	  var TE=$f(1,function(UE){
	   var VE=$f(1,function(WE){
	    var XE=WE.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(XE.g){
	    case 1:
	     var eF=$hs_int2Wordzh(WE);
	     var dF=eF.and(goog.math.Long.fromBits(0,1073741824));
	     var YE=$hs_word2Intzh(dF);
	     switch(YE.toString()){
	     case "0":
	      var cF=$hs_uncheckedIShiftLzh(WE,goog.math.Long.fromBits(1,0));
	      var ZE=$hs_newByteArrayzh(cF,UE);
	      var aF=ZE[0],bF=ZE[1];
	      yE.J(bF,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),WE,aF);break;
	     default:
	      $A($$TextziBlazzeziRendererziText$O);
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText$O);break;
	    }
	   },[yE,UE],"$j");
	   var fF=XD.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(fF.g){
	   case 1:
	    VE.J(XD);break;
	   case 2:
	    VE.J(goog.math.Long.fromBits(112,0));break;
	   }
	  },[XD,yE],"$wa9");
	  var gF=$f(2,function(hF,iF){
	   $M(hF,function(jF){
	    var kF=jF.v[0],lF=jF.v[1],mF=jF.v[2],nF=jF.v[3];
	    var oF=XD.lessThanOrEqual(nF)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(oF.g){
	    case 1:
	     $M(mF,function(pF){
	      switch(pF.toString()){
	      case "0":
	       TE.J(iF);break;
	      default:
	       var qF=$t(function(){
		TE.C([iF],function(rF){
		 var sF=rF[1];
		 $A(sF);
		},[]);
	       },[TE,iF],"sat");
	       var tF=$d(1,[kF,lF,pF],"sat");
	       var uF=$d(2,[tF,qF],"sat");
	       $r([iF,uF]);
	      }
	     },[TE,iF,kF,lF]);break;
	    case 2:
	     yE.J(kF,lF,mF,nF,iF);break;
	    }
	   },[XD,yE,TE,iF]);
	  },[XD,yE,TE],"sat");
	  $A(gF);
	 },[XD,VD,WD],"sat");
	 $A(wE);break;
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[]);
     },[]);
    },[QD],"g");
    var vF=$t(function(){
     $M(PD,function(wF){
      var xF=wF.v[2];
      $M(xF,function(yF){
       var zF=yF.v[0],AF=yF.v[1],BF=yF.v[2];
       var CF=BF.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(CF.g){
       case 1:
	var DF=BF.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(DF.g){
	case 1:
	 var EF=$f(3,function(FF,GF,HF){
	  $M(GF,function(IF){
	   var JF=IF.v[0],KF=IF.v[1],LF=IF.v[2],MF=IF.v[3];
	   $M(LF,function(NF){
	    switch(NF.toString()){
	    case "0":
	     var VF=$d(1,[JF,KF,goog.math.Long.fromBits(0,0),MF],"sat");
	     FF.C([VF,HF],function(WF){
	      var XF=WF[0],YF=WF[1];
	      var ZF=$d(2,[yF,YF],"sat");
	      $r([XF,ZF]);
	     },[yF]);break;
	    default:
	     var OF=$t(function(){
	      var QF=KF.add(NF);
	      var PF=$d(1,[JF,QF,goog.math.Long.fromBits(0,0),MF],"sat");
	      FF.C([PF,HF],function(RF){
	       var SF=RF[1];
	       $R(2,[yF,SF],":");
	      },[yF]);
	     },[HF,JF,KF,NF,MF,FF,yF],"sat");
	     var TF=$d(1,[JF,KF,NF],"sat");
	     var UF=$d(2,[TF,OF],"sat");
	     $r([HF,UF]);
	    }
	   },[HF,JF,KF,MF,FF,yF]);
	  },[HF,FF,yF]);
	 },[yF],"sat");
	 $A(EF);break;
	case 2:
	 var aG=$f(1,function(bG){
	  var cG=$f(5,function(dG,eG,fG,gG,hG){
	   var rG=eG.add(fG);
	   var tG=BF.add(rG);
	   var iG=rG.greaterThanOrEqual(tG)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(iG.g){
	   case 1:
	    var sG=tG.subtract(rG);
	    var qG=$hs_int2Wordzh(sG);
	    var pG=$hs_int2Wordzh(AF);
	    var oG=$hs_int2Wordzh(rG);
	    var $ff=_hs_text_memcpy(dG,oG,zF,pG,qG);
	    var jG=[hG,$ff];
	    var kG=jG[0];
	    var nG=gG.subtract(BF);
	    var mG=fG.add(BF);
	    var lG=$d(1,[dG,eG,mG,nG],"sat");
	    bG.J(lG,kG);break;
	   case 2:
	    var wG=gG.subtract(BF);
	    var vG=fG.add(BF);
	    var uG=$d(1,[dG,eG,vG,wG],"sat");
	    bG.J(uG,hG);break;
	   }
	  },[BF,zF,AF,bG],"$wa1");
	  var xG=$f(1,function(yG){
	   var zG=$f(1,function(AG){
	    var BG=AG.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(BG.g){
	    case 1:
	     var IG=$hs_int2Wordzh(AG);
	     var HG=IG.and(goog.math.Long.fromBits(0,1073741824));
	     var CG=$hs_word2Intzh(HG);
	     switch(CG.toString()){
	     case "0":
	      var GG=$hs_uncheckedIShiftLzh(AG,goog.math.Long.fromBits(1,0));
	      var DG=$hs_newByteArrayzh(GG,yG);
	      var EG=DG[0],FG=DG[1];
	      cG.J(FG,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),AG,EG);break;
	     default:
	      $A($$TextziBlazzeziRendererziText$N);
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText$N);break;
	    }
	   },[cG,yG],"$j");
	   var JG=BF.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(JG.g){
	   case 1:
	    zG.J(BF);break;
	   case 2:
	    zG.J(goog.math.Long.fromBits(112,0));break;
	   }
	  },[BF,cG],"$wa9");
	  var KG=$f(2,function(LG,MG){
	   $M(LG,function(NG){
	    var OG=NG.v[0],PG=NG.v[1],QG=NG.v[2],RG=NG.v[3];
	    var SG=BF.lessThanOrEqual(RG)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(SG.g){
	    case 1:
	     $M(QG,function(TG){
	      switch(TG.toString()){
	      case "0":
	       xG.J(MG);break;
	      default:
	       var UG=$t(function(){
		xG.C([MG],function(VG){
		 var WG=VG[1];
		 $A(WG);
		},[]);
	       },[xG,MG],"sat");
	       var XG=$d(1,[OG,PG,TG],"sat");
	       var YG=$d(2,[XG,UG],"sat");
	       $r([MG,YG]);
	      }
	     },[xG,MG,OG,PG]);break;
	    case 2:
	     cG.J(OG,PG,QG,RG,MG);break;
	    }
	   },[BF,cG,xG,MG]);
	  },[BF,cG,xG],"sat");
	  $A(KG);
	 },[BF,zF,AF],"sat");
	 $A(aG);break;
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[]);
     },[]);
    },[PD],"f");
    var ZG=$f(1,function(aH){
     var bH=$t(function(){
      var cH=$t(function(){
       RD.J(aH);
      },[RD,aH],"sat");
      Sw.J(cH);
     },[Sw,RD,aH],"sat");
     vF.J(bH);
    },[Sw,RD,vF],"sat");
    $A(ZG);break;
   case 4:
    var dH=Uw.v[0],eH=Uw.v[1];
    var fH=$t(function(){
     $$TextziBlazzeziRendererziText_fromChoiceString.J(Pw,dH);
    },[Pw,dH],"g");
    var gH=$f(1,function(hH){
     var iH=$t(function(){
      var jH=$t(function(){
       var kH=$t(function(){
	$M(eH,function(lH){
	 switch(lH.g){
	 case 1:
	  $$TextziBlazzeziRendererziText$C.J(hH);break;
	 case 2:
	  var mH=$f(2,function(nH,oH){
	   $M(nH,function(pH){
	    var qH=pH.v[0],rH=pH.v[1],sH=pH.v[2],tH=pH.v[3];
	    var uH=$f(6,function(vH,wH,xH,yH,zH,AH){
	     $M(zH,function(BH){
	      switch(BH.g){
	      case 1:
	       var CH=$d(1,[vH,wH,xH,yH],"sat");
	       hH.J(CH,AH);break;
	      case 2:
	       var DH=BH.v[0],EH=BH.v[1];
	       var FH=yH.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(FH.g){
	       case 1:
		$M(DH,function(GH){
		 var HH=GH.v[0];
		 var aI=$hs_ordzh(HH);
		 var PH=wH.add(xH);
		 var IH=aI.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(IH.g){
		 case 1:
		  var VH=aI.subtract(goog.math.Long.fromBits(65536,0));
		  var ZH=$hs_uncheckedIShiftRAzh(VH,goog.math.Long.fromBits(10,0));
		  var YH=ZH.add(goog.math.Long.fromBits(55296,0));
		  var XH=$hs_int2Wordzh(YH);
		  var WH=$hs_narrow16Wordzh(XH);
		  var OH=$hs_writeWord16Arrayzh(vH,PH,WH,AH);
		  var UH=$hs_int2Wordzh(VH);
		  var TH=UH.and(goog.math.Long.fromBits(1023,0));
		  var SH=$hs_word2Intzh(TH);
		  var RH=SH.add(goog.math.Long.fromBits(56320,0));
		  var QH=$hs_int2Wordzh(RH);
		  var NH=$hs_narrow16Wordzh(QH);
		  var MH=PH.add(goog.math.Long.fromBits(1,0));
		  var LH=$hs_writeWord16Arrayzh(vH,MH,NH,OH);
		  var KH=yH.subtract(goog.math.Long.fromBits(2,0));
		  var JH=xH.add(goog.math.Long.fromBits(2,0));
		  uH.J(vH,wH,JH,KH,EH,LH);break;
		 case 2:
		  var fI=$hs_int2Wordzh(aI);
		  var eI=$hs_narrow16Wordzh(fI);
		  var dI=$hs_writeWord16Arrayzh(vH,PH,eI,AH);
		  var cI=yH.subtract(goog.math.Long.fromBits(1,0));
		  var bI=xH.add(goog.math.Long.fromBits(1,0));
		  uH.J(vH,wH,bI,cI,EH,dI);break;
		 }
		},[vH,wH,xH,yH,AH,uH,EH]);break;
	       case 2:
		var gI=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),AH);
		var hI=gI[0],iI=gI[1];
		var jI=$t(function(){
		 uH.C([iI,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(112,0),BH,hI],function(kI){
		  var lI=kI[1];
		  $A(lI);
		 },[]);
		},[uH,hI,iI,BH],"sat");
		var mI=$d(1,[vH,wH,xH],"sat");
		var nI=$d(2,[mI,jI],"sat");
		$r([hI,nI]);break;
	       }break;
	      }
	     },[hH,vH,wH,xH,yH,AH,uH]);
	    },[hH],"$wa1");
	    uH.J(qH,rH,sH,tH,$$TextziBlazzeziRendererziText$F,oH);
	   },[hH,oH]);
	  },[hH],"sat");
	  $A(mH);break;
	 }
	},[hH]);
       },[eH,hH],"sat");
       Sw.J(kH);
      },[Sw,eH,hH],"sat");
      fH.J(jH);
     },[Sw,fH,eH,hH],"x1");
     var oI=$f(2,function(pI,qI){
      $M(pI,function(rI){
       var sI=rI.v[0],tI=rI.v[1],uI=rI.v[2],vI=rI.v[3];
       var wI=goog.math.Long.fromBits(2,0).lessThanOrEqual(vI)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(wI.g){
       case 1:
	$M(uI,function(xI){
	 switch(xI.toString()){
	 case "0":
	  var II=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),qI);
	  var JI=II[0],KI=II[1];
	  var MI=$hs_writeWord16Arrayzh(KI,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(60,0),JI);
	  var LI=$d(1,[KI,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	  iH.J(LI,MI);break;
	 default:
	  var yI=$t(function(){
	   var zI=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),qI);
	   var AI=zI[0],BI=zI[1];
	   var FI=$hs_writeWord16Arrayzh(BI,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(60,0),AI);
	   var CI=$d(1,[BI,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	   iH.C([CI,FI],function(DI){
	    var EI=DI[1];
	    $A(EI);
	   },[]);
	  },[iH,qI],"sat");
	  var GI=$d(1,[sI,tI,xI],"sat");
	  var HI=$d(2,[GI,yI],"sat");
	  $r([qI,HI]);
	 }
	},[iH,qI,sI,tI]);break;
       case 2:
	var RI=tI.add(uI);
	var QI=$hs_writeWord16Arrayzh(sI,RI,goog.math.Long.fromBits(60,0),qI);
	var PI=vI.subtract(goog.math.Long.fromBits(1,0));
	var OI=uI.add(goog.math.Long.fromBits(1,0));
	var NI=$d(1,[sI,tI,OI,PI],"sat");
	iH.J(NI,QI);break;
       }
      },[iH,qI]);
     },[iH],"sat");
     $A(oI);
    },[Sw,fH,eH],"sat");
    $A(gH);break;
   case 5:
    var SI=Uw.v[0];
    $$TextziBlazzeziRendererziText_fromChoiceString.J(Pw,SI);break;
   case 6:
    var TI=Uw.v[0],UI=Uw.v[1];
    var VI=$t(function(){
     Rw.J(Sw,UI);
    },[Rw,Sw,UI],"g");
    var WI=$t(function(){
     Rw.J(Sw,TI);
    },[Rw,Sw,TI],"f");
    var XI=$f(1,function(YI){
     var ZI=$t(function(){
      VI.J(YI);
     },[VI,YI],"sat");
     WI.J(ZI);
    },[VI,WI],"sat");
    $A(XI);break;
   case 7:
    var aJ=Uw.v[1],bJ=Uw.v[2],cJ=Uw.v[3];
    var dJ=$t(function(){
     var eJ=$t(function(){
      $$TextziBlazzeziRendererziText_fromChoiceString.J(Pw,bJ);
     },[Pw,bJ],"g");
     var fJ=$t(function(){
      $M(aJ,function(gJ){
       var hJ=gJ.v[2];
       $M(hJ,function(iJ){
	var jJ=iJ.v[0],kJ=iJ.v[1],lJ=iJ.v[2];
	var mJ=lJ.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(mJ.g){
	case 1:
	 var nJ=lJ.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(nJ.g){
	 case 1:
	  var oJ=$f(3,function(pJ,qJ,rJ){
	   $M(qJ,function(sJ){
	    var tJ=sJ.v[0],uJ=sJ.v[1],vJ=sJ.v[2],wJ=sJ.v[3];
	    $M(vJ,function(xJ){
	     switch(xJ.toString()){
	     case "0":
	      var FJ=$d(1,[tJ,uJ,goog.math.Long.fromBits(0,0),wJ],"sat");
	      pJ.C([FJ,rJ],function(GJ){
	       var HJ=GJ[0],IJ=GJ[1];
	       var JJ=$d(2,[iJ,IJ],"sat");
	       $r([HJ,JJ]);
	      },[iJ]);break;
	     default:
	      var yJ=$t(function(){
	       var AJ=uJ.add(xJ);
	       var zJ=$d(1,[tJ,AJ,goog.math.Long.fromBits(0,0),wJ],"sat");
	       pJ.C([zJ,rJ],function(BJ){
		var CJ=BJ[1];
		$R(2,[iJ,CJ],":");
	       },[iJ]);
	      },[rJ,tJ,uJ,xJ,wJ,pJ,iJ],"sat");
	      var DJ=$d(1,[tJ,uJ,xJ],"sat");
	      var EJ=$d(2,[DJ,yJ],"sat");
	      $r([rJ,EJ]);
	     }
	    },[rJ,tJ,uJ,wJ,pJ,iJ]);
	   },[rJ,pJ,iJ]);
	  },[iJ],"sat");
	  $A(oJ);break;
	 case 2:
	  var KJ=$f(1,function(LJ){
	   var MJ=$f(5,function(NJ,OJ,PJ,QJ,RJ){
	    var bK=OJ.add(PJ);
	    var dK=lJ.add(bK);
	    var SJ=bK.greaterThanOrEqual(dK)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(SJ.g){
	    case 1:
	     var cK=dK.subtract(bK);
	     var aK=$hs_int2Wordzh(cK);
	     var ZJ=$hs_int2Wordzh(kJ);
	     var YJ=$hs_int2Wordzh(bK);
	     var $ff=_hs_text_memcpy(NJ,YJ,jJ,ZJ,aK);
	     var TJ=[RJ,$ff];
	     var UJ=TJ[0];
	     var XJ=QJ.subtract(lJ);
	     var WJ=PJ.add(lJ);
	     var VJ=$d(1,[NJ,OJ,WJ,XJ],"sat");
	     LJ.J(VJ,UJ);break;
	    case 2:
	     var gK=QJ.subtract(lJ);
	     var fK=PJ.add(lJ);
	     var eK=$d(1,[NJ,OJ,fK,gK],"sat");
	     LJ.J(eK,RJ);break;
	    }
	   },[lJ,jJ,kJ,LJ],"$wa1");
	   var hK=$f(1,function(iK){
	    var jK=$f(1,function(kK){
	     var lK=kK.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(lK.g){
	     case 1:
	      var sK=$hs_int2Wordzh(kK);
	      var rK=sK.and(goog.math.Long.fromBits(0,1073741824));
	      var mK=$hs_word2Intzh(rK);
	      switch(mK.toString()){
	      case "0":
	       var qK=$hs_uncheckedIShiftLzh(kK,goog.math.Long.fromBits(1,0));
	       var nK=$hs_newByteArrayzh(qK,iK);
	       var oK=nK[0],pK=nK[1];
	       MJ.J(pK,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),kK,oK);break;
	      default:
	       $A($$TextziBlazzeziRendererziText$P);
	      }break;
	     case 2:
	      $A($$TextziBlazzeziRendererziText$P);break;
	     }
	    },[MJ,iK],"$j");
	    var tK=lJ.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(tK.g){
	    case 1:
	     jK.J(lJ);break;
	    case 2:
	     jK.J(goog.math.Long.fromBits(112,0));break;
	    }
	   },[lJ,MJ],"$wa9");
	   var uK=$f(2,function(vK,wK){
	    $M(vK,function(xK){
	     var yK=xK.v[0],zK=xK.v[1],AK=xK.v[2],BK=xK.v[3];
	     var CK=lJ.lessThanOrEqual(BK)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(CK.g){
	     case 1:
	      $M(AK,function(DK){
	       switch(DK.toString()){
	       case "0":
		hK.J(wK);break;
	       default:
		var EK=$t(function(){
		 hK.C([wK],function(FK){
		  var GK=FK[1];
		  $A(GK);
		 },[]);
		},[hK,wK],"sat");
		var HK=$d(1,[yK,zK,DK],"sat");
		var IK=$d(2,[HK,EK],"sat");
		$r([wK,IK]);
	       }
	      },[hK,wK,yK,zK]);break;
	     case 2:
	      MJ.J(yK,zK,AK,BK,wK);break;
	     }
	    },[lJ,MJ,hK,wK]);
	   },[lJ,MJ,hK],"sat");
	   $A(uK);
	  },[lJ,jJ,kJ],"sat");
	  $A(KJ);break;
	 }break;
	case 2:
	 $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	}
       },[]);
      },[]);
     },[aJ],"f");
     var JK=$f(1,function(KK){
      var LK=$t(function(){
       var MK=$t(function(){
	Sw.J(KK);
       },[Sw,KK],"x1");
       var NK=$f(2,function(OK,PK){
	$M(OK,function(QK){
	 var RK=QK.v[0],SK=QK.v[1],TK=QK.v[2],UK=QK.v[3];
	 var VK=goog.math.Long.fromBits(2,0).lessThanOrEqual(UK)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(VK.g){
	 case 1:
	  $M(TK,function(WK){
	   switch(WK.toString()){
	   case "0":
	    var hL=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),PK);
	    var iL=hL[0],jL=hL[1];
	    var lL=$hs_writeWord16Arrayzh(jL,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(34,0),iL);
	    var kL=$d(1,[jL,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	    MK.J(kL,lL);break;
	   default:
	    var XK=$t(function(){
	     var YK=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),PK);
	     var ZK=YK[0],aL=YK[1];
	     var eL=$hs_writeWord16Arrayzh(aL,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(34,0),ZK);
	     var bL=$d(1,[aL,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	     MK.C([bL,eL],function(cL){
	      var dL=cL[1];
	      $A(dL);
	     },[]);
	    },[MK,PK],"sat");
	    var fL=$d(1,[RK,SK,WK],"sat");
	    var gL=$d(2,[fL,XK],"sat");
	    $r([PK,gL]);
	   }
	  },[MK,PK,RK,SK]);break;
	 case 2:
	  var qL=SK.add(TK);
	  var pL=$hs_writeWord16Arrayzh(RK,qL,goog.math.Long.fromBits(34,0),PK);
	  var oL=UK.subtract(goog.math.Long.fromBits(1,0));
	  var nL=TK.add(goog.math.Long.fromBits(1,0));
	  var mL=$d(1,[RK,SK,nL,oL],"sat");
	  MK.J(mL,pL);break;
	 }
	},[MK,PK]);
       },[MK],"sat");
       eJ.J(NK);
      },[Sw,eJ,KK],"sat");
      fJ.J(LK);
     },[Sw,eJ,fJ],"sat");
     $A(JK);
    },[Sw,Pw,bJ,aJ],"sat");
    Rw.J(dJ,cJ);break;
   case 8:
    var rL=Uw.v[0],sL=Uw.v[1],tL=Uw.v[2];
    var uL=$t(function(){
     var vL=$t(function(){
      $$TextziBlazzeziRendererziText_fromChoiceString.J(Pw,sL);
     },[Pw,sL],"g");
     var wL=$t(function(){
      $$TextziBlazzeziRendererziText_fromChoiceString.J(Pw,rL);
     },[Pw,rL],"g1");
     var xL=$f(1,function(yL){
      var zL=$t(function(){
       var AL=$t(function(){
	var BL=$t(function(){
	 Sw.J(yL);
	},[Sw,yL],"x2");
	var CL=$f(2,function(DL,EL){
	 $M(DL,function(FL){
	  var GL=FL.v[0],HL=FL.v[1],IL=FL.v[2],JL=FL.v[3];
	  var KL=goog.math.Long.fromBits(2,0).lessThanOrEqual(JL)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(KL.g){
	  case 1:
	   $M(IL,function(LL){
	    switch(LL.toString()){
	    case "0":
	     var WL=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),EL);
	     var XL=WL[0],YL=WL[1];
	     var aM=$hs_writeWord16Arrayzh(YL,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(34,0),XL);
	     var ZL=$d(1,[YL,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	     BL.J(ZL,aM);break;
	    default:
	     var ML=$t(function(){
	      var NL=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),EL);
	      var OL=NL[0],PL=NL[1];
	      var TL=$hs_writeWord16Arrayzh(PL,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(34,0),OL);
	      var QL=$d(1,[PL,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	      BL.C([QL,TL],function(RL){
	       var SL=RL[1];
	       $A(SL);
	      },[]);
	     },[BL,EL],"sat");
	     var UL=$d(1,[GL,HL,LL],"sat");
	     var VL=$d(2,[UL,ML],"sat");
	     $r([EL,VL]);
	    }
	   },[BL,EL,GL,HL]);break;
	  case 2:
	   var fM=HL.add(IL);
	   var eM=$hs_writeWord16Arrayzh(GL,fM,goog.math.Long.fromBits(34,0),EL);
	   var dM=JL.subtract(goog.math.Long.fromBits(1,0));
	   var cM=IL.add(goog.math.Long.fromBits(1,0));
	   var bM=$d(1,[GL,HL,cM,dM],"sat");
	   BL.J(bM,eM);break;
	  }
	 },[BL,EL]);
	},[BL],"sat");
	vL.J(CL);
       },[Sw,vL,yL],"k");
       var gM=$f(6,function(hM,iM,jM,kM,lM,mM){
	$M(lM,function(nM){
	 switch(nM.g){
	 case 1:
	  var oM=$d(1,[hM,iM,jM,kM],"sat");
	  AL.J(oM,mM);break;
	 case 2:
	  var pM=nM.v[0],qM=nM.v[1];
	  var rM=kM.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(rM.g){
	  case 1:
	   $M(pM,function(sM){
	    var tM=sM.v[0];
	    var MM=$hs_ordzh(tM);
	    var BM=iM.add(jM);
	    var uM=MM.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(uM.g){
	    case 1:
	     var HM=MM.subtract(goog.math.Long.fromBits(65536,0));
	     var LM=$hs_uncheckedIShiftRAzh(HM,goog.math.Long.fromBits(10,0));
	     var KM=LM.add(goog.math.Long.fromBits(55296,0));
	     var JM=$hs_int2Wordzh(KM);
	     var IM=$hs_narrow16Wordzh(JM);
	     var AM=$hs_writeWord16Arrayzh(hM,BM,IM,mM);
	     var GM=$hs_int2Wordzh(HM);
	     var FM=GM.and(goog.math.Long.fromBits(1023,0));
	     var EM=$hs_word2Intzh(FM);
	     var DM=EM.add(goog.math.Long.fromBits(56320,0));
	     var CM=$hs_int2Wordzh(DM);
	     var zM=$hs_narrow16Wordzh(CM);
	     var yM=BM.add(goog.math.Long.fromBits(1,0));
	     var xM=$hs_writeWord16Arrayzh(hM,yM,zM,AM);
	     var wM=kM.subtract(goog.math.Long.fromBits(2,0));
	     var vM=jM.add(goog.math.Long.fromBits(2,0));
	     gM.J(hM,iM,vM,wM,qM,xM);break;
	    case 2:
	     var RM=$hs_int2Wordzh(MM);
	     var QM=$hs_narrow16Wordzh(RM);
	     var PM=$hs_writeWord16Arrayzh(hM,BM,QM,mM);
	     var OM=kM.subtract(goog.math.Long.fromBits(1,0));
	     var NM=jM.add(goog.math.Long.fromBits(1,0));
	     gM.J(hM,iM,NM,OM,qM,PM);break;
	    }
	   },[hM,iM,jM,kM,mM,gM,qM]);break;
	  case 2:
	   var SM=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),mM);
	   var TM=SM[0],UM=SM[1];
	   var VM=$t(function(){
	    gM.C([UM,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(112,0),nM,TM],function(WM){
	     var XM=WM[1];
	     $A(XM);
	    },[]);
	   },[gM,TM,UM,nM],"sat");
	   var YM=$d(1,[hM,iM,jM],"sat");
	   var ZM=$d(2,[YM,VM],"sat");
	   $r([TM,ZM]);break;
	  }break;
	 }
	},[AL,hM,iM,jM,kM,mM,gM]);
       },[AL],"$wa1");
       var aN=$f(2,function(bN,cN){
	$M(bN,function(dN){
	 var eN=dN.v[0],fN=dN.v[1],gN=dN.v[2],hN=dN.v[3];
	 gM.J(eN,fN,gN,hN,$$TextziBlazzeziRendererziText$D,cN);
	},[gM,cN]);
       },[gM],"sat");
       wL.J(aN);
      },[Sw,vL,wL,yL],"x1");
      var iN=$f(2,function(jN,kN){
       $M(jN,function(lN){
	var mN=lN.v[0],nN=lN.v[1],oN=lN.v[2],pN=lN.v[3];
	var qN=goog.math.Long.fromBits(2,0).lessThanOrEqual(pN)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(qN.g){
	case 1:
	 $M(oN,function(rN){
	  switch(rN.toString()){
	  case "0":
	   var CN=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),kN);
	   var DN=CN[0],EN=CN[1];
	   var GN=$hs_writeWord16Arrayzh(EN,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(32,0),DN);
	   var FN=$d(1,[EN,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	   zL.J(FN,GN);break;
	  default:
	   var sN=$t(function(){
	    var tN=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),kN);
	    var uN=tN[0],vN=tN[1];
	    var zN=$hs_writeWord16Arrayzh(vN,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(32,0),uN);
	    var wN=$d(1,[vN,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
	    zL.C([wN,zN],function(xN){
	     var yN=xN[1];
	     $A(yN);
	    },[]);
	   },[zL,kN],"sat");
	   var AN=$d(1,[mN,nN,rN],"sat");
	   var BN=$d(2,[AN,sN],"sat");
	   $r([kN,BN]);
	  }
	 },[zL,kN,mN,nN]);break;
	case 2:
	 var LN=nN.add(oN);
	 var KN=$hs_writeWord16Arrayzh(mN,LN,goog.math.Long.fromBits(32,0),kN);
	 var JN=pN.subtract(goog.math.Long.fromBits(1,0));
	 var IN=oN.add(goog.math.Long.fromBits(1,0));
	 var HN=$d(1,[mN,nN,IN,JN],"sat");
	 zL.J(HN,KN);break;
	}
       },[zL,kN]);
      },[zL],"sat");
      $A(iN);
     },[Sw,vL,wL],"sat");
     $A(xL);
    },[Sw,Pw,sL,rL],"sat");
    Rw.J(uL,tL);break;
   case 9:
    $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
   }
  },[Rw,Sw,Pw]);
 },[Pw],"go1");
 Rw.C([$$TextziBlazzeziRendererziText_renderMarkupBuilder1,Qw],function(MN){
  $$DataziTextziLazzyziBuilder_zdwtoLazzyTextWith.J(goog.math.Long.fromBits(112,0),MN);
 },[]);
},[],"at src/Text/Blaze/Renderer/Text.hs:158:1");
var $$TextziBlazzeziRendererziText$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow");
},"lvl");
var $$TextziBlazzeziRendererziText$b=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a");
var $$TextziBlazzeziRendererziText$c=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a1");
var $$TextziBlazzeziRendererziText$d=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a2");
var $$TextziBlazzeziRendererziText$e=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a3");
var $$TextziBlazzeziRendererziText$f=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a4");
var $$TextziBlazzeziRendererziText$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("</");
},"str");
var $$TextziBlazzeziRendererziText$h=$F(3,function(NN,ON,PN){
 $M(ON,function(QN){
  switch(QN.g){
  case 1:
   $r([PN,$$GHCziTuple_Z0T]);break;
  case 2:
   var RN=QN.v[0],SN=QN.v[1];
   $M(RN,function(TN){
    var UN=TN.v[0];
    var YN=$hs_ordzh(UN);
    var XN=$hs_int2Wordzh(YN);
    var WN=$hs_writeWord8OffAddrzh(NN,goog.math.Long.fromBits(0,0),XN,PN);
    var VN=$hs_plusAddrzh(NN,goog.math.Long.fromBits(1,0));
    $$TextziBlazzeziRendererziText$h.J(VN,SN,WN);
   },[PN,NN,SN]);break;
  }
 },[PN,NN]);
},"a");
var $$TextziBlazzeziRendererziText$i=$F(1,function(ZN){
 $$GHCziList_zdwlen.C([$$TextziBlazzeziRendererziText$g,goog.math.Long.fromBits(0,0)],function(jO){
  var aO=jO.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(aO.g){
  case 1:
   var bO=$hs_newPinnedByteArrayzh(jO,ZN);
   var cO=bO[0],dO=bO[1];
   var iO=$hs_byteArrayContentszh(dO);
   $$TextziBlazzeziRendererziText$h.C([iO,$$TextziBlazzeziRendererziText$g,cO],function(eO){
    var fO=eO[0];
    var gO=$d(3,[dO],"a6");
    var kO=$hs_touchzh(gO,fO);
    var hO=$d(1,[iO,gO,goog.math.Long.fromBits(0,0),jO],"sat");
    $r([kO,hO]);
   },[jO,dO,iO]);break;
  case 2:
   $A($$GHCziForeignPtr_mallocPlainForeignPtrBytes2);break;
  }
 },[ZN]);
},"lvl1");
var $$TextziBlazzeziRendererziText$j=$T(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$TextziBlazzeziRendererziText$i);
},"lvl2");
var $$TextziBlazzeziRendererziText$k=$T(function(){
 $$DataziText_unpackCStringzh.J("</");
},"lvl3");
var $$TextziBlazzeziRendererziText$l=$F(1,function(o9){
 $$DataziList_isPrefixOf.J($$GHCziClasses_zdfEqChar,$$TextziBlazzeziRendererziText$g,o9);
},"lvl4");
var $$TextziBlazzeziRendererziText$m=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a5");
var $$TextziBlazzeziRendererziText$n=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a6");
var $$TextziBlazzeziRendererziText$o=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a7");
var $$TextziBlazzeziRendererziText$p=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a8");
var $$TextziBlazzeziRendererziText$q=$F(1,function(lO){
 $M(lO,function(mO){
  switch(mO.g){
  case 1:
   $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
  case 2:
   var nO=mO.v[0],oO=mO.v[1];
   $M(nO,function(pO){
    var qO=pO.v[0];
    $M(oO,function(rO){
     var sO=$t(function(){
      $$TextziBlazzeziRendererziText$q.J(rO);
     },[rO],"w");
     var tO=$f(1,function(uO){
      $$TextziBlazzeziRendererziText_zdwa.J(qO,sO,uO);
     },[sO,qO],"sat");
     $A(tO);
    },[qO]);
   },[oO]);break;
  }
 },[]);
},"loop_foldr");
var $$TextziBlazzeziRendererziText$C=$F(3,function(hT,iT,jT){
 $M(iT,function(kT){
  var lT=kT.v[0],mT=kT.v[1],nT=kT.v[2],oT=kT.v[3];
  var pT=goog.math.Long.fromBits(2,0).lessThanOrEqual(oT)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(pT.g){
  case 1:
   $M(nT,function(qT){
    switch(qT.toString()){
    case "0":
     var BT=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),jT);
     var CT=BT[0],DT=BT[1];
     var FT=$hs_writeWord16Arrayzh(DT,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(62,0),CT);
     var ET=$d(1,[DT,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
     hT.J(ET,FT);break;
    default:
     var rT=$t(function(){
      var sT=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),jT);
      var tT=sT[0],uT=sT[1];
      var yT=$hs_writeWord16Arrayzh(uT,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(62,0),tT);
      var vT=$d(1,[uT,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),goog.math.Long.fromBits(111,0)],"sat");
      hT.C([vT,yT],function(wT){
       var xT=wT[1];
       $A(xT);
      },[]);
     },[jT,hT],"sat");
     var zT=$d(1,[lT,mT,qT],"sat");
     var AT=$d(2,[zT,rT],"sat");
     $r([jT,AT]);
    }
   },[jT,lT,mT,hT]);break;
  case 2:
   var KT=mT.add(nT);
   var JT=$hs_writeWord16Arrayzh(lT,KT,goog.math.Long.fromBits(62,0),jT);
   var IT=oT.subtract(goog.math.Long.fromBits(1,0));
   var HT=nT.add(goog.math.Long.fromBits(1,0));
   var GT=$d(1,[lT,mT,HT,IT],"sat");
   hT.J(GT,JT);break;
  }
 },[jT,hT]);
},"lvl8");
var $$TextziBlazzeziRendererziText$D=$T(function(){
 $$GHCziCString_unpackCStringzh.J("=\"");
},"str1");
var $$TextziBlazzeziRendererziText$F=$T(function(){
 $$GHCziCString_unpackCStringzh.J(" />");
},"str2");
var $$TextziBlazzeziRendererziText$L=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a22");
var $$TextziBlazzeziRendererziText$M=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a23");
var $$TextziBlazzeziRendererziText$N=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a24");
var $$TextziBlazzeziRendererziText$O=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a25");
var $$TextziBlazzeziRendererziText$P=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a26");
var $$GraphicsziUIziGtkziWebKitziGHCJS_runWebGUI1=$f(2,function(z,A){
 var $ff=ghcjs_currentWindow();
 var B=[A,$ff];
 var C=B[0],D=B[1];
 var E=$hs_eqAddrzh(D,null);
 switch(E.g){
 case 1:
  var F=$f(1,function(G){
   var H=$d(1,[D],"sat");
   $r([G,H]);
  },[D],"sat");
  $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkWebView1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,F,C],function(I){
   var J=I[0],K=I[1];
   z.J(K,J);
  },[z]);break;
 case 2:
  $$GraphicsziUIziGtkziGeneralziGeneral_initGUI.C([C],function(L){
   var M=L[0];
   $$GraphicsziUIziGtkziAbstractziObject_zdwa.C([$$GraphicsziUIziGtkziTypes_mkWindow1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,$$GraphicsziUIziGtkziWindowsziWindow_windowNew2,M],function(N){
    var O=N[0],P=N[1];
    $M(P,function(Q){
     var R=Q.v[0],S=Q.v[1];
     var $ff=gtk_window_set_default_size(R,goog.math.Long.fromBits(900,0),goog.math.Long.fromBits(600,0));
     var T=[O,$ff];
     var U=T[0];
     var C1=$hs_touchzh(S,U);
     var $ff=gtk_window_set_position(R,goog.math.Long.fromBits(1,0));
     var V=[C1,$ff];
     var W=V[0];
     var B1=$hs_touchzh(S,W);
     $$GraphicsziUIziGtkziAbstractziObject_zdwa.C([$$GraphicsziUIziGtkziTypes_mkScrolledWindow1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,$$GraphicsziUIziGtkziWebKitziGHCJS$b,B1],function(X){
      var Y=X[0],Z=X[1];
      $$GraphicsziUIziGtkziWebKitziWebView_webViewNew1.C([Y],function(a1){
       var b1=a1[0],c1=a1[1];
       $M(Z,function(d1){
	var e1=d1.v[0],f1=d1.v[1];
	var $ff=gtk_container_add(R,e1);
	var g1=[b1,$ff];
	var h1=g1[0];
	var A1=$hs_touchzh(f1,h1);
	var z1=$hs_touchzh(S,A1);
	$M(c1,function(i1){
	 var j1=i1.v[0],k1=i1.v[1];
	 var $ff=gtk_container_add(e1,j1);
	 var l1=[z1,$ff];
	 var m1=l1[0];
	 var y1=$hs_touchzh(k1,m1);
	 var x1=$hs_touchzh(f1,y1);
	 $$SystemziGlibziSignals_connectGeneric1.C([$$GraphicsziUIziGtkziTypes_zdfGObjectClassWindow,$$GraphicsziUIziGtkziAbstractziWidget_afterDestroy2,$$GHCziTypes_False,Q,$$GraphicsziUIziGtkziWebKitziGHCJS$a,x1],function(n1){
	  var o1=n1[0];
	  var $ff=gtk_widget_show_all(R);
	  var p1=[o1,$ff];
	  var q1=p1[0];
	  var w1=$hs_touchzh(S,q1);
	  z.C([i1,w1],function(r1){
	   var s1=r1[0],t1=r1[1];
	   var $ff=gtk_main();
	   var u1=[s1,$ff];
	   var v1=u1[0];
	   $r([v1,t1]);
	  },[]);
	 },[z,R,S,i1]);
	},[z,R,S,e1,f1,z1,Q]);
       },[z,R,S,b1,c1,Q]);
      },[z,R,S,Z,Q]);
     },[z,R,S,Q]);
    },[z,O]);
   },[z]);
  },[z]);break;
 }
},[],"in `ghcjs-dom-0.0.1:Graphics.UI.Gtk.WebKit.GHCJS'");
var $$GraphicsziUIziGtkziWebKitziGHCJS$a=$F(2,function(E1,F1){
 $k($hs_catchzh,[$$GraphicsziUIziGtkziGeneralziGeneral_mainQuit,$$SystemziGlibziGError_failOnGError2,F1]);
},"lvl");
var $$GraphicsziUIziGtkziWebKitziGHCJS$b=$F(1,function(G1){
 $M($$SystemziGlibziFFI_nullForeignPtr,function(H1){
  var I1=H1.v[0],J1=H1.v[1];
  $M($$SystemziGlibziFFI_nullForeignPtr,function(K1){
   var L1=K1.v[0],M1=K1.v[1];
   var $ff=gtk_scrolled_window_new(I1,L1);
   var N1=[G1,$ff];
   var O1=N1[0],P1=N1[1];
   var S1=$hs_touchzh(M1,O1);
   var R1=$hs_touchzh(J1,S1);
   var Q1=$d(1,[P1],"sat");
   $r([R1,Q1]);
  },[I1,G1,J1]);
 },[G1]);
},"lvl1");
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
var $$DataziText_unpackCStringzh=$f(1,function(I2G){
 var J2G=$f(1,function(K2G){
  var L2G=$hs_newByteArrayzh(goog.math.Long.fromBits(8,0),K2G);
  var M2G=L2G[0],N2G=L2G[1];
  var O2G=$f(5,function(P2G,Q2G,R2G,S2G,T2G){
   var b2N=$hs_indexCharOffAddrzh(I2G,R2G);
   var U2G=$hs_ordzh(b2N);
   switch(U2G.toString()){
   case "0":
    $M(S2G,function(d2N){
     switch(d2N.toString()){
     case "0":
      $M($$DataziTextziInternal_empty,function(f2N){
       $r([T2G,f2N]);
      },[T2G]);break;
     default:
      var e2N=$d(1,[P2G,goog.math.Long.fromBits(0,0),d2N],"sat");
      $r([T2G,e2N]);
     }
    },[P2G,T2G]);break;
   default:
    var V2G=$f(3,function(W2G,X2G,Y2G){
     var a2H=$hs_ordzh(W2G);
     var b2H=a2H.subtract(goog.math.Long.fromBits(65536,0));
     var Z2G=$f(2,function(c2H,d2H){
      var e2H=c2H.greaterThanOrEqual(Q2G)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(e2H.g){
      case 1:
       var f2H=a2H.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(f2H.g){
       case 1:
	var B2J=$hs_uncheckedIShiftRAzh(b2H,goog.math.Long.fromBits(10,0));
	var A2J=B2J.add(goog.math.Long.fromBits(55296,0));
	var z2J=$hs_int2Wordzh(A2J);
	var y2J=$hs_narrow16Wordzh(z2J);
	var s2J=$hs_writeWord16Arrayzh(P2G,S2G,y2J,d2H);
	var x2J=$hs_int2Wordzh(b2H);
	var w2J=x2J.and(goog.math.Long.fromBits(1023,0));
	var v2J=$hs_word2Intzh(w2J);
	var u2J=v2J.add(goog.math.Long.fromBits(56320,0));
	var t2J=$hs_int2Wordzh(u2J);
	var r2J=$hs_narrow16Wordzh(t2J);
	var q2J=S2G.add(goog.math.Long.fromBits(1,0));
	var p2J=$hs_writeWord16Arrayzh(P2G,q2J,r2J,s2J);
	var g2H=$f(3,function(h2H,i2H,j2H){
	 var k2J=$hs_indexCharOffAddrzh(I2G,h2H);
	 var k2H=$hs_ordzh(k2J);
	 switch(k2H.toString()){
	 case "0":
	  $M(i2H,function(l2J){
	   switch(l2J.toString()){
	   case "0":
	    $M($$DataziTextziInternal_empty,function(n2J){
	     $r([j2H,n2J]);
	    },[j2H]);break;
	   default:
	    var m2J=$d(1,[P2G,goog.math.Long.fromBits(0,0),l2J],"sat");
	    $r([j2H,m2J]);
	   }
	  },[P2G,j2H]);break;
	 default:
	  var l2H=$f(3,function(m2H,n2H,o2H){
	   var q2H=$hs_ordzh(m2H);
	   var r2H=q2H.subtract(goog.math.Long.fromBits(65536,0));
	   var p2H=$f(2,function(s2H,t2H){
	    var u2H=s2H.greaterThanOrEqual(Q2G)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(u2H.g){
	    case 1:
	     var v2H=q2H.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(v2H.g){
	     case 1:
	      var L2H=$hs_uncheckedIShiftRAzh(r2H,goog.math.Long.fromBits(10,0));
	      var K2H=L2H.add(goog.math.Long.fromBits(55296,0));
	      var J2H=$hs_int2Wordzh(K2H);
	      var I2H=$hs_narrow16Wordzh(J2H);
	      var C2H=$hs_writeWord16Arrayzh(P2G,i2H,I2H,t2H);
	      var H2H=$hs_int2Wordzh(r2H);
	      var G2H=H2H.and(goog.math.Long.fromBits(1023,0));
	      var F2H=$hs_word2Intzh(G2H);
	      var E2H=F2H.add(goog.math.Long.fromBits(56320,0));
	      var D2H=$hs_int2Wordzh(E2H);
	      var B2H=$hs_narrow16Wordzh(D2H);
	      var A2H=i2H.add(goog.math.Long.fromBits(1,0));
	      var z2H=$hs_writeWord16Arrayzh(P2G,A2H,B2H,C2H);
	      $M(n2H,function(w2H){
	       var x2H=w2H.v[0];
	       var y2H=i2H.add(goog.math.Long.fromBits(2,0));
	       g2H.J(x2H,y2H,z2H);
	      },[I2G,Q2G,P2G,i2H,g2H,z2H,O2G]);break;
	     case 2:
	      var R2H=$hs_int2Wordzh(q2H);
	      var Q2H=$hs_narrow16Wordzh(R2H);
	      var P2H=$hs_writeWord16Arrayzh(P2G,i2H,Q2H,t2H);
	      $M(n2H,function(M2H){
	       var N2H=M2H.v[0];
	       var O2H=i2H.add(goog.math.Long.fromBits(1,0));
	       g2H.J(N2H,O2H,P2H);
	      },[I2G,Q2G,P2G,i2H,g2H,P2H,O2G]);break;
	     }break;
	    case 2:
	     var f2I=Q2G.add(goog.math.Long.fromBits(1,0));
	     var a2I=$hs_uncheckedIShiftLzh(f2I,goog.math.Long.fromBits(1,0));
	     var S2H=a2I.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(S2H.g){
	     case 1:
	      var e2I=$hs_int2Wordzh(a2I);
	      var d2I=e2I.and(goog.math.Long.fromBits(0,1073741824));
	      var T2H=$hs_word2Intzh(d2I);
	      switch(T2H.toString()){
	      case "0":
	       var c2I=$hs_uncheckedIShiftLzh(a2I,goog.math.Long.fromBits(1,0));
	       var U2H=$hs_newByteArrayzh(c2I,t2H);
	       var V2H=U2H[0],W2H=U2H[1];
	       var X2H=Q2G.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(X2H.g){
	       case 1:
		var b2I=$hs_int2Wordzh(Q2G);
		var $ff=_hs_text_memcpy(W2H,goog.math.Long.fromBits(0,0),P2G,goog.math.Long.fromBits(0,0),b2I);
		var Y2H=[V2H,$ff];
		var Z2H=Y2H[0];
		O2G.J(W2H,a2I,h2H,i2H,Z2H);break;
	       case 2:
		O2G.J(W2H,a2I,h2H,i2H,V2H);break;
	       }break;
	      default:
	       $A($$DataziText$P1);
	      }break;
	     case 2:
	      $A($$DataziText$P1);break;
	     }break;
	    }
	   },[Q2G,P2G,h2H,q2H,r2H,i2H,n2H,g2H,O2G],"a3");
	   var i2I=$hs_ordzh(m2H);
	   var g2I=i2I.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(g2I.g){
	   case 1:
	    var h2I=i2H.add(goog.math.Long.fromBits(1,0));
	    p2H.J(h2I,o2H);break;
	   case 2:
	    p2H.J(i2H,o2H);break;
	   }
	  },[Q2G,P2G,h2H,i2H,g2H,O2G],"$wa2");
	  var j2I=k2H.lessThanOrEqual(goog.math.Long.fromBits(127,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(j2I.g){
	  case 1:
	   var k2I=k2H.lessThanOrEqual(goog.math.Long.fromBits(223,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(k2I.g){
	   case 1:
	    var l2I=k2H.lessThanOrEqual(goog.math.Long.fromBits(239,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(l2I.g){
	    case 1:
	     var H2I=h2H.add(goog.math.Long.fromBits(1,0));
	     var z2I=$hs_indexCharOffAddrzh(I2G,H2I);
	     var G2I=h2H.add(goog.math.Long.fromBits(2,0));
	     var C2I=$hs_indexCharOffAddrzh(I2G,G2I);
	     var F2I=h2H.add(goog.math.Long.fromBits(3,0));
	     var E2I=$hs_indexCharOffAddrzh(I2G,F2I);
	     var n2I=h2H.add(goog.math.Long.fromBits(4,0));
	     var m2I=$d(1,[n2I],"sat");
	     var D2I=$hs_ordzh(E2I);
	     var r2I=D2I.subtract(goog.math.Long.fromBits(128,0));
	     var B2I=$hs_ordzh(C2I);
	     var A2I=B2I.subtract(goog.math.Long.fromBits(128,0));
	     var t2I=$hs_uncheckedIShiftLzh(A2I,goog.math.Long.fromBits(6,0));
	     var y2I=$hs_ordzh(z2I);
	     var x2I=y2I.subtract(goog.math.Long.fromBits(128,0));
	     var v2I=$hs_uncheckedIShiftLzh(x2I,goog.math.Long.fromBits(12,0));
	     var w2I=k2H.subtract(goog.math.Long.fromBits(240,0));
	     var u2I=$hs_uncheckedIShiftLzh(w2I,goog.math.Long.fromBits(18,0));
	     var s2I=u2I.add(v2I);
	     var q2I=s2I.add(t2I);
	     var p2I=q2I.add(r2I);
	     var o2I=$hs_chrzh(p2I);
	     l2H.J(o2I,m2I,j2H);break;
	    case 2:
	     var X2I=h2H.add(goog.math.Long.fromBits(1,0));
	     var T2I=$hs_indexCharOffAddrzh(I2G,X2I);
	     var W2I=h2H.add(goog.math.Long.fromBits(2,0));
	     var V2I=$hs_indexCharOffAddrzh(I2G,W2I);
	     var J2I=h2H.add(goog.math.Long.fromBits(3,0));
	     var I2I=$d(1,[J2I],"sat");
	     var U2I=$hs_ordzh(V2I);
	     var N2I=U2I.subtract(goog.math.Long.fromBits(128,0));
	     var S2I=$hs_ordzh(T2I);
	     var R2I=S2I.subtract(goog.math.Long.fromBits(128,0));
	     var P2I=$hs_uncheckedIShiftLzh(R2I,goog.math.Long.fromBits(6,0));
	     var Q2I=k2H.subtract(goog.math.Long.fromBits(224,0));
	     var O2I=$hs_uncheckedIShiftLzh(Q2I,goog.math.Long.fromBits(12,0));
	     var M2I=O2I.add(P2I);
	     var L2I=M2I.add(N2I);
	     var K2I=$hs_chrzh(L2I);
	     l2H.J(K2I,I2I,j2H);break;
	    }break;
	   case 2:
	    var h2J=h2H.add(goog.math.Long.fromBits(1,0));
	    var g2J=$hs_indexCharOffAddrzh(I2G,h2J);
	    var Z2I=h2H.add(goog.math.Long.fromBits(2,0));
	    var Y2I=$d(1,[Z2I],"sat");
	    var f2J=$hs_ordzh(g2J);
	    var d2J=f2J.subtract(goog.math.Long.fromBits(128,0));
	    var e2J=k2H.subtract(goog.math.Long.fromBits(192,0));
	    var c2J=$hs_uncheckedIShiftLzh(e2J,goog.math.Long.fromBits(6,0));
	    var b2J=c2J.add(d2J);
	    var a2J=$hs_chrzh(b2J);
	    l2H.J(a2J,Y2I,j2H);break;
	   }break;
	  case 2:
	   var j2J=h2H.add(goog.math.Long.fromBits(1,0));
	   var i2J=$d(1,[j2J],"sat");
	   l2H.J(k2J,i2J,j2H);break;
	  }
	 }
	},[I2G,Q2G,P2G,O2G],"$wa1");
	var o2J=S2G.add(goog.math.Long.fromBits(2,0));
	g2H.J(X2G,o2J,p2J);break;
       case 2:
	var N2L=$hs_int2Wordzh(a2H);
	var M2L=$hs_narrow16Wordzh(N2L);
	var L2L=$hs_writeWord16Arrayzh(P2G,S2G,M2L,d2H);
	var C2J=$f(3,function(D2J,E2J,F2J){
	 var G2L=$hs_indexCharOffAddrzh(I2G,D2J);
	 var G2J=$hs_ordzh(G2L);
	 switch(G2J.toString()){
	 case "0":
	  $M(E2J,function(H2L){
	   switch(H2L.toString()){
	   case "0":
	    $M($$DataziTextziInternal_empty,function(J2L){
	     $r([F2J,J2L]);
	    },[F2J]);break;
	   default:
	    var I2L=$d(1,[P2G,goog.math.Long.fromBits(0,0),H2L],"sat");
	    $r([F2J,I2L]);
	   }
	  },[P2G,F2J]);break;
	 default:
	  var H2J=$f(3,function(I2J,J2J,K2J){
	   var M2J=$hs_ordzh(I2J);
	   var N2J=M2J.subtract(goog.math.Long.fromBits(65536,0));
	   var L2J=$f(2,function(O2J,P2J){
	    var Q2J=O2J.greaterThanOrEqual(Q2G)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Q2J.g){
	    case 1:
	     var R2J=M2J.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(R2J.g){
	     case 1:
	      var h2K=$hs_uncheckedIShiftRAzh(N2J,goog.math.Long.fromBits(10,0));
	      var g2K=h2K.add(goog.math.Long.fromBits(55296,0));
	      var f2K=$hs_int2Wordzh(g2K);
	      var e2K=$hs_narrow16Wordzh(f2K);
	      var Y2J=$hs_writeWord16Arrayzh(P2G,E2J,e2K,P2J);
	      var d2K=$hs_int2Wordzh(N2J);
	      var c2K=d2K.and(goog.math.Long.fromBits(1023,0));
	      var b2K=$hs_word2Intzh(c2K);
	      var a2K=b2K.add(goog.math.Long.fromBits(56320,0));
	      var Z2J=$hs_int2Wordzh(a2K);
	      var X2J=$hs_narrow16Wordzh(Z2J);
	      var W2J=E2J.add(goog.math.Long.fromBits(1,0));
	      var V2J=$hs_writeWord16Arrayzh(P2G,W2J,X2J,Y2J);
	      $M(J2J,function(S2J){
	       var T2J=S2J.v[0];
	       var U2J=E2J.add(goog.math.Long.fromBits(2,0));
	       C2J.J(T2J,U2J,V2J);
	      },[I2G,Q2G,P2G,O2G,E2J,C2J,V2J]);break;
	     case 2:
	      var n2K=$hs_int2Wordzh(M2J);
	      var m2K=$hs_narrow16Wordzh(n2K);
	      var l2K=$hs_writeWord16Arrayzh(P2G,E2J,m2K,P2J);
	      $M(J2J,function(i2K){
	       var j2K=i2K.v[0];
	       var k2K=E2J.add(goog.math.Long.fromBits(1,0));
	       C2J.J(j2K,k2K,l2K);
	      },[I2G,Q2G,P2G,O2G,E2J,C2J,l2K]);break;
	     }break;
	    case 2:
	     var B2K=Q2G.add(goog.math.Long.fromBits(1,0));
	     var w2K=$hs_uncheckedIShiftLzh(B2K,goog.math.Long.fromBits(1,0));
	     var o2K=w2K.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(o2K.g){
	     case 1:
	      var A2K=$hs_int2Wordzh(w2K);
	      var z2K=A2K.and(goog.math.Long.fromBits(0,1073741824));
	      var p2K=$hs_word2Intzh(z2K);
	      switch(p2K.toString()){
	      case "0":
	       var y2K=$hs_uncheckedIShiftLzh(w2K,goog.math.Long.fromBits(1,0));
	       var q2K=$hs_newByteArrayzh(y2K,P2J);
	       var r2K=q2K[0],s2K=q2K[1];
	       var t2K=Q2G.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(t2K.g){
	       case 1:
		var x2K=$hs_int2Wordzh(Q2G);
		var $ff=_hs_text_memcpy(s2K,goog.math.Long.fromBits(0,0),P2G,goog.math.Long.fromBits(0,0),x2K);
		var u2K=[r2K,$ff];
		var v2K=u2K[0];
		O2G.J(s2K,w2K,D2J,E2J,v2K);break;
	       case 2:
		O2G.J(s2K,w2K,D2J,E2J,r2K);break;
	       }break;
	      default:
	       $A($$DataziText$P1);
	      }break;
	     case 2:
	      $A($$DataziText$P1);break;
	     }break;
	    }
	   },[Q2G,P2G,O2G,D2J,M2J,N2J,E2J,J2J,C2J],"a3");
	   var E2K=$hs_ordzh(I2J);
	   var C2K=E2K.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(C2K.g){
	   case 1:
	    var D2K=E2J.add(goog.math.Long.fromBits(1,0));
	    L2J.J(D2K,K2J);break;
	   case 2:
	    L2J.J(E2J,K2J);break;
	   }
	  },[Q2G,P2G,O2G,D2J,E2J,C2J],"$wa2");
	  var F2K=G2J.lessThanOrEqual(goog.math.Long.fromBits(127,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(F2K.g){
	  case 1:
	   var G2K=G2J.lessThanOrEqual(goog.math.Long.fromBits(223,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(G2K.g){
	   case 1:
	    var H2K=G2J.lessThanOrEqual(goog.math.Long.fromBits(239,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(H2K.g){
	    case 1:
	     var d2L=D2J.add(goog.math.Long.fromBits(1,0));
	     var V2K=$hs_indexCharOffAddrzh(I2G,d2L);
	     var c2L=D2J.add(goog.math.Long.fromBits(2,0));
	     var Y2K=$hs_indexCharOffAddrzh(I2G,c2L);
	     var b2L=D2J.add(goog.math.Long.fromBits(3,0));
	     var a2L=$hs_indexCharOffAddrzh(I2G,b2L);
	     var J2K=D2J.add(goog.math.Long.fromBits(4,0));
	     var I2K=$d(1,[J2K],"sat");
	     var Z2K=$hs_ordzh(a2L);
	     var N2K=Z2K.subtract(goog.math.Long.fromBits(128,0));
	     var X2K=$hs_ordzh(Y2K);
	     var W2K=X2K.subtract(goog.math.Long.fromBits(128,0));
	     var P2K=$hs_uncheckedIShiftLzh(W2K,goog.math.Long.fromBits(6,0));
	     var U2K=$hs_ordzh(V2K);
	     var T2K=U2K.subtract(goog.math.Long.fromBits(128,0));
	     var R2K=$hs_uncheckedIShiftLzh(T2K,goog.math.Long.fromBits(12,0));
	     var S2K=G2J.subtract(goog.math.Long.fromBits(240,0));
	     var Q2K=$hs_uncheckedIShiftLzh(S2K,goog.math.Long.fromBits(18,0));
	     var O2K=Q2K.add(R2K);
	     var M2K=O2K.add(P2K);
	     var L2K=M2K.add(N2K);
	     var K2K=$hs_chrzh(L2K);
	     H2J.J(K2K,I2K,F2J);break;
	    case 2:
	     var t2L=D2J.add(goog.math.Long.fromBits(1,0));
	     var p2L=$hs_indexCharOffAddrzh(I2G,t2L);
	     var s2L=D2J.add(goog.math.Long.fromBits(2,0));
	     var r2L=$hs_indexCharOffAddrzh(I2G,s2L);
	     var f2L=D2J.add(goog.math.Long.fromBits(3,0));
	     var e2L=$d(1,[f2L],"sat");
	     var q2L=$hs_ordzh(r2L);
	     var j2L=q2L.subtract(goog.math.Long.fromBits(128,0));
	     var o2L=$hs_ordzh(p2L);
	     var n2L=o2L.subtract(goog.math.Long.fromBits(128,0));
	     var l2L=$hs_uncheckedIShiftLzh(n2L,goog.math.Long.fromBits(6,0));
	     var m2L=G2J.subtract(goog.math.Long.fromBits(224,0));
	     var k2L=$hs_uncheckedIShiftLzh(m2L,goog.math.Long.fromBits(12,0));
	     var i2L=k2L.add(l2L);
	     var h2L=i2L.add(j2L);
	     var g2L=$hs_chrzh(h2L);
	     H2J.J(g2L,e2L,F2J);break;
	    }break;
	   case 2:
	    var D2L=D2J.add(goog.math.Long.fromBits(1,0));
	    var C2L=$hs_indexCharOffAddrzh(I2G,D2L);
	    var v2L=D2J.add(goog.math.Long.fromBits(2,0));
	    var u2L=$d(1,[v2L],"sat");
	    var B2L=$hs_ordzh(C2L);
	    var z2L=B2L.subtract(goog.math.Long.fromBits(128,0));
	    var A2L=G2J.subtract(goog.math.Long.fromBits(192,0));
	    var y2L=$hs_uncheckedIShiftLzh(A2L,goog.math.Long.fromBits(6,0));
	    var x2L=y2L.add(z2L);
	    var w2L=$hs_chrzh(x2L);
	    H2J.J(w2L,u2L,F2J);break;
	   }break;
	  case 2:
	   var F2L=D2J.add(goog.math.Long.fromBits(1,0));
	   var E2L=$d(1,[F2L],"sat");
	   H2J.J(G2L,E2L,F2J);break;
	  }
	 }
	},[I2G,Q2G,P2G,O2G],"$wa1");
	var K2L=S2G.add(goog.math.Long.fromBits(1,0));
	C2J.J(X2G,K2L,L2L);break;
       }break;
      case 2:
       var b2M=Q2G.add(goog.math.Long.fromBits(1,0));
       var W2L=$hs_uncheckedIShiftLzh(b2M,goog.math.Long.fromBits(1,0));
       var O2L=W2L.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(O2L.g){
       case 1:
	var a2M=$hs_int2Wordzh(W2L);
	var Z2L=a2M.and(goog.math.Long.fromBits(0,1073741824));
	var P2L=$hs_word2Intzh(Z2L);
	switch(P2L.toString()){
	case "0":
	 var Y2L=$hs_uncheckedIShiftLzh(W2L,goog.math.Long.fromBits(1,0));
	 var Q2L=$hs_newByteArrayzh(Y2L,d2H);
	 var R2L=Q2L[0],S2L=Q2L[1];
	 var T2L=Q2G.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(T2L.g){
	 case 1:
	  var X2L=$hs_int2Wordzh(Q2G);
	  var $ff=_hs_text_memcpy(S2L,goog.math.Long.fromBits(0,0),P2G,goog.math.Long.fromBits(0,0),X2L);
	  var U2L=[R2L,$ff];
	  var V2L=U2L[0];
	  O2G.J(S2L,W2L,R2G,S2G,V2L);break;
	 case 2:
	  O2G.J(S2L,W2L,R2G,S2G,R2L);break;
	 }break;
	default:
	 $A($$DataziText$P1);
	}break;
       case 2:
	$A($$DataziText$P1);break;
       }break;
      }
     },[I2G,R2G,a2H,b2H,Q2G,P2G,S2G,O2G,X2G],"a2");
     var e2M=$hs_ordzh(W2G);
     var c2M=e2M.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(c2M.g){
     case 1:
      var d2M=S2G.add(goog.math.Long.fromBits(1,0));
      Z2G.J(d2M,Y2G);break;
     case 2:
      Z2G.J(S2G,Y2G);break;
     }
    },[I2G,R2G,Q2G,P2G,S2G,O2G],"$s$wa1");
    var f2M=U2G.lessThanOrEqual(goog.math.Long.fromBits(127,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(f2M.g){
    case 1:
     var g2M=U2G.lessThanOrEqual(goog.math.Long.fromBits(223,0))?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(g2M.g){
     case 1:
      var h2M=U2G.lessThanOrEqual(goog.math.Long.fromBits(239,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(h2M.g){
      case 1:
       var C2M=R2G.add(goog.math.Long.fromBits(1,0));
       var u2M=$hs_indexCharOffAddrzh(I2G,C2M);
       var B2M=R2G.add(goog.math.Long.fromBits(2,0));
       var x2M=$hs_indexCharOffAddrzh(I2G,B2M);
       var A2M=R2G.add(goog.math.Long.fromBits(3,0));
       var z2M=$hs_indexCharOffAddrzh(I2G,A2M);
       var j2M=R2G.add(goog.math.Long.fromBits(4,0));
       var y2M=$hs_ordzh(z2M);
       var m2M=y2M.subtract(goog.math.Long.fromBits(128,0));
       var w2M=$hs_ordzh(x2M);
       var v2M=w2M.subtract(goog.math.Long.fromBits(128,0));
       var o2M=$hs_uncheckedIShiftLzh(v2M,goog.math.Long.fromBits(6,0));
       var t2M=$hs_ordzh(u2M);
       var s2M=t2M.subtract(goog.math.Long.fromBits(128,0));
       var q2M=$hs_uncheckedIShiftLzh(s2M,goog.math.Long.fromBits(12,0));
       var r2M=U2G.subtract(goog.math.Long.fromBits(240,0));
       var p2M=$hs_uncheckedIShiftLzh(r2M,goog.math.Long.fromBits(18,0));
       var n2M=p2M.add(q2M);
       var l2M=n2M.add(o2M);
       var k2M=l2M.add(m2M);
       var i2M=$hs_chrzh(k2M);
       V2G.J(i2M,j2M,T2G);break;
      case 2:
       var R2M=R2G.add(goog.math.Long.fromBits(1,0));
       var N2M=$hs_indexCharOffAddrzh(I2G,R2M);
       var Q2M=R2G.add(goog.math.Long.fromBits(2,0));
       var P2M=$hs_indexCharOffAddrzh(I2G,Q2M);
       var E2M=R2G.add(goog.math.Long.fromBits(3,0));
       var O2M=$hs_ordzh(P2M);
       var H2M=O2M.subtract(goog.math.Long.fromBits(128,0));
       var M2M=$hs_ordzh(N2M);
       var L2M=M2M.subtract(goog.math.Long.fromBits(128,0));
       var J2M=$hs_uncheckedIShiftLzh(L2M,goog.math.Long.fromBits(6,0));
       var K2M=U2G.subtract(goog.math.Long.fromBits(224,0));
       var I2M=$hs_uncheckedIShiftLzh(K2M,goog.math.Long.fromBits(12,0));
       var G2M=I2M.add(J2M);
       var F2M=G2M.add(H2M);
       var D2M=$hs_chrzh(F2M);
       V2G.J(D2M,E2M,T2G);break;
      }break;
     case 2:
      var a2N=R2G.add(goog.math.Long.fromBits(1,0));
      var Z2M=$hs_indexCharOffAddrzh(I2G,a2N);
      var T2M=R2G.add(goog.math.Long.fromBits(2,0));
      var Y2M=$hs_ordzh(Z2M);
      var W2M=Y2M.subtract(goog.math.Long.fromBits(128,0));
      var X2M=U2G.subtract(goog.math.Long.fromBits(192,0));
      var V2M=$hs_uncheckedIShiftLzh(X2M,goog.math.Long.fromBits(6,0));
      var U2M=V2M.add(W2M);
      var S2M=$hs_chrzh(U2M);
      V2G.J(S2M,T2M,T2G);break;
     }break;
    case 2:
     var c2N=R2G.add(goog.math.Long.fromBits(1,0));
     V2G.J(b2N,c2N,T2G);break;
    }
   }
  },[I2G],"$s$wa");
  O2G.J(N2G,goog.math.Long.fromBits(4,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),M2G);
 },[I2G],"sat");
 $$GHCziST_runSTRep.J(J2G);
},[],"at Data/Text.hs:383:1");
var $$DataziText$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow");
},"lvl2");
var $$DataziText$P1=$T(function(){
 $$GHCziErr_error.J($$DataziText$c);
},"poly_a36");
var $$DataziTextziArray_empty1=$f(1,function(P){
 var Q=$hs_newByteArrayzh(goog.math.Long.fromBits(0,0),P);
 var R=Q[0],S=Q[1];
 var T=$d(1,[S],"sat");
 $r([R,T]);
},[],"in `text-0.11.2.3:Data.Text.Array'");
var $$DataziTextziArray_empty=$t(function(){
 $$GHCziST_runSTRep.J($$DataziTextziArray_empty1);
},[],"at Data/Text/Array.hs:170:1");
var $$DataziTextziEncoding_zdwdecodeUtf8With=$f(5,function(m1a,n1a,o1a,p1a,q1a){
 var r1a=$f(1,function(s1a){
  var t1a=q1a.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(t1a.g){
  case 1:
   var R1b=$hs_int2Wordzh(q1a);
   var Q1b=R1b.and(goog.math.Long.fromBits(0,1073741824));
   var u1a=$hs_word2Intzh(Q1b);
   switch(u1a.toString()){
   case "0":
    var P1b=$hs_uncheckedIShiftLzh(q1a,goog.math.Long.fromBits(1,0));
    var v1a=$hs_newByteArrayzh(P1b,s1a);
    var w1a=v1a[0],x1a=v1a[1];
    var y1a=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),w1a);
    var z1a=y1a[0],A1a=y1a[1];
    var B1a=$hs_unsafeFreezzeByteArrayzh(A1a,z1a);
    var C1a=B1a[0],D1a=B1a[1];
    var F1a=$hs_byteArrayContentszh(D1a);
    var N1b=$hs_writeWord64OffAddrzh(F1a,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),C1a);
    var O1b=p1a.add(q1a);
    var G1a=$hs_plusAddrzh(n1a,O1b);
    var E1a=$f(2,function(H1a,I1a){
     var $ff=_hs_text_decode_utf8(x1a,F1a,H1a,G1a);
     var J1a=[I1a,$ff];
     var K1a=J1a[0],L1a=J1a[1];
     var M1a=$hs_eqAddrzh(L1a,G1a);
     switch(M1a.g){
     case 1:
      var N1a=$hs_readWord8OffAddrzh(L1a,goog.math.Long.fromBits(0,0),K1a);
      var O1a=N1a[0],P1a=N1a[1];
      var Q1a=$d(1,[P1a],"sat");
      var R1a=$d(2,[Q1a],"sat");
      m1a.C([$$DataziTextziEncoding$r,R1a],function(S1a){
       switch(S1a.g){
       case 1:
	var T1a=$hs_plusAddrzh(L1a,goog.math.Long.fromBits(1,0));
	E1a.J(T1a,O1a);break;
       case 2:
	var U1a=S1a.v[0];
	var V1a=$hs_readWord64OffAddrzh(F1a,goog.math.Long.fromBits(0,0),O1a);
	var W1a=V1a[0],X1a=V1a[1];
	$M(U1a,function(Y1a){
	 var Z1a=Y1a.v[0];
	 var t1b=$hs_ordzh(Z1a);
	 var a1b=t1b.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(a1b.g){
	 case 1:
	  var o1b=t1b.subtract(goog.math.Long.fromBits(65536,0));
	  var i1b=$hs_word2Intzh(X1a);
	  var s1b=$hs_uncheckedIShiftRAzh(o1b,goog.math.Long.fromBits(10,0));
	  var r1b=s1b.add(goog.math.Long.fromBits(55296,0));
	  var q1b=$hs_int2Wordzh(r1b);
	  var p1b=$hs_narrow16Wordzh(q1b);
	  var h1b=$hs_writeWord16Arrayzh(x1a,i1b,p1b,W1a);
	  var n1b=$hs_int2Wordzh(o1b);
	  var m1b=n1b.and(goog.math.Long.fromBits(1023,0));
	  var l1b=$hs_word2Intzh(m1b);
	  var k1b=l1b.add(goog.math.Long.fromBits(56320,0));
	  var j1b=$hs_int2Wordzh(k1b);
	  var g1b=$hs_narrow16Wordzh(j1b);
	  var f1b=i1b.add(goog.math.Long.fromBits(1,0));
	  var e1b=$hs_writeWord16Arrayzh(x1a,f1b,g1b,h1b);
	  var d1b=X1a.add(goog.math.Long.fromBits(2,0));
	  var c1b=$hs_writeWord64OffAddrzh(F1a,goog.math.Long.fromBits(0,0),d1b,e1b);
	  var b1b=$hs_plusAddrzh(L1a,goog.math.Long.fromBits(1,0));
	  E1a.J(b1b,c1b);break;
	 case 2:
	  var A1b=$hs_int2Wordzh(t1b);
	  var z1b=$hs_narrow16Wordzh(A1b);
	  var y1b=$hs_word2Intzh(X1a);
	  var x1b=$hs_writeWord16Arrayzh(x1a,y1b,z1b,W1a);
	  var w1b=X1a.add(goog.math.Long.fromBits(1,0));
	  var v1b=$hs_writeWord64OffAddrzh(F1a,goog.math.Long.fromBits(0,0),w1b,x1b);
	  var u1b=$hs_plusAddrzh(L1a,goog.math.Long.fromBits(1,0));
	  E1a.J(u1b,v1b);break;
	 }
	},[F1a,x1a,L1a,E1a,X1a,W1a]);break;
       }
      },[F1a,x1a,L1a,E1a,O1a]);break;
     case 2:
      var B1b=$hs_readWord64OffAddrzh(F1a,goog.math.Long.fromBits(0,0),K1a);
      var C1b=B1b[0],D1b=B1b[1];
      var E1b=$hs_word2Intzh(D1b);
      switch(E1b.toString()){
      case "0":
       $M($$DataziTextziInternal_empty,function(G1b){
	$r([C1b,G1b]);
       },[C1b]);break;
      default:
       var F1b=$d(1,[x1a,goog.math.Long.fromBits(0,0),E1b],"sat");
       $r([C1b,F1b]);
      }break;
     }
    },[F1a,G1a,x1a,m1a],"$wa");
    var M1b=$hs_plusAddrzh(n1a,p1a);
    E1a.C([M1b,N1b],function(H1b){
     var I1b=H1b[0],J1b=H1b[1];
     var L1b=$hs_touchzh(D1a,I1b);
     var K1b=$hs_touchzh(o1a,L1b);
     $r([K1b,J1b]);
    },[D1a,o1a]);break;
   default:
    $A($$DataziTextziEncoding$s);
   }break;
  case 2:
   $A($$DataziTextziEncoding$s);break;
  }
 },[q1a,n1a,p1a,m1a,o1a],"sat");
 $$GHCziST_runSTRep.J(r1a);
},[],"at Data/Text/Encoding.hs:100:1");
var $$DataziTextziEncoding_decodeUtf8=$f(1,function(Z1b){
 $M(Z1b,function(a1c){
  var b1c=a1c.v[0],c1c=a1c.v[1],d1c=a1c.v[2],e1c=a1c.v[3];
  $$DataziTextziEncoding_zdwdecodeUtf8With.J($$DataziTextziEncodingziError_strictDecode,b1c,c1c,d1c,e1c);
 },[]);
},[],"at Data/Text/Encoding.hs:134:1");
var $$DataziTextziEncoding$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow");
},"lvl");
var $$DataziTextziEncoding$r=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Encoding.decodeUtf8: Invalid UTF-8 stream");
},"at Data/Text/Encoding.hs:123:3");
var $$DataziTextziEncoding$s=$T(function(){
 $$GHCziErr_error.J($$DataziTextziEncoding$a);
},"poly_a8");
var $$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuds=$t(function(){
 $$GHCziCString_unpackCStringzh.J("text-0.11.2.3");
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuds1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Encoding.Error");
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UnicodeException");
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(590273980,3115492205),goog.math.Long.fromBits(302515882,3381791122),$$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuds,$$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuds1,$$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuds2]);
},"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfTypeableUnicodeException1=$D(1,function(){
 $r([goog.math.Long.fromBits(590273980,3115492205),goog.math.Long.fromBits(302515882,3381791122),$$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuwild,$$GHCziTypes_ZMZN]);
},"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuzdctypeOf=$f(1,function(J){
 $A($$DataziTextziEncodingziError_zdfTypeableUnicodeException1);
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshow=$f(1,function(K){
 $M(K,function(L){
  switch(L.g){
  case 1:
   var M=L.v[0],N=L.v[1];
   $M(N,function(O){
    switch(O.g){
    case 1:
     $$GHCziCString_unpackAppendCStringzh.J("Cannot decode input: ",M);break;
    case 2:
     var P=O.v[0];
     var Q=$t(function(){
      var R=$t(function(){
       $$GHCziCString_unpackAppendCStringzh.J("': ",M);
      },[M],"sat");
      $$Numeric_zdwshowIntAtBase.J($$GHCziWord_zdfRealWord8,$$GHCziWord_zdfIntegralWord8zuzdcquotRem,$$GHCziWord_zdfIntegralWord8zuzdctoInteger,$$GHCziWord_zdfShowWord8,$$DataziTextziEncodingziError$a,$$GHCziShow_intToDigit,P,R);
     },[M,P],"sat");
     $$GHCziCString_unpackAppendCStringzh.J("Cannot decode byte '\\x",Q);break;
    }
   },[M]);break;
  case 2:
   var S=L.v[0],T=L.v[1];
   $M(T,function(U){
    switch(U.g){
    case 1:
     $$GHCziCString_unpackAppendCStringzh.J("Cannot encode input: ",S);break;
    case 2:
     var V=U.v[0];
     var W=$t(function(){
      var X=$t(function(){
       $$GHCziCString_unpackAppendCStringzh.J("': ",S);
      },[S],"sat");
      var Y=$t(function(){
       $M(V,function(Z){
	var a1=Z.v[0];
	var b1=$hs_ordzh(a1);
	$R(1,[b1],"I#");
       },[]);
      },[V],"sat");
      $$Numeric_zdwshowIntAtBase.J($$GHCziReal_zdfRealInt,$$GHCziReal_zdfIntegralIntzuzdcquotRem,$$GHCziReal_zdfIntegralIntzuzdctoInteger,$$GHCziShow_zdfShowInt,$$DataziTextziEncodingziError$b,$$GHCziShow_intToDigit,Y,X);
     },[S,V],"sat");
     $$GHCziCString_unpackAppendCStringzh.J("Cannot encode character '\\x",W);break;
    }
   },[S]);break;
  }
 },[]);
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshowsPrec=$f(3,function(c1,d1,e1){
 $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshow.C([d1],function(f1){
  $$GHCziBase_zpzp.J(f1,e1);
 },[e1]);
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshowList=$f(2,function(g1,h1){
 $M(g1,function(i1){
  switch(i1.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",h1);break;
  case 2:
   var j1=i1.v[0],k1=i1.v[1];
   var l1=$t(function(){
    var m1=$t(function(){
     var n1=$d(2,[$$GHCziShow_showListzuzu2,h1],"lvl22");
     var o1=$f(1,function(p1){
      $M(p1,function(q1){
       switch(q1.g){
       case 1:
	$A(n1);break;
       case 2:
	var r1=q1.v[0],s1=q1.v[1];
	var t1=$t(function(){
	 var u1=$t(function(){
	  o1.J(s1);
	 },[s1,o1],"sat");
	 $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshow.C([r1],function(v1){
	  $$GHCziBase_zpzp.J(v1,u1);
	 },[u1]);
	},[r1,s1,o1],"sat");
	$R(2,[$$GHCziShow_showListzuzu1,t1],":");break;
       }
      },[n1,o1]);
     },[n1],"showl");
     o1.J(k1);
    },[h1,k1],"sat");
    $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshow.C([j1],function(w1){
     $$GHCziBase_zpzp.J(w1,m1);
    },[m1]);
   },[h1,j1,k1],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,l1],":");break;
  }
 },[h1]);
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfShowUnicodeException=$D(1,function(){
 $r([$$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshowsPrec,$$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshow,$$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshowList]);
},"at Data/Text/Encoding/Error.hs:92:10");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdcfromException=$f(1,function(x1){
 $M(x1,function(y1){
  var z1=y1.v[0],A1=y1.v[1];
  $$GHCziException_zdp1Exception.C([z1,A1],function(B1){
   var C1=B1.v[0],D1=B1.v[1];
   var E1=$hs_eqWordzh(C1,goog.math.Long.fromBits(590273980,3115492205));
   switch(E1.g){
   case 1:
    $R(1,[],"Nothing");break;
   case 2:
    var F1=$hs_eqWordzh(D1,goog.math.Long.fromBits(302515882,3381791122));
    switch(F1.g){
    case 1:
     $R(1,[],"Nothing");break;
    case 2:
     $R(2,[A1],"Just");break;
    }break;
   }
  },[A1]);
 },[]);
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeException=$D(1,function(){
 $r([$$DataziTextziEncodingziError_zdfTypeableUnicodeExceptionzuzdctypeOf,$$DataziTextziEncodingziError_zdfShowUnicodeException,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctoException,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdcfromException]);
},"at Data/Text/Encoding/Error.hs:95:10");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctoException=$f(1,function(G1){
 $R(1,[$$DataziTextziEncodingziError_zdfExceptionUnicodeException,G1],"SomeException");
},[],"in `text-0.11.2.3:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_strictDecode=$f(2,function(H1,I1){
 var J1=$d(1,[H1,I1],"sat");
 $$GHCziException_throw2.J(J1,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctoException);
},[],"at Data/Text/Encoding/Error.hs:99:1");
var $$DataziTextziEncodingziError$a=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"lvl");
var $$DataziTextziEncodingziError$b=$D(1,function(){
 $r([goog.math.Long.fromBits(16,0)]);
},"lvl1");
var $$DataziTextziInternal_empty=$t(function(){
 $M($$DataziTextziArray_empty,function(s){
  var t=s.v[0];
  $R(1,[t,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Text");
 },[]);
},[],"at Data/Text/Internal.hs:71:1");
var $$DataziTextziInternal_safe=$f(1,function(g1){
 $M(g1,function(h1){
  var i1=h1.v[0];
  var m1=$hs_ordzh(i1);
  var l1=$hs_int2Wordzh(m1);
  var k1=l1.and(goog.math.Long.fromBits(2095104,0));
  var j1=$hs_word2Intzh(k1);
  switch(j1.toString()){
  case "55296":
   $A($$DataziTextziInternal$a);break;
  default:
   $A(h1);
  }
 },[]);
},[],"at Data/Text/Internal.hs:95:1");
var $$DataziTextziInternal$a=$D(1,function(){
 $r(["\ufffd"]);
},"lvl");
var $$DataziTextziLazzy_fromChunkszugo=$f(1,function(g5P){
 $M(g5P,function(h5P){
  switch(h5P.g){
  case 1:
   $R(1,[],"Empty");break;
  case 2:
   var i5P=h5P.v[0],j5P=h5P.v[1];
   $M(i5P,function(k5P){
    var l5P=k5P.v[0],m5P=k5P.v[1],n5P=k5P.v[2];
    $M(n5P,function(o5P){
     switch(o5P.toString()){
     case "0":
      $$DataziTextziLazzy_fromChunkszugo.J(j5P);break;
     default:
      var p5P=$t(function(){
       $$DataziTextziLazzy_fromChunkszugo.J(j5P);
      },[j5P],"sat");
      $R(2,[l5P,m5P,o5P,p5P],"Chunk");
     }
    },[l5P,m5P,j5P]);
   },[j5P]);break;
  }
 },[]);
},[],"in `text-0.11.2.3:Data.Text.Lazy'");
var $$DataziTextziLazzyziBuilder_fromString=$f(4,function(u,v,w,x){
 $$DataziTextziLazzyziBuilder$c.J(u,v,w,x);
},[],"at Data/Text/Lazy/Builder.hs:168:1");
var $$DataziTextziLazzyziBuilder_zdfEqBuilder2=$t(function(){
 $$GHCziErr_error.J($$DataziTextziLazzyziBuilder$d);
},[],"in `text-0.11.2.3:Data.Text.Lazy.Builder'");
var $$DataziTextziLazzyziBuilder_zdfEqBuilder1=$f(2,function(X,Y){
 $M(X,function(Z){
  var a1=Z.v[0],b1=Z.v[1],c1=Z.v[2];
  $M(c1,function(d1){
   switch(d1.toString()){
   case "0":
    $r([Y,$$GHCziTypes_ZMZN]);break;
   default:
    var e1=$d(1,[a1,b1,d1],"sat");
    var f1=$d(2,[e1,$$GHCziTypes_ZMZN],"sat");
    $r([Y,f1]);
   }
  },[Y,a1,b1]);
 },[Y]);
},[],"in `text-0.11.2.3:Data.Text.Lazy.Builder'");
var $$DataziTextziLazzyziBuilder_zdwtoLazzyTextWith=$f(2,function(g1,h1){
 var i1=$f(1,function(j1){
  var k1=g1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(k1.g){
  case 1:
   var s1=$hs_int2Wordzh(g1);
   var r1=s1.and(goog.math.Long.fromBits(0,1073741824));
   var l1=$hs_word2Intzh(r1);
   switch(l1.toString()){
   case "0":
    var q1=$hs_uncheckedIShiftLzh(g1,goog.math.Long.fromBits(1,0));
    var m1=$hs_newByteArrayzh(q1,j1);
    var n1=m1[0],o1=m1[1];
    var p1=$d(1,[o1,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),g1],"sat");
    h1.J($$DataziTextziLazzyziBuilder_zdfEqBuilder1,p1,n1);break;
   default:
    $A($$DataziTextziLazzyziBuilder_zdfEqBuilder2);
   }break;
  case 2:
   $A($$DataziTextziLazzyziBuilder_zdfEqBuilder2);break;
  }
 },[g1,h1],"sat");
 $$GHCziST_runSTRep.C([i1],function(t1){
  $$DataziTextziLazzy_fromChunkszugo.J(t1);
 },[]);
},[],"at Data/Text/Lazy/Builder.hs:216:1");
var $$DataziTextziLazzyziBuilder_fromText=$f(4,function(u,v,w,x){
 $$DataziTextziLazzyziBuilder$u.J(u,v,w,x);
},[],"at Data/Text/Lazy/Builder.hs:152:1");
var $$DataziTextziLazzyziBuilder$b=$F(7,function(z3,A3,B3,C3,D3,E3,F3){
 var G3=$F(7,function(H3,I3,J3,K3,L3,M3,N3){
  var O3=K3.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(O3.g){
  case 1:
   $M(L3,function(P3){
    var Q3=P3.v[0];
    var k4=$hs_ordzh(Q3);
    var Z3=I3.add(J3);
    var R3=k4.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(R3.g){
    case 1:
     var f4=k4.subtract(goog.math.Long.fromBits(65536,0));
     var j4=$hs_uncheckedIShiftRAzh(f4,goog.math.Long.fromBits(10,0));
     var i4=j4.add(goog.math.Long.fromBits(55296,0));
     var h4=$hs_int2Wordzh(i4);
     var g4=$hs_narrow16Wordzh(h4);
     var Y3=$hs_writeWord16Arrayzh(H3,Z3,g4,N3);
     var e4=$hs_int2Wordzh(f4);
     var d4=e4.and(goog.math.Long.fromBits(1023,0));
     var c4=$hs_word2Intzh(d4);
     var b4=c4.add(goog.math.Long.fromBits(56320,0));
     var a4=$hs_int2Wordzh(b4);
     var X3=$hs_narrow16Wordzh(a4);
     var W3=Z3.add(goog.math.Long.fromBits(1,0));
     var V3=$hs_writeWord16Arrayzh(H3,W3,X3,Y3);
     var U3=K3.subtract(goog.math.Long.fromBits(2,0));
     var T3=J3.add(goog.math.Long.fromBits(2,0));
     S3.J(H3,I3,T3,U3,M3,V3);break;
    case 2:
     var p4=$hs_int2Wordzh(k4);
     var o4=$hs_narrow16Wordzh(p4);
     var n4=$hs_writeWord16Arrayzh(H3,Z3,o4,N3);
     var m4=K3.subtract(goog.math.Long.fromBits(1,0));
     var l4=J3.add(goog.math.Long.fromBits(1,0));
     S3.J(H3,I3,l4,m4,M3,n4);break;
    }
   },[K3,I3,J3,H3,N3,S3,M3]);break;
  case 2:
   var q4=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),N3);
   var r4=q4[0],s4=q4[1];
   var t4=$t(function(){
    G3.C([s4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(112,0),L3,M3,r4],function(u4){
     var v4=u4[1];
     $A(v4);
    },[]);
   },[L3,M3,r4,s4,G3],"sat");
   var w4=$d(1,[H3,I3,J3],"sat");
   var x4=$d(2,[w4,t4],"sat");
   $r([r4,x4]);break;
  }
 },"$s$wa"),S3=$f(6,function(y4,z4,A4,B4,C4,D4){
  $M(C4,function(E4){
   switch(E4.g){
   case 1:
    var F4=$d(1,[y4,z4,A4,B4],"sat");
    A3.J(F4,D4);break;
   case 2:
    var G4=E4.v[0],H4=E4.v[1];
    var I4=B4.lessThanOrEqual(goog.math.Long.fromBits(1,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(I4.g){
    case 1:
     $M(G4,function(J4){
      var K4=J4.v[0];
      var d5=$hs_ordzh(K4);
      var S4=z4.add(A4);
      var L4=d5.lessThan(goog.math.Long.fromBits(65536,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(L4.g){
      case 1:
       var Y4=d5.subtract(goog.math.Long.fromBits(65536,0));
       var c5=$hs_uncheckedIShiftRAzh(Y4,goog.math.Long.fromBits(10,0));
       var b5=c5.add(goog.math.Long.fromBits(55296,0));
       var a5=$hs_int2Wordzh(b5);
       var Z4=$hs_narrow16Wordzh(a5);
       var R4=$hs_writeWord16Arrayzh(y4,S4,Z4,D4);
       var X4=$hs_int2Wordzh(Y4);
       var W4=X4.and(goog.math.Long.fromBits(1023,0));
       var V4=$hs_word2Intzh(W4);
       var U4=V4.add(goog.math.Long.fromBits(56320,0));
       var T4=$hs_int2Wordzh(U4);
       var Q4=$hs_narrow16Wordzh(T4);
       var P4=S4.add(goog.math.Long.fromBits(1,0));
       var O4=$hs_writeWord16Arrayzh(y4,P4,Q4,R4);
       var N4=B4.subtract(goog.math.Long.fromBits(2,0));
       var M4=A4.add(goog.math.Long.fromBits(2,0));
       S3.J(y4,z4,M4,N4,H4,O4);break;
      case 2:
       var i5=$hs_int2Wordzh(d5);
       var h5=$hs_narrow16Wordzh(i5);
       var g5=$hs_writeWord16Arrayzh(y4,S4,h5,D4);
       var f5=B4.subtract(goog.math.Long.fromBits(1,0));
       var e5=A4.add(goog.math.Long.fromBits(1,0));
       S3.J(y4,z4,e5,f5,H4,g5);break;
      }
     },[S3,y4,z4,A4,B4,D4,H4]);break;
    case 2:
     var j5=$hs_newByteArrayzh(goog.math.Long.fromBits(224,0),D4);
     var k5=j5[0],l5=j5[1];
     var m5=$t(function(){
      G3.C([l5,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(112,0),G4,H4,k5],function(n5){
       var o5=n5[1];
       $A(o5);
      },[]);
     },[G3,G4,H4,k5,l5],"sat");
     var p5=$d(1,[y4,z4,A4],"sat");
     var q5=$d(2,[p5,m5],"sat");
     $r([k5,q5]);break;
    }break;
   }
  },[S3,G3,y4,z4,A4,B4,A3,D4]);
 },[G3,A3],"$wa6");
 $S(G3,[S3]);
 S3.J(B3,C3,D3,E3,z3,F3);
},"$wa1");
var $$DataziTextziLazzyziBuilder$c=$F(4,function(r5,s5,t5,u5){
 $M(t5,function(v5){
  var w5=v5.v[0],x5=v5.v[1],y5=v5.v[2],z5=v5.v[3];
  $$DataziTextziLazzyziBuilder$b.J(r5,s5,w5,x5,y5,z5,u5);
 },[r5,s5,u5]);
},"a1");
var $$DataziTextziLazzyziBuilder$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow");
},"lvl");
var $$DataziTextziLazzyziBuilder$s=$T(function(){
 $$GHCziErr_error.J($$DataziTextziLazzyziBuilder$d);
},"poly_a2");
var $$DataziTextziLazzyziBuilder$t=$F(6,function(qb,rb,sb,tb,ub,vb){
 var wb=sb.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(wb.g){
 case 1:
  var xb=sb.lessThanOrEqual(goog.math.Long.fromBits(128,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(xb.g){
  case 1:
   $M(ub,function(yb){
    var zb=yb.v[0],Ab=yb.v[1],Bb=yb.v[2],Cb=yb.v[3];
    $M(Bb,function(Db){
     switch(Db.toString()){
     case "0":
      tb.C([yb,vb],function(Mb){
       var Nb=Mb[0],Ob=Mb[1];
       var Pb=$d(1,[qb,rb,sb],"sat");
       var Qb=$d(2,[Pb,Ob],"sat");
       $r([Nb,Qb]);
      },[sb,qb,rb]);break;
     default:
      var Eb=$t(function(){
       var Gb=Ab.add(Db);
       var Fb=$d(1,[zb,Gb,goog.math.Long.fromBits(0,0),Cb],"sat");
       tb.C([Fb,vb],function(Hb){
	var Ib=Hb[1];
	var Jb=$d(1,[qb,rb,sb],"sat");
	$R(2,[Jb,Ib],":");
       },[sb,qb,rb]);
      },[sb,vb,zb,Ab,Db,Cb,tb,qb,rb],"sat");
      var Kb=$d(1,[zb,Ab,Db],"sat");
      var Lb=$d(2,[Kb,Eb],"sat");
      $r([vb,Lb]);
     }
    },[sb,vb,zb,Ab,Cb,tb,qb,rb,yb]);
   },[sb,vb,tb,qb,rb]);break;
  case 2:
   $M(ub,function(Rb){
    var Sb=Rb.v[0],Tb=Rb.v[1],Ub=Rb.v[2],Vb=Rb.v[3];
    var Wb=$f(5,function(Xb,Yb,Zb,ac,bc){
     var lc=Yb.add(Zb);
     var nc=sb.add(lc);
     var cc=lc.greaterThanOrEqual(nc)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(cc.g){
     case 1:
      var mc=nc.subtract(lc);
      var kc=$hs_int2Wordzh(mc);
      var jc=$hs_int2Wordzh(rb);
      var ic=$hs_int2Wordzh(lc);
      var $ff=_hs_text_memcpy(Xb,ic,qb,jc,kc);
      var dc=[bc,$ff];
      var ec=dc[0];
      var hc=ac.subtract(sb);
      var gc=Zb.add(sb);
      var fc=$d(1,[Xb,Yb,gc,hc],"sat");
      tb.J(fc,ec);break;
     case 2:
      var qc=ac.subtract(sb);
      var pc=Zb.add(sb);
      var oc=$d(1,[Xb,Yb,pc,qc],"sat");
      tb.J(oc,bc);break;
     }
    },[sb,tb,qb,rb],"$wa6");
    var rc=sb.lessThanOrEqual(Vb)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(rc.g){
    case 1:
     var sc=$f(1,function(tc){
      var uc=$f(1,function(vc){
       var wc=vc.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(wc.g){
       case 1:
	var Dc=$hs_int2Wordzh(vc);
	var Cc=Dc.and(goog.math.Long.fromBits(0,1073741824));
	var xc=$hs_word2Intzh(Cc);
	switch(xc.toString()){
	case "0":
	 var Bc=$hs_uncheckedIShiftLzh(vc,goog.math.Long.fromBits(1,0));
	 var yc=$hs_newByteArrayzh(Bc,tc);
	 var zc=yc[0],Ac=yc[1];
	 Wb.J(Ac,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),vc,zc);break;
	default:
	 $A($$DataziTextziLazzyziBuilder$s);
	}break;
       case 2:
	$A($$DataziTextziLazzyziBuilder$s);break;
       }
      },[Wb,tc],"$j");
      var Ec=sb.lessThanOrEqual(goog.math.Long.fromBits(112,0))?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Ec.g){
      case 1:
       uc.J(sb);break;
      case 2:
       uc.J(goog.math.Long.fromBits(112,0));break;
      }
     },[sb,Wb],"$wa7");
     $M(Ub,function(Fc){
      switch(Fc.toString()){
      case "0":
       sc.J(vb);break;
      default:
       var Gc=$t(function(){
	sc.C([vb],function(Hc){
	 var Ic=Hc[1];
	 $A(Ic);
	},[]);
       },[vb,sc],"sat");
       var Jc=$d(1,[Sb,Tb,Fc],"sat");
       var Kc=$d(2,[Jc,Gc],"sat");
       $r([vb,Kc]);
      }
     },[vb,sc,Sb,Tb]);break;
    case 2:
     Wb.J(Sb,Tb,Ub,Vb,vb);break;
    }
   },[sb,vb,tb,qb,rb]);break;
  }break;
 case 2:
  tb.J(ub,vb);break;
 }
},"$wa5");
var $$DataziTextziLazzyziBuilder$u=$F(4,function(Lc,Mc,Nc,Oc){
 $M(Lc,function(Pc){
  var Qc=Pc.v[0],Rc=Pc.v[1],Sc=Pc.v[2];
  $$DataziTextziLazzyziBuilder$t.J(Qc,Rc,Sc,Mc,Nc,Oc);
 },[Mc,Nc,Oc]);
},"a8");
var $$DataziTextziSearch_zdwindices=$f(6,function(g,h,i,j,k,l){
 $M(i,function(m){
  switch(m.toString()){
  case "1":
   var a4=goog.math.Long.fromBits(0,0).greaterThanOrEqual(l)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(a4.g){
   case 1:
    var d4=$hs_indexWord16Arrayzh(g,h);
    var z4=$hs_indexWord16Arrayzh(j,k);
    var b4=$hs_eqWordzh(z4,d4);
    switch(b4.g){
    case 1:
     var c4=$f(1,function(e4){
      var f4=e4.greaterThanOrEqual(l)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(f4.g){
      case 1:
       var m4=k.add(e4);
       var l4=$hs_indexWord16Arrayzh(j,m4);
       var g4=$hs_eqWordzh(l4,d4);
       switch(g4.g){
       case 1:
	var h4=e4.add(goog.math.Long.fromBits(1,0));
	c4.J(h4);break;
       case 2:
	var i4=$t(function(){
	 var j4=e4.add(goog.math.Long.fromBits(1,0));
	 c4.J(j4);
	},[e4,c4],"sat");
	var k4=$d(1,[e4],"sat");
	$R(2,[k4,i4],":");break;
       }break;
      case 2:
       $R(1,[],"[]");break;
      }
     },[l,j,k,d4],"$wloop");
     c4.J(goog.math.Long.fromBits(1,0));break;
    case 2:
     var n4=$t(function(){
      var o4=$f(1,function(p4){
       var q4=p4.greaterThanOrEqual(l)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(q4.g){
       case 1:
	var x4=k.add(p4);
	var w4=$hs_indexWord16Arrayzh(j,x4);
	var r4=$hs_eqWordzh(w4,d4);
	switch(r4.g){
	case 1:
	 var s4=p4.add(goog.math.Long.fromBits(1,0));
	 o4.J(s4);break;
	case 2:
	 var t4=$t(function(){
	  var u4=p4.add(goog.math.Long.fromBits(1,0));
	  o4.J(u4);
	 },[p4,o4],"sat");
	 var v4=$d(1,[p4],"sat");
	 $R(2,[v4,t4],":");break;
	}break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[l,j,k,d4],"$wloop");
      o4.J(goog.math.Long.fromBits(1,0));
     },[l,j,k,d4],"sat");
     var y4=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
     $R(2,[y4,n4],":");break;
    }break;
   case 2:
    $R(1,[],"[]");break;
   }break;
  default:
   var n=m.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(n.g){
   case 1:
    var T=l.subtract(m);
    var o=T.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(o.g){
    case 1:
     var q=m.subtract(goog.math.Long.fromBits(1,0));
     var Z3=h.add(q);
     var r=$hs_indexWord16Arrayzh(g,Z3);
     var p=$f(3,function(s,t,u){
      var v=s.greaterThanOrEqual(q)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(v.g){
      case 1:
       var K=h.add(s);
       var C=$hs_indexWord16Arrayzh(g,K);
       var w=$hs_eqWordzh(C,r);
       switch(w.g){
       case 1:
	var B=C.and(goog.math.Long.fromBits(63,0));
	var A=$hs_word2Intzh(B);
	var z=$hs_uncheckedShiftLzh(goog.math.Long.fromBits(1,0),A);
	var y=t.or(z);
	var x=s.add(goog.math.Long.fromBits(1,0));
	p.J(x,y,u);break;
       case 2:
	var J=m.subtract(s);
	var F=J.subtract(goog.math.Long.fromBits(2,0));
	var I=C.and(goog.math.Long.fromBits(63,0));
	var H=$hs_word2Intzh(I);
	var G=$hs_uncheckedShiftLzh(goog.math.Long.fromBits(1,0),H);
	var E=t.or(G);
	var D=s.add(goog.math.Long.fromBits(1,0));
	p.J(D,E,F);break;
       }break;
      case 2:
       var O=r.and(goog.math.Long.fromBits(63,0));
       var N=$hs_word2Intzh(O);
       var M=$hs_uncheckedShiftLzh(goog.math.Long.fromBits(1,0),N);
       var L=t.or(M);
       $r([L,u]);break;
      }
     },[m,q,g,h,r],"$wbuildTable");
     var Y3=m.subtract(goog.math.Long.fromBits(2,0));
     p.C([goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),Y3],function(P){
      var Q=P[0],R=P[1];
      var U=m.add(goog.math.Long.fromBits(1,0));
      var S=$f(1,function(V){
       var W=V.greaterThan(T)?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(W.g){
       case 1:
	var X3=V.add(q);
	var W3=k.add(X3);
	var Y=$hs_indexWord16Arrayzh(j,W3);
	var X=$t(function(){
	 var m1=V.add(m);
	 var Z=m1.equals(l)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Z.g){
	 case 1:
	  var l1=k.add(m1);
	  var k1=$hs_indexWord16Arrayzh(j,l1);
	  var j1=k1.and(goog.math.Long.fromBits(63,0));
	  var i1=$hs_word2Intzh(j1);
	  var h1=$hs_uncheckedShiftLzh(goog.math.Long.fromBits(1,0),i1);
	  var g1=Q.and(h1);
	  var a1=$hs_eqWordzh(g1,goog.math.Long.fromBits(0,0));
	  switch(a1.g){
	  case 1:
	   var b1=$hs_eqWordzh(Y,r);
	   switch(b1.g){
	   case 1:
	    var c1=V.add(goog.math.Long.fromBits(1,0));
	    S.J(c1);break;
	   case 2:
	    var e1=R.add(goog.math.Long.fromBits(1,0));
	    var d1=V.add(e1);
	    S.J(d1);break;
	   }break;
	  case 2:
	   var f1=V.add(U);
	   S.J(f1);break;
	  }break;
	 case 2:
	  var G3=Q.and(goog.math.Long.fromBits(1,0));
	  var n1=$hs_eqWordzh(G3,goog.math.Long.fromBits(0,0));
	  switch(n1.g){
	  case 1:
	   var o1=$hs_eqWordzh(Y,r);
	   switch(o1.g){
	   case 1:
	    var p1=$f(1,function(q1){
	     var r1=q1.greaterThan(T)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(r1.g){
	     case 1:
	      var c2=q1.add(q);
	      var b2=k.add(c2);
	      var t1=$hs_indexWord16Arrayzh(j,b2);
	      var s1=$t(function(){
	       var H1=q1.add(m);
	       var u1=H1.equals(l)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(u1.g){
	       case 1:
		var G1=k.add(H1);
		var F1=$hs_indexWord16Arrayzh(j,G1);
		var E1=F1.and(goog.math.Long.fromBits(63,0));
		var D1=$hs_word2Intzh(E1);
		var C1=$hs_uncheckedShiftLzh(goog.math.Long.fromBits(1,0),D1);
		var B1=Q.and(C1);
		var v1=$hs_eqWordzh(B1,goog.math.Long.fromBits(0,0));
		switch(v1.g){
		case 1:
		 var w1=$hs_eqWordzh(t1,r);
		 switch(w1.g){
		 case 1:
		  var x1=q1.add(goog.math.Long.fromBits(1,0));
		  p1.J(x1);break;
		 case 2:
		  var z1=R.add(goog.math.Long.fromBits(1,0));
		  var y1=q1.add(z1);
		  p1.J(y1);break;
		 }break;
		case 2:
		 var A1=q1.add(U);
		 p1.J(A1);break;
		}break;
	       case 2:
		var I1=$hs_eqWordzh(t1,r);
		switch(I1.g){
		case 1:
		 var J1=q1.add(goog.math.Long.fromBits(1,0));
		 p1.J(J1);break;
		case 2:
		 var L1=R.add(goog.math.Long.fromBits(1,0));
		 var K1=q1.add(L1);
		 p1.J(K1);break;
		}break;
	       }
	      },[m,l,r,U,j,k,Q,R,q1,t1,p1],"$w$j1");
	      var M1=$hs_eqWordzh(t1,r);
	      switch(M1.g){
	      case 1:
	       $A(s1);break;
	      case 2:
	       var N1=$f(1,function(O1){
		var P1=O1.greaterThanOrEqual(q)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(P1.g){
		case 1:
		 var W1=h.add(O1);
		 var T1=$hs_indexWord16Arrayzh(g,W1);
		 var V1=q1.add(O1);
		 var U1=k.add(V1);
		 var S1=$hs_indexWord16Arrayzh(j,U1);
		 var Q1=$hs_eqWordzh(S1,T1);
		 switch(Q1.g){
		 case 1:
		  $R(1,[],"False");break;
		 case 2:
		  var R1=O1.add(goog.math.Long.fromBits(1,0));
		  N1.J(R1);break;
		 }break;
		case 2:
		 $R(2,[],"True");break;
		}
	       },[q,g,h,j,k,q1],"$wcandidateMatch");
	       N1.C([goog.math.Long.fromBits(0,0)],function(X1){
		switch(X1.g){
		case 1:
		 $A(s1);break;
		case 2:
		 var Y1=$t(function(){
		  var Z1=q1.add(m);
		  p1.J(Z1);
		 },[m,q1,p1],"sat");
		 var a2=$d(1,[q1],"sat");
		 $R(2,[a2,Y1],":");break;
		}
	       },[m,l,r,U,j,k,Q,R,q1,t1,p1,s1]);break;
	      }break;
	     case 2:
	      $R(1,[],"[]");break;
	     }
	    },[m,l,T,q,g,h,r,U,j,k,Q,R],"$wscan1");
	    var d2=V.add(goog.math.Long.fromBits(1,0));
	    p1.J(d2);break;
	   case 2:
	    var e2=$f(1,function(f2){
	     var g2=f2.greaterThan(T)?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(g2.g){
	     case 1:
	      var R2=f2.add(q);
	      var Q2=k.add(R2);
	      var i2=$hs_indexWord16Arrayzh(j,Q2);
	      var h2=$t(function(){
	       var w2=f2.add(m);
	       var j2=w2.equals(l)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(j2.g){
	       case 1:
		var v2=k.add(w2);
		var u2=$hs_indexWord16Arrayzh(j,v2);
		var t2=u2.and(goog.math.Long.fromBits(63,0));
		var s2=$hs_word2Intzh(t2);
		var r2=$hs_uncheckedShiftLzh(goog.math.Long.fromBits(1,0),s2);
		var q2=Q.and(r2);
		var k2=$hs_eqWordzh(q2,goog.math.Long.fromBits(0,0));
		switch(k2.g){
		case 1:
		 var l2=$hs_eqWordzh(i2,r);
		 switch(l2.g){
		 case 1:
		  var m2=f2.add(goog.math.Long.fromBits(1,0));
		  e2.J(m2);break;
		 case 2:
		  var o2=R.add(goog.math.Long.fromBits(1,0));
		  var n2=f2.add(o2);
		  e2.J(n2);break;
		 }break;
		case 2:
		 var p2=f2.add(U);
		 e2.J(p2);break;
		}break;
	       case 2:
		var x2=$hs_eqWordzh(i2,r);
		switch(x2.g){
		case 1:
		 var y2=f2.add(goog.math.Long.fromBits(1,0));
		 e2.J(y2);break;
		case 2:
		 var A2=R.add(goog.math.Long.fromBits(1,0));
		 var z2=f2.add(A2);
		 e2.J(z2);break;
		}break;
	       }
	      },[m,l,r,U,j,k,Q,R,f2,i2,e2],"$w$j1");
	      var B2=$hs_eqWordzh(i2,r);
	      switch(B2.g){
	      case 1:
	       $A(h2);break;
	      case 2:
	       var C2=$f(1,function(D2){
		var E2=D2.greaterThanOrEqual(q)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(E2.g){
		case 1:
		 var L2=h.add(D2);
		 var I2=$hs_indexWord16Arrayzh(g,L2);
		 var K2=f2.add(D2);
		 var J2=k.add(K2);
		 var H2=$hs_indexWord16Arrayzh(j,J2);
		 var F2=$hs_eqWordzh(H2,I2);
		 switch(F2.g){
		 case 1:
		  $R(1,[],"False");break;
		 case 2:
		  var G2=D2.add(goog.math.Long.fromBits(1,0));
		  C2.J(G2);break;
		 }break;
		case 2:
		 $R(2,[],"True");break;
		}
	       },[q,g,h,j,k,f2],"$wcandidateMatch");
	       C2.C([goog.math.Long.fromBits(0,0)],function(M2){
		switch(M2.g){
		case 1:
		 $A(h2);break;
		case 2:
		 var N2=$t(function(){
		  var O2=f2.add(m);
		  e2.J(O2);
		 },[m,f2,e2],"sat");
		 var P2=$d(1,[f2],"sat");
		 $R(2,[P2,N2],":");break;
		}
	       },[m,l,r,U,j,k,Q,R,f2,i2,e2,h2]);break;
	      }break;
	     case 2:
	      $R(1,[],"[]");break;
	     }
	    },[m,l,T,q,g,h,r,U,j,k,Q,R],"$wscan1");
	    var T2=R.add(goog.math.Long.fromBits(1,0));
	    var S2=V.add(T2);
	    e2.J(S2);break;
	   }break;
	  case 2:
	   var U2=$f(1,function(V2){
	    var W2=V2.greaterThan(T)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(W2.g){
	    case 1:
	     var E3=V2.add(q);
	     var D3=k.add(E3);
	     var Y2=$hs_indexWord16Arrayzh(j,D3);
	     var X2=$t(function(){
	      var m3=V2.add(m);
	      var Z2=m3.equals(l)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Z2.g){
	      case 1:
	       var l3=k.add(m3);
	       var k3=$hs_indexWord16Arrayzh(j,l3);
	       var j3=k3.and(goog.math.Long.fromBits(63,0));
	       var i3=$hs_word2Intzh(j3);
	       var h3=$hs_uncheckedShiftLzh(goog.math.Long.fromBits(1,0),i3);
	       var g3=Q.and(h3);
	       var a3=$hs_eqWordzh(g3,goog.math.Long.fromBits(0,0));
	       switch(a3.g){
	       case 1:
		var b3=$hs_eqWordzh(Y2,r);
		switch(b3.g){
		case 1:
		 var c3=V2.add(goog.math.Long.fromBits(1,0));
		 U2.J(c3);break;
		case 2:
		 var e3=R.add(goog.math.Long.fromBits(1,0));
		 var d3=V2.add(e3);
		 U2.J(d3);break;
		}break;
	       case 2:
		var f3=V2.add(U);
		U2.J(f3);break;
	       }break;
	      case 2:
	       var n3=V2.add(U);
	       U2.J(n3);break;
	      }
	     },[m,l,r,U,j,k,Q,R,V2,Y2,U2],"$w$j1");
	     var o3=$hs_eqWordzh(Y2,r);
	     switch(o3.g){
	     case 1:
	      $A(X2);break;
	     case 2:
	      var p3=$f(1,function(q3){
	       var r3=q3.greaterThanOrEqual(q)?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(r3.g){
	       case 1:
		var y3=h.add(q3);
		var v3=$hs_indexWord16Arrayzh(g,y3);
		var x3=V2.add(q3);
		var w3=k.add(x3);
		var u3=$hs_indexWord16Arrayzh(j,w3);
		var s3=$hs_eqWordzh(u3,v3);
		switch(s3.g){
		case 1:
		 $R(1,[],"False");break;
		case 2:
		 var t3=q3.add(goog.math.Long.fromBits(1,0));
		 p3.J(t3);break;
		}break;
	       case 2:
		$R(2,[],"True");break;
	       }
	      },[q,g,h,j,k,V2],"$wcandidateMatch");
	      p3.C([goog.math.Long.fromBits(0,0)],function(z3){
	       switch(z3.g){
	       case 1:
		$A(X2);break;
	       case 2:
		var A3=$t(function(){
		 var B3=V2.add(m);
		 U2.J(B3);
		},[m,V2,U2],"sat");
		var C3=$d(1,[V2],"sat");
		$R(2,[C3,A3],":");break;
	       }
	      },[m,l,r,U,j,k,Q,R,V2,Y2,U2,X2]);break;
	     }break;
	    case 2:
	     $R(1,[],"[]");break;
	    }
	   },[m,l,T,q,g,h,r,U,j,k,Q,R],"$wscan1");
	   var F3=V.add(U);
	   U2.J(F3);break;
	  }break;
	 }
	},[m,l,T,q,g,h,r,U,V,j,k,Q,Y,S,R],"$w$j");
	var H3=$hs_eqWordzh(Y,r);
	switch(H3.g){
	case 1:
	 $A(X);break;
	case 2:
	 var I3=$f(1,function(J3){
	  var K3=J3.greaterThanOrEqual(q)?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(K3.g){
	  case 1:
	   var R3=h.add(J3);
	   var O3=$hs_indexWord16Arrayzh(g,R3);
	   var Q3=V.add(J3);
	   var P3=k.add(Q3);
	   var N3=$hs_indexWord16Arrayzh(j,P3);
	   var L3=$hs_eqWordzh(N3,O3);
	   switch(L3.g){
	   case 1:
	    $R(1,[],"False");break;
	   case 2:
	    var M3=J3.add(goog.math.Long.fromBits(1,0));
	    I3.J(M3);break;
	   }break;
	  case 2:
	   $R(2,[],"True");break;
	  }
	 },[q,g,h,V,j,k],"$wcandidateMatch");
	 I3.C([goog.math.Long.fromBits(0,0)],function(S3){
	  switch(S3.g){
	  case 1:
	   $A(X);break;
	  case 2:
	   var T3=$t(function(){
	    var U3=V.add(m);
	    S.J(U3);
	   },[m,V,S],"sat");
	   var V3=$d(1,[V],"sat");
	   $R(2,[V3,T3],":");break;
	  }
	 },[m,l,T,q,g,h,r,U,V,j,k,Q,Y,S,R,X]);break;
	}break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[m,l,T,q,g,h,r,U,j,k,Q,R],"$wscan");
      S.J(goog.math.Long.fromBits(0,0));
     },[m,l,T,q,g,h,r,j,k]);break;
    case 2:
     $R(1,[],"[]");break;
    }break;
   case 2:
    $R(1,[],"[]");break;
   }
  }
 },[l,g,h,j,k]);
},[],"at Data/Text/Search.hs:52:1");
var $$GraphicsziUIziGtkziWebKitziDOMziCSSStyleDeclaration_cssStyleDeclarationSetCssText2=$f(3,function(P2,Q2,R2){
 var S2=$t(function(){
  $$SystemziGlibziUTFString_fromUTF.C([R2],function(T2){
   var U2=$d(1,[Q2],"sat");
   var V2=$d(1,[P2],"sat");
   $R(1,[V2,U2,T2],"GError");
  },[P2,Q2]);
 },[R2,P2,Q2],"sat");
 $$SystemziGlibziGError_throwGError.J(S2);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.CSSStyleDeclaration'");
var $$GraphicsziUIziGtkziWebKitziDOMziCSSStyleDeclaration_cssStyleDeclarationSetProperty1=$f(6,function(W2,X2,Y2,Z2,a3,b3){
 var c3=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),b3);
 var d3=c3[0],e3=c3[1];
 var f3=$hs_unsafeFreezzeByteArrayzh(e3,d3);
 var g3=f3[0],h3=f3[1];
 var m3=$hs_byteArrayContentszh(h3);
 var e4=$hs_writeAddrOffAddrzh(m3,goog.math.Long.fromBits(0,0),null,g3);
 var i3=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(Z2);
 },[Z2],"a");
 var j3=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(Y2);
 },[Y2],"a2");
 var k3=$t(function(){
  $$SystemziGlibziTypes_toGObject.J(W2,X2);
 },[W2,X2],"a3");
 var l3=$f(1,function(n3){
  var o3=$f(1,function(p3){
   var q3=$f(2,function(r3,s3){
    $M(k3,function(t3){
     var u3=t3.v[0],v3=t3.v[1];
     $M(r3,function(w3){
      var x3=w3.v[0];
      $M(p3,function(y3){
       var z3=y3.v[0];
       $M(n3,function(A3){
	var B3=A3.v[0];
	var $ff=webkit_dom_css_style_declaration_set_property(u3,x3,z3,B3,m3);
	var C3=[s3,$ff];
	var D3=C3[0];
	var E3=$hs_touchzh(v3,D3);
	$r([E3,$$GHCziTuple_Z0T]);
       },[m3,u3,x3,z3,s3,v3]);
      },[m3,n3,u3,x3,s3,v3]);
     },[m3,p3,n3,u3,s3,v3]);
    },[m3,r3,p3,n3,s3]);
   },[m3,k3,p3,n3],"sat");
   $$ForeignziCziString_withCAString.J(j3,q3);
  },[m3,j3,k3,n3],"sat");
  $$ForeignziCziString_withCAString.J(i3,o3);
 },[m3,i3,j3,k3],"sat");
 var F3=$t(function(){
  $$SystemziGlibziUTFString_toUTF.J(a3);
 },[a3],"sat");
 $$ForeignziCziString_withCAString.C([F3,l3,e4],function(G3){
  var H3=G3[0],I3=G3[1];
  var J3=$hs_readAddrOffAddrzh(m3,goog.math.Long.fromBits(0,0),H3);
  var K3=J3[0],L3=J3[1];
  var M3=$hs_eqAddrzh(L3,null);
  switch(M3.g){
  case 1:
   var c4=$hs_plusAddrzh(L3,goog.math.Long.fromBits(0,0));
   var N3=$hs_readWord32OffAddrzh(c4,goog.math.Long.fromBits(0,0),K3);
   var O3=N3[0],P3=N3[1];
   var b4=$hs_plusAddrzh(L3,goog.math.Long.fromBits(4,0));
   var Q3=$hs_readInt32OffAddrzh(b4,goog.math.Long.fromBits(0,0),O3);
   var R3=Q3[0],S3=Q3[1];
   var a4=$hs_plusAddrzh(L3,goog.math.Long.fromBits(8,0));
   var T3=$hs_readAddrOffAddrzh(a4,goog.math.Long.fromBits(0,0),R3);
   var U3=T3[0],V3=T3[1];
   $$ForeignziCziString_zdwa.C([V3,U3],function(W3){
    var X3=W3[0],Y3=W3[1];
    var $ff=g_error_free(L3);
    var Z3=[X3,$ff];
    $$GraphicsziUIziGtkziWebKitziDOMziCSSStyleDeclaration_cssStyleDeclarationSetCssText2.J(P3,S3,Y3);
   },[L3,P3,S3]);break;
  case 2:
   var d4=$hs_touchzh(h3,K3);
   $r([d4,I3]);break;
  }
 },[h3,m3]);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.CSSStyleDeclaration'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeyup2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("keyup");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeypress2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("keypress");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeydown2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("keydown");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnclick2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("click");
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.DOM.Element'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement1=$f(1,function(u4){
 $A(u4);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLDivElement1=$f(1,function(S4){
 $A(S4);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkHTMLElement1=$f(1,function(p5){
 $A(p5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkDocument1=$f(1,function(z5){
 $A(z5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent1=$f(1,function(k6){
 $A(k6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassCSSStyleDeclaration1=$f(1,function(M6){
 $A(M6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkCSSStyleDeclaration1=$f(1,function(N6){
 $A(N6);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_mkWebView1=$f(1,function(J7){
 $A(J7);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLDivElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$w1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2349:1");
var $$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLInputElement=$t(function(){
 $A($$GraphicsziUIziGtkziWebKitziTypes$I1);
},[],"at Graphics/UI/Gtk/WebKit/Types.chs:2661:1");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassCSSStyleDeclaration=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassCSSStyleDeclaration1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:1159:10");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:1483:10");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLDivElement=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLDivElement1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:2341:10");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLDivElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$v5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
var $$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement=$D(1,function(){
 $r([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement1,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassBarInfo1]);
},"at Graphics/UI/Gtk/WebKit/Types.chs:2653:10");
var $$GraphicsziUIziGtkziWebKitziTypes_castToHTMLInputElement1=$t(function(){
 $$GHCziErr_error.J($$GraphicsziUIziGtkziWebKitziTypes$T5);
},[],"in `webkit-0.12.5:Graphics.UI.Gtk.WebKit.Types'");
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
var $$ControlziExceptionziBase_irrefutPatError=$f(1,function(P8){
 var Q8=$t(function(){
  $$GHCziIOziException_untangle.J(P8,$$ControlziExceptionziBase$g);
 },[P8],"sat");
 var R8=$d(1,[Q8],"sat");
 $$GHCziException_throw2.J(R8,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Irrefutable pattern failed for pattern");
},"lvl4");
var $$DataziList_tails=$f(1,function(M4){
 var N4=$t(function(){
  $M(M4,function(O4){
   switch(O4.g){
   case 1:
    $R(1,[],"[]");break;
   case 2:
    var P4=O4.v[1];
    $$DataziList_tails.J(P4);break;
   }
  },[]);
 },[M4],"sat");
 $R(2,[M4,N4],":");
},[],"at libraries/base/Data/List.hs:774:1");
var $$DataziList_isPrefixOf=$f(3,function(Wk,Xk,Yk){
 $M(Xk,function(Zk){
  switch(Zk.g){
  case 1:
   $R(2,[],"True");break;
  case 2:
   var al=Zk.v[0],bl=Zk.v[1];
   $M(Yk,function(cl){
    switch(cl.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var dl=cl.v[0],el=cl.v[1];
     $$GHCziClasses_zeze.C([Wk,al,dl],function(fl){
      switch(fl.g){
      case 1:
       $R(1,[],"False");break;
      case 2:
       $$DataziList_isPrefixOf.J(Wk,bl,el);break;
      }
     },[Wk,bl,el]);break;
    }
   },[Wk,al,bl]);break;
  }
 },[Yk,Wk]);
},[],"at libraries/base/Data/List.hs:297:1");
var $$ForeignziCziError_eBADF1=$D(1,function(){
 $r([goog.math.Long.fromBits(9,0)]);
},"in `base:Foreign.C.Error'");
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
var $$ForeignziMarshalziAlloc_mallocBytes3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("out of memory");
},[],"in `base:Foreign.Marshal.Alloc'");
var $$ForeignziMarshalziAlloc_mallocBytes4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("malloc");
},[],"in `base:Foreign.Marshal.Alloc'");
var $$ForeignziMarshalziAlloc_mallocBytes2=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_ResourceExhausted,$$ForeignziMarshalziAlloc_mallocBytes4,$$ForeignziMarshalziAlloc_mallocBytes3,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:Foreign.Marshal.Alloc'");
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
var $$GHCziBase_negateInt=$f(1,function(P){
 $M(P,function(Q){
  var R=Q.v[0];
  var S=R.negate();
  $R(1,[S],"I#");
 },[]);
},[],"at libraries/base/GHC/Base.lhs:712:1");
var $$GHCziBase_timesInt=$f(2,function(h1,i1){
 $M(h1,function(j1){
  var k1=j1.v[0];
  $M(i1,function(l1){
   var m1=l1.v[0];
   var n1=k1.multiply(m1);
   $R(1,[n1],"I#");
  },[k1]);
 },[i1]);
},[],"at libraries/base/GHC/Base.lhs:694:8");
var $$GHCziBase_minusInt=$f(2,function(o1,p1){
 $M(o1,function(q1){
  var r1=q1.v[0];
  $M(p1,function(s1){
   var t1=s1.v[0];
   var u1=r1.subtract(t1);
   $R(1,[u1],"I#");
  },[r1]);
 },[p1]);
},[],"at libraries/base/GHC/Base.lhs:693:8");
var $$GHCziBase_id=$f(1,function(M2){
 $A(M2);
},[],"at libraries/base/GHC/Base.lhs:515:1");
var $$GHCziConcziSync_zdfShowThreadStatus1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync_always2=$f(1,function(Oa){
 $r([Oa,$$GHCziTuple_Z0T]);
},[],"in `base:GHC.Conc.Sync'");
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
var $$GHCziConcziSync_uncaughtExceptionHandler=$t(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$GHCziConcziSync$n);
},[],"at libraries/base/GHC/Conc/Sync.lhs:791:1");
var $$GHCziConcziSync_forkIO2=$f(2,function(Pd,Qd){
 $$GHCziConcziSync_childHandler1.J(Pd,Qd);
},[],"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync_childHandler1=$f(2,function(Rd,Sd){
 var Td=$t(function(){
  $M(Rd,function(Ud){
   var Vd=Ud.v[0],Wd=Ud.v[1];
   $$GHCziException_zdp1Exception.C([Vd],function(ae){
    $$DataziTypeable_cast.C([ae,$$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnMVarzuzdctypeOf,Wd],function(Xd){
     switch(Xd.g){
     case 1:
      $$DataziTypeable_cast.C([ae,$$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnSTMzuzdctypeOf,Wd],function(Yd){
       switch(Yd.g){
       case 1:
	var Zd=$t(function(){
	 $$DataziTypeable_cast.J(ae,$$GHCziIOziException_zdfTypeableAsyncExceptionzuzdctypeOf,Wd);
	},[ae,Wd],"lvl7");
	var be=$f(1,function(ce){
	 $M(Zd,function(de){
	  switch(de.g){
	  case 1:
	   $M($$GHCziConcziSync_uncaughtExceptionHandler,function(ee){
	    var fe=ee.v[0];
	    var ge=$hs_readMutVarzh(fe,ce);
	    var he=ge[0],ie=ge[1];
	    ie.J(Ud,he);
	   },[ce,Ud]);break;
	  case 2:
	   var je=de.v[0];
	   $M(je,function(ke){
	    switch(ke.g){
	    case 1:
	     var $ff=stackOverflow();
	     var qe=[ce,$ff];
	     var re=qe[0];
	     $r([re,$$GHCziTuple_Z0T]);break;
	    default:
	     $M($$GHCziConcziSync_uncaughtExceptionHandler,function(le){
	      var me=le.v[0];
	      var ne=$hs_readMutVarzh(me,ce);
	      var oe=ne[0],pe=ne[1];
	      pe.J(Ud,oe);
	     },[ce,Ud]);
	    }
	   },[ce,Ud]);break;
	  }
	 },[ce,Ud]);
	},[Zd,Ud],"$wa1");
	$M(Zd,function(se){
	 switch(se.g){
	 case 1:
	  $A(be);break;
	 case 2:
	  var te=se.v[0];
	  $M(te,function(ue){
	   switch(ue.g){
	   case 3:
	    $A($$GHCziConcziSync_always2);break;
	   default:
	    $A(be);
	   }
	  },[be]);break;
	 }
	},[be]);break;
       case 2:
	var ve=Yd.v[0];
	$M(ve,function(we){
	 $A($$GHCziConcziSync_always2);
	},[]);break;
       }
      },[ae,Wd,Ud]);break;
     case 2:
      var xe=Xd.v[0];
      $M(xe,function(ye){
       $A($$GHCziConcziSync_always2);
      },[]);break;
     }
    },[ae,Wd,Ud]);
   },[Wd,Ud]);
  },[]);
 },[Rd],"sat");
 $k($hs_catchzh,[Td,$$GHCziConcziSync_forkIO2,Sd]);
},[],"in `base:GHC.Conc.Sync'");
var $$GHCziConcziSync$c=$F(3,function(Rf,Sf,Tf){
 $M(Rf,function(Uf){
  var Vf=Uf.v[0];
  $M(Sf,function(Wf){
   var Xf=Wf.v[0];
   var $ff=errorBelch2(Vf,Xf);
   var Yf=[Tf,$ff];
   var Zf=Yf[0];
   $r([Zf,$$GHCziTuple_Z0T]);
  },[Vf,Tf]);
 },[Sf,Tf]);
},"a2");
var $$GHCziConcziSync$d=$F(3,function(g,h,i){
 $$GHCziConcziSync$c.J(g,h,i);
},"at libraries/base/GHC/Conc/Sync.lhs:808:4");
var $$GHCziConcziSync$i=$T(function(){
 $$GHCziIOziHandle_hFlush.J($$GHCziIOziHandleziFD_stdout);
},"lvl2");
var $$GHCziConcziSync$j=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no threads to run:  infinite loop or deadlock?");
},"lvl3");
var $$GHCziConcziSync$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("%s");
},"lvl4");
var $$GHCziConcziSync$l=$F(2,function(ag,bg){
 $M(ag,function(cg){
  $r([bg,$$GHCziTuple_Z0T]);
 },[bg]);
},"lvl5");
var $$GHCziConcziSync$m=$F(2,function(dg,eg){
 $M(dg,function(fg){
  var gg=fg.v[0],hg=fg.v[1];
  $b($hs_catchzh,[$$GHCziConcziSync$i,$$GHCziConcziSync$l,eg],function(ig){
   var jg=ig[0];
   $$GHCziIOziEncoding_getForeignEncoding.C([jg],function(kg){
    var lg=kg[0],mg=kg[1];
    var ng=$f(2,function(og,pg){
     $$GHCziIOziEncoding_getForeignEncoding.C([pg],function(qg){
      var rg=qg[0],sg=qg[1];
      var tg=$f(2,function(ug,i){
       $$GHCziConcziSync$d.J(og,ug,i);
      },[og],"sat");
      var vg=$t(function(){
       $$GHCziException_zdp1Exception.C([gg],function(Cg){
	$$DataziTypeable_cast.C([Cg,$$GHCziIOziException_zdfTypeableDeadlockzuzdctypeOf,hg],function(wg){
	 switch(wg.g){
	 case 1:
	  $$DataziTypeable_cast.C([Cg,$$GHCziException_zdfExceptionErrorCallzuzdctypeOf,hg],function(xg){
	   switch(xg.g){
	   case 1:
	    $$GHCziException_zdp2Exception.C([gg],function(yg){
	     $$GHCziShow_showsPrec.J(yg,$$GHCziConcziSync_zdfShowThreadStatus1,hg,$$GHCziTypes_ZMZN);
	    },[hg]);break;
	   case 2:
	    var zg=xg.v[0];
	    $M(zg,function(Ag){
	     var Bg=Ag.v[0];
	     $A(Bg);
	    },[]);break;
	   }
	  },[gg,hg]);break;
	 case 2:
	  var Dg=wg.v[0];
	  $M(Dg,function(Eg){
	   $A($$GHCziConcziSync$j);
	  },[]);break;
	 }
	},[gg,Cg,hg]);
       },[gg,hg]);
      },[gg,hg],"sat");
      $$GHCziForeign_charIsRepresentable3.J(sg,vg,tg,rg);
     },[gg,hg,og]);
    },[gg,hg],"sat");
    $$GHCziForeign_charIsRepresentable3.J(mg,$$GHCziConcziSync$k,ng,lg);
   },[gg,hg]);
  },[gg,hg]);
 },[eg]);
},"a3");
var $$GHCziConcziSync$n=$F(1,function(Fg){
 var Kg=$hs_noDuplicatezh(Fg);
 var Gg=$hs_newMutVarzh($$GHCziConcziSync$m,Kg);
 var Hg=Gg[0],Ig=Gg[1];
 var Jg=$d(1,[Ig],"sat");
 $r([Hg,Jg]);
},"lvl6");
var $$GHCziEnum_zdfEnumBool3=$t(function(){
 $$GHCziErr_error.J($$GHCziEnum$x);
},[],"in `base:GHC.Enum'");
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
var $$GHCziEnum$x=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Prelude.Enum.Bool.toEnum: bad argument");
},"lvl23");
var $$GHCziErr_overflowError=$t(function(){
 $$GHCziException_throw2.J($$GHCziException_Overflow,$$GHCziException_zdfExceptionArithExceptionzuzdctoException);
},[],"at libraries/base/GHC/Err.lhs:89:1");
var $$GHCziEventziClock_getCurrentTime1=$f(1,function(h2){
 var i2=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(16,0),goog.math.Long.fromBits(8,0),h2);
 var j2=i2[0],k2=i2[1];
 var l2=$hs_unsafeFreezzeByteArrayzh(k2,j2);
 var m2=l2[0],n2=l2[1];
 var K3=$hs_byteArrayContentszh(n2);
 var f4=$hs_plusAddrzh(K3,goog.math.Long.fromBits(0,0));
 var e4=$hs_writeInt64OffAddrzh(f4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),m2);
 var d4=$hs_plusAddrzh(K3,goog.math.Long.fromBits(8,0));
 var c4=$hs_writeInt64OffAddrzh(d4,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0),e4);
 var $ff=ghc_wrapper_d1kK_gettimeofday(K3,null);
 var o2=[c4,$ff];
 var p2=o2[0],q2=o2[1];
 var r2=$f(3,function(s2,t2,u2){
  var B2=$hs_touchzh(n2,s2);
  $$GHCziIntegerziType_smallInteger.C([t2],function(v2){
   $$GHCziIntegerziType_timesInteger.C([v2,$$GHCziInt_zdfRealInt1],function(w2){
    $$GHCziReal_zdwreduce.C([w2,$$GHCziInt_zdfRealInt1],function(x2){
     var y2=x2[0],z2=x2[1];
     var A2=$f(1,function(C2){
      $$GHCziIntegerziType_smallInteger.C([u2],function(D2){
       $$GHCziIntegerziType_timesInteger.C([D2,$$GHCziInt_zdfRealInt1],function(E2){
	$$GHCziReal_zdwreduce.C([E2,$$GHCziInt_zdfRealInt1],function(F2){
	 var G2=F2[0],H2=F2[1];
	 $$GHCziIntegerziType_eqInteger.C([H2,$$GHCziFloat_zdfFractionalDouble5],function(I2){
	  switch(I2.g){
	  case 1:
	   $$GHCziIntegerziType_eqInteger.C([G2,$$GHCziFloat_zdfFractionalDouble5],function(J2){
	    switch(J2.g){
	    case 1:
	     $$GHCziIntegerziType_ltInteger.C([G2,$$GHCziFloat_zdfFractionalDouble5],function(K2){
	      switch(K2.g){
	      case 1:
	       $$GHCziFloat_zdwfromRatzqzq.C([goog.math.Long.fromBits(4294966275,4294967295),goog.math.Long.fromBits(53,0),G2,H2],function(O2){
		var N2=O2/1000000.0;
		var M2=C2+N2;
		var L2=$d(1,[M2],"sat");
		$r([B2,L2]);
	       },[B2,C2]);break;
	      case 2:
	       $$GHCziIntegerziType_negateInteger.C([G2],function(P2){
		$$GHCziFloat_zdwfromRatzqzq.C([goog.math.Long.fromBits(4294966275,4294967295),goog.math.Long.fromBits(53,0),P2,H2],function(U2){
		 var T2= -U2;
		 var S2=T2/1000000.0;
		 var R2=C2+S2;
		 var Q2=$d(1,[R2],"sat");
		 $r([B2,Q2]);
		},[B2,C2]);
	       },[H2,B2,C2]);break;
	      }
	     },[H2,G2,B2,C2]);break;
	    case 2:
	     var V2=$d(1,[C2],"sat");
	     $r([B2,V2]);break;
	    }
	   },[H2,G2,B2,C2]);break;
	  case 2:
	   $$GHCziIntegerziType_eqInteger.C([G2,$$GHCziFloat_zdfFractionalDouble5],function(W2){
	    switch(W2.g){
	    case 1:
	     $$GHCziIntegerziType_ltInteger.C([G2,$$GHCziFloat_zdfFractionalDouble5],function(X2){
	      switch(X2.g){
	      case 1:
	       $M($$GHCziFloat_zdfFractionalDouble3,function(Y2){
		var Z2=Y2.v[0];
		var c3=Z2/1000000.0;
		var b3=C2+c3;
		var a3=$d(1,[b3],"sat");
		$r([B2,a3]);
	       },[B2,C2]);break;
	      case 2:
	       $M($$GHCziFloat_zdfFractionalDouble2,function(d3){
		var e3=d3.v[0];
		var h3=e3/1000000.0;
		var g3=C2+h3;
		var f3=$d(1,[g3],"sat");
		$r([B2,f3]);
	       },[B2,C2]);break;
	      }
	     },[B2,C2]);break;
	    case 2:
	     $M($$GHCziFloat_zdfFractionalDouble1,function(i3){
	      var j3=i3.v[0];
	      var m3=j3/1000000.0;
	      var l3=C2+m3;
	      var k3=$d(1,[l3],"sat");
	      $r([B2,k3]);
	     },[B2,C2]);break;
	    }
	   },[G2,B2,C2]);break;
	  }
	 },[H2,G2,B2,C2]);
	},[B2,C2]);
       },[B2,C2]);
      },[B2,C2]);
     },[u2,B2],"$j");
     $$GHCziIntegerziType_eqInteger.C([z2,$$GHCziFloat_zdfFractionalDouble5],function(n3){
      switch(n3.g){
      case 1:
       $$GHCziIntegerziType_eqInteger.C([y2,$$GHCziFloat_zdfFractionalDouble5],function(o3){
	switch(o3.g){
	case 1:
	 $$GHCziIntegerziType_ltInteger.C([y2,$$GHCziFloat_zdfFractionalDouble5],function(p3){
	  switch(p3.g){
	  case 1:
	   $$GHCziFloat_zdwfromRatzqzq.C([goog.math.Long.fromBits(4294966275,4294967295),goog.math.Long.fromBits(53,0),y2,z2],function(q3){
	    A2.J(q3);
	   },[u2,B2,A2]);break;
	  case 2:
	   $$GHCziIntegerziType_negateInteger.C([y2],function(r3){
	    $$GHCziFloat_zdwfromRatzqzq.C([goog.math.Long.fromBits(4294966275,4294967295),goog.math.Long.fromBits(53,0),r3,z2],function(t3){
	     var s3= -t3;
	     A2.J(s3);
	    },[u2,B2,A2]);
	   },[u2,B2,A2,z2]);break;
	  }
	 },[u2,B2,A2,z2,y2]);break;
	case 2:
	 A2.J(0.0);break;
	}
       },[u2,B2,A2,z2,y2]);break;
      case 2:
       $$GHCziIntegerziType_eqInteger.C([y2,$$GHCziFloat_zdfFractionalDouble5],function(u3){
	switch(u3.g){
	case 1:
	 $$GHCziIntegerziType_ltInteger.C([y2,$$GHCziFloat_zdfFractionalDouble5],function(v3){
	  switch(v3.g){
	  case 1:
	   $M($$GHCziFloat_zdfFractionalDouble3,function(w3){
	    var x3=w3.v[0];
	    A2.J(x3);
	   },[u2,B2,A2]);break;
	  case 2:
	   $M($$GHCziFloat_zdfFractionalDouble2,function(y3){
	    var z3=y3.v[0];
	    A2.J(z3);
	   },[u2,B2,A2]);break;
	  }
	 },[u2,B2,A2]);break;
	case 2:
	 $M($$GHCziFloat_zdfFractionalDouble1,function(A3){
	  var B3=A3.v[0];
	  A2.J(B3);
	 },[u2,B2,A2]);break;
	}
       },[u2,B2,A2,y2]);break;
      }
     },[u2,B2,A2,z2,y2]);
    },[u2,B2]);
   },[u2,B2]);
  },[u2,B2]);
 },[n2],"$w$j");
 var C3=$hs_narrow32Intzh(q2);
 switch(C3.toString()){
 case "-1":
  var $ff=__hscore_get_errno();
  var M3=[p2,$ff];
  var N3=M3[0],O3=M3[1];
  var Q3=$hs_narrow32Intzh(O3);
  var P3=$d(1,[Q3],"sat");
  $$ForeignziCziError_errnoToIOError.C([$$GHCziEventziClock$a,P3,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(R3){
   $$GHCziIOziException_ioError.C([R3,N3],function(S3){
    var T3=S3[0];
    var b4=$hs_plusAddrzh(K3,goog.math.Long.fromBits(0,0));
    var U3=$hs_readInt64OffAddrzh(b4,goog.math.Long.fromBits(0,0),T3);
    var V3=U3[0],W3=U3[1];
    var a4=$hs_plusAddrzh(K3,goog.math.Long.fromBits(8,0));
    var X3=$hs_readInt64OffAddrzh(a4,goog.math.Long.fromBits(0,0),V3);
    var Y3=X3[0],Z3=X3[1];
    r2.J(Y3,W3,Z3);
   },[n2,K3,r2]);
  },[n2,K3,r2,N3]);break;
 default:
  var L3=$hs_plusAddrzh(K3,goog.math.Long.fromBits(0,0));
  var D3=$hs_readInt64OffAddrzh(L3,goog.math.Long.fromBits(0,0),p2);
  var E3=D3[0],F3=D3[1];
  var J3=$hs_plusAddrzh(K3,goog.math.Long.fromBits(8,0));
  var G3=$hs_readInt64OffAddrzh(J3,goog.math.Long.fromBits(0,0),E3);
  var H3=G3[0],I3=G3[1];
  r2.J(H3,F3,I3);
 }
},[],"in `base:GHC.Event.Clock'");
var $$GHCziEventziClock$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("gettimeofday");
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
var $$GHCziEventziManager_registerTimeout1=$f(4,function(J8,K8,L8,M8){
 var N8=$f(1,function(O8){
  $M(J8,function(P8){
   var Q8=P8.v[4];
   var R8=$hs_readTVarzh(Q8,O8);
   var S8=R8[0],T8=R8[1];
   $M(T8,function(U8){
    var V8=U8.v[0];
    var X8=V8.add(goog.math.Long.fromBits(1,0));
    var W8=$d(1,[X8],"u'");
    var Y8=$hs_writeTVarzh(Q8,W8,S8);
    $r([Y8,W8]);
   },[Q8,S8]);
  },[O8]);
 },[J8],"sat");
 var Z8=$hs_atomicallyzh(N8,M8);
 var a9=Z8[0],b9=Z8[1];
 $M(b9,function(c9){
  var d9=c9.v[0];
  $M(K8,function(e9){
   var f9=e9.v[0];
   var g9=f9.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(g9.g){
   case 1:
    $$GHCziEventziClock_getCurrentTime1.C([a9],function(h9){
     var i9=h9[0],j9=h9[1];
     $M(J8,function(k9){
      var l9=k9.v[2],m9=k9.v[7];
      var n9=$t(function(){
       $M(j9,function(o9){
	var p9=o9.v[0];
	var s9=$hs_int2Doublezh(f9);
	var r9=s9/1000000.0;
	var q9=r9+p9;
	$R(1,[q9],"D#");
       },[f9]);
      },[f9,j9],"expTime");
      var t9=$f(1,function(u9){
       var v9=$f(1,function(w9){
	$M(n9,function(x9){
	 var y9=x9.v[0];
	 u9.C([w9],function(z9){
	  $$GHCziEventziPSQ_zdwinsert.J(d9,y9,L8,z9);
	 },[d9,y9,L8]);
	},[d9,L8,w9,u9]);
       },[n9,d9,L8,u9],"sat");
       $R(1,[v9,$$GHCziTuple_Z0T],"(,)");
      },[n9,d9,L8],"sat");
      $b($hs_atomicModifyMutVarzh,[l9,t9,i9],function(A9){
       var B9=A9[0];
       var C9=$hs_newAlignedPinnedByteArrayzh(goog.math.Long.fromBits(8,0),goog.math.Long.fromBits(8,0),B9);
       var D9=C9[0],E9=C9[1];
       var F9=$hs_unsafeFreezzeByteArrayzh(E9,D9);
       var G9=F9[0],H9=F9[1];
       var X9=$hs_byteArrayContentszh(H9);
       var Y9=$hs_writeWord64OffAddrzh(X9,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(1,0),G9);
       var W9=$hs_narrow32Intzh(m9);
       var $ff=write(W9,X9,goog.math.Long.fromBits(8,0));
       var I9=[Y9,$ff];
       var J9=I9[0],K9=I9[1];
       $M(K9,function(L9){
	switch(L9.toString()){
	case "-1":
	 var $ff=__hscore_get_errno();
	 var N9=[J9,$ff];
	 var O9=N9[0],P9=N9[1];
	 var R9=$hs_narrow32Intzh(P9);
	 var Q9=$d(1,[R9],"sat");
	 $$ForeignziCziError_errnoToIOError.C([$$GHCziEventziControl_sendWakeupzuloc,Q9,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing],function(S9){
	  $$GHCziIOziException_ioError.C([S9,O9],function(T9){
	   var U9=T9[0];
	   var V9=$hs_touchzh(H9,U9);
	   $r([V9,c9]);
	  },[H9,c9]);
	 },[H9,c9,O9]);break;
	default:
	 var M9=$hs_touchzh(H9,J9);
	 $r([M9,c9]);
	}
       },[H9,J9,c9]);
      },[m9,c9]);
     },[f9,j9,d9,L8,i9,c9]);
    },[J8,f9,d9,L8,c9]);break;
   case 2:
    L8.C([a9],function(Z9){
     var aa=Z9[0];
     $r([aa,c9]);
    },[c9]);break;
   }
  },[J8,a9,d9,L8,c9]);
 },[J8,K8,a9,L8]);
},[],"in `base:GHC.Event.Manager'");
var $$GHCziEventziManager_unregisterTimeout1=$f(3,function(ba,ca,da){
 $M(ba,function(ea){
  var fa=ea.v[2],ga=ea.v[5],ha=ea.v[6],ia=ea.v[7];
  var ja=$f(1,function(ka){
   var la=$f(1,function(ma){
    ka.C([ma],function(na){
     $$GHCziEventziPSQ_delete.J(ca,na);
    },[ca]);
   },[ca,ka],"sat");
   $R(1,[la,$$GHCziTuple_Z0T],"(,)");
  },[ca],"sat");
  $b($hs_atomicModifyMutVarzh,[fa,ja,da],function(oa){
   var pa=oa[0];
   var qa=$d(1,[ga,ha,ia],"sat");
   $$GHCziEventziControl_sendWakeup1.J(qa,pa);
  },[ga,ha,ia]);
 },[ca,da]);
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
var $$GHCziEventziPSQ_zdwlloser=$f(6,function(a1,b1,c1,d1,e1,f1){
 var g1=$f(1,function(h1){
  $M(f1,function(i1){
   switch(i1.g){
   case 1:
    $M(d1,function(j1){
     var k1=goog.math.Long.fromBits(1,0).add(h1);
     $R(2,[k1,a1,b1,c1,j1,e1,$$GHCziEventziPSQ_Start],"LLoser");
    },[h1,a1,b1,c1,e1]);break;
   case 2:
    var l1=i1.v[0];
    $M(d1,function(m1){
     var o1=goog.math.Long.fromBits(1,0).add(h1);
     var n1=o1.add(l1);
     $R(2,[n1,a1,b1,c1,m1,e1,i1],"LLoser");
    },[h1,a1,b1,c1,e1,l1,i1]);break;
   case 3:
    var p1=i1.v[0];
    $M(d1,function(q1){
     var s1=goog.math.Long.fromBits(1,0).add(h1);
     var r1=s1.add(p1);
     $R(2,[r1,a1,b1,c1,q1,e1,i1],"LLoser");
    },[h1,a1,b1,c1,e1,i1,p1]);break;
   }
  },[d1,h1,a1,b1,c1,e1]);
 },[f1,d1,a1,b1,c1,e1],"$j");
 $M(d1,function(t1){
  switch(t1.g){
  case 1:
   g1.J(goog.math.Long.fromBits(0,0));break;
  case 2:
   var u1=t1.v[0];
   g1.J(u1);break;
  case 3:
   var v1=t1.v[0];
   g1.J(v1);break;
  }
 },[f1,d1,a1,b1,c1,e1,g1]);
},[],"at libraries/base/GHC/Event/PSQ.hs:323:1");
var $$GHCziEventziPSQ_zdwrloser=$f(6,function(I1,J1,K1,L1,M1,N1){
 var O1=$f(1,function(P1){
  $M(N1,function(Q1){
   switch(Q1.g){
   case 1:
    $M(L1,function(R1){
     var S1=goog.math.Long.fromBits(1,0).add(P1);
     $R(3,[S1,I1,J1,K1,R1,M1,$$GHCziEventziPSQ_Start],"RLoser");
    },[P1,I1,J1,K1,M1]);break;
   case 2:
    var T1=Q1.v[0];
    $M(L1,function(U1){
     var W1=goog.math.Long.fromBits(1,0).add(P1);
     var V1=W1.add(T1);
     $R(3,[V1,I1,J1,K1,U1,M1,Q1],"RLoser");
    },[P1,I1,J1,K1,M1,T1,Q1]);break;
   case 3:
    var X1=Q1.v[0];
    $M(L1,function(Y1){
     var a2=goog.math.Long.fromBits(1,0).add(P1);
     var Z1=a2.add(X1);
     $R(3,[Z1,I1,J1,K1,Y1,M1,Q1],"RLoser");
    },[P1,I1,J1,K1,M1,Q1,X1]);break;
   }
  },[L1,P1,I1,J1,K1,M1]);
 },[N1,L1,I1,J1,K1,M1],"$j");
 $M(L1,function(b2){
  switch(b2.g){
  case 1:
   O1.J(goog.math.Long.fromBits(0,0));break;
  case 2:
   var c2=b2.v[0];
   O1.J(c2);break;
  case 3:
   var d2=b2.v[0];
   O1.J(d2);break;
  }
 },[N1,L1,I1,J1,K1,M1,O1]);
},[],"at libraries/base/GHC/Event/PSQ.hs:324:1");
var $$GHCziEventziPSQ_zdwlbalance=$f(6,function(q2,r2,s2,t2,u2,v2){
 var w2=$f(1,function(x2){
  var y2=$f(1,function(z2){
   var x4=x2.add(z2);
   var A2=x4.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(A2.g){
   case 1:
    var B2=$f(1,function(C2){
     var D2=$f(1,function(E2){
      var q4=goog.math.Long.fromBits(4,0).multiply(E2);
      var F2=C2.greaterThan(q4)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(F2.g){
      case 1:
       var G2=$f(1,function(H2){
	var I2=$f(1,function(J2){
	 var x3=goog.math.Long.fromBits(4,0).multiply(J2);
	 var K2=H2.greaterThan(x3)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(K2.g){
	 case 1:
	  $$GHCziEventziPSQ_zdwlloser.J(q2,r2,s2,t2,u2,v2);break;
	 case 2:
	  var L2=$f(1,function(M2){
	   var N2=$f(1,function(O2){
	    var P2=M2.greaterThan(O2)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(P2.g){
	    case 1:
	     $M(t2,function(Q2){
	      switch(Q2.g){
	      case 1:
	       $A($$GHCziEventziPSQ$y);break;
	      case 2:
	       var R2=Q2.v[1],S2=Q2.v[2],T2=Q2.v[3],U2=Q2.v[4],V2=Q2.v[5],W2=Q2.v[6];
	       $$GHCziEventziPSQ$q.C([R2,S2,T2,U2,V2,W2],function(X2){
		$$GHCziEventziPSQ$n.J(q2,r2,s2,X2,u2,v2);
	       },[q2,r2,s2,u2,v2]);break;
	      case 3:
	       var Y2=Q2.v[1],Z2=Q2.v[2],a3=Q2.v[3],b3=Q2.v[4],c3=Q2.v[5],d3=Q2.v[6];
	       $$GHCziEventziPSQ$t.C([Y2,Z2,a3,b3,c3,d3],function(e3){
		$$GHCziEventziPSQ$n.J(q2,r2,s2,e3,u2,v2);
	       },[q2,r2,s2,u2,v2]);break;
	      }
	     },[q2,r2,s2,u2,v2]);break;
	    case 2:
	     $$GHCziEventziPSQ$n.J(q2,r2,s2,t2,u2,v2);break;
	    }
	   },[q2,r2,s2,t2,u2,v2,M2],"$j7");
	   $M(t2,function(f3){
	    switch(f3.g){
	    case 1:
	     $A($$GHCziEventziPSQ$h);break;
	    case 2:
	     var g3=f3.v[6];
	     $M(g3,function(h3){
	      switch(h3.g){
	      case 1:
	       N2.J(goog.math.Long.fromBits(0,0));break;
	      case 2:
	       var i3=h3.v[0];
	       N2.J(i3);break;
	      case 3:
	       var j3=h3.v[0];
	       N2.J(j3);break;
	      }
	     },[q2,r2,s2,t2,u2,v2,M2,N2]);break;
	    case 3:
	     var k3=f3.v[6];
	     $M(k3,function(l3){
	      switch(l3.g){
	      case 1:
	       N2.J(goog.math.Long.fromBits(0,0));break;
	      case 2:
	       var m3=l3.v[0];
	       N2.J(m3);break;
	      case 3:
	       var n3=l3.v[0];
	       N2.J(n3);break;
	      }
	     },[q2,r2,s2,t2,u2,v2,M2,N2]);break;
	    }
	   },[q2,r2,s2,t2,u2,v2,M2,N2]);
	  },[q2,r2,s2,t2,u2,v2],"$j6");
	  $M(t2,function(o3){
	   switch(o3.g){
	   case 1:
	    $A($$GHCziEventziPSQ$j);break;
	   case 2:
	    var p3=o3.v[4];
	    $M(p3,function(q3){
	     switch(q3.g){
	     case 1:
	      L2.J(goog.math.Long.fromBits(0,0));break;
	     case 2:
	      var r3=q3.v[0];
	      L2.J(r3);break;
	     case 3:
	      var s3=q3.v[0];
	      L2.J(s3);break;
	     }
	    },[q2,r2,s2,t2,u2,v2,L2]);break;
	   case 3:
	    var t3=o3.v[4];
	    $M(t3,function(u3){
	     switch(u3.g){
	     case 1:
	      L2.J(goog.math.Long.fromBits(0,0));break;
	     case 2:
	      var v3=u3.v[0];
	      L2.J(v3);break;
	     case 3:
	      var w3=u3.v[0];
	      L2.J(w3);break;
	     }
	    },[q2,r2,s2,t2,u2,v2,L2]);break;
	   }
	  },[q2,r2,s2,t2,u2,v2,L2]);break;
	 }
	},[H2,q2,r2,s2,t2,u2,v2],"$j5");
	$M(v2,function(y3){
	 switch(y3.g){
	 case 1:
	  I2.J(goog.math.Long.fromBits(0,0));break;
	 case 2:
	  var z3=y3.v[0];
	  I2.J(z3);break;
	 case 3:
	  var A3=y3.v[0];
	  I2.J(A3);break;
	 }
	},[H2,q2,r2,s2,t2,u2,v2,I2]);
       },[q2,r2,s2,t2,u2,v2],"$j4");
       $M(t2,function(B3){
	switch(B3.g){
	case 1:
	 G2.J(goog.math.Long.fromBits(0,0));break;
	case 2:
	 var C3=B3.v[0];
	 G2.J(C3);break;
	case 3:
	 var D3=B3.v[0];
	 G2.J(D3);break;
	}
       },[q2,r2,s2,t2,u2,v2,G2]);break;
      case 2:
       var E3=$f(1,function(F3){
	var G3=$f(1,function(H3){
	 var I3=F3.lessThan(H3)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(I3.g){
	 case 1:
	  $M(v2,function(J3){
	   switch(J3.g){
	   case 1:
	    $A($$GHCziEventziPSQ$A);break;
	   case 2:
	    var K3=J3.v[1],L3=J3.v[2],M3=J3.v[3],N3=J3.v[4],O3=J3.v[5],P3=J3.v[6];
	    $$GHCziEventziPSQ$n.C([K3,L3,M3,N3,O3,P3],function(Q3){
	     $$GHCziEventziPSQ$q.J(q2,r2,s2,t2,u2,Q3);
	    },[q2,r2,s2,t2,u2]);break;
	   case 3:
	    var R3=J3.v[1],S3=J3.v[2],T3=J3.v[3],U3=J3.v[4],V3=J3.v[5],W3=J3.v[6];
	    $$GHCziEventziPSQ$w.C([R3,S3,T3,U3,V3,W3],function(X3){
	     $$GHCziEventziPSQ$q.J(q2,r2,s2,t2,u2,X3);
	    },[q2,r2,s2,t2,u2]);break;
	   }
	  },[q2,r2,s2,t2,u2]);break;
	 case 2:
	  $$GHCziEventziPSQ$q.J(q2,r2,s2,t2,u2,v2);break;
	 }
	},[q2,r2,s2,t2,u2,v2,F3],"$j5");
	$M(v2,function(Y3){
	 switch(Y3.g){
	 case 1:
	  $A($$GHCziEventziPSQ$h);break;
	 case 2:
	  var Z3=Y3.v[6];
	  $M(Z3,function(a4){
	   switch(a4.g){
	   case 1:
	    G3.J(goog.math.Long.fromBits(0,0));break;
	   case 2:
	    var b4=a4.v[0];
	    G3.J(b4);break;
	   case 3:
	    var c4=a4.v[0];
	    G3.J(c4);break;
	   }
	  },[q2,r2,s2,t2,u2,v2,F3,G3]);break;
	 case 3:
	  var d4=Y3.v[6];
	  $M(d4,function(e4){
	   switch(e4.g){
	   case 1:
	    G3.J(goog.math.Long.fromBits(0,0));break;
	   case 2:
	    var f4=e4.v[0];
	    G3.J(f4);break;
	   case 3:
	    var g4=e4.v[0];
	    G3.J(g4);break;
	   }
	  },[q2,r2,s2,t2,u2,v2,F3,G3]);break;
	 }
	},[q2,r2,s2,t2,u2,v2,F3,G3]);
       },[q2,r2,s2,t2,u2,v2],"$j4");
       $M(v2,function(h4){
	switch(h4.g){
	case 1:
	 $A($$GHCziEventziPSQ$j);break;
	case 2:
	 var i4=h4.v[4];
	 $M(i4,function(j4){
	  switch(j4.g){
	  case 1:
	   E3.J(goog.math.Long.fromBits(0,0));break;
	  case 2:
	   var k4=j4.v[0];
	   E3.J(k4);break;
	  case 3:
	   var l4=j4.v[0];
	   E3.J(l4);break;
	  }
	 },[q2,r2,s2,t2,u2,v2,E3]);break;
	case 3:
	 var m4=h4.v[4];
	 $M(m4,function(n4){
	  switch(n4.g){
	  case 1:
	   E3.J(goog.math.Long.fromBits(0,0));break;
	  case 2:
	   var o4=n4.v[0];
	   E3.J(o4);break;
	  case 3:
	   var p4=n4.v[0];
	   E3.J(p4);break;
	  }
	 },[q2,r2,s2,t2,u2,v2,E3]);break;
	}
       },[q2,r2,s2,t2,u2,v2,E3]);break;
      }
     },[C2,q2,r2,s2,t2,u2,v2],"$j3");
     $M(t2,function(r4){
      switch(r4.g){
      case 1:
       D2.J(goog.math.Long.fromBits(0,0));break;
      case 2:
       var s4=r4.v[0];
       D2.J(s4);break;
      case 3:
       var t4=r4.v[0];
       D2.J(t4);break;
      }
     },[C2,q2,r2,s2,t2,u2,v2,D2]);
    },[q2,r2,s2,t2,u2,v2],"$j2");
    $M(v2,function(u4){
     switch(u4.g){
     case 1:
      B2.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var v4=u4.v[0];
      B2.J(v4);break;
     case 3:
      var w4=u4.v[0];
      B2.J(w4);break;
     }
    },[q2,r2,s2,t2,u2,v2,B2]);break;
   case 2:
    $$GHCziEventziPSQ_zdwlloser.J(q2,r2,s2,t2,u2,v2);break;
   }
  },[x2,q2,r2,s2,t2,u2,v2],"$j1");
  $M(v2,function(y4){
   switch(y4.g){
   case 1:
    y2.J(goog.math.Long.fromBits(0,0));break;
   case 2:
    var z4=y4.v[0];
    y2.J(z4);break;
   case 3:
    var A4=y4.v[0];
    y2.J(A4);break;
   }
  },[x2,q2,r2,s2,t2,u2,v2,y2]);
 },[q2,r2,s2,t2,u2,v2],"$j");
 $M(t2,function(B4){
  switch(B4.g){
  case 1:
   w2.J(goog.math.Long.fromBits(0,0));break;
  case 2:
   var C4=B4.v[0];
   w2.J(C4);break;
  case 3:
   var D4=B4.v[0];
   w2.J(D4);break;
  }
 },[q2,r2,s2,t2,u2,v2,w2]);
},[],"at libraries/base/GHC/Event/PSQ.hs:335:1");
var $$GHCziEventziPSQ_zdwrbalance=$f(6,function(E4,F4,G4,H4,I4,J4){
 var K4=$f(1,function(L4){
  var M4=$f(1,function(N4){
   var L6=L4.add(N4);
   var O4=L6.lessThan(goog.math.Long.fromBits(2,0))?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(O4.g){
   case 1:
    var P4=$f(1,function(Q4){
     var R4=$f(1,function(S4){
      var E6=goog.math.Long.fromBits(4,0).multiply(S4);
      var T4=Q4.greaterThan(E6)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(T4.g){
      case 1:
       var U4=$f(1,function(V4){
	var W4=$f(1,function(X4){
	 var L5=goog.math.Long.fromBits(4,0).multiply(X4);
	 var Y4=V4.greaterThan(L5)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Y4.g){
	 case 1:
	  $$GHCziEventziPSQ_zdwrloser.J(E4,F4,G4,H4,I4,J4);break;
	 case 2:
	  var Z4=$f(1,function(a5){
	   var b5=$f(1,function(c5){
	    var d5=a5.greaterThan(c5)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(d5.g){
	    case 1:
	     $M(H4,function(e5){
	      switch(e5.g){
	      case 1:
	       $A($$GHCziEventziPSQ$C);break;
	      case 2:
	       var f5=e5.v[1],g5=e5.v[2],h5=e5.v[3],i5=e5.v[4],j5=e5.v[5],k5=e5.v[6];
	       $$GHCziEventziPSQ$q.C([f5,g5,h5,i5,j5,k5],function(l5){
		$$GHCziEventziPSQ$w.J(E4,F4,G4,l5,I4,J4);
	       },[E4,F4,G4,I4,J4]);break;
	      case 3:
	       var m5=e5.v[1],n5=e5.v[2],o5=e5.v[3],p5=e5.v[4],q5=e5.v[5],r5=e5.v[6];
	       $$GHCziEventziPSQ$t.C([m5,n5,o5,p5,q5,r5],function(s5){
		$$GHCziEventziPSQ$w.J(E4,F4,G4,s5,I4,J4);
	       },[E4,F4,G4,I4,J4]);break;
	      }
	     },[E4,F4,G4,I4,J4]);break;
	    case 2:
	     $$GHCziEventziPSQ$w.J(E4,F4,G4,H4,I4,J4);break;
	    }
	   },[E4,F4,G4,H4,I4,J4,a5],"$j7");
	   $M(H4,function(t5){
	    switch(t5.g){
	    case 1:
	     $A($$GHCziEventziPSQ$h);break;
	    case 2:
	     var u5=t5.v[6];
	     $M(u5,function(v5){
	      switch(v5.g){
	      case 1:
	       b5.J(goog.math.Long.fromBits(0,0));break;
	      case 2:
	       var w5=v5.v[0];
	       b5.J(w5);break;
	      case 3:
	       var x5=v5.v[0];
	       b5.J(x5);break;
	      }
	     },[E4,F4,G4,H4,I4,J4,a5,b5]);break;
	    case 3:
	     var y5=t5.v[6];
	     $M(y5,function(z5){
	      switch(z5.g){
	      case 1:
	       b5.J(goog.math.Long.fromBits(0,0));break;
	      case 2:
	       var A5=z5.v[0];
	       b5.J(A5);break;
	      case 3:
	       var B5=z5.v[0];
	       b5.J(B5);break;
	      }
	     },[E4,F4,G4,H4,I4,J4,a5,b5]);break;
	    }
	   },[E4,F4,G4,H4,I4,J4,a5,b5]);
	  },[E4,F4,G4,H4,I4,J4],"$j6");
	  $M(H4,function(C5){
	   switch(C5.g){
	   case 1:
	    $A($$GHCziEventziPSQ$j);break;
	   case 2:
	    var D5=C5.v[4];
	    $M(D5,function(E5){
	     switch(E5.g){
	     case 1:
	      Z4.J(goog.math.Long.fromBits(0,0));break;
	     case 2:
	      var F5=E5.v[0];
	      Z4.J(F5);break;
	     case 3:
	      var G5=E5.v[0];
	      Z4.J(G5);break;
	     }
	    },[E4,F4,G4,H4,I4,J4,Z4]);break;
	   case 3:
	    var H5=C5.v[4];
	    $M(H5,function(I5){
	     switch(I5.g){
	     case 1:
	      Z4.J(goog.math.Long.fromBits(0,0));break;
	     case 2:
	      var J5=I5.v[0];
	      Z4.J(J5);break;
	     case 3:
	      var K5=I5.v[0];
	      Z4.J(K5);break;
	     }
	    },[E4,F4,G4,H4,I4,J4,Z4]);break;
	   }
	  },[E4,F4,G4,H4,I4,J4,Z4]);break;
	 }
	},[V4,E4,F4,G4,H4,I4,J4],"$j5");
	$M(J4,function(M5){
	 switch(M5.g){
	 case 1:
	  W4.J(goog.math.Long.fromBits(0,0));break;
	 case 2:
	  var N5=M5.v[0];
	  W4.J(N5);break;
	 case 3:
	  var O5=M5.v[0];
	  W4.J(O5);break;
	 }
	},[V4,E4,F4,G4,H4,I4,J4,W4]);
       },[E4,F4,G4,H4,I4,J4],"$j4");
       $M(H4,function(P5){
	switch(P5.g){
	case 1:
	 U4.J(goog.math.Long.fromBits(0,0));break;
	case 2:
	 var Q5=P5.v[0];
	 U4.J(Q5);break;
	case 3:
	 var R5=P5.v[0];
	 U4.J(R5);break;
	}
       },[E4,F4,G4,H4,I4,J4,U4]);break;
      case 2:
       var S5=$f(1,function(T5){
	var U5=$f(1,function(V5){
	 var W5=T5.lessThan(V5)?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(W5.g){
	 case 1:
	  $M(J4,function(X5){
	   switch(X5.g){
	   case 1:
	    $A($$GHCziEventziPSQ$E);break;
	   case 2:
	    var Y5=X5.v[1],Z5=X5.v[2],a6=X5.v[3],b6=X5.v[4],c6=X5.v[5],d6=X5.v[6];
	    $$GHCziEventziPSQ$n.C([Y5,Z5,a6,b6,c6,d6],function(e6){
	     $$GHCziEventziPSQ$t.J(E4,F4,G4,H4,I4,e6);
	    },[E4,F4,G4,H4,I4]);break;
	   case 3:
	    var f6=X5.v[1],g6=X5.v[2],h6=X5.v[3],i6=X5.v[4],j6=X5.v[5],k6=X5.v[6];
	    $$GHCziEventziPSQ$w.C([f6,g6,h6,i6,j6,k6],function(l6){
	     $$GHCziEventziPSQ$t.J(E4,F4,G4,H4,I4,l6);
	    },[E4,F4,G4,H4,I4]);break;
	   }
	  },[E4,F4,G4,H4,I4]);break;
	 case 2:
	  $$GHCziEventziPSQ$t.J(E4,F4,G4,H4,I4,J4);break;
	 }
	},[E4,F4,G4,H4,I4,J4,T5],"$j5");
	$M(J4,function(m6){
	 switch(m6.g){
	 case 1:
	  $A($$GHCziEventziPSQ$h);break;
	 case 2:
	  var n6=m6.v[6];
	  $M(n6,function(o6){
	   switch(o6.g){
	   case 1:
	    U5.J(goog.math.Long.fromBits(0,0));break;
	   case 2:
	    var p6=o6.v[0];
	    U5.J(p6);break;
	   case 3:
	    var q6=o6.v[0];
	    U5.J(q6);break;
	   }
	  },[E4,F4,G4,H4,I4,J4,T5,U5]);break;
	 case 3:
	  var r6=m6.v[6];
	  $M(r6,function(s6){
	   switch(s6.g){
	   case 1:
	    U5.J(goog.math.Long.fromBits(0,0));break;
	   case 2:
	    var t6=s6.v[0];
	    U5.J(t6);break;
	   case 3:
	    var u6=s6.v[0];
	    U5.J(u6);break;
	   }
	  },[E4,F4,G4,H4,I4,J4,T5,U5]);break;
	 }
	},[E4,F4,G4,H4,I4,J4,T5,U5]);
       },[E4,F4,G4,H4,I4,J4],"$j4");
       $M(J4,function(v6){
	switch(v6.g){
	case 1:
	 $A($$GHCziEventziPSQ$j);break;
	case 2:
	 var w6=v6.v[4];
	 $M(w6,function(x6){
	  switch(x6.g){
	  case 1:
	   S5.J(goog.math.Long.fromBits(0,0));break;
	  case 2:
	   var y6=x6.v[0];
	   S5.J(y6);break;
	  case 3:
	   var z6=x6.v[0];
	   S5.J(z6);break;
	  }
	 },[E4,F4,G4,H4,I4,J4,S5]);break;
	case 3:
	 var A6=v6.v[4];
	 $M(A6,function(B6){
	  switch(B6.g){
	  case 1:
	   S5.J(goog.math.Long.fromBits(0,0));break;
	  case 2:
	   var C6=B6.v[0];
	   S5.J(C6);break;
	  case 3:
	   var D6=B6.v[0];
	   S5.J(D6);break;
	  }
	 },[E4,F4,G4,H4,I4,J4,S5]);break;
	}
       },[E4,F4,G4,H4,I4,J4,S5]);break;
      }
     },[Q4,E4,F4,G4,H4,I4,J4],"$j3");
     $M(H4,function(F6){
      switch(F6.g){
      case 1:
       R4.J(goog.math.Long.fromBits(0,0));break;
      case 2:
       var G6=F6.v[0];
       R4.J(G6);break;
      case 3:
       var H6=F6.v[0];
       R4.J(H6);break;
      }
     },[Q4,E4,F4,G4,H4,I4,J4,R4]);
    },[E4,F4,G4,H4,I4,J4],"$j2");
    $M(J4,function(I6){
     switch(I6.g){
     case 1:
      P4.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var J6=I6.v[0];
      P4.J(J6);break;
     case 3:
      var K6=I6.v[0];
      P4.J(K6);break;
     }
    },[E4,F4,G4,H4,I4,J4,P4]);break;
   case 2:
    $$GHCziEventziPSQ_zdwrloser.J(E4,F4,G4,H4,I4,J4);break;
   }
  },[L4,E4,F4,G4,H4,I4,J4],"$j1");
  $M(J4,function(M6){
   switch(M6.g){
   case 1:
    M4.J(goog.math.Long.fromBits(0,0));break;
   case 2:
    var N6=M6.v[0];
    M4.J(N6);break;
   case 3:
    var O6=M6.v[0];
    M4.J(O6);break;
   }
  },[L4,E4,F4,G4,H4,I4,J4,M4]);
 },[E4,F4,G4,H4,I4,J4],"$j");
 $M(H4,function(P6){
  switch(P6.g){
  case 1:
   K4.J(goog.math.Long.fromBits(0,0));break;
  case 2:
   var Q6=P6.v[0];
   K4.J(Q6);break;
  case 3:
   var R6=P6.v[0];
   K4.J(R6);break;
  }
 },[E4,F4,G4,H4,I4,J4,K4]);
},[],"at libraries/base/GHC/Event/PSQ.hs:341:1");
var $$GHCziEventziPSQ_insertzuzdszdwinsert=$f(8,function(O9,P9,Q9,R9,S9,T9,U9,V9){
 $M(U9,function(W9){
  switch(W9.g){
  case 1:
   var X9=O9.lessThan(R9)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(X9.g){
   case 1:
    var Y9=O9.equals(R9)?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Y9.g){
    case 1:
     var Z9=S9<=P9?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Z9.g){
     case 1:
      $$GHCziEventziPSQ_zdwlbalance.C([R9,S9,T9,$$GHCziEventziPSQ_Start,R9,$$GHCziEventziPSQ_Start],function(aa){
       $R(2,[O9,P9,Q9,aa,O9],"Winner");
      },[O9,P9,Q9]);break;
     case 2:
      $$GHCziEventziPSQ_zdwrbalance.C([O9,P9,Q9,$$GHCziEventziPSQ_Start,R9,$$GHCziEventziPSQ_Start],function(ba){
       $R(2,[R9,S9,T9,ba,O9],"Winner");
      },[O9,R9,S9,T9]);break;
     }break;
    case 2:
     $R(2,[O9,P9,Q9,$$GHCziEventziPSQ_Start,O9],"Winner");break;
    }break;
   case 2:
    var ca=P9<=S9?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(ca.g){
    case 1:
     $$GHCziEventziPSQ_zdwlbalance.C([O9,P9,Q9,$$GHCziEventziPSQ_Start,O9,$$GHCziEventziPSQ_Start],function(da){
      $R(2,[R9,S9,T9,da,R9],"Winner");
     },[R9,S9,T9]);break;
    case 2:
     $$GHCziEventziPSQ_zdwrbalance.C([R9,S9,T9,$$GHCziEventziPSQ_Start,O9,$$GHCziEventziPSQ_Start],function(ea){
      $R(2,[O9,P9,Q9,ea,R9],"Winner");
     },[O9,R9,P9,Q9]);break;
    }break;
   }break;
  case 2:
   var fa=W9.v[1],ga=W9.v[2],ha=W9.v[3],ia=W9.v[4],ja=W9.v[5],ka=W9.v[6];
   var la=O9.lessThanOrEqual(ja)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(la.g){
   case 1:
    $$GHCziEventziPSQ_insertzuzdszdwinsert.C([O9,P9,Q9,R9,S9,T9,ka,V9],function(ma){
     switch(ma.g){
     case 1:
      $R(2,[fa,ga,ha,ia,ja],"Winner");break;
     case 2:
      var na=ma.v[0],oa=ma.v[1],pa=ma.v[2],qa=ma.v[3],ra=ma.v[4];
      var sa=ga<=oa?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(sa.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([fa,ga,ha,ia,ja,qa],function(ta){
	$R(2,[na,oa,pa,ta,ra],"Winner");
       },[oa,na,pa,ra]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([na,oa,pa,ia,ja,qa],function(ua){
	$R(2,[fa,ga,ha,ua,ra],"Winner");
       },[fa,ga,ha,ra]);break;
      }break;
     }
    },[ja,fa,ga,ha,ia]);break;
   case 2:
    $$GHCziEventziPSQ_insertzuzdszdwinsert.C([O9,P9,Q9,fa,ga,ha,ia,ja],function(va){
     switch(va.g){
     case 1:
      $R(2,[R9,S9,T9,ka,V9],"Winner");break;
     case 2:
      var wa=va.v[0],xa=va.v[1],ya=va.v[2],za=va.v[3],Aa=va.v[4];
      var Ba=xa<=S9?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Ba.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([wa,xa,ya,za,Aa,ka],function(Ca){
	$R(2,[R9,S9,T9,Ca,V9],"Winner");
       },[R9,S9,T9,V9]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([R9,S9,T9,za,Aa,ka],function(Da){
	$R(2,[wa,xa,ya,Da,V9],"Winner");
       },[V9,xa,wa,ya]);break;
      }break;
     }
    },[R9,S9,T9,ka,V9]);break;
   }break;
  case 3:
   var Ea=W9.v[1],Fa=W9.v[2],Ga=W9.v[3],Ha=W9.v[4],Ia=W9.v[5],Ja=W9.v[6];
   var Ka=O9.lessThanOrEqual(Ia)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Ka.g){
   case 1:
    $$GHCziEventziPSQ_insertzuzdszdwinsert.C([O9,P9,Q9,Ea,Fa,Ga,Ja,V9],function(La){
     switch(La.g){
     case 1:
      $R(2,[R9,S9,T9,Ha,Ia],"Winner");break;
     case 2:
      var Ma=La.v[0],Na=La.v[1],Oa=La.v[2],Pa=La.v[3],Qa=La.v[4];
      var Ra=S9<=Na?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Ra.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([R9,S9,T9,Ha,Ia,Pa],function(Sa){
	$R(2,[Ma,Na,Oa,Sa,Qa],"Winner");
       },[Na,Ma,Oa,Qa]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([Ma,Na,Oa,Ha,Ia,Pa],function(Ta){
	$R(2,[R9,S9,T9,Ta,Qa],"Winner");
       },[R9,S9,T9,Qa]);break;
      }break;
     }
    },[R9,S9,T9,Ia,Ha]);break;
   case 2:
    $$GHCziEventziPSQ_insertzuzdszdwinsert.C([O9,P9,Q9,R9,S9,T9,Ha,Ia],function(Ua){
     switch(Ua.g){
     case 1:
      $R(2,[Ea,Fa,Ga,Ja,V9],"Winner");break;
     case 2:
      var Va=Ua.v[0],Wa=Ua.v[1],Xa=Ua.v[2],Ya=Ua.v[3],Za=Ua.v[4];
      var ab=Wa<=Fa?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(ab.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([Va,Wa,Xa,Ya,Za,Ja],function(bb){
	$R(2,[Ea,Fa,Ga,bb,V9],"Winner");
       },[V9,Ea,Fa,Ga]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([Ea,Fa,Ga,Ya,Za,Ja],function(cb){
	$R(2,[Va,Wa,Xa,cb,V9],"Winner");
       },[V9,Wa,Va,Xa]);break;
      }break;
     }
    },[V9,Ea,Fa,Ga,Ja]);break;
   }break;
  }
 },[O9,R9,S9,P9,T9,Q9,V9]);
},[],"at libraries/base/GHC/Event/PSQ.hs:155:1");
var $$GHCziEventziPSQ_zdwinsert=$f(4,function(db,eb,fb,gb){
 $M(gb,function(hb){
  switch(hb.g){
  case 1:
   $R(2,[db,eb,fb,$$GHCziEventziPSQ_Start,db],"Winner");break;
  case 2:
   var ib=hb.v[0],jb=hb.v[1],kb=hb.v[2],lb=hb.v[3],mb=hb.v[4];
   $M(lb,function(nb){
    switch(nb.g){
    case 1:
     var ob=db.lessThan(ib)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(ob.g){
     case 1:
      var pb=db.equals(ib)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(pb.g){
      case 1:
       var qb=jb<=eb?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(qb.g){
       case 1:
	$$GHCziEventziPSQ_zdwlbalance.C([ib,jb,kb,$$GHCziEventziPSQ_Start,ib,$$GHCziEventziPSQ_Start],function(rb){
	 $R(2,[db,eb,fb,rb,db],"Winner");
	},[db,eb,fb]);break;
       case 2:
	$$GHCziEventziPSQ_zdwrbalance.C([db,eb,fb,$$GHCziEventziPSQ_Start,ib,$$GHCziEventziPSQ_Start],function(sb){
	 $R(2,[ib,jb,kb,sb,db],"Winner");
	},[db,ib,jb,kb]);break;
       }break;
      case 2:
       $R(2,[db,eb,fb,$$GHCziEventziPSQ_Start,db],"Winner");break;
      }break;
     case 2:
      var tb=eb<=jb?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(tb.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([db,eb,fb,$$GHCziEventziPSQ_Start,db,$$GHCziEventziPSQ_Start],function(ub){
	$R(2,[ib,jb,kb,ub,ib],"Winner");
       },[ib,jb,kb]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([ib,jb,kb,$$GHCziEventziPSQ_Start,db,$$GHCziEventziPSQ_Start],function(vb){
	$R(2,[db,eb,fb,vb,ib],"Winner");
       },[db,eb,fb,ib]);break;
      }break;
     }break;
    case 2:
     var wb=nb.v[1],xb=nb.v[2],yb=nb.v[3],zb=nb.v[4],Ab=nb.v[5],Bb=nb.v[6];
     var Cb=db.lessThanOrEqual(Ab)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Cb.g){
     case 1:
      $$GHCziEventziPSQ_insertzuzdszdwinsert.C([db,eb,fb,ib,jb,kb,Bb,mb],function(Db){
       switch(Db.g){
       case 1:
	$R(2,[wb,xb,yb,zb,Ab],"Winner");break;
       case 2:
	var Eb=Db.v[0],Fb=Db.v[1],Gb=Db.v[2],Hb=Db.v[3],Ib=Db.v[4];
	var Jb=xb<=Fb?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Jb.g){
	case 1:
	 $$GHCziEventziPSQ_zdwlbalance.C([wb,xb,yb,zb,Ab,Hb],function(Kb){
	  $R(2,[Eb,Fb,Gb,Kb,Ib],"Winner");
	 },[Fb,Eb,Gb,Ib]);break;
	case 2:
	 $$GHCziEventziPSQ_zdwrbalance.C([Eb,Fb,Gb,zb,Ab,Hb],function(Lb){
	  $R(2,[wb,xb,yb,Lb,Ib],"Winner");
	 },[wb,xb,yb,Ib]);break;
	}break;
       }
      },[Ab,wb,xb,yb,zb]);break;
     case 2:
      $$GHCziEventziPSQ_insertzuzdszdwinsert.C([db,eb,fb,wb,xb,yb,zb,Ab],function(Mb){
       switch(Mb.g){
       case 1:
	$R(2,[ib,jb,kb,Bb,mb],"Winner");break;
       case 2:
	var Nb=Mb.v[0],Ob=Mb.v[1],Pb=Mb.v[2],Qb=Mb.v[3],Rb=Mb.v[4];
	var Sb=Ob<=jb?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Sb.g){
	case 1:
	 $$GHCziEventziPSQ_zdwlbalance.C([Nb,Ob,Pb,Qb,Rb,Bb],function(Tb){
	  $R(2,[ib,jb,kb,Tb,mb],"Winner");
	 },[ib,jb,kb,mb]);break;
	case 2:
	 $$GHCziEventziPSQ_zdwrbalance.C([ib,jb,kb,Qb,Rb,Bb],function(Ub){
	  $R(2,[Nb,Ob,Pb,Ub,mb],"Winner");
	 },[mb,Ob,Nb,Pb]);break;
	}break;
       }
      },[ib,jb,kb,Bb,mb]);break;
     }break;
    case 3:
     var Vb=nb.v[1],Wb=nb.v[2],Xb=nb.v[3],Yb=nb.v[4],Zb=nb.v[5],ac=nb.v[6];
     var bc=db.lessThanOrEqual(Zb)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(bc.g){
     case 1:
      $$GHCziEventziPSQ_insertzuzdszdwinsert.C([db,eb,fb,Vb,Wb,Xb,ac,mb],function(cc){
       switch(cc.g){
       case 1:
	$R(2,[ib,jb,kb,Yb,Zb],"Winner");break;
       case 2:
	var dc=cc.v[0],ec=cc.v[1],fc=cc.v[2],gc=cc.v[3],hc=cc.v[4];
	var ic=jb<=ec?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(ic.g){
	case 1:
	 $$GHCziEventziPSQ_zdwlbalance.C([ib,jb,kb,Yb,Zb,gc],function(jc){
	  $R(2,[dc,ec,fc,jc,hc],"Winner");
	 },[ec,dc,fc,hc]);break;
	case 2:
	 $$GHCziEventziPSQ_zdwrbalance.C([dc,ec,fc,Yb,Zb,gc],function(kc){
	  $R(2,[ib,jb,kb,kc,hc],"Winner");
	 },[ib,jb,kb,hc]);break;
	}break;
       }
      },[ib,jb,kb,Zb,Yb]);break;
     case 2:
      $$GHCziEventziPSQ_insertzuzdszdwinsert.C([db,eb,fb,ib,jb,kb,Yb,Zb],function(lc){
       switch(lc.g){
       case 1:
	$R(2,[Vb,Wb,Xb,ac,mb],"Winner");break;
       case 2:
	var mc=lc.v[0],nc=lc.v[1],oc=lc.v[2],pc=lc.v[3],qc=lc.v[4];
	var rc=nc<=Wb?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(rc.g){
	case 1:
	 $$GHCziEventziPSQ_zdwlbalance.C([mc,nc,oc,pc,qc,ac],function(sc){
	  $R(2,[Vb,Wb,Xb,sc,mb],"Winner");
	 },[mb,Vb,Wb,Xb]);break;
	case 2:
	 $$GHCziEventziPSQ_zdwrbalance.C([Vb,Wb,Xb,pc,qc,ac],function(tc){
	  $R(2,[mc,nc,oc,tc,mb],"Winner");
	 },[mb,nc,mc,oc]);break;
	}break;
       }
      },[mb,Vb,Wb,Xb,ac]);break;
     }break;
    }
   },[db,eb,fb,ib,jb,kb,mb]);break;
  }
 },[db,eb,fb]);
},[],"at libraries/base/GHC/Event/PSQ.hs:155:1");
var $$GHCziEventziPSQ_deletezuzdsdelete=$f(7,function(Cc,Dc,Ec,Fc,Gc,Hc,Ic){
 $M(Hc,function(Jc){
  switch(Jc.g){
  case 1:
   var Kc=Cc.equals(Ec)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Kc.g){
   case 1:
    $R(2,[Ec,Fc,Gc,$$GHCziEventziPSQ_Start,Ec],"Winner");break;
   case 2:
    $R(1,[],"Void");break;
   }break;
  case 2:
   var Lc=Jc.v[1],Mc=Jc.v[2],Nc=Jc.v[3],Oc=Jc.v[4],Pc=Jc.v[5],Qc=Jc.v[6];
   var Rc=Cc.lessThanOrEqual(Pc)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Rc.g){
   case 1:
    $$GHCziEventziPSQ_deletezuzdsdelete.C([Cc,$$GHCziPrim_coercionTokenzh,Ec,Fc,Gc,Qc,Ic],function(Sc){
     switch(Sc.g){
     case 1:
      $R(2,[Lc,Mc,Nc,Oc,Pc],"Winner");break;
     case 2:
      var Tc=Sc.v[0],Uc=Sc.v[1],Vc=Sc.v[2],Wc=Sc.v[3],Xc=Sc.v[4];
      var Yc=Mc<=Uc?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Yc.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([Lc,Mc,Nc,Oc,Pc,Wc],function(Zc){
	$R(2,[Tc,Uc,Vc,Zc,Xc],"Winner");
       },[Uc,Tc,Vc,Xc]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([Tc,Uc,Vc,Oc,Pc,Wc],function(ad){
	$R(2,[Lc,Mc,Nc,ad,Xc],"Winner");
       },[Lc,Mc,Nc,Xc]);break;
      }break;
     }
    },[Pc,Lc,Mc,Nc,Oc]);break;
   case 2:
    $$GHCziEventziPSQ_deletezuzdsdelete.C([Cc,$$GHCziPrim_coercionTokenzh,Lc,Mc,Nc,Oc,Pc],function(bd){
     switch(bd.g){
     case 1:
      $R(2,[Ec,Fc,Gc,Qc,Ic],"Winner");break;
     case 2:
      var cd=bd.v[0],dd=bd.v[1],ed=bd.v[2],fd=bd.v[3],gd=bd.v[4];
      var hd=dd<=Fc?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(hd.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([cd,dd,ed,fd,gd,Qc],function(id){
	$R(2,[Ec,Fc,Gc,id,Ic],"Winner");
       },[Ec,Fc,Gc,Ic]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([Ec,Fc,Gc,fd,gd,Qc],function(jd){
	$R(2,[cd,dd,ed,jd,Ic],"Winner");
       },[Ic,dd,cd,ed]);break;
      }break;
     }
    },[Ec,Fc,Gc,Qc,Ic]);break;
   }break;
  case 3:
   var kd=Jc.v[1],ld=Jc.v[2],md=Jc.v[3],nd=Jc.v[4],od=Jc.v[5],pd=Jc.v[6];
   var qd=Cc.lessThanOrEqual(od)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(qd.g){
   case 1:
    $$GHCziEventziPSQ_deletezuzdsdelete.C([Cc,$$GHCziPrim_coercionTokenzh,kd,ld,md,pd,Ic],function(rd){
     switch(rd.g){
     case 1:
      $R(2,[Ec,Fc,Gc,nd,od],"Winner");break;
     case 2:
      var sd=rd.v[0],td=rd.v[1],ud=rd.v[2],vd=rd.v[3],wd=rd.v[4];
      var xd=Fc<=td?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(xd.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([Ec,Fc,Gc,nd,od,vd],function(yd){
	$R(2,[sd,td,ud,yd,wd],"Winner");
       },[td,sd,ud,wd]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([sd,td,ud,nd,od,vd],function(zd){
	$R(2,[Ec,Fc,Gc,zd,wd],"Winner");
       },[Ec,Fc,Gc,wd]);break;
      }break;
     }
    },[Ec,Fc,Gc,od,nd]);break;
   case 2:
    $$GHCziEventziPSQ_deletezuzdsdelete.C([Cc,$$GHCziPrim_coercionTokenzh,Ec,Fc,Gc,nd,od],function(Ad){
     switch(Ad.g){
     case 1:
      $R(2,[kd,ld,md,pd,Ic],"Winner");break;
     case 2:
      var Bd=Ad.v[0],Cd=Ad.v[1],Dd=Ad.v[2],Ed=Ad.v[3],Fd=Ad.v[4];
      var Gd=Cd<=ld?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Gd.g){
      case 1:
       $$GHCziEventziPSQ_zdwlbalance.C([Bd,Cd,Dd,Ed,Fd,pd],function(Hd){
	$R(2,[kd,ld,md,Hd,Ic],"Winner");
       },[Ic,kd,ld,md]);break;
      case 2:
       $$GHCziEventziPSQ_zdwrbalance.C([kd,ld,md,Ed,Fd,pd],function(Id){
	$R(2,[Bd,Cd,Dd,Id,Ic],"Winner");
       },[Ic,Cd,Bd,Dd]);break;
      }break;
     }
    },[Ic,kd,ld,md,pd]);break;
   }break;
  }
 },[Cc,Ec,Fc,Gc,Ic]);
},[],"at libraries/base/GHC/Event/PSQ.hs:175:1");
var $$GHCziEventziPSQ_delete=$f(2,function(Jd,Kd){
 $M(Kd,function(Ld){
  switch(Ld.g){
  case 1:
   $R(1,[],"Void");break;
  case 2:
   var Md=Ld.v[0],Nd=Ld.v[1],Od=Ld.v[2],Pd=Ld.v[3],Qd=Ld.v[4];
   $M(Pd,function(Rd){
    switch(Rd.g){
    case 1:
     $M(Jd,function(Sd){
      var Td=Sd.v[0];
      var Ud=Td.equals(Md)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Ud.g){
      case 1:
       $R(2,[Md,Nd,Od,$$GHCziEventziPSQ_Start,Md],"Winner");break;
      case 2:
       $R(1,[],"Void");break;
      }
     },[Md,Nd,Od]);break;
    case 2:
     var Vd=Rd.v[1],Wd=Rd.v[2],Xd=Rd.v[3],Yd=Rd.v[4],Zd=Rd.v[5],ae=Rd.v[6];
     $M(Jd,function(be){
      var ce=be.v[0];
      var de=ce.lessThanOrEqual(Zd)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(de.g){
      case 1:
       $$GHCziEventziPSQ_deletezuzdsdelete.C([ce,$$GHCziPrim_coercionTokenzh,Md,Nd,Od,ae,Qd],function(ee){
	switch(ee.g){
	case 1:
	 $R(2,[Vd,Wd,Xd,Yd,Zd],"Winner");break;
	case 2:
	 var fe=ee.v[0],ge=ee.v[1],he=ee.v[2],ie=ee.v[3],je=ee.v[4];
	 var ke=Wd<=ge?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(ke.g){
	 case 1:
	  $$GHCziEventziPSQ_zdwlbalance.C([Vd,Wd,Xd,Yd,Zd,ie],function(le){
	   $R(2,[fe,ge,he,le,je],"Winner");
	  },[ge,fe,he,je]);break;
	 case 2:
	  $$GHCziEventziPSQ_zdwrbalance.C([fe,ge,he,Yd,Zd,ie],function(me){
	   $R(2,[Vd,Wd,Xd,me,je],"Winner");
	  },[Vd,Wd,Xd,je]);break;
	 }break;
	}
       },[Zd,Vd,Wd,Xd,Yd]);break;
      case 2:
       $$GHCziEventziPSQ_deletezuzdsdelete.C([ce,$$GHCziPrim_coercionTokenzh,Vd,Wd,Xd,Yd,Zd],function(ne){
	switch(ne.g){
	case 1:
	 $R(2,[Md,Nd,Od,ae,Qd],"Winner");break;
	case 2:
	 var oe=ne.v[0],pe=ne.v[1],qe=ne.v[2],re=ne.v[3],se=ne.v[4];
	 var te=pe<=Nd?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(te.g){
	 case 1:
	  $$GHCziEventziPSQ_zdwlbalance.C([oe,pe,qe,re,se,ae],function(ue){
	   $R(2,[Md,Nd,Od,ue,Qd],"Winner");
	  },[Md,Nd,Od,Qd]);break;
	 case 2:
	  $$GHCziEventziPSQ_zdwrbalance.C([Md,Nd,Od,re,se,ae],function(ve){
	   $R(2,[oe,pe,qe,ve,Qd],"Winner");
	  },[Qd,pe,oe,qe]);break;
	 }break;
	}
       },[Md,Nd,Od,ae,Qd]);break;
      }
     },[Md,Nd,Od,Zd,ae,Qd,Vd,Wd,Xd,Yd]);break;
    case 3:
     var we=Rd.v[1],xe=Rd.v[2],ye=Rd.v[3],ze=Rd.v[4],Ae=Rd.v[5],Be=Rd.v[6];
     $M(Jd,function(Ce){
      var De=Ce.v[0];
      var Ee=De.lessThanOrEqual(Ae)?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Ee.g){
      case 1:
       $$GHCziEventziPSQ_deletezuzdsdelete.C([De,$$GHCziPrim_coercionTokenzh,we,xe,ye,Be,Qd],function(Fe){
	switch(Fe.g){
	case 1:
	 $R(2,[Md,Nd,Od,ze,Ae],"Winner");break;
	case 2:
	 var Ge=Fe.v[0],He=Fe.v[1],Ie=Fe.v[2],Je=Fe.v[3],Ke=Fe.v[4];
	 var Le=Nd<=He?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Le.g){
	 case 1:
	  $$GHCziEventziPSQ_zdwlbalance.C([Md,Nd,Od,ze,Ae,Je],function(Me){
	   $R(2,[Ge,He,Ie,Me,Ke],"Winner");
	  },[He,Ge,Ie,Ke]);break;
	 case 2:
	  $$GHCziEventziPSQ_zdwrbalance.C([Ge,He,Ie,ze,Ae,Je],function(Ne){
	   $R(2,[Md,Nd,Od,Ne,Ke],"Winner");
	  },[Md,Nd,Od,Ke]);break;
	 }break;
	}
       },[Md,Nd,Od,Ae,ze]);break;
      case 2:
       $$GHCziEventziPSQ_deletezuzdsdelete.C([De,$$GHCziPrim_coercionTokenzh,Md,Nd,Od,ze,Ae],function(Oe){
	switch(Oe.g){
	case 1:
	 $R(2,[we,xe,ye,Be,Qd],"Winner");break;
	case 2:
	 var Pe=Oe.v[0],Qe=Oe.v[1],Re=Oe.v[2],Se=Oe.v[3],Te=Oe.v[4];
	 var Ue=Qe<=xe?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Ue.g){
	 case 1:
	  $$GHCziEventziPSQ_zdwlbalance.C([Pe,Qe,Re,Se,Te,Be],function(Ve){
	   $R(2,[we,xe,ye,Ve,Qd],"Winner");
	  },[Qd,we,xe,ye]);break;
	 case 2:
	  $$GHCziEventziPSQ_zdwrbalance.C([we,xe,ye,Se,Te,Be],function(We){
	   $R(2,[Pe,Qe,Re,We,Qd],"Winner");
	  },[Qd,Qe,Pe,Re]);break;
	 }break;
	}
       },[Qd,we,xe,ye,Be]);break;
      }
     },[Md,Nd,Od,Qd,Ae,we,xe,ye,Be,ze]);break;
    }
   },[Jd,Md,Nd,Od,Qd]);break;
  }
 },[Jd]);
},[],"at libraries/base/GHC/Event/PSQ.hs:175:1");
var $$GHCziEventziPSQ_Start=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/Event/PSQ.hs:290:16");
var $$GHCziEventziPSQ$b=$D(1,function(){
 $r([":"]);
},"lvl");
var $$GHCziEventziPSQ$c=$D(1,function(){
 $r([" "]);
},"lvl1");
var $$GHCziEventziPSQ$d=$F(2,function(aS,bS){
 var cS=$t(function(){
  var dS=$d(2,[$$GHCziEventziPSQ$c,bS],"sat");
  var eS=$d(2,[$$GHCziEventziPSQ$b,dS],"sat");
  $$GHCziBase_zpzp.J(aS,eS);
 },[aS,bS],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["GHC.Event.PSQ.",cS],function(fS){
  $$GHCziErr_error.J(fS);
 },[]);
},"lvl2");
var $$GHCziEventziPSQ$e=$F(2,function(QJ,G9){
 $$GHCziEventziPSQ$d.J(QJ,G9);
},"at libraries/base/GHC/Event/PSQ.hs:462:1");
var $$GHCziEventziPSQ$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("right");
},"lvl3");
var $$GHCziEventziPSQ$g=$T(function(){
 $$GHCziCString_unpackCStringzh.J("empty loser tree");
},"lvl4");
var $$GHCziEventziPSQ$h=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$f,$$GHCziEventziPSQ$g);
},"lvl5");
var $$GHCziEventziPSQ$i=$T(function(){
 $$GHCziCString_unpackCStringzh.J("left");
},"lvl6");
var $$GHCziEventziPSQ$j=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$i,$$GHCziEventziPSQ$g);
},"lvl7");
var $$GHCziEventziPSQ$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("lsingleRight");
},"lvl8");
var $$GHCziEventziPSQ$l=$T(function(){
 $$GHCziCString_unpackCStringzh.J("malformed tree");
},"lvl9");
var $$GHCziEventziPSQ$m=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$k,$$GHCziEventziPSQ$l);
},"lvl10");
var $$GHCziEventziPSQ$n=$F(6,function(gS,hS,iS,jS,kS,lS){
 $M(jS,function(mS){
  switch(mS.g){
  case 1:
   $A($$GHCziEventziPSQ$m);break;
  case 2:
   var nS=mS.v[1],oS=mS.v[2],pS=mS.v[3],qS=mS.v[4],rS=mS.v[5],sS=mS.v[6];
   var tS=$f(1,function(uS){
    $M(sS,function(vS){
     switch(vS.g){
     case 1:
      $M(lS,function(wS){
       switch(wS.g){
       case 1:
	var xS=$d(2,[goog.math.Long.fromBits(1,0),gS,hS,iS,$$GHCziEventziPSQ_Start,kS,$$GHCziEventziPSQ_Start],"sat");
	var zS=goog.math.Long.fromBits(1,0).add(uS);
	var yS=zS.add(goog.math.Long.fromBits(1,0));
	$R(2,[yS,nS,oS,pS,qS,rS,xS],"LLoser");break;
       case 2:
	var AS=wS.v[0];
	var CS=goog.math.Long.fromBits(1,0).add(AS);
	var BS=$d(2,[CS,gS,hS,iS,$$GHCziEventziPSQ_Start,kS,wS],"sat");
	var ES=goog.math.Long.fromBits(1,0).add(uS);
	var DS=ES.add(CS);
	$R(2,[DS,nS,oS,pS,qS,rS,BS],"LLoser");break;
       case 3:
	var FS=wS.v[0];
	var HS=goog.math.Long.fromBits(1,0).add(FS);
	var GS=$d(2,[HS,gS,hS,iS,$$GHCziEventziPSQ_Start,kS,wS],"sat");
	var JS=goog.math.Long.fromBits(1,0).add(uS);
	var IS=JS.add(HS);
	$R(2,[IS,nS,oS,pS,qS,rS,GS],"LLoser");break;
       }
      },[uS,nS,oS,pS,qS,rS,gS,hS,iS,kS]);break;
     case 2:
      var KS=vS.v[0];
      $M(lS,function(LS){
       switch(LS.g){
       case 1:
	var NS=goog.math.Long.fromBits(1,0).add(KS);
	var MS=$d(2,[NS,gS,hS,iS,vS,kS,$$GHCziEventziPSQ_Start],"sat");
	var PS=goog.math.Long.fromBits(1,0).add(uS);
	var OS=PS.add(NS);
	$R(2,[OS,nS,oS,pS,qS,rS,MS],"LLoser");break;
       case 2:
	var QS=LS.v[0];
	var VS=goog.math.Long.fromBits(1,0).add(KS);
	var SS=VS.add(QS);
	var RS=$d(2,[SS,gS,hS,iS,vS,kS,LS],"sat");
	var US=goog.math.Long.fromBits(1,0).add(uS);
	var TS=US.add(SS);
	$R(2,[TS,nS,oS,pS,qS,rS,RS],"LLoser");break;
       case 3:
	var WS=LS.v[0];
	var bT=goog.math.Long.fromBits(1,0).add(KS);
	var YS=bT.add(WS);
	var XS=$d(2,[YS,gS,hS,iS,vS,kS,LS],"sat");
	var aT=goog.math.Long.fromBits(1,0).add(uS);
	var ZS=aT.add(YS);
	$R(2,[ZS,nS,oS,pS,qS,rS,XS],"LLoser");break;
       }
      },[uS,nS,oS,pS,qS,rS,gS,hS,iS,kS,KS,vS]);break;
     case 3:
      var cT=vS.v[0];
      $M(lS,function(dT){
       switch(dT.g){
       case 1:
	var fT=goog.math.Long.fromBits(1,0).add(cT);
	var eT=$d(2,[fT,gS,hS,iS,vS,kS,$$GHCziEventziPSQ_Start],"sat");
	var hT=goog.math.Long.fromBits(1,0).add(uS);
	var gT=hT.add(fT);
	$R(2,[gT,nS,oS,pS,qS,rS,eT],"LLoser");break;
       case 2:
	var iT=dT.v[0];
	var nT=goog.math.Long.fromBits(1,0).add(cT);
	var kT=nT.add(iT);
	var jT=$d(2,[kT,gS,hS,iS,vS,kS,dT],"sat");
	var mT=goog.math.Long.fromBits(1,0).add(uS);
	var lT=mT.add(kT);
	$R(2,[lT,nS,oS,pS,qS,rS,jT],"LLoser");break;
       case 3:
	var oT=dT.v[0];
	var tT=goog.math.Long.fromBits(1,0).add(cT);
	var qT=tT.add(oT);
	var pT=$d(2,[qT,gS,hS,iS,vS,kS,dT],"sat");
	var sT=goog.math.Long.fromBits(1,0).add(uS);
	var rT=sT.add(qT);
	$R(2,[rT,nS,oS,pS,qS,rS,pT],"LLoser");break;
       }
      },[uS,nS,oS,pS,qS,rS,gS,hS,iS,kS,vS,cT]);break;
     }
    },[lS,uS,nS,oS,pS,qS,rS,gS,hS,iS,kS]);
   },[sS,lS,nS,oS,pS,qS,rS,gS,hS,iS,kS],"$j");
   $M(qS,function(uT){
    switch(uT.g){
    case 1:
     tS.J(goog.math.Long.fromBits(0,0));break;
    case 2:
     var vT=uT.v[0];
     tS.J(vT);break;
    case 3:
     var wT=uT.v[0];
     tS.J(wT);break;
    }
   },[sS,lS,nS,oS,pS,qS,rS,gS,hS,iS,kS,tS]);break;
  case 3:
   var xT=mS.v[1],yT=mS.v[2],zT=mS.v[3],AT=mS.v[4],BT=mS.v[5],CT=mS.v[6];
   var DT=$f(1,function(ET){
    $M(CT,function(FT){
     switch(FT.g){
     case 1:
      $M(lS,function(GT){
       switch(GT.g){
       case 1:
	var HT=$d(2,[goog.math.Long.fromBits(1,0),xT,yT,zT,$$GHCziEventziPSQ_Start,kS,$$GHCziEventziPSQ_Start],"sat");
	var JT=goog.math.Long.fromBits(1,0).add(ET);
	var IT=JT.add(goog.math.Long.fromBits(1,0));
	$R(2,[IT,gS,hS,iS,AT,BT,HT],"LLoser");break;
       case 2:
	var KT=GT.v[0];
	var MT=goog.math.Long.fromBits(1,0).add(KT);
	var LT=$d(2,[MT,xT,yT,zT,$$GHCziEventziPSQ_Start,kS,GT],"sat");
	var OT=goog.math.Long.fromBits(1,0).add(ET);
	var NT=OT.add(MT);
	$R(2,[NT,gS,hS,iS,AT,BT,LT],"LLoser");break;
       case 3:
	var PT=GT.v[0];
	var RT=goog.math.Long.fromBits(1,0).add(PT);
	var QT=$d(2,[RT,xT,yT,zT,$$GHCziEventziPSQ_Start,kS,GT],"sat");
	var TT=goog.math.Long.fromBits(1,0).add(ET);
	var ST=TT.add(RT);
	$R(2,[ST,gS,hS,iS,AT,BT,QT],"LLoser");break;
       }
      },[gS,hS,iS,kS,ET,AT,BT,xT,yT,zT]);break;
     case 2:
      var UT=FT.v[0];
      $M(lS,function(VT){
       switch(VT.g){
       case 1:
	var XT=goog.math.Long.fromBits(1,0).add(UT);
	var WT=$d(2,[XT,xT,yT,zT,FT,kS,$$GHCziEventziPSQ_Start],"sat");
	var ZT=goog.math.Long.fromBits(1,0).add(ET);
	var YT=ZT.add(XT);
	$R(2,[YT,gS,hS,iS,AT,BT,WT],"LLoser");break;
       case 2:
	var aU=VT.v[0];
	var fU=goog.math.Long.fromBits(1,0).add(UT);
	var cU=fU.add(aU);
	var bU=$d(2,[cU,xT,yT,zT,FT,kS,VT],"sat");
	var eU=goog.math.Long.fromBits(1,0).add(ET);
	var dU=eU.add(cU);
	$R(2,[dU,gS,hS,iS,AT,BT,bU],"LLoser");break;
       case 3:
	var gU=VT.v[0];
	var lU=goog.math.Long.fromBits(1,0).add(UT);
	var iU=lU.add(gU);
	var hU=$d(2,[iU,xT,yT,zT,FT,kS,VT],"sat");
	var kU=goog.math.Long.fromBits(1,0).add(ET);
	var jU=kU.add(iU);
	$R(2,[jU,gS,hS,iS,AT,BT,hU],"LLoser");break;
       }
      },[gS,hS,iS,kS,ET,AT,BT,xT,yT,zT,UT,FT]);break;
     case 3:
      var mU=FT.v[0];
      $M(lS,function(nU){
       switch(nU.g){
       case 1:
	var pU=goog.math.Long.fromBits(1,0).add(mU);
	var oU=$d(2,[pU,xT,yT,zT,FT,kS,$$GHCziEventziPSQ_Start],"sat");
	var rU=goog.math.Long.fromBits(1,0).add(ET);
	var qU=rU.add(pU);
	$R(2,[qU,gS,hS,iS,AT,BT,oU],"LLoser");break;
       case 2:
	var sU=nU.v[0];
	var xU=goog.math.Long.fromBits(1,0).add(mU);
	var uU=xU.add(sU);
	var tU=$d(2,[uU,xT,yT,zT,FT,kS,nU],"sat");
	var wU=goog.math.Long.fromBits(1,0).add(ET);
	var vU=wU.add(uU);
	$R(2,[vU,gS,hS,iS,AT,BT,tU],"LLoser");break;
       case 3:
	var yU=nU.v[0];
	var DU=goog.math.Long.fromBits(1,0).add(mU);
	var AU=DU.add(yU);
	var zU=$d(2,[AU,xT,yT,zT,FT,kS,nU],"sat");
	var CU=goog.math.Long.fromBits(1,0).add(ET);
	var BU=CU.add(AU);
	$R(2,[BU,gS,hS,iS,AT,BT,zU],"LLoser");break;
       }
      },[gS,hS,iS,kS,ET,AT,BT,xT,yT,zT,FT,mU]);break;
     }
    },[lS,gS,hS,iS,kS,ET,AT,BT,xT,yT,zT]);
   },[lS,gS,hS,iS,kS,CT,AT,BT,xT,yT,zT],"$j");
   $M(AT,function(EU){
    switch(EU.g){
    case 1:
     DT.J(goog.math.Long.fromBits(0,0));break;
    case 2:
     var FU=EU.v[0];
     DT.J(FU);break;
    case 3:
     var GU=EU.v[0];
     DT.J(GU);break;
    }
   },[lS,gS,hS,iS,kS,CT,AT,BT,xT,yT,zT,DT]);break;
  }
 },[lS,gS,hS,iS,kS]);
},"at libraries/base/GHC/Event/PSQ.hs:383:1");
var $$GHCziEventziPSQ$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("lsingleLeft");
},"lvl11");
var $$GHCziEventziPSQ$p=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$o,$$GHCziEventziPSQ$l);
},"lvl12");
var $$GHCziEventziPSQ$q=$F(6,function(HU,IU,JU,KU,LU,MU){
 $M(MU,function(NU){
  switch(NU.g){
  case 1:
   $A($$GHCziEventziPSQ$p);break;
  case 2:
   var OU=NU.v[1],PU=NU.v[2],QU=NU.v[3],RU=NU.v[4],SU=NU.v[5],TU=NU.v[6];
   var UU=IU<=PU?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(UU.g){
   case 1:
    var VU=$f(1,function(WU){
     $M(RU,function(XU){
      switch(XU.g){
      case 1:
       $M(KU,function(YU){
	var ZU=goog.math.Long.fromBits(1,0).add(WU);
	$R(2,[ZU,HU,IU,JU,YU,LU,$$GHCziEventziPSQ_Start],"LLoser");
       },[IU,WU,HU,JU,LU]);break;
      case 2:
       var aV=XU.v[0];
       $M(KU,function(bV){
	var dV=goog.math.Long.fromBits(1,0).add(WU);
	var cV=dV.add(aV);
	$R(2,[cV,HU,IU,JU,bV,LU,XU],"LLoser");
       },[IU,WU,HU,JU,LU,aV,XU]);break;
      case 3:
       var eV=XU.v[0];
       $M(KU,function(fV){
	var hV=goog.math.Long.fromBits(1,0).add(WU);
	var gV=hV.add(eV);
	$R(2,[gV,HU,IU,JU,fV,LU,XU],"LLoser");
       },[IU,WU,HU,JU,LU,XU,eV]);break;
      }
     },[IU,KU,WU,HU,JU,LU]);
    },[IU,RU,KU,HU,JU,LU],"$j");
    $b(function(){
     $M(KU,function(zV){
      switch(zV.g){
      case 1:
       VU.J(goog.math.Long.fromBits(0,0));break;
      case 2:
       var AV=zV.v[0];
       VU.J(AV);break;
      case 3:
       var BV=zV.v[0];
       VU.J(BV);break;
      }
     },[PU,VU,TU,OU,QU,SU]);
    },[],function(iV){
     var jV=$f(1,function(kV){
      $M(TU,function(lV){
       switch(lV.g){
       case 1:
	$M(iV,function(mV){
	 var nV=goog.math.Long.fromBits(1,0).add(kV);
	 $R(2,[nV,OU,PU,QU,mV,SU,$$GHCziEventziPSQ_Start],"LLoser");
	},[PU,kV,OU,QU,SU]);break;
       case 2:
	var oV=lV.v[0];
	$M(iV,function(pV){
	 var rV=goog.math.Long.fromBits(1,0).add(kV);
	 var qV=rV.add(oV);
	 $R(2,[qV,OU,PU,QU,pV,SU,lV],"LLoser");
	},[PU,kV,OU,QU,SU,oV,lV]);break;
       case 3:
	var sV=lV.v[0];
	$M(iV,function(tV){
	 var vV=goog.math.Long.fromBits(1,0).add(kV);
	 var uV=vV.add(sV);
	 $R(2,[uV,OU,PU,QU,tV,SU,lV],"LLoser");
	},[PU,kV,OU,QU,SU,lV,sV]);break;
       }
      },[PU,iV,kV,OU,QU,SU]);
     },[PU,iV,TU,OU,QU,SU],"$j1");
     $M(iV,function(wV){
      switch(wV.g){
      case 1:
       jV.J(goog.math.Long.fromBits(0,0));break;
      case 2:
       var xV=wV.v[0];
       jV.J(xV);break;
      case 3:
       var yV=wV.v[0];
       jV.J(yV);break;
      }
     },[PU,iV,TU,OU,QU,SU,jV]);
    },[PU,TU,OU,QU,SU]);break;
   case 2:
    $b(function(){
     $M(KU,function(TV){
      switch(TV.g){
      case 1:
       $M(RU,function(UV){
	switch(UV.g){
	case 1:
	 $R(3,[goog.math.Long.fromBits(1,0),OU,PU,QU,$$GHCziEventziPSQ_Start,LU,$$GHCziEventziPSQ_Start],"RLoser");break;
	case 2:
	 var VV=UV.v[0];
	 var WV=goog.math.Long.fromBits(1,0).add(VV);
	 $R(3,[WV,OU,PU,QU,$$GHCziEventziPSQ_Start,LU,UV],"RLoser");break;
	case 3:
	 var XV=UV.v[0];
	 var YV=goog.math.Long.fromBits(1,0).add(XV);
	 $R(3,[YV,OU,PU,QU,$$GHCziEventziPSQ_Start,LU,UV],"RLoser");break;
	}
       },[IU,PU,HU,JU,LU,TU,OU,QU,SU]);break;
      case 2:
       var ZV=TV.v[0];
       $M(RU,function(aW){
	switch(aW.g){
	case 1:
	 var bW=goog.math.Long.fromBits(1,0).add(ZV);
	 $R(3,[bW,OU,PU,QU,TV,LU,$$GHCziEventziPSQ_Start],"RLoser");break;
	case 2:
	 var cW=aW.v[0];
	 var eW=goog.math.Long.fromBits(1,0).add(ZV);
	 var dW=eW.add(cW);
	 $R(3,[dW,OU,PU,QU,TV,LU,aW],"RLoser");break;
	case 3:
	 var fW=aW.v[0];
	 var hW=goog.math.Long.fromBits(1,0).add(ZV);
	 var gW=hW.add(fW);
	 $R(3,[gW,OU,PU,QU,TV,LU,aW],"RLoser");break;
	}
       },[IU,PU,HU,JU,LU,TU,OU,QU,SU,ZV,TV]);break;
      case 3:
       var iW=TV.v[0];
       $M(RU,function(jW){
	switch(jW.g){
	case 1:
	 var kW=goog.math.Long.fromBits(1,0).add(iW);
	 $R(3,[kW,OU,PU,QU,TV,LU,$$GHCziEventziPSQ_Start],"RLoser");break;
	case 2:
	 var lW=jW.v[0];
	 var nW=goog.math.Long.fromBits(1,0).add(iW);
	 var mW=nW.add(lW);
	 $R(3,[mW,OU,PU,QU,TV,LU,jW],"RLoser");break;
	case 3:
	 var oW=jW.v[0];
	 var qW=goog.math.Long.fromBits(1,0).add(iW);
	 var pW=qW.add(oW);
	 $R(3,[pW,OU,PU,QU,TV,LU,jW],"RLoser");break;
	}
       },[IU,PU,HU,JU,LU,TU,OU,QU,SU,TV,iW]);break;
      }
     },[IU,PU,RU,HU,JU,LU,TU,OU,QU,SU]);
    },[],function(CV){
     var DV=$f(1,function(EV){
      $M(TU,function(FV){
       switch(FV.g){
       case 1:
	$M(CV,function(GV){
	 var HV=goog.math.Long.fromBits(1,0).add(EV);
	 $R(2,[HV,HU,IU,JU,GV,SU,$$GHCziEventziPSQ_Start],"LLoser");
	},[IU,HU,JU,SU,EV]);break;
       case 2:
	var IV=FV.v[0];
	$M(CV,function(JV){
	 var LV=goog.math.Long.fromBits(1,0).add(EV);
	 var KV=LV.add(IV);
	 $R(2,[KV,HU,IU,JU,JV,SU,FV],"LLoser");
	},[IU,HU,JU,SU,EV,IV,FV]);break;
       case 3:
	var MV=FV.v[0];
	$M(CV,function(NV){
	 var PV=goog.math.Long.fromBits(1,0).add(EV);
	 var OV=PV.add(MV);
	 $R(2,[OV,HU,IU,JU,NV,SU,FV],"LLoser");
	},[IU,HU,JU,SU,EV,FV,MV]);break;
       }
      },[IU,HU,JU,SU,CV,EV]);
     },[IU,HU,JU,TU,SU,CV],"$j");
     $M(CV,function(QV){
      switch(QV.g){
      case 1:
       DV.J(goog.math.Long.fromBits(0,0));break;
      case 2:
       var RV=QV.v[0];
       DV.J(RV);break;
      case 3:
       var SV=QV.v[0];
       DV.J(SV);break;
      }
     },[IU,HU,JU,TU,SU,CV,DV]);
    },[IU,HU,JU,TU,SU]);break;
   }break;
  case 3:
   var rW=NU.v[1],sW=NU.v[2],tW=NU.v[3],uW=NU.v[4],vW=NU.v[5],wW=NU.v[6];
   var xW=$f(1,function(yW){
    $M(uW,function(zW){
     switch(zW.g){
     case 1:
      $M(KU,function(AW){
       var BW=goog.math.Long.fromBits(1,0).add(yW);
       $R(2,[BW,HU,IU,JU,AW,LU,$$GHCziEventziPSQ_Start],"LLoser");
      },[IU,HU,JU,LU,yW]);break;
     case 2:
      var CW=zW.v[0];
      $M(KU,function(DW){
       var FW=goog.math.Long.fromBits(1,0).add(yW);
       var EW=FW.add(CW);
       $R(2,[EW,HU,IU,JU,DW,LU,zW],"LLoser");
      },[IU,HU,JU,LU,yW,CW,zW]);break;
     case 3:
      var GW=zW.v[0];
      $M(KU,function(HW){
       var JW=goog.math.Long.fromBits(1,0).add(yW);
       var IW=JW.add(GW);
       $R(2,[IW,HU,IU,JU,HW,LU,zW],"LLoser");
      },[IU,HU,JU,LU,yW,zW,GW]);break;
     }
    },[IU,KU,HU,JU,LU,yW]);
   },[IU,KU,HU,JU,LU,uW],"$j");
   $b(function(){
    $M(KU,function(bX){
     switch(bX.g){
     case 1:
      xW.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var cX=bX.v[0];
      xW.J(cX);break;
     case 3:
      var dX=bX.v[0];
      xW.J(dX);break;
     }
    },[xW,wW,rW,sW,tW,vW]);
   },[],function(KW){
    var LW=$f(1,function(MW){
     $M(wW,function(NW){
      switch(NW.g){
      case 1:
       $M(KW,function(OW){
	var PW=goog.math.Long.fromBits(1,0).add(MW);
	$R(3,[PW,rW,sW,tW,OW,vW,$$GHCziEventziPSQ_Start],"RLoser");
       },[MW,rW,sW,tW,vW]);break;
      case 2:
       var QW=NW.v[0];
       $M(KW,function(RW){
	var TW=goog.math.Long.fromBits(1,0).add(MW);
	var SW=TW.add(QW);
	$R(3,[SW,rW,sW,tW,RW,vW,NW],"RLoser");
       },[MW,rW,sW,tW,vW,QW,NW]);break;
      case 3:
       var UW=NW.v[0];
       $M(KW,function(VW){
	var XW=goog.math.Long.fromBits(1,0).add(MW);
	var WW=XW.add(UW);
	$R(3,[WW,rW,sW,tW,VW,vW,NW],"RLoser");
       },[MW,rW,sW,tW,vW,NW,UW]);break;
      }
     },[KW,MW,rW,sW,tW,vW]);
    },[KW,wW,rW,sW,tW,vW],"$j1");
    $M(KW,function(YW){
     switch(YW.g){
     case 1:
      LW.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var ZW=YW.v[0];
      LW.J(ZW);break;
     case 3:
      var aX=YW.v[0];
      LW.J(aX);break;
     }
    },[KW,wW,rW,sW,tW,vW,LW]);
   },[wW,rW,sW,tW,vW]);break;
  }
 },[IU,KU,HU,JU,LU]);
},"at libraries/base/GHC/Event/PSQ.hs:368:1");
var $$GHCziEventziPSQ$r=$T(function(){
 $$GHCziCString_unpackCStringzh.J("rsingleLeft");
},"lvl13");
var $$GHCziEventziPSQ$s=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$r,$$GHCziEventziPSQ$l);
},"lvl14");
var $$GHCziEventziPSQ$t=$F(6,function(eX,fX,gX,hX,iX,jX){
 $M(jX,function(kX){
  switch(kX.g){
  case 1:
   $A($$GHCziEventziPSQ$s);break;
  case 2:
   var lX=kX.v[1],mX=kX.v[2],nX=kX.v[3],oX=kX.v[4],pX=kX.v[5],qX=kX.v[6];
   $b(function(){
    $M(hX,function(IX){
     switch(IX.g){
     case 1:
      $M(oX,function(JX){
       switch(JX.g){
       case 1:
	$R(3,[goog.math.Long.fromBits(1,0),lX,mX,nX,$$GHCziEventziPSQ_Start,iX,$$GHCziEventziPSQ_Start],"RLoser");break;
       case 2:
	var KX=JX.v[0];
	var LX=goog.math.Long.fromBits(1,0).add(KX);
	$R(3,[LX,lX,mX,nX,$$GHCziEventziPSQ_Start,iX,JX],"RLoser");break;
       case 3:
	var MX=JX.v[0];
	var NX=goog.math.Long.fromBits(1,0).add(MX);
	$R(3,[NX,lX,mX,nX,$$GHCziEventziPSQ_Start,iX,JX],"RLoser");break;
       }
      },[lX,mX,nX,iX,qX,eX,fX,gX,pX]);break;
     case 2:
      var OX=IX.v[0];
      $M(oX,function(PX){
       switch(PX.g){
       case 1:
	var QX=goog.math.Long.fromBits(1,0).add(OX);
	$R(3,[QX,lX,mX,nX,IX,iX,$$GHCziEventziPSQ_Start],"RLoser");break;
       case 2:
	var RX=PX.v[0];
	var TX=goog.math.Long.fromBits(1,0).add(OX);
	var SX=TX.add(RX);
	$R(3,[SX,lX,mX,nX,IX,iX,PX],"RLoser");break;
       case 3:
	var UX=PX.v[0];
	var WX=goog.math.Long.fromBits(1,0).add(OX);
	var VX=WX.add(UX);
	$R(3,[VX,lX,mX,nX,IX,iX,PX],"RLoser");break;
       }
      },[lX,mX,nX,iX,OX,IX,qX,eX,fX,gX,pX]);break;
     case 3:
      var XX=IX.v[0];
      $M(oX,function(YX){
       switch(YX.g){
       case 1:
	var ZX=goog.math.Long.fromBits(1,0).add(XX);
	$R(3,[ZX,lX,mX,nX,IX,iX,$$GHCziEventziPSQ_Start],"RLoser");break;
       case 2:
	var aY=YX.v[0];
	var cY=goog.math.Long.fromBits(1,0).add(XX);
	var bY=cY.add(aY);
	$R(3,[bY,lX,mX,nX,IX,iX,YX],"RLoser");break;
       case 3:
	var dY=YX.v[0];
	var fY=goog.math.Long.fromBits(1,0).add(XX);
	var eY=fY.add(dY);
	$R(3,[eY,lX,mX,nX,IX,iX,YX],"RLoser");break;
       }
      },[lX,mX,nX,iX,IX,XX,qX,eX,fX,gX,pX]);break;
     }
    },[oX,lX,mX,nX,iX,qX,eX,fX,gX,pX]);
   },[],function(rX){
    var sX=$f(1,function(tX){
     $M(qX,function(uX){
      switch(uX.g){
      case 1:
       $M(rX,function(vX){
	var wX=goog.math.Long.fromBits(1,0).add(tX);
	$R(3,[wX,eX,fX,gX,vX,pX,$$GHCziEventziPSQ_Start],"RLoser");
       },[tX,eX,fX,gX,pX]);break;
      case 2:
       var xX=uX.v[0];
       $M(rX,function(yX){
	var AX=goog.math.Long.fromBits(1,0).add(tX);
	var zX=AX.add(xX);
	$R(3,[zX,eX,fX,gX,yX,pX,uX],"RLoser");
       },[tX,eX,fX,gX,pX,xX,uX]);break;
      case 3:
       var BX=uX.v[0];
       $M(rX,function(CX){
	var EX=goog.math.Long.fromBits(1,0).add(tX);
	var DX=EX.add(BX);
	$R(3,[DX,eX,fX,gX,CX,pX,uX],"RLoser");
       },[tX,eX,fX,gX,pX,uX,BX]);break;
      }
     },[rX,tX,eX,fX,gX,pX]);
    },[rX,qX,eX,fX,gX,pX],"$j");
    $M(rX,function(FX){
     switch(FX.g){
     case 1:
      sX.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var GX=FX.v[0];
      sX.J(GX);break;
     case 3:
      var HX=FX.v[0];
      sX.J(HX);break;
     }
    },[rX,qX,eX,fX,gX,pX,sX]);
   },[qX,eX,fX,gX,pX]);break;
  case 3:
   var gY=kX.v[1],hY=kX.v[2],iY=kX.v[3],jY=kX.v[4],kY=kX.v[5],lY=kX.v[6];
   var mY=$f(1,function(nY){
    $M(jY,function(oY){
     switch(oY.g){
     case 1:
      $M(hX,function(pY){
       var qY=goog.math.Long.fromBits(1,0).add(nY);
       $R(3,[qY,eX,fX,gX,pY,iX,$$GHCziEventziPSQ_Start],"RLoser");
      },[iX,eX,fX,gX,nY]);break;
     case 2:
      var rY=oY.v[0];
      $M(hX,function(sY){
       var uY=goog.math.Long.fromBits(1,0).add(nY);
       var tY=uY.add(rY);
       $R(3,[tY,eX,fX,gX,sY,iX,oY],"RLoser");
      },[iX,eX,fX,gX,nY,rY,oY]);break;
     case 3:
      var vY=oY.v[0];
      $M(hX,function(wY){
       var yY=goog.math.Long.fromBits(1,0).add(nY);
       var xY=yY.add(vY);
       $R(3,[xY,eX,fX,gX,wY,iX,oY],"RLoser");
      },[iX,eX,fX,gX,nY,oY,vY]);break;
     }
    },[hX,iX,eX,fX,gX,nY]);
   },[hX,iX,eX,fX,gX,jY],"$j");
   $b(function(){
    $M(hX,function(QY){
     switch(QY.g){
     case 1:
      mY.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var RY=QY.v[0];
      mY.J(RY);break;
     case 3:
      var SY=QY.v[0];
      mY.J(SY);break;
     }
    },[mY,lY,gY,hY,iY,kY]);
   },[],function(zY){
    var AY=$f(1,function(BY){
     $M(lY,function(CY){
      switch(CY.g){
      case 1:
       $M(zY,function(DY){
	var EY=goog.math.Long.fromBits(1,0).add(BY);
	$R(3,[EY,gY,hY,iY,DY,kY,$$GHCziEventziPSQ_Start],"RLoser");
       },[BY,gY,hY,iY,kY]);break;
      case 2:
       var FY=CY.v[0];
       $M(zY,function(GY){
	var IY=goog.math.Long.fromBits(1,0).add(BY);
	var HY=IY.add(FY);
	$R(3,[HY,gY,hY,iY,GY,kY,CY],"RLoser");
       },[BY,gY,hY,iY,kY,FY,CY]);break;
      case 3:
       var JY=CY.v[0];
       $M(zY,function(KY){
	var MY=goog.math.Long.fromBits(1,0).add(BY);
	var LY=MY.add(JY);
	$R(3,[LY,gY,hY,iY,KY,kY,CY],"RLoser");
       },[BY,gY,hY,iY,kY,CY,JY]);break;
      }
     },[zY,BY,gY,hY,iY,kY]);
    },[zY,lY,gY,hY,iY,kY],"$j1");
    $M(zY,function(NY){
     switch(NY.g){
     case 1:
      AY.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var OY=NY.v[0];
      AY.J(OY);break;
     case 3:
      var PY=NY.v[0];
      AY.J(PY);break;
     }
    },[zY,lY,gY,hY,iY,kY,AY]);
   },[lY,gY,hY,iY,kY]);break;
  }
 },[hX,iX,eX,fX,gX]);
},"at libraries/base/GHC/Event/PSQ.hs:376:1");
var $$GHCziEventziPSQ$u=$T(function(){
 $$GHCziCString_unpackCStringzh.J("rsingleRight");
},"lvl15");
var $$GHCziEventziPSQ$v=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$u,$$GHCziEventziPSQ$l);
},"lvl16");
var $$GHCziEventziPSQ$w=$F(6,function(TY,UY,VY,WY,XY,YY){
 $M(WY,function(ZY){
  switch(ZY.g){
  case 1:
   $A($$GHCziEventziPSQ$v);break;
  case 2:
   var aZ=ZY.v[1],bZ=ZY.v[2],cZ=ZY.v[3],dZ=ZY.v[4],eZ=ZY.v[5],fZ=ZY.v[6];
   var gZ=$f(1,function(hZ){
    $M(fZ,function(iZ){
     switch(iZ.g){
     case 1:
      $M(YY,function(jZ){
       switch(jZ.g){
       case 1:
	var kZ=$d(3,[goog.math.Long.fromBits(1,0),TY,UY,VY,$$GHCziEventziPSQ_Start,XY,$$GHCziEventziPSQ_Start],"sat");
	var mZ=goog.math.Long.fromBits(1,0).add(hZ);
	var lZ=mZ.add(goog.math.Long.fromBits(1,0));
	$R(2,[lZ,aZ,bZ,cZ,dZ,eZ,kZ],"LLoser");break;
       case 2:
	var nZ=jZ.v[0];
	var pZ=goog.math.Long.fromBits(1,0).add(nZ);
	var oZ=$d(3,[pZ,TY,UY,VY,$$GHCziEventziPSQ_Start,XY,jZ],"sat");
	var rZ=goog.math.Long.fromBits(1,0).add(hZ);
	var qZ=rZ.add(pZ);
	$R(2,[qZ,aZ,bZ,cZ,dZ,eZ,oZ],"LLoser");break;
       case 3:
	var sZ=jZ.v[0];
	var uZ=goog.math.Long.fromBits(1,0).add(sZ);
	var tZ=$d(3,[uZ,TY,UY,VY,$$GHCziEventziPSQ_Start,XY,jZ],"sat");
	var wZ=goog.math.Long.fromBits(1,0).add(hZ);
	var vZ=wZ.add(uZ);
	$R(2,[vZ,aZ,bZ,cZ,dZ,eZ,tZ],"LLoser");break;
       }
      },[hZ,aZ,bZ,cZ,dZ,eZ,TY,UY,VY,XY]);break;
     case 2:
      var xZ=iZ.v[0];
      $M(YY,function(yZ){
       switch(yZ.g){
       case 1:
	var AZ=goog.math.Long.fromBits(1,0).add(xZ);
	var zZ=$d(3,[AZ,TY,UY,VY,iZ,XY,$$GHCziEventziPSQ_Start],"sat");
	var CZ=goog.math.Long.fromBits(1,0).add(hZ);
	var BZ=CZ.add(AZ);
	$R(2,[BZ,aZ,bZ,cZ,dZ,eZ,zZ],"LLoser");break;
       case 2:
	var DZ=yZ.v[0];
	var IZ=goog.math.Long.fromBits(1,0).add(xZ);
	var FZ=IZ.add(DZ);
	var EZ=$d(3,[FZ,TY,UY,VY,iZ,XY,yZ],"sat");
	var HZ=goog.math.Long.fromBits(1,0).add(hZ);
	var GZ=HZ.add(FZ);
	$R(2,[GZ,aZ,bZ,cZ,dZ,eZ,EZ],"LLoser");break;
       case 3:
	var JZ=yZ.v[0];
	var OZ=goog.math.Long.fromBits(1,0).add(xZ);
	var LZ=OZ.add(JZ);
	var KZ=$d(3,[LZ,TY,UY,VY,iZ,XY,yZ],"sat");
	var NZ=goog.math.Long.fromBits(1,0).add(hZ);
	var MZ=NZ.add(LZ);
	$R(2,[MZ,aZ,bZ,cZ,dZ,eZ,KZ],"LLoser");break;
       }
      },[hZ,aZ,bZ,cZ,dZ,eZ,TY,UY,VY,XY,xZ,iZ]);break;
     case 3:
      var PZ=iZ.v[0];
      $M(YY,function(QZ){
       switch(QZ.g){
       case 1:
	var SZ=goog.math.Long.fromBits(1,0).add(PZ);
	var RZ=$d(3,[SZ,TY,UY,VY,iZ,XY,$$GHCziEventziPSQ_Start],"sat");
	var UZ=goog.math.Long.fromBits(1,0).add(hZ);
	var TZ=UZ.add(SZ);
	$R(2,[TZ,aZ,bZ,cZ,dZ,eZ,RZ],"LLoser");break;
       case 2:
	var VZ=QZ.v[0];
	var a10=goog.math.Long.fromBits(1,0).add(PZ);
	var XZ=a10.add(VZ);
	var WZ=$d(3,[XZ,TY,UY,VY,iZ,XY,QZ],"sat");
	var ZZ=goog.math.Long.fromBits(1,0).add(hZ);
	var YZ=ZZ.add(XZ);
	$R(2,[YZ,aZ,bZ,cZ,dZ,eZ,WZ],"LLoser");break;
       case 3:
	var b10=QZ.v[0];
	var g10=goog.math.Long.fromBits(1,0).add(PZ);
	var d10=g10.add(b10);
	var c10=$d(3,[d10,TY,UY,VY,iZ,XY,QZ],"sat");
	var f10=goog.math.Long.fromBits(1,0).add(hZ);
	var e10=f10.add(d10);
	$R(2,[e10,aZ,bZ,cZ,dZ,eZ,c10],"LLoser");break;
       }
      },[hZ,aZ,bZ,cZ,dZ,eZ,TY,UY,VY,XY,iZ,PZ]);break;
     }
    },[YY,hZ,aZ,bZ,cZ,dZ,eZ,TY,UY,VY,XY]);
   },[fZ,YY,aZ,bZ,cZ,dZ,eZ,TY,UY,VY,XY],"$j");
   $M(dZ,function(h10){
    switch(h10.g){
    case 1:
     gZ.J(goog.math.Long.fromBits(0,0));break;
    case 2:
     var i10=h10.v[0];
     gZ.J(i10);break;
    case 3:
     var j10=h10.v[0];
     gZ.J(j10);break;
    }
   },[fZ,YY,aZ,bZ,cZ,dZ,eZ,TY,UY,VY,XY,gZ]);break;
  case 3:
   var k10=ZY.v[1],l10=ZY.v[2],m10=ZY.v[3],n10=ZY.v[4],o10=ZY.v[5],p10=ZY.v[6];
   var q10=UY<=l10?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(q10.g){
   case 1:
    var r10=$f(1,function(s10){
     $M(p10,function(t10){
      switch(t10.g){
      case 1:
       $M(YY,function(u10){
	switch(u10.g){
	case 1:
	 var v10=$d(3,[goog.math.Long.fromBits(1,0),TY,UY,VY,$$GHCziEventziPSQ_Start,XY,$$GHCziEventziPSQ_Start],"sat");
	 var x10=goog.math.Long.fromBits(1,0).add(s10);
	 var w10=x10.add(goog.math.Long.fromBits(1,0));
	 $R(3,[w10,k10,l10,m10,n10,o10,v10],"RLoser");break;
	case 2:
	 var y10=u10.v[0];
	 var A10=goog.math.Long.fromBits(1,0).add(y10);
	 var z10=$d(3,[A10,TY,UY,VY,$$GHCziEventziPSQ_Start,XY,u10],"sat");
	 var C10=goog.math.Long.fromBits(1,0).add(s10);
	 var B10=C10.add(A10);
	 $R(3,[B10,k10,l10,m10,n10,o10,z10],"RLoser");break;
	case 3:
	 var D10=u10.v[0];
	 var F10=goog.math.Long.fromBits(1,0).add(D10);
	 var E10=$d(3,[F10,TY,UY,VY,$$GHCziEventziPSQ_Start,XY,u10],"sat");
	 var H10=goog.math.Long.fromBits(1,0).add(s10);
	 var G10=H10.add(F10);
	 $R(3,[G10,k10,l10,m10,n10,o10,E10],"RLoser");break;
	}
       },[TY,UY,VY,XY,l10,s10,k10,m10,n10,o10]);break;
      case 2:
       var I10=t10.v[0];
       $M(YY,function(J10){
	switch(J10.g){
	case 1:
	 var L10=goog.math.Long.fromBits(1,0).add(I10);
	 var K10=$d(3,[L10,TY,UY,VY,t10,XY,$$GHCziEventziPSQ_Start],"sat");
	 var N10=goog.math.Long.fromBits(1,0).add(s10);
	 var M10=N10.add(L10);
	 $R(3,[M10,k10,l10,m10,n10,o10,K10],"RLoser");break;
	case 2:
	 var O10=J10.v[0];
	 var T10=goog.math.Long.fromBits(1,0).add(I10);
	 var Q10=T10.add(O10);
	 var P10=$d(3,[Q10,TY,UY,VY,t10,XY,J10],"sat");
	 var S10=goog.math.Long.fromBits(1,0).add(s10);
	 var R10=S10.add(Q10);
	 $R(3,[R10,k10,l10,m10,n10,o10,P10],"RLoser");break;
	case 3:
	 var U10=J10.v[0];
	 var Z10=goog.math.Long.fromBits(1,0).add(I10);
	 var W10=Z10.add(U10);
	 var V10=$d(3,[W10,TY,UY,VY,t10,XY,J10],"sat");
	 var Y10=goog.math.Long.fromBits(1,0).add(s10);
	 var X10=Y10.add(W10);
	 $R(3,[X10,k10,l10,m10,n10,o10,V10],"RLoser");break;
	}
       },[TY,UY,VY,XY,l10,s10,k10,m10,n10,o10,I10,t10]);break;
      case 3:
       var a11=t10.v[0];
       $M(YY,function(b11){
	switch(b11.g){
	case 1:
	 var d11=goog.math.Long.fromBits(1,0).add(a11);
	 var c11=$d(3,[d11,TY,UY,VY,t10,XY,$$GHCziEventziPSQ_Start],"sat");
	 var f11=goog.math.Long.fromBits(1,0).add(s10);
	 var e11=f11.add(d11);
	 $R(3,[e11,k10,l10,m10,n10,o10,c11],"RLoser");break;
	case 2:
	 var g11=b11.v[0];
	 var l11=goog.math.Long.fromBits(1,0).add(a11);
	 var i11=l11.add(g11);
	 var h11=$d(3,[i11,TY,UY,VY,t10,XY,b11],"sat");
	 var k11=goog.math.Long.fromBits(1,0).add(s10);
	 var j11=k11.add(i11);
	 $R(3,[j11,k10,l10,m10,n10,o10,h11],"RLoser");break;
	case 3:
	 var m11=b11.v[0];
	 var r11=goog.math.Long.fromBits(1,0).add(a11);
	 var o11=r11.add(m11);
	 var n11=$d(3,[o11,TY,UY,VY,t10,XY,b11],"sat");
	 var q11=goog.math.Long.fromBits(1,0).add(s10);
	 var p11=q11.add(o11);
	 $R(3,[p11,k10,l10,m10,n10,o10,n11],"RLoser");break;
	}
       },[TY,UY,VY,XY,l10,s10,k10,m10,n10,o10,t10,a11]);break;
      }
     },[YY,TY,UY,VY,XY,l10,s10,k10,m10,n10,o10]);
    },[YY,TY,UY,VY,XY,l10,p10,k10,m10,n10,o10],"$j");
    $M(n10,function(s11){
     switch(s11.g){
     case 1:
      r10.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var t11=s11.v[0];
      r10.J(t11);break;
     case 3:
      var u11=s11.v[0];
      r10.J(u11);break;
     }
    },[YY,TY,UY,VY,XY,l10,p10,k10,m10,n10,o10,r10]);break;
   case 2:
    var v11=$f(1,function(w11){
     $M(p10,function(x11){
      switch(x11.g){
      case 1:
       $M(YY,function(y11){
	switch(y11.g){
	case 1:
	 var z11=$d(2,[goog.math.Long.fromBits(1,0),k10,l10,m10,$$GHCziEventziPSQ_Start,XY,$$GHCziEventziPSQ_Start],"sat");
	 var B11=goog.math.Long.fromBits(1,0).add(w11);
	 var A11=B11.add(goog.math.Long.fromBits(1,0));
	 $R(3,[A11,TY,UY,VY,n10,o10,z11],"RLoser");break;
	case 2:
	 var C11=y11.v[0];
	 var E11=goog.math.Long.fromBits(1,0).add(C11);
	 var D11=$d(2,[E11,k10,l10,m10,$$GHCziEventziPSQ_Start,XY,y11],"sat");
	 var G11=goog.math.Long.fromBits(1,0).add(w11);
	 var F11=G11.add(E11);
	 $R(3,[F11,TY,UY,VY,n10,o10,D11],"RLoser");break;
	case 3:
	 var H11=y11.v[0];
	 var J11=goog.math.Long.fromBits(1,0).add(H11);
	 var I11=$d(2,[J11,k10,l10,m10,$$GHCziEventziPSQ_Start,XY,y11],"sat");
	 var L11=goog.math.Long.fromBits(1,0).add(w11);
	 var K11=L11.add(J11);
	 $R(3,[K11,TY,UY,VY,n10,o10,I11],"RLoser");break;
	}
       },[TY,UY,VY,XY,l10,k10,m10,n10,o10,w11]);break;
      case 2:
       var M11=x11.v[0];
       $M(YY,function(N11){
	switch(N11.g){
	case 1:
	 var P11=goog.math.Long.fromBits(1,0).add(M11);
	 var O11=$d(2,[P11,k10,l10,m10,x11,XY,$$GHCziEventziPSQ_Start],"sat");
	 var R11=goog.math.Long.fromBits(1,0).add(w11);
	 var Q11=R11.add(P11);
	 $R(3,[Q11,TY,UY,VY,n10,o10,O11],"RLoser");break;
	case 2:
	 var S11=N11.v[0];
	 var X11=goog.math.Long.fromBits(1,0).add(M11);
	 var U11=X11.add(S11);
	 var T11=$d(2,[U11,k10,l10,m10,x11,XY,N11],"sat");
	 var W11=goog.math.Long.fromBits(1,0).add(w11);
	 var V11=W11.add(U11);
	 $R(3,[V11,TY,UY,VY,n10,o10,T11],"RLoser");break;
	case 3:
	 var Y11=N11.v[0];
	 var d12=goog.math.Long.fromBits(1,0).add(M11);
	 var a12=d12.add(Y11);
	 var Z11=$d(2,[a12,k10,l10,m10,x11,XY,N11],"sat");
	 var c12=goog.math.Long.fromBits(1,0).add(w11);
	 var b12=c12.add(a12);
	 $R(3,[b12,TY,UY,VY,n10,o10,Z11],"RLoser");break;
	}
       },[TY,UY,VY,XY,l10,k10,m10,n10,o10,w11,M11,x11]);break;
      case 3:
       var e12=x11.v[0];
       $M(YY,function(f12){
	switch(f12.g){
	case 1:
	 var h12=goog.math.Long.fromBits(1,0).add(e12);
	 var g12=$d(2,[h12,k10,l10,m10,x11,XY,$$GHCziEventziPSQ_Start],"sat");
	 var j12=goog.math.Long.fromBits(1,0).add(w11);
	 var i12=j12.add(h12);
	 $R(3,[i12,TY,UY,VY,n10,o10,g12],"RLoser");break;
	case 2:
	 var k12=f12.v[0];
	 var p12=goog.math.Long.fromBits(1,0).add(e12);
	 var m12=p12.add(k12);
	 var l12=$d(2,[m12,k10,l10,m10,x11,XY,f12],"sat");
	 var o12=goog.math.Long.fromBits(1,0).add(w11);
	 var n12=o12.add(m12);
	 $R(3,[n12,TY,UY,VY,n10,o10,l12],"RLoser");break;
	case 3:
	 var q12=f12.v[0];
	 var v12=goog.math.Long.fromBits(1,0).add(e12);
	 var s12=v12.add(q12);
	 var r12=$d(2,[s12,k10,l10,m10,x11,XY,f12],"sat");
	 var u12=goog.math.Long.fromBits(1,0).add(w11);
	 var t12=u12.add(s12);
	 $R(3,[t12,TY,UY,VY,n10,o10,r12],"RLoser");break;
	}
       },[TY,UY,VY,XY,l10,k10,m10,n10,o10,w11,x11,e12]);break;
      }
     },[YY,TY,UY,VY,XY,l10,k10,m10,n10,o10,w11]);
    },[YY,TY,UY,VY,XY,l10,p10,k10,m10,n10,o10],"$j");
    $M(n10,function(w12){
     switch(w12.g){
     case 1:
      v11.J(goog.math.Long.fromBits(0,0));break;
     case 2:
      var x12=w12.v[0];
      v11.J(x12);break;
     case 3:
      var y12=w12.v[0];
      v11.J(y12);break;
     }
    },[YY,TY,UY,VY,XY,l10,p10,k10,m10,n10,o10,v11]);break;
   }break;
  }
 },[YY,TY,UY,VY,XY]);
},"at libraries/base/GHC/Event/PSQ.hs:390:1");
var $$GHCziEventziPSQ$x=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ldoubleRight");
},"lvl17");
var $$GHCziEventziPSQ$y=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$x,$$GHCziEventziPSQ$l);
},"lvl18");
var $$GHCziEventziPSQ$z=$T(function(){
 $$GHCziCString_unpackCStringzh.J("ldoubleLeft");
},"lvl19");
var $$GHCziEventziPSQ$A=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$z,$$GHCziEventziPSQ$l);
},"lvl20");
var $$GHCziEventziPSQ$B=$T(function(){
 $$GHCziCString_unpackCStringzh.J("rdoubleRight");
},"lvl21");
var $$GHCziEventziPSQ$C=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$B,$$GHCziEventziPSQ$l);
},"lvl22");
var $$GHCziEventziPSQ$D=$T(function(){
 $$GHCziCString_unpackCStringzh.J("rdoubleLeft");
},"lvl23");
var $$GHCziEventziPSQ$E=$T(function(){
 $$GHCziEventziPSQ$e.J($$GHCziEventziPSQ$D,$$GHCziEventziPSQ$l);
},"lvl24");
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
var $$GHCziEventziThread_threadDelay3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at libraries/base/GHC/Event/Thread.hs:40:3-10");
},[],"in `base:GHC.Event.Thread'");
var $$GHCziEventziThread_threadDelay2=$f(4,function(f4,g4,h4,i4){
 var j4=$f(1,function(b){
  $$GHCziEventziManager_unregisterTimeout1.J(g4,f4,b);
 },[g4,f4],"sat");
 $$GHCziIO_finally2.J(j4,h4,i4);
},[],"in `base:GHC.Event.Thread'");
var $$GHCziEventziThread_threadDelay1=$f(2,function(k4,l4){
 var m4=$hs_getMaskingStatezh(l4);
 var n4=m4[0],o4=m4[1];
 var p4=$f(1,function(q4){
  $M($$GHCziEventziThread_eventManager,function(r4){
   var s4=r4.v[0];
   var t4=$hs_readMutVarzh(s4,q4);
   var u4=t4[0],v4=t4[1];
   $M(v4,function(w4){
    switch(w4.g){
    case 1:
     $$GHCziIO_failIO.J($$GHCziEventziThread_threadDelay3,u4);break;
    case 2:
     var x4=w4.v[0];
     var y4=$hs_newMVarzh(u4);
     var z4=y4[0],A4=y4[1];
     var B4=$f(1,function(C4){
      $b($hs_putMVarzh,[A4,$$GHCziTuple_Z0T,C4],function(D4){
       $r([D4,$$GHCziTuple_Z0T]);
      },[]);
     },[A4],"sat");
     $$GHCziEventziManager_registerTimeout1.C([x4,k4,B4,z4],function(E4){
      var F4=E4[0],G4=E4[1];
      var H4=$f(2,function(b1,b){
       $$GHCziEventziThread_threadDelay2.J(G4,x4,b1,b);
      },[x4,G4],"sat");
      var I4=$f(1,function(J4){
       $k($hs_takeMVarzh,[A4,J4]);
      },[A4],"sat");
      $k($hs_catchzh,[I4,H4,F4]);
     },[x4,A4]);break;
    }
   },[u4,k4]);
  },[q4,k4]);
 },[k4],"a6");
 $M(o4,function(K4){
  switch(K4.toString()){
  case "0":
   $k($hs_maskAsyncExceptionszh,[p4,n4]);break;
  default:
   p4.J(n4);
  }
 },[p4,n4]);
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
var $$GHCziException_zdp2Exception=$f(1,function(d){
 $M(d,function(e){
  var f=e.v[1];
  $A(f);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:140:31");
var $$GHCziException_Overflow=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/Exception.lhs:180:5");
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
      var y4=$d(1,[q4,x4,$$GHCziIOziBuffer_ReadBuffer,v4,goog.math.Long.fromBits(0,0),v4],"from");
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
	  var T4=B4.multiply(goog.math.Long.fromBits(2,0));
	  var S4=A4.add(goog.math.Long.fromBits(1,0));
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
      var X4=v4.add(goog.math.Long.fromBits(1,0));
      z4.J(goog.math.Long.fromBits(0,0),X4,s4);
     },[f4,t4,q4,k4,s4]);
    },[f4,o4,m4,k4]);
   },[f4,k4],"sat");
   $$ForeignziMarshalziArray_withArrayLen.J($$ForeignziStorable_zdfStorableChar,X3,l4);
  },[f4,X3],"thing");
  $M(e4,function(Y4){
   switch(Y4.toString()){
   case "0":
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
var $$GHCziForeign$d=$F(7,function(Xf,Yf,Zf,ag,bg,cg,dg){
 var eg=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,dg);
 var fg=eg[0],gg=eg[1];
 $M(Xf,function(hg){
  var ig=hg.v[0],jg=hg.v[1];
  var kg=$t(function(){
   $M(bg,function(lg){
    var mg=lg.v[0];
    var ng=$d(1,[gg],"sat");
    var og=$d(1,[ng],"sat");
    $R(1,[ag,og,$$GHCziIOziBuffer_WriteBuffer,mg,goog.math.Long.fromBits(0,0),goog.math.Long.fromBits(0,0)],"Buffer");
   },[ag,gg]);
  },[bg,ag,gg],"sat");
  ig.C([Zf,kg,fg],function(pg){
   var qg=pg[0],rg=pg[1];
   $M(rg,function(sg){
    var tg=sg.v[0],ug=sg.v[1],vg=sg.v[2];
    $M(ug,function(wg){
     var xg=wg.v[4],yg=wg.v[5];
     var zg=xg.equals(yg)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(zg.g){
     case 1:
      $M(tg,function(Ag){
       switch(Ag.g){
       case 2:
	$r([qg,$$DataziMaybe_Nothing]);break;
       default:
	jg.C([wg,vg,qg],function(Bg){
	 var Cg=Bg[0],Dg=Bg[1];
	 $M(Dg,function(Eg){
	  var Fg=Eg.v[0],Gg=Eg.v[1];
	  var Hg=$f(4,function(Ig,Jg,Kg,Lg){
	   ig.C([Jg,Kg,Lg],function(Mg){
	    var Ng=Mg[0],Og=Mg[1];
	    $M(Og,function(Pg){
	     var Qg=Pg.v[0],Rg=Pg.v[1],Sg=Pg.v[2];
	     $M(Rg,function(Tg){
	      var Ug=Tg.v[4],Vg=Tg.v[5];
	      var Wg=Ug.equals(Vg)?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Wg.g){
	      case 1:
	       $M(Qg,function(Xg){
		switch(Xg.g){
		case 2:
		 $r([Ng,$$DataziMaybe_Nothing]);break;
		default:
		 jg.C([Tg,Sg,Ng],function(Yg){
		  var Zg=Yg[0],ah=Yg[1];
		  $M(ah,function(bh){
		   var ch=bh.v[0],dh=bh.v[1];
		   var eh=Ig.add(goog.math.Long.fromBits(1,0));
		   Hg.J(eh,ch,dh,Zg);
		  },[ig,jg,Ig,Hg,Zg,Yf,cg]);
		 },[ig,jg,Ig,Hg,Yf,cg]);
		}
	       },[ig,jg,Tg,Sg,Ng,Ig,Hg,Yf,cg]);break;
	      case 2:
	       var fh=$f(1,function(gh){
		$M(Sg,function(hh){
		 var ih=hh.v[0],jh=hh.v[1],kh=hh.v[4],lh=hh.v[5];
		 $M(Yf,function(mh){
		  switch(mh.g){
		  case 1:
		   var oh=lh.subtract(kh);
		   var nh=$d(1,[oh],"sat");
		   var ph=$d(1,[ih],"sat");
		   var qh=$d(1,[ph,nh],"sat");
		   cg.C([qh,gh],function(rh){
		    var sh=rh[0],th=rh[1];
		    var vh=$hs_touchzh(jh,sh);
		    var uh=$d(2,[th],"sat");
		    $r([vh,uh]);
		   },[jh]);break;
		  case 2:
		   var Fh=$hs_writeWord8OffAddrzh(ih,lh,goog.math.Long.fromBits(0,0),gh);
		   var xh=lh.subtract(kh);
		   var wh=$d(1,[xh],"sat");
		   var yh=$d(1,[ih],"sat");
		   var zh=$d(1,[yh,wh],"sat");
		   cg.C([zh,Fh],function(Ah){
		    var Bh=Ah[0],Ch=Ah[1];
		    var Eh=$hs_touchzh(jh,Bh);
		    var Dh=$d(2,[Ch],"sat");
		    $r([Eh,Dh]);
		   },[jh]);break;
		  }
		 },[ih,lh,kh,cg,gh,jh]);
		},[Yf,cg,gh]);
	       },[Sg,Yf,cg],"$wa3");
	       $M(Yf,function(Gh){
		switch(Gh.g){
		case 1:
		 fh.J(Ng);break;
		case 2:
		 $M(Sg,function(Hh){
		  var Ih=Hh.v[3],Jh=Hh.v[5];
		  var Kh=Ih.subtract(Jh);
		  switch(Kh.toString()){
		  case "0":
		   $r([Ng,$$DataziMaybe_Nothing]);break;
		  default:
		   fh.J(Ng);
		  }
		 },[Sg,Ng,Yf,cg,fh]);break;
		}
	       },[Sg,Ng,Yf,cg,fh]);break;
	      }
	     },[ig,jg,Qg,Sg,Ng,Ig,Hg,Yf,cg]);
	    },[ig,jg,Ng,Ig,Hg,Yf,cg]);
	   },[ig,jg,Ig,Hg,Yf,cg]);
	  },[ig,jg,Yf,cg],"$s$wa");
	  Hg.J(goog.math.Long.fromBits(1,0),Fg,Gg,Cg);
	 },[ig,jg,Yf,cg,Cg]);
	},[ig,jg,Yf,cg]);
       }
      },[ig,wg,vg,qg,jg,Yf,cg]);break;
     case 2:
      var Lh=$f(1,function(Mh){
       $M(vg,function(Nh){
	var Oh=Nh.v[0],Ph=Nh.v[1],Qh=Nh.v[4],Rh=Nh.v[5];
	$M(Yf,function(Sh){
	 switch(Sh.g){
	 case 1:
	  var Uh=Rh.subtract(Qh);
	  var Th=$d(1,[Uh],"sat");
	  var Vh=$d(1,[Oh],"sat");
	  var Wh=$d(1,[Vh,Th],"sat");
	  cg.C([Wh,Mh],function(Xh){
	   var Yh=Xh[0],Zh=Xh[1];
	   var bi=$hs_touchzh(Ph,Yh);
	   var ai=$d(2,[Zh],"sat");
	   $r([bi,ai]);
	  },[Ph]);break;
	 case 2:
	  var li=$hs_writeWord8OffAddrzh(Oh,Rh,goog.math.Long.fromBits(0,0),Mh);
	  var di=Rh.subtract(Qh);
	  var ci=$d(1,[di],"sat");
	  var ei=$d(1,[Oh],"sat");
	  var fi=$d(1,[ei,ci],"sat");
	  cg.C([fi,li],function(gi){
	   var hi=gi[0],ii=gi[1];
	   var ki=$hs_touchzh(Ph,hi);
	   var ji=$d(2,[ii],"sat");
	   $r([ki,ji]);
	  },[Ph]);break;
	 }
	},[cg,Oh,Rh,Qh,Mh,Ph]);
       },[Yf,cg,Mh]);
      },[vg,Yf,cg],"$wa3");
      $M(Yf,function(mi){
       switch(mi.g){
       case 1:
	Lh.J(qg);break;
       case 2:
	$M(vg,function(ni){
	 var oi=ni.v[3],pi=ni.v[5];
	 var qi=oi.subtract(pi);
	 switch(qi.toString()){
	 case "0":
	  $r([qg,$$DataziMaybe_Nothing]);break;
	 default:
	  Lh.J(qg);
	 }
	},[vg,qg,Yf,cg,Lh]);break;
       }
      },[vg,qg,Yf,cg,Lh]);break;
     }
    },[ig,tg,vg,qg,jg,Yf,cg]);
   },[ig,qg,jg,Yf,cg]);
  },[ig,jg,Yf,cg]);
 },[Zf,bg,ag,gg,fg,Yf,cg]);
},"$wa2");
var $$GHCziForeign$e=$F(3,function(ri,si,ti){
 var ui=$t(function(){
  $$GHCziIOziEncodingziTypes_close.J(ri);
 },[ri],"sat");
 $$GHCziIO_bracket2.J(ui,si,ti);
},"lvl1");
var $$GHCziForeignPtr_mallocPlainForeignPtrBytes2=$t(function(){
 $$GHCziErr_error.J($$GHCziForeignPtr$a);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("mallocPlainForeignPtrBytes: size must be >= 0");
},"lvl");
var $$GHCziIO_finally2=$f(3,function(q1,r1,s1){
 q1.C([s1],function(t1){
  var u1=t1[0];
  $r($hs_raiseIOzh(r1,u1));
 },[r1]);
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
var $$GHCziIOziEncodingziFailure_ErrorOnCodingFailure=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/IO/Encoding/Failure.hs:42:5");
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
var $$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnMVarzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("BlockedIndefinitelyOnMVar");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnMVarzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(3902241243,303123363),goog.math.Long.fromBits(2363891371,2336161890),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnMVarzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnMVar1=$D(1,function(){
 $r([goog.math.Long.fromBits(3902241243,303123363),goog.math.Long.fromBits(2363891371,2336161890),$$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnMVarzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnMVarzuzdctypeOf=$f(1,function(Y9){
 $A($$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnMVar1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnSTMzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("BlockedIndefinitelyOnSTM");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnSTMzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(2085292455,4174338514),goog.math.Long.fromBits(2226117263,876458932),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnSTMzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnSTM1=$D(1,function(){
 $r([goog.math.Long.fromBits(2085292455,4174338514),goog.math.Long.fromBits(2226117263,876458932),$$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnSTMzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnSTMzuzdctypeOf=$f(1,function(ia){
 $A($$GHCziIOziException_zdfTypeableBlockedIndefinitelyOnSTM1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableDeadlockzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Deadlock");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableDeadlockzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(51525854,1528534511),goog.math.Long.fromBits(2498035378,3076107346),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableDeadlockzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableDeadlock1=$D(1,function(){
 $r([goog.math.Long.fromBits(51525854,1528534511),goog.math.Long.fromBits(2498035378,3076107346),$$GHCziIOziException_zdfTypeableDeadlockzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableDeadlockzuzdctypeOf=$f(1,function(sa){
 $A($$GHCziIOziException_zdfTypeableDeadlock1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableAsyncExceptionzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("AsyncException");
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableAsyncExceptionzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(2363394409,315339024),goog.math.Long.fromBits(2156861182,4256135785),$$GHCziIOziException_zdfTypeableArrayExceptionzuds,$$GHCziIOziException_zdfTypeableArrayExceptionzuds1,$$GHCziIOziException_zdfTypeableAsyncExceptionzuds2]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableAsyncException1=$D(1,function(){
 $r([goog.math.Long.fromBits(2363394409,315339024),goog.math.Long.fromBits(2156861182,4256135785),$$GHCziIOziException_zdfTypeableAsyncExceptionzuwild,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_zdfTypeableAsyncExceptionzuzdctypeOf=$f(1,function(Ma){
 $A($$GHCziIOziException_zdfTypeableAsyncException1);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_ResourceExhausted=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:233:5");
var $$GHCziIOziException_EOF=$D(5,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:234:5");
var $$GHCziIOziException_IllegalOperation=$D(6,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:235:5");
var $$GHCziIOziException_UnsupportedOperation=$D(16,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:246:5");
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
var $$GHCziIOziHandle_hFlush1=$f(2,function(N,O){
 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandle_hFlush2,N,$$GHCziIOziHandleziInternals_flushWriteBuffer1,O);
},[],"in `base:GHC.IO.Handle'");
var $$GHCziIOziHandle_hFlush=$f(2,function(w,x){
 $$GHCziIOziHandle_hFlush1.J(w,x);
},[],"at libraries/base/GHC/IO/Handle.hs:293:1");
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
var $$GHCziList_any=$f(2,function(l3,m3){
 $M(m3,function(n3){
  switch(n3.g){
  case 1:
   $R(1,[],"False");break;
  case 2:
   var o3=n3.v[0],p3=n3.v[1];
   l3.C([o3],function(q3){
    switch(q3.g){
    case 1:
     $$GHCziList_any.J(l3,p3);break;
    case 2:
     $R(2,[],"True");break;
    }
   },[l3,p3]);break;
  }
 },[l3]);
},[],"at libraries/base/GHC/List.lhs:523:1");
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
var $$GHCziNum_zdfNumIntzuzdcfromInteger=$f(1,function(Z){
 $$GHCziIntegerziType_integerToInt.C([Z],function(a1){
  $R(1,[a1],"I#");
 },[]);
},[],"at libraries/base/GHC/Num.lhs:60:5");
var $$GHCziNum_zdfNumInt3=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Num'");
var $$GHCziNum_zdfNumInt2=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Num'");
var $$GHCziNum_zdfNumInt1=$D(1,function(){
 $r([goog.math.Long.fromBits(4294967295,4294967295)]);
},"in `base:GHC.Num'");
var $$GHCziNum_zdfNumIntzuzdcsignum=$f(1,function(b1){
 $M(b1,function(c1){
  var d1=c1.v[0];
  var e1=d1.lessThan(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(e1.g){
  case 1:
   $M(d1,function(f1){
    switch(f1.toString()){
    case "0":
     $A($$GHCziNum_zdfNumInt2);break;
    default:
     $A($$GHCziNum_zdfNumInt3);
    }
   },[]);break;
  case 2:
   $A($$GHCziNum_zdfNumInt1);break;
  }
 },[]);
},[],"at libraries/base/GHC/Num.lhs:55:5");
var $$GHCziNum_zdfNumIntzuzdcabs=$f(1,function(g1){
 $M(g1,function(h1){
  var i1=h1.v[0];
  var j1=i1.greaterThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(j1.g){
  case 1:
   var k1=i1.negate();
   $R(1,[k1],"I#");break;
  case 2:
   $A(h1);break;
  }
 },[]);
},[],"at libraries/base/GHC/Num.lhs:47:5");
var $$GHCziNum_zdfNumInt=$D(1,function(){
 $r([$$GHCziBase_plusInt,$$GHCziBase_timesInt,$$GHCziBase_minusInt,$$GHCziBase_negateInt,$$GHCziNum_zdfNumIntzuzdcabs,$$GHCziNum_zdfNumIntzuzdcsignum,$$GHCziNum_zdfNumIntzuzdcfromInteger]);
},"at libraries/base/GHC/Num.lhs:85:11");
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
var $$GHCziRead_zdfReadInteger5=$f(2,function(s6,t6){
 var u6=$t(function(){
  var v6=$f(1,function(w6){
   var x6=$t(function(){
    $$GHCziIntegerziType_negateInteger.J(w6);
   },[w6],"sat");
   t6.J(x6);
  },[t6],"lvl40");
  var y6=$f(1,function(z6){
   $$GHCziRead$G.J(z6,s6,v6);
  },[v6,s6],"sat");
  $$TextziReadziLex_lexzq1.J(y6);
 },[t6,s6],"lvl39");
 var A6=$t(function(){
  $$GHCziRead_zdwa3.J($$GHCziRead_zdfReadInteger5,t6);
 },[t6],"sat");
 var B6=$f(1,function(C6){
  $M(C6,function(D6){
   switch(D6.g){
   case 3:
    var E6=D6.v[0];
    $M(E6,function(F6){
     switch(F6.g){
     case 1:
      $$GHCziRead$G.J(D6,s6,t6);break;
     case 2:
      var G6=F6.v[0],H6=F6.v[1];
      $M(G6,function(I6){
       var J6=I6.v[0];
       $M(J6,function(K6){
	switch(K6.toString()){
	case "-":
	 $M(H6,function(L6){
	  switch(L6.g){
	  case 1:
	   $A(u6);break;
	  case 2:
	   $$GHCziRead$G.J(D6,s6,t6);break;
	  }
	 },[t6,s6,u6,D6]);break;
	default:
	 $$GHCziRead$G.J(D6,s6,t6);
	}
       },[t6,s6,u6,D6,H6]);
      },[t6,s6,u6,D6,H6]);break;
     }
    },[t6,s6,u6,D6]);break;
   default:
    $$GHCziRead$G.J(D6,s6,t6);
   }
  },[t6,s6,u6]);
 },[t6,s6,u6],"sat");
 $$TextziReadziLex_lexzq1.C([B6],function(M6){
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(M6,A6);
 },[A6]);
},[],"in `base:GHC.Read'");
var $$GHCziRead$g=$F(2,function(WK,XK){
 $R(3,[],"Fail");
},"lvl3");
var $$GHCziRead$h=$F(2,function(n,o){
 $$GHCziRead$g.J(n,o);
},"lvl4");
var $$GHCziRead$G=$F(1,function(uL){
 $M(uL,function(vL){
  switch(vL.g){
  case 4:
   var wL=vL.v[0];
   $M(wL,function(xL){
    switch(xL.g){
    case 1:
     var yL=xL.v[0],zL=xL.v[1];
     var AL=$t(function(){
      var BL=$t(function(){
       $M(yL,function(CL){
	var DL=CL.v[0];
	$$GHCziIntegerziType_smallInteger.J(DL);
       },[]);
      },[yL],"sat");
      $$TextziReadziLex_numberToIntegerzuzdsval.J(BL,$$TextziReadziLex_numberToInteger2,zL);
     },[yL,zL],"i");
     var EL=$f(2,function(FL,GL){
      GL.J(AL);
     },[AL],"sat");
     $A(EL);break;
    case 2:
     var HL=xL.v[0],IL=xL.v[1],JL=xL.v[2];
     $M(IL,function(KL){
      switch(KL.g){
      case 1:
       $M(JL,function(LL){
	switch(LL.g){
	case 1:
	 var ML=$t(function(){
	  $$TextziReadziLex_numberToIntegerzuzdsval.J($$TextziReadziLex_numberToInteger1,$$TextziReadziLex_numberToInteger2,HL);
	 },[HL],"i");
	 var NL=$f(2,function(OL,PL){
	  PL.J(ML);
	 },[ML],"sat");
	 $A(NL);break;
	case 2:
	 $A($$GHCziRead$g);break;
	}
       },[HL]);break;
      case 2:
       $A($$GHCziRead$g);break;
      }
     },[JL,HL]);break;
    }
   },[]);break;
  default:
   $A($$GHCziRead$h);
  }
 },[]);
},"at libraries/base/GHC/Read.lhs:479:1");
var $$GHCziReal_zdfIntegralInt1=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Real'");
var $$GHCziReal_zdfIntegralIntzuzdctoInteger=$f(1,function(J2){
 $M(J2,function(K2){
  var L2=K2.v[0];
  $$GHCziIntegerziType_smallInteger.J(L2);
 },[]);
},[],"at libraries/base/GHC/Real.lhs:139:5");
var $$GHCziReal_zdfRealIntzuzdctoRational=$f(1,function(M2){
 $M(M2,function(N2){
  var O2=N2.v[0];
  $$GHCziIntegerziType_smallInteger.C([O2],function(P2){
   $R(1,[P2,$$GHCziReal_zdfEnumRatio1],":%");
  },[]);
 },[]);
},[],"at libraries/base/GHC/Real.lhs:116:5");
var $$GHCziReal_zdfRealInt=$D(1,function(){
 $r([$$GHCziNum_zdfNumInt,$$GHCziClasses_zdfOrdInt,$$GHCziReal_zdfRealIntzuzdctoRational]);
},"at libraries/base/GHC/Real.lhs:245:11");
var $$GHCziReal_zdfIntegralIntzuzdcquotRem=$f(2,function(l3,m3){
 $M(l3,function(n3){
  var o3=n3.v[0];
  $M(m3,function(p3){
   var q3=p3.v[0];
   $M(q3,function(r3){
    switch(r3.toString()){
    case "-1":
     $M(o3,function(w3){
      switch(w3.toString()){
      case "-9223372036854775808":
       $A($$GHCziReal$b);break;
      default:
       var y3=$hs_remIntzh(w3,goog.math.Long.fromBits(4294967295,4294967295));
       var x3=$d(1,[y3],"sat");
       var A3=$hs_quotIntzh(w3,goog.math.Long.fromBits(4294967295,4294967295));
       var z3=$d(1,[A3],"sat");
       $R(1,[z3,x3],"(,)");
      }
     },[]);break;
    case "0":
     $A($$GHCziErr_divZZeroError);break;
    default:
     var s3=$t(function(){
      var t3=$hs_remIntzh(o3,r3);
      $R(1,[t3],"I#");
     },[o3,r3],"sat");
     var u3=$t(function(){
      var v3=$hs_quotIntzh(o3,r3);
      $R(1,[v3],"I#");
     },[o3,r3],"sat");
     $R(1,[u3,s3],"(,)");
    }
   },[o3]);
  },[o3]);
 },[m3]);
},[],"at libraries/base/GHC/Real.lhs:135:5");
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
var $$GHCziReal$b=$D(1,function(){
 $r([$$GHCziErr_overflowError,$$GHCziReal_zdfIntegralInt1]);
},"lvl1");
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
var $$GHCziWord_zdfBitsWord8zuzdcfromInteger=$f(1,function(n3){
 $$GHCziIntegerziType_integerToWord.C([n3],function(p3){
  var o3=$hs_narrow8Wordzh(p3);
  $R(1,[o3],"W8#");
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdcabs=$f(1,function(q3){
 $A(q3);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdcnegate=$f(1,function(r3){
 $M(r3,function(s3){
  var t3=s3.v[0];
  var x3=$hs_word2Intzh(t3);
  var w3=x3.negate();
  var v3=$hs_int2Wordzh(w3);
  var u3=$hs_narrow8Wordzh(v3);
  $R(1,[u3],"W8#");
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdczm=$f(2,function(y3,z3){
 $M(y3,function(A3){
  var B3=A3.v[0];
  $M(z3,function(C3){
   var D3=C3.v[0];
   var F3=B3.subtract(D3);
   var E3=$hs_narrow8Wordzh(F3);
   $R(1,[E3],"W8#");
  },[B3]);
 },[z3]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdczt=$f(2,function(G3,H3){
 $M(G3,function(I3){
  var J3=I3.v[0];
  $M(H3,function(K3){
   var L3=K3.v[0];
   var N3=J3.multiply(L3);
   var M3=$hs_narrow8Wordzh(N3);
   $R(1,[M3],"W8#");
  },[J3]);
 },[H3]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdczp=$f(2,function(O3,P3){
 $M(O3,function(Q3){
  var R3=Q3.v[0];
  $M(P3,function(S3){
   var T3=S3.v[0];
   var V3=R3.add(T3);
   var U3=$hs_narrow8Wordzh(V3);
   $R(1,[U3],"W8#");
  },[R3]);
 },[P3]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfIntegralWord8zuzdctoInteger=$f(1,function(a4){
 $M(a4,function(b4){
  var c4=b4.v[0];
  var d4=$hs_word2Intzh(c4);
  $$GHCziIntegerziType_smallInteger.J(d4);
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord14=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"in `base:GHC.Word'");
var $$GHCziWord_zdfRealWord1=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdczlze=$f(2,function(mj,nj){
 $M(mj,function(oj){
  var pj=oj.v[0];
  $M(nj,function(qj){
   var rj=qj.v[0];
   $r($hs_leWordzh(pj,rj));
  },[pj]);
 },[nj]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdczg=$f(2,function(sj,tj){
 $M(sj,function(uj){
  var vj=uj.v[0];
  $M(tj,function(wj){
   var xj=wj.v[0];
   $r($hs_gtWordzh(vj,xj));
  },[vj]);
 },[tj]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdczgze=$f(2,function(yj,zj){
 $M(yj,function(Aj){
  var Bj=Aj.v[0];
  $M(zj,function(Cj){
   var Dj=Cj.v[0];
   $r($hs_geWordzh(Bj,Dj));
  },[Bj]);
 },[zj]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdczl=$f(2,function(Ej,Fj){
 $M(Ej,function(Gj){
  var Hj=Gj.v[0];
  $M(Fj,function(Ij){
   var Jj=Ij.v[0];
   $r($hs_ltWordzh(Hj,Jj));
  },[Hj]);
 },[Fj]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdccompare=$f(2,function(Kj,Lj){
 $M(Kj,function(Mj){
  var Nj=Mj.v[0];
  $M(Lj,function(Oj){
   var Pj=Oj.v[0];
   var Qj=$hs_ltWordzh(Nj,Pj);
   switch(Qj.g){
   case 1:
    var Rj=$hs_eqWordzh(Nj,Pj);
    switch(Rj.g){
    case 1:
     $R(3,[],"GT");break;
    case 2:
     $R(2,[],"EQ");break;
    }break;
   case 2:
    $R(1,[],"LT");break;
   }
  },[Nj]);
 },[Lj]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfEqWord8zuzdczeze=$f(2,function(Sj,Tj){
 $M(Sj,function(Uj){
  var Vj=Uj.v[0];
  $M(Tj,function(Wj){
   var Xj=Wj.v[0];
   $r($hs_eqWordzh(Vj,Xj));
  },[Vj]);
 },[Tj]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfBitsWord8zuzdczsze=$f(2,function(Yj,Zj){
 $M(Yj,function(ak){
  var bk=ak.v[0];
  $M(Zj,function(ck){
   var dk=ck.v[0];
   var ek=$hs_eqWordzh(bk,dk);
   switch(ek.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[bk]);
 },[Zj]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfEqWord8=$D(1,function(){
 $r([$$GHCziWord_zdfEqWord8zuzdczeze,$$GHCziWord_zdfBitsWord8zuzdczsze]);
},"at libraries/base/GHC/Word.hs:180:34");
var $$GHCziWord_zdfOrdWord8zuzdcmin=$f(2,function(fk,gk){
 $M(fk,function(hk){
  var ik=hk.v[0];
  $M(gk,function(jk){
   var kk=jk.v[0];
   var lk=$hs_leWordzh(ik,kk);
   switch(lk.g){
   case 1:
    $A(jk);break;
   case 2:
    $A(hk);break;
   }
  },[ik,hk]);
 },[gk]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdcmax=$f(2,function(mk,nk){
 $M(mk,function(ok){
  var pk=ok.v[0];
  $M(nk,function(qk){
   var rk=qk.v[0];
   var sk=$hs_leWordzh(pk,rk);
   switch(sk.g){
   case 1:
    $A(ok);break;
   case 2:
    $A(qk);break;
   }
  },[pk,ok]);
 },[nk]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8=$D(1,function(){
 $r([$$GHCziWord_zdfEqWord8,$$GHCziWord_zdfOrdWord8zuzdccompare,$$GHCziWord_zdfOrdWord8zuzdczl,$$GHCziWord_zdfOrdWord8zuzdczgze,$$GHCziWord_zdfOrdWord8zuzdczg,$$GHCziWord_zdfOrdWord8zuzdczlze,$$GHCziWord_zdfOrdWord8zuzdcmax,$$GHCziWord_zdfOrdWord8zuzdcmin]);
},"at libraries/base/GHC/Word.hs:180:38");
var $$GHCziWord_zdfNumWord15=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdcsignum=$f(1,function(Fk){
 $M(Fk,function(Gk){
  var Hk=Gk.v[0];
  var Ik=$hs_eqWordzh(Hk,goog.math.Long.fromBits(0,0));
  switch(Ik.g){
  case 1:
   $A($$GHCziWord_zdfNumWord15);break;
  case 2:
   $A($$GHCziWord_zdfNumWord14);break;
  }
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8=$D(1,function(){
 $r([$$GHCziWord_zdfNumWord8zuzdczp,$$GHCziWord_zdfNumWord8zuzdczt,$$GHCziWord_zdfNumWord8zuzdczm,$$GHCziWord_zdfNumWord8zuzdcnegate,$$GHCziWord_zdfNumWord8zuzdcabs,$$GHCziWord_zdfNumWord8zuzdcsignum,$$GHCziWord_zdfBitsWord8zuzdcfromInteger]);
},"at libraries/base/GHC/Word.hs:186:10");
var $$GHCziWord_zdfIntegralWord8zuzdcquotRem=$f(2,function(Qm,Rm){
 $M(Qm,function(Sm){
  var Tm=Sm.v[0];
  $M(Rm,function(Um){
   var Vm=Um.v[0];
   var Wm=$hs_eqWordzh(Vm,goog.math.Long.fromBits(0,0));
   switch(Wm.g){
   case 1:
    var Xm=$t(function(){
     var Ym=$hs_remWordzh(Tm,Vm);
     $R(1,[Ym],"W8#");
    },[Vm,Tm],"sat");
    var Zm=$t(function(){
     var an=$hs_quotWordzh(Tm,Vm);
     $R(1,[an],"W8#");
    },[Vm,Tm],"sat");
    $R(1,[Zm,Xm],"(,)");break;
   case 2:
    $A($$GHCziErr_divZZeroError);break;
   }
  },[Tm]);
 },[Rm]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfShowWord8zuzdcshowsPrec=$f(3,function(on,pn,qn){
 $M(pn,function(rn){
  var sn=rn.v[0];
  $M(on,function(tn){
   var un=tn.v[0];
   var vn=$hs_word2Intzh(sn);
   $$GHCziShow_zdwshowSignedInt.J(un,vn,qn);
  },[sn,qn]);
 },[on,qn]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfShowWord8zuzdcshowList=$f(2,function(wn,xn){
 $M(wn,function(yn){
  switch(yn.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]",xn);break;
  case 2:
   var zn=yn.v[0],An=yn.v[1];
   var Bn=$t(function(){
    $M(zn,function(Cn){
     var Dn=Cn.v[0];
     var En=$t(function(){
      var Fn=$d(2,[$$GHCziShow_showListzuzu2,xn],"lvl22");
      var Gn=$f(1,function(Hn){
       $M(Hn,function(In){
	switch(In.g){
	case 1:
	 $A(Fn);break;
	case 2:
	 var Jn=In.v[0],Kn=In.v[1];
	 var Ln=$t(function(){
	  $M(Jn,function(Mn){
	   var Nn=Mn.v[0];
	   var On=$t(function(){
	    Gn.J(Kn);
	   },[Kn,Gn],"sat");
	   var Pn=$hs_word2Intzh(Nn);
	   $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),Pn,On);
	  },[Kn,Gn]);
	 },[Jn,Kn,Gn],"sat");
	 $R(2,[$$GHCziShow_showListzuzu1,Ln],":");break;
	}
       },[Fn,Gn]);
      },[Fn],"showl");
      Gn.J(An);
     },[xn,An],"sat");
     var Qn=$hs_word2Intzh(Dn);
     $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),Qn,En);
    },[xn,An]);
   },[xn,zn,An],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,Bn],":");break;
  }
 },[xn]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfShowWord8zuzdcshow=$f(1,function(Rn){
 $M(Rn,function(Sn){
  var Tn=Sn.v[0];
  var Un=$hs_word2Intzh(Tn);
  $$GHCziShow_zdwshowSignedInt.J(goog.math.Long.fromBits(0,0),Un,$$GHCziTypes_ZMZN);
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfShowWord8=$D(1,function(){
 $r([$$GHCziWord_zdfShowWord8zuzdcshowsPrec,$$GHCziWord_zdfShowWord8zuzdcshow,$$GHCziWord_zdfShowWord8zuzdcshowList]);
},"at libraries/base/GHC/Word.hs:183:10");
var $$GHCziWord_zdfRealWord8zuzdctoRational=$f(1,function(Vn){
 $M(Vn,function(Wn){
  var Xn=Wn.v[0];
  var eo=$hs_word2Intzh(Xn);
  $$GHCziIntegerziType_smallInteger.C([eo],function(Yn){
   $$GHCziIntegerziType_timesInteger.C([Yn,$$GHCziWord_zdfRealWord1],function(Zn){
    $$GHCziReal_zdwreduce.C([Zn,$$GHCziWord_zdfRealWord1],function(ao){
     var bo=ao[0],co=ao[1];
     $R(1,[bo,co],":%");
    },[]);
   },[]);
  },[]);
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfRealWord8=$D(1,function(){
 $r([$$GHCziWord_zdfNumWord8,$$GHCziWord_zdfOrdWord8,$$GHCziWord_zdfRealWord8zuzdctoRational]);
},"at libraries/base/GHC/Word.hs:196:10");
var $$Numeric_zdwshowIntAtBase=$f(8,function(a,b,c,d,e,f,g,h){
 $M(a,function(i){
  var j=i.v[0],k=i.v[1];
  $M(k,function(l){
   var m=l.v[0],n=l.v[2],o=l.v[5];
   var p=$t(function(){
    $$GHCziNum_fromInteger.J(j,$$Numeric$f);
   },[j],"sat");
   o.C([e,p],function(q){
    switch(q.g){
    case 1:
     var r=$t(function(){
      $$GHCziNum_fromInteger.J(j,$$Numeric$a);
     },[j],"sat");
     n.C([g,r],function(s){
      switch(s.g){
      case 1:
       $M(m,function(t){
	var u=t.v[0];
	b.C([g,e],function(v){
	 var w=v.v[0],x=v.v[1];
	 var y=$t(function(){
	  $$GHCziNum_fromInteger.J(j,$$Numeric$a);
	 },[j],"lvl9");
	 var z=$f(3,function(A,B,C){
	  var D=$t(function(){
	   c.C([B],function(E){
	    $$GHCziIntegerziType_integerToInt.C([E],function(F){
	     $R(1,[F],"I#");
	    },[]);
	   },[]);
	  },[B,c],"sat");
	  f.C([D],function(G){
	   u.C([A,y],function(H){
	    switch(H.g){
	    case 1:
	     b.C([A,e],function(I){
	      var J=I.v[0],K=I.v[1];
	      var L=$d(2,[G,C],"sat");
	      z.J(J,K,L);
	     },[e,b,y,c,f,u,G,C,z]);break;
	    case 2:
	     $R(2,[G,C],":");break;
	    }
	   },[e,b,y,c,f,A,u,G,C,z]);
	  },[e,b,y,c,f,A,u,C,z]);
	 },[e,b,y,c,f,u],"$wshowIt");
	 z.J(w,x,h);
	},[e,j,b,c,f,u,h]);
       },[e,j,g,b,c,f,h]);break;
      case 2:
       $$Numeric$c.J(g,d);break;
      }
     },[e,j,g,m,b,c,f,h,d]);break;
    case 2:
     $$Numeric$e.J(e,d);break;
    }
   },[e,j,g,n,m,b,c,f,h,d]);
  },[e,j,g,b,c,f,h,d]);
 },[e,g,b,c,f,h,d]);
},[],"at libraries/base/Numeric.hs:202:1");
var $$Numeric$a=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl");
var $$Numeric$b=$F(2,function(T4,U4){
 var V4=$t(function(){
  U4.J(T4);
 },[T4,U4],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Numeric.showIntAtBase: applied to negative number ",V4],function(W4){
  $$GHCziErr_error.J(W4);
 },[]);
},"lvl1");
var $$Numeric$c=$F(2,function(X4,Y4){
 $M(Y4,function(Z4){
  var a5=Z4.v[1];
  $$Numeric$b.J(X4,a5);
 },[X4]);
},"lvl2");
var $$Numeric$d=$F(2,function(b5,c5){
 var d5=$t(function(){
  c5.J(b5);
 },[b5,c5],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Numeric.showIntAtBase: applied to unsupported base ",d5],function(e5){
  $$GHCziErr_error.J(e5);
 },[]);
},"lvl3");
var $$Numeric$e=$F(2,function(f5,g5){
 $M(g5,function(h5){
  var i5=h5.v[1];
  $$Numeric$d.J(f5,i5);
 },[f5]);
},"lvl4");
var $$Numeric$f=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl5");
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
var $$TextziReadziLex_lexzq1=$f(1,function(ld){
 var md=$t(function(){
  var nd=$t(function(){
   var od=$t(function(){
    var pd=$f(1,function(qd){
     var rd=$d(4,[qd],"sat");
     ld.J(rd);
    },[ld],"sat");
    $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$e5,$$TextziReadziLex$f5,pd);
   },[ld],"sat");
   var sd=$f(1,function(td){
    $$GHCziUnicode_isAlpha.C([td],function(ud){
     switch(ud.g){
     case 1:
      $M(td,function(vd){
       var wd=vd.v[0];
       $M(wd,function(xd){
	switch(xd.toString()){
	case "_":
	 var yd=$f(1,function(zd){
	  var Ad=$d(2,[vd,zd],"sat");
	  var Bd=$d(1,[Ad],"sat");
	  ld.J(Bd);
	 },[ld,vd],"sat");
	 $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$d5,yd);break;
	default:
	 $R(3,[],"Fail");
	}
       },[ld,vd]);
      },[ld]);break;
     case 2:
      var Cd=$f(1,function(Dd){
       var Ed=$d(2,[td,Dd],"sat");
       var Fd=$d(1,[Ed],"sat");
       ld.J(Fd);
      },[ld,td],"sat");
      $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$d5,Cd);break;
     }
    },[ld,td]);
   },[ld],"sat");
   var Gd=$d(1,[sd],"sat");
   $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Gd,od);
  },[ld],"sat");
  var Hd=$f(1,function(Id){
   $$GHCziList_elem.C([$$GHCziClasses_zdfEqChar,Id,$$TextziReadziLex$M],function(Jd){
    switch(Jd.g){
    case 1:
     $R(3,[],"Fail");break;
    case 2:
     var Kd=$f(1,function(Ld){
      var Md=$d(2,[Id,Ld],"s");
      $$GHCziList_elem.C([$$GHCziClasses_zdfEqZMZNzuzdfEqZMZN,Md,$$TextziReadziLex$b5],function(Nd){
       switch(Nd.g){
       case 1:
	var Od=$d(3,[Md],"sat");
	ld.J(Od);break;
       case 2:
	var Pd=$d(2,[Md],"sat");
	ld.J(Pd);break;
       }
      },[Md,ld]);
     },[Id,ld],"sat");
     $$TextziParserCombinatorsziReadP_munch2.J($$TextziReadziLex$c5,Kd);break;
    }
   },[Id,ld]);
  },[ld],"sat");
  var Qd=$d(1,[Hd],"sat");
  $$TextziParserCombinatorsziReadP_zdfMonadPlusPzuzdcmplus.J(Qd,nd);
 },[ld],"$wk");
 var Rd=$f(1,function(Sd){
  $A(md);
 },[md],"k1");
 var Td=$f(1,function(Ud){
  $$TextziParserCombinatorsziReadP_skipSpaceszuskip.J(Ud,Rd);
 },[Rd],"sat");
 $R(2,[Td],"Look");
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
var $$TextziReadziLex$N4=$D(2,function(){
 $r([$$TextziReadziLex$p,$$GHCziTypes_ZMZN]);
},"a110");
var $$TextziReadziLex$O4=$D(2,function(){
 $r([$$TextziReadziLex$r,$$GHCziTypes_ZMZN]);
},"a111");
var $$TextziReadziLex$P4=$D(2,function(){
 $r([$$TextziReadziLex$t,$$GHCziTypes_ZMZN]);
},"a112");
var $$TextziReadziLex$Q4=$D(2,function(){
 $r([$$TextziReadziLex$x,$$GHCziTypes_ZMZN]);
},"a113");
var $$TextziReadziLex$R4=$D(2,function(){
 $r([$$TextziReadziLex$z,$$GHCziTypes_ZMZN]);
},"a114");
var $$TextziReadziLex$S4=$D(2,function(){
 $r([$$TextziReadziLex$B,$$GHCziTypes_ZMZN]);
},"a115");
var $$TextziReadziLex$T4=$D(2,function(){
 $r([$$TextziReadziLex$R4,$$TextziReadziLex$S4]);
},"a116");
var $$TextziReadziLex$U4=$D(2,function(){
 $r([$$TextziReadziLex$Q4,$$TextziReadziLex$T4]);
},"a117");
var $$TextziReadziLex$V4=$D(2,function(){
 $r([$$TextziReadziLex$w,$$TextziReadziLex$U4]);
},"a118");
var $$TextziReadziLex$W4=$D(2,function(){
 $r([$$TextziReadziLex$v,$$TextziReadziLex$V4]);
},"a119");
var $$TextziReadziLex$X4=$D(2,function(){
 $r([$$TextziReadziLex$P4,$$TextziReadziLex$W4]);
},"a120");
var $$TextziReadziLex$Y4=$D(2,function(){
 $r([$$TextziReadziLex$O4,$$TextziReadziLex$X4]);
},"a121");
var $$TextziReadziLex$Z4=$D(2,function(){
 $r([$$TextziReadziLex$N4,$$TextziReadziLex$Y4]);
},"a122");
var $$TextziReadziLex$a5=$D(2,function(){
 $r([$$TextziReadziLex$o,$$TextziReadziLex$Z4]);
},"a123");
var $$TextziReadziLex$b5=$D(2,function(){
 $r([$$TextziReadziLex$n,$$TextziReadziLex$a5]);
},"at libraries/base/Text/Read/Lex.hs:200:3");
var $$TextziReadziLex$c5=$F(1,function(vq){
 $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,vq,$$TextziReadziLex$M);
},"a124");
var $$TextziReadziLex$d5=$F(1,function(wq){
 $$GHCziUnicode_isAlphaNum.C([wq],function(xq){
  switch(xq.g){
  case 1:
   $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,wq,$$TextziReadziLex$f);break;
  case 2:
   $R(2,[],"True");break;
  }
 },[wq]);
},"at libraries/base/Text/Read/Lex.hs:228:5");
var $$TextziReadziLex$e5=$F(1,function(yq){
 var zq=$t(function(){
  var Aq=$f(1,function(Bq){
   var Cq=$d(1,[$$TextziReadziLex$d,Bq],"sat");
   yq.J(Cq);
  },[yq],"sat");
  $$TextziReadziLex$d1.J($$TextziReadziLex$d,Aq);
 },[yq],"lvl99");
 var Dq=$t(function(){
  var Eq=$f(1,function(Fq){
   var Gq=$d(1,[$$TextziReadziLex$c,Fq],"sat");
   yq.J(Gq);
  },[yq],"sat");
  $$TextziReadziLex$d1.J($$TextziReadziLex$c,Eq);
 },[yq],"lvl100");
 var Hq=$t(function(){
  var Iq=$f(1,function(Jq){
   var Kq=$d(1,[$$TextziReadziLex$d,Jq],"sat");
   yq.J(Kq);
  },[yq],"sat");
  $$TextziReadziLex$d1.J($$TextziReadziLex$d,Iq);
 },[yq],"lvl101");
 var Lq=$t(function(){
  var Mq=$f(1,function(Nq){
   var Oq=$d(1,[$$TextziReadziLex$c,Nq],"sat");
   yq.J(Oq);
  },[yq],"sat");
  $$TextziReadziLex$d1.J($$TextziReadziLex$c,Mq);
 },[yq],"lvl102");
 var Pq=$f(1,function(Qq){
  $M(Qq,function(Rq){
   var Sq=Rq.v[0];
   $M(Sq,function(Tq){
    switch(Tq.toString()){
    case "O":
     $A(Lq);break;
    case "X":
     $A(Hq);break;
    case "o":
     $A(Dq);break;
    case "x":
     $A(zq);break;
    default:
     $R(3,[],"Fail");
    }
   },[zq,Dq,Hq,Lq]);
  },[zq,Dq,Hq,Lq]);
 },[zq,Dq,Hq,Lq],"a127");
 var Uq=$d(1,[Pq],"lvl103");
 var Vq=$f(1,function(Wq){
  $M(Wq,function(Xq){
   var Yq=Xq.v[0];
   $M(Yq,function(Zq){
    switch(Zq.toString()){
    case "0":
     $A(Uq);break;
    default:
     $R(3,[],"Fail");
    }
   },[Uq]);
  },[Uq]);
 },[Uq],"sat");
 $R(1,[Vq],"Get");
},"a125");
var $$TextziReadziLex$f5=$F(1,function(ar){
 var br=$f(1,function(cr){
  var dr=$f(1,function(er){
   var fr=$f(1,function(gr){
    var hr=$d(2,[cr,er,gr],"sat");
    ar.J(hr);
   },[cr,er,ar],"sat");
   $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$J4,$$TextziReadziLex$L4,fr);
  },[cr,ar],"sat");
  $$TextziParserCombinatorsziReadP_zlzpzp1.J($$TextziReadziLex$g1,$$TextziReadziLex$K4,dr);
 },[ar],"sat");
 $$TextziReadziLex$d1.J($$TextziReadziLex$f1,br);
},"a126");
var $$DataziByteString_zdwfindSubstrings=$f(8,function(yG,zG,AG,BG,CG,DG,EG,FG){
 var GG=BG.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(GG.g){
 case 1:
  var HG=FG.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(HG.g){
  case 1:
   $M(BG,function(IG){
    switch(IG.toString()){
    case "0":
     var PI=$t(function(){
      var QI=$f(5,function(RI,SI,TI,UI,VI){
       var WI=VI.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(WI.g){
       case 1:
	var XI=$t(function(){
	 var aJ=VI.subtract(goog.math.Long.fromBits(1,0));
	 var ZI=UI.add(goog.math.Long.fromBits(1,0));
	 var YI=RI.add(goog.math.Long.fromBits(1,0));
	 QI.J(YI,SI,TI,ZI,aJ);
	},[VI,RI,QI,SI,TI,UI],"sat");
	var bJ=$d(1,[RI],"sat");
	$R(2,[bJ,XI],":");break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[],"$wsearch");
      var dJ=FG.subtract(goog.math.Long.fromBits(1,0));
      var cJ=EG.add(goog.math.Long.fromBits(1,0));
      QI.J(goog.math.Long.fromBits(1,0),CG,DG,cJ,dJ);
     },[FG,CG,EG,DG],"sat");
     var eJ=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
     $R(2,[eJ,PI],":");break;
    default:
     var JG=FG.lessThan(IG)?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(JG.g){
     case 1:
      var iI=$hs_int2Wordzh(IG);
      var hI=$hs_plusAddrzh(CG,EG);
      var gI=$hs_plusAddrzh(yG,AG);
      var $ff=memcmp(gI,hI,iI);
      var KG=[$$GHCziPrim_realWorldzh,$ff];
      var LG=KG[0],MG=KG[1];
      $b(function(){
       var fI=$hs_narrow32Intzh(MG);
       switch(fI.toString()){
       case "0":
	$R(2,[],"True");break;
       default:
	$R(1,[],"False");
       }
      },[],function(NG){
       var dI=$hs_touchzh(DG,LG);
       var eI=$hs_touchzh(zG,dI);
       $M(NG,function(OG){
	switch(OG.g){
	case 1:
	 var PG=$f(5,function(QG,RG,SG,TG,UG){
	  var VG=UG.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(VG.g){
	  case 1:
	   var WG=UG.lessThan(IG)?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(WG.g){
	   case 1:
	    var pH=$hs_int2Wordzh(IG);
	    var oH=$hs_plusAddrzh(RG,TG);
	    var nH=$hs_plusAddrzh(yG,AG);
	    var $ff=memcmp(nH,oH,pH);
	    var XG=[$$GHCziPrim_realWorldzh,$ff];
	    var YG=XG[0],ZG=XG[1];
	    $b(function(){
	     var mH=$hs_narrow32Intzh(ZG);
	     switch(mH.toString()){
	     case "0":
	      $R(2,[],"True");break;
	     default:
	      $R(1,[],"False");
	     }
	    },[],function(aH){
	     var kH=$hs_touchzh(SG,YG);
	     var lH=$hs_touchzh(zG,kH);
	     $M(aH,function(bH){
	      switch(bH.g){
	      case 1:
	       var eH=UG.subtract(goog.math.Long.fromBits(1,0));
	       var dH=TG.add(goog.math.Long.fromBits(1,0));
	       var cH=QG.add(goog.math.Long.fromBits(1,0));
	       PG.J(cH,RG,SG,dH,eH);break;
	      case 2:
	       var fH=$t(function(){
		var iH=UG.subtract(goog.math.Long.fromBits(1,0));
		var hH=TG.add(goog.math.Long.fromBits(1,0));
		var gH=QG.add(goog.math.Long.fromBits(1,0));
		PG.J(gH,RG,SG,hH,iH);
	       },[UG,RG,TG,SG,QG,PG],"sat");
	       var jH=$d(1,[QG],"sat");
	       $R(2,[jH,fH],":");break;
	      }
	     },[UG,RG,TG,SG,QG,PG]);
	    },[zG,UG,RG,TG,SG,YG,QG,PG]);break;
	   case 2:
	    var sH=UG.subtract(goog.math.Long.fromBits(1,0));
	    var rH=TG.add(goog.math.Long.fromBits(1,0));
	    var qH=QG.add(goog.math.Long.fromBits(1,0));
	    PG.J(qH,RG,SG,rH,sH);break;
	   }break;
	  case 2:
	   $R(1,[],"[]");break;
	  }
	 },[IG,yG,AG,zG],"$wsearch");
	 var uH=FG.subtract(goog.math.Long.fromBits(1,0));
	 var tH=EG.add(goog.math.Long.fromBits(1,0));
	 PG.J(goog.math.Long.fromBits(1,0),CG,DG,tH,uH);break;
	case 2:
	 var vH=$t(function(){
	  var wH=$f(5,function(xH,yH,zH,AH,BH){
	   var CH=BH.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(CH.g){
	   case 1:
	    var DH=BH.lessThan(IG)?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(DH.g){
	    case 1:
	     var WH=$hs_int2Wordzh(IG);
	     var VH=$hs_plusAddrzh(yH,AH);
	     var UH=$hs_plusAddrzh(yG,AG);
	     var $ff=memcmp(UH,VH,WH);
	     var EH=[$$GHCziPrim_realWorldzh,$ff];
	     var FH=EH[0],GH=EH[1];
	     $b(function(){
	      var TH=$hs_narrow32Intzh(GH);
	      switch(TH.toString()){
	      case "0":
	       $R(2,[],"True");break;
	      default:
	       $R(1,[],"False");
	      }
	     },[],function(HH){
	      var RH=$hs_touchzh(zH,FH);
	      var SH=$hs_touchzh(zG,RH);
	      $M(HH,function(IH){
	       switch(IH.g){
	       case 1:
		var LH=BH.subtract(goog.math.Long.fromBits(1,0));
		var KH=AH.add(goog.math.Long.fromBits(1,0));
		var JH=xH.add(goog.math.Long.fromBits(1,0));
		wH.J(JH,yH,zH,KH,LH);break;
	       case 2:
		var MH=$t(function(){
		 var PH=BH.subtract(goog.math.Long.fromBits(1,0));
		 var OH=AH.add(goog.math.Long.fromBits(1,0));
		 var NH=xH.add(goog.math.Long.fromBits(1,0));
		 wH.J(NH,yH,zH,OH,PH);
		},[BH,yH,AH,zH,xH,wH],"sat");
		var QH=$d(1,[xH],"sat");
		$R(2,[QH,MH],":");break;
	       }
	      },[BH,yH,AH,zH,xH,wH]);
	     },[zG,BH,yH,AH,zH,FH,xH,wH]);break;
	    case 2:
	     var ZH=BH.subtract(goog.math.Long.fromBits(1,0));
	     var YH=AH.add(goog.math.Long.fromBits(1,0));
	     var XH=xH.add(goog.math.Long.fromBits(1,0));
	     wH.J(XH,yH,zH,YH,ZH);break;
	    }break;
	   case 2:
	    $R(1,[],"[]");break;
	   }
	  },[IG,yG,AG,zG],"$wsearch");
	  var bI=FG.subtract(goog.math.Long.fromBits(1,0));
	  var aI=EG.add(goog.math.Long.fromBits(1,0));
	  wH.J(goog.math.Long.fromBits(1,0),CG,DG,aI,bI);
	 },[FG,IG,yG,AG,CG,EG,DG,zG],"sat");
	 var cI=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
	 $R(2,[cI,vH],":");break;
	}
       },[FG,IG,yG,AG,CG,EG,DG,zG]);
      },[FG,IG,yG,AG,CG,EG,DG,LG,zG]);break;
     case 2:
      var jI=$f(5,function(kI,lI,mI,nI,oI){
       var pI=oI.lessThanOrEqual(goog.math.Long.fromBits(0,0))?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(pI.g){
       case 1:
	var qI=oI.lessThan(IG)?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(qI.g){
	case 1:
	 var JI=$hs_int2Wordzh(IG);
	 var II=$hs_plusAddrzh(lI,nI);
	 var HI=$hs_plusAddrzh(yG,AG);
	 var $ff=memcmp(HI,II,JI);
	 var rI=[$$GHCziPrim_realWorldzh,$ff];
	 var sI=rI[0],tI=rI[1];
	 $b(function(){
	  var GI=$hs_narrow32Intzh(tI);
	  switch(GI.toString()){
	  case "0":
	   $R(2,[],"True");break;
	  default:
	   $R(1,[],"False");
	  }
	 },[],function(uI){
	  var EI=$hs_touchzh(mI,sI);
	  var FI=$hs_touchzh(zG,EI);
	  $M(uI,function(vI){
	   switch(vI.g){
	   case 1:
	    var yI=oI.subtract(goog.math.Long.fromBits(1,0));
	    var xI=nI.add(goog.math.Long.fromBits(1,0));
	    var wI=kI.add(goog.math.Long.fromBits(1,0));
	    jI.J(wI,lI,mI,xI,yI);break;
	   case 2:
	    var zI=$t(function(){
	     var CI=oI.subtract(goog.math.Long.fromBits(1,0));
	     var BI=nI.add(goog.math.Long.fromBits(1,0));
	     var AI=kI.add(goog.math.Long.fromBits(1,0));
	     jI.J(AI,lI,mI,BI,CI);
	    },[oI,lI,nI,mI,kI,jI],"sat");
	    var DI=$d(1,[kI],"sat");
	    $R(2,[DI,zI],":");break;
	   }
	  },[oI,lI,nI,mI,kI,jI]);
	 },[zG,oI,lI,nI,mI,sI,kI,jI]);break;
	case 2:
	 var MI=oI.subtract(goog.math.Long.fromBits(1,0));
	 var LI=nI.add(goog.math.Long.fromBits(1,0));
	 var KI=kI.add(goog.math.Long.fromBits(1,0));
	 jI.J(KI,lI,mI,LI,MI);break;
	}break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[IG,yG,AG,zG],"$wsearch");
      var OI=FG.subtract(goog.math.Long.fromBits(1,0));
      var NI=EG.add(goog.math.Long.fromBits(1,0));
      jI.J(goog.math.Long.fromBits(1,0),CG,DG,NI,OI);break;
     }
    }
   },[FG,yG,AG,CG,EG,DG,zG]);break;
  case 2:
   $R(1,[],"[]");break;
  }break;
 case 2:
  $$GHCziEnum_eftInt.J(goog.math.Long.fromBits(0,0),FG);break;
 }
},[],"at libraries/bytestring/Data/ByteString.hs:1548:1");
var $$GHCziClasses_compareIntzh=$f(2,function(y1,z1){
 var A1=y1.lessThan(z1)?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(A1.g){
 case 1:
  var B1=y1.equals(z1)?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(B1.g){
  case 1:
   $R(3,[],"GT");break;
  case 2:
   $R(2,[],"EQ");break;
  }break;
 case 2:
  $R(1,[],"LT");break;
 }
},[],"at libraries/ghc-prim/GHC/Classes.hs:247:1");
var $$GHCziClasses_compareInt=$f(2,function(C1,D1){
 $M(C1,function(E1){
  var F1=E1.v[0];
  $M(D1,function(G1){
   var H1=G1.v[0];
   $$GHCziClasses_compareIntzh.J(F1,H1);
  },[F1]);
 },[D1]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:244:9");
var $$GHCziClasses_leInt=$f(2,function(I1,J1){
 $M(I1,function(K1){
  var L1=K1.v[0];
  $M(J1,function(M1){
   var N1=M1.v[0];
   $r(L1.lessThanOrEqual(N1)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[L1]);
 },[J1]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:241:8");
var $$GHCziClasses_ltInt=$f(2,function(O1,P1){
 $M(O1,function(Q1){
  var R1=Q1.v[0];
  $M(P1,function(S1){
   var T1=S1.v[0];
   $r(R1.lessThan(T1)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[R1]);
 },[P1]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:240:8");
var $$GHCziClasses_geInt=$f(2,function(U1,V1){
 $M(U1,function(W1){
  var X1=W1.v[0];
  $M(V1,function(Y1){
   var Z1=Y1.v[0];
   $r(X1.greaterThanOrEqual(Z1)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[X1]);
 },[V1]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:239:8");
var $$GHCziClasses_gtInt=$f(2,function(a2,b2){
 $M(a2,function(c2){
  var d2=c2.v[0];
  $M(b2,function(e2){
   var f2=e2.v[0];
   $r(d2.greaterThan(f2)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[d2]);
 },[b2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:238:8");
var $$GHCziClasses_neInt=$f(2,function(g2,h2){
 $M(g2,function(i2){
  var j2=i2.v[0];
  $M(h2,function(k2){
   var l2=k2.v[0];
   $r(j2.notEquals(l2)?$$GHCziTypes_True:$$GHCziTypes_False);
  },[j2]);
 },[h2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:114:8");
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
var $$GHCziClasses_zdfEqInt=$D(1,function(){
 $r([$$GHCziClasses_eqInt,$$GHCziClasses_neInt]);
},"at libraries/ghc-prim/GHC/Classes.hs:106:10");
var $$GHCziClasses_zdfOrdIntzuzdcmin=$f(2,function(i1L,j1L){
 $M(i1L,function(k1L){
  var l1L=k1L.v[0];
  $M(j1L,function(m1L){
   var n1L=m1L.v[0];
   var o1L=l1L.lessThanOrEqual(n1L)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(o1L.g){
   case 1:
    $A(m1L);break;
   case 2:
    $A(k1L);break;
   }
  },[l1L,k1L]);
 },[j1L]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:130:10");
var $$GHCziClasses_zdfOrdIntzuzdcmax=$f(2,function(p1L,q1L){
 $M(p1L,function(r1L){
  var s1L=r1L.v[0];
  $M(q1L,function(t1L){
   var u1L=t1L.v[0];
   var v1L=s1L.lessThanOrEqual(u1L)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(v1L.g){
   case 1:
    $A(r1L);break;
   case 2:
    $A(t1L);break;
   }
  },[s1L,r1L]);
 },[q1L]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:130:5");
var $$GHCziClasses_zdfOrdInt=$D(1,function(){
 $r([$$GHCziClasses_zdfEqInt,$$GHCziClasses_compareInt,$$GHCziClasses_ltInt,$$GHCziClasses_geInt,$$GHCziClasses_gtInt,$$GHCziClasses_leInt,$$GHCziClasses_zdfOrdIntzuzdcmax,$$GHCziClasses_zdfOrdIntzuzdcmin]);
},"at libraries/ghc-prim/GHC/Classes.hs:226:10");
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
var $$Main_zdsforever=$f(2,function(a,b){
 $$Main$P.J(a,b);
},[],"in `main:Main'");
var $$Main_main1=$f(1,function(e){
 $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$q1,$$GHCziTypes_True,e],function(f){
  var g=f[0];
  $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$p1,$$GHCziTypes_True,g],function(h){
   var i=h[0];
   $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$o1,$$GHCziTypes_True,i],function(j){
    var k=j[0];
    $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$n1,$$GHCziTypes_True,k],function(l){
     var m=l[0];
     $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$m1,$$GHCziTypes_True,m],function(n){
      var o=n[0];
      $$GHCziIOziHandleziText_hPutStr2.C([$$GHCziIOziHandleziFD_stdout,$$Main$l1,$$GHCziTypes_False,o],function(p){
       var q=p[0];
       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandle_hFlush2,$$GHCziIOziHandleziFD_stdout,$$GHCziIOziHandleziInternals_flushWriteBuffer1,q],function(r){
	var s=r[0];
	var t=$hs_newMVarzh(s);
	var u=t[0],v=t[1];
	var w=$f(1,function(x){
	 var y=$f(1,function(z){
	  $$GHCziIOziHandleziInternals_wantReadableHandlezu1.C([$$GHCziIOziHandleziText_hGetLine3,$$GHCziIOziHandleziFD_stdin,$$GHCziIOziHandleziText_hGetLine2,z],function(A){
	   var B=A[0],C=A[1];
	   $b($hs_putMVarzh,[v,C,B],function(D){
	    $r([D,$$GHCziTuple_Z0T]);
	   },[]);
	  },[v]);
	 },[v],"sat");
	 $k($hs_catchzh,[y,$$GHCziConcziSync_forkIO2,x]);
	},[v],"sat");
	var E=$hs_forkzh(w,u);
	var F=E[0];
	var G=$f(1,function(H){
	 var I=$f(1,function(J){
	  var $ff=rtsSupportsBoundThreads();
	  var K=[$$GHCziPrim_realWorldzh,$ff];
	  var L=K[1];
	  $M(L,function(M){
	   switch(M.toString()){
	   case "0":
	    $b($hs_delayzh,[goog.math.Long.fromBits(20000000,0),J],function(R){
	     $b($hs_putMVarzh,[v,$$GHCziTypes_ZMZN,R],function(Q){
	      $r([Q,$$GHCziTuple_Z0T]);
	     },[]);
	    },[v]);break;
	   default:
	    $$GHCziEventziThread_threadDelay1.C([$$Main$k1,J],function(N){
	     var O=N[0];
	     $b($hs_putMVarzh,[v,$$GHCziTypes_ZMZN,O],function(P){
	      $r([P,$$GHCziTuple_Z0T]);
	     },[]);
	    },[v]);
	   }
	  },[v,J]);
	 },[v],"sat");
	 $k($hs_catchzh,[I,$$GHCziConcziSync_forkIO2,H]);
	},[v],"sat");
	var S=$hs_forkzh(G,F);
	var T=S[0];
	$b($hs_takeMVarzh,[v,T],function(U){
	 var V=U[0],W=U[1];
	 var X=$t(function(){
	  var Y=$d(2,[W],"sat");
	  var Z=$d(5,[Y],"sat");
	  var a1=$d(6,[Z,$$Main$X],"sat");
	  var b1=$d(6,[$$Main$T,a1],"sat");
	  $$TextziBlazzeziRendererziText_renderMarkupWith.C([$$DataziTextziEncoding_decodeUtf8,b1],function(c1){
	   var d1=$f(1,function(e1){
	    $M(e1,function(f1){
	     var g1=f1.v[0],h1=f1.v[1];
	     $M(g1,function(i1){
	      switch(i1.g){
	      case 1:
	       $R(1,[],"Done");break;
	      case 2:
	       var j1=i1.v[0],k1=i1.v[1],l1=i1.v[2],m1=i1.v[3];
	       $M(h1,function(n1){
		var o1=n1.v[0];
		var p1=o1.greaterThanOrEqual(l1)?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(p1.g){
		case 1:
		 var H1=k1.add(o1);
		 var D1=$hs_indexWord16Arrayzh(j1,H1);
		 var q1=$hs_ltWordzh(D1,goog.math.Long.fromBits(55296,0));
		 switch(q1.g){
		 case 1:
		  var r1=$hs_gtWordzh(D1,goog.math.Long.fromBits(56319,0));
		  switch(r1.g){
		  case 1:
		   var G1=H1.add(goog.math.Long.fromBits(1,0));
		   var F1=$hs_indexWord16Arrayzh(j1,G1);
		   var t1=o1.add(goog.math.Long.fromBits(2,0));
		   var s1=$d(1,[t1],"sat");
		   var u1=$d(1,[i1,s1],"sat");
		   var E1=$hs_word2Intzh(F1);
		   var A1=E1.subtract(goog.math.Long.fromBits(56320,0));
		   var C1=$hs_word2Intzh(D1);
		   var B1=C1.subtract(goog.math.Long.fromBits(55296,0));
		   var z1=$hs_uncheckedIShiftLzh(B1,goog.math.Long.fromBits(10,0));
		   var y1=z1.add(A1);
		   var x1=y1.add(goog.math.Long.fromBits(65536,0));
		   var w1=$hs_chrzh(x1);
		   var v1=$d(1,[w1],"sat");
		   $R(3,[v1,u1],"Yield");break;
		  case 2:
		   var J1=o1.add(goog.math.Long.fromBits(1,0));
		   var I1=$d(1,[J1],"sat");
		   var K1=$d(1,[i1,I1],"sat");
		   var N1=$hs_word2Intzh(D1);
		   var M1=$hs_chrzh(N1);
		   var L1=$d(1,[M1],"sat");
		   $R(3,[L1,K1],"Yield");break;
		  }break;
		 case 2:
		  var P1=o1.add(goog.math.Long.fromBits(1,0));
		  var O1=$d(1,[P1],"sat");
		  var Q1=$d(1,[i1,O1],"sat");
		  var T1=$hs_word2Intzh(D1);
		  var S1=$hs_chrzh(T1);
		  var R1=$d(1,[S1],"sat");
		  $R(3,[R1,Q1],"Yield");break;
		 }break;
		case 2:
		 var U1=$t(function(){
		  $M(m1,function(V1){
		   var W1=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
		   $R(1,[V1,W1],":*:");
		  },[]);
		 },[m1],"sat");
		 d1.J(U1);break;
		}
	       },[l1,k1,j1,i1,m1,d1]);break;
	      }
	     },[h1,d1]);
	    },[d1]);
	   },[],"next1");
	   var X1=$f(1,function(Y1){
	    $M(Y1,function(Z1){
	     d1.C([Z1],function(a2){
	      switch(a2.g){
	      case 1:
	       $R(1,[],"[]");break;
	      case 2:
	       var b2=a2.v[0];
	       X1.J(b2);break;
	      case 3:
	       var c2=a2.v[0],d2=a2.v[1];
	       var e2=$t(function(){
		X1.J(d2);
	       },[X1,d2],"sat");
	       $R(2,[c2,e2],":");break;
	      }
	     },[X1]);
	    },[d1,X1]);
	   },[d1],"unfold");
	   var f2=$d(1,[goog.math.Long.fromBits(0,0)],"sat");
	   var g2=$d(1,[c1,f2],"sat");
	   X1.J(g2);
	  },[]);
	 },[W],"lvl34");
	 var h2=$f(2,function(i2,j2){
	  $$GraphicsziUIziGtkziWebKitziWebView_zdwa16.C([i2,j2],function(k2){
	   var l2=k2[0],m2=k2[1];
	   $M(m2,function(n2){
	    var o2=n2.v[0],p2=n2.v[1];
	    var $ff=webkit_dom_document_get_body(o2);
	    var q2=[l2,$ff];
	    var r2=q2[0],s2=q2[1];
	    var V5=$hs_touchzh(p2,r2);
	    var t2=$f(2,function(u2,v2){
	     $M(v2,function(w2){
	      switch(w2.g){
	      case 1:
	       $$GHCziIO_failIO.J($$Main$r,u2);break;
	      case 2:
	       var x2=w2.v[0];
	       $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentCreateElement1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,n2,$$Main$H,u2],function(y2){
		var z2=y2[0],A2=y2[1];
		$M(A2,function(B2){
		 switch(B2.g){
		 case 1:
		  $$GHCziIO_failIO.J($$Main$q,z2);break;
		 case 2:
		  var C2=B2.v[0];
		  var D2=$t(function(){
		   var E2=$t(function(){
		    $M(C2,function(F2){
		     var G2=F2.v[0];
		     $R(1,[G2],"Ptr");
		    },[]);
		   },[C2],"sat");
		   $$SystemziGlibziGType_typeInstanceIsA.C([E2,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLDivElement],function(H2){
		    switch(H2.g){
		    case 1:
		     $A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLDivElement1);break;
		    case 2:
		     $A(C2);break;
		    }
		   },[C2]);
		  },[C2],"div");
		  $$GraphicsziUIziGtkziWebKitziDOMziHTMLElement_htmlElementSetInnerHTML1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLDivElement,D2,X,z2],function(I2){
		   var J2=I2[0];
		   var K2=$d(2,[D2],"sat");
		   $$GraphicsziUIziGtkziWebKitziDOMziNode_nodeAppendChild1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLDivElement,x2,K2,J2],function(L2){
		    var M2=L2[0];
		    $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,n2,$$Main$G,M2],function(N2){
		     var O2=N2[0],P2=N2[1];
		     $M(P2,function(Q2){
		      switch(Q2.g){
		      case 1:
		       $$GHCziIO_failIO.J($$Main$p,O2);break;
		      case 2:
		       var R2=Q2.v[0];
		       $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,n2,$$Main$F,O2],function(S2){
			var T2=S2[0],U2=S2[1];
			$M(U2,function(V2){
			 switch(V2.g){
			 case 1:
			  $$GHCziIO_failIO.J($$Main$o,T2);break;
			 case 2:
			  var W2=V2.v[0];
			  $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,n2,$$Main$E,T2],function(X2){
			   var Y2=X2[0],Z2=X2[1];
			   $M(Z2,function(a3){
			    switch(a3.g){
			    case 1:
			     $$GHCziIO_failIO.J($$Main$n,Y2);break;
			    case 2:
			     var b3=a3.v[0];
			     $$GraphicsziUIziGtkziWebKitziDOMziDocument_documentGetElementById1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassDocument,n2,$$Main$D,Y2],function(c3){
			      var d3=c3[0],e3=c3[1];
			      var f3=$t(function(){
			       $M(R2,function(g3){
				var h3=g3.v[0];
				$R(1,[h3],"Ptr");
			       },[]);
			      },[R2],"sat");
			      $$SystemziGlibziGType_typeInstanceIsA.C([f3,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLInputElement],function(i3){
			       switch(i3.g){
			       case 1:
				$A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLInputElement1);break;
			       case 2:
				$M(R2,function(j3){
				 var k3=j3.v[0],l3=j3.v[1];
				 var $ff=webkit_dom_element_focus(k3);
				 var m3=[d3,$ff];
				 var n3=m3[0];
				 var p5=$hs_touchzh(l3,n3);
				 var o3=$f(1,function(p3){
				  var q3=$hs_newMVarzh(p3);
				  var r3=q3[0],s3=q3[1];
				  var t3=$f(1,function(u3){
				   var v3=$f(1,function(w3){
				    $b($hs_takeMVarzh,[s3,w3],function(x3){
				     var y3=x3[0],z3=x3[1];
				     var A3=$t(function(){
				      $$TextziParserCombinatorsziReadP_run.C([$$Main$j1,z3],function(B3){
				       switch(B3.g){
				       case 1:
					$$Main$Z.J($$Main$a1,goog.math.Long.fromBits(0,0));break;
				       case 2:
					var C3=B3.v[0],D3=B3.v[1];
					$M(C3,function(E3){
					 var F3=E3.v[0],G3=E3.v[1];
					 $M(G3,function(H3){
					  switch(H3.g){
					  case 1:
					   $M(D3,function(I3){
					    switch(I3.g){
					    case 1:
					     var J3=$t(function(){
					      var K3=$t(function(){
					       $$GHCziShow_zdwzdcshowsPrec.J(goog.math.Long.fromBits(0,0),F3,$$GHCziTypes_ZMZN);
					      },[F3],"sat");
					      var L3=$d(2,[K3],"sat");
					      var M3=$d(5,[L3],"sat");
					      var N3=$d(6,[M3,$$Main$z],"sat");
					      var O3=$d(6,[$$Main$A,N3],"sat");
					      $$TextziBlazzeziRendererziText_renderMarkupWith.C([$$DataziTextziEncoding_decodeUtf8,O3],function(P3){
					       $$Main$c1.J(P3,goog.math.Long.fromBits(0,0));
					      },[]);
					     },[F3],"$w$j");
					     $$GHCziIntegerziType_gtInteger.C([F3,$$Main$u],function(Q3){
					      switch(Q3.g){
					      case 1:
					       $A(J3);break;
					      case 2:
					       var R3=$f(1,function(S3){
						$$GHCziIntegerziType_timesInteger.C([S3,S3],function(T3){
						 $$GHCziIntegerziType_leInteger.J(T3,F3);
						},[F3]);
					       },[F3],"sat");
					       $$GHCziList_takeWhile.C([R3,$$Main$v],function(U3){
						var V3=$f(1,function(W3){
						 $$GHCziIntegerziType_eqInteger.C([W3,$$GHCziReal_even1],function(X3){
						  switch(X3.g){
						  case 1:
						   $$GHCziIntegerziType_divModInteger.C([F3,W3],function(Y3){
						    var Z3=Y3[1];
						    $$GHCziIntegerziType_neqInteger.J(Z3,$$Main$w);
						   },[]);break;
						  case 2:
						   $A($$GHCziErr_divZZeroError);break;
						  }
						 },[F3,W3]);
						},[F3],"sat");
						$$GHCziList_all.C([V3,U3],function(a4){
						 switch(a4.g){
						 case 1:
						  $A(J3);break;
						 case 2:
						  var b4=$t(function(){
						   $$GHCziShow_zdwzdcshowsPrec.J(goog.math.Long.fromBits(0,0),F3,$$GHCziTypes_ZMZN);
						  },[F3],"sat");
						  var c4=$d(2,[b4],"sat");
						  var d4=$d(5,[c4],"sat");
						  var e4=$d(6,[d4,$$Main$x],"sat");
						  var f4=$d(6,[$$Main$y,e4],"sat");
						  $$TextziBlazzeziRendererziText_renderMarkupWith.C([$$DataziTextziEncoding_decodeUtf8,f4],function(g4){
						   $$Main$e1.J(g4,goog.math.Long.fromBits(0,0));
						  },[]);break;
						 }
						},[F3,J3]);
					       },[F3,J3]);break;
					      }
					     },[F3,J3]);break;
					    case 2:
					     $$Main$g1.J($$Main$a1,goog.math.Long.fromBits(0,0));break;
					    }
					   },[F3]);break;
					  case 2:
					   $$Main$i1.J($$Main$a1,goog.math.Long.fromBits(0,0));break;
					  }
					 },[D3,F3]);
					},[D3]);break;
				       }
				      },[]);
				     },[z3],"sat");
				     var h4=$t(function(){
				      var i4=$t(function(){
				       $M(W2,function(j4){
					var k4=j4.v[0];
					$R(1,[k4],"Ptr");
				       },[]);
				      },[W2],"sat");
				      $$SystemziGlibziGType_typeInstanceIsA.C([i4,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLDivElement],function(l4){
				       switch(l4.g){
				       case 1:
					$A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLDivElement1);break;
				       case 2:
					$A(W2);break;
				       }
				      },[W2]);
				     },[W2],"sat");
				     $$GraphicsziUIziGtkziWebKitziDOMziHTMLElement_htmlElementSetInnerHTML1.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLDivElement,h4,A3,y3);
				    },[W2]);
				   },[s3,W2],"sat");
				   var m4=$f(1,function(b){
				    $$Main_zdsforever.J(v3,b);
				   },[v3],"sat");
				   $k($hs_catchzh,[m4,$$GHCziConcziSync_forkIO2,u3]);
				  },[s3,W2],"sat");
				  var n4=$hs_forkzh(t3,r3);
				  var o4=n4[0];
				  var p4=$f(1,function(q4){
				   var $ff=webkit_dom_html_input_element_get_value(k3);
				   var r4=[q4,$ff];
				   var s4=r4[0],t4=r4[1];
				   var H4=$hs_touchzh(l3,s4);
				   $$ForeignziCziString_zdwa.C([t4,H4],function(u4){
				    var v4=u4[0],w4=u4[1];
				    var $ff=g_free(t4);
				    var x4=[v4,$ff];
				    var y4=x4[0];
				    $b($hs_tryTakeMVarzh,[s3,y4],function(z4){
				     var A4=z4[0],B4=z4[1];
				     $M(B4,function(C4){
				      switch(C4.toString()){
				      case "0":
				       var F4=$t(function(){
					$$SystemziGlibziUTFString_fromUTF.J(w4);
				       },[w4],"sat");
				       $b($hs_putMVarzh,[s3,F4,A4],function(G4){
					$r([G4,$$GHCziTuple_Z0T]);
				       },[]);break;
				      default:
				       var D4=$t(function(){
					$$SystemziGlibziUTFString_fromUTF.J(w4);
				       },[w4],"sat");
				       $b($hs_putMVarzh,[s3,D4,A4],function(E4){
					$r([E4,$$GHCziTuple_Z0T]);
				       },[]);
				      }
				     },[s3,w4,A4]);
				    },[s3,w4]);
				   },[s3,t4]);
				  },[k3,l3,s3],"a46");
				  var I4=$f(3,function(J4,K4,b){
				   p4.J(b);
				  },[p4],"sat");
				  $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,j3,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeydown2,$$GHCziTypes_False,I4,o4],function(L4){
				   var M4=L4[0];
				   var N4=$f(3,function(O4,P4,b){
				    p4.J(b);
				   },[p4],"sat");
				   $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,j3,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeyup2,$$GHCziTypes_False,N4,M4],function(Q4){
				    var R4=Q4[0];
				    var S4=$f(3,function(T4,U4,b){
				     p4.J(b);
				    },[p4],"sat");
				    $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLInputElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassUIEvent,j3,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnkeypress2,$$GHCziTypes_False,S4,R4],function(V4){
				     var W4=V4[0];
				     var X4=$f(3,function(Y4,Z4,a5){
				      $M(Z4,function(b5){
				       var c5=b5.v[0],d5=b5.v[1];
				       var $ff=webkit_dom_mouse_event_get_shift_key(c5);
				       var e5=[a5,$ff];
				       var f5=e5[0],g5=e5[1];
				       var i5=$hs_touchzh(d5,f5);
				       var h5=$hs_narrow32Intzh(g5);
				       switch(h5.toString()){
				       case "0":
					$r([i5,$$GHCziTuple_Z0T]);break;
				       default:
					$$Main_lazzyLoadzufreecell.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,n2,x2,i5);
				       }
				      },[n2,x2,a5]);
				     },[n2,x2],"sat");
				     var j5=$t(function(){
				      var k5=$t(function(){
				       $M(b3,function(l5){
					var m5=l5.v[0];
					$R(1,[m5],"Ptr");
				       },[]);
				      },[b3],"sat");
				      $$SystemziGlibziGType_typeInstanceIsA.C([k5,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLElement],function(n5){
				       switch(n5.g){
				       case 1:
					$A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLElement1);break;
				       case 2:
					$A(b3);break;
				       }
				      },[b3]);
				     },[b3],"sat");
				     $$GraphicsziUIziGtkziWebKitziDOMziEventTargetClosures_eventTargetAddEventListener1.J($$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassHTMLElement,$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassMouseEvent,j5,$$GraphicsziUIziGtkziWebKitziDOMziElement_elementOnclick2,$$GHCziTypes_False,X4,W4);
				    },[n2,x2,b3]);
				   },[n2,x2,p4,j3,b3]);
				  },[n2,x2,p4,j3,b3]);
				 },[n2,x2,k3,l3,W2,j3,b3],"a45");
				 $M(e3,function(o5){
				  switch(o5.g){
				  case 1:
				   o3.J(p5);break;
				  case 2:
				   var q5=o5.v[0];
				   var r5=$t(function(){
				    $M(q5,function(s5){
				     var t5=s5.v[0];
				     $R(1,[t5],"Ptr");
				    },[]);
				   },[q5],"sat");
				   $$SystemziGlibziGType_typeInstanceIsA.C([r5,$$GraphicsziUIziGtkziWebKitziTypes_gTypeHTMLDivElement],function(u5){
				    switch(u5.g){
				    case 1:
				     $A($$GraphicsziUIziGtkziWebKitziTypes_castToHTMLDivElement1);break;
				    case 2:
				     $M(q5,function(v5){
				      var w5=v5.v[0],x5=v5.v[1];
				      var $ff=webkit_dom_element_get_style(w5);
				      var y5=[p5,$ff];
				      var z5=y5[0],A5=y5[1];
				      var K5=$hs_touchzh(x5,z5);
				      var B5=$hs_eqAddrzh(A5,null);
				      switch(B5.g){
				      case 1:
				       var C5=$f(1,function(D5){
					var E5=$d(1,[A5],"sat");
					$r([D5,E5]);
				       },[A5],"sat");
				       $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkCSSStyleDeclaration1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,C5,K5],function(F5){
					var G5=F5[0],H5=F5[1];
					$$GraphicsziUIziGtkziWebKitziDOMziCSSStyleDeclaration_cssStyleDeclarationSetProperty1.C([$$GraphicsziUIziGtkziWebKitziTypes_zdfGObjectClassCSSStyleDeclaration,H5,$$Main$C,$$Main$B,$$GHCziTypes_ZMZN,G5],function(I5){
					 var J5=I5[0];
					 o3.J(J5);
					},[n2,x2,k3,l3,W2,j3,b3,o3]);
				       },[n2,x2,k3,l3,W2,j3,b3,o3]);break;
				      case 2:
				       $$GHCziIO_failIO.C([$$Main$m,K5],function(L5){
					var M5=L5[0];
					o3.J(M5);
				       },[n2,x2,k3,l3,W2,j3,b3,o3]);break;
				      }
				     },[n2,x2,k3,l3,W2,j3,b3,o3,p5]);break;
				    }
				   },[n2,x2,k3,l3,W2,j3,b3,o3,p5,q5]);break;
				  }
				 },[n2,x2,k3,l3,W2,j3,b3,o3,p5]);
				},[n2,x2,d3,W2,b3,e3]);break;
			       }
			      },[n2,x2,R2,d3,W2,b3,e3]);
			     },[n2,x2,R2,W2,b3]);break;
			    }
			   },[n2,x2,Y2,R2,W2]);
			  },[n2,x2,R2,W2]);break;
			 }
			},[n2,x2,T2,R2]);
		       },[n2,x2,R2]);break;
		      }
		     },[n2,x2,O2]);
		    },[n2,x2]);
		   },[n2,x2]);
		  },[n2,D2,x2]);break;
		 }
		},[X,n2,z2,x2]);
	       },[X,n2,x2]);break;
	      }
	     },[X,u2,n2]);
	    },[X,n2],"$j");
	    var N5=$hs_eqAddrzh(s2,null);
	    switch(N5.g){
	    case 1:
	     var O5=$f(1,function(P5){
	      var Q5=$d(1,[s2],"sat");
	      $r([P5,Q5]);
	     },[s2],"sat");
	     $$SystemziGlibziGObject_zdwa1.C([$$GraphicsziUIziGtkziWebKitziTypes_mkHTMLElement1,$$GraphicsziUIziGtkziGeneralziThreading_objectUnrefFromMainloop,O5,V5],function(R5){
	      var S5=R5[0],T5=R5[1];
	      var U5=$d(2,[T5],"sat");
	      t2.J(S5,U5);
	     },[X,n2,t2]);break;
	    case 2:
	     t2.J(V5,$$DataziMaybe_Nothing);break;
	    }
	   },[X,l2]);
	  },[X]);
	 },[X],"sat");
	 $$GraphicsziUIziGtkziWebKitziGHCJS_runWebGUI1.C([h2,V],function(W5){
	  var X5=W5[0];
	  $r([X5,$$GHCziTuple_Z0T]);
	 },[]);
	},[]);
       },[]);
      },[]);
     },[]);
    },[]);
   },[]);
  },[]);
 },[]);
},[],"in `main:Main'");
var $$$Main_main=$f(1,function(b){
 $$Main_main1.J(b);
},[],"at src/Main.hs:38:1");
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
var $$Main$m=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Main.hs:107:9-18");
},"a12");
var $$Main$n=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Main.hs:98:5-16");
},"a13");
var $$Main$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Main.hs:97:5-14");
},"a14");
var $$Main$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Main.hs:96:5-17");
},"a15");
var $$Main$q=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Main.hs:72:5-12");
},"a16");
var $$Main$r=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Pattern match failure in do expression at src/Main.hs:69:5-13");
},"a17");
var $$Main$t=$D(1,function(){
 $r([goog.math.Long.fromBits(2,0)]);
},"lvl");
var $$Main$u=$D(1,function(){
 $r([goog.math.Long.fromBits(1,0)]);
},"lvl1");
var $$Main$v=$T(function(){
 $$GHCziEnum_enumDeltaInteger.J($$Main$t,$$Main$u);
},"lvl2");
var $$Main$w=$D(1,function(){
 $r([goog.math.Long.fromBits(0,0)]);
},"lvl3");
var $$Main$x=$D(5,function(){
 $r([$$Main$c]);
},"lvl4");
var $$Main$y=$D(5,function(){
 $r([$$Main$f]);
},"lvl5");
var $$Main$z=$D(5,function(){
 $r([$$Main$i]);
},"lvl6");
var $$Main$A=$D(5,function(){
 $r([$$Main$l]);
},"lvl7");
var $$Main$B=$T(function(){
 $$GHCziCString_unpackCStringzh.J("200");
},"lvl8");
var $$Main$C=$T(function(){
 $$GHCziCString_unpackCStringzh.J("height");
},"lvl9");
var $$Main$D=$T(function(){
 $$GHCziCString_unpackCStringzh.J("terminal");
},"lvl10");
var $$Main$E=$T(function(){
 $$GHCziCString_unpackCStringzh.J("heading");
},"lvl11");
var $$Main$F=$T(function(){
 $$GHCziCString_unpackCStringzh.J("prime");
},"lvl12");
var $$Main$G=$T(function(){
 $$GHCziCString_unpackCStringzh.J("num");
},"lvl13");
var $$Main$H=$T(function(){
 $$GHCziCString_unpackCStringzh.J("div");
},"lvl14");
var $$Main$L=$T(function(){
 $$DataziText_unpackCStringzh.J("<b>No</b>, that is not a number</b>\n");
},"a20");
var $$Main$M=$D(3,function(){
 $r([$$Main$L]);
},"a21");
var $$Main$N=$D(5,function(){
 $r([$$Main$M]);
},"a22");
var $$Main$O=$D(5,function(){
 $r([$$Main$N]);
},"$wfail");
var $$Main$P=$F(2,function(u6,v6){
 u6.C([v6],function(w6){
  var x6=w6[0];
  $$Main_zdsforever.J(u6,x6);
 },[u6]);
},"a23");
var $$Main$Q=$T(function(){
 $$DataziText_unpackCStringzh.J("<body id=\"slideBody\"><h1 id=\"heading\">Hello ");
},"lvl17");
var $$Main$R=$D(3,function(){
 $r([$$Main$Q]);
},"lvl18");
var $$Main$S=$D(5,function(){
 $r([$$Main$R]);
},"lvl19");
var $$Main$T=$D(5,function(){
 $r([$$Main$S]);
},"lvl20");
var $$Main$U=$T(function(){
 $$DataziText_unpackCStringzh.J(" and Welcome GHCJS</h1>\n<p>As you can see GHCJS apps can also use the DOM functions\n in the WebKitGtk Gtk2Hs package</p>\n<p>Know any good prime numbers?\n<input id=\"num\" size=\"8\">\n<div id=\"prime\"></div>\n</p>\n<p>Thats it for our Hello World.  Here are some more fun GHCJS things to try</p>\n<ul><li>Check out the <a href=\"https://github.com/ghcjs/ghcjs-examples/blob/master/ghcjs-hello/src/Main.hs\">Haskell source code</a>\n for this example.  (read it carefully to find the hidden FRP)</li>\n<li>Try out the <a href=\"hterm.html\">unminified version</a></li>\n</ul>\n</body>\n");
},"lvl21");
var $$Main$V=$D(3,function(){
 $r([$$Main$U]);
},"lvl22");
var $$Main$W=$D(5,function(){
 $r([$$Main$V]);
},"lvl23");
var $$Main$X=$D(5,function(){
 $r([$$Main$W]);
},"lvl24");
var $$Main$Y=$F(2,function(y6,z6){
 $M(y6,function(A6){
  switch(A6.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var B6=A6.v[0],C6=A6.v[1],D6=A6.v[2],E6=A6.v[3];
   var F6=z6.greaterThanOrEqual(D6)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(F6.g){
   case 1:
    var X6=C6.add(z6);
    var T6=$hs_indexWord16Arrayzh(B6,X6);
    var G6=$hs_ltWordzh(T6,goog.math.Long.fromBits(55296,0));
    switch(G6.g){
    case 1:
     var H6=$hs_gtWordzh(T6,goog.math.Long.fromBits(56319,0));
     switch(H6.g){
     case 1:
      var W6=X6.add(goog.math.Long.fromBits(1,0));
      var V6=$hs_indexWord16Arrayzh(B6,W6);
      var J6=z6.add(goog.math.Long.fromBits(2,0));
      var I6=$d(1,[J6],"sat");
      var K6=$d(1,[A6,I6],"sat");
      var U6=$hs_word2Intzh(V6);
      var Q6=U6.subtract(goog.math.Long.fromBits(56320,0));
      var S6=$hs_word2Intzh(T6);
      var R6=S6.subtract(goog.math.Long.fromBits(55296,0));
      var P6=$hs_uncheckedIShiftLzh(R6,goog.math.Long.fromBits(10,0));
      var O6=P6.add(Q6);
      var N6=O6.add(goog.math.Long.fromBits(65536,0));
      var M6=$hs_chrzh(N6);
      var L6=$d(1,[M6],"sat");
      $R(3,[L6,K6],"Yield");break;
     case 2:
      var Z6=z6.add(goog.math.Long.fromBits(1,0));
      var Y6=$d(1,[Z6],"sat");
      var a7=$d(1,[A6,Y6],"sat");
      var d7=$hs_word2Intzh(T6);
      var c7=$hs_chrzh(d7);
      var b7=$d(1,[c7],"sat");
      $R(3,[b7,a7],"Yield");break;
     }break;
    case 2:
     var f7=z6.add(goog.math.Long.fromBits(1,0));
     var e7=$d(1,[f7],"sat");
     var g7=$d(1,[A6,e7],"sat");
     var j7=$hs_word2Intzh(T6);
     var i7=$hs_chrzh(j7);
     var h7=$d(1,[i7],"sat");
     $R(3,[h7,g7],"Yield");break;
    }break;
   case 2:
    $$Main$Y.J(E6,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[z6]);
},"$wnext1");
var $$Main$Z=$F(2,function(k7,l7){
 $$Main$Y.C([k7,l7],function(m7){
  switch(m7.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var n7=m7.v[0];
   $M(n7,function(o7){
    var p7=o7.v[0],q7=o7.v[1];
    $M(q7,function(r7){
     var s7=r7.v[0];
     $$Main$Z.J(p7,s7);
    },[p7]);
   },[]);break;
  case 3:
   var t7=m7.v[0],u7=m7.v[1];
   $M(u7,function(v7){
    var w7=v7.v[0],x7=v7.v[1];
    $M(x7,function(y7){
     var z7=y7.v[0];
     var A7=$t(function(){
      $$Main$Z.J(w7,z7);
     },[w7,z7],"sat");
     $R(2,[t7,A7],":");
    },[t7,w7]);
   },[t7]);break;
  }
 },[]);
},"$wunfold");
var $$Main$a1=$T(function(){
 $$TextziBlazzeziRendererziText_renderMarkupWith.J($$DataziTextziEncoding_decodeUtf8,$$Main$O);
},"lvl25");
var $$Main$b1=$F(2,function(B7,C7){
 $M(B7,function(D7){
  switch(D7.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var E7=D7.v[0],F7=D7.v[1],G7=D7.v[2],H7=D7.v[3];
   var I7=C7.greaterThanOrEqual(G7)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(I7.g){
   case 1:
    var a8=F7.add(C7);
    var W7=$hs_indexWord16Arrayzh(E7,a8);
    var J7=$hs_ltWordzh(W7,goog.math.Long.fromBits(55296,0));
    switch(J7.g){
    case 1:
     var K7=$hs_gtWordzh(W7,goog.math.Long.fromBits(56319,0));
     switch(K7.g){
     case 1:
      var Z7=a8.add(goog.math.Long.fromBits(1,0));
      var Y7=$hs_indexWord16Arrayzh(E7,Z7);
      var M7=C7.add(goog.math.Long.fromBits(2,0));
      var L7=$d(1,[M7],"sat");
      var N7=$d(1,[D7,L7],"sat");
      var X7=$hs_word2Intzh(Y7);
      var T7=X7.subtract(goog.math.Long.fromBits(56320,0));
      var V7=$hs_word2Intzh(W7);
      var U7=V7.subtract(goog.math.Long.fromBits(55296,0));
      var S7=$hs_uncheckedIShiftLzh(U7,goog.math.Long.fromBits(10,0));
      var R7=S7.add(T7);
      var Q7=R7.add(goog.math.Long.fromBits(65536,0));
      var P7=$hs_chrzh(Q7);
      var O7=$d(1,[P7],"sat");
      $R(3,[O7,N7],"Yield");break;
     case 2:
      var c8=C7.add(goog.math.Long.fromBits(1,0));
      var b8=$d(1,[c8],"sat");
      var d8=$d(1,[D7,b8],"sat");
      var g8=$hs_word2Intzh(W7);
      var f8=$hs_chrzh(g8);
      var e8=$d(1,[f8],"sat");
      $R(3,[e8,d8],"Yield");break;
     }break;
    case 2:
     var i8=C7.add(goog.math.Long.fromBits(1,0));
     var h8=$d(1,[i8],"sat");
     var j8=$d(1,[D7,h8],"sat");
     var m8=$hs_word2Intzh(W7);
     var l8=$hs_chrzh(m8);
     var k8=$d(1,[l8],"sat");
     $R(3,[k8,j8],"Yield");break;
    }break;
   case 2:
    $$Main$b1.J(H7,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[C7]);
},"$wnext2");
var $$Main$c1=$F(2,function(n8,o8){
 $$Main$b1.C([n8,o8],function(p8){
  switch(p8.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var q8=p8.v[0];
   $M(q8,function(r8){
    var s8=r8.v[0],t8=r8.v[1];
    $M(t8,function(u8){
     var v8=u8.v[0];
     $$Main$c1.J(s8,v8);
    },[s8]);
   },[]);break;
  case 3:
   var w8=p8.v[0],x8=p8.v[1];
   $M(x8,function(y8){
    var z8=y8.v[0],A8=y8.v[1];
    $M(A8,function(B8){
     var C8=B8.v[0];
     var D8=$t(function(){
      $$Main$c1.J(z8,C8);
     },[z8,C8],"sat");
     $R(2,[w8,D8],":");
    },[w8,z8]);
   },[w8]);break;
  }
 },[]);
},"$wunfold1");
var $$Main$d1=$F(2,function(E8,F8){
 $M(E8,function(G8){
  switch(G8.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var H8=G8.v[0],I8=G8.v[1],J8=G8.v[2],K8=G8.v[3];
   var L8=F8.greaterThanOrEqual(J8)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(L8.g){
   case 1:
    var d9=I8.add(F8);
    var Z8=$hs_indexWord16Arrayzh(H8,d9);
    var M8=$hs_ltWordzh(Z8,goog.math.Long.fromBits(55296,0));
    switch(M8.g){
    case 1:
     var N8=$hs_gtWordzh(Z8,goog.math.Long.fromBits(56319,0));
     switch(N8.g){
     case 1:
      var c9=d9.add(goog.math.Long.fromBits(1,0));
      var b9=$hs_indexWord16Arrayzh(H8,c9);
      var P8=F8.add(goog.math.Long.fromBits(2,0));
      var O8=$d(1,[P8],"sat");
      var Q8=$d(1,[G8,O8],"sat");
      var a9=$hs_word2Intzh(b9);
      var W8=a9.subtract(goog.math.Long.fromBits(56320,0));
      var Y8=$hs_word2Intzh(Z8);
      var X8=Y8.subtract(goog.math.Long.fromBits(55296,0));
      var V8=$hs_uncheckedIShiftLzh(X8,goog.math.Long.fromBits(10,0));
      var U8=V8.add(W8);
      var T8=U8.add(goog.math.Long.fromBits(65536,0));
      var S8=$hs_chrzh(T8);
      var R8=$d(1,[S8],"sat");
      $R(3,[R8,Q8],"Yield");break;
     case 2:
      var f9=F8.add(goog.math.Long.fromBits(1,0));
      var e9=$d(1,[f9],"sat");
      var g9=$d(1,[G8,e9],"sat");
      var j9=$hs_word2Intzh(Z8);
      var i9=$hs_chrzh(j9);
      var h9=$d(1,[i9],"sat");
      $R(3,[h9,g9],"Yield");break;
     }break;
    case 2:
     var l9=F8.add(goog.math.Long.fromBits(1,0));
     var k9=$d(1,[l9],"sat");
     var m9=$d(1,[G8,k9],"sat");
     var p9=$hs_word2Intzh(Z8);
     var o9=$hs_chrzh(p9);
     var n9=$d(1,[o9],"sat");
     $R(3,[n9,m9],"Yield");break;
    }break;
   case 2:
    $$Main$d1.J(K8,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[F8]);
},"$wnext3");
var $$Main$e1=$F(2,function(q9,r9){
 $$Main$d1.C([q9,r9],function(s9){
  switch(s9.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var t9=s9.v[0];
   $M(t9,function(u9){
    var v9=u9.v[0],w9=u9.v[1];
    $M(w9,function(x9){
     var y9=x9.v[0];
     $$Main$e1.J(v9,y9);
    },[v9]);
   },[]);break;
  case 3:
   var z9=s9.v[0],A9=s9.v[1];
   $M(A9,function(B9){
    var C9=B9.v[0],D9=B9.v[1];
    $M(D9,function(E9){
     var F9=E9.v[0];
     var G9=$t(function(){
      $$Main$e1.J(C9,F9);
     },[C9,F9],"sat");
     $R(2,[z9,G9],":");
    },[z9,C9]);
   },[z9]);break;
  }
 },[]);
},"$wunfold2");
var $$Main$f1=$F(2,function(H9,I9){
 $M(H9,function(J9){
  switch(J9.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var K9=J9.v[0],L9=J9.v[1],M9=J9.v[2],N9=J9.v[3];
   var O9=I9.greaterThanOrEqual(M9)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(O9.g){
   case 1:
    var ga=L9.add(I9);
    var ca=$hs_indexWord16Arrayzh(K9,ga);
    var P9=$hs_ltWordzh(ca,goog.math.Long.fromBits(55296,0));
    switch(P9.g){
    case 1:
     var Q9=$hs_gtWordzh(ca,goog.math.Long.fromBits(56319,0));
     switch(Q9.g){
     case 1:
      var fa=ga.add(goog.math.Long.fromBits(1,0));
      var ea=$hs_indexWord16Arrayzh(K9,fa);
      var S9=I9.add(goog.math.Long.fromBits(2,0));
      var R9=$d(1,[S9],"sat");
      var T9=$d(1,[J9,R9],"sat");
      var da=$hs_word2Intzh(ea);
      var Z9=da.subtract(goog.math.Long.fromBits(56320,0));
      var ba=$hs_word2Intzh(ca);
      var aa=ba.subtract(goog.math.Long.fromBits(55296,0));
      var Y9=$hs_uncheckedIShiftLzh(aa,goog.math.Long.fromBits(10,0));
      var X9=Y9.add(Z9);
      var W9=X9.add(goog.math.Long.fromBits(65536,0));
      var V9=$hs_chrzh(W9);
      var U9=$d(1,[V9],"sat");
      $R(3,[U9,T9],"Yield");break;
     case 2:
      var ia=I9.add(goog.math.Long.fromBits(1,0));
      var ha=$d(1,[ia],"sat");
      var ja=$d(1,[J9,ha],"sat");
      var ma=$hs_word2Intzh(ca);
      var la=$hs_chrzh(ma);
      var ka=$d(1,[la],"sat");
      $R(3,[ka,ja],"Yield");break;
     }break;
    case 2:
     var oa=I9.add(goog.math.Long.fromBits(1,0));
     var na=$d(1,[oa],"sat");
     var pa=$d(1,[J9,na],"sat");
     var sa=$hs_word2Intzh(ca);
     var ra=$hs_chrzh(sa);
     var qa=$d(1,[ra],"sat");
     $R(3,[qa,pa],"Yield");break;
    }break;
   case 2:
    $$Main$f1.J(N9,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[I9]);
},"$wnext4");
var $$Main$g1=$F(2,function(ta,ua){
 $$Main$f1.C([ta,ua],function(va){
  switch(va.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var wa=va.v[0];
   $M(wa,function(xa){
    var ya=xa.v[0],za=xa.v[1];
    $M(za,function(Aa){
     var Ba=Aa.v[0];
     $$Main$g1.J(ya,Ba);
    },[ya]);
   },[]);break;
  case 3:
   var Ca=va.v[0],Da=va.v[1];
   $M(Da,function(Ea){
    var Fa=Ea.v[0],Ga=Ea.v[1];
    $M(Ga,function(Ha){
     var Ia=Ha.v[0];
     var Ja=$t(function(){
      $$Main$g1.J(Fa,Ia);
     },[Fa,Ia],"sat");
     $R(2,[Ca,Ja],":");
    },[Ca,Fa]);
   },[Ca]);break;
  }
 },[]);
},"$wunfold3");
var $$Main$h1=$F(2,function(Ka,La){
 $M(Ka,function(Ma){
  switch(Ma.g){
  case 1:
   $R(1,[],"Done");break;
  case 2:
   var Na=Ma.v[0],Oa=Ma.v[1],Pa=Ma.v[2],Qa=Ma.v[3];
   var Ra=La.greaterThanOrEqual(Pa)?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Ra.g){
   case 1:
    var jb=Oa.add(La);
    var fb=$hs_indexWord16Arrayzh(Na,jb);
    var Sa=$hs_ltWordzh(fb,goog.math.Long.fromBits(55296,0));
    switch(Sa.g){
    case 1:
     var Ta=$hs_gtWordzh(fb,goog.math.Long.fromBits(56319,0));
     switch(Ta.g){
     case 1:
      var ib=jb.add(goog.math.Long.fromBits(1,0));
      var hb=$hs_indexWord16Arrayzh(Na,ib);
      var Va=La.add(goog.math.Long.fromBits(2,0));
      var Ua=$d(1,[Va],"sat");
      var Wa=$d(1,[Ma,Ua],"sat");
      var gb=$hs_word2Intzh(hb);
      var cb=gb.subtract(goog.math.Long.fromBits(56320,0));
      var eb=$hs_word2Intzh(fb);
      var db=eb.subtract(goog.math.Long.fromBits(55296,0));
      var bb=$hs_uncheckedIShiftLzh(db,goog.math.Long.fromBits(10,0));
      var ab=bb.add(cb);
      var Za=ab.add(goog.math.Long.fromBits(65536,0));
      var Ya=$hs_chrzh(Za);
      var Xa=$d(1,[Ya],"sat");
      $R(3,[Xa,Wa],"Yield");break;
     case 2:
      var lb=La.add(goog.math.Long.fromBits(1,0));
      var kb=$d(1,[lb],"sat");
      var mb=$d(1,[Ma,kb],"sat");
      var pb=$hs_word2Intzh(fb);
      var ob=$hs_chrzh(pb);
      var nb=$d(1,[ob],"sat");
      $R(3,[nb,mb],"Yield");break;
     }break;
    case 2:
     var rb=La.add(goog.math.Long.fromBits(1,0));
     var qb=$d(1,[rb],"sat");
     var sb=$d(1,[Ma,qb],"sat");
     var vb=$hs_word2Intzh(fb);
     var ub=$hs_chrzh(vb);
     var tb=$d(1,[ub],"sat");
     $R(3,[tb,sb],"Yield");break;
    }break;
   case 2:
    $$Main$h1.J(Qa,goog.math.Long.fromBits(0,0));break;
   }break;
  }
 },[La]);
},"$wnext5");
var $$Main$i1=$F(2,function(wb,xb){
 $$Main$h1.C([wb,xb],function(yb){
  switch(yb.g){
  case 1:
   $R(1,[],"[]");break;
  case 2:
   var zb=yb.v[0];
   $M(zb,function(Ab){
    var Bb=Ab.v[0],Cb=Ab.v[1];
    $M(Cb,function(Db){
     var Eb=Db.v[0];
     $$Main$i1.J(Bb,Eb);
    },[Bb]);
   },[]);break;
  case 3:
   var Fb=yb.v[0],Gb=yb.v[1];
   $M(Gb,function(Hb){
    var Ib=Hb.v[0],Jb=Hb.v[1];
    $M(Jb,function(Kb){
     var Lb=Kb.v[0];
     var Mb=$t(function(){
      $$Main$i1.J(Ib,Lb);
     },[Ib,Lb],"sat");
     $R(2,[Fb,Mb],":");
    },[Fb,Ib]);
   },[Fb]);break;
  }
 },[]);
},"$wunfold4");
var $$Main$j1=$T(function(){
 $$GHCziRead_zdfReadInteger5.J($$TextziParserCombinatorsziReadPrec_minPrec,$$TextziParserCombinatorsziReadP_zdfMonadPzuzdcreturn);
},"lvl26");
var $$Main$k1=$D(1,function(){
 $r([goog.math.Long.fromBits(20000000,0)]);
},"lvl27");
var $$Main$l1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("What is your name ? ");
},"lvl28");
var $$Main$m1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("(we also support threads and MVar so you can wait a few 20 seconds if you don't have a keyboard)");
},"lvl29");
var $$Main$n1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("You can get input from stdin.");
},"lvl30");
var $$Main$o1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("With GHCJS you can use stdout as you normally would.");
},"lvl31");
var $$Main$p1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("------------------------------------");
},"lvl32");
var $$Main$q1=$T(function(){
 $$GHCziCString_unpackCStringzh.J("GHCJS compiles Haskell to JavaScript");
},"lvl33");
//@ sourceURL=hs3.js
