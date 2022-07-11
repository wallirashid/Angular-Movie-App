export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    revenue:number,
    runtime:number,
    status:string,
    vote_average: number,
    vote_count: number,
    genres:Generes[]
}
export interface DataFromBackend{
    page:number,
    results:Movie[],
    total_results:number,
    total_pages:number
}
export interface Generes{
    id:number,
    name:string
}
export interface MovieVideoDto{
    id:number,
    results:MovieVideo[]
}
export interface MovieVideo {
    key:string,
    site:string,
}

export interface ImageDetail{
    id:number,
    backdrops:BackdropsImageRatio[],
    posters:PostersImageRatio[]
}

export interface BackdropsImageRatio{
    aspect_ratio?:number,
    file_path?:string,
    height?:number,
    width?:number
}

export interface PostersImageRatio{
    aspect_ratio?:number,
    file_path?:string,
    height?:number,
    width?:number
}

export interface MovieCredits{
    cast:{
        name:string,
        profile_path:string
    }[]
}