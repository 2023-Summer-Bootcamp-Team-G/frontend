import { ReactElement } from 'react';
import { styled } from 'styled-components';

type TextProps = {
  title: string;
  placeholder: string;
};

export default function LoginInput({
  title,
  placeholder,
}: TextProps): ReactElement {
  return (
    <LoginInputLayout>
      <Label>{title}</Label>
      <Input placeholder={placeholder}></Input>
    </LoginInputLayout>
  );
}

const LoginInputLayout = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  color: #2c2c2c;
  text-align: center;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 1.3rem;
  display: flex;
`;

const Input = styled.input`
  all: unset;
  display: flex;
  align-items: center;
  width: 35rem;
  height: 4.5rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  color: black;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  padding-left: 1.55rem;
  &::placeholder {
    color: silver;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
