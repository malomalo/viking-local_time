(function () {
    module("Viking.View.Helpers#localRelativeTime", {
        setup: function( ) {
            // All test start at beging of day
            this.clock = sinon.useFakeTimers(1438758000000);
        },
        teardown: function( ) {
            this.clock.restore();
        }
    });
    
    test("localRelativeTime(time, 'date')", function() {
        var time = (3).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'date'),
            '<time data-local="date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e')+'</time>'
        );

        var time = (369).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'date'),
            '<time data-local="date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e, %Y')+'</time>'
        );
        
        var time = (14).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'date'),
            '<time data-local="date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e')+'</time>'
        );
        
        var time = (369).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'date'),
            '<time data-local="date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e, %Y')+'</time>'
        );
    });
    
    test("localRelativeTime(time, 'time-ago')", function() {
        var time = (3).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'time-ago'),
            '<time data-local="time-ago" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">3 days</time>'
        );
        
        var time = (3).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'time-ago'),
            '<time data-local="time-ago" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">3 days</time>'
        );
    });
    
    test("localRelativeTime(time, 'time-or-date')", function() {
        var time = (5).hours().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'time-or-date'),
            '<time data-local="time-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%-l:%M%P')+'</time>'
        );

        var time = (5).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'time-or-date'),
            '<time data-local="time-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e')+'</time>'
        );

        var time = (369).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'time-or-date'),
            '<time data-local="time-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e, %Y')+'</time>'
        );


        var time = (5).hours().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'time-or-date'),
            '<time data-local="time-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%-l:%M%P')+'</time>'
        );
        
        var time = (5).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'time-or-date'),
            '<time data-local="time-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e')+'</time>'
        );

        var time = (369).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'time-or-date'),
            '<time data-local="time-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e, %Y')+'</time>'
        );
    });
    
    test("localRelativeTime(time, 'weekday-or-date')", function() {
        var time = (5).hours().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">Today</time>'
        );
        
        var time = (1).day().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">Yesterday</time>'
        );
        
        var time = (2).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%A')+'</time>'
        );
        
        var time = (6).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%A')+'</time>'
        );
        
        var time = (7).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e')+'</time>'
        );
        
        var time = (367).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e, %Y')+'</time>'
        );
        
        var time = (5).hours().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">Today</time>'
        );
        
        var time = (1).day().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">Tomorrow</time>'
        );
        
        var time = (2).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%A')+'</time>'
        );
        
        var time = (6).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%A')+'</time>'
        );
        
        var time = (7).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e')+'</time>'
        );
        
        var time = (367).days().fromNow();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'weekday-or-date'),
            '<time data-local="weekday-or-date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e, %Y')+'</time>'
        );
    });
    
    test("localRelativeTime(time, type, options)", function() {
        var time = (3).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, 'date', {'class': 'three'}),
            '<time class="three" data-local="date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e')+'</time>'
        );
    });
    
    test("localRelativeTime(time, options)", function() {
        var time = (3).days().ago();
        equal(
            Viking.View.Helpers.localRelativeTime(time, {'class': 'three', 'type': 'date'}),
            '<time class="three" data-local="date" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%b %e')+'</time>'
        );
    });
    

}());