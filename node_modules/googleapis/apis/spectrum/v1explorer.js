"use strict";
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* jshint maxlen: false */
const apirequest_1 = require("../../lib/apirequest");
/**
 * Google Spectrum Database API
 *
 * API for spectrum-management functions.
 *
 * @example
 * const google = require('googleapis');
 * const spectrum = google.spectrum('v1explorer');
 *
 * @namespace spectrum
 * @type {Function}
 * @version v1explorer
 * @variation v1explorer
 * @param {object=} options Options for Spectrum
 */
function Spectrum(options) {
    const self = this;
    self._options = options || {};
    self.paws = {
        /**
         * spectrum.paws.getSpectrum
         *
         * @desc Requests information about the available spectrum for a device at a location. Requests from a fixed-mode device must include owner information so the device can be registered with the database.
         *
         * @alias spectrum.paws.getSpectrum
         * @memberOf! spectrum(v1explorer)
         *
         * @param {object} params Parameters for request
         * @param {spectrum(v1explorer).PawsGetSpectrumRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getSpectrum: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/spectrum/v1explorer/paws/getSpectrum').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * spectrum.paws.getSpectrumBatch
         *
         * @desc The Google Spectrum Database does not support batch requests, so this method always yields an UNIMPLEMENTED error.
         *
         * @alias spectrum.paws.getSpectrumBatch
         * @memberOf! spectrum(v1explorer)
         *
         * @param {object} params Parameters for request
         * @param {spectrum(v1explorer).PawsGetSpectrumBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getSpectrumBatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/spectrum/v1explorer/paws/getSpectrumBatch').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * spectrum.paws.init
         *
         * @desc Initializes the connection between a white space device and the database.
         *
         * @alias spectrum.paws.init
         * @memberOf! spectrum(v1explorer)
         *
         * @param {object} params Parameters for request
         * @param {spectrum(v1explorer).PawsInitRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        init: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/spectrum/v1explorer/paws/init').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * spectrum.paws.notifySpectrumUse
         *
         * @desc Notifies the database that the device has selected certain frequency ranges for transmission. Only to be invoked when required by the regulator. The Google Spectrum Database does not operate in domains that require notification, so this always yields an UNIMPLEMENTED error.
         *
         * @alias spectrum.paws.notifySpectrumUse
         * @memberOf! spectrum(v1explorer)
         *
         * @param {object} params Parameters for request
         * @param {spectrum(v1explorer).PawsNotifySpectrumUseRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        notifySpectrumUse: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/spectrum/v1explorer/paws/notifySpectrumUse').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * spectrum.paws.register
         *
         * @desc The Google Spectrum Database implements registration in the getSpectrum method. As such this always returns an UNIMPLEMENTED error.
         *
         * @alias spectrum.paws.register
         * @memberOf! spectrum(v1explorer)
         *
         * @param {object} params Parameters for request
         * @param {spectrum(v1explorer).PawsRegisterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        register: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/spectrum/v1explorer/paws/register').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * spectrum.paws.verifyDevice
         *
         * @desc Validates a device for white space use in accordance with regulatory rules. The Google Spectrum Database does not support master/slave configurations, so this always yields an UNIMPLEMENTED error.
         *
         * @alias spectrum.paws.verifyDevice
         * @memberOf! spectrum(v1explorer)
         *
         * @param {object} params Parameters for request
         * @param {spectrum(v1explorer).PawsVerifyDeviceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        verifyDevice: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/spectrum/v1explorer/paws/verifyDevice').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Spectrum;
//# sourceMappingURL=v1explorer.js.map