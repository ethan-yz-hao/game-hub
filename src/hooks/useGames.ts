import useData from "./useData";
import {Genre} from "./useGenres";
import {PlatForm} from "./usePlatForm";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: PlatForm }[];
    metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;