import i18next from 'i18next';
import { initReactI18next } from "react-i18next";


i18next.use(initReactI18next).init({
  resources: {
    fa: {
      translation: {
        landing: "صفحه اصلی",
        trainingCoursesPage: "دوره های آموزشی",
        blogPage: "دوره های آموزشی",
        coachersPage: "مربیان",
        numberOne: "نامبروان",
        alwaysTheBest: "همیشه بهترین",
        all: "همه",
        courses: "دوره ها",
        blogs: "وبلاگ ها",
        landingSearchPlaceHolder: "جستوجو کنید...",

        search: {
          all: "جستجو در همه دسته‌ها...",
          blogs: "جستجو برای وبلاگ‌ها...",
          courses: "جستجو برای دوره‌ها...",
          landingAutoCompleterPlaceHolder: "جستو جو کنید...",
        },
        herosection: {
          heroPreText: "هرگز از",
          heroText1: "تلاش",
          heroText2: "استقامت",
          heroText3: "ایستادگی",
          heroText4: "پشتکار",
          heroTextSuffix: "دست نکشید زندگی هرگز از آموزش دست نمیکشد",
          heroSubText:
            "در سفر اموزشی و یادگیری دنبال کردن منحصر به فرد است ما به شما کمک خواهیم کرد",
          heroButton: "دوره ها",
        },
        topCategories: {
          topCategoriesTag: "دسته بندی های پرطرفدار",
          topCategoriesTitle: "دسته بندی های برتر",
          topCategoriesSubtext:
            "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است",
        },
        aboutSection: {
          aboutSectionTag: "درباره ما بیشتر بدانید",
          aboutSectionPreTitle: "هزاران",
          aboutSectionTitleSuffix: "برتر اکنون در یک مکان",
          aboutSectionDescribe:
            "صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم صحبت در مورد پایه پلتفرم وب.",
          aboutSectionOption1: "برنامه دوره‌ای انعطاف‌پذیر",
          aboutSectionOption2: "از هر کجا به کلاس خود دسترسی داشته باشید",
          aboutSectionOption3: "بهترین مربیان",
          aboutSectionOption4: "درباره ما",
          aboutSectionButton: "درباره ما",
        },
        featuredCoursesPage: {
          featuredCoursesTag: "دوره های کلاس برتر",
          featuredCoursesTitle: "بهترین دوره‌های آموزشی جهان ما را کاوش کنید",
          featuredCoursesDescribe:
            "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است",
        },
        joinTheClub: {
          joinTheClubTag: "! تعیین سطح",
          joinTheClubTitle: "با تعیین سطح می‌تونی دوره‌های مناسب خودت رو پیدا کنی و قوی‌تر از همیشه شروع کنی",
          joinTheClubButton: "اکنون مشترک شوید",
        },
        masterMentors: {
          masterMentorsTag: " معلم های ماهر",
          masterMentorsTitle: "کلاس برتر ما و مربیان خبره در یک مکان",
          masterMentorsDescribe:
            "هنگامی که یک چاپگر ناشناس یک گالری از نوع و کتاب نمونه درهم درست شده باقی نمانده است فقط پنج قرن",
          masterMentorsButton: "همه مربیان را ببینید",
        },
        ourNumbers: {
          ourNumbersActiveStudents: "دانشجو های فعال",
          CollegeCourses: "دروس دانشکده",
          BestCoaches: "بهترین اساتید",
          EarnedAwards: "جوایز به دست آمده",
        },
        fAQSection: {
          fAQSectionTag: " سوالات متداول",
          fAQSectionTitle: " شروع به تمرین از مربیان حرفه ای جهان",
          fAQSectionDescribe:
            "Grooveصندوق ورودی مشترک بصری این کار را برای اعضای تیم آسان میکند سازماندهی و اولویت بندی و در این قسمت.",
          fAQSectionQ1: "نامبر وان می خواهد به شما چه چیزی دهد؟",
          fAQSectionQ2: "چرا ما را برای تحصیل خود انتخاب کنید؟",
          fAQSectionQ3: "چگونه خدماتی را برای شما ارائه می کنیم؟",
          fAQSectionQ4: "آیا برای دوره خود مقرون به صرفه هستید؟",
          fAQSectionA1:
            "صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند ...",
        },
        gettingStartedSection: {
          gettingStartedSectionTag: " چگونه سفر را شروع می کنیم",
          gettingStartedSectionTitle:
            "!سفر یادگیری خود را از همین امروز شروع کنید",
          gettingStartedSectionSubTitle:
            "شهودی Groove اعضای maketeam صندوق ورودی را با هم به اشتراک گذاشت سازماندهی، اولویت بندی و.در این قسمت.",
          gettingStartedSectionItem1Title: "با کارشناسان بیاموزید",
          gettingStartedSectionItem2Title: "هر چیزی یاد بگیر",
          gettingStartedSectionItem3Title: "دریافت گواهی آنلاین",
          gettingStartedSectionItem4Title: "بازاریابی ایمیلی",
          gettingStartedSectionItem1Describe:
            "با کارشناسان بیاموزید و از تجربیات آنها بهره‌مند شوید.",
          gettingStartedSectionItem2Describe:
            "هر چیزی یاد بگیرید و افق‌های جدیدی را به روی خودتان باز کنید.",
          gettingStartedSectionItem3Describe:
            "گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.",
          gettingStartedSectionItem4Describe:
            "بازاریابی ایمیلی ابزاری موثر برای ارتباط با مشتریان و افزایش فروش است.",
          gettingStartedSectionBecomeTeacherCardTitle: "مربی شوید",
          gettingStartedSectionBecomeStudentCardTitle: "دانشجو شوید",
          gettingStartedSectionBecomeTeacherCardDescribe:
            "برای مثال بی اهمیت، کدام یک از ما متعهد می شویم ورزش بدنی بله این اتفاق در اینجا می افتد.",
          gettingStartedSectionBecomeStudentCardDescribe:
            "به میلیون ها نفر از سراسر جهان بپیوندید با هم یاد می گیرند یادگیری آنلاین.",
          gettingStartedSectionButton: "درخواست",
        },
        blogSection: {
          blogSectionTag: " اخبار و وبلاگ ها",
          blogSectionTitle: " آخرین خبر ما",
        },
        footer: {
          GetinTouch: "در تماس باشید",
          unknownprinter: "هنگامی که یک چاپگر ناشناس گرفت نوع گالی و درهم",

          OurCompany: " شرکت ما",
          ContactUs: " با ما تماس بگیرید",
          BecomeaTeacher: " معلم شوید",
          Blogs: " وبلاگ",
          Coachers: "مربی",
          Events: " مناسبت ها",

          UsefulLinks:" لینک های مفید",
          OurValues:" ارزش های ما",
          ToJoin:" شریک شدن",
          OurPartners:" شرکای ما",
          WorkatFutureLearn:" در Future Learn کار کنید",

          footerAddress:"استان مازندران، علیوک، جاده فرح آباد، H3X7+5V3، ایران",
          copyRight:"© تمامی حقوق این سایت متعلق به تیم نوا و آکادمی بحر می باشد."
        },
      },
    },
    en: {
      translation: {
        landing: "Home",
        trainingCoursesPage: "Training Courses",
        blogPage: "Blogs",
        coachersPage: "Coachers",
        numberOne: "Number one",
        alwaysTheBest: "Always the Best",
        all: "All",
        courses: "Courses",
        blogs: "Blogs",
        landingSearchPlaceHolder: "Search here...",

        search: {
          all: "Search in all categories...",
          blogs: "Search for blogs...",
          courses: "Search for courses...",
          landingAutoCompleterPlaceHolder: "...Search Base On",
        },
        herosection: {
          heroPreText: "Never stop",
          heroText1: "Trying",
          heroText2: "Perseverance",
          heroText3: "Standing Firm",
          heroText4: "Persistence",
          heroTextSuffix: "Life Never Stops Teaching",
          heroSubText:
            "The path of learning is unique for each person, and we are here to support you.",
          heroButton: "Courses",
        },
        topCategories: {
          topCategoriesTag: "Popular Categories",
          topCategoriesTitle: "Top Categories",
          topCategoriesSubtext:
            "Today, because virtual communications have become so widespread",
        },
        aboutSection: {
          aboutSectionTag: "Learn More About Us",
          aboutSectionPreTitle: "Thousands",
          aboutSectionTitleSuffix: "now in one place",
          aboutSectionDescribe:
            "The Groove visual shared inbox makes it easy for team members to organize and prioritize. In this episode of Smashing Pod, we are talking about the fundamentals of the web platform.",
          aboutSectionOption1: "Flexible Course Schedule",
          aboutSectionOption2: "Access your class from anywhere",
          aboutSectionOption3: "Best Coaches",
          aboutSectionButton: "About Us",
        },
        featuredCoursesPage: {
          featuredCoursesTag: "Top Courses",
          featuredCoursesTitle: "Explore the World's Best Training Courses",
          featuredCoursesDescribe:
            "Today, because virtual communications have grown significantly",
        },
        joinTheClub: {
          joinTheClubTag: "Determine the level",
          joinTheClubTitle: "By determining your level, you can find the right courses for you and start stronger than ever.",
          joinTheClubButton: "Subscribe Now",
        },
        masterMentors: {
          masterMentorsTag: "Skilled Teachers",
          masterMentorsTitle:
            "Top Classes and Expert Teachers, Together in One Place",
          masterMentorsDescribe:
            "When an unknown printer created a scrambled gallery of type and sample books, nothing remained for five centuries.",
          masterMentorsButton: "See All Coaches",
        },
        ourNumbers: {
          ourNumbersActiveStudents: "Active Students",
          CollegeCourses: "College Courses",
          BestCoaches: "Best Coaches",
          EarnedAwards: "Earned Awards",
        },
        fAQSection: {
          fAQSectionTag: "Frequently Asked Questions",
          fAQSectionTitle: "Train with the World's Top Coaches",
          fAQSectionDescribe:
            "The Groove visual shared inbox makes it easy for team members to organize and prioritize tasks in this section.",
          fAQSectionQ1: "What does Number One want to give you?",
          fAQSectionQ2: "Why Should You Choose Us for Your Studies?",
          fAQSectionQ3: "How Do We Provide Our Services to You?",
          fAQSectionQ4: "Is the Course Within Your Budget?",
          fAQSectionA1:
            "The Groove visual shared inbox makes it easy for team members to organize and prioritize tasks in this section.",
        },
        gettingStartedSection: {
          gettingStartedSectionTag: "How Do We Start the Journey?",
          gettingStartedSectionTitle: "Start Your Learning Journey Today!",
          gettingStartedSectionSubTitle:
            "The Groove visual shared inbox makes it easy for team members to organize and prioritize tasks in this section.",
          gettingStartedSectionItem1Title: "Learn with Experts",
          gettingStartedSectionItem2Title: "Learn Anything",
          gettingStartedSectionItem3Title: "Get an Online Certificate",
          gettingStartedSectionItem4Title: "Email Marketing",
          gettingStartedSectionItem1Describe:
            "Learn with experts and gain from their experience.",
          gettingStartedSectionItem2Describe:
            "Learn anything and unlock new horizons.",
          gettingStartedSectionItem3Describe:
            "Earn an online certificate and certify your skills.",
          gettingStartedSectionItem4Describe:
            "Email marketing is a powerful way to engage customers and increase sales.",
          gettingStartedSectionBecomeTeacherCardTitle: "Become a Coach",
          gettingStartedSectionBecomeStudentCardTitle: "Become a Student",
          gettingStartedSectionBecomeTeacherCardDescribe:
            "For instance, no matter who we are, we commit to physical exercise — and yes, it happens here.",
          gettingStartedSectionBecomeStudentCardDescribe:
            "Join millions of people around the world learning together online.",
          gettingStartedSectionButton: "Request",
        },
        blogSection: {
          blogSectionTag: "News & Blogs",
          blogSectionTitle: "Latest News",
        },
        footer: {
          GetinTouch: "Get in touch",
          unknownprinter:
            "When an unknown printer took a galley of type and scrambled it",

          OurCompany: "Our Company",
          ContactUs: "Contact Us",
          BecomeaTeacher: "Become a Teacher",
          Blogs: " Blogs",
          Coacher: "Coacher",
          Events: "Events",

          UsefulLinks:"Useful Links",
          OurValues:"Our Values",
          ToJoin:"To Join",
          OurPartners:"Our Partners",
          WorkatFutureLearn:"Work at Future Learn",

          footerAddress:"Alivok, Farahabad Road, Mazandaran Province, H3X7+5V3, Iran",
          copyRight:"© All rights of this website are reserved by Nova Team and Bahr Academy."
        },
      },
    },
  },
  lng: "fa",
});

export default i18next;
