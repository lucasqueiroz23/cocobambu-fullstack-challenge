export interface BookInfo {
    id: string;
    volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    printedPageCount: number;
    readingModes: ReadingModes;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
}

export interface ReadingModes {
    text: boolean;
    image: boolean;
}

export interface Dimensions {
    height: string;
    width: string;
    thickness: string;
}