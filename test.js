const dataLength = document.querySelectorAll('.thumbList .thumbInfo').length
const title = document.querySelectorAll('.thumbList .thumbInfo .tit')
const link = document.querySelectorAll('.thumbList .attImg a')
const itemList = []
for (let i = 0; i < dataLength; i++) {
  itemList.push({ title: title[i].title, link: link[i].href })
}
console.log(itemList)

function download2(content, fileName, contentType) {
  const a = document.createElement('a')
  const file = new Blob([content], { type: contentType })
  a.href = URL.createObjectURL(file)
  a.download = fileName
  a.click()
}

download2(JSON.stringify(itemList), 'yourfile.json', 'text/plain')
