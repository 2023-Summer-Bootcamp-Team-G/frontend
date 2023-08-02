import { styled } from 'styled-components';

type SignBtnProps = {
  title: string;
  // onClick: any;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export default function SignBtn({
  title,
  onClick,
  disabled,
  type,
}: SignBtnProps) {
  return (
    // <SGtn
    //   onClick={() => {
    //     if (disabled === false) {
    //       onClick;
    //     } else console.log('no input ');
    //   }}
    // >
    <SGtn type={type} onClick={onClick} disabled={disabled}>
      {title}
    </SGtn>
  );
}

const SGtn = styled.button`
  /* 글자 */
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
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
