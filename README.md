# Spotlight

> Visualize your Spotify playlists in a not so fancy way

A Vue JS app

This is just a toy experiment to play around with animations and different Vue stuff, do not take as a real app with a real purpose :sparkles: .

## Build Setup

Remember to create a ```.env.js``` file and fill it with the appropiate data obtained from the Spotify developers webpage following the ```.env.example.js``` file.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## TODO

- [ ] Animated cover background
- [ ] Playlist info
- [ ] Owned/All playlists toggle
- [ ] Github info
- [ ] favicon
- [ ] Ability to choose column span

## Contributing

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.


- If adding new feature:
  - Add accompanying test case.
  - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Dependencies

- [VueJs](https://vuejs.org/)
- [Spotify](https://www.spotify.com/)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present
