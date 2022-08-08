import React, { useState } from 'react'
import styled from 'styled-components';
import { AutoComplete, Input, SelectProps } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
type Props = {}

const options = [
   { value: 'Burns Bay Road' },
   { value: 'Downing Street' },
   { value: 'Wall Street' },
];
// const searchResult = async (query: string) =>
//    await axios.get('//localhost')
//       .join('.')
//       .split('.')
//       .map((_, idx) => {
//          const category = `${query}${idx}`;
//          return {
//             value: category,
//             label: (
//                <div
//                   style={{
//                      display: 'flex',
//                      justifyContent: 'space-between',
//                   }}
//                >
//                   <span>
//                      Found {query} on{' '}
//                      <a
//                         href={`https://s.taobao.com/search?q=${query}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                      >
//                         {category}
//                      </a>
//                   </span>
//                   {/* <span>{getRandomInt(200, 100)} results</span> */}
//                </div>
//             ),
//          };
//       });
const Search = (props: Props) => {
   const [options, setOptions] = useState<SelectProps<object>['options']>([]);

   const handleSearch = (value: string) => {
      // setOptions(value ? searchResult(value) : []);
   };

   const onSelect = (value: string) => {
      console.log('onSelect', value);
   };
   return (
      <Container>
         <SearchBar
            dropdownMatchSelectWidth={252}
            style={{ width: 400 }}
            options={options}
            // onSelect={onSelect}
            onSearch={handleSearch}
         >
            <SearchInput size="middle" placeholder="Tìm kiếm" />
         </SearchBar>
         {/* <SearchBar
               options={options}
               filterOption={(inputValue, option) =>
                  option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
               }
            >
               <SearchInput size="middle" prefix={<AiOutlineSearch />} />
            </SearchBar> */}
      </Container>
   )
}
const Container = styled.div`
    padding-left: 45px;
    padding-right: 40px;
`

const SearchBar = styled(AutoComplete)`
   width: 400px;
   height: 34px;
`

const SearchInput = styled(Input)`
width: 400px;
   border-radius : 10px;
`
export default Search