import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className='flex min-h-screen pt-[86px] mx-auto px-5 bg-white pt-3 '>
          <div className='mx-auto w-full layout row'>{children}</div>
        </div>
      </main>
    </>
  );
}
