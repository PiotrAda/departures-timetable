$(document).ready(function () {

  function download_csv(csv, filename) {
      var csvFile = new Blob([csv], {type: "text/csv"});
      var downloadLink = document.createElement("a");

      downloadLink.download = filename;
      downloadLink.href = window.URL.createObjectURL(csvFile);
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
  }

  function exportCsv(html, filename) {
  	var csv = [];
  	var rows = $('#table-data').find('tr');

    for (var i = 0; i < rows.length; i++) {
    	var row = [];
      var cols = rows[i].querySelectorAll("td, th");

      for (var j = 0; j < cols.length; j++){
        row.push(cols[j].innerText);
      }
  		csv.push(row.join(","));
  	}

    download_csv(csv.join("\n"), filename);
  }

  $('#csv-export').on('click', function () {
    var tableData = $('#table-data').outerHTML;
    exportCsv(tableData, "table.csv");
  });

});
