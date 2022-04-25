const sidNaven = document.querySelector("nav.naven");
const theNav = `
<div class="img-container">
    <a href="/index.html">
        <img src="/img/logo/ltg_logo_round.png" alt="LTG logo">
    </a>
</div>
<div class="anchors">
    <a href="#">Startsida</a><a href="#">Program</a><a href="#">Om oss</a>
</div>
`;

sidNaven.innerHTML = theNav;