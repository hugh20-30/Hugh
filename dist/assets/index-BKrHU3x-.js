(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function A_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bp={exports:{}},ul={},Dp={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),C_=Symbol.for("react.portal"),R_=Symbol.for("react.fragment"),P_=Symbol.for("react.strict_mode"),L_=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),U_=Symbol.for("react.forward_ref"),N_=Symbol.for("react.suspense"),I_=Symbol.for("react.memo"),F_=Symbol.for("react.lazy"),Zf=Symbol.iterator;function O_(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var Up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Np=Object.assign,Ip={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=Ip,this.updater=n||Up}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fp(){}Fp.prototype=Ss.prototype;function Hc(t,e,n){this.props=t,this.context=e,this.refs=Ip,this.updater=n||Up}var Gc=Hc.prototype=new Fp;Gc.constructor=Hc;Np(Gc,Ss.prototype);Gc.isPureReactComponent=!0;var Qf=Array.isArray,Op=Object.prototype.hasOwnProperty,Vc={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function zp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Op.call(e,i)&&!kp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Mo,type:t,key:s,ref:o,props:r,_owner:Vc.current}}function k_(t,e){return{$$typeof:Mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mo}function z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function Ul(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z_(""+t.key):e.toString(36)}function ya(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mo:case C_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ul(o,0):i,Qf(r)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),ya(r,e,n,"",function(c){return c})):r!=null&&(Wc(r)&&(r=k_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Qf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ul(s,a);o+=ya(s,e,n,l,r)}else if(l=O_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ul(s,a++),o+=ya(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var i=[],r=0;return ya(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},Sa={transition:null},H_={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:Vc};function Bp(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!Wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Ss;ze.Fragment=R_;ze.Profiler=L_;ze.PureComponent=Hc;ze.StrictMode=P_;ze.Suspense=N_;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;ze.act=Bp;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Np({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Op.call(e,l)&&!kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Mo,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:D_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b_,_context:t},t.Consumer=t};ze.createElement=zp;ze.createFactory=function(t){var e=zp.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:U_,render:t}};ze.isValidElement=Wc;ze.lazy=function(t){return{$$typeof:F_,_payload:{_status:-1,_result:t},_init:B_}};ze.memo=function(t,e){return{$$typeof:I_,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Sa.transition;Sa.transition={};try{t()}finally{Sa.transition=e}};ze.unstable_act=Bp;ze.useCallback=function(t,e){return jt.current.useCallback(t,e)};ze.useContext=function(t){return jt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return jt.current.useEffect(t,e)};ze.useId=function(){return jt.current.useId()};ze.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return jt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};ze.useRef=function(t){return jt.current.useRef(t)};ze.useState=function(t){return jt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return jt.current.useTransition()};ze.version="18.3.1";Dp.exports=ze;var Ot=Dp.exports;const G_=A_(Ot);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_=Ot,W_=Symbol.for("react.element"),X_=Symbol.for("react.fragment"),j_=Object.prototype.hasOwnProperty,Y_=V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q_={key:!0,ref:!0,__self:!0,__source:!0};function Hp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)j_.call(e,i)&&!q_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:W_,type:t,key:s,ref:o,props:r,_owner:Y_.current}}ul.Fragment=X_;ul.jsx=Hp;ul.jsxs=Hp;bp.exports=ul;var oe=bp.exports,Gp={exports:{}},hn={},Vp={exports:{}},Wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,F){var O=N.length;N.push(F);e:for(;0<O;){var L=O-1>>>1,I=N[L];if(0<r(I,F))N[L]=F,N[O]=I,O=L;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],O=N.pop();if(O!==F){N[0]=O;e:for(var L=0,I=N.length,ce=I>>>1;L<ce;){var q=2*(L+1)-1,K=N[q],te=q+1,ge=N[te];if(0>r(K,O))te<I&&0>r(ge,K)?(N[L]=ge,N[te]=O,L=te):(N[L]=K,N[q]=O,L=q);else if(te<I&&0>r(ge,O))N[L]=ge,N[te]=O,L=te;else break e}}return F}function r(N,F){var O=N.sortIndex-F.sortIndex;return O!==0?O:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,g=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=N)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function y(N){if(v=!1,_(N),!x)if(n(l)!==null)x=!0,$(T);else{var F=n(c);F!==null&&j(y,F.startTime-N)}}function T(N,F){x=!1,v&&(v=!1,u(D),D=-1),g=!0;var O=d;try{for(_(F),h=n(l);h!==null&&(!(h.expirationTime>F)||N&&!X());){var L=h.callback;if(typeof L=="function"){h.callback=null,d=h.priorityLevel;var I=L(h.expirationTime<=F);F=t.unstable_now(),typeof I=="function"?h.callback=I:h===n(l)&&i(l),_(F)}else i(l);h=n(l)}if(h!==null)var ce=!0;else{var q=n(c);q!==null&&j(y,q.startTime-F),ce=!1}return ce}finally{h=null,d=O,g=!1}}var R=!1,C=null,D=-1,M=5,w=-1;function X(){return!(t.unstable_now()-w<M)}function Z(){if(C!==null){var N=t.unstable_now();w=N;var F=!0;try{F=C(!0,N)}finally{F?Q():(R=!1,C=null)}}else R=!1}var Q;if(typeof m=="function")Q=function(){m(Z)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,W=b.port2;b.port1.onmessage=Z,Q=function(){W.postMessage(null)}}else Q=function(){p(Z,0)};function $(N){C=N,R||(R=!0,Q())}function j(N,F){D=p(function(){N(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,$(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var O=d;d=F;try{return N()}finally{d=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=d;d=N;try{return F()}finally{d=O}},t.unstable_scheduleCallback=function(N,F,O){var L=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?L+O:L):O=L,N){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=O+I,N={id:f++,callback:F,priorityLevel:N,startTime:O,expirationTime:I,sortIndex:-1},O>L?(N.sortIndex=O,e(c,N),n(l)===null&&N===n(c)&&(v?(u(D),D=-1):v=!0,j(y,O-L))):(N.sortIndex=I,e(l,N),x||g||(x=!0,$(T))),N},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(N){var F=d;return function(){var O=d;d=F;try{return N.apply(this,arguments)}finally{d=O}}}})(Wp);Vp.exports=Wp;var $_=Vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=Ot,dn=$_;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xp=new Set,no={};function Sr(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(no[t]=e,t=0;t<e.length;t++)Xp.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,Z_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ed={},td={};function Q_(t){return ku.call(td,t)?!0:ku.call(ed,t)?!1:Z_.test(t)?td[t]=!0:(ed[t]=!0,!1)}function J_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ev(t,e,n,i){if(e===null||typeof e>"u"||J_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xc=/[\-:]([a-z])/g;function jc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xc,jc);bt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xc,jc);bt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xc,jc);bt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yc(t,e,n,i){var r=bt.hasOwnProperty(e)?bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ev(e,n,r,i)&&(n=null),i||r===null?Q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pi=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Yp=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),Kc=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),qp=Symbol.for("react.offscreen"),nd=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=nd&&t[nd]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,Nl;function Bs(t){if(Nl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nl=e&&e[1]||""}return`
`+Nl+t}var Il=!1;function Fl(t,e){if(!t||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function tv(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=Fl(t.type,!1),t;case 11:return t=Fl(t.type.render,!1),t;case 1:return t=Fl(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wr:return"Fragment";case Vr:return"Portal";case zu:return"Profiler";case qc:return"StrictMode";case Bu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yp:return(t.displayName||"Context")+".Consumer";case jp:return(t._context.displayName||"Context")+".Provider";case $c:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kc:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function nv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iv(t){var e=$p(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fo(t){t._valueTracker||(t._valueTracker=iv(t))}function Kp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$p(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vu(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function id(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(t,e){e=e.checked,e!=null&&Yc(t,"checked",e,!1)}function Wu(t,e){Zp(t,e);var n=Hi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xu(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xu(t,e,n){(e!=="number"||Ua(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Hs(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function Qp(t,e){var n=Hi(e.value),i=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function od(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oo,em=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rv=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){rv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function tm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function nm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var sv=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qu(t,e){if(e){if(sv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function Zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,is=null,rs=null;function ad(t){if(t=wo(t)){if(typeof Zu!="function")throw Error(J(280));var e=t.stateNode;e&&(e=pl(e),Zu(t.stateNode,t.type,e))}}function im(t){is?rs?rs.push(t):rs=[t]:is=t}function rm(){if(is){var t=is,e=rs;if(rs=is=null,ad(t),e)for(t=0;t<e.length;t++)ad(e[t])}}function sm(t,e){return t(e)}function om(){}var Ol=!1;function am(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return sm(t,e,n)}finally{Ol=!1,(is!==null||rs!==null)&&(om(),rm())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var i=pl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Qu=!1;if(ui)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Qu=!1}function ov(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var js=!1,Na=null,Ia=!1,Ju=null,av={onError:function(t){js=!0,Na=t}};function lv(t,e,n,i,r,s,o,a,l){js=!1,Na=null,ov.apply(av,arguments)}function uv(t,e,n,i,r,s,o,a,l){if(lv.apply(this,arguments),js){if(js){var c=Na;js=!1,Na=null}else throw Error(J(198));Ia||(Ia=!0,Ju=c)}}function Mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ld(t){if(Mr(t)!==t)throw Error(J(188))}function cv(t){var e=t.alternate;if(!e){if(e=Mr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ld(r),t;if(s===i)return ld(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function um(t){return t=cv(t),t!==null?cm(t):null}function cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cm(t);if(e!==null)return e;t=t.sibling}return null}var fm=dn.unstable_scheduleCallback,ud=dn.unstable_cancelCallback,fv=dn.unstable_shouldYield,dv=dn.unstable_requestPaint,ft=dn.unstable_now,hv=dn.unstable_getCurrentPriorityLevel,Qc=dn.unstable_ImmediatePriority,dm=dn.unstable_UserBlockingPriority,Fa=dn.unstable_NormalPriority,pv=dn.unstable_LowPriority,hm=dn.unstable_IdlePriority,cl=null,Xn=null;function mv(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:vv,gv=Math.log,_v=Math.LN2;function vv(t){return t>>>=0,t===0?32:31-(gv(t)/_v|0)|0}var ko=64,zo=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Gs(a):(s&=o,s!==0&&(i=Gs(s)))}else o=n&~r,o!==0?i=Gs(o):s!==0&&(i=Gs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function xv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=xv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pm(){var t=ko;return ko<<=1,!(ko&4194240)&&(ko=64),t}function kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function Sv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gm,ef,_m,vm,xm,tc=!1,Bo=[],Li=null,bi=null,Di=null,so=new Map,oo=new Map,Ti=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Ps(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wo(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ev(t,e,n,i,r){switch(e){case"focusin":return Li=Ps(Li,t,e,n,i,r),!0;case"dragenter":return bi=Ps(bi,t,e,n,i,r),!0;case"mouseover":return Di=Ps(Di,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return so.set(s,Ps(so.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oo.set(s,Ps(oo.get(s)||null,t,e,n,i,r)),!0}return!1}function ym(t){var e=or(t.target);if(e!==null){var n=Mr(e);if(n!==null){if(e=n.tag,e===13){if(e=lm(n),e!==null){t.blockedOn=e,xm(t.priority,function(){_m(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ku=i,n.target.dispatchEvent(i),Ku=null}else return e=wo(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function fd(t,e,n){Ma(t)&&n.delete(e)}function Tv(){tc=!1,Li!==null&&Ma(Li)&&(Li=null),bi!==null&&Ma(bi)&&(bi=null),Di!==null&&Ma(Di)&&(Di=null),so.forEach(fd),oo.forEach(fd)}function Ls(t,e){t.blockedOn===e&&(t.blockedOn=null,tc||(tc=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,Tv)))}function ao(t){function e(r){return Ls(r,t)}if(0<Bo.length){Ls(Bo[0],t);for(var n=1;n<Bo.length;n++){var i=Bo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Ls(Li,t),bi!==null&&Ls(bi,t),Di!==null&&Ls(Di,t),so.forEach(e),oo.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&Ti.shift()}var ss=pi.ReactCurrentBatchConfig,ka=!0;function wv(t,e,n,i){var r=Ye,s=ss.transition;ss.transition=null;try{Ye=1,tf(t,e,n,i)}finally{Ye=r,ss.transition=s}}function Av(t,e,n,i){var r=Ye,s=ss.transition;ss.transition=null;try{Ye=4,tf(t,e,n,i)}finally{Ye=r,ss.transition=s}}function tf(t,e,n,i){if(ka){var r=nc(t,e,n,i);if(r===null)ql(t,e,i,za,n),cd(t,i);else if(Ev(r,t,e,n,i))i.stopPropagation();else if(cd(t,i),e&4&&-1<Mv.indexOf(t)){for(;r!==null;){var s=wo(r);if(s!==null&&gm(s),s=nc(t,e,n,i),s===null&&ql(t,e,i,za,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ql(t,e,i,null,n)}}var za=null;function nc(t,e,n,i){if(za=null,t=Zc(i),t=or(t),t!==null)if(e=Mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return za=t,null}function Sm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hv()){case Qc:return 1;case dm:return 4;case Fa:case pv:return 16;case hm:return 536870912;default:return 16}default:return 16}}var Ai=null,nf=null,Ea=null;function Mm(){if(Ea)return Ea;var t,e=nf,n=e.length,i,r="value"in Ai?Ai.value:Ai.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ea=r.slice(t,1<i?1-i:void 0)}function Ta(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function dd(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:dd,this.isPropagationStopped=dd,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=pn(Ms),To=st({},Ms,{view:0,detail:0}),Cv=pn(To),zl,Bl,bs,fl=st({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(zl=t.screenX-bs.screenX,Bl=t.screenY-bs.screenY):Bl=zl=0,bs=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),hd=pn(fl),Rv=st({},fl,{dataTransfer:0}),Pv=pn(Rv),Lv=st({},To,{relatedTarget:0}),Hl=pn(Lv),bv=st({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=pn(bv),Uv=st({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nv=pn(Uv),Iv=st({},Ms,{data:0}),pd=pn(Iv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kv[t])?!!e[t]:!1}function sf(){return zv}var Bv=st({},To,{key:function(t){if(t.key){var e=Fv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ov[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?Ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hv=pn(Bv),Gv=st({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=pn(Gv),Vv=st({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),Wv=pn(Vv),Xv=st({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=pn(Xv),Yv=st({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=pn(Yv),$v=[9,13,27,32],of=ui&&"CompositionEvent"in window,Ys=null;ui&&"documentMode"in document&&(Ys=document.documentMode);var Kv=ui&&"TextEvent"in window&&!Ys,Em=ui&&(!of||Ys&&8<Ys&&11>=Ys),gd=" ",_d=!1;function Tm(t,e){switch(t){case"keyup":return $v.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function Zv(t,e){switch(t){case"compositionend":return wm(e);case"keypress":return e.which!==32?null:(_d=!0,gd);case"textInput":return t=e.data,t===gd&&_d?null:t;default:return null}}function Qv(t,e){if(Xr)return t==="compositionend"||!of&&Tm(t,e)?(t=Mm(),Ea=nf=Ai=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Em&&e.locale!=="ko"?null:e.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jv[t.type]:e==="textarea"}function Am(t,e,n,i){im(i),e=Ba(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qs=null,lo=null;function e0(t){Om(t,0)}function dl(t){var e=qr(t);if(Kp(e))return t}function t0(t,e){if(t==="change")return e}var Cm=!1;if(ui){var Gl;if(ui){var Vl="oninput"in document;if(!Vl){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),Vl=typeof xd.oninput=="function"}Gl=Vl}else Gl=!1;Cm=Gl&&(!document.documentMode||9<document.documentMode)}function yd(){qs&&(qs.detachEvent("onpropertychange",Rm),lo=qs=null)}function Rm(t){if(t.propertyName==="value"&&dl(lo)){var e=[];Am(e,lo,t,Zc(t)),am(e0,e)}}function n0(t,e,n){t==="focusin"?(yd(),qs=e,lo=n,qs.attachEvent("onpropertychange",Rm)):t==="focusout"&&yd()}function i0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(lo)}function r0(t,e){if(t==="click")return dl(e)}function s0(t,e){if(t==="input"||t==="change")return dl(e)}function o0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:o0;function uo(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ku.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Md(t,e){var n=Sd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sd(n)}}function Pm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lm(){for(var t=window,e=Ua();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ua(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function a0(t){var e=Lm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(i!==null&&af(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Md(n,s);var o=Md(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l0=ui&&"documentMode"in document&&11>=document.documentMode,jr=null,ic=null,$s=null,rc=!1;function Ed(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rc||jr==null||jr!==Ua(i)||(i=jr,"selectionStart"in i&&af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&uo($s,i)||($s=i,i=Ba(ic,"onSelect"),0<i.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}function Go(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Wl={},bm={};ui&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function hl(t){if(Wl[t])return Wl[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bm)return Wl[t]=e[n];return t}var Dm=hl("animationend"),Um=hl("animationiteration"),Nm=hl("animationstart"),Im=hl("transitionend"),Fm=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){Fm.set(t,e),Sr(e,[t])}for(var Xl=0;Xl<Td.length;Xl++){var jl=Td[Xl],u0=jl.toLowerCase(),c0=jl[0].toUpperCase()+jl.slice(1);Wi(u0,"on"+c0)}Wi(Dm,"onAnimationEnd");Wi(Um,"onAnimationIteration");Wi(Nm,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(Im,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function wd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,uv(i,e,void 0,t),t.currentTarget=null}function Om(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wd(r,a,c),s=l}}}if(Ia)throw t=Ju,Ia=!1,Ju=null,t}function Je(t,e){var n=e[uc];n===void 0&&(n=e[uc]=new Set);var i=t+"__bubble";n.has(i)||(km(e,t,2,!1),n.add(i))}function Yl(t,e,n){var i=0;e&&(i|=4),km(n,t,i,e)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Vo]){t[Vo]=!0,Xp.forEach(function(n){n!=="selectionchange"&&(f0.has(n)||Yl(n,!1,t),Yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vo]||(e[Vo]=!0,Yl("selectionchange",!1,e))}}function km(t,e,n,i){switch(Sm(e)){case 1:var r=wv;break;case 4:r=Av;break;default:r=tf}n=r.bind(null,e,n,t),r=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}am(function(){var c=s,f=Zc(n),h=[];e:{var d=Fm.get(t);if(d!==void 0){var g=rf,x=t;switch(t){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":g=Hv;break;case"focusin":x="focus",g=Hl;break;case"focusout":x="blur",g=Hl;break;case"beforeblur":case"afterblur":g=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Wv;break;case Dm:case Um:case Nm:g=Dv;break;case Im:g=jv;break;case"scroll":g=Cv;break;case"wheel":g=qv;break;case"copy":case"cut":case"paste":g=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=md}var v=(e&4)!==0,p=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var m=c,_;m!==null;){_=m;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,u!==null&&(y=ro(m,u),y!=null&&v.push(fo(m,y,_)))),p)break;m=m.return}0<v.length&&(d=new g(d,x,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Ku&&(x=n.relatedTarget||n.fromElement)&&(or(x)||x[ci]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?or(x):null,x!==null&&(p=Mr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(v=hd,y="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=md,y="onPointerLeave",u="onPointerEnter",m="pointer"),p=g==null?d:qr(g),_=x==null?d:qr(x),d=new v(y,m+"leave",g,n,f),d.target=p,d.relatedTarget=_,y=null,or(f)===c&&(v=new v(u,m+"enter",x,n,f),v.target=_,v.relatedTarget=p,y=v),p=y,g&&x)t:{for(v=g,u=x,m=0,_=v;_;_=Tr(_))m++;for(_=0,y=u;y;y=Tr(y))_++;for(;0<m-_;)v=Tr(v),m--;for(;0<_-m;)u=Tr(u),_--;for(;m--;){if(v===u||u!==null&&v===u.alternate)break t;v=Tr(v),u=Tr(u)}v=null}else v=null;g!==null&&Ad(h,d,g,v,!1),x!==null&&p!==null&&Ad(h,p,x,v,!0)}}e:{if(d=c?qr(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=t0;else if(vd(d))if(Cm)T=s0;else{T=i0;var R=n0}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=r0);if(T&&(T=T(t,c))){Am(h,T,n,f);break e}R&&R(t,d,c),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Xu(d,"number",d.value)}switch(R=c?qr(c):window,t){case"focusin":(vd(R)||R.contentEditable==="true")&&(jr=R,ic=c,$s=null);break;case"focusout":$s=ic=jr=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,Ed(h,n,f);break;case"selectionchange":if(l0)break;case"keydown":case"keyup":Ed(h,n,f)}var C;if(of)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Xr?Tm(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Em&&n.locale!=="ko"&&(Xr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Xr&&(C=Mm()):(Ai=f,nf="value"in Ai?Ai.value:Ai.textContent,Xr=!0)),R=Ba(c,D),0<R.length&&(D=new pd(D,t,null,n,f),h.push({event:D,listeners:R}),C?D.data=C:(C=wm(n),C!==null&&(D.data=C)))),(C=Kv?Zv(t,n):Qv(t,n))&&(c=Ba(c,"onBeforeInput"),0<c.length&&(f=new pd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}Om(h,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ba(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ro(t,n),s!=null&&i.unshift(fo(t,s,r)),s=ro(t,e),s!=null&&i.push(fo(t,s,r))),t=t.return}return i}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ad(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ro(n,s),l!=null&&o.unshift(fo(n,l,a))):r||(l=ro(n,s),l!=null&&o.push(fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var d0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Cd(t){return(typeof t=="string"?t:""+t).replace(d0,`
`).replace(h0,"")}function Wo(t,e,n){if(e=Cd(e),Cd(t)!==e&&n)throw Error(J(425))}function Ha(){}var sc=null,oc=null;function ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(t){return Rd.resolve(null).then(t).catch(g0)}:lc;function g0(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ao(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ao(e)}function Ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Es,ho="__reactProps$"+Es,ci="__reactContainer$"+Es,uc="__reactEvents$"+Es,_0="__reactListeners$"+Es,v0="__reactHandles$"+Es;function or(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ci]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pd(t);t!==null;){if(n=t[Wn])return n;t=Pd(t)}return e}t=n,n=t.parentNode}return null}function wo(t){return t=t[Wn]||t[ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function pl(t){return t[ho]||null}var cc=[],$r=-1;function Xi(t){return{current:t}}function tt(t){0>$r||(t.current=cc[$r],cc[$r]=null,$r--)}function Qe(t,e){$r++,cc[$r]=t.current,t.current=e}var Gi={},zt=Xi(Gi),Qt=Xi(!1),pr=Gi;function fs(t,e){var n=t.type.contextTypes;if(!n)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function Ga(){tt(Qt),tt(zt)}function Ld(t,e,n){if(zt.current!==Gi)throw Error(J(168));Qe(zt,e),Qe(Qt,n)}function zm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,nv(t)||"Unknown",r));return st({},n,i)}function Va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,pr=zt.current,Qe(zt,t),Qe(Qt,Qt.current),!0}function bd(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=zm(t,e,pr),i.__reactInternalMemoizedMergedChildContext=t,tt(Qt),tt(zt),Qe(zt,t)):tt(Qt),Qe(Qt,n)}var ii=null,ml=!1,Kl=!1;function Bm(t){ii===null?ii=[t]:ii.push(t)}function x0(t){ml=!0,Bm(t)}function ji(){if(!Kl&&ii!==null){Kl=!0;var t=0,e=Ye;try{var n=ii;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ii=null,ml=!1}catch(r){throw ii!==null&&(ii=ii.slice(t+1)),fm(Qc,ji),r}finally{Ye=e,Kl=!1}}return null}var Kr=[],Zr=0,Wa=null,Xa=0,_n=[],vn=0,mr=null,si=1,oi="";function er(t,e){Kr[Zr++]=Xa,Kr[Zr++]=Wa,Wa=t,Xa=e}function Hm(t,e,n){_n[vn++]=si,_n[vn++]=oi,_n[vn++]=mr,mr=t;var i=si;t=oi;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,si=1<<32-On(e)+r|n<<r|i,oi=s+t}else si=1<<s|n<<r|i,oi=t}function lf(t){t.return!==null&&(er(t,1),Hm(t,1,0))}function uf(t){for(;t===Wa;)Wa=Kr[--Zr],Kr[Zr]=null,Xa=Kr[--Zr],Kr[Zr]=null;for(;t===mr;)mr=_n[--vn],_n[vn]=null,oi=_n[--vn],_n[vn]=null,si=_n[--vn],_n[vn]=null}var cn=null,un=null,nt=!1,Dn=null;function Gm(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,un=Ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,un=null,!0):!1;default:return!1}}function fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dc(t){if(nt){var e=un;if(e){var n=e;if(!Dd(t,e)){if(fc(t))throw Error(J(418));e=Ui(n.nextSibling);var i=cn;e&&Dd(t,e)?Gm(i,n):(t.flags=t.flags&-4097|2,nt=!1,cn=t)}}else{if(fc(t))throw Error(J(418));t.flags=t.flags&-4097|2,nt=!1,cn=t}}}function Ud(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function Xo(t){if(t!==cn)return!1;if(!nt)return Ud(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ac(t.type,t.memoizedProps)),e&&(e=un)){if(fc(t))throw Vm(),Error(J(418));for(;e;)Gm(t,e),e=Ui(e.nextSibling)}if(Ud(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=cn?Ui(t.stateNode.nextSibling):null;return!0}function Vm(){for(var t=un;t;)t=Ui(t.nextSibling)}function ds(){un=cn=null,nt=!1}function cf(t){Dn===null?Dn=[t]:Dn.push(t)}var y0=pi.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function jo(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nd(t){var e=t._init;return e(t._payload)}function Wm(t){function e(u,m){if(t){var _=u.deletions;_===null?(u.deletions=[m],u.flags|=16):_.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Oi(u,m),u.index=0,u.sibling=null,u}function s(u,m,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<m?(u.flags|=2,m):_):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,_,y){return m===null||m.tag!==6?(m=iu(_,u.mode,y),m.return=u,m):(m=r(m,_),m.return=u,m)}function l(u,m,_,y){var T=_.type;return T===Wr?f(u,m,_.props.children,y,_.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Mi&&Nd(T)===m.type)?(y=r(m,_.props),y.ref=Ds(u,m,_),y.return=u,y):(y=ba(_.type,_.key,_.props,null,u.mode,y),y.ref=Ds(u,m,_),y.return=u,y)}function c(u,m,_,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=ru(_,u.mode,y),m.return=u,m):(m=r(m,_.children||[]),m.return=u,m)}function f(u,m,_,y,T){return m===null||m.tag!==7?(m=cr(_,u.mode,y,T),m.return=u,m):(m=r(m,_),m.return=u,m)}function h(u,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=iu(""+m,u.mode,_),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Io:return _=ba(m.type,m.key,m.props,null,u.mode,_),_.ref=Ds(u,null,m),_.return=u,_;case Vr:return m=ru(m,u.mode,_),m.return=u,m;case Mi:var y=m._init;return h(u,y(m._payload),_)}if(Hs(m)||Cs(m))return m=cr(m,u.mode,_,null),m.return=u,m;jo(u,m)}return null}function d(u,m,_,y){var T=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:a(u,m,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Io:return _.key===T?l(u,m,_,y):null;case Vr:return _.key===T?c(u,m,_,y):null;case Mi:return T=_._init,d(u,m,T(_._payload),y)}if(Hs(_)||Cs(_))return T!==null?null:f(u,m,_,y,null);jo(u,_)}return null}function g(u,m,_,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(_)||null,a(m,u,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Io:return u=u.get(y.key===null?_:y.key)||null,l(m,u,y,T);case Vr:return u=u.get(y.key===null?_:y.key)||null,c(m,u,y,T);case Mi:var R=y._init;return g(u,m,_,R(y._payload),T)}if(Hs(y)||Cs(y))return u=u.get(_)||null,f(m,u,y,T,null);jo(m,y)}return null}function x(u,m,_,y){for(var T=null,R=null,C=m,D=m=0,M=null;C!==null&&D<_.length;D++){C.index>D?(M=C,C=null):M=C.sibling;var w=d(u,C,_[D],y);if(w===null){C===null&&(C=M);break}t&&C&&w.alternate===null&&e(u,C),m=s(w,m,D),R===null?T=w:R.sibling=w,R=w,C=M}if(D===_.length)return n(u,C),nt&&er(u,D),T;if(C===null){for(;D<_.length;D++)C=h(u,_[D],y),C!==null&&(m=s(C,m,D),R===null?T=C:R.sibling=C,R=C);return nt&&er(u,D),T}for(C=i(u,C);D<_.length;D++)M=g(C,u,D,_[D],y),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?D:M.key),m=s(M,m,D),R===null?T=M:R.sibling=M,R=M);return t&&C.forEach(function(X){return e(u,X)}),nt&&er(u,D),T}function v(u,m,_,y){var T=Cs(_);if(typeof T!="function")throw Error(J(150));if(_=T.call(_),_==null)throw Error(J(151));for(var R=T=null,C=m,D=m=0,M=null,w=_.next();C!==null&&!w.done;D++,w=_.next()){C.index>D?(M=C,C=null):M=C.sibling;var X=d(u,C,w.value,y);if(X===null){C===null&&(C=M);break}t&&C&&X.alternate===null&&e(u,C),m=s(X,m,D),R===null?T=X:R.sibling=X,R=X,C=M}if(w.done)return n(u,C),nt&&er(u,D),T;if(C===null){for(;!w.done;D++,w=_.next())w=h(u,w.value,y),w!==null&&(m=s(w,m,D),R===null?T=w:R.sibling=w,R=w);return nt&&er(u,D),T}for(C=i(u,C);!w.done;D++,w=_.next())w=g(C,u,D,w.value,y),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?D:w.key),m=s(w,m,D),R===null?T=w:R.sibling=w,R=w);return t&&C.forEach(function(Z){return e(u,Z)}),nt&&er(u,D),T}function p(u,m,_,y){if(typeof _=="object"&&_!==null&&_.type===Wr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Io:e:{for(var T=_.key,R=m;R!==null;){if(R.key===T){if(T=_.type,T===Wr){if(R.tag===7){n(u,R.sibling),m=r(R,_.props.children),m.return=u,u=m;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Mi&&Nd(T)===R.type){n(u,R.sibling),m=r(R,_.props),m.ref=Ds(u,R,_),m.return=u,u=m;break e}n(u,R);break}else e(u,R);R=R.sibling}_.type===Wr?(m=cr(_.props.children,u.mode,y,_.key),m.return=u,u=m):(y=ba(_.type,_.key,_.props,null,u.mode,y),y.ref=Ds(u,m,_),y.return=u,u=y)}return o(u);case Vr:e:{for(R=_.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(u,m.sibling),m=r(m,_.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=ru(_,u.mode,y),m.return=u,u=m}return o(u);case Mi:return R=_._init,p(u,m,R(_._payload),y)}if(Hs(_))return x(u,m,_,y);if(Cs(_))return v(u,m,_,y);jo(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,_),m.return=u,u=m):(n(u,m),m=iu(_,u.mode,y),m.return=u,u=m),o(u)):n(u,m)}return p}var hs=Wm(!0),Xm=Wm(!1),ja=Xi(null),Ya=null,Qr=null,ff=null;function df(){ff=Qr=Ya=null}function hf(t){var e=ja.current;tt(ja),t._currentValue=e}function hc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function os(t,e){Ya=t,ff=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(Ya===null)throw Error(J(308));Qr=t,Ya.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var ar=null;function pf(t){ar===null?ar=[t]:ar.push(t)}function jm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pf(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ym(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ni(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,pf(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jc(t,n)}}function Id(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qa(t,e,n,i){var r=t.updateQueue;Ei=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(d=e,g=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(g,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(g,h,d):x,d==null)break e;h=st({},h,d);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=h}}function Fd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Ao={},jn=Xi(Ao),po=Xi(Ao),mo=Xi(Ao);function lr(t){if(t===Ao)throw Error(J(174));return t}function gf(t,e){switch(Qe(mo,e),Qe(po,t),Qe(jn,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yu(e,t)}tt(jn),Qe(jn,e)}function ps(){tt(jn),tt(po),tt(mo)}function qm(t){lr(mo.current);var e=lr(jn.current),n=Yu(e,t.type);e!==n&&(Qe(po,t),Qe(jn,n))}function _f(t){po.current===t&&(tt(jn),tt(po))}var it=Xi(0);function $a(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function vf(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var Aa=pi.ReactCurrentDispatcher,Ql=pi.ReactCurrentBatchConfig,gr=0,rt=null,gt=null,Tt=null,Ka=!1,Ks=!1,go=0,S0=0;function Ut(){throw Error(J(321))}function xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function yf(t,e,n,i,r,s){if(gr=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?w0:A0,t=n(i,r),Ks){s=0;do{if(Ks=!1,go=0,25<=s)throw Error(J(301));s+=1,Tt=gt=null,e.updateQueue=null,Aa.current=C0,t=n(i,r)}while(Ks)}if(Aa.current=Za,e=gt!==null&&gt.next!==null,gr=0,Tt=gt=rt=null,Ka=!1,e)throw Error(J(300));return t}function Sf(){var t=go!==0;return go=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?rt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function wn(){if(gt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Tt===null?rt.memoizedState:Tt.next;if(e!==null)Tt=e,gt=t;else{if(t===null)throw Error(J(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?rt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function _o(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=wn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((gr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,rt.lanes|=f,_r|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,zn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rt.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=wn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);zn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $m(){}function Km(t,e){var n=rt,i=wn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,Mf(Jm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,vo(9,Qm.bind(null,n,i,r,e),void 0,null),At===null)throw Error(J(349));gr&30||Zm(n,e,r)}return r}function Zm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qm(t,e,n,i){e.value=n,e.getSnapshot=i,eg(e)&&tg(t)}function Jm(t,e,n){return n(function(){eg(e)&&tg(t)})}function eg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function tg(t){var e=fi(t,1);e!==null&&kn(e,t,1,-1)}function Od(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=T0.bind(null,rt,t),[e.memoizedState,t]}function vo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ng(){return wn().memoizedState}function Ca(t,e,n,i){var r=Gn();rt.flags|=t,r.memoizedState=vo(1|e,n,void 0,i===void 0?null:i)}function gl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&xf(i,o.deps)){r.memoizedState=vo(e,n,s,i);return}}rt.flags|=t,r.memoizedState=vo(1|e,n,s,i)}function kd(t,e){return Ca(8390656,8,t,e)}function Mf(t,e){return gl(2048,8,t,e)}function ig(t,e){return gl(4,2,t,e)}function rg(t,e){return gl(4,4,t,e)}function sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function og(t,e,n){return n=n!=null?n.concat([t]):null,gl(4,4,sg.bind(null,e,t),n)}function Ef(){}function ag(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function lg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ug(t,e,n){return gr&21?(zn(n,e)||(n=pm(),rt.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function M0(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=Ql.transition;Ql.transition={};try{t(!1),e()}finally{Ye=n,Ql.transition=i}}function cg(){return wn().memoizedState}function E0(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fg(t))dg(e,n);else if(n=jm(t,e,n,i),n!==null){var r=Xt();kn(n,t,i,r),hg(n,e,i)}}function T0(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fg(t))dg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,zn(a,o)){var l=e.interleaved;l===null?(r.next=r,pf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=jm(t,e,r,i),n!==null&&(r=Xt(),kn(n,t,i,r),hg(n,e,i))}}function fg(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function dg(t,e){Ks=Ka=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jc(t,n)}}var Za={readContext:Tn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},w0={readContext:Tn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:kd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ca(4194308,4,sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ca(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ca(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=E0.bind(null,rt,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Od,useDebugValue:Ef,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Od(!1),e=t[0];return t=M0.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rt,r=Gn();if(nt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),At===null)throw Error(J(349));gr&30||Zm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,kd(Jm.bind(null,i,s,t),[t]),i.flags|=2048,vo(9,Qm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=At.identifierPrefix;if(nt){var n=oi,i=si;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=S0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},A0={readContext:Tn,useCallback:ag,useContext:Tn,useEffect:Mf,useImperativeHandle:og,useInsertionEffect:ig,useLayoutEffect:rg,useMemo:lg,useReducer:Jl,useRef:ng,useState:function(){return Jl(_o)},useDebugValue:Ef,useDeferredValue:function(t){var e=wn();return ug(e,gt.memoizedState,t)},useTransition:function(){var t=Jl(_o)[0],e=wn().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Km,useId:cg,unstable_isNewReconciler:!1},C0={readContext:Tn,useCallback:ag,useContext:Tn,useEffect:Mf,useImperativeHandle:og,useInsertionEffect:ig,useLayoutEffect:rg,useMemo:lg,useReducer:eu,useRef:ng,useState:function(){return eu(_o)},useDebugValue:Ef,useDeferredValue:function(t){var e=wn();return gt===null?e.memoizedState=t:ug(e,gt.memoizedState,t)},useTransition:function(){var t=eu(_o)[0],e=wn().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Km,useId:cg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?Mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Fi(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ni(t,s,r),e!==null&&(kn(e,t,r,i),wa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Fi(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ni(t,s,r),e!==null&&(kn(e,t,r,i),wa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Fi(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ni(t,r,i),e!==null&&(kn(e,t,i,n),wa(e,t,i))}};function zd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,i)||!uo(r,s):!0}function pg(t,e,n){var i=!1,r=Gi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=Jt(e)?pr:zt.current,i=e.contextTypes,s=(i=i!=null)?fs(t,r):Gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function mc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=Jt(e)?pr:zt.current,r.context=fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_l.enqueueReplaceState(r,r.state,null),qa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",i=e;do n+=tv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var R0=typeof WeakMap=="function"?WeakMap:Map;function mg(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ja||(Ja=!0,Ac=i),gc(t,e)},n}function gg(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gc(t,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new R0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=G0.bind(null,t,e,n),e.then(t,t))}function Gd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Ni(n,e,1))),n.lanes|=1),t)}var P0=pi.ReactCurrentOwner,Zt=!1;function Vt(t,e,n,i){e.child=t===null?Xm(e,null,n,i):hs(e,t.child,n,i)}function Wd(t,e,n,i,r){n=n.render;var s=e.ref;return os(e,r),i=yf(t,e,n,i,s,r),n=Sf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(nt&&n&&lf(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Xd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_g(t,e,s,i,r)):(t=ba(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,i)&&t.ref===e.ref)return di(t,e,r)}return e.flags|=1,t=Oi(s,i),t.ref=e.ref,t.return=e,e.child=t}function _g(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(uo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,di(t,e,r)}return _c(t,e,n,i,r)}function vg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(es,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(es,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Qe(es,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Qe(es,ln),ln|=i;return Vt(t,e,r,n),e.child}function xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _c(t,e,n,i,r){var s=Jt(n)?pr:zt.current;return s=fs(e,s),os(e,r),n=yf(t,e,n,i,s,r),i=Sf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(nt&&i&&lf(e),e.flags|=1,Vt(t,e,n,r),e.child)}function jd(t,e,n,i,r){if(Jt(n)){var s=!0;Va(e)}else s=!1;if(os(e,r),e.stateNode===null)Ra(t,e),pg(e,n,i),mc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=Jt(n)?pr:zt.current,c=fs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bd(e,o,i,c),Ei=!1;var d=e.memoizedState;o.state=d,qa(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Qt.current||Ei?(typeof f=="function"&&(pc(e,n,f,i),l=e.memoizedState),(a=Ei||zd(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ym(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ln(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=Jt(n)?pr:zt.current,l=fs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Bd(e,o,i,l),Ei=!1,d=e.memoizedState,o.state=d,qa(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||Qt.current||Ei?(typeof g=="function"&&(pc(e,n,g,i),x=e.memoizedState),(c=Ei||zd(e,n,c,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return vc(t,e,n,i,s,r)}function vc(t,e,n,i,r,s){xg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&bd(e,n,!1),di(t,e,s);i=e.stateNode,P0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&bd(e,n,!0),e.child}function yg(t){var e=t.stateNode;e.pendingContext?Ld(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ld(t,e.context,!1),gf(t,e.containerInfo)}function Yd(t,e,n,i,r){return ds(),cf(r),e.flags|=256,Vt(t,e,n,i),e.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sg(t,e,n){var i=e.pendingProps,r=it.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Qe(it,r&1),t===null)return dc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,i,0,null),t=cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yc(n),e.memoizedState=xc,t):Tf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return L0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Oi(a,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?yc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xc,i}return s=t.child,t=s.sibling,i=Oi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tf(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yo(t,e,n,i){return i!==null&&cf(i),hs(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function L0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tu(Error(J(422))),Yo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yl({mode:"visible",children:i.children},r,0,null),s=cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=yc(o),e.memoizedState=xc,s);if(!(e.mode&1))return Yo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=tu(s,i,void 0),Yo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=At,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),kn(i,t,r,-1))}return Lf(),i=tu(Error(J(421))),Yo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=V0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Ui(r.nextSibling),cn=e,nt=!0,Dn=null,t!==null&&(_n[vn++]=si,_n[vn++]=oi,_n[vn++]=mr,si=t.id,oi=t.overflow,mr=e),e=Tf(e,i.children),e.flags|=4096,e)}function qd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hc(t.return,e,n)}function nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Mg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=it.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qd(t,n,e);else if(t.tag===19)qd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Qe(it,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$a(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$a(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function b0(t,e,n){switch(e.tag){case 3:yg(e),ds();break;case 5:qm(e);break;case 1:Jt(e.type)&&Va(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Qe(ja,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Qe(it,it.current&1),e.flags|=128,null):n&e.child.childLanes?Sg(t,e,n):(Qe(it,it.current&1),t=di(t,e,n),t!==null?t.sibling:null);Qe(it,it.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Mg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Qe(it,it.current),i)break;return null;case 22:case 23:return e.lanes=0,vg(t,e,n)}return di(t,e,n)}var Eg,Sc,Tg,wg;Eg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sc=function(){};Tg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,lr(jn.current);var s=null;switch(n){case"input":r=Vu(t,r),i=Vu(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=ju(t,r),i=ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ha)}qu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(no.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(no.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Us(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function D0(t,e,n){var i=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Jt(e.type)&&Ga(),Nt(e),null;case 3:return i=e.stateNode,ps(),tt(Qt),tt(zt),vf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Pc(Dn),Dn=null))),Sc(t,e),Nt(e),null;case 5:_f(e);var r=lr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Tg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Nt(e),null}if(t=lr(jn.current),Xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[ho]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",i),Je("close",i);break;case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(r=0;r<Vs.length;r++)Je(Vs[r],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"details":Je("toggle",i);break;case"input":id(i,s),Je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Je("invalid",i);break;case"textarea":sd(i,s),Je("invalid",i)}qu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,a,t),r=["children",""+a]):no.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",i)}switch(n){case"input":Fo(i),rd(i,s,!0);break;case"textarea":Fo(i),od(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ha)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Wn]=e,t[ho]=i,Eg(t,e,!1,!1),e.stateNode=t;e:{switch(o=$u(n,i),n){case"dialog":Je("cancel",t),Je("close",t),r=i;break;case"iframe":case"object":case"embed":Je("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vs.length;r++)Je(Vs[r],t);r=i;break;case"source":Je("error",t),r=i;break;case"img":case"image":case"link":Je("error",t),Je("load",t),r=i;break;case"details":Je("toggle",t),r=i;break;case"input":id(t,i),r=Vu(t,i),Je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),Je("invalid",t);break;case"textarea":sd(t,i),r=ju(t,i),Je("invalid",t);break;default:r=i}qu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&em(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&io(t,l):typeof l=="number"&&io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Je("scroll",t):l!=null&&Yc(t,s,l,o))}switch(n){case"input":Fo(t),rd(t,i,!1);break;case"textarea":Fo(t),od(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)wg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=lr(mo.current),lr(jn.current),Xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:Wo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return Nt(e),null;case 13:if(tt(it),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&un!==null&&e.mode&1&&!(e.flags&128))Vm(),ds(),e.flags|=98560,s=!1;else if(s=Xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Wn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Dn!==null&&(Pc(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||it.current&1?_t===0&&(_t=3):Lf())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return ps(),Sc(t,e),t===null&&co(e.stateNode.containerInfo),Nt(e),null;case 10:return hf(e.type._context),Nt(e),null;case 17:return Jt(e.type)&&Ga(),Nt(e),null;case 19:if(tt(it),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Us(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$a(t),o!==null){for(e.flags|=128,Us(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(it,it.current&1|2),e.child}t=t.sibling}s.tail!==null&&ft()>gs&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304)}else{if(!i)if(t=$a(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nt)return Nt(e),null}else 2*ft()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ft(),e.sibling=null,n=it.current,Qe(it,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Pf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function U0(t,e){switch(uf(e),e.tag){case 1:return Jt(e.type)&&Ga(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),tt(Qt),tt(zt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(tt(it),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(it),null;case 4:return ps(),null;case 10:return hf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var qo=!1,kt=!1,N0=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ut(t,e,i)}else n.current=null}function Mc(t,e,n){try{n()}catch(i){ut(t,e,i)}}var $d=!1;function I0(t,e){if(sc=ka,t=Lm(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(oc={focusedElem:t,selectionRange:n},ka=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ln(e.type,v),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(y){ut(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return x=$d,$d=!1,x}function Zs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Mc(e,n,s)}r=r.next}while(r!==i)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ec(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ag(t){var e=t.alternate;e!==null&&(t.alternate=null,Ag(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[ho],delete e[uc],delete e[_0],delete e[v0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cg(t){return t.tag===5||t.tag===3||t.tag===4}function Kd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ha));else if(i!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}function wc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wc(t,e,n),t=t.sibling;t!==null;)wc(t,e,n),t=t.sibling}var Ct=null,bn=!1;function mi(t,e,n){for(n=n.child;n!==null;)Rg(t,e,n),n=n.sibling}function Rg(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:kt||Jr(n,e);case 6:var i=Ct,r=bn;Ct=null,mi(t,e,n),Ct=i,bn=r,Ct!==null&&(bn?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(bn?(t=Ct,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),ao(t)):$l(Ct,n.stateNode));break;case 4:i=Ct,r=bn,Ct=n.stateNode.containerInfo,bn=!0,mi(t,e,n),Ct=i,bn=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mc(n,e,o),r=r.next}while(r!==i)}mi(t,e,n);break;case 1:if(!kt&&(Jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ut(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,mi(t,e,n),kt=i):mi(t,e,n);break;default:mi(t,e,n)}}function Zd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new N0),e.forEach(function(i){var r=W0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,bn=!1;break e;case 3:Ct=a.stateNode.containerInfo,bn=!0;break e;case 4:Ct=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(Ct===null)throw Error(J(160));Rg(s,o,r),Ct=null,bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pg(e,t),e=e.sibling}function Pg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Hn(t),i&4){try{Zs(3,t,t.return),vl(3,t)}catch(v){ut(t,t.return,v)}try{Zs(5,t,t.return)}catch(v){ut(t,t.return,v)}}break;case 1:An(e,t),Hn(t),i&512&&n!==null&&Jr(n,n.return);break;case 5:if(An(e,t),Hn(t),i&512&&n!==null&&Jr(n,n.return),t.flags&32){var r=t.stateNode;try{io(r,"")}catch(v){ut(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zp(r,s),$u(a,o);var c=$u(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?nm(r,h):f==="dangerouslySetInnerHTML"?em(r,h):f==="children"?io(r,h):Yc(r,f,h,c)}switch(a){case"input":Wu(r,s);break;case"textarea":Qp(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ns(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?ns(r,!!s.multiple,s.defaultValue,!0):ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[ho]=s}catch(v){ut(t,t.return,v)}}break;case 6:if(An(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){ut(t,t.return,v)}}break;case 3:if(An(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(v){ut(t,t.return,v)}break;case 4:An(e,t),Hn(t);break;case 13:An(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cf=ft())),i&4&&Zd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||f,An(e,t),kt=c):An(e,t),Hn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(h=pe=f;pe!==null;){switch(d=pe,g=d.child,d.tag){case 0:case 11:case 14:case 15:Zs(4,d,d.return);break;case 1:Jr(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){ut(i,n,v)}}break;case 5:Jr(d,d.return);break;case 22:if(d.memoizedState!==null){Jd(h);continue}}g!==null?(g.return=d,pe=g):Jd(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tm("display",o))}catch(v){ut(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){ut(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:An(e,t),Hn(t),i&4&&Zd(t);break;case 21:break;default:An(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cg(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(io(r,""),i.flags&=-33);var s=Kd(t);wc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kd(t);Tc(t,a,o);break;default:throw Error(J(161))}}catch(l){ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F0(t,e,n){pe=t,Lg(t)}function Lg(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=qo;var c=kt;if(qo=o,(kt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?eh(r):l!==null?(l.return=o,pe=l):eh(r);for(;s!==null;)pe=s,Lg(s),s=s.sibling;pe=r,qo=a,kt=c}Qd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Qd(t)}}function Qd(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}kt||e.flags&512&&Ec(e)}catch(d){ut(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Jd(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function eh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(l){ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var s=e.return;try{Ec(e)}catch(l){ut(e,s,l)}break;case 5:var o=e.return;try{Ec(e)}catch(l){ut(e,o,l)}}}catch(l){ut(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var O0=Math.ceil,Qa=pi.ReactCurrentDispatcher,wf=pi.ReactCurrentOwner,En=pi.ReactCurrentBatchConfig,Ve=0,At=null,mt=null,Pt=0,ln=0,es=Xi(0),_t=0,xo=null,_r=0,xl=0,Af=0,Qs=null,$t=null,Cf=0,gs=1/0,ni=null,Ja=!1,Ac=null,Ii=null,$o=!1,Ci=null,el=0,Js=0,Cc=null,Pa=-1,La=0;function Xt(){return Ve&6?ft():Pa!==-1?Pa:Pa=ft()}function Fi(t){return t.mode&1?Ve&2&&Pt!==0?Pt&-Pt:y0.transition!==null?(La===0&&(La=pm()),La):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:Sm(t.type)),t):1}function kn(t,e,n,i){if(50<Js)throw Js=0,Cc=null,Error(J(185));Eo(t,n,i),(!(Ve&2)||t!==At)&&(t===At&&(!(Ve&2)&&(xl|=n),_t===4&&wi(t,Pt)),en(t,i),n===1&&Ve===0&&!(e.mode&1)&&(gs=ft()+500,ml&&ji()))}function en(t,e){var n=t.callbackNode;yv(t,e);var i=Oa(t,t===At?Pt:0);if(i===0)n!==null&&ud(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ud(n),e===1)t.tag===0?x0(th.bind(null,t)):Bm(th.bind(null,t)),m0(function(){!(Ve&6)&&ji()}),n=null;else{switch(mm(i)){case 1:n=Qc;break;case 4:n=dm;break;case 16:n=Fa;break;case 536870912:n=hm;break;default:n=Fa}n=kg(n,bg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bg(t,e){if(Pa=-1,La=0,Ve&6)throw Error(J(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var i=Oa(t,t===At?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tl(t,i);else{e=i;var r=Ve;Ve|=2;var s=Ug();(At!==t||Pt!==e)&&(ni=null,gs=ft()+500,ur(t,e));do try{B0();break}catch(a){Dg(t,a)}while(!0);df(),Qa.current=s,Ve=r,mt!==null?e=0:(At=null,Pt=0,e=_t)}if(e!==0){if(e===2&&(r=ec(t),r!==0&&(i=r,e=Rc(t,r))),e===1)throw n=xo,ur(t,0),wi(t,i),en(t,ft()),n;if(e===6)wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!k0(r)&&(e=tl(t,i),e===2&&(s=ec(t),s!==0&&(i=s,e=Rc(t,s))),e===1))throw n=xo,ur(t,0),wi(t,i),en(t,ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:tr(t,$t,ni);break;case 3:if(wi(t,i),(i&130023424)===i&&(e=Cf+500-ft(),10<e)){if(Oa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=lc(tr.bind(null,t,$t,ni),e);break}tr(t,$t,ni);break;case 4:if(wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O0(i/1960))-i,10<i){t.timeoutHandle=lc(tr.bind(null,t,$t,ni),i);break}tr(t,$t,ni);break;case 5:tr(t,$t,ni);break;default:throw Error(J(329))}}}return en(t,ft()),t.callbackNode===n?bg.bind(null,t):null}function Rc(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=tl(t,e),t!==2&&(e=$t,$t=n,e!==null&&Pc(e)),t}function Pc(t){$t===null?$t=t:$t.push.apply($t,t)}function k0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wi(t,e){for(e&=~Af,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function th(t){if(Ve&6)throw Error(J(327));as();var e=Oa(t,0);if(!(e&1))return en(t,ft()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var i=ec(t);i!==0&&(e=i,n=Rc(t,i))}if(n===1)throw n=xo,ur(t,0),wi(t,e),en(t,ft()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,$t,ni),en(t,ft()),null}function Rf(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(gs=ft()+500,ml&&ji())}}function vr(t){Ci!==null&&Ci.tag===0&&!(Ve&6)&&as();var e=Ve;Ve|=1;var n=En.transition,i=Ye;try{if(En.transition=null,Ye=1,t)return t()}finally{Ye=i,En.transition=n,Ve=e,!(Ve&6)&&ji()}}function Pf(){ln=es.current,tt(es)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p0(n)),mt!==null)for(n=mt.return;n!==null;){var i=n;switch(uf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ga();break;case 3:ps(),tt(Qt),tt(zt),vf();break;case 5:_f(i);break;case 4:ps();break;case 13:tt(it);break;case 19:tt(it);break;case 10:hf(i.type._context);break;case 22:case 23:Pf()}n=n.return}if(At=t,mt=t=Oi(t.current,null),Pt=ln=e,_t=0,xo=null,Af=xl=_r=0,$t=Qs=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ar=null}return t}function Dg(t,e){do{var n=mt;try{if(df(),Aa.current=Za,Ka){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ka=!1}if(gr=0,Tt=gt=rt=null,Ks=!1,go=0,wf.current=null,n===null||n.return===null){_t=1,xo=e,mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Gd(o);if(g!==null){g.flags&=-257,Vd(g,o,a,s,e),g.mode&1&&Hd(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Hd(s,c,e),Lf();break e}l=Error(J(426))}}else if(nt&&a.mode&1){var p=Gd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Vd(p,o,a,s,e),cf(ms(l,a));break e}}s=l=ms(l,a),_t!==4&&(_t=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=mg(s,l,e);Id(s,u);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ii===null||!Ii.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=gg(s,a,e);Id(s,y);break e}}s=s.return}while(s!==null)}Ig(n)}catch(T){e=T,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function Ug(){var t=Qa.current;return Qa.current=Za,t===null?Za:t}function Lf(){(_t===0||_t===3||_t===2)&&(_t=4),At===null||!(_r&268435455)&&!(xl&268435455)||wi(At,Pt)}function tl(t,e){var n=Ve;Ve|=2;var i=Ug();(At!==t||Pt!==e)&&(ni=null,ur(t,e));do try{z0();break}catch(r){Dg(t,r)}while(!0);if(df(),Ve=n,Qa.current=i,mt!==null)throw Error(J(261));return At=null,Pt=0,_t}function z0(){for(;mt!==null;)Ng(mt)}function B0(){for(;mt!==null&&!fv();)Ng(mt)}function Ng(t){var e=Og(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Ig(t):mt=e,wf.current=null}function Ig(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=U0(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,mt=null;return}}else if(n=D0(n,e,ln),n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);_t===0&&(_t=5)}function tr(t,e,n){var i=Ye,r=En.transition;try{En.transition=null,Ye=1,H0(t,e,n,i)}finally{En.transition=r,Ye=i}return null}function H0(t,e,n,i){do as();while(Ci!==null);if(Ve&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sv(t,s),t===At&&(mt=At=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,kg(Fa,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=Ye;Ye=1;var a=Ve;Ve|=4,wf.current=null,I0(t,n),Pg(n,t),a0(oc),ka=!!sc,oc=sc=null,t.current=n,F0(n),dv(),Ve=a,Ye=o,En.transition=s}else t.current=n;if($o&&($o=!1,Ci=t,el=r),s=t.pendingLanes,s===0&&(Ii=null),mv(n.stateNode),en(t,ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ja)throw Ja=!1,t=Ac,Ac=null,t;return el&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===Cc?Js++:(Js=0,Cc=t):Js=0,ji(),null}function as(){if(Ci!==null){var t=mm(el),e=En.transition,n=Ye;try{if(En.transition=null,Ye=16>t?16:t,Ci===null)var i=!1;else{if(t=Ci,Ci=null,el=0,Ve&6)throw Error(J(331));var r=Ve;for(Ve|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var h=f.child;if(h!==null)h.return=f,pe=h;else for(;pe!==null;){f=pe;var d=f.sibling,g=f.return;if(Ag(f),f===c){pe=null;break}if(d!==null){d.return=g,pe=d;break}pe=g}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var m=t.current;for(pe=m;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=m;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(T){ut(a,a.return,T)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Ve=r,ji(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(cl,t)}catch{}i=!0}return i}finally{Ye=n,En.transition=e}}return!1}function nh(t,e,n){e=ms(n,e),e=mg(t,e,1),t=Ni(t,e,1),e=Xt(),t!==null&&(Eo(t,1,e),en(t,e))}function ut(t,e,n){if(t.tag===3)nh(t,t,n);else for(;e!==null;){if(e.tag===3){nh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){t=ms(n,t),t=gg(e,t,1),e=Ni(e,t,1),t=Xt(),e!==null&&(Eo(e,1,t),en(e,t));break}}e=e.return}}function G0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Pt&n)===n&&(_t===4||_t===3&&(Pt&130023424)===Pt&&500>ft()-Cf?ur(t,0):Af|=n),en(t,e)}function Fg(t,e){e===0&&(t.mode&1?(e=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):e=1);var n=Xt();t=fi(t,e),t!==null&&(Eo(t,e,n),en(t,n))}function V0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fg(t,n)}function W0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Fg(t,n)}var Og;Og=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,b0(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,nt&&e.flags&1048576&&Hm(e,Xa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ra(t,e),t=e.pendingProps;var r=fs(e,zt.current);os(e,n),r=yf(null,e,i,t,r,n);var s=Sf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,Va(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mf(e),r.updater=_l,e.stateNode=r,r._reactInternals=e,mc(e,i,t,n),e=vc(null,e,i,!0,s,n)):(e.tag=0,nt&&s&&lf(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ra(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=j0(i),t=Ln(i,t),r){case 0:e=_c(null,e,i,t,n);break e;case 1:e=jd(null,e,i,t,n);break e;case 11:e=Wd(null,e,i,t,n);break e;case 14:e=Xd(null,e,i,Ln(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),_c(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),jd(t,e,i,r,n);case 3:e:{if(yg(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ym(t,e),qa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ms(Error(J(423)),e),e=Yd(t,e,i,n,r);break e}else if(i!==r){r=ms(Error(J(424)),e),e=Yd(t,e,i,n,r);break e}else for(un=Ui(e.stateNode.containerInfo.firstChild),cn=e,nt=!0,Dn=null,n=Xm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),i===r){e=di(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return qm(e),t===null&&dc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ac(i,r)?o=null:s!==null&&ac(i,s)&&(e.flags|=32),xg(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&dc(e),null;case 13:return Sg(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hs(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Wd(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Qe(ja,i._currentValue),i._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===r.children&&!Qt.current){e=di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,os(e,n),r=Tn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),Xd(t,e,i,r,n);case 15:return _g(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ra(t,e),e.tag=1,Jt(i)?(t=!0,Va(e)):t=!1,os(e,n),pg(e,i,r),mc(e,i,r,n),vc(null,e,i,!0,t,n);case 19:return Mg(t,e,n);case 22:return vg(t,e,n)}throw Error(J(156,e.tag))};function kg(t,e){return fm(t,e)}function X0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new X0(t,e,n,i)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j0(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$c)return 11;if(t===Kc)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wr:return cr(n.children,r,s,e);case qc:o=8,r|=8;break;case zu:return t=Mn(12,n,e,r|2),t.elementType=zu,t.lanes=s,t;case Bu:return t=Mn(13,n,e,r),t.elementType=Bu,t.lanes=s,t;case Hu:return t=Mn(19,n,e,r),t.elementType=Hu,t.lanes=s,t;case qp:return yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jp:o=10;break e;case Yp:o=9;break e;case $c:o=11;break e;case Kc:o=14;break e;case Mi:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function cr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function yl(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=qp,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,i,r,s,o,a,l){return t=new Y0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function q0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function zg(t){if(!t)return Gi;t=t._reactInternals;e:{if(Mr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(Jt(n))return zm(t,n,e)}return e}function Bg(t,e,n,i,r,s,o,a,l){return t=Df(n,i,!0,t,r,s,o,a,l),t.context=zg(null),n=t.current,i=Xt(),r=Fi(n),s=li(i,r),s.callback=e??null,Ni(n,s,r),t.current.lanes=r,Eo(t,r,i),en(t,i),t}function Sl(t,e,n,i){var r=e.current,s=Xt(),o=Fi(r);return n=zg(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ni(r,e,o),t!==null&&(kn(t,r,o,s),wa(t,r,o)),o}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ih(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uf(t,e){ih(t,e),(t=t.alternate)&&ih(t,e)}function $0(){return null}var Hg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}Ml.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Sl(t,e,null,null)};Ml.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vr(function(){Sl(null,t,null,null)}),e[ci]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=vm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&ym(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rh(){}function K0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nl(o);s.call(c)}}var o=Bg(e,i,t,0,null,!1,!1,"",rh);return t._reactRootContainer=o,t[ci]=o.current,co(t.nodeType===8?t.parentNode:t),vr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nl(l);a.call(c)}}var l=Df(t,0,!1,null,null,!1,!1,"",rh);return t._reactRootContainer=l,t[ci]=l.current,co(t.nodeType===8?t.parentNode:t),vr(function(){Sl(e,l,n,i)}),l}function Tl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nl(o);a.call(l)}}Sl(e,o,t,r)}else o=K0(n,e,t,r,i);return nl(o)}gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(Jc(e,n|1),en(e,ft()),!(Ve&6)&&(gs=ft()+500,ji()))}break;case 13:vr(function(){var i=fi(t,1);if(i!==null){var r=Xt();kn(i,t,1,r)}}),Uf(t,1)}};ef=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=Xt();kn(e,t,134217728,n)}Uf(t,134217728)}};_m=function(t){if(t.tag===13){var e=Fi(t),n=fi(t,e);if(n!==null){var i=Xt();kn(n,t,e,i)}Uf(t,e)}};vm=function(){return Ye};xm=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};Zu=function(t,e,n){switch(e){case"input":if(Wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pl(i);if(!r)throw Error(J(90));Kp(i),Wu(i,r)}}}break;case"textarea":Qp(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};sm=Rf;om=vr;var Z0={usingClientEntryPoint:!1,Events:[wo,qr,pl,im,rm,Rf]},Ns={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=um(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{cl=Ko.inject(Q0),Xn=Ko}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(J(200));return q0(t,e,null,n)};hn.createRoot=function(t,e){if(!If(t))throw Error(J(299));var n=!1,i="",r=Hg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,i,r),t[ci]=e.current,co(t.nodeType===8?t.parentNode:t),new Nf(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=um(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return vr(t)};hn.hydrate=function(t,e,n){if(!El(e))throw Error(J(200));return Tl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!If(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Hg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bg(e,null,t,1,n??null,r,!1,s,o),t[ci]=e.current,co(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ml(e)};hn.render=function(t,e,n){if(!El(e))throw Error(J(200));return Tl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!El(t))throw Error(J(40));return t._reactRootContainer?(vr(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[ci]=null})}),!0):!1};hn.unstable_batchedUpdates=Rf;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!El(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Tl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function Gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gg)}catch(t){console.error(t)}}Gg(),Gp.exports=hn;var J0=Gp.exports,Vg,sh=J0;Vg=sh.createRoot,sh.hydrateRoot;const Ff="hugh_games_cookie_v1",eo={cookies:0,totalCookies:0,cps:0,cursors:0,grandmas:0,mines:0,factories:0,prestigePoints:0,prestigeMultiplier:1,achievements:{}};function gi(t){try{localStorage.setItem(Ff,JSON.stringify(t))}catch{}}function ex(){try{const t=localStorage.getItem(Ff);return t?{...eo,...JSON.parse(t)}:eo}catch{return eo}}function tx(){const[t,e]=Ot.useState(()=>ex()),[n]=Ot.useState(1e3);Ot.useEffect(()=>{const u=(t.cursors*.2+t.grandmas*1+t.mines*8+t.factories*50)*t.prestigeMultiplier;e(m=>({...m,cps:u}))},[t.cursors,t.grandmas,t.mines,t.factories,t.prestigeMultiplier]),Ot.useEffect(()=>{const p=setInterval(()=>{e(u=>{const m={...u,cookies:u.cookies+u.cps,totalCookies:u.totalCookies+u.cps};return gi(m),m})},n);return()=>clearInterval(p)},[n]),Ot.useEffect(()=>gi(t),[t]);function i(){try{const p=new(window.AudioContext||window.webkitAudioContext),u=p.createOscillator(),m=p.createGain();u.type="sine",u.frequency.value=600,m.gain.value=.08,u.connect(m),m.connect(p.destination),u.start(),setTimeout(()=>{u.stop(),p.close()},80)}catch{}}function r(){try{const p=new(window.AudioContext||window.webkitAudioContext),u=p.createOscillator(),m=p.createGain();u.type="triangle",u.frequency.value=420,m.gain.value=.12,u.connect(m),m.connect(p.destination),u.start(),m.gain.exponentialRampToValueAtTime(1e-4,p.currentTime+.18),setTimeout(()=>{u.stop(),p.close()},180)}catch{}}function s(){try{const p=new(window.AudioContext||window.webkitAudioContext),u=p.createOscillator(),m=p.createGain();u.type="sine",u.frequency.value=880,m.gain.value=.14,u.connect(m),m.connect(p.destination),u.start(),setTimeout(()=>{u.frequency.value=1180,m.gain.exponentialRampToValueAtTime(1e-4,p.currentTime+.22)},120),setTimeout(()=>{u.stop(),p.close()},320)}catch{}}function o(){i();try{const p=document.querySelector(".big-cookie");p&&(p.classList.add("pulse"),setTimeout(()=>p.classList.remove("pulse"),120))}catch{}e(p=>{const u={...p,cookies:p.cookies+1,totalCookies:p.totalCookies+1};return gi(u),u})}function a(p){try{const u=document.querySelector(`[data-item="${p}"]`);if(!u)return;u.classList.add("bought"),setTimeout(()=>u.classList.remove("bought"),260)}catch{}}function l(){const p=Math.floor(15*Math.pow(1.15,t.cursors));t.cookies<p||e(u=>{const m=u.cookies-p,_=u.cursors+1,y=_*.2+u.grandmas*1,T={...u,cookies:m,cursors:_,cps:y};return gi(T),r(),a("cursor"),T})}function c(){const p=Math.floor(100*Math.pow(1.15,t.grandmas));t.cookies<p||e(u=>{const m=u.cookies-p,_=u.grandmas+1,y=u.cursors*.2+_*1,T={...u,cookies:m,grandmas:_,cps:y};return gi(T),r(),a("grandma"),T})}function f(){const p=Math.floor(3e3*Math.pow(1.2,t.mines));t.cookies<p||e(u=>{const m=u.cookies-p,_=u.mines+1,y=u.cursors*.2+u.grandmas*1+_*8+u.factories*50,T={...u,cookies:m,mines:_,cps:y};return gi(T),r(),a("mine"),T})}function h(){const p=Math.floor(25e3*Math.pow(1.2,t.factories));t.cookies<p||e(u=>{const m=u.cookies-p,_=u.factories+1,y=u.cursors*.2+u.grandmas*1+u.mines*8+_*50,T={...u,cookies:m,factories:_,cps:y};return gi(T),r(),a("factory"),T})}function d(){e(eo);try{localStorage.removeItem(Ff)}catch{}}function g(){return t.totalCookies>=1e5}function x(){if(!g())return;const p=Math.floor(t.totalCookies/1e5);p<=0||e(u=>{const m=u.prestigePoints+p,_=1+m*.05,y={...eo,prestigePoints:m,prestigeMultiplier:_,achievements:u.achievements};return gi(y),y})}const v=Ot.useRef({});return Ot.useEffect(()=>{const p={};t.totalCookies>=100&&(p["100 cookies"]=!0),t.totalCookies>=1e3&&(p["1k cookies"]=!0),t.totalCookies>=1e4&&(p["10k cookies"]=!0),t.totalCookies>=1e5&&(p["100k cookies"]=!0);const u={...t.achievements,...p},m=v.current||{};Object.keys(u).filter(y=>u[y]&&!m[y]).length>0&&s(),v.current=u,e(y=>({...y,achievements:u}))},[t.totalCookies]),oe.jsxs("section",{className:"cookie",children:[oe.jsx("h2",{children:"Cookie Clicker (MVP)"}),oe.jsxs("div",{className:"cookie-top",children:[oe.jsx("div",{className:"big-cookie",onClick:o,role:"button","aria-label":"Click cookie",children:"🍪"}),oe.jsxs("div",{className:"stats",children:[oe.jsxs("div",{children:[oe.jsx("strong",{children:"Cookies:"})," ",Math.floor(t.cookies)]}),oe.jsxs("div",{children:[oe.jsx("strong",{children:"Total:"})," ",Math.floor(t.totalCookies)]}),oe.jsxs("div",{children:[oe.jsx("strong",{children:"CPS:"})," ",t.cps.toFixed(2)]}),oe.jsxs("div",{children:[oe.jsx("strong",{children:"Prestige pts:"})," ",t.prestigePoints," · ",oe.jsxs("small",{children:["mult ×",t.prestigeMultiplier.toFixed(2)]})]})]})]}),oe.jsxs("div",{className:"shop",children:[oe.jsx("h3",{children:"Shop"}),oe.jsxs("div",{className:"shop-row",children:[oe.jsxs("div",{children:[oe.jsx("strong",{children:"Cursor"}),oe.jsxs("div",{children:["Owned: ",t.cursors]}),oe.jsxs("div",{children:["Cost: ",Math.floor(15*Math.pow(1.15,t.cursors))]}),oe.jsx("div",{children:"Gives +0.2 cookies/sec"}),oe.jsx("button",{onClick:l,children:"Buy"})]}),oe.jsxs("div",{children:[oe.jsx("strong",{children:"Grandma"}),oe.jsxs("div",{children:["Owned: ",t.grandmas]}),oe.jsxs("div",{children:["Cost: ",Math.floor(100*Math.pow(1.15,t.grandmas))]}),oe.jsx("div",{children:"Gives +1 cookies/sec"}),oe.jsx("button",{onClick:c,children:"Buy"})]}),oe.jsxs("div",{children:[oe.jsx("strong",{children:"Mine"}),oe.jsxs("div",{children:["Owned: ",t.mines]}),oe.jsxs("div",{children:["Cost: ",Math.floor(3e3*Math.pow(1.2,t.mines))]}),oe.jsx("div",{children:"Gives +8 cookies/sec"}),oe.jsx("button",{onClick:f,children:"Buy"})]}),oe.jsxs("div",{children:[oe.jsx("strong",{children:"Factory"}),oe.jsxs("div",{children:["Owned: ",t.factories]}),oe.jsxs("div",{children:["Cost: ",Math.floor(25e3*Math.pow(1.2,t.factories))]}),oe.jsx("div",{children:"Gives +50 cookies/sec"}),oe.jsx("button",{onClick:h,children:"Buy"})]})]})]}),oe.jsxs("div",{className:"cookie-footer",children:[oe.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[oe.jsx("button",{onClick:d,children:"Reset"}),oe.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[oe.jsxs("div",{children:[oe.jsx("strong",{children:"Prestige"})," — Convert total cookies into prestige points (100k = 1pt)"]}),oe.jsx("button",{onClick:x,disabled:!g(),children:g()?"Prestige (Ascend)":"Prestige (locked)"})]})]}),oe.jsx("small",{children:"Progress is saved in your browser's localStorage."})]}),oe.jsxs("div",{style:{marginTop:16},children:[oe.jsx("h3",{children:"Achievements"}),oe.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:Object.entries({"100 cookies":"100 cookies","1k cookies":"1k cookies","10k cookies":"10k cookies","100k cookies":"100k cookies"}).map(([p,u])=>oe.jsxs("div",{style:{padding:"6px 10px",borderRadius:8,background:t.achievements[p]?"rgba(97,218,251,0.12)":"rgba(255,255,255,0.02)"},children:[u," ",t.achievements[p]?"✅":"—"]},p))})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="158",nx=0,oh=1,ix=2,Wg=1,rx=2,ti=3,Vi=0,tn=1,ri=2,ki=0,ls=1,ah=2,lh=3,uh=4,sx=5,rr=100,ox=101,ax=102,ch=103,fh=104,lx=200,ux=201,cx=202,fx=203,Lc=204,bc=205,dx=206,hx=207,px=208,mx=209,gx=210,_x=211,vx=212,xx=213,yx=214,Sx=0,Mx=1,Ex=2,il=3,Tx=4,wx=5,Ax=6,Cx=7,Xg=0,Rx=1,Px=2,zi=0,Lx=1,bx=2,Dx=3,Ux=4,Nx=5,jg=300,_s=301,vs=302,Dc=303,Uc=304,wl=306,Nc=1e3,Nn=1001,Ic=1002,Wt=1003,dh=1004,su=1005,xn=1006,Ix=1007,yo=1008,Bi=1009,Fx=1010,Ox=1011,kf=1012,Yg=1013,Ri=1014,Pi=1015,So=1016,qg=1017,$g=1018,fr=1020,kx=1021,In=1023,zx=1024,Bx=1025,dr=1026,xs=1027,Hx=1028,Kg=1029,Gx=1030,Zg=1031,Qg=1033,ou=33776,au=33777,lu=33778,uu=33779,hh=35840,ph=35841,mh=35842,gh=35843,Vx=36196,_h=37492,vh=37496,xh=37808,yh=37809,Sh=37810,Mh=37811,Eh=37812,Th=37813,wh=37814,Ah=37815,Ch=37816,Rh=37817,Ph=37818,Lh=37819,bh=37820,Dh=37821,cu=36492,Uh=36494,Nh=36495,Wx=36283,Ih=36284,Fh=36285,Oh=36286,Jg=3e3,hr=3001,Xx=3200,jx=3201,e_=0,Yx=1,Sn="",Rt="srgb",hi="srgb-linear",zf="display-p3",Al="display-p3-linear",rl="linear",et="srgb",sl="rec709",ol="p3",wr=7680,kh=519,qx=512,$x=513,Kx=514,Zx=515,Qx=516,Jx=517,ey=518,ty=519,zh=35044,Bh="300 es",Fc=1035,ai=2e3,al=2001;class Er{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=Math.PI/180,Oc=180/Math.PI;function Co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function ny(t,e){return(t%e+e)%e}function du(t,e,n){return(1-n)*t+n*e}function Hh(t){return(t&t-1)===0&&t!==0}function kc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Is(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],g=i[5],x=i[8],v=r[0],p=r[3],u=r[6],m=r[1],_=r[4],y=r[7],T=r[2],R=r[5],C=r[8];return s[0]=o*v+a*m+l*T,s[3]=o*p+a*_+l*R,s[6]=o*u+a*y+l*C,s[1]=c*v+f*m+h*T,s[4]=c*p+f*_+h*R,s[7]=c*u+f*y+h*C,s[2]=d*v+g*m+x*T,s[5]=d*p+g*_+x*R,s[8]=d*u+g*y+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,g=c*s-o*l,x=n*h+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=g*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hu.makeScale(e,n)),this}rotate(e){return this.premultiply(hu.makeRotation(-e)),this}translate(e,n){return this.premultiply(hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hu=new ke;function t_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iy(){const t=ll("canvas");return t.style.display="block",t}const Gh={};function to(t){t in Gh||(Gh[t]=!0,console.warn(t))}const Vh=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zo={[hi]:{transfer:rl,primaries:sl,toReference:t=>t,fromReference:t=>t},[Rt]:{transfer:et,primaries:sl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Al]:{transfer:rl,primaries:ol,toReference:t=>t.applyMatrix3(Wh),fromReference:t=>t.applyMatrix3(Vh)},[zf]:{transfer:et,primaries:ol,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Wh),fromReference:t=>t.applyMatrix3(Vh).convertLinearToSRGB()}},ry=new Set([hi,Al]),$e={enabled:!0,_workingColorSpace:hi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ry.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zo[e].toReference,r=Zo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Zo[t].primaries},getTransfer:function(t){return t===Sn?rl:Zo[t].transfer}};function us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ar;class n_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=ll("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ar}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(us(n[i]/255)*255):n[i]=us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sy=0;class i_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Co(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mu(r[o].image)):s.push(mu(r[o]))}else s=mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?n_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oy=0;class fn extends Er{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Nn,r=Nn,s=xn,o=yo,a=In,l=Bi,c=fn.DEFAULT_ANISOTROPY,f=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Co(),this.name="",this.source=new i_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===hr?Rt:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nc:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nc:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?hr:Jg}set encoding(e){to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hr?Rt:Sn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=jg;fn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],g=l[5],x=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(g+1)/2,T=(u+1)/2,R=(f+d)/4,C=(h+v)/4,D=(x+p)/4;return _>y&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=C/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=D/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=D/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(p-x)/m,this.y=(h-v)/m,this.z=(d-f)/m,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ay extends Er{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(to("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===hr?Rt:Sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new i_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends ay{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class r_ extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ly extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],g=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=x,e[n+3]=v;return}if(h!==v||l!==d||c!==g||f!==x){let p=1-a;const u=l*d+c*g+f*x+h*v,m=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const T=Math.sqrt(_),R=Math.atan2(T,u*m);p=Math.sin(p*R)/T,a=Math.sin(a*R)/T}const y=a*m;if(l=l*p+d*y,c=c*p+g*y,f=f*p+x*y,h=h*p+v*y,p===1-a){const T=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=T,c*=T,f*=T,h*=T}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*g-c*d,e[n+1]=l*x+f*d+c*h-a*g,e[n+2]=c*x+f*g+a*d-l*h,e[n+3]=f*x-a*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*g*x,this._y=c*g*h-d*f*x,this._z=c*f*x+d*g*h,this._w=c*f*h-d*g*x;break;case"YXZ":this._x=d*f*h+c*g*x,this._y=c*g*h-d*f*x,this._z=c*f*x-d*g*h,this._w=c*f*h+d*g*x;break;case"ZXY":this._x=d*f*h-c*g*x,this._y=c*g*h+d*f*x,this._z=c*f*x+d*g*h,this._w=c*f*h-d*g*x;break;case"ZYX":this._x=d*f*h-c*g*x,this._y=c*g*h+d*f*x,this._z=c*f*x-d*g*h,this._w=c*f*h+d*g*x;break;case"YZX":this._x=d*f*h+c*g*x,this._y=c*g*h+d*f*x,this._z=c*f*x-d*g*h,this._w=c*f*h-d*g*x;break;case"XZY":this._x=d*f*h-c*g*x,this._y=c*g*h-d*f*x,this._z=c*f*x+d*g*h,this._w=c*f*h+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gu.copy(this).projectOnVector(e),this.sub(gu)}reflect(e){return this.sub(gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gu=new k,Xh=new Ro;class Po{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Jo.subVectors(this.max,Fs),Cr.subVectors(e.a,Fs),Rr.subVectors(e.b,Fs),Pr.subVectors(e.c,Fs),_i.subVectors(Rr,Cr),vi.subVectors(Pr,Rr),Ki.subVectors(Cr,Pr);let n=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Ki.z,Ki.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Ki.z,0,-Ki.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Ki.y,Ki.x,0];return!_u(n,Cr,Rr,Pr,Jo)||(n=[1,0,0,0,1,0,0,0,1],!_u(n,Cr,Rr,Pr,Jo))?!1:(ea.crossVectors(_i,vi),n=[ea.x,ea.y,ea.z],_u(n,Cr,Rr,Pr,Jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new k,new k,new k,new k,new k,new k,new k,new k],Cn=new k,Qo=new Po,Cr=new k,Rr=new k,Pr=new k,_i=new k,vi=new k,Ki=new k,Fs=new k,Jo=new k,ea=new k,Zi=new k;function _u(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zi.fromArray(t,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=n.dot(Zi),f=i.dot(Zi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const uy=new Po,Os=new k,vu=new k;class Bf{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(vu)),this.expandByPoint(Os.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new k,xu=new k,ta=new k,xi=new k,yu=new k,na=new k,Su=new k;class s_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xu.copy(e).add(n).multiplyScalar(.5),ta.copy(n).sub(e).normalize(),xi.copy(this.origin).sub(xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ta),a=xi.dot(this.direction),l=-xi.dot(ta),c=xi.lengthSq(),f=Math.abs(1-o*o);let h,d,g,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const v=1/f;h*=v,d*=v,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xu).addScaledVector(ta,d),g}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){yu.subVectors(n,e),na.subVectors(i,e),Su.crossVectors(yu,na);let o=this.direction.dot(Su),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const l=a*this.direction.dot(na.crossVectors(xi,na));if(l<0)return null;const c=a*this.direction.dot(yu.cross(xi));if(c<0||l+c>o)return null;const f=-a*xi.dot(Su);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,g,x,v,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,g,x,v,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,g,x,v,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=g,u[7]=x,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,g=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+x*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=x+g*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,x=c*f,v=c*h;n[0]=d+v*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=g*a-x,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,x=c*f,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,g=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=x*c-g,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*c,x=a*l,v=a*c;n[0]=l*f,n[4]=v-d*h,n[8]=x*h+g,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*h+x,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,g=o*c,x=a*l,v=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+v,n[5]=o*f,n[9]=g*h-x,n[2]=x*h-g,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cy,e,fy)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(i,on),yi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(i,on)),yi.normalize(),ia.crossVectors(on,yi),r[0]=yi.x,r[4]=ia.x,r[8]=on.x,r[1]=yi.y,r[5]=ia.y,r[9]=on.y,r[2]=yi.z,r[6]=ia.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],g=i[13],x=i[2],v=i[6],p=i[10],u=i[14],m=i[3],_=i[7],y=i[11],T=i[15],R=r[0],C=r[4],D=r[8],M=r[12],w=r[1],X=r[5],Z=r[9],Q=r[13],b=r[2],W=r[6],$=r[10],j=r[14],N=r[3],F=r[7],O=r[11],L=r[15];return s[0]=o*R+a*w+l*b+c*N,s[4]=o*C+a*X+l*W+c*F,s[8]=o*D+a*Z+l*$+c*O,s[12]=o*M+a*Q+l*j+c*L,s[1]=f*R+h*w+d*b+g*N,s[5]=f*C+h*X+d*W+g*F,s[9]=f*D+h*Z+d*$+g*O,s[13]=f*M+h*Q+d*j+g*L,s[2]=x*R+v*w+p*b+u*N,s[6]=x*C+v*X+p*W+u*F,s[10]=x*D+v*Z+p*$+u*O,s[14]=x*M+v*Q+p*j+u*L,s[3]=m*R+_*w+y*b+T*N,s[7]=m*C+_*X+y*W+T*F,s[11]=m*D+_*Z+y*$+T*O,s[15]=m*M+_*Q+y*j+T*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],g=e[14],x=e[3],v=e[7],p=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*g-i*l*g)+v*(+n*l*g-n*c*d+s*o*d-r*o*g+r*c*f-s*l*f)+p*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],g=e[11],x=e[12],v=e[13],p=e[14],u=e[15],m=h*p*c-v*d*c+v*l*g-a*p*g-h*l*u+a*d*u,_=x*d*c-f*p*c-x*l*g+o*p*g+f*l*u-o*d*u,y=f*v*c-x*h*c+x*a*g-o*v*g-f*a*u+o*h*u,T=x*h*l-f*v*l-x*a*d+o*v*d+f*a*p-o*h*p,R=n*m+i*_+r*y+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=m*C,e[1]=(v*d*s-h*p*s-v*r*g+i*p*g+h*r*u-i*d*u)*C,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*u+i*l*u)*C,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*g-i*l*g)*C,e[4]=_*C,e[5]=(f*p*s-x*d*s+x*r*g-n*p*g-f*r*u+n*d*u)*C,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*C,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*g+n*l*g)*C,e[8]=y*C,e[9]=(x*h*s-f*v*s-x*i*g+n*v*g+f*i*u-n*h*u)*C,e[10]=(o*v*s-x*a*s+x*i*c-n*v*c-o*i*u+n*a*u)*C,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*g-n*a*g)*C,e[12]=T*C,e[13]=(f*v*r-x*h*r+x*i*d-n*v*d-f*i*p+n*h*p)*C,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*p-n*a*p)*C,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,g=s*f,x=s*h,v=o*f,p=o*h,u=a*h,m=l*c,_=l*f,y=l*h,T=i.x,R=i.y,C=i.z;return r[0]=(1-(v+u))*T,r[1]=(g+y)*T,r[2]=(x-_)*T,r[3]=0,r[4]=(g-y)*R,r[5]=(1-(d+u))*R,r[6]=(p+m)*R,r[7]=0,r[8]=(x+_)*C,r[9]=(p-m)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Lr.set(r[0],r[1],r[2]).length();const o=Lr.set(r[4],r[5],r[6]).length(),a=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,f=1/o,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,x;if(a===ai)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===al)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,g=(i+r)*f;let x,v;if(a===ai)x=(o+s)*h,v=-2*h;else if(a===al)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lr=new k,Rn=new vt,cy=new k(0,0,0),fy=new k(1,1,1),yi=new k,ia=new k,on=new k,jh=new vt,Yh=new Ro;class Lo{constructor(e=0,n=0,i=0,r=Lo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lo.DEFAULT_ORDER="XYZ";class Hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dy=0;const qh=new k,br=new Ro,Qn=new vt,ra=new k,ks=new k,hy=new k,py=new Ro,$h=new k(1,0,0),Kh=new k(0,1,0),Zh=new k(0,0,1),my={type:"added"},gy={type:"removed"};class Lt extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new k,n=new Lo,i=new Ro,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,n){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ra.copy(e):ra.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ks,ra,this.up):Qn.lookAt(ra,ks,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Qn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(my)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new k(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new k,Jn=new k,Mu=new k,ei=new k,Dr=new k,Ur=new k,Qh=new k,Eu=new k,Tu=new k,wu=new k;let sa=!1;class Un{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),Jn.subVectors(i,n),Mu.subVectors(e,n);const o=Pn.dot(Pn),a=Pn.dot(Jn),l=Pn.dot(Mu),c=Jn.dot(Jn),f=Jn.dot(Mu),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,g=(c*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei),ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,n,i,r,s,o,a,l){return sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei),l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),Jn.subVectors(e,n),Pn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Pn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sa=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Ur.subVectors(s,i),Eu.subVectors(e,i);const l=Dr.dot(Eu),c=Ur.dot(Eu);if(l<=0&&c<=0)return n.copy(i);Tu.subVectors(e,r);const f=Dr.dot(Tu),h=Ur.dot(Tu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Dr,o);wu.subVectors(e,s);const g=Dr.dot(wu),x=Ur.dot(wu);if(x>=0&&g<=x)return n.copy(s);const v=g*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ur,a);const p=f*x-g*h;if(p<=0&&h-f>=0&&g-x>=0)return Qh.subVectors(s,r),a=(h-f)/(h-f+(g-x)),n.copy(r).addScaledVector(Qh,a);const u=1/(p+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector(Dr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=ny(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Au(o,s,e+1/3),this.g=Au(o,s,e),this.b=Au(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=Rt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rt){const i=o_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=pu(e.r),this.g=pu(e.g),this.b=pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return $e.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Kt(Ft.r*255,0,255))*65536+Math.round(Kt(Ft.g*255,0,255))*256+Math.round(Kt(Ft.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Rt){$e.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Rt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(oa);const i=du(Si.h,oa.h,n),r=du(Si.s,oa.s,n),s=du(Si.l,oa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ge;Ge.NAMES=o_;let _y=0;class bo extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=ls,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=bc,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lc&&(i.blendSrc=this.blendSrc),this.blendDst!==bc&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class a_ extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new k,aa=new je;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zh,this.updateRange={offset:0,count:-1},this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)aa.fromBufferAttribute(this,n),aa.applyMatrix3(e),this.setXY(n,aa.x,aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix3(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix4(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyNormalMatrix(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.transformDirection(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class l_ extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qn extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vy=0;const gn=new vt,Cu=new Lt,Nr=new k,an=new Po,zs=new Po,Et=new k;class Yi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?u_:l_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(an.min,zs.min),an.expandByPoint(Et),Et.addVectors(an.max,zs.max),an.expandByPoint(Et)):(an.expandByPoint(zs.min),an.expandByPoint(zs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Et.fromBufferAttribute(a,c),l&&(Nr.fromBufferAttribute(e,c),Et.add(Nr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let w=0;w<a;w++)c[w]=new k,f[w]=new k;const h=new k,d=new k,g=new k,x=new je,v=new je,p=new je,u=new k,m=new k;function _(w,X,Z){h.fromArray(r,w*3),d.fromArray(r,X*3),g.fromArray(r,Z*3),x.fromArray(o,w*2),v.fromArray(o,X*2),p.fromArray(o,Z*2),d.sub(h),g.sub(h),v.sub(x),p.sub(x);const Q=1/(v.x*p.y-p.x*v.y);isFinite(Q)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(g,-v.y).multiplyScalar(Q),m.copy(g).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(Q),c[w].add(u),c[X].add(u),c[Z].add(u),f[w].add(m),f[X].add(m),f[Z].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,X=y.length;w<X;++w){const Z=y[w],Q=Z.start,b=Z.count;for(let W=Q,$=Q+b;W<$;W+=3)_(i[W+0],i[W+1],i[W+2])}const T=new k,R=new k,C=new k,D=new k;function M(w){C.fromArray(s,w*3),D.copy(C);const X=c[w];T.copy(X),T.sub(C.multiplyScalar(C.dot(X))).normalize(),R.crossVectors(D,X);const Q=R.dot(f[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=Q}for(let w=0,X=y.length;w<X;++w){const Z=y[w],Q=Z.start,b=Z.count;for(let W=Q,$=Q+b;W<$;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,f=new k,h=new k;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Et.fromBufferAttribute(e,n),Et.normalize(),e.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let g=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*f;for(let u=0;u<f;u++)d[x++]=c[g++]}return new Yn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new vt,Qi=new s_,la=new Bf,ep=new k,Ir=new k,Fr=new k,Or=new k,Ru=new k,ua=new k,ca=new je,fa=new je,da=new je,tp=new k,np=new k,ip=new k,ha=new k,pa=new k;class Fn extends Lt{constructor(e=new Yi,n=new a_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Ru.fromBufferAttribute(h,e),o?ua.addScaledVector(Ru,f):ua.addScaledVector(Ru.sub(n),f))}n.add(ua)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(la.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(la,ep)===null||Qi.origin.distanceToSquared(ep)>(e.far-e.near)**2))&&(Jh.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],u=o[p.materialIndex],m=Math.max(p.start,g.start),_=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let y=m,T=_;y<T;y+=3){const R=a.getX(y),C=a.getX(y+1),D=a.getX(y+2);r=ma(this,u,e,i,c,f,h,R,C,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let p=x,u=v;p<u;p+=3){const m=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);r=ma(this,o,e,i,c,f,h,m,_,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],u=o[p.materialIndex],m=Math.max(p.start,g.start),_=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let y=m,T=_;y<T;y+=3){const R=y,C=y+1,D=y+2;r=ma(this,u,e,i,c,f,h,R,C,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=x,u=v;p<u;p+=3){const m=p,_=p+1,y=p+2;r=ma(this,o,e,i,c,f,h,m,_,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function xy(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;pa.copy(a),pa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pa);return c<n.near||c>n.far?null:{distance:c,point:pa.clone(),object:t}}function ma(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ir),t.getVertexPosition(l,Fr),t.getVertexPosition(c,Or);const f=xy(t,e,n,i,Ir,Fr,Or,ha);if(f){r&&(ca.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),f.uv=Un.getInterpolation(ha,Ir,Fr,Or,ca,fa,da,new je)),s&&(ca.fromBufferAttribute(s,a),fa.fromBufferAttribute(s,l),da.fromBufferAttribute(s,c),f.uv1=Un.getInterpolation(ha,Ir,Fr,Or,ca,fa,da,new je),f.uv2=f.uv1),o&&(tp.fromBufferAttribute(o,a),np.fromBufferAttribute(o,l),ip.fromBufferAttribute(o,c),f.normal=Un.getInterpolation(ha,Ir,Fr,Or,tp,np,ip,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Un.getNormal(Ir,Fr,Or,h.normal),f.face=h}return f}class Ts extends Yi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qn(c,3)),this.setAttribute("normal",new qn(f,3)),this.setAttribute("uv",new qn(h,2));function x(v,p,u,m,_,y,T,R,C,D,M){const w=y/C,X=T/D,Z=y/2,Q=T/2,b=R/2,W=C+1,$=D+1;let j=0,N=0;const F=new k;for(let O=0;O<$;O++){const L=O*X-Q;for(let I=0;I<W;I++){const ce=I*w-Z;F[v]=ce*m,F[p]=L*_,F[u]=b,c.push(F.x,F.y,F.z),F[v]=0,F[p]=0,F[u]=R>0?1:-1,f.push(F.x,F.y,F.z),h.push(I/C),h.push(1-O/D),j+=1}}for(let O=0;O<D;O++)for(let L=0;L<C;L++){const I=d+L+W*O,ce=d+L+W*(O+1),q=d+(L+1)+W*(O+1),K=d+(L+1)+W*O;l.push(I,ce,K),l.push(ce,q,K),N+=6}a.addGroup(g,N,M),g+=N,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=ys(t[n]);for(const r in i)e[r]=i[r]}return e}function yy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c_(t){return t.getRenderTarget()===null?t.outputColorSpace:$e.workingColorSpace}const Sy={clone:ys,merge:Gt};var My=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=My,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f_ extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,zr=1;class Ty extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(kr,zr,e,n);r.layers=this.layers,this.add(r);const s=new yn(kr,zr,e,n);s.layers=this.layers,this.add(s);const o=new yn(kr,zr,e,n);o.layers=this.layers,this.add(o);const a=new yn(kr,zr,e,n);a.layers=this.layers,this.add(a);const l=new yn(kr,zr,e,n);l.layers=this.layers,this.add(l);const c=new yn(kr,zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class d_ extends fn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:_s,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wy extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(to("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===hr?Rt:Sn),this.texture=new d_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ts(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:ki});s.uniforms.tEquirect.value=n;const o=new Fn(r,s),a=n.minFilter;return n.minFilter===yo&&(n.minFilter=xn),new Ty(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Pu=new k,Ay=new k,Cy=new ke;class nr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pu.subVectors(i,n).cross(Ay.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Cy.getNormalMatrix(e),r=this.coplanarPoint(Pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Bf,ga=new k;class Gf{constructor(e=new nr,n=new nr,i=new nr,r=new nr,s=new nr,o=new nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],v=r[10],p=r[11],u=r[12],m=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,p-g,y-u).normalize(),i[1].setComponents(l+s,d+c,p+g,y+u).normalize(),i[2].setComponents(l+o,d+f,p+x,y+m).normalize(),i[3].setComponents(l-o,d-f,p-x,y-m).normalize(),i[4].setComponents(l-a,d-h,p-v,y-_).normalize(),n===ai)i[5].setComponents(l+a,d+h,p+v,y+_).normalize();else if(n===al)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ga.x=r.normal.x>0?e.max.x:e.min.x,ga.y=r.normal.y>0?e.max.y:e.min.y,ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ry(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,h){const d=f.array,g=f.updateRange;t.bindBuffer(h,c),g.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,f)):h.version<c.version&&(s(h.buffer,c,f),h.version=c.version)}return{get:o,remove:a,update:l}}class Cl extends Yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,g=[],x=[],v=[],p=[];for(let u=0;u<f;u++){const m=u*d-o;for(let _=0;_<c;_++){const y=_*h-s;x.push(y,-m,0),v.push(0,0,1),p.push(_/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const _=m+c*u,y=m+c*(u+1),T=m+1+c*(u+1),R=m+1+c*u;g.push(_,y,R),g.push(y,T,R)}this.setIndex(g),this.setAttribute("position",new qn(x,3)),this.setAttribute("normal",new qn(v,3)),this.setAttribute("uv",new qn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,by=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,By=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_S=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ES=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,AS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,NM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Py,alphahash_pars_fragment:Ly,alphamap_fragment:by,alphamap_pars_fragment:Dy,alphatest_fragment:Uy,alphatest_pars_fragment:Ny,aomap_fragment:Iy,aomap_pars_fragment:Fy,begin_vertex:Oy,beginnormal_vertex:ky,bsdfs:zy,iridescence_fragment:By,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:Wy,clipping_planes_vertex:Xy,color_fragment:jy,color_pars_fragment:Yy,color_pars_vertex:qy,color_vertex:$y,common:Ky,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Qy,displacementmap_pars_vertex:Jy,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:oS,envmap_pars_fragment:aS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:yS,envmap_vertex:uS,fog_vertex:cS,fog_pars_vertex:fS,fog_fragment:dS,fog_pars_fragment:hS,gradientmap_pars_fragment:pS,lightmap_fragment:mS,lightmap_pars_fragment:gS,lights_lambert_fragment:_S,lights_lambert_pars_fragment:vS,lights_pars_begin:xS,lights_toon_fragment:SS,lights_toon_pars_fragment:MS,lights_phong_fragment:ES,lights_phong_pars_fragment:TS,lights_physical_fragment:wS,lights_physical_pars_fragment:AS,lights_fragment_begin:CS,lights_fragment_maps:RS,lights_fragment_end:PS,logdepthbuf_fragment:LS,logdepthbuf_pars_fragment:bS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:US,map_fragment:NS,map_pars_fragment:IS,map_particle_fragment:FS,map_particle_pars_fragment:OS,metalnessmap_fragment:kS,metalnessmap_pars_fragment:zS,morphcolor_vertex:BS,morphnormal_vertex:HS,morphtarget_pars_vertex:GS,morphtarget_vertex:VS,normal_fragment_begin:WS,normal_fragment_maps:XS,normal_pars_fragment:jS,normal_pars_vertex:YS,normal_vertex:qS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:QS,iridescence_pars_fragment:JS,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:uM,shadowmap_vertex:cM,shadowmask_pars_fragment:fM,skinbase_vertex:dM,skinning_pars_vertex:hM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:_M,tonemapping_fragment:vM,tonemapping_pars_fragment:xM,transmission_fragment:yM,transmission_pars_fragment:SM,uv_pars_fragment:MM,uv_pars_vertex:EM,uv_vertex:TM,worldpos_vertex:wM,background_vert:AM,background_frag:CM,backgroundCube_vert:RM,backgroundCube_frag:PM,cube_vert:LM,cube_frag:bM,depth_vert:DM,depth_frag:UM,distanceRGBA_vert:NM,distanceRGBA_frag:IM,equirect_vert:FM,equirect_frag:OM,linedashed_vert:kM,linedashed_frag:zM,meshbasic_vert:BM,meshbasic_frag:HM,meshlambert_vert:GM,meshlambert_frag:VM,meshmatcap_vert:WM,meshmatcap_frag:XM,meshnormal_vert:jM,meshnormal_frag:YM,meshphong_vert:qM,meshphong_frag:$M,meshphysical_vert:KM,meshphysical_frag:ZM,meshtoon_vert:QM,meshtoon_frag:JM,points_vert:eE,points_frag:tE,shadow_vert:nE,shadow_frag:iE,sprite_vert:rE,sprite_frag:sE},ue={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Vn={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Vn.physical={uniforms:Gt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const _a={r:0,b:0,g:0};function oE(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,f,h=null,d=0,g=null;function x(p,u){let m=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),m=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===wl)?(f===void 0&&(f=new Fn(new Ts(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:ys(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=$e.getTransfer(_.colorSpace)!==et,(h!==_||d!==_.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=_,d=_.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Fn(new Cl(2,2),new yr({name:"BackgroundMaterial",uniforms:ys(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=$e.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(_a,c_(t)),i.buffers.color.setClear(_a.r,_a.g,_a.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function aE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function h(b,W,$,j,N){let F=!1;if(o){const O=v(j,$,W);c!==O&&(c=O,g(c.object)),F=u(b,j,$,N),F&&m(b,j,$,N)}else{const O=W.wireframe===!0;(c.geometry!==j.id||c.program!==$.id||c.wireframe!==O)&&(c.geometry=j.id,c.program=$.id,c.wireframe=O,F=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,D(b,W,$,j),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(b){return i.isWebGL2?t.bindVertexArray(b):s.bindVertexArrayOES(b)}function x(b){return i.isWebGL2?t.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function v(b,W,$){const j=$.wireframe===!0;let N=a[b.id];N===void 0&&(N={},a[b.id]=N);let F=N[W.id];F===void 0&&(F={},N[W.id]=F);let O=F[j];return O===void 0&&(O=p(d()),F[j]=O),O}function p(b){const W=[],$=[],j=[];for(let N=0;N<r;N++)W[N]=0,$[N]=0,j[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:j,object:b,attributes:{},index:null}}function u(b,W,$,j){const N=c.attributes,F=W.attributes;let O=0;const L=$.getAttributes();for(const I in L)if(L[I].location>=0){const q=N[I];let K=F[I];if(K===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),q===void 0||q.attribute!==K||K&&q.data!==K.data)return!0;O++}return c.attributesNum!==O||c.index!==j}function m(b,W,$,j){const N={},F=W.attributes;let O=0;const L=$.getAttributes();for(const I in L)if(L[I].location>=0){let q=F[I];q===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(q=b.instanceColor));const K={};K.attribute=q,q&&q.data&&(K.data=q.data),N[I]=K,O++}c.attributes=N,c.attributesNum=O,c.index=j}function _(){const b=c.newAttributes;for(let W=0,$=b.length;W<$;W++)b[W]=0}function y(b){T(b,0)}function T(b,W){const $=c.newAttributes,j=c.enabledAttributes,N=c.attributeDivisors;$[b]=1,j[b]===0&&(t.enableVertexAttribArray(b),j[b]=1),N[b]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,W),N[b]=W)}function R(){const b=c.newAttributes,W=c.enabledAttributes;for(let $=0,j=W.length;$<j;$++)W[$]!==b[$]&&(t.disableVertexAttribArray($),W[$]=0)}function C(b,W,$,j,N,F,O){O===!0?t.vertexAttribIPointer(b,W,$,N,F):t.vertexAttribPointer(b,W,$,j,N,F)}function D(b,W,$,j){if(i.isWebGL2===!1&&(b.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const N=j.attributes,F=$.getAttributes(),O=W.defaultAttributeValues;for(const L in F){const I=F[L];if(I.location>=0){let ce=N[L];if(ce===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const q=ce.normalized,K=ce.itemSize,te=n.get(ce);if(te===void 0)continue;const ge=te.buffer,_e=te.type,Pe=te.bytesPerElement,ot=i.isWebGL2===!0&&(_e===t.INT||_e===t.UNSIGNED_INT||ce.gpuType===Yg);if(ce.isInterleavedBufferAttribute){const Ie=ce.data,z=Ie.stride,nn=ce.offset;if(Ie.isInstancedInterleavedBuffer){for(let ye=0;ye<I.locationSize;ye++)T(I.location+ye,Ie.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let ye=0;ye<I.locationSize;ye++)y(I.location+ye);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let ye=0;ye<I.locationSize;ye++)C(I.location+ye,K/I.locationSize,_e,q,z*Pe,(nn+K/I.locationSize*ye)*Pe,ot)}else{if(ce.isInstancedBufferAttribute){for(let Ie=0;Ie<I.locationSize;Ie++)T(I.location+Ie,ce.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<I.locationSize;Ie++)y(I.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let Ie=0;Ie<I.locationSize;Ie++)C(I.location+Ie,K/I.locationSize,_e,q,K*Pe,K/I.locationSize*Ie*Pe,ot)}}else if(O!==void 0){const q=O[L];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(I.location,q);break;case 3:t.vertexAttrib3fv(I.location,q);break;case 4:t.vertexAttrib4fv(I.location,q);break;default:t.vertexAttrib1fv(I.location,q)}}}}R()}function M(){Z();for(const b in a){const W=a[b];for(const $ in W){const j=W[$];for(const N in j)x(j[N].object),delete j[N];delete W[$]}delete a[b]}}function w(b){if(a[b.id]===void 0)return;const W=a[b.id];for(const $ in W){const j=W[$];for(const N in j)x(j[N].object),delete j[N];delete W[$]}delete a[b.id]}function X(b){for(const W in a){const $=a[W];if($[b.id]===void 0)continue;const j=$[b.id];for(const N in j)x(j[N].object),delete j[N];delete $[b.id]}}function Z(){Q(),f=!0,c!==l&&(c=l,g(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:X,initAttributes:_,enableAttribute:y,disableUnusedAttributes:R}}function lE(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,h){if(h===0)return;let d,g;if(r)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,c,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function uE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),T=_&&y,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:R}}function cE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new nr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):c();else{const m=s?0:i,_=m*4;let y=u.clippingState||null;l.value=y,y=f(x,d,_,g);for(let T=0;T!==_;++T)y[T]=n[T];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const u=g+v*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,y=g;_!==v;++_,y+=4)o.copy(h[_]).applyMatrix4(m,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function fE(t){let e=new WeakMap;function n(o,a){return a===Dc?o.mapping=_s:a===Uc&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Dc||a===Uc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wy(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class p_ extends f_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=4,rp=[.125,.215,.35,.446,.526,.582],sr=20,Lu=new p_,sp=new Ge;let bu=null,Du=0,Uu=0;const ir=(1+Math.sqrt(5))/2,Br=1/ir,op=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,ir,Br),new k(0,ir,-Br),new k(Br,0,ir),new k(-Br,0,ir),new k(ir,Br,0),new k(-ir,Br,0)];class ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Du,Uu),e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:So,format:In,colorSpace:hi,depthBuffer:!1},r=lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dE(s)),this._blurMaterial=hE(s,e,n)}return r}_compileMaterial(e){const n=new Fn(this._lodPlanes[0],e);this._renderer.compile(n,Lu)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(sp),f.toneMapping=zi,f.autoClear=!1;const g=new a_({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new Fn(new Ts,g);let v=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,v=!0):(g.color.copy(sp),v=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;va(r,m*_,u>2?_:0,_,_),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_s||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;va(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=op[(r-1)%op.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Fn(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*sr-1),v=s/x,p=isFinite(s)?1+Math.floor(f*v):sr;p>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const u=[];let m=0;for(let C=0;C<sr;++C){const D=C/v,M=Math.exp(-D*D/2);u.push(M),C===0?m+=M:C<p&&(m+=2*M)}for(let C=0;C<u.length;C++)u[C]=u[C]/m;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const y=this._sizeLods[r],T=3*y*(r>_-ts?r-_+ts:0),R=4*(this._cubeSize-y);va(n,T,R,3*y,2*y),l.setRenderTarget(n),l.render(h,Lu)}}function dE(t){const e=[],n=[],i=[];let r=t;const s=t-ts+1+rp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ts?l=rp[o-t+ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,x=6,v=3,p=2,u=1,m=new Float32Array(v*x*g),_=new Float32Array(p*x*g),y=new Float32Array(u*x*g);for(let R=0;R<g;R++){const C=R%3*2/3-1,D=R>2?0:-1,M=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];m.set(M,v*x*R),_.set(d,p*x*R);const w=[R,R,R,R,R,R];y.set(w,u*x*R)}const T=new Yi;T.setAttribute("position",new Yn(m,v)),T.setAttribute("uv",new Yn(_,p)),T.setAttribute("faceIndex",new Yn(y,u)),e.push(T),r>ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lp(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hE(t,e,n){const i=new Float32Array(sr),r=new k(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function up(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function cp(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dc||l===Uc,f=l===_s||l===vs;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new ap(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new ap(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function mE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const x in g){const v=g[x];for(let p=0,u=v.length;p<u;p++)e.update(v[p],t.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,x=h.attributes.position;let v=0;if(g!==null){const m=g.array;v=g.version;for(let _=0,y=m.length;_<y;_+=3){const T=m[_+0],R=m[_+1],C=m[_+2];d.push(T,R,R,C,C,T)}}else if(x!==void 0){const m=x.array;v=x.version;for(let _=0,y=m.length/3-1;_<y;_+=3){const T=_+0,R=_+1,C=_+2;d.push(T,R,R,C,C,T)}}else return;const p=new(t_(d)?u_:l_)(d,1);p.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function _E(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function f(d,g){t.drawElements(s,g,a,d*l),n.update(g,s,1)}function h(d,g,x){if(x===0)return;let v,p;if(r)v=t,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,g,a,d*l,x),n.update(g,s,x)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h}function vE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xE(t,e){return t[0]-e[0]}function yE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function SE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let W=function(){Q.dispose(),s.delete(f),f.removeEventListener("dispose",W)};var g=W;p!==void 0&&p.texture.dispose();const _=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),T===!0&&(M=3);let w=f.attributes.position.count*M,X=1;w>e.maxTextureSize&&(X=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Z=new Float32Array(w*X*4*v),Q=new r_(Z,w,X,v);Q.type=Pi,Q.needsUpdate=!0;const b=M*4;for(let $=0;$<v;$++){const j=R[$],N=C[$],F=D[$],O=w*X*4*$;for(let L=0;L<j.count;L++){const I=L*b;_===!0&&(o.fromBufferAttribute(j,L),Z[O+I+0]=o.x,Z[O+I+1]=o.y,Z[O+I+2]=o.z,Z[O+I+3]=0),y===!0&&(o.fromBufferAttribute(N,L),Z[O+I+4]=o.x,Z[O+I+5]=o.y,Z[O+I+6]=o.z,Z[O+I+7]=0),T===!0&&(o.fromBufferAttribute(F,L),Z[O+I+8]=o.x,Z[O+I+9]=o.y,Z[O+I+10]=o.z,Z[O+I+11]=F.itemSize===4?o.w:1)}}p={count:v,texture:Q,size:new je(w,X)},s.set(f,p),f.addEventListener("dispose",W)}let u=0;for(let _=0;_<d.length;_++)u+=d[_];const m=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let y=0;y<x;y++)v[y]=[y,0];i[f.id]=v}for(let y=0;y<x;y++){const T=v[y];T[0]=y,T[1]=d[y]}v.sort(yE);for(let y=0;y<8;y++)y<x&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(xE);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const T=a[y],R=T[0],C=T[1];R!==Number.MAX_SAFE_INTEGER&&C?(p&&f.getAttribute("morphTarget"+y)!==p[R]&&f.setAttribute("morphTarget"+y,p[R]),u&&f.getAttribute("morphNormal"+y)!==u[R]&&f.setAttribute("morphNormal"+y,u[R]),r[y]=C,m+=C):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),u&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const _=f.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function ME(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const m_=new fn,g_=new r_,__=new ly,v_=new d_,fp=[],dp=[],hp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=fp[r];if(s===void 0&&(s=new Float32Array(r),fp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=dp[e];n===void 0&&(n=new Int32Array(e),dp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function EE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2fv(this.addr,e),yt(n,e)}}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xt(n,e))return;t.uniform3fv(this.addr,e),yt(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4fv(this.addr,e),yt(n,e)}}function CE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yt(n,e)}else{if(xt(n,i))return;mp.set(i),t.uniformMatrix2fv(this.addr,!1,mp),yt(n,i)}}function RE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yt(n,e)}else{if(xt(n,i))return;pp.set(i),t.uniformMatrix3fv(this.addr,!1,pp),yt(n,i)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yt(n,e)}else{if(xt(n,i))return;hp.set(i),t.uniformMatrix4fv(this.addr,!1,hp),yt(n,i)}}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2iv(this.addr,e),yt(n,e)}}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3iv(this.addr,e),yt(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4iv(this.addr,e),yt(n,e)}}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2uiv(this.addr,e),yt(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3uiv(this.addr,e),yt(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4uiv(this.addr,e),yt(n,e)}}function kE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||m_,r)}function zE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||__,r)}function BE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v_,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||g_,r)}function GE(t){switch(t){case 5126:return EE;case 35664:return TE;case 35665:return wE;case 35666:return AE;case 35674:return CE;case 35675:return RE;case 35676:return PE;case 5124:case 35670:return LE;case 35667:case 35671:return bE;case 35668:case 35672:return DE;case 35669:case 35673:return UE;case 5125:return NE;case 36294:return IE;case 36295:return FE;case 36296:return OE;case 35678:case 36198:case 36298:case 36306:case 35682:return kE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return BE;case 36289:case 36303:case 36311:case 36292:return HE}}function VE(t,e){t.uniform1fv(this.addr,e)}function WE(t,e){const n=ws(e,this.size,2);t.uniform2fv(this.addr,n)}function XE(t,e){const n=ws(e,this.size,3);t.uniform3fv(this.addr,n)}function jE(t,e){const n=ws(e,this.size,4);t.uniform4fv(this.addr,n)}function YE(t,e){const n=ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qE(t,e){const n=ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $E(t,e){const n=ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function KE(t,e){t.uniform1iv(this.addr,e)}function ZE(t,e){t.uniform2iv(this.addr,e)}function QE(t,e){t.uniform3iv(this.addr,e)}function JE(t,e){t.uniform4iv(this.addr,e)}function eT(t,e){t.uniform1uiv(this.addr,e)}function tT(t,e){t.uniform2uiv(this.addr,e)}function nT(t,e){t.uniform3uiv(this.addr,e)}function iT(t,e){t.uniform4uiv(this.addr,e)}function rT(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||m_,s[o])}function sT(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||__,s[o])}function oT(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||v_,s[o])}function aT(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);xt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||g_,s[o])}function lT(t){switch(t){case 5126:return VE;case 35664:return WE;case 35665:return XE;case 35666:return jE;case 35674:return YE;case 35675:return qE;case 35676:return $E;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}class uT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=GE(n.type)}}class cT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=lT(n.type)}}class fT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nu=/(\w+)(\])?(\[|\.)?/g;function gp(t,e){t.seq.push(e),t.map[e.id]=e}function dT(t,e,n){const i=t.name,r=i.length;for(Nu.lastIndex=0;;){const s=Nu.exec(i),o=Nu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){gp(n,c===void 0?new uT(a,t,e):new cT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new fT(a),gp(n,h)),n=h}}}class Da{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);dT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function _p(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hT=37297;let pT=0;function mT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function gT(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===ol&&n===sl?i="LinearDisplayP3ToLinearSRGB":e===sl&&n===ol&&(i="LinearSRGBToLinearDisplayP3"),t){case hi:case Al:return[i,"LinearTransferOETF"];case Rt:case zf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function vp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+mT(t.getShaderSource(e),o)}else return r}function _T(t,e){const n=gT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function vT(t,e){let n;switch(e){case Lx:n="Linear";break;case bx:n="Reinhard";break;case Dx:n="OptimizedCineon";break;case Ux:n="ACESFilmic";break;case Nx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function yT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ST(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ws(t){return t!==""}function xp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(t){return t.replace(MT,TT)}const ET=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function TT(t,e){let n=Ue[e];if(n===void 0){const i=ET.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zc(n)}const wT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(t){return t.replace(wT,AT)}function AT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===rx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function RT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function LT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xg:e="ENVMAP_BLENDING_MULTIPLY";break;case Rx:e="ENVMAP_BLENDING_MIX";break;case Px:e="ENVMAP_BLENDING_ADD";break}return e}function bT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function DT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=CT(n),c=RT(n),f=PT(n),h=LT(n),d=bT(n),g=n.isWebGL2?"":xT(n),x=yT(s),v=r.createProgram();let p,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ws).join(`
`),p.length>0&&(p+=`
`),u=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ws).join(`
`),u.length>0&&(u+=`
`)):(p=[Mp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),u=[g,Mp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==zi?vT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,_T("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),o=zc(o),o=xp(o,n),o=yp(o,n),a=zc(a),a=xp(a,n),a=yp(a,n),o=Sp(o),a=Sp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=m+p+o,y=m+u+a,T=_p(r,r.VERTEX_SHADER,_),R=_p(r,r.FRAGMENT_SHADER,y);r.attachShader(v,T),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(X){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(v).trim(),Q=r.getShaderInfoLog(T).trim(),b=r.getShaderInfoLog(R).trim();let W=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,R);else{const j=vp(r,T,"vertex"),N=vp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+j+`
`+N)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Q===""||b==="")&&($=!1);$&&(X.diagnostics={runnable:W,programLog:Z,vertexShader:{log:Q,prefix:p},fragmentShader:{log:b,prefix:u}})}r.deleteShader(T),r.deleteShader(R),D=new Da(r,v),M=ST(r,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(v,hT)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=R,this}let UT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IT(e),n.set(e,i)),i}}class IT{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}}function FT(t,e,n,i,r,s,o){const a=new Hf,l=new NT,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,w,X,Z,Q){const b=Z.fog,W=Q.geometry,$=M.isMeshStandardMaterial?Z.environment:null,j=(M.isMeshStandardMaterial?n:e).get(M.envMap||$),N=j&&j.mapping===wl?j.image.height:null,F=x[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const O=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,L=O!==void 0?O.length:0;let I=0;W.morphAttributes.position!==void 0&&(I=1),W.morphAttributes.normal!==void 0&&(I=2),W.morphAttributes.color!==void 0&&(I=3);let ce,q,K,te;if(F){const dt=Vn[F];ce=dt.vertexShader,q=dt.fragmentShader}else ce=M.vertexShader,q=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);const ge=t.getRenderTarget(),_e=Q.isInstancedMesh===!0,Pe=!!M.map,ot=!!M.matcap,Ie=!!j,z=!!M.aoMap,nn=!!M.lightMap,ye=!!M.bumpMap,Re=!!M.normalMap,Ce=!!M.displacementMap,at=!!M.emissiveMap,Fe=!!M.metalnessMap,Oe=!!M.roughnessMap,Ke=M.anisotropy>0,St=M.clearcoat>0,Dt=M.iridescence>0,A=M.sheen>0,S=M.transmission>0,B=Ke&&!!M.anisotropyMap,ie=St&&!!M.clearcoatMap,ee=St&&!!M.clearcoatNormalMap,re=St&&!!M.clearcoatRoughnessMap,ve=Dt&&!!M.iridescenceMap,le=Dt&&!!M.iridescenceThicknessMap,de=A&&!!M.sheenColorMap,Te=A&&!!M.sheenRoughnessMap,We=!!M.specularMap,ne=!!M.specularColorMap,qe=!!M.specularIntensityMap,Le=S&&!!M.transmissionMap,we=S&&!!M.thicknessMap,Se=!!M.gradientMap,me=!!M.alphaMap,He=M.alphaTest>0,P=!!M.alphaHash,fe=!!M.extensions,se=!!W.attributes.uv1,Y=!!W.attributes.uv2,ae=!!W.attributes.uv3;let Me=zi;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Me=t.toneMapping),{isWebGL2:f,shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:q,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:_e,instancingColor:_e&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:hi,map:Pe,matcap:ot,envMap:Ie,envMapMode:Ie&&j.mapping,envMapCubeUVHeight:N,aoMap:z,lightMap:nn,bumpMap:ye,normalMap:Re,displacementMap:d&&Ce,emissiveMap:at,normalMapObjectSpace:Re&&M.normalMapType===Yx,normalMapTangentSpace:Re&&M.normalMapType===e_,metalnessMap:Fe,roughnessMap:Oe,anisotropy:Ke,anisotropyMap:B,clearcoat:St,clearcoatMap:ie,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,iridescence:Dt,iridescenceMap:ve,iridescenceThicknessMap:le,sheen:A,sheenColorMap:de,sheenRoughnessMap:Te,specularMap:We,specularColorMap:ne,specularIntensityMap:qe,transmission:S,transmissionMap:Le,thicknessMap:we,gradientMap:Se,opaque:M.transparent===!1&&M.blending===ls,alphaMap:me,alphaTest:He,alphaHash:P,combine:M.combine,mapUv:Pe&&v(M.map.channel),aoMapUv:z&&v(M.aoMap.channel),lightMapUv:nn&&v(M.lightMap.channel),bumpMapUv:ye&&v(M.bumpMap.channel),normalMapUv:Re&&v(M.normalMap.channel),displacementMapUv:Ce&&v(M.displacementMap.channel),emissiveMapUv:at&&v(M.emissiveMap.channel),metalnessMapUv:Fe&&v(M.metalnessMap.channel),roughnessMapUv:Oe&&v(M.roughnessMap.channel),anisotropyMapUv:B&&v(M.anisotropyMap.channel),clearcoatMapUv:ie&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(M.sheenRoughnessMap.channel),specularMapUv:We&&v(M.specularMap.channel),specularColorMapUv:ne&&v(M.specularColorMap.channel),specularIntensityMapUv:qe&&v(M.specularIntensityMap.channel),transmissionMapUv:Le&&v(M.transmissionMap.channel),thicknessMapUv:we&&v(M.thicknessMap.channel),alphaMapUv:me&&v(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Re||Ke),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:Y,vertexUv3s:ae,pointsUvs:Q.isPoints===!0&&!!W.attributes.uv&&(Pe||me),fog:!!b,useFog:M.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:I,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:Me,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ri,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:fe&&M.extensions.derivatives===!0,extensionFragDepth:fe&&M.extensions.fragDepth===!0,extensionDrawBuffers:fe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)w.push(X),w.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(m(w,M),_(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const w=x[M.type];let X;if(w){const Z=Vn[w];X=Sy.clone(Z.uniforms)}else X=M.uniforms;return X}function T(M,w){let X;for(let Z=0,Q=c.length;Z<Q;Z++){const b=c[Z];if(b.cacheKey===w){X=b,++X.usedTimes;break}}return X===void 0&&(X=new DT(t,w,M,s),c.push(X)),X}function R(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:T,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:D}}function OT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function kT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ep(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,g,x,v,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:g,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=g,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=v,u.group=p),e++,u}function a(h,d,g,x,v,p){const u=o(h,d,g,x,v,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,d,g,x,v,p){const u=o(h,d,g,x,v,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||kT),i.length>1&&i.sort(d||Ep),r.length>1&&r.sort(d||Ep)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function zT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Tp,t.set(i,[o])):r>=s.length?(o=new Tp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function BT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ge};break;case"SpotLight":n={position:new k,direction:new k,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function HT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GT=0;function VT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WT(t,e){const n=new BT,i=HT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new k);const s=new k,o=new vt,a=new vt;function l(f,h){let d=0,g=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let v=0,p=0,u=0,m=0,_=0,y=0,T=0,R=0,C=0,D=0,M=0;f.sort(VT);const w=h===!0?Math.PI:1;for(let Z=0,Q=f.length;Z<Q;Z++){const b=f[Z],W=b.color,$=b.intensity,j=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=W.r*$*w,g+=W.g*$*w,x+=W.b*$*w;else if(b.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(b.sh.coefficients[F],$);M++}else if(b.isDirectionalLight){const F=n.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity*w),b.castShadow){const O=b.shadow,L=i.get(b);L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,r.directionalShadow[v]=L,r.directionalShadowMap[v]=N,r.directionalShadowMatrix[v]=b.shadow.matrix,y++}r.directional[v]=F,v++}else if(b.isSpotLight){const F=n.get(b);F.position.setFromMatrixPosition(b.matrixWorld),F.color.copy(W).multiplyScalar($*w),F.distance=j,F.coneCos=Math.cos(b.angle),F.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),F.decay=b.decay,r.spot[u]=F;const O=b.shadow;if(b.map&&(r.spotLightMap[C]=b.map,C++,O.updateMatrices(b),b.castShadow&&D++),r.spotLightMatrix[u]=O.matrix,b.castShadow){const L=i.get(b);L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,r.spotShadow[u]=L,r.spotShadowMap[u]=N,R++}u++}else if(b.isRectAreaLight){const F=n.get(b);F.color.copy(W).multiplyScalar($),F.halfWidth.set(b.width*.5,0,0),F.halfHeight.set(0,b.height*.5,0),r.rectArea[m]=F,m++}else if(b.isPointLight){const F=n.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity*w),F.distance=b.distance,F.decay=b.decay,b.castShadow){const O=b.shadow,L=i.get(b);L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,r.pointShadow[p]=L,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=b.shadow.matrix,T++}r.point[p]=F,p++}else if(b.isHemisphereLight){const F=n.get(b);F.skyColor.copy(b.color).multiplyScalar($*w),F.groundColor.copy(b.groundColor).multiplyScalar($*w),r.hemi[_]=F,_++}}m>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==v||X.pointLength!==p||X.spotLength!==u||X.rectAreaLength!==m||X.hemiLength!==_||X.numDirectionalShadows!==y||X.numPointShadows!==T||X.numSpotShadows!==R||X.numSpotMaps!==C||X.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=m,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+C-D,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,X.directionalLength=v,X.pointLength=p,X.spotLength=u,X.rectAreaLength=m,X.hemiLength=_,X.numDirectionalShadows=y,X.numPointShadows=T,X.numSpotShadows=R,X.numSpotMaps=C,X.numLightProbes=M,r.version=GT++)}function c(f,h){let d=0,g=0,x=0,v=0,p=0;const u=h.matrixWorldInverse;for(let m=0,_=f.length;m<_;m++){const y=f[m];if(y.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),d++}else if(y.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(u),g++}else if(y.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function wp(t,e){const n=new WT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function XT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new wp(t,e),n.set(s,[l])):o>=a.length?(l=new wp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class jT extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YT extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$T=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KT(t,e,n){let i=new Gf;const r=new je,s=new je,o=new wt,a=new jT({depthPacking:jx}),l=new YT,c={},f=n.maxTextureSize,h={[Vi]:tn,[tn]:Vi,[ri]:ri},d=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:qT,fragmentShader:$T}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Yi;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wg;let u=this.type;this.render=function(T,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const D=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),X=t.state;X.setBlending(ki),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Z=u!==ti&&this.type===ti,Q=u===ti&&this.type!==ti;for(let b=0,W=T.length;b<W;b++){const $=T[b],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const N=j.getFrameExtents();if(r.multiply(N),s.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,j.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,j.mapSize.y=s.y)),j.map===null||Z===!0||Q===!0){const O=this.type!==ti?{minFilter:Wt,magFilter:Wt}:{};j.map!==null&&j.map.dispose(),j.map=new xr(r.x,r.y,O),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const F=j.getViewportCount();for(let O=0;O<F;O++){const L=j.getViewport(O);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),X.viewport(o),j.updateMatrices($,O),i=j.getFrustum(),y(R,C,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===ti&&m(j,C),j.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(D,M,w)};function m(T,R){const C=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,C,d,v,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,C,g,v,null)}function _(T,R,C,D){let M=null;const w=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=M.uuid,Z=R.uuid;let Q=c[X];Q===void 0&&(Q={},c[X]=Q);let b=Q[Z];b===void 0&&(b=M.clone(),Q[Z]=b),M=b}if(M.visible=R.visible,M.wireframe=R.wireframe,D===ti?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=t.properties.get(M);X.light=C}return M}function y(T,R,C,D,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const Z=e.update(T),Q=T.material;if(Array.isArray(Q)){const b=Z.groups;for(let W=0,$=b.length;W<$;W++){const j=b[W],N=Q[j.materialIndex];if(N&&N.visible){const F=_(T,N,D,M);t.renderBufferDirect(C,null,Z,F,T,j)}}}else if(Q.visible){const b=_(T,Q,D,M);t.renderBufferDirect(C,null,Z,b,T,null)}}const X=T.children;for(let Z=0,Q=X.length;Z<Q;Z++)y(X[Z],R,C,D,M)}}function ZT(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const fe=new wt;let se=null;const Y=new wt(0,0,0,0);return{setMask:function(ae){se!==ae&&!P&&(t.colorMask(ae,ae,ae,ae),se=ae)},setLocked:function(ae){P=ae},setClear:function(ae,Me,Xe,dt,mn){mn===!0&&(ae*=dt,Me*=dt,Xe*=dt),fe.set(ae,Me,Xe,dt),Y.equals(fe)===!1&&(t.clearColor(ae,Me,Xe,dt),Y.copy(fe))},reset:function(){P=!1,se=null,Y.set(-1,0,0,0)}}}function s(){let P=!1,fe=null,se=null,Y=null;return{setTest:function(ae){ae?Pe(t.DEPTH_TEST):ot(t.DEPTH_TEST)},setMask:function(ae){fe!==ae&&!P&&(t.depthMask(ae),fe=ae)},setFunc:function(ae){if(se!==ae){switch(ae){case Sx:t.depthFunc(t.NEVER);break;case Mx:t.depthFunc(t.ALWAYS);break;case Ex:t.depthFunc(t.LESS);break;case il:t.depthFunc(t.LEQUAL);break;case Tx:t.depthFunc(t.EQUAL);break;case wx:t.depthFunc(t.GEQUAL);break;case Ax:t.depthFunc(t.GREATER);break;case Cx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=ae}},setLocked:function(ae){P=ae},setClear:function(ae){Y!==ae&&(t.clearDepth(ae),Y=ae)},reset:function(){P=!1,fe=null,se=null,Y=null}}}function o(){let P=!1,fe=null,se=null,Y=null,ae=null,Me=null,Xe=null,dt=null,mn=null;return{setTest:function(Ze){P||(Ze?Pe(t.STENCIL_TEST):ot(t.STENCIL_TEST))},setMask:function(Ze){fe!==Ze&&!P&&(t.stencilMask(Ze),fe=Ze)},setFunc:function(Ze,Bt,Bn){(se!==Ze||Y!==Bt||ae!==Bn)&&(t.stencilFunc(Ze,Bt,Bn),se=Ze,Y=Bt,ae=Bn)},setOp:function(Ze,Bt,Bn){(Me!==Ze||Xe!==Bt||dt!==Bn)&&(t.stencilOp(Ze,Bt,Bn),Me=Ze,Xe=Bt,dt=Bn)},setLocked:function(Ze){P=Ze},setClear:function(Ze){mn!==Ze&&(t.clearStencil(Ze),mn=Ze)},reset:function(){P=!1,fe=null,se=null,Y=null,ae=null,Me=null,Xe=null,dt=null,mn=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let d={},g={},x=new WeakMap,v=[],p=null,u=!1,m=null,_=null,y=null,T=null,R=null,C=null,D=null,M=new Ge(0,0,0),w=0,X=!1,Z=null,Q=null,b=null,W=null,$=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=F>=2);let L=null,I={};const ce=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),K=new wt().fromArray(ce),te=new wt().fromArray(q);function ge(P,fe,se,Y){const ae=new Uint8Array(4),Me=t.createTexture();t.bindTexture(P,Me),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<se;Xe++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(fe+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Me}const _e={};_e[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(t.DEPTH_TEST),l.setFunc(il),Fe(!1),Oe(oh),Pe(t.CULL_FACE),Ce(ki);function Pe(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function ot(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Ie(P,fe){return g[P]!==fe?(t.bindFramebuffer(P,fe),g[P]=fe,i&&(P===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=fe),P===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function z(P,fe){let se=v,Y=!1;if(P)if(se=x.get(fe),se===void 0&&(se=[],x.set(fe,se)),P.isWebGLMultipleRenderTargets){const ae=P.texture;if(se.length!==ae.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,Xe=ae.length;Me<Xe;Me++)se[Me]=t.COLOR_ATTACHMENT0+Me;se.length=ae.length,Y=!0}}else se[0]!==t.COLOR_ATTACHMENT0&&(se[0]=t.COLOR_ATTACHMENT0,Y=!0);else se[0]!==t.BACK&&(se[0]=t.BACK,Y=!0);Y&&(n.isWebGL2?t.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function nn(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const ye={[rr]:t.FUNC_ADD,[ox]:t.FUNC_SUBTRACT,[ax]:t.FUNC_REVERSE_SUBTRACT};if(i)ye[ch]=t.MIN,ye[fh]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[ch]=P.MIN_EXT,ye[fh]=P.MAX_EXT)}const Re={[lx]:t.ZERO,[ux]:t.ONE,[cx]:t.SRC_COLOR,[Lc]:t.SRC_ALPHA,[gx]:t.SRC_ALPHA_SATURATE,[px]:t.DST_COLOR,[dx]:t.DST_ALPHA,[fx]:t.ONE_MINUS_SRC_COLOR,[bc]:t.ONE_MINUS_SRC_ALPHA,[mx]:t.ONE_MINUS_DST_COLOR,[hx]:t.ONE_MINUS_DST_ALPHA,[_x]:t.CONSTANT_COLOR,[vx]:t.ONE_MINUS_CONSTANT_COLOR,[xx]:t.CONSTANT_ALPHA,[yx]:t.ONE_MINUS_CONSTANT_ALPHA};function Ce(P,fe,se,Y,ae,Me,Xe,dt,mn,Ze){if(P===ki){u===!0&&(ot(t.BLEND),u=!1);return}if(u===!1&&(Pe(t.BLEND),u=!0),P!==sx){if(P!==m||Ze!==X){if((_!==rr||R!==rr)&&(t.blendEquation(t.FUNC_ADD),_=rr,R=rr),Ze)switch(P){case ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ah:t.blendFunc(t.ONE,t.ONE);break;case lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ah:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,T=null,C=null,D=null,M.set(0,0,0),w=0,m=P,X=Ze}return}ae=ae||fe,Me=Me||se,Xe=Xe||Y,(fe!==_||ae!==R)&&(t.blendEquationSeparate(ye[fe],ye[ae]),_=fe,R=ae),(se!==y||Y!==T||Me!==C||Xe!==D)&&(t.blendFuncSeparate(Re[se],Re[Y],Re[Me],Re[Xe]),y=se,T=Y,C=Me,D=Xe),(dt.equals(M)===!1||mn!==w)&&(t.blendColor(dt.r,dt.g,dt.b,mn),M.copy(dt),w=mn),m=P,X=!1}function at(P,fe){P.side===ri?ot(t.CULL_FACE):Pe(t.CULL_FACE);let se=P.side===tn;fe&&(se=!se),Fe(se),P.blending===ls&&P.transparent===!1?Ce(ki):Ce(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Y=P.stencilWrite;c.setTest(Y),Y&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),St(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pe(t.SAMPLE_ALPHA_TO_COVERAGE):ot(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){Z!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),Z=P)}function Oe(P){P!==nx?(Pe(t.CULL_FACE),P!==Q&&(P===oh?t.cullFace(t.BACK):P===ix?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ot(t.CULL_FACE),Q=P}function Ke(P){P!==b&&(N&&t.lineWidth(P),b=P)}function St(P,fe,se){P?(Pe(t.POLYGON_OFFSET_FILL),(W!==fe||$!==se)&&(t.polygonOffset(fe,se),W=fe,$=se)):ot(t.POLYGON_OFFSET_FILL)}function Dt(P){P?Pe(t.SCISSOR_TEST):ot(t.SCISSOR_TEST)}function A(P){P===void 0&&(P=t.TEXTURE0+j-1),L!==P&&(t.activeTexture(P),L=P)}function S(P,fe,se){se===void 0&&(L===null?se=t.TEXTURE0+j-1:se=L);let Y=I[se];Y===void 0&&(Y={type:void 0,texture:void 0},I[se]=Y),(Y.type!==P||Y.texture!==fe)&&(L!==se&&(t.activeTexture(se),L=se),t.bindTexture(P,fe||_e[P]),Y.type=P,Y.texture=fe)}function B(){const P=I[L];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(P){K.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function we(P){te.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function Se(P,fe){let se=h.get(fe);se===void 0&&(se=new WeakMap,h.set(fe,se));let Y=se.get(P);Y===void 0&&(Y=t.getUniformBlockIndex(fe,P.name),se.set(P,Y))}function me(P,fe){const Y=h.get(fe).get(P);f.get(fe)!==Y&&(t.uniformBlockBinding(fe,Y,P.__bindingPointIndex),f.set(fe,Y))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},L=null,I={},g={},x=new WeakMap,v=[],p=null,u=!1,m=null,_=null,y=null,T=null,R=null,C=null,D=null,M=new Ge(0,0,0),w=0,X=!1,Z=null,Q=null,b=null,W=null,$=null,K.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:ot,bindFramebuffer:Ie,drawBuffers:z,useProgram:nn,setBlending:Ce,setMaterial:at,setFlipSided:Fe,setCullFace:Oe,setLineWidth:Ke,setPolygonOffset:St,setScissorTest:Dt,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:ie,compressedTexImage3D:ee,texImage2D:ne,texImage3D:qe,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:Te,texStorage3D:We,texSubImage2D:re,texSubImage3D:ve,compressedTexSubImage2D:le,compressedTexSubImage3D:de,scissor:Le,viewport:we,reset:He}}function QT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return u?new OffscreenCanvas(A,S):ll("canvas")}function _(A,S,B,ie){let ee=1;if((A.width>ie||A.height>ie)&&(ee=ie/Math.max(A.width,A.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=S?kc:Math.floor,ve=re(ee*A.width),le=re(ee*A.height);v===void 0&&(v=m(ve,le));const de=B?m(ve,le):v;return de.width=ve,de.height=le,de.getContext("2d").drawImage(A,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ve+"x"+le+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Hh(A.width)&&Hh(A.height)}function T(A){return a?!1:A.wrapS!==Nn||A.wrapT!==Nn||A.minFilter!==Wt&&A.minFilter!==xn}function R(A,S){return A.generateMipmaps&&S&&A.minFilter!==Wt&&A.minFilter!==xn}function C(A){t.generateMipmap(A)}function D(A,S,B,ie,ee=!1){if(a===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=S;if(S===t.RED&&(B===t.FLOAT&&(re=t.R32F),B===t.HALF_FLOAT&&(re=t.R16F),B===t.UNSIGNED_BYTE&&(re=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.R8UI),B===t.UNSIGNED_SHORT&&(re=t.R16UI),B===t.UNSIGNED_INT&&(re=t.R32UI),B===t.BYTE&&(re=t.R8I),B===t.SHORT&&(re=t.R16I),B===t.INT&&(re=t.R32I)),S===t.RG&&(B===t.FLOAT&&(re=t.RG32F),B===t.HALF_FLOAT&&(re=t.RG16F),B===t.UNSIGNED_BYTE&&(re=t.RG8)),S===t.RGBA){const ve=ee?rl:$e.getTransfer(ie);B===t.FLOAT&&(re=t.RGBA32F),B===t.HALF_FLOAT&&(re=t.RGBA16F),B===t.UNSIGNED_BYTE&&(re=ve===et?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(A,S,B){return R(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==xn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===Wt||A===dh||A===su?t.NEAREST:t.LINEAR}function X(A){const S=A.target;S.removeEventListener("dispose",X),Q(S),S.isVideoTexture&&x.delete(S)}function Z(A){const S=A.target;S.removeEventListener("dispose",Z),W(S)}function Q(A){const S=i.get(A);if(S.__webglInit===void 0)return;const B=A.source,ie=p.get(B);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(A),Object.keys(ie).length===0&&p.delete(B)}i.remove(A)}function b(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const B=A.source,ie=p.get(B);delete ie[S.__cacheKey],o.memory.textures--}function W(A){const S=A.texture,B=i.get(A),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let re=0;re<B.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(B.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)t.deleteFramebuffer(B.__webglFramebuffer[ee]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,re=S.length;ee<re;ee++){const ve=i.get(S[ee]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(A)}let $=0;function j(){$=0}function N(){const A=$;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),$+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function O(A,S){const B=i.get(A);if(A.isVideoTexture&&St(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const ie=A.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(B,A,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function L(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Pe(B,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function I(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Pe(B,A,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function ce(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ot(B,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const q={[Nc]:t.REPEAT,[Nn]:t.CLAMP_TO_EDGE,[Ic]:t.MIRRORED_REPEAT},K={[Wt]:t.NEAREST,[dh]:t.NEAREST_MIPMAP_NEAREST,[su]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[Ix]:t.LINEAR_MIPMAP_NEAREST,[yo]:t.LINEAR_MIPMAP_LINEAR},te={[qx]:t.NEVER,[ty]:t.ALWAYS,[$x]:t.LESS,[Zx]:t.LEQUAL,[Kx]:t.EQUAL,[ey]:t.GEQUAL,[Qx]:t.GREATER,[Jx]:t.NOTEQUAL};function ge(A,S,B){if(B?(t.texParameteri(A,t.TEXTURE_WRAP_S,q[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,q[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,q[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,K[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,K[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Nn||S.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wt||S.minFilter!==su&&S.minFilter!==yo||S.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===So&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function _e(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",X));const ie=S.source;let ee=p.get(ie);ee===void 0&&(ee={},p.set(ie,ee));const re=F(S);if(re!==A.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[re].usedTimes++;const ve=ee[A.__cacheKey];ve!==void 0&&(ee[A.__cacheKey].usedTimes--,ve.usedTimes===0&&b(S)),A.__cacheKey=re,A.__webglTexture=ee[re].texture}return B}function Pe(A,S,B){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=_e(A,S),re=S.source;n.bindTexture(ie,A.__webglTexture,t.TEXTURE0+B);const ve=i.get(re);if(re.version!==ve.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const le=$e.getPrimaries($e.workingColorSpace),de=S.colorSpace===Sn?null:$e.getPrimaries(S.colorSpace),Te=S.colorSpace===Sn||le===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const We=T(S)&&y(S.image)===!1;let ne=_(S.image,We,!1,f);ne=Dt(S,ne);const qe=y(ne)||a,Le=s.convert(S.format,S.colorSpace);let we=s.convert(S.type),Se=D(S.internalFormat,Le,we,S.colorSpace,S.isVideoTexture);ge(ie,S,qe);let me;const He=S.mipmaps,P=a&&S.isVideoTexture!==!0,fe=ve.__version===void 0||ee===!0,se=M(S,ne,qe);if(S.isDepthTexture)Se=t.DEPTH_COMPONENT,a?S.type===Pi?Se=t.DEPTH_COMPONENT32F:S.type===Ri?Se=t.DEPTH_COMPONENT24:S.type===fr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:S.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===dr&&Se===t.DEPTH_COMPONENT&&S.type!==kf&&S.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ri,we=s.convert(S.type)),S.format===xs&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,S.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=fr,we=s.convert(S.type))),fe&&(P?n.texStorage2D(t.TEXTURE_2D,1,Se,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Se,ne.width,ne.height,0,Le,we,null));else if(S.isDataTexture)if(He.length>0&&qe){P&&fe&&n.texStorage2D(t.TEXTURE_2D,se,Se,He[0].width,He[0].height);for(let Y=0,ae=He.length;Y<ae;Y++)me=He[Y],P?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,Le,we,me.data):n.texImage2D(t.TEXTURE_2D,Y,Se,me.width,me.height,0,Le,we,me.data);S.generateMipmaps=!1}else P?(fe&&n.texStorage2D(t.TEXTURE_2D,se,Se,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,Le,we,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Se,ne.width,ne.height,0,Le,we,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){P&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Se,He[0].width,He[0].height,ne.depth);for(let Y=0,ae=He.length;Y<ae;Y++)me=He[Y],S.format!==In?Le!==null?P?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ne.depth,Le,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Se,me.width,me.height,ne.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ne.depth,Le,we,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Se,me.width,me.height,ne.depth,0,Le,we,me.data)}else{P&&fe&&n.texStorage2D(t.TEXTURE_2D,se,Se,He[0].width,He[0].height);for(let Y=0,ae=He.length;Y<ae;Y++)me=He[Y],S.format!==In?Le!==null?P?n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,Le,me.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,Le,we,me.data):n.texImage2D(t.TEXTURE_2D,Y,Se,me.width,me.height,0,Le,we,me.data)}else if(S.isDataArrayTexture)P?(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Se,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Le,we,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ne.width,ne.height,ne.depth,0,Le,we,ne.data);else if(S.isData3DTexture)P?(fe&&n.texStorage3D(t.TEXTURE_3D,se,Se,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Le,we,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ne.width,ne.height,ne.depth,0,Le,we,ne.data);else if(S.isFramebufferTexture){if(fe)if(P)n.texStorage2D(t.TEXTURE_2D,se,Se,ne.width,ne.height);else{let Y=ne.width,ae=ne.height;for(let Me=0;Me<se;Me++)n.texImage2D(t.TEXTURE_2D,Me,Se,Y,ae,0,Le,we,null),Y>>=1,ae>>=1}}else if(He.length>0&&qe){P&&fe&&n.texStorage2D(t.TEXTURE_2D,se,Se,He[0].width,He[0].height);for(let Y=0,ae=He.length;Y<ae;Y++)me=He[Y],P?n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Le,we,me):n.texImage2D(t.TEXTURE_2D,Y,Se,Le,we,me);S.generateMipmaps=!1}else P?(fe&&n.texStorage2D(t.TEXTURE_2D,se,Se,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,we,ne)):n.texImage2D(t.TEXTURE_2D,0,Se,Le,we,ne);R(S,qe)&&C(ie),ve.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ot(A,S,B){if(S.image.length!==6)return;const ie=_e(A,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+B);const ve=$e.getPrimaries($e.workingColorSpace),le=S.colorSpace===Sn?null:$e.getPrimaries(S.colorSpace),de=S.colorSpace===Sn||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,We=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let Y=0;Y<6;Y++)!Te&&!We?ne[Y]=_(S.image[Y],!1,!0,c):ne[Y]=We?S.image[Y].image:S.image[Y],ne[Y]=Dt(S,ne[Y]);const qe=ne[0],Le=y(qe)||a,we=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),me=D(S.internalFormat,we,Se,S.colorSpace),He=a&&S.isVideoTexture!==!0,P=re.__version===void 0||ie===!0;let fe=M(S,qe,Le);ge(t.TEXTURE_CUBE_MAP,S,Le);let se;if(Te){He&&P&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,me,qe.width,qe.height);for(let Y=0;Y<6;Y++){se=ne[Y].mipmaps;for(let ae=0;ae<se.length;ae++){const Me=se[ae];S.format!==In?we!==null?He?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Me.width,Me.height,we,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,me,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Me.width,Me.height,we,Se,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,me,Me.width,Me.height,0,we,Se,Me.data)}}}else{se=S.mipmaps,He&&P&&(se.length>0&&fe++,n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,me,ne[0].width,ne[0].height));for(let Y=0;Y<6;Y++)if(We){He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ne[Y].width,ne[Y].height,we,Se,ne[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,me,ne[Y].width,ne[Y].height,0,we,Se,ne[Y].data);for(let ae=0;ae<se.length;ae++){const Xe=se[ae].image[Y].image;He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Xe.width,Xe.height,we,Se,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,me,Xe.width,Xe.height,0,we,Se,Xe.data)}}else{He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,Se,ne[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,me,we,Se,ne[Y]);for(let ae=0;ae<se.length;ae++){const Me=se[ae];He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,we,Se,Me.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,me,we,Se,Me.image[Y])}}}R(S,Le)&&C(t.TEXTURE_CUBE_MAP),re.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,B,ie,ee,re){const ve=s.convert(B.format,B.colorSpace),le=s.convert(B.type),de=D(B.internalFormat,ve,le,B.colorSpace);if(!i.get(S).__hasExternalTextures){const We=Math.max(1,S.width>>re),ne=Math.max(1,S.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,de,We,ne,S.depth,0,ve,le,null):n.texImage2D(ee,re,de,We,ne,0,ve,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ke(S)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(B).__webglTexture,0,Oe(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(B).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function z(A,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||Ke(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pi?ie=t.DEPTH_COMPONENT32F:ee.type===Ri&&(ie=t.DEPTH_COMPONENT24));const re=Oe(S);Ke(S)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Oe(S);B&&Ke(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):Ke(S)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],ve=s.convert(re.format,re.colorSpace),le=s.convert(re.type),de=D(re.internalFormat,ve,le,re.colorSpace),Te=Oe(S);B&&Ke(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,de,S.width,S.height):Ke(S)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,de,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,de,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function nn(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,ee=Oe(S);if(S.depthTexture.format===dr)Ke(S)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===xs)Ke(S)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ye(A){const S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");nn(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),z(S.__webglDepthbuffer[ie],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),z(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(A,S,B){const ie=i.get(A);S!==void 0&&Ie(ie.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ye(A)}function Ce(A){const S=A.texture,B=i.get(A),ie=i.get(S);A.addEventListener("dispose",Z),A.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++);const ee=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,ve=y(A)||a;if(ee){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let de=0;de<S.mipmaps.length;de++)B.__webglFramebuffer[le][de]=t.createFramebuffer()}else B.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)B.__webglFramebuffer[le]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const le=A.texture;for(let de=0,Te=le.length;de<Te;de++){const We=i.get(le[de]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ke(A)===!1){const le=re?S:[S];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Te=le[de];B.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const We=s.convert(Te.format,Te.colorSpace),ne=s.convert(Te.type),qe=D(Te.internalFormat,We,ne,Te.colorSpace,A.isXRRenderTarget===!0),Le=Oe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,qe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,B.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),z(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),ge(t.TEXTURE_CUBE_MAP,S,ve);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Ie(B.__webglFramebuffer[le][de],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else Ie(B.__webglFramebuffer[le],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);R(S,ve)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const le=A.texture;for(let de=0,Te=le.length;de<Te;de++){const We=le[de],ne=i.get(We);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),ge(t.TEXTURE_2D,We,ve),Ie(B.__webglFramebuffer,A,We,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),R(We,ve)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,ie.__webglTexture),ge(le,S,ve),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)Ie(B.__webglFramebuffer[de],A,S,t.COLOR_ATTACHMENT0,le,de);else Ie(B.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,le,0);R(S,ve)&&C(le),n.unbindTexture()}A.depthBuffer&&ye(A)}function at(A){const S=y(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0,ee=B.length;ie<ee;ie++){const re=B[ie];if(R(re,S)){const ve=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(re).__webglTexture;n.bindTexture(ve,le),C(ve),n.unbindTexture()}}}function Fe(A){if(a&&A.samples>0&&Ke(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,ie=A.height;let ee=t.COLOR_BUFFER_BIT;const re=[],ve=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(A),de=A.isWebGLMultipleRenderTargets===!0;if(de)for(let Te=0;Te<S.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){re.push(t.COLOR_ATTACHMENT0+Te),A.depthBuffer&&re.push(ve);const We=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(We===!1&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[Te]),We===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),de){const ne=i.get(S[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,B,ie,0,0,B,ie,ee,t.NEAREST),g&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<S.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,le.__webglColorRenderbuffer[Te]);const We=i.get(S[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Oe(A){return Math.min(h,A.samples)}function Ke(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function St(A){const S=o.render.frame;x.get(A)!==S&&(x.set(A,S),A.update())}function Dt(A,S){const B=A.colorSpace,ie=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Fc||B!==hi&&B!==Sn&&($e.getTransfer(B)===et?a===!1?e.has("EXT_sRGB")===!0&&ie===In?(A.format=Fc,A.minFilter=xn,A.generateMipmaps=!1):S=n_.sRGBToLinear(S):(ie!==In||ee!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=N,this.resetTextureUnits=j,this.setTexture2D=O,this.setTexture2DArray=L,this.setTexture3D=I,this.setTextureCube=ce,this.rebindTextures=Re,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ke}function JT(t,e,n){const i=n.isWebGL2;function r(s,o=Sn){let a;const l=$e.getTransfer(o);if(s===Bi)return t.UNSIGNED_BYTE;if(s===qg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===$g)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Fx)return t.BYTE;if(s===Ox)return t.SHORT;if(s===kf)return t.UNSIGNED_SHORT;if(s===Yg)return t.INT;if(s===Ri)return t.UNSIGNED_INT;if(s===Pi)return t.FLOAT;if(s===So)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===kx)return t.ALPHA;if(s===In)return t.RGBA;if(s===zx)return t.LUMINANCE;if(s===Bx)return t.LUMINANCE_ALPHA;if(s===dr)return t.DEPTH_COMPONENT;if(s===xs)return t.DEPTH_STENCIL;if(s===Fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Hx)return t.RED;if(s===Kg)return t.RED_INTEGER;if(s===Gx)return t.RG;if(s===Zg)return t.RG_INTEGER;if(s===Qg)return t.RGBA_INTEGER;if(s===ou||s===au||s===lu||s===uu)if(l===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ou)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ou)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===au)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hh||s===ph||s===mh||s===gh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_h||s===vh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_h)return l===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xh||s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===wh||s===Ah||s===Ch||s===Rh||s===Ph||s===Lh||s===bh||s===Dh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Eh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Th)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ph)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cu||s===Uh||s===Nh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cu)return l===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wx||s===Ih||s===Fh||s===Oh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===cu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ih)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Oh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class ew extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xa extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tw={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class nw extends fn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:dr,f!==dr&&f!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===dr&&(i=Ri),i===void 0&&f===xs&&(i=fr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class iw extends Er{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,g=null,x=null;const v=n.getContextAttributes();let p=null,u=null;const m=[],_=[],y=new yn;y.layers.enable(1),y.viewport=new wt;const T=new yn;T.layers.enable(2),T.viewport=new wt;const R=[y,T],C=new ew;C.layers.enable(1),C.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let I=m[L];return I===void 0&&(I=new Iu,m[L]=I),I.getTargetRaySpace()},this.getControllerGrip=function(L){let I=m[L];return I===void 0&&(I=new Iu,m[L]=I),I.getGripSpace()},this.getHand=function(L){let I=m[L];return I===void 0&&(I=new Iu,m[L]=I),I.getHandSpace()};function w(L){const I=_.indexOf(L.inputSource);if(I===-1)return;const ce=m[I];ce!==void 0&&(ce.update(L.inputSource,L.frame,c||o),ce.dispatchEvent({type:L.type,data:L.inputSource}))}function X(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Z);for(let L=0;L<m.length;L++){const I=_[L];I!==null&&(_[L]=null,m[L].disconnect(I))}D=null,M=null,e.setRenderTarget(p),g=null,d=null,h=null,r=null,u=null,O.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,I),r.updateRenderState({baseLayer:g}),u=new xr(g.framebufferWidth,g.framebufferHeight,{format:In,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let I=null,ce=null,q=null;v.depth&&(q=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,I=v.stencil?xs:dr,ce=v.stencil?fr:Ri);const K={colorFormat:n.RGBA8,depthFormat:q,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(K),r.updateRenderState({layers:[d]}),u=new xr(d.textureWidth,d.textureHeight,{format:In,type:Bi,depthTexture:new nw(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const te=e.properties.get(u);te.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),O.setContext(r),O.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(L){for(let I=0;I<L.removed.length;I++){const ce=L.removed[I],q=_.indexOf(ce);q>=0&&(_[q]=null,m[q].disconnect(ce))}for(let I=0;I<L.added.length;I++){const ce=L.added[I];let q=_.indexOf(ce);if(q===-1){for(let te=0;te<m.length;te++)if(te>=_.length){_.push(ce),q=te;break}else if(_[te]===null){_[te]=ce,q=te;break}if(q===-1)break}const K=m[q];K&&K.connect(ce)}}const Q=new k,b=new k;function W(L,I,ce){Q.setFromMatrixPosition(I.matrixWorld),b.setFromMatrixPosition(ce.matrixWorld);const q=Q.distanceTo(b),K=I.projectionMatrix.elements,te=ce.projectionMatrix.elements,ge=K[14]/(K[10]-1),_e=K[14]/(K[10]+1),Pe=(K[9]+1)/K[5],ot=(K[9]-1)/K[5],Ie=(K[8]-1)/K[0],z=(te[8]+1)/te[0],nn=ge*Ie,ye=ge*z,Re=q/(-Ie+z),Ce=Re*-Ie;I.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Ce),L.translateZ(Re),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const at=ge+Re,Fe=_e+Re,Oe=nn-Ce,Ke=ye+(q-Ce),St=Pe*_e/Fe*at,Dt=ot*_e/Fe*at;L.projectionMatrix.makePerspective(Oe,Ke,St,Dt,at,Fe),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function $(L,I){I===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(I.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;C.near=T.near=y.near=L.near,C.far=T.far=y.far=L.far,(D!==C.near||M!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,M=C.far);const I=L.parent,ce=C.cameras;$(C,I);for(let q=0;q<ce.length;q++)$(ce[q],I);ce.length===2?W(C,y,T):C.projectionMatrix.copy(y.projectionMatrix),j(L,C,I)};function j(L,I,ce){ce===null?L.matrix.copy(I.matrixWorld):(L.matrix.copy(ce.matrixWorld),L.matrix.invert(),L.matrix.multiply(I.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(I.projectionMatrix),L.projectionMatrixInverse.copy(I.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Oc*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=L)};let N=null;function F(L,I){if(f=I.getViewerPose(c||o),x=I,f!==null){const ce=f.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let q=!1;ce.length!==C.cameras.length&&(C.cameras.length=0,q=!0);for(let K=0;K<ce.length;K++){const te=ce[K];let ge=null;if(g!==null)ge=g.getViewport(te);else{const Pe=h.getViewSubImage(d,te);ge=Pe.viewport,K===0&&(e.setRenderTargetTextures(u,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(u))}let _e=R[K];_e===void 0&&(_e=new yn,_e.layers.enable(K),_e.viewport=new wt,R[K]=_e),_e.matrix.fromArray(te.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(te.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(ge.x,ge.y,ge.width,ge.height),K===0&&(C.matrix.copy(_e.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),q===!0&&C.cameras.push(_e)}}for(let ce=0;ce<m.length;ce++){const q=_[ce],K=m[ce];q!==null&&K!==void 0&&K.update(q,I,c||o)}N&&N(L,I),I.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:I}),x=null}const O=new h_;O.setAnimationLoop(F),this.setAnimationLoop=function(L){N=L},this.dispose=function(){}}}function rw(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,c_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&g(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,m,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=_*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,_){const y=_.program;i.uniformBlockBinding(m,y)}function c(m,_){let y=r[m.id];y===void 0&&(x(m),y=f(m),r[m.id]=y,m.addEventListener("dispose",p));const T=_.program;i.updateUBOMapping(m,T);const R=e.render.frame;s[m.id]!==R&&(d(m),s[m.id]=R)}function f(m){const _=h();m.__bindingPointIndex=_;const y=t.createBuffer(),T=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const _=r[m.id],y=m.uniforms,T=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,C=y.length;R<C;R++){const D=y[R];if(g(D,R,T)===!0){const M=D.__offset,w=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let Z=0;Z<w.length;Z++){const Q=w[Z],b=v(Q);typeof Q=="number"?(D.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,M+X,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=Q.elements[0],D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=Q.elements[0],D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=Q.elements[0]):(Q.toArray(D.__data,X),X+=b.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,_,y){const T=m.value;if(y[_]===void 0){if(typeof T=="number")y[_]=T;else{const R=Array.isArray(T)?T:[T],C=[];for(let D=0;D<R.length;D++)C.push(R[D].clone());y[_]=C}return!0}else if(typeof T=="number"){if(y[_]!==T)return y[_]=T,!0}else{const R=Array.isArray(y[_])?y[_]:[y[_]],C=Array.isArray(T)?T:[T];for(let D=0;D<R.length;D++){const M=R[D];if(M.equals(C[D])===!1)return M.copy(C[D]),!0}}return!1}function x(m){const _=m.uniforms;let y=0;const T=16;let R=0;for(let C=0,D=_.length;C<D;C++){const M=_[C],w={boundary:0,storage:0},X=Array.isArray(M.value)?M.value:[M.value];for(let Z=0,Q=X.length;Z<Q;Z++){const b=X[Z],W=v(b);w.boundary+=W.boundary,w.storage+=W.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,C>0){R=y%T;const Z=T-R;R!==0&&Z-w.boundary<0&&(y+=T-R,M.__offset=y)}y+=w.storage}return R=y%T,R>0&&(y+=T-R),m.__size=y,m.__cache={},this}function v(m){const _={boundary:0,storage:0};return typeof m=="number"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function p(m){const _=m.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class x_{constructor(e={}){const{canvas:n=iy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const _=this;let y=!1,T=0,R=0,C=null,D=-1,M=null;const w=new wt,X=new wt;let Z=null;const Q=new Ge(0);let b=0,W=n.width,$=n.height,j=1,N=null,F=null;const O=new wt(0,0,W,$),L=new wt(0,0,W,$);let I=!1;const ce=new Gf;let q=!1,K=!1,te=null;const ge=new vt,_e=new je,Pe=new k,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return C===null?j:1}let z=i;function nn(E,U){for(let H=0;H<E.length;H++){const G=E[H],V=n.getContext(G,U);if(V!==null)return V}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",He,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",fe,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),z=nn(U,E),z===null)throw nn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,Re,Ce,at,Fe,Oe,Ke,St,Dt,A,S,B,ie,ee,re,ve,le,de,Te,We,ne,qe,Le,we;function Se(){ye=new mE(z),Re=new uE(z,ye,e),ye.init(Re),qe=new JT(z,ye,Re),Ce=new ZT(z,ye,Re),at=new vE(z),Fe=new OT,Oe=new QT(z,ye,Ce,Fe,Re,qe,at),Ke=new fE(_),St=new pE(_),Dt=new Ry(z,Re),Le=new aE(z,ye,Dt,Re),A=new gE(z,Dt,at,Le),S=new ME(z,A,Dt,at),Te=new SE(z,Re,Oe),ve=new cE(Fe),B=new FT(_,Ke,St,ye,Re,Le,ve),ie=new rw(_,Fe),ee=new zT,re=new XT(ye,Re),de=new oE(_,Ke,St,Ce,S,d,l),le=new KT(_,S,Re),we=new sw(z,at,Re,Ce),We=new lE(z,ye,at,Re),ne=new _E(z,ye,at,Re),at.programs=B.programs,_.capabilities=Re,_.extensions=ye,_.properties=Fe,_.renderLists=ee,_.shadowMap=le,_.state=Ce,_.info=at}Se();const me=new iw(_,z);this.xr=me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(W,$,!1))},this.getSize=function(E){return E.set(W,$)},this.setSize=function(E,U,H=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,$=U,n.width=Math.floor(E*j),n.height=Math.floor(U*j),H===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*j,$*j).floor()},this.setDrawingBufferSize=function(E,U,H){W=E,$=U,j=H,n.width=Math.floor(E*H),n.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,U,H,G){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,U,H,G),Ce.viewport(w.copy(O).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(L)},this.setScissor=function(E,U,H,G){E.isVector4?L.set(E.x,E.y,E.z,E.w):L.set(E,U,H,G),Ce.scissor(X.copy(L).multiplyScalar(j).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(E){Ce.setScissorTest(I=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){F=E},this.getClearColor=function(E){return E.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(E=!0,U=!0,H=!0){let G=0;if(E){let V=!1;if(C!==null){const he=C.texture.format;V=he===Qg||he===Zg||he===Kg}if(V){const he=C.texture.type,xe=he===Bi||he===Ri||he===kf||he===fr||he===qg||he===$g,Ee=de.getClearColor(),Ae=de.getClearAlpha(),Ne=Ee.r,be=Ee.g,De=Ee.b;xe?(g[0]=Ne,g[1]=be,g[2]=De,g[3]=Ae,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Ne,x[1]=be,x[2]=De,x[3]=Ae,z.clearBufferiv(z.COLOR,0,x))}else G|=z.COLOR_BUFFER_BIT}U&&(G|=z.DEPTH_BUFFER_BIT),H&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ee.dispose(),re.dispose(),Fe.dispose(),Ke.dispose(),St.dispose(),S.dispose(),Le.dispose(),we.dispose(),B.dispose(),me.dispose(),me.removeEventListener("sessionstart",mn),me.removeEventListener("sessionend",Ze),te&&(te.dispose(),te=null),Bt.stop()};function He(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=at.autoReset,U=le.enabled,H=le.autoUpdate,G=le.needsUpdate,V=le.type;Se(),at.autoReset=E,le.enabled=U,le.autoUpdate=H,le.needsUpdate=G,le.type=V}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const U=E.target;U.removeEventListener("dispose",se),Y(U)}function Y(E){ae(E),Fe.remove(E)}function ae(E){const U=Fe.get(E).programs;U!==void 0&&(U.forEach(function(H){B.releaseProgram(H)}),E.isShaderMaterial&&B.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,G,V,he){U===null&&(U=ot);const xe=V.isMesh&&V.matrixWorld.determinant()<0,Ee=M_(E,U,H,G,V);Ce.setMaterial(G,xe);let Ae=H.index,Ne=1;if(G.wireframe===!0){if(Ae=A.getWireframeAttribute(H),Ae===void 0)return;Ne=2}const be=H.drawRange,De=H.attributes.position;let ct=be.start*Ne,rn=(be.start+be.count)*Ne;he!==null&&(ct=Math.max(ct,he.start*Ne),rn=Math.min(rn,(he.start+he.count)*Ne)),Ae!==null?(ct=Math.max(ct,0),rn=Math.min(rn,Ae.count)):De!=null&&(ct=Math.max(ct,0),rn=Math.min(rn,De.count));const Mt=rn-ct;if(Mt<0||Mt===1/0)return;Le.setup(V,G,Ee,H,Ae);let $n,lt=We;if(Ae!==null&&($n=Dt.get(Ae),lt=ne,lt.setIndex($n)),V.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*Ie()),lt.setMode(z.LINES)):lt.setMode(z.TRIANGLES);else if(V.isLine){let Be=G.linewidth;Be===void 0&&(Be=1),Ce.setLineWidth(Be*Ie()),V.isLineSegments?lt.setMode(z.LINES):V.isLineLoop?lt.setMode(z.LINE_LOOP):lt.setMode(z.LINE_STRIP)}else V.isPoints?lt.setMode(z.POINTS):V.isSprite&&lt.setMode(z.TRIANGLES);if(V.isInstancedMesh)lt.renderInstances(ct,Mt,V.count);else if(H.isInstancedBufferGeometry){const Be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Pl=Math.min(H.instanceCount,Be);lt.renderInstances(ct,Mt,Pl)}else lt.render(ct,Mt)};function Me(E,U,H){E.transparent===!0&&E.side===ri&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Uo(E,U,H),E.side=Vi,E.needsUpdate=!0,Uo(E,U,H),E.side=ri):Uo(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),p=re.get(H),p.init(),m.push(p),H.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==H&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(_._useLegacyLights);const G=new Set;return E.traverse(function(V){const he=V.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ee=he[xe];Me(Ee,H,V),G.add(Ee)}else Me(he,H,V),G.add(he)}),m.pop(),p=null,G},this.compileAsync=function(E,U,H=null){const G=this.compile(E,U,H);return new Promise(V=>{function he(){if(G.forEach(function(xe){Fe.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){V(E);return}setTimeout(he,10)}ye.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Xe=null;function dt(E){Xe&&Xe(E)}function mn(){Bt.stop()}function Ze(){Bt.start()}const Bt=new h_;Bt.setAnimationLoop(dt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(E){Xe=E,me.setAnimationLoop(E),E===null?Bt.stop():Bt.start()},me.addEventListener("sessionstart",mn),me.addEventListener("sessionend",Ze),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,C),p=re.get(E,m.length),p.init(),m.push(p),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ce.setFromProjectionMatrix(ge),K=this.localClippingEnabled,q=ve.init(this.clippingPlanes,K),v=ee.get(E,u.length),v.init(),u.push(v),Bn(E,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(N,F),this.info.render.frame++,q===!0&&ve.beginShadows();const H=p.state.shadowsArray;if(le.render(H,E,U),q===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(v,E),p.setupLights(_._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let V=0,he=G.length;V<he;V++){const xe=G[V];Xf(v,E,xe,xe.viewport)}}else Xf(v,E,U);C!==null&&(Oe.updateMultisampleRenderTarget(C),Oe.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,U),Le.resetDefaultState(),D=-1,M=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Bn(E,U,H,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ce.intersectsSprite(E)){G&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const xe=S.update(E),Ee=E.material;Ee.visible&&v.push(E,xe,Ee,H,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ce.intersectsObject(E))){const xe=S.update(E),Ee=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Pe.copy(xe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(Ee)){const Ae=xe.groups;for(let Ne=0,be=Ae.length;Ne<be;Ne++){const De=Ae[Ne],ct=Ee[De.materialIndex];ct&&ct.visible&&v.push(E,xe,ct,H,Pe.z,De)}}else Ee.visible&&v.push(E,xe,Ee,H,Pe.z,null)}}const he=E.children;for(let xe=0,Ee=he.length;xe<Ee;xe++)Bn(he[xe],U,H,G)}function Xf(E,U,H,G){const V=E.opaque,he=E.transmissive,xe=E.transparent;p.setupLightsView(H),q===!0&&ve.setGlobalState(_.clippingPlanes,H),he.length>0&&S_(V,he,U,H),G&&Ce.viewport(w.copy(G)),V.length>0&&Do(V,U,H),he.length>0&&Do(he,U,H),xe.length>0&&Do(xe,U,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function S_(E,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const he=Re.isWebGL2;te===null&&(te=new xr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?So:Bi,minFilter:yo,samples:he?4:0})),_.getDrawingBufferSize(_e),he?te.setSize(_e.x,_e.y):te.setSize(kc(_e.x),kc(_e.y));const xe=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(Q),b=_.getClearAlpha(),b<1&&_.setClearColor(16777215,.5),_.clear();const Ee=_.toneMapping;_.toneMapping=zi,Do(E,H,G),Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te);let Ae=!1;for(let Ne=0,be=U.length;Ne<be;Ne++){const De=U[Ne],ct=De.object,rn=De.geometry,Mt=De.material,$n=De.group;if(Mt.side===ri&&ct.layers.test(G.layers)){const lt=Mt.side;Mt.side=tn,Mt.needsUpdate=!0,jf(ct,H,G,rn,Mt,$n),Mt.side=lt,Mt.needsUpdate=!0,Ae=!0}}Ae===!0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te)),_.setRenderTarget(xe),_.setClearColor(Q,b),_.toneMapping=Ee}function Do(E,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,he=E.length;V<he;V++){const xe=E[V],Ee=xe.object,Ae=xe.geometry,Ne=G===null?xe.material:G,be=xe.group;Ee.layers.test(H.layers)&&jf(Ee,U,H,Ae,Ne,be)}}function jf(E,U,H,G,V,he){E.onBeforeRender(_,U,H,G,V,he),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(_,U,H,G,E,he),V.transparent===!0&&V.side===ri&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,_.renderBufferDirect(H,U,G,V,E,he),V.side=Vi,V.needsUpdate=!0,_.renderBufferDirect(H,U,G,V,E,he),V.side=ri):_.renderBufferDirect(H,U,G,V,E,he),E.onAfterRender(_,U,H,G,V,he)}function Uo(E,U,H){U.isScene!==!0&&(U=ot);const G=Fe.get(E),V=p.state.lights,he=p.state.shadowsArray,xe=V.state.version,Ee=B.getParameters(E,V.state,he,U,H),Ae=B.getProgramCacheKey(Ee);let Ne=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?St:Ke).get(E.envMap||G.environment),Ne===void 0&&(E.addEventListener("dispose",se),Ne=new Map,G.programs=Ne);let be=Ne.get(Ae);if(be!==void 0){if(G.currentProgram===be&&G.lightsStateVersion===xe)return qf(E,Ee),be}else Ee.uniforms=B.getUniforms(E),E.onBuild(H,Ee,_),E.onBeforeCompile(Ee,_),be=B.acquireProgram(Ee,Ae),Ne.set(Ae,be),G.uniforms=Ee.uniforms;const De=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=ve.uniform),qf(E,Ee),G.needsLights=T_(E),G.lightsStateVersion=xe,G.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=be,G.uniformsList=null,be}function Yf(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Da.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function qf(E,U){const H=Fe.get(E);H.outputColorSpace=U.outputColorSpace,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function M_(E,U,H,G,V){U.isScene!==!0&&(U=ot),Oe.resetTextureUnits();const he=U.fog,xe=G.isMeshStandardMaterial?U.environment:null,Ee=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hi,Ae=(G.isMeshStandardMaterial?St:Ke).get(G.envMap||xe),Ne=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,be=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!H.morphAttributes.position,ct=!!H.morphAttributes.normal,rn=!!H.morphAttributes.color;let Mt=zi;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const $n=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=$n!==void 0?$n.length:0,Be=Fe.get(G),Pl=p.state.lights;if(q===!0&&(K===!0||E!==M)){const sn=E===M&&G.id===D;ve.setState(G,E,sn)}let ht=!1;G.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Pl.state.version||Be.outputColorSpace!==Ee||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||Be.envMap!==Ae||G.fog===!0&&Be.fog!==he||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ve.numPlanes||Be.numIntersection!==ve.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==be||Be.morphTargets!==De||Be.morphNormals!==ct||Be.morphColors!==rn||Be.toneMapping!==Mt||Re.isWebGL2===!0&&Be.morphTargetsCount!==lt)&&(ht=!0):(ht=!0,Be.__version=G.version);let qi=Be.currentProgram;ht===!0&&(qi=Uo(G,U,V));let $f=!1,As=!1,Ll=!1;const Ht=qi.getUniforms(),$i=Be.uniforms;if(Ce.useProgram(qi.program)&&($f=!0,As=!0,Ll=!0),G.id!==D&&(D=G.id,As=!0),$f||M!==E){Ht.setValue(z,"projectionMatrix",E.projectionMatrix),Ht.setValue(z,"viewMatrix",E.matrixWorldInverse);const sn=Ht.map.cameraPosition;sn!==void 0&&sn.setValue(z,Pe.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,As=!0,Ll=!0)}if(V.isSkinnedMesh){Ht.setOptional(z,V,"bindMatrix"),Ht.setOptional(z,V,"bindMatrixInverse");const sn=V.skeleton;sn&&(Re.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Ht.setValue(z,"boneTexture",sn.boneTexture,Oe),Ht.setValue(z,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bl=H.morphAttributes;if((bl.position!==void 0||bl.normal!==void 0||bl.color!==void 0&&Re.isWebGL2===!0)&&Te.update(V,H,qi),(As||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,Ht.setValue(z,"receiveShadow",V.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&($i.envMap.value=Ae,$i.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),As&&(Ht.setValue(z,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&E_($i,Ll),he&&G.fog===!0&&ie.refreshFogUniforms($i,he),ie.refreshMaterialUniforms($i,G,j,$,te),Da.upload(z,Yf(Be),$i,Oe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Da.upload(z,Yf(Be),$i,Oe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ht.setValue(z,"center",V.center),Ht.setValue(z,"modelViewMatrix",V.modelViewMatrix),Ht.setValue(z,"normalMatrix",V.normalMatrix),Ht.setValue(z,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const sn=G.uniformsGroups;for(let Dl=0,w_=sn.length;Dl<w_;Dl++)if(Re.isWebGL2){const Kf=sn[Dl];we.update(Kf,qi),we.bind(Kf,qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qi}function E_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function T_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,H){Fe.get(E.texture).__webglTexture=U,Fe.get(E.depthTexture).__webglTexture=H;const G=Fe.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const H=Fe.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){C=E,T=U,R=H;let G=!0,V=null,he=!1,xe=!1;if(E){const Ae=Fe.get(E);Ae.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(z.FRAMEBUFFER,null),G=!1):Ae.__webglFramebuffer===void 0?Oe.setupRenderTarget(E):Ae.__hasExternalTextures&&Oe.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(xe=!0);const be=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[U])?V=be[U][H]:V=be[U],he=!0):Re.isWebGL2&&E.samples>0&&Oe.useMultisampledRTT(E)===!1?V=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?V=be[H]:V=be,w.copy(E.viewport),X.copy(E.scissor),Z=E.scissorTest}else w.copy(O).multiplyScalar(j).floor(),X.copy(L).multiplyScalar(j).floor(),Z=I;if(Ce.bindFramebuffer(z.FRAMEBUFFER,V)&&Re.drawBuffers&&G&&Ce.drawBuffers(E,V),Ce.viewport(w),Ce.scissor(X),Ce.setScissorTest(Z),he){const Ae=Fe.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,H)}else if(xe){const Ae=Fe.get(E.texture),Ne=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ae.__webglTexture,H||0,Ne)}D=-1},this.readRenderTargetPixels=function(E,U,H,G,V,he,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){Ce.bindFramebuffer(z.FRAMEBUFFER,Ee);try{const Ae=E.texture,Ne=Ae.format,be=Ae.type;if(Ne!==In&&qe.convert(Ne)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=be===So&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(be!==Bi&&qe.convert(be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===Pi&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&H>=0&&H<=E.height-V&&z.readPixels(U,H,G,V,qe.convert(Ne),qe.convert(be),he)}finally{const Ae=C!==null?Fe.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(z.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(E,U,H=0){const G=Math.pow(2,-H),V=Math.floor(U.image.width*G),he=Math.floor(U.image.height*G);Oe.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,E.x,E.y,V,he),Ce.unbindTexture()},this.copyTextureToTexture=function(E,U,H,G=0){const V=U.image.width,he=U.image.height,xe=qe.convert(H.format),Ee=qe.convert(H.type);Oe.setTexture2D(H,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,E.x,E.y,V,he,xe,Ee,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,G,E.x,E.y,xe,Ee,U.image),G===0&&H.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H,G,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=E.max.x-E.min.x+1,xe=E.max.y-E.min.y+1,Ee=E.max.z-E.min.z+1,Ae=qe.convert(G.format),Ne=qe.convert(G.type);let be;if(G.isData3DTexture)Oe.setTexture3D(G,0),be=z.TEXTURE_3D;else if(G.isDataArrayTexture)Oe.setTexture2DArray(G,0),be=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const De=z.getParameter(z.UNPACK_ROW_LENGTH),ct=z.getParameter(z.UNPACK_IMAGE_HEIGHT),rn=z.getParameter(z.UNPACK_SKIP_PIXELS),Mt=z.getParameter(z.UNPACK_SKIP_ROWS),$n=z.getParameter(z.UNPACK_SKIP_IMAGES),lt=H.isCompressedTexture?H.mipmaps[0]:H.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,lt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?z.texSubImage3D(be,V,U.x,U.y,U.z,he,xe,Ee,Ae,Ne,lt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(be,V,U.x,U.y,U.z,he,xe,Ee,Ae,lt.data)):z.texSubImage3D(be,V,U.x,U.y,U.z,he,xe,Ee,Ae,Ne,lt),z.pixelStorei(z.UNPACK_ROW_LENGTH,De),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct),z.pixelStorei(z.UNPACK_SKIP_PIXELS,rn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$n),V===0&&G.generateMipmaps&&z.generateMipmap(be),Ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,Ce.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zf?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===Al?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?hr:Jg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hr?Rt:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ow extends x_{}ow.prototype.isWebGL1Renderer=!0;class aw extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Wf extends Yi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new k,d=new k,g=[],x=[],v=[],p=[];for(let u=0;u<=i;u++){const m=[],_=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let T=0;T<=n;T++){const R=T/n;h.x=-e*Math.cos(r+R*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+R*s)*Math.sin(o+_*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(R+y,1-_),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const _=f[u][m+1],y=f[u][m],T=f[u+1][m],R=f[u+1][m+1];(u!==0||o>0)&&g.push(_,y,R),(u!==i-1||l<Math.PI)&&g.push(y,T,R)}this.setIndex(g),this.setAttribute("position",new qn(x,3)),this.setAttribute("normal",new qn(v,3)),this.setAttribute("uv",new qn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fu extends bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y_ extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class lw extends y_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ou=new vt,Ap=new k,Cp=new k;class uw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gf,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ap.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ap),Cp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cp),n.updateMatrixWorld(),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cw extends uw{constructor(){super(new p_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fw extends y_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new cw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Rp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Rp(){return(typeof performance>"u"?Date:performance).now()}class hw{constructor(e,n,i=0,r=1/0){this.ray=new s_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Hf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Bc(e,this,i,n),i.sort(Pp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Bc(e[r],this,i,n);return i.sort(Pp),i}}function Pp(t,e){return t.distance-e.distance}function Bc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Bc(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);const Hr=new Lo(0,0,0,"YXZ"),Gr=new k,pw={type:"change"},mw={type:"lock"},gw={type:"unlock"},Lp=Math.PI/2;class _w extends Er{constructor(e,n){super(),this.camera=e,this.domElement=n,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=vw.bind(this),this._onPointerlockChange=xw.bind(this),this._onPointerlockError=yw.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const n=this.camera;Gr.setFromMatrixColumn(n.matrix,0),Gr.crossVectors(n.up,Gr),n.position.addScaledVector(Gr,e)}moveRight(e){const n=this.camera;Gr.setFromMatrixColumn(n.matrix,0),n.position.addScaledVector(Gr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function vw(t){if(this.isLocked===!1)return;const e=t.movementX||t.mozMovementX||t.webkitMovementX||0,n=t.movementY||t.mozMovementY||t.webkitMovementY||0,i=this.camera;Hr.setFromQuaternion(i.quaternion),Hr.y-=e*.002*this.pointerSpeed,Hr.x-=n*.002*this.pointerSpeed,Hr.x=Math.max(Lp-this.maxPolarAngle,Math.min(Lp-this.minPolarAngle,Hr.x)),i.quaternion.setFromEuler(Hr),this.dispatchEvent(pw)}function xw(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(mw),this.isLocked=!0):(this.dispatchEvent(gw),this.isLocked=!1)}function yw(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function Sw(){const t=Ot.useRef(null),[e,n]=Ot.useState(0),[i,r]=Ot.useState(!1),[s,o]=Ot.useState(!1);return Ot.useEffect(()=>{const a=t.current;if(!a)return;const l=a.clientWidth,c=a.clientHeight,f=new aw;f.background=new Ge(2106154);const h=new yn(75,l/c,.1,1e3);h.position.set(0,2,8);const d=new x_({antialias:!0});d.setSize(l,c),a.appendChild(d.domElement);const g=new _w(h,d.domElement);f.add(g.getObject());const x=new k,v=new k,p=new Fn(new Cl(80,80),new Fu({color:593942}));p.rotation.x=-Math.PI/2,p.position.y=0,f.add(p);const u=new Wf(.6,18,18),m=[];function _(q,K,te,ge=16732240){const _e=new Fn(u,new Fu({color:ge}));_e.position.set(q,K,te),_e.userData={hit:!1},f.add(_e),m.push(_e)}for(let q=0;q<6;q++)_((q-2.5)*3,1.25,-4-q*4,16732240);const y=new fw(16777215,1.1);y.position.set(5,8,5),f.add(y);const T=new lw(16777215,4473941,.5);f.add(T);let R=0;const C=new dw;function D(){R=requestAnimationFrame(D);const q=C.getElapsedTime(),K=Math.min(.1,C.getDelta());m.forEach((te,ge)=>{te.position.y=1+Math.sin(q*1.2+ge*.6)*.35}),x.x-=x.x*10*K,x.z-=x.z*10*K,v.z=Number(w.KeyW)-Number(w.KeyS),v.x=Number(w.KeyD)-Number(w.KeyA),v.lengthSq()>0&&v.normalize(),g.isLocked&&(v.lengthSq()>0&&(x.x-=v.x*400*K,x.z-=v.z*400*K),g.moveRight(-x.x*K),g.moveForward(-x.z*K),g.getObject().position.y=2),d.render(f,h)}D();function M(){const q=a.clientWidth,K=a.clientHeight;h.aspect=q/K,h.updateProjectionMatrix(),d.setSize(q,K)}window.addEventListener("resize",M);const w={};function X(q){w[q.code]=!0}function Z(q){w[q.code]=!1}const Q=a.querySelector(".crosshair");function b(){try{const q=new(window.AudioContext||window.webkitAudioContext),K=q.createOscillator(),te=q.createGain();K.type="square",K.frequency.value=1200,te.gain.value=.08,K.connect(te),te.connect(q.destination),K.start(),setTimeout(()=>{K.stop(),q.close()},80)}catch{}}function W(q=!1){Q&&(Q.classList.add("shoot"),setTimeout(()=>Q.classList.remove("shoot"),120),q&&(Q.classList.add("hit"),setTimeout(()=>Q.classList.remove("hit"),180)))}function $(){try{const q=new(window.AudioContext||window.webkitAudioContext),K=q.createOscillator(),te=q.createGain();K.type="sine",K.frequency.value=440,te.gain.value=.12,K.connect(te),te.connect(q.destination),K.start(),te.gain.exponentialRampToValueAtTime(1e-4,q.currentTime+.12),setTimeout(()=>{K.stop(),q.close()},140)}catch{}}function j(){b(),W(!1);const q=new hw,K=new k;h.getWorldDirection(K),q.set(h.position,K);const te=q.intersectObjects(m.filter(ge=>!ge.userData.hit));if(te.length>0){const ge=te[0].object;ge.userData.hit=!0,ge.material.color.set(8978312),n(Pe=>Pe+1),$(),W(!0),setTimeout(()=>{f.remove(ge)},500)}}function N(){i?j():g.lock()}d.domElement.addEventListener("click",N),document.addEventListener("keydown",X),document.addEventListener("keyup",Z),g.addEventListener("lock",()=>r(!0)),g.addEventListener("unlock",()=>r(!1));const F={ws:null},O=new Map;function L(q,K,te){let ge=O.get(q);if(!ge){const _e=new Fn(new Ts(.9,1.8,.5),new Fu({color:Math.random()*16777215}));return _e.position.set(K[0],K[1],K[2]),f.add(_e),O.set(q,_e),_e}return ge.position.set(K[0],K[1],K[2]),ge.rotation.set(te[0],te[1],te[2]),ge}function I(){if(!F.ws)try{const q=new WebSocket("ws://localhost:4001");F.ws=q,q.addEventListener("open",()=>{console.log("ws open"),o(!0)}),q.addEventListener("message",K=>{try{const te=JSON.parse(K.data.toString());if(te.type!=="welcome"){if(te.type==="state")L(te.from,te.pos,te.rot);else if(te.type==="playerLeft"){const ge=te.id,_e=O.get(ge);_e&&(f.remove(_e),O.delete(ge))}}}catch{}}),F.sendInterval=window.setInterval(()=>{if(!F.ws||F.ws.readyState!==WebSocket.OPEN)return;const K=g.getObject().position,te=g.getObject().rotation;F.ws.send(JSON.stringify({type:"state",pos:[K.x,K.y,K.z],rot:[te.x,te.y,te.z],score:e}))},250)}catch(q){console.warn("ws failed",q)}}function ce(){F.ws&&(F.sendInterval&&window.clearInterval(F.sendInterval),F.ws.close(),F.ws=null,o(!1),O.forEach(q=>f.remove(q)),O.clear())}return a.__connectWS=I,a.__disconnectWS=ce,()=>{cancelAnimationFrame(R),d.domElement.remove(),window.removeEventListener("resize",M),d.domElement.removeEventListener("click",N),document.removeEventListener("keydown",X),document.removeEventListener("keyup",Z)}},[]),oe.jsxs("section",{className:"fps",children:[oe.jsx("h2",{children:"FPS Demo (single-player prototype)"}),oe.jsx("p",{children:"This demo is a single-player FPS prototype — click the canvas to lock your pointer, left click to shoot targets."}),oe.jsxs("div",{className:"fps-stage",children:[oe.jsx("div",{ref:t,className:"fps-canvas"}),oe.jsxs("div",{className:"hud",children:[oe.jsx("div",{className:"crosshair"}),oe.jsxs("div",{className:"score",children:["Score: ",e]}),oe.jsx("div",{style:{position:"absolute",left:12,bottom:10},children:oe.jsx("button",{onClick:()=>{s?t.current&&t.current.__disconnectWS&&t.current.__disconnectWS():t.current&&t.current.__connectWS&&t.current.__connectWS()},children:s?"Disconnect (multiplayer)":"Enable multiplayer"})}),oe.jsx("div",{className:"lock-instruction",children:i?"Locked — click to shoot, Esc to unlock":"Click the canvas to lock pointer and start moving"})]})]}),oe.jsx("p",{className:"hint",children:"(Tip: WASD to move after pointer is locked)"})]})}function Mw(){const[t,e]=Ot.useState("home");return oe.jsxs("div",{className:"app",children:[oe.jsxs("header",{className:"topbar",children:[oe.jsx("h1",{children:"Hugh Games"}),oe.jsxs("nav",{children:[oe.jsx("button",{onClick:()=>e("home"),children:"Home"}),oe.jsx("button",{onClick:()=>e("cookie"),children:"Cookie Clicker"}),oe.jsx("button",{onClick:()=>e("fps"),children:"FPS Demo"})]})]}),oe.jsxs("main",{className:"content",children:[t==="home"&&oe.jsxs("section",{children:[oe.jsx("h2",{children:"Two prototypes — Cookie Clicker and FPS"}),oe.jsx("p",{children:"Pick a prototype from the navigation above to try it."})]}),t==="cookie"&&oe.jsx(tx,{}),t==="fps"&&oe.jsx(Sw,{})]}),oe.jsx("footer",{className:"footer",children:oe.jsx("small",{children:"Built with React + Vite · Local prototype"})})]})}Vg(document.getElementById("root")).render(oe.jsx(G_.StrictMode,{children:oe.jsx(Mw,{})}));
