"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[394],{50508:function(e,n,t){t.d(n,{rE:function(){return o},w9:function(){return u},HZ:function(){return l}});var r=t(15861),c=t(87757),s=t.n(c),a=t(74569),i=t.n(a),o=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat("https://mercurymegamart.in/api","/postContact"),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(n,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().delete("".concat("https://mercurymegamart.in/api","/removeContact/").concat(n),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat("https://mercurymegamart.in/api","/getContacts"),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},53116:function(e,n,t){t.r(n);var r=t(1413),c=t(29439),s=t(72791),a=t(50508),i=t(16030),o=t(5710),u=t(64469),l=t(30577),d=t(80184);n.default=function(){var e=(0,s.useState)([]),n=(0,c.Z)(e,2),t=n[0],h=n[1],p=(0,i.v9)((function(e){return(0,r.Z)({},e)})).user;(0,s.useEffect)((function(){null!==p&&f()}),[]);var f=function(){(0,a.HZ)(p.token).then((function(e){h(e.data)}))};return(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)(o.TL,{})}),(0,d.jsxs)("div",{className:"col",children:[(0,d.jsx)("h4",{className:"text-center ",children:t.length?"Contact Request":"No Request yet"}),t.map((function(e,n){return(0,d.jsxs)("div",{className:"m-5 p-3 card",children:[(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{children:(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:(0,d.jsxs)("b",{style:{color:"black"},children:["Form Id : ",e._id," "," / "," "]})})," ",(0,d.jsx)("span",{children:(0,d.jsxs)("b",{style:{color:"black"},children:["Submitted By: ",e.name," / "]})}),(0,d.jsx)("span",{children:(0,d.jsxs)("b",{style:{color:"black"},children:["Phone: ",e.phone," "," / "]})}),(0,d.jsx)("span",{children:(0,d.jsx)(u.Z,{title:"delete",placement:"bottom",children:(0,d.jsxs)("span",{style:{color:"black"},className:"pointer",onClick:function(){return n=e._id,void(window.confirm("are you sure wanna delete?")&&(0,a.w9)(n,p.token).then((function(e){l.Am.success("SuccessFully Removed"),f()})).catch((function(e){console.log(e)})));var n},children:[(0,d.jsx)("i",{className:"far fa-trash-alt "})," Delete"]})})})]})})}),(0,d.jsxs)("table",{className:"table table-bordered",children:[(0,d.jsx)("thead",{className:"thead-light",children:(0,d.jsx)("tr",{children:(0,d.jsx)("th",{scope:"col",children:"Content"})})}),(0,d.jsx)("tbody",{children:t.map((function(e,n){return(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:e.content})},n)}))})]})]},n)}))]})]})})}}}]);
//# sourceMappingURL=394.4d5d2f87.chunk.js.map