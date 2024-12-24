export enum NavItemEnum {
  LINK = 'LINK',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
}

export interface NavItem {
  label: string;
  href: string;
  isExternal: boolean;
  type: NavItemEnum;
}

export interface LogoNavItem {
  label: string;
  href: string;
  isExternal: boolean;
  type: NavItemEnum;
  imageSrc: string;
}

export interface TopNavigation {
  logo: LogoNavItem;
  navItems: NavItem[];
  cta: NavItem;
}

export interface Icon {
  materialName: string;
  href: string;
}

export interface Footer {
  text: string;
  link: Icon[];
}

export interface GlobalSetting {
  title: string;
  description: string;
  topNavigation: TopNavigation;
  footer: Footer;
}
