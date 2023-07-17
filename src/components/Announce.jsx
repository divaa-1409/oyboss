import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
`;

const Announce = () => {
  return (
    <div>
        <Container> This is the mega Deal now 80% off </Container>
    </div>
  );
}

export default Announce;
