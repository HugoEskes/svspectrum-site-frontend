import{S as n,i as s,s as e,j as t,k as r,e as a,m as o,n as c,c as i,a as u,d as f,o as m,f as d,x as $,u as p,v as w}from"../chunks/vendor-800092b8.js";import{g as h,N as l}from"../chunks/NewsTree-c3d2ea65.js";import{H as g}from"../chunks/Image-d4c5ad08.js";import"../chunks/backend-d611d9cd.js";import"../chunks/post-16fb314f.js";import"../chunks/Article-5dcc106a.js";function v(n){let s,e,h,v,k;return s=new g({}),v=new l({props:{news:n[0]}}),{c(){t(s.$$.fragment),e=r(),h=a("main"),t(v.$$.fragment)},l(n){o(s.$$.fragment,n),e=c(n),h=i(n,"MAIN",{});var t=u(h);o(v.$$.fragment,t),t.forEach(f)},m(n,t){m(s,n,t),d(n,e,t),d(n,h,t),m(v,h,null),k=!0},p(n,[s]){const e={};1&s&&(e.news=n[0]),v.$set(e)},i(n){k||($(s.$$.fragment,n),$(v.$$.fragment,n),k=!0)},o(n){p(s.$$.fragment,n),p(v.$$.fragment,n),k=!1},d(n){w(s,n),n&&f(e),n&&f(h),w(v)}}}var k=function(n,s,e,t){return new(e||(e=Promise))((function(r,a){function o(n){try{i(t.next(n))}catch(s){a(s)}}function c(n){try{i(t.throw(n))}catch(s){a(s)}}function i(n){var s;n.done?r(n.value):(s=n.value,s instanceof e?s:new e((function(n){n(s)}))).then(o,c)}i((t=t.apply(n,s||[])).next())}))};function j({page:n,fetch:s,session:e,context:t}){return k(this,void 0,void 0,(function*(){let{res:n,news:s}=yield h();return n.ok?s?{props:{news:s}}:void 0:{status:n.status,error:new Error("database error")}}))}function x(n,s,e){let{news:t}=s;return n.$$set=n=>{"news"in n&&e(0,t=n.news)},[t]}class b extends n{constructor(n){super(),s(this,n,x,v,e,{news:0})}}export{b as default,j as load};
