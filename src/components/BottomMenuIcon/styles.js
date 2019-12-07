import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconsContainer = styled.span`
    padding: 10px;
    display: inline-block;

    svg {
        fill: ${({ theme }) => theme.colors.text};
        opacity: .16;
    }
`

// export const FABOttomMenuIcon = styled(FontAwesomeIcon)`
//     font-size: 20px;
// `