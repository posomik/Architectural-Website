"use client"


import { useState } from "react"
import { Download, ZoomIn, ZoomOut, Move, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

// Replace with your actual blueprint data
const blueprints = [
  {
    id: 1,
    title: "Eldoret Residential - Floor Plan",
    project: "Eldoret",
    type: "Floor Plan",
    // Replace with your blueprint image
    image: "/images/1.jpg",
  },
  {
    id: 2,
    title: "Ngong Plan",
    project: "ngong",
    type: "Elevations",
    // Replace with your blueprint image
    image: "/images/3.jpg",
  },
  {
    id: 3,
    title: "Deputy Chief Justice Office - Floor Plan",
    project: "Deputy Chief Justice Office - Floor Plan",
    type: "Floor Plan",
    // Replace with your blueprint image
    image: "/images/2.png",
  },
]

export default function BlueprintsPage() {
  const [activeBlueprint, setActiveBlueprint] = useState(blueprints[0])
  const [zoom, setZoom] = useState(100)
  const [activeTool, setActiveTool] = useState("move")
  const [layers, setLayers] = useState({
    structure: true,
    dimensions: true,
    furniture: true,
    electrical: true,
    plumbing: true,
  })

  const handleLayerToggle = (layer: keyof typeof layers) => {
    setLayers((prev) => ({
      ...prev,
      [layer]: !prev[layer],
    }))
  }

  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        {/* Hero Image - Replace with your blueprints gallery image */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        />

        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Blueprint Showcase</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore detailed architectural blueprints of our projects with interactive tools.
          </p>
        </div>
      </section>

      {/* Blueprint Viewer */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blueprint Selection */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Blueprints</h2>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="all" className="flex-1">
                        All
                      </TabsTrigger>
                      <TabsTrigger value="floor-plans" className="flex-1">
                        Floor Plans
                      </TabsTrigger>
                      <TabsTrigger value="elevations" className="flex-1">
                        Elevations
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="mt-4">
                      <div className="space-y-2">
                        {blueprints.map((blueprint) => (
                          <Button
                            key={blueprint.id}
                            variant={activeBlueprint.id === blueprint.id ? "default" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => setActiveBlueprint(blueprint)}
                          >
                            {blueprint.title}
                          </Button>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="floor-plans" className="mt-4">
                      <div className="space-y-2">
                        {blueprints
                          .filter((blueprint) => blueprint.type === "Floor Plan")
                          .map((blueprint) => (
                            <Button
                              key={blueprint.id}
                              variant={activeBlueprint.id === blueprint.id ? "default" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setActiveBlueprint(blueprint)}
                            >
                              {blueprint.title}
                            </Button>
                          ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="elevations" className="mt-4">
                      <div className="space-y-2">
                        {blueprints
                          .filter((blueprint) => blueprint.type === "Elevations")
                          .map((blueprint) => (
                            <Button
                              key={blueprint.id}
                              variant={activeBlueprint.id === blueprint.id ? "default" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setActiveBlueprint(blueprint)}
                            >
                              {blueprint.title}
                            </Button>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">Layers</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="structure"
                          checked={layers.structure}
                          onCheckedChange={() => handleLayerToggle("structure")}
                        />
                        <label
                          htmlFor="structure"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Structure
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="dimensions"
                          checked={layers.dimensions}
                          onCheckedChange={() => handleLayerToggle("dimensions")}
                        />
                        <label
                          htmlFor="dimensions"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Dimensions
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="furniture"
                          checked={layers.furniture}
                          onCheckedChange={() => handleLayerToggle("furniture")}
                        />
                        <label
                          htmlFor="furniture"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Furniture
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="electrical"
                          checked={layers.electrical}
                          onCheckedChange={() => handleLayerToggle("electrical")}
                        />
                        <label
                          htmlFor="electrical"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Electrical
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="plumbing"
                          checked={layers.plumbing}
                          onCheckedChange={() => handleLayerToggle("plumbing")}
                        />
                        <label
                          htmlFor="plumbing"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Plumbing
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="w-full" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download Blueprint
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Blueprint Viewer */}
            <div className="lg:col-span-3">
              <Card className="border-none shadow-md">
                <CardContent className="p-0">
                  <div className="bg-slate-100 p-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold">{activeBlueprint.title}</h2>
                    <div className="flex space-x-2">
                      <Button
                        variant={activeTool === "move" ? "default" : "outline"}
                        size="icon"
                        onClick={() => setActiveTool("move")}
                      >
                        <Move className="h-4 w-4" />
                        <span className="sr-only">Move</span>
                      </Button>
                      <Button
                        variant={activeTool === "measure" ? "default" : "outline"}
                        size="icon"
                        onClick={() => setActiveTool("measure")}
                      >
                        <Ruler className="h-4 w-4" />
                        <span className="sr-only">Measure</span>
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => setZoom(Math.min(200, zoom + 10))}>
                        <ZoomIn className="h-4 w-4" />
                        <span className="sr-only">Zoom in</span>
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => setZoom(Math.max(50, zoom - 10))}>
                        <ZoomOut className="h-4 w-4" />
                        <span className="sr-only">Zoom out</span>
                      </Button>
                      <div className="w-24 flex items-center">
                        <Slider
                          value={[zoom]}
                          min={50}
                          max={200}
                          step={1}
                          onValueChange={(value) => setZoom(value[0])}
                        />
                      </div>
                      <span className="text-sm">{zoom}%</span>
                    </div>
                  </div>

                  <div className="relative overflow-auto bg-white" style={{ height: "calc(100vh - 300px)" }}>
                    <div
                      className="relative cursor-move"
                      style={{
                        transform: `scale(${zoom / 100})`,
                        transformOrigin: "top left",
                        transition: "transform 0.2s ease-out",
                      }}
                    >
                      <img
                        src={activeBlueprint.image || "/placeholder.svg"}
                        alt={activeBlueprint.title}
                        className="max-w-none"
                      />

                      {/* In a real implementation, this would include interactive elements
                          like measurement tools, annotations, and layer visibility controls */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

