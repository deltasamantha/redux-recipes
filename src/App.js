import styled from "styled-components";
import AccountStatus from "./components/AccountStatus";
import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";

function App() {
  return (
    <AppContainer>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: "100%";
  background-color: azure;
  h1 {
    font-size: 1.5em;
    /* text-align: center; */
    color: blueviolet;
  }
`;

export default App;
