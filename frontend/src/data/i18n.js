// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translations
const resources = {
  en: {
    translation: {
      selectLanguage: 'Select Language',
      aboutTitle: 'About Wastewater Management',
      aboutParagraph1: 'Wastewater management involves treating and recycling water to prevent pollution.',
      aboutParagraph2: 'This field includes collecting, transporting, treating, and disposing of wastewater safely.',
      aboutParagraph3: 'Wastewater treatment ensures water safety and promotes environmental sustainability.',
      aboutParagraph4: 'Proper management helps conserve water resources and protects public health.',
    },
  },
  hi: {
    translation: {
      selectLanguage: 'भाषा का चयन करें',
      aboutTitle: 'जलमल प्रबंधन के बारे में',
      aboutParagraph1: 'जलमल प्रबंधन में पानी को प्रदूषण से रोकने के लिए शोधन और पुनर्चक्रण की प्रक्रिया शामिल है।',
      aboutParagraph2: 'यह क्षेत्र सुरक्षित रूप से जलमल को इकट्ठा करने, परिवहन करने, शोधन करने और निपटाने को शामिल करता है।',
      aboutParagraph3: 'जलमल शोधन से पानी की सुरक्षा सुनिश्चित होती है और पर्यावरणीय स्थिरता को बढ़ावा मिलता है।',
      aboutParagraph4: 'उचित प्रबंधन जल संसाधनों के संरक्षण में सहायक होता है और सार्वजनिक स्वास्थ्य की रक्षा करता है।',
    },
  },
  // Add other languages here...
};

// Initialize i18next with react-i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
