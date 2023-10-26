import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'


const NotePage = ({history}) => {
    let noteId = useParams().id

    // let note = notes.find(note => note.id === Number(noteId))
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`http://localhost:8000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date()})
        })
    }

    let handleSubmit = () => {
        updateNote()
        history.push('/')
        // TODO: fix this
        // Cannot read properties of undefined (reading 'push')
    }

  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to="/" >
                    <ArrowLeft onClick={handleSubmit} />
                </Link>
            </h3>
        </div>
        <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}>
        </textarea>
    </div>
  )
}

export default NotePage