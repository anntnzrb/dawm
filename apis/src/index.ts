import { GHUser } from "./interfaces/GHUser"

const BASE_API: string = "https://api.github.com/users";

const fetchGHAPI = async (): Promise<GHUser[]> => {
    const res: Response = await fetch(BASE_API);
    return await res.json();
}

(async () => {
    try {
        const gh_users: GHUser[] = await fetchGHAPI();
        gh_users.forEach(e => {
            const tableHTML = `
<tr>
<td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">${e.id}</td>
<td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">${e.login}</td>
<td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"><a href="${e.html_url}">${e.html_url}</a></td>
<td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"><img src="${e.avatar_url}" alt="-" width="80" height="80" /></td>
</tr>
`;
            const table = document.querySelector('#table-id');
            table && (table.innerHTML += tableHTML);
        })
    } catch (err) {
        console.error(err);
    }
})();
