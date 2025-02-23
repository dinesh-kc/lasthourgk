
angular.module('mcqApp', [])

  .controller('mcqController', function($scope) {
    // Replace the random question data with your provided JSON data
    $scope.questions = [

    
      {
        "number": 2,
        "question": "चौरासे र साटाखानी औद्योगिक क्षेत्र कुन जिल्लामा निर्माण हुने औद्योगिक क्षेत्र हुन्?",
        "options": {
          "a": "रुपन्देही",
          "b": "कञ्चनपुर",
          "c": "सुर्खेत",
          "d": "दार्चुला"
        },
        "answer": "c"
      },
      {
        "number": 3,
        "question": "आर्थिक सर्वेक्षण २०८०/०८१ अनुसार कुल गार्हस्थ उत्पादनमा कृषि क्षेत्रको योगदान कति रहने अनुमान छ?",
        "options": {
          "a": "२३.९५ प्रतिशत",
          "b": "२३.८ प्रतिशत",
          "c": "२४.०९ प्रतिशत",
          "d": "२५.८ प्रतिशत"
        },
        "answer": "c"
      },
      {
        "number": 4,
        "question": "पोइन्ट फर प्रोग्राम केसँग सम्बन्धित छ?",
        "options": {
          "a": "वैदेशिक लगानी",
          "b": "वैदेशिक ऋण",
          "c": "वैदेशिक सहायता",
          "d": "वैदेशिक अनुदान"
        },
        "answer": "c"
      },
      {
        "number": 5,
        "question": "आर्थिक सर्वेक्षण २०८०/०८१ अनुसार नेपालको प्रतिव्यक्ति राष्ट्रिय आय कति पुग्ने अनुमान छ?",
        "options": {
          "a": "१२७२ डलर",
          "b": "१३२७ डलर",
          "c": "१३९९ डलर",
          "d": "१४५६ डलर"
        },
        "answer": "d"
      },
      {
        "number": 6,
        "question": "WTO को १३ औं शिखर सम्मेलन २०२४ कहाँ सम्पन्न भयो?",
        "options": {
          "a": "नैरावी",
          "b": "इण्डोनेसिया",
          "c": "संयुक्त अरब इमिरेट्स",
          "d": "काजकस्तान"
        },
        "answer": "c"
      },
      {
        "number": 7,
        "question": "राष्ट्रिय कृषि नीति २०६१ ले कृषि कार्यक्रमहरूको संचालनमा महिला संलग्नता कति प्रतिशत पुऱ्याउने लक्ष्य लिइएको छ?",
        "options": {
          "a": "६५ प्रतिशत",
          "b": "४५ प्रतिशत",
          "c": "३० प्रतिशत",
          "d": "५० प्रतिशत"
        },
        "answer": "d"
      },
      {
        "number": 8,
        "question": "वि.सं. २०८० को उद्योग दिवसको नारा के रहेको छ?",
        "options": {
          "a": "स्वदेशी उत्पादन अभियान, उद्यमीको सम्मान",
          "b": "औद्योगिक लगानी र पूर्वाधार, समृद्धिको बलियो आधार",
          "c": "उद्योग र पूर्वाधार, आर्थिक वृद्धिको प्रमुख आधार",
          "d": "सवल उद्योग र रोजगार, समृद्धि र सुखको आधार"
        },
        "answer": "a"
      },
      {
        "number": 9,
        "question": "कुन मुद्रालाई Paper Gold भनिन्छ?",
        "options": {
          "a": "अमेरिका",
          "b": "स्टर्लिंड पाउण्ड",
          "c": "एस.डी.आर.",
          "d": "कर्कट पाता"
        },
        "answer": "c"
      },
      {
        "number": 10,
        "question": "तलका कथनहरू बारे विचार गरी कोडका आधारमा उपयुक्त विकल्प छान्नुहोस्।",
        "statements": {
          "1": "निजिक्षेत्रको लगानीमा बनेको हालसम्मको ठुलो जलविद्युत आयोजना सोलुखोला हो।",
          "2": "इन्दावती निजी क्षेत्रको लगानीमा निर्मित जलविद्युत आयोजना हो।"
        },
        "options": {
          "a": "1 मात्र ठीक",
          "b": "2 मात्र ठीक",
          "c": "दुवै ठीक",
          "d": "दुवै वेठीक"
        },
        "answer": "c"
      },
      {
        "number": 11,
        "question": "नवलपरासी बाहेक नेपालमा उखु खेती हुने प्रमुख चार जिल्ला कुन कुन हुन्?",
        "options": {
          "a": "महोत्तरी, सर्लाही, रौतहट र कपिलवस्तु",
          "b": "सर्लाही, रौतहट, रुपन्देही र कैलाली",
          "c": "सप्तरी, सर्लाही, चितवन र रुपन्देही",
          "d": "महोत्तरी, सप्तरी, रौतहट र कपिलवस्तु"
        },
        "answer": "a"
      },
      {
        "number": 12,
        "question": "लोलुफेरा अभियान के सँग सम्बन्धित छ?",
        "options": {
          "a": "पर्यटन व्यवसाय",
          "b": "पर्वतमाला",
          "c": "पदमार्ग",
          "d": "हिमरेखा"
        },
        "answer": "c"
      },
      {
        "number": 13,
        "question": "पूर्वी हिमालयन जैविक मार्गले निम्न मध्ये कुन कुन देशलाई जोड्छ?",
        "options": {
          "a": "नेपाल, भारत, भुटान, म्यानमार",
          "b": "अफगानिस्तान, पाकिस्तान, भारत, नेपाल, भुटान",
          "c": "अफगानिस्तान, पाकिस्तान, भारत, नेपाल, म्यानमार",
          "d": "नेपाल, भारत, चीन, भुटान, म्यानमार"
        },
        "answer": "d"
      },
      {
        "number": 14,
        "question": "तलका मध्ये दक्षिण एसियाकै पहिलो स्काई वाक टावर को निर्माण कुन देशमा गरिने भएको छ?",
        "options": {
          "a": "पाकिस्तान",
          "b": "बंगलादेश",
          "c": "भारत",
          "d": "नेपाल"
        },
        "answer": "d"
      },
      {
        "number": 15,
        "question": "साम्यवाद मोटर चढेर आउँदैन यो भनाई राजा महेन्द्रले कुन राजमार्ग शिलान्यास गर्दा भनेका थिए?",
        "options": {
          "a": "पृथ्वी राजमार्ग",
          "b": "अरनिको राजमार्ग",
          "c": "भूपि शेरचन राजमार्ग",
          "d": "त्रिभुवन राजपथ"
        },
        "answer": "b"
      },
      {
        "number": 16,
        "question": "IMF को अध्यक्ष युरोपेली मुलुकबाट हुनुपर्ने प्रावधान छ। WB को अध्यक्ष जहिले पनि अमेरिकन राष्ट्रबाट हुने व्यवस्था छ। विचार गर्नुहोस्।",
        "options": {
          "a": "1 मात्र ठीक",
          "b": "सबै ठीक",
          "c": "2 मात्र ठीक",
          "d": "सवै बेठिक"
        },
        "answer": "b"
      },
      {
        "number": 17,
        "question": "नेपालको आर्थिक विकासको पूर्वाधारको मुख्य आधार कुन क्षेत्र हो?",
        "options": {
          "a": "कृषि",
          "b": "पर्यटन",
          "c": "उद्योग",
          "d": "ऊर्जा"
        },
        "answer": "d"
      },
      {
        "number": 18,
        "question": "नेपालको सबैभन्दा ठुलो हाइड्रोपावर आयोजना कुन हो?",
        "options": {
          "a": "कालीगण्डकी ए",
          "b": "मध्यभोटेकोसी",
          "c": "त्रिशुली",
          "d": "बुढीगण्डकी"
        },
        "answer": "d"
      },
      {
        "number": 19,
        "question": "बजेटमा उच्च प्राथमिकता केलाई दिइन्छ?",
        "options": {
          "a": "आधारभूत स्वास्थ्य सेवा",
          "b": "पर्यटनको प्रवर्द्धन",
          "c": "सञ्चार क्षेत्र",
          "d": "कृषि उत्पादन"
        },
        "answer": "a"
      },
      {
        "number": 20,
        "question": "भारतसँग सीमा जोडिएका प्रदेशहरू कुन हुन्?",
        "options": {
          "a": "१, २, ३, ५",
          "b": "२, ३, ५, ७",
          "c": "२, ५, ६, ७",
          "d": "२, ३, ४, ५"
        },
        "answer": "c"
      },
      {
        "number": 21,
        "question": "नेपालको आर्थिक अवस्थाको मुख्य चुनौती के हो?",
        "options": {
          "a": "पर्याप्त स्रोत साधनको अभाव",
          "b": "कर्मचारी प्रशासनमा लगानीको कमी",
          "c": "रोजगारीको अवसर",
          "d": "दिगो विकास योजना"
        },
        "answer": "a"
      },
      {
        "number": 22,
        "question": "UNESCO को सूचीमा परेको नेपालको सम्पदा कुन हो?",
        "options": {
          "a": "सगरमाथा",
          "b": "पोखरा",
          "c": "मुक्तिनाथ",
          "d": "लुम्बिनी"
        },
        "answer": "d"
      },
      {
        "number": 23,
        "question": "नेपालको कृषिमा सबैभन्दा धेरै योगदान दिने बाली कुन हो?",
        "options": {
          "a": "धान",
          "b": "मकै",
          "c": "गहुँ",
          "d": "तरकारी"
        },
        "answer": "a"
      },
      {
        "number": 24,
        "question": "सबैभन्दा लामो राजमार्ग कुन हो?",
        "options": {
          "a": "पृथ्वी",
          "b": "अरनिको",
          "c": "महिन्द्र",
          "d": "त्रिभुवन"
        },
        "answer": "c"
      },
      {
        "number": 25,
        "question": "नेपालको प्रमुख निर्यात वस्तु के हो?",
        "options": {
          "a": "तेल",
          "b": "पर्यटन",
          "c": "कपास",
          "d": "सिस्नु"
        },
        "answer": "b"
      },
      {
        "number": 26,
        "question": "कुन क्षेत्रले बढी रोजगार सिर्जना गरेको छ?",
        "options": {
          "a": "कृषि",
          "b": "उद्योग",
          "c": "सेवा",
          "d": "पर्यटन"
        },
        "answer": "a"
      },
      {
        "number": 27,
        "question": "नेपालको ग्रामीण विकासको लागि कुन क्षेत्रलाई प्राथमिकता दिइन्छ?",
        "options": {
          "a": "उद्योग",
          "b": "ऊर्जा",
          "c": "पर्यटन",
          "d": "कृषि"
        },
        "answer": "d"
      },
      {
        "number": 28,
        "question": "लघु उद्यम विकास कार्यक्रम कुन मन्त्रालयले सञ्चालन गर्छ?",
        "options": {
          "a": "कृषि मन्त्रालय",
          "b": "उद्योग मन्त्रालय",
          "c": "पर्यटन मन्त्रालय",
          "d": "अर्थ मन्त्रालय"
        },
        "answer": "b"
      },
      {
        "number": 29,
        "question": "कुन क्षेत्रले सबैभन्दा बढी GDP योगदान गरेको छ?",
        "options": {
          "a": "उद्योग",
          "b": "कृषि",
          "c": "सेवा",
          "d": "पर्यटन"
        },
        "answer": "c"
      },
      {
        "number": 30,
        "question": "नेपालको कुल व्यापार घाटा कति छ?",
        "options": {
          "a": "२५%",
          "b": "३०%",
          "c": "३५%",
          "d": "५०%"
        },
        "answer": "d"
      },
      {
        "number": 32,
        "question": "विप्रेषणको सम्बन्धमा विचार गर्नुहोस्।\n१) आ.ब २०७९/८० मा रेमिट्यान्स GDP को अनुपातमा २२.८२ प्रतिशत रहेको छ।\n२) आ.ब २०७९/८० मा नेपालमा ९ खर्व ६१ अर्व रेमिट्यान्स प्राप्त भयो।\n३) सन् २०२३ मा सबैभन्दा बढी रेमिट्यान्स भित्र्याउने देश भारत हो।",
        "options": {
          "A": "१२३ मात्र ठीक",
          "B": "सबै ठिक",
          "C": "२ मात्र ठिक",
          "D": "सबै बेठिक"
        },
        "answer": "B"
      },
      {
        "number": 34,
        "question": "नेपालमा पहिलो पटक प्रयोगमा आउने लागेको तीनमुखे झोलुङ्गे पुलले कुन कुन जिल्लालाई जोडेको छ?",
        "options": {
          "A": "पाल्पा, स्याङ्जा र गुल्मी",
          "B": "पर्वत, स्याङ्जा र पाल्पा",
          "C": "मनाङ, मुस्ताङ र म्याग्दी",
          "D": "पर्वत, वाग्लुङ र गुल्मी"
        },
        "answer": "A"
      },
      {
        "number": 35,
        "question": "तलका कथन अध्ययन गरी सही विकल्प छनौट गर्नुहोस्।\ni) Eco friendly Hydro भन्नाले 1 MW सम्मको विद्युतलाई बुझिन्छ।\nii) इटाइफु जलविद्युत आयोजना चीनमा पर्दछ।\niii) मध्य मर्स्याङ्दी जलविद्युत आयोजना लमजुङमा पर्दछ।",
        "options": {
          "A": "सबै सही",
          "B": "i र iii मात्र सही",
          "C": "i मात्र सही",
          "D": "iii मात्र सहि"
        },
        "answer": "B"
      },
      {
        "number": 36,
        "question": "स्वास्थ्य क्षेत्रमा प्रयोग गरिने ICU को पूर्ण रुप के हो?",
        "options": {
          "A": "Intensive Care Units",
          "B": "Internal Care Unit",
          "C": "Immediate Care Unit",
          "D": "Intensive Cardiac Unit"
        },
        "answer": "A"
      },
      {
        "number": 38,
        "question": "स्थापना मितिका आधारमा नेपालका निम्न औद्योगिक क्षेत्रको क्रम मिलाउनुहोस्।\n१) भक्तपुर औद्योगिक क्षेत्र\n२) नेपालगञ्ज औद्योगिक क्षेत्र\n३) धरान औद्योगिक क्षेत्र\n४) हेटौडा औद्योगिक क्षेत्र",
        "options": {
          "A": "४-२-३-१",
          "B": "४-३-१-२",
          "C": "४-३-२-१",
          "D": "३-४-२-१"
        },
        "answer": "C"
      },
      {
        "number": 39,
        "question": "जलविद्युतको उत्पादन क्षमता (बढीबाट कम) को आधारमा नेपालका निम्न जलविद्युत आयोजनको क्रम मिलाउनुहोस्।\n१) चमेलिया\n२) राघुघाट\n३) माथिल्लो त्रिशुली\n४) मध्य भोटेकोशी",
        "options": {
          "A": "4-2-3-1",
          "B": "४-३-१-२",
          "C": "४-३-२-१",
          "D": "३-४-२-१"
        },
        "answer": "C"
      },
      {
        "number": 40,
        "question": "आफ्‌नो राष्ट्रिय प्रशारण रेडियो प्रसारणको फ्रिक्वेन्सी मोडुलेसन (FM) लाई अन्त्य गर्दै पूर्णत: डिजिटलाइज गर्ने राष्ट्र कुन हो?",
        "options": {
          "A": "नर्वे",
          "B": "क्यानडा",
          "C": "न्युजिल्याण्ड",
          "D": "डेनमार्क"
        },
        "answer": "A"
      },
      {
        "number": 41,
        "question": "देहायका मध्ये कुन कुन भनाइ सही र कुन कुन भनाइ गलत छन्?\n1) नेपालमा ग्रामिण विप्रेषण परियोजना कार्यक्रम (समृद्धि) हाल १६ जिल्लामा रहेको छ।\n2) नेपालमा लघुउद्यम विकास कार्यक्रम IFAD को सहयोगमा सुरु भएको हो।",
        "options": {
          "A": "दुवै ठीक",
          "B": "1 मात्र ठीक",
          "C": "2 मात्र ठीक",
          "D": "दुवै गलत"
        },
        "answer": "A"
      },
      {
        "number": 43,
        "question": "पेरिस सम्मेलनले जारी गरेको घोषणा कुन होइन?\nA) Ownership\nB) Transparency\nC) Harmonization\nD) Alignment\nStatement: The Paris Agreement, also known as COP21, is a landmark international treaty adopted by 196 countries at the United Nations Climate Change Conference held in Paris, France, on December 12, 2015. It entered into force on November 4, 2016.",
        "options": {
          "A": "Ownership",
          "B": "Transparency",
          "C": "Harmonization",
          "D": "Alignment"
        },
        "answer": "B"
      },
      {
        "number": 44,
        "question": "WTO का वर्तमान महानिर्देशक एन्गोजी इबेला कुन राष्ट्रका हुन्?",
        "options": {
          "A": "बहराइन",
          "B": "दक्षिण अफ्रिका",
          "C": "नाइजेरिया",
          "D": "ब्राजिल"
        },
        "answer": "C"
      },
      {
        "number": 45,
        "question": "तलका कथनहरू सहि / गलत के छन्? छुट्टाउनुहोस्।\n१) No Work No Pay औद्योगिक व्यवसाय ऐनसँग सम्बन्धित छ।\n२) More Work More Pay व्यापारसँग सम्बन्धित छ।\n३) ४० प्रतिशत वस्तु तथा सेवा वाहिर पठाउनेलाई निर्यात उद्योग भनिन्छ।\n४) औद्योगिक व्यवसाय ऐन २०४९ ले उद्योगलाई ७ प्रकारमा वर्गिकरण गरेको थियो।",
        "options": {
          "A": "१, २ सहि र ३ र ४ गलत",
          "B": "१, २ गलत र ३ र ४ सहि",
          "C": "१, २ र ४ सहि र ३ मात्र गलत",
          "D": "१, ३ र ४ सहि र २ मात्र गलत"
        },
        "answer": "D"
      },
      {
        "number": 48,
        "question": "नेपालमा प्रति विद्यार्थी एक कम्प्युटर कार्यक्रम (OLPC) सर्वप्रथम परिक्षणको रुपमा कुन-कुन जिल्लामा लागु भएको थियो?",
        "options": {
          "A": "काठमाडौं र ललितपुर",
          "B": "ललितपुर र काभ्रेपलाञ्जोक",
          "C": "काठमाडौं, भक्तपुर र रसुवा",
          "D": "मकवानपुर, मुस्ताङ र म्याग्दी"
        },
        "answer": "D"
      },
      {
        "number": 49,
        "question": "नेपाल राष्ट्र बैंकले कहिलेदेखि मौद्रिक नीति जारी गर्दै आएको छ?",
        "options": {
          "A": "आ.व. २०५७/०५८",
          "B": "आ.व. २०५८/०५९",
          "C": "आ.व. २०५९/०६०",
          "D": "आ.व. २०६०/०६१"
        },
        "answer": "C"
      },
      {
        "number": 50,
        "question": "आर्थिक बर्ष २०७९/८० सञ्चालित मध्येमा कतिवटा सार्वजनिक संस्थानहरू नाफा र घाटामा रहेका छन्?",
        "options": {
          "A": "२२ र १८ वटा",
          "B": "१९ र २२ वटा",
          "C": "२६ र १५ वटा",
          "D": "२४ र १८ वटा"
        },
        "answer": "C"
      },
        {
          "number": 51,
          "question": "नेपालमा सबैभन्दा बढी उत्पादकत्व हुने बालीलाई क्रम मिलाएर राख्दा तलका मध्य कुन सही हुन्छ?",
          "options": {
              "A": "धान, गहुँ, मकै, जौ, कोदो, फापर",
              "B": "धान, मकै, गहुँ, जौ, कोदो, फापर",
              "C": "धान, मकै, गहुँ, कोदो, जौ, फापर",
              "D": "धान, कोदो, मकै, गहुँ, जौ, फापर"
          },
          "answer": "C"
      },
      {
          "number": 52,
          "question": "हाल नेपालमा कति वटा जिल्लामा राष्ट्रिय विद्युत प्रशारण लाइन जडान भएका छन?",
          "options": {
              "A": "२६",
              "B": "४२",
              "C": "३३",
              "D": "७६"
          },
          "answer": "D"
      },
      {
          "number": 53,
          "question": "बहु चर्चित नागढु‌ङ्गा नौबिसे सुरुङमार्गको लम्बाइ कति रहेको छ कसको सहयोगमा निर्माण हुदै छ?",
          "options": {
              "A": "३.६८८ कि.मि, युएस आइ डि अमेरिका",
              "B": "१.६८८ कि.मि, जाइका जापान",
              "C": "२.६८८ कि.मि. जाइका जापान",
              "D": "२.५ कि.मि, डिएफआइ डि, बेलायत"
          },
          "answer": "C"
      },
      {
          "number": 54,
          "question": "नेपालमा रेल्वे सेवा सञ्चालन कहिले देखि भएको हो?",
          "options": {
              "A": "वि.सं. १९८४",
              "B": "वि.सं. १९८३",
              "C": "वि.सं. १९९३",
              "D": "वि.सं. १९९४"
          },
          "answer": "C"
      },
      {
          "number": 55,
          "question": "सर्वप्रथम साक्षर घोषणा गरिएको प्रदेश कुन हो?",
          "options": {
              "A": "गण्डकी",
              "B": "लुम्बिनी",
              "C": "सुदूरपश्चिम",
              "D": "बागमती"
          },
          "answer": "D"
      },
      {
          "number": 56,
          "question": "आर्थिक वर्ष २०८१/०८२ को बजेटका सम्बन्धमा विचार गर्नुहोस्।\n1) बजेटका उद्देश्य र प्राथमिकता ५/५ वटा रहेका छन्।\n2) बजेटमा आर्थिक सुधारका ५ रणनीतिहरु रहेका छन्।",
          "options": {
              "A": "1 मात्र ठिक",
              "B": "2 मात्र ठिक",
              "C": "दुबै ठिक",
              "D": "दुबै बेठिक"
          },
          "answer": "C"
      },
      {
          "number": 58,
          "question": "MRP को पूरा रुप के हो?",
          "options": {
              "A": "Machine Read Password",
              "B": "Machinary Readable Passport",
              "C": "Munutely Readable Passport",
              "D": "Machine Readable Passport"
          },
          "answer": "D"
      },
      {
          "number": 59,
          "question": "नेपालले द्विपक्षीय श्रम सम्झौता गरेको मुलुक कति वटा छन् र अन्तिम कुन हो?",
          "options": {
              "A": "६, इजरायल",
              "B": "८, जापान",
              "C": "११, मौरिसस",
              "D": "१२, जर्मनी"
          },
          "answer": "D"
      },
      {
          "number": 60,
          "question": "वाणिज्य परिषद्‌को अध्यक्ष को हुन्छ?",
          "options": {
              "A": "प्रधानमन्त्री",
              "B": "वाणिज्य मन्त्री वा राज्यमन्त्री",
              "C": "वाणिज्य मन्त्रलायका सचिव",
              "D": "वाणिज्य विभाग महानिर्देशक"
          },
          "answer": "B"
      },
     
        {
            "question_number": 61,
            "question": "हाल नेपालको कुल गार्हस्थ उत्पादनमा गैरकृषि क्षेत्रको योगदान कति रहेको अनुमान छ?",
            "options": {
                "A": "५६.८ प्रतिशत",
                "B": "७६.०५ प्रतिशत",
                "C": "७३.८ प्रतिशत",
                "D": "७५.४ प्रतिशत"
            },
            "answer": "D"
        },
        {
            "question_number": 62,
            "question": "तलका भनाईबारे विचार गर्नुहोस्।",
          "statements": {
              "1": "नेपालमा ७ औ कृषि गणनाको नतिजा २०८० भदौ २१ मा आएको हो।",
              "2": "सो गणना अनुसार 79 प्रतिशत किसानको मुख्य स्रोत कृषि पेशा रहेको छ।"
            },
    
            "options": {
                "A": "१ मात्र ठीक",
                "B": "२ मात्र ठीक",
                "C": "दुवै बेठीक",
                "D": "दुवै ठीक"
            },
            "answer": "D"
        },
    
        {
            "question_number": 63,
            "question": "नेपालमा सबैभन्दा ठुलो सौर्य विद्युत आयोजना कहाँ रहेको छ?",
            "options": {
                "A": "काठमाडौं",
                "B": "भरतपुर",
                "C": "नुवाकोट",
                "D": "पोखरा"
            },
            "answer": "C"
        },
        {
            "question_number": 64,
            "question": "नेपालमा कुन आर्थिक वर्षदेखि आन्तरिक वा राष्ट्र ऋण उठाउन थालिएको हो?",
            "options": {
                "A": "२०१७/०१८",
                "B": "२०१२/०१३",
                "C": "२०१३/०१४",
                "D": "२०१४/०१५"
            },
            "answer": "A"
        },
        {
            "question_number": 66,
            "question": "भारतसँग विप्पा सम्झौता २०६८ कार्तिक ४ मा कुन प्रधानमन्त्रीको पालामा भएको हो?",
            "options": {
                "A": "के पी ओली",
                "B": "पुष्पकमल दाहाल",
                "C": "बाबुराम भट्टराई",
                "D": "पुष्पकमल दाहाल"
            },
            "answer": "C"
        },
        {
            "question_number": 67,
            "question": "रेसम राजमार्गको लम्बाई कति रहेको छ?",
            "options": {
                "A": "६५०० कि.मि.",
                "B": "६७०० कि.मि.",
                "C": "६३०० कि.मि.",
                "D": "कुनैपनि होइन"
            },
            "answer": "A"
        },
        {
            "question_number": 68,
            "question": "द गार्जियन नेपालका प्रथम सम्पादक को हुन्?",
            "options": {
                "A": "वरूण शमशेर",
                "B": "हिमालय शमशेर",
                "C": "डायमण्ड शमशेर",
                "D": "नृप शमशेर"
            },
            "answer": "A"
        },
        {
            "question_number": 69,
            "question": "तपाईंको सुरक्षा हाम्रो अठोट कुन कार्यक्रमको नारा हो?",
            "options": {
                "A": "स्वास्थ्य बिमा",
                "B": "सामाजिक सुरक्षा",
                "C": "जीवन बिमा",
                "D": "यातायात सुरक्षा"
            },
            "answer": "A"
        },
        {
            "question_number": 700,
            "question": "फापर सबैभन्दा बढी र कम उत्पादन हुने प्रदेश कुन कुन हुन्?",
            "options": {
                "A": "मधेश र कोशी प्रदेश",
                "B": "मधेश र बाग्मति प्रदेश",
                "C": "सुदुर पश्चिम र गण्डकी",
                "D": "कोशी र मधेश प्रदेश"
            },
            "answer": "D"
        },
    
        {
            "question_number": 70,
            "question": "आर्थिक सर्वेक्षण २०८०/०८१ अनुसार साना, मझौला र ठूला उद्योगको संख्या कति रहेको छ?",
            "options": {
                "A": "५८३२, २१०९, १४०३",
                "B": "५३१२,१८८४, १२९८",
                "C": "५२०२,१८५४, ११९८",
                "D": "५३५२,१९८४, १२९८"
            },
            "answer": "A"
        },
        {
            "question_number": 71,
            "question": "सबैभन्दा बढी कोदो फल्ने प्रदेश कुन हो?",
            "options": {
                "A": "गण्डकी",
                "B": "बागमती",
                "C": "कर्णाली",
                "D": "सुदुरपश्चिम"
            },
            "answer": "A"
        },
        {
            "question_number": 72,
            "question": "नेपालमा चिया दिवस कहिले देखि मनाउन थालिएको हो?",
            "options": {
                "A": "वि.सं. २०५३ वैशाख १५",
                "B": "वि.सं. २०५४ वैशाख १५",
                "C": "वि.सं. २०५५ वैशाख १५",
                "D": "वि.सं. २०५६ वैशाख १५"
            },
            "answer": "B"
        },
        {
            "question_number": 74,
            "question": "प्रथम आर्थिक गणना, २०७५ अनुसार औद्योगिक प्रतिष्ठान बढी भएका जिल्लाहरू क्रमश कुन कुन हुन्?",
            "options": {
                "A": "काठमाडौं, झापा, रुपन्देही, मोरङ, सुनसरी",
                "B": "काठमाडौं, झापा, रुपन्देही, मोरङ, सर्लाही",
                "C": "झापा, रुपन्देही, मोरङ, सुनसरी, सर्लाही",
                "D": "झापा, रुपन्देही, मोरङ, सुनसरी, इलाम"
            },
            "answer": "A"
        },
        {
            "question_number": 75,
            "question": "औद्योगिक व्यवसाय ऐन, २०७६ अनुसार अविकसित, कम विकसित र अति अविकसित जिल्लाहरू क्रमश कति कति छ?",
            "options": {
                "A": "२३, १८, २०",
                "B": "२२, १७, २१",
                "C": "१८, २१,२३",
                "D": "२४, १९, २१"
            },
            "answer": "C"
        },
        {
            "question_number": 76,
            "question": "उद्योग विभागले कति रकम सम्मको लगानी स्वीकृत गर्ने व्यवस्था रहेको छ?",
            "options": {
                "A": "४ अर्बसम्म",
                "B": "५ अर्बसम्म",
                "C": "६ अर्बसम्म",
                "D": "७ अर्बसम्म"
            },
            "answer": "C"
        },
        {
            "question_number": 77,
            "question": "निजीकरण भएका संस्थानका सम्बन्धमा तलका भनाइहरू विचार गर्नुहोस्।\n1. खारेजीमा परेका जम्मा संस्थानको संख्या १२ वटा रहेका छन्।\n2. शेयर विक्रीमा परेका संस्थानको संख्या ११ वटा रहेका छन्।\nमाथिका मध्ये कुन सही छ, छन्?",
            "options": {
                "A": "1 ठिक 2 बेठिक",
                "B": "1 बेठिक 2 ठिक",
                "C": "दुवै ठिक",
                "D": "दुवै बेठिक"
            },
            "answer": "C"
        },
        {
            "question_number": 78,
            "question": "नेपालमा निजीकरणमा परेका संस्थानको संख्या कति रहेका छन्?",
            "options": {
                "A": "२८",
                "B": "२९",
                "C": "३०",
                "D": "३१"
            },
            "answer": "C"
        },
        {
            "question_number": 79,
            "question": "सन् २०२३ मा नेपाल आउने पर्यटकको बारेमा विचार गर्नुहोस्।\n१. औषत बसाई अवधि १३.१ दिन रहेको\n२. प्रतिव्यक्ति खर्च ४१ डलर रहेको\n३. विदा, मनोरञ्जन र यात्राको उदेश्यले ६४.२ प्रतिशत आएका\nमाथिका तथ्यहरूबारे कुन ठिक छ?",
            "options": {
                "A": "1 मात्र बेठिक अरु सबै ठिक",
                "B": "II मात्र बेठिक अरु सबै ठिक",
                "C": "III मात्र बेठिक अरु सबै ठिक",
                "D": "सबै बेठिक"
            },
            "answer": "D"
        },
        {
            "question_number": 80,
            "question": "नेपाल टेलिभिजनको लोगोमा कति वटा परेवा रहेका छन्?",
            "options": {
                "A": "3",
                "B": "4",
                "C": "5",
                "D": "6"
            },
            "answer": "C"
        },
        {
            "question_number": 81,
            "question": "शिक्षा विभागको स्थापना कहिले भएको थियो?",
            "options": {
                "A": "वि.सं. २०५५ जेठ ९",
                "B": "वि.सं. २०५६ जेठ ९",
                "C": "वि.सं. २०५७ जेठ ९",
                "D": "वि.सं. २०५८ जेठ ९"
            },
            "answer": "B"
        },
    
        {
            "question_number": 82,
            "question": "अरुका कुरालाई छोड आफ्ना छोरालाई अंग्रेजी पढाउ भन्ने राणा प्रधानमन्त्री को हुन्?",
            "options": {
                "A": "जंग बहादुर राणा",
                "B": "चन्द्र शमशेर",
                "C": "भिम शमशेर",
                "D": "पद्म शमशेर"
            },
            "answer": "A"
        },
        {
            "question_number": 83,
            "question": "वि.सं. २१००/०१ सम्म उच्च शिक्षामा भर्नादर कति पुऱ्याउने लक्ष्य रहेको छ?",
            "options": {
                "A": "४० प्रतिशत",
                "B": "५० प्रतिशत",
                "C": "६० प्रतिशत",
                "D": "७० प्रतिशत"
            },
            "answer": "A"
        },
        {
            "question_number": 84,
            "question": "१६ औं योजनाको अन्त्यसम्म नेपालको आर्थिक बृद्धिदर कति पुग्ने लक्ष्य रहेको छ?",
            "options": {
                "A": "८.० प्रतिशत",
                "B": "८.५ प्रतिशत",
                "C": "७.३ प्रतिशत",
                "D": "९.५ प्रतिशत"
            },
            "answer": "C"
        },
        {
            "question_number": 85,
            "question": "नेपालमा विफर रोग उन्मूलन कहिले भएको थियो?",
            "options": {
                "A": "वि.सं. २०३३ वैशाख १",
                "B": "वि.सं. २०३४ वैशाख १",
                "C": "वि.सं. २०३५ वैशाख १",
                "D": "वि.सं. २०३६ वैशाख १"
            },
            "answer": "B"
        },
        {
            "question_number": 86,
            "question": "DOTS (Directly Observed Treatment System) कार्यक्रम सुरुमा लागु भएको जिल्ला कुन होइन?",
            "options": {
                "A": "पर्सा",
                "B": "कैलाली",
                "C": "भक्तपुर",
                "D": "कास्की"
            },
            "answer": "D"
        },
        {
            "question_number": 87,
            "question": "निशुल्क औषधी वितरण कार्यक्रम अन्तर्गत प्राथमिक स्वास्थ्य केन्द्रबाट कति प्रकारका औषधी वितरण हुने व्यवस्था छ?",
            "options": {
                "A": "५७ प्रकारका",
                "B": "९८ प्रकारका",
                "C": "५९ प्रकारका",
                "D": "६० प्रकारका"
            },
            "answer": "B"
        },
        {
            "question_number": 90,
            "question": "राष्ट्रिय गौरवका आयोजनाको बारेमा विचार गर्नुहोस्।\nI. पुष्पलाल लोकमार्गलाई मध्यपहाडी राजमार्ग पनि भनिन्छ।\nII. पुष्पलाल लोकमार्गको लम्बाई १८७९ कि.मि. रहेको छ।\nIII. पुष्पलाल लोकमार्गमा बन्ने नयाँ शहर १० वटा रहेका छन्।\nIV. पुष्पलाल लोकमार्गले काठमाडौंलाई छुन्छ।",
            "options": {
                "A": "1 मात्र बेठिक अरु सबै ठिक",
                "B": "II मात्र बेठिक अरु सबै ठिक",
                "C": "III मात्र बेठिक अरु सबै ठिक",
                "D": "IV मात्र बेठिक अरु सबै ठिक"
            },
            "answer": "D"
        },
        {
            "question_number": 91,
            "question": "Crypto Currency को अवधारणा ल्याउने व्यक्ति को र कुन देशका हुन्?",
            "options": {
                "A": "Satoshi Nakamoto (२००८, जापान)",
                "B": "Takasi Mihara (२००९, जापान)",
                "C": "Satoshi Nakamoto (२००९, जापान)",
                "D": "Takasi Mihara (२००९, बेलायत)"
            },
            "answer": "C"
        },
        {
            "question_number": 92,
            "question": "निम्नमध्ये कुन विश्व बैंकको Ease of Doing Business Index का सूचक/उपसूचकांकहरू हुन्?\n1) Getting electricity\n2) Paying taxes\n3) Registering property\n4) Maintenance of law and order",
            "options": {
                "A": "1, 2, 3 and 4",
                "B": "1, 2 and 3 only",
                "C": "2, 3 and 4 only",
                "D": "2 and 3 only"
            },
            "answer": "A"
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
    $scope.bookmarkedAarthikQuestions = JSON.parse(localStorage.getItem('bookmarkedAarthikQuestions')) || [];

    $scope.isBookmarked = function(question) {
      return $scope.bookmarkedAarthikQuestions.some(q => q.number === question.number);
    };

    $scope.bookmarkQuestion  = function(question) {
      if (!$scope.isBookmarked(question)) {
        $scope.bookmarkedAarthikQuestions.push(question);
        localStorage.setItem('bookmarkedAarthikQuestions', JSON.stringify($scope.bookmarkedAarthikQuestions));
        alert("Question bookmarked!");
      } else {
        alert("This question is already bookmarked!");
      }
    };

    $scope.removeBookmark = function(question) {
      $scope.bookmarkedAarthikQuestions = $scope.bookmarkedAarthikQuestions.filter(q => q.number !== question.number);
      localStorage.setItem('bookmarkedAarthikQuestions', JSON.stringify($scope.bookmarkedAarthikQuestions));
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
        if (question.number === 30 || question.number === 32) {
          console.log("Debugging question " + question.number + ":");
          console.log("Question:", question.question);
          console.log("Options:", JSON.stringify(question.options));
          console.log("User Answer Key:", userAnswerKey);
          console.log("Correct Answer Key:", correctAnswerKey);
          console.log("User Answer Text:", userAnswerText);
          console.log("Correct Answer Text:", correctAnswerText);
          console.log("Is Correct:", isCorrect);
        }
    
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
