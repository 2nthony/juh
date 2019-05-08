/* eslint-env browser */
const Events = new Map()

export function addEvent(el, events = {}) {
  Object.keys(events).forEach((fn, name) => {
    Events.set(name, fn)
    el.addEventListener(name, fn)
  })
}

export function clearEvent(el) {
  Events.forEach((fn, name) => {
    el.removeEventListener(name, fn)
  })
}
