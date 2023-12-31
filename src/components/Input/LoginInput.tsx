import { ChangeEvent } from 'react';
import { styled } from 'styled-components';

type TextProps = {
  title: string;
  value: string;
  // setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function LoginInput({
  title,
  value,
  type,
  // setValue,
  placeholder,
  onChange,
}: TextProps) {
  return (
    <LoginInputLayout>
      <Label>{title}</Label>
      <Input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      ></Input>
    </LoginInputLayout>
  );
}

const LoginInputLayout = styled.div`
  /* margin-left: 2rem; */
  margin-bottom: 2rem;
`;

const Label = styled.label`
  color: #2c2c2c;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 1.3rem;
  display: flex;
`;

const Input = styled.input`
  all: unset;
  display: flex;
  align-items: center;
  width: 28rem;
  height: 3rem;
  border-radius: 0.875rem;
  background: #f0f0f0;
  color: black;
  font-size: 1.25rem;
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
