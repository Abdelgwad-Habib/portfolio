import {
  Activity,
  Brain,
  Braces,
  Bug,
  Code,
  Coffee,
  Cpu,
  Database,
  FileCode,
  Flag,
  Globe,
  Lock,
  Network,
  Radar,
  Search,
  Shield,
  ShieldCheck,
  Terminal,
} from 'lucide-react'

const icons = {
  code: Code,
  filecode: FileCode,
  coffee: Coffee,
  terminal: Terminal,
  globe: Globe,
  shield: Shield,
  shieldcheck: ShieldCheck,
  radar: Radar,
  activity: Activity,
  bug: Bug,
  cpu: Cpu,
  search: Search,
  lock: Lock,
  flag: Flag,
  brain: Brain,
  network: Network,
  database: Database,
  braces: Braces,
}

export function GlassIcon({ icon, label, color = '#00ff9d', className = '' }) {
  const Icon = icons[icon] || Code
  return (
    <div
      className={`group relative flex flex-col items-center gap-2.5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(120% 120% at 50% 0%, ${color}22 0%, transparent 60%)` }}
      />
      <span
        className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-lg transition-transform duration-300 group-hover:scale-110"
        style={{ boxShadow: `0 0 24px -6px ${color}55` }}
      >
        <Icon size={20} style={{ color }} strokeWidth={1.8} />
      </span>
      <span className="relative font-mono text-[11px] tracking-wide text-mist transition-colors duration-300 group-hover:text-white">
        {label}
      </span>
    </div>
  )
}
