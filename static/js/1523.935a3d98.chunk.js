"use strict";(self.webpackChunksolar_system=self.webpackChunksolar_system||[]).push([[1523],{7074:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(5043),o=n(9252),a=n(6446),r=n(5865),i=n(2258),c=n(3827),l=n(7972),d=n(8577),u=n(4791),h=n(1353),p=n(1906),y=n(1021),m=n(579);const x=e=>{let{questions:t,onSuccess:n}=e;const[x,v]=(0,s.useState)({}),[g,A]=(0,s.useState)(!1),[T,j]=(0,s.useState)(!1);return(0,m.jsx)(o.A,{maxWidth:"md",children:(0,m.jsxs)(a.A,{my:4,children:[(0,m.jsx)(r.A,{variant:"h4",component:"h1",gutterBottom:!0,children:"Lecture Questionnaire"}),t.map(((e,t)=>(0,m.jsxs)(a.A,{my:2,children:[(0,m.jsxs)(i.A,{component:"fieldset",children:[(0,m.jsx)(c.A,{component:"legend",children:e.question}),e.code&&(0,m.jsx)(y.Rc,{text:e.code,language:"python",theme:y.f$,codeBlock:!0}),(0,m.jsx)(l.A,{name:"question-".concat(t),value:x[t]||"",onChange:e=>{return n=t,s=e.target.value,void v({...x,[n]:s});var n,s},children:e.options.map(((e,t)=>(0,m.jsx)(d.A,{value:e,control:(0,m.jsx)(u.A,{}),label:e},t)))})]}),g&&(0,m.jsx)(m.Fragment,{children:x[t]===e.answer?(0,m.jsx)(h.A,{severity:"success",children:"Correct"}):(0,m.jsx)(h.A,{severity:"error",children:e.explanation[x[t]]})})]},t))),!T&&(0,m.jsx)(p.A,{variant:"contained",color:"primary",onClick:()=>{A(!0);const e=t.every(((e,t)=>x[t]===e.answer));j(e)},children:"Submit"}),g&&T&&(0,m.jsx)(p.A,{variant:"contained",color:"secondary",onClick:n,style:{marginTop:"16px"},children:"Continue"})]})})}},1523:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(5043);var s=n(3216),o=n(7074),a=n(579);const r=[{question:"Which data structure is ordered and changeable?",options:["List","Dictionary","Set","Tuple"],answer:"List",explanation:{List:"Correct. A list is ordered and changeable.",Dictionary:"Incorrect. A dictionary is unordered and changeable.",Set:"Incorrect. A set is unordered and unindexed.",Tuple:"Incorrect. A tuple is ordered but unchangeable."}},{question:'How do you access the value associated with the key "Earth" in a dictionary called planet_moons?',options:['planet_moons["Earth"]',"planet_moons.Earth","planet_moons->Earth","planet_moons{Earth}"],answer:'planet_moons["Earth"]',explanation:{'planet_moons["Earth"]':'Correct. This is the correct syntax to access the value associated with the key "Earth" in a dictionary.',"planet_moons.Earth":"Incorrect. This syntax is not valid for accessing dictionary values in Python.","planet_moons->Earth":"Incorrect. This is not valid Python syntax.","planet_moons{Earth}":"Incorrect. This is not valid Python syntax."}},{question:"Which of the following is a key-value pair?",options:["[1, 2, 3]",'("Mercury", 0)','{ "Mercury": 0 }',"{1, 2, 3}"],answer:'{ "Mercury": 0 }',explanation:{"[1, 2, 3]":"Incorrect. This is a list of values.",'("Mercury", 0)':"Incorrect. This is a tuple.",'{ "Mercury": 0 }':"Correct. This is a key-value pair in a dictionary.","{1, 2, 3}":"Incorrect. This is a set."}},{question:"How do you add an item to a list called planets?",options:['planets.add("Pluto")','planets.append("Pluto")','planets.insert("Pluto")','planets["Pluto"] = True'],answer:'planets.append("Pluto")',explanation:{'planets.add("Pluto")':"Incorrect. The add method is used for sets, not lists.",'planets.append("Pluto")':"Correct. The append method is used to add an item to the end of a list.",'planets.insert("Pluto")':"Incorrect. The insert method requires an index position as well.",'planets["Pluto"] = True':"Incorrect. This syntax is used for adding key-value pairs to dictionaries."}}],i=()=>{const e=(0,s.Zp)();return(0,a.jsx)(o.A,{questions:r,onSuccess:()=>{const t=JSON.parse(localStorage.getItem("completionStatus")||"{}");t.lecture3Questionnaire=!0,localStorage.setItem("completionStatus",JSON.stringify(t)),e("/week1")}})}}}]);
//# sourceMappingURL=1523.935a3d98.chunk.js.map