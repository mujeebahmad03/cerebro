import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-neutral-300">Cerebro</h3>
            <p className="text-sm text-neutral-100">
              Empowering careers, growing businesses, driving change.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-neutral-200">For Talent</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/talent/training"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/talent/mentorship"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/talent/work-center"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  Work Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-neutral-200">
              For Business
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/business/recruitment"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  Recruitment
                </Link>
              </li>
              <li>
                <Link
                  href="/business/consulting"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/business/build-shop"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  Build Shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-neutral-200">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-neutral-100 hover:text-sky-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-100">
              &copy; {new Date().getFullYear()} Cerebro. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
              <div>
                <h5 className="font-semibold mb-2 text-neutral-200">
                  For Talent
                </h5>
                <div className="flex space-x-4">
                  <SocialLink
                    href="#"
                    icon={Twitter}
                    label="Twitter for Talent"
                  />
                  <SocialLink
                    href="#"
                    icon={LinkedIn}
                    label="LinkedIn for Talent"
                  />
                  <SocialLink
                    href="#"
                    icon={Instagram}
                    label="Instagram for Talent"
                  />
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-neutral-200">
                  For Business
                </h5>
                <div className="flex space-x-4">
                  <SocialLink
                    href="#"
                    icon={Facebook}
                    label="Facebook for Business"
                  />
                  <SocialLink
                    href="#"
                    icon={Twitter}
                    label="Twitter for Business"
                  />
                  <SocialLink
                    href="#"
                    icon={LinkedIn}
                    label="LinkedIn for Business"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="text-neutral-400 hover:text-sky-500 transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </Link>
  );
}
