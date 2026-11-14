import { Braces, Code, Database, Network } from 'lucide-react'
import {
  BashIcon,
  BurpSuiteIcon,
  CppIcon,
  CtfIcon,
  DnsEnumIcon,
  GitIcon,
  HtmlIcon,
  JavaIcon,
  KaliLinuxIcon,
  LinuxHardeningIcon,
  NmapIcon,
  OwaspIcon,
  ProblemSolvingIcon,
  PythonIcon,
  VSCodeIcon,
  WebPentestIcon,
  WiresharkIcon,
} from '../SkillIcons'

const icons = {
  // Dedicated authentic brand / domain skill keys
  cpp: CppIcon,
  python: PythonIcon,
  java: JavaIcon,
  bash: BashIcon,
  html: HtmlIcon,
  kali: KaliLinuxIcon,
  nmap: NmapIcon,
  wireshark: WiresharkIcon,
  burp: BurpSuiteIcon,
  git: GitIcon,
  vscode: VSCodeIcon,
  owasp: OwaspIcon,
  pentest: WebPentestIcon,
  dns: DnsEnumIcon,
  hardening: LinuxHardeningIcon,
  ctf: CtfIcon,
  problemSolving: ProblemSolvingIcon,

  // Fallback aliases matching previous generic Lucide icons
  code: CppIcon,
  filecode: PythonIcon,
  coffee: JavaIcon,
  terminal: BashIcon,
  globe: HtmlIcon,
  shield: KaliLinuxIcon,
  radar: NmapIcon,
  activity: WiresharkIcon,
  bug: BurpSuiteIcon,
  cpu: VSCodeIcon,
  shieldcheck: OwaspIcon,
  search: DnsEnumIcon,
  lock: LinuxHardeningIcon,
  flag: CtfIcon,
  brain: ProblemSolvingIcon,
  network: Network,
  database: Database,
  braces: Braces,
}

export function GlassIcon({ icon, label, color = '#00ff9d', className = '' }) {
  const Icon = icons[icon] || icons[icon?.toLowerCase()] || Code
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
        <Icon size={22} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
      </span>
      <span className="relative font-mono text-[11px] tracking-wide text-mist transition-colors duration-300 group-hover:text-white">
        {label}
      </span>
    </div>
  )
}
