"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractLinks = extractLinks;
function extractLinks(links) {
    if (!links || links.length === 0) {
        return {};
    }
    const result = {};
    const discordPattern = /discord\.gg|discord\.com\/invite/i;
    const telegramPattern = /t\.me|telegram\.me|telegram\.org/i;
    const xPattern = /twitter\.com|x\.com/i;
    const websitePattern = /^https?:\/\/(?!discord\.gg|discord\.com\/invite|t\.me|telegram\.me|telegram\.org|twitter\.com|x\.com)/i;
    const discordLink = links.find((link) => discordPattern.test(link.url));
    if (discordLink) {
        result.discord = discordLink.url;
    }
    const telegramLink = links.find((link) => telegramPattern.test(link.url));
    if (telegramLink) {
        result.telegram = telegramLink.url;
    }
    const xLink = links.find((link) => xPattern.test(link.url));
    if (xLink) {
        result.x = xLink.url;
    }
    const websiteLink = links.find((link) => websitePattern.test(link.url));
    if (websiteLink) {
        result.website = websiteLink.url;
    }
    return result;
}
