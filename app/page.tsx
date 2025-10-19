import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Neuronix UI Kit</h1>
          <p className="text-lg text-muted-foreground">
            A modern UI component library built with Next.js and Tailwind CSS
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
            <div className="flex items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🚀</Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Button States</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button className="custom-class">Custom Class</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}