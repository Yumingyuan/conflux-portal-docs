(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(1),r=t(9),o=(t(0),t(179)),c={id:"provider_api",title:"Conflux Provider API",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Conflux_Provider.md"},l={id:"portal/API_Reference/provider_api",title:"Conflux Provider API",description:"Conflux Portal injects a global API into websites visited by its users at",source:"@site/docs/en/portal/API_Reference/Conflux_Provider.md",permalink:"/conflux-portal-docs/docs/portal/API_Reference/provider_api",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Conflux_Provider.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584527569},s=[{value:"Upcoming Provider Changes",id:"upcoming-provider-changes",children:[]},{value:"A Note on Language",id:"a-note-on-language",children:[]},{value:"Properties",id:"properties",children:[{value:"conflux.networkVersion",id:"confluxnetworkversion",children:[]},{value:"conflux.selectedAddress",id:"confluxselectedaddress",children:[]},{value:"conflux.isConflux Portal",id:"confluxisconflux-portal",children:[]}]},{value:"Methods",id:"methods",children:[{value:"conflux.enable()",id:"confluxenable",children:[]},{value:"conflux.send(options, callback) (To Be Replaced)",id:"confluxsendoptions-callback-to-be-replaced",children:[]},{value:"conflux.sendAsync(options, callback)",id:"confluxsendasyncoptions-callback",children:[]},{value:"conflux.autoRefreshOnNetworkChange (To Be Removed)",id:"confluxautorefreshonnetworkchange-to-be-removed",children:[]},{value:"conflux.on(eventName, callback)",id:"confluxoneventname-callback",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"conflux.send(&#39;cfx_requestAccounts&#39;)",id:"confluxsendcfx_requestaccounts",children:[]},{value:"<code>conflux.send(method: string, params: Array&lt;any&gt;)</code>",id:"confluxsendmethod-string-params-arrayany",children:[]},{value:"conflux.on(eventName, callback)",id:"confluxoneventname-callback-1",children:[]},{value:"conflux.sendAsync(options, callback) (Deprecated)",id:"confluxsendasyncoptions-callback-deprecated",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"conflux.isConflux Portal",id:"confluxisconflux-portal-1",children:[]},{value:"conflux.networkVersion (Deprecated)",id:"confluxnetworkversion-deprecated",children:[]},{value:"conflux.selectedAddress (Deprecated)",id:"confluxselectedaddress-deprecated",children:[]}]}],i={rightToc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Conflux Portal injects a global API into websites visited by its users at\n",Object(o.b)("inlineCode",{parentName:"p"},"window.conflux"),". This API allows websites to request user login, load data from\nblockchains the user has a connection to, and suggest that the user sign\nmessages and transactions. You can use this API to detect the user of an Conflux\nbrowser. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"if (typeof window.conflux !== 'undefined') {\n\n  // Conflux user detected. You can now use the provider.\n  const provider = window['conflux']\n}\n")),Object(o.b)("p",null,"The provider API itself is very simple, and wraps ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/conflux-portal-docs/docs/portal/API_Reference/json_rpc_api"}),"Conflux\nJSON-RPC")," formatted messages, which is why developers usually\nuse a convenience library for interacting with the provider, like\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),"js-conflux-sdk"),",\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/liuis/conffle#readme"}),"conffle"),", or others. From those tools,\nyou can generally find sufficient documentation to interact with the provider,\nwithout reading this lower-level API. "),Object(o.b)("p",null,"However, for developers of convenience libraries, and for developers who would\nlike to use features that are not yet supported by their favorite libraries,\nknowledge of the provider API is essential. "),Object(o.b)("h3",{id:"upcoming-provider-changes"},"Upcoming Provider Changes"),Object(o.b)("p",null,"In early 2020, we will be introducing some changes changes to this API, and\nbeginning to deprecate some old synchronous methods. You can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/metamask/breaking-changes-to-the-metamask-inpage-provider-b4dde069dd0a"}),"read more about\nthat transition\nhere"),". "),Object(o.b)("p",null,"We will begin supporting the new API in early 2020. AWe will support the old and\nnew APIs for at least 6 weeks, after which some of the older methods will be\ndeprecated. These changes will make the Conflux Portal inpage provider fully\ncompatible with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1193.md"}),"EIP\n1193")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1102.md"}),"EIP\n1102"),". "),Object(o.b)("p",null,"You can continue reading to learn about the current API. Otherwise, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#new-api"}),"click here\nto learn about the upcoming API changes"),". "),Object(o.b)("h3",{id:"a-note-on-language"},"A Note on Language"),Object(o.b)("p",null,"In our usage, if a feature is ",Object(o.b)("em",{parentName:"p"},"deprecated"),", we strongly discourage its use, and\nmay remove it in the future. Features that will be ",Object(o.b)("em",{parentName:"p"},"removed")," or ",Object(o.b)("em",{parentName:"p"},"replaced")," on a\nparticular date are clearly marked as such. We do not anticipate any need for\nfurther breaking changes after Q1 2020. "),Object(o.b)("h1",{id:"current-api"},"Current API"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"These properties can be used to check the current state of the connected user,\nwhich can be important things to verify before sending a transaction. "),Object(o.b)("h3",{id:"confluxnetworkversion"},"conflux.networkVersion"),Object(o.b)("p",null,"Returns a numeric string representing the current blockchain's network ID. A few\nexample values: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"'1': Conflux Main Network\n'2': Conflux Test network\n")),Object(o.b)("h3",{id:"confluxselectedaddress"},"conflux.selectedAddress"),Object(o.b)("p",null,"Returns a hex-prefixed string representing the current user's selected address,\nex: ",Object(o.b)("inlineCode",{parentName:"p"},'"0xfdea65c8e26263f6d9a1b5de9555d2931a33b825"'),". "),Object(o.b)("h3",{id:"confluxisconflux-portal"},"conflux.isConflux Portal"),Object(o.b)("p",null,"Returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," or ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", representing whether the user has Conflux Portal\ninstalled. "),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"confluxenable"},"conflux.enable()"),Object(o.b)("p",null,"Requests the user provides an conflux address to be identified by. Returns a\npromise of an array of hex-prefixed conflux address strings. "),Object(o.b)("h4",{id:"example-es6"},"Example (ES6)"),Object(o.b)("p",null,"Using an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"}),"async\nfunction"),". "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"try {\n  const accounts = await conflux.enable()\n  // You now have an array of accounts!\n  // Currently only ever one:\n  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']\n\n} catch (error) {\n  // Handle error. Likely the user rejected the login\n  console.error(error)\n}\n")),Object(o.b)("h4",{id:"example-es5"},"Example (ES5)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.enable()\n.then(function (accounts) {\n  // You now have an array of accounts!\n  // Currently only ever one:\n  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']\n})\n.catch(function (error) {\n  // Handle error. Likely the user rejected the login\n  console.error(error)\n})\n")),Object(o.b)("h3",{id:"confluxsendoptions-callback-to-be-replaced"},"conflux.send(options, callback) (To Be Replaced)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This will be replaced with ",Object(o.b)("inlineCode",{parentName:"em"},"conflux.send(method: string, params: Array<any>)"),"\non ",Object(o.b)("strong",{parentName:"em"},"January 13, 2020"),".")," ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/Conflux-Chain/conflux-portal-docs/blob/new-provider/03_API_Reference/01_Conflux_Provider.md#confluxsendmethod-string-params-array"}),"Click\nhere"),"\nfor more information.")," "),Object(o.b)("p",null,"See ",Object(o.b)("inlineCode",{parentName:"p"},"conflux.sendAsync"),", directly below."),Object(o.b)("h3",{id:"confluxsendasyncoptions-callback"},"conflux.sendAsync(options, callback)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"To be superceded by the promise-returning send() method in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md"}),"EIP\n1193"),".")," "),Object(o.b)("p",null,"Sends a message to the web3 browser. Message format maps to the format of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/json-rpc/"}),"the\nConflux JSON-RPC\nAPI"),". "),Object(o.b)("p",null,"Here's an example of everyone's favorite method, ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendTransaction"),", which is\nboth how Ether is sent, and how smart contract methods are called: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'params: [{\n  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n  "gas": "0x76c0", // 30400\n  "gasPrice": "0x9184e72a000", // 10000000000000\n  "value": "0x9184e72a", // 2441406250\n  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"\n}]\n\nconflux.sendAsync({\n  method: \'cfx_sendTransaction\',\n  params: params,\n  from: accounts[0], // Provide the user\'s account to use.\n}, function (err, result) {\n  // A typical node-style, error-first callback.\n  // The result varies by method, per the JSON RPC API.\n  // For example, this method will return a transaction hash on success.\n})\n')),Object(o.b)("h3",{id:"confluxautorefreshonnetworkchange-to-be-removed"},"conflux.autoRefreshOnNetworkChange (To Be Removed)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This will be removed on January 13, 2020. At this time, Conflux Portal will also\nstop reloading the page on network changes.")," ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://medium.com/metamask/no-longer-reloading-pages-on-network-change-fbf041942b44"}),"Click\nhere"),"\nfor more details.")," "),Object(o.b)("p",null,"When the network is changed, Conflux Portal will reload any pages that have made\nrequests to the provider. This automatic reload behavior will be removed in a\nfuture release of Conflux Portal, but in the meantime it can be disabled with\nthis flag. "),Object(o.b)("p",null,"To disable auto-refresh on a network change you can do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.autoRefreshOnNetworkChange = false;\n")),Object(o.b)("p",null,"This can be toggled on or off at any time."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Setting this flag to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," results in the default behavior, which is\nsubject to change. If your site relies upon Conflux Portal reloading it upon\nnetwork change, you will need to trigger the reload yourself in a\n",Object(o.b)("inlineCode",{parentName:"p"},"networkChanged")," event handler to ensure it continues to work with future\nreleases.  "),Object(o.b)("h3",{id:"confluxoneventname-callback"},"conflux.on(eventName, callback)"),Object(o.b)("p",null,"The provider supports listening for some events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"accountsChanged"),", returns updated account array."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"networkChanged"),", returns network ID string.")),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.on('accountsChanged', function (accounts) {\n  // Time to reload your interface with accounts[0]!\n})\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," At the moment, the ",Object(o.b)("inlineCode",{parentName:"p"},"networkChanged")," event is only useful if you\ndisable auto-refresh on network change by setting\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#conflux.autorefreshonnetworkchange"}),Object(o.b)("inlineCode",{parentName:"a"},"conflux.autoRefreshOnNetworkChange"))," to\n",Object(o.b)("inlineCode",{parentName:"p"},"false"),". Otherwise, Conflux Portal will default to auto-reloading pages upon\nnetwork change if they have made requests to the provider. ",Object(o.b)("em",{parentName:"p"},"Conflux Portal will\nstop reloading pages on network change on January 13, 2020, and this setting\nwill be removed.")," ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://medium.com/metamask/no-longer-reloading-pages-on-network-change-fbf041942b44"}),"Click\nhere"),"\nfor more details.")," "),Object(o.b)("h1",{id:"new-api"},"New API"),Object(o.b)("p",null,"This API will become available during the week of ",Object(o.b)("strong",{parentName:"p"},"November 25, 2019"),". It will\nbe the only API supported starting ",Object(o.b)("strong",{parentName:"p"},"January 13, 2020.")," If you want examples of\nhow to setup your dapp using the new API, you can check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/rekmarks/d318677c8fc89e5f7a2f526e00a0768a"}),"this\ngist"),". "),Object(o.b)("h2",{id:"methods-1"},"Methods"),Object(o.b)("h3",{id:"confluxsendcfx_requestaccounts"},"conflux.send('cfx_requestAccounts')"),Object(o.b)("h4",{id:"confluxenable-deprecated"},"conflux.enable() (Deprecated)"),Object(o.b)("p",null,"Requests that the user provides an conflux address to be identified by. Returns\na promise of an array of hex-prefixed conflux address strings. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1102.md"}),"EIP\n1102")," for more\ndetails. "),Object(o.b)("h4",{id:"example-es6-1"},"Example (ES6)"),Object(o.b)("p",null,"Using an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"}),"async\nfunction"),". "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"try {\n  const accounts = await conflux.send('cfx_requestAccounts')\n  // You now have an array of accounts!\n  // Currently only ever one:\n  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']\n\n} catch (error) {\n  if (error.code === 4001) { // EIP 1193 userRejectedRequest error\n    console.log('Please connect to Conflux Portal.')\n  } else {\n    console.error(error)\n  }\n}\n")),Object(o.b)("h4",{id:"example-es5-1"},"Example (ES5)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.send('cfx_requestAccounts')\n.then(function (accounts) {\n  // You now have an array of accounts!\n  // Currently only ever one:\n  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']\n})\n.catch(function (error) {\n  if (error.code === 4001) { // EIP 1193 userRejectedRequest error\n    console.log('Please connect to Conflux Portal.')\n  } else {\n    console.error(error)\n  }\n})\n")),Object(o.b)("h3",{id:"confluxsendmethod-string-params-arrayany"},Object(o.b)("inlineCode",{parentName:"h3"},"conflux.send(method: string, params: Array<any>)")),Object(o.b)("p",null,"The way to send requests to the dapp browser. ",Object(o.b)("inlineCode",{parentName:"p"},"method")," and ",Object(o.b)("inlineCode",{parentName:"p"},"params")," should\nfollow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/conflux/wiki/wiki/JSON-RPC#json-rpc-methods"}),"the Conflux JSON-RPC\nAPI"),". "),Object(o.b)("p",null,"Returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," that resolves to the result of the method. Not all methods\nrequire ",Object(o.b)("inlineCode",{parentName:"p"},"params"),", e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"conflux.send('cfx_accounts')"),". "),Object(o.b)("p",null,"Here's an example of everyone's favorite method, ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendTransaction"),", which is\nboth how Ether is sent, and how smart contract methods are called: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'params: [{\n  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n  "gas": "0x76c0", // 30400\n  "gasPrice": "0x9184e72a000", // 10000000000000\n  "value": "0x9184e72a", // 2441406250\n  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"\n}]\n\nconflux.send(\'cfx_sendTransaction\', params)\n.then(function (result) {\n  // The result varies by method, per the JSON RPC API.\n  // For example, this method will return a transaction hash on success.\n})\n.catch(function (error) {\n // Like a typical promise, returns an error on rejection.\n})\n')),Object(o.b)("h3",{id:"confluxoneventname-callback-1"},"conflux.on(eventName, callback)"),Object(o.b)("p",null,"The provider supports listening for all events specified in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1193.md#events"}),"EIP\n1193"),". "),Object(o.b)("p",null,"The following are especially important for managing the state of your dapp:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"accountsChanged"),", returns an array of the currently available accounts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"chainChanged"),", returns the hex-formatted chain ID string of the currently\nused chain/network. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"networkChanged"),", ",Object(o.b)("em",{parentName:"li"},"(Discouraged)")," returns decimal-formatted network ID string\nof the currently used chain/network. ")),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.on('accountsChanged', function (accounts) {\n  // Time to reload your interface with accounts[0]!\n})\n\nconflux.on('chainChanged', function (chainId) {\n  // Time to make sure your any calls are directed to the correct chain!\n})\n")),Object(o.b)("h4",{id:"list-of-chain-and-network-ids"},"List of Chain and Network IDs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"'1': Conflux Main Network\n'2': Conflux Test network\n")),Object(o.b)("h3",{id:"confluxsendasyncoptions-callback-deprecated"},"conflux.sendAsync(options, callback) (Deprecated)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We strongly discourage the use of this method, which may be removed in the\nfuture.")," "),Object(o.b)("p",null,"Sends a message to the dapp browser. Message format maps to the format of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/json-rpc/"}),"the\nConflux JSON-RPC\nAPI"),". "),Object(o.b)("p",null,"Here's an example of everyone's favorite method, ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendTransaction"),", which is\nboth how Ether is sent, and how smart contract methods are called: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'params: [{\n  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n  "gas": "0x76c0", // 30400\n  "gasPrice": "0x9184e72a000", // 10000000000000\n  "value": "0x9184e72a", // 2441406250\n  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"\n}]\n\nconflux.sendAsync({\n  method: \'cfx_sendTransaction\',\n  params: params,\n  from: accounts[0], // Provide the user\'s account to use.\n}, function (err, result) {\n  // A typical node-style, error-first callback.\n  // The result varies by method, per the JSON RPC API.\n  // For example, this method will return a transaction hash on success.\n})\n')),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("p",null,"Useful for knowing whether ",Object(o.b)("inlineCode",{parentName:"p"},"window.conflux")," is Conflux Portal, but not much else."),Object(o.b)("h3",{id:"confluxisconflux-portal-1"},"conflux.isConflux Portal"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"true")," if the user has Conflux Portal installed, ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(o.b)("h3",{id:"confluxnetworkversion-deprecated"},"conflux.networkVersion (Deprecated)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We strongly discourage the use of this property, which may be removed in the\nfuture.")," "),Object(o.b)("p",null,"Returns a numeric string representing the current blockchain's network ID. A few\nexample values: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"'1': Conflux Main Network\n'2': Conflux Test network\n")),Object(o.b)("h3",{id:"confluxselectedaddress-deprecated"},"conflux.selectedAddress (Deprecated)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We strongly discourage the use of this property, which may be removed in the\nfuture.")," "),Object(o.b)("p",null,"Returns a hex-prefixed string representing the current user's selected address,\nex: ",Object(o.b)("inlineCode",{parentName:"p"},'"0xfdea65c8e26263f6d9a1b5de9555d2931a33b825"'),". "))}b.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),b=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=b(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,h=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return t?r.a.createElement(h,l({ref:n},i,{components:t})):r.a.createElement(h,l({ref:n},i))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);