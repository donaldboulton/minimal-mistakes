/*global define */

define( function() {
    'use strict';

    var _firstOrArray,
        _findByClass,
        _findByTag,
        _hasClass,
        _addClass,
        _removeClass,
        _bindClick;

    _firstOrArray = function( items, first ) {
        return first ? items[ 0 ] : Array.prototype.slice.call( items );
    };

    _findByClass = function( element, className, first ) {
        var elements = element.getElementsByClassName( className );

        return _firstOrArray( elements, first );
    };

    _findByTag = function( element, tagName, first ) {
        var elements = element.getElementsByTagName( tagName );

        return _firstOrArray( elements, first );
    };

    _hasClass = function( element, cls ) {
        var reg = new RegExp( "(\\s|^)" + cls + "(\\s|$)" );

        return element.className && reg.test( element.className );
    };

    _addClass = function( element, cls ) {
        if ( Array.isArray( element ) ) {
            for ( var i = 0; i < element.length; i++ ) {
                _addClass( element[ i ], cls );
            }
        } else {
            if ( !_hasClass( element, cls ) ) {
                if ( element.className.length > 0 ) {
                    element.className += ' ' + cls;
                } else {
                    element.className = cls;
                }
            }
        }
    };

    _removeClass = function( element, cls ) {
        var reg;

        if ( Array.isArray( element ) ) {
            for ( var i = 0; i < element.length; i++ ) {
                _removeClass( element[ i ], cls );
            }
        } else {
            reg = new RegExp( "(\\s|^)" + cls + "(\\s|$)" );

            element.className = element.className
                .replace( reg, " " )
                .replace( /(^\s*)|(\s*$)/g, "" );
        }
    };

    _bindClick = function( element, callback ) {
        if ( Array.isArray( element ) ) {
            for ( var i = 0; i < element.length; i++ ) {
                _bindClick( element[ i ], callback );
            }
        } else {
            if ( element.addEventListener ) {
                element.addEventListener( 'click', callback, false );
            } else {
                element.attachEvent( 'onclick', callback );
            }
        }
    };

    return {
        findByClass: _findByClass,
        findByTag: _findByTag,
        hasClass: _hasClass,
        addClass: _addClass,
        removeClass: _removeClass,
        bindClick: _bindClick
    };
} );