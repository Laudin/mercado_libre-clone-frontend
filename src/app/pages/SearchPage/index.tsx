import * as React from 'react';
import styled from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
//import { Filter } from './Filter'
import { Results } from './Results'
import * as productApi from '../../api/productsApi';


export function SearchPage(props) {

   const location = useLocation() as any //because it doesnt have a query property

   const [products, setProducts] = React.useState<any>(null);
   const [filtered, setfiltered] = React.useState<any>(null);
   const [filter, setFilter] = React.useState<any>([]);

   React.useEffect(() => {
      productApi.getProductsList(location.state.query)
         .then(res => {
            setProducts(res.length ? res.sort((a, b) => a.price < b.price ? 1 : -1) : null);
            setfiltered(res.length ? res.sort((a, b) => a.price < b.price ? 1 : -1) : null);
         })
         .catch((err) => console.log(err))
   }, [location.state.query]);

   React.useEffect(() => {
      let productsCopy = products ? [...products] : []
      if (filter.length > 0) {
         filter.forEach(filter => {
            if (filter.key !== 'max' && filter.key !== 'min') {
               productsCopy = productsCopy.filter(x => x[filter.key] === filter.value)
            } else {
               if (filter.key === 'max') {
                  console.log(productsCopy.filter(x => x.price <= filter.value))
                  productsCopy = productsCopy.filter(x => x.price <= filter.value)
               }
               if (filter.key === 'min') {
                  console.log('min')
                  productsCopy = productsCopy.filter(x => x.price > filter.value)
               }
            }
         })
      }
      setfiltered(productsCopy)
   }, [filter]);

   const handleSort = (e, value) => {
      value === '<' ?
         setfiltered(products => [...products.sort((a, b) => a.price < b.price ? 1 : -1)])
         : setfiltered(products => [...products.sort((a, b) => a.price > b.price ? 1 : -1)])
   }
   const handleFilter = (key, value) => {
      setFilter(filter => [...filter, { key: key, value: value }])
   }

   return (
      <>
         <Helmet>
            <title>Mercado Libre</title>
            <meta name="" content="" />
         </Helmet>
         <Wrapper>
            <FilterWrapper>
               <h2>{location.state.query}</h2>
               <p>{products ? products.length : 0} resultados</p>
               <AppliedFiltersContainer>{filter.map((filter, i) =>
                  <AppliedFilters
                     key={i}
                     onClick={() =>
                        setFilter(filter => filter.splice(filter.indexOf({ key: filter.key, value: filter.value }), 1))
                     }
                  >{filter.value}<span>x</span></AppliedFilters>)}
               </AppliedFiltersContainer>

               {!filter.find(x => x.key === 'state') ? <div>
                  <h3>Condición</h3>
                  <div
                     onClick={(e) => handleFilter('state', 'Nuevo')}>
                     Nuevo {`(${products?.filter(x => x.state === 'Nuevo').length})`}
                  </div>
                  <div
                     onClick={(e) => handleFilter('state', 'Usado')}>
                     Usado {`(${products?.filter(x => x.state === 'Usado').length})`}
                  </div>
               </div> : null}

               <div>
                  <h3>Price</h3>
                  <div onClick={(e) => handleFilter('min', 5)}>
                     Hasta $5
                  </div>
                  <div onClick={(e) => {
                     handleFilter('min', 5)
                     handleFilter('max', 50)
                  }}>
                     $5 a $50
                  </div>
               </div>
            </FilterWrapper>

            <Results products={filtered} sortFunc={handleSort} />
         </Wrapper>
      </>
   );
}

const Wrapper = styled.div`
   display: flex;
   width: 1240px;
   margin: auto;
`;
const FilterWrapper = styled.div`
   width: 20%;
   height: 0%; //dont worry it doesnt shrink
   margin: 20px 20px;
   & * {
      margin: 10px auto;
   }
`;
const AppliedFiltersContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: start;
`;
const AppliedFilters = styled.div`
   margin: 5px;
   border: 1px solid lightgray;
   padding: 2px 5px;
   background: white;
`;
