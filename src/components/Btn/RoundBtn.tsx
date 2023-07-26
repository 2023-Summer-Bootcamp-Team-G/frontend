import { styled } from 'styled-components';

type RoundButtonProps = {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};

export default function RoundButton({ title, onClick }: RoundButtonProps) {
  return <RBtn onClick={onClick}>{title}</RBtn>;
}

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
  &:not(:last-child) {
    margin-right: 1.75rem;
  }
  &:hover {
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
  }
`;
