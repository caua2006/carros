import iconSedans from './assets/icon-sedans.svg'
import iconSuvs from './assets/icon-suvs.svg'
import iconLuxury from './assets/icon-luxury.svg'
export default function App() {
  return (
   <main>
      <section>
        <div>
          <img src={iconSedans} alt="Icon sedan car" />
          <h2 className='text-3xl'>Sedans</h2>
          <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/ofertas/feiroes/lojaoficialbmw/carros-usados/estoque/bmw?lkid=2243&tipoveiculo=carros-usados&marca1=bmw&feirao=Loja%20Oficial%20BMW" target='_blank'>Ver mais</a>
        </div>
        
        <div>
          <img src={iconSuvs} alt="" />
          <h2>SUVs</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target='_blank'>Ver mais</a>
        </div>

        <div>
          <img src={iconLuxury} alt="" />
          <h2>Luxuosos</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/comprar/ferrari/296-gts/30-v6-turbo-phev-f1-dct/2-portas/2023/50525519?pos=a50525519g:&np=1">Ver mais</a>
        </div>
      </section>
   </main>
  )
}
