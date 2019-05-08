const union = require('./union')

module.exports = (...x) => {
  const unionEls = union(...x)
  const differenceEls = union(
    ...x.map(_x => unionEls.filter(v => !_x.includes(v)))
  )

  return unionEls.filter(v => !differenceEls.includes(v))
}
