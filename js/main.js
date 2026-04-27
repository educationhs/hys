const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

openMenu.onclick = () => {
    drawer.classList.add("open");
    overlay.classList.add("show");
};

closeMenu.onclick = () => {
    drawer.classList.remove("open");
    overlay.classList.remove("show");
};

overlay.onclick = closeMenu.onclick;

let allNews = [];
let allLectures = [];

fetch("https://script.google.com/macros/s/AKfycbzVC_ThCAwGor1a4GQhmaTx_Z_mnJ0XDkCd1tzvp96KY9kmFnOqeWHfxAflVuO-vAvNeA/exec")
    .then(res => res.json())
    .then(data => {
        allNews = data.news;
        allLectures = data.lectures;


        renderNews(3);
        renderLectures(3);
    });


function renderNews(count) {
    const el = document.getElementById("news");
    el.innerHTML = "";

    allNews.slice(0, count).forEach(item => {

        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = item.url;
        link.target = "_blank";
        link.className = "news-link";

        const title = document.createElement("div");
        title.textContent = item.date + " - " + item.title;

        const content = document.createElement("div");
        content.textContent = item.content;

        link.appendChild(title);
        link.appendChild(content);

        li.appendChild(link);

        el.appendChild(li);
    });
}

function renderLectures(count) {
    const el = document.getElementById("lectures");
    el.innerHTML = "";

    allLectures.slice(0, count).forEach(item => {

        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = item.url;
        link.target = "_blank";
        link.className = "news-link";

        const title = document.createElement("div");
        title.textContent = item.number + "：" + item.title;

        const content = document.createElement("div");
        content.textContent = item.content;

        link.appendChild(title);
        link.appendChild(content);

        li.appendChild(link);

        el.appendChild(li);
    });
}


moreNews.onclick = () => renderNews(allNews.length);
moreLectures.onclick = () => renderLectures(allLectures.length);