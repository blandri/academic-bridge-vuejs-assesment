# academic-bridge-vuejs-assesment

These are the steps to test the app locally

## The project has these main packages

```sh
i18n
pinia
vue
vue-i18n
vue-router
```

## Project Setup

```sh
npm install
```

`then visit the url of host provided and start creating, updating and deleting todos`

### Run the development server

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### The project run tests using the following packages

```sh
vitest
@vitest/coverage-istanbul
cypress
```

### Run Unit Tests

```sh
npm run test:unit
```

### Run End-to-End Tests in development

```sh
npm run test:e2e:dev
```

### Run End-to-End Tests after you build the project to test in production

```sh
npm run build
npm run test:e2e
```
