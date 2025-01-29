// console.log(document.querySelectorAll("#siteTable")[0])
const table = document.querySelectorAll("#siteTable")[0].childNodes

for(var i = 0; i < table.length; i++){
  console.log(i + ": " + table[i].getAttribute("data-url"));

  if (table[i].getAttribute("data-url") === "https://www.the-express.com/news/politics/161200/barron-trump-meme-coin-melania") {
    table[i].remove();
  }

  if (table[i].innerText.match(/trump|elon|pelosi/gi)) {
    table[i].remove();
  }
}

// https://www.the-express.com/news/politics/161200/barron-trump-meme-coin-melania
// thing_t3_1i6zqvs
// #thing_t3_1i6zqvs
// #thing_t3_1i6orqk > div:nth-child(5) > div:nth-child(1) > p:nth-child(1) > a:nth-child(1)
// console.log(document.querySelectorAll("#thing_t3_1i6orqk").querySelectorAll("div:nth-child(5) > div:nth-child(1) > p:nth-child(1) > a:nth-child(1)")[0].childNodes[0].data)
