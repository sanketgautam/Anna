/* Ambedkar Mitra — landing page interactions
   Preview only: chat answers are scripted and sourced; the live voice/video
   companion ships with the app. Waitlist uses a pre-addressed email, as on
   the current ambedkarmitra.com holding page. */

const SITE_URL = "https://ambedkarmitra.com/";
const CONTACT = "hello@ambedkarmitra.com";

/* ---------------- i18n (hero + talk chrome) ---------------- */
const I18N = {
  en: {
    "nav.talk": "Talk", "nav.stories": "Stories", "nav.journey": "His journey",
    "nav.library": "Books & sources", "nav.community": "For schools & museums", "nav.join": "Join the waitlist",
    "hero.eyebrow": "Coming soon · Voice & video AI companion",
    "hero.title": 'Talk to <span class="accent-word">Babasaheb.</span><br />Learn for life.',
    "hero.lede": "Conversations with the ideas of Dr B. R. Ambedkar — a patient, plain-spoken companion who maps his life, his books and his hard-won wisdom to your day: your studies, your work, your rights, your dignity.",
    "hero.p1": "Ask by voice — no typing, no long reading required",
    "hero.p2": "Every answer traced to his writings & trusted sources",
    "hero.p3": "In the language you speak at home — Hindi, English, Marathi",
    "hero.cta": "Join the waitlist",
    "hero.note": "Be first to hear the opening conversations. No spam — one email at launch.",
    "hero.share": "Share this with a student, a teacher, a friend:",
    "hero.shareBtn": "Share Ambedkar Mitra",
    "talk.eyebrow": "Try the conversation",
    "talk.title": "Put your question in your own words",
    "talk.lede": "Tap a question and listen, as you would with a patient teacher. This is a small preview — the app holds a full voice & video conversation, and remembers where you left off.",
    "talk.askTitle": "Ask about…",
    "talk.s1t": "Speak, don't type", "talk.s1": "Voice-first, for people who do not type. Speak naturally and listen — no keyboards, no forms, no long reading required to take part.",
    "talk.s2t": "Life, mapped to yours", "talk.s2": "His student years, his struggles and his books — connected honestly to your exam, your job, your rights, a difficult day.",
    "talk.s3t": "Always within reach", "talk.s3": "Built for an ordinary smartphone, so guidance on rights, study and daily life is always in your pocket — at home, in class, in a museum.",
    langName: "English", listen: "Listen", listening: "Speaking…",
  },
  hi: {
    "nav.talk": "बात करें", "nav.stories": "कहानियाँ", "nav.journey": "उनकी यात्रा",
    "nav.library": "किताबें व स्रोत", "nav.community": "स्कूलों व संग्रहालयों के लिए", "nav.join": "प्रतीक्षा सूची में जुड़ें",
    "hero.eyebrow": "जल्द आ रहा है · वॉइस व वीडियो AI साथी",
    "hero.title": '<span class="accent-word">बाबासाहेब</span> से बात करें।<br />जीवन के लिए सीखें।',
    "hero.lede": "डॉ. बी. आर. आंबेडकर के विचारों से बातचीत — एक धैर्यवान, साफ़ बोलने वाला साथी, जो उनके जीवन, उनकी किताबों और उनकी कमाई हुई समझ को आपके दिन से जोड़ता है: आपकी पढ़ाई, आपका काम, आपके अधिकार, आपका सम्मान।",
    "hero.p1": "आवाज़ से पूछें — न टाइप करना, न लंबा पढ़ना ज़रूरी",
    "hero.p2": "हर उत्तर उनकी रचनाओं और विश्वसनीय स्रोतों से जुड़ा",
    "hero.p3": "आपके घर की भाषा में — हिंदी, अंग्रेज़ी, मराठी",
    "hero.cta": "प्रतीक्षा सूची में जुड़ें",
    "hero.note": "शुरुआती बातचीत सबसे पहले सुनें। कोई स्पैम नहीं — लॉन्च पर एक ही ईमेल।",
    "hero.share": "किसी छात्र, शिक्षक या दोस्त से साझा करें:",
    "hero.shareBtn": "आंबेडकर मित्र साझा करें",
    "talk.eyebrow": "बातचीत आज़माएँ",
    "talk.title": "अपना सवाल अपने शब्दों में पूछें",
    "talk.lede": "कोई सवाल चुनें और सुनें — जैसे कोई धैर्यवान शिक्षक समझा रहा हो। यह एक छोटी झलक है; ऐप में पूरी वॉइस व वीडियो बातचीत होगी।",
    "talk.askTitle": "इन पर पूछें…",
    "talk.s1t": "बोलें, टाइप न करें", "talk.s1": "उनके लिए जो टाइप नहीं करते। स्वाभाविक बोलें और सुनें — न कीबोर्ड, न फ़ॉर्म, न लंबा पढ़ना।",
    "talk.s2t": "उनका जीवन, आपके जीवन से", "talk.s2": "उनके छात्र-वर्ष, संघर्ष और किताबें — ईमानदारी से आपकी परीक्षा, नौकरी, अधिकारों और कठिन दिनों से जुड़ीं।",
    "talk.s3t": "हमेशा आपकी पहुँच में", "talk.s3": "एक साधारण स्मार्टफ़ोन के लिए बना — ताकि अधिकार, पढ़ाई और रोज़मर्रा की राह हमेशा आपकी जेब में हो।",
    langName: "हिंदी", listen: "सुनें", listening: "बोल रहा है…",
  },
  mr: {
    "nav.talk": "बोला", "nav.stories": "कथा", "nav.journey": "त्यांचा प्रवास",
    "nav.library": "पुस्तके व स्रोत", "nav.community": "शाळा व संग्रहालयांसाठी", "nav.join": "प्रतीक्षा यादीत सामील व्हा",
    "hero.eyebrow": "लवकरच येत आहे · व्हॉइस व व्हिडिओ AI सोबती",
    "hero.title": '<span class="accent-word">बाबासाहेबांशी</span> बोला.<br />आयुष्यासाठी शिका.',
    "hero.lede": "डॉ. बी. आर. आंबेडकरांच्या विचारांशी संवाद — एक संयमी, स्पष्ट बोलणारा सोबती, जो त्यांचे जीवन, त्यांची पुस्तके आणि त्यांचे शहाणपण तुमच्या दिवसाशी जोडतो: तुमचा अभ्यास, तुमचे काम, तुमचे हक्क, तुमचा सन्मान.",
    "hero.p1": "आवाजाने विचारा — टाइप करायचे नाही, लांब वाचायचे नाही",
    "hero.p2": "प्रत्येक उत्तर त्यांच्या लेखनाशी व विश्वासार्ह स्रोतांशी जोडलेले",
    "hero.p3": "तुमच्या घरच्या भाषेत — हिंदी, इंग्रजी, मराठी",
    "hero.cta": "प्रतीक्षा यादीत सामील व्हा",
    "hero.note": "पहिला संवाद सर्वात आधी ऐका. स्पॅम नाही — लाँचवेळी एकच ईमेल.",
    "hero.share": "एखाद्या विद्यार्थ्याला, शिक्षकाला, मित्राला पाठवा:",
    "hero.shareBtn": "आंबेडकर मित्र शेअर करा",
    "talk.eyebrow": "संवाद करून पहा",
    "talk.title": "तुमचा प्रश्न तुमच्या शब्दांत विचारा",
    "talk.lede": "एखादा प्रश्न निवडा आणि ऐका — संयमी शिक्षकासारखे. ही एक छोटी झलक आहे; ॲपमध्ये पूर्ण व्हॉइस व व्हिडिओ संवाद असेल.",
    "talk.askTitle": "यावर विचारा…",
    "talk.s1t": "बोला, टाइप करू नका", "talk.s1": "जे टाइप करत नाहीत त्यांच्यासाठी. नैसर्गिक बोला आणि ऐका — न कीबोर्ड, न फॉर्म, न लांब वाचन.",
    "talk.s2t": "त्यांचे जीवन, तुमच्या जीवनाशी", "talk.s2": "त्यांची विद्यार्थीदशा, संघर्ष आणि पुस्तके — तुमच्या परीक्षेशी, नोकरीशी, हक्कांशी आणि कठीण दिवसांशी प्रामाणिकपणे जोडलेली.",
    "talk.s3t": "नेहमी तुमच्या आवाक्यात", "talk.s3": "साध्या स्मार्टफोनसाठी बनवलेले — हक्क, अभ्यास आणि दैनंदिन मार्गदर्शन नेहमी तुमच्या खिशात.",
    langName: "मराठी", listen: "ऐका", listening: "बोलत आहे…",
  },
};

let currentLang = "en";
try { currentLang = localStorage.getItem("am-lang") || "en"; } catch (e) { /* private mode */ }
if (!I18N[currentLang]) currentLang = "en";

/* ---------------- Q&A bank ---------------- */
const QA = {
  en: [
    { q: "I failed my exam. Should I give up?", tag: "Study",
      a: "No. A boy who was made to sit apart in class went on to earn doctorates on two continents — not because the path was kind, but because he treated learning as a discipline, not a mood. Ask what this attempt taught you, repair that one thing, and sit again. Cultivation of mind is the ultimate aim of life; a mark sheet is only one season of it.",
      source: "Inspired by his student years & Annihilation of Caste (1936)" },
    { q: "How do I study when money is tight?", tag: "Study",
      a: "Begin where he began: with whatever is free. A scholarship from Baroda took him to Columbia, but before any scholarship came years of reading in whatever light was available. Use the public library, shared books, and the free sources in this app. Then study in fixed hours, teach what you learn to someone younger — teaching is the cheapest revision, and it builds your community as it builds you.",
      source: "Inspired by his Baroda scholarship & Columbia years, 1913–16" },
    { q: "Someone says my caste decides my worth. What do I answer?", tag: "Dignity",
      a: "Answer with calm, and with facts. Caste, he wrote, is not a wall of bricks — it is a notion, a state of the mind. Your worth is decided by your character and your learning, not by birth. Do not beg for dignity; organise for it. Educate yourself, agitate peacefully against what is unjust, and organise with others who believe the same.",
      source: "Inspired by Annihilation of Caste (1936) & the 1924 motto: Educate, Agitate, Organise" },
    { q: "What does the Constitution actually give me?", tag: "Rights",
      a: "More than most of us use. It gives you equality before the law, freedom from discrimination, the right to speak, learn, work and move — and it abolished untouchability itself. He chaired the committee that drafted it, and warned that rights on paper need citizens who know them. Tell me your situation, and we will find the article that stands behind you.",
      source: "Inspired by the Constitution of India (1949) — see Books & sources" },
    { q: "I'm exhausted. How did he keep going?", tag: "Courage",
      a: "Honestly? He was often unwell, often opposed, and he kept going in small, scheduled steps — a page, a meeting, a journal issue. Rest is not surrender. Rest, then do the next small thing in front of you. He measured a life not by never falling, but by refusing to let birth, poverty or ridicule write the last line.",
      source: "Inspired by his life, 1891–1956 — walk it in His journey below" },
  ],
  hi: [
    { q: "मैं परीक्षा में फ़ेल हो गया/गई। क्या छोड़ दूँ?", tag: "पढ़ाई",
      a: "नहीं। जिसे कक्षा में अलग बिठाया गया, वही आगे चलकर दो महाद्वीपों में डॉक्टरेट तक पहुँचा — रास्ता आसान नहीं था, उसने पढ़ाई को आदत बनाया, मनोदशा नहीं। इस कोशिश ने क्या सिखाया, वही एक चीज़ सुधारो और फिर बैठो। मन का विकास ही जीवन का अंतिम उद्देश्य है; अंकपत्र उसका एक मौसम भर है।",
      source: "उनके छात्र-वर्षों व जाति का उन्मूलन (1936) से प्रेरित" },
    { q: "पैसे की तंगी में पढ़ाई कैसे करूँ?", tag: "पढ़ाई",
      a: "वहीं से शुरू करो जहाँ से उन्होंने किया: जो मुफ़्त है, उससे। बड़ौदा की छात्रवृत्ति उन्हें कोलंबिया ले गई, पर उससे पहले वर्षों तक जो रोशनी मिली, उसी में पढ़ा। सार्वजनिक पुस्तकालय, साझा किताबें और इस ऐप के मुफ़्त स्रोत अपनाओ। तय घंटों में पढ़ो, और जो सीखो किसी छोटे को सिखाओ — सिखाना सबसे सस्ता दोहराव है।",
      source: "बड़ौदा छात्रवृत्ति व कोलंबिया वर्ष, 1913–16 से प्रेरित" },
    { q: "कोई कहे जाति ही मेरी कीमत तय करती है — क्या जवाब दूँ?", tag: "सम्मान",
      a: "शांति से, तथ्यों से जवाब दो। उन्होंने लिखा: जाति ईंटों की दीवार नहीं, एक धारणा है, मन की अवस्था है। तुम्हारी कीमत जन्म से नहीं, चरित्र और ज्ञान से तय होती है। सम्मान माँगो मत — संगठित करो। शिक्षित बनो, अन्याय के विरुद्ध शांतिपूर्वक आवाज़ उठाओ, और समान सोच वालों के साथ संगठित होओ।",
      source: "जाति का उन्मूलन (1936) व 1924 के मंत्र से: शिक्षित बनो, आंदोलन करो, संगठित रहो" },
    { q: "संविधान मुझे असल में क्या देता है?", tag: "अधिकार",
      a: "हम जितना उपयोग करते हैं, उससे कहीं अधिक। कानून के सामने समानता, भेदभाव से मुक्ति, बोलने, सीखने, काम करने और आने-जाने का अधिकार — और अस्पृश्यता का ही अंत। प्रारूप समिति के अध्यक्ष के रूप में उन्होंने चेताया था: कागज़ के अधिकारों को जानकार नागरिक चाहिए। अपनी स्थिति बताओ, हम तुम्हारे पीछे खड़ा अनुच्छेद खोजेंगे।",
      source: "भारत का संविधान (1949) से प्रेरित — नीचे किताबें व स्रोत देखें" },
    { q: "मैं थक गया/गई हूँ। वे कैसे चलते रहे?", tag: "हौसला",
      a: "सच कहूँ तो वे अक्सर अस्वस्थ और विरोधों से घिरे रहे — फिर भी छोटे, तय कदमों से चलते रहे: एक पृष्ठ, एक बैठक, पत्रिका का एक अंक। आराम हार नहीं है। आराम करो, फिर सामने का अगला छोटा काम करो। जीवन इसी से नापा जाता है कि जन्म, गरीबी या उपहास को आखिरी पंक्ति लिखने न दी जाए।",
      source: "उनके जीवन, 1891–1956 से प्रेरित — नीचे उनकी यात्रा देखें" },
  ],
  mr: [
    { q: "मी परीक्षेत नापास झालो/झाले. सोडून देऊ का?", tag: "अभ्यास",
      a: "नाही. ज्याला वर्गात वेगळे बसवले, तोच पुढे दोन खंडांत डॉक्टरेटपर्यंत पोहोचला — मार्ग सोपा नव्हता, त्याने अभ्यासाला सवय बनवली, मनःस्थिती नाही. या प्रयत्नाने काय शिकवले तेच दुरुस्त कर आणि पुन्हा बस. मनाचा विकास हेच जीवनाचे अंतिम ध्येय आहे; गुणपत्रक हा त्याचा एक ऋतू आहे.",
      source: "त्यांच्या विद्यार्थीदशेवर व जातिव्यवस्थेचे उच्चाटन (१९३६) यावरून प्रेरित" },
    { q: "पैशांची अडचण असताना अभ्यास कसा करू?", tag: "अभ्यास",
      a: "त्यांनी जिथून सुरुवात केली तिथूनच सुरू कर: जे मोफत आहे त्यापासून. बडोद्याची शिष्यवृत्ती त्यांना कोलंबियाला घेऊन गेली, पण त्याआधी वर्षानुवर्षे मिळेल त्या प्रकाशात वाचन झाले. सार्वजनिक ग्रंथालय, वाटून घेतलेली पुस्तके आणि या ॲपमधील मोफत स्रोत वापरा. ठरलेल्या वेळेत अभ्यास करा आणि शिकलात ते लहानांना शिकवा.",
      source: "बडोदा शिष्यवृत्ती व कोलंबिया वर्षे, १९१३–१६ यावरून प्रेरित" },
    { q: "कोणी म्हणाले जातच माझी किंमत ठरवते — काय उत्तर देऊ?", tag: "सन्मान",
      a: "शांतपणे, तथ्यांनी उत्तर दे. त्यांनी लिहिले: जात म्हणजे विटांची भिंत नाही — ती एक कल्पना आहे, मनाची अवस्था आहे. तुमची किंमत जन्माने नाही, चारित्र्याने व ज्ञानाने ठरते. सन्मान मागू नका — संघटित व्हा. शिक्षित व्हा, अन्यायाविरुद्ध शांततेने आवाज उठवा आणि समान विचारांच्या लोकांसोबत संघटित व्हा.",
      source: "जातिव्यवस्थेचे उच्चाटन (१९३६) व १९२४ चा मंत्र: शिक्षित व्हा, संघर्ष करा, संघटित व्हा" },
    { q: "संविधान मला नेमके काय देते?", tag: "हक्क",
      a: "आपण वापरतो त्यापेक्षा खूप जास्त. कायद्यासमोर समानता, भेदभावापासून मुक्ती, बोलण्याचा, शिकण्याचा, काम करण्याचा व फिरण्याचा हक्क — आणि अस्पृश्यतेचाच अंत. मसुदा समितीचे अध्यक्ष म्हणून त्यांनी ताकीद दिली होती: कागदावरील हक्कांना जागरूक नागरिक लागतात. तुमची परिस्थिती सांगा, तुमच्या पाठीशी उभा असलेला अनुच्छेद आपण शोधू.",
      source: "भारतीय संविधान (१९४९) यावरून प्रेरित — खाली पुस्तके व स्रोत पहा" },
    { q: "मी थकलो/थकले आहे. ते कसे चालत राहिले?", tag: "धैर्य",
      a: "खरं सांगायचं तर ते अनेकदा आजारी व विरोधांनी वेढलेले असत — तरी छोट्या, ठरलेल्या पावलांनी चालत राहिले: एक पान, एक बैठक, अंकाचा एक भाग. विश्रांती म्हणजे शरणागती नाही. विश्रांती घ्या, मग समोरचे पुढचे छोटे काम करा. जन्म, गरिबी किंवा उपहास यांना शेवटची ओळ लिहू न देणे — हेच जीवनाचे मोजमाप.",
      source: "त्यांच्या जीवनावर, १८९१–१९५६ — खाली त्यांचा प्रवास पहा" },
  ],
};

/* ---------------- stories ---------------- */
const STORIES = [
  {
    id: "mahad", year: "1927", place: "Mahad, Maharashtra", mins: "1 min read",
    title: "A drink of water",
    img: "assets/mahad-flyer.jpg", alt: "Flyer published before the Mahad Satyagraha, 1927",
    hook: "Thousands walked to a public tank — not for a favour, but for a sip of water that was theirs by right.",
    body: [
      "In March 1927, in the town of Mahad, Dr Ambedkar led thousands of so-called untouchables to the Chavdar tank. The municipality had declared the water open to all. In practice, they were still kept away thirsty.",
      "He drank first. Then everyone drank. It was a small act that shook a large order: if water made by nature could be denied, the denial was man-made — and what men made, men could unmake. Months later, a copy of the Manusmriti, the text used to justify that order, was publicly burned.",
    ],
    lesson: "Dignity is rarely handed over; it is claimed, calmly and together. When a door is unjustly shut, you do not need permission to knock as an equal.",
    source: "Mahad Satyagraha, March 1927 · Flyer via Wikimedia Commons",
  },
  {
    id: "columbia", year: "1913–16", place: "Columbia University, New York", mins: "1 min read",
    title: "The student from Satara in New York",
    img: "assets/young-columbia.jpg", alt: "A young Dr Ambedkar during his Columbia University years",
    hook: "A scholarship took a 22-year-old from Maharashtra to New York. Hunger for books did the rest.",
    body: [
      "In 1913, a scholarship from the Maharaja of Baroda carried Bhimrao Ambedkar to Columbia University. He was among the first in his community to study abroad — and he studied like someone who knew the chance might not come twice.",
      "Economics, politics, history, philosophy: he read across fields, because the problem he wanted to solve — caste — touched them all. The degrees mattered. The habit mattered more.",
    ],
    lesson: "Opportunity is a door; preparation is what walks through it. Read wider than your syllabus — your real question rarely fits in one subject.",
    source: "Columbia University years, 1913–16 · Photograph via Wikimedia Commons",
  },
  {
    id: "barrister", year: "1923", place: "London → Bombay", mins: "1 min read",
    title: "The degree was not the destination",
    img: "assets/barrister-1922.jpg", alt: "Dr Ambedkar as a barrister, 1922",
    hook: "A doctorate, a law degree, a comfortable career on offer. He chose a harder client: his people.",
    body: [
      "By 1923 he had a DSc from the London School of Economics and had been called to the Bar. London offered safety and salary. He sailed home.",
      "In Bombay he practised law, taught, and poured his earnings into journals, hostels and associations for the oppressed. Education, for him, was never a private ladder. It was scaffolding — you climb it so others can climb after you.",
    ],
    lesson: "Let your qualifications serve something larger than your comfort. Skill that returns to the community multiplies; skill that only decorates a wall does not.",
    source: "DSc, LSE & called to the Bar, 1923 · Photograph via Wikimedia Commons",
  },
  {
    id: "rajgruha", year: "1934", place: "Rajgruha, Dadar, Mumbai", mins: "1 min read",
    title: "A home built around books",
    img: "assets/reading.jpg", alt: "Dr Ambedkar reading a book",
    hook: "When he built his house, the library came first. The rooms arranged themselves around the books.",
    body: [
      "Rajgruha, his home in Dadar, Mumbai, was designed around one of India's great private libraries — tens of thousands of books gathered over a lifetime, on shelves that visitors still describe with awe.",
      "This was not collecting. It was armoury and refuge at once: every argument he would ever make in a court, a legislature or a pamphlet began as a quiet evening among those pages.",
    ],
    lesson: "Build your Rajgruha early — even if today it is one shelf, one notebook, one borrowed book returned on time. What surrounds you daily will shape you daily.",
    source: "Rajgruha, built 1934 · Photograph via Wikimedia Commons",
  },
  {
    id: "constitution", year: "1947–49", place: "Constituent Assembly, Delhi", mins: "1 min read",
    title: "The boy outside the classroom writes the rules",
    img: "assets/drafting-1947.jpg", alt: "Dr Ambedkar with members of the Drafting Committee of the Constitution, 1947",
    hook: "As a child he could not sit inside the classroom. As a man, he chaired the committee that wrote free India's rules.",
    body: [
      "School records remember a boy who sat apart, whose notebook teachers would not touch. In August 1947, that boy — now Dr Ambedkar — was asked to chair the Drafting Committee of the Indian Constitution, and became independent India's first Minister of Law and Justice.",
      "For over two years he steered debate article by article, defending equality and fraternity against every attempt to dilute them. On 25 November 1949 he presented the final draft. The Constitution was adopted the next day.",
    ],
    lesson: "Rules decide who gets to sit inside. Learn the rules of your school, your workplace, your country — then work, lawfully and relentlessly, to make them just.",
    source: "Drafting Committee, 1947–49 · Photograph via Wikimedia Commons",
  },
  {
    id: "nagpur", year: "1956", place: "Deekshabhoomi, Nagpur", mins: "1 min read",
    title: "A new path at Nagpur",
    img: "assets/nagpur-1956.jpg", alt: "Dr Ambedkar at the conversion ceremony at Nagpur, 1956",
    hook: "At 65, unwell and knowing time was short, he began again — with lakhs walking beside him.",
    body: [
      "On 14 October 1956, at Nagpur, Dr Ambedkar embraced Buddhism together with several lakh followers. He had studied religions for decades, and chose a path he believed rested on liberty, equality and fraternity — tested by reason, open to all.",
      "The ground is now Deekshabhoomi, among the most visited places of learning and resolve in India. Seven weeks later, on 6 December, he passed away in Delhi — still working, a manuscript beside him.",
    ],
    lesson: "It is never too late to choose your path deliberately. Age, illness and consensus are real — but they are not orders. Let reason and compassion sign your decisions.",
    source: "Nagpur, 14 October 1956 · Photograph via Wikimedia Commons",
  },
];

/* ---------------- helpers ---------------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 3600);
}

async function sharePayload(payload, fallbackMsg) {
  if (navigator.share) {
    try { await navigator.share(payload); return; } catch (e) { if (e && e.name === "AbortError") return; }
  }
  const text = [payload.title, payload.text, payload.url].filter(Boolean).join("\n");
  try { await navigator.clipboard.writeText(text); toast(fallbackMsg || "Link copied — paste it anywhere to share."); }
  catch (e) { toast("Copy this link to share: " + (payload.url || SITE_URL)); }
}

function storyShareText(story) {
  return `${story.title} — ${story.hook}`;
}

/* ---------------- header / nav ---------------- */
const header = $(".site-header");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 8), { passive: true });

const navToggle = $(".nav-toggle");
const mobileNav = $("#mobile-nav");
navToggle.addEventListener("click", () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
$$("#mobile-nav a").forEach(a => a.addEventListener("click", () => { mobileNav.hidden = true; }));

/* ---------------- reveal on scroll ---------------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-visible"); revealObserver.unobserve(en.target); } });
}, { threshold: 0.12 });
$$(".reveal").forEach((el, i) => { el.style.setProperty("--reveal-delay", `${(i % 4) * 70}ms`); revealObserver.observe(el); });

/* ---------------- language ---------------- */
function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang === "en" ? "en" : lang;
  $$("[data-i18n]").forEach(el => { if (dict[el.dataset.i18n]) el.textContent = dict[el.dataset.i18n]; });
  $$("[data-i18n-html]").forEach(el => { if (dict[el.dataset.i18nHtml]) el.innerHTML = dict[el.dataset.i18nHtml]; });
  $$("[data-lang-name]").forEach(el => { el.textContent = dict.langName; });
  $$(".lang-switch button").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
  const listenLabel = $("#listen-btn span");
  if (listenLabel) listenLabel.textContent = dict.listen;
  try { localStorage.setItem("am-lang", lang); } catch (e) { /* ignore */ }
  renderQuestions();
}
$$(".lang-switch button").forEach(b => b.addEventListener("click", () => { applyLang(b.dataset.lang); resetChat(); }));

/* ---------------- chat preview ---------------- */
const chat = $("#chat");
const listenBtn = $("#listen-btn");
const micBtn = $("#mic-btn");
const mainWave = $("#main-wave");
let lastAnswer = "";
let askedIndex = -1;

function bubble(html, cls) {
  const div = document.createElement("div");
  div.className = `bubble ${cls}`;
  div.innerHTML = html;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
  return div;
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function resetChat() {
  chat.innerHTML = "";
  lastAnswer = "";
  listenBtn.disabled = true;
  const greet = {
    en: "Namaste. I am an interpretation of Babasaheb's ideas, drawn from his writings. Ask me about study, dignity, rights — or a difficult day.",
    hi: "नमस्ते। मैं बाबासाहेब के विचारों की एक व्याख्या हूँ, उनकी रचनाओं से ली गई। पढ़ाई, सम्मान, अधिकार — या किसी कठिन दिन के बारे में पूछिए।",
    mr: "नमस्ते. मी बाबासाहेबांच्या विचारांची एक व्याख्या आहे, त्यांच्या लेखनावर आधारित. अभ्यास, सन्मान, हक्क — किंवा कठीण दिवसाबद्दल विचारा.",
  }[currentLang];
  bubble(escapeHtml(greet), "bubble-bot");
}
function askQuestion(idx) {
  const item = QA[currentLang][idx];
  if (!item) return;
  askedIndex = idx;
  $$(".question-btn").forEach((b, i) => b.classList.toggle("is-active", i === idx));
  bubble(escapeHtml(item.q), "bubble-user");
  const typing = bubble('<span class="bubble-typing" aria-label="Thinking"><i></i><i></i><i></i></span>', "bubble-bot");
  micBtn.classList.add("is-listening");
  mainWave.classList.add("is-playing");
  speechSynthesis && speechSynthesis.cancel();
  setTimeout(() => {
    typing.remove();
    bubble(`${escapeHtml(item.a)}<span class="bubble-source">${escapeHtml(item.source)}</span>`, "bubble-bot");
    lastAnswer = item.a;
    listenBtn.disabled = false;
    micBtn.classList.remove("is-listening");
    setTimeout(() => mainWave.classList.remove("is-playing"), 2600);
  }, 950);
}
function renderQuestions() {
  const list = $("#question-list");
  list.innerHTML = "";
  QA[currentLang].forEach((item, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "question-btn" + (i === askedIndex ? " is-active" : "");
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `<span>${escapeHtml(item.q)}</span><small>${escapeHtml(item.tag)} →</small>`;
    btn.addEventListener("click", () => askQuestion(i));
    list.appendChild(btn);
  });
}
listenBtn.addEventListener("click", () => {
  if (!lastAnswer) return;
  if (!("speechSynthesis" in window)) { toast("Voice playback arrives with the app — your browser cannot speak here."); return; }
  speechSynthesis.cancel();
  const dict = I18N[currentLang];
  const label = $("#listen-btn span");
  const utter = new SpeechSynthesisUtterance(lastAnswer);
  utter.lang = { en: "en-IN", hi: "hi-IN", mr: "mr-IN" }[currentLang];
  utter.rate = 0.96;
  utter.onstart = () => { label.textContent = dict.listening; mainWave.classList.add("is-playing"); };
  utter.onend = utter.onerror = () => { label.textContent = dict.listen; mainWave.classList.remove("is-playing"); };
  speechSynthesis.speak(utter);
});
micBtn.addEventListener("click", () => {
  toast("Voice input arrives with the app — for now, tap a question above.");
  const next = (askedIndex + 1) % QA[currentLang].length;
  askQuestion(next);
});

/* ---------------- stories ---------------- */
let likes = {};
try { likes = JSON.parse(localStorage.getItem("am-likes") || "{}"); } catch (e) { likes = {}; }

const track = $("#story-track");
function heartSvg() { return '<svg viewBox="0 0 24 24"><path d="M12 20.5C7 16.5 3.5 13.3 3.5 9.6A4.6 4.6 0 0 1 8.1 5c1.6 0 3 .8 3.9 2.1A4.9 4.9 0 0 1 15.9 5a4.6 4.6 0 0 1 4.6 4.6c0 3.7-3.5 6.9-8.5 10.9Z"/></svg>'; }
function shareSvg() { return '<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/></svg>'; }

STORIES.forEach(story => {
  const card = document.createElement("article");
  card.className = "story-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Read story: ${story.title}`);
  card.innerHTML = `
    <img src="${story.img}" alt="${escapeHtml(story.alt)}" loading="lazy" />
    <div class="story-card-body">
      <p class="story-meta"><span class="pill">${story.year}</span><span>${story.place}</span><span>${story.mins}</span></p>
      <h3>${story.title}</h3>
      <p>${story.hook}</p>
      <p class="story-lesson"><strong>For your life today</strong>${story.lesson}</p>
    </div>
    <div class="story-card-foot">
      <button type="button" class="mini-btn like-btn ${likes[story.id] ? "is-liked" : ""}" aria-pressed="${!!likes[story.id]}">${heartSvg()}<span>${likes[story.id] ? "Kept" : "Keep"}</span></button>
      <button type="button" class="mini-btn share-btn">${shareSvg()}<span>Share story</span></button>
    </div>`;
  card.addEventListener("click", () => openStory(story));
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openStory(story); } });
  card.querySelector(".like-btn").addEventListener("click", e => {
    e.stopPropagation();
    likes[story.id] = !likes[story.id];
    try { localStorage.setItem("am-likes", JSON.stringify(likes)); } catch (err) { /* ignore */ }
    const btn = e.currentTarget;
    btn.classList.toggle("is-liked", likes[story.id]);
    btn.setAttribute("aria-pressed", String(likes[story.id]));
    btn.querySelector("span").textContent = likes[story.id] ? "Kept" : "Keep";
  });
  card.querySelector(".share-btn").addEventListener("click", e => {
    e.stopPropagation();
    sharePayload({ title: `Ambedkar Mitra — ${story.title}`, text: storyShareText(story), url: SITE_URL + "#stories" }, "Story copied — share it with your class or circle.");
  });
  track.appendChild(card);
});

$("#story-prev").addEventListener("click", () => track.scrollBy({ left: -360, behavior: "smooth" }));
$("#story-next").addEventListener("click", () => track.scrollBy({ left: 360, behavior: "smooth" }));
track.addEventListener("scroll", () => {
  const max = track.scrollWidth - track.clientWidth;
  const pct = max > 0 ? 12 + (track.scrollLeft / max) * 88 : 100;
  $("#story-progress-bar").style.width = pct + "%";
}, { passive: true });

/* story dialog */
const dialog = $("#story-dialog");
let dialogStory = null;
function openStory(story) {
  dialogStory = story;
  $("#dialog-img").src = story.img;
  $("#dialog-img").alt = story.alt;
  $("#dialog-year").textContent = story.year;
  $("#dialog-place").textContent = story.place;
  $("#dialog-mins").textContent = story.mins;
  $("#dialog-title").textContent = story.title;
  $("#dialog-text").innerHTML = story.body.map(p => `<p>${p}</p>`).join("") + `<p class="story-meta">${story.source}</p>`;
  $("#dialog-lesson").textContent = story.lesson;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}
function closeStory() { if (typeof dialog.close === "function") dialog.close(); else dialog.removeAttribute("open"); }
$("#dialog-close").addEventListener("click", closeStory);
dialog.addEventListener("click", e => { if (e.target === dialog) closeStory(); });
$("#dialog-share").addEventListener("click", () => dialogStory && sharePayload(
  { title: `Ambedkar Mitra — ${dialogStory.title}`, text: storyShareText(dialogStory), url: SITE_URL + "#stories" },
  "Story copied — share it with your class or circle."));
$("#dialog-x").addEventListener("click", () => {
  if (!dialogStory) return;
  const text = encodeURIComponent(`${storyShareText(dialogStory)} #AmbedkarMitra`);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(SITE_URL + "#stories")}`, "_blank", "noopener,width=560,height=460");
});
$("#dialog-wa").addEventListener("click", () => {
  if (!dialogStory) return;
  const text = encodeURIComponent(`${storyShareText(dialogStory)}\n${SITE_URL}#stories`);
  window.open(`https://wa.me/?text=${text}`, "_blank", "noopener");
});

/* ---------------- share site ---------------- */
$$("[data-share-site]").forEach(btn => btn.addEventListener("click", () => sharePayload(
  { title: "Ambedkar Mitra — Talk to Babasaheb", text: "A voice & video AI companion inspired by Dr B. R. Ambedkar — his life, his books, and wisdom for your day. In Hindi, English and Marathi. Join the waitlist:", url: SITE_URL },
  "Ambedkar Mitra link copied — share it onward.")));

/* ---------------- waitlist ---------------- */
$$("[data-waitlist]").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const email = (input.value || "").trim();
    const note = form.closest("section, .hero-copy").querySelector("[data-form-note]");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      input.focus();
      if (note) note.textContent = "Please enter a valid email address, so we can reach you at launch.";
      toast("Please enter a valid email address.");
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("am-waitlist") || "[]");
      if (!list.includes(email)) list.push(email);
      localStorage.setItem("am-waitlist", JSON.stringify(list));
    } catch (err) { /* ignore */ }
    if (note) note.textContent = "You are on the list. A pre-addressed email to our inbox just opened — press send to complete your signup.";
    toast("Welcome to the waitlist. Jai Bhim!");
    const subject = encodeURIComponent("Ambedkar Mitra waitlist");
    const body = encodeURIComponent(`Please add ${email} to the Ambedkar Mitra waitlist.`);
    window.location.href = `mailto:${CONTACT}?subject=${subject}&body=${body}`;
    form.reset();
  });
});

/* ---------------- quote rotator ---------------- */
const QUOTES = [
  { text: "“Cultivation of mind should be the ultimate aim of human existence.”", cite: "— Annihilation of Caste, 1936" },
  { text: "“I measure the progress of a community by the degree of progress which women have achieved.”", cite: "— Attributed to Dr B. R. Ambedkar" },
  { text: "“Educate, agitate, organise.”", cite: "— Motto of the Bahishkrit Hitakarini Sabha, founded 1924" },
];
let quoteIdx = 0;
setInterval(() => {
  const wrap = $(".quote-rotator");
  if (!wrap || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  wrap.classList.add("is-fading");
  setTimeout(() => {
    quoteIdx = (quoteIdx + 1) % QUOTES.length;
    $("#quote-text").textContent = QUOTES[quoteIdx].text;
    $("#quote-cite").textContent = QUOTES[quoteIdx].cite;
    wrap.classList.remove("is-fading");
  }, 500);
}, 6000);

/* ---------------- counter ---------------- */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    counterObserver.unobserve(en.target);
    const target = Number(en.target.dataset.counter);
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / 1400, 1);
      en.target.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN");
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  });
}, { threshold: 0.5 });
$$("[data-counter]").forEach(el => counterObserver.observe(el));

/* ---------------- init ---------------- */
$("#year").textContent = new Date().getFullYear();
applyLang(currentLang);
resetChat();
