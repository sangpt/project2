$(document).on('turbolinks:load', function(){
  $(document).ready(function(){
    $('#input-tags').selectize({
      delimiter: ',',
      plugins: ['remove_button'],
      persist: false,
      maxItems: 10,
      create: function(input) {
        return {
          value: input,
          text: input
        }
      }
    });

    function h(e) {
      $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight);
    }
    $('textarea').each(function () {
      h(this);
    }).on('input', function () {
      h(this);
    });

    $('#create-post').on('click', function(event) {
      event.preventDefault();
      var post_title = $('#post_title').val();
      var post_content = $('#post_content').val();
      var post_picture = $('#post_picture').val();

      var params = $('#new_post').serialize();
      $.ajax({
        type: 'POST',
        dateType: 'json',
        url: '/posts/',
        data: params,
        success: function(data){
          $(data.html).prependTo($('#posts'));
          $('#new_post').trigger("reset");
          $('.items').children('div').fadeOut();
          $('.items').children('input').attr('placeholder', data.placeholder);
        }
      });
      return false;
    });

    $('body').on('click', '.edit-post', function() {
      var post_id = $(this).attr('id');
      $.ajax({
        type: 'GET',
        dateType: 'json',
        url: '/posts/'+ post_id + '/edit/',
        success: function(data){
          $('body').prepend(data.html);
          $('#myModal').modal();
        }
      });
    });

    $('body').on('click', '#update-post', function(event) {
      event.preventDefault();
      var post_id = $(this).parent().data('id');
      var params = $(this).parent().serialize();
      console.log(params);
      $.ajax({
        type: 'PATCH',
        dateType: 'json',
        data: params,
        url: '/posts/'+ post_id,
        success: function(data){
          $('#post-' + post_id).replaceWith(data.html);
          $('#myModal').modal('hide');
        }
      });
      return false;
    });

    $('body').on('click','.delete-post', function() {
      var post_id = $(this).attr('id');
      console.log(post_id);
      $.ajax({
        type: 'DELETE',
        dateType: 'json',
        url: '/posts/'+ post_id,
        data: {id: post_id},
        success: function(data){
          $('#post-' + post_id).fadeOut();
        }
      });
    });

    $('.show-comment').click(function() {
      $(this).parents('li.post').find('.comment-area').toggle();
    });

    $('body').on('click', '.like', function(){
      var post_id = $(this).data('id');
      $.ajax({
        type: 'POST',
        dateType: 'json',
        data: {id: post_id},
        url: '/likes',
        success: function(data) {
          $('#like-' + post_id).attr('class', 'delete-like');
          $('#like-number-' + post_id).text(data.like_number);
        }
      });
    });

    $('body').on('click', '.delete-like', function(){
      var post_id = $(this).data('id');
      $.ajax({
        type: 'DELETE',
        dateType: 'json',
        // data: {post_id: post_id},
        url: '/likes/' + post_id,
        success: function(data) {
          $('#like-' + post_id).attr('class', 'like');
          $('#like-number-' + post_id).text(data.like_number);
        }
      });
    });
  })
});


