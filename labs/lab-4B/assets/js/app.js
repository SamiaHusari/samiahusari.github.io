$('.item').click(function() {
  //has the user already clicked this item
  if (!$(this).hasClass('in-cart')) {
    var current_count = $('.item-count').html(),
        current_value = Math.abs(current_count),
        new_count     = current_value + 1;

    $('.item-count').html(new_count);
    $(this).addClass('in-cart');
  }
 
});
