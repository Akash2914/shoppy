"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[348],{21724:function(t,n,e){e.r(n);var s=e(1413),r=e(29439),c=e(72791),i=e(37539),a=e(16871),u=e(30577),l=e(64386),o=e(47022),d=e(89743),f=e(2677),h=e(16030),x=e(80184);n.default=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],j=n[1],m=(0,c.useState)([]),g=(0,r.Z)(m,2),b=g[0],p=g[1],v=(0,c.useState)(!1),S=(0,r.Z)(v,2),k=S[0],Z=S[1],N=(0,c.useState)(0),E=(0,r.Z)(N,2),C=E[0],R=E[1],A=(0,c.useState)(!1),D=(0,r.Z)(A,2),F=D[0],O=D[1],w=(0,a.UO)().slug,y=(0,h.v9)((function(t){return(0,s.Z)({},t)})).user;(0,c.useEffect)((function(){L()}),[w]),(0,c.useEffect)((function(){if(e.ratings&&y){var t=e.ratings.find((function(t){return t.postedBy.toString()==y._id.toString()}));t&&R(t.star)}}));var L=function(){Z(!0),(0,i.KL)(w).then((function(t){Z(!1),j(t.data),(0,i.fk)(t.data._id).then((function(t){p(t.data)}))})).catch((function(t){Z(!1),u.Am.error(t)}))};return(0,x.jsx)(x.Fragment,{children:k?(0,x.jsx)("h4",{children:"Loading"}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{children:(0,x.jsx)(l.Dh,{product:e,onStarClick:function(t,n){if(!t)return u.Am.error("Cannot Submit Empty Rating");R(t),(0,i.Ej)(n,t,y.token).then((function(t){L(),u.Am.success("Thanks For giving Rating")})).catch((function(t){console.log(t)}))},star:C,setModalVisible:O,modalVisible:F})}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsxs)(o.Z,{children:[(0,x.jsx)(d.Z,{className:"p-5",children:(0,x.jsx)(f.Z,{className:"text-center pt-5 pb-5",children:(0,x.jsx)("h3",{style:{color:"black"},children:"Related Products"})})}),(0,x.jsx)("div",{className:"row pb-5",children:b.length?b.map((function(t){return(0,x.jsx)("div",{className:"col-md-4",children:(0,x.jsx)(l.Il,{product:t})},t._id)})):(0,x.jsx)("div",{className:"text-center col",children:"NO RELATED PRODUCTS FOUND"})})]})]})})}}}]);
//# sourceMappingURL=348.76848785.chunk.js.map