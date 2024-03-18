import iconSedans from './assets/icon-sedans.svg'
import iconSuvs from './assets/icon-suvs.svg'
import iconLuxury from './assets/icon-luxury.svg'
export default function App() {
  return (
   <main>
      <section>
        <div className='bg-orange'>
          <img src={iconSedans} alt="Icon sedan car" />
          <h2 className='font-shoulders'>Sedans</h2>
          <p className='font-lexend'>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className='font-lexend' href="https://www.webmotors.com.br/ofertas/feiroes/lojaoficialbmw/carros-usados/estoque/bmw?lkid=2243&tipoveiculo=carros-usados&marca1=bmw&feirao=Loja%20Oficial%20BMW" target='_blank'>Ver mais</a>
        </div>
        
        <div className='bg-green'>
          <img src={iconSuvs} alt="" />
          <h2 className='font-shoulders'>SUVs</h2>
          <p className='font-lexend'>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className='font-lexend' href="https://www.webmotors.com.br/suvs" target='_blank'>Ver mais</a>
        </div>

        <div className='bg-dark-green'>
          <img src={iconLuxury} alt="" />
          <h2 className='font-shoulders'>Luxuosos</h2>
          <p className='font-lexend'>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className='font-lexend' href="https://www.webmotors.com.br/comprar/ferrari/296-gts/30-v6-turbo-phev-f1-dct/2-portas/2023/50525519?pos=a50525519g:&np=1">Ver mais</a>
        </div>
      </section>
   </main>
  )
}
