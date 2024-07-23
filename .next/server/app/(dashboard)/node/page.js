(()=>{var e={};e.id=352,e.ids=[352],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9830:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>d}),r(4507),r(8032),r(5866),r(7066);var s=r(3191),n=r(8716),a=r(7922),o=r.n(a),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["(dashboard)",{children:["node",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4507)),"/home/runner/work/new-theme/new-theme/app/(dashboard)/node/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8032)),"/home/runner/work/new-theme/new-theme/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7066)),"/home/runner/work/new-theme/new-theme/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=["/home/runner/work/new-theme/new-theme/app/(dashboard)/node/page.tsx"],c="/(dashboard)/node/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(dashboard)/node/page",pathname:"/node",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5064:(e,t,r)=>{Promise.resolve().then(r.bind(r,6908))},6908:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(326),n=r(567),a=r(3071),o=r(9941),i=r(949),l=r(3844),d=r(7577);function u(){let e=(0,l.useTranslations)("Dashboard"),[t,r]=(0,d.useState)(),{isLoggedIn:u,isAuthChecked:c,request:p}=(0,o.a)();return s.jsx("div",{className:"flex flex-col gap-4 lg:gap-6 lg:w-4/5 w-full",children:t?0==t.length?s.jsx(a.Zb,{className:"w-full",children:(0,s.jsxs)(a.aY,{className:"flex flex-col justify-center items-center p-4 gap-3",children:[s.jsx(i.Z,{className:"w-32 h-32"}),s.jsx("p",{className:"text-lg font-bold",children:e("nodeNo")})]})}):s.jsx("div",{className:"flex h-auto w-full flex-col lg:grid lg:grid-cols-2 gap-4",children:t.map(t=>s.jsx(a.Zb,{className:"relative w-full h-auto",children:(0,s.jsxs)("div",{className:"flex flex-col justify-between p-4 gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-row justify-between gap-2 items-start z-10",children:[s.jsx("p",{className:"text-2xl font-medium",children:t.name}),s.jsx(n.C,{variant:0==t.is_online?"destructive":"default",children:0==t.is_online?e("nodeOffline"):e("nodeOnline")})]}),s.jsx("div",{className:"flex flex-wrap flex-row gap-2 justify-start",children:t?.tags?t?.tags.map(e=>s.jsx(n.C,{className:"z-10",children:e},e)):null}),(0,s.jsxs)("div",{className:"absolute bottom-3 right-4 text-6xl text-primary/25",children:[t.rate," x"]})]})},t.id.toString()))}):null})}},567:(e,t,r)=>{"use strict";r.d(t,{C:()=>i});var s=r(326);r(7577);var n=r(8671),a=r(7863);let o=(0,n.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i({className:e,variant:t,...r}){return s.jsx("div",{className:(0,a.cn)(o({variant:t}),e),...r})}},949:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(2881).Z)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},4507:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});var s=r(8570);let n=(0,s.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(dashboard)/node/page.tsx`),{__esModule:a,$$typeof:o}=n;n.default;let i=(0,s.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(dashboard)/node/page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[685,939,856,94,734],()=>r(9830));module.exports=s})();