!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2,n=t.register;n("8N796",function(n,o){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",function(){return s});var l=t("45FY7"),c=t("kE25F"),i=t("gOLZV"),a=t("2ctPu"),r=t("6Jn5J"),u=t("1jXBg"),s=function(){var e,t,n,o,s,d,f=(0,c.useParams)(),v=f.collectionId,p=f.collectionTag,g=f.collectionType,y=(0,i.default)({collectionId:v,collectionTag:p,collectionType:g}),h=(0,a.default)({collectionId:v,collectionTag:p,collectionType:g});return void 0===h.length||void 0===y.length?(0,l.jsx)(r.default,{}):(0,l.jsxs)("div",{className:"collection",children:[(0,l.jsx)("div",{className:"collection__head",children:null===(n=h[0])||void 0===n?void 0:null===(t=n.card)||void 0===t?void 0:null===(e=t.card)||void 0===e?void 0:e.title}),(0,l.jsx)("div",{className:"collection__desc",children:null===(d=h[0])||void 0===d?void 0:null===(s=d.card)||void 0===s?void 0:null===(o=s.card)||void 0===o?void 0:o.description}),(0,l.jsx)("div",{className:"collection__grid",children:y.map(function(e,t){return(0,l.jsx)(u.default,{resData:e.card.card},t)})})]})}}),n("gOLZV",function(n,o){e(n.exports,"default",function(){return r});var l=t("2vGOy"),c=t("f9AIs"),i=t("662EV"),a=t("4Bt61"),r=function(e){var t,n=e.collectionId,o=e.collectionTag,r=e.collectionType,u=(0,c._)((0,a.useState)({}),2),s=u[0],d=u[1];(0,a.useEffect)(function(){f()},[]);var f=(t=(0,l._)(function(){var e,t,l;return(0,i.__generator)(this,function(c){switch(c.label){case 0:return[4,fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&collection=".concat(n,"&tags=").concat(o,"&sortBy=&filters=&type=").concat(r,"&offset=0&page_type=null"))];case 1:return[4,null==(t=c.sent())?void 0:t.json()];case 2:return d(null==(l=c.sent())?void 0:null===(e=l.data)||void 0===e?void 0:e.cards.filter(function(e){var t,n;return(null==e?void 0:null===(n=e.card)||void 0===n?void 0:null===(t=n.card)||void 0===t?void 0:t["@type"])==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"})),[2]}})}),function(){return t.apply(this,arguments)});return s}}),n("2ctPu",function(n,o){e(n.exports,"default",function(){return r});var l=t("2vGOy"),c=t("f9AIs"),i=t("662EV"),a=t("4Bt61"),r=function(e){var t,n=e.collectionId,o=e.collectionTag,r=e.collectionType,u=(0,c._)((0,a.useState)({}),2),s=u[0],d=u[1];(0,a.useEffect)(function(){f()},[]);var f=(t=(0,l._)(function(){var e,t;return(0,i.__generator)(this,function(l){switch(l.label){case 0:return[4,fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0825943&lng=80.2707234&collection=".concat(n,"&tags=").concat(o,"&sortBy=&filters=&type=").concat(r,"&offset=0&page_type=null"))];case 1:return[4,l.sent().json()];case 2:return d(null==(t=l.sent())?void 0:null===(e=t.data)||void 0===e?void 0:e.cards),[2]}})}),function(){return t.apply(this,arguments)});return s}})}();
//# sourceMappingURL=Collection.aceefd42.js.map
