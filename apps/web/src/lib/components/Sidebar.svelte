<script lang="ts">
  import { page } from '$app/stores';
  import { auth, hasPermission } from '$stores/auth';
  import {
    LayoutDashboard,
    Users,
    ShieldCheck,
    FileText,
    Bell,
    Settings,
    LogOut,
    Sparkles
  } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { clearAuth } from '$stores/auth';

  export let isMobileOpen = false;

  $: user = $auth.user;

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, perm: null },
    { label: 'Pengguna (Users)', href: '/dashboard/users', icon: Users, perm: 'users:read' },
    { label: 'Role & Izin', href: '/dashboard/roles', icon: ShieldCheck, perm: 'roles:read' },
    { label: 'Audit Logs', href: '/dashboard/audit-logs', icon: FileText, perm: 'audit:read' },
    { label: 'Notifikasi', href: '/dashboard/notifications', icon: Bell, perm: null },
  ];

  $: filteredMenu = menuItems.filter(item => {
    if (!item.perm) return true;
    return hasPermission(user, item.perm);
  });

  function handleLogout() {
    clearAuth();
    goto('/login');
  }
</script>

<!-- Desktop Sidebar -->
<aside class="hidden lg:flex flex-col w-64 border-r border-border bg-card/60 backdrop-blur-md h-screen sticky top-0">
  <!-- Brand Logo Header -->
  <div class="h-16 px-6 flex items-center justify-between border-b border-border">
    <a href="/dashboard" class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
        <Sparkles class="w-5 h-5" />
      </div>
      <div>
        <h1 class="font-bold text-base tracking-tight leading-none bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">FairuzKit</h1>
        <span class="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Fastify + SvelteKit</span>
      </div>
    </a>
  </div>

  <!-- Dynamic Role Menu Navigation -->
  <div class="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
    <div class="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
      Menu Utama ({user?.role || 'Guest'})
    </div>

    {#each filteredMenu as item}
      <a
        href={item.href}
        class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 {$page.url.pathname === item.href ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
      >
        <svelte:component this={item.icon} class="w-4 h-4" />
        <span>{item.label}</span>
      </a>
    {/each}
  </div>

  <!-- User Account Card & Logout Footer -->
  <div class="p-4 border-t border-border bg-muted/20">
    <div class="flex items-center gap-3 p-2 rounded-lg bg-card border border-border/50">
      <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs">
        {user?.name ? user.name[0].toUpperCase() : 'U'}
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-xs font-semibold truncate">{user?.name || 'Pengguna'}</p>
        <p class="text-[10px] text-muted-foreground truncate">{user?.email}</p>
      </div>
      <button on:click={handleLogout} title="Logout" class="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
        <LogOut class="w-4 h-4" />
      </button>
    </div>
  </div>
</aside>

<!-- Mobile Slide-over Drawer -->
{#if isMobileOpen}
  <div class="fixed inset-0 z-50 lg:hidden flex">
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" on:click={() => (isMobileOpen = false)}></div>
    <div class="relative w-64 bg-card border-r border-border h-full flex flex-col z-10 animate-in slide-in-from-left duration-200">
      <div class="h-16 px-6 flex items-center justify-between border-b border-border">
        <a href="/dashboard" class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
            <Sparkles class="w-4 h-4" />
          </div>
          <span class="font-bold text-sm bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">FairuzKit</span>
        </a>
      </div>
      <div class="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {#each filteredMenu as item}
          <a
            href={item.href}
            on:click={() => (isMobileOpen = false)}
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all {$page.url.pathname === item.href ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'}"
          >
            <svelte:component this={item.icon} class="w-4 h-4" />
            <span>{item.label}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

