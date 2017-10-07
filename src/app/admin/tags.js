'use strict';
const TAG_URL = "http://localhost:8089/blog-rs/api/tag/";


function addTag() {
    let date = new Date();
    let newTag = {
        createAt: date,
        tags: {tagTitle: [$("#article_tag").val()]}
    };
    let final = JSON.stringify(newTag);
    console.log(final);
    createTag(newTag);
}

function createTag(tag) {
    $.ajax({
        url: TAG_URL,
        type: 'POST',
        data: JSON.stringify(tag)
    }).done(function (response) {
        console.log(response);
    })
}