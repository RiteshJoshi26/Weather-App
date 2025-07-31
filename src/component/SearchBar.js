export default function SearchBar({ change, enter, text }) {
  return (
    <>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        value={text}
        onChange={change}
        onKeyDown={enter}
      />
    </>
  );
}
