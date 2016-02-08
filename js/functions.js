/**
 * Created by deniscapp on 2/7/16.
 */
window.onload = function(){


    $('#card-2').hide();
    console.log($('#card2-button').text());

    $('#card2-button').click(function () {
        console.log($('#card2-button').text());

        console.log("entrou");
        $('#card-2').slideToggle("slow",function(){
            console.log("after slided");
        });
        if($('#card2-button').text()=="Slide in card"){
            $('#card2-button').html("Slide out card");
        }else{
            $('#card2-button').html("Slide in card");

        }

    });


    $('#card1-button').click(function () {
        console.log($('#card1-button').text());
        $('#card-about').fadeToggle('slow', 'linear');
        if($('#card1-button').text()=="Hide card") {
            console.log("entrou");
            $('#card1-button').html("Show card");
        }else{
            $('#card1-button').html("Hide card");

        }

    });

    var previous = 0;
    var originalSize = $('#skills').css('fontSize');

    $('#card3-button').click(function(){
        var actual = Math.floor((Math.random() * 3) + 1);

        while(previous==actual)
            actual = Math.floor((Math.random() * 3) + 1);

        previous = actual;
        switch (actual){

            case 1: one();
                break;

            case 2: two();
                break;

            case 3: three();
                break;

        }

    });


    function one(){
        console.log("one");
        $('#card-3').animate({
            width: "60%",
            height: "70%",
            fontSize: "2.3em",
            opacity: 0.9
        },1500);
    }

    function two() {
        console.log("two");
        $('#card-3').animate({
            width: "20%",
            height: "50%",
            fontSize: originalSize,
            opacity: 5.4
        }, 1500);
    }

    function three(){
        console.log("three");
        $('#card-3').animate({
            fontSize: "1.1em",
            height: "70%",
            opacity: 0.2
        },1500);
    }

}