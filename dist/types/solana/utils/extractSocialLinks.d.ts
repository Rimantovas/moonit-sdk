interface Link {
    url: string;
    label: string;
}
interface ExtractedUrls {
    x?: string;
    discord?: string;
    telegram?: string;
    website?: string;
}
export declare function extractLinks(links?: Link[]): ExtractedUrls;
export {};
//# sourceMappingURL=extractSocialLinks.d.ts.map