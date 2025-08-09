import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto h-screen max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="flex flex-col justify-center px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
        <div className="mx-auto max-w-lg lg:mx-0">
          <div className="hidden sm:mt-10 sm:flex lg:mt-6">
            <div className="relative rounded-full px-3 py-1 text-sm text-neutral-600 ring-1 ring-neutral-200">
              Brașov, România · Boutique de bijuterii
            </div>
          </div>
          <h1 className="mt-16 text-pretty text-5xl font-semibold tracking-tight text-black sm:mt-8 sm:text-7xl">
            Bijuterii fine. Aproape de tine.
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-neutral-700 sm:text-xl/8">
            Feeric Biju este magazinul tău local de bijuterii din Brașov. Piese minimaliste, finisaje premium și o
            experiență prietenoasă — pentru fiecare zi și fiecare moment.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href="#colectie"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              Vezi colecția
            </a>
            <a
              href="#facebook"
              className="text-sm font-semibold text-black hover:text-green-600"
            >
              Scrie-ne pe Facebook <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative max-h-screen lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <Image
          alt="Macro bijuterii pe fundal deschis"
          src="/interior.png"
          width={1080}
          height={1080}
          className="aspect-[3/2] max-h-screen w-full bg-white object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
        />

        <div className="absolute bottom-0 left-0 w-full h-32 z-90 bg-linear-to-t from-white to-transparent" />
        <div className="absolute top-0 left-0 w-32 h-screen z-90 bg-linear-to-r from-white to-transparent" />
      </div>
    </section>
  );
}


