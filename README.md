# MicrofrontendsMonorepo

```bash
npx create-nx-workspace@15.8.3 micro-frontend-shop-demo --preset=empty --nxCloud=true
cd micro-frontend-shop-demo
npm install -D @nrwl/react@15.8.3
npx nx generate @nrwl/react:host host --remotes=shop,payment,about,search --style=@emotion/styled
nx serve host --open --devRemotes=shop,about,payment,search
```

They all will run on different ports, which comes super handy for development.

- host: localhost:4200
- shop: localhost:4201
- payment: localhost:4202
- about: localhost:4203
- search: localhost:4204

## Config

apps/host/project.json

```js
// apps/host/project.json
{
  //...
  "implicitDependencies": ["shop","payment","about", "search"] // add this line
}
```

apps/host/module-federation.config.js

```js
// apps/host/module-federation.config.js
module.exports = {
  name: 'host',
  remotes: ['shop','payment','about'] // remove 'search' from here, because search is an implicit 
};
```

apps/shop/module-federation.config.js

```js
// apps/shop/module-federation.config.js
module.exports = {
  name: 'shop',
  exposes: {
    './Module': './src/ShopPage.tsx',
  },
  remotes: ["search"] // add this line
};
```

apps/shop/project.json

```js
// apps/shop/project.json
{
  //...
  "implicitDependencies": ["search"] // add this line
}
```

## Deployment

**Deployment config:**

host/webpack.config.prod.js

```js
// host/webpack.config.prod.js
const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');

const prodConfig = {
  ...baseConfig,
  remotes: [
    ['shop', 'http://localhost:3000/shop'],
    ['payment', 'http://localhost:3000/payment/'],
    ['about', 'http://localhost:3000/about/'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
```

shop/webpack.config.prod.js

```js
// shop/webpack.config.prod.js
const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');

const prodConfig = {
  ...baseConfig,
  remotes: [['search', 'http://localhost:3000/search']],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
```

**Deployment commands:**

```bash
npx nx build host
```

```bash
npx nx g @nrwl/workspace:run-command deploy --project=host \
--command="rm -rf production && mkdir production && \
cp -r dist/apps/host/* production && \
cp -r dist/apps/shop production && \
cp -r dist/apps/payment production && \
cp -r dist/apps/search production && \
cp -r dist/apps/about production && \
http-server -p 3000 -a localhost production"
```

```bash
npx nx deploy host
```
