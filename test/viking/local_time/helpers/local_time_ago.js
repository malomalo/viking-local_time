(function () {
    module("Viking.View.Helpers#localTimeAgo", {
        setup: function( ) {
            // All test start at beging of day
            this.clock = sinon.useFakeTimers(1438758000000);
        },
        teardown: function( ) {
            this.clock.restore();
        }
    });
    
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