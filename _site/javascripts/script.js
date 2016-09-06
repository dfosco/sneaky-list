//JQuery used only for the "Add New" and "Remove" buttons

$(function(){
    $('.btn-success').on('click',function(){
        var r= $('<li class="list__button sneaky-list"></li>');
        $(".list").append(r);
    });
});

$(function(){
    $('.btn-danger').on('click',function(){
        $(".list__button").last().remove();
    });
});
