"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[148],{26109:function(t,e,n){n.d(e,{n:function(){return r}});var a=n(96584);var r=function(){var t,e;(0,a.Z)({angle:(t=55,e=125,t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)),spread:360,particleCount:1200,origin:{y:.6}})}},91266:function(t,e,n){n.r(e);var a=n(29439),r=n(72791),i=n(51860),o=n(37539),c=n(26109),l=n(16871),s=n(30577),u=n(80184);e.default=function(){(0,l.s0)();var t=(0,r.useState)([]),e=(0,a.Z)(t,2),n=(e[0],e[1]),f=(0,r.useState)([]),d=(0,a.Z)(f,2),h=d[0],g=d[1],m=(0,r.useState)(!1),b=(0,a.Z)(m,2),v=(b[0],b[1]),p=(0,r.useState)(1),y=(0,a.Z)(p,2),M=y[0];y[1];(0,r.useEffect)((function(){v(!0),(0,o.rO)("createdAt","desc",M).then((function(t){v(!1),n(t.data)})).catch((function(t){v(!1),console.log(t)}))}),[M]),(0,r.useEffect)((function(){w()}),[]);var w=function(){(0,o.rO)("quantity","desc",1,3).then((function(t){g(t.data)})).catch((function(t){s.Am.error(t)}))};window.innerWidth;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"d-flex align-items-center justify-content-center ",style:{height:"100px"},children:(0,u.jsx)("h1",{style:{color:"100px"},onClick:function(){return(0,c.n)()},children:"Mercury Mega Mart"})}),(0,u.jsx)("br",{}),(0,u.jsx)(i.GM,{newlyAddedproducts:h}),(0,u.jsx)(i.zk,{}),(0,u.jsx)("br",{}),(0,u.jsx)(i.J3,{}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)(i.ot,{}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)(i.NH,{})]})}},96584:function(t,e,n){var a={};!function t(e,n,a,r){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function o(){}function c(t){var a=n.exports.Promise,r=void 0!==a?a:e.Promise;return"function"===typeof r?new r(t):(t(o,o),null)}var l=function(){var t,e,n=Math.floor(1e3/60),a={},r=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(t=function(t){var e=Math.random();return a[e]=requestAnimationFrame((function i(o){r===o||r+n-1<o?(r=o,delete a[e],t()):a[e]=requestAnimationFrame(i)})),e},e=function(t){a[t]&&cancelAnimationFrame(a[t])}):(t=function(t){return setTimeout(t,n)},e=function(t){return clearTimeout(t)}),{frame:t,cancel:e}}(),s=function(){var e,n,r={};return function(){if(e)return e;if(!a&&i){var o=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{e=new Worker(URL.createObjectURL(new Blob([o])))}catch(l){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",l),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(a,i,o){if(n)return e(a,null),n;var l=Math.random().toString(36).slice(2);return n=c((function(i){function c(e){e.data.callback===l&&(delete r[l],t.removeEventListener("message",c),n=null,o(),i())}t.addEventListener("message",c),e(a,l),r[l]=c.bind(null,{data:{callback:l}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),r)r[e](),delete r[e]}}(e)}return e}}(),u={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function f(t,e,n){return function(t,e){return e?e(t):t}(t&&(null!==(a=t[e])&&void 0!==a)?t[e]:u[e],n);var a}function d(t){return t<0?0:Math.floor(t)}function h(t){return parseInt(t,16)}function g(t){return t.map(m)}function m(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:h(e.substring(0,2)),g:h(e.substring(2,4)),b:h(e.substring(4,6))}}function b(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function v(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function p(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:Math.random()*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar}}function y(t,e,n,i,o){var s,u,f=e.slice(),d=t.getContext("2d"),h=c((function(e){function c(){s=u=null,d.clearRect(0,0,i.width,i.height),o(),e()}s=l.frame((function e(){!a||i.width===r.width&&i.height===r.height||(i.width=t.width=r.width,i.height=t.height=r.height),i.width||i.height||(n(t),i.width=t.width,i.height=t.height),d.clearRect(0,0,i.width,i.height),f=f.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=.1,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+5,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,r=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(o-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,a,r,i,o,c,l){t.save(),t.translate(e,n),t.rotate(i),t.scale(a,r),t.arc(0,0,1,o,c,l),t.restore()}(t,e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(o-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(r)),t.lineTo(Math.floor(i),Math.floor(o)),t.lineTo(Math.floor(a),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(d,t)})),f.length?s=l.frame(e):c()})),u=c}));return{addFettis:function(t){return f=f.concat(t),h},canvas:t,promise:h,reset:function(){s&&l.cancel(s),u&&u()}}}function M(t,n){var a,r=!t,o=!!f(n||{},"resize"),l=f(n,"disableForReducedMotion",Boolean),u=i&&!!f(n||{},"useWorker")?s():null,h=r?b:v,m=!(!t||!u)&&!!t.__confetti_initialized,M="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function w(e,n,r){for(var i,o,c=f(e,"particleCount",d),l=f(e,"angle",Number),s=f(e,"spread",Number),u=f(e,"startVelocity",Number),m=f(e,"decay",Number),b=f(e,"gravity",Number),v=f(e,"drift",Number),M=f(e,"colors",g),w=f(e,"ticks",Number),x=f(e,"shapes"),C=f(e,"scalar"),k=function(t){var e=f(t,"origin",Object);return e.x=f(e,"x",Number),e.y=f(e,"y",Number),e}(e),S=c,E=[],j=t.width*k.x,I=t.height*k.y;S--;)E.push(p({x:j,y:I,angle:l,spread:s,startVelocity:u,color:M[S%M.length],shape:x[(i=0,o=x.length,Math.floor(Math.random()*(o-i))+i)],ticks:w,decay:m,gravity:b,drift:v,scalar:C}));return a?a.addFettis(E):(a=y(t,E,h,n,r)).promise}function x(n){var i=l||f(n,"disableForReducedMotion",Boolean),s=f(n,"zIndex",Number);if(i&&M)return c((function(t){t()}));r&&a?t=a.canvas:r&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(s),document.body.appendChild(t)),o&&!m&&h(t);var d={width:t.width,height:t.height};function g(){if(u){var e={getBoundingClientRect:function(){if(!r)return t.getBoundingClientRect()}};return h(e),void u.postMessage({resize:{width:e.width,height:e.height}})}d.width=d.height=null}function b(){a=null,o&&e.removeEventListener("resize",g),r&&t&&(document.body.removeChild(t),t=null,m=!1)}return u&&!m&&u.init(t),m=!0,u&&(t.__confetti_initialized=!0),o&&e.addEventListener("resize",g,!1),u?u.fire(n,d,b):w(n,d,b)}return x.reset=function(){u&&u.reset(),a&&a.reset()},x}n.exports=M(null,{useWorker:!0,resize:!0}),n.exports.create=M}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),a,!1),e.Z=a.exports;a.exports.create}}]);
//# sourceMappingURL=148.9b0d1da4.chunk.js.map