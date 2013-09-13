Package.describe({
  summary: "Add a timeago helper method that uses jquery-timeago function"
});

Package.on_use(function(api) {
  api.use(['handlebars'], 'client');
  api.add_files(['timeago/jquery.timeago.js'], 'client');
  api.add_files(['helper.js'], 'client');
});
