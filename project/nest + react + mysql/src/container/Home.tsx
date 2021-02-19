import React, { useEffect } from 'react';
import styled, { css } from 'styled-components'
import { useHistory } from 'react-router'
import { inject, observer } from 'mobx-react'
import Menu from '@components/Menu'
import { AppStoreTypes } from '@store/appStore'
import { $fetch, HTTP_PREFIX } from '@/common/request'

const Button = styled.button<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Home: React.FC<{ AppStore: AppStoreTypes }> = ({ AppStore }) => {

  console.log(AppStore);

  let history = useHistory();

  useEffect(() => {
    $fetch(`${HTTP_PREFIX}/articles`).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <h1>{AppStore.appName}</h1>
      <h1>HOME</h1>
      <Button onClick={() => history.push('/login')}>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <hr />
      <Menu></Menu>
    </>
  );
}

export default inject('AppStore')(observer(Home))
