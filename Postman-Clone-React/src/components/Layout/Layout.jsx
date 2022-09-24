import React from 'react';
import Navbar from './Navbar/Navbar';
import Request from '../Workspace/Request/RequestPanel';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className='flex max-w-6xl min-h-screen pt-[86px] mx-auto px-5 bg-white '>
          <div className='mx-auto w-full'><Request/></div>
        </div>
      </main>
    </>
  );
}
