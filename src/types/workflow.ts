export interface WorkflowData {
  nodes: Array<{
    id: string
    type: string
    position: { x: number; y: number }
    data: Record<string, any>
  }>
  edges: Array<{
    id: string
    source: string
    target: string
    type?: string
  }>
} 