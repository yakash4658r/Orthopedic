import React from 'react';
import {
  Activity,
  Hospital,
  Pill,
  Baby,
  Dna,
  Zap,
  Target,
  Brain,
  Shield,
  Microscope,
  Dumbbell,
  Award,
  Users,
  TrendingUp,
  Globe,
  Stethoscope,
  Heart,
  FileText,
  BookOpen,
  Clock,
  Phone,
  Star,
  Mail,
  Trophy
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Hospital,
  Pill,
  Baby,
  Dna,
  Zap,
  Target,
  Brain,
  Activity,
  Shield,
  Microscope,
  Dumbbell,
  Award,
  Users,
  TrendingUp,
  Globe,
  Stethoscope,
  Heart,
  FileText,
  BookOpen,
  Clock,
  Phone,
  Star,
  Mail,
  Trophy
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  fill?: string;
}

export default function LucideIcon({ name, className, size = 20, fill }: LucideIconProps) {
  // If "Bone" is not available or if custom SVGs are preferred, we can use Activity
  const IconComponent = iconMap[name] || Activity;
  return <IconComponent className={className} size={size} fill={fill} />;
}
