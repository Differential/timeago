
Package.blaze.UI.registerHelper("timeago", function(date, options) {
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
