let tab = function() {
    let tabName;
    $(".tab-slider").on('click', function(){
        $(".tab-slider").removeClass("is-active");
        $(this).addClass("is-active");
        tabName = $(this).attr('tab');
        console.log(tabName);
        selectTab(tabName);

    });

function selectTab(tabName){
    $(".tab").removeClass("is-active");
    $("#" + tabName).addClass("is-active");
}

}

tab();