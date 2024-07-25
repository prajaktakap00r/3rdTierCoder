import Code from "./Code";
export default function Explanation() {
  return (
    <section className="m-2 p-2 flex flex-row font-edu">
      <div className="text-sm flex flex-row m-2 p-2">
        <div className="text-black width-[1/2]">
          <h1 className="uppercase font-bold text-xl border-2 rounded-md border-yellow-400 bg-yellow-400 mt-8 p-2">
            Explanation
          </h1>
          <h1 className="uppercase font-bold text-lg border-2 rounded-md  mt-6 p-2 mb-6">
            Intuition
          </h1>

          <p className="text-pretty text-lg">
            The problem is to sort an array of integers, and we are using the
            merge sort algorithm to achieve this. Merge sort is a classic
            divide-and-conquer algorithm that splits the array into halves,
            sorts each half recursively, and then merges the sorted halves back
            together.
          </p>

          <h1 className="uppercase font-bold text-lg border-2 rounded-md  mt-6 p-2 mb-6">
            Approach
          </h1>

          <ol className="text-lg">
            <li>
              Divide: Split the array into two halves by finding the middle
              index
            </li>
            <li>
              Divide: Split the array into two halves by finding the middle
              index
            </li>
            <li>
              Divide: Split the array into two halves by finding the middle
              index
            </li>
          </ol>
        </div>
        <div className="w-[1/2] m-2 p-2">
          <Code />
        </div>
      </div>
    </section>
  );
}
