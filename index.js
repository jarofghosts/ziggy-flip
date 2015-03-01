var flipText = require('flip-text')

var map = {
    '!tableflip': flipTable
  , '!flip': flipText
  , '!rageflip': rageFlip
}

var faces = [
    '(╯°□°)╯'
  , '(ノ ゜Д゜)ノ'
  , '(ﾉಥ益ಥ）ﾉ'
  , '(╯\'□\')╯'
  , 'ʕノ•ᴥ•ʔノ'
]

flip.help = [
    '!flip <text> - flip <text>'
  , '!rageflip <text> - flip <text> with passion'
  , '!tableflip - flip a table'
].join('\n')

module.exports = flip

function flip(ziggy) {
  ziggy.on('message', checkMessage)

  function checkMessage(user, channel, text) {
    var bits = text.split(/\s+/)
    var lookup = map[bits[0]]

    if(!lookup) return

    ziggy.say(channel, lookup(bits[1]))
  }
}

function flipTable() {
  return rageFace() + ' ︵ ┻━┻'
}

function rageFlip(text) {
  return rageFace() + ' ︵ ' + flipText(text)
}

function rageFace() {
  return faces[Math.floor(Math.random() * faces.length)]
}
