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
 * Admin Data Transfer API
 *
 * Transfers user data from one user to another.
 *
 * @example
 * const google = require('googleapis');
 * const admin = google.admin('datatransfer_v1');
 *
 * @namespace admin
 * @type {Function}
 * @version datatransfer_v1
 * @variation datatransfer_v1
 * @param {object=} options Options for Admin
 */
function Admin(options) {
    const self = this;
    self._options = options || {};
    self.applications = {
        /**
         * datatransfer.applications.get
         *
         * @desc Retrieves information about an application for the given application ID.
         *
         * @alias datatransfer.applications.get
         * @memberOf! admin(datatransfer_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId ID of the application resource to be retrieved.
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
                    url: (rootUrl + '/admin/datatransfer/v1/applications/{applicationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['applicationId'],
                pathParams: ['applicationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * datatransfer.applications.list
         *
         * @desc Lists the applications available for data transfer for a customer.
         *
         * @alias datatransfer.applications.list
         * @memberOf! admin(datatransfer_v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.customerId Immutable ID of the Google Apps account.
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100.
         * @param {string=} params.pageToken Token to specify next page in the list.
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
                    url: (rootUrl + '/admin/datatransfer/v1/applications').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.transfers = {
        /**
         * datatransfer.transfers.get
         *
         * @desc Retrieves a data transfer request by its resource ID.
         *
         * @alias datatransfer.transfers.get
         * @memberOf! admin(datatransfer_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.dataTransferId ID of the resource to be retrieved. This is returned in the response from the insert method.
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
                    url: (rootUrl + '/admin/datatransfer/v1/transfers/{dataTransferId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['dataTransferId'],
                pathParams: ['dataTransferId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * datatransfer.transfers.insert
         *
         * @desc Inserts a data transfer request.
         *
         * @alias datatransfer.transfers.insert
         * @memberOf! admin(datatransfer_v1)
         *
         * @param {object} params Parameters for request
         * @param {admin(datatransfer_v1).DataTransfer} params.resource Request body data
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
                    url: (rootUrl + '/admin/datatransfer/v1/transfers').replace(/([^:]\/)\/+/g, '$1'),
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
         * datatransfer.transfers.list
         *
         * @desc Lists the transfers for a customer by source user, destination user, or status.
         *
         * @alias datatransfer.transfers.list
         * @memberOf! admin(datatransfer_v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.customerId Immutable ID of the Google Apps account.
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100.
         * @param {string=} params.newOwnerUserId Destination user's profile ID.
         * @param {string=} params.oldOwnerUserId Source user's profile ID.
         * @param {string=} params.pageToken Token to specify the next page in the list.
         * @param {string=} params.status Status of the transfer.
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
                    url: (rootUrl + '/admin/datatransfer/v1/transfers').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
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
module.exports = Admin;
//# sourceMappingURL=datatransfer_v1.js.map