import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/Alstom_logo.svg.png"
      alt="Alstom Logo"
      width={130}
      height={30}
      priority
    />
  );
}
