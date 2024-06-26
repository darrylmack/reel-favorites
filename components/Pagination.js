import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid/'

const Pagination = ({
  currentPage,
  totalResults,
  resultsPerPage,
  onNextPage,
  onPreviousPage,
  totalPages
}) => {
  return (
    <nav
      className="flex items-center justify-between px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      {currentPage > 1 ? (
        <button
          onClick={onPreviousPage}
          className="border border-w-2 bg-gray-800 border-gray-200 py-2 px-4 rounded-md mr-4 text-white  hover:bg-gray-200 hover:text-gray-900"
        >
          Previous
        </button>
      ) : (
        <div className="py-2 px-4 mr-4"></div> // Placeholder element
      )}
      {currentPage < totalPages && (
        <button
          onClick={onNextPage}
          className="border border-w-2 bg-gray-800 border-gray-200 py-2 px-4 rounded-md mr-4 text-white  hover:bg-gray-200 hover:text-gray-900"
        >
          Next
        </button>
      )}
    </nav>
  )
}

export default Pagination
