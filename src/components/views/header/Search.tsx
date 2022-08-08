import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { AutoComplete as AutoCompleteAnt, Input } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { searchByName } from '../../../api/product';
import { debounce } from 'lodash'
import { Link } from 'react-router-dom';
const { Option } = AutoCompleteAnt;
type Props = {

}
const options = [
   { value: 'Burns Bay Road' },
   { value: 'Downing Street' },
   { value: 'Wall Street' },
];



const Search: React.FC = () => {
   const [search, setSearch] = useState<any>([]);;
   const timeoutDebounce = useRef<any>();

   function renderOption(item: any) {
      return (
         <Option >
            <div
               onClick={() => setSearch([])}
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <Link
                  style={{
                     width: '100%',
                     color: '#000',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
                  to={`/product/${item.id}`}
               >
                  <img src={item.img} alt={item.name} width={50} />
                  <span>{item.name}</span>

               </Link>
            </div>
         </Option>
      );
   }

   const searchProduct = async (value: string) => {
      console.log(value);
      if (value.length > 3) {
         const { data } = await searchByName(value);
         setSearch(data);
         return data;
      }
      setSearch([]);
      return;
   }

   const debonuce = React.useRef(debounce(searchProduct, 500)).current
   useEffect(() => {
      console.log(search);
   }, [search]);
   return (
      <Container>
         <SearchBar
            onSearch={(value: string) => debonuce(value)}
            dataSource={search.map(renderOption)}
         >
            <SearchInput size="middle" prefix={<AiOutlineSearch />} />
         </SearchBar>
      </Container>
   )
}
const Container = styled.div`
    padding-left: 45px;
    padding-right: 40px;
`

const SearchBar = styled(AutoCompleteAnt)`
   width: 400px;
   height: 34px;
`

const SearchInput = styled(Input)`
width: 400px;
   border-radius : 10px;
`
export default Search