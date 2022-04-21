const express = require('express')

const app = express()

const appName = 'todolist'

const outputPath = `${__dirname}/dist/${appName}`

app.use(express.static(outputPath))

app.get('*/', (req, res) => {
  res.sendFile(`${outputPath}/index.html`)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env)
})
