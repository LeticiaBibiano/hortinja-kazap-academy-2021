import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { Home } from './pages'
import { NewCategoryOpen } from "./pages/NewCategoryOpen";
 
function App() {
  return (

    <ChakraProvider>

      <Home/>

      <NewCategoryOpen></NewCategoryOpen>
      
    </ChakraProvider>  

  );
}

export default App;
