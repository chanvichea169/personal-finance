type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  Eng: {
    welcome: "Welcome Back",
    Back: "Back",
    getStarted: "Get Started",
    signIn: "Sign In",
    signOut: "Sign Out",
    language: "Eng",
    overview: "Overview",
    transactions: "Transactions",
    accounts: "Accounts",
    categories: "Categories",
    This: "This is Overview Report",
    Expenses: "Expenses",
    Income: "Income",
    Remaining: "Remaining",
  },
  KH: {
    welcome: "សូមស្វាគមន៍ការត្រឡប់មកវិញ",
    getStarted: "ចាប់ផ្តើម",
    signIn: "ចូល",
    signOut: "ចាកចេញ",
    language: "ខ្មែរ",
    overview: "ទិដ្ឋភាព",
    transactions: "ប្រតិបត្តិការ",
    accounts: "គណនី",
    categories: "ប្រភេទ",
    This: "នេះជារបាយការណ៍ទិដ្ឋភាពទូទៅ",
    Expenses: "ចំណាយ",
    Income: "ចំណូល",
    Remaining: "នៅសល់",
  },
};

export const getText = (languageCode: string, key: string): string => {
  return translations[languageCode]?.[key] || key;
};
