import { useState } from 'react'
import { login, logout } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const [newUsername, setNewUsername] = useState<string>('')

    const dispatch = useDispatch()
    const username = useSelector((state: any) => state.user.value.username)
    const launchLogin = () => {
        dispatch(login({ username: newUsername }))
        setNewUsername('')
    }

    return (
        <div>
            {username}
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewUsername(e.target.value);
                }}
                value={newUsername}
            />
            <button onClick={launchLogin}>
                Submit Login
            </button>
            <button onClick={() => dispatch(logout())}> Logout </button>
        </div>
    )
}
