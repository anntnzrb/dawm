const URL_SRC = "https://dataserverdaw.herokuapp.com/noticias/fuente/";
const URL_NEWS = "https://dataserverdaw.herokuapp.com/noticias/xml";

const fetchSources = async () => {
  const resp = await fetch(URL_SRC);
  const data = await resp.json();

  return await data.newssources;
};

const fetchNews = async () => {
  const response = await fetch(URL_NEWS);
  const data = await response.text();

  return Array.from(
    new DOMParser().parseFromString(data, "application/xhtml+xml")
                   .getElementsByTagName("new"));
};

const buildNews = async (name) => {
  document.querySelector("#respuesta").innerHTML = "";
  (await fetchNews())
    .filter(e => e.querySelector("source_name").innerHTML === name)
    .forEach(e => {
      const elemHTML = `
<div class="col">
  <strong>${e.querySelector("title").innerHTML}</strong> ${e.querySelector("description").innerHTML} <a href="${e.querySelector("url").innerHTML}">${e.querySelector("author").innerHTML}</a>
</div>`;
      document.querySelector("#respuesta").innerHTML += elemHTML;
    });
};

const main = async () => {
  try {
    (await fetchSources()).forEach(src => {
      const elemHTML = `<option value="${src.source}">${src.source}</option>`;
      document.querySelector("#tipo").innerHTML += elemHTML;
    });
    document.querySelector("select")
            .addEventListener("change", async (ev) => {
              await buildNews(ev.target.value);
            });
  } catch (err) {
    console.log(err);
  }
};

window.onload = () => main();
