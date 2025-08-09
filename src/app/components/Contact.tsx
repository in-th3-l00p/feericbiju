import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TikTokIcon from "./icons/TikTokIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-green-600">Brașov, România</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                Contact & Social
              </p>
              <p className="mt-6 text-lg text-neutral-700">
                Ne găsești în Brașov. Urmărește-ne și scrie-ne pe rețelele sociale sau contactează-ne direct pe WhatsApp.
              </p>

              <ul className="mt-10 space-y-8">
                <li className="flex items-center gap-6">
                  <div className="size-8 relative">
                    <InstagramIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-9 text-green-600" />
                  </div>
                  <div>
                    <a href="https://instagram.com/feericbiju" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:text-green-600">
                      Instagram
                    </a>
                    <div className="text-sm text-neutral-600">@feericbiju</div>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <div className="size-8 relative">
                    <TikTokIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 text-green-600" />
                  </div>
                  <div>
                    <a href="https://tiktok.com/@feericbiju" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:text-green-600">
                      TikTok
                    </a>
                    <div className="text-sm text-neutral-600">@feericbiju</div>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <FacebookIcon className="size-8 text-green-600" />
                  <div>
                    <a href="#facebook" className="font-semibold text-black hover:text-green-600">
                      Facebook
                    </a>
                    <div className="text-sm text-neutral-600">Feeric Biju</div>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <WhatsAppIcon className="size-8 text-green-600" />
                  <div>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:text-green-600">
                      WhatsApp
                    </a>
                    <div className="text-sm text-neutral-600">Mesaj direct</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start justify-end lg:order-first">
            <div className="w-[48rem] max-w-none overflow-hidden rounded-xl shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]">
              <iframe
                title="Harta Feeric Biju — Brașov"
                src="https://www.google.com/maps?q=Bra%C8%99ov%2C%20Rom%C3%A2nia&output=embed"
                loading="lazy"
                className="h-[24rem] w-full border-0 sm:h-[32rem]"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps cu locația Feeric Biju în Brașov"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


