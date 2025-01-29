const table = document.querySelectorAll("article.w-full")

for(var i = 0; i < table.length; i++){
  console.log(i + ": " + table[i].getAttribute("aria-label"));

  if (table[i].lastElementChild.getAttribute("content-href") === "https://www.bbc.com/news/articles/c4g32yxpdz0o") {
    table[i].remove();
  }

  if (table[i].getAttribute("aria-label").match(/trump|elon|pelosi/gi)) {
    table[i].remove();
  }
}

// #t3_1i6holo > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > a:nth-child(1)
// https://www.bbc.com/news/articles/c4g32yxpdz0o

// gotta reload the selector on feed refresh event
// https://www.reddit.com/svc/shreddit/update-recaptcha?k=cG9wdWxhcnxmb3JlZ3JvdW5kaW5nX2FjdGlvbnw1OGFhZTE3Ni1jODIzLTRmMjQtOGZjMS0xZDUyZDk2MTE2YjQ
// https://www.reddit.com/svc/shreddit/feeds/popular-feed?after=dDNfMWk2c3p3YQ%3D%3D&distance=50&sort=HOT&navigationSessionId=4d023692-d7d3-49d2-b588-873613d0e9b1&cursor=dDNfMWk2c3p3YQ%3D%3D