<img alt="Oak National Academy" src="https://github.com/oaknational/oak-components/assets/122096/3b34c863-ff79-403a-a38e-0c997003909c" width="300" style="margin-bottom: 2rem" />

# Oak Components

![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)

## Overview

This is a React Typescript components library which supports React and Next applications produced by [Oak National Academy](https://www.thenational.academy/).

## Installation

This library is suitable for use in an app using React 18 and Next.js 13.5+

You can install it using `npm i @oaknational/oak-components` or any other package manager that supports the NPM registry.

👉 You'll need two environment variables to enable images `NEXT_PUBLIC_OAK_ASSETS_HOST` and `NEXT_PUBLIC_OAK_ASSETS_PATH`. Values for these can be obtained from the `.env` config from OWA or from a fellow engineer.

### Theming, global styles and fonts

For components to be styled correctly they will need access to a theme, some global styles and the Lexend font.

If you're using the Next.js App router your root layout should look something like:

```typescript
// layout.js
import { OakThemeProvider, oakDefaultTheme, OakGlobalStyle } from "@oaknational/oak-components";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <OakGlobalStyle />
      <body className={lexend.className}>
        <OakThemeProvider theme={oakDefaultTheme}>{children}</OakThemeProvider>
      </body>
    </html>
  );
}
```

To enable SSR of styles and avoid a flicker of unstyled content you'll need to configure your Next.js app to support [styled-components](https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components)

### TypeScript

If you're using TypeScript you might want to add `@types/styled-components` to your development dependencies (`npm i -D @types/styled-components`). This will ensure that all components are properly type hinted in your IDE.

## Development

1. Copy the example env config `cp .env.example .env`
2. Populate `.env` with values from the 1Password developer vault, search for: "Oak components .env"
3. run `nvm use`
4. run `npm install`
5. To view the storybook run `npm run storybook`

## Making changes

We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and [semantic versioning](https://semver.org/). Releases are managed by [Semantic Release](https://github.com/semantic-release/semantic-release) and are automatically published to [NPM](https://www.npmjs.com/package/@oaknational/oak-components) on every merge to `main`.

Changes should go through a pull-request to `main` and require approval by at least 1 reviewer. You should seek reviews from a QA/designer/PM when necessary.

The release process is driven by the commit messages, following the [Conventional Commits standard](https://www.conventionalcommits.org/en/v1.0.0/#specification). The `@semantic-release/commit-analyzer` plugin will determine the type of release (major, minor, or patch) based on the commit message.

Here’s a summary of the commit types that trigger a release:

- Patch release (x.x.x): Commits that start with `fix:` or contain other conventional keywords indicating bug fixes.
- Minor release (x.x.0): Commits that start with `feat:` indicate a new feature but not a breaking change.
- Major release (x.0.0): Commits that contain `BREAKING CHANGE:` in their description, which indicates a breaking change that requires a major version bump.

Commit messages that begin with `chore`, `refactor` or `docs`, etc. will not trigger the release process.

## Testing components inside a host app like OWA

Sometimes it isn't enough to develop entirely inside Storybook and it might be necessary to try local changes inside a target app. You can do this with [yalc](https://github.com/wclr/yalc)

1. Install yalc `npm i yalc -g`
2. Run `npm run publish:local` to add the package to yalc's local registry.
3. Inside the target app run `yalc add @oaknational/oak-components` — this will install the package from the local registry like it would from NPM
   - 🚨 if you're an Oak engineer developing in OWA there is a convenience script and you should use `npm run use-local-components` instead
     as it will perform some additional work to remove any existing installation of the package.
4. Now when you start your target app you should have access to the locally packaged version of the library
5. To uninstall the local package you can run `yalc remove @oaknational/oak-components` inside the target app
   - 🚨 if you're an Oak engineer developing in OWA there is a convenience script and you should use `npm run remove-local-components` instead
     as it will automatically re-install the library from NPM.

## Organisational structure

- shared components are organised in the subfolders within 'components' folder
- internal components are organised within 'internal components' folder
- squad specific components are organised within relevant squad folders

⚠️ When creating a new component and in doubt of which category or folder it should belong to, discuss in #oak-components Slack channel.

Current shared components subfolders:

### Typography

All typography related components

### Buttons

All buttons and icon buttons

### Form elements

Form elements including form elements styled as buttons

### Images and icons

Components to render icons, images or SVGs

### Messaging and feedback

Components which role is to display a message or provide feedback to the user

### Layout and structure

Components which are used for creating layout

### Navigation

Components which main role is navigation

### Presentational

Components which main function is presentational

### Cookies

Cookie related layouts

## External Contributions

### Security and Bug Bounty

Please see our [security.txt](https://www.thenational.academy/.well-known/security.txt) file.

### Contributing to the Code

We don't currently accept external contributions to the code base, but this is under review and we hope to find an approach the works for us and the community.

## Open Source Acknowledgements

As with all web projects we are dependent on open source libraries maintained by others. While it is not practical to acknowledge them all, we would nevertheless like to express our gratitude for the contributions and efforts of the OSS community. Our dependency list can be found in our [package.json](package.json) file.

## License

Unless stated otherwise, the codebase is released under the [MIT License][mit]. This covers both the codebase and any sample code in the documentation. Where any Oak National Academy trademarks or logos are included, these are not released under the [MIT License][mit], and should be used in line with [Oak National Academy brand guidelines][brand].

Any documentation included is © [Oak National Academy][oak] and available under the terms of the [Open Government Licence v3.0][ogl], except where otherwise stated.

[mit]: https://github.com/oaknational/oak-components?tab=MIT-1-ov-file#readme
[oak]: https://www.thenational.academy/
[ogl]: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
[brand]: https://support.thenational.academy/using-the-oak-brand
