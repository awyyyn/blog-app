import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  //   documents: ['src/**/*.{ts,tsx}'],
  documents: ['apps/blog-fe/src/app/gql/**/*.{ts, tsx}'],
  generates: {
    'apps/blog-fe/src/app/gql-types/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
