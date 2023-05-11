import {
  Admin,
  Home,
  Login,
  Profile,
  Register,
  ScannedResult,
  Share,
  resetPassword,
  ContactUs,
} from "../Pages";

export interface AppRouteType {
  to: string;
  element: React.ComponentType;
}

export const appRoutes: AppRouteType[] = [
  {
    to: "/",
    element: Home,
  },
  {
    to: "/:username",
    element: ScannedResult,
  },
  {
    to: "/login",
    element: Login,
  },
  {
    to: "/admin",
    element: Admin,
  },
  {
    to: "/share",
    element: Share,
  },
  {
    to: "/profile",
    element: Profile,
  },
  {
    to: "/authorized/register",
    element: Register,
  },
  {
    to: "/password_reset/:token",
    element: resetPassword,
  },
  {
    to: "/contactUs",
    element: ContactUs,
  },
];
