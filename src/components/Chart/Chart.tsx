import { styled } from 'styled-components';
import { ResponsivePie } from '@nivo/pie';

type QuestionProps = {
  question: string;
};

export default function Chart({ question }: QuestionProps) {
  // 데이터 받아와서 data={} 에 넣어야함
  return (
    <Box>
      <Question>{question}</Question>
      <MyResponsivePie data={'temp'}></MyResponsivePie>
    </Box>
  );
}

const Box = styled.div`
  margin-right: 0.6rem;
  margin-left: 0.6rem;
  background: #f0f0f0;
  border-radius: 0.38rem;
  width: 21.875rem;
  height: 27.5rem;
  padding: 2rem;
`;

const Question = styled.p`
  margin: auto;
  font-size: 1.65rem;
  width: 17rem;
  text-align: center;
`;

//pie any도 임시로 넣어둔거
const MyResponsivePie = ({ data }: any) => (
  <ResponsivePie
    data={data}
    margin={{ top: 0, right: 33, bottom: 60, left: 33 }}
    activeOuterRadiusOffset={12}
    colors={{ scheme: 'nivo' }}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0]],
    }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor='#333333'
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabel='id'
    arcLabelsRadiusOffset={0.55}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2.7]],
    }}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 1,
        translateY: 1,
        itemWidth: 50,
        itemHeight: 20,
        itemsSpacing: 0,
        symbolSize: 10,
        itemDirection: 'left-to-right',
      },
    ]}
  />
);
