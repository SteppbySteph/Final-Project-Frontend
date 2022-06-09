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

export const LogoLanding = styled.h4`
    font-size: 1em;
    /* color: whitesmoke; */
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    letter-spacing: 0.1em;

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
    /* color: #FF007F; */
    color: #b593cc;
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
    // padding: 1rem;
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
    margin: 50px auto;
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
    position: relative;
`
export const Textarea = styled.textarea`
    height: 30vh;
    font-size: 20px;
    outline-color: #FF007F;
`
export const YourPostButton = styled.div`
    margin-top: 4vw;
`
export const MessageContainer = styled.p`
    margin-bottom: 12vw;
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
    align-items: center;
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
    // margin: 2vh 3vh;
    padding-left: 0.5em;
    /* background-color: rgba(0, 0, 0, 0); */
    background-color: #fff;
    opacity: 0.75;
    font-weight: bold;
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
  border: 3px solid white;
  border-radius: 2rem;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

  &:hover{
   border: 2px solid white;
  }
`
export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const ButtonImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
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
    cursor: pointer;
    &:hover {
        color: #fff;
    }
`

//Sweden, Europe, Worldwide
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

`;
