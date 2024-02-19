import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, defineViteConfig } from 'electron-vite';
import builtinModules from 'builtin-modules';
import viteResolve from 'vite-plugin-resolve';
import Inspect from 'vite-plugin-inspect';

import { pluginVirtualModuleGenerator } from './vite-plugins/plugin-importer.mjs';
import pluginLoader from './vite-plugins/plugin-loader.mjs';

import type { UserConfig } from 'vite';
import { i18nImporter } from './vite-plugins/i18n-importer.mjs';
import solidPlugin from 'vite-plugin-solid';

const __dirname = dirname(fileURLToPath(import.meta.url));

const resolveAlias = {
  '@': resolve(__dirname, './src'),
  '@assets': resolve(__dirname, './assets'),
};

export default defineConfig({
  main: defineViteConfig(({ mode }) => {
    const commonConfig: UserConfig = {
      plugins: [
        pluginLoader('backend'),
        viteResolve({
          'virtual:i18n': i18nImporter(),
          'virtual:plugins': pluginVirtualModuleGenerator('main'),
        }),
      ],
      publicDir: 'assets',
      build: {
        lib: {
          entry: 'src/index.ts',
          formats: ['cjs'],
        },
        outDir: 'dist/main',
        commonjsOptions: {
          ignoreDynamicRequires: true,
        },
        rollupOptions: {
          external: ['electron', 'custom-electron-prompt', ...builtinModules],
          input: './src/index.ts',
        },
      },
      resolve: {
        alias: resolveAlias,
      },
    };

    if (mode === 'development') {
      commonConfig.plugins?.push(
        Inspect({ build: true, outputDir: '.vite-inspect/backend' }),
      );
      return commonConfig;
    }

    return {
      ...commonConfig,
      build: {
        ...commonConfig.build,
        minify: true,
        cssMinify: true,
      },
    };
  }),
  preload: defineViteConfig(({ mode }) => {
    const commonConfig: UserConfig = {
      plugins: [
        pluginLoader('preload'),
        viteResolve({
          'virtual:i18n': i18nImporter(),
          'virtual:plugins': pluginVirtualModuleGenerator('preload'),
        }),
      ],
      build: {
        lib: {
          entry: 'src/preload.ts',
          formats: ['cjs'],
        },
        outDir: 'dist/preload',
        commonjsOptions: {
          ignoreDynamicRequires: true,
        },
        rollupOptions: {
          external: ['electron', 'custom-electron-prompt', ...builtinModules],
          input: './src/preload.ts',
        },
      },
      resolve: {
        alias: resolveAlias,
      },
    };

    if (mode === 'development') {
      commonConfig.plugins?.push(
        Inspect({ build: true, outputDir: '.vite-inspect/preload' }),
      );
      return commonConfig;
    }

    return {
      ...commonConfig,
      build: {
        ...commonConfig.build,
        minify: true,
        cssMinify: true,
      },
    };
  }),
  renderer: defineViteConfig(({ mode }) => {
    const commonConfig: UserConfig = {
      plugins: [
        pluginLoader('renderer'),
        viteResolve({
          'virtual:i18n': i18nImporter(),
          'virtual:plugins': pluginVirtualModuleGenerator('renderer'),
        }),
        solidPlugin(),
      ],
      root: './src/',
      build: {
        lib: {
          entry: 'src/index.html',
          formats: ['iife'],
          name: 'renderer',
        },
        outDir: 'dist/renderer',
        commonjsOptions: {
          ignoreDynamicRequires: true,
        },
        rollupOptions: {
          external: ['electron', ...builtinModules],
          input: './src/index.html',
        },
      },
      resolve: {
        alias: resolveAlias,
      },
    };

    if (mode === 'development') {
      commonConfig.plugins?.push(
        Inspect({ build: true, outputDir: '.vite-inspect/renderer' }),
      );
      return commonConfig;
    }

    return {
      ...commonConfig,
      build: {
        ...commonConfig.build,
        minify: true,
        cssMinify: true,
      },
    };
  }),
});
