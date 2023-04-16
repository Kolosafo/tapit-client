type IUser = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  profile_pic: string;
  id: number;
  public_phone_number: string;
  private_phone_number: string;
  passcode: string;
  occupation: string;
  cv: string;
};

type IUser2 = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  bio: string;
  profile_pic: string;
  id: number;
  public_phone_number: string;
  occupation: string;
  cv: string;
  id: number;
  private_phone_number: string;
  passcode: string;
};

interface IUserProvider {
  isLogged: IBoolean;
  user?: IUser | null;
  error?: IERROR;
  loading: IBoolean;
}

type IBoolean = boolean | null;
type IERROR = null | any;

type IFunction = () => void;

type LinksType = {
  id: number;
  title: string;
  url: string;
  user: string;
};

type SocialLinksType = {
  id: number;
  instagram: string;
  twitter: string;
  snapchat: string;
  github: string;
  linkedIn: string;
  tiktok: string;
  apple_music: string;
  whatsapp: string;
  telegram: string;
  youtube: string;
  redit: string;
  facebook: string;
};

interface DataProvider {
  links: LinksType[]; // THIS SHOULD BE CHANGED TO CART TYPE
  socialLinks: SocialLinksType[];
  error: boolean;
  loading: boolean;
}
