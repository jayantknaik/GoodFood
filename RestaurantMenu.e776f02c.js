// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bqSDJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9583d34fe776f02c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"3IzyK":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$76cc = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$76cc.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _shimmer = require("../components/Shimmer");
var _shimmerDefault = parcelHelpers.interopDefault(_shimmer);
var _reactRouterDom = require("react-router-dom");
var _footer = require("../components/Footer");
var _footerDefault = parcelHelpers.interopDefault(_footer);
var _useFetchResInfo = require("../utils/hooks/useFetchResInfo");
var _useFetchResInfoDefault = parcelHelpers.interopDefault(_useFetchResInfo);
var _useFetchResCategories = require("../utils/hooks/useFetchResCategories");
var _useFetchResCategoriesDefault = parcelHelpers.interopDefault(_useFetchResCategories);
var _constants = require("../utils/constants");
var _dummyFoodJpg = require("../../assets/images/dummyFood.jpg");
var _dummyFoodJpgDefault = parcelHelpers.interopDefault(_dummyFoodJpg);
var _restaurantCategory = require("../components/restaurant/RestaurantCategory");
var _restaurantCategoryDefault = parcelHelpers.interopDefault(_restaurantCategory);
var _menuScss = require("../scss/pages/menu.scss");
var _s = $RefreshSig$();
const RestaurantMenu = ()=>{
    _s();
    let { resId } = (0, _reactRouterDom.useParams)();
    let resInfo = (0, _useFetchResInfoDefault.default)(resId);
    let resCategories = (0, _useFetchResCategoriesDefault.default)(resId);
    const { name, avgRating, totalRatingsString, cuisines, areaName, costForTwo, cloudinaryImageId } = resInfo;
    const [scrollUpArrow, setScrollUpArrow] = (0, _react.useState)(false);
    const [isExpanded, setIsExpanded] = (0, _react.useState)("cat-0");
    (0, _react.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 100) setScrollUpArrow(true);
            else setScrollUpArrow(false);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };
    const toggleCategory = ({ id })=>{
        isExpanded === id ? setIsExpanded("") : setIsExpanded(id);
    };
    return resCategories == null ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerDefault.default), {}, void 0, false, {
        fileName: "src/pages/RestaurantMenu.jsx",
        lineNumber: 49,
        columnNumber: 36
    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "menu",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "menu__img",
                        src: (0, _constants.IMG_URL) + cloudinaryImageId,
                        onError: (e)=>e.target.src = (0, _dummyFoodJpgDefault.default),
                        alt: ""
                    }, void 0, false, {
                        fileName: "src/pages/RestaurantMenu.jsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "menu__info",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "menu__info__scroll",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "menu__info-container first",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "menu__row",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "menu__name",
                                                    children: name
                                                }, void 0, false, {
                                                    fileName: "src/pages/RestaurantMenu.jsx",
                                                    lineNumber: 58,
                                                    columnNumber: 29
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "menu__rating-container",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "menu__rating",
                                                            children: avgRating
                                                        }, void 0, false, {
                                                            fileName: "src/pages/RestaurantMenu.jsx",
                                                            lineNumber: 60,
                                                            columnNumber: 29
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "menu__rating-total",
                                                            children: totalRatingsString
                                                        }, void 0, false, {
                                                            fileName: "src/pages/RestaurantMenu.jsx",
                                                            lineNumber: 61,
                                                            columnNumber: 29
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/RestaurantMenu.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 29
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/RestaurantMenu.jsx",
                                            lineNumber: 57,
                                            columnNumber: 25
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "menu__cuisines",
                                            children: cuisines.join(", ")
                                        }, void 0, false, {
                                            fileName: "src/pages/RestaurantMenu.jsx",
                                            lineNumber: 64,
                                            columnNumber: 25
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/RestaurantMenu.jsx",
                                    lineNumber: 56,
                                    columnNumber: 21
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "menu__info-container second",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "menu__area",
                                            children: areaName
                                        }, void 0, false, {
                                            fileName: "src/pages/RestaurantMenu.jsx",
                                            lineNumber: 68,
                                            columnNumber: 25
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "menu__cost",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "rupees-arial",
                                                    children: "₹"
                                                }, void 0, false, {
                                                    fileName: "src/pages/RestaurantMenu.jsx",
                                                    lineNumber: 69,
                                                    columnNumber: 53
                                                }, undefined),
                                                costForTwo / 100,
                                                " for two"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/RestaurantMenu.jsx",
                                            lineNumber: 69,
                                            columnNumber: 25
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/RestaurantMenu.jsx",
                                    lineNumber: 67,
                                    columnNumber: 21
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "menu__info-container third",
                                    children: resCategories.map((item, index)=>{
                                        const { title, itemCards } = item.card.card;
                                        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantCategoryDefault.default), {
                                            id: `cat-${index}`,
                                            title: title,
                                            itemCards: itemCards,
                                            isExpanded: isExpanded,
                                            toggleCategory: toggleCategory
                                        }, `cat-${index}`, false, {
                                            fileName: "src/pages/RestaurantMenu.jsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, undefined);
                                    })
                                }, void 0, false, {
                                    fileName: "src/pages/RestaurantMenu.jsx",
                                    lineNumber: 72,
                                    columnNumber: 21
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/RestaurantMenu.jsx",
                            lineNumber: 54,
                            columnNumber: 17
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/pages/RestaurantMenu.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, undefined),
                    scrollUpArrow && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "menu__scrollUp",
                        onClick: ()=>scrollUp()
                    }, void 0, false, {
                        fileName: "src/pages/RestaurantMenu.jsx",
                        lineNumber: 87,
                        columnNumber: 34
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/RestaurantMenu.jsx",
                lineNumber: 51,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _footerDefault.default), {
                type: "fixed"
            }, void 0, false, {
                fileName: "src/pages/RestaurantMenu.jsx",
                lineNumber: 91,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true);
};
_s(RestaurantMenu, "li2XeprCDfB9YTQXsTUJXETTMnY=", false, function() {
    return [
        (0, _reactRouterDom.useParams),
        (0, _useFetchResInfoDefault.default),
        (0, _useFetchResCategoriesDefault.default)
    ];
});
_c = RestaurantMenu;
exports.default = RestaurantMenu;
var _c;
$RefreshReg$(_c, "RestaurantMenu");

  $parcel$ReactRefreshHelpers$76cc.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../components/Shimmer":"imnNo","react-router-dom":"9xmpe","../components/Footer":"2OVeV","../utils/hooks/useFetchResInfo":"ZJ7AM","../utils/hooks/useFetchResCategories":"9jfYn","../utils/constants":"hB8jg","../../assets/images/dummyFood.jpg":"ctlMX","../components/restaurant/RestaurantCategory":"bXMEj","../scss/pages/menu.scss":"aw1Mh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"ZJ7AM":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$e441 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e441.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _constants = require("../constants");
var _s = $RefreshSig$();
const useFetchResInfo = (resId)=>{
    _s();
    const [resInfo, setResInfo] = (0, _react.useState)({});
    (0, _react.useEffect)(()=>{
        fetchResInfo();
    }, []);
    const fetchResInfo = async ()=>{
        const data = await fetch((0, _constants.MENU_URL) + resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
    };
    return resInfo;
};
_s(useFetchResInfo, "4IvTN1BhpQi/a0Whzo0kcsMG6nU=");
exports.default = useFetchResInfo;

  $parcel$ReactRefreshHelpers$e441.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","../constants":"hB8jg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"9jfYn":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5c90 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5c90.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _constants = require("../constants");
var _s = $RefreshSig$();
const useFetchResCategories = (resId)=>{
    _s();
    const [resCategories, setResCategories] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        fetchResCategories();
    }, []);
    const fetchResCategories = async ()=>{
        const data = await fetch((0, _constants.MENU_URL) + resId);
        const json = await data.json();
        setResCategories(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    };
    return resCategories;
};
_s(useFetchResCategories, "ZAZv9gMCHZfPOo37X/ddQw7nLxI=");
exports.default = useFetchResCategories;

  $parcel$ReactRefreshHelpers$5c90.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","../constants":"hB8jg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"ctlMX":[function(require,module,exports) {
module.exports = require("d39e06e5c50fbb52").getBundleURL("cPRBg") + "dummyFood.adc1ba3b.jpg" + "?" + Date.now();

},{"d39e06e5c50fbb52":"lgJ39"}],"bXMEj":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$15d2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$15d2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _cartSlice = require("../../utils/redux/cartSlice");
var _restaurantMenuItem = require("./RestaurantMenuItem");
var _restaurantMenuItemDefault = parcelHelpers.interopDefault(_restaurantMenuItem);
var _s = $RefreshSig$();
const RestaurantCategory = ({ id, title, itemCards, isExpanded, toggleCategory })=>{
    _s();
    const dispatch = (0, _reactRedux.useDispatch)();
    const addFoodItem = (item)=>{
        dispatch((0, _cartSlice.addItem)(item));
    };
    const removeFoodItem = (id)=>{
        dispatch((0, _cartSlice.removeItem)(id));
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "menu__category",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "menu__head",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "menu__head__text",
                        children: title
                    }, void 0, false, {
                        fileName: "src/components/restaurant/RestaurantCategory.jsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: `menu__head__arrow ${isExpanded === id ? "expand" : ""} `,
                        onClick: ()=>toggleCategory({
                                id: id
                            })
                    }, void 0, false, {
                        fileName: "src/components/restaurant/RestaurantCategory.jsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/restaurant/RestaurantCategory.jsx",
                lineNumber: 20,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: `menu__list ${isExpanded === id ? "expand" : ""}`,
                children: itemCards.map((li)=>{
                    const { id } = li.card.info;
                    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantMenuItemDefault.default), {
                        data: li,
                        addFoodItem: addFoodItem,
                        removeFoodItem: removeFoodItem
                    }, id, false, {
                        fileName: "src/components/restaurant/RestaurantCategory.jsx",
                        lineNumber: 31,
                        columnNumber: 25
                    }, undefined);
                })
            }, void 0, false, {
                fileName: "src/components/restaurant/RestaurantCategory.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/restaurant/RestaurantCategory.jsx",
        lineNumber: 19,
        columnNumber: 9
    }, undefined);
};
_s(RestaurantCategory, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
    return [
        (0, _reactRedux.useDispatch)
    ];
});
_c = RestaurantCategory;
exports.default = RestaurantCategory;
var _c;
$RefreshReg$(_c, "RestaurantCategory");

  $parcel$ReactRefreshHelpers$15d2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-redux":"62sf7","../../utils/redux/cartSlice":"goXg1","./RestaurantMenuItem":"3qnPw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"3qnPw":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$f107 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$f107.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _constants = require("../../utils/constants");
var _dummyFoodJpg = require("../../../assets/images/dummyFood.jpg");
var _dummyFoodJpgDefault = parcelHelpers.interopDefault(_dummyFoodJpg);
var _react = require("react");
var _reactRedux = require("react-redux");
var _s = $RefreshSig$();
const RestaurantMenuItem = ({ data, addFoodItem, removeFoodItem })=>{
    _s();
    const { id, name, description, imageId, price, defaultPrice, itemAttribute } = data.card.info;
    const [quantity, setQuantity] = (0, _react.useState)(0);
    const cartItems = (0, _reactRedux.useSelector)((store)=>store.cart.items);
    (0, _react.useEffect)(()=>{
        let count = 0;
        cartItems.map((item)=>{
            if (item.card.info.id === id) count++;
        });
        setQuantity(count);
    }, []);
    (0, _react.useEffect)(()=>{
        console.log(cartItems);
    }, [
        cartItems
    ]);
    const addItem = ()=>{
        addFoodItem(data);
        setQuantity(quantity + 1);
    // if( quantity >= 1 ) {
    //     let index = cartItems.findIndex(item => item.card.info.id === id);
    //     if (index !== -1) {
    //         cartItems[index].card.info.quantity = quantity;
    //     }
    // }
    // else {
    // }
    };
    const removeItem = ()=>{
        removeFoodItem(id);
        setQuantity(quantity - 1);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
        id: id,
        className: "menu__item",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "menu__item__info",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "menu__item__row",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "menu__item__name",
                                children: name
                            }, void 0, false, {
                                fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, undefined),
                            itemAttribute.vegClassifier === "VEG" ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "menu__item__veg"
                            }, void 0, false, {
                                fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                                lineNumber: 55,
                                columnNumber: 62
                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "menu__item__nonVeg"
                            }, void 0, false, {
                                fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                                lineNumber: 55,
                                columnNumber: 104
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "menu__item__cost",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "rupees-arial",
                                children: "₹"
                            }, void 0, false, {
                                fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                                lineNumber: 57,
                                columnNumber: 51
                            }, undefined),
                            price ? Math.round(price / 100) : Math.round(defaultPrice / 100)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "menu__item__desc",
                        children: description
                    }, void 0, false, {
                        fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                lineNumber: 52,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "menu__item__image-container",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "menu__item__image",
                        src: (0, _constants.IMG_URL) + imageId,
                        onError: (e)=>e.target.src = (0, _dummyFoodJpgDefault.default),
                        alt: "food-image"
                    }, void 0, false, {
                        fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, undefined),
                    quantity === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "menu__item__cta",
                        onClick: ()=>addItem(),
                        children: "Add +"
                    }, void 0, false, {
                        fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: `menu__item__cta ${quantity > 0 && "active"}`,
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "menu__item__del",
                                    onClick: ()=>removeItem(),
                                    children: "-"
                                }, void 0, false, {
                                    fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, undefined),
                                quantity,
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "menu__item__add",
                                    onClick: ()=>addItem(),
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                                    lineNumber: 67,
                                    columnNumber: 114
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                            lineNumber: 66,
                            columnNumber: 25
                        }, undefined)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
                lineNumber: 60,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/restaurant/RestaurantMenuItem.jsx",
        lineNumber: 51,
        columnNumber: 9
    }, undefined);
};
_s(RestaurantMenuItem, "ywyacyNGORMJnb8jlxch5qunh6w=", false, function() {
    return [
        (0, _reactRedux.useSelector)
    ];
});
_c = RestaurantMenuItem;
exports.default = RestaurantMenuItem;
var _c;
$RefreshReg$(_c, "RestaurantMenuItem");

  $parcel$ReactRefreshHelpers$f107.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../../utils/constants":"hB8jg","../../../assets/images/dummyFood.jpg":"ctlMX","react":"21dqq","react-redux":"62sf7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"aw1Mh":[function() {},{}]},["bqSDJ","1xC6H"], null, "parcelRequire028a")

//# sourceMappingURL=RestaurantMenu.e776f02c.js.map