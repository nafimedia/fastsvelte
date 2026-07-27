import { s as sanitize_props, i as spread_props, j as slot, a as attr } from "../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import { I as Icon } from "../../../chunks/Icon.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { S as Sparkles } from "../../../chunks/sparkles.js";
import { M as Mail } from "../../../chunks/mail.js";
import { L as Lock, A as Arrow_right } from "../../../chunks/lock.js";
function User($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "user" },
    $$sanitized_props,
    {
      /**
       * @component @name User
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/user
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {}, null);
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let name = "";
    let email = "";
    let password = "";
    let isLoading = false;
    $$renderer2.push(`<div class="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden"><div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div> <div class="w-full max-w-md bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200"><div class="text-center space-y-2"><div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 mb-2">`);
    Sparkles($$renderer2, { class: "w-6 h-6" });
    $$renderer2.push(`<!----></div> <h1 class="text-2xl font-bold tracking-tight">Buat Akun Baru</h1> <p class="text-xs text-muted-foreground">Bergabunglah dengan ekosistem FairuzKit</p></div> <form class="space-y-4"><div class="space-y-1.5"><label for="name" class="text-xs font-semibold">Nama Lengkap</label> <div class="relative">`);
    User($$renderer2, { class: "w-4 h-4 text-muted-foreground absolute left-3 top-3" });
    $$renderer2.push(`<!----> <input id="name" type="text"${attr("value", name)} placeholder="John Doe" class="w-full pl-9 pr-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary" required=""/></div></div> <div class="space-y-1.5"><label for="email" class="text-xs font-semibold">Alamat Email</label> <div class="relative">`);
    Mail($$renderer2, { class: "w-4 h-4 text-muted-foreground absolute left-3 top-3" });
    $$renderer2.push(`<!----> <input id="email" type="email"${attr("value", email)} placeholder="user@example.com" class="w-full pl-9 pr-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary" required=""/></div></div> <div class="space-y-1.5"><label for="password" class="text-xs font-semibold">Kata Sandi</label> <div class="relative">`);
    Lock($$renderer2, { class: "w-4 h-4 text-muted-foreground absolute left-3 top-3" });
    $$renderer2.push(`<!----> <input id="password" type="password"${attr("value", password)} placeholder="••••••••" class="w-full pl-9 pr-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary" required=""/></div></div> <button type="submit"${attr("disabled", isLoading, true)} class="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-sm shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span>Daftar Sekarang</span> `);
      Arrow_right($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></button></form> <div class="text-center text-xs text-muted-foreground">Sudah memiliki akun? <a href="/login" class="text-primary font-semibold hover:underline">Masuk ke Akun</a></div></div></div>`);
  });
}
export {
  _page as default
};
