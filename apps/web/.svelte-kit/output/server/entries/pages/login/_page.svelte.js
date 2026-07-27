import { a as attr } from "../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import "../../../chunks/Icon.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { S as Sparkles } from "../../../chunks/sparkles.js";
import { M as Mail } from "../../../chunks/mail.js";
import { L as Lock, A as Arrow_right } from "../../../chunks/lock.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let email = "admin@fairuzkit.com";
    let password = "password123";
    let isLoading = false;
    $$renderer2.push(`<div class="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden"><div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div> <div class="w-full max-w-md bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl relative z-10 space-y-6 animate-in fade-in zoom-in-95 duration-200"><div class="text-center space-y-2"><div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 mb-2">`);
    Sparkles($$renderer2, { class: "w-6 h-6" });
    $$renderer2.push(`<!----></div> <h1 class="text-2xl font-bold tracking-tight">Masuk ke Account</h1> <p class="text-xs text-muted-foreground">FairuzKit Modern - Fastify + SvelteKit 5</p></div> <form class="space-y-4"><div class="space-y-1.5"><label for="email" class="text-xs font-semibold text-foreground">Alamat Email</label> <div class="relative">`);
    Mail($$renderer2, { class: "w-4 h-4 text-muted-foreground absolute left-3 top-3" });
    $$renderer2.push(`<!----> <input id="email" type="email"${attr("value", email)} placeholder="admin@fairuzkit.com" class="w-full pl-9 pr-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required=""/></div></div> <div class="space-y-1.5"><div class="flex items-center justify-between"><label for="password" class="text-xs font-semibold text-foreground">Kata Sandi</label> <a href="/forgot-password" class="text-xs text-primary hover:underline font-medium">Lupa Kata Sandi?</a></div> <div class="relative">`);
    Lock($$renderer2, { class: "w-4 h-4 text-muted-foreground absolute left-3 top-3" });
    $$renderer2.push(`<!----> <input id="password" type="password"${attr("value", password)} placeholder="••••••••" class="w-full pl-9 pr-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required=""/></div></div> <button type="submit"${attr("disabled", isLoading, true)} class="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-sm shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span>Masuk Sekarang</span> `);
      Arrow_right($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></button></form> <div class="p-3 rounded-xl bg-muted/30 border border-border/50 text-[11px] text-muted-foreground space-y-1"><div class="font-semibold text-foreground">Kredensial Demo Super Admin:</div> <div>Email: <code class="text-primary font-mono">admin@starterkit.com</code></div> <div>Password: <code class="text-primary font-mono">password123</code></div></div> <div class="text-center text-xs text-muted-foreground">Belum memiliki akun? <a href="/register" class="text-primary font-semibold hover:underline">Daftar Akun Baru</a></div></div></div>`);
  });
}
export {
  _page as default
};
