import { BrowserRouter, Route, Routes } from "react-router";
import { Card } from "./components/pages/cards/Card.tsx";
import { Box } from "@chakra-ui/react";
import { Top } from "./components/pages/Top.tsx";
import { Register } from "./components/pages/Register.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

function App() {
  return (
    <Box w="100%" h="100%" backgroundColor="#c5efff">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="register" element={<Register />} />
          <Route path="cards">
            <Route index element={<Card />} />
            <Route path=":id" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </Box>
  );
}

export default App;
