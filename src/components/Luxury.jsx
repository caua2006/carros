import iconLuxury from '../assets/icon-luxury.svg'

export default function Luxury() {
  return (
    <section className='bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-e-lg'>
          <img src={iconLuxury} alt="" className='mb-7' />
          <h2 className='font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg' >Luxuosos</h2>
          <p className='font-lexend mb-7 text-offwhite text-sm lg:mb-20'>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className='font-lexend bg-offwhitebg text-dark-green px-10 py-3 border-2 border-offwhitebg rounded-3xl block w-fit hover:bg-dark-green hover:text-white' href="https://www.webmotors.com.br/comprar/ferrari/296-gts/30-v6-turbo-phev-f1-dct/2-portas/2023/50525519?pos=a50525519g:&np=1">Ver mais</a>
    </section>
  )
}
