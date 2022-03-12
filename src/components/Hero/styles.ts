import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: 100%;
  max-width: 1920px;
  background: #F4F4F4; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 250px;

  @media (max-width: 1458px){
    padding: 0 150px;
  }

  @media (max-width: 1000px){
    padding: 0 150px;
    flex-direction: column;
    height: auto;
    padding: 0 50px 50px;
  }

  @media (max-width: 700px){
    padding: 0 50px 20px;
  }
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px){
    order: 2;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 52px;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    max-width: 600px;
    width: 100%;

    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 24px;
    text-align: center;
    color: #878383;
    margin-bottom: 20px;
  }

  button {
    max-width: 360px;
    width: 100%;
    height: 50px;

    background: #FC7900;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    border: none;
    color: #fff;

    &:hover {
      color: #FC7900;
      border: 2px solid #FC7900;
      background: #FFFFFF;
    }
  }
`;

