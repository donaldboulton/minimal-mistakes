/*global define */

define( function() {
    'use strict';

    var XMLHttpRequest = window.XMLHttpRequest;

    return function( url, callback ) {
        var ajaxRequest = new XMLHttpRequest();

        ajaxRequest.open( 'GET', url, true );
        ajaxRequest.onreadystatechange = function() {
            var response;

            if ( ajaxRequest.readyState !== 4 || ajaxRequest.status !== 200 ) {
                return;
            }

            response = JSON.parse( ajaxRequest.responseText );
            callback( response );
        };

        ajaxRequest.send();
    };
} );