/* Javascript for CoderXBlock. */
function CoderXBlock(runtime, element) {

    // function updateCount(result) {
    //     $('.count', element).text(result.count);
    // }

    // var handlerUrl = runtime.handlerUrl(element, 'increment_count');
    //
    // $('p', element).click(function (eventObject) {
    //     $.ajax({
    //         type: "POST",
    //         url: handlerUrl,
    //         data: JSON.stringify({"hello": "world"}),
    //         success: updateCount
    //     });
    // });

    $(function ($) {
        var tokenElement = $("#token");
        var token =
            {
                url: runtime.handlerUrl(element, 'auth_idea_plugin'),
                user_id: tokenElement.attr('data-user_id')

            };
        token = btoa(JSON.stringify(token));
        tokenElement.val(token);
        $("#clipboard").click(function (elemen) {
            tokenElement.select();
            document.execCommand("copy");
        })
    });
}

