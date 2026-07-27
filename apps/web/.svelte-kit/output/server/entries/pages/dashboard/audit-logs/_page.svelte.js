import { a as attr } from "../../../../chunks/index.js";
import "../../../../chunks/Icon.js";
import { S as Search } from "../../../../chunks/search.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let searchQuery = "";
    $$renderer2.push(`<div class="space-y-6 animate-in fade-in duration-200"><div><h1 class="text-2xl font-bold tracking-tight">Audit Logs Sistem</h1> <p class="text-xs text-muted-foreground">Catatan riwayat aktivitas dan mutasi data keamanan sistem.</p></div> <div class="p-4 rounded-2xl bg-card border border-border/70 shadow-sm flex items-center justify-between"><div class="relative w-full sm:w-80">`);
    Search($$renderer2, { class: "w-4 h-4 text-muted-foreground absolute left-3 top-3" });
    $$renderer2.push(`<!----> <input type="text"${attr("value", searchQuery)} placeholder="Cari aktivitas, entitas, atau pengguna..." class="w-full pl-9 pr-4 py-2 bg-muted/40 border border-border rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary"/></div></div> <div class="bg-card border border-border/70 rounded-2xl shadow-sm overflow-hidden"><div class="divide-y divide-border">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="p-8 text-center text-xs text-muted-foreground">Memuat catatan audit log...</div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
export {
  _page as default
};
