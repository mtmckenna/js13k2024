(()=>{"use strict";const t=250;class s{constructor(t,s,n){this.t=t,this.i=s,this.color=n,this.o=[],this.h()}h(){const{t,i:s,color:i}=this,o=Math.atan2(s.y-t.y,s.x-t.x),h=Math.hypot(s.x-t.x,s.y-t.y);for(let s=0;s<Math.ceil(h/e);s++){const h=t.x+Math.cos(o)*s*e,a=t.y+Math.sin(o)*s*e;this.o.push(new n(h,a,i,o))}this.angle=o}reset(){this.o=[],this.h()}update(){for(let t=0;t<this.o.length;t++)this.o[t].l<=0||this.o[t].update()}draw(t){for(let s=0;s<this.o.length;s++)this.o[s].l<=0||this.o[s].draw(t)}}class n{constructor(t,s,n,e){this.color=n,this.u={x:t,y:s},this.M={x:0,y:0},this.color=n,this.l=100,this.angle=e}update(){this.u.x+=this.M.x,this.u.y+=this.M.y,this.l--}draw(t){this.left<0||(this.l<75?t.fillStyle=`rgba(${this.color}, ${this.l/75})`:t.fillStyle=`rgba(${this.color}, 1)`,t.beginPath(),t.rect(this.u.x-e/2,this.u.y,e,e),t.fill(),t.closePath())}}const e=20,i="255,255,255";class o{constructor(t,n,o,h,a=!0,r=!0){this.width=e,this.u={x:0,y:0},this.t={x:0,y:0},this.i={x:0,y:0},this.m={x:0,y:0},this.C={x:0,y:0},this.p=!1,this.v=a,this.color=a?i:"0,0,0",this.B(t,n,o,h),this.F=new s(this.t,this.i,this.color)}B(t,s,n,e){this.t.x=t,this.t.y=s,this.i.x=n,this.i.y=e;const{t:i,i:o}=this;this.u.x=(i.x+o.x)/2,this.u.y=(i.y+o.y)/2,this.angle=Math.atan2(o.y-i.y,o.x-i.x)-Math.PI/2,this.A=this.$(i,o,this.width),this.k=this.D();const h=6*Math.sin(this.angle),a=6*-Math.cos(this.angle);this.m.x=this.t.x-h,this.m.y=this.t.y-a,this.C.x=this.i.x+h,this.C.y=this.i.y+a}update(){this.p&&this.F.update()}rotate(t,s,n){const e=this.t.x,i=this.t.y,o=this.i.x,h=this.i.y,a=Math.cos(t),r=Math.sin(t),c=a*(e-s)-r*(i-n)+s,l=r*(e-s)+a*(i-n)+n,u=a*(o-s)-r*(h-n)+s,d=r*(o-s)+a*(h-n)+n;this.B(c,l,u,d)}j(){}reset(){this.p=!1,this.F.reset()}L(t){this.p=!0,this.F=new s(this.t,this.i,this.color),this.F.o.forEach((s=>{const n=Math.random()*Math.PI*2;s.M.x=t*(2*Math.random()-1)*Math.cos(n),s.M.y=t*(2*Math.random()-1)*Math.sin(n)}))}$(t,s,n){const e=n/2,i=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2)/2,o=this.angle;return[{x:-e,y:-i},{x:-e,y:i},{x:e,y:i},{x:e,y:-i}].map((t=>({x:this.u.x+(t.x*Math.cos(o)-t.y*Math.sin(o)),y:this.u.y+(t.x*Math.sin(o)+t.y*Math.cos(o))})))}D(){const t=[],s=this.A,n=s.length;for(let e=0;e<n;e++){const i=(e+1)%n,o=s[i].x-s[e].x,h=s[i].y-s[e].y,a=Math.sqrt(o*o+h*h),r={x:-h/a,y:o/a};t.push(r)}return t}P(t){let s=Number.POSITIVE_INFINITY,n=-Number.POSITIVE_INFINITY;for(let e=0;e<this.A.length;e++){let i=this.A[e].x*t.x+this.A[e].y*t.y;s=Math.min(s,i),n=Math.max(n,i)}return{min:s,max:n}}I(t,s,n,e,i){const o=t-n,h=s-e;return o*o+h*h<=i*i}S(t,s){return this.T(t,s)}T(t,s){let n=!1;const e=this.A,i=e.length;for(let o=0,h=i-1;o<i;h=o++){const i=e[o].x,a=e[o].y,r=e[h].x,c=e[h].y;a>s!=c>s&&t<(r-i)*(s-a)/(c-a)+i&&(n=!n)}return n}H(t,s){return this.N(t,s)?this.t:this.G(t,s)?this.i:null}N(t,s){return this.I(t,s,this.m.x,this.m.y,15)}G(t,s){return this.I(t,s,this.C.x,this.C.y,15)}J(t,s){return this.v?this.I(t,s,this.u.x,this.u.y,15):null}draw(t){this.p?this.F.draw(t):this.U(t)}U(t){t.beginPath(),t.setLineDash([]),t.fillStyle=`rgba(${this.color}, 1.0)`,t.strokeStyle="#000",t.lineWidth=2,t.moveTo(this.A[0].x,this.A[0].y);for(let s=1;s<this.A.length;s++)t.lineTo(this.A[s].x,this.A[s].y);t.closePath(),t.fill(),t.stroke(),this.color===i&&(t.beginPath(),t.lineWidth=2,t.strokeStyle="red",t.moveTo(this.u.x-5,this.u.y-5),t.lineTo(this.u.x+5,this.u.y+5),t.moveTo(this.u.x-5,this.u.y+5),t.lineTo(this.u.x+5,this.u.y-5),t.stroke(),t.closePath(),t.beginPath(),t.fillStyle="rgba(255, 0, 0, 1.0)",t.arc(this.m.x,this.m.y,4,0,2*Math.PI),t.arc(this.C.x,this.C.y,4,0,2*Math.PI),t.fill())}}class h{constructor(t=0,s=0,n=0,e=1){this.V={x:t,y:s},this.angle=n,this.W=e,this.O={x:t,y:s}}get R(){return this.O.x=this.V.x+this.W*Math.cos(this.angle),this.O.y=this.V.y+this.W*Math.sin(this.angle),this.O}}class a{constructor(){this.A=[]}}function r(t,s){return t.max>s.min&&s.max>t.min}function c(t,s){return Math.min(t.max-s.min,s.max-t.min)}function l(t,s){let n=Number.POSITIVE_INFINITY,e=null,i=null;for(let o=0;o<s.k.length;o++){const h=s.k[o],a=s.P(h),l=t.P(h);if(!r(a,l))return null;{const t=c(a,l);t<n&&(n=t,e=h,i=s.A[o])}}for(const o of s.A){const h={x:t.u.x-o.x,y:t.u.y-o.y},a=Math.sqrt(h.x*h.x+h.y*h.y);if(0===a)continue;h.x/=a,h.y/=a;const l=s.P(h),u=t.P(h);if(!r(l,u))return null;{const t=c(l,u);t<n&&(n=t,e=h,i=o)}}if(n===Number.POSITIVE_INFINITY)return null;let o=t.u.x-i.x,h=t.u.y-i.y;return o*e.x+h*e.y<0&&(e.x=-e.x,e.y=-e.y),{q:{x:e.x*n,y:e.y*n},axis:e}}class u{K=1;X=50;constructor(t,s,n=Math.PI,e=8,i=!0){if(this.Y=e,this.color="#fff",this.Z="#fff",this.u={x:t,y:s},this._={x:t,y:s},this.M={x:0,y:0},this.tt=null,this.K=e,this.st=n,this.u.x=t,this.u.y=s,this.alpha=1,this.nt=0,this.et=[],this.it=0,this.ot=0,this.ht=!1,i)for(let i=0;i<this.X;i++){const i=new u(t,s,n,e,!1);i.alpha=0,i.Z=this.Z,this.et.push(i)}}P(t){const s=this.u.x*t.x+this.u.y*t.y;return{min:s-this.Y,max:s+this.Y}}update(){this.it++;const t=.98-this.nt;if(this.M.x*=t,this.M.y*=t,Math.abs(this.M.x)<.01&&(this.M.x=0),Math.abs(this.M.y)<.01&&(this.M.y=0),this.u.x+=this.M.x,this.u.y+=this.M.y,this.it%1==0){const t=this.et[this.ot];t.u.x=this.u.x,t.u.y=this.u.y,t.alpha=.25,this.ot=(this.ot+1)%this.X}for(let t=0;t<this.X;t++){this.et[t].alpha-=.009}}reset(){this.u.x=this._.x,this.u.y=this._.y,this.tt=null,this.M.x=0,this.M.y=0,this.alpha=1,this.it=0,this.ht=!1;for(let t=0;t<this.X;t++)this.et[t]=new u(this._.x,this._.y,this.st,this.Y),this.et[t].alpha=0}}const d=["#B4E7CE","#59A96A","#9BDEAC","#474A2C","#BB8A89","#977390","#AC7B7D","#785589","#F4F4F9","#586F7C","#B8DBD9","#2F4550","#AFB3F7","#7A93AC","#92BCEA","#617073","#FEC0AA","#84732B","#EC4E20","#574F2A","#F2F6D0","#D9D2B6","#D0E1D4","#71697A","#FAA275","#CE6A85","#FF8C61","#985277","#BEEF9E","#828C51","#A6C36F","#335145","#CF9893","#A96DA3","#BC7C9C","#3B3B58","#FFA9E7","#7F2CCB","#FF84E8","#414361","#93B5C6","#F0CF65","#D7816A","#BD4F6C","#524948","#7CB4B8","#70F8BA","#57467B","#6A8D73","#E4FFE1","#FFE8C2","#F0A868"];class f{constructor(t,s,n,e,i,o){this.u={x:t,y:s},this.M={x:i,y:o},this.Y=n,this.color=e,this.it=0}}class w{tt=null;constructor(t,s,n=15,e="black"){this.u={x:t,y:s},this.Y=n,this.color=e,this.o=[];for(let n=0;n<100;n++){const n=Math.floor(5*Math.random()+1)-5,e=d[Math.floor(Math.random()*d.length)],i=new f(t,s,5,e,n*Math.cos(Math.random()*Math.PI*2),n*Math.sin(Math.random()*Math.PI*2));i.it=Math.floor(100*Math.random()),this.o.push(i)}}rt(){for(let t=0;t<this.o.length;t++){const s=this.o[t];if(s.u.x+=s.M.x,s.u.y+=s.M.y,s.M.y+=.1,s.it++,s.it>100){s.u.x=this.u.x,s.u.y=this.u.y,s.it=0;const t=Math.floor(5*Math.random()+1)-5;s.M.x=t*Math.cos(Math.random()*Math.PI*2),s.M.y=t*Math.sin(Math.random()*Math.PI*2)}}}ct(t){for(let s=0;s<this.o.length;s++){const n=this.o[s];t.beginPath(),t.arc(n.u.x,n.u.y,n.Y,0,2*Math.PI),t.fillStyle=n.color,t.fill()}}}class M{lt=[];ut=[];dt=[];number=0;ft=!1;backgroundColor="red";wt="red";Mt="red";Ct="red";width=500;height=500;ht=!1;reset(){this.ht=!1,this.ft=!1,this.lt.forEach((t=>{var s,n;t.reset(),t.Z=(s=this.wt,(n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s))?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:null),t.et.forEach((s=>{s.Z=t.Z}))})),this.ut.forEach((t=>{t.reset()})),document.getElementById("js-place-wall").classList.remove("disabled"),document.getElementById("js-place-wall").setAttribute("disabled",!1),document.body.style.backgroundColor=this.wt;const t=document.getElementById("js-place-wall");t.style.display="block",t.classList.remove("jiggle"),this.number<5?t.style.display="none":5===this.number&&t.classList.add("jiggle")}get vt(){for(let t=0;t<this.lt.length;t++)if(!this.lt[t].tt)return!1;return!0}update(){}draw(t){}}class m extends M{backgroundColor="#B4E7CE";wt="#59A96A";Mt="#9BDEAC";Ct="#474A2C";number=1;constructor(){super(),this.dt=[new w(400,250)],this.lt=[new u(250,250)]}draw(t){j(t,250,250,325,250)}}class C extends M{backgroundColor="#BB8A89";wt="#977390";Mt="#AC7B7D";Ct="#785589";number=2;constructor(){super(),this.dt=[new w(400,125),new w(400,375)],this.lt=[new u(250,125),new u(250,375)]}}class p extends M{backgroundColor="#F4F4F9";wt="#586F7C";Mt="#B8DBD9";Ct="#2F4550";number=3;constructor(){super(),this.dt=[new w(100,125),new w(400,375)],this.lt=[new u(250,125),new u(250,375,0)]}}class v extends M{backgroundColor="#AFB3F7";wt="#7A93AC";Mt="#92BCEA";Ct="#617073";number=4;constructor(){super(),this.dt=[new w(300,125),new w(400,375)],this.lt=[new u(50,125),new u(150,375,0)],this.ut=[new o(100,50,100,200,!1)]}draw(t){j(t,50,125,-50,125)}}class B extends M{backgroundColor="#FEC0AA";wt="#84732B";Mt="#EC4E20";Ct="#574F2A";number=5;constructor(){super(),this.dt=[new w(400,125),new w(350,375)],this.lt=[new u(200,125),new u(250,375,0)],this.ut=[new o(25,0,25,500,!1),new o(475,0,475,500,!1)]}draw(t){x(t,100,75,20,100),j(t,200,125,55,125)}}function x(t,s,n,e,i,o=0){t.save(),t.translate(s,n),t.rotate(o),t.beginPath(),t.setLineDash([5,15]),t.strokeStyle="black",t.lineWidth=2,t.rect(0,0,e,i),t.stroke(),t.restore()}class b extends M{backgroundColor="#F2F6D0";wt="#D9D2B6";Mt="#D0E1D4";Ct="#71697A";number=6;constructor(){super();const t=250,s=250,n=200;this.dt=[new w(t,50),new w(t-n*Math.cos(Math.PI/6),s+n*Math.sin(Math.PI/6)),new w(t+n*Math.cos(Math.PI/6),s+n*Math.sin(Math.PI/6))];const e=[{x:t,y:450},{x:t-n*Math.cos(Math.PI/6),y:s-n*Math.sin(Math.PI/6)},{x:t+n*Math.cos(Math.PI/6),y:s-n*Math.sin(Math.PI/6)}],i=(e[0].x+e[1].x+e[2].x)/3,o=(e[0].y+e[1].y+e[2].y)/3,h=(t,s)=>Math.atan2(o-s,i-t);this.lt=[new u(e[0].x,e[0].y,h(e[0].x,e[0].y)-Math.PI/2),new u(e[1].x,e[1].y,h(e[1].x,e[1].y)-Math.PI/2),new u(e[2].x,e[2].y,h(e[2].x,e[2].y)-Math.PI/4)],this.ut=[]}draw(t){x(t,350,150,20,100,Math.PI/16)}}class F extends M{backgroundColor="#FAA275";wt="#CE6A85";Mt="#FF8C61";Ct="#985277";number=7;constructor(){super(),this.dt=[new w(150,400),new w(250,400),new w(350,400)],this.lt=[new u(150,150),new u(250,200),new u(350,250)],this.ut=[]}}class A extends M{backgroundColor="#BEEF9E";wt="#828C51";Mt="#A6C36F";Ct="#335145";number=8;constructor(){super(),this.dt=[new w(250,250,25)];this.lt=[new u(400,250,0),new u(250+150*Math.cos(Math.PI),250+150*Math.sin(Math.PI),Math.PI)]}}class g extends M{backgroundColor="#CF9893";wt="#A96DA3";Mt="#BC7C9C";Ct="#3B3B58";number=9;constructor(){super(),this.dt=[new w(250,300),new w(200,250)],this.lt=[new u(250,200,-Math.PI),new u(300,250,-Math.PI/2)],this.ut=[new o(200,200,300,300,!1),new o(300,200,200,300,!1)]}}class $ extends M{backgroundColor="#FFA9E7";wt="#7F2CCB";Mt="#FF84E8";Ct="#414361";number=10;constructor(){super(),this.dt=[new w(200,200),new w(400,400)],this.lt=[new u(250,250,-Math.PI),new u(300,300,-Math.PI/2)],this.ut=[new o(100,200,200,100,!1)]}}class k extends M{backgroundColor="#93B5C6";wt="#F0CF65";Mt="#D7816A";Ct="#BD4F6C";number=11;constructor(){super(),this.dt=[new w(100,100),new w(250,100),new w(400,100)],this.lt=[new u(250,200,Math.PI),new u(175,325,Math.PI/4),new u(325,325,-Math.PI/4)],this.ut=[]}}class y extends M{backgroundColor="#524948";wt="#7CB4B8";Mt="#70F8BA";Ct="#57467B";number=12;constructor(){super(),this.dt=[new w(200,200),new w(300,200)],this.lt=[new u(100,250,Math.PI),new u(400,250,Math.PI/3)],this.ut=[new o(125,125,175,300,!1),new o(375,125,325,300,!1),new o(125,125,175,150,!1),new o(375,125,325,150,!1),new o(175,150,325,150,!1),new o(175,300,325,300,!1),new o(200,250,200,275,!1),new o(300,250,300,275,!1),new o(200,275,300,275,!1)]}}class E extends M{backgroundColor="#6A8D73";wt="#E4FFE1";Mt="#FFE8C2";Ct="#F0A868";number=13;constructor(){super(),this.dt=[new w(250,250)],this.lt=[new u(250,100,Math.PI)];const t=new o(175,150,175,350,!1),s=new o(325,150,325,350,!1),n=new o(185,160,315,160,!1),e=new o(185,340,315,340,!1);this.ut=[t,s,n,e],this.Bt=[t,s,n,e]}update(){super.update();for(let t=0;t<this.Bt.length;t++){this.Bt[t].rotate(.01,250,250)}}}const D=500;function j(t,s,n,e,i){L(t,s,n,e,i);const o=Math.abs(s-e),h=Math.abs(n-i);let a=s,r=e,c=n,l=i;e<0&&(a=s+D,r=a-o),e>D&&(a=s-D,r=a+o),i<0&&(c=n+D,l=c-h),i>D&&(c=n-D,l=c+h),L(t,a,c,r,l)}function L(t,s,n,e,i){const o=Math.sqrt(Math.pow(e-s,2)+Math.pow(i-n,2));var h=Math.min(o,20),a=Math.atan2(i-n,e-s);t.strokeStyle="#000",t.lineWidth=2,t.setLineDash([3,3]),t.beginPath(),t.moveTo(e,i),t.lineTo(e-h*Math.cos(a-Math.PI/6),i-h*Math.sin(a-Math.PI/6)),t.lineTo(e-h*Math.cos(a+Math.PI/6),i-h*Math.sin(a+Math.PI/6)),t.closePath(),t.stroke(),t.beginPath(),t.moveTo(s,n);let r=e-h*Math.cos(a),c=i-h*Math.sin(a);t.lineTo(r,c),t.stroke()}const P=function(){var t,s,n,e,i,o=function(t){return Math.sin(6.283184*t)},h=function(t){return.003959503758*2**((t-128)/12)},a=function(t,s,n){var e,i,o,a,c,l,u=r[t.xt[0]],d=t.xt[1],f=t.xt[3]/32,w=r[t.xt[4]],M=t.xt[5],m=t.xt[8]/32,C=t.xt[9],p=t.xt[10]*t.xt[10]*4,v=t.xt[11]*t.xt[11]*4,B=t.xt[12]*t.xt[12]*4,x=1/B,b=-t.xt[13]/16,F=t.xt[14],A=n*2**(2-t.xt[15]),g=new Int32Array(p+v+B),$=0,k=0;for(e=0,i=0;e<p+v+B;e++,i++)i>=0&&(i-=A,c=h(s+(15&(F=F>>8|(255&F)<<4))+t.xt[2]-128),l=h(s+(15&F)+t.xt[6]-128)*(1+8e-4*t.xt[7])),o=1,e<p?o=e/p:e>=p+v&&(o=(1-(o=(e-p-v)*x))*3**(b*o)),a=u($+=c*o**f)*d,a+=w(k+=l*o**m)*M,C&&(a+=(2*Math.random()-1)*C),g[e]=80*a*o|0;return g},r=[o,function(t){return t%1<.5?1:-1},function(t){return t%1*2-1},function(t){var s=t%1*4;return s<2?s-1:3-s}];this.init=function(o){t=o,s=o.bt,n=0,e=o.Ft*o.At*(s+1)*2,i=new Int32Array(e)},this.gt=function(){var h,c,l,u,d,f,w,M,m,C,p,v,B,x,b=new Int32Array(e),F=t.$t[n],A=t.Ft,g=t.At,$=0,k=0,y=!1,E=[];for(l=0;l<=s;++l)for(w=F.kt[l],u=0;u<g;++u){var D=w?F.c[w-1].f[u]:0;D&&(F.xt[D-1]=F.c[w-1].f[u+g]||0,D<17&&(E=[]));var j=r[F.xt[16]],L=F.xt[17]/512,P=2**(F.xt[18]-9)/A,I=F.xt[19],S=F.xt[20],T=43.23529*F.xt[21]*3.141592/44100,H=1-F.xt[22]/255,N=1e-5*F.xt[23],G=F.xt[24]/32,J=F.xt[25]/512,U=6.283184*2**(F.xt[26]-9)/A,V=F.xt[27]/255,W=F.xt[28]*A&-2;for(p=(l*g+u)*A,d=0;d<4;++d)if(f=w?F.c[w-1].n[u+d*g]:0){E[f]||(E[f]=a(F,f,A));var z=E[f];for(c=0,h=2*p;c<z.length;c++,h+=2)b[h]+=z[c]}for(c=0;c<A;c++)(C=b[M=2*(p+c)])||y?(v=T,I&&(v*=j(P*M)*L+.5),k+=(v=1.5*Math.sin(v))*(B=H*(C-k)-($+=v*k)),C=3==S?k:1==S?B:$,N&&(C=(C*=N)<1?C>-1?o(.25*C):-1:1,C/=N),y=(C*=G)*C>1e-5,x=C*(1-(m=Math.sin(U*M)*J+.5)),C*=m):x=0,M>=W&&(x+=b[M-W+1]*V,C+=b[M-W]*V),b[M]=0|x,b[M+1]=0|C,i[M]+=0|x,i[M+1]+=0|C}return++n/t.yt},this.Et=function(t){for(var s=t.createBuffer(2,e/2,44100),n=0;n<2;n++)for(var o=s.getChannelData(n),h=n;h<e;h+=2)o[h>>1]=i[h]/65536;return s},this.Dt=function(){var t=44+2*e-8,s=t-36,n=new Uint8Array(44+2*e);n.set([82,73,70,70,255&t,t>>8&255,t>>16&255,t>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&s,s>>8&255,s>>16&255,s>>24&255]);for(var o=0,h=44;o<e;++o){var a=i[o];a=a<-32767?-32767:a>32767?32767:a,n[h++]=255&a,n[h++]=a>>8&255}return n},this.getData=function(t,s){for(var n=2*Math.floor(44100*t),e=new Array(s),o=0;o<2*s;o+=1){var h=n+o;e[o]=t>0&&h<i.length?i[h]/32768:0}return e}},I={$t:[{xt:[2,138,116,0,2,138,128,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],kt:[1],c:[{n:[149],f:[]}]}],Ft:5513,At:32,bt:0,yt:1},S={$t:[{xt:[2,138,116,0,2,138,128,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],kt:[1],c:[{n:[135,,,,147,,,,159,,,,,,,,,,,,,,,,,,,,,,,,139,,,,151,,,,163,,,,,,,,,,,,,,,,,,,,,,,,142,,,,154,,,,166],f:[]}]}],Ft:11025,At:32,bt:0,yt:1},T={$t:[{xt:[2,138,116,0,2,138,113,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],kt:[1],c:[{n:[135],f:[]}]}],Ft:5513,At:32,bt:0,yt:1},H={$t:[{xt:[0,91,128,0,0,95,128,12,0,0,12,0,72,0,0,0,0,0,0,0,2,255,0,0,32,83,3,21,4],kt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,142],f:[]}]}],Ft:5513,At:32,bt:0,yt:1};var N={$t:[{xt:[0,0,128,0,0,0,128,0,0,125,0,1,59,0,0,0,0,0,0,0,1,193,171,0,29,39,3,88,3],kt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,140],f:[]}]}],Ft:5513,At:32,bt:0,yt:1};const G={$t:[{xt:[2,138,116,0,2,138,128,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],kt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,142],f:[]}]}],Ft:5513,At:32,bt:0,yt:1},J=.25,U=.15,V=2,W=document.getElementById("canvas"),z=W.getContext("2d"),O={ht:1,jt:2,Lt:4,Pt:8,It:16,St:18,Tt:32,Ht:22};let R={Nt:null,Gt:null,Jt:null,inputMode:O.ht,Ut:O.ht,Vt:"",Wt:"",zt:"",Ot:"",Rt:{x:0,y:0},qt:!1,Qt:{ht:null,jt:null,Kt:null,Xt:null,Yt:null,Zt:null}};function q(t,s){var n=new P;n.init(t);var e=!1;let i=setInterval((function(){if(e)clearInterval(i);else if(e=n.gt()>=1){var t=n.Dt(),o=document.createElement("audio");o.preload="auto",o.src=URL.createObjectURL(new Blob([t],{type:"audio/wav"})),R.Qt[s]=o}}),0)}function Q(){const t=document.getElementById("js-hit-ball");t.classList.contains("disabled")||(R.inputMode=O.ht,t.classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 2px ${tt.Ct}`,document.getElementById("js-place-wall").style.boxShadow=`0 5px ${tt.Ct}`)}function K(){const t=window.innerWidth/W.width,s=window.innerHeight/W.height;return Math.min(t,s)}R._t=document.getElementById("game-ui"),R.ts=document.getElementById("hole-number"),R.ss=document.getElementById("canvas-container"),R.ns=document.getElementById("js-prev"),R.es=document.getElementById("js-next"),document.getElementById("js-hit-ball").addEventListener("click",(t=>{t.preventDefault(),Q()})),document.getElementById("js-place-wall").addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||(R.inputMode=O.jt,t.currentTarget.classList.add("active"),document.getElementById("js-hit-ball").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 5px ${tt.Ct}`,document.getElementById("js-place-wall").style.boxShadow=`0 2px ${tt.Ct}`)})),document.getElementById("js-reset").addEventListener("click",(t=>{t.preventDefault(),Dt(),xt()})),R.ns.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||Bt(-1===Z?Y.length:Z)})),R.es.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||Bt(Z+2)}));const X=new o(0,0,0,0,!0,!0),Y=[new m,new C,new p,new v,new B,new b,new F,new A,new g,new $,new k,new y,new E];let Z=0,_=(Z+1)%Y.length,tt=Y[Z];tt.reset();let st=Y[_];const nt=[],et=new class{constructor(t,s,n,e){this.canvas=t,this.os=s,this.hs=n,this.rs=e,this.cs={x:0,y:0},this.ls={x:0,y:0},this.us={x:0,y:0},this.ds={x:0,y:0},this.pressed=!1,this.boundingRect=this.canvas.getBoundingClientRect(),this.fs(this.canvas)}resize(){this.boundingRect=this.canvas.getBoundingClientRect()}fs(t){t.addEventListener("mousedown",this.ws.bind(this),{capture:!0,passive:!1}),window.addEventListener("mousemove",this.Ms.bind(this),{capture:!0,passive:!1}),window.addEventListener("mouseup",this.Cs.bind(this),{capture:!0,passive:!1}),t.addEventListener("touchstart",this.ps.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchend",this.Cs.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchmove",this.vs.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.Cs.bind(this),{capture:!0,passive:!1})}Bs(){this.us.x=(this.ls.x-this.cs.x)/t,this.us.y=(this.cs.y-this.ls.y)/t}xs(t){const s=canvas.getBoundingClientRect();let n,e;if(t instanceof MouseEvent)n=t.clientX-s.left,e=t.clientY-s.top;else if(t instanceof TouchEvent){const t=event.touches[0];n=t.clientX-s.left,e=t.clientY-s.top}n*=canvas.width/s.width,e*=canvas.height/s.height,this.ds.x=n,this.ds.y=e}bs(t){let s=0;return t instanceof MouseEvent?s=t.clientX:t instanceof TouchEvent&&(s=t.changedTouches[0].clientX),(s-this.boundingRect.left)*(this.canvas.width/this.boundingRect.width)}Fs(t){let s=0;return t instanceof MouseEvent?s=t.clientY:t instanceof TouchEvent&&(s=t.changedTouches[0].clientY),(s-this.boundingRect.top)*(this.canvas.height/this.boundingRect.height)}ps(t){t.preventDefault(),this.xs(t),this.As(this.bs(t),this.Fs(t))}vs(t){t.preventDefault(),this.xs(t),this.gs(this.bs(t),this.Fs(t)),console.log(this.pressed)}ws(t){t.preventDefault(),this.xs(t),this.As(this.bs(t),this.Fs(t))}Ms(t){t.preventDefault(),this.xs(t),this.gs(this.bs(t),this.Fs(t))}As(t,s){this.pressed=!0,this.cs.x=t,this.cs.y=s,this.ls.x=t,this.ls.y=s,this.Bs(),this.os()}gs(s,n){if(!this.pressed)return;const e=s-this.cs.x,i=n-this.cs.y,o=Math.hypot(e,i);if(this.ls.x=s,this.ls.y=n,o>t){const s=e/o*t,n=i/o*t;this.ls.x=this.cs.x+s,this.ls.y=this.cs.y+n}this.Bs(),this.rs()}Cs(t){0!=this.pressed&&(t.preventDefault(),t.stopPropagation(),this.pressed=!1,this.cs.x=0,this.cs.y=0,this.ls.x=0,this.ls.y=0,this.Bs(),this.hs())}draw(t){this.pressed&&(this.$s(t),this.ks(t))}$s(s){s.strokeStyle="#FFD700",s.lineWidth=6,s.beginPath(),s.arc(this.cs.x,this.cs.y,t,0,2*Math.PI),s.stroke(),s.closePath()}ks(t){t.strokeStyle="#F0E68C",t.lineWidth=6,t.beginPath(),t.arc(this.ls.x,this.ls.y,125,0,2*Math.PI),t.fillStyle="#F0E68C",t.globalAlpha=.5,t.fill(),t.globalAlpha=1,t.closePath()}}(W,(function(){if(R.Rt.x=et.ds.x,R.Rt.y=et.ds.y,R._t.innerHTML=R.Ot,R.inputMode!==O.Tt)for(let t=0;t<tt.ut.length;t++){const s=tt.ut[t];if(!s.v)continue;const n=s.H(et.ds.x,et.ds.y);if(s.J(et.ds.x,et.ds.y))return void tt.ut.splice(t,1);if(n)return R.Ut=R.inputMode,R.inputMode=O.Lt,R.Gt=s,void(R.Jt=n);s.S(et.ds.x,et.ds.y)&&(R.Ut=R.inputMode,R.inputMode=O.Pt,R.Gt=s,R.Jt=null)}R.inputMode===O.ht?function(){nt.length=0;for(let t=0;t<tt.lt.length;t++){const s=tt.lt[t];nt.push(new h(s.u.x,s.u.y,et.us.x,et.us.y))}}():R.inputMode&O.St&&it.A.push({x:et.ds.x,y:et.ds.y})}),(function(){R.inputMode===O.ht?function(){if(0===nt.length)return;Et("hit");for(let t=0;t<tt.lt.length;t++){const s=tt.lt[t];if(s.tt)continue;const n=nt[t],e=Math.cos(n.angle)*n.W*.05,i=Math.sin(n.angle)*n.W*.05;s.M.x=e,s.M.y=i,s.ht=!0}t=nt[0].angle,s=nt[0].W,function(t,s){const n=document.styleSheets[0],e="shake-animation",i="shake",o=.1*s,h=.75;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].name===e){n.deleteRule(t);break}const a=-Math.cos(t)*o,r=Math.sin(t)*o,c=`\n    @keyframes ${e} {\n      0% { transform: translate(${a}px, ${r}px); }\n      60% { transform: translate(${-.3*a}px, ${-.3*r}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;n.insertRule(c,n.cssRules.length);let l=-1;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].selectorText===`.${i}`){l=t;break}const u=`\n    .${i} {\n      animation: ${e} ${h}s ease-out;\n    }\n  `;l>=0?(n.deleteRule(l),n.insertRule(u,l)):n.insertRule(u,n.cssRules.length)}(t,s),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3),nt.length=0,tt.ht=!0,R.inputMode=O.Tt,W.style.cursor="not-allowed",document.getElementById("js-hit-ball").classList.add("disabled"),document.getElementById("js-place-wall").classList.add("disabled"),R.es.classList.add("disabled"),R.ns.classList.add("disabled");var t,s;const n=document.getElementById("js-reset");n.classList.remove("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{"js-reset"!==t.id&&(t.style.backgroundColor=null,t.style.boxShadow=null)})),n.style.backgroundColor=tt.Mt,n.style.boxShadow=`0 5px ${tt.Ct}`,n.style.color=yt(...kt(tt.Mt)),R.ss.style.transform=null,R.zt=R.Wt}():R.inputMode&O.St?function(){if(0===it.A.length)return;if(ut(it.A[0].x,it.A[0].y,et.ds.x,et.ds.y)<V&&1===it.A.length)return;if(it.A.push({x:et.ds.x,y:et.ds.y}),it.A.length<2)return;tt.ut.push(new o(it.A[0].x,it.A[0].y,it.A[1].x,it.A[1].y,!0)),it=new a}():(R.inputMode===O.Lt||R.inputMode===O.Pt)&&(R.inputMode=R.Ut,R.Gt=null,R.Jt=null);R._t.innerHTML=R.Ot}),(function(){R.inputMode===O.ht?function(){if(0===nt.length)return;let t=1;for(let s=0;s<nt.length;s++){const n=nt[s],e=tt.lt[s];if(e.tt)continue;t=e.st;const i=t+ht(et),o=ut(et.ls.x,et.ls.y,et.cs.x,et.cs.y);n.angle=i,n.W=o}const s=nt[0];R.Wt=`${(180*s.angle/Math.PI).toFixed(0)}° | ${s.W.toFixed(0)}`;let n="";R.zt.length>0&&(n=`<div class="prev-ui-text">${R.zt}</div>`);n+=`<div>${R.Wt}</div>`,R._t.innerHTML=n,function(t,s){const n=-Math.cos(s)*t*.1,e=Math.sin(s)*t*.1;R.ss.style.transform=`translate(${n}px, ${e}px)`}(s.W,s.angle)}():R.inputMode===O.Lt?function(){R.Jt&&(R.Jt===R.Gt.t?R.Gt.B(et.ds.x,et.ds.y,R.Gt.i.x,R.Gt.i.y):R.Gt.B(R.Gt.t.x,R.Gt.t.y,et.ds.x,et.ds.y));ot(R.Gt)}():R.inputMode===O.Pt?function(){if(R.Gt){const t=et.ds.x-R.Rt.x,s=et.ds.y-R.Rt.y;R.Gt.B(R.Gt.t.x+t,R.Gt.t.y+s,R.Gt.i.x+t,R.Gt.i.y+s),R.Rt.x=et.ds.x,R.Rt.y=et.ds.y}ot(R.Gt)}():R.inputMode===O.jt&&it.A.length>0&&ot(it)}));let it=new a;function ot(t){if(1===t.A.length){const s=et.ds.x-t.A[0].x,n=et.ds.y-t.A[0].y,e=(180*Math.atan2(n,s)/Math.PI+360)%360;R._t.innerText=`${e.toFixed(0)}°`,-0===e&&(R._t.innerText="0")}else{const s=t.A[1].x-t.A[0].x,n=t.A[1].y-t.A[0].y,e=(180*Math.atan2(n,s)/Math.PI+360)%360;R._t.innerText=`${e.toFixed(0)}°`,-0===e&&(R._t.innerText="0")}}function ht(t){return Math.atan2(-(t.ls.y-t.cs.y),-(t.ls.x-t.cs.x))}function at(t){t.u.x+t.Y<0&&(t.u.x=W.width-t.Y),t.u.x-t.Y>W.width&&(t.u.x=t.Y),t.u.y+t.Y<0&&(t.u.y=W.height-t.Y),t.u.y-t.Y>W.height&&(t.u.y=t.Y)}function rt(t,s){const n=t.u.x-s.u.x,e=t.u.y-s.u.y;return Math.sqrt(n*n+e*e)<t.Y+s.Y}function ct(t,s){const n=t.u.x-s.u.x,e=t.u.y-s.u.y,i=Math.sqrt(n*n+e*e);if(i>t.Y+s.Y)return 0;const o=t.Y+s.Y;return(o-i)/o}function lt(t,s){const n=s.u.x-t.u.x,e=s.u.y-t.u.y,i=Math.sqrt(n*n+e*e);if(0===i)return;const o=t.Y+s.Y-i,h=n/i,a=e/i;o>0&&(t.u.x-=o*h*(s.K/(t.K+s.K)),t.u.y-=o*a*(s.K/(t.K+s.K)),s.u.x+=o*h*(t.K/(t.K+s.K)),s.u.y+=o*a*(t.K/(t.K+s.K)));const r=(s.M.x-t.M.x)*h+(s.M.y-t.M.y)*a;if(r>0)return;const c=-2*r/(1/t.K+1/s.K);t.M.x-=c/t.K*h,t.M.y-=c/t.K*a,s.M.x+=c/s.K*h,s.M.y+=c/s.K*a}function ut(t,s,n,e){return Math.sqrt(Math.pow(n-t,2)+Math.pow(e-s,2))}function dt(t,s=!0){t.u.x-t.Y<0&&ft(t,t.u.x+W.width,t.u.y,s),t.u.x+t.Y>W.width&&ft(t,t.u.x-W.width,t.u.y,s),t.u.y-t.Y<0&&ft(t,t.u.x,t.u.y+W.height,s),t.u.y+t.Y>W.height&&ft(t,t.u.x,t.u.y-W.height,s),ft(t,t.u.x,t.u.y,s)}function ft(t,s,n,e=!0){z.beginPath(),z.arc(s,n,t.Y,0,2*Math.PI),z.fillStyle=`rgba(255, 255, 255, ${t.alpha})`;const i=`rgba(${t.Z[0]}, ${t.Z[1]}, ${t.Z[2]}, ${t.alpha})`;e||(z.fillStyle=i),z.strokeStyle=`rgba(0, 0, 0, ${t.alpha})`,z.lineWidth=5,z.setLineDash([]),z.closePath(),e&&z.stroke(),z.fill()}function wt(t){z.beginPath(),z.arc(t.u.x,t.u.y,t.Y,0,2*Math.PI),z.fillStyle=t.color,z.fill(),z.closePath()}function Mt(){if(z.clearRect(0,0,W.width,W.height),-1!==Z){!function(t){R.ss.style.backgroundColor=t.backgroundColor,R.ts.style.color=t.wt,t.draw(z);for(let s=0;s<t.dt.length;s++)wt(t.dt[s]);for(let s=0;s<t.ut.length;s++)t.ut[s].draw(z);R.inputMode&O.St&&it.A.length>0&&(X.B(it.A[0].x,it.A[0].y,et.ds.x,et.ds.y),X.jt=R.inputMode===O.jt,X.draw(z));for(let s=0;s<t.lt.length;s++){const n=t.lt[s];if(n.ht)for(let t=0;t<n.et.length;t++)dt(n.et[t],!1);dt(n)}}(tt);for(let t=0;t<nt.length;t++){const s=nt[t];tt.lt[t].tt||mt(s)}for(let t=0;t<tt.lt.length;t++){const s=tt.lt[t];s.tt&&s.tt.ct(z)}}}function mt(t){Ct(z,t.V.x,t.V.y,t.R.x,t.R.y);const s=Math.abs(t.V.x-t.R.x),n=Math.abs(t.V.y-t.R.y);let e=t.V.x,i=t.R.x,o=t.V.y,h=t.R.y;t.R.x<0&&(e=t.V.x+W.width,i=e-s),t.R.x>W.width&&(e=t.V.x-W.width,i=e+s),t.R.y<0&&(o=t.V.y+W.height,h=o-n),t.R.y>W.height&&(o=t.V.y-W.height,h=o+n),Ct(z,e,o,i,h)}function Ct(t,s,n,e,i){const o=ut(s,n,e,i);var h=Math.min(o,20),a=Math.atan2(i-n,e-s);t.fillStyle="#fff",t.strokeStyle="#000",t.lineWidth=5,t.beginPath(),t.moveTo(s,n),t.lineTo(e-h/2*Math.cos(a),i-h/2*Math.sin(a)),t.stroke(),t.strokeStyle="#fff",t.fillStyle="#fff",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(e,i),t.lineTo(e-h*Math.cos(a-Math.PI/6),i-h*Math.sin(a-Math.PI/6)),t.lineTo(e-h*Math.cos(a+Math.PI/6),i-h*Math.sin(a+Math.PI/6)),t.closePath(),t.fill(),t.lineWidth=3,t.strokeStyle="#000",t.stroke(),t.fillStyle="#fff",t.fill(),t.beginPath(),t.moveTo(s,n),t.lineTo(e-h/2*Math.cos(a),i-h/2*Math.sin(a)),t.strokeStyle="#fff",t.lineWidth=2,t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(s,n,5,0,2*Math.PI),t.fill(),t.closePath()}function pt(t){tt.update(),tt.vt&&null===R.Yt&&(R.Yt=Date.now());for(let s=0;s<tt.lt.length;s++){const n=tt.lt[s],e=nt[s];n.update(t),n.tt&&n.tt.rt();for(let t=0;t<tt.lt.length;t++){if(s===t)continue;const e=tt.lt[t];n.tt||e.tt||n.alpha<.5||rt(n,e)&&lt(n,e)}e&&(e.V.x=n.u.x,e.V.y=n.u.y),R.inputMode===O.Tt&&(at(n),bt(n),vt(n))}const s=null!==R.Yt&&Date.now()-R.Yt>2e3;if(tt.vt&&!R.qt&&-1!==Z&&s&&(Et("winLevel"),function(){const t=R.ss;R.qt=!0,t.classList.add("offscreen-right"),t.style.transition="transform 1s ease-in-out";const s=Z;setTimeout((()=>{Bt(s+2>Y.length?"win":s+2),t.classList.remove("offscreen-right"),t.classList.add("offscreen-left"),t.style.transition="none",setTimeout((()=>{t.style.transition="transform 1s ease-in-out",t.classList.remove("offscreen-left"),t.classList.add("onscreen"),setTimeout((()=>{t.style.transition="none",R.qt=!1,t.classList.remove("onscreen")}),1e3)}),50)}),1e3)}()),tt.ht)for(let t=0;t<tt.lt.length;t++){const s=tt.lt[t];s.tt||(null===R.Nt&&(R.Nt=Date.now()),ut(s.M.x,s.M.y,0,0)<U?null===R.Nt&&(R.Nt=Date.now()):R.Nt=null,null!==R.Nt&&Date.now()-R.Nt>1e3&&(Dt(),xt(),Et("loseLevel")))}for(let t=0;t<tt.ut.length;t++){const s=tt.ut[t];s.p&&s.update()}}function vt(t){for(let s=0;s<tt.ut.length;s++){const n=tt.ut[s];if(n.p)continue;const e=l(t,n);if(e){const s=.5*Math.hypot(t.M.x,t.M.y);n.L(s),Et("wall"),jt(Math.random()*Math.PI*2),t.u.x+=e.q.x,t.u.y+=e.q.y;const i=e.axis,o=t.M.x*i.x+t.M.y*i.y;t.M.x-=2*o*i.x,t.M.y-=2*o*i.y}}}function Bt(t){if("win"===t)return document.getElementById("title").classList.add("hide"),document.getElementById("win").classList.remove("animated"),document.getElementById("win").classList.remove("hide"),setTimeout((()=>document.getElementById("win").classList.add("animated")),0),R.Ot="",R.ts.innerText="",Et("winGame"),location.hash="#/win",Z=-1,void xt();1===t?(document.getElementById("win").classList.add("hide"),document.getElementById("title").classList.remove("animated"),document.getElementById("title").classList.remove("hide"),setTimeout((()=>document.getElementById("title").classList.add("animated")),0)):document.getElementById("win").classList.add("hide"),Z=(t-1)%Y.length;const s=(Z+1)%Y.length;tt=Y[Z],st=Y[s],tt.reset(),location.hash=`#/${Z+1}`,R.zt="",R.ts.innerText=`${Z+1}`,xt(),Dt()}function xt(){document.getElementById("js-hit-ball").classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-reset").classList.remove("active"),document.getElementById("js-hit-ball").classList.remove("disabled"),document.getElementById("js-place-wall").classList.remove("disabled");document.getElementById("js-reset").classList.add("disabled"),R.ns.classList.remove("disabled"),R.es.classList.remove("disabled"),0===Z&&R.ns.classList.add("disabled"),Z!==Y.length-1&&-1!==Z||R.es.classList.add("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{let s=tt.Mt,n=`0 5px ${tt.Ct}`,e=yt(...kt(tt.Mt));t.classList.contains("disabled")?(t.style.backgroundColor=null,t.style.boxShadow=null,t.style.color=null):(t.style.backgroundColor=s,t.style.boxShadow=n,t.style.color=e)})),R.Nt=null,R.Yt=null,R.Gt=null,R.Jt=null,R.inputMode=O.ht,W.style.cursor="crosshair"}function bt(t){t.ys=!1;for(let s=0;s<tt.dt.length;s++){const n=tt.dt[s],e=n.u.x-t.u.x,i=n.u.y-t.u.y,o=Math.sqrt(e*e+i*i),h=Math.sqrt(t.M.x*t.M.x+t.M.y*t.M.y);if(o<=n.Y-t.Y&&h<J&&!t.tt)t.tt=n,Et("inHole"),t.ys=!0;else if(rt(t,n)){const s=.2*ct(t,n),h=s*e/o,a=s*i/o;t.M.x+=h,t.M.y+=a,t.alpha-=.01,t.alpha=Math.max(t.alpha,0),t.ys=!0}}t.ys||(t.alpha=1)}window.playSong=Et;const Ft=1e3/60;let At=0,gt=0;function $t(){const t=window.location.hash.substring(2);return"win"===t?"win":0===t.length?1:parseInt(t,10)}function kt(t){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return s?[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]:null}function yt(t,s,n){const e=function(t,s,n){return.299*t+.587*s+.114*n}(t,s,n);return e>128?"black":"white"}function Et(t){R.Qt[t]&&(R.Qt[t].currentTime=0,R.Qt[t].play())}function Dt(){R.Wt="",R.Ot=`${Z+1} / ${Y.length}`,R._t.innerHTML=R.Ot,R._t.style.color=yt(...kt(tt.Mt)),R._t.style.backgroundColor=tt.Mt,tt.reset()}function jt(t){!function(t){const s=document.styleSheets[0],n="shake-animation",e="shake";for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].name===n){s.deleteRule(t);break}const i=1*Math.cos(t),o=1*-Math.sin(t);let h=`\n    @keyframes ${n} {\n      0% { transform: translate(0, 0); }\n      10% { transform: translate(${-10*i}px, ${10*o}px); }\n      20% { transform: translate(${10*i}px, ${-10*o}px); }\n      30% { transform: translate(${-8*i}px, ${8*o}px); }\n      40% { transform: translate(${8*i}px, ${-8*o}px); }\n      50% { transform: translate(${-5*i}px, ${5*o}px); }\n      60% { transform: translate(${5*i}px, ${-5*o}px); }\n      70% { transform: translate(${-3*i}px, ${3*o}px); }\n      80% { transform: translate(${3*i}px, ${-3*o}px); }\n      90% { transform: translate(${-1*i}px, ${o}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;s.insertRule(h,s.cssRules.length);let a=-1;for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].selectorText===`.${e}`){a=t;break}const r=`\n    .${e} {\n      animation: ${n} 1s ease-out;\n    }\n  `;a>=0?(s.deleteRule(a),s.insertRule(r,a)):s.insertRule(r,s.cssRules.length)}(t),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3)}!function t(s){const n=s-gt;for(gt=s,At+=n;At>=Ft;)pt(Ft),At-=Ft;Mt(),requestAnimationFrame(t)}(0),document.addEventListener("DOMContentLoaded",(()=>{Bt($t()),Q(),q(H,"hit"),q(G,"winLevel"),q(N,"wall"),q(T,"loseLevel"),q(S,"winGame"),q(I,"inHole")})),window.addEventListener("hashchange",(()=>{"win"!==$t()&&Bt($t())})),document.body.addEventListener("click",(()=>{document.getElementById("title").classList.add("hide")})),document.body.addEventListener("touchstart",(()=>{document.getElementById("title").classList.add("hide")})),window.addEventListener("mousemove",(t=>{const s=W.getBoundingClientRect();let n="crosshair";for(let e=0;e<tt.ut.length;e++){let i=t.clientX-s.left,o=t.clientY-s.top;const h=tt.ut[e];i/=K(),o/=K(),h.J(i,o)?n="pointer":(h.H(i,o)||h.S(i,o))&&(n="grab")}R.inputMode===O.Tt&&(n="not-allowed"),W.style.cursor=n}))})();