import React from "react"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"

export const mainMenuItems = [
  {
    path: "/who-are-we",
    title: "who are we",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/certisured/",
    name: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    url: "http://www.instagram.com/certisured",
    name: "Instagram",
  },
  {
    icon: <FaFacebookF />,
    url: "http://www.facebook.com/certisured",
    name: "Instagram",
  },
  {
    icon: <FaTwitter />,
    url: "http://www.twitter.com/certisured",
    name: "Instagram",
  },
]

export const footerMenuItems = [
  {
    path: "https://certisured.com/cair/",
    title: "Certified AI Researcher",
  },
  {
    path: "https://certisured.com/boot-camp-ethical-hacking/",
    title: "Boot camp Ethical Hacking",
  },
  {
    path: "https://certisured.com/webinar-career-planning-cyber-security/",
    title: "Webinar career planning cyber-security",
  },
  {
    path: "/training/diploma-in-machine-learning",
    title: "Diploma in Machine Learning",
  },
  {
    path: "/training/android-penetration-testing",
    title: "Android penetration testing",
  },
  {
    path: "/training/cloud-security-practitioner",
    title: "Cloud security practitioner",
  },
  {
    path: "/training/web-application-penetration-testing",
    title: "Web application penetration testing",
  },
]
