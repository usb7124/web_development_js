// // 객체 생성
// let boardInputDatas = {
//   id: 0,
//   title: '메모 제목',
//   content: '메모 내용',
//   writer: '작성자',
// };
// // 비어있는 배열 생성
// let boardDatas = [];
// boardDatas.push(boardInputDatas);

// // 객체의 title value값 수정
// boardInputDatas.title = '제목을 수정합니다.';

// // 배열을 확인
// console.log(boardDatas);

// let boardInputDatas = {
//   id: 0,
//   title: '메모 제목',
//   content: '메모 내용',
//   writer: '작성자',
// };
// // 비어있는 배열 생성
// let boardDatas = [];
// // 이 부분이 아까 예시와 다릅니다.
// boardDatas.push({...boardInputDatas});

// // 객체의 title value값 수정
// boardInputDatas.title = '스프레드 적용 후 제목 수정.';

// boardDatas.push({...boardInputDatas});

// // 배열을 확인
// console.log(boardDatas);
// console.log(boardInputDatas);

let nestedObject = {
  id: 1,
  data: {
    title: "메모 제목",
  }
};

let copy = { ...nestedObject };
// copy
copy.data.title = "수정됨";

console.log(nestedObject.data.title)