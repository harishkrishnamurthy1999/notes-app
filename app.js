
//const chalk = require('chalk')
const yargs = require('yargs')
const notes =require('./notes')

yargs.version('1.1.0')

//Adding 
yargs.command ( {
    command:'add',
    describe:'add a new note',
    builder: {
        title : {
            describe :'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//Removing
yargs.command ({
    command : 'remove',
    describe:'remove a note',
    builder: {
        title : {
            describe :'Note Title',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv) {
        notes.removenote(argv.title)
    }
})

//List

yargs.command ( {
    command:'list',
    describe:'list a note',
    handler(argv) {
        notes.listNotes()
    }
})

//Read 
yargs.command({
    command:'read',
    describe:'reading a note',
    builder: {
        title :{
            describe:'the body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse();
// console.log(yargs.argv)




