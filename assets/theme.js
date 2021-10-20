(function(){
  let $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document)

/* set var(--header-height) */
let root = document.documentElement
let headerHeight = $('#shopify-section-header').offsetHeight

root.style.setProperty('--header-height', `${ headerHeight }px`)

/* quantity selector */
let qty_selectors = $$('.qty-selector')
for (let qty_selector of qty_selectors) {
  let qty_incs = qty_selector.querySelectorAll('.qty-inc')
  let qty_value = qty_selector.querySelector('.qty-value')

  for (let qty_inc of qty_incs) {
    qty_inc.addEventListener('click', e => {
      e.preventDefault()
      let inc_val = parseInt(qty_inc.dataset.inc)
      qty_value.stepUp(inc_val)
    })
  }
}

})()
