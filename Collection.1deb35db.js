!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire028a;t.register("8N796",function(n,o){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",function(){return u});var l=t("45FY7"),c=t("kE25F"),i=t("gOLZV"),r=t("2ctPu"),a=t("6Jn5J"),s=t("1jXBg"),u=function(){var e,t,n,o,u,d,f=(0,c.useParams)(),v=f.collectionId,g=f.collectionTag,p=f.collectionType,y=(0,i.default)({collectionId:v,collectionTag:g,collectionType:p}),h=(0,r.default)({collectionId:v,collectionTag:g,collectionType:p});return console.log(h),void 0===y.length?/*#__PURE__*/(0,l.jsx)(a.default,{}):/*#__PURE__*/(0,l.jsxs)("div",{className:"collection",children:[/*#__PURE__*/(0,l.jsx)("div",{className:"collection__head",children:null===(e=h[0])||void 0===e?void 0:null===(t=e.card)||void 0===t?void 0:null===(n=t.card)||void 0===n?void 0:n.title}),/*#__PURE__*/(0,l.jsx)("div",{className:"collection__desc",children:null===(o=h[0])||void 0===o?void 0:null===(u=o.card)||void 0===u?void 0:null===(d=u.card)||void 0===d?void 0:d.description}),/*#__PURE__*/(0,l.jsx)("div",{className:"collection__grid",children:y.map(function(e,t){return/*#__PURE__*/(0,l.jsx)(s.default,{resData:e.card.card},t)})})]})}}),t.register("gOLZV",function(n,o){e(n.exports,"default",function(){return a});var l=t("2vGOy"),c=t("f9AIs"),i=t("662EV"),r=t("4Bt61"),a=function(e){var t,n=e.collectionId,o=e.collectionTag,a=e.collectionType,s=(0,c._)((0,r.useState)({}),2),u=s[0],d=s[1];(0,r.useEffect)(function(){f()},[]);var f=(t=(0,l._)(function(){var e,t;return(0,i.__generator)(this,function(l){switch(l.label){case 0:return[4,fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&collection=".concat(n,"&tags=").concat(o,"&sortBy=&filters=&type=").concat(a,"&offset=0&page_type=null"))];case 1:return[4,l.sent().json()];case 2:return d(null==(t=l.sent())?void 0:null===(e=t.data)||void 0===e?void 0:e.cards.filter(function(e){var t,n;return(null==e?void 0:null===(t=e.card)||void 0===t?void 0:null===(n=t.card)||void 0===n?void 0:n["@type"])==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"})),[2]}})}),function(){return t.apply(this,arguments)});return u}}),t.register("2ctPu",function(n,o){e(n.exports,"default",function(){return a});var l=t("2vGOy"),c=t("f9AIs"),i=t("662EV"),r=t("4Bt61"),a=function(e){var t,n=e.collectionId,o=e.collectionTag,a=e.collectionType,s=(0,c._)((0,r.useState)({}),2),u=s[0],d=s[1];(0,r.useEffect)(function(){f()},[]);var f=(t=(0,l._)(function(){var e,t;return(0,i.__generator)(this,function(l){switch(l.label){case 0:return[4,fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&collection=".concat(n,"&tags=").concat(o,"&sortBy=&filters=&type=").concat(a,"&offset=0&page_type=null"))];case 1:return[4,l.sent().json()];case 2:return d(null==(t=l.sent())?void 0:null===(e=t.data)||void 0===e?void 0:e.cards),[2]}})}),function(){return t.apply(this,arguments)});return u}})}();//# sourceMappingURL=Collection.1deb35db.js.map

//# sourceMappingURL=Collection.1deb35db.js.map
