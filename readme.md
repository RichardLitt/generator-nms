# generator-nms [![Build Status](https://travis-ci.org/RichardLitt/generator-nms.svg?branch=master)](https://travis-ci.org/RichardLitt/generator-nms)

> Scaffold out a node module using standard

Optionally with a [CLI](http://en.wikipedia.org/wiki/Command-line_interface).

This is what I use for [my own modules](https://www.npmjs.com/~richardlitt). It is based heavily on [sindresorhus/generator-nm](//github.com/sindresorhus/generator-nm). The differences are:

 - I use [standard](//github.com/feross/standard) instead of [xo](https://github.com/sindresorhus/xo);
 - I removed the .editorconfig file because I never use it;
 - I made the description part of the initial setup instead of using [superb](https://github.com/sindresorhus/superb);
 - I added a `lint` command to the package.json.

I expect that there will be more differences in the future.

![](screenshot.png)


## Install

```
$ npm install --global generator-nms
```


## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo nms
```


## Tip

Use [chalk](https://github.com/sindresorhus/chalk) if you want colors in your CLI.


## License

MIT © [Richard Littauer](http://burntfen.com)
