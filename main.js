(()=>{"use strict";const t=250;class s{constructor(t,s,n){this.t=t,this.i=s,this.color=n,this.o=[],this.h()}h(){const{t,i:s,color:o}=this,e=Math.atan2(s.y-t.y,s.x-t.x),h=Math.hypot(s.x-t.x,s.y-t.y);for(let s=0;s<Math.ceil(h/i);s++){const h=t.x+Math.cos(e)*s*i,c=t.y+Math.sin(e)*s*i;this.o.push(new n(h,c,o,e))}this.angle=e}reset(){this.o=[],this.h()}update(){for(let t=0;t<this.o.length;t++)this.o[t].l<=0||this.o[t].update()}draw(t){for(let s=0;s<this.o.length;s++)this.o[s].l<=0||this.o[s].draw(t)}}class n{constructor(t,s,n,i){this.color=n,this.u={x:t,y:s},this.M={x:0,y:0},this.color=n,this.l=100,this.angle=i}update(){this.u.x+=this.M.x,this.u.y+=this.M.y,this.l--}draw(t){this.left<0||(this.l<75?t.fillStyle=`rgba(${this.color}, ${this.l/75})`:t.fillStyle=`rgba(${this.color}, 1)`,t.beginPath(),t.rect(this.u.x-i/2,this.u.y,i,i),t.fill(),t.closePath())}}const i=20,o="255,255,255";class e{constructor(t,s,n,e,h=!0,c=!0){this.width=i,this.u={x:0,y:0},this.t={x:0,y:0},this.i={x:0,y:0},this.C={x:0,y:0},this.p={x:0,y:0},this.m=!1,this.B=h,this.v=c,this.color=h?o:"0,0,0",this.F(t,s,n,e)}F(t,s,n,i){this.t.x=t,this.t.y=s,this.i.x=n,this.i.y=i;const{t:o,i:e}=this;this.u.x=(o.x+e.x)/2,this.u.y=(o.y+e.y)/2,this.angle=Math.atan2(e.y-o.y,e.x-o.x)-Math.PI/2,this.k=this.A(o,e,this.width),this.j=this.$();const h=6*Math.sin(this.angle),c=6*-Math.cos(this.angle);this.C.x=this.t.x-h,this.C.y=this.t.y-c,this.p.x=this.i.x+h,this.p.y=this.i.y+c,this.D()}update(){this.m&&this.P.update()}D(){this.P=new s(this.t,this.i,this.color)}reset(){this.m=!1,this.P.reset()}I(t){this.m=!0,this.P.o.forEach((s=>{const n=Math.random()*Math.PI*2;s.M.x=t*(2*Math.random()-1)*Math.cos(n),s.M.y=t*(2*Math.random()-1)*Math.sin(n)}))}A(t,s,n){const i=n/2,o=Math.sqrt((s.x-t.x)**2+(s.y-t.y)**2)/2,e=this.angle;return[{x:-i,y:-o},{x:-i,y:o},{x:i,y:o},{x:i,y:-o}].map((t=>({x:this.u.x+(t.x*Math.cos(e)-t.y*Math.sin(e)),y:this.u.y+(t.x*Math.sin(e)+t.y*Math.cos(e))})))}$(){const t=[],s=this.k,n=s.length;for(let i=0;i<n;i++){const o=(i+1)%n,e=s[o].x-s[i].x,h=s[o].y-s[i].y,c=Math.sqrt(e*e+h*h),r={x:-h/c,y:e/c};t.push(r)}return t}S(t){let s=Number.POSITIVE_INFINITY,n=-Number.POSITIVE_INFINITY;for(let i=0;i<this.k.length;i++){let o=this.k[i].x*t.x+this.k[i].y*t.y;s=Math.min(s,o),n=Math.max(n,o)}return{min:s,max:n}}N(t,s,n,i,o){const e=t-n,h=s-i;return e*e+h*h<=o*o}T(t,s){return this.H(t,s)}H(t,s){let n=!1;const i=this.k,o=i.length;for(let e=0,h=o-1;e<o;h=e++){const o=i[e].x,c=i[e].y,r=i[h].x,a=i[h].y;c>s!=a>s&&t<(r-o)*(s-c)/(a-c)+o&&(n=!n)}return n}J(t,s){return this.L(t,s)?this.t:this.V(t,s)?this.i:null}L(t,s){return this.N(t,s,this.C.x,this.C.y,15)}V(t,s){return this.N(t,s,this.p.x,this.p.y,15)}W(t,s){return this.B?this.N(t,s,this.u.x,this.u.y,15):null}draw(t){this.m?this.P.draw(t):this.O(t)}O(t){t.beginPath(),t.setLineDash([]),t.fillStyle=`rgba(${this.color}, 1.0)`,t.strokeStyle="#000",t.lineWidth=2,t.moveTo(this.k[0].x,this.k[0].y);for(let s=1;s<this.k.length;s++)t.lineTo(this.k[s].x,this.k[s].y);t.closePath(),t.fill(),t.stroke(),this.color===o&&(t.beginPath(),t.lineWidth=2,t.strokeStyle="red",t.moveTo(this.u.x-5,this.u.y-5),t.lineTo(this.u.x+5,this.u.y+5),t.moveTo(this.u.x-5,this.u.y+5),t.lineTo(this.u.x+5,this.u.y-5),t.stroke(),t.closePath(),t.beginPath(),t.fillStyle="rgba(255, 0, 0, 1.0)",t.arc(this.C.x,this.C.y,4,0,2*Math.PI),t.arc(this.p.x,this.p.y,4,0,2*Math.PI),t.fill())}}class h{constructor(t=0,s=0,n=0,i=1){this.U={x:t,y:s},this.angle=n,this.q=i,this.R={x:t,y:s}}get G(){return this.R.x=this.U.x+this.q*Math.cos(this.angle),this.R.y=this.U.y+this.q*Math.sin(this.angle),this.R}}class c{constructor(){this.k=[]}}function r(t,s){return t.max>s.min&&s.max>t.min}function a(t,s){return Math.min(t.max-s.min,s.max-t.min)}function l(t,s){let n=Number.POSITIVE_INFINITY,i=null,o=null;for(let e=0;e<s.j.length;e++){const h=s.j[e],c=s.S(h),l=t.S(h);if(!r(c,l))return null;{const t=a(c,l);t<n&&(n=t,i=h,o=s.k[e])}}for(const e of s.k){const h={x:t.u.x-e.x,y:t.u.y-e.y},c=Math.sqrt(h.x*h.x+h.y*h.y);if(0===c)continue;h.x/=c,h.y/=c;const l=s.S(h),u=t.S(h);if(!r(l,u))return null;{const t=a(l,u);t<n&&(n=t,i=h,o=e)}}if(n===Number.POSITIVE_INFINITY)return null;let e=t.u.x-o.x,h=t.u.y-o.y;return e*i.x+h*i.y<0&&(i.x=-i.x,i.y=-i.y),{K:{x:i.x*n,y:i.y*n},axis:i}}class u{X=1;constructor(t,s,n=Math.PI,i=8){this.Y=i,this.color="#fff",this.u={x:t,y:s},this.Z={x:t,y:s},this.M={x:0,y:0},this._=null,this.X=i,this.tt=n,this.u.x=t,this.u.y=s,this.alpha=1,this.st=0}S(t){const s=this.u.x*t.x+this.u.y*t.y;return{min:s-this.Y,max:s+this.Y}}update(){const t=.98-this.st;this.M.x*=t,this.M.y*=t,Math.abs(this.M.x)<.01&&(this.M.x=0),Math.abs(this.M.y)<.01&&(this.M.y=0),this.u.x+=this.M.x,this.u.y+=this.M.y}reset(){this.u.x=this.Z.x,this.u.y=this.Z.y,this._=null,this.M.x=0,this.M.y=0,this.nt=!1,this.alpha=1}}class d{_=null;constructor(t,s,n=15,i="black"){this.u={x:t,y:s},this.Y=n,this.color=i}}class w{it=[];ot=[];et=[];ht=!1;backgroundColor="red";ct="red";rt="red";lt="red";ut="#ffffff";width=500;height=500;dt=!1;reset(){this.dt=!1,this.ht=!1,this.it.forEach((t=>{t.reset()})),this.ot.forEach((t=>{t.reset()})),document.getElementById("js-place-wall").classList.remove("disabled"),document.getElementById("js-place-wall").setAttribute("disabled",!1),document.body.style.backgroundColor=this.ct}get wt(){for(let t=0;t<this.it.length;t++)if(!this.it[t]._)return!1;return!0}}class f extends w{backgroundColor="#B4E7CE";ct="#59A96A";rt="#9BDEAC";lt="#474A2C";constructor(){super(),this.et=[new d(400,250)],this.it=[new u(250,250)]}}class M extends w{backgroundColor="#BB8A89";ct="#977390";rt="#AC7B7D";lt="#785589";constructor(){super(),this.et=[new d(400,125),new d(400,375)],this.it=[new u(250,125),new u(250,375)]}}class C extends w{backgroundColor="#F4F4F9";ct="#586F7C";rt="#B8DBD9";lt="#2F4550";constructor(){super(),this.et=[new d(100,125),new d(400,375)],this.it=[new u(250,125),new u(250,375,0)]}}class p extends w{backgroundColor="#AFB3F7";ct="#7A93AC";rt="#92BCEA";lt="#617073";constructor(){super(),this.et=[new d(400,125),new d(400,375)],this.it=[new u(50,125),new u(250,375,0)],this.ot=[new e(100,50,100,200,!1)]}}class m extends w{backgroundColor="#FEC0AA";ct="#84732B";rt="#EC4E20";lt="#574F2A";constructor(){super(),this.et=[new d(400,125),new d(400,375)],this.it=[new u(150,125),new u(250,375,0)],this.ot=[new e(25,0,25,500,!1),new e(475,0,475,500,!1)]}}class x extends w{backgroundColor="#F2F6D0";ct="#D9D2B6";rt="#D0E1D4";lt="#71697A";constructor(){super(),this.et=[new d(250,150),new d(100,350),new d(400,350)];const t=[{x:100,y:200},{x:400,y:200},{x:250,y:400}],s=(t[0].x+t[1].x+t[2].x)/3,n=(t[0].y+t[1].y+t[2].y)/3,i=(t,i)=>Math.atan2(n-i,s-t);this.it=[new u(t[0].x,t[0].y,i(100,200)),new u(t[1].x,t[1].y,i(400,200)),new u(t[2].x,t[2].y,i(250,400))],this.ot=[]}}class b extends w{backgroundColor="#FAA275";ct="#CE6A85";rt="#FF8C61";lt="#985277";constructor(){super(),this.et=[new d(150,400),new d(250,400),new d(350,400)],this.it=[new u(150,150),new u(250,200),new u(350,250)],this.ot=[]}}class B extends w{backgroundColor="#BEEF9E";ct="#828C51";rt="#A6C36F";lt="#335145";constructor(){super(),this.et=[new d(250,250)];this.it=[new u(400,250,0),new u(250+150*Math.cos(Math.PI),250+150*Math.sin(Math.PI),Math.PI)]}}class v extends w{backgroundColor="#CF9893";ct="#A96DA3";rt="#BC7C9C";lt="#3B3B58";constructor(){super(),this.et=[new d(250,300),new d(200,250)],this.it=[new u(250,200,-Math.PI),new u(300,250,-Math.PI/2)],this.ot=[new e(200,200,300,300,!1),new e(300,200,200,300,!1)]}}class g extends w{backgroundColor="#FFA9E7";ct="#7F2CCB";rt="#FF84E8";lt="#414361";constructor(){super(),this.et=[new d(200,200),new d(400,400)],this.it=[new u(250,250,-Math.PI),new u(300,300,-Math.PI/2)],this.ot=[new e(100,200,200,100,!1)]}}class y extends w{backgroundColor="#FFA9E7";ct="#7F2CCB";rt="#FF84E8";lt="#414361";constructor(){super(),this.et=[new d(100,100),new d(250,100),new d(400,100)],this.it=[new u(250,200,Math.PI),new u(175,325,Math.PI/4),new u(325,325,-Math.PI/4)],this.ot=[]}}class F extends w{backgroundColor="#FFA9E7";ct="#7F2CCB";rt="#FF84E8";lt="#414361";constructor(){super(),this.et=[new d(200,200),new d(300,200)],this.it=[new u(100,250,Math.PI),new u(400,250,Math.PI/3)],this.ot=[new e(125,125,175,300,!1),new e(375,125,325,300,!1),new e(125,125,175,150,!1),new e(375,125,325,150,!1),new e(175,150,325,150,!1),new e(175,300,325,300,!1),new e(200,250,200,275,!1),new e(300,250,300,275,!1),new e(200,275,300,275,!1)]}}const k=.25,E=.15,A=2,j=document.getElementById("canvas"),$=j.getContext("2d"),D={dt:1,v:2,ft:4,Mt:8,Ct:16,xt:18,bt:32,Bt:22};let P={vt:null,gt:null,yt:null,inputMode:D.dt,Ft:D.dt,kt:"",Et:"",At:{x:0,y:0}};function I(){const t=window.innerWidth/j.width,s=window.innerHeight/j.height;return Math.min(t,s)}P.jt=document.getElementById("game-ui"),P.title=document.getElementById("title-container"),P.$t=document.getElementById("hole-number"),P.Dt=document.getElementById("canvas-container"),P.Pt=document.getElementById("js-prev"),P.It=document.getElementById("js-next"),document.getElementById("js-hit-ball").addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||(P.inputMode=D.dt,t.currentTarget.classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 2px ${J.lt}`,document.getElementById("js-place-wall").style.boxShadow=`0 5px ${J.lt}`)})),document.getElementById("js-place-wall").addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||(P.inputMode=D.v,t.currentTarget.classList.add("active"),document.getElementById("js-hit-ball").classList.remove("active"),document.getElementById("js-hit-ball").style.boxShadow=`0 5px ${J.lt}`,document.getElementById("js-place-wall").style.boxShadow=`0 2px ${J.lt}`)})),document.getElementById("js-reset").addEventListener("click",(t=>{t.preventDefault(),Ct(),rt()})),P.Pt.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||ct(T)})),P.It.addEventListener("click",(t=>{t.preventDefault(),t.currentTarget.classList.contains("disabled")||ct(T+2)}));const S=new e(0,0,0,0,!0,!0),N=[new f,new M,new C,new p,new m,new x,new b,new B,new v,new g,new y,new F];let T=0,H=(T+1)%N.length,J=N[T];J.reset();let L=N[H];const V=[],W=Math.hypot(j.width,j.height)/2;let z=W;const O=5,U=new class{constructor(t,s,n,i){this.canvas=t,this.St=s,this.Nt=n,this.Tt=i,this.Ht={x:0,y:0},this.Jt={x:0,y:0},this.Lt={x:0,y:0},this.Vt={x:0,y:0},this.pressed=!1,this.boundingRect=this.canvas.getBoundingClientRect(),this.Wt(this.canvas)}resize(){this.boundingRect=this.canvas.getBoundingClientRect()}Wt(t){t.addEventListener("mousedown",this.zt.bind(this),{capture:!0,passive:!1}),window.addEventListener("mousemove",this.Ot.bind(this),{capture:!0,passive:!1}),window.addEventListener("mouseup",this.Ut.bind(this),{capture:!0,passive:!1}),t.addEventListener("touchstart",this.qt.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchend",this.Ut.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchmove",this.Qt.bind(this),{capture:!0,passive:!1}),window.addEventListener("touchcancel",this.Ut.bind(this),{capture:!0,passive:!1})}Rt(){this.Lt.x=(this.Jt.x-this.Ht.x)/t,this.Lt.y=(this.Ht.y-this.Jt.y)/t}Gt(t){const s=canvas.getBoundingClientRect();let n,i;if(t instanceof MouseEvent)n=t.clientX-s.left,i=t.clientY-s.top;else if(t instanceof TouchEvent){const t=event.touches[0];n=t.clientX-s.left,i=t.clientY-s.top}n*=canvas.width/s.width,i*=canvas.height/s.height,this.Vt.x=n,this.Vt.y=i}Kt(t){let s=0;return t instanceof MouseEvent?s=t.clientX:t instanceof TouchEvent&&(s=t.changedTouches[0].clientX),(s-this.boundingRect.left)*(this.canvas.width/this.boundingRect.width)}Xt(t){let s=0;return t instanceof MouseEvent?s=t.clientY:t instanceof TouchEvent&&(s=t.changedTouches[0].clientY),(s-this.boundingRect.top)*(this.canvas.height/this.boundingRect.height)}qt(t){t.preventDefault(),this.Gt(t),this.Yt(this.Kt(t),this.Xt(t))}Qt(t){t.preventDefault(),this.Gt(t),this.Zt(this.Kt(t),this.Xt(t)),console.log(this.pressed)}zt(t){t.preventDefault(),this.Gt(t),this.Yt(this.Kt(t),this.Xt(t))}Ot(t){t.preventDefault(),this.Gt(t),this.Zt(this.Kt(t),this.Xt(t))}Yt(t,s){this.pressed=!0,this.Ht.x=t,this.Ht.y=s,this.Jt.x=t,this.Jt.y=s,this.Rt(),this.St()}Zt(s,n){if(!this.pressed)return;const i=s-this.Ht.x,o=n-this.Ht.y,e=Math.hypot(i,o);if(this.Jt.x=s,this.Jt.y=n,e>t){const s=i/e*t,n=o/e*t;this.Jt.x=this.Ht.x+s,this.Jt.y=this.Ht.y+n}this.Rt(),this.Tt()}Ut(t){0!=this.pressed&&(t.preventDefault(),t.stopPropagation(),this.pressed=!1,this.Ht.x=0,this.Ht.y=0,this.Jt.x=0,this.Jt.y=0,this.Rt(),this.Nt())}draw(t){this.pressed&&(this._t(t),this.ts(t))}_t(s){s.strokeStyle="#FFD700",s.lineWidth=6,s.beginPath(),s.arc(this.Ht.x,this.Ht.y,t,0,2*Math.PI),s.stroke(),s.closePath()}ts(t){t.strokeStyle="#F0E68C",t.lineWidth=6,t.beginPath(),t.arc(this.Jt.x,this.Jt.y,125,0,2*Math.PI),t.fillStyle="#F0E68C",t.globalAlpha=.5,t.fill(),t.globalAlpha=1,t.closePath()}}(j,(function(){if(P.title.style.opacity=0,P.At.x=U.Vt.x,P.At.y=U.Vt.y,P.inputMode!=D.bt)for(let t=0;t<J.ot.length;t++){const s=J.ot[t];if(!s.B)continue;const n=s.J(U.Vt.x,U.Vt.y);if(s.W(U.Vt.x,U.Vt.y))return void J.ot.splice(t,1);if(n)return P.Ft=P.inputMode,P.inputMode=D.ft,P.gt=s,void(P.yt=n);s.T(U.Vt.x,U.Vt.y)&&(P.Ft=P.inputMode,P.inputMode=D.Mt,P.gt=s,P.yt=null)}P.inputMode===D.dt?function(){V.length=0;for(let t=0;t<J.it.length;t++){const s=J.it[t];V.push(new h(s.u.x,s.u.y,U.Lt.x,U.Lt.y))}}():P.inputMode&D.xt&&q.k.push({x:U.Vt.x,y:U.Vt.y})}),(function(){P.inputMode===D.dt?function(){if(0===V.length)return;for(let t=0;t<J.it.length;t++){const s=J.it[t];if(s._)continue;const n=V[t],i=Math.cos(n.angle)*n.q*.05,o=Math.sin(n.angle)*n.q*.05;s.M.x=i,s.M.y=o}V.length=0,J.dt=!0,P.inputMode=D.bt,j.style.cursor="not-allowed",document.getElementById("js-hit-ball").classList.add("disabled"),document.getElementById("js-place-wall").classList.add("disabled"),P.It.classList.add("disabled"),P.Pt.classList.add("disabled");const t=document.getElementById("js-reset");t.classList.remove("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{"js-reset"!==t.id&&(t.style.backgroundColor=null,t.style.boxShadow=null)})),t.style.backgroundColor=J.rt,t.style.boxShadow=`0 5px ${J.lt}`,t.style.color=Mt(...ft(J.rt))}():P.inputMode&D.xt?function(){if(0===q.k.length)return;if(Y(q.k[0].x,q.k[0].y,U.Vt.x,U.Vt.y)<A&&1===q.k.length)return;if(q.k.push({x:U.Vt.x,y:U.Vt.y}),q.k.length<2)return;J.ot.push(new e(q.k[0].x,q.k[0].y,q.k[1].x,q.k[1].y,!0)),q=new c}():(P.inputMode===D.ft||P.inputMode===D.Mt)&&(P.inputMode=P.Ft,P.gt=null,P.yt=null);P.jt.style.backgroundColor=null}),(function(){P.inputMode===D.dt?function(){if(0===V.length)return;let t=1;for(let s=0;s<V.length;s++){const n=V[s],i=J.it[s];if(i._)continue;t=i.tt;const o=t+Q(U),e=Y(U.Jt.x,U.Jt.y,U.Ht.x,U.Ht.y);n.angle=o,n.q=e}const s=V[0],n=Y(s.U.x,s.U.y,s.G.x,s.G.y),i=Math.atan2(s.G.y-s.U.y,s.G.x-s.U.x);P.Et=`${(180*i/Math.PI).toFixed(0)}° | ${n.toFixed(0)}`}():P.inputMode===D.ft?P.yt&&(P.yt===P.gt.t?P.gt.F(U.Vt.x,U.Vt.y,P.gt.i.x,P.gt.i.y):P.gt.F(P.gt.t.x,P.gt.t.y,U.Vt.x,U.Vt.y)):P.inputMode===D.Mt&&function(){if(P.gt){const t=U.Vt.x-P.At.x,s=U.Vt.y-P.At.y;P.gt.F(P.gt.t.x+t,P.gt.t.y+s,P.gt.i.x+t,P.gt.i.y+s),P.At.x=U.Vt.x,P.At.y=U.Vt.y}}()}));let q=new c;function Q(t){return Math.atan2(-(t.Jt.y-t.Ht.y),-(t.Jt.x-t.Ht.x))}function R(t){t.u.x+t.Y<0&&(t.u.x=j.width-t.Y),t.u.x-t.Y>j.width&&(t.u.x=t.Y),t.u.y+t.Y<0&&(t.u.y=j.height-t.Y),t.u.y-t.Y>j.height&&(t.u.y=t.Y)}function G(t,s){const n=t.u.x-s.u.x,i=t.u.y-s.u.y;return Math.sqrt(n*n+i*i)<t.Y+s.Y}function K(t,s){const n=t.u.x-s.u.x,i=t.u.y-s.u.y,o=Math.sqrt(n*n+i*i);if(o>t.Y+s.Y)return 0;const e=t.Y+s.Y;return(e-o)/e}function X(t,s){const n=s.u.x-t.u.x,i=s.u.y-t.u.y,o=Math.sqrt(n*n+i*i);if(0===o)return;const e=t.Y+s.Y-o,h=n/o,c=i/o;e>0&&(t.u.x-=e*h*(s.X/(t.X+s.X)),t.u.y-=e*c*(s.X/(t.X+s.X)),s.u.x+=e*h*(t.X/(t.X+s.X)),s.u.y+=e*c*(t.X/(t.X+s.X)));const r=(s.M.x-t.M.x)*h+(s.M.y-t.M.y)*c;if(r>0)return;const a=-2*r/(1/t.X+1/s.X);t.M.x-=a/t.X*h,t.M.y-=a/t.X*c,s.M.x+=a/s.X*h,s.M.y+=a/s.X*c}function Y(t,s,n,i){return Math.sqrt(Math.pow(n-t,2)+Math.pow(i-s,2))}function Z(t){t.u.x-t.Y<0&&_(t,t.u.x+j.width,t.u.y),t.u.x+t.Y>j.width&&_(t,t.u.x-j.width,t.u.y),t.u.y-t.Y<0&&_(t,t.u.x,t.u.y+j.height),t.u.y+t.Y>j.height&&_(t,t.u.x,t.u.y-j.height),_(t,t.u.x,t.u.y)}function _(t,s,n){$.beginPath(),$.arc(s,n,t.Y,0,2*Math.PI),$.fillStyle=`rgba(255, 255, 255, ${t.alpha})`,$.strokeStyle=`rgba(0, 0, 0, ${t.alpha})`,$.lineWidth=5,$.setLineDash([]),$.closePath(),$.stroke(),$.fill()}function tt(t){$.beginPath(),$.arc(t.u.x,t.u.y,t.Y,0,2*Math.PI),$.fillStyle=t.color,$.fill(),$.closePath()}function st(t){P.Dt.style.backgroundColor=t.backgroundColor,P.$t.style.color=t.ct,P.$t.innerText=`${T+1}`,$.clearRect(0,0,j.width,j.height);for(let s=0;s<t.et.length;s++){tt(t.et[s])}for(let s=0;s<t.ot.length;s++){t.ot[s].draw($)}P.inputMode&D.xt&&q.k.length>0&&(S.F(q.k[0].x,q.k[0].y,U.Vt.x,U.Vt.y),S.v=P.inputMode===D.v,S.draw($));for(let s=0;s<t.it.length;s++){Z(t.it[s])}}function nt(){$.clearRect(0,0,j.width,j.height),J.wt&&(st(L),$.save(),$.beginPath(),$.arc(j.width/2,j.height/2,z,0,2*Math.PI),$.closePath(),$.clip()),st(J),J.wt&&$.restore();for(let t=0;t<V.length;t++){const s=V[t];J.it[t]._||it(s)}if($.fillStyle="white",P.inputMode&D.Bt){let t;if(P.inputMode&D.ft?t=P.gt:P.inputMode&D.xt&&(t=q),P.inputMode===D.v&&t&&t.k.length>0){if(1===t.k.length){const s=U.Vt.x-t.k[0].x,n=U.Vt.y-t.k[0].y,i=180*Math.atan2(n,s)/Math.PI;P.jt.innerText=`${i.toFixed(0)}°`,-0===i&&(P.jt.innerText="0")}else{const s=t.k[1].x-t.k[0].x,n=t.k[1].y-t.k[0].y,i=180*Math.atan2(n,s)/Math.PI;P.jt.innerText=`${i.toFixed(0)}°`,-0===i&&(P.jt.innerText="0")}P.jt.style.color=Mt(...ft(J.rt)),P.jt.style.backgroundColor=J.rt}else P.jt.style.backgroundColor=null}if(P.inputMode===D.dt){let t="";P.kt.length>0&&(t=`<div class="prev-ui-text">${P.kt}</div>`),t+=`<div>${P.Et}</div>`,P.jt.innerHTML=t,P.jt.style.color=Mt(...ft(J.rt)),P.jt.style.backgroundColor=J.rt}else 0===P.kt.length&&(P.jt.style.backgroundColor=null,P.jt.innerHTML="")}function it(t){ot($,t.U.x,t.U.y,t.G.x,t.G.y);const s=Math.abs(t.U.x-t.G.x),n=Math.abs(t.U.y-t.G.y);let i=t.U.x,o=t.G.x,e=t.U.y,h=t.G.y;t.G.x<0&&(i=t.U.x+j.width,o=i-s),t.G.x>j.width&&(i=t.U.x-j.width,o=i+s),t.G.y<0&&(e=t.U.y+j.height,h=e-n),t.G.y>j.height&&(e=t.U.y-j.height,h=e+n),ot($,i,e,o,h)}function ot(t,s,n,i,o){const e=Y(s,n,i,o);var h=Math.min(e,20),c=Math.atan2(o-n,i-s);t.fillStyle="#fff",t.strokeStyle="#000",t.lineWidth=5,t.beginPath(),t.moveTo(s,n),t.lineTo(i-h/2*Math.cos(c),o-h/2*Math.sin(c)),t.stroke(),t.strokeStyle="#fff",t.fillStyle="#fff",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(i,o),t.lineTo(i-h*Math.cos(c-Math.PI/6),o-h*Math.sin(c-Math.PI/6)),t.lineTo(i-h*Math.cos(c+Math.PI/6),o-h*Math.sin(c+Math.PI/6)),t.closePath(),t.fill(),t.lineWidth=3,t.strokeStyle="#000",t.stroke(),t.fillStyle="#fff",t.fill(),t.beginPath(),t.moveTo(s,n),t.lineTo(i-h/2*Math.cos(c),o-h/2*Math.sin(c)),t.strokeStyle="#fff",t.lineWidth=2,t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(s,n,5,0,2*Math.PI),t.fill(),t.closePath()}function et(t){for(let s=0;s<J.it.length;s++){const n=J.it[s],i=V[s];n.update(t);for(let t=0;t<J.it.length;t++){if(s===t)continue;const i=J.it[t];n._||i._||n.alpha<.5||G(n,i)&&X(n,i)}i&&(i.U.x=n.u.x,i.U.y=n.u.y),P.inputMode===D.bt&&(R(n),at(n),ht(n))}if(J.wt&&(z-=O,z<=0&&ct(T+2)),J.dt)for(let t=0;t<J.it.length;t++){const s=J.it[t];s._||(null===P.vt&&(P.vt=Date.now()),Y(s.M.x,s.M.y,0,0)<E?null===P.vt&&(P.vt=Date.now()):P.vt=null,null!==P.vt&&Date.now()-P.vt>1e3&&(Ct(),rt()))}for(let t=0;t<J.ot.length;t++){const s=J.ot[t];s.m&&s.update()}}function ht(t){for(let s=0;s<J.ot.length;s++){const n=J.ot[s];if(n.m)continue;const i=l(t,n);if(i){const s=.5*Math.hypot(t.M.x,t.M.y);n.I(s),t.u.x+=i.K.x,t.u.y+=i.K.y;const o=i.axis,e=t.M.x*o.x+t.M.y*o.y;t.M.x-=2*e*o.x,t.M.y-=2*e*o.y}}}function ct(t){T=(t-1)%N.length;const s=(T+1)%N.length;J=N[T],L=N[s],z=W,J.reset(),location.hash=`#/${T+1}`,rt(),P.kt="",P.Et=""}function rt(){document.getElementById("js-hit-ball").classList.add("active"),document.getElementById("js-place-wall").classList.remove("active"),document.getElementById("js-reset").classList.remove("active"),document.getElementById("js-hit-ball").classList.remove("disabled"),document.getElementById("js-place-wall").classList.remove("disabled");document.getElementById("js-reset").classList.add("disabled"),P.Pt.classList.remove("disabled"),P.It.classList.remove("disabled"),0===T&&P.Pt.classList.add("disabled"),T===N.length-1&&P.It.classList.add("disabled"),Array.from(document.getElementsByClassName("button")).forEach((t=>{let s=J.rt,n=`0 5px ${J.lt}`,i=Mt(...ft(J.rt));t.classList.contains("disabled")?(t.style.backgroundColor=null,t.style.boxShadow=null,t.style.color=null):(t.style.backgroundColor=s,t.style.boxShadow=n,t.style.color=i)})),P.vt=null,P.gt=null,P.yt=null,P.inputMode=D.dt,j.style.cursor="crosshair"}function at(t){t.nt=!1;for(let s=0;s<J.et.length;s++){const n=J.et[s],i=n.u.x-t.u.x,o=n.u.y-t.u.y,e=Math.sqrt(i*i+o*o),h=Math.sqrt(t.M.x*t.M.x+t.M.y*t.M.y);if(e<=n.Y-t.Y&&h<k)t._=n,t.nt=!0;else if(G(t,n)){const s=.2*K(t,n),h=s*i/e,c=s*o/e;t.M.x+=h,t.M.y+=c,t.alpha-=.01,t.alpha=Math.max(t.alpha,0),t.nt=!0}}t.nt||(t.alpha=1)}const lt=1e3/60;let ut=0,dt=0;function wt(){const t=window.location.hash.substring(2);return 0===t.length?1:parseInt(t,10)}function ft(t){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return s?[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]:null}function Mt(t,s,n){const i=function(t,s,n){return.299*t+.587*s+.114*n}(t,s,n);return i>128?"black":"white"}function Ct(){P.kt=P.Et,J.reset()}!function t(s){const n=s-dt;for(dt=s,ut+=n;ut>=lt;)et(lt),ut-=lt;nt(),requestAnimationFrame(t)}(0),document.addEventListener("DOMContentLoaded",(()=>{ct(wt()),document.getElementById("js-hit-ball").click()})),window.addEventListener("hashchange",(()=>{ct(wt())})),window.addEventListener("mousemove",(t=>{const s=j.getBoundingClientRect();let n="crosshair";for(let i=0;i<J.ot.length;i++){let o=t.clientX-s.left,e=t.clientY-s.top;const h=J.ot[i];o/=I(),e/=I(),h.W(o,e)?n="pointer":(h.J(o,e)||h.T(o,e))&&(n="grab")}P.inputMode===D.bt&&(n="not-allowed"),j.style.cursor=n}))})();