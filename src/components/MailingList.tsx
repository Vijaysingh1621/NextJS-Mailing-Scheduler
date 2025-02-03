"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2 } from "lucide-react"
import { getMailings, deleteMailing, type Mailing } from "@/lib/api"

export default function MailingList() {
  const [mailings, setMailings] = useState<Mailing[]>([])

  useEffect(() => {
    fetchMailings()
  }, [])

  const fetchMailings = async () => {
    const fetchedMailings = await getMailings()
    setMailings(fetchedMailings)
  }

  const handleDelete = async (id: string) => {
    await deleteMailing(id)
    fetchMailings()
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-white/10">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Mailer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">List</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Schedule</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <AnimatePresence>
            {mailings.map((mailing) => (
              <motion.tr
                key={mailing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{mailing.mailerId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{mailing.listId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {new Date(mailing.scheduleDateTime).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(mailing.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  )
}

