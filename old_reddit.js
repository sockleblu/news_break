const table = document.querySelectorAll("#siteTable")[0].childNodes
let myPort = browser.runtime.connect({ name: "feedLinks"});

myPort.onMessage.addListener((m) => {
    console.log("In Content Script: ");
    console.log(m.feedLinks);

    for(var i = 0; i < table.length; i++){
        if (m.feedLinks.includes(table[i].getAttribute("data-url"))) {
            table[i].remove();
        }

        if (table[i].innerText.match(/trump|elon|pelosi/gi)) {
            table[i].remove();
        }
    }
});
