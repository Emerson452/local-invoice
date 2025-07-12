export {};

declare global {
  interface Window {
    electronAPI: {
      saveClient: (client: any) => void;
      loadClients?: () => Promise<any[]>;
    };
  }
}