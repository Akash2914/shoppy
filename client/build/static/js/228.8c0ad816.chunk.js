"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[228],{8541:function(e,r,n){n.r(r);var t=n(15861),s=n(29439),a=n(1413),i=n(87757),o=n.n(i),l=n(72791),c=n(11635),u=n(43360),d=n(24849),h=n(89743),p=n(2677),m=n(43504),g=n(51860),v=n(30577),f=n(6031),x=n(16871),Z=n(16030),b=n(80184);r.default=function(){var e=(0,x.s0)(),r=(0,Z.v9)((function(e){return(0,a.Z)({},e)})).user;(0,l.useEffect)((function(){r&&r.token&&(e("/"),v.Am.error("Already Logged In",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))}),[r,e]);var n=(0,l.useState)(""),i=(0,s.Z)(n,2),j=i[0],y=i[1],k=(0,l.useState)(!1),C=(0,s.Z)(k,2),w=C[0],A=C[1],S=function(){var e=(0,t.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),A(!0),console.log(j),n={url:"http://localhost:8000/complete",handleCodeInApp:!0},e.next=6,f.b.sendSignInLinkToEmail(j,n);case 6:v.Am.success("Verification Mail Sent to ".concat(j,",Click the link to complete your Registration"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),window.localStorage.setItem("mercuryNewRegister",j),y(""),A(!1);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,b.jsxs)(g.Yb,{children:[(0,b.jsx)("h1",{children:"Register"}),(0,b.jsxs)(c.Z,{onSubmit:S,children:[(0,b.jsxs)(c.Z.Group,{controlId:"email",children:[(0,b.jsx)(c.Z.Label,{children:"Email Address"}),(0,b.jsx)(c.Z.Control,{type:"email",placeholder:"Enter your Email",value:j,required:!0,autoFocus:!0,onChange:function(e){return y(e.target.value)}}),(0,b.jsx)(c.Z.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),w?(0,b.jsxs)(u.Z,{variant:"primary",className:"btn-raised mt-3",disabled:!0,children:[(0,b.jsx)(d.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"  ","Loading..."]}):(0,b.jsx)(u.Z,{type:"submit",disabled:w,className:"btn-raised mt-3",variant:"primary",children:"Register"})]}),(0,b.jsx)(h.Z,{className:"py-3",children:(0,b.jsxs)(p.Z,{children:["Alreary Have an Account? ",(0,b.jsx)(m.rU,{to:"/login",children:"Login"})]})})]})}}}]);
//# sourceMappingURL=228.8c0ad816.chunk.js.map