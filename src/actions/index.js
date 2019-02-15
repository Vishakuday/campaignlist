export function addCampaign(campaignName) {
    return {
        type : 'ADD_CAMPAIGN',
        payload : campaignName
    }
}

export function deleteCampaign(index) {
    return {
        type : 'DELETE_CAMPAIGN',
        payload : index
    }
}

export function renameCampaign(index, newName) {
    return {
        type : 'RENAME_CAMPAIGN',
        index : index,
        newName
    }
}