"use client"
import { useEffect, useState } from 'react'
import { API, Game, Games } from '../../../const';
import { useParams } from 'next/navigation'

interface StringIndexed {
    [key: string]: string | string[];
}
type Params = { provider: string, seo_title: string };

function findGame(games: Game[], game: Params): Game | undefined {
    const filters: Partial<StringIndexed>[] = [
        { seo_title: game.seo_title, provider: game.provider },
        { seo_title: game.seo_title, categories: game.provider },
    ];

    for (const filter of filters) {
        const result = games.find((g) => {
            return Object.entries(filter).every(([key, value]) =>
                key === 'categories'
                    ? value !== undefined && Array.isArray(g[key as keyof Game]) && g[key as keyof Game].includes(value as string)
                    : g[key as keyof Game] === value
            );
        });

        if (result !== undefined) return result;
    }

    return undefined;
}

export default function Page() {
    const params = useParams<Params>()
    const [loading, setLoading] = useState(true);
    const [game, setGame] = useState<Game | undefined>(undefined);
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                const concreteGame = findGame(data, params)
                setGame(concreteGame)
                setLoading(false)
            })
    }, [])

    if (loading) return 'Loading!';
    if (!game) return 'No game found!';
    return (
        <div className="mx-auto mt-6 max-autol sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`} alt={game.seo_title} className="h-full w-full object-cover object-center" />
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-white-900 sm:text-3xl">Title: {game.title}</h1>
                <h2 className="text-xl font-bold tracking-tight text-white-900 sm:text-2xl">Provider: {game.provider}</h2>
                <h2 className="text-xl font-bold tracking-tight text-white-900 sm:text-2xl">Categories: {game.categories.map((category, index) => <span key={category}>{category}{index < game.categories.length - 1 && ', '} </span>)}</h2>
            </div>
        </div>

    )
}   