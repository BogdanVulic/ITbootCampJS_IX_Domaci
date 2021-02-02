import styled from "styled-components"

const StyledSelect = styled.select`
    border-radius: 3px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 10px;
`;

const Select = ({ launches, setYear }) => {

    let years = Array(...new Set(launches.map(launch => launch.date_utc.split('-')[0])))
    console.log(years)

    return (
        <StyledSelect onChange={(e) => {
            setYear(e.target.value);
        }}>
            <option value=''>All</option>
            {years.map(year => <option id="option" key={year} value={year} >{year}</option>)}
        </StyledSelect>
    )
}

export default Select
