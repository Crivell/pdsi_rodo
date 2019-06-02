interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export var navItems: NavData[] = [
  {
  name: 'Przedmioty',
  url: '/base',
  icon: 'icon-puzzle',
  children: [
    {
    name: 'Przedmiot 1',
    url: '/base/studentList',
    icon: 'icon-star'
    },
    {
      name: 'Przedmiot 2',
      url: '/base/insertMarks',
      icon: 'icon-star'
      },
      {
        name: 'Przedmiot 3',
        url: '/base/studentMarks',
        icon: 'icon-star'
        },
  ]
  },
  {
    name: 'Wyszukaj studenta',
    url: '/base/studentList',
    icon: 'icon-cloud-download',
    // class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Dodaj przedmiot',
    url: '/base/newSubject',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Logowanie',
    url: '/login',
    icon: 'icon-layers',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: '404',
    url: '/404',
    icon: 'icon-layers',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
