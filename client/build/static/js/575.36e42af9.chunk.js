"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[575],{9601:function(t,n,e){e.r(n),e.d(n,{default:function(){return x}});var r=e(29439),a=e(1413),u=e(72791),c=e(51860),s=e(15861),o=e(87757),i=e.n(o),d=e(74569),l=e.n(d),f=function(){var t=(0,s.Z)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().get("".concat("http://localhost:8000/api","/getOrderAdmin"),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,s.Z)(i().mark((function t(n,e,r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().put("".concat("http://localhost:8000/api","/orderStatus"),{orderId:n,orderStatus:e},{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),p=e(16030),v=e(30577),k=e(80184),x=function(){var t=(0,p.v9)((function(t){return(0,a.Z)({},t)})).user,n=(0,u.useState)([]),e=(0,r.Z)(n,2),s=e[0],o=e[1];(0,u.useEffect)((function(){i()}),[]);var i=function(){f(t.token).then((function(t){o(t.data),console.log(JSON.stringify(t.data,null,4))}))};return(0,k.jsx)("div",{className:"container-fluid",children:(0,k.jsxs)("div",{className:"row",children:[(0,k.jsx)("div",{className:"col-md-2",children:(0,k.jsx)(c.TL,{})}),(0,k.jsx)("div",{className:"col",children:(0,k.jsx)(c.We,{orders:s,handleStatusChange:function(n,e){h(n,e,t.token).then((function(t){v.Am.success("Status Updated"),i()}))}})})]})})}}}]);
//# sourceMappingURL=575.36e42af9.chunk.js.map