!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/cvssv3.0-base-calculator-addin/",n(n.s=331)}({331:function(e,t,n){"use strict";var r,o=(r=u(regeneratorRuntime.mark(function e(t,n){var r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Word.run(function(){var e=u(regeneratorRuntime.mark(function e(o){var u,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(u=o.document.getSelection()).insertText(t,"Replace"),i='<span style="display:none">'+n+"/span>",u.insertHtml(i,"After"),e.next=6,o.sync();case 6:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e,this)})),function(e,t){return r.apply(this,arguments)});function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,u){try{var i=t[o](u),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}("next")})}}Office.initialize=function(e){},setTimeout(function(){var e=new MutationObserver(function(t){var n=document.createElement("button");n.innerHTML="Insert Value",n.setAttribute("id","ins-btn"),n.addEventListener("click",function(){var e=document.querySelector("span.score"),t=document.querySelector("a.vector");o(e.innerText,t.innerText)}),document.getElementById("cvssboard").appendChild(n),e.disconnect()}),t=document.querySelector("span.score");e.observe(t,{characterData:!0,subtree:!0})},500)}});