import Image from 'next/image'
import forbiddenFountain from '../../public/images/forbidden-fountain.png'
import forbiddenLockerroom from '../../public/images/forbidden-lockerroom.png'
import iconHour from '../../public/images/icon-hour.png'
import partialFountain from '../../public/images/partial-fountain.png'
import partialLockerroom from '../../public/images/partial-lockerroom.png'
import recommendedMask from '../../public/images/recommended-mask.png'
import recommendedTowel from '../../public/images/recommended-towel.png'
import requiredLockerroom from '../../public/images/required-lockerroom.png'
import requiredMask from '../../public/images/required-mask.png'
import requiredTowel from '../../public/images/required-towel.png'

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl max-w-xs text-dark-grey font-bold after:block after:bg-dark-grey after:h-2 after:w-20 after:mt-4">
        REABERTURA SMART FIT
      </h1>
      <p className="mt-4 text-lg text-dark-grey">
        O horário de funcionamento das nossas unidades está seguindo os decretos
        de cada município. Por isso, confira aqui se a sua unidade está aberta e
        as medidas de segurança que estamos seguindo.
      </p>
      <form className="rounded-lg border-4 text-light-grey border-[#e4e4e4] p-4 mt-10">
        <header className="flex text-lg items-center gap-2">
          <Image src={iconHour} alt="Relógio" width={40} />
          <span>Horário</span>
        </header>
        <div className="mt-8">
          <h1 className="text-2xl p-2 font-light">
            Qual período quer treinar?
          </h1>
          <div className="space-y-2">
            <hr />
            <div className="w-full flex gap-2 items-center">
              <input type="radio" name="turno" id="manha" />
              <label htmlFor="manha">Manhã</label>
              <span className="ml-auto">06:00 as 12:00</span>
            </div>
            <hr />
            <div className="w-full flex gap-2 items-center">
              <input type="radio" name="turno" id="tarde" />
              <label htmlFor="tarde">Tarde</label>
              <span className="ml-auto">12:01 as 18:00</span>
            </div>
            <hr />
            <div className="w-full flex gap-2 items-center">
              <input type="radio" name="turno" id="noite" />
              <label htmlFor="noite">Noite</label>
              <span className="ml-auto">18:01 as 23:00</span>
            </div>
            <hr />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-10">
            <div className="space-x-2">
              <input type="checkbox" name="fechadas" id="fechadas" />
              <label htmlFor="fechadas">Exibir unidades fechadas</label>
            </div>
            <span>
              Resultados encontrados: <strong>0</strong>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 max-w-[600px] font-black mt-6">
            <button
              className="rounded bg-yellow py-2 px-8 text-black"
              type="submit"
            >
              ENCONTRAR UNIDADE
            </button>
            <button
              type="button"
              className="rounded border-2 border-light-grey py-2 px-8 text-black"
            >
              LIMPAR
            </button>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-[#e4e4e4] rounded-md mt-10 p-6 gap-4">
        <div className="grid grid-cols-2 place-items-center">
          <strong className="col-span-full">Máscara</strong>
          <div className="flex flex-col items-center">
            <Image src={requiredMask} width={70} alt="Máscara obrigatória" />
            <span>Obrigatório</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={recommendedMask} width={70} alt="Máscara recomendada" />
            <span>Recomendada</span>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <strong className="col-span-full">Toalha</strong>
          <div className="flex flex-col items-center">
            <Image src={requiredTowel} width={70} alt="Toalha obrigatória" />
            <span>Obrigatória</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={recommendedTowel} width={70} alt="Toalha recomendada" />
            <span>Recomendada</span>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <strong className="col-span-full">Bebedouro</strong>
          <div className="flex flex-col items-center">
            <Image src={partialFountain} width={70} alt="Bebedouro parcial" />
            <span>Parcial</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={forbiddenFountain}
              width={70}
              alt="Bebedouro proibido"
            />
            <span>Proibido</span>
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <strong className="col-span-full">Vestiários</strong>
          <div className="flex flex-col items-center">
            <Image
              src={requiredLockerroom}
              width={70}
              alt="Vestiário liberado"
            />
            <span>Liberado</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={partialLockerroom} width={70} alt="Vestiário parcial" />
            <span>Parcial</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={forbiddenLockerroom}
              width={70}
              alt="Vestiário proibido"
            />
            <span>Proibido</span>
          </div>
        </div>
      </div>
    </div>
  )
}
