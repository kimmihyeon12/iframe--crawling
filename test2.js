document.body.innerHTML = ''
const itemList = []

for (let i = 1; i <= 10; i++) {
  const iframeEl = document.createElement('iframe')
  iframeEl.src = `http://a.sellerpick.shop/shopAdmin/?menuType=prodStock&mode=stockStageThumb&checkState=F&page=${i}`
  iframeEl.className = `iframe${i}`

  document.body.appendChild(iframeEl)

  document.querySelector(`.iframe${i}`).onload = () => {
    const title = document
      .querySelector(`.iframe${i}`)
      .contentWindow.document.querySelectorAll('.thumbList .thumbInfo .tit')
    const link = document
      .querySelector(`.iframe${i}`)
      .contentWindow.document.querySelectorAll('.thumbList .attImg a')
    const dataLength = document
      .querySelector(`.iframe${i}`)
      .contentWindow.document.querySelectorAll('.thumbList .thumbInfo').length

    for (let j = 0; j < dataLength; j++) {
      itemList.push({ title: title[j].title, link: link[j].href })
    }
  }
}

console.log(itemList)
