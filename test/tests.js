QUnit.test( "getDistance test", function( assert ) {
    "use strict";
    var dtw1 = new DynamicTimeWarping(
        [ 83, 65, 80, 49, 87 ],
        [ 57, 99, 11, 75, 78 ],
        function( a, b ) {
            return Math.abs( a - b );
        }
    );
    assert.strictEqual( dtw1.getDistance(), 112 );

    var dtw2 = new DynamicTimeWarping(
        [ 17, 72, 50, 9 ],
        [ 21, 43, 13, 23, 40 ],
        function( a, b ) {
            return Math.abs( a - b );
        }
    );
    assert.strictEqual( dtw2.getDistance(), 89 );

    var dtw3 = new DynamicTimeWarping(
        [ 17, 72, 50, 9 ],
        [ 21, 43, 13, 23, 40 ],
        function( a, b ) {
            return Math.abs( a - b );
        }
    );
    assert.strictEqual( dtw3.getDistance(), 89 );
    assert.strictEqual( dtw3.getDistance(), 89 );
} );

QUnit.test( "getPath test", function( assert ) {
    "use strict";
    var dtw1 = new DynamicTimeWarping(
        [ 9, 93, 15, 19, 24 ],
        [ 31, 97, 81, 82, 39 ],
        function( a, b ) {
            return Math.abs( a - b );
        }
    );
    assert.strictEqual( dtw1.getDistance(), 108 );
    assert.deepEqual(
        dtw1.getPath(),
        [ [ 0, 0 ], [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 4 ], [ 3, 4 ], [ 4, 4 ] ]
    );
    assert.deepEqual(
        dtw1.getPath(),
        [ [ 0, 0 ], [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 4 ], [ 3, 4 ], [ 4, 4 ] ]
    );

    var dtw2 = new DynamicTimeWarping(
        [ 83, 72, 52, 83 ],
        [ 19, 18, 77, 4, 14 ],
        function( a, b ) {
            return Math.abs( a - b );
        }
    );
    assert.deepEqual( dtw2.getPath(), [ [ 0, 0 ], [ 1, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ] );

    var dtw3 = new DynamicTimeWarping(
        [ 49, 79, 19, 39, 80 ],
        [ 77, 14, 95, 6 ],
        function( a, b ) {
            return Math.abs( a - b );
        }
    );
    assert.deepEqual(
        dtw3.getPath(),
        [ [ 0, 0 ], [ 1, 0 ], [ 2, 1 ], [ 3, 1 ], [ 4, 2 ], [ 4, 3 ] ]
    );
} );
