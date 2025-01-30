const RSS_URLS = [
    "http://rss.cnn.com/rss/cnn_latest.rss/", 
    "https://moxie.foxnews.com/google-publisher/latest.xml"
];

const FEED_LINKS = [];

let ports = [];

RSS_URLS.forEach(feed => {
    fetch(feed)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "application/xml"))
        .then(data => {
            const links = data.querySelectorAll("link");
            links.forEach(el => {
                FEED_LINKS.push(el.innerHTML);
            })
        })
})

function connected(p) {
    ports[p.sender.tab.id] = p;
    ports[p.sender.tab.id].postMessage({ feedLinks: FEED_LINKS });       
}

browser.runtime.onConnect.addListener(connected);