import { s as sanitize_props, i as spread_props, j as slot, c as store_get, d as attr_class, e as ensure_array_like, k as escape_html, m as stringify, u as unsubscribe_stores } from "../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
import { I as Icon, a as auth } from "../../chunks/Icon.js";
import { S as Sun, M as Moon, L as Layout_dashboard, t as theme } from "../../chunks/sun.js";
import { S as Sparkles } from "../../chunks/sparkles.js";
import { A as Arrow_right, L as Lock } from "../../chunks/lock.js";
import { C as Check_circle_2 } from "../../chunks/check-circle-2.js";
import { A as Activity } from "../../chunks/activity.js";
import { S as Shield_check } from "../../chunks/shield-check.js";
function Code_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m18 16 4-4-4-4" }],
    ["path", { "d": "m6 8-4 4 4 4" }],
    ["path", { "d": "m14.5 4-5 16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "code-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Code2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTggMTYgNC00LTQtNCIgLz4KICA8cGF0aCBkPSJtNiA4LTQgNCA0IDQiIC8+CiAgPHBhdGggZD0ibTE0LjUgNC01IDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/code-2
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
function Command($$renderer, $$props) {
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
        "d": "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "command" },
    $$sanitized_props,
    {
      /**
       * @component @name Command
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgNnYxMmEzIDMgMCAxIDAgMy0zSDZhMyAzIDAgMSAwIDMgM1Y2YTMgMyAwIDEgMC0zIDNoMTJhMyAzIDAgMSAwLTMtMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/command
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
function Cpu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "rect",
      { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "2" }
    ],
    ["rect", { "x": "9", "y": "9", "width": "6", "height": "6" }],
    ["path", { "d": "M15 2v2" }],
    ["path", { "d": "M15 20v2" }],
    ["path", { "d": "M2 15h2" }],
    ["path", { "d": "M2 9h2" }],
    ["path", { "d": "M20 15h2" }],
    ["path", { "d": "M20 9h2" }],
    ["path", { "d": "M9 2v2" }],
    ["path", { "d": "M9 20v2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "cpu" },
    $$sanitized_props,
    {
      /**
       * @component @name Cpu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJ4PSIyIiAvPgogIDxyZWN0IHg9IjkiIHk9IjkiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIC8+CiAgPHBhdGggZD0iTTE1IDJ2MiIgLz4KICA8cGF0aCBkPSJNMTUgMjB2MiIgLz4KICA8cGF0aCBkPSJNMiAxNWgyIiAvPgogIDxwYXRoIGQ9Ik0yIDloMiIgLz4KICA8cGF0aCBkPSJNMjAgMTVoMiIgLz4KICA8cGF0aCBkPSJNMjAgOWgyIiAvPgogIDxwYXRoIGQ9Ik05IDJ2MiIgLz4KICA8cGF0aCBkPSJNOSAyMHYyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/cpu
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
function Database($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }],
    ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }],
    ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "database" },
    $$sanitized_props,
    {
      /**
       * @component @name Database
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8ZWxsaXBzZSBjeD0iMTIiIGN5PSI1IiByeD0iOSIgcnk9IjMiIC8+CiAgPHBhdGggZD0iTTMgNVYxOUE5IDMgMCAwIDAgMjEgMTlWNSIgLz4KICA8cGF0aCBkPSJNMyAxMkE5IDMgMCAwIDAgMjEgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/database
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
function External_link($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M15 3h6v6" }],
    ["path", { "d": "M10 14 21 3" }],
    [
      "path",
      {
        "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "external-link" },
    $$sanitized_props,
    {
      /**
       * @component @name ExternalLink
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgM2g2djYiIC8+CiAgPHBhdGggZD0iTTEwIDE0IDIxIDMiIC8+CiAgPHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/external-link
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
function Flame($$renderer, $$props) {
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
        "d": "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "flame" },
    $$sanitized_props,
    {
      /**
       * @component @name Flame
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/flame
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
function Layers($$renderer, $$props) {
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
        "d": "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      }
    ],
    [
      "path",
      { "d": "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }
    ],
    [
      "path",
      { "d": "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "layers" },
    $$sanitized_props,
    {
      /**
       * @component @name Layers
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIuODMgMi4xOGEyIDIgMCAwIDAtMS42NiAwTDIuNiA2LjA4YTEgMSAwIDAgMCAwIDEuODNsOC41OCAzLjkxYTIgMiAwIDAgMCAxLjY2IDBsOC41OC0zLjlhMSAxIDAgMCAwIDAtMS44M1oiIC8+CiAgPHBhdGggZD0ibTIyIDE3LjY1LTkuMTcgNC4xNmEyIDIgMCAwIDEtMS42NiAwTDIgMTcuNjUiIC8+CiAgPHBhdGggZD0ibTIyIDEyLjY1LTkuMTcgNC4xNmEyIDIgMCAwIDEtMS42NiAwTDIgMTIuNjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/layers
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
function Star($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "star" },
    $$sanitized_props,
    {
      /**
       * @component @name Star
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWdvbiBwb2ludHM9IjEyIDIgMTUuMDkgOC4yNiAyMiA5LjI3IDE3IDE0LjE0IDE4LjE4IDIxLjAyIDEyIDE3Ljc3IDUuODIgMjEuMDIgNyAxNC4xNCAyIDkuMjcgOC45MSA4LjI2IDEyIDIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/star
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
function Terminal($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["polyline", { "points": "4 17 10 11 4 5" }],
    ["line", { "x1": "12", "x2": "20", "y1": "19", "y2": "19" }]
  ];
  Icon($$renderer, spread_props([
    { name: "terminal" },
    $$sanitized_props,
    {
      /**
       * @component @name Terminal
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSI0IDE3IDEwIDExIDQgNSIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIyMCIgeTE9IjE5IiB5Mj0iMTkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/terminal
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
function Zap($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "polygon",
      { "points": "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "zap" },
    $$sanitized_props,
    {
      /**
       * @component @name Zap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWdvbiBwb2ludHM9IjEzIDIgMyAxNCAxMiAxNCAxMSAyMiAyMSAxMCAxMiAxMCAxMyAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/zap
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
    var $$store_subs;
    const features = [
      {
        title: "RBAC (Role & Permission)",
        desc: "Sistem hak akses bertingkat SUPER_ADMIN, ADMIN, USER lengkap dengan matriks izin dinamis.",
        icon: Shield_check,
        color: "from-indigo-500 to-purple-500"
      },
      {
        title: "Fastify + TypeScript Engine",
        desc: "API Server super cepat dengan integrasi OpenAPI / Swagger UI otomatis di /documentation.",
        icon: Zap,
        color: "from-amber-400 to-orange-500"
      },
      {
        title: "SvelteKit 5 + Runes",
        desc: "Frontend reactive terbaru menggunakan $state, $derived, $effect, dan Tailwind CSS.",
        icon: Flame,
        color: "from-rose-500 to-pink-500"
      },
      {
        title: "Command Palette (Ctrl + K)",
        desc: "Modal pencarian dan navigasi ala Vercel / Linear untuk produktivitas maksimal.",
        icon: Command,
        color: "from-cyan-400 to-blue-500"
      },
      {
        title: "Prisma ORM + MySQL",
        desc: "Manajemen database type-safe dengan seeder otomatis dan migrasi tanpa rasa sakit.",
        icon: Database,
        color: "from-emerald-400 to-teal-500"
      },
      {
        title: "Audit Logs & Notification Center",
        desc: "Catatan aktivitas keamanan mutasi data dan sistem pemberitahuan real-time.",
        icon: Layers,
        color: "from-purple-500 to-indigo-600"
      }
    ];
    const techStack = [
      { name: "SvelteKit 5", tag: "Frontend" },
      { name: "Fastify", tag: "Backend" },
      { name: "Prisma ORM", tag: "Database" },
      { name: "MySQL", tag: "Storage" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "Shadcn Svelte", tag: "UI System" },
      { name: "Redis", tag: "Cache" },
      { name: "BullMQ", tag: "Queue" },
      { name: "ApexCharts", tag: "Analytics" },
      { name: "Sonner", tag: "Toast" }
    ];
    $$renderer2.push(`<div class="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white relative overflow-hidden font-sans"><div class="absolute inset-0 bg-cyber-grid animate-grid-move pointer-events-none opacity-60 z-0"></div> <div class="absolute -top-40 -left-40 w-[650px] h-[650px] bg-indigo-600/25 rounded-full blur-[150px] pointer-events-none animate-orb-1 z-0"></div> <div class="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-orb-2 z-0"></div> <div class="absolute top-1/2 left-10 w-[550px] h-[550px] bg-pink-600/20 rounded-full blur-[140px] pointer-events-none animate-orb-1 z-0"></div> <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none animate-orb-2 z-0"></div> <div class="absolute -bottom-40 left-1/3 w-[650px] h-[650px] bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none animate-orb-1 z-0"></div> <header class="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50 transition-all duration-300"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative z-10"><a href="/" class="flex items-center gap-3 group"><div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">`);
    Sparkles($$renderer2, { class: "w-5 h-5 animate-pulse" });
    $$renderer2.push(`<!----></div> <div><span class="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">FairuzKit</span> <span class="text-xs px-2 py-0.5 ml-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">v1.0 Pro</span></div></a> <nav class="hidden md:flex items-center gap-8 text-xs font-semibold text-muted-foreground"><a href="#fitur" class="hover:text-foreground transition-colors">Fitur Utama</a> <a href="#tech" class="hover:text-foreground transition-colors">Teknologi</a> <a href="#arsitektur" class="hover:text-foreground transition-colors">Arsitektur Code</a> <a href="http://localhost:3001/documentation" target="_blank" class="hover:text-foreground transition-colors flex items-center gap-1"><span>API Docs</span> `);
    External_link($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----></a></nav> <div class="flex items-center gap-3"><button class="p-2.5 rounded-xl border border-border bg-card/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-105">`);
    if (store_get($$store_subs ??= {}, "$theme", theme) === "dark") {
      $$renderer2.push("<!--[0-->");
      Sun($$renderer2, { class: "w-4 h-4 text-amber-400" });
    } else {
      $$renderer2.push("<!--[-1-->");
      Moon($$renderer2, { class: "w-4 h-4 text-indigo-600" });
    }
    $$renderer2.push(`<!--]--></button> <button class="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-200 flex items-center gap-2 hover:scale-105">`);
    if (store_get($$store_subs ??= {}, "$auth", auth).isAuthenticated) {
      $$renderer2.push("<!--[0-->");
      Layout_dashboard($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----> <span>Buka Dashboard</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span>Masuk ke App</span> `);
      Arrow_right($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></button></div></div></header> <section class="relative pt-12 pb-24 lg:pt-20 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"><div${attr_class(`lg:col-span-7 space-y-8 text-center lg:text-left transition-all duration-700 ${"opacity-0 translate-y-8"}`)}><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-400 shadow-md backdrop-blur-md hover:border-indigo-400/60 transition-colors"><span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span></span> <span>Fastify 5 + SvelteKit 5 + Prisma ORM Starter Kit</span></div> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">Bangun Aplikasi Fullstack <br class="hidden sm:inline"/> <span class="bg-gradient-to-r from-indigo-400 via-purple-400 via-pink-400 to-cyan-400 animate-shimmer bg-clip-text text-transparent">10x Lebih Cepat &amp; Sangat Keren</span></h1> <p class="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">Ekosistem starter kit terlengkap untuk SaaS &amp; Enterprise. Dilengkapi **Auth JWT**, **RBAC Matrix**, **Audit Logs**, **Notification Center**, **Command Palette (Ctrl + K)**, dan UI **Shadcn Svelte**.</p> <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"><button class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-extrabold text-sm shadow-2xl shadow-indigo-500/40 hover:scale-105 hover:shadow-indigo-500/60 transition-all duration-300 flex items-center justify-center gap-3 group"><span>Coba Starter Kit Sekarang</span> `);
    Arrow_right($$renderer2, {
      class: "w-5 h-5 group-hover:translate-x-1 transition-transform"
    });
    $$renderer2.push(`<!----></button> <a href="http://localhost:3001/documentation" target="_blank" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-card/80 border border-border hover:bg-muted font-bold text-sm text-foreground transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-md">`);
    Code_2($$renderer2, { class: "w-5 h-5 text-indigo-400" });
    $$renderer2.push(`<!----> <span>Dokumentasi API</span></a></div> <div class="pt-6 border-t border-border/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-muted-foreground font-medium"><div class="flex items-center gap-2 hover:text-foreground transition-colors">`);
    Check_circle_2($$renderer2, { class: "w-4 h-4 text-emerald-400" });
    $$renderer2.push(`<!----> <span>100% Type-Safe TypeScript</span></div> <div class="flex items-center gap-2 hover:text-foreground transition-colors">`);
    Check_circle_2($$renderer2, { class: "w-4 h-4 text-emerald-400" });
    $$renderer2.push(`<!----> <span>Modular Architecture</span></div> <div class="flex items-center gap-2 hover:text-foreground transition-colors">`);
    Check_circle_2($$renderer2, { class: "w-4 h-4 text-emerald-400" });
    $$renderer2.push(`<!----> <span>Production Ready</span></div></div></div> <div${attr_class(`lg:col-span-5 relative flex justify-center transition-all duration-1000 delay-200 ${"opacity-0 translate-y-12"}`)}><div class="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-pink-500/40 rounded-3xl blur-3xl transform rotate-3 animate-pulse-glow"></div> <div class="relative w-full max-w-md bg-card/80 backdrop-blur-2xl border border-border/90 rounded-3xl p-4 shadow-2xl space-y-4 animate-float"><div class="absolute -top-4 -left-4 z-20 px-3.5 py-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-indigo-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-foreground animate-bounce" style="animation-duration: 3s;">`);
    Activity($$renderer2, {
      class: "w-4 h-4 text-indigo-400 animate-spin",
      style: "animation-duration: 6s;"
    });
    $$renderer2.push(`<!----> <span>Fastify 0.4ms Latency</span></div> <div class="absolute -bottom-4 -right-4 z-20 px-3.5 py-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-pink-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-foreground">`);
    Lock($$renderer2, { class: "w-4 h-4 text-pink-400" });
    $$renderer2.push(`<!----> <span>JWT &amp; RBAC Active</span></div> <div class="relative rounded-2xl overflow-hidden aspect-[4/5] border border-border/60 group"><img src="/hero_woman_avatar.png" alt="Tech Lead Developer" class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"/> <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div> <div class="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> <span>SvelteKit 5 Runes</span></div> <div class="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 space-y-1.5"><div class="flex items-center justify-between"><p class="font-extrabold text-sm text-white">Sarah Jenkins</p> <div class="flex items-center gap-1 text-amber-400 text-xs">`);
    Star($$renderer2, { class: "w-3.5 h-3.5 fill-current" });
    $$renderer2.push(`<!----> <span class="font-bold">5.0</span></div></div> <p class="text-[11px] text-slate-300">Lead Architect @ FairuzKit Enterprise</p> <p class="text-[11px] text-indigo-300 italic pt-1">"Starter Kit ini memangkas waktu development kami dari 2 bulan menjadi hanya 3 hari!"</p></div></div></div></div></div></section> <section id="tech" class="py-12 border-y border-border/50 bg-muted/30 backdrop-blur-xl relative z-10"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"><p class="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ditenagai Teknologi Modern Terbaik</p> <div class="flex flex-wrap items-center justify-center gap-3"><!--[-->`);
    const each_array = ensure_array_like(techStack);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tech = each_array[$$index];
      $$renderer2.push(`<div class="px-4 py-2 rounded-xl bg-card border border-border/80 shadow-sm flex items-center gap-2 hover:border-primary/50 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200">`);
      Cpu($$renderer2, { class: "w-4 h-4 text-primary" });
      $$renderer2.push(`<!----> <span class="font-bold text-xs">${escape_html(tech.name)}</span> <span class="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">${escape_html(tech.tag)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section id="fitur" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10"><div class="text-center space-y-4 max-w-2xl mx-auto"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold backdrop-blur-md">✨ Fitur Bawaan Terlengkap</div> <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Semua yang Anda Butuhkan Sudah Siap Pakai</h2> <p class="text-xs sm:text-sm text-muted-foreground">Tidak perlu lagi membuang waktu berminggu-minggu membuat fitur otentikasi, role permission, atau komponen UI dari nol.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    const each_array_1 = ensure_array_like(features);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let f = each_array_1[$$index_1];
      $$renderer2.push(`<div class="p-6 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/70 shadow-sm hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group space-y-4 relative overflow-hidden"><div${attr_class(`w-12 h-12 rounded-2xl bg-gradient-to-tr ${stringify(f.color)} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`)}>`);
      if (f.icon) {
        $$renderer2.push("<!--[-->");
        f.icon($$renderer2, { class: "w-6 h-6" });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(`</div> <div class="space-y-2"><h3 class="font-bold text-base text-foreground group-hover:text-primary transition-colors">${escape_html(f.title)}</h3> <p class="text-xs text-muted-foreground leading-relaxed">${escape_html(f.desc)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="arsitektur" class="py-20 bg-muted/40 backdrop-blur-xl border-y border-border/50 relative z-10"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"><div class="lg:col-span-5 space-y-6"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold backdrop-blur-md">💻 Clean Code Architecture</div> <h2 class="text-3xl font-extrabold tracking-tight">Pattern Generator CRUD Modular</h2> <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">Struktur kode backend dan frontend yang rapi dan terisolasi. Menambahkan fitur atau tabel baru hanya membutuhkan 4 langkah sederhana yang terdokumentasi lengkap.</p> <div class="space-y-3 pt-2 text-xs"><div class="flex items-center gap-3 p-3 rounded-xl bg-card/80 backdrop-blur-md border border-border hover:border-primary/50 transition-colors"><div class="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs">1</div> <span>Definisikan Model di Prisma Schema</span></div> <div class="flex items-center gap-3 p-3 rounded-xl bg-card/80 backdrop-blur-md border border-border hover:border-primary/50 transition-colors"><div class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-xs">2</div> <span>Daftarkan Fastify Module &amp; Route Guard RBAC</span></div> <div class="flex items-center gap-3 p-3 rounded-xl bg-card/80 backdrop-blur-md border border-border hover:border-primary/50 transition-colors"><div class="w-6 h-6 rounded-lg bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-xs">3</div> <span>Tambahkan Halaman SvelteKit 5 dengan Runes</span></div></div></div> <div class="lg:col-span-7"><div class="rounded-2xl border border-border bg-slate-950/90 backdrop-blur-2xl text-slate-100 font-mono shadow-2xl overflow-hidden text-xs"><div class="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between"><div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-rose-500"></div> <div class="w-3 h-3 rounded-full bg-amber-500"></div> <div class="w-3 h-3 rounded-full bg-emerald-500"></div> <span class="text-[11px] text-slate-400 ml-2">apps/api/src/modules/users/users.routes.ts</span></div> `);
    Terminal($$renderer2, { class: "w-4 h-4 text-slate-400" });
    $$renderer2.push(`<!----></div> <div class="p-6 space-y-2 overflow-x-auto text-slate-300"><p><span class="text-purple-400">export async function</span> <span class="text-blue-400">usersRoutes</span>(fastify: FastifyInstance) {</p> <p class="pl-4"><span class="text-purple-400">fastify</span>.addHook(<span class="text-emerald-300">'preHandler'</span>, authenticate);</p> <p class="pl-4 text-slate-500">// List users with RBAC permission guard &amp; pagination</p> <p class="pl-4"><span class="text-purple-400">fastify</span>.get(<span class="text-emerald-300">'/'</span>, { preHandler: [hasPermission(<span class="text-emerald-300">'users:read'</span>)] }, <span class="text-purple-400">async</span> (req, reply) => {</p> <p class="pl-8"><span class="text-purple-400">const</span> [data, total] = <span class="text-purple-400">await</span> Promise.all([</p> <p class="pl-12">prisma.user.findMany({ take: <span class="text-amber-400">10</span> }),</p> <p class="pl-12">prisma.user.count()</p> <p class="pl-8">]);</p> <p class="pl-8"><span class="text-purple-400">return</span> reply.send({ data, total });</p> <p class="pl-4">});</p> <p>}</p></div></div></div></div></section> <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-2xl border border-indigo-500/30 shadow-2xl text-center space-y-6 relative overflow-hidden"><div class="absolute -right-20 -bottom-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl pointer-events-none animate-orb-1"></div> <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">Siap Membangun Project Masa Depan Anda?</h2> <p class="text-xs sm:text-sm text-indigo-200 max-w-xl mx-auto">Masuk ke admin dashboard sekarang untuk menjelajahi seluruh fitur manajemen pengguna, peran, audit log, dan notifikasi.</p> <div class="pt-4 flex justify-center"><button class="px-8 py-4 rounded-2xl bg-white text-indigo-950 font-extrabold text-sm shadow-2xl hover:bg-slate-100 hover:scale-105 transition-all duration-300 flex items-center gap-2"><span>Masuk ke Dashboard Sekarang</span> `);
    Arrow_right($$renderer2, { class: "w-5 h-5" });
    $$renderer2.push(`<!----></button></div></div></section> <footer class="border-t border-border py-12 bg-card/80 backdrop-blur-xl relative z-10"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground"><div class="flex items-center gap-3"><div class="w-7 h-7 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">SK</div> <span>© 2026 FairuzKit Modern. Built with SvelteKit 5 &amp; Fastify.</span></div> <div class="flex items-center gap-6"><a href="#fitur" class="hover:text-foreground">Fitur</a> <a href="#tech" class="hover:text-foreground">Teknologi</a> <a href="http://localhost:3001/documentation" target="_blank" class="hover:text-foreground">Swagger API</a></div></div></footer></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
