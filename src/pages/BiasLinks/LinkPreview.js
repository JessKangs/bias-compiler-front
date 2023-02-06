import React from "react";
import styled from "styled-components";
import Microlink from "@microlink/react";

export const Story = ({ url = "https://microlink.io", ...props }) => (
  
    <Box mt={4}>
        <MyCustomCard url={url}  {...props}></MyCustomCard>
    </Box>
  );

  const Box = styled.div`
    
  `

  const MyCustomCard = styled(Microlink)`
    border-radius: 7px;
    background-color: rgba(0,0,0,0.1);
    width: 460px;
    height: 120px;

    &:hover {
      background-color: rgba(30, 139, 195, 0.6);
    }


  `;

