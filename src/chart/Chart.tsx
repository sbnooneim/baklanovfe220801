import { FC } from 'react';
import './style.css';

interface IChartData {
  name: string;
  time: number;
}

interface ChartProps {
  data: IChartData[];
}

export const Chart: FC<ChartProps> = ({ data }) => {
  const totalTime = data.reduce((res, v) => res + v.time, 0);

  const generateMarkup = () => {
    let offset = 0;
    return data.reduce<{ labels: JSX.Element[]; chartData: JSX.Element[] }>(
      (res, value) => {
        res.labels.push(<div className='chart-label'>{value.name}</div>);

        const width = (value.time / totalTime) * 100;
        offset += width;
        const left = `${offset - width}%`;

        res.chartData.push(
          <div className='chart-progress'>
            <p className='chart-progress-value' style={{ left, width: `${width}%` }}>
              {value.time}
            </p>
          </div>
        );

        return res;
      },
      { labels: [], chartData: [] }
    );
  };

  const { labels, chartData } = generateMarkup();

  return (
    <div className='chart' data-testid='chart'>
      <h1 className='chart-title'>Spent time (seconds)</h1>
      <div className='chart-rows'>
        <div className='chart-labels'>{labels}</div>
        <div className='chart-content'>{chartData}</div>
      </div>
    </div>
  );
};
