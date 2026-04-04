interface VersionBadgeProps {
  version: number
}

export function VersionBadge({ version }: VersionBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
      v{version}
    </span>
  )
}
