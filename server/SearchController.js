

var countries = [
  {
    name: "Afghanistan",
    code: 1501
  },
  {
    name: "Albania",
    code: 1502
  },
  {
    name: "Algeria",
    code: 1503
  },
  {
    name: "Andorra",
    code: 1504
  },
  {
    name: "Angola",
    code: 1505
  },
  {
    name: "Antigua and Barbuda",
    code: 1506
  },
  {
    name: "Argentina",
    code: 1507
  },
  {
    name: "Armenia",
    code: 1508
  },
  {
    name: "Australia",
    code: 1509
  },
  {
    name: "Austria",
    code: 1510
  },
  {
    name: "Azerbaijan",
    code: 1511
  },
  {
    name: "Bahamas",
    code: 1512
  },
  {
    name: "Bahrain",
    code: 1513
  },
  {
    name: "Bangladesh",
    code: 1514
  },
  {
    name: "Barbados",
    code: 1515
  }
]

var SearchController = {

  searchCountries: function (req, res) {
    var searchTerm = req.query.query
    var results = []

    // 
    // Do countries search
    for (var i = 0; i < countries.length; i++) {
      console.log(countries[i].code + ' vs ' + searchTerm)
      console.log(countries[i].name + ' vs ' + searchTerm + ' -> ' + countries[i].name.indexOf(searchTerm))
      if (countries[i].code === +searchTerm || countries[i].name.indexOf(searchTerm) > -1) {
        results.push({
          value: countries[i].name,
          data: countries[i]
        })
      }
    }


    var response = {
      query: searchTerm,
      suggestions: results
    }

    console.log('Sending response: ')
    console.log(response)
    res.json(response)
  }
}

module.exports = SearchController