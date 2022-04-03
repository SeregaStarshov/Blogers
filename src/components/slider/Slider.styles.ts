import styled from 'styled-components';

const CustomSlider = styled.div`
    width: 80%;
    justify-content: center;
    margin: 0 auto;
`;

const ContainerArrow = styled.div`
    width: 115px;
    display: flex;
    justify-content: space-between;
    margin: auto;
`;

const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 40px;
    flex-wrap: wrap;
    gap: 14px;
`;

export { CustomSlider, ContainerArrow, ContainerCards };
