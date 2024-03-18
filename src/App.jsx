import iconSedans from './assets/icon-sedans.svg'
import iconSuvs from './assets/icon-suvs.svg'
import iconLuxury from './assets/icon-luxury.svg'
export default function App() {
  return (
   <main className='min-h-svh bg-offwhitebg px-6 py-20 antialiased lg:flex justify-center items-center'>
      <section className='lg:flex '>
        <div className='bg-orange p-12 rounded-t-lg md:rounded-s-lg'>
          <img src={iconSedans} alt="Icon sedan car" className='mb-7'/>
          <h2 className='font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg '>Sedans</h2>
          <p className='font-lexend mb-7 text-offwhite text-sm'>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className='font-lexend bg-offwhitebg text-orange px-10 py-3 rounded-3xl block w-fit' href="https://www.webmotors.com.br/ofertas/feiroes/lojaoficialbmw/carros-usados/estoque/bmw?lkid=2243&tipoveiculo=carros-usados&marca1=bmw&feirao=Loja%20Oficial%20BMW" target='_blank'>Ver mais</a>
        </div>
        
        <div className='bg-green p-12'>
          <img src={iconSuvs} alt="" className='mb-7'/>
          <h2 className='font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg'>SUVs</h2>
          <p className='font-lexend mb-7 text-offwhite text-sm'>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className='font-lexend bg-offwhitebg text-green px-10 py-3 rounded-3xl block w-fit' href="https://www.webmotors.com.br/suvs" target='_blank'>Ver mais</a>
        </div>

        <div className='bg-dark-green p-12 rounded-b-lg md:rounded-e-lg'>
          <img src={iconLuxury} alt="" className='mb-7' />
          <h2 className='font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg' >Luxuosos</h2>
          <p className='font-lexend mb-7 text-offwhite text-sm'>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className='font-lexend bg-offwhitebg text-dark-green px-10 py-3 rounded-3xl block w-fit' href="https://www.webmotors.com.br/comprar/ferrari/296-gts/30-v6-turbo-phev-f1-dct/2-portas/2023/50525519?pos=a50525519g:&np=1">Ver mais</a>
        </div>
      </section>
   </main>
  )
}
