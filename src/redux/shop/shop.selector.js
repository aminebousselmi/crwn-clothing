import { createSelector } from "reselect";

const SelectShop = state => state.shop;

export const SelectCollections = createSelector(
    [SelectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [SelectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [SelectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )