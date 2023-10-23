import React from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
    let noteId = useParams().id
  return (
    <div>
        <h1>this is a single note page</h1>
    </div>
  )
}

export default NotePage