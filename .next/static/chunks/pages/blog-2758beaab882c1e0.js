(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{57286:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return s(91283)}])},21023:(e,t,s)=>{"use strict";s.d(t,{E:()=>n});var i=s(10990),a=s(25317);let n=(e,t,s)=>i.ZP.fromTo(e,{opacity:0,...t},{opacity:1,...s,stagger:.3,ease:a.Aq.easeOut})},75625:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var i=s(85893);s(67294);var a=s(82010),n=s(69954);let o=e=>{let{children:t,type:s,onClick:o,classes:l}=e,{theme:r}=(0,a.F)();return"primary"===s?(0,i.jsx)("button",{onClick:o,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark"===r?"bg-white text-black":"bg-black text-white","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ").concat(n.showCursor&&"cursor-none","  ").concat(l),children:t}):(0,i.jsx)("button",{onClick:o,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark"===r?"hover:bg-slate-600 text-white":"hover:bg-slate-100"," hover:scale-105 active:scale-100  tablet:first:ml-0  ").concat(n.showCursor&&"cursor-none"," ").concat(l," link"),children:t})}},56211:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i=s(85893),a=s(67294),n=s(93462);s(35175);var o=s(82010);let l=()=>{let e=(0,o.F)(),[t,s]=(0,a.useState)();return(0,a.useEffect)(()=>{s(!0)},[]),(0,i.jsx)(i.Fragment,{children:t&&(0,i.jsx)(n.Z,{targets:[".link"],customClass:"custom-cursor",dimensions:30,fill:"dark"===e.theme?"#fff":"light"===e.theme?"#000":void 0,smoothness:{movement:.2,scale:.1,opacity:.2},targetOpacity:.5,targetScale:2})})}},30471:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var i=s(85893),a=s(28540),n=s(82010),o=s(11163),l=s(67294),r=s(75625),c=s(69954);let d=e=>{let{handleWorkScroll:t,handleAboutScroll:s,isBlog:d}=e,m=(0,o.useRouter)(),{theme:h,setTheme:u}=(0,n.F)(),[g,p]=(0,l.useState)(!1),{name:b,showBlog:x,showResume:f}=c;return(0,l.useEffect)(()=>{p(!0)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.J,{className:"block tablet:hidden mt-5 sticky top-0 bg-white shadow z-10",children:e=>{let{open:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,i.jsx)("h1",{onClick:()=>m.push("/"),className:"font-bold p-2 laptop:p-0 link text-xl",children:b}),(0,i.jsxs)("div",{className:"flex items-center p-4",children:[c.darkMode&&(0,i.jsx)(r.Z,{onClick:()=>u("dark"===h?"light":"dark"),children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})}),(0,i.jsx)(a.J.Button,{children:(0,i.jsx)("img",{className:"h-5",src:"/images/".concat(n?"light"===h?"cancel.svg":"cancel-white.svg":"dark"===h?"menu-white.svg":"menu.svg")})})]})]}),(0,i.jsx)(a.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("dark"===h?"bg-slate-800":"bg-white"," shadow-md rounded-md"),children:d?(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)(r.Z,{onClick:()=>m.push("/"),classes:"first:ml-1",children:"Home"}),x&&(0,i.jsx)(r.Z,{onClick:()=>m.push("/blog"),children:"Blog"}),f&&(0,i.jsx)(r.Z,{onClick:()=>m.push("/resume"),classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(r.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Contact"})]}):(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)(r.Z,{onClick:t,children:"Work"}),(0,i.jsx)(r.Z,{onClick:s,children:"About"}),x&&(0,i.jsx)(r.Z,{onClick:()=>m.push("/blog"),children:"Blog"}),f&&(0,i.jsx)(r.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Resume"}),(0,i.jsx)(r.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Contact"})]})})]})}}),(0,i.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===h&&"bg-white"," dark:text-white top-0 z-10 tablet:flex"),children:[(0,i.jsxs)("h1",{onClick:()=>m.push("/"),className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:[b,"."]}),d?(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(r.Z,{onClick:()=>m.push("/"),children:"Home"}),x&&(0,i.jsx)(r.Z,{onClick:()=>m.push("/blog"),children:"Blog"}),f&&(0,i.jsx)(r.Z,{onClick:()=>m.push("/resume"),classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(r.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Contact"}),g&&h&&c.darkMode&&(0,i.jsx)(r.Z,{onClick:()=>u("dark"===h?"light":"dark"),children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]}):(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(r.Z,{onClick:t,children:"Work"}),(0,i.jsx)(r.Z,{onClick:s,children:"About"}),x&&(0,i.jsx)(r.Z,{onClick:()=>m.push("/blog"),children:"Blog"}),f&&(0,i.jsx)(r.Z,{onClick:()=>m.push("/resume"),classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(r.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Contact"}),g&&h&&c.darkMode&&(0,i.jsx)(r.Z,{onClick:()=>u("dark"===h?"light":"dark"),children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]})]})]})}},91283:(e,t,s)=>{"use strict";s.r(t),s.d(t,{__N_SSG:()=>g,default:()=>p});var i=s(85893),a=s(9008),n=s.n(a),o=s(11163),l=s.n(o),r=s(67294),c=s(21023);s(75625);var d=s(56211),m=s(30471),h=s(69954),u=s(57517),g=!0;let p=e=>{let{posts:t}=e,s=(0,r.useRef)(h.showBlog),a=(0,r.useRef)(),g=(0,o.useRouter)(),[p,b]=(0,r.useState)(!1);return(0,u.LI)(()=>{(0,c.E)([a.current],{y:40,x:-10,transform:"scale(0.95) skew(10deg)"},{y:0,x:0,transform:"scale(1)"}),s.current?(0,c.E)([a.current],{y:30},{y:0}):g.push("/")},[]),(0,r.useEffect)(()=>{b(!0)},[]),s.current&&(0,i.jsxs)(i.Fragment,{children:[h.showCursor&&(0,i.jsx)(d.Z,{}),(0,i.jsx)(n(),{children:(0,i.jsx)("title",{children:"Blog"})}),(0,i.jsxs)("div",{className:"container mx-auto mb-10 ".concat(h.showCursor&&"cursor-none"),children:[(0,i.jsx)(m.Z,{isBlog:!0}),(0,i.jsxs)("div",{className:"mt-10",children:[(0,i.jsx)("h1",{ref:a,className:"mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full",children:"Blog."}),(0,i.jsx)("div",{className:"mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10",children:t&&t.map(e=>(0,i.jsxs)("div",{className:"cursor-pointer relative",onClick:()=>l().push("/blog/".concat(e.slug)),children:[(0,i.jsx)("img",{className:"w-full h-60 rounded-lg shadow-lg object-cover",src:e.image,alt:e.title}),(0,i.jsx)("h2",{className:"mt-5 text-4xl",children:e.title}),(0,i.jsx)("p",{className:"mt-2 opacity-50 text-lg",children:e.preview}),(0,i.jsx)("span",{className:"text-sm mt-5 opacity-25",children:(0,u.KO)(e.date)}),!1]},e.slug))})]})]}),!1]})}},57517:(e,t,s)=>{"use strict";s.d(t,{KO:()=>a,LI:()=>i});let i=s(67294).useLayoutEffect;function a(e){if(e){let t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}}},9008:(e,t,s)=>{e.exports=s(23867)},69954:e=>{"use strict";e.exports=JSON.parse('{"name":"Anobeass","headerTaglineOne":"Hello there!","headerTaglineTwo":"I\'m Goudy Gareb","headerTaglineThree":"Graphic Designer","headerTaglineFour":" based in Saudi Arabia, Riyadh.","showCursor":true,"showBlog":false,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Behance","link":"https://www.behance.net/GoudyGareb"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/goudygareb-anobeass/"},{"id":"3","title":"Pinterest","link":"https://www.pinterest.com/anobeass/"},{"id":"5","title":"Email","link":"anobeassale@gmail.com"},{"id":"34e539d6-d3e9-4ef3-9b97-2f90c3c19af3","title":"Instagram","link":"https://www.instagram.com/anobeass"},{"id":"05db60ba-9d35-43f5-8fdd-ba6a24f0ac7f","title":"Facebook","link":"https://www.facebook.com/Anobeass/"}],"projects":[{"id":"1","title":"Uqdat Visual identity | عقدة هوية بصرية","description":"Visual identity.","imageSrc":"https://cdn.discordapp.com/attachments/1294021635816427540/1302090521577128017/Untitled-1.png?ex=6726d9cc&is=6725884c&hm=c0159b2bfa6b56e40019b5d30e06d3b2f226e58e4b664da1a7d003ca3fee1d15&","url":"https://www.behance.net/gallery/209394847/Uqdat-Visual-identity-"},{"id":"2","title":"BOOKCOVER Foilo","description":"book covers design.","imageSrc":"https://cdn.discordapp.com/attachments/1294021635816427540/1302093577958068284/Coverfoilo_01.png?ex=6726dca4&is=67258b24&hm=ac04e217dc93cc9539c67b707e4e39468c22803499d5f570dfff0249e0cc126c&","url":"https://www.behance.net/gallery/208778285/CoverFoilo"}],"services":[{"id":"1","title":"Book Covers Designing","description":"We specialize in the creation and development of captivating book cover designs, with a strong focus on visually appealing and impactful aesthetics that bring stories to life."},{"id":"2","title":"Logo Designing","description":"We design unique logos that capture the essence of your brand, creating memorable and distinctive visuals that set your brand apart from competitors."},{"id":"3","title":"Visual identity","description":"We create comprehensive visual identities that encompass logo design, color palettes, typography, and other essential design elements, ensuring your brand communicates its values and stands out in the market."},{"id":"4","title":"Brand Strategy","description":"We craft comprehensive brand strategies and complete brand identities that define your brand\'s vision, mission, and values, along with its visual components. Our approach ensures a cohesive narrative and impactful presence that engages your audience and sets you apart in the marketplace."}],"aboutpara":"Graphic Designer with 5+ years of experience in book cover design, logo design, typography, thumbnails, visual identities, and social media posts. Skilled at creating impactful and effective visual content.","resume":{"tagline":"I\'m a Graphic Designer.","description":"Graphic Designer with 5+ years of experience in book cover design, logo design, typography, thumbnails, visual identities, and social media posts. Skilled at creating impactful and effective visual content.","experiences":[{"id":"1","dates":"July 2023 - July 2024","type":"Remotely","position":"Creative Director ","bullets":"at Arabic spring Team"},{"id":"d495c23b-4f65-479a-9b8a-cfbc1c089725","dates":"July 2022- July 2023","type":"Remotely","position":"Senior Graphic Designer ","bullets":"at DesignSolders Team"},{"id":"5c2db7db-5498-4107-b45c-74368ea6e424","dates":"December 2021- June 2022","type":"Remotely","position":"Junior Graphic Designer","bullets":"at Inspirationhall Team."}],"education":{"universityName":"Our expatriate children / High school","universityDate":"2022 - 2025, Riyadh","universityPara":"A specialized educational institution offering the Egyptian curriculum to the children of the Egyptian community in Saudi Arabia."},"languages":["Arabic ","English","Korean","German","French"],"frameworks":["Adobe Photoshop","Adobe Illustrator","Adobe InDesign","Adobe premiere","Figma","Microsoft Excel","Microsoft PowerPoint","Google Sheets","Canva"],"others":["Project Management","Team Leadership","Risk Assessment","Effective Communication","Time Management","Problem Solving","Decision Making","Quality Management","Process Improvement","Change Management","Negotiation Skills","Dedication to work","Willingness to learn and continuous improvement"]}}')}},e=>{var t=t=>e(e.s=t);e.O(0,[802,827,888,774,179],()=>t(57286)),_N_E=e.O()}]);