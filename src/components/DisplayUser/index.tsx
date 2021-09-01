import * as S from './styles';

interface DisplayUserProps {
    user: User;
}

export function DisplayUser ({user}: DisplayUserProps) {
    return (
        <S.Wrapper>
            <S.Avatar src={user.avatar_url} />
            <S.Infos>
                <p>Usuário: {user.login}</p>
                <p>Nome: {user.name}</p>
                {user.html_url && (
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">Ver Perfil</a>
                )}
            </S.Infos>
        </S.Wrapper>
    )
}