(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{5560:function(e,r,t){Promise.resolve().then(t.bind(t,1099))},1099:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var a=t(7437),n=t(4693),s=t(495),i=t(6013),o=t(5273),l=t(7651),d=t(8087),c=t(6463),u=t(2265);function f(){let e=(0,d.useTranslations)("Dashboard"),r=(0,c.useRouter)(),[t,f]=(0,u.useState)(),[m,p]=(0,u.useState)(),{isLoggedIn:v,isAuthChecked:g,request:h}=(0,l.a)();(0,u.useEffect)(()=>{g&&v&&(null==h||h.get("user/comm/config").then(e=>p(null==e?void 0:e.data.data)),null==h||h.get("user/plan/fetch").then(e=>f(null==e?void 0:e.data.data)))},[g,v]);let x=e=>e.month_price?"month_price":e.quarter_price?"quarter_price":e.half_year_price?"half_year_price":e.year_price?"year_price":e.two_year_price?"two_year_price":e.three_year_price?"three_year_price":e.onetime_price?"onetime_price":"reset_price",y=t=>{var o;return(0,a.jsxs)(i.Zb,{className:"w-full flex flex-col",children:[(0,a.jsxs)(i.Ol,{children:[(0,a.jsxs)(i.ll,{className:"w-full flex flex-row justify-between items-center",children:[(0,a.jsx)("p",{className:"text-2xl font-semibold",children:t.name}),(null==t?void 0:t.capacity_limit)!=null&&(0,a.jsx)(n.C,{variant:"destructive",children:t.capacity_limit>0?e("planHasLeft",{item:null==t?void 0:t.capacity_limit}):e("planNoLeft")})]}),(0,a.jsxs)(i.SZ,{children:[null==t?void 0:t.transfer_enable," GB"]})]}),(0,a.jsx)(i.aY,{className:"flex-grow text-sm min-h-24",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(o=t.content)&&void 0!==o?o:""}})}),(0,a.jsxs)(i.eW,{className:"flex flex-col gap-1 min-h-[60px]",children:[(0,a.jsxs)("div",{className:"w-full flex flex-row gap-3 justify-end items-center p-0",children:[(0,a.jsx)("p",{className:"text-small text-default-400",children:e(x(t))}),(0,a.jsxs)("p",{className:"text-2xl font-semibold",children:[null==m?void 0:m.currency_symbol,(t[x(t)]/100).toFixed(2)]})]}),(0,a.jsx)(s.z,{variant:"outline",className:"font-semibold w-full",disabled:null!=t.capacity_limit&&t.capacity_limit<=0,onClick:()=>{r.push("/plan/".concat(t.id))},children:e("bOrderSub")})]})]})};return(0,a.jsx)("div",{className:"flex flex-col gap-4 lg:gap-6 lg:w-4/5 w-full",children:(0,a.jsxs)(o.mQ,{defaultValue:"all",className:"w-auto",children:[(0,a.jsxs)(o.dr,{children:[(0,a.jsx)(o.SP,{value:"all",children:e("planAll")}),(0,a.jsx)(o.SP,{value:"period",children:e("planByPeriod")}),(0,a.jsx)(o.SP,{value:"one-time",children:e("planByOne")})]}),(0,a.jsx)(o.nU,{value:"all",children:t?(0,a.jsx)("div",{className:"grid lg:grid-cols-3 gap-4",children:t.map(y)}):null}),(0,a.jsx)(o.nU,{value:"period",children:t?(0,a.jsx)("div",{className:"grid lg:grid-cols-3 gap-4",children:t.map(e=>{if("onetime_price"!==x(e))return y(e)})}):null}),(0,a.jsx)(o.nU,{value:"one-time",children:t?(0,a.jsx)("div",{className:"grid lg:grid-cols-3 gap-4",children:t.map(e=>{if("onetime_price"===x(e))return y(e)})}):null})]})})}},4693:function(e,r,t){"use strict";t.d(r,{C:function(){return o}});var a=t(7437);t(2265);var n=t(2218),s=t(7440);let i=(0,n.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:r,variant:t,...n}=e;return(0,a.jsx)("div",{className:(0,s.cn)(i({variant:t}),r),...n})}},495:function(e,r,t){"use strict";t.d(r,{d:function(){return l},z:function(){return d}});var a=t(7437),n=t(2265),s=t(1538),i=t(2218),o=t(7440);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:i,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(l({variant:n,size:i,className:t})),ref:r,...c})});d.displayName="Button"},6013:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var a=t(7437),n=t(2265),s=t(7440);let i=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});i.displayName="Card";let o=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...n})});o.displayName="CardHeader";let l=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...n})});l.displayName="CardTitle";let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...n})});c.displayName="CardContent";let u=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...n})});u.displayName="CardFooter"},5273:function(e,r,t){"use strict";t.d(r,{SP:function(){return d},dr:function(){return l},mQ:function(){return o},nU:function(){return c}});var a=t(7437),n=t(2265),s=t(2447),i=t(7440);let o=s.fC,l=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.aV,{ref:r,className:(0,i.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...n})});l.displayName=s.aV.displayName;let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.xz,{ref:r,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...n})});d.displayName=s.xz.displayName;let c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.VY,{ref:r,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...n})});c.displayName=s.VY.displayName},7651:function(e,r,t){"use strict";t.d(r,{H:function(){return l},a:function(){return d}});var a=t(7437),n=t(2265),s=t(6463),i=t(8472);let o=(0,n.createContext)(void 0),l=e=>{let{children:r}=e,[t,l]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1),u=(0,s.useRouter)(),[f,m]=(0,n.useState)();(0,n.useEffect)(()=>{fetch("/config.json").then(e=>e.json()).then(e=>m(e)).catch(e=>console.error("Error fetching config:",e))},[]);let[p,v]=(0,n.useState)(),g=(0,n.useMemo)(()=>f?(console.log(f),i.Z.create({baseURL:"".concat(null==f?void 0:f.apiUrl,"api/v1/"),headers:{"Content-Type":"application/json"}})):null,[f]);(0,n.useEffect)(()=>{var e;document.title=null!==(e=null==f?void 0:f.title)&&void 0!==e?e:""},[f]),(0,n.useEffect)(()=>{if(!g)return;let e=async()=>{try{let e=await g.get("user/checkLogin");200===e.status&&e.data.data.is_login?l(!0):l(!1)}catch(e){l(!1)}finally{c(!0)}},r=async()=>{try{if(!f)return;let e=await g.get("guest/comm/config");200===e.status&&v(e.data.data)}catch(e){console.log(e)}},t=localStorage.getItem("authToken");t?(g.defaults.headers.common.Authorization=t,e()):c(!0),r()},[g]);let h=async(e,r)=>{try{if(!g)throw Error("Loading");let t=await g.post("passport/auth/login",{email:e,password:r}),a=t.data.data.auth_data;return localStorage.setItem("authToken",a),g.defaults.headers.common.Authorization=a,l(!0),u.push("/dashboard"),{success:!0,data:t.data.data}}catch(e){if(i.Z.isAxiosError(e)){var t;let r=null===(t=e.response)||void 0===t?void 0:t.data;throw(null==r?void 0:r.errors)?Object.values(null==r?void 0:r.errors)[0]:null==r?void 0:r.message}throw e}},x=async(e,r,t,a,n)=>{if(!g)throw Error("Loading");try{let s=await g.post("passport/auth/register",{email:e,password:r,email_code:t,invite_code:a,recaptcha_data:n});return{success:!0,data:s.data.data}}catch(e){if(i.Z.isAxiosError(e)){var s;let r=null===(s=e.response)||void 0===s?void 0:s.data;throw(null==r?void 0:r.errors)?Object.values(null==r?void 0:r.errors)[0]:null==r?void 0:r.message}throw e}},y=async(e,r,t)=>{try{if(!g)throw Error("Loading");let a=await g.post("passport/auth/forget",{email:e,password:r,email_code:t});return{success:!0,data:a.data.data}}catch(e){if(i.Z.isAxiosError(e)){var a;let r=null===(a=e.response)||void 0===a?void 0:a.data;throw(null==r?void 0:r.errors)?Object.values(null==r?void 0:r.errors)[0]:null==r?void 0:r.message}throw e}},b=async(e,r)=>{try{if(!g)throw Error("Loading");let t=await g.post("user/changePassword",{old_password:e,new_password:r});return{success:!0,data:t.data.data}}catch(e){if(i.Z.isAxiosError(e)){var t;let r=null===(t=e.response)||void 0===t?void 0:t.data;throw(null==r?void 0:r.errors)?Object.values(null==r?void 0:r.errors)[0]:null==r?void 0:r.message}throw e}},w=async(e,r)=>{try{if(!g)throw Error("Loading");let t=await g.post("passport/comm/sendEmailVerify",{email:e,recaptcha_data:r});return{success:!0,data:t.data.data}}catch(e){if(i.Z.isAxiosError(e)){var t;let r=null===(t=e.response)||void 0===t?void 0:t.data;throw(null==r?void 0:r.errors)?Object.values(null==r?void 0:r.errors)[0]:null==r?void 0:r.message}throw e}};return(0,a.jsx)(o.Provider,{value:{isLoggedIn:t,isAuthChecked:d,login:h,logout:()=>{if(!g)throw Error("Loading");localStorage.removeItem("authToken"),delete g.defaults.headers.common.Authorization,l(!1),u.push("/login")},register:x,reset:y,changePass:b,sendEmailVerify:w,config:f,webConfig:p,request:g},children:r})},d=()=>{let e=(0,n.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},7440:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var a=t(4839),n=t(6164);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.m6)((0,a.W)(r))}}},function(e){e.O(0,[313,613,118,971,23,744],function(){return e(e.s=5560)}),_N_E=e.O()}]);