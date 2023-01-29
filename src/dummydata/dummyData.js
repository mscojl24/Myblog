// 테스트용 더미 데이터로 수정하지 않습니다.
import shortid from 'shortid';

const dummyPost = [
  {
    id: shortid(),
    username: 'JUBEE',
    picture: `https://i.imgur.com/Adka0G5.png`,
    content:
      '오늘 마트에서 파는 2만원 짜리 케이크 사왔는데 크리스마스때 산 5만원짜리 케이크랑 맛이 똑같았다. 갬성값 3만원이면 싼것인가 비싼것인가...',
    createdAt: '23.01.29',
  },
  {
    id: shortid(),
    username: '익명의누군가1',
    picture: `https://i.imgur.com/BPjEVta.png`,
    content:
      '아이콘 테스트용 포스트. 냉무',
    createdAt: '23.01.27',
  },
  {
    id: shortid(),
    username: '익명의누군가2',
    picture: `https://i.imgur.com/JMsBQqH.png`,
    content:
      '아이콘은 Free Userpice Pack 에서 무료로 다운받았습니다. 프리소스 만세! 제작자님 사랑해요 ',
    createdAt: '23.01.26',
  },
  {
    id: shortid(),
    username: '익명의누군가3',
    picture: `https://i.imgur.com/GBIyZf5.png`,
    content:
      '하,,,심심허다',
    createdAt: '23.01.24',
  },
  {
    id: shortid(),
    username: '익명의누군가2',
    picture: `https://i.imgur.com/JMsBQqH.png`,
    content:
      '12344545545353',
    createdAt: '23.01.24',
  },
];

export default dummyPost;