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
 * Google Civic Information API
 *
 * Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.
 *
 * @example
 * const google = require('googleapis');
 * const civicinfo = google.civicinfo('v2');
 *
 * @namespace civicinfo
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Civicinfo
 */
function Civicinfo(options) {
    const self = this;
    self._options = options || {};
    self.divisions = {
        /**
         * civicinfo.divisions.search
         *
         * @desc Searches for political divisions by their natural name or OCD ID.
         *
         * @alias civicinfo.divisions.search
         * @memberOf! civicinfo(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.query The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
         * @param {civicinfo(v2).DivisionSearchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/divisions').replace(/([^:]\/)\/+/g, '$1'),
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
    self.elections = {
        /**
         * civicinfo.elections.electionQuery
         *
         * @desc List of available elections to query.
         *
         * @alias civicinfo.elections.electionQuery
         * @memberOf! civicinfo(v2)
         *
         * @param {object} params Parameters for request
         * @param {civicinfo(v2).ElectionsQueryRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        electionQuery: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/elections').replace(/([^:]\/)\/+/g, '$1'),
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
         * civicinfo.elections.voterInfoQuery
         *
         * @desc Looks up information relevant to a voter based on the voter's registered address.
         *
         * @alias civicinfo.elections.voterInfoQuery
         * @memberOf! civicinfo(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.address The registered address of the voter to look up.
         * @param {string=} params.electionId The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections
         * @param {boolean=} params.officialOnly If set to true, only data from official state sources will be returned.
         * @param {boolean=} params.returnAllAvailableData If set to true, the query will return the success codeand include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.
         * @param {civicinfo(v2).VoterInfoRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        voterInfoQuery: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/voterinfo').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['address'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.representatives = {
        /**
         * civicinfo.representatives.representativeInfoByAddress
         *
         * @desc Looks up political geography and representative information for a single address.
         *
         * @alias civicinfo.representatives.representativeInfoByAddress
         * @memberOf! civicinfo(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.address The address to look up. May only be specified if the field ocdId is not given in the URL.
         * @param {boolean=} params.includeOffices Whether to return information about offices and officials. If false, only the top-level district information will be returned.
         * @param {string=} params.levels A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
         * @param {string=} params.roles A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
         * @param {civicinfo(v2).RepresentativeInfoRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        representativeInfoByAddress: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/representatives').replace(/([^:]\/)\/+/g, '$1'),
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
         * civicinfo.representatives.representativeInfoByDivision
         *
         * @desc Looks up representative information for a single geographic division.
         *
         * @alias civicinfo.representatives.representativeInfoByDivision
         * @memberOf! civicinfo(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.levels A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
         * @param {string} params.ocdId The Open Civic Data division identifier of the division to look up.
         * @param {boolean=} params.recursive If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.
         * @param {string=} params.roles A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
         * @param {civicinfo(v2).DivisionRepresentativeInfoRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        representativeInfoByDivision: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/representatives/{ocdId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['ocdId'],
                pathParams: ['ocdId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Civicinfo;
//# sourceMappingURL=v2.js.map