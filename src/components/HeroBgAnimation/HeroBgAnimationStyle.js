import styled from 'styled-components';

export const Div = styled.div`
    width: 600px;
    height: 500px;
    opacity: ${({ isDarkMode }) => (isDarkMode ? '1' : '0.6')};
`