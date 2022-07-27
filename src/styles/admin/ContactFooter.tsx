import styled from "styled-components";

export const My5 = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 300px));
    gap: 1rem;
    padding-left: 10%;
    padding-right: 10%;
    background-color: white;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
`
export const Span = styled.span`
    font-size: 16px;
    color: #444444;
    padding-top: 2px;
`
export const Span1 = styled.span`
    font-size: 16px;
    color: #444444;
    padding-top: 2px;
`
export const Img1 = styled.img`
    width: 30px;
    height: auto;
    margin-top: 5px;
`
export const Img = styled.img`
    width: 30px;
    height: auto;
    margin-top: 5px;
    margin-left: 15px;
`
export const Img2 = styled.img`
    width: 216px;
    height: auto;
    margin-top: 5px;
`
export const A = styled.a`
    font-size: 12px;
    color: #444444;
    padding-top: 5px;
    &:hover {
        color: #D70018;
    }
`
