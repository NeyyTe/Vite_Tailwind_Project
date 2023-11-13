// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <div className="mx-auto max-w-7xl text-center mt-20 ">
      <input
        className="h-5dvh w-1/4 p-4  rounded-lg"
        type="text"
        placeholder="Rechercher votre repas ici... "
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          console.log(searchInput);
        }}
      />
    </div>
  );
};
export default SearchBar;
