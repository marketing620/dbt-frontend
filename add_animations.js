const fs = require("fs");

const addAosToClasses = (filePath, additions) => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, "utf-8");
  
  additions.forEach(({ search, replace }) => {
     content = content.replace(search, replace);
  });

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Updated animations in ${filePath}`);
};

// 1. Home Page Animations
addAosToClasses("./src/app/page.tsx", [
  { // Stats counter items (columns)
    search: /<div className="col-12 col-md-3 border-end">/g,
    replace: `<div className="col-12 col-md-3 border-end" data-aos="fade-up" data-aos-delay="100">`
  },
  { // Stats counter item (last col)
    search: /<div className="col-12 col-md-3">/g,
    replace: `<div className="col-12 col-md-3" data-aos="fade-up" data-aos-delay="400">`
  },
  { // Process text
    search: /<div className="col-lg-8">/g,
    replace: `<div className="col-lg-8" data-aos="fade-up">`
  },
  { // Process / Bento cards
    search: /<div className="col-12 col-md-6 col-lg-4">/g,
    replace: `<div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">`
  },
  { // Featured Services Grid container -> delay cascading children manually
    search: /<div key=\{idx\} className="col-12 col-md-6 col-lg-3">/g,
    replace: `<div key={idx} className="col-12 col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={idx * 100}>`
  },
  { // Feature Split Image
    search: /<div className="col-12 col-lg-5 order-2 order-lg-1">/g,
    replace: `<div className="col-12 col-lg-5 order-2 order-lg-1" data-aos="fade-right">`
  },
  { // Feature Split Text
    search: /<div className="col-12 col-lg-6 offset-lg-1 order-1 order-lg-2">/g,
    replace: `<div className="col-12 col-lg-6 offset-lg-1 order-1 order-lg-2" data-aos="fade-left">`
  },
  // Fix the previously added Delay attributes breaking the last item
  {
      search: /<div className="col-12 col-md-3" data-aos="fade-up" data-aos-delay="400">\s*<h3/g,
      replace: `<div className="col-12 col-md-3" data-aos="fade-up" data-aos-delay="400">\n              <h3`
  }
]);

// 2. Services Page Animations
addAosToClasses("./src/app/services/page.tsx", [
  { // Hero Text
    search: /<div className="container position-relative z-2 text-center text-white"/g,
    replace: `<div className="container position-relative z-2 text-center text-white" data-aos="fade-up"`
  },
  { // Features Section Header
    search: /<h2 className="display-4 fw-bold mb-3"/g,
    replace: `<h2 className="display-4 fw-bold mb-3" data-aos="fade-up"`
  },
  { // Big Service Cards
    search: /<div key=\{idx\} className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5 bg-white"/g,
    replace: `<div key={idx} className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5 bg-white" data-aos="fade-up" data-aos-delay={idx * 100}`
  },
  { // Additional Services Header
    search: /<h2 className="display-5 fw-bold mb-3"/g,
    replace: `<h2 className="display-5 fw-bold mb-3" data-aos="fade-up"`
  },
  { // Additional Services Grid 
    search: /<div key=\{idx\} className="col-12 col-md-6 col-lg-4"/g,
    replace: `<div key={idx} className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}`
  }
]);

// 3. About Page Animations
addAosToClasses("./src/app/about/page.tsx", [
    { // Hero Text
      search: /<div className="container position-relative z-2 text-center text-white"/g,
      replace: `<div className="container position-relative z-2 text-center text-white" data-aos="fade-down"`
    },
    { // Story Section Image
      search: /<div className="col-lg-6 position-relative"/g,
      replace: `<div className="col-lg-6 position-relative" data-aos="fade-right"`
    },
    { // Story Section Text
      search: /<div className="col-lg-6 ps-lg-5"/g,
      replace: `<div className="col-lg-6 ps-lg-5" data-aos="fade-left"`
    },
    { // Values Header
      search: /<div className="text-center mb-5"/g,
      replace: `<div className="text-center mb-5" data-aos="fade-up"`
    },
    { // Value Cards (loop)
      search: /<div className="col-md-4"/g,
      replace: `<div className="col-md-4" data-aos="zoom-in" data-aos-delay="100"`
    }
]);

// 4. Contact Page Animations
addAosToClasses("./src/app/contact/page.tsx", [
    { // Hero
      search: /<div\s+className="container position-relative z-2 text-center text-white"\s+style=\{\{ maxWidth: "900px" \}\}\s+>/g,
      replace: `<div className="container position-relative z-2 text-center text-white" style={{ maxWidth: "900px" }} data-aos="fade-in">`
    },
    { // Contact Grid Base (left info)
      search: /<div className="col-lg-4 mb-5 mb-lg-0">/g,
      replace: `<div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">`
    },
    { // Contact Form (right form)
      search: /<div className="col-lg-8 ps-lg-5">/g,
      replace: `<div className="col-lg-8 ps-lg-5" data-aos="fade-left">`
    }
]);

console.log("Animation classes injected.");
