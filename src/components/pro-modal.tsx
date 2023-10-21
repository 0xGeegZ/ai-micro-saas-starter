"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { Check, Zap } from "lucide-react"
import { toast } from "react-hot-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useProModal } from "@/lib/hooks/use-pro-modal"
import { tools } from "@/config/tools"
import { Card } from "@/components/ui/card"
import { cn, transformApplications } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { Icons } from "./icons"

interface ProModalProps {
  applications: any
}

export const ProModal = ({ applications }: ProModalProps) => {
  const proModal = useProModal()
  const [loading, setLoading] = useState(false)

  const [features, setFeatures] = useState(tools)

  useEffect(() => {
    const mergeAllFeatures = async () => {
      const appFeatures = transformApplications(applications)
      const mergedFeatures = [...appFeatures, ...tools]
      setFeatures(mergedFeatures)
    }

    mergeAllFeatures()
  }, [])

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/stripe")

      window.location.href = response.data.url
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
              Upgrade to {siteConfig.name}
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {features.map((feature) => {
              const Icon = Icons[feature.icon as keyof typeof Icons]
              return (
                <Card
                  key={feature.href}
                  className="p-3 border-black/5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-x-4">
                    <div
                      className={cn("p-2 w-fit rounded-md", feature.bgColor)}
                    >
                      <Icon className={cn("w-6 h-6", feature.color)} />
                    </div>
                    <div className="font-semibold text-sm">{feature.label}</div>
                  </div>
                  <Check className="text-primary w-5 h-5" />
                </Card>
              )
            })}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
