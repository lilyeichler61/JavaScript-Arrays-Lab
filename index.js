var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(kitten) {
  
}
