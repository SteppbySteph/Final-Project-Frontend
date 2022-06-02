import styled from "styled-components/macro"

//Landingpage
export const StyledGreeting = styled.div`
    padding: 1rem;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    margin: 40vw 5vw; 
    //&:hover {
    //    color: #fff
    }
`
export const NextButton = styled.button`
    padding: 1rem;
    background-color: hotpink;
    font-size: 1rem;
    border-radius: 4px;
    margin: 0 10vw 10vw; 
    &:hover {
        color: #fff
    }
`
export const WrapperLanding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px black;
    width: 80%;
    max-width: 600px;
    margin: 100px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    //box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`


//Login component + Post component
export const Container = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 100px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

//Login component

export const StyledBackButton = styled.form`
    margin: 2vh 3vh; 
`

//Post component
export const CardContainer = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    word-break: break-word;
`
export const BottomCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 2vw;
    margin-top: auto;
`
export const LikeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5vw;
`
export const LikeButton = styled.button`
    display: flex;
    background-color: #EFEFEF;
    border-radius: 50%;
    margin-bottom: 1vw;
    align-items: center;
    justify-content: center;
    border: none;
    // width: 5vw;
    // height: 5vw;
    padding: 3vw;
`

//PostMenu

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 2vh 3vh;
`;

//Home
export const StyledButton = styled.button`
  margin-left: 3rem;
  padding: 0.5rem;
  color:white;
  cursor:pointer;
  background: transparent;
  border: none;
  font-size:1rem;
  color: 
  border: 3px solid white;
  border-radius: 2rem;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

  &:hover{
   border: 2px solid white;
  }
`

// export const LogoImage = styled.img`
// width: 60px;
// height: 60px;
// filter: drop-shadow(0 0 22px #fff);
// `;
