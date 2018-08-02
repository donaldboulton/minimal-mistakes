# babel-env

The `babel-env` npm package can be used to set up a consistent environment
for projects using Babel and running on node.js version 6 (at least).

```shell
npm install --save-dev babel-env
```

This will install all useful Babel packages and create a default `.babelrc`
file in the project root. The `.babelrc` file will automatically be updated
when updates of `babel-env` are installed.

See also [babel-env-test](https://github.com/epsitec-sa/babel-env-test) for
an example of how `babel-env` is used.

## Prevent automatic .babelrc overwrite

If you do not want your `.babelrc` to be overwritten by `babel-env`, add
a comment containing `babel-env-disable`, such as:

```json
// babel-env-disable
{
  "presets": [
    "es2015"
  ],
  "plugins": [
    "transform-es3-property-literals",
    "transform-es3-member-expression-literals"
  ]
}
```
