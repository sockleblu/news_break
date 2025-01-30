const table = document.querySelectorAll("article.w-full")
let myPort = browser.runtime.connect({ name: "feedLinks"});

myPort.onMessage.addListener((m) => {
  console.log("In Content Script: ");
  console.log(m.feedLinks);

  for(var i = 0; i < table.length; i++){
      if (m.feedLinks.includes(table[i].lastElementChild.getAttribute("content-href"))) {
          table[i].remove();
      }
    
      if (table[i].getAttribute("aria-label").match(/trump|elon|pelosi/gi)) {
          table[i].remove();
      }
  }
});