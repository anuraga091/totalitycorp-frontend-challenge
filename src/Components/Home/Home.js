import styled from "styled-components";
import Header from "./Header";
import LeftSection from "./LeftSide/LeftSection";
import MiddleSection from "./Middle/MiddleSection";
import RightSection from "./RightSide/RightSection";

const Home = () => {
  return (
    <Container>
      <Header/>
      <Layout>
        <LeftSection/>
        <MiddleSection/>
        <RightSection />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Layout = styled.div`

  display: grid;
  grid-template-areas: "leftsection middlesection rightsection";
  grid-template-columns: minmax(0, 2.2fr) minmax(0, 5fr) minmax(100px, 3fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 200px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin: 25px 0;
  }
`;

export default Home;