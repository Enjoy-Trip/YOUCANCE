import { Link } from 'react-router-dom'
import * as Styled from './style'

export default function BoardListCard({ props: { data, linksRef, index } }) {
    return (
        <Styled.StyledListItem>
            <Link to="" ref={(element) => (linksRef.current[index] = element)} data-key={data.boardNo}>
                <Styled.StyledArticle title={data.boardTitle} color={'blue'}>
                    <header>
                        <h3>게시글 요약</h3>
                    </header>
                    <img src={data.boardImages[0]} alt="" />
                </Styled.StyledArticle>
            </Link>
        </Styled.StyledListItem>
    )
}