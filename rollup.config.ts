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
      commonjs({
        include: /node_modules/,
        esmExternals: true,
        requireReturnsDefault: 'namespace'
      }),
      external(),
      resolve(),
      typescript({
        compilerOptions: {
          module: 'ESNext',
          target: 'es5',
          jsx: 'react',
          sourceMap: true,
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
        modules: true,
        sourceMap: true,
        extract: 'quark-components.css',
        minimize: true
      }),
      terser()
    ]
  },
  {
    input: './src/index.ts',
    output: [{ file: 'dist-library/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [dts()]
  }
];
