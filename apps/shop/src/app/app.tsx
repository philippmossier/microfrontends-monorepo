import styled from '@emotion/styled';
import React from 'react';
import wrapComponent from './ModuleFederationWrapper/wrapComponent';

const Search = wrapComponent(React.lazy(() => import('search/Module')));

const StyledApp = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

export default function App() {
  return (
    <StyledApp>
      <Search
        delayed={<div>Loading Search ...</div>}
        error={<div>Error Loading Search remote</div>}
      />
      <StyledPage>
        <h1>---- Shoppage ----</h1>
      </StyledPage>
    </StyledApp>
  );
}
