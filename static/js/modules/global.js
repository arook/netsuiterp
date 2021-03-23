"use strict";var serviceImgRemotePath=location.origin,serviceImgLocalPath=location.origin,servicePath=location.origin,serviceProjectPath=location.origin,chars=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",script=document.createElement("script");script.type="text/jacascript",script.src="../lib/jquery-3.5.1.min.js",$("body").append(script),function(s){var u={debounce:function(n,r){var o=null;return function(){var t=this,e=arguments;clearTimeout(o),o=setTimeout(function(){n.apply(t,e)},r)}},throttle:function(r,o){var i,a;return o||(o=250),function(){var t=this,e=arguments,n=+new Date;i&&n<i+o?(clearTimeout(a),a=setTimeout(function(){i=n,r.apply(t,e)},o)):(i=n,r.apply(t,e))}},utf16toEntities:function(t){var e=!1;return t=t.replace(/[\ud800-\udbff][\udc00-\udfff]/g,function(t){return e=!0,2===t.length?"&#"+(1024*(t.charCodeAt(0)-55296)+65536+t.charCodeAt(1)-56320)+";":t}),e},checkPhone:function(t){return/^0\d{2,3}-\d{7,8}(-\d{1,6})?$/.test(t)},checkMobile:function(t){return/^0?1[1|2|3|4|5|6|7|8|9][0-9]\d{8}$/.test(t)},formatMobile:function(t){var e=t.length;if(!(t.length<4||12==t.length))return t=e<8?t.substr(0,3)+" "+t.substr(3):t.substr(0,3)+" "+t.substr(3,4)+" "+t.substr(7)},forMatterEmoji:function(t){var e=t.value;e.length;e=e.replace(/[^a-zA-Z0-9_#-——\u4e00-\u9fa5\（\）]+$/g,""),t.value=e},getUrlParaBase64Val:function(t){var e=u.getQueryString(t);if(!e)return!1;try{e=JSON.parse(u.decode64(e))}catch(t){return console.warn(t),!1}return e},getHtmlValueBase64Val:function(t){var e=$("#"+t).val();if(!e||0===e.length)return!1;try{e=JSON.parse(u.decode64(e))}catch(t){return console.warn(t),!1}return e},getUDBase64Val:function(t){var e=$("#"+domId).val();if(!e||0===e.length)return!1;try{e=JSON.parse(u.decode64(e))}catch(t){return console.warn(t),!1}return e},isEmptyObject:function(t){for(var e in t)return!1;return!0},isEmptyValue:function(t){for(var e in t)if(!t[e])return!1;return!0},getQueryData:function(t){return $("#"+t).serializeArray().reduce(function(t,e){return e.value&&(t[e.name]=e.value),t},{})},getQueryDataKey:function(t){return $("#"+t).serializeArray().reduce(function(t,e){return t[e.name]=e.value,t},{})},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=s.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},encryptStr:function(t){for(var e=String.fromCharCode(t.charCodeAt(0)+t.length),n=1;n<t.length;n++)e+=String.fromCharCode(t.charCodeAt(n)+t.charCodeAt(n-1));return escape(e)},decodeStr:function(t){t=unescape(t);for(var e=String.fromCharCode(t.charCodeAt(0)-t.length),n=1;n<t.length;n++)e+=String.fromCharCode(t.charCodeAt(n)-e.charCodeAt(n-1));return e},renderSelect:function(n,t,e,r,o){$.each(t,function(t,e){$("#"+n).append("<option value='"+e[r]+"'>"+e[o]+"</option>")}),e&&e.render("select")},generateMixed:function(t){for(var e="",n=0;n<t;n++){var r=Math.ceil(35*Math.random());e+=chars[r]}return e},input_readonly_color:function(){$("input,textarea").each(function(t,e){null!=$(this).attr("readonly")&&$(this).css({background:"#eee"})})},creat_overlay:function(t,e){("show"===t&&$("body").append('<div class="overlay_db" id="overlay_db" style="display: block;position: fixed;z-index: 999;top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0, 0, 0, .5)"></div>'),"hide"===t&&$("#overlay_db").remove(),"function"==typeof e)&&e($("#overlay_db"))},encode64:function(t){var e=CryptoJS.enc.Utf8.parse(t);return e=CryptoJS.enc.Base64.stringify(e)},decode64:function(t){var e=CryptoJS.enc.Base64.parse(t);return e=e.toString(CryptoJS.enc.Utf8)},setCookie:function(t,e,n){n=n||365;var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+r.toGMTString()+";path=/"},getCookie_old:function(t){var e="",n=t+"=";if(0<document.cookie.length){var r=document.cookie.indexOf(n);if(-1!=r){r+=n.length;var o=document.cookie.indexOf(";",r);-1==o&&(o=document.cookie.length),e=unescape(document.cookie.substring(r,o))}}return e},getCookie:function(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):null},delCookie:function(t){var e=new Date;e.setTime(e.getTime()-1);var n=getCookie(t);null!=n&&(document.cookie=t+"="+n+";expires="+e.toGMTString()+";path=/")},ajax_go:function(e){e.noNeedLoading||iakit.loading.show();$.each([],function(t,e){-1!=url.indexOf(e)&&!0}),$.ajax({type:e.type||"post",async:e.async,url:e.url||"",data:e.data||"",beforeSend:function(){},complete:function(){e.noNeedLoading||iakit.loading.hide()},error:function(t){iakit.toast.showTop("网络异常",1e3)},dataType:e.dataType||"json",success:function(t){"function"==typeof e.callBack&&e.callBack(t)}})},checkLogin:function(){var n=location.href,r=!1;if($.each(["login","pdfshow"],function(t,e){-1!=n.indexOf(e)&&(r=!0)}),!r){var t=u.getCookie("token");if(t){var e={noNeedLoading:!1,url:"/cust/onLine.action",type:"post",data:{token:t},async:!1,callBack:function(t){"4013"===t.code&&iakit.toast.showTop("您未登录，现在带您去登录~",3e3,function(){location.href="/h5/page/login/loginReg.html?type=1&re_url="+n})}};u.ajax_go(e)}else location.href="/h5/page/login/loginReg.html?type=1&re_url="+n}},ajax:function(n,t,e,r,o,i){var a=!1,c=!1;$.each(["getImgCode.htm","getSmsCode.htm","validateImgCodeAndGetSmsCode.htm","loginAndRegister.htm","setLoginPwd.htm","appointmentUser.htm","findPlatformList.htm","selectedPlatform.htm","conversion_page.htm","loan/allTermR360.htm"],function(t,e){-1!=n.indexOf(e)&&(c=a=!0)}),a||(t.data.onlineId=u.decode64(u.getCookie("o_d")),t.data.userId=u.decode64(u.getCookie("u_d"))),-1==location.href.indexOf("loginReg.htm")&&-1==location.href.indexOf("wxRePayment_login.htm")||(c=!0),$.ajax({type:"post",async:r||"true",url:n,data:{viewData:u.encode64(JSON.stringify(t))},beforeSend:function(){o||iakit.loading.show()},complete:function(){o||iakit.loading.hide()},error:function(t){iakit.toast.showTop("网络异常",1e3),i&&u.errorPage("网络异常","请稍后重试！",1)},dataType:"text",success:function(t){t=u.decode64(t);try{t=JSON.parse(t)}catch(t){return console.warn(t),console.error("debug:返回的是错误的JSON格式字符串"),!1}try{if("code"in t&&"-4444"==t.code&&!c)return iakit.toast.showCenter("您未登录，现在带您去登录~",1e3,function(){iakit.loading.show(),setTimeout(function(){iakit.loading.hide(),s.location.href=parseH5URL(URL_H5.login.loginReg)},500)}),!1}catch(t){console.warn("error===",t)}"function"==typeof e&&e(t)}})},debug:function(t){if(t)new VConsole;else s.console&&s.console.log&&(console.log=function(){})},GoBackURL:function(t){var e;e={title:"title",url:"#"},s.history.pushState(e,"title","#"),e={title:"title",url:""},s.history.pushState(e,"title",""),s.addEventListener("popstate",function(){s.location.href=t},!1)},formatCurrencySymbol:function(t){t=t.toString().replace(/\$|\,/g,""),isNaN(t)&&(t="0");var e=t==(t=Math.abs(t)),n=(t=Math.floor(100*t+.50000000001))%100;t=Math.floor(t/100).toString(),n<10&&(n="0"+n);for(var r=0;r<Math.floor((t.length-(1+r))/3);r++)t=t.substring(0,t.length-(4*r+3))+","+t.substring(t.length-(4*r+3));return"¥"+(e?"":"-")+t+"."+n},testPwd:function(t){if(!/^\d{6}$/.test(t))return!1;if(/^(\d)\1+$/.test(t))return!1;var e=t.replace(/\d/g,function(t,e){return parseInt(t)-e});return!/^(\d)\1+$/.test(e)&&(e=t.replace(/\d/g,function(t,e){return parseInt(t)+e}),!/^(\d)\1+$/.test(e))},getParameter:function(){var t=location.search,e=new Object;if(-1!=t.indexOf("?")){var n=t.substr(1);strs=n.split("&");for(var r=0;r<strs.length;r++)e[strs[r].split("=")[0]]=unescape(strs[r].split("=")[1])}return e},init:function(){}};u.init(),s.Global=u}(window);var listenerBackHandler={param:{isRun:!1},listenerBack:function(e){window.history.pushState({title:"title",url:"#"},"title","#"),window.addEventListener("popstate",function(t){listenerBackHandler.param.isRun&&(window.location.href=e)},!1)},initBack:function(t){window.addEventListener("pageshow",function(){listenerBackHandler.param.isRun=!1,setTimeout(function(){listenerBackHandler.param.isRun=!0},1e3),listenerBackHandler.listenerBack(t)})},backPages:function(e){function n(){window.history.pushState({title:"title",url:"#"},"title","#")}(e=null==e?{}:e).info=null==e.info?"认证尚未完成，建议您继续操作":e.info,e.btnContinue=null==e.btnContinue?"退出认证":e.btnContinue,e.btnCancel=null==e.btnCancel?"继续认证":e.btnCancel,e.href=null==e.href?parseH5URL(URL_H5.consumptionStage.accredit_borrowIntention):e.href,e.outBtnIndex=null==e.outBtnIndex?0:e.outBtnIndex,n(),window.addEventListener("popstate",function(t){mui.confirm(e.info,"提示",[e.btnContinue,e.btnCancel],function(t){e.outBtnIndex==t.index&&setTimeout(function(){window.location.href=e.href},500)}),n()},!1)}},CryptoJS=CryptoJS||function(c,t){var e={},n=e.lib={},r=n.Base=function(){function n(){}return{extend:function(t){n.prototype=this;var e=new n;return t&&e.mixIn(t),e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.$super.extend(this)}}}(),s=n.WordArray=r.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||i).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes;t=t.sigBytes;if(this.clamp(),r%4)for(var o=0;o<t;o++)e[r+o>>>2]|=(n[o>>>2]>>>24-o%4*8&255)<<24-(r+o)%4*8;else if(65535<n.length)for(o=0;o<t;o+=4)e[r+o>>>2]=n[o>>>2];else e.push.apply(e,n);return this.sigBytes+=t,this},clamp:function(){var t=this.words,e=this.sigBytes;t[e>>>2]&=4294967295<<32-e%4*8,t.length=c.ceil(e/4)},clone:function(){var t=r.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],n=0;n<t;n+=4)e.push(4294967296*c.random()|0);return s.create(e,t)}}),o=e.enc={},i=o.Hex={stringify:function(t){for(var e=t.words,n=(t=t.sigBytes,[]),r=0;r<t;r++){var o=e[r>>>2]>>>24-r%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return s.create(n,e/2)}},a=o.Latin1={stringify:function(t){for(var e=t.words,n=(t=t.sigBytes,[]),r=0;r<t;r++)n.push(String.fromCharCode(e[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return s.create(n,e)}},u=o.Utf8={stringify:function(t){try{return decodeURIComponent(escape(a.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return a.parse(unescape(encodeURIComponent(t)))}},l=n.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=s.create(),this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var e=this._data,n=e.words,r=e.sigBytes,o=this.blockSize,i=r/(4*o);t=(i=t?c.ceil(i):c.max((0|i)-this._minBufferSize,0))*o,r=c.min(4*t,r);if(t){for(var a=0;a<t;a+=o)this._doProcessBlock(n,a);a=n.splice(0,t),e.sigBytes-=r}return s.create(a,r)},clone:function(){var t=r.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});n.Hasher=l.extend({init:function(){this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize(),this._hash},clone:function(){var t=l.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:16,_createHelper:function(n){return function(t,e){return n.create(e).finalize(t)}},_createHmacHelper:function(n){return function(t,e){return f.HMAC.create(n,e).finalize(t)}}});var f=e.algo={};return e}(Math);!function(){var t=CryptoJS,s=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp();t=[];for(var o=0;o<n;o+=3)for(var i=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<n;a++)t.push(r.charAt(i>>>6*(3-a)&63));if(e=r.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var e=(t=t.replace(/\s/g,"")).length,n=this._map;(r=n.charAt(64))&&(-1!=(r=t.indexOf(r))&&(e=r));for(var r=[],o=0,i=0;i<e;i++)if(i%4){var a=n.indexOf(t.charAt(i-1))<<i%4*2,c=n.indexOf(t.charAt(i))>>>6-i%4*2;r[o>>>2]|=(a|c)<<24-o%4*8,o++}return s.create(r,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),window.addEventListener("pageshow",function(t){t.persisted&&location.reload()});