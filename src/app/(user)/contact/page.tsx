'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import WrapperCard from "@/components/WrapperCard"
import { useState } from "react"
import { addMessage } from "@/actions/message"
import { toast } from "sonner"

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await addMessage({ firstName, lastName, email, message });
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };
  

  return (
    <div>
      <WrapperCard title='contact' />
    
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <InfoCard
          icon={<MapPin className="h-6 w-6" />}
          title="Our Location"
          content="7H9X+QMF, Baglung 33300, Nepal"
        />
        <InfoCard icon={<Phone className="h-6 w-6" />} title="Phone Number" content="+9779768520742" />
        <InfoCard icon={<Mail className="h-6 w-6" />} title="Email Address" content="futurebrighter@gmail.com" />
        <InfoCard icon={<Clock className="h-6 w-6" />} title="working Hours" content="Sun-Fri: 10AM - 4PM" />
      </div>

      {/* Lower section with map and form */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Map section */}
        <div className="lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
        {/* Wrapper div with aspect ratio */}
        <div className="relative w-full aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.6489600583468!2d83.59868705526318!3d28.26911368528613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e3f2317f4151%3A0x8d31a86fa8af1b63!2sFuture%20Brighter%20Secondary%20School!5e0!3m2!1sen!2sin!4v1737362908609!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            allowFullScreen
          />
        </div>
      </CardContent>
          </Card>
        </div>

        {/* Contact form section */}
        <div className="lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={submitHandler}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message here..."  value={message} onChange={(e)=>setMessage(e.target.value)} className="h-40" />
                </div>
                <Button type="submit" className="w-full bg-blue-600">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        {icon}
        <CardTitle className="ml-2 text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  )
}

