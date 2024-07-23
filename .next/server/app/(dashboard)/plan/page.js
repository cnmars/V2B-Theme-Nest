(()=>{var e={};e.id=523,e.ids=[523],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6068:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(3024),t(8032),t(5866),t(7066);var a=t(3191),n=t(8716),s=t(7922),i=t.n(s),o=t(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["(dashboard)",{children:["plan",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3024)),"/home/runner/work/new-theme/new-theme/app/(dashboard)/plan/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,8032)),"/home/runner/work/new-theme/new-theme/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,7066)),"/home/runner/work/new-theme/new-theme/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/home/runner/work/new-theme/new-theme/app/(dashboard)/plan/page.tsx"],u="/(dashboard)/plan/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(dashboard)/plan/page",pathname:"/plan",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2715:(e,r,t)=>{Promise.resolve().then(t.bind(t,8024))},8024:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var a=t(326),n=t(567),s=t(772),i=t(3071),o=t(3427),l=t(9941),d=t(3844),c=t(5047),u=t(7577);function p(){let e=(0,d.useTranslations)("Dashboard"),r=(0,c.useRouter)(),[t,p]=(0,u.useState)(),[m,x]=(0,u.useState)(),{isLoggedIn:f,isAuthChecked:h,request:g}=(0,l.a)(),b=e=>e.month_price?"month_price":e.quarter_price?"quarter_price":e.half_year_price?"half_year_price":e.year_price?"year_price":e.two_year_price?"two_year_price":e.three_year_price?"three_year_price":e.onetime_price?"onetime_price":"reset_price",v=t=>(0,a.jsxs)(i.Zb,{className:"w-full flex flex-col",children:[(0,a.jsxs)(i.Ol,{children:[(0,a.jsxs)(i.ll,{className:"w-full flex flex-row justify-between items-center",children:[a.jsx("p",{className:"text-2xl font-semibold",children:t.name}),t?.capacity_limit!=null&&a.jsx(n.C,{variant:"destructive",children:t.capacity_limit>0?e("planHasLeft",{item:t?.capacity_limit}):e("planNoLeft")})]}),(0,a.jsxs)(i.SZ,{children:[t?.transfer_enable," GB"]})]}),a.jsx(i.aY,{className:"flex-grow text-sm min-h-24",children:a.jsx("div",{dangerouslySetInnerHTML:{__html:t.content??""}})}),(0,a.jsxs)(i.eW,{className:"flex flex-col gap-1 min-h-[60px]",children:[(0,a.jsxs)("div",{className:"w-full flex flex-row gap-3 justify-end items-center p-0",children:[a.jsx("p",{className:"text-small text-default-400",children:e(b(t))}),(0,a.jsxs)("p",{className:"text-2xl font-semibold",children:[m?.currency_symbol,(t[b(t)]/100).toFixed(2)]})]}),a.jsx(s.z,{variant:"outline",className:"font-semibold w-full",disabled:null!=t.capacity_limit&&t.capacity_limit<=0,onClick:()=>{r.push(`/plan/${t.id}`)},children:e("bOrderSub")})]})]});return a.jsx("div",{className:"flex flex-col gap-4 lg:gap-6 lg:w-4/5 w-full",children:(0,a.jsxs)(o.mQ,{defaultValue:"all",className:"w-auto",children:[(0,a.jsxs)(o.dr,{children:[a.jsx(o.SP,{value:"all",children:e("planAll")}),a.jsx(o.SP,{value:"period",children:e("planByPeriod")}),a.jsx(o.SP,{value:"one-time",children:e("planByOne")})]}),a.jsx(o.nU,{value:"all",children:t?a.jsx("div",{className:"grid lg:grid-cols-3 gap-4",children:t.map(v)}):null}),a.jsx(o.nU,{value:"period",children:t?a.jsx("div",{className:"grid lg:grid-cols-3 gap-4",children:t.map(e=>{if("onetime_price"!==b(e))return v(e)})}):null}),a.jsx(o.nU,{value:"one-time",children:t?a.jsx("div",{className:"grid lg:grid-cols-3 gap-4",children:t.map(e=>{if("onetime_price"===b(e))return v(e)})}):null})]})})}},567:(e,r,t)=>{"use strict";t.d(r,{C:()=>o});var a=t(326);t(7577);var n=t(8671),s=t(7863);let i=(0,n.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o({className:e,variant:r,...t}){return a.jsx("div",{className:(0,s.cn)(i({variant:r}),e),...t})}},3427:(e,r,t)=>{"use strict";t.d(r,{mQ:()=>M,nU:()=>V,dr:()=>S,SP:()=>R});var a=t(326),n=t(7577),s=t(2561),i=t(3095),o=t(5594),l=t(9815),d=t(5226),c=t(7124),u=t(2067),p=t(8957),m="Tabs",[x,f]=(0,i.b)(m,[o.Pc]),h=(0,o.Pc)(),[g,b]=x(m),v=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:n,onValueChange:s,defaultValue:i,orientation:o="horizontal",dir:l,activationMode:m="automatic",...x}=e,f=(0,c.gm)(l),[h,b]=(0,u.T)({prop:n,onChange:s,defaultProp:i});return(0,a.jsx)(g,{scope:t,baseId:(0,p.M)(),value:h,onValueChange:b,orientation:o,dir:f,activationMode:m,children:(0,a.jsx)(d.WV.div,{dir:f,"data-orientation":o,...x,ref:r})})});v.displayName=m;var y="TabsList",w=n.forwardRef((e,r)=>{let{__scopeTabs:t,loop:n=!0,...s}=e,i=b(y,t),l=h(t);return(0,a.jsx)(o.fC,{asChild:!0,...l,orientation:i.orientation,dir:i.dir,loop:n,children:(0,a.jsx)(d.WV.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:r})})});w.displayName=y;var _="TabsTrigger",j=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:n,disabled:i=!1,...l}=e,c=b(_,t),u=h(t),p=P(c.baseId,n),m=k(c.baseId,n),x=n===c.value;return(0,a.jsx)(o.ck,{asChild:!0,...u,focusable:!i,active:x,children:(0,a.jsx)(d.WV.button,{type:"button",role:"tab","aria-selected":x,"aria-controls":m,"data-state":x?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:p,...l,ref:r,onMouseDown:(0,s.M)(e.onMouseDown,e=>{i||0!==e.button||!1!==e.ctrlKey?e.preventDefault():c.onValueChange(n)}),onKeyDown:(0,s.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&c.onValueChange(n)}),onFocus:(0,s.M)(e.onFocus,()=>{let e="manual"!==c.activationMode;x||i||!e||c.onValueChange(n)})})})});j.displayName=_;var N="TabsContent",q=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:s,forceMount:i,children:o,...c}=e,u=b(N,t),p=P(u.baseId,s),m=k(u.baseId,s),x=s===u.value,f=n.useRef(x);return n.useEffect(()=>{let e=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.jsx)(l.z,{present:i||x,children:({present:t})=>(0,a.jsx)(d.WV.div,{"data-state":x?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!t,id:m,tabIndex:0,...c,ref:r,style:{...e.style,animationDuration:f.current?"0s":void 0},children:t&&o})})});function P(e,r){return`${e}-trigger-${r}`}function k(e,r){return`${e}-content-${r}`}q.displayName=N;var C=t(7863);let M=v,S=n.forwardRef(({className:e,...r},t)=>a.jsx(w,{ref:t,className:(0,C.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...r}));S.displayName=w.displayName;let R=n.forwardRef(({className:e,...r},t)=>a.jsx(j,{ref:t,className:(0,C.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...r}));R.displayName=j.displayName;let V=n.forwardRef(({className:e,...r},t)=>a.jsx(q,{ref:t,className:(0,C.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...r}));V.displayName=q.displayName},3024:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});var a=t(8570);let n=(0,a.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(dashboard)/plan/page.tsx`),{__esModule:s,$$typeof:i}=n;n.default;let o=(0,a.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(dashboard)/plan/page.tsx#default`)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[685,939,856,94,734],()=>t(6068));module.exports=a})();