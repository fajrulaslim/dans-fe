import React from 'react';

const SearchForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <form className="flex flex-row items-end space-x-4">
        <div className="w-1/3">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Job Description</label>
          <input id="description" type="text" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="w-1/3">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
          <input id="location" type="text" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="w-1/6 flex items-center mb-3">
          <input id="fullTime" type="checkbox" className="form-checkbox h-5 w-5 text-gray-700" />
          <label htmlFor="fullTime" className="ml-2 block text-gray-700 font-bold">Full Time Only</label>
        </div>
        <div className="w-1/6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
