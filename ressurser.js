const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

function renderHTML() {
    let resourceHTML = ""
    resources.map(resource => {if (resource.category.includes("HTML")) 
    {resourceHTML+= `<h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(resource => `<li>
        <a href=${resource.url}>${resource.title}</a></li>`).join("")}
    </ul>`}})
    document.querySelector("#text").innerHTML = resourceHTML
    document.querySelector("#b1").classList.add("active")
    document.querySelector("#b2").classList.remove("active")
    document.querySelector("#b3").classList.remove("active")
    document.querySelector("#b4").classList.remove("active")
    document.querySelector("#b5").classList.remove("active")
}

function renderCSS() {
    let resourceHTML = ""
    resources.map(resource => {if (resource.category.includes("CSS")) 
    {resourceHTML+= `<h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(resource => `<li>
        <a href=${resource.url}>${resource.title}</a></li>`).join("")}
    </ul>`}})
    document.querySelector("#text").innerHTML = resourceHTML
    document.querySelector("#b1").classList.remove("active")
    document.querySelector("#b2").classList.add("active")
    document.querySelector("#b3").classList.remove("active")
    document.querySelector("#b4").classList.remove("active")
    document.querySelector("#b5").classList.remove("active")
}

function renderJavaScript() {
    let resourceHTML = ""
    resources.map(resource => {if (resource.category.includes("JavaScript")) 
    {resourceHTML+= `<h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(resource => `<li>
        <a href=${resource.url}>${resource.title}</a></li>`).join("")}
    </ul>`}})
    document.querySelector("#text").innerHTML = resourceHTML
    document.querySelector("#b1").classList.remove("active")
    document.querySelector("#b2").classList.remove("active")
    document.querySelector("#b3").classList.add("active")
    document.querySelector("#b4").classList.remove("active")
    document.querySelector("#b5").classList.remove("active")
}

function renderReact() {
    let resourceHTML = ""
    resources.map(resource => {if (resource.category.includes("React")) 
    {resourceHTML+= `<h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(resource => `<li>
        <a href=${resource.url}>${resource.title}</a></li>`).join("")}
    </ul>`}})
    document.querySelector("#text").innerHTML = resourceHTML
    document.querySelector("#b1").classList.remove("active")
    document.querySelector("#b2").classList.remove("active")
    document.querySelector("#b3").classList.remove("active")
    document.querySelector("#b4").classList.add("active")
    document.querySelector("#b5").classList.remove("active")
}

function renderSanity() {
    let resourceHTML = ""
    resources.map(resource => {if (resource.category.includes("Sanity and headless CMS")) 
    {resourceHTML+= `<h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(resource => `<li>
        <a href=${resource.url}>${resource.title}</a></li>`).join("")}
    </ul>`}})
    document.querySelector("#text").innerHTML = resourceHTML
    document.querySelector("#b1").classList.remove("active")
    document.querySelector("#b2").classList.remove("active")
    document.querySelector("#b3").classList.remove("active")
    document.querySelector("#b4").classList.remove("active")
    document.querySelector("#b5").classList.add("active")
}

renderHTML()
