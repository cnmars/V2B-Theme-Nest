(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{627:function(e,t,r){Promise.resolve().then(r.bind(r,7186))},7186:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(7437),n=r(6013),o=r(3102),s=r(7651),l=r(7822),i=r(8472),c=r(8087),u=r(2265),d=r(7776);function f(e){let{params:t}=e,r=(0,c.useTranslations)("Dashboard"),[f,h]=(0,u.useState)(),[g,m]=(0,u.useState)(""),{isLoggedIn:p,isAuthChecked:v,request:x}=(0,s.a)();(0,u.useEffect)(()=>{let e=null;return v&&p&&(null==x||x.get("user/ticket/fetch?id=".concat(t.id)).then(e=>h(null==e?void 0:e.data.data)),e=setInterval(()=>{null==x||x.get("user/ticket/fetch?id=".concat(t.id)).then(e=>h(null==e?void 0:e.data.data))},1e4)),()=>{e&&clearInterval(e)}},[v,p]);let w=(0,u.useRef)(null);(0,u.useEffect)(()=>{w.current&&(w.current.scrollTop=w.current.scrollHeight)},[null==f?void 0:f.message]);let y=async e=>{if("Enter"===e.key)try{await (null==x?void 0:x.post("user/ticket/reply",{id:t.id,message:g})),null==x||x.get("user/ticket/fetch?id=".concat(t.id)).then(e=>h(null==e?void 0:e.data.data))}catch(e){if(i.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;d.Am.error((null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message)}else d.Am.error(e.message)}};return(0,u.useEffect)(()=>(window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),[g]),(0,a.jsxs)(n.Zb,{className:"max-w-[799px] max-h-[599px] flex flex-col",children:[(0,a.jsxs)(n.Ol,{children:[(0,a.jsx)(n.ll,{children:f?null==f?void 0:f.subject:"　"}),(0,a.jsx)(n.SZ,{children:(0,l.Iq)(null==f?void 0:f.created_at,!0)})]}),(0,a.jsx)(n.aY,{ref:w,className:"flex flex-col gap-3 flex-grow min-h-[440px] max-h-[440px] overflow-y-auto",children:null==f?void 0:f.message.map(e=>(0,a.jsx)("div",{className:"flex ".concat(f.user_id==e.user_id?"justify-end":"justify-start"),children:(0,a.jsxs)("div",{className:"flex flex-col gap-1 max-w-[90%] text-sm",children:[(0,l.Iq)(e.updated_at,!0),(0,a.jsx)(n.Zb,{className:"text-sm flex items-center p-3 break-all\n                                ".concat(f.user_id==e.user_id?"bg-green-400 dark:bg-green-800":"bg-slate-200 dark:bg-gray-800"),children:e.message})]})},e.id.toString()))}),(0,a.jsx)(n.eW,{className:"flex justify-center items-center p-2",children:(0,a.jsx)(o.I,{value:g,onChange:e=>m(e.target.value),placeholder:r("ticketPlaceholder")})})]})}},6013:function(e,t,r){"use strict";r.d(t,{Ol:function(){return l},SZ:function(){return c},Zb:function(){return s},aY:function(){return u},eW:function(){return d},ll:function(){return i}});var a=r(7437),n=r(2265),o=r(7440);let s=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});s.displayName="Card";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",r),...n})});l.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});i.displayName="CardTitle";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...n})});c.displayName="CardDescription";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",r),...n})});u.displayName="CardContent";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",r),...n})});d.displayName="CardFooter"},3102:function(e,t,r){"use strict";r.d(t,{I:function(){return s}});var a=r(7437),n=r(2265),o=r(7440);let s=n.forwardRef((e,t)=>{let{className:r,type:n,...s}=e;return(0,a.jsx)("input",{type:n,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})});s.displayName="Input"},7651:function(e,t,r){"use strict";r.d(t,{H:function(){return i},a:function(){return c}});var a=r(7437),n=r(2265),o=r(6463),s=r(8472);let l=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),[c,u]=(0,n.useState)(!1),d=(0,o.useRouter)(),[f,h]=(0,n.useState)();(0,n.useEffect)(()=>{fetch("/config.json").then(e=>e.json()).then(e=>h(e)).catch(e=>console.error("Error fetching config:",e))},[]);let[g,m]=(0,n.useState)(),p=(0,n.useMemo)(()=>f?(console.log(f),s.Z.create({baseURL:"".concat(null==f?void 0:f.apiUrl,"api/v1/"),headers:{"Content-Type":"application/json"}})):null,[f]);(0,n.useEffect)(()=>{var e;document.title=null!==(e=null==f?void 0:f.title)&&void 0!==e?e:""},[f]),(0,n.useEffect)(()=>{if(!p)return;let e=async()=>{try{let e=await p.get("user/checkLogin");200===e.status&&e.data.data.is_login?i(!0):i(!1)}catch(e){i(!1)}finally{u(!0)}},t=async()=>{try{if(!f)return;let e=await p.get("guest/comm/config");200===e.status&&m(e.data.data)}catch(e){console.log(e)}},r=localStorage.getItem("authToken");r?(p.defaults.headers.common.Authorization=r,e()):u(!0),t()},[p]);let v=async(e,t)=>{try{if(!p)throw Error("Loading");let r=await p.post("passport/auth/login",{email:e,password:t}),a=r.data.data.auth_data;return localStorage.setItem("authToken",a),p.defaults.headers.common.Authorization=a,i(!0),d.push("/dashboard"),{success:!0,data:r.data.data}}catch(e){if(s.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},x=async(e,t,r,a,n)=>{if(!p)throw Error("Loading");try{let o=await p.post("passport/auth/register",{email:e,password:t,email_code:r,invite_code:a,recaptcha_data:n});return{success:!0,data:o.data.data}}catch(e){if(s.Z.isAxiosError(e)){var o;let t=null===(o=e.response)||void 0===o?void 0:o.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},w=async(e,t,r)=>{try{if(!p)throw Error("Loading");let a=await p.post("passport/auth/forget",{email:e,password:t,email_code:r});return{success:!0,data:a.data.data}}catch(e){if(s.Z.isAxiosError(e)){var a;let t=null===(a=e.response)||void 0===a?void 0:a.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},y=async(e,t)=>{try{if(!p)throw Error("Loading");let r=await p.post("user/changePassword",{old_password:e,new_password:t});return{success:!0,data:r.data.data}}catch(e){if(s.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},b=async(e,t)=>{try{if(!p)throw Error("Loading");let r=await p.post("passport/comm/sendEmailVerify",{email:e,recaptcha_data:t});return{success:!0,data:r.data.data}}catch(e){if(s.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}};return(0,a.jsx)(l.Provider,{value:{isLoggedIn:r,isAuthChecked:c,login:v,logout:()=>{if(!p)throw Error("Loading");localStorage.removeItem("authToken"),delete p.defaults.headers.common.Authorization,i(!1),d.push("/login")},register:x,reset:w,changePass:y,sendEmailVerify:b,config:f,webConfig:g,request:p},children:t})},c=()=>{let e=(0,n.useContext)(l);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},7822:function(e,t,r){"use strict";r.d(t,{Iq:function(){return o},OF:function(){return u},SF:function(){return n},Ze:function(){return c}});var a=r(5070);let n=(e,t,r)=>{let n=encodeURIComponent(t);switch(e){case"clash":return"clash://install-config?url=".concat(n,"&name=").concat(r);case"surge":return"surge:///install-config?url=".concat(n,"&name=").concat(r);case"loon":return"loon://import?sub=".concat(n,"&name=").concat(r);case"quanx":return"quantumult-x:///add-resource?remote-resource=".concat(encodeURI(JSON.stringify({server_remote:["".concat(n,", tag=").concat(r)]})));case"shadowrocket":return"shadowrocket://add/sub://".concat((0,a.cv)(n+"&flag=shadowrocket"),"?remark=").concat(r)}return""},o=(e,t)=>{let r=new Date(1e3*e),a=r.getFullYear(),n=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0"),s="".concat(a,"/").concat(n,"/").concat(o);if(t){let e=String(r.getHours()).padStart(2,"0"),t=String(r.getMinutes()).padStart(2,"0"),a=String(r.getSeconds()).padStart(2,"0");s+=" ".concat(e,":").concat(t,":").concat(a)}return s},s=e=>{let t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}},l=(e,t,r)=>"#".concat((16777216+(e<<16)+(t<<8)+r).toString(16).slice(1)),i=(e,t)=>{let{r,g:a,b:n}=s(e);return l(Math.max(Math.min(r+t,255),0),Math.max(Math.min(a+t,255),0),Math.max(Math.min(n+t,255),0))},c=e=>i(e,-50),u=e=>{let t=0,r=0,a=0;4==e.length?(t="0x"+e[1]+e[1],r="0x"+e[2]+e[2],a="0x"+e[3]+e[3]):7==e.length&&(t="0x"+e[1]+e[2],r="0x"+e[3]+e[4],a="0x"+e[5]+e[6]);let n=Math.min(t/=255,r/=255,a/=255),o=Math.max(t,r,a),s=o-n,l=0,i=0,c=0;return(l=Math.round(60*(l=0==s?0:o==t?(r-a)/s%6:o==r?(a-t)/s+2:(t-r)/s+4)))<0&&(l+=360),c=(o+n)/2,l+" "+ +(100*(0==s?0:s/(1-Math.abs(2*c-1)))).toFixed(1)+"% "+(c=+(100*c).toFixed(1))+"%"}},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var a=r(4839),n=r(6164);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},5070:function(e,t,r){"use strict";let a;r.d(t,{cv:function(){return x}});var n=r(6300).Buffer;let o="function"==typeof n;"function"==typeof TextDecoder&&new TextDecoder;let s="function"==typeof TextEncoder?new TextEncoder:void 0,l=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),i=(a={},l.forEach((e,t)=>a[e]=t),a),c=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,u=String.fromCharCode.bind(String);"function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array);let d=e=>e.replace(/=/g,"").replace(/[+\/]/g,e=>"+"==e?"-":"_"),f="function"==typeof btoa?e=>btoa(e):o?e=>n.from(e,"binary").toString("base64"):e=>{let t,r,a,n,o="",s=e.length%3;for(let s=0;s<e.length;){if((r=e.charCodeAt(s++))>255||(a=e.charCodeAt(s++))>255||(n=e.charCodeAt(s++))>255)throw TypeError("invalid character found");o+=l[(t=r<<16|a<<8|n)>>18&63]+l[t>>12&63]+l[t>>6&63]+l[63&t]}return s?o.slice(0,s-3)+"===".substring(s):o},h=o?e=>n.from(e).toString("base64"):e=>{let t=[];for(let r=0,a=e.length;r<a;r+=4096)t.push(u.apply(null,e.subarray(r,r+4096)));return f(t.join(""))},g=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?u(192|t>>>6)+u(128|63&t):u(224|t>>>12&15)+u(128|t>>>6&63)+u(128|63&t)}var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return u(240|t>>>18&7)+u(128|t>>>12&63)+u(128|t>>>6&63)+u(128|63&t)},m=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,p=e=>e.replace(m,g),v=o?e=>n.from(e,"utf8").toString("base64"):s?e=>h(s.encode(e)):e=>f(p(e)),x=(e,t=!1)=>t?d(v(e)):v(e);"function"==typeof atob||o||(e=>{if(e=e.replace(/\s+/g,""),!c.test(e))throw TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r="",a,n;for(let o=0;o<e.length;)t=i[e.charAt(o++)]<<18|i[e.charAt(o++)]<<12|(a=i[e.charAt(o++)])<<6|(n=i[e.charAt(o++)]),r+=64===a?u(t>>16&255):64===n?u(t>>16&255,t>>8&255):u(t>>16&255,t>>8&255,255&t);return r})}},function(e){e.O(0,[313,613,776,971,23,744],function(){return e(e.s=627)}),_N_E=e.O()}]);