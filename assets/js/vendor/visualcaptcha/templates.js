/*global define */

define( function() {
    'use strict';

    var _t,
        _buttonsHTML,
        _accessibilityHTML,
        _imagesHTML,
        _audioInputHTML,
        _imageInputHTML,
        _namespaceInputHTML;

    // Template engine
    _t = function( str, d ) {
        for ( var p in d ) {
            str = str.replace( new RegExp( '{' + p + '}', 'g' ), d[ p ] );
        }

        return str;
    };

    // Generate refresh and accessibility buttons HTML
    _buttonsHTML = function( captcha, language, path ) {
        var btnAccessibility,
            btnRefresh,
            string,
            params;

         btnAccessibility =
            '<div class="visualCaptcha-accessibility-button">' +
                '<a href="#"><img src="{path}accessibility{retinaExtra}.png" title="{accessibilityTitle}" alt="{accessibilityAlt}" /></a>' +
            '</div>';

        btnRefresh =
            '<div class="visualCaptcha-refresh-button">' +
                '<a href="#"><img src="{path}refresh{retinaExtra}.png" title="{refreshTitle}" alt="{refreshAlt}" /></a>' +
            '</div>';

        string =
            '<div class="visualCaptcha-button-group">' +
                btnRefresh +
                ( captcha.supportsAudio() ? btnAccessibility : '' ) +
            '</div>';

        params = {
            path: path || '',
            refreshTitle: language.refreshTitle,
            refreshAlt: language.refreshAlt,
            accessibilityTitle: language.accessibilityTitle,
            accessibilityAlt: language.accessibilityAlt,
            retinaExtra: captcha.isRetina() ? '@2x' : ''
        };

        return _t( string, params );
    };

    // Generate accessibility option and audio element HTML
    _accessibilityHTML = function( captcha, language ) {
        var string,
            params;

        if ( !captcha.supportsAudio() ) {
            return '';
        }

        string =
            '<div class="visualCaptcha-accessibility-wrapper visualCaptcha-hide">' +
                '<div class="accessibility-description">{accessibilityDescription}</div>' +
                '<audio preload="preload">' +
                    '<source src="{audioURL}" type="audio/ogg" />' +
                    '<source src="{audioURL}" type="audio/mpeg" />' +
                '</audio>' +
            '</div>';

        params = {
            accessibilityDescription: language.accessibilityDescription,
            audioURL: captcha.audioUrl(),
            audioFieldName: captcha.audioFieldName()
        };

        return _t( string, params );
    };

    // Generate images HTML
    _imagesHTML = function( captcha, language ) {
        var images = '',
            string,
            params;

        for ( var i = 0, l = captcha.numberOfImages(); i < l; i++ ) {
            string =
                '<div class="img">' +
                    '<a href="#"><img src="{imageUrl}" id="visualCaptcha-img-{i}" data-index="{i}" alt="" title="" /></a>' +
                '</div>';

            params = {
                imageUrl: captcha.imageUrl( i ),
                i: i
            };

            images += _t( string, params );
        }

        string =
            '<p class="visualCaptcha-explanation">{explanation}</p>' +
            '<div class="visualCaptcha-possibilities">{images}</div>';

        params = {
            imageFieldName: captcha.imageFieldName(),
            explanation: language.explanation.replace( /ANSWER/, captcha.imageName() ),
            images: images
        };

        return _t( string, params );
    };

    _audioInputHTML = function( captcha ) {
        var string,
            params;

        string =
            '<input class="form-control audioField" type="text" name="{audioFieldName}" value="" autocomplete="off" />';

        params = {
            audioFieldName: captcha.audioFieldName()
        };

        return _t( string, params );
    };

    _imageInputHTML = function( captcha, imageIndex ) {
        var string,
            params;

        string =
            '<input class="form-control imageField" type="hidden" name="{imageFieldName}" value="{value}" readonly="readonly" />';

        params = {
            imageFieldName: captcha.imageFieldName(),
            value: captcha.imageValue( imageIndex )
        };

        return _t( string, params );
    };

    _namespaceInputHTML = function( captcha ) {
        var string,
            params,
            namespace = captcha.namespace();

        // Ensure namespace is present
        if ( !namespace || namespace.length === 0 ) {
            return '';
        }

        string =
            '<input type="hidden" name="{fieldName}" value="{value}" />';

        params = {
            fieldName: captcha.namespaceFieldName(),
            value: namespace
        };

        return _t( string, params );
    };

    return {
        buttons: _buttonsHTML,
        accessibility: _accessibilityHTML,
        images: _imagesHTML,
        audioInput: _audioInputHTML,
        imageInput: _imageInputHTML,
        namespaceInput: _namespaceInputHTML
    };
} );