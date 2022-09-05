import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'



export default function Dashboard() {
    const nav = useNavigate()
    const [library, setLibrary] = useState('');
    const [tempLibrary, setTempLibrary] = useState();

    const populateLibrary = async () => {
        const req = await fetch('http://localhost:3001/api/library', {
            headers: {
                'x-access-token': localStorage.getItem('token')

            },
        })
        const data = await req.json()
        console.log(data)
        if(data.status === 'ok'){
            setLibrary(data.library)
        }else{
            alert(data.error)
        }

    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt_decode(token)
            if (!user) {
                localStorage.removeItem('token')
                nav('/')

            } else {
                populateLibrary()
            }
        }
    }, [])

    async function updateLibrary(event){
        event.preventDefault()

        const req = await fetch('http://localhost:3001/api/library', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')

            },
            body:JSON.stringify({
                library:tempLibrary,
            }),

            
        })
        const data = await req.json()
        console.log(data)
        if(data.status === 'ok'){
            setLibrary(tempLibrary)
            setTempLibrary('')
        }else{
            alert(data.error)
        }

    }


    return (
        <div>
            <h1>Your quote: {library || 'No quote found'} </h1>
            <form onSubmit={updateLibrary}>
                <input type='text' placeholder='library'
                value={tempLibrary}
                onChange={e => setTempLibrary(e.target.value)}/>
               
               <input type='submit' value='Update'/>
            </form>
        </div>
    )
}
