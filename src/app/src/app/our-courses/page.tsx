import Image from "next/image";
import Link from "next/link";

import coding from "@/app/assets/coding.jpg";
import design from "@/app/assets/design.jpg";
import multimedia from "@/app/assets/multimedia.jpg";

export default function OurCourses() {
  return (
    <main className="min-h-screen px-4 md:px-6 lg:px-16 py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900">
          Our Courses
        </h1>
        <p className="text-center text-lg max-w-2xl mx-auto mb-12 text-blue-700">
          Explore our hands-on, impactful courses designed to equip you with
          real-world digital skills for the Fourth Industrial Revolution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col">
            <Image
              src={coding}
              alt="Coding"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Coding & Programming
            </h2>
            <p className="text-gray-700 flex-1">
              Learn fundamental programming languages, build apps, and master the
              skills of a modern developer.
            </p>
            <Link
              href="#"
              className="mt-4 text-pink-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Course 2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col">
            <Image
              src={design}
              alt="Digital Design"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Digital Design
            </h2>
            <p className="text-gray-700 flex-1">
              Explore graphic design, UI/UX, and branding to create engaging
              digital experiences.
            </p>
            <Link
              href="#"
              className="mt-4 text-pink-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Course 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col">
            <Image
              src={multimedia}
              alt="Multimedia"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              Multimedia & Video
            </h2>
            <p className="text-gray-700 flex-1">
              Learn video production, editing, and storytelling for digital media.
            </p>
            <Link
              href="#"
              className="mt-4 text-pink-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
