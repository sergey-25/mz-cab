(this.webpackJsonpcomplete_mui_system=this.webpackJsonpcomplete_mui_system||[]).push([[0],{125:function(e,t,a){e.exports=a(138)},130:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=(a(130),a(11)),c=(a(92),a(17)),u=a(100),s=a.n(u),m=a(185),d=a(186),p=a(139),f=a(99),b=a.n(f),g=a(187),v=a(101),h=a.n(v),E=a(96),x=a.n(E),O=a(98),y=a.n(O),C=[{text:"\u0412\u0441\u0456 \u0437\u0430\u044f\u0432\u043a\u0438",path:"/all-statements",exact:!0,icon:r.a.createElement(x.a,null)},{text:"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456",path:"/personal-data",exact:!0,icon:r.a.createElement(y.a,null)}],j=[{text:"\u0412\u0438\u0439\u0442\u0438 \u0437 \u043a\u0430\u0431\u0456\u043d\u0435\u0442\u0443",path:"/",exact:!0}],N=Object(m.a)({icon:{marginRight:"10px"},btnMenu:{position:"fixed",width:"45px",height:"45px",paddingTop:"12px",paddingLeft:"9px"},btnClose:{paddingTop:"17px",width:"45px",height:"45px"},btnHover:{"&:hover":{color:"red",background:"#fff",border:"2px solid red",borderRadius:"4px"}},some:{background:"red"},active:{background:"#fff",color:"#3f51b5 ",border:"1px solid #3f51b5",borderRadius:"4px"},btn:{color:"balack","&:hover":{backgroundColor:"#fff"}},activeBtnExit:{background:"#fff",color:"red",border:"1px solid red",borderRadius:"4px","&:hover":{backgroundColor:"#fff",border:"1px solid red"}}}),I=Object(c.g)((function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),l=a[0],o=a[1],u=e.history,m=Object(c.f)();Object(n.useEffect)((function(){l&&f(),e.onCollapse(l)}),[l]);var f=function(){document.querySelectorAll(".sub-menu").forEach((function(e){e.classList.remove("active")}))};Object(n.useEffect)((function(){var e=document.querySelectorAll(".menu-item");e.forEach((function(t){t.addEventListener("click",(function(a){var n=t.nextElementSibling;f(),e.forEach((function(e){return e.classList.remove("active")})),t.classList.toggle("active"),null!==n&&n.classList.toggle("active")}))}))}),[]);var v=N();return r.a.createElement("div",{className:"side-menu ".concat(l?"inactive":"")},r.a.createElement("div",{className:"top-section"},r.a.createElement("div",{onClick:function(){return o(!l)},className:"toggle-menu-btn"},l?r.a.createElement(b.a,{className:v.btnMenu}):r.a.createElement(s.a,{className:v.btnClose}))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"main-menu"},r.a.createElement(d.a,null,C.map((function(e,t){var a=e.text;e.onClick;return r.a.createElement(p.a,{button:!0,key:a,onClick:function(){return u.push(e.path)},className:m.pathname==e.path?v.active:v.btn},r.a.createElement("div",{className:v.icon},e.icon),r.a.createElement(g.a,{primary:a}))}))),r.a.createElement(d.a,null,j.map((function(e,t){var a=e.text;e.onClick;return r.a.createElement(p.a,{button:!0,key:a,onClick:function(){return u.push(e.path)},className:m.pathname==e.path?v.activeBtnExit:v.btn},r.a.createElement(h.a,{className:v.icon}),r.a.createElement(g.a,{primary:a}))})))))})),k=a(68),T=a(16),S=a(9),P=a(199),w=a(2),B=a(188);var A=a(142),D=a(144),M=a(215),z=a(190),R=a(210);var L=a(143),F=a(148),W=a(192),H=a(146);var J=a(22),_=a(208),V=a(104),$=a(209);var q=a(195),G=Object(m.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var X=Object(m.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}}));var K=a(198),Q=a(64),U=a.n(Q),Y=Object(m.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var Z={Input:function(e){var t=e.name,a=e.label,n=e.value,l=e.error,o=void 0===l?null:l,i=e.onChange,c=Object(w.a)(e,["name","label","value","error","onChange"]);return r.a.createElement(B.a,Object.assign({variant:"outlined",label:a,name:t,value:n,onChange:i},c,o&&{error:!0,helperText:o}))},RadioGroup:function(e){var t=e.name,a=e.label,n=e.value,l=e.onChange,o=e.items;return r.a.createElement(A.a,null,r.a.createElement(D.a,null,a),r.a.createElement(M.a,{row:!0,name:t,value:n,onChange:l},o.map((function(e){return r.a.createElement(z.a,{key:e.id,value:e.id,control:r.a.createElement(R.a,null),label:e.title})}))))},Select:function(e){var t=e.name,a=e.label,n=e.value,l=e.error,o=void 0===l?null:l,i=e.onChange,c=e.options;return r.a.createElement(A.a,Object.assign({variant:"outlined"},o&&{error:!0}),r.a.createElement(L.a,null,a),r.a.createElement(F.a,{label:a,name:t,value:n,onChange:i},r.a.createElement(W.a,{value:""},"None"),c.map((function(e){return r.a.createElement(W.a,{key:e.id,value:e.id},e.title)}))),o&&r.a.createElement(H.a,null,o))},DatePicker:function(e){var t=e.name,a=e.label,n=e.value,l=e.onChange;return r.a.createElement(J.a,{utils:V.a,locale:$.a},r.a.createElement(_.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:a,format:"dd-MMMM-yyyy",name:t,value:n,onChange:function(e){return l(function(e,t){return{target:{name:e,value:t}}}(t,e))}}))},Button:function(e){var t=e.text,a=e.size,n=e.color,l=e.variant,o=e.onClick,i=Object(w.a)(e,["text","size","color","variant","onClick"]),c=G();return r.a.createElement(q.a,Object.assign({variant:l||"contained",size:a||"large",color:n||"primary",onClick:o},i,{classes:{root:c.root,label:c.label}}),t)},FabAdd:function(e){var t=e.text,a=e.size,n=e.color,l=e.variant,o=e.onClick,i=Object(w.a)(e,["text","size","color","variant","onClick"]),c=Y();return r.a.createElement(K.a,Object.assign({variant:l||"contained",size:a||"medium",color:n||"primary",onClick:o},i,{classes:{root:c.root,label:c.label}}),t," ",r.a.createElement(U.a,null))},ActionButton:function(e){var t=e.color,a=e.children,n=e.onClick,l=X();return r.a.createElement(q.a,{className:"".concat(l.root," ").concat(l[t]),onClick:n},a)}};var ee=Object(m.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}}));function te(e){var t=ee(),a=(e.children,Object(w.a)(e,["children"]));return r.a.createElement("form",Object.assign({className:t.root,autoComplete:"off"},a),e.children)}var ae="employees",ne="employeeId";function re(e){var t=le();e.id=function(){null==localStorage.getItem(ne)&&localStorage.setItem(ne,"0");var e=parseInt(localStorage.getItem(ne));return localStorage.setItem(ne,(++e).toString()),e}(),t.push(e),localStorage.setItem(ae,JSON.stringify(t))}function le(){null==localStorage.getItem(ae)&&localStorage.setItem(ae,JSON.stringify([]));var e=JSON.parse(localStorage.getItem(ae)),t=[];return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{department:t[e.departmentId-1]})}))}var oe=Object(m.a)({modal:{top:"-13px"}}),ie={id:0,fullName:"",email:"",hireDate:new Date,isPermanent:!1,location:"",productionPlace:"",edrpou:"",idNumber:"",whenIssued:"",registrationNumber:"",initials:""};function ce(e){var t=e.addOrEdit,a=e.recordForEdit,l=(oe(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=Object(T.a)({},s);if("fullName"in e&&(t.fullName=e.fullName?"":"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c."),"location"in e&&(t.location=e.location?"":"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c."),"productionPlace"in e&&(t.productionPlace=e.productionPlace?"":"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c."),"edrpou"in e&&(t.edrpou=e.edrpou?"":"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c."),"idNumber"in e&&(t.idNumber=/^[0-9\b]+$/.test(e.idNumber)?"":"\u041c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043e \u0432 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u043c\u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0456."),"whenIssued"in e&&(t.whenIssued=e.whenIssued?"":"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c."),"registrationNumber"in e&&(t.registrationNumber=e.registrationNumber?"":"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c."),"initials"in e&&(t.initials=e.initials?"":"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c."),"email"in e&&(t.email=/$^|.+@.+..+/.test(e.email)?"":"\u041f\u043e\u043b\u0435 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043e \u043d\u0435\u0432\u0456\u0440\u043d\u043e."),m(Object(T.a)({},t)),e==c)return Object.values(t).every((function(e){return""==e}))}),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,r=Object(n.useState)(e),l=Object(i.a)(r,2),o=l[0],c=l[1],u=Object(n.useState)({}),s=Object(i.a)(u,2),m=s[0],d=s[1],p=function(e){var n=e.target,r=n.name,l=n.value;c(Object(T.a)(Object(T.a)({},o),{},Object(S.a)({},r,l))),t&&a(Object(S.a)({},r,l))},f=function(){c(e),d({})};return{values:o,setValues:c,errors:m,setErrors:d,handleInputChange:p,resetForm:f}}(ie,!0,l),c=o.values,u=o.setValues,s=o.errors,m=o.setErrors,d=o.handleInputChange,p=o.resetForm;return Object(n.useEffect)((function(){null!=a&&u(Object(T.a)({},a))}),[a]),r.a.createElement(te,{onSubmit:function(e){e.preventDefault(),l()&&t(c,p)}},r.a.createElement(P.a,{container:!0},r.a.createElement(P.a,{item:!0,xs:13},r.a.createElement(Z.Input,{name:"fullName",label:"\u0417\u0434\u043e\u0431\u0443\u0432\u0430\u0447 \u043b\u0456\u0446\u0435\u043d\u0437\u0456\u0457",value:c.fullName,onChange:d,error:s.fullName,type:"search",helperText:"(\u043d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u043e\u0457 \u043e\u0441\u043e\u0431\u0438/\u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0456\u043c\u2019\u044f,\r \u043f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456 \u0444\u0456\u0437\u0438\u0447\u043d\u043e\u0457 \u043e\u0441\u043e\u0431\u0438 - \u043f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0446\u044f)"}),r.a.createElement(Z.Input,{label:"",name:"location",value:c.location,onChange:d,error:s.location,type:"search",helperText:"(\u043c\u0456\u0441\u0446\u0435\u0437\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u043e\u0457 \u043e\u0441\u043e\u0431\u0438/\u043c\u0456\u0441\u0446\u0435 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0444\u0456\u0437\u0438\u0447\u043d\u043e\u0457 \u043e\u0441\u043e\u0431\u0438 - \u043f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0446\u044f)"}),r.a.createElement(Z.Input,{label:"",name:"productionPlace",value:c.productionPlace,onChange:d,error:s.productionPlace,type:"search",helperText:"(\u043c\u0456\u0441\u0446\u0435 (\u043c\u0456\u0441\u0446\u044f) \u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f \u043c\u0435\u0434\u0438\u0447\u043d\u043e\u0457 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438)*"}),r.a.createElement(Z.Input,{label:"",name:"edrpou",value:c.edrpou,onChange:d,error:s.edrpou,type:"search",helperText:"(\u0434\u043b\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431 - \u043a\u043e\u0434 \u0437\u0433\u0456\u0434\u043d\u043e \u0437 \u0404\u0414\u0420\u041f\u041e\u0423, \u0434\u043b\u044f \u0444\u0456\u0437\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431 - \u043f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0446\u0456\u0432 -"}),r.a.createElement(Z.Input,{name:"idNumber",label:"",value:c.idNumber,onChange:d,error:s.idNumber,format:"numeric",helperText:"\u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0439\u043d\u0438\u0439 \u043a\u043e\u0434 \u0430\u0431\u043e \u0441\u0435\u0440\u0456\u044f, \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430 \u0444\u0456\u0437\u0438\u0447\u043d\u043e\u0457 \u043e\u0441\u043e\u0431\u0438 - \u043f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0446\u044f,"}),r.a.createElement(Z.Input,{label:"",name:"whenIssued",value:c.whenIssued,onChange:d,error:s.whenIssued,type:"search",helperText:"\u043a\u0438\u043c \u0456 \u043a\u043e\u043b\u0438 \u0432\u0438\u0434\u0430\u043d\u0438\u0439 (\u0443 \u0440\u0430\u0437\u0456 \u0432\u0456\u0434\u043c\u043e\u0432\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043e\u0457 \u0440\u0435\u043b\u0456\u0433\u0456\u0439\u043d\u0456 \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0432\u0456\u0434 \u043f\u0440\u0438\u0439\u043d\u044f\u0442\u0442\u044f"}),r.a.createElement(Z.Input,{label:"",name:"registrationNumber",value:c.registrationNumber,onChange:d,error:s.registrationNumber,type:"search",helperText:"(\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0430 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0457 \u043a\u0430\u0440\u0442\u043a\u0438 \u043f\u043b\u0430\u0442\u043d\u0438\u043a\u0430 \u043f\u043e\u0434\u0430\u0442\u043a\u0456\u0432)"}),r.a.createElement(Z.Input,{label:"",name:"initials",value:c.initials,onChange:d,error:s.initials,type:"search",helperText:"(\u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u0456\u043c\u2019\u044f, \u043f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456 \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a\u0430 \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u043e\u0457 \u043e\u0441\u043e\u0431\u0438)"}),r.a.createElement(Z.Input,{label:"e-mail",name:"email",value:c.email,onChange:d,error:s.email,type:"search",helperText:""})),r.a.createElement(P.a,{item:!0,xs:6},r.a.createElement(Z.DatePicker,{name:"hireDate",label:"",value:c.hireDate,onChange:d}),r.a.createElement("div",null,r.a.createElement(Z.Button,{type:"submit",text:"\u041f\u043e\u0434\u0430\u0442\u0438"}),r.a.createElement(Z.Button,{text:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",color:"default",onClick:p})))))}var ue=a(106),se=(a(200),a(53));Object(m.a)((function(e){return{root:{backgroundColor:"#fdfdff"},pageHeader:{padding:e.spacing(4),display:"flex",marginBottom:e.spacing(2)},pageIcon:{display:"inline-block",padding:e.spacing(2),color:"#3c44b1"},pageTitle:{paddingLeft:e.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"}}}}));var me=a(196),de=a(197),pe=a(207),fe=a(204),be=a(205),ge=a(202),ve=a(203),he=a(216),Ee=a(212),xe=a(201),Oe=Object(m.a)((function(e){return{root:{"& .MuiTable-root":Object(S.a)({},e.breakpoints.between("xs","sm"),{padding:"15px",background:"red",overflowX:"auto"})},table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":Object(S.a)({fontWeight:"300"},e.breakpoints.between("xs","sm"),{padding:"0px",width:"300px"}),"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}));function ye(e,t,a){var l=Oe(),o=[5,10,25],c=Object(n.useState)(0),u=Object(i.a)(c,2),s=u[0],m=u[1],d=Object(n.useState)(o[s]),p=Object(i.a)(d,2),f=p[0],b=p[1],g=Object(n.useState)(),v=Object(i.a)(g,2),h=v[0],E=v[1],x=Object(n.useState)(),O=Object(i.a)(x,2),y=O[0],C=O[1],j=function(e,t){m(t)},N=function(e){b(parseInt(e.target.value,10)),m(0)};function I(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}return{TblContainer:function(e){return r.a.createElement(xe.a,{style:{overflowX:"auto"}},r.a.createElement(ge.a,{className:l.table},e.children))},TblHead:function(e){return r.a.createElement(ve.a,null,r.a.createElement(fe.a,null,t.map((function(e){return r.a.createElement(be.a,{key:e.id,sortDirection:y===e.id&&h},e.disableSorting?e.label:r.a.createElement(he.a,{active:y===e.id,direction:y===e.id?h:"asc",onClick:function(){var t;t=e.id,E(y===t&&"asc"===h?"desc":"asc"),C(t)}},e.label))}))))},TblPagination:function(){return r.a.createElement(Ee.a,{component:"div",page:s,rowsPerPageOptions:o,rowsPerPage:f,count:e.length,onChangePage:j,onChangeRowsPerPage:N})},recordsAfterPagingAndSorting:function(){return function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(a.fn(e),function(e,t){return"desc"===e?function(e,a){return I(e,a,t)}:function(e,a){return-I(e,a,t)}}(h,y)).slice(s*f,(s+1)*f)}}}var Ce=a(217),je=a(213),Ne=a(206),Ie=a(193),ke=a(79),Te=a.n(ke),Se=Object(m.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute"},dialogTitle:{paddingRight:"0px"}}}));function Pe(e){var t=e.title,a=e.children,n=e.openPopup,l=e.setOpenPopup,o=Se();return r.a.createElement(je.a,{open:n,maxWidth:"md",classes:{paper:o.dialogWrapper}},r.a.createElement(Ne.a,{className:o.dialogTitle},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(se.a,{variant:"h6",component:"div",style:{flexGrow:1}},t),r.a.createElement(Z.ActionButton,{color:"secondary",onClick:function(){l(!1)}},r.a.createElement(Te.a,null)))),r.a.createElement(Ie.a,{dividers:!0},a))}var we=a(103),Be=a.n(we),Ae=a(214),De=a(211),Me=Object(m.a)((function(e){return{root:{top:e.spacing(9)}}}));function ze(e){var t=e.notify,a=e.setNotify,n=Me(),l=function(e,n){"clickaway"!==n&&a(Object(T.a)(Object(T.a)({},t),{},{isOpen:!1}))};return r.a.createElement(Ae.a,{className:n.root,open:t.isOpen,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:l},r.a.createElement(De.a,{severity:t.type,onClose:l},t.message))}var Re=a(191),Le=a(194),Fe=a(102),We=a.n(Fe),He=Object(m.a)((function(e){return{dialog:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{textAlign:"center"},dialogContent:{textAlign:"center"},dialogAction:{justifyContent:"center"},titleIcon:{backgroundColor:e.palette.secondary.light,color:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.light,cursor:"default"},"& .MuiSvgIcon-root":{fontSize:"8rem"}}}}));function Je(e){var t=e.confirmDialog,a=e.setConfirmDialog,n=He();return r.a.createElement(je.a,{open:t.isOpen,classes:{paper:n.dialog}},r.a.createElement(Ne.a,{className:n.dialogTitle},r.a.createElement(Re.a,{disableRipple:!0,className:n.titleIcon},r.a.createElement(We.a,null))),r.a.createElement(Ie.a,{className:n.dialogContent},r.a.createElement(se.a,{variant:"h6"},t.title),r.a.createElement(se.a,{variant:"subtitle2"},t.subTitle)),r.a.createElement(Le.a,{className:n.dialogAction},r.a.createElement(Z.Button,{text:"\u041d\u0456",color:"default",onClick:function(){return a(Object(T.a)(Object(T.a)({},t),{},{isOpen:!1}))}}),r.a.createElement(Z.Button,{text:"\u0422\u0430\u043a",color:"secondary",onClick:t.onConfirm})))}var _e=Object(m.a)((function(e){var t;return{root:{"& .":{}},pageContent:{margin:e.spacing(1),padding:e.spacing(3)},searchInput:{width:"100%"},newButton:Object(S.a)({padding:"1px 30px",marginRight:"22px"},e.breakpoints.between("xs","sm"),{display:"none"}),statementContainer:{display:"contents"},toolbar:{padding:"0px"},addBtn:(t={},Object(S.a)(t,e.breakpoints.up("xs"),{position:"fixed",bottom:"31px",left:"3px"}),Object(S.a)(t,e.breakpoints.only("sm"),{position:"fixed",top:"309px",left:"3px"}),Object(S.a)(t,e.breakpoints.up("md"),{display:"none"}),t)}})),Ve=[{id:"fullName",label:"\u0422\u0438\u043f \u0440\u0456\u0448\u0435\u043d\u043d\u044f \u043f\u043e \u0437\u0430\u044f\u0432\u0438"},{id:"hireDate",label:"\u0414\u0430\u0442\u0430 \u043f\u043e\u0434\u0430\u043d\u043d\u044f"},{id:"mobile",label:"\u0414\u0430\u0442\u0430 \u0440\u0456\u0448\u0435\u043d\u043d\u044f"},{id:"department",label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043e\u0431\u0440\u043e\u0431\u043a\u0438"},{id:"actions",label:"\u0414\u0456\u0457",disableSorting:!0}];function $e(){var e=_e(),t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(le()),u=Object(i.a)(c,2),s=u[0],m=u[1],d=Object(n.useState)({fn:function(e){return e}}),p=Object(i.a)(d,2),f=p[0],b=p[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),h=v[0],E=v[1],x=Object(n.useState)({isOpen:!1,message:"",type:""}),O=Object(i.a)(x,2),y=O[0],C=O[1],j=Object(n.useState)({isOpen:!1,title:"",subTitle:""}),N=Object(i.a)(j,2),I=N[0],k=N[1],S=ye(s,Ve,f),P=S.TblContainer,w=S.TblHead,B=S.TblPagination,A=S.recordsAfterPagingAndSorting,D=function(e){k(Object(T.a)(Object(T.a)({},I),{},{isOpen:!1})),function(e){var t=le();t=t.filter((function(t){return t.id!=e})),localStorage.setItem(ae,JSON.stringify(t))}(e),m(le()),C({isOpen:!0,message:"\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0438\u043b\u0438",type:"error"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{className:e.pageContent},r.a.createElement(me.a,{className:e.toolbar},r.a.createElement("div",{className:e.statementContainer},r.a.createElement("div",null,r.a.createElement(Z.FabAdd,{startIcon:r.a.createElement(U.a,null),className:e.addBtn,onClick:function(){E(!0),o(null)}})),r.a.createElement("div",{className:e.btnField},r.a.createElement(Z.Button,{text:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0443 \u0437\u0430\u044f\u0432\u043a\u0443",variant:"outlined",startIcon:r.a.createElement(U.a,null),className:e.newButton,onClick:function(){E(!0),o(null)}})),r.a.createElement(Z.Input,{label:"\u041f\u043e\u0448\u0443\u043a \u043f\u043e \u0437\u0430\u044f\u0432\u0430\u043c",className:e.searchInput,InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},r.a.createElement(Ce.a,null))},onChange:function(e){var t=e.target;b({fn:function(e){return""==t.value?e:e.filter((function(e){return e.fullName.toLowerCase().includes(t.value)}))}})}}))),r.a.createElement(P,{className:e.tblContainer},r.a.createElement(w,{className:e.tblHead}),r.a.createElement(pe.a,null,A().map((function(e){return r.a.createElement(fe.a,{key:e.id},r.a.createElement(be.a,null,e.fullName),r.a.createElement(be.a,null,e.hireDate),r.a.createElement(be.a,null,e.mobile),r.a.createElement(be.a,null,e.department),r.a.createElement(be.a,null,r.a.createElement(Z.ActionButton,{color:"primary",onClick:function(){!function(e){o(e),E(!0)}(e)}},r.a.createElement(Be.a,{fontSize:"small"})),r.a.createElement(Z.ActionButton,{color:"secondary",onClick:function(){k({isOpen:!0,title:"\u0421\u043f\u0440\u0430\u0432\u0434\u0456 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0446\u0435\u0439 \u0437\u0430\u043f\u0438\u0441?",subTitle:"\u0412\u0438 \u043d\u0435 \u0437\u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0446\u044e \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u044e",onConfirm:function(){D(e.id)}})}},r.a.createElement(Te.a,{fontSize:"small"}))))})))),r.a.createElement(B,null)),r.a.createElement(Pe,{title:"\u041d\u043e\u0432\u0430 \u0437\u0430\u044f\u0432\u0430",openPopup:h,setOpenPopup:E},r.a.createElement(ce,{recordForEdit:l,addOrEdit:function(e,t){0==e.id?re(e):function(e){var t=le(),a=t.findIndex((function(t){return t.id==e.id}));t[a]=Object(T.a)({},e),localStorage.setItem(ae,JSON.stringify(t))}(e),t(),o(null),E(!1),m(le()),C({isOpen:!0,message:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",type:"success"})}})),r.a.createElement(ze,{notify:y,setNotify:C}),r.a.createElement(Je,{confirmDialog:I,setConfirmDialog:k}))}var qe=Object(m.a)((function(e){return{root:{"& .MuiInputBase-root":{width:"100%",fontSize:"13px","&:hover:before":{outlineColor:"red",borderBottom:"1px solid grey",borderBottomColor:"none"},"&:after":{outlineColor:"none",borderBottom:"none ",borderBottomColor:"none"}},"& .MuiInputBase-input":{paddingTop:"5px ",paddingBottom:"1px ",paddingRight:"5px ",paddingLeft:"5px "},"& .MuiFormHelperText-root":{width:"550px",lineHeight:"1.3"},"& .MuiInputBase-multiline":{paddingTop:"5px ",paddingBottom:"1px ",paddingRight:"5px ",paddingLeft:"5px "}},form:{display:"flex",flexWrap:"wrap  ",justifyContent:"space-between",paddingTop:"30px ",paddingBottom:"30px ",paddingRight:"20px ",paddingLeft:"10px "}}}));function Ge(){var e=Object(n.useState)({issuer:"undefined",issuercn:"undefined",serial:"undefined",subject:"undefined",subjectcn:"undefined",locality:"undefined",state:"undefined",o:"undefined",ou:"undefined",title:"undefined",givenname:"undefined",middlename:"undefined",lastname:"undefined",email:"undefined",address:"undefined",phone:"undefined",dns:"undefined",edrpoucode:"undefined",drfocode:"undefined",unzr:"undefined"}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(T.a)(Object(T.a)({},e),{},Object(S.a)({},a,n))}))},c=qe();return r.a.createElement(ue.a,null," ",r.a.createElement(me.a,{style:{background:"rgb(237 235 236)",boxShadow:"1px 12px 8px 0px rgba(34, 60, 80, 0.2)"}},r.a.createElement(se.a,null,"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430")," "),r.a.createElement("form",{className:c.form},r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u0420\u0435\u043a\u0432\u0456\u0437\u0438\u0442\u0438 \u0432\u0438\u0434\u0430\u0432\u043d\u0438\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430(\u041d\u0430\u0434\u0430\u0432\u0430\u0447)",name:"issuer",value:a.issuer,onChange:o,InputProps:{readOnly:!0}}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0435 \u0456\u043c'\u044f \u043d\u0430\u0434\u0430\u0432\u0430\u0447\u0430",name:"issuercn",value:a.issuercn,readOnly:"readOnly",onChange:o,InputProps:{readOnly:!0}}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430 \u0443 \u043d\u0430\u0434\u0430\u0432\u0430\u0447\u0430",name:"serial",InputProps:{readOnly:!0},value:a.serial,readOnly:"readOnly",onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u0420\u0435\u043a\u0432\u0456\u0437\u0438\u0442\u0438 \u0432\u0438\u0434\u0430\u0432\u043d\u0438\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430(\u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447)",name:"subject",value:a.subject,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0435 \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"subjectcn",value:a.subjectcn,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u041c\u0456\u0441\u0442\u043e (\u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442) \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"locality",value:a.locality,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c (\u0440\u0435\u0433\u0456\u043e\u043d) \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"state",value:a.state,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0457 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"o",value:a.o,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u041d\u0430\u0437\u0432\u0430 \u043f\u0456\u0434\u0440\u043e\u0437\u0434\u0456\u043b\u0443 \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0457 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"ou",value:a.ou,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u041f\u043e\u0441\u0430\u0434\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"title",value:a.title,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u0406\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"givenname",value:a.givenname,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{className:c.root,type:"text",helperText:"\u041f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"middlename",value:a.middlename,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{multiline:!0,className:c.root,type:"text",helperText:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"lastname",value:a.lastname,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{multiline:!0,className:c.root,type:"text",helperText:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0435\u043b.\u043f\u043e\u0448\u0442\u0438 (e-mail) \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"email",value:a.email,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{multiline:!0,className:c.root,type:"text",helperText:"\u0410\u0434\u0440\u0435\u0441\u0430 (\u0444\u0456\u0437\u0438\u0447\u043d\u0430) \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"address",value:a.address,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{multiline:!0,className:c.root,type:"text",helperText:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"phone",value:a.phone,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{multiline:!0,className:c.root,type:"text",helperText:"DNS-\u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"dns",value:a.dns,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{multiline:!0,className:c.root,type:"text",helperText:"\u041a\u043e\u0434 \u0437\u0430 \u0404\u0414\u0420\u041f\u041e\u0423 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",name:"edrpoucode",value:a.edrpoucode,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{multiline:!0,className:c.root,type:"text",helperText:"\u0420\u041d\u041e\u041a\u041f\u041f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0430\u0431\u043e \u0441\u0435\u0440\u0456\u044f (\u0437\u0430 \u043d\u044f\u0432\u043d\u043e\u0441\u0442\u0456) \u0442\u0430 \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430 (\u0434\u043b\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432, \u044f\u043a\u0456 \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043e\u0457 \u0440\u0435\u043b\u0456\u0433\u0456\u0439\u043d\u0456 \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0432\u0456\u0434\u043c\u043e\u0432\u043b\u044f\u044e\u0442\u044c\u0441\u044f \u0432\u0456\u0434 \u043f\u0440\u0438\u0439\u043d\u044f\u0442\u0442\u044f \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0430 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0457 \u043a\u0430\u0440\u0442\u043a\u0438 \u043f\u043b\u0430\u0442\u043d\u0438\u043a\u0430 \u043f\u043e\u0434\u0430\u0442\u043a\u0456\u0432 \u0442\u0430 \u043e\u0444\u0456\u0446\u0456\u0439\u043d\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0438\u043b\u0438 \u043f\u0440\u043e \u0446\u0435 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0438\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044e\u044e\u0447\u0438\u0439 \u043e\u0440\u0433\u0430\u043d \u0456 \u043c\u0430\u044e\u0442\u044c \u0432\u0456\u0434\u043c\u0456\u0442\u043a\u0443 \u0443 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0456) (\u0414\u043e\u0434\u0430\u0442\u043e\u043a \u0410, \u043f. 8)",name:"drfocode",value:a.drfocode,InputProps:{readOnly:!0},onChange:o}),r.a.createElement(B.a,{multiline:!0,className:c.root,type:"text",helperText:"\u0423\u043d\u0456\u043a\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u043f\u0438\u0441\u0443 \u0432 \u0404\u0434\u0438\u043d\u043e\u043c\u0443 \u0434\u0435\u043c\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u043e\u043c\u0443 \u0440\u0435\u0454\u0441\u0442\u0440\u0456",name:"drfocode",value:a.drfocode,InputProps:{readOnly:!0},onChange:o})))}var Xe=Object(m.a)({cancelBtn:{background:"red",color:"#fff",padding:"7px 20px","&:hover":{color:"",background:"red"}}});function Ke(){var e=Xe();return r.a.createElement("div",null,r.a.createElement(Ge,null),r.a.createElement(q.a,{className:e.cancelBtn},"C\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"))}var Qe=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(k.a,null,r.a.createElement(I,{onCollapse:function(e){l(e)}}),r.a.createElement("div",{className:"container ".concat(a?"inactive":"")},r.a.createElement("div",null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,from:"/all-statements",render:function(e){return r.a.createElement($e,e)}}),r.a.createElement(c.a,{exact:!0,from:"/personal-data",render:function(e){return r.a.createElement(Ke,e)}})))))};var Ue=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2);return t[0],t[1],r.a.createElement(Qe,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.1ab69b83.chunk.js.map