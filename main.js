(()=>{"use strict";const t=250;class s{constructor(t,s,n){this.t=t,this.i=s,this.color=n,this.o=[],this.h()}h(){const{t,i:s,color:i}=this,o=Math.atan2(s.y-t.y,s.x-t.x),h=Math.hypot(s.x-t.x,s.y-t.y);for(let s=0;s<Math.ceil(h/e);s++){const h=t.x+Math.cos(o)*s*e,r=t.y+Math.sin(o)*s*e;this.o.push(new n(h,r,i,o))}this.angle=o}reset(){this.o=[],this.h()}update(){for(let t=0;t<this.o.length;t++)this.o[t].l<=0||this.o[t].update()}draw(t){for(let s=0;s<this.o.length;s++)this.o[s].l<=0||this.o[s].draw(t)}}class n{constructor(t,s,n,e){this.color=n,this.u={x:t,y:s},this.m={x:0,y:0},this.color=n,this.l=100,this.angle=e}update(){this.u.x+=this.m.x,this.u.y+=this.m.y,this.l--}draw(t){this.left<0||(this.l<75?t.fillStyle=`rgba(${this.color}, ${this.l/75})`:t.fillStyle=`rgba(${this.color}, 1)`,t.beginPath(),t.rect(this.u.x-e/2,this.u.y,e,e),t.fill(),t.closePath())}}const e=20,i="255,255,255";class o{constructor(t,n,o,h,r=!0,a=!0){this.width=e,this.u={x:0,y:0},this.t={x:0,y:0},this.i={x:0,y:0},this.M={x:0,y:0},this.p={x:0,y:0},this.C=!1,this.v=r,this.color=r?i:"0,0,0",this.B(t,n,o,h),this.$=new s(this.t,this.i,this.color)}B(t,s,n,e){this.t.x=t,this.t.y=s,this.i.x=n,this.i.y=e;const{t:i,i:o}=this;this.u.x=(i.x+o.x)/2,this.u.y=(i.y+o.y)/2,this.angle=Math.atan2(o.y-i.y,o.x-i.x)-Math.PI/2,this.k=this.A(i,o,this.width),this.F=this.j();const h=6*Math.sin(this.angle),r=6*-Math.cos(this.angle);this.M.x=this.t.x-h,this.M.y=this.t.y-r,this.p.x=this.i.x+h,this.p.y=this.i.y+r}update(){this.C&&this.$.update()}rotate(t,s,n){const e=this.t.x,i=this.t.y,o=this.i.x,h=this.i.y,r=Math.cos(t),a=Math.sin(t),c=r*(e-s)-a*(i-n)+s,l=a*(e-s)+r*(i-n)+n,u=r*(o-s)-a*(h-n)+s,d=a*(o-s)+r*(h-n)+n;this.B(c,l,u,d)}D(){}reset(){this.C=!1,this.$.reset()}P(t){this.C=!0,this.$=new s(this.t,this.i,this.color),this.$.o.forEach((s=>{const n=Math.random()*Math.PI*2;s.m.x=t*(2*Math.random()-1)*Math.cos(n),s.m.y=t*(2*Math.random()-1)*Math.sin(n)}))}A(t,s,n){const e=n/2,i=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2)/2,o=this.angle;return[{x:-e,y:-i},{x:-e,y:i},{x:e,y:i},{x:e,y:-i}].map((t=>({x:this.u.x+(t.x*Math.cos(o)-t.y*Math.sin(o)),y:this.u.y+(t.x*Math.sin(o)+t.y*Math.cos(o))})))}j(){const t=[],s=this.k,n=s.length;for(let e=0;e<n;e++){const i=(e+1)%n,o=s[i].x-s[e].x,h=s[i].y-s[e].y,r=Math.sqrt(o*o+h*h),a={x:-h/r,y:o/r};t.push(a)}return t}I(t){let s=Number.POSITIVE_INFINITY,n=-Number.POSITIVE_INFINITY;for(let e=0;e<this.k.length;e++){let i=this.k[e].x*t.x+this.k[e].y*t.y;s=Math.min(s,i),n=Math.max(n,i)}return{min:s,max:n}}L(t,s,n,e,i){const o=t-n,h=s-e;return o*o+h*h<=i*i}S(t,s){return this.T(t,s)}T(t,s){let n=!1;const e=this.k,i=e.length;for(let o=0,h=i-1;o<i;h=o++){const i=e[o].x,r=e[o].y,a=e[h].x,c=e[h].y;r>s!=c>s&&t<(a-i)*(s-r)/(c-r)+i&&(n=!n)}return n}N(t,s){return this.H(t,s)?this.t:this.G(t,s)?this.i:null}H(t,s){return this.L(t,s,this.M.x,this.M.y,15)}G(t,s){return this.L(t,s,this.p.x,this.p.y,15)}J(t,s){return this.v?this.L(t,s,this.u.x,this.u.y,15):null}draw(t){this.C?this.$.draw(t):this.U(t)}U(t){t.beginPath(),t.setLineDash([]),t.fillStyle=`rgba(${this.color}, 1.0)`,t.strokeStyle="#000",t.lineWidth=2,t.moveTo(this.k[0].x,this.k[0].y);for(let s=1;s<this.k.length;s++)t.lineTo(this.k[s].x,this.k[s].y);t.closePath(),t.fill(),t.stroke(),this.color===i&&(t.beginPath(),t.lineWidth=2,t.strokeStyle="red",t.moveTo(this.u.x-5,this.u.y-5),t.lineTo(this.u.x+5,this.u.y+5),t.moveTo(this.u.x-5,this.u.y+5),t.lineTo(this.u.x+5,this.u.y-5),t.stroke(),t.closePath(),t.beginPath(),t.fillStyle="rgba(255, 0, 0, 1.0)",t.arc(this.M.x,this.M.y,4,0,2*Math.PI),t.arc(this.p.x,this.p.y,4,0,2*Math.PI),t.fill())}}class h{constructor(t=0,s=0,n=0,e=1){this.V={x:t,y:s},this.angle=n,this.W=e,this.O={x:t,y:s}}get R(){return this.O.x=this.V.x+this.W*Math.cos(this.angle),this.O.y=this.V.y+this.W*Math.sin(this.angle),this.O}}class r{constructor(){this.k=[]}}function a(t,s){return t.max>s.min&&s.max>t.min}function c(t,s){return Math.min(t.max-s.min,s.max-t.min)}function l(t,s){let n=Number.POSITIVE_INFINITY,e=null,i=null;for(let o=0;o<s.F.length;o++){const h=s.F[o],r=s.I(h),l=t.I(h);if(!a(r,l))return null;{const t=c(r,l);t<n&&(n=t,e=h,i=s.k[o])}}for(const o of s.k){const h={x:t.u.x-o.x,y:t.u.y-o.y},r=Math.sqrt(h.x*h.x+h.y*h.y);if(0===r)continue;h.x/=r,h.y/=r;const l=s.I(h),u=t.I(h);if(!a(l,u))return null;{const t=c(l,u);t<n&&(n=t,e=h,i=o)}}if(n===Number.POSITIVE_INFINITY)return null;let o=t.u.x-i.x,h=t.u.y-i.y;return o*e.x+h*e.y<0&&(e.x=-e.x,e.y=-e.y),{q:{x:e.x*n,y:e.y*n},axis:e}}class u{K=1;X=50;constructor(t,s,n=Math.PI,e=8,i=!0){if(this.Y=e,this.color="#fff",this.Z="#fff",this.u={x:t,y:s},this._={x:t,y:s},this.m={x:0,y:0},this.tt=null,this.K=e,this.st=n,this.u.x=t,this.u.y=s,this.alpha=1,this.nt=0,this.et=[],this.it=0,this.ot=0,this.ht=!1,i)for(let i=0;i<this.X;i++){const i=new u(t,s,n,e,!1);i.alpha=0,i.Z=this.Z,this.et.push(i)}}I(t){const s=this.u.x*t.x+this.u.y*t.y;return{min:s-this.Y,max:s+this.Y}}update(){this.it++;const t=.98-this.nt;if(this.m.x*=t,this.m.y*=t,Math.abs(this.m.x)<.01&&(this.m.x=0),Math.abs(this.m.y)<.01&&(this.m.y=0),this.u.x+=this.m.x,this.u.y+=this.m.y,this.it%1==0){const t=this.et[this.ot];t.u.x=this.u.x,t.u.y=this.u.y,t.alpha=.25,this.ot=(this.ot+1)%this.X}for(let t=0;t<this.X;t++){this.et[t].alpha-=.009}}reset(){this.u.x=this._.x,this.u.y=this._.y,this.tt=null,this.m.x=0,this.m.y=0,this.alpha=1,this.it=0,this.ht=!1;for(let t=0;t<this.X;t++)this.et[t]=new u(this._.x,this._.y,this.st,this.Y),this.et[t].alpha=0}}class d{tt=null;constructor(t,s,n=15,e="black"){this.u={x:t,y:s},this.Y=n,this.color=e}}class f{rt=[];ct=[];lt=[];number=0;ut=!1;backgroundColor="red";dt="red";ft="red";wt="red";width=500;height=500;ht=!1;reset(){this.ht=!1,this.ut=!1,this.rt.forEach((t=>{var s,n;t.reset(),t.Z=(s=this.dt,(n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s))?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:null),t.et.forEach((s=>{s.Z=t.Z}))})),this.ct.forEach((t=>{t.reset()})),document.getElementById("js-place-wall").classList.remove("disabled"),document.getElementById("js-place-wall").setAttribute("disabled",!1),document.body.style.backgroundColor=this.dt;const t=document.getElementById("js-place-wall");t.style.display="block",t.classList.remove("jiggle"),this.number<5?t.style.display="none":5===this.number&&t.classList.add("jiggle")}get Mt(){for(let t=0;t<this.rt.length;t++)if(!this.rt[t].tt)return!1;return!0}update(){}draw(t){}}class w extends f{backgroundColor="#B4E7CE";dt="#59A96A";ft="#9BDEAC";wt="#474A2C";number=1;constructor(){super(),this.lt=[new d(400,250)],this.rt=[new u(250,250)]}}class m extends f{backgroundColor="#BB8A89";dt="#977390";ft="#AC7B7D";wt="#785589";number=2;constructor(){super(),this.lt=[new d(400,125),new d(400,375)],this.rt=[new u(250,125),new u(250,375)]}}class M extends f{backgroundColor="#F4F4F9";dt="#586F7C";ft="#B8DBD9";wt="#2F4550";number=3;constructor(){super(),this.lt=[new d(100,125),new d(400,375)],this.rt=[new u(250,125),new u(250,375,0)]}}class p extends f{backgroundColor="#AFB3F7";dt="#7A93AC";ft="#92BCEA";wt="#617073";number=4;constructor(){super(),this.lt=[new d(400,125),new d(400,375)],this.rt=[new u(50,125),new u(250,375,0)],this.ct=[new o(100,50,100,200,!1)]}}class C extends f{backgroundColor="#FEC0AA";dt="#84732B";ft="#EC4E20";wt="#574F2A";number=5;constructor(){super(),this.lt=[new d(400,125),new d(400,375)],this.rt=[new u(150,125),new u(250,375,0)],this.ct=[new o(25,0,25,500,!1),new o(475,0,475,500,!1)]}draw(t){t.beginPath(),t.setLineDash([5,15]),t.strokeStyle="black",t.lineWidth=2,t.rect(100,75,20,100),t.stroke()}}class v extends f{backgroundColor="#F2F6D0";dt="#D9D2B6";ft="#D0E1D4";wt="#71697A";number=6;constructor(){super(),this.lt=[new d(250,150),new d(100,350),new d(400,350)];const t=[{x:100,y:200},{x:400,y:200},{x:250,y:400}],s=(t[0].x+t[1].x+t[2].x)/3,n=(t[0].y+t[1].y+t[2].y)/3,e=(t,e)=>Math.atan2(n-e,s-t);this.rt=[new u(t[0].x,t[0].y,e(100,200)),new u(t[1].x,t[1].y,e(400,200)),new u(t[2].x,t[2].y,e(250,400))],this.ct=[]}}class x extends f{backgroundColor="#FAA275";dt="#CE6A85";ft="#FF8C61";wt="#985277";number=7;constructor(){super(),this.lt=[new d(150,400),new d(250,400),new d(350,400)],this.rt=[new u(150,150),new u(250,200),new u(350,250)],this.ct=[]}}class b extends f{backgroundColor="#BEEF9E";dt="#828C51";ft="#A6C36F";wt="#335145";number=8;constructor(){super(),this.lt=[new d(250,250)];this.rt=[new u(400,250,0),new u(250+150*Math.cos(Math.PI),250+150*Math.sin(Math.PI),Math.PI)]}}class B extends f{backgroundColor="#CF9893";dt="#A96DA3";ft="#BC7C9C";wt="#3B3B58";number=9;constructor(){super(),this.lt=[new d(250,300),new d(200,250)],this.rt=[new u(250,200,-Math.PI),new u(300,250,-Math.PI/2)],this.ct=[new o(200,200,300,300,!1),new o(300,200,200,300,!1)]}}class g extends f{backgroundColor="#FFA9E7";dt="#7F2CCB";ft="#FF84E8";wt="#414361";number=10;constructor(){super(),this.lt=[new d(200,200),new d(400,400)],this.rt=[new u(250,250,-Math.PI),new u(300,300,-Math.PI/2)],this.ct=[new o(100,200,200,100,!1)]}}class $ extends f{backgroundColor="#93B5C6";dt="#F0CF65";ft="#D7816A";wt="#BD4F6C";number=11;constructor(){super(),this.lt=[new d(100,100),new d(250,100),new d(400,100)],this.rt=[new u(250,200,Math.PI),new u(175,325,Math.PI/4),new u(325,325,-Math.PI/4)],this.ct=[]}}class k extends f{backgroundColor="#524948";dt="#7CB4B8";ft="#70F8BA";wt="#57467B";number=12;constructor(){super(),this.lt=[new d(200,200),new d(300,200)],this.rt=[new u(100,250,Math.PI),new u(400,250,Math.PI/3)],this.ct=[new o(125,125,175,300,!1),new o(375,125,325,300,!1),new o(125,125,175,150,!1),new o(375,125,325,150,!1),new o(175,150,325,150,!1),new o(175,300,325,300,!1),new o(200,250,200,275,!1),new o(300,250,300,275,!1),new o(200,275,300,275,!1)]}}class y extends f{backgroundColor="#6A8D73";dt="#E4FFE1";ft="#FFE8C2";wt="#F0A868";number=13;constructor(){super(),this.lt=[new d(250,250)],this.rt=[new u(250,100,Math.PI)];new o(175,150,175,350,!1),new o(325,150,325,350,!1),new o(185,160,315,160,!1),new o(185,340,315,340,!1);this.ct=[],this.Ct=[]}update(){super.update();for(let t=0;t<this.Ct.length;t++){this.Ct[t].rotate(.01,250,250)}}}const A=function(){var t,s,n,e,i,o=function(t){return Math.sin(6.283184*t)},h=function(t){return.003959503758*2**((t-128)/12)},r=function(t,s,n){var e,i,o,r,c,l,u=a[t.vt[0]],d=t.vt[1],f=t.vt[3]/32,w=a[t.vt[4]],m=t.vt[5],M=t.vt[8]/32,p=t.vt[9],C=t.vt[10]*t.vt[10]*4,v=t.vt[11]*t.vt[11]*4,x=t.vt[12]*t.vt[12]*4,b=1/x,B=-t.vt[13]/16,g=t.vt[14],$=n*2**(2-t.vt[15]),k=new Int32Array(C+v+x),y=0,A=0;for(e=0,i=0;e<C+v+x;e++,i++)i>=0&&(i-=$,c=h(s+(15&(g=g>>8|(255&g)<<4))+t.vt[2]-128),l=h(s+(15&g)+t.vt[6]-128)*(1+8e-4*t.vt[7])),o=1,e<C?o=e/C:e>=C+v&&(o=(1-(o=(e-C-v)*b))*3**(B*o)),r=u(y+=c*o**f)*d,r+=w(A+=l*o**M)*m,p&&(r+=(2*Math.random()-1)*p),k[e]=80*r*o|0;return k},a=[o,function(t){return t%1<.5?1:-1},function(t){return t%1*2-1},function(t){var s=t%1*4;return s<2?s-1:3-s}];this.init=function(o){t=o,s=o.xt,n=0,e=o.bt*o.Bt*(s+1)*2,i=new Int32Array(e)},this.gt=function(){var h,c,l,u,d,f,w,m,M,p,C,v,x,b,B=new Int32Array(e),g=t.$t[n],$=t.bt,k=t.Bt,y=0,A=0,F=!1,j=[];for(l=0;l<=s;++l)for(w=g.kt[l],u=0;u<k;++u){var E=w?g.c[w-1].f[u]:0;E&&(g.vt[E-1]=g.c[w-1].f[u+k]||0,E<17&&(j=[]));var D=a[g.vt[16]],P=g.vt[17]/512,I=2**(g.vt[18]-9)/$,L=g.vt[19],S=g.vt[20],T=43.23529*g.vt[21]*3.141592/44100,N=1-g.vt[22]/255,H=1e-5*g.vt[23],G=g.vt[24]/32,J=g.vt[25]/512,U=6.283184*2**(g.vt[26]-9)/$,V=g.vt[27]/255,W=g.vt[28]*$&-2;for(C=(l*k+u)*$,d=0;d<4;++d)if(f=w?g.c[w-1].n[u+d*k]:0){j[f]||(j[f]=r(g,f,$));var z=j[f];for(c=0,h=2*C;c<z.length;c++,h+=2)B[h]+=z[c]}for(c=0;c<$;c++)(p=B[m=2*(C+c)])||F?(v=T,L&&(v*=D(I*m)*P+.5),A+=(v=1.5*Math.sin(v))*(x=N*(p-A)-(y+=v*A)),p=3==S?A:1==S?x:y,H&&(p=(p*=H)<1?p>-1?o(.25*p):-1:1,p/=H),F=(p*=G)*p>1e-5,b=p*(1-(M=Math.sin(U*m)*J+.5)),p*=M):b=0,m>=W&&(b+=B[m-W+1]*V,p+=B[m-W]*V),B[m]=0|b,B[m+1]=0|p,i[m]+=0|b,i[m+1]+=0|p}return++n/t.yt},this.At=function(t){for(var s=t.createBuffer(2,e/2,44100),n=0;n<2;n++)for(var o=s.getChannelData(n),h=n;h<e;h+=2)o[h>>1]=i[h]/65536;return s},this.Ft=function(){var t=44+2*e-8,s=t-36,n=new Uint8Array(44+2*e);n.set([82,73,70,70,255&t,t>>8&255,t>>16&255,t>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&s,s>>8&255,s>>16&255,s>>24&255]);for(var o=0,h=44;o<e;++o){var r=i[o];r=r<-32767?-32767:r>32767?32767:r,n[h++]=255&r,n[h++]=r>>8&255}return n},this.getData=function(t,s){for(var n=2*Math.floor(44100*t),e=new Array(s),o=0;o<2*s;o+=1){var h=n+o;e[o]=t>0&&h<i.length?i[h]/32768:0}return e}},F={$t:[{vt:[2,138,116,0,2,138,128,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],kt:[1],c:[{n:[135,,,,147,,,,159,,,,,,,,,,,,,,,,,,,,,,,,139,,,,151,,,,163,,,,,,,,,,,,,,,,,,,,,,,,142,,,,154,,,,166],f:[]}]}],bt:11025,Bt:32,xt:0,yt:1},j={$t:[{vt:[2,138,116,0,2,138,113,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],kt:[1],c:[{n:[135],f:[]}]}],bt:5513,Bt:32,xt:0,yt:1},E={$t:[{vt:[0,91,128,0,0,95,128,12,0,0,12,0,72,0,0,0,0,0,0,0,2,255,0,0,32,83,3,21,4],kt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,142],f:[]}]}],bt:5513,Bt:32,xt:0,yt:1};var D={$t:[{vt:[0,0,128,0,0,0,128,0,0,125,0,1,59,0,0,0,0,0,0,0,1,193,171,0,29,39,3,88,3],kt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,140],f:[]}]}],bt:5513,Bt:32,xt:0,yt:1};const P={$t:[{vt:[2,138,116,0,2,138,128,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],kt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,142],f:[]}]}],bt:5513,Bt:32,xt:0,yt:1},I=.25,L=.15,S=2,T=document.getElementById("canvas"),N=T.getContext("2d"),H={ht:1,jt:2,Et:4,Dt:8,Pt:16,It:18,Lt:32,St:22};let G={Tt:null,Nt:null,Ht:null,inputMode:H.ht,Gt:H.ht,Jt:"",Ut:"",Vt:"",Wt:"",zt:{x:0,y:0},Ot:!1,Rt:{ht:null,jt:null,qt:null,Qt:null,Kt:null}};function J(t,s){var n=new A;n.init(t);var e=!1;let i=setInterval((function(){if(e)clearInterval(i);else if(e=n.gt()>=1){var t=n.Ft(),o=document.createElement("audio");o.preload="auto",o.src=URL.createObjectURL(new Blob([t],{type:"audio/wav"})),G.Rt[s]=o}}),0)}function U(){const t=document.getElementById("js-hit-ball");t.classList.contains("disabled")||(G.inputMode=H.ht,t.classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 2px ${q.wt}`,document.getElementById("js-place-wall").style.boxShadow=`0 5px ${q.wt}`)}function V(){const t=window.innerWidth/T.width,s=window.innerHeight/T.height;return Math.min(t,s)}G.Xt=document.getElementById("game-ui"),G.Yt=document.getElementById("hole-number"),G.Zt=document.getElementById("canvas-container"),G._t=document.getElementById("js-prev"),G.ts=document.getElementById("js-next"),document.getElementById("js-hit-ball").addEventListener("click",(t=>{t.preventDefault(),U()})),document.getElementById("js-place-wall").addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||(G.inputMode=H.jt,t.currentTarget.classList.add("active"),document.getElementById("js-hit-ball").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 5px ${q.wt}`,document.getElementById("js-place-wall").style.boxShadow=`0 2px ${q.wt}`)})),document.getElementById("js-reset").addEventListener("click",(t=>{t.preventDefault(),gt(),wt()})),G._t.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||ft(-1===O?z.length:O)})),G.ts.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||ft(O+2)}));const W=new o(0,0,0,0,!0,!0),z=[new w,new m,new M,new p,new C,new v,new x,new b,new B,new g,new $,new k,new y];let O=0,R=(O+1)%z.length,q=z[O];q.reset();let Q=z[R];const K=[],X=new class{constructor(t,s,n,e){this.canvas=t,this.ss=s,this.ns=n,this.es=e,this.os={x:0,y:0},this.hs={x:0,y:0},this.rs={x:0,y:0},this.cs={x:0,y:0},this.pressed=!1,this.boundingRect=this.canvas.getBoundingClientRect(),this.ls(this.canvas)}resize(){this.boundingRect=this.canvas.getBoundingClientRect()}ls(t){t.addEventListener("mousedown",this.us.bind(this),{capture:!0,passive:!1}),window.addEventListener("mousemove",this.ds.bind(this),{capture:!0,passive:!1}),window.addEventListener("mouseup",this.fs.bind(this),{capture:!0,passive:!1}),t.addEventListener("touchstart",this.ws.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchend",this.fs.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchmove",this.Ms.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.fs.bind(this),{capture:!0,passive:!1})}ps(){this.rs.x=(this.hs.x-this.os.x)/t,this.rs.y=(this.os.y-this.hs.y)/t}Cs(t){const s=canvas.getBoundingClientRect();let n,e;if(t instanceof MouseEvent)n=t.clientX-s.left,e=t.clientY-s.top;else if(t instanceof TouchEvent){const t=event.touches[0];n=t.clientX-s.left,e=t.clientY-s.top}n*=canvas.width/s.width,e*=canvas.height/s.height,this.cs.x=n,this.cs.y=e}vs(t){let s=0;return t instanceof MouseEvent?s=t.clientX:t instanceof TouchEvent&&(s=t.changedTouches[0].clientX),(s-this.boundingRect.left)*(this.canvas.width/this.boundingRect.width)}xs(t){let s=0;return t instanceof MouseEvent?s=t.clientY:t instanceof TouchEvent&&(s=t.changedTouches[0].clientY),(s-this.boundingRect.top)*(this.canvas.height/this.boundingRect.height)}ws(t){t.preventDefault(),this.Cs(t),this.bs(this.vs(t),this.xs(t))}Ms(t){t.preventDefault(),this.Cs(t),this.Bs(this.vs(t),this.xs(t)),console.log(this.pressed)}us(t){t.preventDefault(),this.Cs(t),this.bs(this.vs(t),this.xs(t))}ds(t){t.preventDefault(),this.Cs(t),this.Bs(this.vs(t),this.xs(t))}bs(t,s){this.pressed=!0,this.os.x=t,this.os.y=s,this.hs.x=t,this.hs.y=s,this.ps(),this.ss()}Bs(s,n){if(!this.pressed)return;const e=s-this.os.x,i=n-this.os.y,o=Math.hypot(e,i);if(this.hs.x=s,this.hs.y=n,o>t){const s=e/o*t,n=i/o*t;this.hs.x=this.os.x+s,this.hs.y=this.os.y+n}this.ps(),this.es()}fs(t){0!=this.pressed&&(t.preventDefault(),t.stopPropagation(),this.pressed=!1,this.os.x=0,this.os.y=0,this.hs.x=0,this.hs.y=0,this.ps(),this.ns())}draw(t){this.pressed&&(this.gs(t),this.$s(t))}gs(s){s.strokeStyle="#FFD700",s.lineWidth=6,s.beginPath(),s.arc(this.os.x,this.os.y,t,0,2*Math.PI),s.stroke(),s.closePath()}$s(t){t.strokeStyle="#F0E68C",t.lineWidth=6,t.beginPath(),t.arc(this.hs.x,this.hs.y,125,0,2*Math.PI),t.fillStyle="#F0E68C",t.globalAlpha=.5,t.fill(),t.globalAlpha=1,t.closePath()}}(T,(function(){if(G.zt.x=X.cs.x,G.zt.y=X.cs.y,G.Xt.innerHTML=G.Wt,G.inputMode!==H.Lt)for(let t=0;t<q.ct.length;t++){const s=q.ct[t];if(!s.v)continue;const n=s.N(X.cs.x,X.cs.y);if(s.J(X.cs.x,X.cs.y))return void q.ct.splice(t,1);if(n)return G.Gt=G.inputMode,G.inputMode=H.Et,G.Nt=s,void(G.Ht=n);s.S(X.cs.x,X.cs.y)&&(G.Gt=G.inputMode,G.inputMode=H.Dt,G.Nt=s,G.Ht=null)}G.inputMode===H.ht?function(){K.length=0;for(let t=0;t<q.rt.length;t++){const s=q.rt[t];K.push(new h(s.u.x,s.u.y,X.rs.x,X.rs.y))}}():G.inputMode&H.It&&Y.k.push({x:X.cs.x,y:X.cs.y})}),(function(){G.inputMode===H.ht?function(){if(0===K.length)return;Bt("hit");for(let t=0;t<q.rt.length;t++){const s=q.rt[t];if(s.tt)continue;const n=K[t],e=Math.cos(n.angle)*n.W*.05,i=Math.sin(n.angle)*n.W*.05;s.m.x=e,s.m.y=i,s.ht=!0}t=K[0].angle,s=K[0].W,function(t,s){const n=document.styleSheets[0],e="shake-animation",i="shake",o=.1*s,h=.75;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].name===e){n.deleteRule(t);break}const r=-Math.cos(t)*o,a=Math.sin(t)*o,c=`\n    @keyframes ${e} {\n      0% { transform: translate(${r}px, ${a}px); }\n      60% { transform: translate(${-.3*r}px, ${-.3*a}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;n.insertRule(c,n.cssRules.length);let l=-1;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].selectorText===`.${i}`){l=t;break}const u=`\n    .${i} {\n      animation: ${e} ${h}s ease-out;\n    }\n  `;l>=0?(n.deleteRule(l),n.insertRule(u,l)):n.insertRule(u,n.cssRules.length)}(t,s),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3),K.length=0,q.ht=!0,G.inputMode=H.Lt,T.style.cursor="not-allowed",document.getElementById("js-hit-ball").classList.add("disabled"),document.getElementById("js-place-wall").classList.add("disabled"),G.ts.classList.add("disabled"),G._t.classList.add("disabled");var t,s;const n=document.getElementById("js-reset");n.classList.remove("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{"js-reset"!==t.id&&(t.style.backgroundColor=null,t.style.boxShadow=null)})),n.style.backgroundColor=q.ft,n.style.boxShadow=`0 5px ${q.wt}`,n.style.color=bt(...xt(q.ft)),G.Zt.style.transform=null,G.Vt=G.Ut}():G.inputMode&H.It?function(){if(0===Y.k.length)return;if(it(Y.k[0].x,Y.k[0].y,X.cs.x,X.cs.y)<S&&1===Y.k.length)return;if(Y.k.push({x:X.cs.x,y:X.cs.y}),Y.k.length<2)return;q.ct.push(new o(Y.k[0].x,Y.k[0].y,Y.k[1].x,Y.k[1].y,!0)),Y=new r}():(G.inputMode===H.Et||G.inputMode===H.Dt)&&(G.inputMode=G.Gt,G.Nt=null,G.Ht=null);G.Xt.innerHTML=G.Wt}),(function(){G.inputMode===H.ht?function(){if(0===K.length)return;let t=1;for(let s=0;s<K.length;s++){const n=K[s],e=q.rt[s];if(e.tt)continue;t=e.st;const i=t+_(X),o=it(X.hs.x,X.hs.y,X.os.x,X.os.y);n.angle=i,n.W=o}const s=K[0];G.Ut=`${(180*s.angle/Math.PI).toFixed(0)}° | ${s.W.toFixed(0)}`;let n="";G.Vt.length>0&&(n=`<div class="prev-ui-text">${G.Vt}</div>`);n+=`<div>${G.Ut}</div>`,G.Xt.innerHTML=n,function(t,s){const n=-Math.cos(s)*t*.1,e=Math.sin(s)*t*.1;G.Zt.style.transform=`translate(${n}px, ${e}px)`}(s.W,s.angle)}():G.inputMode===H.Et?function(){G.Ht&&(G.Ht===G.Nt.t?G.Nt.B(X.cs.x,X.cs.y,G.Nt.i.x,G.Nt.i.y):G.Nt.B(G.Nt.t.x,G.Nt.t.y,X.cs.x,X.cs.y));Z(G.Nt)}():G.inputMode===H.Dt?function(){if(G.Nt){const t=X.cs.x-G.zt.x,s=X.cs.y-G.zt.y;G.Nt.B(G.Nt.t.x+t,G.Nt.t.y+s,G.Nt.i.x+t,G.Nt.i.y+s),G.zt.x=X.cs.x,G.zt.y=X.cs.y}Z(G.Nt)}():G.inputMode===H.jt&&Y.k.length>0&&Z(Y)}));let Y=new r;function Z(t){if(1===t.k.length){const s=X.cs.x-t.k[0].x,n=X.cs.y-t.k[0].y,e=(180*Math.atan2(n,s)/Math.PI+360)%360;G.Xt.innerText=`${e.toFixed(0)}°`,-0===e&&(G.Xt.innerText="0")}else{const s=t.k[1].x-t.k[0].x,n=t.k[1].y-t.k[0].y,e=(180*Math.atan2(n,s)/Math.PI+360)%360;G.Xt.innerText=`${e.toFixed(0)}°`,-0===e&&(G.Xt.innerText="0")}}function _(t){return Math.atan2(-(t.hs.y-t.os.y),-(t.hs.x-t.os.x))}function tt(t){t.u.x+t.Y<0&&(t.u.x=T.width-t.Y),t.u.x-t.Y>T.width&&(t.u.x=t.Y),t.u.y+t.Y<0&&(t.u.y=T.height-t.Y),t.u.y-t.Y>T.height&&(t.u.y=t.Y)}function st(t,s){const n=t.u.x-s.u.x,e=t.u.y-s.u.y;return Math.sqrt(n*n+e*e)<t.Y+s.Y}function nt(t,s){const n=t.u.x-s.u.x,e=t.u.y-s.u.y,i=Math.sqrt(n*n+e*e);if(i>t.Y+s.Y)return 0;const o=t.Y+s.Y;return(o-i)/o}function et(t,s){const n=s.u.x-t.u.x,e=s.u.y-t.u.y,i=Math.sqrt(n*n+e*e);if(0===i)return;const o=t.Y+s.Y-i,h=n/i,r=e/i;o>0&&(t.u.x-=o*h*(s.K/(t.K+s.K)),t.u.y-=o*r*(s.K/(t.K+s.K)),s.u.x+=o*h*(t.K/(t.K+s.K)),s.u.y+=o*r*(t.K/(t.K+s.K)));const a=(s.m.x-t.m.x)*h+(s.m.y-t.m.y)*r;if(a>0)return;const c=-2*a/(1/t.K+1/s.K);t.m.x-=c/t.K*h,t.m.y-=c/t.K*r,s.m.x+=c/s.K*h,s.m.y+=c/s.K*r}function it(t,s,n,e){return Math.sqrt(Math.pow(n-t,2)+Math.pow(e-s,2))}function ot(t,s=!0){t.u.x-t.Y<0&&ht(t,t.u.x+T.width,t.u.y,s),t.u.x+t.Y>T.width&&ht(t,t.u.x-T.width,t.u.y,s),t.u.y-t.Y<0&&ht(t,t.u.x,t.u.y+T.height,s),t.u.y+t.Y>T.height&&ht(t,t.u.x,t.u.y-T.height,s),ht(t,t.u.x,t.u.y,s)}function ht(t,s,n,e=!0){N.beginPath(),N.arc(s,n,t.Y,0,2*Math.PI),N.fillStyle=`rgba(255, 255, 255, ${t.alpha})`;const i=`rgba(${t.Z[0]}, ${t.Z[1]}, ${t.Z[2]}, ${t.alpha})`;e||(N.fillStyle=i),N.strokeStyle=`rgba(0, 0, 0, ${t.alpha})`,N.lineWidth=5,N.setLineDash([]),N.closePath(),e&&N.stroke(),N.fill()}function rt(t){N.beginPath(),N.arc(t.u.x,t.u.y,t.Y,0,2*Math.PI),N.fillStyle=t.color,N.fill(),N.closePath()}function at(){if(N.clearRect(0,0,T.width,T.height),-1!==O){!function(t){G.Zt.style.backgroundColor=t.backgroundColor,G.Yt.style.color=t.dt,t.draw(N);for(let s=0;s<t.lt.length;s++)rt(t.lt[s]);for(let s=0;s<t.ct.length;s++)t.ct[s].draw(N);G.inputMode&H.It&&Y.k.length>0&&(W.B(Y.k[0].x,Y.k[0].y,X.cs.x,X.cs.y),W.jt=G.inputMode===H.jt,W.draw(N));for(let s=0;s<t.rt.length;s++){const n=t.rt[s];if(n.ht)for(let t=0;t<n.et.length;t++)ot(n.et[t],!1);ot(n)}}(q);for(let t=0;t<K.length;t++){const s=K[t];q.rt[t].tt||ct(s)}}}function ct(t){lt(N,t.V.x,t.V.y,t.R.x,t.R.y);const s=Math.abs(t.V.x-t.R.x),n=Math.abs(t.V.y-t.R.y);let e=t.V.x,i=t.R.x,o=t.V.y,h=t.R.y;t.R.x<0&&(e=t.V.x+T.width,i=e-s),t.R.x>T.width&&(e=t.V.x-T.width,i=e+s),t.R.y<0&&(o=t.V.y+T.height,h=o-n),t.R.y>T.height&&(o=t.V.y-T.height,h=o+n),lt(N,e,o,i,h)}function lt(t,s,n,e,i){const o=it(s,n,e,i);var h=Math.min(o,20),r=Math.atan2(i-n,e-s);t.fillStyle="#fff",t.strokeStyle="#000",t.lineWidth=5,t.beginPath(),t.moveTo(s,n),t.lineTo(e-h/2*Math.cos(r),i-h/2*Math.sin(r)),t.stroke(),t.strokeStyle="#fff",t.fillStyle="#fff",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(e,i),t.lineTo(e-h*Math.cos(r-Math.PI/6),i-h*Math.sin(r-Math.PI/6)),t.lineTo(e-h*Math.cos(r+Math.PI/6),i-h*Math.sin(r+Math.PI/6)),t.closePath(),t.fill(),t.lineWidth=3,t.strokeStyle="#000",t.stroke(),t.fillStyle="#fff",t.fill(),t.beginPath(),t.moveTo(s,n),t.lineTo(e-h/2*Math.cos(r),i-h/2*Math.sin(r)),t.strokeStyle="#fff",t.lineWidth=2,t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(s,n,5,0,2*Math.PI),t.fill(),t.closePath()}function ut(t){q.update();for(let s=0;s<q.rt.length;s++){const n=q.rt[s],e=K[s];n.update(t);for(let t=0;t<q.rt.length;t++){if(s===t)continue;const e=q.rt[t];n.tt||e.tt||n.alpha<.5||st(n,e)&&et(n,e)}e&&(e.V.x=n.u.x,e.V.y=n.u.y),G.inputMode===H.Lt&&(tt(n),mt(n),dt(n))}if(q.Mt&&!G.Ot&&-1!==O&&(Bt("winLevel"),function(){const t=G.Zt;G.Ot=!0,t.classList.add("offscreen-right"),t.style.transition="transform 1s ease-in-out";const s=O;setTimeout((()=>{ft(s+2>z.length?"win":s+2),t.classList.remove("offscreen-right"),t.classList.add("offscreen-left"),t.style.transition="none",setTimeout((()=>{t.style.transition="transform 1s ease-in-out",t.classList.remove("offscreen-left"),t.classList.add("onscreen"),setTimeout((()=>{t.style.transition="none",G.Ot=!1,t.classList.remove("onscreen")}),1e3)}),50)}),1e3)}()),q.ht)for(let t=0;t<q.rt.length;t++){const s=q.rt[t];s.tt||(null===G.Tt&&(G.Tt=Date.now()),it(s.m.x,s.m.y,0,0)<L?null===G.Tt&&(G.Tt=Date.now()):G.Tt=null,null!==G.Tt&&Date.now()-G.Tt>1e3&&(gt(),wt(),Bt("loseLevel")))}for(let t=0;t<q.ct.length;t++){const s=q.ct[t];s.C&&s.update()}}function dt(t){for(let s=0;s<q.ct.length;s++){const n=q.ct[s];if(n.C)continue;const e=l(t,n);if(e){const s=.5*Math.hypot(t.m.x,t.m.y);n.P(s),Bt("wall"),$t(Math.random()*Math.PI*2),t.u.x+=e.q.x,t.u.y+=e.q.y;const i=e.axis,o=t.m.x*i.x+t.m.y*i.y;t.m.x-=2*o*i.x,t.m.y-=2*o*i.y}}}function ft(t){if("win"===t)return document.getElementById("title").classList.add("hide"),document.getElementById("win").classList.remove("hide"),document.getElementById("win").childNodes.forEach((t=>{"SPAN"===t.tagName&&(t.classList.remove("letter"),t.classList.add("letter"))})),G.Wt="",G.Yt.innerText="",Bt("winGame"),location.hash="#/win",O=-1,void wt();1===t?(document.getElementById("win").classList.add("hide"),document.getElementById("title").classList.remove("hide"),document.getElementById("title").childNodes.forEach((t=>{"SPAN"===t.tagName&&(t.classList.remove("letter"),t.classList.add("letter"))}))):document.getElementById("win").classList.add("hide"),O=(t-1)%z.length;const s=(O+1)%z.length;q=z[O],Q=z[s],q.reset(),location.hash=`#/${O+1}`,G.Vt="",G.Yt.innerText=`${O+1}`,wt(),gt()}function wt(){document.getElementById("js-hit-ball").classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-reset").classList.remove("active"),document.getElementById("js-hit-ball").classList.remove("disabled"),document.getElementById("js-place-wall").classList.remove("disabled");document.getElementById("js-reset").classList.add("disabled"),G._t.classList.remove("disabled"),G.ts.classList.remove("disabled"),0===O&&G._t.classList.add("disabled"),O!==z.length-1&&-1!==O||G.ts.classList.add("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{let s=q.ft,n=`0 5px ${q.wt}`,e=bt(...xt(q.ft));t.classList.contains("disabled")?(t.style.backgroundColor=null,t.style.boxShadow=null,t.style.color=null):(t.style.backgroundColor=s,t.style.boxShadow=n,t.style.color=e)})),G.Tt=null,G.Nt=null,G.Ht=null,G.inputMode=H.ht,T.style.cursor="crosshair"}function mt(t){t.ks=!1;for(let s=0;s<q.lt.length;s++){const n=q.lt[s],e=n.u.x-t.u.x,i=n.u.y-t.u.y,o=Math.sqrt(e*e+i*i),h=Math.sqrt(t.m.x*t.m.x+t.m.y*t.m.y);if(o<=n.Y-t.Y&&h<I)t.tt=n,t.ks=!0;else if(st(t,n)){const s=.2*nt(t,n),h=s*e/o,r=s*i/o;t.m.x+=h,t.m.y+=r,t.alpha-=.01,t.alpha=Math.max(t.alpha,0),t.ks=!0}}t.ks||(t.alpha=1)}window.playSong=Bt;const Mt=1e3/60;let pt=0,Ct=0;function vt(){const t=window.location.hash.substring(2);return"win"===t?"win":0===t.length?1:parseInt(t,10)}function xt(t){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return s?[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]:null}function bt(t,s,n){const e=function(t,s,n){return.299*t+.587*s+.114*n}(t,s,n);return e>128?"black":"white"}function Bt(t){G.Rt[t]&&(G.Rt[t].currentTime=0,G.Rt[t].play())}function gt(){G.Ut="",G.Wt=`${O+1} / ${z.length}`,G.Xt.innerHTML=G.Wt,G.Xt.style.color=bt(...xt(q.ft)),G.Xt.style.backgroundColor=q.ft,q.reset()}function $t(t){!function(t){const s=document.styleSheets[0],n="shake-animation",e="shake";for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].name===n){s.deleteRule(t);break}const i=1*Math.cos(t),o=1*-Math.sin(t);let h=`\n    @keyframes ${n} {\n      0% { transform: translate(0, 0); }\n      10% { transform: translate(${-10*i}px, ${10*o}px); }\n      20% { transform: translate(${10*i}px, ${-10*o}px); }\n      30% { transform: translate(${-8*i}px, ${8*o}px); }\n      40% { transform: translate(${8*i}px, ${-8*o}px); }\n      50% { transform: translate(${-5*i}px, ${5*o}px); }\n      60% { transform: translate(${5*i}px, ${-5*o}px); }\n      70% { transform: translate(${-3*i}px, ${3*o}px); }\n      80% { transform: translate(${3*i}px, ${-3*o}px); }\n      90% { transform: translate(${-1*i}px, ${o}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;s.insertRule(h,s.cssRules.length);let r=-1;for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].selectorText===`.${e}`){r=t;break}const a=`\n    .${e} {\n      animation: ${n} 1s ease-out;\n    }\n  `;r>=0?(s.deleteRule(r),s.insertRule(a,r)):s.insertRule(a,s.cssRules.length)}(t),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3)}!function t(s){const n=s-Ct;for(Ct=s,pt+=n;pt>=Mt;)ut(Mt),pt-=Mt;at(),requestAnimationFrame(t)}(0),document.addEventListener("DOMContentLoaded",(()=>{ft(vt()),U(),J(E,"hit"),J(P,"winLevel"),J(D,"wall"),J(j,"loseLevel"),J(F,"winGame")})),window.addEventListener("hashchange",(()=>{"win"!==vt()&&ft(vt())})),document.body.addEventListener("click",(()=>{document.getElementById("title").classList.add("hide")})),document.body.addEventListener("touchstart",(()=>{document.getElementById("title").classList.add("hide")})),window.addEventListener("mousemove",(t=>{const s=T.getBoundingClientRect();let n="crosshair";for(let e=0;e<q.ct.length;e++){let i=t.clientX-s.left,o=t.clientY-s.top;const h=q.ct[e];i/=V(),o/=V(),h.J(i,o)?n="pointer":(h.N(i,o)||h.S(i,o))&&(n="grab")}G.inputMode===H.Lt&&(n="not-allowed"),T.style.cursor=n}))})();