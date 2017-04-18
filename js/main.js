$(document).ready(function() {

  $('.date').datepicker();

  $('.location').on('change', locationValidation);
  $('.date').on('change', dateValidation);
  $('.hour').on('change', hourValidation);
  $('#submit').on('click', checkAndSubmit);

  function locationValidation (){
    var depLoc = $('.location option:selected')[0];
    var arrLoc = $('.location option:selected')[1];
    if ($(depLoc).text() == $(arrLoc).text()) {
      $('.location').css('background-color', '#fba');
      $('#location-error').text('Cannot select the same location!');
    }
    else {
      $('.location').css('background-color', 'white');
      $('#location-error').empty();
    }
  }

  function dateValidation (){
    var departureDate = $('#departure-date').val();
    var arrivalDate = $('#arrival-date').val();
    if (departureDate > arrivalDate && arrivalDate != 0) {
      $('.date').css('background-color', '#fba');
      $('#date-error').text('Arrival date before departure!');
    }
    else {
      $('.date').css('background-color', 'white');
      $('#date-error').empty();
    }
  }

  function hourValidation (){
    var targetHour = $(this).attr('id');
    var isValid = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/.test($(this).val());
    if (isValid == true){
      $(this).css('background-color', 'white');
      if ($('#departure-hour').css('background-color') == $('#arrival-hour').css('background-color')){
        $('#hour-error').empty();
      }
    }
    else {
      $(this).css('background-color', '#fba');
      $('#hour-error').text('Incorrect hour format!');
    }
  }

  function checkAndSubmit (){
    var depLoc = $('#departure-location option:selected');
    var depDate = $('#departure-date');
    var depHour = $('#departure-hour');
    var arrLoc = $('#arrival-location option:selected');
    var arrDate = $('#arrival-date');
    var arrHour = $('#arrival-hour');

    function completeCheck(){
      if (
        $(depLoc).text() == '' ||
        $(depDate).val() == '' ||
        $(depHour).val() == '' ||
        $(arrLoc).text() == '' ||
        $(arrDate).val() == '' ||
        $(arrHour).val() == ''
      ){
        $('#general-error').text('All fields are required!');
        return false;
      }
      else {
        $('#general-error').empty();
        return true;
      }
    }

    if ($('#location-error').is(':empty') && $('#date-error').is(':empty') && $('#hour-error').is(':empty') && completeCheck()){
      $('#table-data > tbody:last-child').append(
        '<tr>'
        +'<td>'+$(depLoc).text()+'</td>'
        +'<td>'+$(depDate).val()+'</td>'
        +'<td>'+$(depHour).val()+'</td>'
        +'<td>'+$(arrLoc).text()+'</td>'
        +'<td>'+$(arrDate).val()+'</td>'
        +'<td>'+$(arrHour).val()+'</td>'
        +'</tr>'
      );
        $('#departure-location').val('');
        $(depDate).val('');
        $(depHour).val('');
        $('#arrival-location').val('');
        $(arrDate).val('');
        $(arrHour).val('');
    }
  }




});
