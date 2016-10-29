Polymer({
  is: 'ruphin-projects-page',
  properties: {
    visible: {
      type: Boolean
    },
  },
  ready: function() {
    this.$.backButton.onclick = (event) => {
      event.stopPropagation();
      history.back();
    }
  }
});
