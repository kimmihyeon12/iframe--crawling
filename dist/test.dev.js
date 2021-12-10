"use strict";

var dataLength = document.querySelectorAll('.thumbList .thumbInfo').length;
var title = document.querySelectorAll('.thumbList .thumbInfo .tit');
var link = document.querySelectorAll('.thumbList .attImg a');
var itemList = [];

for (var i = 0; i < dataLength; i++) {
  itemList.push({
    title: title[i].title,
    link: link[i].href
  });
}

console.log(itemList);

function download2(content, fileName, contentType) {
  var a = document.createElement('a');
  var file = new Blob([content], {
    type: contentType
  });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

download2(JSON.stringify(itemList), 'yourfile.json', 'text/plain');