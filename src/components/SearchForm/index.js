import React from "react";
import { useGlobalContext } from "../../context";
import {
  FormContainer,
  FormSearch,
  FormControl,
  Label,
  Input,
  Submit,
  InputAndSubmit,
} from "./SearchFormComponents";

const SearchForm = () => {
  const { handleChange, movie, handleSubmit } = useGlobalContext();

  return (
    <FormContainer>
      <FormSearch onSubmit={(e) => handleSubmit(e)}>
        <FormControl>
          <Label htmlFor="name">Search Movie</Label>
          <InputAndSubmit>
            <Input
              type="text"
              id="name"
              placeholder="Enter a movie name (eg. Star Wars)"
              value={movie}
              onChange={(e) => handleChange(e)}
            />
            <Submit type="submit" text="Search" />
          </InputAndSubmit>
        </FormControl>
      </FormSearch>
    </FormContainer>
  );
};

export default SearchForm;
