let locations = {
  newyork: {
    name: 'New York',
    date: '14-17 Jun 2013'
  }
}

Polymer({
  is: 'ruphin-location-data',
  properties: {
    locations: {
      notify: true,
      readOnly: true,
      value: locations,
    }
  }
});
