let locations = {
  newyork: {
    name: 'New York',
    date: '4 may 1998' //test
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
