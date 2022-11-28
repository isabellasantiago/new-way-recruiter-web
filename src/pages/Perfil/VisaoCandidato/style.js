import styled from 'styled-components';

export const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  max-width: 60%;
  align-items: center;

  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 50px;
`;

export const ProfileInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #FEFEFE;
  border-radius: 8px;

  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 25px;
`;

export const ProfileDescription = styled.div`
  width:310px;
  height:283px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  padding-left:23px;

  h2 {
    font: 600 28px 'Poppins', sans-serif;
    font-style: normal;
    font-size: 28px;
    display: flex;
    align-items: center;
    
    color: #000000;
    text-transform: capitalize;
        
  }
  p {
  font: 500 16px 'Poppins', sans-serif;
   font-style: normal;
   line-height: 24px;
   display: flex;
   align-items: center;
   
   color: #000000;
  }

`;

export const ControlBtn = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: right;
  flex-direction: column;
  width:250px;
  height:283px;
`;

export const IconBtn = styled.button`
  margin: 20px;
  background: none;
  border: none;
`;

export const Icon = styled.img`
  border-radius:0;
  width: 33px;
  height: 33px;

  cursor: pointer;
`;

export const IMG = styled.img`
  margin-left: 80px;
  width: 177px;
  border-radius: 250px;
`;

export const ContactBtn = styled.button`
  width: 227px;
  height: 46px;
  left: 808px;
  top: 404px;
  border-style: none;
  background: #DADADA;
  border-radius: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  margin-bottom: 48px;

  span {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #A9A9A9;
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 20px;
`;