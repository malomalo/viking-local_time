# viking-local_time


```javascript
    $(document).ready(function () {
        tick();
    
        document.addEventListener("time:elapse", tick);
  
        if (typeof Turbolinks !== "undefined" && Turbolinks !== null ? Turbolinks.supported : void 0) {
            return document.addEventListener("page:update", tick);
        } else if (typeof jQuery === "function") {
            jQuery(document).on("ajaxSuccess", function(event, xhr) {
                if (jQuery.trim(xhr.responseText)) {
                    tick();
                }
            });
        }
    
        // Timer for every second
        setInterval(function() {
            var event = document.createEvent("Events");
            event.initEvent("time:elapse", true, true);
            document.dispatchEvent(event);
        }, 60 * 1000);
    
    });
```
