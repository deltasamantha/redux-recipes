import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function AccountStatus() {
    const accountStatus = useSelector((store) => store.banking.isActive);
    // const balance = useSelector(store => store.balance);
  return (
    <StyledAccountStatus>
      <h1 className="account-balance-amount">{accountStatus ? "Active account":"Deactivated account"}</h1>
    </StyledAccountStatus>
  );
}

const StyledAccountStatus = styled.div`
  margin: 30px;
  .account-balance-amount {
    color: #7c5774;
    margin-left: 50px;
  }
`;
export default AccountStatus;
