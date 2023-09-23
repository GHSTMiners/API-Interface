export interface ValidationResponse {
    success : boolean;
    roles : WalletRoles;
  }

export interface WalletRoles {
    admin : boolean;
    developer : boolean;
    moderator : boolean;
}