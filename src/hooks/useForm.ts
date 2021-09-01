import { useState } from 'react';

interface UseFormI {
  form: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

const useForm = (initialValues: Record<string, string>): UseFormI => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name: string, value: string) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  return { form, onChange };
};

export default useForm;