var express = require("express")

var app = express()

app.use(express.json());

const PORT = 3000;
const tab = []
let id = 0

app.post("/", function (req, res) {
    let used = 0
    const date = new Date(Date.now()).toString().split(" ", 5).join(" ")
    const data = req.body
    for (let x=0;x<tab.length;x++){
        if (data.login == tab[x].login){
            used++
            res.header('Access-Control-Allow-Origin','*')
            res.send(JSON.stringify('error'))
        }}
        if (used == 0){
            tab.push({
                date: date,
                id: id,
                login: data.login,
                pass: data.pass
            })
            id++
            res.header('Access-Control-Allow-Origin','*')
            res.send(JSON.stringify(tab))
        }
})
app.get("/getUsers", function (req, res) {
    res.header('Access-Control-Allow-Origin','*')
    res.send(JSON.stringify(tab))
})
app.post("/delete", function (req, res) {
    const id = req.body.item.id
    const index = tab.findIndex((elem) => elem.id == id)
    tab.splice(index,1)
    res.header('Access-Control-Allow-Origin','*')
    res.send(JSON.stringify(tab))
})
app.post("/details", function (req, res) {

    res.header('Access-Control-Allow-Origin','*')
    res.send(JSON.stringify(tab))
})

app.options("*", function (req, res) {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Content-type')
    res.send()
})


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})