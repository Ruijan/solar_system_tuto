"use strict";(self.webpackChunksolar_system=self.webpackChunksolar_system||[]).push([[8674],{49:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(5043),s=n(6446),r=n(6839),o=n(5078),a=n(186),l=n(2299),c=n(4125),d=n(1906),h=n(5865),u=n(5475),x=n(579);const j=e=>{let{objectives:t}=e;const[n,j]=(0,i.useState)(function(e,t){for(let n=0;n<e.length;n++)if(!t[e[n].id])return n;return e.length}(t,JSON.parse(localStorage.getItem("completionStatus")||"{}"))),[m,A]=(0,i.useState)(void 0),[p,y]=(0,i.useState)({});(0,i.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("completionStatus")||"{}");y(e)}),[]);const v=()=>{var e;void 0!==m&&m<((null===(e=t[n].subObjectives)||void 0===e?void 0:e.length)||0)-1?A(m+1):(j((e=>e+1)),A(void 0))},b=()=>{if(void 0!==m&&m>0)A(m-1);else if(0===m)A(void 0);else{var e,i;j((e=>e-1));let s=null===(e=t[n-1])||void 0===e||null===(i=e.subObjectives)||void 0===i?void 0:i.length;A(t[n-1]&&s?s:void 0)}};return(0,x.jsxs)(s.A,{children:[(0,x.jsx)(r.A,{activeStep:n,orientation:"vertical",children:t.map(((e,n)=>(0,x.jsxs)(o.A,{completed:p[e.id],children:[(0,x.jsx)(a.A,{onClick:()=>{j(n),A(void 0)},children:(0,x.jsx)(l.A,{children:e.text})}),(0,x.jsx)(c.A,{children:e.subObjectives&&e.subObjectives.length>0&&(0,x.jsx)(r.A,{activeStep:m,orientation:"vertical",children:e.subObjectives.map(((i,r)=>{var h;return(0,x.jsxs)(o.A,{completed:p[i.id],children:[(0,x.jsx)(a.A,{onClick:()=>A(r),children:(0,x.jsx)(l.A,{children:i.text})}),(0,x.jsx)(c.A,{children:(0,x.jsxs)(s.A,{sx:{mb:2},children:[(0,x.jsx)(d.A,{variant:"contained",onClick:v,sx:{mt:1,mr:1},component:u.N_,to:i.route,children:r===((null===(h=e.subObjectives)||void 0===h?void 0:h.length)||0)-1&&n===t.length-1?"Finish":"Continue"}),(0,x.jsx)(d.A,{disabled:0===n&&0===r,onClick:b,sx:{mt:1,mr:1},children:"Back"})]})})]},i.id)}))})})]},e.id)))}),n===t.length&&void 0===m&&(0,x.jsxs)(s.A,{sx:{mt:2},children:[(0,x.jsx)(h.A,{children:"All steps completed - you're finished"}),(0,x.jsx)(d.A,{onClick:()=>{j(0),A(void 0);let e=JSON.parse(localStorage.getItem("completionStatus")||"{}");for(let t in e)e[t]=!1;localStorage.setItem("completionStatus",JSON.stringify(e)),y(e)},sx:{mt:1,mr:1},children:"Reset"})]})]})}},6906:(e,t,n)=>{n.r(t),n.d(t,{VSCodeInstallation:()=>l});var i=n(5865),s=n(5721),r=n(1322),o=n(8569),a=(n(5043),n(579));function l(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{variant:"h5",component:"h2",gutterBottom:!0,children:"Installing Visual Studio Code and Setting Up Python"}),(0,a.jsx)(i.A,{variant:"body1",paragraph:!0,children:"Follow these steps to install Visual Studio Code (VSCode) and set up your Python environment."}),(0,a.jsx)(i.A,{variant:"h6",component:"h3",gutterBottom:!0,children:"Step 1: Install Visual Studio Code"}),(0,a.jsxs)(s.A,{children:[(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"1. Go to the Visual Studio Code website: https://code.visualstudio.com/"})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"2. Click on the 'Download' button for your operating system (Windows, macOS, or Linux)."})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"3. Run the downloaded installer and follow the installation instructions."})})]}),(0,a.jsx)(i.A,{variant:"h6",component:"h3",gutterBottom:!0,children:"Step 2: Install Python"}),(0,a.jsxs)(s.A,{children:[(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"1. Go to the Python website: https://www.python.org/"})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"2. Click on the 'Downloads' button and select the version for your operating system."})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"3. Run the downloaded installer and follow the installation instructions. Make sure to check the option to add Python to your PATH during installation."})})]}),(0,a.jsx)(i.A,{variant:"h6",component:"h3",gutterBottom:!0,children:"Step 3: Set Up VSCode for Python Development"}),(0,a.jsxs)(s.A,{children:[(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"1. Open Visual Studio Code."})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`."})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"3. In the Extensions view, search for 'Python' and install the official Python extension by Microsoft."})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"4. After the installation, you may need to reload VSCode."})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"5. Open the Command Palette by pressing `Ctrl+Shift+P` and type 'Python: Select Interpreter'. Choose the Python interpreter that you installed in Step 2."})}),(0,a.jsx)(r.Ay,{children:(0,a.jsx)(o.A,{primary:"6. Create a new Python file and start coding!"})})]}),(0,a.jsx)(i.A,{variant:"body1",paragraph:!0,children:"With these steps, you should have a fully functional Python development environment set up in Visual Studio Code."})]})}},8674:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(5043);var i=n(9252),s=n(6446),r=n(5865),o=n(5721),a=n(1322),l=n(8569),c=n(4493),d=n(2110),h=n(6494),u=n(7600),x=n(1906),j=n(8903),m=n(5475),A=n(49),p=n(6906),y=n(579);const v=[{id:"lecture1",text:"Lecture 1: Variables in Python",subObjectives:[{id:"lecture1Content",text:"Read Lecture 1",route:"/week1/lecture1"},{id:"lecture1Questionnaire",text:"Complete Questionnaire",route:"/week1/lecture1/questionnaire"}]},{id:"lecture2",text:"Lecture 2: Control Structures",subObjectives:[{id:"lecture2Content",text:"Read Lecture 2",route:"/week1/lecture2"},{id:"lecture2Questionnaire",text:"Complete Questionnaire",route:"/week1/lecture2/questionnaire"}]},{id:"lecture3",text:"Lecture 3: Data Structures",subObjectives:[{id:"lecture3Content",text:"Read Lecture 3",route:"/week1/lecture3"},{id:"lecture3Questionnaire",text:"Complete Questionnaire",route:"/week1/lecture3/questionnaire"}]},{id:"lecture4",text:"Lecture 4: Naming Conventions for Variables",subObjectives:[{id:"lecture4Content",text:"Read Lecture 4",route:"/week1/lecture4"},{id:"lecture4Questionnaire",text:"Complete Questionnaire",route:"/week1/lecture4/questionnaire"}]},{id:"assignment1",text:"Week 1 Assignment",subObjectives:[{id:"assignment1Instructions",text:"Read Assignment Instructions",route:"/week1/assignment/instructions"}]}],b=()=>(0,y.jsx)(i.A,{maxWidth:"md",children:(0,y.jsxs)(s.A,{my:4,children:[(0,y.jsx)(r.A,{variant:"h3",component:"h1",gutterBottom:!0,children:"Week 1: Refresher on Basics and Simple Planet Generation"}),(0,y.jsx)(s.A,{sx:{position:"fixed",top:"250px",right:"20px",width:"300px",height:"90vh",overflowX:"hidden"},children:(0,y.jsx)(A.A,{objectives:v})}),(0,y.jsx)(j.Ay,{container:!0,my:4,children:(0,y.jsxs)(j.Ay,{xs:8,children:[(0,y.jsx)(r.A,{variant:"h4",component:"h2",gutterBottom:!0,children:"Objectives"}),(0,y.jsx)(r.A,{variant:"h6",component:"h3",gutterBottom:!0,children:"Learning Objectives"}),(0,y.jsxs)(o.A,{children:[(0,y.jsx)(a.Ay,{children:(0,y.jsx)(l.A,{primary:"Review Python basics: variables, data types, and basic operations"})}),(0,y.jsx)(a.Ay,{children:(0,y.jsx)(l.A,{primary:"Control structures: conditionals and loops"})}),(0,y.jsx)(a.Ay,{children:(0,y.jsx)(l.A,{primary:"Basic data structures: lists and dictionaries"})})]}),(0,y.jsx)(r.A,{variant:"h6",component:"h3",gutterBottom:!0,children:"Coding Objectives"}),(0,y.jsxs)(o.A,{children:[(0,y.jsx)(a.Ay,{children:(0,y.jsx)(l.A,{primary:"Implement basic procedural planet generation"})}),(0,y.jsx)(a.Ay,{children:(0,y.jsx)(l.A,{primary:"Create a list of planets with random attributes"})})]}),(0,y.jsx)(r.A,{variant:"h6",component:"h3",gutterBottom:!0,children:"Activities"}),(0,y.jsxs)(r.A,{variant:"body1",paragraph:!0,children:[(0,y.jsx)("strong",{children:"Lecture:"})," Review of Python basics, conditionals, loops, and data structures."]}),(0,y.jsxs)(r.A,{variant:"body1",paragraph:!0,children:[(0,y.jsx)("strong",{children:"Assignment:"})," Create a list of planets with randomly generated attributes and print their details."]})]})}),(0,y.jsxs)(s.A,{my:4,children:[(0,y.jsx)(c.A,{}),(0,y.jsx)(r.A,{variant:"h4",component:"h2",gutterBottom:!0,my:2,children:"Lectures"}),(0,y.jsxs)(j.Ay,{container:!0,spacing:4,children:[(0,y.jsx)(j.Ay,{item:!0,xs:12,md:4,children:(0,y.jsxs)(d.A,{children:[(0,y.jsxs)(h.A,{children:[(0,y.jsx)(r.A,{variant:"h5",component:"h3",children:"Lecture 1: Variables in Python"}),(0,y.jsx)(r.A,{variant:"body2",component:"p",children:"Learn about different types of variables in Python."})]}),(0,y.jsx)(u.A,{children:(0,y.jsx)(x.A,{size:"small",component:m.N_,to:"/week1/lecture1",children:"Go to Lecture"})})]})}),(0,y.jsx)(j.Ay,{item:!0,xs:12,md:4,children:(0,y.jsxs)(d.A,{children:[(0,y.jsxs)(h.A,{children:[(0,y.jsx)(r.A,{variant:"h5",component:"h3",children:"Lecture 2: Control Structures"}),(0,y.jsx)(r.A,{variant:"body2",component:"p",children:"Understand conditionals and loops in Python."})]}),(0,y.jsx)(u.A,{children:(0,y.jsx)(x.A,{size:"small",component:m.N_,to:"/week1/lecture2",children:"Go to Lecture"})})]})}),(0,y.jsx)(j.Ay,{item:!0,xs:12,md:4,children:(0,y.jsxs)(d.A,{children:[(0,y.jsxs)(h.A,{children:[(0,y.jsx)(r.A,{variant:"h5",component:"h3",children:"Lecture 3: Data Structures"}),(0,y.jsx)(r.A,{variant:"body2",component:"p",children:"Learn about lists and dictionaries in Python."})]}),(0,y.jsx)(u.A,{children:(0,y.jsx)(x.A,{size:"small",component:m.N_,to:"/week1/lecture3",children:"Go to Lecture"})})]})}),(0,y.jsx)(j.Ay,{item:!0,xs:12,md:4,children:(0,y.jsxs)(d.A,{children:[(0,y.jsxs)(h.A,{children:[(0,y.jsx)(r.A,{variant:"h5",component:"h3",children:"Lecture 4: Naming Conventions for Variables"}),(0,y.jsx)(r.A,{variant:"body2",component:"p",children:"Learn about basics of Clean Code and naming conventions."})]}),(0,y.jsx)(u.A,{children:(0,y.jsx)(x.A,{size:"small",component:m.N_,to:"/week1/lecture4",children:"Go to Lecture"})})]})})]})]}),(0,y.jsx)(c.A,{}),(0,y.jsx)(p.VSCodeInstallation,{}),(0,y.jsxs)(s.A,{my:4,children:[(0,y.jsx)(c.A,{}),(0,y.jsx)(r.A,{variant:"h4",component:"h2",gutterBottom:!0,my:2,children:"Assignments"}),(0,y.jsx)(x.A,{variant:"contained",color:"primary",component:m.N_,to:"/week1/assignment/instructions",children:"View Assignment Instructions"})]})]})})}}]);
//# sourceMappingURL=8674.783a6ceb.chunk.js.map