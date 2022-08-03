import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    padding-left: 10%;
    padding-right: 10%;
`
export const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DivBox = styled.div`
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: 1rem;
`
export const Box = styled.div`
    width: 111px;
    height: 125px;
    /* background-color: #FFA3A3; */
    border-radius: 10px;
`
export const Py2 = styled.div`
    padding-top: 5px;
    padding-left: 7px;
`
export const Img = styled.img`
    padding-left: 14px;
    padding-top: 22px;
`