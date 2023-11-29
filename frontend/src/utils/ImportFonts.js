function ImportRighteous() {
    const link = document.createElement("link");

    link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Righteous&display=swap");
    link.setAttribute("rel", "stylesheet");

    document.head.appendChild(link);
}

function ImportJua() {
    const link = document.createElement("link");

    link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Jua&display=swap");
    link.setAttribute("rel", "stylesheet");

    document.head.appendChild(link);
}

function ImportLuckiestGuy() {
    const link = document.createElement("link");

    link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
    link.setAttribute("rel", "stylesheet");

    document.head.appendChild(link);
}

function ImportSofiaSans() {
    const link = document.createElement("link");

    link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300;400;700&display=swap");
    link.setAttribute("rel", "stylesheet");

    document.head.appendChild(link);
}

function ImportNanumGothic() {
    const link = document.createElement("link");

    link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap");
    link.setAttribute("rel", "stylesheet");

    document.head.appendChild(link);
}

export default function ImportFonts() {
    ImportRighteous();
    ImportJua();
    ImportLuckiestGuy();
    ImportSofiaSans();
    ImportNanumGothic();
}

