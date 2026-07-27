import { e as ensure_array_like, d as attr_class, k as escape_html } from "../../../../chunks/index.js";
import "../../../../chunks/Icon.js";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { S as Shield_check } from "../../../../chunks/shield-check.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let roles = [];
    let selectedRole = null;
    $$renderer2.push(`<div class="space-y-6 animate-in fade-in duration-200"><div><h1 class="text-2xl font-bold tracking-tight">Manajemen Role &amp; Hak Akses (RBAC)</h1> <p class="text-xs text-muted-foreground">Konfigurasi matriks izin (permissions) untuk setiap role dalam aplikasi.</p></div> <div class="grid grid-cols-1 lg:grid-cols-4 gap-6"><div class="space-y-2"><h2 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">Pilih Role</h2> <div class="space-y-2"><!--[-->`);
    const each_array = ensure_array_like(roles);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let r = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between ${selectedRole?.id === r.id ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25" : "bg-card border-border/70 hover:bg-muted text-foreground"}`)}><div><p class="font-bold text-sm">${escape_html(r.name)}</p> <p class="text-[11px] opacity-80">${escape_html(r.description || "Role standar")}</p></div> `);
      Shield_check($$renderer2, { class: "w-5 h-5 opacity-80" });
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="lg:col-span-3 p-6 rounded-2xl bg-card border border-border/70 shadow-sm space-y-6">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
export {
  _page as default
};
