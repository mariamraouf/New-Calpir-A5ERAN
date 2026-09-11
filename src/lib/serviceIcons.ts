import {
  Globe, Database, Bot, Zap, Code, Settings, ShieldCheck, Search, Palette,
  Share2, Video, PhoneCall, CreditCard, Users, Brain, Wrench, FileCheck,
  Sparkles, Mail, BarChart3, Receipt, KanbanSquare, UserPlus, Banknote,
  GraduationCap, LifeBuoy,
  Gauge, ShoppingCart, CalendarCheck, Layers, PenTool, Send, TrendingUp, Target, FileSignature, Star, Mic, ScanText, BookOpen, Workflow, PieChart, PenLine, FolderTree, UserCheck, ListChecks, Scale, ClipboardCheck,
} from 'lucide-react';
import type { ElementType } from 'react';

/**
 * One icon map for the whole service catalog.
 *
 * This used to be duplicated in Services.tsx and ServiceDetail.tsx, which meant
 * adding a service with a new icon silently rendered the Sparkles fallback on
 * whichever page had not been updated. Add new icons here only.
 */
export const serviceIconMap: Record<string, ElementType> = {
  Globe, Database, Bot, Zap, Code, Settings, ShieldCheck, Search, Palette,
  Share2, Video, PhoneCall, CreditCard, Users, Brain, Wrench, FileCheck,
  Sparkles, Mail, BarChart3, Receipt, KanbanSquare, UserPlus, Banknote,
  GraduationCap, LifeBuoy,
  Gauge, ShoppingCart, CalendarCheck, Layers, PenTool, Send, TrendingUp, Target, FileSignature, Star, Mic, ScanText, BookOpen, Workflow, PieChart, PenLine, FolderTree, UserCheck, ListChecks, Scale, ClipboardCheck,
};

export const FallbackIcon = Sparkles;
