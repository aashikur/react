import React, { use,PureComponent } from 'react';
import { Bar, BarChart, Legend, XAxis, YAxis , Tooltip} from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataResponse = use(marksPromise)
    const marksData = marksDataResponse.data;
    const marksDataMod = marksData.map(item => {
        const student = {
            name : item.name,
            roll : item.roll,
            physics : item.marks.physics,
            chemistry: item.marks.chemistry,
            math : item.marks.math,
        } 

        let avg = student.chemistry + student.math + student.physics
            avg = (avg/3 ) 
        student.avg = parseFloat(avg.toFixed(2));
        return student;
    })
    console.log(marksData)
    console.log(marksDataMod)
    return (
        <div>
            <BarChart
                data={marksDataMod}
                width={500}
                height={300}                
            >
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey='physics' fill={'#45aa45'}></Bar>
                <Bar dataKey='chemistry' fill={'#ffaa45'}></Bar>
                <Bar dataKey='math' fill={'#ffaadd'}></Bar>


            </BarChart>
            
        </div>
    );
};

export default MarksChart;