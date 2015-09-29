!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3"),require("koto")):"function"==typeof define&&define.amd?define(["d3","koto"],e):"object"==typeof exports?exports.KotoBarChart=e(require("d3"),require("koto")):t.KotoBarChart=e(t.d3,t.Koto)}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){"use strict";var r=n(1)["default"],o=n(15)["default"],u=n(26)["default"],i=n(29)["default"],c=n(30)["default"];Object.defineProperty(e,"__esModule",{value:!0});var f=n(31),a=c(f),s=n(32),l=c(s),p=n(33),d=c(p),h=function(t){function e(t){i(this,e),r(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t);var n=this;d["default"].forEach(function(t){n.configs.set(t.name,t)}),n.x=a["default"].scale.linear().range([0,this.config("width")]),n.y=a["default"].scale.linear().domain([0,100]).rangeRound([0,this.config("height")]),n.layer("bars",this.base.append("g"),{dataBind:function(t){return this.selectAll("rect").data(t,function(t){return t.time})},insert:function(){return this.append("rect")}}).on("enter",function(){var t=this.data().length;this.attr("x",function(t,e){return n.x(e+1)-.5}).attr("y",function(t){return n.config("height")-n.y(t.value)-.5}).attr("width",n.config("width")/t).style("fill","steelBlue").attr("height",function(t){return n.y(t.value)})}).on("enter:transition",function(){this.duration(1e3).attr("x",function(t,e){return n.x(e)-.5})}).on("update:transition",function(){this.duration(1e3).attr("x",function(t,e){return n.x(e)-.5})}).on("exit:transition",function(){this.duration(1e3).attr("x",function(t,e){return n.x(e-1)-.5}).remove()})}return o(e,t),u(e,[{key:"preDraw",value:function(t){this.x.domain([0,t.length])}}]),e}(l["default"]);e["default"]=h,t.exports=e["default"]},function(t,e,n){"use strict";var r=n(2)["default"];e["default"]=function(t,e,n){for(var o=!0;o;){var u=t,i=e,c=n;f=s=a=void 0,o=!1,null===u&&(u=Function.prototype);var f=r(u,i);if(void 0!==f){if("value"in f)return f.value;var a=f.get;return void 0===a?void 0:a.call(c)}var s=Object.getPrototypeOf(u);if(null===s)return void 0;t=s,e=i,n=c,o=!0}},e.__esModule=!0},function(t,e,n){t.exports={"default":n(3),__esModule:!0}},function(t,e,n){var r=n(4);n(5),t.exports=function(t,e){return r.getDesc(t,e)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){var r=n(6);n(10)("getOwnPropertyDescriptor",function(t){return function(e,n){return t(r(e),n)}})},function(t,e,n){var r=n(7),o=n(9);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(8);t.exports=0 in Object("z")?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){t.exports=function(t,e){var r=n(11),o=(n(13).Object||{})[t]||Object[t],u={};u[t]=e(o),r(r.S+r.F*n(14)(function(){o(1)}),"Object",u)}},function(t,e,n){var r=n(12),o=n(13),u="prototype",i=function(t,e){return function(){return t.apply(e,arguments)}},c=function(t,e,n){var f,a,s,l,p=t&c.G,d=t&c.P,h=p?r:t&c.S?r[e]:(r[e]||{})[u],y=p?o:o[e]||(o[e]={});p&&(n=e);for(f in n)a=!(t&c.F)&&h&&f in h,a&&f in y||(s=a?h[f]:n[f],p&&"function"!=typeof h[f]?l=n[f]:t&c.B&&a?l=i(s,r):t&c.W&&h[f]==s?!function(t){l=function(e){return this instanceof t?new t(e):t(e)},l[u]=t[u]}(s):l=d&&"function"==typeof s?i(Function.call,s):s,y[f]=l,d&&((y[u]||(y[u]={}))[f]=s))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},function(t,e){var n="undefined",r=t.exports=typeof window!=n&&window.Math==Math?window:typeof self!=n&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var n=t.exports={version:"1.2.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){"use strict";var r=n(16)["default"],o=n(18)["default"];e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=r(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o?o(t,e):t.__proto__=e)},e.__esModule=!0},function(t,e,n){t.exports={"default":n(17),__esModule:!0}},function(t,e,n){var r=n(4);t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){t.exports={"default":n(19),__esModule:!0}},function(t,e,n){n(20),t.exports=n(13).Object.setPrototypeOf},function(t,e,n){var r=n(11);r(r.S,"Object",{setPrototypeOf:n(21).set})},function(t,e,n){var r=n(4).getDesc,o=n(22),u=n(23),i=function(t,e){if(u(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n(24)(Function.call,r(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(u){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(22);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(25);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(27)["default"];e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),e.__esModule=!0},function(t,e,n){t.exports={"default":n(28),__esModule:!0}},function(t,e,n){var r=n(4);t.exports=function(t,e,n){return r.setDesc(t,e,n)}},function(t,e){"use strict";e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e.__esModule=!0},function(t,e){"use strict";e["default"]=function(t){return t&&t.__esModule?t:{"default":t}},e.__esModule=!0},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=[{name:"height",description:"The height of the chart.",value:500,type:"number",units:"px",category:"Size",getter:function(){return this.value},setter:function(t){return t}},{name:"width",description:"The widthj of the chart.",value:800,units:"px",type:"number",category:"Size"}];e["default"]=n,t.exports=e["default"]}])});
//# sourceMappingURL=chart.js.map