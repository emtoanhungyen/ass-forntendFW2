import styled from "styled-components";
import { AutoComplete, Input } from 'antd';

export const Image = styled.img`
    max-width: 65px;
    height: 57px;
    margin-top: 3px;
    
`

export const  ContainerHeader = styled.header`
    width: 100%;
    height: 64px;
    background-color: #00B0D7;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
`
export const Img = styled.img`
    max-width: 65px;
    height: 57px;
    margin-top: 3px;
    margin-bottom: 4px;
`
export const A = styled.a`
    color: white;
    line-height: 64px;
    padding-left: 15px;
`
export const SearchBar = styled(AutoComplete)`
   width: 533px;
   height: 34px;
   margin-top: 15px;
   margin-left: 80px;
`
export const SearchInput = styled(Input)`
   border-radius : 10px;
`
export const SpanName = styled.span`
    line-height: 64px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    margin-left: 30%;
`