import{i as H,a as I,h as y,b as p,N as it,e as xt,t as Ot,d as Pt,c as Y,f as q,g as A,j as K,m as Kt}from"./@vue.shared-D-bMerGS.js";/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let l;class At{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=l,!e&&l&&(this.index=(l.scopes||(l.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const s=l;try{return l=this,e()}finally{l=s}}}on(){l=this}off(){l=this.parent}stop(e){if(this._active){let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ce(t){return new At(t)}function at(t,e=l){e&&e.active&&e.effects.push(t)}function oe(){return l}function le(t){l&&l.cleanups.push(t)}let w;class V{constructor(e,s,n,r){this.fn=e,this.trigger=s,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,at(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,lt();for(let e=0;e<this._depsLength;e++){const s=this.deps[e];if(s.computed&&(Ct(s.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ut()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=g,s=w;try{return g=!0,w=this,this._runnings++,$(this),this.fn()}finally{k(this),this._runnings--,w=s,g=e}}stop(){var e;this.active&&($(this),k(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ct(t){return t.value}function $(t){t._trackId++,t._depsLength=0}function k(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ct(t.deps[e],t);t.deps.length=t._depsLength}}function ct(t,e){const s=t.get(e);s!==void 0&&e._trackId!==s&&(t.delete(e),t.size===0&&t.cleanup())}function ue(t,e){t.effect instanceof V&&(t=t.effect.fn);const s=new V(t,it,()=>{s.dirty&&s.run()});e&&(xt(s,e),e.scope&&at(s,e.scope)),(!e||!e.lazy)&&s.run();const n=s.run.bind(s);return n.effect=s,n}function fe(t){t.effect.stop()}let g=!0,W=0;const ot=[];function lt(){ot.push(g),g=!1}function ut(){const t=ot.pop();g=t===void 0?!0:t}function B(){W++}function U(){for(W--;!W&&F.length;)F.shift()()}function ft(t,e,s){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const n=t.deps[t._depsLength];n!==e?(n&&ct(n,t),t.deps[t._depsLength++]=e):t._depsLength++}}const F=[];function ht(t,e,s){B();for(const n of t.keys()){let r;n._dirtyLevel<e&&(r??(r=t.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(r??(r=t.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&F.push(n.scheduler)))}U()}const dt=(t,e)=>{const s=new Map;return s.cleanup=t,s.computed=e,s},C=new WeakMap,R=Symbol(""),G=Symbol("");function u(t,e,s){if(g&&w){let n=C.get(t);n||C.set(t,n=new Map);let r=n.get(s);r||n.set(s,r=dt(()=>n.delete(s))),ft(w,r)}}function v(t,e,s,n,r,i){const a=C.get(t);if(!a)return;let c=[];if(e==="clear")c=[...a.values()];else if(s==="length"&&p(t)){const f=Number(n);a.forEach((S,h)=>{(h==="length"||!H(h)&&h>=f)&&c.push(S)})}else switch(s!==void 0&&c.push(a.get(s)),e){case"add":p(t)?q(s)&&c.push(a.get("length")):(c.push(a.get(R)),K(t)&&c.push(a.get(G)));break;case"delete":p(t)||(c.push(a.get(R)),K(t)&&c.push(a.get(G)));break;case"set":K(t)&&c.push(a.get(R));break}B();for(const f of c)f&&ht(f,4);U()}function Ht(t,e){var s;return(s=C.get(t))==null?void 0:s.get(e)}const jt=Kt("__proto__,__v_isRef,__isVue"),_t=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(H)),tt=zt();function zt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const n=o(this);for(let i=0,a=this.length;i<a;i++)u(n,"get",i+"");const r=n[e](...s);return r===-1||r===!1?n[e](...s.map(o)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){lt(),B();const n=o(this)[e].apply(this,s);return U(),ut(),n}}),t}function Dt(t){const e=o(this);return u(e,"has",t),e.hasOwnProperty(t)}class pt{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,n){const r=this._isReadonly,i=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return i;if(s==="__v_raw")return n===(r?i?mt:Et:i?Rt:wt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=p(e);if(!r){if(a&&A(tt,s))return Reflect.get(tt,s,n);if(s==="hasOwnProperty")return Dt}const c=Reflect.get(e,s,n);return(H(s)?_t.has(s):jt(s))||(r||u(e,"get",s),i)?c:d(c)?a&&q(s)?c:c.value:I(c)?r?St(c):yt(c):c}}class gt extends pt{constructor(e=!1){super(!1,e)}set(e,s,n,r){let i=e[s];if(!this._isShallow){const f=m(i);if(!bt(n)&&!m(n)&&(i=o(i),n=o(n)),!p(e)&&d(i)&&!d(n))return f?!1:(i.value=n,!0)}const a=p(e)&&q(s)?Number(s)<e.length:A(e,s),c=Reflect.set(e,s,n,r);return e===o(r)&&(a?y(n,i)&&v(e,"set",s,n):v(e,"add",s,n)),c}deleteProperty(e,s){const n=A(e,s);e[s];const r=Reflect.deleteProperty(e,s);return r&&n&&v(e,"delete",s,void 0),r}has(e,s){const n=Reflect.has(e,s);return(!H(s)||!_t.has(s))&&u(e,"has",s),n}ownKeys(e){return u(e,"iterate",p(e)?"length":R),Reflect.ownKeys(e)}}class vt extends pt{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Nt=new gt,Vt=new vt,Wt=new gt(!0),Ft=new vt(!0),J=t=>t,j=t=>Reflect.getPrototypeOf(t);function L(t,e,s=!1,n=!1){t=t.__v_raw;const r=o(t),i=o(e);s||(y(e,i)&&u(r,"get",e),u(r,"get",i));const{has:a}=j(r),c=n?J:s?X:b;if(a.call(r,e))return c(t.get(e));if(a.call(r,i))return c(t.get(i));t!==r&&t.get(e)}function M(t,e=!1){const s=this.__v_raw,n=o(s),r=o(t);return e||(y(t,r)&&u(n,"has",t),u(n,"has",r)),t===r?s.has(t):s.has(t)||s.has(r)}function x(t,e=!1){return t=t.__v_raw,!e&&u(o(t),"iterate",R),Reflect.get(t,"size",t)}function et(t){t=o(t);const e=o(this);return j(e).has.call(e,t)||(e.add(t),v(e,"add",t,t)),this}function st(t,e){e=o(e);const s=o(this),{has:n,get:r}=j(s);let i=n.call(s,t);i||(t=o(t),i=n.call(s,t));const a=r.call(s,t);return s.set(t,e),i?y(e,a)&&v(s,"set",t,e):v(s,"add",t,e),this}function nt(t){const e=o(this),{has:s,get:n}=j(e);let r=s.call(e,t);r||(t=o(t),r=s.call(e,t)),n&&n.call(e,t);const i=e.delete(t);return r&&v(e,"delete",t,void 0),i}function rt(){const t=o(this),e=t.size!==0,s=t.clear();return e&&v(t,"clear",void 0,void 0),s}function O(t,e){return function(n,r){const i=this,a=i.__v_raw,c=o(a),f=e?J:t?X:b;return!t&&u(c,"iterate",R),a.forEach((S,h)=>n.call(r,f(S),f(h),i))}}function P(t,e,s){return function(...n){const r=this.__v_raw,i=o(r),a=K(i),c=t==="entries"||t===Symbol.iterator&&a,f=t==="keys"&&a,S=r[t](...n),h=s?J:e?X:b;return!e&&u(i,"iterate",f?G:R),{next(){const{value:T,done:N}=S.next();return N?{value:T,done:N}:{value:c?[h(T[0]),h(T[1])]:h(T),done:N}},[Symbol.iterator](){return this}}}}function _(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gt(){const t={get(i){return L(this,i)},get size(){return x(this)},has:M,add:et,set:st,delete:nt,clear:rt,forEach:O(!1,!1)},e={get(i){return L(this,i,!1,!0)},get size(){return x(this)},has:M,add:et,set:st,delete:nt,clear:rt,forEach:O(!1,!0)},s={get(i){return L(this,i,!0)},get size(){return x(this,!0)},has(i){return M.call(this,i,!0)},add:_("add"),set:_("set"),delete:_("delete"),clear:_("clear"),forEach:O(!0,!1)},n={get(i){return L(this,i,!0,!0)},get size(){return x(this,!0)},has(i){return M.call(this,i,!0)},add:_("add"),set:_("set"),delete:_("delete"),clear:_("clear"),forEach:O(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=P(i,!1,!1),s[i]=P(i,!0,!1),e[i]=P(i,!1,!0),n[i]=P(i,!0,!0)}),[t,s,e,n]}const[Yt,qt,Bt,Ut]=Gt();function z(t,e){const s=e?t?Ut:Bt:t?qt:Yt;return(n,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?n:Reflect.get(A(s,r)&&r in n?s:n,r,i)}const Jt={get:z(!1,!1)},Qt={get:z(!1,!0)},Xt={get:z(!0,!1)},Zt={get:z(!0,!0)},wt=new WeakMap,Rt=new WeakMap,Et=new WeakMap,mt=new WeakMap;function $t(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kt(t){return t.__v_skip||!Object.isExtensible(t)?0:$t(Ot(t))}function yt(t){return m(t)?t:D(t,!1,Nt,Jt,wt)}function he(t){return D(t,!1,Wt,Qt,Rt)}function St(t){return D(t,!0,Vt,Xt,Et)}function de(t){return D(t,!0,Ft,Zt,mt)}function D(t,e,s,n,r){if(!I(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const a=kt(t);if(a===0)return t;const c=new Proxy(t,a===2?n:s);return r.set(t,c),c}function Q(t){return m(t)?Q(t.__v_raw):!!(t&&t.__v_isReactive)}function m(t){return!!(t&&t.__v_isReadonly)}function bt(t){return!!(t&&t.__v_isShallow)}function _e(t){return Q(t)||m(t)}function o(t){const e=t&&t.__v_raw;return e?o(e):t}function pe(t){return Object.isExtensible(t)&&Pt(t,"__v_skip",!0),t}const b=t=>I(t)?yt(t):t,X=t=>I(t)?St(t):t;class It{constructor(e,s,n,r){this.getter=e,this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new V(()=>e(this._value),()=>E(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=o(this);return(!e._cacheable||e.effect.dirty)&&y(e._value,e._value=e.effect.run())&&E(e,4),Z(e),e.effect._dirtyLevel>=2&&E(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ge(t,e,s=!1){let n,r;const i=Y(t);return i?(n=t,r=it):(n=t.get,r=t.set),new It(n,r,i||!r,s)}function Z(t){var e;g&&w&&(t=o(t),ft(w,(e=t.dep)!=null?e:t.dep=dt(()=>t.dep=void 0,t instanceof It?t:void 0)))}function E(t,e=4,s){t=o(t);const n=t.dep;n&&ht(n,e)}function d(t){return!!(t&&t.__v_isRef===!0)}function te(t){return Tt(t,!1)}function ve(t){return Tt(t,!0)}function Tt(t,e){return d(t)?t:new ee(t,e)}class ee{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:o(e),this._value=s?e:b(e)}get value(){return Z(this),this._value}set value(e){const s=this.__v_isShallow||bt(e)||m(e);e=s?e:o(e),y(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:b(e),E(this,4))}}function we(t){E(t,4)}function Lt(t){return d(t)?t.value:t}function Re(t){return Y(t)?t():Lt(t)}const se={get:(t,e,s)=>Lt(Reflect.get(t,e,s)),set:(t,e,s,n)=>{const r=t[e];return d(r)&&!d(s)?(r.value=s,!0):Reflect.set(t,e,s,n)}};function Ee(t){return Q(t)?t:new Proxy(t,se)}class ne{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:n}=e(()=>Z(this),()=>E(this));this._get=s,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function me(t){return new ne(t)}function ye(t){const e=p(t)?new Array(t.length):{};for(const s in t)e[s]=Mt(t,s);return e}class re{constructor(e,s,n){this._object=e,this._key=s,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ht(o(this._object),this._key)}}class ie{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Se(t,e,s){return d(t)?t:Y(t)?new ie(t):I(t)&&arguments.length>1?Mt(t,e,s):te(t)}function Mt(t,e,s){const n=t[e];return d(n)?n:new re(t,e,s)}const be={GET:"get",HAS:"has",ITERATE:"iterate"},Ie={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};export{m as A,de as B,fe as C,Re as D,At as E,we as F,V as R,be as T,bt as a,Q as b,_e as c,ge as d,ut as e,Ee as f,me as g,oe as h,d as i,u as j,yt as k,v as l,pe as m,ve as n,le as o,lt as p,St as q,te as r,he as s,o as t,Lt as u,Se as v,ye as w,ce as x,Ie as y,ue as z};