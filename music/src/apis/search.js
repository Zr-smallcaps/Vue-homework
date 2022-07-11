import request from '@/utils/request';
// 搜索结果
export const getSearchTag = params =>
  request({
    url: '/search/hot',
    params,
  });
export const getSearchListApi = params =>
  request({
    url: '/cloudsearch',
    params,
  });
