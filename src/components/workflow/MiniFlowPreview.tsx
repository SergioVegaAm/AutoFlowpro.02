'use client'

import React, { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { WorkflowData } from '@/types/workflow'

interface MiniFlowPreviewProps {
  workflow: WorkflowData
  className?: string
}

function MiniFlowPreview({ workflow, className }: MiniFlowPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesCount = workflow.nodes.length
  const edgesCount = workflow.edges.length

  useEffect(() => {
    // Aquí iría la lógica de renderizado del preview si es necesaria
  }, [workflow])

  return (
    <div className={cn('relative rounded-md border bg-muted/30 p-4', className)} ref={containerRef}>
      <div className="absolute right-2 top-2 flex gap-2">
        <Badge
          variant="secondary"
          className="bg-background/80 backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        >
          🔷 {nodesCount} {nodesCount === 1 ? 'nodo' : 'nodos'}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-background/80 backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        >
          🔗 {edgesCount} {edgesCount === 1 ? 'conexión' : 'conexiones'}
        </Badge>
      </div>
      <div className="h-[120px] w-full"></div>
    </div>
  )
}

// Exportamos el componente envuelto en un React.memo para optimizar renderizados
export const MiniFlowPreviewWrapper = React.memo(MiniFlowPreview) 