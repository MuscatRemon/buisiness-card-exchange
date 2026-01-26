import { Button, HStack } from "@chakra-ui/react";
import supabase from "./utils/supabase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const supabaseTest = async () => {
      const { data, error } = await supabase.from("users").select();
      if (error) {
        console.error(error);
        return;
      }
      console.log(data);
    };

    supabaseTest();
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
