//$$Main_main
//$$Main_main1
//$$Main_main2
var $$GHCziIOziBufferedIO_emptyWriteBuffer=$f(1,function(j){
 $M(j,function(k){
  var l=k.v[3];
  $A(l);
 },[]);
},[],"at libraries/base/GHC/IO/BufferedIO.hs:63:3");

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

var $$GHCziIOziEncodingziLatin1_zdwa=$f(8,function(a,b,c,d,e,f,g,h){
 $M(g,function(i){
  var j=i.v[0],k=i.v[1],l=i.v[2],m=i.v[3],n=i.v[4],o=i.v[5];
  var p=$d(1,[a,b,c,d,0,0],"lvl");
  var q=$f(3,function(r,s,t){
   var u=s>=m?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(u.g){
   case 1:
    var v=r>=f?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(v.g){
    case 1:
     var w=$hs_readWideCharOffAddrzh(a,r,t);
     var x=w[0],y=w[1];
     var F=$hs_touchzh(b,x);
     var H=$hs_ordzh(y);
     var G=H>>>0;
     var E=G&255;
     var D=$hs_plusAddrzh(j,s);
     var C=$hs_writeWord8OffAddrzh(D,0,E,F);
     var B=$hs_touchzh(k,C);
     var A=s+1|0;
     var z=r+1|0;
     q.J(z,A,B);break;
    case 2:
     var I=$d(1,[j,k,l,m,n,s],"sat");
     var J=$t(function(){
      var K=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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
     var O=r==f?$$GHCziTypes_True:$$GHCziTypes_False;
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

var $$GHCziIOziException_NoSuchThing=$D(2,function(){
 $r([]);
},"at libraries/base/GHC/IO/Exception.hs:231:5");

var $$GHCziIOziFD_stdout=$D(1,function(){
 $r([1,0]);
},"at libraries/base/GHC/IO/FD.hs:299:1");

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
    },[f4,n4,q4,p4,e4],"a2");
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
var $$GHCziIOziHandleziFD$d=$D(2,function(){
 $r([$$GHCziIOziHandleziFD$b]);
},"lvl1");
var $$GHCziIOziHandleziFD$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("<stdout>");
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

var $$GHCziIOziHandleziInternals_ioezufinalizzedHandle=$f(1,function(D){
 var E=$d(2,[D],"sat");
 var F=$d(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$k,$$DataziMaybe_Nothing,E],"sat");
 $$GHCziException_throw2.J(F,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctoException);
},[],"at libraries/base/GHC/IO/Handle/Internals.hs:345:1");
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
       var D4=B4==C4?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(D4.g){
       case 1:
	$$GHCziIOziHandleziInternals_zdwa3.J(a4,x4,y4,z4,A4,B4,C4,E4);break;
       case 2:
	$r([E4,$$GHCziTuple_Z0T]);break;
       }
      },[a4,E4]);
     },[d4,k4,a4]);
    },[d4,b4,c4,n4,m4,k4,a4],"$w$j");
    var F4=o4==q4?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(F4.g){
    case 1:
     $M(k4,function(G4){
      var H4=G4.v[0],I4=G4.v[1],J4=G4.v[2],K4=G4.v[3],L4=G4.v[4],M4=G4.v[5];
      var N4=$t(function(){
       $r(L4==M4?$$GHCziTypes_True:$$GHCziTypes_False);
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
	    var d5=q4-p4|0;
	    var a5=d5>=Z4?$$GHCziTypes_True:$$GHCziTypes_False;
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
	var f5=L4==X3?$$GHCziTypes_True:$$GHCziTypes_False;
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
var $$GHCziIOziHandleziInternals_flushBuffer4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("cannot flush the read buffer: underlying device is not seekable");
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushBuffer3=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_flushBuffer4,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_flushBuffer2=$f(2,function(i7,j7){
 $M(i7,function(k7){
  var l7=k7.v[0],m7=k7.v[3],n7=k7.v[5];
  var o7=$hs_readMutVarzh(n7,j7);
  var p7=o7[0],q7=o7[1];
  $M(q7,function(r7){
   var s7=r7.v[0],t7=r7.v[1],u7=r7.v[2],v7=r7.v[3],w7=r7.v[4],x7=r7.v[5];
   var y7=w7==x7?$$GHCziTypes_True:$$GHCziTypes_False;
   switch(y7.g){
   case 1:
    $$GHCziIOziDevice_isSeekable.C([l7,m7,p7],function(z7){
     var A7=z7[0],B7=z7[1];
     var C7=$f(1,function(D7){
      var E7=$t(function(){
       var G7=x7-w7|0;
       var F7= -G7;
       $$GHCziIntegerziType_smallInteger.J(F7);
      },[w7,x7],"sat");
      $$GHCziIOziDevice_seek.C([l7,m7,$$GHCziIOziDevice_RelativeSeek,E7,D7],function(H7){
       var I7=H7[0];
       var J7=$d(1,[s7,t7,u7,v7,0,0],"sat");
       var K7=$hs_writeMutVarzh(n7,J7,I7);
       $r([K7,$$GHCziTuple_Z0T]);
      },[n7,s7,t7,u7,v7]);
     },[n7,w7,x7,l7,m7,s7,t7,u7,v7],"a7");
     $M(B7,function(L7){
      switch(L7.g){
      case 1:
       $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals_flushBuffer3,A7],function(M7){
	var N7=M7[0];
	C7.J(N7);
       },[n7,w7,x7,l7,m7,s7,t7,u7,v7,C7]);break;
      case 2:
       C7.J(A7);break;
      }
     },[n7,w7,x7,l7,m7,s7,t7,u7,v7,C7,A7]);
    },[n7,w7,x7,l7,m7,s7,t7,u7,v7]);break;
   case 2:
    $r([p7,$$GHCziTuple_Z0T]);break;
   }
  },[n7,l7,m7,p7]);
 },[j7]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle2=$f(5,function(jl,kl,ll,ml,nl){
 var ol=$f(2,function(pl,ql){
  $M(pl,function(rl){
   var sl=rl.v[1],tl=rl.v[3],ul=rl.v[4],vl=rl.v[5],wl=rl.v[7],xl=rl.v[8],yl=rl.v[11];
   $M(ul,function(zl){
    switch(zl.g){
    case 1:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$v,ql],function(El){
      var Fl=El[0],Gl=El[1];
      var Hl=$d(1,[rl,Gl],"sat");
      $r([Fl,Hl]);
     },[rl]);break;
    case 2:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$w,ql],function(Il){
      var Jl=Il[0],Kl=Il[1];
      var Ll=$d(1,[rl,Kl],"sat");
      $r([Jl,Ll]);
     },[rl]);break;
    case 3:
     $$GHCziIOziException_ioException.C([$$GHCziIOziHandleziInternals$x,ql],function(Ml){
      var Nl=Ml[0],Ol=Ml[1];
      var Pl=$d(1,[rl,Ol],"sat");
      $r([Nl,Pl]);
     },[rl]);break;
    case 6:
     var Ql=$hs_readMutVarzh(xl,ql);
     var Rl=Ql[0],Sl=Ql[1];
     $M(Sl,function(Tl){
      var Ul=Tl.v[2];
      $M(Ul,function(Vl){
       switch(Vl.g){
       case 1:
	var Wl=$hs_readMutVarzh(xl,Rl);
	var Xl=Wl[0],Yl=Wl[1];
	$M(Yl,function(Zl){
	 var am=Zl.v[2],bm=Zl.v[4],cm=Zl.v[5];
	 var dm=$f(1,function(em){
	  $$GHCziIOziHandleziInternals_flushBuffer2.C([rl,em],function(fm){
	   var gm=fm[0];
	   var hm=$hs_readMutVarzh(xl,gm);
	   var im=hm[0],jm=hm[1];
	   var km=$t(function(){
	    $M(jm,function(lm){
	     var mm=lm.v[0],nm=lm.v[1],om=lm.v[3],pm=lm.v[4],qm=lm.v[5];
	     $R(1,[mm,nm,$$GHCziIOziBuffer_WriteBuffer,om,pm,qm],"Buffer");
	    },[]);
	   },[jm],"sat");
	   var Cm=$hs_writeMutVarzh(xl,km,im);
	   var rm=$hs_readMutVarzh(vl,Cm);
	   var sm=rm[0],tm=rm[1];
	   $$GHCziIOziBufferedIO_emptyWriteBuffer.C([sl,tl,tm,sm],function(um){
	    var vm=um[0],wm=um[1];
	    var Bm=$hs_writeMutVarzh(vl,wm,vm);
	    ml.C([rl,Bm],function(xm){
	     var ym=xm[0],zm=xm[1];
	     var Am=$d(1,[rl,zm],"sat");
	     $r([ym,Am]);
	    },[rl]);
	   },[rl,ml,vl]);
	  },[rl,ml,xl,vl,sl,tl]);
	 },[rl,ml,xl,vl,sl,tl],"$j");
	 $M(am,function(Dm){
	  switch(Dm.g){
	  case 1:
	   var Em=bm==cm?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Em.g){
	   case 1:
	    var Fm=$hs_readMutVarzh(wl,Xl);
	    var Gm=Fm[0],Hm=Fm[1];
	    $M(Hm,function(Im){
	     var Jm=Im.v[0],Km=Im.v[1];
	     var Lm=$hs_readMutVarzh(xl,Gm);
	     var Mm=Lm[0],Nm=Lm[1];
	     var Om=$t(function(){
	      $M(Nm,function(Pm){
	       var Qm=Pm.v[0],Rm=Pm.v[1],Sm=Pm.v[2],Tm=Pm.v[3];
	       $R(1,[Qm,Rm,Sm,Tm,0,0],"Buffer");
	      },[]);
	     },[Nm],"sat");
	     var mn=$hs_writeMutVarzh(xl,Om,Mm);
	     $M(Nm,function(Um){
	      var Vm=Um.v[0],Wm=Um.v[1],Xm=Um.v[2],Ym=Um.v[4];
	      $M(Ym,function(Zm){
	       switch(Zm.toString()){
	       case "0":
		var Bn=$hs_writeMutVarzh(vl,Km,mn);
		dm.J(Bn);break;
	       default:
		$M(yl,function(an){
		 switch(an.g){
		 case 1:
		  var bn=$t(function(){
		   $M(Km,function(cn){
		    var dn=cn.v[0],en=cn.v[1],fn=cn.v[2],gn=cn.v[3],hn=cn.v[4],jn=cn.v[5];
		    var kn=hn+Zm|0;
		    $R(1,[dn,en,fn,gn,kn,jn],"Buffer");
		   },[Zm]);
		  },[Km,Zm],"sat");
		  var ln=$hs_writeMutVarzh(vl,bn,mn);
		  dm.J(ln);break;
		 case 2:
		  var nn=an.v[0];
		  $M(nn,function(on){
		   var pn=on.v[0],qn=on.v[1],rn=on.v[4];
		   rn.C([Jm,mn],function(sn){
		    var tn=sn[0];
		    var un=$d(1,[Vm,Wm,Xm,Zm,0,0],"sat");
		    $$GHCziIOziHandleziInternals_zdwa.C([pn,qn,Km,un,tn],function(vn){
		     var wn=vn[0],xn=vn[1];
		     $M(xn,function(yn){
		      var zn=yn.v[0];
		      var An=$hs_writeMutVarzh(vl,zn,wn);
		      dm.J(An);
		     },[rl,ml,xl,vl,sl,tl,dm,wn]);
		    },[rl,ml,xl,vl,sl,tl,dm]);
		   },[rl,ml,xl,vl,sl,tl,dm,Km,Zm,pn,qn,Vm,Wm,Xm]);
		  },[rl,ml,xl,vl,sl,tl,dm,Km,Zm,mn,Jm,Vm,Wm,Xm]);break;
		 }
		},[rl,ml,xl,vl,sl,tl,dm,Km,Zm,mn,Jm,Vm,Wm,Xm]);
	       }
	      },[rl,ml,xl,vl,sl,tl,dm,yl,Km,mn,Jm,Vm,Wm,Xm]);
	     },[rl,ml,xl,vl,sl,tl,dm,yl,Km,mn,Jm]);
	    },[rl,ml,xl,vl,sl,tl,dm,Gm,yl]);break;
	   case 2:
	    dm.J(Xl);break;
	   }break;
	  case 2:
	   dm.J(Xl);break;
	  }
	 },[rl,ml,xl,vl,sl,tl,dm,bm,cm,wl,Xl,yl]);
	},[rl,ml,xl,vl,sl,tl,wl,Xl,yl]);break;
       case 2:
	ml.C([rl,Rl],function(Cn){
	 var Dn=Cn[0],En=Cn[1];
	 var Fn=$d(1,[rl,En],"sat");
	 $r([Dn,Fn]);
	},[rl]);break;
       }
      },[rl,ml,xl,Rl,vl,sl,tl,wl,yl]);
     },[rl,ml,xl,Rl,vl,sl,tl,wl,yl]);break;
    default:
     ml.C([rl,ql],function(Al){
      var Bl=Al[0],Cl=Al[1];
      var Dl=$d(1,[rl,Cl],"sat");
      $r([Bl,Dl]);
     },[rl]);
    }
   },[rl,ql,ml,xl,vl,sl,tl,wl,yl]);
  },[ql,ml]);
 },[ml],"sat");
 $$GHCziIOziHandleziInternals_wantReadableHandle5.J(jl,kl,ll,ol,nl);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals_wantWritableHandle1=$f(4,function(Gn,Hn,In,Jn){
 $M(Hn,function(Kn){
  switch(Kn.g){
  case 1:
   var Ln=Kn.v[1];
   var Mn=$d(1,[Ln],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(Gn,Kn,Mn,In,Jn);break;
  case 2:
   var Nn=Kn.v[2];
   var On=$d(1,[Nn],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle2.J(Gn,Kn,On,In,Jn);break;
  }
 },[Gn,In,Jn]);
},[],"in `base:GHC.IO.Handle.Internals'");
var $$GHCziIOziHandleziInternals$d=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is not open for writing");
},"lvl3");
var $$GHCziIOziHandleziInternals$k=$T(function(){
 $$GHCziCString_unpackCStringzh.J("handle is finalized");
},"lvl8");
var $$GHCziIOziHandleziInternals$v=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl15");
var $$GHCziIOziHandleziInternals$w=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals_wantSeekableHandle5,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl16");
var $$GHCziIOziHandleziInternals$x=$D(1,function(){
 $r([$$DataziMaybe_Nothing,$$GHCziIOziException_IllegalOperation,$$GHCziTypes_ZMZN,$$GHCziIOziHandleziInternals$d,$$DataziMaybe_Nothing,$$DataziMaybe_Nothing]);
},"lvl17");

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
	 var L2=J2==K2?$$GHCziTypes_True:$$GHCziTypes_False;
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
	var a3=X2+1|0;
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
	var o3=j3+1|0;
	var p3=$hs_writeWideCharOffAddrzh(e3,o3,"\n",q3);
	var n3=$hs_touchzh(f3,p3);
	var m3=o3+1|0;
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
      var z2=w2+1|0;
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
var $$GHCziIOziHandleziText_zdwa6=$f(9,function(pd,qd,rd,sd,td,ud,vd,wd,xd){
 var yd=$d(1,[td,ud],"raw");
 var zd=$F(4,function(Ad,Bd,Cd,Dd){
  var lh=Ad+1|0;
  var Ed=lh>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(Ed.g){
  case 1:
   $M(Bd,function(Fd){
    var Gd=Fd.v[0];
    $M(Gd,function(Hd){
     switch(Hd.toString()){
     case "\n":
      var Md=$f(2,function(Nd,Od){
       $M(qd,function(Pd){
	switch(Pd.g){
	case 1:
	 var Qd=$f(3,function(Rd,Sd,Td){
	  $M(Sd,function(Ud){
	   switch(Ud.g){
	   case 1:
	    var Vd=$f(1,function(Wd){
	     $M(Wd,function(Xd){
	      var Yd=Xd.v[8],Zd=Xd.v[9];
	      var ae=$f(1,function(be){
	       $$GHCziIOziHandleziInternals_zdwa3.C([Xd,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Rd,be],function(ce){
		var de=ce[0];
		var ee=$hs_readMutVarzh(Yd,de);
		var fe=ee[0],ge=ee[1];
		$M(ge,function(he){
		 var ie=he.v[3];
		 var je=vd==ie?$$GHCziTypes_True:$$GHCziTypes_False;
		 switch(je.g){
		 case 1:
		  $r([fe,$$GHCziTuple_Z0T]);break;
		 case 2:
		  var ke=$hs_readMutVarzh(Zd,fe);
		  var le=ke[0],me=ke[1];
		  var ne=$d(2,[yd,me],"sat");
		  var oe=$hs_writeMutVarzh(Zd,ne,le);
		  $r([oe,$$GHCziTuple_Z0T]);break;
		 }
		},[yd,vd,fe,Zd]);
	       },[yd,vd,Yd,Zd]);
	      },[td,ud,yd,vd,Xd,Rd,Yd,Zd],"sat");
	      $A(ae);
	     },[td,ud,yd,vd,Rd]);
	    },[td,ud,yd,vd,Rd],"sat");
	    $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,Vd,Td);break;
	   case 2:
	    var pe=Ud.v[0],qe=Ud.v[1];
	    var Re=Rd+1|0;
	    var re=Re>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(re.g){
	    case 1:
	     $M(pe,function(se){
	      var te=se.v[0];
	      $M(te,function(ue){
	       switch(ue.toString()){
	       case "\n":
		$M(sd,function(ye){
		 switch(ye.g){
		 case 1:
		  var Be=$hs_writeWideCharOffAddrzh(td,Rd,"\n",Td);
		  var Ae=$hs_touchzh(ud,Be);
		  var ze=Rd+1|0;
		  Qd.J(ze,qe,Ae);break;
		 case 2:
		  var He=$hs_writeWideCharOffAddrzh(td,Rd,"\r",Td);
		  var Ge=$hs_touchzh(ud,He);
		  var Ee=Rd+1|0;
		  var Fe=$hs_writeWideCharOffAddrzh(td,Ee,"\n",Ge);
		  var De=$hs_touchzh(ud,Fe);
		  var Ce=Ee+1|0;
		  Qd.J(Ce,qe,De);break;
		 }
		},[td,ud,yd,vd,pd,Rd,Td,Qd,qe,sd]);break;
	       default:
		var xe=$hs_writeWideCharOffAddrzh(td,Rd,ue,Td);
		var we=$hs_touchzh(ud,xe);
		var ve=Rd+1|0;
		Qd.J(ve,qe,we);
	       }
	      },[td,ud,yd,vd,pd,Rd,Td,Qd,qe,sd]);
	     },[td,ud,yd,vd,pd,Rd,Td,Qd,qe,sd]);break;
	    case 2:
	     var Ie=$f(1,function(Je){
	      $M(Je,function(Ke){
	       var Le=$f(1,function(Me){
		$$GHCziIOziHandleziInternals_zdwa3.C([Ke,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Rd,Me],function(Ne){
		 var Oe=Ne[0];
		 $r([Oe,$$GHCziTuple_Z0T]);
		},[]);
	       },[td,ud,vd,Rd,Ke],"sat");
	       $A(Le);
	      },[td,ud,vd,Rd]);
	     },[td,ud,vd,Rd],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Ie,Td],function(Pe){
	      var Qe=Pe[0];
	      Qd.J(0,Ud,Qe);
	     },[td,ud,yd,vd,pd,Qd,sd,Ud]);break;
	    }break;
	   }
	  },[td,ud,yd,vd,pd,Rd,Td,Qd,sd]);
	 },[td,ud,yd,vd,pd,sd],"$s$wa4");
	 Qd.J(Od,Cd,Nd);break;
	case 2:
	 var Se=$f(1,function(Te){
	  $M(Te,function(Ue){
	   var Ve=Ue.v[1],We=Ue.v[3],Xe=Ue.v[5];
	   var Ye=$f(1,function(Ze){
	    $$GHCziIOziHandleziInternals_zdwa3.C([Ue,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Od,Ze],function(af){
	     var bf=af[0];
	     var cf=$hs_readMutVarzh(Xe,bf);
	     var df=cf[0],ef=cf[1];
	     $M(ef,function(ff){
	      var gf=ff.v[4],hf=ff.v[5];
	      var jf=gf==hf?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(jf.g){
	      case 1:
	       $$GHCziIOziBufferedIO_flushWriteBuffer.C([Ve,We,ff,df],function(kf){
		var lf=kf[0],mf=kf[1];
		var nf=$hs_writeMutVarzh(Xe,mf,lf);
		$r([nf,$$GHCziTuple_Z0T]);
	       },[Xe]);break;
	      case 2:
	       $r([df,$$GHCziTuple_Z0T]);break;
	      }
	     },[Xe,Ve,We,df]);
	    },[Xe,Ve,We]);
	   },[td,ud,vd,Od,Ue,Xe,Ve,We],"sat");
	   $A(Ye);
	  },[td,ud,vd,Od]);
	 },[td,ud,vd,Od],"sat");
	 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Se,Nd],function(of){
	  var pf=of[0];
	  var qf=$f(3,function(rf,sf,tf){
	   $M(sf,function(uf){
	    switch(uf.g){
	    case 1:
	     var vf=$f(1,function(wf){
	      $M(wf,function(xf){
	       var yf=xf.v[8],zf=xf.v[9];
	       var Af=$f(1,function(Bf){
		$$GHCziIOziHandleziInternals_zdwa3.C([xf,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,rf,Bf],function(Cf){
		 var Df=Cf[0];
		 var Ef=$hs_readMutVarzh(yf,Df);
		 var Ff=Ef[0],Gf=Ef[1];
		 $M(Gf,function(Hf){
		  var If=Hf.v[3];
		  var Jf=vd==If?$$GHCziTypes_True:$$GHCziTypes_False;
		  switch(Jf.g){
		  case 1:
		   $r([Ff,$$GHCziTuple_Z0T]);break;
		  case 2:
		   var Kf=$hs_readMutVarzh(zf,Ff);
		   var Lf=Kf[0],Mf=Kf[1];
		   var Nf=$d(2,[yd,Mf],"sat");
		   var Of=$hs_writeMutVarzh(zf,Nf,Lf);
		   $r([Of,$$GHCziTuple_Z0T]);break;
		  }
		 },[yd,vd,Ff,zf]);
		},[yd,vd,yf,zf]);
	       },[td,ud,yd,vd,xf,rf,yf,zf],"sat");
	       $A(Af);
	      },[td,ud,yd,vd,rf]);
	     },[td,ud,yd,vd,rf],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,vf,tf);break;
	    case 2:
	     var Pf=uf.v[0],Qf=uf.v[1];
	     var Rg=rf+1|0;
	     var Rf=Rg>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Rf.g){
	     case 1:
	      $M(Pf,function(Sf){
	       var Tf=Sf.v[0];
	       $M(Tf,function(Uf){
		switch(Uf.toString()){
		case "\n":
		 var Yf=$f(2,function(Zf,ag){
		  var bg=$f(1,function(cg){
		   $M(cg,function(dg){
		    var eg=dg.v[1],fg=dg.v[3],gg=dg.v[5];
		    var hg=$f(1,function(ig){
		     $$GHCziIOziHandleziInternals_zdwa3.C([dg,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,ag,ig],function(jg){
		      var kg=jg[0];
		      var lg=$hs_readMutVarzh(gg,kg);
		      var mg=lg[0],ng=lg[1];
		      $M(ng,function(og){
		       var pg=og.v[4],qg=og.v[5];
		       var rg=pg==qg?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(rg.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([eg,fg,og,mg],function(sg){
			 var tg=sg[0],ug=sg[1];
			 var vg=$hs_writeMutVarzh(gg,ug,tg);
			 $r([vg,$$GHCziTuple_Z0T]);
			},[gg]);break;
		       case 2:
			$r([mg,$$GHCziTuple_Z0T]);break;
		       }
		      },[gg,eg,fg,mg]);
		     },[gg,eg,fg]);
		    },[td,ud,vd,dg,ag,gg,eg,fg],"sat");
		    $A(hg);
		   },[td,ud,vd,ag]);
		  },[td,ud,vd,ag],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,bg,Zf],function(wg){
		   var xg=wg[0];
		   qf.J(0,Qf,xg);
		  },[td,ud,yd,vd,pd,sd,qf,Qf]);
		 },[td,ud,vd,pd,qf,Qf],"$w$j1");
		 $M(sd,function(yg){
		  switch(yg.g){
		  case 1:
		   var Bg=$hs_writeWideCharOffAddrzh(td,rf,"\n",tf);
		   var zg=$hs_touchzh(ud,Bg);
		   var Ag=rf+1|0;
		   Yf.J(zg,Ag);break;
		  case 2:
		   var Hg=$hs_writeWideCharOffAddrzh(td,rf,"\r",tf);
		   var Gg=$hs_touchzh(ud,Hg);
		   var Eg=rf+1|0;
		   var Fg=$hs_writeWideCharOffAddrzh(td,Eg,"\n",Gg);
		   var Cg=$hs_touchzh(ud,Fg);
		   var Dg=Eg+1|0;
		   Yf.J(Cg,Dg);break;
		  }
		 },[td,ud,yd,vd,pd,sd,rf,tf,qf,Qf,Yf]);break;
		default:
		 var Xf=$hs_writeWideCharOffAddrzh(td,rf,Uf,tf);
		 var Wf=$hs_touchzh(ud,Xf);
		 var Vf=rf+1|0;
		 qf.J(Vf,Qf,Wf);
		}
	       },[td,ud,yd,vd,pd,sd,rf,tf,qf,Qf]);
	      },[td,ud,yd,vd,pd,sd,rf,tf,qf,Qf]);break;
	     case 2:
	      var Ig=$f(1,function(Jg){
	       $M(Jg,function(Kg){
		var Lg=$f(1,function(Mg){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Kg,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,rf,Mg],function(Ng){
		  var Og=Ng[0];
		  $r([Og,$$GHCziTuple_Z0T]);
		 },[]);
		},[td,ud,vd,rf,Kg],"sat");
		$A(Lg);
	       },[td,ud,vd,rf]);
	      },[td,ud,vd,rf],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Ig,tf],function(Pg){
	       var Qg=Pg[0];
	       qf.J(0,uf,Qg);
	      },[td,ud,yd,vd,pd,sd,qf,uf]);break;
	     }break;
	    }
	   },[td,ud,yd,vd,pd,sd,rf,tf,qf]);
	  },[td,ud,yd,vd,pd,sd],"$s$wa4");
	  qf.J(0,Cd,pf);
	 },[td,ud,yd,vd,Cd,pd,sd]);break;
	}
       },[td,ud,yd,vd,Cd,pd,sd,Od,Nd]);
      },[td,ud,yd,vd,Cd,qd,pd,sd],"$w$j");
      $M(sd,function(Sg){
       switch(Sg.g){
       case 1:
	var Vg=$hs_writeWideCharOffAddrzh(td,Ad,"\n",Dd);
	var Tg=$hs_touchzh(ud,Vg);
	var Ug=Ad+1|0;
	Md.J(Tg,Ug);break;
       case 2:
	var bh=$hs_writeWideCharOffAddrzh(td,Ad,"\r",Dd);
	var ah=$hs_touchzh(ud,bh);
	var Yg=Ad+1|0;
	var Zg=$hs_writeWideCharOffAddrzh(td,Yg,"\n",ah);
	var Wg=$hs_touchzh(ud,Zg);
	var Xg=Yg+1|0;
	Md.J(Wg,Xg);break;
       }
      },[td,ud,yd,Ad,vd,Dd,Cd,qd,pd,sd,Md]);break;
     default:
      var Ld=$hs_writeWideCharOffAddrzh(td,Ad,Hd,Dd);
      var Kd=$hs_touchzh(ud,Ld);
      var Jd=Ad+1|0;
      Id.J(Jd,Cd,Kd);
     }
    },[td,ud,yd,Ad,vd,Dd,Id,Cd,qd,pd,sd]);
   },[td,ud,yd,Ad,vd,Dd,Id,Cd,qd,pd,sd]);break;
  case 2:
   var ch=$f(1,function(dh){
    $M(dh,function(eh){
     var fh=$f(1,function(gh){
      $$GHCziIOziHandleziInternals_zdwa3.C([eh,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Ad,gh],function(hh){
       var ih=hh[0];
       $r([ih,$$GHCziTuple_Z0T]);
      },[]);
     },[td,ud,Ad,vd,eh],"sat");
     $A(fh);
    },[td,ud,Ad,vd]);
   },[td,ud,Ad,vd],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,ch,Dd],function(jh){
    var kh=jh[0];
    zd.J(0,Bd,Cd,kh);
   },[td,ud,yd,vd,Bd,Cd,qd,pd,sd,zd]);break;
  }
 },"$s$wa2"),Id=$f(3,function(mh,nh,oh){
  $M(nh,function(ph){
   switch(ph.g){
   case 1:
    var qh=$f(1,function(rh){
     $M(rh,function(sh){
      var th=sh.v[8],uh=sh.v[9];
      var vh=$f(1,function(wh){
       $$GHCziIOziHandleziInternals_zdwa3.C([sh,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,mh,wh],function(xh){
	var yh=xh[0];
	var zh=$hs_readMutVarzh(th,yh);
	var Ah=zh[0],Bh=zh[1];
	$M(Bh,function(Ch){
	 var Dh=Ch.v[3];
	 var Eh=vd==Dh?$$GHCziTypes_True:$$GHCziTypes_False;
	 switch(Eh.g){
	 case 1:
	  $r([Ah,$$GHCziTuple_Z0T]);break;
	 case 2:
	  var Fh=$hs_readMutVarzh(uh,Ah);
	  var Gh=Fh[0],Hh=Fh[1];
	  var Ih=$d(2,[yd,Hh],"sat");
	  var Jh=$hs_writeMutVarzh(uh,Ih,Gh);
	  $r([Jh,$$GHCziTuple_Z0T]);break;
	 }
	},[yd,vd,Ah,uh]);
       },[yd,vd,th,uh]);
      },[td,ud,yd,vd,sh,mh,th,uh],"sat");
      $A(vh);
     },[td,ud,yd,vd,mh]);
    },[td,ud,yd,vd,mh],"sat");
    $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,qh,oh);break;
   case 2:
    var Kh=ph.v[0],Lh=ph.v[1];
    var rl=mh+1|0;
    var Mh=rl>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Mh.g){
    case 1:
     $M(Kh,function(Nh){
      var Oh=Nh.v[0];
      $M(Oh,function(Ph){
       switch(Ph.toString()){
       case "\n":
	var Th=$f(2,function(Uh,Vh){
	 $M(qd,function(Wh){
	  switch(Wh.g){
	  case 1:
	   var Xh=$f(3,function(Yh,Zh,ai){
	    $M(Zh,function(bi){
	     switch(bi.g){
	     case 1:
	      var ci=$f(1,function(di){
	       $M(di,function(ei){
		var fi=ei.v[8],gi=ei.v[9];
		var hi=$f(1,function(ii){
		 $$GHCziIOziHandleziInternals_zdwa3.C([ei,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Yh,ii],function(ji){
		  var ki=ji[0];
		  var li=$hs_readMutVarzh(fi,ki);
		  var mi=li[0],ni=li[1];
		  $M(ni,function(oi){
		   var pi=oi.v[3];
		   var qi=vd==pi?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(qi.g){
		   case 1:
		    $r([mi,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var ri=$hs_readMutVarzh(gi,mi);
		    var si=ri[0],ti=ri[1];
		    var ui=$d(2,[yd,ti],"sat");
		    var vi=$hs_writeMutVarzh(gi,ui,si);
		    $r([vi,$$GHCziTuple_Z0T]);break;
		   }
		  },[yd,vd,mi,gi]);
		 },[yd,vd,fi,gi]);
		},[td,ud,yd,vd,ei,Yh,fi,gi],"sat");
		$A(hi);
	       },[td,ud,yd,vd,Yh]);
	      },[td,ud,yd,vd,Yh],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,ci,ai);break;
	     case 2:
	      var wi=bi.v[0],xi=bi.v[1];
	      var Yi=Yh+1|0;
	      var yi=Yi>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(yi.g){
	      case 1:
	       $M(wi,function(zi){
		var Ai=zi.v[0];
		$M(Ai,function(Bi){
		 switch(Bi.toString()){
		 case "\n":
		  $M(sd,function(Fi){
		   switch(Fi.g){
		   case 1:
		    var Ii=$hs_writeWideCharOffAddrzh(td,Yh,"\n",ai);
		    var Hi=$hs_touchzh(ud,Ii);
		    var Gi=Yh+1|0;
		    Xh.J(Gi,xi,Hi);break;
		   case 2:
		    var Oi=$hs_writeWideCharOffAddrzh(td,Yh,"\r",ai);
		    var Ni=$hs_touchzh(ud,Oi);
		    var Li=Yh+1|0;
		    var Mi=$hs_writeWideCharOffAddrzh(td,Li,"\n",Ni);
		    var Ki=$hs_touchzh(ud,Mi);
		    var Ji=Li+1|0;
		    Xh.J(Ji,xi,Ki);break;
		   }
		  },[td,ud,yd,vd,pd,sd,Yh,ai,Xh,xi]);break;
		 default:
		  var Ei=$hs_writeWideCharOffAddrzh(td,Yh,Bi,ai);
		  var Di=$hs_touchzh(ud,Ei);
		  var Ci=Yh+1|0;
		  Xh.J(Ci,xi,Di);
		 }
		},[td,ud,yd,vd,pd,sd,Yh,ai,Xh,xi]);
	       },[td,ud,yd,vd,pd,sd,Yh,ai,Xh,xi]);break;
	      case 2:
	       var Pi=$f(1,function(Qi){
		$M(Qi,function(Ri){
		 var Si=$f(1,function(Ti){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Ri,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Yh,Ti],function(Ui){
		   var Vi=Ui[0];
		   $r([Vi,$$GHCziTuple_Z0T]);
		  },[]);
		 },[td,ud,vd,Yh,Ri],"sat");
		 $A(Si);
		},[td,ud,vd,Yh]);
	       },[td,ud,vd,Yh],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Pi,ai],function(Wi){
		var Xi=Wi[0];
		Xh.J(0,bi,Xi);
	       },[td,ud,yd,vd,pd,sd,Xh,bi]);break;
	      }break;
	     }
	    },[td,ud,yd,vd,pd,sd,Yh,ai,Xh]);
	   },[td,ud,yd,vd,pd,sd],"$s$wa4");
	   Xh.J(Vh,Lh,Uh);break;
	  case 2:
	   var Zi=$f(1,function(aj){
	    $M(aj,function(bj){
	     var cj=bj.v[1],dj=bj.v[3],ej=bj.v[5];
	     var fj=$f(1,function(gj){
	      $$GHCziIOziHandleziInternals_zdwa3.C([bj,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Vh,gj],function(hj){
	       var ij=hj[0];
	       var jj=$hs_readMutVarzh(ej,ij);
	       var kj=jj[0],lj=jj[1];
	       $M(lj,function(mj){
		var nj=mj.v[4],oj=mj.v[5];
		var pj=nj==oj?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(pj.g){
		case 1:
		 $$GHCziIOziBufferedIO_flushWriteBuffer.C([cj,dj,mj,kj],function(qj){
		  var rj=qj[0],sj=qj[1];
		  var tj=$hs_writeMutVarzh(ej,sj,rj);
		  $r([tj,$$GHCziTuple_Z0T]);
		 },[ej]);break;
		case 2:
		 $r([kj,$$GHCziTuple_Z0T]);break;
		}
	       },[ej,cj,dj,kj]);
	      },[ej,cj,dj]);
	     },[td,ud,vd,Vh,bj,ej,cj,dj],"sat");
	     $A(fj);
	    },[td,ud,vd,Vh]);
	   },[td,ud,vd,Vh],"sat");
	   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Zi,Uh],function(uj){
	    var vj=uj[0];
	    var wj=$f(3,function(xj,yj,zj){
	     $M(yj,function(Aj){
	      switch(Aj.g){
	      case 1:
	       var Bj=$f(1,function(Cj){
		$M(Cj,function(Dj){
		 var Ej=Dj.v[8],Fj=Dj.v[9];
		 var Gj=$f(1,function(Hj){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Dj,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,xj,Hj],function(Ij){
		   var Jj=Ij[0];
		   var Kj=$hs_readMutVarzh(Ej,Jj);
		   var Lj=Kj[0],Mj=Kj[1];
		   $M(Mj,function(Nj){
		    var Oj=Nj.v[3];
		    var Pj=vd==Oj?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Pj.g){
		    case 1:
		     $r([Lj,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var Qj=$hs_readMutVarzh(Fj,Lj);
		     var Rj=Qj[0],Sj=Qj[1];
		     var Tj=$d(2,[yd,Sj],"sat");
		     var Uj=$hs_writeMutVarzh(Fj,Tj,Rj);
		     $r([Uj,$$GHCziTuple_Z0T]);break;
		    }
		   },[yd,vd,Lj,Fj]);
		  },[yd,vd,Ej,Fj]);
		 },[td,ud,yd,vd,Dj,xj,Ej,Fj],"sat");
		 $A(Gj);
		},[td,ud,yd,vd,xj]);
	       },[td,ud,yd,vd,xj],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,Bj,zj);break;
	      case 2:
	       var Vj=Aj.v[0],Wj=Aj.v[1];
	       var Xk=xj+1|0;
	       var Xj=Xk>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(Xj.g){
	       case 1:
		$M(Vj,function(Yj){
		 var Zj=Yj.v[0];
		 $M(Zj,function(ak){
		  switch(ak.toString()){
		  case "\n":
		   var ek=$f(2,function(fk,gk){
		    var hk=$f(1,function(ik){
		     $M(ik,function(jk){
		      var kk=jk.v[1],lk=jk.v[3],mk=jk.v[5];
		      var nk=$f(1,function(ok){
		       $$GHCziIOziHandleziInternals_zdwa3.C([jk,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,gk,ok],function(pk){
			var qk=pk[0];
			var rk=$hs_readMutVarzh(mk,qk);
			var sk=rk[0],tk=rk[1];
			$M(tk,function(uk){
			 var vk=uk.v[4],wk=uk.v[5];
			 var xk=vk==wk?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(xk.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([kk,lk,uk,sk],function(yk){
			   var zk=yk[0],Ak=yk[1];
			   var Bk=$hs_writeMutVarzh(mk,Ak,zk);
			   $r([Bk,$$GHCziTuple_Z0T]);
			  },[mk]);break;
			 case 2:
			  $r([sk,$$GHCziTuple_Z0T]);break;
			 }
			},[mk,kk,lk,sk]);
		       },[mk,kk,lk]);
		      },[td,ud,vd,jk,gk,mk,kk,lk],"sat");
		      $A(nk);
		     },[td,ud,vd,gk]);
		    },[td,ud,vd,gk],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,hk,fk],function(Ck){
		     var Dk=Ck[0];
		     wj.J(0,Wj,Dk);
		    },[td,ud,yd,vd,pd,sd,wj,Wj]);
		   },[td,ud,vd,pd,wj,Wj],"$w$j1");
		   $M(sd,function(Ek){
		    switch(Ek.g){
		    case 1:
		     var Hk=$hs_writeWideCharOffAddrzh(td,xj,"\n",zj);
		     var Fk=$hs_touchzh(ud,Hk);
		     var Gk=xj+1|0;
		     ek.J(Fk,Gk);break;
		    case 2:
		     var Nk=$hs_writeWideCharOffAddrzh(td,xj,"\r",zj);
		     var Mk=$hs_touchzh(ud,Nk);
		     var Kk=xj+1|0;
		     var Lk=$hs_writeWideCharOffAddrzh(td,Kk,"\n",Mk);
		     var Ik=$hs_touchzh(ud,Lk);
		     var Jk=Kk+1|0;
		     ek.J(Ik,Jk);break;
		    }
		   },[td,ud,yd,vd,pd,sd,xj,zj,wj,Wj,ek]);break;
		  default:
		   var dk=$hs_writeWideCharOffAddrzh(td,xj,ak,zj);
		   var ck=$hs_touchzh(ud,dk);
		   var bk=xj+1|0;
		   wj.J(bk,Wj,ck);
		  }
		 },[td,ud,yd,vd,pd,sd,xj,zj,wj,Wj]);
		},[td,ud,yd,vd,pd,sd,xj,zj,wj,Wj]);break;
	       case 2:
		var Ok=$f(1,function(Pk){
		 $M(Pk,function(Qk){
		  var Rk=$f(1,function(Sk){
		   $$GHCziIOziHandleziInternals_zdwa3.C([Qk,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,xj,Sk],function(Tk){
		    var Uk=Tk[0];
		    $r([Uk,$$GHCziTuple_Z0T]);
		   },[]);
		  },[td,ud,vd,xj,Qk],"sat");
		  $A(Rk);
		 },[td,ud,vd,xj]);
		},[td,ud,vd,xj],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Ok,zj],function(Vk){
		 var Wk=Vk[0];
		 wj.J(0,Aj,Wk);
		},[td,ud,yd,vd,pd,sd,wj,Aj]);break;
	       }break;
	      }
	     },[td,ud,yd,vd,pd,sd,xj,zj,wj]);
	    },[td,ud,yd,vd,pd,sd],"$s$wa4");
	    wj.J(0,Lh,vj);
	   },[td,ud,yd,vd,pd,sd,Lh]);break;
	  }
	 },[td,ud,yd,vd,pd,sd,Lh,Vh,Uh]);
	},[td,ud,yd,vd,qd,pd,sd,Lh],"$w$j");
	$M(sd,function(Yk){
	 switch(Yk.g){
	 case 1:
	  var bl=$hs_writeWideCharOffAddrzh(td,mh,"\n",oh);
	  var Zk=$hs_touchzh(ud,bl);
	  var al=mh+1|0;
	  Th.J(Zk,al);break;
	 case 2:
	  var hl=$hs_writeWideCharOffAddrzh(td,mh,"\r",oh);
	  var gl=$hs_touchzh(ud,hl);
	  var el=mh+1|0;
	  var fl=$hs_writeWideCharOffAddrzh(td,el,"\n",gl);
	  var cl=$hs_touchzh(ud,fl);
	  var dl=el+1|0;
	  Th.J(cl,dl);break;
	 }
	},[td,ud,yd,vd,qd,pd,sd,mh,oh,Lh,Th]);break;
       default:
	var Sh=$hs_writeWideCharOffAddrzh(td,mh,Ph,oh);
	var Rh=$hs_touchzh(ud,Sh);
	var Qh=mh+1|0;
	Id.J(Qh,Lh,Rh);
       }
      },[td,ud,yd,vd,Id,qd,pd,sd,mh,oh,Lh]);
     },[td,ud,yd,vd,Id,qd,pd,sd,mh,oh,Lh]);break;
    case 2:
     var il=$f(1,function(jl){
      $M(jl,function(kl){
       var ll=$f(1,function(ml){
	$$GHCziIOziHandleziInternals_zdwa3.C([kl,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,mh,ml],function(nl){
	 var ol=nl[0];
	 $r([ol,$$GHCziTuple_Z0T]);
	},[]);
       },[td,ud,vd,mh,kl],"sat");
       $A(ll);
      },[td,ud,vd,mh]);
     },[td,ud,vd,mh],"sat");
     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,il,oh],function(pl){
      var ql=pl[0];
      zd.J(0,Kh,Lh,ql);
     },[td,ud,yd,vd,qd,pd,sd,zd,Kh,Lh]);break;
    }break;
   }
  },[td,ud,yd,vd,Id,qd,pd,sd,zd,mh,oh]);
 },[td,ud,yd,vd,qd,pd,sd,zd],"$s$wa3");
 $S(zd,[td,ud,yd,vd,Id,qd,pd,sd]);
 var sl=$F(5,function(tl,ul,vl,wl,xl){
  var kp=tl+1|0;
  var yl=kp>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
  switch(yl.g){
  case 1:
   $M(ul,function(zl){
    var Al=zl.v[0];
    $M(Al,function(Bl){
     switch(Bl.toString()){
     case "\n":
      var Gl=$f(2,function(Hl,Il){
       $M(qd,function(Jl){
	switch(Jl.g){
	case 1:
	 var Kl=$f(4,function(Ll,Ml,Nl,Ol){
	  $M(Ml,function(Pl){
	   switch(Pl.g){
	   case 1:
	    $M(Nl,function(Ql){
	     switch(Ql.g){
	     case 1:
	      var Rl=$f(1,function(Sl){
	       $M(Sl,function(Tl){
		var Ul=Tl.v[8],Vl=Tl.v[9];
		var Wl=$f(1,function(Xl){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Tl,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Ll,Xl],function(Yl){
		  var Zl=Yl[0];
		  var am=$hs_readMutVarzh(Ul,Zl);
		  var bm=am[0],cm=am[1];
		  $M(cm,function(dm){
		   var em=dm.v[3];
		   var fm=vd==em?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(fm.g){
		   case 1:
		    $r([bm,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var gm=$hs_readMutVarzh(Vl,bm);
		    var hm=gm[0],im=gm[1];
		    var jm=$d(2,[yd,im],"sat");
		    var km=$hs_writeMutVarzh(Vl,jm,hm);
		    $r([km,$$GHCziTuple_Z0T]);break;
		   }
		  },[yd,vd,bm,Vl]);
		 },[yd,vd,Ul,Vl]);
		},[td,ud,yd,vd,Tl,Ll,Ul,Vl],"sat");
		$A(Wl);
	       },[td,ud,yd,vd,Ll]);
	      },[td,ud,yd,vd,Ll],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,Rl,Ol);break;
	     case 2:
	      Kl.J(Ll,Ql,$$GHCziTypes_ZMZN,Ol);break;
	     }
	    },[td,ud,yd,vd,pd,sd,Ll,Ol,Kl]);break;
	   case 2:
	    var lm=Pl.v[0],mm=Pl.v[1];
	    var Nm=Ll+1|0;
	    var nm=Nm>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(nm.g){
	    case 1:
	     $M(lm,function(om){
	      var pm=om.v[0];
	      $M(pm,function(qm){
	       switch(qm.toString()){
	       case "\n":
		$M(sd,function(um){
		 switch(um.g){
		 case 1:
		  var xm=$hs_writeWideCharOffAddrzh(td,Ll,"\n",Ol);
		  var wm=$hs_touchzh(ud,xm);
		  var vm=Ll+1|0;
		  Kl.J(vm,mm,Nl,wm);break;
		 case 2:
		  var Dm=$hs_writeWideCharOffAddrzh(td,Ll,"\r",Ol);
		  var Cm=$hs_touchzh(ud,Dm);
		  var Am=Ll+1|0;
		  var Bm=$hs_writeWideCharOffAddrzh(td,Am,"\n",Cm);
		  var zm=$hs_touchzh(ud,Bm);
		  var ym=Am+1|0;
		  Kl.J(ym,mm,Nl,zm);break;
		 }
		},[td,ud,yd,vd,pd,sd,Nl,Ll,Ol,Kl,mm]);break;
	       default:
		var tm=$hs_writeWideCharOffAddrzh(td,Ll,qm,Ol);
		var sm=$hs_touchzh(ud,tm);
		var rm=Ll+1|0;
		Kl.J(rm,mm,Nl,sm);
	       }
	      },[td,ud,yd,vd,pd,sd,Nl,Ll,Ol,Kl,mm]);
	     },[td,ud,yd,vd,pd,sd,Nl,Ll,Ol,Kl,mm]);break;
	    case 2:
	     var Em=$f(1,function(Fm){
	      $M(Fm,function(Gm){
	       var Hm=$f(1,function(Im){
		$$GHCziIOziHandleziInternals_zdwa3.C([Gm,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Ll,Im],function(Jm){
		 var Km=Jm[0];
		 $r([Km,$$GHCziTuple_Z0T]);
		},[]);
	       },[td,ud,vd,Ll,Gm],"sat");
	       $A(Hm);
	      },[td,ud,vd,Ll]);
	     },[td,ud,vd,Ll],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Em,Ol],function(Lm){
	      var Mm=Lm[0];
	      Kl.J(0,Pl,Nl,Mm);
	     },[td,ud,yd,vd,pd,sd,Nl,Kl,Pl]);break;
	    }break;
	   }
	  },[td,ud,yd,vd,pd,sd,Nl,Ll,Ol,Kl]);
	 },[td,ud,yd,vd,pd,sd],"$wa9");
	 Kl.J(Il,vl,wl,Hl);break;
	case 2:
	 var Om=$f(1,function(Pm){
	  $M(Pm,function(Qm){
	   var Rm=Qm.v[1],Sm=Qm.v[3],Tm=Qm.v[5];
	   var Um=$f(1,function(Vm){
	    $$GHCziIOziHandleziInternals_zdwa3.C([Qm,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Il,Vm],function(Wm){
	     var Xm=Wm[0];
	     var Ym=$hs_readMutVarzh(Tm,Xm);
	     var Zm=Ym[0],an=Ym[1];
	     $M(an,function(bn){
	      var cn=bn.v[4],dn=bn.v[5];
	      var en=cn==dn?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(en.g){
	      case 1:
	       $$GHCziIOziBufferedIO_flushWriteBuffer.C([Rm,Sm,bn,Zm],function(fn){
		var gn=fn[0],hn=fn[1];
		var jn=$hs_writeMutVarzh(Tm,hn,gn);
		$r([jn,$$GHCziTuple_Z0T]);
	       },[Tm]);break;
	      case 2:
	       $r([Zm,$$GHCziTuple_Z0T]);break;
	      }
	     },[Tm,Rm,Sm,Zm]);
	    },[Tm,Rm,Sm]);
	   },[td,ud,vd,Il,Qm,Tm,Rm,Sm],"sat");
	   $A(Um);
	  },[td,ud,vd,Il]);
	 },[td,ud,vd,Il],"sat");
	 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Om,Hl],function(kn){
	  var ln=kn[0];
	  var mn=$f(4,function(nn,on,pn,qn){
	   $M(on,function(rn){
	    switch(rn.g){
	    case 1:
	     $M(pn,function(sn){
	      switch(sn.g){
	      case 1:
	       var tn=$f(1,function(un){
		$M(un,function(vn){
		 var wn=vn.v[8],xn=vn.v[9];
		 var yn=$f(1,function(zn){
		  $$GHCziIOziHandleziInternals_zdwa3.C([vn,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,nn,zn],function(An){
		   var Bn=An[0];
		   var Cn=$hs_readMutVarzh(wn,Bn);
		   var Dn=Cn[0],En=Cn[1];
		   $M(En,function(Fn){
		    var Gn=Fn.v[3];
		    var Hn=vd==Gn?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(Hn.g){
		    case 1:
		     $r([Dn,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var In=$hs_readMutVarzh(xn,Dn);
		     var Jn=In[0],Kn=In[1];
		     var Ln=$d(2,[yd,Kn],"sat");
		     var Mn=$hs_writeMutVarzh(xn,Ln,Jn);
		     $r([Mn,$$GHCziTuple_Z0T]);break;
		    }
		   },[yd,vd,Dn,xn]);
		  },[yd,vd,wn,xn]);
		 },[td,ud,yd,vd,vn,nn,wn,xn],"sat");
		 $A(yn);
		},[td,ud,yd,vd,nn]);
	       },[td,ud,yd,vd,nn],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,tn,qn);break;
	      case 2:
	       mn.J(nn,sn,$$GHCziTypes_ZMZN,qn);break;
	      }
	     },[td,ud,yd,vd,pd,sd,nn,qn,mn]);break;
	    case 2:
	     var Nn=rn.v[0],On=rn.v[1];
	     var Qo=nn+1|0;
	     var Pn=Qo>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Pn.g){
	     case 1:
	      $M(Nn,function(Qn){
	       var Rn=Qn.v[0];
	       $M(Rn,function(Sn){
		switch(Sn.toString()){
		case "\n":
		 var Wn=$f(2,function(Xn,Yn){
		  var Zn=$f(1,function(ao){
		   $M(ao,function(bo){
		    var co=bo.v[1],eo=bo.v[3],fo=bo.v[5];
		    var go=$f(1,function(ho){
		     $$GHCziIOziHandleziInternals_zdwa3.C([bo,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Yn,ho],function(io){
		      var jo=io[0];
		      var ko=$hs_readMutVarzh(fo,jo);
		      var lo=ko[0],mo=ko[1];
		      $M(mo,function(no){
		       var oo=no.v[4],po=no.v[5];
		       var qo=oo==po?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(qo.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([co,eo,no,lo],function(ro){
			 var so=ro[0],to=ro[1];
			 var uo=$hs_writeMutVarzh(fo,to,so);
			 $r([uo,$$GHCziTuple_Z0T]);
			},[fo]);break;
		       case 2:
			$r([lo,$$GHCziTuple_Z0T]);break;
		       }
		      },[fo,co,eo,lo]);
		     },[fo,co,eo]);
		    },[td,ud,vd,bo,Yn,fo,co,eo],"sat");
		    $A(go);
		   },[td,ud,vd,Yn]);
		  },[td,ud,vd,Yn],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Zn,Xn],function(vo){
		   var wo=vo[0];
		   mn.J(0,On,pn,wo);
		  },[td,ud,yd,vd,pd,sd,pn,mn,On]);
		 },[td,ud,vd,pd,pn,mn,On],"$w$j1");
		 $M(sd,function(xo){
		  switch(xo.g){
		  case 1:
		   var Ao=$hs_writeWideCharOffAddrzh(td,nn,"\n",qn);
		   var yo=$hs_touchzh(ud,Ao);
		   var zo=nn+1|0;
		   Wn.J(yo,zo);break;
		  case 2:
		   var Go=$hs_writeWideCharOffAddrzh(td,nn,"\r",qn);
		   var Fo=$hs_touchzh(ud,Go);
		   var Do=nn+1|0;
		   var Eo=$hs_writeWideCharOffAddrzh(td,Do,"\n",Fo);
		   var Bo=$hs_touchzh(ud,Eo);
		   var Co=Do+1|0;
		   Wn.J(Bo,Co);break;
		  }
		 },[td,ud,yd,vd,pd,sd,pn,nn,qn,mn,On,Wn]);break;
		default:
		 var Vn=$hs_writeWideCharOffAddrzh(td,nn,Sn,qn);
		 var Un=$hs_touchzh(ud,Vn);
		 var Tn=nn+1|0;
		 mn.J(Tn,On,pn,Un);
		}
	       },[td,ud,yd,vd,pd,sd,pn,nn,qn,mn,On]);
	      },[td,ud,yd,vd,pd,sd,pn,nn,qn,mn,On]);break;
	     case 2:
	      var Ho=$f(1,function(Io){
	       $M(Io,function(Jo){
		var Ko=$f(1,function(Lo){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Jo,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,nn,Lo],function(Mo){
		  var No=Mo[0];
		  $r([No,$$GHCziTuple_Z0T]);
		 },[]);
		},[td,ud,vd,nn,Jo],"sat");
		$A(Ko);
	       },[td,ud,vd,nn]);
	      },[td,ud,vd,nn],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Ho,qn],function(Oo){
	       var Po=Oo[0];
	       mn.J(0,rn,pn,Po);
	      },[td,ud,yd,vd,pd,sd,pn,mn,rn]);break;
	     }break;
	    }
	   },[td,ud,yd,vd,pd,sd,pn,nn,qn,mn]);
	  },[td,ud,yd,vd,pd,sd],"$wa9");
	  mn.J(0,vl,wl,ln);
	 },[td,ud,yd,vd,pd,sd,vl,wl]);break;
	}
       },[td,ud,yd,vd,pd,sd,vl,wl,Il,Hl]);
      },[td,ud,yd,vd,qd,pd,sd,vl,wl],"$w$j");
      $M(sd,function(Ro){
       switch(Ro.g){
       case 1:
	var Uo=$hs_writeWideCharOffAddrzh(td,tl,"\n",xl);
	var So=$hs_touchzh(ud,Uo);
	var To=tl+1|0;
	Gl.J(So,To);break;
       case 2:
	var ap=$hs_writeWideCharOffAddrzh(td,tl,"\r",xl);
	var Zo=$hs_touchzh(ud,ap);
	var Xo=tl+1|0;
	var Yo=$hs_writeWideCharOffAddrzh(td,Xo,"\n",Zo);
	var Vo=$hs_touchzh(ud,Yo);
	var Wo=Xo+1|0;
	Gl.J(Vo,Wo);break;
       }
      },[td,ud,yd,vd,qd,pd,sd,tl,xl,vl,wl,Gl]);break;
     default:
      var Fl=$hs_writeWideCharOffAddrzh(td,tl,Bl,xl);
      var El=$hs_touchzh(ud,Fl);
      var Dl=tl+1|0;
      Cl.J(Dl,vl,wl,El);
     }
    },[td,ud,yd,vd,qd,pd,sd,zd,tl,xl,Cl,vl,wl]);
   },[td,ud,yd,vd,qd,pd,sd,zd,tl,xl,Cl,vl,wl]);break;
  case 2:
   var bp=$f(1,function(cp){
    $M(cp,function(dp){
     var ep=$f(1,function(fp){
      $$GHCziIOziHandleziInternals_zdwa3.C([dp,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,tl,fp],function(gp){
       var hp=gp[0];
       $r([hp,$$GHCziTuple_Z0T]);
      },[]);
     },[td,ud,vd,tl,dp],"sat");
     $A(ep);
    },[td,ud,vd,tl]);
   },[td,ud,vd,tl],"sat");
   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,bp,xl],function(ip){
    var jp=ip[0];
    sl.J(0,ul,vl,wl,jp);
   },[td,ud,yd,vd,qd,pd,sd,zd,ul,vl,wl,sl]);break;
  }
 },"$s$wa4"),Cl=$f(4,function(lp,mp,np,op){
  $M(mp,function(pp){
   switch(pp.g){
   case 1:
    $M(np,function(qp){
     switch(qp.g){
     case 1:
      var rp=$f(1,function(sp){
       $M(sp,function(tp){
	var up=tp.v[8],vp=tp.v[9];
	var wp=$f(1,function(xp){
	 $$GHCziIOziHandleziInternals_zdwa3.C([tp,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,lp,xp],function(yp){
	  var zp=yp[0];
	  var Ap=$hs_readMutVarzh(up,zp);
	  var Bp=Ap[0],Cp=Ap[1];
	  $M(Cp,function(Dp){
	   var Ep=Dp.v[3];
	   var Fp=vd==Ep?$$GHCziTypes_True:$$GHCziTypes_False;
	   switch(Fp.g){
	   case 1:
	    $r([Bp,$$GHCziTuple_Z0T]);break;
	   case 2:
	    var Gp=$hs_readMutVarzh(vp,Bp);
	    var Hp=Gp[0],Ip=Gp[1];
	    var Jp=$d(2,[yd,Ip],"sat");
	    var Kp=$hs_writeMutVarzh(vp,Jp,Hp);
	    $r([Kp,$$GHCziTuple_Z0T]);break;
	   }
	  },[yd,vd,Bp,vp]);
	 },[yd,vd,up,vp]);
	},[td,ud,yd,vd,tp,lp,up,vp],"sat");
	$A(wp);
       },[td,ud,yd,vd,lp]);
      },[td,ud,yd,vd,lp],"sat");
      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,rp,op);break;
     case 2:
      var Lp=qp.v[0],Mp=qp.v[1];
      zd.J(lp,Lp,Mp,op);break;
     }
    },[td,ud,yd,vd,qd,pd,sd,zd,lp,op]);break;
   case 2:
    var Np=pp.v[0],Op=pp.v[1];
    var Gz=lp+1|0;
    var Pp=Gz>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
    switch(Pp.g){
    case 1:
     $M(Np,function(Qp){
      var Rp=Qp.v[0];
      $M(Rp,function(Sp){
       switch(Sp.toString()){
       case "\n":
	var Wp=$f(2,function(Xp,Yp){
	 $M(qd,function(Zp){
	  switch(Zp.g){
	  case 1:
	   var aq=$F(4,function(bq,cq,dq,eq){
	    var Gq=bq+1|0;
	    var fq=Gq>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(fq.g){
	    case 1:
	     $M(cq,function(gq){
	      var hq=gq.v[0];
	      $M(hq,function(iq){
	       switch(iq.toString()){
	       case "\n":
		$M(sd,function(nq){
		 switch(nq.g){
		 case 1:
		  var qq=$hs_writeWideCharOffAddrzh(td,bq,"\n",eq);
		  var pq=$hs_touchzh(ud,qq);
		  var oq=bq+1|0;
		  jq.J(oq,dq,pq);break;
		 case 2:
		  var wq=$hs_writeWideCharOffAddrzh(td,bq,"\r",eq);
		  var vq=$hs_touchzh(ud,wq);
		  var tq=bq+1|0;
		  var uq=$hs_writeWideCharOffAddrzh(td,tq,"\n",vq);
		  var sq=$hs_touchzh(ud,uq);
		  var rq=tq+1|0;
		  jq.J(rq,dq,sq);break;
		 }
		},[td,ud,yd,vd,pd,sd,bq,eq,jq,dq]);break;
	       default:
		var mq=$hs_writeWideCharOffAddrzh(td,bq,iq,eq);
		var lq=$hs_touchzh(ud,mq);
		var kq=bq+1|0;
		jq.J(kq,dq,lq);
	       }
	      },[td,ud,yd,vd,pd,sd,bq,eq,jq,dq]);
	     },[td,ud,yd,vd,pd,sd,bq,eq,jq,dq]);break;
	    case 2:
	     var xq=$f(1,function(yq){
	      $M(yq,function(zq){
	       var Aq=$f(1,function(Bq){
		$$GHCziIOziHandleziInternals_zdwa3.C([zq,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,bq,Bq],function(Cq){
		 var Dq=Cq[0];
		 $r([Dq,$$GHCziTuple_Z0T]);
		},[]);
	       },[td,ud,vd,bq,zq],"sat");
	       $A(Aq);
	      },[td,ud,vd,bq]);
	     },[td,ud,vd,bq],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,xq,eq],function(Eq){
	      var Fq=Eq[0];
	      aq.J(0,cq,dq,Fq);
	     },[td,ud,yd,vd,pd,sd,cq,dq,aq]);break;
	    }
	   },"$s$wa5"),jq=$f(3,function(Hq,Iq,Jq){
	    $M(Iq,function(Kq){
	     switch(Kq.g){
	     case 1:
	      var Lq=$f(1,function(Mq){
	       $M(Mq,function(Nq){
		var Oq=Nq.v[8],Pq=Nq.v[9];
		var Qq=$f(1,function(Rq){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Nq,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Hq,Rq],function(Sq){
		  var Tq=Sq[0];
		  var Uq=$hs_readMutVarzh(Oq,Tq);
		  var Vq=Uq[0],Wq=Uq[1];
		  $M(Wq,function(Xq){
		   var Yq=Xq.v[3];
		   var Zq=vd==Yq?$$GHCziTypes_True:$$GHCziTypes_False;
		   switch(Zq.g){
		   case 1:
		    $r([Vq,$$GHCziTuple_Z0T]);break;
		   case 2:
		    var ar=$hs_readMutVarzh(Pq,Vq);
		    var br=ar[0],cr=ar[1];
		    var dr=$d(2,[yd,cr],"sat");
		    var er=$hs_writeMutVarzh(Pq,dr,br);
		    $r([er,$$GHCziTuple_Z0T]);break;
		   }
		  },[yd,vd,Vq,Pq]);
		 },[yd,vd,Oq,Pq]);
		},[td,ud,yd,vd,Nq,Hq,Oq,Pq],"sat");
		$A(Qq);
	       },[td,ud,yd,vd,Hq]);
	      },[td,ud,yd,vd,Hq],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,Lq,Jq);break;
	     case 2:
	      var fr=Kq.v[0],gr=Kq.v[1];
	      var Hr=Hq+1|0;
	      var hr=Hr>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(hr.g){
	      case 1:
	       $M(fr,function(ir){
		var jr=ir.v[0];
		$M(jr,function(kr){
		 switch(kr.toString()){
		 case "\n":
		  $M(sd,function(or){
		   switch(or.g){
		   case 1:
		    var rr=$hs_writeWideCharOffAddrzh(td,Hq,"\n",Jq);
		    var qr=$hs_touchzh(ud,rr);
		    var pr=Hq+1|0;
		    jq.J(pr,gr,qr);break;
		   case 2:
		    var xr=$hs_writeWideCharOffAddrzh(td,Hq,"\r",Jq);
		    var wr=$hs_touchzh(ud,xr);
		    var ur=Hq+1|0;
		    var vr=$hs_writeWideCharOffAddrzh(td,ur,"\n",wr);
		    var tr=$hs_touchzh(ud,vr);
		    var sr=ur+1|0;
		    jq.J(sr,gr,tr);break;
		   }
		  },[td,ud,yd,vd,pd,sd,jq,Hq,Jq,gr]);break;
		 default:
		  var nr=$hs_writeWideCharOffAddrzh(td,Hq,kr,Jq);
		  var mr=$hs_touchzh(ud,nr);
		  var lr=Hq+1|0;
		  jq.J(lr,gr,mr);
		 }
		},[td,ud,yd,vd,pd,sd,jq,Hq,Jq,gr]);
	       },[td,ud,yd,vd,pd,sd,jq,Hq,Jq,gr]);break;
	      case 2:
	       var yr=$f(1,function(zr){
		$M(zr,function(Ar){
		 var Br=$f(1,function(Cr){
		  $$GHCziIOziHandleziInternals_zdwa3.C([Ar,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Hq,Cr],function(Dr){
		   var Er=Dr[0];
		   $r([Er,$$GHCziTuple_Z0T]);
		  },[]);
		 },[td,ud,vd,Hq,Ar],"sat");
		 $A(Br);
		},[td,ud,vd,Hq]);
	       },[td,ud,vd,Hq],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,yr,Jq],function(Fr){
		var Gr=Fr[0];
		aq.J(0,fr,gr,Gr);
	       },[td,ud,yd,vd,pd,sd,aq,fr,gr]);break;
	      }break;
	     }
	    },[td,ud,yd,vd,pd,sd,jq,aq,Hq,Jq]);
	   },[td,ud,yd,vd,pd,sd,aq],"$s$wa6");
	   $S(aq,[td,ud,vd,pd,sd,jq]);
	   var Ir=$F(5,function(Jr,Kr,Lr,Mr,Nr){
	    var ps=Jr+1|0;
	    var Or=ps>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	    switch(Or.g){
	    case 1:
	     $M(Kr,function(Pr){
	      var Qr=Pr.v[0];
	      $M(Qr,function(Rr){
	       switch(Rr.toString()){
	       case "\n":
		$M(sd,function(Wr){
		 switch(Wr.g){
		 case 1:
		  var Zr=$hs_writeWideCharOffAddrzh(td,Jr,"\n",Nr);
		  var Yr=$hs_touchzh(ud,Zr);
		  var Xr=Jr+1|0;
		  Sr.J(Xr,Lr,Mr,Yr);break;
		 case 2:
		  var fs=$hs_writeWideCharOffAddrzh(td,Jr,"\r",Nr);
		  var es=$hs_touchzh(ud,fs);
		  var cs=Jr+1|0;
		  var ds=$hs_writeWideCharOffAddrzh(td,cs,"\n",es);
		  var bs=$hs_touchzh(ud,ds);
		  var as=cs+1|0;
		  Sr.J(as,Lr,Mr,bs);break;
		 }
		},[td,ud,yd,vd,pd,sd,aq,Jr,Nr,Sr,Lr,Mr]);break;
	       default:
		var Vr=$hs_writeWideCharOffAddrzh(td,Jr,Rr,Nr);
		var Ur=$hs_touchzh(ud,Vr);
		var Tr=Jr+1|0;
		Sr.J(Tr,Lr,Mr,Ur);
	       }
	      },[td,ud,yd,vd,pd,sd,aq,Jr,Nr,Sr,Lr,Mr]);
	     },[td,ud,yd,vd,pd,sd,aq,Jr,Nr,Sr,Lr,Mr]);break;
	    case 2:
	     var gs=$f(1,function(hs){
	      $M(hs,function(is){
	       var js=$f(1,function(ks){
		$$GHCziIOziHandleziInternals_zdwa3.C([is,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Jr,ks],function(ls){
		 var ms=ls[0];
		 $r([ms,$$GHCziTuple_Z0T]);
		},[]);
	       },[td,ud,vd,Jr,is],"sat");
	       $A(js);
	      },[td,ud,vd,Jr]);
	     },[td,ud,vd,Jr],"sat");
	     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,gs,Nr],function(ns){
	      var os=ns[0];
	      Ir.J(0,Kr,Lr,Mr,os);
	     },[td,ud,yd,vd,pd,sd,aq,Kr,Lr,Mr,Ir]);break;
	    }
	   },"$s$wa7"),Sr=$f(4,function(qs,rs,ss,ts){
	    $M(rs,function(us){
	     switch(us.g){
	     case 1:
	      $M(ss,function(vs){
	       switch(vs.g){
	       case 1:
		var ws=$f(1,function(xs){
		 $M(xs,function(ys){
		  var zs=ys.v[8],As=ys.v[9];
		  var Bs=$f(1,function(Cs){
		   $$GHCziIOziHandleziInternals_zdwa3.C([ys,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,qs,Cs],function(Ds){
		    var Es=Ds[0];
		    var Fs=$hs_readMutVarzh(zs,Es);
		    var Gs=Fs[0],Hs=Fs[1];
		    $M(Hs,function(Is){
		     var Js=Is.v[3];
		     var Ks=vd==Js?$$GHCziTypes_True:$$GHCziTypes_False;
		     switch(Ks.g){
		     case 1:
		      $r([Gs,$$GHCziTuple_Z0T]);break;
		     case 2:
		      var Ls=$hs_readMutVarzh(As,Gs);
		      var Ms=Ls[0],Ns=Ls[1];
		      var Os=$d(2,[yd,Ns],"sat");
		      var Ps=$hs_writeMutVarzh(As,Os,Ms);
		      $r([Ps,$$GHCziTuple_Z0T]);break;
		     }
		    },[yd,vd,Gs,As]);
		   },[yd,vd,zs,As]);
		  },[td,ud,yd,vd,ys,qs,zs,As],"sat");
		  $A(Bs);
		 },[td,ud,yd,vd,qs]);
		},[td,ud,yd,vd,qs],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,ws,ts);break;
	       case 2:
		var Qs=vs.v[0],Rs=vs.v[1];
		aq.J(qs,Qs,Rs,ts);break;
	       }
	      },[td,ud,yd,vd,pd,sd,aq,qs,ts]);break;
	     case 2:
	      var Ss=us.v[0],Ts=us.v[1];
	      var ut=qs+1|0;
	      var Us=ut>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	      switch(Us.g){
	      case 1:
	       $M(Ss,function(Vs){
		var Ws=Vs.v[0];
		$M(Ws,function(Xs){
		 switch(Xs.toString()){
		 case "\n":
		  $M(sd,function(bt){
		   switch(bt.g){
		   case 1:
		    var et=$hs_writeWideCharOffAddrzh(td,qs,"\n",ts);
		    var dt=$hs_touchzh(ud,et);
		    var ct=qs+1|0;
		    Sr.J(ct,Ts,ss,dt);break;
		   case 2:
		    var kt=$hs_writeWideCharOffAddrzh(td,qs,"\r",ts);
		    var jt=$hs_touchzh(ud,kt);
		    var ht=qs+1|0;
		    var it=$hs_writeWideCharOffAddrzh(td,ht,"\n",jt);
		    var gt=$hs_touchzh(ud,it);
		    var ft=ht+1|0;
		    Sr.J(ft,Ts,ss,gt);break;
		   }
		  },[td,ud,yd,vd,pd,sd,aq,Sr,ss,qs,ts,Ts]);break;
		 default:
		  var at=$hs_writeWideCharOffAddrzh(td,qs,Xs,ts);
		  var Zs=$hs_touchzh(ud,at);
		  var Ys=qs+1|0;
		  Sr.J(Ys,Ts,ss,Zs);
		 }
		},[td,ud,yd,vd,pd,sd,aq,Sr,ss,qs,ts,Ts]);
	       },[td,ud,yd,vd,pd,sd,aq,Sr,ss,qs,ts,Ts]);break;
	      case 2:
	       var lt=$f(1,function(mt){
		$M(mt,function(nt){
		 var ot=$f(1,function(pt){
		  $$GHCziIOziHandleziInternals_zdwa3.C([nt,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,qs,pt],function(qt){
		   var rt=qt[0];
		   $r([rt,$$GHCziTuple_Z0T]);
		  },[]);
		 },[td,ud,vd,qs,nt],"sat");
		 $A(ot);
		},[td,ud,vd,qs]);
	       },[td,ud,vd,qs],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,lt,ts],function(st){
		var tt=st[0];
		Ir.J(0,Ss,Ts,ss,tt);
	       },[td,ud,yd,vd,pd,sd,aq,Ir,ss,Ss,Ts]);break;
	      }break;
	     }
	    },[td,ud,yd,vd,pd,sd,aq,Sr,Ir,ss,qs,ts]);
	   },[td,ud,yd,vd,pd,sd,aq,Ir],"$wa9");
	   $S(Ir,[td,ud,vd,pd,sd,Sr]);
	   Sr.J(Yp,Op,np,Xp);break;
	  case 2:
	   var vt=$f(1,function(wt){
	    $M(wt,function(xt){
	     var yt=xt.v[1],zt=xt.v[3],At=xt.v[5];
	     var Bt=$f(1,function(Ct){
	      $$GHCziIOziHandleziInternals_zdwa3.C([xt,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Yp,Ct],function(Dt){
	       var Et=Dt[0];
	       var Ft=$hs_readMutVarzh(At,Et);
	       var Gt=Ft[0],Ht=Ft[1];
	       $M(Ht,function(It){
		var Jt=It.v[4],Kt=It.v[5];
		var Lt=Jt==Kt?$$GHCziTypes_True:$$GHCziTypes_False;
		switch(Lt.g){
		case 1:
		 $$GHCziIOziBufferedIO_flushWriteBuffer.C([yt,zt,It,Gt],function(Mt){
		  var Nt=Mt[0],Ot=Mt[1];
		  var Pt=$hs_writeMutVarzh(At,Ot,Nt);
		  $r([Pt,$$GHCziTuple_Z0T]);
		 },[At]);break;
		case 2:
		 $r([Gt,$$GHCziTuple_Z0T]);break;
		}
	       },[At,yt,zt,Gt]);
	      },[At,yt,zt]);
	     },[td,ud,vd,Yp,xt,At,yt,zt],"sat");
	     $A(Bt);
	    },[td,ud,vd,Yp]);
	   },[td,ud,vd,Yp],"sat");
	   $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,vt,Xp],function(Qt){
	    var Rt=Qt[0];
	    var St=$F(4,function(Tt,Ut,Vt,Wt){
	     var Yu=Tt+1|0;
	     var Xt=Yu>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Xt.g){
	     case 1:
	      $M(Ut,function(Yt){
	       var Zt=Yt.v[0];
	       $M(Zt,function(au){
		switch(au.toString()){
		case "\n":
		 var fu=$f(2,function(gu,hu){
		  var iu=$f(1,function(ju){
		   $M(ju,function(ku){
		    var lu=ku.v[1],mu=ku.v[3],nu=ku.v[5];
		    var ou=$f(1,function(pu){
		     $$GHCziIOziHandleziInternals_zdwa3.C([ku,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,hu,pu],function(qu){
		      var ru=qu[0];
		      var su=$hs_readMutVarzh(nu,ru);
		      var tu=su[0],uu=su[1];
		      $M(uu,function(vu){
		       var wu=vu.v[4],xu=vu.v[5];
		       var yu=wu==xu?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(yu.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([lu,mu,vu,tu],function(zu){
			 var Au=zu[0],Bu=zu[1];
			 var Cu=$hs_writeMutVarzh(nu,Bu,Au);
			 $r([Cu,$$GHCziTuple_Z0T]);
			},[nu]);break;
		       case 2:
			$r([tu,$$GHCziTuple_Z0T]);break;
		       }
		      },[nu,lu,mu,tu]);
		     },[nu,lu,mu]);
		    },[td,ud,vd,ku,hu,nu,lu,mu],"sat");
		    $A(ou);
		   },[td,ud,vd,hu]);
		  },[td,ud,vd,hu],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,iu,gu],function(Du){
		   var Eu=Du[0];
		   bu.J(0,Vt,Eu);
		  },[td,ud,yd,vd,pd,sd,bu,Vt]);
		 },[td,ud,vd,pd,bu,Vt],"$w$j1");
		 $M(sd,function(Fu){
		  switch(Fu.g){
		  case 1:
		   var Iu=$hs_writeWideCharOffAddrzh(td,Tt,"\n",Wt);
		   var Gu=$hs_touchzh(ud,Iu);
		   var Hu=Tt+1|0;
		   fu.J(Gu,Hu);break;
		  case 2:
		   var Ou=$hs_writeWideCharOffAddrzh(td,Tt,"\r",Wt);
		   var Nu=$hs_touchzh(ud,Ou);
		   var Lu=Tt+1|0;
		   var Mu=$hs_writeWideCharOffAddrzh(td,Lu,"\n",Nu);
		   var Ju=$hs_touchzh(ud,Mu);
		   var Ku=Lu+1|0;
		   fu.J(Ju,Ku);break;
		  }
		 },[td,ud,yd,vd,pd,sd,Tt,Wt,bu,Vt,fu]);break;
		default:
		 var eu=$hs_writeWideCharOffAddrzh(td,Tt,au,Wt);
		 var du=$hs_touchzh(ud,eu);
		 var cu=Tt+1|0;
		 bu.J(cu,Vt,du);
		}
	       },[td,ud,yd,vd,pd,sd,Tt,Wt,bu,Vt]);
	      },[td,ud,yd,vd,pd,sd,Tt,Wt,bu,Vt]);break;
	     case 2:
	      var Pu=$f(1,function(Qu){
	       $M(Qu,function(Ru){
		var Su=$f(1,function(Tu){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Ru,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Tt,Tu],function(Uu){
		  var Vu=Uu[0];
		  $r([Vu,$$GHCziTuple_Z0T]);
		 },[]);
		},[td,ud,vd,Tt,Ru],"sat");
		$A(Su);
	       },[td,ud,vd,Tt]);
	      },[td,ud,vd,Tt],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Pu,Wt],function(Wu){
	       var Xu=Wu[0];
	       St.J(0,Ut,Vt,Xu);
	      },[td,ud,yd,vd,pd,sd,Ut,Vt,St]);break;
	     }
	    },"$s$wa5"),bu=$f(3,function(Zu,av,bv){
	     $M(av,function(cv){
	      switch(cv.g){
	      case 1:
	       var dv=$f(1,function(ev){
		$M(ev,function(fv){
		 var gv=fv.v[8],hv=fv.v[9];
		 var iv=$f(1,function(jv){
		  $$GHCziIOziHandleziInternals_zdwa3.C([fv,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Zu,jv],function(kv){
		   var lv=kv[0];
		   var mv=$hs_readMutVarzh(gv,lv);
		   var nv=mv[0],ov=mv[1];
		   $M(ov,function(pv){
		    var qv=pv.v[3];
		    var rv=vd==qv?$$GHCziTypes_True:$$GHCziTypes_False;
		    switch(rv.g){
		    case 1:
		     $r([nv,$$GHCziTuple_Z0T]);break;
		    case 2:
		     var sv=$hs_readMutVarzh(hv,nv);
		     var tv=sv[0],uv=sv[1];
		     var vv=$d(2,[yd,uv],"sat");
		     var wv=$hs_writeMutVarzh(hv,vv,tv);
		     $r([wv,$$GHCziTuple_Z0T]);break;
		    }
		   },[yd,vd,nv,hv]);
		  },[yd,vd,gv,hv]);
		 },[td,ud,yd,vd,fv,Zu,gv,hv],"sat");
		 $A(iv);
		},[td,ud,yd,vd,Zu]);
	       },[td,ud,yd,vd,Zu],"sat");
	       $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,dv,bv);break;
	      case 2:
	       var xv=cv.v[0],yv=cv.v[1];
	       var zw=Zu+1|0;
	       var zv=zw>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(zv.g){
	       case 1:
		$M(xv,function(Av){
		 var Bv=Av.v[0];
		 $M(Bv,function(Cv){
		  switch(Cv.toString()){
		  case "\n":
		   var Gv=$f(2,function(Hv,Iv){
		    var Jv=$f(1,function(Kv){
		     $M(Kv,function(Lv){
		      var Mv=Lv.v[1],Nv=Lv.v[3],Ov=Lv.v[5];
		      var Pv=$f(1,function(Qv){
		       $$GHCziIOziHandleziInternals_zdwa3.C([Lv,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Iv,Qv],function(Rv){
			var Sv=Rv[0];
			var Tv=$hs_readMutVarzh(Ov,Sv);
			var Uv=Tv[0],Vv=Tv[1];
			$M(Vv,function(Wv){
			 var Xv=Wv.v[4],Yv=Wv.v[5];
			 var Zv=Xv==Yv?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(Zv.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([Mv,Nv,Wv,Uv],function(aw){
			   var bw=aw[0],cw=aw[1];
			   var dw=$hs_writeMutVarzh(Ov,cw,bw);
			   $r([dw,$$GHCziTuple_Z0T]);
			  },[Ov]);break;
			 case 2:
			  $r([Uv,$$GHCziTuple_Z0T]);break;
			 }
			},[Ov,Mv,Nv,Uv]);
		       },[Ov,Mv,Nv]);
		      },[td,ud,vd,Lv,Iv,Ov,Mv,Nv],"sat");
		      $A(Pv);
		     },[td,ud,vd,Iv]);
		    },[td,ud,vd,Iv],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Jv,Hv],function(ew){
		     var fw=ew[0];
		     bu.J(0,yv,fw);
		    },[td,ud,yd,vd,pd,sd,bu,yv]);
		   },[td,ud,vd,pd,bu,yv],"$w$j1");
		   $M(sd,function(gw){
		    switch(gw.g){
		    case 1:
		     var jw=$hs_writeWideCharOffAddrzh(td,Zu,"\n",bv);
		     var hw=$hs_touchzh(ud,jw);
		     var iw=Zu+1|0;
		     Gv.J(hw,iw);break;
		    case 2:
		     var pw=$hs_writeWideCharOffAddrzh(td,Zu,"\r",bv);
		     var ow=$hs_touchzh(ud,pw);
		     var mw=Zu+1|0;
		     var nw=$hs_writeWideCharOffAddrzh(td,mw,"\n",ow);
		     var kw=$hs_touchzh(ud,nw);
		     var lw=mw+1|0;
		     Gv.J(kw,lw);break;
		    }
		   },[td,ud,yd,vd,pd,sd,bu,Zu,bv,yv,Gv]);break;
		  default:
		   var Fv=$hs_writeWideCharOffAddrzh(td,Zu,Cv,bv);
		   var Ev=$hs_touchzh(ud,Fv);
		   var Dv=Zu+1|0;
		   bu.J(Dv,yv,Ev);
		  }
		 },[td,ud,yd,vd,pd,sd,bu,Zu,bv,yv]);
		},[td,ud,yd,vd,pd,sd,bu,Zu,bv,yv]);break;
	       case 2:
		var qw=$f(1,function(rw){
		 $M(rw,function(sw){
		  var tw=$f(1,function(uw){
		   $$GHCziIOziHandleziInternals_zdwa3.C([sw,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Zu,uw],function(vw){
		    var ww=vw[0];
		    $r([ww,$$GHCziTuple_Z0T]);
		   },[]);
		  },[td,ud,vd,Zu,sw],"sat");
		  $A(tw);
		 },[td,ud,vd,Zu]);
		},[td,ud,vd,Zu],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,qw,bv],function(xw){
		 var yw=xw[0];
		 St.J(0,xv,yv,yw);
		},[td,ud,yd,vd,pd,sd,St,xv,yv]);break;
	       }break;
	      }
	     },[td,ud,yd,vd,pd,sd,bu,St,Zu,bv]);
	    },[td,ud,yd,vd,pd,sd,St],"$s$wa6");
	    $S(St,[td,ud,vd,pd,sd,bu]);
	    var Aw=$F(5,function(Bw,Cw,Dw,Ew,Fw){
	     var Hx=Bw+1|0;
	     var Gw=Hx>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	     switch(Gw.g){
	     case 1:
	      $M(Cw,function(Hw){
	       var Iw=Hw.v[0];
	       $M(Iw,function(Jw){
		switch(Jw.toString()){
		case "\n":
		 var Ow=$f(2,function(Pw,Qw){
		  var Rw=$f(1,function(Sw){
		   $M(Sw,function(Tw){
		    var Uw=Tw.v[1],Vw=Tw.v[3],Ww=Tw.v[5];
		    var Xw=$f(1,function(Yw){
		     $$GHCziIOziHandleziInternals_zdwa3.C([Tw,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Qw,Yw],function(Zw){
		      var ax=Zw[0];
		      var bx=$hs_readMutVarzh(Ww,ax);
		      var cx=bx[0],dx=bx[1];
		      $M(dx,function(ex){
		       var fx=ex.v[4],gx=ex.v[5];
		       var hx=fx==gx?$$GHCziTypes_True:$$GHCziTypes_False;
		       switch(hx.g){
		       case 1:
			$$GHCziIOziBufferedIO_flushWriteBuffer.C([Uw,Vw,ex,cx],function(ix){
			 var jx=ix[0],kx=ix[1];
			 var lx=$hs_writeMutVarzh(Ww,kx,jx);
			 $r([lx,$$GHCziTuple_Z0T]);
			},[Ww]);break;
		       case 2:
			$r([cx,$$GHCziTuple_Z0T]);break;
		       }
		      },[Ww,Uw,Vw,cx]);
		     },[Ww,Uw,Vw]);
		    },[td,ud,vd,Tw,Qw,Ww,Uw,Vw],"sat");
		    $A(Xw);
		   },[td,ud,vd,Qw]);
		  },[td,ud,vd,Qw],"sat");
		  $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,Rw,Pw],function(mx){
		   var nx=mx[0];
		   Kw.J(0,Dw,Ew,nx);
		  },[td,ud,yd,vd,pd,sd,St,Kw,Dw,Ew]);
		 },[td,ud,vd,pd,Kw,Dw,Ew],"$w$j1");
		 $M(sd,function(ox){
		  switch(ox.g){
		  case 1:
		   var rx=$hs_writeWideCharOffAddrzh(td,Bw,"\n",Fw);
		   var px=$hs_touchzh(ud,rx);
		   var qx=Bw+1|0;
		   Ow.J(px,qx);break;
		  case 2:
		   var xx=$hs_writeWideCharOffAddrzh(td,Bw,"\r",Fw);
		   var wx=$hs_touchzh(ud,xx);
		   var ux=Bw+1|0;
		   var vx=$hs_writeWideCharOffAddrzh(td,ux,"\n",wx);
		   var sx=$hs_touchzh(ud,vx);
		   var tx=ux+1|0;
		   Ow.J(sx,tx);break;
		  }
		 },[td,ud,yd,vd,pd,sd,St,Bw,Fw,Kw,Dw,Ew,Ow]);break;
		default:
		 var Nw=$hs_writeWideCharOffAddrzh(td,Bw,Jw,Fw);
		 var Mw=$hs_touchzh(ud,Nw);
		 var Lw=Bw+1|0;
		 Kw.J(Lw,Dw,Ew,Mw);
		}
	       },[td,ud,yd,vd,pd,sd,St,Bw,Fw,Kw,Dw,Ew]);
	      },[td,ud,yd,vd,pd,sd,St,Bw,Fw,Kw,Dw,Ew]);break;
	     case 2:
	      var yx=$f(1,function(zx){
	       $M(zx,function(Ax){
		var Bx=$f(1,function(Cx){
		 $$GHCziIOziHandleziInternals_zdwa3.C([Ax,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Bw,Cx],function(Dx){
		  var Ex=Dx[0];
		  $r([Ex,$$GHCziTuple_Z0T]);
		 },[]);
		},[td,ud,vd,Bw,Ax],"sat");
		$A(Bx);
	       },[td,ud,vd,Bw]);
	      },[td,ud,vd,Bw],"sat");
	      $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,yx,Fw],function(Fx){
	       var Gx=Fx[0];
	       Aw.J(0,Cw,Dw,Ew,Gx);
	      },[td,ud,yd,vd,pd,sd,St,Cw,Dw,Ew,Aw]);break;
	     }
	    },"$s$wa7"),Kw=$f(4,function(Ix,Jx,Kx,Lx){
	     $M(Jx,function(Mx){
	      switch(Mx.g){
	      case 1:
	       $M(Kx,function(Nx){
		switch(Nx.g){
		case 1:
		 var Ox=$f(1,function(Px){
		  $M(Px,function(Qx){
		   var Rx=Qx.v[8],Sx=Qx.v[9];
		   var Tx=$f(1,function(Ux){
		    $$GHCziIOziHandleziInternals_zdwa3.C([Qx,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Ix,Ux],function(Vx){
		     var Wx=Vx[0];
		     var Xx=$hs_readMutVarzh(Rx,Wx);
		     var Yx=Xx[0],Zx=Xx[1];
		     $M(Zx,function(ay){
		      var by=ay.v[3];
		      var cy=vd==by?$$GHCziTypes_True:$$GHCziTypes_False;
		      switch(cy.g){
		      case 1:
		       $r([Yx,$$GHCziTuple_Z0T]);break;
		      case 2:
		       var dy=$hs_readMutVarzh(Sx,Yx);
		       var ey=dy[0],fy=dy[1];
		       var gy=$d(2,[yd,fy],"sat");
		       var hy=$hs_writeMutVarzh(Sx,gy,ey);
		       $r([hy,$$GHCziTuple_Z0T]);break;
		      }
		     },[yd,vd,Yx,Sx]);
		    },[yd,vd,Rx,Sx]);
		   },[td,ud,yd,vd,Qx,Ix,Rx,Sx],"sat");
		   $A(Tx);
		  },[td,ud,yd,vd,Ix]);
		 },[td,ud,yd,vd,Ix],"sat");
		 $$GHCziIOziHandleziInternals_wantWritableHandle1.J($$GHCziIOziHandleziText$f,pd,Ox,Lx);break;
		case 2:
		 var iy=Nx.v[0],jy=Nx.v[1];
		 St.J(Ix,iy,jy,Lx);break;
		}
	       },[td,ud,yd,vd,pd,sd,St,Ix,Lx]);break;
	      case 2:
	       var ky=Mx.v[0],ly=Mx.v[1];
	       var mz=Ix+1|0;
	       var my=mz>=vd?$$GHCziTypes_True:$$GHCziTypes_False;
	       switch(my.g){
	       case 1:
		$M(ky,function(ny){
		 var oy=ny.v[0];
		 $M(oy,function(py){
		  switch(py.toString()){
		  case "\n":
		   var ty=$f(2,function(uy,vy){
		    var wy=$f(1,function(xy){
		     $M(xy,function(yy){
		      var zy=yy.v[1],Ay=yy.v[3],By=yy.v[5];
		      var Cy=$f(1,function(Dy){
		       $$GHCziIOziHandleziInternals_zdwa3.C([yy,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,vy,Dy],function(Ey){
			var Fy=Ey[0];
			var Gy=$hs_readMutVarzh(By,Fy);
			var Hy=Gy[0],Iy=Gy[1];
			$M(Iy,function(Jy){
			 var Ky=Jy.v[4],Ly=Jy.v[5];
			 var My=Ky==Ly?$$GHCziTypes_True:$$GHCziTypes_False;
			 switch(My.g){
			 case 1:
			  $$GHCziIOziBufferedIO_flushWriteBuffer.C([zy,Ay,Jy,Hy],function(Ny){
			   var Oy=Ny[0],Py=Ny[1];
			   var Qy=$hs_writeMutVarzh(By,Py,Oy);
			   $r([Qy,$$GHCziTuple_Z0T]);
			  },[By]);break;
			 case 2:
			  $r([Hy,$$GHCziTuple_Z0T]);break;
			 }
			},[By,zy,Ay,Hy]);
		       },[By,zy,Ay]);
		      },[td,ud,vd,yy,vy,By,zy,Ay],"sat");
		      $A(Cy);
		     },[td,ud,vd,vy]);
		    },[td,ud,vd,vy],"sat");
		    $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,wy,uy],function(Ry){
		     var Sy=Ry[0];
		     Kw.J(0,ly,Kx,Sy);
		    },[td,ud,yd,vd,pd,sd,St,Kw,Kx,ly]);
		   },[td,ud,vd,pd,Kw,Kx,ly],"$w$j1");
		   $M(sd,function(Ty){
		    switch(Ty.g){
		    case 1:
		     var Wy=$hs_writeWideCharOffAddrzh(td,Ix,"\n",Lx);
		     var Uy=$hs_touchzh(ud,Wy);
		     var Vy=Ix+1|0;
		     ty.J(Uy,Vy);break;
		    case 2:
		     var cz=$hs_writeWideCharOffAddrzh(td,Ix,"\r",Lx);
		     var bz=$hs_touchzh(ud,cz);
		     var Zy=Ix+1|0;
		     var az=$hs_writeWideCharOffAddrzh(td,Zy,"\n",bz);
		     var Xy=$hs_touchzh(ud,az);
		     var Yy=Zy+1|0;
		     ty.J(Xy,Yy);break;
		    }
		   },[td,ud,yd,vd,pd,sd,St,Kw,Kx,Ix,Lx,ly,ty]);break;
		  default:
		   var sy=$hs_writeWideCharOffAddrzh(td,Ix,py,Lx);
		   var ry=$hs_touchzh(ud,sy);
		   var qy=Ix+1|0;
		   Kw.J(qy,ly,Kx,ry);
		  }
		 },[td,ud,yd,vd,pd,sd,St,Kw,Kx,Ix,Lx,ly]);
		},[td,ud,yd,vd,pd,sd,St,Kw,Kx,Ix,Lx,ly]);break;
	       case 2:
		var dz=$f(1,function(ez){
		 $M(ez,function(fz){
		  var gz=$f(1,function(hz){
		   $$GHCziIOziHandleziInternals_zdwa3.C([fz,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,Ix,hz],function(iz){
		    var jz=iz[0];
		    $r([jz,$$GHCziTuple_Z0T]);
		   },[]);
		  },[td,ud,vd,Ix,fz],"sat");
		  $A(gz);
		 },[td,ud,vd,Ix]);
		},[td,ud,vd,Ix],"sat");
		$$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,dz,Lx],function(kz){
		 var lz=kz[0];
		 Aw.J(0,ky,ly,Kx,lz);
		},[td,ud,yd,vd,pd,sd,St,Aw,Kx,ky,ly]);break;
	       }break;
	      }
	     },[td,ud,yd,vd,pd,sd,St,Kw,Aw,Kx,Ix,Lx]);
	    },[td,ud,yd,vd,pd,sd,St,Aw],"$wa9");
	    $S(Aw,[td,ud,vd,pd,sd,Kw]);
	    Kw.J(0,Op,np,Rt);
	   },[td,ud,yd,vd,pd,sd,np,Op]);break;
	  }
	 },[td,ud,yd,vd,pd,sd,np,Op,Yp,Xp]);
	},[td,ud,yd,vd,qd,pd,sd,np,Op],"$w$j");
	$M(sd,function(nz){
	 switch(nz.g){
	 case 1:
	  var qz=$hs_writeWideCharOffAddrzh(td,lp,"\n",op);
	  var oz=$hs_touchzh(ud,qz);
	  var pz=lp+1|0;
	  Wp.J(oz,pz);break;
	 case 2:
	  var wz=$hs_writeWideCharOffAddrzh(td,lp,"\r",op);
	  var vz=$hs_touchzh(ud,wz);
	  var tz=lp+1|0;
	  var uz=$hs_writeWideCharOffAddrzh(td,tz,"\n",vz);
	  var rz=$hs_touchzh(ud,uz);
	  var sz=tz+1|0;
	  Wp.J(rz,sz);break;
	 }
	},[td,ud,yd,vd,qd,pd,sd,np,lp,op,Op,Wp]);break;
       default:
	var Vp=$hs_writeWideCharOffAddrzh(td,lp,Sp,op);
	var Up=$hs_touchzh(ud,Vp);
	var Tp=lp+1|0;
	Cl.J(Tp,Op,np,Up);
       }
      },[td,ud,yd,vd,qd,pd,sd,zd,Cl,np,lp,op,Op]);
     },[td,ud,yd,vd,qd,pd,sd,zd,Cl,np,lp,op,Op]);break;
    case 2:
     var xz=$f(1,function(yz){
      $M(yz,function(zz){
       var Az=$f(1,function(Bz){
	$$GHCziIOziHandleziInternals_zdwa3.C([zz,td,ud,$$GHCziIOziBuffer_WriteBuffer,vd,0,lp,Bz],function(Cz){
	 var Dz=Cz[0];
	 $r([Dz,$$GHCziTuple_Z0T]);
	},[]);
       },[td,ud,vd,lp,zz],"sat");
       $A(Az);
      },[td,ud,vd,lp]);
     },[td,ud,vd,lp],"sat");
     $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText$f,pd,xz,op],function(Ez){
      var Fz=Ez[0];
      sl.J(0,Np,Op,np,Fz);
     },[td,ud,yd,vd,qd,pd,sd,zd,sl,np,Np,Op]);break;
    }break;
   }
  },[td,ud,yd,vd,qd,pd,sd,zd,Cl,sl,np,lp,op]);
 },[td,ud,yd,vd,qd,pd,sd,zd,sl],"$wa8");
 $S(sl,[td,ud,yd,vd,qd,pd,sd,Cl]);
 var Hz=$t(function(){
  $M(rd,function(Iz){
   switch(Iz.g){
   case 1:
    $R(1,[],"[]");break;
   case 2:
    $A($$GHCziIOziHandleziText$o);break;
   }
  },[]);
 },[rd],"sat");
 Cl.J(0,wd,Hz,xd);
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
var $$GHCziIOziHandleziText_hPutStr4=$f(2,function(Jz,Kz){
 $M(Jz,function(Lz){
  var Mz=Lz.v[6],Nz=Lz.v[8],Oz=Lz.v[9],Pz=Lz.v[14];
  $M(Mz,function(Qz){
   switch(Qz.g){
   case 1:
    var zA=$d(1,[$$GHCziIOziHandleziText_hPutStr5,Pz],"sat");
    $r([Kz,zA]);break;
   default:
    var Rz=$hs_readMutVarzh(Oz,Kz);
    var Sz=Rz[0],Tz=Rz[1];
    var Uz=$hs_readMutVarzh(Nz,Sz);
    var Vz=Uz[0],Wz=Uz[1];
    $M(Tz,function(Xz){
     switch(Xz.g){
     case 1:
      $M(Wz,function(Yz){
       var Zz=Yz.v[3];
       var nA=$hs_ztzh(Zz,4);
       var aA=nA<0?$$GHCziTypes_True:$$GHCziTypes_False;
       switch(aA.g){
       case 1:
	var bA=$hs_newMutVarzh($$GHCziForeignPtr_mallocForeignPtr3,Vz);
	var cA=bA[0],dA=bA[1];
	var eA=$hs_newPinnedByteArrayzh(nA,cA);
	var fA=eA[0],gA=eA[1];
	var hA=$d(1,[dA],"sat");
	var iA=$d(2,[gA,hA],"sat");
	var kA=$hs_byteArrayContentszh(gA);
	var jA=$d(1,[kA,iA,$$GHCziIOziBuffer_WriteBuffer,Zz,0,0],"sat");
	var lA=$d(1,[Qz,jA],"sat");
	var mA=$d(1,[lA,Pz],"sat");
	$r([fA,mA]);break;
       case 2:
	$A($$GHCziForeignPtr_mallocForeignPtrBytes2);break;
       }
      },[Vz,Qz,Pz]);break;
     case 2:
      var oA=Xz.v[0],pA=Xz.v[1];
      var yA=$hs_writeMutVarzh(Oz,pA,Vz);
      var qA=$t(function(){
       $M(oA,function(rA){
	var sA=rA.v[0],tA=rA.v[1];
	$M(Wz,function(uA){
	 var vA=uA.v[3];
	 $R(1,[sA,tA,$$GHCziIOziBuffer_WriteBuffer,vA,0,0],"Buffer");
	},[sA,tA]);
       },[Wz]);
      },[Wz,oA],"sat");
      var wA=$d(1,[Qz,qA],"sat");
      var xA=$d(1,[wA,Pz],"sat");
      $r([yA,xA]);break;
     }
    },[Oz,Wz,Vz,Qz,Pz]);
   }
  },[Oz,Kz,Nz,Pz]);
 },[Kz]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStr2=$f(4,function(AA,BA,CA,DA){
 $$GHCziIOziHandleziInternals_wantWritableHandle1.C([$$GHCziIOziHandleziText_hPutStr7,AA,$$GHCziIOziHandleziText_hPutStr4,DA],function(EA){
  var FA=EA[0],GA=EA[1];
  $M(GA,function(HA){
   var IA=HA.v[0],JA=HA.v[1];
   $M(IA,function(KA){
    var LA=KA.v[0],MA=KA.v[1];
    $M(LA,function(NA){
     switch(NA.g){
     case 1:
      $$GHCziIOziHandleziText_hPutStr3.C([AA,BA,FA],function(OA){
       var PA=OA[0];
       $M(CA,function(QA){
	switch(QA.g){
	case 1:
	 $r([PA,$$GHCziTuple_Z0T]);break;
	case 2:
	 $$GHCziIOziHandleziText_zdwa5.J(AA,"\n",PA);break;
	}
       },[AA,PA]);
      },[AA,CA]);break;
     case 2:
      $M(MA,function(RA){
       var SA=RA.v[0],TA=RA.v[1],UA=RA.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(AA,$$GHCziTypes_True,CA,JA,SA,TA,UA,BA,FA);
      },[AA,BA,FA,CA,JA]);break;
     case 3:
      $M(MA,function(VA){
       var WA=VA.v[0],XA=VA.v[1],YA=VA.v[3];
       $$GHCziIOziHandleziText_zdwa6.J(AA,$$GHCziTypes_False,CA,JA,WA,XA,YA,BA,FA);
      },[AA,BA,FA,CA,JA]);break;
     }
    },[AA,BA,FA,CA,MA,JA]);
   },[AA,BA,FA,CA,JA]);
  },[AA,BA,FA,CA]);
 },[AA,BA,CA]);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText_hPutStrLn1=$f(3,function(cB,dB,eB){
 $$GHCziIOziHandleziText_hPutStr2.J(cB,dB,$$GHCziTypes_True,eB);
},[],"in `base:GHC.IO.Handle.Text'");
var $$GHCziIOziHandleziText$f=$T(function(){
 $$GHCziCString_unpackCStringzh.J("commitBuffer");
},"lvl3");
var $$GHCziIOziHandleziText$o=$D(2,function(){
 $r([$$GHCziIOziHandleziText$e,$$GHCziTypes_ZMZN]);
},"lvl8");
var $$GHCziIOziHandleziText$p=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no buffer!");
},"lvl9");

var $$SystemziEnvironment_getEnv2=$f(2,function(a,b){
 var c=$d(2,[a],"sat");
 var d=$d(1,[$$DataziMaybe_Nothing,$$GHCziIOziException_NoSuchThing,$$SystemziEnvironment$b,$$SystemziEnvironment$c,$$DataziMaybe_Nothing,c],"sat");
 $$GHCziIOziException_ioException.J(d,b);
},[],"in `base:System.Environment'");
var $$SystemziEnvironment_getEnv1=$f(2,function(e,f){
 $M($$GHCziIOziEncoding_getForeignEncoding1,function(g){
  var h=g.v[0];
  h.C([f],function(i){
   var j=i[0],k=i[1];
   var l=$f(2,function(m,n){
    $M(m,function(o){
     var p=o.v[0];
     var $ff=getenv(p);
     var q=[n,$ff];
     var r=q[0],s=q[1];
     var t=$hs_eqAddrzh(s,null);
     switch(t.g){
     case 1:
      $M($$GHCziIOziEncoding_getFileSystemEncoding1,function(u){
       var v=u.v[0];
       v.C([r],function(w){
	var x=w[0],y=w[1];
	$$GHCziForeign_zdwa.J(y,s,x);
       },[s]);
      },[s,r]);break;
     case 2:
      $$SystemziEnvironment_getEnv2.J(e,r);break;
     }
    },[e,n]);
   },[e],"sat");
   $$GHCziForeign_charIsRepresentable3.J(k,e,l,j);
  },[e]);
 },[f,e]);
},[],"in `base:System.Environment'");
var $$SystemziEnvironment$b=$T(function(){
 $$GHCziCString_unpackCStringzh.J("getEnv");
},"lvl");
var $$SystemziEnvironment$c=$T(function(){
 $$GHCziCString_unpackCStringzh.J("no environment variable");
},"lvl1");

var $$SystemziIO_putStrLn1=$f(2,function(M1,N1){
 $$GHCziIOziHandleziText_hPutStrLn1.J($$GHCziIOziHandleziFD_stdout,M1,N1);
},[],"in `base:System.IO'");

var $$Main_main1=$f(1,function(a){
 $b($hs_catchzh,[$$Pathszufayzuhellozujs_getBinDir3,$$Pathszufayzuhellozujs_getBinDir2,a],function(b){
  var c=b[0],d=b[1];
  $$SystemziIO_putStrLn1.J(d,c);
 },[]);
},[],"in `main:Main'");

var $$Pathszufayzuhellozujs_bindir=$t(function(){
 $$GHCziCString_unpackCStringzh.J("/Users/hamish/Library/Haskell/ghc-7.4.1.20120701/lib/fay-hello-js-0.1.0.0/bin");
},[],"at dist/build/autogen/Paths_fay_hello_js.hs:18:1");
var $$Pathszufayzuhellozujs_getBinDir4=$t(function(){
 $$GHCziCString_unpackCStringzh.J("fay_hello_js_bindir");
},[],"in `main:Paths_fay_hello_js'");
var $$Pathszufayzuhellozujs_getBinDir3=$f(1,function(K){
 $$SystemziEnvironment_getEnv1.J($$Pathszufayzuhellozujs_getBinDir4,K);
},[],"in `main:Paths_fay_hello_js'");
var $$Pathszufayzuhellozujs_getBinDir2=$f(2,function(L,M){
 $M(L,function(N){
  var O=N.v[0],P=N.v[1];
  $$GHCziException_zdp1Exception.C([O],function(R){
   $$DataziTypeable_cast.C([R,$$GHCziIOziException_zdfExceptionIOExceptionzuzdctypeOf,P],function(Q){
    switch(Q.g){
    case 1:
     $r($hs_raiseIOzh(N,M));break;
    case 2:
     $r([M,$$Pathszufayzuhellozujs_bindir]);break;
    }
   },[N,M]);
  },[P,N,M]);
 },[M]);
},[],"in `main:Paths_fay_hello_js'");

//@ sourceURL=hs3.js
