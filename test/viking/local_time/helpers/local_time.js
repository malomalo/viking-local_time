(function () {
    module("Viking.View.Helpers#localTime");
    
    test("localTime(time)", function() {
        var time = new Date(Date.parse('2013-11-27T23:43:22Z'));
        
        equal(
            Viking.View.Helpers.localTime(time),
            '<time data-format="%B %e, %Y %-l:%M%P" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" title="'+time.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+time.strftime('%B %e, %Y %-l:%M%P')+'</time>'
        );
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