export const gotchiesQuery = (skip, orderDir, hauntId) => {
  return `{
        aavegotchis(
          first: 1000,
          skip: ${skip},
          orderBy: id,
          orderDirection: ${orderDir},
          where: {status: 3, owner_not: "0x0000000000000000000000000000000000000000", hauntId: ${hauntId}}
        ) {
          id
          name
          numericTraits
          modifiedNumericTraits
          withSetsNumericTraits
          baseRarityScore
          modifiedRarityScore
          withSetsRarityScore
          kinship
          toNextLevel
          level
          experience
          equippedWearables
          collateral
          hauntId
          createdAt
          possibleSets
          equippedSetID
          equippedSetName
          usedSkillPoints
          owner {
            id
          }
        }
    }`
};

export const gotchiByIdQuery = (id) => {
  return `{
    aavegotchi(id: ${id}) {
      id
      name
      numericTraits
      equippedWearables
    }
  }`
}

export const userQuery = (id, skip) => {
  return `{
        user(id: "${id}") {
          id
          gotchisOwned(first: 1000, skip: ${skip}, where: {status: 3}) {
            id
            name
            numericTraits
            modifiedNumericTraits
            withSetsNumericTraits
            baseRarityScore
            modifiedRarityScore
            withSetsRarityScore
            kinship
            equippedWearables
            experience
            level
            toNextLevel
            collateral
            hauntId
            createdAt
            possibleSets
            equippedSetID
            equippedSetName
            usedSkillPoints
            listings(where:{cancelled: false, timePurchased: 0}) {
              id
              priceInWei
            }
            historicalPrices
            owner {
              id
            }
          }
        }
    }`
};

export const svgQuery = (id) => {
  return `{
        aavegotchis(where: {id: ${id}}) {
          id
          svg
        }
      }`
};

export const erc1155Query = (id, sold, category, orderBy, orderDireciton) => {
  return `{ 
      erc1155Listings (
          first: 1, 
          orderBy: ${orderBy},
          orderDirection: ${orderDireciton},
          where: {
              cancelled: false,
              sold: ${sold},
              category: ${category},
              erc1155TypeId: ${id}
          }
      ){
          id
          priceInWei
          timeLastPurchased
      }
  }`
};

export const realmQuery = (address, skip) => {
  return `{
      parcels(first: 1000, skip: ${skip} where: { owner: "${address}" }) {
        parcelId
        parcelHash
        tokenId
        coordinateX
        coordinateY
        district
        fudBoost
        fomoBoost
        alphaBoost
        kekBoost
        size
        auctionId
      }
    }`
};

export const parselQuery = (id) => {
  return `{
    parcel( id: ${id}) {
      tokenId
      parcelId
      owner {
        id
      }
      coordinateX
      coordinateY
      size
      district
      parcelHash
      fudBoost
      fomoBoost
      alphaBoost
      kekBoost
    }
  }`
};

export const clientParselQuery = (id) => {
  return `{
    parcel( id: ${id}) {
      historicalPrices
      timesTraded
      auctionId
      tokenId
      parcelId
      owner {
        id
      }
      coordinateX
      coordinateY
      size
      district
      parcelHash
      fudBoost
      fomoBoost
      alphaBoost
      kekBoost
    }
  }`
};

export const listedParcelQuery = (id) => {
  return `{
        erc721Listings(
                where: {
                    category: "4"
                    parcel: "${id}"
                    cancelled: false
                    timePurchased: 0
                }
            ) {
                id
            }
        }`
};

export const getParcelHistoricalPricesQuery = (id) => {
  return `{
        erc721Listings(
            where:{
                tokenId_in: ["${id}"]
                category: "4"
                timePurchased_not: 0
            },
            orderBy: timePurchased,
            orderDirection:desc,
        ) {
            buyer
            seller
            timePurchased
            priceInWei
        }
    }`
}

export const auctionQuery = (id) => {
  return `{
      auctions(first: 1, where: { id: "${id}" }) {
        id
        highestBid
      }
    }`
};

export const listedParcelsQuery = (skip, orderDir, size) => {
  return `{
        erc721Listings(
            first: 1000,
            skip: ${skip},
            orderDirection: ${orderDir},
            orderBy: timeCreated,
            
            where: {
                category: "4",
                size: ${size},
                priceInWei_lt: "10000000000000000000000000",
                timePurchased: 0,
                cancelled: false
            }
        ) {
            id
            tokenId
            category
            priceInWei
            seller
            timePurchased
            timeCreated
            cancelled
            erc721TokenAddress
            blockCreated
            parcel {
                id
                tokenId
                parcelId
                parcelHash
                owner
                district
                fudBoost
                fomoBoost
                alphaBoost
                kekBoost
                size
                timesTraded
                historicalPrices
            }
        }
    }`
};

export const raffleQuery = (id) => {
  return `{
    raffles(where: {id: "${id}" }) {
      ticketPools {
        id
        prizes{
          id
          quantity
        }
      }
      stats {
        totalCommon
        totalUncommon
        totalRare
        totalLegendary
        totalMythical
        totalGodLike
        totalDrop
      }
    }
  }`
};

export const raffleEntrantsQuery = (address) => {
  return `{
      raffleEntrants(where: { address: "${address}" }) {
        id
        ticketId
        quantity
        raffle {
          id
        }
      }
    }`
};

export const raffleWinsQuery = (address) => {
  return `{
      raffleWinners(where: { address: "${address}" }) {
        id
        item{
          id
        }
        raffle {
          id
        }
        quantity
      }
    }`
};