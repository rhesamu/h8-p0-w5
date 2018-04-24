function highestScore (students) {
  // Code disini
  if (students.length === 0) {
    return {};
  }

  var top = {};
  for (var i = 0; i < students.length; i++) {
    if (!top[students[i].class]) {
      top[students[i].class] = {};
      top[students[i].class]['name'] = students[i].name;
      top[students[i].class]['score'] = students[i].score;
    }
    else {
      if (top[students[i].class].score < students[i].score) {
        top[students[i].class]['name'] = students[i].name;
        top[students[i].class]['score'] = students[i].score;
      }
      // for (var j = i+1; j < students.length; j++) {
      //   if (top[students[j].class]['score'] > top[students[i].class]['score']) {
      //     top[students[i].class]['name'] = students[j].name;
      //     top[students[i].class]['score'] = students[j].score;
      //   }
      // }
    }
  }

  return top;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([]));

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
