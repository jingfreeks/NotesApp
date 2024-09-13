export type RootNavigationProps = {
  BottomTab: AppNavigationProps;
  App: undefined;
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
  Auth: undefined;
  Home: undefined;
  Map: undefined;
  Otp: any;
  Notes?: {title: string; body: string; date: string};
};

export type AppNavigationProps = {
  Home: string;
  Maps: string;
};
