import styled from "styled-components";

export const MoviesContainer = styled.div`
  width: 100%;
`;

export const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  width: 250px;
  height: 300px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  border-radius: 7px;
  padding: 15px;
  box-shadow: 4px 7px 15px 3px;
  cursor: pointer;
  background: black;

  /* &:hover {
    opacity: 0%;
    transition-duration: 0.5s;
  } */
`;
