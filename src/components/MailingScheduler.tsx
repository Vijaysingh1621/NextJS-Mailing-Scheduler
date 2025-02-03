"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X } from "lucide-react"
import MailingForm from "./MailingForm"
import MailingList from "./MailingList"

export default function MailingScheduler() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="glass-panel rounded-2xl overflow-hidden relative">
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
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Create New Mailing</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <MailingForm onClose={() => setIsFormOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

