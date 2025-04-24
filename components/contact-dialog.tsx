"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact-form"

interface ContactDialogProps {
  buttonText?: string
  buttonClassName?: string
  buttonFullWidth?: boolean
}

export function ContactDialog({
  buttonText = "Contact Me",
  buttonClassName = "bg-black text-white hover:bg-black/80",
  buttonFullWidth = true,
}: ContactDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSuccess = () => {
    // Close the dialog after a short delay to allow the success message to be seen
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button className={`${buttonClassName} ${buttonFullWidth ? "w-full" : ""}`}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <ContactForm onSuccess={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
