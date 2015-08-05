# Viking/local_time

Local Time is a Viking helper for displaying times and dates to users in their
local time. The helpers render a `<time>` element and Javascript converts and
formats it to the clients local time.

Inspired by Basecamp's [local_time](https://github.com/basecamp/local_time), it's
also compatible by the `time` tags outputed by it's Rails helpers.

---

# Installation

`Viking/local_time` doesn't automatically update the tags.

If you want to update all the `time` tags on ever load you'll want to something
like:

```javascript
$(document).ready(function () {
    Viking.View.updateTimeTags();
});
```

Or if you're using [Turbolinks](https://github.com/rails/turbolinks):

```javascript
$(document).on("ready page:load", function() {
    Viking.View.updateTimeTags();
});
```

If you want the tags updated every N seconds you'll need to set a timer to
update the tags like the following:

```javascript
setTimeout(function tick() {
    Viking.View.updateTimeTags();
    setTimeout(tick, 1000);
}, 1000);
```

If your using ajax to return html, you may also want to `local_time` to run
after ever ajax request:

```javascript
jQuery(document).on("ajaxSuccess", function(event, xhr) {
    if (jQuery.trim(xhr.responseText)) {
        Viking.View.updateTimeTags();
    }
});
```

# Examples

```javascript
localTime(time)
// => <time data-format="%B %e, %Y %-l:%M%P"
//          data-local="time"
//          datetime="2013-11-27T23:43:22Z"
//          title="November 27, 2013 6:43pm EDT"
//          data-localized="true">November 27, 2013 6:43pm</time>

localTime(time, {class: 'created'})
// => <time class="created"
//          data-format="%B %e, %Y %-l:%M%P"
//          data-local="time"
//          datetime="2013-11-27T23:43:22Z"
//          title="November 27, 2013 6:43pm EDT"
//          data-localized="true">November 27, 2013 6:43pm</time>

localTime(time, '%-l:%M%P')
// => <time data-format="%B %e, %Y %-l:%M%P"
//          data-local="time"
//          datetime="2013-11-27T23:43:22Z"
//          title="November 27, 2013 6:43pm EDT"
//          data-localized="true">6:43pm</time>

localTime('now') // Gets updated to now every `Viking.View.updateTimeTags()`
// => <time data-format="%B %e, %Y %-l:%M%P"
//          data-local="now"
//          datetime="2013-11-27T23:43:22Z"
//          title="November 27, 2013 6:43pm EDT">November 27, 2013 6:43pm</time>

localDate(time)
// => <time data-format="%B %e, %Y"
//          data-local="time"
//          datetime="2013-11-27T23:43:22Z"
//          title="November 27, 2013 6:43pm EDT"
//          data-localized="true">November 27, 2013</time>

localTimeAgo(time)
//   <time data-local="time-ago"
//         datetime="2013-11-27T23:43:22Z"
//         title="November 27, 2013 6:43pm EDT">3 months</time>

// Types:
// - date: Includes the year unless it's current. "Apr 11" or "Apr 11, 2013"
// - time-ago: See +localTimeAgo+, +localTimeAgo+ call this with type 'time-ago'
// - time-or-date: Displays the time if it occurs today or the date if not. 
//                 "3:26pm" or "Apr 11"
// - weekday-or-date: Displays "Today", "Yesterday", the weekday (e.g. Wednesday)
//                    if the time is within a week of today. Otherwise displays
//                    the date.
localRelativeTime(time, 'date')
// => <time data-local="date"
//          datetime="2015-11-27T23:43:22Z"
//          title="November 27, 2015 6:43pm EDT"
//          data-localized="true">November 27</time>
```