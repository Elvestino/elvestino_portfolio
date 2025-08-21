import { BsWhatsapp } from "react-icons/bs";
import { BsGoogle, BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import Link from "next/link";

const socialLinks = [
  {
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "#",
    icon: <BsFacebook size={22} />,
    label: "Facebook",
  },
  {
    href: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
    icon: <BsGithub size={22} />,
    label: "GitHub",
  },
  {
    href: process.env.NEXT_PUBLIC_GOOGLE_URL || "#",
    icon: <BsGoogle size={22} />,
    label: "Google",
  },
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    icon: <BsLinkedin size={22} />,
    label: "LinkedIn",
  },
  {
    href: process.env.NEXT_PUBLIC_WHATSAPP_URL || "#",
    icon: <BsWhatsapp size={22} />,
    label: "WhatsApp",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 ml-4">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex items-center justify-center w-[45px] h-[45px] rounded-full border-2 border-[#7cf03d] text-[#7cf03d] transition duration-500 hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
