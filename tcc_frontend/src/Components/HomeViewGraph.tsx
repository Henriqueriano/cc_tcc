
// https://mui.com/x/react-charts/radar/
// bun add @mui/x-charts @mui/material @emotion/react @emotion/styled
import {RadarChart} from '@mui/x-charts/RadarChart';
import Box from '@mui/material/Box';
function HomeViewGraph() 
{
    return (
        <Box  sx=  {{width: '100%'}}>
        <RadarChart
            height={300}
            series={[{ label: 'Categoryes', data: [120, 98, 86, 99, 85, 65] }]}
            radar={{
                metrics: [
                { name: 'Math', max: 120 },
                { name: 'Chinese', max: 120 },
                { name: 'English', max: 120 },
                { name: 'Geography', max: 120 },
                { name: 'Physics', max: 120 },
                { name: 'History', max: 120 },
                ],
            }}
        />  
        </Box>
    )
}

export default HomeViewGraph;
