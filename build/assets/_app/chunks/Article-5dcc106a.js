import{S as s,i as a,s as l,e as t,t as e,c as n,a as r,g as c,d as u,f as o,G as d,h as i,P as h,l as m,Q as p,K as $,k as f,n as v,b as k,R as w,M as x,N as E,O as b,x as g,u as A,B as C,T as H,U as L}from"./vendor-800092b8.js";function R(s){let a,l;return{c(){a=t("h1"),l=e(s[0])},l(t){a=n(t,"H1",{});var e=r(a);l=c(e,s[0]),e.forEach(u)},m(s,t){o(s,a,t),d(a,l)},p(s,a){1&a&&i(l,s[0])},d(s){s&&u(a)}}}function S(s){let a,l;return{c(){a=new h,l=m(),this.h()},l(s){a=p(s),l=m(),this.h()},h(){a.a=l},m(t,e){a.m(s[1],t,e),o(t,l,e)},p(s,l){2&l&&a.p(s[1])},d(s){s&&u(l),s&&a.d()}}}function T(s){let a,l,e,c,i,h=s[0]&&R(s),m=s[1]&&S(s);const p=s[5].default,C=$(p,s,s[4],null);return{c(){a=t("article"),h&&h.c(),l=f(),m&&m.c(),e=f(),C&&C.c(),this.h()},l(s){a=n(s,"ARTICLE",{class:!0});var t=r(a);h&&h.l(t),l=v(t),m&&m.l(t),e=v(t),C&&C.l(t),t.forEach(u),this.h()},h(){k(a,"class",c=w(s[2].class)+" svelte-1vpds60")},m(s,t){o(s,a,t),h&&h.m(a,null),d(a,l),m&&m.m(a,null),d(a,e),C&&C.m(a,null),i=!0},p(s,[t]){s[0]?h?h.p(s,t):(h=R(s),h.c(),h.m(a,l)):h&&(h.d(1),h=null),s[1]?m?m.p(s,t):(m=S(s),m.c(),m.m(a,e)):m&&(m.d(1),m=null),C&&C.p&&(!i||16&t)&&x(C,p,s,s[4],i?b(p,s[4],t,null):E(s[4]),null),(!i||4&t&&c!==(c=w(s[2].class)+" svelte-1vpds60"))&&k(a,"class",c)},i(s){i||(g(C,s),i=!0)},o(s){A(C,s),i=!1},d(s){s&&u(a),h&&h.d(),m&&m.d(),C&&C.d(s)}}}function j(s,a,l){let t,{$$slots:e={},$$scope:n}=a,{Converter:r}=L,{title:c=null}=a,{markdown:u=null}=a,o=new r({headerLevelStart:2,strikethrough:!0});return s.$$set=s=>{l(2,a=C(C({},a),H(s))),"title"in s&&l(0,c=s.title),"markdown"in s&&l(3,u=s.markdown),"$$scope"in s&&l(4,n=s.$$scope)},s.$$.update=()=>{8&s.$$.dirty&&l(1,t=u?o.makeHtml(u):null)},a=H(a),[c,t,a,u,n,e]}class y extends s{constructor(s){super(),a(this,s,j,T,l,{title:0,markdown:3})}}export{y as A};
