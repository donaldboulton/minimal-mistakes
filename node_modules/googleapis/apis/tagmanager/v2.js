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
 * Tag Manager API
 *
 * Accesses Tag Manager accounts and containers.
 *
 * @example
 * const google = require('googleapis');
 * const tagmanager = google.tagmanager('v2');
 *
 * @namespace tagmanager
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Tagmanager
 */
function Tagmanager(options) {
    const self = this;
    self._options = options || {};
    self.accounts = {
        /**
         * tagmanager.accounts.get
         *
         * @desc Gets a GTM Account.
         *
         * @alias tagmanager.accounts.get
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.path GTM Accounts's API relative path. Example: accounts/{account_id}
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
                    url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['path'],
                pathParams: ['path'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * tagmanager.accounts.list
         *
         * @desc Lists all GTM Accounts that a user has access to.
         *
         * @alias tagmanager.accounts.list
         * @memberOf! tagmanager(v2)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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
                    url: (rootUrl + '/tagmanager/v2/accounts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * tagmanager.accounts.update
         *
         * @desc Updates a GTM Account.
         *
         * @alias tagmanager.accounts.update
         * @memberOf! tagmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the account in storage.
         * @param {string} params.path GTM Accounts's API relative path. Example: accounts/{account_id}
         * @param {tagmanager(v2).Account} params.resource Request body data
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
                    url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['path'],
                pathParams: ['path'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        containers: {
            /**
             * tagmanager.accounts.containers.create
             *
             * @desc Creates a Container.
             *
             * @alias tagmanager.accounts.containers.create
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent GTM Account's API relative path. Example: accounts/{account_id}.
             * @param {tagmanager(v2).Container} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            create: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/tagmanager/v2/{parent}/containers').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * tagmanager.accounts.containers.delete
             *
             * @desc Deletes a Container.
             *
             * @alias tagmanager.accounts.containers.delete
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['path'],
                    pathParams: ['path'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * tagmanager.accounts.containers.get
             *
             * @desc Gets a Container.
             *
             * @alias tagmanager.accounts.containers.get
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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
                        url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['path'],
                    pathParams: ['path'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * tagmanager.accounts.containers.list
             *
             * @desc Lists all Containers that belongs to a GTM Account.
             *
             * @alias tagmanager.accounts.containers.list
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Continuation token for fetching the next page of results.
             * @param {string} params.parent GTM Accounts's API relative path. Example: accounts/{account_id}.
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
                        url: (rootUrl + '/tagmanager/v2/{parent}/containers').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * tagmanager.accounts.containers.update
             *
             * @desc Updates a Container.
             *
             * @alias tagmanager.accounts.containers.update
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container in storage.
             * @param {string} params.path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
             * @param {tagmanager(v2).Container} params.resource Request body data
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
                        url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['path'],
                    pathParams: ['path'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            environments: {
                /**
                 * tagmanager.accounts.containers.environments.create
                 *
                 * @desc Creates a GTM Environment.
                 *
                 * @alias tagmanager.accounts.containers.environments.create
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
                 * @param {tagmanager(v2).Environment} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                create: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{parent}/environments').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.environments.delete
                 *
                 * @desc Deletes a GTM Environment.
                 *
                 * @alias tagmanager.accounts.containers.environments.delete
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                delete: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.environments.get
                 *
                 * @desc Gets a GTM Environment.
                 *
                 * @alias tagmanager.accounts.containers.environments.get
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
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
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.environments.list
                 *
                 * @desc Lists all GTM Environments of a GTM Container.
                 *
                 * @alias tagmanager.accounts.containers.environments.list
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                 * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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
                            url: (rootUrl + '/tagmanager/v2/{parent}/environments').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.environments.patch
                 *
                 * @desc Updates a GTM Environment. This method supports patch semantics.
                 *
                 * @alias tagmanager.accounts.containers.environments.patch
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
                 * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
                 * @param {tagmanager(v2).Environment} params.resource Request body data
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
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.environments.reauthorize
                 *
                 * @desc Re-generates the authorization code for a GTM Environment.
                 *
                 * @alias tagmanager.accounts.containers.environments.reauthorize
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
                 * @param {tagmanager(v2).Environment} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                reauthorize: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}:reauthorize').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.environments.update
                 *
                 * @desc Updates a GTM Environment.
                 *
                 * @alias tagmanager.accounts.containers.environments.update
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
                 * @param {string} params.path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
                 * @param {tagmanager(v2).Environment} params.resource Request body data
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
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            version_headers: {
                /**
                 * tagmanager.accounts.containers.version_headers.latest
                 *
                 * @desc Gets the latest container version header
                 *
                 * @alias tagmanager.accounts.containers.version_headers.latest
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                latest: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{parent}/version_headers:latest').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.version_headers.list
                 *
                 * @desc Lists all Container Versions of a GTM Container.
                 *
                 * @alias tagmanager.accounts.containers.version_headers.list
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {boolean=} params.includeDeleted Also retrieve deleted (archived) versions when true.
                 * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                 * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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
                            url: (rootUrl + '/tagmanager/v2/{parent}/version_headers').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            versions: {
                /**
                 * tagmanager.accounts.containers.versions.delete
                 *
                 * @desc Deletes a Container Version.
                 *
                 * @alias tagmanager.accounts.containers.versions.delete
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                delete: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.versions.get
                 *
                 * @desc Gets a Container Version.
                 *
                 * @alias tagmanager.accounts.containers.versions.get
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.containerVersionId The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
                 * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
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
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.versions.live
                 *
                 * @desc Gets the live (i.e. published) container version
                 *
                 * @alias tagmanager.accounts.containers.versions.live
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                live: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{parent}/versions:live').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.versions.publish
                 *
                 * @desc Publishes a Container Version.
                 *
                 * @alias tagmanager.accounts.containers.versions.publish
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
                 * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                publish: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}:publish').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.versions.set_latest
                 *
                 * @desc Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
                 *
                 * @alias tagmanager.accounts.containers.versions.set_latest
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                set_latest: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}:set_latest').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.versions.undelete
                 *
                 * @desc Undeletes a Container Version.
                 *
                 * @alias tagmanager.accounts.containers.versions.undelete
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                undelete: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}:undelete').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.versions.update
                 *
                 * @desc Updates a Container Version.
                 *
                 * @alias tagmanager.accounts.containers.versions.update
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
                 * @param {string} params.path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
                 * @param {tagmanager(v2).ContainerVersion} params.resource Request body data
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
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            workspaces: {
                /**
                 * tagmanager.accounts.containers.workspaces.create
                 *
                 * @desc Creates a Workspace.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.create
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
                 * @param {tagmanager(v2).Workspace} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                create: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{parent}/workspaces').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.create_version
                 *
                 * @desc Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.create_version
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                 * @param {tagmanager(v2).CreateContainerVersionRequestVersionOptions} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                create_version: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}:create_version').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.delete
                 *
                 * @desc Deletes a Workspace.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.delete
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                delete: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.get
                 *
                 * @desc Gets a Workspace.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.get
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.getProposal
                 *
                 * @desc Gets a GTM Workspace Proposal.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.getProposal
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                getProposal: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.getStatus
                 *
                 * @desc Finds conflicting and modified entities in the workspace.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.getStatus
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                getStatus: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}/status').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.list
                 *
                 * @desc Lists all Workspaces that belong to a GTM Container.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.list
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                 * @param {string} params.parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
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
                            url: (rootUrl + '/tagmanager/v2/{parent}/workspaces').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.quick_preview
                 *
                 * @desc Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.quick_preview
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                quick_preview: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}:quick_preview').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.resolve_conflict
                 *
                 * @desc Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.resolve_conflict
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
                 * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                 * @param {tagmanager(v2).Entity} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                resolve_conflict: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}:resolve_conflict').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.sync
                 *
                 * @desc Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.sync
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                sync: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}:sync').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.update
                 *
                 * @desc Updates a Workspace.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.update
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the workspace in storage.
                 * @param {string} params.path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                 * @param {tagmanager(v2).Workspace} params.resource Request body data
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
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * tagmanager.accounts.containers.workspaces.updateProposal
                 *
                 * @desc Updates a GTM Workspace Proposal.
                 *
                 * @alias tagmanager.accounts.containers.workspaces.updateProposal
                 * @memberOf! tagmanager(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
                 * @param {tagmanager(v2).UpdateWorkspaceProposalRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                updateProposal: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['path'],
                        pathParams: ['path'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                built_in_variables: {
                    /**
                     * tagmanager.accounts.containers.workspaces.built_in_variables.create
                     *
                     * @desc Creates one or more GTM Built-In Variables.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.built_in_variables.create
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                     * @param {string=} params.type The types of built-in variables to enable.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{parent}/built_in_variables').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.built_in_variables.delete
                     *
                     * @desc Deletes one or more GTM Built-In Variables.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.built_in_variables.delete
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
                     * @param {string=} params.type The types of built-in variables to delete.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    delete: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.built_in_variables.list
                     *
                     * @desc Lists all the enabled Built-In Variables of a GTM Container.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.built_in_variables.list
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/built_in_variables').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.built_in_variables.revert
                     *
                     * @desc Reverts changes to a GTM Built-In Variables in a GTM Workspace.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.built_in_variables.revert
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
                     * @param {string=} params.type The type of built-in variable to revert.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    revert: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}/built_in_variables:revert').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                folders: {
                    /**
                     * tagmanager.accounts.containers.workspaces.folders.create
                     *
                     * @desc Creates a GTM Folder.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.folders.create
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                     * @param {tagmanager(v2).Folder} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{parent}/folders').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.folders.delete
                     *
                     * @desc Deletes a GTM Folder.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.folders.delete
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    delete: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.folders.entities
                     *
                     * @desc List all entities in a GTM Folder.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.folders.entities
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                     * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    entities: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:entities').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.folders.get
                     *
                     * @desc Gets a GTM Folder.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.folders.get
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
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
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.folders.list
                     *
                     * @desc Lists all GTM Folders of a Container.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.folders.list
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/folders').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
                     *
                     * @desc Moves entities to a GTM Folder.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
                     * @param {string=} params.tagId The tags to be moved to the folder.
                     * @param {string=} params.triggerId The triggers to be moved to the folder.
                     * @param {string=} params.variableId The variables to be moved to the folder.
                     * @param {tagmanager(v2).Folder} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    move_entities_to_folder: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:move_entities_to_folder').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.folders.revert
                     *
                     * @desc Reverts changes to a GTM Folder in a GTM Workspace.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.folders.revert
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the tag in storage.
                     * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    revert: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:revert').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.folders.update
                     *
                     * @desc Updates a GTM Folder.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.folders.update
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the folder in storage.
                     * @param {string} params.path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
                     * @param {tagmanager(v2).Folder} params.resource Request body data
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
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                proposal: {
                    /**
                     * tagmanager.accounts.containers.workspaces.proposal.create
                     *
                     * @desc Creates a GTM Workspace Proposal.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.proposal.create
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{aid}/containers/{cid}/workspace/{wid}
                     * @param {tagmanager(v2).CreateWorkspaceProposalRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{parent}/proposal').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.proposal.delete
                     *
                     * @desc Deletes a GTM Workspace Proposal.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.proposal.delete
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    delete: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                tags: {
                    /**
                     * tagmanager.accounts.containers.workspaces.tags.create
                     *
                     * @desc Creates a GTM Tag.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.tags.create
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                     * @param {tagmanager(v2).Tag} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{parent}/tags').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.tags.delete
                     *
                     * @desc Deletes a GTM Tag.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.tags.delete
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    delete: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.tags.get
                     *
                     * @desc Gets a GTM Tag.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.tags.get
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
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
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.tags.list
                     *
                     * @desc Lists all GTM Tags of a Container.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.tags.list
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/tags').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.tags.revert
                     *
                     * @desc Reverts changes to a GTM Tag in a GTM Workspace.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.tags.revert
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of thetag in storage.
                     * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    revert: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:revert').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.tags.update
                     *
                     * @desc Updates a GTM Tag.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.tags.update
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the tag in storage.
                     * @param {string} params.path GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
                     * @param {tagmanager(v2).Tag} params.resource Request body data
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
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                triggers: {
                    /**
                     * tagmanager.accounts.containers.workspaces.triggers.create
                     *
                     * @desc Creates a GTM Trigger.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.triggers.create
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                     * @param {tagmanager(v2).Trigger} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{parent}/triggers').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.triggers.delete
                     *
                     * @desc Deletes a GTM Trigger.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.triggers.delete
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    delete: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.triggers.get
                     *
                     * @desc Gets a GTM Trigger.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.triggers.get
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
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
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.triggers.list
                     *
                     * @desc Lists all GTM Triggers of a Container.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.triggers.list
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                     * @param {string} params.parent GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/triggers').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.triggers.revert
                     *
                     * @desc Reverts changes to a GTM Trigger in a GTM Workspace.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.triggers.revert
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the trigger in storage.
                     * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    revert: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:revert').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.triggers.update
                     *
                     * @desc Updates a GTM Trigger.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.triggers.update
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the trigger in storage.
                     * @param {string} params.path GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
                     * @param {tagmanager(v2).Trigger} params.resource Request body data
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
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                variables: {
                    /**
                     * tagmanager.accounts.containers.workspaces.variables.create
                     *
                     * @desc Creates a GTM Variable.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.variables.create
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
                     * @param {tagmanager(v2).Variable} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    create: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{parent}/variables').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.variables.delete
                     *
                     * @desc Deletes a GTM Variable.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.variables.delete
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    delete: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.variables.get
                     *
                     * @desc Gets a GTM Variable.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.variables.get
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
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
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.variables.list
                     *
                     * @desc Lists all GTM Variables of a Container.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.variables.list
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                     * @param {string} params.parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
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
                                url: (rootUrl + '/tagmanager/v2/{parent}/variables').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.variables.revert
                     *
                     * @desc Reverts changes to a GTM Variable in a GTM Workspace.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.variables.revert
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the variable in storage.
                     * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    revert: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/tagmanager/v2/{path}:revert').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * tagmanager.accounts.containers.workspaces.variables.update
                     *
                     * @desc Updates a GTM Variable.
                     *
                     * @alias tagmanager.accounts.containers.workspaces.variables.update
                     * @memberOf! tagmanager(v2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.fingerprint When provided, this fingerprint must match the fingerprint of the variable in storage.
                     * @param {string} params.path GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
                     * @param {tagmanager(v2).Variable} params.resource Request body data
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
                                url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'PUT'
                            }, options),
                            params: params,
                            requiredParams: ['path'],
                            pathParams: ['path'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                }
            }
        },
        user_permissions: {
            /**
             * tagmanager.accounts.user_permissions.create
             *
             * @desc Creates a user's Account & Container access.
             *
             * @alias tagmanager.accounts.user_permissions.create
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent GTM Account's API relative path. Example: accounts/{account_id}
             * @param {tagmanager(v2).UserPermission} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            create: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/tagmanager/v2/{parent}/user_permissions').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * tagmanager.accounts.user_permissions.delete
             *
             * @desc Removes a user from the account, revoking access to it and all of its containers.
             *
             * @alias tagmanager.accounts.user_permissions.delete
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['path'],
                    pathParams: ['path'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * tagmanager.accounts.user_permissions.get
             *
             * @desc Gets a user's Account & Container access.
             *
             * @alias tagmanager.accounts.user_permissions.get
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
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
                        url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['path'],
                    pathParams: ['path'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * tagmanager.accounts.user_permissions.list
             *
             * @desc List all users that have access to the account along with Account and Container user access granted to each of them.
             *
             * @alias tagmanager.accounts.user_permissions.list
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Continuation token for fetching the next page of results.
             * @param {string} params.parent GTM Accounts's API relative path. Example: accounts/{account_id}
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
                        url: (rootUrl + '/tagmanager/v2/{parent}/user_permissions').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * tagmanager.accounts.user_permissions.update
             *
             * @desc Updates a user's Account & Container access.
             *
             * @alias tagmanager.accounts.user_permissions.update
             * @memberOf! tagmanager(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
             * @param {tagmanager(v2).UserPermission} params.resource Request body data
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
                        url: (rootUrl + '/tagmanager/v2/{path}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['path'],
                    pathParams: ['path'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Tagmanager;
//# sourceMappingURL=v2.js.map