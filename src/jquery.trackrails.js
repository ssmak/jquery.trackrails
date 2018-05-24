'use strict';

/**
 * Load all the dependencies
 */

(function (loadCompletedCallback) {
  /*
   * Dependencie sources
   */
  var dependencies = {
    'babel-polyfill': 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js',
    'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'jquery.easing': 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'
  };

  /*
   * Dependencie loaders
   */
  var dependencieLoaders = {
    /*
     * Bluebird
     */
    loadDepBabelPolyfillPromise: function loadDepBabelPolyfillPromise(babelPolyfillLoadedCallback) {
      //check if Promise already supported
      if (typeof Promise === 'undefined') {
        //Promise not support -> load from cdnjs
        var loadScript = document.createElement('script');
        loadScript.src = dependencies['babel-polyfill'];
        loadScript.onload = function () {
          babelPolyfillLoadedCallback();
        };
        document.getElementsByTagName('body')[0].appendChild(loadScript);
      } else {
        //Promise already supported
        babelPolyfillLoadedCallback();
      }
    },
    /*
     * jQuery
     */
    loadDepJQueryPromise: function loadDepJQueryPromise() {
      return new Promise(function (resolve) {
        //check if jQuery already loaded
        if (typeof jQuery === 'undefined') {
          //jQuery not loaded -> load from cdnjs
          var loadScript = document.createElement('script');
          loadScript.src = dependencies['jquery'];
          loadScript.onload = function () {
            resolve();
          };
          document.getElementsByTagName('body')[0].appendChild(loadScript);
        } else {
          //jQuery already loaded
          resolve();
        }
      });
    },
    /*
     * jQuery.easing
     */
    loadDepJQueryEasingPromise: function loadDepJQueryEasingPromise() {
      return new Promise(function (resolve) {
        //check if jQuery.easing already loaded
        if (typeof jQuery.easing.def === 'undefined') {
          //jQuery.easing not loaded -> load from cdnjs
          var loadScript = document.createElement('script');
          loadScript.src = dependencies['jquery.easing'];
          loadScript.onload = function () {
            resolve();
          };
          document.getElementsByTagName('body')[0].appendChild(loadScript);
        } else {
          //jQuery.easing already loaded
          resolve();
        }
      });
    }

    /*
     * Promises runner
     */
  };dependencieLoaders['loadDepBabelPolyfillPromise'](function () {
    // Promise loaded -> load other dependencies
    dependencieLoaders['loadDepJQueryPromise']().then(function () {
      return dependencieLoaders['loadDepJQueryEasingPromise']();
    }).then(function () {
      loadCompletedCallback();
    });
  });
})(function () {
  // Dependencies load completed
  $(document).ready(function () {
    var html = '<div class="track track-debug">';

    (function (domSetupCompletedCallback) {
      // Find all the rails from whole document object model
      $('.rails').each(function (idx, rails) {
        var railsID = void 0,
            railsTitle = void 0;
        //auto assign rails id
        railsID = 'rails-' + idx;
        $(rails).attr('rails-id', railsID);
        //try to read the rails title
        railsTitle = $(rails).attr('rails-title');
        if (typeof railsTitle === 'undefined') {
          //rails title not defined -> use the content to instead
          railsTitle = $(rails).text();
          $(rails).attr('rails-title', railsTitle);
        }

        html = html + '<div rails-title="' + railsTitle + '" rails-ref="' + railsID + '"></div>';

        if (idx === $('.rails').length - 1) {
          html = html + '<div rails-title="Top" rails-ref="0"><span class="fa fa-chevron-up"></span></div><div class="rails-hints">*</div>';
          domSetupCompletedCallback(html);
        }
      });
    })(function (html) {
      // Callback method when rails is setup completed
      // Rails location
      var rails = $('.rails').map(function (idx, rails) {
        // console.warn(idx);
        return {
          rails: rails,
          top: $(rails).position().top
        };
      });
      rails = $.makeArray(rails);

      // Animation preset
      var railsEasing = 'easeOutCubic',
          railsDuration = 500; //default
      var overrideRailsEasing = $('script[rails-easing]');
      if (overrideRailsEasing.length) {
        railsEasing = $(overrideRailsEasing).attr('rails-easing');
      }
      var overrideRailsDuration = $('script[rails-duration]');
      if (overrideRailsDuration.length) {
        railsDuration = parseInt($(overrideRailsDuration).attr('rails-duration'));
      }

      // console.error(railsEasing, ',', railsDuration);

      // Register rail events
      $(html).appendTo('body');
      //add events trigger
      $('.track > div[rails-ref]').mouseover(function (evt) {
        //mouseover
        // console.error('mouseover', evt);
        var hints = $(evt.currentTarget).attr('rails-title');
        if (typeof hints === 'string') {
          $('.rails-hints').css('opacity', 1).text(hints);
        }
      }).mouseout(function (evt) {
        //mouseout
        $('.rails-hints').css('opacity', 0).text('*');
      }).click(function (evt) {
        //click
        var ref = $(evt.currentTarget).attr('rails-ref');
        // console.error(ref);
        //move to location by number
        if (/^\d+$/.test(ref)) {
          //number
          $('html').stop().animate({
            scrollTop: ref
          }, railsDuration, railsEasing);
        } else {
          //move to location by element id
          // console.error('move to element ', ref, ',', $(`[rails-id=${ref}]`).offset().top);
          $('html').stop().animate({
            scrollTop: $('[rails-id=' + ref + ']').offset().top
          }, railsDuration, railsEasing);
        }
      });

      //window scrolling event (track event)
      window.trackrails = {
        scrollHandler: null
      };
      (function (trackFunc) {
        //init the track
        trackFunc();

        $(window).scroll(function (event) {
          trackFunc();
        });
      })(function () {
        if (window.trackrails.scrollHandler == null) {
          window.trackrails.scrollHandler = setTimeout(function () {
            var scrollTop = $(window).scrollTop();
            // console.warn(scrollTop);
            var nearestRails = null;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = rails[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var r = _step.value;

                if (nearestRails == null) {
                  nearestRails = r;
                } else {
                  //compare two rails and find the nearest rails
                  if (Math.abs(r.top - scrollTop) < Math.abs(nearestRails.top - scrollTop)) {
                    nearestRails = r;
                  }
                }
              }

              // console.warn('the nearest rails: ', $(nearestRails.rails).attr('rails-id'));
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            $('div[rails-ref]').removeClass('hover');
            $('div[rails-ref=' + $(nearestRails.rails).attr('rails-id') + ']').addClass('hover');

            window.trackrails.scrollHandler = null;
          }, 100);
        }
      });
    });
  });
  //
});
//# sourceMappingURL=jquery.trackrails.js.map