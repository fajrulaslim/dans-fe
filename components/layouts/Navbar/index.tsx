import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <nav className="bg-blue-500 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl"><span className='font-bold'>GitHub</span> <span className="font-light">Jobs</span></h1>
          <Link href="/auth/logout">
            <span className="text-white">Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default index;
