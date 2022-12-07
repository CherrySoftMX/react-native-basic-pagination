# react-native-basic-pagination

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LICENSE](http://img.shields.io/npm/l/@react-native-seoul/masonry-list.svg?style=flat-square)](https://npmjs.org/package/@react-native-seoul/masonry-list) [![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) [![supports web](https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff)](https://docs.expo.io/workflow/web/) [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000)](https://github.com/expo/expo)

Welcome to react-native-basic-pagination!

`react-native-basic-pagination` provides a basic component to handle classic style pagination in your React Native app on Android and Web.

## Installation

```
npm install <>
```

## Example

```tsx
import React, { useState } from 'react';
import Pagination from '@cherry-soft/react-native-basic-pagination';

const App = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      totalItems={100}
      pageSize={5}
      currentPage={page}
      onPageChange={setPage}
    />
  );
};
```

## Preview

| Without last page buttons | With last page buttons | Display many pages |
|------------|:-----------:|:-----------:|
|<img src="https://raw.githubusercontent.com/Shadic78/react-native-basic-pagination/readme/assets/preview1.gif" width=300/>|<img src="https://raw.githubusercontent.com/Shadic78/react-native-basic-pagination/readme/assets/preview2.gif" width=300/>|<img src="https://raw.githubusercontent.com/Shadic78/react-native-basic-pagination/readme/assets/preview4.gif" width=300/>|

> You can display as many pages as you want!

## Props
| Property | Default | Description |
| ---------- | ------------ | ------- |
| totalItems     | **required** | The amount of items contained in all pages.               |
| currentPage    | **required** | The state which stores the current page.                  |
| onPageChange   | **required** | A function which receives a number to handle the page change. *(page: number) => void* |
| pageSize       | 1            | The amount of items per page.                             |
| pagesToDisplay | 3            | The amount of buttons to display before the dots. ("...") |
| showLastPageButtons | false | Show or hide the last pages buttons. ("<<" & ">>") |