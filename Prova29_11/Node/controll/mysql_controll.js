const mysql = require('mysql')
const con = mysql.createConnection({
    'user':'root',
    'database':'contabilidade',
    'host':'localhost'
})

module.exports = {
    con
}