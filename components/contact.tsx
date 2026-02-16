"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendWhatsAppMessage = () => {
    const { firstName, lastName, email, subject, message } = formData
    const fullMessage = `Hi! I'm ${firstName} ${lastName}.\n\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${message}`
    const encodedMessage = encodeURIComponent(fullMessage)
    const whatsappUrl = `https://wa.me/5222290501866?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-accent" />
                  <span>Cuernavaca, Mexico</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-accent" />
                  <span>geronimosotelolopez@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-accent" />
                  <span>+52 222 905 0186</span>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 bg-transparent"
                onClick={() => window.open("https://www.github.com/Geritoblends", "_blank")}
              >
                <Github size={20} className="mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 bg-transparent"
                onClick={() => window.open("https://www.linkedin.com/in/geronimo-sotelo/", "_blank")}
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </Button>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-secondary text-sm leading-relaxed">
                  Currently open to internship opportunities, freelance projects, and collaborations in web development
                  and systems programming. Particularly interested in projects involving TypeScript, Rust, or innovative
                  gaming technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleInputChange} />
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Button type="button" className="w-full bg-accent hover:bg-accent/90" onClick={sendWhatsAppMessage}>
                  <MessageCircle size={16} className="mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
