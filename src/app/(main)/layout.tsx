import Logo from '@/components/atoms/Logo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main className="flex flex-col h-screen overflow-hidden min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:pt-14 text-black">
      <nav className="w-full flex items-center justify-between h-fit">
        <Link href={'/'} className="w-[275px] h-[157px]">
          <Logo />
        </Link>
        <div className="flex-center gap-14 text-[29px]">
          <div className="uppercase flex-center gap-2">
            <Image src="/X-player.svg" width={67} height={67} alt="player X" />{' '}
            Vous
          </div>
          <div className="uppercase text-[56px]">vs</div>
          <div className="uppercase flex-center gap-2">
            <Image src="/O-player.svg" width={67} height={67} alt="player X" />{' '}
            Ia
          </div>
        </div>
        <div className="flex-center gap-[73px]">
          <Image src="/bulb.svg" width={87} height={104} alt="bulb icon" />
          <Image src="/mg-flag.svg" width={115} height={89} alt="MG flag" />
        </div>
      </nav>
      {children}
    </main>
  );
};

export default RootLayout;
