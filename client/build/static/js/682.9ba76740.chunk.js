"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[682],{4707:function(e,c,n){n.r(c);var r=n(1413),t=(n(72791),n(43360)),s=n(16030),o=n(43504),i=n(16871),l=n(51860),h=n(67735),d=n(30577),a=n(80184);c.default=function(){var e=(0,s.v9)((function(e){return(0,r.Z)({},e)})),c=e.cart,n=e.user,u=(0,i.s0)();(0,s.I0)();return(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-md-8",children:[(0,a.jsxs)("h4",{children:[c.length," items in the Cart "]}),c.length?(0,a.jsxs)("table",{className:"table table-bordered",children:[(0,a.jsx)("thead",{className:"thead-light",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",children:"Image"}),(0,a.jsx)("th",{scope:"col",children:"Title"}),(0,a.jsx)("th",{scope:"col",children:"Price"}),(0,a.jsx)("th",{scope:"col",children:"Brand"}),(0,a.jsx)("th",{scope:"col",children:"Count"}),(0,a.jsx)("th",{scope:"col",children:"Remove"})]})}),c.map((function(e){return(0,a.jsx)(l.ii,{product:e},e._id)}))]}):(0,a.jsxs)("p",{children:["No Products in the cart ",(0,a.jsx)(o.rU,{to:"/",children:"Continue Shopping"})]})]}),(0,a.jsx)("div",{className:"col-md-4",children:(0,a.jsxs)("h4",{children:["Order Summary ",(0,a.jsx)("hr",{}),(0,a.jsx)("p",{children:"Products"}),c.map((function(e,c){return(0,a.jsx)("div",{children:(0,a.jsxs)("h5",{children:[e.title," * ",e.count," = \u20b9",e.price*e.count]})},c)})),(0,a.jsx)("hr",{}),"Total : ",(0,a.jsxs)("b",{children:["\u20b9",c.reduce((function(e,c){return e+c.count*c.price}),0)]}),(0,a.jsx)("hr",{}),n?(0,a.jsx)(t.Z,{style:{textDecoration:"none"},disabled:c.length<1,onClick:function(){!0===n.isBlocked?d.Am.error("You are Restricted from placcing Order,Contact Admin"):(0,h.E9)(c,n.token).then((function(e){console.log("CART DB response",e),e.data.ok&&u("/checkout")})).catch((function(e){console.log("CART SAVE ERROR",e),d.Am.error("CHECK CONSOLE FOR ERROR")}))},children:"Proceed to Checkout"}):(0,a.jsx)(t.Z,{children:(0,a.jsx)(o.rU,{to:{pathname:"/login",state:{from:"cart"}},style:{textDecoration:"none",color:"black"},children:"Login to Checkout"})})]})})]})})}}}]);
//# sourceMappingURL=682.9ba76740.chunk.js.map