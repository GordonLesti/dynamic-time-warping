# dynamic-time-warping

[![Latest Version on npm][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Coverage Status][ico-coverall]][link-coveralls]
[![Total Downloads][ico-downloads]][link-downloads]

[Dynamic time warping](https://en.wikipedia.org/wiki/Dynamic_time_warping) for Javascript. As simple usecase would be
[Touch signature identification with Javascript](https://gordonlesti.com/touch-signature-identification-with-javascript/)
for example.

## Install

Several quick start options are available:
* [Download the latest release](https://github.com/GordonLesti/dynamic-time-warping/releases/latest).
* Clone the repo: `git clone https://github.com/GordonLesti/dynamic-time-warping.git`.
* Install with [npm](https://www.npmjs.com/): `npm install dynamic-time-warping`.
* Install with [Bower](http://bower.io): `bower install dynamic-time-warping`.

Include script (unless you are packaging scripts somehow else):

```html
<script src="/path/to/dynamic-time-warping.js"></script>
```

The plugin can also be loaded as AMD or Node module.

## Usage

### Initialization

`DynamicTimeWarping` needs two arrays containing objects of the the same type and function that calculates the distance
between two objects and returns a float.

```javascript
var ser1 = [ 9, 93, 15, 19, 24 ];
var ser2 = [ 31, 97, 81, 82, 39 ];
var distFunc = function( a, b ) {
    return Math.abs( a - b );
};

var dtw = new DynamicTimeWarping(ser1, ser2, distFunc);
```

### getDistance

Will return the distance of the dynamic time warping as float.

```javascript
// 108
var dist = dtw.getDistance();
```

### getPath

Will return the path of the dynamic time warping as array of arrays with two integers.

```javascript
// [ [ 0, 0 ], [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 4 ], [ 3, 4 ], [ 4, 4 ] ]
var dist = dtw.getPath();
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ grunt
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email info@gordonlesti.com instead of using the issue tracker.

## Credits

- [Gordon Lesti][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/npm/v/dynamic-time-warping.svg?style=flat-square
[ico-license]: https://img.shields.io/github/license/GordonLesti/dynamic-time-warping.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/GordonLesti/dynamic-time-warping/master.svg?style=flat-square
[ico-coverall]: https://img.shields.io/coveralls/GordonLesti/dynamic-time-warping/master.svg?style=flat-square
[ico-downloads]: https://img.shields.io/npm/dt/dynamic-time-warping.svg?style=flat-square

[link-npm]: https://www.npmjs.com/package/dynamic-time-warping
[link-travis]: https://travis-ci.org/GordonLesti/dynamic-time-warping
[link-coveralls]: https://coveralls.io/r/GordonLesti/dynamic-time-warping
[link-downloads]: https://www.npmjs.com/package/dynamic-time-warping
[link-author]: https://gordonlesti.com/
[link-contributors]: ../../contributors
