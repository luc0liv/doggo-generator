import styled from "styled-components";

export const Container = styled.div`
    background-color: pink;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    width: fit-content;

.content {
  & h1 {
    color: darkmagenta;
    font-family: 'Arial', sans-serif;
    font-size: 60px;
    text-align: center;
  }

  & h4 {
    color: darkmagenta;
    font-family: 'Arial', sans-serif;
    font-weight: lighter;
    text-align: center;
  }

  & button {
    background-color: white;
    border: 1px solid darkmagenta;
    border-radius: 8px;
    color: darkmagenta;
    font-size: 24px;
    margin: 10px;
    width: 400px;
    height: 80px;

    &:hover {
      background-color: darkmagenta;
      border: 1px solid white;
      color: white;
      transition: ease-in-out 1s;
    }
  }
}
`
export default Container