function tableBuilder(selector) {
   return {
       createTable: function(columnNames){
          let table = $('<table>');
          let tableHeader = $('<tr>');
          tableHeader.appendTo(table);
          for(let headName of columnNames){
              let th = S('<th>').text(headName);
              tableHeader.append(th);
          }
          tableHeader.append($('<th>Action</th>'));

       },
       fillData: function(dataRows){
           let row = $('<tr>');
            for(let dataRow of dataRows){

                for(let cell of dataRow){
                   row.append($('<td>').text(cell));
                }

                let button = $('<button>Delete</button>');
                button.onclick(function (){
                    $(this).parent().parent().remove();

                });
                row.append($('<td>').append(button));
                table.append(row);
                row.appendTo($(selector + ' table'));
            }
       }
   }
}

