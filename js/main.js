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

fetch("https://script.google.com/macros/s/AKfycbxM4LOum1d8CO5qNVnLuEqn5XGCxU1yIjPqwV-0Fgu0guBp6W2FrLJ6SAuQv1k-bVf07w/exec")
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

        const title = document.createElement("div");
        title.textContent = item.date + " - " + item.title;

        const content = document.createElement("div");
        content.textContent = item.content;

        li.appendChild(title);
        li.appendChild(content);

        el.appendChild(li);
    });
}


function renderLectures(count) {
    const el = document.getElementById("lectures");
    el.innerHTML = "";

    allLectures.slice(0, count).forEach(item => {

        const li = document.createElement("li");

        const title = document.createElement("div");
        title.textContent = item.number + "：" + item.title;

        const content = document.createElement("div");
        content.textContent = item.content;

        li.appendChild(title);
        li.appendChild(content);

        el.appendChild(li);
    });
}


moreNews.onclick = () => renderNews(allNews.length);
moreLectures.onclick = () => renderLectures(allLectures.length);