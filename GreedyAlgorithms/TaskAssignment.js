function taskAssignment(k, tasks) {
  // Write your code here.
  let pairedTasks = [];
  let DurationIndexes = getDurationIndexes(tasks);
  let sortedTasks = [...tasks].sort((a, b) => a - b);
  let start = 0;
  let end = tasks.length - 1;

  while (start < end) {
    let task1Duration = sortedTasks[start];
    let Task2duration = sortedTasks[end];
    let task1indexPair = DurationIndexes[task1Duration];
    let task1index = task1indexPair.pop();
    let task2indexPair = DurationIndexes[Task2duration];
    let task2index = task2indexPair.pop();
    pairedTasks.push([task1index, task2index]);
    start++;
    end--;
  }

  return pairedTasks;
}

//Map indexs to object
function getDurationIndexes(array) {
  const taskIndexes = {};
  for (let idx = 0; idx < array.length; idx++) {
    const taskDuration = array[idx];
    if (taskDuration in taskIndexes) {
      taskIndexes[taskDuration].push(idx);
    } else {
      taskIndexes[taskDuration] = [idx];
    }
  }
  return taskIndexes;
}

taskAssignment(2, [1, 3, 5, 3, 1, 4]);
