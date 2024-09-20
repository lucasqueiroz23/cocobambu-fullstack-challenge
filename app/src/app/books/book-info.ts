export interface BookInfo {
    kind: string;
    items: Volume[];
    totalItems: number;
}

export interface Volume {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo?: VolumeInfo
    saleInfo?: SaleInfo
}

export interface VolumeInfo {
    title: string
    subtitle: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: IndustryIdentifier[]
    pageCount: string
    dimensions: Dimensions
    printType: string
    mainCategory: string
    categories: string[]
    averageRating: string
    ratingsCount: string
    contentVersion: string
    imageLinks: ImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

export interface IndustryIdentifier {
    type: string
    identifier: string
}

export interface Dimensions {
    height: string
    width: string
    thickness: string
}

export interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
    small: string
    medium: string
    large: string
    extraLarge: string
}

export interface SaleInfo {
    country: string
    saleability: string
    onSaleDate: string
    isEbook: string
    buyLink: string
}

export interface Book {
    id: string;
    info: Volume;
    review: Review;
}

export interface Review {
    tags: string[];
    note: string;
    rating: number;
    favorite: boolean;
}