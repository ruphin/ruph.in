let backgroundSets = {
  newyork: {
    goffert: {
      'main': {
        preload: ['to_projects', 'to_skills']
      },
      'to_projects': {
        transition: 'projects',
        preload: ['projects_to_main']
      },
      'projects': {
        preload: ['projects_to_main']
      },
      'projects_to_main': {
        transition: 'main',
      },
      'to_work': {
        mirror: 'to_projects',
      },
      'work': {
        mirror: "projects"
      },
      'work_to_main': {
        mirror: 'projects_to_main',
      },
      'projects_to_main': {
        transition: 'main',
      },
      'to_skills': {
        transition: 'skills',
        preload: ['skills_to_main']
      },
      'skills': {
        preload: ['skills_to_main']
      },
      'skills_to_main': {
        transition: 'main',
      },
    }
  }
}

Polymer({
  is: 'ruphin-background-data',
  properties: {
    backgrounds: {
      type: Object,
      notify: true,
      readOnly: true,
      value: {},
    },
    backgroundSelection: {
      type: Object,
      notify: true,
      readOnly: true,
    },
    select: {
      type: String,
      observer: '_selectChanged'
    }
  },

  _selectChanged: function (value) {
    console.log("Select changed: ", value);
      this._selectBackgrounds();
  },

  ready: function () {
    this._selectBackgrounds();
  },

  _selectBackgrounds() {
    // index all possible backgroundSets
    let index = this._index(backgroundSets);

    // If we want to select a specific backgroundSet
    if (this.select) {
      // Treat `this.select` as a literal string to match
      let selectRegex = new RegExp(this.select.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      // Limit our options to backgroundSets that match our selection
      index = index.filter((i) => { return selectRegex.test(i); });
    }

    // Choose a random background from the selected options
    let backgroundLocation = index[Math.floor(Math.random() * index.length)];

    // We weren't able to select anything
    if (!backgroundLocation) {
      console.warn("Could not select a backgroundSet");
      return;
    }

    // TODO: This breaks if you set it again by changing select
    // Set the backgroundSelection
    this._setBackgroundSelection(backgroundLocation.split('/').slice(0, -1));

    // Get the data object from the backgroundSets
    let backgroundData = this.backgroundSelection.reduce((object, key) => { return object[key]; }, backgroundSets);

    // Ok, we have selected backgroundData. Now we need to dynamically attach
    // video source locations, if those have not been added yet
    for (let background in backgroundData) {
      // If the background needs to mirror another one,
      // we don't have to do anything
      if (!backgroundData[background].mirror) {
        // Use the given sources if they are defined, otherwise infer the source
        let backgroundVideo = backgroundData[background].video || `${backgroundLocation}${background}.mp4`;
        let backgroundImage = backgroundData[background].image || `${backgroundLocation}${background}.jpg`;
        backgroundData[background].video = this.resolveUrl(backgroundVideo);
        backgroundData[background].image = this.resolveUrl(backgroundImage);
      }
    }

    this._setBackgrounds(backgroundData);
  },

  _index: function (tree) {
    let result = [];
    for (let property in tree) {
      if (tree[property].transition || tree[property].preload) {
        return [''];
      }
      Array.prototype.push.apply(result, this._index(tree[property]).map((item) => { return property + '/' + item; }));
    }
    return result;
  }
});
