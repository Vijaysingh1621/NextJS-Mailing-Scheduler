"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import MailingForm from "./MailingForm"
import MailingList from "./MailingList"
import Modal from "./Modal"

export default function MailingScheduler() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Scheduled Mailings</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-300"
            onClick={() => setIsFormOpen(true)}
          >
            <Plus className="mr-2" size={20} />
            New Mailing
          </motion.button>
        </div>
        <MailingList />
      </div>

      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title="Create New Mailing">
        <MailingForm onClose={() => setIsFormOpen(false)} />
      </Modal>
    </>
  )
}

