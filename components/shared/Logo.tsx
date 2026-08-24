'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      {/* Render only the complete brand logo image - larger size fit */}
      <div className="relative flex items-center justify-center w-36 h-9 sm:w-40 sm:h-10 md:w-48 md:h-12 transition-all duration-300 group-hover:scale-[1.02]">
        <Image
          src="/reply-tentra-logo.webp"
          alt="ReplyTentra"
          fill
          unoptimized
          sizes="(max-width: 640px) 144px, (max-width: 768px) 160px, 192px"
          style={{ width: '100%', height: '100%' }}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
