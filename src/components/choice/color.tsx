import { useState, memo } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  color: string;
  name: string;
};

interface StyledButtonProps {
  clicked: boolean;
  color: string;
}

const StyledColorButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['clicked'].includes(prop),
}) <StyledButtonProps>`
  width: 2.8rem;
    height: 2.8rem;
  background: ${(props) => props.color};
  background: ${(props) =>
    props.clicked
      ? `url('${props.color === '#ffff'
        ? 'https://i.postimg.cc/Vvy6fV8W/Pngtree-check-mark-icon-3566306.png'
        : 'https://i.postimg.cc/W3vtGydY/Pngtree-correct-icon-4490392.png'
      }') center center / cover no-repeat, ${props.color}`
      : props.color};
  border: ${(props) =>
    props.color === '#ffff' ? 'solid 0.08rem gray' : 'none'};
  box-shadow: ${(props) =>
    props.clicked ? '2px 2px 1px 1px rgba(0, 0, 0, 0.25)' : 'none'};
  &:active {
    filter: brightness(80%);
  }
  &:hover {
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const ColorButton: React.FC<
  ButtonProps & { clicked: boolean; onClick: () => void }> = memo(({ color, clicked, onClick }) => {
  return (
    <StyledColorButton color={color} onClick={onClick} clicked={clicked} />
  );
});


export default function ColorBtn({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const buttonClick = (button: ButtonProps) => {
    setSelectedButton(button.color);
    onSelect(button.name);
  };
  const buttons: ButtonProps[] = [
    { color: '#E42217', name: '빨간색' },
    { color: '#F9B7FF', name: '분홍색' },
    { color: '#F87217', name: '주황색' },
    { color: '#FFD801', name: '노란색' },
    { color: '#347C17', name: '초록색' },
    { color: '#7FE817', name: '연두색' },
    { color: '#2B65EC', name: '파란색' },
    { color: '#BDEDFF', name: '하늘색' },
    { color: '#A23BEC', name: '보라색' },
    { color: '#7F5217', name: '갈색' },
    { color: '#ffff', name: '흰색' },
    { color: '#B6B6B4', name: '회색' },
    { color: 'black', name: '검정색' },
  ];

  return (
    <>
      <Title>나를 색으로 표현한다면 무슨 색이야?</Title>
      <ColorLayout>
        {buttons.map((button, index) => (
          <ColorButton
            key={index}
            {...button}
            clicked={button.color === selectedButton}
            onClick={() => buttonClick(button)}
          />
        ))}
      </ColorLayout>
    </>
  );
}

const ColorLayout = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 5rem;
  margin-bottom: 2.5rem;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  margin-bottom: 1.3rem;
  margin-left: 2rem;
`;
