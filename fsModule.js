var http = require('http');
var fs = require('fs');

// reading html file
// http.createServer(function (req, res) {
//   fs.readFile('file.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(3000);

// create new file
// fs.appendFile('file.txt', 'Hello', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

  // open file with write or read flag
//   fs.open('file1.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// writeFile - replace content of whole file
// fs.writeFile('file.txt', 'Replaced content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// appendFile - append content at end
// fs.appendFile('file.txt', ' Added text', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
//   });

  // delete file

//   fs.unlink('file1.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

    // rename file
fs.rename('file.txt', 'renamedfile.txt', function (err) {
     if (err) throw err;
     console.log('File Renamed!');
 });