'use strict';

const
    CREATE_ARTICLE = "http://localhost:8089/blog-rs/api/article";


$(document).ready(() => {
    getListOfArticles();
});


function onSubmit() {
    let newArticle = {
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
        url: CREATE_ARTICLE,
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

