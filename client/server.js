const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8080

const setupServer = () => {
  const app = express()

  app.use(
    express.static(path.resolve(__dirname, 'build'))
  )

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'build', 'index.html')
    )
  })

  return app
}

(async () => {
  try {
    const app = setupServer()

    console.log(`Starting express`)

    app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
  } catch (err) {
    console.error(`Error starting app: `, err)
    process.exit(-1)
  }
})()
