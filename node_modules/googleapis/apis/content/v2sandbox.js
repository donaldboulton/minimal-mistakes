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
 * Content API for Shopping
 *
 * Manages product items, inventory, and Merchant Center accounts for Google Shopping.
 *
 * @example
 * const google = require('googleapis');
 * const content = google.content('v2sandbox');
 *
 * @namespace content
 * @type {Function}
 * @version v2sandbox
 * @variation v2sandbox
 * @param {object=} options Options for Content
 */
function Content(options) {
    const self = this;
    self._options = options || {};
    self.orders = {
        /**
         * content.orders.acknowledge
         *
         * @desc Marks an order as acknowledged. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.acknowledge
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2sandbox).OrdersAcknowledgeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        acknowledge: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}/acknowledge').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.advancetestorder
         *
         * @desc Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment". This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.advancetestorder
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the test order to modify.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        advancetestorder: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/testorders/{orderId}/advance').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.cancel
         *
         * @desc Cancels all line items in an order, making a full refund. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.cancel
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order to cancel.
         * @param {content(v2sandbox).OrdersCancelRequest} params.resource Request body data
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
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}/cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.cancellineitem
         *
         * @desc Cancels a line item, making a full refund. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.cancellineitem
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2sandbox).OrdersCancelLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancellineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}/cancelLineItem').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.createtestorder
         *
         * @desc Sandbox only. Creates a test order. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.createtestorder
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2sandbox).OrdersCreateTestOrderRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createtestorder: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/testorders').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.custombatch
         *
         * @desc Retrieves or modifies multiple orders in a single request. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.custombatch
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {content(v2sandbox).OrdersCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/orders/batch').replace(/([^:]\/)\/+/g, '$1'),
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
         * content.orders.get
         *
         * @desc Retrieves an order from your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.get
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
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
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.getbymerchantorderid
         *
         * @desc Retrieves an order using merchant order id. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.getbymerchantorderid
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.merchantOrderId The merchant order id to be looked for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getbymerchantorderid: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/ordersbymerchantid/{merchantOrderId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'merchantOrderId'],
                pathParams: ['merchantId', 'merchantOrderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.gettestordertemplate
         *
         * @desc Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.gettestordertemplate
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.templateName The name of the template to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        gettestordertemplate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/testordertemplates/{templateName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'templateName'],
                pathParams: ['merchantId', 'templateName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.list
         *
         * @desc Lists the orders in your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.list
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledged Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
         * @param {integer=} params.maxResults The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page. Known issue: All List calls will return all Orders without limit regardless of the value of this field.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.orderBy The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string=} params.placedDateEnd Obtains orders placed before this date (exclusively), in ISO 8601 format.
         * @param {string=} params.placedDateStart Obtains orders placed after this date (inclusively), in ISO 8601 format.
         * @param {string=} params.statuses Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
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
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.refund
         *
         * @desc Refund a portion of the order, up to the full amount paid. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.refund
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order to refund.
         * @param {content(v2sandbox).OrdersRefundRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        refund: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}/refund').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.returnlineitem
         *
         * @desc Returns a line item. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.returnlineitem
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2sandbox).OrdersReturnLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        returnlineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}/returnLineItem').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.shiplineitems
         *
         * @desc Marks line item(s) as shipped. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.shiplineitems
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2sandbox).OrdersShipLineItemsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        shiplineitems: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}/shipLineItems').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.updatemerchantorderid
         *
         * @desc Updates the merchant order ID for a given order. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.updatemerchantorderid
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2sandbox).OrdersUpdateMerchantOrderIdRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updatemerchantorderid: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}/updateMerchantOrderId').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.updateshipment
         *
         * @desc Updates a shipment's status, carrier, and/or tracking ID. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.updateshipment
         * @memberOf! content(v2sandbox)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2sandbox).OrdersUpdateShipmentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateshipment: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/content/v2sandbox/{merchantId}/orders/{orderId}/updateShipment').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Content;
//# sourceMappingURL=v2sandbox.js.map