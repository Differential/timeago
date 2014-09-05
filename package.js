Package.describe({
  name: "joshowens:timeago",
  summary: "A Handlebars helper to easily do timeago from a date stamp.",
  version: "0.0.5",
  git: "https://github.com/Differential/timeago.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use(['blaze'], 'client');
  api.addFiles(['timeago/jquery.timeago.js'], 'client');
  api.addFiles(['helper.js'], 'client');
});
