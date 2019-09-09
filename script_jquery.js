/*$(function(){
    $('#azul').click(function() {
    $('p')
        .css("background-color", "blue")
        .fadeOut()
        .delay(1000)
        .fadeIn();
});

    $("#vermelho").click(function() {
        $('p').css("background-color", "red");
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({color: 'red', border: 'ipx solid red'})
            .delay(3000)
            .addClass('green')


            $('button').removeClass('red');
    });

  
});
*/ 

$(function(){

    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();

        
    });

    $('#l2').click(function(){
        $('#i2').show();
        $('#i1').hide();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l3').click(function(){
        $('#i3').show();
        $('#i2').hide();
        $('#i1').hide();
        $('#i4').hide();

        
    });

    $('#l4').click(function(){
        $('#i4').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i1').hide();

        
    });

});