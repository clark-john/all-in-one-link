import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss'
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'all-in-one-link',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: "./src/globals.css",
  devServer: {
    openBrowser: false,
    port: 5000,
    reloadStrategy: 'pageReload'
  },
  plugins: [
    postcss({
      plugins: [
        autoprefixer(),
      ]
    })
  ]
};
