const handler = (el, handle) =>
  typeof handle === 'function' ? handle(el) : el === handle

const remove = (x, handle, count = 1) => {
  const _x = [...x]

  let i = 0
  while (i < count) {
    const elIndex = _x.findIndex(el => handler(el, handle))

    if (elIndex > -1) {
      _x.splice(elIndex, 1)
    }

    i++
  }

  return _x
}

remove.all = (x, handle) => x.filter(el => !handler(el, handle))

module.exports = remove
