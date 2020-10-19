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
  kittens2=[...kittens,kitten]
  return kittens2
}

function prependKitten(kitten) {
  kittens3=[kitten,...kittens]
  return kittens3
}

function removeLastKitten() {
  return kittens.slice(-2)
}

function removeFirstKitten() {
  return kittens.slice(1)
}