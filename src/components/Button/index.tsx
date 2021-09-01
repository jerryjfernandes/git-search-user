
import { useCallback } from 'react'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { api } from '../../services/api'

interface ButtonProps {
    children: ReactNode;
    username: string;
    endpoint: string;
    setInfo: Dispatch<SetStateAction<Repository[]>> | Dispatch<SetStateAction<Starred[]>> 
}

export function Button ({ children, username, endpoint, setInfo }: ButtonProps) {

    const getInfo = useCallback(async () => {
        try {
            const result = await api.get(`${username}/${endpoint}`)
            setInfo(result.data)
        } catch(err) {
            console.log(err)
        }
    }, [setInfo, endpoint, username])

    return (
        <div>
            <button onClick={getInfo}>{children}</button>
        </div>
    )
}