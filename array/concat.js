module.exports = (...x) => {
  const _arr = []

  x.forEach(_x => {
    if (Array.isArray(_x)) {
      _x.forEach(__x => _arr.push(__x))
      return
    }

    _arr.push(_x)
  })

  return _arr
}
