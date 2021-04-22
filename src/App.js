import React from "react";
import SearchForm from "./components/SearchForm";
import Movies from "./components/Movies";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <Movies />
    </>
  );
};

export default App;
