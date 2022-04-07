"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[772],{26109:function(e,t,n){n.d(t,{n:function(){return a}});var r=n(96584);var a=function(){var e,t;(0,r.Z)({angle:(e=55,t=125,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),spread:360,particleCount:1200,origin:{y:.6}})}},80959:function(e,t,n){n.r(t);var r=n(15861),a=n(29439),o=n(87757),i=n.n(o),s=n(72791),l=n(5710),c=n(30577),u=n(6031),d=n(26109),h=n(11635),f=n(43360),m=n(24849),g=n(80184);t.default=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],o=t[1],p=(0,s.useState)(""),v=(0,a.Z)(p,2),b=v[0],w=v[1],y=(0,s.useState)(!1),M=(0,a.Z)(y,2),x=M[0],C=M[1],k=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n&&n===b){e.next=3;break}return e.abrupt("return",c.Am.error("Empty or Password Does not Match",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}));case 3:return C(!0),e.next=6,u.b.currentUser.updatePassword(n).then((function(){C(!1),c.Am.success("Password Updated",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),o(""),w(""),(0,d.n)()})).catch((function(e){C(!1),c.Am.error(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsx)("div",{className:"container-fluid",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-2",children:(0,g.jsx)(l.Tb,{})}),(0,g.jsx)("div",{className:"col",children:(0,g.jsxs)(l.Yb,{children:[(0,g.jsx)("h1",{className:"text-center",children:"Change Password"}),(0,g.jsxs)(h.Z,{onSubmit:k,children:[(0,g.jsxs)(h.Z.Group,{controlId:"password",children:[(0,g.jsx)(h.Z.Label,{children:(0,g.jsx)("strong",{children:"New Password"})}),(0,g.jsx)(h.Z.Control,{type:"password",autoFocus:!0,autoComplete:"on",placeholder:"Enter your new password",value:n,disabled:x,onChange:function(e){return o(e.target.value)}}),(0,g.jsx)(h.Z.Text,{className:"text-muted ",children:"Password Must be 6 characters"})]}),(0,g.jsxs)(h.Z.Group,{controlId:"confirmPassword",children:[(0,g.jsx)(h.Z.Control,{type:"password",autoComplete:"on",disabled:x,placeholder:"Confirm password",value:b,className:"mt-3",onChange:function(e){return w(e.target.value)}}),x?(0,g.jsxs)(f.Z,{className:"mt-2 btn-danger",disabled:!0,children:[(0,g.jsx)(m.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"  ","Updating Password"]}):(0,g.jsxs)(f.Z,{disabled:!n||n.length<6,type:"submit",className:"mt-3 btn-primary",style:{borderRadius:20},children:[(0,g.jsx)("i",{className:"fas fa-check",children:" "})," Change Password"]})]})]})]})})]})})}},96584:function(e,t,n){var r={};!function e(t,n,r,a){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function i(){}function s(e){var r=n.exports.Promise,a=void 0!==r?r:t.Promise;return"function"===typeof a?new a(e):(e(i,i),null)}var l=function(){var e,t,n=Math.floor(1e3/60),r={},a=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(e=function(e){var t=Math.random();return r[t]=requestAnimationFrame((function o(i){a===i||a+n-1<i?(a=i,delete r[t],e()):r[t]=requestAnimationFrame(o)})),t},t=function(e){r[e]&&cancelAnimationFrame(r[e])}):(e=function(e){return setTimeout(e,n)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),c=function(){var t,n,a={};return function(){if(t)return t;if(!r&&o){var i=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch(l){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",l),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,o,i){if(n)return t(r,null),n;var l=Math.random().toString(36).slice(2);return n=s((function(o){function s(t){t.data.callback===l&&(delete a[l],e.removeEventListener("message",s),n=null,i(),o())}e.addEventListener("message",s),t(r,l),a[l]=s.bind(null,{data:{callback:l}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),a)a[t](),delete a[t]}}(t)}return t}}(),u={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function d(e,t,n){return function(e,t){return t?t(e):e}(e&&(null!==(r=e[t])&&void 0!==r)?e[t]:u[t],n);var r}function h(e){return e<0?0:Math.floor(e)}function f(e){return parseInt(e,16)}function m(e){return e.map(g)}function g(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:f(t.substring(0,2)),g:f(t.substring(2,4)),b:f(t.substring(4,6))}}function p(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function v(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function b(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:Math.random()*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar}}function w(e,t,n,o,i){var c,u,d=t.slice(),h=e.getContext("2d"),f=s((function(t){function s(){c=u=null,h.clearRect(0,0,o.width,o.height),i(),t()}c=l.frame((function t(){!r||o.width===a.width&&o.height===a.height||(o.width=e.width=a.width,o.height=e.height=a.height),o.width||o.height||(n(e),o.width=e.width,o.height=e.height),h.clearRect(0,0,o.width,o.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=.1,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+5,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,a=t.y+t.random*t.tiltSin,o=t.wobbleX+t.random*t.tiltCos,i=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(o-r)*t.ovalScalar,Math.abs(i-a)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,a,o,i,s,l){e.save(),e.translate(t,n),e.rotate(o),e.scale(r,a),e.arc(0,0,1,i,s,l),e.restore()}(e,t.x,t.y,Math.abs(o-r)*t.ovalScalar,Math.abs(i-a)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(a)),e.lineTo(Math.floor(o),Math.floor(i)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(h,e)})),d.length?c=l.frame(t):s()})),u=s}));return{addFettis:function(e){return d=d.concat(e),f},canvas:e,promise:f,reset:function(){c&&l.cancel(c),u&&u()}}}function y(e,n){var r,a=!e,i=!!d(n||{},"resize"),l=d(n,"disableForReducedMotion",Boolean),u=o&&!!d(n||{},"useWorker")?c():null,f=a?p:v,g=!(!e||!u)&&!!e.__confetti_initialized,y="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function M(t,n,a){for(var o,i,s=d(t,"particleCount",h),l=d(t,"angle",Number),c=d(t,"spread",Number),u=d(t,"startVelocity",Number),g=d(t,"decay",Number),p=d(t,"gravity",Number),v=d(t,"drift",Number),y=d(t,"colors",m),M=d(t,"ticks",Number),x=d(t,"shapes"),C=d(t,"scalar"),k=function(e){var t=d(e,"origin",Object);return t.x=d(t,"x",Number),t.y=d(t,"y",Number),t}(t),N=s,P=[],j=e.width*k.x,I=e.height*k.y;N--;)P.push(b({x:j,y:I,angle:l,spread:c,startVelocity:u,color:y[N%y.length],shape:x[(o=0,i=x.length,Math.floor(Math.random()*(i-o))+o)],ticks:M,decay:g,gravity:p,drift:v,scalar:C}));return r?r.addFettis(P):(r=w(e,P,f,n,a)).promise}function x(n){var o=l||d(n,"disableForReducedMotion",Boolean),c=d(n,"zIndex",Number);if(o&&y)return s((function(e){e()}));a&&r?e=r.canvas:a&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(c),document.body.appendChild(e)),i&&!g&&f(e);var h={width:e.width,height:e.height};function m(){if(u){var t={getBoundingClientRect:function(){if(!a)return e.getBoundingClientRect()}};return f(t),void u.postMessage({resize:{width:t.width,height:t.height}})}h.width=h.height=null}function p(){r=null,i&&t.removeEventListener("resize",m),a&&e&&(document.body.removeChild(e),e=null,g=!1)}return u&&!g&&u.init(e),g=!0,u&&(e.__confetti_initialized=!0),i&&t.addEventListener("resize",m,!1),u?u.fire(n,h,p):M(n,h,p)}return x.reset=function(){u&&u.reset(),r&&r.reset()},x}n.exports=y(null,{useWorker:!0,resize:!0}),n.exports.create=y}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),r,!1),t.Z=r.exports;r.exports.create}}]);
//# sourceMappingURL=772.2c66f22d.chunk.js.map