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
    name: "Brățară minimal din argint",
    href: "#",
    description:
      "Linii curate și finisaj lucios — o piesă versatilă pentru orice ținută.",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    price: "249 RON",
    material: "Argint 925",
  },
  {
    id: 2,
    name: "Cercei pearl drop",
    href: "#",
    description:
      "Accente perlate pentru un look clasic, discret și elegant.",
    imageUrl:
      "https://images.unsplash.com/photo-1617038260897-89c5e7aa8e06?auto=format&fit=crop&w=1200&q=80",
    price: "199 RON",
    material: "Argint 925 & perle de cultură",
  },
  {
    id: 3,
    name: "Colier chain subțire",
    href: "#",
    description:
      "Un lanț delicat, perfect pentru layering sau purtat singular.",
    imageUrl:
      "https://images.unsplash.com/photo-1577041249022-26cc744ddda3?auto=format&fit=crop&w=1200&q=80",
    price: "229 RON",
    material: "Argint 925",
  },
  {
    id: 4,
    name: "Inel signet mic",
    href: "#",
    description:
      "Proporții echilibrate și formă clasică — un statement discret.",
    imageUrl:
      "https://images.unsplash.com/photo-1617160722418-5cae12c08670?auto=format&fit=crop&w=1200&q=80",
    price: "279 RON",
    material: "Argint 925",
  },
  {
    id: 5,
    name: "Cercei huggie",
    href: "#",
    description:
      "Confortabili, ușori și ideali pentru purtare zilnică.",
    imageUrl:
      "https://images.unsplash.com/photo-1612178991541-e4d7d5f63a25?auto=format&fit=crop&w=1200&q=80",
    price: "159 RON",
    material: "Argint 925",
  },
  {
    id: 6,
    name: "Colier cu pandant minimalist",
    href: "#",
    description:
      "Detaliu fin care adaugă strălucire ținutelor cotidiene.",
    imageUrl:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    price: "249 RON",
    material: "Argint 925",
  },
];

export default function Collection() {
  return (
    <section id="colectie" className="bg-white py-24 sm:py-32">
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

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={product.href}
                    className="rounded-md bg-green-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                  >
                    Detalii
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


