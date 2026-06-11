"use client"

import { useEffect, useState } from "react"
import QRCode from "qrcode"

export function TikTokQR({
  url,
  icon,
  title,
}: {
  url: string
  icon: string
  title: string
}) {
  const [dataUrl, setDataUrl] = useState<string>("")

  useEffect(() => {
    QRCode.toDataURL(url, {
      errorCorrectionLevel: "H",
      margin: 2,
      width: 480,
      color: { dark: "#0a0e16", light: "#ffffff" },
    })
      .then(setDataUrl)
      .catch(() => setDataUrl(""))
  }, [url])

  return (
    <div className="relative mx-auto h-56 w-56 rounded-2xl bg-white p-3 shadow-lg">
      {dataUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={dataUrl || "/placeholder.svg"}
          alt={`QR code to play ${title} on TikTok Mini Games`}
          className="h-full w-full"
          width={224}
          height={224}
        />
      ) : (
        <div className="h-full w-full animate-pulse rounded-lg bg-muted" aria-hidden />
      )}
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white p-1 shadow-md ring-2 ring-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon || "/placeholder.svg"}
          alt={`${title} icon`}
          className="h-full w-full rounded-lg object-cover"
          width={48}
          height={48}
        />
      </div>
    </div>
  )
}
