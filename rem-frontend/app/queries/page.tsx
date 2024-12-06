async function getQueries() {
  const endpoint = "http://127.0.0.1:8000/api/queries/";
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed to fetch queries");
  }

  return res.json();
}

export default async function Queries() {
  const queries = await getQueries();
  console.log(queries);
  return (
    <div className='flex flex-col items-center mt-2'>
      <h1 className='text-4xl'>Queries</h1>
      <div>
        {queries.map((q: any) => (
          <div key={q._id} className='flex flex-col items-center mt-2'>
            <h2 className='text-2xl'>{q.query}</h2>
            <p>{q._id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
