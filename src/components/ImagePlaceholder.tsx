import { Camera, User, Building2, Sprout, BookOpen, Heart, Users, Activity } from 'lucide-react';

type PlaceholderVariant = 'person' | 'program' | 'building' | 'nature' | 'gallery' | 'activity' | 'worship' | 'community';

interface ImagePlaceholderProps {
  variant?: PlaceholderVariant;
  label?: string;
  className?: string;
  rounded?: string;
}

const variantConfig: Record<PlaceholderVariant, { icon: React.ElementType; gradient: string; iconColor: string }> = {
  person: {
    icon: User,
    gradient: 'linear-gradient(135deg, #341d6f 0%, #4a2d8f 100%)',
    iconColor: 'rgba(246,193,80,0.7)',
  },
  program: {
    icon: BookOpen,
    gradient: 'linear-gradient(135deg, #4a2d8f 0%, #6040a8 100%)',
    iconColor: 'rgba(255,255,255,0.55)',
  },
  building: {
    icon: Building2,
    gradient: 'linear-gradient(135deg, #250f5a 0%, #341d6f 100%)',
    iconColor: 'rgba(246,193,80,0.6)',
  },
  nature: {
    icon: Sprout,
    gradient: 'linear-gradient(135deg, #2d1a5c 0%, #4a2d8f 100%)',
    iconColor: 'rgba(250,212,122,0.7)',
  },
  gallery: {
    icon: Camera,
    gradient: 'linear-gradient(135deg, #341d6f 0%, #5c3daa 100%)',
    iconColor: 'rgba(255,255,255,0.5)',
  },
  activity: {
    icon: Activity,
    gradient: 'linear-gradient(135deg, #250f5a 0%, #4a2d8f 100%)',
    iconColor: 'rgba(250,212,122,0.65)',
  },
  worship: {
    icon: Heart,
    gradient: 'linear-gradient(135deg, #341d6f 0%, #f6c150 100%)',
    iconColor: 'rgba(255,255,255,0.6)',
  },
  community: {
    icon: Users,
    gradient: 'linear-gradient(135deg, #3a1f7a 0%, #5040a0 100%)',
    iconColor: 'rgba(246,193,80,0.65)',
  },
};

export default function ImagePlaceholder({
  variant = 'program',
  label,
  className = '',
  rounded = 'rounded-xl',
}: ImagePlaceholderProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${rounded} ${className}`}
      style={{ background: config.gradient }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)',
        }}
      />
      <Icon
        size={48}
        style={{ color: config.iconColor }}
        strokeWidth={1.2}
        className="relative z-10 mb-3"
      />
      {label && (
        <p className="relative z-10 text-white/70 text-xs font-medium tracking-wider uppercase text-center px-4">
          {label}
        </p>
      )}
      <div className="absolute bottom-3 right-3">
        <Camera size={14} className="text-white/25" />
      </div>
    </div>
  );
}
