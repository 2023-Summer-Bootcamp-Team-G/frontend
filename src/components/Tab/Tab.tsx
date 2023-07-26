import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CharBox from '../CharBox/CharBox';
import styled from 'styled-components';
import Chart from '../Chart/Chart';
import Button from '../Btn/Btn';
import { useState, useEffect } from 'react';
import { baseInstance } from '../../apis/config';
import { userStore } from '../../stores/userStore';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Character {
  id: number;
  result_url: string;
  nick_name: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ onSubmit }: { onSubmit: () => void }) {
  const [value, setValue] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const { userId } = userStore();

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onSubmit(); // 탭이 변경될 때 onSubmit 함수 호출
  };

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await baseInstance.get('/characters', {
          params: {
            user_id: userId, //꺼내온거 사용
          },
        });
        console.log(response.data);
        setCharacters(response.data.characters);
      } catch (error) {
        console.error(error);
      }
    };
    const getChart = async () => {
      try {
        const response = await baseInstance.get('/characters/chart', {
          params: { user_id: userId },
        });
        console.log(response.data.keyword_count);
        console.log(typeof response.data.keyword_count);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
    getChart();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={1}>
        <BoxLayout>
          {characters.slice(1).map((character) => (
            <CharBox key={character.id} imageURL={character.result_url} />
          ))}
        </BoxLayout>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={0}>
        <Chart question={''}></Chart>
      </CustomTabPanel>
    </Box>
  );
}

const BoxLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
