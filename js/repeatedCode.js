const header = `
<div class="logo">
    <img src="img/championsLeague.png" alt="champions" id="imgChampions" />
    <h2>UEFA-CL</h2>
</div>
<ul class="nav-links">
    <li><a href="index.html">Teams</a></li>
    <li><a href="players.html">Players</a></li>
    <li><a href="managers.html">Managers</a></li>
    <li><a href="">News</a></li>
    <li><a href="">Standings</a></li>
</ul>
<div class="search">
    <input type="text" placeholder="Search ..." id="search">
</div>
<div class="auth">
    <button>Login</button>
    <button>Register</button>
</div>
`;

document.querySelector(".navbar").innerHTML = header;

