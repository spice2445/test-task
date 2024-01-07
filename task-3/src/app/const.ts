export const API = 'https://nextjs-test-pi-hazel-56.vercel.app/data/games.json';

export type Game = {
    identifier: string; // уникальный идентификатор игры
    seo_title: string; // уникальный SEO-ключ игры
    title: string; // Текстовое название игры
    provider: string; // ID провайдера игры
    categories: string[]; // Список ID категорий, в которые входит игра
}
export type Games = Game[];