import  styled from 'styled-components';

type InfoBoxProps = {
    mode: 'warning' | 'hint';
};

export const InfoBoxCss = styled.aside<InfoBoxProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    width: 300px;
    padding: 16px;
    border-radius: 8px;
    background-color: ${({mode}) => (mode === 'hint') ? '#e1f5fe' : '#ffecb3'};
    color: ${({mode}) => (mode === 'hint') ?  '#0277bd' : '#ff9800'};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    margin-top: 50px;
`;