// set var(--header-height)
let root = document.documentElement
let headerHeight = document.querySelector('.header').offsetHeight

root.style.setProperty('--header-height', `${ headerHeight }px`)
