import { Button, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { SupabaseTest } from "./lib/spabaseTest";

function App() {
  useEffect(() => {
    SupabaseTest();
  }, []);

  return (
    <>
      <h1>h1タイトル</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
