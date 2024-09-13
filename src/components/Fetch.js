import useSWR from "swr";

const url = "https://jsonplaceholder.typicode.com/todos";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Fetch = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>...Uh Oh Error</p>;
  }

  return (
    <div>
      {data.map((todo) => {
        return <User key={todo.id} title={todo.title} userId={todo.userId} />;
      })}
    </div>
  );
};
export default Fetch;

const User = (props) => {
  const { userId, title } = props;
  return (
    <div>
      <p className="border border-red-600">
        {userId}.{title}!
      </p>
    </div>
  );
};
