(this["webpackJsonpfloral-admin"]=this["webpackJsonpfloral-admin"]||[]).push([[0],{21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=a(16),s=a.n(r),i=(a(21),a(10)),o=a(13);a(24);o.a.initializeApp({apiKey:"AIzaSyBbpct0hIaeZGS7WR1m48T8IKnoVp_kY1M",authDomain:"moneytracker-9473e.firebaseapp.com",databaseURL:"https://moneytracker-9473e-default-rtdb.firebaseio.com",projectId:"moneytracker-9473e",storageBucket:"moneytracker-9473e.appspot.com",messagingSenderId:"261335311170",appId:"1:261335311170:web:a991f6e4d362acc929dedb"});var l=o.a,m=a(6);var b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],b=s[1],d=Object(n.useState)(0),u=Object(i.a)(d,2),j=u[0],p=u[1],h=function(){c(""),b(""),p(0)};return Object(m.jsxs)("div",{className:"container-md pt-3",children:[Object(m.jsx)("h1",{className:"text-center",children:"Floral-App Admin"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{className:"border rounded shadow p-3 mt-3",children:[Object(m.jsx)("div",{className:"mb-3",children:Object(m.jsx)("input",{className:"form-control",type:"file",id:"image",onChange:function(e){return function(e){var t=new FileReader;t.onloadend=function(){c(t.result)},t.readAsDataURL(e)}(e.target.files[0])}})}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:"form-label",children:"Nama Bunga"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"name",onChange:function(e){b(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"price",className:"form-label",children:"Harga Bunga"}),Object(m.jsx)("input",{type:"number",className:"form-control",id:"price",onChange:function(e){return p(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),l.database().ref("flowers/").push({image:a,name:o,price:j}).then((function(){alert("berhasil, berhasil, berhasil hore"),h()})).catch((function(){return alert("gagal")}))},children:"Submit"})]})]})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),d()}},[[26,1,2]]]);
//# sourceMappingURL=main.0fba3a20.chunk.js.map