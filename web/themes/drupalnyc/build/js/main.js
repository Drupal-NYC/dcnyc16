!function(e){var n={};function r(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(o,t,function(n){return e[n]}.bind(null,t));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/themes/drupalnyc/build/",r(r.s="RdjW")}({"04U5":function(e,n){e.exports="/themes/drupalnyc/build/images/plussign.93d567d7.svg"},RdjW:function(e,n,r){"use strict";var o,t;r("04U5");o=jQuery,Drupal.behaviors.onLoad={onLoad:(o("body").hasClass("path-frontpage")&&o(document).scroll((function(){var e=o(".page--header"),n=o(".js-content--header").offset().top,r=e.hasClass("fade-in");n<=o(document).scrollTop()&&!r?e.addClass("fade-in"):n>o(document).scrollTop()&&r&&e.removeClass("fade-in")})),o(".superhero--view-mode-volunteer-profile",void 0).find(".field--name-field-u-volunteer-about").before("<div class='expand'><span>"+Drupal.t("Read more")+"</span></div>"),o(".expand").click((function(e){o(o(e.target).parents(".superhero--prosa")).addClass("show-more"),o(e.target).remove()})),o(".people .field--name-field-u-first-name").parent().addClass("main-data-wrapper"),void o(".superhero").each((function(e,n){0===o(n).find("img").length&&o(n).find(".superhero--profile").prepend('<img src="/themes/drupalnyc/user-placeholder.png"/>')}))),clickEvents:(t=o(".menu--main"),void o(".hamburger").click((function(){t.hasClass("open")?(t.removeClass("open"),o("main").removeClass("mobile-menu-opened")):(t.addClass("open"),o("main").addClass("mobile-menu-opened"))})))},Drupal.behaviors.ticketing={attach:function(e,n){o('input[name="price_2"]').change((function(){o('input[name="item_2"]').prop("checked",!0)}))}}}});
