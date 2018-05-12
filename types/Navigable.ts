export interface Navigable {
  navigation: {
    navigate: (route: string) => any;
    push: (route: string) => any;
  }
}
