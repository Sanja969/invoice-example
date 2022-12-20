import styled from 'styled-components';

const mainColor ='#30fffe';
const transColor = '#30fffe40';
const transColor2 = '#30fffe20';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0;
  margin: 0;
  padding: 0;
  width: 90%;
  margin-left: 5%;


  div {
    padding: 0;
    width: 100%;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items:center;
  flex: 1;

  p,
  h3 {
    width: 100%;
    border-top: 1px solid black;
    border-left: 1px solid black;
    text-align: center;
    height: 50px;
    margin: 0;
    padding: 15px;
    box-sizing: border-box;
  }
`;