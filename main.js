(()=>{"use strict";var t={d:(n,s)=>{for(var e in s)t.t(s,e)&&!t.t(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:s[e]})},t:(t,n)=>Object.prototype.hasOwnProperty.call(t,n)};t.d({},{i:()=>Q});const n=250;class s{constructor(t,n,s,e){this.canvas=t,this.o=n,this.h=s,this.l=e,this.u={x:0,y:0},this.M={x:0,y:0},this.m={x:0,y:0},this.C={x:0,y:0},this.pressed=!1,this.boundingRect=this.canvas.getBoundingClientRect(),this.p(this.canvas)}resize(){this.boundingRect=this.canvas.getBoundingClientRect()}p(t){t.addEventListener("mousedown",this.v.bind(this),{capture:!0,passive:!1}),window.addEventListener("mousemove",this.B.bind(this),{capture:!0,passive:!1}),window.addEventListener("mouseup",this.F.bind(this),{capture:!0,passive:!1}),t.addEventListener("touchstart",this.A.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchend",this.F.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchmove",this.$.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.F.bind(this),{capture:!0,passive:!1})}k(){this.m.x=(this.M.x-this.u.x)/n,this.m.y=(this.u.y-this.M.y)/n}D(t){const n=canvas.getBoundingClientRect();let s,e;if(t instanceof MouseEvent)s=t.clientX-n.left,e=t.clientY-n.top;else if(t instanceof TouchEvent){const t=event.touches[0];s=t.clientX-n.left,e=t.clientY-n.top}s*=canvas.width/n.width,e*=canvas.height/n.height,this.C.x=s,this.C.y=e}j(t){let n=0;return t instanceof MouseEvent?n=t.clientX:t instanceof TouchEvent&&(n=t.changedTouches[0].clientX),(n-this.boundingRect.left)*(this.canvas.width/this.boundingRect.width)}L(t){let n=0;return t instanceof MouseEvent?n=t.clientY:t instanceof TouchEvent&&(n=t.changedTouches[0].clientY),(n-this.boundingRect.top)*(this.canvas.height/this.boundingRect.height)}A(t){t.preventDefault(),this.D(t),this.P(this.j(t),this.L(t))}$(t){t.preventDefault(),this.D(t),this.I(this.j(t),this.L(t))}v(t){t.preventDefault(),this.D(t),this.P(this.j(t),this.L(t))}B(t){t.preventDefault(),this.D(t),this.I(this.j(t),this.L(t))}P(t,n){this.pressed=!0,this.u.x=t,this.u.y=n,this.M.x=t,this.M.y=n,this.k(),this.o()}I(t,s){if(!this.pressed)return;const e=t-this.u.x,i=s-this.u.y,o=Math.hypot(e,i);if(this.M.x=t,this.M.y=s,o>n){const t=e/o*n,s=i/o*n;this.M.x=this.u.x+t,this.M.y=this.u.y+s}this.k(),this.l()}F(t){0!=this.pressed&&(t.preventDefault(),t.stopPropagation(),this.pressed=!1,this.u.x=0,this.u.y=0,this.M.x=0,this.M.y=0,this.k(),this.h())}draw(t){this.pressed&&(this.S(t),this.T(t))}S(t){t.strokeStyle="#FFD700",t.lineWidth=6,t.beginPath(),t.arc(this.u.x,this.u.y,n,0,2*Math.PI),t.stroke(),t.closePath()}T(t){t.strokeStyle="#F0E68C",t.lineWidth=6,t.beginPath(),t.arc(this.M.x,this.M.y,125,0,2*Math.PI),t.fillStyle="#F0E68C",t.globalAlpha=.5,t.fill(),t.globalAlpha=1,t.closePath()}}class e{constructor(t,n,s){this.H=t,this.N=n,this.color=s,this.O=[],this.G()}G(){const{H:t,N:n,color:s}=this,e=Math.atan2(n.y-t.y,n.x-t.x),h=Math.hypot(n.x-t.x,n.y-t.y);for(let n=0;n<Math.ceil(h/o);n++){const h=t.x+Math.cos(e)*n*o,a=t.y+Math.sin(e)*n*o;this.O.push(new i(h,a,s,e))}this.angle=e}reset(){this.O=[],this.G()}update(){for(let t=0;t<this.O.length;t++)this.O[t].J<=0||this.O[t].update()}draw(t){for(let n=0;n<this.O.length;n++)this.O[n].J<=0||this.O[n].draw(t)}}class i{constructor(t,n,s,e){this.color=s,this.U={x:t,y:n},this.V={x:0,y:0},this.color=s,this.J=100,this.angle=e}update(){this.U.x+=this.V.x,this.U.y+=this.V.y,this.J--}draw(t){this.left<0||(this.J<75?t.fillStyle=`rgba(${this.color}, ${this.J/75})`:t.fillStyle=`rgba(${this.color}, 1)`,t.beginPath(),t.rect(this.U.x-o/2,this.U.y,o,o),t.fill(),t.closePath())}}const o=20,h="255,255,255";class a{constructor(t,n,s,i,a=!0,r=!0){this.width=o,this.U={x:0,y:0},this.H={x:0,y:0},this.N={x:0,y:0},this.W={x:0,y:0},this.R={x:0,y:0},this.q=!1,this.K=a,this.color=a?h:"0,0,0",this.X(t,n,s,i),this.Y=new e(this.H,this.N,this.color)}X(t,n,s,e){this.H.x=t,this.H.y=n,this.N.x=s,this.N.y=e;const{H:i,N:o}=this;this.U.x=(i.x+o.x)/2,this.U.y=(i.y+o.y)/2,this.angle=Math.atan2(o.y-i.y,o.x-i.x)-Math.PI/2,this.Z=this._(i,o,this.width),this.tt=this.nt();const h=6*Math.sin(this.angle),a=6*-Math.cos(this.angle);this.W.x=this.H.x-h,this.W.y=this.H.y-a,this.R.x=this.N.x+h,this.R.y=this.N.y+a}update(){this.q&&this.Y.update()}rotate(t,n,s){const e=this.H.x,i=this.H.y,o=this.N.x,h=this.N.y,a=Math.cos(t),r=Math.sin(t),c=a*(e-n)-r*(i-s)+n,l=r*(e-n)+a*(i-s)+s,u=a*(o-n)-r*(h-s)+n,d=r*(o-n)+a*(h-s)+s;this.X(c,l,u,d)}st(){}reset(){this.q=!1,this.Y.reset()}et(t){this.q=!0,this.Y=new e(this.H,this.N,this.color),this.Y.O.forEach((n=>{const s=Math.random()*Math.PI*2;n.V.x=t*(2*Math.random()-1)*Math.cos(s),n.V.y=t*(2*Math.random()-1)*Math.sin(s)}))}_(t,n,s){const e=s/2,i=Math.sqrt((n.x-t.x)**2+(n.y-t.y)**2)/2,o=this.angle;return[{x:-e,y:-i},{x:-e,y:i},{x:e,y:i},{x:e,y:-i}].map((t=>({x:this.U.x+(t.x*Math.cos(o)-t.y*Math.sin(o)),y:this.U.y+(t.x*Math.sin(o)+t.y*Math.cos(o))})))}nt(){const t=[],n=this.Z,s=n.length;for(let e=0;e<s;e++){const i=(e+1)%s,o=n[i].x-n[e].x,h=n[i].y-n[e].y,a=Math.sqrt(o*o+h*h),r={x:-h/a,y:o/a};t.push(r)}return t}it(t){let n=Number.POSITIVE_INFINITY,s=-Number.POSITIVE_INFINITY;for(let e=0;e<this.Z.length;e++){let i=this.Z[e].x*t.x+this.Z[e].y*t.y;n=Math.min(n,i),s=Math.max(s,i)}return{min:n,max:s}}ot(t,n,s,e,i){const o=t-s,h=n-e;return o*o+h*h<=i*i}ht(t,n){return this.rt(t,n)}rt(t,n){let s=!1;const e=this.Z,i=e.length;for(let o=0,h=i-1;o<i;h=o++){const i=e[o].x,a=e[o].y,r=e[h].x,c=e[h].y;a>n!=c>n&&t<(r-i)*(n-a)/(c-a)+i&&(s=!s)}return s}ct(t,n){return this.lt(t,n)?this.H:this.ut(t,n)?this.N:null}lt(t,n){return this.ot(t,n,this.W.x,this.W.y,15)}ut(t,n){return this.ot(t,n,this.R.x,this.R.y,15)}dt(t,n){return this.K?this.ot(t,n,this.U.x,this.U.y,15):null}draw(t){this.q?this.Y.draw(t):this.ft(t)}ft(t){t.beginPath(),t.setLineDash([]),t.fillStyle=`rgba(${this.color}, 1.0)`,t.strokeStyle="#000",t.lineWidth=2,t.moveTo(this.Z[0].x,this.Z[0].y);for(let n=1;n<this.Z.length;n++)t.lineTo(this.Z[n].x,this.Z[n].y);t.closePath(),t.fill(),t.stroke(),this.color===h&&(t.beginPath(),t.lineWidth=2,t.strokeStyle="red",t.moveTo(this.U.x-5,this.U.y-5),t.lineTo(this.U.x+5,this.U.y+5),t.moveTo(this.U.x-5,this.U.y+5),t.lineTo(this.U.x+5,this.U.y-5),t.stroke(),t.closePath(),t.beginPath(),t.fillStyle="rgba(255, 0, 0, 1.0)",t.arc(this.W.x,this.W.y,4,0,2*Math.PI),t.arc(this.R.x,this.R.y,4,0,2*Math.PI),t.fill())}}class r{constructor(t=0,n=0,s=0,e=1){this.wt={x:t,y:n},this.angle=s,this.Mt=e,this.Ct={x:t,y:n}}get vt(){return this.Ct.x=this.wt.x+this.Mt*Math.cos(this.angle),this.Ct.y=this.wt.y+this.Mt*Math.sin(this.angle),this.Ct}}class c{constructor(){this.Z=[]}}function l(t,n){return t.max>n.min&&n.max>t.min}function u(t,n){return Math.min(t.max-n.min,n.max-t.min)}function d(t,n){let s=Number.POSITIVE_INFINITY,e=null,i=null;for(let o=0;o<n.tt.length;o++){const h=n.tt[o],a=n.it(h),r=t.it(h);if(!l(a,r))return null;{const t=u(a,r);t<s&&(s=t,e=h,i=n.Z[o])}}for(const o of n.Z){const h={x:t.U.x-o.x,y:t.U.y-o.y},a=Math.sqrt(h.x*h.x+h.y*h.y);if(0===a)continue;h.x/=a,h.y/=a;const r=n.it(h),c=t.it(h);if(!l(r,c))return null;{const t=u(r,c);t<s&&(s=t,e=h,i=o)}}if(s===Number.POSITIVE_INFINITY)return null;let o=t.U.x-i.x,h=t.U.y-i.y;return o*e.x+h*e.y<0&&(e.x=-e.x,e.y=-e.y),{xt:{x:e.x*s,y:e.y*s},axis:e}}class f{Bt=1;bt=50;constructor(t,n,s=Math.PI,e=8,i=!0){if(this.Ft=e,this.color="#fff",this.gt="#fff",this.U={x:t,y:n},this.At={x:t,y:n},this.V={x:0,y:0},this.$t=null,this.Bt=e,this.kt=s,this.U.x=t,this.U.y=n,this.alpha=1,this.yt=0,this.Et=[],this.Dt=0,this.jt=0,this.Lt=!1,i)for(let i=0;i<this.bt;i++){const i=new f(t,n,s,e,!1);i.alpha=0,i.gt=this.gt,this.Et.push(i)}}it(t){const n=this.U.x*t.x+this.U.y*t.y;return{min:n-this.Ft,max:n+this.Ft}}update(){this.Dt++;const t=.98-this.yt;if(this.V.x*=t,this.V.y*=t,Math.abs(this.V.x)<.01&&(this.V.x=0),Math.abs(this.V.y)<.01&&(this.V.y=0),this.U.x+=this.V.x,this.U.y+=this.V.y,this.Dt%1==0){const t=this.Et[this.jt];t.U.x=this.U.x,t.U.y=this.U.y,t.alpha=.25,this.jt=(this.jt+1)%this.bt}for(let t=0;t<this.bt;t++){this.Et[t].alpha-=.009}}reset(){this.U.x=this.At.x,this.U.y=this.At.y,this.$t=null,this.V.x=0,this.V.y=0,this.alpha=1,this.Dt=0,this.Lt=!1;for(let t=0;t<this.bt;t++)this.Et[t]=new f(this.At.x,this.At.y,this.kt,this.Ft),this.Et[t].alpha=0}}const w=["#B4E7CE","#59A96A","#9BDEAC","#474A2C","#BB8A89","#977390","#AC7B7D","#785589","#F4F4F9","#586F7C","#B8DBD9","#2F4550","#AFB3F7","#7A93AC","#92BCEA","#617073","#FEC0AA","#84732B","#EC4E20","#574F2A","#F2F6D0","#D9D2B6","#D0E1D4","#71697A","#FAA275","#CE6A85","#FF8C61","#985277","#BEEF9E","#828C51","#A6C36F","#335145","#CF9893","#A96DA3","#BC7C9C","#3B3B58","#FFA9E7","#7F2CCB","#FF84E8","#414361","#93B5C6","#F0CF65","#D7816A","#BD4F6C","#524948","#7CB4B8","#70F8BA","#57467B","#6A8D73","#E4FFE1","#FFE8C2","#F0A868"];class M{constructor(t,n,s,e,i,o){this.U={x:t,y:n},this.V={x:i,y:o},this.Ft=s,this.color=e,this.Dt=0}}class m{$t=null;constructor(t,n,s=15,e="black"){this.U={x:t,y:n},this.Ft=s,this.color=e,this.O=[];for(let s=0;s<100;s++){const s=Math.floor(5*Math.random()+1)-5,e=w[Math.floor(Math.random()*w.length)],i=new M(t,n,5,e,s*Math.cos(Math.random()*Math.PI*2),s*Math.sin(Math.random()*Math.PI*2));i.Dt=Math.floor(100*Math.random()),this.O.push(i)}}Pt(){for(let t=0;t<this.O.length;t++){const n=this.O[t];if(n.U.x+=n.V.x,n.U.y+=n.V.y,n.V.y+=.1,n.Dt++,n.Dt>100){n.U.x=this.U.x,n.U.y=this.U.y,n.Dt=0;const t=Math.floor(5*Math.random()+1)-5;n.V.x=t*Math.cos(Math.random()*Math.PI*2),n.V.y=t*Math.sin(Math.random()*Math.PI*2)}}}It(t){for(let n=0;n<this.O.length;n++){const s=this.O[n];t.beginPath(),t.arc(s.U.x,s.U.y,s.Ft,0,2*Math.PI),t.fillStyle=s.color,t.fill()}}}class C{St=[];Tt=[];Ht=[];number=0;Nt=!1;backgroundColor="red";Ot="red";Gt="red";Jt="red";width=500;height=500;Lt=!1;reset(){this.Lt=!1,this.Nt=!1,this.St.forEach((t=>{var n,s;t.reset(),t.gt=(n=this.Ot,(s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n))?[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]:null),t.Et.forEach((n=>{n.gt=t.gt}))})),this.Tt.forEach((t=>{t.reset()})),document.getElementById("js-place-wall").classList.remove("disabled"),document.getElementById("js-place-wall").setAttribute("disabled",!1),document.body.style.backgroundColor=this.Ot;const t=document.getElementById("js-place-wall");t.style.display="block",t.classList.remove("jiggle"),this.number<5?t.style.display="none":5===this.number&&t.classList.add("jiggle")}get Ut(){for(let t=0;t<this.St.length;t++)if(!this.St[t].$t)return!1;return!0}update(){}draw(t){}}class p extends C{backgroundColor="#B4E7CE";Ot="#59A96A";Gt="#9BDEAC";Jt="#474A2C";number=1;constructor(){super(),this.Ht=[new m(400,250)],this.St=[new f(250,250)]}draw(t){Q.hints&&P(t,250,250,325,250)}}class v extends C{backgroundColor="#BB8A89";Ot="#977390";Gt="#AC7B7D";Jt="#785589";number=2;constructor(){super(),this.Ht=[new m(400,125),new m(400,375)],this.St=[new f(250,125),new f(250,375)]}draw(t){Q.hints&&P(t,250,125,325,125)}}class x extends C{backgroundColor="#F4F4F9";Ot="#586F7C";Gt="#B8DBD9";Jt="#2F4550";number=3;constructor(){super(),this.Ht=[new m(100,125),new m(400,375)],this.St=[new f(250,125),new f(250,375,0)]}draw(t){Q.hints&&P(t,250,125,175,125)}}class B extends C{backgroundColor="#AFB3F7";Ot="#7A93AC";Gt="#92BCEA";Jt="#617073";number=4;constructor(){super(),this.Ht=[new m(300,125),new m(400,375)],this.St=[new f(50,125),new f(150,375,0)],this.Tt=[new a(100,50,100,200,!1)]}draw(t){Q.hints&&P(t,50,125,-50,125)}}class b extends C{backgroundColor="#FEC0AA";Ot="#84732B";Gt="#EC4E20";Jt="#574F2A";number=5;constructor(){super(),this.Ht=[new m(400,125),new m(350,375)],this.St=[new f(200,125),new f(250,375,0)],this.Tt=[new a(25,0,25,500,!1),new a(475,0,475,500,!1)]}draw(t){Q.hints&&(F(t,100,75,20,100),P(t,200,125,55,125))}}function F(t,n,s,e,i,o=0){t.save(),t.translate(n,s),t.rotate(o),t.beginPath(),t.setLineDash([5,15]),t.strokeStyle="black",t.lineWidth=2,t.rect(0,0,e,i),t.stroke(),t.restore()}class g extends C{backgroundColor="#F2F6D0";Ot="#D9D2B6";Gt="#D0E1D4";Jt="#71697A";number=6;constructor(){super();const t=250,n=250,s=200;this.Ht=[new m(t,50),new m(t-s*Math.cos(Math.PI/6),n+s*Math.sin(Math.PI/6)),new m(t+s*Math.cos(Math.PI/6),n+s*Math.sin(Math.PI/6))];const e=[{x:t,y:450},{x:t-s*Math.cos(Math.PI/6),y:n-s*Math.sin(Math.PI/6)},{x:t+s*Math.cos(Math.PI/6),y:n-s*Math.sin(Math.PI/6)}],i=(e[0].x+e[1].x+e[2].x)/3,o=(e[0].y+e[1].y+e[2].y)/3,h=(t,n)=>Math.atan2(o-n,i-t);this.St=[new f(e[0].x,e[0].y,h(e[0].x,e[0].y)-Math.PI/2),new f(e[1].x,e[1].y,h(e[1].x,e[1].y)-Math.PI/2),new f(e[2].x,e[2].y,h(e[2].x,e[2].y)-Math.PI/2)],this.Tt=[]}draw(t){Q.hints&&(F(t,this.St[0].At.x-50-o,150,20,100,0),F(t,this.St[0].At.x+50,150,20,100,0),P(t,this.St[0].At.x,this.St[0].At.y,this.St[0].At.x,275))}}class A extends C{backgroundColor="#FAA275";Ot="#CE6A85";Gt="#FF8C61";Jt="#985277";number=7;constructor(){super(),this.Ht=[new m(150,400),new m(250,400),new m(350,400)],this.St=[new f(150,150),new f(250,200),new f(350,250)],this.Tt=[]}draw(t){Q.hints&&(P(t,150,150,150,265),F(t,215,440,70,20,0),F(t,315,460,70,20,0))}}class $ extends C{backgroundColor="#BEEF9E";Ot="#828C51";Gt="#A6C36F";Jt="#335145";number=8;constructor(){super(),this.Ht=[new m(250,250,25)];this.St=[new f(400,250,0),new f(250+150*Math.cos(Math.PI),250+150*Math.sin(Math.PI),Math.PI)]}draw(t){if(!Q.hints)return;const n=250+150*Math.cos(Math.PI);P(t,n,250,n+60,250)}}class k extends C{backgroundColor="#CF9893";Ot="#A96DA3";Gt="#BC7C9C";Jt="#3B3B58";number=9;constructor(){super(),this.Ht=[new m(250,300),new m(200,250)],this.St=[new f(250,200,-Math.PI),new f(300,250,-Math.PI/2)],this.Tt=[new a(200,200,300,300,!1),new a(300,200,200,300,!1)]}draw(t){Q.hints&&(F(t,260,120,100,20,Math.PI/4),P(t,250,200,200,250),F(t,325,225,20,75,0),F(t,287.5,325,20,75,Math.PI/2))}}class y extends C{backgroundColor="#FFA9E7";Ot="#7F2CCB";Gt="#FF84E8";Jt="#414361";number=10;constructor(){super(),this.Ht=[new m(200,200),new m(400,400)],this.St=[new f(250,250,-Math.PI),new f(300,300,-Math.PI/2)],this.Tt=[new a(100,200,200,100,!1)]}draw(t){Q.hints&&(P(t,250,250,130,130),F(t,310,230,20,100,Math.PI/4),F(t,340,200,20,100,-Math.PI/4),F(t,240,325,20,100,0),F(t,300,440,100,20,0))}}class E extends C{backgroundColor="#93B5C6";Ot="#F0CF65";Gt="#D7816A";Jt="#BD4F6C";number=11;constructor(){super(),this.Ht=[new m(100,100),new m(250,100),new m(400,100)],this.St=[new f(250,200,Math.PI),new f(175,325,Math.PI/4),new f(325,325,-Math.PI/4)],this.Tt=[]}draw(t){Q.hints&&(P(t,250,200,250,375),F(t,225-o,200,20,200,0),F(t,275,200,20,200,0),F(t,450,150,20,100,0),F(t,400,10,20,100,Math.PI/4),F(t,50-o,150,20,100,0),F(t,100-o,10,20,100,-Math.PI/4))}}class D extends C{backgroundColor="#524948";Ot="#7CB4B8";Gt="#70F8BA";Jt="#57467B";number=12;constructor(){super(),this.Ht=[new m(200,200),new m(300,200)],this.St=[new f(100,250,Math.PI),new f(400,250,Math.PI/3)],this.Tt=[new a(125,125,175,300,!1),new a(375,125,325,300,!1),new a(125,125,175,150,!1),new a(375,125,325,150,!1),new a(175,150,325,150,!1),new a(175,300,325,300,!1),new a(200,250,200,275,!1),new a(300,250,300,275,!1),new a(200,275,300,275,!1)]}}class j extends C{backgroundColor="#6A8D73";Ot="#E4FFE1";Gt="#FFE8C2";Jt="#F0A868";number=13;constructor(){super(),this.Ht=[new m(250,250)],this.St=[new f(250,100,Math.PI)];const t=new a(175,150,175,350,!1),n=new a(325,150,325,350,!1),s=new a(185,160,315,160,!1),e=new a(185,340,315,340,!1);this.Tt=[t,n,s,e],this.Vt=[t,n,s,e]}update(){super.update();for(let t=0;t<this.Vt.length;t++){this.Vt[t].rotate(.01,250,250)}}}const L=500;function P(t,n,s,e,i){I(t,n,s,e,i);const o=Math.abs(n-e),h=Math.abs(s-i);let a=n,r=e,c=s,l=i;e<0&&(a=n+L,r=a-o),e>L&&(a=n-L,r=a+o),i<0&&(c=s+L,l=c-h),i>L&&(c=s-L,l=c+h),I(t,a,c,r,l)}function I(t,n,s,e,i){const o=Math.sqrt(Math.pow(e-n,2)+Math.pow(i-s,2));var h=Math.min(o,20),a=Math.atan2(i-s,e-n);t.strokeStyle="#000",t.lineWidth=2,t.setLineDash([3,3]),t.beginPath(),t.moveTo(e,i),t.lineTo(e-h*Math.cos(a-Math.PI/6),i-h*Math.sin(a-Math.PI/6)),t.lineTo(e-h*Math.cos(a+Math.PI/6),i-h*Math.sin(a+Math.PI/6)),t.closePath(),t.stroke(),t.beginPath(),t.moveTo(n,s);let r=e-h*Math.cos(a),c=i-h*Math.sin(a);t.lineTo(r,c),t.stroke()}const S=function(){var t,n,s,e,i,o=function(t){return Math.sin(6.283184*t)},h=function(t){return.003959503758*2**((t-128)/12)},a=function(t,n,s){var e,i,o,a,c,l,u=r[t.Wt[0]],d=t.Wt[1],f=t.Wt[3]/32,w=r[t.Wt[4]],M=t.Wt[5],m=t.Wt[8]/32,C=t.Wt[9],p=t.Wt[10]*t.Wt[10]*4,v=t.Wt[11]*t.Wt[11]*4,x=t.Wt[12]*t.Wt[12]*4,B=1/x,b=-t.Wt[13]/16,F=t.Wt[14],g=s*2**(2-t.Wt[15]),A=new Int32Array(p+v+x),$=0,k=0;for(e=0,i=0;e<p+v+x;e++,i++)i>=0&&(i-=g,c=h(n+(15&(F=F>>8|(255&F)<<4))+t.Wt[2]-128),l=h(n+(15&F)+t.Wt[6]-128)*(1+8e-4*t.Wt[7])),o=1,e<p?o=e/p:e>=p+v&&(o=(1-(o=(e-p-v)*B))*3**(b*o)),a=u($+=c*o**f)*d,a+=w(k+=l*o**m)*M,C&&(a+=(2*Math.random()-1)*C),A[e]=80*a*o|0;return A},r=[o,function(t){return t%1<.5?1:-1},function(t){return t%1*2-1},function(t){var n=t%1*4;return n<2?n-1:3-n}];this.init=function(o){t=o,n=o.zt,s=0,e=o.Rt*o.qt*(n+1)*2,i=new Int32Array(e)},this.Qt=function(){var h,c,l,u,d,f,w,M,m,C,p,v,x,B,b=new Int32Array(e),F=t.Kt[s],g=t.Rt,A=t.qt,$=0,k=0,y=!1,E=[];for(l=0;l<=n;++l)for(w=F.Xt[l],u=0;u<A;++u){var D=w?F.c[w-1].f[u]:0;D&&(F.Wt[D-1]=F.c[w-1].f[u+A]||0,D<17&&(E=[]));var j=r[F.Wt[16]],L=F.Wt[17]/512,P=2**(F.Wt[18]-9)/g,I=F.Wt[19],S=F.Wt[20],T=43.23529*F.Wt[21]*3.141592/44100,H=1-F.Wt[22]/255,N=1e-5*F.Wt[23],O=F.Wt[24]/32,G=F.Wt[25]/512,J=6.283184*2**(F.Wt[26]-9)/g,U=F.Wt[27]/255,V=F.Wt[28]*g&-2;for(p=(l*A+u)*g,d=0;d<4;++d)if(f=w?F.c[w-1].n[u+d*A]:0){E[f]||(E[f]=a(F,f,g));var W=E[f];for(c=0,h=2*p;c<W.length;c++,h+=2)b[h]+=W[c]}for(c=0;c<g;c++)(C=b[M=2*(p+c)])||y?(v=T,I&&(v*=j(P*M)*L+.5),k+=(v=1.5*Math.sin(v))*(x=H*(C-k)-($+=v*k)),C=3==S?k:1==S?x:$,N&&(C=(C*=N)<1?C>-1?o(.25*C):-1:1,C/=N),y=(C*=O)*C>1e-5,B=C*(1-(m=Math.sin(J*M)*G+.5)),C*=m):B=0,M>=V&&(B+=b[M-V+1]*U,C+=b[M-V]*U),b[M]=0|B,b[M+1]=0|C,i[M]+=0|B,i[M+1]+=0|C}return++s/t.Yt},this.Zt=function(t){for(var n=t.createBuffer(2,e/2,44100),s=0;s<2;s++)for(var o=n.getChannelData(s),h=s;h<e;h+=2)o[h>>1]=i[h]/65536;return n},this._t=function(){var t=44+2*e-8,n=t-36,s=new Uint8Array(44+2*e);s.set([82,73,70,70,255&t,t>>8&255,t>>16&255,t>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&n,n>>8&255,n>>16&255,n>>24&255]);for(var o=0,h=44;o<e;++o){var a=i[o];a=a<-32767?-32767:a>32767?32767:a,s[h++]=255&a,s[h++]=a>>8&255}return s},this.getData=function(t,n){for(var s=2*Math.floor(44100*t),e=new Array(n),o=0;o<2*n;o+=1){var h=s+o;e[o]=t>0&&h<i.length?i[h]/32768:0}return e}},T={Kt:[{Wt:[2,138,116,0,2,138,128,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],Xt:[1],c:[{n:[149],f:[]}]}],Rt:5513,qt:32,zt:0,Yt:1},H={Kt:[{Wt:[2,138,116,0,2,138,128,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],Xt:[1],c:[{n:[135,,,,147,,,,159,,,,,,,,,,,,,,,,,,,,,,,,139,,,,151,,,,163,,,,,,,,,,,,,,,,,,,,,,,,142,,,,154,,,,166],f:[]}]}],Rt:11025,qt:32,zt:0,Yt:1},N={Kt:[{Wt:[2,138,116,0,2,138,113,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],Xt:[1],c:[{n:[135],f:[]}]}],Rt:5513,qt:32,zt:0,Yt:1},O={Kt:[{Wt:[0,91,128,0,0,95,128,12,0,0,12,0,72,0,0,0,0,0,0,0,2,255,0,0,32,83,3,21,4],Xt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,142],f:[]}]}],Rt:5513,qt:32,zt:0,Yt:1};var G={Kt:[{Wt:[0,0,128,0,0,0,128,0,0,125,0,1,59,0,0,0,0,0,0,0,1,193,171,0,29,39,3,88,3],Xt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,140],f:[]}]}],Rt:5513,qt:32,zt:0,Yt:1};const J={Kt:[{Wt:[2,138,116,0,2,138,128,4,0,0,47,48,162,63,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],Xt:[1],c:[{n:[135,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,142],f:[]}]}],Rt:5513,qt:32,zt:0,Yt:1},U=.25,V=.15,W=2,z=document.getElementById("canvas"),R=z.getContext("2d"),q={Lt:1,tn:2,nn:4,sn:8,en:16,hn:18,an:32,rn:22};let Q={cn:null,ln:null,un:null,inputMode:q.Lt,dn:q.Lt,fn:"",wn:"",Mn:"",mn:"",Cn:{x:0,y:0},pn:!1,hints:!0,vn:{Lt:null,tn:null,xn:null,Bn:null,bn:null,Fn:null}};function K(){const t=document.getElementById("js-hints");t.innerText=Q.hints?"Hints On":"Hints Off",Q.hints?(t.style.boxShadow=`0 2px ${et.Jt}`,t.classList.add("active")):(t.style.boxShadow=`0 5px ${et.Jt}`,t.classList.remove("active"))}function X(t,n){var s=new S;s.init(t);var e=!1;let i=setInterval((function(){if(e)clearInterval(i);else if(e=s.Qt()>=1){var t=s._t(),o=document.createElement("audio");o.preload="auto",o.src=URL.createObjectURL(new Blob([t],{type:"audio/wav"})),Q.vn[n]=o}}),0)}function Y(){const t=document.getElementById("js-hit-ball");t.classList.contains("disabled")||(Q.inputMode=q.Lt,t.classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 2px ${et.Jt}`,document.getElementById("js-place-wall").style.boxShadow=`0 5px ${et.Jt}`)}function Z(){const t=window.innerWidth/z.width,n=window.innerHeight/z.height;return Math.min(t,n)}Q.gn=document.getElementById("game-ui"),Q.An=document.getElementById("hole-number"),Q.$n=document.getElementById("canvas-container"),Q.kn=document.getElementById("js-prev"),Q.yn=document.getElementById("js-next"),document.getElementById("js-hit-ball").addEventListener("click",(t=>{t.preventDefault(),Y()})),document.getElementById("js-hints").addEventListener("click",(t=>{t.preventDefault(),Q.hints=!Q.hints,K()})),document.getElementById("js-place-wall").addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||(Q.inputMode=q.tn,t.currentTarget.classList.add("active"),document.getElementById("js-hit-ball").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 5px ${et.Jt}`,document.getElementById("js-place-wall").style.boxShadow=`0 2px ${et.Jt}`)})),document.getElementById("js-reset").addEventListener("click",(t=>{t.preventDefault(),Tt(),kt()})),Q.kn.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||$t(-1===nt?tt.length:nt)})),Q.yn.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||$t(nt+2)}));const _=new a(0,0,0,0,!0,!0),tt=[new p,new v,new x,new B,new b,new g,new A,new $,new k,new y,new E,new D,new j];let nt=0,st=(nt+1)%tt.length,et=tt[nt];et.reset();let it=tt[st];const ot=[];let ht=null,at=new c;function rt(){if(Q.Cn.x=ht.C.x,Q.Cn.y=ht.C.y,Q.gn.innerHTML=Q.mn,Q.inputMode!==q.an)for(let t=0;t<et.Tt.length;t++){const n=et.Tt[t];if(!n.K)continue;const s=n.ct(ht.C.x,ht.C.y);if(n.dt(ht.C.x,ht.C.y))return void et.Tt.splice(t,1);if(s)return Q.dn=Q.inputMode,Q.inputMode=q.nn,Q.ln=n,void(Q.un=s);n.ht(ht.C.x,ht.C.y)&&(Q.dn=Q.inputMode,Q.inputMode=q.sn,Q.ln=n,Q.un=null)}Q.inputMode===q.Lt?function(){ot.length=0;for(let t=0;t<et.St.length;t++){const n=et.St[t];ot.push(new r(n.U.x,n.U.y,ht.m.x,ht.m.y))}}():Q.inputMode&q.hn&&at.Z.push({x:ht.C.x,y:ht.C.y})}function ct(){Q.inputMode===q.Lt?function(){if(0===ot.length)return;St("hit");for(let t=0;t<et.St.length;t++){const n=et.St[t];if(n.$t)continue;const s=ot[t],e=Math.cos(s.angle)*s.Mt*.05,i=Math.sin(s.angle)*s.Mt*.05;n.V.x=e,n.V.y=i,n.Lt=!0}t=ot[0].angle,n=ot[0].Mt,function(t,n){const s=document.styleSheets[0],e="shake-animation",i="shake",o=.1*n,h=.75;for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].name===e){s.deleteRule(t);break}const a=-Math.cos(t)*o,r=Math.sin(t)*o,c=`\n    @keyframes ${e} {\n      0% { transform: translate(${a}px, ${r}px); }\n      60% { transform: translate(${-.3*a}px, ${-.3*r}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;s.insertRule(c,s.cssRules.length);let l=-1;for(let t=0;t<s.cssRules.length;t++)if(s.cssRules[t].selectorText===`.${i}`){l=t;break}const u=`\n    .${i} {\n      animation: ${e} ${h}s ease-out;\n    }\n  `;l>=0?(s.deleteRule(l),s.insertRule(u,l)):s.insertRule(u,s.cssRules.length)}(t,n),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3),ot.length=0,et.Lt=!0,Q.inputMode=q.an,z.style.cursor="not-allowed",document.getElementById("js-hit-ball").classList.add("disabled"),document.getElementById("js-place-wall").classList.add("disabled"),Q.yn.classList.add("disabled"),Q.kn.classList.add("disabled");var t,n;const s=document.getElementById("js-reset");s.classList.remove("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{"js-reset"!==t.id&&"js-hints"!==t.id&&(t.style.backgroundColor=null,t.style.boxShadow=null)})),s.style.backgroundColor=et.Gt,s.style.boxShadow=`0 5px ${et.Jt}`,s.style.color=It(...Pt(et.Gt)),Q.$n.style.transform=null,Q.Mn=Q.wn}():Q.inputMode&q.hn?function(){if(0===at.Z.length)return;if(Ct(at.Z[0].x,at.Z[0].y,ht.C.x,ht.C.y)<W&&1===at.Z.length)return;if(at.Z.push({x:ht.C.x,y:ht.C.y}),at.Z.length<2)return;et.Tt.push(new a(at.Z[0].x,at.Z[0].y,at.Z[1].x,at.Z[1].y,!0)),at=new c}():(Q.inputMode===q.nn||Q.inputMode===q.sn)&&(Q.inputMode=Q.dn,Q.ln=null,Q.un=null),Q.gn.innerHTML=Q.mn}function lt(){Q.inputMode===q.Lt?function(){if(0===ot.length)return;let t=1;for(let n=0;n<ot.length;n++){const s=ot[n],e=et.St[n];if(e.$t)continue;t=e.kt;const i=t+dt(ht),o=Ct(ht.M.x,ht.M.y,ht.u.x,ht.u.y);s.angle=i,s.Mt=o}const n=ot[0];Q.wn=`${(180*n.angle/Math.PI).toFixed(0)}° | ${n.Mt.toFixed(0)}`;let s="";Q.Mn.length>0&&(s=`<div class="prev-ui-text">${Q.Mn}</div>`);s+=`<div>${Q.wn}</div>`,Q.gn.innerHTML=s,function(t,n){const s=-Math.cos(n)*t*.1,e=Math.sin(n)*t*.1;Q.$n.style.transform=`translate(${s}px, ${e}px)`}(n.Mt,n.angle)}():Q.inputMode===q.nn?function(){Q.un&&(Q.un===Q.ln.H?Q.ln.X(ht.C.x,ht.C.y,Q.ln.N.x,Q.ln.N.y):Q.ln.X(Q.ln.H.x,Q.ln.H.y,ht.C.x,ht.C.y));ut(Q.ln)}():Q.inputMode===q.sn?function(){if(Q.ln){const t=ht.C.x-Q.Cn.x,n=ht.C.y-Q.Cn.y;Q.ln.X(Q.ln.H.x+t,Q.ln.H.y+n,Q.ln.N.x+t,Q.ln.N.y+n),Q.Cn.x=ht.C.x,Q.Cn.y=ht.C.y}ut(Q.ln)}():Q.inputMode===q.tn&&at.Z.length>0&&ut(at)}function ut(t){if(1===t.Z.length){const n=ht.C.x-t.Z[0].x,s=ht.C.y-t.Z[0].y,e=(180*Math.atan2(s,n)/Math.PI+360)%360;Q.gn.innerText=`${e.toFixed(0)}°`,-0===e&&(Q.gn.innerText="0")}else{const n=t.Z[1].x-t.Z[0].x,s=t.Z[1].y-t.Z[0].y,e=(180*Math.atan2(s,n)/Math.PI+360)%360;Q.gn.innerText=`${e.toFixed(0)}°`,-0===e&&(Q.gn.innerText="0")}}function dt(t){return Math.atan2(-(t.M.y-t.u.y),-(t.M.x-t.u.x))}function ft(t){t.U.x+t.Ft<0&&(t.U.x=z.width-t.Ft),t.U.x-t.Ft>z.width&&(t.U.x=t.Ft),t.U.y+t.Ft<0&&(t.U.y=z.height-t.Ft),t.U.y-t.Ft>z.height&&(t.U.y=t.Ft)}function wt(t,n){const s=t.U.x-n.U.x,e=t.U.y-n.U.y;return Math.sqrt(s*s+e*e)<t.Ft+n.Ft}function Mt(t,n){const s=t.U.x-n.U.x,e=t.U.y-n.U.y,i=Math.sqrt(s*s+e*e);if(i>t.Ft+n.Ft)return 0;const o=t.Ft+n.Ft;return(o-i)/o}function mt(t,n){const s=n.U.x-t.U.x,e=n.U.y-t.U.y,i=Math.sqrt(s*s+e*e);if(0===i)return;const o=t.Ft+n.Ft-i,h=s/i,a=e/i;o>0&&(t.U.x-=o*h*(n.Bt/(t.Bt+n.Bt)),t.U.y-=o*a*(n.Bt/(t.Bt+n.Bt)),n.U.x+=o*h*(t.Bt/(t.Bt+n.Bt)),n.U.y+=o*a*(t.Bt/(t.Bt+n.Bt)));const r=(n.V.x-t.V.x)*h+(n.V.y-t.V.y)*a;if(r>0)return;const c=-2*r/(1/t.Bt+1/n.Bt);t.V.x-=c/t.Bt*h,t.V.y-=c/t.Bt*a,n.V.x+=c/n.Bt*h,n.V.y+=c/n.Bt*a}function Ct(t,n,s,e){return Math.sqrt(Math.pow(s-t,2)+Math.pow(e-n,2))}function pt(t,n=!0){t.U.x-t.Ft<0&&vt(t,t.U.x+z.width,t.U.y,n),t.U.x+t.Ft>z.width&&vt(t,t.U.x-z.width,t.U.y,n),t.U.y-t.Ft<0&&vt(t,t.U.x,t.U.y+z.height,n),t.U.y+t.Ft>z.height&&vt(t,t.U.x,t.U.y-z.height,n),vt(t,t.U.x,t.U.y,n)}function vt(t,n,s,e=!0){R.beginPath(),R.arc(n,s,t.Ft,0,2*Math.PI),R.fillStyle=`rgba(255, 255, 255, ${t.alpha})`;const i=`rgba(${t.gt[0]}, ${t.gt[1]}, ${t.gt[2]}, ${t.alpha})`;e||(R.fillStyle=i),R.strokeStyle=`rgba(0, 0, 0, ${t.alpha})`,R.lineWidth=5,R.setLineDash([]),R.closePath(),e&&R.stroke(),R.fill()}function xt(t){R.beginPath(),R.arc(t.U.x,t.U.y,t.Ft,0,2*Math.PI),R.fillStyle=t.color,R.fill(),R.closePath()}function Bt(){if(R.clearRect(0,0,z.width,z.height),-1!==nt){!function(t){Q.$n.style.backgroundColor=t.backgroundColor,Q.An.style.color=t.Ot,t.draw(R);for(let n=0;n<t.Ht.length;n++)xt(t.Ht[n]);for(let n=0;n<t.Tt.length;n++)t.Tt[n].draw(R);Q.inputMode&q.hn&&at.Z.length>0&&(_.X(at.Z[0].x,at.Z[0].y,ht.C.x,ht.C.y),_.tn=Q.inputMode===q.tn,_.draw(R));for(let n=0;n<t.St.length;n++){const s=t.St[n];if(s.Lt)for(let t=0;t<s.Et.length;t++)pt(s.Et[t],!1);pt(s)}}(et);for(let t=0;t<ot.length;t++){const n=ot[t];et.St[t].$t||bt(n)}for(let t=0;t<et.St.length;t++){const n=et.St[t];n.$t&&n.$t.It(R)}}}function bt(t){Ft(R,t.wt.x,t.wt.y,t.vt.x,t.vt.y);const n=Math.abs(t.wt.x-t.vt.x),s=Math.abs(t.wt.y-t.vt.y);let e=t.wt.x,i=t.vt.x,o=t.wt.y,h=t.vt.y;t.vt.x<0&&(e=t.wt.x+z.width,i=e-n),t.vt.x>z.width&&(e=t.wt.x-z.width,i=e+n),t.vt.y<0&&(o=t.wt.y+z.height,h=o-s),t.vt.y>z.height&&(o=t.wt.y-z.height,h=o+s),Ft(R,e,o,i,h)}function Ft(t,n,s,e,i){const o=Ct(n,s,e,i);var h=Math.min(o,20),a=Math.atan2(i-s,e-n);t.fillStyle="#fff",t.strokeStyle="#000",t.lineWidth=5,t.beginPath(),t.moveTo(n,s),t.lineTo(e-h/2*Math.cos(a),i-h/2*Math.sin(a)),t.stroke(),t.strokeStyle="#fff",t.fillStyle="#fff",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(e,i),t.lineTo(e-h*Math.cos(a-Math.PI/6),i-h*Math.sin(a-Math.PI/6)),t.lineTo(e-h*Math.cos(a+Math.PI/6),i-h*Math.sin(a+Math.PI/6)),t.closePath(),t.fill(),t.lineWidth=3,t.strokeStyle="#000",t.stroke(),t.fillStyle="#fff",t.fill(),t.beginPath(),t.moveTo(n,s),t.lineTo(e-h/2*Math.cos(a),i-h/2*Math.sin(a)),t.strokeStyle="#fff",t.lineWidth=2,t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(n,s,5,0,2*Math.PI),t.fill(),t.closePath()}function gt(t){et.update(),et.Ut&&null===Q.bn&&(Q.bn=Date.now());for(let n=0;n<et.St.length;n++){const s=et.St[n],e=ot[n];s.update(t),s.$t&&s.$t.Pt();for(let t=0;t<et.St.length;t++){if(n===t)continue;const e=et.St[t];s.$t||e.$t||s.alpha<.5||wt(s,e)&&mt(s,e)}e&&(e.wt.x=s.U.x,e.wt.y=s.U.y),Q.inputMode===q.an&&(ft(s),yt(s),At(s))}const n=null!==Q.bn&&Date.now()-Q.bn>2e3;if(et.Ut&&!Q.pn&&-1!==nt&&n&&(St("winLevel"),function(){const t=Q.$n;Q.pn=!0,t.classList.add("offscreen-right"),t.style.transition="transform 1s ease-in-out";const n=nt;setTimeout((()=>{$t(n+2>tt.length?"win":n+2),t.classList.remove("offscreen-right"),t.classList.add("offscreen-left"),t.style.transition="none",setTimeout((()=>{t.style.transition="transform 1s ease-in-out",t.classList.remove("offscreen-left"),t.classList.add("onscreen"),setTimeout((()=>{t.style.transition="none",Q.pn=!1,t.classList.remove("onscreen")}),1e3)}),50)}),1e3)}()),et.Lt)for(let t=0;t<et.St.length;t++){const n=et.St[t];n.$t||(null===Q.cn&&(Q.cn=Date.now()),Ct(n.V.x,n.V.y,0,0)<V?null===Q.cn&&(Q.cn=Date.now()):Q.cn=null,null!==Q.cn&&Date.now()-Q.cn>1e3&&(Tt(),kt(),St("loseLevel")))}for(let t=0;t<et.Tt.length;t++){const n=et.Tt[t];n.q&&n.update()}}function At(t){for(let n=0;n<et.Tt.length;n++){const s=et.Tt[n];if(s.q)continue;const e=d(t,s);if(e){const n=.5*Math.hypot(t.V.x,t.V.y);s.et(n),St("wall"),Ht(Math.random()*Math.PI*2),t.U.x+=e.xt.x,t.U.y+=e.xt.y;const i=e.axis,o=t.V.x*i.x+t.V.y*i.y;t.V.x-=2*o*i.x,t.V.y-=2*o*i.y}}}function $t(t){if("win"===t)return document.getElementById("title").style.display="none",document.getElementById("win").style.display=null,document.getElementById("win").classList.remove("animated"),setTimeout((()=>document.getElementById("win").classList.add("animated")),0),Q.mn="",Q.An.innerText="",St("winGame"),location.hash="#/win",nt=-1,void kt();1!==t||ht?document.getElementById("win").style.display="none":(document.getElementById("win").style.display="none",document.getElementById("title").classList.remove("animated"),document.getElementById("title").style.display="none",setTimeout((()=>{document.getElementById("title").style.display=null,document.getElementById("title").classList.add("animated")}),0)),nt=(t-1)%tt.length;const n=(nt+1)%tt.length;et=tt[nt],it=tt[n],et.reset(),location.hash=`#/${nt+1}`,Q.Mn="",Q.An.innerText=`${nt+1}`,kt(),Tt()}function kt(){document.getElementById("js-hit-ball").classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-reset").classList.remove("active"),document.getElementById("js-hit-ball").classList.remove("disabled"),document.getElementById("js-place-wall").classList.remove("disabled");document.getElementById("js-reset").classList.add("disabled"),Q.kn.classList.remove("disabled"),Q.yn.classList.remove("disabled"),0===nt&&Q.kn.classList.add("disabled"),nt!==tt.length-1&&-1!==nt||Q.yn.classList.add("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{let n=et.Gt,s=`0 5px ${et.Jt}`;t.classList.contains("active")&&(s=`0 2px ${et.Jt}`);let e=It(...Pt(et.Gt));t.classList.contains("disabled")?(t.style.backgroundColor=null,t.style.boxShadow=null,t.style.color=null):(t.style.backgroundColor=n,t.style.boxShadow=s,t.style.color=e)})),Q.cn=null,Q.bn=null,Q.ln=null,Q.un=null,Q.inputMode=q.Lt,z.style.cursor="crosshair"}function yt(t){t.En=!1;for(let n=0;n<et.Ht.length;n++){const s=et.Ht[n],e=s.U.x-t.U.x,i=s.U.y-t.U.y,o=Math.sqrt(e*e+i*i),h=Math.sqrt(t.V.x*t.V.x+t.V.y*t.V.y);if(o<=s.Ft-t.Ft&&h<U&&!t.$t)t.$t=s,St("inHole"),t.En=!0;else if(wt(t,s)){const n=.2*Mt(t,s),h=n*e/o,a=n*i/o;t.V.x+=h,t.V.y+=a,t.alpha-=.01,t.alpha=Math.max(t.alpha,0),t.En=!0}}t.En||(t.alpha=1)}window.playSong=St;const Et=1e3/60;let Dt=0,jt=0;function Lt(){const t=window.location.hash.substring(2);return"win"===t?"win":0===t.length?1:parseInt(t,10)}function Pt(t){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:null}function It(t,n,s){const e=function(t,n,s){return.299*t+.587*n+.114*s}(t,n,s);return e>128?"black":"white"}function St(t){Q.vn[t]&&(Q.vn[t].currentTime=0,Q.vn[t].play())}function Tt(){Q.wn="",Q.mn=`${nt+1} / ${tt.length}`,Q.gn.innerHTML=Q.mn,Q.gn.style.color=It(...Pt(et.Gt)),Q.gn.style.backgroundColor=et.Gt,et.reset()}function Ht(t){!function(t){const n=document.styleSheets[0],s="shake-animation",e="shake";for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].name===s){n.deleteRule(t);break}const i=1*Math.cos(t),o=1*-Math.sin(t);let h=`\n    @keyframes ${s} {\n      0% { transform: translate(0, 0); }\n      10% { transform: translate(${-10*i}px, ${10*o}px); }\n      20% { transform: translate(${10*i}px, ${-10*o}px); }\n      30% { transform: translate(${-8*i}px, ${8*o}px); }\n      40% { transform: translate(${8*i}px, ${-8*o}px); }\n      50% { transform: translate(${-5*i}px, ${5*o}px); }\n      60% { transform: translate(${5*i}px, ${-5*o}px); }\n      70% { transform: translate(${-3*i}px, ${3*o}px); }\n      80% { transform: translate(${3*i}px, ${-3*o}px); }\n      90% { transform: translate(${-1*i}px, ${o}px); }\n      100% { transform: translate(0, 0); }\n    }\n  `;n.insertRule(h,n.cssRules.length);let a=-1;for(let t=0;t<n.cssRules.length;t++)if(n.cssRules[t].selectorText===`.${e}`){a=t;break}const r=`\n    .${e} {\n      animation: ${s} 1s ease-out;\n    }\n  `;a>=0?(n.deleteRule(a),n.insertRule(r,a)):n.insertRule(r,n.cssRules.length)}(t),document.getElementById("canvas-container").classList.add("shake"),setTimeout((()=>{document.getElementById("canvas-container").classList.remove("shake")}),1e3)}!function t(n){const s=n-jt;for(jt=n,Dt+=s;Dt>=Et;)gt(Et),Dt-=Et;Bt(),requestAnimationFrame(t)}(0),document.addEventListener("DOMContentLoaded",(()=>{$t(Lt()),Y(),X(O,"hit"),X(J,"winLevel"),X(G,"wall"),X(N,"loseLevel"),X(H,"winGame"),X(T,"inHole"),K()})),window.addEventListener("hashchange",(()=>{"win"!==Lt()&&$t(Lt())})),document.body.addEventListener("click",(()=>{document.getElementById("title").classList.add("hide"),document.getElementById("title").style.opacity=0,ht||(St("winGame"),ht=new s(z,rt,ct,lt))})),document.body.addEventListener("touchstart",(()=>{document.getElementById("title").classList.add("hide")})),window.addEventListener("mousemove",(t=>{const n=z.getBoundingClientRect();let s="crosshair";for(let e=0;e<et.Tt.length;e++){let i=t.clientX-n.left,o=t.clientY-n.top;const h=et.Tt[e];i/=Z(),o/=Z(),h.dt(i,o)?s="pointer":(h.ct(i,o)||h.ht(i,o))&&(s="grab")}Q.inputMode===q.an&&(s="not-allowed"),z.style.cursor=s}))})();