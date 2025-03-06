import { Khmer } from "next/font/google";

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
    language: "English",
    overview: "Overview",
    transactions: "Transactions",
    accounts: "Accounts",
    categories: "Categories",
    This: "This is Overview Report",
    Expenses: "Expenses",
    Income: "Income",
    Remaining: "Remaining",
    English: "English",
    Khmer: "Khmer",
  },
  KH: {
    welcome: "សូមស្វាគមន៍ការត្រឡប់មកវិញ",
    getStarted: "ចាប់ផ្តើម",
    signIn: "ចូល",
    signOut: "ចាកចេញ",
    language: "ភាសាខ្មែរ",
    overview: "ទិដ្ឋភាព",
    transactions: "ប្រតិបត្តិការ",
    accounts: "គណនី",
    categories: "ប្រភេទ",
    This: "នេះជារបាយការណ៍ទិដ្ឋភាពទូទៅ",
    Expenses: "ចំណាយ",
    Income: "ចំណូល",
    Remaining: "នៅសល់",
    English: "អង់គ្លេស",
    Khmer: "ភាសាខ្មែរ",
  },
};

export const getText = (languageCode: string, key: string): string => {
  return translations[languageCode]?.[key] || key;
};
