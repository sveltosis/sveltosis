# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.1](https://github.com/sveltosis/sveltosis/compare/@sveltosis/parser@0.2.0...@sveltosis/parser@0.2.1) (2022-09-26)


### Bug Fixes

* **parser:** improve class directive ([7c608b6](https://github.com/sveltosis/sveltosis/commit/7c608b61a0b4f0f679c54f591ddf0e7079515572))





# [0.2.0](https://github.com/sveltosis/sveltosis/compare/@sveltosis/parser@0.1.0...@sveltosis/parser@0.2.0) (2022-09-26)


### Bug Fixes

* **parser:** [#1](https://github.com/sveltosis/sveltosis/issues/1) update regex because lookbehind doesn't work in Safari ([1eca811](https://github.com/sveltosis/sveltosis/commit/1eca811ff69a381deaa3844006a2aced19d07bf7))
* **parser:** add logic to convert more complex refs (containing other refs) ([05c876c](https://github.com/sveltosis/sveltosis/commit/05c876c2467b210fdc2a7ad48b25b030d8f79e5e))
* **parser:** check for attribute name ([05d65b2](https://github.com/sveltosis/sveltosis/commit/05d65b2612e04cbeb12b521ba08fe99721ad3203))
* **parser:** improve refs logic ([fcacd8a](https://github.com/sveltosis/sveltosis/commit/fcacd8a44736e02f5998879341822042bb81e01a))


### Features

* **parser:** class directive implementation ([69b013e](https://github.com/sveltosis/sveltosis/commit/69b013e9d62b6386f7f5a6e4e604194005c3c477))
* **parser:** lifecycle hooks (onMount, onDestroy, afterUpdate) ([45cf94f](https://github.com/sveltosis/sveltosis/commit/45cf94f899675a5f0bfb31819b706b86ada46b1d))





# 0.1.0 (2022-09-25)


### Bug Fixes

* don't use experimental resolve flag for tsup dts ([9e405e1](https://github.com/Sveltosis/sveltosis/commit/9e405e1d3b7d2ffc134fd512fcab3fcf1f24c80d))
* **parser:** context (progress) ([160c0dd](https://github.com/Sveltosis/sveltosis/commit/160c0dd4fa405c75b187fa73f8bb68e3172541e2))
* **parser:** simplify refs (todo: arrays should not be parsed as a string) ([3b7cf04](https://github.com/Sveltosis/sveltosis/commit/3b7cf04a6e034ac90cb759648f95129d4bb30b43))
* **parser:** simply and fix text expressions ([84db947](https://github.com/Sveltosis/sveltosis/commit/84db94722b904ab63f6c03df9ab2bf6e70edc8f6))
* **parser:** Text attribute ([f822fd4](https://github.com/Sveltosis/sveltosis/commit/f822fd447f5825882f0cf3e05ff4936ae7f11b23))


### Features

* **parser:** import other components + parse inline components ([04b03a1](https://github.com/Sveltosis/sveltosis/commit/04b03a1cdfa5e5ebd9dd03bc59ea981a875a7835))
* **parser:** improve raw mustache tag ([fd06315](https://github.com/Sveltosis/sveltosis/commit/fd063155b09eb4a8c6e4ef506b87412485d6f7b9))
* **parser:** initial style/css support ([20f9f70](https://github.com/Sveltosis/sveltosis/commit/20f9f704b7d9a7c4b02a81711cc79f93b0c7e536))
