angular.module('mcqApp', [])
  .controller('mcqController', function($scope) {
    // Replace the random question data with your provided JSON data
    $scope.questions = [
      {
        number: 1,
        date: "2081-10-01",
        question: "पर्यावरण विज्ञान (Ecology) का प्रथम प्रयोगकर्ता को हुन्?",
        options: {
          A: "कालि एरली",
          B: "ए जी ट्रान्स्ली",
          C: "बार्बरा वाईड",
          D: "अर्नस्ट ह्याकेले"
        },
        correct_answer: "D",
        description: {
          A: "दिगो विकास",
          B: "बार्बरा वाईड",
          C: "पारिस्थितिक पद्धति",
          D: "अर्नस्ट ह्याकेले"
        }
      },
      {
        number: 2,
        date: "2081-10-01",
        question: "सातौं कृषि गणना, २०७८ अनुसार सबैभन्दा धेरै गहुँ खेती हुने नेपाली जिल्ला कुन हो?",
        options: {
          A: "रुपन्देही",
          B: "भापा",
          C: "मोरङ",
          D: "चितवन"
        },
        correct_answer: "A",
        description: {
          A: "धान खेती सबै भन्दा बढी गरिने प्रदेश मधेश र जिल्ला मोरङ रहेको छ। गहुँ खेती सबै भन्दा बढी गरिने प्रदेश मधेश र जिल्ला रुपन्देही रहेको छ। मकै खेती सबै भन्दा बढी गरिने प्रदेश गण्डकी र जिल्ला भापा रहेको छ। तरकारी खेती सबैभन्दा बढी गरिने प्रदेश बागमती र जिल्ला चितवन रहेको छ।"
        }
      },
      {
        number: 3,
        date: "2081-10-01",
        question: "बैदाम तालको उपनामले कुन ताललाई चिनिन्छ?",
        options: {
          A: "मैदी ताल",
          B: "फेवा ताल",
          C: "घोडाघोडी ताल",
          D: "फिल्लिमिला ताल"
        },
        correct_answer: "B",
        description: {
          A: "मैदी ताल",
          B: "डुङ्गा हान्ने ताल",
          C: "बेदम ताल",
          D: "फेवा ताल"
        }
      },
      {
        number: 4,
        date: "2081-10-01",
        question: "सबैभन्दा धेरै पिछडिएको स्थानीय तहमा सुचिकृत स्थानीय तहहरू कुन जिल्लामा अवस्थित रहेका छन् ?",
        options: {
          A: "बझाङ",
          B: "बैतडी",
          C: "अछाम",
          D: "डोटी"
        },
        correct_answer: "C",
        description: ""
      },
      {
        number: 5,
        date: "2081-10-01",
        question: "भौगोलिक आधारमा पहाडी प्रदेशमा उपमहानगरपालिक कति रहेका छन् ?",
        options: {
          A: "८ वटा",
          B: "२ वटा",
          C: "३ वटा",
          D: "१ वटा"
        },
        correct_answer: "B",
        description: ""
      },
      {
        number: 6,
        date: "2081-10-01",
        question: "मधेसको लिम्बु उपनामले कुन जातिलाई चिनिन्छ ?",
        options: {
          A: "चेपाङ",
          B: "किसान",
          C: "हिमाल",
          D: "शेर्पा"
        },
        correct_answer: "D",
        description: ""
      },
      {
        number: 7,
        date: "2081-10-01",
        question: "विश्वका सबैभन्दा ठूलो धर्म इसाई धर्मको धर्मावलम्बी नेपालमा कति रहेका छन् ?",
        options: {
          A: "०.४५ प्रतिशत",
          B: "०.५ प्रतिशत",
          C: "१.७५ प्रतिशत",
          D: "२.५ प्रतिशत"
        },
        correct_answer: "A",
        description: ""
      },
      {
        number: 8,
        date: "2081-10-01",
        question: "नेपालको कतिवटा प्रदेशले भारत र चीन दुबै मुलुकलाई छुन्छन् ?",
        options: {
          A: "३ वटा",
          B: "४ वटा",
          C: "५ वटा",
          D: "६ वटा"
        },
        correct_answer: "B",
        description: ""
      },
      {
        number: 9,
        date: "2081-10-01",
        question: "भारत छोडो आन्दोलन कहिले सुरु भएको थियो ?",
        options: {
          A: "सन् १९३९",
          B: "सन् १९२०",
          C: "सन् १९४७",
          D: "सन् १९४२"
        },
        correct_answer: "D",
        description: ""
      },
      {
        number: 10,
        date: "2081-10-01",
        question: "नेपालको संविधानको पालना गर्नु प्रत्येक ....... को कर्तव्य हो।",
        options: {
          A: "व्यक्ति",
          B: "नागरिक",
          C: "जनता",
          D: "सर्वसाधारण"
        },
        correct_answer: "A",
        description: ""
      },
      {
        number: 11,
        date: "2081-10-01",
        question: "नेपाल संयुक्त राष्ट्र संघको सदस्य हुँदा तत्कालीन UNO महासचिव को थिए?",
        options: {
          A: "ट्र्युमन ली",
          B: "इयान ह्यामर्सोल्ड",
          C: "कोफी अन्नान",
          D: "बान कि मुन"
        },
        correct_answer: "B",
        description: ""
      },
      {
        number: 12,
        date: "2081-10-01",
        question: "नेपालमा सार्क सचिवालय राख्न प्रस्ताव गर्ने मुख्य कुन हो?",
        options: {
          A: "पाकिस्तान",
          B: "भारत",
          C: "बंगलादेश",
          D: "श्रीलंका"
        },
        correct_answer: "A",
        description: ""
      },
      {
        number: 13,
        date: "2081-10-01",
        question: "विश्व पानी दिवस कुन तारिखमा मनाइन्छ?",
        options: {
          A: "मार्च २२",
          B: "मे २२",
          C: "डिसेम्बर ५",
          D: "जुन ५"
        },
        correct_answer: "A",
        description: ""
      },
      {
        number: 14,
        date: "2081-10-01",
        question: "रोग देखिने डरलाई वैज्ञानिक भाषामा के भनिन्छ?",
        options: {
          A: "Philophobia",
          B: "Pyrophobia",
          C: "Pathophobia",
          D: "Ombrophobia"
        },
        correct_answer: "C",
        description: ""
      },
      {
        number: 15,
        date: "2081-10-01",
        question: "सोहौँ योजनाको अन्त्य सम्म नेपालको मानव विकास सूचकाङ्क कति पुर्याउने लक्ष्य रहेको छ?",
        options: {
          A: "सूचकाङ्क ०.६५०",
          B: "सूचकाङ्क ०.६६०",
          C: "सूचकाङ्क ०.७५०",
          D: "सूचकाङ्क ०.७६०"
        },
        correct_answer: "A",
        description: ""
      }
    ];

    // Shuffle function to randomize the order of options
    function shuffleOptions(question) {
      const options = Object.entries(question.options);
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      question.options = Object.fromEntries(options);
    }

    // Shuffle the options for each question
    $scope.questions.forEach(question => {
      shuffleOptions(question);
    });

    // Bookmark feature
    $scope.bookmarkedQuestions = JSON.parse(localStorage.getItem('bookmarkedQuestions')) || [];

    $scope.isBookmarked = function(question) {
      return $scope.bookmarkedQuestions.some(q => q.number === question.number);
    };

    $scope.bookmarkQuestion = function(question) {
        // Retrieve existing bookmarked questions from localStorage (or initialize an empty array if none exist)
        let bookmarkedQuestions = JSON.parse(localStorage.getItem('bookmarkedQuestions')) || [];
      
        // Check if the question is already bookmarked by comparing the question number
        const isBookmarked = bookmarkedQuestions.some(function(q) {
          return q.number === question.number;
        });
      
        if (!isBookmarked) {
          // Add the question to the bookmarked questions list
          bookmarkedQuestions.push(question);
      
          // Save the updated list back to localStorage
          localStorage.setItem('bookmarkedQuestions', JSON.stringify(bookmarkedQuestions));
      
          // Optionally, show a message or update the UI to indicate success
          alert("Question bookmarked!");
        } else {
          // Optionally, show a message or disable the bookmark button if the question is already bookmarked
          alert("This question is already bookmarked!");
        }
      };
      

    $scope.removeBookmark = function(question) {
      $scope.bookmarkedQuestions = $scope.bookmarkedQuestions.filter(q => q.number !== question.number);
      localStorage.setItem('bookmarkedQuestions', JSON.stringify($scope.bookmarkedQuestions));
    };

    // Exam submission
    $scope.submitExam = function() {
      $scope.result = {
        totalCorrect: 0,
        totalQuestions: $scope.questions.length,
        answers: []
      };

      $scope.questions.forEach(question => {
        const isCorrect = question.userAnswer === question.correct_answer;
        $scope.result.answers.push({
          question: question,
          userAnswer: question.options[question.userAnswer],
          correctAnswer: question.options[question.correct_answer],
          isCorrect: isCorrect
        });

        if (isCorrect) {
          $scope.result.totalCorrect++;
        }
      });
    };

    // Reset exam
    $scope.resetExam = function() {
      $scope.questions.forEach(q => q.userAnswer = null);
      $scope.result = null;
    };
  });
