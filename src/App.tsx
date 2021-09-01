import { useState } from 'react';
import { DisplayUser } from './components/DisplayUser';
import { SearchBar } from './components/SearchBar';
import { Button } from './components/Button';
import { DisplayRepoInfos } from './components/DisplayRepoInfos';

import * as S from './styles'
import { GlobalStyle } from './styles/global';

const userFake = {
    avatar_url: 'https://www.techcentral.ie/wp-content/uploads/2019/11/GitHub-Mark.png', 
    login: '---', 
    name: '---'
}

export function App () {
    const [ user, setUser ] = useState<GitUser>(userFake)
    const [ repos, setRepos ] = useState<Repository[]>([])
    const [ starred, setStarred ] = useState<Starred[]>([])

    return (
        <S.Container>
            <S.Title>Git Search User</S.Title>
            <DisplayUser user={user} />
            <SearchBar setUser={setUser} setRepos={setRepos} setStarred={setStarred} />
            <Button username={user.login} endpoint="repos" setInfo={setRepos}>Repos</Button>
            <Button username={user.login} endpoint="starred" setInfo={setStarred}>Starred</Button>
            <DisplayRepoInfos repos={repos} starred={starred} />
            <GlobalStyle />
        </S.Container>
    )
}