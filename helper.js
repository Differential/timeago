if (typeof Package.ui != 'undefined') {
  var Handlebars = Package.ui.Handlebars
};
    
if (typeof Handlebars !== 'undefined') {
  Handlebars.registerHelper("timeago", function(date, options) {
    override = options.hash['default']
    var dateObj;
    if (date) {
      dateObj = new Date(date);
      return $.timeago(dateObj).replace(/\ /g, "\u00a0");
    }
    if (override == undefined) {
      return "some time ago";
    } else {
      return override;
    }
  });
}

