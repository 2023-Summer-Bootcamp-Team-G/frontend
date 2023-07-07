import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface RoundButtonProps {
  title: string;
}

export default function RoundButton({ title }: RoundButtonProps): ReactElement {
  return (
    <RoundButtonLayout>
      <RoundBtn>{title}</RoundBtn>
    </RoundButtonLayout>
  );
}

const RoundButtonLayout = styled.div``;

const RoundBtn = styled.button`
  all: unset;
  /* 글자 */
  font-style: normal;
  font-weight: 800;
  font-size: 0.8rem;
  padding: 5rem 1rem;
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
