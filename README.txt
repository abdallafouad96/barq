Barq website
============
Open index.html (needs the assets and downloads folders next to it). Fully static: no build step.

Publish: upload this whole folder to any static host (GitHub Pages, Netlify, Cloudflare Pages).
IMPORTANT: downloads/Barq-0.9.0.apk is 104 MB. GitHub Pages rejects files over 100 MB, so host the APK on
GitHub Releases (or similar) and point the download button to it: in index.html change the href of id="apkBtn".

The APK in downloads/ is signed with the debug key (fine for testing). For a public release, sign with your own key.
downloads/info.json holds the size and SHA-256 shown on the page: regenerate it when you replace the APK.

Languages: English text lives in index.html, Arabic in assets/js/main.js (object AR). Add data-i="key" to new text.
Screenshots: assets/img (cropped from real captures of the app).

Hosting (free): run deploy.ps1 (see the top of that file). It puts the site on GitHub Pages and the APK on GitHub Releases.
Own domain later: buy one, add a file named CNAME containing the domain, then follow
GitHub > repo Settings > Pages > Custom domain, and add the DNS records GitHub shows you.
