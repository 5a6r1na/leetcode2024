/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
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

  // [STEP]: Tracked checked course in current path.
  let checkedCourse = new Set();

  // [STEP]: Define dfs function to check courses.
  function dfsCheckCoursePrereq(course) {
    // [CASE]: If course is in checkedCourse, loop is formed, course can NOT be completed.
    if (checkedCourse.has(course)) return false;

    // [CASE]: If course does NOT have prerequisites, course can be completed.
    /**
           [NOTE]: Check length equals to zero for empty arrays,
           since == [] checks for reference equality, not structural equality.
           No two array references are the same unless explicitly refer to the same array instance.
         */
    if (preMap.get(course).length === 0) return true;

    // [CASE]: If course is first checked, add course to set.
    checkedCourse.add(course);

    // [STEP]: Examine all prerequisites of each course in preMap with dfsCheckCoursePrereq.
    for (let pre of preMap.get(course)) {
      // [CASE]: Prequisiste can NOT be completed, thus course can NOT be completed.
      if (!dfsCheckCoursePrereq(pre)) return false;
    }
    // [STEP]: Examine ended, remove course from checkedCourse.
    checkedCourse.delete(course);
    /**
        [CASE]: Course can be completed, set prerequisites of to empty so when visited again,
        the program does NOT have to examine course again.
         */
    preMap.set(course, []);
    return true;
  }

  // [STEP]: Call dfsCheckCoursePrereq for every course.
  for (let i = 0; i < numCourses; i++) {
    // [CASE]: If checked result is false, return false.
    if (!dfsCheckCoursePrereq(i)) return false;
  }
  return true;
};
