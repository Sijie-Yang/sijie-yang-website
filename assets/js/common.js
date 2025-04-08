$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('a.abstract').click(function() {
    $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
  });
  $('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
  });
  $('a').removeClass('waves-effect waves-light');

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });

  // Initialize Bootstrap Table of Contents (TOC)
  // Check if the toc-sidebar element exists
  if ($('#toc-sidebar').length) {
    // Find the main content area to generate the TOC from
    // Adjust the selector ('article') if your CV content is in a different container
    var mainContent = $('article'); 

    // Ensure headings have IDs for linking (optional, bootstrap-toc might add them)
    mainContent.find('h1, h2, h3, h4, h5, h6').each(function() {
      if (!$(this).attr('id')) {
        // Create a simple ID from the text if one doesn't exist
        var id = $(this).text().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        $(this).attr('id', id);
      }
    });

    // Initialize the TOC library on the sidebar nav element
    // This assumes you have bootstrap-toc.js included
    // Wait for bootstrap-toc to potentially load if deferred
    if (typeof $().toc === 'function') {
        initToc();
    } else {
        // Fallback or retry mechanism if needed, for simplicity just log
        console.log('bootstrap-toc not loaded yet or missing.');
        // You might need a more robust loader if bootstrap-toc is loaded async
    }
    
    function initToc() {
        $('#toc-sidebar').toc({
          container: mainContent, // Tell it where to find headings
          selectors: 'h3', // Include only h3 headings for CV sections
          highlightOnScroll: true, // Highlight the current section in the TOC
          highlightOffset: 0, // <-- Increased from 70
          anchorName: function(i, heading, prefix) { // Use existing IDs
              // Use the ID added by the cv.html include if present
              var anchor = $(heading).closest('.card').prev('a.anchor');
              if (anchor.length && anchor.attr('id')) {
                  return anchor.attr('id');
              }
              // Fallback to generating ID from text
              return $(heading).attr('id') || prefix+i;
          },
          headerText: function(i, heading, $heading) { // Use heading text
            return $heading.text();
          },
          itemClass: function(i, heading, $heading, prefix) {
            // Add Bootstrap nav classes
            return 'nav-item';
          }
        });

        // Make the generated list use Bootstrap nav styles
        // The library might add 'nav' automatically, ensure structure matches CSS
        var tocNav = $('#toc-sidebar').find('[data-toggle=\"toc\"]');
        if (tocNav.length) {
            tocNav.addClass('nav nav-pills flex-column');
            // Ensure correct structure for nested lists if needed
            tocNav.find('ul').addClass('nav flex-column'); 
        } else {
            // Check if structure is different and adapt class adding
             $('#toc-sidebar').find('ul').addClass('nav nav-pills flex-column');
        }
    }

  }
});

