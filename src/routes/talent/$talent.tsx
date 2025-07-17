import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/talent/$talent')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/talent/$talent"!</div>
}
