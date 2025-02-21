let students = [
  { id: 1, name: "김일", grade: 85},
  { id: 2, name: "김이", grade: 100},
  { id: 3, name: "김삼", grade: 78},
  { id: 4, name: "김사", grade: 55},
  { id: 5, name: "김오", grade: 92},
  { id: 6, name: "김육", grade: 37},
];

// 1.성적이 80점 이상인 학생만 추출

console.log(`성적 우수 학생 : ${topStudents.students.filter(student => student.grade >= 80)}`);

// 2. 성적이 60점 미만 학생만 추출

console.log(`성적 미흡 학생 : ${lowStudents.students.filter(student => student.grade < 60)}`);

// 3. 저랑 같이 할 겁니다 이름이 '김'으로 시작하는 학생만 추출