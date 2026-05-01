// 1. Class representing a scrolling header
class ScrollingHeader {
  // Constructor takes an element id to find the header element
  constructor(elementId) {
    this.header = document.getElementById(elementId);
    this.lastScrollPosition = 0;
  }

  // Method to update the visibility of the header based on scroll position
  update() {
    // Get current scroll position
    const currentScrollPosition = window.pageYOffset;

    // If scrolled down, hide the header
    if (currentScrollPosition > this.lastScrollPosition) {
      this.header.classList.remove('visible');
    }
    // If scrolled up, show the header
    else {
      this.header.classList.add('visible');
    }

    // Update the last scroll position to the current scroll position
    this.lastScrollPosition = currentScrollPosition;
  }
}

$(document).ready(() => {
  // Toggles visibility of nav-list when hamburger-menu is clicked
  $('.hamburger-menu').click(function () {
    $('.nav-list').slideToggle();
  });
});

// Code executed when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  // Initializing ScrollingHeader
  const header = new ScrollingHeader('hidden-header');

  // Update header for initial state
  header.update();

  // Function to toggle scroll-circle visibility
  const toggleScrollCircle = () => {
    const scroll = $(window).scrollTop();
    const headerVisible = $('#hidden-header').hasClass('visible');
    if (scroll > 0 && !headerVisible) {
      $('.scroll-circle').fadeIn();
    } else {
      $('.scroll-circle').fadeOut();
    }
  };

  // Update visibility of scroll-circle for initial state
  toggleScrollCircle();

  // Event listener for scroll event
  window.addEventListener('scroll', () => {
    // Update header on scroll
    header.update();

    // Update visibility of scroll-circle on scroll
    toggleScrollCircle();
  });
});

// Event listener for click on scroll-circle
const _scrollCircle = document.querySelector('.scroll-circle');
if (_scrollCircle) {
  _scrollCircle.addEventListener('click', () => {
    // Smooth scroll to top when the scroll-circle is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 3. Select all elements with the class 'work-heading'
const headings = document.querySelectorAll('.work-heading');

// Iterate over each heading
headings.forEach(heading => {
  // Add a 'mouseover' event listener to the heading
  heading.addEventListener('mouseover', function () {
    // Pause the animation of the parent element of the heading on mouseover
    this.parentElement.style.animationPlayState = 'paused';
  });

  // Add a 'mouseout' event listener to the heading
  heading.addEventListener('mouseout', function () {
    // Resume the animation of the parent element of the heading on mouseout
    this.parentElement.style.animationPlayState = 'running';
  });
});

// 6. Function to smoothly scroll to a section of the page
const scrollToSection = sectionId => {
  const section = document.getElementById(sectionId); // Get the section element

  // If section exists, scroll into view
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// Get all the menu links in the header
const menuLinks = document.querySelectorAll('#hidden-header nav ul li a');

// Add click event listener to each menu link
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default action (navigation)

    // Get the id of the target section from the href attribute of the link
    const targetSectionId = link.getAttribute('href').substring(1);

    // Scroll to the target section
    scrollToSection(targetSectionId);
  });
});

const getInTouchButton = document.getElementById('getInTouchButton');

if (getInTouchButton) {
  getInTouchButton.addEventListener('click', () => {
    scrollToSection('section-contact');
  });
}

// 7. Once the document content has been fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Array of section positions
  const sectionPositions = Array.from(
    document.querySelectorAll('.section')
  ).map(section => section.offsetTop);

  // Click event for .scroll-arrow22
  const scrollArrow22 = document.querySelector('.scroll-arrow22');
  if (scrollArrow22) {
    scrollArrow22.addEventListener('click', () => {
      // Get current scroll position
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Find the next section
      const nextSectionIndex = sectionPositions.findIndex(
        position => position > scrollPosition
      );

      // Scroll to the next section if it exists
      if (nextSectionIndex !== -1) {
        window.scrollTo({
          top: sectionPositions[nextSectionIndex],
          behavior: 'smooth', // Smooth scroll
        });
      }
    });
  }
});

// 8. List of icon IDs
const iconIds = ['facebook-icon', 'twitter-icon', 'linkedin-icon', 'facebook-icon-footer', 'twitter-icon-footer', 'linkedin-icon-footer'];

// Iterate over each icon ID
iconIds.forEach(iconId => {
  const iconElement = document.getElementById(iconId);
  if (!iconElement) return;

  // Add event listener for mouseover event to add 'animate' class
  iconElement.addEventListener('mouseover', () => {
    iconElement.classList.add('animate');
  });

  // Add event listener for mouseout event to remove 'animate' class
  iconElement.addEventListener('mouseout', () => {
    iconElement.classList.remove('animate');
  });
});

// 8. Main text on main screen
window.addEventListener('DOMContentLoaded', event => {
  // Query the elements
  const delayedText = document.querySelector('#delayedText');
  const delayedText1 = document.querySelector('#delayedText1');

  // A function to apply style changes to an element
  const showElement = element => {
    element.style.opacity = '1';
    element.style.transform = 'scale(1)';
  };

  // Using setTimeout to delay the style changes
  setTimeout(() => {
    showElement(delayedText);
    showElement(delayedText1);
  }, 1000);
});

// 9. Constants for our elements and texts
const DELAY_CLASS = '.delay';
const DELAY1_CLASS = '.delay1';
const TEXT_SORIN = "Hello! I'm<br>Sorin Rotaru";
const TEXT_ROTARU = 'Rotaru';

// Function to display block the class 'delay' and display text 'SORIN' over 'ROTARU'
function displayDelay() {
  const delayElement = document.querySelector(DELAY_CLASS);

  delayElement.style.display = 'block';
  delayElement.innerHTML = TEXT_SORIN;
  delayElement.style.textAlign = 'left';
  delayElement.classList.add('fadeInUp');

  // Create a new link element
  const copyrightLink = document.createElement('a');
  copyrightLink.href = 'http://www.terraconnect.co.uk';
  copyrightLink.textContent = ' ';
  copyrightLink.classList.add('copyright-link');

  // Append the new link element to the parent of the 'delay' element
  delayElement.parentNode.appendChild(copyrightLink);

  // Hide delay1 element after delay element is shown
  const delay1Element = document.querySelector(DELAY1_CLASS);
  delay1Element.style.display = 'none';
}

// Function to change the class 'delay' from display block to none,
// change the class 'delay1' to display block and display text 'ROTARU'
function changeClasses() {
  const delayElement = document.querySelector(DELAY_CLASS);
  delayElement.style.display = 'none';

  const delay1Element = document.querySelector(DELAY1_CLASS);
  delay1Element.style.display = 'block';

  // Create an element for each letter and animate them individually
  for (let i = 0; i < TEXT_ROTARU.length; i++) {
    const letter = document.createElement('span');
    letter.textContent = TEXT_ROTARU[i];
    letter.className = 'dropDown';
    letter.style.animationDelay = `${i * 0.1}s`;
    delay1Element.appendChild(letter);
  }

  // After 2.5s, display block the class delay and display text "SORIN ROTARU"
  setTimeout(displayDelay, 2500);
}

// After 3s from the refresh, the page will change classes and texts
window.onload = function () {
  setTimeout(changeClasses, 3000);
};

// 10. Selecting all SKILLS and EXPERIENCE links
const skillsLinks = document.querySelectorAll('.track .font1');
const expLinks = document.querySelectorAll('.track .font2');

// Boolean to control the color state
let isSolid = true;

// Function to apply styles to a collection of links
function applyStyle(links, color, textStroke) {
  for (const link of links) {
    link.style.color = color;
    link.style.textShadow = '0 0 2px rgba(0, 0, 0, 1)';
    link.style.webkitTextStroke = textStroke;
  }
}

function animateColorChange() {
  if (isSolid) {
    // Change SKILLS to hollow (white with black stroke) and EXPERIENCE to solid black
    applyStyle(skillsLinks, '#f8f8f8', '2px #10193d');
    applyStyle(expLinks, '#10193d', '2px #10193d');
  } else {
    // Change SKILLS to solid black and EXPERIENCE to hollow (white with black stroke)
    applyStyle(skillsLinks, '#10193d', '2px #10193d');
    applyStyle(expLinks, '#f8f8f8', '2px #10193d');
  }

  // Toggle the state for the next call
  isSolid = !isSolid;

  // Wait for 1s before changing again
  setTimeout(() => requestAnimationFrame(animateColorChange), 1000);
}

// Start the animation
requestAnimationFrame(animateColorChange);

// 11. Get audio elements and toggle icon
const hoverSoundMenu = document.getElementById('hoverSoundMenu');
const hoverSound = document.getElementById('hoverSound');
const hoverSoundLink = document.getElementById('hoverSoundLink');
const hoverSoundFace = document.getElementById('hoverSoundFace');
const _toggleButton = document.getElementById('toggleButton');
const toggleButtonIcon = _toggleButton ? _toggleButton.firstElementChild : null;

let soundEnabled = true;

// Function to play and stop a sound after a delay
const playSound = (sound, delay) => {
  if (soundEnabled) {
    sound.play();
    setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
    }, delay);
  }
};

// Function to toggle sound and update icon
const toggleSound = () => {
  soundEnabled = !soundEnabled;

  // Update classes based on soundEnabled
  if (soundEnabled) {
    if (toggleButtonIcon.classList.contains('fa-volume-xmark')) {
      toggleButtonIcon.classList.remove('fa-volume-xmark');
    }
    toggleButtonIcon.classList.add('fa-volume');
  } else {
    if (toggleButtonIcon.classList.contains('fa-volume')) {
      toggleButtonIcon.classList.remove('fa-volume');
    }
    toggleButtonIcon.classList.add('fa-volume-xmark');
  }
};

// Bind click events to elements with given ids and sounds with given delays
const bindClickEvents = idSoundDelayPairs => {
  idSoundDelayPairs.forEach(({ id, sound, delay }) => {
    document
      .getElementById(id)
      .addEventListener('click', () => playSound(sound, delay));
  });
};

// Bind click events
bindClickEvents([
  { id: 'hoverMeAwards', sound: hoverSoundMenu, delay: 500 },
  { id: 'hoverMePortfolio', sound: hoverSoundMenu, delay: 500 },
  { id: 'hoverMeAbout', sound: hoverSoundMenu, delay: 500 },
  { id: 'hoverMeHome', sound: hoverSoundMenu, delay: 500 },
  { id: 'hoverMeContact', sound: hoverSoundMenu, delay: 500 },
  { id: 'hoverMeUp', sound: hoverSoundMenu, delay: 500 },
  { id: 'hoverMeScroll', sound: hoverSoundMenu, delay: 500 },
  { id: 'hoverMeArrow', sound: hoverSoundMenu, delay: 500 },
  { id: 'hoverMe', sound: hoverSound, delay: 2000 },
  { id: 'linkMe', sound: hoverSoundLink, delay: 2000 },
  { id: 'faceMe', sound: hoverSoundFace, delay: 2000 },
]);

// Bind toggle button click event
if (_toggleButton) _toggleButton.addEventListener('click', toggleSound);

// 12......
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('#hidden-header nav ul li a');

  // Add click event listener to each menu item
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function () {
      // Remove the 'active' class from all menu items
      menuItems.forEach(item => item.classList.remove('active'));

      // Add the 'active' class to the clicked menu item
      this.classList.add('active');
    });
  });
});

// 13. Add a scroll event listener
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPos =
    document.documentElement.scrollTop || document.body.scrollTop;
  // Get the menu items
  const menuItems = document.querySelectorAll('#hidden-header nav ul li a');
  // Get all the content divs
  const contentDivs = document.querySelectorAll('.content > div');

  // Loop through each section
  contentDivs.forEach(currSection => {
    const sectionId = currSection.getAttribute('id');
    const offsetTop = currSection.offsetTop - 100;

    // Check if the current section is in view
    if (scrollPos >= offsetTop) {
      // Remove the 'active' class from all menu items
      menuItems.forEach(item => item.classList.remove('active'));

      // Add the 'active' class to the corresponding menu item
      menuItems.forEach(item => {
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
});

// 14. Hamburger
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');
  const navList = document.getElementById('nav-list');
  const socialNetwork = document.getElementById('social-network');
  const body = document.body;
  const delayedText = document.getElementById('delayedText');
  const delayedText1 = document.getElementById('delayedText1');
  const scrollCircle = document.querySelector('.scroll-circle');
  const navLinks = document.querySelectorAll('.nav-list a');

  const burger = document.querySelector('.burger');
  const sectionIds = [
    'section-home',
    'section-about',
    'section-portfolio',
    'section-awards',
    'section-contact',
  ];
  const fallbackSectionColors = {
    'section-home': '#e4c1f9',
    'section-about': '#f8f8f8',
    'section-portfolio': '#e4c1f9',
    'section-awards': '#f8f8f8',
    'section-contact': '#e4c1f9',
  };
  const sections = sectionIds
    .map(sectionId => document.getElementById(sectionId))
    .filter(Boolean);

  function getSectionBackground(section) {
    let element = section;

    while (element && element !== document.documentElement) {
      const backgroundColor = window.getComputedStyle(element).backgroundColor;

      if (
        backgroundColor &&
        backgroundColor !== 'rgba(0, 0, 0, 0)' &&
        backgroundColor !== 'transparent'
      ) {
        return backgroundColor;
      }

      element = element.parentElement;
    }

    return fallbackSectionColors[section.id] || '#f8f8f8';
  }

  function getCurrentSection() {
    if (!burger || !sections.length) return null;
    const burgerRect = burger.getBoundingClientRect();
    const probeY = burgerRect.top + burgerRect.height / 2;
    const sectionBehindBurger = sections.find(section => {
      const sectionRect = section.getBoundingClientRect();

      return sectionRect.top <= probeY && sectionRect.bottom > probeY;
    });

    if (sectionBehindBurger) {
      return sectionBehindBurger;
    }

    return sections.reduce((currentSection, section) => {
      return section.getBoundingClientRect().top <= probeY
        ? section
        : currentSection;
    }, sections[0]);
  }

  function updateBurgerBackground() {
    const currentSection = getCurrentSection();
    if (!currentSection) return;
    const currentColor = getSectionBackground(currentSection);

    if (burger) burger.style.backgroundColor = currentColor;
    if (navList) navList.style.backgroundColor = currentColor;
    if (hamburger) {
      hamburger.style.backgroundColor = hamburger.classList.contains('active')
        ? currentColor
        : '';
    }
  }

  if (!hamburger || !burgerIcon || !closeIcon || !navList) {
    return;
  }

  burgerIcon.addEventListener('click', function () {
    // Set hamburger and other elements to active state on burger click
    [hamburger, navList, socialNetwork].filter(Boolean).forEach(el =>
      el.classList.add('active')
    );
    // Toggle visibility of burger, close icons, and delayed texts
    [burgerIcon, delayedText, delayedText1, scrollCircle].filter(Boolean).forEach(
      el => (el.style.display = 'none')
    );
    closeIcon.style.display = 'block';
    body.style.overflow = 'hidden'; // Disable scrolling
    updateBurgerBackground();
  });

  function closeMenu() {
    // Reset hamburger and other elements to non-active state on close
    [hamburger, navList, socialNetwork].filter(Boolean).forEach(el =>
      el.classList.remove('active')
    );
    // Toggle visibility of burger, close icons, and delayed texts
    [burgerIcon, delayedText].filter(Boolean).forEach(el => (el.style.display = 'block'));
    [closeIcon, delayedText1].filter(Boolean).forEach(el => (el.style.display = 'none'));
    body.style.overflow = 'auto'; // Enable scrolling
    updateBurgerBackground();
  }

  closeIcon.addEventListener('click', closeMenu);

  // Close the menu when any nav link is clicked
  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  updateBurgerBackground();
  window.addEventListener('scroll', updateBurgerBackground);
  window.addEventListener('resize', updateBurgerBackground);
});

// 15. Obtain reference to the required DOM elements only onces
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const envelope = document.getElementById('envelope');
  const sent = document.getElementById('sent');
  const letsTalk = document.querySelector('.lets-talk');
  const contactForm = document.querySelector('#contactForm');
  const contactMessage = document.querySelector('#contact-message');

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    envelope.classList.add('closed');
    if (letsTalk) letsTalk.style.display = 'none';
    // Reset after 6 seconds so user can submit again
    setTimeout(() => {
      envelope.classList.remove('closed');
      if (letsTalk) letsTalk.style.display = 'block';
      if (form) form.reset();
    }, 6000);
  }

  // Function to handle contact form submission
  function handleContactFormSubmit(event) {
    event.preventDefault();
    contactMessage.value = 'Message sent!';
    envelope.classList.add('closed');
    letsTalk.style.display = 'none';

    setTimeout(() => {
      envelope.classList.remove('closed');
      letsTalk.style.display = 'block';
      contactForm.reset(); // Reset the form after submission
    }, 100);
  }

  // Function to reset form and envelope
  function resetFormAndEnvelope() {
    if (form) form.reset();
    if (envelope) envelope.classList.remove('closed');
    if (sent) sent.style.display = 'none';
    if (envelope) envelope.classList.add('hidden-mail'); // Hide the envelope when it's out of view
    if (letsTalk) letsTalk.style.display = 'block';
  }

  // IntersectionObserver initialization to reset form when not in view
  let contactObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (envelope) envelope.classList.remove('hidden-mail'); // Show the envelope when it's in view
        } else {
          resetFormAndEnvelope();
        }
      });
    },
    { threshold: 0.5 }
  );

  // Start observing the contact section for visibility changes
  contactObserver.observe(document.getElementById('section-contact'));

  // Add the form submission event listener
  if (form) form.addEventListener('submit', handleFormSubmit);

  // Add the contact form submission event listener
  if (contactForm)
    contactForm.addEventListener('submit', handleContactFormSubmit);
});

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showOnScroll() {
  var elements = document.getElementsByClassName('award-item');
  var newlyVisible = 0;

  Array.from(elements).forEach(function (element) {
    if (
      isElementInViewport(element) &&
      !element.classList.contains('animate-education-box')
    ) {
      element.style.animationDelay = newlyVisible * 0.13 + 's';
      element.classList.add('animate-education-box');
      newlyVisible++;
    }
  });
}

window.addEventListener('scroll', showOnScroll);

document.addEventListener('DOMContentLoaded', function () {
  const portfolioItems = document.querySelectorAll(
    '#section-portfolio .portfolio-item'
  );

  function closePortfolioItem(item) {
    const submenu = item.querySelector('.submenu');
    const submenuLinks = item.querySelectorAll('.submenu a');

    item.classList.remove('active');
    item.setAttribute('aria-expanded', 'false');
    submenuLinks.forEach(link => link.setAttribute('tabindex', '-1'));

    if (submenu) {
      submenu.setAttribute('aria-hidden', 'true');
    }
  }

  function openPortfolioItem(item) {
    const submenu = item.querySelector('.submenu');
    const submenuLinks = item.querySelectorAll('.submenu a');

    portfolioItems.forEach(closePortfolioItem);
    item.classList.add('active');
    item.setAttribute('aria-expanded', 'true');
    submenuLinks.forEach(link => link.removeAttribute('tabindex'));

    if (submenu) {
      submenu.setAttribute('aria-hidden', 'false');
    }
  }

  portfolioItems.forEach(item => {
    const submenu = item.querySelector('.submenu');

    item.setAttribute('aria-expanded', 'false');
    item.setAttribute('tabindex', '0');

    if (submenu) {
      submenu.setAttribute('aria-hidden', 'true');
    }

    item
      .querySelectorAll('.submenu a')
      .forEach(link => link.setAttribute('tabindex', '-1'));

    function togglePortfolioItem(event) {
      if (event.target.closest('.submenu')) {
        return;
      }

      if (item.classList.contains('active')) {
        closePortfolioItem(item);
        return;
      }

      openPortfolioItem(item);
    }

    item.addEventListener('click', togglePortfolioItem);

    item.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      if (event.target.closest('.submenu')) {
        return;
      }

      event.preventDefault();
      togglePortfolioItem(event);
    });
  });
});

// EMAIL Get the form element
const _emailForm = document.getElementById('form');

// Listen to form submit event
if (_emailForm) {
  _emailForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let params = {
      from_name: document.getElementById('first_name').value,
      email_address: document.getElementById('email_address').value,
      message: document.getElementById('message').value,
    };

    if (typeof emailjs !== 'undefined') {
      emailjs.send('service_sye18cs', 'template_gu01c8s', params).then(
        function (res) {},
        function (error) {
          console.error('Email send error:', error);
        }
      );
    }
  });
}

// Footer year auto-update
document.addEventListener('DOMContentLoaded', function () {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});
