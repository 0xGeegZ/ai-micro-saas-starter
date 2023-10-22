"use client"
import { cn } from "@/lib/utils"
import GridPattern from "./magicui/grid-pattern"
import { useTheme } from "next-themes"
import RadialBackground from "./radial-background"
import { useState, useEffect } from "react"

export default function BackgroundProvider() {
  const { theme } = useTheme()
  const [isThemeDefined, setIsThemeDefined] = useState(false)

  useEffect(() => {
    if (theme) {
      setIsThemeDefined(true)
    }
  }, [theme])

  if (!isThemeDefined) {
    return null
  }

  return (
    <>
      {theme === "light" ? (
        <RadialBackground />
      ) : (
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className={cn(
            "-z-10 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      )}
    </>
  )
}
