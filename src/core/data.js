/* eslint-disable prettier/prettier */
// images
// import Coctail from '../assets/images/1.png';
import Burger from '../assets/images/burger-min.webp';
import Aioli from '../assets/images/aioli-min.webp';
import ChikenTapaka from '../assets/images/chikenTapaka-min.webp';
import Kapreze from '../assets/images/Kapreze-min.webp';
import Krivetka from '../assets/images/Krivetka-min.webp';
import Midiya from '../assets/images/midiya-min.webp';
import pottatoWithCheese from '../assets/images/pottatoWithCheese-min.webp';
import pottatoWithPork from '../assets/images/pottatoWithPork-min.webp';
import salatGeorgia from '../assets/images/salatGeorgia-min.webp';
import springRoll from '../assets/images/springRoll-min.webp';
import Steak from '../assets/images/Steak-min.webp';
import dep from '../assets/images/dep-min.webp';
import basturma from '../assets/images/basturma.webp';
// bar
import mariaWogaito from '../assets/images/bar/MarieWaigo.webp';
import AperolSpritz from '../assets/images/bar/AperolSpritz.webp';
import BakuSour from '../assets/images/bar/BakuSour.webp';
import BlueIsland from '../assets/images/bar/BlueIsland.webp';
// import Bumbaaia from '../assets/images/bar/Bumbaia.webp';
import Daiquri from '../assets/images/bar/Daiquri.webp';
import French75 from '../assets/images/bar/French75.webp';
import GinTonik from '../assets/images/bar/GinTonik.webp';
// import ItsToLate from '../assets/images/bar/ItsToLate.webp';
import Lorna from '../assets/images/bar/Lorna.webp';
import margarita from '../assets/images/bar/margarita.webp';
import Mickronesia from '../assets/images/bar/Mickronesia.webp';
// import National from '../assets/images/bar/National.webp';
import NewYork from '../assets/images/bar/NewYork.webp';
import OldFasion from '../assets/images/bar/OldFasion.webp';
import Paradise from '../assets/images/bar/Paradise.webp';
import PinkVenom from '../assets/images/bar/PinkVenom.webp';
import PiscoMangoSour from '../assets/images/bar/PiscoMangoSour.webp';
import Unholy from '../assets/images/bar/Unholy.webp';
import WiskeySour from '../assets/images/bar/WiskeySour.webp';
import XXX from '../assets/images/bar/XXX.webp';
import AmaretoSour from '../assets/images/bar/AmaretoSour.webp';
import automnSky from '../assets/images/bar/automnSky.webp';
import Aviation from '../assets/images/bar/Aviation.webp';
import BlackSpace from '../assets/images/bar/BlackSpace.webp';
import bulivardie from '../assets/images/bar/bulivardie.webp';
import CherryBoom from '../assets/images/bar/CherryBoom.webp';
import cokies from '../assets/images/bar/cokies.webp';
import manheten from '../assets/images/bar/manheten.webp';
import Mascarad from '../assets/images/bar/Mascarad.webp';
import negroni from '../assets/images/bar/negroni.webp';
import negroniSbaliato from '../assets/images/bar/negroniSbaliato.webp';
import Riften from '../assets/images/bar/Riften.webp';
import SideCar from '../assets/images/bar/SideCar.webp';
import Unickorn from '../assets/images/bar/Unickorn.webp';
import WhiteLady from '../assets/images/bar/WhiteLady.webp';
// import redHoliday from '../assets/images/bar/redHoliday.webp';
// import ChoiceAndFrend from '../assets/images/bar/ChoiceAndFrend.webp';
// import alternativePlesuare from '../assets/images/bar/alternativePlesuare.webp';

export const dataFoodMenu = [
  {
    id: 1,
    title: 'Салат "Айолі"',
    description: 'Креветка, рукола, ромен, апельсин, сир Пармезан, заправлений фірмовим соусом Айолі',
    price: '170',
    image: Aioli
  },
  {
    id: 2,
    title: 'Салат Грузинський',
    description: 'Ромен, свіжий огірок, томат, синя цибуля',
    price: '150',
    image: salatGeorgia,
  },
  {
    id: 3,
    title: 'Салат Капрезе',
    description: 'Моцарела, томат, рукола, заправлений зеленою олією',
    price: '160',
    image: Kapreze,
  },
  {
    id: 4,
    title: 'Спрінг рол з лососем',
    description: 'Філе лосося, томат, огірок, сир Філадельфія, ромен, подається з горіховим соусом',
    price: '150',
    image: springRoll,
  },
  {
    id: 5,
    title: 'Тайський бургер',
    description: 'Філе лосося, авокадо, огірок, томат, ромен, сир Філадельфія, горіховий соус, соус Унагі, тайська булка',
    price: '250',
    image: Burger,
  },
  {
    id: 6,
    title: 'Курча Тапака',
    description: 'Курча запечене за технологією Тапака, подається з гілочкою томатів чері та кисло-солодким соусом ',
    price: '70',
    ml: 'за 100 г',
    image: ChikenTapaka,
  },
  {
    id: 7,
    title: 'Стейк Особуко',
    description: 'Стейк із яловичої голяшки, заправлений соусом песто та овочі гриль',
    price: '100',
    ml: 'за 100 г',
    image: Steak,
  },
  {
    id: 8,
    title: 'Картопляні діпи',
    description: 'Наші фірмові Hide&Seek діпи з вершковим соусом',
    price: '70',
    image: dep,
  },
  {
    id: 9,
    title: 'Картопля під сирним соусом',
    description: 'Ніжно запечена картопля під сирним соусом',
    price: '85',
    image: pottatoWithCheese,
  },
  {
    id: 10,
    title: 'Картопля по-домашньому з мясом та грибами',
    description: 'Запечена картопля з пряною свининою та грибами',
    price: '140',
    image: pottatoWithPork
  },
  {
    id: 11,
    title: 'Мідії у вершковому соусі',
    // eslint-disable-next-line no-useless-concat
    description: 'Мідії заправлені вершовим соусом з сиром Пармезан, подається разом з грінками',
    price: '165',
    image: Midiya,
  },
  {
    id: 12,
    title: 'П`яна креветка',
    description: 'Креветка маринована в апельсиновому лікері та подається з вершково-часниковим соусом',
    price: '200',
    image: Krivetka,
  },
  {
    id: 13,
    title: 'Бастурма',
    description: 'Бастурма курки чи телятини власного виробництва',
    price: '145',
    image: basturma
  },
];

export const dataBArMenu = [
  // {
  //   id: 'tequila',
  //   link: '#tequila',
  //   title: 'Tequila',
  // },
  // {
  //   id: 'rom',
  //   link: '#rom',
  //   title: 'Rum',
  // },
  // {
  //   id: 'wiskey',
  //   link: '#wiskey',
  //   title: 'Wiskey',
  // },
  // {
  //   id: 'gin',
  //   link: '#gin',
  //   title: 'Gin',
  // },
  // {
  //   id: 'brendy',
  //   link: '#brendy',
  //   title: 'Brendy',
  // },
  {
    id: 'coktails',
    link: '#coktails',
    title: 'Coktails',
  },
  // {
  //   id: 'vodka',
  //   link: '#vodka',
  //   title: 'Vodka',
  // },
  // {
  //   id: 'vine',
  //   link: '#vine',
  //   title: 'Vine',
  // },
  // {
  //   id: 'liqueurs',
  //   link: '#liqueurs',
  //   title: 'Liqueurs',
  // },
  // {
  //   id: 'beer',
  //   link: '#beer',
  //   title: 'Beer and Cider',
  // },
  // {
  //   id: 'nonAlcohol',
  //   link: '#nonAlcohol',
  //   title: 'Non Alcohol',
  // },
  {
    id: 'crash',
    link: '#crash',
    title: 'Бій посуду',
  },
];

export const dataBar = [
  {
    id: 'coktails',
    data: [
      {
        id: 1,
        title: 'Марі Уайтго',
        description: 'Cолодкий коктейль , з кавово горіховим присмаком',
        price: '190',
        image: mariaWogaito
      },
      {
        id: 2,
        title: 'Мікронезія',
        description: 'Кисло-солодкий з вираженим присмаком тропічних фруктів ',
        price: '220',
        image: Mickronesia
      },
      {
        id: 6,
        title: 'Amaretto sour',
        description: 'Легкий,горіховий,з легкою кислинкою',
        price: '200',
        image: AmaretoSour
      },
      {
        id: 9,
        title: 'Pisco mango sour',
        description: 'Класичний сауер на перуанській горілці з цікавим післясмаком манго',
        price: '170',
        image: PiscoMangoSour
      },
      {
        id: 10,
        title: 'Masquerade',
        description: 'Солодкий,міцність розривається вкінці,поєднання фруктових ромів з нашою фірмовою настоянкою точно не залишить вас байдужими',
        price: '180',
        image: Mascarad
      },
      {
        id: 11,
        title: 'Blank space',
        // eslint-disable-next-line no-useless-concat
        description: 'Пряний,міцний,трав' + 'яний, точно знайде свого поціновувача',
        price: '180',
        image: BlackSpace
      },
      {
        id: 13,
        title: 'Ultrabeat',
        description: 'міцний,медовий,трішки вершковий з легенькою ноткою смородини',
        price: '190',
        image: ''
      },
      {
        id: 14,
        title: 'Unholy',
        description: 'Cолодкий,фруктовий,з післясмаком шоколаду',
        price: '170',
        image: Unholy
      },
      {
        id: 15,
        title: 'Aperol Spritz',
        description: 'Легкий літній коктейль, відомий всім, з легкою ноткою гіркоти',
        price: '170',
        image: AperolSpritz
      },
      {
        id: 16,
        title: 'Autumn Sky',
        description: 'Кисло-солодкий з фрутово-пряний післясмак',
        price: '180',
        image: automnSky
      },
      {
        id: 17,
        title: 'Blue Island',
        description: 'Міцний коктейль для поціновувачів міцного алкоголя',
        price: '200',
        image: BlueIsland
      },
      {
        id: 19,
        title: 'Boulevardier',
        description: 'Міцний коктейль, в міру солодкий з легкою гірчинкою',
        price: '170',
        image: bulivardie
      },
      {
        id: 20,
        title: 'Cherry boom',
        description: 'Солодкий, вишневий смак, так як вишня є символом Вінниці',
        price: '170',
        image: CherryBoom
      },
      {
        id: 21,
        title: 'Cookies',
        description: 'Солодкий коктейль зі смаком печива',
        price: '170',
        image: cokies
      },
      {
        id: 22,
        title: 'Daiquiri',
        description: 'Відомий на весь світ, кисло-солодкий ромовий коктейль',
        price: '170',
        image: Daiquri
      },
      {
        id: 23,
        title: 'French 75',
        description: 'Легкий джиновий коктейль з ароматом цитруса і ноткою ігристого вина',
        price: '170',
        image: French75
      },
      {
        id: 24,
        title: 'Manhattan',
        description: 'Ідеально збалансований міцність і смак',
        price: '170',
        image: manheten
      },
      {
        id: 25,
        title: 'Margarita',
        description: 'Жарке поєднання мексиканського смаку та цитрусових ноток',
        price: '170',
        image: margarita
      },
      {
        id: 26,
        title: 'Negroni',
        description: 'Відомий в всьому світі коктейль , про який не потрібно розповідати',
        price: '170',
        image: negroni
      },
      {
        id: 27,
        title: 'New York Sour',
        description: 'Найвідоміший твіст на Whiskey Sour, з додаванням червоного вина',
        price: '170',
        image: NewYork
      },
      {
        id: 28,
        title: 'Aviation',
        description: 'Чудовий, легкий коктейль на джині',
        price: '170',
        image: Aviation
      },
      {
        id: 29,
        title: 'Old Fashioned',
        description: 'Вишукана подача віскі з легкою солодкістют та травами',
        price: '170',
        image: OldFasion
      },
      {
        id: 30,
        title: 'Pink Venom',
        description: 'Легкий джиновий коктейль з якідними нотами',
        price: '180',
        image: PinkVenom
      },
      // {
      //   id: 31,
      //   title: 'Robert Paulson',
      //   description: 'Легкий, вершковий коктейль',
      //   price: '180',
      //   image: ''
      // },
      {
        id: 32,
        title: 'Unicorn',
        description: 'Солодкий коктейль зі смаком кокосу та мускатного горіха',
        price: '180',
        image: Unickorn
      },
      {
        id: 33,
        title: 'Whiskey Sour',
        description: 'Міцний, кисло-солодкий коктейль, який знайшов своїх прихильників по всьому світу',
        price: '170',
        image: WiskeySour
      },
      {
        id: 34,
        title: 'White Lady',
        description: 'Цитрусовий коктейль на основі джину вразить вас обєднанням цитрусових в вашому келиху',
        price: '170',
        image: WhiteLady
      },
      {
        id: 35,
        title: 'Lorna',
        description: 'Чудове поєднання мангового джину та винного ройбушу',
        price: '185',
        image: Lorna
      },
      {
        id: 36,
        title: 'Negroni Sbagliato',
        description: 'Класичний твіст на негроні з додаванням ігристого вина',
        price: '170',
        image: negroniSbaliato
      },
      {
        id: 37,
        title: 'Paradise',
        description: 'Освіжаючий коктель на основі піско з ментоловим лікером',
        price: '190',
        image: Paradise
      },
      {
        id: 38,
        title: 'Riften',
        description: 'Солодово-пряний з кисло-солодким смаком',
        price: '180',
        image: Riften
      },
      {
        id: 39,
        title: 'Side Car',
        description: 'Поєднання цитрусів та винограду чудово зіграє у вашому келиху',
        price: '170',
        image: SideCar
      },
      {
        id: 40,
        title: 'Gin tonic',
        description: 'Крафтовий джин тонік на олеосахарумі та ягодами чорної смородини',
        price: '145',
        image: GinTonik
      },
      {
        id: 41,
        title: 'XXX',
        description: 'Джин на айві разом з бузиною гарантують вам незабутній смак за яким ви захочете вернутися',
        price: '200',
        image: XXX
      },
      {
        id: 42,
        title: 'Baku Sour',
        description: 'Пряно-фруктовий коктейль з свіжим післясмаком',
        price: '180',
        image: BakuSour
      },
    ]
  },
  {
    id: 'rom',
    data: [
      {
        id: 1,
        title: 'Plantation Overproof',
        price: '115',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 2,
        title: 'Sailor Jarry',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 3,
        title: 'Dead Mens Fingers (в асортименті)',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 4,
        title: 'Cachaca Canario',
        price: '80',
        ml: 'за 50мл',
        image: ''
      },
    ]
  },
  {
    id: 'tequila',
    data: [
      {
        id: 1,
        title: 'Espolon Blanco',
        price: '115',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 2,
        title: 'Jarana Blanco',
        price: '80',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 3,
        title: 'Olmeca Blanco',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 4,
        title: 'Sierra Anejo',
        price: '130',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 5,
        title: 'Mezcal Bruxo X',
        price: '200',
        ml: 'за 50мл',
        image: ''
      },
    ]
  },
  {
    id: 'wiskey',
    data: [
      {
        id: 1,
        title: 'Wild Turkey 101 (USA)',
        price: '110',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 2,
        title: 'Wild Turkey 81 (USA)',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 3,
        title: 'Wild Turkey RYE (USA)',
        price: '105',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 4,
        title: 'Jim Beam White (USA)',
        price: '105',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 5,
        title: 'Jim Beam Apple (USA)',
        price: '115',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 6,
        title: 'Jim Beam Red Stag (USA)',
        price: '110',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 7,
        title: 'Bulleit (USA)',
        price: '140',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 8,
        title: 'Peaky Blinders (USA)',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 9,
        title: 'Most Wanted (USA)',
        price: '120',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 10,
        title: 'Penny Packer',
        price: '115',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 11,
        title: 'Aber Falls (Wales)',
        price: '130',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 12,
        title: 'Tenjaku (Japan)',
        price: '185',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 13,
        title: 'Tenjaku Pure Malt (Japan)',
        price: '215',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 14,
        title: 'Monkey Shoulder (Scotch)',
        price: '180',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 15,
        title: 'Monkey Shoulder Smokey (Scotch)',
        price: '200',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 16,
        title: 'Dewars 12 y.o. (Scotch)',
        price: '150',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 17,
        title: 'Tullamore Dew (Irish)',
        price: '95',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 18,
        title: 'Jameson Black Barrel (Irish)',
        price: '155',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 19,
        title: 'Writers Tears (Irish)',
        price: '145',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 20,
        title: 'Crabbie (Irish)',
        price: '95',
        ml: 'за 50мл',
        image: ''
      },
    ]
  },
  {
    id: 'brendy',
    data: [
      {
        id: 1,
        title: 'Calvados Christian Drouin',
        price: '140',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 2,
        title: 'Torres 5',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 3,
        title: 'Iverioni',
        price: '70',
        ml: 'за 50мл',
        image: ''
      },
    ]
  },
  {
    id: 'gin',
    data: [
      {
        id: 1,
        title: 'Peaky Blinders',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 2,
        title: 'Genever',
        price: '240',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 3,
        title: 'Whitley Neill (в асортименті)',
        price: '130',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 4,
        title: 'Etsu',
        price: '255',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 5,
        title: 'Gibsons',
        price: '80',
        ml: 'за 50мл',
        image: ''
      },
    ]
  },
  {
    id: 'vodka',
    data: [
      {
        id: 1,
        title: 'Divine (в асортименті)',
        price: '125',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 2,
        title: 'Koskenkorva Original',
        price: '70',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 3,
        title: 'Absolute (в асортименті)',
        price: '65',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 4,
        title: 'Pisco',
        price: '120',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 5,
        title: 'Choya Sake',
        price: '175',
        ml: 'за 50мл',
        image: ''
      },
    ]
  },
  {
    id: 'vine',
    data: [
      {
        id: 1,
        title: 'EL Paso de Lazo (червоне сухе)',
        price: '100',
        ml: 'за 150мл',
        image: ''
      },
      {
        id: 2,
        title: 'Riesling (біле сухе)',
        price: '100',
        ml: 'за 150мл',
        image: ''
      },
      {
        id: 3,
        title: 'Onbrina (напів-ігристе)',
        price: '140',
        ml: 'за 150мл',
        image: ''
      },
      {
        id: 4,
        title: 'Porto Dows',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 5,
        title: 'Jerez Pedro Xemenez',
        price: '120',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 6,
        title: 'Jerez Fino',
        price: '80',
        ml: 'за 50мл',
        image: ''
      },
    ]
  },
  {
    id: 'liqueurs',
    data: [
      {
        id: 1,
        title: 'De Kuyper (в асортименті)',
        price: '85',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 2,
        title: 'Riga Currant',
        price: '80',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 3,
        title: 'Disaronno',
        price: '125',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 4,
        title: 'Cointreau',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 5,
        title: 'Drambuie',
        price: '145',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 6,
        title: 'Frangelico',
        price: '95',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 7,
        title: 'Heretic',
        price: '90',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 8,
        title: 'Grand Marnier',
        price: '130',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 9,
        title: 'Cynar',
        price: '75',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 10,
        title: 'Branca-menta',
        price: '145',
        ml: 'за 50мл',
        image: ''
      },
      {
        id: 11,
        title: 'Fernet-Branca',
        price: '130',
        ml: 'за 50мл',
        image: ''
      },
    ]
  },
  {
    id: 'beer',
    data: [
      {
        id: 1,
        title: 'Cider',
        price: '60',
        ml: 'за 500мл',
        image: ''
      },
      {
        id: 2,
        title: 'Honey',
        price: '65',
        ml: 'за 500мл',
        image: ''
      },
      {
        id: 3,
        title: 'MOVA Blache',
        price: '70',
        ml: 'за 500мл',
        image: ''
      },
      {
        id: 4,
        title: 'MOVA Stout vanilla',
        price: '70',
        ml: 'за 500мл',
        image: ''
      }
    ]
  },
  {
    id: 'nonAlcohol',
    data: [
      {
        id: 1,
        title: 'Coca-cola',
        price: '40',
        ml: 'за 250мл',
        image: ''
      },
      {
        id: 2,
        title: 'Craft Lemonade',
        price: '50',
        ml: 'за 250мл',
        image: ''
      },
      {
        id: 3,
        title: 'Energy',
        price: '45',
        ml: 'за 250мл',
        image: ''
      },
      {
        id: 4,
        title: 'Tonik',
        price: '35',
        ml: 'за 250мл',
        image: ''
      },
      {
        id: 5,
        title: 'Сік (в асортименті)',
        price: '30',
        ml: 'за 250мл',
        image: ''
      }
    ]
  },
  {
    id: 'crash',
    data: [
      {
        id: 1,
        title: 'Бій посуду',
        price: '200',
        image: ''
      }
    ]
  }
]
