import styled from "styled-components/macro"

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
    width: 7vw;
    height: 7vw;
`
