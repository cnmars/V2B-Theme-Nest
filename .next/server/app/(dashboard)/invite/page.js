(()=>{var e={};e.id=406,e.ids=[406],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3501:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d}),s(2238),s(8032),s(5866),s(7066);var a=s(3191),r=s(8716),i=s(7922),l=s.n(i),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let d=["",{children:["(dashboard)",{children:["invite",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2238)),"/home/runner/work/new-theme/new-theme/app/(dashboard)/invite/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8032)),"/home/runner/work/new-theme/new-theme/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,7066)),"/home/runner/work/new-theme/new-theme/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/home/runner/work/new-theme/new-theme/app/(dashboard)/invite/page.tsx"],m="/(dashboard)/invite/page",x={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(dashboard)/invite/page",pathname:"/invite",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5812:(e,t,s)=>{Promise.resolve().then(s.bind(s,4029))},4029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var a=s(326),r=s(772),i=s(3071),l=s(2288),n=s(4432),o=s(1048),d=s(4474),c=s(5940),m=s(9941),x=s(4335),u=s(4099),p=s(8599),f=s.n(p);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let h=(0,s(2881).Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var g=s(3844),j=s(5047),w=s(7577),y=s(5999);function b(){let e=(0,g.useTranslations)("Dashboard"),t=(0,j.useRouter)(),[s,p]=(0,w.useState)(),[b,v]=(0,w.useState)(),[N,C]=(0,w.useState)(""),[_,k]=(0,w.useState)(""),[R,A]=(0,w.useState)(""),{isLoggedIn:S,isAuthChecked:D,request:q}=(0,m.a)(),[Z,P]=(0,w.useState)(),[M,z]=(0,w.useState)(1),[T,E]=(0,w.useState)(0);return(0,a.jsxs)("div",{className:"flex flex-col gap-4 lg:gap-6 lg:w-4/5 w-full",children:[(0,a.jsxs)("div",{className:"md:flex md:flex-row grid grid-cols-2 grid-flow-row gap-4 w-full",children:[a.jsx(i.Zb,{className:"w-full",children:(0,a.jsxs)(i.Ol,{children:[a.jsx(i.ll,{children:s?.stat[0]}),a.jsx(i.SZ,{children:e("cardInvitePerson")})]})}),a.jsx(i.Zb,{className:"w-full",children:(0,a.jsxs)(i.Ol,{children:[a.jsx(i.ll,{children:`${(s?.stat[2]/100).toFixed(2)} ${b?.currency}`}),a.jsx(i.SZ,{children:e("cardCheckingCom")})]})}),a.jsx(i.Zb,{className:"w-full",children:(0,a.jsxs)(i.Ol,{children:[a.jsx(i.ll,{children:`${(s?.stat[1]/100).toFixed(2)} ${b?.currency}`}),a.jsx(i.SZ,{children:e("cardReceivedCom")})]})}),a.jsx(i.Zb,{className:"w-full",children:(0,a.jsxs)(i.Ol,{children:[a.jsx(i.ll,{children:`${s?.stat[3]}%`}),a.jsx(i.SZ,{children:e("cardRateCom")})]})})]}),(0,a.jsxs)(i.Zb,{className:"w-full",children:[a.jsx(i.Ol,{className:"flex flex-row gap-3 justify-between",children:e("cardBalanceCom")}),(0,a.jsxs)(i.aY,{className:"flex flex-row justify-start w-full items-end gap-1",children:[a.jsx("p",{className:"text-4xl",children:(s?.stat[4]/100).toFixed(2)}),a.jsx("p",{className:"text-xl font-semibold",children:b?.currency})]}),a.jsx(i.eW,{children:(0,a.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,a.jsxs)(l.Vq,{children:[a.jsx(l.hg,{asChild:!0,children:a.jsx(r.z,{children:e("inviteTransfer")})}),(0,a.jsxs)(l.cZ,{className:"sm:max-w-[425px]",children:[(0,a.jsxs)(l.fK,{children:[a.jsx(l.$N,{children:e("inviteModalTitle")}),a.jsx(l.Be,{})]}),(0,a.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[a.jsx(o._,{htmlFor:"inviteModalBalance",children:e("inviteModalBalance")}),a.jsx(n.I,{disabled:!0,id:"inviteModalBalance",defaultValue:(s?.stat[4]/100).toString()})]}),(0,a.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[a.jsx(o._,{htmlFor:"inviteModalAmount",children:e("inviteModalAmount")}),a.jsx(n.I,{id:"inviteModalAmount",value:N,onChange:e=>C(e.target.value)})]}),a.jsx(l.cN,{children:a.jsx(l.GG,{asChild:!0,children:a.jsx(r.z,{onClick:async()=>{try{await q?.post("user/transfer",{transfer_amount:100*parseInt(N)});let t=await q?.get("user/invite/fetch");p(t?.data.data),y.Am.success(e("inviteTransferSuccess"))}catch(e){if(u.Z.isAxiosError(e)){let t=e.response?.data;y.Am.error(t?.errors?Object.values(t?.errors)[0]:t?.message)}else y.Am.error(e.message)}finally{C("")}},children:e("inviteModalConfirm")})})})]})]}),(0,a.jsxs)(l.Vq,{children:[a.jsx(l.hg,{asChild:!0,children:a.jsx(r.z,{variant:"outline",children:e("inviteWithdraw")})}),(0,a.jsxs)(l.cZ,{className:"sm:max-w-[425px]",children:[(0,a.jsxs)(l.fK,{children:[a.jsx(l.$N,{children:e("inviteWithdrawTitle")}),a.jsx(l.Be,{})]}),(0,a.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[a.jsx(o._,{htmlFor:"inviteWithdrawMethod",children:e("inviteWithdrawMethod")}),(0,a.jsxs)(d.Ph,{value:R,onValueChange:A,children:[a.jsx(d.i4,{className:"w-full",children:a.jsx(d.ki,{placeholder:e("inviteWithdrawMethodDesc")})}),a.jsx(d.Bw,{children:a.jsx(d.DI,{children:b?.withdraw_methods.map((e,t)=>a.jsx(d.Ql,{value:e,children:e},t.toString()))})})]})]}),(0,a.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[a.jsx(o._,{htmlFor:"inviteWithdrawAcc",children:e("inviteWithdrawAcc")}),a.jsx(n.I,{id:"inviteWithdrawAcc",placeholder:e("inviteWithdrawAccDesc"),value:_,onChange:e=>k(e.target.value)})]}),a.jsx(l.cN,{children:a.jsx(l.GG,{asChild:!0,children:a.jsx(r.z,{onClick:async()=>{try{await q?.post("user/ticket/withdraw",{withdraw_account:_,withdraw_method:R}),t.push("/ticket")}catch(e){if(u.Z.isAxiosError(e)){let t=e.response?.data;y.Am.error(t?.errors?Object.values(t?.errors)[0]:t?.message)}else y.Am.error(e.message)}finally{k(""),A("")}},children:e("inviteModalConfirm")})})})]})]})]})})]}),(0,a.jsxs)(i.Zb,{children:[(0,a.jsxs)(i.Ol,{className:"flex flex-row justify-between",children:[e("cardInviteCodes"),a.jsx(r.z,{color:"primary",onClick:async()=>{try{await q?.get("user/invite/save");let e=await q?.get("user/invite/fetch");p(e?.data.data)}catch(e){if(u.Z.isAxiosError(e)){let t=e.response?.data;y.Am.error(t?.errors?Object.values(t?.errors)[0]:t?.message)}else y.Am.error(e.message)}},children:e("inviteCreate")})]}),a.jsx(i.aY,{children:(0,a.jsxs)(c.iA,{children:[a.jsx(c.xD,{children:(0,a.jsxs)(c.SC,{children:[a.jsx(c.ss,{className:"text-left",children:e("inviteCode")},"code"),a.jsx(c.ss,{className:"text-right",children:e("inviteCreateAt")},"created_at")]})}),a.jsx(c.RM,{children:s?.codes?s.codes.map(t=>(0,a.jsxs)(c.SC,{children:[(0,a.jsxs)(c.pj,{className:"text-left flex flex-row gap-1 items-center",children:[t.code,a.jsx(r.z,{variant:"ghost",size:"icon",className:"h-4 w-4",onClick:()=>{f()(`${window.location.href.split("/").slice(0,3).join("/")}/register?code=${t.code}`),y.Am.success(e("copySuccess"))},children:a.jsx(h,{className:"h-4 w-4"})})]}),a.jsx(c.pj,{className:"text-right",children:(0,x.Iq)(t.created_at)})]},t.code)):null})]})})]}),(0,a.jsxs)(i.Zb,{children:[a.jsx(i.Ol,{children:e("cardHistoryCom")}),a.jsx(i.aY,{children:(0,a.jsxs)(c.iA,{children:[a.jsx(c.xD,{children:(0,a.jsxs)(c.SC,{children:[a.jsx(c.ss,{className:"text-left",children:e("inviteComCreateAt")},"created_at"),a.jsx(c.ss,{className:"text-right",children:e("inviteComAmount")},"get_amount")]})}),a.jsx(c.RM,{children:Z?.data?Z?.data.map(e=>a.jsxs(c.SC,{children:[a.jsx(c.pj,{className:"text-left flex flex-row gap-1 items-center",children:x.Iq(e.created_at,!0)}),a.jsx(c.pj,{className:"text-right",children:`${(e.get_amount/100).toFixed(2)} ${b?.currency}`})]},e.id)):null})]})})]})]})}},2288:(e,t,s)=>{"use strict";s.d(t,{$N:()=>h,Be:()=>g,GG:()=>m,Vq:()=>o,cN:()=>f,cZ:()=>u,fK:()=>p,hg:()=>d});var a=s(326),r=s(7577),i=s(8958),l=s(4019),n=s(7863);let o=i.fC,d=i.xz,c=i.h_,m=i.x8,x=r.forwardRef(({className:e,...t},s)=>a.jsx(i.aV,{ref:s,className:(0,n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));x.displayName=i.aV.displayName;let u=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(c,{children:[a.jsx(x,{}),(0,a.jsxs)(i.VY,{ref:r,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...s,children:[t,(0,a.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[a.jsx(l.Z,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));u.displayName=i.VY.displayName;let p=({className:e,...t})=>a.jsx("div",{className:(0,n.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});p.displayName="DialogHeader";let f=({className:e,...t})=>a.jsx("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});f.displayName="DialogFooter";let h=r.forwardRef(({className:e,...t},s)=>a.jsx(i.Dx,{ref:s,className:(0,n.cn)("text-lg font-semibold leading-none tracking-tight",e),...t}));h.displayName=i.Dx.displayName;let g=r.forwardRef(({className:e,...t},s)=>a.jsx(i.dk,{ref:s,className:(0,n.cn)("text-sm text-muted-foreground",e),...t}));g.displayName=i.dk.displayName},4432:(e,t,s)=>{"use strict";s.d(t,{I:()=>l});var a=s(326),r=s(7577),i=s(7863);let l=r.forwardRef(({className:e,type:t,...s},r)=>a.jsx("input",{type:t,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...s}));l.displayName="Input"},1048:(e,t,s)=>{"use strict";s.d(t,{_:()=>d});var a=s(326),r=s(7577),i=s(4478),l=s(8671),n=s(7863);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef(({className:e,...t},s)=>a.jsx(i.f,{ref:s,className:(0,n.cn)(o(),e),...t}));d.displayName=i.f.displayName},4474:(e,t,s)=>{"use strict";s.d(t,{Bw:()=>h,DI:()=>m,Ph:()=>c,Ql:()=>g,i4:()=>u,ki:()=>x});var a=s(326),r=s(7577),i=s(8785),l=s(8393),n=s(6633),o=s(2933),d=s(7863);let c=i.fC,m=i.ZA,x=i.B4,u=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(i.xz,{ref:r,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...s,children:[t,a.jsx(i.JO,{asChild:!0,children:a.jsx(l.Z,{className:"h-4 w-4 opacity-50"})})]}));u.displayName=i.xz.displayName;let p=r.forwardRef(({className:e,...t},s)=>a.jsx(i.u_,{ref:s,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:a.jsx(n.Z,{className:"h-4 w-4"})}));p.displayName=i.u_.displayName;let f=r.forwardRef(({className:e,...t},s)=>a.jsx(i.$G,{ref:s,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:a.jsx(l.Z,{className:"h-4 w-4"})}));f.displayName=i.$G.displayName;let h=r.forwardRef(({className:e,children:t,position:s="popper",...r},l)=>a.jsx(i.h_,{children:(0,a.jsxs)(i.VY,{ref:l,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:s,...r,children:[a.jsx(p,{}),a.jsx(i.l_,{className:(0,d.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),a.jsx(f,{})]})}));h.displayName=i.VY.displayName,r.forwardRef(({className:e,...t},s)=>a.jsx(i.__,{ref:s,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t})).displayName=i.__.displayName;let g=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(i.ck,{ref:r,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...s,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(i.wU,{children:a.jsx(o.Z,{className:"h-4 w-4"})})}),a.jsx(i.eT,{children:t})]}));g.displayName=i.ck.displayName,r.forwardRef(({className:e,...t},s)=>a.jsx(i.Z0,{ref:s,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=i.Z0.displayName},5940:(e,t,s)=>{"use strict";s.d(t,{RM:()=>o,SC:()=>d,iA:()=>l,pj:()=>m,ss:()=>c,xD:()=>n});var a=s(326),r=s(7577),i=s(7863);let l=r.forwardRef(({className:e,...t},s)=>a.jsx("div",{className:"relative w-full overflow-auto",children:a.jsx("table",{ref:s,className:(0,i.cn)("w-full caption-bottom text-sm",e),...t})}));l.displayName="Table";let n=r.forwardRef(({className:e,...t},s)=>a.jsx("thead",{ref:s,className:(0,i.cn)("[&_tr]:border-b",e),...t}));n.displayName="TableHeader";let o=r.forwardRef(({className:e,...t},s)=>a.jsx("tbody",{ref:s,className:(0,i.cn)("[&_tr:last-child]:border-0",e),...t}));o.displayName="TableBody",r.forwardRef(({className:e,...t},s)=>a.jsx("tfoot",{ref:s,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let d=r.forwardRef(({className:e,...t},s)=>a.jsx("tr",{ref:s,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));d.displayName="TableRow";let c=r.forwardRef(({className:e,...t},s)=>a.jsx("th",{ref:s,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));c.displayName="TableHead";let m=r.forwardRef(({className:e,...t},s)=>a.jsx("td",{ref:s,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));m.displayName="TableCell",r.forwardRef(({className:e,...t},s)=>a.jsx("caption",{ref:s,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption"},8599:(e,t,s)=>{"use strict";var a=s(1467),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var s,i,l,n,o,d,c,m,x=!1;t||(t={}),l=t.debug||!1;try{if(o=a(),d=document.createRange(),c=document.getSelection(),(m=document.createElement("span")).textContent=e,m.ariaHidden="true",m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",function(s){if(s.stopPropagation(),t.format){if(s.preventDefault(),void 0===s.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e)}t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(m),d.selectNodeContents(m),c.addRange(d),!document.execCommand("copy"))throw Error("copy command was unsuccessful");x=!0}catch(a){l&&console.error("unable to copy using execCommand: ",a),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),x=!0}catch(a){l&&console.error("unable to copy using clipboardData: ",a),l&&console.error("falling back to prompt"),s="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",n=s.replace(/#{\s*key\s*}/g,i),window.prompt(n,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(d):c.removeAllRanges()),m&&document.body.removeChild(m),o()}return x}},1467:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,s=[],a=0;a<e.rangeCount;a++)s.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||s.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},2238:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var a=s(8570);let r=(0,a.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(dashboard)/invite/page.tsx`),{__esModule:i,$$typeof:l}=r;r.default;let n=(0,a.createProxy)(String.raw`/home/runner/work/new-theme/new-theme/app/(dashboard)/invite/page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[685,939,856,410,94,734],()=>s(3501));module.exports=a})();