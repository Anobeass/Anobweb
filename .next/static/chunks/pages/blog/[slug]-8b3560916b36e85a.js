(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{49937:(e,l,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return t(54052)}])},54052:(e,l,t)=>{"use strict";t.r(l),t.d(l,{__N_SSG:()=>T,default:()=>S});var s=t(85893),a=t(67294),r=t(30471),c=t(31758),n=t(77205),i=t(84283);let d={code(e){let{node:l,inline:t,className:a,children:r,...c}=e,d=/language-(\w+)/.exec(a||"");return!t&&d?(0,s.jsx)(n.Z,{style:i.cL,language:d[1],PreTag:"div",...c,children:String(r).replace(/\n$/,"")}):(0,s.jsx)("code",{className:a,...c,children:r})}},o=e=>{let{content:l}=e;return(0,s.jsx)(c.D,{components:d,className:"markdown-class",children:l})};var x=t(26449),m=t(9008),h=t.n(m),u=t(57517),j=t(21023),g=t(75625),v=t(9198),N=t.n(v),p=t(93463),w=t(82010);t(58837);let f=e=>{let{post:l,close:t,refresh:r}=e,{theme:c}=(0,w.F)(),[n,i]=(0,a.useState)("BLOGDETAILS"),[d,o]=(0,a.useState)(l.content),[x,m]=(0,a.useState)({date:l.date,title:l.title,tagline:l.tagline,preview:l.preview,image:l.image}),h=async()=>{alert("This thing only works in development mode.")};return(0,s.jsx)("div",{className:"fixed z-10 w-screen h-screen overflow-auto top-0 flex flex-col items-center ".concat("dark"===c?"bg-black":"bg-white"),children:(0,s.jsxs)("div",{className:"container my-20",children:[(0,s.jsx)("div",{className:"mt-10",children:(0,s.jsxs)("div",{className:"z-10 sticky top-12",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("h1",{className:"text-4xl",children:x.title}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(g.Z,{onClick:h,type:"primary",children:"Save"}),(0,s.jsx)(g.Z,{onClick:t,children:"Close"})]})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(g.Z,{onClick:()=>i("BLOGDETAILS"),type:"BLOGDETAILS"===n&&"primary",children:"Blog Details"}),(0,s.jsx)(g.Z,{onClick:()=>i("CONTENT"),type:"CONTENT"===n&&"primary",children:"Content"})]})]})}),"BLOGDETAILS"===n&&(0,s.jsxs)("div",{className:"mt-10",children:[(0,s.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,s.jsx)("label",{className:"w-full text-sx opacity-50",children:"Date"}),(0,s.jsx)(N(),{selected:new Date(x.date),className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",onChange:e=>{m({...x,date:e.toISOString()})}})]}),(0,s.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,s.jsx)("label",{className:"w-full text-sx opacity-50",children:"Title"}),(0,s.jsx)("input",{value:x.title,onChange:e=>m({...x,title:e.target.value}),className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,s.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,s.jsx)("label",{className:"w-full text-sx opacity-50",children:"Tagline"}),(0,s.jsx)("input",{value:x.tagline,onChange:e=>m({...x,tagline:e.target.value}),className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,s.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,s.jsx)("label",{className:"w-full text-sx opacity-50",children:"preview (SEO)"}),(0,s.jsx)("textarea",{value:x.preview,onChange:e=>m({...x,preview:e.target.value}),className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,s.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,s.jsx)("label",{className:"w-full text-sx opacity-50",children:"Image"}),(0,s.jsx)("input",{value:x.image,onChange:e=>m({...x,image:e.target.value}),className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]})]}),"CONTENT"===n&&(0,s.jsx)("div",{className:"mt-10",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("label",{className:"w-full text-sx opacity-50",children:"Content"}),(0,s.jsx)(p.Z,{className:"w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl",value:d,onChange:e=>o(e.target.value)})]})})]})})};var b=t(11163),y=t(56211),C=t(69954),T=!0;let S=e=>{let{post:l}=e,[t,c]=(0,a.useState)(!1),n=(0,a.useRef)(),i=(0,a.useRef)(),d=(0,b.useRouter)();return(0,u.LI)(()=>{(0,j.E)([n.current,i.current],{y:30},{y:0})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h(),{children:[(0,s.jsx)("title",{children:"Blog - "+l.title}),(0,s.jsx)("meta",{name:"description",content:l.preview})]}),C.showCursor&&(0,s.jsx)(y.Z,{}),(0,s.jsxs)("div",{className:"container mx-auto mt-10 ".concat(C.showCursor&&"cursor-none"),children:[(0,s.jsx)(r.Z,{isBlog:!0}),(0,s.jsxs)("div",{className:"mt-10 flex flex-col",children:[(0,s.jsx)("img",{className:"w-full h-96 rounded-lg shadow-lg object-cover",src:l.image,alt:l.title}),(0,s.jsx)("h1",{ref:n,className:"mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold",children:l.title}),(0,s.jsx)("h2",{ref:i,className:"mt-2 text-xl max-w-4xl text-darkgray opacity-50",children:l.tagline})]}),(0,s.jsx)(o,{content:l.content}),(0,s.jsx)(x.Z,{})]}),!1,t&&(0,s.jsx)(f,{post:l,close:()=>c(!1),refresh:()=>d.reload(window.location.pathname)})]})}}},e=>{var l=l=>e(e.s=l);e.O(0,[802,827,996,450,932,888,774,179],()=>l(49937)),_N_E=e.O()}]);