import platforms from "../data/platforms";

export interface PlatForm {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data: platforms, isLoading: false, error: null})

export default usePlatforms;