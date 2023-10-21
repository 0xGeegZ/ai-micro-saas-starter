"use client"
import { useRouter } from "next/navigation"
import { useToast } from "@/lib/hooks/use-toast"
import CardShell, { CardProps } from "./card-shell"
import { useState } from "react"

interface ApplicationCardProps {
  card: CardProps
}

export default function ApplicationCard({ card }: ApplicationCardProps) {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleClick() {
    setIsLoading(true)
    router.push(card.href)
  }
  return <CardShell card={card} func={handleClick} isLoading={isLoading} />
}
