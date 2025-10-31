const slugToTitleDictionary = {
  "blogs": "وبلاگ ها",
  "aboutUs" : "درباره ما" ,
  "blogDetail" : "جزییات وبلاگ" ,
  "cart" : "سبد خرید" ,
  "coaches" : "همه مربیان" ,
  "coachesDetail" : "جزیات مربی" ,
  "contactUs" : "ارتباط با ما" ,
  "courseDetail:id" : "جزییات دوره" ,
  "courses" : "همه دوره ها" ,
  "*" : "ارور 404" ,
  "dashboard" : "داشبورد" ,
};

export const convertSlugToTitle = (slug) => {
  return (
    slugToTitleDictionary[slug] ||
    slug
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};
