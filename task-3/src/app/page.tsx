'use client'

import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { API, Games } from './const';


const Container = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    {children}
  </div>
);

const GameList = ({ games }: { games: Games }) => (
  <Container>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {games.map((game) => (
        <Link href={`/games/${game.provider}/${game.seo_title}`} key={game.identifier} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`} alt={game.identifier} className="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{game.title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{game.provider}</p>
        </Link>
      ))}
    </div>
  </Container>
);

export default function Page() {
  const [games, setGames] = useState<Games>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setGames(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return (
    <Container>
      <div className="text-3xl text-center text-gray-500 center hover:text-gray-600">Loading...</div>
    </Container>
  );
  if (!games) return (
    <Container>
      <div className="text-3xl text-center text-gray-500 center hover:text-gray-600">No games</div>
    </Container>
  );

  return <GameList games={games} />
}
