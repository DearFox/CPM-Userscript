// ==UserScript==
// @name         CPM Userscript
// @namespace    https://www.furaffinity.net/user/dearfox/
// @version      0.4
// @description  http://cpmmod.top/
// @author       DearFox
// @match        http://cpmmod.top/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    //Настройки
    var theme = "dark_theme"; //Названее темы. Сейчас доступно : dark_theme - темная тема. Любое значение (кроме существующих тем) отключат темы.
    //Скрипт
    var site_url = window.location.pathname; //url сайта (странички)
    console.log(site_url);
    GM_addStyle(`
    .table tbody+tbody {
    border-top: 0px solid #000;
    }`);
    var model_info = document.getElementsByClassName("model-info")[0];
    if (model_info != undefined && site_url.substr(0, 7) == "/model/"){
        console.log(model_info.innerHTML);
        model_info.innerHTML = model_info.innerHTML + `<tbody><tr>
                            <td>model.json</td>
                            <td><a href="http://cpmmod.top/storage/model/`+site_url.substr(7, 9999)+`/model.json">`+site_url.substr(7, 9999)+`</a></td>
                        </tr></tbody>`
    };
    if (theme == "dark_theme"){
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
        };
})();