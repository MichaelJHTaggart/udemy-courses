import { useState, useEffect } from 'react';

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
      },
      body: JSON.stringify(postData),
    });
  };


  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/1"
  })
    .then(response => { setData(response.data) })
  
  axios.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => { setData(response.data) })
  

  axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    data: {
      id: 1,
      title: "Hello World",
    }
  })
  .then(response => { setData(response.data) })

  axios.post("https://jsonplaceholder.typicode.com/todos/1", { id: 1, title: "Hello" })
  .then(response => { setData(response.data) })

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions) => {
      setIsPending(true);

      try {
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetching aborted');
        } else {
          setIsPending(false);
          setError('Could not fetch the data');
          console.log(err.message);
        }
      }
    };

    if (method === 'GET') {
      fetchData();
    } else if (method === 'POST' && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  return { data, isPending, error, postData };
};
