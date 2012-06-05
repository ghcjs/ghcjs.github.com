//$$Main_tryHamlet
//$$Main_tryHamlet1
//$$Main_validatePrime
var $$TextziBlazzeziRendererziText_renderMarkupBuilder7=$t(function(){
 $$DataziText_unpackCStringzh.C(["&quot;\x00"],function(a){
  var b=a.v[0],c=a.v[1],d=a.v[2];
  var e=d<=0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(e.g){
  case 1:
   var f=d<=128?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(f.g){
   case 1:
    var g=$f(3,function(h,i,j){
     $M(i,function(k){
      var l=k.v[0],m=k.v[1],n=k.v[2],o=k.v[3];
      $M(n,function(p){
       switch(p){
       case 0:
	var x=$d(1,[l,m,0,o],"sat");
	h.C([x,j],function(y){
	 var z=y[0],A=y[1];
	 var B=$d(2,[a,A],"sat");
	 $r([z,B]);
	},[a]);break;
       default:
	var q=$t(function(){
	 var s=m+p|0;
	 var r=$d(1,[l,s,0,o],"sat");
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
      var T=G+H|0;
      var V=d+T|0;
      var K=T>=V?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(K.g){
      case 1:
       var U=V-T|0;
       var S=U>>>0;
       var R=c>>>0;
       var Q=T>>>0;
       var $ff=_hs_text_memcpy(F,Q,b,R,S);
       var L=[J,$ff];
       var M=L[0];
       var P=I-d|0;
       var O=H+d|0;
       var N=$d(1,[F,G,O,P],"sat");
       D.J(N,M);break;
      case 2:
       var Y=I-d|0;
       var X=H+d|0;
       var W=$d(1,[F,G,X,Y],"sat");
       D.J(W,J);break;
      }
     },[d,b,c,D],"$wa1");
     var Z=$f(1,function(a1){
      var b1=$f(1,function(c1){
       var d1=c1<0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(d1.g){
       case 1:
	var k1=c1>>>0;
	var j1=k1&1073741824;
	var e1=j1|0;
	switch(e1){
	case 0:
	 var i1=c1<<1;
	 var f1=$hs_newByteArrayzh(i1,a1);
	 var g1=f1[0],h1=f1[1];
	 E.J(h1,0,0,c1,g1);break;
	default:
	 $A($$TextziBlazzeziRendererziText$b);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$b);break;
       }
      },[E,a1],"$j");
      var l1=d<=120?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(l1.g){
      case 1:
       b1.J(d);break;
      case 2:
       b1.J(120);break;
      }
     },[d,E],"$wa9");
     var m1=$f(2,function(n1,o1){
      $M(n1,function(p1){
       var q1=p1.v[0],r1=p1.v[1],s1=p1.v[2],t1=p1.v[3];
       var u1=d<=t1?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(u1.g){
       case 1:
	$M(s1,function(v1){
	 switch(v1){
	 case 0:
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
 $$DataziText_unpackCStringzh.C(["&amp;\x00"],function(E1){
  var F1=E1.v[0],G1=E1.v[1],H1=E1.v[2];
  var I1=H1<=0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(I1.g){
  case 1:
   var J1=H1<=128?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(J1.g){
   case 1:
    var K1=$f(3,function(L1,M1,N1){
     $M(M1,function(O1){
      var P1=O1.v[0],Q1=O1.v[1],R1=O1.v[2],S1=O1.v[3];
      $M(R1,function(T1){
       switch(T1){
       case 0:
	var b2=$d(1,[P1,Q1,0,S1],"sat");
	L1.C([b2,N1],function(c2){
	 var d2=c2[0],e2=c2[1];
	 var f2=$d(2,[E1,e2],"sat");
	 $r([d2,f2]);
	},[E1]);break;
       default:
	var U1=$t(function(){
	 var W1=Q1+T1|0;
	 var V1=$d(1,[P1,W1,0,S1],"sat");
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
      var x2=k2+l2|0;
      var z2=H1+x2|0;
      var o2=x2>=z2?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(o2.g){
      case 1:
       var y2=z2-x2|0;
       var w2=y2>>>0;
       var v2=G1>>>0;
       var u2=x2>>>0;
       var $ff=_hs_text_memcpy(j2,u2,F1,v2,w2);
       var p2=[n2,$ff];
       var q2=p2[0];
       var t2=m2-H1|0;
       var s2=l2+H1|0;
       var r2=$d(1,[j2,k2,s2,t2],"sat");
       h2.J(r2,q2);break;
      case 2:
       var C2=m2-H1|0;
       var B2=l2+H1|0;
       var A2=$d(1,[j2,k2,B2,C2],"sat");
       h2.J(A2,n2);break;
      }
     },[H1,F1,G1,h2],"$wa1");
     var D2=$f(1,function(E2){
      var F2=$f(1,function(G2){
       var H2=G2<0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(H2.g){
       case 1:
	var O2=G2>>>0;
	var N2=O2&1073741824;
	var I2=N2|0;
	switch(I2){
	case 0:
	 var M2=G2<<1;
	 var J2=$hs_newByteArrayzh(M2,E2);
	 var K2=J2[0],L2=J2[1];
	 i2.J(L2,0,0,G2,K2);break;
	default:
	 $A($$TextziBlazzeziRendererziText$c);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$c);break;
       }
      },[i2,E2],"$j");
      var P2=H1<=120?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(P2.g){
      case 1:
       F2.J(H1);break;
      case 2:
       F2.J(120);break;
      }
     },[H1,i2],"$wa9");
     var Q2=$f(2,function(R2,S2){
      $M(R2,function(T2){
       var U2=T2.v[0],V2=T2.v[1],W2=T2.v[2],X2=T2.v[3];
       var Y2=H1<=X2?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(Y2.g){
       case 1:
	$M(W2,function(Z2){
	 switch(Z2){
	 case 0:
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
 $$DataziText_unpackCStringzh.C(["&#39;\x00"],function(i3){
  var j3=i3.v[0],k3=i3.v[1],l3=i3.v[2];
  var m3=l3<=0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(m3.g){
  case 1:
   var n3=l3<=128?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(n3.g){
   case 1:
    var o3=$f(3,function(p3,q3,r3){
     $M(q3,function(s3){
      var t3=s3.v[0],u3=s3.v[1],v3=s3.v[2],w3=s3.v[3];
      $M(v3,function(x3){
       switch(x3){
       case 0:
	var F3=$d(1,[t3,u3,0,w3],"sat");
	p3.C([F3,r3],function(G3){
	 var H3=G3[0],I3=G3[1];
	 var J3=$d(2,[i3,I3],"sat");
	 $r([H3,J3]);
	},[i3]);break;
       default:
	var y3=$t(function(){
	 var A3=u3+x3|0;
	 var z3=$d(1,[t3,A3,0,w3],"sat");
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
      var b4=O3+P3|0;
      var d4=l3+b4|0;
      var S3=b4>=d4?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(S3.g){
      case 1:
       var c4=d4-b4|0;
       var a4=c4>>>0;
       var Z3=k3>>>0;
       var Y3=b4>>>0;
       var $ff=_hs_text_memcpy(N3,Y3,j3,Z3,a4);
       var T3=[R3,$ff];
       var U3=T3[0];
       var X3=Q3-l3|0;
       var W3=P3+l3|0;
       var V3=$d(1,[N3,O3,W3,X3],"sat");
       L3.J(V3,U3);break;
      case 2:
       var g4=Q3-l3|0;
       var f4=P3+l3|0;
       var e4=$d(1,[N3,O3,f4,g4],"sat");
       L3.J(e4,R3);break;
      }
     },[l3,j3,k3,L3],"$wa1");
     var h4=$f(1,function(i4){
      var j4=$f(1,function(k4){
       var l4=k4<0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(l4.g){
       case 1:
	var s4=k4>>>0;
	var r4=s4&1073741824;
	var m4=r4|0;
	switch(m4){
	case 0:
	 var q4=k4<<1;
	 var n4=$hs_newByteArrayzh(q4,i4);
	 var o4=n4[0],p4=n4[1];
	 M3.J(p4,0,0,k4,o4);break;
	default:
	 $A($$TextziBlazzeziRendererziText$d);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$d);break;
       }
      },[M3,i4],"$j");
      var t4=l3<=120?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(t4.g){
      case 1:
       j4.J(l3);break;
      case 2:
       j4.J(120);break;
      }
     },[l3,M3],"$wa9");
     var u4=$f(2,function(v4,w4){
      $M(v4,function(x4){
       var y4=x4.v[0],z4=x4.v[1],A4=x4.v[2],B4=x4.v[3];
       var C4=l3<=B4?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(C4.g){
       case 1:
	$M(A4,function(D4){
	 switch(D4){
	 case 0:
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
 $$DataziText_unpackCStringzh.C(["&lt;\x00"],function(M4){
  var N4=M4.v[0],O4=M4.v[1],P4=M4.v[2];
  var Q4=P4<=0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Q4.g){
  case 1:
   var R4=P4<=128?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(R4.g){
   case 1:
    var S4=$f(3,function(T4,U4,V4){
     $M(U4,function(W4){
      var X4=W4.v[0],Y4=W4.v[1],Z4=W4.v[2],a5=W4.v[3];
      $M(Z4,function(b5){
       switch(b5){
       case 0:
	var j5=$d(1,[X4,Y4,0,a5],"sat");
	T4.C([j5,V4],function(k5){
	 var l5=k5[0],m5=k5[1];
	 var n5=$d(2,[M4,m5],"sat");
	 $r([l5,n5]);
	},[M4]);break;
       default:
	var c5=$t(function(){
	 var e5=Y4+b5|0;
	 var d5=$d(1,[X4,e5,0,a5],"sat");
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
      var F5=s5+t5|0;
      var H5=P4+F5|0;
      var w5=F5>=H5?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(w5.g){
      case 1:
       var G5=H5-F5|0;
       var E5=G5>>>0;
       var D5=O4>>>0;
       var C5=F5>>>0;
       var $ff=_hs_text_memcpy(r5,C5,N4,D5,E5);
       var x5=[v5,$ff];
       var y5=x5[0];
       var B5=u5-P4|0;
       var A5=t5+P4|0;
       var z5=$d(1,[r5,s5,A5,B5],"sat");
       p5.J(z5,y5);break;
      case 2:
       var K5=u5-P4|0;
       var J5=t5+P4|0;
       var I5=$d(1,[r5,s5,J5,K5],"sat");
       p5.J(I5,v5);break;
      }
     },[P4,N4,O4,p5],"$wa1");
     var L5=$f(1,function(M5){
      var N5=$f(1,function(O5){
       var P5=O5<0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(P5.g){
       case 1:
	var W5=O5>>>0;
	var V5=W5&1073741824;
	var Q5=V5|0;
	switch(Q5){
	case 0:
	 var U5=O5<<1;
	 var R5=$hs_newByteArrayzh(U5,M5);
	 var S5=R5[0],T5=R5[1];
	 q5.J(T5,0,0,O5,S5);break;
	default:
	 $A($$TextziBlazzeziRendererziText$e);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$e);break;
       }
      },[q5,M5],"$j");
      var X5=P4<=120?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(X5.g){
      case 1:
       N5.J(P4);break;
      case 2:
       N5.J(120);break;
      }
     },[P4,q5],"$wa9");
     var Y5=$f(2,function(Z5,a6){
      $M(Z5,function(b6){
       var c6=b6.v[0],d6=b6.v[1],e6=b6.v[2],f6=b6.v[3];
       var g6=P4<=f6?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(g6.g){
       case 1:
	$M(e6,function(h6){
	 switch(h6){
	 case 0:
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
 $$DataziText_unpackCStringzh.C(["&gt;\x00"],function(q6){
  var r6=q6.v[0],s6=q6.v[1],t6=q6.v[2];
  var u6=t6<=0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(u6.g){
  case 1:
   var v6=t6<=128?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(v6.g){
   case 1:
    var w6=$f(3,function(x6,y6,z6){
     $M(y6,function(A6){
      var B6=A6.v[0],C6=A6.v[1],D6=A6.v[2],E6=A6.v[3];
      $M(D6,function(F6){
       switch(F6){
       case 0:
	var N6=$d(1,[B6,C6,0,E6],"sat");
	x6.C([N6,z6],function(O6){
	 var P6=O6[0],Q6=O6[1];
	 var R6=$d(2,[q6,Q6],"sat");
	 $r([P6,R6]);
	},[q6]);break;
       default:
	var G6=$t(function(){
	 var I6=C6+F6|0;
	 var H6=$d(1,[B6,I6,0,E6],"sat");
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
      var j7=W6+X6|0;
      var l7=t6+j7|0;
      var a7=j7>=l7?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(a7.g){
      case 1:
       var k7=l7-j7|0;
       var i7=k7>>>0;
       var h7=s6>>>0;
       var g7=j7>>>0;
       var $ff=_hs_text_memcpy(V6,g7,r6,h7,i7);
       var b7=[Z6,$ff];
       var c7=b7[0];
       var f7=Y6-t6|0;
       var e7=X6+t6|0;
       var d7=$d(1,[V6,W6,e7,f7],"sat");
       T6.J(d7,c7);break;
      case 2:
       var o7=Y6-t6|0;
       var n7=X6+t6|0;
       var m7=$d(1,[V6,W6,n7,o7],"sat");
       T6.J(m7,Z6);break;
      }
     },[t6,r6,s6,T6],"$wa1");
     var p7=$f(1,function(q7){
      var r7=$f(1,function(s7){
       var t7=s7<0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(t7.g){
       case 1:
	var A7=s7>>>0;
	var z7=A7&1073741824;
	var u7=z7|0;
	switch(u7){
	case 0:
	 var y7=s7<<1;
	 var v7=$hs_newByteArrayzh(y7,q7);
	 var w7=v7[0],x7=v7[1];
	 U6.J(x7,0,0,s7,w7);break;
	default:
	 $A($$TextziBlazzeziRendererziText$f);
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText$f);break;
       }
      },[U6,q7],"$j");
      var B7=t6<=120?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(B7.g){
      case 1:
       r7.J(t6);break;
      case 2:
       r7.J(120);break;
      }
     },[t6,U6],"$wa9");
     var C7=$f(2,function(D7,E7){
      $M(D7,function(F7){
       var G7=F7.v[0],H7=F7.v[1],I7=F7.v[2],J7=F7.v[3];
       var K7=t6<=J7?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(K7.g){
       case 1:
	$M(I7,function(L7){
	 switch(L7){
	 case 0:
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
  switch(X7){
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
   var W8=a8-65536|0;
   var b9=W8>>>0;
   var a9=b9&1023;
   var Z8=a9|0;
   var Y8=Z8+56320|0;
   var X8=Y8>>>0;
   var c8=X8&65535;
   var V8=W8>>10;
   var U8=V8+55296|0;
   var T8=U8>>>0;
   var d8=T8&65535;
   var Z7=$t(function(){
    $r(a8<65536?$$GHCziTypes_True:$$GHCziTypes_False);
   },[a8],"lvl9");
   var b8=$f(1,function(e8){
    var f8=$hs_newByteArrayzh(240,e8);
    var g8=f8[0],h8=f8[1];
    $M(Z7,function(i8){
     switch(i8.g){
     case 1:
      var l8=$hs_writeWord16Arrayzh(h8,0,d8,g8);
      var k8=$hs_writeWord16Arrayzh(h8,1,c8,l8);
      var j8=$d(1,[h8,0,2,118],"sat");
      Y7.J(j8,k8);break;
     case 2:
      var p8=a8>>>0;
      var o8=p8&65535;
      var n8=$hs_writeWord16Arrayzh(h8,0,o8,g8);
      var m8=$d(1,[h8,0,1,119],"sat");
      Y7.J(m8,n8);break;
     }
    },[Y7,a8,c8,d8,h8,g8]);
   },[Y7,a8,c8,d8,Z7],"$wa9");
   var q8=$f(2,function(r8,s8){
    $M(r8,function(t8){
     var u8=t8.v[0],v8=t8.v[1],w8=t8.v[2],x8=t8.v[3];
     var y8=2<=x8?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(y8.g){
     case 1:
      $M(w8,function(z8){
       switch(z8){
       case 0:
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
      var M8=v8+w8|0;
      $M(Z7,function(F8){
       switch(F8.g){
       case 1:
	var L8=$hs_writeWord16Arrayzh(u8,M8,d8,s8);
	var K8=M8+1|0;
	var J8=$hs_writeWord16Arrayzh(u8,K8,c8,L8);
	var I8=x8-2|0;
	var H8=w8+2|0;
	var G8=$d(1,[u8,v8,H8,I8],"sat");
	Y7.J(G8,J8);break;
       case 2:
	var S8=a8>>>0;
	var R8=S8&65535;
	var Q8=$hs_writeWord16Arrayzh(u8,M8,R8,s8);
	var P8=x8-1|0;
	var O8=w8+1|0;
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
    $$TextziBlazzeziRendererziText$s.J(u9);
   },[]);break;
  case 3:
   var v9=r9.v[0];
   $M(v9,function(w9){
    var x9=w9.v[0],y9=w9.v[1],z9=w9.v[2];
    var B9=y9+z9|0;
    var A9=$f(1,function(C9){
     var D9=C9>=B9?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(D9.g){
     case 1:
      var L9=$hs_indexWord16Arrayzh(x9,C9);
      var E9=L9>=55296?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(E9.g){
      case 1:
       var F9=$t(function(){
	var G9=C9+1|0;
	A9.J(G9);
       },[C9,A9],"a2");
       var K9=L9|0;
       var I9=$hs_chrzh(K9);
       var H9=$f(1,function(J9){
	$$TextziBlazzeziRendererziText_zdwa.J(I9,F9,J9);
       },[F9,I9],"sat");
       $A(H9);break;
      case 2:
       var M9=L9<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(M9.g){
       case 1:
	var N9=$t(function(){
	 var O9=C9+1|0;
	 A9.J(O9);
	},[C9,A9],"a2");
	var S9=L9|0;
	var Q9=$hs_chrzh(S9);
	var P9=$f(1,function(R9){
	 $$TextziBlazzeziRendererziText_zdwa.J(Q9,N9,R9);
	},[N9,Q9],"sat");
	$A(P9);break;
       case 2:
	var T9=$t(function(){
	 var U9=C9+2|0;
	 A9.J(U9);
	},[C9,A9],"a2");
	var ga=C9+1|0;
	var fa=$hs_indexWord16Arrayzh(x9,ga);
	var ea=fa|0;
	var ba=ea-56320|0;
	var da=L9|0;
	var ca=da-55296|0;
	var aa=ca<<10;
	var Z9=aa+ba|0;
	var Y9=Z9+65536|0;
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
    var ma=la<=0?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(ma.g){
    case 1:
     var na=la<=128?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(na.g){
     case 1:
      var oa=$f(3,function(pa,qa,ra){
       $M(qa,function(sa){
	var ta=sa.v[0],ua=sa.v[1],va=sa.v[2],wa=sa.v[3];
	$M(va,function(xa){
	 switch(xa){
	 case 0:
	  var Fa=$d(1,[ta,ua,0,wa],"sat");
	  pa.C([Fa,ra],function(Ga){
	   var Ha=Ga[0],Ia=Ga[1];
	   var Ja=$d(2,[ia,Ia],"sat");
	   $r([Ha,Ja]);
	  },[ia]);break;
	 default:
	  var ya=$t(function(){
	   var Aa=ua+xa|0;
	   var za=$d(1,[ta,Aa,0,wa],"sat");
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
	var bb=Oa+Pa|0;
	var db=la+bb|0;
	var Sa=bb>=db?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(Sa.g){
	case 1:
	 var cb=db-bb|0;
	 var ab=cb>>>0;
	 var Za=ka>>>0;
	 var Ya=bb>>>0;
	 var $ff=_hs_text_memcpy(Na,Ya,ja,Za,ab);
	 var Ta=[Ra,$ff];
	 var Ua=Ta[0];
	 var Xa=Qa-la|0;
	 var Wa=Pa+la|0;
	 var Va=$d(1,[Na,Oa,Wa,Xa],"sat");
	 La.J(Va,Ua);break;
	case 2:
	 var gb=Qa-la|0;
	 var fb=Pa+la|0;
	 var eb=$d(1,[Na,Oa,fb,gb],"sat");
	 La.J(eb,Ra);break;
	}
       },[la,ja,ka,La],"$wa1");
       var hb=$f(1,function(ib){
	var jb=$f(1,function(kb){
	 var lb=kb<0?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(lb.g){
	 case 1:
	  var sb=kb>>>0;
	  var rb=sb&1073741824;
	  var mb=rb|0;
	  switch(mb){
	  case 0:
	   var qb=kb<<1;
	   var nb=$hs_newByteArrayzh(qb,ib);
	   var ob=nb[0],pb=nb[1];
	   Ma.J(pb,0,0,kb,ob);break;
	  default:
	   $A($$TextziBlazzeziRendererziText$r);
	  }break;
	 case 2:
	  $A($$TextziBlazzeziRendererziText$r);break;
	 }
	},[Ma,ib],"$j");
	var tb=la<=120?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(tb.g){
	case 1:
	 jb.J(la);break;
	case 2:
	 jb.J(120);break;
	}
       },[la,Ma],"$wa9");
       var ub=$f(2,function(vb,wb){
	$M(vb,function(xb){
	 var yb=xb.v[0],zb=xb.v[1],Ab=xb.v[2],Bb=xb.v[3];
	 var Cb=la<=Bb?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Cb.g){
	 case 1:
	  $M(Ab,function(Db){
	   switch(Db){
	   case 0:
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
      var Xb=Wb<=0?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Xb.g){
      case 1:
       var Zb=Vb+Wb|0;
       var Yb=$f(2,function(ac,bc){
	var cc=bc>=Zb?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(cc.g){
	case 1:
	 var oc=$hs_indexWord16Arrayzh(Ub,bc);
	 var dc=oc>=55296?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(dc.g){
	 case 1:
	  var ec=ac>=1?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(ec.g){
	  case 1:
	   var gc=bc+1|0;
	   var fc=ac+1|0;
	   Yb.J(fc,gc);break;
	  case 2:
	   $R(1,[],"False");break;
	  }break;
	 case 2:
	  var hc=oc<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(hc.g){
	  case 1:
	   var ic=ac>=1?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(ic.g){
	   case 1:
	    var kc=bc+1|0;
	    var jc=ac+1|0;
	    Yb.J(jc,kc);break;
	   case 2:
	    $R(1,[],"False");break;
	   }break;
	  case 2:
	   var lc=ac>=1?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(lc.g){
	   case 1:
	    var nc=bc+2|0;
	    var mc=ac+1|0;
	    Yb.J(mc,nc);break;
	   case 2:
	    $R(1,[],"False");break;
	   }break;
	  }break;
	 }break;
	case 2:
	 $M(ac,function(pc){
	  switch(pc){
	  case 1:
	   $R(2,[],"True");break;
	  default:
	   $R(1,[],"False");
	  }
	 },[]);break;
	}
       },[Zb,Ub],"$wloop");
       Yb.C([0,Vb],function(qc){
	switch(qc.g){
	case 1:
	 $M(Sb,function(rc){
	  var sc=rc.v[0],tc=rc.v[1],uc=rc.v[2];
	  $M(Wb,function(vc){
	   switch(vc){
	   case 1:
	    var uh=$t(function(){
	     var vh=$hs_indexWord16Arrayzh(Ub,Vb);
	     $R(1,[vh],"W16#");
	    },[Vb,Ub],"c");
	    var wh=$f(1,function(xh){
	     var yh=xh>=uc?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(yh.g){
	     case 1:
	      $M(uh,function(zh){
	       var Ah=zh.v[0];
	       var Hh=tc+xh|0;
	       var Gh=$hs_indexWord16Arrayzh(sc,Hh);
	       var Bh=Gh==Ah?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Bh.g){
	       case 1:
		var Ch=xh+1|0;
		wh.J(Ch);break;
	       case 2:
		var Dh=$t(function(){
		 var Eh=xh+1|0;
		 wh.J(Eh);
		},[xh,wh],"sat");
		var Fh=$d(1,[xh],"sat");
		$R(2,[Fh,Dh],":");break;
	       }
	      },[sc,tc,xh,wh]);break;
	     case 2:
	      $R(1,[],"[]");break;
	     }
	    },[uc,sc,tc,uh],"$wloop1");
	    wh.C([0],function(Ih){
	     switch(Ih.g){
	     case 1:
	      var Jh=uc<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Jh.g){
	      case 1:
	       var Kh=uc<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Kh.g){
	       case 1:
		var Lh=$f(3,function(Mh,Nh,Oh){
		 $M(Nh,function(Ph){
		  var Qh=Ph.v[0],Rh=Ph.v[1],Sh=Ph.v[2],Th=Ph.v[3];
		  $M(Sh,function(Uh){
		   switch(Uh){
		   case 0:
		    var ci=$d(1,[Qh,Rh,0,Th],"sat");
		    Mh.C([ci,Oh],function(di){
		     var ei=di[0],fi=di[1];
		     var gi=$d(2,[rc,fi],"sat");
		     $r([ei,gi]);
		    },[rc]);break;
		   default:
		    var Vh=$t(function(){
		     var Xh=Rh+Uh|0;
		     var Wh=$d(1,[Qh,Xh,0,Th],"sat");
		     Mh.C([Wh,Oh],function(Yh){
		      var Zh=Yh[1];
		      $R(2,[rc,Zh],":");
		     },[rc]);
		    },[rc,Oh,Qh,Rh,Uh,Th,Mh],"sat");
		    var ai=$d(1,[Qh,Rh,Uh],"sat");
		    var bi=$d(2,[ai,Vh],"sat");
		    $r([Oh,bi]);
		   }
		  },[rc,Oh,Qh,Rh,Th,Mh]);
		 },[rc,Oh,Mh]);
		},[rc],"sat");
		$A(Lh);break;
	       case 2:
		var hi=$f(1,function(ii){
		 var ji=$f(5,function(ki,li,mi,ni,oi){
		  var yi=li+mi|0;
		  var Ai=uc+yi|0;
		  var pi=yi>=Ai?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(pi.g){
		  case 1:
		   var zi=Ai-yi|0;
		   var xi=zi>>>0;
		   var wi=tc>>>0;
		   var vi=yi>>>0;
		   var $ff=_hs_text_memcpy(ki,vi,sc,wi,xi);
		   var qi=[oi,$ff];
		   var ri=qi[0];
		   var ui=ni-uc|0;
		   var ti=mi+uc|0;
		   var si=$d(1,[ki,li,ti,ui],"sat");
		   ii.J(si,ri);break;
		  case 2:
		   var Di=ni-uc|0;
		   var Ci=mi+uc|0;
		   var Bi=$d(1,[ki,li,Ci,Di],"sat");
		   ii.J(Bi,oi);break;
		  }
		 },[uc,sc,tc,ii],"$wa1");
		 var Ei=$f(1,function(Fi){
		  var Gi=$f(1,function(Hi){
		   var Ii=Hi<0?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(Ii.g){
		   case 1:
		    var Pi=Hi>>>0;
		    var Oi=Pi&1073741824;
		    var Ji=Oi|0;
		    switch(Ji){
		    case 0:
		     var Ni=Hi<<1;
		     var Ki=$hs_newByteArrayzh(Ni,Fi);
		     var Li=Ki[0],Mi=Ki[1];
		     ji.J(Mi,0,0,Hi,Li);break;
		    default:
		     $A($$TextziBlazzeziRendererziText$o);
		    }break;
		   case 2:
		    $A($$TextziBlazzeziRendererziText$o);break;
		   }
		  },[ji,Fi],"$j");
		  var Qi=uc<=120?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Qi.g){
		  case 1:
		   Gi.J(uc);break;
		  case 2:
		   Gi.J(120);break;
		  }
		 },[uc,ji],"$wa9");
		 var Ri=$f(2,function(Si,Ti){
		  $M(Si,function(Ui){
		   var Vi=Ui.v[0],Wi=Ui.v[1],Xi=Ui.v[2],Yi=Ui.v[3];
		   var Zi=uc<=Yi?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(Zi.g){
		   case 1:
		    $M(Xi,function(aj){
		     switch(aj){
		     case 0:
		      Ei.J(Ti);break;
		     default:
		      var bj=$t(function(){
		       Ei.C([Ti],function(cj){
			var dj=cj[1];
			$A(dj);
		       },[]);
		      },[Ei,Ti],"sat");
		      var ej=$d(1,[Vi,Wi,aj],"sat");
		      var fj=$d(2,[ej,bj],"sat");
		      $r([Ti,fj]);
		     }
		    },[Ei,Ti,Vi,Wi]);break;
		   case 2:
		    ji.J(Vi,Wi,Xi,Yi,Ti);break;
		   }
		  },[uc,ji,Ei,Ti]);
		 },[uc,ji,Ei],"sat");
		 $A(Ri);
		},[uc,sc,tc],"sat");
		$A(hi);break;
	       }break;
	      case 2:
	       $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	      }break;
	     case 2:
	      $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	     }
	    },[uc,sc,tc,rc]);break;
	   default:
	    var ld=uc-vc|0;
	    var wc=ld<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(wc.g){
	    case 1:
	     var yc=vc-1|0;
	     var xc=$t(function(){
	      var Ac=Vb+yc|0;
	      var zc=$hs_indexWord16Arrayzh(Ub,Ac);
	      $R(1,[zc],"W16#");
	     },[Vb,Ub,yc],"z4");
	     var Bc=$t(function(){
	      var Cc=$f(3,function(Dc,Ec,Fc){
	       var Gc=Dc>=yc?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Gc.g){
	       case 1:
		var Vc=Vb+Dc|0;
		var Sc=$hs_indexWord16Arrayzh(Ub,Vc);
		var Uc=Sc&63;
		var Tc=Uc|0;
		var $ff=hs_uncheckedShiftL64(goog.math.Long.fromBits(1,0),Tc);
		var Hc=[$$GHCziPrim_realWorldzh,$ff];
		var Ic=Hc[1];
		var $ff=hs_or64(Ec,Ic);
		var Jc=[$$GHCziPrim_realWorldzh,$ff];
		var Kc=Jc[1];
		$M(xc,function(Lc){
		 var Mc=Lc.v[0];
		 var Nc=Sc==Mc?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Nc.g){
		 case 1:
		  var Oc=Dc+1|0;
		  Cc.J(Oc,Kc,Fc);break;
		 case 2:
		  var Rc=vc-Dc|0;
		  var Qc=Rc-2|0;
		  var Pc=Dc+1|0;
		  Cc.J(Pc,Kc,Qc);break;
		 }
		},[vc,Dc,Sc,Cc,Kc,Fc]);break;
	       case 2:
		$M(xc,function(Wc){
		 var Xc=Wc.v[0];
		 var fd=Xc&63;
		 var ed=fd|0;
		 var $ff=hs_uncheckedShiftL64(goog.math.Long.fromBits(1,0),ed);
		 var Yc=[$$GHCziPrim_realWorldzh,$ff];
		 var Zc=Yc[1];
		 var $ff=hs_or64(Ec,Zc);
		 var ad=[$$GHCziPrim_realWorldzh,$ff];
		 var bd=ad[1];
		 var cd=$d(1,[Fc],"sat");
		 var dd=$d(1,[bd],"sat");
		 $R(1,[dd,cd],":*:");
		},[Ec,Fc]);break;
	       }
	      },[Vb,Ub,vc,yc,xc],"$wbuildTable");
	      var jd=vc-2|0;
	      Cc.C([0,goog.math.Long.fromBits(0,0),jd],function(gd){
	       var hd=gd.v[0],id=gd.v[1];
	       $R(1,[hd,id],"(,)");
	      },[]);
	     },[Vb,Ub,vc,yc,xc],"ds");
	     var kd=$f(1,function(md){
	      var nd=md>ld?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(nd.g){
	      case 1:
	       $M(xc,function(od){
		var pd=od.v[0];
		var xe=md+yc|0;
		var we=tc+xe|0;
		var rd=$hs_indexWord16Arrayzh(sc,we);
		var qd=$t(function(){
		 $M(Bc,function(sd){
		  var td=sd.v[0],ud=sd.v[1];
		  $M(td,function(vd){
		   var wd=vd.v[0];
		   var Rd=md+vc|0;
		   var xd=Rd==uc?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(xd.g){
		   case 1:
		    var Qd=tc+Rd|0;
		    var Pd=$hs_indexWord16Arrayzh(sc,Qd);
		    var Od=Pd&63;
		    var Nd=Od|0;
		    var $ff=hs_uncheckedShiftL64(goog.math.Long.fromBits(1,0),Nd);
		    var yd=[$$GHCziPrim_realWorldzh,$ff];
		    var zd=yd[1];
		    var $ff=hs_and64(wd,zd);
		    var Ad=[$$GHCziPrim_realWorldzh,$ff];
		    var Bd=Ad[1];
		    var $ff=hs_eqWord64(Bd,goog.math.Long.fromBits(0,0));
		    var Cd=[$$GHCziPrim_realWorldzh,$ff];
		    var Dd=Cd[1];
		    $M(Dd,function(Ed){
		     switch(Ed){
		     case 0:
		      var Hd=rd==pd?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(Hd.g){
		      case 1:
		       var Id=md+1|0;
		       kd.J(Id);break;
		      case 2:
		       $M(ud,function(Jd){
			var Kd=Jd.v[0];
			var Md=Kd+1|0;
			var Ld=md+Md|0;
			kd.J(Ld);
		       },[md,kd]);break;
		      }break;
		     default:
		      var Gd=vc+1|0;
		      var Fd=md+Gd|0;
		      kd.J(Fd);
		     }
		    },[vc,md,kd,rd,pd,ud]);break;
		   case 2:
		    var $ff=hs_uncheckedShiftL64(goog.math.Long.fromBits(1,0),0);
		    var Sd=[$$GHCziPrim_realWorldzh,$ff];
		    var Td=Sd[1];
		    var $ff=hs_and64(wd,Td);
		    var Ud=[$$GHCziPrim_realWorldzh,$ff];
		    var Vd=Ud[1];
		    var $ff=hs_eqWord64(Vd,goog.math.Long.fromBits(0,0));
		    var Wd=[$$GHCziPrim_realWorldzh,$ff];
		    var Xd=Wd[1];
		    $M(Xd,function(Yd){
		     switch(Yd){
		     case 0:
		      var be=rd==pd?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(be.g){
		      case 1:
		       var ce=md+1|0;
		       kd.J(ce);break;
		      case 2:
		       $M(ud,function(de){
			var ee=de.v[0];
			var ge=ee+1|0;
			var fe=md+ge|0;
			kd.J(fe);
		       },[md,kd]);break;
		      }break;
		     default:
		      var ae=vc+1|0;
		      var Zd=md+ae|0;
		      kd.J(Zd);
		     }
		    },[vc,md,kd,rd,pd,ud]);break;
		   }
		  },[uc,vc,md,sc,tc,kd,rd,pd,ud]);
		 },[uc,vc,md,sc,tc,kd,rd,pd]);
		},[uc,vc,Bc,md,sc,tc,kd,rd,pd],"$w$j5");
		var he=rd==pd?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(he.g){
		case 1:
		 $A(qd);break;
		case 2:
		 var ie=$f(1,function(je){
		  var ke=je>=yc?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(ke.g){
		  case 1:
		   var re=Vb+je|0;
		   var oe=$hs_indexWord16Arrayzh(Ub,re);
		   var qe=md+je|0;
		   var pe=tc+qe|0;
		   var ne=$hs_indexWord16Arrayzh(sc,pe);
		   var le=ne==oe?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(le.g){
		   case 1:
		    $R(1,[],"False");break;
		   case 2:
		    var me=je+1|0;
		    ie.J(me);break;
		   }break;
		  case 2:
		   $R(2,[],"True");break;
		  }
		 },[Vb,Ub,yc,md,sc,tc],"$wcandidateMatch");
		 ie.C([0],function(se){
		  switch(se.g){
		  case 1:
		   $A(qd);break;
		  case 2:
		   var te=$t(function(){
		    var ue=md+vc|0;
		    kd.J(ue);
		   },[vc,md,kd],"sat");
		   var ve=$d(1,[md],"sat");
		   $R(2,[ve,te],":");break;
		  }
		 },[uc,vc,Bc,md,sc,tc,kd,rd,pd,qd]);break;
		}
	       },[Vb,Ub,uc,vc,yc,Bc,md,sc,tc,kd]);break;
	      case 2:
	       $R(1,[],"[]");break;
	      }
	     },[Vb,Ub,uc,vc,ld,yc,xc,Bc,sc,tc],"$wscan");
	     kd.C([0],function(ye){
	      switch(ye.g){
	      case 1:
	       var ze=uc<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(ze.g){
	       case 1:
		var Ae=uc<=128?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Ae.g){
		case 1:
		 var Be=$f(3,function(Ce,De,Ee){
		  $M(De,function(Fe){
		   var Ge=Fe.v[0],He=Fe.v[1],Ie=Fe.v[2],Je=Fe.v[3];
		   $M(Ie,function(Ke){
		    switch(Ke){
		    case 0:
		     var Se=$d(1,[Ge,He,0,Je],"sat");
		     Ce.C([Se,Ee],function(Te){
		      var Ue=Te[0],Ve=Te[1];
		      var We=$d(2,[rc,Ve],"sat");
		      $r([Ue,We]);
		     },[rc]);break;
		    default:
		     var Le=$t(function(){
		      var Ne=He+Ke|0;
		      var Me=$d(1,[Ge,Ne,0,Je],"sat");
		      Ce.C([Me,Ee],function(Oe){
		       var Pe=Oe[1];
		       $R(2,[rc,Pe],":");
		      },[rc]);
		     },[Ee,Ge,He,Ke,Je,Ce,rc],"sat");
		     var Qe=$d(1,[Ge,He,Ke],"sat");
		     var Re=$d(2,[Qe,Le],"sat");
		     $r([Ee,Re]);
		    }
		   },[Ee,Ge,He,Je,Ce,rc]);
		  },[Ee,Ce,rc]);
		 },[rc],"sat");
		 $A(Be);break;
		case 2:
		 var Xe=$f(1,function(Ye){
		  var Ze=$f(5,function(af,bf,cf,df,ef){
		   var pf=bf+cf|0;
		   var rf=uc+pf|0;
		   var ff=pf>=rf?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(ff.g){
		   case 1:
		    var qf=rf-pf|0;
		    var of=qf>>>0;
		    var nf=tc>>>0;
		    var mf=pf>>>0;
		    var $ff=_hs_text_memcpy(af,mf,sc,nf,of);
		    var gf=[ef,$ff];
		    var hf=gf[0];
		    var lf=df-uc|0;
		    var kf=cf+uc|0;
		    var jf=$d(1,[af,bf,kf,lf],"sat");
		    Ye.J(jf,hf);break;
		   case 2:
		    var uf=df-uc|0;
		    var tf=cf+uc|0;
		    var sf=$d(1,[af,bf,tf,uf],"sat");
		    Ye.J(sf,ef);break;
		   }
		  },[uc,sc,tc,Ye],"$wa1");
		  var vf=$f(1,function(wf){
		   var xf=$f(1,function(yf){
		    var zf=yf<0?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(zf.g){
		    case 1:
		     var Gf=yf>>>0;
		     var Ff=Gf&1073741824;
		     var Af=Ff|0;
		     switch(Af){
		     case 0:
		      var Ef=yf<<1;
		      var Bf=$hs_newByteArrayzh(Ef,wf);
		      var Cf=Bf[0],Df=Bf[1];
		      Ze.J(Df,0,0,yf,Cf);break;
		     default:
		      $A($$TextziBlazzeziRendererziText$q);
		     }break;
		    case 2:
		     $A($$TextziBlazzeziRendererziText$q);break;
		    }
		   },[Ze,wf],"$j");
		   var Hf=uc<=120?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(Hf.g){
		   case 1:
		    xf.J(uc);break;
		   case 2:
		    xf.J(120);break;
		   }
		  },[uc,Ze],"$wa9");
		  var If=$f(2,function(Jf,Kf){
		   $M(Jf,function(Lf){
		    var Mf=Lf.v[0],Nf=Lf.v[1],Of=Lf.v[2],Pf=Lf.v[3];
		    var Qf=uc<=Pf?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Qf.g){
		    case 1:
		     $M(Of,function(Rf){
		      switch(Rf){
		      case 0:
		       vf.J(Kf);break;
		      default:
		       var Sf=$t(function(){
			vf.C([Kf],function(Tf){
			 var Uf=Tf[1];
			 $A(Uf);
			},[]);
		       },[vf,Kf],"sat");
		       var Vf=$d(1,[Mf,Nf,Rf],"sat");
		       var Wf=$d(2,[Vf,Sf],"sat");
		       $r([Kf,Wf]);
		      }
		     },[vf,Kf,Mf,Nf]);break;
		    case 2:
		     Ze.J(Mf,Nf,Of,Pf,Kf);break;
		    }
		   },[uc,Ze,vf,Kf]);
		  },[uc,Ze,vf],"sat");
		  $A(If);
		 },[uc,sc,tc],"sat");
		 $A(Xe);break;
		}break;
	       case 2:
		$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	       }break;
	      case 2:
	       $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	      }
	     },[uc,sc,tc,rc]);break;
	    case 2:
	     var Xf=uc<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Xf.g){
	     case 1:
	      var Yf=uc<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Yf.g){
	      case 1:
	       var Zf=$f(3,function(ag,bg,cg){
		$M(bg,function(dg){
		 var eg=dg.v[0],fg=dg.v[1],gg=dg.v[2],hg=dg.v[3];
		 $M(gg,function(ig){
		  switch(ig){
		  case 0:
		   var qg=$d(1,[eg,fg,0,hg],"sat");
		   ag.C([qg,cg],function(rg){
		    var sg=rg[0],tg=rg[1];
		    var ug=$d(2,[rc,tg],"sat");
		    $r([sg,ug]);
		   },[rc]);break;
		  default:
		   var jg=$t(function(){
		    var lg=fg+ig|0;
		    var kg=$d(1,[eg,lg,0,hg],"sat");
		    ag.C([kg,cg],function(mg){
		     var ng=mg[1];
		     $R(2,[rc,ng],":");
		    },[rc]);
		   },[rc,cg,eg,fg,ig,hg,ag],"sat");
		   var og=$d(1,[eg,fg,ig],"sat");
		   var pg=$d(2,[og,jg],"sat");
		   $r([cg,pg]);
		  }
		 },[rc,cg,eg,fg,hg,ag]);
		},[rc,cg,ag]);
	       },[rc],"sat");
	       $A(Zf);break;
	      case 2:
	       var vg=$f(1,function(wg){
		var xg=$f(5,function(yg,zg,Ag,Bg,Cg){
		 var Mg=zg+Ag|0;
		 var Og=uc+Mg|0;
		 var Dg=Mg>=Og?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Dg.g){
		 case 1:
		  var Ng=Og-Mg|0;
		  var Lg=Ng>>>0;
		  var Kg=tc>>>0;
		  var Jg=Mg>>>0;
		  var $ff=_hs_text_memcpy(yg,Jg,sc,Kg,Lg);
		  var Eg=[Cg,$ff];
		  var Fg=Eg[0];
		  var Ig=Bg-uc|0;
		  var Hg=Ag+uc|0;
		  var Gg=$d(1,[yg,zg,Hg,Ig],"sat");
		  wg.J(Gg,Fg);break;
		 case 2:
		  var Rg=Bg-uc|0;
		  var Qg=Ag+uc|0;
		  var Pg=$d(1,[yg,zg,Qg,Rg],"sat");
		  wg.J(Pg,Cg);break;
		 }
		},[uc,sc,tc,wg],"$wa1");
		var Sg=$f(1,function(Tg){
		 var Ug=$f(1,function(Vg){
		  var Wg=Vg<0?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Wg.g){
		  case 1:
		   var dh=Vg>>>0;
		   var ch=dh&1073741824;
		   var Xg=ch|0;
		   switch(Xg){
		   case 0:
		    var bh=Vg<<1;
		    var Yg=$hs_newByteArrayzh(bh,Tg);
		    var Zg=Yg[0],ah=Yg[1];
		    xg.J(ah,0,0,Vg,Zg);break;
		   default:
		    $A($$TextziBlazzeziRendererziText$p);
		   }break;
		  case 2:
		   $A($$TextziBlazzeziRendererziText$p);break;
		  }
		 },[xg,Tg],"$j");
		 var eh=uc<=120?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(eh.g){
		 case 1:
		  Ug.J(uc);break;
		 case 2:
		  Ug.J(120);break;
		 }
		},[uc,xg],"$wa9");
		var fh=$f(2,function(gh,hh){
		 $M(gh,function(ih){
		  var jh=ih.v[0],kh=ih.v[1],lh=ih.v[2],mh=ih.v[3];
		  var nh=uc<=mh?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(nh.g){
		  case 1:
		   $M(lh,function(oh){
		    switch(oh){
		    case 0:
		     Sg.J(hh);break;
		    default:
		     var ph=$t(function(){
		      Sg.C([hh],function(qh){
		       var rh=qh[1];
		       $A(rh);
		      },[]);
		     },[Sg,hh],"sat");
		     var sh=$d(1,[jh,kh,oh],"sat");
		     var th=$d(2,[sh,ph],"sat");
		     $r([hh,th]);
		    }
		   },[Sg,hh,jh,kh]);break;
		  case 2:
		   xg.J(jh,kh,lh,mh,hh);break;
		  }
		 },[uc,xg,Sg,hh]);
		},[uc,xg,Sg],"sat");
		$A(fh);
	       },[uc,sc,tc],"sat");
	       $A(vg);break;
	      }break;
	     case 2:
	      $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	     }break;
	    }
	   }
	  },[Vb,Ub,uc,sc,tc,rc]);
	 },[Wb,Vb,Ub]);break;
	case 2:
	 $M(Sb,function(gj){
	  var hj=gj.v[0],ij=gj.v[1],jj=gj.v[2];
	  var Dj=ij+jj|0;
	  var kj=$t(function(){
	   var uj=$hs_indexWord16Arrayzh(Ub,Vb);
	   var lj=uj<55296?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(lj.g){
	   case 1:
	    var mj=uj>56319?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(mj.g){
	    case 1:
	     var xj=Vb+1|0;
	     var wj=$hs_indexWord16Arrayzh(Ub,xj);
	     var vj=wj|0;
	     var rj=vj-56320|0;
	     var tj=uj|0;
	     var sj=tj-55296|0;
	     var qj=sj<<10;
	     var pj=qj+rj|0;
	     var oj=pj+65536|0;
	     var nj=$hs_chrzh(oj);
	     $R(1,[nj],"C#");break;
	    case 2:
	     var zj=uj|0;
	     var yj=$hs_chrzh(zj);
	     $R(1,[yj],"C#");break;
	    }break;
	   case 2:
	    var Bj=uj|0;
	    var Aj=$hs_chrzh(Bj);
	    $R(1,[Aj],"C#");break;
	   }
	  },[Vb,Ub],"w");
	  var Cj=$f(1,function(Ej){
	   var Fj=Ej>=Dj?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Fj.g){
	   case 1:
	    var Nj=$hs_indexWord16Arrayzh(hj,Ej);
	    var Gj=Nj>=55296?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Gj.g){
	    case 1:
	     $M(kj,function(Hj){
	      var Ij=Hj.v[0];
	      var Mj=Nj|0;
	      var Lj=$hs_chrzh(Mj);
	      var Jj=Lj==Ij?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Jj.g){
	      case 1:
	       var Kj=Ej+1|0;
	       Cj.J(Kj);break;
	      case 2:
	       $R(2,[],"True");break;
	      }
	     },[Ej,Nj,Cj]);break;
	    case 2:
	     var Oj=Nj<=56319?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Oj.g){
	     case 1:
	      $M(kj,function(Pj){
	       var Qj=Pj.v[0];
	       var Uj=Nj|0;
	       var Tj=$hs_chrzh(Uj);
	       var Rj=Tj==Qj?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Rj.g){
	       case 1:
		var Sj=Ej+1|0;
		Cj.J(Sj);break;
	       case 2:
		$R(2,[],"True");break;
	       }
	      },[Ej,Nj,Cj]);break;
	     case 2:
	      $M(kj,function(Vj){
	       var Wj=Vj.v[0];
	       var ik=Ej+1|0;
	       var hk=$hs_indexWord16Arrayzh(hj,ik);
	       var gk=hk|0;
	       var dk=gk-56320|0;
	       var fk=Nj|0;
	       var ek=fk-55296|0;
	       var ck=ek<<10;
	       var bk=ck+dk|0;
	       var ak=bk+65536|0;
	       var Zj=$hs_chrzh(ak);
	       var Xj=Zj==Wj?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Xj.g){
	       case 1:
		var Yj=Ej+2|0;
		Cj.J(Yj);break;
	       case 2:
		$R(2,[],"True");break;
	       }
	      },[Ej,hj,Nj,Cj]);break;
	     }break;
	    }break;
	   case 2:
	    $R(1,[],"False");break;
	   }
	  },[Dj,kj,hj],"$wloop_elem");
	  Cj.C([ij],function(jk){
	   switch(jk.g){
	   case 1:
	    var kk=jj<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(kk.g){
	    case 1:
	     var lk=jj<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(lk.g){
	     case 1:
	      var mk=$f(3,function(nk,ok,pk){
	       $M(ok,function(qk){
		var rk=qk.v[0],sk=qk.v[1],tk=qk.v[2],uk=qk.v[3];
		$M(tk,function(vk){
		 switch(vk){
		 case 0:
		  var Dk=$d(1,[rk,sk,0,uk],"sat");
		  nk.C([Dk,pk],function(Ek){
		   var Fk=Ek[0],Gk=Ek[1];
		   var Hk=$d(2,[gj,Gk],"sat");
		   $r([Fk,Hk]);
		  },[gj]);break;
		 default:
		  var wk=$t(function(){
		   var yk=sk+vk|0;
		   var xk=$d(1,[rk,yk,0,uk],"sat");
		   nk.C([xk,pk],function(zk){
		    var Ak=zk[1];
		    $R(2,[gj,Ak],":");
		   },[gj]);
		  },[pk,rk,sk,vk,uk,nk,gj],"sat");
		  var Bk=$d(1,[rk,sk,vk],"sat");
		  var Ck=$d(2,[Bk,wk],"sat");
		  $r([pk,Ck]);
		 }
		},[pk,rk,sk,uk,nk,gj]);
	       },[pk,nk,gj]);
	      },[gj],"sat");
	      $A(mk);break;
	     case 2:
	      var Ik=$f(1,function(Jk){
	       var Kk=$f(5,function(Lk,Mk,Nk,Ok,Pk){
		var Zk=Mk+Nk|0;
		var bl=jj+Zk|0;
		var Qk=Zk>=bl?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Qk.g){
		case 1:
		 var al=bl-Zk|0;
		 var Yk=al>>>0;
		 var Xk=ij>>>0;
		 var Wk=Zk>>>0;
		 var $ff=_hs_text_memcpy(Lk,Wk,hj,Xk,Yk);
		 var Rk=[Pk,$ff];
		 var Sk=Rk[0];
		 var Vk=Ok-jj|0;
		 var Uk=Nk+jj|0;
		 var Tk=$d(1,[Lk,Mk,Uk,Vk],"sat");
		 Jk.J(Tk,Sk);break;
		case 2:
		 var el=Ok-jj|0;
		 var dl=Nk+jj|0;
		 var cl=$d(1,[Lk,Mk,dl,el],"sat");
		 Jk.J(cl,Pk);break;
		}
	       },[ij,jj,hj,Jk],"$wa1");
	       var fl=$f(1,function(gl){
		var hl=$f(1,function(il){
		 var jl=il<0?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(jl.g){
		 case 1:
		  var ql=il>>>0;
		  var pl=ql&1073741824;
		  var kl=pl|0;
		  switch(kl){
		  case 0:
		   var ol=il<<1;
		   var ll=$hs_newByteArrayzh(ol,gl);
		   var ml=ll[0],nl=ll[1];
		   Kk.J(nl,0,0,il,ml);break;
		  default:
		   $A($$TextziBlazzeziRendererziText$n);
		  }break;
		 case 2:
		  $A($$TextziBlazzeziRendererziText$n);break;
		 }
		},[Kk,gl],"$j");
		var rl=jj<=120?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(rl.g){
		case 1:
		 hl.J(jj);break;
		case 2:
		 hl.J(120);break;
		}
	       },[jj,Kk],"$wa9");
	       var sl=$f(2,function(tl,ul){
		$M(tl,function(vl){
		 var wl=vl.v[0],xl=vl.v[1],yl=vl.v[2],zl=vl.v[3];
		 var Al=jj<=zl?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(Al.g){
		 case 1:
		  $M(yl,function(Bl){
		   switch(Bl){
		   case 0:
		    fl.J(ul);break;
		   default:
		    var Cl=$t(function(){
		     fl.C([ul],function(Dl){
		      var El=Dl[1];
		      $A(El);
		     },[]);
		    },[fl,ul],"sat");
		    var Fl=$d(1,[wl,xl,Bl],"sat");
		    var Gl=$d(2,[Fl,Cl],"sat");
		    $r([ul,Gl]);
		   }
		  },[fl,ul,wl,xl]);break;
		 case 2:
		  Kk.J(wl,xl,yl,zl,ul);break;
		 }
		},[jj,Kk,fl,ul]);
	       },[jj,Kk,fl],"sat");
	       $A(sl);
	      },[ij,jj,hj],"sat");
	      $A(Ik);break;
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	    }break;
	   case 2:
	    $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	   }
	  },[ij,jj,hj,gj]);
	 },[Vb,Ub]);break;
	}
       },[Wb,Vb,Ub,Sb]);break;
      case 2:
       $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
      }
     },[Sb]);break;
    case 4:
     var Hl=Ob.v[0];
     $M($$TextziBlazzeziRendererziText$j,function(Il){
      var Jl=Il.v[0],Kl=Il.v[1],Ll=Il.v[2],Ml=Il.v[3];
      $M(Hl,function(Nl){
       var Ol=Nl.v[0],Pl=Nl.v[1],Ql=Nl.v[2],Rl=Nl.v[3];
       $$DataziByteString_zdwfindSubstrings.C([Jl,Kl,Ll,Ml,Ol,Pl,Ql,Rl],function(Sl){
	switch(Sl.g){
	case 1:
	 p9.C([Nl],function(Tl){
	  var Ul=Tl.v[0],Vl=Tl.v[1],Wl=Tl.v[2];
	  var Xl=Wl<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(Xl.g){
	  case 1:
	   var Yl=Wl<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Yl.g){
	   case 1:
	    var Zl=$f(3,function(am,bm,cm){
	     $M(bm,function(dm){
	      var em=dm.v[0],fm=dm.v[1],gm=dm.v[2],hm=dm.v[3];
	      $M(gm,function(im){
	       switch(im){
	       case 0:
		var qm=$d(1,[em,fm,0,hm],"sat");
		am.C([qm,cm],function(rm){
		 var sm=rm[0],tm=rm[1];
		 var um=$d(2,[Tl,tm],"sat");
		 $r([sm,um]);
		},[Tl]);break;
	       default:
		var jm=$t(function(){
		 var lm=fm+im|0;
		 var km=$d(1,[em,lm,0,hm],"sat");
		 am.C([km,cm],function(mm){
		  var nm=mm[1];
		  $R(2,[Tl,nm],":");
		 },[Tl]);
		},[cm,em,fm,im,hm,am,Tl],"sat");
		var om=$d(1,[em,fm,im],"sat");
		var pm=$d(2,[om,jm],"sat");
		$r([cm,pm]);
	       }
	      },[cm,em,fm,hm,am,Tl]);
	     },[cm,am,Tl]);
	    },[Tl],"sat");
	    $A(Zl);break;
	   case 2:
	    var vm=$f(1,function(wm){
	     var xm=$f(5,function(ym,zm,Am,Bm,Cm){
	      var Mm=zm+Am|0;
	      var Om=Wl+Mm|0;
	      var Dm=Mm>=Om?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Dm.g){
	      case 1:
	       var Nm=Om-Mm|0;
	       var Lm=Nm>>>0;
	       var Km=Vl>>>0;
	       var Jm=Mm>>>0;
	       var $ff=_hs_text_memcpy(ym,Jm,Ul,Km,Lm);
	       var Em=[Cm,$ff];
	       var Fm=Em[0];
	       var Im=Bm-Wl|0;
	       var Hm=Am+Wl|0;
	       var Gm=$d(1,[ym,zm,Hm,Im],"sat");
	       wm.J(Gm,Fm);break;
	      case 2:
	       var Rm=Bm-Wl|0;
	       var Qm=Am+Wl|0;
	       var Pm=$d(1,[ym,zm,Qm,Rm],"sat");
	       wm.J(Pm,Cm);break;
	      }
	     },[Wl,Ul,Vl,wm],"$wa1");
	     var Sm=$f(1,function(Tm){
	      var Um=$f(1,function(Vm){
	       var Wm=Vm<0?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Wm.g){
	       case 1:
		var dn=Vm>>>0;
		var cn=dn&1073741824;
		var Xm=cn|0;
		switch(Xm){
		case 0:
		 var bn=Vm<<1;
		 var Ym=$hs_newByteArrayzh(bn,Tm);
		 var Zm=Ym[0],an=Ym[1];
		 xm.J(an,0,0,Vm,Zm);break;
		default:
		 $A($$TextziBlazzeziRendererziText$m);
		}break;
	       case 2:
		$A($$TextziBlazzeziRendererziText$m);break;
	       }
	      },[xm,Tm],"$j");
	      var en=Wl<=120?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(en.g){
	      case 1:
	       Um.J(Wl);break;
	      case 2:
	       Um.J(120);break;
	      }
	     },[Wl,xm],"$wa9");
	     var fn=$f(2,function(gn,hn){
	      $M(gn,function(jn){
	       var kn=jn.v[0],ln=jn.v[1],mn=jn.v[2],nn=jn.v[3];
	       var on=Wl<=nn?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(on.g){
	       case 1:
		$M(mn,function(pn){
		 switch(pn){
		 case 0:
		  Sm.J(hn);break;
		 default:
		  var qn=$t(function(){
		   Sm.C([hn],function(rn){
		    var sn=rn[1];
		    $A(sn);
		   },[]);
		  },[Sm,hn],"sat");
		  var tn=$d(1,[kn,ln,pn],"sat");
		  var un=$d(2,[tn,qn],"sat");
		  $r([hn,un]);
		 }
		},[Sm,hn,kn,ln]);break;
	       case 2:
		xm.J(kn,ln,mn,nn,hn);break;
	       }
	      },[Wl,xm,Sm,hn]);
	     },[Wl,xm,Sm],"sat");
	     $A(fn);
	    },[Wl,Ul,Vl],"sat");
	    $A(vm);break;
	   }break;
	  case 2:
	   $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	  }
	 },[]);break;
	case 2:
	 $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	}
       },[p9,Nl]);
      },[p9,Jl,Kl,Ll,Ml]);
     },[p9,Hl]);break;
    default:
     $$TextziBlazzeziRendererziText_fromChoiceString.J(p9,Ob);
    }
   },[p9]);break;
  case 7:
   var vn=r9.v[0],wn=r9.v[1];
   var xn=$t(function(){
    $$TextziBlazzeziRendererziText_fromChoiceString.J(p9,wn);
   },[p9,wn],"g");
   var yn=$t(function(){
    $$TextziBlazzeziRendererziText_fromChoiceString.J(p9,vn);
   },[p9,vn],"f");
   var zn=$f(1,function(An){
    var Bn=$t(function(){
     xn.J(An);
    },[xn,An],"sat");
    yn.J(Bn);
   },[xn,yn],"sat");
   $A(zn);break;
  case 8:
   $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
  }
 },[p9]);
},[],"at src/Text/Blaze/Renderer/Text.hs:49:1");
var $$TextziBlazzeziRendererziText_renderMarkupWith=$f(2,function(bC,cC){
 var dC=$f(2,function(eC,fC){
  $M(fC,function(gC){
   switch(gC.g){
   case 1:
    var hC=gC.v[1],iC=gC.v[2],jC=gC.v[3];
    var kC=$t(function(){
     $M(iC,function(lC){
      var mC=lC.v[2];
      $M(mC,function(nC){
       var oC=nC.v[0],pC=nC.v[1],qC=nC.v[2];
       var rC=qC<=0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(rC.g){
       case 1:
	var sC=qC<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(sC.g){
	case 1:
	 var tC=$f(3,function(uC,vC,wC){
	  $M(vC,function(xC){
	   var yC=xC.v[0],zC=xC.v[1],AC=xC.v[2],BC=xC.v[3];
	   $M(AC,function(CC){
	    switch(CC){
	    case 0:
	     var KC=$d(1,[yC,zC,0,BC],"sat");
	     uC.C([KC,wC],function(LC){
	      var MC=LC[0],NC=LC[1];
	      var OC=$d(2,[nC,NC],"sat");
	      $r([MC,OC]);
	     },[nC]);break;
	    default:
	     var DC=$t(function(){
	      var FC=zC+CC|0;
	      var EC=$d(1,[yC,FC,0,BC],"sat");
	      uC.C([EC,wC],function(GC){
	       var HC=GC[1];
	       $R(2,[nC,HC],":");
	      },[nC]);
	     },[wC,yC,zC,CC,BC,uC,nC],"sat");
	     var IC=$d(1,[yC,zC,CC],"sat");
	     var JC=$d(2,[IC,DC],"sat");
	     $r([wC,JC]);
	    }
	   },[wC,yC,zC,BC,uC,nC]);
	  },[wC,uC,nC]);
	 },[nC],"sat");
	 $A(tC);break;
	case 2:
	 var PC=$f(1,function(QC){
	  var RC=$f(5,function(SC,TC,UC,VC,WC){
	   var gD=TC+UC|0;
	   var iD=qC+gD|0;
	   var XC=gD>=iD?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(XC.g){
	   case 1:
	    var hD=iD-gD|0;
	    var fD=hD>>>0;
	    var eD=pC>>>0;
	    var dD=gD>>>0;
	    var $ff=_hs_text_memcpy(SC,dD,oC,eD,fD);
	    var YC=[WC,$ff];
	    var ZC=YC[0];
	    var cD=VC-qC|0;
	    var bD=UC+qC|0;
	    var aD=$d(1,[SC,TC,bD,cD],"sat");
	    QC.J(aD,ZC);break;
	   case 2:
	    var lD=VC-qC|0;
	    var kD=UC+qC|0;
	    var jD=$d(1,[SC,TC,kD,lD],"sat");
	    QC.J(jD,WC);break;
	   }
	  },[qC,oC,pC,QC],"$wa1");
	  var mD=$f(1,function(nD){
	   var oD=$f(1,function(pD){
	    var qD=pD<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(qD.g){
	    case 1:
	     var xD=pD>>>0;
	     var wD=xD&1073741824;
	     var rD=wD|0;
	     switch(rD){
	     case 0:
	      var vD=pD<<1;
	      var sD=$hs_newByteArrayzh(vD,nD);
	      var tD=sD[0],uD=sD[1];
	      RC.J(uD,0,0,pD,tD);break;
	     default:
	      $A($$TextziBlazzeziRendererziText$O);
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText$O);break;
	    }
	   },[RC,nD],"$j");
	   var yD=qC<=120?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(yD.g){
	   case 1:
	    oD.J(qC);break;
	   case 2:
	    oD.J(120);break;
	   }
	  },[qC,RC],"$wa9");
	  var zD=$f(2,function(AD,BD){
	   $M(AD,function(CD){
	    var DD=CD.v[0],ED=CD.v[1],FD=CD.v[2],GD=CD.v[3];
	    var HD=qC<=GD?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(HD.g){
	    case 1:
	     $M(FD,function(ID){
	      switch(ID){
	      case 0:
	       mD.J(BD);break;
	      default:
	       var JD=$t(function(){
		mD.C([BD],function(KD){
		 var LD=KD[1];
		 $A(LD);
		},[]);
	       },[mD,BD],"sat");
	       var MD=$d(1,[DD,ED,ID],"sat");
	       var ND=$d(2,[MD,JD],"sat");
	       $r([BD,ND]);
	      }
	     },[mD,BD,DD,ED]);break;
	    case 2:
	     RC.J(DD,ED,FD,GD,BD);break;
	    }
	   },[qC,RC,mD,BD]);
	  },[qC,RC,mD],"sat");
	  $A(zD);
	 },[qC,oC,pC],"sat");
	 $A(PC);break;
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[]);
     },[]);
    },[iC],"g");
    var OD=$t(function(){
     dC.J($$TextziBlazzeziRendererziText_renderMarkupBuilder1,jC);
    },[jC,dC],"g1");
    var PD=$t(function(){
     $M(hC,function(QD){
      var RD=QD.v[2];
      $M(RD,function(SD){
       var TD=SD.v[0],UD=SD.v[1],VD=SD.v[2];
       var WD=VD<=0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(WD.g){
       case 1:
	var XD=VD<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(XD.g){
	case 1:
	 var YD=$f(3,function(ZD,aE,bE){
	  $M(aE,function(cE){
	   var dE=cE.v[0],eE=cE.v[1],fE=cE.v[2],gE=cE.v[3];
	   $M(fE,function(hE){
	    switch(hE){
	    case 0:
	     var pE=$d(1,[dE,eE,0,gE],"sat");
	     ZD.C([pE,bE],function(qE){
	      var rE=qE[0],sE=qE[1];
	      var tE=$d(2,[SD,sE],"sat");
	      $r([rE,tE]);
	     },[SD]);break;
	    default:
	     var iE=$t(function(){
	      var kE=eE+hE|0;
	      var jE=$d(1,[dE,kE,0,gE],"sat");
	      ZD.C([jE,bE],function(lE){
	       var mE=lE[1];
	       $R(2,[SD,mE],":");
	      },[SD]);
	     },[bE,dE,eE,hE,gE,ZD,SD],"sat");
	     var nE=$d(1,[dE,eE,hE],"sat");
	     var oE=$d(2,[nE,iE],"sat");
	     $r([bE,oE]);
	    }
	   },[bE,dE,eE,gE,ZD,SD]);
	  },[bE,ZD,SD]);
	 },[SD],"sat");
	 $A(YD);break;
	case 2:
	 var uE=$f(1,function(vE){
	  var wE=$f(5,function(xE,yE,zE,AE,BE){
	   var LE=yE+zE|0;
	   var NE=VD+LE|0;
	   var CE=LE>=NE?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(CE.g){
	   case 1:
	    var ME=NE-LE|0;
	    var KE=ME>>>0;
	    var JE=UD>>>0;
	    var IE=LE>>>0;
	    var $ff=_hs_text_memcpy(xE,IE,TD,JE,KE);
	    var DE=[BE,$ff];
	    var EE=DE[0];
	    var HE=AE-VD|0;
	    var GE=zE+VD|0;
	    var FE=$d(1,[xE,yE,GE,HE],"sat");
	    vE.J(FE,EE);break;
	   case 2:
	    var QE=AE-VD|0;
	    var PE=zE+VD|0;
	    var OE=$d(1,[xE,yE,PE,QE],"sat");
	    vE.J(OE,BE);break;
	   }
	  },[VD,TD,UD,vE],"$wa1");
	  var RE=$f(1,function(SE){
	   var TE=$f(1,function(UE){
	    var VE=UE<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(VE.g){
	    case 1:
	     var cF=UE>>>0;
	     var bF=cF&1073741824;
	     var WE=bF|0;
	     switch(WE){
	     case 0:
	      var aF=UE<<1;
	      var XE=$hs_newByteArrayzh(aF,SE);
	      var YE=XE[0],ZE=XE[1];
	      wE.J(ZE,0,0,UE,YE);break;
	     default:
	      $A($$TextziBlazzeziRendererziText$N);
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText$N);break;
	    }
	   },[wE,SE],"$j");
	   var dF=VD<=120?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(dF.g){
	   case 1:
	    TE.J(VD);break;
	   case 2:
	    TE.J(120);break;
	   }
	  },[VD,wE],"$wa9");
	  var eF=$f(2,function(fF,gF){
	   $M(fF,function(hF){
	    var iF=hF.v[0],jF=hF.v[1],kF=hF.v[2],lF=hF.v[3];
	    var mF=VD<=lF?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(mF.g){
	    case 1:
	     $M(kF,function(nF){
	      switch(nF){
	      case 0:
	       RE.J(gF);break;
	      default:
	       var oF=$t(function(){
		RE.C([gF],function(pF){
		 var qF=pF[1];
		 $A(qF);
		},[]);
	       },[RE,gF],"sat");
	       var rF=$d(1,[iF,jF,nF],"sat");
	       var sF=$d(2,[rF,oF],"sat");
	       $r([gF,sF]);
	      }
	     },[RE,gF,iF,jF]);break;
	    case 2:
	     wE.J(iF,jF,kF,lF,gF);break;
	    }
	   },[VD,wE,RE,gF]);
	  },[VD,wE,RE],"sat");
	  $A(eF);
	 },[VD,TD,UD],"sat");
	 $A(uE);break;
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[]);
     },[]);
    },[hC],"f");
    var tF=$f(1,function(uF){
     var vF=$t(function(){
      var wF=$t(function(){
       var xF=$t(function(){
	kC.J(uF);
       },[kC,uF],"sat");
       OD.J(xF);
      },[kC,OD,uF],"x1");
      var yF=$f(2,function(zF,AF){
       $M(zF,function(BF){
	var CF=BF.v[0],DF=BF.v[1],EF=BF.v[2],FF=BF.v[3];
	var GF=2<=FF?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(GF.g){
	case 1:
	 $M(EF,function(HF){
	  switch(HF){
	  case 0:
	   var SF=$hs_newByteArrayzh(240,AF);
	   var TF=SF[0],UF=SF[1];
	   var WF=$hs_writeWord16Arrayzh(UF,0,62,TF);
	   var VF=$d(1,[UF,0,1,119],"sat");
	   wF.J(VF,WF);break;
	  default:
	   var IF=$t(function(){
	    var JF=$hs_newByteArrayzh(240,AF);
	    var KF=JF[0],LF=JF[1];
	    var PF=$hs_writeWord16Arrayzh(LF,0,62,KF);
	    var MF=$d(1,[LF,0,1,119],"sat");
	    wF.C([MF,PF],function(NF){
	     var OF=NF[1];
	     $A(OF);
	    },[]);
	   },[wF,AF],"sat");
	   var QF=$d(1,[CF,DF,HF],"sat");
	   var RF=$d(2,[QF,IF],"sat");
	   $r([AF,RF]);
	  }
	 },[wF,AF,CF,DF]);break;
	case 2:
	 var bG=DF+EF|0;
	 var aG=$hs_writeWord16Arrayzh(CF,bG,62,AF);
	 var ZF=FF-1|0;
	 var YF=EF+1|0;
	 var XF=$d(1,[CF,DF,YF,ZF],"sat");
	 wF.J(XF,aG);break;
	}
       },[wF,AF]);
      },[wF],"sat");
      eC.J(yF);
     },[kC,OD,uF,eC],"sat");
     PD.J(vF);
    },[kC,OD,PD,eC],"sat");
    $A(tF);break;
   case 2:
    var cG=gC.v[0],dG=gC.v[1];
    var eG=$t(function(){
     $$TextziBlazzeziRendererziText_fromChoiceString.J(bC,cG);
    },[bC,cG],"g");
    var fG=$t(function(){
     dC.J($$TextziBlazzeziRendererziText_renderMarkupBuilder1,dG);
    },[dC,dG],"g1");
    var gG=$t(function(){
     $$TextziBlazzeziRendererziText_fromChoiceString.J(bC,cG);
    },[bC,cG],"g2");
    var hG=$f(1,function(iG){
     var jG=$t(function(){
      var kG=$t(function(){
       var lG=$t(function(){
	var mG=$t(function(){
	 var nG=$f(2,function(oG,pG){
	  $M(oG,function(qG){
	   var rG=qG.v[0],sG=qG.v[1],tG=qG.v[2],uG=qG.v[3];
	   var vG=2<=uG?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(vG.g){
	   case 1:
	    $M(tG,function(wG){
	     switch(wG){
	     case 0:
	      var HG=$hs_newByteArrayzh(240,pG);
	      var IG=HG[0],JG=HG[1];
	      var LG=$hs_writeWord16Arrayzh(JG,0,62,IG);
	      var KG=$d(1,[JG,0,1,119],"sat");
	      iG.J(KG,LG);break;
	     default:
	      var xG=$t(function(){
	       var yG=$hs_newByteArrayzh(240,pG);
	       var zG=yG[0],AG=yG[1];
	       var EG=$hs_writeWord16Arrayzh(AG,0,62,zG);
	       var BG=$d(1,[AG,0,1,119],"sat");
	       iG.C([BG,EG],function(CG){
		var DG=CG[1];
		$A(DG);
	       },[]);
	      },[pG,iG],"sat");
	      var FG=$d(1,[rG,sG,wG],"sat");
	      var GG=$d(2,[FG,xG],"sat");
	      $r([pG,GG]);
	     }
	    },[pG,rG,sG,iG]);break;
	   case 2:
	    var QG=sG+tG|0;
	    var PG=$hs_writeWord16Arrayzh(rG,QG,62,pG);
	    var OG=uG-1|0;
	    var NG=tG+1|0;
	    var MG=$d(1,[rG,sG,NG,OG],"sat");
	    iG.J(MG,PG);break;
	   }
	  },[pG,iG]);
	 },[iG],"sat");
	 eG.J(nG);
	},[eG,iG],"k");
	var RG=$f(6,function(SG,TG,UG,VG,WG,XG){
	 $M(WG,function(YG){
	  switch(YG.g){
	  case 1:
	   var ZG=$d(1,[SG,TG,UG,VG],"sat");
	   mG.J(ZG,XG);break;
	  case 2:
	   var aH=YG.v[0],bH=YG.v[1];
	   var cH=VG<=1?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(cH.g){
	   case 1:
	    $M(aH,function(dH){
	     var eH=dH.v[0];
	     var xH=$hs_ordzh(eH);
	     var mH=TG+UG|0;
	     var fH=xH<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(fH.g){
	     case 1:
	      var sH=xH-65536|0;
	      var wH=sH>>10;
	      var vH=wH+55296|0;
	      var uH=vH>>>0;
	      var tH=uH&65535;
	      var lH=$hs_writeWord16Arrayzh(SG,mH,tH,XG);
	      var rH=sH>>>0;
	      var qH=rH&1023;
	      var pH=qH|0;
	      var oH=pH+56320|0;
	      var nH=oH>>>0;
	      var kH=nH&65535;
	      var jH=mH+1|0;
	      var iH=$hs_writeWord16Arrayzh(SG,jH,kH,lH);
	      var hH=VG-2|0;
	      var gH=UG+2|0;
	      RG.J(SG,TG,gH,hH,bH,iH);break;
	     case 2:
	      var CH=xH>>>0;
	      var BH=CH&65535;
	      var AH=$hs_writeWord16Arrayzh(SG,mH,BH,XG);
	      var zH=VG-1|0;
	      var yH=UG+1|0;
	      RG.J(SG,TG,yH,zH,bH,AH);break;
	     }
	    },[SG,TG,UG,VG,XG,RG,bH]);break;
	   case 2:
	    var DH=$hs_newByteArrayzh(240,XG);
	    var EH=DH[0],FH=DH[1];
	    var GH=$t(function(){
	     RG.C([FH,0,0,120,YG,EH],function(HH){
	      var IH=HH[1];
	      $A(IH);
	     },[]);
	    },[RG,EH,FH,YG],"sat");
	    var JH=$d(1,[SG,TG,UG],"sat");
	    var KH=$d(2,[JH,GH],"sat");
	    $r([EH,KH]);break;
	   }break;
	  }
	 },[mG,SG,TG,UG,VG,XG,RG]);
	},[mG],"$wa1");
	var LH=$f(2,function(MH,NH){
	 $M(MH,function(OH){
	  var PH=OH.v[0],QH=OH.v[1],RH=OH.v[2],SH=OH.v[3];
	  RG.J(PH,QH,RH,SH,$$TextziBlazzeziRendererziText$g,NH);
	 },[RG,NH]);
	},[RG],"sat");
	fG.J(LH);
       },[eG,fG,iG],"x2");
       var TH=$f(2,function(UH,VH){
	$M(UH,function(WH){
	 var XH=WH.v[0],YH=WH.v[1],ZH=WH.v[2],aI=WH.v[3];
	 var bI=2<=aI?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(bI.g){
	 case 1:
	  $M(ZH,function(cI){
	   switch(cI){
	   case 0:
	    var nI=$hs_newByteArrayzh(240,VH);
	    var oI=nI[0],pI=nI[1];
	    var rI=$hs_writeWord16Arrayzh(pI,0,62,oI);
	    var qI=$d(1,[pI,0,1,119],"sat");
	    lG.J(qI,rI);break;
	   default:
	    var dI=$t(function(){
	     var eI=$hs_newByteArrayzh(240,VH);
	     var fI=eI[0],gI=eI[1];
	     var kI=$hs_writeWord16Arrayzh(gI,0,62,fI);
	     var hI=$d(1,[gI,0,1,119],"sat");
	     lG.C([hI,kI],function(iI){
	      var jI=iI[1];
	      $A(jI);
	     },[]);
	    },[lG,VH],"sat");
	    var lI=$d(1,[XH,YH,cI],"sat");
	    var mI=$d(2,[lI,dI],"sat");
	    $r([VH,mI]);
	   }
	  },[lG,VH,XH,YH]);break;
	 case 2:
	  var wI=YH+ZH|0;
	  var vI=$hs_writeWord16Arrayzh(XH,wI,62,VH);
	  var uI=aI-1|0;
	  var tI=ZH+1|0;
	  var sI=$d(1,[XH,YH,tI,uI],"sat");
	  lG.J(sI,vI);break;
	 }
	},[lG,VH]);
       },[lG],"sat");
       eC.J(TH);
      },[eC,eG,fG,iG],"sat");
      gG.J(kG);
     },[eC,eG,fG,gG,iG],"x1");
     var xI=$f(2,function(yI,zI){
      $M(yI,function(AI){
       var BI=AI.v[0],CI=AI.v[1],DI=AI.v[2],EI=AI.v[3];
       var FI=2<=EI?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(FI.g){
       case 1:
	$M(DI,function(GI){
	 switch(GI){
	 case 0:
	  var RI=$hs_newByteArrayzh(240,zI);
	  var SI=RI[0],TI=RI[1];
	  var VI=$hs_writeWord16Arrayzh(TI,0,60,SI);
	  var UI=$d(1,[TI,0,1,119],"sat");
	  jG.J(UI,VI);break;
	 default:
	  var HI=$t(function(){
	   var II=$hs_newByteArrayzh(240,zI);
	   var JI=II[0],KI=II[1];
	   var OI=$hs_writeWord16Arrayzh(KI,0,60,JI);
	   var LI=$d(1,[KI,0,1,119],"sat");
	   jG.C([LI,OI],function(MI){
	    var NI=MI[1];
	    $A(NI);
	   },[]);
	  },[jG,zI],"sat");
	  var PI=$d(1,[BI,CI,GI],"sat");
	  var QI=$d(2,[PI,HI],"sat");
	  $r([zI,QI]);
	 }
	},[jG,zI,BI,CI]);break;
       case 2:
	var aJ=CI+DI|0;
	var ZI=$hs_writeWord16Arrayzh(BI,aJ,60,zI);
	var YI=EI-1|0;
	var XI=DI+1|0;
	var WI=$d(1,[BI,CI,XI,YI],"sat");
	jG.J(WI,ZI);break;
       }
      },[jG,zI]);
     },[jG],"sat");
     $A(xI);
    },[eC,eG,fG,gG],"sat");
    $A(hG);break;
   case 3:
    var bJ=gC.v[1],cJ=gC.v[2];
    var dJ=$t(function(){
     $M(cJ,function(eJ){
      var fJ=eJ.v[2];
      $M(fJ,function(gJ){
       var hJ=gJ.v[0],iJ=gJ.v[1],jJ=gJ.v[2];
       var kJ=jJ<=0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(kJ.g){
       case 1:
	var lJ=jJ<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(lJ.g){
	case 1:
	 var mJ=$f(3,function(nJ,oJ,pJ){
	  $M(oJ,function(qJ){
	   var rJ=qJ.v[0],sJ=qJ.v[1],tJ=qJ.v[2],uJ=qJ.v[3];
	   $M(tJ,function(vJ){
	    switch(vJ){
	    case 0:
	     var DJ=$d(1,[rJ,sJ,0,uJ],"sat");
	     nJ.C([DJ,pJ],function(EJ){
	      var FJ=EJ[0],GJ=EJ[1];
	      var HJ=$d(2,[gJ,GJ],"sat");
	      $r([FJ,HJ]);
	     },[gJ]);break;
	    default:
	     var wJ=$t(function(){
	      var yJ=sJ+vJ|0;
	      var xJ=$d(1,[rJ,yJ,0,uJ],"sat");
	      nJ.C([xJ,pJ],function(zJ){
	       var AJ=zJ[1];
	       $R(2,[gJ,AJ],":");
	      },[gJ]);
	     },[pJ,rJ,sJ,vJ,uJ,nJ,gJ],"sat");
	     var BJ=$d(1,[rJ,sJ,vJ],"sat");
	     var CJ=$d(2,[BJ,wJ],"sat");
	     $r([pJ,CJ]);
	    }
	   },[pJ,rJ,sJ,uJ,nJ,gJ]);
	  },[pJ,nJ,gJ]);
	 },[gJ],"sat");
	 $A(mJ);break;
	case 2:
	 var IJ=$f(1,function(JJ){
	  var KJ=$f(5,function(LJ,MJ,NJ,OJ,PJ){
	   var ZJ=MJ+NJ|0;
	   var bK=jJ+ZJ|0;
	   var QJ=ZJ>=bK?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(QJ.g){
	   case 1:
	    var aK=bK-ZJ|0;
	    var YJ=aK>>>0;
	    var XJ=iJ>>>0;
	    var WJ=ZJ>>>0;
	    var $ff=_hs_text_memcpy(LJ,WJ,hJ,XJ,YJ);
	    var RJ=[PJ,$ff];
	    var SJ=RJ[0];
	    var VJ=OJ-jJ|0;
	    var UJ=NJ+jJ|0;
	    var TJ=$d(1,[LJ,MJ,UJ,VJ],"sat");
	    JJ.J(TJ,SJ);break;
	   case 2:
	    var eK=OJ-jJ|0;
	    var dK=NJ+jJ|0;
	    var cK=$d(1,[LJ,MJ,dK,eK],"sat");
	    JJ.J(cK,PJ);break;
	   }
	  },[jJ,hJ,iJ,JJ],"$wa1");
	  var fK=$f(1,function(gK){
	   var hK=$f(1,function(iK){
	    var jK=iK<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(jK.g){
	    case 1:
	     var qK=iK>>>0;
	     var pK=qK&1073741824;
	     var kK=pK|0;
	     switch(kK){
	     case 0:
	      var oK=iK<<1;
	      var lK=$hs_newByteArrayzh(oK,gK);
	      var mK=lK[0],nK=lK[1];
	      KJ.J(nK,0,0,iK,mK);break;
	     default:
	      $A($$TextziBlazzeziRendererziText$Q);
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText$Q);break;
	    }
	   },[KJ,gK],"$j");
	   var rK=jJ<=120?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(rK.g){
	   case 1:
	    hK.J(jJ);break;
	   case 2:
	    hK.J(120);break;
	   }
	  },[jJ,KJ],"$wa9");
	  var sK=$f(2,function(tK,uK){
	   $M(tK,function(vK){
	    var wK=vK.v[0],xK=vK.v[1],yK=vK.v[2],zK=vK.v[3];
	    var AK=jJ<=zK?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(AK.g){
	    case 1:
	     $M(yK,function(BK){
	      switch(BK){
	      case 0:
	       fK.J(uK);break;
	      default:
	       var CK=$t(function(){
		fK.C([uK],function(DK){
		 var EK=DK[1];
		 $A(EK);
		},[]);
	       },[fK,uK],"sat");
	       var FK=$d(1,[wK,xK,BK],"sat");
	       var GK=$d(2,[FK,CK],"sat");
	       $r([uK,GK]);
	      }
	     },[fK,uK,wK,xK]);break;
	    case 2:
	     KJ.J(wK,xK,yK,zK,uK);break;
	    }
	   },[jJ,KJ,fK,uK]);
	  },[jJ,KJ,fK],"sat");
	  $A(sK);
	 },[jJ,hJ,iJ],"sat");
	 $A(IJ);break;
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[]);
     },[]);
    },[cJ],"g");
    var HK=$t(function(){
     $M(bJ,function(IK){
      var JK=IK.v[2];
      $M(JK,function(KK){
       var LK=KK.v[0],MK=KK.v[1],NK=KK.v[2];
       var OK=NK<=0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(OK.g){
       case 1:
	var PK=NK<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(PK.g){
	case 1:
	 var QK=$f(3,function(RK,SK,TK){
	  $M(SK,function(UK){
	   var VK=UK.v[0],WK=UK.v[1],XK=UK.v[2],YK=UK.v[3];
	   $M(XK,function(ZK){
	    switch(ZK){
	    case 0:
	     var hL=$d(1,[VK,WK,0,YK],"sat");
	     RK.C([hL,TK],function(iL){
	      var jL=iL[0],kL=iL[1];
	      var lL=$d(2,[KK,kL],"sat");
	      $r([jL,lL]);
	     },[KK]);break;
	    default:
	     var aL=$t(function(){
	      var cL=WK+ZK|0;
	      var bL=$d(1,[VK,cL,0,YK],"sat");
	      RK.C([bL,TK],function(dL){
	       var eL=dL[1];
	       $R(2,[KK,eL],":");
	      },[KK]);
	     },[TK,VK,WK,ZK,YK,RK,KK],"sat");
	     var fL=$d(1,[VK,WK,ZK],"sat");
	     var gL=$d(2,[fL,aL],"sat");
	     $r([TK,gL]);
	    }
	   },[TK,VK,WK,YK,RK,KK]);
	  },[TK,RK,KK]);
	 },[KK],"sat");
	 $A(QK);break;
	case 2:
	 var mL=$f(1,function(nL){
	  var oL=$f(5,function(pL,qL,rL,sL,tL){
	   var DL=qL+rL|0;
	   var FL=NK+DL|0;
	   var uL=DL>=FL?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(uL.g){
	   case 1:
	    var EL=FL-DL|0;
	    var CL=EL>>>0;
	    var BL=MK>>>0;
	    var AL=DL>>>0;
	    var $ff=_hs_text_memcpy(pL,AL,LK,BL,CL);
	    var vL=[tL,$ff];
	    var wL=vL[0];
	    var zL=sL-NK|0;
	    var yL=rL+NK|0;
	    var xL=$d(1,[pL,qL,yL,zL],"sat");
	    nL.J(xL,wL);break;
	   case 2:
	    var IL=sL-NK|0;
	    var HL=rL+NK|0;
	    var GL=$d(1,[pL,qL,HL,IL],"sat");
	    nL.J(GL,tL);break;
	   }
	  },[NK,LK,MK,nL],"$wa1");
	  var JL=$f(1,function(KL){
	   var LL=$f(1,function(ML){
	    var NL=ML<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(NL.g){
	    case 1:
	     var UL=ML>>>0;
	     var TL=UL&1073741824;
	     var OL=TL|0;
	     switch(OL){
	     case 0:
	      var SL=ML<<1;
	      var PL=$hs_newByteArrayzh(SL,KL);
	      var QL=PL[0],RL=PL[1];
	      oL.J(RL,0,0,ML,QL);break;
	     default:
	      $A($$TextziBlazzeziRendererziText$P);
	     }break;
	    case 2:
	     $A($$TextziBlazzeziRendererziText$P);break;
	    }
	   },[oL,KL],"$j");
	   var VL=NK<=120?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(VL.g){
	   case 1:
	    LL.J(NK);break;
	   case 2:
	    LL.J(120);break;
	   }
	  },[NK,oL],"$wa9");
	  var WL=$f(2,function(XL,YL){
	   $M(XL,function(ZL){
	    var aM=ZL.v[0],bM=ZL.v[1],cM=ZL.v[2],dM=ZL.v[3];
	    var eM=NK<=dM?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(eM.g){
	    case 1:
	     $M(cM,function(fM){
	      switch(fM){
	      case 0:
	       JL.J(YL);break;
	      default:
	       var gM=$t(function(){
		JL.C([YL],function(hM){
		 var iM=hM[1];
		 $A(iM);
		},[]);
	       },[JL,YL],"sat");
	       var jM=$d(1,[aM,bM,fM],"sat");
	       var kM=$d(2,[jM,gM],"sat");
	       $r([YL,kM]);
	      }
	     },[JL,YL,aM,bM]);break;
	    case 2:
	     oL.J(aM,bM,cM,dM,YL);break;
	    }
	   },[NK,oL,JL,YL]);
	  },[NK,oL,JL],"sat");
	  $A(WL);
	 },[NK,LK,MK],"sat");
	 $A(mL);break;
	}break;
       case 2:
	$A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
       }
      },[]);
     },[]);
    },[bJ],"f");
    var lM=$f(1,function(mM){
     var nM=$t(function(){
      var oM=$t(function(){
       dJ.J(mM);
      },[dJ,mM],"sat");
      eC.J(oM);
     },[eC,dJ,mM],"sat");
     HK.J(nM);
    },[eC,dJ,HK],"sat");
    $A(lM);break;
   case 4:
    var pM=gC.v[0],qM=gC.v[1];
    var rM=$t(function(){
     $$TextziBlazzeziRendererziText_fromChoiceString.J(bC,pM);
    },[bC,pM],"g");
    var sM=$f(1,function(tM){
     var uM=$t(function(){
      var vM=$t(function(){
       var wM=$t(function(){
	$M(qM,function(xM){
	 switch(xM.g){
	 case 1:
	  $$TextziBlazzeziRendererziText$E.J(tM);break;
	 case 2:
	  var yM=$f(2,function(zM,AM){
	   $M(zM,function(BM){
	    var CM=BM.v[0],DM=BM.v[1],EM=BM.v[2],FM=BM.v[3];
	    var GM=$f(6,function(HM,IM,JM,KM,LM,MM){
	     $M(LM,function(NM){
	      switch(NM.g){
	      case 1:
	       var OM=$d(1,[HM,IM,JM,KM],"sat");
	       tM.J(OM,MM);break;
	      case 2:
	       var PM=NM.v[0],QM=NM.v[1];
	       var RM=KM<=1?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(RM.g){
	       case 1:
		$M(PM,function(SM){
		 var TM=SM.v[0];
		 var mN=$hs_ordzh(TM);
		 var bN=IM+JM|0;
		 var UM=mN<65536?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(UM.g){
		 case 1:
		  var hN=mN-65536|0;
		  var lN=hN>>10;
		  var kN=lN+55296|0;
		  var jN=kN>>>0;
		  var iN=jN&65535;
		  var aN=$hs_writeWord16Arrayzh(HM,bN,iN,MM);
		  var gN=hN>>>0;
		  var fN=gN&1023;
		  var eN=fN|0;
		  var dN=eN+56320|0;
		  var cN=dN>>>0;
		  var ZM=cN&65535;
		  var YM=bN+1|0;
		  var XM=$hs_writeWord16Arrayzh(HM,YM,ZM,aN);
		  var WM=KM-2|0;
		  var VM=JM+2|0;
		  GM.J(HM,IM,VM,WM,QM,XM);break;
		 case 2:
		  var rN=mN>>>0;
		  var qN=rN&65535;
		  var pN=$hs_writeWord16Arrayzh(HM,bN,qN,MM);
		  var oN=KM-1|0;
		  var nN=JM+1|0;
		  GM.J(HM,IM,nN,oN,QM,pN);break;
		 }
		},[HM,IM,JM,KM,MM,GM,QM]);break;
	       case 2:
		var sN=$hs_newByteArrayzh(240,MM);
		var tN=sN[0],uN=sN[1];
		var vN=$t(function(){
		 GM.C([uN,0,0,120,NM,tN],function(wN){
		  var xN=wN[1];
		  $A(xN);
		 },[]);
		},[GM,tN,uN,NM],"sat");
		var yN=$d(1,[HM,IM,JM],"sat");
		var zN=$d(2,[yN,vN],"sat");
		$r([tN,zN]);break;
	       }break;
	      }
	     },[tM,HM,IM,JM,KM,MM,GM]);
	    },[tM],"$wa1");
	    GM.J(CM,DM,EM,FM,$$TextziBlazzeziRendererziText$H,AM);
	   },[tM,AM]);
	  },[tM],"sat");
	  $A(yM);break;
	 }
	},[tM]);
       },[qM,tM],"sat");
       eC.J(wM);
      },[eC,qM,tM],"sat");
      rM.J(vM);
     },[eC,rM,qM,tM],"x1");
     var AN=$f(2,function(BN,CN){
      $M(BN,function(DN){
       var EN=DN.v[0],FN=DN.v[1],GN=DN.v[2],HN=DN.v[3];
       var IN=2<=HN?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(IN.g){
       case 1:
	$M(GN,function(JN){
	 switch(JN){
	 case 0:
	  var UN=$hs_newByteArrayzh(240,CN);
	  var VN=UN[0],WN=UN[1];
	  var YN=$hs_writeWord16Arrayzh(WN,0,60,VN);
	  var XN=$d(1,[WN,0,1,119],"sat");
	  uM.J(XN,YN);break;
	 default:
	  var KN=$t(function(){
	   var LN=$hs_newByteArrayzh(240,CN);
	   var MN=LN[0],NN=LN[1];
	   var RN=$hs_writeWord16Arrayzh(NN,0,60,MN);
	   var ON=$d(1,[NN,0,1,119],"sat");
	   uM.C([ON,RN],function(PN){
	    var QN=PN[1];
	    $A(QN);
	   },[]);
	  },[uM,CN],"sat");
	  var SN=$d(1,[EN,FN,JN],"sat");
	  var TN=$d(2,[SN,KN],"sat");
	  $r([CN,TN]);
	 }
	},[uM,CN,EN,FN]);break;
       case 2:
	var dO=FN+GN|0;
	var cO=$hs_writeWord16Arrayzh(EN,dO,60,CN);
	var bO=HN-1|0;
	var aO=GN+1|0;
	var ZN=$d(1,[EN,FN,aO,bO],"sat");
	uM.J(ZN,cO);break;
       }
      },[uM,CN]);
     },[uM],"sat");
     $A(AN);
    },[eC,rM,qM],"sat");
    $A(sM);break;
   case 5:
    var eO=gC.v[0];
    $$TextziBlazzeziRendererziText_fromChoiceString.J(bC,eO);break;
   case 6:
    var fO=gC.v[0],gO=gC.v[1];
    var hO=$t(function(){
     dC.J(eC,gO);
    },[dC,eC,gO],"g");
    var iO=$t(function(){
     dC.J(eC,fO);
    },[dC,eC,fO],"f");
    var jO=$f(1,function(kO){
     var lO=$t(function(){
      hO.J(kO);
     },[hO,kO],"sat");
     iO.J(lO);
    },[hO,iO],"sat");
    $A(jO);break;
   case 7:
    var mO=gC.v[1],nO=gC.v[2],oO=gC.v[3];
    var pO=$t(function(){
     var qO=$t(function(){
      $$TextziBlazzeziRendererziText_fromChoiceString.J(bC,nO);
     },[bC,nO],"g");
     var rO=$t(function(){
      $M(mO,function(sO){
       var tO=sO.v[2];
       $M(tO,function(uO){
	var vO=uO.v[0],wO=uO.v[1],xO=uO.v[2];
	var yO=xO<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(yO.g){
	case 1:
	 var zO=xO<=128?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(zO.g){
	 case 1:
	  var AO=$f(3,function(BO,CO,DO){
	   $M(CO,function(EO){
	    var FO=EO.v[0],GO=EO.v[1],HO=EO.v[2],IO=EO.v[3];
	    $M(HO,function(JO){
	     switch(JO){
	     case 0:
	      var RO=$d(1,[FO,GO,0,IO],"sat");
	      BO.C([RO,DO],function(SO){
	       var TO=SO[0],UO=SO[1];
	       var VO=$d(2,[uO,UO],"sat");
	       $r([TO,VO]);
	      },[uO]);break;
	     default:
	      var KO=$t(function(){
	       var MO=GO+JO|0;
	       var LO=$d(1,[FO,MO,0,IO],"sat");
	       BO.C([LO,DO],function(NO){
		var OO=NO[1];
		$R(2,[uO,OO],":");
	       },[uO]);
	      },[DO,FO,GO,JO,IO,BO,uO],"sat");
	      var PO=$d(1,[FO,GO,JO],"sat");
	      var QO=$d(2,[PO,KO],"sat");
	      $r([DO,QO]);
	     }
	    },[DO,FO,GO,IO,BO,uO]);
	   },[DO,BO,uO]);
	  },[uO],"sat");
	  $A(AO);break;
	 case 2:
	  var WO=$f(1,function(XO){
	   var YO=$f(5,function(ZO,aP,bP,cP,dP){
	    var nP=aP+bP|0;
	    var pP=xO+nP|0;
	    var eP=nP>=pP?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(eP.g){
	    case 1:
	     var oP=pP-nP|0;
	     var mP=oP>>>0;
	     var lP=wO>>>0;
	     var kP=nP>>>0;
	     var $ff=_hs_text_memcpy(ZO,kP,vO,lP,mP);
	     var fP=[dP,$ff];
	     var gP=fP[0];
	     var jP=cP-xO|0;
	     var iP=bP+xO|0;
	     var hP=$d(1,[ZO,aP,iP,jP],"sat");
	     XO.J(hP,gP);break;
	    case 2:
	     var sP=cP-xO|0;
	     var rP=bP+xO|0;
	     var qP=$d(1,[ZO,aP,rP,sP],"sat");
	     XO.J(qP,dP);break;
	    }
	   },[xO,vO,wO,XO],"$wa1");
	   var tP=$f(1,function(uP){
	    var vP=$f(1,function(wP){
	     var xP=wP<0?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(xP.g){
	     case 1:
	      var EP=wP>>>0;
	      var DP=EP&1073741824;
	      var yP=DP|0;
	      switch(yP){
	      case 0:
	       var CP=wP<<1;
	       var zP=$hs_newByteArrayzh(CP,uP);
	       var AP=zP[0],BP=zP[1];
	       YO.J(BP,0,0,wP,AP);break;
	      default:
	       $A($$TextziBlazzeziRendererziText$R);
	      }break;
	     case 2:
	      $A($$TextziBlazzeziRendererziText$R);break;
	     }
	    },[YO,uP],"$j");
	    var FP=xO<=120?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(FP.g){
	    case 1:
	     vP.J(xO);break;
	    case 2:
	     vP.J(120);break;
	    }
	   },[xO,YO],"$wa9");
	   var GP=$f(2,function(HP,IP){
	    $M(HP,function(JP){
	     var KP=JP.v[0],LP=JP.v[1],MP=JP.v[2],NP=JP.v[3];
	     var OP=xO<=NP?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(OP.g){
	     case 1:
	      $M(MP,function(PP){
	       switch(PP){
	       case 0:
		tP.J(IP);break;
	       default:
		var QP=$t(function(){
		 tP.C([IP],function(RP){
		  var SP=RP[1];
		  $A(SP);
		 },[]);
		},[tP,IP],"sat");
		var TP=$d(1,[KP,LP,PP],"sat");
		var UP=$d(2,[TP,QP],"sat");
		$r([IP,UP]);
	       }
	      },[tP,IP,KP,LP]);break;
	     case 2:
	      YO.J(KP,LP,MP,NP,IP);break;
	     }
	    },[xO,YO,tP,IP]);
	   },[xO,YO,tP],"sat");
	   $A(GP);
	  },[xO,vO,wO],"sat");
	  $A(WO);break;
	 }break;
	case 2:
	 $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
	}
       },[]);
      },[]);
     },[mO],"f");
     var VP=$f(1,function(WP){
      var XP=$t(function(){
       var YP=$t(function(){
	eC.J(WP);
       },[eC,WP],"x1");
       var ZP=$f(2,function(aQ,bQ){
	$M(aQ,function(cQ){
	 var dQ=cQ.v[0],eQ=cQ.v[1],fQ=cQ.v[2],gQ=cQ.v[3];
	 var hQ=2<=gQ?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(hQ.g){
	 case 1:
	  $M(fQ,function(iQ){
	   switch(iQ){
	   case 0:
	    var tQ=$hs_newByteArrayzh(240,bQ);
	    var uQ=tQ[0],vQ=tQ[1];
	    var xQ=$hs_writeWord16Arrayzh(vQ,0,34,uQ);
	    var wQ=$d(1,[vQ,0,1,119],"sat");
	    YP.J(wQ,xQ);break;
	   default:
	    var jQ=$t(function(){
	     var kQ=$hs_newByteArrayzh(240,bQ);
	     var lQ=kQ[0],mQ=kQ[1];
	     var qQ=$hs_writeWord16Arrayzh(mQ,0,34,lQ);
	     var nQ=$d(1,[mQ,0,1,119],"sat");
	     YP.C([nQ,qQ],function(oQ){
	      var pQ=oQ[1];
	      $A(pQ);
	     },[]);
	    },[YP,bQ],"sat");
	    var rQ=$d(1,[dQ,eQ,iQ],"sat");
	    var sQ=$d(2,[rQ,jQ],"sat");
	    $r([bQ,sQ]);
	   }
	  },[YP,bQ,dQ,eQ]);break;
	 case 2:
	  var CQ=eQ+fQ|0;
	  var BQ=$hs_writeWord16Arrayzh(dQ,CQ,34,bQ);
	  var AQ=gQ-1|0;
	  var zQ=fQ+1|0;
	  var yQ=$d(1,[dQ,eQ,zQ,AQ],"sat");
	  YP.J(yQ,BQ);break;
	 }
	},[YP,bQ]);
       },[YP],"sat");
       qO.J(ZP);
      },[eC,qO,WP],"sat");
      rO.J(XP);
     },[eC,qO,rO],"sat");
     $A(VP);
    },[eC,bC,nO,mO],"sat");
    dC.J(pO,oO);break;
   case 8:
    var DQ=gC.v[0],EQ=gC.v[1],FQ=gC.v[2];
    var GQ=$t(function(){
     var HQ=$t(function(){
      $$TextziBlazzeziRendererziText_fromChoiceString.J(bC,EQ);
     },[bC,EQ],"g");
     var IQ=$t(function(){
      $$TextziBlazzeziRendererziText_fromChoiceString.J(bC,DQ);
     },[bC,DQ],"g1");
     var JQ=$f(1,function(KQ){
      var LQ=$t(function(){
       var MQ=$t(function(){
	var NQ=$t(function(){
	 eC.J(KQ);
	},[eC,KQ],"x2");
	var OQ=$f(2,function(PQ,QQ){
	 $M(PQ,function(RQ){
	  var SQ=RQ.v[0],TQ=RQ.v[1],UQ=RQ.v[2],VQ=RQ.v[3];
	  var WQ=2<=VQ?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(WQ.g){
	  case 1:
	   $M(UQ,function(XQ){
	    switch(XQ){
	    case 0:
	     var iR=$hs_newByteArrayzh(240,QQ);
	     var jR=iR[0],kR=iR[1];
	     var mR=$hs_writeWord16Arrayzh(kR,0,34,jR);
	     var lR=$d(1,[kR,0,1,119],"sat");
	     NQ.J(lR,mR);break;
	    default:
	     var YQ=$t(function(){
	      var ZQ=$hs_newByteArrayzh(240,QQ);
	      var aR=ZQ[0],bR=ZQ[1];
	      var fR=$hs_writeWord16Arrayzh(bR,0,34,aR);
	      var cR=$d(1,[bR,0,1,119],"sat");
	      NQ.C([cR,fR],function(dR){
	       var eR=dR[1];
	       $A(eR);
	      },[]);
	     },[NQ,QQ],"sat");
	     var gR=$d(1,[SQ,TQ,XQ],"sat");
	     var hR=$d(2,[gR,YQ],"sat");
	     $r([QQ,hR]);
	    }
	   },[NQ,QQ,SQ,TQ]);break;
	  case 2:
	   var rR=TQ+UQ|0;
	   var qR=$hs_writeWord16Arrayzh(SQ,rR,34,QQ);
	   var pR=VQ-1|0;
	   var oR=UQ+1|0;
	   var nR=$d(1,[SQ,TQ,oR,pR],"sat");
	   NQ.J(nR,qR);break;
	  }
	 },[NQ,QQ]);
	},[NQ],"sat");
	HQ.J(OQ);
       },[eC,HQ,KQ],"k");
       var sR=$f(6,function(tR,uR,vR,wR,xR,yR){
	$M(xR,function(zR){
	 switch(zR.g){
	 case 1:
	  var AR=$d(1,[tR,uR,vR,wR],"sat");
	  MQ.J(AR,yR);break;
	 case 2:
	  var BR=zR.v[0],CR=zR.v[1];
	  var DR=wR<=1?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(DR.g){
	  case 1:
	   $M(BR,function(ER){
	    var FR=ER.v[0];
	    var YR=$hs_ordzh(FR);
	    var NR=uR+vR|0;
	    var GR=YR<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(GR.g){
	    case 1:
	     var TR=YR-65536|0;
	     var XR=TR>>10;
	     var WR=XR+55296|0;
	     var VR=WR>>>0;
	     var UR=VR&65535;
	     var MR=$hs_writeWord16Arrayzh(tR,NR,UR,yR);
	     var SR=TR>>>0;
	     var RR=SR&1023;
	     var QR=RR|0;
	     var PR=QR+56320|0;
	     var OR=PR>>>0;
	     var LR=OR&65535;
	     var KR=NR+1|0;
	     var JR=$hs_writeWord16Arrayzh(tR,KR,LR,MR);
	     var IR=wR-2|0;
	     var HR=vR+2|0;
	     sR.J(tR,uR,HR,IR,CR,JR);break;
	    case 2:
	     var dS=YR>>>0;
	     var cS=dS&65535;
	     var bS=$hs_writeWord16Arrayzh(tR,NR,cS,yR);
	     var aS=wR-1|0;
	     var ZR=vR+1|0;
	     sR.J(tR,uR,ZR,aS,CR,bS);break;
	    }
	   },[tR,uR,vR,wR,yR,sR,CR]);break;
	  case 2:
	   var eS=$hs_newByteArrayzh(240,yR);
	   var fS=eS[0],gS=eS[1];
	   var hS=$t(function(){
	    sR.C([gS,0,0,120,zR,fS],function(iS){
	     var jS=iS[1];
	     $A(jS);
	    },[]);
	   },[sR,fS,gS,zR],"sat");
	   var kS=$d(1,[tR,uR,vR],"sat");
	   var lS=$d(2,[kS,hS],"sat");
	   $r([fS,lS]);break;
	  }break;
	 }
	},[MQ,tR,uR,vR,wR,yR,sR]);
       },[MQ],"$wa1");
       var mS=$f(2,function(nS,oS){
	$M(nS,function(pS){
	 var qS=pS.v[0],rS=pS.v[1],sS=pS.v[2],tS=pS.v[3];
	 sR.J(qS,rS,sS,tS,$$TextziBlazzeziRendererziText$F,oS);
	},[sR,oS]);
       },[sR],"sat");
       IQ.J(mS);
      },[eC,HQ,IQ,KQ],"x1");
      var uS=$f(2,function(vS,wS){
       $M(vS,function(xS){
	var yS=xS.v[0],zS=xS.v[1],AS=xS.v[2],BS=xS.v[3];
	var CS=2<=BS?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(CS.g){
	case 1:
	 $M(AS,function(DS){
	  switch(DS){
	  case 0:
	   var OS=$hs_newByteArrayzh(240,wS);
	   var PS=OS[0],QS=OS[1];
	   var SS=$hs_writeWord16Arrayzh(QS,0,32,PS);
	   var RS=$d(1,[QS,0,1,119],"sat");
	   LQ.J(RS,SS);break;
	  default:
	   var ES=$t(function(){
	    var FS=$hs_newByteArrayzh(240,wS);
	    var GS=FS[0],HS=FS[1];
	    var LS=$hs_writeWord16Arrayzh(HS,0,32,GS);
	    var IS=$d(1,[HS,0,1,119],"sat");
	    LQ.C([IS,LS],function(JS){
	     var KS=JS[1];
	     $A(KS);
	    },[]);
	   },[LQ,wS],"sat");
	   var MS=$d(1,[yS,zS,DS],"sat");
	   var NS=$d(2,[MS,ES],"sat");
	   $r([wS,NS]);
	  }
	 },[LQ,wS,yS,zS]);break;
	case 2:
	 var XS=zS+AS|0;
	 var WS=$hs_writeWord16Arrayzh(yS,XS,32,wS);
	 var VS=BS-1|0;
	 var US=AS+1|0;
	 var TS=$d(1,[yS,zS,US,VS],"sat");
	 LQ.J(TS,WS);break;
	}
       },[LQ,wS]);
      },[LQ],"sat");
      $A(uS);
     },[eC,HQ,IQ],"sat");
     $A(JQ);
    },[eC,bC,EQ,DQ],"sat");
    dC.J(GQ,FQ);break;
   case 9:
    $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
   }
  },[dC,eC,bC]);
 },[bC],"go1");
 dC.C([$$TextziBlazzeziRendererziText_renderMarkupBuilder1,cC],function(YS){
  $$DataziTextziLazzyziBuilder_zdwtoLazzyTextWith.J(120,YS);
 },[]);
},[],"at src/Text/Blaze/Renderer/Text.hs:158:1");
var $$TextziBlazzeziRendererziText$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow\x00");
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
 $$GHCziCString_unpackCStringzh.J("</\x00");
},"str");
var $$TextziBlazzeziRendererziText$h=$F(3,function(ZS,aT,bT){
 $M(aT,function(cT){
  switch(cT.g){
  case 1:
   $r([bT,$$GHCziTuple_Z0T]);break;
  case 2:
   var dT=cT.v[0],eT=cT.v[1];
   $M(dT,function(fT){
    var gT=fT.v[0];
    var kT=$hs_ordzh(gT);
    var jT=kT>>>0;
    var iT=$hs_writeWord8OffAddrzh(ZS,0,jT,bT);
    var hT=$hs_plusAddrzh(ZS,1);
    $$TextziBlazzeziRendererziText$h.J(hT,eT,iT);
   },[bT,ZS,eT]);break;
  }
 },[bT,ZS]);
},"a");
var $$TextziBlazzeziRendererziText$i=$F(1,function(lT){
 $$GHCziList_zdwlen.C([$$TextziBlazzeziRendererziText$g,0],function(vT){
  var mT=vT<0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(mT.g){
  case 1:
   var nT=$hs_newPinnedByteArrayzh(vT,lT);
   var oT=nT[0],pT=nT[1];
   var uT=$hs_byteArrayContentszh(pT);
   $$TextziBlazzeziRendererziText$h.C([uT,$$TextziBlazzeziRendererziText$g,oT],function(qT){
    var rT=qT[0];
    var sT=$d(3,[pT],"a6");
    var wT=$hs_touchzh(sT,rT);
    var tT=$d(1,[uT,sT,0,vT],"sat");
    $r([wT,tT]);
   },[vT,pT,uT]);break;
  case 2:
   $A($$GHCziForeignPtr_mallocPlainForeignPtrBytes2);break;
  }
 },[lT]);
},"lvl1");
var $$TextziBlazzeziRendererziText$j=$T(function(){
 $$GHCziIO_unsafeDupablePerformIO.J($$TextziBlazzeziRendererziText$i);
},"lvl2");
var $$TextziBlazzeziRendererziText$k=$T(function(){
 $$DataziText_unpackCStringzh.J("</\x00");
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
var $$TextziBlazzeziRendererziText$q=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a9");
var $$TextziBlazzeziRendererziText$r=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a10");
var $$TextziBlazzeziRendererziText$s=$F(1,function(xT){
 $M(xT,function(yT){
  switch(yT.g){
  case 1:
   $A($$TextziBlazzeziRendererziText_renderMarkupBuilder1);break;
  case 2:
   var zT=yT.v[0],AT=yT.v[1];
   $M(zT,function(BT){
    var CT=BT.v[0];
    $M(AT,function(DT){
     var ET=$t(function(){
      $$TextziBlazzeziRendererziText$s.J(DT);
     },[DT],"w");
     var FT=$f(1,function(GT){
      $$TextziBlazzeziRendererziText_zdwa.J(CT,ET,GT);
     },[ET,CT],"sat");
     $A(FT);
    },[CT]);
   },[AT]);break;
  }
 },[]);
},"loop_foldr");
var $$TextziBlazzeziRendererziText$E=$F(3,function(tY,uY,vY){
 $M(uY,function(wY){
  var xY=wY.v[0],yY=wY.v[1],zY=wY.v[2],AY=wY.v[3];
  var BY=2<=AY?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(BY.g){
  case 1:
   $M(zY,function(CY){
    switch(CY){
    case 0:
     var NY=$hs_newByteArrayzh(240,vY);
     var OY=NY[0],PY=NY[1];
     var RY=$hs_writeWord16Arrayzh(PY,0,62,OY);
     var QY=$d(1,[PY,0,1,119],"sat");
     tY.J(QY,RY);break;
    default:
     var DY=$t(function(){
      var EY=$hs_newByteArrayzh(240,vY);
      var FY=EY[0],GY=EY[1];
      var KY=$hs_writeWord16Arrayzh(GY,0,62,FY);
      var HY=$d(1,[GY,0,1,119],"sat");
      tY.C([HY,KY],function(IY){
       var JY=IY[1];
       $A(JY);
      },[]);
     },[vY,tY],"sat");
     var LY=$d(1,[xY,yY,CY],"sat");
     var MY=$d(2,[LY,DY],"sat");
     $r([vY,MY]);
    }
   },[vY,xY,yY,tY]);break;
  case 2:
   var WY=yY+zY|0;
   var VY=$hs_writeWord16Arrayzh(xY,WY,62,vY);
   var UY=AY-1|0;
   var TY=zY+1|0;
   var SY=$d(1,[xY,yY,TY,UY],"sat");
   tY.J(SY,VY);break;
  }
 },[vY,tY]);
},"lvl8");
var $$TextziBlazzeziRendererziText$F=$T(function(){
 $$GHCziCString_unpackCStringzh.J("=\"\x00");
},"str1");
var $$TextziBlazzeziRendererziText$H=$T(function(){
 $$GHCziCString_unpackCStringzh.J(" />\x00");
},"str2");
var $$TextziBlazzeziRendererziText$N=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a24");
var $$TextziBlazzeziRendererziText$O=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a25");
var $$TextziBlazzeziRendererziText$P=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a26");
var $$TextziBlazzeziRendererziText$Q=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a27");
var $$TextziBlazzeziRendererziText$R=$T(function(){
 $$GHCziErr_error.J($$TextziBlazzeziRendererziText$a);
},"poly_a28");

var $$DataziText_unpackCStringzh=$f(1,function(p2L){
 var q2L=$f(5,function(r2L,s2L,t2L,u2L,v2L){
  var D2R=$hs_indexCharOffAddrzh(p2L,t2L);
  var w2L=$hs_ordzh(D2R);
  switch(w2L){
  case 0:
   var F2R=$d(1,[u2L],"sat");
   var G2R=$d(1,[r2L],"sat");
   var H2R=$d(1,[G2R,F2R],"sat");
   $r([v2L,H2R]);break;
  default:
   var x2L=$f(3,function(y2L,z2L,A2L){
    var C2L=$hs_ordzh(y2L);
    var D2L=C2L-65536|0;
    var B2L=$f(2,function(E2L,F2L){
     var G2L=E2L>=s2L?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(G2L.g){
     case 1:
      var H2L=C2L<65536?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(H2L.g){
      case 1:
       var d2O=D2L>>10;
       var c2O=d2O+55296|0;
       var b2O=c2O>>>0;
       var a2O=b2O&65535;
       var U2N=$hs_writeWord16Arrayzh(r2L,u2L,a2O,F2L);
       var Z2N=D2L>>>0;
       var Y2N=Z2N&1023;
       var X2N=Y2N|0;
       var W2N=X2N+56320|0;
       var V2N=W2N>>>0;
       var T2N=V2N&65535;
       var S2N=u2L+1|0;
       var R2N=$hs_writeWord16Arrayzh(r2L,S2N,T2N,U2N);
       var I2L=$f(3,function(J2L,K2L,L2L){
	var M2N=$hs_indexCharOffAddrzh(p2L,J2L);
	var M2L=$hs_ordzh(M2N);
	switch(M2L){
	case 0:
	 var N2N=$d(1,[K2L],"sat");
	 var O2N=$d(1,[r2L],"sat");
	 var P2N=$d(1,[O2N,N2N],"sat");
	 $r([L2L,P2N]);break;
	default:
	 var N2L=$f(3,function(O2L,P2L,Q2L){
	  var S2L=$hs_ordzh(O2L);
	  var T2L=S2L-65536|0;
	  var R2L=$f(2,function(U2L,V2L){
	   var W2L=U2L>=s2L?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(W2L.g){
	   case 1:
	    var X2L=S2L<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(X2L.g){
	    case 1:
	     var n2M=T2L>>10;
	     var m2M=n2M+55296|0;
	     var l2M=m2M>>>0;
	     var k2M=l2M&65535;
	     var e2M=$hs_writeWord16Arrayzh(r2L,K2L,k2M,V2L);
	     var j2M=T2L>>>0;
	     var i2M=j2M&1023;
	     var h2M=i2M|0;
	     var g2M=h2M+56320|0;
	     var f2M=g2M>>>0;
	     var d2M=f2M&65535;
	     var c2M=K2L+1|0;
	     var b2M=$hs_writeWord16Arrayzh(r2L,c2M,d2M,e2M);
	     $M(P2L,function(Y2L){
	      var Z2L=Y2L.v[0];
	      var a2M=K2L+2|0;
	      I2L.J(Z2L,a2M,b2M);
	     },[p2L,s2L,r2L,K2L,I2L,b2M,q2L]);break;
	    case 2:
	     var t2M=S2L>>>0;
	     var s2M=t2M&65535;
	     var r2M=$hs_writeWord16Arrayzh(r2L,K2L,s2M,V2L);
	     $M(P2L,function(o2M){
	      var p2M=o2M.v[0];
	      var q2M=K2L+1|0;
	      I2L.J(p2M,q2M,r2M);
	     },[p2L,s2L,r2L,K2L,I2L,r2M,q2L]);break;
	    }break;
	   case 2:
	    var H2M=s2L+1|0;
	    var C2M=H2M<<1;
	    var u2M=C2M<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(u2M.g){
	    case 1:
	     var G2M=C2M>>>0;
	     var F2M=G2M&1073741824;
	     var v2M=F2M|0;
	     switch(v2M){
	     case 0:
	      var E2M=C2M<<1;
	      var w2M=$hs_newByteArrayzh(E2M,V2L);
	      var x2M=w2M[0],y2M=w2M[1];
	      var z2M=s2L<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(z2M.g){
	      case 1:
	       var D2M=s2L>>>0;
	       var $ff=_hs_text_memcpy(y2M,0,r2L,0,D2M);
	       var A2M=[x2M,$ff];
	       var B2M=A2M[0];
	       q2L.J(y2M,C2M,J2L,K2L,B2M);break;
	      case 2:
	       q2L.J(y2M,C2M,J2L,K2L,x2M);break;
	      }break;
	     default:
	      $A($$DataziText$Q1);
	     }break;
	    case 2:
	     $A($$DataziText$Q1);break;
	    }break;
	   }
	  },[s2L,r2L,J2L,S2L,T2L,K2L,P2L,I2L,q2L],"a3");
	  var K2M=$hs_ordzh(O2L);
	  var I2M=K2M<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(I2M.g){
	  case 1:
	   var J2M=K2L+1|0;
	   R2L.J(J2M,Q2L);break;
	  case 2:
	   R2L.J(K2L,Q2L);break;
	  }
	 },[s2L,r2L,J2L,K2L,I2L,q2L],"$wa2");
	 var L2M=M2L<=127?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(L2M.g){
	 case 1:
	  var M2M=M2L<=223?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(M2M.g){
	  case 1:
	   var N2M=M2L<=239?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(N2M.g){
	   case 1:
	    var j2N=J2L+1|0;
	    var b2N=$hs_indexCharOffAddrzh(p2L,j2N);
	    var i2N=J2L+2|0;
	    var e2N=$hs_indexCharOffAddrzh(p2L,i2N);
	    var h2N=J2L+3|0;
	    var g2N=$hs_indexCharOffAddrzh(p2L,h2N);
	    var P2M=J2L+4|0;
	    var O2M=$d(1,[P2M],"sat");
	    var f2N=$hs_ordzh(g2N);
	    var T2M=f2N-128|0;
	    var d2N=$hs_ordzh(e2N);
	    var c2N=d2N-128|0;
	    var V2M=c2N<<6;
	    var a2N=$hs_ordzh(b2N);
	    var Z2M=a2N-128|0;
	    var X2M=Z2M<<12;
	    var Y2M=M2L-240|0;
	    var W2M=Y2M<<18;
	    var U2M=W2M+X2M|0;
	    var S2M=U2M+V2M|0;
	    var R2M=S2M+T2M|0;
	    var Q2M=$hs_chrzh(R2M);
	    N2L.J(Q2M,O2M,L2L);break;
	   case 2:
	    var z2N=J2L+1|0;
	    var v2N=$hs_indexCharOffAddrzh(p2L,z2N);
	    var y2N=J2L+2|0;
	    var x2N=$hs_indexCharOffAddrzh(p2L,y2N);
	    var l2N=J2L+3|0;
	    var k2N=$d(1,[l2N],"sat");
	    var w2N=$hs_ordzh(x2N);
	    var p2N=w2N-128|0;
	    var u2N=$hs_ordzh(v2N);
	    var t2N=u2N-128|0;
	    var r2N=t2N<<6;
	    var s2N=M2L-224|0;
	    var q2N=s2N<<12;
	    var o2N=q2N+r2N|0;
	    var n2N=o2N+p2N|0;
	    var m2N=$hs_chrzh(n2N);
	    N2L.J(m2N,k2N,L2L);break;
	   }break;
	  case 2:
	   var J2N=J2L+1|0;
	   var I2N=$hs_indexCharOffAddrzh(p2L,J2N);
	   var B2N=J2L+2|0;
	   var A2N=$d(1,[B2N],"sat");
	   var H2N=$hs_ordzh(I2N);
	   var F2N=H2N-128|0;
	   var G2N=M2L-192|0;
	   var E2N=G2N<<6;
	   var D2N=E2N+F2N|0;
	   var C2N=$hs_chrzh(D2N);
	   N2L.J(C2N,A2N,L2L);break;
	  }break;
	 case 2:
	  var L2N=J2L+1|0;
	  var K2N=$d(1,[L2N],"sat");
	  N2L.J(M2N,K2N,L2L);break;
	 }
	}
       },[p2L,s2L,r2L,q2L],"$wa1");
       var Q2N=u2L+2|0;
       I2L.J(z2L,Q2N,R2N);break;
      case 2:
       var p2Q=C2L>>>0;
       var o2Q=p2Q&65535;
       var n2Q=$hs_writeWord16Arrayzh(r2L,u2L,o2Q,F2L);
       var e2O=$f(3,function(f2O,g2O,h2O){
	var i2Q=$hs_indexCharOffAddrzh(p2L,f2O);
	var i2O=$hs_ordzh(i2Q);
	switch(i2O){
	case 0:
	 var j2Q=$d(1,[g2O],"sat");
	 var k2Q=$d(1,[r2L],"sat");
	 var l2Q=$d(1,[k2Q,j2Q],"sat");
	 $r([h2O,l2Q]);break;
	default:
	 var j2O=$f(3,function(k2O,l2O,m2O){
	  var o2O=$hs_ordzh(k2O);
	  var p2O=o2O-65536|0;
	  var n2O=$f(2,function(q2O,r2O){
	   var s2O=q2O>=s2L?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(s2O.g){
	   case 1:
	    var t2O=o2O<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(t2O.g){
	    case 1:
	     var J2O=p2O>>10;
	     var I2O=J2O+55296|0;
	     var H2O=I2O>>>0;
	     var G2O=H2O&65535;
	     var A2O=$hs_writeWord16Arrayzh(r2L,g2O,G2O,r2O);
	     var F2O=p2O>>>0;
	     var E2O=F2O&1023;
	     var D2O=E2O|0;
	     var C2O=D2O+56320|0;
	     var B2O=C2O>>>0;
	     var z2O=B2O&65535;
	     var y2O=g2O+1|0;
	     var x2O=$hs_writeWord16Arrayzh(r2L,y2O,z2O,A2O);
	     $M(l2O,function(u2O){
	      var v2O=u2O.v[0];
	      var w2O=g2O+2|0;
	      e2O.J(v2O,w2O,x2O);
	     },[p2L,s2L,r2L,q2L,g2O,e2O,x2O]);break;
	    case 2:
	     var P2O=o2O>>>0;
	     var O2O=P2O&65535;
	     var N2O=$hs_writeWord16Arrayzh(r2L,g2O,O2O,r2O);
	     $M(l2O,function(K2O){
	      var L2O=K2O.v[0];
	      var M2O=g2O+1|0;
	      e2O.J(L2O,M2O,N2O);
	     },[p2L,s2L,r2L,q2L,g2O,e2O,N2O]);break;
	    }break;
	   case 2:
	    var d2P=s2L+1|0;
	    var Y2O=d2P<<1;
	    var Q2O=Y2O<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Q2O.g){
	    case 1:
	     var c2P=Y2O>>>0;
	     var b2P=c2P&1073741824;
	     var R2O=b2P|0;
	     switch(R2O){
	     case 0:
	      var a2P=Y2O<<1;
	      var S2O=$hs_newByteArrayzh(a2P,r2O);
	      var T2O=S2O[0],U2O=S2O[1];
	      var V2O=s2L<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(V2O.g){
	      case 1:
	       var Z2O=s2L>>>0;
	       var $ff=_hs_text_memcpy(U2O,0,r2L,0,Z2O);
	       var W2O=[T2O,$ff];
	       var X2O=W2O[0];
	       q2L.J(U2O,Y2O,f2O,g2O,X2O);break;
	      case 2:
	       q2L.J(U2O,Y2O,f2O,g2O,T2O);break;
	      }break;
	     default:
	      $A($$DataziText$Q1);
	     }break;
	    case 2:
	     $A($$DataziText$Q1);break;
	    }break;
	   }
	  },[s2L,r2L,q2L,f2O,o2O,p2O,g2O,l2O,e2O],"a3");
	  var g2P=$hs_ordzh(k2O);
	  var e2P=g2P<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(e2P.g){
	  case 1:
	   var f2P=g2O+1|0;
	   n2O.J(f2P,m2O);break;
	  case 2:
	   n2O.J(g2O,m2O);break;
	  }
	 },[s2L,r2L,q2L,f2O,g2O,e2O],"$wa2");
	 var h2P=i2O<=127?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(h2P.g){
	 case 1:
	  var i2P=i2O<=223?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(i2P.g){
	  case 1:
	   var j2P=i2O<=239?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(j2P.g){
	   case 1:
	    var F2P=f2O+1|0;
	    var x2P=$hs_indexCharOffAddrzh(p2L,F2P);
	    var E2P=f2O+2|0;
	    var A2P=$hs_indexCharOffAddrzh(p2L,E2P);
	    var D2P=f2O+3|0;
	    var C2P=$hs_indexCharOffAddrzh(p2L,D2P);
	    var l2P=f2O+4|0;
	    var k2P=$d(1,[l2P],"sat");
	    var B2P=$hs_ordzh(C2P);
	    var p2P=B2P-128|0;
	    var z2P=$hs_ordzh(A2P);
	    var y2P=z2P-128|0;
	    var r2P=y2P<<6;
	    var w2P=$hs_ordzh(x2P);
	    var v2P=w2P-128|0;
	    var t2P=v2P<<12;
	    var u2P=i2O-240|0;
	    var s2P=u2P<<18;
	    var q2P=s2P+t2P|0;
	    var o2P=q2P+r2P|0;
	    var n2P=o2P+p2P|0;
	    var m2P=$hs_chrzh(n2P);
	    j2O.J(m2P,k2P,h2O);break;
	   case 2:
	    var V2P=f2O+1|0;
	    var R2P=$hs_indexCharOffAddrzh(p2L,V2P);
	    var U2P=f2O+2|0;
	    var T2P=$hs_indexCharOffAddrzh(p2L,U2P);
	    var H2P=f2O+3|0;
	    var G2P=$d(1,[H2P],"sat");
	    var S2P=$hs_ordzh(T2P);
	    var L2P=S2P-128|0;
	    var Q2P=$hs_ordzh(R2P);
	    var P2P=Q2P-128|0;
	    var N2P=P2P<<6;
	    var O2P=i2O-224|0;
	    var M2P=O2P<<12;
	    var K2P=M2P+N2P|0;
	    var J2P=K2P+L2P|0;
	    var I2P=$hs_chrzh(J2P);
	    j2O.J(I2P,G2P,h2O);break;
	   }break;
	  case 2:
	   var f2Q=f2O+1|0;
	   var e2Q=$hs_indexCharOffAddrzh(p2L,f2Q);
	   var X2P=f2O+2|0;
	   var W2P=$d(1,[X2P],"sat");
	   var d2Q=$hs_ordzh(e2Q);
	   var b2Q=d2Q-128|0;
	   var c2Q=i2O-192|0;
	   var a2Q=c2Q<<6;
	   var Z2P=a2Q+b2Q|0;
	   var Y2P=$hs_chrzh(Z2P);
	   j2O.J(Y2P,W2P,h2O);break;
	  }break;
	 case 2:
	  var h2Q=f2O+1|0;
	  var g2Q=$d(1,[h2Q],"sat");
	  j2O.J(i2Q,g2Q,h2O);break;
	 }
	}
       },[p2L,s2L,r2L,q2L],"$wa1");
       var m2Q=u2L+1|0;
       e2O.J(z2L,m2Q,n2Q);break;
      }break;
     case 2:
      var D2Q=s2L+1|0;
      var y2Q=D2Q<<1;
      var q2Q=y2Q<0?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(q2Q.g){
      case 1:
       var C2Q=y2Q>>>0;
       var B2Q=C2Q&1073741824;
       var r2Q=B2Q|0;
       switch(r2Q){
       case 0:
	var A2Q=y2Q<<1;
	var s2Q=$hs_newByteArrayzh(A2Q,F2L);
	var t2Q=s2Q[0],u2Q=s2Q[1];
	var v2Q=s2L<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(v2Q.g){
	case 1:
	 var z2Q=s2L>>>0;
	 var $ff=_hs_text_memcpy(u2Q,0,r2L,0,z2Q);
	 var w2Q=[t2Q,$ff];
	 var x2Q=w2Q[0];
	 q2L.J(u2Q,y2Q,t2L,u2L,x2Q);break;
	case 2:
	 q2L.J(u2Q,y2Q,t2L,u2L,t2Q);break;
	}break;
       default:
	$A($$DataziText$Q1);
       }break;
      case 2:
       $A($$DataziText$Q1);break;
      }break;
     }
    },[p2L,t2L,C2L,D2L,s2L,r2L,u2L,q2L,z2L],"a2");
    var G2Q=$hs_ordzh(y2L);
    var E2Q=G2Q<65536?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(E2Q.g){
    case 1:
     var F2Q=u2L+1|0;
     B2L.J(F2Q,A2L);break;
    case 2:
     B2L.J(u2L,A2L);break;
    }
   },[p2L,t2L,s2L,r2L,u2L,q2L],"$s$wa5");
   var H2Q=w2L<=127?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(H2Q.g){
   case 1:
    var I2Q=w2L<=223?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(I2Q.g){
    case 1:
     var J2Q=w2L<=239?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(J2Q.g){
     case 1:
      var e2R=t2L+1|0;
      var W2Q=$hs_indexCharOffAddrzh(p2L,e2R);
      var d2R=t2L+2|0;
      var Z2Q=$hs_indexCharOffAddrzh(p2L,d2R);
      var c2R=t2L+3|0;
      var b2R=$hs_indexCharOffAddrzh(p2L,c2R);
      var L2Q=t2L+4|0;
      var a2R=$hs_ordzh(b2R);
      var O2Q=a2R-128|0;
      var Y2Q=$hs_ordzh(Z2Q);
      var X2Q=Y2Q-128|0;
      var Q2Q=X2Q<<6;
      var V2Q=$hs_ordzh(W2Q);
      var U2Q=V2Q-128|0;
      var S2Q=U2Q<<12;
      var T2Q=w2L-240|0;
      var R2Q=T2Q<<18;
      var P2Q=R2Q+S2Q|0;
      var N2Q=P2Q+Q2Q|0;
      var M2Q=N2Q+O2Q|0;
      var K2Q=$hs_chrzh(M2Q);
      x2L.J(K2Q,L2Q,v2L);break;
     case 2:
      var t2R=t2L+1|0;
      var p2R=$hs_indexCharOffAddrzh(p2L,t2R);
      var s2R=t2L+2|0;
      var r2R=$hs_indexCharOffAddrzh(p2L,s2R);
      var g2R=t2L+3|0;
      var q2R=$hs_ordzh(r2R);
      var j2R=q2R-128|0;
      var o2R=$hs_ordzh(p2R);
      var n2R=o2R-128|0;
      var l2R=n2R<<6;
      var m2R=w2L-224|0;
      var k2R=m2R<<12;
      var i2R=k2R+l2R|0;
      var h2R=i2R+j2R|0;
      var f2R=$hs_chrzh(h2R);
      x2L.J(f2R,g2R,v2L);break;
     }break;
    case 2:
     var C2R=t2L+1|0;
     var B2R=$hs_indexCharOffAddrzh(p2L,C2R);
     var v2R=t2L+2|0;
     var A2R=$hs_ordzh(B2R);
     var y2R=A2R-128|0;
     var z2R=w2L-192|0;
     var x2R=z2R<<6;
     var w2R=x2R+y2R|0;
     var u2R=$hs_chrzh(w2R);
     x2L.J(u2R,v2R,v2L);break;
    }break;
   case 2:
    var E2R=t2L+1|0;
    x2L.J(D2R,E2R,v2L);break;
   }
  }
 },[p2L],"$s$wa4");
 var I2R=$f(1,function(J2R){
  var K2R=$hs_newByteArrayzh(8,J2R);
  var L2R=K2R[0],M2R=K2R[1];
  q2L.C([M2R,4,0,0,L2R],function(N2R){
   var O2R=N2R[0],P2R=N2R[1];
   $M(P2R,function(Q2R){
    var R2R=Q2R.v[0],S2R=Q2R.v[1];
    $M(R2R,function(T2R){
     var U2R=T2R.v[0];
     var V2R=$d(1,[U2R],"sat");
     var W2R=$d(1,[V2R,S2R],"sat");
     $r([O2R,W2R]);
    },[O2R,S2R]);
   },[O2R]);
  },[]);
 },[q2L],"sat");
 $$GHCziST_runSTRep.C([I2R],function(X2R){
  var Y2R=X2R.v[0],Z2R=X2R.v[1];
  $M(Z2R,function(a2S){
   var b2S=a2S.v[0];
   $M(b2S,function(c2S){
    switch(c2S){
    case 0:
     $A($$DataziTextziInternal_empty);break;
    default:
     $M(Y2R,function(d2S){
      var e2S=d2S.v[0];
      $R(1,[e2S,0,c2S],"Text");
     },[c2S]);
    }
   },[Y2R]);
  },[Y2R]);
 },[]);
},[],"at Data/Text.hs:384:1");
var $$DataziText$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow\x00");
},"lvl2");
var $$DataziText$Q1=$T(function(){
 $$GHCziErr_error.J($$DataziText$c);
},"poly_a36");

var $$DataziTextziArray_run2=$f(1,function(u){
 var v=$f(1,function(w){
  u.C([w],function(x){
   var y=x[0],z=x[1];
   $M(z,function(A){
    var B=A.v[0],C=A.v[1];
    $M(B,function(D){
     var E=D.v[0];
     var F=$d(1,[E],"sat");
     var G=$d(1,[F,C],"sat");
     $r([y,G]);
    },[y,C]);
   },[y]);
  },[]);
 },[u],"sat");
 $$GHCziST_runSTRep.J(v);
},[],"at Data/Text/Array.hs:180:1");

var $$DataziTextziEncoding_zdwdecodeUtf8With=$f(5,function(y1a,z1a,A1a,B1a,C1a){
 var m1c=B1a+C1a|0;
 var E1a=$hs_plusAddrzh(z1a,m1c);
 var D1a=$f(1,function(F1a){
  var G1a=C1a<0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(G1a.g){
  case 1:
   var d1c=C1a>>>0;
   var c1c=d1c&1073741824;
   var H1a=c1c|0;
   switch(H1a){
   case 0:
    var b1c=C1a<<1;
    var I1a=$hs_newByteArrayzh(b1c,F1a);
    var J1a=I1a[0],K1a=I1a[1];
    var L1a=$hs_newAlignedPinnedByteArrayzh(4,4,J1a);
    var M1a=L1a[0],N1a=L1a[1];
    var O1a=$hs_unsafeFreezzeByteArrayzh(N1a,M1a);
    var P1a=O1a[0],Q1a=O1a[1];
    var T1a=$hs_byteArrayContentszh(Q1a);
    var a1c=$hs_writeWord32OffAddrzh(T1a,0,0,P1a);
    var R1a=$d(1,[K1a],"dest");
    var S1a=$f(2,function(U1a,V1a){
     var $ff=_hs_text_decode_utf8(K1a,T1a,U1a,E1a);
     var W1a=[V1a,$ff];
     var X1a=W1a[0],Y1a=W1a[1];
     var Z1a=$hs_eqAddrzh(Y1a,E1a);
     switch(Z1a.g){
     case 1:
      var a1b=$hs_readWord8OffAddrzh(Y1a,0,X1a);
      var b1b=a1b[0],c1b=a1b[1];
      var d1b=$d(1,[c1b],"sat");
      var e1b=$d(2,[d1b],"sat");
      y1a.C([$$DataziTextziEncoding$r,e1b],function(f1b){
       switch(f1b.g){
       case 1:
	var g1b=$hs_plusAddrzh(Y1a,1);
	S1a.J(g1b,b1b);break;
       case 2:
	var h1b=f1b.v[0];
	var i1b=$hs_readWord32OffAddrzh(T1a,0,b1b);
	var j1b=i1b[0],k1b=i1b[1];
	$M(h1b,function(l1b){
	 var m1b=l1b.v[0];
	 var G1b=$hs_ordzh(m1b);
	 var n1b=G1b<65536?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(n1b.g){
	 case 1:
	  var B1b=G1b-65536|0;
	  var v1b=k1b|0;
	  var F1b=B1b>>10;
	  var E1b=F1b+55296|0;
	  var D1b=E1b>>>0;
	  var C1b=D1b&65535;
	  var u1b=$hs_writeWord16Arrayzh(K1a,v1b,C1b,j1b);
	  var A1b=B1b>>>0;
	  var z1b=A1b&1023;
	  var y1b=z1b|0;
	  var x1b=y1b+56320|0;
	  var w1b=x1b>>>0;
	  var t1b=w1b&65535;
	  var s1b=v1b+1|0;
	  var r1b=$hs_writeWord16Arrayzh(K1a,s1b,t1b,u1b);
	  var q1b=k1b+2>>>0;
	  var p1b=$hs_writeWord32OffAddrzh(T1a,0,q1b,r1b);
	  var o1b=$hs_plusAddrzh(Y1a,1);
	  S1a.J(o1b,p1b);break;
	 case 2:
	  var N1b=G1b>>>0;
	  var M1b=N1b&65535;
	  var L1b=k1b|0;
	  var K1b=$hs_writeWord16Arrayzh(K1a,L1b,M1b,j1b);
	  var J1b=k1b+1>>>0;
	  var I1b=$hs_writeWord32OffAddrzh(T1a,0,J1b,K1b);
	  var H1b=$hs_plusAddrzh(Y1a,1);
	  S1a.J(H1b,I1b);break;
	 }
	},[T1a,K1a,Y1a,S1a,k1b,j1b]);break;
       }
      },[T1a,K1a,Y1a,S1a,b1b]);break;
     case 2:
      var O1b=$hs_readWord32OffAddrzh(T1a,0,X1a);
      var P1b=O1b[0],Q1b=O1b[1];
      var S1b=Q1b|0;
      var R1b=$d(1,[S1b],"sat");
      var T1b=$d(1,[R1a,R1b],"sat");
      $r([P1b,T1b]);break;
     }
    },[E1a,T1a,K1a,R1a,y1a],"$wa");
    var Z1b=$hs_plusAddrzh(z1a,B1a);
    S1a.C([Z1b,a1c],function(U1b){
     var V1b=U1b[0],W1b=U1b[1];
     var Y1b=$hs_touchzh(Q1a,V1b);
     var X1b=$hs_touchzh(A1a,Y1b);
     $r([X1b,W1b]);
    },[Q1a,A1a]);break;
   default:
    $A($$DataziTextziEncoding$s);
   }break;
  case 2:
   $A($$DataziTextziEncoding$s);break;
  }
 },[z1a,B1a,C1a,E1a,y1a,A1a],"sat");
 $$DataziTextziArray_run2.C([D1a],function(e1c){
  var f1c=e1c.v[0],g1c=e1c.v[1];
  $M(g1c,function(h1c){
   var i1c=h1c.v[0];
   $M(i1c,function(j1c){
    switch(j1c){
    case 0:
     $A($$DataziTextziInternal_empty);break;
    default:
     $M(f1c,function(k1c){
      var l1c=k1c.v[0];
      $R(1,[l1c,0,j1c],"Text");
     },[j1c]);
    }
   },[f1c]);
  },[f1c]);
 },[]);
},[],"at Data/Text/Encoding.hs:99:1");
var $$DataziTextziEncoding_decodeUtf8=$f(1,function(u1c){
 $M(u1c,function(v1c){
  var w1c=v1c.v[0],x1c=v1c.v[1],y1c=v1c.v[2],z1c=v1c.v[3];
  $$DataziTextziEncoding_zdwdecodeUtf8With.J($$DataziTextziEncodingziError_strictDecode,w1c,x1c,y1c,z1c);
 },[]);
},[],"at Data/Text/Encoding.hs:133:1");
var $$DataziTextziEncoding$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow\x00");
},"lvl");
var $$DataziTextziEncoding$r=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Encoding.decodeUtf8: Invalid UTF-8 stream\x00");
},"at Data/Text/Encoding.hs:102:3");
var $$DataziTextziEncoding$s=$T(function(){
 $$GHCziErr_error.J($$DataziTextziEncoding$a);
},"poly_a8");

var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuds=$t(function(){
 $$GHCziCString_unpackCStringzh.J("text-0.11.2.1\x00");
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuds1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Data.Text.Encoding.Error\x00");
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("UnicodeException\x00");
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(1620853383,3080337074),goog.math.Long.fromBits(2380730774,2688082483),$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuds,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuds1,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuds2]);
},"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeException1=$D(1,function(){
 $r([goog.math.Long.fromBits(1620853383,3080337074),goog.math.Long.fromBits(2380730774,2688082483),$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuwild,$$GHCziTypes_ZMZN]);
},"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctypeOf=$f(1,function(J){
 $A($$DataziTextziEncodingziError_zdfExceptionUnicodeException1);
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshow=$f(1,function(K){
 $M(K,function(L){
  switch(L.g){
  case 1:
   var M=L.v[0],N=L.v[1];
   $M(N,function(O){
    switch(O.g){
    case 1:
     $$GHCziCString_unpackAppendCStringzh.J("Cannot decode input: \x00",M);break;
    case 2:
     var P=O.v[0];
     var Q=$t(function(){
      var R=$t(function(){
       $$GHCziCString_unpackAppendCStringzh.J("': \x00",M);
      },[M],"sat");
      $$Numeric_zdwshowIntAtBase.J($$GHCziWord_zdfRealWord8,$$GHCziWord_zdfIntegralWord8zuzdcquotRem,$$GHCziWord_zdfIntegralWord8zuzdctoInteger,$$GHCziWord_zdfShowWord8,$$DataziTextziEncodingziError$a,$$GHCziShow_intToDigit,P,R);
     },[M,P],"sat");
     $$GHCziCString_unpackAppendCStringzh.J("Cannot decode byte '\\x\x00",Q);break;
    }
   },[M]);break;
  case 2:
   var S=L.v[0],T=L.v[1];
   $M(T,function(U){
    switch(U.g){
    case 1:
     $$GHCziCString_unpackAppendCStringzh.J("Cannot encode input: \x00",S);break;
    case 2:
     var V=U.v[0];
     var W=$t(function(){
      var X=$t(function(){
       $$GHCziCString_unpackAppendCStringzh.J("': \x00",S);
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
     $$GHCziCString_unpackAppendCStringzh.J("Cannot encode character '\\x\x00",W);break;
    }
   },[S]);break;
  }
 },[]);
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshowsPrec=$f(3,function(c1,d1,e1){
 $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshow.C([d1],function(f1){
  $$GHCziBase_zpzp.J(f1,e1);
 },[e1]);
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshowList=$f(2,function(g1,h1){
 $M(g1,function(i1){
  switch(i1.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]\x00",h1);break;
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
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfShowUnicodeException=$D(1,function(){
 $r([$$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshowsPrec,$$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshow,$$DataziTextziEncodingziError_zdfShowUnicodeExceptionzuzdcshowList]);
},"at Data/Text/Encoding/Error.hs:92:10");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdcfromException=$f(1,function(x1){
 $M(x1,function(y1){
  var z1=y1.v[0],A1=y1.v[1];
  $$GHCziException_zdp1Exception.C([z1],function(B1){
   $$DataziTypeable_cast.J(B1,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctypeOf,A1);
  },[A1]);
 },[]);
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeException=$D(1,function(){
 $r([$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctypeOf,$$DataziTextziEncodingziError_zdfShowUnicodeException,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctoException,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdcfromException]);
},"at Data/Text/Encoding/Error.hs:95:10");
var $$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctoException=$f(1,function(C1){
 $R(1,[$$DataziTextziEncodingziError_zdfExceptionUnicodeException,C1],"SomeException");
},[],"in `text-0.11.2.1:Data.Text.Encoding.Error'");
var $$DataziTextziEncodingziError_strictDecode=$f(2,function(D1,E1){
 var F1=$d(1,[D1,E1],"sat");
 $$GHCziException_throw2.J(F1,$$DataziTextziEncodingziError_zdfExceptionUnicodeExceptionzuzdctoException);
},[],"at Data/Text/Encoding/Error.hs:99:1");
var $$DataziTextziEncodingziError$a=$D(1,function(){
 $r([16]);
},"lvl");
var $$DataziTextziEncodingziError$b=$D(1,function(){
 $r([16]);
},"lvl1");

var $$DataziTextziLazzy_fromChunkszugo=$f(1,function(L5X){
 $M(L5X,function(M5X){
  switch(M5X.g){
  case 1:
   $R(1,[],"Empty");break;
  case 2:
   var N5X=M5X.v[0],O5X=M5X.v[1];
   $M(N5X,function(P5X){
    var Q5X=P5X.v[0],R5X=P5X.v[1],S5X=P5X.v[2];
    $M(S5X,function(T5X){
     switch(T5X){
     case 0:
      $$DataziTextziLazzy_fromChunkszugo.J(O5X);break;
     default:
      var U5X=$t(function(){
       $$DataziTextziLazzy_fromChunkszugo.J(O5X);
      },[O5X],"sat");
      $R(2,[Q5X,R5X,T5X,U5X],"Chunk");
     }
    },[Q5X,R5X,O5X]);
   },[O5X]);break;
  }
 },[]);
},[],"in `text-0.11.2.1:Data.Text.Lazy'");

var $$DataziTextziLazzyziBuilder_fromString=$f(4,function(u,v,w,x){
 $$DataziTextziLazzyziBuilder$c.J(u,v,w,x);
},[],"at Data/Text/Lazy/Builder.hs:168:1");
var $$DataziTextziLazzyziBuilder_zdfEqBuilder2=$t(function(){
 $$GHCziErr_error.J($$DataziTextziLazzyziBuilder$d);
},[],"in `text-0.11.2.1:Data.Text.Lazy.Builder'");
var $$DataziTextziLazzyziBuilder_zdfEqBuilder1=$f(2,function(X,Y){
 $M(X,function(Z){
  var a1=Z.v[0],b1=Z.v[1],c1=Z.v[2];
  $M(c1,function(d1){
   switch(d1){
   case 0:
    $r([Y,$$GHCziTypes_ZMZN]);break;
   default:
    var e1=$d(1,[a1,b1,d1],"sat");
    var f1=$d(2,[e1,$$GHCziTypes_ZMZN],"sat");
    $r([Y,f1]);
   }
  },[Y,a1,b1]);
 },[Y]);
},[],"in `text-0.11.2.1:Data.Text.Lazy.Builder'");
var $$DataziTextziLazzyziBuilder_zdwtoLazzyTextWith=$f(2,function(g1,h1){
 var i1=$f(1,function(j1){
  var k1=g1<0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(k1.g){
  case 1:
   var s1=g1>>>0;
   var r1=s1&1073741824;
   var l1=r1|0;
   switch(l1){
   case 0:
    var q1=g1<<1;
    var m1=$hs_newByteArrayzh(q1,j1);
    var n1=m1[0],o1=m1[1];
    var p1=$d(1,[o1,0,0,g1],"sat");
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
  var O3=K3<=1?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(O3.g){
  case 1:
   $M(L3,function(P3){
    var Q3=P3.v[0];
    var k4=$hs_ordzh(Q3);
    var Z3=I3+J3|0;
    var R3=k4<65536?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(R3.g){
    case 1:
     var f4=k4-65536|0;
     var j4=f4>>10;
     var i4=j4+55296|0;
     var h4=i4>>>0;
     var g4=h4&65535;
     var Y3=$hs_writeWord16Arrayzh(H3,Z3,g4,N3);
     var e4=f4>>>0;
     var d4=e4&1023;
     var c4=d4|0;
     var b4=c4+56320|0;
     var a4=b4>>>0;
     var X3=a4&65535;
     var W3=Z3+1|0;
     var V3=$hs_writeWord16Arrayzh(H3,W3,X3,Y3);
     var U3=K3-2|0;
     var T3=J3+2|0;
     S3.J(H3,I3,T3,U3,M3,V3);break;
    case 2:
     var p4=k4>>>0;
     var o4=p4&65535;
     var n4=$hs_writeWord16Arrayzh(H3,Z3,o4,N3);
     var m4=K3-1|0;
     var l4=J3+1|0;
     S3.J(H3,I3,l4,m4,M3,n4);break;
    }
   },[K3,I3,J3,H3,N3,S3,M3]);break;
  case 2:
   var q4=$hs_newByteArrayzh(240,N3);
   var r4=q4[0],s4=q4[1];
   var t4=$t(function(){
    G3.C([s4,0,0,120,L3,M3,r4],function(u4){
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
    var I4=B4<=1?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(I4.g){
    case 1:
     $M(G4,function(J4){
      var K4=J4.v[0];
      var d5=$hs_ordzh(K4);
      var S4=z4+A4|0;
      var L4=d5<65536?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(L4.g){
      case 1:
       var Y4=d5-65536|0;
       var c5=Y4>>10;
       var b5=c5+55296|0;
       var a5=b5>>>0;
       var Z4=a5&65535;
       var R4=$hs_writeWord16Arrayzh(y4,S4,Z4,D4);
       var X4=Y4>>>0;
       var W4=X4&1023;
       var V4=W4|0;
       var U4=V4+56320|0;
       var T4=U4>>>0;
       var Q4=T4&65535;
       var P4=S4+1|0;
       var O4=$hs_writeWord16Arrayzh(y4,P4,Q4,R4);
       var N4=B4-2|0;
       var M4=A4+2|0;
       S3.J(y4,z4,M4,N4,H4,O4);break;
      case 2:
       var i5=d5>>>0;
       var h5=i5&65535;
       var g5=$hs_writeWord16Arrayzh(y4,S4,h5,D4);
       var f5=B4-1|0;
       var e5=A4+1|0;
       S3.J(y4,z4,e5,f5,H4,g5);break;
      }
     },[S3,y4,z4,A4,B4,D4,H4]);break;
    case 2:
     var j5=$hs_newByteArrayzh(240,D4);
     var k5=j5[0],l5=j5[1];
     var m5=$t(function(){
      G3.C([l5,0,0,120,G4,H4,k5],function(n5){
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
 $$GHCziCString_unpackCStringzh.J("Data.Text.Array.new: size overflow\x00");
},"lvl");
var $$DataziTextziLazzyziBuilder$s=$T(function(){
 $$GHCziErr_error.J($$DataziTextziLazzyziBuilder$d);
},"poly_a2");
var $$DataziTextziLazzyziBuilder$t=$F(6,function(qb,rb,sb,tb,ub,vb){
 var wb=sb<=0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(wb.g){
 case 1:
  var xb=sb<=128?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(xb.g){
  case 1:
   $M(ub,function(yb){
    var zb=yb.v[0],Ab=yb.v[1],Bb=yb.v[2],Cb=yb.v[3];
    $M(Bb,function(Db){
     switch(Db){
     case 0:
      tb.C([yb,vb],function(Mb){
       var Nb=Mb[0],Ob=Mb[1];
       var Pb=$d(1,[qb,rb,sb],"sat");
       var Qb=$d(2,[Pb,Ob],"sat");
       $r([Nb,Qb]);
      },[sb,qb,rb]);break;
     default:
      var Eb=$t(function(){
       var Gb=Ab+Db|0;
       var Fb=$d(1,[zb,Gb,0,Cb],"sat");
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
     var lc=Yb+Zb|0;
     var nc=sb+lc|0;
     var cc=lc>=nc?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(cc.g){
     case 1:
      var mc=nc-lc|0;
      var kc=mc>>>0;
      var jc=rb>>>0;
      var ic=lc>>>0;
      var $ff=_hs_text_memcpy(Xb,ic,qb,jc,kc);
      var dc=[bc,$ff];
      var ec=dc[0];
      var hc=ac-sb|0;
      var gc=Zb+sb|0;
      var fc=$d(1,[Xb,Yb,gc,hc],"sat");
      tb.J(fc,ec);break;
     case 2:
      var qc=ac-sb|0;
      var pc=Zb+sb|0;
      var oc=$d(1,[Xb,Yb,pc,qc],"sat");
      tb.J(oc,bc);break;
     }
    },[sb,tb,qb,rb],"$wa6");
    var rc=sb<=Vb?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(rc.g){
    case 1:
     var sc=$f(1,function(tc){
      var uc=$f(1,function(vc){
       var wc=vc<0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(wc.g){
       case 1:
	var Dc=vc>>>0;
	var Cc=Dc&1073741824;
	var xc=Cc|0;
	switch(xc){
	case 0:
	 var Bc=vc<<1;
	 var yc=$hs_newByteArrayzh(Bc,tc);
	 var zc=yc[0],Ac=yc[1];
	 Wb.J(Ac,0,0,vc,zc);break;
	default:
	 $A($$DataziTextziLazzyziBuilder$s);
	}break;
       case 2:
	$A($$DataziTextziLazzyziBuilder$s);break;
       }
      },[Wb,tc],"$j");
      var Ec=sb<=120?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(Ec.g){
      case 1:
       uc.J(sb);break;
      case 2:
       uc.J(120);break;
      }
     },[sb,Wb],"$wa7");
     $M(Ub,function(Fc){
      switch(Fc){
      case 0:
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

var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowsPrec=$f(3,function(M3,N3,O3){
 $M(N3,function(P3){
  var Q3=P3.v[0];
  $$GHCziBase_zpzp.J(Q3,O3);
 },[O3]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowList=$f(2,function(R3,S3){
 $M(R3,function(T3){
  switch(T3.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]\x00",S3);break;
  case 2:
   var U3=T3.v[0],V3=T3.v[1];
   var W3=$t(function(){
    $M(U3,function(X3){
     var Y3=X3.v[0];
     var Z3=$t(function(){
      var a4=$d(2,[$$GHCziShow_showListzuzu2,S3],"lvl22");
      var b4=$f(1,function(c4){
       $M(c4,function(d4){
	switch(d4.g){
	case 1:
	 $A(a4);break;
	case 2:
	 var e4=d4.v[0],f4=d4.v[1];
	 var g4=$t(function(){
	  $M(e4,function(h4){
	   var i4=h4.v[0];
	   var j4=$t(function(){
	    b4.J(f4);
	   },[f4,b4],"sat");
	   $$GHCziBase_zpzp.J(i4,j4);
	  },[f4,b4]);
	 },[e4,f4,b4],"sat");
	 $R(2,[$$GHCziShow_showListzuzu1,g4],":");break;
	}
       },[a4,b4]);
      },[a4],"showl");
      b4.J(V3);
     },[S3,V3],"sat");
     $$GHCziBase_zpzp.J(Y3,Z3);
    },[S3,V3]);
   },[S3,U3,V3],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,W3],":");break;
  }
 },[S3]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshow=$f(1,function(k4){
 $M(k4,function(l4){
  var m4=l4.v[0];
  $A(m4);
 },[]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfShowPatternMatchFail=$D(1,function(){
 $r([$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowsPrec,$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshow,$$ControlziExceptionziBase_zdfShowPatternMatchFailzuzdcshowList]);
},"at libraries/base/Control/Exception/Base.hs:578:10");
var $$ControlziExceptionziBase_zdfExceptionNestedAtomicallyzuds=$t(function(){
 $$GHCziCString_unpackCStringzh.J("base\x00");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionNestedAtomicallyzuds1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("Control.Exception.Base\x00");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuds2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("PatternMatchFail\x00");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuwild=$D(1,function(){
 $r([goog.math.Long.fromBits(18445595,3739165398),goog.math.Long.fromBits(52003073,3246954884),$$ControlziExceptionziBase_zdfExceptionNestedAtomicallyzuds,$$ControlziExceptionziBase_zdfExceptionNestedAtomicallyzuds1,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuds2]);
},"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFail1=$D(1,function(){
 $r([goog.math.Long.fromBits(18445595,3739165398),goog.math.Long.fromBits(52003073,3246954884),$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuwild,$$GHCziTypes_ZMZN]);
},"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctypeOf=$f(1,function(j7){
 $A($$ControlziExceptionziBase_zdfExceptionPatternMatchFail1);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdcfromException=$f(1,function(k7){
 $M(k7,function(l7){
  var m7=l7.v[0],n7=l7.v[1];
  $$GHCziException_zdp1Exception.C([m7],function(o7){
   $$DataziTypeable_cast.J(o7,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctypeOf,n7);
  },[n7]);
 },[]);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFail=$D(1,function(){
 $r([$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctypeOf,$$ControlziExceptionziBase_zdfShowPatternMatchFail,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdcfromException]);
},"at libraries/base/Control/Exception/Base.hs:587:10");
var $$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException=$f(1,function(d){
 $R(1,[$$ControlziExceptionziBase_zdfExceptionPatternMatchFail,d],"SomeException");
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase_patError=$f(1,function(c8){
 var d8=$t(function(){
  $$GHCziIOziException_untangle.J(c8,$$ControlziExceptionziBase$d);
 },[c8],"sat");
 var e8=$d(1,[d8],"sat");
 $$GHCziException_throw2.J(e8,$$ControlziExceptionziBase_zdfExceptionPatternMatchFailzuzdctoException);
},[],"in `base:Control.Exception.Base'");
var $$ControlziExceptionziBase$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Non-exhaustive patterns in\x00");
},"lvl1");

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

var $$GHCziBase_negateInt=$f(1,function(P){
 $M(P,function(Q){
  var R=Q.v[0];
  var S= -R;
  $R(1,[S],"I#");
 },[]);
},[],"at libraries/base/GHC/Base.lhs:712:1");
var $$GHCziBase_timesInt=$f(2,function(h1,i1){
 $M(h1,function(j1){
  var k1=j1.v[0];
  $M(i1,function(l1){
   var m1=l1.v[0];
   var n1=k1*m1|0;
   $R(1,[n1],"I#");
  },[k1]);
 },[i1]);
},[],"at libraries/base/GHC/Base.lhs:694:8");
var $$GHCziBase_minusInt=$f(2,function(o1,p1){
 $M(o1,function(q1){
  var r1=q1.v[0];
  $M(p1,function(s1){
   var t1=s1.v[0];
   var u1=r1-t1|0;
   $R(1,[u1],"I#");
  },[r1]);
 },[p1]);
},[],"at libraries/base/GHC/Base.lhs:693:8");
var $$GHCziBase_plusInt=$f(2,function(v1,w1){
 $M(v1,function(x1){
  var y1=x1.v[0];
  $M(w1,function(z1){
   var A1=z1.v[0];
   var B1=y1+A1|0;
   $R(1,[B1],"I#");
  },[y1]);
 },[w1]);
},[],"at libraries/base/GHC/Base.lhs:692:8");

var $$GHCziEnum_eftInt=$f(2,function(I2,J2){
 var K2=I2>J2?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(K2.g){
 case 1:
  var L2=$f(1,function(M2){
   var N2=$t(function(){
    var O2=M2==J2?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(O2.g){
    case 1:
     var P2=M2+1|0;
     L2.J(P2);break;
    case 2:
     $R(1,[],"[]");break;
    }
   },[J2,M2,L2],"sat");
   var Q2=$d(1,[M2],"sat");
   $R(2,[Q2,N2],":");
  },[J2],"go");
  L2.J(I2);break;
 case 2:
  $R(1,[],"[]");break;
 }
},[],"at libraries/base/GHC/Enum.lhs:519:1");

var $$GHCziErr_overflowError=$t(function(){
 $$GHCziException_throw2.J($$GHCziException_Overflow,$$GHCziException_zdfExceptionArithExceptionzuzdctoException);
},[],"at libraries/base/GHC/Err.lhs:89:1");
var $$GHCziErr_divZZeroError=$t(function(){
 $$GHCziException_throw2.J($$GHCziException_DivideByZZero,$$GHCziException_zdfExceptionArithExceptionzuzdctoException);
},[],"at libraries/base/GHC/Err.lhs:85:1");

var $$GHCziException_zdfShowArithException5=$t(function(){
 $$GHCziCString_unpackCStringzh.J("arithmetic overflow\x00");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException10=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException5,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("arithmetic underflow\x00");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException9=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException4,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("loss of precision\x00");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException8=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException3,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException2=$t(function(){
 $$GHCziCString_unpackCStringzh.J("divide by zero\x00");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException7=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException2,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException1=$t(function(){
 $$GHCziCString_unpackCStringzh.J("denormal\x00");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException6=$f(1,function(u){
 $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException1,u);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshowsPrec=$f(2,function(O1,P1){
 $M(P1,function(Q1){
  switch(Q1.g){
  case 1:
   $A($$GHCziException_zdfShowArithException10);break;
  case 2:
   $A($$GHCziException_zdfShowArithException9);break;
  case 3:
   $A($$GHCziException_zdfShowArithException8);break;
  case 4:
   $A($$GHCziException_zdfShowArithException7);break;
  case 5:
   $A($$GHCziException_zdfShowArithException6);break;
  }
 },[]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshowList=$f(2,function(R1,S1){
 $M(R1,function(T1){
  switch(T1.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]\x00",S1);break;
  case 2:
   var U1=T1.v[0],V1=T1.v[1];
   var W1=$t(function(){
    var X1=$t(function(){
     var Y1=$d(2,[$$GHCziShow_showListzuzu2,S1],"lvl22");
     var Z1=$f(1,function(a2){
      $M(a2,function(b2){
       switch(b2.g){
       case 1:
	$A(Y1);break;
       case 2:
	var c2=b2.v[0],d2=b2.v[1];
	var e2=$t(function(){
	 $M(c2,function(f2){
	  switch(f2.g){
	  case 1:
	   var g2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException5,g2);break;
	  case 2:
	   var h2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException4,h2);break;
	  case 3:
	   var i2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException3,i2);break;
	  case 4:
	   var j2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException2,j2);break;
	  case 5:
	   var k2=$t(function(){
	    Z1.J(d2);
	   },[d2,Z1],"sat");
	   $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException1,k2);break;
	  }
	 },[d2,Z1]);
	},[c2,d2,Z1],"sat");
	$R(2,[$$GHCziShow_showListzuzu1,e2],":");break;
       }
      },[Y1,Z1]);
     },[Y1],"showl");
     Z1.J(V1);
    },[S1,V1],"a");
    $M(U1,function(l2){
     switch(l2.g){
     case 1:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException5,X1);break;
     case 2:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException4,X1);break;
     case 3:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException3,X1);break;
     case 4:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException2,X1);break;
     case 5:
      $$GHCziBase_zpzp.J($$GHCziException_zdfShowArithException1,X1);break;
     }
    },[X1]);
   },[S1,V1,U1],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,W1],":");break;
  }
 },[S1]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithExceptionzuzdcshow=$f(1,function(m2){
 $M(m2,function(n2){
  switch(n2.g){
  case 1:
   $A($$GHCziException_zdfShowArithException5);break;
  case 2:
   $A($$GHCziException_zdfShowArithException4);break;
  case 3:
   $A($$GHCziException_zdfShowArithException3);break;
  case 4:
   $A($$GHCziException_zdfShowArithException2);break;
  case 5:
   $A($$GHCziException_zdfShowArithException1);break;
  }
 },[]);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfShowArithException=$D(1,function(){
 $r([$$GHCziException_zdfShowArithExceptionzuzdcshowsPrec,$$GHCziException_zdfShowArithExceptionzuzdcshow,$$GHCziException_zdfShowArithExceptionzuzdcshowList]);
},"at libraries/base/GHC/Exception.lhs:189:10");
var $$GHCziException_zdfExceptionArithException3=$t(function(){
 $$GHCziCString_unpackCStringzh.J("ArithException\x00");
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithException2=$t(function(){
 $$DataziTypeableziInternal_mkTyCon.J(goog.math.Long.fromBits(4194982440,719304104),goog.math.Long.fromBits(3110813675,1843557400),$$GHCziException_zdfExceptionArithException5,$$GHCziException_zdfExceptionArithException4,$$GHCziException_zdfExceptionArithException3);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithException1=$t(function(){
 $$DataziTypeableziInternal_mkTyConApp.J($$GHCziException_zdfExceptionArithException2,$$GHCziTypes_ZMZN);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithExceptionzuzdctypeOf=$f(1,function(G3){
 $A($$GHCziException_zdfExceptionArithException1);
},[],"in `base:GHC.Exception'");
var $$GHCziException_zdfExceptionArithExceptionzuzdcfromException=$f(1,function(H3){
 $M(H3,function(I3){
  var J3=I3.v[0],K3=I3.v[1];
  var L3=$t(function(){
   $$GHCziException_zdp1Exception.J(J3);
  },[J3],"sat");
  $$DataziTypeable_cast.J(L3,$$GHCziException_zdfExceptionArithExceptionzuzdctypeOf,K3);
 },[]);
},[],"at libraries/base/GHC/Exception.lhs:142:5");
var $$GHCziException_zdfExceptionArithException=$D(1,function(){
 $r([$$GHCziException_zdfExceptionArithExceptionzuzdctypeOf,$$GHCziException_zdfShowArithException,$$GHCziException_zdfExceptionArithExceptionzuzdctoException,$$GHCziException_zdfExceptionArithExceptionzuzdcfromException]);
},"at libraries/base/GHC/Exception.lhs:187:10");
var $$GHCziException_zdfExceptionArithExceptionzuzdctoException=$f(1,function(u){
 $R(1,[$$GHCziException_zdfExceptionArithException,u],"SomeException");
},[],"at libraries/base/GHC/Exception.lhs:141:5");
var $$GHCziException_Overflow=$D(1,function(){
 $r([]);
},"at libraries/base/GHC/Exception.lhs:180:5");
var $$GHCziException_DivideByZZero=$D(4,function(){
 $r([]);
},"at libraries/base/GHC/Exception.lhs:183:5");

var $$GHCziForeignPtr_mallocPlainForeignPtrBytes2=$t(function(){
 $$GHCziErr_error.J($$GHCziForeignPtr$a);
},[],"in `base:GHC.ForeignPtr'");
var $$GHCziForeignPtr$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("mallocPlainForeignPtrBytes: size must be >= 0\x00");
},"lvl");

var $$GHCziIOziException_untangle1=$D(1,function(){
 $r([" "]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle4=$f(1,function(Rc){
 $M(Rc,function(Sc){
  var Tc=Sc.v[0];
  $M(Tc,function(Uc){
   switch(Uc){
   case "|":
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle3=$D(1,function(){
 $r(["\n"]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle2=$D(2,function(){
 $r([$$GHCziIOziException_untangle3,$$GHCziTypes_ZMZN]);
},"in `base:GHC.IO.Exception'");
var $$GHCziIOziException_untangle=$f(2,function(Vc,Wc){
 $$GHCziCString_unpackCStringUtf8zh.C([Vc],function(Xc){
  $$GHCziList_zdwspan.C([$$GHCziIOziException_untangle4,Xc],function(Yc){
   var Zc=Yc[0],ad=Yc[1];
   var bd=$f(2,function(cd,dd){
    var ed=$t(function(){
     var fd=$t(function(){
      var gd=$t(function(){
       $$GHCziBase_zpzp.J(dd,$$GHCziIOziException_untangle2);
      },[dd],"sat");
      $$GHCziBase_zpzp.J(Wc,gd);
     },[Wc,dd],"sat");
     $$GHCziCString_unpackAppendCStringzh.J(": \x00",fd);
    },[Wc,dd],"sat");
    $$GHCziBase_zpzp.J(cd,ed);
   },[Wc],"$j");
   $M(ad,function(hd){
    switch(hd.g){
    case 1:
     bd.J(Zc,$$GHCziTypes_ZMZN);break;
    case 2:
     var id=hd.v[0],jd=hd.v[1];
     $M(id,function(kd){
      var ld=kd.v[0];
      $M(ld,function(md){
       switch(md){
       case "|":
	var nd=$d(2,[$$GHCziIOziException_untangle1,jd],"sat");
	bd.J(Zc,nd);break;
       default:
	bd.J(Zc,$$GHCziTypes_ZMZN);
       }
      },[Wc,bd,Zc,jd]);
     },[Wc,bd,Zc,jd]);break;
    }
   },[Wc,bd,Zc]);
  },[Wc]);
 },[Wc]);
},[],"at libraries/base/GHC/IO/Exception.hs:327:1");

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

var $$GHCziNum_fromInteger=$f(1,function(s){
 $M(s,function(t){
  var u=t.v[6];
  $A(u);
 },[]);
},[],"at libraries/base/GHC/Num.lhs:60:5");
var $$GHCziNum_zdfNumIntzuzdcfromInteger=$f(1,function(Z){
 $$GHCziIntegerziType_integerToInt.C([Z],function(a1){
  $R(1,[a1],"I#");
 },[]);
},[],"at libraries/base/GHC/Num.lhs:60:5");
var $$GHCziNum_zdfNumInt3=$D(1,function(){
 $r([1]);
},"in `base:GHC.Num'");
var $$GHCziNum_zdfNumInt2=$D(1,function(){
 $r([0]);
},"in `base:GHC.Num'");
var $$GHCziNum_zdfNumInt1=$D(1,function(){
 $r([ -1]);
},"in `base:GHC.Num'");
var $$GHCziNum_zdfNumIntzuzdcsignum=$f(1,function(b1){
 $M(b1,function(c1){
  var d1=c1.v[0];
  var e1=d1<0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(e1.g){
  case 1:
   $M(d1,function(f1){
    switch(f1){
    case 0:
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
  var j1=i1>=0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(j1.g){
  case 1:
   var k1= -i1;
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
	  switch(H1){
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
	switch(S1){
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
 $r([0]);
},"in `base:GHC.Real'");
var $$GHCziReal_zdfEnumRatio1=$D(1,function(){
 $r([1]);
},"in `base:GHC.Real'");
var $$GHCziReal_even1=$D(1,function(){
 $r([0]);
},"in `base:GHC.Real'");
var $$GHCziReal_zdfEnumRatio2=$t(function(){
 $$GHCziErr_error.J($$GHCziReal$a);
},[],"in `base:GHC.Real'");
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
    switch(r3){
    case  -1:
     $M(o3,function(w3){
      switch(w3){
      case  -2147483648:
       $A($$GHCziReal$b);break;
      default:
       var y3=w3% -1;
       var x3=$d(1,[y3],"sat");
       var A3=w3/ -1|0;
       var z3=$d(1,[A3],"sat");
       $R(1,[z3,x3],"(,)");
      }
     },[]);break;
    case 0:
     $A($$GHCziErr_divZZeroError);break;
    default:
     var s3=$t(function(){
      var t3=o3%r3;
      $R(1,[t3],"I#");
     },[o3,r3],"sat");
     var u3=$t(function(){
      var v3=o3/r3|0;
      $R(1,[v3],"I#");
     },[o3,r3],"sat");
     $R(1,[u3,s3],"(,)");
    }
   },[o3]);
  },[o3]);
 },[m3]);
},[],"at libraries/base/GHC/Real.lhs:135:5");
var $$GHCziReal_zdwreduce=$f(2,function(R4,S4){
 $$GHCziIntegerziType_eqInteger.C([S4,$$GHCziReal_even1],function(T4){
  switch(T4.g){
  case 1:
   $$GHCziIntegerziType_gcdInteger.C([R4,S4],function(U4){
    $$GHCziIntegerziType_eqInteger.C([U4,$$GHCziReal_even1],function(V4){
     switch(V4.g){
     case 1:
      $$GHCziIntegerziType_quotInteger.C([R4,U4],function(W4){
       $$GHCziIntegerziType_quotInteger.C([S4,U4],function(X4){
	$r([W4,X4]);
       },[W4]);
      },[S4,U4]);break;
     case 2:
      $A($$GHCziErr_divZZeroError);break;
     }
    },[S4,R4,U4]);
   },[S4,R4]);break;
  case 2:
   $A($$GHCziReal_zdfEnumRatio2);break;
  }
 },[S4,R4]);
},[],"at libraries/base/GHC/Real.lhs:94:1");
var $$GHCziReal_even2=$D(1,function(){
 $r([2]);
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
var $$GHCziReal$a=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Ratio.%: zero denominator\x00");
},"lvl");
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
 $$GHCziCString_unpackCStringzh.J("Negative exponent\x00");
},"lvl5");

var $$GHCziShow_zdfShowIntzuzdcshowList=$f(2,function(q7,r7){
 $M(q7,function(s7){
  switch(s7.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]\x00",r7);break;
  case 2:
   var t7=s7.v[0],u7=s7.v[1];
   var v7=$t(function(){
    $M(t7,function(w7){
     var x7=w7.v[0];
     var y7=$t(function(){
      var z7=$d(2,[$$GHCziShow_showListzuzu2,r7],"lvl22");
      var A7=$f(1,function(B7){
       $M(B7,function(C7){
	switch(C7.g){
	case 1:
	 $A(z7);break;
	case 2:
	 var D7=C7.v[0],E7=C7.v[1];
	 var F7=$t(function(){
	  $M(D7,function(G7){
	   var H7=G7.v[0];
	   var I7=$t(function(){
	    A7.J(E7);
	   },[E7,A7],"sat");
	   $$GHCziShow_zdwshowSignedInt.J(0,H7,I7);
	  },[E7,A7]);
	 },[D7,E7,A7],"sat");
	 $R(2,[$$GHCziShow_showListzuzu1,F7],":");break;
	}
       },[z7,A7]);
      },[z7],"showl");
      A7.J(u7);
     },[r7,u7],"sat");
     $$GHCziShow_zdwshowSignedInt.J(0,x7,y7);
    },[r7,u7]);
   },[r7,t7,u7],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,v7],":");break;
  }
 },[r7]);
},[],"at libraries/base/GHC/Show.lhs:157:5");
var $$GHCziShow_zdfShowIntzuzdcshow=$f(1,function(J7){
 $M(J7,function(K7){
  var L7=K7.v[0];
  $$GHCziShow_zdwshowSignedInt.J(0,L7,$$GHCziTypes_ZMZN);
 },[]);
},[],"at libraries/base/GHC/Show.lhs:150:5");
var $$GHCziShow_zdfShowInt=$D(1,function(){
 $r([$$GHCziShow_showSignedInt,$$GHCziShow_zdfShowIntzuzdcshow,$$GHCziShow_zdfShowIntzuzdcshowList]);
},"at libraries/base/GHC/Show.lhs:206:10");
var $$GHCziShow_intToDigit1=$f(1,function(gA){
 var hA=$t(function(){
  $$GHCziShow_itos.J(gA,$$GHCziTypes_ZMZN);
 },[gA],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Char.intToDigit: not a digit \x00",hA],function(iA){
  $$GHCziErr_error.J(iA);
 },[]);
},[],"in `base:GHC.Show'");
var $$GHCziShow_zdwintToDigit=$f(1,function(jA){
 var kA=$f(1,function(lA){
  var mA=jA>=10?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(mA.g){
  case 1:
   $$GHCziShow_intToDigit1.J(jA);break;
  case 2:
   var nA=jA<=15?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(nA.g){
   case 1:
    $$GHCziShow_intToDigit1.J(jA);break;
   case 2:
    var oA=87+jA|0;
    $r($hs_chrzh(oA));break;
   }break;
  }
 },[jA],"$w$j");
 var pA=jA>=0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(pA.g){
 case 1:
  kA.J($$GHCziPrim_realWorldzh);break;
 case 2:
  var qA=jA<=9?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(qA.g){
  case 1:
   kA.J($$GHCziPrim_realWorldzh);break;
  case 2:
   var rA=48+jA|0;
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

var $$GHCziUnicode_isAlphaNum=$f(1,function(k1){
 $M(k1,function(l1){
  var m1=l1.v[0];
  var q1=$hs_ordzh(m1);
  var $ff=u_iswalnum(q1);
  var n1=[$$GHCziPrim_realWorldzh,$ff];
  var o1=n1[1];
  $M(o1,function(p1){
   switch(p1){
   case 0:
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:139:1");
var $$GHCziUnicode_isAlpha=$f(1,function(r1){
 $M(r1,function(s1){
  var t1=s1.v[0];
  var x1=$hs_ordzh(t1);
  var $ff=u_iswalpha(x1);
  var u1=[$$GHCziPrim_realWorldzh,$ff];
  var v1=u1[1];
  $M(v1,function(w1){
   switch(w1){
   case 0:
    $R(1,[],"False");break;
   default:
    $R(2,[],"True");
   }
  },[]);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:138:1");
var $$GHCziUnicode_zdwisSpace=$f(1,function(y1){
 $M(y1,function(z1){
  switch(z1){
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
   var D1=$hs_ordzh(z1);
   var $ff=u_iswspace(D1);
   var A1=[$$GHCziPrim_realWorldzh,$ff];
   var B1=A1[1];
   $M(B1,function(C1){
    switch(C1){
    case 0:
     $R(1,[],"False");break;
    default:
     $R(2,[],"True");
    }
   },[]);
  }
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:73:1");
var $$GHCziUnicode_isSpace=$f(1,function(E1){
 $M(E1,function(F1){
  var G1=F1.v[0];
  $$GHCziUnicode_zdwisSpace.J(G1);
 },[]);
},[],"at libraries/base/GHC/Unicode.hs:73:1");

var $$GHCziWord_zdfBitsWord8zuzdcfromInteger=$f(1,function(v3){
 $$GHCziIntegerziType_integerToWord.C([v3],function(x3){
  var w3=x3&255;
  $R(1,[w3],"W8#");
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdcabs=$f(1,function(y3){
 $A(y3);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdcnegate=$f(1,function(z3){
 $M(z3,function(A3){
  var B3=A3.v[0];
  var F3=B3|0;
  var E3= -F3;
  var D3=E3>>>0;
  var C3=D3&255;
  $R(1,[C3],"W8#");
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdczm=$f(2,function(G3,H3){
 $M(G3,function(I3){
  var J3=I3.v[0];
  $M(H3,function(K3){
   var L3=K3.v[0];
   var N3=J3-L3>>>0;
   var M3=N3&255;
   $R(1,[M3],"W8#");
  },[J3]);
 },[H3]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdczt=$f(2,function(O3,P3){
 $M(O3,function(Q3){
  var R3=Q3.v[0];
  $M(P3,function(S3){
   var T3=S3.v[0];
   var V3=R3*T3>>>0;
   var U3=V3&255;
   $R(1,[U3],"W8#");
  },[R3]);
 },[P3]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdczp=$f(2,function(W3,X3){
 $M(W3,function(Y3){
  var Z3=Y3.v[0];
  $M(X3,function(a4){
   var b4=a4.v[0];
   var d4=Z3+b4>>>0;
   var c4=d4&255;
   $R(1,[c4],"W8#");
  },[Z3]);
 },[X3]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfIntegralWord8zuzdctoInteger=$f(1,function(i4){
 $M(i4,function(j4){
  var k4=j4.v[0];
  var l4=k4|0;
  $$GHCziIntegerziType_smallInteger.J(l4);
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord13=$D(1,function(){
 $r([0]);
},"in `base:GHC.Word'");
var $$GHCziWord_zdfRealWord1=$D(1,function(){
 $r([1]);
},"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdczlze=$f(2,function(gt,ht){
 $M(gt,function(it){
  var jt=it.v[0];
  $M(ht,function(kt){
   var lt=kt.v[0];
   $r(jt<=lt?$$GHCziTypes_True:$$GHCziTypes_False);
  },[jt]);
 },[ht]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdczg=$f(2,function(mt,nt){
 $M(mt,function(ot){
  var pt=ot.v[0];
  $M(nt,function(qt){
   var rt=qt.v[0];
   $r(pt>rt?$$GHCziTypes_True:$$GHCziTypes_False);
  },[pt]);
 },[nt]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdczgze=$f(2,function(st,tt){
 $M(st,function(ut){
  var vt=ut.v[0];
  $M(tt,function(wt){
   var xt=wt.v[0];
   $r(vt>=xt?$$GHCziTypes_True:$$GHCziTypes_False);
  },[vt]);
 },[tt]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdczl=$f(2,function(yt,zt){
 $M(yt,function(At){
  var Bt=At.v[0];
  $M(zt,function(Ct){
   var Dt=Ct.v[0];
   $r(Bt<Dt?$$GHCziTypes_True:$$GHCziTypes_False);
  },[Bt]);
 },[zt]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdccompare=$f(2,function(Et,Ft){
 $M(Et,function(Gt){
  var Ht=Gt.v[0];
  $M(Ft,function(It){
   var Jt=It.v[0];
   var Kt=Ht<Jt?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Kt.g){
   case 1:
    var Lt=Ht==Jt?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Lt.g){
    case 1:
     $R(3,[],"GT");break;
    case 2:
     $R(2,[],"EQ");break;
    }break;
   case 2:
    $R(1,[],"LT");break;
   }
  },[Ht]);
 },[Ft]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfEqWord8zuzdczeze=$f(2,function(Mt,Nt){
 $M(Mt,function(Ot){
  var Pt=Ot.v[0];
  $M(Nt,function(Qt){
   var Rt=Qt.v[0];
   $r(Pt==Rt?$$GHCziTypes_True:$$GHCziTypes_False);
  },[Pt]);
 },[Nt]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfBitsWord8zuzdczsze=$f(2,function(St,Tt){
 $M(St,function(Ut){
  var Vt=Ut.v[0];
  $M(Tt,function(Wt){
   var Xt=Wt.v[0];
   var Yt=Vt==Xt?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Yt.g){
   case 1:
    $R(2,[],"True");break;
   case 2:
    $R(1,[],"False");break;
   }
  },[Vt]);
 },[Tt]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfEqWord8=$D(1,function(){
 $r([$$GHCziWord_zdfEqWord8zuzdczeze,$$GHCziWord_zdfBitsWord8zuzdczsze]);
},"at libraries/base/GHC/Word.hs:180:34");
var $$GHCziWord_zdfOrdWord8zuzdcmin=$f(2,function(Zt,au){
 $M(Zt,function(bu){
  var cu=bu.v[0];
  $M(au,function(du){
   var eu=du.v[0];
   var fu=cu<=eu?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(fu.g){
   case 1:
    $A(du);break;
   case 2:
    $A(bu);break;
   }
  },[cu,bu]);
 },[au]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8zuzdcmax=$f(2,function(gu,hu){
 $M(gu,function(iu){
  var ju=iu.v[0];
  $M(hu,function(ku){
   var lu=ku.v[0];
   var mu=ju<=lu?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(mu.g){
   case 1:
    $A(iu);break;
   case 2:
    $A(ku);break;
   }
  },[ju,iu]);
 },[hu]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfOrdWord8=$D(1,function(){
 $r([$$GHCziWord_zdfEqWord8,$$GHCziWord_zdfOrdWord8zuzdccompare,$$GHCziWord_zdfOrdWord8zuzdczl,$$GHCziWord_zdfOrdWord8zuzdczgze,$$GHCziWord_zdfOrdWord8zuzdczg,$$GHCziWord_zdfOrdWord8zuzdczlze,$$GHCziWord_zdfOrdWord8zuzdcmax,$$GHCziWord_zdfOrdWord8zuzdcmin]);
},"at libraries/base/GHC/Word.hs:180:38");
var $$GHCziWord_zdfNumWord14=$D(1,function(){
 $r([1]);
},"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8zuzdcsignum=$f(1,function(zu){
 $M(zu,function(Au){
  var Bu=Au.v[0];
  var Cu=Bu==0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Cu.g){
  case 1:
   $A($$GHCziWord_zdfNumWord14);break;
  case 2:
   $A($$GHCziWord_zdfNumWord13);break;
  }
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfNumWord8=$D(1,function(){
 $r([$$GHCziWord_zdfNumWord8zuzdczp,$$GHCziWord_zdfNumWord8zuzdczt,$$GHCziWord_zdfNumWord8zuzdczm,$$GHCziWord_zdfNumWord8zuzdcnegate,$$GHCziWord_zdfNumWord8zuzdcabs,$$GHCziWord_zdfNumWord8zuzdcsignum,$$GHCziWord_zdfBitsWord8zuzdcfromInteger]);
},"at libraries/base/GHC/Word.hs:186:10");
var $$GHCziWord_zdfIntegralWord8zuzdcquotRem=$f(2,function(Kw,Lw){
 $M(Kw,function(Mw){
  var Nw=Mw.v[0];
  $M(Lw,function(Ow){
   var Pw=Ow.v[0];
   var Qw=Pw==0?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(Qw.g){
   case 1:
    var Rw=$t(function(){
     var Sw=Nw%Pw;
     $R(1,[Sw],"W8#");
    },[Pw,Nw],"sat");
    var Tw=$t(function(){
     var Uw=Nw/Pw>>>0;
     $R(1,[Uw],"W8#");
    },[Pw,Nw],"sat");
    $R(1,[Tw,Rw],"(,)");break;
   case 2:
    $A($$GHCziErr_divZZeroError);break;
   }
  },[Nw]);
 },[Lw]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfShowWord8zuzdcshowsPrec=$f(3,function(hx,ix,jx){
 $M(ix,function(kx){
  var lx=kx.v[0];
  $M(hx,function(mx){
   var nx=mx.v[0];
   var ox=lx|0;
   $$GHCziShow_zdwshowSignedInt.J(nx,ox,jx);
  },[lx,jx]);
 },[hx,jx]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfShowWord8zuzdcshowList=$f(2,function(px,qx){
 $M(px,function(rx){
  switch(rx.g){
  case 1:
   $$GHCziCString_unpackAppendCStringzh.J("[]\x00",qx);break;
  case 2:
   var sx=rx.v[0],tx=rx.v[1];
   var ux=$t(function(){
    $M(sx,function(vx){
     var wx=vx.v[0];
     var xx=$t(function(){
      var yx=$d(2,[$$GHCziShow_showListzuzu2,qx],"lvl22");
      var zx=$f(1,function(Ax){
       $M(Ax,function(Bx){
	switch(Bx.g){
	case 1:
	 $A(yx);break;
	case 2:
	 var Cx=Bx.v[0],Dx=Bx.v[1];
	 var Ex=$t(function(){
	  $M(Cx,function(Fx){
	   var Gx=Fx.v[0];
	   var Hx=$t(function(){
	    zx.J(Dx);
	   },[Dx,zx],"sat");
	   var Ix=Gx|0;
	   $$GHCziShow_zdwshowSignedInt.J(0,Ix,Hx);
	  },[Dx,zx]);
	 },[Cx,Dx,zx],"sat");
	 $R(2,[$$GHCziShow_showListzuzu1,Ex],":");break;
	}
       },[yx,zx]);
      },[yx],"showl");
      zx.J(tx);
     },[qx,tx],"sat");
     var Jx=wx|0;
     $$GHCziShow_zdwshowSignedInt.J(0,Jx,xx);
    },[qx,tx]);
   },[qx,sx,tx],"sat");
   $R(2,[$$GHCziShow_showListzuzu3,ux],":");break;
  }
 },[qx]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfShowWord8zuzdcshow=$f(1,function(Kx){
 $M(Kx,function(Lx){
  var Mx=Lx.v[0];
  var Nx=Mx|0;
  $$GHCziShow_zdwshowSignedInt.J(0,Nx,$$GHCziTypes_ZMZN);
 },[]);
},[],"in `base:GHC.Word'");
var $$GHCziWord_zdfShowWord8=$D(1,function(){
 $r([$$GHCziWord_zdfShowWord8zuzdcshowsPrec,$$GHCziWord_zdfShowWord8zuzdcshow,$$GHCziWord_zdfShowWord8zuzdcshowList]);
},"at libraries/base/GHC/Word.hs:183:10");
var $$GHCziWord_zdfRealWord8zuzdctoRational=$f(1,function(Ox){
 $M(Ox,function(Px){
  var Qx=Px.v[0];
  var Wx=Qx|0;
  $$GHCziIntegerziType_smallInteger.C([Wx],function(Rx){
   $$GHCziIntegerziType_timesInteger.C([Rx,$$GHCziWord_zdfRealWord1],function(Sx){
    $$GHCziReal_zdwreduce.C([Sx,$$GHCziWord_zdfRealWord1],function(Tx){
     var Ux=Tx[0],Vx=Tx[1];
     $R(1,[Ux,Vx],":%");
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
 $r([0]);
},"lvl");
var $$Numeric$b=$F(2,function(T4,U4){
 var V4=$t(function(){
  U4.J(T4);
 },[T4,U4],"sat");
 $$GHCziCString_unpackAppendCStringzh.C(["Numeric.showIntAtBase: applied to negative number \x00",V4],function(W4){
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
 $$GHCziCString_unpackAppendCStringzh.C(["Numeric.showIntAtBase: applied to unsupported base \x00",d5],function(e5){
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
 $r([1]);
},"lvl5");

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
  switch(g6){
  case 0:
   f6.J($$GHCziTuple_Z0T);break;
  default:
   var h6=$t(function(){
    var i6=g6-1|0;
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
      var z6=s6+1|0;
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
  p6.J(o6,I6,0,n6);
 },[o6,p6,n6],"sat");
 $R(2,[H6],"Look");
},[],"in `base:Text.ParserCombinators.ReadP'");
var $$TextziParserCombinatorsziReadP_Fail=$D(3,function(){
 $r([]);
},"at libraries/base/Text/ParserCombinators/ReadP.hs:115:5");
var $$TextziParserCombinatorsziReadP$a=$T(function(){
 $$ControlziExceptionziBase_patError.J("libraries/base/Text/ParserCombinators/ReadP.hs:(136,3)-(159,60)|function mplus\x00");
},"lvl");
var $$TextziParserCombinatorsziReadP$e=$F(1,function(sa){
 sa.J($$GHCziTuple_Z0T);
},"lvl3");

var $$TextziParserCombinatorsziReadPrec_minPrec=$D(1,function(){
 $r([0]);
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
 $r([0]);
},"in `base:Text.Read.Lex'");
var $$TextziReadziLex_numberToInteger1=$D(1,function(){
 $r([10]);
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
      switch(wa){
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
      switch(Ia){
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
	 var Xa=Va>>>0;
	 var Ua=Xa<=1114111?$$GHCziTypes_True:$$GHCziTypes_False;
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
    switch(eb){
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
	switch(Db){
	case "'":
	 $R(3,[],"Fail");break;
	default:
	 var Eb=$f(1,function(Fb){
	  $M(Fb,function(Gb){
	   var Hb=Gb.v[0];
	   $M(Hb,function(Ib){
	    switch(Ib){
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
	 switch(Nb){
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
     switch(Xb){
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
	 switch(ec){
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
      switch(Hc){
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
     switch(Nc){
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
	switch(xd){
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
 $r([8]);
},"lvl2");
var $$TextziReadziLex$d=$D(1,function(){
 $r([16]);
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
    switch(Vf){
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
 $$GHCziCString_unpackCStringzh.J("_'\x00");
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
      switch(eg){
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
 $$GHCziCString_unpackCStringzh.J("NaN\x00");
},"a2");
var $$TextziReadziLex$j=$D(7,function(){
 $r([$$GHCziReal_notANumber]);
},"a3");
var $$TextziReadziLex$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("Infinity\x00");
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
 $$GHCziCString_unpackCStringzh.J("..\x00");
},"a7");
var $$TextziReadziLex$o=$T(function(){
 $$GHCziCString_unpackCStringzh.J("::\x00");
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
 $$GHCziCString_unpackCStringzh.J("<-\x00");
},"a15");
var $$TextziReadziLex$w=$T(function(){
 $$GHCziCString_unpackCStringzh.J("->\x00");
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
 $$GHCziCString_unpackCStringzh.J("=>\x00");
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
 $$GHCziCString_unpackCStringzh.J("!@#$%&*+./<=>?\\^|:-~\x00");
},"lvl5");
var $$TextziReadziLex$N=$F(1,function(wg){
 $$GHCziList_elem.J($$GHCziClasses_zdfEqChar,wg,$$TextziReadziLex$M);
},"a31");
var $$TextziReadziLex$O=$T(function(){
 $$GHCziCString_unpackCStringzh.J(",;()[]{}`\x00");
},"lvl6");
var $$TextziReadziLex$Y=$D(1,function(){
 $r([1]);
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
 $$GHCziCString_unpackCStringzh.J("valDig: Bad base\x00");
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
	   switch(Ah){
	   case 8:
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
	       var Mh=Nh-48|0;
	       var Lh=$d(1,[Mh],"sat");
	       ph.J(Lh);break;
	      }break;
	     }
	    },[ih,oh,gh,ph]);break;
	   case 10:
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
	       var Zh=ai-48|0;
	       var Yh=$d(1,[Zh],"sat");
	       ph.J(Yh);break;
	      }break;
	     }
	    },[ih,oh,gh,ph]);break;
	   case 16:
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
		 var pi=qi-65|0;
		 var oi=pi+10|0;
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
		  var Ci=Di-65|0;
		  var Bi=Ci+10|0;
		  var Ai=$d(1,[Bi],"sat");
		  ph.J(Ai);break;
		 }break;
		}break;
	       case 2:
		var Hi=$hs_ordzh(ci);
		var Gi=Hi-97|0;
		var Fi=Gi+10|0;
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
		  var Ui=Vi-65|0;
		  var Ti=Ui+10|0;
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
		   var hj=ij-65|0;
		   var gj=hj+10|0;
		   var fj=$d(1,[gj],"sat");
		   ph.J(fj);break;
		  }break;
		 }break;
		case 2:
		 var mj=$hs_ordzh(ci);
		 var lj=mj-97|0;
		 var kj=lj+10|0;
		 var jj=$d(1,[kj],"sat");
		 ph.J(jj);break;
		}break;
	       }break;
	      case 2:
	       var pj=$hs_ordzh(ci);
	       var oj=pj-48|0;
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
      switch(xj){
      case 8:
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
	  var Dj=Ej-48|0;
	  var Cj=$d(1,[Dj],"sat");
	  dh.J(Cj,Tg);break;
	 }break;
	}
       },[Tg,dh]);break;
      case 10:
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
	  var Kj=Lj-48|0;
	  var Jj=$d(1,[Kj],"sat");
	  dh.J(Jj,Tg);break;
	 }break;
	}
       },[Tg,dh]);break;
      case 16:
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
	    var Uj=Vj-65|0;
	    var Tj=Uj+10|0;
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
	     var bk=ck-65|0;
	     var ak=bk+10|0;
	     var Zj=$d(1,[ak],"sat");
	     dh.J(Zj,Tg);break;
	    }break;
	   }break;
	  case 2:
	   var gk=$hs_ordzh(Nj);
	   var fk=gk-97|0;
	   var ek=fk+10|0;
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
	     var nk=ok-65|0;
	     var mk=nk+10|0;
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
	      var uk=vk-65|0;
	      var tk=uk+10|0;
	      var sk=$d(1,[tk],"sat");
	      dh.J(sk,Tg);break;
	     }break;
	    }break;
	   case 2:
	    var zk=$hs_ordzh(Nj);
	    var yk=zk-97|0;
	    var xk=yk+10|0;
	    var wk=$d(1,[xk],"sat");
	    dh.J(wk,Tg);break;
	   }break;
	  }break;
	 case 2:
	  var Ck=$hs_ordzh(Nj);
	  var Bk=Ck-48|0;
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
  Ek.J(16);
 },[Ek],"lvl99");
 var Nk=$t(function(){
  Ek.J(8);
 },[Ek],"lvl100");
 var Ok=$t(function(){
  Ek.J(16);
 },[Ek],"lvl101");
 var Pk=$t(function(){
  Ek.J(8);
 },[Ek],"lvl102");
 var Qk=$f(1,function(Rk){
  $M(Rk,function(Sk){
   var Tk=Sk.v[0];
   $M(Tk,function(Uk){
    switch(Uk){
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
    switch(al){
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
 $r([10]);
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
    switch(kl){
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
 $$GHCziCString_unpackCStringzh.J("SOH\x00");
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
 $$GHCziCString_unpackCStringzh.J("SO\x00");
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
 $$GHCziCString_unpackCStringzh.J("NUL\x00");
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
 $$GHCziCString_unpackCStringzh.J("STX\x00");
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
 $$GHCziCString_unpackCStringzh.J("ETX\x00");
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
 $$GHCziCString_unpackCStringzh.J("EOT\x00");
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
 $$GHCziCString_unpackCStringzh.J("ENQ\x00");
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
 $$GHCziCString_unpackCStringzh.J("ACK\x00");
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
 $$GHCziCString_unpackCStringzh.J("BEL\x00");
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
 $$GHCziCString_unpackCStringzh.J("BS\x00");
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
 $$GHCziCString_unpackCStringzh.J("HT\x00");
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
 $$GHCziCString_unpackCStringzh.J("LF\x00");
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
 $$GHCziCString_unpackCStringzh.J("VT\x00");
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
 $$GHCziCString_unpackCStringzh.J("FF\x00");
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
 $$GHCziCString_unpackCStringzh.J("CR\x00");
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
 $$GHCziCString_unpackCStringzh.J("SI\x00");
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
 $$GHCziCString_unpackCStringzh.J("DLE\x00");
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
 $$GHCziCString_unpackCStringzh.J("DC1\x00");
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
 $$GHCziCString_unpackCStringzh.J("DC2\x00");
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
 $$GHCziCString_unpackCStringzh.J("DC3\x00");
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
 $$GHCziCString_unpackCStringzh.J("DC4\x00");
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
 $$GHCziCString_unpackCStringzh.J("NAK\x00");
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
 $$GHCziCString_unpackCStringzh.J("SYN\x00");
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
 $$GHCziCString_unpackCStringzh.J("ETB\x00");
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
 $$GHCziCString_unpackCStringzh.J("CAN\x00");
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
 $$GHCziCString_unpackCStringzh.J("EM\x00");
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
 $$GHCziCString_unpackCStringzh.J("SUB\x00");
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
 $$GHCziCString_unpackCStringzh.J("ESC\x00");
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
 $$GHCziCString_unpackCStringzh.J("FS\x00");
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
 $$GHCziCString_unpackCStringzh.J("GS\x00");
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
 $$GHCziCString_unpackCStringzh.J("RS\x00");
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
 $$GHCziCString_unpackCStringzh.J("US\x00");
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
 $$GHCziCString_unpackCStringzh.J("SP\x00");
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
 $$GHCziCString_unpackCStringzh.J("DEL\x00");
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
 $$GHCziIntegerziType_smallInteger.J(1114111);
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
    switch(co){
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
    switch(oo){
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
    switch(vo){
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
    switch(Bo){
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
     switch(Po){
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
 $$GHCziIntegerziType_smallInteger.J(10);
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
     switch(ip){
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
     switch(rp){
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
    switch(Dp){
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
    switch(Ip){
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
    switch(Tq){
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
    switch(Zq){
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
 var GG=BG<=0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(GG.g){
 case 1:
  var HG=FG<=0?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(HG.g){
  case 1:
   $M(BG,function(IG){
    switch(IG){
    case 0:
     var PI=$t(function(){
      var QI=$f(5,function(RI,SI,TI,UI,VI){
       var WI=VI<=0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(WI.g){
       case 1:
	var XI=$t(function(){
	 var aJ=VI-1|0;
	 var ZI=UI+1|0;
	 var YI=RI+1|0;
	 QI.J(YI,SI,TI,ZI,aJ);
	},[VI,RI,QI,SI,TI,UI],"sat");
	var bJ=$d(1,[RI],"sat");
	$R(2,[bJ,XI],":");break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[],"$wsearch");
      var dJ=FG-1|0;
      var cJ=EG+1|0;
      QI.J(1,CG,DG,cJ,dJ);
     },[FG,CG,EG,DG],"sat");
     var eJ=$d(1,[0],"sat");
     $R(2,[eJ,PI],":");break;
    default:
     var JG=FG<IG?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(JG.g){
     case 1:
      var iI=IG>>>0;
      var hI=$hs_plusAddrzh(CG,EG);
      var gI=$hs_plusAddrzh(yG,AG);
      var $ff=memcmp(gI,hI,iI);
      var KG=[$$GHCziPrim_realWorldzh,$ff];
      var LG=KG[0],MG=KG[1];
      $b(function(){
       $M(MG,function(fI){
	switch(fI){
	case 0:
	 $R(2,[],"True");break;
	default:
	 $R(1,[],"False");
	}
       },[FG,IG,yG,AG,CG,EG,DG,LG,zG]);
      },[],function(NG){
       var dI=$hs_touchzh(DG,LG);
       var eI=$hs_touchzh(zG,dI);
       $M(NG,function(OG){
	switch(OG.g){
	case 1:
	 var PG=$f(5,function(QG,RG,SG,TG,UG){
	  var VG=UG<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	  switch(VG.g){
	  case 1:
	   var WG=UG<IG?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(WG.g){
	   case 1:
	    var pH=IG>>>0;
	    var oH=$hs_plusAddrzh(RG,TG);
	    var nH=$hs_plusAddrzh(yG,AG);
	    var $ff=memcmp(nH,oH,pH);
	    var XG=[$$GHCziPrim_realWorldzh,$ff];
	    var YG=XG[0],ZG=XG[1];
	    $b(function(){
	     $M(ZG,function(mH){
	      switch(mH){
	      case 0:
	       $R(2,[],"True");break;
	      default:
	       $R(1,[],"False");
	      }
	     },[zG,UG,RG,TG,SG,YG,QG,PG]);
	    },[],function(aH){
	     var kH=$hs_touchzh(SG,YG);
	     var lH=$hs_touchzh(zG,kH);
	     $M(aH,function(bH){
	      switch(bH.g){
	      case 1:
	       var eH=UG-1|0;
	       var dH=TG+1|0;
	       var cH=QG+1|0;
	       PG.J(cH,RG,SG,dH,eH);break;
	      case 2:
	       var fH=$t(function(){
		var iH=UG-1|0;
		var hH=TG+1|0;
		var gH=QG+1|0;
		PG.J(gH,RG,SG,hH,iH);
	       },[UG,RG,TG,SG,QG,PG],"sat");
	       var jH=$d(1,[QG],"sat");
	       $R(2,[jH,fH],":");break;
	      }
	     },[UG,RG,TG,SG,QG,PG]);
	    },[zG,UG,RG,TG,SG,YG,QG,PG]);break;
	   case 2:
	    var sH=UG-1|0;
	    var rH=TG+1|0;
	    var qH=QG+1|0;
	    PG.J(qH,RG,SG,rH,sH);break;
	   }break;
	  case 2:
	   $R(1,[],"[]");break;
	  }
	 },[IG,yG,AG,zG],"$wsearch");
	 var uH=FG-1|0;
	 var tH=EG+1|0;
	 PG.J(1,CG,DG,tH,uH);break;
	case 2:
	 var vH=$t(function(){
	  var wH=$f(5,function(xH,yH,zH,AH,BH){
	   var CH=BH<=0?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(CH.g){
	   case 1:
	    var DH=BH<IG?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(DH.g){
	    case 1:
	     var WH=IG>>>0;
	     var VH=$hs_plusAddrzh(yH,AH);
	     var UH=$hs_plusAddrzh(yG,AG);
	     var $ff=memcmp(UH,VH,WH);
	     var EH=[$$GHCziPrim_realWorldzh,$ff];
	     var FH=EH[0],GH=EH[1];
	     $b(function(){
	      $M(GH,function(TH){
	       switch(TH){
	       case 0:
		$R(2,[],"True");break;
	       default:
		$R(1,[],"False");
	       }
	      },[zG,BH,yH,AH,zH,FH,xH,wH]);
	     },[],function(HH){
	      var RH=$hs_touchzh(zH,FH);
	      var SH=$hs_touchzh(zG,RH);
	      $M(HH,function(IH){
	       switch(IH.g){
	       case 1:
		var LH=BH-1|0;
		var KH=AH+1|0;
		var JH=xH+1|0;
		wH.J(JH,yH,zH,KH,LH);break;
	       case 2:
		var MH=$t(function(){
		 var PH=BH-1|0;
		 var OH=AH+1|0;
		 var NH=xH+1|0;
		 wH.J(NH,yH,zH,OH,PH);
		},[BH,yH,AH,zH,xH,wH],"sat");
		var QH=$d(1,[xH],"sat");
		$R(2,[QH,MH],":");break;
	       }
	      },[BH,yH,AH,zH,xH,wH]);
	     },[zG,BH,yH,AH,zH,FH,xH,wH]);break;
	    case 2:
	     var ZH=BH-1|0;
	     var YH=AH+1|0;
	     var XH=xH+1|0;
	     wH.J(XH,yH,zH,YH,ZH);break;
	    }break;
	   case 2:
	    $R(1,[],"[]");break;
	   }
	  },[IG,yG,AG,zG],"$wsearch");
	  var bI=FG-1|0;
	  var aI=EG+1|0;
	  wH.J(1,CG,DG,aI,bI);
	 },[FG,IG,yG,AG,CG,EG,DG,zG],"sat");
	 var cI=$d(1,[0],"sat");
	 $R(2,[cI,vH],":");break;
	}
       },[FG,IG,yG,AG,CG,EG,DG,zG]);
      },[FG,IG,yG,AG,CG,EG,DG,LG,zG]);break;
     case 2:
      var jI=$f(5,function(kI,lI,mI,nI,oI){
       var pI=oI<=0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(pI.g){
       case 1:
	var qI=oI<IG?$$GHCziTypes_True:$$GHCziTypes_False;
	switch(qI.g){
	case 1:
	 var JI=IG>>>0;
	 var II=$hs_plusAddrzh(lI,nI);
	 var HI=$hs_plusAddrzh(yG,AG);
	 var $ff=memcmp(HI,II,JI);
	 var rI=[$$GHCziPrim_realWorldzh,$ff];
	 var sI=rI[0],tI=rI[1];
	 $b(function(){
	  $M(tI,function(GI){
	   switch(GI){
	   case 0:
	    $R(2,[],"True");break;
	   default:
	    $R(1,[],"False");
	   }
	  },[zG,oI,lI,nI,mI,sI,kI,jI]);
	 },[],function(uI){
	  var EI=$hs_touchzh(mI,sI);
	  var FI=$hs_touchzh(zG,EI);
	  $M(uI,function(vI){
	   switch(vI.g){
	   case 1:
	    var yI=oI-1|0;
	    var xI=nI+1|0;
	    var wI=kI+1|0;
	    jI.J(wI,lI,mI,xI,yI);break;
	   case 2:
	    var zI=$t(function(){
	     var CI=oI-1|0;
	     var BI=nI+1|0;
	     var AI=kI+1|0;
	     jI.J(AI,lI,mI,BI,CI);
	    },[oI,lI,nI,mI,kI,jI],"sat");
	    var DI=$d(1,[kI],"sat");
	    $R(2,[DI,zI],":");break;
	   }
	  },[oI,lI,nI,mI,kI,jI]);
	 },[zG,oI,lI,nI,mI,sI,kI,jI]);break;
	case 2:
	 var MI=oI-1|0;
	 var LI=nI+1|0;
	 var KI=kI+1|0;
	 jI.J(KI,lI,mI,LI,MI);break;
	}break;
       case 2:
	$R(1,[],"[]");break;
       }
      },[IG,yG,AG,zG],"$wsearch");
      var OI=FG-1|0;
      var NI=EG+1|0;
      jI.J(1,CG,DG,NI,OI);break;
     }
    }
   },[FG,yG,AG,CG,EG,DG,zG]);break;
  case 2:
   $R(1,[],"[]");break;
  }break;
 case 2:
  $$GHCziEnum_eftInt.J(0,FG);break;
 }
},[],"at libraries/bytestring/Data/ByteString.hs:1548:1");

var $$GHCziCString_unpackCStringUtf8zh=$f(1,function(K){
 var L=$f(1,function(M){
  var N=$hs_indexCharOffAddrzh(K,M);
  switch(N){
  case "\x00":
   $R(1,[],"[]");break;
  default:
   var O=N<="\x7f"?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(O.g){
   case 1:
    var P=N<="\xdf"?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(P.g){
    case 1:
     var Q=N<="\xef"?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(Q.g){
     case 1:
      var R=$t(function(){
       var S=M+4|0;
       L.J(S);
      },[M,L],"sat");
      var T=$t(function(){
       var o1=M+3|0;
       var l1=$hs_indexCharOffAddrzh(K,o1);
       var n1=M+2|0;
       var j1=$hs_indexCharOffAddrzh(K,n1);
       var m1=M+1|0;
       var g1=$hs_indexCharOffAddrzh(K,m1);
       var k1=$hs_ordzh(l1);
       var X=k1-128|0;
       var i1=$hs_ordzh(j1);
       var h1=i1-128|0;
       var Z=h1<<6;
       var f1=$hs_ordzh(g1);
       var e1=f1-128|0;
       var b1=e1<<12;
       var d1=$hs_ordzh(N);
       var c1=d1-240|0;
       var a1=c1<<18;
       var Y=a1+b1|0;
       var W=Y+Z|0;
       var V=W+X|0;
       var U=$hs_chrzh(V);
       $R(1,[U],"C#");
      },[K,M,N],"sat");
      $R(2,[T,R],":");break;
     case 2:
      var p1=$t(function(){
       var q1=M+3|0;
       L.J(q1);
      },[M,L],"sat");
      var r1=$t(function(){
       var G1=M+2|0;
       var E1=$hs_indexCharOffAddrzh(K,G1);
       var F1=M+1|0;
       var C1=$hs_indexCharOffAddrzh(K,F1);
       var D1=$hs_ordzh(E1);
       var v1=D1-128|0;
       var B1=$hs_ordzh(C1);
       var A1=B1-128|0;
       var x1=A1<<6;
       var z1=$hs_ordzh(N);
       var y1=z1-224|0;
       var w1=y1<<12;
       var u1=w1+x1|0;
       var t1=u1+v1|0;
       var s1=$hs_chrzh(t1);
       $R(1,[s1],"C#");
      },[K,M,N],"sat");
      $R(2,[r1,p1],":");break;
     }break;
    case 2:
     var H1=$t(function(){
      var I1=M+2|0;
      L.J(I1);
     },[M,L],"sat");
     var J1=$t(function(){
      var S1=M+1|0;
      var R1=$hs_indexCharOffAddrzh(K,S1);
      var Q1=$hs_ordzh(R1);
      var N1=Q1-128|0;
      var P1=$hs_ordzh(N);
      var O1=P1-192|0;
      var M1=O1<<6;
      var L1=M1+N1|0;
      var K1=$hs_chrzh(L1);
      $R(1,[K1],"C#");
     },[K,M,N],"sat");
     $R(2,[J1,H1],":");break;
    }break;
   case 2:
    var T1=$t(function(){
     var U1=M+1|0;
     L.J(U1);
    },[M,L],"sat");
    var V1=$d(1,[N],"sat");
    $R(2,[V1,T1],":");break;
   }
  }
 },[K],"unpack");
 L.J(0);
},[],"at libraries/ghc-prim/GHC/CString.hs:89:1");

var $$GHCziClasses_zeze=$f(1,function(a){
 $M(a,function(b){
  var c=b.v[0];
  $A(c);
 },[]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:5");
var $$GHCziClasses_compareIntzh=$f(2,function(y1,z1){
 var A1=y1<z1?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(A1.g){
 case 1:
  var B1=y1==z1?$$GHCziTypes_True:$$GHCziTypes_False;
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
   $r(L1<=N1?$$GHCziTypes_True:$$GHCziTypes_False);
  },[L1]);
 },[J1]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:241:8");
var $$GHCziClasses_ltInt=$f(2,function(O1,P1){
 $M(O1,function(Q1){
  var R1=Q1.v[0];
  $M(P1,function(S1){
   var T1=S1.v[0];
   $r(R1<T1?$$GHCziTypes_True:$$GHCziTypes_False);
  },[R1]);
 },[P1]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:240:8");
var $$GHCziClasses_geInt=$f(2,function(U1,V1){
 $M(U1,function(W1){
  var X1=W1.v[0];
  $M(V1,function(Y1){
   var Z1=Y1.v[0];
   $r(X1>=Z1?$$GHCziTypes_True:$$GHCziTypes_False);
  },[X1]);
 },[V1]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:239:8");
var $$GHCziClasses_gtInt=$f(2,function(a2,b2){
 $M(a2,function(c2){
  var d2=c2.v[0];
  $M(b2,function(e2){
   var f2=e2.v[0];
   $r(d2>f2?$$GHCziTypes_True:$$GHCziTypes_False);
  },[d2]);
 },[b2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:238:8");
var $$GHCziClasses_neInt=$f(2,function(g2,h2){
 $M(g2,function(i2){
  var j2=i2.v[0];
  $M(h2,function(k2){
   var l2=k2.v[0];
   $r(j2!=l2?$$GHCziTypes_True:$$GHCziTypes_False);
  },[j2]);
 },[h2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:114:8");
var $$GHCziClasses_eqInt=$f(2,function(m2,n2){
 $M(m2,function(o2){
  var p2=o2.v[0];
  $M(n2,function(q2){
   var r2=q2.v[0];
   $r(p2==r2?$$GHCziTypes_True:$$GHCziTypes_False);
  },[p2]);
 },[n2]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:113:8");
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
var $$GHCziClasses_zdfEqZMZNzuzdczeze=$f(2,function(y3,z3){
 $M(y3,function(A3){
  switch(A3.g){
  case 1:
   $M(z3,function(B3){
    switch(B3.g){
    case 1:
     $R(2,[],"True");break;
    case 2:
     $R(1,[],"False");break;
    }
   },[]);break;
  case 2:
   var C3=A3.v[0],D3=A3.v[1];
   $M(z3,function(E3){
    switch(E3.g){
    case 1:
     $R(1,[],"False");break;
    case 2:
     var F3=E3.v[0],G3=E3.v[1];
     $M(C3,function(H3){
      var I3=H3.v[0];
      $M(F3,function(J3){
       var K3=J3.v[0];
       var L3=I3==K3?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(L3.g){
       case 1:
	$R(1,[],"False");break;
       case 2:
	$$GHCziClasses_zdfEqZMZNzuzdczeze.J(D3,G3);break;
       }
      },[I3,D3,G3]);
     },[F3,D3,G3]);break;
    }
   },[C3,D3]);break;
  }
 },[z3]);
},[],"at libraries/ghc-prim/GHC/Classes.hs:46:5");
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
   var o1L=l1L<=n1L?$$GHCziTypes_True:$$GHCziTypes_False;
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
   var v1L=s1L<=u1L?$$GHCziTypes_True:$$GHCziTypes_False;
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

var $$GHCziIntegerziType_absInt=$f(1,function(g){
 var h=g<0?$$GHCziTypes_True:$$GHCziTypes_False;
 switch(h.g){
 case 1:
  $A(g);break;
 case 2:
  $r( -g);break;
 }
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:290:1");
var $$GHCziIntegerziType_gcdInt=$f(2,function(i,j){
 $M(i,function(k){
  switch(k){
  case 0:
   $$GHCziIntegerziType_absInt.J(j);break;
  default:
   $M(j,function(l){
    switch(l){
    case 0:
     var t=k<0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(t.g){
     case 1:
      $A(k);break;
     case 2:
      $r( -k);break;
     }break;
    default:
     var m=l<0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(m.g){
     case 1:
      var n=k<0?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(n.g){
      case 1:
       $r(integer_cmm_gcdIntzh(k,l));break;
      case 2:
       var o= -k;
       $r(integer_cmm_gcdIntzh(o,l));break;
      }break;
     case 2:
      var p=k<0?$$GHCziTypes_True:$$GHCziTypes_False;
      switch(p.g){
      case 1:
       var q= -l;
       $r(integer_cmm_gcdIntzh(k,q));break;
      case 2:
       var s= -l;
       var r= -k;
       $r(integer_cmm_gcdIntzh(r,s));break;
      }break;
     }
    }
   },[k]);
  }
 },[j]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:285:1");
var $$GHCziIntegerziType_remInteger=$f(2,function(Y4,Z4){
 $M(Y4,function(a5){
  switch(a5.g){
  case 1:
   var b5=a5.v[0];
   $M(b5,function(c5){
    switch(c5){
    case  -2147483648:
     var k5=integer_cmm_int2Integerzh( -2147483648);
     var l5=k5[0],m5=k5[1];
     var n5=$d(2,[l5,m5],"sat");
     $$GHCziIntegerziType_remInteger.J(n5,Z4);break;
    default:
     $M(Z4,function(d5){
      switch(d5.g){
      case 1:
       var e5=d5.v[0];
       var f5=c5%e5;
       $R(1,[f5],"S#");break;
      case 2:
       var g5=integer_cmm_int2Integerzh(c5);
       var h5=g5[0],i5=g5[1];
       var j5=$d(2,[h5,i5],"sat");
       $$GHCziIntegerziType_remInteger.J(j5,d5);break;
      }
     },[c5]);
    }
   },[Z4]);break;
  case 2:
   var o5=a5.v[0],p5=a5.v[1];
   $M(Z4,function(q5){
    switch(q5.g){
    case 1:
     var r5=q5.v[0];
     var s5=integer_cmm_int2Integerzh(r5);
     var t5=s5[0],u5=s5[1];
     var v5=integer_cmm_remIntegerzh(o5,p5,t5,u5);
     var w5=v5[0],x5=v5[1];
     $M(w5,function(y5){
      switch(y5){
      case 0:
       $A($$GHCziIntegerziType$a);break;
      default:
       var A5=$hs_indexIntArrayzh(x5,0);
       var z5=y5<0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(z5.g){
       case 1:
	$R(1,[A5],"S#");break;
       case 2:
	var B5= -A5;
	$R(1,[B5],"S#");break;
       }
      }
     },[x5]);break;
    case 2:
     var C5=q5.v[0],D5=q5.v[1];
     var E5=integer_cmm_remIntegerzh(o5,p5,C5,D5);
     var F5=E5[0],G5=E5[1];
     $R(2,[F5,G5],"J#");break;
    }
   },[o5,p5]);break;
  }
 },[Z4]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:216:1");
var $$GHCziIntegerziType_quotInteger=$f(2,function(H5,I5){
 $M(H5,function(J5){
  switch(J5.g){
  case 1:
   var K5=J5.v[0];
   $M(K5,function(L5){
    switch(L5){
    case  -2147483648:
     var T5=integer_cmm_int2Integerzh( -2147483648);
     var U5=T5[0],V5=T5[1];
     var W5=$d(2,[U5,V5],"sat");
     $$GHCziIntegerziType_quotInteger.J(W5,I5);break;
    default:
     $M(I5,function(M5){
      switch(M5.g){
      case 1:
       var N5=M5.v[0];
       var O5=L5/N5|0;
       $R(1,[O5],"S#");break;
      case 2:
       var P5=integer_cmm_int2Integerzh(L5);
       var Q5=P5[0],R5=P5[1];
       var S5=$d(2,[Q5,R5],"sat");
       $$GHCziIntegerziType_quotInteger.J(S5,M5);break;
      }
     },[L5]);
    }
   },[I5]);break;
  case 2:
   var X5=J5.v[0],Y5=J5.v[1];
   $M(I5,function(Z5){
    switch(Z5.g){
    case 1:
     var a6=Z5.v[0];
     var b6=integer_cmm_int2Integerzh(a6);
     var c6=b6[0],d6=b6[1];
     var e6=integer_cmm_quotIntegerzh(X5,Y5,c6,d6);
     var f6=e6[0],g6=e6[1];
     $R(2,[f6,g6],"J#");break;
    case 2:
     var h6=Z5.v[0],i6=Z5.v[1];
     var j6=integer_cmm_quotIntegerzh(X5,Y5,h6,i6);
     var k6=j6[0],l6=j6[1];
     $R(2,[k6,l6],"J#");break;
    }
   },[X5,Y5]);break;
  }
 },[I5]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:236:1");
var $$GHCziIntegerziType_geInteger=$f(2,function(K8,L8){
 $M(K8,function(M8){
  switch(M8.g){
  case 1:
   var N8=M8.v[0];
   $M(L8,function(O8){
    switch(O8.g){
    case 1:
     var P8=O8.v[0];
     $r(N8>=P8?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var Q8=O8.v[0],R8=O8.v[1];
     var S8=integer_cmm_cmpIntegerIntzh(Q8,R8,N8);
     $r(S8<=0?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[N8]);break;
  case 2:
   var T8=M8.v[0],U8=M8.v[1];
   $M(L8,function(V8){
    switch(V8.g){
    case 1:
     var W8=V8.v[0];
     var X8=integer_cmm_cmpIntegerIntzh(T8,U8,W8);
     $r(X8>=0?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var Y8=V8.v[0],Z8=V8.v[1];
     var a9=integer_cmm_cmpIntegerzh(T8,U8,Y8,Z8);
     $r(a9>=0?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[T8,U8]);break;
  }
 },[L8]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:356:1");
var $$GHCziIntegerziType_leInteger=$f(2,function(J9,K9){
 $M(J9,function(L9){
  switch(L9.g){
  case 1:
   var M9=L9.v[0];
   $M(K9,function(N9){
    switch(N9.g){
    case 1:
     var O9=N9.v[0];
     $r(M9<=O9?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var P9=N9.v[0],Q9=N9.v[1];
     var R9=integer_cmm_cmpIntegerIntzh(P9,Q9,M9);
     $r(R9>=0?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[M9]);break;
  case 2:
   var S9=L9.v[0],T9=L9.v[1];
   $M(K9,function(U9){
    switch(U9.g){
    case 1:
     var V9=U9.v[0];
     var W9=integer_cmm_cmpIntegerIntzh(S9,T9,V9);
     $r(W9<=0?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var X9=U9.v[0],Y9=U9.v[1];
     var Z9=integer_cmm_cmpIntegerzh(S9,T9,X9,Y9);
     $r(Z9<=0?$$GHCziTypes_True:$$GHCziTypes_False);break;
    }
   },[S9,T9]);break;
  }
 },[K9]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:335:1");
var $$GHCziIntegerziType_signumInteger=$f(1,function(aa){
 $M(aa,function(ba){
  switch(ba.g){
  case 1:
   var ca=ba.v[0];
   var da=ca<0?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(da.g){
   case 1:
    $M(ca,function(ea){
     switch(ea){
     case 0:
      $A($$GHCziIntegerziType$a);break;
     default:
      $A($$GHCziIntegerziType$b);
     }
    },[]);break;
   case 2:
    $A($$GHCziIntegerziType$c);break;
   }break;
  case 2:
   var fa=ba.v[0],ga=ba.v[1];
   var ja=integer_cmm_cmpIntegerIntzh(fa,ga,0);
   var ha=ja>0?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(ha.g){
   case 1:
    $M(ja,function(ia){
     switch(ia){
     case 0:
      $A($$GHCziIntegerziType$a);break;
     default:
      $A($$GHCziIntegerziType$c);
     }
    },[]);break;
   case 2:
    $A($$GHCziIntegerziType$b);break;
   }break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:407:1");
var $$GHCziIntegerziType_eqInteger=$f(2,function(Ba,Ca){
 $M(Ba,function(Da){
  switch(Da.g){
  case 1:
   var Ea=Da.v[0];
   $M(Ca,function(Fa){
    switch(Fa.g){
    case 1:
     var Ga=Fa.v[0];
     $r(Ea==Ga?$$GHCziTypes_True:$$GHCziTypes_False);break;
    case 2:
     var Ha=Fa.v[0],Ia=Fa.v[1];
     var Ja=integer_cmm_cmpIntegerIntzh(Ha,Ia,Ea);
     switch(Ja){
     case 0:
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    }
   },[Ea]);break;
  case 2:
   var Ka=Da.v[0],La=Da.v[1];
   $M(Ca,function(Ma){
    switch(Ma.g){
    case 1:
     var Na=Ma.v[0];
     var Oa=integer_cmm_cmpIntegerIntzh(Ka,La,Na);
     switch(Oa){
     case 0:
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    case 2:
     var Pa=Ma.v[0],Qa=Ma.v[1];
     var Ra=integer_cmm_cmpIntegerzh(Ka,La,Pa,Qa);
     switch(Ra){
     case 0:
      $R(2,[],"True");break;
     default:
      $R(1,[],"False");
     }break;
    }
   },[Ka,La]);break;
  }
 },[Ca]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:315:1");
var $$GHCziIntegerziType_minusInteger=$f(2,function(Ya,Za){
 $M(Ya,function(ab){
  switch(ab.g){
  case 1:
   var bb=ab.v[0];
   $M(Za,function(cb){
    switch(cb.g){
    case 1:
     var db=cb.v[0];
     var eb=$hs_subIntCzh(bb,db);
     var fb=eb[0],gb=eb[1];
     $M(gb,function(hb){
      switch(hb){
      case 0:
       $R(1,[fb],"S#");break;
      default:
       var ib=integer_cmm_int2Integerzh(bb);
       var jb=ib[0],kb=ib[1];
       var lb=integer_cmm_int2Integerzh(db);
       var mb=lb[0],nb=lb[1];
       var ob=$d(2,[mb,nb],"sat");
       var pb=$d(2,[jb,kb],"sat");
       $$GHCziIntegerziType_minusInteger.J(pb,ob);
      }
     },[bb,db,fb]);break;
    case 2:
     var qb=integer_cmm_int2Integerzh(bb);
     var rb=qb[0],sb=qb[1];
     var tb=$d(2,[rb,sb],"sat");
     $$GHCziIntegerziType_minusInteger.J(tb,cb);break;
    }
   },[bb]);break;
  case 2:
   var ub=ab.v[0],vb=ab.v[1];
   $M(Za,function(wb){
    switch(wb.g){
    case 1:
     var xb=wb.v[0];
     var yb=integer_cmm_int2Integerzh(xb);
     var zb=yb[0],Ab=yb[1];
     var Bb=$d(2,[zb,Ab],"sat");
     $$GHCziIntegerziType_minusInteger.J(ab,Bb);break;
    case 2:
     var Cb=wb.v[0],Db=wb.v[1];
     var Eb=integer_cmm_minusIntegerzh(ub,vb,Cb,Db);
     var Fb=Eb[0],Gb=Eb[1];
     $R(2,[Fb,Gb],"J#");break;
    }
   },[ab,ub,vb]);break;
  }
 },[Za]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:432:1");
var $$GHCziIntegerziType_absInteger=$f(1,function(fd){
 $M(fd,function(gd){
  switch(gd.g){
  case 1:
   var hd=gd.v[0];
   $M(hd,function(id){
    switch(id){
    case  -2147483648:
     $A($$GHCziIntegerziType$f);break;
    default:
     var jd=id>=0?$$GHCziTypes_True:$$GHCziTypes_False;
     switch(jd.g){
     case 1:
      var kd= -id;
      $R(1,[kd],"S#");break;
     case 2:
      $A(gd);break;
     }
    }
   },[gd]);break;
  case 2:
   var ld=gd.v[0],md=gd.v[1];
   var nd=ld>=0?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(nd.g){
   case 1:
    var od= -ld;
    $R(2,[od,md],"J#");break;
   case 2:
    $A(gd);break;
   }break;
  }
 },[]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:401:1");
var $$GHCziIntegerziType_gcdInteger=$f(2,function(pd,qd){
 var rd=$t(function(){
  var sd=$t(function(){
   $M(pd,function(td){
    switch(td.g){
    case 1:
     var ud=td.v[0];
     $M(qd,function(vd){
      switch(vd.g){
      case 1:
       var wd=vd.v[0];
       $$GHCziIntegerziType_gcdInt.C([ud,wd],function(xd){
	$R(1,[xd],"S#");
       },[]);break;
      case 2:
       var yd=vd.v[0],zd=vd.v[1];
       $M(ud,function(Ad){
	switch(Ad){
	case 0:
	 $$GHCziIntegerziType_absInteger.J(vd);break;
	default:
	 $M(yd,function(Bd){
	  switch(Bd){
	  case 0:
	   $$GHCziIntegerziType_absInteger.J(td);break;
	  default:
	   var Cd=Bd<0?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Cd.g){
	   case 1:
	    var Dd=Ad<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Dd.g){
	    case 1:
	     var Ed=integer_cmm_gcdIntegerIntzh(Bd,zd,Ad);
	     $R(1,[Ed],"S#");break;
	    case 2:
	     var Gd= -Ad;
	     var Fd=integer_cmm_gcdIntegerIntzh(Bd,zd,Gd);
	     $R(1,[Fd],"S#");break;
	    }break;
	   case 2:
	    var Hd=Ad<0?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Hd.g){
	    case 1:
	     var Jd= -Bd;
	     var Id=integer_cmm_gcdIntegerIntzh(Jd,zd,Ad);
	     $R(1,[Id],"S#");break;
	    case 2:
	     var Md= -Ad;
	     var Ld= -Bd;
	     var Kd=integer_cmm_gcdIntegerIntzh(Ld,zd,Md);
	     $R(1,[Kd],"S#");break;
	    }break;
	   }
	  }
	 },[Ad,zd,td]);
	}
       },[yd,zd,td,vd]);break;
      }
     },[ud,td]);break;
    case 2:
     var Nd=td.v[0],Od=td.v[1];
     $M(qd,function(Pd){
      switch(Pd.g){
      case 1:
       $$GHCziIntegerziType_gcdInteger.J(Pd,td);break;
      case 2:
       var Qd=Pd.v[0],Rd=Pd.v[1];
       var Sd=integer_cmm_gcdIntegerzh(Nd,Od,Qd,Rd);
       var Td=Sd[0],Ud=Sd[1];
       $R(2,[Td,Ud],"J#");break;
      }
     },[td,Nd,Od]);break;
    }
   },[qd]);
  },[pd,qd],"$wfail1");
  $M(qd,function(Vd){
   switch(Vd.g){
   case 1:
    var Wd=Vd.v[0];
    $M(Wd,function(Xd){
     switch(Xd){
     case  -2147483648:
      var Yd=integer_cmm_int2Integerzh( -2147483648);
      var Zd=Yd[0],ae=Yd[1];
      var be=$d(2,[Zd,ae],"sat");
      $$GHCziIntegerziType_gcdInteger.J(pd,be);break;
     default:
      $A(sd);
     }
    },[pd,qd,sd]);break;
   case 2:
    $A(sd);break;
   }
  },[pd,qd,sd]);
 },[pd,qd],"$wfail");
 $M(pd,function(ce){
  switch(ce.g){
  case 1:
   var de=ce.v[0];
   $M(de,function(ee){
    switch(ee){
    case  -2147483648:
     var fe=integer_cmm_int2Integerzh( -2147483648);
     var ge=fe[0],he=fe[1];
     var ie=$d(2,[ge,he],"sat");
     $$GHCziIntegerziType_gcdInteger.J(ie,qd);break;
    default:
     $A(rd);
    }
   },[pd,qd,rd]);break;
  case 2:
   $A(rd);break;
  }
 },[pd,qd,rd]);
},[],"at libraries/integer-gmp/GHC/Integer/Type.lhs:260:1");
var $$GHCziIntegerziType$c=$D(1,function(){
 $r([ -1]);
},"lvl2");
var $$GHCziIntegerziType$f=$T(function(){
 $$GHCziIntegerziType_plusInteger.J($$GHCziIntegerziType$d,$$GHCziIntegerziType$b);
},"lvl5");

//@ sourceURL=hs8.js
