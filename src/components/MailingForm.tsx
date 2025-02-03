"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Users, Calendar } from "lucide-react"
import { createMailing } from "@/lib/api"

interface Mailer {
  id: string
  name: string
}

interface List {
  id: string
  name: string
}

export default function MailingForm({ onClose }: { onClose: () => void }) {
  const [mailers, setMailers] = useState<Mailer[]>([])
  const [lists, setLists] = useState<List[]>([])
  const [selectedMailer, setSelectedMailer] = useState("")
  const [selectedList, setSelectedList] = useState("")
  const [scheduleDate, setScheduleDate] = useState("")
  const [scheduleTime, setScheduleTime] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const mailersResponse = await fetch("/api/mailers")
      const listsResponse = await fetch("/api/lists")
      const mailersData = await mailersResponse.json()
      const listsData = await listsResponse.json()
      setMailers(mailersData)
      setLists(listsData)
    }
    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const scheduleDateTime = new Date(`${scheduleDate}T${scheduleTime}:00`)
    await createMailing({
      mailerId: selectedMailer,
      listId: selectedList,
      scheduleDateTime: scheduleDateTime.toISOString(),
    })
    onClose()
  }

  const inputClasses =
    "block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="mailer" className={labelClasses}>
          Select Mailer
        </label>
        <div className="relative">
          <select
            id="mailer"
            value={selectedMailer}
            onChange={(e) => setSelectedMailer(e.target.value)}
            className={inputClasses}
            required
          >
            <option value="" className="bg-gray-900">
              Choose a mailer
            </option>
            {mailers.map((mailer) => (
              <option key={mailer.id} value={mailer.id} className="bg-gray-900">
                {mailer.name}
              </option>
            ))}
          </select>
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
      <div>
        <label htmlFor="list" className={labelClasses}>
          Select List
        </label>
        <div className="relative">
          <select
            id="list"
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
            className={inputClasses}
            required
          >
            <option value="" className="bg-gray-900">
              Choose a list
            </option>
            {lists.map((list) => (
              <option key={list.id} value={list.id} className="bg-gray-900">
                {list.name}
              </option>
            ))}
          </select>
          <Users className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
      <div>
        <label htmlFor="scheduleDate" className={labelClasses}>
          Schedule Date
        </label>
        <div className="relative">
          <input
            type="date"
            id="scheduleDate"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            className={inputClasses}
            required
          />
          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
      <div>
        <label htmlFor="scheduleTime" className={labelClasses}>
          Schedule Time
        </label>
        <input
          type="time"
          id="scheduleTime"
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
          className={inputClasses}
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-300"
      >
        Schedule Mailing
      </motion.button>
    </form>
  )
}

