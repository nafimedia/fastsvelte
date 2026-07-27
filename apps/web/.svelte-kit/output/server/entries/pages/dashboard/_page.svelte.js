import { s as sanitize_props, i as spread_props, j as slot, f as fallback, b as bind_props, k as escape_html, c as store_get, e as ensure_array_like, u as unsubscribe_stores } from "../../../chunks/index.js";
import { I as Icon, a as auth } from "../../../chunks/Icon.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import { S as Sparkles } from "../../../chunks/sparkles.js";
import { U as Users, B as Bell } from "../../../chunks/users.js";
import { S as Shield_check } from "../../../chunks/shield-check.js";
import { A as Activity } from "../../../chunks/activity.js";
function Arrow_up_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M7 7h10v10" }],
    ["path", { "d": "M7 17 17 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-up-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowUpRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNyA3aDEwdjEwIiAvPgogIDxwYXRoIGQ9Ik03IDE3IDE3IDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-up-right
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
function Trending_up($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["polyline", { "points": "22 7 13.5 15.5 8.5 10.5 2 17" }],
    ["polyline", { "points": "16 7 22 7 22 13" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trending-up" },
    $$sanitized_props,
    {
      /**
       * @component @name TrendingUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3IiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjE2IDcgMjIgNyAyMiAxMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/trending-up
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
function ApexChart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let options = fallback($$props["options"], () => ({}), true);
    onDestroy(() => {
    });
    $$renderer2.push(`<div class="w-full"></div>`);
    bind_props($$props, { options });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let recentAudits = [];
    const chartOptions = {
      chart: {
        type: "area",
        height: 300,
        toolbar: { show: false },
        background: "transparent"
      },
      theme: { mode: "dark" },
      colors: ["#6366f1", "#ec4899"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3 },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        labels: { style: { colors: "#94a3b8" } }
      },
      yaxis: { labels: { style: { colors: "#94a3b8" } } },
      grid: { borderColor: "#334155", strokeDashArray: 4 },
      series: [
        { name: "Pengguna Aktif", data: [31, 40, 28, 51, 42, 109, 100] },
        { name: "Aktivitas API", data: [11, 32, 45, 32, 34, 52, 41] }
      ]
    };
    $$renderer2.push(`<div class="space-y-8 animate-in fade-in duration-200"><div class="p-6 lg:p-8 rounded-3xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900/80 border border-indigo-500/20 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><div class="space-y-1 relative z-10"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">`);
    Sparkles($$renderer2, { class: "w-3.5 h-3.5" });
    $$renderer2.push(`<!----> StarterKit Modern v1.0.0</div> <h1 class="text-2xl lg:text-3xl font-bold tracking-tight">Selamat Datang, ${escape_html(store_get($$store_subs ??= {}, "$auth", auth).user?.name || "Pengguna")}! 👋</h1> <p class="text-xs lg:text-sm text-muted-foreground">Sistem Manajemen Fastify + SvelteKit 5 + Prisma ORM + MySQL siap digunakan.</p></div> <a href="/dashboard/users" class="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-lg shadow-primary/30 transition-all flex items-center gap-1.5 shrink-0"><span>Kelola Pengguna</span> `);
    Arrow_up_right($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----></a></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><div class="p-5 rounded-2xl bg-card border border-border/70 shadow-sm flex items-center justify-between"><div class="space-y-1"><p class="text-xs font-medium text-muted-foreground">Total Pengguna</p> <h3 class="text-2xl font-bold">2</h3> <p class="text-[11px] text-emerald-400 font-medium flex items-center gap-1">`);
    Trending_up($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> +100% dari bulan lalu</p></div> <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">`);
    Users($$renderer2, { class: "w-6 h-6" });
    $$renderer2.push(`<!----></div></div> <div class="p-5 rounded-2xl bg-card border border-border/70 shadow-sm flex items-center justify-between"><div class="space-y-1"><p class="text-xs font-medium text-muted-foreground">Role Terdaftar</p> <h3 class="text-2xl font-bold">3</h3> <p class="text-[11px] text-muted-foreground">SUPER_ADMIN, ADMIN, USER</p></div> <div class="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">`);
    Shield_check($$renderer2, { class: "w-6 h-6" });
    $$renderer2.push(`<!----></div></div> <div class="p-5 rounded-2xl bg-card border border-border/70 shadow-sm flex items-center justify-between"><div class="space-y-1"><p class="text-xs font-medium text-muted-foreground">Aktivitas Sistem</p> <h3 class="text-2xl font-bold">99.9%</h3> <p class="text-[11px] text-emerald-400 font-medium">Fastify Server Active</p></div> <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">`);
    Activity($$renderer2, { class: "w-6 h-6" });
    $$renderer2.push(`<!----></div></div> <div class="p-5 rounded-2xl bg-card border border-border/70 shadow-sm flex items-center justify-between"><div class="space-y-1"><p class="text-xs font-medium text-muted-foreground">Queue BullMQ</p> <h3 class="text-2xl font-bold">Redis OK</h3> <p class="text-[11px] text-muted-foreground">Email Worker Running</p></div> <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">`);
    Bell($$renderer2, { class: "w-6 h-6" });
    $$renderer2.push(`<!----></div></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2 p-6 rounded-2xl bg-card border border-border/70 shadow-sm space-y-4"><div class="flex items-center justify-between"><div><h2 class="font-bold text-base">Tren Performa &amp; Pertumbuhan</h2> <p class="text-xs text-muted-foreground">Statistik permintaan API &amp; aktivitas pengguna harian</p></div></div> `);
    ApexChart($$renderer2, { options: chartOptions });
    $$renderer2.push(`<!----></div> <div class="p-6 rounded-2xl bg-card border border-border/70 shadow-sm space-y-4 flex flex-col"><div class="flex items-center justify-between"><h2 class="font-bold text-base">Aktivitas Terbaru</h2> <a href="/dashboard/audit-logs" class="text-xs text-primary font-medium hover:underline">Lihat Semua</a></div> <div class="space-y-3 flex-1 overflow-y-auto max-h-[320px]">`);
    if (recentAudits.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="text-xs text-muted-foreground text-center py-8">Belum ada riwayat aktivitas.</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(recentAudits);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<div class="p-3 rounded-xl bg-muted/30 border border-border/50 text-xs space-y-1"><div class="flex items-center justify-between"><span class="font-semibold text-primary">${escape_html(item.action)}</span> <span class="text-[10px] text-muted-foreground">${escape_html(new Date(item.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))}</span></div> <p class="text-muted-foreground">${escape_html(item.user?.name || "System")} (${escape_html(item.entity)})</p></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
