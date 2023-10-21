"use client"

import { useEffect, useState } from "react"

import { ProModal } from "@/components/pro-modal"

interface ModalProviderProps {
  applications: any
}

export const ModalProvider = ({ applications }: ModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <ProModal applications={applications} />
    </>
  )
}
