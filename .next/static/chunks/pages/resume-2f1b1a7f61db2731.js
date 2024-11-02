(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{61429:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return t(33253)}])},75625:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var i=t(85893);t(67294);var a=t(82010),l=t(69954);let n=e=>{let{children:s,type:t,onClick:n,classes:c}=e,{theme:o}=(0,a.F)();return"primary"===t?(0,i.jsx)("button",{onClick:n,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark"===o?"bg-white text-black":"bg-black text-white","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ").concat(l.showCursor&&"cursor-none","  ").concat(c),children:s}):(0,i.jsx)("button",{onClick:n,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark"===o?"hover:bg-slate-600 text-white":"hover:bg-slate-100"," hover:scale-105 active:scale-100  tablet:first:ml-0  ").concat(l.showCursor&&"cursor-none"," ").concat(c," link"),children:s})}},56211:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var i=t(85893),a=t(67294),l=t(93462);t(35175);var n=t(82010);let c=()=>{let e=(0,n.F)(),[s,t]=(0,a.useState)();return(0,a.useEffect)(()=>{t(!0)},[]),(0,i.jsx)(i.Fragment,{children:s&&(0,i.jsx)(l.Z,{targets:[".link"],customClass:"custom-cursor",dimensions:30,fill:"dark"===e.theme?"#fff":"light"===e.theme?"#000":void 0,smoothness:{movement:.2,scale:.1,opacity:.2},targetOpacity:.5,targetScale:2})})}},30471:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var i=t(85893),a=t(28540),l=t(82010),n=t(11163),c=t(67294),o=t(75625),r=t(69954);let d=e=>{let{handleWorkScroll:s,handleAboutScroll:t,isBlog:d}=e,m=(0,n.useRouter)(),{theme:h,setTheme:u}=(0,l.F)(),[p,g]=(0,c.useState)(!1),{name:x,showBlog:b,showResume:f}=r;return(0,c.useEffect)(()=>{g(!0)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.J,{className:"block tablet:hidden mt-5 sticky top-0 bg-white shadow z-10",children:e=>{let{open:l}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,i.jsx)("h1",{onClick:()=>m.push("/"),className:"font-bold p-2 laptop:p-0 link text-xl",children:x}),(0,i.jsxs)("div",{className:"flex items-center p-4",children:[r.darkMode&&(0,i.jsx)(o.Z,{onClick:()=>u("dark"===h?"light":"dark"),children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})}),(0,i.jsx)(a.J.Button,{children:(0,i.jsx)("img",{className:"h-5",src:"/images/".concat(l?"light"===h?"cancel.svg":"cancel-white.svg":"dark"===h?"menu-white.svg":"menu.svg")})})]})]}),(0,i.jsx)(a.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("dark"===h?"bg-slate-800":"bg-white"," shadow-md rounded-md"),children:d?(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)(o.Z,{onClick:()=>m.push("/"),classes:"first:ml-1",children:"Home"}),b&&(0,i.jsx)(o.Z,{onClick:()=>m.push("/blog"),children:"Blog"}),f&&(0,i.jsx)(o.Z,{onClick:()=>m.push("/resume"),classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(o.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Contact"})]}):(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)(o.Z,{onClick:s,children:"Work"}),(0,i.jsx)(o.Z,{onClick:t,children:"About"}),b&&(0,i.jsx)(o.Z,{onClick:()=>m.push("/blog"),children:"Blog"}),f&&(0,i.jsx)(o.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Resume"}),(0,i.jsx)(o.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Contact"})]})})]})}}),(0,i.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===h&&"bg-white"," dark:text-white top-0 z-10 tablet:flex"),children:[(0,i.jsxs)("h1",{onClick:()=>m.push("/"),className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:[x,"."]}),d?(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(o.Z,{onClick:()=>m.push("/"),children:"Home"}),b&&(0,i.jsx)(o.Z,{onClick:()=>m.push("/blog"),children:"Blog"}),f&&(0,i.jsx)(o.Z,{onClick:()=>m.push("/resume"),classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(o.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Contact"}),p&&h&&r.darkMode&&(0,i.jsx)(o.Z,{onClick:()=>u("dark"===h?"light":"dark"),children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]}):(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(o.Z,{onClick:s,children:"Work"}),(0,i.jsx)(o.Z,{onClick:t,children:"About"}),b&&(0,i.jsx)(o.Z,{onClick:()=>m.push("/blog"),children:"Blog"}),f&&(0,i.jsx)(o.Z,{onClick:()=>m.push("/resume"),classes:"first:ml-1",children:"Resume"}),(0,i.jsx)(o.Z,{onClick:()=>window.open("mailto:anobeassale@gmail.com"),children:"Contact"}),p&&h&&r.darkMode&&(0,i.jsx)(o.Z,{onClick:()=>u("dark"===h?"light":"dark"),children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]})]})]})}},37271:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var i=t(85893);t(67294);var a=t(75625),l=t(69954);let n=e=>{let{className:s}=e;return(0,i.jsx)("div",{className:"".concat(s," flex flex-wrap mob:flex-nowrap link"),children:l.socials.map((e,s)=>(0,i.jsx)(a.Z,{onClick:()=>window.open(e.link),children:e.title},s))})}},33253:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>h});var i=t(85893),a=t(67294),l=t(11163),n=t(56211),c=t(30471);let o=e=>{let{dates:s,type:t,position:l,bullets:n}=e,[c,o]=a.useState(n.split(","));return(0,i.jsxs)("div",{className:"mt-5 w-full flex mob:flex-col desktop:flex-row justify-between",children:[(0,i.jsxs)("div",{className:"text-lg w-2/5",children:[(0,i.jsx)("h2",{children:s}),(0,i.jsx)("h3",{className:"text-sm opacity-50",children:t})]}),(0,i.jsxs)("div",{className:"w-3/5",children:[(0,i.jsx)("h2",{className:"text-lg font-bold",children:l}),c&&c.length>0&&(0,i.jsx)("ul",{className:"list-disc",children:c.map((e,s)=>(0,i.jsx)("li",{className:"text-sm my-1 opacity-70",children:e},s))})]})]})};var r=t(37271);t(75625);var d=t(82010),m=t(69954);let h=()=>{let e=(0,l.useRouter)(),s=(0,d.F)(),[t,h]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{h(!0),m.showResume||e.push("/")},[e]),(0,i.jsxs)(i.Fragment,{children:[!1,m.showCursor&&(0,i.jsx)(n.Z,{}),(0,i.jsxs)("div",{className:"container mx-auto mb-10 ".concat(m.showCursor&&"cursor-none"),children:[(0,i.jsx)(c.Z,{isBlog:!0}),t&&(0,i.jsx)("div",{className:"mt-10 w-full flex flex-col items-center",children:(0,i.jsxs)("div",{className:"w-full ".concat(t&&"dark"===s.theme?"bg-slate-800":"bg-gray-50"," max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm"),children:[(0,i.jsx)("h1",{className:"text-3xl font-bold",children:m.name}),(0,i.jsx)("h2",{className:"text-xl mt-5",children:m.resume.tagline}),(0,i.jsx)("h2",{className:"w-4/5 text-xl mt-5 opacity-50",children:m.resume.description}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)(r.Z,{})}),(0,i.jsxs)("div",{className:"mt-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold",children:"Experience"}),m.resume.experiences.map(e=>{let{id:s,dates:t,type:a,position:l,bullets:n}=e;return(0,i.jsx)(o,{dates:t,type:a,position:l,bullets:n},s)})]}),(0,i.jsxs)("div",{className:"mt-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold",children:"Education"}),(0,i.jsxs)("div",{className:"mt-2",children:[(0,i.jsx)("h2",{className:"text-lg",children:m.resume.education.universityName}),(0,i.jsx)("h3",{className:"text-sm opacity-75",children:m.resume.education.universityDate}),(0,i.jsx)("p",{className:"text-sm mt-2 opacity-50",children:m.resume.education.universityPara})]})]}),(0,i.jsxs)("div",{className:"mt-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold",children:"Skills"}),(0,i.jsxs)("div",{className:"flex mob:flex-col desktop:flex-row justify-between",children:[m.resume.languages&&(0,i.jsxs)("div",{className:"mt-2 mob:mt-5",children:[(0,i.jsx)("h2",{className:"text-lg",children:"Languages"}),(0,i.jsx)("ul",{className:"list-disc",children:m.resume.languages.map((e,s)=>(0,i.jsx)("li",{className:"ml-5 py-2",children:e},s))})]}),m.resume.frameworks&&(0,i.jsxs)("div",{className:"mt-2 mob:mt-5",children:[(0,i.jsx)("h2",{className:"text-lg",children:"Frameworks"}),(0,i.jsx)("ul",{className:"list-disc",children:m.resume.frameworks.map((e,s)=>(0,i.jsx)("li",{className:"ml-5 py-2",children:e},s))})]}),m.resume.others&&(0,i.jsxs)("div",{className:"mt-2 mob:mt-5",children:[(0,i.jsx)("h2",{className:"text-lg",children:"Others"}),(0,i.jsx)("ul",{className:"list-disc",children:m.resume.others.map((e,s)=>(0,i.jsx)("li",{className:"ml-5 py-2",children:e},s))})]})]})]})]})})]})]})}},69954:e=>{"use strict";e.exports=JSON.parse('{"name":"Anobeass","headerTaglineOne":"Hello there!","headerTaglineTwo":"I\'m Goudy Gareb","headerTaglineThree":"Graphic Designer","headerTaglineFour":" based in Saudi Arabia, Riyadh.","showCursor":true,"showBlog":false,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Behance","link":"https://www.behance.net/GoudyGareb"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/goudygareb-anobeass/"},{"id":"3","title":"Pinterest","link":"https://www.pinterest.com/anobeass/"},{"id":"5","title":"Email","link":"anobeassale@gmail.com"},{"id":"34e539d6-d3e9-4ef3-9b97-2f90c3c19af3","title":"Instagram","link":"https://www.instagram.com/anobeass"},{"id":"05db60ba-9d35-43f5-8fdd-ba6a24f0ac7f","title":"Facebook","link":"https://www.facebook.com/Anobeass/"}],"projects":[{"id":"1","title":"Uqdat Visual identity | عقدة هوية بصرية","description":"Visual identity.","imageSrc":"https://cdn.discordapp.com/attachments/1294021635816427540/1302090521577128017/Untitled-1.png?ex=6726d9cc&is=6725884c&hm=c0159b2bfa6b56e40019b5d30e06d3b2f226e58e4b664da1a7d003ca3fee1d15&","url":"https://www.behance.net/gallery/209394847/Uqdat-Visual-identity-"},{"id":"2","title":"BOOKCOVER Foilo","description":"book covers design.","imageSrc":"https://cdn.discordapp.com/attachments/1294021635816427540/1302093577958068284/Coverfoilo_01.png?ex=6726dca4&is=67258b24&hm=ac04e217dc93cc9539c67b707e4e39468c22803499d5f570dfff0249e0cc126c&","url":"https://www.behance.net/gallery/208778285/CoverFoilo"}],"services":[{"id":"1","title":"Book Covers Designing","description":"We specialize in the creation and development of captivating book cover designs, with a strong focus on visually appealing and impactful aesthetics that bring stories to life."},{"id":"2","title":"Logo Designing","description":"We design unique logos that capture the essence of your brand, creating memorable and distinctive visuals that set your brand apart from competitors."},{"id":"3","title":"Visual identity","description":"We create comprehensive visual identities that encompass logo design, color palettes, typography, and other essential design elements, ensuring your brand communicates its values and stands out in the market."},{"id":"4","title":"Brand Strategy","description":"We craft comprehensive brand strategies and complete brand identities that define your brand\'s vision, mission, and values, along with its visual components. Our approach ensures a cohesive narrative and impactful presence that engages your audience and sets you apart in the marketplace."}],"aboutpara":"Graphic Designer with 5+ years of experience in book cover design, logo design, typography, thumbnails, visual identities, and social media posts. Skilled at creating impactful and effective visual content.","resume":{"tagline":"I\'m a Graphic Designer.","description":"Graphic Designer with 5+ years of experience in book cover design, logo design, typography, thumbnails, visual identities, and social media posts. Skilled at creating impactful and effective visual content.","experiences":[{"id":"1","dates":"July 2023 - July 2024","type":"Remotely","position":"Creative Director ","bullets":"at Arabic spring Team"},{"id":"d495c23b-4f65-479a-9b8a-cfbc1c089725","dates":"July 2022- July 2023","type":"Remotely","position":"Senior Graphic Designer ","bullets":"at DesignSolders Team"},{"id":"5c2db7db-5498-4107-b45c-74368ea6e424","dates":"December 2021- June 2022","type":"Remotely","position":"Junior Graphic Designer","bullets":"at Inspirationhall Team."}],"education":{"universityName":"Our expatriate children / High school","universityDate":"2022 - 2025, Riyadh","universityPara":"A specialized educational institution offering the Egyptian curriculum to the children of the Egyptian community in Saudi Arabia."},"languages":["Arabic ","English","Korean","German","French"],"frameworks":["Adobe Photoshop","Adobe Illustrator","Adobe InDesign","Adobe premiere","Figma","Microsoft Excel","Microsoft PowerPoint","Google Sheets","Canva"],"others":["Project Management","Team Leadership","Risk Assessment","Effective Communication","Time Management","Problem Solving","Decision Making","Quality Management","Process Improvement","Change Management","Negotiation Skills","Dedication to work","Willingness to learn and continuous improvement"]}}')}},e=>{var s=s=>e(e.s=s);e.O(0,[802,827,888,774,179],()=>s(61429)),_N_E=e.O()}]);