import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const Input = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void router.push(`/search?query=${query}&page=1`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex rounded-lg border border-grey">
        <span className="inline-flex items-center  rounded-l-md  bg-transparent px-3 text-sm text-grey">
          <AiOutlineSearch size={30} color="white" />
        </span>
        <input
          type="text"
          id="email-with-icon"
          className="w-full flex-1 appearance-none rounded-r-lg  bg-transparent px-4 py-2 text-base  text-grey placeholder-grey shadow-sm  focus:outline-none"
          name="email"
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
