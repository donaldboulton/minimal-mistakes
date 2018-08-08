"use strict";
/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
const rimraf = require("rimraf");
const path = require("path");
const minimist = require("minimist");
const source_map_support_1 = require("source-map-support");
// enable source map support
source_map_support_1.install();
const debug = true;
const argv = minimist(process.argv.slice(2));
// constructors
const gen = new generator_1.default({ debug: debug, includePrivate: false });
const args = argv._;
if (args.length) {
    args.forEach((url) => {
        gen.generateAPI(url, (err) => {
            if (err) {
                throw err;
            }
            console.log('Generated API for ' + url);
        });
    });
}
else {
    console.log('Removing old APIs...');
    rimraf(path.join(__dirname, '..', 'apis'), (err) => {
        if (err) {
            throw err;
        }
        console.log('Generating APIs...');
        gen.generateAllAPIs((err) => {
            if (err) {
                throw err;
            }
            console.log('Finished generating APIs!');
        });
    });
}
//# sourceMappingURL=generate.js.map