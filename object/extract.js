module.exports = (obj, ...keys) => {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    throw new TypeError('First param should be an object!')
  }

  const _obj = {}

  keys.forEach(k => {
    _obj[k] = obj[k]
  })

  return _obj
}
