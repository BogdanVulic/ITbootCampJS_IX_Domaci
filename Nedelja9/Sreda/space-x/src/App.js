import { getLaunches, getCompany } from './components/service';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from './components/Select';
import Launches from './components/Launches';

const StyledHeader = styled.h1`
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        font-size 70px;
        margin-bottom: 10px;
    `;


const App = () => {
    
    const [launches, setLaunches] = useState([]);
    const [year, setYear] = useState([]);
    const [company, setCompany] = useState('');

    useEffect(() => {
        getLaunches().then(res => {
            setLaunches(res.data);
        })
        getCompany().then(res => {
            setCompany(res.data.name)
        })
    },[])
    return (
        <div className="App">
            <StyledHeader>{company}</StyledHeader>
            <Select launches={launches} setYear={setYear}/>
            <Launches launches={launches.filter(launch => launch.date_utc.startsWith(year))} />
        </div>
    )
}

export default App
