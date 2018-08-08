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
 * Enterprise Apps Reseller API
 *
 * Creates and manages your customers and their subscriptions.
 *
 * @example
 * const google = require('googleapis');
 * const reseller = google.reseller('v1');
 *
 * @namespace reseller
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Reseller
 */
function Reseller(options) {
    const self = this;
    self._options = options || {};
    self.customers = {
        /**
         * reseller.customers.get
         *
         * @desc Get a customer account.
         *
         * @alias reseller.customers.get
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
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
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.customers.insert
         *
         * @desc Order a new customer's account.
         *
         * @alias reseller.customers.insert
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
         * @param {reseller(v1).Customer} params.resource Request body data
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
                    url: (rootUrl + '/apps/reseller/v1/customers').replace(/([^:]\/)\/+/g, '$1'),
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
         * reseller.customers.patch
         *
         * @desc Update a customer account's settings. This method supports patch semantics.
         *
         * @alias reseller.customers.patch
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {reseller(v1).Customer} params.resource Request body data
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
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.customers.update
         *
         * @desc Update a customer account's settings.
         *
         * @alias reseller.customers.update
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {reseller(v1).Customer} params.resource Request body data
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
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.resellernotify = {
        /**
         * reseller.resellernotify.getwatchdetails
         *
         * @desc Returns all the details of the watch corresponding to the reseller.
         *
         * @alias reseller.resellernotify.getwatchdetails
         * @memberOf! reseller(v1)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getwatchdetails: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/reseller/v1/resellernotify/getwatchdetails').replace(/([^:]\/)\/+/g, '$1'),
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
         * reseller.resellernotify.register
         *
         * @desc Registers a Reseller for receiving notifications.
         *
         * @alias reseller.resellernotify.register
         * @memberOf! reseller(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.serviceAccountEmailAddress The service account which will own the created Cloud-PubSub topic.
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
                    url: (rootUrl + '/apps/reseller/v1/resellernotify/register').replace(/([^:]\/)\/+/g, '$1'),
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
         * reseller.resellernotify.unregister
         *
         * @desc Unregisters a Reseller for receiving notifications.
         *
         * @alias reseller.resellernotify.unregister
         * @memberOf! reseller(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.serviceAccountEmailAddress The service account which owns the Cloud-PubSub topic.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        unregister: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/reseller/v1/resellernotify/unregister').replace(/([^:]\/)\/+/g, '$1'),
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
    self.subscriptions = {
        /**
         * reseller.subscriptions.activate
         *
         * @desc Activates a subscription previously suspended by the reseller
         *
         * @alias reseller.subscriptions.activate
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        activate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'subscriptionId'],
                pathParams: ['customerId', 'subscriptionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.subscriptions.changePlan
         *
         * @desc Update a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments.
         *
         * @alias reseller.subscriptions.changePlan
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {reseller(v1).ChangePlanRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        changePlan: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'subscriptionId'],
                pathParams: ['customerId', 'subscriptionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.subscriptions.changeRenewalSettings
         *
         * @desc Update a user license's renewal settings. This is applicable for accounts with annual commitment plans only.
         *
         * @alias reseller.subscriptions.changeRenewalSettings
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {reseller(v1).RenewalSettings} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        changeRenewalSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'subscriptionId'],
                pathParams: ['customerId', 'subscriptionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.subscriptions.changeSeats
         *
         * @desc Update a subscription's user license settings.
         *
         * @alias reseller.subscriptions.changeSeats
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {reseller(v1).Seats} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        changeSeats: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'subscriptionId'],
                pathParams: ['customerId', 'subscriptionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.subscriptions.delete
         *
         * @desc Cancel, suspend or transfer a subscription to direct.
         *
         * @alias reseller.subscriptions.delete
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.deletionType The deletionType query string enables the cancellation, downgrade, or suspension of a subscription.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
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
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customerId', 'subscriptionId', 'deletionType'],
                pathParams: ['customerId', 'subscriptionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.subscriptions.get
         *
         * @desc Get a specific subscription.
         *
         * @alias reseller.subscriptions.get
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
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
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'subscriptionId'],
                pathParams: ['customerId', 'subscriptionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.subscriptions.insert
         *
         * @desc Create or transfer a subscription.
         *
         * @alias reseller.subscriptions.insert
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {reseller(v1).Subscription} params.resource Request body data
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
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.subscriptions.list
         *
         * @desc List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.
         *
         * @alias reseller.subscriptions.list
         * @memberOf! reseller(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
         * @param {string=} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string=} params.customerNamePrefix When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes exam.com, example20.com and example.com:   - exa -- Returns all customer names that start with 'exa' which could include exam.com, example20.com, and example.com. A name prefix is similar to using a regular expression's asterisk, exa*.  - example -- Returns example20.com and example.com.
         * @param {integer=} params.maxResults When retrieving a large list, the maxResults is the maximum number of results per page. The nextPageToken value takes you to the next page. The default is 20.
         * @param {string=} params.pageToken Token to specify next page in the list
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
                    url: (rootUrl + '/apps/reseller/v1/subscriptions').replace(/([^:]\/)\/+/g, '$1'),
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
         * reseller.subscriptions.startPaidService
         *
         * @desc Immediately move a 30-day free trial subscription to a paid service subscription.
         *
         * @alias reseller.subscriptions.startPaidService
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startPaidService: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'subscriptionId'],
                pathParams: ['customerId', 'subscriptionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * reseller.subscriptions.suspend
         *
         * @desc Suspends an active subscription.
         *
         * @alias reseller.subscriptions.suspend
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        suspend: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'subscriptionId'],
                pathParams: ['customerId', 'subscriptionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Reseller;
//# sourceMappingURL=v1.js.map