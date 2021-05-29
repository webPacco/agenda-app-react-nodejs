(this["webpackJsonpagenda-app-client"]=this["webpackJsonpagenda-app-client"]||[]).push([[0],{30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),s=n(3),u=(n(30),n(5)),i=n(7),d=n.n(i),l=n(9),j=n(6),b=n(10),f=n.n(b),p=n(2),O=n.n(p),k={currentDate:O()().format("YYYY-MM-DD"),currentTasks:[]},m=Object(j.b)("tasks/fetchCurrentDateTasks",function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("api call for fetch tasks"),e.next=3,f.a.get("/api/tasks/week?date=".concat(O()(t).format("YYYY-MM-DD")));case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(j.b)("tasks/addOneTask",function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("api call for add one task"),e.next=3,f.a.post("/api/tasks",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(j.b)("tasks/updateOneTask",function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}throw new Error("ITask objects needed ID for update request");case 2:return e.next=4,f.a.patch("/api/tasks",t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(j.c)({name:"tasks",initialState:k,reducers:{setDate:function(e,t){e.currentDate=t.payload}},extraReducers:function(e){e.addCase(m.fulfilled,(function(e,t){e.currentTasks=t.payload})),e.addCase(h.fulfilled,(function(e,t){var n=t.payload;0===O()(n.date).day()?O()(e.currentDate).isSame(O()(n.date).subtract(1,"day"),"week")&&e.currentTasks.push(n):O()(e.currentDate).isSame(n.date,"week")&&e.currentTasks.push(n)})),e.addCase(x.fulfilled,(function(e,t){var n=t.payload;e.currentTasks=e.currentTasks.map((function(e){return e.id===n.id?n:e}))}))}}),g=v.actions.setDate,y=v.reducer,D=Object(j.c)({name:"ui",initialState:{addTaskPopupOn:!1,taskItemPopupOn:!1,taskItemPopup:{resume:"none",color:"none",date:"none",details:"none",done:!1}},reducers:{toggleAddTaskPopup:function(e){e.addTaskPopupOn=!e.addTaskPopupOn},toggleTaskItemPopup:function(e){e.taskItemPopupOn=!e.taskItemPopupOn},setTaskItem:function(e,t){e.taskItemPopup=t.payload}}}),C=D.actions,Y=C.toggleAddTaskPopup,T=C.toggleTaskItemPopup,I=C.setTaskItem,M=D.reducer,S=n(0),w=function(e){var t=e.customOnClick,n=e.initColor;return Object(S.jsxs)("div",{onClick:function(e){var n=e.target;if(n.classList.contains("color-box")){if(!n.parentElement)throw new Error("no parent ?");for(var a=0,c=Array.from(n.parentElement.children);a<c.length;a++){c[a].classList.remove("color-selected")}n.classList.add("color-selected"),t(n.classList[1])}},className:"color-selector",children:[Object(S.jsx)("div",{className:"color-box red color-red ".concat("red"===n&&"color-selected"," ")}),Object(S.jsx)("div",{className:"color-box blue color-blue ".concat("blue"===n&&"color-selected"," ")}),Object(S.jsx)("div",{className:"color-box orange color-orange ".concat("orange"===n&&"color-selected"," ")}),Object(S.jsx)("div",{className:"color-box green color-green ".concat("green"===n&&"color-selected"," ")}),Object(S.jsx)("div",{className:"color-box pink color-pink ".concat("pink"===n&&"color-selected"," ")})]})},P=function(){var e=Object(s.c)((function(e){return e.tasks})).currentDate,t=Object(s.b)(),n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(e),d=Object(u.a)(i,2),l=d[0],j=d[1],b=Object(a.useState)(""),f=Object(u.a)(b,2),p=f[0],O=f[1],k=Object(a.useState)("blue"),m=Object(u.a)(k,2),x=m[0],v=m[1];return Object(S.jsx)("div",{onMouseDown:function(e){"addtask-form-container"===e.target.id&&t(Y())},id:"addtask-form-container",children:Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(h({resume:r,date:l,details:p,done:!1,color:x})),t(Y())},children:[Object(S.jsx)("input",{type:"text",name:"resume",placeholder:"nom de la t\xe2che",value:r,onChange:function(e){return o(e.target.value)}}),Object(S.jsx)("input",{type:"date",name:"date",value:l,onChange:function(e){return j(e.target.value)}}),Object(S.jsx)("textarea",{name:"details",placeholder:"details de la tache",value:p,onChange:function(e){return O(e.target.value)}}),Object(S.jsx)(w,{customOnClick:function(e){v(e)},initColor:x}),Object(S.jsx)("button",{type:"submit",children:"Ajouter"})]})})},N=function(){var e=Object(s.b)();return Object(S.jsxs)("header",{children:[Object(S.jsx)("h1",{children:"Agenda App"}),Object(S.jsx)("button",{onClick:function(t){e(Y())},children:"Ajouter une t\xe2che"})]})},A=function(e){var t=e.task,n=Object(s.b)();return Object(S.jsx)("div",{onClick:function(e){n(I(t)),n(T())},className:"schedule-item color-".concat(t.color," ").concat(t.done&&"done"),children:t.resume})},E=function(e){var t=e.dayIdentifier,n=e.tasks,c=Object(a.useState)(!1),r=Object(u.a)(c,2),o=r[0],i=r[1],d=Object(s.c)((function(e){return e.tasks})).currentDate;return Object(a.useEffect)((function(){i(!1)}),[d]),Object(S.jsxs)("div",{id:"".concat(t,"-column"),className:"schedule-column",children:[Object(S.jsx)("div",{onClick:function(e){i(!o)},className:"schedule-column-header ".concat(o&&"collapsed"),children:t}),!o&&n.map((function(e){return Object(S.jsx)(A,{task:e},e.id)}))]})},L=function(){var e=Object(s.c)((function(e){return e.tasks})),t=e.currentTasks,n=e.currentDate,c=Object(s.b)();Object(a.useEffect)((function(){c(m(n))}),[n,c]);var r=function(e){return"".concat(O()(n).day(e).format("DD"),"/").concat(O()(n).day(e).format("MM"))};return Object(S.jsxs)("div",{id:"schedule-container",children:[Object(S.jsx)(E,{dayIdentifier:"Lundi ".concat(r(1)),tasks:t.filter((function(e){return 1===O()(e.date).day()}))}),Object(S.jsx)(E,{dayIdentifier:"Mardi ".concat(r(2)),tasks:t.filter((function(e){return 2===O()(e.date).day()}))}),Object(S.jsx)(E,{dayIdentifier:"Mercredi ".concat(r(3)),tasks:t.filter((function(e){return 3===O()(e.date).day()}))}),Object(S.jsx)(E,{dayIdentifier:"Jeudi ".concat(r(4)),tasks:t.filter((function(e){return 4===O()(e.date).day()}))}),Object(S.jsx)(E,{dayIdentifier:"Vendredi ".concat(r(5)),tasks:t.filter((function(e){return 5===O()(e.date).day()}))}),Object(S.jsx)(E,{dayIdentifier:"Autre",tasks:t.filter((function(e){return 6===O()(e.date).day()||0===O()(e.date).day()}))})]})},F=function(){var e=Object(s.c)((function(e){return e.tasks})).currentDate,t=Object(s.b)();return Object(S.jsxs)("div",{id:"schedule-navigator",children:[Object(S.jsx)("button",{onClick:function(n){t(g(O()(e).subtract(7,"days").format("YYYY-MM-DD")))},children:"\u2190"}),Object(S.jsx)("input",{onChange:function(e){isNaN(Date.parse(e.target.value))||t(g(e.target.value))},value:e,type:"date"}),Object(S.jsx)("button",{onClick:function(e){t(g(O()(Date.now()).format("YYYY-MM-DD")))},children:"Semaine actuelle"}),Object(S.jsx)("button",{onClick:function(n){t(g(O()(e).add(7,"days").format("YYYY-MM-DD")))},children:"\u2192"})]})},J=function(){var e=Object(s.c)((function(e){return e.ui})).taskItemPopup,t=Object(s.b)(),n=Object(a.useState)(e.resume),c=Object(u.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(O()(e.date).format("YYYY-MM-DD")),d=Object(u.a)(i,2),l=d[0],j=d[1],b=Object(a.useState)(e.details),f=Object(u.a)(b,2),p=f[0],k=f[1],m=Object(a.useState)(e.color),h=Object(u.a)(m,2),v=h[0],g=h[1],y=Object(a.useState)(e.done),D=Object(u.a)(y,2),C=D[0],Y=D[1];return Object(S.jsx)("div",{onClick:function(e){"taskitem-popup-container"===e.target.id&&t(T())},id:"taskitem-popup-container",children:Object(S.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(x({id:e.id,color:v,date:l,details:p,done:C,resume:r})),t(T())},id:"taskitem-popup",children:[Object(S.jsx)("input",{type:"text",name:"resume",placeholder:"nom de la t\xe2che",value:r,onChange:function(e){return o(e.target.value)}}),Object(S.jsx)("input",{type:"date",name:"date",value:l,onChange:function(e){return j(e.target.value)}}),Object(S.jsx)("textarea",{name:"details",placeholder:"details de la tache",value:p,onChange:function(e){return k(e.target.value)}}),Object(S.jsx)(w,{customOnClick:function(e){g(e)},initColor:v}),Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{htmlFor:"done",children:"Fini : "}),Object(S.jsx)("input",{onChange:function(e){return Y(e.target.checked)},checked:C,type:"checkbox",name:"done"})]}),Object(S.jsx)("button",{type:"submit",children:"Modifier"})]})})};var B=function(){var e=Object(s.c)((function(e){return e.ui})),t=e.addTaskPopupOn,n=e.taskItemPopupOn;return Object(S.jsxs)("div",{className:"App",children:[t&&Object(S.jsx)(P,{}),n&&Object(S.jsx)(J,{}),Object(S.jsxs)("div",{id:"main-container",children:[Object(S.jsx)(N,{}),Object(S.jsx)(F,{}),Object(S.jsx)(L,{})]})]})},q=Object(j.a)({reducer:{tasks:y,ui:M}}),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(s.a,{store:q,children:Object(S.jsx)(B,{})})}),document.getElementById("root")),R()}},[[51,1,2]]]);
//# sourceMappingURL=main.5aecdf3f.chunk.js.map