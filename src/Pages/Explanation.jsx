import SearchIcon from "@mui/icons-material/Search";
export default function Explanation() {
  return (
    <div className="h-wrap bg-black text-white font-raleway">
      <main className="flex flex-col items-center mx-[6.3rem]">
        <div className="my-4 relative w-full max-w-md mb-[6.3rem] flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter leetcode question number"
            className="w-full px-5 py-5 pr-10 rounded-[15px] text-black border-gray-300 focus:border-[#EBA340] focus:ring-4 focus:ring-[#EBA340] focus:outline-none"
          />
          <SearchIcon className="absolute right-2  text-black" />
        </div>

        <section className="bg-white bg-opacity-15 px-[4.5rem] rounded-lg text-center w-full max-h-[calc(100vh-3rem)] overflow-auto">
          <h2 className="text-[2.3rem] font-bold text-yellow-400 mt-[3.8rem] mb-[1.6rem] font-titillium ">
            Approach
          </h2>
          <ul className="mt-2 list-decimal list-inside text-left font-redHatDisplay leading-normal text-left text-[1.3rem] mb-[1.6rem] list-disc pl-5 space-y-2">
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
          </ul>
        </section>
      </main>
    </div>
  );
}
