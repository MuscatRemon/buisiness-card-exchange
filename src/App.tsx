import { useEffect } from "react";
import { SupabaseTest } from "./lib/spabaseTest";
import { BrowserRouter, Route, Routes } from "react-router";
import { Card } from "./components/pages/cards/Card.tsx";
import { Box } from "@chakra-ui/react";

function App() {
  useEffect(() => {
    SupabaseTest();
  }, []);

  return (
    <Box w="100%" h="100%" backgroundColor="#c5efff">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="cards">
            <Route index element={<Card />} />
            <Route path=":id" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
