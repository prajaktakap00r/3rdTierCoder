import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Code = () => {
  const codeString = `
  class Solution {

    void merge(vector<int>& nums, int low, int mid, int high) {
        vector<int> temp;
        int left = low;
        int right = mid + 1;
        while (left <= mid && right <= high){
            if(nums[left]<=nums[right]){
                temp.push_back(nums[left++]);
            }else{
                temp.push_back(nums[right++]);
            }
        }
        while(left<=mid){
            temp.push_back(nums[left++]);
        }
        while(right<=high){
            temp.push_back(nums[right++]);
        }
        for(int i=low;i<=high;i++){
            nums[i]=temp[i-low];
        }
    }
    void mergeSort(vector<int>& nums, int low, int high) {
        if (low == high)
            return;
        int mid = (low + high) / 2;
        mergeSort(nums, low, mid);
        mergeSort(nums, mid + 1, high);
        merge(nums, low, mid, high);
    }

public:
    vector<int> sortArray(vector<int>& nums) {
        mergeSort(nums, 0, nums.size() - 1);
        return nums;
    }
};
  `;

  return (
    <div className="mx-[4rem]">
      <section className="flex flex-col md:flex-row w-full font-raleway ">
        <div className="bg-white bg-opacity-15 p-4 rounded-lg lg:w-[2/3] md:w-2/3 max-h-[calc(100vh-3rem)] overflow-auto  mt-[3.8rem] px-5">
          <h2 className="text-[1.7rem] font-bold text-yellow-400 mt-[1.6rem] mb-[1.6rem] font-titillium text-center">
            Sort an Array
          </h2>

          <SyntaxHighlighter
            language="cpp"
            style={docco}
            className="font-unna text-sm"
          >
            {codeString}
          </SyntaxHighlighter>
        </div>

        <div className="lg:w-[1/3] md:w-1/3 md:pl-4 flex flex-col items-center md:mt-0 lg:m-6 ">
          <iframe
            className="mt-[3.8rem] "
            width="100%"
            height="50%"
            src="https://www.youtube.com/embed/pVuV87o9438"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="flex flex-col items-center py-20 w-full">
            <span className=" text-[0.5rem] lg:text-4xl font-regular text-white font-montserrat my-auto">
              3rd Tier -{" "}
              <span className="text-yellow-300 font-bold">Coder</span>
            </span>
            <button className="mt-[1.9rem] bg-red-600 px-4 py-2 rounded-md text-white flex items-center">
              <YouTubeIcon className="mr-2" /> Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Code;
