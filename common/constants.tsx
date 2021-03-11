import AllIcon from '../assets/all.svg';
import CakeIcon from '../assets/cake.svg';
import DrinkIcon from '../assets/drink.svg';
import PieIcon from '../assets/pie.svg';
import RollIcon from '../assets/roll.svg';

import MenuIcon from '../assets/menu.svg';
import LockIcon from '../assets/lock.svg';
import LogoutIcon from '../assets/logout.svg';
import ThumbsUp from '../assets/thumbs-up.svg';
import UserIcon from '../assets/user.svg';
import SettingsIcon from '../assets/settings.svg';
import { OrderFormsData } from '../types';

export const CATEGORY_BUTTONS: {Icon:any, label:string}[] = [
  {
    Icon: AllIcon,
    label: 'All',
  },
  {
    Icon: CakeIcon,
    label: 'Cakes',
  },
  {
    Icon: PieIcon,
    label: 'Pies',
  },
  {
    Icon: RollIcon,
    label: 'Rolls',
  },
  {
    Icon: DrinkIcon,
    label: 'Drinks',
  },
];

export const SETTINGS = [
  {
    Icon: MenuIcon,
    label: 'Orders',
    showChevron: false,
  },
  {
    Icon: UserIcon,
    label: 'Profile',
    showChevron: true,
  },
  {
    Icon: LockIcon,
    label: 'Change Password',
    showChevron: true,
  },
  {
    Icon: ThumbsUp,
    label: 'Rate Us',
    showChevron: false,
  },
  {
    Icon: SettingsIcon,
    label: 'Settings',
    showChevron: true,
  },
  {
    Icon: LogoutIcon,
    label: 'Log Out',
    showChevron: false,
  },
];

export const ORDER_FORM: OrderFormsData = {
  Details: [
    {
      key: 'ocassion',
      placeholder: 'What are we celebrating?',
      label: 'Ocassion',
      type: 'buttonsRow',
      options: {
        birthday: 'Birthday',
        anniversary: 'Anniversary',
        wedding: 'Wedding',
        baptism: 'Baptism',
        other: 'Other',
      },
    },
    {
      key: 'size',
      placeholder: 'What cake size do you want?',
      label: 'Size',
      type: 'list',
      options: {
        1: '1 pound (small)',
        1.5: '1.5 pound(s) (medium)',
        2: '2 pounds (large)',
      },
    },
    {
      key: 'flavour',
      placeholder: 'What flavour do you want?',
      label: 'Flavour',
      type: 'list',
      options: {
        redVelvet: 'Red Velvet',
        chocholate: 'Chocolate',
        vanilla: 'Vanilla',
      },
    },
    {
      key: 'shape',
      placeholder: 'What shape should your cake assume?',
      label: 'Shape',
      type: 'shapeBtns',
      options: [
        'square',
        'round',
      ],
    },
    {
      key: 'inscription',
      placeholder: 'What should we write on the cake?',
      label: 'Inscription',
      type: 'text',
      options: null,
    },
    // {
    //   key: 'layers',
    //   placeholder: null,
    //   label: 'Layers',
    //   type: 'counter',
    //   options: null,
    // },
    {
      key: 'range',
      placeholder: 'Tell us how much you can afford.',
      label: 'Budget Range',
      type: 'slider',
      options: null,
    },
  ],
  Media: [
    {
      key: 'imageUrl',
      placeholder: null,
      label: 'Upload an Image Description',
      type: 'upload',
      options: null,
    },
  ],
  Extra: [
    {
      key: 'note',
      placeholder: 'Any thing else you want to tell us?',
      label: 'Note',
      type: 'textarea',
      options: null,
    },
  ],
  Delivery: [
    {
      key: 'delivery',
      placeholder: null,
      label: 'Delivery',
      type: 'upload',
      options: null,
    },
  ],
};

export const MAX_BUDGET = 5000;
export const MIN_BUDGET = 100;
