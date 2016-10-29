let avatars = ['0x0250000000000B44', '0x02500000000008E8', '0x02500000000005CD', '0x02500000000009E4', '0x02500000000009DF', '0x0250000000000B42', '0x02500000000002F7', '0x02500000000008C5']
let avatar = avatars[Math.floor(Math.random() * avatars.length)];

Polymer({
  is: 'ruphin-person-data',
  properties: {
    person: {
      type: Object,
      notify: true,
      readOnly: true,
      value: {
        name: 'Ruphin',
        level: '76',
        prestige: 1,
        avatar: avatar,
        unlocks: {
          ana: 9,
          bastion: 10,
          dva: 5,
          genji: 9,
          hanzo: 9,
          junkrat: 8,
          lucio: 6,
          mccree: 8,
          mei: 6,
          mercy: 8,
          pharah: 8,
          reaper: 9,
          reinhardt: 8,
          roadhog: 7,
          soldier76: 7,
          symmetra: 9,
          torbjorn: 7,
          tracer: 8,
          widowmaker: 10,
          winston: 9,
          zarya: 6,
          zenyatta: 8,
          sombra: 0,
        }
      }
    }
  }
});
