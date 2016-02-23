# README #

### Installation ###
Install development build. Replace <password> with the password.
```shell
npm install git+https://tindiman:<password>@bitbucket.org/tindi-id/signalprocessing.git
```

Install latest commit/build, v0.0.6. Replace <password> with the password.
```shell
npm install git+https://tindiman:<password>@bitbucket.org/tindi-id/signalprocessing.git#v0.0.6
```

### Example ###

```javascript
var Dummy = require('basicnpmplugin');

var dummy = new Dummy();
var a = dummy.method(2);
```        

## Classes ##

* [Dummy](docs/Dummy.md)

## Build ##

```shell
npm install
npm run build
```

## Test ##

```shell
npm run test
```
