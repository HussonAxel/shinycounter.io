import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokemon/$pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pokemon/$pokemon"!</div>
}
