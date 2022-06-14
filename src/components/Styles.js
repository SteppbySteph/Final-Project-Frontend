import styled from "styled-components/macro"

//Landingpage
// export const StyledGreeting = styled.div`
//     padding: 1rem;
//     background-color: hotpink;
//     font-size: 24px;
//     border-radius: 4px;
//     margin: 40vw 5vw; 
//     /* //&:hover 
//     //color: #fff */
// `
export const HeaderStyling = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    // padding: 1em;
    // background-color: rgba(0, 0, 0, 0);
    background-color: #fff;
    opacity: 0.75;
    font-weight: bold;

`;

export const LogoLanding = styled.button`
    font-size: 1em;
    /* color: whitesmoke; */
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    letter-spacing: 0.1em;
    border: none;
    background-color: transparent;

`
export const StyledGreetingBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: #353658;
    /* opacity: 0.95; */
    // font-family: 'Comfortaa', cursive;
    // font-family: 'Poiret One', cursive;
    font-weight: 900;
    letter-spacing: 1px;
    border-radius: 5px;
    width: 70%;
`
export const StyledGreeting = styled.h1`
    padding: 0.1rem;
    // font-family: 'Comfortaa', cursive;
    font-family: 'Poiret One', cursive;
    color: #FF007F;
    /* color: #b593cc; */
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    animation: glow 1s ease-in-out infinite alternate;
    // text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
    /* //&:hover 
    //color: #fff */
    @keyframes glow {
  from {
    text-shadow: 0 0 4px #fff, 0 0 0px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 10px #0073e6, 0 0 35px #0073e6;
  }
  to {
    text-shadow: 0 0 1px #fff, 0 0 0px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6, 0 0 50px #0073e6, 0 0 20px #0073e6, 0 0 30px #0073e6;
  }
}
`
export const NextButton = styled.button`
    background: none;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
    border: none;
    letter-spacing: 1px;
    font-family: 'Comfortaa', cursive;
    &:hover {
        color: #fff
    }
`
export const WrapperLanding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    /* width: 80%;
    max-width: 600px; */
    /* margin: 15px auto; */
    // padding: 0 20px 20px;
    /* background-image: url("https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXMlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"); */
    /* background-image: url("https://images.unsplash.com/photo-1626358033353-b5f5a3ca1067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxiYWNrZ3JvdW5kJTIwaW1hZ2VzJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"); */
    background-image: url("https://images.pexels.com/photos/7426196/pexels-photo-7426196.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    /* object-fit: cover; */
    height: 100vh;
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

//Login component + Post component
export const Container = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 1em auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2vw;
`
export const FormButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
//Login component
export const StyledBackButton = styled.form`
    /* margin: 2vh 3vh;  */
    margin: 1em 1em;
`

//Post component
export const CardContainer = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 1em auto;
    background-color: #fff;
    /* padding: 20px; */
    padding: 1em 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    word-break: break-word;
    /* position: relative; */
`
export const Textarea = styled.textarea`
    height: 30vh;
    font-size: 16px;
    font-family: 'Comfortaa', cursive;
    padding: 0.5em;
    outline-color: #FF007F;
`
export const YourPostButton = styled.div`
    margin-top: 2vw;
`
export const MessageContainer = styled.div`
    margin-bottom: 3em;
    font-size: 18px;
    /* border: 1px solid #FF007F; */
    padding: 0 0.5em;
    @media (min-width: 678px) {
        margin-bottom: 6vw;
    }
     @media (min-width: 1024px) {
        margin-bottom: 3vw;
    }
`
export const StyledParagraph = styled.p`
    margin: 0.3em 0;
    /* font-size: 12px; */
    font-size: 14px;
    /* border: 1px solid #FF007F; */
    padding: 0 0.7em;
    
    @media (min-width: 678px) {
        font-size: 16px;
    }
`

export const BottomCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 1vw;
    margin-top: auto;
`
export const LikeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid #FF007F; */
    /* gap: 0.5vw; */
`
export const LikeButton = styled.button`
    display: flex;
    /* background-color: #EFEFEF; */
    /* border-radius: 50%; */
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
    /* // width: 5vw;
    // height: 5vw; */
`
export const PostHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: space-between;
    padding-left: 1.5em;
    background-color: #fff;
    opacity: 0.75;
    font-weight: bold;
`

export const ElementWrapper = styled.div`
    display: flex;
    margin-left: 1em;
`

//PostMenu
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1rem;
    border-bottom: 1px solid #F8F8FA;
    margin: 1em 2em;
`;

//Home

export const HomeTitle = styled.h1`
    font-size: 1.5rem;
    color: #F8F8FA;
    letter-spacing: 1px;
    padding-left: 0.5em;
    padding-right: 0.5em;
`

export const StyledButton = styled.button`
  margin-left: 3rem;
  padding: 0.5rem;
  color:white;
  cursor:pointer;
  background: transparent;
  border: none;
  font-size: 1rem;
  border: 3px solid white;
  border-radius: 2rem;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

  &:hover{
   border: 2px solid white;
  }
`
export const StyledHomeContainer = styled.div`
//     background-color: #F8F8FA;
//     opacity: 0.5;
`
export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5vh 0;
    border-radius: 5px;
 /* @media (min-width: 678px) {
     display: grid;
     justify-content: center;
     grid-template-columns: 1fr 1fr;
    } */
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* margin: 2em 0; */
`

//Lägg till media queries i desktop. Gör större bilder i desktop/tablet.
//Ev mindre i mobil
//Göra hela bilden som knapp
export const ButtonImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
export const ButtonImageButton = styled.button`
    position: absolute;
    padding: 1rem;
    background-color: #FF007F;
    opacity: 0.85;
    font-size: 1rem;
    font-weight: bold;
    color: #fff; 
    border-radius: 4px;
    font-family: 'Comfortaa', cursive;
    border: none;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    letter-spacing: 1px;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
`

//Sweden, Europe, Worldwide
export const CardContainerDest = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    word-break: break-word;
    /* position: relative; */
`
export const Image = styled.img`
    width: 100%;
    max-width: 600px;
    height: 300px;
    position: relative;
    object-fit: cover;
    /* margin: 20px auto; */
    /* background-color: #fff; */
    /* padding: 20px; */
`
export const Description = styled.p`
    /* position: absolute; */
`

// export const LogoImage = styled.img`
// width: 60px;
// height: 60px;
// filter: drop-shadow(0 0 22px #fff);
// `;

//Contact component
export const WrapperContact = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    //padding: 0 20px 20px;
    // background-image: url("https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXMlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
    /* background-image: url("https://images.unsplash.com/photo-1626358033353-b5f5a3ca1067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxiYWNrZ3JvdW5kJTIwaW1hZ2VzJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover; */
    
`
export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: 80vh;
    // width: 80vw;
    // max-width: 600px;
    margin: 20px;
    padding: 1.5rem;
    border-radius: 5px;
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    opacity: 0.9;
    background-color: #fff;

    //red border added just for a better visual
    // border: 3px solid red;
    // margin-bottom: rem; 

`
export const ButtonImageContact = styled.img`
    width: 300px;
    height: 300px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    border-radius: 50%;
    object-fit: cover;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`
//Footer
export const FooterStyling = styled.div`
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: space-between;
    // width: 100vw;
    text-align: center;
    padding: 1em;
    // background-color: rgba(0, 0, 0, 0);
    background-color: #fff;
    opacity: 0.75;
    font-weight: lighter;

`

//Loading component
export const LoadingSpinner = styled.div`
width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
    @keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    } 
    }
`
export const LoadingSpinnerContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 350px;
`
