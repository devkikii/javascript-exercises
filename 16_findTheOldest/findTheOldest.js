const findTheOldest = function (people) {
  const currentYear = 2025;
  let maxAge = 0;
  let oldestPerson = null;

  for (let person of people) {
    let age;
    if (person.yearOfDeath) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      age = currentYear - person.yearOfBirth;
    }
    if (age > maxAge) {
      maxAge = age;
      oldestPerson = person;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
