(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{4444:function(e,t,r){Promise.resolve().then(r.bind(r,8476))},8476:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var a=r(7437),n=r(495),l=r(6013),s=r(7135),o=r(9041),i=r(7651),d=r(7822),c=r(8472),u=r(8087),f=r(6463),h=r(2265),m=r(7776);function x(e){let{params:t}=e,r=(0,u.useTranslations)("Dashboard"),x=(0,f.useRouter)(),[v,g]=(0,h.useState)(),[p,j]=(0,h.useState)(),[y,w]=(0,h.useState)(),[b,_]=(0,h.useState)(""),{isLoggedIn:N,isAuthChecked:S,request:A}=(0,i.a)();(0,h.useEffect)(()=>{S&&N&&(null==A||A.get("user/order/getPaymentMethod").then(e=>w(null==e?void 0:e.data.data)),null==A||A.get("user/comm/config").then(e=>j(null==e?void 0:e.data.data)),null==A||A.get("user/order/detail?trade_no=".concat(t.id)).then(e=>g(null==e?void 0:e.data.data)))},[S,N]);let E=async()=>{try{let e=await (null==A?void 0:A.get("user/order/check?trade_no=".concat(t.id)));return null==e?void 0:e.data.data}catch(e){console.log(e)}};(0,h.useEffect)(()=>{let e=setInterval(()=>{E().then(r=>{0!=r&&(clearInterval(e),null==A||A.get("user/order/detail?trade_no=".concat(t.id)).then(e=>g(null==e?void 0:e.data.data)))})},5e3);return()=>clearInterval(e)},[t.id]),(0,h.useEffect)(()=>{y&&y.length>0&&_(y[0].id.toString())},[y]);let C=e=>{if(!y||!b||0==e)return 0;let t=0,r=y.find(e=>b==e.id.toString());return r&&(r.handling_fee_percent&&(t=e*parseFloat(r.handling_fee_percent)/100),r.handling_fee_fixed&&(t+=parseInt(r.handling_fee_fixed))),t};return v&&p&&y?(0,a.jsxs)("div",{className:"flex flex-col gap-4 lg:gap-6 lg:w-4/5 w-full",children:[(0,a.jsxs)("div",{className:"md:flex md:flex-row grid grid-cols-1 grid-flow-row gap-3 w-full",children:[(0,a.jsxs)(l.Zb,{className:"w-full",children:[(0,a.jsxs)(l.Ol,{children:[(0,a.jsx)(l.ll,{children:r("cardInfoSub")}),(0,a.jsx)(l.SZ,{})]}),(0,a.jsx)(l.aY,{children:(0,a.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderName")}),(0,a.jsx)(s._,{children:null==v?void 0:v.plan.name})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderType")}),(0,a.jsx)(s._,{children:(null==v?void 0:v.period)?r(null==v?void 0:v.period):""})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderTraffic")}),(0,a.jsxs)(s._,{children:[null==v?void 0:v.plan.transfer_enable," GB"]})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderStatus")}),(0,a.jsx)(s._,{children:(null==v?void 0:v.status)>=0?r("orderStatus"+(null==v?void 0:v.status)):""})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderPricing")}),(0,a.jsxs)(s._,{children:[null==p?void 0:p.currency_symbol," ",((null==v?void 0:v.plan[null==v?void 0:v.period])/100).toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderDiscount")}),(0,a.jsxs)(s._,{children:["- ",null==p?void 0:p.currency_symbol," ",((null==v?void 0:v.discount_amount)/100).toFixed(2)]})]})]})})]}),(0,a.jsxs)(l.Zb,{className:"w-full",children:[(0,a.jsxs)(l.Ol,{children:[(0,a.jsx)(l.ll,{children:r("cardPriceSub")}),(0,a.jsx)(l.SZ,{})]}),(0,a.jsx)(l.aY,{children:(0,a.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderTradeNo")}),(0,a.jsx)(s._,{children:null==v?void 0:v.trade_no})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderCreate")}),(0,a.jsx)(s._,{children:(0,d.Iq)(null==v?void 0:v.created_at,!0)})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderBalanceUse")}),(0,a.jsxs)(s._,{children:[null==p?void 0:p.currency_symbol," ",(null==v?void 0:v.balance_amount)?(v.balance_amount/100).toFixed(2):"0.00"]})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderBalanceDiscount")}),(0,a.jsxs)(s._,{children:[null==p?void 0:p.currency_symbol," ",(null==v?void 0:v.surplus_amount)?(v.surplus_amount/100).toFixed(2):"0.00"]})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderBalanceRefund")}),(0,a.jsxs)(s._,{children:[null==p?void 0:p.currency_symbol," ",(null==v?void 0:v.refund_amount)?(v.refund_amount/100).toFixed(2):"0.00"]})]}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-end",children:[(0,a.jsx)(s._,{className:"text-md",children:r("orderGatewayFee")}),(0,a.jsxs)(s._,{children:[null==p?void 0:p.currency_symbol," ",(C(null==v?void 0:v.total_amount)/100).toFixed(2)]})]})]})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-3",children:[(null==v?void 0:v.status)==0?(0,a.jsxs)(l.Zb,{className:"w-full",children:[(0,a.jsxs)(l.Ol,{children:[(0,a.jsx)(l.ll,{children:r("cardGateway")}),(0,a.jsx)(l.SZ,{})]}),(0,a.jsx)(l.aY,{children:(0,a.jsx)(o.E,{value:b,onValueChange:_,children:null==y?void 0:y.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(o.m,{value:t.toString(),id:e.id.toString()}),(0,a.jsx)(s._,{htmlFor:e.id.toString(),children:e.name})]},t.toString()))})})]}):null,(null==v?void 0:v.status)==0?(0,a.jsx)(l.Zb,{className:"w-full",children:(0,a.jsxs)(l.Ol,{className:"flex flex-row gap-3 justify-between p-4 items-center",children:[(0,a.jsxs)("p",{className:"text-lg font-bold",children:[r("orderTotal"),null==p?void 0:p.currency_symbol,((v.total_amount+C(v.total_amount))/100).toFixed(2)]}),(0,a.jsx)(n.z,{color:"primary",onClick:async()=>{try{let e=await (null==A?void 0:A.post("user/order/checkout",{trade_no:t.id,method:y[parseInt(b)].id}));(null==e?void 0:e.data.data)&&x.push(null==e?void 0:e.data.data)}catch(t){if(c.Z.isAxiosError(t)){var e;let r=null===(e=t.response)||void 0===e?void 0:e.data;m.Am.error((null==r?void 0:r.errors)?Object.values(null==r?void 0:r.errors)[0]:null==r?void 0:r.message)}else m.Am.error(t.message)}},children:r("orderOrder")})]})}):null]})]}):null}},495:function(e,t,r){"use strict";r.d(t,{d:function(){return i},z:function(){return d}});var a=r(7437),n=r(2265),l=r(1538),s=r(2218),o=r(7440);let i=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:s,asChild:d=!1,...c}=e,u=d?l.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:n,size:s,className:r})),ref:t,...c})});d.displayName="Button"},6013:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return s},aY:function(){return c},eW:function(){return u},ll:function(){return i}});var a=r(7437),n=r(2265),l=r(7440);let s=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});s.displayName="Card";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...n})});o.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});i.displayName="CardTitle";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...n})});c.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...n})});u.displayName="CardFooter"},7135:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var a=r(7437),n=r(2265),l=r(8364),s=r(2218),o=r(7440);let i=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.f,{ref:t,className:(0,o.cn)(i(),r),...n})});d.displayName=l.f.displayName},9041:function(e,t,r){"use strict";r.d(t,{E:function(){return i},m:function(){return d}});var a=r(7437),n=r(2265),l=r(9497),s=r(8165),o=r(7440);let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.fC,{className:(0,o.cn)("grid gap-2",r),...n,ref:t})});i.displayName=l.fC.displayName;let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(l.ck,{ref:t,className:(0,o.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),...n,children:(0,a.jsx)(l.z$,{className:"flex items-center justify-center",children:(0,a.jsx)(s.Z,{className:"h-2.5 w-2.5 fill-current text-current"})})})});d.displayName=l.ck.displayName},7651:function(e,t,r){"use strict";r.d(t,{H:function(){return i},a:function(){return d}});var a=r(7437),n=r(2265),l=r(6463),s=r(8472);let o=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1),u=(0,l.useRouter)(),[f,h]=(0,n.useState)();(0,n.useEffect)(()=>{fetch("/config.json").then(e=>e.json()).then(e=>h(e)).catch(e=>console.error("Error fetching config:",e))},[]);let[m,x]=(0,n.useState)(),v=(0,n.useMemo)(()=>f?(console.log(f),s.Z.create({baseURL:"".concat(null==f?void 0:f.apiUrl,"api/v1/"),headers:{"Content-Type":"application/json"}})):null,[f]);(0,n.useEffect)(()=>{var e;document.title=null!==(e=null==f?void 0:f.title)&&void 0!==e?e:""},[f]),(0,n.useEffect)(()=>{if(!v)return;let e=async()=>{try{let e=await v.get("user/checkLogin");200===e.status&&e.data.data.is_login?i(!0):i(!1)}catch(e){i(!1)}finally{c(!0)}},t=async()=>{try{if(!f)return;let e=await v.get("guest/comm/config");200===e.status&&x(e.data.data)}catch(e){console.log(e)}},r=localStorage.getItem("authToken");r?(v.defaults.headers.common.Authorization=r,e()):c(!0),t()},[v]);let g=async(e,t)=>{try{if(!v)throw Error("Loading");let r=await v.post("passport/auth/login",{email:e,password:t}),a=r.data.data.auth_data;return localStorage.setItem("authToken",a),v.defaults.headers.common.Authorization=a,i(!0),u.push("/dashboard"),{success:!0,data:r.data.data}}catch(e){if(s.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},p=async(e,t,r,a,n)=>{if(!v)throw Error("Loading");try{let l=await v.post("passport/auth/register",{email:e,password:t,email_code:r,invite_code:a,recaptcha_data:n});return{success:!0,data:l.data.data}}catch(e){if(s.Z.isAxiosError(e)){var l;let t=null===(l=e.response)||void 0===l?void 0:l.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},j=async(e,t,r)=>{try{if(!v)throw Error("Loading");let a=await v.post("passport/auth/forget",{email:e,password:t,email_code:r});return{success:!0,data:a.data.data}}catch(e){if(s.Z.isAxiosError(e)){var a;let t=null===(a=e.response)||void 0===a?void 0:a.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},y=async(e,t)=>{try{if(!v)throw Error("Loading");let r=await v.post("user/changePassword",{old_password:e,new_password:t});return{success:!0,data:r.data.data}}catch(e){if(s.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},w=async(e,t)=>{try{if(!v)throw Error("Loading");let r=await v.post("passport/comm/sendEmailVerify",{email:e,recaptcha_data:t});return{success:!0,data:r.data.data}}catch(e){if(s.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}};return(0,a.jsx)(o.Provider,{value:{isLoggedIn:r,isAuthChecked:d,login:g,logout:()=>{if(!v)throw Error("Loading");localStorage.removeItem("authToken"),delete v.defaults.headers.common.Authorization,i(!1),u.push("/login")},register:p,reset:j,changePass:y,sendEmailVerify:w,config:f,webConfig:m,request:v},children:t})},d=()=>{let e=(0,n.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},7822:function(e,t,r){"use strict";r.d(t,{Iq:function(){return l},OF:function(){return u},SF:function(){return n},Ze:function(){return c}});var a=r(5070);let n=(e,t,r)=>{let n=encodeURIComponent(t);switch(e){case"clash":return"clash://install-config?url=".concat(n,"&name=").concat(r);case"surge":return"surge:///install-config?url=".concat(n,"&name=").concat(r);case"loon":return"loon://import?sub=".concat(n,"&name=").concat(r);case"quanx":return"quantumult-x:///add-resource?remote-resource=".concat(encodeURI(JSON.stringify({server_remote:["".concat(n,", tag=").concat(r)]})));case"shadowrocket":return"shadowrocket://add/sub://".concat((0,a.cv)(n+"&flag=shadowrocket"),"?remark=").concat(r)}return""},l=(e,t)=>{let r=new Date(1e3*e),a=r.getFullYear(),n=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getDate()).padStart(2,"0"),s="".concat(a,"/").concat(n,"/").concat(l);if(t){let e=String(r.getHours()).padStart(2,"0"),t=String(r.getMinutes()).padStart(2,"0"),a=String(r.getSeconds()).padStart(2,"0");s+=" ".concat(e,":").concat(t,":").concat(a)}return s},s=e=>{let t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}},o=(e,t,r)=>"#".concat((16777216+(e<<16)+(t<<8)+r).toString(16).slice(1)),i=e=>{let{r:t,g:r,b:a}=s(e);return(299*t+587*r+114*a)/1e3<128},d=(e,t)=>{let{r,g:a,b:n}=s(e);return i(e)?o(255-r,255-a,255-n):o(Math.min(255,Math.max(0,r+t)),Math.min(255,Math.max(0,a+t)),Math.min(255,Math.max(0,n+t)))},c=e=>d(e,30),u=e=>{let t=0,r=0,a=0;4==e.length?(t="0x"+e[1]+e[1],r="0x"+e[2]+e[2],a="0x"+e[3]+e[3]):7==e.length&&(t="0x"+e[1]+e[2],r="0x"+e[3]+e[4],a="0x"+e[5]+e[6]);let n=Math.min(t/=255,r/=255,a/=255),l=Math.max(t,r,a),s=l-n,o=0,i=0,d=0;return(o=Math.round(60*(o=0==s?0:l==t?(r-a)/s%6:l==r?(a-t)/s+2:(t-r)/s+4)))<0&&(o+=360),d=(l+n)/2,o+" "+ +(100*(0==s?0:s/(1-Math.abs(2*d-1)))).toFixed(1)+"% "+(d=+(100*d).toFixed(1))+"%"}},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var a=r(4839),n=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},5070:function(e,t,r){"use strict";let a;r.d(t,{cv:function(){return p}});var n=r(6300).Buffer;let l="function"==typeof n;"function"==typeof TextDecoder&&new TextDecoder;let s="function"==typeof TextEncoder?new TextEncoder:void 0,o=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),i=(a={},o.forEach((e,t)=>a[e]=t),a),d=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String);"function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array);let u=e=>e.replace(/=/g,"").replace(/[+\/]/g,e=>"+"==e?"-":"_"),f="function"==typeof btoa?e=>btoa(e):l?e=>n.from(e,"binary").toString("base64"):e=>{let t,r,a,n,l="",s=e.length%3;for(let s=0;s<e.length;){if((r=e.charCodeAt(s++))>255||(a=e.charCodeAt(s++))>255||(n=e.charCodeAt(s++))>255)throw TypeError("invalid character found");l+=o[(t=r<<16|a<<8|n)>>18&63]+o[t>>12&63]+o[t>>6&63]+o[63&t]}return s?l.slice(0,s-3)+"===".substring(s):l},h=l?e=>n.from(e).toString("base64"):e=>{let t=[];for(let r=0,a=e.length;r<a;r+=4096)t.push(c.apply(null,e.subarray(r,r+4096)));return f(t.join(""))},m=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?c(192|t>>>6)+c(128|63&t):c(224|t>>>12&15)+c(128|t>>>6&63)+c(128|63&t)}var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return c(240|t>>>18&7)+c(128|t>>>12&63)+c(128|t>>>6&63)+c(128|63&t)},x=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,v=e=>e.replace(x,m),g=l?e=>n.from(e,"utf8").toString("base64"):s?e=>h(s.encode(e)):e=>f(v(e)),p=(e,t=!1)=>t?u(g(e)):g(e);"function"==typeof atob||l||(e=>{if(e=e.replace(/\s+/g,""),!d.test(e))throw TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r="",a,n;for(let l=0;l<e.length;)t=i[e.charAt(l++)]<<18|i[e.charAt(l++)]<<12|(a=i[e.charAt(l++)])<<6|(n=i[e.charAt(l++)]),r+=64===a?c(t>>16&255):64===n?c(t>>16&255,t>>8&255):c(t>>16&255,t>>8&255,255&t);return r})}},function(e){e.O(0,[313,613,776,289,971,23,744],function(){return e(e.s=4444)}),_N_E=e.O()}]);