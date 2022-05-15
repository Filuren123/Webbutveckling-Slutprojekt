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
            <a href="/sortiment.html">SORTIMENT</a><a href="/about.html">Om Oss</a>
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
        <a href="/about.html">Om Oss</a>
        <a href="#">MITT KONTO</a>
        <a href="/varukorg.html">VARUKORG</a>
    </div>
`;

const footerContent = `
    <div class="inner_footer">
        <div class="top_footer">
            <div class="info_falt">
                <div>
                    <h3>Adress</h3>
                    <p>
                        Byggnadsgatan 100, 456 Byggerred
                    </p>
                    <p>
                        Email: oss@byggkomp.se
                    </p>
                </div>
                <div>
                    <h3>Kontakt</h3>
                    <p>
                        Telefon: +46 76 344 123
                    </p>
                    <p>
                        Email: help@byggkomp.se
                    </p>
                    <p>
                        Fax: 0004588367875466
                    </p>
                </div>
            </div>
            <div class="mini_nav">
                <a href="/sortiment.html">SORTIMENT</a>
                <a href="/about.html">Om Oss</a>
                <a href="#">MITT KONTO</a>
                <a href="/varukorg.html">VARUKORG</a>
            </div>
            <div class="info_falt">
                <div>
                    <h3>Mer info</h3>
                    <p>
                        Somehting
                    </p>
                    <p>
                        Här finns lite mer
                    </p>
                    <p>
                        Här finns lite mer
                    </p>
                </div>
                <div>
                    <h3>Annan info</h3>
                    <p>
                        Somehting
                    </p>
                    <p>
                        Här finns lite mer
                    </p>
                    <p>
                        Här finns lite mer
                    </p>
                    <p>
                        Somehting
                    </p>
                    <p>
                        Här finns lite mer
                    </p>
                    <p>
                        Här finns lite mer
                    </p>
                </div>
            </div>
            <div class="follow">
                <h3>Följ oss</h3>
                <div>
                    <div class="img-container">
                        <img src="/img/sociala-medier/facebook.png" alt="Facebook">
                    </div>
                    <div class="img-container">
                        <img src="/img/sociala-medier/Instagram-Icon.png" alt="Instagram">
                    </div>
                    <div class="img-container">
                        <img src="/img/sociala-medier/twitter.png" alt="Twitter">
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom_footer">
            &copy; 2022 Byggnads Kompaniet
        </div>
    </div>
`;

theHeader.innerHTML = headerContent;
theNav.innerHTML = navContent;
theFooter.innerHTML = footerContent;