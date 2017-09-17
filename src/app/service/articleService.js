'use strict';

const
    ARTICLE_URL = "http://localhost:8089/blog-rs/api/article",
    newArticle = "articles-block",
    LIST_OF_ARTICLES = "articles-list";

//Implementation of deleting an article
function deleteArticle(id) {
    const url = ARTICLE_URL + '/' + id;

    console.log(url);

    $.ajax({
        url: url,
        type: "DELETE",
        beforeSend: function (xhr) {
            console.log(xhr);
        }
    }).done(function (dataFromServer) {
        console.log(dataFromServer);
    })
}


//Output of all articles
function getDataFromServer() {
    $.ajax({
        url: ARTICLE_URL,
        type: "GET"
    }).done(function (dataFromServer) {
        console.log(dataFromServer);

        if (_.isEmpty(dataFromServer)) {
            addHtml(newArticle, noArticles());
        } else {
            for (let i = 0; i < dataFromServer.length; i++) {
                const title = dataFromServer[i].title || null;
                const summary = dataFromServer[i].summary || null;
                const id = dataFromServer[i].id || null;
                addHtml(newArticle, createArticlePreview(title, summary, id));
            }
        }
    });
}

function getListOfArticles() {
    $.ajax({
        url: ARTICLE_URL,
        type: "GET"
    }).done((dataFromServer) => {
        console.log(dataFromServer);
        if (_.isEmpty(dataFromServer)) {
            addHtml(newArticle, noArticles());
        } else {
            for (let i = 0; i < dataFromServer.length; i++) {
                const title = dataFromServer[i].title || null;
                const id = dataFromServer[i].id || null;
                addHtml(LIST_OF_ARTICLES, articleList(title, id));
            }
        }
    });
}

function articleList(title, id) {
    return '<ul>' +
        '<p id="title">' + title +
        '<a onclick=deleteArticle(' + id + ')>' + ' delete' + '</a>' +
        '<a  href="#">' + ' update' + '</a>' +
        '</p>' +
        '</ul>';
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
        '<p id="summary"> No articles </p>' +
        '</div>';
}

function addHtml(id, text) {
    $("#" + id).append(text);
}
