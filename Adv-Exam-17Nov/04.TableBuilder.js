function tableBuilder(selector) {
    return {
        createTable: function(colNames) {
            let table = $("<table>");
            let headerRow = $("<tr>");
            headerRow.appendTo(table);
            for (let colName of colNames)
                headerRow.append($("<th>").text(colName));
            headerRow.append($("<th>Action</th>"));
            $(selector).empty(); //pravim prazen selector
            $(selector).append(table); //zakachame mu tablicata
        },
        fillData: function(dataRows) {
            for (let dataRow of dataRows) {
                let row = $("<tr>");
                for (let cellData of dataRow) {
                    row.append($("<td>").text(cellData));
                }

                let delButton = $("<button>Delete</button>");
                delButton.click(function() {
                    $(this).parent().parent().remove();
                });
                row.append($("<td>").append(delButton)); //zakachame butona kum reda
                row.appendTo($(selector + ' table')); //zakachame reda kum tablicata
            }
        }
    }
}