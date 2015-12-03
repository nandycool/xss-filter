/*
 * xssFilter 0.5.2
 * XSS (Cross-Site Script) Filter for Node.js & the browser
 * https://github.com/superRaytin/xssFilter
 *
 * Copyright 2015, Leon Shi
 * Released under the MIT license.
*/

!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){function c(a){this.config={matchStyleTag:!0,matchScriptTag:!0,removeMatchedTag:!0,escape:!1,blackListAttrs:{onclick:!0,ondblclick:!0,onchange:!0,onblur:!0,onfocus:!0,onkeydown:!0,onkeypress:!0,onkeyup:!0,onmousedown:!0,onmousemove:!0,onmouseover:!0,onmouseout:!0,onmouseup:!0,onselect:!0,onsubmit:!0,onreset:!0,onload:!0,onabort:!0,onerror:!0}},i.isObject(a)&&i.extend(this.config,a)}function d(a,b){var c=a,d=a;return function(){var a=o.exec(d);if(o.lastIndex=0,a){var e=a[1],f=e.match(l);d=d.replace(e,""),i.each(f,function(a){var d=i.str_trim(a.substr(0,a.indexOf("=")));b.blackListAttrs[d]&&(c=c.replace(a,""))}),arguments.callee()}}(),c}function e(a,b){var c;return c=b.removeMatchedTag?a.replace(j,""):a.replace(j,function(a){return h(a)})}function f(a,b){var c;return c=b.removeMatchedTag?a.replace(k,""):a.replace(k,function(a){return h(a)})}function g(a){var b=a.replace(m,function(a,b,c){return" "+b+"="+c}).replace(n,function(a,b,c,d,e,f,g){var h=b+"="+c;return g.length>0&&(h+=" "),h});return b=b.replace(/\t+\n/g,"").replace(/\s*>/gm,function(a){return a.replace(/\s+/,"")})}function h(a){return a.replace(/</g,"&lt;").replace(/>/g,"&gt;")}var i=a("./utils"),j=/<style[^>]*>[^<]*<\/style>/gim,k=/<script[^>]*>[^<]*<\/script>/gim,l=/([\w-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^ >]*))/gim,m=/\s*([\w-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^ >]*))/gim,n=/([\w-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^ >]*))(\s*)/gim,o=/<[a-zA-Z]+[a-zA-Z0-9]*((\s+([\w-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^ >]*)))+).*>/gim;c.prototype.options=function(a,b){var c=this.config;if(arguments.length)if("string"==typeof a){if("undefined"==typeof c[a])throw new Error(a+" is not a valid configuration name.");if("undefined"==typeof b)throw new Error("Please enter a value corresponding to the "+a);i.isObject(b)?i.extend(c[a],b):c[a]=b}else i.isObject(a)&&(b=a,i.extend(c,b))},c.prototype.filter=function(a){if(""==a)return a;var b=a,c=this.config;return c.matchStyleTag&&(b=e(b,c)),c.matchScriptTag&&(b=f(b,c)),b=d(b,c),b=g(b),c.escape&&(b=h(b)),b},"function"==typeof define&&define.amd?define(function(){return c}):"undefined"!=typeof window&&(window.xssFilter=c),b.exports=c},{"./utils":2}],2:[function(a,b){var c={each:function(a,b){var c=a.length;if(c)for(var d=0;c>d&&b.call(a[d],a[d],d)!==!1;d++);else if("undefined"==typeof c)for(var e in a)if(b.call(a[e],a[e],e)===!1)break},str_trim:function(a){return a.replace(/^\s+/g,"").replace(/\s+$/g,"")},arr_compact:function(a){var b=[];return c.each(a,function(a){""!=c.str_trim(a)&&b.push(a)}),b},isObject:function(a){return a===Object(a)},extend:function(a,b){c.each(b,function(b,c){a[c]=b})}};b.exports=c},{}]},{},[1]);