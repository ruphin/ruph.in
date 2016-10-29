Polymer({
  is: 'ruphin-skills-page',
  properties: {
    visible: {
      type: Boolean
    },
    skillData: {
      type: Object
    },
    skills: {
      type: Array,
      computed: '_skills(skillData)'
    },
    personData: {
      type: Object
    },
    unlocks: {
      type: Object,
      computed: '_unlocks(personData)'
    }
  },
  ready: function() {
    this.$.backButton.onclick = (event) => {
      event.stopPropagation();
      history.back();
    }
  },

  _skills: function(skillData) {
    return Object.keys(skillData).map(key => skillData[key])
  },

  _unlocks: function(personData) {
    return personData.unlocks
  }
});
