if (typeof Handlebars !== 'undefined') {
  console.log(Handlebars)
  Handlebars.registerHelper("timeago", function(date) {
    var dateObj;
    if (date) {
      dateObj = new Date(date);
      return $.timeago(dateObj).replace(/\ /g, "\u00a0");
    }
    return "some time ago";
  });
}
