import styled from "styled-components";

export const Container = styled.div`
    width: 450px;
    height: 120px;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    background: ${({ color }) => color ? color : '#4EA3D9'};
    justify-content: flex-start;
    align-items: center;
    padding: 5px 30px;
`;

export const Text = styled.p`
    font: 500 13px 'Poppins', sans-serif;
    margin-bottom: 5px;
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
`;