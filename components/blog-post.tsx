"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  title: string
  excerpt: string
  link: string
  index: number
}

export default function BlogPost({ title, excerpt, link, index }: BlogPostProps) {
  return (
    <motion.article
      className="backdrop-blur-sm p-6 rounded-3xl border border-gray-800 dark:border-gray-800 bg-white/5 dark:bg-black/5 hover:border-red-500/50 transition-all group h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{excerpt}</p>
      <Link
        href={link}
        className="inline-flex items-center text-sm font-medium text-red-500 dark:text-red-400 hover:text-red-400 dark:hover:text-red-300 transition-colors"
      >
        Read More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.article>
  )
}

