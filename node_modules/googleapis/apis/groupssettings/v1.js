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
 * Groups Settings API
 *
 * Lets you manage permission levels and related settings of a group.
 *
 * @example
 * const google = require('googleapis');
 * const groupssettings = google.groupssettings('v1');
 *
 * @namespace groupssettings
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Groupssettings
 */
function Groupssettings(options) {
    const self = this;
    self._options = options || {};
    self.groups = {
        /**
         * groupsSettings.groups.get
         *
         * @desc Gets one resource by id.
         *
         * @alias groupsSettings.groups.get
         * @memberOf! groupssettings(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupUniqueId The resource ID
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
                    url: (rootUrl + '/groups/v1/groups/{groupUniqueId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['groupUniqueId'],
                pathParams: ['groupUniqueId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * groupsSettings.groups.patch
         *
         * @desc Updates an existing resource. This method supports patch semantics.
         *
         * @alias groupsSettings.groups.patch
         * @memberOf! groupssettings(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupUniqueId The resource ID
         * @param {groupssettings(v1).Groups} params.resource Request body data
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
                    url: (rootUrl + '/groups/v1/groups/{groupUniqueId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['groupUniqueId'],
                pathParams: ['groupUniqueId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * groupsSettings.groups.update
         *
         * @desc Updates an existing resource.
         *
         * @alias groupsSettings.groups.update
         * @memberOf! groupssettings(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupUniqueId The resource ID
         * @param {groupssettings(v1).Groups} params.resource Request body data
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
                    url: (rootUrl + '/groups/v1/groups/{groupUniqueId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['groupUniqueId'],
                pathParams: ['groupUniqueId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Groupssettings;
//# sourceMappingURL=v1.js.map