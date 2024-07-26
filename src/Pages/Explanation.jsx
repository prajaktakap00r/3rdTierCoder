import SearchIcon from "@mui/icons-material/Search";
export default function Explanation() {
  return (
    <div className="h-wrap bg-black text-white font-raleway">
      <main className="flex flex-col items-center px-4">
        <div className="my-4 relative w-[25rem] max-w-md">
          <input
            type="text"
            placeholder="sortArray"
            className="w-full p-2 pr-10 rounded-md text-black"
          />
          <SearchIcon className="absolute right-2 top-2 text-black" />
        </div>

        <section className="bg-gray-800 p-4 rounded-lg text-center w-full max-w-7xl m-5">
          <h2 className="text-2xl font-bold text-yellow-400 p-2 m-2">
            Approach
          </h2>
          <ol className="mt-2 list-decimal list-inside text-left ">
            <li className="p-2">
              The main function <code>sortArray</code> contains a nested
              function <code>quick_sort</code>, which is a common pattern to
              encapsulate the recursive logic within the sorting function and
              allows us to use variables from the outer scope.
            </li>

            <li className="p-2">
              <code>quick_sort</code> takes two arguments, <code>l</code> and{" "}
              <code>r</code>, which are the indices of the left and right
              boundaries of the sub-array that it needs to sort.
            </li>
            <li className="p-2">
              The termination condition for the recursion is when the left
              boundary <code>l</code> is greater than or equal to the right
              boundary <code>r</code>. At this point, the sub-array has zero or
              one element and is considered sorted.
            </li>
            <li className="p-2">
              The main function <code>sortArray</code> contains a nested
              function <code>quick_sort</code>, which is a common pattern to
              encapsulate the recursive logic within the sorting function and
              allows us to use variables from the outer scope.
            </li>
            <li className="p-2">
              <code>quick_sort</code> takes two arguments, <code>l</code> and{" "}
              <code>r</code>, which are the indices of the left and right
              boundaries of the sub-array that it needs to sort.
            </li>
            <li className="p-2">
              The termination condition for the recursion is when the left
              boundary <code>l</code> is greater than or equal to the right
              boundary <code>r</code>. At this point, the sub-array has zero or
              one element and is considered sorted.
            </li>
            <li className="p-2">
              The main function <code>sortArray</code> contains a nested
              function <code>quick_sort</code>, which is a common pattern to
              encapsulate the recursive logic within the sorting function and
              allows us to use variables from the outer scope.
            </li>
            <li className="p-2">
              <code>quick_sort</code> takes two arguments, <code>l</code> and{" "}
              <code>r</code>, which are the indices of the left and right
              boundaries of the sub-array that it needs to sort.
            </li>
            <li className="p-2">
              The termination condition for the recursion is when the left
              boundary <code>l</code> is greater than or equal to the right
              boundary <code>r</code>. At this point, the sub-array has zero or
              one element and is considered sorted.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
