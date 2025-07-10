import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/newHunt')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/newHunt"!</div>
}
