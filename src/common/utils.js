const utils = {}
utils.debounce = function (func, lazyTime) {
  let timer = null
  return function (...args) {
    console.log(timer + '5555')
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, lazyTime)
  }
}
export default utils
