(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{2431:function(){},1665:function(e,s,r){Promise.resolve().then(r.bind(r,4337))},9520:function(e,s,r){"use strict";var t=r(7437),a=r(2265),l=r(8553);s.Z=e=>{let{src:s}=e,[r,n]=(0,a.useState)("/profileimage/1"),i=()=>{"1"==s?n("/profileimage/2.png"):"2"==s?n("/profileimage/3.png"):"3"==s?n("/profileimage/4.png"):"4"==s?n("/profileimage/5.png"):"5"==s?n("/profileimage/6.png"):"6"==s?n("/profileimage/7.png"):"7"==s?n("/profileimage/8.png"):"8"==s?n("/profileimage/9.png"):"9"==s?n("/profileimage/10.png"):"10"==s?n("/profileimage/11.png"):"11"==s?n("/profileimage/12.png"):"12"==s?n("/profileimage/13.png"):"13"==s?n("/profileimage/14.png"):"14"==s?n("/profileimage/15.png"):"15"==s?n("/profileimage/16.png"):"16"==s?n("/profileimage/17.png"):"17"==s?n("/profileimage/18.png"):"18"==s?n("/profileimage/19.png"):"19"==s?n("/profileimage/20.png"):"20"==s?n("/profileimage/21.png"):"21"==s?n("/profileimage/22.png"):"22"==s?n("/profileimage/23.png"):"001"==s?n("/profileimage/001.png"):n("/profileimage/1.png")};return(0,a.useEffect)(()=>{i()},[]),(0,t.jsx)(l.LazyLoadImage,{src:r,className:" border-black border-[1px] rounded-full"})}},9515:function(e,s,r){"use strict";var t=r(7437);r(2265),s.Z=()=>(0,t.jsxs)("div",{className:" w-[100vw] h-[100vh] flex justify-center items-center fixed z-50 bg-[#03091A] ",children:[(0,t.jsx)("img",{src:"/logos.png",className:" w-12 sm:w-24  mb-20 absolute top-40"}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:" w-20 h-20 rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center",children:(0,t.jsx)("div",{className:" w-12 h-12 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin"})})})]})},4337:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return x}});var t=r(7437),a=r(9520),l=r(9515),n=r(2003),i=r(8683),o=r(2265),c=e=>{let{no:s}=e,[r,a]=(0,o.useState)(),[l,n]=(0,o.useState)(),i=()=>{s<10?(a("yellow"),n("EXPLORER")):s<30&&s>9?(a("purple"),n("KNIGHT")):s<80&&s>29?(a("blue"),n("LEGEND")):s<150&&s>79?(a("green"),n("IMMORTAL")):s<300&&s>149?(a("cyan"),n("ANGEL")):s<500&&s>299?(a("orange"),n("KNIGHT ANGEL")):(a("red"),n("DRAGON"))};return(0,o.useEffect)(()=>{i()},[]),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:" px-4 py-2 font-bold text-black",style:{backgroundColor:r},children:l})})},d=r(6230),m=r(3159),u=r(8530),p=r(5691),x=e=>{let{params:s}=e,r=p.Ry({user_name:p.Z_().min(1).max(15).required().label("UserName")}),x=p.Ry({cpassword:p.Z_().min(1).max(15).required().label("Current Password"),npassword:p.Z_().min(1).max(15).required().label("New Password"),copassword:p.Z_().oneOf([p.iH("npassword"),null],"Password must match").required().label("New Password Comfirmation")}),f=(0,u.tv)(),h=null==s?void 0:s.id,[g,b]=(0,o.useState)(!0),[j,w]=(0,o.useState)(),[v,y]=(0,o.useState)(!1),[N,S]=(0,o.useState)(),[k,C]=(0,o.useState)(),[O,E]=(0,o.useState)(""),_=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],P=async()=>{let e=await localStorage.getItem("data"),s=await JSON.parse(e);if(!s)return f.push("/");let r=s.token;try{let e=await fetch("https://vidnaija-backend.fly.dev/getUser/".concat(h),{method:"GET",headers:{"auth-token":r}}),s=await e.json();s.auth&&(b(!1),C(s.data),w(s.data.profile_image))}catch(e){return f.push("/")}};return(0,o.useEffect)(()=>{P()},[]),(0,t.jsx)("main",{className:"",children:g?(0,t.jsx)(l.Z,{}):(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("div",{children:(0,t.jsx)(n.Z,{})}),(0,t.jsx)("div",{className:" relative z-30 w-full flex justify-center pt-40",children:(0,t.jsxs)("div",{className:" w-[95%] lg:w-[50%]",children:[(0,t.jsxs)("div",{className:"w-full flex  justify-center items-center pb-40",children:[(0,t.jsx)("div",{className:" w-20 sm:w-32 ",children:(0,t.jsx)(a.Z,{src:k.profile_image})}),(0,t.jsxs)("div",{className:" flex  flex-col items-center ml-5",children:[(0,t.jsx)("p",{className:" text-white text-center font-bold text-2xl",children:k.user_name}),(0,t.jsxs)("div",{className:" flex justify-between",children:[(0,t.jsx)(i.Z,{no:k.rank}),(0,t.jsx)(i.Z,{no:k.rank}),(0,t.jsx)(i.Z,{no:k.rank}),(0,t.jsx)(i.Z,{no:k.rank})]}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)(c,{no:k.rank})})]})]}),(0,t.jsxs)("div",{className:" border-gray-200 mb-20  border-[1px] p-5 border-opacity-10",children:[(0,t.jsx)(d.J9,{initialValues:{user_name:k.user_name},validationSchema:r,onSubmit:async e=>{b(!0);let r={profile_image:j,...e},t=localStorage.getItem("data");if(!t)return f.push("/");let a=JSON.parse(t).token,l=await fetch("https://vidnaija-backend.fly.dev/pushUsers/".concat(s.id),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":a},body:JSON.stringify(r)}),n=await l.json();n.update?window.location.reload():(E(null==n?void 0:n.mgs),b(!1))},children:e=>(0,t.jsx)("form",{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsx)("h1",{className:" font-bold text-xl mb-8 text-white",children:"Change User:"})}),(0,t.jsx)("div",{className:" text-red-500 mb-2",children:O}),(0,t.jsx)("div",{className:" text-red-500 text-sm",children:e.touched.user_name&&e.errors.user_name}),(0,t.jsxs)("div",{className:" flex flex-col sm:flex-row justify-between items-center mb-10",children:[(0,t.jsx)("p",{children:"USER_NAME: "}),(0,t.jsx)("div",{className:" w-full",children:(0,t.jsx)("input",{type:"text",placeholder:"Change Username",className:" w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25",value:e.values.user_name,onChange:e.handleChange("user_name")})})]}),(0,t.jsx)("div",{children:(0,t.jsx)("h1",{className:" font-bold text-xl mb-5 text-white",children:"Change Avatar:"})}),(0,t.jsx)("div",{className:" flex flex-wrap mb-5",children:_.map((e,s)=>(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:" sm:mr-10  mb-5  relative w-16 rounded-full overflow-hidden group",onClick:()=>w(e),children:[(0,t.jsx)(a.Z,{src:e}),j==e&&(0,t.jsx)("div",{className:"absolute top-0 bg-opacity-80 w-full h-full z-40 bg-black cursor-pointer flex justify-center items-center text-yellow-500 text-xl ",children:(0,t.jsx)(m.l_A,{})}),(0,t.jsx)("div",{className:" absolute top-0 bg-opacity-0 group-hover:bg-opacity-60 w-full h-full z-20 bg-black "})]})},s))}),(0,t.jsxs)("div",{className:" flex justify-center sm:justify-end items-center mb-20",children:[" ",(0,t.jsx)("div",{children:(0,t.jsx)("input",{type:"submit",className:" bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold cursor-pointer",value:"SUBMIT",onClick:e.handleSubmit})})]})]})})}),(0,t.jsx)(d.J9,{initialValues:{cpassword:"",npassword:"",copassword:""},validationSchema:x,onSubmit:async e=>{let r=localStorage.getItem("data");if(!r)return f.push("/");let t=JSON.parse(r).token,a=await fetch("https://vidnaija-backend.fly.dev/changePass/".concat(s.id),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":t},body:JSON.stringify(e)}),l=await a.json();l.update?window.location.reload():(S(l.mgs),y(!0))},children:e=>(0,t.jsxs)("main",{className:" w-full",children:[(0,t.jsx)("div",{children:(0,t.jsx)("h1",{className:" font-bold text-xl mb-5 text-white",children:"Change Password:"})}),(0,t.jsxs)("div",{className:"h-5 flex justify-center mb-5",children:[v&&(0,t.jsx)("p",{className:" text-red-500",children:N})," "]}),(0,t.jsxs)("div",{className:" flex flex-col sm:flex-row w-full justify-between items-center ",children:[(0,t.jsx)("p",{children:"CURRENT PASSWORD: "}),(0,t.jsx)("div",{className:"w-full",children:(0,t.jsx)("input",{type:"password",placeholder:"* * * * *",className:"w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25",value:e.values.cpassword,onChange:e.handleChange("cpassword")})})]}),(0,t.jsx)("div",{className:" text-red-500 text-sm mb-10",children:e.touched.cpassword&&e.errors.cpassword}),(0,t.jsxs)("div",{className:" flex flex-col sm:flex-row justify-between items-center ",children:[(0,t.jsx)("p",{children:"NEW PASSWORD: "}),(0,t.jsx)("div",{className:"w-full",children:(0,t.jsx)("input",{type:"password",placeholder:"* * * * *",className:"w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25",value:e.values.npassword,onChange:e.handleChange("npassword")})})]}),(0,t.jsx)("div",{className:" text-red-500 text-sm mb-10",children:e.touched.npassword&&e.errors.npassword}),(0,t.jsxs)("div",{className:" flex flex-col sm:flex-row  justify-between items-center ",children:[(0,t.jsx)("p",{children:"COMFIRM PASSWORD: "}),(0,t.jsx)("div",{className:"w-full",children:(0,t.jsx)("input",{type:"password",placeholder:"* * * * *",className:"w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25",value:e.values.copassword,onChange:e.handleChange("copassword")})})]}),(0,t.jsx)("div",{className:" text-red-500 text-sm mb-10",children:e.touched.copassword&&e.errors.copassword}),(0,t.jsxs)("div",{className:" flex flex-col sm:flex-row justify-end items-center mb-20",children:[" ",(0,t.jsx)("div",{children:(0,t.jsx)("input",{type:"submit",className:" bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold cursor-pointer",value:"SUBMIT",onClick:e.handleSubmit})})]})]})}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h1",{className:" font-bold text-xl mb-10 text-white",children:"RATING:"}),(0,t.jsx)("div",{className:" flex flex-wrap mb-20 justify-between sm:justify-center ",children:[1,29,55,80,150,300,500].map((e,s)=>(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:" sm:mr-20  mb-10 cursor-pointer  group ",children:(0,t.jsx)(c,{no:e})})},s))})]})]})]})})]})})}},2003:function(e,s,r){"use strict";var t=r(7437);r(2265),s.Z=()=>(0,t.jsx)("div",{className:" top-0 bg-[url('/hero-bg.jpg')] absolute z-10  h-96 w-[100vw]  text-[#A5AFBE] flex justify-center  bg-cover bg-no-repeat ",children:(0,t.jsx)("div",{className:" absolute w-full h-full z-10 bg-black bg-opacity-80"})})},8683:function(e,s,r){"use strict";var t=r(7437),a=r(2265),l=r(3159);s.Z=e=>{let{no:s}=e,[r,n]=(0,a.useState)("yellow"),i=()=>{s<10?n("yellow"):s<30&&s>9?n("purple"):s<80&&s>29?n("blue"):s<150&&s>79?n("green"):s<300&&s>149?n("cyan"):s<500&&s>299?n("orange"):n("red")};return(0,a.useEffect)(()=>{i()},[]),(0,t.jsx)("main",{children:(0,t.jsx)(l.QJe,{style:{color:r}})})}},1172:function(e,s,r){"use strict";r.d(s,{w_:function(){return o}});var t=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=t.createContext&&t.createContext(a),n=function(){return(n=Object.assign||function(e){for(var s,r=1,t=arguments.length;r<t;r++)for(var a in s=arguments[r])Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);return e}).apply(this,arguments)},i=function(e,s){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>s.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)0>s.indexOf(t[a])&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function o(e){return function(s){return t.createElement(c,n({attr:n({},e.attr)},s),function e(s){return s&&s.map(function(s,r){return t.createElement(s.tag,n({key:r},s.attr),e(s.child))})}(e.child))}}function c(e){var s=function(s){var r,a=e.attr,l=e.size,o=e.title,c=i(e,["attr","size","title"]),d=l||s.size||"1em";return s.className&&(r=s.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,c,{className:r,style:n(n({color:e.color||s.color},s.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&t.createElement("title",null,o),e.children)};return void 0!==l?t.createElement(l.Consumer,null,function(e){return s(e)}):s(a)}}},function(e){e.O(0,[420,35,530,691,230,553,971,938,744],function(){return e(e.s=1665)}),_N_E=e.O()}]);