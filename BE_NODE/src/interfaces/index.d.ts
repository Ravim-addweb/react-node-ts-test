export interface QueryParams {
    page: number;
    per_page: number;
    tags?: string;
}

export interface ImageInfo {
    title: string;
    link: string;
    media: {
        m: string;
    };
    date_taken: string;
    description: string;
    published: string;
    author: string;
    author_id: string;
    tags: string;
}
