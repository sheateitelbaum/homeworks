(function () {
    let addComment = $('.addComment'),
        cancel = $('.cancel'),
        commentBox = $(`<div class="commentBox">
        <div>
        Author:
        <input type="text" id="author" name="author" placeholder="Enter name"/>
    </div>
    <div>
        Content:
        <textarea id="content" name="content" placeholder="Enter comment"></textarea>
    </div>
    <button id="submitComment">Submit</button>
</div>`),
        submitComment = $('#submitComment');

    $(document).on('click', '.addComment', e => {
        const theTarget = $(e.target);
        theTarget.after(commentBox);
        commentBox.show();
        theTarget.hide();
    });

    $(document).on('click', '#submitComment', e => {
        $.post('/a', { id: $(e.target).closest('.post').attr('id'), content: $('#content').val(), author: $('#author').val() });
        console.log('id', $(e.target).closest('.post').attr('id'), 'content', $('#content').val(), 'author', $('#author').val());
        commentBox.hide();
        addComment.show();
        $('#content').val('');
        $('#author').val('');
        e.preventDefault();
    });
    cancel.click(function () {
        commentBox.hide();
        addComment.show();
        $('#content').val('');
    });
}());
