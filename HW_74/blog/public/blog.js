(function () {
    let addComment = $('.addComment'),
        cancel = $('.cancel'),
        showComments = $('.showComments'),
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
    <button class="cancel">cancel</button>
</div>`),
        submitComment = $('#submitComment');
        $(document).on('click', '.showComments', e => {
        const theTarget = $(e.target);
 $.get('/showComments', { id: $(e.target).closest('.post').attr('id') },function(comments){
     console.log(comments);
     theTarget.next().append(comments).show();
  //$('body').append(comments);
 });       
        theTarget.hide();
    });
    $(document).on('click', '.addComment', e => {
        const theTarget = $(e.target);
        $('.addComment').hide();
        theTarget.after(commentBox);
        commentBox.show();
        cancel.show();;
        
        
    });

    $(document).on('click', '#submitComment', e => {
        $.post('/addComment', { id: $(e.target).closest('.post').attr('id'), content: $('#content').val(), author: $('#author').val() });
        console.log('id', $(e.target).closest('.post').attr('id'), 'content', $('#content').val(), 'author', $('#author').val());
        commentBox.hide();
        addComment.show();
        $('#content').val('');
        $('#author').val('');
        e.preventDefault();
    });
    $(document).on('click', '.cancel', e => {
        commentBox.hide();
        $('.addComment').show();
        cancel.hide();
        $('#content').val('');
    });
}());
