/*! jQueryAjaxLogger - v0.0.1 - 2015-01-19
http://github.com/srizzo/jqueryajaxlogger/* Copyright (c) 2015 Samuel Rizzo; Licensed MIT %> */
(function ($) {
  if (typeof jQueryAjaxLogger == "undefined") {
    jQueryAjaxLogger = {
      _active: false,
      _initialized: false
    };
  }

  if (!jQueryAjaxLogger._initialized) {
    jQueryAjaxLogger._initialized = true;
    $( document ).ajaxSend(function(event, request, settings) {
      if (!jQueryAjaxLogger._active) {
        return;
      }
      var e = new Error('dummy');
      var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
          .replace(/^\s+at\s+/gm, '')
          .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
          .split('\n');
          var match = ($.grep(stack, function(e){ return !e.match(/jquery[ .\-0-9]*\.js/i) })[1] || "").match(/\(:?.*\/\/[^\/]+(\/.*)/);
      if (match) {
        console.info(settings.type + " " + settings.url + (settings.data ? (" data: " + settings.data) : "") + " [from " + match[1] + "]");
      } else {
        console.info(settings.type + " " + settings.url + (settings.data ? (" data: " + settings.data) : ""));
        console.trace();
      }
    });
  }
  
  jQueryAjaxLogger._active = !jQueryAjaxLogger._active
  if (jQueryAjaxLogger._active) {
    console.info("jQuery Ajax Logger is enabled")
  } else {
    console.info("jQuery Ajax Logger is disabled")
  }
  
})(jQuery)  