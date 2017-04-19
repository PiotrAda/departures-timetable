$(document).ready(function(){

  $('#csv-import').on('click', function(){
    $.ajax({
      url: 'data/table.csv',
      dataType: 'text',
    }).done(successFunction);
  });

  function successFunction (data){
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table id="table-data">';

    for (var singleRow = 0 ; singleRow < allRows.length-1 ; singleRow++){
      if (singleRow === 0){
        table += '<thead>';
        table += '<tr>';
      } else {
        table += '<tr>';
      }
      var rowCells = allRows[singleRow].split(',');
      for (var rowCell = 0 ; rowCell < rowCells.length ; rowCell++){
        if (singleRow === 0){
          table += '<th>';
          table += rowCells[rowCell];
          table += '</th>';
        } else {
          table += '<td>';
          table += rowCells[rowCell];
          table += '</td>';
        }
      }
      if (singleRow === 0){
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
      } else {
        table += '</tr>';
      }
    }
    table += '</tbody>';
    table += '</table>';
    console.log(table);

    $('#table-data').replaceWith(table);
  };

});
