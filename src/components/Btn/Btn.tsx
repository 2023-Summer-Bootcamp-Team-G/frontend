import styled from 'styled-components';

type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  return (
    <ButtonLayout>
      <Btn>{title}</Btn>
    </ButtonLayout>
  );
}

const ButtonLayout = styled.div``;

const Btn = styled.button`
  /* 글자 */
  color: #fff;
  text-align: center;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 800;

  /*네모 박스*/
  width: 22.1875rem;
  height: 4.125rem;
  border-radius: 0.5625rem;
  background: #222;
  display: inline-block;
  &:hover {
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
  }
`;
