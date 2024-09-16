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
    volumeInfo: VolumeInfo
    userInfo: UserInfo
    saleInfo: SaleInfo
    accessInfo: AccessInfo
    searchInfo: SearchInfo
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

export interface UserInfo {
    review: string
    readingPosition: string
    isPurchased: string
    isPreordered: string
    updated: string
}

export interface SaleInfo {
    country: string
    saleability: string
    onSaleDate: string
    isEbook: string
    listPrice: ListPrice
    retailPrice: RetailPrice
    buyLink: string
}

export interface ListPrice {
    amount: string
    currencyCode: string
}

export interface RetailPrice {
    amount: string
    currencyCode: string
}

export interface AccessInfo {
    country: string
    viewability: string
    embeddable: string
    publicDomain: string
    textToSpeechPermission: string
    epub: Epub
    pdf: Pdf
    webReaderLink: string
    accessViewStatus: string
    downloadAccess: DownloadAccess
}

export interface Epub {
    isAvailable: string
    downloadLink: string
    acsTokenLink: string
}

export interface Pdf {
    isAvailable: string
    downloadLink: string
    acsTokenLink: string
}

export interface DownloadAccess {
    kind: string
    volumeId: string
    restricted: string
    deviceAllowed: string
    justAcquired: string
    maxDownloadDevices: string
    downloadsAcquired: string
    nonce: string
    source: string
    reasonCode: string
    message: string
    signature: string
}

export interface SearchInfo {
    textSnippet: string
}

