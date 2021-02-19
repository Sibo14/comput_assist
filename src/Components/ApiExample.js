import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function ApiExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div>
      Hi
      <h1>{data[0].name}</h1>
      <h2>{data[0].email}</h2>
      <h1>{data[1].name}</h1>
      <h2>{data[2].email}</h2>
      <h1>{data[2].name}</h1>
      <h2>{data[2].email}</h2>
      <h1>{data[3].name}</h1>
      <h2>{data[3].email}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ApiExample />, rootElement);
