---
layout: default
username: BeDifferential
repo: timeago
version: 0.0.2
desc: A Handlebars helper to easily do timeago from a date stamp.

---
# Timeago

Meteor package with helper for jquery timeago.

## Usage

{% assign special = '{{timeago dateStamp}}' %}

When you have a datestamp variable or object, just use ``{{special}}`` and it will be converted to a string like ``9 days ago``
