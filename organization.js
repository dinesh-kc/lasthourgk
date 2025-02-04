angular.module('mcqApp', [])
  .controller('mcqController', function($scope) {
    // Replace the random question data with your provided JSON data
    $scope.questions = [

        {
            "question_number": 1,
            "question": "UNO को ७९ औं महासभा सन् २०२४ को अध्यक्षता कुन देशले गर्ने भएको छ ?",
            "statements": {},
            "options": {
              "A": "क्यामरुन",
              "B": "अमेरिका",
              "C": "बेलायत",
              "D": "भारत"
            },
            "answer": ""
          },
           {
            "question_number": 2,
            "question": "UNO ले मनाउने वर्षहरूको सम्बन्धमा जोडा मिलाउनुहोस् ।",
            "statements": {
              "Years": {
                "a": "      २०२४",
                "b": "       २०२५",
                "c": "      २०२६",
                "d": "      २०२७"
              },
              "Themes": {
                "1": "International Year of Sustainable and Resilient Tourism",
                "2": "International Year of Rangelands and Pastoralists",
                "3": "International Year of Glaciers Preservation",
                "4": "International Year of Camelids"
              }
            },
            "options": {
              "A": "a-2, b-4, c-3, d-1",
              "B": "a-3, b-1, c-4, d-2",
              "C": "a-2, b-4, c-1, d-3",
              "D": "a-4, b-3, c-2, d-1"
            },
            "answer": ""
          },
          {
            "question_number": 3,
            "question": "महावाणिज्य दुतावास सम्बन्धमा गलत भनाई कुन हो ?",
            "statements": {},
            "options": {
              "A": "नेपालका हाल सम्म ७ वटा महावाणिज्य दुतावास रहेका छन",
              "B": "भारतमा एक चीनमा चार अमेरिका र साउदीअरेबियामा १/१ रहेका छन",
              "C": "सबैभन्दा पछिल्लो महावाणिज्यदुतावास चिनको चेड्दु हो",
              "D": "भारतको नयाँ दिल्लीमा नेपालको महावाणिज्यदुतावास रहेको छ"
            },
            "answer": ""
          },
          {
            "question_number": 4,
            "question": "SAARC विशेषताहरूमा कुन पर्दैन ?",
            "statements": {},
            "options": {
              "A": "SAARC संगठनका अंगहरू सदस्य देशका राष्ट्रिय अंगमा आधारित छन् ।",
              "B": "SAARC संगठनको वित्तीय व्यवस्था सदस्यको स्वेच्छामा आधारित छ ।",
              "C": "SAARC का सबै अंगहरूमा (सचिवालय बाहेक) मा सर्वसम्मतीबाट निर्णय लिने प्रणाली रहेको छ ।",
              "D": "SAARC मा आवश्यक्ताअनुसार द्विपक्षिय विषयमा पनि छलफल हुन्छ ।"
            },
            "answer": ""
          },
          {
            "question_number": 5,
            "question": "निम्न देशहरुबारे बिचार गर्नुहोस् ।",
            "statements": {
              "1": "ब्रुनाई",
              "2": "भियतनाम",
              "3": "म्यानमार",
              "4": "लाओस"
            },
            "question_text": "ASEAN का सदस्य राष्ट्र, माथि उल्लिखित कुन कुन हो/ हुन् ?",
            "options": {
              "A": "१ र २ मात्र",
              "B": "१, २ र ३ मात्र",
              "C": "१,२ र ४ मात्र",
              "D": "माथिका सबै"
            },
            "answer": ""
          },
          {
            "question_number": 6,
            "question": "BIMSTEC का सहयोगका क्षेत्रहरुको सम्बन्धमा गलत जोडा रोज्नुहोस ?",
            "statements": {},
            "options": {
              "A": "व्यापार लगानी र विकासको संयोजन देश भारत हो",
              "B": "विज्ञान प्रविधि तथा नवप्रर्वतनको संयोजन गर्ने देश श्रीलका हो",
              "C": "कृषि तथा खाद्य सुरक्षाको संयोजन गर्ने देश म्यानमार हो",
              "D": "वातावरण र जलवायु परिर्वतनको संयोजन गर्ने देश भुटान हो"
            },
            "answer": ""
          },
          {
            "question_number": 7,
            "question": "समूह । र II जोडा मिलाइ सही उत्तर छनोट गर्नुहोस् ।",
            "statements": {
              "Group I": {
                "a": "UNO का विशिष्टिकृत संस्था मध्ये सबैभन्दा पुरानो संस्था",
                "b": "UNO को पहिलो विशिष्टिकृत संस्था",
                "c": "रोम प्रधान कार्यलय रहेको संस्था",
                "d": "न्यूयोर्क प्रधान कार्यालय रहेको संस्था"
              },
              "Group II": {
                "1": "WFP",
                "2": "ITU",
                "3": "ILO",
                "4": "UNDP"
              }
            },
            "options": {
              "A": "a-1,b-2,c-4,d-3",
              "B": "a-3,b-2,c-1,d-4",
              "C": "a-4,b-3,c-2,d-1",
              "D": "a-2,b-3,c-1,d-4"
            },
            "answer": ""
          },
          {
            "question_number": 8,
            "question": "निम्न कथनमा कुन ठिक हो ?",
            "statements": {
              "1": "संयुक्त राष्ट्रसंघको पहिलो महासभाको नेतृत्वकर्ता चुडाप्रसाद शर्मा हुन् ।",
              "2": "महासभाको बैठकमा नेपालको तर्फबाट पहिलोपटक सम्बोधन गर्ने सरकार प्रमुख विश्वेश्वरप्रसाद कोइराला हुन् ।",
              "3": "आसियनको सदस्यता त्याग गर्ने राष्ट्र इरान हो।",
              "4": "यूरोपेली यूनियनको Inner Six मा पर्ने मुलुक क्रोएसिया हो।"
            },
            "options": {
              "A": "13 मात्र",
              "B": "2₹3 मात्र",
              "C": "1र 2 मात्र",
              "D": "1, 2, 3 र 4 सबै"
            },
            "answer": ""
          },
          {
            "question_number": 9,
            "question": "नेपालसँग दौत्य सम्बन्ध कायम भएको देशको संख्याहरुको जोडा कुन सही छन् ?",
            "statements": {
              "1": "१८२ औं टोगो सन् २०२४ मार्च १",
              "2": "१८१ औं मार्सल आइसल्याण्ड सन् २०२३ जुन २३",
              "3": "१८० औं क्यामरुन सन् २०२३ जुन २२",
              "4": "१७९ औं नाउरु सन् २०२३ मे ४"
            },
            "options": {
              "A": "1₹3 मात्र",
              "B": "2र 3 मात्र",
              "C": "1 र 2 मात्र",
              "D": "1,2,3 र 4 सबै"
            },
            "answer": ""
          },
          {
            "question_number": 10,
            "question": "जोडा मिलाउनुहोस् । (संस्था र प्रधान कार्यालय)",
            "statements": {
              "Institutions": {
                "a": "OPCW",
                "b": "ICAN",
                "c": "OPEC",
                "d": "APEC"
              },
              "Headquarters": {
                "1": "जेनेभा",
                "2": "भियाना",
                "3": "हेग",
                "4": "सिंगापुर"
              }
            },
            "options": {
              "A": "a-2,b-1,c-3,d-4",
              "B": "a-2,b-1.c-4,d-3",
              "C": "a-4, b-2, c-3, d-1",
              "D": "a-3,b-2,c-1,d-4"
            },
            "answer": ""
          },
         
          {
            "question_number": 11,
            "question": "देहायका देशहरूमाथि अध्ययन गर्नुहोस् ।",
            "statements": {
              "1": "अमेरिका",
              "2": "जापान",
              "3": "न्यूजील्याण्ड",
              "4": "अष्ट्रेलिया",
              "5": "क्यानडा",
              "6":"माथिका राष्ट्रहरूमध्ये आसियानको ५ वार्ता साझेदार राष्ट्रहरू अन्र्तगत पर्ने कुन कुन हुन् ?"
            },
            "options": {
              "A": "माथिका सबै",
              "B": "१ मात्र",
              "C": "३२४ मात्र",
              "D": "१,२१५"
            },
            "answer": ""
          },
          {
            "question_number": 12,
            "question": "BIMSTEC को बडापत्रमा कहिले देखि लागू भएको हो ?",
            "statements": {},
            "options": {
              "A": "सन् २०२४ मे २०",
              "B": "सन् २०२४ मार्च ३०",
              "C": "सन् २०२३ नोभेम्बर ३०",
              "D": "सन् २०२४ जनवरी ३०"
            },
            "answer": ""
          },
          {
            "question_number": 13,
            "question": "निम्न कथनहरूबारे विचार गर्नुहोस् ।",
            "statements": {
              "1": "BIMSTEC को उदेश्य ११ वटा रहेका छन् ।",
              "2": "BIMSTEC को सिद्धान्त २ वटा रहेका छन् ।",
              "3": "BIMSTEC को झण्डाको पृष्ठभुमिमा सेतो रङ रहेको छ।",
              "4": "BIMSTEC को वडापत्रमा ३६ धारा छन् ।",
              "5": "उपयुक्त कथनहरू मध्ये सही कथन कुन हो/कुन-कुन हुन्?" 
            },
            "options": {
              "A": "१, ४ मात्र सही",
              "B": "१, २ र ३ मात्र सही",
              "C": "२, ३ मात्र सही",
              "D": "सबै सही"
            },
            "answer": ""
          },
        
          {
            "question_number": 14,
            "question": "सार्कको इतिहासमा ३ वर्ष कार्यकाल खाने पहिलो महासचिव को हुन् ?",
            "statements": {},
            "options": {
              "A": "शिलकान्त शर्मा",
              "B": "छेन्कयाप दोर्जी",
              "C": "जिहाल रोद्विगो",
              "D": "नइम यु हसन"
            },
            "answer": ""
          },
          {
            "question_number": 15,
            "question": "संयुक्त राष्ट्रसंघको बारेमा कुन भनाई गलत छ?",
            "statements": {},
            "options": {
              "A": "पहिलो अधिवेशन अमेरिकाको न्यूर्योकमा बसेको हो",
              "B": "हाल सम्म नेपफ भ्रमण गर्ने महासचिवको संख्या ७ रहेको छ",
              "C": "नेपाल भम्रण गर्ने पहिलो महासचिव ड्याग ह्यामर शोल्ड हुन्",
              "D": "UN Peace keeping Agenda एन्टिनियो गुटरेसको हो"
            },
            "answer": ""
          },
          {
            "question_number": 16,
            "question": "सार्कका बारेमा कुन भनाई गलत रहेको छ ?",
            "statements": {},
            "options": {
              "A": "Land of golden fiber भनेर बंगलादेशलाई चिनिन्छ",
              "B": "नारा राख्न थालिएको पहिलो सम्मेलन १६ औ हो",
              "C": "पहिलो नारा Building bridge रहेको थियो",
              "D": "पहिलो सम्मेलनमा १४ बुद्धे घोषणापत्र जारी भएको हो"
            },
            "answer": ""
          },
          {
            "question_number": 17,
            "question": "UNO का अंग र धाराविच जोडा मिलाउनुहोस् ।",
            "statements": {
              "समुह I (अंग)": {
                "a": "महासभा",
                "b": "सुरक्षा परिषद्",
                "c": "आर्थिक तथा सामाजिक परिषद्",
                "d": "सचिवालय"
              },
              "समुह II (धारा)": {
                "1": "धारा - ९",
                "2": "धारा ९७",
                "3": "धारा २३",
                "4": "धारा - ६१"
              }
            },
            "options": {
              "A": "a-2, b-1, c-4, d-3",
              "B": "a-3, b-4, c-2, d-1",
              "C": "a-1, 6-3, c-4, d-2",
              "D": "a-2, b-4, c-3, d-1"
            },
            "answer": ""
          },
          {
            "question_number": 18,
            "question": "संयुक्त राष्ट्र संघको महासभाका कामहरु के के हुन् ?",
            "statements": {
              "1": "UNO को बजेट पारित गर्ने,",
              "2": "अन्तर्राष्ट्रिय मामिलामा विचार गर्ने,",
              "3": "सुरक्षा परिषद्‌का १० अस्थायी सदस्य र आर्थिक तथा सामाजिक परिषद्‌का ५४ सदस्यको नियुक्ति गर्ने,",
              "4": "अन्तर्राष्ट्रिय न्यायालयमा १५ न्यायाधीशको नियुक्ति गर्ने, महासचिवको नियुक्ति गर्ने ।"
            },
            "options": {
              "A": "१२२ मात्र सही",
              "B": "२२३ मात्र सही",
              "C": "१,३ र ४ मात्र सही",
              "D": "१,२,३ र ४ सबै सही"
            },
            "answer": ""
          },
          {
            "question_number": 19,
            "question": "तलका मध्ये चीनको सहयोगको क्षेत्र कुन होइन् ?",
            "statements": {},
            "options": {
              "A": "हेटौडा कपडा कारखाना",
              "B": "लुम्बिनी चिनी कारखाना",
              "C": "नयाँ बसपार्क",
              "D": "भृकुटी कागज कारखाना"
            },
            "answer": ""
          },
          {
            "question_number": 20,
            "question": "नेपाल भारत दौत्य सम्बन्ध कायम हुँदा नेपाल पक्षबाट हस्ताक्षर गर्ने मोहनशम्शेर थिए भने भारतको पक्षबाट हस्ताक्षर गर्ने व्यक्ति को थिए ?",
            "statements": {},
            "options": {
              "A": "गजराज मिश्र",
              "B": "चन्द्रेश्वरप्रसाद नारायण सिन्हा",
              "C": "लेफ्टिनेन्ट ब्राड शा",
              "D": "कुनै पनि होइनन् ।"
            },
            "answer": ""
          },
          {
            "question_number": 21,
            "question": "दौत्य सम्बन्ध कायम भएको आधारमा अगाडी देखी पछाडीको सही क्रम छनौट गर्नुहोस् ।",
            "statements": {},
            "options": {
              "A": "चीन, बेलायत, भारत, अमेरिका, फ्रान्स",
              "B": "भारत, बेलायत, अमेरिका, चीन, फ्रान्स",
              "C": "बेलायत, अमेरिका, भारत, चीन, फ्रान्स",
              "D": "बेलायत, अमेरिका, भारत, फ्रान्स, चीन"
            },
            "answer": ""
          },
          {
            "question_number": 22,
            "question": "आसियानका संस्थापक देशमा नपर्ने तलका मध्ये कुन हो ?",
            "statements": {},
            "options": {
              "A": "थाइल्याण्ड",
              "B": "कम्बोडिया",
              "C": "इन्डोनेसिया",
              "D": "मलेसिया"
            },
            "answer": ""
          },
          {
            "question_number": 23,
            "question": "तलका मध्ये EU का Inner Six अन्र्तगत पर्ने राष्ट्र कुन होइन ?",
            "statements": {},
            "options": {
              "A": "बेल्जियम",
              "B": "नेदरल्याण्ड",
              "C": "इटाली",
              "D": "पोर्चुगल"
            },
            "answer": ""
          },
          {
            "question_number": 24,
            "question": "जापानको सहयोगको क्षेत्र कुन हो ?",
            "statements": {},
            "options": {
              "A": "नारायणगढ-मुग्लिन सडक",
              "B": "राष्ट्रिय सभा गृह",
              "C": "रिङरोड",
              "D": "वि.पी. राजमार्ग"
            },
            "answer": ""
          },
          {
            "question_number": 25,
            "question": "संयुक्त राष्ट्रसंघ र अन्य अन्तराष्ट्रिय संगठनहरूका लागि नेपालको स्थायी नियोग कहाँ रहेको छ ?",
            "statements": {},
            "options": {
              "A": "न्यूयोक (अमेरिका)",
              "B": "जेनेभा (स्वीजरल्यान्ड)",
              "C": "टोकियो (जापान)",
              "D": "ब्राजिल"
            },
            "answer": ""
          },
          {
            "question_number": 26,
            "question": "संयुक्त राष्ट्रसंघको आहृवानमा कुन वर्षलाई अन्तर्राष्ट्रिय नारी वर्षको रूपमा मनाइएको थियो ?",
            "statements": {},
            "options": {
              "A": "सन् १९७५",
              "B": "सन् १९९५",
              "C": "सन् १९७९",
              "D": "सन् १९९१"
            },
            "answer": ""
          },
          {
            "question_number": 27,
            "question": "नेपालको दौत्य सम्बन्ध कायम भएको देश र मिति मा कुन जोडा सही छ छनोट गर्नुहोस् ।",
            "statements": {
              "1": {
                "country": "भारत",
                "date": "१३ जुन १९४७"
              },
              "2": {
                "country": "भुटान",
                "date": "३ जुन १९८३"
              },
              "3": {
                "country": "माल्दिभ्स",
                "date": "१ अगस्ट १९८०"
              },
              "4": {
                "country": "श्रीलंका",
                "date": "१ जुलाई १९५७"
              }
            },
            "options": {
              "A": "१२४ मात्र सही",
              "B": "१२२ मात्र सही",
              "C": "१, २ र ३ मात्र सही",
              "D": "सबै सही"
            },
            "answer": ""
          },
          {
            "question_number": 28,
            "question": "असंलग्न आन्दोलनको १९ औं सम्मेलन कहिले र कुन देशमा भएको थियो ?",
            "statements": {},
            "options": {
              "A": "सन् २०२४, युगाण्डा",
              "B": "सन् २०२४, अजरबैजान",
              "C": "सन् २०२४, इन्डोनेसिया",
              "D": "सन् २०२४, क्यामरुन"
            },
            "answer": ""
          },
          {
            "question_number": 29,
            "question": "संयुक्त राष्ट्रसंघीय आर्थिक तथा सामाजिक परिषद् (ECOSOC) मा कति जना सदस्य रहने व्यवस्था छ ?",
            "statements": {},
            "options": {
              "A": "५२ जना",
              "B": "५३ जना",
              "C": "५४ जना",
              "D": "५५ जना"
            },
            "answer": ""
          },
          {
            "question_number": 30,
            "question": "सार्क प्रकोप व्यवस्थापन केन्द्र कहाँ रहेको छ ?",
            "statements": {},
            "options": {
              "A": "भारत",
              "B": "नेपाल",
              "C": "श्रीलंका",
              "D": "पाकिस्तान"
            },
            "answer": ""
          },
          {
            "question_number": 31,
            "question": "संयुक्त राष्ट्रसंघको बालबालिकाको अधिकारसम्बन्धी महासन्धि, १९८९ अनुसार बालबालिकाका लागि सीमित उमेर कुन हो ?",
            "statements": {},
            "options": {
              "A": "१२ वर्ष",
              "B": "१४ वर्ष",
              "C": "१६ वर्ष",
              "D": "१८ वर्ष"
            },
            "answer": ""
          },
          {
            "question_number": 32,
            "question": "त्रिभुवन अन्तर्राष्ट्रिय विमानस्थलमा राडार परियोजना कुन देशको सहयोगमा सञ्चालित छ ?",
            "statements": {},
            "options": {
              "A": "जापान",
              "B": "चीन",
              "C": "बेलायत",
              "D": "अमेरिका"
            },
            "answer": ""
          },
          {
            "question_number": 33,
            "question": "पाँचौ विमस्टेक शिखर सम्मेलन कोलम्बोले कति बुँदे घोषणापत्र जारी गरेको थियो ?",
            "statements": {},
            "options": {
              "A": "१८",
              "B": "१७",
              "C": "२१",
              "D": "१५"
            },
            "answer": ""
          },
          {
            "question_number": 34,
            "question": "Land of Golden Fiber भनेर कुन देशलाई चिनिन्छ ?",
            "statements": {},
            "options": {
              "A": "पाकिस्तान",
              "B": "बंगलादेश",
              "C": "चीन",
              "D": "भारत"
            },
            "answer": ""
          },
          {
            "question_number": 35,
            "question": "संयुक्त राष्ट्रसंघीय दिगो विकास आयोग कुन वर्ष स्थापना भएको हो ?",
            "statements": {},
            "options": {
              "A": "१९९० अक्टोबर",
              "B": "१९९२ डिसेम्बर",
              "C": "१९९३ जनवरी",
              "D": "१९९४ मार्च"
            },
            "answer": ""
          },
          {
            "question_number": 36,
            "question": "सार्क वडापत्रका धारा र विषय वीच जोडा मिलाउनुहोस ।",
            "statements": {
              "समुह 1": {
                "a": "मन्त्रिपरिषद",
                "b": "वित्तिय व्यवस्था",
                "c": "कार्य समिति",
                "d": "सार्कका सिद्धान्त"
              },
              "समुह II": {
                "1": "धारा - २",
                "2": "धारा - ४",
                "3": "धारा ७",
                "4": "धारा - ९"
              }
            },
            "options": {
              "A": "a2, b1, C4, d3",
              "B": "a3, b4, C2, di",
              "C": "a1, b3, C4, d2",
              "D": "a2, b4, c3, di"
            },
            "answer": ""
          },
          {
            "question_number": 37,
            "question": "ASEAN का १५ औं महासचिव कुन देशका हुन् ?",
            "statements": {},
            "options": {
              "A": "इन्डोनेसिया",
              "B": "कम्बोडिया",
              "C": "थाइल्याण्ड",
              "D": "फिलिपिन्स"
            },
            "answer": ""
          },
          {
            "question_number": 38,
            "question": "नेपालको आधुनिक परराष्ट्र नीतिका निर्माता कसलाई मानिन्छ ?",
            "statements": {},
            "options": {
              "A": "राजा महेन्द्र",
              "B": "पृथ्वीनारायण शाह",
              "C": "टंकप्रसाद आचार्य",
              "D": "चुडाप्रसाद शर्मा"
            },
            "answer": ""
          },
          {
            "question_number": 39,
            "question": "क्षेत्रफलका हिसाबले सानोबाट ठूलो सार्क राष्ट्र क्रम कुन हो ?",
            "statements": {},
            "options": {
              "A": "माल्दिभ्स, भुटान, नेपाल, श्रीलंका, पाकिस्तान, बंगलादेश, अफगानिस्तान, भारत",
              "B": "भुटान, माल्दिभ्स, नेपाल, श्रीलंका, बंगलादेश, अफगानिस्तान, पाकिस्तान, भारत",
              "C": "माल्दिभ्स, भुटान, श्रीलंका, बंगलादेश, नेपाल, अफगानिस्तान, पाकिस्तान, भारत",
              "D": "माल्दिभ्स, भुटान, श्रीलंका, नेपाल, बंगलादेश, अफगानिस्तान, पाकिस्तान, भारत"
            },
            "answer": ""
          },
          {
            "question_number": 40,
            "question": "हाल सार्कका पर्यवेक्षक राष्ट्रहरुमा तलका मध्ये कुन पर्दैन् ?",
            "statements": {},
            "options": {
              "A": "चीन",
              "B": "रुस",
              "C": "अमेरिका",
              "D": "इरान"
            },
            "answer": ""
          },

          {
            "question_number": 41,
            "question": "संयुक्त राष्ट्र संघको विशिष्टिकृत संस्था अन्तर्गत कुन पर्दैन ?",
            "statements": {},
            "options": {
              "A": "ILO",
              "B": "WHO",
              "C": "UNDP",
              "D": "WTO"
            },
            "answer": ""
          },
          {
            "question_number": 42,
            "question": "नेपालको संविधान २०७२ अनुसार राष्ट्रिय मानव अधिकार आयोगमा कति जना सदस्य रहने व्यवस्था छ ?",
            "statements": {},
            "options": {
              "A": "५",
              "B": "६",
              "C": "७",
              "D": "८"
            },
            "answer": ""
          },
          {
            "question_number": 43,
            "question": "निम्न मध्ये कुन चाहिँ संयुक्त राष्ट्र संघको सुरक्षा परिषद्को अस्थायी सदस्य होइन ?",
            "statements": {},
            "options": {
              "A": "भारत",
              "B": "पाकिस्तान",
              "C": "जापान",
              "D": "जर्मनी"
            },
            "answer": ""
          },
          {
            "question_number": 44,
            "question": "अन्तर्राष्ट्रिय न्यायालय कहाँ रहेको छ ?",
            "statements": {},
            "options": {
              "A": "जेनेभा",
              "B": "पेरिस",
              "C": "हेग",
              "D": "न्यूयोर्क"
            },
            "answer": ""
          },
          {
            "question_number": 45,
            "question": "संयुक्त राष्ट्र संघको कुन अंगले अन्तर्राष्ट्रिय शान्ति र सुरक्षा कायम राख्ने मुख्य जिम्मेवारी बहन गर्दछ ?",
            "statements": {},
            "options": {
              "A": "महासभा",
              "B": "सुरक्षा परिषद्",
              "C": "आर्थिक तथा सामाजिक परिषद्",
              "D": "सचिवालय"
            },
            "answer": ""
          },
          {
            "question_number": 46,
            "question": "संयुक्त राष्ट्र संघको पहिलो महासचिव को थिए ?",
            "statements": {},
            "options": {
              "A": "ट्रिगवे लाइ",
              "B": "ड्याग ह्यामरसोल्ड",
              "C": "यु थाण्ट",
              "D": "कर्ट वाल्डहेम"
            },
            "answer": ""
          },
          {
            "question_number": 47,
            "question": "संयुक्त राष्ट्र संघको महासभाको अध्यक्ष हुने पहिलो महिला को हुन् ?",
            "statements": {},
            "options": {
              "A": "विजयलक्ष्मी पण्डित",
              "B": "गोल्डा मेयर",
              "C": "इन्दिरा गान्धी",
              "D": "मार्गरेट थ्याचर"
            },
            "answer": ""
          },
          {
            "question_number": 48,
            "question": "संयुक्त राष्ट्र संघको कार्यालयमा कति ओटा आधिकारिक भाषाहरु प्रयोग गरिन्छ ?",
            "statements": {},
            "options": {
              "A": "४",
              "B": "५",
              "C": "६",
              "D": "७"
            },
            "answer": ""
          },
          {
            "question_number": 49,
            "question": "निम्न मध्ये कुन चाहिँ संयुक्त राष्ट्र संघको विशिष्टिकृत संस्था हो ?",
            "statements": {},
            "options": {
              "A": "विश्व बैंक समूह (World Bank Group)",
              "B": "अन्तर्राष्ट्रिय मुद्रा कोष (International Monetary Fund)",
              "C": "विश्व व्यापार संगठन (World Trade Organization)",
              "D": "माथिका सबै"
            },
            "answer": ""
          },
          {
            "question_number": 50,
            "question": "संयुक्त राष्ट्र संघको झण्डामा कुन रङ प्रयोग गरिएको छ ?",
            "statements": {},
            "options": {
              "A": "सेतो र निलो",
              "B": "हरियो र सेतो",
              "C": "रातो र सेतो",
              "D": "कालो र सेतो"
            },
            "answer": ""
          },
          {
            "question_number": 51,
            "question": "संयुक्त राष्ट्र संघको स्थापना कहिले भएको थियो ?",
            "statements": {},
            "options": {
              "A": "अक्टोबर २४, १९४५",
              "B": "नोभेम्बर १, १९४५",
              "C": "डिसेम्बर १०, १९४८",
              "D": "जुन २६, १९४५"
            },
            "answer": ""
          },
          {
            "question_number": 52,
            "question": "संयुक्त राष्ट्र संघको वडापत्रमा कति धाराहरु रहेका छन् ?",
            "statements": {},
            "options": {
              "A": "९९",
              "B": "१०१",
              "C": "१११",
              "D": "११२"
            },
            "answer": ""
          },
          {
            "question_number": 53,
            "question": "संयुक्त राष्ट्र संघको सुरक्षा परिषद्मा कति जना स्थायी सदस्यहरु रहेका छन् ?",
            "statements": {},
            "options": {
              "A": "४",
              "B": "५",
              "C": "६",
              "D": "७"
            },
            "answer": ""
          },
          {
            "question_number": 54,
            "question": "संयुक्त राष्ट्र संघको सुरक्षा परिषद्मा कति जना अस्थायी सदस्यहरु रहेका छन् ?",
            "statements": {},
            "options": {
              "A": "५",
              "B": "१०",
              "C": "१५",
              "D": "२०"
            },
            "answer": ""
          },
          {
            "question_number": 55,
            "question": "संयुक्त राष्ट्र संघको आर्थिक तथा सामाजिक परिषद्मा कति सदस्य राष्ट्रहरु रहेका छन् ?",
            "statements": {},
            "options": {
              "A": "५०",
              "B": "५२",
              "C": "५४",
              "D": "५६"
            },
            "answer": ""
          },

    
    
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
    $scope.bookmarkedOrgQuestions = JSON.parse(localStorage.getItem('bookmarkedOrgQuestions')) || [];

    $scope.isBookmarked = function(question) {
      return $scope.bookmarkedOrgQuestions.some(q => q.question_number === question.question_number);
    };

    $scope.bookmarkQuestion  = function(question) {
      if (!$scope.isBookmarked(question)) {
        $scope.bookmarkedOrgQuestions.push(question);
        localStorage.setItem('bookmarkedOrgQuestions', JSON.stringify($scope.bookmarkedOrgQuestions));
        alert("Question bookmarked!");
      } else {
        alert("This question is already bookmarked!");
      }
    };

    $scope.removeBookmark = function(question) {
      $scope.bookmarkedOrgQuestions = $scope.bookmarkedOrgQuestions.filter(q => q.number !== question.number);
      localStorage.setItem('bookmarkedOrgQuestions', JSON.stringify($scope.bookmarkedOrgQuestions));
    };

    $scope.submitExam = function () {
      let totalCorrect = 0;
      alert("Answer submitted");
    
      // Initialize result object
      $scope.result = {
        totalQuestions: $scope.questions.length,
        totalCorrect: 0,
        answers: []
      };
    
      // Evaluate each question
      $scope.questions.forEach(function (question, index) {
        const userAnswerKey = (question.userAnswer || "").toLowerCase();
        const correctAnswerKey = question.answer || "";  // Preserve original case for correct answer
    
        const userAnswerText = question.options[userAnswerKey] || "No Answer";
        const correctAnswerText = question.options[correctAnswerKey] || "No Correct Answer";
    
        const isCorrect = userAnswerKey === correctAnswerKey.toLowerCase();
    
        // Add specific debug log for question 30 and 32
        // if (question.number === 30 || question.number === 32) {
        //   console.log("Debugging question " + question.number + ":");
        //   console.log("Question:", question.question);
        //   console.log("Options:", JSON.stringify(question.options));
        //   console.log("User Answer Key:", userAnswerKey);
        //   console.log("Correct Answer Key:", correctAnswerKey);
        //   console.log("User Answer Text:", userAnswerText);
        //   console.log("Correct Answer Text:", correctAnswerText);
        //   console.log("Is Correct:", isCorrect);
        // }
    
        // Push detailed result for each question
        $scope.result.answers.push({
          number: question.number,
          question: question.question,
          userAnswer: userAnswerText,
          correctAnswer: correctAnswerText,
          isCorrect: isCorrect
        });
    
        if (isCorrect) {
          totalCorrect++;
        }
      });
    
      // Update total correct count
      $scope.result.totalCorrect = totalCorrect;
    };
    


    // Reset exam functionality
    $scope.resetExam = function() {
      $scope.questions.forEach(question => question.userAnswer = null);
      $scope.result = null;
    };

      // Show answer function
  $scope.showAnswer = function(question) {
    question.showAnswer = true;
  };

    // Toggle answer function
    $scope.toggleAnswer = function(question) {
      question.showAnswer = !question.showAnswer;
    };
  });
