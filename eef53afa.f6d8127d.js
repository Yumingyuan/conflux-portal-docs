(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(9),r=(n(0),n(179)),i={id:"experimental_api",title:"Experimental APIs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Experimental_APIs.md"},l={id:"portal/API_Reference/experimental_api",title:"Experimental APIs",description:"## wallet_watchAsset",source:"@site/docs/en/portal/API_Reference/Experimental_APIs.md",permalink:"/conflux-portal-docs/docs/portal/API_Reference/experimental_api",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Experimental_APIs.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584589253,sidebar:"docs",previous:{title:"The Conflux RPC API",permalink:"/conflux-portal-docs/docs/portal/API_Reference/json_rpc_api"},next:{title:"Signing Data with Conflux Portal",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/signing_data_with_portal"}},s=[{value:"wallet_watchAsset",id:"wallet_watchasset",children:[]},{value:"<code>conflux._metamask</code>",id:"conflux_metamask",children:[{value:"<code>conflux._metamask.isEnabled: () =&gt; boolean</code> (To Be Removed)",id:"conflux_metamaskisenabled---boolean-to-be-removed",children:[]},{value:"<code>conflux._metamask.isApproved: () =&gt; Promise&lt;boolean&gt;</code> (To Be Removed)",id:"conflux_metamaskisapproved---promiseboolean-to-be-removed",children:[]},{value:"<code>conflux._metamask.isUnlocked: () =&gt; Promise&lt;boolean&gt;</code>",id:"conflux_metamaskisunlocked---promiseboolean",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"wallet_watchasset"},"wallet_watchAsset"),Object(r.b)("p",null,"Most all Conflux wallets display some set of tokens, usually from a centrally\ncurated registry of tokens. "),Object(r.b)("p",null,"At Conflux Portal, we believe the future of tokens has the potential to be much\nbigger than any one party can curate, and we want to enable this explosion of\ncreativity.  "),Object(r.b)("p",null,"In support of this goal, we have implemented support for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/estebanmino/EIPs/blob/master/EIPS/eip-747.md"}),"EIP\n747"),", which\nprovides a way for your site to suggest a token that a user might want to track\nin their wallet. "),Object(r.b)("p",null,"The code is simple:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'conflux.sendAsync({\n    method: \'metamask_watchAsset\',\n    params: {\n        "type":"ERC20", // Initially only supports ERC20, but eventually more!\n        "options":{\n            "address": tokenAddress, // The address that the token is at.\n            "symbol": tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.\n            "decimals": tokenDecimals, // The number of decimals in the token\n            "image": tokenImage, // A string url of the token logo\n        },\n    },\n    id: Math.round(Math.random() * 100000),\n}, (err, addedBoolean) => {\n\n})\n')),Object(r.b)("p",null,"We even created a sample Dapp so developers could suggest their tokens to users\nwith a simple hyperlink, without a line of code. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MetaMask/Add-Token"}),"Visit it\nhere"),". "),Object(r.b)("h2",{id:"conflux_metamask"},Object(r.b)("inlineCode",{parentName:"h2"},"conflux._metamask")),Object(r.b)("p",null,"Conflux Portal supports the standard Conflux Provider API as defined in both\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1193.md"}),"EIP-1193")," and\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1102.md"}),"EIP-1102"),". In\naddition to ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.enable()")," and its RPC equivalent\n",Object(r.b)("inlineCode",{parentName:"p"},"conflux.send('cfx_requestAccounts')"),", Conflux Portal also exposes a collection\nof nonstandard convenience methods on the provider object at\n",Object(r.b)("inlineCode",{parentName:"p"},"conflux._metamask"),". ",Object(r.b)("strong",{parentName:"p"},"Using these methods is dangerous")," since other dapp\nbrowsers may or may not implement them; for this reason, these methods are\nintentionally kept at a Conflux Portal specific namespace to avoid confusion with\nstandard provider functionality. "),Object(r.b)("p",null,"Each method and its intended use is described below."),Object(r.b)("h3",{id:"conflux_metamaskisenabled---boolean-to-be-removed"},Object(r.b)("inlineCode",{parentName:"h3"},"conflux._metamask.isEnabled: () => boolean")," (To Be Removed)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," This will be removed in ",Object(r.b)("strong",{parentName:"p"},"Q1 2020"),"."),Object(r.b)("p",null,"This method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," indicating if the current domain has access to\nuser accounts. This is useful for determining if a user has approved account\naccess for the current session. "),Object(r.b)("h3",{id:"conflux_metamaskisapproved---promiseboolean-to-be-removed"},Object(r.b)("inlineCode",{parentName:"h3"},"conflux._metamask.isApproved: () => Promise<boolean>")," (To Be Removed)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," This will be removed in ",Object(r.b)("strong",{parentName:"p"},"Q1 2020"),"."),Object(r.b)("p",null,"This method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," that resolves to a ",Object(r.b)("inlineCode",{parentName:"p"},"Boolean")," indicating if the\ncurrent domain has a cached approval. This is useful for determining if an\napproval popup will show when ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.enable()")," is called, since it indicates\nif a past approval exists. "),Object(r.b)("h3",{id:"conflux_metamaskisunlocked---promiseboolean"},Object(r.b)("inlineCode",{parentName:"h3"},"conflux._metamask.isUnlocked: () => Promise<boolean>")),Object(r.b)("p",null,"This method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," that resolves to a ",Object(r.b)("inlineCode",{parentName:"p"},"Boolean")," indicating if\nConflux Portal is unlocked by the user. This is useful for knowing if\nConflux Portal is unlocked in order to provide meaningful instructions to the\nuser during onboarding. Note that this does not indicate if a user has approved\naccount exposure. "))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.a.createElement(b,l({ref:t},c,{components:n})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);