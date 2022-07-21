import React from 'react'
import styled from 'styled-components';
import { AutoComplete, Input } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
type Props = {}

const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
 ];

const Search = (props: Props) => {
    return (
        <Container>
            <SearchBar
               options={options}
               filterOption={(inputValue, option) =>
                  option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
               }
            >
               <SearchInput size="middle" prefix={<AiOutlineSearch />} />
            </SearchBar>
        </Container>
    )
}
const Container = styled.div`
    padding-left: 70px;
    padding-right: 40px;
`

const SearchBar = styled(AutoComplete)`
   width: 400px;
   height: 34px;
`

const SearchInput = styled(Input)`
   border-radius : 10px;
`
export default Search