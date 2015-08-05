(function () {
    module("Viking.View.Helpers#localTime", {
        setup: function( ) {
            // All test start at beging of day
            this.clock = sinon.useFakeTimers(1438758000000);
        },
        teardown: function( ) {
            this.clock.restore();
        }
    });
    
    test("localTime(time)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));
        
        equal(
            Viking.View.Helpers.localTime(time),
            '<time data-format="%B %e, %Y %-l:%M%P" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%B %e, %Y %-l:%M%P')+'</time>'
        );
    });

    test("localTime('now')", function() {
        var clock = sinon.useFakeTimers();
        
        var time = new Date();
        equal(
            Viking.View.Helpers.localTime('now'),
            '<time data-format="%B %e, %Y %-l:%M%P" data-local="now" datetime="'+time.toISOString()+'" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%B %e, %Y %-l:%M%P')+'</time>'
        );
        
        clock.restore();
    });

    test("localTime(time, options)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));
        
        equal(
            Viking.View.Helpers.localTime(time, {'class': 'three', 'format': '%Y'}),
            '<time class="three" data-format="%Y" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%Y')+'</time>'
        );
    });

    test("localTime(time, format)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));
        
        equal(
            Viking.View.Helpers.localTime(time, '%Y'),
            '<time data-format="%Y" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%Y')+'</time>'
        );
    });
    
    test("localTime(time, format, options)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));
        
        equal(
            Viking.View.Helpers.localTime(time, '%Y', {'class': 'four'}),
            '<time class="four" data-format="%Y" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%Y')+'</time>'
        );
    });
    
}());