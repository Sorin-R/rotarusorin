// 1. Function to toggle the header visibility

class ScrollingHeader {
    constructor(elementId) {
      this.header = document.getElementById(elementId);
      this.lastScrollPosition = 0;
    }
  
    update() {
      const currentScrollPosition = window.pageYOffset;
  
      if (currentScrollPosition > this.lastScrollPosition) {
        // Scrolling down
        this.header.classList.remove('visible');
      } else {
        // Scrolling up
        this.header.classList.add('visible');
      }
  
      // Save the new position for next time
      this.lastScrollPosition = currentScrollPosition;
    }
  }
  
  // 2. Hamburger
  $(document).ready(function () {
    $('.hamburger-menu').click(function () {
      $('.nav-list').slideToggle();
    });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const header = new ScrollingHeader('hidden-header');
  
    // Initial state
    header.update();
  
    window.addEventListener('scroll', () => header.update());
  });
  
  // 3. Scroll to top when the scroll circle is clicked
  document.querySelector('.scroll-circle').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const header = new ScrollingHeader('hidden-header');
  
    // Initial state
    header.update();
  
    // Initial state of the scroll-circle
    const scroll = $(window).scrollTop();
    const headerVisible = $('#hidden-header').hasClass('visible');
  
    if (scroll > 0 && !headerVisible) {
      $('.scroll-circle').fadeIn();
    } else {
      $('.scroll-circle').fadeOut();
    }
  
    window.addEventListener('scroll', () => {
      header.update();
      const scroll = $(window).scrollTop();
      const headerVisible = $('#hidden-header').hasClass('visible');
      if (scroll > 0 && !headerVisible) {
        $('.scroll-circle').fadeIn();
      } else {
        $('.scroll-circle').fadeOut();
      }
    });
  });
  
  // 4. Scroll to top when the scroll circle is clicked
  const headings = document.querySelectorAll('.work-heading');
  
  headings.forEach(heading => {
    heading.addEventListener('mouseover', function () {
      this.parentElement.style.animationPlayState = 'paused';
    });
  
    heading.addEventListener('mouseout', function () {
      this.parentElement.style.animationPlayState = 'running';
    });
  });
  // 5. box 1
  // Select the elements
  const container = document.querySelector('.container');
  const experienceBox = document.querySelector('.experience-box');
  
  // Define the options
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };
  
  // Define the callback
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          experienceBox.style.transform = 'translateY(0) scale(1.05)'; // Make the box drop down and scale up
        }, 300); // Delay of 1 second
      } else {
        experienceBox.style.transform = 'translateY(-132%) scale(1)'; // Hide the box above and scale back to normal
      }
    });
  };
  
  // Create the observer
  const observer = new IntersectionObserver(callback, options);
  
  // Start observing
  observer.observe(container);
  
  //6
  window.addEventListener('scroll', function () {
    var circle = document.getElementById('circle');
    var scrollPosition = window.scrollY;
  
    // Assuming "that level of the site" is at 500px scroll
    if (scrollPosition >= 500 && !circle.classList.contains('active')) {
      circle.classList.add('active');
      setTimeout(function () {
        circle.classList.add('rotate');
      }, 1000); // Starts rotating 2s after appearing
    } else if (scrollPosition < 500) {
      circle.classList.remove('active', 'rotate');
    }
  });
  
  // 7.
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const menuLinks = document.querySelectorAll('#hidden-header nav ul li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetSectionId = link.getAttribute('href').substring(1);
      scrollToSection(targetSectionId);
    });
  });
  
  //  8. next section
  $(document).ready(() => {
    // Array of section positions
    const sectionPositions = $('.section')
      .map(function () {
        return $(this).position().top;
      })
      .get();
  
    // Click event for .scroll-arrow22
    $('.scroll-arrow22').click(() => {
      // Get current scroll position
      const scrollPosition = $(window).scrollTop();
  
      // Find the next section
      const nextSectionIndex = sectionPositions.findIndex(
        position => position > scrollPosition
      );
  
      // Scroll to the next section if it exists
      if (nextSectionIndex !== -1) {
        $('html, body').animate(
          {
            scrollTop: sectionPositions[nextSectionIndex],
          },
          1000
        ); // Scroll speed, in milliseconds
      }
    });
  });
  
  // 9.
  document.getElementById('facebook-icon').addEventListener('mouseover', () => {
    document.getElementById('facebook-icon').classList.add('animate');
  });
  
  document.getElementById('facebook-icon').addEventListener('mouseout', () => {
    document.getElementById('facebook-icon').classList.remove('animate');
  });
  
  document
    .getElementById('twitter-icon', 'linkedin-icon')
    .addEventListener('mouseover', () => {
      document
        .getElementById('twitter-icon', 'linkedin-icon')
        .classList.add('animate');
    });
  
  document
    .getElementById('twitter-icon', 'linkedin-icon')
    .addEventListener('mouseout', () => {
      document
        .getElementById('twitter-icon', 'linkedin-icon')
        .classList.remove('animate');
    });
  
  document.getElementById('linkedin-icon').addEventListener('mouseover', () => {
    document.getElementById('linkedin-icon').classList.add('animate');
  });
  
  document.getElementById('linkedin-icon').addEventListener('mouseout', () => {
    document.getElementById('linkedin-icon').classList.remove('animate');
  });
  
  //------
  
  // 10. Text on main page
  window.addEventListener('DOMContentLoaded', event => {
    const delayedText = document.querySelector('#delayedText');
    setTimeout(() => {
      delayedText.style.opacity = '1';
      delayedText.style.transform = 'scale(1)';
      // delayedText.style.fontSize = '150px';
    }, 1000);
  });
  
  window.addEventListener('DOMContentLoaded', event => {
    const delayedText1 = document.querySelector('#delayedText1');
    setTimeout(() => {
      delayedText1.style.opacity = '1';
      delayedText1.style.transform = 'scale(1)';
      // delayedText1.style.fontSize = '150px';
    }, 1000);
  });
  
  // Select SKILLS links and EXPERIENCE links separately
  const skillsLinks = document.querySelectorAll('.track .font1');
  const expLinks = document.querySelectorAll('.track .font2');
  
  // Initial color state (solid black)
  let isSolid = true;
  
  function animateColorChange() {
    if (isSolid) {
      // Change SKILLS to hollow and EXPERIENCE to solid
      for (const link of skillsLinks) {
        link.style.color = 'White';
        link.style.textShadow = '0 0 2px rgba(0, 0, 0, 1)';
        link.style.webkitTextStroke = '3px black';
      }
      for (const link of expLinks) {
        link.style.color = 'black';
        link.style.textShadow = '0 0 2px rgba(0, 0, 0, 1)';
        link.style.webkitTextStroke = '0';
      }
  
      // Wait for 2s before turning back
      isSolid = false;
      setTimeout(() => requestAnimationFrame(animateColorChange), 1000);
    } else {
      // Change SKILLS to solid and EXPERIENCE to hollow
      for (const link of skillsLinks) {
        link.style.color = 'black';
        link.style.textShadow = '0 0 2px rgba(0, 0, 0, 1)';
        link.style.webkitTextStroke = '0';
      }
      for (const link of expLinks) {
        link.style.color = 'white';
        link.style.textShadow = '0 0 2px rgba(0, 0, 0, 1)';
        link.style.webkitTextStroke = '3px black';
      }
  
      // Wait for 2s before turning back
      isSolid = true;
      setTimeout(() => requestAnimationFrame(animateColorChange), 1000);
    }
  }
  
  // Start the animation
  requestAnimationFrame(animateColorChange);
  
  //-------
  
  // 12.
  
  // Function to display block the class 'delay' and display text 'SORIN' over 'ROTARU'
  function displayDelay() {
    let delayElement = document.querySelector('.delay');
    delayElement.style.display = 'block';
    delayElement.innerHTML = "I'M<br>SORIN<br>ROTARU"; // Use innerHTML to interpret the <br> tag
    delayElement.style.textAlign = 'left'; // Align the text to the left
    delayElement.classList.add('fadeInUp'); // Add the fadeInUp class to animate the text
  
    // Create a new link element
    let copyrightLink = document.createElement('a');
    copyrightLink.href = 'http://www.terraconnect.co.uk';
    copyrightLink.textContent = 'Copyright by www.terraconnect.co.uk';
    copyrightLink.classList.add('copyright-link');
  
    // Append the new link element to the parent of the 'delay' element
    delayElement.parentNode.appendChild(copyrightLink);
  
    let delay1Element = document.querySelector('.delay1');
    delay1Element.style.display = 'none';
  }
  
  // Function to change the class 'delay' from display block to none,
  // change the class 'delay1' to display block and display text 'ROTARU'
  function changeClasses() {
    let delayElement = document.querySelector('.delay');
    delayElement.style.display = 'none';
  
    let delay1Element = document.querySelector('.delay1');
    delay1Element.style.display = 'block';
  
    // Create an element for each letter and animate them individually
    let text = 'ROTARU';
    for (let i = 0; i < text.length; i++) {
      let letter = document.createElement('span');
      letter.textContent = text[i];
      letter.className = 'dropDown';
      letter.style.animationDelay = i * 0.1 + 's'; // Each letter starts animating 0.1s after the previous one
      delay1Element.appendChild(letter);
    }
  
    // After 2s, display block the class delay and display text "SORIN ROTARU"
    setTimeout(displayDelay, 2500);
  }
  
  // After 4s from the refresh, the page will change classes and texts
  window.onload = function () {
    setTimeout(changeClasses, 3000);
  };
  
  // 13. Twiter sound hoverMeScroll
  
  const hoverSoundMenu = document.getElementById('hoverSoundMenu');
  const hoverSound = document.getElementById('hoverSound');
  const hoverSoundLink = document.getElementById('hoverSoundLink');
  const hoverSoundFace = document.getElementById('hoverSoundFace');
  const toggleButtonIcon =
    document.getElementById('toggleButton').firstElementChild;
  
  let soundEnabled = true;
  
  const playSound = () => {
    if (soundEnabled) {
      hoverSoundMenu.play();
      setTimeout(() => {
        hoverSoundMenu.pause();
        hoverSoundMenu.currentTime = 0;
      }, 500);
    }
  };
  
  const playSoundTwitter = () => {
    if (soundEnabled) {
      hoverSound.play();
      setTimeout(() => {
        hoverSound.pause();
        hoverSound.currentTime = 0;
      }, 2000);
    }
  };
  
  const playSoundLink = () => {
    if (soundEnabled) {
      hoverSoundLink.play();
      setTimeout(() => {
        hoverSoundLink.pause();
        hoverSoundLink.currentTime = 0;
      }, 2000);
    }
  };
  
  const playSoundFace = () => {
    if (soundEnabled) {
      hoverSoundFace.play();
      setTimeout(() => {
        hoverSoundFace.pause();
        hoverSoundFace.currentTime = 0;
      }, 2000);
    }
  };
  
  const stopSound = () => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  };
  
  const toggleSound = () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      toggleButtonIcon.classList.remove('fa-volume-xmark');
      toggleButtonIcon.classList.add('fa-volume');
    } else {
      toggleButtonIcon.classList.remove('fa-volume');
      toggleButtonIcon.classList.add('fa-volume-xmark');
    }
  };
  
  document.getElementById('hoverMeAwards').addEventListener('click', playSound);
  document
    .getElementById('hoverMePortfolio')
    .addEventListener('click', playSound);
  document.getElementById('hoverMeAbout').addEventListener('click', playSound);
  document.getElementById('hoverMeHome').addEventListener('click', playSound);
  document.getElementById('hoverMeContact').addEventListener('click', playSound);
  document.getElementById('hoverMeUp').addEventListener('click', playSound);
  document.getElementById('hoverMeScroll').addEventListener('click', playSound);
  document.getElementById('hoverMeArrow').addEventListener('click', playSound);
  document.getElementById('hoverMe').addEventListener('click', playSoundTwitter);
  document.getElementById('linkMe').addEventListener('click', playSoundLink);
  document.getElementById('faceMe').addEventListener('click', playSoundFace);
  document.getElementById('toggleButton').addEventListener('click', toggleSound);
  
  // Menu Color
  
  document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('#hidden-header nav ul li a');
  
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function () {
        // Remove the 'active' class from all menu items
        for (var j = 0; j < menuItems.length; j++) {
          menuItems[j].classList.remove('active');
        }
  
        // Add the 'active' class to the clicked menu item
        this.classList.add('active');
      });
    }
  });
  
  $(document).ready(function () {
    // Get the menu items
    var menuItems = $('#hidden-header nav ul li a');
  
    // Add a scroll event listener
    $(window).scroll(function () {
      // Get the current scroll position
      var scrollPos = $(document).scrollTop();
  
      // Loop through each section
      $('.content > div').each(function () {
        var currSection = $(this);
        var sectionId = currSection.attr('id');
        var offsetTop = currSection.offset().top - 100;
  
        // Check if the current section is in view
        if (scrollPos >= offsetTop) {
          // Remove the 'active' class from all menu items
          menuItems.removeClass('active');
  
          // Add the 'active' class to the corresponding menu item
          menuItems.each(function () {
            if ($(this).attr('href') === '#' + sectionId) {
              $(this).addClass('active');
            }
          });
        }
      });
    });
  });
  
  //Hamburger
  
  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const burgerIcon = document.getElementById('burger-icon');
    const closeIcon = document.getElementById('close-icon');
    const navList = document.getElementById('nav-list');
    const socialNetwork = document.getElementById('social-network');
    const body = document.body;
    const delayedText = document.getElementById('delayedText'); // Fetch delayText element
    const delayedText1 = document.getElementById('delayedText1'); // Fetch delayText1 element
    const scrollCircle = document.querySelector('.scroll-circle');
    const navLinks = document.querySelectorAll('.nav-list a');
  
    // Handle click on burger icon
    burgerIcon.addEventListener('click', function () {
      hamburger.classList.add('active');
      burgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      navList.classList.add('active');
      socialNetwork.classList.add('active');
      body.style.overflow = 'hidden'; // Disable scrolling
      delayedText.style.display = 'none';
      delayedText1.style.display = 'none';
      scrollCircle.style.display = 'none';
    });
  
    // Close menu function
    function closeMenu() {
      hamburger.classList.remove('active');
      burgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      navList.classList.remove('active');
      socialNetwork.classList.remove('active');
      body.style.overflow = 'auto'; // Enable scrolling
      delayedText.style.display = 'block';
      delayedText1.style.display = 'none';
      // scrollCircle.style.display = 'block';
    }
  
    // Handle click on close icon
    closeIcon.addEventListener('click', closeMenu);
  
    // Handle click on nav links
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', closeMenu);
    }
  });
  
  //HAMBURGER BACKGROUND
  
  document.addEventListener('DOMContentLoaded', function () {
    const sectionIds = [
      'section-home',
      'section-about',
      'section-contact',
      'section-portfolio',
      'section-awards',
    ];
    const colors = ['#1e90ff', '#b6a9ce', '#be8199', '#447294', '#3c4770'];
  
    const burger = document.querySelector('.burger');
  
    window.addEventListener('scroll', function () {
      // Calculate the current section index based on scroll position
      const sectionIndex = Math.floor(window.scrollY / window.innerHeight);
  
      // Use the section index to set the burger background color
      if (sectionIds.includes(sectionIds[sectionIndex])) {
        burger.style.backgroundColor = colors[sectionIndex];
      } else {
        burger.style.backgroundColor = '#1e90ff'; // Default color
      }
    });
  });
  
  // CONTACTS FORM
  
  // Add an event listener to the form to add the 'closed' class when submitted
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('envelope').classList.add('closed');
    document.getElementById('sent').style.display = 'block'; // Show the 'SENT' text
  });
  
  // Define a function to reset the form and envelope
  function resetFormAndEnvelope() {
    // Get the form and envelope elements
    const form = document.getElementById('form');
    const envelope = document.getElementById('envelope');
  
    // Reset the form fields
    form.reset();
  
    // Reset the envelope
    envelope.classList.remove('closed');
  
    // Hide the 'SENT' text
    document.getElementById('sent').style.display = 'none';
  }
  
  // Create an Intersection Observer to watch the contact section
  let contactObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        // If the section is not in view, reset the form, envelope, and hide the 'SENT' text
        if (!entry.isIntersecting) {
          resetFormAndEnvelope();
        }
      });
    },
    { threshold: 0.5 }
  );
  
  // Observe the contact section
  contactObserver.observe(document.getElementById('section-contact'));
  
  document.querySelector('#contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelector('#contact-message').value = 'Message sent!';
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('closed');
  
    setTimeout(function () {
      envelope.classList.remove('closed');
      document.querySelector('.form').style.visibility = 'visible'; // Add this line
    }, 100);
  });
  