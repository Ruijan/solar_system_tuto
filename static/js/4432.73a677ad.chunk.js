"use strict";(self.webpackChunksolar_system=self.webpackChunksolar_system||[]).push([[4432],{7074:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(5043),o=n(9252),s=n(6446),i=n(5865),a=n(2258),l=n(3827),c=n(7972),u=n(8577),h=n(4791),d=n(1353),m=n(1906),p=n(1021),b=n(579);const f=e=>{let{questions:t,onSuccess:n}=e;const[f,x]=(0,r.useState)({}),[w,g]=(0,r.useState)(!1),[T,y]=(0,r.useState)(!1);return(0,b.jsx)(o.A,{maxWidth:"md",children:(0,b.jsxs)(s.A,{my:4,children:[(0,b.jsx)(i.A,{variant:"h4",component:"h1",gutterBottom:!0,children:"Lecture Questionnaire"}),t.map(((e,t)=>(0,b.jsxs)(s.A,{my:2,children:[(0,b.jsxs)(a.A,{component:"fieldset",children:[(0,b.jsx)(l.A,{component:"legend",children:e.question}),e.code&&(0,b.jsx)(p.Rc,{text:e.code,language:"python",theme:p.f$,codeBlock:!0}),(0,b.jsx)(c.A,{name:"question-".concat(t),value:f[t]||"",onChange:e=>{return n=t,r=e.target.value,void x({...f,[n]:r});var n,r},children:e.options.map(((e,t)=>(0,b.jsx)(u.A,{value:e,control:(0,b.jsx)(h.A,{}),label:e},t)))})]}),w&&(0,b.jsx)(b.Fragment,{children:f[t]===e.answer?(0,b.jsx)(d.A,{severity:"success",children:"Correct"}):(0,b.jsx)(d.A,{severity:"error",children:e.explanation[f[t]]})})]},t))),!T&&(0,b.jsx)(m.A,{variant:"contained",color:"primary",onClick:()=>{g(!0);const e=t.every(((e,t)=>f[t]===e.answer));y(e)},children:"Submit"}),w&&T&&(0,b.jsx)(m.A,{variant:"contained",color:"secondary",onClick:n,style:{marginTop:"16px"},children:"Continue"})]})})}},4432:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});n(5043);var r=n(7074),o=n(3216),s=n(579);const i=[{question:"1. What is the output of the following list comprehension?",code:"numbers = [1, 2, 3, 4]\nsquared = [x**2 for x in numbers]\nprint(squared)",options:["[1, 4, 9, 16]","[1, 8, 27, 64]","[2, 4, 6, 8]","[1, 2, 3, 4]"],answer:"[1, 4, 9, 16]",explanation:{"[1, 4, 9, 16]":"Correct. The list comprehension squares each number in the list.","[1, 8, 27, 64]":"Incorrect. These are the cubes of the numbers.","[2, 4, 6, 8]":"Incorrect. These are the numbers multiplied by 2.","[1, 2, 3, 4]":"Incorrect. These are the original numbers."}},{question:"2. Which of the following is the correct syntax for a lambda function that multiplies a number by 3?",options:["lambda x: x * 3","lambda x: x ** 3","lambda x: x + 3","lambda x, y: x * y"],answer:"lambda x: x * 3",explanation:{"lambda x: x * 3":"Correct. This lambda function multiplies its input by 3.","lambda x: x ** 3":"Incorrect. This lambda function cubes its input.","lambda x: x + 3":"Incorrect. This lambda function adds 3 to its input.","lambda x, y: x * y":"Incorrect. This lambda function multiplies two inputs together."}},{question:"3. What will be the output of the following code?",code:"numbers = [1, 2, 3, 4]\nfiltered = list(filter(lambda x: x % 2 == 0, numbers))\nprint(filtered)",options:["[1, 3]","[2, 4]","[1, 2, 3, 4]","[]"],answer:"[2, 4]",explanation:{"[1, 3]":"Incorrect. These are the odd numbers.","[2, 4]":"Correct. The filter function keeps only the even numbers.","[1, 2, 3, 4]":"Incorrect. This would be the output without any filtering.","[]":"Incorrect. The list is not empty."}},{question:"4. Identify the error in the following code:",code:"numbers = [1, 2, 3, 4]\nresult = map(lambda x: x * 2, numbers)\nprint(result)",options:["The map function should be wrapped in list()","Lambda functions cannot be used with map","There is no error","The print function is incorrect"],answer:"The map function should be wrapped in list()",explanation:{"The map function should be wrapped in list()":"Correct. map() returns an iterator, so we need to convert it to a list.","Lambda functions cannot be used with map":"Incorrect. Lambda functions can be used with map.","There is no error":"Incorrect. There is an issue with how the result is printed.","The print function is incorrect":"Incorrect. The print function itself is fine."}},{question:"5. What does the following list comprehension do?",code:"numbers = [1, 2, 3, 4, 5]\nresult = [x for x in numbers if x > 2]\nprint(result)",options:["Keeps numbers less than or equal to 2","Keeps numbers greater than 2","Squares the numbers","Doubles the numbers"],answer:"Keeps numbers greater than 2",explanation:{"Keeps numbers less than or equal to 2":"Incorrect. The comprehension keeps numbers greater than 2.","Keeps numbers greater than 2":"Correct. The comprehension filters the list to include only numbers greater than 2.","Squares the numbers":"Incorrect. The comprehension does not modify the numbers, only filters them.","Doubles the numbers":"Incorrect. The comprehension does not modify the numbers, only filters them."}},{question:"6. Which higher-order function would you use to apply a function to each item in a list and return a new list?",options:["filter()","reduce()","map()","sorted()"],answer:"map()",explanation:{"filter()":"Incorrect. filter() is used to filter items in a list based on a condition.","reduce()":"Incorrect. reduce() is used to reduce the items of a list to a single value.","map()":"Correct. map() applies a function to each item in a list and returns a new list.","sorted()":"Incorrect. sorted() is used to sort items in a list."}},{question:"7. What will be the output of the following code?",code:"words = ['hello', 'world']\ncapitalized = list(map(lambda x: x.upper(), words))\nprint(capitalized)\n        ",options:["['HELLO', 'WORLD']","['hello', 'world']","['Hello', 'World']","['HELLO', 'WORLD', 'hello', 'world']"],answer:"['HELLO', 'WORLD']",explanation:{"['HELLO', 'WORLD']":"Correct. The map function converts each word to uppercase.","['hello', 'world']":"Incorrect. This is the original list.","['Hello', 'World']":"Incorrect. The map function converts all characters to uppercase, not just the first letter.","['HELLO', 'WORLD', 'hello', 'world']":"Incorrect. The map function does not duplicate the list."}},{question:"8. Identify what is wrong with the following code:",code:"result = (lambda x, y: x + y)(2)\nprint(result)",options:["Nothing is wrong","The lambda function requires two arguments","The print function is incorrect","The lambda function is incorrect"],answer:"The lambda function requires two arguments",explanation:{"Nothing is wrong":"Incorrect. There is an issue with the number of arguments provided to the lambda function.","The lambda function requires two arguments":"Correct. The lambda function needs both x and y to be provided.","The print function is incorrect":"Incorrect. The print function is fine.","The lambda function is incorrect":"Incorrect. The lambda function syntax is correct, but it needs both arguments."}},{question:"9. What will be the output of the following code?",code:"numbers = [1, 2, 3, 4, 5]\nfiltered = [x for x in numbers if x % 2 == 0]\nprint(filtered)",options:["[1, 3, 5]","[2, 4]","[1, 2, 3, 4, 5]","[]"],answer:"[2, 4]",explanation:{"[1, 3, 5]":"Incorrect. These are the odd numbers.","[2, 4]":"Correct. The list comprehension filters to keep only even numbers.","[1, 2, 3, 4, 5]":"Incorrect. This is the original list.","[]":"Incorrect. The list is not empty, as it includes even numbers."}},{question:"10. What does the following code do?",code:"from functools import reduce\nnumbers = [1, 2, 3, 4]\nresult = reduce(lambda x, y: x * y, numbers)\nprint(result)",options:["Adds all numbers together","Multiplies all numbers together","Subtracts all numbers","Divides all numbers"],answer:"Multiplies all numbers together",explanation:{"Adds all numbers together":"Incorrect. The lambda function multiplies the numbers, not adds them.","Multiplies all numbers together":"Correct. reduce with lambda x, y: x * y multiplies all numbers in the list.","Subtracts all numbers":"Incorrect. The lambda function multiplies the numbers, not subtracts them.","Divides all numbers":"Incorrect. The lambda function multiplies the numbers, not divides them."}}],a=()=>{const e=(0,o.Zp)();return(0,s.jsx)(r.A,{questions:i,onSuccess:()=>{const t=JSON.parse(localStorage.getItem("completionStatus")||"{}");t.week2lecture3Questionnaire=!0,localStorage.setItem("completionStatus",JSON.stringify(t)),e("/week2/lecture4")}})}}}]);
//# sourceMappingURL=4432.73a677ad.chunk.js.map