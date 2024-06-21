const mineflayer = require('mineflayer');

console.log('Starting...')

function createBot () {
    const bot = mineflayer.createBot({
    host: "minecraftprolarismp.aternos.me",
    port: "18559",
    username: "Bedwarsd32",
    version: false
    })
    bot.on('login', function() {
      bot.chat('/reginster bot123 bot123')
      bot.chat('/login bot123')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      switch (message) {
        case ';start':
          bot.chat('24 ATERNOS > Bot started! - Made By Fortcote')
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.chat('24 ATERNOS > Bot stoped! - Made By Fortcote')
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('Bot > Spawned')
        })
        bot.on('death', function() {
          bot.chat('Bot > I died, respawn')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}
createBot()
