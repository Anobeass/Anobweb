exports.id=664,exports.ids=[664],exports.modules={6691:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return f},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let u="refresh",o="navigate",l="restore",f="server-patch",a="prefetch",i="hmr-refresh",c="server-action";(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let n=r(167),u=r(997),o=n._(r(6689)),l=r(1401),f=r(2045),a=r(7420),i=r(7201),c=r(1443),s=r(5661),d=r(840),p=r(2905),b=r(4318),y=r(953),v=r(6691),_=r(5457);function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let O=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:O,children:g,prefetch:M=null,passHref:j,replace:R,shallow:C,scroll:E,locale:P,onClick:m,onMouseEnter:T,onTouchStart:x,legacyBehavior:A=!1,...I}=e;r=g,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,u.jsx)("a",{children:r}));let L=o.default.useContext(s.RouterContext),S=o.default.useContext(d.AppRouterContext),N=null!=L?L:S,k=!L,U=!1!==M,H=null===M?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:K,as:w}=o.default.useMemo(()=>{if(!L){let e=h(a);return{href:e,as:O?h(O):e}}let[e,t]=(0,l.resolveHref)(L,a,!0);return{href:e,as:O?(0,l.resolveHref)(L,O):t||e}},[L,a,O]),F=o.default.useRef(K),D=o.default.useRef(w);A&&(n=o.default.Children.only(r));let V=A?n&&"object"==typeof n&&n.ref:t,[q,z,B]=(0,p.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(D.current!==w||F.current!==K)&&(B(),D.current=w,F.current=K),q(e)},[w,K,B,q]),Y=(0,_.useMergedRef)(G,V);o.default.useEffect(()=>{},[w,K,z,P,U,null==L?void 0:L.locale,N,k,H]);let J={ref:Y,onClick(e){A||"function"!=typeof m||m(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,u,l,a,i,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,f.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:l,locale:i,scroll:e}):t[u?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(d):d()}(e,N,K,w,R,C,E,P,k)},onMouseEnter(e){A||"function"!=typeof T||T(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart:function(e){A||"function"!=typeof x||x(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,i.isAbsoluteUrl)(w))J.href=w;else if(!A||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,b.getDomainLocale)(w,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);J.href=t||(0,y.addBasePath)((0,c.addLocale)(w,e,null==L?void 0:L.defaultLocale))}return A?o.default.cloneElement(n,J):(0,u.jsx)("a",{...I,...J,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(6689),u=r(3815),o="function"==typeof IntersectionObserver,l=new Map,f=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,i=a||!o,[c,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:u,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=f.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let u=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:u},f.push(r),l.set(r,t),t}(r);return o.set(e,t),u.observe(e),function(){if(o.delete(e),u.unobserve(e),0===o.size){u.disconnect(),l.delete(n);let e=f.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,u.requestIdleCallback)(()=>s(!0));return()=>(0,u.cancelIdleCallback)(e)}},[i,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5457:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return u}});let n=r(6689);function u(e,t){let r=(0,n.useRef)(()=>{}),u=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),u.current()):(r.current=o(e,n),u.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},840:(e,t,r)=>{"use strict";e.exports=r(5872).vendored.contexts.AppRouterContext},1664:(e,t,r)=>{r(9577)}};