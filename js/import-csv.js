$(document).ready(function(){

  $('#csv-import').on('click', function(){
    $.ajax({
      url: 'data/table.csv',
      dataType: 'text',
    }).done(successFunction);
  });

  function successFunction (){
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table id="table-data">';

    for (var singleRow = 0 ; singleRow < allRows.length ; singleRow++){
      if (singleRow == 0){
        table += '<thead>';
        table += '<tr>';
      } else {
        table += '<tr>';
      }
      var rowCells = allRows[singleRow].split(',');
      for (var rowCell = 0 ; rowCell < rowCells.length ; rowCell++){
        if (singleRow == 0){
          table += '<th>';
          table += rowCells;
          table += '</th>';
        } else {
          table += '<td>';
          table += rowCells;
          table += '</td>';
        }
      }
      if (singleRow == 0){
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
      } else {
        table += '</tr>';
      }
    }
    table += '</tbody>';
    table += '</table>';
    $('table-data').replaceWith(table);
  };

});
