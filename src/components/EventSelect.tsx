import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";

export function EventSelect() {
  return (
    <div className='flex-1'>
      <div className='flex flex-col items-center justify-center gap-2 w-full h-full'>
        <span className='text-green-500 text-lg'>🚀 Hello World</span>
        <p className='text-5xl text-center'>
          Acelere sua carreira <br /> e venha fazer parte do foguete
        </p>
        <p className='text-center my-2'>
          Tudo que você precisa para impulsionar sua carreira como dev e acessar
          <br />
          as melhores oportunidades do mercado.
        </p>
        <Link
          to='/event/lesson/abertura-do-evento-ignite-lab'
          className='
            flex 
            items-center 
            justify-center 
            gap-3
            p-4
            my-2
            bg-green-600
            text-white 
            font-semibold 
            rounded
            outline-none
            transition-colors
            hover:bg-green-700
          '
        >
          <span className='text-xl font-bold'>Assistir a primeira Aula</span>

          <div
            className='
              p-1
              bg-green-700
              rounded
            '
          >
            <ArrowRight size={22} />
          </div>
        </Link>
      </div>
    </div>
  );
}
