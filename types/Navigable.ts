export interface Navigable {
  navigation?: {
    navigate: (route: string, props?: any) => any;
    push: (route: string, props?: any) => any;
    goBack: () => any;
  }
}
