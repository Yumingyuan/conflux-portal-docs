(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(179)),c={id:"e2e_test_demo",title:"A Demo Dapp We Are Using To Test Conflux Portal",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Quick_Start/E2E_Tets_Dapp.md"},i={id:"portal/Examples/e2e_test_demo",title:"A Demo Dapp We Are Using To Test Conflux Portal",description:"[Here](http://13.57.190.119:9000/contract.html) is a page for testing Conflux",source:"@site/docs/en/portal/Examples/E2E_Tets_Dapp.md",permalink:"/docs/portal/Examples/e2e_test_demo",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Quick_Start/E2E_Tets_Dapp.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584529036,sidebar:"docs",previous:{title:"Sending Transactions",permalink:"/docs/portal/Main_Concepts/sending_transactions"},next:{title:"Conflux Provider API",permalink:"/docs/portal/API_Reference/provider_api"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://13.57.190.119:9000/contract.html"}),"Here")," is a page for testing Conflux\nPortal functions. It contains code examples for testing: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"connect to Conflux Portal"),Object(a.b)("li",{parentName:"ul"},"deploy contract on Conflux Testnet"),Object(a.b)("li",{parentName:"ul"},"send CFX"),Object(a.b)("li",{parentName:"ul"},"deploy a ERC20 token and send the token"),Object(a.b)("li",{parentName:"ul"},"get user accounts"),Object(a.b)("li",{parentName:"ul"},"use ",Object(a.b)("inlineCode",{parentName:"li"},"personal_sign")," to sign data"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cfx_sign")," (deprecated)")),Object(a.b)("p",null,"You can find the source code on\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal/blob/cfx-test/test/e2e/contract-test/"}),"github"),"\nor just download the page and use it at your purpose.  "))}u.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?o.a.createElement(b,i({ref:t},p,{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);