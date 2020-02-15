this.a = 5

const getA = function() {
  return this.a
}

const b = {
  a: 10,
  b: getA()
}




console.log(b.b)
