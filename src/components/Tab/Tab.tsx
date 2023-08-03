import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CharBox from '../CharBox/CharBox';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { baseInstance } from '../../apis/config';
import { useNavigate, useParams } from 'react-router-dom';
import { idStore } from '../../stores/id';
import Swipe from '../Swipe/Swipe';
import { TestStore } from '../../stores/testStore';
import { isLoggedIn } from '../../utils/utils';

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
  const navigate = useNavigate();
  const { setDetailId } = idStore();
  const { user_id } = useParams();

  //test
  const [serverData1, setServerData1] = useState<ServerData>({
    keyword_count: [],
  });
  const { setSerData } = TestStore();
  const serverData: ServerData = serverData1;

  const titles: string[] = [
    '나를 동물로 표현한다면 어떤 동물이야?',
    '내가 자주 하고다니는 악세사리 혹은 옷은?',
    '내가 자주 들고다니는 물건은 뭐야?',
    '내가 자주 나타나는 장소는 어디야?',
    '나를 색으로 표현한다면 무슨 색이야?',
    '나는 어떤 그림체가 어울려?',
  ];
  const getChart = async () => {
    try {
      const response = await baseInstance.get('/characters/chart', {
        params: isLoggedIn() ? {} : { user_id: user_id },
      });

      setServerData1(response.data); //test
    } catch (error) {
      console.log(error);
    }
  };
  const data: ChartProps[] = serverData.keyword_count.map((item, index) => {
    const title = titles[index];
    const keywordData = item[Object.keys(item)[0]];

    // Check if keywordData is a valid object
    if (typeof keywordData !== 'object' || keywordData === null) {
      console.log(
        `질문 ${index + 1}에 잘못된 keywordData가 발견되었습니다. 건너뜁니다...`
      );
      return { title, pieChartData: [] };
    }

    // Adjust for different keywordData formats
    const pieChartData: [string, number, boolean][] = Object.entries(
      keywordData
    ).map(([key, count]) => [
      key,
      typeof count === 'number' ? count : 0,
      false,
    ]);
    return { title, pieChartData };
  });
  //test

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
    onSubmit(); // 탭이 변경될 때 onSubmit 함수 호출
  };

  const getCharacters = async () => {
    try {
      const response = await baseInstance.get('/characters', {
        params: isLoggedIn() ? {} : { user_id: user_id },
      });
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
          color='warning'
          indicatorColor='secondary'
          TabIndicatorProps={{ style: { background: '#fa7100' } }}
        >
          <Tab
            label='다른 사람들이 보는 나'
            {...a11yProps(0)}
            sx={{
              px: 1,
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'gray',
              padding: '1.2rem',
              '&.Mui-selected': {
                backgroundColor: 'transparent',

                color: '#F87217',
              },
            }}
          />
          <Tab
            label='질문별 키워드 차트'
            {...a11yProps(1)}
            sx={{
              px: 1,
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'gray',
              padding: '1.2rem',
              '&.Mui-selected': {
                backgroundColor: 'transparent',
                color: '#F87217',
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BoxLayout>
          {characters.length === 0 ? (
            <div
              style={{
                margin: '7rem auto',
                textAlign: 'center',
              }}
            >
              캐릭터가 아직 모이지 않았어요!
            </div>
          ) : (
            characters.map((character) => (
              <CharBox
                key={character.id}
                imageURL={character.result_url}
                onClick={() => goDetails(character.id)}
              />
            ))
          )}
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
  gap: 1.3rem;
  margin: 1.5rem;
`;

const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
`;
