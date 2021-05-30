(this["webpackJsonpagenda-app-client"]=this["webpackJsonpagenda-app-client"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n(0),r=n(12),s=n.n(r),o=n(13),i=(n(92),n(20)),u=n(30),d=n.n(u),l=n(42),j=n(23),b=n(43),f=n.n(b),p=n(8),O=n.n(p),m={currentDate:O()().format("YYYY-MM-DD"),currentTasks:[]},k=Object(j.b)("tasks/fetchCurrentDateTasks",function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("api call for fetch tasks"),e.next=3,f.a.get("/api/tasks/week?date=".concat(O()(t).format("YYYY-MM-DD")));case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(j.b)("tasks/addOneTask",function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("api call for add one task"),e.next=3,f.a.post("/api/tasks",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(j.b)("tasks/updateOneTask",function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}throw new Error("ITask objects needed ID for update request");case 2:return e.next=4,f.a.patch("/api/tasks",t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(j.c)({name:"tasks",initialState:m,reducers:{setDate:function(e,t){e.currentDate=t.payload}},extraReducers:function(e){e.addCase(k.fulfilled,(function(e,t){e.currentTasks=t.payload})),e.addCase(h.fulfilled,(function(e,t){var n=t.payload;0===O()(n.date).day()?O()("".concat(e.currentDate.substring(0,10)," 00:00")).isSame(O()("".concat(n.date.substring(0,10)," 00:00")).subtract(1,"day"),"week")&&e.currentTasks.push(n):O()("".concat(e.currentDate.substring(0,10)," 00:00")).isSame(n.date,"week")&&e.currentTasks.push(n)})),e.addCase(x.fulfilled,(function(e,t){var n=t.payload;e.currentTasks=e.currentTasks.map((function(e){return e.id===n.id?n:e}))}))}}),v=g.actions.setDate,y=g.reducer,D=Object(j.c)({name:"ui",initialState:{addTaskPopupOn:!1,taskItemPopupOn:!1,taskItemPopup:{resume:"none",color:"none",date:"none",details:"none",done:!1}},reducers:{toggleAddTaskPopup:function(e){e.addTaskPopupOn=!e.addTaskPopupOn},toggleTaskItemPopup:function(e){e.taskItemPopupOn=!e.taskItemPopupOn},setTaskItem:function(e,t){e.taskItemPopup=t.payload}}}),Y=D.actions,C=Y.toggleAddTaskPopup,M=Y.toggleTaskItemPopup,T=Y.setTaskItem,I=D.reducer,S=n(4),w=function(e){var t=e.customOnClick,n=e.initColor;return Object(S.jsxs)("div",{onClick:function(e){var n=e.target;if(n.classList.contains("color-box")){if(!n.parentElement)throw new Error("no parent ?");for(var a=0,c=Array.from(n.parentElement.children);a<c.length;a++){c[a].classList.remove("color-selected")}n.classList.add("color-selected"),t(n.classList[1])}},className:"color-selector",children:[Object(S.jsx)("div",{className:"color-box red color-red ".concat("red"===n&&"color-selected"," ")}),Object(S.jsx)("div",{className:"color-box blue color-blue ".concat("blue"===n&&"color-selected"," ")}),Object(S.jsx)("div",{className:"color-box orange color-orange ".concat("orange"===n&&"color-selected"," ")}),Object(S.jsx)("div",{className:"color-box green color-green ".concat("green"===n&&"color-selected"," ")}),Object(S.jsx)("div",{className:"color-box pink color-pink ".concat("pink"===n&&"color-selected"," ")})]})},P=function(){var e=Object(o.c)((function(e){return e.tasks})).currentDate,t=Object(o.b)(),n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(e),d=Object(i.a)(u,2),l=d[0],j=d[1],b=Object(c.useState)(""),f=Object(i.a)(b,2),p=f[0],O=f[1],m=Object(c.useState)("blue"),k=Object(i.a)(m,2),x=k[0],g=k[1];return Object(S.jsx)("div",{onMouseDown:function(e){"addtask-form-container"===e.target.id&&t(C())},id:"addtask-form-container",children:Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(h({resume:r,date:l,details:p,done:!1,color:x})),t(C())},children:[Object(S.jsx)("input",{type:"text",name:"resume",placeholder:"nom de la t\xe2che",value:r,onChange:function(e){return s(e.target.value)}}),Object(S.jsx)("input",{type:"date",name:"date",value:l,onChange:function(e){return j(e.target.value)}}),Object(S.jsx)("textarea",{name:"details",placeholder:"details de la tache",value:p,onChange:function(e){return O(e.target.value)}}),Object(S.jsx)(w,{customOnClick:function(e){g(e)},initColor:x}),Object(S.jsx)("button",{type:"submit",children:"Ajouter"})]})})},N=n(136),A=function(){var e=Object(o.b)();return Object(S.jsxs)("header",{children:[Object(S.jsx)("h1",{children:"Agenda App"}),Object(S.jsx)(N.a,{variant:"outlined",onClick:function(t){e(C())},children:"Ajouter une t\xe2che"})]})},E=function(e){var t=e.task,n=Object(o.b)();return Object(S.jsx)("div",{onClick:function(e){n(T(t)),n(M())},className:"schedule-item color-".concat(t.color," ").concat(t.done&&"done"),children:t.resume})},L=function(e){var t=e.dayIdentifier,n=e.tasks,a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],u=r[1],d=Object(o.c)((function(e){return e.tasks})).currentDate;return Object(c.useEffect)((function(){u(!1)}),[d]),Object(S.jsxs)("div",{id:"".concat(t,"-column"),className:"schedule-column",children:[Object(S.jsx)("div",{onClick:function(e){u(!s)},className:"schedule-column-header ".concat(s&&"collapsed"),children:t}),!s&&n.map((function(e){return Object(S.jsx)(E,{task:e},e.id)}))]})},F=function(){var e=Object(o.c)((function(e){return e.tasks})),t=e.currentTasks,n=e.currentDate,a=Object(o.b)();Object(c.useEffect)((function(){a(k(n))}),[n,a]);var r=function(e){return 0!==O()("".concat(n.substring(0,10)," 00:00")).day()?"".concat(O()("".concat(n.substring(0,10)," 00:00")).day(e).format("DD/MM")):"".concat(O()("".concat(n.substring(0,10)," 00:00")).subtract(1,"day").day(e).format("DD/MM"))};return Object(S.jsxs)("div",{id:"schedule-container",children:[Object(S.jsx)(L,{dayIdentifier:"Lundi ".concat(r(1)),tasks:t.filter((function(e){return 1===O()("".concat(e.date.substring(0,10)," 00:00")).day()}))}),Object(S.jsx)(L,{dayIdentifier:"Mardi ".concat(r(2)),tasks:t.filter((function(e){return 2===O()("".concat(e.date.substring(0,10)," 00:00")).day()}))}),Object(S.jsx)(L,{dayIdentifier:"Mercredi ".concat(r(3)),tasks:t.filter((function(e){return 3===O()("".concat(e.date.substring(0,10)," 00:00")).day()}))}),Object(S.jsx)(L,{dayIdentifier:"Jeudi ".concat(r(4)),tasks:t.filter((function(e){return 4===O()("".concat(e.date.substring(0,10)," 00:00")).day()}))}),Object(S.jsx)(L,{dayIdentifier:"Vendredi ".concat(r(5)),tasks:t.filter((function(e){return 5===O()("".concat(e.date.substring(0,10)," 00:00")).day()}))}),Object(S.jsx)(L,{dayIdentifier:"Autre",tasks:t.filter((function(e){return 6===O()("".concat(e.date.substring(0,10)," 00:00")).day()||0===O()("".concat(e.date.substring(0,10)," 00:00")).day()}))})]})},J=n(140),B=n(47),q=function(){var e=Object(o.c)((function(e){return e.tasks})).currentDate,t=Object(o.b)();return Object(S.jsxs)("div",{id:"schedule-navigator",children:[Object(S.jsx)(N.a,{variant:"contained",onClick:function(n){t(v(O()("".concat(e.substring(0,10)," 00:00")).subtract(7,"days").format("YYYY-MM-DD")))},children:Object(S.jsx)(B.a,{})}),Object(S.jsx)(J.a,{format:"DD/MM/YYYY",value:O()(e),onChange:function(e){e&&t(v(e.format("YYYY-MM-DD")))}}),Object(S.jsx)(N.a,{onClick:function(e){t(v(O()(Date.now()).format("YYYY-MM-DD")))},variant:"contained",children:"Semaine actuelle"}),Object(S.jsx)(N.a,{variant:"contained",onClick:function(n){t(v(O()("".concat(e.substring(0,10)," 00:00")).add(7,"days").format("YYYY-MM-DD")))},children:Object(S.jsx)(B.b,{})})]})},R=function(){var e=Object(o.c)((function(e){return e.ui})).taskItemPopup,t=Object(o.b)(),n=Object(c.useState)(e.resume),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(O()("".concat(e.date.substring(0,10)," 00:00")).format("YYYY-MM-DD")),d=Object(i.a)(u,2),l=d[0],j=d[1],b=Object(c.useState)(e.details),f=Object(i.a)(b,2),p=f[0],m=f[1],k=Object(c.useState)(e.color),h=Object(i.a)(k,2),g=h[0],v=h[1],y=Object(c.useState)(e.done),D=Object(i.a)(y,2),Y=D[0],C=D[1];return Object(S.jsx)("div",{onClick:function(e){"taskitem-popup-container"===e.target.id&&t(M())},id:"taskitem-popup-container",children:Object(S.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(x({id:e.id,color:g,date:l,details:p,done:Y,resume:r})),t(M())},id:"taskitem-popup",children:[Object(S.jsx)("input",{type:"text",name:"resume",placeholder:"nom de la t\xe2che",value:r,onChange:function(e){return s(e.target.value)}}),Object(S.jsx)("input",{type:"date",name:"date",value:l,onChange:function(e){return j(e.target.value)}}),Object(S.jsx)("textarea",{name:"details",placeholder:"details de la tache",value:p,onChange:function(e){return m(e.target.value)}}),Object(S.jsx)(w,{customOnClick:function(e){v(e)},initColor:g}),Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{htmlFor:"done",children:"Fini : "}),Object(S.jsx)("input",{onChange:function(e){return C(e.target.checked)},checked:Y,type:"checkbox",name:"done"})]}),Object(S.jsx)("button",{type:"submit",children:"Modifier"})]})})};var V=function(){var e=Object(o.c)((function(e){return e.ui})),t=e.addTaskPopupOn,n=e.taskItemPopupOn;return Object(S.jsxs)("div",{className:"App",children:[t&&Object(S.jsx)(P,{}),n&&Object(S.jsx)(R,{}),Object(S.jsxs)("div",{id:"main-container",children:[Object(S.jsx)(A,{}),Object(S.jsx)(q,{}),Object(S.jsx)(F,{})]})]})},z=Object(j.a)({reducer:{tasks:y,ui:I}}),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},H=n(64);s.a.render(Object(S.jsx)(o.a,{store:z,children:Object(S.jsx)(a.a,{utils:H.a,children:Object(S.jsx)(V,{})})}),document.getElementById("root")),G()},92:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.7f5a098e.chunk.js.map