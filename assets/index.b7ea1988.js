import{R as e,r as t,E as n,u as l,Q as r,a,b as c}from"./vendor.410d0ab2.js";function u(e){return JSON.stringify(e,null,2)}async function s(e){e()}async function o(e){return e}class i{constructor(e,t){this.status=e,this.message=t}get isOk(){return this.status/100==2}}function m({children:t}){return e.createElement(n,{fallbackRender:t=>(console.log("reported",t.error),e.createElement(e.Fragment,null,"reported: ",u(t.error)))},t)}function d({children:t}){return e.createElement(n,{fallbackRender:t=>{if(t.error instanceof i)return e.createElement(e.Fragment,null,"caught: ",u(t.error));throw t.error}},t)}function E(){const t=l("success",(()=>o(new i(200,"ok"))));return e.createElement("div",null,"success: ",u(t.data))}function f(){const t=l("success404",(()=>o(new i(404,"notfound"))));return t.data.isOk?e.createElement("div",null,"success: ",u(t.data)):e.createElement("div",null,"failed: ",u(t.data))}function p(){const t=l("failure404",(()=>s((()=>{throw new i(404,"notfound")}))));return e.createElement("div",null,"success: ",u(t.data))}function g(){const t=l("failure/simple",(()=>s((()=>{throw Error("failure")}))));return e.createElement("div",null,"success: ",u(t.data))}function v(){return e.createElement("div",null,e.createElement("div",null,e.createElement(m,null,e.createElement(d,null,e.createElement(t.exports.Suspense,{fallback:"loading..."},e.createElement(E,null))))),e.createElement("div",null,e.createElement(m,null,e.createElement(d,null,e.createElement(t.exports.Suspense,{fallback:"loading..."},e.createElement(g,null))))),e.createElement("div",null,e.createElement(m,null,e.createElement(d,null,e.createElement(t.exports.Suspense,{fallback:"loading..."},e.createElement(f,null))))),e.createElement("div",null,e.createElement(m,null,e.createElement(d,null,e.createElement(t.exports.Suspense,{fallback:"loading..."},e.createElement(p,null))))))}const h=new r({defaultOptions:{queries:{suspense:!0,retry:!1}}});a.render(e.createElement(e.StrictMode,null,e.createElement(c,{client:h},e.createElement(v,null))),document.getElementById("root"));
