'use strict';

const
    ARTICLE_URL = "http://localhost:8089/blog-rs/api/article",
    newArticle = "articles-block";

function getDataFromServer() {
    $.ajax({
        url: ARTICLE_URL,
        type: "GET"
    }).done(function (dataFromServer) {
        console.log(dataFromServer);

        if (_.isEmpty(dataFromServer)) {
            addHtml(newArticle, noArticles());
        } else {
            for (var i = 0; i < dataFromServer.length; i++) {
                var title = dataFromServer[i].title || null;
                var summary = dataFromServer[i].summary || null;
                var id = dataFromServer[i].id || null;
                addHtml(newArticle, createArticlePreview(title, summary, id));
            }
        }
    });
}

function createArticlePreview(title, summary, id) {
    return '<div class="jumbotron">' +
        '<h1 id="title">' + title + '</h1>' +
        '<p id="summary">' + summary + '</p>' +
        '<p>' + '<a class="btn button article-button" href="app/article/article.html?id=' + id + '" role="button">' +
        'Читать</a>' + '</p>' +
        '</div>';
}

function noArticles() {
    return '<div class="jumbotron">' +
        '<p id="summary"> no articles </p>' +
        '</div>';
}

function addHtml(id, text) {
    $("#" + id).append(text);
}
