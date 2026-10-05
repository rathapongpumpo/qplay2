import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/content";
export function LineMark() {
  return <span className="line-mark" aria-hidden="true">LINE</span>;
}
export function LineButton({ children = "ทัก LINE เลย", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a className={`button button-line ${className}`} href={contact.line} target="_blank" rel="noopener noreferrer"><LineMark />{children}<ArrowUpRight size={19} aria-hidden="true" /></a>;
}
