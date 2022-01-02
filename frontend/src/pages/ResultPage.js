import React from 'react';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

// components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Template from '../components/Template';
import Layout from '../components/Layout';

import { head_3, sub_3 } from '../shared/textStyle';

const ResultPage = () => {
  const child = { width: '200px', height: '320px' };
  const parent = { width: '592px', height: '689px' };
  return (
    <Template>
      <Header page="main" />
      <Layout>
        <Grid width="37rem" is_flex="space-between">
          <Grid margin="0 0 5rem 0">
            <Title>이달의 OTT 추천</Title>
            <Text>________님, 이번달 추천하는 OTT는 ________ 입니다.</Text>
            <Text>이번 달 가장 좋아할만한 컨텐츠는 ________입니다.</Text>
          </Grid>
        </Grid>

        <Grid width="40rem">
          <Wrapper style={parent}>
            <HorizontalScroll pageLock={true} reverseScroll={true}>
              <CardGrid>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random"
                    alt="cardimg"
                    style={child}
                  />
                </div>
              </CardGrid>
            </HorizontalScroll>
          </Wrapper>
        </Grid>
      </Layout>
    </Template>
  );
};

const Title = styled.h2`
  ${head_3}
  color: var(--main);
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Text = styled.p`
  ${sub_3}
  color: var(--main);
  ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  ${({ theme }) => theme.device.mobile} {
    max-width: 35rem;
  }
`;

const CardGrid = styled.div`
  display: grid !important;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  > div {
    margin-right: 20px;
  }
`;

export default ResultPage;
