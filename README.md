# Command Line

### Compile pug
```js
pug -w develop -o build
```

Prettier:
```js
pug -w develop -o build --pretty
```

### Compile sass
```js
sass --watch develop:build --no-source-map
```

Compress:
```js
sass --watch develop:build --style compressed --no-source-map
```
