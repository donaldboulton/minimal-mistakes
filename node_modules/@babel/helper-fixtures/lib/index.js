"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;
exports.multiple = multiple;
exports.readFile = readFile;

function _cloneDeep() {
  const data = _interopRequireDefault(require("lodash/cloneDeep"));

  _cloneDeep = function () {
    return data;
  };

  return data;
}

function _trimEnd() {
  const data = _interopRequireDefault(require("lodash/trimEnd"));

  _trimEnd = function () {
    return data;
  };

  return data;
}

function _tryResolve() {
  const data = _interopRequireDefault(require("try-resolve"));

  _tryResolve = function () {
    return data;
  };

  return data;
}

function _clone() {
  const data = _interopRequireDefault(require("lodash/clone"));

  _clone = function () {
    return data;
  };

  return data;
}

function _extend() {
  const data = _interopRequireDefault(require("lodash/extend"));

  _extend = function () {
    return data;
  };

  return data;
}

function _semver() {
  const data = _interopRequireDefault(require("semver"));

  _semver = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _fs() {
  const data = _interopRequireDefault(require("fs"));

  _fs = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nodeVersion = _semver().default.clean(process.version.slice(1));

function humanize(val, noext) {
  if (noext) val = _path().default.basename(val, _path().default.extname(val));
  return val.replace(/-/g, " ");
}

function assertDirectory(loc) {
  if (!_fs().default.statSync(loc).isDirectory()) {
    throw new Error(`Expected ${loc} to be a directory.`);
  }
}

function shouldIgnore(name, blacklist) {
  if (blacklist && blacklist.indexOf(name) >= 0) {
    return true;
  }

  const ext = _path().default.extname(name);

  const base = _path().default.basename(name, ext);

  return name[0] === "." || ext === ".md" || base === "LICENSE" || base === "options";
}

const EXTENSIONS = [".js", ".mjs", ".ts", ".tsx"];

function findFile(filepath, allowJSON) {
  const matches = [];

  for (const ext of EXTENSIONS.concat(allowJSON ? ".json" : [])) {
    const name = filepath + ext;
    if (_fs().default.existsSync(name)) matches.push(name);
  }

  if (matches.length > 1) {
    throw new Error(`Found conflicting file matches: ${matches.join(", ")}`);
  }

  return matches[0] || filepath + ".js";
}

function get(entryLoc) {
  const suites = [];
  let rootOpts = {};
  const rootOptsLoc = (0, _tryResolve().default)(entryLoc + "/options");
  if (rootOptsLoc) rootOpts = require(rootOptsLoc);

  for (const suiteName of _fs().default.readdirSync(entryLoc)) {
    if (shouldIgnore(suiteName)) continue;
    const suite = {
      options: (0, _clone().default)(rootOpts),
      tests: [],
      title: humanize(suiteName),
      filename: entryLoc + "/" + suiteName
    };
    assertDirectory(suite.filename);
    suites.push(suite);
    const suiteOptsLoc = (0, _tryResolve().default)(suite.filename + "/options");
    if (suiteOptsLoc) suite.options = require(suiteOptsLoc);

    for (const taskName of _fs().default.readdirSync(suite.filename)) {
      push(taskName, suite.filename + "/" + taskName);
    }

    function push(taskName, taskDir) {
      const actualLoc = findFile(taskDir + "/input");
      const expectLoc = findFile(taskDir + "/output", true);
      let execLoc = findFile(taskDir + "/exec");

      const actualLocAlias = suiteName + "/" + taskName + "/" + _path().default.basename(actualLoc);

      const expectLocAlias = suiteName + "/" + taskName + "/" + _path().default.basename(actualLoc);

      let execLocAlias = suiteName + "/" + taskName + "/" + _path().default.basename(actualLoc);

      if (_fs().default.statSync(taskDir).isFile()) {
        const ext = _path().default.extname(taskDir);

        if (EXTENSIONS.indexOf(ext) === -1) return;
        execLoc = taskDir;
        execLocAlias = suiteName + "/" + taskName;
      }

      const taskOpts = (0, _cloneDeep().default)(suite.options);
      const taskOptsLoc = (0, _tryResolve().default)(taskDir + "/options");
      if (taskOptsLoc) (0, _extend().default)(taskOpts, require(taskOptsLoc));
      const test = {
        optionsDir: taskOptsLoc ? _path().default.dirname(taskOptsLoc) : null,
        title: humanize(taskName, true),
        disabled: taskName[0] === ".",
        options: taskOpts,
        exec: {
          loc: execLoc,
          code: readFile(execLoc),
          filename: execLocAlias
        },
        actual: {
          loc: actualLoc,
          code: readFile(actualLoc),
          filename: actualLocAlias
        },
        expect: {
          loc: expectLoc,
          code: readFile(expectLoc),
          filename: expectLocAlias
        }
      };

      if (taskOpts.minNodeVersion) {
        const minimumVersion = _semver().default.clean(taskOpts.minNodeVersion);

        if (minimumVersion == null) {
          throw new Error(`'minNodeVersion' has invalid semver format: ${taskOpts.minNodeVersion}`);
        }

        if (_semver().default.lt(nodeVersion, minimumVersion)) {
          return;
        }

        delete taskOpts.minNodeVersion;
      }

      if (test.exec.code.indexOf("// Async.") >= 0) {
        return;
      }

      suite.tests.push(test);
      const sourceMappingsLoc = taskDir + "/source-mappings.json";

      if (_fs().default.existsSync(sourceMappingsLoc)) {
        test.sourceMappings = JSON.parse(readFile(sourceMappingsLoc));
      }

      const sourceMapLoc = taskDir + "/source-map.json";

      if (_fs().default.existsSync(sourceMapLoc)) {
        test.sourceMap = JSON.parse(readFile(sourceMapLoc));
      }

      const inputMapLoc = taskDir + "/input-source-map.json";

      if (_fs().default.existsSync(inputMapLoc)) {
        test.inputSourceMap = JSON.parse(readFile(inputMapLoc));
      }

      if (taskOpts.throws) {
        if (test.expect.code) {
          throw new Error("Test cannot throw and also return output code: " + expectLoc);
        }

        if (test.sourceMappings) {
          throw new Error("Test cannot throw and also return sourcemappings: " + sourceMappingsLoc);
        }

        if (test.sourceMap) {
          throw new Error("Test cannot throw and also return sourcemaps: " + sourceMapLoc);
        }
      }
    }
  }

  return suites;
}

function multiple(entryLoc, ignore) {
  const categories = {};

  for (const name of _fs().default.readdirSync(entryLoc)) {
    if (shouldIgnore(name, ignore)) continue;

    const loc = _path().default.join(entryLoc, name);

    assertDirectory(loc);
    categories[name] = get(loc);
  }

  return categories;
}

function readFile(filename) {
  if (_fs().default.existsSync(filename)) {
    let file = (0, _trimEnd().default)(_fs().default.readFileSync(filename, "utf8"));
    file = file.replace(/\r\n/g, "\n");
    return file;
  } else {
    return "";
  }
}