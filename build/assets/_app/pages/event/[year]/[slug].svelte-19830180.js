import{S as t,i as e,s as n,j as r,k as s,e as a,m as o,n as l,c,a as f,d as i,b as h,o as $,f as m,G as u,x as g,u as d,v as p,t as v,g as x,h as E,J as Y}from"../../../chunks/vendor-800092b8.js";import{g as w,H as M,I as D}from"../../../chunks/Image-d4c5ad08.js";import{A as k}from"../../../chunks/Article-5dcc106a.js";import"../../../chunks/backend-d611d9cd.js";function T(t,e,n){const r=t.slice();return r[1]=e[n],r}function b(t,e,n){const r=t.slice();return r[4]=e[n],r}function y(t){let e,n,Y,w,M,k,T,b,y,j=t[0].title+"";return e=new D({props:{image:t[0].image}}),{c(){r(e.$$.fragment),n=s(),Y=a("div"),w=s(),M=a("div"),k=s(),T=a("h1"),b=v(j),this.h()},l(t){o(e.$$.fragment,t),n=l(t),Y=c(t,"DIV",{class:!0}),f(Y).forEach(i),w=l(t),M=c(t,"DIV",{class:!0}),f(M).forEach(i),k=l(t),T=c(t,"H1",{class:!0});var r=f(T);b=x(r,j),r.forEach(i),this.h()},h(){h(Y,"class","shade svelte-1eoio6x"),h(M,"class","color svelte-1eoio6x"),h(T,"class","svelte-1eoio6x")},m(t,r){$(e,t,r),m(t,n,r),m(t,Y,r),m(t,w,r),m(t,M,r),m(t,k,r),m(t,T,r),u(T,b),y=!0},p(t,n){const r={};1&n&&(r.image=t[0].image),e.$set(r),(!y||1&n)&&j!==(j=t[0].title+"")&&E(b,j)},i(t){y||(g(e.$$.fragment,t),y=!0)},o(t){d(e.$$.fragment,t),y=!1},d(t){p(e,t),t&&i(n),t&&i(Y),t&&i(w),t&&i(M),t&&i(k),t&&i(T)}}}function j(t){let e,n,r,o,h,$,g,d,p,Y,w,M,D=t[4].title+"",k=t[4].location+"",T=t[4].begin.format("D MMM YYYY H:mm")+"",b=t[4].end.format("D MMM YYYY H:mm")+"";return{c(){e=a("tr"),n=a("td"),r=v(D),o=s(),h=a("td"),$=v(k),g=s(),d=a("td"),p=v(T),Y=v(" tot "),w=v(b),M=s()},l(t){e=c(t,"TR",{});var s=f(e);n=c(s,"TD",{});var a=f(n);r=x(a,D),a.forEach(i),o=l(s),h=c(s,"TD",{});var m=f(h);$=x(m,k),m.forEach(i),g=l(s),d=c(s,"TD",{});var u=f(d);p=x(u,T),Y=x(u," tot "),w=x(u,b),u.forEach(i),M=l(s),s.forEach(i)},m(t,s){m(t,e,s),u(e,n),u(n,r),u(e,o),u(e,h),u(h,$),u(e,g),u(e,d),u(d,p),u(d,Y),u(d,w),u(e,M)},p(t,e){1&e&&D!==(D=t[4].title+"")&&E(r,D),1&e&&k!==(k=t[4].location+"")&&E($,k),1&e&&T!==(T=t[4].begin.format("D MMM YYYY H:mm")+"")&&E(p,T),1&e&&b!==(b=t[4].end.format("D MMM YYYY H:mm")+"")&&E(w,b)},d(t){t&&i(e)}}}function I(t){let e,n=t[0].parts,r=[];for(let s=0;s<n.length;s+=1)r[s]=j(b(t,n,s));return{c(){e=a("table");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=c(t,"TABLE",{class:!0});var n=f(e);for(let e=0;e<r.length;e+=1)r[e].l(n);n.forEach(i),this.h()},h(){h(e,"class","svelte-1eoio6x")},m(t,n){m(t,e,n);for(let s=0;s<r.length;s+=1)r[s].m(e,null)},p(t,s){if(1&s){let a;for(n=t[0].parts,a=0;a<n.length;a+=1){const o=b(t,n,a);r[a]?r[a].p(o,s):(r[a]=j(o),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(t){t&&i(e),Y(r,t)}}}function A(t){let e,n,r,o,$,g,d,p,Y,w,M=t[1].title+"";return{c(){e=a("tr"),n=a("td"),r=a("a"),o=v(M),g=s(),d=a("td"),p=s(),Y=a("td"),w=s(),this.h()},l(t){e=c(t,"TR",{});var s=f(e);n=c(s,"TD",{});var a=f(n);r=c(a,"A",{href:!0});var h=f(r);o=x(h,M),h.forEach(i),a.forEach(i),g=l(s),d=c(s,"TD",{}),f(d).forEach(i),p=l(s),Y=c(s,"TD",{}),f(Y).forEach(i),w=l(s),s.forEach(i),this.h()},h(){h(r,"href",$=t[1].url)},m(t,s){m(t,e,s),u(e,n),u(n,r),u(r,o),u(e,g),u(e,d),u(e,p),u(e,Y),u(e,w)},p(t,e){1&e&&M!==(M=t[1].title+"")&&E(o,M),1&e&&$!==($=t[1].url)&&h(r,"href",$)},d(t){t&&i(e)}}}function H(t){let e,n=t[0].enrol,r=[];for(let s=0;s<n.length;s+=1)r[s]=A(T(t,n,s));return{c(){e=a("table");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=c(t,"TABLE",{class:!0});var n=f(e);for(let e=0;e<r.length;e+=1)r[e].l(n);n.forEach(i),this.h()},h(){h(e,"class","svelte-1eoio6x")},m(t,n){m(t,e,n);for(let s=0;s<r.length;s+=1)r[s].m(e,null)},p(t,s){if(1&s){let a;for(n=t[0].enrol,a=0;a<n.length;a+=1){const o=T(t,n,a);r[a]?r[a].p(o,s):(r[a]=A(o),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(t){t&&i(e),Y(r,t)}}}function B(t){let e,n,v,x,E,Y,w,D,T,b,j;return e=new M({props:{$$slots:{default:[y]},$$scope:{ctx:t}}}),x=new k({props:{markdown:t[0].description,title:"Beschrijving",class:"desc"}}),Y=new k({props:{markdown:t[0].info,title:"Practische Informatie",class:"info"}}),D=new k({props:{title:"Onderdelen",class:"parts",$$slots:{default:[I]},$$scope:{ctx:t}}}),b=new k({props:{title:"Inschrijven",class:"enrol",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment),n=s(),v=a("main"),r(x.$$.fragment),E=s(),r(Y.$$.fragment),w=s(),r(D.$$.fragment),T=s(),r(b.$$.fragment),this.h()},l(t){o(e.$$.fragment,t),n=l(t),v=c(t,"MAIN",{class:!0});var r=f(v);o(x.$$.fragment,r),E=l(r),o(Y.$$.fragment,r),w=l(r),o(D.$$.fragment,r),T=l(r),o(b.$$.fragment,r),r.forEach(i),this.h()},h(){h(v,"class","svelte-1eoio6x")},m(t,r){$(e,t,r),m(t,n,r),m(t,v,r),$(x,v,null),u(v,E),$(Y,v,null),u(v,w),$(D,v,null),u(v,T),$(b,v,null),j=!0},p(t,[n]){const r={};129&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const s={};1&n&&(s.markdown=t[0].description),x.$set(s);const a={};1&n&&(a.markdown=t[0].info),Y.$set(a);const o={};129&n&&(o.$$scope={dirty:n,ctx:t}),D.$set(o);const l={};129&n&&(l.$$scope={dirty:n,ctx:t}),b.$set(l)},i(t){j||(g(e.$$.fragment,t),g(x.$$.fragment,t),g(Y.$$.fragment,t),g(D.$$.fragment,t),g(b.$$.fragment,t),j=!0)},o(t){d(e.$$.fragment,t),d(x.$$.fragment,t),d(Y.$$.fragment,t),d(D.$$.fragment,t),d(b.$$.fragment,t),j=!1},d(t){p(e,t),t&&i(n),t&&i(v),p(x),p(Y),p(D),p(b)}}}var L=function(t,e,n,r){return new(n||(n=Promise))((function(s,a){function o(t){try{c(r.next(t))}catch(e){a(e)}}function l(t){try{c(r.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,l)}c((r=r.apply(t,e||[])).next())}))};function P({page:t,fetch:e,session:n,context:r}){return L(this,void 0,void 0,(function*(){const e=`event/${t.params.year}/${t.params.slug}`;let{res:n,event:r}=yield w(e);return n.ok?r?{props:{event:r}}:void 0:{status:n.status,error:new Error("database error")}}))}function R(t,e,n){let{event:r}=e;return t.$$set=t=>{"event"in t&&n(0,r=t.event)},[r]}class V extends t{constructor(t){super(),e(this,t,R,B,n,{event:0})}}export{V as default,P as load};
