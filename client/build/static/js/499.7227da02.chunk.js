"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[499],{50508:function(e,t,r){r.d(t,{rE:function(){return u},w9:function(){return l},HZ:function(){return i}});var n=r(15861),a=r(87757),o=r.n(a),s=r(74569),c=r.n(s),u=function(){var e=(0,n.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().post("".concat("http://localhost:8000/api","/postContact"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(o().mark((function e(t,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().delete("".concat("http://localhost:8000/api","/removeContact/").concat(t),{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat("http://localhost:8000/api","/getContacts"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1385:function(e,t,r){r.r(t);var n=r(29439),a=r(72791),o=r(30577),s=r(51860),c=r(11635),u=r(43360),l=r(24849),i=r(50508),h=r(16871),d=r(80184);t.default=function(){var e=(0,a.useState)(!1),t=(0,n.Z)(e,2),r=t[0],p=t[1],x=(0,a.useState)(""),f=(0,n.Z)(x,2),m=f[0],b=f[1],j=(0,a.useState)(""),Z=(0,n.Z)(j,2),v=Z[0],g=Z[1],y=(0,a.useState)(""),C=(0,n.Z)(y,2),w=C[0],k=C[1],q=(0,a.useState)(""),S=(0,n.Z)(q,2),A=S[0],F=S[1],L=(0,h.s0)(),N=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.Yb,{children:(0,d.jsxs)(c.Z,{onSubmit:function(e){e.preventDefault();var t={name:m,email:v,phone:w,content:A};return m&&v&&w&&A?N.test(w)?(p(!0),void(0,i.rE)(t).then((function(e){o.Am.success("Your request has been received, we will contact you shortly"),p(!1),b(""),g(""),k(""),F(""),L("/")})).catch((function(e){o.Am.error(e),p(!1)}))):o.Am.error("Enter a Valid Phone Number wihtout country code"):o.Am.error("All are required Fields")},children:[(0,d.jsxs)(c.Z.Group,{controlId:"name",children:[(0,d.jsx)(c.Z.Label,{children:(0,d.jsx)("strong",{style:{color:"black"},children:"Name"})}),(0,d.jsx)(c.Z.Control,{type:"text",autoFocus:!0,required:!0,placeholder:"name",value:m,onChange:function(e){return b(e.target.value)}})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(c.Z.Group,{controlId:"email",children:[(0,d.jsx)(c.Z.Label,{children:(0,d.jsx)("strong",{style:{color:"black"},children:"Email"})}),(0,d.jsx)(c.Z.Control,{type:"text",autoFocus:!0,required:!0,placeholder:"email",value:v,onChange:function(e){return g(e.target.value)}})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(c.Z.Group,{controlId:"phone",children:[(0,d.jsx)(c.Z.Label,{children:(0,d.jsx)("strong",{style:{color:"black"},children:"Phone"})}),(0,d.jsx)(c.Z.Control,{type:"Number",autoFocus:!0,required:!0,placeholder:"Phone",value:w,onChange:function(e){return k(e.target.value)}})]}),(0,d.jsx)("br",{}),(0,d.jsxs)(c.Z.Group,{controlId:"content",children:[(0,d.jsx)(c.Z.Label,{children:(0,d.jsx)("strong",{style:{color:"black"},children:"Content"})}),(0,d.jsx)(c.Z.Control,{as:"textarea",required:!0,placeholder:"Type Your Query",value:A,onChange:function(e){return F(e.target.value)},rows:3})]}),r?(0,d.jsxs)(u.Z,{variant:"primary",className:"btn-sm btn-danger mt-3",disabled:!0,children:[(0,d.jsx)(l.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"  ","Loading..."]}):(0,d.jsx)(u.Z,{type:"submit",disabled:r||!m||!A||!v,className:"btn-raised mt-3",variant:"primary",children:"Create"})]})})})}}}]);
//# sourceMappingURL=499.7227da02.chunk.js.map