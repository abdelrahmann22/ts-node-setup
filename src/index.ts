import * as http from 'http'


const server = http.createServer((req, res) => {
	res.write(`
		<html>
			<head>
				<title>Node.js App + TS</title>
			</head>
			<body>
				<h1>Hello World!</h1>
			</body>
		</html>
		`);
	res.end();
})

const PORT: number = 5000;

server.listen(PORT, ()=>{
	console.log('Server Running!!!')
})
