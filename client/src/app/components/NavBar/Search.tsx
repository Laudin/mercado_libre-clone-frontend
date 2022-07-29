import * as React from 'react';
import styled from 'styled-components/macro';
import logo from './assets/logo__large_plus.png';
import { Link } from 'react-router-dom';
import { getProductsByName } from '../../api/productsApi'

export function Search() {

  const [result, setResult] = React.useState([])
  const ref = React.useRef(null)

  React.useEffect(() => {
    const callback = e => {
      if (e.target === ref.current) {
        const elem = document.getElementById('resultContainer')
        if (elem) {
          elem.style.display = 'none'
          elem.blur() //unfocus
        }
      }
    };
    document.addEventListener('mousedown', callback);

    return () => document.removeEventListener('mousedown', callback);
  }, [])

  const handleFocus = (e) => {
    const elem = document.getElementById('resultContainer')
    if (elem) elem.style.display = 'flex'
  }
  const handleChange = async (e) => {
    const list = await getProductsByName(e.target.value)
    setResult(list.length ? list : null)
  }

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <SearchBar ref={ref}>
        <SearchButton src="#" />
        <SearchContainer>
          <SearchInput onFocus={handleFocus} onChange={handleChange} placeholder="Buscar.." />
          <ResultsContainer id="resultContainer">
            {result ? result.map((item: any, i) => <Result to={item.id ? item.id : '#'} key={i}>{item.name}</Result>) : null}
          </ResultsContainer>
        </SearchContainer>
      </SearchBar>
      <p>Envíos gratis en 24 hs a partir de $4.000</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 5px;
  width: 95%;
`;
const Logo = styled.img`
  display: flex;
`;
const SearchBar = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 40px;
`;
const SearchButton = styled.img``;
const SearchContainer = styled.div`
  position: relative;
  flex: 0.5;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 0px 0px 5px 1px #a4a4a4;
  outline: none;
`;
const ResultsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40px;
  width: 100%;
  border-top: 1px solid lightgray; 
  background: white;
  z-index: 100;
`;
const Result = styled(Link)`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: var(--blue);
    color: white;
  }
`;
