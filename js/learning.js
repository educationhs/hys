const contents = [
    {
        title: "Vocabulary",
        desc: "DateBase4800",
        url: "https://www.kirihara-morinogakko.jp/myportal",
        category: "Vocabulary"
    },
    {
        title: "BBC Learning English",
        desc: "イギリスの公共放送事業体BBCが提供しているサイトです。",
        url: "https://www.bbc.co.uk/learningenglish/",
        category: "News"
    },
    {
        title: "British Council",
        desc: "中高生向け",
        url: "https://learnenglishteens.britishcouncil.org/",
        category: "For learner"
    },
    {
        title: "Cambridge",
        desc: "Cambridgeが運営している英語学習者向けのサイトです。",
        url: "https://www.cambridgeenglish.org/learners/",
        category: "For learner"
    },
    {
        title: "NHK WORLD-JAPAN",
        desc: "NHKが発信しているニュースを英語で。",
        url: "https://www3.nhk.or.jp/nhkworld/",
        category: "News"
    },


];

const grid = document.getElementById("contentGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

render();

searchInput.addEventListener("input", render);
categoryFilter.addEventListener("change", render);

function render() {

    const keyword = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = contents.filter(item => {

        const matchKeyword =
            item.title.toLowerCase().includes(keyword) ||
            item.desc.toLowerCase().includes(keyword);

        const matchCategory =
            category === "all" || item.category === category;

        return matchKeyword && matchCategory;
    });

    renderCards(filtered);
}

function renderCards(list) {

    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = "<p>該当するコンテンツがありません</p>";
        return;
    }

    list.forEach(item => {

        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.className = "card-link";

        const card = document.createElement("div");
        card.className = "content-card";

        const title = document.createElement("div");
        title.className = "content-title";
        title.textContent = item.title;

        const desc = document.createElement("div");
        desc.className = "content-desc";
        desc.textContent = item.desc;

        const category = document.createElement("div");
        category.className = "content-category";
        category.textContent = item.category;

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(category);

        a.appendChild(card);
        grid.appendChild(a);
    });
}