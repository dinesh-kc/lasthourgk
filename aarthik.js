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
        "answer": "C"
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
        "answer": "C"
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
        "answer": "C"
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
        "answer": "D"
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
        "answer": "C"
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
        "answer": "D"
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
        "answer": "A"
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
        "answer": "C"
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
        "answer": "C"
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
        "answer": "A"
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
        "answer": "C"
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
        "answer": "D"
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
        "answer": "D"
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
        "answer": "B"
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
        "answer": "B"
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
        "answer": "D"
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
        "answer": "D"
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
        "answer": "A"
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
        "answer": "C"
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
        "answer": "A"
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
        "answer": "D"
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
        "answer": "A"
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
        "answer": "C"
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
        "answer": "B"
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
        "answer": "A"
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
        "answer": "D"
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
        "answer": "B"
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
        "answer": "C"
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
    $scope.bookmarkedQuestions = JSON.parse(localStorage.getItem('bookmarkedQuestions')) || [];

    $scope.isBookmarked = function(question) {
      return $scope.bookmarkedQuestions.some(q => q.number === question.number);
    };

    $scope.bookmarkQuestion = function(question) {
      if (!$scope.isBookmarked(question)) {
        $scope.bookmarkedQuestions.push(question);
        localStorage.setItem('bookmarkedQuestions', JSON.stringify($scope.bookmarkedQuestions));
        alert("Question bookmarked!");
      } else {
        alert("This question is already bookmarked!");
      }
    };

    $scope.removeBookmark = function(question) {
      $scope.bookmarkedQuestions = $scope.bookmarkedQuestions.filter(q => q.number !== question.number);
      localStorage.setItem('bookmarkedQuestions', JSON.stringify($scope.bookmarkedQuestions));
    };

    // Exam submission functionality
    $scope.submitExam = function () {
      let totalCorrect = 0;
      alert("Answer submitted");
    
      // Initialize result object
      $scope.result = {
        totalQuestions: $scope.questions.length,
        totalCorrect: 0,
        answers: [] // Ensure `answers` is initialized as an empty array
      };
    
      // Evaluate each question
      $scope.questions.forEach(function (question,index) {
     
        const isCorrect = (question.userAnswer || "").toLowerCase() === (question.answer|| "").toLowerCase(); // Compare user's answer with the correct one
        
        // console.log(isCorrect);
        // const userAnswerText = question.options[question.userAnswer] || "No Answer";
        // const correctAnswerText = question.options[question.answer];
  

  const userAnswerKey = (question.userAnswer || "").toLowerCase();
  const correctAnswerKey = (question.answer || "").toLowerCase();

  const userAnswerText = question.options[userAnswerKey] || "No Answer";
  const correctAnswerText = question.options[correctAnswerKey] || "No Correct Answer";

  // console.log("Question:", question.question);
  // console.log("Options:", question.options);
  // console.log("User Answer Key:", userAnswerKey);
  // console.log("Correct Answer Key:", correctAnswerKey);
  // console.log("User Answer Text:", userAnswerText);
  // console.log("Correct Answer Text:", correctAnswerText);
        
        // Push detailed result for each question
        $scope.result.answers.push({
          number: question.number,
          question: question.question, // Store the question text
          userAnswer: userAnswerText, // Actual answer selected by the user
          correctAnswer: correctAnswerText, // Actual correct answer
          isCorrect: isCorrect // True if the user's answer is correct
        });
    // console.log($scope.result.answers)
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
  });
