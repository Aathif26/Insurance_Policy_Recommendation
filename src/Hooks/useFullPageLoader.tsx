import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Loader } from "../Components/UI/Loader/Loader";
const PageLoaderContext = React.createContext({
  onOpenLoader: () => {},
  onCloseLoader: () => {},
  loading: false,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useFullScreenLoader = () => {
  const data: {
    onOpenLoader: () => void;
    onCloseLoader: () => void;
    loading: boolean;
  } = React.useContext(PageLoaderContext);
  return data;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FullScreenLoaderContextProvider({ children }: any) {
  const [open, setClose] = useState(false);

  const onOpenLoader = () => {
    setClose(true);
  };
  const onCloseLoader = () => {
    setClose(false);
  };
  return (
    <PageLoaderContext.Provider
      value={{ loading: open, onOpenLoader, onCloseLoader }}
    >
      {children}
      {open && (
        <Box as={OverLay}>
          <Loader/>
        </Box>

      )}
    </PageLoaderContext.Provider>
  );
}

const OverLay = styled.div(() => ({
  position: "absolute",
  zIndex: 10000,
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  height: "100vh",
}));
