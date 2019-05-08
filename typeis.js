const types = [
  'undefined',
  'object',
  'boolean',
  'number',
  'string',
  'symbol',
  'function'
]

const specialTypes = [
  'array', // Object
  'null' // Object
]

const allTypes = types.concat(specialTypes)

const typeis = x => {
  if (Array.isArray(x)) {
    return 'array'
  }

  if (x === null) {
    return 'null'
  }

  return typeof x
}

allTypes.forEach(type => {
  if (type === 'array') {
    typeis[type] = x => Array.isArray(x)
    return
  }

  if (type === 'null') {
    typeis[type] = x => x === null
    return
  }

  typeis[type] = x => typeof x === type
})

module.exports = typeis
