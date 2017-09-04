'use strict';

var GET_ARTICLE_URL = "http://localhost:8089/blog-rs/api/article/id/";

$(document).ready(function () {
    var id = getUrlParameter('id');
    getDataFromServer(GET_ARTICLE_URL + id);
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

function getDataFromServer(url) {
    $.ajax({
        url: url,
        type: "GET"
    }).done(function (response) {
        interceptionResponse(response);
    })
}

function interceptionResponse(article) {
    for (var i = 0; i < article.length; i++) {
        console.log(article);
        var html = drawData(article[i]);
        addHtml('article', html);
        console.log(article[i]);
    }
}

function drawData(modelData) {
    return '<p>' + modelData.title + '</p>' +
        '<p>' + modelData.summary + '</p>' +
        '<p>' + modelData.content + '</p>' +
        '<p>' + modelData.footer + '</p>'
}

function addHtml(id, text) {
    $("#" + id).html(text);
}