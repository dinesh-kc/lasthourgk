angular.module('mcqApp', [])
  .config(['$httpProvider', function($httpProvider) {
    // Initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // Disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
  }])
  .controller('mcqController', function($scope) {
    // Environment questions data
    $scope.questions = [
      {
        "question_number": 1,
        "question": "तल दिइएका मध्ये कुन गलत छ?",
        "statements": {},
        "options": {
          "A": "सन् २०२२ नोभेम्बर ८५ लाई Day of 8 Billion भनिन्छ।",
          "B": "फिलिपिन्समा जन्मेको Vinice Mabansang लाई 8th Billion Baby भनिन्छ।",
          "C": "जनसंख्या सम्बन्धी पहिलो अन्तर्राष्ट्रिय सम्मेलन सन् १९७४ मा भएको थियो।",
          "D": "नेपालको अन्तर्राष्ट्रिय मापदण्डको पहिलो वैज्ञानिक जनगणना वि.सं. २०२८ मा भएको थियो।"
        },
        "answer": "C"
      },
      {
        "question_number": 2,
        "question": "दिइएका मध्ये सही जोडा छान्नुहोस्।",
        "statements": {
          "Conventions": {
            "a": "Alma-Ata Declaration",
            "b": "Hague Convention",
            "c": "Talanoa Dialogue",
            "d": "Under 2 Coalition"
          },
          "Themes": {
            "1": "Healthcare of the people",
            "2": "Biological and chemical weapons",
            "3": "Global Climate change",
            "4": "Child Rights"
          }
        },
        "options": {
          "A": "1 र 2 मात्र",
          "B": "1 र 3 मात्र",
          "C": "4 मात्र",
          "D": "2, 3 र 4 मात्र"
        },
        "answer": "B"
      },
      {
        "question_number": 3,
        "question": "तलका भनाईहरु विचार गर्नुहोस्?",
        "statements": {
          "1": "इसिमोडको स्थापना सन् १९८३ डिसेम्बर ५ मा काठमाण्डौमा भएको हो।",
          "2": "इसिमोडका सबै सदस्य राष्ट्र सदस्य छन्।",
          "3": "नेपालले CITES मा सन् १९७५ मा नै हस्ताक्षर गरेको थियो।",
          "4": "पृथ्वी सम्मेलनको रियो+20 सन् २०१२ मा चिनको बेइजिङमा भएको थियो।"
        },
        "options": {
          "A": "2 र 4 ठिक",
          "B": "3 र 4 ठिक",
          "C": "1, 2 र 3 ठिक",
          "D": "1, 3 र 4 ठिक"
        },
        "answer": "D"
      },
      {
        "question_number": 4,
        "question": "कुन कुन जोडा सही हुन्?",
        "statements": {
          "Animals": {
            "a": "बाघ",
            "b": "अर्ना",
            "c": "गैडा",
            "d": "कृष्णसार"
          },
          "Numbers": {
            "1": "375",
            "2": "498",
            "3": "752",
            "4": "355"
          }
        },
        "options": {
          "A": "a-2, b-1, c-3, d-4",
          "B": "a-1, b-2, c-3, d-4",
          "C": "a-4, b-2, c-3, d-1",
          "D": "a-4, b-2, c-1, d-3"
        },
        "answer": "C"
      },
      {
        "question_number": 5,
        "question": "जीवकोष मै जीवकको एकाई हो यो भनाई कसको हो?",
        "statements": {},
        "options": {
          "A": "रबर्ट कोच",
          "B": "सर रोनाल्ड रोम",
          "C": "लुई पाश्चर",
          "D": "थियोडर स्वान"
        },
        "answer": "D"
      },
      {
        "question_number": 6,
        "question": "एजेण्डा २१ का बारेमा कुन भनाई गलत छ?",
        "statements": {},
        "options": {
          "A": "विकास र वातावरणसँग सम्बन्धित ४० बुँदे एजेण्डा हो",
          "B": "नेपालमा Capacity-3 अन्तर्गत ४ जिल्लामा लागु भएको थियो",
          "C": "एजेण्डा २१ हस्ताक्षर गर्ने अन्तिम देश नेपाल हो",
          "D": "एजेण्डा २१ मा हस्ताक्षर गर्ने पहिलो देश चीन हो"
        },
        "answer": "C"
      },
      {
        "question_number": 7,
        "question": "दिगो विकासको सन् २०१६ देखि सन् २०३० को लक्ष्य कुन सिद्धान्तमा आधारित रहेको छ।",
        "statements": {},
        "options": {
          "A": "It's your world",
          "B": "The future we want",
          "C": "One vision one identity, one community",
          "D": "None of the above"
        },
        "answer": "B"
      },
      {
        "question_number": 8,
        "question": "वातावरण संरक्षणसंग सम्बन्धित सम्मेलनहरुको अगाडि देखि पछाडिको कुन क्रम सही छ?",
        "statements": {
          "Conventions": {
            "1": "Convention on Biological diversity",
            "2": "Basel convention",
            "3": "Montreal protocol",
            "4": "Minamata convention"
          }
        },
        "options": {
          "A": "Convention on Biological diversity, Basel convention, Minamata convention, Montreal protocol",
          "B": "Basel convention, Convention on Biological diversity, Montreal protocol, Minamata convention",
          "C": "Montreal protocol, Basel convention, Convention on Biological Diversity, Minamata convention",
          "D": "Convention on Biological Diversity, Basel convention, Montreal protocol, Minamata Convention"
        },
        "answer": "C"
      },
      {
        "question_number": 9,
        "question": "देहायकामध्ये कुन कुन कथन सही हुन् अध्ययन गरी सही विकल्प छनोट गर्नुहोस्।",
        "statements": {
          "i": "विश्व जैविक विविधता दिवस मे २२ मा मनाइन्छ। सन् १९७२ बाट यो दिवस मनाउन थालिएको हो।",
          "ii": "विश्व पृथ्वी दिवस अप्रिल २२ मा मनाइन्छ। सन् १९७० बाट यो दिवस मनाउन थालिएको हो।"
        },
        "options": {
          "A": "दुवै सही",
          "B": "i मात्र सही",
          "C": "ii मात्र सही",
          "D": "दुवै बेठिक"
        },
        "answer": "C"
      },
      {
        "question_number": 10,
        "question": "जोडा मिलाई कोडबाट उत्तर छनोट गर्नुहोस्।",
        "statements": {
          "Events": {
            "a": "वातावरण सम्बन्धी विश्व सम्मेलन",
            "b": "विश्व वातावरण दिवस",
            "c": "क्योटो प्रोटोकल",
            "d": "इसिमोड"
          },
          "Years": {
            "i": "सन् १९७२",
            "ii": "सन् २००५",
            "iii": "रियो दि जेनेरियो",
            "iv": "जुन ५"
          }
        },
        "options": {
          "A": "a-iv, b-i, c-iii, d-ii",
          "B": "a-iii, b-iv, c-ii, d-i",
          "C": "a-i, b-iii, c-ii, d-iv",
          "D": "a-iii,b-ii,c-i,d-iv"
        },
        "answer": "B"
      },
      {
        "question_number": 11,
        "question": "जोडा मिलाउनुहोस्।",
        "statements": {
          "Awards": {
            "a": "Global -500",
            "b": "Blue Planet award",
            "c": "Galante Conservation",
            "d": "Goldman Environment Prize"
          },
          "Details": {
            "1": "वातावरण क्षेत्रको नोबेल",
            "2": "डा. मुकेश चालिसे",
            "3": "UNEP ले स्थापना गरेको",
            "4": "वातावरण क्षेत्रको सबैभन्दा ठुलो राशीको पुरस्कार"
          }
        },
        "options": {
          "A": "a-3,b-4,c-2,d-1",
          "B": "a-3,b-4,c-1,d-2",
          "C": "a-1, b-2, c-3, d-4",
          "D": "a-1,b-2,c-4,d-3"
        },
        "answer": "A"
      },
      {
        "question_number": 12,
        "question": "सही विकल्प छनौट गर्नुहोस्।",
        "statements": {
          "i": "नेपालमा दिगो विकासको अवधारणा आठौं योजनाबाट आएको हो।",
          "ii": "जैविक विविधता दिवस जुन ५ मा मनाइन्छ।",
          "iii": "WWF ले Red Data List प्रकाशन गर्दछ।"
        },
        "options": {
          "A": "i र iii मात्र सही",
          "B": "i मात्र सही",
          "C": "ii र iii मात्र सही",
          "D": "सबै बेठिक"
        },
        "answer": "B"
      },
      {
        "question_number": 13,
        "question": "निम्न कथनहरू बारे विचार गर्नुहोस्।",
        "statements": {
          "i": "विश्व सम्पदा सूचीमा सूचीकृत पहिलो राष्ट्रिय निकुञ्ज चितवन राष्ट्रिय निकुञ्ज हो।",
          "ii": "सगरमाथा राष्ट्रिय निकुञ्ज विश्व सम्पदा सूचीमा सन् १९७९ मा सूचीकृत भएको हो।"
        },
        "options": {
          "A": "i ठिक ii बेठिक",
          "B": "ii ठिक i बेठिक",
          "C": "दुवै ठिक",
          "D": "दुवै बेठिक"
        },
        "answer": "B"
      },
      {
        "question_number": 14,
        "question": "WWF को प्रधान कार्यालय कहाँ रहेको छ?",
        "statements": {},
        "options": {
          "A": "जेनेभा",
          "B": "न्युयोर्क",
          "C": "नैरोबी",
          "D": "वासिङ्टन डि.सी."
        },
        "answer": "B"
      },
      {
        "question_number": 15,
        "question": "जोडा मिलाउनुहोस् र कोडबाट सही उत्तर छनोट गर्नुहोस्।",
        "statements": {
          "Terms": {
            "a": "जैविक प्रविधि",
            "b": "पर्यावरण",
            "c": "पर्यावरणीय पर्यटन",
            "d": "जैविक विविधता"
          },
          "Pioneers": {
            "1": "अर्नेष्ट ह्याकेल",
            "2": "कार्ल ट्रोली",
            "3": "हेक्टर सेवालोस लास्कुरेन",
            "4": "ई. ओ विल्सन"
          }
        },
        "options": {
          "A": "a-2,b-1,c-4,d-3",
          "B": "a-2,b-1,c-3,d-4",
          "C": "a-1, b-2, c-3, d-4",
          "D": "a-4,b-2,c-3,d-1"
        },
        "answer": "B"
      },
      {
        "question_number": 16,
        "question": "Agenda-21 मा हस्ताक्षर गर्ने प्रथम राष्ट्र कुन हो?",
        "statements": {},
        "options": {
          "A": "चीन",
          "B": "फ्रान्स",
          "C": "कोलम्बिया",
          "D": "अर्जेन्टिना"
        },
        "answer": "B"
      },
      {
        "question_number": 17,
        "question": "Green Belt Movement को संग सम्बन्धित छ?",
        "statements": {},
        "options": {
          "A": "सुन्दरलाल बहुगुणा",
          "B": "वाङ्गारी माथाई",
          "C": "गो हार्लेम ब्रुटल्याण्ड",
          "D": "मुकेश चालिसे"
        },
        "answer": "B"
      },
      {
        "question_number": 18,
        "question": "जे.एफ. डेनेबेजका अनुसार नेपालमा कति प्रकारका पारिस्थितिक प्रणाली पाइन्छ?",
        "statements": {},
        "options": {
          "A": "११५",
          "B": "११०",
          "C": "११८",
          "D": "११४"
        },
        "answer": "D"
      },
      {
        "question_number": 19,
        "question": "तलका भनाइ बारे विचार गर्नुहोस्।",
        "statements": {
          "i": "ओजन तह शब्द प्रयोग गर्ने पहिलो व्यक्ति जोसी फाब्रयमान हुन्।",
          "ii": "हरित गृह प्रभावको अवधारणा ल्याउने व्यक्ति जिन फोरियर हुन्।",
          "iii": "वातावरण क्षेत्रको नोबेल पुरस्कार भनेर Blue planet award लाई चिनिन्छ।"
        },
        "options": {
          "A": "i र ii ठिक",
          "B": "i र iii ठिक",
          "C": "सबै ठिक",
          "D": "सबै बेठिक"
        },
        "answer": "A"
      },
      {
        "question_number": 20,
        "question": "कुन जोडा गलत छ?",
        "statements": {
          "Pairs": {
            "A": "CFC ब्यासको खोजी गर्ने → थोमस मिज",
            "B": "चिपको आन्दोलन → मेघा पाटकर",
            "C": "दिगो विकास → वार्बरा वार्ड",
            "D": "ओजन तह → शेरउड रोल्याण्ड र मोलिना"
          }
        },
        "options": {
          "A": "A",
          "B": "B",
          "C": "C",
          "D": "D"
        },
        "answer": "A"
      },
      {
        "question_number": 21,
        "question": "गलत भनाई छान्नुहोस्।",
        "statements": {},
        "options": {
          "A": "दिगो विकास शब्द पहिलो पटक प्रयोग गर्ने व्यक्ति बार्बरा वार्ड हुन्।",
          "B": "दिगो विकास सम्बन्धी नेपालमा सर्वप्रथम राष्ट्रिय संरक्षण रणनीति (NCS) : वि.स. १९४४ लागु भयो।",
          "C": "नेपालमा दिगो विकासको एजेण्डा वि.सं २०३० मा बनाईयो।",
          "D": "प्राकृतिक स्रोतलाई कैदी नजिगारी जे जस्तो अवस्थामा छ सोही अवस्थामा कायम राख्ने धारणालाई निरपेक्ष संरक्षण भनिन्छ।"
        },
        "answer": "B"
      },
      {
        "question_number": 22,
        "question": "कुन भनाई गलत रहेको छ?",
        "statements": {
          "Terms": {
            "A": "Win Win Policy  : WCED ले विकासोन्मुख मुलुकहरूको आयवृद्धि, गरिबी निवारण, वातावरणीय सुधार कार्यक्रमका लागि प्रस्तुत गरिएको कार्यक्रम।",
            "B": "HMS Challenger : समुन्द्रको अध्ययन गर्ने विश्वको पहिलो पानीजहाज",
            "C": "डोब्सन युनिट  :  ओजोन तहमा परेको क्षतिलाई डोब्सन युनिट (Dobson Unit) मा नापिन्छ भने यसलाई नाप्ने उपकरण Total Ozone Maping Spectromter (TOMS) हो",
            "D": "Gift to the earth  :  ICIMOD ले विश्वव्यापी रूपमा जिवजन्तु संरक्षण स्वरूप चालेको अभियान- लाई Gift to the earth भनिन्छ"
          }
        },
        "options": {
     
        },
        "answer": "D"
      },
      {
        "question_number": 23,
        "question": "विचार गर्नुहोस्।",
        "statements": {
          "I": "WWF को लोगोमा अफ्रिका चिन्हको निर्माण सर पिटर स्कट्ले गरेका हुन्।",
          "II": "प्रकृति संरक्षण सम्बन्धी काम WWF ले मै आएको छ।"
        },
        "options": {
          "A": "I ठिक II बेठिक",
          "B": "I बेठिक II ठिक",
          "C": "दुवै बेठिक",
          "D": "दुवै ठिक"
        },
        "answer": "D"
      },
      {
        "question_number": 24,
        "question": "जलवायु परिवर्तनको प्रभाव कम गर्नका लागि विश्वको प्यानाकर्षण गर्ने पनीपुरी मन्त्रीपरिषदको बैठक गर्ने राष्ट्र कुन हो?",
        "statements": {},
        "options": {
          "A": "श्रीलंका",
          "B": "मालदिभ्स",
          "C": "भारत",
          "D": "जापान"
        },
        "answer": "B"
      },
      {
        "question_number": 25,
        "question": "२९ जनवरी, २००० मा कार्टेजेना प्रोटोकल (Cartagena Protocol) जारी भएको थियो जुन बायोसेफ्टी (Biosafety) संग सम्बन्धित छ। उक्त कार्टेजेना प्रोटोकल जारी भएको कार्टेजेना भन्ने शहर कुन देशमा पर्दछ?",
        "statements": {},
        "options": {
          "A": "क्यामरुन",
          "B": "ब्राजिल",
          "C": "कोलम्बिया",
          "D": "इक्वेडर"
        },
        "answer": "C"
      },
      {
        "question_number": 26,
        "question": "तल दिइएका UNFCCC का प्रतिबद्धताहरु र वर्षहरु बिच कुन जोड ठिक छैन।",
        "statements": {
          "UNFCCC का प्रतिबद्धताहरु": {
            "A": "क्योटो प्रोटोकल",
            "B": "क्यानकुन सहमती",
            "C": "कोपेनहेगन एकर्ड",
            "D": "बाली एक्सन प्लान"
          },
          "वर्षहरु (सन्)": {
            "1": "१९९७",
            "2": "२०१०",
            "3": "२०१२",
            "4": "२००७"
          }
        },
        "options": {
          "A": "A-1",
          "B": "B-2",
          "C": "C-3",
          "D": "D-4"
        },
        "answer": "C"
      },
      {
        "question_number": 27,
        "question": "तलका भनाई बारे विचार गर्नुहोस्।",
        "statements": {
          "I": "काठमाडौं उपत्यकामा सवारी प्रदुषण जाँच २०५१ वैशाख १ बाट गर्न थालियो।",
          "II": "काठमाडौं उपत्यकामा डिजेल टेम्पो २०५६ असोज १ बाट हटाइयो।",
          "III": "नेपालमा सवारी प्रदुषणको मापदण्डको निर्धारण वि.सं. २०५६ देखि गरिएको थियो।",
          "IV": "यूरो - १ सवारी प्रदुषणको मापदण्डसंग सम्बन्धित छ।"
        },
        "options": {
          "A": "I र II बेठिक III र IV ठिक",
          "B": "II र IV बेठिक I र III ठिक",
          "C": "I र IV बेठिक II र III ठिक",
          "D": "सबै सही"
        },
        "answer": "D"
      },
      {
        "question_number": 28,
        "question": "सर्य फोटोग्राफीसंग तलका मध्ये को सम्बन्धित छ?",
        "statements": {},
        "options": {
          "A": "मार्टिन फुन",
          "B": "गौतम सापकोटा",
          "C": "रोहित गिरी",
          "D": "हिरानन्द महर्जन"
        },
        "answer": "C"
      },
      {
        "question_number": 29,
        "question": "प्रति व्यक्ति CO₂ Emission सबैभन्दा धेरै भएको देश कुन हो?",
        "statements": {},
        "options": {
          "A": "अमेरिका",
          "B": "कतार",
          "C": "चीन",
          "D": "भारत"
        },
        "answer": "B"
      },
      {
        "question_number": 30,
        "question": "Montreux Record तलका मध्ये कैसंग सम्बन्धित छ?",
        "statements": {},
        "options": {
          "A": "जलवायु परिवर्तन",
          "B": "रामसार सूची",
          "C": "प्रदुषण",
          "D": "जैविक विविधता"
        },
        "answer": "B"
      },
      {
        "question_number": 31,
        "question": "\"International Whaling Commission\" को प्रधानकार्यालय कहाँ रहेको छ?",
        "statements": {},
        "options": {
          "A": "क्याम्ब्रिज, स्कटल्याण्ड",
          "B": "पेरिस, फ्रान्स",
          "C": "मुम्बई, भारत",
          "D": "कोलम्बो, श्रीलंका"
        },
        "answer": "A"
      },
      {
        "question_number": 32,
        "question": "नेपालमा कति माइक्रोन भन्दा कमको प्लास्टिक उत्पादन र प्रयोगमा प्रतिबन्ध लगाइएको छ?",
        "statements": {},
        "options": {
          "A": "२५ माइक्रोन",
          "B": "३० माइक्रोन",
          "C": "३५ माइक्रोन",
          "D": "४० माइक्रोन"
        },
        "answer": "D"
      },
      {
        "question_number": 33,
        "question": "कुनै पनि देश 'Nuclear Suppliers Group' आणविक आपूर्तिकर्ता समूह को सदस्य हुनको परिमाण के हुन्छ/हुदैन?",
        "statements": {
          "1": "नविनतम एवं कुशल आणविक प्रविधिहरुसंग पहुँच बढ्न जान्छ।",
          "2": "उक्त देश स्वत: \"The Treaty on the Non-Proliferation of Nuclear weapons\" (NPT) (आणविक हतियारहरुको गैर-प्रसारको सन्धि) को सदस्य हुन्छ।"
        },
        "options": {
          "A": "1 र 2 ठिक",
          "B": "1 र 2 बेठिक",
          "C": "1 मात्र ठिक",
          "D": "2 मात्र ठिक"
        },
        "answer": "C"
      },
      {
        "question_number": 34,
        "question": "तलका कुन चार जोडा गलत देखिएको छ?",
        "statements": {
          "Centers": {
            "A": "जैविक विविधता सूचना केन्द्र - टिकौली, चितवन",
            "B": "हात्ति प्रजनन केन्द्र - खोरसोर, चितवन",
            "C": "मिर्ग प्रजनन केन्द्र - पिटौली, नवलपरासी",
            "D": "मृग अध्ययन केन्द्र - गोदावरी, ललितपुर"
          }
        },
        "options": {
          "A": "A",
          "B": "B",
          "C": "C",
          "D": "D"
        },
        "answer": "A"
      },
      {
        "question_number": 35,
        "question": "निम्नमध्ये कुनको सन्दर्भमा कैरी बैज्ञानिकले सिरस क्लाउड पातलो गर्ने प्रविधि (Cirrus cloud thinning technique) र स्ट्रेटोस्फियरमा सल्फेट एसोसोलको इन्जेक्शन (Injection of sulphate aerosol into stratosphere) प्रयोग गर्ने सल्लाह दिन्छन्।",
        "statements": {},
        "options": {
          "A": "कैरी क्षेत्रमा कठिन वर्षा गराउने सन्दर्भमा",
          "B": "उष्णकटिबंधीय चक्रवातको आवृति र तीव्रता कम गर्ने सन्दर्भमा",
          "C": "पृथ्वीमा सौर्य वायुको प्रतिकूल असर कम गर्ने सन्दर्भमा",
          "D": "ग्लोबल वार्मिंङ कम गर्ने सन्दर्भमा"
        },
        "answer": "D"
      },
      {
        "question_number": 36,
        "question": "वातावरण संरक्षण ऐन, २०७६ अनुसार वातावरण संरक्षण तथा जलवायु परिवर्तन सम्बन्धी कार्यलाई राष्ट्रस्तरमा प्रभावकारी रुपमा संचालन गर्न एक वातावरण संरक्षण तथा जलवायु परिवर्तन व्यवस्थापन राष्ट्रिय परिषदको व्यवस्था गरिएको छ। यस परिषदमा कति सदस्य छन् र यो परिषदको अध्यक्षता कसले गरेको छ?",
        "statements": {},
        "options": {
          "A": "१७, वन तथा वातावरण मन्त्री",
          "B": "१९, प्रधानमन्त्री",
          "C": "१९, वन तथा वातावरण मन्त्री",
          "D": "१७, प्रधानमन्त्री"
        },
        "answer": "D"
      },
      {
        "question_number": 37,
        "question": "तलका मध्ये कुन भनाई गलत रहेको छ?",
        "statements": {},
        "options": {
          "A": "सन् १९५२ मा रोवर्ट एङ्गस स्मिथले अम्लीय वर्षाको अवधारणा अघि सारेका हुन्।",
          "B": "ओजन तह विनाश गर्ने प्रमुख औद्योगिक रसायन क्लोरोफ्लोरो कार्बन सन् १९३० मा थोमस मिजले पत्ता लगाएका थिए।",
          "C": "क्लोरोफ्लोरो कार्बन रेफ्रिजेरेटर, एयर कन्डिसनर, प्लास्टिकका फोम बनाउन प्रयोग गरिन्छ।",
          "D": "वातावरण संरक्षणको क्षेत्रमा काम गर्ने ग्रिन पिस (Green Peace) को स्थापना सन् १९८१ मा भएको हो।"
        },
        "answer": "D"
      },
      {
        "question_number": 38,
        "question": "भियना महासन्धी र यसको मोन्ट्रियल प्रोटोकलको मुख्य उद्देश्य निम्न मध्ये कुन हो?",
        "statements": {},
        "options": {
          "A": "मरुभूमिकरण विरुद्धको प्रतिरोध",
          "B": "दिगो विकास लक्ष्यको तर्जुमा",
          "C": "ओजोन तहको संरक्षण",
          "D": "जलवायु परिवर्तन प्रतिरोध"
        },
        "answer": "C"
      },
      {
        "question_number": 39,
        "question": "दिगो विकासको सन् २०१६ देखि सन् २०३० को लक्ष्य कुन सिद्धान्तमा आधारित रहेको छ।",
        "statements": {},
        "options": {
          "A": "\"It's your world\"",
          "B": "\"The future we want\"",
          "C": "\"One vision one identity, one community\"",
          "D": "None of the above"
        },
        "answer": "B"
      },
      {
        "question_number": 40,
        "question": "सन् १९९२ मा भएको पृथ्वी सम्मेलन नभएको एजेण्डा कुन हो?",
        "statements": {},
        "options": {
          "A": "एजेण्डा २१",
          "B": "जैविक विविधता",
          "C": "ग्लोबल ५००",
          "D": "मौसम परिवर्तन"
        },
        "answer": "C"
      },
      {
        "question_number": 41,
        "question": "तलका मध्ये कुन भनाई सही रहेको छ?",
        "statements": {},
        "options": {
          "A": "सन् २०१० सिंगापुरमा गिटर्बर्गमा भएको सम्मेलन अनुसार सन् २०२२ सम्म बाघको संख्या दोब्बर गराउने प्रतिबद्धता गरिएको थियो",
          "B": "बाघ राष्ट्रिय जनावर हुने विश्वको एक मात्र देश मलेसिया हो।",
          "C": "नेपालमा बाघ गणना हरेक ५-५ वर्षमा गरिन्छ।",
          "D": "नेपालमा पहिलो बाघ गणना सन् २०१२ मा सम्पन्न भएको थियो।"
        },
        "answer": "C"
      },
      {
        "question_number": 42,
        "question": "Big Blue Marble केसंग सम्बन्धित छ?",
        "statements": {},
        "options": {
          "A": "सन् १९६९ मा पृथ्वी बाहिरबाट पृथ्वीको तस्विर खिचेर गरिएको प्रदर्शनी",
          "B": "वातावरण क्षेत्रको विश्व प्रसिद्ध संस्था",
          "C": "नासाले प्रक्षेपण गरेको विश्व प्रसिद्ध उपग्रह",
          "D": "वातावरण क्षेत्रको चर्चित पुस्तक"
        },
        "answer": "A"
      },
      {
        "question_number": 43,
        "question": "दिगो विकासको १२ औं लक्ष्य कुन हो?",
        "statements": {},
        "options": {
          "A": "देशभित्रै वा देशहरू बीच रहेको असमानतालाई न्यून गर्ने",
          "B": "सहरहरूलाई समावेशी, सुरक्षित, सबल र दिगो बनाउने।",
          "C": "दिगो उपभोग तथा उत्पादनको ढाँचा सुनिश्चित गर्ने",
          "D": "जलवायु परिवर्तन तथा यसका प्रभावहरू विरुद्ध लड्न तत्काल कारवाही थाल्ने"
        },
        "answer": "C"
      },
      {
        "question_number": 44,
        "question": "समूह I र समूह II मा जोडा मिलाउनुहोस् र सहि कोड छान्नुहोस्?",
        "statements": {
          "Group I": {
            "a": "नेपाल IUCN को सदस्य",
            "b": "ग्रीन पिसको स्थापना",
            "c": "UNEP को स्थापना"
          },
          "Group II": {
            "1": "सन् १९७५",
            "2": "सन् १९७२",
            "3": "सन् १९७१",
            "4": "सन् १९७३"
          }
        },
        "options": {
          "A": "a-4, b-3, c-2",
          "B": "a-4, b-2, c-3",
          "C": "a-1, b-3, c-2",
          "D": "a-4, b-3, c-1"
        },
        "answer": "A"
      },
      {
        "question_number": 45,
        "question": "जोडा मिलाउनुहोस् र सही उत्तर छनोट गर्नुहोस्।",
        "statements": {
          "National Parks": {
            "1": "मकालु बरुण निकुञ्ज",
            "2": "लाङटाङ राष्ट्रिय निकुञ्ज",
            "3": "खप्तड राष्ट्रिय निकुञ्ज",
            "4": "शे-फोक्सुण्डो राष्ट्रिय निकुञ्ज"
          },
          "Features": {
            "a": "रेड पाण्डा (हाब्रे)",
            "b": "खुम्बु र चरिचरण",
            "c": "मिली भेडा र चिम्कती खरायो",
            "d": "अमेरिकी सहयोग रहेको"
          }
        },
        "options": {
          "A": "1-c,2-d,3-d,4-a",
          "B": "1-d,2-c,3-a,4-b",
          "C": "1-d,2-a,3-b,4-c",
          "D": "1-b,2-a,3-d,4-c"
        },
        "answer": "D"
      },
      {
        "question_number": 46,
        "question": "सन् १९९२ को जुन ३-१४ सम्म Brazil मा भएको पृथ्वी शिखर सम्मेलनका सन्दर्भमा जैविक विविधता महासन्धिमा कति देशका प्रमुखहरुले हस्ताक्षर गरेका थिए?",
        "statements": {},
        "options": {
          "A": "१५१",
          "B": "१५४",
          "C": "१५५",
          "D": "१५९"
        },
        "answer": "C"
      },
      {
        "question_number": 47,
        "question": "पृथ्वी शिखर सम्मेलनको अनुगमन गर्ने सन् २००२ को दिगो विकाससम्बन्धी विश्व शिखर सम्मेलन कहाँ सम्पन्न भएको थियो?",
        "statements": {},
        "options": {
          "A": "दक्षिण अफ्रिकाको जोहान्सबर्ग",
          "B": "जेनेभा स्विजरल्याण्ड",
          "C": "टोकियो जापान",
          "D": "रियो दि जेनेरियो ब्राजिल"
        },
        "answer": "A"
      },
      {
        "question_number": 48,
        "question": "नेपालमा वातावरण संरक्षण ऐन, २०७६ कहिलेदेखि लागु भएको हो?",
        "statements": {},
        "options": {
          "A": "वि.सं. २०७६ असोज २०",
          "B": "वि.सं. २०७६ कार्तिक २०",
          "C": "वि.सं. २०७६ मंसिर २०",
          "D": "वि.सं. २०७६ पुष २०"
        },
        "answer": "B"
      },
      {
        "question_number": 49,
        "question": "दिगो विकासको सन् २०१६ देखि सन् २०३० को लक्ष्य कुन सिद्धान्तमा आधारित रहेको छ।",
        "statements": {},
        "options": {
          "A": "\"It's your world\"",
          "B": "\"The future we want\"",
          "C": "\"One vision one identity, one community\"",
          "D": "None of the above"
        },
        "answer": "B"
      },
      {
        "question_number": 50,
        "question": "नेपालको तर्फबाट Comprehensive Nuclear Ban Treaty मा कसले हस्ताक्षर गरेका थिए?",
        "statements": {},
        "options": {
          "A": "गिरिजा प्रसाद कोइराला",
          "B": "मनमोहन अधिकारी",
          "C": "प्रकाशचन्द लोहनी",
          "D": "महेश आचार्य"
        },
        "answer": "C"
      },
      {
        "question_number": 51,
        "question": "माटो प्रदुषण ......का कारणले हुन्छ?",
        "statements": {},
        "options": {
          "A": "एसोसल",
          "B": "अम्लीय वर्षा",
          "C": "ओजोन",
          "D": "पारामगनेटिक नाइट्रेट"
        },
        "answer": "B"
      },
      {
        "question_number": 52,
        "question": "गोल्ड म्यान पुरस्कार के संग सम्बन्धित छ?",
        "statements": {},
        "options": {
          "A": "वायुमण्डलीय क्षेत्र",
          "B": "वातावरणीय क्षेत्र",
          "C": "जैविक क्षेत्र",
          "D": "दिगो विकासको क्षेत्र"
        },
        "answer": "B"
      },
      {
        "question_number": 53,
        "question": "WWF ले सन् २०२१ को TX2 पुरस्कार कुन राष्ट्रिय निकुञ्जलाई प्रदान गरेको हो?",
        "statements": {},
        "options": {
          "A": "बाँके",
          "B": "बर्दिया",
          "C": "चितवन",
          "D": "शुक्लाफाँटा"
        },
        "answer": "B"
      },
      {
        "question_number": 54,
        "question": "तलका भनाईहरु विचार गर्नुहोस्।",
        "statements": {
          "i": "नेपाल नेट कार्यक्रम सञ्चालन गर्ने संस्था युनेको हो।",
          "ii": "अन्टार्कटिकामा प्वाल परेको पत्ता लगाउने उपग्रहको नाम निम्बस-७ हो।",
          "iii": "नेपालले CITES मा सन् १९७५ मा हस्ताक्षर गरेको थियो।",
          "iv": "पृथ्वी सम्मेलन ब्राजिलको रियो द जेनेरियोमा भएको थियो।"
        },
        "options": {
          "A": "i ठिक र ii बेठिक",
          "B": "i बेठिक र ii ठिक",
          "C": "दुवै ठिक",
          "D": "दुवै बेठिक"
        },
        "answer": "B"
      },
      {
        "question_number": 55,
        "question": "CITES को मुख्य उद्देश्य के हो?",
        "statements": {},
        "options": {
          "A": "लोप हुन लागेका चिडियाहरूलाई संरक्षण गर्नु",
          "B": "जिवजन्तुलाई सिकारखेल्न नदिनु",
          "C": "पर्यटकीय प्रवर्धन गर्नु",
          "D": "दुर्लभ जिवजन्तु तथा वनस्पतिको संरक्षण र सम्बर्द्धन गर्नु"
        },
        "answer": "D"
      },
      {
        "question_number": 56,
        "question": "तल दिइएको सम्बन्धले के जनाउँछ? हरिया घाँस → हरिण → बाघ (खाद्य चक्र)",
        "statements": {},
        "options": {
          "A": "खाद्य चक्र",
          "B": "खाद्य शृङ्खला",
          "C": "पारिस्थितिक पद्धति",
          "D": "कुनै पनि होइन।"
        },
        "answer": "A"
      },
      {
        "question_number": 57,
        "question": "नेपालमा वातावरण मन्त्रालयको स्थापना कहिले भएको हो?",
        "statements": {},
        "options": {
          "A": "वि.सं.२०४९",
          "B": "वि.सं.२०५०",
          "C": "वि.सं. २०५१",
          "D": "वि.सं.२०५२"
        },
        "answer": "A"
      },
      {
        "question_number": 58,
        "question": "जोडा मिलाई कोडबाट उत्तर छनोट गर्नुहोस्।",
        "statements": {
          "Events": {
            "a": "हेल्सिन्की सम्मेलन",
            "b": "विश्व वातावरण दिवस",
            "c": "पृथ्वी शिखर सम्मेलन",
            "d": "IUCN"
          },
          "Years": {
            "1": "सन् १९४८",
            "2": "सन् १९९२",
            "3": "सन् १९७२",
            "4": "सन् १९७१"
          }
        },
        "options": {
          "A": "a-4, b-1, c-3, d-2",
          "B": "a-4, b-3, c-2, d-1",
          "C": "a-1, b-3, c-2, d-4",
          "D": "a-3, b-2, c-1, d-4"
        },
        "answer": "B"
      },
      {
        "question_number": 59,
        "question": "समूह I र II जोडा मिलाइ सहि उत्तर छनोट गर्नुहोस्।",
        "statements": {
          "समूह I": {
            "a": "पहिलो सामुदायिक वन",
            "b": "पहिलो संरक्षित वन",
            "c": "पहिलो साझेदारी वन",
            "d": "पहिलो WWF पुरस्कार पाउने वन"
          },
          "समूह II": {
            "1": "अमलटारी",
            "2": "बाजुरली",
            "3": "काके विहार",
            "4": "जलाधप"
          }
        },
        "options": {
          "A": "d-2, a-3, c-4, b-1",
          "B": "b-1,c-3,a-2, d-4",
          "C": "c-2,d-4,a-3,b-1",
          "D": "c-4,d-3,a-2,b-1"
        },
        "answer": "D"
      },
      {
        "question_number": 60,
        "question": "सुन्दरलाल बहुगुणाले चलाएको चिपको आन्दोलन के संग सम्बन्धित छ?",
        "statements": {},
        "options": {
          "A": "वातावरण र विकास",
          "B": "वन तथा वनस्पति संरक्षण",
          "C": "हिमालको संरक्षण",
          "D": "लोपोन्मुख जीवजन्तु र पशुपक्षीको संरक्षण"
        },
        "answer": "B"
      },
      {
        "question_number": 61,
        "question": "देहायकामध्ये कुन कुन कथन सही हुन अध्ययन गरी सही विकल्प छनोट गर्नुहोस्।",
        "statements": {
          "i": "विश्व जैविक विविधता दिवस मे २२ मा मनाइन्छ। सन् १९७२ बाट यो दिवस मनाउन थालिएको हो।",
          "ii": "विश्व पृथ्वी दिवस अप्रिल २२ मा मनाइन्छ। सन् १९७० बाट यो दिवस मनाउन थालिएको हो।"
        },
        "options": {
          "A": "दुवै सही",
          "B": "i मात्र सही",
          "C": "ii मात्र सही",
          "D": "दुवै बेठिक"
        },
        "answer": "C"
      },
      {
        "question_number": 62,
        "question": "वातावरण सम्बन्धी पुरस्कार Global 500 पाउने पहिलो नेपाली को हुन्?",
        "statements": {},
        "options": {
          "A": "प्रकाश चन्द्र लोहनी",
          "B": "सत्यमोहन जोशी",
          "C": "डा. मुकेश चालिसे",
          "D": "डा. कृष्ण कुमार पाण्डे"
        },
        "answer": "A"
      },
      {
        "question_number": 63,
        "question": "रामसार कन्भेन्सन तलकामध्ये के संग सम्बन्धित छ?",
        "statements": {},
        "options": {
          "A": "सिमसार क्षेत्र संरक्षण",
          "B": "प्रदुषण नियन्त्रण",
          "C": "जैविक विविधता संरक्षण",
          "D": "पर्या-पर्यटन"
        },
        "answer": "A"
      },
      {
        "question_number": 64,
        "question": "सर्वप्रथम हरितगृह को अवधारणा ल्याउने वैज्ञानिक को हुन्?",
        "statements": {},
        "options": {
          "A": "बैरिन जिन फोरियर",
          "B": "शेरउड रोल्याण्ड",
          "C": "अर्थिनस",
          "D": "थोमस मिज"
        },
        "answer": "A"
      },
      {
        "question_number": 65,
        "question": "विश्व सम्पदा दिवश कहिले मनाइन्छ?",
        "statements": {},
        "options": {
          "A": "अप्रिल २२",
          "B": "अप्रिल १८",
          "C": "जुलाई २९",
          "D": "जुलाई ११"
        },
        "answer": "B"
      },
      {
        "question_number": 66,
        "question": "कुन जोडा गलत रहेको छ?",
        "statements": {
          "Pairs": {
            "A": "पक्षी विशेषज्ञ → डा. हेमराज बराल",
            "B": "ओजन तह पत्ता लगाउन → शेरउड रोल्याण्ड",
            "C": "RIO + 10 सम्मेलन → जोहान्सबर्ग",
            "D": "अस्तित्ववर्ग सम्बन्धि पहिलो विश्व सम्मेलन → सन् १९९२"
          }
        },
        "options": {
          "A": "A",
          "B": "B",
          "C": "C",
          "D": "D"
        },
        "answer": "D"
      },
      {
        "question_number": 67,
        "question": "तलका भनाईबारे विचार गर्नुहोस्।",
        "statements": {
          "1": "Nepal Net कार्यक्रम संचालन गर्ने संस्था युनेको हो।",
          "2": "अन्टार्टिकाको प्वाल पत्ता लगाउने उपग्रहको नाम निम्बस ७ हो।"
        },
        "options": {
          "A": "१ ठीक २ बेठिक",
          "B": "१ बेठिक २ ठीक",
          "C": "दुवै ठिक",
          "D": "दुवै बेठिक"
        },
        "answer": "B"
      },
      {
        "question_number": 68,
        "question": "तलका मध्ये गलत जोडा पहिचान गर्नुहोस्।",
        "statements": {
          "Conferences": {
            "i": "स्टकहोम सम्मेलन : सन् १९७२",
            "ii": "टोरन्टो सम्मेलन : सन् १९८८",
            "iii": "हेल्सिन्की घोषणा : सन् १९८६"
          }
        },
        "options": {
          "A": "सबै गलत",
          "B": "ii र iii मात्र",
          "C": "i र ii मात्र",
          "D": "iii मात्र"
        },
        "answer": "D"
      },
      {
        "question_number": 69,
        "question": "देहायकामध्ये कुन कुन कथन सही हुन् अध्ययन गरी सही विकल्प छनोट गर्नुहोस्।",
        "statements": {
          "i": "ग्रिनपिसको स्थापना सन् १९७१ मा अमेरिकामा भएको हो।",
          "ii": "यसले वातावरण सम्बन्धमा Rainbow warrior भन्ने क्याटलाइट एल्बम तयार पारेको थियो।"
        },
        "options": {
          "A": "दुवै सही",
          "B": "i मात्र सही",
          "C": "ii मात्र सही",
          "D": "दुवै बेठिक"
        },
        "answer": "D"
      },
      {
        "question_number": 70,
        "question": "नेपालका संरक्षित २६ स्तनधारी जनावर भित्र तलको कुन पर्दैन?",
        "statements": {},
        "options": {
          "A": "चिरु",
          "B": "नावर",
          "C": "कस्तुरी मृग",
          "D": "लगुना"
        },
        "answer": "D"
      }
    ];

    // Shuffle options for each question
    function shuffleOptions(question) {
      const entries = Object.entries(question.options);
      for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
      }
      question.options = Object.fromEntries(entries);
    }

    $scope.questions.forEach(question => shuffleOptions(question));

    // Bookmark functionality
    $scope.bookmarkedEnvironmentQuestions = JSON.parse(localStorage.getItem('bookmarkedEnvironmentQuestions')) || [];

    $scope.isBookmarked = function(question) {
      return $scope.bookmarkedEnvironmentQuestions.some(q => q.question_number === question.question_number);
    };

    $scope.bookmarkQuestion = function(question) {
      if (!$scope.isBookmarked(question)) {
        $scope.bookmarkedEnvironmentQuestions.push(question);
        localStorage.setItem('bookmarkedEnvironmentQuestions', JSON.stringify($scope.bookmarkedEnvironmentQuestions));
        alert("Question bookmarked!");
      } else {
        alert("This question is already bookmarked!");
      }
    };

    $scope.removeBookmark = function(question) {
      $scope.bookmarkedEnvironmentQuestions = $scope.bookmarkedEnvironmentQuestions.filter(q => q.question_number !== question.question_number);
      localStorage.setItem('bookmarkedEnvironmentQuestions', JSON.stringify($scope.bookmarkedEnvironmentQuestions));
    };

    // Toggle answer visibility
    $scope.toggleAnswer = function(question) {
      question.showAnswer = !question.showAnswer;
    };

    // Submit exam functionality
    $scope.submitExam = function() {
      const answers = $scope.questions.map(question => ({
        question_number: question.question_number,
        question: question.question,
        userAnswer: question.options[question.userAnswer],
        correctAnswer: question.options[question.answer],
        isCorrect: question.userAnswer === question.answer
      }));

      const totalCorrect = answers.filter(answer => answer.isCorrect).length;

      $scope.result = {
        totalCorrect: totalCorrect,
        totalQuestions: $scope.questions.length,
        answers: answers
      };
    };

    // Reset exam functionality
    $scope.resetExam = function() {
      $scope.questions.forEach(question => {
        question.userAnswer = null;
        question.showAnswer = false;
      });
      $scope.result = null;
    };
  }); 