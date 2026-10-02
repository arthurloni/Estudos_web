// Challenge: Task scheduler with dependencies and limited concurrency.
// It executes asynchronous tasks while respecting the dependencies between them and a concurrency limit.

// 1 - Dependencies: a task only starts when all dependencies finish successfully.
// 2 - Concurrency: never more than one simultaneous task running at the same time.
// 3 - Circle detection: if a circular dependency exists (A → B → A), run() should be rejected with an error showing the cycle, 
// for example Cycle detected: A -> B -> A. This should be detected before executing any task.
// 4 - Non-existent dependency: reject with a clear error if a task depends on an id that has not been registered.
// 5 - Failures: if a task fails, all tasks that depend on it (directly or indirectly) are marked as ignored, but independent tasks continue running.
// 6 - Return: run() resolves with an object/Map containing, for each task, { status: "success" | "failed" | "ignored", value?, error? }.
// 7 - Result of dependencies: each task function receives as an argument an object with the results of its dependencies, e.g.: (deps) => deps.A + "processed".