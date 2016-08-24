# angular2_rc5_quickstart
Angular CLI starter project updated to rc.5. Current `ng new` installs rc.4, which is pre-`ngModule`. This is just a stop-gap starter until the CLI is updated or gets a flag to install with rc.5 (or obviously until Angular 2 is released). The primary changes are outlined [here in the official Angular docs](https://angular.io/docs/ts/latest/cookbook/rc4-to-rc5.html).

## Install
`npm install` (Mac requires `sudo npm install`).

If you want to change the prefix from the default `app` you'll need to make three changes:

1. In `angular-cli.json` change the `defaults.prefix` key to your new prefix:

```
"defaults": {
    "prefix": "myprefix",
    ...
```

2. In `src/app/component.ts` change the component selector from `app-root` to `myprefix-root`:

```
@Component({
  moduleId: module.id,
  selector: 'myprefix-root',
  ...
```

3. In `index.html` update the directive:

```
<myprefix-root>Loading...</myprefix-root>
```

## Run
`npm start` or `ng serve`
