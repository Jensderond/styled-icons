const fg = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')

module.exports = async () => {
  const baseDir = path.dirname(require.resolve('open-iconic/package.json'))
  const sourceFiles = await fg(path.join(baseDir, 'svg/*.svg'))

  return sourceFiles.map(filename => {
    const match = filename.match(/([^\/]+)\.svg$/)
    return {
      originalName: match[1],
      source: fs.readFileSync(filename).toString(),
      pack: 'open-iconic',
      width: '20',
      height: '20',
    }
  })
}
