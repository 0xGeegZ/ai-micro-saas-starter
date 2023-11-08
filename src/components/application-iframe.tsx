"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Iframe from "react-iframe"

interface ApplicationIframeProps {
  url: string
}

const ApplicationIframe: React.FC<ApplicationIframeProps> = ({ url }) => {
  const { resolvedTheme } = useTheme()
  const [fullUrl, setFullUrl] = useState("")

  useEffect(() => {
    if (resolvedTheme) {
      // Create a URL object
      const urlObj = new URL(url)

      // Create a URLSearchParams object from the search string of the URL
      const params = new URLSearchParams(urlObj.search)

      // Add the resolvedTheme as a param called theme
      params.set("theme", resolvedTheme)
      params.set("isDisplayHeader", "false")

      // Update the search string of the URL object
      urlObj.search = params.toString()

      // Update the fullUrl state
      setFullUrl(urlObj.toString())
    }
  }, [resolvedTheme, url])

  return (
    <>
      {fullUrl && (
        <Iframe
          url={fullUrl}
          width="100%"
          height="100%"
          className="h-full w-full"
          display="block"
          position="relative"
        />
      )}
    </>
  )
}

export default ApplicationIframe
