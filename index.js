module.exports = function(string, _c){
  var result = true
  var constraint

  if(Array.isArray(_c)){
    constraint = _c
  } else if (_c){
    constraint = ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'p', 'q', 't', 'y']
  }

  var letters = string.toLowerCase().split("").filter(function(el){return el.match(/[a-z]/)})

  var map = {}

  letters.forEach(function(letter){
    map[letter] = true
  })

  if(constraint){
    constraint.forEach(function(letter){

      // return map[letter] ? result = false : true
      if(map[letter]) result = false
    })
  } else {
    result = 'abcdefghijklmnopqrstuvwxyz'.split("").filter(function(letter){return !map[letter]})
    if(!result.length) result = false
  }
  return result;
}