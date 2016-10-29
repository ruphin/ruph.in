Polymer({
  is: 'ruphin-work-page',
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
