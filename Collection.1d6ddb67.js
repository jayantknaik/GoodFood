function e(e,t,l,o){Object.defineProperty(e,t,{get:l,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire028a;t.register("apD72",function(l,o){Object.defineProperty(l.exports,"__esModule",{value:!0,configurable:!0}),e(l.exports,"default",function(){return f});var a=t("R1mjg"),n=t("ikwfU"),c=t("amDsz"),i=t("2YOHS"),s=t("fnDEO"),r=t("Ro7xA"),f=()=>{let{collectionId:e,collectionTag:t,collectionType:l}=(0,n.useParams)(),o=(0,c.default)({collectionId:e,collectionTag:t,collectionType:l}),f=(0,i.default)({collectionId:e,collectionTag:t,collectionType:l});return console.log(f),void 0===f.length||void 0===o.length?/*#__PURE__*/(0,a.jsx)(s.default,{}):/*#__PURE__*/(0,a.jsx)("div",{className:"collection",children:/*#__PURE__*/(0,a.jsx)("div",{className:"collection__grid",children:o.map((e,t)=>/*#__PURE__*/(0,a.jsx)(r.default,{resData:e.card.card},t))})})}}),t.register("amDsz",function(l,o){e(l.exports,"default",function(){return n});var a=t("i7uhG"),n=({collectionId:e,collectionTag:t,collectionType:l})=>{let[o,n]=(0,a.useState)({});(0,a.useEffect)(()=>{c()},[]);let c=async()=>{let o=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&collection=${e}&tags=${t}&sortBy=&filters=&type=${l}&offset=0&page_type=null`),a=await o.json();n(a?.data?.cards.filter(e=>e?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"))};return o}}),t.register("2YOHS",function(l,o){e(l.exports,"default",function(){return n});var a=t("i7uhG"),n=({collectionId:e,collectionTag:t,collectionType:l})=>{let[o,n]=(0,a.useState)({});(0,a.useEffect)(()=>{c()},[]);let c=async()=>{let o=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&collection=${e}&tags=${t}&sortBy=&filters=&type=${l}&offset=0&page_type=null`),a=await o.json();n(a?.data?.cards)};return o}});//# sourceMappingURL=Collection.1d6ddb67.js.map

//# sourceMappingURL=Collection.1d6ddb67.js.map
