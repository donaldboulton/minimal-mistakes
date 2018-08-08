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
 * DoubleClick Search API
 *
 * Reports and modifies your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).
 *
 * @example
 * const google = require('googleapis');
 * const doubleclicksearch = google.doubleclicksearch('v2');
 *
 * @namespace doubleclicksearch
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Doubleclicksearch
 */
function Doubleclicksearch(options) {
    const self = this;
    self._options = options || {};
    self.conversion = {
        /**
         * doubleclicksearch.conversion.get
         *
         * @desc Retrieves a list of conversions from a DoubleClick Search engine account.
         *
         * @alias doubleclicksearch.conversion.get
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.adGroupId Numeric ID of the ad group.
         * @param {string=} params.adId Numeric ID of the ad.
         * @param {string} params.advertiserId Numeric ID of the advertiser.
         * @param {string} params.agencyId Numeric ID of the agency.
         * @param {string=} params.campaignId Numeric ID of the campaign.
         * @param {string=} params.criterionId Numeric ID of the criterion.
         * @param {integer} params.endDate Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
         * @param {string} params.engineAccountId Numeric ID of the engine account.
         * @param {integer} params.rowCount The number of conversions to return per call.
         * @param {integer} params.startDate First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
         * @param {integer} params.startRow The 0-based starting index for retrieving conversions results.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['agencyId', 'advertiserId', 'engineAccountId', 'endDate', 'rowCount', 'startDate', 'startRow'],
                pathParams: ['advertiserId', 'agencyId', 'engineAccountId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * doubleclicksearch.conversion.insert
         *
         * @desc Inserts a batch of new conversions into DoubleClick Search.
         *
         * @alias doubleclicksearch.conversion.insert
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {doubleclicksearch(v2).ConversionList} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/conversion').replace(/([^:]\/)\/+/g, '$1'),
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
         * doubleclicksearch.conversion.patch
         *
         * @desc Updates a batch of conversions in DoubleClick Search. This method supports patch semantics.
         *
         * @alias doubleclicksearch.conversion.patch
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.advertiserId Numeric ID of the advertiser.
         * @param {string} params.agencyId Numeric ID of the agency.
         * @param {integer} params.endDate Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
         * @param {string} params.engineAccountId Numeric ID of the engine account.
         * @param {integer} params.rowCount The number of conversions to return per call.
         * @param {integer} params.startDate First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
         * @param {integer} params.startRow The 0-based starting index for retrieving conversions results.
         * @param {doubleclicksearch(v2).ConversionList} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/conversion').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['advertiserId', 'agencyId', 'endDate', 'engineAccountId', 'rowCount', 'startDate', 'startRow'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * doubleclicksearch.conversion.update
         *
         * @desc Updates a batch of conversions in DoubleClick Search.
         *
         * @alias doubleclicksearch.conversion.update
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {doubleclicksearch(v2).ConversionList} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/conversion').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * doubleclicksearch.conversion.updateAvailability
         *
         * @desc Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
         *
         * @alias doubleclicksearch.conversion.updateAvailability
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {doubleclicksearch(v2).UpdateAvailabilityRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateAvailability: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/conversion/updateAvailability').replace(/([^:]\/)\/+/g, '$1'),
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
    self.reports = {
        /**
         * doubleclicksearch.reports.generate
         *
         * @desc Generates and returns a report immediately.
         *
         * @alias doubleclicksearch.reports.generate
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {doubleclicksearch(v2).ReportRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/reports/generate').replace(/([^:]\/)\/+/g, '$1'),
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
         * doubleclicksearch.reports.get
         *
         * @desc Polls for the status of a report request.
         *
         * @alias doubleclicksearch.reports.get
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.reportId ID of the report request being polled.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/reports/{reportId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['reportId'],
                pathParams: ['reportId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * doubleclicksearch.reports.getFile
         *
         * @desc Downloads a report file encoded in UTF-8.
         *
         * @alias doubleclicksearch.reports.getFile
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.reportFragment The index of the report fragment to download.
         * @param {string} params.reportId ID of the report.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getFile: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/reports/{reportId}/files/{reportFragment}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['reportId', 'reportFragment'],
                pathParams: ['reportFragment', 'reportId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * doubleclicksearch.reports.request
         *
         * @desc Inserts a report request into the reporting system.
         *
         * @alias doubleclicksearch.reports.request
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {doubleclicksearch(v2).ReportRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        request: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/reports').replace(/([^:]\/)\/+/g, '$1'),
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
    self.savedColumns = {
        /**
         * doubleclicksearch.savedColumns.list
         *
         * @desc Retrieve the list of saved columns for a specified advertiser.
         *
         * @alias doubleclicksearch.savedColumns.list
         * @memberOf! doubleclicksearch(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.advertiserId DS ID of the advertiser.
         * @param {string} params.agencyId DS ID of the agency.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/savedcolumns').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['agencyId', 'advertiserId'],
                pathParams: ['advertiserId', 'agencyId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Doubleclicksearch;
//# sourceMappingURL=v2.js.map