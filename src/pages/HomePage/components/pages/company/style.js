import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-height: 88vh;

    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    box-sizing: border-box;
`;

export const CoverContainer = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    overflow-y: hidden;
    
    background-color: #f4f4f4;
    position: relative;
    margin-bottom: 5px;
`;

export const Cover = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
`;

export const ProfilePicContainer = styled.div`
    position: absolute;
`;

export const ProfilePic = styled.img`
    width: 140px;
    height: 140px;
    top: 130px;
    position: absolute;
    left: calc(100%/2 - 90px);
    border-radius: 50%;
    border: 8px solid #f4f4f4;
    background-color: #fff;
    z-index: 1;
    object-fit: cover;
`;

export const EditBtn = styled.button`    
    position: absolute;

    border: none;
    background: transparent;
    
    cursor: pointer;
    
    &:hover {
        background-color: #ddd;
        border-radius: 4px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 70%;
    justify-content: flex-end;
    position: relative;
    padding: 10px 5px;
`;

export const CompanyName = styled.h1`
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    text-align: left;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    max-width: 300px;
`;

export const InfoContent = styled.div`
    width: 100%;
    display: flex;
    gap: 100px;
`;

export const AboutContainer = styled.div`
    width: calc(100%/2 - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const CompanyIMG = styled.img`
    width: calc(100%/2 -10px);
    height: 50%;
    border-radius: 32px;
    margin-bottom: 30px;
`;
export const About = styled.p`
    max-width: 350px;
    font: 500 14px 'Poppins', sans-serif;
    line-height: 18px;
    color: #000;
`;

export const LeftContainer = styled(AboutContainer)`
    gap: 10px;
`;