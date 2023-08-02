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
    colors: [
      '#FFF380',
      '#f9d088',
      '#EC7357',
      '#C27664',
      '#FF6D60',
      '#f9b028',
      '#FFDB58',
      '#754F44',
      '#73A9AD',
      '#025464',
      '#99A98F',
      '#C9DBB2',
      '#9CA777',
      '#ABC4AA',
      '#7C9070',
      '#539165',
      '#183A1D',
      '#4F200D',
      '#B99B6B',
      '#A9907E',
      '#675D50',
    ],
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
        animation: { duration: 1500 },
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
