function solve(selector){

    $(selector).click(function(){

    let summary = $('#content strong').text();
       createContent (summary);
    });

    function createContent(summary){
        let original = $('#content').parent();
        let div = $('<div>').attr('id','summary');

        let h2 = $('<h2>Summary</h2>');
        div.append(h2);
        let p = $('<p>').text(summary);
        div.append(p);
        original.append(div);

    }
}


