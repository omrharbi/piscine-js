import http from "http";
import { readFile } from 'node:fs/promises'
let request = ""
let server = http.createServer(async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    try {
        request = "guests" + req.url + ".json";
        let fil = await readFile(request, 'utf8')
        res.end(fil)
    } catch (error) {
        if (error.code === "ENOENT") {
            res.statusCode = 404
            res.end(JSON.stringify({
                error: 'guest not found'
            }))
        } else {
            res.statusCode = 500
            res.end(JSON.stringify({
                error: 'server failed'
            }));
        }

    }   

})

server.listen(5000, function (err) {
    if (err) {
        console.log("error in server", err)
    } else {
        console.log("server listner localhost:5000");
    }
})
 