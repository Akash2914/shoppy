"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[299],{78547:function(e,t,r){r.r(t);var n=r(15861),a=r(29439),s=r(1413),o=r(87757),i=r.n(o),c=r(72791),l=r(5710),u=r(16030),d=r(30577),h=r(6187),p=r(28272),m=r(12576),f=r(43504),g=r(80184);t.default=function(){var e=(0,u.v9)((function(e){return(0,s.Z)({},e)})).user,t=(0,c.useState)(""),r=(0,a.Z)(t,2),o=r[0],v=r[1],x=(0,c.useState)(!1),C=(0,a.Z)(x,2),j=C[0],k=C[1],b=(0,c.useState)(!1),N=(0,a.Z)(b,2),O=N[0],w=N[1],Z=(0,c.useState)([]),y=(0,a.Z)(Z,2),A=y[0],H=y[1],B=(0,c.useState)(""),P=(0,a.Z)(B,2),S=P[0],E=P[1];(0,c.useEffect)((function(){D()}),[]);var D=function(){(0,h.CP)().then((function(e){H(e.data)})).catch((function(e){d.Am.error("FETCHING CATEGORY ERROR")}))},L=function(){var t=(0,n.Z)(i().mark((function t(r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.confirm("are you sure wanna delete ".concat(r,"?"))&&(w(),(0,h.sT)(r,e.token).then((function(e){w(!1),d.Am.error("".concat(e.data.name," is Deleted"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),D()})).catch((function(e){w(!1),d.Am.error(e.response.data,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,g.jsx)(g.Fragment,{children:O?(0,g.jsx)("h4",{children:"Loading..."}):(0,g.jsx)("div",{className:"container-fluid",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-2",children:(0,g.jsx)(l.TL,{})}),(0,g.jsx)("div",{className:"col",children:(0,g.jsxs)(l.Yb,{children:[(0,g.jsx)(l.CB,{submitHandler:function(t){if(t.preventDefault(),!o||o.length<2)return d.Am.error("Name must be atleast 2 characters",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});k(!0),(0,h.k4)({name:o},e.token).then((function(e){k(!1),v(""),d.Am.success("".concat(e.data.name," is created"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),D()})).catch((function(e){k(!1),d.Am.error(e.response.data,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))},name:o,setName:v,buttonloading:j,title:"Create Category"}),(0,g.jsx)(l.JX,{keyword:S,handleSearchChange:function(e){e.preventDefault(),E(e.target.value.toLowerCase())}}),A.filter(function(e){return function(t){return t.name.toLowerCase().includes(e)}}(S)).map((function(e){return(0,g.jsxs)("div",{className:"alert alert-success",children:[e.name,(0,g.jsx)(p.Z,{placement:"bottom",overlay:(0,g.jsx)(m.Z,{id:"tooltipment",children:"Delete"}),children:(0,g.jsx)("span",{className:"float-end mx-2",children:(0,g.jsx)("i",{className:"fa fa-trash  text-danger","aria-hidden":"true",style:{cursor:"pointer"},onClick:function(){return L(e.slug)}})})}),(0,g.jsx)(p.Z,{placement:"bottom",overlay:(0,g.jsx)(m.Z,{id:"tooltipment",children:"Edit"}),children:(0,g.jsx)(f.rU,{to:"/admin/category/".concat(e.slug),className:"float-end mx-2",children:(0,g.jsx)("i",{className:"fa fa-pencil text-primary ","aria-hidden":"true"})})})]},e._id)}))]})})]})})})}}}]);
//# sourceMappingURL=299.7306df78.chunk.js.map