const app = require('lime')(__dirname)
const port = process.env.PORT || 0
const chalk = require('chalk')

if (require.main === module) {
    const server = app.listen(port, 'localhost', () => {
        console.log()
        console.log(chalk.green(`Congratulations! LIME is listening at http://${server.address().address}:${server.address().port}`))
    })
}

module.exports = app