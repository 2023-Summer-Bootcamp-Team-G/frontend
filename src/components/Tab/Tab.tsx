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
import { Link, useNavigate } from 'react-router-dom';
import { idStore } from '../../stores/id';
import Swipe from '../Swipe/Swipe';
import { TestStore } from '../../stores/testStore';

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
interface KeywordData {
  [key: string]: [number, number];
}

interface ServerData {
  keyword_count: Array<{ [index: string]: KeywordData }>;
}

interface ChartProps {
  title: string;
  pieChartData: [string, number, boolean][];
}

export default function BasicTabs({ onSubmit }: { onSubmit: () => void }) {
  const [value, setValue] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const { userId, creatorId } = userStore();
  const navigate = useNavigate();
  const { detailId, setDetailId } = idStore();

  //test
  const [serverData1, setServerData1] = useState<ServerData>({
    keyword_count: [],
  });
  const { serData, setSerData } = TestStore();
  const serverData: ServerData = serverData1;
  const titles: string[] = [
    '나를 동물로 표현하면?',
    '난 어떤 분위기야?',
    '나를 색으로 표현하면?',
    '어떤 그림체가 어울려?',
    '자주 들고 다니는 물건?',
  ];
  const getChart = async () => {
    try {
      const response = await baseInstance.get('/characters/chart', {
        params: { user_id: userId },
      });
      console.log('response---data');
      console.log(response.data);
      setServerData1(response.data); //test
    } catch (error) {
      console.log(error);
    }
  };
  const data: ChartProps[] = serverData.keyword_count.map((item, index) => {
    const title = titles[index];
    const keywordData = item[Object.keys(item)[0]];
    const pieChartData: [string, number, boolean][] = Object.entries(
      keywordData
    ).map(([key, [count]]) => [key, count, false]);
    // console.log('----------');
    // console.log(pieChartData);
    return { title, pieChartData };
  });
  //test

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onSubmit(); // 탭이 변경될 때 onSubmit 함수 호출
  };

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await baseInstance.get('/characters', {
          params: {
            user_id: userId + creatorId, //꺼내온거 사용
          },
        });
        console.log(response.data);
        setCharacters(response.data.characters);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    getChart();
    getCharacters();
  }, []);

  //test
  useEffect(() => {
    console.log('------seerserreeesr-----');
    console.log(serverData1);
    console.log('server@@@@@@@ee');
    console.log(serverData);
    console.log('data---test#e##ee####');
    console.log(serData);
    console.log('data---etest');
    console.log(data);

    setSerData(data);
  }, [serverData1]);

  const goDetails = (id: number) => {
    navigate('/mypage/detail');
    setDetailId(id);
  };
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
      <CustomTabPanel value={value} index={0}>
        <BoxLayout>
          {characters.slice(1).map((character) => (
            <CharBox
              key={character.id}
              imageURL={character.result_url}
              onClick={() => goDetails(character.id)}
            />
          ))}
        </BoxLayout>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BoxCenter>
          <Swipe />
        </BoxCenter>
      </CustomTabPanel>
    </Box>
  );
}

const BoxLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem;
`;

const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
`;
