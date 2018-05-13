window.addEventListener('load', () => {
})
document.getElementById("form")
  .addEventListener('submit', (e) => {
    e.preventDefault()

    const f = new FormData(e.target)
    const val = f.get('a')

    gtag('set', 'term', val);
    gtag('search')

    const list = document.getElementById('list')
    list.innerHTML = ''

    const rel = window.getRealtors()

    const result = rel.filter(i => i.license.toString().indexOf(val) > -1 || i.name.indexOf(val) > -1)
    // var options = {
    //   shouldSort: true,
    //   threshold: 1,
    //   location: 0,
    //   distance: 100,
    //   maxPatternLength: 32,
    //   minMatchCharLength: 1,
    //   keys: [
    //     "name",
    //     "license"
    //   ]
    // };

    // var fuse = new Fuse(rel, options); // "list" is the item array
    // var result = fuse.search(val);
    result.forEach(i => {
      const item = document.createElement('li')
      item.className = "list-group-item"
      item.innerText = `${i.name} - ${i.license}`
      list.appendChild(item)
    })
    return false
  })