// ==UserScript==
// @name         CPM Userscript
// @namespace    https://www.furaffinity.net/user/dearfox/
// @version      0.8.1
// @description  http://cpmmod.top/
// @downloadUrl  https://raw.githubusercontent.com/DearFox/CPM-Userscript/master/CPM%20Userscript.user.js
// @updateUrl    https://raw.githubusercontent.com/DearFox/CPM-Userscript/master/CPM%20Userscript.user.js
// @author       DearFox
// @match        http://cpmmod.top/*
// @require      https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    //$.cookie('test', 'Привет Мир кукафф!!!1!!1!');
    //console.log(Cookies.get('test'));
window.onload = function () {
    //dark_theme
    document.getElementById("dark_theme").onclick = function (e) {
        Cookies.set('theme', 'dark_theme', { expires: 365, path: '' });
        location.reload();
    }
    //HerbTheme
    document.getElementById("HerbTheme").onclick = function (e) {
        Cookies.set('theme', 'HerbTheme', { expires: 365, path: '' });
        location.reload();
    }
    //MarineTheme
    document.getElementById("MarineTheme").onclick = function (e) {
        Cookies.set('theme', 'MarineTheme', { expires: 365, path: '' });
        location.reload();
    }
    //ClayTheme
    document.getElementById("ClayTheme").onclick = function (e) {
        Cookies.set('theme', 'ClayTheme', { expires: 365, path: '' });
        location.reload();
    }
    //CrimsonHorizonTheme
    document.getElementById("CrimsonHorizonTheme").onclick = function (e) {
        Cookies.set('theme', 'CrimsonHorizonTheme', { expires: 365, path: '' });
        location.reload();
    }
    //BluePlanetTheme
    document.getElementById("BluePlanetTheme").onclick = function (e) {
        Cookies.set('theme', 'BluePlanetTheme', { expires: 365, path: '' });
        location.reload();
    }
    //CosmicGreenTheme
    document.getElementById("CosmicGreenTheme").onclick = function (e) {
        Cookies.set('theme', 'CosmicGreenTheme', { expires: 365, path: '' });
        location.reload();
    }
    //GrayVoidTheme
    document.getElementById("GrayVoidTheme").onclick = function (e) {
        Cookies.set('theme', 'GrayVoidTheme', { expires: 365, path: '' });
        location.reload();
    }
    //CyanDustTheme
    document.getElementById("CyanDustTheme").onclick = function (e) {
        Cookies.set('theme', 'CyanDustTheme', { expires: 365, path: '' });
        location.reload();
    }
    //GoldenSolarTheme
    document.getElementById("GoldenSolarTheme").onclick = function (e) {
        Cookies.set('theme', 'GoldenSolarTheme', { expires: 365, path: '' });
        location.reload();
    }
    //PurpleClusterTheme
    document.getElementById("PurpleClusterTheme").onclick = function (e) {
        Cookies.set('theme', 'PurpleClusterTheme', { expires: 365, path: '' });
        location.reload();
    }

}



    //Настройки
    //var theme = "dark_theme"; //Названее темы. Сейчас доступно : dark_theme - темная тема. Любое значение (кроме существующих тем) отключат темы.
    //Проверка переменной в куках на отсуствие данных
    if (Cookies.get('theme') == undefined){
        console.log('Переменная theme равна: '+Cookies.get('theme'));
        Cookies.set('theme', 'default', { expires: 365, path: '' });
        console.log('По этой причине она получила значение по умолчанию: '+Cookies.get('theme'));
    } else{
    console.log('Куки переменная равна: '+Cookies.get('theme'));
    };
    //Скрипт
    var site_url = window.location.pathname; //url сайта (странички)
    console.log(site_url);
    var navbar_nav_ml_auto
    if (site_url == "/model"){
    navbar_nav_ml_auto = document.getElementsByClassName("navbar-nav ml-auto")[1];
    } else{
    navbar_nav_ml_auto = document.getElementsByClassName("navbar-nav ml-auto")[0];
    };
    if (navbar_nav_ml_auto != undefined){
    navbar_nav_ml_auto.innerHTML = `
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre="">Theme<span class="caret"></span>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" id="dark_theme" href="#">Dark Mode</a>
                                        <a class="dropdown-item" id="HerbTheme" href="#">Herb</a>
                                        <a class="dropdown-item" id="MarineTheme" href="#">Marine</a>
                                        <a class="dropdown-item" id="ClayTheme" href="#">Clay</a>
                                        <a class="dropdown-item" id="CrimsonHorizonTheme" href="#">Crimson Horizon</a>
                                        <a class="dropdown-item" id="BluePlanetTheme" href="#">Blue Planet</a>
                                        <a class="dropdown-item" id="CosmicGreenTheme" href="#">Cosmic Green</a>
                                        <a class="dropdown-item" id="GrayVoidTheme" href="#">Gray Void</a>
                                        <a class="dropdown-item" id="CyanDustTheme" href="#">Cyan Dust</a>
                                        <a class="dropdown-item" id="GoldenSolarTheme" href="#">Golden Solar</a>
                                        <a class="dropdown-item" id="PurpleClusterTheme" href="#">Purple Cluster</a>
                                    </div>
                                </li>`+navbar_nav_ml_auto.innerHTML;
    };
    //console.log(navbar_nav_ml_auto.innerHTML);
    GM_addStyle(`
    .table tbody+tbody {
    border-top: 0px solid #000;
    }`);
    var model_info = document.getElementsByClassName("model-info")[0];
    if (model_info != undefined && site_url.substr(0, 7) == "/model/"){
        //console.log(model_info.innerHTML);
        var card_body = document.getElementsByClassName("col-lg-5 pl-1 pr-1")[0];
    if (card_body != undefined && site_url.substr(0, 7) == "/model/"){
        var card = card_body.getElementsByClassName("card")[2];
        var card_mb_3 = card_body.getElementsByClassName("card mb-3");
        if (card != undefined){
            console.log(card.innerHTML.slice(256, -160));
            console.log(card_mb_3);
            model_info.innerHTML = model_info.innerHTML + `<tbody>
                            <tr>
                            <td>Edit</td><td><a href="`+card.innerHTML.slice(256, -160)+`">`+site_url.substr(7, 9999)+`</a></td>
                            </tr>
                            <tr>
                            <td>model.json</td><td><a href="http://cpmmod.top/storage/model/`+site_url.substr(7, 9999)+`/model.json">Open</a></td>
                            </tr>
                            </tbody>`
            card_body.innerHTML = `<div class="card mb-3">`+card_mb_3[0].innerHTML+`</div><div class="card mb-3">`+card_mb_3[1].innerHTML+`</div>`;
        } else{
        model_info.innerHTML = model_info.innerHTML + `<tbody><tr>
                            <td>model.json</td>
                            <td><a href="http://cpmmod.top/storage/model/`+site_url.substr(7, 9999)+`/model.json">`+site_url.substr(7, 9999)+`</a></td>
                        </tr></tbody>`
        };
    };
    };
    //Темы
    if (Cookies.get('theme') == "dark_theme"){
    GM_addStyle(`
    body {
    color: #ffffffad;
    background-color: #22222d;
    }
    html {
    -webkit-tap-highlight-color: #6d9666;
    }
    .h1, h1 {
    color: #ffffffe3;
    }
    .navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: rgb(255, 255, 255);
    }
    .navbar-light .navbar-nav .nav-link {
    color: #ffffffe3;
    }
    .navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #ffffffff;
    }
    .bg-white {
    background-color: #ffffff2b!important;
    }
    .card {
    background-color: #484852;
    }
    a {
    color: #668b96;
    }
    a:hover {
    color: #4d9cb3;
    text-decoration: underline
    }
    .form-control {
    color: #ffffffad;
    background-color: #484852;
    border: 1px solid #3d3d45;
    }
    .form-control:focus {
    color: #ffffffff;
    background-color: #484852;
    border-color: #555471;
    }
    .dropdown-menu {
    background-color: #484852;
    }
    .dropdown-item:focus,.dropdown-item:hover {
    color: #ffffffff;
    text-decoration: none;
    background-color: #46464f
    }
    .dropdown-item{
    color: #ffffff96;
    }
    .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #ffffffff;
    }
    .table {
    color: #ffffff85;
    }
    .table tbody+tbody {
    border-top: 0px solid #000;
    }
    .btn-link:hover {
    color: #4d9cb3;
    }
    .btn-link {
    color: #668b96;
    }
    .homepage-intro {
    background-color: #484852;
    border-top: 4px solid #22222d;
    }
    `);
        }; // Темная тема
    if (Cookies.get('theme') == "HerbTheme"){
    GM_addStyle(`body {
    color: #90cd90;
    background-color: #335133;
    text-shadow: 1px 1px #335133;
}
html {
    -webkit-tap-highlight-color: #cfc;
}
.h1, h1 {
    color: #cfc;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #cfc;
}
.navbar-light .navbar-nav .nav-link {
    color: #cfc;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #cfc;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #4ac34a80;
    border: 1px solid #519351
}
a {
    color: #6f6;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #4ac34a80;
    border: 1px solid #519351;
}
.form-control:focus {
    color: #cfc;
    background-color: #4ac34a80;
    border-color: #519351;
}
.dropdown-menu {
    background-color: #519351;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #cfc;
    text-decoration: none;
    background-color: #519351
}
.dropdown-item{
    color: #cfc;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #cfc;
}
.table {
    color: #cfc;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #6f6;
    font-weight: bold;
}
.btn-link {
    color: #9f9;
    font-weight: bold;
}
.homepage-intro {
    background-color: #519351;
    border-top: 4px solid #335133;
}
.btn-secondary {
    color: #cfc;
    background-color: #519351;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #75c175;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #cfc;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #cfc;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "MarineTheme"){
    GM_addStyle(`body {
    color: #9090cd;
    background-color: #333351;
    text-shadow: 1px 1px #333351;
}
html {
    -webkit-tap-highlight-color: #ccf;
}
.h1, h1 {
    color: #ccf;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #ccf;
}
.navbar-light .navbar-nav .nav-link {
    color: #ccf;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #ccf;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #4a4ac380;
    border: 1px solid #515193
}
a {
    color: #66f;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #4a4ac380;
    border: 1px solid #515193;
}
.form-control:focus {
    color: #ccf;
    background-color: #4a4ac380;
    border-color: #515193;
}
.dropdown-menu {
    background-color: #515193;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #ccf;
    text-decoration: none;
    background-color: #515193
}
.dropdown-item{
    color: #ccf;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #ccf;
}
.table {
    color: #ccf;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #66f;
    font-weight: bold;
}
.btn-link {
    color: #99f;
    font-weight: bold;
}
.homepage-intro {
    background-color: #515193;
    border-top: 4px solid #333351;
}
.btn-secondary {
    color: #ccf;
    background-color: #515193;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #7575c1;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #ccf;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #ccf;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "ClayTheme"){
    GM_addStyle(`body {
    color: #cd9090;
    background-color: #513333;
    text-shadow: 1px 1px #513333;
}
html {
    -webkit-tap-highlight-color: #fcc;
}
.h1, h1 {
    color: #fcc;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #fcc;
}
.navbar-light .navbar-nav .nav-link {
    color: #fcc;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #fcc;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #c34a4a80;
    border: 1px solid #935151
}
a {
    color: #f66;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #c34a4a80;
    border: 1px solid #935151;
}
.form-control:focus {
    color: #fcc;
    background-color: #c34a4a80;
    border-color: #935151;
}
.dropdown-menu {
    background-color: #935151;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #fcc;
    text-decoration: none;
    background-color: #935151
}
.dropdown-item{
    color: #fcc;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #fcc;
}
.table {
    color: #fcc;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #f66;
    font-weight: bold;
}
.btn-link {
    color: #f99;
    font-weight: bold;
}
.homepage-intro {
    background-color: #935151;
    border-top: 4px solid #513333;
}
.btn-secondary {
    color: #fcc;
    background-color: #935151;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #c17575;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #fcc;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #fcc;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "CrimsonHorizonTheme"){
    GM_addStyle(`body {
    color: #cd9090;
    background-color: #513333;
    text-shadow: 1px 1px #513333;
    background-image: url("https://i.imgur.com/RD9AY2j.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
html {
    -webkit-tap-highlight-color: #fcc;
}
.h1, h1 {
    color: #fcc;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #fcc;
}
.navbar-light .navbar-nav .nav-link {
    color: #fcc;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #fcc;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #0008;
    border: 1px solid #935151
}
a {
    color: #f66;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #c34a4a80;
    border: 1px solid #935151;
}
.form-control:focus {
    color: #fcc;
    background-color: #c34a4a80;
    border-color: #935151;
}
.dropdown-menu {
    background-color: #935151;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #fcc;
    text-decoration: none;
    background-color: #935151
}
.dropdown-item{
    color: #fcc;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #fcc;
}
.table {
    color: #fcc;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #f66;
    font-weight: bold;
}
.btn-link {
    color: #f99;
    font-weight: bold;
}
.homepage-intro {
    background-color: #935151;
    border-top: 4px solid #513333;
}
.btn-secondary {
    color: #fcc;
    background-color: #935151;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #c17575;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #fcc;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #fcc;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "BluePlanetTheme"){
    GM_addStyle(`body {
    color: #9090cd;
    background-color: #333351;
    text-shadow: 1px 1px #333351;
    background-image: url("https://wallpapersite.com/images/wallpapers/earth-2560x1440-above-space-hd-6408.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
html {
    -webkit-tap-highlight-color: #ccf;
}
.h1, h1 {
    color: #ccf;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #ccf;
}
.navbar-light .navbar-nav .nav-link {
    color: #ccf;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #ccf;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #0008;
    border: 1px solid #515193
}
a {
    color: #66f;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #4a4ac380;
    border: 1px solid #515193;
}
.form-control:focus {
    color: #ccf;
    background-color: #4a4ac380;
    border-color: #515193;
}
.dropdown-menu {
    background-color: #515193;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #ccf;
    text-decoration: none;
    background-color: #515193
}
.dropdown-item{
    color: #ccf;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #ccf;
}
.table {
    color: #ccf;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #66f;
    font-weight: bold;
}
.btn-link {
    color: #99f;
    font-weight: bold;
}
.homepage-intro {
    background-color: #515193;
    border-top: 4px solid #333351;
}
.btn-secondary {
    color: #ccf;
    background-color: #515193;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #7575c1;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #ccf;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #ccf;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "CosmicGreenTheme"){
    GM_addStyle(`body {
    color: #90cd90;
    background-color: #335133;
    text-shadow: 1px 1px #335133;
    background-image: url("https://steamuserimages-a.akamaihd.net/ugc/39738054026822408/11A4E918E0CEB7837025125A8D4F4F9A4580326D/");
    background-repeat: no-repeat;
    background-size: cover;
}
html {
    -webkit-tap-highlight-color: #cfc;
}
.h1, h1 {
    color: #cfc;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #cfc;
}
.navbar-light .navbar-nav .nav-link {
    color: #cfc;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #cfc;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #0008;
    border: 1px solid #519351
}
a {
    color: #6f6;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #4ac34a80;
    border: 1px solid #519351;
}
.form-control:focus {
    color: #cfc;
    background-color: #4ac34a80;
    border-color: #519351;
}
.dropdown-menu {
    background-color: #519351;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #cfc;
    text-decoration: none;
    background-color: #519351
}
.dropdown-item{
    color: #cfc;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #cfc;
}
.table {
    color: #cfc;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #6f6;
    font-weight: bold;
}
.btn-link {
    color: #9f9;
    font-weight: bold;
}
.homepage-intro {
    background-color: #519351;
    border-top: 4px solid #335133;
}
.btn-secondary {
    color: #cfc;
    background-color: #519351;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #75c175;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #cfc;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #cfc;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "GrayVoidTheme"){
    GM_addStyle(`body {
    color: #909090;
    background-color: #333333;
    text-shadow: 1px 1px #333333;
    background-image: url("https://media.newyorker.com/photos/5c3e3baab50ffe2e4787ed83/master/pass/Chotiner-Oumuamua.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
html {
    -webkit-tap-highlight-color: #ccc;
}
.h1, h1 {
    color: #ccc;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #ccc;
}
.navbar-light .navbar-nav .nav-link {
    color: #ccc;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #ccc;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #000a;
    border: 1px solid #515151
}
a {
    color: #666;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #4a4a4a80;
    border: 1px solid #515151;
}
.form-control:focus {
    color: #ccc;
    background-color: #4a4a4a80;
    border-color: #515151;
}
.dropdown-menu {
    background-color: #515151;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #ccc;
    text-decoration: none;
    background-color: #515151
}
.dropdown-item{
    color: #ccc;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #ccc;
}
.table {
    color: #ccc;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #666;
    font-weight: bold;
}
.btn-link {
    color: #999;
    font-weight: bold;
}
.homepage-intro {
    background-color: #515151;
    border-top: 4px solid #333333;
}
.btn-secondary {
    color: #ccc;
    background-color: #515151;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #757575;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #ccc;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #ccc;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "CyanDustTheme"){
    GM_addStyle(`body {
    color: #90cdcd;
    background-color: #335151;
    text-shadow: 1px 1px #335151;
    background-image: url("https://i.pinimg.com/originals/ce/b2/e9/ceb2e9eca8adab3c5d106b8bf740c1d9.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
html {
    -webkit-tap-highlight-color: #cff;
}
.h1, h1 {
    color: #cff;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #cff;
}
.navbar-light .navbar-nav .nav-link {
    color: #cff;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #cff;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #000a;
    border: 1px solid #519393
}
a {
    color: #6ff;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #4ac3c380;
    border: 1px solid #519393;
}
.form-control:focus {
    color: #cff;
    background-color: #4ac3c380;
    border-color: #519393;
}
.dropdown-menu {
    background-color: #519393;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #cff;
    text-decoration: none;
    background-color: #519393
}
.dropdown-item{
    color: #cff;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #cff;
}
.table {
    color: #cff;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #6ff;
    font-weight: bold;
}
.btn-link {
    color: #9ff;
    font-weight: bold;
}
.homepage-intro {
    background-color: #519393;
    border-top: 4px solid #335151;
}
.btn-secondary {
    color: #cff;
    background-color: #519393;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #75c1c1;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #cff;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #cff;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "GoldenSolarTheme"){
    GM_addStyle(`body {
    color: #cdcd90;
    background-color: #515133;
    text-shadow: 1px 1px #515133;
    background-image: url("https://images.fineartamerica.com/images-medium-large/-sunrise-with-clouds-nattapon-wongwean.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
html {
    -webkit-tap-highlight-color: #ffc;
}
.h1, h1 {
    color: #ffc;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #ffc;
}
.navbar-light .navbar-nav .nav-link {
    color: #ffc;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #ffc;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #000a;
    border: 1px solid #939351
}
a {
    color: #ff6;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #c3c34a80;
    border: 1px solid #939351;
}
.form-control:focus {
    color: #ffc;
    background-color: #c3c34a80;
    border-color: #939351;
}
.dropdown-menu {
    background-color: #939351;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #ffc;
    text-decoration: none;
    background-color: #939351
}
.dropdown-item{
    color: #ffc;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #ffc;
}
.table {
    color: #ffc;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #ff6;
    font-weight: bold;
}
.btn-link {
    color: #ff9;
    font-weight: bold;
}
.homepage-intro {
    background-color: #939351;
    border-top: 4px solid #515133;
}
.btn-secondary {
    color: #ffc;
    background-color: #939351;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #c1c175;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #ffc;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #ffc;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
    if (Cookies.get('theme') == "PurpleClusterTheme"){
    GM_addStyle(`body {
    color: #cd90cd;
    background-color: #513351;
    text-shadow: 1px 1px #513351;
    background-image: url("https://images3.alphacoders.com/947/thumb-1920-947087.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
html {
    -webkit-tap-highlight-color: #fcf;
}
.h1, h1 {
    color: #fcf;
}
.navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #fcf;
}
.navbar-light .navbar-nav .nav-link {
    color: #fcf;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #fcf;
}
.bg-white {
    background-color: #ffffff2b!important;
}
.card {
    background-color: #0008;
    border: 1px solid #935193
}
a {
    color: #f6f;
}
a:hover {
    color: #fff;
    text-decoration: underline, bold
}
.form-control {
    color: #ffffffad;
    background-color: #c34ac380;
    border: 1px solid #935193;
}
.form-control:focus {
    color: #fcf;
    background-color: #c34ac380;
    border-color: #935193;
}
.dropdown-menu {
    background-color: #935193;
}
.dropdown-item:focus,.dropdown-item:hover {
    color: #fcf;
    text-decoration: none;
    background-color: #935193
}
.dropdown-item{
    color: #fcf;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #fcf;
}
.table {
    color: #fcf;
}
.table tbody+tbody {
    border-top: 0px solid #000;
}
.btn-link:hover {
    color: #f6f;
    font-weight: bold;
}
.btn-link {
    color: #f9f;
    font-weight: bold;
}
.homepage-intro {
    background-color: #935193;
    border-top: 4px solid #513351;
}
.btn-secondary {
    color: #fcf;
    background-color: #935193;
    border-color: #0000;
}
.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover {
    color: #fff;
    background-color: #c175c1;
    border-color: #0000;
}
.card-header {
    font-size: 18px;
    font-weight: bold;
    color: #fcf;
}
.card-header:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #fcf;
}
.model-name {
    font-size: 32px;
    font-weight: bold;
}`);
    };
})();
