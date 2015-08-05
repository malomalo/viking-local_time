(function () {
    module("Timer / Event Callback");
    
    test("localTime(time)", function() {
        var localTime = new Date(Date.parse('2013-11-27T23:43:22Z'));
        $('body').append(Viking.View.Helpers.localTime(localTime, {id: 'localTime'}));
        
        Viking.View.updateTimeTags();
        
        equal($('#localTime')[0].outerHTML, '<time data-format="%B %e, %Y %-l:%M%P" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" id="localTime" title="'+localTime.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+localTime.strftime('%B %e, %Y %-l:%M%P')+'</time>');
        $('#localTime').remove();
    });

    test("localTime('now')", function() {
        $('body').append(Viking.View.Helpers.localTime('now', {id: 'localTime'}));

        var clock = sinon.useFakeTimers();
        clock.tick(200);

        Viking.View.updateTimeTags();
        var localTime = new Date();
        equal($('#localTime')[0].outerHTML, '<time data-format="%B %e, %Y %-l:%M%P" data-local="now" datetime="'+localTime.toISOString()+'" id="localTime" title="'+localTime.strftime('%B %e, %Y at %l:%M%P %Z')+'">'+localTime.strftime('%B %e, %Y %-l:%M%P')+'</time>')

        $('#localTime').remove();

        clock.restore();
    });
    
    test("localDate", function() {
        var localDate = new Date(Date.parse('2013-11-27T23:43:22Z'));
        $('body').append(Viking.View.Helpers.localDate(localDate, '%Y', {id: 'localDate'}));
        
        Viking.View.updateTimeTags();
        
        equal($('#localDate')[0].outerHTML, '<time data-format="%Y" data-local="time" data-localized="true" datetime="2013-11-27T23:43:22.000Z" id="localDate" title="'+localDate.strftime('%B %e, %Y %-l:%M%P %Z')+'">'+localDate.strftime('%Y')+'</time>');
        $('#localDate').remove();
    });
    
    test("timeAgo", function() {
        var timeAgo = (3).days().ago();
        $('body').append(Viking.View.Helpers.localRelativeTime(timeAgo, 'time-ago', {id: 'timeAgo'}));

        Viking.View.updateTimeTags();
        
        equal($('#timeAgo')[0].outerHTML, '<time data-local="time-ago" datetime="'+timeAgo.toISOString()+'" id="timeAgo" title="'+timeAgo.strftime('%B %e, %Y %-l:%M%P %Z')+'">3 days</time>');
        $('#timeAgo').remove();
    });

}());






