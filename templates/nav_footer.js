const theHeader = document.querySelector(".the_header");
const theFooter = document.querySelector(".footern");
const theNav = document.querySelector(".naven");

const headerContent = `
    <h1><a href="/index.html">Byggnads Kompaniet</a></h1>
`;

const navContent = `
    <div class="inner_nav">
        <div class="hamburger_show">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="nav1">
            <a href="/sortiment.html">SORTIMENT</a><a href="#">VARUHUSINFO</a>
        </div>
        <div class="search">
            <input type="text" placeholder="Vad letar du efter?">
        </div>
        <div class="nav2">
            <a href="#">MITT KONTO</a>
            <a href="/varukorg.html">VARUKORG</a>
        </div>
        <div class="img-container">
            <img class="search_now" src="/img/svg/search.svg" alt="Sök">
        </div>
    </div>
    <div class="dropdown">
        <a href="/sortiment.html">SORTIMENT</a>
        <a href="#">VARUHUSINFO</a>
        <a href="#">MITT KONTO</a>
        <a href="/varukorg.html">VARUKORG</a>
    </div>
`;

const dropDownContent = ``;

const footerContent = `
    <div class="inner_footer">
        <div>
            <h1>Om oss</h1>
            <ul>
                <li>Vilka är vi?</li>
                <li>Vad står vi för?</li>
                <li>Hur står vi upp?</li>
                <li>Varför står vi?</li>
                <li>Kalle? Anka?</li>
            </ul>
        </div>
        <div>
            <h1>Juridik</h1>
            <ul>
                <li>Vilka är vi?</li>
                <li>Kalle? Anka?</li>
            </ul>
        </div>
        <div>
            <h1>Fler länkar</h1>
            <ul>
                <li>Vilka är vi?</li>
                <li>Vad står vi för?</li>
                <li>Hur står vi upp?</li>
            </ul>
        </div>
        <div class="socials">
            <h1>Sociala medier</h1>
            <div>
                <div class="img-container">
                    <img src="/img/sociala-medier/Instagram-Icon.png" alt="Vår instagram">
                </div>
                <div class="img-container">
                    <img src="/img/sociala-medier/facebook.png" alt="Vår facebook">
                </div>
                <div class="img-container">
                    <img src="/img/sociala-medier/twitter.png" alt="Vår twitter">
                </div>
            </div>
        </div>
    </div>
`;

theHeader.innerHTML = headerContent;
theNav.innerHTML = navContent;
theFooter.innerHTML = footerContent;