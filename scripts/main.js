<<<<<<< HEAD
function makeTimestamp(e){return e+=(new Date).getTime()}function changeLoadingHTML(e){return $(".loading").data("lasthtml",$(".loading").html()).html(e)}function fitImg(e){var t=e.data.target.find("img"),n=t.height(),o=t.width(),r=$(window).height();t.css("margin-left","-"+(o/2+$(".closer").width()/2)+"px").parent().css("margin",(r-n)/2+"px auto").parent().find(".closer").hide().css("margin-top",(r-n)/2-10+"px").show()}function removeImage(e){if($(window).off("resize",fitImg).off("orientationchange",fitImg),e){var t=e.find("img");preparent=t.data("preparent"),preCSS=t.data("preCSS"),after=t.data("after"),console.log(preparent,preCSS,after),preparent&&t.insertBefore(after).css("margin",preCSS),e.stop().fadeOut(1e3).delay(1e3).remove()}}function displayImage(e){var t=$("<span></span>").addClass("helper"),n="string"!=typeof e?$(e):$(document.createElement("img")).addClass("trans").attr("src",e);n.data("preCSS",n.css("margin")).data("preparent",n.parent()).data("after",n.next()).appendTo(t).on("load",{target:t},fitImg);var o=$("<div>c  l  o  s  e</div>").addClass("closer").addClass("trans").css("margin-top","52px").on("click",function(){removeImage(r)}),r=$("<div></div>").addClass("fullSizeImageContainer").addClass("fullcontainer").addClass("trans").addClass("image").addClass("noBounce").append(o).append(t).appendTo("body").one("dblclick",function(){removeImage(r)}).one("contextmenu",function(){removeImage(r)})}function stopProp(e){return e.preventDefault(),e.stopPropagation(),e}function makeid(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;5>n;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function checkConnection(){if(navigator.connection&&navigator.connection.type){var e=navigator.connection.type,t={};return Connection&&(t[Connection.UNKNOWN]=!1,t[Connection.ETHERNET]=!0,t[Connection.WIFI]=!0,t[Connection.CELL_2G]=!0,t[Connection.CELL_3G]=!0,t[Connection.CELL_4G]=!0,t[Connection.CELL]=!0,t[Connection.NONE]=!1),t[e]?!0:navigator.onLine}return-1!==Object.keys(navigator).indexOf("onLine")?navigator.onLine:!0}function decodeFromBase64(e){return atob(e)}function dataURItoBlob(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],o=new ArrayBuffer(t.length),r=new Uint8Array(o),a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return new Blob([o],{type:n})}function autosize(){}function showloading(){$(".appName").addClass("loading")}function hideloading(){$(".appName.loading").removeClass("loading")}function switch_tab(e){for(var t=document.getElementsByTagName("div"),n=0;n<t.length;n++){var o=t[n];"model_container"==o.className&&(o.style.display=o.id=="Data_"+e?"block":"none")}var r=document.getElementsByTagName("td");for(n=0;n<r.length;n++){var a=r[n];if("selected"==a.className){a.className="tab";break}}document.getElementById("Tab_"+e).className="selected"}function toggle_extra_info(){for(var e=document.getElementsByTagName("tr"),t=0;t<e.length;t++){var n=e[t];"extra_info"==n.id&&(n.style.display="none"==n.style.display?"":"none")}for(var o=document.getElementsByName("additional_data"),t=0;t<o.length;t++){var r=o[t];r.innerHTML="Show Additional Data"==r.innerHTML?"Hide Additional Data":"Show Additional Data"}}function switch_extended(){var e=document.getElementById("Extended_Native"),t=document.getElementById("Extended_Hourly"),n=document.getElementById("switch_extended");"block"==e.style.display?(e.style.display="none",t.style.display="block",n.innerHTML="Fewer Hours",document.cookie="qlvt=1;expires=Tue, 31 Dec 2030 00:00:00 UTC"):(e.style.display="block",t.style.display="none",n.innerHTML="More Hours",document.cookie="qlvt=0;expires=Tue, 31 Dec 2030 00:00:00 UTC")}function loadMeteogram(e,t){showloading(),e=$(e),$.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22"+encodeURIComponent(t)+"%22&format=xml'&callback=?",function(t){if(t.results[0]){var t=($('<div class="closer">close</div>').on("click",function(){$(this).closest(".removeme").remove()}),filterData(t.results[0])),n=$(t).find(".meteogram").css("width","100%");n.find(" > :not(table, .heading, .model_container)").remove(),n.find("a[href]:not([href^=javascript])").attr("target","_blank").each(function(){$(this).attr("href","http://www.iwindsurf.com/"+$(this).attr("href"))}),displayImage(n)}else{var o="<p>Error: could not load the page.</p>";e.html(o)}hideloading()})}function filterData(e){return e=e.replace(/<?\/body[^>]*>/g,""),e=e.replace(/[\r|\n]+/g,""),e=e.replace(/<--[\S\s]*?-->/g,""),e=e.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,""),e=e.replace(/<script[^>]*>[\S\s]*?<\/script>/g,""),e=e.replace(/<script.*\/>/,""),e=e.replace(/src="/g,'src="http://www.iwindsurf.com/')}!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=n.length,r=window.console=window.console||{};o--;)e=n[o],r[e]||(r[e]=t)}(),$(".loading").data("inithtml",$(".loading").html()),window.bouncefix&&bouncefix.add("noBounce"),window.$&&($(".loading").bind("dragstart",stopProp).bind("selectstart",stopProp),$.fn.insertAt=function(e,t){var n=this.children().clone(!0),o=$.makeArray(n);return o.splice(t,0,e),this.empty().append(o),this},$.support.cors=!0,$.fn.css2=jQuery.fn.css,$.fn.css=function(){if(arguments.length)return jQuery.fn.css2.apply(this,arguments);for(var e=["font-family","font-size","font-weight","font-style","color","text-transform","text-decoration","letter-spacing","word-spacing","line-height","text-align","vertical-align","direction","background-color","background-image","background-repeat","background-position","background-attachment","opacity","width","height","top","right","bottom","left","margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","position","display","visibility","z-index","overflow-x","overflow-y","white-space","clip","float","clear","cursor","list-style-image","list-style-position","list-style-type","marker-offset"],t=e.length,n={},o=0;t>o;o++)n[e[o]]=jQuery.fn.css2.call(this,e[o]);return n},$.each(["show","hide"],function(e,t){var n=$.fn[t];$.fn[t]=function(){return this.trigger(t),n.apply(this,arguments)}})),Object.keys||(Object.keys=function(){"use strict";var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=n.length;return function(r){if("object"!=typeof r&&("function"!=typeof r||null===r))throw new TypeError("Object.keys called on non-object");var a,i,s=[];for(a in r)e.call(r,a)&&s.push(a);if(t)for(i=0;o>i;i++)e.call(r,n[i])&&s.push(n[i]);return s}}()),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(void 0===this||null===this)throw new TypeError('"this" is null or not defined');var n=this.length>>>0;for(t=+t||0,1/0===Math.abs(t)&&(t=0),0>t&&(t+=n,0>t&&(t=0));n>t;t++)if(this[t]===e)return t;return-1}),Array.prototype.some||(Array.prototype.some=function(e){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var o=arguments.length>=2?arguments[1]:void 0,r=0;n>r;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n,o;if(null==this)throw new TypeError(" this is null or not defined");var r=Object(this),a=r.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(t&&(n=t),o=0;a>o;){var i;o in r&&(i=r[o],e.call(n,i,o,r)),o++}});var mimes={png:"image/png",jpg:"image/jpeg",gif:"image/gif"},vidimgs={"OB-Kelly's Cove":function(){return $("<img src='http://ob-kc.com/images/current_sm.jpg?"+(new Date).getTime()+"'/>").on("click",function(){displayImage(this)}).css("cursor","pointer")}},app=window.app=app||{},vendorprefix=function(){var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1],n="WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1];return{dom:n,lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.substr(1)}}();!function(e,t,n,o){"use strict";function r(){var e=u.getBounds();return d+"&minLat="+e.getSouth()+"&minLon="+e.getWest()+"&maxLat="+e.getNorth()+"&maxLon="+e.getEast()+"&zoomLevel="+u.getZoom()}function a(e){e=e||o.stations,e&&u.removeLayer(e)}function i(){return n.layerGroup().addTo(u)}function s(t){if("abort"!==t.statusText){a();var r=o.stations=i(),s=JSON.parse(JSON.parse(t.responseText).error.split("//Total time:")[0]);console.log(s[0]),$.each(s,function(){var t=this.sensorReadings.length>0?this.sensorReadings[0].direction:"",o=this.sensorReadings.length>0?this.sensorReadings[0].average:"",a=this.sensorReadings.length>0?this.sensorReadings[0].gust:"",i=this.sensorReadings.length>0?this.sensorReadings[0].temperature:"",s=this.fullName||"",l=this.fullName||"",c=t+(o?", avg: "+o:"")+(a?", gust: "+a:"");if(c){var d,p=2*(parseFloat(o)||1),f=a?2*parseFloat(a):p;e.vidimgs&&(d=vidimgs[this.id]||vidimgs[this.fullName]);var g,m=1/Math.abs(p-f)*10,h='<div class="station" title="'+l+" "+(c||"no data")+'" style="font-size:'+p+"px; transition: all "+m+'s linear;">&#10148;</div>';(-1!==t.indexOf("E")||"N"===t)&&(g="green"),-1!==t.indexOf("W")&&(g="red"),g||(g="gray");var v=n.divIcon({html:h,iconsSize:[p,p],iconAnchor:[p/2-3,p],className:["direction",t,g].join(" ")}),y="http://www.iwindsurf.com/windandwhere.iws?regionID=1669&ISection=Forecast+Graphs&location_id="+this.id,w=$('<div class="fullcontainer meteogram-container"></div>'),b=$('<a class="showmeteogram">Show Meteogram</a>').on("click",function(){loadMeteogram(w,y)}),x=$("<div><h3>"+s+"</h3></div>").append(c).append(i?"<br/>"+i+"&deg;":"").append(d?d instanceof Function?d():d:"").append('<a target="_blank" href="'+y+'"> forecast </a>').append(b),C=n.marker([this.baseLat,this.baseLon],{icon:v}).bindPopup(x[0]).on("mouseover",function(){this.infocus=!0;$(this._icon).find("div").css("text-shadow",g+" "+(f-p)+"px 0px 0px")}).on("mouseout",function(){this.infocus=!1;$(this._icon).find("div").css("text-shadow","")}).addTo(r);p!==f&&setTimeout(function(){var e=setInterval(function(){(!C||C&&!u.hasLayer(C))&&clearInterval(e);var t;C.infocus||(t=C._gusted||0),t=2===t?0:t+=1,$(C._icon).find("div").css("text-shadow",-1!==[2,0].indexOf(t)?"transparent "+(f-p)*t+"px 0px 0px":g+" "+(f-p)*t+"px 0px 0px"),C._gusted=t},1e3*m)},1e3*m)}}),hideloading()}}function l(e){o.ajaxCall&&o.ajaxCall.abort(),o.ajaxCall=$.get(p+encodeURIComponent(e),s).success(function(e){s(e)}).error(function(e){s(e)})}function c(){return u.hasPopup?!1:(showloading(),void l(r()))}var d=(vendorprefix.css+"transform","http://www.iwindsurf.com/json/dyn_weatherstation.php?region_id=1669&units=mph&tunits=F"),p="https://jsonp.nodejitsu.com/?url=",u=o.map=n.map("map",{center:[37.83853,-122.39182],zoom:10,minZoom:6}).on("popupopen",function(){this.hasPopup=!0}).on("popupclose",function(){this.hasPopup=!1}).on("moveend",c).on("zoomend",c);n.control.locate().addTo(u);var f={position:"topleft",showResultIcons:!0},g=n.Control.geocoder(f).addTo(u);g.markGeocode=function(e){var t=e.bbox;u.fitBounds(t)},c();new n.tileLayer("http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png",{minZoom:0,maxZoom:20,maxNativeZoom:18,attribution:'Map data © <a href="http://www.openstreetmap.org">OpenStreetMap contributors</a>'}).addTo(u);o.reloadInterval=setInterval(c,6e4)}(window,document,L,app);
=======
function makeTimestamp(e){return e+=(new Date).getTime()}function changeLoadingHTML(e){return $(".loading").data("lasthtml",$(".loading").html()).html(e)}function fitImg(e){var t=e.data.target.find("img"),n=t.height(),o=t.width(),r=$(window).height();t.css("margin-left","-"+(o/2+$(".closer").width()/2)+"px").parent().css("margin",(r-n)/2+"px auto").parent().find(".closer").hide().css("margin-top",(r-n)/2-10+"px").show()}function removeImage(e){if($(window).off("resize",fitImg).off("orientationchange",fitImg),e){var t=e.find("img");preparent=t.data("preparent"),preCSS=t.data("preCSS"),after=t.data("after"),console.log(preparent,preCSS,after),preparent&&t.insertBefore(after).css("margin",preCSS),e.stop().fadeOut(1e3).delay(1e3).remove()}}function displayImage(e){var t=$("<span></span>").addClass("helper"),n="string"!=typeof e?$(e):$(document.createElement("img")).addClass("trans").attr("src",e);n.data("preCSS",n.css("margin")).data("preparent",n.parent()).data("after",n.next()).appendTo(t).on("load",{target:t},fitImg);var o=$("<div>c  l  o  s  e</div>").addClass("closer").addClass("trans").css("margin-top","52px").on("click",function(){removeImage(r)}),r=$("<div></div>").addClass("fullSizeImageContainer").addClass("fullcontainer").addClass("trans").addClass("image").addClass("noBounce").append(o).append(t).appendTo("body").one("dblclick",function(){removeImage(r)}).one("contextmenu",function(){removeImage(r)})}function stopProp(e){return e.preventDefault(),e.stopPropagation(),e}function makeid(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;5>n;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function checkConnection(){if(navigator.connection&&navigator.connection.type){var e=navigator.connection.type,t={};return Connection&&(t[Connection.UNKNOWN]=!1,t[Connection.ETHERNET]=!0,t[Connection.WIFI]=!0,t[Connection.CELL_2G]=!0,t[Connection.CELL_3G]=!0,t[Connection.CELL_4G]=!0,t[Connection.CELL]=!0,t[Connection.NONE]=!1),t[e]?!0:navigator.onLine}return-1!==Object.keys(navigator).indexOf("onLine")?navigator.onLine:!0}function decodeFromBase64(e){return atob(e)}function dataURItoBlob(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],o=new ArrayBuffer(t.length),r=new Uint8Array(o),a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return new Blob([o],{type:n})}function autosize(){}function showloading(){$(".appName").addClass("loading")}function hideloading(){$(".appName.loading").removeClass("loading")}function switch_tab(e){for(var t=document.getElementsByTagName("div"),n=0;n<t.length;n++){var o=t[n];"model_container"==o.className&&(o.style.display=o.id=="Data_"+e?"block":"none")}var r=document.getElementsByTagName("td");for(n=0;n<r.length;n++){var a=r[n];if("selected"==a.className){a.className="tab";break}}document.getElementById("Tab_"+e).className="selected"}function toggle_extra_info(){for(var e=document.getElementsByTagName("tr"),t=0;t<e.length;t++){var n=e[t];"extra_info"==n.id&&(n.style.display="none"==n.style.display?"":"none")}for(var o=document.getElementsByName("additional_data"),t=0;t<o.length;t++){var r=o[t];r.innerHTML="Show Additional Data"==r.innerHTML?"Hide Additional Data":"Show Additional Data"}}function switch_extended(){var e=document.getElementById("Extended_Native"),t=document.getElementById("Extended_Hourly"),n=document.getElementById("switch_extended");"block"==e.style.display?(e.style.display="none",t.style.display="block",n.innerHTML="Fewer Hours",document.cookie="qlvt=1;expires=Tue, 31 Dec 2030 00:00:00 UTC"):(e.style.display="block",t.style.display="none",n.innerHTML="More Hours",document.cookie="qlvt=0;expires=Tue, 31 Dec 2030 00:00:00 UTC")}function loadMeteogram(e,t){showloading(),e=$(e),$.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22"+encodeURIComponent(t)+"%22&format=xml'&callback=?",function(t){if(t.results[0]){var n=$('<div class="closer">close</div>').on("click",function(){$(this).closest(".removeme").remove()}),t=filterData(t.results[0]),o=$(t).find(".meteogram");o.find(" > :not(table, .heading, .model_container)").remove(),o.find("a[href]:not([href^=javascript])").attr("target","_blank").each(function(){$(this).attr("href","http://www.iwindsurf.com/"+$(this).attr("href"))}),e.html(o).addClass("removeme").appendTo(document.body).find(".meteogram").prepend(n)}else{var r="<p>Error: could not load the page.</p>";e.html(r)}hideloading()})}function filterData(e){return e=e.replace(/<?\/body[^>]*>/g,""),e=e.replace(/[\r|\n]+/g,""),e=e.replace(/<--[\S\s]*?-->/g,""),e=e.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,""),e=e.replace(/<script[^>]*>[\S\s]*?<\/script>/g,""),e=e.replace(/<script.*\/>/,""),e=e.replace(/src="/g,'src="http://www.iwindsurf.com/')}!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=n.length,r=window.console=window.console||{};o--;)e=n[o],r[e]||(r[e]=t)}(),$(".loading").data("inithtml",$(".loading").html()),window.bouncefix&&bouncefix.add("noBounce"),window.$&&($(".loading").bind("dragstart",stopProp).bind("selectstart",stopProp),$.fn.insertAt=function(e,t){var n=this.children().clone(!0),o=$.makeArray(n);return o.splice(t,0,e),this.empty().append(o),this},$.support.cors=!0,$.fn.css2=jQuery.fn.css,$.fn.css=function(){if(arguments.length)return jQuery.fn.css2.apply(this,arguments);for(var e=["font-family","font-size","font-weight","font-style","color","text-transform","text-decoration","letter-spacing","word-spacing","line-height","text-align","vertical-align","direction","background-color","background-image","background-repeat","background-position","background-attachment","opacity","width","height","top","right","bottom","left","margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","position","display","visibility","z-index","overflow-x","overflow-y","white-space","clip","float","clear","cursor","list-style-image","list-style-position","list-style-type","marker-offset"],t=e.length,n={},o=0;t>o;o++)n[e[o]]=jQuery.fn.css2.call(this,e[o]);return n},$.each(["show","hide"],function(e,t){var n=$.fn[t];$.fn[t]=function(){return this.trigger(t),n.apply(this,arguments)}})),Object.keys||(Object.keys=function(){"use strict";var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=n.length;return function(r){if("object"!=typeof r&&("function"!=typeof r||null===r))throw new TypeError("Object.keys called on non-object");var a,i,s=[];for(a in r)e.call(r,a)&&s.push(a);if(t)for(i=0;o>i;i++)e.call(r,n[i])&&s.push(n[i]);return s}}()),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(void 0===this||null===this)throw new TypeError('"this" is null or not defined');var n=this.length>>>0;for(t=+t||0,1/0===Math.abs(t)&&(t=0),0>t&&(t+=n,0>t&&(t=0));n>t;t++)if(this[t]===e)return t;return-1}),Array.prototype.some||(Array.prototype.some=function(e){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var o=arguments.length>=2?arguments[1]:void 0,r=0;n>r;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n,o;if(null==this)throw new TypeError(" this is null or not defined");var r=Object(this),a=r.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(t&&(n=t),o=0;a>o;){var i;o in r&&(i=r[o],e.call(n,i,o,r)),o++}});var mimes={png:"image/png",jpg:"image/jpeg",gif:"image/gif"},vidimgs={"OB-Kelly's Cove":function(){return $("<img src='http://ob-kc.com/images/current_sm.jpg?"+(new Date).getTime()+"'/>").on("click",function(){displayImage(this)}).css("cursor","pointer")}},app=window.app=app||{},vendorprefix=function(){var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1],n="WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1];return{dom:n,lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.substr(1)}}();!function(e,t,n,o){"use strict";function r(){var e=u.getBounds();return d+"&minLat="+e.getSouth()+"&minLon="+e.getWest()+"&maxLat="+e.getNorth()+"&maxLon="+e.getEast()+"&zoomLevel="+u.getZoom()}function a(e){e=e||o.stations,e&&u.removeLayer(e)}function i(){return n.layerGroup().addTo(u)}function s(t){if("abort"!==t.statusText){a();var r=o.stations=i(),s=JSON.parse(JSON.parse(t.responseText).error.split("//Total time:")[0]);console.log(s[0]),$.each(s,function(){var t=this.sensorReadings.length>0?this.sensorReadings[0].direction:"",o=this.sensorReadings.length>0?this.sensorReadings[0].average:"",a=this.sensorReadings.length>0?this.sensorReadings[0].gust:"",i=this.sensorReadings.length>0?this.sensorReadings[0].temperature:"",s=this.fullName||"",l=this.fullName||"",c=t+(o?", avg: "+o:"")+(a?", gust: "+a:"");if(c){var d,p=2*(parseFloat(o)||1),f=a?2*parseFloat(a):p;e.vidimgs&&(d=vidimgs[this.id]||vidimgs[this.fullName]);var m,g=1/Math.abs(p-f)*10,h='<div class="station" title="'+l+" "+(c||"no data")+'" style="font-size:'+p+"px; transition: all "+g+'s linear;">&#10148;</div>';(-1!==t.indexOf("E")||"N"===t)&&(m="green"),-1!==t.indexOf("W")&&(m="red"),m||(m="gray");var v=n.divIcon({html:h,iconsSize:[p,p],iconAnchor:[p/2-3,p],className:["direction",t,m].join(" ")}),y="http://www.iwindsurf.com/windandwhere.iws?regionID=1669&ISection=Forecast+Graphs&location_id="+this.id,w=$('<div class="fullcontainer meteogram-container"></div>'),b=$('<a class="showmeteogram">Show Meteogram</a>').on("click",function(){loadMeteogram(w,y)});d&&console.log(d);var x=$("<div><h3>"+s+"</h3></div>").append(c).append(i?"<br/>"+i+"&deg;":"").append(d?d instanceof Function?d():d:"").append('<a target="_blank" href="'+y+'"> forecast </a>').append(b),C=n.marker([this.baseLat,this.baseLon],{icon:v}).bindPopup(x[0]).on("mouseover",function(){this.infocus=!0;$(this._icon).find("div").css("text-shadow",m+" "+(f-p)+"px 0px 0px")}).on("mouseout",function(){this.infocus=!1;$(this._icon).find("div").css("text-shadow","")}).addTo(r);p!==f&&setTimeout(function(){var e=setInterval(function(){(!C||C&&!u.hasLayer(C))&&clearInterval(e);var t;C.infocus||(t=C._gusted||0),t=2===t?0:t+=1,$(C._icon).find("div").css("text-shadow",-1!==[2,0].indexOf(t)?"transparent "+(f-p)*t+"px 0px 0px":m+" "+(f-p)*t+"px 0px 0px"),C._gusted=t},1e3*g)},1e3*g)}}),hideloading()}}function l(e){o.ajaxCall&&o.ajaxCall.abort(),o.ajaxCall=$.get(p+encodeURIComponent(e),s).success(function(e){s(e)}).error(function(e){s(e)})}function c(){return u.hasPopup?!1:(showloading(),void l(r()))}var d=(vendorprefix.css+"transform","http://www.iwindsurf.com/json/dyn_weatherstation.php?region_id=1669&units=mph&tunits=F"),p="https://jsonp.nodejitsu.com/?url=",u=o.map=n.map("map",{center:[37.83853,-122.39182],zoom:10,minZoom:6}).on("popupopen",function(){this.hasPopup=!0}).on("popupclose",function(){this.hasPopup=!1}).on("moveend",c).on("zoomend",c);n.control.locate().addTo(u);var f={position:"topleft",showResultIcons:!0},m=n.Control.geocoder(f).addTo(u);m.markGeocode=function(e){var t=e.bbox;u.fitBounds(t)},c();new n.tileLayer("http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png",{minZoom:0,maxZoom:20,maxNativeZoom:18,attribution:'Map data © <a href="http://www.openstreetmap.org">OpenStreetMap contributors</a>'}).addTo(u);o.reloadInterval=setInterval(c,6e4)}(window,document,L,app);
>>>>>>> e73dfe66aea94a60fd85b9df7175be0ad31f8920
