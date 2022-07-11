import request from "@/utils/request";

export const getSearchList = params => {
    return request({
        url: '/search/hot',
        params
    })
}
export const getSearchHotWordList =params =>{
    return request({
        url: '/cloudsearch',
        params
    })
}