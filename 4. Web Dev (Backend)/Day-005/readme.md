### Short Notes - NodeJs
---

Import File System(fs) module as 'fs' -  
var fs = require('fs')

Make Folder - 
fs.mkdirSync('folder_name')

Input File -
fs.writeFileSync('folder_name/file_name.txt', 'content')

Append content - 
fs.appendFileSync('folder_name/file_name.txt', 'additional content')

Read File as HexaDecimal - 
fs.readFileSync('folder_name/file_name.txt')

Read File in English-
fs.readFileSync('folder_name/file_name.txt', 'utf-8')

Store contents- 
var data = fs.readFileSync('folder_name/file_name.txt')

Rename file - 
fs.renameSync('folder_name/file_name.txt', 'folder_name/new_name.txt')

Delete file - 
fs.unlinkSync('folder_name/new_name.txt')

Delete folder
fs.rmdirSync('folder_name')


Additional Stuff -

There is no such command as 'fs.createFileSync'. Just use fs.writeFileSync('../file.txt', '') for the same.

One can end each command with a semicolon(;) but I personally don't like em!