import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: './src/index.ts',
    output: {
      file: 'dist-library/index.js',
      format: 'esm',
      sourcemap: true,
      name: 'quark-components'
    },
    plugins: [
      external(),
      commonjs({
        include: /node_modules/,
        esmExternals: true,
        requireReturnsDefault: 'namespace'
      }),
      resolve(),
      typescript({
        compilerOptions: {
          module: 'esnext',
          target: 'es5',
          jsx: 'react',
          sourceMap: true,
          inlineSources: true,
          outDir: 'dist-library',
          moduleResolution: 'node',
          allowSyntheticDefaultImports: true,
          esModuleInterop: true,
          skipLibCheck: true,
          forceConsistentCasingInFileNames: true,
          declaration: true,
          declarationDir: 'dist-library/types',
          emitDeclarationOnly: true
        },
        exclude: [
          'node_modules',
          './dist',
          './src/documentation',
          './jest.config.ts',
          './webpack.config.dev.ts',
          './webpack.config.prod.ts',
          '**/test-setup/**',
          '**/*.test.ts*'
        ]
      }),
      postcss({
        modules: {
          localsConvention: 'dashesOnly',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        },
        autoModules: false,
        sourceMap: true,
        extract: 'quark-components.css',
        minimize: true
      }),
      terser()
    ],
    external: ['react', 'react-dom']
  },
  {
    input: './src/index.ts',
    output: [{ file: 'dist-library/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [typescript(), dts()]
  }
];
