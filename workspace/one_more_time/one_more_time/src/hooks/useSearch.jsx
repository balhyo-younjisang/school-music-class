import { useState } from "react";

export const useSearch = () => {
  const [searckKey, setSearchKey] = useState();

  const handleChange = (event) => {
    setSearchKey(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searckKey);
  };

  return {
    searckKey,
    handleChange,
    handleSubmit,
  };
};
