import {
    Sun,
    Code,
    Zap,
    Heart,
    ChevronRight,
    Github,
    Twitter,
    Linkedin,
  } from "lucide-react";
  import Head from "next/head";
  import Image from "next/image";
  
  export default function Home() {
    return (
      <>
        <Head>
          <title>Static Webstie</title>
          <link
            rel="favicon"
            type="image/x-icon"
            href="/Icons/favicon.ico"
            sizes="any"
          />
        </Head>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <header className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col items-center text-center">
                <Sun className="w-16 h-16 text-blue-600 mb-6" />
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Beautiful Design for the Modern Web
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                  Create stunning websites with our modern design system. Built
                  with performance and user experience in mind.
                </p>
                <button className="bg-blue-600 shadow-xl text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  Get Started <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>
  
          {/* Features Section */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                  <p className="text-gray-600">
                    Optimized for speed and performance, ensuring your website
                    loads instantly.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Code className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Clean Code</h3>
                  <p className="text-gray-600">
                    Built with modern best practices and maintainable code
                    structure.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Made with Love</h3>
                  <p className="text-gray-600">
                    Crafted with attention to detail and passion for great design.
                  </p>
                </div>
              </div>
            </div>
          </section>
  
          {/* Image Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Beautiful Design That Works
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Our design system is built to be flexible and scalable,
                    perfect for any type of project. Whether you&apos;re building a
                    simple landing page or a complex web application, we&apos;ve got
                    you covered.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Responsive Design",
                      "Modern Typography",
                      "Optimized Performance",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                    alt="Modern workspace"
                    fill
                    className="rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
  
          {/* Footer */}
          <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <Sun className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-xl">LightMode</span>
                </div>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="mt-8 text-center text-gray-500">
                © 2024 LightMode. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
  