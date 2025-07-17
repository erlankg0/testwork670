import type { LucideIcon } from 'lucide-react';

export type InfoLinePros = {
  type: 'tel' | 'email' | 'address';
  info: string;
  icon: LucideIcon;
}