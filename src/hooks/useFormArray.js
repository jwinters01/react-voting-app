import { useState } from "react";

export const useFormArray = (initialForm) => {

  const [ form, setForm ] = useState(initialForm);

  const change = e => {
    
    setForm([
      ...form,
      e.target.value,
    ]);
  };

  const resetForm = () => setForm(initialForm);

  return [ form, change, resetForm ];

};