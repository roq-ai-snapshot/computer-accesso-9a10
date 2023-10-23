interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Manager', 'Sales Representative', 'Customer Service Representative', 'Customer'],
  tenantName: 'Company',
  applicationName: 'computer accessories shop ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Read company information',
    'Read user reviews',
    'Add products to wishlist',
  ],
  ownerAbilities: [
    'Manage user',
    'Manage company',
    'Manage product',
    'Manage order',
    'Manage review',
    'Manage wishlist',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/64406d7a-bb63-4291-8afb-d3cd241b4df5',
};
