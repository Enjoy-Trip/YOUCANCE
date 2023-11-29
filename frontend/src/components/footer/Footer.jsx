import { Link } from 'react-router-dom'
import * as Styled from './style'

export default function Footer() {
    return (
        <Styled.Footer>
            <h2>Footer</h2>
            <ul>
                <Styled.ListItem>
                    <p>Contact us</p>
                    <Link to="https://github.com/Enjoy-Trip" target="_blank">
                        <i className="fab fa-github"></i>
                    </Link>
                </Styled.ListItem>
            </ul>
        </Styled.Footer>
    )
}