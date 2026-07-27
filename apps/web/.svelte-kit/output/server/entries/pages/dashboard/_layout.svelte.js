import { s as sanitize_props, i as spread_props, j as slot, n as getContext, f as fallback, c as store_get, k as escape_html, e as ensure_array_like, a as attr, d as attr_class, u as unsubscribe_stores, b as bind_props } from "../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import { I as Icon, a as auth, h as hasPermission, c as clearAuth } from "../../../chunks/Icon.js";
import "clsx";
import { L as Layout_dashboard, t as theme, S as Sun, M as Moon, a as toggleTheme } from "../../../chunks/sun.js";
import { U as Users, B as Bell } from "../../../chunks/users.js";
import { S as Shield_check } from "../../../chunks/shield-check.js";
import { S as Sparkles } from "../../../chunks/sparkles.js";
import { S as Search } from "../../../chunks/search.js";
import { g as goto } from "../../../chunks/client.js";
function File_text($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-text" },
    $$sanitized_props,
    {
      /**
       * @component @name FileText
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIiAvPgogIDxwYXRoIGQ9Ik0xNCAydjRhMiAyIDAgMCAwIDIgMmg0IiAvPgogIDxwYXRoIGQ9Ik0xMCA5SDgiIC8+CiAgPHBhdGggZD0iTTE2IDEzSDgiIC8+CiAgPHBhdGggZD0iTTE2IDE3SDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-text
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
function Log_out($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }],
    ["polyline", { "points": "16 17 21 12 16 7" }],
    ["line", { "x1": "21", "x2": "9", "y1": "12", "y2": "12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "log-out" },
    $$sanitized_props,
    {
      /**
       * @component @name LogOut
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiIC8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYgMTcgMjEgMTIgMTYgNyIgLz4KICA8bGluZSB4MT0iMjEiIHgyPSI5IiB5MT0iMTIiIHkyPSIxMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/log-out
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
function Menu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["line", { "x1": "4", "x2": "20", "y1": "12", "y2": "12" }],
    ["line", { "x1": "4", "x2": "20", "y1": "6", "y2": "6" }],
    ["line", { "x1": "4", "x2": "20", "y1": "18", "y2": "18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "menu" },
    $$sanitized_props,
    {
      /**
       * @component @name Menu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iMTIiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iNiIgeTI9IjYiIC8+CiAgPGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjE4IiB5Mj0iMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/menu
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
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
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
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let user, filteredMenu;
    let isMobileOpen = fallback($$props["isMobileOpen"], false);
    const menuItems = [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: Layout_dashboard,
        perm: null
      },
      {
        label: "Pengguna (Users)",
        href: "/dashboard/users",
        icon: Users,
        perm: "users:read"
      },
      {
        label: "Role & Izin",
        href: "/dashboard/roles",
        icon: Shield_check,
        perm: "roles:read"
      },
      {
        label: "Audit Logs",
        href: "/dashboard/audit-logs",
        icon: File_text,
        perm: "audit:read"
      },
      {
        label: "Notifikasi",
        href: "/dashboard/notifications",
        icon: Bell,
        perm: null
      }
    ];
    user = store_get($$store_subs ??= {}, "$auth", auth).user;
    filteredMenu = menuItems.filter((item) => {
      if (!item.perm) return true;
      return hasPermission(user, item.perm);
    });
    $$renderer2.push(`<aside class="hidden lg:flex flex-col w-64 border-r border-border bg-card/60 backdrop-blur-md h-screen sticky top-0"><div class="h-16 px-6 flex items-center justify-between border-b border-border"><a href="/dashboard" class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">`);
    Sparkles($$renderer2, { class: "w-5 h-5" });
    $$renderer2.push(`<!----></div> <div><h1 class="font-bold text-base tracking-tight leading-none bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">FairuzKit</h1> <span class="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Fastify + SvelteKit</span></div></a></div> <div class="flex-1 py-6 px-4 space-y-1 overflow-y-auto"><div class="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Menu Utama (${escape_html(user?.role || "Guest")})</div> <!--[-->`);
    const each_array = ensure_array_like(filteredMenu);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.href)}${attr_class(`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "bg-primary text-primary-foreground shadow-md shadow-primary/25" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`)}>`);
      if (item.icon) {
        $$renderer2.push("<!--[-->");
        item.icon($$renderer2, { class: "w-4 h-4" });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(` <span>${escape_html(item.label)}</span></a>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="p-4 border-t border-border bg-muted/20"><div class="flex items-center gap-3 p-2 rounded-lg bg-card border border-border/50"><div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs">${escape_html(user?.name ? user.name[0].toUpperCase() : "U")}</div> <div class="flex-1 min-w-0"><p class="text-xs font-semibold truncate">${escape_html(user?.name || "Pengguna")}</p> <p class="text-[10px] text-muted-foreground truncate">${escape_html(user?.email)}</p></div> <button title="Logout" class="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">`);
    Log_out($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----></button></div></div></aside>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { isMobileOpen });
  });
}
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let toggleCommandPalette = $$props["toggleCommandPalette"];
    let toggleMobileSidebar = $$props["toggleMobileSidebar"];
    $$renderer2.push(`<header class="h-16 border-b border-border bg-card/60 backdrop-blur-md px-4 lg:px-8 flex items-center justify-between sticky top-0 z-40"><div class="flex items-center gap-3"><button class="lg:hidden p-2 rounded-lg text-muted-foreground hover:bg-muted">`);
    Menu($$renderer2, { class: "w-5 h-5" });
    $$renderer2.push(`<!----></button> <button class="flex items-center gap-3 px-3 py-1.5 rounded-xl border border-border bg-muted/40 hover:bg-muted text-muted-foreground text-xs transition-colors w-48 sm:w-64">`);
    Search($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> <span class="flex-1 text-left truncate">Cari atau tekan Ctrl + K...</span> <kbd class="hidden sm:inline-block px-1.5 py-0.5 rounded bg-card border border-border text-[10px] font-mono">⌘K</kbd></button></div> <div class="flex items-center gap-2"><button class="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="Switch Theme">`);
    if (store_get($$store_subs ??= {}, "$theme", theme) === "dark") {
      $$renderer2.push("<!--[0-->");
      Sun($$renderer2, { class: "w-5 h-5 text-amber-400" });
    } else {
      $$renderer2.push("<!--[-1-->");
      Moon($$renderer2, { class: "w-5 h-5 text-indigo-600" });
    }
    $$renderer2.push(`<!--]--></button> <div class="relative"><button class="relative p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">`);
    Bell($$renderer2, { class: "w-5 h-5" });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { toggleCommandPalette, toggleMobileSidebar });
  });
}
function CommandPalette($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredActions;
    let isOpen = fallback($$props["isOpen"], false);
    let query = "";
    const actions = [
      {
        name: "Dashboard Overview",
        icon: Layout_dashboard,
        href: "/dashboard",
        category: "Navigation"
      },
      {
        name: "User Management",
        icon: Users,
        href: "/dashboard/users",
        category: "Navigation"
      },
      {
        name: "Roles & Permissions",
        icon: Shield_check,
        href: "/dashboard/roles",
        category: "Navigation"
      },
      {
        name: "Audit Logs",
        icon: File_text,
        href: "/dashboard/audit-logs",
        category: "Navigation"
      },
      {
        name: "Notification Center",
        icon: Bell,
        href: "/dashboard/notifications",
        category: "Navigation"
      },
      {
        name: "Toggle Dark / Light Mode",
        icon: Moon,
        action: () => toggleTheme(),
        category: "Actions"
      },
      {
        name: "Logout Account",
        icon: Log_out,
        action: () => {
          clearAuth();
          goto();
        },
        category: "Actions"
      }
    ];
    filteredActions = actions.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()));
    if (isOpen) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 transition-opacity"><div class="bg-card border border-border rounded-xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"><div class="flex items-center px-4 border-b border-border bg-muted/30">`);
      Search($$renderer2, { class: "w-5 h-5 text-muted-foreground mr-3" });
      $$renderer2.push(`<!----> <input type="text"${attr("value", query)} placeholder="Type a command or search routes (e.g. Users, Audit, Theme)..." class="w-full py-4 bg-transparent outline-none text-sm placeholder:text-muted-foreground" autofocus=""/> <button class="p-1 rounded-md text-muted-foreground hover:bg-muted">`);
      X($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button></div> <div class="max-h-80 overflow-y-auto p-2">`);
      if (filteredActions.length === 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="p-6 text-center text-sm text-muted-foreground">No matching commands found.</div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<!--[-->`);
        const each_array = ensure_array_like(filteredActions);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer2.push(`<button class="w-full flex items-center px-3 py-2.5 rounded-lg text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors group">`);
          if (item.icon) {
            $$renderer2.push("<!--[-->");
            item.icon($$renderer2, {
              class: "w-4 h-4 mr-3 text-muted-foreground group-hover:text-primary transition-colors"
            });
            $$renderer2.push("<!--]-->");
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push("<!--]-->");
          }
          $$renderer2.push(` <span class="flex-1 font-medium">${escape_html(item.name)}</span> <span class="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">${escape_html(item.category)}</span></button>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div> <div class="px-4 py-2 bg-muted/40 border-t border-border flex items-center justify-between text-xs text-muted-foreground"><span>Use <kbd class="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">↑</kbd> <kbd class="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">↓</kbd> to navigate</span> <span><kbd class="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">ESC</kbd> to close</span></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { isOpen });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let isCommandPaletteOpen = false;
    let isMobileSidebarOpen = false;
    function toggleCommandPalette() {
      isCommandPaletteOpen = !isCommandPaletteOpen;
    }
    function toggleMobileSidebar() {
      isMobileSidebarOpen = !isMobileSidebarOpen;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen flex bg-background">`);
      Sidebar($$renderer3, { isMobileOpen: isMobileSidebarOpen });
      $$renderer3.push(`<!----> <div class="flex-1 flex flex-col min-w-0">`);
      Navbar($$renderer3, { toggleCommandPalette, toggleMobileSidebar });
      $$renderer3.push(`<!----> <main class="flex-1 p-4 lg:p-8 overflow-y-auto"><!--[-->`);
      slot($$renderer3, $$props, "default", {}, null);
      $$renderer3.push(`<!--]--></main></div> `);
      CommandPalette($$renderer3, {
        get isOpen() {
          return isCommandPaletteOpen;
        },
        set isOpen($$value) {
          isCommandPaletteOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _layout as default
};
