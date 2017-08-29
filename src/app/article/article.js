'use strict';

var GET_ARTICLE_URL = "http://localhost:8089/blog-rs/api/article/id/";

$(document).ready(function () {
    var id = getUrlParameter('id');
    getDataFromServer(GET_ARTICLE_URL.concat(id));
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
    $("#" + id).html(text);


}

function getDataFromServer(url) {
    $.ajax({
        url: url,
        type: "GET"
    }).done(function (response) {
        console.log(response);

        addHtml("article",JSON.stringify(response));
    })
}