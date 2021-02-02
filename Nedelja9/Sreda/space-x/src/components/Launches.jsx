import styled from 'styled-components'
import Launch from './Launch'

const StyledLaunches = styled.div`
    margin: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
`;

const Launches = ({ launches }) => {
    return (
        <StyledLaunches>
            {launches.map(launch => <Launch key={launch.id} launch={launch} />)}
        </StyledLaunches>
    )
}

export default Launches
