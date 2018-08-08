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
 * Google Analytics Reporting API
 *
 * Accesses Analytics report data.
 *
 * @example
 * const google = require('googleapis');
 * const analyticsreporting = google.analyticsreporting('v4');
 *
 * @namespace analyticsreporting
 * @type {Function}
 * @version v4
 * @variation v4
 * @param {object=} options Options for Analyticsreporting
 */
function Analyticsreporting(options) {
    const self = this;
    self._options = options || {};
    self.reports = {
        /**
         * analyticsreporting.reports.batchGet
         *
         * @desc Returns the Analytics data.
         *
         * @alias analyticsreporting.reports.batchGet
         * @memberOf! analyticsreporting(v4)
         *
         * @param {object} params Parameters for request
         * @param {analyticsreporting(v4).GetReportsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchGet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://analyticsreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v4/reports:batchGet').replace(/([^:]\/)\/+/g, '$1'),
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
module.exports = Analyticsreporting;
//# sourceMappingURL=v4.js.map