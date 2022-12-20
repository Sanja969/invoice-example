import styled from 'styled-components';

const mainColor ='#30fffe';
const subColor = '#30fffe40';

export const AddItemContainer = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    
    input,
    textarea {
      margin: 10px 0;
      width: 100%;
      height: 30px;
      border: none;
      background-color: ${subColor};
      text-align: center;
      color: orange;
      &::placeholder {
        color: orange;
        font-size: 15px;
      }
    }
    button {
      margin: 20px;
      font-size: 20px;
      background-color: ${subColor};
      border: 2px solid ${mainColor};
      padding: 5px 10px;
    }
  }
`;