const APIS = {
  // JSON
  dawm_fuentes: "https://dataserverdaw.herokuapp.com/noticias/fuente",
  gh_users: "https://api.github.com/users",
  anime: "https://api.jikan.moe/v4/anime",

  // XML
  dawm_noticias: "https://dataserverdaw.herokuapp.com/noticias/xml",
  dawm_escritores: "https://dataserverdaw.herokuapp.com/escritores/xml",
}

const fetchJSONAPI = async (url) => {
  const res = await fetch(url);

  return await res.json();
}

const fetchXMLAPI = async (url, tag) => {
  const res = await fetch(url);
  const data = await res.text();

  return Array.from(
    new DOMParser().parseFromString(data, "application/xhtml+xml")
                   .getElementsByTagName(tag));
}

const getQueryHTML = (e, query) => {
  return e.querySelector(query).innerHTML
}

(async () => {
  try {
    const x = await fetchXMLAPI(APIS.dawm_escritores, "escritor");
    x.forEach(e => console.log(getQueryHTML(e, "nombre")))
  } catch (err) {
    console.error(err);
  }
})();
