import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  z-index: 1;
  padding: 112px 32px 0px 32px;
`;

export default App;
