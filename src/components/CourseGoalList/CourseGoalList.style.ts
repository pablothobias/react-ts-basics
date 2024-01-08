import styled from "styled-components";

export const GoalsListCss = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 2rem;
list-style: none;
margin: 0;
padding: 0;
overflow: auto;
max-height: 40vh;
`;