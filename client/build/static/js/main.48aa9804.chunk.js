(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(6),s=n.n(r),i=n(3),j=n.n(i),u=n(4),l=n(2);var o=function(){var e=Object(a.useState)({name:"",amount:""}),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],h=i[1],b=Object(a.useState)(""),d=Object(l.a)(b,2),O=d[0],x=d[1],m=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/names/search/"+O);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r({name:n.name,amount:n.amount}),h(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),h("Name not found");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Name to search..",value:O,onChange:function(e){return x(e.target.value)}}),"\xa0",Object(c.jsx)("input",{type:"button",className:"search button",name:"search",value:"Search",onClick:function(e){O.length>0?m():h("Give Name")}})]}),n.name.length>0&&0===o.length?Object(c.jsx)("div",{children:Object(c.jsxs)("h3",{children:[n.amount," employees with name ",n.name," found!"]})}):Object(c.jsx)("p",{children:o})]})};var h=function(e){var t,n=Object(a.useState)({}),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)("Fetching..."),h=Object(l.a)(o,2),b=h[0],d=h[1],O=function(){var t=Object(u.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/v1/"+e.sort);case 3:return n=t.sent,console.log(n),t.next=7,n.json();case 7:c=t.sent,i(c.names),d(""),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),d("Fetching data failed");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return t="alphabetical-order"===e.sort?"Names in Alphabetical Order":"Names in Top Order",Object(a.useEffect)((function(){O()}),[]),b.length>0?Object(c.jsx)("div",{children:b}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsxs)("table",{cellSpacing:"20",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"thname",children:"Name"}),Object(c.jsx)("th",{className:"thname",children:"Amount"})]})}),Object(c.jsx)("tbody",{children:s.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.amount})]},e.name)}))})]})]})};var b=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Solita - dev-academy-2021 exercise - Name Application"})})};var d=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("Fetching..."),i=Object(l.a)(s,2),o=i[0],h=i[1],b=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/count");case 3:return t=e.sent,console.log(t),e.next=7,t.json();case 7:n=e.sent,r(n.count),h(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),h("Fetching data failed");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b()}),[]),o.length>0?Object(c.jsx)("div",{children:o}):Object(c.jsx)("div",{children:Object(c.jsxs)("h3",{children:["Total Count of Names: ",n]})})},O=new Date;var x=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("p",{children:"Made by Mikko"}),Object(c.jsx)("p",{children:O.getFullYear()})]})};var m=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"middle",children:[Object(c.jsx)(o,{}),Object(c.jsx)(d,{})]}),Object(c.jsxs)("div",{className:"tables",children:[Object(c.jsx)(h,{sort:"alphabetical-order"}),Object(c.jsx)(h,{sort:"most-popular"})]}),Object(c.jsx)(x,{})]})};s.a.render(Object(c.jsx)(m,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.48aa9804.chunk.js.map