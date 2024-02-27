1. Install packages necessary for eslint-config-js-ts integration

```js
 npm install --save-dev eslint@8.56.0 typescript git+https://github.com/CovalienceGithub/eslint-config-js-ts.git @typescript-eslint/parser@^6.21.0 @typescript-eslint/eslint-plugin@^6.21.0
```

2. Create/Update .eslintrc.js file

```diff
extends:[
+ 'eslint-config-js-ts'
],
parserOptions:{
+ project: ['./tsconfig.json','./tsconfig.node.json'],
}
```

3. Update tsconfig.json

```diff
+ "strictNullChecks":true
```

4. Update package.json

```diff
{
  "scripts": {
+ "lint": "eslint . --ext ts,tsx --report-unused-disable-directives ",
+ "lint:fix": "eslint . --fix",
+ "lint:format": "eslint . --format html --output-file output.html"

  }
```
