var tap = require('tape')
var equals = require('array-equal')
var lipogram = require('./')

var sample = 'Writing that excludes one or more letters.'
var constraints = ['B', 'F', 'H', 'J', 'K', 'Q', 'V', 'Y', 'Z']

tap.test('detects lipograms by letters', function (t) {
  t.plan(1)
  t.ok(lipogram(sample, constraints))
})

tap.test('returns false if not a lipogram of passed letters', function (t) {
  t.plan(1)
  t.ok(!lipogram(sample, constraints.concat('e')))
})

tap.test('does the prisoner/macao thing', function (t) {
  t.plan(2)
  t.ok(lipogram('aceimnorsuvwxz', true))
  t.ok(!lipogram('bdfghjklpqty', true))
})

tap.test('returns lipogrammable letters', function (t) {
  t.plan(1)
  t.ok(equals(lipogram('aceimnorsuvwxz'), ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'p', 'q', 't', 'y']))
})

tap.test('returns false if no lipogrammable letters', function (t) {
  t.plan(1)
  t.ok(!lipogram('abcdefghijklmnopqrstuvwxyz'))
})
