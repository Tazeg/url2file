const { Download } = require('./index')
const crypto = require('crypto')
const fs = require('fs')

const localFile = 'rocket.png'

afterAll(() => {
  fs.unlinkSync(localFile)    
});

test('downlad an image to a file', done => {
  let gPrct = 0
  let mydl = new Download('https://github.githubassets.com/images/icons/emoji/unicode/1f680.png', localFile)
  mydl.on('error', (err) => {
    console.error(err)
  })
  mydl.on('progress', (percent) => {
    console.log(percent + '%')
    gPrct = percent
  })
  mydl.on('end', () => {
    console.log('ended')
    expect(gPrct).toBe(100)
    let md5sum = crypto.createHash('md5')
    let s = fs.ReadStream(localFile)
    s.on('data', function (d) {
      md5sum.update(d)
    })
    s.on('end', function () {
      var d = md5sum.digest('hex')
      expect(d).toBe('5a5f436de3f2cb112bef78a54d0eccc3')
      done()
    })
  })
})
