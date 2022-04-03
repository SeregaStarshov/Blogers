import styled from 'styled-components';

type CustomListProps = {};

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 956px;
    margin-left: auto;
    padding: 20px;
    position: relative;
`;

const CustomList = styled.ul<CustomListProps>`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export { CustomList, ListContainer };
