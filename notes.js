const fs = require('fs')
const chalk = require('chalk')

const getnotes = () => {
    return 'YOUR NOTES...'
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicatedData = notes.filter(function (note) {
        return note.title === title
    })

    if(duplicatedData.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveData(notes)
        console.log('Notes added Successfuly')
    }else {
        console.log('Notes Taken');
    }

    
    
}

const removenote = (title) => {
   const notes = loadNotes() 
   const notesToKeep =  notes.filter((note) => note.title !== title )

   if(notes.length > notesToKeep.length) {
       console.log(chalk.green.inverse('Notes removed'))
       saveData(notesToKeep) 
   }else {
       console.log(chalk.red.inverse('notes not removed'))
   }
   
   
}

const listNotes = () => {
    console.log(chalk.yellow.inverse('YOUR NOTES'))
    const notes =loadNotes()
     notes.forEach(note => { 
         console.log(note.title)     
     });
     
}

const readNote = (title) => {
    const notes = loadNotes ()
    notes.forEach((note) => {
        if(note.title === title){
            console.log(title)
        }else{
            console.log('not found')
        }
    })
}


const saveData =  (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('Notes.json',dataJson)
}
const loadNotes =  () => {
    try{
        const dataBuffer = fs.readFileSync('Notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
   
}



module.exports = {
    getnotes : getnotes,
    addNote :addNote,
    removenote:removenote,
    listNotes:listNotes,
    readNote:readNote
}

