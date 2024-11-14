//const x = document.getElementsByClassName("stack_condensed");

x = document.querySelectorAll('[data-uri*="cnn.com"]');

for (let i = 0; i < x.length; i++) {
  x[i].remove();
}

y = document.querySelectorAll('[href*="cnn"]');

for (let i = 0; i < y.length; i++) {
    y[i].remove();
}

z = document.querySelectorAll('[data-subreddit="cnn"');

for (let i = 0; i < z.length; i++) {
    z[i].remove();
}

w = document.querySelectorAll('[href*="yahoo"]');

for (let i = 0; i < w.length; i++) {
    w[i].remove();
}

t = document.querySelectorAll('[data-domain="yahoo.com"]');

for (let i = 0; i < t.length; i++) {
    t[i].remove();
}