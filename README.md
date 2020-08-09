<hr/>
<br/>
<img src='https://github.com/dash-ui/styles/raw/master/assets/logo.png'/>

> A command line tool for creating design systems with [Dash](https://github.com/dash-ui) and [Storybook](https://github.com/storybookjs)

```sh
# Using npx
npx @dash-ui/design-system my-design-system

# Using a global install
yarn global add @dash-ui/design-system
create-design-system my-design-system

cd my-design-system
yarn storybook
```

## What's in the box?

### Features

- [x] **UI component starter pack** Alerts, badges, buttons, checkboxes, switches,
      and spinners, inputs, textareas, and icons.
- [x] **Layout components** exported from [`@dash-ui/react-layout`](https://github.com/dash-ui/react-layout):
      Box, Grid, Row, Column, and more!
- [x] [**Tailwind**](https://tailwindcss.com/) design tokens
- [x] **Beautiful typography** out of the box
- [x] **Responsive props and styles** from [`@dash-ui/responsive`](https://github.com/dash-ui/responsive)
- [x] **Modern CSS reset**
- [x] **Accessibility**
- [x] **Auto-documentation** with [Storybook](https://github.com/storybookjs)
- [x] **Semantic versioning**
- [x] **Strongly typed** with TypeScript
- [x] **Modern build system** automatically generates ESM, UMD, CJS, modules, and types based
      upon the `"exports"` field in the package.json

### Build tools

The design system comes with a variety of build tools that allow you to release with confidence

| Tool                                                                           | Description                                                                                                                      |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| React                                                                          | This starter pack is built in React                                                                                              |
| TypeScript                                                                     | Your design system should have strong types and autocomplete                                                                     |
| Storybook                                                                      | Write your documentation as you code and build bulletproof UI components                                                         |
| Yarn                                                                           | Because I said so                                                                                                                |
| Jest + [@testing-library](https://github.com/testing-library)                  | For testing components and hooks                                                                                                 |
| Prettier                                                                       | For formatting code, READMEs, and configs                                                                                        |
| ESLint                                                                         | For linting the design system                                                                                                    |
| [Standard Version](https://github.com/conventional-changelog/standard-version) | Semantic releases made easy                                                                                                      |
| [Commitlint](https://github.com/conventional-changelog/commitlint)             | Lints your commit messages                                                                                                       |
| Lundle                                                                         | A build tool that automatically generates UMD, ESM, CJS, modules, and types based upon the `"exports"` field in the package.json |
| Travis CI                                                                      | (Optional) For continuous integration                                                                                            |

## Usage

#### `create-design-system <name> [--user] [--org] [--scope]`

| Argument | Type     | Required | Description                                                                                                     |
| -------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| name     | `string` | Yes      | The name of the package you're creating. This is also the name of the directory the package will be created in. |
| user     | `string` | No       | Your GitHub username                                                                                            |
| org      | `string` | No       | A GitHub organization name where the repo should live                                                           |
| scope    | `string` | No       | An npm organization                                                                                             |

## LICENSE

MIT
