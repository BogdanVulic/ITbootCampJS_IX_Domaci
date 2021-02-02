import styled from 'styled-components';

const StyledLaunch = styled.div`
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.4 );
    color: white;
`;

const Launch = ({ launch }) => {
    return (
        <StyledLaunch>
            <img src={launch.links.patch.small}/>
            <p>{launch.name}</p>
        </StyledLaunch>
    )
}

export default Launch
