import { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { styled } from 'styled-components';

const options: Highcharts.Options = {
  title: {
    text: '나를 동물로 표현하면 뭐야?',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}개</b>',
  },

  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} 개',
      },
    },
  },
  series: [
    {
      name: 'keywords',
      type: 'pie',
      allowPointSelect: true,
      keys: ['name', 'y', 'selected', 'sliced'],
      data: [
        ['Samsung', 27.79, true, true],
        ['Apple', 27.34, false],
        ['Xiaomi', 10.87, false],
        ['Huawei', 8.48, false],
        ['Oppo', 5.38, false],
        ['Vivo', 4.17, false],
        ['Realme', 2.57, false],
        ['Unknown', 2.45, false],
        ['Motorola', 2.22, false],
        ['LG', 1.53, false],
        ['Other', 7.2, false],
      ],
      showInLegend: true,
    },
  ],
};

export default function Chart(props: HighchartsReact.Props) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <BoxLayout>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </BoxLayout>
  );
}

const BoxLayout = styled.div`
  /* margin: 5rem; */
  padding: 4rem 6rem 4rem 6rem;
  width: 60rem;
  height: 32rem;
  background: #d9d9d9;
`;
