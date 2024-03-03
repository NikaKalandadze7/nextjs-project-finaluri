export default interface LoggedInInterface {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  initializeLoggedIn: () => void;
}
