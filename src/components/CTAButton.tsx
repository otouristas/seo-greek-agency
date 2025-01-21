import Link from 'next/link'

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children: React.ReactNode;
}

export default function CTAButton({
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  children
}: CTAButtonProps) {
  const baseClasses = 'rounded-full transition-colors text-center inline-block'
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-blue-600 hover:bg-blue-50',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  }[variant]

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  }[size]

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </Link>
  )
}
