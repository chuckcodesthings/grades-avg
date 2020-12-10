'use strict';

// Grades calculator

const grades = {
  art: [98, 95],
  chem: [87, 77, 90, 85, 92.5, 88, 87, 77],
  pe: [60, 100],
  en: [88],
  ethics: [88.5, 100],
  fr: [96.6, 70, 85, 90, 92, 97.8, 100, 95],
  math: [88, 96, 90],
  physics: [96.6, 74.4, 86, 76, 86],
};

const subjects = [
  'Art',
  'Chemistry',
  'PE',
  'English',
  'Ethics',
  'French',
  'Math',
  'Physics',
];

const average = arr => arr.reduce((acc, mov) => acc + mov, 0) / arr.length;

const rawGradesAvg = [
  average(grades.art),
  average(grades.chem),
  average(grades.pe),
  average(grades.en),
  average(grades.ethics),
  average(grades.fr),
  average(grades.math),
  average(grades.physics),
];

for (let i = 0; i < subjects.length; i++) {
  console.log(
    `${subjects[i]} average: ${
      Math.round((rawGradesAvg[i] + Number.EPSILON) * 100) / 100
    }%`
  );
}

const rawGlobalAvg = average(rawGradesAvg);
const globalAvg = rawGlobalAvg.toFixed(2);
console.log(`Global Average: ${globalAvg}%`);
