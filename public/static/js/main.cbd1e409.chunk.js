(this["webpackJsonpfrases-app"]=this["webpackJsonpfrases-app"]||[]).push([[0],{82:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t(19),c=t.n(n),r=t(2),i=t(10),o=t(8),l=t(4),u=t.n(l),d=t(12),j=t(9),p=t.n(j),h="[ui] Abrir Modal Creaci\xf3n",b="[ui] Cerrar Modal Creaci\xf3n",m="[ui] Abrir Modal Actualizaci\xf3n",f="[ui] Cerrar Modal Actualizaci\xf3n",O="[auth] Fin Revisi\xf3n Token",x="[auth] Iniciar Sesi\xf3n",v="[auth] Cerrar Sesi\xf3n",g="[auth] Cambiar Nombre",N="[phrases] Obtener Frases",k="[phrases] Eliminar Frase",w="[phrases] Obtener Frases Usuario",y="[phrases] Cerrar Sesi\xf3n Borrar Frases Estado",C="[phrases] Obtener Frases Guardadas Usuario",T=t(6),I=t.n(T),S=function(e){return{type:x,payload:e}},_=function(){return{type:O}},D=function(){return function(e){localStorage.clear(),e(E()),e(P())}},E=function(){return{type:v}},P=function(){return{type:y}},F=function(e){return{type:g,payload:e}},M=function(e){return function(){var a=Object(d.a)(u.a.mark((function a(t,s){var n,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}},a.next=3,p.a.post("".concat("https://frases-app-dan.herokuapp.com/api","/auth/renew-change-name"),{uid:s().auth.uid,name:e,email:s().auth.email},n);case 3:(c=a.sent).data.ok&&localStorage.setItem("token",c.data.newToken);case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},A=function(){return function(){var e=Object(d.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://frases-app-dan.herokuapp.com/api","/phrases/get"),{headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:(t=e.sent).data.ok&&a(z(t.data.msg.reverse()));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},z=function(e){return{type:N,payload:e}},U=function(e){return{type:k,payload:e}},H=function(){return function(){var e=Object(d.a)(u.a.mark((function e(a,t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://frases-app-dan.herokuapp.com/api","/user/").concat(t().auth.uid),{headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:(s=e.sent).data.ok&&a(B(s.data.frases.reverse()));case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},B=function(e){return{type:w,payload:e}},G=function(e){return function(){var a=Object(d.a)(u.a.mark((function a(t){var s,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}},a.next=3,p.a.put("".concat("https://frases-app-dan.herokuapp.com/api","/user/put-phrase"),{phraseId:e},s);case 3:(n=a.sent).data.ok&&(I.a.fire(n.data.msg),t(R()));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},R=function(){return function(){var e=Object(d.a)(u.a.mark((function e(a,t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://frases-app-dan.herokuapp.com/api","/user/get-saved-phrases/").concat(t().auth.uid),{headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:(s=e.sent).data.ok&&a(Y(s.data.savedPhrases.reverse()));case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},Y=function(e){return{type:C,payload:e}},L=t(86),V=function(){return{type:b}},J=function(){return{type:f}},X=t(0),$=function(){var e=Object(r.b)();return Object(X.jsxs)(L.a.button,{className:"add-btn",onClick:function(){e({type:h})},whileTap:{scale:1.2},whileHover:{scale:1.1},children:[Object(X.jsx)("i",{className:"fas fa-pen-alt"}),"Nueva frase"]})},q=t(44),K=t.n(q),Q=t(31),W=t.n(Q),Z=(t(77),function(e){var a=e.phrase,t=e.date,n=e.username,c=e.userId,o=e.phraseId,l=Object(r.b)(),j=Object(r.c)((function(e){return e.auth})).uid;Object(s.useEffect)((function(){l(A()),W.a.init(),W.a.refresh()}),[l]);var h=Object(s.useRef)("");Object(s.useEffect)((function(){void 0===n&&p.a.get("".concat("https://frases-app-dan.herokuapp.com/api","/user/name/").concat(c),{headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}}).then((function(e){return h.current=e.data.name})).catch((function(e){return console.log(e)}))}),[n,c]);var b=K()(t).format("DD/MM/YYYY"),f="/user/".concat(c);return""===h?Object(X.jsx)("div",{className:"flexible",children:Object(X.jsxs)("div",{className:"sk-chase",children:[Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"})]})}):Object(X.jsx)(X.Fragment,{children:Object(X.jsx)("div",{className:"card-wrapper",children:Object(X.jsx)("article",{children:Object(X.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(X.jsxs)("div",{className:"card-header",children:[void 0!==n?Object(X.jsx)(i.b,{className:"to",to:f,children:Object(X.jsxs)("span",{children:[Object(X.jsx)("i",{className:"fas fa-user-circle"})," @",n," ",c===j?"(T\xfa)":""," "]})}):Object(X.jsx)(i.b,{className:"to",to:f,children:Object(X.jsxs)("span",{children:[Object(X.jsx)("i",{className:"far fa-id-card"})," Ver creador"]})}),Object(X.jsx)("p",{children:b})]}),Object(X.jsxs)("div",{className:"card-body",children:['"',a,'"']}),Object(X.jsxs)("div",{className:"card-footer",children:[c===j&&Object(X.jsx)(L.a.button,{className:"card-btn",whileTap:{scale:1.2},whileHover:{scale:1.2},onClick:function(){l(function(e){return function(){var a=Object(d.a)(u.a.mark((function a(t,s){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:I.a.fire({title:"\xbfDeseas eliminar esta frase?",text:"Si lo haces no podr\xe1s recuperarla",icon:"warning",showCancelButton:!0,cancelButtonText:"No, cancelar",confirmButtonText:"Si, eliminar"}).then((function(a){a.isConfirmed&&p.a.delete("".concat("https://frases-app-dan.herokuapp.com/api","/phrases/delete/").concat(e),{headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}}).then((function(a){a.data.ok&&(t(U(e)),I.a.fire("Frase eliminada \ud83d\uddd1"))}))}));case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}(o))},children:Object(X.jsx)("i",{className:"fas fa-trash-alt"})}),c===j&&Object(X.jsx)(L.a.button,{className:"card-btn",whileTap:{scale:1.2},whileHover:{scale:1.2},onClick:function(){l({type:m,payload:{phrase:a,date:t,username:n,userId:c,phraseId:o}})},children:Object(X.jsx)("i",{className:"fas fa-edit"})}),Object(X.jsx)(L.a.button,{className:"card-btn",whileTap:{scale:1.2},whileHover:{scale:1.2},onClick:function(){navigator.clipboard.writeText(a),I.a.fire("Frase copiada \ud83d\udc7b")},children:Object(X.jsx)("i",{className:"fas fa-copy"})}),c!==j&&Object(X.jsx)(L.a.button,{className:"card-btn",whileTap:{scale:1.2},whileHover:{scale:1.2},onClick:function(){l(function(e){return function(){var a=Object(d.a)(u.a.mark((function a(t){var s,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}},a.next=3,p.a.put("".concat("https://frases-app-dan.herokuapp.com/api","/user/put-new-phrase"),{phraseId:e},s);case 3:(n=a.sent).data.ok?(I.a.fire(n.data.msg),t(R())):t(G(e));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(o))},children:Object(X.jsx)("i",{className:"fas fa-bookmark"})})]})]})})})})}),ee=t(7),ae=t(26),te=t(24),se=t(3),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(s.useState)(e),t=Object(ee.a)(a,2),n=t[0],c=t[1],r=function(){c(e)},i=function(e){var a=e.target;c(Object(se.a)(Object(se.a)({},n),{},Object(te.a)({},a.name,a.value)))};return[n,i,r]},ce=function(){var e=Object(r.b)(),a=ne({phrase:""}),t=Object(ee.a)(a,2),n=t[0],c=t[1],i=n.phrase,o=Object(s.useState)(0),l=Object(ee.a)(o,2),j=l[0],h=l[1],b=Object(s.useState)(!0),m=Object(ee.a)(b,2),f=m[0],O=m[1];return Object(s.useEffect)((function(){h(i.length),i.length>=0&&i.length<=15?O(!0):O(!1),i.length>150&&O(!0)}),[i]),Object(X.jsx)(X.Fragment,{children:Object(X.jsx)("div",{className:"modal",children:Object(X.jsxs)("div",{className:"modal-content animate__animated animate__fadeIn",children:[Object(X.jsx)(L.a.button,{className:"modal-close",onClick:function(){e(V())},whileTap:{scale:1.2},whileHover:{scale:1.2},children:Object(X.jsx)(ae.a,{})}),Object(X.jsx)("h2",{children:"Nueva frase"}),Object(X.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e(function(e){return function(){var a=Object(d.a)(u.a.mark((function a(t){var s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}},a.next=3,p.a.post("".concat("https://frases-app-dan.herokuapp.com/api","/phrases/create"),{phrase:e,date:(new Date).getTime()},s);case 3:a.sent.data.ok&&(t(A()),I.a.fire("Frase creada \u2714"));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(i)),e(V())},children:[Object(X.jsx)("textarea",{name:"phrase",className:"phrase",placeholder:"Escribe tu frase",onChange:c,value:i}),Object(X.jsxs)("span",{className:"chars",children:[j," / 150"]}),Object(X.jsx)(L.a.button,{className:"submit",type:"submit",disabled:f,whileTap:{scale:1.1},children:"Publicar"})]})]})})})};function re(){return c.a.createPortal(Object(X.jsx)(ce,{}),document.getElementById("modal-root"))}var ie=function(){var e=Object(r.b)(),a=Object(r.c)((function(e){return e.ui})).selectedToUpdate,t=ne({phraseToUpdate:a.phrase}),n=Object(ee.a)(t,2),c=n[0],i=n[1],o=c.phraseToUpdate,l=Object(s.useState)(0),j=Object(ee.a)(l,2),h=j[0],b=j[1],m=Object(s.useState)(!0),f=Object(ee.a)(m,2),O=f[0],x=f[1];return Object(s.useEffect)((function(){b(o.length),o.length>=0&&o.length<=5?x(!0):x(!1),o.length>150&&x(!0)}),[o]),Object(X.jsx)(X.Fragment,{children:Object(X.jsx)("div",{className:"modal",children:Object(X.jsxs)("div",{className:"modal-content animate__animated animate__fadeIn",children:[Object(X.jsx)(L.a.button,{className:"modal-close",onClick:function(){e(J())},whileTap:{scale:1.2},whileHover:{scale:1.2},children:Object(X.jsx)(ae.a,{})}),Object(X.jsx)("h2",{children:"Actualizar frase"}),Object(X.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e(function(e){return function(){var a=Object(d.a)(u.a.mark((function a(t,s){var n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}},a.next=3,p.a.put("".concat("https://frases-app-dan.herokuapp.com/api","/phrases/put/").concat(s().ui.selectedToUpdate.phraseId),{phrase:e,date:(new Date).getTime()},n);case 3:a.sent.data.ok&&(I.a.fire("Frase actualizada","","success"),t(A()),t(H()));case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}(o)),e(J())},children:[Object(X.jsx)("textarea",{name:"phraseToUpdate",className:"phrase",placeholder:"Escribe tu frase",onChange:i,value:o}),Object(X.jsxs)("span",{className:"chars",children:[h," / 150"]}),Object(X.jsx)(L.a.button,{className:"submit",type:"submit",disabled:O,whileTap:{scale:1.1},children:"Guardar"})]})]})})})};function oe(){return c.a.createPortal(Object(X.jsx)(ie,{}),document.getElementById("modal-root"))}var le=function(){var e=Object(r.b)(),a=Object(r.c)((function(e){return e.auth})).name,t=Object(s.useState)(!1),n=Object(ee.a)(t,2),c=n[0],l=n[1],u=function(){return l(!1)},d=Object(o.g)().pathname,j=function(){e(D())};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)("nav",{className:"navbar",children:[Object(X.jsx)(L.a.div,{className:"logo-header",whileTap:{scale:1.1},children:Object(X.jsxs)(i.b,{to:"/",className:"navbar-logo",onClick:u,children:[Object(X.jsx)("i",{className:"fas fa-user-astronaut"}),"Daniel D\xedaz"]})}),Object(X.jsx)(L.a.div,{className:"menu-icon",onClick:function(){return l(!c)},whileTap:{scale:1.2},children:c?Object(X.jsx)("i",{className:"fas fa-times"}):Object(X.jsx)("i",{className:"fas fa-bars"})}),Object(X.jsxs)("ul",{className:c?"nav-menu active-link":"nav-menu",children:[Object(X.jsx)(L.a.li,{className:"nav-item",whileTap:{scale:1.1},children:Object(X.jsx)(i.b,{to:"/",className:"/"===d?"nav-links active-link":"nav-links",onClick:u,children:"Inicio"})}),Object(X.jsx)(L.a.li,{className:"nav-item",whileTap:{scale:1.1},children:Object(X.jsxs)(i.b,{to:"/my-account",className:"/my-account"===d?"nav-links user active-link":"nav-links user",onClick:u,children:[Object(X.jsx)("i",{className:"fas fa-user-circle logo-icon"}),a]})}),Object(X.jsx)(L.a.li,{className:"nav-item",whileTap:{scale:1.1},children:Object(X.jsx)("button",{className:"nav-button",onClick:j,children:Object(X.jsx)("i",{className:"fas fa-sign-out-alt"})})})]})]}),Object(X.jsxs)("div",{className:c?"responsive-menu show":"responsive-menu",children:[Object(X.jsx)("div",{className:"menu-head",children:Object(X.jsxs)("div",{className:"logo",children:[Object(X.jsx)("i",{className:"fas fa-user-circle logo-icon"}),Object(X.jsxs)("span",{children:[" ",a]})]})}),Object(X.jsx)("div",{className:"menu-body",children:Object(X.jsxs)("ul",{children:[Object(X.jsx)(L.a.li,{className:"nav-items-responsive",whileTap:{scale:1.3},children:Object(X.jsx)(i.b,{to:"/",className:"nav-links-responsive",onClick:u,children:"Inicio"})}),Object(X.jsx)(L.a.li,{className:"nav-items-responsive",whileTap:{scale:1.3},children:Object(X.jsx)(i.b,{to:"/my-account",className:"nav-links-responsive",onClick:u,children:"Mi cuenta"})}),Object(X.jsx)(L.a.li,{className:"nav-items-responsive",whileTap:{scale:1.4},children:Object(X.jsx)("button",{className:"nav-button-responsive",onClick:j,children:"Cerrar Sesi\xf3n"})}),Object(X.jsx)(L.a.li,{className:"nav-items-responsive",whileTap:{scale:1.4},children:Object(X.jsx)("p",{className:"love",children:"Made with \u2764\ufe0f by Daniel D\xedaz"})})]})})]})]})},ue=function(){var e=Object(r.b)(),a=Object(r.c)((function(e){return e.phrases})).phrases,t=Object(r.c)((function(e){return e.ui})),n=t.modal,c=t.updateModal;return Object(s.useEffect)((function(){e(A())}),[e]),Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(le,{}),c&&Object(X.jsx)(oe,{}),n&&Object(X.jsx)(re,{}),Object(X.jsx)($,{}),Object(X.jsxs)("main",{className:"main",children:[Object(X.jsx)("div",{className:"home-header",children:Object(X.jsxs)("span",{children:[Object(X.jsx)("i",{className:"fas fa-chevron-circle-down"})," \xdaltimo contenido"]})}),a.map((function(e){return Object(X.jsx)(Z,{phrase:e.phrase,date:e.date,username:e.user.name,userId:e.user._id,phraseId:e._id},e._id)}))]})]})},de=function(){var e=Object(r.b)(),a=Object(r.c)((function(e){return e.auth})).uid,t=Object(r.c)((function(e){return e.phrases})).userPhrases,n=Object(r.c)((function(e){return e.ui})).updateModal;return Object(s.useEffect)((function(){e(H())}),[e,a]),Object(X.jsxs)(X.Fragment,{children:[n&&Object(X.jsx)(oe,{}),Object(X.jsxs)("div",{className:"main-phrases",children:[Object(X.jsx)("div",{className:"phrases-header",children:Object(X.jsxs)("span",{children:[Object(X.jsx)("i",{className:"fas fa-chevron-circle-down"})," Tus creaciones"]})}),t.map((function(e){return Object(X.jsx)(Z,{phrase:e.phrase,date:e.date,username:e.user.name,userId:e.user._id,phraseId:e._id},e._id)}))]})]})},je=function(){var e=Object(r.c)((function(e){return e.auth})),a=e.name,t=e.email,n=Object(r.b)(),c=ne({newName:"",newPassword:""}),i=Object(ee.a)(c,3),o=i[0],l=i[1],j=i[2],h=Object(s.useState)(!1),b=Object(ee.a)(h,2),m=b[0],f=b[1],O=Object(s.useState)(!1),x=Object(ee.a)(O,2),v=x[0],g=x[1],N=o.newName,k=o.newPassword;return Object(X.jsxs)("div",{className:"main-content-profile",children:[Object(X.jsxs)("h2",{className:"profile-title",children:[Object(X.jsx)("i",{className:"fas fa-cog"})," Configuraci\xf3n de perfil"]}),Object(X.jsx)("div",{className:"profile-flex",children:Object(X.jsxs)("div",{className:"profile-box",children:[Object(X.jsx)("p",{children:Object(X.jsx)("strong",{children:"Nombre:"})}),Object(X.jsxs)("p",{className:"profile-info",children:[" @",a," "]}),Object(X.jsx)("p",{children:Object(X.jsx)("strong",{children:"Correo electr\xf3nico:"})}),Object(X.jsxs)("p",{className:"profile-info",children:[" ",t," "]}),Object(X.jsxs)(L.a.button,{className:"profile-btn-modal",whileTap:{scale:1.1},onClick:function(){f(!m),g(!1)},children:["Actualizar nombre ",m?Object(X.jsx)("i",{className:"fas fa-chevron-circle-up"}):Object(X.jsx)("i",{className:"fas fa-chevron-circle-down"})]}),m&&Object(X.jsxs)("form",{className:"profile-form",onSubmit:function(e){e.preventDefault(),N.length<=3?(I.a.fire("Ingresa algo... m\xednimo 3 car\xe1cteres"),j()):N.toLowerCase()===a.toLowerCase()?(I.a.fire("No puedes actualizar tu mismo nombre :P"),j()):n(function(e){return function(){var a=Object(d.a)(u.a.mark((function a(t,s){var n,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}},a.next=3,p.a.put("".concat("https://frases-app-dan.herokuapp.com/api","/user/change-name/").concat(s().auth.uid),{name:e},n);case 3:(c=a.sent).data.ok&&(t(F(c.data.msg.name)),I.a.fire("Tu nombre ha sido cambiado","","success"),t(M(c.data.msg.name)));case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}(N))},children:[Object(X.jsx)("input",{type:"text",className:"profile-input",placeholder:"Nuevo nombre",name:"newName",onChange:l,value:N,autoComplete:"off"}),Object(X.jsx)("button",{type:"submit",className:"profile-submit",children:"Guardar"})]}),Object(X.jsxs)(L.a.button,{className:"profile-btn-modal",whileTap:{scale:1.1},onClick:function(){g(!v),f(!1)},children:["Actualizar contrase\xf1a ",v?Object(X.jsx)("i",{className:"fas fa-chevron-circle-up"}):Object(X.jsx)("i",{className:"fas fa-chevron-circle-down"})]}),v&&Object(X.jsxs)("form",{className:"profile-form",onSubmit:function(e){var a;e.preventDefault(),k.length<8?(I.a.fire("La contrase\xf1a debe ser de m\xednimo 8 car\xe1cteres"),j()):0===k.length?(I.a.fire("Debes ingresar algo..."),j()):""===k?(I.a.fire("Ingresa algo... m\xednimo 8 car\xe1cteres"),j()):n((a=k,function(){var e=Object(d.a)(u.a.mark((function e(t,s){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}},e.next=3,p.a.put("".concat("https://frases-app-dan.herokuapp.com/api","/user/change-password/").concat(s().auth.uid),{password:a},n);case 3:(c=e.sent).data.ok&&(I.a.fire(c.data.msg,"Vuelve a iniciar sesi\xf3n","success"),t(D()));case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("input",{type:"password",className:"profile-input",placeholder:"Nueva contrase\xf1a",name:"newPassword",onChange:l,value:k}),Object(X.jsx)("button",{type:"submit",className:"profile-submit",children:"Guardar"})]})]})})]})},pe=function(){var e=Object(s.useState)(!0),a=Object(ee.a)(e,2),t=a[0],n=a[1],c=Object(r.c)((function(e){return e.phrases})).userSavedPhrases,i=Object(r.b)();return Object(s.useEffect)((function(){i(R()),n(!1)}),[i]),t?Object(X.jsx)("div",{className:"flexible",children:Object(X.jsxs)("div",{className:"sk-chase",children:[Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"})]})}):Object(X.jsxs)("div",{className:"main-phrases",children:[Object(X.jsx)("div",{className:"phrases-header",children:Object(X.jsxs)("span",{children:[Object(X.jsx)("i",{className:"fas fa-chevron-circle-down"})," Tus guardadas"]})}),c.map((function(e){return Object(X.jsx)(Z,{phrase:e.phrase,date:e.date,userId:e.user,phraseId:e._id},e._id)}))]})},he=function(){var e=Object(s.useState)("perfil"),a=Object(ee.a)(e,2),t=a[0],n=a[1];return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(le,{}),Object(X.jsxs)("main",{className:"main-account",children:[Object(X.jsxs)("div",{className:"nav-buttons",children:[Object(X.jsxs)("button",{className:"perfil"===t?"nav-btn selected":"nav-btn",onClick:function(){return n("perfil")},children:[Object(X.jsx)("i",{className:"fas fa-cog"})," ",Object(X.jsx)("span",{children:"Perfil"})]}),Object(X.jsxs)("button",{className:"frases"===t?"nav-btn selected":"nav-btn",onClick:function(){return n("frases")},children:[Object(X.jsx)("i",{className:"fas fa-user-edit"}),"  ",Object(X.jsx)("span",{children:"Frases creadas"})]}),Object(X.jsxs)("button",{className:"guardadas"===t?"nav-btn selected":"nav-btn",onClick:function(){return n("guardadas")},children:[Object(X.jsx)("i",{className:"fas fa-bookmark"})," ",Object(X.jsx)("span",{children:"Guardadas"})]})]}),Object(X.jsxs)("div",{className:"main-content",children:["perfil"===t&&Object(X.jsx)(je,{}),"frases"===t&&Object(X.jsx)(de,{}),"guardadas"===t&&Object(X.jsx)(pe,{})]})]})]})},be=function(){return Object(X.jsx)("footer",{children:Object(X.jsxs)("div",{className:"footer",children:[Object(X.jsxs)("a",{href:"https://github.com/danield413",children:[Object(X.jsx)("i",{className:"fab fa-github"})," Mi Github"]}),Object(X.jsxs)("p",{children:[Object(X.jsx)("strong",{children:"Daniel D\xedaz Castro"})," ",(new Date).getFullYear(),"\xa9"]})]})})},me=function(){var e=Object(o.h)().id,a=Object(r.c)((function(e){return e.phrases})).userPhrases,t=Object(s.useState)({name:"",phrases:[]}),n=Object(ee.a)(t,2),c=n[0],i=n[1],l=c.name,u=c.phrases;return Object(s.useEffect)((function(){p.a.get("".concat("https://frases-app-dan.herokuapp.com/api","/user/data/").concat(e),{headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}}).then((function(e){return i({name:e.data.name,phrases:e.data.phrases.reverse()})}))}),[e,a]),console.log(u),""===l&&0===u.length?Object(X.jsx)("div",{className:"flexible",children:Object(X.jsxs)("div",{className:"sk-chase",children:[Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"})]})}):Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(le,{}),Object(X.jsxs)("main",{className:"main-user",children:[Object(X.jsx)("div",{className:"main-header",children:Object(X.jsx)("div",{children:Object(X.jsx)("img",{src:"https://www.personality-database.com/profile_images/3033.png?id=161577",alt:"usuario"})})}),Object(X.jsx)("h2",{className:"main-title",children:l}),Object(X.jsxs)("h2",{className:"main-title sub",children:["Frases Creadas: ",u.length]}),Object(X.jsx)("div",{className:"main",children:u.map((function(e){return Object(X.jsx)(Z,{phraseId:e._id,phrase:e.phrase,username:e.user.name,userId:e.user._id,date:e.date},e._id)}))})]})]})},fe=function(){var e=Object(r.b)(),a=ne({email:"",password:""}),t=Object(ee.a)(a,2),s=t[0],n=t[1],c=s.email,o=s.password;return Object(X.jsx)(X.Fragment,{children:Object(X.jsx)("header",{className:"header-login",children:Object(X.jsxs)("div",{className:"form-box-login animate__animated animate__fadeIn",children:[Object(X.jsxs)("form",{onSubmit:function(a){a.preventDefault();/^(([^<>()[\].,;:\s@\u201d]+(\.[^<>()[\].,;:\s@\u201d]+)*)|(\u201d.+\u201d))@(([^<>()[\].,;:\s@\u201d]+\.)+[^<>()[\].,;:\s@\u201d]{2,})$/.test(c)&&o.length>=8?e(function(e,a){return function(){var t=Object(d.a)(u.a.mark((function t(s){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("".concat("https://frases-app-dan.herokuapp.com/api","/auth/"),{email:e,password:a});case 2:(n=t.sent).data.ok?(localStorage.setItem("token",n.data.token),localStorage.setItem("token-init-date",(new Date).getTime()),I.a.fire("\xa1Es un gusto tenerte aqu\xed de nuevo! \ud83d\udc7b"),s(S({uid:n.data.uid,name:n.data.name,email:n.data.email}))):I.a.fire("Error","Datos incorrectos","error");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c,o)):""===c||""===o?I.a.fire("Hay algo vac\xedo :P"):I.a.fire("Ingresa un correo y contrase\xf1a v\xe1lidos :P")},children:[Object(X.jsx)("h1",{children:"Iniciar Sesi\xf3n"}),Object(X.jsx)("input",{className:"input-login",type:"email",name:"email",placeholder:"Correo Electr\xf3nico",autoComplete:"off",value:c,onChange:n}),Object(X.jsx)("input",{className:"input-login",type:"password",name:"password",placeholder:"Contrase\xf1a",value:o,onChange:n}),Object(X.jsx)(L.a.button,{className:"input-submit",type:"submit",whileTap:{scale:1.3},children:"Ingresar"})]}),Object(X.jsx)(i.b,{className:"form-link",to:"/auth/register",children:"O crear una nueva cuenta"}),Object(X.jsx)("p",{className:"love",children:"Made with \u2764\ufe0f by Daniel D\xedaz"})]})})})},Oe=function(){var e=Object(r.b)(),a=ne({name:"",email:"",password1:"",password2:""}),t=Object(ee.a)(a,2),s=t[0],n=t[1],c=s.name,o=s.email,l=s.password1,j=s.password2;return Object(X.jsx)(X.Fragment,{children:Object(X.jsx)("header",{className:"header-login",children:Object(X.jsxs)("div",{className:"form-box-login register animate__animated animate__fadeIn",children:[Object(X.jsxs)("form",{onSubmit:function(a){a.preventDefault();""===o||""===l||""===j||""===c?I.a.fire("Hay algo vac\xedo :P"):-1!==c.indexOf(" ")?I.a.fire("No se permiten espacios en el nombre de usuario"):/^(([^<>()[\].,;:\s@\u201d]+(\.[^<>()[\].,;:\s@\u201d]+)*)|(\u201d.+\u201d))@(([^<>()[\].,;:\s@\u201d]+\.)+[^<>()[\].,;:\s@\u201d]{2,})$/.test(o)&&l.length>=8&&j.length>=8&&l===j&&e(function(e,a,t){return function(){var s=Object(d.a)(u.a.mark((function s(n){var c;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,p.a.post("".concat("https://frases-app-dan.herokuapp.com/api","/auth/new-user"),{name:e,email:a,password:t});case 2:(c=s.sent).data.ok?(localStorage.setItem("token",c.data.token),localStorage.setItem("token-init-date",(new Date).getTime()),I.a.fire("\xa1Hola!","Bienvenid@ a la comunidad","success"),n(S({uid:c.data.uid,name:c.data.name,email:c.data.email}))):I.a.fire("Error",c.data.msg,"error");case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}(c,o,l))},children:[Object(X.jsx)("h1",{children:"Registrarse"}),Object(X.jsx)("input",{className:"input-login",type:"text",name:"name",placeholder:"Nombre",autoComplete:"off",value:c,onChange:n}),Object(X.jsx)("input",{className:"input-login",type:"email",name:"email",placeholder:"Correo Electr\xf3nico",autoComplete:"off",value:o,onChange:n}),Object(X.jsx)("input",{className:"input-login",type:"password",name:"password1",placeholder:"Contrase\xf1a",value:l,onChange:n}),Object(X.jsx)("input",{className:"input-login",type:"password",name:"password2",placeholder:"Repetir contrase\xf1a",value:j,onChange:n}),Object(X.jsx)(L.a.button,{className:"input-submit",type:"submit",whileTap:{scale:1.3},children:"Ingresar"})]}),Object(X.jsx)(i.b,{className:"form-link",to:"/auth/login",children:"O crear una nueva cuenta"}),Object(X.jsx)("p",{className:"love",children:"Made with \u2764\ufe0f by Daniel"})]})})})},xe=function(){return Object(X.jsx)(i.a,{children:Object(X.jsxs)(o.d,{children:[Object(X.jsx)(o.b,{path:"/auth/login",component:fe}),Object(X.jsx)(o.b,{path:"/auth/register",component:Oe}),Object(X.jsx)(o.a,{to:"/auth/login"})]})})},ve=t(25),ge=function(e){var a=e.isAuthenticated,t=e.component,s=Object(ve.a)(e,["isAuthenticated","component"]);return Object(X.jsx)(o.b,Object(se.a)(Object(se.a)({},s),{},{component:function(e){return a?Object(X.jsx)(t,Object(se.a)({},e)):Object(X.jsx)(o.a,{to:"/login"})}}))},Ne=function(e){var a=e.isAuthenticated,t=e.component,s=Object(ve.a)(e,["isAuthenticated","component"]);return Object(X.jsx)(o.b,Object(se.a)(Object(se.a)({},s),{},{component:function(e){return a?Object(X.jsx)(o.a,{to:"/"}):Object(X.jsx)(t,Object(se.a)({},e))}}))},ke=function(){var e=Object(r.b)(),a=Object(r.c)((function(e){return e.auth})),t=a.checking,n=a.uid;return Object(s.useEffect)((function(){e(function(){var e=Object(d.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://frases-app-dan.herokuapp.com/api","/auth/renew"),{headers:{"x-token":localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:(t=e.sent).data.ok?(localStorage.setItem("token",t.data.token),localStorage.setItem("token-init-date",(new Date).getTime()),a(S({uid:t.data.uid,name:t.data.name,email:t.data.email}))):a(_());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[e]),t?Object(X.jsx)("div",{className:"flexible",children:Object(X.jsxs)("div",{className:"sk-chase",children:[Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"}),Object(X.jsx)("div",{className:"sk-chase-dot"})]})}):Object(X.jsxs)(i.a,{children:[Object(X.jsxs)(o.d,{children:[Object(X.jsx)(Ne,{isAuthenticated:!!n,path:"/auth",component:xe}),Object(X.jsx)(ge,{isAuthenticated:!!n,exact:!0,path:"/",component:ue}),Object(X.jsx)(ge,{isAuthenticated:!!n,exact:!0,path:"/my-account",component:he}),Object(X.jsx)(ge,{isAuthenticated:!!n,exact:!0,path:"/user/:id",component:me}),Object(X.jsx)(o.a,{to:"/auth/login"})]}),Object(X.jsx)(be,{})]})},we=(t(81),t(82),t(83),t(21)),ye=t(45),Ce={checking:!0},Te={phrases:[],userPhrases:[],userSavedPhrases:[]},Ie={modal:!1,updateModal:!1,selectedToUpdate:{phrase:"",date:(new Date).getTime(),username:"",userId:"",phraseId:""}},Se="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,_e=Object(we.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(se.a)(Object(se.a)({},e),{},{modal:!0});case b:return Object(se.a)(Object(se.a)({},e),{},{modal:!1});case m:return Object(se.a)(Object(se.a)({},e),{},{updateModal:!0,selectedToUpdate:a.payload});case f:return Object(se.a)(Object(se.a)({},e),{},{updateModal:!1,selectedToUpdate:{}});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case x:return Object(se.a)(Object(se.a)({},e),{},{checking:!1},a.payload);case O:return Object(se.a)(Object(se.a)({},e),{},{checking:!1});case v:return{checking:!1};case g:return Object(se.a)(Object(se.a)({},e),{},{name:a.payload});default:return e}},phrases:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return Object(se.a)(Object(se.a)({},e),{},{phrases:a.payload});case k:return Object(se.a)(Object(se.a)({},e),{},{phrases:e.phrases.filter((function(e){return e._id!==a.payload})),userPhrases:e.userPhrases.filter((function(e){return e._id!==a.payload}))});case w:return Object(se.a)(Object(se.a)({},e),{},{userPhrases:a.payload});case C:return Object(se.a)(Object(se.a)({},e),{},{userSavedPhrases:a.payload});case y:return{phrases:[],userPhrases:[],userSavedPhrases:[]};default:return e}}}),De=Object(we.e)(_e,Se(Object(we.a)(ye.a))),Ee=function(){return Object(X.jsx)(r.a,{store:De,children:Object(X.jsx)(ke,{})})};c.a.render(Object(X.jsx)(Ee,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.cbd1e409.chunk.js.map