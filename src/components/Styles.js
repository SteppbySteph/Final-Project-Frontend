import styled from "styled-components/macro"

//Landingpage
export const StyledGreetingBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: #353658;
    font-weight: 900;
    letter-spacing: 1px;
    border-radius: 5px;
    width: 70%;
    max-width: 600px;
    @media (min-width: 678px) {
        padding: 1em;
        text-align: center;
        width: 60%;
        font-size: 1.5em;  
    }
     @media (min-width: 1024px) {
        width: 50%;    
    }
`
export const StyledGreeting = styled.h1`
    text-align: center;
    padding: 0.1rem;
    font-family: 'Poiret One', cursive;
    color: #FF007F;
    font-size: 1.7em;
    font-weight: bold;
    letter-spacing: 3px;
    animation: glow 1s ease-in-out infinite alternate;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
    &:hover {
    color: #F8F8FA;
    transition: 0.5s;
    }
    @keyframes glow {
        from {
            text-shadow: 0 0 4px #fff, 0 0 0px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 10px #0073e6, 0 0 35px #0073e6;
        }
        to {
            text-shadow: 0 0 1px #fff, 0 0 0px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6, 0 0 50px #0073e6, 0 0 20px #0073e6, 0 0 30px #0073e6;
        }
    }
    @media (min-width: 678px) {
        font-size: 1.5em; 
    }
     @media (min-width: 1024px) {
        padding: 0.8em;
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
    @media (min-width: 678px) {
        font-size: 0.8em; 
    }
     @media (min-width: 1024px) {
        padding: 0.5em;
    }
`
export const WrapperLanding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXMlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
    /* background-image: url("https://images.unsplash.com/photo-1626358033353-b5f5a3ca1067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxiYWNrZ3JvdW5kJTIwaW1hZ2VzJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"); */
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`
//Login component + Post component
export const Container = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 1em auto 0.5em;
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

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 80%;
    max-width: 600px;
    margin: 1em auto 0.5em;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

//Posts component
export const PostParagraphContainer = styled.div`
    text-align: center;
    margin: 3em auto 3em; 
    width: 80%;
    max-width: 600px;
`

export const PostsParagraph = styled.p`
    font-size: 1.5em;
    color: #f8f8ff;
    letter-spacing: 1px;
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

export const CardContainer = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 1em auto;
    background-color: #fff;
    padding: 1em 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    word-break: break-word;
`

export const MessageContainer = styled.div`
    margin-bottom: 3em;
    font-size: 18px;
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
    font-size: 14px;
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
`
//YourPosts
export const YourPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const TextContainer = styled.div`
    text-align: center;
    margin: 0 2em; 
    max-width: 600px;
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
    margin: 1em 1em;
`;

//Home

export const HomeTitle = styled.h1`
    font-size: 1.5em;
    color: #F8F8FA;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 2em;
    @media (min-width: 678px) {
        font-size: 1.7em;
    }
`

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2em 0;
    @media (min-width: 678px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 800px;
        padding: 2em 0;
        margin: 0 auto;
    }
    @media (min-width: 1124px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 800px;
        margin: 0 auto; 
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0.5em 1.5em;
    @media (min-width: 1024px) {
        margin: 1em 1.5em;
    }
`

export const ButtonImage = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    /* box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); */
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24);
`
export const ButtonImageButton = styled.button`
    position: absolute;
    padding: 0.7rem 0;
    width: 190px; 
    background-color: #FF007F;
    opacity: 0.90;
    font-size: 1rem;
    font-weight: bolder;
    color: #fff; 
    font-family: 'Comfortaa', cursive;
    border: none;
    border-radius: 4px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    letter-spacing: 1px;
    cursor: pointer;
    &:hover {
        transform: scale(1.15);
        transition: all 0.2s ease-in-out;
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
export const OutterContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    margin: 2em 2em; 
    @media (min-width: 678px) {
        margin: 2em 5em;
    }
    @media (min-width: 1024px) {
        margin: 2em 8em;
        padding: 1em 0;
    }

`
export const Heading = styled.h1`
    font-size: 1.5em;
    text-align: center;
    margin-top: 1em;
`

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1em 0;
    padding: 1em 0;
    opacity: 0.9;
    border: 1px solid red;
    min-width: 250px;
    @media (min-width: 678px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        max-width: 600px;
        padding: 1em 0;
        margin: 1em auto;
    }
    @media (min-width: 1024px) {
        max-width: 700px;
        margin: 0 auto; 
    }
`

export const ImageContact = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
`
export const AboutAuthor = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1em;
    border: 1px solid red;
    align-items: center;
    @media (min-width: 678px) {
        max-width: 260px;
    }
    @media (min-width: 1024px) {
        font-size: 1.1em;
        max-width: 400px;
    }    
`
export const Author = styled.h3`
    margin-bottom: 0;
`
export const AuthorLinks = styled.div`
    border: 1px solid red;
`

//Footer
export const FooterStyling = styled.div`
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: space-between;
    /* width: 100%; */
    text-align: center;
    padding: 1em;
    background-color: #fff;
    opacity: 0.75;
    font-weight: lighter;

`


export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
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
    color: whitesmoke;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    letter-spacing: 0.1em;
    border: none;
    background-color: transparent;
    padding-left: 0.5em;

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


///Övrigt
export const StyledContent = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;*/
`;

export const StyledHomeContainer = styled.div`
//     background-color: #F8F8FA;
//     opacity: 0.5;
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