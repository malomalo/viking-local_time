(function () {
    module("Viking.View.Helpers#localTimeAgo");
    
    test("localTimeAgo aliases to localRelativeTime", function() {
        var old_func = Viking.View.Helpers.localRelativeTime
        Viking.View.Helpers.localRelativeTime = function(time, type) {
            strictEqual(time, 1);
            strictEqual(type, 'time-ago');
        }
        
        Viking.View.Helpers.localTimeAgo(1);
        
        Viking.View.Helpers.localRelativeTime = old_func;
    });

}());