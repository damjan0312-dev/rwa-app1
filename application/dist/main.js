!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e,n){"use strict";n.r(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t){return"function"==typeof t}var u=!1,s={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;u=t},get useDeprecatedSynchronousErrorHandling(){return u}};function c(t){setTimeout(function(){throw t})}var a={closed:!0,next:function(t){},error:function(t){if(s.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete:function(){}},l=Array.isArray||function(t){return t&&"number"==typeof t.length};function d(t){return null!==t&&"object"==typeof t}function h(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}h.prototype=Object.create(Error.prototype);var f=h,p=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var n=this._parent,r=this._parents,i=this._unsubscribe,u=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var s=-1,c=r?r.length:0;n;)n.remove(this),n=++s<c&&r[s]||null;if(o(i))try{i.call(this)}catch(n){e=!0,t=n instanceof f?y(n.errors):[n]}if(l(u))for(s=-1,c=u.length;++s<c;){var a=u[s];if(d(a))try{a.unsubscribe()}catch(n){e=!0,t=t||[],n instanceof f?t=t.concat(y(n.errors)):t.push(n)}}if(e)throw new f(t)}},t.prototype.add=function(e){var n=e;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;(n=new t)._subscriptions=[r]}break;default:if(!e)return t.EMPTY;throw new Error("unrecognized teardown "+e+" added to Subscription.")}if(n._addParent(this)){var i=this._subscriptions;i?i.push(n):this._subscriptions=[n]}return n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.prototype._addParent=function(t){var e=this._parent,n=this._parents;return e!==t&&(e?n?-1===n.indexOf(t)&&(n.push(t),!0):(this._parents=[t],!0):(this._parent=t,!0))},t.EMPTY=((e=new t).closed=!0,e),t}();function y(t){return t.reduce(function(t,e){return t.concat(e instanceof f?e.errors:e)},[])}var b="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),m=function(t){function e(n,r,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=a;break;case 1:if(!n){o.destination=a;break}if("object"==typeof n){n instanceof e?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new g(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new g(o,n,r,i)}return o}return i(e,t),e.prototype[b]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this},e}(p),g=function(t){function e(e,n,r,i){var u,s=t.call(this)||this;s._parentSubscriber=e;var c=s;return o(n)?u=n:n&&(u=n.next,r=n.error,i=n.complete,n!==a&&(o((c=Object.create(n)).unsubscribe)&&s.add(c.unsubscribe.bind(c)),c.unsubscribe=s.unsubscribe.bind(s))),s._context=c,s._next=u,s._error=r,s._complete=i,s}return i(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;s.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=s.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;c(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};s.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),s.useDeprecatedSynchronousErrorHandling)throw t;c(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!s.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return s.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(c(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(m);var v="function"==typeof Symbol&&Symbol.observable||"@@observable";function _(){}function E(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:_}var w=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,i=function(t,e,n){if(t){if(t instanceof m)return t;if(t[b])return t[b]()}return t||e||n?new m(t,e,n):new m(a)}(t,e,n);if(r?i.add(r.call(i,this.source)):i.add(this.source||s.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),s.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){s.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,n=e.closed,r=e.destination,i=e.isStopped;if(n||i)return!1;t=r&&r instanceof m?r:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=S(e))(function(e,r){var i;i=n.subscribe(function(e){try{t(e)}catch(t){r(t),i&&i.unsubscribe()}},r,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[v]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:E(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=S(t))(function(t,n){var r;e.subscribe(function(t){return r=t},function(t){return n(t)},function(){return t(r)})})},t.create=function(e){return new t(e)},t}();function S(t){if(t||(t=s.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function I(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new x(t,e))}}var x=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new T(t,this.project,this.thisArg))},t}(),T=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.project=n,i.count=0,i.thisArg=r||i,i}return i(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(m);Object.prototype.toString;function B(t,e,n,r){return o(n)&&(r=n,n=void 0),r?B(t,e,n).pipe(I(function(t){return l(t)?r.apply(void 0,t):r(t)})):new w(function(r){!function t(e,n,r,i,o){var u;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var s=e;e.addEventListener(n,r,o),u=function(){return s.removeEventListener(n,r,o)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var c=e;e.on(n,r),u=function(){return c.off(n,r)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var a=e;e.addListener(n,r),u=function(){return a.removeListener(n,r)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var l=0,d=e.length;l<d;l++)t(e[l],n,r,i,o)}i.add(u)}(t,e,function(t){arguments.length>1?r.next(Array.prototype.slice.call(arguments)):r.next(t)},r,n)})}var A=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.closed||e.complete()}};function j(t,e){return new w(e?function(n){var r=new p,i=0;return r.add(e.schedule(function(){i!==t.length?(n.next(t[i++]),n.closed||r.add(this.schedule())):n.complete()})),r}:A(t))}var O=new w(function(t){return t.complete()});function D(t){return t?function(t){return new w(function(e){return t.schedule(function(){return e.complete()})})}(t):O}function H(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n,r=t[t.length-1];switch((n=r)&&"function"==typeof n.schedule?t.pop():r=void 0,t.length){case 0:return D(r);case 1:return r?j(t,r):function(t){var e=new w(function(e){e.next(t),e.complete()});return e._isScalar=!0,e.value=t,e}(t[0]);default:return j(t,r)}}const L="http://localhost:3000/fights";class P{constructor(t){this.arr=[],this.ID=t,this.element=0}fetchData(){return w.create(t=>{fetch(L).then(t=>t.json()).then(e=>{t.next(e)}).catch(e=>t.error(e))})}fillTheArray(){this.fetchData().subscribe(t=>{this.arr.push(new Q(fight.id,fight.fighter1,fight.fighter2,fight.type,fight.date,fight.venue,fight.analysis,this.ID))})}addIntoArray(t){this.arr.push(t),this.displayThemAll()}arrLength(){return this.element}getFights(){return w.create(t=>{this.fetchData().subscribe(e=>{e.forEach(e=>{t.next(new Q(e.id,e.fighter1,e.fighter2,e.type,e.date,e.venue,e.analysis,this.ID))})})})}displayThemAll(){const t=document.getElementById("showThem");t.innerHTML="",this.element=0;let e=this.getFights();console.log("VRACENI OBSERVER: "+e);e.subscribe(e=>{this.element++,e.displayFight(t)})}}class C{add(t){let e=document.getElementById("inp_fighter1").value,n=document.getElementById("inp_fighter2").value,r=document.getElementById("inp_venue").value,i=document.getElementById("inp_type").value,o=document.getElementById("inp_date").value,u=document.getElementById("inp_analysis").value,s=t.ID,c=new Q(15,e,n,i,o,r,u,s),a=t.arrLength()+1;console.log("ID: "+a),fetch("http://localhost:3000/fights",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,fighter1:e,fighter2:n,type:i,date:o,venue:r,analysis:u,mmaOrganization:s})}).then(e=>{console.log("ADDING SUCCESS!!!!"),t.addIntoArray(c)}).catch(t=>{console.log(t)})}update(t,e){let n=document.getElementById("inp_fighter1").value,r=document.getElementById("inp_fighter2").value,i=document.getElementById("inp_venue").value,o=document.getElementById("inp_type").value,u=document.getElementById("inp_date").value,s=document.getElementById("inp_analysis").value,c=t.ID;fetch("http://localhost:3000/fights/"+e,{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,fighter1:n,fighter2:r,type:o,date:u,venue:i,analysis:s,mmaOrganization:c})}).then(e=>{console.log("UPDATE SUCCESS!!!!"),t.displayThemAll()}).catch(t=>{console.log(t)})}delete(t){let e="http://localhost:3000/fights/"+t;console.log(),fetch(e,{method:"delete",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(t=>{console.log("DELETE SUCCESS!!!!"),new P(1).displayThemAll()}).catch(t=>console.log(t))}}var M=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(m),U=function(t){function e(e,n,r){var i=t.call(this)||this;return i.parent=e,i.outerValue=n,i.outerIndex=r,i.index=0,i}return i(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(m),k=function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,c),e}};function N(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var V=N(),Y=function(t){return function(e){for(var n=t[V]();;){var r=n.next();if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add(function(){n.return&&n.return()}),e}},z=function(t){return function(e){var n=t[v]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(e)}},F=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function R(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var J=function(t){if(t instanceof w)return function(e){return t._isScalar?(e.next(t.value),void e.complete()):t.subscribe(e)};if(t&&"function"==typeof t[v])return z(t);if(F(t))return A(t);if(R(t))return k(t);if(t&&"function"==typeof t[V])return Y(t);var e=d(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function G(t,e){if(!e)return t instanceof w?t:new w(J(t));if(null!=t){if(function(t){return t&&"function"==typeof t[v]}(t))return function(t,e){return new w(e?function(n){var r=new p;return r.add(e.schedule(function(){var i=t[v]();r.add(i.subscribe({next:function(t){r.add(e.schedule(function(){return n.next(t)}))},error:function(t){r.add(e.schedule(function(){return n.error(t)}))},complete:function(){r.add(e.schedule(function(){return n.complete()}))}}))})),r}:z(t))}(t,e);if(R(t))return function(t,e){return new w(e?function(n){var r=new p;return r.add(e.schedule(function(){return t.then(function(t){r.add(e.schedule(function(){n.next(t),r.add(e.schedule(function(){return n.complete()}))}))},function(t){r.add(e.schedule(function(){return n.error(t)}))})})),r}:k(t))}(t,e);if(F(t))return j(t,e);if(function(t){return t&&"function"==typeof t[V]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new w(e?function(n){var r,i=new p;return i.add(function(){r&&"function"==typeof r.return&&r.return()}),i.add(e.schedule(function(){r=t[V](),i.add(e.schedule(function(){if(!n.closed){var t,e;try{var i=r.next();t=i.value,e=i.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}}))})),i}:Y(t))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}var q=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new K(t,this.project))},t}(),K=function(t){function e(e,n){var r=t.call(this,e)||this;return r.project=n,r.index=0,r}return i(e,t),e.prototype._next=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=this.innerSubscription;r&&r.unsubscribe();var i=new U(this,void 0,void 0);this.destination.add(i),this.innerSubscription=function(t,e,n,r,i){if(void 0===i&&(i=new U(t,n,r)),!i.closed)return J(e)(i)}(this,t,e,n,i)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e}(M);class Q{constructor(t,e,n,r,i,o,u,s){this.id=t,this.fighter1=e,this.fighter2=n,this.type=r,this.date=i,this.venue=o,this.analysis=u,this.org=s}displayFight(t){let e=t,n=document.createElement("div");n.className="fight-div container-fluid mt-4",e.appendChild(n);let r="<h3>"+this.fighter1+" vs "+this.fighter2+"</h3> <b>VENUE:</b> "+this.venue+"<br> <b>DATE:</b> "+this.date+"<br> <b>ANALYSIS:</b> "+this.analysis+"<br> ";n.innerHTML=r;let i=document.createElement("button");i.className="btn btn-danger mt-2",i.id="btnUpdate",i.innerHTML="Update your analysis",i.value=this.id,n.appendChild(i);let o=document.createElement("button");o.className="btn btn-success ml-4 mt-2",o.innerHTML="Delete fight",o.id="btnDelete",o.value=this.id,n.appendChild(o);let u=document.getElementById("btnAdd"),s=document.getElementById("add-update");B(i,"click").pipe(function t(e,n){return"function"==typeof n?function(r){return r.pipe(t(function(t,r){return G(e(t,r)).pipe(I(function(e,i){return n(t,e,r,i)}))}))}:function(t){return t.lift(new q(e))}}(t=>H(B(u,"click").subscribe(()=>{this.clearInputs()})))).subscribe(t=>{u.innerHTML="Confirm changes",u.value=this.id,s.innerHTML="Update your analyze",this.fillInputs()}),B(o,"click").subscribe(t=>{(new C).delete(o.value)})}fillInputs(){document.getElementById("inp_fighter1").value=this.fighter1,document.getElementById("inp_fighter2").value=this.fighter2,document.getElementById("inp_type").value=this.type,document.getElementById("inp_date").value=this.date,document.getElementById("inp_venue").value=this.venue,document.getElementById("inp_analysis").value=this.analysis;document.getElementById("inp_fighter1").disabled=!0,document.getElementById("inp_fighter2").disabled=!0,document.getElementById("inp_type").disabled=!0,document.getElementById("inp_date").disabled=!0,document.getElementById("inp_venue").disabled=!0}clearInputs(){document.getElementById("inp_fighter1").value="",document.getElementById("inp_fighter2").value="",document.getElementById("inp_type").value="",document.getElementById("inp_date").value="",document.getElementById("inp_venue").value="",document.getElementById("inp_analysis").value="";document.getElementById("inp_fighter1").disabled=!1,document.getElementById("inp_fighter2").disabled=!1,document.getElementById("inp_type").disabled=!1,document.getElementById("inp_date").disabled=!1,document.getElementById("inp_venue").disabled=!1;let t=document.getElementById("btnAdd"),e=document.getElementById("add-update");t.innerHTML="Add fight",t.value=-1,e.innerHTML="Add fight",console.log(t)}}const W=new P(1);W.displayThemAll();document.getElementById("btnShow"),document.getElementById("fight-sec-left");const X=new C;B(document.getElementById("btnAdd"),"click").subscribe(()=>{"Add fight"===document.getElementById("btnAdd").innerHTML?X.add(W):"Confirm changes"===document.getElementById("btnAdd").innerHTML?X.update(W,document.getElementById("btnAdd").value):console.log("Error")},t=>{console.log("Error: "+t)})}});