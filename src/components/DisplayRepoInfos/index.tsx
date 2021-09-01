import * as S from './styles';

interface DisplayRepoInfosProps {
    repos: Repository[];
    starred: Starred[];
}

export function DisplayRepoInfos ({ repos, starred }: DisplayRepoInfosProps) {
    return (
        <S.Wrapper>
            <S.Container>
            {repos.length > 0 && <h3>Repositories</h3>}
            {repos && repos.map(rep => {
                return (
                    <p key={rep.id}>/{rep.name}</p>
                )
            })}
            </S.Container>
            <S.Container>
            {starred.length > 0 && <h3>Starred</h3>}
            {starred && starred.map(rep => {
                return (
                    <p key={rep.id}>/{rep.full_name}</p>
                )
            })}
            </S.Container>
        </S.Wrapper>
    )
}