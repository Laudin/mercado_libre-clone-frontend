import * as React from 'react';
import styled from 'styled-components/macro';
import { Link, useNavigate } from 'react-router-dom';
import { getProductsByName } from '../../api/productsApi'

export function Search() {

  const navigate = useNavigate()
  const [result, setResult] = React.useState([])
  const [input, setInput] = React.useState<any>(null)
  const ref = React.useRef<any>()
  const rsltContainertainer = React.useRef<any>()

  React.useEffect(() => {
    getProductsByName(input).then(res => setResult(res.length ? res : null))
  }, [input])

  React.useEffect(() => {
    const clickCallback = (e: Event) => {
      if (e.target !== ref.current) {
        rsltContainertainer.current.style.display = 'none'
        rsltContainertainer.current.blur() //unfocus
      }
    }
    document.addEventListener('mouseup', clickCallback);

    return () => document.removeEventListener('mouseup', clickCallback);
  }, [])

  const handleSearch = () => {
    rsltContainertainer.current.style.display = 'none'
    ref.current.blur()
    rsltContainertainer.current.blur()
    if (input) navigate(`/search/${input}`, { state: { query: input } })

  }
  const handleFocus = (e) => {
    const elem = document.getElementById('resultContainer')
    if (elem) elem.style.display = 'flex'
  }

  return (
    <Wrapper>
      <MyLink to="/">
        <Logo src='http://localhost:3001/static/logo__large_plus.png' />
      </MyLink>
      <SearchBar >
        <SearchContainer>
          <SearchInput
            ref={ref}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleSearch()
            }}
            onFocus={handleFocus}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Buscar.."
          />
          <ResultsContainer ref={rsltContainertainer} id="resultContainer">
            {result ? result.map((item: any, i) =>
              <Result
                onClick={() => {
                  if (rsltContainertainer.current) {
                    rsltContainertainer.current.style.display = 'none'
                    rsltContainertainer.current.blur() //unfocus
                  }
                  navigate('/' + item.id)
                }} key={i}>
                {item.name}
              </Result>)
              : null}
          </ResultsContainer>
        </SearchContainer>
        <SearchButton onClick={handleSearch} src='http://localhost:3001/static/search.png' />
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
  & p {
    margin: 0;
  }
`;
const MyLink = styled(Link)`
  width: 114px;
`;
const Logo = styled.img`
  display: flex;
`;
const SearchBar = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: end;
  height: 40px;
  background: white;
  & p {
    margin: 0;
  }
`;
const SearchButton = styled.img`
  width: 37px;
  height: 35px;
  align-self: center;
  padding: 5px;
  cursor: pointer;
  border-left: 1px solid lightgray;
`;
const SearchContainer = styled.div`
  flex: 1;
  position: relative;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 10px;
  outline: none;
`;
const ResultsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40px;
  width: calc(100% + 37px);
  border-top: 1px solid lightgray; 
  background: white;
  z-index: 100;
`;
const Result = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: var(--blue);
    color: white;
  }
`;
