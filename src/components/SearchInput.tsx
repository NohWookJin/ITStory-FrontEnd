import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';

//hooks
import usePosts from '../hooks/api/usePosts';

//css
import styled from 'styled-components';

interface Props {
  initialValue?: string;
}

export default function SearchInput({ initialValue = '' }: Props) {
  const [search, setSearch] = useState(initialValue);
  const { refreshSearch } = usePosts();
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    refreshSearch(search);
    navigate(`/search/${search}`);
    if (search == '') {
      navigate('/');
    }
  }

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input value={search} onChange={onChangeSearch} />
        <Button></Button>
      </Form>
    </>
  );
}
const Form = styled.form`
  margin-right: 0.3rem;
`;
const Input = styled.input`
  border: none;
  padding: 0.3rem 0rem;
  padding-left: 0.1rem;
  border-radius: 0.3rem;
  width: 20vw;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 1150px) {
    width: 30vw;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Button = styled.button`
  display: none;
`;
