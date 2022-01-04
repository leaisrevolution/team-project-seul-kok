import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import { head_1 } from '../shared/textStyle';

const HeaderMenu = () => {
  const history = useHistory();
  return (
    <Menus>
      <MenuItem
      // type="button" onClick={() => history.push('/')}
      >
        이달의 OTT
      </MenuItem>
      <MenuItem type="button" onClick={() => history.push('/mypage')}>
        마이페이지
      </MenuItem>
      <MenuItem
      // type="button" onClick={() => history.push('/')}
      >
        팀소개
      </MenuItem>
    </Menus>
  );
};

// justify-content: flex-end;

// const Menu = styled.ul`
//   display: flex;
//   justify-content: flex-end;
//   position: fixed;
//   margin-top: 30px;
// `;

// const MenuItem = styled.li`
//   ${head_1}
//   text-align: center;
//   display: flex;
//   justify-content: space-between;
//   margin-left: 5rem;
//   cursor: pointer;
// `;

const Menus = styled.ul`
  ${head_1}
  color: white;
  display: flex;
  alignitems: center;
  font-weight: nomal;
`;

const MenuItem = styled.li`
  ${head_1}
  display: flex;
  /* text-align: center;
  justify-content: space-between;
  margin-left: 5rem; */
  margin-left: 30px;
  cursor: pointer;
  :hover {
    color: var(--main);
  }
`;

// margin-left: 1rem;
// flex-grow: 0;

export default HeaderMenu;
