/*global define */

define([ 'visualcaptcha/xhr-request' ], function( xhrRequest ) {
    'use strict';

    return function( options ) {
        var urlArray = window.location.href.split( '/' );
        urlArray[urlArray.length-1]='';

        var config = {
            /* REQUEST */
            request: xhrRequest,
            url: urlArray.join( '/' ).slice(0, -1),
            namespace: '',
            namespaceFieldName: 'namespace',
            routes: {
                start: '/start',
                image: '/image',
                audio: '/audio'
            },
            isLoading: false,
            hasLoaded: false,
            /* STATE */
            autoRefresh: true,
            numberOfImages: 6,
            randomNonce: '',
            randomParam: 'r',
            audioFieldName: '',
            imageFieldName: '',
            imageName: '',
            imageValues: [],
            /* CALLBACKS */
            callbacks: {},
            _loading: function() {},
            _loaded: function() {}
        };

        // Update and return the random nonce
        config.applyRandomNonce = function() {
            return ( config.randomNonce = Math.random().toString( 36 ).substring( 2 ) );
        };

        // We don't want to extend config, just allow setting a few of its options
        if ( options.request ) {
            config.request = options.request;
        }

        if ( options.url ) {
            config.url = options.url;
        }

        if ( options.namespace ) {
            config.namespace = options.namespace;
        }

        if ( options.namespaceFieldName ) {
            config.namespaceFieldName = options.namespaceFieldName;
        }

        if ( typeof options.autoRefresh !== 'undefined' ) {
            config.autoRefresh = options.autoRefresh;
        }

        if ( options.numberOfImages ) {
            config.numberOfImages = options.numberOfImages;
        }

        if ( options.routes ) {
            if ( options.routes.start ) {
                config.routes.start = options.routes.start;
            }

            if ( options.routes.image ) {
                config.routes.image = options.routes.image;
            }

            if ( options.routes.audio ) {
                config.routes.audio = options.routes.audio;
            }
        }

        if ( options.randomParam ) {
            config.randomParam = options.randomParam;
        }

        if ( options.callbacks ) {
            if ( options.callbacks.loading ) {
                config.callbacks.loading = options.callbacks.loading;
            }

            if ( options.callbacks.loaded ) {
                config.callbacks.loaded = options.callbacks.loaded;
            }
        }

        if ( options._loading ) {
          config._loading = options._loading;
        }

        if ( options._loaded ) {
          config._loaded = options._loaded;
        }

        return config;
    };
} );