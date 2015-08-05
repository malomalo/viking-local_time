(function () {
    module("Viking.View.Helpers#localDate", {
        setup: function( ) {
            // All test start at beging of day
            this.clock = sinon.useFakeTimers(1438758000000);
        },
        teardown: function( ) {
            this.clock.restore();
        }
    });
    
    test("localDate(time)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));
        
        equal(
            Viking.View.Helpers.localDate(time),
            '<time data-format="%B %e, %Y" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%B %e, %Y')+'</time>'
        );
    });

    test("localDate(time, options)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));

        equal(
            Viking.View.Helpers.localDate(time, {'class': 'three', 'format': '%Y'}),
            '<time class="three" data-format="%Y" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%Y')+'</time>'
        );
    });

    test("localDate(time, format)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));

        equal(
            Viking.View.Helpers.localDate(time, '%Y'),
            '<time data-format="%Y" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%Y')+'</time>'
        );
    });

    test("localDate(time, format, options)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));

        equal(
            Viking.View.Helpers.localDate(time, '%Y', {'class': 'four'}),
            '<time class="four" data-format="%Y" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%Y')+'</time>'
        );
    });
    
}());