Polymer({
  is: 'ruphin-skills-data',
  properties: {
    skills: {
      type: Object,
      notify: true,
      readOnly: true,
      value: {
        ana: {
          id: 'ana',
          name: 'HTML',
          unlockable: 10,
          color: '#400A44'
        },
        bastion: {
          id: 'bastion',
          name: 'Css',
          unlockable: 10,
          color: '#1D2B14'
        },
        dva: {
          id: 'dva',
          name: 'Svg',
          unlockable: 10,
          color: '#F93080'
        },
        genji: {
          id: 'genji',
          name: 'Polymer',
          unlockable: 10,
          color: '#32F600'
        },
        hanzo: {
          id: 'hanzo',
          name: 'Javascript',
          unlockable: 10,
          color: '#706025',
          scaling: 0.8
        },
        junkrat: {
          id: 'junkrat',
          name: 'Ruby',
          unlockable: 10,
          color: '#F27000'
        },
        lucio: {
          id: 'lucio',
          name: 'Python',
          unlockable: 10,
          color: '#238B02'
        },
        mccree: {
          id: 'mccree',
          name: 'Golang',
          unlockable: 10,
          color: '#640607'
        },
        mei: {
          id: 'mei',
          name: 'Java',
          unlockable: 10,
          color: '#1351E4'
        },
        mercy: {
          id: 'mercy',
          name: 'Bash',
          unlockable: 10,
          color: '#F5E269'
        },
        pharah: {
          id: 'pharah',
          name: 'Linux',
          unlockable: 10,
          color: '#001984'
        },
        reaper: {
          id: 'reaper',
          name: 'Architecture',
          unlockable: 10,
          color: '#1D0002',
          scaling: 0.7
        },
        reinhardt: {
          id: 'reinhardt',
          name: 'Automation',
          unlockable: 10,
          color: '#334142',
          scaling: 0.75
        },
        roadhog: {
          id: 'roadhog',
          name: 'Gulp',
          unlockable: 10,
          color: '#6C2803'
        },
        soldier76: {
          id: 'soldier76',
          name: 'Awk/Sed',
          unlockable: 10,
          color: '#0F132E',
          scaling: 0.95
        },
        symmetra: {
          id: 'symmetra',
          name: 'Docker',
          unlockable: 10,
          color: '#2E7595'
        },
        torbjorn: {
          id: 'torbjorn',
          name: 'Cooking',
          unlockable: 10,
          color: '#79120B'
        },
        tracer: {
          id: 'tracer',
          name: 'Biking',
          unlockable: 10,
          color: '#BA3202'
        },
        widowmaker: {
          id: 'widowmaker',
          name: 'Cat',
          unlockable: 10,
          color: '#410B45'
        },
        winston: {
          id: 'winston',
          name: 'Stoneblade',
          unlockable: 10,
          color: '#334142',
          scaling: 0.8
        },
        zarya: {
          id: 'zarya',
          name: 'Protoss',
          unlockable: 10,
          color: '#EB1C62'
        },
        zenyatta: {
          id: 'zenyatta',
          name: 'Zenyatta',
          unlockable: 10,
          color: '#F8DA1A'
        },
        // sombra: {
        //   id: 'sombra',
        //   name: 'Sombra',
        //   unlockable: 10,
        //   color: '#FFFFFF'
        // },
      }
    }
  }
});
