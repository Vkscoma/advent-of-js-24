import PasswordInput from "./components/PasswordInput";
import FavoriteMovieSelector from "./components/FavoriteMovieSelector";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="m-8 text-3xl">Welcome to my Advent of JS collection!</h1>
      <p className="m-4">
        Here you will find a collection of challenges I completed for the 2024
        Advent of JavaScript.
      </p>

      <section className="flex flex-col w-full justify-center items-center my-4">
        <h2 className="m-4">Challenge #1</h2>
        <PasswordInput />
      </section>

      <section className="flex flex-col w-full justify-center items-center my-4">
        <h2 className="m-4">Challenge #2</h2>
        <FavoriteMovieSelector />
      </section>
    </div>
  );
}
