function FavoriteMovieSelector() {
  return (
    <form>
      <input
        type="search"
        name="search"
        className="bg-gray-200 py-4 px-20 rounded-lg outline-none"
      />
      <ul>
        <li value="1">Movie 1</li>
        <li value="2">Movie 2</li>
        <li value="3">Movie 3</li>
      </ul>
    </form>
  );
}

export default FavoriteMovieSelector;
