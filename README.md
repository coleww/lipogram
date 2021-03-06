lipogram
----------------

an [oulipian](https://en.wikipedia.org/wiki/Oulipo#Constraints) poetry detector.

[![NPM](https://nodei.co/npm/lipogram.png)](https://nodei.co/npm/lipogram/)[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

[![Build Status](https://secure.travis-ci.org/coleww/lipogram.png)](http://travis-ci.org/coleww/lipogram)

[lipogram](https://en.wikipedia.org/wiki/Lipogram):
```
Writing that excludes one or more letters
The previous sentence is a lipogram in B, F, H, J, K, Q, V, Y, and Z
(it does not contain any of those letters)

-- Prisoner's constraint, also called Macao constraint
A type of lipogram that omits letters with ascenders and descenders
(b, d, f, g, h, j, k, l, p, q, t, and y)
```

### api

`lipogram(string, array or boolean)`

- if passed true: checks string against the prisoner's constraint letters
- if passed an array: checks string against the array
- if passed nothing: returns an array of letters for which the string is lipogrammatic, or false if there are none
