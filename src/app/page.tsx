"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Amenities",          id: "#amenities"},
        {
          name: "Rooms",          id: "#rooms"},
        {
          name: "Highlights",          id: "#highlights"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "FAQs",          id: "#faqs"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Lamar Azur Hotel"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      title="Experience Unparalleled Luxury at Lamar Azur Hotel"
      description="Discover a tranquil escape where modern elegance meets breathtaking coastal beauty. Your unforgettable retreat begins here."
      testimonials={[
        {
          name: "Amina S.",          handle: "@AminaTravels",          testimonial: "The Lamar Azur Hotel exceeded all my expectations. Impeccable service and stunning views!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-posing_23-2148497205.jpg",          imageAlt: "Amina S. profile picture"},
        {
          name: "Omar K.",          handle: "@OmarExperiences",          testimonial: "A true gem in Damietta. Every detail was perfect, from the luxurious rooms to the exquisite dining.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/squeamish-middle-aged-man-wearing-white-t-shirt-with-tie-isolated-orange-wall_141793-82760.jpg",          imageAlt: "Omar K. profile picture"},
        {
          name: "Layla M.",          handle: "@LaylaGetaways",          testimonial: "My family and I had an incredible time. The kids loved the pool, and the staff were incredibly attentive.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-portrait-outdoor_624325-3559.jpg",          imageAlt: "Layla M. profile picture"},
        {
          name: "Ahmed F.",          handle: "@AhmedJourneys",          testimonial: "Absolutely magnificent! The spa was a highlight, and the serene ambiance was exactly what I needed.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/emotional-handsome-mature-man-wearing-jacket-looking-front-with-okay-single-gesture-against-violet-wall_496169-1093.jpg",          imageAlt: "Ahmed F. profile picture"},
        {
          name: "Sarah H.",          handle: "@SarahExplores",          testimonial: "World-class hospitality and stunning design. This hotel is a must-visit for anyone seeking luxury.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/coronavirus-vaccination-campaign-concept-happy-healthy-girl-showing-shoulder-with-patch-after-getting-vaccine-from-covid-yellow-background_1258-300964.jpg",          imageAlt: "Sarah H. profile picture"},
      ]}
      tag="Welcome to Paradise"
      buttons={[
        {
          text: "Book Your Stay",          href: "#contact"},
        {
          text: "Explore Rooms",          href: "#rooms"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/joyful-woman-black-jacket-liking-lip-posing-isolated-background-charming-lady-dark-suit-smiling-white-backdrop_197531-18516.jpg",          alt: "Guest 1"},
        {
          src: "http://img.b2bpic.net/free-photo/unpleased-middle-aged-man-wearing-white-t-shirt-with-tie-isolated-pink-wall_141793-90415.jpg",          alt: "Guest 2"},
        {
          src: "http://img.b2bpic.net/free-photo/young-blonde-woman-smiling-confident-standing-park_839833-27191.jpg",          alt: "Guest 3"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-senior-man-white-tee-portrait_53876-105233.jpg",          alt: "Guest 4"},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-posing_23-2148497205.jpg",          alt: "Guest 5"},
      ]}
      avatarText="Loved by thousands of guests"
      imageSrc="http://img.b2bpic.net/free-photo/modern-sauna-interior-with-mountain-view-wood-light_169016-70841.jpg?_wi=1"
      imageAlt="Lamar Azur Hotel luxurious lobby"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/summer-sky-bungalow-palm-swimming_1253-648.jpg",          alt: "Summer sky bungalow palm swimming"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/umbrella-chair-pool_1203-7230.jpg",          alt: "Umbrella and chair pool"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/portrait-young-asian-woman-relax-smile-happy-around-outdoor-swimming-pool-hotel-resort-with-sea-ocean-view_74190-9025.jpg",          alt: "Hotel guest relaxing by the pool"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relax-happy-smile-leisure-around-outdoor-swimming-pool_74190-11167.jpg",          alt: "Woman smiling by outdoor swimming pool"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relax-happy-smile-leisure-around-outdoor-swimming-pool_74190-11166.jpg",          alt: "Guest enjoying hotel swimming pool"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Our Story"
      title="A Legacy of Exceptional Hospitality in Damietta El-Gadeeda"
      buttons={[
        {
          text: "Learn More About Us",          href: "#"},
        {
          text: "Explore Our Services",          href: "#amenities"},
      ]}
    />
  </div>

  <div id="amenities" data-section="amenities">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="World-Class Amenities Await Your Discovery"
      description="From our pristine infinity pools to gourmet dining and rejuvenating spa services, every detail at Lamar Azur Hotel is meticulously crafted for your utmost pleasure and relaxation."
      tag="Indulge Your Senses"
      accordionItems={[
        {
          id: "1",          title: "Luxurious Rooms & Suites",          content: "Experience ultimate comfort in our elegantly designed rooms and spacious suites, each offering stunning views and premium amenities."},
        {
          id: "2",          title: "Exquisite Dining Experiences",          content: "Savor culinary masterpieces at our diverse restaurants, offering local delicacies and international cuisine in breathtaking settings."},
        {
          id: "3",          title: "Infinity Pool & Private Beach",          content: "Dive into relaxation at our stunning infinity pool overlooking the sea, or unwind on our exclusive private beach."},
        {
          id: "4",          title: "Rejuvenating Spa & Wellness",          content: "Escape to our tranquil spa for a holistic experience, with treatments designed to revitalize your body and mind."},
        {
          id: "5",          title: "State-of-the-Art Fitness Center",          content: "Maintain your routine in our fully equipped fitness center, offering modern equipment and personalized training options."},
        {
          id: "6",          title: "Dedicated Event Spaces",          content: "Host unforgettable events in our versatile meeting rooms and elegant ballrooms, perfect for weddings, conferences, and celebrations."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relax-happy-smile-leisure-around-outdoor-swimming-pool_74190-11172.jpg"
      imageAlt="Lamar Azur Hotel infinity pool overlooking the ocean"
      mediaAnimation="slide-up"
      mediaPosition="right"
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Deluxe King Room",          price: "EGP 4,005/night",          variant: "Spacious comfort",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-frankenstein-sitting-table_23-2149636929.jpg",          imageAlt: "Deluxe King Room at Lamar Azur Hotel"},
        {
          id: "2",          name: "Executive Suite",          price: "EGP 6,500/night",          variant: "Luxury & Space",          imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_74190-3649.jpg",          imageAlt: "Executive Suite living area"},
        {
          id: "3",          name: "Family Ocean View",          price: "EGP 5,200/night",          variant: "Seaside Escape",          imageSrc: "http://img.b2bpic.net/free-photo/bed-pillow_74190-129.jpg",          imageAlt: "Family Ocean View Room with multiple beds"},
        {
          id: "4",          name: "Premier Ocean View",          price: "EGP 4,800/night",          variant: "Breathtaking Views",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-asian-woman-relax-smile-happy-around-swimming-pool-hotel-resort_74190-8862.jpg",          imageAlt: "Premier Ocean View Room balcony"},
        {
          id: "5",          name: "Standard Double Room",          price: "EGP 3,200/night",          variant: "Cozy & Modern",          imageSrc: "http://img.b2bpic.net/free-photo/white-towel-table-bathroom-take-bath-shower_74190-13282.jpg",          imageAlt: "Standard Double Room interior"},
        {
          id: "6",          name: "Grand Executive Suite",          price: "EGP 8,000/night",          variant: "Ultimate Luxury",          imageSrc: "http://img.b2bpic.net/free-photo/two-businesspeople-sitting-together-checking-document-caf_23-2147876718.jpg",          imageAlt: "Grand Executive Suite with separate living room"},
      ]}
      title="Discover Our Elegant Accommodations & Suites"
      description="Each room and suite at Lamar Azur Hotel is a sanctuary of comfort, designed with modern aesthetics and equipped with premium amenities to ensure a restful and memorable stay."
      tag="Your Perfect Stay"
    />
  </div>

  <div id="highlights" data-section="highlights">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "668+",          title: "Positive Reviews",          description: "Our guests consistently share their exceptional experiences.",          imageSrc: "http://img.b2bpic.net/free-photo/successful-happy-business-team_53876-15147.jpg",          imageAlt: "Happy diverse group of people"},
        {
          id: "2",          value: "10+",          title: "Years of Service",          description: "Proudly serving guests with luxury hospitality for over a decade.",          imageSrc: "http://img.b2bpic.net/free-photo/sunny-urban-landscape_23-2149504779.jpg",          imageAlt: "Elegant hotel historical building"},
        {
          id: "3",          value: "4.3",          title: "Star Rating",          description: "Consistently recognized for our high standards of service and amenities.",          imageSrc: "http://img.b2bpic.net/free-photo/winner-concept-with-golden-balloons_23-2149059967.jpg",          imageAlt: "Golden award trophy"},
        {
          id: "4",          value: "120+",          title: "Rooms & Suites",          description: "A wide selection of accommodations to suit every preference and need.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-hotel-insights-details_23-2149160766.jpg",          imageAlt: "Luxurious empty hotel room"},
      ]}
      title="A Commitment to Unforgettable Experiences"
      description="We pride ourselves on creating memorable stays, reflected in our exceptional guest satisfaction and numerous accolades within the hospitality industry."
      tag="Our Achievements"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Fatima Zahra",          date: "May 2024",          title: "A Dream Vacation",          quote: "Lamar Azur Hotel offered the perfect escape. The staff were incredibly friendly and accommodating, and the facilities were pristine. We felt truly pampered!",          tag: "Family Stay",          avatarSrc: "http://img.b2bpic.net/free-photo/confident-attractive-businesswoman-ready-business_176420-19302.jpg",          avatarAlt: "Fatima Zahra avatar",          imageSrc: "http://img.b2bpic.net/free-photo/embraced-couple-bathrobes-talking-while-relaxing-bed-hotel-room_637285-7656.jpg",          imageAlt: "Couple enjoying hotel balcony view"},
        {
          id: "2",          name: "Youssef Ali",          date: "April 2024",          title: "Exceptional Service",          quote: "The attention to detail at Lamar Azur is unmatched. From check-in to check-out, every moment was seamless. Highly recommend the dining options!",          tag: "Business Trip",          avatarSrc: "http://img.b2bpic.net/free-photo/handsome-groom-classy-black-suit-stands-dark-room_8353-7083.jpg",          avatarAlt: "Youssef Ali avatar",          imageSrc: "http://img.b2bpic.net/free-photo/two-curly-multiracial-sisters-standing-near-pool-stairs-their-caucasian-mother-pool_1157-49489.jpg",          imageAlt: "Family playing by hotel pool"},
        {
          id: "3",          name: "Nour Hassan",          date: "March 2024",          title: "Relaxing Retreat",          quote: "The spa treatments were divine, and the tranquil ambiance of the entire hotel was exactly what I needed to unwind. A truly rejuvenating experience.",          tag: "Wellness Journey",          avatarSrc: "http://img.b2bpic.net/free-photo/woman-having-fun-with-friends-by-sea_23-2149347007.jpg",          avatarAlt: "Nour Hassan avatar",          imageSrc: "http://img.b2bpic.net/free-photo/view-pretty-tanned-woman-black-vintage-bikini-lies-green-sun-bed-amazing-villa-sunny-day-resting-enjoying-vacation_343596-2545.jpg",          imageAlt: "Woman relaxing at hotel spa"},
        {
          id: "4",          name: "Khaled El-Sayed",          date: "February 2024",          title: "Culinary Delights",          quote: "The food at Lamar Azur Hotel was absolutely incredible. Every meal was a delightful experience, with fresh ingredients and exquisite presentation. A foodie's paradise!",          tag: "Food Lover",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-man-cartoon-style_23-2151133862.jpg",          avatarAlt: "Khaled El-Sayed avatar",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-adult-couple-have-luxury-dinner-evening-time_146671-14526.jpg",          imageAlt: "Couple dining in a fine restaurant"},
        {
          id: "5",          name: "Eleanor V.",          date: "January 2024",          title: "Exceptional Ambiance",          quote: "The serene atmosphere and elegant design truly made my stay memorable. Every corner exudes luxury and comfort. Highly recommend!",          tag: "Solo Retreat",          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-woman-posing_23-2148497205.jpg",          avatarAlt: "happy business woman portrait smiling",          imageSrc: "http://img.b2bpic.net/free-photo/modern-sauna-interior-with-mountain-view-wood-light_169016-70841.jpg?_wi=2",          imageAlt: "happy business woman portrait smiling"
        },
      ]}
      title="Unforgettable Moments, Lasting Impressions"
      description="Hear directly from our cherished guests about their experiences at Lamar Azur Hotel. Their glowing reviews are a testament to our dedication to hospitality and luxury."
      tag="What Our Guests Say"
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What are the check-in and check-out times?",          content: "Check-in time is at 2:00 PM, and check-out time is at 12:00 PM. Early check-in or late check-out may be available upon request and subject to availability."},
        {
          id: "2",          title: "Does the hotel offer airport transfer services?",          content: "Yes, we offer airport transfer services. Please contact our concierge desk in advance to arrange your transportation needs and for pricing details."},
        {
          id: "3",          title: "Are pets allowed at Lamar Azur Hotel?",          content: "Unfortunately, for the comfort and safety of all our guests, pets are not permitted on the hotel premises."},
        {
          id: "4",          title: "Is there parking available at the hotel?",          content: "Yes, we provide complimentary on-site parking for all our guests. Valet parking services are also available."},
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Find quick answers to the most common inquiries about your stay, bookings, and hotel amenities at Lamar Azur."
      buttons={[
        {
          text: "Contact Us Directly",          href: "#contact"},
      ]}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Plan Your Escape"
      title="Book Your Unforgettable Stay at Lamar Azur Hotel"
      description="Ready to experience the pinnacle of luxury and tranquility in Damietta El-Gadeeda? Contact us today to make a reservation or inquire about our special offers and personalized packages. Our team is eager to assist you."
      buttons={[
        {
          text: "Book Now",          href: "https://www.booking.com/hotel/eg/lamar-azur"},
        {
          text: "Call Us: 015 53206100",          href: "tel:+201553206100"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Rooms & Suites",              href: "#rooms"},
            {
              label: "Amenities",              href: "#amenities"},
          ],
        },
        {
          items: [
            {
              label: "Reviews",              href: "#reviews"},
            {
              label: "FAQs",              href: "#faqs"},
            {
              label: "Special Offers",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Book Now",              href: "https://www.booking.com/hotel/eg/lamar-azur"},
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Directions",              href: "https://www.google.com/maps/dir/?api=1&destination=Lamar%20Azur%20Hotel"},
          ],
        },
      ]}
      logoText="Lamar Azur Hotel"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
