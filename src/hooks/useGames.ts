import useData from "./useData";
import {PlatForm} from "./usePlatForm";
import {GameQuery} from "../App";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: PlatForm }[];
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
    useData<Game>('/games', {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id
            }
        },
        [
            gameQuery
        ]
    );

export default useGames;