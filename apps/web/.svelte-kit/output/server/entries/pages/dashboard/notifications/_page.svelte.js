import "clsx";
import "../../../../chunks/Icon.js";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { C as Check_circle_2 } from "../../../../chunks/check-circle-2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="space-y-6 animate-in fade-in duration-200"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-2xl font-bold tracking-tight">Pusat Pemberitahuan</h1> <p class="text-xs text-muted-foreground">Pemberitahuan sistem, notifikasi akun, dan informasi penting.</p></div> <button class="px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted font-semibold text-xs transition-all flex items-center gap-2">`);
    Check_circle_2($$renderer2, { class: "w-4 h-4 text-emerald-400" });
    $$renderer2.push(`<!----> <span>Tandai Semua Dibaca</span></button></div> <div class="bg-card border border-border/70 rounded-2xl shadow-sm overflow-hidden divide-y divide-border">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="p-8 text-center text-xs text-muted-foreground">Memuat notifikasi...</div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  _page as default
};
