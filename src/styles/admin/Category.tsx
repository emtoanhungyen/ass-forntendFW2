import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 168px;
    background-color: #F8F8F8;
    margin-top: 4%;
`
export const A = styled.a`
    font-size: 11px;
    color: black;
    margin-left: 5px;
    &:hover {
        color: red;
    }
`
export const Bottom = styled.div`
    padding-bottom: 5%;
    text-align: center;
    padding-top: 2%;

`
export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 500px));
    gap: 10px;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 1%;
`
