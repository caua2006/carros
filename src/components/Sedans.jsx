import iconSedans from '../assets/icon-sedans.svg'

export default function Sedans() {
  return (
    <div className='bg-orange p-12 max-lg:rounded-t-lg lg:rounded-s-lg'>
    <img src={iconSedans} alt="Icon sedan car" className='mb-7'/>
    <h2 className='font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg '>Sedans</h2>
    <p className='font-lexend mb-7 text-offwhite text-sm lg:mb-20'>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
    <a className='font-lexend bg-offwhitebg text-orange px-10 py-3 rounded-3xl block w-fit border-2 border-offwhitebg hover:bg-orange hover:text-white' href="https://www.webmotors.com.br/ofertas/feiroes/lojaoficialbmw/carros-usados/estoque/bmw?lkid=2243&tipoveiculo=carros-usados&marca1=bmw&feirao=Loja%20Oficial%20BMW" target='_blank'>Ver mais</a>
    </div>
  )
}
