(()=>{"use strict";const t=250;class s{constructor(t,s,n){this.t=t,this.o=s,this.color=n,this.i=[],this.h()}h(){const{t,o:s,color:o}=this,i=Math.atan2(s.y-t.y,s.x-t.x),r=Math.hypot(s.x-t.x,s.y-t.y);for(let s=0;s<Math.ceil(r/e);s++){const r=t.x+Math.cos(i)*s*e,h=t.y+Math.sin(i)*s*e;this.i.push(new n(r,h,o,i))}this.angle=i}reset(){this.i=[],this.h()}update(){for(let t=0;t<this.i.length;t++)this.i[t].u<=0||this.i[t].update()}draw(t){for(let s=0;s<this.i.length;s++)this.i[s].u<=0||this.i[s].draw(t)}}class n{constructor(t,s,n,e){this.color=n,this.l={x:t,y:s},this.m={x:0,y:0},this.color=n,this.u=100,this.angle=e}update(){this.l.x+=this.m.x,this.l.y+=this.m.y,this.u--}draw(t){this.left<0||(this.u<75?t.fillStyle=`rgba(${this.color}, ${this.u/75})`:t.fillStyle=`rgba(${this.color}, 1)`,t.beginPath(),t.rect(this.l.x-e/2,this.l.y,e,e),t.fill(),t.closePath())}}const e=20,o="255,255,255";class i{constructor(t,n,i,r,h=!0,a=!0){this.width=e,this.l={x:0,y:0},this.t={x:0,y:0},this.o={x:0,y:0},this.M={x:0,y:0},this.p={x:0,y:0},this.C=!1,this.v=h,this.color=h?o:"0,0,0",this.B(t,n,i,r),this.$=new s(this.t,this.o,this.color)}B(t,s,n,e){this.t.x=t,this.t.y=s,this.o.x=n,this.o.y=e;const{t:o,o:i}=this;this.l.x=(o.x+i.x)/2,this.l.y=(o.y+i.y)/2,this.angle=Math.atan2(i.y-o.y,i.x-o.x)-Math.PI/2,this.k=this.F(o,i,this.width),this.A=this.j();const r=6*Math.sin(this.angle),h=6*-Math.cos(this.angle);this.M.x=this.t.x-r,this.M.y=this.t.y-h,this.p.x=this.o.x+r,this.p.y=this.o.y+h}update(){this.C&&this.$.update()}rotate(t,s,n){const e=this.t.x,o=this.t.y,i=this.o.x,r=this.o.y,h=Math.cos(t),a=Math.sin(t),c=h*(e-s)-a*(o-n)+s,u=a*(e-s)+h*(o-n)+n,l=h*(i-s)-a*(r-n)+s,d=a*(i-s)+h*(r-n)+n;this.B(c,u,l,d)}D(){}reset(){this.C=!1,this.$.reset()}I(t){this.C=!0,this.$=new s(this.t,this.o,this.color),this.$.i.forEach((s=>{const n=Math.random()*Math.PI*2;s.m.x=t*(2*Math.random()-1)*Math.cos(n),s.m.y=t*(2*Math.random()-1)*Math.sin(n)}))}F(t,s,n){const e=n/2,o=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2)/2,i=this.angle;return[{x:-e,y:-o},{x:-e,y:o},{x:e,y:o},{x:e,y:-o}].map((t=>({x:this.l.x+(t.x*Math.cos(i)-t.y*Math.sin(i)),y:this.l.y+(t.x*Math.sin(i)+t.y*Math.cos(i))})))}j(){const t=[],s=this.k,n=s.length;for(let e=0;e<n;e++){const o=(e+1)%n,i=s[o].x-s[e].x,r=s[o].y-s[e].y,h=Math.sqrt(i*i+r*r),a={x:-r/h,y:i/h};t.push(a)}return t}P(t){let s=Number.POSITIVE_INFINITY,n=-Number.POSITIVE_INFINITY;for(let e=0;e<this.k.length;e++){let o=this.k[e].x*t.x+this.k[e].y*t.y;s=Math.min(s,o),n=Math.max(n,o)}return{min:s,max:n}}S(t,s,n,e,o){const i=t-n,r=s-e;return i*i+r*r<=o*o}T(t,s){return this.H(t,s)}H(t,s){let n=!1;const e=this.k,o=e.length;for(let i=0,r=o-1;i<o;r=i++){const o=e[i].x,h=e[i].y,a=e[r].x,c=e[r].y;h>s!=c>s&&t<(a-o)*(s-h)/(c-h)+o&&(n=!n)}return n}L(t,s){return this.N(t,s)?this.t:this.J(t,s)?this.o:null}N(t,s){return this.S(t,s,this.M.x,this.M.y,15)}J(t,s){return this.S(t,s,this.p.x,this.p.y,15)}U(t,s){return this.v?this.S(t,s,this.l.x,this.l.y,15):null}draw(t){this.C?this.$.draw(t):this.V(t)}V(t){t.beginPath(),t.setLineDash([]),t.fillStyle=`rgba(${this.color}, 1.0)`,t.strokeStyle="#000",t.lineWidth=2,t.moveTo(this.k[0].x,this.k[0].y);for(let s=1;s<this.k.length;s++)t.lineTo(this.k[s].x,this.k[s].y);t.closePath(),t.fill(),t.stroke(),this.color===o&&(t.beginPath(),t.lineWidth=2,t.strokeStyle="red",t.moveTo(this.l.x-5,this.l.y-5),t.lineTo(this.l.x+5,this.l.y+5),t.moveTo(this.l.x-5,this.l.y+5),t.lineTo(this.l.x+5,this.l.y-5),t.stroke(),t.closePath(),t.beginPath(),t.fillStyle="rgba(255, 0, 0, 1.0)",t.arc(this.M.x,this.M.y,4,0,2*Math.PI),t.arc(this.p.x,this.p.y,4,0,2*Math.PI),t.fill())}}class r{constructor(t=0,s=0,n=0,e=1){this.W={x:t,y:s},this.angle=n,this.O=e,this.R={x:t,y:s}}get q(){return this.R.x=this.W.x+this.O*Math.cos(this.angle),this.R.y=this.W.y+this.O*Math.sin(this.angle),this.R}}class h{constructor(){this.k=[]}}function a(t,s){return t.max>s.min&&s.max>t.min}function c(t,s){return Math.min(t.max-s.min,s.max-t.min)}function u(t,s){let n=Number.POSITIVE_INFINITY,e=null,o=null;for(let i=0;i<s.A.length;i++){const r=s.A[i],h=s.P(r),u=t.P(r);if(!a(h,u))return null;{const t=c(h,u);t<n&&(n=t,e=r,o=s.k[i])}}for(const i of s.k){const r={x:t.l.x-i.x,y:t.l.y-i.y},h=Math.sqrt(r.x*r.x+r.y*r.y);if(0===h)continue;r.x/=h,r.y/=h;const u=s.P(r),l=t.P(r);if(!a(u,l))return null;{const t=c(u,l);t<n&&(n=t,e=r,o=i)}}if(n===Number.POSITIVE_INFINITY)return null;let i=t.l.x-o.x,r=t.l.y-o.y;return i*e.x+r*e.y<0&&(e.x=-e.x,e.y=-e.y),{G:{x:e.x*n,y:e.y*n},axis:e}}class l{K=1;constructor(t,s,n=Math.PI,e=8){this.X=e,this.color="#fff",this.l={x:t,y:s},this.Y={x:t,y:s},this.m={x:0,y:0},this.Z=null,this.K=e,this._=n,this.l.x=t,this.l.y=s,this.alpha=1,this.tt=0}P(t){const s=this.l.x*t.x+this.l.y*t.y;return{min:s-this.X,max:s+this.X}}update(){const t=.98-this.tt;this.m.x*=t,this.m.y*=t,Math.abs(this.m.x)<.01&&(this.m.x=0),Math.abs(this.m.y)<.01&&(this.m.y=0),this.l.x+=this.m.x,this.l.y+=this.m.y}reset(){this.l.x=this.Y.x,this.l.y=this.Y.y,this.Z=null,this.m.x=0,this.m.y=0,this.st=!1,this.alpha=1}}class d{Z=null;constructor(t,s,n=15,e="black"){this.l={x:t,y:s},this.X=n,this.color=e}}class f{nt=[];et=[];ot=[];number=0;it=!1;backgroundColor="red";rt="red";ht="red";ct="red";width=500;height=500;ut=!1;reset(){this.ut=!1,this.it=!1,this.nt.forEach((t=>{t.reset()})),this.et.forEach((t=>{t.reset()})),document.getElementById("js-place-wall").classList.remove("disabled"),document.getElementById("js-place-wall").setAttribute("disabled",!1),document.body.style.backgroundColor=this.rt;const t=document.getElementById("js-place-wall");t.style.display="block",t.classList.remove("jiggle"),this.number<5?t.style.display="none":5===this.number&&t.classList.add("jiggle")}get lt(){for(let t=0;t<this.nt.length;t++)if(!this.nt[t].Z)return!1;return!0}update(){}draw(t){}}class w extends f{backgroundColor="#B4E7CE";rt="#59A96A";ht="#9BDEAC";ct="#474A2C";number=1;constructor(){super(),this.ot=[new d(400,250)],this.nt=[new l(250,250)]}}class m extends f{backgroundColor="#BB8A89";rt="#977390";ht="#AC7B7D";ct="#785589";number=2;constructor(){super(),this.ot=[new d(400,125),new d(400,375)],this.nt=[new l(250,125),new l(250,375)]}}class M extends f{backgroundColor="#F4F4F9";rt="#586F7C";ht="#B8DBD9";ct="#2F4550";number=3;constructor(){super(),this.ot=[new d(100,125),new d(400,375)],this.nt=[new l(250,125),new l(250,375,0)]}}class p extends f{backgroundColor="#AFB3F7";rt="#7A93AC";ht="#92BCEA";ct="#617073";number=4;constructor(){super(),this.ot=[new d(400,125),new d(400,375)],this.nt=[new l(50,125),new l(250,375,0)],this.et=[new i(100,50,100,200,!1)]}}class C extends f{backgroundColor="#FEC0AA";rt="#84732B";ht="#EC4E20";ct="#574F2A";number=5;constructor(){super(),this.ot=[new d(400,125),new d(400,375)],this.nt=[new l(150,125),new l(250,375,0)],this.et=[new i(25,0,25,500,!1),new i(475,0,475,500,!1)]}draw(t){t.beginPath(),t.setLineDash([5,15]),t.strokeStyle="black",t.lineWidth=2,t.rect(100,75,20,100),t.stroke()}}class x extends f{backgroundColor="#F2F6D0";rt="#D9D2B6";ht="#D0E1D4";ct="#71697A";number=6;constructor(){super(),this.ot=[new d(250,150),new d(100,350),new d(400,350)];const t=[{x:100,y:200},{x:400,y:200},{x:250,y:400}],s=(t[0].x+t[1].x+t[2].x)/3,n=(t[0].y+t[1].y+t[2].y)/3,e=(t,e)=>Math.atan2(n-e,s-t);this.nt=[new l(t[0].x,t[0].y,e(100,200)),new l(t[1].x,t[1].y,e(400,200)),new l(t[2].x,t[2].y,e(250,400))],this.et=[]}}class v extends f{backgroundColor="#FAA275";rt="#CE6A85";ht="#FF8C61";ct="#985277";number=7;constructor(){super(),this.ot=[new d(150,400),new d(250,400),new d(350,400)],this.nt=[new l(150,150),new l(250,200),new l(350,250)],this.et=[]}}class b extends f{backgroundColor="#BEEF9E";rt="#828C51";ht="#A6C36F";ct="#335145";number=8;constructor(){super(),this.ot=[new d(250,250)];this.nt=[new l(400,250,0),new l(250+150*Math.cos(Math.PI),250+150*Math.sin(Math.PI),Math.PI)]}}class B extends f{backgroundColor="#CF9893";rt="#A96DA3";ht="#BC7C9C";ct="#3B3B58";number=9;constructor(){super(),this.ot=[new d(250,300),new d(200,250)],this.nt=[new l(250,200,-Math.PI),new l(300,250,-Math.PI/2)],this.et=[new i(200,200,300,300,!1),new i(300,200,200,300,!1)]}}class g extends f{backgroundColor="#FFA9E7";rt="#7F2CCB";ht="#FF84E8";ct="#414361";number=10;constructor(){super(),this.ot=[new d(200,200),new d(400,400)],this.nt=[new l(250,250,-Math.PI),new l(300,300,-Math.PI/2)],this.et=[new i(100,200,200,100,!1)]}}class $ extends f{backgroundColor="#93B5C6";rt="#F0CF65";ht="#D7816A";ct="#BD4F6C";number=11;constructor(){super(),this.ot=[new d(100,100),new d(250,100),new d(400,100)],this.nt=[new l(250,200,Math.PI),new l(175,325,Math.PI/4),new l(325,325,-Math.PI/4)],this.et=[]}}class k extends f{backgroundColor="#524948";rt="#7CB4B8";ht="#70F8BA";ct="#57467B";number=12;constructor(){super(),this.ot=[new d(200,200),new d(300,200)],this.nt=[new l(100,250,Math.PI),new l(400,250,Math.PI/3)],this.et=[new i(125,125,175,300,!1),new i(375,125,325,300,!1),new i(125,125,175,150,!1),new i(375,125,325,150,!1),new i(175,150,325,150,!1),new i(175,300,325,300,!1),new i(200,250,200,275,!1),new i(300,250,300,275,!1),new i(200,275,300,275,!1)]}}class y extends f{backgroundColor="#6A8D73";rt="#E4FFE1";ht="#FFE8C2";ct="#F0A868";number=13;constructor(){super(),this.ot=[new d(250,250)],this.nt=[new l(250,100,Math.PI)];const t=new i(175,150,175,350,!1),s=new i(325,150,325,350,!1),n=new i(185,160,315,160,!1),e=new i(185,340,315,340,!1);this.et=[t,s,n,e],this.dt=[t,s,n,e]}update(){super.update();for(let t=0;t<this.dt.length;t++){this.dt[t].rotate(.01,250,250)}}}const F=function(){var t,s,n,e,o,i=function(t){return Math.sin(6.283184*t)},r=function(t){return.003959503758*2**((t-128)/12)},h=function(t,s,n){var e,o,i,h,c,u,l=a[t.ft[0]],d=t.ft[1],f=t.ft[3]/32,w=a[t.ft[4]],m=t.ft[5],M=t.ft[8]/32,p=t.ft[9],C=t.ft[10]*t.ft[10]*4,x=t.ft[11]*t.ft[11]*4,v=t.ft[12]*t.ft[12]*4,b=1/v,B=-t.ft[13]/16,g=t.ft[14],$=n*2**(2-t.ft[15]),k=new Int32Array(C+x+v),y=0,F=0;for(e=0,o=0;e<C+x+v;e++,o++)o>=0&&(o-=$,c=r(s+(15&(g=g>>8|(255&g)<<4))+t.ft[2]-128),u=r(s+(15&g)+t.ft[6]-128)*(1+8e-4*t.ft[7])),i=1,e<C?i=e/C:e>=C+x&&(i=(1-(i=(e-C-x)*b))*3**(B*i)),h=l(y+=c*i**f)*d,h+=w(F+=u*i**M)*m,p&&(h+=(2*Math.random()-1)*p),k[e]=80*h*i|0;return k},a=[i,function(t){return t%1<.5?1:-1},function(t){return t%1*2-1},function(t){var s=t%1*4;return s<2?s-1:3-s}];this.init=function(i){t=i,s=i.wt,n=0,e=i.Mt*i.Ct*(s+1)*2,o=new Int32Array(e)},this.xt=function(){var r,c,u,l,d,f,w,m,M,p,C,x,v,b,B=new Int32Array(e),g=t.vt[n],$=t.Mt,k=t.Ct,y=0,F=0,A=!1,j=[];for(u=0;u<=s;++u)for(w=g.bt[u],l=0;l<k;++l){var E=w?g.c[w-1].f[l]:0;E&&(g.ft[E-1]=g.c[w-1].f[l+k]||0,E<17&&(j=[]));var D=a[g.ft[16]],I=g.ft[17]/512,P=2**(g.ft[18]-9)/$,S=g.ft[19],T=g.ft[20],H=43.23529*g.ft[21]*3.141592/44100,L=1-g.ft[22]/255,N=1e-5*g.ft[23],J=g.ft[24]/32,U=g.ft[25]/512,V=6.283184*2**(g.ft[26]-9)/$,W=g.ft[27]/255,z=g.ft[28]*$&-2;for(C=(u*k+l)*$,d=0;d<4;++d)if(f=w?g.c[w-1].n[l+d*k]:0){j[f]||(j[f]=h(g,f,$));var O=j[f];for(c=0,r=2*C;c<O.length;c++,r+=2)B[r]+=O[c]}for(c=0;c<$;c++)(p=B[m=2*(C+c)])||A?(x=H,S&&(x*=D(P*m)*I+.5),F+=(x=1.5*Math.sin(x))*(v=L*(p-F)-(y+=x*F)),p=3==T?F:1==T?v:y,N&&(p=(p*=N)<1?p>-1?i(.25*p):-1:1,p/=N),A=(p*=J)*p>1e-5,b=p*(1-(M=Math.sin(V*m)*U+.5)),p*=M):b=0,m>=z&&(b+=B[m-z+1]*W,p+=B[m-z]*W),B[m]=0|b,B[m+1]=0|p,o[m]+=0|b,o[m+1]+=0|p}return++n/t.Bt},this.gt=function(t){for(var s=t.createBuffer(2,e/2,44100),n=0;n<2;n++)for(var i=s.getChannelData(n),r=n;r<e;r+=2)i[r>>1]=o[r]/65536;return s},this.$t=function(){var t=44+2*e-8,s=t-36,n=new Uint8Array(44+2*e);n.set([82,73,70,70,255&t,t>>8&255,t>>16&255,t>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&s,s>>8&255,s>>16&255,s>>24&255]);for(var i=0,r=44;i<e;++i){var h=o[i];h=h<-32767?-32767:h>32767?32767:h,n[r++]=255&h,n[r++]=h>>8&255}return n},this.getData=function(t,s){for(var n=2*Math.floor(44100*t),e=new Array(s),i=0;i<2*s;i+=1){var r=n+i;e[i]=t>0&&r<o.length?o[r]/32768:0}return e}};var A={vt:[{ft:[0,214,104,64,0,204,104,0,64,229,4,40,43,51,0,0,0,231,6,1,3,183,15,0,32,232,4,74,6],bt:[1],c:[{n:[144,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,147,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,152],f:[]}]}],Mt:5513,Ct:32,wt:0,Bt:1};const j=.25,E=.15,D=2,I=document.getElementById("canvas"),P=I.getContext("2d"),S={ut:1,kt:2,yt:4,Ft:8,At:16,jt:18,Et:32,Dt:22};let T={It:null,Pt:null,St:null,inputMode:S.ut,Tt:S.ut,Ht:"",Lt:"",Nt:"",Jt:"",Ut:{x:0,y:0},Vt:!1};function H(){const t=document.getElementById("js-hit-ball");t.classList.contains("disabled")||(T.inputMode=S.ut,t.classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 2px ${W.ct}`,document.getElementById("js-place-wall").style.boxShadow=`0 5px ${W.ct}`)}function L(){const t=window.innerWidth/I.width,s=window.innerHeight/I.height;return Math.min(t,s)}T.Wt=document.getElementById("game-ui"),T.title=document.getElementById("title-container"),T.zt=document.getElementById("hole-number"),T.Ot=document.getElementById("canvas-container"),T.Rt=document.getElementById("js-prev"),T.qt=document.getElementById("js-next"),document.getElementById("js-hit-ball").addEventListener("click",(t=>{t.preventDefault(),H();var s=new F;s.init(A);var n=!1;setInterval((function(){if(!n&&(n=s.xt()>=1)){var t=s.$t();document.createElement("audio").src=URL.createObjectURL(new Blob([t],{type:"audio/wav"}))}}),0)})),document.getElementById("js-place-wall").addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||(T.inputMode=S.kt,t.currentTarget.classList.add("active"),document.getElementById("js-hit-ball").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 5px ${W.ct}`,document.getElementById("js-place-wall").style.boxShadow=`0 2px ${W.ct}`)})),document.getElementById("js-reset").addEventListener("click",(t=>{t.preventDefault(),pt(),ct()})),T.Rt.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||at(U)})),T.qt.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||at(U+2)}));const N=new i(0,0,0,0,!0,!0),J=[new w,new m,new M,new p,new C,new x,new v,new b,new B,new g,new $,new k,new y];let U=0,V=(U+1)%J.length,W=J[U];W.reset();let z=J[V];const O=[],R=(Math.hypot(I.width,I.height),new class{constructor(t,s,n,e){this.canvas=t,this.Qt=s,this.Gt=n,this.Kt=e,this.Xt={x:0,y:0},this.Yt={x:0,y:0},this.Zt={x:0,y:0},this._t={x:0,y:0},this.pressed=!1,this.boundingRect=this.canvas.getBoundingClientRect(),this.ts(this.canvas)}resize(){this.boundingRect=this.canvas.getBoundingClientRect()}ts(t){t.addEventListener("mousedown",this.ss.bind(this),{capture:!0,passive:!1}),window.addEventListener("mousemove",this.ns.bind(this),{capture:!0,passive:!1}),window.addEventListener("mouseup",this.es.bind(this),{capture:!0,passive:!1}),t.addEventListener("touchstart",this.os.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchend",this.es.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchmove",this.rs.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.es.bind(this),{capture:!0,passive:!1})}hs(){this.Zt.x=(this.Yt.x-this.Xt.x)/t,this.Zt.y=(this.Xt.y-this.Yt.y)/t}cs(t){const s=canvas.getBoundingClientRect();let n,e;if(t instanceof MouseEvent)n=t.clientX-s.left,e=t.clientY-s.top;else if(t instanceof TouchEvent){const t=event.touches[0];n=t.clientX-s.left,e=t.clientY-s.top}n*=canvas.width/s.width,e*=canvas.height/s.height,this._t.x=n,this._t.y=e}us(t){let s=0;return t instanceof MouseEvent?s=t.clientX:t instanceof TouchEvent&&(s=t.changedTouches[0].clientX),(s-this.boundingRect.left)*(this.canvas.width/this.boundingRect.width)}ls(t){let s=0;return t instanceof MouseEvent?s=t.clientY:t instanceof TouchEvent&&(s=t.changedTouches[0].clientY),(s-this.boundingRect.top)*(this.canvas.height/this.boundingRect.height)}os(t){t.preventDefault(),this.cs(t),this.ds(this.us(t),this.ls(t))}rs(t){t.preventDefault(),this.cs(t),this.fs(this.us(t),this.ls(t)),console.log(this.pressed)}ss(t){t.preventDefault(),this.cs(t),this.ds(this.us(t),this.ls(t))}ns(t){t.preventDefault(),this.cs(t),this.fs(this.us(t),this.ls(t))}ds(t,s){this.pressed=!0,this.Xt.x=t,this.Xt.y=s,this.Yt.x=t,this.Yt.y=s,this.hs(),this.Qt()}fs(s,n){if(!this.pressed)return;const e=s-this.Xt.x,o=n-this.Xt.y,i=Math.hypot(e,o);if(this.Yt.x=s,this.Yt.y=n,i>t){const s=e/i*t,n=o/i*t;this.Yt.x=this.Xt.x+s,this.Yt.y=this.Xt.y+n}this.hs(),this.Kt()}es(t){0!=this.pressed&&(t.preventDefault(),t.stopPropagation(),this.pressed=!1,this.Xt.x=0,this.Xt.y=0,this.Yt.x=0,this.Yt.y=0,this.hs(),this.Gt())}draw(t){this.pressed&&(this.ws(t),this.Ms(t))}ws(s){s.strokeStyle="#FFD700",s.lineWidth=6,s.beginPath(),s.arc(this.Xt.x,this.Xt.y,t,0,2*Math.PI),s.stroke(),s.closePath()}Ms(t){t.strokeStyle="#F0E68C",t.lineWidth=6,t.beginPath(),t.arc(this.Yt.x,this.Yt.y,125,0,2*Math.PI),t.fillStyle="#F0E68C",t.globalAlpha=.5,t.fill(),t.globalAlpha=1,t.closePath()}}(I,(function(){if(T.Ut.x=R._t.x,T.Ut.y=R._t.y,T.Wt.innerHTML=T.Jt,T.inputMode!==S.Et)for(let t=0;t<W.et.length;t++){const s=W.et[t];if(!s.v)continue;const n=s.L(R._t.x,R._t.y);if(s.U(R._t.x,R._t.y))return void W.et.splice(t,1);if(n)return T.Tt=T.inputMode,T.inputMode=S.yt,T.Pt=s,void(T.St=n);s.T(R._t.x,R._t.y)&&(T.Tt=T.inputMode,T.inputMode=S.Ft,T.Pt=s,T.St=null)}T.inputMode===S.ut?function(){O.length=0;for(let t=0;t<W.nt.length;t++){const s=W.nt[t];O.push(new r(s.l.x,s.l.y,R.Zt.x,R.Zt.y))}}():T.inputMode&S.jt&&q.k.push({x:R._t.x,y:R._t.y})}),(function(){T.inputMode===S.ut?function(){if(0===O.length)return;for(let t=0;t<W.nt.length;t++){const s=W.nt[t];if(s.Z)continue;const n=O[t],e=Math.cos(n.angle)*n.O*.05,o=Math.sin(n.angle)*n.O*.05;s.m.x=e,s.m.y=o}t=O[0].angle,s=O[0].O,function(t,s){const n=document.styleSheets[0],e="shake-animation",o="shake",i=.1*s,r=.75;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].name===e){n.deleteRule(t);break}const h=-Math.cos(t)*i,a=Math.sin(t)*i,c=`\n    @keyframes ${e} {\n      0% { transform: translate(${h}px, ${a}px); }\n      60% { transform: translate(${-.3*h}px, ${-.3*a}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;n.insertRule(c,n.cssRules.length);let u=-1;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].selectorText===`.${o}`){u=t;break}const l=`\n    .${o} {\n      animation: ${e} ${r}s ease-out;\n    }\n  `;u>=0?(n.deleteRule(u),n.insertRule(l,u)):n.insertRule(l,n.cssRules.length)}(t,s),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3),O.length=0,W.ut=!0,T.inputMode=S.Et,I.style.cursor="not-allowed",document.getElementById("js-hit-ball").classList.add("disabled"),document.getElementById("js-place-wall").classList.add("disabled"),T.qt.classList.add("disabled"),T.Rt.classList.add("disabled");var t,s;const n=document.getElementById("js-reset");n.classList.remove("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{"js-reset"!==t.id&&(t.style.backgroundColor=null,t.style.boxShadow=null)})),n.style.backgroundColor=W.ht,n.style.boxShadow=`0 5px ${W.ct}`,n.style.color=Mt(...mt(W.ht)),T.Ot.style.transform=null,T.Nt=T.Lt}():T.inputMode&S.jt?function(){if(0===q.k.length)return;if(_(q.k[0].x,q.k[0].y,R._t.x,R._t.y)<D&&1===q.k.length)return;if(q.k.push({x:R._t.x,y:R._t.y}),q.k.length<2)return;W.et.push(new i(q.k[0].x,q.k[0].y,q.k[1].x,q.k[1].y,!0)),q=new h}():(T.inputMode===S.yt||T.inputMode===S.Ft)&&(T.inputMode=T.Tt,T.Pt=null,T.St=null);T.Wt.innerHTML=T.Jt}),(function(){T.inputMode===S.ut?function(){if(0===O.length)return;let t=1;for(let s=0;s<O.length;s++){const n=O[s],e=W.nt[s];if(e.Z)continue;t=e._;const o=t+G(R),i=_(R.Yt.x,R.Yt.y,R.Xt.x,R.Xt.y);n.angle=o,n.O=i}const s=O[0];T.Lt=`${(180*s.angle/Math.PI).toFixed(0)}° | ${s.O.toFixed(0)}`;let n="";T.Nt.length>0&&(n=`<div class="prev-ui-text">${T.Nt}</div>`);n+=`<div>${T.Lt}</div>`,T.Wt.innerHTML=n,function(t,s){const n=-Math.cos(s)*t*.1,e=Math.sin(s)*t*.1;T.Ot.style.transform=`translate(${n}px, ${e}px)`}(s.O,s.angle)}():T.inputMode===S.yt?function(){T.St&&(T.St===T.Pt.t?T.Pt.B(R._t.x,R._t.y,T.Pt.o.x,T.Pt.o.y):T.Pt.B(T.Pt.t.x,T.Pt.t.y,R._t.x,R._t.y));Q(T.Pt)}():T.inputMode===S.Ft?function(){if(T.Pt){const t=R._t.x-T.Ut.x,s=R._t.y-T.Ut.y;T.Pt.B(T.Pt.t.x+t,T.Pt.t.y+s,T.Pt.o.x+t,T.Pt.o.y+s),T.Ut.x=R._t.x,T.Ut.y=R._t.y}Q(T.Pt)}():T.inputMode===S.kt&&q.k.length>0&&Q(q)})));let q=new h;function Q(t){if(1===t.k.length){const s=R._t.x-t.k[0].x,n=R._t.y-t.k[0].y,e=(180*Math.atan2(n,s)/Math.PI+360)%360;T.Wt.innerText=`${e.toFixed(0)}°`,-0===e&&(T.Wt.innerText="0")}else{const s=t.k[1].x-t.k[0].x,n=t.k[1].y-t.k[0].y,e=(180*Math.atan2(n,s)/Math.PI+360)%360;T.Wt.innerText=`${e.toFixed(0)}°`,-0===e&&(T.Wt.innerText="0")}}function G(t){return Math.atan2(-(t.Yt.y-t.Xt.y),-(t.Yt.x-t.Xt.x))}function K(t){t.l.x+t.X<0&&(t.l.x=I.width-t.X),t.l.x-t.X>I.width&&(t.l.x=t.X),t.l.y+t.X<0&&(t.l.y=I.height-t.X),t.l.y-t.X>I.height&&(t.l.y=t.X)}function X(t,s){const n=t.l.x-s.l.x,e=t.l.y-s.l.y;return Math.sqrt(n*n+e*e)<t.X+s.X}function Y(t,s){const n=t.l.x-s.l.x,e=t.l.y-s.l.y,o=Math.sqrt(n*n+e*e);if(o>t.X+s.X)return 0;const i=t.X+s.X;return(i-o)/i}function Z(t,s){const n=s.l.x-t.l.x,e=s.l.y-t.l.y,o=Math.sqrt(n*n+e*e);if(0===o)return;const i=t.X+s.X-o,r=n/o,h=e/o;i>0&&(t.l.x-=i*r*(s.K/(t.K+s.K)),t.l.y-=i*h*(s.K/(t.K+s.K)),s.l.x+=i*r*(t.K/(t.K+s.K)),s.l.y+=i*h*(t.K/(t.K+s.K)));const a=(s.m.x-t.m.x)*r+(s.m.y-t.m.y)*h;if(a>0)return;const c=-2*a/(1/t.K+1/s.K);t.m.x-=c/t.K*r,t.m.y-=c/t.K*h,s.m.x+=c/s.K*r,s.m.y+=c/s.K*h}function _(t,s,n,e){return Math.sqrt(Math.pow(n-t,2)+Math.pow(e-s,2))}function tt(t){t.l.x-t.X<0&&st(t,t.l.x+I.width,t.l.y),t.l.x+t.X>I.width&&st(t,t.l.x-I.width,t.l.y),t.l.y-t.X<0&&st(t,t.l.x,t.l.y+I.height),t.l.y+t.X>I.height&&st(t,t.l.x,t.l.y-I.height),st(t,t.l.x,t.l.y)}function st(t,s,n){P.beginPath(),P.arc(s,n,t.X,0,2*Math.PI),P.fillStyle=`rgba(255, 255, 255, ${t.alpha})`,P.strokeStyle=`rgba(0, 0, 0, ${t.alpha})`,P.lineWidth=5,P.setLineDash([]),P.closePath(),P.stroke(),P.fill()}function nt(t){P.beginPath(),P.arc(t.l.x,t.l.y,t.X,0,2*Math.PI),P.fillStyle=t.color,P.fill(),P.closePath()}function et(){P.clearRect(0,0,I.width,I.height),function(t){T.Ot.style.backgroundColor=t.backgroundColor,T.zt.style.color=t.rt,t.draw(P);for(let s=0;s<t.ot.length;s++)nt(t.ot[s]);for(let s=0;s<t.et.length;s++)t.et[s].draw(P);T.inputMode&S.jt&&q.k.length>0&&(N.B(q.k[0].x,q.k[0].y,R._t.x,R._t.y),N.kt=T.inputMode===S.kt,N.draw(P));for(let s=0;s<t.nt.length;s++)tt(t.nt[s])}(W);for(let t=0;t<O.length;t++){const s=O[t];W.nt[t].Z||ot(s)}}function ot(t){it(P,t.W.x,t.W.y,t.q.x,t.q.y);const s=Math.abs(t.W.x-t.q.x),n=Math.abs(t.W.y-t.q.y);let e=t.W.x,o=t.q.x,i=t.W.y,r=t.q.y;t.q.x<0&&(e=t.W.x+I.width,o=e-s),t.q.x>I.width&&(e=t.W.x-I.width,o=e+s),t.q.y<0&&(i=t.W.y+I.height,r=i-n),t.q.y>I.height&&(i=t.W.y-I.height,r=i+n),it(P,e,i,o,r)}function it(t,s,n,e,o){const i=_(s,n,e,o);var r=Math.min(i,20),h=Math.atan2(o-n,e-s);t.fillStyle="#fff",t.strokeStyle="#000",t.lineWidth=5,t.beginPath(),t.moveTo(s,n),t.lineTo(e-r/2*Math.cos(h),o-r/2*Math.sin(h)),t.stroke(),t.strokeStyle="#fff",t.fillStyle="#fff",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(e,o),t.lineTo(e-r*Math.cos(h-Math.PI/6),o-r*Math.sin(h-Math.PI/6)),t.lineTo(e-r*Math.cos(h+Math.PI/6),o-r*Math.sin(h+Math.PI/6)),t.closePath(),t.fill(),t.lineWidth=3,t.strokeStyle="#000",t.stroke(),t.fillStyle="#fff",t.fill(),t.beginPath(),t.moveTo(s,n),t.lineTo(e-r/2*Math.cos(h),o-r/2*Math.sin(h)),t.strokeStyle="#fff",t.lineWidth=2,t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(s,n,5,0,2*Math.PI),t.fill(),t.closePath()}function rt(t){W.update();for(let s=0;s<W.nt.length;s++){const n=W.nt[s],e=O[s];n.update(t);for(let t=0;t<W.nt.length;t++){if(s===t)continue;const e=W.nt[t];n.Z||e.Z||n.alpha<.5||X(n,e)&&Z(n,e)}e&&(e.W.x=n.l.x,e.W.y=n.l.y),T.inputMode===S.Et&&(K(n),ut(n),ht(n))}if(W.lt&&!T.Vt&&function(){const t=T.Ot;T.Vt=!0,t.classList.add("offscreen-right"),t.style.transition="transform 1s ease-in-out",setTimeout((()=>{at(U+2),t.classList.remove("offscreen-right"),t.classList.add("offscreen-left"),t.style.transition="none",setTimeout((()=>{t.style.transition="transform 1s ease-in-out",t.classList.remove("offscreen-left"),t.classList.add("onscreen"),setTimeout((()=>{t.style.transition="none",T.Vt=!1,t.classList.remove("onscreen")}),1e3)}),50)}),1e3)}(),W.ut)for(let t=0;t<W.nt.length;t++){const s=W.nt[t];s.Z||(null===T.It&&(T.It=Date.now()),_(s.m.x,s.m.y,0,0)<E?null===T.It&&(T.It=Date.now()):T.It=null,null!==T.It&&Date.now()-T.It>1e3&&(pt(),ct()))}for(let t=0;t<W.et.length;t++){const s=W.et[t];s.C&&s.update()}}function ht(t){for(let s=0;s<W.et.length;s++){const n=W.et[s];if(n.C)continue;const e=u(t,n);if(e){const s=.5*Math.hypot(t.m.x,t.m.y);n.I(s),Ct(Math.random()*Math.PI*2),t.l.x+=e.G.x,t.l.y+=e.G.y;const o=e.axis,i=t.m.x*o.x+t.m.y*o.y;t.m.x-=2*i*o.x,t.m.y-=2*i*o.y}}}function at(t){U=(t-1)%J.length;const s=(U+1)%J.length;W=J[U],z=J[s],W.reset(),location.hash=`#/${U+1}`,T.Nt="",T.zt.innerText=`${U+1}`,ct(),pt()}function ct(){document.getElementById("js-hit-ball").classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-reset").classList.remove("active"),document.getElementById("js-hit-ball").classList.remove("disabled"),document.getElementById("js-place-wall").classList.remove("disabled");document.getElementById("js-reset").classList.add("disabled"),T.Rt.classList.remove("disabled"),T.qt.classList.remove("disabled"),0===U&&T.Rt.classList.add("disabled"),U===J.length-1&&T.qt.classList.add("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{let s=W.ht,n=`0 5px ${W.ct}`,e=Mt(...mt(W.ht));t.classList.contains("disabled")?(t.style.backgroundColor=null,t.style.boxShadow=null,t.style.color=null):(t.style.backgroundColor=s,t.style.boxShadow=n,t.style.color=e)})),T.It=null,T.Pt=null,T.St=null,T.inputMode=S.ut,I.style.cursor="crosshair"}function ut(t){t.st=!1;for(let s=0;s<W.ot.length;s++){const n=W.ot[s],e=n.l.x-t.l.x,o=n.l.y-t.l.y,i=Math.sqrt(e*e+o*o),r=Math.sqrt(t.m.x*t.m.x+t.m.y*t.m.y);if(i<=n.X-t.X&&r<j)t.Z=n,t.st=!0;else if(X(t,n)){const s=.2*Y(t,n),r=s*e/i,h=s*o/i;t.m.x+=r,t.m.y+=h,t.alpha-=.01,t.alpha=Math.max(t.alpha,0),t.st=!0}}t.st||(t.alpha=1)}const lt=1e3/60;let dt=0,ft=0;function wt(){const t=window.location.hash.substring(2);return 0===t.length?1:parseInt(t,10)}function mt(t){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return s?[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]:null}function Mt(t,s,n){const e=function(t,s,n){return.299*t+.587*s+.114*n}(t,s,n);return e>128?"black":"white"}function pt(){T.Lt="",T.Jt=`${U+1} / ${J.length}`,T.Wt.innerHTML=T.Jt,T.Wt.style.color=Mt(...mt(W.ht)),T.Wt.style.backgroundColor=W.ht,W.reset()}function Ct(t){!function(t){const s=document.styleSheets[0],n="shake-animation",e="shake";for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].name===n){s.deleteRule(t);break}const o=1*Math.cos(t),i=1*-Math.sin(t);let r=`\n    @keyframes ${n} {\n      0% { transform: translate(0, 0); }\n      10% { transform: translate(${-10*o}px, ${10*i}px); }\n      20% { transform: translate(${10*o}px, ${-10*i}px); }\n      30% { transform: translate(${-8*o}px, ${8*i}px); }\n      40% { transform: translate(${8*o}px, ${-8*i}px); }\n      50% { transform: translate(${-5*o}px, ${5*i}px); }\n      60% { transform: translate(${5*o}px, ${-5*i}px); }\n      70% { transform: translate(${-3*o}px, ${3*i}px); }\n      80% { transform: translate(${3*o}px, ${-3*i}px); }\n      90% { transform: translate(${-1*o}px, ${i}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;s.insertRule(r,s.cssRules.length);let h=-1;for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].selectorText===`.${e}`){h=t;break}const a=`\n    .${e} {\n      animation: ${n} 1s ease-out;\n    }\n  `;h>=0?(s.deleteRule(h),s.insertRule(a,h)):s.insertRule(a,s.cssRules.length)}(t),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3)}!function t(s){const n=s-ft;for(ft=s,dt+=n;dt>=lt;)rt(lt),dt-=lt;et(),requestAnimationFrame(t)}(0),document.addEventListener("DOMContentLoaded",(()=>{at(wt()),H()})),window.addEventListener("hashchange",(()=>{at(wt())})),document.body.addEventListener("click",(()=>{T.title.style.opacity=0})),document.body.addEventListener("touchstart",(()=>{T.title.style.opacity=0})),window.addEventListener("mousemove",(t=>{const s=I.getBoundingClientRect();let n="crosshair";for(let e=0;e<W.et.length;e++){let o=t.clientX-s.left,i=t.clientY-s.top;const r=W.et[e];o/=L(),i/=L(),r.U(o,i)?n="pointer":(r.L(o,i)||r.T(o,i))&&(n="grab")}T.inputMode===S.Et&&(n="not-allowed"),I.style.cursor=n}))})();