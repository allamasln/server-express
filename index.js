const express = require('express')

console.log(express)

// const http = require('http')

// const server = http.createServer((req, res) => {
// 	console.log(req.url)

// 	if (req.url === '/') {
// 		res.statusCode = 200
// 		res.setHeader('Content-Type', 'text/html')

// 		res.end('<h1>HOME</h1>')
// 	} else if (req.url === '/data') {
// 		res.statusCode = 200
// 		res.setHeader('Content-Type', 'application/json')

// 		res.end('{"message": "hello world"}')
// 	} else {
// 		res.statusCode = 404
// 		res.setHeader('Content-Type', 'text/html; charset=utf-8')

// 		res.end('<h1>404: La página no existe.</h1>')
// 	}
// })

// server.listen(4000, () => console.log('server on...'))
