const fs = require('fs')
const path = require('path')
const express = require('express')
const chalk = require('chalk')
const app = express()
app.use(express.static(path.resolve(__dirname, './docs')))
app.get('*', (req, res) => {
  const html = fs.readFileSync(app.express.resolve(__dirname, './docs/index.html'), 'utf-8')
  res.send(html)
})

app.listen(2019, res => {
  console.log(chalk.yellow('端口2019开启了服务'))
})
