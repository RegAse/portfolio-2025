export interface Project {
    id: number,
    title: string,
    description: string;
    cover: string;
    video: string;
    "live-link": string;
    "code-link": string;
    tags: string [];
    group: string;
    "highlight-text": boolean;
    images: string[];
}