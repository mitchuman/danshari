/*
  predictiveSearchOptions defined in `predictive-search.liquid`
*/

let searchForms = document.querySelectorAll('form.search-form')

for (let searchForm of searchForms) {
  let searchFormInput = searchForm.querySelector('input[name="q"]')
  let searchSuggestions = searchForm.querySelector('.search-suggestions')
  let suggestionGroupTemplate = document.querySelector('#suggestion-group-template')
  let suggestionItemTemplate = document.querySelector('#suggestion-item-template')

  searchFormInput.addEventListener('keyup', delayAfterKeyup(async e => {
    let suggestionResults = await getSuggestions(e.target.value)

    searchSuggestions.innerHTML = ''
    searchSuggestions.dataset.query = e.target.value

    for (const [type, results] of Object.entries(suggestionResults)) {
      if (!!results.length) {
        // suggestion group
        let suggestionGroup = suggestionGroupTemplate.content.cloneNode(true)
        suggestionGroup.querySelector('.suggestion-group-title').textContent = type

        results.map(result => {
          // suggestion item
          let suggestionItem = suggestionItemTemplate.content.cloneNode(true)
          suggestionItem.querySelector('.suggestion-item-url').href = result.url
          suggestionItem.querySelector('.suggestion-item-title').textContent = result.title

          if (!!result.featuredImage || !!result.image) {
            let suggestionImg = suggestionItem.querySelector('.suggestion-item-img img')
            suggestionImg.src = resizeImg(result.image || result.featuredImage, '100x100')
            suggestionImg.alt = !!result.featuredImage
              ? result.featuredImage.alt
              : result.title
          }

          suggestionGroup.querySelector('.suggestion-group-list').appendChild(suggestionItem)
        })

        searchSuggestions.appendChild(suggestionGroup)
      }
    }
  }, window.predictiveSearchOptions.keyUpDelay))
}

async function getSuggestions(query) {
  // search suggestion options
  let params = new URLSearchParams()

  const { resources } = window.predictiveSearchOptions

  params.set('q', query)
  params.set('resources[type]', resources.type)
  params.set('resources[limit]', resources.limit)

  let response = await fetch('/search/suggest.json?' + params.toString())

  return !!response.ok && (await response.json()).resources.results
}

function resizeImg(url, size) {
  const [before, ext, after] = url.split(/\.(png|jpg|gif)/g)

  return `${before}_${size}.${ext}${after}`
}

function delayAfterKeyup(fn, ms) {
  let timer = 0
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(fn.bind(this, ...args), ms || 0)
  }
}
