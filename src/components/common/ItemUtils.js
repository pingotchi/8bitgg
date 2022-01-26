export default {
    getItemType(item) {
        if (item.gotchi) return 'aavegotchi';
        if (item.__typename === 'ERC721Listing' && item.category === '3') return 'aavegotchi';
        if (item.__typename === 'ERC721Listing' && (item.category === '0' || item.category === '2')) return 'portal';
        if ((item.__typename === 'ERC1155Listing' || item.__typename === 'ERC1155Purchase') && (item.category === '0' || item.category === '2')) return 'wearable';
        if ((item.__typename === 'ERC1155Listing' || item.__typename === 'ERC1155Purchase') && item.category === '3') return 'ticket';
        if (item.__typename === 'ERC721Listing' && item.category === '4') return 'parcel';

        return undefined;
    }
}