const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmU5YmNhODJkOTA0MDViZTI2MWI4ZmJhM2QzMzZjYiIsInN1YiI6IjYzNjI5MGFiNDBkMGZlMDA4MjY4ZDBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96vttewJHxY8pq-gMSr0yg6TntK02VCZlAZ9mhmafPA",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
