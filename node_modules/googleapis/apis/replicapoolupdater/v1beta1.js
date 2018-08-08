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
 * Google Compute Engine Instance Group Updater API
 *
 * [Deprecated. Please use compute.instanceGroupManagers.update method. replicapoolupdater API will be disabled after December 30th, 2016] Updates groups of Compute Engine instances.
 *
 * @example
 * const google = require('googleapis');
 * const replicapoolupdater = google.replicapoolupdater('v1beta1');
 *
 * @namespace replicapoolupdater
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Replicapoolupdater
 */
function Replicapoolupdater(options) {
    const self = this;
    self._options = options || {};
    self.rollingUpdates = {
        /**
         * replicapoolupdater.rollingUpdates.cancel
         *
         * @desc Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.
         *
         * @alias replicapoolupdater.rollingUpdates.cancel
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * replicapoolupdater.rollingUpdates.get
         *
         * @desc Returns information about an update.
         *
         * @alias replicapoolupdater.rollingUpdates.get
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
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
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * replicapoolupdater.rollingUpdates.insert
         *
         * @desc Inserts and starts a new update.
         *
         * @alias replicapoolupdater.rollingUpdates.insert
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {replicapoolupdater(v1beta1).RollingUpdate} params.resource Request body data
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
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * replicapoolupdater.rollingUpdates.list
         *
         * @desc Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.
         *
         * @alias replicapoolupdater.rollingUpdates.list
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Optional. Filter expression for filtering listed resources.
         * @param {integer=} params.maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @param {string=} params.pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.zone The name of the zone in which the update's target resides.
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
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * replicapoolupdater.rollingUpdates.listInstanceUpdates
         *
         * @desc Lists the current status for each instance within a given update.
         *
         * @alias replicapoolupdater.rollingUpdates.listInstanceUpdates
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Optional. Filter expression for filtering listed resources.
         * @param {integer=} params.maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @param {string=} params.pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listInstanceUpdates: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/instanceUpdates').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * replicapoolupdater.rollingUpdates.pause
         *
         * @desc Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.
         *
         * @alias replicapoolupdater.rollingUpdates.pause
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        pause: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/pause').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * replicapoolupdater.rollingUpdates.resume
         *
         * @desc Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.
         *
         * @alias replicapoolupdater.rollingUpdates.resume
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resume: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/resume').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * replicapoolupdater.rollingUpdates.rollback
         *
         * @desc Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.
         *
         * @alias replicapoolupdater.rollingUpdates.rollback
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rollback: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/rollback').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.zoneOperations = {
        /**
         * replicapoolupdater.zoneOperations.get
         *
         * @desc Retrieves the specified zone-specific operation resource.
         *
         * @alias replicapoolupdater.zoneOperations.get
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the operation resource to return.
         * @param {string} params.project Name of the project scoping this request.
         * @param {string} params.zone Name of the zone scoping this request.
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
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/operations/{operation}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'operation'],
                pathParams: ['operation', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * replicapoolupdater.zoneOperations.list
         *
         * @desc Retrieves the list of Operation resources contained within the specified zone.
         *
         * @alias replicapoolupdater.zoneOperations.list
         * @memberOf! replicapoolupdater(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Optional. Filter expression for filtering listed resources.
         * @param {integer=} params.maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @param {string=} params.pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @param {string} params.project Name of the project scoping this request.
         * @param {string} params.zone Name of the zone scoping this request.
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
                    url: (rootUrl + '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/operations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Replicapoolupdater;
//# sourceMappingURL=v1beta1.js.map