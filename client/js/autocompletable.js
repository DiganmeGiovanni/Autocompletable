
$(document).ready(function () {

  var autocompletableField = $('#db-autocompletable-input').autocomplete({
    serviceUrl: 'http://localhost:3000/search/country',
    onSelect: function (suggestion) {
      var countryCode = suggestion.data.code
      var countryName = suggestion.data.name

      addCountry(countryCode, countryName)
    },
    onSearchComplete: function (query, suggestions) {
      if (suggestions.length == 1) {
        var suggestion = suggestions[0]
        addCountry(suggestion.data.code, suggestion.data.name)
      }
    },
    preventBadQueries: false
  });

  function addCountry(countryCode, countryName) {
    $row = $('<tr>', {})
    $row.append('<td>' + countryCode + '</td>')
    $row.append('<td>' + countryName + '</td>')
    $('#countries-table').append($row)

    $('#db-autocompletable-input').val('')
  }
})