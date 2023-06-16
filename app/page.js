import { archivoBlack } from "./layout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-around">
      <section className="flex  items-center flex-col text-center p-4 gap-5">
        <header>
          <h1>hola =)</h1>
          <h2>¿A quién estás buscando?</h2>
        </header>

        <div className="flex flex-row  flex-wrap justify-center gap-10 max-w-800px mt-10 items-center">
          <div className="borde_amarillo w-72  border flex flex-col items-center">
            <Image
              alt="Foto de federico holc con cara de programador"
              className="fotosperfil rounded-full border-2 border-black mt-4 mb-1"
              src="/ff3.jpg"
              width="150"
              height="150"
            />
            <h3 className="subrayado">Federico Holc </h3>
            <h3 className="subrayado">fotógrafo</h3>

            <p className="mt-6 mb-4">
              ↳
              <a className="linktext" href="http://fotos.fedeholc.ar">
                <span> fotos.fedeholc.ar</span>
              </a>
            </p>
          </div>

          <div className="borde_amarillo  w-72 border flex flex-col items-center">
            <Image
              alt="Foto de federico holc con cara de programador"
              className="fotosperfil rounded-full border-2 border-black mt-4 mb-1"
              src="/fp.jpg"
              width="150"
              height="150"
            />

            <h3 className="subrayado">Federico Holc </h3>
            <h3 className="subrayado">programador</h3>

            <p className="mt-6 mb-4">
              ↳
              <a className="linktext" href="http://dev.fedeholc.ar/">
                <span> dev.fedeholc.ar</span>
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>Federico Holc ⚡️ 2023</footer>
    </main>
  );
}
