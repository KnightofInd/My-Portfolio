import Image from 'next/image';
import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
        quality={100}
        sizes="100vw"
      />
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" /> 
    </div>
  );
}