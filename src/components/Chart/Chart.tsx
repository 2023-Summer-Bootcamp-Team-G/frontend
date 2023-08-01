import { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { styled } from 'styled-components';

export interface ChartProps extends HighchartsReact.Props {
  // title?: string; // Define the type for the title prop
  serData: any;
}

export default function Chart({ serData, ...props }: ChartProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  if (!serData || !serData.pieChartData) {
    return null; // or render a loading state, an error message, or anything appropriate
  }
  const options: Highcharts.Options = {
    colors: ['#FBFFB9', '#FDD692', '#EC7357', '#754F44', '#FFEEE4'],
    credits: { enabled: false },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '{point.y}명<br>{point.percentage:.0f}%</b>', //마우스 올리면 들어나는곳
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>',
        },
      },
    },
    series: [
      {
        name: 'keywords',
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: serData.pieChartData,
        showInLegend: true,
      },
    ],
  };

  return (
    <BoxLayout>
      <div
        style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '3rem' }}
      >
        {serData.title}
      </div>
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
  padding: 1rem 6rem 1rem 6rem;
  width: 60rem;
  height: 34rem;
`;
