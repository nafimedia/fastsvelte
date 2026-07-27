import { s as sanitize_props, i as spread_props, j as slot, a as attr, k as escape_html } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Icon.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { M as Mail } from "../../../chunks/mail.js";
function Arrow_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-left" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
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
    let email = "";
    let isLoading = false;
    $$renderer2.push(`<div class="min-h-screen flex items-center justify-center bg-background p-4 relative"><div class="w-full max-w-md bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl space-y-6"><div class="text-center space-y-2"><h1 class="text-2xl font-bold">Lupa Kata Sandi</h1> <p class="text-xs text-muted-foreground">Masukkan email Anda untuk menerima instruksi reset password</p></div> <form class="space-y-4"><div class="space-y-1.5"><label for="email" class="text-xs font-semibold">Alamat Email</label> <div class="relative">`);
    Mail($$renderer2, { class: "w-4 h-4 text-muted-foreground absolute left-3 top-3" });
    $$renderer2.push(`<!----> <input id="email" type="email"${attr("value", email)} placeholder="admin@starterkit.com" class="w-full pl-9 pr-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary" required=""/></div></div> <button type="submit"${attr("disabled", isLoading, true)} class="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl text-sm shadow-lg shadow-primary/25">${escape_html("Kirim Link Reset")}</button></form> <div class="text-center"><a href="/login" class="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1">`);
    Arrow_left($$renderer2, { class: "w-3.5 h-3.5" });
    $$renderer2.push(`<!----> Kembali ke halaman login</a></div></div></div>`);
  });
}
export {
  _page as default
};
