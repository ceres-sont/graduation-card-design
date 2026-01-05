"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, Sparkles, Heart, Share2, MapPin, Calendar, Clock, ExternalLink } from "lucide-react"
import confetti from "canvas-confetti"

export default function GraduationCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const triggerConfetti = () => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
    }, 250)
  }

  const handleOpen = () => {
    setIsOpen(true)
    triggerConfetti()
  }

  if (!isMounted) return null

  const eventDetails = {
    time: "09:00 AM",
    date: "09/01/2026",
    address: "Khu Công nghệ cao XLHN, Hiệp Phú, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam",
    mapUrl: "https://www.google.com/maps/place/HUTECH+University+-+Thu+Duc+Campus/@10.855048,106.7827981,17z/data=!4m14!1m7!3m6!1s0x317527c3debb5aad:0x5fb58956eb4194d0!2zxJDhuqFpIEjhu41jIEh1dGVjaCBLaHUgRQ!8m2!3d10.8550427!4d106.785373!16s%2Fg%2F11h2qmtmp7!3m5!1s0x3175276e7ea103df:0xb6cf10bb7d719327!8m2!3d10.8557382!4d106.7856068!16s%2Fg%2F11c6tvvgch?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
    qrUrl: "/qr.png",
    bankQrUrl: "/bank-transfer-qr-code.jpg",
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200 via-slate-50 to-amber-50">
      <div className="relative w-full max-w-lg perspective-1000">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              transition={{ duration: 0.6 }}
              className="cursor-pointer group"
              onClick={handleOpen}
            >
              <Card className="glass p-8 border-2 border-primary/20 shadow-2xl overflow-hidden relative aspect-[4/3] flex flex-col items-center justify-center gap-6">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="bg-primary/10 p-4 rounded-full"
                >
                  <GraduationCap className="w-16 h-16 text-primary" />
                </motion.div>

                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-serif text-primary italic">Thư mời Tốt nghiệp</h2>
                  <p className="text-muted-foreground font-sans tracking-widest uppercase text-xs">Chạm để mở thiệp</p>
                </div>

                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="text-secondary w-8 h-8" />
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ type: "spring", damping: 12 }}
              className="w-full"
            >
              <Card className="glass shadow-2xl border-none overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                {/* Phần hình ảnh */}
                {/* <div className="w-full md:w-1/2 relative overflow-hidden bg-primary">
                  <img
                    src="/graduation-portrait-student-celebration.jpg"
                    alt="Graduation"
                    className="object-cover w-full h-full opacity-90 mix-blend-overlay hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-light tracking-[0.2em] uppercase">Niên khóa</p>
                    <p className="text-4xl font-serif font-bold italic">2021 - 2025</p>
                  </div>
                </div> */}

                {/* Phần nội dung */}
                <div className="w-full p-8 flex flex-col justify-between bg-white/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -mr-12 -mt-12" />

                  <div className="space-y-6 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-tighter mb-4">
                        Hành trình mới bắt đầu
                      </span>
                      <h1 className="text-4xl font-serif text-primary leading-tight">
                        Lễ Tốt Nghiệp <br />
                        <span className="text-secondary">Của Tôi</span>
                      </h1>
                    </motion.div>

                    <motion.div
                      className="space-y-4 text-sm text-slate-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p>
                        Chào mọi người, sau hành trình nỗ lực không ngừng, tôi rất vinh dự được chia sẻ khoảnh khắc
                        trọng đại này cùng gia đình và bạn bè.
                      </p>

                      <div className="grid grid-cols-1 gap-3 py-2">
                        <div className="flex items-start gap-3 p-3 rounded-xl bg-white/40 border border-white/60 shadow-sm">
                          <Calendar className="w-5 h-5 text-secondary shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Ngày lễ</p>
                            <p className="font-bold text-primary">{eventDetails.date}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-xl bg-white/40 border border-white/60 shadow-sm">
                          <Clock className="w-5 h-5 text-secondary shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Thời gian</p>
                            <p className="font-bold text-primary">{eventDetails.time}</p>
                          </div>
                        </div>

                        <a
                          href={eventDetails.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10 shadow-sm hover:bg-primary/10 transition-colors group"
                        >
                          <MapPin className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                          <div className="flex-1">
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground flex justify-between items-center">
                              Địa điểm
                              <ExternalLink className="w-3 h-3" />
                            </p>
                            <p className="font-medium text-primary text-xs leading-tight pr-2">
                              {eventDetails.address}
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-2 border-t border-dashed border-primary/10">
                        <div className="space-y-2">
                          <div className="bg-white p-2 rounded-lg shadow-inner border border-slate-100 aspect-square flex items-center justify-center">
                            <img
                              src={eventDetails.qrUrl || "/placeholder.svg"}
                              alt="Map QR Code"
                              className="w-full h-full opacity-90 object-contain"
                            />
                          </div>
                          <p className="text-[9px] text-center text-slate-500 font-medium">Quét chỉ đường</p>
                        </div>
                        {/* <div className="space-y-2">
                          <div className="bg-white p-2 rounded-lg shadow-inner border border-slate-100 aspect-square flex items-center justify-center">
                            <img
                              src={eventDetails.bankQrUrl || "/placeholder.svg"}
                              alt="Bank QR Code"
                              className="w-full h-full opacity-90 object-contain"
                            />
                          </div>
                          <p className="text-[9px] text-center text-slate-500 font-medium">Mừng tốt nghiệp</p>
                        </div> */}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="pt-8 flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full h-12"
                      onClick={triggerConfetti}
                    >
                      Chúc mừng <Heart className="ml-2 w-4 h-4 fill-current" />
                    </Button>
                    {/* <Button
                      variant="outline"
                      className="rounded-full w-12 h-12 p-0 border-primary/20 text-primary hover:bg-primary/5 bg-transparent"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button> */}
                  </motion.div>
                </div>
              </Card>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 text-primary/60 hover:text-primary text-xs uppercase tracking-widest block mx-auto transition-colors"
              >
                Đóng thiệp
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
