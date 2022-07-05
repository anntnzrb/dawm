const URL = "http://localhost:8080/api.json";
const NUM_ENTRIES = 100; // número de entries a mostrar

const fetchJSONAPI = async (url) => {
  const res = await fetch(url);

  return await res.json();
}

const main = async () => {
  try {
    const entries = (await fetchJSONAPI(URL)).entries;

    // crear headers
    Object.keys(entries[0]).forEach(v => {
      const trHTML = `
<th scope="col">${v}</th>
`;
      const tr = document.querySelector('#tr-id');
      tr && (tr.innerHTML += trHTML);
    });

    entries.slice(0, NUM_ENTRIES)
           .forEach(e => {
             const tbodyHTML = `
<tr>
  <th>${e.API}</th>
  <th>${e.Description}</th>
  <th>${e.Auth}</th>
  <th>${e.HTTPS}</th>
  <th>${e.Link}</th>
  <th>${e.Cors}</th>
  <th>${e.Category}</th>
</tr>
`;
             const tbody = document.querySelector('#tbody-id');
             tbody && (tbody.innerHTML += tbodyHTML);
           });

  } catch (err) {
    console.error(err);
  }
};

window.onload = () => main();
