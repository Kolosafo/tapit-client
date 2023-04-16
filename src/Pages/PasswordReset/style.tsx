import styled from "styled-components";

export const Container = styled.div`
  /* display: none;  */
  position: fixed;
  z-index: 1;

  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: #efefef;
  display: flex;
`;
export const ModalCon = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 2px solid #e0e0e0;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResetDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const TopDiv = styled.div`
  flex: 1;
  span {
    color: blue;
    font-size: 16px;
  }
  @media (width < 472px) {
    h1 {
      font-size: 18px;
    }
  }
`;
export const BotDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  label {
    font-size: 13px;
  }
`;
export const ResetInput = styled.input`
  padding-top: 10px;
  font-size: 17px;
  outline: none;
  border: none;
  border-bottom: 2px solid lightgrey;
`;
export const ResetBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;
export const ResetBtn = styled.button`
  width: 100%;
  padding: 13px;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 16px;
  background-color: #2660e7;
  color: white;
  border: transparent;
`;
export const BotDiv2 = styled(BotDiv)`
  flex: 2;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const PassDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
