define(['./controllers/home',
        './controllers/docs',
        './controllers/features',
        './controllers/packages',
        './middleware/controller',
        './shell',
        'page',
        'jquery'],
function(homeController, docsController, featuresController, packagesController, controller, shell, page, $) {
  
  // ----------------------------------------------------------------------
  // Routing
  // ----------------------------------------------------------------------
  page('/', controller(homeController));
  page('/docs/:slug?', controller(docsController));
  page('/packages', controller(packagesController, true));
  page('/features', controller(featuresController));
  
  page.start();
  // ----------------------------------------------------------------------
  
  
  $(document).ready(function() {
    $.getJSON('/repo.json', function(data) {
      $(".social .stat").text(numberWithCommas(data.stargazers_count));
    });
  });
  
  
  
  $(document).ready(function() {
    


    /**
     * Bind plugins and even handlers
     */

    $("body").toggleClass("ie", msieversion());

    // $(window).resize(function() {
    //   if ($('.search-con .results').hasScrollBar()) {
    //     $(".search-con .results section").css({ paddingLeft: getScrollbarWidth() })
    //   } else {
    //     $(".search-con .results section").css({ paddingLeft: 0 })
    //   };
    // });

  });
  
  
  // helpers
  
  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) return true;

   return false;
  }
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
});
