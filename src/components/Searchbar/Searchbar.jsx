import { TbWorldSearch } from 'react-icons/tb';

export const Searchbar = ({ onSubmitQuery }) => {
  return (
    <div>
      <form onSubmit={onSubmitQuery}>
        <button type="submit">
          <TbWorldSearch />
        </button>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};
