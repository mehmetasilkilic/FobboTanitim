import styled, { css } from "styled-components";
import Hakkimizda from "./components/Hakkimizda";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Kullanim from "./components/Kullanim";
import Uygulama from "./components/Uygulama";
import İletisim from "./components/İletisim";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(80% 0, 100% 0%, 100% 100%, 65% 100%);
  background-color: #9c1f19;
`;

const UygulamaShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 65% 0, 35% 100%, 0 100%);
  background-color: #fddebb;
`;

const KullanimShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0, 35% 0, 65% 100%, 100% 100%);
  background-color: #ea6109;
`;

const HakkimizdaShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 65% 0, 25% 100%, 0 100%);
  background-color: #32804c;
`;

const App = () => {

  return(
    <>
   <Container>
    <Navbar />
    <Intro />
    <IntoShape />
    </Container>
    <Container>
      <Uygulama />
      <UygulamaShape />
    </Container>
    <Container>
      <Kullanim />
      <KullanimShape />
    </Container>
    <Container>
      <Hakkimizda />
      <HakkimizdaShape />
    </Container>
    <Container>
      <İletisim />
      <Footer />
    </Container>
    </>
  )
};

export default App;