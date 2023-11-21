import { Jumbotron } from "../components/Jumbotron";
import SkillList from "../components/SkillList";
import StudiesTrack from "../components/studiestrack";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <StudiesTrack />
      <SkillList />
    </>
  );
};

export default Home;
