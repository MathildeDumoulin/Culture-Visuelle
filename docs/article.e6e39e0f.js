parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XuAJ":[function(require,module,exports) {
drawOnScroll=function(){var e=document.querySelector(".myPath"),t=document.querySelector(".myPath2"),o=document.querySelector(".myPath3"),s=e.getTotalLength(),r=t.getTotalLength(),l=o.getTotalLength();e.style.strokeDasharray=s,t.style.strokeDasharray=r,o.style.strokeDasharray=l,e.style.strokeDashoffset=s,t.style.strokeDashoffset=r,o.style.strokeDashoffset=l,window.addEventListener("scroll",function(){var a=(document.body.scrollTop+document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight),n=s*(12*a),c=r*(12*a),y=l*(12*a);e.style.strokeDashoffset=s-n,t.style.strokeDashoffset=r-c,o.style.strokeDashoffset=l-y})},drawOnScroll();
},{}]},{},["XuAJ"], null)
//# sourceMappingURL=article.e6e39e0f.js.map