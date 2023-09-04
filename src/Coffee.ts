import Americano from './assets/coffees/Americano.png'
import Arabe from './assets/coffees/Arabe.png'
import CafeComLeite from './assets/coffees/CafeComLeite.png'
import CafeGelado from './assets/coffees/CafeGelado.png'
import Capuccino from './assets/coffees/Capuccino.png'
import ChocolateQuente from './assets/coffees/ChocolateQuente.png'
import Cubano from './assets/coffees/Cubano.png'
import Expresso from './assets/coffees/Expresso.png'
import ExpressoCremoso from './assets/coffees/ExpressoCremoso.png'
import Havaiano from './assets/coffees/Havaiano.png'
import Irlandes from './assets/coffees/Irlandes.png'
import Latte from './assets/coffees/Latte.png'
import Macchiato from './assets/coffees/Macchiato.png'
import Mocaccino from './assets/coffees/Mochaccino.png'

interface Coffee {
  id: string
  type: string
  description: string
  tags: string[]
  img: string
  price: number
}

export const Coffees: Coffee[] = [
  {
    id: '34db4331-eb67-4c94-8e62-706f22b75a1a',
    type: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: Expresso,
    tags: ['Tradicional'],
    price: 9.9,
  },
  {
    id: '054bd3cb-a76d-4fa3-ab06-ce7fb68a72a3',
    type: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: Americano,
    tags: ['Tradicional'],
    price: 9.9,
  },
  {
    id: 'faac01ea-7930-4f10-9505-fe8c807f06a4',
    type: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    img: ExpressoCremoso,
    tags: ['Tradicional'],
    price: 9.9,
  },
  {
    id: 'c51cda09-5a93-4587-a50f-87c87c234bf0',
    type: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: CafeGelado,
    tags: ['Tradicional', 'Gelado'],
    price: 9.9,
  },
  {
    id: '1aa61fbd-be48-4d2c-818c-5d43f5456e28',
    type: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: CafeComLeite,
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: 'eb2d3e51-1ac0-4c1d-8fef-a2578f782cd7',
    type: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: Latte,
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: 'd2c5743f-6da2-4152-ba0e-28bcfcf21f30',
    type: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: Capuccino,
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: '0b1c3cba-65cd-4403-a5ab-dddf1a312a83',
    type: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: Macchiato,
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: '751f0609-5eb5-45dc-aa53-e3e6a55da65d',
    type: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: Mocaccino,
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: '1038459b-0f4a-4e00-95fd-d68e7f5f292c',
    type: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: ChocolateQuente,
    tags: ['Especial', 'Com Leite'],
    price: 9.9,
  },
  {
    id: 'caed33e4-d234-4e2a-a8d9-403619138e0f',
    type: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: Cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
  },
  {
    id: '82d440b1-3305-4fdd-8693-253b27c8f96c',
    type: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: Havaiano,
    tags: ['Especial'],
    price: 9.9,
  },
  {
    id: '262c69f1-a6d9-49df-b932-7c173174115e',
    type: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: Arabe,
    tags: ['Especial'],
    price: 9.9,
  },
  {
    id: 'dd71a5d2-a5fa-4bda-b98e-c281650e131f',
    type: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: Irlandes,
    tags: ['Especial', 'alcoolico'],
    price: 9.9,
  },
]
