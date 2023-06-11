import { archivoBlack } from "./layout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex  items-center flex-col  p-24 gap-5">
        <h1>hola =)</h1>
        <h2>¿A cuál estás buscando?</h2>

        <div className="grid grid-cols-2 gap-10 max-w-800px mt-10">
          <div className="link__insta w-96 border flex flex-col items-center">
            <Image
              className="fotosperfil rounded-full border-2 border-black mt-4 mb-1"
              src="/ff3.jpg"
              width="150"
              height="150"
            />
            <h3 className="link__pink">Federico Holc </h3>
            <h3 className="link__pink">fotógrafo</h3>

            <p className="mt-6 mb-4">
              ↳
              <a className="linktext" href="http://www.instagram.com/fedeholc/">
                <span> instagram.com/fedeholc</span>
              </a>
            </p>
          </div>
          <div className="link__insta w-96 border flex flex-col items-center">
            <Image
              className="fotosperfil rounded-full border-2 border-black mt-4 mb-1"
              src="/fp.jpg"
              width="150"
              height="150"
            />

            <h3 className="link__pink">Federico Holc</h3>
            <h3 className="link__pink">programador</h3>

            <p className="mt-6 mb-4">
              ↳
              <a className="linktext" href="http://www.instagram.com/fedeholc/">
                <span> dev.fedeholc.ar</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}