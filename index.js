// const {trim} = require('@inst-cli/template-utils')
const {getPackageName, getPackageRepoPages} = require('@lunde/inst-utils')

module.exports = {}

// creates template variables using Inquirer.js
// see https://github.com/SBoudrias/Inquirer.js#objects for prompt object examples
/*
module.exports.prompts = (
  {ROOT_NAME, ROOT_DIR, PKG_NAME, PKG_DIR},
  packageJson,
  args,
  inquirer
) => {
  return [
    {
      type: 'string',
      name: 'description',
      message: 'Description:',
      filter: trim,
    },
  ]
}
*/

// package.json dependencies
module.exports.dependencies = {
  '@accessible/button': '^2.0.1',
  '@accessible/checkbox': '^4.0.1',
  '@accessible/using-keyboard': '^2.1.1',
  '@dash-ui/mq': '^0.4.0',
  '@dash-ui/react': '^0.9.1',
  '@dash-ui/react-layout': '^0.8.2',
  '@dash-ui/reset': '^0.3.1',
  '@dash-ui/responsive': '^0.2.3',
  '@dash-ui/styles': '^0.8.6',
  '@react-hook/merged-ref': '^1.3.0',
  '@react-hook/window-size': '^3.0.7',
  clsx: '^1.1.1',
  'forward-ref-as': '^1.0.1',
}

// package.json dev dependencies
module.exports.devDependencies = () => {
  let deps = {
    '@commitlint/cli': 'latest',
    '@commitlint/config-conventional': 'latest',
    '@dash-ui/jest': 'latest',
    '@storybook/addon-a11y': 'next',
    '@storybook/addon-essentials': 'next',
    '@storybook/react': 'next',
    '@testing-library/jest-dom': '^5.11.2',
    '@testing-library/react': '^10.4.8',
    '@testing-library/react-hooks': 'latest',
    '@testing-library/user-event': '^12.1.0',
    '@types/jest': 'latest',
    '@types/react': 'latest',
    '@types/react-dom': 'latest',
    'babel-jest': 'latest',
    'cli-confirm': 'latest',
    'cz-conventional-changelog': 'latest',
    jest: 'latest',
    eslint: 'latest',
    'eslint-config-lunde': 'latest',
    husky: 'latest',
    'lint-staged': 'latest',
    lundle: 'latest',
    'minify-css.macro': '^1.0.10',
    prettier: 'latest',
    react: 'latest',
    'react-dom': 'latest',
    'react-is': 'latest',
    'react-test-renderer': 'latest',
    'standard-version': 'latest',
    typescript: 'latest',
  }

  return deps
}

// package.json peer dependencies
module.exports.peerDependencies = () => ({
  react: '>=16.8',
  'react-dom': '>=16.8',
})

module.exports.rename = (filename) =>
  (filename.endsWith('/gitignore')
    ? filename.replace('gitignore', '.gitignore')
    : filename
  ).replace('.inst.', '.')

module.exports.getDefaultVariables = async (variables, args, {name}) => {
  const pages = await getPackageRepoPages({name}, args)

  return {
    packageName: getPackageName({name}, args),
    repo: pages.repository.replace('github:', ''),
    pages,
  }
}

// runs after the package.json is created and deps are installed,
// used for adding scripts and whatnot
//
// this function must return a valid package.json object
module.exports.editPackageJson = async function editPackageJson(
  // eslint-disable-next-line no-unused-vars
  {main, name, description, ...packageJson},
  variables /*from prompts() above*/,
  args
) {
  let pkg = {
    name: variables.packageName,
    version: packageJson.version,
    ...variables.pages,
    author: packageJson.author,
    license: packageJson.license,
    description:
      variables.description ||
      'A design system created with @dash-ui/design-system',
    keywords: ['react', variables.PKG_NAME.replace(/-/g, ' ')],
    main: 'dist/main/index.js',
    module: 'dist/module/index.js',
    unpkg: `dist/umd/${
      args.hook && !variables.PKG_NAME.startsWith('use-') ? 'use-' : ''
    }${variables.PKG_NAME}.js`,
    source: 'src/index.tsx',
    types: 'types/index.d.ts',
    exports: {
      '.': {
        browser: './dist/module/index.js',
        import: './dist/esm/index.mjs',
        require: './dist/main/index.js',
        umd: `./dist/umd/${
          args.hook && !variables.PKG_NAME.startsWith('use-') ? 'use-' : ''
        }${variables.PKG_NAME}.js`,
        source: './src/index.tsx',
        types: './types/index.d.ts',
        default: './dist/main/index.js',
      },
      './package.json': './package.json',
      './': './',
    },
    files: ['/dist', '/src', '/types'],
    sideEffects: false,
    scripts: {
      build: 'lundle build',
      'build-storybook': 'build-storybook',
      'check-types': 'lundle check-types',
      dev: 'lundle build -f module,cjs -w',
      format:
        'prettier --write "{,!(node_modules|dist|coverage)/**/}*.{ts,tsx,js,jsx,md,yml,json}"',
      lint: 'eslint . --ext .ts,.tsx',
      prepublishOnly: 'cli-confirm "Did you run \'yarn release\' first? (y/N)"',
      prerelease: 'npm run validate && npm run build',
      release: 'git add . && standard-version -a',
      storybook: 'start-storybook -p 6006',
      test: 'jest',
      validate: 'lundle check-types && npm run lint && jest --coverage',
    },
    husky: {
      hooks: {
        'pre-commit': 'lundle check-types && lint-staged',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
      },
    },
    'lint-staged': {
      '**/*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
      '**/*.{md,yml,json}': ['prettier --write'],
    },
    commitlint: {
      extends: ['@commitlint/config-conventional'],
    },
    config: {
      commitizen: {
        path: './node_modules/cz-conventional-changelog',
      },
    },
    eslintConfig: {
      extends: ['lunde'],
    },
    eslintIgnore: [
      'node_modules',
      'coverage',
      'dist',
      '/types',
      'test',
      '*.config.js',
    ],
    jest: {
      moduleDirectories: ['node_modules', 'src', 'test'],
      testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
      collectCoverageFrom: ['**/src/**/*.{ts,tsx}'],
      setupFilesAfterEnv: ['./test/setup.js'],
      snapshotResolver: './test/resolve-snapshot.js',
      globals: {
        __DEV__: true,
      },
    },
    prettier: {
      semi: false,
      singleQuote: true,
      jsxSingleQuote: true,
      bracketSpacing: false,
    },
    ...packageJson,
  }

  return pkg
}
