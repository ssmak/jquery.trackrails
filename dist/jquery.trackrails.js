"use strict";!function(loadCompletedCallback){var dependencies_babel_polyfill="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js",dependencies_jquery="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",dependencies_jquery_easing="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js",dependencieLoaders_loadDepJQueryPromise=function(){return new Promise(function(resolve){if("undefined"==typeof jQuery){var loadScript=document.createElement("script");loadScript.src=dependencies_jquery,loadScript.onload=function(){resolve()},document.getElementsByTagName("body")[0].appendChild(loadScript)}else resolve()})},dependencieLoaders_loadDepJQueryEasingPromise=function(){return new Promise(function(resolve){if(void 0===jQuery.easing.def){var loadScript=document.createElement("script");loadScript.src=dependencies_jquery_easing,loadScript.onload=function(){resolve()},document.getElementsByTagName("body")[0].appendChild(loadScript)}else resolve()})};(function(babelPolyfillLoadedCallback){if("undefined"==typeof Promise){var loadScript=document.createElement("script");loadScript.src=dependencies_babel_polyfill,loadScript.onload=function(){babelPolyfillLoadedCallback()},document.getElementsByTagName("body")[0].appendChild(loadScript)}else babelPolyfillLoadedCallback()})(function(){dependencieLoaders_loadDepJQueryPromise().then(function(){return dependencieLoaders_loadDepJQueryEasingPromise()}).then(function(){$(document).ready(function(){var html='<div class="track track-debug">';$(".rails").each(function(idx,rails){var railsID=void 0,railsTitle=void 0;railsID="rails-"+idx,$(rails).attr("rails-id",railsID),void 0===(railsTitle=$(rails).attr("rails-title"))&&(railsTitle=$(rails).text(),$(rails).attr("rails-title",railsTitle)),html=html+'<div rails-title="'+railsTitle+'" rails-ref="'+railsID+'"></div>',idx===$(".rails").length-1&&function(html){var rails=$(".rails").map(function(idx,rails){return{rails:rails,top:$(rails).position().top}});rails=$.makeArray(rails);var railsEasing="easeOutCubic",railsDuration=500,overrideRailsEasing=$("script[rails-easing]");overrideRailsEasing.length&&(railsEasing=$(overrideRailsEasing).attr("rails-easing"));var trackFunc,overrideRailsDuration=$("script[rails-duration]");overrideRailsDuration.length&&(railsDuration=parseInt($(overrideRailsDuration).attr("rails-duration"))),$(html).appendTo("body"),$(".track > div[rails-ref]").mouseover(function(evt){var hints=$(evt.currentTarget).attr("rails-title");"string"==typeof hints&&$(".rails-hints").css("opacity",1).text(hints)}).mouseout(function(evt){$(".rails-hints").css("opacity",0).text("*")}).click(function(evt){var ref=$(evt.currentTarget).attr("rails-ref");/^\d+$/.test(ref)?$("html").stop().animate({scrollTop:ref},railsDuration,railsEasing):$("html").stop().animate({scrollTop:$("[rails-id="+ref+"]").offset().top},railsDuration,railsEasing)}),window.trackrails={scrollHandler:null},(trackFunc=function(){null==window.trackrails.scrollHandler&&(window.trackrails.scrollHandler=setTimeout(function(){var scrollTop=$(window).scrollTop(),nearestRails=null,_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=rails[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var r=_step.value;null==nearestRails?nearestRails=r:Math.abs(r.top-scrollTop)<Math.abs(nearestRails.top-scrollTop)&&(nearestRails=r)}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}$("div[rails-ref]").removeClass("hover"),$("div[rails-ref="+$(nearestRails.rails).attr("rails-id")+"]").addClass("hover"),window.trackrails.scrollHandler=null},100))})(),$(window).scroll(function(event){trackFunc()})}(html+='<div rails-title="&nbsp;" rails-ref="0"><span class="fa fa-chevron-up"></span></div><div class="rails-hints">*</div>')})})})})}();