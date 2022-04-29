const theHeader = document.querySelector(".the_header");
const headerContent = `
    <h1><a href="/index.html">Byggnads Kompaniet</a></h1>
    <nav class="naven">
        <div class="inner_nav">
            <div class="nav1">
                <a href="#">SORTIMENT</a><a href="#">VARUHUSINFO</a>
            </div>
            <div class="search">
                <input type="text" placeholder="Vad letar du efter?">
            </div>
            <div class="nav2">
                <a href="#">MITT KONTO</a>
                <a href="/varukorg.html">VARUKORG</a>
            </div>
        </div>
    </nav>
`;

theHeader.innerHTML = headerContent;