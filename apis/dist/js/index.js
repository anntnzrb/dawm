"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BASE_API = "https://api.github.com/users";
const fetchGHAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(BASE_API);
    return yield res.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gh_users = yield fetchGHAPI();
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
        });
    }
    catch (err) {
        console.error(err);
    }
}))();
