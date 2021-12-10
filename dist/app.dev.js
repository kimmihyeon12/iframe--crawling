"use strict";

var axios = require('axios');

var cheerio = require('cheerio');

var getHTML = function getHTML(keyword) {
  return regeneratorRuntime.async(function getHTML$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          keyword = encodeURI(keyword);
          _context.prev = 1;
          return _context.abrupt("return", axios.get("http://a.sellerpick.shop/shopAdmin/?menuType=prodStock&mode=stockStageThumb&checkState=F&page=".concat(keyword), {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
              'Content-Type': 'text/html',
              Charset: 'utf-8'
            }
          }));

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 5]]);
};

var getData = function getData(keyword) {
  var html, $;
  return regeneratorRuntime.async(function getData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getHTML(keyword));

        case 2:
          html = _context2.sent;
          console.log(html.data);
          $ = cheerio.load(html.data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

getData(1); // const { default: axios } = require('axios')
// const cheerio = require('cheerio')
// const express = require('express')
// const app = express()
// const iconv = require('iconv-lite')
// //http://www.38.co.kr/html/fund/index.htm?o=nw&page=1
// const domain = 'http://www.38.co.kr/html/fund'
// const getHtml = async () => {
//   const dataList = []
//   for (let i = 1; i <= 5; i++) {
//     console.log(`<${i} Page >`)
//     console.log(
//       `http://a.sellerpick.shop/shopAdmin/?menuType=prodStock&mode=stockStageThumb&checkState=F&page=${i}`,
//     )
//     let html = await axios.get(
//       `http://a.sellerpick.shop/shopAdmin/?menuType=prodStock&mode=stockStageThumb&checkState=F&page=${i}`,
//     )
//     //test -> dom처럼 접근가능하게 함 !
//     console.log(html)
//     let $ = cheerio.load(html.data, { decodeEntities: true })
//     // const $dataLength = $('.thumbList .thumbInfo').length
//     // console.log($dataLength)
//     // const dataLength = document.querySelectorAll('.thumbList .thumbInfo').length;
//     // const title= document.querySelectorAll('.thumbList .thumbInfo .tit');
//     // const link = document.querySelectorAll('.thumbList .attImg a');
//     // const itemList =[]
//     // for(let i=0; i<dataLength ; i++){
//     // itemList.push(
//     // {title:title[i].title,
//     //  link:link[i].href}
//     // );
//     // }console.log(itemList);
//     // for(let elem of $trList){
//     //     const uri = $(elem.children[1]).children("a").attr("href").split(".")[1];
//     //     html = await axios.get(domain+uri, {
//     //         responseType:"arraybuffer"
//     //     });
//     //     const data = iconv.decode(html.data, "EUC-KR").toString();
//     //     $ = cheerio.load(data);
//     //     const 제목 = $("body > table:nth-child(9) > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(1) > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(2) > a > b > font").text().trim();
//     //     const 청약경쟁률 = $("body > table:nth-child(9) > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(1) > table:nth-child(6) > tbody > tr:nth-child(3) > td:nth-child(4)").text().trim();
//     //     const 기관경쟁률 = $("body > table:nth-child(9) > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(1) > table:nth-child(9) > tbody > tr:nth-child(9) > td:nth-child(2) > table > tbody > tr > td:nth-child(2)").text().trim();
//     //     const 신규상장일 = $("body > table:nth-child(9) > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(1) > table:nth-child(9) > tbody > tr:nth-child(10) > td:nth-child(2) > table > tbody > tr > td:nth-child(2)").text().trim();
//     //     console.log(`${제목}, ${청약경쟁률}, ${기관경쟁률}, ${신규상장일}`);
//     //     dataList.push({"제목":제목,"청약경쟁률":청약경쟁률,"기관경쟁률":기관경쟁률,"신규상장일":신규상장일 });
//     // };
//   }
//   return dataList
// }
// // getHtml();
// app.get('/', async (req, res) => {
//   res.send(await getHtml())
// })
// app.listen(4000, () => console.log(`server is running on : ${4000}`))
// // const 제목 = document.querySelector("body > table:nth-child(9) > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(1) > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(2) > a > b > font").textContent;
// // const 청약경쟁률 = document.querySelector("body > table:nth-child(9) > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(1) > table:nth-child(6) > tbody > tr:nth-child(3) > td:nth-child(4)").textContent;
// // const 기관경쟁률 = document.querySelector("body > table:nth-child(9) > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(1) > table:nth-child(9) > tbody > tr:nth-child(9) > td:nth-child(2) > table > tbody > tr > td:nth-child(2)").textContent;
// // console.log(`제목:${제목}`);
// // console.log(`청약경쟁률:${청약경쟁률}`);
// // console.log(`기관경쟁률:${기관경쟁률}`);