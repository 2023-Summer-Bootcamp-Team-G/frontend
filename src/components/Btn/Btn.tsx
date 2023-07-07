import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps): ReactElement {
  return (
    <ButtonLayout>
      <Btn>{title}</Btn>
    </ButtonLayout>
  );
}

const ButtonLayout = styled.div``;

const Btn = styled.button`
  all: unset;
  /* 글자 */
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  text-align: center;
  color: #ffffff;

  /*네모 박스*/

  background: #222222;
  border-radius: 9px;
  display: inline-block;

  &:hover {
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
  }
`;

// /* Group 331 */

// position: absolute;
// width: 470px;
// height: 69px;
// left: calc(50% - 470px/2);
// top: 1468px;

// filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.25));
