(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{548:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,O=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(O,l(l({ref:t},p),{},{components:n})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(548)),i=["components"],l={id:"options-overlay",title:"Overlay",sidebar_label:"Overlay"},c={unversionedId:"api/options-overlay",id:"version-7.29.1/api/options-overlay",isDocsHomePage:!1,title:"Overlay",description:"Controls overlay options",source:"@site/versioned_docs/version-7.29.1/api/options-overlay.mdx",slug:"/api/options-overlay",permalink:"/react-native-navigation/api/options-overlay",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.29.1/api/options-overlay.mdx",version:"7.29.1",sidebar_label:"Overlay",sidebar:"version-7.29.1/api",previous:{title:"Navigation Bar Options",permalink:"/react-native-navigation/api/options-navigationBar"},next:{title:"Side Menu Options",permalink:"/react-native-navigation/api/options-sideMenu"}},p=[{value:"<code>interceptTouchOutside</code>",id:"intercepttouchoutside",children:[]},{value:"<code>handleKeyboardEvents</code>",id:"handlekeyboardevents",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Controls overlay options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  overlay: {\n\n  }\n}\n")),Object(o.b)("h3",{id:"intercepttouchoutside"},Object(o.b)("inlineCode",{parentName:"h3"},"interceptTouchOutside")),Object(o.b)("p",null,"Controls whether touch events outside the bounds of the overlay are to be handled by content behind the overlay. When set to true, touch events will ",Object(o.b)("strong",{parentName:"p"},"not")," pass through to the underlying content."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Both")))),Object(o.b)("h3",{id:"handlekeyboardevents"},Object(o.b)("inlineCode",{parentName:"h3"},"handleKeyboardEvents")),Object(o.b)("p",null,"Overlays on iOS don't handle keyboard events by default. If your Overlay contains a TextInput component, you'll want to enable this option so that TextInput responds to keyboard events."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"iOS")))))}u.isMDXComponent=!0}}]);