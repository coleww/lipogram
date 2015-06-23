lipogram
----------------

an [oulipian](https://en.wikipedia.org/wiki/Oulipo#Constraints) poetry detector.

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
