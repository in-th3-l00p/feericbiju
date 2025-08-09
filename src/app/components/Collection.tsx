type Product = {
  id: number;
  name: string;
  href: string;
  description: string;
  imageUrl: string;
  price: string;
  material: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Brățara „Valurile Mării”",
    href: "#",
    description:
      "Brățară delicată din oțel inoxidabil cu charm în formă de scoică, inspirată de liniștea valurilor.",
    imageUrl: "/collection/image-1.png",
    price: "249 RON",
    material: "Argint 925",
  },
  {
    id: 2,
    name: "Colier „Luna de Argint”",
    href: "#",
    description:
      "Colier fin din argint 925, cu pandantiv rotund gravat, evocând misterul nopților cu lună plină.",
    imageUrl: "/collection/image-2.png",
    price: "199 RON",
    material: "Argint 925 & perle de cultură",
  },
  {
    id: 3,
    name: "Cercei „Frunza de Rouă”",
    href: "#",
    description:
      "Cercei mici din oțel inoxidabil, model frunză, accentuați cu pietricele translucide ca picăturile de rouă.",
    imageUrl: "/collection/image-3.png",
    price: "229 RON",
    material: "Argint 925",
  },
  {
    id: 4,
    name: "Inel „Aurora Verde”",
    href: "#",
    description:
      "Inel reglabil cu piatră semiprețioasă verde, inspirat de lumina dansantă a aurorei boreale.",
    imageUrl: "/collection/image-4.png",
    price: "279 RON",
    material: "Argint 925",
  },
  {
    id: 5,
    name: "Brățara „Nodul Inimilor”",
    href: "#",
    description:
      "Brățară minimalistă cu șnur reglabil și simbol al infinitului, dedicată legăturilor de suflet.",
    imageUrl: "/collection/image-5.png",
    price: "159 RON",
    material: "Argint 925",
  },
  {
    id: 6,
    name: "Colier „Soarele de Chihlimbar”",
    href: "#",
    description:
      "Colier cu pandantiv de chihlimbar natural, radianță caldă ce amintește de apusurile verii.",
    imageUrl: "/collection/image-6.png",
    price: "249 RON",
    material: "Argint 925",
  },
];

export default function Collection() {
  return (
    <section id="colectie" className="bg-white py-24 sm:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Colecția noastră
          </h2>
          <p className="mt-2 text-lg/8 text-neutral-700">
            Piese minimaliste, realizate cu grijă — pentru fiecare zi și fiecare moment.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt={product.name}
                  src={product.imageUrl}
                  className="aspect-square w-full rounded-2xl bg-neutral-100 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />
              </div>

              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-6 flex items-center gap-x-3 text-xs">
                  <span className="rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                    {product.material}
                  </span>
                  <span className="text-neutral-500">{product.price}</span>
                </div>

                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-black group-hover:text-green-600">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm/6 text-neutral-700">{product.description}</p>
                </div>

                {/* <div className="mt-6 flex items-center justify-between">
                  <a
                    href={product.href}
                    className="rounded-md bg-green-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                  >
                    Detalii
                  </a>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


