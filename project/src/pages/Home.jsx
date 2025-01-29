import React from "react";
import { Link } from "react-router-dom";
import towerImage from "../assest/equinix.png";
import {
  Heart,
  PiggyBank,
  Activity,
  Bell,
  Star,
  ArrowRight,
  PlayCircle,
  ShoppingBag,
  Pill,
  Shield,
  CreditCard,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  const services = [
    {
      icon: <PiggyBank className="h-12 w-12 text-purple-600 mb-4" />,
      title: "Healthcare Financing",
      description:
        "Get immediate access to medical care with our flexible financing solutions. Easy approval, low monthly payments.",
      link: "/loans",
    },
    {
      icon: <Pill className="h-12 w-12 text-purple-600 mb-4" />,
      title: "Pay-As-You-Go Refills",
      description:
        "Never miss your medications. Get your refills or for your loved ones now and pay in comfortable installments that fit your budget.",
      link: "/refills",
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600 mb-4" />,
      title: "Affordable HMO Plans",
      description:
        "Secure your health with our monthly subscription plans. Comprehensive coverage starting from just $29.99/month.",
      link: "/hmo",
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-purple-600 mb-4" />,
      title: "Health Store",
      description:
        "Shop premium health products and supplements with flexible payment plans. Buy now, pay gradually.",
      link: "/shop",
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-purple-600 mb-4" />,
      title: "Wellness Guide",
      description:
        "Get personalized medication and wellness advice from our AI-powered health assistant. Track your progress daily.",
      link: "/wellness",
    },
    {
      icon: <Bell className="h-12 w-12 text-purple-600 mb-4" />,
      title: "Medication Reminders",
      description: "Never miss a dose with our smart reminder system.",
      link: "/reminders",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      quote:
        "HealthyPay made it possible for me to get the treatment I needed without financial stress.",
    },
    {
      name: "Michael Chen",
      role: "Healthcare Provider",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      quote:
        "The platform has revolutionized how we handle patient financing and care management.",
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      quote:
        "The medication reminder feature has been a game-changer for managing my health.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h1
              className="text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Health Journey,{" "}
              <span className="text-purple-600">Financially Secured</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Access quality healthcare without financial stress. Flexible
              payment plans for medications, health coverage, and wellness
              products.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                to="/loans"
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors flex items-center group">
                Watch Demo
                <PlayCircle className="ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Healthcare Professional"
              className="rounded-2xl shadow-2xl"
            />
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    98% Success Rate
                  </p>
                  <p className="text-sm text-gray-600">in Patient Care</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-900 mb-8">
            Trusted by leading Partners all Over the World
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={towerImage}
                  alt={`Partner ${i}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to make quality
            healthcare accessible and affordable for everyone.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              // variants={cardHoverVariants}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-purple-600 hover:text-purple-700 group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/loans"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors flex items-center group">
            Watch Demo
            <PlayCircle className="ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Success Stories */}
      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped our clients achieve better health outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80`}
                  alt={`Success Story ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Thanks to HealthyPay, I was able to get the treatment I
                    needed without financial stress."
                  </p>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-600">Patient</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from those who've experienced our service firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Partnership"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Healthcare Partners</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Become our Partner or Sponsor
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our network of Partners and help make quality healthcare
                accessible to every one. Together, we can create better health
                outcomes.
              </p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center">
                Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
