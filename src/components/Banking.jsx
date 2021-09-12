import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteAccount, deposit, interest, toggleAccountState, withdraw } from "../actions/BankingActions";

function Banking() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const handleDeposit = () => {
    dispatch(deposit(amount));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(amount));
  };

  const handleInterest = () => {
    dispatch(interest());
  };

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };

    const handleChangeType = () => {
        dispatch(toggleAccountState());
  };

  return (
    <StyledContainer>
      <div className="title-container">
        <h4>Banking actions</h4>
      </div>
      <div className="input-container">
        <input
          type="number"
          className="input-item"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div className="button-container">
        <StyledButton onClick={handleDeposit} primary>
          Deposit
        </StyledButton>
        <StyledButton onClick={handleWithdraw} primary>
          Withdraw
        </StyledButton>
        <StyledButton onClick={handleInterest} primary>
          Collect interest
        </StyledButton>
        <StyledButton onClick={handleDeleteAccount}>
          Delete account
        </StyledButton>
        <StyledButton onClick={handleChangeType}>
          Change account type
        </StyledButton>
        {/* <Button onPress={handleDeposit}>Deposit</Button>
        <Button>Withdraw</Button>
        <Button>Collect interest</Button>
        <Button>Delete account</Button>
        <Button>Change account type</Button> */}
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  background-color: azure;
  padding: 10px;
  flex-direction: column;

  .title-container {
    h4 {
      color: #077272;
    }
  }
  input-container {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #8a8a8a;

    .input-item {
      height: 30px;
    }
  }
  button-container {
  }
`;

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Banking;
