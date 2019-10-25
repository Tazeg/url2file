const fs = require('fs')
const https = require('https')
const EventEmitter = require('events')

class Download extends EventEmitter {
  constructor (url, outFile, options = {}) {
    super()
    let len = 0
    let boolErr = false
    let file = fs.createWriteStream(outFile)
    file.on('error', (err) => {
      this.emit('error', 'Ecriture impossible ' + err)
      file.end()
      boolErr = true
    })
    https.get(url, options, (response) => {
      response.on('data', (chunk) => {
        if (boolErr) { return }
        file.write(chunk)
        len += chunk.length
        this.emit('progress', Math.ceil((len / response.headers['content-length']) * 100))
      })
      response.on('error', (e) => {
        this.emit('error', e)
      })
      response.on('end', () => {
        file.close()
        this.emit('end')
      })
    })
  }
}

exports.Download = Download
