'use strict';

const
    ARTICLE_URL = "http://localhost:8089/blog-rs/api/article";


function onSubmit() {
    var newArticle = {
        title: $("#article_title").val(),
        summary: $("#article_summary").val(),
        content: $("#article_content").val(),
        footer: $("#article_footer").val(),
        language: "RU",
        urlTitle: $("#article_title").val()
    };
    sendDataToServer(newArticle);
}

function sendDataToServer(article) {
    $.ajax({
        url: ARTICLE_URL,
        type: 'POST',
        data: JSON.stringify(article), //Converting object to JSON
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

