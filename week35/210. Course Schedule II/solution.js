/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // [STEP]: Initiate a map for prerequisites
  let preMap = new Map();

  // [STEP]: Attach a empty array to each course.
  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, []);
  }

  // [STEP]: Map course and prerequisites for all pairs in prerequisites.
  for (let pair of prerequisites) {
    // [STEP]: Get course number.
    let course = pair[0];
    // [STEP]: Get prerequisites.
    let preReq = pair[1];
    // [STEP]: Push prerequisites into designated course array in preMap.
    preMap.get(course).push(preReq);
  }

  // [STEP]: Initialize empty array to store order of course completion.
  let output = [];

  // [STEP]: Track checked course fully processed with no loops.
  let checkedCourse = new Set();

  // [STEP]: Track course that are being processed to detect loops.
  let checkedLoop = new Set();

  // [STEP]: Define dfs function to check courses.
  function dfsCheckCoursePrereq(course) {
    // [CASE]: If course is in checkedLoop, loop is formed, course can NOT be completed.
    if (checkedLoop.has(course)) return false;

    // [CASE]: If course is in checkedCourse, course has been checked, course can be skipped.
    if (checkedCourse.has(course)) return true;

    // [CASE]: If course is first checked, add course to checkedLoop as being processed to detect loops.
    checkedLoop.add(course);

    // [STEP]: Examine all prerequisites of each course in preMap with dfsCheckCoursePrereq.
    for (let pre of preMap.get(course)) {
      // [CASE]: Prequisiste can NOT be completed, thus course can NOT be completed.
      if (!dfsCheckCoursePrereq(pre)) return false;
    }

    // [STEP]: Examine ended, all prerequisites are satisfied loop NOT formed, remove course from checkedLoop.
    checkedLoop.delete(course);

    // [STEP]: Examine ended, mark the course as fully checked and add it to output array.
    checkedCourse.add(course);
    output.push(course);

    return true;
  }

  // [STEP]: Call dfsCheckCoursePrereq for every course.
  for (let i = 0; i < numCourses; i++) {
    // [CASE]: If checked result is false, return false.
    if (!dfsCheckCoursePrereq(i)) return [];
  }

  // [STEP]: Return the final compliatio order.
  return output;
};
