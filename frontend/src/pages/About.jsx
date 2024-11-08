// import React, { useState } from 'react';

// const About = () => {
//   const [language, setLanguage] = useState('english');

//   const content = {
//     english: {
//       title: "Waste Water Management",
//       paragraphs: [
//         "Wastewater management is the process of treating contaminated water from households, industries, and other sources before releasing it back into the environment. This crucial process helps protect public health and maintain environmental balance.",
//         "Primary treatment involves the physical removal of solid materials through screening and sedimentation. This initial step removes approximately 60% of suspended solids from the wastewater stream.",
//         "Secondary treatment utilizes biological processes where microorganisms break down organic matter. This stage typically removes up to 90% of organic matter and significantly reduces pathogens.",
//         "Tertiary treatment, the final stage, involves advanced cleaning processes such as filtration, disinfection, and nutrient removal. This ensures the water meets strict environmental standards before discharge.",
//         "Modern wastewater management systems increasingly focus on resource recovery, converting waste products into valuable resources like biogas and fertilizers, contributing to a more sustainable circular economy."
//       ]
//     },
//     hindi: {
//       title: "अपशिष्ट जल प्रबंधन",
//       paragraphs: [
//         "अपशिष्ट जल प्रबंधन घरों, उद्योगों और अन्य स्रोतों से दूषित जल को पर्यावरण में वापस छोड़ने से पहले उपचार करने की प्रक्रिया है। यह महत्वपूर्ण प्रक्रिया सार्वजनिक स्वास्थ्य की रक्षा और पर्यावरण संतुलन बनाए रखने में मदद करती है।",
//         "प्राथमिक उपचार में स्क्रीनिंग और तलछट के माध्यम से ठोस पदार्थों को भौतिक रूप से हटाना शामिल है। यह प्रारंभिक चरण अपशिष्ट जल धारा से लगभग 60% निलंबित ठोस पदार्थों को हटा देता है।",
//         "द्वितीयक उपचार जैविक प्रक्रियाओं का उपयोग करता है जहां सूक्ष्मजीव कार्बनिक पदार्थ को तोड़ते हैं। यह चरण आमतौर पर 90% तक कार्बनिक पदार्थ को हटा देता है और रोगजनकों को काफी कम कर देता है।",
//         "तृतीयक उपचार, अंतिम चरण, में फिल्ट्रेशन, कीटाणुशोधन और पोषक तत्वों को हटाने जैसी उन्नत सफाई प्रक्रियाएं शामिल हैं। यह सुनिश्चित करता है कि पानी निर्वहन से पहले कड़े पर्यावरणीय मानकों को पूरा करता है।",
//         "आधुनिक अपशिष्ट जल प्रबंधन प्रणालियां तेजी से संसाधन पुनर्प्राप्ति पर ध्यान केंद्रित कर रही हैं, अपशिष्ट उत्पादों को बायोगैस और उर्वरक जैसे मूल्यवान संसाधनों में परिवर्तित कर रही हैं, जो एक अधिक टिकाऊ चक्रीय अर्थव्यवस्था में योगदान कर रही हैं।"
//       ]
//     },
//     malayalam: {
//       title: "മലിനജല പരിപാലനം",
//       paragraphs: [
//         "മലിനജല പരിപാലനം എന്നത് വീടുകളിൽ നിന്നും വ്യവസായങ്ങളിൽ നിന്നും മറ്റ് സ്രോതസ്സുകളിൽ നിന്നുമുള്ള മലിനജലം പരിസ്ഥിതിയിലേക്ക് തിരികെ വിടുന്നതിന് മുമ്പ് ശുദ്ധീകരിക്കുന്ന പ്രക്രിയയാണ്.",
//         "പ്രാഥമിക ചികിത്സയിൽ സ്ക്രീനിംഗ്, അവസാദം എന്നിവയിലൂടെ ഖര വസ്തുക്കളുടെ ഭൗതിക നീക്കം ഉൾപ്പെടുന്നു.",
//         "സെക്കൻഡറി ട്രീറ്റ്മെന്റിൽ സൂക്ഷ്മാണുക്കൾ ജൈവവസ്തുക്കൾ വിഘടിപ്പിക്കുന്ന ജൈവിക പ്രക്രിയകൾ ഉപയോഗിക്കുന്നു.",
//         "അവസാന ഘട്ടമായ തൃതീയ ചികിത്സയിൽ ഫിൽട്രേഷൻ, അണുനശീകരണം, പോഷകങ്ങൾ നീക്കം ചെയ്യൽ തുടങ്ങിയ വിപുലമായ ശുചീകരണ പ്രക്രിയകൾ ഉൾപ്പെടുന്നു.",
//         "ആധുനിക മലിനജല പരിപാലന സംവിധാനങ്ങൾ ക്രമേണ വിഭവ വീണ്ടെടുക്കലിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു."
//       ]
//     },
//     arabic: {
//       title: "إدارة مياه الصرف الصحي",
//       paragraphs: [
//         "إدارة مياه الصرف الصحي هي عملية معالجة المياه الملوثة من المنازل والصناعات والمصادر الأخرى قبل إعادتها إلى البيئة.",
//         "تتضمن المعالجة الأولية الإزالة الفيزيائية للمواد الصلبة من خلال الفحص والترسيب.",
//         "تستخدم المعالجة الثانوية العمليات البيولوجية حيث تقوم الكائنات الحية الدقيقة بتحليل المواد العضوية.",
//         "تتضمن المعالجة الثالثية عمليات تنظيف متقدمة مثل الترشيح والتطهير وإزالة المغذيات.",
//         "تركز أنظمة معالجة مياه الصرف الصحي الحديثة بشكل متزايد على استعادة الموارد."
//       ]
//     },
//     french: {
//       title: "Gestion des Eaux Usées",
//       paragraphs: [
//         "La gestion des eaux usées est le processus de traitement des eaux contaminées provenant des ménages, des industries et d'autres sources.",
//         "Le traitement primaire implique l'élimination physique des matières solides par criblage et sédimentation.",
//         "Le traitement secondaire utilise des processus biologiques où les micro-organismes décomposent la matière organique.",
//         "Le traitement tertiaire implique des processus de nettoyage avancés tels que la filtration.",
//         "Les systèmes modernes se concentrent sur la récupération des ressources."
//       ]
//     }
//   };

//   return (
//     <div>
//       <select 
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//       >
//         <option value="english">English</option>
//         <option value="hindi">Hindi</option>
//         <option value="malayalam">Malayalam</option>
//         <option value="arabic">Arabic</option>
//         <option value="french">French</option>
//       </select>

//       <div style={{ direction: language === 'arabic' ? 'rtl' : 'ltr' }}>
//         <h1>{content[language].title}</h1>
        
//         {content[language].paragraphs.map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;





import React, { useState } from 'react';
import { 
  Navbar, 
  Dropdown, 
  TextInput, 
  Button,
  Card
} from 'flowbite-react';
import { useSelector } from 'react-redux';

const About = () => {
  const [language, setLanguage] = useState('english');
  const { theme } = useSelector((state) => state.theme);

  const content = {
    english: {
      title: "Waste Water Management",
      paragraphs: [
        "Wastewater management is the process of treating contaminated water from households, industries, and other sources before releasing it back into the environment. This crucial process helps protect public health and maintain environmental balance.",
        "Primary treatment involves the physical removal of solid materials through screening and sedimentation. This initial step removes approximately 60% of suspended solids from the wastewater stream.",
        "Secondary treatment utilizes biological processes where microorganisms break down organic matter. This stage typically removes up to 90% of organic matter and significantly reduces pathogens.",
        "Tertiary treatment, the final stage, involves advanced cleaning processes such as filtration, disinfection, and nutrient removal. This ensures the water meets strict environmental standards before discharge.",
        "Modern wastewater management systems increasingly focus on resource recovery, converting waste products into valuable resources like biogas and fertilizers, contributing to a more sustainable circular economy."
      ]
    },
    hindi: {
      title: "अपशिष्ट जल प्रबंधन",
      paragraphs: [
        "अपशिष्ट जल प्रबंधन घरों, उद्योगों और अन्य स्रोतों से दूषित जल को पर्यावरण में वापस छोड़ने से पहले उपचार करने की प्रक्रिया है। यह महत्वपूर्ण प्रक्रिया सार्वजनिक स्वास्थ्य की रक्षा और पर्यावरण संतुलन बनाए रखने में मदद करती है।",
        "प्राथमिक उपचार में स्क्रीनिंग और तलछट के माध्यम से ठोस पदार्थों को भौतिक रूप से हटाना शामिल है। यह प्रारंभिक चरण अपशिष्ट जल धारा से लगभग 60% निलंबित ठोस पदार्थों को हटा देता है।",
        "द्वितीयक उपचार जैविक प्रक्रियाओं का उपयोग करता है जहां सूक्ष्मजीव कार्बनिक पदार्थ को तोड़ते हैं। यह चरण आमतौर पर 90% तक कार्बनिक पदार्थ को हटा देता है और रोगजनकों को काफी कम कर देता है।",
        "तृतीयक उपचार, अंतिम चरण, में फिल्ट्रेशन, कीटाणुशोधन और पोषक तत्वों को हटाने जैसी उन्नत सफाई प्रक्रियाएं शामिल हैं। यह सुनिश्चित करता है कि पानी निर्वहन से पहले कड़े पर्यावरणीय मानकों को पूरा करता है।",
        "आधुनिक अपशिष्ट जल प्रबंधन प्रणालियां तेजी से संसाधन पुनर्प्राप्ति पर ध्यान केंद्रित कर रही हैं, अपशिष्ट उत्पादों को बायोगैस और उर्वरक जैसे मूल्यवान संसाधनों में परिवर्तित कर रही हैं, जो एक अधिक टिकाऊ चक्रीय अर्थव्यवस्था में योगदान कर रही हैं।"
      ]
    },
    malayalam: {
      title: "മലിനജല പരിപാലനം",
      paragraphs: [
        "മലിനജല പരിപാലനം എന്നത് വീടുകളിൽ നിന്നും വ്യവസായങ്ങളിൽ നിന്നും മറ്റ് സ്രോതസ്സുകളിൽ നിന്നുമുള്ള മലിനജലം പരിസ്ഥിതിയിലേക്ക് തിരികെ വിടുന്നതിന് മുമ്പ് ശുദ്ധീകരിക്കുന്ന പ്രക്രിയയാണ്.",
        "പ്രാഥമിക ചികിത്സയിൽ സ്ക്രീനിംഗ്, അവസാദം എന്നിവയിലൂടെ ഖര വസ്തുക്കളുടെ ഭൗതിക നീക്കം ഉൾപ്പെടുന്നു.",
        "സെക്കൻഡറി ട്രീറ്റ്മെന്റിൽ സൂക്ഷ്മാണുക്കൾ ജൈവവസ്തുക്കൾ വിഘടിപ്പിക്കുന്ന ജൈവിക പ്രക്രിയകൾ ഉപയോഗിക്കുന്നു.",
        "അവസാന ഘട്ടമായ തൃതീയ ചികിത്സയിൽ ഫിൽട്രേഷൻ, അണുനശീകരണം, പോഷകങ്ങൾ നീക്കം ചെയ്യൽ തുടങ്ങിയ വിപുലമായ ശുചീകരണ പ്രക്രിയകൾ ഉൾപ്പെടുന്നു.",
        "ആധുനിക മലിനജല പരിപാലന സംവിധാനങ്ങൾ ക്രമേണ വിഭവ വീണ്ടെടുക്കലിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു."
      ]
    },
    arabic: {
      title: "إدارة مياه الصرف الصحي",
      paragraphs: [
        "إدارة مياه الصرف الصحي هي عملية معالجة المياه الملوثة من المنازل والصناعات والمصادر الأخرى قبل إعادتها إلى البيئة.",
        "تتضمن المعالجة الأولية الإزالة الفيزيائية للمواد الصلبة من خلال الفحص والترسيب.",
        "تستخدم المعالجة الثانوية العمليات البيولوجية حيث تقوم الكائنات الحية الدقيقة بتحليل المواد العضوية.",
        "تتضمن المعالجة الثالثية عمليات تنظيف متقدمة مثل الترشيح والتطهير وإزالة المغذيات.",
        "تركز أنظمة معالجة مياه الصرف الصحي الحديثة بشكل متزايد على استعادة الموارد."
      ]
    },
    french: {
      title: "Gestion des Eaux Usées",
      paragraphs: [
        "La gestion des eaux usées est le processus de traitement des eaux contaminées provenant des ménages, des industries et d'autres sources.",
        "Le traitement primaire implique l'élimination physique des matières solides par criblage et sédimentation.",
        "Le traitement secondaire utilise des processus biologiques où les micro-organismes décomposent la matière organique.",
        "Le traitement tertiaire implique des processus de nettoyage avancés tels que la filtration.",
        "Les systèmes modernes se concentrent sur la récupération des ressources."
      ]
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="mb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Language Selection
          </h1>
          <Dropdown
            label={language.charAt(0).toUpperCase() + language.slice(1)}
            gradientDuoTone="purpleToBlue"
          >
            <Dropdown.Item onClick={() => setLanguage('english')}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguage('hindi')}>Hindi</Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguage('malayalam')}>Malayalam</Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguage('arabic')}>Arabic</Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguage('french')}>French</Dropdown.Item>
          </Dropdown>
        </div>

        <div className={`${language === 'arabic' ? 'rtl' : 'ltr'} transition-all duration-300 ease-in-out`}>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {content[language].title}
          </h2>
          
          {content[language].paragraphs.map((paragraph, index) => (
            <Card key={index} className="mb-4 dark:bg-gray-800">
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default About;