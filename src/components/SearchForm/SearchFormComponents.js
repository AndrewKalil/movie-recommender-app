import styled from "styled-components";

// FormContainer,
//   FormSearch,
//   FormControl,
//   Label,
//   Input,

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormSearch = styled.div``;

export const FormControl = styled.form`
  min-height: 100px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: palegoldenrod;
  padding: 30px;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: 330px;
  }
`;

export const Label = styled.label`
  align-self: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const InputAndSubmit = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Input = styled.input`
  height: 30px;
  width: 75%;
  border-radius: 6px;
`;

export const Submit = styled.input`
  width: 20%;
  height: 35px;
  margin-left: 10px;
  background: black;
  border-radius: 5px;
  border: solid black;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin: 15px;
    width: 100px;
  }

  &:hover {
    background: white;
    transition-duration: 1s;
    color: black;
  }
`;
