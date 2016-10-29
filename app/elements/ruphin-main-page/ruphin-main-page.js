Polymer({
  is: 'ruphin-main-page',
  properties: {
    visible: {
      type: Boolean
    },
    skillData: {
      type: Object
    },
    personalData: {
      type: Object
    },
    locationData: {
      type: Object
    },
    backgroundSelection: {
      type: Object
    },
    location: {
      type: String,
      computed: '_location(backgroundSelection, locationData)'
    },
  },

  _location: function (background) {
    let location = background.shift();
    this.date = this.locationData[location].date;
    return this.locationData[location].name;
  },
});
