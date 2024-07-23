(()=>{var e={};e.id=470,e.ids=[470],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},5785:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(7612),t(7087),t(5866),t(7066);var r=t(3191),a=t(8716),o=t(7922),i=t.n(o),n=t(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(s,l);let d=["",{children:["(users)",{children:["forgetpassword",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7612)),"/home/runner/work/new-theme/new-theme/app/(users)/forgetpassword/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,7087)),"/home/runner/work/new-theme/new-theme/app/(users)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,7066)),"/home/runner/work/new-theme/new-theme/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/home/runner/work/new-theme/new-theme/app/(users)/forgetpassword/page.tsx"],u="/(users)/forgetpassword/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(users)/forgetpassword/page",pathname:"/forgetpassword",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5434:(e,s,t)=>{Promise.resolve().then(t.bind(t,4792))},1767:(e,s,t)=>{Promise.resolve().then(t.bind(t,4662))},4792:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(326),a=t(772),o=t(2288),i=t(4432),n=t(1048),l=t(9941),d=t(3844),c=t(434),u=t(7577),p=t(610),m=t(5999);let x=()=>{let e=(0,d.useTranslations)("Users"),{login:s,reset:t,sendEmailVerify:x,webConfig:f}=(0,l.a)(),[h,g]=(0,u.useState)(!1),[w,y]=(0,u.useState)({timer:-1,email:"",password:"",password2:"",code:"",isChecking:!1}),v=(0,u.useRef)(null);(0,u.useEffect)(()=>{let e;return w.timer>0?e=setInterval(()=>{y(e=>({...e,timer:e.timer-1}))},1e3):y(e=>({...e,timer:-1})),()=>clearInterval(e)},[w.timer]);let j=async s=>{try{let t=await x(w.email,s);if(!t?.success)throw Error(t.data);m.Am.success(e("sendSuccess")),y(e=>({...e,timer:60}))}catch(e){m.Am.error(e)}},b=async()=>{y(e=>({...e,isChecking:!0}));try{if(w.password!==w.password2)throw Error(e("passwordNotSame"));let r=await t(w.email,w.password,w.code);if(!r?.success)throw Error(r.data);await s(w.email,w.password),m.Am.success(e("registerSuccess"))}catch(e){m.Am.error(e),y(e=>({...e,isChecking:!1}))}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(n._,{htmlFor:"email",children:e("email")}),r.jsx(i.I,{id:"email",type:"email",value:w.email,onChange:e=>y({...w,email:e.target.value}),placeholder:e("emailPlaceholder"),required:!0})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx(n._,{htmlFor:"verifyCode",children:e("verifyCode")}),(0,r.jsxs)("div",{className:"flex w-full max-w-sm items-center space-x-2",children:[r.jsx(i.I,{id:"verifyCode",placeholder:e("verifyCodePlaceholder"),value:w.code,onChange:e=>y({...w,code:e.target.value})}),r.jsx(a.z,{type:"submit",disabled:w.timer>0,onClick:()=>{f?.is_recaptcha===1?g(!0):j(null)},children:w.timer<=0?e("verifySend"):w.timer.toString()})]})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx("div",{className:"flex items-center",children:r.jsx(n._,{htmlFor:"password",children:e("password")})}),r.jsx(i.I,{id:"password",type:"password",required:!0,value:w.password,onChange:e=>y({...w,password:e.target.value}),placeholder:e("passwordPlaceholder")})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx("div",{className:"flex items-center",children:r.jsx(n._,{htmlFor:"password",children:e("password2")})}),r.jsx(i.I,{id:"password2",type:"password",required:!0,value:w.password2,onChange:e=>y({...w,password2:e.target.value}),placeholder:e("password2Placeholder")})]}),r.jsx(a.z,{type:"submit",className:"w-full",disabled:w.isChecking,onClick:b,children:e("bForget")})]}),(0,r.jsxs)("div",{className:"mt-4 text-center text-sm",children:[e("registerDesc")," "," ",r.jsx(c.default,{href:"/register",className:"underline",children:e("register")})]}),r.jsx(o.Vq,{modal:!1,open:h,onOpenChange:g,children:(0,r.jsxs)(o.cZ,{onInteractOutside:e=>{e.preventDefault()},children:[r.jsx(o.$N,{}),r.jsx(o.Be,{children:r.jsx(p.Z,{ref:v,sitekey:f?.recaptcha_site_key?f.recaptcha_site_key:"",onChange:e=>{j(e).then(()=>{g(!1)})}})})]})})]})}},4662:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(326),a=t(4175),o=t(9986),i=t(9941),n=t(5047),l=t(7577),d=t(6226);let c=({children:e})=>{let s=(0,n.useRouter)(),{isLoggedIn:t,isAuthChecked:c,config:u,webConfig:p}=(0,i.a)();return(0,l.useEffect)(()=>{c&&t&&s.push("/dashboard")},[t,c,s]),(0,r.jsxs)("div",{className:"flex items-center justify-center w-full h-screen lg:min-h-[600px] xl:min-h-[800px]",children:[(0,r.jsxs)("div",{className:"absolute top-4 right-4 flex flex-row gap-2",children:[r.jsx(a.B,{iconOnly:!0}),r.jsx(o.b,{iconOnly:!0})]}),(0,r.jsxs)("div",{className:"mx-auto grid w-[350px] gap-6",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[p?.logo?r.jsx(d.default,{loader:({src:e})=>e,alt:"LOGO",src:p?.logo??"",width:60,height:60}):null,r.jsx("h1",{className:"text-3xl font-bold",children:u?.title}),r.jsx("p",{className:"text-balance text-muted-foreground",children:p?.app_description})]}),e]})]})}},2288:(e,s,t)=>{"use strict";t.d(s,{$N:()=>h,Be:()=>g,GG:()=>u,Vq:()=>l,cN:()=>f,cZ:()=>m,fK:()=>x,hg:()=>d});var r=t(326),a=t(7577),o=t(8958),i=t(4019),n=t(7863);let l=o.fC,d=o.xz,c=o.h_,u=o.x8,p=a.forwardRef(({className:e,...s},t)=>r.jsx(o.aV,{ref:t,className:(0,n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...s}));p.displayName=o.aV.displayName;let m=a.forwardRef(({className:e,children:s,...t},a)=>(0,r.jsxs)(c,{children:[r.jsx(p,{}),(0,r.jsxs)(o.VY,{ref:a,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t,children:[s,(0,r.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[r.jsx(i.Z,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));m.displayName=o.VY.displayName;let x=({className:e,...s})=>r.jsx("div",{className:(0,n.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...s});x.displayName="DialogHeader";let f=({className:e,...s})=>r.jsx("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...s});f.displayName="DialogFooter";let h=a.forwardRef(({className:e,...s},t)=>r.jsx(o.Dx,{ref:t,className:(0,n.cn)("text-lg font-semibold leading-none tracking-tight",e),...s}));h.displayName=o.Dx.displayName;let g=a.forwardRef(({className:e,...s},t)=>r.jsx(o.dk,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",e),...s}));g.displayName=o.dk.displayName},4432:(e,s,t)=>{"use strict";t.d(s,{I:()=>i});var r=t(326),a=t(7577),o=t(7863);let i=a.forwardRef(({className:e,type:s,...t},a)=>r.jsx("input",{type:s,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...t}));i.displayName="Input"},1048:(e,s,t)=>{"use strict";t.d(s,{_:()=>d});var r=t(326),a=t(7577),o=t(4478),i=t(8671),n=t(7863);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef(({className:e,...s},t)=>r.jsx(o.f,{ref:t,className:(0,n.cn)(l(),e),...s}));d.displayName=o.f.displayName},7612:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>o,default:()=>n});var r=t(8570);let a=(0,r.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(users)/forgetpassword/page.tsx`),{__esModule:o,$$typeof:i}=a;a.default;let n=(0,r.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(users)/forgetpassword/page.tsx#default`)},7087:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>o,default:()=>n});var r=t(8570);let a=(0,r.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(users)/layout.tsx`),{__esModule:o,$$typeof:i}=a;a.default;let n=(0,r.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(users)/layout.tsx#default`)},4478:(e,s,t)=>{"use strict";t.d(s,{f:()=>n});var r=t(7577),a=t(5226),o=t(326),i=r.forwardRef((e,s)=>(0,o.jsx)(a.WV.label,{...e,ref:s,onMouseDown:s=>{s.target.closest("button, input, select, textarea")||(e.onMouseDown?.(s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));i.displayName="Label";var n=i}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[685,939,290,94],()=>t(5785));module.exports=r})();