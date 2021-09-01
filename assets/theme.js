// set var(--header-height)
let root = document.documentElement
let headerHeight = document.querySelector('#shopify-section-header').offsetHeight

root.style.setProperty('--header-height', `${ headerHeight }px`)
