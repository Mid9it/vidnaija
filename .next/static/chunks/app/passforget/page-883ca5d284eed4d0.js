(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{2431:function(){},570:function(e,t,s){Promise.resolve().then(s.bind(s,9373))},9515:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=()=>(0,r.jsxs)("div",{className:" w-[100vw] h-[100vh] flex justify-center items-center fixed z-50 bg-[#03091A] ",children:[(0,r.jsx)("img",{src:"/logos.png",className:" w-12 sm:w-24  mb-20 absolute top-40"}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:" w-20 h-20 rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center",children:(0,r.jsx)("div",{className:" w-12 h-12 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin"})})})]})},9373:function(e,t,s){"use strict";s.r(t);var r=s(7437),i=s(6230),l=s(2265),a=s(9515),n=s(5691),d=s(8530);t.default=()=>{let e=(0,d.tv)(),[t,s]=(0,l.useState)(!1),c=n.Ry({email:n.Z_().email().label("Email").max(150).required()}),[o,m]=(0,l.useState)(!1),[u,b]=(0,l.useState)("");return(0,r.jsx)("main",{className:" fixed w-full z-50 h-[100vh] flex justify-center items-center  bg-[#03091A]",children:t?(0,r.jsx)(a.Z,{}):(0,r.jsx)("div",{children:(0,r.jsx)(i.J9,{initialValues:{email:""},validationSchema:c,onSubmit:async(e,t)=>{let{}=t;s(!0);let r=await fetch("https://vidnaija-backend.fly.dev/password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),i=await r.json();i.auth&&(b(i.mgs),m(i.auth),s(!1))},children:t=>(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("h1",{className:" text-white font-bold text-2xl mb-5",children:"ENTER EMAIL"}),o&&(0,r.jsx)("h1",{className:" bg-blue-500 px-4 py-2 font-bold text-white mb-3",children:u}),(0,r.jsx)("div",{className:" text-red-500 text-sm",children:t.touched.email&&t.errors.email}),(0,r.jsx)("input",{type:"email",value:t.values.email,placeholder:"EMAIL",className:"w-full sm:w-96 h-9 px-3 mb-3 bg-transparent border-[1px] border-gray-200 border-opacity-25",onChange:t.handleChange("email")}),(0,r.jsx)("div",{className:" flex justify-center mb-10 ",children:(0,r.jsx)("input",{className:" px-20 py-2 hover:bg-red-700 bg-red-500 text-white font-bold cursor-pointer",type:"submit",onClick:t.handleSubmit,value:"SUBMIT"})}),(0,r.jsx)("div",{className:" flex justify-center mb-10 font-bold text-white px-2 py-2 bg-blue-500  cursor-pointer",onClick:()=>e.push("/"),children:(0,r.jsx)("p",{children:"GO HOME"})})]})})})})}}},function(e){e.O(0,[35,530,691,230,971,938,744],function(){return e(e.s=570)}),_N_E=e.O()}]);