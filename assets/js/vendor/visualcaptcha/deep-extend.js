/*global define */

define( function() {
    'use strict';

    var _deepExtend;

    //
    // Credits: http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    //
    _deepExtend = function( dest, src ) {
        dest = dest || {};
        
        for ( var key in src ) {
            if ( src[ key ] &&
                src[ key ].constructor &&
                src[ key ].constructor === Object ) {
                dest[ key ] = dest[ key ] || {};
                _deepExtend( dest[ key ], src[ key ] );
            } else {
                dest[ key ] = src[ key ];
            }
        }

        return dest;
    };

    return _deepExtend;
} );