import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TikTokIcon from "./icons/TikTokIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const navigation = [
  { name: "Facebook", href: "#facebook", icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com/feericbiju", icon: InstagramIcon },
  { name: "TikTok", href: "https://tiktok.com/@feericbiju", icon: TikTokIcon },
  { name: "WhatsApp", href: "https://wa.me/", icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 mt-12 lg:pt-18 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-neutral-600 hover:text-green-600" aria-label={item.name}>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-neutral-600 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} Feeric Biju, Brașov. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}


