'use client';

import Cards from '@/components/Cards';
import Graph from '@/components/Graph';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import * as React from 'react';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
}
