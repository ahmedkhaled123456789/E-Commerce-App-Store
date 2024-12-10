/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";
import './Pagination.css';  

const Pagination = ({ pageCount, onPress }) => {
    const handlePageClick = (data) => {
        onPress(data.selected + 1);
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="Prev"
            containerClassName="flex items-center justify-center space-x-2 mt-4"
            pageClassName="group"
            pageLinkClassName="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 focus:ring focus:ring-indigo-300"
            previousClassName="group"
            nextClassName="group"
            previousLinkClassName="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 focus:ring focus:ring-indigo-300"
            nextLinkClassName="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 focus:ring focus:ring-indigo-300"
            breakClassName="group"
            breakLinkClassName="px-3 py-1 border border-gray-300 rounded-md text-gray-600"
            activeClassName="bg-indigo-500 text-white border-indigo-500"
        />
    );
};

export default Pagination;
