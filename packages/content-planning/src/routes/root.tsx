import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1280px;
  margin: 0 auto;
  display: block;
`;

const Root = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Root;
