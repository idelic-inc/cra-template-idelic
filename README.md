# cra-template-idelic

This is the official Idelic template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, cd into the parent directory of the project you wish to create, then run the `create-react-app` command with the `--template idelic` argument.

For example:

```sh
npx create-react-app my-app --template idelic 

# or

yarn create react-app my-app --template idelic
```

After successfully running the `create-react-app` script, cd into the proect directory and run `yarn depfix` or `npm run depfix` to properly configure the package.json && dependencies.

# Integrate with an Existing Application

To integrate with an existing application, replace the following files/folders in your project directory:

```
.eslintrc
package.json
/scripts/dependencies.json
/scripts/dependencyFix.js
.tsconfig.json
```

then run a clean install on your project.
