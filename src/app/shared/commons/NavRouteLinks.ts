const enum RouterEnum {
  HOME = '',
  ABOUT = 'sobre',
  ADVERTISE = 'anuncie-seu-imovel',
  CONTACT = 'contato',
  DETAILS = 'detalhes'
}

export class NavRouteLinks {
  static MODULE = {
    HOME: RouterEnum.HOME
  }

  static PAGE = {
    HOME: RouterEnum.HOME,
    ABOUT: RouterEnum.ABOUT,
    ADVERTISE: RouterEnum.ADVERTISE,
    CONTACT: RouterEnum.CONTACT,
    DETAILS: RouterEnum.DETAILS,
  }
}