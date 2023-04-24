import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  readonly element_number: number;
  readonly total_page: number;
  readonly current_page: number;
  readonly query: string;
}

const twClasses = {
  paginationElement: "rounded-sm border-2 border-white bg-transparent px-2 text-white cursor-pointer",
  currentPaginationElement: "rounded-sm border-2 border-white bg-grey px-2 text-white cursor-pointer",
  nextButton: "rounded-sm border-2 border-white bg-transparent px-2 text-white cursor-pointer ml-2",
  prevButton: "rounded-sm border-2 border-white bg-transparent px-2 text-white cursor-pointer mr-2",
};
export const Pagination = ({ element_number, total_page, current_page, query }: Props) => {
  const router = useRouter();

  let pageArray: number[] = [];
  let pageEnd: number[] = [];
  let pageStart: number[] = [];

  if (total_page < element_number) {
    pageArray = Array.from({ length: total_page }, (_, i) => i + 1);
  } else if (Number(current_page + element_number / 2 + 1) >= total_page) {
    pageArray = Array.from({ length: element_number }, (_, i) => total_page - (element_number - 1) + i);
  } else {
    pageStart = Array.from({ length: element_number / 2 }, (_, i) => current_page + i);
    pageEnd = Array.from({ length: element_number / 2 }, (_, i) => total_page - 2 + i); //Math.max(current_page - Math.floor(element_number / 2), 1);
  }

  const [goTo, setGoTo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void router.push(`/search?query=${query}&page=${goTo}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoTo(event.target.value);
  };

  return (
    <div className="flex items-center ">
      {!(current_page == 1) && (
        <p
          onClick={() => void router.push(`/search?query=${query}&page=${current_page - 1}`)}
          className={twClasses.prevButton}
        >
          Prev
        </p>
      )}

      {pageArray.length > 0 && (
        <div className="flex items-center gap-2">
          {pageArray.map((page) => {
            return (
              <p
                className={page == current_page ? twClasses.currentPaginationElement : twClasses.paginationElement}
                key={page}
                onClick={() => void router.push(`/search?query=${query}&page=${page}`)}
              >
                {page}
              </p>
            );
          })}
        </div>
      )}
      <div className="flex items-center gap-2">
        {pageStart.map((page) => {
          return (
            <p
              className={page == current_page ? twClasses.currentPaginationElement : twClasses.paginationElement}
              key={page}
              onClick={() => void router.push(`/search?query=${query}&page=${page}`)}
            >
              {page}
            </p>
          );
        })}
      </div>

      {current_page + element_number < total_page + 1 && <p className="text-white">................</p>}

      <div className="flex items-center gap-2">
        {pageEnd.map((page) => {
          return (
            <p
              onClick={() => void router.push(`/search?query=${query}&page=${page}`)}
              className={page == current_page ? twClasses.currentPaginationElement : twClasses.paginationElement}
              key={page}
            >
              {page}
            </p>
          );
        })}
      </div>

      {!(current_page == total_page) && (
        <p
          onClick={() => void router.push(`/search?query=${query}&page=${current_page + 1}`)}
          className={twClasses.nextButton}
        >
          Next
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Go To"
          className="ml-2 w-20 appearance-none  border-2  bg-transparent px-2  text-base text-grey  placeholder-grey shadow-sm focus:outline-none"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
