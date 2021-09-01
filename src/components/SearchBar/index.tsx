import { useCallback } from 'react';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import useForm from '../../hooks/useForm';
import { api } from '../../services/api';

import * as S from './styles';

interface SearchBarProps {
    setUser: Dispatch<SetStateAction<GitUser>>
    setRepos: Dispatch<SetStateAction<Repository[]>>
    setStarred: Dispatch<SetStateAction<Starred[]>>
}


export function SearchBar ({ setUser, setRepos, setStarred }: SearchBarProps) {
    const { form, onChange } = useForm({ search:'' });
    const { search } = form;

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        onChange(name, value);
    }, [onChange])

    const getUser = useCallback(async () => {
        try {
            const result = await api.get(search)
            setUser(result.data)
        } catch(err) {
            alert("Usuário não encontrado")
            console.log(err)
        }
    }, [search, setUser])

    const searchUser = useCallback((e: FormEvent) => {
        e.preventDefault()
        getUser()
        setRepos([])
        setStarred([])
    }, [getUser, setRepos, setStarred])

    return (
        <div>
            <S.Form onSubmit={searchUser}>
                <input
                    value={search}
                    name="search"
                    onChange={handleInputChange}
                    placeholder="Buscar usuário"
                />
                <button type="submit">Pesquisar</button>
            </S.Form>
        </div>
    )
}