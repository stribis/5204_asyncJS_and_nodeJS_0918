const url = "https://www.amiiboapi.com/api"
const gameseriesurl = url + "/gameseries"
async function getData () {
  const response = await fetch(gameseriesurl)
  const data = await response.json()
  return data
} 
getData().then(data => {
  console.log(data)
  const list = document.createElement('ul')
  data.amiibo.forEach(item => {
    const listItem = document.createElement('li')
    listItem.innerText = item.name
    list.appendChild(listItem)
  });
  document.querySelector('main').appendChild(list)
  getAmiibo()
})
function getAmiibo () {
  const listItems = document.querySelectorAll('ul li')
  listItems.forEach(item => {
    item.addEventListener('click', async e => {
      const response = await fetch(url + `/amiibo/?gameseries=${e.target.innerText}`)
      const data = await response.json()
      console.log(data)  
    })
  })
}
