<hr/>

# <:packageName:>

> A design system created with [Dash](https://github.com/dash-ui) and [Storybook](https://github.com/storybookjs)

```sh
npm i <:packageName:>
```

<p>
  <a aria-label="Types" href="https://www.npmjs.com/package/<:packageName:>">
    <img alt="Types" src="https://img.shields.io/npm/types/<:packageName:>?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/<:repo:>">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/<:repo:>?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.com/<:repo:>">
    <img alt="Build status" src="https://img.shields.io/travis/com/<:repo:>?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/<:packageName:>">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/<:packageName:>?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://www.npmjs.com/package/<:packageName:>">
    <img alt="License" src="https://img.shields.io/npm/l/<:packageName:>?style=for-the-badge&labelColor=24292e">
  </a>
</p>

---

## Quick start

```js
import {DesignSystem, Text} from '<:packageName:>'

export function App() {
  return (
    // This is a context provider for the design system. It also injects the
    // necessary global styles.
    <DesignSystem>
      <Text variant='heading'>Hello world</Text>
    </DesignSystem>
  )
}
```

## Development

Here's what you need to know to start developing `<:packageName:>`.

### Scripts

#### `build`

Builds types, commonjs, and module distributions

#### `build-storybook`

Builds a production dist for [Storybook](https://github.com/storybookjs)

#### `check-types`

Runs a type check on the project using the local `tsconfig.json`

#### `dev`

Builds `module` and `cjs` builds in `watch` mode

#### `format`

Formats all of the applicable source files with prettier

#### `lint`

Runs `eslint` on the package source

#### `prerelease`

Runs before the package is published. This calls `validate` and `build` scripts.

#### `release`

Starts a release using `standard-version`. This must be run before `npm publish`.

#### `storybook`

Runs [Storybook](https://github.com/storybookjs) in `development` mode

#### `test`

Tests the package with `jest`

#### `validate`

Runs `check-types`, `lint`, and `test` scripts. This is used in CI and
in `prerelease`.

### Husky hooks

#### `pre-commit`

Runs `lint-staged` and the `build-types` script

#### `commit-msg`

Runs `commitlint` on your commit message. The easiest way
to conform to `standard-version` rules is to use [`cz-cli`](https://github.com/commitizen/cz-cli)

## Releases

To release the design system on npm:

```sh
yarn release
git push --follow-tags origin master
npm publish
```

## LICENSE

MIT
