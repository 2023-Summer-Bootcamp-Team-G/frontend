import { ReactElement } from 'react';
import styled from 'styled-components';

type RoundButtonProps = {
  title: string;
};

export default function RoundButton({ title }: RoundButtonProps): ReactElement {
  return (
    <RButtonLayout>
      <RBtn>{title}</RBtn>
    </RButtonLayout>
  );
}

const RButtonLayout = styled.div``;

const RBtn = styled.button`
  /* 글자 */
  color: #fff;
  text-align: center;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  /*네모 박스*/
  padding: 0.8rem 5.6rem;
  border-radius: 5rem;
  background: #2c2c2c;
  display: inline-block;
  &:hover {
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
  }
`;
