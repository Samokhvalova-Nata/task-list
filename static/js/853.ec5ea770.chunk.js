"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{4853:function(t,e,s){s.r(e),s.d(e,{default:function(){return T}});var n=s(9434),r="TaskEditor_form__NXWha",a="TaskEditor_input__WXNoz",i="TaskEditor_button__qGfcX",c=s(8427),u=s(184),l=function(){var t=(0,n.I0)();return(0,u.jsxs)("form",{className:r,onSubmit:function(e){e.preventDefault();var s=e.currentTarget,n=s.elements.text.value;if(""!==n)return t((0,c.gI)(n)),void s.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,u.jsx)("input",{name:"text",className:a}),(0,u.jsx)("button",{type:"submit",className:i,children:"Add task"})]})},o=s(7322),_="Task_wrapper__zvx3s",d="Task_text__IwwM2",m="Task_btn__5Zeie",x=function(t){var e=t.task,s=(0,n.I0)();return(0,u.jsxs)("div",{className:_,children:[(0,u.jsx)("p",{className:d,children:e.text}),(0,u.jsx)("button",{onClick:function(){return s((0,c._5)(e.id))},className:m,children:(0,u.jsx)(o.FU5,{size:24})})]})},f=function(t){return t.tasks.items},k=function(t){return t.tasks.isLoading},h="TaskList_list__Q1M-x",j="TaskList_listItem__XsStd",p=function(){var t=(0,n.v9)(f);return(0,u.jsx)("ul",{className:h,children:t.map((function(t){return(0,u.jsx)("li",{className:j,children:(0,u.jsx)(x,{task:t})},t.id)}))})},v=s(2791),N=s(4270);function T(){var t=(0,n.v9)(k),e=(0,n.I0)();return(0,v.useEffect)((function(){e((0,c.Jv)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(N.q,{children:(0,u.jsx)("title",{children:"Your tasks"})}),(0,u.jsx)(l,{}),(0,u.jsx)("div",{children:t&&"Request in progress..."}),(0,u.jsx)(p,{})]})}}}]);
//# sourceMappingURL=853.ec5ea770.chunk.js.map