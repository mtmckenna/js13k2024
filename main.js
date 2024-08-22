(()=>{"use strict";const t=250;class s{constructor(t,s,n){this.t=t,this.i=s,this.color=n,this.o=[],this.h()}h(){const{t,i:s,color:i}=this,o=Math.atan2(s.y-t.y,s.x-t.x),h=Math.hypot(s.x-t.x,s.y-t.y);for(let s=0;s<Math.ceil(h/e);s++){const h=t.x+Math.cos(o)*s*e,r=t.y+Math.sin(o)*s*e;this.o.push(new n(h,r,i,o))}this.angle=o}reset(){this.o=[],this.h()}update(){for(let t=0;t<this.o.length;t++)this.o[t].u<=0||this.o[t].update()}draw(t){for(let s=0;s<this.o.length;s++)this.o[s].u<=0||this.o[s].draw(t)}}class n{constructor(t,s,n,e){this.color=n,this.l={x:t,y:s},this.m={x:0,y:0},this.color=n,this.u=100,this.angle=e}update(){this.l.x+=this.m.x,this.l.y+=this.m.y,this.u--}draw(t){this.left<0||(this.u<75?t.fillStyle=`rgba(${this.color}, ${this.u/75})`:t.fillStyle=`rgba(${this.color}, 1)`,t.beginPath(),t.rect(this.l.x-e/2,this.l.y,e,e),t.fill(),t.closePath())}}const e=20,i="255,255,255";class o{constructor(t,n,o,h,r=!0,a=!0){this.width=e,this.l={x:0,y:0},this.t={x:0,y:0},this.i={x:0,y:0},this.M={x:0,y:0},this.p={x:0,y:0},this.C=!1,this.v=r,this.color=r?i:"0,0,0",this.B(t,n,o,h),this.$=new s(this.t,this.i,this.color)}B(t,s,n,e){this.t.x=t,this.t.y=s,this.i.x=n,this.i.y=e;const{t:i,i:o}=this;this.l.x=(i.x+o.x)/2,this.l.y=(i.y+o.y)/2,this.angle=Math.atan2(o.y-i.y,o.x-i.x)-Math.PI/2,this.k=this.F(i,o,this.width),this.A=this.j();const h=6*Math.sin(this.angle),r=6*-Math.cos(this.angle);this.M.x=this.t.x-h,this.M.y=this.t.y-r,this.p.x=this.i.x+h,this.p.y=this.i.y+r}update(){this.C&&this.$.update()}rotate(t,s,n){const e=this.t.x,i=this.t.y,o=this.i.x,h=this.i.y,r=Math.cos(t),a=Math.sin(t),c=r*(e-s)-a*(i-n)+s,u=a*(e-s)+r*(i-n)+n,l=r*(o-s)-a*(h-n)+s,d=a*(o-s)+r*(h-n)+n;this.B(c,u,l,d)}D(){}reset(){this.C=!1,this.$.reset()}I(t){this.C=!0,this.$=new s(this.t,this.i,this.color),this.$.o.forEach((s=>{const n=Math.random()*Math.PI*2;s.m.x=t*(2*Math.random()-1)*Math.cos(n),s.m.y=t*(2*Math.random()-1)*Math.sin(n)}))}F(t,s,n){const e=n/2,i=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2)/2,o=this.angle;return[{x:-e,y:-i},{x:-e,y:i},{x:e,y:i},{x:e,y:-i}].map((t=>({x:this.l.x+(t.x*Math.cos(o)-t.y*Math.sin(o)),y:this.l.y+(t.x*Math.sin(o)+t.y*Math.cos(o))})))}j(){const t=[],s=this.k,n=s.length;for(let e=0;e<n;e++){const i=(e+1)%n,o=s[i].x-s[e].x,h=s[i].y-s[e].y,r=Math.sqrt(o*o+h*h),a={x:-h/r,y:o/r};t.push(a)}return t}P(t){let s=Number.POSITIVE_INFINITY,n=-Number.POSITIVE_INFINITY;for(let e=0;e<this.k.length;e++){let i=this.k[e].x*t.x+this.k[e].y*t.y;s=Math.min(s,i),n=Math.max(n,i)}return{min:s,max:n}}S(t,s,n,e,i){const o=t-n,h=s-e;return o*o+h*h<=i*i}T(t,s){return this.H(t,s)}H(t,s){let n=!1;const e=this.k,i=e.length;for(let o=0,h=i-1;o<i;h=o++){const i=e[o].x,r=e[o].y,a=e[h].x,c=e[h].y;r>s!=c>s&&t<(a-i)*(s-r)/(c-r)+i&&(n=!n)}return n}L(t,s){return this.N(t,s)?this.t:this.J(t,s)?this.i:null}N(t,s){return this.S(t,s,this.M.x,this.M.y,15)}J(t,s){return this.S(t,s,this.p.x,this.p.y,15)}U(t,s){return this.v?this.S(t,s,this.l.x,this.l.y,15):null}draw(t){this.C?this.$.draw(t):this.V(t)}V(t){t.beginPath(),t.setLineDash([]),t.fillStyle=`rgba(${this.color}, 1.0)`,t.strokeStyle="#000",t.lineWidth=2,t.moveTo(this.k[0].x,this.k[0].y);for(let s=1;s<this.k.length;s++)t.lineTo(this.k[s].x,this.k[s].y);t.closePath(),t.fill(),t.stroke(),this.color===i&&(t.beginPath(),t.lineWidth=2,t.strokeStyle="red",t.moveTo(this.l.x-5,this.l.y-5),t.lineTo(this.l.x+5,this.l.y+5),t.moveTo(this.l.x-5,this.l.y+5),t.lineTo(this.l.x+5,this.l.y-5),t.stroke(),t.closePath(),t.beginPath(),t.fillStyle="rgba(255, 0, 0, 1.0)",t.arc(this.M.x,this.M.y,4,0,2*Math.PI),t.arc(this.p.x,this.p.y,4,0,2*Math.PI),t.fill())}}class h{constructor(t=0,s=0,n=0,e=1){this.W={x:t,y:s},this.angle=n,this.O=e,this.R={x:t,y:s}}get q(){return this.R.x=this.W.x+this.O*Math.cos(this.angle),this.R.y=this.W.y+this.O*Math.sin(this.angle),this.R}}class r{constructor(){this.k=[]}}function a(t,s){return t.max>s.min&&s.max>t.min}function c(t,s){return Math.min(t.max-s.min,s.max-t.min)}function u(t,s){let n=Number.POSITIVE_INFINITY,e=null,i=null;for(let o=0;o<s.A.length;o++){const h=s.A[o],r=s.P(h),u=t.P(h);if(!a(r,u))return null;{const t=c(r,u);t<n&&(n=t,e=h,i=s.k[o])}}for(const o of s.k){const h={x:t.l.x-o.x,y:t.l.y-o.y},r=Math.sqrt(h.x*h.x+h.y*h.y);if(0===r)continue;h.x/=r,h.y/=r;const u=s.P(h),l=t.P(h);if(!a(u,l))return null;{const t=c(u,l);t<n&&(n=t,e=h,i=o)}}if(n===Number.POSITIVE_INFINITY)return null;let o=t.l.x-i.x,h=t.l.y-i.y;return o*e.x+h*e.y<0&&(e.x=-e.x,e.y=-e.y),{G:{x:e.x*n,y:e.y*n},axis:e}}class l{K=1;X=50;constructor(t,s,n=Math.PI,e=8,i=!0){if(this.Y=e,this.color="#fff",this.l={x:t,y:s},this.Z={x:t,y:s},this.m={x:0,y:0},this._=null,this.K=e,this.tt=n,this.l.x=t,this.l.y=s,this.alpha=1,this.st=0,this.nt=[],this.et=0,this.it=0,this.ot=!1,i)for(let i=0;i<this.X;i++){const i=new l(t,s,n,e,!1);i.alpha=0,this.nt.push(i)}}P(t){const s=this.l.x*t.x+this.l.y*t.y;return{min:s-this.Y,max:s+this.Y}}update(){this.et++;const t=.98-this.st;if(this.m.x*=t,this.m.y*=t,Math.abs(this.m.x)<.01&&(this.m.x=0),Math.abs(this.m.y)<.01&&(this.m.y=0),this.l.x+=this.m.x,this.l.y+=this.m.y,this.et%1==0){const t=this.nt[this.it];t.l.x=this.l.x,t.l.y=this.l.y,t.alpha=.25,this.it=(this.it+1)%this.X}for(let t=0;t<this.X;t++){this.nt[t].alpha-=.009}}reset(){this.l.x=this.Z.x,this.l.y=this.Z.y,this._=null,this.m.x=0,this.m.y=0,this.alpha=1,this.et=0,this.ot=!1;for(let t=0;t<this.X;t++)this.nt[t]=new l(this.Z.x,this.Z.y,this.tt,this.Y),this.nt[t].alpha=0}}class d{_=null;constructor(t,s,n=15,e="black"){this.l={x:t,y:s},this.Y=n,this.color=e}}class f{ht=[];rt=[];ct=[];number=0;ut=!1;backgroundColor="red";lt="red";dt="red";ft="red";width=500;height=500;ot=!1;reset(){this.ot=!1,this.ut=!1,this.ht.forEach((t=>{t.reset()})),this.rt.forEach((t=>{t.reset()})),document.getElementById("js-place-wall").classList.remove("disabled"),document.getElementById("js-place-wall").setAttribute("disabled",!1),document.body.style.backgroundColor=this.lt;const t=document.getElementById("js-place-wall");t.style.display="block",t.classList.remove("jiggle"),this.number<5?t.style.display="none":5===this.number&&t.classList.add("jiggle")}get wt(){for(let t=0;t<this.ht.length;t++)if(!this.ht[t]._)return!1;return!0}update(){}draw(t){}}class w extends f{backgroundColor="#B4E7CE";lt="#59A96A";dt="#9BDEAC";ft="#474A2C";number=1;constructor(){super(),this.ct=[new d(400,250)],this.ht=[new l(250,250)]}}class m extends f{backgroundColor="#BB8A89";lt="#977390";dt="#AC7B7D";ft="#785589";number=2;constructor(){super(),this.ct=[new d(400,125),new d(400,375)],this.ht=[new l(250,125),new l(250,375)]}}class M extends f{backgroundColor="#F4F4F9";lt="#586F7C";dt="#B8DBD9";ft="#2F4550";number=3;constructor(){super(),this.ct=[new d(100,125),new d(400,375)],this.ht=[new l(250,125),new l(250,375,0)]}}class p extends f{backgroundColor="#AFB3F7";lt="#7A93AC";dt="#92BCEA";ft="#617073";number=4;constructor(){super(),this.ct=[new d(400,125),new d(400,375)],this.ht=[new l(50,125),new l(250,375,0)],this.rt=[new o(100,50,100,200,!1)]}}class C extends f{backgroundColor="#FEC0AA";lt="#84732B";dt="#EC4E20";ft="#574F2A";number=5;constructor(){super(),this.ct=[new d(400,125),new d(400,375)],this.ht=[new l(150,125),new l(250,375,0)],this.rt=[new o(25,0,25,500,!1),new o(475,0,475,500,!1)]}draw(t){t.beginPath(),t.setLineDash([5,15]),t.strokeStyle="black",t.lineWidth=2,t.rect(100,75,20,100),t.stroke()}}class x extends f{backgroundColor="#F2F6D0";lt="#D9D2B6";dt="#D0E1D4";ft="#71697A";number=6;constructor(){super(),this.ct=[new d(250,150),new d(100,350),new d(400,350)];const t=[{x:100,y:200},{x:400,y:200},{x:250,y:400}],s=(t[0].x+t[1].x+t[2].x)/3,n=(t[0].y+t[1].y+t[2].y)/3,e=(t,e)=>Math.atan2(n-e,s-t);this.ht=[new l(t[0].x,t[0].y,e(100,200)),new l(t[1].x,t[1].y,e(400,200)),new l(t[2].x,t[2].y,e(250,400))],this.rt=[]}}class v extends f{backgroundColor="#FAA275";lt="#CE6A85";dt="#FF8C61";ft="#985277";number=7;constructor(){super(),this.ct=[new d(150,400),new d(250,400),new d(350,400)],this.ht=[new l(150,150),new l(250,200),new l(350,250)],this.rt=[]}}class b extends f{backgroundColor="#BEEF9E";lt="#828C51";dt="#A6C36F";ft="#335145";number=8;constructor(){super(),this.ct=[new d(250,250)];this.ht=[new l(400,250,0),new l(250+150*Math.cos(Math.PI),250+150*Math.sin(Math.PI),Math.PI)]}}class B extends f{backgroundColor="#CF9893";lt="#A96DA3";dt="#BC7C9C";ft="#3B3B58";number=9;constructor(){super(),this.ct=[new d(250,300),new d(200,250)],this.ht=[new l(250,200,-Math.PI),new l(300,250,-Math.PI/2)],this.rt=[new o(200,200,300,300,!1),new o(300,200,200,300,!1)]}}class g extends f{backgroundColor="#FFA9E7";lt="#7F2CCB";dt="#FF84E8";ft="#414361";number=10;constructor(){super(),this.ct=[new d(200,200),new d(400,400)],this.ht=[new l(250,250,-Math.PI),new l(300,300,-Math.PI/2)],this.rt=[new o(100,200,200,100,!1)]}}class $ extends f{backgroundColor="#93B5C6";lt="#F0CF65";dt="#D7816A";ft="#BD4F6C";number=11;constructor(){super(),this.ct=[new d(100,100),new d(250,100),new d(400,100)],this.ht=[new l(250,200,Math.PI),new l(175,325,Math.PI/4),new l(325,325,-Math.PI/4)],this.rt=[]}}class k extends f{backgroundColor="#524948";lt="#7CB4B8";dt="#70F8BA";ft="#57467B";number=12;constructor(){super(),this.ct=[new d(200,200),new d(300,200)],this.ht=[new l(100,250,Math.PI),new l(400,250,Math.PI/3)],this.rt=[new o(125,125,175,300,!1),new o(375,125,325,300,!1),new o(125,125,175,150,!1),new o(375,125,325,150,!1),new o(175,150,325,150,!1),new o(175,300,325,300,!1),new o(200,250,200,275,!1),new o(300,250,300,275,!1),new o(200,275,300,275,!1)]}}class y extends f{backgroundColor="#6A8D73";lt="#E4FFE1";dt="#FFE8C2";ft="#F0A868";number=13;constructor(){super(),this.ct=[new d(250,250)],this.ht=[new l(250,100,Math.PI)];const t=new o(175,150,175,350,!1),s=new o(325,150,325,350,!1),n=new o(185,160,315,160,!1),e=new o(185,340,315,340,!1);this.rt=[t,s,n,e],this.Mt=[t,s,n,e]}update(){super.update();for(let t=0;t<this.Mt.length;t++){this.Mt[t].rotate(.01,250,250)}}}const F=function(){var t,s,n,e,i,o=function(t){return Math.sin(6.283184*t)},h=function(t){return.003959503758*2**((t-128)/12)},r=function(t,s,n){var e,i,o,r,c,u,l=a[t.Ct[0]],d=t.Ct[1],f=t.Ct[3]/32,w=a[t.Ct[4]],m=t.Ct[5],M=t.Ct[8]/32,p=t.Ct[9],C=t.Ct[10]*t.Ct[10]*4,x=t.Ct[11]*t.Ct[11]*4,v=t.Ct[12]*t.Ct[12]*4,b=1/v,B=-t.Ct[13]/16,g=t.Ct[14],$=n*2**(2-t.Ct[15]),k=new Int32Array(C+x+v),y=0,F=0;for(e=0,i=0;e<C+x+v;e++,i++)i>=0&&(i-=$,c=h(s+(15&(g=g>>8|(255&g)<<4))+t.Ct[2]-128),u=h(s+(15&g)+t.Ct[6]-128)*(1+8e-4*t.Ct[7])),o=1,e<C?o=e/C:e>=C+x&&(o=(1-(o=(e-C-x)*b))*3**(B*o)),r=l(y+=c*o**f)*d,r+=w(F+=u*o**M)*m,p&&(r+=(2*Math.random()-1)*p),k[e]=80*r*o|0;return k},a=[o,function(t){return t%1<.5?1:-1},function(t){return t%1*2-1},function(t){var s=t%1*4;return s<2?s-1:3-s}];this.init=function(o){t=o,s=o.xt,n=0,e=o.vt*o.bt*(s+1)*2,i=new Int32Array(e)},this.Bt=function(){var h,c,u,l,d,f,w,m,M,p,C,x,v,b,B=new Int32Array(e),g=t.gt[n],$=t.vt,k=t.bt,y=0,F=0,A=!1,j=[];for(u=0;u<=s;++u)for(w=g.$t[u],l=0;l<k;++l){var E=w?g.c[w-1].f[l]:0;E&&(g.Ct[E-1]=g.c[w-1].f[l+k]||0,E<17&&(j=[]));var D=a[g.Ct[16]],I=g.Ct[17]/512,P=2**(g.Ct[18]-9)/$,S=g.Ct[19],T=g.Ct[20],H=43.23529*g.Ct[21]*3.141592/44100,L=1-g.Ct[22]/255,N=1e-5*g.Ct[23],J=g.Ct[24]/32,U=g.Ct[25]/512,V=6.283184*2**(g.Ct[26]-9)/$,W=g.Ct[27]/255,z=g.Ct[28]*$&-2;for(C=(u*k+l)*$,d=0;d<4;++d)if(f=w?g.c[w-1].n[l+d*k]:0){j[f]||(j[f]=r(g,f,$));var O=j[f];for(c=0,h=2*C;c<O.length;c++,h+=2)B[h]+=O[c]}for(c=0;c<$;c++)(p=B[m=2*(C+c)])||A?(x=H,S&&(x*=D(P*m)*I+.5),F+=(x=1.5*Math.sin(x))*(v=L*(p-F)-(y+=x*F)),p=3==T?F:1==T?v:y,N&&(p=(p*=N)<1?p>-1?o(.25*p):-1:1,p/=N),A=(p*=J)*p>1e-5,b=p*(1-(M=Math.sin(V*m)*U+.5)),p*=M):b=0,m>=z&&(b+=B[m-z+1]*W,p+=B[m-z]*W),B[m]=0|b,B[m+1]=0|p,i[m]+=0|b,i[m+1]+=0|p}return++n/t.kt},this.yt=function(t){for(var s=t.createBuffer(2,e/2,44100),n=0;n<2;n++)for(var o=s.getChannelData(n),h=n;h<e;h+=2)o[h>>1]=i[h]/65536;return s},this.Ft=function(){var t=44+2*e-8,s=t-36,n=new Uint8Array(44+2*e);n.set([82,73,70,70,255&t,t>>8&255,t>>16&255,t>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&s,s>>8&255,s>>16&255,s>>24&255]);for(var o=0,h=44;o<e;++o){var r=i[o];r=r<-32767?-32767:r>32767?32767:r,n[h++]=255&r,n[h++]=r>>8&255}return n},this.getData=function(t,s){for(var n=2*Math.floor(44100*t),e=new Array(s),o=0;o<2*s;o+=1){var h=n+o;e[o]=t>0&&h<i.length?i[h]/32768:0}return e}};var A={gt:[{Ct:[0,214,104,64,0,204,104,0,64,229,4,40,43,51,0,0,0,231,6,1,3,183,15,0,32,232,4,74,6],$t:[1],c:[{n:[144,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,147,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,152],f:[]}]}],vt:5513,bt:32,xt:0,kt:1};const j=.25,E=.15,D=2,I=document.getElementById("canvas"),P=I.getContext("2d"),S={ot:1,At:2,jt:4,Et:8,Dt:16,It:18,Pt:32,St:22};let T={Tt:null,Ht:null,Lt:null,inputMode:S.ot,Nt:S.ot,Jt:"",Ut:"",Vt:"",Wt:"",zt:{x:0,y:0},Ot:!1};function H(){const t=document.getElementById("js-hit-ball");t.classList.contains("disabled")||(T.inputMode=S.ot,t.classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 2px ${W.ft}`,document.getElementById("js-place-wall").style.boxShadow=`0 5px ${W.ft}`)}function L(){const t=window.innerWidth/I.width,s=window.innerHeight/I.height;return Math.min(t,s)}T.Rt=document.getElementById("game-ui"),T.title=document.getElementById("title-container"),T.qt=document.getElementById("hole-number"),T.Qt=document.getElementById("canvas-container"),T.Gt=document.getElementById("js-prev"),T.Kt=document.getElementById("js-next"),document.getElementById("js-hit-ball").addEventListener("click",(t=>{t.preventDefault(),H();var s=new F;s.init(A);var n=!1;setInterval((function(){if(!n&&(n=s.Bt()>=1)){var t=s.Ft();document.createElement("audio").src=URL.createObjectURL(new Blob([t],{type:"audio/wav"}))}}),0)})),document.getElementById("js-place-wall").addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||(T.inputMode=S.At,t.currentTarget.classList.add("active"),document.getElementById("js-hit-ball").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 5px ${W.ft}`,document.getElementById("js-place-wall").style.boxShadow=`0 2px ${W.ft}`)})),document.getElementById("js-reset").addEventListener("click",(t=>{t.preventDefault(),pt(),ct()})),T.Gt.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||at(U)})),T.Kt.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||at(U+2)}));const N=new o(0,0,0,0,!0,!0),J=[new w,new m,new M,new p,new C,new x,new v,new b,new B,new g,new $,new k,new y];let U=0,V=(U+1)%J.length,W=J[U];W.reset();let z=J[V];const O=[],R=(Math.hypot(I.width,I.height),new class{constructor(t,s,n,e){this.canvas=t,this.Xt=s,this.Yt=n,this.Zt=e,this._t={x:0,y:0},this.ts={x:0,y:0},this.ss={x:0,y:0},this.ns={x:0,y:0},this.pressed=!1,this.boundingRect=this.canvas.getBoundingClientRect(),this.es(this.canvas)}resize(){this.boundingRect=this.canvas.getBoundingClientRect()}es(t){t.addEventListener("mousedown",this.os.bind(this),{capture:!0,passive:!1}),window.addEventListener("mousemove",this.hs.bind(this),{capture:!0,passive:!1}),window.addEventListener("mouseup",this.rs.bind(this),{capture:!0,passive:!1}),t.addEventListener("touchstart",this.cs.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchend",this.rs.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchmove",this.us.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.rs.bind(this),{capture:!0,passive:!1})}ls(){this.ss.x=(this.ts.x-this._t.x)/t,this.ss.y=(this._t.y-this.ts.y)/t}ds(t){const s=canvas.getBoundingClientRect();let n,e;if(t instanceof MouseEvent)n=t.clientX-s.left,e=t.clientY-s.top;else if(t instanceof TouchEvent){const t=event.touches[0];n=t.clientX-s.left,e=t.clientY-s.top}n*=canvas.width/s.width,e*=canvas.height/s.height,this.ns.x=n,this.ns.y=e}fs(t){let s=0;return t instanceof MouseEvent?s=t.clientX:t instanceof TouchEvent&&(s=t.changedTouches[0].clientX),(s-this.boundingRect.left)*(this.canvas.width/this.boundingRect.width)}ws(t){let s=0;return t instanceof MouseEvent?s=t.clientY:t instanceof TouchEvent&&(s=t.changedTouches[0].clientY),(s-this.boundingRect.top)*(this.canvas.height/this.boundingRect.height)}cs(t){t.preventDefault(),this.ds(t),this.Ms(this.fs(t),this.ws(t))}us(t){t.preventDefault(),this.ds(t),this.ps(this.fs(t),this.ws(t)),console.log(this.pressed)}os(t){t.preventDefault(),this.ds(t),this.Ms(this.fs(t),this.ws(t))}hs(t){t.preventDefault(),this.ds(t),this.ps(this.fs(t),this.ws(t))}Ms(t,s){this.pressed=!0,this._t.x=t,this._t.y=s,this.ts.x=t,this.ts.y=s,this.ls(),this.Xt()}ps(s,n){if(!this.pressed)return;const e=s-this._t.x,i=n-this._t.y,o=Math.hypot(e,i);if(this.ts.x=s,this.ts.y=n,o>t){const s=e/o*t,n=i/o*t;this.ts.x=this._t.x+s,this.ts.y=this._t.y+n}this.ls(),this.Zt()}rs(t){0!=this.pressed&&(t.preventDefault(),t.stopPropagation(),this.pressed=!1,this._t.x=0,this._t.y=0,this.ts.x=0,this.ts.y=0,this.ls(),this.Yt())}draw(t){this.pressed&&(this.Cs(t),this.xs(t))}Cs(s){s.strokeStyle="#FFD700",s.lineWidth=6,s.beginPath(),s.arc(this._t.x,this._t.y,t,0,2*Math.PI),s.stroke(),s.closePath()}xs(t){t.strokeStyle="#F0E68C",t.lineWidth=6,t.beginPath(),t.arc(this.ts.x,this.ts.y,125,0,2*Math.PI),t.fillStyle="#F0E68C",t.globalAlpha=.5,t.fill(),t.globalAlpha=1,t.closePath()}}(I,(function(){if(T.zt.x=R.ns.x,T.zt.y=R.ns.y,T.Rt.innerHTML=T.Wt,T.inputMode!==S.Pt)for(let t=0;t<W.rt.length;t++){const s=W.rt[t];if(!s.v)continue;const n=s.L(R.ns.x,R.ns.y);if(s.U(R.ns.x,R.ns.y))return void W.rt.splice(t,1);if(n)return T.Nt=T.inputMode,T.inputMode=S.jt,T.Ht=s,void(T.Lt=n);s.T(R.ns.x,R.ns.y)&&(T.Nt=T.inputMode,T.inputMode=S.Et,T.Ht=s,T.Lt=null)}T.inputMode===S.ot?function(){O.length=0;for(let t=0;t<W.ht.length;t++){const s=W.ht[t];O.push(new h(s.l.x,s.l.y,R.ss.x,R.ss.y))}}():T.inputMode&S.It&&q.k.push({x:R.ns.x,y:R.ns.y})}),(function(){T.inputMode===S.ot?function(){if(0===O.length)return;for(let t=0;t<W.ht.length;t++){const s=W.ht[t];if(s._)continue;const n=O[t],e=Math.cos(n.angle)*n.O*.05,i=Math.sin(n.angle)*n.O*.05;s.m.x=e,s.m.y=i,s.ot=!0}t=O[0].angle,s=O[0].O,function(t,s){const n=document.styleSheets[0],e="shake-animation",i="shake",o=.1*s,h=.75;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].name===e){n.deleteRule(t);break}const r=-Math.cos(t)*o,a=Math.sin(t)*o,c=`\n    @keyframes ${e} {\n      0% { transform: translate(${r}px, ${a}px); }\n      60% { transform: translate(${-.3*r}px, ${-.3*a}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;n.insertRule(c,n.cssRules.length);let u=-1;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].selectorText===`.${i}`){u=t;break}const l=`\n    .${i} {\n      animation: ${e} ${h}s ease-out;\n    }\n  `;u>=0?(n.deleteRule(u),n.insertRule(l,u)):n.insertRule(l,n.cssRules.length)}(t,s),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3),O.length=0,W.ot=!0,T.inputMode=S.Pt,I.style.cursor="not-allowed",document.getElementById("js-hit-ball").classList.add("disabled"),document.getElementById("js-place-wall").classList.add("disabled"),T.Kt.classList.add("disabled"),T.Gt.classList.add("disabled");var t,s;const n=document.getElementById("js-reset");n.classList.remove("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{"js-reset"!==t.id&&(t.style.backgroundColor=null,t.style.boxShadow=null)})),n.style.backgroundColor=W.dt,n.style.boxShadow=`0 5px ${W.ft}`,n.style.color=Mt(...mt(W.dt)),T.Qt.style.transform=null,T.Vt=T.Ut}():T.inputMode&S.It?function(){if(0===q.k.length)return;if(_(q.k[0].x,q.k[0].y,R.ns.x,R.ns.y)<D&&1===q.k.length)return;if(q.k.push({x:R.ns.x,y:R.ns.y}),q.k.length<2)return;W.rt.push(new o(q.k[0].x,q.k[0].y,q.k[1].x,q.k[1].y,!0)),q=new r}():(T.inputMode===S.jt||T.inputMode===S.Et)&&(T.inputMode=T.Nt,T.Ht=null,T.Lt=null);T.Rt.innerHTML=T.Wt}),(function(){T.inputMode===S.ot?function(){if(0===O.length)return;let t=1;for(let s=0;s<O.length;s++){const n=O[s],e=W.ht[s];if(e._)continue;t=e.tt;const i=t+G(R),o=_(R.ts.x,R.ts.y,R._t.x,R._t.y);n.angle=i,n.O=o}const s=O[0];T.Ut=`${(180*s.angle/Math.PI).toFixed(0)}° | ${s.O.toFixed(0)}`;let n="";T.Vt.length>0&&(n=`<div class="prev-ui-text">${T.Vt}</div>`);n+=`<div>${T.Ut}</div>`,T.Rt.innerHTML=n,function(t,s){const n=-Math.cos(s)*t*.1,e=Math.sin(s)*t*.1;T.Qt.style.transform=`translate(${n}px, ${e}px)`}(s.O,s.angle)}():T.inputMode===S.jt?function(){T.Lt&&(T.Lt===T.Ht.t?T.Ht.B(R.ns.x,R.ns.y,T.Ht.i.x,T.Ht.i.y):T.Ht.B(T.Ht.t.x,T.Ht.t.y,R.ns.x,R.ns.y));Q(T.Ht)}():T.inputMode===S.Et?function(){if(T.Ht){const t=R.ns.x-T.zt.x,s=R.ns.y-T.zt.y;T.Ht.B(T.Ht.t.x+t,T.Ht.t.y+s,T.Ht.i.x+t,T.Ht.i.y+s),T.zt.x=R.ns.x,T.zt.y=R.ns.y}Q(T.Ht)}():T.inputMode===S.At&&q.k.length>0&&Q(q)})));let q=new r;function Q(t){if(1===t.k.length){const s=R.ns.x-t.k[0].x,n=R.ns.y-t.k[0].y,e=(180*Math.atan2(n,s)/Math.PI+360)%360;T.Rt.innerText=`${e.toFixed(0)}°`,-0===e&&(T.Rt.innerText="0")}else{const s=t.k[1].x-t.k[0].x,n=t.k[1].y-t.k[0].y,e=(180*Math.atan2(n,s)/Math.PI+360)%360;T.Rt.innerText=`${e.toFixed(0)}°`,-0===e&&(T.Rt.innerText="0")}}function G(t){return Math.atan2(-(t.ts.y-t._t.y),-(t.ts.x-t._t.x))}function K(t){t.l.x+t.Y<0&&(t.l.x=I.width-t.Y),t.l.x-t.Y>I.width&&(t.l.x=t.Y),t.l.y+t.Y<0&&(t.l.y=I.height-t.Y),t.l.y-t.Y>I.height&&(t.l.y=t.Y)}function X(t,s){const n=t.l.x-s.l.x,e=t.l.y-s.l.y;return Math.sqrt(n*n+e*e)<t.Y+s.Y}function Y(t,s){const n=t.l.x-s.l.x,e=t.l.y-s.l.y,i=Math.sqrt(n*n+e*e);if(i>t.Y+s.Y)return 0;const o=t.Y+s.Y;return(o-i)/o}function Z(t,s){const n=s.l.x-t.l.x,e=s.l.y-t.l.y,i=Math.sqrt(n*n+e*e);if(0===i)return;const o=t.Y+s.Y-i,h=n/i,r=e/i;o>0&&(t.l.x-=o*h*(s.K/(t.K+s.K)),t.l.y-=o*r*(s.K/(t.K+s.K)),s.l.x+=o*h*(t.K/(t.K+s.K)),s.l.y+=o*r*(t.K/(t.K+s.K)));const a=(s.m.x-t.m.x)*h+(s.m.y-t.m.y)*r;if(a>0)return;const c=-2*a/(1/t.K+1/s.K);t.m.x-=c/t.K*h,t.m.y-=c/t.K*r,s.m.x+=c/s.K*h,s.m.y+=c/s.K*r}function _(t,s,n,e){return Math.sqrt(Math.pow(n-t,2)+Math.pow(e-s,2))}function tt(t,s=!0){t.l.x-t.Y<0&&st(t,t.l.x+I.width,t.l.y,s),t.l.x+t.Y>I.width&&st(t,t.l.x-I.width,t.l.y,s),t.l.y-t.Y<0&&st(t,t.l.x,t.l.y+I.height,s),t.l.y+t.Y>I.height&&st(t,t.l.x,t.l.y-I.height,s),st(t,t.l.x,t.l.y,s)}function st(t,s,n,e=!0){P.beginPath(),P.arc(s,n,t.Y,0,2*Math.PI),P.fillStyle=`rgba(255, 255, 255, ${t.alpha})`,P.strokeStyle=`rgba(0, 0, 0, ${t.alpha})`,P.lineWidth=5,P.setLineDash([]),P.closePath(),e&&P.stroke(),P.fill()}function nt(t){P.beginPath(),P.arc(t.l.x,t.l.y,t.Y,0,2*Math.PI),P.fillStyle=t.color,P.fill(),P.closePath()}function et(){P.clearRect(0,0,I.width,I.height),function(t){T.Qt.style.backgroundColor=t.backgroundColor,T.qt.style.color=t.lt,t.draw(P);for(let s=0;s<t.ct.length;s++)nt(t.ct[s]);for(let s=0;s<t.rt.length;s++)t.rt[s].draw(P);T.inputMode&S.It&&q.k.length>0&&(N.B(q.k[0].x,q.k[0].y,R.ns.x,R.ns.y),N.At=T.inputMode===S.At,N.draw(P));for(let s=0;s<t.ht.length;s++){const n=t.ht[s];if(n.ot)for(let t=0;t<n.nt.length;t++)tt(n.nt[t],!1);tt(n)}}(W);for(let t=0;t<O.length;t++){const s=O[t];W.ht[t]._||it(s)}}function it(t){ot(P,t.W.x,t.W.y,t.q.x,t.q.y);const s=Math.abs(t.W.x-t.q.x),n=Math.abs(t.W.y-t.q.y);let e=t.W.x,i=t.q.x,o=t.W.y,h=t.q.y;t.q.x<0&&(e=t.W.x+I.width,i=e-s),t.q.x>I.width&&(e=t.W.x-I.width,i=e+s),t.q.y<0&&(o=t.W.y+I.height,h=o-n),t.q.y>I.height&&(o=t.W.y-I.height,h=o+n),ot(P,e,o,i,h)}function ot(t,s,n,e,i){const o=_(s,n,e,i);var h=Math.min(o,20),r=Math.atan2(i-n,e-s);t.fillStyle="#fff",t.strokeStyle="#000",t.lineWidth=5,t.beginPath(),t.moveTo(s,n),t.lineTo(e-h/2*Math.cos(r),i-h/2*Math.sin(r)),t.stroke(),t.strokeStyle="#fff",t.fillStyle="#fff",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(e,i),t.lineTo(e-h*Math.cos(r-Math.PI/6),i-h*Math.sin(r-Math.PI/6)),t.lineTo(e-h*Math.cos(r+Math.PI/6),i-h*Math.sin(r+Math.PI/6)),t.closePath(),t.fill(),t.lineWidth=3,t.strokeStyle="#000",t.stroke(),t.fillStyle="#fff",t.fill(),t.beginPath(),t.moveTo(s,n),t.lineTo(e-h/2*Math.cos(r),i-h/2*Math.sin(r)),t.strokeStyle="#fff",t.lineWidth=2,t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(s,n,5,0,2*Math.PI),t.fill(),t.closePath()}function ht(t){W.update();for(let s=0;s<W.ht.length;s++){const n=W.ht[s],e=O[s];n.update(t);for(let t=0;t<W.ht.length;t++){if(s===t)continue;const e=W.ht[t];n._||e._||n.alpha<.5||X(n,e)&&Z(n,e)}e&&(e.W.x=n.l.x,e.W.y=n.l.y),T.inputMode===S.Pt&&(K(n),ut(n),rt(n))}if(W.wt&&!T.Ot&&function(){const t=T.Qt;T.Ot=!0,t.classList.add("offscreen-right"),t.style.transition="transform 1s ease-in-out",setTimeout((()=>{at(U+2),t.classList.remove("offscreen-right"),t.classList.add("offscreen-left"),t.style.transition="none",setTimeout((()=>{t.style.transition="transform 1s ease-in-out",t.classList.remove("offscreen-left"),t.classList.add("onscreen"),setTimeout((()=>{t.style.transition="none",T.Ot=!1,t.classList.remove("onscreen")}),1e3)}),50)}),1e3)}(),W.ot)for(let t=0;t<W.ht.length;t++){const s=W.ht[t];s._||(null===T.Tt&&(T.Tt=Date.now()),_(s.m.x,s.m.y,0,0)<E?null===T.Tt&&(T.Tt=Date.now()):T.Tt=null,null!==T.Tt&&Date.now()-T.Tt>1e3&&(pt(),ct()))}for(let t=0;t<W.rt.length;t++){const s=W.rt[t];s.C&&s.update()}}function rt(t){for(let s=0;s<W.rt.length;s++){const n=W.rt[s];if(n.C)continue;const e=u(t,n);if(e){const s=.5*Math.hypot(t.m.x,t.m.y);n.I(s),Ct(Math.random()*Math.PI*2),t.l.x+=e.G.x,t.l.y+=e.G.y;const i=e.axis,o=t.m.x*i.x+t.m.y*i.y;t.m.x-=2*o*i.x,t.m.y-=2*o*i.y}}}function at(t){U=(t-1)%J.length;const s=(U+1)%J.length;W=J[U],z=J[s],W.reset(),location.hash=`#/${U+1}`,T.Vt="",T.qt.innerText=`${U+1}`,ct(),pt()}function ct(){document.getElementById("js-hit-ball").classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-reset").classList.remove("active"),document.getElementById("js-hit-ball").classList.remove("disabled"),document.getElementById("js-place-wall").classList.remove("disabled");document.getElementById("js-reset").classList.add("disabled"),T.Gt.classList.remove("disabled"),T.Kt.classList.remove("disabled"),0===U&&T.Gt.classList.add("disabled"),U===J.length-1&&T.Kt.classList.add("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{let s=W.dt,n=`0 5px ${W.ft}`,e=Mt(...mt(W.dt));t.classList.contains("disabled")?(t.style.backgroundColor=null,t.style.boxShadow=null,t.style.color=null):(t.style.backgroundColor=s,t.style.boxShadow=n,t.style.color=e)})),T.Tt=null,T.Ht=null,T.Lt=null,T.inputMode=S.ot,I.style.cursor="crosshair"}function ut(t){t.vs=!1;for(let s=0;s<W.ct.length;s++){const n=W.ct[s],e=n.l.x-t.l.x,i=n.l.y-t.l.y,o=Math.sqrt(e*e+i*i),h=Math.sqrt(t.m.x*t.m.x+t.m.y*t.m.y);if(o<=n.Y-t.Y&&h<j)t._=n,t.vs=!0;else if(X(t,n)){const s=.2*Y(t,n),h=s*e/o,r=s*i/o;t.m.x+=h,t.m.y+=r,t.alpha-=.01,t.alpha=Math.max(t.alpha,0),t.vs=!0}}t.vs||(t.alpha=1)}const lt=1e3/60;let dt=0,ft=0;function wt(){const t=window.location.hash.substring(2);return 0===t.length?1:parseInt(t,10)}function mt(t){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return s?[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]:null}function Mt(t,s,n){const e=function(t,s,n){return.299*t+.587*s+.114*n}(t,s,n);return e>128?"black":"white"}function pt(){T.Ut="",T.Wt=`${U+1} / ${J.length}`,T.Rt.innerHTML=T.Wt,T.Rt.style.color=Mt(...mt(W.dt)),T.Rt.style.backgroundColor=W.dt,W.reset()}function Ct(t){!function(t){const s=document.styleSheets[0],n="shake-animation",e="shake";for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].name===n){s.deleteRule(t);break}const i=1*Math.cos(t),o=1*-Math.sin(t);let h=`\n    @keyframes ${n} {\n      0% { transform: translate(0, 0); }\n      10% { transform: translate(${-10*i}px, ${10*o}px); }\n      20% { transform: translate(${10*i}px, ${-10*o}px); }\n      30% { transform: translate(${-8*i}px, ${8*o}px); }\n      40% { transform: translate(${8*i}px, ${-8*o}px); }\n      50% { transform: translate(${-5*i}px, ${5*o}px); }\n      60% { transform: translate(${5*i}px, ${-5*o}px); }\n      70% { transform: translate(${-3*i}px, ${3*o}px); }\n      80% { transform: translate(${3*i}px, ${-3*o}px); }\n      90% { transform: translate(${-1*i}px, ${o}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;s.insertRule(h,s.cssRules.length);let r=-1;for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].selectorText===`.${e}`){r=t;break}const a=`\n    .${e} {\n      animation: ${n} 1s ease-out;\n    }\n  `;r>=0?(s.deleteRule(r),s.insertRule(a,r)):s.insertRule(a,s.cssRules.length)}(t),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3)}!function t(s){const n=s-ft;for(ft=s,dt+=n;dt>=lt;)ht(lt),dt-=lt;et(),requestAnimationFrame(t)}(0),document.addEventListener("DOMContentLoaded",(()=>{at(wt()),H()})),window.addEventListener("hashchange",(()=>{at(wt())})),document.body.addEventListener("click",(()=>{T.title.style.opacity=0})),document.body.addEventListener("touchstart",(()=>{T.title.style.opacity=0})),window.addEventListener("mousemove",(t=>{const s=I.getBoundingClientRect();let n="crosshair";for(let e=0;e<W.rt.length;e++){let i=t.clientX-s.left,o=t.clientY-s.top;const h=W.rt[e];i/=L(),o/=L(),h.U(i,o)?n="pointer":(h.L(i,o)||h.T(i,o))&&(n="grab")}T.inputMode===S.Pt&&(n="not-allowed"),I.style.cursor=n}))})();