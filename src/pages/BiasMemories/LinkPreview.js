import React from "react";
import styled from "styled-components";
import Microlink from "@microlink/react";

export const Story = ({ url = "https://microlink.io", ...props }) => (
  
    <Box mt={4}>
        <MyCustomCard url={url} {...props}></MyCustomCard>
    </Box>
  );

  const Box = styled.div`
    width: 500px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  const MyCustomCard = styled(Microlink)`
    border-radius: 7px;
    background-color: rgba(0,0,0,0.1);
    width: 500px;
    height: 115px;

    &:hover {
      background-color: rgba(163,92,110, 0.6);
    }
  `;

