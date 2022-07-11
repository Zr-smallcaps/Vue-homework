// 和 Home相关的接口写在一块
import request from '@/utils/request';

// /personalized
// export const getRecommendList = (params) => {
//   return request({
//     url: "/personalized",
//     params,
//   });
// };

export const getRecommendList = params =>
  request({
    url: '/personalized',
    params,
  });

export function getNewSongList(params) {
  return request({
    url: '/personalized/newsong',
    params,
  });
}
