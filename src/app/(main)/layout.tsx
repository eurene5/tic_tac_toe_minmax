import React from 'react';

const RootLayout = () => {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <nav>
        <h1 className="text-4xl font-bold">
          <span className="text-[#D84444]">tic</span>{' '}
          <span className="text-[#36269F]">tac</span>{' '}
          <span className="text-[#858585]">toe</span>
        </h1>
      </nav>
    </main>
  );
};

export default RootLayout;
