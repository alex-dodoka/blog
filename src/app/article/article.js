'use strict';

$(document).ready(function () {

    var id = getUrlParameter('id');

    addHtml("article", "Id статьи из url параметра - " + id+ "<br>");
    addHtml("article", "Теперь надо сделать запрос на сервер для получения статьи, ссылка в сваггере")
});


function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function addHtml(id, text) {
    $("#" + id).append(text);
}
