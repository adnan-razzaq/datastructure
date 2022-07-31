/* Minimum Waiting Time
You're given a non-empty array of positive integers representing the amounts of time
that specific queries take to execute.Only one query can be executed at a time,but the
queries can be executed in any order.
A query's waiting time is defined as the amount of time that it must wait before its
execution starts.In other words,if a query is executed second,then its waiting time is
the duration of the first query;if a query is executed third,then its waiting time is the
sum of the durations of the first two queries.
Write a function that returns the minimum amount of total waiting time for all of the
queries.For example,if you're given the queries of durations[1,4,5],then the
total waiting time if the queries were executed in the order of[5,1,4]would be
(0)+(5)+(5+1)=11. The first query of duration5would be executed
immediately,so its waiting time would beo,the second query of duration1would
have to wait5seconds(the duration of the first query)to be executed,and the last
query would have to wait the duration of the first two queries before being executed.
Note:you're allowed to mutate the input array. */
/* 
!DESCRIPTION
1 Use greedy approach
2 Sort the array
3 for current element calculate the  time it would wait.
4 Add time to total waiting time
5 Return total waiting time

*/
function minimumWaitingTimes(queries) {
    // Write your code here.
    let current = 0;
    let totalTime = 0;

    queries.sort((a, b) => a - b);

    for (let i = 1; i < queries.length; i++) {
        current = current + queries[i - 1];
        totalTime = current + totalTime;
    }

    return totalTime;
}

/* !DESCRIPTION
1 Use greedy approach
2 Sort the array
3 Iterate and multiply current query time with remaining queries left
4 Add product to total waiting time
5 Return total waiting time

*/
function minimumWaitingTime(queries) {
    // Write your code here.
    let totalTime = 0;
    queries.sort((a, b) => a - b);

    for (let i = 0; i < queries.length; i++) {
        let product = queries[i] * (queries.length - 1 - i);
        totalTime = totalTime + product;
    }
    return totalTime;
}

minimumWaitingTime([3, 2, 1, 2, 6]);
